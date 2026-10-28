/* app_kit.js — bộ tiện ích dùng chung cho hai khóa (tiếng Trung `zh/`, tiếng Anh thiếu nhi `kids/`).
   MỘT bản nguồn duy nhất: docs/upgrade/app_kit.js. Chép sang zh/data/ và kids/data/ bằng docs/upgrade/sync_kit.sh;
   công cụ kiểm báo lỗi nếu bản chép khác bản nguồn.
   Cấu hình: window.APP_CONFIG (data/config.js) và window.APPKIT_ADAPTER (khai trong index.html của từng khóa).
   Các phần: A chặn trình duyệt nhúng + bộ gõ · B giao diện điện thoại + con đường bài học · C học hôm nay + chặng + hướng dẫn
   D nạp dữ liệu theo cấp + PWA · E báo lỗi + tóm tắt ẩn danh · F sao lưu · G mẹo, nghe chậm, chạm từ · H thu âm · I nghe lặp + thống kê · J âm thanh sprite. */
(function (root) {
  'use strict';
  var doc = root.document;
  var CFG = root.APP_CONFIG || {};
  var AD = root.APPKIT_ADAPTER || {};
  var P = CFG.prefix || 'kit_';
  var CS = root.CourseStore;                       // kho tiến độ của lõi (docs/core/progress_store.js): MỌI lưu trữ đi qua đây, bộ tiện ích không ghi thẳng bộ nhớ trình duyệt
  if (!CS) { if (root.console) root.console.error('[AppKit] thiếu CourseStore — nạp data/progress_store.js trước app_kit.js'); return; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  var CSS_PARTS = [];
  function addCSS(t, always) { CSS_PARTS.push({ t: t, always: !!always }); }
  function el(tag, attrs, html) { var e = doc.createElement(tag); if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); }); if (html != null) e.innerHTML = html; return e; }
  function todayStr(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  var KIDS = CFG.course === 'kids';

  /* =====================================================================
     A. CHẶN TRÌNH DUYỆT NHÚNG (Zalo, Messenger, Facebook, Instagram) VÀ BỘ GÕ
     ===================================================================== */
  var UA = (root.navigator && root.navigator.userAgent) || '';
  function detectInApp(ua) {
    ua = ua == null ? UA : ua;
    var m = /(Zalo)|(FBAN|FBAV|FB_IAB|FBIOS|FB4A)|(Messenger)|(Instagram)|(\bLine\/)/i.exec(ua);
    if (!m) return null;
    return m[1] ? 'Zalo' : m[2] ? 'Facebook' : m[3] ? 'Messenger' : m[4] ? 'Instagram' : 'Line';
  }
  function isIOS(ua) { return /iPhone|iPad|iPod/i.test(ua == null ? UA : ua); }
  addCSS('.kit-embed{position:fixed;left:0;right:0;top:0;z-index:100000;background:#fef3c7;color:#78350f;border-bottom:3px solid #f59e0b;padding:10px 14px;font:600 15px/1.45 system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.25)}' +
    '.kit-embed b{color:#92400e}.kit-embed ol{margin:6px 0 8px 20px;padding:0}.kit-embed button{min-height:44px;padding:8px 16px;border-radius:10px;border:2px solid #b45309;background:#fff;color:#78350f;font-weight:800;font-size:15px;margin-right:8px}', true);
  function showEmbedBanner() {
    var app = detectInApp();
    if (!app || CS.setting('embedSkip', false) === true || doc.getElementById('kitEmbed')) return;
    var steps = isIOS()
      ? '<li>Bấm biểu tượng <b>⋯</b> hoặc <b>chia sẻ</b> ở góc màn hình.</li><li>Chọn <b>Mở bằng Safari</b> (hoặc "Mở trong trình duyệt").</li>'
      : '<li>Bấm biểu tượng <b>⋮</b> hoặc <b>⋯</b> ở góc trên bên phải.</li><li>Chọn <b>Mở bằng Chrome</b> (hoặc "Mở bằng trình duyệt").</li>';
    var b = el('div', { id: 'kitEmbed', class: 'kit-embed', role: 'alert' },
      '⚠️ Bạn đang mở trang trong ứng dụng <b>' + esc(app) + '</b>. Trình duyệt trong ứng dụng này thường <b>không phát được giọng đọc, không nhận giọng nói</b> và có thể mất tiến độ học.<ol>' + steps + '</ol>' +
      '<button type="button" id="kitEmbedCopy">📋 Sao chép liên kết</button><button type="button" id="kitEmbedSkip">Vẫn tiếp tục ở đây</button>');
    doc.body.appendChild(b);
    $('#kitEmbedSkip', b).onclick = function () { CS.setSetting('embedSkip', true); b.remove(); };
    $('#kitEmbedCopy', b).onclick = function () { copyText(root.location.href, function (ok) { $('#kitEmbedCopy', b).textContent = ok ? '✅ Đã sao chép' : 'Hãy giữ ngón tay trên thanh địa chỉ để sao chép'; }); };
  }
  function copyText(t, cb) {
    function fallback() {
      try { var ta = el('textarea'); ta.value = t; ta.style.cssText = 'position:fixed;opacity:0'; doc.body.appendChild(ta); ta.select(); var ok = doc.execCommand('copy'); ta.remove(); cb && cb(!!ok); } catch (e) { cb && cb(false); }
    }
    try { if (root.navigator.clipboard && root.navigator.clipboard.writeText) { root.navigator.clipboard.writeText(t).then(function () { cb && cb(true); }, fallback); return; } } catch (e) {}
    fallback();
  }

  /* Ô gõ: không bật gợi ý/tự sửa của bàn phím điện thoại */
  var INPUT_SEL = 'input:not([type]),input[type=text],input[type=search],textarea';
  function hardenInput(i) {
    if (!i || i.getAttribute('data-kit-h')) return;
    i.setAttribute('data-kit-h', '1');
    if (!i.hasAttribute('inputmode')) i.setAttribute('inputmode', 'text');
    i.setAttribute('autocomplete', 'off'); i.setAttribute('autocorrect', 'off'); i.setAttribute('autocapitalize', 'off'); i.setAttribute('spellcheck', 'false');
  }
  function hardenInputs(rootEl) { $$(INPUT_SEL, rootEl || doc).forEach(hardenInput); }
  function watchInputs() {
    hardenInputs();
    if (!root.MutationObserver) return;
    new root.MutationObserver(function (ms) {
      ms.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, function (n) { if (n.nodeType === 1) { if (n.matches && n.matches(INPUT_SEL)) hardenInput(n); hardenInputs(n); } }); });
    }).observe(doc.body, { childList: true, subtree: true });
  }

  /* Telex ngược: chuỗi người học gõ có dấu tiếng Việt (bộ gõ đang bật) → các dạng ASCII có thể là chữ họ định gõ.
     Chỉ chạy khi chuỗi gốc CÓ ký tự tiếng Việt; kết quả chỉ dùng để chấm "đúng nhưng nên tắt bộ gõ". */
  var TONE = { '́': 's', '̀': 'f', '̉': 'r', '̃': 'x', '̣': 'j' };
  var VI_RE = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
  function hasViet(s) { return VI_RE.test(String(s || '')); }
  function telexWord(word, standaloneW) {
    var out = '', tone = '';
    String(word).normalize('NFD').split('').forEach(function (ch, i, arr) {
      if (TONE[ch]) { tone = TONE[ch]; return; }
      if (ch === '̂') { out += out.slice(-1); return; }                    // â ê ô → aa ee oo
      if (ch === '̆') { out += 'w'; return; }                               // ă → aw
      if (ch === '̛') { out += 'w'; return; }                               // ơ ư → ow uw
      out += ch;
    });
    out = out.replace(/đ/g, 'dd').replace(/Đ/g, 'DD');
    if (standaloneW) out = out.replace(/uw/g, 'w').replace(/Uw/g, 'W');        // ư đứng đầu: gõ "w" là ra ư
    return out + tone;
  }
  function telexCandidates(s) {
    s = String(s || '');
    if (!hasViet(s)) return [];
    var plain = s.normalize('NFD').replace(/[̀-̛ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
    var c1 = s.split(/(\s+)/).map(function (w) { return telexWord(w, false); }).join('');
    var c2 = s.split(/(\s+)/).map(function (w) { return telexWord(w, true); }).join('');
    var seen = {}, res = [];
    [plain, c1, c2].forEach(function (x) { if (x && !seen[x]) { seen[x] = 1; res.push(x); } });
    return res;
  }
  var TELEX_HINT = 'Nên tắt bộ gõ tiếng Việt khi làm bài này.';

  /* =====================================================================
     KHỞI TẠO
     ===================================================================== */
  var api = {
    version: 2, cfg: CFG, esc: esc, store: CS, addCSS: addCSS, el: el, $: $, $$: $$, copyText: copyText,
    detectInApp: detectInApp, hasViet: hasViet, telexCandidates: telexCandidates, TELEX_HINT: TELEX_HINT, hardenInputs: hardenInputs,
    _parts: []
  };
  function flushCSS() {
    if (!CSS_PARTS.length) return;
    var st = doc.getElementById('kitCSS');
    if (!st) { st = el('style', { id: 'kitCSS' }); doc.head.appendChild(st); }
    st.textContent = CSS_PARTS.filter(function (c) { return FULL || c.always; }).map(function (c) { return c.t; }).join('\n');
  }
  function init() {
    try { showEmbedBanner(); } catch (e) {}
    try { watchInputs(); } catch (e) {}
    api._parts.forEach(function (fn) { if (!FULL && !fn.__always) return; try { fn(); } catch (e) { if (root.console) root.console.error('[AppKit]', e); } });
    flushCSS();
  }
  var FULL = !!(AD && typeof AD.current === 'function');                 // trang không có adapter (vd. pinyin.html) chỉ chạy phần dùng chung: banner trình duyệt nhúng, ô gõ, âm thanh
  api.register = function (fn, always) { fn.__always = !!always; api._parts.push(fn); };
  root.AppKit = api;
  /* =====================================================================
     B. TIẾN ĐỘ BÀI + CON ĐƯỜNG BÀI HỌC DỌC + GIAO DIỆN ĐIỆN THOẠI (ngăn kéo + thanh dưới)
     ===================================================================== */
  var PH = AD.phases || [];
  function phaseIdx(id) { for (var i = 0; i < PH.length; i++) if (PH[i].id === id) return i; return -1; }
  function touchDay() { CS.touchDay(todayStr()); }
  function doneOf(id) { var l = CS.lesson(id); return (l && l.done) || []; }
  function seenOf(id) { var l = CS.lesson(id); return (l && l.seen) || []; }
  function lessonState(id) {
    var d = doneOf(id);
    if (d.length >= PH.length && PH.length) return 'done';
    return CS.lessonStatus(id);
  }
  function progressView() {                                 // dạng tương thích cho kiểm thử/giao diện: {done, seen, days, last}
    var v = { done: {}, seen: {}, days: CS.days(), last: CS.position() };
    Object.keys(CS.state.lessons).forEach(function (id) { var l = CS.state.lessons[id]; if (l.done && l.done.length) v.done[id] = l.done; if (l.seen && l.seen.length) v.seen[id] = l.seen; });
    return v;
  }
  function metaStages() { return (root.COURSE_META && root.COURSE_META.stages) || []; }
  function findLesson(id) {
    var st = metaStages(), i, j, k;
    for (i = 0; i < st.length; i++) for (j = 0; j < st[i].modules.length; j++) for (k = 0; k < st[i].modules[j].lessons.length; k++) if (st[i].modules[j].lessons[k].id === id) return { stage: st[i].id, mod: st[i].modules[j].code, idx: k, lesson: st[i].modules[j].lessons[k], module: st[i].modules[j] };
    return null;
  }
  function allLessons() {
    var out = []; metaStages().forEach(function (s) { s.modules.forEach(function (m) { m.lessons.forEach(function (l, k) { out.push({ stage: s.id, mod: m.code, idx: k, id: l.id, name: l.name, module: m }); }); }); });
    return out;
  }
  var hooks = { onRecord: [] };
  function record(prevPhase, prevLesson) {
    var c; try { c = AD.current && AD.current(); } catch (e) { return; }
    if (!c || !c.lessonId) return;
    var pi = phaseIdx(prevPhase), ci = phaseIdx(c.phase);
    if (prevLesson === c.lessonId && pi >= 0 && ci === pi + 1) CS.addPhase(c.lessonId, 'done', prevPhase);     // sang chặng kế tiếp = xong chặng trước
    if (ci >= 0) CS.markSeen(c.lessonId, c.phase);
    CS.setPosition({ stage: c.stage, mod: c.mod, idx: c.idx, phase: c.phase, lessonId: c.lessonId, ts: Date.now() });
    if (api.shell && api.shell.view && api.shell.view() === 'detail') touchDay();                 // chỉ học ở trang chi tiết mới tính ngày; mở trang chủ không tính
    hooks.onRecord.forEach(function (f) { try { f(c); } catch (e) {} });
  }
  function markPhaseDone(lessonId, ph) { CS.addPhase(lessonId, 'done', ph); hooks.onRecord.forEach(function (f) { try { f(AD.current()); } catch (e) {} }); }
  function wrapNav() {
    ['switchStage', 'selectModule', 'selectLesson', 'selectPhase'].forEach(function (name) {
      var orig = root[name]; if (typeof orig !== 'function' || orig.__kit) return;
      var w = function () {
        var before = AD.current ? AD.current() : {};
        var r = orig.apply(this, arguments);
        record(before.phase, before.lessonId);
        return r;
      };
      w.__kit = true; root[name] = w;
    });
  }
  function openLesson(stage, mod, idx, phase) {
    api.ensureStage(stage, function () { AD.go(stage, mod, idx, phase || 'p1'); closePath(); closeDrawer(); });
  }

  /* --- trang chủ / con đường dọc nay do app_shell.js đảm nhiệm (api.goHome); giữ tên cũ để mã gọi cũ không vỡ --- */
  function openPath() { if (api.goHome) api.goHome(); }
  function closePath() {}
  function openDrawer() { doc.body.classList.add('kit-drawer'); }
  function closeDrawer() { doc.body.classList.remove('kit-drawer'); }
  function toggleDrawer() { doc.body.classList.toggle('kit-drawer'); }
  api.openPath = openPath; api.closePath = closePath; api.openDrawer = openDrawer; api.closeDrawer = closeDrawer;
  api.openLesson = openLesson; api.openDetail = openLesson; api.lessonState = lessonState; api.markPhaseDone = markPhaseDone; api.phaseIdx = phaseIdx;
  api.progress = progressView; api.saveProgress = function () { CS.flush(); }; api.allLessons = allLessons; api.findLesson = findLesson;
  api.hooks = hooks; api.record = record; api.touchDay = touchDay;
  api.speakOnce = function (t, l, r) { return speakOnce(t, l, r); }; api.tipLines = function () { return tipLines(); }; api.speechVoice = function (l) { return speechVoice(l); };

  addCSS(
    '.kit-side-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}.kit-side-btns button:first-child{grid-column:1/-1}.kit-side-btns button:last-child:nth-child(even){grid-column:1/-1}' +
    '.kit-side-btns button{min-height:44px;border-radius:12px;border:0;font:800 14px/1.2 system-ui,sans-serif;padding:4px 6px;cursor:pointer;background:#fde68a;color:#78350f}.kit-side-btns button.alt{background:#e0f2fe;color:#0c4a6e}' +
    '.kit-nav,.kit-backdrop{display:none}' +
    '@media (max-width:768px){' +
    'html{font-size:16px}body{font-size:16px;padding-bottom:68px!important}' +
    'body{display:block!important;height:auto!important;overflow:auto!important}.main-stage{display:block!important;height:auto!important;overflow:visible!important}' +
    '.left-sidebar{position:fixed!important;left:0!important;right:0!important;bottom:60px!important;top:auto!important;width:100%!important;min-width:0!important;max-height:74vh!important;overflow-y:auto!important;transform:translateY(125%);transition:transform .22s ease;z-index:9300;border-radius:20px 20px 0 0;box-shadow:0 -10px 34px rgba(0,0,0,.4)!important;padding-bottom:20px!important;order:0!important}' +
    'body.kit-drawer .left-sidebar{transform:none}' +
    '.kit-backdrop{position:fixed;inset:0;z-index:9200;background:rgba(15,23,42,.45)}body.kit-drawer .kit-backdrop{display:block}' +
    'button,.tool-btn,.mod-btn,.stg-btn,.phase-tab,.lesson-pill,.timer-btn,.hero-audio-btn,select,input[type=checkbox]+span{min-height:44px}' +
    '.lesson-pill{padding:8px 12px!important;font-size:14px!important}.phase-tab{font-size:14px!important;padding:8px 4px!important}.mod-btn small{font-size:13px!important}' +
    '.kb-key{min-width:30px;min-height:44px!important}.workspace{padding:8px 12px 24px!important}' +
    '.lesson-row>div:last-child{display:none!important}.lesson-pills{display:flex!important;flex-wrap:nowrap!important;overflow-x:auto;gap:8px!important;padding-bottom:6px;-webkit-overflow-scrolling:touch}' +
    '.lesson-pill{flex:0 0 auto!important;white-space:nowrap!important;max-width:78vw;overflow:hidden;text-overflow:ellipsis;border-radius:99px!important;writing-mode:horizontal-tb!important}' +
    '.phase-tabs{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:6px!important}.phase-tab{white-space:normal!important;border-radius:12px!important}' +
    '.kit-nav{display:grid;grid-template-columns:repeat(4,1fr);position:fixed;left:0;right:0;bottom:0;height:60px;z-index:9400;background:#1e3a8a;box-shadow:0 -4px 16px rgba(0,0,0,.3);padding-bottom:env(safe-area-inset-bottom)}' +
    '.kit-nav button{min-height:60px;border:0;background:transparent;color:#e0e7ff;font:700 12px/1.2 system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer}.kit-nav button b{font-size:22px;line-height:1}' +
    '.kit-nav button.main{color:#fde68a}' +
    '.anki-modal .anki-card,.anki-modal button{font-size:16px}' +
    '}'
  );

  function buildSideButtons() {
    var side = $('.left-sidebar'); if (!side || $('.kit-side-btns', side)) return;
    var brand = $('.brand-line', side);
    var box = el('div', { class: 'kit-side-btns' }, '<button type="button" id="kitSideHome">🏠 Trang chủ</button><button type="button" id="kitSideGear" class="alt">⚙️ Cài đặt</button>');
    if (brand && brand.parentNode) brand.parentNode.insertBefore(box, brand.nextSibling); else side.insertBefore(box, side.firstChild);
    $('#kitSideHome', box).onclick = function () { closeDrawer(); openPath(); };
    $('#kitSideGear', box).onclick = function () { closeDrawer(); if (api.openGear) api.openGear(); };
  }
  function buildNav() {
    if ($('.kit-nav')) return;
    var nav = el('nav', { class: 'kit-nav', 'aria-label': 'Điều hướng nhanh' },
      '<button type="button" id="kitNavHome" class="main"><b>🏠</b>Trang chủ</button><button type="button" id="kitNavAnki"><b>🗂️</b>Kho từ</button><button type="button" id="kitNavGear"><b>⚙️</b>Cài đặt</button><button type="button" id="kitNavMenu"><b>☰</b>Menu</button>');
    doc.body.appendChild(nav);
    var bd = el('div', { class: 'kit-backdrop' }); doc.body.appendChild(bd); bd.onclick = closeDrawer;
    $('#kitNavHome').onclick = function () { closeDrawer(); openPath(); };
    $('#kitNavAnki').onclick = function () { closeDrawer(); var a = root.ANKI; if (a && a.open) a.open(); };
    $('#kitNavGear').onclick = function () { closeDrawer(); if (api.openGear) api.openGear(); };
    $('#kitNavMenu').onclick = toggleDrawer;
  }
  function isMobile() { return root.matchMedia && root.matchMedia('(max-width:768px)').matches; }
  api.isMobile = isMobile;
  api.register(function () {
    wrapNav(); buildSideButtons(); buildNav();
    var last = CS.position();
    if (root.__KIT_DEBUG && root.console) root.console.log('[kit] khởi động: last=' + JSON.stringify(last) + ' cur=' + JSON.stringify(AD.current && AD.current()));
    if (last && last.lessonId) {                                           // vào lại đúng chỗ đã học
      var c = AD.current && AD.current();
      if (c && (c.lessonId !== last.lessonId || c.phase !== last.phase)) api.ensureStage(last.stage, function () { try { AD.go(last.stage, last.mod, last.idx, last.phase); } catch (e) { if (root.console) root.console.error('[AppKit] khôi phục vị trí lỗi:', e && e.message); } });
    }
    record();
  });

  /* =====================================================================
     C. "HỌC HÔM NAY" + CHẶNG NGẮN (6 pha = 6 chặng 3–5 phút) + HƯỚNG DẪN 20 GIÂY
     ===================================================================== */
  api.today = function () { if (api.shell && api.shell.start) api.shell.start('full'); };

  /* thanh chặng ngay dưới các tab pha */
  var changEl = null;
  function renderChang(c) {
    if (!changEl) return;
    c = c || (AD.current && AD.current()) || {};
    var i = phaseIdx(c.phase);
    if (i < 0 || !c.lessonId) { changEl.style.display = 'none'; return; }
    changEl.style.display = '';
    var d = doneOf(c.lessonId), p = PH[i];
    var dots = PH.map(function (x, k) { return '<i class="' + (d.indexOf(x.id) >= 0 ? 'ok' : '') + (k === i ? ' cur' : '') + '" title="' + esc(x.name) + '"></i>'; }).join('');
    var lastOne = i === PH.length - 1, nextTxt = lastOne ? '✅ Xong bài' : '✅ Xong chặng ▶';
    changEl.innerHTML = '<div class="kit-chang-dots" aria-hidden="true">' + dots + '</div><div class="kit-chang-tx"><b>Chặng ' + (i + 1) + '/' + PH.length + '</b> · ' + esc(p.name) + ' · ~' + (p.mins || 4) + ' phút</div><button type="button" id="kitChangDone">' + nextTxt + '</button><button type="button" id="kitChangFlag" class="kit-chang-flag" title="Báo lỗi màn hình này" aria-label="Báo lỗi màn hình này">⚑</button>';
    $('#kitChangFlag', changEl).onclick = function () { var w = $('#workspace'); openFeedback({ text: w ? w.innerText : '' }); };
    $('#kitChangDone', changEl).onclick = function () {
      markPhaseDone(c.lessonId, p.id);
      if (!lastOne) AD.go(c.stage, c.mod, c.idx, PH[i + 1].id);
      else { renderChang(); openPath(); }
    };
  }
  function buildChang() {
    var tabs = $('.phase-tabs'); if (!tabs || $('#kitChang')) return;
    changEl = el('div', { id: 'kitChang', class: 'kit-chang' }); tabs.parentNode.insertBefore(changEl, tabs.nextSibling);
    hooks.onRecord.push(renderChang);
    renderChang();
  }
  addCSS(
    '.kit-modal{position:fixed;inset:0;z-index:9800;background:rgba(15,23,42,.6);display:none;align-items:center;justify-content:center;padding:16px;font-family:system-ui,sans-serif}.kit-modal.open{display:flex}' +
    '.kit-card{background:#fff;color:#0f172a;border-radius:20px;padding:20px;max-width:460px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 50px rgba(0,0,0,.4)}.kit-card h2{margin:0 0 6px;font-size:22px}.kit-sub{color:#475569;font-size:15px;line-height:1.5;margin:6px 0 12px}' +
    '.kit-big{display:block;width:100%;text-align:left;min-height:64px;margin:8px 0;padding:12px 16px;border-radius:16px;border:2px solid #cbd5e1;background:#f8fafc;color:#0f172a;cursor:pointer;font-family:inherit}.kit-big b{display:block;font-size:18px}.kit-big small{display:block;font-size:14px;color:#475569;margin-top:2px;line-height:1.35}.kit-big.hot{background:#fef3c7;border-color:#f59e0b}' +
    '.kit-row{display:flex;gap:8px;margin-top:10px}.kit-row button,.kit-card .kit-btn{flex:1;min-height:44px;border-radius:12px;border:2px solid #cbd5e1;background:#fff;color:#0f172a;font:800 15px system-ui,sans-serif;cursor:pointer}.kit-row button.go{background:#f59e0b;border-color:#f59e0b;color:#fff}' +
    '.kit-chang{display:flex;align-items:center;gap:10px;margin:8px 0 2px;padding:8px 12px;border-radius:14px;background:#fffbeb;border:2px solid #fde68a;color:#78350f;font:600 14px/1.3 system-ui,sans-serif;flex-wrap:wrap}' +
    '.kit-chang-dots{display:flex;gap:5px}.kit-chang-dots i{width:12px;height:12px;border-radius:50%;background:#e2e8f0;border:2px solid #cbd5e1}.kit-chang-dots i.ok{background:#22c55e;border-color:#16a34a}.kit-chang-dots i.cur{border-color:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.35)}' +
    '.kit-chang-tx{flex:1;min-width:140px}.kit-chang .kit-chang-flag{background:#fee2e2;color:#b91c1c;min-width:44px;padding:6px}.kit-chang button{min-height:44px;padding:6px 14px;border-radius:12px;border:0;background:#16a34a;color:#fff;font:800 15px system-ui,sans-serif;cursor:pointer}' +
    '.kit-tut-dots{display:flex;gap:6px;justify-content:center;margin:8px 0}.kit-tut-dots i{width:10px;height:10px;border-radius:50%;background:#cbd5e1}.kit-tut-dots i.on{background:#f59e0b}.kit-tut-ic{font-size:48px;text-align:center}'
  );

  /* hướng dẫn 3 bước (~20 giây), lần đầu mở; bỏ qua được */
  var TUT = [
    { ic: '🎯', t: 'Bấm "Học hôm nay"', d: KIDS ? 'Máy tự chọn bài tiếp theo và các thẻ từ đến hạn ôn. Bố mẹ chỉ cần bấm một nút.' : 'Máy tự chọn bài tiếp theo và các thẻ từ vựng đến hạn ôn. Bạn chỉ cần bấm một nút.' },
    { ic: '⏱️', t: 'Mỗi bài 6 chặng ngắn', d: 'Mỗi chặng khoảng 3–5 phút. Thoát ra lúc nào cũng được — vào lại, trang đưa bạn về đúng chặng đang học.' },
    { ic: '🔊', t: 'Nghe, nói, ôn thẻ', d: 'Bấm biểu tượng loa để nghe; thẻ Anki ở menu giúp nhớ từ cũ lâu hơn. Nên đeo tai nghe và cho phép micro nếu trình duyệt hỏi.' }
  ];
  api.needTutorial = function () { return CS.setting('tutDone', false) !== true; };
  function showTutorial() {
    var step = 0, m = el('div', { id: 'kitTut', class: 'kit-modal open', role: 'dialog', 'aria-modal': 'true' }); doc.body.appendChild(m);
    function end() { CS.setSetting('tutDone', true); m.remove(); }
    function draw() {
      var s = TUT[step];
      m.innerHTML = '<div class="kit-card"><div class="kit-tut-ic">' + s.ic + '</div><h2 style="text-align:center">' + esc(s.t) + '</h2><p class="kit-sub" style="text-align:center">' + esc(s.d) + '</p>' +
        '<div class="kit-tut-dots">' + TUT.map(function (x, i) { return '<i class="' + (i === step ? 'on' : '') + '"></i>'; }).join('') + '</div>' +
        '<div class="kit-row"><button type="button" id="kitTutSkip">Bỏ qua</button><button type="button" class="go" id="kitTutNext">' + (step === TUT.length - 1 ? 'Bắt đầu học' : 'Tiếp ▶') + '</button></div></div>';
      $('#kitTutSkip', m).onclick = end;
      $('#kitTutNext', m).onclick = function () { if (step < TUT.length - 1) { step++; draw(); } else end(); };
    }
    draw();
  }
  api.showTutorial = showTutorial;
  api.register(function () { buildChang(); if (api.needTutorial()) showTutorial(); });

  /* =====================================================================
     D. NẠP DỮ LIỆU THEO CẤP + PWA (service worker chỉ khi chạy qua http/https)
     ===================================================================== */
  var stageLoading = {};
  function toast(msg, ms) {
    var t = $('#kitToast'); if (!t) { t = el('div', { id: 'kitToast', class: 'kit-toast', role: 'status' }); doc.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, ms || 2500);
  }
  api.toast = toast;
  api.ensureStage = function (n, cb) {
    if (root.CURRICULUM_STAGES && root.CURRICULUM_STAGES[n]) { cb(); return; }
    var st = metaStages().filter(function (s) { return s.id === n; })[0];
    if (!st) { toast('Không có dữ liệu cấp này.'); return; }
    if (stageLoading[n]) { stageLoading[n].push(cb); return; }
    stageLoading[n] = [cb];
    toast('Đang tải ' + (st.label || 'cấp ' + n) + '…', 8000);
    var s = el('script', { src: 'data/' + st.file });
    s.onload = function () { var q = stageLoading[n] || []; delete stageLoading[n]; toast('Đã tải xong.', 900); q.forEach(function (f) { try { f(); } catch (e) { if (root.console) root.console.error(e); } }); };
    s.onerror = function () { delete stageLoading[n]; toast('Không tải được dữ liệu. Kiểm tra mạng rồi thử lại.', 4000); };
    doc.head.appendChild(s);
  };
  addCSS('.kit-toast{position:fixed;left:50%;bottom:76px;transform:translateX(-50%) translateY(20px);z-index:100001;background:#0f172a;color:#fff;padding:10px 18px;border-radius:99px;font:700 15px system-ui,sans-serif;opacity:0;pointer-events:none;transition:all .2s;max-width:90vw;text-align:center}.kit-toast.show{opacity:.95;transform:translateX(-50%)}');

  /* PWA */
  var PWA_OK = !!(root.navigator && root.navigator.serviceWorker && root.location && /^https?:$/.test(root.location.protocol));
  api.pwaSupported = PWA_OK;
  api.register(function () {
    if (!PWA_OK) return;
    try {
      root.navigator.serviceWorker.register('sw.js').then(function (reg) {
        api.swReg = reg;
        root.navigator.serviceWorker.ready.then(function (r) {                                   // lưu ngay dữ liệu cấp đang học để học được khi mất mạng
          var urls = []; metaStages().forEach(function (s) { if (root.CURRICULUM_STAGES && root.CURRICULUM_STAGES[s.id]) urls.push('data/' + s.file); });
          if (r.active && urls.length) r.active.postMessage({ type: 'cache', urls: urls });
        });
      }, function (e) { if (root.console) root.console.warn('[AppKit] không đăng ký được service worker:', e && e.message); });
    } catch (e) {}
  });

  /* =====================================================================
     E. NÚT BÁO LỖI + DÒNG TÓM TẮT ẨN DANH (người dùng xem trước và tự bấm gửi; không gửi gì tự động)
     ===================================================================== */
  function browserInfo() {
    var m = /(Edg|OPR|CriOS|Chrome|FxiOS|Firefox|Version)\/([\d]+)/.exec(UA), name = m ? ({ Edg: 'Edge', OPR: 'Opera', CriOS: 'Chrome iOS', FxiOS: 'Firefox iOS', Version: 'Safari' }[m[1]] || m[1]) + ' ' + m[2] : 'không rõ';
    var os = /Android/i.test(UA) ? 'Android' : isIOS() ? 'iOS' : /Windows/i.test(UA) ? 'Windows' : /Mac/i.test(UA) ? 'macOS' : /Linux/i.test(UA) ? 'Linux' : '?';
    return name + ' · ' + os + ' · ' + (root.innerWidth || '?') + '×' + (root.innerHeight || '?') + (detectInApp() ? ' · trong ứng dụng ' + detectInApp() : '');
  }
  function stageLabelOf(id) { var s = metaStages().filter(function (x) { return x.id === id; })[0]; return s ? s.label : String(id || ''); }
  function summaryData() {
    var c = AD.current ? AD.current() : {}, done = 0;
    allLessons().forEach(function (l) { if (lessonState(l.id) === 'done') done++; });
    var st = root.ANKI && root.ANKI.stats ? root.ANKI.stats() : null;
    var dayset = {}; CS.days().forEach(function (d) { dayset[d] = 1; }); if (st) st.reviewDays.forEach(function (d) { dayset[d] = 1; });
    return { stage: stageLabelOf(c.stage), lessonsDone: done, lessonsTotal: allLessons().length, cardsKnown: st ? st.known : 0, retention7: st ? st.retention7 : null, reviews7: st ? st.reviews7 : 0, days: Object.keys(dayset).length };
  }
  function summaryText() {
    var d = summaryData();
    return 'Giai đoạn: ' + d.stage + ' · bài đã xong: ' + d.lessonsDone + '/' + d.lessonsTotal + ' · thẻ thuộc: ' + d.cardsKnown + ' · tỉ lệ nhớ 7 ngày: ' + (d.retention7 == null ? 'chưa có' : d.retention7 + '% (' + d.reviews7 + ' lần ôn)') + ' · số ngày học: ' + d.days;
  }
  function reportData(ctx) {
    ctx = ctx || {};
    var c = AD.current ? AD.current() : {}, ph = PH[phaseIdx(c.phase)];
    return { course: CFG.course || '', lesson: ctx.lesson || c.lessonId || '', item: ctx.item || (ph ? 'chặng ' + (phaseIdx(c.phase) + 1) + ': ' + ph.name : ''), text: String(ctx.text || '').replace(/\s+/g, ' ').trim().slice(0, 400), browser: browserInfo() };
  }
  function formUrl(data, note, summary) {
    var base = CFG.REPORT_FORM_URL || '', F = CFG.REPORT_FIELDS || {}; if (!base) return '';
    var q = [];
    Object.keys(data).forEach(function (k) { if (F[k]) q.push(encodeURIComponent(F[k]) + '=' + encodeURIComponent(data[k])); });
    if (note) { if (F.note) q.push(encodeURIComponent(F.note) + '=' + encodeURIComponent(note)); else if (F.text) q.push(encodeURIComponent(F.text) + '=' + encodeURIComponent((data.text ? data.text + ' | ' : '') + 'Ghi chú: ' + note)); }
    if (summary && F.summary) q.push(encodeURIComponent(F.summary) + '=' + encodeURIComponent(summary));
    return base + (base.indexOf('?') >= 0 ? '&' : '?') + 'usp=pp_url' + (q.length ? '&' + q.join('&') : '');
  }
  var fbEl = null;
  function closeFeedback() { if (fbEl) fbEl.classList.remove('open'); }
  function openFeedback(ctx) {
    if (!fbEl) { fbEl = el('div', { id: 'kitFeedback', class: 'kit-modal kit-top', role: 'dialog', 'aria-modal': 'true' }); doc.body.appendChild(fbEl); fbEl.onclick = function (e) { if (e.target === fbEl) closeFeedback(); }; }
    var isErr = !!ctx, d = reportData(ctx), configured = !!CFG.REPORT_FORM_URL;
    var h = '<div class="kit-card"><h2>' + (isErr ? '⚑ Báo lỗi' : '💬 Góp ý') + '</h2>';
    h += '<p class="kit-sub">Trang <b>không gửi gì tự động</b>. Khi bạn bấm "Mở biểu mẫu", Google Form mở ra với nội dung bên dưới điền sẵn; bạn xem lại và tự bấm Gửi.</p>';
    h += '<dl class="kit-dl"><dt>Khóa học</dt><dd>' + esc(d.course) + '</dd><dt>Mã bài</dt><dd>' + esc(d.lesson) + '</dd><dt>Mã mục</dt><dd>' + esc(d.item) + '</dd>' + (d.text ? '<dt>Nội dung</dt><dd>' + esc(d.text) + '</dd>' : '') + '<dt>Trình duyệt</dt><dd>' + esc(d.browser) + '</dd></dl>';
    h += '<label class="kit-lb" for="kitFbNote">' + (isErr ? 'Lỗi ở đâu? (không bắt buộc)' : 'Góp ý của bạn') + '</label><textarea id="kitFbNote" rows="3" placeholder="' + (isErr ? 'Ví dụ: nghĩa sai, pinyin sai, âm thanh không phát…' : 'Bạn thích gì, khó gì, muốn thêm gì?') + '"></textarea>';
    h += '<label class="kit-chk"><input type="checkbox" id="kitFbSum"> Gửi kèm dòng tóm tắt <b>ẩn danh</b> (tự nguyện — không có tên, email hay mã máy)</label>';
    h += '<div class="kit-lb">Dòng tóm tắt (xem trước):</div><pre class="kit-sum" id="kitFbSumTxt">' + esc(summaryText()) + '</pre>';
    if (!configured) h += '<div class="kit-warn">Biểu mẫu góp ý chưa được cài. Bạn vẫn có thể bấm "Sao chép nội dung" rồi gửi cho người phụ trách. <a href="#" id="kitFbHow">Hướng dẫn tạo biểu mẫu (cho quản trị)</a><div id="kitFbHowBox" class="kit-how" hidden>1) Tạo Google Form có các câu hỏi trả lời ngắn: Khóa học, Mã bài, Mã mục, Nội dung, Trình duyệt, Ghi chú, Tóm tắt.<br>2) Menu ⋮ → "Lấy đường liên kết điền sẵn", điền thử từng ô, bấm "Lấy đường liên kết" rồi xem địa chỉ có dạng <code>entry.123456789=…</code>.<br>3) Mở file <code>data/config.js</code> của khóa: đặt <code>REPORT_FORM_URL</code> là địa chỉ form (đuôi <code>/viewform</code>) và điền các <code>entry.…</code> vào <code>REPORT_FIELDS</code> (course, lesson, item, text, browser, note, summary).</div></div>';
    h += '<div class="kit-row">' + (configured ? '<button type="button" class="go" id="kitFbSend">Mở biểu mẫu</button>' : '') + '<button type="button" id="kitFbCopy">📋 Sao chép nội dung</button><button type="button" id="kitFbClose">Đóng</button></div></div>';
    fbEl.innerHTML = h; fbEl.classList.add('open'); hardenInputs(fbEl);
    function compose() { var note = $('#kitFbNote', fbEl).value.trim(), sum = $('#kitFbSum', fbEl).checked ? summaryText() : ''; return { note: note, sum: sum }; }
    $('#kitFbClose', fbEl).onclick = closeFeedback;
    $('#kitFbCopy', fbEl).onclick = function () {
      var c = compose(), t = ['[' + (isErr ? 'Báo lỗi' : 'Góp ý') + '] ' + d.course + ' · bài ' + d.lesson + ' · ' + d.item, d.text ? 'Nội dung: ' + d.text : '', c.note ? 'Ghi chú: ' + c.note : '', 'Trình duyệt: ' + d.browser, c.sum ? 'Tóm tắt: ' + c.sum : ''].filter(Boolean).join('\n');
      copyText(t, function (ok) { $('#kitFbCopy', fbEl).textContent = ok ? '✅ Đã sao chép' : 'Không sao chép được'; });
    };
    var send = $('#kitFbSend', fbEl);
    if (send) send.onclick = function () { var c = compose(); try { root.open(formUrl(d, c.note, c.sum), '_blank', 'noopener'); } catch (e) {} };
    var how = $('#kitFbHow', fbEl); if (how) how.onclick = function (e) { e.preventDefault(); var b = $('#kitFbHowBox', fbEl); b.hidden = !b.hidden; };
  }
  api.report = openFeedback; api.feedback = function () { openFeedback(null); }; api.summaryText = summaryText; api.summaryData = summaryData; api.formUrl = formUrl; api.reportData = reportData;
  addCSS('.kit-top{z-index:100002!important}.kit-dl{margin:8px 0;font-size:14px;display:grid;grid-template-columns:auto 1fr;gap:2px 10px}.kit-dl dt{font-weight:800;color:#475569}.kit-dl dd{margin:0;word-break:break-word}' +
    '.kit-lb{display:block;font:800 14px system-ui,sans-serif;margin:10px 0 4px;color:#334155}#kitFeedback textarea{width:100%;box-sizing:border-box;border:2px solid #cbd5e1;border-radius:12px;padding:10px;font:16px/1.4 system-ui,sans-serif}' +
    '.kit-chk{display:flex;gap:8px;align-items:flex-start;margin:10px 0;font-size:15px;line-height:1.4}.kit-chk input{width:22px;height:22px;flex:0 0 auto;margin-top:1px}' +
    '.kit-sum{white-space:pre-wrap;background:#f1f5f9;border:2px dashed #94a3b8;border-radius:12px;padding:10px;font:14px/1.5 system-ui,sans-serif;margin:4px 0;color:#0f172a}' +
    '.kit-warn{background:#fffbeb;border:2px solid #fde68a;border-radius:12px;padding:10px;font-size:14px;line-height:1.5;margin:10px 0;color:#78350f}.kit-how{margin-top:8px;font-size:13px}.kit-how code{background:#fef3c7;padding:1px 4px;border-radius:4px}' +
    '.kit-flag{position:absolute;right:6px;top:6px;min-width:36px;min-height:36px;border-radius:10px;border:0;background:rgba(15,23,42,.06);color:#475569;font-size:16px;cursor:pointer;line-height:1}.kit-flag:hover{background:#fee2e2;color:#b91c1c}' +
    '.chunk-card{position:relative}@media (max-width:768px){.kit-flag{min-width:44px;min-height:44px}}');
  /* nút ⚑ trên từng câu (thẻ câu của Pha 1) */
  function decorateFlags() {
    $$('.chunk-card').forEach(function (card, i) {
      if (card.querySelector('.kit-flag')) return;
      var b = el('button', { type: 'button', class: 'kit-flag', title: 'Báo lỗi câu này', 'aria-label': 'Báo lỗi câu này' }, '⚑');
      b.onclick = function (e) { e.stopPropagation(); e.preventDefault(); var all = $$('.chunk-card'); openFeedback({ item: 'câu ' + (all.indexOf(card) + 1), text: card.textContent.replace(/⚑/g, '') }); };
      card.appendChild(b);
    });
  }
  api.register(function () {
    var ws = $('#workspace');
    if (ws && root.MutationObserver) { new root.MutationObserver(function () { decorateFlags(); }).observe(ws, { childList: true, subtree: true }); decorateFlags(); }
  });

  /* =====================================================================
     F. SAO LƯU TIẾN ĐỘ: file .json, chuỗi nén sao chép/dán, mã QR (chỉ vị trí bài + cài đặt)
     ===================================================================== */
  var BK_SETTINGS = CFG.SETTING_KEYS || [];                 // đường dẫn cài đặt đưa vào mã QR (vd. 'showPy', 'anki.limit')
  function collectBackup() { return CS.export(); }          // sao lưu = chính kho tiến độ (schema v1)
  function validateBackup(o) {
    if (o && o.app === 'course-backup') return o.course === CFG.course ? '' : 'File sao lưu này thuộc khóa "' + o.course + '", không dùng cho khóa "' + CFG.course + '".';   // định dạng cũ vẫn nhận
    return CS.validate(o);
  }
  function applyBackup(o) {
    var err0 = validateBackup(o); if (err0) return { ok: false, msg: err0 };
    var r = CS.import(o, 'merge'); if (!r.ok) return r;
    try { if (root.ANKI && root.ANKI.reload) root.ANKI.reload(); } catch (e) {}
    hooks.onRecord.forEach(function (f) { try { f(AD.current()); } catch (e) {} });
    return { ok: true, msg: r.msg + ' Tiến độ bài và thẻ Anki dùng được ngay; cài đặt hiển thị áp dụng khi bạn tải lại trang.' };
  }
  /* chuỗi nén: KB1:<deflate-raw base64url> hoặc KB0:<base64url của UTF-8> khi trình duyệt không có CompressionStream */
  function b64u(bytes) { var s = ''; for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return root.btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function unb64u(t) { t = String(t).replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/'); while (t.length % 4) t += '='; var s = root.atob(t), b = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; }
  function streamBytes(stream, bytes) {
    return new root.Response(new root.Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer().then(function (ab) { return new Uint8Array(ab); });
  }
  function encodeBackup(o) {
    var bytes = new root.TextEncoder().encode(JSON.stringify(o));
    if (typeof root.CompressionStream === 'function') return streamBytes(new root.CompressionStream('deflate-raw'), bytes).then(function (z) { return 'KB1:' + b64u(z); });
    return Promise.resolve('KB0:' + b64u(bytes));
  }
  function decodeBackup(str) {
    str = String(str || '').trim();
    var m = /^(KB[01]):([A-Za-z0-9_\-\s]+)$/.exec(str);
    if (!m) return Promise.reject(new Error('Chuỗi không đúng định dạng (phải bắt đầu bằng KB1: hoặc KB0:).'));
    var done = function (bytes) { try { return JSON.parse(new root.TextDecoder().decode(bytes)); } catch (e) { throw new Error('Chuỗi bị cắt hoặc hỏng, không đọc được.'); } };
    try {
      var bytes = unb64u(m[2]);
      if (m[1] === 'KB0') return Promise.resolve(done(bytes));
      if (typeof root.DecompressionStream !== 'function') return Promise.reject(new Error('Trình duyệt này không giải nén được chuỗi KB1; hãy dùng file .json.'));
      return streamBytes(new root.DecompressionStream('deflate-raw'), bytes).then(done, function () { throw new Error('Chuỗi bị cắt hoặc hỏng, không đọc được.'); });
    } catch (e) { return Promise.reject(new Error('Chuỗi bị cắt hoặc hỏng, không đọc được.')); }
  }
  /* QR: chỉ vị trí bài + cài đặt (nhỏ); quét bằng camera điện thoại sẽ mở liên kết kèm #kit=... */
  function qrPayload() {
    var c = AD.current ? AD.current() : {}, set = {};
    BK_SETTINGS.forEach(function (k) { var v = CS.setting(k, undefined); if (v !== undefined) set[k] = v; });
    return { v: 1, c: CFG.course, s: c.stage, m: c.mod, i: c.idx, p: c.phase, set: set };
  }
  function qrText() {
    var j = JSON.stringify(qrPayload()), base = String(root.location.href).split('#')[0];
    var t = base + '#kit=' + b64u(new root.TextEncoder().encode(j));
    return t.length <= 260 ? t : '#kit=' + b64u(new root.TextEncoder().encode(j));
  }
  function applyQrPayload(j) {
    if (!j || j.v !== 1 || j.c !== CFG.course || typeof j.s !== 'number' || typeof j.m !== 'string' || typeof j.i !== 'number') return false;
    Object.keys(j.set || {}).forEach(function (k) { var v = j.set[k]; if (BK_SETTINGS.indexOf(k) >= 0 && (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || (Array.isArray(v) && v.every(function (x) { return typeof x === 'string'; })))) CS.setSetting(k, v); });
    var st = metaStages().filter(function (x) { return x.id === j.s; })[0], mo = st && st.modules.filter(function (x) { return x.code === j.m; })[0], ls = mo && mo.lessons[j.i];
    if (!ls) return false;
    var f = { stage: st.id, mod: mo.code, idx: j.i, lesson: ls };
    CS.setPosition({ stage: f.stage, mod: f.mod, idx: f.idx, phase: phaseIdx(j.p) >= 0 ? j.p : 'p1', lessonId: f.lesson.id, ts: Date.now() });
    return true;
  }
  /* --- bộ tạo mã QR (byte mode, mức sửa lỗi L, phiên bản 1–10) --- */
  var QR = (function () {
    var EXP = [], LOG = [], i, x = 1;
    for (i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 0x11d; }
    function gmul(a, b) { return a && b ? EXP[(LOG[a] + LOG[b]) % 255] : 0; }
    function rsGen(n) { var g = [1]; for (var k = 0; k < n; k++) { var ng = new Array(g.length + 1).fill(0); for (var j = 0; j < g.length; j++) { ng[j] ^= g[j]; ng[j + 1] ^= gmul(g[j], EXP[k]); } g = ng; } return g; }
    function rsEnc(data, n) { var g = rsGen(n), r = new Array(n).fill(0); data.forEach(function (d) { var f = d ^ r.shift(); r.push(0); if (f) for (var j = 0; j < n; j++) r[j] ^= gmul(g[j + 1], f); }); return r; }
    var EC = { 1: [7, [[1, 19]]], 2: [10, [[1, 34]]], 3: [15, [[1, 55]]], 4: [20, [[1, 80]]], 5: [26, [[1, 108]]], 6: [18, [[2, 68]]], 7: [20, [[2, 78]]], 8: [24, [[2, 97]]], 9: [30, [[2, 116]]], 10: [18, [[2, 68], [2, 69]]] };
    var AL = { 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30], 6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50] };
    function dataCap(v) { return EC[v][1].reduce(function (s, b) { return s + b[0] * b[1]; }, 0); }
    function bch(v, gen, bits, shift) { var r = v << shift; for (var b = bits - 1; b >= 0; b--) if ((r >> (b + shift)) & 1) r ^= gen << b; return (v << shift) | r; }
    function make(text) {
      var bytes = Array.prototype.slice.call(new root.TextEncoder().encode(text)), v, need;
      for (v = 1; v <= 10; v++) { need = 4 + (v < 10 ? 8 : 16) + bytes.length * 8; if (Math.ceil(need / 8) <= dataCap(v)) break; }
      if (v > 10) return null;
      var bits = []; function put(val, n) { for (var b = n - 1; b >= 0; b--) bits.push((val >> b) & 1); }
      put(4, 4); put(bytes.length, v < 10 ? 8 : 16); bytes.forEach(function (b) { put(b, 8); });
      var cap = dataCap(v) * 8; for (i = 0; i < 4 && bits.length < cap; i++) bits.push(0); while (bits.length % 8) bits.push(0);
      var cw = []; for (i = 0; i < bits.length; i += 8) { var c = 0; for (var k = 0; k < 8; k++) c = (c << 1) | bits[i + k]; cw.push(c); }
      for (i = 0; cw.length < dataCap(v); i++) cw.push(i % 2 ? 0x11 : 0xec);
      var ecn = EC[v][0], blocks = [], pos = 0;
      EC[v][1].forEach(function (g) { for (var n = 0; n < g[0]; n++) { var d = cw.slice(pos, pos + g[1]); pos += g[1]; blocks.push({ d: d, e: rsEnc(d, ecn) }); } });
      var final = [], maxd = Math.max.apply(null, blocks.map(function (b) { return b.d.length; }));
      for (i = 0; i < maxd; i++) blocks.forEach(function (b) { if (i < b.d.length) final.push(b.d[i]); });
      for (i = 0; i < ecn; i++) blocks.forEach(function (b) { final.push(b.e[i]); });
      var size = 17 + 4 * v, M = [], F = [];
      for (i = 0; i < size; i++) { M.push(new Array(size).fill(0)); F.push(new Array(size).fill(false)); }
      function setf(r, c, val) { M[r][c] = val ? 1 : 0; F[r][c] = true; }
      function finder(r0, c0) { for (var r = -1; r <= 7; r++) for (var c = -1; c <= 7; c++) { var rr = r0 + r, cc = c0 + c; if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue; setf(rr, cc, (r >= 0 && r <= 6 && (c === 0 || c === 6)) || (c >= 0 && c <= 6 && (r === 0 || r === 6)) || (r >= 2 && r <= 4 && c >= 2 && c <= 4)); } }
      finder(0, 0); finder(0, size - 7); finder(size - 7, 0);
      for (i = 8; i < size - 8; i++) { setf(6, i, i % 2 === 0); setf(i, 6, i % 2 === 0); }
      if (AL[v]) AL[v].forEach(function (r0) { AL[v].forEach(function (c0) { var lastC = AL[v][AL[v].length - 1]; if ((r0 === 6 && c0 === 6) || (r0 === 6 && c0 === lastC) || (r0 === lastC && c0 === 6)) return; for (var r = -2; r <= 2; r++) for (var c = -2; c <= 2; c++) setf(r0 + r, c0 + c, Math.max(Math.abs(r), Math.abs(c)) !== 1); }); });
      setf(size - 8, 8, true);                                                 // ô tối cố định
      for (i = 0; i < 9; i++) { if (!F[8][i]) setf(8, i, false); if (!F[i][8]) setf(i, 8, false); }     // giữ chỗ thông tin định dạng
      for (i = 0; i < 8; i++) { if (!F[8][size - 1 - i]) setf(8, size - 1 - i, false); if (!F[size - 1 - i][8]) setf(size - 1 - i, 8, false); }
      var verBits = null;
      if (v >= 7) { verBits = bch(v, 0x1f25, 12, 12); for (i = 0; i < 18; i++) { var bit = (verBits >> i) & 1, a = Math.floor(i / 3), b2 = i % 3 + size - 11; setf(a, b2, bit); setf(b2, a, bit); } }
      var dataBits = []; final.forEach(function (b) { for (var k = 7; k >= 0; k--) dataBits.push((b >> k) & 1); });
      function place(mask) {
        var R = M.map(function (row) { return row.slice(); }), bi = 0, up = true;
        for (var col = size - 1; col > 0; col -= 2) {
          if (col === 6) col--;
          for (var n = 0; n < size; n++) { var r = up ? size - 1 - n : n; for (var d = 0; d < 2; d++) { var c = col - d; if (F[r][c]) continue; var bit = bi < dataBits.length ? dataBits[bi++] : 0; var m = [(r + c) % 2 === 0, r % 2 === 0, c % 3 === 0, (r + c) % 3 === 0, (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0, (r * c) % 2 + (r * c) % 3 === 0, ((r * c) % 2 + (r * c) % 3) % 2 === 0, ((r + c) % 2 + (r * c) % 3) % 2 === 0][mask]; R[r][c] = bit ^ (m ? 1 : 0); } }
          up = !up;
        }
        var fmt = bch((1 << 3) | mask, 0x537, 10, 10) ^ 0x5412;                  // mức L = 01
        for (var k = 0; k < 15; k++) { var bt = (fmt >> k) & 1; var p1 = k < 6 ? [k, 8] : k < 8 ? [k + 1, 8] : k === 8 ? [8, 7] : [8, 14 - k]; R[p1[0]][p1[1]] = bt; var p2 = k < 8 ? [8, size - 1 - k] : [size - 15 + k, 8]; R[p2[0]][p2[1]] = bt; }
        return R;
      }
      function penalty(R) {
        var p = 0, r, c, run, k;
        for (r = 0; r < size; r++) { run = 1; for (c = 1; c < size; c++) { if (R[r][c] === R[r][c - 1]) { run++; if (c === size - 1 && run >= 5) p += run - 2; } else { if (run >= 5) p += run - 2; run = 1; } } }
        for (c = 0; c < size; c++) { run = 1; for (r = 1; r < size; r++) { if (R[r][c] === R[r - 1][c]) { run++; if (r === size - 1 && run >= 5) p += run - 2; } else { if (run >= 5) p += run - 2; run = 1; } } }
        for (r = 0; r < size - 1; r++) for (c = 0; c < size - 1; c++) if (R[r][c] === R[r][c + 1] && R[r][c] === R[r + 1][c] && R[r][c] === R[r + 1][c + 1]) p += 3;
        var pat1 = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0], pat2 = pat1.slice().reverse();
        function mt(get) { var s = 0; for (var a = 0; a + 11 <= size; a++) { var m1 = true, m2 = true; for (k = 0; k < 11; k++) { if (get(a + k) !== pat1[k]) m1 = false; if (get(a + k) !== pat2[k]) m2 = false; } if (m1) s += 40; if (m2) s += 40; } return s; }
        for (r = 0; r < size; r++) p += mt(function (j) { return R[r][j]; });
        for (c = 0; c < size; c++) p += mt(function (j) { return R[j][c]; });
        var dark = 0; for (r = 0; r < size; r++) for (c = 0; c < size; c++) dark += R[r][c];
        p += Math.floor(Math.abs(dark * 100 / (size * size) - 50) / 5) * 10;
        return p;
      }
      var best = null, bp = 1e9; for (var mk = 0; mk < 8; mk++) { var R = place(mk), pn = penalty(R); if (pn < bp) { bp = pn; best = R; } }
      return { size: size, version: v, modules: best };
    }
    return { make: make };
  })();
  function qrSvg(text) {
    var q = QR.make(text); if (!q) return '';
    var n = q.size + 8, d = '';
    for (var r = 0; r < q.size; r++) for (var c = 0; c < q.size; c++) if (q.modules[r][c]) d += 'M' + (c + 4) + ' ' + (r + 4) + 'h1v1h-1z';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + n + ' ' + n + '" shape-rendering="crispEdges" role="img" aria-label="Mã QR vị trí bài"><rect width="' + n + '" height="' + n + '" fill="#fff"/><path d="' + d + '" fill="#000"/></svg>';
  }
  api.qrSvg = qrSvg; api.qrMake = QR.make; api.qrText = qrText;
  api.backup = { collect: collectBackup, validate: validateBackup, apply: applyBackup, encode: encodeBackup, decode: decodeBackup, qrPayload: qrPayload, applyQr: applyQrPayload };

  /* --- giao diện sao lưu --- */
  var bkEl = null;
  function closeBackup() { if (bkEl) bkEl.classList.remove('open'); }
  function downloadText(name, text) {
    var a = el('a'); a.href = root.URL.createObjectURL(new root.Blob([text], { type: 'application/json' })); a.download = name; doc.body.appendChild(a); a.click();
    setTimeout(function () { root.URL.revokeObjectURL(a.href); a.remove(); }, 600);
  }
  function openBackup() {
    if (!bkEl) { bkEl = el('div', { id: 'kitBackup', class: 'kit-modal kit-top', role: 'dialog', 'aria-modal': 'true' }); doc.body.appendChild(bkEl); bkEl.onclick = function (e) { if (e.target === bkEl) closeBackup(); }; }
    var svg = qrSvg(qrText());
    bkEl.innerHTML = '<div class="kit-card"><h2>💾 Sao lưu tiến độ</h2><p class="kit-sub">Tiến độ chỉ nằm trong trình duyệt của bạn. Hãy sao lưu trước khi đổi máy hoặc xóa dữ liệu trình duyệt.</p>' +
      '<div class="kit-row wrap"><button type="button" id="kitBkSave">⬇️ Tải file .json</button><label class="kit-filebtn">⬆️ Nhập file .json<input type="file" id="kitBkFile" accept=".json,application/json" hidden></label></div>' +
      '<div class="kit-lb">Chuỗi sao lưu (sao chép / dán):</div><textarea id="kitBkStr" rows="3" placeholder="Bấm &quot;Tạo chuỗi&quot; rồi sao chép, hoặc dán chuỗi KB1:… vào đây để khôi phục"></textarea>' +
      '<div class="kit-row wrap"><button type="button" id="kitBkMake">🧩 Tạo chuỗi</button><button type="button" id="kitBkCopy">📋 Sao chép</button><button type="button" id="kitBkPaste" class="go">♻️ Khôi phục từ chuỗi</button></div>' +
      '<div class="kit-lb">Mã QR — chỉ chứa <b>vị trí bài và cài đặt</b> (không chứa thẻ Anki):</div><div class="kit-qr">' + (svg || '<i>Không tạo được mã QR.</i>') + '</div>' +
      '<p class="kit-sub" style="font-size:13px">Quét bằng camera điện thoại để mở đúng bài đang học (trên cùng địa chỉ trang). Muốn mang cả thẻ Anki sang máy khác, dùng file .json hoặc chuỗi sao lưu.</p>' +
      '<div class="kit-msg" id="kitBkMsg" role="status"></div><div class="kit-row"><button type="button" id="kitBkClose">Đóng</button></div></div>';
    bkEl.classList.add('open'); hardenInputs(bkEl);
    var msg = function (t, bad) { var m = $('#kitBkMsg', bkEl); m.textContent = t; m.className = 'kit-msg' + (bad ? ' bad' : ' good'); };
    $('#kitBkClose', bkEl).onclick = closeBackup;
    $('#kitBkSave', bkEl).onclick = function () { downloadText((CFG.course || 'khoa-hoc') + '-sao-luu-' + todayStr() + '.json', JSON.stringify(collectBackup())); msg('✅ Đã tải file sao lưu.'); };
    $('#kitBkFile', bkEl).onchange = function () {
      var f = this.files && this.files[0]; if (!f) return; var rd = new root.FileReader();
      rd.onload = function () { var o; try { o = JSON.parse(String(rd.result)); } catch (e) { msg('❌ File không đọc được (không phải JSON). Dữ liệu hiện tại KHÔNG bị thay đổi.', true); return; } doRestore(o); };
      rd.onerror = function () { msg('❌ Không đọc được file.', true); }; rd.readAsText(f); this.value = '';
    };
    function doRestore(o) { var r = applyBackup(o); if (!r.ok) { msg('❌ ' + r.msg + ' Dữ liệu hiện tại KHÔNG bị thay đổi.', true); return; } msg('✅ ' + r.msg); }
    $('#kitBkMake', bkEl).onclick = function () { encodeBackup(collectBackup()).then(function (s) { $('#kitBkStr', bkEl).value = s; msg('✅ Đã tạo chuỗi (' + s.length + ' ký tự). Bấm Sao chép rồi lưu vào ghi chú/tin nhắn.'); }); };
    $('#kitBkCopy', bkEl).onclick = function () { var t = $('#kitBkStr', bkEl).value; if (!t) { msg('Hãy bấm "Tạo chuỗi" trước.', true); return; } copyText(t, function (ok) { msg(ok ? '✅ Đã sao chép.' : 'Không sao chép tự động được — hãy chọn chuỗi và sao chép thủ công.', !ok); }); };
    $('#kitBkPaste', bkEl).onclick = function () {
      decodeBackup($('#kitBkStr', bkEl).value).then(doRestore, function (e) { msg('❌ ' + e.message + ' Dữ liệu hiện tại KHÔNG bị thay đổi.', true); });
    };
  }
  api.openBackup = openBackup;
  addCSS('.kit-row.wrap{flex-wrap:wrap}.kit-filebtn{flex:1;min-height:44px;border-radius:12px;border:2px solid #cbd5e1;background:#fff;color:#0f172a;font:800 15px system-ui,sans-serif;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0 10px;min-width:140px}' +
    '.kit-qr{max-width:240px;margin:8px auto;border:2px solid #e2e8f0;border-radius:8px;overflow:hidden}.kit-qr svg{display:block;width:100%;height:auto}.kit-msg{min-height:22px;font-size:14px;line-height:1.4;margin:8px 0}.kit-msg.bad{color:#b91c1c}.kit-msg.good{color:#15803d}' +
    '#kitBackup textarea{width:100%;box-sizing:border-box;border:2px solid #cbd5e1;border-radius:12px;padding:10px;font:13px/1.3 monospace;word-break:break-all}');
  api.register(function () {
    var m = /^#kit=([A-Za-z0-9_\-]+)$/.exec(root.location.hash || '');            // mở từ mã QR: hỏi trước khi áp dụng
    if (m) {
      var j = null; try { j = JSON.parse(new root.TextDecoder().decode(unb64u(m[1]))); } catch (e) {}
      try { root.history.replaceState(null, '', root.location.pathname + root.location.search); } catch (e) {}
      if (j && j.v === 1 && j.c === CFG.course && root.confirm('Khôi phục vị trí bài và cài đặt từ mã QR?')) {
        if (applyQrPayload(j)) {
          var last = CS.position(), hasSet = j.set && Object.keys(j.set).length > 0;
          api.ensureStage(last.stage, function () { try { AD.go(last.stage, last.mod, last.idx, last.phase); } catch (e) {} });     // vào đúng bài ngay, không cần tải lại
          if (hasSet) setTimeout(function () { root.location.reload(); }, 1200);                                                      // cài đặt (hiện pinyin…) áp dụng khi tải lại
        }
      }
    }
  });

  /* =====================================================================
     J. ÂM THANH DẠNG SPRITE: mỗi bài một file mp3 + bảng mốc thời gian (render bằng docs/upgrade/render_audio_sprites.py)
        Có sprite thì phát từ file (có tua, có tốc độ chậm); không có thì trang tự dùng giọng của trình duyệt.
     ===================================================================== */
  var AM = root.AUDIO_MAP = root.AUDIO_MAP || {};
  var sprIdx = {}, sprState = {}, sprOn = false, audioList = null, sprPending = [];
  function indexMap(key) { var m = AM[key]; if (!m || !m.items) return; Object.keys(m.items).forEach(function (t) { if (!sprIdx[t]) sprIdx[t] = { src: m.src, start: m.items[t][0], end: m.items[t][1], gap: m.gap || 0.4 }; }); }
  function audioInit() {
    if (CFG.AUDIO !== true || sprOn) return;
    sprOn = true;
    var s = el('script', { src: 'audio/' + CFG.course + '/index.js' });
    s.onload = function () { audioList = ((root.AUDIO_INDEX || {})[CFG.course]) || []; var c = AD.current && AD.current(); if (c && c.lessonId) preloadLesson(c.lessonId); sprPending.splice(0).forEach(preloadLesson); };
    s.onerror = function () { audioList = []; };
    doc.head.appendChild(s);
  }
  function preloadLesson(lessonId) {
    if (!sprOn || !lessonId) return;
    if (!audioList) { if (sprPending.indexOf(lessonId) < 0) sprPending.push(lessonId); return; }       // chờ index.js
    var key = CFG.course + '/' + lessonId;
    if (sprState[key] || audioList.indexOf(String(lessonId)) < 0) return;
    if (AM[key]) { sprState[key] = 'ok'; indexMap(key); return; }
    sprState[key] = 'loading';
    var s = el('script', { src: 'audio/' + CFG.course + '/' + lessonId + '.js' });
    s.onload = function () { sprState[key] = AM[key] ? 'ok' : 'missing'; indexMap(key); };
    s.onerror = function () { sprState[key] = 'missing'; };
    doc.head.appendChild(s);
  }
  var aud = null, curPlay = null;
  function stopSprite() { if (curPlay) { curPlay.cancel(); curPlay = null; } }
  function rateToPb(rate) { return rate && rate < 0.85 ? 0.72 : 1; }
  function playEntry(e, rate) {                  // Promise<boolean>: true = phát xong, false = lỗi (trang sẽ rơi về giọng trình duyệt)
    stopSprite();
    return new Promise(function (resolve) {
      if (!aud) { aud = new root.Audio(); aud.preload = 'auto'; }
      var a = aud, done = false, pb = rateToPb(rate), tick = null, guard = null;
      function fin(ok) {
        if (done) return; done = true; clearInterval(tick); clearTimeout(guard);
        a.removeEventListener('timeupdate', onTime); a.removeEventListener('ended', onEnd); a.removeEventListener('error', onErr);
        try { a.pause(); } catch (x) {}
        if (curPlay === handle) curPlay = null;
        resolve(ok);
      }
      var handle = { cancel: function () { fin(true); } };
      function check() { if (a.currentTime >= e.end + 0.06) fin(true); }                   // dừng đúng mốc: timeupdate (thưa) + đồng hồ 25 ms; dung sai 0,06 s < khoảng lặng 0,4 s
      function onTime() { check(); } function onEnd() { fin(true); } function onErr() { fin(false); }
      a.addEventListener('timeupdate', onTime); a.addEventListener('ended', onEnd); a.addEventListener('error', onErr);
      curPlay = handle;
      function start() {
        try { a.playbackRate = pb; a.currentTime = Math.max(0, e.start - 0.03); var p = a.play(); if (p && p.catch) p.catch(function () { fin(false); }); } catch (x) { fin(false); return; }
        tick = setInterval(check, 25);
      }
      guard = setTimeout(function () { fin(false); }, ((e.end - e.start) / pb) * 1000 + 4000);   // phòng file không phát
      if (a.getAttribute('data-src') !== e.src) {
        a.setAttribute('data-src', e.src); a.src = e.src;
        var onMeta = function () { a.removeEventListener('loadedmetadata', onMeta); if (!done) start(); };
        a.addEventListener('loadedmetadata', onMeta); try { a.load(); } catch (x) { fin(false); }
      } else start();
    });
  }
  /* trang gọi: AppKit.speakSprite(text, rate, onend, fallback) → true nếu đã nhận phát bằng sprite */
  function speakSprite(text, rate, onend, fallback) {
    if (!sprOn) return false;
    var e = sprIdx[String(text)]; if (!e) return false;
    try { if (root.speechSynthesis && root.speechSynthesis.cancel) root.speechSynthesis.cancel(); } catch (x) {}
    playEntry(e, rate).then(function (ok) { if (ok) { if (onend) try { onend(); } catch (x) {} } else if (fallback) fallback(); });
    return true;
  }
  function playSprite(text, rate) { if (!sprOn) return null; var e = sprIdx[String(text)]; return e ? playEntry(e, rate) : null; }
  api.audioInit = audioInit; api.preloadLesson = preloadLesson; api.speakSprite = speakSprite; api.playSprite = playSprite; api.stopSprite = stopSprite;
  api.spriteInfo = function () { return { on: sprOn, texts: Object.keys(sprIdx).length, lessons: audioList }; };
  api.register(function () {
    audioInit();
    if (api.hooks) api.hooks.onRecord.push(function (c) { if (c && c.lessonId) preloadLesson(c.lessonId); });
  }, true);

  /* =====================================================================
     G. MẸO ĐẦU BÀI · NÚT NGHE CHẬM 🐢 · CHẠM MỘT TỪ ĐỂ XEM NGHĨA (đánh dấu "vừa tra" cho Anki)
     ===================================================================== */
  function sayTextOf(node) {                              // chữ mà nút/từ này đọc: data-say (tiếng Trung) hoặc speakText('...') trong onclick (tiếng Anh)
    if (!node) return '';
    if (node.dataset && node.dataset.say) return node.dataset.say;
    var m = /speakText\(\s*(['"`])((?:\\.|(?!\1).)*)\1/.exec(node.getAttribute && node.getAttribute('onclick') || '');
    return m ? m[2].replace(/\\(.)/g, '$1') : '';
  }
  function sentences(text, n) {
    var parts = String(text || '').replace(/\s+/g, ' ').trim().split(/(?<=[.!?。！？;；])\s*/).filter(function (x) { return x && x.length > 1; });
    return parts.slice(0, n).map(function (x) { return x.length > 150 ? x.slice(0, 147).replace(/\s+\S*$/, '') + '…' : x; });
  }
  function tipLines() {                                    // tối đa 3 dòng, lấy từ grammar.tip / vn_tip có sẵn (không viết nội dung mới)
    var t = AD.tip && AD.tip(); if (!t) return [];
    var a = sentences(t.tip, 2), b = sentences(t.vn, 1);
    return a.concat(b).slice(0, 3);
  }
  function decorateG() {
    var ws = $('#workspace'); if (!ws) return;
    var c = AD.current ? AD.current() : null;
    if (c && c.phase === 'p1' && c.lessonId && !(CS.lesson(c.lessonId) && CS.lesson(c.lessonId).tipSeen) && !$('.kit-tip', ws)) {
      var lines = tipLines();
      if (lines.length) {
        var card = el('div', { class: 'kit-tip', role: 'note' }, '<div class="kit-tip-h">💡 Mẹo đầu bài</div><ol>' + lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ol><button type="button" class="kit-tip-ok">Đã hiểu ▶</button>');
        ws.insertBefore(card, ws.firstChild);
        $('.kit-tip-ok', card).onclick = function () { CS.setLessonField(c.lessonId, 'tipSeen', true); card.remove(); };
      }
    }
    $$('.hero-audio-btn', ws).forEach(function (b) {
      var say = sayTextOf(b); if (!say || b.nextSibling && b.nextSibling.classList && b.nextSibling.classList.contains('kit-slow')) return;
      var slow = el('button', { type: 'button', class: 'kit-slow', title: 'Nghe chậm', 'aria-label': 'Nghe chậm' }, '🐢');
      slow.onclick = function (e) { e.stopPropagation(); if (typeof root.speakText === 'function') root.speakText(say, 0.72); };
      b.parentNode.insertBefore(slow, b.nextSibling);
      if (api.canRecord && api.canRecord()) {
        var mic = el('button', { type: 'button', class: 'kit-mic', title: 'Nói theo và nghe lại', 'aria-label': 'Nói theo và nghe lại' }, '🎤');
        mic.onclick = function (e) { e.stopPropagation(); api.record(say); };
        b.parentNode.insertBefore(mic, slow.nextSibling);
      }
    });
  }
  /* bong bóng nghĩa khi chạm một từ trong câu */
  var bubble = null, wordIdx = null;
  function ankiWord(text) {
    var A = root.ANKI; if (!A || !A.words) return null;
    if (!wordIdx) { wordIdx = {}; A.words().forEach(function (w) { var k = String(w.text).toLowerCase(); if (!wordIdx[k]) wordIdx[k] = w; (w.forms || []).forEach(function (f) { var kk = String(f).toLowerCase(); if (!wordIdx[kk]) wordIdx[kk] = w; }); }); }
    return wordIdx[String(text).toLowerCase()] || null;
  }
  function ankiWordIn(text, lessonId) {                  // mục từ của đúng bài (từ nhiều nghĩa như wake: danh từ/động từ); không có thì lấy mục đầu
    var A = root.ANKI, ws = A && A.words ? A.words() : [], k = String(text).toLowerCase(), i;
    for (i = 0; i < ws.length; i++) if (ws[i].lesson === lessonId && (String(ws[i].text).toLowerCase() === k || (ws[i].forms || []).some(function (f) { return String(f).toLowerCase() === k; }))) return ws[i];
    return ankiWord(text);
  }
  function closeBubble() { if (bubble) { bubble.remove(); bubble = null; } }
  /* ---- họ hàng âm Hán Việt (zh): dữ liệu window.ZH_HV_FAMILY (script đo từ HSK 1–5); chỉ hiện từ đến cấp đang học; quy luật là XU HƯỚNG ---- */
  var PY_INI = ['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'z', 'c', 's', 'r', 'y', 'w'];
  var VI_INI = ['ngh', 'ng', 'nh', 'ph', 'th', 'tr', 'kh', 'gh', 'gi', 'qu', 'ch', 'b', 'c', 'd', 'đ', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x'];
  function viSplit(syl) {
    var s = String(syl || '').toLowerCase().normalize('NFD').replace(/[\u0300\u0301\u0309\u0303\u0323]/g, '').normalize('NFC');
    for (var i = 0; i < VI_INI.length; i++) if (s.indexOf(VI_INI[i]) === 0 && s.length > VI_INI[i].length) return [VI_INI[i], s.slice(VI_INI[i].length)];
    return ['∅', s];
  }
  function pySplit(syl) {
    var s = String(syl || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, function (m) { return m === '\u0308' ? m : ''; }).normalize('NFC').replace(/[^a-z\u00fc]/g, '');
    for (var i = 0; i < PY_INI.length; i++) if (s.indexOf(PY_INI[i]) === 0 && s.length > PY_INI[i].length) return [PY_INI[i], s.slice(PY_INI[i].length)];
    return ['∅', s];
  }
  /* gia đình từ (kids, GĐ 4–6): tối đa 3 từ cùng gốc ĐÃ CÓ trong khóa đến cấp đang học; dữ liệu window.KIDS_WORD_FAMILY sinh từ danh sách từ */
  function kidsFamilyHtml(text, w) {
    var F = root.KIDS_WORD_FAMILY; if (!F) return '';
    var pos = CS.position() || {}, stage = pos.stage || 1; if (stage < 4) return '';
    var cands = w ? [w] : String(text).split(/[^A-Za-z']+/).filter(Boolean).map(function (t) { return ankiWord(t); }).filter(Boolean);       // cụm nhiều từ: lần lượt thử từng từ trong cụm
    for (var i = 0; i < cands.length; i++) {
      var cap = Math.max(stage, cands[i].level || 1), list = (F.words[String(cands[i].text).toLowerCase()] || []).filter(function (r) { return r[3] <= cap; }).slice(0, 3);
      if (list.length) return '<div class="kit-b-f">🔗 Cùng gia đình với <b>' + esc(cands[i].text) + '</b>: ' + list.map(function (r) { return '<b>' + esc(r[0]) + '</b> (' + esc(r[1]) + ') – ' + esc(r[2]); }).join(' · ') + '</div>';
    }
    return '';
  }
  function hvFamilyHtml(text, w) {
    if (CFG.course === 'kids') return kidsFamilyHtml(text, w);
    var F = root.ZH_HV_FAMILY; if (!F || CFG.course !== 'zh' || !w) return '';
    var pos = CS.position() || {}, cap = Math.max(pos.stage || 1, w.level || 1), chars = String(text).split(''), hvs = String(w.hv || '').split(/\s+/), out = '', k;
    for (k = 0; k < chars.length; k++) {
      var list = F.chars[chars[k]]; if (!list) continue;
      var rel = list.filter(function (x) { return x[0] !== text && x[3] <= cap; }).slice(0, 3);
      if (!rel.length) continue;
      out += '<div class="kit-b-f">🔗 Họ hàng âm Hán Việt của <b>' + esc(chars[k]) + '</b>' + (hvs.length === chars.length && hvs[k] ? ' (' + esc(hvs[k]) + ')' : '') + ': ' + rel.map(function (x) { return esc(x[0]) + ' ' + esc(x[1]) + ' – ' + esc(x[2]); }).join(' · ') + '</div>';
      break;
    }
    var sy = root.ZH_SANDHI ? root.ZH_SANDHI.split(w.read || '') : [];
    if (hvs.length === chars.length && sy.length === chars.length) {
      var best = null;
      for (k = 0; k < chars.length; k++) {
        var vs = viSplit(hvs[k]), ps = pySplit(sy[k].t);
        (F.rules || []).forEach(function (r) {
          if (r.n < 20 || r.hv === '∅' || (r.py.length === 1 && r.py[0] === r.hv)) return;      // bỏ quy luật tầm thường (m→m, l→l…)
          if ((r.kind === 'ini' ? vs[0] : vs[1]) === r.hv && r.py.indexOf(r.kind === 'ini' ? ps[0] : ps[1]) >= 0 && (!best || r.n > best.r.n)) best = { r: r, c: chars[k], hv: hvs[k] };
        });
      }
      if (best) out += '<div class="kit-b-f kit-b-rl">💡 Ở chữ <b>' + esc(best.c) + '</b> (' + esc(best.hv) + '): ' + (best.r.kind === 'ini' ? 'phụ âm đầu <b>' + esc(best.r.hv) + '</b>' : 'vần <b>-' + esc(best.r.hv) + '</b>') + ' Hán Việt thường ứng với <b>' + (best.r.kind === 'ini' ? '' : '-') + esc(best.r.py.join(' / ' + (best.r.kind === 'ini' ? '' : '-'))) + '</b> trong pinyin (đúng ~' + Math.round(best.r.share * 100) + '% ở HSK 1–5; có ngoại lệ).</div>';
    }
    return out;
  }
  function showBubble(pill, text) {
    closeBubble();
    var w = ankiWord(text), py = $('.l-py', pill), hv = $('.l-hv', pill);
    var read = w ? w.read : (py ? py.textContent : ''), hvt = hv ? hv.textContent : (w && w.hv) || '';
    var h = '<div class="kit-b-w">' + esc(text) + '</div>';
    if (read) h += '<div class="kit-b-r">' + esc(read) + (hvt && CFG.course === 'zh' ? ' · <b>' + esc(hvt) + '</b>' : '') + '</div>';
    if (w && w.pos) h += '<div class="kit-b-p">' + esc(w.pos) + '</div>';
    h += '<div class="kit-b-m">' + (w ? esc(w.vi) : 'Chưa có nghĩa riêng cho từ này — xem bản dịch cả câu.') + '</div>';
    h += hvFamilyHtml(text, w);
    if (w) h += '<div class="kit-b-n">🔎 Đã đánh dấu "vừa tra": thẻ Anki của từ này được ưu tiên ôn.</div>';
    bubble = el('div', { class: 'kit-bubble', role: 'tooltip' }, h);
    doc.body.appendChild(bubble);
    var r = pill.getBoundingClientRect(), bw = Math.min(280, (root.innerWidth || 360) - 16);
    bubble.style.width = bw + 'px';
    var left = Math.max(8, Math.min((root.innerWidth || 360) - bw - 8, r.left + r.width / 2 - bw / 2)), top = r.bottom + 8;
    if (top + 140 > (root.innerHeight || 700)) top = Math.max(8, r.top - bubble.offsetHeight - 8);
    bubble.style.left = left + 'px'; bubble.style.top = top + 'px';
    if (w && root.ANKI && root.ANKI.markLooked) root.ANKI.markLooked(w.id);
    setTimeout(function () { var h2 = function () { closeBubble(); doc.removeEventListener('click', h2, true); }; doc.addEventListener('click', h2, true); }, 50);
  }
  addCSS('.kit-tip{background:#ecfeff;border:2px solid #67e8f9;border-radius:16px;padding:10px 14px;margin:0 0 10px;color:#164e63;font:600 16px/1.45 system-ui,sans-serif}.kit-tip-h{font-weight:900;margin-bottom:4px}.kit-tip ol{margin:0 0 6px 20px;padding:0}.kit-tip li{margin:2px 0}' +
    '.kit-tip-ok{min-height:44px;padding:6px 16px;border-radius:12px;border:0;background:#0891b2;color:#fff;font:800 15px system-ui,sans-serif;cursor:pointer}' +
    '.kit-slow,.kit-mic{min-width:44px;min-height:44px;margin:0 0 0 6px;border-radius:14px;border:2px solid #cbd5e1;background:#fff;font-size:20px;cursor:pointer;vertical-align:middle}.kit-mic{border-color:#fca5a5}' +
    '.kit-bubble{position:fixed;z-index:100003;background:#fff;color:#0f172a;border:2px solid #1e3a8a;border-radius:14px;padding:10px 12px;box-shadow:0 10px 30px rgba(0,0,0,.3);font:16px/1.4 system-ui,sans-serif}.kit-b-w{font-size:24px;font-weight:900}.kit-b-r{color:#1d4ed8;font-weight:700}.kit-b-p{font-size:13px;color:#64748b}.kit-b-m{margin-top:4px;font-weight:700}.kit-b-n{margin-top:6px;font-size:13px;color:#047857}.kit-b-f{margin-top:6px;font-size:13px;color:#6d28d9}.kit-b-rl{color:#475569}');
  api.register(function () {
    var ws = $('#workspace'); if (!ws) return;
    if (root.MutationObserver) new root.MutationObserver(function () { decorateG(); }).observe(ws, { childList: true, subtree: true });
    decorateG();
    ws.addEventListener('click', function (e) {              // pha bắt (capture): chạy trước onclick nội tuyến vốn gọi stopPropagation
      var pill = e.target && e.target.closest && e.target.closest('.c-pill');
      if (!pill || !ws.contains(pill)) return;
      var t = sayTextOf(pill); if (t) showBubble(pill, t);
    }, true);
  });

  /* =====================================================================
     H. VÒNG "NGHE MẪU → THU ÂM → PHÁT LẠI LIỀN KỀ" (chỉ khi có getUserMedia; thu tối đa 4 giây; không lưu bản ghi)
     ===================================================================== */
  function canRecord() { return !!(root.navigator && root.navigator.mediaDevices && typeof root.navigator.mediaDevices.getUserMedia === 'function' && typeof root.MediaRecorder === 'function'); }
  api.canRecord = canRecord;
  var recEl = null, recSt = { stream: null, rec: null, url: null, chunks: [], busy: false, timer: null, token: 0 };
  var SPEECH_LANG = { zh: 'zh-CN', kids: 'en-US' };
  function speechVoice(lang) {
    var s = root.speechSynthesis; if (!s || !s.getVoices) return null;
    var vs = s.getVoices() || [], i;
    for (i = 0; i < vs.length; i++) if (String(vs[i].lang).replace('_', '-').toLowerCase() === lang.toLowerCase()) return vs[i];
    for (i = 0; i < vs.length; i++) if (String(vs[i].lang).toLowerCase().indexOf(lang.slice(0, 2).toLowerCase()) === 0) return vs[i];
    return null;
  }
  function speakOnce(text, lang, rate) {                 // Promise: sprite nếu có, không thì giọng trình duyệt (có onend + dự phòng thời gian)
    var sp = playSprite(text, rate); if (sp) return sp.then(function (ok) { return ok ? true : speakBrowser(text, lang, rate); });
    return speakBrowser(text, lang, rate);
  }
  function speakBrowser(text, lang, rate) {
    return new Promise(function (resolve) {
      var s = root.speechSynthesis; if (!s || !text || typeof root.SpeechSynthesisUtterance !== 'function') { resolve(false); return; }
      var done = false, fin = function (ok) { if (!done) { done = true; resolve(ok); } };
      try { var u = new root.SpeechSynthesisUtterance(String(text)), v = speechVoice(lang); if (v) u.voice = v; u.lang = v ? v.lang : lang; u.rate = rate || 0.9; u.onend = function () { fin(true); }; u.onerror = function () { fin(false); }; s.speak(u); } catch (e) { fin(false); return; }
      setTimeout(function () { fin(true); }, Math.max(2500, String(text).length * 450) + 1500);
    });
  }
  function recCleanup() {
    recSt.token++; clearTimeout(recSt.timer);
    try { if (recSt.rec && recSt.rec.state !== 'inactive') recSt.rec.stop(); } catch (e) {}
    try { if (recSt.stream) recSt.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
    if (recSt.url) { try { root.URL.revokeObjectURL(recSt.url); } catch (e) {} }
    recSt.stream = recSt.rec = recSt.url = null; recSt.chunks = []; recSt.busy = false; api._recBlobSize = 0;
    stopSprite(); try { if (root.speechSynthesis) root.speechSynthesis.cancel(); } catch (e) {}
  }
  function closeRec() { recCleanup(); if (recEl) recEl.classList.remove('open'); }
  function openRec(text) {
    if (!canRecord()) return;
    if (!recEl) { recEl = el('div', { id: 'kitRec', class: 'kit-modal kit-top', role: 'dialog', 'aria-modal': 'true' }); doc.body.appendChild(recEl); recEl.onclick = function (e) { if (e.target === recEl) closeRec(); }; }
    recCleanup();
    var lang = SPEECH_LANG[CFG.course] || 'en-US';
    recEl.innerHTML = '<div class="kit-card"><h2>🎤 Nói theo</h2><div class="kit-rec-t">' + esc(text) + '</div>' +
      '<ol class="kit-rec-steps"><li id="kitRecS1">🔊 Nghe mẫu</li><li id="kitRecS2">🎙️ Bạn nói (tối đa 4 giây)</li><li id="kitRecS3">▶ Nghe lại: mẫu rồi đến giọng bạn</li></ol>' +
      '<div class="kit-rec-bar"><i id="kitRecBar"></i></div><div class="kit-msg" id="kitRecMsg" role="status"></div>' +
      '<p class="kit-sub" style="font-size:13px">Bản ghi chỉ nằm trong bộ nhớ trang và bị xóa khi bạn đóng cửa sổ này — không lưu, không gửi đi đâu.</p>' +
      '<div class="kit-row"><button type="button" class="go" id="kitRecGo">▶ Bắt đầu</button><button type="button" id="kitRecClose">Đóng</button></div></div>';
    recEl.classList.add('open');
    var msg = function (t, bad) { var m = $('#kitRecMsg', recEl); m.textContent = t; m.className = 'kit-msg' + (bad ? ' bad' : ''); };
    var mark = function (n) { [1, 2, 3].forEach(function (i) { var li = $('#kitRecS' + i, recEl); if (li) li.className = i < n ? 'done' : i === n ? 'now' : ''; }); };
    $('#kitRecClose', recEl).onclick = closeRec;
    $('#kitRecGo', recEl).onclick = function () {
      if (recSt.busy) return; recCleanup(); recSt.busy = true; var tok = ++recSt.token; $('#kitRecGo', recEl).textContent = '🔁 Thử lại';
      mark(1); msg('Đang phát giọng mẫu…');
      speakOnce(text, lang, 0.92).then(function () {
        if (tok !== recSt.token) return;
        return root.navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          if (tok !== recSt.token) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
          recSt.stream = stream; recSt.chunks = [];
          var rec; try { rec = new root.MediaRecorder(stream); } catch (e) { msg('Trình duyệt không thu âm được.', true); recSt.busy = false; return; }
          recSt.rec = rec; mark(2); msg('Đang thu… hãy nói theo mẫu.');
          rec.ondataavailable = function (ev) { if (ev.data && ev.data.size) recSt.chunks.push(ev.data); };
          rec.onstop = function () {
            clearTimeout(recSt.timer); try { stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
            if (tok !== recSt.token) return;
            var blob = new root.Blob(recSt.chunks, { type: rec.mimeType || 'audio/webm' }); api._recBlobSize = blob.size;
            if (!blob.size) { msg('Không thu được âm thanh. Kiểm tra micro rồi thử lại.', true); recSt.busy = false; return; }
            recSt.url = root.URL.createObjectURL(blob); mark(3); msg('Nghe lại: giọng mẫu rồi giọng của bạn.');
            speakOnce(text, lang, 0.92).then(function () { if (tok !== recSt.token) return; var a = new root.Audio(recSt.url); var fin = function () { if (tok === recSt.token) { mark(4); msg('Xong. Bấm "Thử lại" để nói lần nữa.'); recSt.busy = false; } }; a.onended = fin; a.onerror = fin; var p = a.play(); if (p && p.catch) p.catch(fin); });
          };
          rec.start();
          var t0 = Date.now(), bar = $('#kitRecBar', recEl);
          var step = function () { if (tok !== recSt.token) return; var f = Math.min(1, (Date.now() - t0) / 4000); if (bar) bar.style.width = (f * 100) + '%'; if (f < 1) root.requestAnimationFrame ? root.requestAnimationFrame(step) : setTimeout(step, 50); };
          step();
          recSt.timer = setTimeout(function () { try { if (rec.state !== 'inactive') rec.stop(); } catch (e) {} }, 4000);
        }, function (err) { recSt.busy = false; msg(err && err.name === 'NotAllowedError' ? 'Bạn chưa cho phép micro. Bấm vào biểu tượng ổ khóa cạnh địa chỉ để cho phép rồi thử lại.' : 'Không mở được micro (' + (err && err.name || 'lỗi') + ').', true); });
      });
    };
  }
  api.record = openRec; api.closeRec = closeRec; api.recState = function () { return { busy: recSt.busy, url: !!recSt.url, size: api._recBlobSize || 0 }; };
  if (root.addEventListener) root.addEventListener('pagehide', function () { recCleanup(); });
  addCSS('.kit-rec-t{font:700 22px/1.4 system-ui,sans-serif;margin:8px 0;word-break:break-word}.kit-rec-steps{margin:6px 0 10px 20px;padding:0;font-size:16px;line-height:1.7;color:#64748b}.kit-rec-steps li.now{color:#b45309;font-weight:900}.kit-rec-steps li.done{color:#15803d}' +
    '.kit-rec-bar{height:10px;border-radius:99px;background:#e2e8f0;overflow:hidden}.kit-rec-bar i{display:block;height:100%;width:0;background:#ef4444}');

  /* =====================================================================
     I. NGHE LẶP KHI DI CHUYỂN (tiếng Trung) + THỐNG KÊ TRÊN MÁY
     ===================================================================== */
  var loopEl = null, loopSt = { run: false, tok: 0, items: [], i: 0 }, LOOP_GAP = 3000;
  /* gợi ý nghĩa tiếng Việt cho câu tiếng Anh (kids: dữ liệu bài chưa có bản dịch câu): nghĩa ngắn của các từ nội dung trong câu, theo thứ tự xuất hiện */
  var SKIP_POS = { det: 1, prep: 1, conj: 1, aux: 1, art: 1, article: 1 }, SKIP_W = { am: 1, is: 1, are: 1, be: 1, was: 1, were: 1, been: 1, do: 1, does: 1, did: 1, a: 1, an: 1, the: 1, to: 1, of: 1 };
  function kidsHint(text, lessonId) {
    var out = [], seen = {};
    String(text).split(/[^A-Za-z']+/).filter(Boolean).forEach(function (t) {
      if (SKIP_W[t.toLowerCase()]) return; var w = lessonId ? ankiWordIn(t, lessonId) : ankiWord(t); if (!w || seen[w.id] || !w.vi || SKIP_POS[String(w.pos || '').split('/')[0]]) return; seen[w.id] = 1;
      out.push(String(w.vi).split(/[;,(]/)[0].trim());
    });
    return out.slice(0, 5).join(' · ');
  }
  api.kidsHint = kidsHint;
  function loopItems() {                                  // câu của bài đang học rồi các bài đã học trước đó (chỉ cấp đã nạp)
    var cur = AD.current ? AD.current() : {}, ls = allLessons(), ids = [], out = [];
    var idxOf = {}; ls.forEach(function (l, i) { idxOf[l.id] = i; });
    Object.keys(CS.state.lessons).forEach(function (id) { if (id !== cur.lessonId && seenOf(id).length) ids.push(id); });
    ids.sort(function (a, b) { return idxOf[b] - idxOf[a]; });                // gần đây trước
    if (cur.lessonId) ids.unshift(cur.lessonId);
    ids.slice(0, 12).forEach(function (id) {
      var f = findLesson(id); if (!f) return;
      var st = root.CURRICULUM_STAGES && root.CURRICULUM_STAGES[f.stage]; if (!st) return;
      var les = ((st.data[f.mod] || {}).lessons || [])[f.idx]; if (!les) return;
      (les.chunks || []).forEach(function (ch) { if (ch.full) out.push({ han: ch.full, vi: ch.vi || (CFG.course === 'kids' ? kidsHint(ch.full, id) : ''), lesson: id }); });
    });
    return out.slice(0, 60);
  }
  function pauseMs(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function runLoop() {
    if (loopSt.run) return; loopSt.run = true; var tok = ++loopSt.tok;
    var viv = speechVoice('vi-VN');
    function show(revealHan) { var it = loopSt.items[loopSt.i]; if (!loopEl || !it) return; $('#kitLoopHan', loopEl).textContent = revealHan ? it.han : '？'; $('#kitLoopVi', loopEl).textContent = it.vi; $('#kitLoopN', loopEl).textContent = (loopSt.i + 1) + '/' + loopSt.items.length; }
    (function next() {
      if (tok !== loopSt.tok || !loopSt.run) return;
      if (loopSt.i >= loopSt.items.length) loopSt.i = 0;
      var it = loopSt.items[loopSt.i]; show(false);          // thứ tự mới (đợt 2): nghĩa Việt → nghỉ 3 giây để TỰ NÓI → câu Trung × 2 (lần 2 tốc độ 0,85)
      Promise.resolve(viv && it.vi ? speakBrowser(it.vi, 'vi-VN', 0.95) : null).then(function () { return tok === loopSt.tok ? pauseMs(LOOP_GAP) : null; })
        .then(function () { if (tok === loopSt.tok) show(true); return tok === loopSt.tok ? speakOnce(it.han, SPEECH_LANG[CFG.course] || 'zh-CN', 0.92) : null; })
        .then(function () { return tok === loopSt.tok ? pauseMs(700) : null; })
        .then(function () { return tok === loopSt.tok ? speakOnce(it.han, SPEECH_LANG[CFG.course] || 'zh-CN', 0.85) : null; })
        .then(function () { return tok === loopSt.tok ? pauseMs(1500) : null; })
        .then(function () { if (tok !== loopSt.tok) return; loopSt.i++; next(); });
    })();
  }
  function stopLoop() { loopSt.run = false; loopSt.tok++; stopSprite(); try { if (root.speechSynthesis) root.speechSynthesis.cancel(); } catch (e) {} }
  function openLoop() {
    if (!loopEl) { loopEl = el('div', { id: 'kitLoop', class: 'kit-modal kit-top', role: 'dialog', 'aria-modal': 'true' }); doc.body.appendChild(loopEl); loopEl.onclick = function (e) { if (e.target === loopEl) { stopLoop(); loopEl.classList.remove('open'); } }; }
    loopSt.items = loopItems(); loopSt.i = 0; stopLoop();
    var hasVi = !!speechVoice('vi-VN');
    loopEl.innerHTML = '<div class="kit-card"><h2>🎧 ' + (CFG.course === 'kids' ? 'Nghe rảnh tay (cho bố mẹ)' : 'Nghe lặp khi di chuyển') + '</h2><p class="kit-sub">Mỗi câu: <b>nghĩa tiếng Việt</b>' + (hasVi ? '' : ' <i>(máy chưa có giọng tiếng Việt: đọc nghĩa trên màn hình)</i>') + ' → nghỉ 3 giây để <b>tự nói</b> → tiếng ' + (CFG.course === 'kids' ? 'Anh' : 'Trung') + ' <b>2 lần</b> (lần 2 chậm hơn một chút, 0,85). Giữ màn hình sáng khi nghe.</p>' +
      (loopSt.items.length ? '<div class="kit-loop-han" id="kitLoopHan" lang="zh-CN"></div><div class="kit-loop-vi" id="kitLoopVi"></div><div class="kit-sub" id="kitLoopN" style="text-align:center"></div>' : '<div class="kit-warn">Chưa có câu nào để nghe. Hãy học vài bài trước.</div>') +
      '<div class="kit-row"><button type="button" class="go" id="kitLoopPlay">' + (loopSt.items.length ? '▶ Phát' : '▶') + '</button><button type="button" id="kitLoopStop">⏹ Dừng</button><button type="button" id="kitLoopClose">Đóng</button></div></div>';
    loopEl.classList.add('open');
    $('#kitLoopPlay', loopEl).onclick = function () { if (loopSt.items.length) runLoop(); };
    $('#kitLoopStop', loopEl).onclick = stopLoop;
    $('#kitLoopClose', loopEl).onclick = function () { stopLoop(); loopEl.classList.remove('open'); };
    if (loopSt.items.length) { var it = loopSt.items[0]; $('#kitLoopHan', loopEl).textContent = '？'; $('#kitLoopVi', loopEl).textContent = it.vi; $('#kitLoopN', loopEl).textContent = '1/' + loopSt.items.length; }
  }
  api.openLoop = openLoop; api.stopLoop = stopLoop; api.loopItems = loopItems;

  /* thống kê trên máy */
  var statEl = null, statMonth = null;
  function studiedDays() {
    var set = {}; CS.days().forEach(function (d) { set[d] = 1; });
    var st = root.ANKI && root.ANKI.stats ? root.ANKI.stats() : null; if (st) st.reviewDays.forEach(function (d) { set[d] = 1; });
    return set;
  }
  function calendarHtml(y, m, set) {
    var first = new Date(y, m, 1), days = new Date(y, m + 1, 0).getDate(), lead = (first.getDay() + 6) % 7, h = '<table class="kit-cal"><thead><tr>' + ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody><tr>', n = 0, i;
    for (i = 0; i < lead; i++) { h += '<td></td>'; n++; }
    for (var d = 1; d <= days; d++) {
      if (n % 7 === 0 && n) h += '</tr><tr>';
      var key = y + '-' + ('0' + (m + 1)).slice(-2) + '-' + ('0' + d).slice(-2);
      h += '<td class="' + (set[key] ? 'on' : '') + (key === todayStr() ? ' today' : '') + '">' + d + '</td>'; n++;
    }
    while (n % 7) { h += '<td></td>'; n++; }
    return h + '</tr></tbody></table>';
  }
  function openStats() {
    if (!statEl) { statEl = el('div', { id: 'kitStats', class: 'kit-modal kit-top', role: 'dialog', 'aria-modal': 'true' }); doc.body.appendChild(statEl); statEl.onclick = function (e) { if (e.target === statEl) statEl.classList.remove('open'); }; }
    var now = new Date(); if (!statMonth) statMonth = { y: now.getFullYear(), m: now.getMonth() };
    var st = root.ANKI && root.ANKI.stats ? root.ANKI.stats() : { mastered: 0, known: 0, learned: 0, retention7: null, reviews7: 0 };
    var set = studiedDays(), done = 0; allLessons().forEach(function (l) { if (lessonState(l.id) === 'done') done++; });
    var inMonth = Object.keys(set).filter(function (k) { return k.indexOf(statMonth.y + '-' + ('0' + (statMonth.m + 1)).slice(-2)) === 0; }).length;
    var MN = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    statEl.innerHTML = '<div class="kit-card"><h2>📊 Thống kê của bạn</h2><p class="kit-sub">Tính ngay trên máy này, không gửi đi đâu.</p>' +
      '<div class="kit-stats"><div><b>' + (st.retention7 == null ? '—' : st.retention7 + '%') + '</b><span>tỉ lệ nhớ 7 ngày' + (st.reviews7 ? ' (' + st.reviews7 + ' lần ôn)' : '') + '</span></div><div><b>' + st.mastered + '</b><span>thẻ thuộc vững (nhớ ≥ 21 ngày)</span></div><div><b>' + st.known + '</b><span>thẻ đã nhớ</span></div><div><b>' + Object.keys(set).length + '</b><span>ngày đã học</span></div><div><b>' + done + '</b><span>bài đã xong</span></div></div>' +
      '<div class="kit-cal-h"><button type="button" id="kitCalPrev" aria-label="Tháng trước">◀</button><b>' + MN[statMonth.m] + ' ' + statMonth.y + '</b><button type="button" id="kitCalNext" aria-label="Tháng sau">▶</button></div>' + calendarHtml(statMonth.y, statMonth.m, set) +
      '<div class="kit-sub" style="text-align:center">' + inMonth + ' ngày học trong tháng này</div><div class="kit-row"><button type="button" id="kitStatClose">Đóng</button></div></div>';
    statEl.classList.add('open');
    $('#kitStatClose', statEl).onclick = function () { statEl.classList.remove('open'); };
    $('#kitCalPrev', statEl).onclick = function () { statMonth.m--; if (statMonth.m < 0) { statMonth.m = 11; statMonth.y--; } openStats(); };
    $('#kitCalNext', statEl).onclick = function () { statMonth.m++; if (statMonth.m > 11) { statMonth.m = 0; statMonth.y++; } openStats(); };
  }
  api.openStats = openStats;
  addCSS('.kit-loop-han{font:900 30px/1.3 system-ui,sans-serif;text-align:center;margin:10px 0 4px;word-break:break-word}.kit-loop-vi{font:600 17px/1.4 system-ui,sans-serif;text-align:center;color:#475569}' +
    '.kit-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:8px 0}.kit-stats div{background:#f1f5f9;border-radius:14px;padding:10px;text-align:center}.kit-stats b{display:block;font:900 26px system-ui,sans-serif;color:#1e3a8a}.kit-stats span{font-size:13px;color:#475569;line-height:1.3}' +
    '.kit-cal-h{display:flex;align-items:center;justify-content:space-between;margin:10px 0 4px}.kit-cal-h button{min-width:44px;min-height:44px;border-radius:12px;border:2px solid #cbd5e1;background:#fff;font-size:16px;cursor:pointer}' +
    '.kit-cal{width:100%;border-collapse:separate;border-spacing:3px;text-align:center;font:600 15px system-ui,sans-serif}.kit-cal th{color:#64748b;font-size:12px}.kit-cal td{height:34px;border-radius:8px;background:#f8fafc;color:#475569}.kit-cal td.on{background:#22c55e;color:#fff;font-weight:900}.kit-cal td.today{outline:2px solid #f59e0b}');

  /* ==== PHẦN_MỞ_RỘNG (B–J được chèn bên dưới) ==== */
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})(window);
