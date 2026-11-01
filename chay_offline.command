#!/bin/bash
cd "$(dirname "$0")"
echo "=== ĐANG KHỞI ĐỘNG KHÓA HỌC OFFLINE (CÓ ÂM THANH NEURAL2) ==="
# Tắt tiến trình cũ nếu có
lsof -ti:8000 | xargs kill -9 2>/dev/null
# Mở server cục bộ
python3 -m http.server 8000 >/dev/null 2>&1 &
SERVER_PID=$!
sleep 1
# Mở trình duyệt
open "http://localhost:8000"
echo "Khóa học đã mở tại: http://localhost:8000"
echo "Cửa sổ này có thể đóng hoặc bấm Ctrl+C để dừng."
wait $SERVER_PID
