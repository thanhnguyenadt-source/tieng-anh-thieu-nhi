/* sw.js — service worker dùng chung (nguồn: docs/upgrade/sw.js, chép sang zh/ và kids/ bằng docs/upgrade/sync_kit.sh).
   Chỉ được đăng ký khi trang chạy qua http/https (app_kit.js kiểm location.protocol). Phạm vi = thư mục chứa sw.js.
   Chiến lược: HTML/JS/dữ liệu → mạng trước, rơi về bộ nhớ đệm khi mất mạng (người học luôn nhận bản mới khi có mạng);
   âm thanh audio/*.mp3 → bộ nhớ đệm trước (chỉ lưu những file đã nghe), hỗ trợ Range để tua theo mốc thời gian. */
'use strict';
const VER = 'v4';
const CACHE = 'khoa-hoc-' + VER + '-' + self.registration.scope;
const CORE = ['./', 'index.html', 'manifest.json', 'icon.svg', 'icon-192.png', 'apple-touch-icon.png', 'data/config.js', 'data/meta.js', 'data/app_kit.js', 'data/anki_engine.js', 'data/anki_words.js', 'data/srs_core.js', 'data/session_engine.js', 'data/progress_store.js', 'data/app_shell.js', 'data/false_friends.js', 'data/false_friends2.js', 'data/syntax_tags.js', 'data/hv_family.js', 'data/tone_sandhi.js', 'data/word_family.js', 'data/vn_traps.js', 'data/warmup_pairs.js', 'pinyin.html', 'data/stage0_pronunciation.js'];   // file không có thì bỏ qua

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.indexOf('khoa-hoc-') === 0 && k !== CACHE && k.indexOf(self.registration.scope) > 0).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/* trang gửi danh sách file cần lưu ngay (dữ liệu cấp đang học đã nạp trước khi sw hoạt động) */
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'cache' && Array.isArray(d.urls)) e.waitUntil(caches.open(CACHE).then(c => Promise.all(d.urls.map(u => c.add(u).catch(() => null)))));
});

function rangeResponse(req, res) {
  const h = req.headers.get('range'); if (!h) return Promise.resolve(res);
  return res.arrayBuffer().then(buf => {
    const m = /bytes=(\d*)-(\d*)/.exec(h); if (!m) return res;
    const size = buf.byteLength; let start = m[1] === '' ? Math.max(0, size - parseInt(m[2], 10)) : parseInt(m[1], 10);
    let end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(parseInt(m[2], 10), size - 1);
    if (start > end || start >= size) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
    return new Response(buf.slice(start, end + 1), { status: 206, statusText: 'Partial Content', headers: { 'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': 'bytes ' + start + '-' + end + '/' + size, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes' } });
  });
}
function isAudio(url) { return /\/audio\//.test(url.pathname) && /\.mp3$/.test(url.pathname); }

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (isAudio(url)) {
    e.respondWith(caches.open(CACHE).then(c => c.match(url.pathname).then(hit => {
      if (hit) return rangeResponse(req, hit);
      return fetch(url.pathname).then(net => { if (net.ok) c.put(url.pathname, net.clone()); return rangeResponse(req, net); });
    })).catch(() => new Response('', { status: 504 })));
    return;
  }
  e.respondWith(fetch(req).then(net => {
    if (net && net.ok) { const copy = net.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return net;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || (req.mode === 'navigate' ? caches.match('index.html') : null) || new Response('', { status: 504, statusText: 'offline' }))));
});
