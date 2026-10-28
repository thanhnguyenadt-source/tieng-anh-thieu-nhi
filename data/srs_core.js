/* srs_core.js — thuật toán ôn tập SM-2 dạng HÀM THUẦN (lõi bất biến, xem docs/core/CORE_SPEC.md).
   Một bản nguồn: docs/core/srs_core.js, chép sang zh/data/ và kids/data/ bằng docs/core/sync_core.sh. Không đọc/ghi localStorage, không DOM, không đồng hồ ẩn.
   Dùng chung cho màn Anki ("Kho từ") và chặng "Học hôm nay" sau này. Test: node docs/core/test_srs.js */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.SRS = api;
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';
  var DAY = 86400000, MIN5 = 300000;

  /* Ngưỡng thời gian chấm "nhanh/chậm" (mili giây), chỉnh ở MỘT chỗ này. Đồng hồ chỉ bắt đầu SAU KHI âm thanh đọc xong (do giao diện đo).
     ms ≤ fast × hệ số → Dễ (4); ms ≤ slow × hệ số → Tốt (3); chậm hơn → Khó (2); sai → Lại (1). */
  var SRS_TIMING = {
    fast: 3500, slow: 8000,
    kindFactor: { choose: 1, match: 1, listen: 1, type: 2, speak: 2 },     // gõ chữ/nói gấp đôi thời gian so với chọn/ghép
    youngFactor: 1.5                                                         // trẻ nhỏ (kids giai đoạn 1–3) nhân thêm 1,5
  };

  function newCard(type) { return { type: type || 'A', status: 'new', interval: 0, ease: 2.5, due: 0, reps: 0, lapses: 0 }; }
  function round2(x) { return Math.round(x * 100) / 100; }

  /* SM-2 rút gọn: card, grade 1..4 (Lại/Khó/Tốt/Dễ), now (ms). Trả thẻ MỚI, không sửa thẻ gốc. */
  function sm2(card, grade, now) {
    var c = {}, k, base = newCard();
    if (card) for (k in card) c[k] = card[k];                    // giữ nguyên trường khác (vd. q của thẻ Leitner đã chuyển)
    for (k in base) if (c[k] === undefined) c[k] = base[k];
    if (card && card.type) c.type = card.type;
    now = now === undefined ? Date.now() : now;
    var iv = c.interval, ease = c.ease;
    if (grade === 1) { c.interval = 0; c.ease = round2(Math.max(1.3, ease - 0.2)); c.due = now + MIN5; c.status = 'learning'; c.reps = 0; c.lapses += 1; }
    else if (grade === 2) { c.interval = Math.max(1, Math.round(iv * 1.2)); c.ease = round2(Math.max(1.3, ease - 0.15)); c.due = now + c.interval * DAY; c.status = 'review'; c.reps += 1; }
    else if (grade === 3) { c.interval = iv === 0 ? 1 : (iv === 1 ? 3 : Math.round(iv * ease)); c.due = now + c.interval * DAY; c.status = 'review'; c.reps += 1; }
    else if (grade === 4) { c.interval = iv === 0 ? 4 : Math.round(iv * ease * 1.3); c.ease = round2(ease + 0.15); c.due = now + c.interval * DAY; c.status = 'review'; c.reps += 1; }
    else throw new Error('grade phải là 1..4');
    return c;
  }
  function intervalLabel(card, grade) { var c = sm2(card, grade, 0); return c.interval === 0 ? '5 phút' : c.interval + ' ngày'; }

  /* Đổi kết quả làm bài (đúng/sai + thời gian) thành điểm 1..4. opts: {ok, ms, kind, young} */
  function gradeOf(opts) {
    if (!opts || !opts.ok) return 1;
    var T = SRS_TIMING, f = (T.kindFactor[opts.kind] || 1) * (opts.young ? T.youngFactor : 1), ms = Number(opts.ms);
    if (!(ms >= 0)) return 3;                                   // không đo được thời gian: coi như Tốt
    if (ms <= T.fast * f) return 4;
    if (ms <= T.slow * f) return 3;
    return 2;
  }
  /* Hàm chấm của lõi: grade(card, {ok, ms, kind, young}, now) → thẻ mới */
  function grade(card, opts, now) { return sm2(card, gradeOf(opts), now); }

  /* thẻ đến hạn? (learning/review có due ≤ now) */
  function isDue(card, now) { return !!card && card.status !== 'new' && card.due <= (now === undefined ? Date.now() : now); }

  return { version: 1, SRS_TIMING: SRS_TIMING, DAY: DAY, MIN5: MIN5, newCard: newCard, sm2: sm2, intervalLabel: intervalLabel, gradeOf: gradeOf, grade: grade, isDue: isDue };
});
