/* session_engine.js — bộ điều phối "Học hôm nay" dạng HÀM THUẦN (không DOM, không localStorage, không đồng hồ ẩn).
   Một bản nguồn: docs/core/session_engine.js, chép sang zh/data/ và kids/data/ bằng docs/core/sync_core.sh. Test: node docs/core/test_session.js
   Quy tắc (TASK_BATCH1_ADDENDUM.md, Spec 02/04):
   - Chặng ≤ 12 bước: (1) thẻ mẹo nếu là đầu bài mới; (2–5) TỐI ĐA 4 thẻ ôn đến hạn (interval thấp nhất trước, không bao giờ hiện tổng nợ); (6–12) 7 bước bài mới.
   - Một bài mới được chia thành nhiều chặng (mỗi chặng 7 bước bài mới) theo kế hoạch cố định `lessonPlan`.
   - Làm SAI lần đầu: ghi SM-2 MỘT lần (grade 1) và đưa bước xuống cuối hàng đợi của chặng; các lần sau của bước đó không ghi SM-2 nữa.
   - Chuỗi ngày "dễ tha thứ": trong bất kỳ 7 ngày nào được nghỉ tối đa 2 ngày mà không mất chuỗi. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.SessionEngine = api;
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';
  var DAY = 86400000;
  var LIMITS = { reviews: 4, newSteps: 7, quick: 5, parentSegments: 6, maxMissedIn7: 2 };

  /* ---------- ngày & chuỗi ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { d = d instanceof Date ? d : new Date(d); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function dayNum(s) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s); return m ? Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY) : NaN; }
  /* chuỗi hiện tại (đi ngược từ hôm nay) với luật nghỉ ≤ 2 ngày trong mọi cửa sổ 7 ngày; tổng số ngày đã học */
  function computeStreak(days, today) {
    var set = {}, nums = [];
    (days || []).forEach(function (d) { var n = dayNum(d); if (isFinite(n) && !set[n]) { set[n] = 1; nums.push(n); } });
    var res = { current: 0, total: nums.length, alive: false, studiedToday: false };
    if (!nums.length) return res;
    nums.sort(function (a, b) { return b - a; });
    var t = dayNum(today), last = nums[0];
    res.studiedToday = !!set[t];
    if (t - last > LIMITS.maxMissedIn7 + 1) return res;                 // đã nghỉ quá 2 ngày kể từ ngày học gần nhất: chuỗi đã đứt
    if (t < last) t = last;
    var misses = [], count = 0, oldest = nums[nums.length - 1];
    for (var off = 0; last - off >= oldest; off++) {
      if (set[last - off]) { count++; continue; }
      misses.push(off);
      var inWin = misses.filter(function (m) { return m > off - 7; }).length;
      if (inWin > LIMITS.maxMissedIn7) break;
    }
    res.current = count; res.alive = count > 0;
    return res;
  }

  /* ---------- số từ đã thuộc (từ có thẻ ở trạng thái ôn tập) ---------- */
  function learnedWords(cards) {
    var seen = {}, n = 0;
    Object.keys(cards || {}).forEach(function (k) {
      var c = cards[k]; if (!c || c.status !== 'review') return;
      var id = k.indexOf('#') < 0 ? k : k.slice(0, k.indexOf('#'));
      if (k.indexOf('lt:') === 0 || seen[id]) return; seen[id] = 1; n++;
    });
    return n;
  }

  /* ---------- kế hoạch bước bài mới của một bài (cố định theo dữ liệu bài) ---------- */
  function lessonPlan(nChunks, nQa, opts) {
    var plan = [], i;
    for (i = 0; i < nChunks; i++) { plan.push({ t: 'listen', ci: i }); plan.push({ t: 'build', ci: i }); }
    for (i = 0; i < nQa; i++) plan.push({ t: 'qa', qi: i });
    for (i = 0; i < nChunks; i++) plan.push({ t: 'type', ci: i });
    var sp = Math.min(3, nChunks); for (i = 0; i < sp; i++) plan.push({ t: 'speak', ci: i * Math.max(1, Math.floor(nChunks / sp)) });
    return plan;
  }
  function segmentCount(planLen) { return Math.max(1, Math.ceil(planLen / LIMITS.newSteps)); }

  /* ---------- chọn thẻ ôn ---------- */
  function dueCards(cards, now) {
    var out = [];
    Object.keys(cards || {}).forEach(function (k) { var c = cards[k]; if (c && c.status !== 'new' && c.due <= now) out.push({ key: k, interval: c.interval || 0, due: c.due }); });
    out.sort(function (a, b) { return a.interval - b.interval || a.due - b.due || (a.key < b.key ? -1 : 1); });
    return out;
  }
  function pickReviews(cards, now, max) { return dueCards(cards, now).slice(0, max === undefined ? LIMITS.reviews : max).map(function (x) { return x.key; }); }
  /* 90 giây: đúng 5 thẻ ĐÃ TỪNG LÀM ĐÚNG (reps ≥ 1), xáo theo rnd (0..1) */
  function pickQuick(cards, rnd, n) {
    n = n === undefined ? LIMITS.quick : n;
    var ks = Object.keys(cards || {}).filter(function (k) { var c = cards[k]; return c && c.reps >= 1; }).sort();
    for (var i = ks.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = ks[i]; ks[i] = ks[j]; ks[j] = t; }
    return ks.slice(0, n);
  }

  /* ---------- dựng một chặng ---------- */
  /* opts: {lessonId, plan, newDone, tipNeeded, hasTip, dueKeys, replay}; trả {steps, seg, segs, newFrom, newTo} */
  function buildSegment(o) {
    var segs = segmentCount(o.plan.length), newDone = o.replay ? 0 : (o.newDone || 0);
    var seg = Math.min(segs, Math.floor(newDone / LIMITS.newSteps) + 1), from = (seg - 1) * LIMITS.newSteps, to = Math.min(o.plan.length, from + LIMITS.newSteps);
    var steps = [];
    if (o.tipNeeded && o.hasTip && seg === 1) steps.push({ kind: 'tip' });
    (o.dueKeys || []).slice(0, LIMITS.reviews).forEach(function (k) { steps.push({ kind: 'review', key: k }); });
    for (var i = from; i < to; i++) steps.push(Object.assign({}, o.plan[i], { kind: 'new', pi: i }));
    return { steps: steps, seg: seg, segs: segs, newFrom: from, newTo: to };
  }
  function buildQuick(keys) { return { steps: keys.map(function (k) { return { kind: 'review', key: k }; }), seg: 1, segs: 1, newFrom: 0, newTo: 0 }; }

  /* ---------- trạng thái phiên (JSON thuần) ---------- */
  function newSession(o) {
    return { v: 1, mode: o.mode, lessonId: o.lessonId || null, seg: o.seg || 1, segs: o.segs || 1, steps: o.steps, pos: 0, queue: o.steps.map(function (_, i) { return i; }),
      attempts: 0, firstTry: 0, firstOk: 0, results: {}, startedAt: o.now, newFrom: o.newFrom || 0, newTo: o.newTo || 0, parent: o.parent ? { n: o.parentN || 1, of: LIMITS.parentSegments } : null, replay: !!o.replay };
  }
  function current(s) { return s.pos < s.queue.length ? { idx: s.queue[s.pos], step: s.steps[s.queue[s.pos]], retry: !!s.results[s.queue[s.pos]] } : null; }
  /* ghi kết quả một lần trả lời. Trả {session, firstTry, srs: {key, ok}|null}. Sai → bước xuống cuối hàng; đúng → sang bước kế. */
  function answer(s, ok, info) {
    var n = JSON.parse(JSON.stringify(s)), c = current(n); if (!c) return { session: n, firstTry: false, srs: null };
    var first = !n.results[c.idx]; n.attempts++;
    var srs = null;
    if (first) { n.firstTry++; if (ok) n.firstOk++; n.results[c.idx] = { ok: !!ok, ms: info && info.ms !== undefined ? info.ms : null }; if (c.step.kind === 'review') srs = { key: c.step.key, ok: !!ok, ms: n.results[c.idx].ms }; }
    if (ok) n.pos++;
    else { n.queue.push(n.queue.splice(n.pos, 1)[0]); }          // xuống cuối hàng đợi của chính chặng
    return { session: n, firstTry: first, srs: srs };
  }
  function finished(s) { return s.pos >= s.queue.length; }
  function progress(s) { return { done: s.pos, total: s.queue.length, ofBase: s.steps.length }; }
  function accuracy(s) { return s.firstTry ? Math.round(100 * s.firstOk / s.firstTry) : 100; }

  /* thẻ mới đăng ký khi xong một chặng có chứa từ đó (interval 1 ngày) */
  function newCardFor(type, now) { return { type: type || 'A', status: 'review', interval: 1, ease: 2.5, due: now + DAY, reps: 1, lapses: 0 }; }
  /* từ của bài xuất hiện trong các câu đã luyện: wordForms = [{id, forms:[...]}], sentences = [chuỗi] */
  function wordsInSentences(wordForms, sentences, caseInsensitive) {
    var hay = sentences.map(function (s) { return caseInsensitive ? String(s).toLowerCase() : String(s); }).join('\n'), out = [];
    wordForms.forEach(function (w) { if ((w.forms || []).some(function (f) { f = caseInsensitive ? String(f).toLowerCase() : String(f); return f && (caseInsensitive ? new RegExp('(^|[^a-z])' + f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[^a-z])').test(hay) : hay.indexOf(f) >= 0); })) out.push(w.id); });
    return out;
  }
  /* Leitner cũ → thẻ chung: box 1 đến hạn ngay, box 2 mai, box 3 sau 6 ngày (mỗi mục mang theo câu hỏi tự chứa `q`) */
  function leitnerToCard(entry, now) {
    var box = entry.box || 1, iv = box >= 3 ? 6 : box === 2 ? 1 : 0;
    return { type: 'L', status: box === 1 ? 'learning' : 'review', interval: iv, ease: 2.5, due: box === 1 ? now : now + iv * DAY, reps: box >= 2 ? 1 : 0, lapses: box === 1 ? 1 : 0,
      q: { prompt: entry.prompt || '', scene: entry.scene || '', word: entry.word || '', answer: entry.answer || '', options: (entry.options || []).map(function (o) { return { txt: o.txt, py: o.py, ico: o.ico }; }) } };
  }

  return { version: 1, LIMITS: LIMITS, DAY: DAY, ymd: ymd, dayNum: dayNum, computeStreak: computeStreak, learnedWords: learnedWords, lessonPlan: lessonPlan, segmentCount: segmentCount,
    dueCards: dueCards, pickReviews: pickReviews, pickQuick: pickQuick, buildSegment: buildSegment, buildQuick: buildQuick, newSession: newSession, current: current, answer: answer,
    finished: finished, progress: progress, accuracy: accuracy, newCardFor: newCardFor, wordsInSentences: wordsInSentences, leitnerToCard: leitnerToCard };
});
