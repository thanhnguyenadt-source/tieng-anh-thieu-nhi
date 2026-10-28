/* app_shell.js — vỏ "3 màn hình" dùng chung cho hai khóa: #homeView (trang chủ + con đường), #playerView (phòng học tập trung), #victoryView (đích),
   ⚙️ cài đặt gom mọi công cụ phụ, và bộ điều phối "Học hôm nay" (chặng ≤ 12 bước, 90 giây, buổi 30 phút cùng bố mẹ), chuỗi ngày dễ tha thứ, thẻ ảnh thành tích.
   Một bản nguồn: docs/upgrade/app_shell.js → chép sang zh/data và kids/data bằng docs/upgrade/sync_kit.sh.
   CHỈ gọi API của lõi: CourseStore (kho tiến độ), SRS (SM-2 thuần), SessionEngine (điều phối thuần). Không ghi thẳng bộ nhớ trình duyệt, không đổi dữ liệu bài học.
   Màn hình cũ (6 pha, cột trái) vẫn còn làm "trang chi tiết bài" (#detail hoặc ⚙️ → chi tiết); màn Anki là "Kho từ". */
(function (root) {
  'use strict';
  var K = root.AppKit, CS = root.CourseStore, SE = root.SessionEngine, SRS = root.SRS, CFG = root.APP_CONFIG || {}, AD = root.APPKIT_ADAPTER || {};
  if (!K || !CS || !SE || !SRS || !AD.current) return;
  var doc = root.document, esc = K.esc, el = K.el, $ = K.$, $$ = K.$$;
  var KIDS = CFG.course === 'kids', LANG = KIDS ? 'en-US' : 'zh-CN';
  var shell = { version: 1 };
  K.shell = shell;

  /* ---------- tiện ích ---------- */
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffled(arr, rnd) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function today() { return SE.ymd(new Date()); }
  function now() { return Date.now(); }
  function metaStages() { return (root.COURSE_META && root.COURSE_META.stages) || []; }
  function ankiWords() { var A = root.ANKI; return A && A.words ? A.words() : []; }
  function ankiById(id) { var w = ankiWords(); for (var i = 0; i < w.length; i++) if (w[i].id === id) return w[i]; return null; }
  function say(text, rate) { if (typeof root.speakText === 'function') root.speakText(text, rate || rateNow()); }
  function rateNow() { return CS.setting('playerSlow', false) ? 0.72 : 0.92; }
  function hanOnly(s) { return String(s || '').replace(/[^㐀-鿿]/g, ''); }
  function toneless(s) { return String(s || '').toLowerCase().replace(/ü/g, 'u').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[0-9]/g, ''); }
  function normKey(s) { return toneless(s).replace(/[^a-z]/g, ''); }
  function fixHv(h) { return String(h == null ? '' : h).trim().split(/\s+/).filter(Boolean).map(function (x) { return x === '_' ? '·' : x; }).join(' '); }
  function withLesson(id, cb) {
    var ref = K.findLesson(id); if (!ref) { cb(null, null); return; }
    K.ensureStage(ref.stage, function () {
      var st = root.CURRICULUM_STAGES && root.CURRICULUM_STAGES[ref.stage], les = st && st.data[ref.mod] && st.data[ref.mod].lessons[ref.idx];
      cb(les || null, ref);
    });
  }
  function young(ref) { return KIDS && ref && ref.stage <= 3; }
  function sentencesOf(text, n) {
    var parts = String(text || '').replace(/\s+/g, ' ').trim().split(/(?<=[.!?。！？;；])\s*/).filter(function (x) { return x && x.length > 1; });
    return parts.slice(0, n).map(function (x) { return x.length > 150 ? x.slice(0, 147).replace(/\s+\S*$/, '') + '…' : x; });
  }
  function tipLinesOf(les) { var g = les && les.grammar || {}; return sentencesOf(g.tip, 2).concat(sentencesOf(g.vn_tip, 1)).slice(0, 3); }
  function unlockAudio() {                                  // mở khóa âm thanh trên điện thoại ở cú chạm đầu tiên vào "Học hôm nay"
    try { if (root.speechSynthesis && typeof root.SpeechSynthesisUtterance === 'function') { var u = new root.SpeechSynthesisUtterance(' '); u.volume = 0; root.speechSynthesis.speak(u); } } catch (e) {}
    try { var AC = root.AudioContext || root.webkitAudioContext; if (AC) { var c = new AC(); if (c.resume) c.resume(); var b = c.createBuffer(1, 1, 22050), src = c.createBufferSource(); src.buffer = b; src.connect(c.destination); src.start(0); } } catch (e) {}
  }
  function reduceMotion() { return !!(root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  /* ---------- Leitner cũ → kho thẻ chung (idempotent) ---------- */
  function migrateLeitner() {
    var cards = CS.cards(), n = 0;
    (CS.getLeitner() || []).forEach(function (e) { if (!e || e.id === undefined) return; var k = 'lt:' + e.id; if (!cards[k]) { CS.setCard(k, SE.leitnerToCard(e, now())); n++; } });
    return n;
  }
  function validReview(key) {
    if (key.indexOf('lt:') === 0) { var c = CS.cards()[key]; return !!(c && c.q && c.q.options && c.q.options.length >= 2); }
    var A = root.ANKI; return !!(A && A.quiz && A.quiz(key));
  }

  /* =====================================================================
     VIEWS
     ===================================================================== */
  var view = 'home', homeEl, playerEl, victoryEl;
  function setView(v) {
    view = v; doc.body.setAttribute('data-kit-view', v);
    homeEl.classList.toggle('on', v === 'home'); playerEl.classList.toggle('on', v === 'player'); victoryEl.classList.toggle('on', v === 'victory');
    if (v === 'player' || v === 'victory') { try { root.scrollTo(0, 0); } catch (e) {} }
  }
  shell.view = function () { return view; };
  function goHome() { stopAudio(); renderHome(); setView('home'); }
  function goDetail(lessonId, phase) {
    stopAudio(); setView('detail');
    var ref = lessonId ? K.findLesson(lessonId) : null;
    if (ref) K.ensureStage(ref.stage, function () { try { AD.go(ref.stage, ref.mod, ref.idx, phase || 'p1'); } catch (e) {} });
  }
  K.goHome = goHome; shell.home = goHome; shell.detail = goDetail;
  function stopAudio() { try { K.stopSprite(); if (root.speechSynthesis) root.speechSynthesis.cancel(); } catch (e) {} }

  /* ---------- trang chủ ---------- */
  var pathStage = null, heroInfo = null;
  function streakInfo() { return SE.computeStreak(CS.days(), today()); }
  function targetLesson() {
    var s = CS.session(); if (s && s.lessonId) return s.lessonId;
    var pos = CS.position(), ls = K.allLessons(), i;
    if (pos && pos.lessonId && K.findLesson(pos.lessonId) && K.lessonState(pos.lessonId) !== 'done') return pos.lessonId;
    for (i = 0; i < ls.length; i++) if (K.lessonState(ls[i].id) !== 'done') return ls[i].id;
    return ls.length ? ls[ls.length - 1].id : null;
  }
  function chipsHtml() {
    var st = streakInfo(), A = root.ANKI;
    var right = KIDS ? '<span class="hm-chip" title="Số sao">⭐ <b>' + CS.getStars() + '</b></span>' : '<span class="hm-chip" title="Số từ đã thuộc">📚 <b>' + SE.learnedWords(CS.cards()) + '</b></span>';
    return '<span class="hm-chip" title="Chuỗi ngày học (nghỉ tối đa 2 ngày trong 7 ngày vẫn giữ chuỗi)">🔥 <b>' + st.current + '</b></span>' + right;
  }
  function renderHome() {
    migrateLeitner();
    var meta = metaStages(), st = streakInfo(), sess = CS.session(), lid = targetLesson(), ref = lid ? K.findLesson(lid) : null;
    if (pathStage == null || !meta.some(function (s) { return s.id === pathStage; })) pathStage = (ref && ref.stage) || (meta[0] && meta[0].id);
    var h = '<header class="hm-top"><div class="hm-title">' + esc(CFG.name || '') + '</div><div class="hm-right">' + chipsHtml() + '<button type="button" id="hmGear" class="hm-gear" aria-label="Cài đặt">⚙️</button></div></header>';
    h += '<main class="hm-wrap"><section class="hm-hero" aria-label="Học hôm nay">';
    h += '<div class="hm-hero-l" id="hmHeroL">' + (ref ? '<b>Bài ' + esc(ref.lesson.id) + '</b> · ' + esc(ref.lesson.name) : 'Chưa có bài') + '<span id="hmSeg"></span></div>';
    h += '<button type="button" id="hmToday" class="hm-main">' + (sess ? '▶ TIẾP TỤC CHẶNG DỞ' : '▶ HỌC HÔM NAY (5 PHÚT)') + '</button>';
    h += '<button type="button" id="hmQuick" class="hm-quick">⚡ Bận quá? Giữ nhịp 90 giây (5 câu ôn nhanh)</button>';
    h += '<div class="hm-days">🔥 Chuỗi hiện tại: <b>' + st.current + '</b> ngày · 🏆 Tổng số ngày đã học: <b>' + st.total + '</b>' + (st.studiedToday ? ' · hôm nay xong ✓' : '') + '</div>';
    if (KIDS) { var rw = CS.setting('reward', null); h += '<button type="button" id="hmReward" class="hm-reward">🎁 Mục tiêu đổi thưởng cùng bố mẹ: ' + (rw && rw.text ? '<b>' + esc(rw.text) + '</b> (hiện tại: ' + CS.getStars() + '/' + (rw.target || 100) + '⭐)' : '<i>nhấp để nhập, ví dụ: 100⭐ = đi ăn kem</i>') + '</button>'; }
    h += '</section>';
    h += '<nav class="hm-tabs" role="tablist" aria-label="Giai đoạn">' + meta.map(function (s) {
      var n = 0, d = 0; s.modules.forEach(function (m) { m.lessons.forEach(function (l) { n++; if (K.lessonState(l.id) === 'done') d++; }); });
      return '<button type="button" role="tab" data-stage="' + s.id + '" class="' + (s.id === pathStage ? 'on' : '') + '">' + esc(s.label) + '<small>' + d + '/' + n + '</small></button>';
    }).join('') + '</nav>';
    var sg = meta.filter(function (s) { return s.id === pathStage; })[0];
    h += '<div class="hm-path">';
    if (sg) sg.modules.forEach(function (m) {
      h += '<section class="hm-mod"><h3><span>' + esc(m.code) + '</span> ' + esc(m.title) + '</h3><ol>';
      m.lessons.forEach(function (l, k) {
        var s = K.lessonState(l.id), cur = l.id === lid && s !== 'done', cls = s === 'done' ? 'done' : cur ? 'now' : s === 'doing' ? 'doing' : 'new';
        h += '<li class="' + cls + '"><button type="button" class="hm-node" data-l="' + esc(l.id) + '"><span class="ic" aria-hidden="true">' + (cls === 'done' ? '✓' : cls === 'now' ? '▶' : cls === 'doing' ? '●' : '') + '</span><span class="tx"><b>' + esc(l.id) + '</b> ' + esc(l.name) + '</span></button></li>';
      });
      h += '</ol></section>';
    });
    h += '</div></main>';
    homeEl.innerHTML = h;
    $('#hmGear', homeEl).onclick = openGear;
    $('#hmToday', homeEl).onclick = function () { start('full'); };
    $('#hmQuick', homeEl).onclick = function () { start('quick'); };
    var rwb = $('#hmReward', homeEl); if (rwb) rwb.onclick = openReward;
    $$('.hm-tabs button', homeEl).forEach(function (b) { b.onclick = function () { pathStage = parseInt(b.getAttribute('data-stage'), 10); renderHome(); }; });
    $$('.hm-node', homeEl).forEach(function (b) { b.onclick = function () { openSheet(b.getAttribute('data-l')); }; });
    if (lid) withLesson(lid, function (les) {                  // chặng k/N cần số câu của bài (nạp dữ liệu cấp nếu chưa có)
      var seg = $('#hmSeg', homeEl); if (!les || !seg) return;
      var plan = SE.lessonPlan((les.chunks || []).length, (les.qaList || []).length), ld = CS.lesson(lid), nd = ld && ld.newDone || 0, segs = SE.segmentCount(plan.length);
      var k = s0done(lid) ? segs : Math.min(segs, Math.floor(nd / SE.LIMITS.newSteps) + 1);
      seg.textContent = ' • Chặng ' + k + '/' + segs; heroInfo = { lessonId: lid, seg: k, segs: segs };
    });
  }
  function s0done(id) { return false; }
  shell.heroInfo = function () { return heroInfo; };
  function openSheet(lessonId) {
    var ref = K.findLesson(lessonId), st = K.lessonState(lessonId);
    var m = modal('<h2>Bài ' + esc(lessonId) + '</h2><p class="kit-sub">' + esc(ref ? ref.lesson.name : '') + '</p>' +
      '<button type="button" class="kit-big hot" id="shGo"><b>▶ ' + (st === 'done' ? 'Ôn lại bài này' : 'Học bài này') + '</b><small>Chặng ngắn 4–5 phút, chấm đúng/sai tự động</small></button>' +
      '<button type="button" class="kit-big" id="shDetail"><b>📖 Xem chi tiết bài</b><small>Giao diện đầy đủ 6 pha (kể cả tự viết câu), không tính tiến độ chặng</small></button>' +
      '<div class="kit-row"><button type="button" id="shClose">Đóng</button></div>');
    $('#shGo', m.el).onclick = function () { m.close(); start('full', lessonId); };
    $('#shDetail', m.el).onclick = function () { m.close(); goDetail(lessonId, 'p1'); };
    $('#shClose', m.el).onclick = m.close;
  }

  /* ---------- hộp thoại nhỏ dùng chung ---------- */
  function modal(html) {
    var back = el('div', { class: 'kit-modal kit-top open', role: 'dialog', 'aria-modal': 'true' }, '<div class="kit-card">' + html + '</div>'); doc.body.appendChild(back);
    var api = { el: back, close: function () { back.remove(); } };
    back.onclick = function (e) { if (e.target === back) api.close(); };
    K.hardenInputs(back);
    return api;
  }
  function openReward() {
    var rw = CS.setting('reward', null) || {};
    var m = modal('<h2>🎁 Mục tiêu đổi thưởng</h2><p class="kit-sub">Bố mẹ và con cùng đặt phần thưởng; chỉ lưu trên máy này.</p><label class="kit-lb" for="rwText">Phần thưởng</label><input id="rwText" type="text" value="' + esc(rw.text || '') + '" placeholder="Ví dụ: đi ăn kem" style="width:100%;box-sizing:border-box;border:2px solid #cbd5e1;border-radius:12px;padding:10px;font-size:16px"><label class="kit-lb" for="rwTarget">Cần bao nhiêu ⭐</label><input id="rwTarget" type="number" min="1" max="9999" value="' + (rw.target || 100) + '" style="width:120px;border:2px solid #cbd5e1;border-radius:12px;padding:10px;font-size:16px"><div class="kit-row"><button type="button" class="go" id="rwOk">Lưu</button><button type="button" id="rwNo">Đóng</button></div>');
    $('#rwOk', m.el).onclick = function () { CS.setSetting('reward', { text: $('#rwText', m.el).value.trim().slice(0, 60), target: Math.max(1, parseInt($('#rwTarget', m.el).value, 10) || 100) }); m.close(); renderHome(); };
    $('#rwNo', m.el).onclick = m.close;
  }

  /* ---------- ⚙️ cài đặt: gom sao lưu, báo lỗi, hiển thị, thống kê, kho từ ---------- */
  function openGear() {
    var parent = CS.setting('parentMode', false) === true, showPy = CS.setting('showPy', true) !== false, showHv = CS.setting('showHv', true) !== false, nick = CS.setting('nickname', '');
    var h = '<h2>⚙️ Cài đặt</h2>';
    h += '<label class="kit-chk"><input type="checkbox" id="gParent"' + (parent ? ' checked' : '') + '> <span><b>Buổi 30 phút cùng bố mẹ</b><br><small>Bật: "Học hôm nay" chạy liền 6 chặng và hiện nhịp 8 giây như bản cũ.</small></span></label>';
    if (!KIDS && typeof root.toggleLayer === 'function') h += '<label class="kit-chk"><input type="checkbox" id="gPy"' + (showPy ? ' checked' : '') + '> <span>Hiện pinyin</span></label><label class="kit-chk"><input type="checkbox" id="gHv"' + (showHv ? ' checked' : '') + '> <span>Hiện âm Hán Việt</span></label>';
    h += '<label class="kit-chk"><input type="checkbox" id="gSlow"' + (CS.setting('playerSlow', false) ? ' checked' : '') + '> <span>Đọc chậm (🐢 0.72x) mặc định</span></label>';
    h += '<label class="kit-lb" for="gNick">' + (KIDS ? 'Biệt danh trên ảnh thành tích (tùy chọn)' : 'Tên trên ảnh thành tích (tùy chọn)') + '</label><input id="gNick" type="text" maxlength="24" value="' + esc(nick) + '" style="width:100%;box-sizing:border-box;border:2px solid #cbd5e1;border-radius:12px;padding:10px;font-size:16px" placeholder="' + (KIDS ? 'Để trống nếu không muốn có tên' : 'Để trống nếu không muốn có tên') + '">';
    h += '<div class="kit-gear-list">';
    h += '<button type="button" id="gBank">🗂️ Kho từ (ôn từ vựng theo thẻ)</button><button type="button" id="gStats">📊 Thống kê của bạn</button>';
    if (!KIDS) h += '<button type="button" id="gLoop">🎧 Nghe lặp khi di chuyển</button>';
    h += '<button type="button" id="gBackup">💾 Sao lưu &amp; khôi phục tiến độ</button><button type="button" id="gFeedback">💬 Góp ý / Báo lỗi</button><button type="button" id="gDetail">📖 Trang chi tiết bài (6 pha)</button><button type="button" id="gTut">👋 Xem lại hướng dẫn 3 bước</button></div>';
    h += '<div class="kit-row"><button type="button" id="gClose">Đóng</button></div>';
    var m = modal(h), q = function (s) { return $(s, m.el); };
    q('#gParent').onchange = function () { CS.setSetting('parentMode', this.checked); };
    if (q('#gPy')) { q('#gPy').onchange = function () { if ((CS.setting('showPy', true) !== false) !== this.checked) root.toggleLayer('py'); }; q('#gHv').onchange = function () { if ((CS.setting('showHv', true) !== false) !== this.checked) root.toggleLayer('hv'); }; }
    q('#gSlow').onchange = function () { CS.setSetting('playerSlow', this.checked); };
    q('#gNick').onchange = function () { CS.setSetting('nickname', this.value.trim().slice(0, 24)); };
    q('#gNick').oninput = function () { CS.setSetting('nickname', this.value.trim().slice(0, 24)); };
    q('#gBank').onclick = function () { m.close(); if (root.ANKI && root.ANKI.open) root.ANKI.open(); };
    q('#gStats').onclick = function () { m.close(); K.openStats(); };
    if (q('#gLoop')) q('#gLoop').onclick = function () { m.close(); K.openLoop(); };
    q('#gBackup').onclick = function () { m.close(); K.openBackup(); };
    q('#gFeedback').onclick = function () { m.close(); K.feedback(); };
    q('#gDetail').onclick = function () { m.close(); goDetail(targetLesson(), 'p1'); };
    q('#gTut').onclick = function () { m.close(); K.showTutorial(); };
    q('#gClose').onclick = function () { m.close(); if (view === 'home') renderHome(); };
  }
  K.openGear = openGear; shell.openGear = openGear;

  /* =====================================================================
     PLAYER: chặng ≤ 12 bước
     ===================================================================== */
  var cur = null;                                           // bước đang hiển thị: {idx, step, answered, clock, solve, les, ref}
  function sessionNow() { return CS.session(); }

  function start(mode, lessonId) {
    unlockAudio(); stopAudio(); migrateLeitner();
    var ex = CS.session();
    if (ex && !lessonId && (mode === 'full' || mode === ex.mode)) { shell.resume(); return; }
    if (ex) CS.setSession(null);
    if (mode === 'quick') { startQuick(); return; }
    var id = lessonId || targetLesson();
    withLesson(id, function (les, ref) {
      if (!les) { K.toast('Không mở được bài này.'); return; }
      var plan = SE.lessonPlan((les.chunks || []).length, (les.qaList || []).length), ld = CS.lesson(id), done = K.lessonState(id) === 'done';
      var due = SE.pickReviews(CS.cards(), now()).filter(validReview);
      var seg = SE.buildSegment({ lessonId: id, plan: plan, newDone: ld && ld.newDone || 0, tipNeeded: !(ld && ld.tipSeen), hasTip: tipLinesOf(les).length > 0, dueKeys: due, replay: done });
      var parentOn = CS.setting('parentMode', false) === true;
      var s = SE.newSession({ mode: 'full', lessonId: id, steps: seg.steps, seg: seg.seg, segs: seg.segs, newFrom: seg.newFrom, newTo: seg.newTo, now: now(), parent: parentOn, parentN: 1, replay: done });
      s.planLen = plan.length; s.stage = ref.stage;
      CS.setSession(s);
      try { if (root.ANKI && root.ANKI.markOpened) root.ANKI.markOpened(id); } catch (e) {}
      showPlayer();
    });
  }
  function startQuick() {
    var keys = SE.pickQuick(CS.cards(), Math.random, SE.LIMITS.quick * 3).filter(validReview).slice(0, SE.LIMITS.quick);
    var id = targetLesson();
    if (keys.length) { var q = SE.buildQuick(keys); var s = SE.newSession({ mode: 'quick', lessonId: null, steps: q.steps, now: now() }); s.planLen = 0; CS.setSession(s); showPlayer(); return; }
    withLesson(id, function (les) {                           // người mới chưa có thẻ nào: 5 câu nghe–chọn từ bài hiện tại
      if (!les || !(les.chunks || []).length) { K.toast('Chưa có gì để ôn nhanh.'); return; }
      var nc = (les.chunks || []).length, steps = [];
      for (var i = 0; nc && i < SE.LIMITS.quick; i++) steps.push({ kind: 'new', t: 'listen', ci: i % nc, pi: i });       // bài ít câu thì quay vòng để đủ 5
      var s = SE.newSession({ mode: 'quick', lessonId: id, steps: steps, now: now() }); s.planLen = 0; CS.setSession(s); showPlayer();
    });
  }
  shell.start = start;
  shell.resume = function () { if (CS.session()) showPlayer(); };
  function showPlayer() { setView('player'); renderCurrent(); }

  function playerShell() {
    return '<div class="pl-top"><button type="button" id="plX" class="pl-x" aria-label="Về trang chủ">✕</button><div class="pl-bar" role="progressbar" aria-valuemin="0" aria-valuemax="12"><i id="plBarFill"></i></div><span class="pl-count" id="plCount"></span><button type="button" id="plSpeed" class="pl-speed" aria-label="Tốc độ đọc"></button></div>' +
      '<div class="pl-reflex" id="plReflex" hidden><i></i></div>' +
      '<div class="pl-body"><div class="pl-card" id="plCard"></div></div>' +
      '<div class="pl-fb" id="plFb" hidden><div class="pl-fb-in"><div class="pl-fb-msg" id="plFbMsg"></div><button type="button" id="plNext" class="pl-next">Tiếp tục ➔</button></div></div>';
  }
  function updateSpeedBtn() { var b = $('#plSpeed', playerEl); if (b) b.textContent = CS.setting('playerSlow', false) ? '🐢 0.72x' : '🔊 1.0x'; }

  function renderCurrent() {
    var s = sessionNow(); if (!s) { goHome(); return; }
    var c = SE.current(s); if (!c) { finish(s); return; }
    var pr = SE.progress(s), fill = $('#plBarFill', playerEl), cnt = $('#plCount', playerEl);
    if (fill) fill.style.width = Math.round(100 * pr.done / Math.max(1, pr.total)) + '%';
    if (cnt) cnt.textContent = Math.min(pr.done + 1, pr.total) + '/' + pr.total;
    var bar = $('.pl-bar', playerEl); if (bar) { bar.setAttribute('aria-valuenow', String(pr.done)); bar.setAttribute('aria-valuemax', String(pr.total)); }
    updateSpeedBtn();
    $('#plFb', playerEl).hidden = true;
    var refl = $('#plReflex', playerEl);
    if (s.parent) { refl.hidden = false; var i = $('i', refl); i.style.transition = 'none'; i.style.width = '100%'; void i.offsetWidth; i.style.transition = 'width 8s linear'; i.style.width = '0'; } else refl.hidden = true;
    cur = { idx: c.idx, step: c.step, retry: c.retry, answered: false, clock: null, solve: null };
    var host = $('#plCard', playerEl); host.innerHTML = '<div class="pl-loading">…</div>';
    var go = function (les, ref) { cur.les = les; cur.ref = ref; if (!sessionNow() || view !== 'player') return; renderStep(host, c.step, les, ref); K.hardenInputs(host); };
    if (c.step.kind === 'review') go(null, null); else withLesson(s.lessonId, go);
  }

  /* ---------- trả lời một bước ---------- */
  function ctxFor(host) {
    return {
      host: host,
      startClock: function () { if (cur && cur.clock === null) cur.clock = performance.now(); },
      speak: function (text) { return K.speakOnce(text, LANG, rateNow()); },
      done: function (ok, fbHtml) { answerNow(ok, fbHtml); },
      passive: function (fbHtml) { answerNow(true, fbHtml, true); }
    };
  }
  function answerNow(ok, fbHtml, passive) {
    if (!cur || cur.answered) return; cur.answered = true;
    var s = sessionNow(), ms = cur.clock === null ? null : Math.round(performance.now() - cur.clock);
    var r = SE.answer(s, ok, { ms: ms });
    if (r.srs && !passive) applyReview(r.srs);
    else if (r.firstTry && !passive && cur.step.kind === 'new') CS.addLog({ item: (cur.les ? cur.les.id : s.lessonId) + ':' + ((cur.step.ci !== undefined ? cur.step.ci : cur.step.qi || 0) + 1), ok: ok, ms: ms, kind: cur.step.t });
    if (cur.step.kind === 'tip' && s.lessonId) CS.setLessonField(s.lessonId, 'tipSeen', true);
    CS.setSession(r.session);
    var fb = $('#plFb', playerEl); fb.hidden = false; fb.className = 'pl-fb ' + (passive ? 'neutral' : ok ? 'good' : 'bad');
    $('#plFbMsg', playerEl).innerHTML = fbHtml || (ok ? '✅ Đúng!' : '💡 Chưa đúng.');
    var nx = $('#plNext', playerEl); nx.textContent = SE.finished(r.session) ? 'Hoàn thành ➔' : 'Tiếp tục ➔'; try { nx.focus({ preventScroll: true }); } catch (e) {}
    $$('#plCard button.pl-opt, #plCard input', playerEl).forEach(function (b) { b.disabled = true; });
  }
  function applyReview(srs) {
    var cards = CS.cards(), old = cards[srs.key]; if (!old) return;
    var nc = SRS.grade(old, { ok: srs.ok, ms: srs.ms, kind: 'choose', young: KIDS && reviewLevel(srs.key) <= 3 }, now());
    CS.setCard(srs.key, nc);                                  // SRS.sm2 giữ nguyên trường lạ (vd. q của thẻ L)
    CS.addLog({ item: srs.key, ok: srs.ok, ms: srs.ms, kind: 'choose' });
  }
  function reviewLevel(key) { var id = key.indexOf('#') < 0 ? key : key.slice(0, key.indexOf('#')), w = ankiById(id); return w && w.level || 9; }
  function next() {
    if (!cur || !cur.answered) return;
    var s = sessionNow(); if (!s) { goHome(); return; }
    if (SE.finished(s)) finish(s); else renderCurrent();
  }

  /* ---------- hiển thị câu theo từng khóa ---------- */
  function layersHtml(ch, big) {
    if (KIDS) return '<div class="ly-en">' + esc(ch.full) + '</div>';
    var showPy = CS.setting('showPy', true) !== false, showHv = CS.setting('showHv', true) !== false;
    var hv = (ch.parts || []).map(function (p) { return fixHv(p.hv); }).join(' ');
    return '<div class="ly-han" lang="zh-CN">' + esc(ch.full) + '</div>' + (showPy && ch.py ? '<div class="ly-py">' + esc(ch.py) + '</div>' : '') + (showHv && hv ? '<div class="ly-hv">' + esc(hv) + '</div>' : '');
  }
  function optsBtns(items, extra) {
    return '<div class="pl-opts ' + (extra || '') + '">' + items.map(function (o, i) { return '<button type="button" class="pl-opt" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd><span>' + o + '</span></button>'; }).join('') + '</div>';
  }
  /* gắn bộ chọn đáp án: correct = chỉ số đúng; onPick(ok, index) */
  function bindOpts(ctx, correct, onPick) {
    var btns = $$('#plCard .pl-opt', playerEl), picked = false;
    btns.forEach(function (b) {
      b.onclick = function () {
        if (picked || cur.answered) return; picked = true;
        var i = parseInt(b.getAttribute('data-i'), 10), ok = i === correct;
        b.classList.add(ok ? 'ok' : 'bad'); if (!ok && btns[correct]) btns[correct].classList.add('ok');
        onPick(ok, i);
      };
    });
    cur.solve = function (ok) { var i = ok ? correct : (correct + 1) % btns.length; btns[i].click(); };
  }
  function scenePool(les, ch, n, rnd) {
    var all = []; (les.chunks || []).forEach(function (c) { if (c.scene && c.scene !== ch.scene && all.indexOf(c.scene) < 0) all.push(c.scene); });
    if (all.length < n) ankiWords().forEach(function (w) { if (all.length < n + 6 && w.ico && w.ico !== ch.scene && all.indexOf(w.ico) < 0) all.push(w.ico); });
    return shuffled(all, rnd).slice(0, n);
  }

  var R = {};                                               // bộ vẽ từng loại bước
  function renderStep(host, step, les, ref) {
    var ctx = ctxFor(host), fn = step.kind === 'review' ? R.review : step.kind === 'tip' ? R.tip : R[step.t];
    if (!fn) { ctx.passive('(bước không hỗ trợ — bỏ qua)'); return; }
    fn(host, step, les, ref, ctx);
  }

  R.tip = function (host, step, les, ref, ctx) {
    var lines = tipLinesOf(les), ch0 = (les.chunks || [])[0];
    host.innerHTML = '<div class="pl-tip"><div class="pl-kicker">🧲 Quy luật cốt lõi</div><ol>' + lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ol>' + (ch0 ? '<div class="pl-ex">' + layersHtml(ch0) + '<button type="button" class="pl-say" id="plSay">🔊 Nghe ví dụ</button></div>' : '') + '</div>';
    var b = $('#plSay', host); if (b) b.onclick = function () { say(ch0.full); };
    cur.solve = function () { ctx.passive('👍 Đã đọc quy luật — làm bài thôi!'); };
    var more = el('button', { type: 'button', class: 'pl-btn', id: 'plTipOk' }, 'Đã hiểu ✓'); host.appendChild(more);
    more.onclick = function () { ctx.passive('👍 Đã đọc quy luật — làm bài thôi!'); };
  };

  R.review = function (host, step, les, ref, ctx) {
    var key = step.key, card = CS.cards()[key];
    if (key.indexOf('lt:') === 0) {
      var q = card && card.q; if (!q) { ctx.passive('(thẻ không còn dùng được)'); return; }
      var opts = q.options.map(function (o) { return o.txt; }), idx = Math.max(0, opts.indexOf(q.answer));
      host.innerHTML = '<div class="pl-kicker">Ôn lại</div><div class="pl-prompt">' + esc(q.prompt || 'Chọn đáp án đúng:') + '</div><div class="pl-ico">' + esc(q.scene || '') + '</div>' + (q.word ? '<button type="button" class="pl-say" id="plSay">🔊 Nghe</button>' : '') + optsBtns(opts.map(esc), 'wide');
      var sb = $('#plSay', host); if (sb) sb.onclick = function () { say(q.word); };
      ctx.startClock(); bindOpts(ctx, idx, function (ok) { ctx.done(ok, ok ? '✅ Đúng! <b>' + esc(q.answer) + '</b>' : '💡 Đáp án: <b>' + esc(q.answer) + '</b>'); if (ok && q.word) say(q.word); });
      return;
    }
    var qz = root.ANKI.quiz(key); if (!qz) { ctx.passive('(thẻ không còn dùng được)'); return; }
    var w = qz.word, idx2 = Math.max(0, qz.options.indexOf(qz.answer)), detail = '<b>' + esc(w.text) + '</b>' + (w.read ? ' [' + esc(w.read) + ']' : '') + ' = ' + esc(w.vi) + (w.ex && w.ex.t ? '<br><small>' + esc(w.ex.t) + '</small>' : '');
    var head = '<div class="pl-kicker">Ôn lại từ</div>';
    if (qz.type === 'A') host.innerHTML = head + '<div class="pl-prompt">Từ này nghĩa là gì?</div><div class="pl-ico">' + esc(w.ico || '') + '</div><div class="pl-word" lang="' + LANG + '">' + esc(w.text) + '</div>' + (w.read ? '<div class="ly-py">' + esc(w.read) + '</div>' : '') + '<button type="button" class="pl-say" id="plSay">🔊 Nghe</button>' + optsBtns(qz.options.map(esc), 'wide');
    else if (qz.type === 'B') host.innerHTML = head + '<div class="pl-prompt">Điền từ còn thiếu:</div><div class="pl-ico">' + esc(w.ico || '') + '</div><div class="pl-sub">' + esc(w.vi) + '</div><div class="pl-cloze" lang="' + LANG + '">' + esc(qz.cloze).replace(/_{2,}/g, '<span class="pl-blank">　　</span>') + '</div>' + optsBtns(qz.options.map(esc), '');
    else host.innerHTML = head + '<div class="pl-prompt">Nghe và chọn từ đúng:</div><button type="button" class="pl-say big" id="plSay">🔊 Nghe lại</button>' + optsBtns(qz.options.map(esc), '');
    var sb2 = $('#plSay', host); if (sb2) sb2.onclick = function () { say(w.text); };
    bindOpts(ctx, idx2, function (ok) { ctx.done(ok, (ok ? '✅ Đúng! ' : '💡 Đáp án: ') + detail); say(w.text); });
    if (qz.type === 'C') ctx.speak(w.text).then(ctx.startClock); else ctx.startClock();
  };

  R.listen = function (host, step, les, ref, ctx) {
    var ch = les.chunks[step.ci]; if (!ch) { ctx.passive('(bước trống)'); return; }
    var rnd = rng(hash(les.id + '|listen|' + step.pi)), pool = scenePool(les, ch, 3, rnd), opts = shuffled([ch.scene].concat(pool), rnd), idx = opts.indexOf(ch.scene);
    host.innerHTML = '<div class="pl-kicker">Nghe và chọn tranh</div><div class="pl-prompt">Bạn nghe thấy câu nào?</div><button type="button" class="pl-say big" id="plSay">🔊 Nghe</button>' + optsBtns(opts.map(esc), 'scenes');
    $('#plSay', host).onclick = function () { say(ch.full); };
    bindOpts(ctx, idx, function (ok) { ctx.done(ok, (ok ? '✅ Đúng! ' : '💡 Câu đó là: ') + '<div class="fb-sent">' + layersHtml(ch) + (ch.vi ? '<div class="ly-vi">' + esc(ch.vi) + '</div>' : '') + '</div>'); });
    ctx.speak(ch.full).then(ctx.startClock);
  };

  R.build = function (host, step, les, ref, ctx) {
    var ch = les.chunks[step.ci]; if (!ch || !(ch.parts || []).length) { ctx.passive('(bước trống)'); return; }
    var rnd = rng(hash(les.id + '|build|' + step.pi)), order = shuffled(ch.parts.map(function (_, i) { return i; }), rnd);
    if (order.join() === ch.parts.map(function (_, i) { return i; }).join() && order.length > 1) order.push(order.shift());
    var tray = [], full = ch.parts.length;
    host.innerHTML = '<div class="pl-kicker">Ghép câu</div><div class="pl-prompt">Ghép các toa thành câu đúng với tranh</div><div class="pl-ico">' + esc(ch.scene || '') + '</div>' + (ch.vi ? '<div class="pl-sub">' + esc(ch.vi) + '</div>' : '<button type="button" class="pl-say" id="plSay">🔊 Nghe câu mẫu</button>') +
      '<div class="pl-tray" id="plTray" aria-label="Câu của bạn"></div><div class="pl-chips" id="plChips"></div>';
    var sb = $('#plSay', host); if (sb) sb.onclick = function () { say(ch.full); };
    function chip(i, inTray) {
      var p = ch.parts[i];
      return '<button type="button" class="pl-chip ' + (p.c || '') + '" data-p="' + i + '"><span class="t">' + esc(p.t) + '</span>' + (!KIDS && p.py ? '<small>' + esc(p.py) + '</small>' : '') + '</button>';
    }
    function draw() {
      $('#plTray', host).innerHTML = tray.length ? tray.map(function (i) { return chip(i, true); }).join('') : '<span class="pl-hint">Chạm các toa bên dưới theo đúng thứ tự</span>';
      $('#plChips', host).innerHTML = order.filter(function (i) { return tray.indexOf(i) < 0; }).map(function (i) { return chip(i, false); }).join('');
      $$('#plTray .pl-chip', host).forEach(function (b) { b.onclick = function () { if (cur.answered) return; tray.splice(tray.indexOf(parseInt(b.getAttribute('data-p'), 10)), 1); draw(); }; });
      $$('#plChips .pl-chip', host).forEach(function (b) { b.onclick = function () { if (cur.answered) return; tray.push(parseInt(b.getAttribute('data-p'), 10)); draw(); if (tray.length === full) check(); }; });
    }
    function check() {
      var ok = tray.every(function (p, i) { return p === i; }) || tray.map(function (p) { return ch.parts[p].t; }).join('') === ch.parts.map(function (p) { return p.t; }).join('');
      ctx.done(ok, (ok ? '✅ Đúng! ' : '💡 Câu đúng là: ') + '<div class="fb-sent">' + layersHtml(ch) + (ch.vi ? '<div class="ly-vi">' + esc(ch.vi) + '</div>' : '') + '</div>'); say(ch.full);
    }
    draw(); ctx.startClock();
    cur.solve = function (ok) {
      var seq = ch.parts.map(function (_, i) { return i; });
      if (!ok) { if (seq.length > 1) { var t = seq[0]; seq[0] = seq[1]; seq[1] = t; } }
      tray = []; seq.forEach(function (i) { tray.push(i); }); draw(); check();
    };
  };

  R.qa = function (host, step, les, ref, ctx) {
    var q = (les.qaList || [])[step.qi]; if (!q) { ctx.passive('(bước trống)'); return; }
    var rnd = rng(hash(les.id + '|qa|' + step.qi)), opts = shuffled(q.opts || [], rnd), idx = Math.max(0, opts.map(function (o) { return o.txt; }).indexOf(q.ans));
    host.innerHTML = '<div class="pl-kicker">Hỏi đáp</div><div class="pl-ico">' + esc(q.scene || '') + '</div><div class="pl-q" lang="' + LANG + '">' + esc(q.q) + '</div>' + (q.qvi ? '<div class="pl-sub">' + esc(q.qvi) + '</div>' : '') + '<button type="button" class="pl-say" id="plSay">🔊 Nghe câu hỏi</button>' +
      optsBtns(opts.map(function (o) { return (o.ico ? '<span class="oi">' + esc(o.ico) + '</span> ' : '') + esc(o.txt) + (!KIDS && o.py ? '<small>' + esc(o.py) + '</small>' : ''); }), 'wide');
    $('#plSay', host).onclick = function () { say(q.q); };
    bindOpts(ctx, idx, function (ok) { ctx.done(ok, (ok ? '✅ Đúng! ' : '💡 Đáp án: ') + '<b>' + esc(q.ans) + '</b>'); say(q.ans); });
    ctx.speak(q.q).then(ctx.startClock);
  };

  R.type = function (host, step, les, ref, ctx) {
    var ch = les.chunks[step.ci]; if (!ch) { ctx.passive('(bước trống)'); return; }
    var target = KIDS ? String(ch.traceWord || '') : String(ch.traceWord || ''), expected = KIDS ? target.toLowerCase().replace(/[^a-z]/g, '') : normKey(ch.traceKey || '');
    host.innerHTML = '<div class="pl-kicker">Gõ từ khóa</div><div class="pl-ico">' + esc(ch.scene || '') + '</div><div class="pl-word" lang="' + LANG + '">' + esc(target) + '</div>' +
      '<div class="pl-prompt">' + (KIDS ? 'Gõ lại từ này bằng bàn phím' : 'Gõ pinyin không dấu của từ này') + (KIDS ? '' : ' <small>(ví dụ: ' + esc(expected.slice(0, 2)) + '…)</small>') + '</div>' +
      '<div class="pl-typebox"><input id="plTyped" type="text" placeholder="' + (KIDS ? 'gõ ở đây' : 'gõ pinyin') + '" aria-label="Ô gõ"><button type="button" class="pl-btn" id="plCheck">Kiểm tra</button></div><button type="button" class="pl-say" id="plSay">🔊 Nghe</button><div class="pl-hint" id="plHint"></div>';
    var inp = $('#plTyped', host); K.hardenInputs(host);
    $('#plSay', host).onclick = function () { say(target); };
    function check() {
      var raw = inp.value; if (!raw.trim()) return;
      var norm = function (t) { return KIDS ? String(t).toLowerCase().replace(/[^a-z]/g, '') : normKey(t); }, ok = norm(raw) === expected, hint = '';
      if (!ok && K.telexCandidates) K.telexCandidates(raw).forEach(function (c) { if (!ok && norm(c) === expected) { ok = true; hint = ' ⚠️ ' + K.TELEX_HINT; } });
      ctx.done(ok, (ok ? '✅ Đúng!' + hint + ' ' : '💡 Đáp án: ') + '<b>' + esc(KIDS ? target : (ch.py ? ch.py : expected)) + '</b>'); say(target);
    }
    $('#plCheck', host).onclick = check;
    inp.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); check(); } e.stopPropagation(); };
    ctx.startClock(); try { inp.focus({ preventScroll: true }); } catch (e) {}
    cur.solve = function (ok) { inp.value = ok ? expected : 'zzz'; check(); };
  };

  R.speak = function (host, step, les, ref, ctx) {
    var ch = les.chunks[step.ci]; if (!ch) { ctx.passive('(bước trống)'); return; }
    var SR = root.SpeechRecognition || root.webkitSpeechRecognition;
    host.innerHTML = '<div class="pl-kicker">Nói theo mẫu</div><div class="pl-ico">' + esc(ch.scene || '') + '</div><div class="pl-ex">' + layersHtml(ch) + '</div><div class="pl-row"><button type="button" class="pl-say" id="plSay">🔊 Nghe mẫu</button>' + (SR ? '<button type="button" class="pl-btn" id="plMic">🎤 Nói</button>' : '') + (K.canRecord && K.canRecord() ? '<button type="button" class="pl-say" id="plEcho">🎙️ Thu &amp; nghe so sánh</button>' : '') + '</div><div class="pl-hint" id="plHeard"></div>' +
      '<div class="pl-row"><button type="button" class="pl-btn" id="plSelfOk">' + (SR ? 'Mình đã nói xong ✓' : 'Mình đã nói theo mẫu ✓') + '</button></div>';
    $('#plSay', host).onclick = function () { say(ch.full); };
    var echo = $('#plEcho', host); if (echo) echo.onclick = function () { K.record(ch.full); };
    var finished = false;
    function fin(ok, heard) { if (finished) return; finished = true; ctx.done(ok, (ok ? '✅ Tốt lắm! ' : '💡 Máy nghe được: ' + esc(heard || '…') + '. ') + '<div class="fb-sent">' + layersHtml(ch) + '</div>'); }
    function similar(heard) {
      if (KIDS) { var tw = ch.full.toLowerCase().replace(/[^a-z' ]/g, '').split(/\s+/).filter(Boolean), hw = String(heard).toLowerCase().split(/\s+/); return tw.filter(function (w) { return hw.indexOf(w) >= 0; }).length / Math.max(1, tw.length) >= 0.6; }
      var th = hanOnly(ch.full).split(''), hh = hanOnly(heard).split(''), n = 0; th.forEach(function (c) { var i = hh.indexOf(c); if (i >= 0) { n++; hh.splice(i, 1); } }); return n / Math.max(1, th.length) >= 0.6;
    }
    var mic = $('#plMic', host);
    if (mic) mic.onclick = function () {
      try {
        var r = new SR(); r.lang = LANG; r.interimResults = false; r.maxAlternatives = 3;
        r.onresult = function (ev) { var heard = ev.results[0][0].transcript; $('#plHeard', host).textContent = 'Máy nghe được: ' + heard; fin(similar(heard), heard); };
        r.onerror = function () { $('#plHeard', host).textContent = 'Không dùng được micro — bấm "Mình đã nói xong".'; };
        r.start(); $('#plHeard', host).textContent = 'Đang nghe…';
      } catch (e) { $('#plHeard', host).textContent = 'Không dùng được micro — bấm "Mình đã nói xong".'; }
    };
    $('#plSelfOk', host).onclick = function () { fin(true, ''); };
    ctx.speak(ch.full).then(ctx.startClock);
    cur.solve = function (ok) { if (ok) $('#plSelfOk', host).click(); else fin(false, ''); };
  };

  /* ---------- kết thúc chặng ---------- */
  function registerWords(les, s) {
    var sents = [], seen = {};
    s.steps.forEach(function (st) {
      if (st.kind !== 'new') return;
      var ch = st.ci !== undefined ? (les.chunks || [])[st.ci] : null; if (ch && !seen['c' + st.ci]) { seen['c' + st.ci] = 1; sents.push(ch.full); }
      var q = st.qi !== undefined ? (les.qaList || [])[st.qi] : null; if (q && !seen['q' + st.qi]) { seen['q' + st.qi] = 1; sents.push(q.q, q.ans); }
    });
    var types = CS.setting('anki.types', ['A', 'B']), ids = SE.wordsInSentences(ankiWords().filter(function (w) { return w.lesson === les.id; }).map(function (w) { return { id: w.id, forms: w.forms && w.forms.length ? w.forms : [w.text] }; }), sents, KIDS);
    var cards = CS.cards(), n = 0;
    ids.forEach(function (id) { (Array.isArray(types) ? types : ['A']).forEach(function (t) { var k = t === 'A' ? id : id + '#' + t; if (!cards[k]) { CS.setCard(k, SE.newCardFor(t, now())); n++; } }); });
    return n;
  }
  function finish(s) {
    var result = { mode: s.mode, accuracy: SE.accuracy(s), seg: s.seg, segs: s.segs, lessonId: s.lessonId, parent: s.parent, added: 0, lessonDone: false };
    var after = function (les) {
      if (s.mode === 'full' && s.lessonId && les) {
        if (!s.replay) {
          var ld = CS.ensureLesson(s.lessonId); CS.setLessonField(s.lessonId, 'newDone', Math.max(ld.newDone || 0, s.newTo));
          if (s.newTo >= (s.planLen || 0)) { CS.setLessonField(s.lessonId, 'status', 'done'); result.lessonDone = true; } else if (ld.status === 'new') CS.setLessonField(s.lessonId, 'status', 'doing');
          CS.setLessonField(s.lessonId, 'step', null);
        }
        result.added = registerWords(les, s);
      }
      CS.touchDay(today());
      if (s.parent && s.parent.n < s.parent.of && s.mode === 'full') { CS.setSession(null); chainParent(s, result); return; }
      CS.setSession(null); stopAudio();
      showVictory(result);
    };
    if (s.mode === 'full' && s.lessonId) withLesson(s.lessonId, after); else after(null);
  }
  function chainParent(prev, result) {                       // buổi 30 phút: chặng kế tiếp tự chạy
    var host = $('#plCard', playerEl); $('#plFb', playerEl).hidden = true;
    host.innerHTML = '<div class="pl-tip"><div class="pl-kicker">Chặng ' + prev.parent.n + '/' + prev.parent.of + ' xong</div><div class="pl-prompt">Giỏi lắm! Nghỉ vài giây rồi sang chặng ' + (prev.parent.n + 1) + '.</div><button type="button" class="pl-btn" id="plChain">Chặng ' + (prev.parent.n + 1) + ' ➔</button></div>';
    var go = function () {
      var id = targetLesson();
      withLesson(id, function (les, ref) {
        if (!les) { goHome(); return; }
        var plan = SE.lessonPlan((les.chunks || []).length, (les.qaList || []).length), ld = CS.lesson(id), done = K.lessonState(id) === 'done';
        var due = SE.pickReviews(CS.cards(), now()).filter(validReview);
        var seg = SE.buildSegment({ lessonId: id, plan: plan, newDone: ld && ld.newDone || 0, tipNeeded: !(ld && ld.tipSeen), hasTip: tipLinesOf(les).length > 0, dueKeys: due, replay: done });
        var n = SE.newSession({ mode: 'full', lessonId: id, steps: seg.steps, seg: seg.seg, segs: seg.segs, newFrom: seg.newFrom, newTo: seg.newTo, now: now(), parent: true, parentN: prev.parent.n + 1, replay: done });
        n.planLen = plan.length; n.stage = ref.stage; CS.setSession(n); renderCurrent();
      });
    };
    $('#plChain', host).onclick = go; cur = { answered: true };
  }

  /* =====================================================================
     VICTORY + thẻ ảnh thành tích
     ===================================================================== */
  var lastResult = null;
  function showVictory(res) {
    lastResult = res; setView('victory');
    var st = streakInfo(), learned = SE.learnedWords(CS.cards()), more = res.mode === 'full' && !res.lessonDone && res.segs > res.seg;
    victoryEl.innerHTML = '<div class="vc-wrap"><div class="vc-confetti" aria-hidden="true"></div><h1 class="vc-title">' + (res.mode === 'quick' ? '⚡ Giữ nhịp xong!' : res.lessonDone ? '🎉 Xong bài ' + esc(res.lessonId) + '!' : '🎉 Xong chặng ' + res.seg + '/' + res.segs + '!') + '</h1>' +
      '<div class="vc-stats"><div><b>🔥 ' + st.current + '</b><span>ngày kiên trì</span></div><div><b>🎯 ' + res.accuracy + '%</b><span>chính xác hôm nay</span></div><div><b>🌱 ' + learned + '</b><span>từ đã thuộc</span></div></div>' +
      '<p class="vc-sub">🏆 Tổng cộng ' + st.total + ' ngày đã học' + (res.added ? ' · thêm ' + res.added + ' thẻ vào kho từ' : '') + '. Hôm nay đã được tính 1 ngày học.</p>' +
      '<canvas id="vcCanvas" width="800" height="450" class="vc-canvas" aria-label="Thẻ ảnh thành tích"></canvas>' +
      '<div class="vc-row"><button type="button" class="pl-btn" id="vcShare">📸 Tải / Chia sẻ ảnh hoàn thành</button>' + (more ? '<button type="button" class="pl-btn alt" id="vcMore">▶ Chặng tiếp theo</button>' : '') + '<button type="button" class="pl-btn ghost" id="vcHome">🏠 Về trang chủ</button></div>' +
      '<label class="vc-nick">' + (KIDS ? 'Biệt danh trên ảnh (tùy chọn): ' : 'Tên trên ảnh (tùy chọn): ') + '<input id="vcNick" type="text" maxlength="24" value="' + esc(CS.setting('nickname', '')) + '"></label></div>';
    K.hardenInputs(victoryEl);
    var cv = $('#vcCanvas', victoryEl), data = { streak: st.current, total: st.total, learned: learned, accuracy: res.accuracy };
    drawCard(cv, data);
    $('#vcNick', victoryEl).oninput = function () { CS.setSetting('nickname', this.value.trim().slice(0, 24)); drawCard(cv, data); };
    $('#vcShare', victoryEl).onclick = function () { shareCard(cv); };
    $('#vcHome', victoryEl).onclick = goHome;
    var mb = $('#vcMore', victoryEl); if (mb) mb.onclick = function () { start('full'); };
    if (!reduceMotion()) confetti($('.vc-confetti', victoryEl));
  }
  function confetti(box) {
    var em = ['🎉', '⭐', '✨', '🌟', '🎊'], h = '';
    for (var i = 0; i < 18; i++) h += '<i style="left:' + Math.round(Math.random() * 100) + '%;animation-delay:' + (Math.random() * 1.2).toFixed(2) + 's">' + em[i % em.length] + '</i>';
    box.innerHTML = h;
  }
  function publicUrl() { var u = CFG.PUBLIC_URL || ''; if (u) return u; try { if (/^https?:$/.test(root.location.protocol)) return root.location.origin + root.location.pathname.replace(/index\.html$/, ''); } catch (e) {} return ''; }
  function drawCard(cv, d) {
    var c = cv.getContext('2d'), W = 800, H = 450, g = c.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, KIDS ? '#0ea5e9' : '#b91c1c'); g.addColorStop(1, KIDS ? '#6366f1' : '#f59e0b');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.fillStyle = 'rgba(255,255,255,.14)'; c.beginPath(); c.arc(700, 60, 150, 0, 7); c.fill(); c.beginPath(); c.arc(80, 420, 120, 0, 7); c.fill();
    c.fillStyle = '#fff'; c.textBaseline = 'alphabetic';
    c.font = '700 34px system-ui, "Segoe UI", sans-serif'; c.fillText(CFG.name || '', 40, 64);
    var dt = new Date(); c.font = '500 22px system-ui, sans-serif'; c.fillStyle = 'rgba(255,255,255,.9)'; c.fillText(pad2(dt.getDate()) + '/' + pad2(dt.getMonth() + 1) + '/' + dt.getFullYear(), 40, 100);
    var nick = CS.setting('nickname', ''); if (nick) { c.font = '600 28px system-ui, sans-serif'; c.fillStyle = '#fff'; c.fillText(nick, 40, 150); }
    var items = [['🔥', d.streak, 'ngày kiên trì'], ['📚', d.learned, 'từ vựng đã thuộc'], ['🎯', d.accuracy + '%', 'chính xác hôm nay']];
    items.forEach(function (it, i) {
      var x = 40 + i * 245, y = 190;
      c.fillStyle = 'rgba(255,255,255,.22)'; roundRect(c, x, y, 225, 170, 22); c.fill();
      c.fillStyle = '#fff'; c.font = '44px system-ui, sans-serif'; c.fillText(it[0], x + 18, y + 55);
      c.font = '800 54px system-ui, sans-serif'; c.fillText(String(it[1]), x + 18, y + 115);
      c.font = '500 19px system-ui, sans-serif'; c.fillStyle = 'rgba(255,255,255,.95)'; c.fillText(it[2], x + 18, y + 148);
    });
    c.font = '500 18px system-ui, sans-serif'; c.fillStyle = 'rgba(255,255,255,.95)'; c.fillText(publicUrl() || (CFG.name || ''), 40, 410);
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function shareCard(cv) {
    cv.toBlob(function (blob) {
      if (!blob) { K.toast('Không tạo được ảnh.'); return; }
      var file; try { file = new root.File([blob], 'thanh-tich-hom-nay.png', { type: 'image/png' }); } catch (e) { file = null; }
      var nav = root.navigator;
      if (file && nav && nav.canShare && nav.share && nav.canShare({ files: [file] })) { nav.share({ files: [file], title: CFG.name || '' }).catch(function () {}); return; }
      var a = doc.createElement('a'); a.href = root.URL.createObjectURL(blob); a.download = 'thanh-tich-hom-nay.png'; doc.body.appendChild(a); a.click();
      setTimeout(function () { root.URL.revokeObjectURL(a.href); a.remove(); }, 800);
    }, 'image/png');
  }
  shell.lastResult = function () { return lastResult; };

  /* =====================================================================
     DỰNG KHUNG + SỰ KIỆN
     ===================================================================== */
  K.addCSS(
    '#homeView,#playerView,#victoryView{position:fixed;inset:0;z-index:9500;display:none;overflow-y:auto;background:#f1f5f9;color:#0f172a;font-family:system-ui,"Segoe UI",Roboto,sans-serif;-webkit-overflow-scrolling:touch}' +
    'body[data-kit-view="home"] .left-sidebar,body[data-kit-view="player"] .left-sidebar,body[data-kit-view="victory"] .left-sidebar,body[data-kit-view="home"] .main-stage,body[data-kit-view="player"] .main-stage,body[data-kit-view="victory"] .main-stage,body:not([data-kit-view="detail"]) .kit-nav,body:not([data-kit-view="detail"]) .kit-backdrop{display:none!important}' +
    '#homeView.on,#playerView.on,#victoryView.on{display:block}body[data-kit-view="home"],body[data-kit-view="player"],body[data-kit-view="victory"]{overflow:hidden!important}' +
    /* --- trang chủ --- */
    '.hm-top{position:sticky;top:0;z-index:3;height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(12px,3vw,28px);background:#1e3a8a;color:#fff}.hm-title{font:900 clamp(16px,2.2vw,22px) system-ui,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.hm-right{display:flex;align-items:center;gap:8px}.hm-chip{background:rgba(255,255,255,.16);border-radius:99px;padding:6px 12px;font-size:16px;white-space:nowrap}.hm-chip b{font-size:17px}.hm-gear{min-width:44px;min-height:44px;border:0;border-radius:12px;background:rgba(255,255,255,.16);color:#fff;font-size:22px;cursor:pointer}' +
    '.hm-wrap{max-width:960px;margin:0 auto;padding:clamp(12px,2vw,24px) clamp(12px,3vw,24px) 80px}.hm-hero{background:#fff;border-radius:22px;padding:clamp(14px,2.4vw,26px);box-shadow:0 6px 24px rgba(15,23,42,.1)}' +
    '.hm-hero-l{font-size:clamp(16px,2vw,22px);color:#334155;margin-bottom:10px;line-height:1.35}.hm-main{width:100%;min-height:60px;border:0;border-radius:18px;background:#f59e0b;color:#fff;font:900 clamp(19px,2.6vw,26px) system-ui,sans-serif;cursor:pointer;box-shadow:0 5px 0 #b45309}.hm-main:active{transform:translateY(3px);box-shadow:0 2px 0 #b45309}' +
    '.hm-quick{width:100%;min-height:48px;margin-top:12px;border:2px solid #bae6fd;border-radius:14px;background:#f0f9ff;color:#0c4a6e;font:800 clamp(15px,1.8vw,18px) system-ui,sans-serif;cursor:pointer}.hm-days{margin-top:12px;font-size:clamp(14px,1.6vw,17px);color:#475569}' +
    '.hm-reward{display:block;width:100%;margin-top:10px;min-height:44px;text-align:left;border:2px dashed #fbbf24;border-radius:14px;background:#fffbeb;color:#78350f;font:600 15px/1.4 system-ui,sans-serif;padding:8px 12px;cursor:pointer}' +
    '.hm-tabs{display:flex;gap:8px;overflow-x:auto;margin:18px 0 6px;padding-bottom:4px}.hm-tabs button{flex:0 0 auto;min-height:44px;padding:6px 14px;border-radius:99px;border:2px solid #cbd5e1;background:#fff;color:#334155;font:800 15px system-ui,sans-serif;cursor:pointer;display:flex;flex-direction:column;align-items:center;line-height:1.15}.hm-tabs small{font-size:12px;color:#64748b}.hm-tabs button.on{background:#1e3a8a;border-color:#1e3a8a;color:#fff}.hm-tabs button.on small{color:#bfdbfe}' +
    '.hm-mod h3{margin:18px 0 8px;font:900 clamp(16px,1.9vw,20px) system-ui,sans-serif;color:#1e3a8a}.hm-mod h3 span{background:#dbeafe;border-radius:8px;padding:2px 8px;margin-right:4px}.hm-mod ol{list-style:none;margin:0;padding:0 0 0 22px;border-left:4px solid #cbd5e1}.hm-mod li{margin:0 0 8px;position:relative}.hm-mod li.done{border-color:#16a34a}' +
    '.hm-node{display:flex;align-items:center;gap:10px;width:100%;min-height:52px;text-align:left;padding:8px 12px;border-radius:16px;border:2px solid #e2e8f0;background:#fff;color:#0f172a;font:600 clamp(15px,1.7vw,18px)/1.3 system-ui,sans-serif;cursor:pointer}.hm-node .ic{flex:0 0 30px;height:30px;border-radius:50%;background:#e2e8f0;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900}' +
    '.hm-mod li.done .hm-node{background:#f0fdf4;border-color:#86efac}.hm-mod li.done .ic{background:#16a34a}.hm-mod li.now .hm-node{background:#fffbeb;border-color:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.35)}.hm-mod li.now .ic{background:#f59e0b}.hm-mod li.doing .ic{background:#60a5fa}' +
    /* --- phòng học tập trung --- */
    '#playerView{background:#f8fafc;display:none;flex-direction:column}#playerView.on{display:flex}.pl-top{display:flex;align-items:center;gap:10px;padding:10px clamp(10px,3vw,28px);background:#fff;box-shadow:0 2px 10px rgba(15,23,42,.08);position:sticky;top:0;z-index:3}' +
    '.pl-x,.pl-speed{min-width:44px;min-height:44px;border-radius:12px;border:2px solid #e2e8f0;background:#fff;color:#334155;font:800 16px system-ui,sans-serif;cursor:pointer;padding:0 10px}.pl-bar{flex:1;height:14px;border-radius:99px;background:#e2e8f0;overflow:hidden}.pl-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#22c55e,#16a34a);transition:width .25s}.pl-count{font:800 14px system-ui,sans-serif;color:#64748b;min-width:42px;text-align:center}' +
    '.pl-reflex{height:6px;background:#e2e8f0}.pl-reflex i{display:block;height:100%;width:100%;background:#38bdf8}' +
    '.pl-body{flex:1;display:flex;justify-content:center;padding:clamp(12px,3vw,32px) clamp(12px,3vw,24px) 150px}.pl-card{width:100%;max-width:960px;text-align:center}' +
    '.pl-kicker{display:inline-block;background:#dbeafe;color:#1e40af;border-radius:99px;padding:4px 14px;font:800 clamp(13px,1.5vw,16px) system-ui,sans-serif;margin-bottom:10px}.pl-prompt{font:700 clamp(18px,2.6vw,30px)/1.35 system-ui,sans-serif;color:#1e293b;margin:6px 0 10px}.pl-sub{font:600 clamp(16px,2vw,24px) system-ui,sans-serif;color:#475569;margin:4px 0 10px}' +
    '.pl-ico{font-size:clamp(64px,12vw,140px);line-height:1.1;margin:4px 0}.pl-word{font:900 clamp(40px,8vw,96px)/1.15 system-ui,"Noto Sans SC",sans-serif;color:#1e3a8a;margin:4px 0}.pl-q{font:800 clamp(24px,4.4vw,52px)/1.3 system-ui,sans-serif;color:#1e3a8a;margin:6px 0}.pl-cloze{font:700 clamp(22px,3.6vw,44px)/1.4 system-ui,sans-serif;margin:10px 0 14px}.pl-blank{display:inline-block;min-width:3.2em;border-bottom:4px solid #f59e0b}' +
    '.ly-han{font:900 clamp(34px,6vw,78px)/1.2 system-ui,"Noto Sans SC",sans-serif;color:#1e3a8a}.ly-py{font:600 clamp(18px,2.6vw,32px) system-ui,sans-serif;color:#2563eb}.ly-hv{font:700 clamp(15px,2vw,24px) system-ui,sans-serif;color:#b45309;font-style:italic}.ly-en{font:900 clamp(30px,5.4vw,66px)/1.2 system-ui,sans-serif;color:#1e3a8a}.ly-vi{font:600 clamp(16px,2vw,24px) system-ui,sans-serif;color:#475569;margin-top:4px}' +
    '.pl-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(8px,1.4vw,16px);margin:14px 0}.pl-opts.wide{grid-template-columns:1fr}.pl-opt{display:flex;align-items:center;gap:12px;min-height:clamp(56px,7vw,84px);padding:10px clamp(12px,2vw,24px);border:3px solid #cbd5e1;border-radius:18px;background:#fff;color:#0f172a;font:700 clamp(18px,2.6vw,30px)/1.25 system-ui,"Noto Sans SC",sans-serif;cursor:pointer;text-align:left;justify-content:flex-start}.pl-opt span{flex:1;text-align:center}.pl-opt small{display:block;font-size:.55em;color:#2563eb}' +
    '.pl-opt kbd{flex:0 0 auto;font:800 14px system-ui,sans-serif;background:#e2e8f0;border-radius:8px;padding:3px 9px;color:#475569}.pl-opts.scenes .pl-opt span{font-size:clamp(40px,8vw,88px);line-height:1.1}.pl-opt.ok{background:#dcfce7;border-color:#16a34a}.pl-opt.bad{background:#fff7ed;border-color:#f59e0b}.pl-opt:disabled{cursor:default}.pl-opt .oi{font-size:1.2em}' +
    '.pl-say,.pl-btn{min-height:48px;padding:8px 20px;border-radius:14px;border:2px solid #93c5fd;background:#eff6ff;color:#1e40af;font:800 clamp(15px,1.8vw,20px) system-ui,sans-serif;cursor:pointer;margin:6px}.pl-say.big{font-size:clamp(20px,3vw,32px);padding:14px 32px}.pl-btn{background:#f59e0b;border-color:#f59e0b;color:#fff}.pl-btn.alt{background:#16a34a;border-color:#16a34a}.pl-btn.ghost{background:#fff;color:#334155;border-color:#cbd5e1}.pl-row{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:8px}' +
    '.pl-tray{min-height:clamp(64px,9vw,110px);border:3px dashed #93c5fd;border-radius:18px;padding:10px;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;margin:12px 0;background:#f0f9ff}.pl-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:10px 0}.pl-hint{color:#64748b;font-size:clamp(14px,1.6vw,18px);margin:6px 0}' +
    '.pl-chip{min-height:52px;padding:8px 18px;border:0;border-radius:14px;background:#0284c7;color:#fff;font:900 clamp(20px,3vw,36px) system-ui,"Noto Sans SC",sans-serif;cursor:pointer;display:flex;flex-direction:column;align-items:center;line-height:1.15}.pl-chip small{font:600 .42em system-ui,sans-serif;opacity:.95}.pl-chip.v{background:#e11d48}.pl-chip.o{background:#16a34a}.pl-chip.s{background:#0284c7}' +
    '.pl-typebox{display:flex;gap:8px;justify-content:center;margin:10px 0}.pl-typebox input{flex:1;max-width:420px;min-height:52px;border:3px solid #93c5fd;border-radius:14px;padding:0 14px;font:700 clamp(20px,2.6vw,30px) system-ui,sans-serif;text-align:center}' +
    '.pl-tip{background:#ecfeff;border:3px solid #67e8f9;border-radius:22px;padding:clamp(14px,2.4vw,28px);text-align:left}.pl-tip ol{margin:8px 0 12px 22px;padding:0;font:600 clamp(17px,2.2vw,26px)/1.5 system-ui,sans-serif;color:#164e63}.pl-ex{text-align:center;margin-top:10px}' +
    '.pl-fb{position:fixed;left:0;right:0;bottom:0;z-index:5;padding:12px clamp(12px,3vw,28px) calc(12px + env(safe-area-inset-bottom));box-shadow:0 -6px 24px rgba(15,23,42,.18)}.pl-fb[hidden]{display:none}.pl-fb.good{background:#dcfce7;color:#14532d}.pl-fb.bad{background:#ffedd5;color:#7c2d12}.pl-fb.neutral{background:#e0f2fe;color:#0c4a6e}' +
    '.pl-fb-in{max-width:960px;margin:0 auto;display:flex;align-items:center;gap:14px;flex-wrap:wrap}.pl-fb-msg{flex:1;min-width:200px;font:700 clamp(16px,2vw,22px)/1.4 system-ui,sans-serif}.pl-fb-msg .ly-han{font-size:clamp(24px,3vw,40px)}.pl-fb-msg small{font-weight:500}.pl-next{min-height:56px;min-width:180px;border:0;border-radius:16px;background:#16a34a;color:#fff;font:900 clamp(17px,2vw,22px) system-ui,sans-serif;cursor:pointer;box-shadow:0 4px 0 #166534}.pl-fb.bad .pl-next{background:#f59e0b;box-shadow:0 4px 0 #b45309}' +
    '.fb-sent{margin-top:6px;text-align:left}.pl-loading{padding:40px;font-size:30px;color:#94a3b8}' +
    /* --- đích --- */
    '#victoryView{background:linear-gradient(180deg,#eff6ff,#fef9c3)}.vc-wrap{position:relative;max-width:960px;margin:0 auto;padding:clamp(16px,4vw,40px) 16px 60px;text-align:center}.vc-title{font:900 clamp(28px,5vw,56px) system-ui,sans-serif;color:#1e3a8a;margin:10px 0}.vc-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(8px,2vw,20px);margin:14px 0}' +
    '.vc-stats div{background:#fff;border-radius:20px;padding:clamp(10px,2vw,22px);box-shadow:0 4px 16px rgba(15,23,42,.1)}.vc-stats b{display:block;font:900 clamp(26px,4.6vw,54px) system-ui,sans-serif;color:#b45309}.vc-stats span{font:600 clamp(12px,1.6vw,18px) system-ui,sans-serif;color:#475569}.vc-sub{color:#475569;font-size:clamp(14px,1.7vw,18px)}' +
    '.vc-canvas{width:100%;max-width:640px;height:auto;border-radius:20px;box-shadow:0 8px 30px rgba(15,23,42,.25);margin:10px 0}.vc-row{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:10px 0}.vc-nick{display:block;margin-top:10px;font-size:15px;color:#475569}.vc-nick input{border:2px solid #cbd5e1;border-radius:10px;padding:8px 10px;font-size:16px;min-height:40px}' +
    '.vc-confetti{position:absolute;left:0;right:0;top:0;height:0;pointer-events:none;overflow:visible}.vc-confetti i{position:absolute;top:-30px;font-style:normal;font-size:28px;animation:vcFall 2.6s ease-in forwards}@keyframes vcFall{to{transform:translateY(520px) rotate(300deg);opacity:0}}@media (prefers-reduced-motion:reduce){.vc-confetti{display:none}.pl-bar i{transition:none}}' +
    '.kit-gear-list{display:grid;grid-template-columns:1fr;gap:8px;margin:12px 0}.kit-gear-list button{min-height:48px;border-radius:14px;border:2px solid #cbd5e1;background:#f8fafc;color:#0f172a;font:700 16px system-ui,sans-serif;cursor:pointer;text-align:left;padding:0 14px}' +
    '@media (min-width:1200px){.pl-card{max-width:960px}.hm-wrap{max-width:960px}}' +
    '@media (max-width:480px){.pl-opts{grid-template-columns:1fr 1fr}.pl-opts.wide{grid-template-columns:1fr}.vc-stats{gap:6px}.hm-chip{padding:5px 8px;font-size:15px}.hm-title{font-size:15px}.pl-fb-in{flex-direction:column;align-items:stretch}.pl-next{width:100%}}'
  );

  function build() {
    homeEl = el('div', { id: 'homeView' }); playerEl = el('div', { id: 'playerView' }, playerShell()); victoryEl = el('div', { id: 'victoryView' });
    doc.body.appendChild(homeEl); doc.body.appendChild(playerEl); doc.body.appendChild(victoryEl);
    $('#plX', playerEl).onclick = function () { goHome(); };
    $('#plSpeed', playerEl).onclick = function () { CS.setSetting('playerSlow', !CS.setting('playerSlow', false)); updateSpeedBtn(); };
    $('#plNext', playerEl).onclick = next;
    doc.addEventListener('keydown', function (e) {
      if (view !== 'player') return;
      var t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA');
      if (e.key === 'Escape') { goHome(); return; }
      var fbOn = !$('#plFb', playerEl).hidden;
      if ((e.key === 'Enter' || (e.key === ' ' && !typing)) && fbOn) { e.preventDefault(); next(); return; }
      if (!typing && !fbOn && /^[1-9]$/.test(e.key)) { var b = $$('#plCard .pl-opt', playerEl)[parseInt(e.key, 10) - 1]; if (b && !b.disabled) { e.preventDefault(); b.click(); } }
    });
  }
  /* kiểm thử: tự giải bước hiện tại (đúng/sai) bằng đúng các thao tác chạm của người học */
  shell.autoSolve = function (ok) { if (cur && cur.solve && !cur.answered) { cur.solve(ok); return true; } return false; };
  shell.current = function () { var s = CS.session(), c = s && SE.current(s); return c ? { idx: c.idx, kind: c.step.kind, t: c.step.t || null, retry: c.retry, answered: !!(cur && cur.answered), total: s.queue.length, pos: s.pos, mode: s.mode } : null; };
  shell.next = next;

  K.register(function () {
    build();
    var detail = /^#detail/.test(root.location.hash || '');
    if (detail) { setView('detail'); } else { renderHome(); setView('home'); }
  });
})(window);
