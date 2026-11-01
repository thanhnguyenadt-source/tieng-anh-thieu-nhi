/* Anki từ vựng lũy kế chuẩn Anki 100% (giao diện & tính năng bộ 4000 Essential English Words)
   - Quỹ từ cần ôn: Luỹ kế từ bài đầu tiên (1.1A) đến bài học hiện tại (ví dụ 1.2B).
   - Từ mới (🔵 Xanh): Các từ thuộc riêng bài học đang học chưa học.
   - Từ cũ:
     + Đang học (🔴 Đỏ): Các từ lũy kế đang trong quá trình học lại / lặp lại.
     + Đến hạn (🟢 Xanh lá): Các từ lũy kế đã học đến hạn ôn hôm nay theo SM-2.
   - Giao diện: Chuẩn 100% theo giao diện máy tính Anki:
     + Thanh điều hướng: Decks | Add | Browse | Stats | Sync + Tên bộ thẻ (Deck title)
     + Cột trái: Nghĩa tiếng Việt (xanh dương) -> Gợi ý ký tự (đỏ) -> Định nghĩa khuyết [...] -> Câu ví dụ khuyết [...] (kèm dịch câu)
     + Cột phải: Ô gõ viền cam bo tròn -> Hình ảnh / minh họa của từ
     + Thanh đáy: [Edit] | Bộ đếm (Xanh + Đỏ + Xanh lá) + Nút [Show Answer (Space)] hoặc 4 nút SM-2 | [More ▾]
     + Mặt sau: So sánh đối chiếu từng ký tự đã gõ (Diff xanh/đỏ), tự động phát âm chuỗi, hiển thị từ gốc + phiên âm IPA + từ loại + câu hoàn chỉnh.
*/
(function (root) {
  'use strict';
  var CFG = root.ANKI_CONFIG || {};
  var P = CFG.prefix || 'kids_anki_';
  var APP = CFG.app || 'kids-anki';
  var DAY = 86400000, MIN5 = 300000;

  /* ---------- Lưu trữ qua CourseStore & SRS ---------- */
  var CS = root.CourseStore, SRS = root.SRS;
  if (!CS) throw new Error('anki_engine: thiếu window.CourseStore');
  if (!SRS) throw new Error('anki_engine: thiếu window.SRS');

  var sm2 = SRS.sm2, newCard = SRS.newCard, intervalLabel = SRS.intervalLabel;

  function ckey(id, type) { return type === 'A' ? id : id + '#' + (type || 'B'); }
  function splitKey(k) {
    var i = k.indexOf('#');
    return i < 0 ? { id: k, type: 'A' } : { id: k.slice(0, i), type: k.slice(i + 1) };
  }

  /* ---------- Dữ liệu từ khóa học ---------- */
  var RAW = root[CFG.dataName || 'KIDS_ANKI_WORDS'] || { lessons: [], words: [] };
  var MAP = CFG.map || function (w) { return w; };
  var WORDS = [];
  var WORD_BY_ID = {};
  var LESSON_ORDER = {};

  (RAW.lessons || []).forEach(function (l, i) { LESSON_ORDER[l.id] = i; });
  (RAW.words || []).forEach(function (r) {
    var w = MAP(r);
    // Chuẩn hóa nghĩa cho từ thông dụng nếu bị nhầm từ loại
    if (w.text === 'room' && w.vi === 'ở chung phòng') { w.vi = 'căn phòng'; w.pos = 'noun'; }
    WORDS.push(w);
    WORD_BY_ID[w.id] = w;
  });

  function lessonOf(id) { return (RAW.lessons || [])[LESSON_ORDER[id]]; }
  function wordsOfLesson(id) { return WORDS.filter(function (w) { return w.lesson === id; }); }

  /* ---------- Trạng thái người dùng ---------- */
  var cards = CS.cards();
  var opened = CS.ankiOpened();
  var limit = parseInt(CS.setting('anki.limit', 20), 10);
  if (!(limit >= 0 && limit <= 500)) limit = 20;
  var rateName = CS.setting('anki.rate', 'slow') === 'normal' ? 'normal' : 'slow';
  var RATES = { slow: CFG.rateSlow || 0.72, normal: CFG.rateNormal || 0.92 };

  function save() { CS.replaceCards(cards); }

  function isLooked(id, now) {
    var t = CS.looked()[id];
    return !!t && ((now === undefined ? Date.now() : now) - t < 7 * DAY);
  }
  function markLooked(id) {
    if (!WORD_BY_ID[id]) return;
    CS.markLooked(id);
  }

  function highestOpened() {
    var best = -1, id = null;
    opened.forEach(function (x) {
      if (LESSON_ORDER[x] !== undefined && LESSON_ORDER[x] > best) {
        best = LESSON_ORDER[x];
        id = x;
      }
    });
    return id;
  }

  /* Xác định bài học hiện tại đang xem trên màn hình */
  function currentActiveLessonId() {
    var c = CS.setting('anki.cursor', 'auto');
    if (c !== 'auto' && LESSON_ORDER[c] !== undefined) return c;
    if (root.APPKIT_ADAPTER && root.APPKIT_ADAPTER.current) {
      try {
        var cur = root.APPKIT_ADAPTER.current();
        if (cur && cur.lessonId && LESSON_ORDER[cur.lessonId] !== undefined) return cur.lessonId;
      } catch (e) {}
    }
    if (typeof root.getLesson === 'function') {
      try {
        var gl = root.getLesson();
        if (gl && gl.id && LESSON_ORDER[gl.id] !== undefined) return gl.id;
      } catch (e) {}
    }
    return highestOpened() || ((RAW.lessons || [])[0] && RAW.lessons[0].id) || '1.1A';
  }

  function cursorIndex() {
    var id = currentActiveLessonId();
    return id === null ? -1 : LESSON_ORDER[id];
  }

  function markOpened(id) {
    if (LESSON_ORDER[id] === undefined) return;
    if (opened.indexOf(id) < 0) {
      opened.push(id);
      CS.setAnkiOpened(opened);
    }
    refreshPanel();
  }

  function wordsUpTo(idx) {
    return WORDS.filter(function (w) { return LESSON_ORDER[w.lesson] <= idx; });
  }

  /* Số đếm chuẩn Anki:
     - Quỹ từ lũy kế đến bài đang học
     - Từ mới: thuộc riêng bài đang học (w.lesson === curLesson)
     - Đang học (Learning): các từ đang học lại trong buổi
     - Đến hạn (Due): các từ đã học đến hạn ôn hôm nay
  */
  function counts(now) {
    now = now === undefined ? Date.now() : now;
    var curLesson = currentActiveLessonId();
    var idx = cursorIndex();
    var ws = wordsUpTo(idx);
    var nNew = 0, nDue = 0, nLearning = 0, nKnown = 0;

    ws.forEach(function (w) {
      var k = ckey(w.id, 'B');
      var c = cards[k];
      if (w.lesson === curLesson) {
        if (!c || c.status === 'new') nNew++;
      }
      if (c) {
        if (c.status === 'learning') {
          nLearning++;
        } else if (c.status === 'review') {
          if (c.due <= now) nDue++;
          else nKnown++;
        }
      }
    });

    return {
      new: nNew,
      due: nDue,
      learning: nLearning,
      known: nKnown,
      total: ws.length,
      lessonId: curLesson,
      words: ws.length
    };
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }
  function introducedToday() {
    var d = CS.setting('anki.daily', {});
    return d && d.date === today() ? (d.n || 0) : 0;
  }
  function addIntroduced(k) {
    CS.setSetting('anki.daily', { date: today(), n: introducedToday() + k });
  }

  /* Tạo hàng đợi ôn chuẩn Anki:
     1. Các thẻ đang học (Learning / Relearning)
     2. Các thẻ đến hạn ôn hôm nay (Due reviews)
     3. Các thẻ mới của riêng bài đang học
  */
  function buildQueue(now) {
    now = now === undefined ? Date.now() : now;
    var curLesson = currentActiveLessonId();
    var idx = cursorIndex();
    var ws = wordsUpTo(idx);
    var learnList = [], dueList = [], freshList = [];

    ws.forEach(function (w) {
      var k = ckey(w.id, 'B');
      var c = cards[k];
      if (c && c.status === 'learning') {
        learnList.push(k);
      } else if (c && c.status === 'review' && c.due <= now) {
        dueList.push(k);
      } else if ((!c || c.status === 'new') && w.lesson === curLesson) {
        freshList.push(k);
      }
    });

    // Ưu tiên từ vừa tra nghĩa lên đầu
    dueList.sort(function (a, b) {
      var la = isLooked(splitKey(a).id, now) ? 0 : 1;
      var lb = isLooked(splitKey(b).id, now) ? 0 : 1;
      return la - lb || (cards[a].due - cards[b].due);
    });
    freshList.sort(function (a, b) {
      var la = isLooked(splitKey(a).id, now) ? 0 : 1;
      var lb = isLooked(splitKey(b).id, now) ? 0 : 1;
      return la - lb;
    });

    return learnList.concat(dueList).concat(freshList);
  }

  /* ---------- Tiện ích định nghĩa & Cloze ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var STAGE1_DEFS = {
    'kitchen': 'A kitchen is a room in a house where food is cooked and prepared.',
    'room': 'A room is a part of the inside of a building that is divided off by walls.',
    'door': 'A door is a movable barrier that opens and closes to enter a room.',
    'sleep': 'To sleep means to rest your body and mind with your eyes closed in bed.',
    'big': 'Something that is big is large in size, amount, or strength.',
    'open': 'To open means to move something so that an entrance is not closed.',
    'where': 'We use where to ask or talk about the location or place of something.',
    'mom': 'A mom is a female parent who loves and takes care of her children.',
    'dad': 'A dad is a male parent who loves and takes care of his children.',
    'sister': 'A sister is a girl or woman who shares the same parents as you.',
    'grandma': 'A grandma is the mother of your father or mother.',
    'love': 'To love means to have strong feelings of affection and care for someone.',
    'water': 'Water is a clear liquid that people and animals need to drink to live.',
    'bed': 'A bed is a piece of furniture that you lie on to rest or sleep.',
    'this': 'We use this to refer to a person, thing, or idea that is close to us.',
    'who': 'We use who to ask about the identity of a person.',
    'happy': 'Feeling or showing pleasure, joy, or contentment.',
    'sad': 'Feeling sorrowful, unhappy, or full of grief.',
    'cat': 'A cat is a small furry animal often kept as a pet.',
    'car': 'A car is a motor vehicle with four wheels used for driving.',
    'apple': 'An apple is a round sweet fruit with red, green, or yellow skin.',
    'hand': 'A hand is the part of your body at the end of each arm with fingers.',
    'eye': 'An eye is the organ of sight that you see things with.'
  };

  function getLearnerDef(w) {
    if (w.def && w.def.trim()) return w.def;
    var low = String(w.text || '').toLowerCase();
    if (STAGE1_DEFS[low]) return STAGE1_DEFS[low];
    var pos = w.pos || 'noun';
    var vi = w.vi || '';
    if (pos === 'verb') return 'To ' + w.text + ' means to perform the action of ' + vi + '.';
    if (pos === 'adj') return 'Something that is ' + w.text + ' has the quality of ' + vi + '.';
    if (pos === 'noun') return 'A ' + w.text + ' is a person, place, or thing meaning: ' + vi + '.';
    return 'The word ' + w.text + ' is used when expressing: ' + vi + '.';
  }

  function makeLetterHint(word) {
    var w = String(word || '').trim();
    if (!w) return '';
    var chars = w.split('');
    var len = chars.length;
    if (len <= 3) return chars.map(function (c, i) { return i === 0 ? c : '_'; }).join(' ');
    if (len <= 5) return chars.map(function (c, i) { return (i === 0 || i === 2) ? c : '_'; }).join(' ');
    return chars.map(function (c, i) { return (i === 0 || i === 2) ? c : '_'; }).join(' ');
  }

  function makeCloze(text, word, forms) {
    if (!text) return '';
    var allForms = [word].concat(forms || []).filter(Boolean).sort(function (a, b) { return b.length - a.length; });
    var res = String(text);
    for (var i = 0; i < allForms.length; i++) {
      var f = allForms[i];
      var re = new RegExp('\\b' + f + '\\b', 'gi');
      if (re.test(res)) {
        return res.replace(re, '<span class="anki-cloze-bracket">[...]</span>');
      }
    }
    for (var j = 0; j < allForms.length; j++) {
      var f2 = allForms[j];
      var idx = res.toLowerCase().indexOf(f2.toLowerCase());
      if (idx >= 0) {
        return res.slice(0, idx) + '<span class="anki-cloze-bracket">[...]</span>' + res.slice(idx + f2.length);
      }
    }
    return res;
  }

  function fillCloze(text, word, forms) {
    if (!text) return '';
    var allForms = [word].concat(forms || []).filter(Boolean).sort(function (a, b) { return b.length - a.length; });
    var res = String(text);
    for (var i = 0; i < allForms.length; i++) {
      var f = allForms[i];
      var re = new RegExp('\\b' + f + '\\b', 'gi');
      if (re.test(res)) {
        return res.replace(re, '<b class="anki-hl">' + esc(f) + '</b>');
      }
    }
    return esc(res);
  }

  function diffWord(typed, actual) {
    typed = String(typed || '').trim().toLowerCase();
    actual = String(actual || '').trim().toLowerCase();
    if (!typed) {
      return '<span class="anki-diff-miss">' + esc(actual) + '</span>';
    }
    if (typed === actual) {
      return '<span class="anki-diff-ok">' + esc(actual) + '</span>';
    }
    var html = '';
    var maxL = Math.max(typed.length, actual.length);
    for (var i = 0; i < maxL; i++) {
      var t = typed[i], a = actual[i];
      if (t === a) {
        html += '<span class="anki-diff-ok">' + esc(t) + '</span>';
      } else if (t && !a) {
        html += '<span class="anki-diff-extra">' + esc(t) + '</span>';
      } else if (!t && a) {
        html += '<span class="anki-diff-miss">' + esc(a) + '</span>';
      } else {
        html += '<span class="anki-diff-bad">' + esc(t) + '</span><span class="anki-diff-miss">' + esc(a) + '</span>';
      }
    }
    return html;
  }

  function resolveSentenceVi(ex, w) {
    if (ex && ex.vi && ex.vi.trim()) return ex.vi;
    var txt = (ex && (ex.t || ex.en)) || '';
    if (!txt) return '';
    if (root.AppKit && root.AppKit.translateSentenceText) {
      var tr = root.AppKit.translateSentenceText(txt);
      if (tr) return tr.replace(/^👉\s*/, '');
    }
    return '';
  }

  /* ---------- Phát âm âm thanh ---------- */
  var chainToken = 0;
  function synth() { return root.speechSynthesis || null; }
  function pickVoice(langs) {
    var s = synth(); if (!s || !s.getVoices) return null;
    var vs = s.getVoices() || [], i, v;
    for (i = 0; i < langs.length; i++) {
      v = vs.filter(function (x) { return String(x.lang).replace('_', '-').toLowerCase() === langs[i].toLowerCase(); })[0];
      if (v) return v;
    }
    for (i = 0; i < langs.length; i++) {
      v = vs.filter(function (x) { return String(x.lang).toLowerCase().indexOf(langs[i].slice(0, 2).toLowerCase()) === 0; })[0];
      if (v) return v;
    }
    return null;
  }
  function speakPart(text, langs) {
    var sp = root.AppKit && root.AppKit.playSprite ? root.AppKit.playSprite(text, RATES[rateName]) : null;
    if (sp) return sp.then(function (ok) { return ok ? null : speakBrowserPart(text, langs); });
    return speakBrowserPart(text, langs);
  }
  function speakBrowserPart(text, langs) {
    return new Promise(function (resolve) {
      var s = synth(); if (!s || !text) { resolve(); return; }
      var done = false, fin = function () { if (!done) { done = true; resolve(); } };
      try {
        var u = new root.SpeechSynthesisUtterance(text), v = pickVoice(langs);
        if (v) u.voice = v;
        u.lang = v ? v.lang : langs[0];
        u.rate = RATES[rateName];
        u.onend = fin; u.onerror = fin;
        s.speak(u);
      } catch (e) { fin(); return; }
      setTimeout(fin, Math.max(2500, String(text).length * 450) + 1500);
    });
  }
  function pause(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function stopSpeech() {
    chainToken++;
    try { if (root.AppKit && root.AppKit.stopSprite) root.AppKit.stopSprite(); } catch (e) {}
    try { var s = synth(); if (s && s.cancel) s.cancel(); } catch (e) {}
  }
  function playChain(w, parts) {
    parts = parts || ['word', 'def', 'ex'];
    var tok = ++chainToken;
    var langs = CFG.voiceLangs || ['en-US', 'en-GB'];
    stopSpeech();
    var items = [];
    if (parts.indexOf('word') >= 0 && w.text) items.push(w.text);
    if (parts.indexOf('def') >= 0) {
      var d = getLearnerDef(w);
      if (d) items.push(d);
    }
    if (parts.indexOf('ex') >= 0 && w.ex && (w.ex.t || w.ex.en)) {
      items.push(w.ex.t || w.ex.en);
    }
    var p = Promise.resolve();
    items.forEach(function (it, idx) {
      p = p.then(function () { return tok === chainToken ? speakPart(it, langs) : null; })
           .then(function () { return idx < items.length - 1 && tok === chainToken ? pause(800) : null; });
    });
    return p;
  }

  /* ---------- Giao diện Anki 100% (CSS hoàn chỉnh) ---------- */
  var CSS = [
    '/* Anki 100% Theme */',
    '.anki-panel { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.14); border-radius: 14px; padding: 12px; margin: 10px 0; color: #e2e8f0; font-family: inherit; }',
    '.anki-panel h4 { margin: 0 0 8px; font-size: 12px; letter-spacing: .04em; color: #fde68a; font-weight: 800; display: flex; align-items: center; gap: 6px; }',
    '.anki-nums { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; text-align: center; }',
    '.anki-nums div { border-radius: 10px; padding: 6px 2px; font-size: 10px; line-height: 1.25; font-weight: 600; }',
    '.anki-nums b { display: block; font-size: 20px; font-weight: 800; }',
    '.anki-n { background: #1d4ed8; color: #fff; }',
    '.anki-d { background: #dc2626; color: #fff; }',
    '.anki-k { background: #15803d; color: #fff; }',
    '.anki-go { width: 100%; margin-top: 8px; padding: 10px; border: 0; border-radius: 10px; background: #f59e0b; color: #1e293b; font-weight: 800; cursor: pointer; font-size: 13px; box-shadow: 0 2px 6px rgba(245,158,11,.3); }',
    '.anki-go:disabled { opacity: .5; cursor: default; }',
    '.anki-row { display: flex; gap: 6px; margin-top: 6px; }',
    '.anki-row button { flex: 1; padding: 7px 4px; border: 0; border-radius: 8px; background: rgba(255,255,255,.14); color: #e2e8f0; cursor: pointer; font-size: 11px; font-weight: 600; }',
    '.anki-small { margin-top: 6px; font-size: 10px; color: #94a3b8; line-height: 1.35; }',

    '/* Anki Desktop Window Modal */',
    '.anki-back { position: fixed; inset: 0; background: rgba(15,23,42,.78); backdrop-filter: blur(4px); display: none; align-items: center; justify-content: center; z-index: 99999; padding: 16px; overflow: auto; }',
    '.anki-back.open { display: flex; }',
    '.anki-window { background: #ffffff; color: #0f172a; border-radius: 16px; max-width: 980px; width: 100%; min-height: 560px; box-shadow: 0 25px 80px rgba(0,0,0,.45); display: flex; flex-direction: column; overflow: hidden; position: relative; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }',

    '/* Top Navigation Bar */',
    '.anki-top-nav { background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 10px 20px; display: flex; flex-direction: column; align-items: center; position: relative; }',
    '.anki-nav-links { display: flex; gap: 28px; font-size: 14px; font-weight: 500; color: #475569; }',
    '.anki-nav-link { cursor: pointer; padding: 2px 4px; border-radius: 4px; text-decoration: none; color: inherit; }',
    '.anki-nav-link:hover { color: #0284c7; }',
    '.anki-nav-link.sync { color: #0284c7; font-weight: 600; }',
    '.anki-deck-subtitle { margin-top: 4px; font-size: 12px; color: #64748b; font-weight: 500; text-align: center; }',
    '.anki-close-x { position: absolute; right: 14px; top: 12px; background: none; border: 0; font-size: 20px; color: #94a3b8; cursor: pointer; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 6px; }',
    '.anki-close-x:hover { color: #0f172a; background: #e2e8f0; }',

    '/* Card Body (2 Columns like 4000 Essential English Words) */',
    '.anki-card-body { flex: 1; display: flex; gap: 40px; padding: 36px 44px; align-items: flex-start; justify-content: center; }',
    '.anki-col-left { flex: 1; max-width: 520px; text-align: left; }',
    '.anki-col-right { flex: 1; max-width: 360px; display: flex; flex-direction: column; align-items: center; }',

    '/* Left Column Typography */',
    '.anki-vi-title { color: #1d4ed8; font-size: 22px; font-weight: 600; line-height: 1.35; margin-bottom: 12px; word-break: break-word; }',
    '.anki-letter-hint { color: #dc2626; font-size: 26px; font-weight: 700; letter-spacing: 0.18em; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; margin-bottom: 16px; min-height: 34px; }',
    '.anki-target-word-line { margin-bottom: 16px; min-height: 34px; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }',
    '.anki-target-word { font-size: 28px; font-weight: 800; color: #0f172a; }',
    '.anki-target-ipa { font-size: 18px; color: #64748b; font-weight: 500; }',
    '.anki-target-pos { font-size: 13px; color: #94a3b8; font-style: italic; background: #f1f5f9; padding: 2px 8px; border-radius: 99px; }',

    '.anki-def-line { font-size: 16px; color: #1e293b; line-height: 1.55; margin-bottom: 12px; }',
    '.anki-ex-line { font-size: 16px; color: #334155; line-height: 1.55; margin-bottom: 4px; }',
    '.anki-ex-vi { font-size: 14px; color: #64748b; font-style: italic; margin-left: 20px; margin-bottom: 18px; }',

    '.anki-cloze-bracket { color: #1d4ed8; font-weight: 700; padding: 0 2px; }',
    '.anki-hl { background: #fef08a; color: #0f172a; padding: 1px 4px; border-radius: 4px; font-weight: 800; }',

    '.anki-audio-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }',
    '.anki-audio-btn { background: #e0e7ff; color: #3730a3; border: 0; border-radius: 8px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: background .15s; }',
    '.anki-audio-btn:hover { background: #c7d2fe; }',

    '/* Right Column: Input & Illustration */',
    '.anki-input-box { width: 100%; max-width: 320px; border: 2.5px solid #f59e0b; border-radius: 12px; padding: 10px 14px; font-size: 20px; text-align: center; color: #0f172a; outline: none; margin-bottom: 16px; box-sizing: border-box; background: #fff; box-shadow: 0 2px 8px rgba(245,158,11,.15); transition: border-color .2s; }',
    '.anki-input-box:focus { border-color: #ea580c; }',

    '.anki-diff-box { width: 100%; max-width: 320px; border-radius: 12px; padding: 10px 14px; font-size: 22px; font-weight: 700; text-align: center; margin-bottom: 16px; box-sizing: border-box; background: #f8fafc; border: 2px solid #cbd5e1; }',
    '.anki-diff-ok { color: #16a34a; font-weight: 800; }',
    '.anki-diff-bad { color: #dc2626; text-decoration: line-through; margin: 0 1px; }',
    '.anki-diff-miss { color: #64748b; opacity: .7; margin: 0 1px; }',
    '.anki-diff-extra { color: #dc2626; text-decoration: line-through; }',

    '.anki-img-card { width: 100%; max-width: 320px; height: 230px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 96px; box-shadow: 0 2px 10px rgba(0,0,0,.04); overflow: hidden; position: relative; user-select: none; }',

    '/* Bottom Footer Bar */',
    '.anki-footer-bar { border-top: 1px solid #e2e8f0; padding: 12px 24px; background: #fff; display: flex; align-items: center; justify-content: space-between; }',
    '.anki-pill-btn { border: 1px solid #cbd5e1; background: #fff; color: #334155; border-radius: 999px; padding: 6px 18px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .15s; }',
    '.anki-pill-btn:hover { background: #f1f5f9; border-color: #94a3b8; }',

    '.anki-center-actions { display: flex; flex-direction: column; align-items: center; gap: 6px; }',
    '.anki-counter-line { font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 8px; letter-spacing: .02em; }',
    '.c-new { color: #0284c7; }',
    '.c-learn { color: #dc2626; }',
    '.c-due { color: #16a34a; }',

    '.anki-btn-show { border: 1px solid #cbd5e1; background: #fff; color: #0f172a; border-radius: 999px; padding: 7px 32px; font-size: 14px; font-weight: 700; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,.06); transition: all .15s; }',
    '.anki-btn-show:hover { background: #f8fafc; border-color: #94a3b8; box-shadow: 0 2px 6px rgba(0,0,0,.1); }',

    '.anki-grades-grid { display: flex; gap: 10px; }',
    '.anki-grade-btn { border: 1px solid #e2e8f0; border-radius: 10px; padding: 6px 16px; font-size: 13px; cursor: pointer; text-align: center; color: #fff; font-weight: 700; min-width: 78px; transition: transform .1s, opacity .15s; }',
    '.anki-grade-btn:hover { transform: translateY(-1px); }',
    '.anki-grade-btn small { display: block; font-size: 11px; font-weight: 500; opacity: .85; }',
    '.g-again { background: #dc2626; border-color: #b91c1c; }',
    '.g-hard { background: #ea580c; border-color: #c2410c; }',
    '.g-good { background: #16a34a; border-color: #15803d; }',
    '.g-easy { background: #0284c7; border-color: #0369a1; }',

    '/* Responsive */',
    '@media(max-width: 720px) {',
    '  .anki-card-body { flex-direction: column; padding: 20px; gap: 20px; align-items: stretch; }',
    '  .anki-col-left, .anki-col-right { max-width: 100%; }',
    '  .anki-img-card { height: 180px; font-size: 72px; }',
    '  .anki-grades-grid { flex-wrap: wrap; justify-content: center; }',
    '}'
  ].join('\n');

  function injectCSS() {
    if (document.getElementById('ankiCss')) return;
    var st = document.createElement('style');
    st.id = 'ankiCss';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ---------- Sidebar UI ---------- */
  var panelEl = null, modalEl = null, session = null;

  function buildPanel() {
    injectCSS();
    var sb = document.querySelector(CFG.sidebar || '.left-sidebar');
    if (!sb || document.getElementById('ankiPanel')) return;

    panelEl = document.createElement('div');
    panelEl.className = 'anki-panel';
    panelEl.id = 'ankiPanel';
    panelEl.innerHTML = [
      '<h4>🗂️ ANKI TỪ VỰNG LŨY KẾ</h4>',
      '<div class="anki-nums">',
      '  <div class="anki-n"><b id="ankiNew">0</b>Từ mới</div>',
      '  <div class="anki-d"><b id="ankiDue">0</b>Đang học</div>',
      '  <div class="anki-k"><b id="ankiKnown">0</b>Đến hạn</div>',
      '</div>',
      '<button class="anki-go" id="ankiGo" type="button">🚀 Vào Ôn Anki Hôm Nay</button>',
      '<div class="anki-row">',
      '  <button type="button" id="ankiBrowse">📚 Duyệt thẻ</button>',
      '  <button type="button" id="ankiSync">🔄 Đồng bộ</button>',
      '</div>',
      '<div class="anki-small" id="ankiInfo"></div>'
    ].join('');

    var anchor = sb.querySelector(CFG.anchor || '.speed-row');
    if (anchor) sb.insertBefore(panelEl, anchor);
    else sb.appendChild(panelEl);

    panelEl.querySelector('#ankiGo').addEventListener('click', openSession);
    panelEl.querySelector('#ankiBrowse').addEventListener('click', openBrowse);
    panelEl.querySelector('#ankiSync').addEventListener('click', function () {
      save();
      refreshPanel();
      alert('Đã đồng bộ thẻ Anki với hệ thống!');
    });

    refreshPanel();
  }

  function refreshPanel() {
    if (!panelEl) return;
    var c = counts();
    var curLesson = currentActiveLessonId();
    var lObj = lessonOf(curLesson);

    panelEl.querySelector('#ankiNew').textContent = c.new;
    panelEl.querySelector('#ankiDue').textContent = c.learning;
    panelEl.querySelector('#ankiKnown').textContent = c.due;

    panelEl.querySelector('#ankiInfo').textContent =
      'Bài hiện tại: ' + esc(curLesson) + ' (' + c.new + ' từ mới). Quỹ từ tích lũy tới bài này: ' + c.total + ' từ.';
    panelEl.querySelector('#ankiGo').disabled = (c.total === 0);
  }

  /* ---------- Modal Ôn Tập Anki 100% ---------- */
  function ensureModal() {
    if (modalEl) return;
    modalEl = document.createElement('div');
    modalEl.className = 'anki-back';
    modalEl.id = 'ankiModal';
    modalEl.setAttribute('role', 'dialog');
    modalEl.setAttribute('aria-modal', 'true');
    modalEl.setAttribute('aria-label', 'Ôn tập Anki');
    modalEl.addEventListener('click', function (e) {
      if (e.target === modalEl) closeSession();
    });
    document.body.appendChild(modalEl);
    document.addEventListener('keydown', onKey);
  }

  function openSession() {
    ensureModal();
    session = {
      mode: 'review',
      queue: buildQueue(),
      pos: 0,
      face: 'front',
      typed: '',
      done: 0,
      again: 0
    };
    modalEl.classList.add('open');
    render();
  }

  function closeSession() {
    stopSpeech();
    if (modalEl) modalEl.classList.remove('open');
    session = null;
    refreshPanel();
  }

  function curKey() {
    return session && session.queue && session.queue[session.pos];
  }
  function curWord() {
    var k = curKey();
    return k ? WORD_BY_ID[splitKey(k).id] : null;
  }

  function render() {
    if (!session) return;
    if (session.mode === 'browse') return renderBrowse();

    var w = curWord();
    var c = counts();
    var curLesson = currentActiveLessonId();
    var lObj = lessonOf(curLesson);
    var deckTitle = 'Tiếng Anh Thiếu Nhi · ' + (lObj ? (lObj.name || lObj.id) : ('Bài ' + curLesson));

    var h = '<div class="anki-window">';

    // Top Navigation
    h += '<div class="anki-top-nav">' +
      '<div class="anki-nav-links">' +
      '  <a class="anki-nav-link" id="navDecks">Decks</a>' +
      '  <a class="anki-nav-link" id="navAdd">Add</a>' +
      '  <a class="anki-nav-link" id="navBrowse">Browse</a>' +
      '  <a class="anki-nav-link" id="navStats">Stats</a>' +
      '  <a class="anki-nav-link sync" id="navSync">Sync</a>' +
      '</div>' +
      '<div class="anki-deck-subtitle">' + esc(deckTitle) + '</div>' +
      '<button class="anki-close-x" id="ankiClose" title="Đóng">✕</button>' +
      '</div>';

    if (!w) {
      // Completed Queue
      h += '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;">' +
        '<div style="font-size:64px;margin-bottom:12px">🎉</div>' +
        '<h2 style="font-size:24px;font-weight:800;color:#0f172a;margin:0 0 8px">Chúc mừng bạn đã hoàn thành bài ôn hôm nay!</h2>' +
        '<p style="color:#64748b;max-width:480px;line-height:1.5">Bạn đã ôn xong <b>' + session.done + '</b> lượt thẻ. Quỹ từ tích lũy bài ' + esc(curLesson) + ' hiện có ' + c.total + ' từ.</p>' +
        '<button type="button" class="anki-pill-btn" id="ankiFinishClose" style="margin-top:20px;padding:8px 24px">Quay lại bài học</button>' +
        '</div></div>';
      modalEl.innerHTML = h;
      bindEvents();
      return;
    }

    // 2-Column Card Body
    var defText = getLearnerDef(w);
    var exText = (w.ex && (w.ex.t || w.ex.en)) || '';
    var exVi = resolveSentenceVi(w.ex, w);

    h += '<div class="anki-card-body">';

    // Left Column
    h += '<div class="anki-col-left">';
    h += '<div class="anki-vi-title">' + esc(w.vi || '') + '</div>';

    if (session.face === 'front') {
      h += '<div class="anki-letter-hint">' + esc(makeLetterHint(w.text)) + '</div>';
      h += '<div class="anki-def-line">' + makeCloze(defText, w.text, w.forms) + '</div>';
      if (exText) {
        h += '<div class="anki-ex-line">→ ' + makeCloze(exText, w.text, w.forms) + '</div>';
        if (exVi) h += '<div class="anki-ex-vi">(👉 ' + esc(exVi) + ')</div>';
      }
    } else {
      // Back face
      h += '<div class="anki-target-word-line">' +
        '<span class="anki-target-word">' + esc(w.text) + '</span>' +
        '<span class="anki-target-ipa">' + esc(w.read || '') + '</span>' +
        '<span class="anki-target-pos">' + esc(w.pos || '') + '</span>' +
        '</div>';
      h += '<div class="anki-def-line">' + fillCloze(defText, w.text, w.forms) + '</div>';
      if (exText) {
        h += '<div class="anki-ex-line">→ ' + fillCloze(exText, w.text, w.forms) + '</div>';
        if (exVi) h += '<div class="anki-ex-vi">(👉 ' + esc(exVi) + ')</div>';
      }
      h += '<div class="anki-audio-row">' +
        '<button type="button" class="anki-audio-btn" data-play="word">🔊 Từ</button>' +
        '<button type="button" class="anki-audio-btn" data-play="def">🔊 Định nghĩa</button>' +
        '<button type="button" class="anki-audio-btn" data-play="ex">🔊 Ví dụ</button>' +
        '<button type="button" class="anki-audio-btn" data-play="all">▶ Cả chuỗi</button>' +
        '</div>';
    }
    h += '</div>';

    // Right Column
    h += '<div class="anki-col-right">';
    if (session.face === 'front') {
      h += '<input type="text" id="ankiTyped" class="anki-input-box" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="" autofocus />';
    } else {
      h += '<div class="anki-diff-box">' + diffWord(session.typed, w.text) + '</div>';
    }
    h += '<div class="anki-img-card">' + esc(w.ico || '🔤') + '</div>';
    h += '</div>'; // end col-right

    h += '</div>'; // end card-body

    // Bottom Footer
    h += '<div class="anki-footer-bar">' +
      '<button type="button" class="anki-pill-btn" id="ankiEdit">Edit</button>' +
      '<div class="anki-center-actions">' +
      '  <div class="anki-counter-line">' +
      '    <span class="c-new">' + c.new + '</span> + ' +
      '    <span class="c-learn">' + c.learning + '</span> + ' +
      '    <span class="c-due">' + c.due + '</span>' +
      '  </div>';

    if (session.face === 'front') {
      h += '<button type="button" class="anki-btn-show" id="ankiShow">Show Answer (Space)</button>';
    } else {
      var c0 = cards[curKey()] || newCard();
      h += '<div class="anki-grades-grid">' +
        '<button type="button" class="anki-grade-btn g-again" data-g="1">Again<small>&lt; 10m [1]</small></button>' +
        '<button type="button" class="anki-grade-btn g-hard" data-g="2">Hard<small>' + intervalLabel(c0, 2) + ' [2]</small></button>' +
        '<button type="button" class="anki-grade-btn g-good" data-g="3">Good<small>' + intervalLabel(c0, 3) + ' [3]</small></button>' +
        '<button type="button" class="anki-grade-btn g-easy" data-g="4">Easy<small>' + intervalLabel(c0, 4) + ' [4]</small></button>' +
        '</div>';
    }
    h += '</div>' +
      '<button type="button" class="anki-pill-btn" id="ankiMore">More ▾</button>' +
      '</div>';

    h += '</div>'; // end anki-window
    modalEl.innerHTML = h;

    bindEvents();

    if (session.face === 'front') {
      var inp = modalEl.querySelector('#ankiTyped');
      if (inp) {
        inp.value = session.typed || '';
        inp.focus();
      }
    } else {
      playChain(w);
    }
  }

  function bindEvents() {
    var $ = function (s) { return modalEl.querySelector(s); };
    var b;

    if ((b = $('#ankiClose'))) b.onclick = closeSession;
    if ((b = $('#ankiFinishClose'))) b.onclick = closeSession;
    if ((b = $('#navDecks'))) b.onclick = closeSession;
    if ((b = $('#navBrowse'))) b.onclick = openBrowse;
    if ((b = $('#navStats'))) b.onclick = openStats;
    if ((b = $('#navSync'))) b.onclick = function () {
      save();
      refreshPanel();
      alert('✓ Đã đồng bộ tiến độ Anki!');
    };

    if ((b = $('#ankiShow'))) b.onclick = revealAnswer;

    var inp = $('#ankiTyped');
    if (inp) {
      inp.onkeydown = function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          session.typed = inp.value;
          revealAnswer();
        }
      };
      inp.oninput = function () {
        session.typed = inp.value;
      };
    }

    modalEl.querySelectorAll('.anki-grade-btn').forEach(function (btn) {
      btn.onclick = function () {
        var g = parseInt(btn.getAttribute('data-g'), 10);
        grade(g);
      };
    });

    modalEl.querySelectorAll('[data-play]').forEach(function (btn) {
      btn.onclick = function () {
        var w = curWord();
        if (!w) return;
        var p = btn.getAttribute('data-play');
        playChain(w, p === 'all' ? ['word', 'def', 'ex'] : [p]);
      };
    });

    if ((b = $('#ankiEdit'))) {
      b.onclick = function () {
        var w = curWord();
        if (w) alert('Từ: ' + w.text + '\nNghĩa: ' + w.vi + '\nBài: ' + w.lesson);
      };
    }
    if ((b = $('#ankiMore'))) {
      b.onclick = function () {
        var w = curWord();
        if (w) playChain(w);
      };
    }
  }

  function revealAnswer() {
    if (!session || session.face === 'back' || !curWord()) return;
    var inp = modalEl.querySelector('#ankiTyped');
    if (inp) session.typed = inp.value;
    session.face = 'back';
    render();
  }

  function grade(g) {
    var w = curWord(), k = curKey();
    if (!w || !session || session.face !== 'back') return;

    var wasNew = !cards[k] || cards[k].status === 'new';
    cards[k] = sm2(cards[k] || newCard(), g, Date.now());
    save();

    cards[k].type = splitKey(k).type;
    CS.addLog({ item: k, ok: g >= 3, ms: null, kind: 'anki' });

    if (wasNew) addIntroduced(1);
    session.done += 1;

    if (g === 1) {
      // Again: lặp lại thẻ này sau 4 thẻ khác
      session.again += 1;
      cards[k].status = 'learning';
      session.queue.splice(Math.min(session.queue.length, session.pos + 4), 0, k);
    }

    session.pos += 1;
    session.face = 'front';
    session.typed = '';
    refreshPanel();
    render();
  }

  function onKey(e) {
    if (!session || !modalEl || !modalEl.classList.contains('open')) return;
    var tag = (e.target && e.target.tagName) || '';

    if (e.key === 'Escape') {
      closeSession();
      return;
    }

    if (session.mode === 'browse') return;

    if (session.face === 'front') {
      if (tag === 'INPUT') {
        if ((e.key === ' ' || e.code === 'Space') && !e.target.value.trim()) {
          e.preventDefault();
          revealAnswer();
        }
        return;
      }
      if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        revealAnswer();
      }
    } else {
      // Mặt sau
      if (/^[1-4]$/.test(e.key)) {
        e.preventDefault();
        grade(parseInt(e.key, 10));
      } else if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        grade(3); // Mặc định Good
      }
    }
  }

  /* ---------- Trình duyệt thẻ (Browse) ---------- */
  function openBrowse() {
    ensureModal();
    session = { mode: 'browse' };
    modalEl.classList.add('open');
    renderBrowse();
  }

  function renderBrowse() {
    var curLesson = currentActiveLessonId();
    var idx = cursorIndex();
    var ws = wordsUpTo(idx);

    var h = '<div class="anki-window">' +
      '<div class="anki-top-nav">' +
      '  <div class="anki-nav-links">' +
      '    <a class="anki-nav-link" id="navBackReview">← Quay lại Ôn</a>' +
      '    <a class="anki-nav-link" style="color:#0f172a;font-weight:700">Duyệt Thẻ Lũy Kế</a>' +
      '  </div>' +
      '  <button class="anki-close-x" id="ankiClose">✕</button>' +
      '</div>' +
      '<div style="flex:1;overflow:auto;padding:20px 24px;">' +
      '  <h3 style="margin:0 0 12px;font-size:16px;color:#0f172a">Quỹ từ tích lũy tới bài ' + esc(curLesson) + ' (' + ws.length + ' từ)</h3>' +
      '  <table style="width:100%;border-collapse:collapse;font-size:13px;text-align:left;">' +
      '    <thead><tr style="border-bottom:2px solid #e2e8f0;color:#64748b">' +
      '      <th style="padding:8px">Bài</th><th style="padding:8px">Từ vựng</th><th style="padding:8px">Phiên âm</th><th style="padding:8px">Nghĩa tiếng Việt</th><th style="padding:8px">Trạng thái SM-2</th>' +
      '    </tr></thead><tbody>';

    ws.forEach(function (w) {
      var k = ckey(w.id, 'B');
      var c = cards[k];
      var st = !c || c.status === 'new' ? '<span style="color:#0284c7;font-weight:600">Mới</span>' :
               (c.status === 'learning' ? '<span style="color:#dc2626;font-weight:600">Đang học</span>' :
               '<span style="color:#16a34a;font-weight:600">Đã nhớ (' + (c.interval || 0) + 'd)</span>');
      h += '<tr style="border-bottom:1px solid #f1f5f9">' +
        '<td style="padding:8px;color:#64748b">' + esc(w.lesson) + '</td>' +
        '<td style="padding:8px;font-weight:700;color:#0f172a">' + esc(w.text) + ' ' + (w.ico || '') + '</td>' +
        '<td style="padding:8px;color:#64748b">' + esc(w.read || '') + '</td>' +
        '<td style="padding:8px;color:#1e293b">' + esc(w.vi || '') + '</td>' +
        '<td style="padding:8px">' + st + '</td>' +
        '</tr>';
    });

    h += '</tbody></table></div></div>';
    modalEl.innerHTML = h;

    modalEl.querySelector('#ankiClose').onclick = closeSession;
    modalEl.querySelector('#navBackReview').onclick = openSession;
  }

  function openStats() {
    var c = counts();
    alert('Thống kê Anki:\n- Bài hiện tại: ' + c.lessonId + '\n- Quỹ từ lũy kế: ' + c.total + ' từ\n- Từ mới: ' + c.new + '\n- Đang học: ' + c.learning + '\n- Đến hạn hôm nay: ' + c.due + '\n- Đã nhớ lâu dài: ' + c.known);
  }

  /* ---------- Xuất / Nhập JSON ---------- */
  function exportJSON() {
    var d = { app: APP, version: 2, exportedAt: new Date().toISOString(), cards: cards, opened: opened };
    var blob = new Blob([JSON.stringify(d, null, 1)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (CFG.exportName || 'anki') + '-' + today() + '.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function reload() {
    cards = CS.cards();
    opened = CS.ankiOpened();
    refreshPanel();
  }

  /* ---------- API Public ---------- */
  var api = {
    reload: reload,
    markLooked: markLooked,
    isLooked: isLooked,
    sm2: sm2,
    newCard: newCard,
    ckey: ckey,
    splitKey: splitKey,
    markOpened: markOpened,
    counts: counts,
    buildQueue: buildQueue,
    playChain: playChain,
    exportJSON: exportJSON,
    current: function () {
      return session && session.mode === 'review' && curKey() ? { key: curKey(), id: splitKey(curKey()).id, face: session.face } : null;
    },
    words: function () { return WORDS; },
    open: function () { buildPanel(); openSession(); },
    refresh: refreshPanel,
    version: 5
  };

  root.ANKI = api;
  root[CFG.globalName || 'KIDS_ANKI'] = api;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildPanel);
    else buildPanel();
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
