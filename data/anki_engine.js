/* Anki từ vựng lũy kế kiểu "3 loại thẻ" (nhận diện, điền từ, nghe) — engine DÙNG CHUNG cho khóa tiếng Trung (zh/) và khóa tiếng Anh thiếu nhi (kids/).
   BẢN NGUỒN DUY NHẤT: docs/anki/anki_engine.js. `docs/anki/sync_engine.sh` chép sang zh/data/ và kids/data/; công cụ kiểm báo lỗi nếu bản chép khác bản nguồn.
   Cấu hình riêng từng khóa nằm trong window.ANKI_CONFIG (đặt trong index.html TRƯỚC thẻ nạp file này); xem docs/anki/ANKI_SPEC.md.
   Hình thức theo bộ thẻ kiểu "4000 Essential English Words" (hình + từ + phát âm + từ loại + nghĩa + định nghĩa đơn giản + câu ví dụ + chuỗi âm thanh);
   KHÔNG chép nội dung, hình ảnh hay âm thanh của bộ thẻ đó: hình = emoji trong dữ liệu khóa học, âm thanh = speechSynthesis của trình duyệt.
   Lưu trữ: CHỈ qua kho tiến độ của lõi (window.CourseStore, docs/core/progress_store.js; thẻ ở cards, cài đặt ở settings.anki, nhật ký ở log); SM-2 lấy từ window.SRS (docs/core/srs_core.js).
   Toàn bộ dữ liệu ở trong trình duyệt; xuất/nhập JSON (riêng Anki) chỉ qua tải file và chọn file. */
(function (root) {
  'use strict';
  var CFG = root.ANKI_CONFIG || {};
  var P = CFG.prefix || 'zh_anki_';
  var APP = CFG.app || 'zh-anki';
  var DAY = 86400000, MIN5 = 300000;
  var TYPE_LABEL = { A: 'Nhận diện', B: 'Điền từ', C: 'Nghe' };

  /* ---------- lưu trữ: chỉ qua kho tiến độ + SM-2 của lõi ---------- */
  var CS = root.CourseStore, SRS = root.SRS;
  if (!CS) throw new Error('anki_engine: thiếu window.CourseStore (nạp data/progress_store.js trước engine)');
  if (!SRS) throw new Error('anki_engine: thiếu window.SRS (nạp data/srs_core.js trước engine)');

  /* ---------- SM-2: dùng hàm thuần của lõi (docs/core/srs_core.js) ---------- */
  var sm2 = SRS.sm2, newCard = SRS.newCard, intervalLabel = SRS.intervalLabel;

  /* ---------- khóa thẻ: loại A giữ khóa cũ (id) để tương thích tiến độ bản trước; B, C thêm hậu tố ---------- */
  function ckey(id, type) { return type === 'A' ? id : id + '#' + type; }
  function splitKey(k) { var i = k.indexOf('#'); return i < 0 ? { id: k, type: 'A' } : { id: k.slice(0, i), type: k.slice(i + 1) }; }

  /* ---------- dữ liệu ---------- */
  var RAW = root[CFG.dataName || 'ZH_ANKI_WORDS'] || { lessons: [], words: [] };
  var MAP = CFG.map || function (w) { return w; };
  var WORDS = [];            // đã chuẩn hóa: {id, lesson, level, text, read, hv, pos, vi, def, ico, forms, ex:{t,read,vi}, cloze, dis}
  var WORD_BY_ID = {};
  var LESSON_ORDER = {};
  (RAW.lessons || []).forEach(function (l, i) { LESSON_ORDER[l.id] = i; });
  (RAW.words || []).forEach(function (r) { var w = MAP(r); WORDS.push(w); WORD_BY_ID[w.id] = w; });
  function lessonOf(id) { return (RAW.lessons || [])[LESSON_ORDER[id]]; }
  function moduleOf(lessonId) { return String(lessonId).replace(/[A-Za-z]+$/, ''); }
  function wordsOfLesson(id) { return WORDS.filter(function (w) { return w.lesson === id; }); }

  /* ---------- trạng thái ---------- */
  var cards = CS.cards();                                 // đối tượng sống của kho: khóa = id từ (+ #B / #C), giá trị = thẻ SM-2
  var opened = CS.ankiOpened();
  var limit = parseInt(CS.setting('anki.limit', 20), 10); if (!(limit >= 0 && limit <= 500)) limit = 20;
  var types = CS.setting('anki.types', ['A', 'B']);
  if (!Array.isArray(types) || !types.length) types = ['A', 'B'];
  types = ['A', 'B', 'C'].filter(function (t) { return types.indexOf(t) >= 0; });
  function isLooked(id, now) { var t = CS.looked()[id]; return !!t && (now === undefined ? Date.now() : now) - t < 7 * DAY; }   // từ người học vừa chạm xem nghĩa: ưu tiên ôn 7 ngày
  function markLooked(id) { if (!WORD_BY_ID[id]) return; CS.markLooked(id); }
  var rateName = CS.setting('anki.rate', 'slow') === 'normal' ? 'normal' : 'slow';
  var RATES = { slow: CFG.rateSlow || 0.72, normal: CFG.rateNormal || 0.92 };

  function save() { CS.replaceCards(cards); }
  function highestOpened() {
    var best = -1, id = null;
    opened.forEach(function (x) { if (LESSON_ORDER[x] !== undefined && LESSON_ORDER[x] > best) { best = LESSON_ORDER[x]; id = x; } });
    return id;
  }
  function cursorId() {
    var c = CS.setting('anki.cursor', 'auto');
    if (c !== 'auto' && LESSON_ORDER[c] !== undefined) return c;
    return highestOpened() || ((RAW.lessons || [])[0] && RAW.lessons[0].id) || null;
  }
  function cursorIndex() { var id = cursorId(); return id === null ? -1 : LESSON_ORDER[id]; }
  function markOpened(id) {
    if (LESSON_ORDER[id] === undefined) return;
    if (opened.indexOf(id) < 0) { opened.push(id); CS.setAnkiOpened(opened); }
    refreshPanel();
  }
  function wordsUpTo(idx) { return WORDS.filter(function (w) { return LESSON_ORDER[w.lesson] <= idx; }); }
  function counts(now) {
    now = now === undefined ? Date.now() : now;
    var idx = cursorIndex(), n = 0, due = 0, known = 0, total = 0;
    wordsUpTo(idx).forEach(function (w) {
      types.forEach(function (t) {
        total++;
        var c = cards[ckey(w.id, t)];
        if (!c || c.status === 'new') n++;
        else { if (c.due <= now) due++; if (c.status === 'review' && c.due > now) known++; }
      });
    });
    return { new: n, due: due, known: known, total: total, words: wordsUpTo(idx).length };
  }
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function introducedToday() { var d = CS.setting('anki.daily', {}); return d && d.date === today() ? (d.n || 0) : 0; }
  function addIntroduced(k) { CS.setSetting('anki.daily', { date: today(), n: introducedToday() + k }); }
  function newAllowance() { return Math.max(0, limit * types.length - introducedToday()); }

  /* Hàng đợi: thẻ đến hạn trước, rồi thẻ mới theo thứ tự bài. Thẻ mới xếp theo nhóm 8 từ: hết loại A của 8 từ rồi mới tới loại B, C
     (anh em của một từ cách nhau ít nhất 8 thẻ, như "bury siblings" của Anki). */
  function buildQueue(now) {
    now = now === undefined ? Date.now() : now;
    var idx = cursorIndex(), ws = wordsUpTo(idx), dueList = [], fresh = [];
    ws.forEach(function (w) {
      types.forEach(function (t) {
        var k = ckey(w.id, t), c = cards[k];
        if (!c || c.status === 'new') fresh.push({ w: w, t: t, k: k });
        else if (c.due <= now) dueList.push(k);
      });
    });
    dueList.sort(function (a, b) { var la = isLooked(splitKey(a).id, now) ? 0 : 1, lb = isLooked(splitKey(b).id, now) ? 0 : 1; return la - lb || cards[a].due - cards[b].due; });      // từ vừa tra lên trước
    var allow = newAllowance(), out = [];
    var perWord = {}, order = [];
    fresh.forEach(function (x) { if (!perWord[x.w.id]) { perWord[x.w.id] = []; order.push(x.w.id); } perWord[x.w.id].push(x); });
    order = order.filter(function (id) { return isLooked(id, now); }).concat(order.filter(function (id) { return !isLooked(id, now); }));        // từ mới vừa tra được dạy trước
    var take = [];
    for (var i = 0; i < order.length && take.length < allow; i += 8) {
      var group = order.slice(i, i + 8);
      types.forEach(function (t) {
        group.forEach(function (id) { perWord[id].forEach(function (x) { if (x.t === t && take.length < allow) take.push(x.k); }); });
      });
    }
    return dueList.concat(take);
  }

  /* ---------- tiện ích ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var norm = CFG.normTyped || function (s) { return String(s || '').toLowerCase().replace(/[^a-z]/g, ''); };
  function plainPy(s) {
    return String(s || '').replace(/[üǖǘǚǜÜ]/g, 'v').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[0-9\s'’·\-]/g, '').toLowerCase().replace(/u:/g, 'v');
  }
  function rngSeed(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function seeded(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(arr, rnd) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function markInSentence(sentence, w) {
    var forms = (w.forms && w.forms.length ? w.forms : [w.text]).slice().sort(function (a, b) { return b.length - a.length; });
    var low = String(sentence).toLowerCase();
    for (var i = 0; i < forms.length; i++) {
      var k = low.indexOf(String(forms[i]).toLowerCase());
      if (k >= 0) return esc(sentence.slice(0, k)) + '<b class="anki-hl">' + esc(sentence.slice(k, k + forms[i].length)) + '</b>' + esc(sentence.slice(k + forms[i].length));
    }
    return esc(sentence);
  }
  function T(key) {                                   // lời lẽ: khóa thiếu nhi dùng cách xưng hô riêng cho giai đoạn nhỏ
    var kid = CFG.kidTone && CFG.kidTone(cursorLevel());
    var S = (CFG.strings || {})[kid ? 'kid' : 'adult'] || {};
    var D = { hearTitle: 'Nghe và chọn đúng từ', typeHint: 'Gõ từ rồi Enter', showBack: 'Xem mặt sau (Space)' };
    return S[key] || D[key] || key;
  }
  function cursorLevel() { var id = cursorId(); var l = id && lessonOf(id); return l ? l.level : 0; }

  /* ---------- âm thanh: từ → nghỉ 1 giây → định nghĩa → nghỉ 1 giây → câu ví dụ ---------- */
  var chainToken = 0;
  function synth() { return root.speechSynthesis || null; }
  function pickVoice(langs) {
    var s = synth(); if (!s || !s.getVoices) return null;
    var vs = s.getVoices() || [], i, v;
    for (i = 0; i < langs.length; i++) { v = vs.filter(function (x) { return String(x.lang).replace('_', '-').toLowerCase() === langs[i].toLowerCase(); })[0]; if (v) return v; }
    for (i = 0; i < langs.length; i++) { v = vs.filter(function (x) { return String(x.lang).toLowerCase().indexOf(langs[i].slice(0, 2).toLowerCase()) === 0; })[0]; if (v) return v; }
    return null;
  }
  function speakPart(text, langs) {                    // có sprite âm thanh của bài thì phát từ file; lỗi hoặc không có thì dùng giọng trình duyệt
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
        u.lang = v ? v.lang : langs[0]; u.rate = RATES[rateName];
        u.onend = fin; u.onerror = fin;
        s.speak(u);
      } catch (e) { fin(); return; }
      setTimeout(fin, Math.max(2500, String(text).length * 450) + 1500);      // phòng trình duyệt không bắn onend
    });
  }
  function pause(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function stopSpeech() { chainToken++; try { if (root.AppKit && root.AppKit.stopSprite) root.AppKit.stopSprite(); } catch (e) {} try { var s = synth(); if (s && s.cancel) s.cancel(); } catch (e) {} }
  function playChain(w, parts) {
    parts = parts || ['word', 'def', 'ex'];
    var tok = ++chainToken, langsW = CFG.voiceWord || CFG.voiceLangs || ['en-US'], langsS = CFG.voiceSentence || CFG.voiceLangs || ['en-US'];
    try { var s = synth(); if (s && s.cancel) s.cancel(); } catch (e) {}
    var items = [];
    if (parts.indexOf('word') >= 0 && w.text) items.push({ t: w.speak || w.text, l: langsW });
    if (parts.indexOf('def') >= 0 && w.def) items.push({ t: w.def, l: CFG.voiceDef || langsS });
    if (parts.indexOf('ex') >= 0 && w.ex && w.ex.t) items.push({ t: w.ex.t, l: langsS });
    var p = Promise.resolve();
    items.forEach(function (it, i) {
      p = p.then(function () { return tok === chainToken ? speakPart(it.t, it.l) : null; })
           .then(function () { return i < items.length - 1 && tok === chainToken ? pause(1000) : null; });
    });
    return p;
  }

  /* ---------- giao diện: bảng bên trái ---------- */
  var CSS = '.anki-panel{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px;margin:10px 0;color:#e2e8f0}' +
    '.anki-panel h4{margin:0 0 8px;font-size:12px;letter-spacing:.04em;color:#fde68a}' +
    '.anki-nums{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center}' +
    '.anki-nums div{border-radius:10px;padding:6px 2px;font-size:10px;line-height:1.25}.anki-nums b{display:block;font-size:20px}' +
    '.anki-n{background:#1d4ed8}.anki-d{background:#b91c1c}.anki-k{background:#15803d}' +
    '.anki-panel select{width:100%;margin:8px 0 4px;padding:6px;border-radius:8px;border:0;font-size:12px}' +
    '.anki-panel label{font-size:11px;color:#cbd5e1}' +
    '.anki-types{display:flex;flex-wrap:wrap;gap:4px 10px;margin:6px 0 2px;font-size:11px}.anki-types label{display:flex;gap:4px;align-items:center;cursor:pointer}' +
    '.anki-go{width:100%;margin-top:8px;padding:9px;border:0;border-radius:10px;background:#f59e0b;color:#1f2937;font-weight:800;cursor:pointer;font-size:13px}' +
    '.anki-go:disabled{opacity:.5;cursor:default}' +
    '.anki-row{display:flex;gap:6px;margin-top:6px}.anki-row button{flex:1;padding:7px 4px;border:0;border-radius:8px;background:rgba(255,255,255,.14);color:#e2e8f0;cursor:pointer;font-size:12px}' +
    '.anki-small{margin-top:6px;font-size:10px;color:#94a3b8}' +
    '.anki-back{position:fixed;inset:0;background:rgba(15,23,42,.72);display:none;align-items:flex-start;justify-content:center;z-index:9999;overflow:auto;padding:16px}' +
    '.anki-back.open{display:flex}' +
    '.anki-card{background:#fff;color:#0f172a;border-radius:20px;max-width:660px;width:100%;margin:auto;padding:18px 20px;box-shadow:0 20px 60px rgba(0,0,0,.4);font-family:inherit}' +
    '.anki-top{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13px;color:#475569;flex-wrap:wrap}' +
    '.anki-top button,.anki-chip{border:0;background:#e2e8f0;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:12px}' +
    '.anki-badge{display:inline-block;border-radius:999px;padding:2px 10px;font-size:11px;font-weight:700;color:#fff;background:#6366f1}' +
    '.anki-badge.B{background:#0d9488}.anki-badge.C{background:#d97706}' +
    '.anki-ico{font-size:84px;text-align:center;line-height:1.1;margin:8px 0 2px}' +
    '.anki-word{font-size:56px;font-weight:800;text-align:center;margin:2px 0 4px;line-height:1.15;color:#1e3a8a;word-break:break-word}' +
    '.anki-word.en{font-size:46px}' +
    '.anki-ex{background:#f1f5f9;border-radius:12px;padding:10px 12px;margin:8px 0;font-size:19px;text-align:center}' +
    '.anki-ex small{display:block;font-size:13px;color:#475569;margin-top:4px}' +
    '.anki-hl{background:#fde68a;border-radius:4px;padding:0 2px}' +
    '.anki-blank{display:inline-block;min-width:3.2em;border-bottom:3px solid #2563eb;color:#2563eb;font-weight:800}' +
    '.anki-meaning{font-size:22px;text-align:center;font-weight:700;margin:6px 0}' +
    '.anki-def{font-size:15px;text-align:center;color:#334155;margin:4px 0;font-style:italic}' +
    '.anki-in{display:flex;gap:8px;margin:10px 0}.anki-in input{flex:1;padding:10px;border-radius:10px;border:2px solid #cbd5e1;font-size:18px;min-width:0}' +
    '.anki-in button,.anki-btn{border:0;border-radius:10px;padding:10px 14px;cursor:pointer;font-weight:700;background:#2563eb;color:#fff}' +
    '.anki-opts{display:grid;gap:8px;margin:10px 0}.anki-opts.two{grid-template-columns:1fr 1fr}.anki-opts button{border:2px solid #cbd5e1;background:#fff;border-radius:10px;padding:10px;text-align:left;font-size:16px;cursor:pointer}' +
    '.anki-opts button.ok{border-color:#16a34a;background:#dcfce7}.anki-opts button.bad{border-color:#dc2626;background:#fee2e2}' +
    '.anki-read{font-size:24px;text-align:center;color:#1d4ed8;font-weight:700}' +
    '.anki-hv{font-size:19px;text-align:center;margin:2px 0}.anki-hv b{color:#b45309}' +
    '.anki-pos{font-size:13px;text-align:center;color:#64748b;margin:2px 0;text-transform:lowercase}' +
    '.anki-ff{background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:8px 12px;margin:10px 0;font-size:14px}' +
    '.anki-looked{display:inline-block;background:#d1fae5;color:#065f46;border-radius:99px;padding:2px 10px;font-size:13px;font-weight:800;margin-bottom:4px}' +
    '.anki-flag{text-align:center;margin:2px 0}.anki-flag button{border:0;background:none;color:#64748b;font-size:14px;text-decoration:underline;min-height:44px;cursor:pointer}' +
    '.anki-audio{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:8px 0}.anki-audio button{border:0;border-radius:8px;padding:6px 10px;background:#e0e7ff;cursor:pointer;font-size:12px}' +
    '.anki-grades{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px}' +
    '.anki-grades button{border:0;border-radius:10px;padding:10px 4px;font-weight:800;cursor:pointer;color:#fff;font-size:13px;line-height:1.3}' +
    '.anki-grades button small{display:block;font-weight:500;font-size:11px;opacity:.9}.anki-grades button:disabled{opacity:.35;cursor:not-allowed}' +
    '.g1{background:#dc2626}.g2{background:#f97316}.g3{background:#16a34a}.g4{background:#2563eb}' +
    '.anki-msg{min-height:20px;font-size:13px;margin:6px 0;text-align:center}' +
    '.anki-tools{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;font-size:12px;align-items:center}.anki-tools button,.anki-tools label.btn{background:#e2e8f0;border:0;border-radius:8px;padding:6px 10px;cursor:pointer}' +
    '.anki-units h3{margin:14px 0 4px;font-size:14px;color:#1e3a8a}.anki-units h4{margin:8px 0 4px;font-size:12px;color:#475569}' +
    '.anki-unit{display:flex;justify-content:space-between;gap:8px;align-items:center;border:1px solid #e2e8f0;border-radius:10px;padding:6px 10px;margin:4px 0;font-size:13px}' +
    '.anki-unit.locked{opacity:.65}.anki-unit button{border:0;border-radius:8px;padding:5px 9px;background:#e0e7ff;cursor:pointer;font-size:12px;white-space:nowrap}' +
    '.anki-prev li{display:flex;gap:8px;align-items:center;padding:4px 0;border-bottom:1px solid #f1f5f9;font-size:14px;cursor:pointer;list-style:none}' +
    '@media(max-width:560px){.anki-word{font-size:40px}.anki-word.en{font-size:34px}.anki-ico{font-size:64px}.anki-card{padding:14px}.anki-opts.two{grid-template-columns:1fr}}';

  var panelEl = null, modalEl = null, session = null;

  function injectCSS() {
    if (document.getElementById('ankiCss')) return;
    var st = document.createElement('style'); st.id = 'ankiCss'; st.textContent = CSS; document.head.appendChild(st);
  }
  function stageInfo(level) {                          // ưu tiên meta.js (dữ liệu bài nạp theo cấp nên cấp khác có thể chưa nạp)
    var ms = ((root.COURSE_META || {}).stages || []).filter(function (x) { return x.id === level; })[0];
    return ms || (root.CURRICULUM_STAGES || {})[level];
  }
  function lessonLabel(l) { return l.id + ' · ' + String(l.name || '').replace(/^(Bài|Lesson|Unit)\s+[0-9.A-Za-z]+\s*[:：]\s*/, ''); }
  function buildPanel() {
    injectCSS();
    var sb = document.querySelector(CFG.sidebar || '.left-sidebar');
    if (!sb || document.getElementById('ankiPanel')) return;
    panelEl = document.createElement('div');
    panelEl.className = 'anki-panel'; panelEl.id = 'ankiPanel';
    panelEl.innerHTML = '<h4>🗂️ ANKI TỪ VỰNG LŨY KẾ</h4>' +
      '<div class="anki-nums"><div class="anki-n"><b id="ankiNew">0</b>🟦 Từ mới</div><div class="anki-d"><b id="ankiDue">0</b>🟥 Đến hạn</div><div class="anki-k"><b id="ankiKnown">0</b>🟩 Đã nhớ</div></div>' +
      '<div class="anki-types" id="ankiTypes" role="group" aria-label="Loại thẻ">' + ['A', 'B', 'C'].map(function (t) { return '<label><input type="checkbox" data-t="' + t + '"> ' + t + '. ' + TYPE_LABEL[t] + '</label>'; }).join('') + '</div>' +
      '<label for="ankiCursor">📍 Mở từ vựng đến bài:</label><select id="ankiCursor" aria-label="Mở từ vựng đến bài"></select>' +
      '<button class="anki-go" id="ankiGo" type="button">🚀 Vào Ôn Anki Hôm Nay</button>' +
      '<div class="anki-row"><button type="button" id="ankiBrowse">📚 Duyệt theo bài</button><button type="button" id="ankiPreview">📖 Học trước 1 bài</button></div>' +
      '<div class="anki-small" id="ankiInfo"></div>';
    var anchor = sb.querySelector(CFG.anchor || '.speed-row');
    if (anchor) sb.insertBefore(panelEl, anchor); else sb.appendChild(panelEl);
    var sel = panelEl.querySelector('#ankiCursor');
    sel.addEventListener('change', function () { CS.setSetting('anki.cursor', sel.value); refreshPanel(); });
    panelEl.querySelector('#ankiGo').addEventListener('click', openSession);
    panelEl.querySelector('#ankiBrowse').addEventListener('click', openBrowse);
    panelEl.querySelector('#ankiPreview').addEventListener('click', function () { var nx = nextLessonId(); if (nx) openPreview(nx); });
    panelEl.querySelectorAll('#ankiTypes input').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var sel2 = []; panelEl.querySelectorAll('#ankiTypes input').forEach(function (x) { if (x.checked) sel2.push(x.getAttribute('data-t')); });
        if (!sel2.length) { cb.checked = true; return; }               // luôn còn ít nhất một loại thẻ
        types = sel2; CS.setSetting('anki.types', types); refreshPanel();
      });
    });
    refreshPanel();
  }
  function nextLessonId() {
    var i = cursorIndex() + 1, ls = RAW.lessons || [];
    return ls[i] ? ls[i].id : null;
  }
  function refreshPanel() {
    if (!panelEl) return;
    var c = counts(), sel = panelEl.querySelector('#ankiCursor');
    panelEl.querySelector('#ankiNew').textContent = c.new;
    panelEl.querySelector('#ankiDue').textContent = c.due;
    panelEl.querySelector('#ankiKnown').textContent = c.known;
    panelEl.querySelectorAll('#ankiTypes input').forEach(function (cb) { cb.checked = types.indexOf(cb.getAttribute('data-t')) >= 0; });
    var cur = CS.setting('anki.cursor', 'auto');
    if (sel.options.length !== (RAW.lessons || []).length + 1) {
      sel.innerHTML = '<option value="auto">Tự động: bài cao nhất đã mở</option>' + (RAW.lessons || []).map(function (l) { return '<option value="' + esc(l.id) + '">' + esc(lessonLabel(l)) + '</option>'; }).join('');
    }
    sel.value = LESSON_ORDER[cur] !== undefined ? cur : 'auto';
    var id = cursorId();
    panelEl.querySelector('#ankiInfo').textContent = 'Tới bài ' + (id || '—') + ': ' + c.words + ' từ, ' + c.total + ' thẻ. Từ mới tối đa ' + limit + '/ngày (còn ' + Math.floor(newAllowance() / types.length) + ' hôm nay).';
    panelEl.querySelector('#ankiGo').disabled = !WORDS.length;
    panelEl.querySelector('#ankiPreview').disabled = !nextLessonId();
  }

  /* ---------- màn hình ôn ---------- */
  function ensureModal() {
    if (modalEl) return;
    modalEl = document.createElement('div');
    modalEl.className = 'anki-back'; modalEl.id = 'ankiModal';
    modalEl.setAttribute('role', 'dialog'); modalEl.setAttribute('aria-modal', 'true'); modalEl.setAttribute('aria-label', 'Ôn từ vựng Anki');
    modalEl.addEventListener('click', function (e) { if (e.target === modalEl) closeSession(); });
    document.body.appendChild(modalEl);
    document.addEventListener('keydown', onKey);
  }
  function openSession() {
    ensureModal();
    session = { mode: 'review', queue: buildQueue(), pos: 0, face: 'front', forced: false, done: 0, again: 0, stage: 0 };
    modalEl.classList.add('open');
    render();
  }
  function closeSession() { stopSpeech(); if (modalEl) modalEl.classList.remove('open'); session = null; refreshPanel(); }
  function curKey() { return session && session.queue && session.queue[session.pos]; }
  function curWord() { var k = curKey(); return k ? WORD_BY_ID[splitKey(k).id] : null; }
  function curType() { var k = curKey(); return k ? splitKey(k).type : null; }

  function heroHtml(w, withWord) {
    return (isLooked(w.id) ? '<div class="anki-looked">🔎 Vừa tra trong bài</div>' : '') + '<div class="anki-ico" aria-hidden="true">' + esc(w.ico || '🔤') + '</div>' + (withWord ? '<div class="anki-word ' + (CFG.wordClass || '') + '" lang="' + esc(CFG.wordLang || '') + '">' + esc(w.text) + '</div>' : '');
  }
  function clozeHtml(w) {
    if (!w.cloze) return '';
    return '<div class="anki-ex" lang="' + esc(CFG.wordLang || '') + '">' + esc(w.cloze).replace(/_{2,}/g, '<span class="anki-blank">&nbsp;&nbsp;&nbsp;</span>') + '</div>';
  }
  function optionsFor(w, kind) {
    var rnd = seeded(rngSeed(w.id + kind));
    if (kind === 'meaning') {
      var pool = WORDS.filter(function (x) { return x.id !== w.id && x.vi && x.vi !== w.vi && x.level <= w.level && x.pos === w.pos; });
      if (pool.length < 3) pool = WORDS.filter(function (x) { return x.id !== w.id && x.vi && x.vi !== w.vi; });
      return shuffle([w.vi].concat(shuffle(pool, rnd).slice(0, 3).map(function (x) { return x.vi; })), rnd);
    }
    return shuffle([w.text].concat((w.dis || []).slice(0, 3)), rnd);
  }

  function render() {
    try { var w0 = session && session.mode === 'preview' ? previewWord() : curWord(); if (w0 && root.AppKit && root.AppKit.preloadLesson) root.AppKit.preloadLesson(w0.lesson); } catch (e) {}      // nạp sprite âm thanh của bài trước khi lật thẻ
    if (!session) return;
    if (session.mode === 'preview') return renderPreview();
    var w = curWord(), t = curType(), h = '';
    var left = session.queue.length - session.pos;
    h += '<div class="anki-card"><div class="anki-top"><span>Còn <b>' + left + '</b> thẻ · đã ôn ' + session.done + (t ? ' · <span class="anki-badge ' + t + '">' + t + '. ' + TYPE_LABEL[t] + '</span>' : '') + '</span>' +
      '<span><button type="button" id="ankiRate">' + (rateName === 'slow' ? '🐢 Chậm' : '🐇 Tự nhiên') + '</button> <button type="button" id="ankiClose">✕ Đóng</button></span></div>';
    if (!w) {
      var c = counts();
      h += '<h2 style="text-align:center;margin:30px 0 6px">🎉 Hết thẻ hôm nay</h2><p style="text-align:center;color:#475569">Đã ôn ' + session.done + ' thẻ (quên ' + session.again + ' lần). Thẻ mới còn: ' + c.new + ' · đến hạn: ' + c.due + ' · đã nhớ: ' + c.known + '.</p>' + toolsHtml() + '</div>';
      modalEl.innerHTML = h; bindCommon(); return;
    }
    if (session.face === 'front') h += frontHtml(w, t); else h += backHtml(w);
    modalEl.innerHTML = h;
    bindCommon();
    var inp = modalEl.querySelector('#ankiTyped'); if (inp) inp.focus();
    if (session.face === 'back') playChain(w);
    else if (t === 'A') playChain(w, ['word']);
    else if (t === 'C') playChain(w, ['word', 'ex']);
  }
  function frontHtml(w, t) {
    var h = '';
    if (t === 'A') {
      h += heroHtml(w, true) + '<div class="anki-audio"><button type="button" data-play="word">🔊 Nghe từ</button></div>';
      h += '<div class="anki-opts" id="ankiOpts" data-kind="meaning">' + optionsFor(w, 'meaning').map(function (o, i) { return '<button type="button" data-v="' + esc(o) + '">' + (i + 1) + '. ' + esc(o) + '</button>'; }).join('') + '</div>';
    } else if (t === 'B') {
      h += heroHtml(w, false) + '<div class="anki-meaning">' + esc(w.vi) + '</div>' + (w.def ? '<div class="anki-def">' + esc(w.def) + '</div>' : '') + clozeHtml(w);
      if (session.stage === 1) {
        h += '<div class="anki-msg">✅ Đúng ' + esc(CFG.typedLabel || 'cách gõ') + '.' + (session.viHint ? ' ⚠️ ' + root.AppKit.TELEX_HINT : '') + ' Chọn đúng chữ:</div><div class="anki-opts two" id="ankiOpts" data-kind="text">' + optionsFor(w, 'text').map(function (o, i) { return '<button type="button" data-v="' + esc(o) + '" lang="' + esc(CFG.wordLang || '') + '">' + (i + 1) + '. ' + esc(o) + '</button>'; }).join('') + '</div>';
      } else {
        h += '<div class="anki-in"><input id="ankiTyped" type="text" inputmode="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(CFG.typePlaceholder || T('typeHint')) + '" aria-label="Điền từ"><button type="button" id="ankiCheck">Kiểm</button></div>';
      }
    } else {
      h += '<div class="anki-ico" aria-hidden="true">🎧</div><div class="anki-meaning">' + esc(T('hearTitle')) + '</div><div class="anki-audio"><button type="button" data-play="all">🔊 Nghe lại</button></div>';
      h += '<div class="anki-opts two" id="ankiOpts" data-kind="text">' + optionsFor(w, 'text').map(function (o, i) { return '<button type="button" data-v="' + esc(o) + '" lang="' + esc(CFG.wordLang || '') + '">' + (i + 1) + '. ' + esc(o) + '</button>'; }).join('') + '</div>';
    }
    h += '<div class="anki-msg" id="ankiMsg"></div><div style="text-align:center"><button class="anki-btn" type="button" id="ankiShow">👁️ ' + esc(T('showBack')) + '</button></div></div>';
    return h;
  }
  function backHtml(w, preview) {
    var h = heroHtml(w, true);
    h += '<div class="anki-read">' + esc(w.read || '') + '</div>';
    if (w.hv) h += '<div class="anki-hv">Hán Việt: <b>' + esc(String(w.hv).replace(/_/g, '·')) + '</b></div>';
    if (w.pos) h += '<div class="anki-pos">' + esc(w.pos) + '</div>';
    h += '<div class="anki-meaning">' + esc(w.vi) + '</div>';
    if (w.def) h += '<div class="anki-def" lang="' + esc(CFG.defLang || '') + '">' + esc(w.def) + '</div>';
    if (w.ex && w.ex.t) h += '<div class="anki-ex" lang="' + esc(CFG.wordLang || '') + '">' + markInSentence(w.ex.t, w) + (w.ex.read ? '<small>' + esc(w.ex.read) + '</small>' : '') + (w.ex.vi ? '<small>' + esc(w.ex.vi) + '</small>' : '') + '</div>';
    var ff = (root.ZH_FALSE_FRIENDS || {})[w.text];
    if (CFG.falseFriends !== false && ff) h += '<div class="anki-ff">⚠️ <b>Bẫy Hán Việt:</b> nghe như «' + esc(ff.hvGuess) + '» (' + esc(ff.trap) + ') nhưng nghĩa là «' + esc(ff.trueVi) + '». ' + esc(ff.note || '') + '</div>';
    h += '<div class="anki-audio"><button type="button" data-play="word">🔊 Từ</button>' + (w.def ? '<button type="button" data-play="def">🔊 Định nghĩa</button>' : '') + (w.ex && w.ex.t ? '<button type="button" data-play="ex">🔊 Câu ví dụ</button>' : '') + '<button type="button" data-play="all">▶ Cả chuỗi</button></div>';
    if (root.AppKit && root.AppKit.report) h += '<div class="anki-flag"><button type="button" data-report="1" title="Báo lỗi thẻ này">⚑ Báo lỗi thẻ này</button></div>';
    if (preview) return h;
    var c0 = cards[curKey()] || newCard(), f = session.forced;
    h += '<div class="anki-msg" id="ankiMsg">' + (f ? '❌ Kiểm chứng chưa đúng: chỉ được chọn 1 hoặc 2.' : '') + (session.viHint ? ' ⚠️ ' + root.AppKit.TELEX_HINT : '') + '</div>';
    h += '<div class="anki-grades">' + [1, 2, 3, 4].map(function (g) {
      var names = { 1: 'Quên', 2: 'Khó', 3: 'Tốt', 4: 'Dễ' };
      return '<button type="button" class="g' + g + '" data-g="' + g + '"' + (f && g > 2 ? ' disabled' : '') + '>[' + g + '] ' + names[g] + '<small>' + intervalLabel(c0, g) + '</small></button>';
    }).join('') + '</div></div>';
    return h;
  }
  function toolsHtml() {
    return '<div class="anki-tools"><button type="button" id="ankiExport">⬇️ Xuất JSON tiến độ</button><label class="btn">⬆️ Nhập JSON<input type="file" id="ankiImport" accept="application/json,.json" style="display:none"></label>' +
      '<label>Từ mới tối đa/ngày <input type="number" id="ankiLimit" min="0" max="500" value="' + limit + '" style="width:64px"></label></div><div class="anki-msg" id="ankiIOMsg"></div>';
  }
  function bindCommon() {
    var $ = function (s) { return modalEl.querySelector(s); }, b;
    if ((b = $('#ankiClose'))) b.onclick = closeSession;
    if ((b = $('#ankiRate'))) b.onclick = function () { rateName = rateName === 'slow' ? 'normal' : 'slow'; CS.setSetting('anki.rate', rateName); b.textContent = rateName === 'slow' ? '🐢 Chậm' : '🐇 Tự nhiên'; };
    if ((b = $('#ankiShow'))) b.onclick = function () { reveal(null); };
    if ((b = $('#ankiCheck'))) b.onclick = checkTyped;
    if ((b = $('#ankiTyped'))) b.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); checkTyped(); } };
    modalEl.querySelectorAll('#ankiOpts button').forEach(function (btn) { btn.onclick = function () { choose(btn); }; });
    modalEl.querySelectorAll('.anki-grades button').forEach(function (btn) { btn.onclick = function () { grade(parseInt(btn.getAttribute('data-g'), 10)); }; });
    modalEl.querySelectorAll('[data-report]').forEach(function (btn) {
      btn.onclick = function () {
        var w = session && session.mode === 'preview' ? previewWord() : curWord(); if (!w || !root.AppKit) return;
        root.AppKit.report({ item: 'thẻ ' + (session && session.mode === 'review' && curKey() ? curKey() : w.id), lesson: w.lesson, text: w.text + (w.read ? ' [' + w.read + ']' : '') + ' = ' + w.vi + (w.ex && w.ex.t ? ' | ' + w.ex.t : '') });
      };
    });
    modalEl.querySelectorAll('[data-play]').forEach(function (btn) {
      btn.onclick = function () { var w = session && session.mode === 'preview' ? previewWord() : curWord(); if (!w) return; var p = btn.getAttribute('data-play'); playChain(w, p === 'all' ? ['word', 'def', 'ex'] : [p]); };
    });
    if ((b = $('#ankiExport'))) b.onclick = exportJSON;
    if ((b = $('#ankiImport'))) b.onchange = function () { importFile(this.files && this.files[0]); this.value = ''; };
    if ((b = $('#ankiLimit'))) b.onchange = function () { var v = parseInt(this.value, 10); if (v >= 0 && v <= 500) { limit = v; CS.setSetting('anki.limit', v); refreshPanel(); } };
  }
  function reveal(ok) {
    if (!session || session.face === 'back' || !curWord()) return;
    session.forced = ok === false; session.face = 'back'; render();
  }
  function checkTyped() {
    var w = curWord(), inp = modalEl.querySelector('#ankiTyped');
    if (!w || !inp || !inp.value.trim()) return;
    var same = function (t) { return CFG.checkMode === 'pinyin' ? plainPy(t).replace(/v/g, 'u') === plainPy(w.read).replace(/v/g, 'u') : norm(t) === norm(w.text); };   // pinyin: gõ u hoặc v cho ü đều nhận
    var ok = same(inp.value), viHint = false;
    if (!ok && root.AppKit && root.AppKit.telexCandidates) {        // bộ gõ tiếng Việt đang bật: chấm theo các dạng Telex ngược, vẫn đúng nhưng nhắc tắt bộ gõ
      root.AppKit.telexCandidates(inp.value).forEach(function (c) { if (!ok && same(c)) { ok = true; viHint = true; } });
    }
    if (curType() === 'B' && CFG.imeStep && ok) { session.stage = 1; session.viHint = viHint; render(); return; }       // tiếng Trung: gõ pinyin đúng → chọn chữ Hán (IME 2 bước)
    session.viHint = viHint;
    var msg = modalEl.querySelector('#ankiMsg'); if (msg) msg.textContent = (ok ? '✅ Đúng.' : '❌ Chưa đúng.') + (viHint ? ' ⚠️ ' + root.AppKit.TELEX_HINT : '');
    reveal(ok);
  }
  function choose(btn) {
    var w = curWord(); if (!w) return;
    var kind = btn.parentNode.getAttribute('data-kind');
    var ok = btn.getAttribute('data-v') === (kind === 'meaning' ? w.vi : w.text);
    btn.classList.add(ok ? 'ok' : 'bad');
    modalEl.querySelectorAll('#ankiOpts button').forEach(function (x) { x.disabled = true; if (x.getAttribute('data-v') === (kind === 'meaning' ? w.vi : w.text)) x.classList.add('ok'); });
    setTimeout(function () { if (session && curWord() === w) reveal(ok); }, ok ? 350 : 700);
  }
  function grade(g) {
    var w = curWord(), k = curKey();
    if (!w || !session || session.face !== 'back') return;
    if (session.forced && g > 2) return;
    var wasNew = !cards[k] || cards[k].status === 'new';
    cards[k] = sm2(cards[k] || newCard(), g, Date.now());
    save();
    cards[k].type = splitKey(k).type; CS.addLog({ item: k, ok: g >= 3, ms: null, kind: 'anki' });          // nhật ký lượt làm của lõi (chỉ ghi thêm)
    if (wasNew) addIntroduced(1);
    session.done += 1;
    if (g === 1) { session.again += 1; session.queue.splice(Math.min(session.queue.length, session.pos + 5), 0, k); }
    session.pos += 1; session.face = 'front'; session.forced = false; session.stage = 0; session.viHint = false;
    refreshPanel(); render();
  }
  function onKey(e) {
    if (!session || !modalEl || !modalEl.classList.contains('open')) return;
    var tag = (e.target && e.target.tagName) || '';
    if (e.key === 'Escape') { closeSession(); return; }
    if (session.mode === 'browse') return;
    if (session.mode === 'preview') { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); previewMove(1); } else if (e.key === 'ArrowLeft') previewMove(-1); return; }
    if (session.face === 'front') {
      if (tag === 'INPUT') {                              // ô gõ trống: Space xem mặt sau; đã gõ chữ thì Space là ký tự bình thường
        if ((e.key === ' ' || e.code === 'Space') && !e.target.value) { e.preventDefault(); reveal(null); }
        return;
      }
      if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); reveal(null); return; }
      if (/^[1-4]$/.test(e.key)) { var bs = modalEl.querySelectorAll('#ankiOpts button'), bt = bs[parseInt(e.key, 10) - 1]; if (bt && !bt.disabled) { e.preventDefault(); choose(bt); } }
    } else if (/^[1-4]$/.test(e.key) && tag !== 'INPUT') { e.preventDefault(); grade(parseInt(e.key, 10)); }
    else if (e.key === ' ' || e.code === 'Space') e.preventDefault();
  }

  /* ---------- duyệt theo bài (unit) và học trước 1 bài ---------- */
  function lessonStats(id) {
    var ws = wordsOfLesson(id), now = Date.now(), n = 0, d = 0, k = 0;
    ws.forEach(function (w) { types.forEach(function (t) { var c = cards[ckey(w.id, t)]; if (!c || c.status === 'new') n++; else { if (c.due <= now) d++; else if (c.status === 'review') k++; } }); });
    return { words: ws.length, n: n, d: d, k: k };
  }
  function openBrowse() {
    ensureModal(); session = { mode: 'browse' }; modalEl.classList.add('open');
    var idx = cursorIndex(), h = '<div class="anki-card anki-units"><div class="anki-top"><span><b>📚 Bộ thẻ theo bài</b> (mở khóa lũy kế tới bài ' + esc(cursorId() || '—') + ')</span><span><button type="button" id="ankiClose">✕ Đóng</button></span></div>';
    var lastLevel = null, lastMod = null;
    (RAW.lessons || []).forEach(function (l, i) {
      if (l.level !== lastLevel) {
        lastLevel = l.level; lastMod = null;
        var st = stageInfo(l.level);
        h += '<h3>' + esc(st && st.label ? st.label : (CFG.levelLabel ? CFG.levelLabel(l.level) : 'Cấp ' + l.level)) + '</h3>';
      }
      var m = moduleOf(l.id);
      if (m !== lastMod) {
        lastMod = m;
        var mods = (stageInfo(l.level) || {}).modules || [], mm = mods.filter(function (x) { return x.code === m; })[0];
        h += '<h4>Module ' + esc(m) + (mm ? ' · ' + esc(mm.title) : '') + '</h4>';
      }
      var s = lessonStats(l.id), locked = i > idx;
      h += '<div class="anki-unit' + (locked ? ' locked' : '') + '"><span>' + (locked ? '🔒 ' : '') + esc(lessonLabel(l)) + ' <small>(' + s.words + ' từ · 🟦' + s.n + ' 🟥' + s.d + ' 🟩' + s.k + ')</small></span><button type="button" data-prev="' + esc(l.id) + '">👁️ Xem thẻ</button></div>';
    });
    h += '</div>';
    modalEl.innerHTML = h; bindCommon();
    modalEl.querySelectorAll('[data-prev]').forEach(function (b) { b.onclick = function () { openPreview(b.getAttribute('data-prev')); }; });
  }
  function openPreview(lessonId) {
    ensureModal();
    var ws = wordsOfLesson(lessonId);
    if (!ws.length) return;
    session = { mode: 'preview', lesson: lessonId, list: ws, pos: 0 };
    modalEl.classList.add('open');
    render();
  }
  function previewWord() { return session && session.list ? session.list[session.pos] : null; }
  function previewMove(d) { if (!session || session.mode !== 'preview') return; var n = session.pos + d; if (n >= 0 && n < session.list.length) { session.pos = n; render(); } }
  function renderPreview() {
    var w = previewWord(), l = lessonOf(session.lesson);
    var h = '<div class="anki-card"><div class="anki-top"><span><b>📖 Học trước: ' + esc(lessonLabel(l)) + '</b> · ' + (session.pos + 1) + '/' + session.list.length + ' <small>(xem trước, không tính lịch ôn)</small></span><span><button type="button" id="ankiClose">✕ Đóng</button></span></div>';
    h += backHtml(w, true);
    h += '<div class="anki-grades" style="grid-template-columns:1fr 1fr"><button type="button" class="g2" id="ankiPrevBtn"' + (session.pos === 0 ? ' disabled' : '') + '>← Trước</button><button type="button" class="g3" id="ankiNextBtn"' + (session.pos === session.list.length - 1 ? ' disabled' : '') + '>Tiếp →</button></div>';
    h += '<ul class="anki-prev" style="padding:0;margin:12px 0 0">' + session.list.map(function (x, i) { return '<li data-i="' + i + '"' + (i === session.pos ? ' style="font-weight:800"' : '') + '><span>' + esc(x.ico || '') + '</span><span>' + esc(x.text) + '</span><span style="color:#64748b">' + esc(x.vi) + '</span></li>'; }).join('') + '</ul></div>';
    modalEl.innerHTML = h; bindCommon();
    modalEl.querySelector('#ankiPrevBtn').onclick = function () { previewMove(-1); };
    modalEl.querySelector('#ankiNextBtn').onclick = function () { previewMove(1); };
    modalEl.querySelectorAll('.anki-prev li').forEach(function (li) { li.onclick = function () { session.pos = parseInt(li.getAttribute('data-i'), 10); render(); }; });
    playChain(w);
  }
  /* ---------- xuất / nhập JSON ---------- */
  function validCard(c) {
    return c && typeof c === 'object' && ['new', 'learning', 'review'].indexOf(c.status) >= 0 && isFinite(c.interval) && c.interval >= 0 && isFinite(c.ease) && c.ease >= 1.3 && c.ease <= 5 &&
      isFinite(c.due) && c.due >= 0 && Number.isInteger(c.reps) && c.reps >= 0 && Number.isInteger(c.lapses) && c.lapses >= 0;
  }
  function parseImport(text) {
    var d;
    try { d = JSON.parse(text); } catch (e) { return { error: 'Không phải JSON hợp lệ.' }; }
    if (!d || d.app !== APP || d.version !== 1 || !d.cards || typeof d.cards !== 'object' || Array.isArray(d.cards)) return { error: 'Sai định dạng (cần app "' + APP + '", version 1, có "cards").' };
    var ks = Object.keys(d.cards);
    for (var i = 0; i < ks.length; i++) {
      var sk = splitKey(ks[i]);
      if (!WORD_BY_ID[sk.id] || ['A', 'B', 'C'].indexOf(sk.type) < 0) return { error: 'Mã thẻ lạ: ' + ks[i] + '. Không nhập.' };
      if (!validCard(d.cards[ks[i]])) return { error: 'Thẻ ' + ks[i] + ' có số liệu không hợp lệ. Không nhập.' };
    }
    if (d.opened !== undefined && !Array.isArray(d.opened)) return { error: 'Trường "opened" không hợp lệ.' };
    return { data: d };
  }
  function exportJSON() {
    var d = { app: APP, version: 1, exportedAt: new Date().toISOString(), cards: cards, opened: opened, cursor: CS.setting('anki.cursor', 'auto'), limit: limit, types: types };
    var blob = new Blob([JSON.stringify(d, null, 1)], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = (CFG.exportName || 'anki') + '-' + today() + '.json';
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    var m = modalEl && modalEl.querySelector('#ankiIOMsg'); if (m) m.textContent = '✅ Đã tạo file JSON (' + Object.keys(cards).length + ' thẻ).';
  }
  function importText(text) {
    var r = parseImport(text), m = modalEl && modalEl.querySelector('#ankiIOMsg');
    if (r.error) { if (m) m.textContent = '❌ ' + r.error; return r; }
    var d = r.data, take = 0, keep = 0;
    Object.keys(d.cards).forEach(function (k) {       // gộp: thẻ nhập thắng nếu đã ôn nhiều hơn (reps + lapses), không xóa thẻ hiện có
      var loc = cards[k], inc = d.cards[k];
      if (!loc || inc.reps + inc.lapses > loc.reps + loc.lapses) { cards[k] = inc; take++; } else keep++;
    });
    (d.opened || []).forEach(function (x) { if (LESSON_ORDER[x] !== undefined && opened.indexOf(x) < 0) opened.push(x); });
    save(); CS.setAnkiOpened(opened); refreshPanel();
    if (m) m.textContent = '✅ Đã nhập: lấy ' + take + ' thẻ, giữ ' + keep + ' thẻ hiện có.';
    return { ok: true, take: take, keep: keep };
  }
  function importFile(f) {
    if (!f) return;
    var rd = new FileReader();
    rd.onload = function () { importText(String(rd.result)); };
    rd.onerror = function () { var m = modalEl.querySelector('#ankiIOMsg'); if (m) m.textContent = '❌ Không đọc được file.'; };
    rd.readAsText(f);
  }

  /* ---------- thống kê trên máy (không gửi đi đâu) ---------- */
  function stats(now) {
    now = now === undefined ? Date.now() : now;
    var known = 0, mastered = 0, learned = 0;
    Object.keys(cards).forEach(function (k) {
      var c = cards[k]; if (!c || c.status === 'new') return;
      learned++; if (c.status === 'review') { known++; if (c.interval >= 21) mastered++; }
    });
    var from = now - 7 * DAY, tot = 0, okn = 0, days = {};
    CS.logs().forEach(function (r) { if (r.t >= from) { tot++; okn += r.ok ? 1 : 0; } var d = new Date(r.t); days[d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2)] = 1; });
    return { learned: learned, known: known, mastered: mastered, reviews7: tot, retention7: tot ? Math.round(100 * okn / tot) : null, reviewDays: Object.keys(days).sort() };
  }

  /* một câu hỏi trắc nghiệm tự chứa cho thẻ (dùng ở chặng "Học hôm nay"): A chọn nghĩa, B điền từ (chọn từ), C nghe chọn từ */
  function quiz(key) {
    var sp = splitKey(key), w = WORD_BY_ID[sp.id]; if (!w) return null;
    if (sp.type === 'A') return { type: 'A', word: w, options: optionsFor(w, 'meaning'), answer: w.vi };
    if (sp.type === 'B') return { type: 'B', word: w, cloze: w.cloze || '', options: optionsFor(w, 'text'), answer: w.text };
    return { type: 'C', word: w, options: optionsFor(w, 'text'), answer: w.text };
  }
  function reload() {                                      // kho vừa bị thay (nhập sao lưu / tab khác): đọc lại các tham chiếu
    cards = CS.cards(); opened = CS.ankiOpened();
    var l = parseInt(CS.setting('anki.limit', 20), 10); limit = l >= 0 && l <= 500 ? l : 20;
    var t = CS.setting('anki.types', ['A', 'B']); types = ['A', 'B', 'C'].filter(function (x) { return Array.isArray(t) && t.indexOf(x) >= 0; }); if (!types.length) types = ['A', 'B'];
    rateName = CS.setting('anki.rate', 'slow') === 'normal' ? 'normal' : 'slow';
    refreshPanel();
  }
  /* ---------- khởi động ---------- */
  var api = { quiz: quiz, reload: reload, stats: stats, markLooked: markLooked, isLooked: isLooked, sm2: sm2, newCard: newCard, ckey: ckey, splitKey: splitKey, markOpened: markOpened, counts: counts, buildQueue: buildQueue, plainPy: plainPy, parseImport: parseImport, importText: importText,
              playChain: playChain, current: function () { return session && session.mode === 'review' && curKey() ? { key: curKey(), id: splitKey(curKey()).id, type: curType(), face: session.face } : null; }, words: function () { return WORDS; }, _state: function () { return { cards: cards, opened: opened, limit: limit, types: types }; },
              open: function () { buildPanel(); openSession(); }, version: 3 };
  root.ANKI = api;
  root[CFG.globalName || 'ZH_ANKI'] = api;
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildPanel); else buildPanel();
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
