/* progress_store.js — MỘT kho tiến độ duy nhất cho mỗi khóa học (lõi bất biến, xem docs/core/CORE_SPEC.md).
   Một bản nguồn: docs/core/progress_store.js, chép sang zh/data/ và kids/data/ bằng docs/core/sync_core.sh.
   - Một khóa localStorage mỗi khóa học: `<khóa>_progress` = JSON {schema:1, course, created, updated, lessons, cards, log, settings, streak, position, …}.
   - Giao diện KHÔNG ghi thẳng localStorage: chỉ gọi API ở đây. Đổi schema = tăng `schema` + viết hàm chuyển đổi trong MIGRATIONS.
   - migrateLegacy(): đọc các khóa CŨ (s1_g1_stars, zh_anki_*, …_kit_prog …) vào schema v1 MỘT lần, KHÔNG xóa khóa cũ (quay lui được).
   - Xuất/nhập sao lưu = chính object này (nhập thì kiểm schema + course). Cũng nhận định dạng sao lưu cũ {app:'course-backup'}.
   Test: node docs/core/test_store.js */
(function (root, factory) {
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else {
    root.ProgressStore = api;
    var cfg = root.APP_CONFIG;
    if (cfg && cfg.course && root.localStorage !== undefined && !root.CourseStore) root.CourseStore = api.create({ course: cfg.course, win: root });
  }
})(typeof window !== 'undefined' ? window : this, function (ROOT) {
  'use strict';
  var SCHEMA = 1, LOG_MAX = 20000, FLUSH_MS = 250, PHASES = 6;
  var DAY_KEYS = /^\d{4}-\d{2}-\d{2}$/;

  /* khóa localStorage cũ theo khóa học (chỉ ĐỌC khi chuyển đổi) */
  function legacyKeys(course) {
    var P = course + '_';
    return {
      stars: course === 'kids' ? 's1_g1_stars' : P + 'stars', leitner: course === 'kids' ? 's1_g1_leitner' : P + 'leitner',
      showPy: P + 'showPy', showHv: P + 'showHv', displayMode: P + 'displayMode',
      ankiCards: P + 'anki_cards', ankiCursor: P + 'anki_cursor', ankiOpened: P + 'anki_opened', ankiDaily: P + 'anki_daily', ankiLimit: P + 'anki_newlimit',
      ankiTypes: P + 'anki_types', ankiRate: P + 'anki_rate', ankiLog: P + 'anki_log', ankiLooked: P + 'anki_looked',
      kitProg: P + 'kit_prog', kitTut: P + 'kit_tut', embedSkip: 'kit_embed_skip_' + P,
      s0Progress: 'zh_s0_progress', s0Leitner: 'zh_s0_leitner', s0Stars: 'zh_s0_stars', s0Rate: 'zh_s0_rate'
    };
  }
  function isObj(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }
  function clone(x) { return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); }
  function tryJson(s) { if (s === null || s === undefined) return undefined; try { return JSON.parse(s); } catch (e) { return undefined; } }
  function iso(ms) { return new Date(ms).toISOString(); }
  function uniq(a) { var s = {}, o = []; (a || []).forEach(function (x) { if (!s[x]) { s[x] = 1; o.push(x); } }); return o; }

  function emptyState(course, now) {
    return { schema: SCHEMA, course: course, created: iso(now), updated: iso(now), lessons: {}, cards: {}, log: [], settings: {}, streak: { days: [] }, position: null, session: null,
             ankiOpened: [], looked: {}, stars: 0, leitner: [], stage0: { progress: {}, leitner: [], stars: 0, rate: 0.7 } };
  }

  /* ---- chuyển đổi các khóa cũ (hàm thuần: nhận map khóa→chuỗi, trả {state, from:[khóa đã đọc]}) ---- */
  function migrateLegacy(course, get, now) {
    var K = legacyKeys(course), st = emptyState(course, now), from = [];
    function read(k) { var v = get(k); if (v !== null && v !== undefined) from.push(k); return v; }
    var v;
    if ((v = read(K.stars)) !== null && v !== undefined) st.stars = Number(v) || 0;
    if ((v = tryJson(read(K.leitner))) && Array.isArray(v)) st.leitner = v;
    ['showPy', 'showHv'].forEach(function (f) { var x = read(K[f]); if (x !== null && x !== undefined) st.settings[f] = x !== '0'; });
    if ((v = read(K.displayMode)) !== null && v !== undefined) st.settings.displayMode = String(v);
    var cards = tryJson(read(K.ankiCards));
    if (isObj(cards)) Object.keys(cards).forEach(function (k) { var c = cards[k]; if (isObj(c)) { var i = k.indexOf('#'); st.cards[k] = Object.assign({ type: i < 0 ? 'A' : k.slice(i + 1) }, c); } });
    var anki = {};
    if ((v = read(K.ankiCursor)) !== null && v !== undefined) anki.cursor = String(v);
    if ((v = read(K.ankiLimit)) !== null && v !== undefined && isFinite(parseInt(v, 10))) anki.limit = parseInt(v, 10);
    if ((v = tryJson(read(K.ankiTypes))) && Array.isArray(v)) anki.types = v;
    if ((v = read(K.ankiRate)) !== null && v !== undefined) anki.rate = String(v);
    if ((v = tryJson(read(K.ankiDaily))) && isObj(v)) anki.daily = v;
    if (Object.keys(anki).length) st.settings.anki = anki;
    if ((v = tryJson(read(K.ankiOpened))) && Array.isArray(v)) st.ankiOpened = v;
    if ((v = tryJson(read(K.ankiLooked))) && isObj(v)) st.looked = v;
    if ((v = tryJson(read(K.ankiLog))) && Array.isArray(v)) st.log = v.filter(function (r) { return Array.isArray(r) && r.length >= 2; }).map(function (r) { return { t: Number(r[0]) || 0, item: '', ok: r[1] ? 1 : 0, ms: null, kind: 'anki' }; });
    if ((v = tryJson(read(K.kitProg))) && isObj(v)) {
      var done = isObj(v.done) ? v.done : {}, seen = isObj(v.seen) ? v.seen : {}, tips = isObj(v.tips) ? v.tips : {}, ids = uniq(Object.keys(done).concat(Object.keys(seen), Object.keys(tips)));
      ids.forEach(function (id) {
        var d = Array.isArray(done[id]) ? done[id] : [], s = Array.isArray(seen[id]) ? seen[id] : [];
        st.lessons[id] = { status: d.length >= PHASES ? 'done' : 'doing', step: null, done: d, seen: s, tipSeen: !!tips[id] };
      });
      if (isObj(v.last) && v.last.lessonId) { st.position = v.last; if (st.lessons[v.last.lessonId]) st.lessons[v.last.lessonId].step = v.last.phase || null; }
      if (Array.isArray(v.days)) st.streak.days = uniq(v.days.filter(function (d) { return DAY_KEYS.test(d); })).sort();
    }
    if ((v = read(K.kitTut)) !== null && v !== undefined) st.settings.tutDone = v === '1';
    if ((v = read(K.embedSkip)) !== null && v !== undefined) st.settings.embedSkip = v === '1';
    if (course === 'zh') {
      var s0 = {};
      if ((v = tryJson(read(K.s0Progress))) && isObj(v)) s0.progress = v;
      if ((v = tryJson(read(K.s0Leitner))) && Array.isArray(v)) s0.leitner = v;
      if ((v = read(K.s0Stars)) !== null && v !== undefined) s0.stars = parseInt(v, 10) || 0;
      if ((v = read(K.s0Rate)) !== null && v !== undefined && isFinite(parseFloat(v))) s0.rate = parseFloat(v);
      st.stage0 = Object.assign(st.stage0, s0);
    }
    return { state: st, from: from };
  }

  /* ---- kiểm định dạng ---- */
  function validate(o, course) {
    if (!isObj(o)) return 'Không phải kho tiến độ hợp lệ (không phải đối tượng).';
    if (o.schema !== SCHEMA) return 'Sai phiên bản schema (cần ' + SCHEMA + ', nhận ' + o.schema + ').';
    if (course && o.course !== course) return 'Sao lưu này thuộc khóa "' + o.course + '", không dùng cho khóa "' + course + '".';
    if (!isObj(o.lessons)) return 'Thiếu mục lessons.';
    if (!isObj(o.cards)) return 'Thiếu mục cards.';
    if (!Array.isArray(o.log)) return 'Thiếu mục log.';
    if (!isObj(o.settings)) return 'Thiếu mục settings.';
    if (!isObj(o.streak) || !Array.isArray(o.streak.days)) return 'Thiếu mục streak.days.';
    var ks = Object.keys(o.cards), i;
    if (ks.length > 60000) return 'Quá nhiều thẻ.';
    for (i = 0; i < ks.length; i++) {
      var c = o.cards[ks[i]];
      if (!isObj(c) || typeof c.interval !== 'number' || typeof c.ease !== 'number' || typeof c.due !== 'number' || typeof c.reps !== 'number' || typeof c.lapses !== 'number') return 'Thẻ "' + ks[i] + '" hỏng.';
    }
    ks = Object.keys(o.lessons);
    for (i = 0; i < ks.length; i++) { var l = o.lessons[ks[i]]; if (!isObj(l) || (l.done !== undefined && !Array.isArray(l.done)) || (l.seen !== undefined && !Array.isArray(l.seen))) return 'Bài "' + ks[i] + '" hỏng.'; }
    for (i = 0; i < Math.min(o.log.length, 200000); i++) { var g = o.log[i]; if (!isObj(g) || typeof g.t !== 'number') return 'Nhật ký hỏng ở mục ' + i + '.'; }
    if (o.log.length > 200000) return 'Nhật ký quá dài.';
    if (o.position !== null && o.position !== undefined && !isObj(o.position)) return 'position hỏng.';
    if (o.session !== null && o.session !== undefined && !isObj(o.session)) return 'session hỏng.';
    return '';
  }

  /* ---- gộp hai kho (nhập sao lưu / hai tab) ---- */
  function mergeLeitner(a, b, preferB) {
    var out = [], idx = {};
    (a || []).concat(b || []).forEach(function (x) {
      if (!isObj(x)) return;
      var k = x.id; if (k === undefined) { out.push(x); return; }
      if (idx[k] === undefined) { idx[k] = out.length; out.push(x); }
      else { var cur = out[idx[k]]; if ((x.box || 0) > (cur.box || 0) || ((x.box || 0) === (cur.box || 0) && preferB)) out[idx[k]] = x; }
    });
    return out;
  }
  function deepMerge(a, b, preferB) {
    if (!isObj(a)) return preferB ? clone(b) : a === undefined ? clone(b) : a;
    var o = clone(a);
    Object.keys(b || {}).forEach(function (k) {
      if (isObj(o[k]) && isObj(b[k])) o[k] = deepMerge(o[k], b[k], preferB);
      else if (o[k] === undefined || preferB) o[k] = clone(b[k]);
    });
    return o;
  }
  function merge(a, b, preferB) {
    var o = clone(a), k;
    o.created = a.created < b.created ? a.created : b.created; o.updated = a.updated > b.updated ? a.updated : b.updated;
    Object.keys(b.lessons).forEach(function (id) {
      var x = o.lessons[id], y = b.lessons[id];
      if (!x) { o.lessons[id] = clone(y); return; }
      x.done = uniq((x.done || []).concat(y.done || [])); x.seen = uniq((x.seen || []).concat(y.seen || []));
      x.tipSeen = !!(x.tipSeen || y.tipSeen);
      if (x.status !== 'done' && y.status === 'done') x.status = 'done';
      if (y.step && (!x.step || preferB)) x.step = y.step;
      if (y.stars !== undefined) x.stars = Math.max(x.stars || 0, y.stars);
    });
    Object.keys(b.cards).forEach(function (key) {
      var x = o.cards[key], y = b.cards[key];
      if (!x || (y.reps + y.lapses) > (x.reps + x.lapses)) o.cards[key] = clone(y);
    });
    var seen = {}, log = [];
    o.log.concat(b.log).forEach(function (e) { var s = e.t + '|' + e.item + '|' + e.kind; if (!seen[s]) { seen[s] = 1; log.push(e); } });
    log.sort(function (p, q) { return p.t - q.t; }); o.log = log.length > LOG_MAX ? log.slice(-LOG_MAX) : log;
    o.settings = deepMerge(o.settings, b.settings, preferB);
    o.streak = { days: uniq((o.streak.days || []).concat(b.streak.days || [])).sort() };
    if (b.session && !o.session) o.session = clone(b.session);
    if (b.position && (!o.position || (b.position.ts || 0) > (o.position.ts || 0))) o.position = clone(b.position);
    o.ankiOpened = uniq((o.ankiOpened || []).concat(b.ankiOpened || []));
    o.looked = o.looked || {}; Object.keys(b.looked || {}).forEach(function (id) { o.looked[id] = Math.max(o.looked[id] || 0, b.looked[id]); });
    o.stars = Math.max(o.stars || 0, b.stars || 0);
    o.leitner = mergeLeitner(o.leitner, b.leitner, preferB);
    var s0a = o.stage0 || emptyState(a.course, 0).stage0, s0b = b.stage0 || {};
    o.stage0 = { progress: deepMerge(s0a.progress || {}, s0b.progress || {}, preferB), leitner: mergeLeitner(s0a.leitner, s0b.leitner, preferB), stars: Math.max(s0a.stars || 0, s0b.stars || 0), rate: preferB && s0b.rate ? s0b.rate : s0a.rate };
    return o;
  }
  /* tương thích: tệp sao lưu cũ của phần F ({app:'course-backup', data:{khóa localStorage cũ: chuỗi}}) → kho v1 */
  function fromLegacyBackup(o, course, now) {
    if (!isObj(o) || o.app !== 'course-backup' || o.version !== 1) return { error: 'Không phải sao lưu cũ hợp lệ.' };
    if (o.course !== course) return { error: 'Sao lưu này thuộc khóa "' + o.course + '", không dùng cho khóa "' + course + '".' };
    if (!isObj(o.data)) return { error: 'Thiếu phần dữ liệu.' };
    var bad = Object.keys(o.data).filter(function (k) { return typeof o.data[k] !== 'string'; })[0];
    if (bad) return { error: 'Giá trị của "' + bad + '" không đúng định dạng.' };
    var r = migrateLegacy(course, function (k) { return k in o.data ? o.data[k] : null; }, now);
    return { state: r.state };
  }

  /* thay nội dung mà GIỮ NGUYÊN tham chiếu đối tượng/mảng (engine, trang giữ tham chiếu tới state.cards…) */
  function setInPlace(t, src) {
    if (Array.isArray(t) && Array.isArray(src)) { t.length = 0; Array.prototype.push.apply(t, clone(src)); return t; }
    if (isObj(t) && isObj(src)) {
      Object.keys(t).forEach(function (k) { if (!(k in src)) delete t[k]; });
      Object.keys(src).forEach(function (k) {
        if ((isObj(t[k]) && isObj(src[k])) || (Array.isArray(t[k]) && Array.isArray(src[k]))) setInPlace(t[k], src[k]); else t[k] = clone(src[k]);
      });
    }
    return t;
  }

  function memStorage() {
    var m = {};
    return { getItem: function (k) { return k in m ? m[k] : null; }, setItem: function (k, v) { m[k] = String(v); }, removeItem: function (k) { delete m[k]; }, key: function (i) { return Object.keys(m)[i] || null; }, get length() { return Object.keys(m).length; } };
  }

  function create(opts) {
    opts = opts || {};
    var course = opts.course, win = opts.win || null;
    if (!course) throw new Error('create(): thiếu course');
    var now = opts.now || function () { return Date.now(); };
    var storage = opts.storage;
    if (!storage) { try { storage = win && win.localStorage; storage.getItem('__t'); } catch (e) { storage = memStorage(); } }
    var KEY = course + '_progress', state = null, timer = null, dirty = false, persisted = true, listeners = [];

    function read() { try { return storage.getItem(KEY); } catch (e) { return null; } }
    function write() {
      dirty = false;
      state.updated = iso(now());
      try { storage.setItem(KEY, JSON.stringify(state)); persisted = true; } catch (e) { persisted = false; }
    }
    function load() {
      var raw = read(), o = raw ? tryJson(raw) : undefined;
      if (o && !validate(o, course)) { state = o; ensure(); return 'loaded'; }
      if (raw && !o || (o && validate(o, course))) {                                  // có khóa nhưng hỏng: giữ bản hỏng ở khóa phụ, không mất dữ liệu
        try { storage.setItem(KEY + '_corrupt', raw); } catch (e) {}
      }
      var r = migrateLegacy(course, function (k) { try { return storage.getItem(k); } catch (e) { return null; } }, now());
      state = r.state; ensure();
      if (r.from.length) state.migrated = { from: r.from, at: iso(now()) };
      write();                                                                         // khóa cũ vẫn còn nguyên
      return r.from.length ? 'migrated' : 'created';
    }
    function ensure() {                                                               // bổ sung trường còn thiếu (kho cũ hơn một chút) mà không đổi schema
      var d = emptyState(course, now());
      Object.keys(d).forEach(function (k) { if (state[k] === undefined || (state[k] === null && k !== 'position' && k !== 'session')) state[k] = d[k]; });
      if (!isObj(state.stage0)) state.stage0 = d.stage0;
    }
    function changed() { dirty = true; listeners.forEach(function (f) { try { f(); } catch (e) {} }); schedule(); }
    function schedule() {
      if (timer || !win || !win.setTimeout) { if (!win) write(); return; }
      timer = win.setTimeout(function () { timer = null; if (dirty) write(); }, FLUSH_MS);
    }
    function flush() { if (timer && win) { win.clearTimeout(timer); timer = null; } if (dirty) write(); }

    var S = {
      KEY: KEY, course: course, SCHEMA: SCHEMA, PHASES: PHASES,
      get state() { return state; },
      load: load, flush: flush, validate: function (o) { return validate(o, course); },
      persisted: function () { return persisted; },
      onChange: function (f) { listeners.push(f); },
      /* cài đặt: đường dẫn chấm, ví dụ 'anki.limit' */
      setting: function (path, d) { var p = String(path).split('.'), o = state.settings; for (var i = 0; i < p.length; i++) { if (!isObj(o) || o[p[i]] === undefined) return d; o = o[p[i]]; } return o; },
      setSetting: function (path, v) { var p = String(path).split('.'), o = state.settings; for (var i = 0; i < p.length - 1; i++) { if (!isObj(o[p[i]])) o[p[i]] = {}; o = o[p[i]]; } o[p[p.length - 1]] = v; changed(); },
      /* điểm sao + hộp Leitner cũ (giữ nguyên cấu trúc cho tới khi C2 chuyển sang kho chung) */
      getStars: function () { return state.stars || 0; }, setStars: function (n) { state.stars = Number(n) || 0; changed(); },
      getLeitner: function () { return state.leitner; }, setLeitner: function (arr) { state.leitner = Array.isArray(arr) ? arr : []; changed(); },
      stage0: function () { return state.stage0; }, setStage0: function (patch) { Object.assign(state.stage0, patch); changed(); },
      /* bài học */
      lesson: function (id) { return state.lessons[id] || null; },
      ensureLesson: function (id) { if (!state.lessons[id]) state.lessons[id] = { status: 'new', step: null, done: [], seen: [], tipSeen: false }; return state.lessons[id]; },
      addPhase: function (id, which, ph) { var l = S.ensureLesson(id), a = l[which] = l[which] || []; if (a.indexOf(ph) < 0) { a.push(ph); if (which === 'done' && a.length >= PHASES) l.status = 'done'; else if (l.status === 'new') l.status = 'doing'; changed(); } },
      markSeen: function (id, ph) { S.addPhase(id, 'seen', ph); },
      setLessonField: function (id, field, v) { S.ensureLesson(id)[field] = v; changed(); },
      lessonStatus: function (id) { var l = state.lessons[id]; if (!l) return 'new'; if (l.status === 'done') return 'done'; return (l.done && l.done.length) || (l.seen && l.seen.length) ? 'doing' : 'new'; },
      /* chuỗi ngày học + vị trí */
      days: function () { return state.streak.days; },
      touchDay: function (d) { if (state.streak.days.indexOf(d) < 0) { state.streak.days.push(d); state.streak.days.sort(); if (state.streak.days.length > 1500) state.streak.days = state.streak.days.slice(-1500); changed(); } },
      position: function () { return state.position; }, setPosition: function (p) { state.position = p; changed(); },
      /* phiên "Học hôm nay" đang dở (JSON thuần của session_engine) — thoát ra vào lại đúng bước */
      session: function () { return state.session; }, setSession: function (x) { state.session = x || null; changed(); },
      /* thẻ ôn (Anki + chặng) */
      cards: function () { return state.cards; },
      setCard: function (key, card) { state.cards[key] = card; changed(); },
      replaceCards: function (obj) { state.cards = obj; changed(); },
      ankiOpened: function () { return state.ankiOpened; }, setAnkiOpened: function (a) { state.ankiOpened = a; changed(); },
      looked: function () { return state.looked; }, markLooked: function (id, t) { state.looked[id] = t === undefined ? now() : t; var ks = Object.keys(state.looked); if (ks.length > 300) ks.sort(function (a, b) { return state.looked[a] - state.looked[b]; }).slice(0, ks.length - 300).forEach(function (k) { delete state.looked[k]; }); changed(); },
      /* nhật ký lượt làm: chỉ GHI THÊM */
      addLog: function (e) { state.log.push({ t: e.t === undefined ? now() : e.t, item: e.item || '', ok: e.ok ? 1 : 0, ms: e.ms === undefined ? null : e.ms, kind: e.kind || '' }); if (state.log.length > LOG_MAX) state.log = state.log.slice(-LOG_MAX); changed(); },
      logs: function () { return state.log; },
      /* sao lưu = chính kho */
      export: function () { flush(); return clone(state); },
      import: function (o, mode) {
        var inc;
        if (isObj(o) && o.app === 'course-backup') { var lb = fromLegacyBackup(o, course, now()); if (lb.error) return { ok: false, msg: lb.error }; inc = lb.state; }
        else { var err = validate(o, course); if (err) return { ok: false, msg: err }; inc = clone(o); }
        var e2 = validate(inc, course); if (e2) return { ok: false, msg: e2 };
        var next = mode === 'replace' ? Object.assign(emptyState(course, now()), inc) : merge(state, inc, true);
        setInPlace(state, next); ensure(); changed(); flush();
        return { ok: true, msg: 'Đã nhập kho tiến độ (' + Object.keys(state.cards).length + ' thẻ, ' + Object.keys(state.lessons).length + ' bài, ' + state.log.length + ' lượt làm).' };
      },
      reloadFromStorage: function () { var raw = read(), o = raw ? tryJson(raw) : undefined; if (!o || validate(o, course)) return false; flush(); setInPlace(state, merge(state, o, true)); ensure(); listeners.forEach(function (f) { try { f(); } catch (e) {} }); return true; }
    };
    load();
    if (win && win.addEventListener) {
      win.addEventListener('pagehide', flush);
      win.addEventListener('visibilitychange', function () { if (win.document && win.document.visibilityState === 'hidden') flush(); });
      win.addEventListener('storage', function (e) { if (e.key === KEY) S.reloadFromStorage(); });       // tab khác (vd. pinyin.html) vừa ghi
    }
    return S;
  }

  return { SCHEMA: SCHEMA, LOG_MAX: LOG_MAX, PHASES: PHASES, create: create, validate: validate, merge: merge, migrateLegacy: migrateLegacy, fromLegacyBackup: fromLegacyBackup, legacyKeys: legacyKeys, emptyState: emptyState, memStorage: memStorage };
});
