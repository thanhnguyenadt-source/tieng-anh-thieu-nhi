/* Cấu hình khóa tiếng Anh thiếu nhi. REPORT_FORM_URL: dán địa chỉ Google Form (đuôi /viewform) khi đã tạo; để trống thì nút "Báo lỗi" chỉ sao chép nội dung. */
window.APP_CONFIG = {
  course: 'kids',
  name: 'Tiếng Anh thiếu nhi',
  prefix: 'kids_',
  /* mã QR: đường dẫn các cài đặt (trong kho tiến độ, mục settings) được mang theo cùng vị trí bài */
  SETTING_KEYS: ['anki.limit', 'anki.types', 'anki.rate'],
  /* AUDIO: đặt true sau khi đã render âm thanh sprite (docs/upgrade/AUDIO_RUNBOOK.md) và chép thư mục audio/ lên cùng chỗ với index.html */
  /* PUBLIC_URL: địa chỉ công khai in ở chân thẻ ảnh thành tích (để trống thì dùng địa chỉ trang khi chạy qua https) */
  PUBLIC_URL: '',
  AUDIO: true,
  REPORT_FORM_URL: '',
  REPORT_FIELDS: { course: "", lesson: "", item: "", text: "", browser: "", note: "", summary: "" }
};
