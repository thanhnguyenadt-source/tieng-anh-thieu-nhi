/* GIAI ĐOẠN 3 — Cambridge Flyers (A2)
   Dữ liệu một giai đoạn. Nạp bằng <script src> (chạy được từ file://, không dùng fetch).
   Định dạng bài học: xem docs/GEMINI_LESSON_PROMPT.md; kiểm bằng: node tools/validate_lessons.js (và tools/coverage.js) */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[3] = {
  label: '🏅 GĐ 3: Flyers',  // chữ hiện trên nút chọn giai đoạn
  modules: [
    { code: '3.1', title: 'Một Ngày Của Bé' },
    { code: '3.2', title: 'Trường Lớp Vui Vẻ' },
    { code: '3.3', title: 'Đi Chơi Xa' },
    { code: '3.4', title: 'Khỏe Để Chơi' },
    { code: '3.5', title: 'Thiên Nhiên Và Truyện Kể' },
    { code: '3.6', title: 'Ngày Xưa Ở Quê Nhà' },
    { code: '3.7', title: 'Khám Phá Phố Phường' },
    { code: '3.8', title: 'Bếp Nhà Và Bữa Tiệc' },
    { code: '3.9', title: 'Thế Giới Động Vật' },
    { code: '3.10', title: 'Đồ Dùng Và Công Nghệ' },
    { code: '3.11', title: 'Nghề Nghiệp Quanh Em' },
    { code: '3.12', title: 'Tổng Kết Lên Lớp Flyers' }
  ],
  data: {
    '3.1': {
      lessons: [
        {
          id: '3.1A', name: 'Bài 3.1A: Hôm qua bé đã làm gì',
          grammar: {
            formulas: ['👦 I + ⚡ got + 🎁 a gift', '👩 Mom + ⚡ made / took / had + 🥦 something', '👨 Dad + ⚡ came / took + 📷 something'],
            tip: 'Động từ bất quy tắc đổi hẳn dạng: get → got, make → made, take → took, come → came, have → had. Phải nhớ thuộc lòng nhé!'
          },
          chunks: [
            { scene: '👦🎁👩', full: 'I got a gift from my aunt', parts: [{t:'I',ico:'👦',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'a gift from my aunt',ico:'🎁',c:'o'}], traceWord: 'gift' },
            { scene: '👩🥦🍲', full: 'Mom made healthy food for dinner', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'made',ico:'⚡',c:'v'}, {t:'healthy food for dinner',ico:'🥦',c:'o'}], traceWord: 'healthy' },
            { scene: '👨‍👩‍👧🎬🚌', full: 'We came to the theater by bus', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'came',ico:'⚡',c:'v'}, {t:'to the theater by bus',ico:'🎬',c:'o'}], traceWord: 'theater' },
            { scene: '👨📷🌳', full: 'Dad took his camera to the park', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'took',ico:'⚡',c:'v'}, {t:'his camera to the park',ico:'📷',c:'o'}], traceWord: 'camera' },
            { scene: '💨🪨', full: 'The wind blew a stone away', parts: [{t:'The wind',ico:'💨',c:'s'}, {t:'blew',ico:'⚡',c:'v'}, {t:'a stone away',ico:'🪨',c:'o'}], traceWord: 'stone' },
            { scene: '🎭💌', full: 'The actor got a dear letter', parts: [{t:'The actor',ico:'🎭',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'a dear letter',ico:'💌',c:'o'}], traceWord: 'actor' },
            { scene: '🧑‍🔬🎶', full: 'The scientist came to the concert', parts: [{t:'The scientist',ico:'🧑‍🔬',c:'s'}, {t:'came',ico:'⚡',c:'v'}, {t:'to the concert',ico:'🎶',c:'o'}], traceWord: 'scientist' },
            { scene: '👧➕✅', full: 'Lan had the right sum', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'the right sum',ico:'➕',c:'o'}], traceWord: 'sum' }
          ],
          qaList: [
            { q: 'Can you blow it now?', scene: '💨😮', ans: 'Yes, I can blow it', opts: [{ txt: 'Yes, I can blow it', ico: '💨' }, { txt: 'I came by bus', ico: '🚌' }, { txt: 'She is a doctor', ico: '🩺' }] },
            { q: 'How did you feel yesterday?', scene: '👦😊', ans: 'I was glad', opts: [{ txt: 'I was glad', ico: '😊' }, { txt: 'It is a camera', ico: '📷' }, { txt: 'Two stones', ico: '🪨' }] },
            { q: 'What did you see at the park?', scene: '🌳👁️', ans: 'It was a lovely sight', opts: [{ txt: 'It was a lovely sight', ico: '👁️' }, { txt: 'I made soup', ico: '🍲' }, { txt: 'Mom is at home', ico: '🏠' }] },
            { q: 'How did Dad walk home tonight?', scene: '👨🌙🏠', ans: 'He walked carefully', opts: [{ txt: 'He walked carefully', ico: '🧐' }, { txt: 'He got a gift', ico: '🎁' }, { txt: 'At the concert', ico: '🎶' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Kể Chuyện Hôm Qua',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ chuẩn bị 5 món đồ có sẵn trong nhà (hộp quà, máy ảnh hoặc điện thoại, hòn đá nhỏ...). Hỏi con: <i>"What did you do yesterday?"</i>.',
              '<b>Bước 2:</b> Con chọn một món đồ rồi nói câu quá khứ, ví dụ <i>"I got a gift."</i> hoặc <i>"Dad took a camera."</i>. Bố/mẹ vỗ tay khi con dùng đúng got, made, took, came, had.',
              '<b>Bước 3:</b> Đổi vai: bố/mẹ cố tình nói sai như <i>"I taked a camera"</i> để con bắt lỗi và sửa lại thành <i>"I took a camera"</i>.'
            ]
          }
        },
        {
          id: '3.1B', name: 'Bài 3.1B: Chuyện không xảy ra',
          grammar: {
            formulas: ['👦 I + 🚫 didn\'t + 👂 hear', '❓ Did + 👧 you + 🧹 clean?', '👦 Tom + 🚫 didn\'t + 👄 open'],
            tip: 'Có did hoặc didn\'t rồi thì động từ chính quay về nguyên mẫu: didn\'t hear, Did you clean. Đừng thêm -ed nữa nhé!'
          },
          chunks: [
            { scene: '😴🔇🌙', full: 'I didn\'t hear any noise at night', parts: [{t:'I',ico:'😴',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'hear any noise at night',ico:'🔊',c:'o'}], traceWord: 'noise' },
            { scene: '🏠🧳🚫', full: 'We didn\'t have a guest at home', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'have a guest at home',ico:'🧳',c:'o'}], traceWord: 'guest' },
            { scene: '❓🧹🛏️', full: 'Did you clean the bedroom today', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'clean the bedroom today',ico:'🛏️',c:'o'}], traceWord: 'bedroom' },
            { scene: '👦🚫👄', full: 'Tom didn\'t open his mouth at all', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'open his mouth at all',ico:'👄',c:'o'}], traceWord: 'mouth' },
            { scene: '❓🙋🌉', full: 'Did anybody walk on the bridge', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'anybody',ico:'🙋',c:'s'}, {t:'walk on the bridge',ico:'🌉',c:'o'}], traceWord: 'anybody' },
            { scene: '👧🚫☕🎒', full: 'Mai didn\'t bring a cup to school', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'bring a cup to school',ico:'☕',c:'o'}], traceWord: 'cup' },
            { scene: '❓🏭💡', full: 'Did the factory have a bright light', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'the factory',ico:'🏭',c:'s'}, {t:'have a bright light',ico:'💡',c:'o'}], traceWord: 'factory' },
            { scene: '👨‍👩‍👧🚫🥇🏛️', full: 'We didn\'t see a gold ring in the hall', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'see a gold ring in the hall',ico:'🥇',c:'o'}], traceWord: 'gold' }
          ],
          qaList: [
            { q: 'Did you like the climb?', scene: '🧗⛰️', ans: 'Yes, I liked the climb', opts: [{ txt: 'Yes, I liked the climb', ico: '🧗' }, { txt: 'It is a gold cup', ico: '☕' }, { txt: 'He is in the hall', ico: '🏛️' }] },
            { q: 'Did you shake his hand?', scene: '🤝👦', ans: 'Yes, I did', opts: [{ txt: 'Yes, I did', ico: '🤝' }, { txt: 'Two cups', ico: '☕' }, { txt: 'In the factory', ico: '🏭' }] },
            { q: 'What did the mouse make in the wall?', scene: '🐭🧱🕳️', ans: 'It made a hole', opts: [{ txt: 'It made a hole', ico: '🕳️' }, { txt: 'It is a bridge', ico: '🌉' }, { txt: 'It had a guest', ico: '🧳' }] },
            { q: 'What did you get for the baby\'s birth?', scene: '👶🎁', ans: 'I got a gift for the birth', opts: [{ txt: 'I got a gift for the birth', ico: '🎁' }, { txt: 'In the factory', ico: '🏭' }, { txt: 'No, it is bright', ico: '💡' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thám Tử Hỏi Đáp',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ giấu một món đồ (ví dụ cái cốc) trong nhà, rồi làm thám tử hỏi con: <i>"Did you take the cup?"</i>.',
              '<b>Bước 2:</b> Con trả lời <i>"Yes, I did."</i> hoặc <i>"No, I didn\'t."</i>, sau đó nói thêm một câu như <i>"I didn\'t open the bedroom."</i>.',
              '<b>Bước 3:</b> Đổi vai: con làm thám tử hỏi bố/mẹ ba câu bắt đầu bằng <i>"Did you...?"</i>. Ai tìm ra món đồ trước thì thắng.'
            ]
          }
        },
        {
          id: '3.1C', name: 'Bài 3.1C: Đang làm thì có chuyện',
          grammar: {
            formulas: ['👦 I + ⚡ was + 🎮 playing', '👨‍👩‍👧 We / 👬 They + ⚡ were + 📖 reading', '⏳ While / when + 👦 I + ⚡ was + 🚶 walking'],
            tip: 'I, he, she, it đi với was; we, you, they đi với were. Sau was/were thêm V-ing để nói việc đang diễn ra trong quá khứ!'
          },
          chunks: [
            { scene: '👦⚽🏡', full: 'I was playing in the yard', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'playing in the yard',ico:'🏡',c:'o'}], traceWord: 'yard' },
            { scene: '🧑‍🌾🚶⛰️', full: 'The farmer was walking up the hill', parts: [{t:'The farmer',ico:'🧑‍🌾',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'walking up the hill',ico:'⛰️',c:'o'}], traceWord: 'farmer' },
            { scene: '👧👦👧↔️', full: 'We were sitting in a row', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'sitting in a row',ico:'↔️',c:'o'}], traceWord: 'row' },
            { scene: '👨📬📖', full: 'Dad was reading the mail', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'reading the mail',ico:'📬',c:'o'}], traceWord: 'mail' },
            { scene: '👨‍👩‍👧🎉🎓', full: 'They were celebrating my good grade', parts: [{t:'They',ico:'👬',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'celebrating my good grade',ico:'🎓',c:'o'}], traceWord: 'celebrating' },
            { scene: '👧🍼🧊', full: 'Lan was holding a bottle of ice', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'holding a bottle of ice',ico:'🍼',c:'o'}], traceWord: 'bottle' },
            { scene: '🐱🥰💪😴', full: 'A lovely cat was sleeping on my shoulder', parts: [{t:'A lovely cat',ico:'🥰',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'sleeping on my shoulder',ico:'💪',c:'o'}], traceWord: 'shoulder' },
            { scene: '👦⚠️🚶', full: 'I was careful when I was walking', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'careful when I was walking',ico:'⚠️',c:'o'}], traceWord: 'careful' }
          ],
          qaList: [
            { q: 'What kind of day was it?', scene: '☀️✨', ans: 'It was an ideal day', opts: [{ txt: 'It was an ideal day', ico: '✨' }, { txt: 'He was a farmer', ico: '🧑‍🌾' }, { txt: 'In the yard', ico: '🏡' }] },
            { q: 'How was the weather when you were walking?', scene: '🌧️😖', ans: 'It was terrible', opts: [{ txt: 'It was terrible', ico: '😖' }, { txt: 'I was a farmer', ico: '🧑‍🌾' }, { txt: 'Two bottles', ico: '🍼' }] },
            { q: 'Was the pig fat?', scene: '🐷🍎', ans: 'Yes, it was fat', opts: [{ txt: 'Yes, it was fat', ico: '🐷' }, { txt: 'I was in the yard', ico: '🏡' }, { txt: 'She was singing', ico: '🎤' }] },
            { q: 'What were you doing when Mom called?', scene: '📞👦📖', ans: 'I was reading', opts: [{ txt: 'I was reading', ico: '📖' }, { txt: 'It was a bottle', ico: '🍼' }, { txt: 'She is my aunt', ico: '👩' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đang Làm Thì Có Chuyện',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ làm một việc đang diễn ra (đọc sách, lau bàn, xếp đồ chơi thành hàng...) và hỏi con: <i>"What was I doing?"</i> sau khi dừng lại.',
              '<b>Bước 2:</b> Con trả lời bằng <i>"You were reading."</i>. Rồi bố/mẹ làm tiếng động (gõ cửa, vỗ tay) để con nói <i>"You were reading when I knocked."</i> hoặc <i>"I was playing while you were reading."</i>.',
              '<b>Bước 3:</b> Đổi vai: con diễn một việc, bố/mẹ nói câu có <i>was/were</i> và <i>when/while</i>. Mỗi câu đúng được một điểm.'
            ]
          }
        }
      ]
    },
    '3.2': {
      lessons: [
        {
          id: '3.2A', name: 'Bài 3.2A: Kế hoạch cuối tuần',
          grammar: {
            formulas: ['👦 I + ⚡ am going to + 🎩 wear a hat', '👧 She / 👦 He + ⚡ is going to + 💊 take medicine', '👫 We / 👬 They + ⚡ are going to + 👀 look'],
            tip: 'Kế hoạch sắp làm: I am / He is / We are + going to + động từ nguyên mẫu, không thêm -s đâu nhé!'
          },
          chunks: [
            { scene: '👦🎩☀️', full: 'I am going to wear a hat', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to wear',ico:'⚡',c:'v'}, {t:'a hat',ico:'🎩',c:'o'}], traceWord: 'hat' },
            { scene: '👧🤒💊', full: 'She is going to take medicine', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is going to take',ico:'⚡',c:'v'}, {t:'medicine',ico:'💊',c:'o'}], traceWord: 'medicine' },
            { scene: '👫🟡⭕', full: 'We are going to see a yellow circle', parts: [{t:'We',ico:'👫',c:'s'}, {t:'are going to see',ico:'👀',c:'v'}, {t:'a yellow circle',ico:'🟡⭕',c:'o'}], traceWord: 'circle' },
            { scene: '👦👩💋', full: 'I am going to give Mom a kiss', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to give',ico:'🎁',c:'v'}, {t:'Mom a kiss',ico:'👩💋',c:'o'}], traceWord: 'kiss' },
            { scene: '👨📱📞', full: 'Dad is going to use his mobile', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'is going to use',ico:'⚡',c:'v'}, {t:'his mobile',ico:'📱',c:'o'}], traceWord: 'mobile' },
            { scene: '👫🔍🌍', full: 'We are going to look everywhere', parts: [{t:'We',ico:'👫',c:'s'}, {t:'are going to look',ico:'🔍',c:'v'}, {t:'everywhere',ico:'🌍',c:'o'}], traceWord: 'everywhere' },
            { scene: '👦📏🏃', full: 'The thin boy is going to run fast', parts: [{t:'The thin boy',ico:'👦📏',c:'s'}, {t:'is going to run',ico:'🏃',c:'v'}, {t:'fast',ico:'💨',c:'o'}], traceWord: 'thin' },
            { scene: '👧🧍⭐', full: 'I am going to be my best self', parts: [{t:'I',ico:'👧',c:'s'}, {t:'am going to be',ico:'⚡',c:'v'}, {t:'my best self',ico:'🧍⭐',c:'o'}], traceWord: 'self' }
          ],
          qaList: [
            { q: 'Hi Lan, are you sad or angry?', scene: '👋😢😡', ans: 'I am sad, but not angry', opts: [{ txt: 'I am sad, but not angry', ico: '😢' }, { txt: 'I am going to wear a hat', ico: '🎩' }, { txt: 'It is on the table', ico: '🪑' }] },
            { q: 'Tom is sick. What is he going to take?', scene: '👦🤒💊', ans: 'He is going to take medicine', opts: [{ txt: 'He is going to take medicine', ico: '💊' }, { txt: 'He is going to ride a bike', ico: '🚲' }, { txt: 'He is going to play tennis', ico: '🎾' }] },
            { q: 'What is that good smell?', scene: '👃🍕😋', ans: 'It is hot pizza', opts: [{ txt: 'It is hot pizza', ico: '🍕' }, { txt: 'It is a blue bag', ico: '👜' }, { txt: 'It is a big bus', ico: '🚌' }] },
            { q: 'What bad habit are you going to change?', scene: '🔁🍬🚫', ans: 'I am going to stop eating candy', opts: [{ txt: 'I am going to stop eating candy', ico: '🍬' }, { txt: 'I am going to wear a yellow hat', ico: '🎩' }, { txt: 'It is a big circle', ico: '⭕' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Kế Hoạch Cuối Tuần Của Gia Đình',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy một tờ giấy, vẽ 4 hình nhỏ (🎩 mũ, 📱 điện thoại, 💊 thuốc, 💋 hôn) rồi hỏi con: <i>"What are you going to do on the weekend?"</i>.',
              '<b>Bước 2:</b> Con chọn một hình và nói kế hoạch, ví dụ <i>"I am going to wear a hat"</i>; bố/mẹ làm theo kế hoạch của con bằng điệu bộ vui nhộn.',
              '<b>Bước 3:</b> Đổi vai: bố/mẹ nói kế hoạch của mình bằng <i>"I am going to..."</i>, con nhắc lại bằng <i>"Mom is going to..."</i> hoặc <i>"Dad is going to..."</i>.'
            ]
          }
        },
        {
          id: '3.2B', name: 'Bài 3.2B: Câu lạc bộ và sở thích',
          grammar: {
            formulas: ['🙋 I / he / she + ➡️ me / him / her', '🎒 It is + 🙋 mine / yours / hers', '❓ Whose + 🦴 bone + ⚡ is this?'],
            tip: 'I đổi thành me, he thành him, she thành her; mine là của tôi, yours là của bạn, còn Whose là hỏi "của ai"!'
          },
          chunks: [
            { scene: '🍽️🩶👦', full: 'The gray dish is mine', parts: [{t:'The gray dish',ico:'🍽️🩶',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'mine',ico:'🙋',c:'o'}], traceWord: 'dish' },
            { scene: '🦴❓🏠', full: 'Whose bone is this on the floor', parts: [{t:'Whose bone',ico:'❓🦴',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'this on the floor',ico:'👇',c:'o'}], traceWord: 'bone' },
            { scene: '👑🍀🎩', full: 'The king gave her a lucky hat', parts: [{t:'The king',ico:'👑',c:'s'}, {t:'gave',ico:'🎁',c:'v'}, {t:'her a lucky hat',ico:'👧🍀🎩',c:'o'}], traceWord: 'lucky' },
            { scene: '🎙️👦❓', full: 'The reporter asked him a question', parts: [{t:'The reporter',ico:'🎙️',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'him a question',ico:'👦❓',c:'o'}], traceWord: 'reporter' },
            { scene: '🖱️👖👧', full: 'The mouse is in her pocket', parts: [{t:'The mouse',ico:'🖱️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in her pocket',ico:'👧👖',c:'o'}], traceWord: 'pocket' },
            { scene: '👫😮‍💨❄️', full: 'We breathe cold air with them', parts: [{t:'We',ico:'👫',c:'s'}, {t:'breathe',ico:'😮‍💨',c:'v'}, {t:'cold air with them',ico:'🥶💨👬',c:'o'}], traceWord: 'breathe' },
            { scene: '❄️🧥👧', full: 'The snow falls on her coat', parts: [{t:'The snow',ico:'❄️',c:'s'}, {t:'falls',ico:'⬇️',c:'v'}, {t:'on her coat',ico:'🧥',c:'o'}], traceWord: 'snow' },
            { scene: '🤝✏️👧', full: 'Can I borrow your pen', parts: [{t:'Can',ico:'❓',c:'v'}, {t:'I',ico:'🙋',c:'s'}, {t:'borrow your pen',ico:'🤝✏️',c:'o'}], traceWord: 'borrow' }
          ],
          qaList: [
            { q: 'Whose tennis ball is this?', scene: '🎾❓👦', ans: 'It is yours', opts: [{ txt: 'It is yours', ico: '🎾' }, { txt: 'We are in the pool', ico: '🏊' }, { txt: 'He is eating lunch', ico: '🍱' }] },
            { q: 'What is her excuse?', scene: '🙇👧🤒', ans: 'She is sick', opts: [{ txt: 'She is sick', ico: '🤒' }, { txt: 'She is nine years old', ico: '9️⃣' }, { txt: 'I have a gray hat', ico: '🎩' }] },
            { q: 'I have a test. Can you wish me luck?', scene: '📝🍀👦', ans: 'Good luck to you', opts: [{ txt: 'Good luck to you', ico: '🍀' }, { txt: 'Yes, I like him', ico: '👦' }, { txt: 'It is in my pocket', ico: '👖' }] },
            { q: 'Is the cold spell long?', scene: '⏱️🥶❄️', ans: 'No, it is short', opts: [{ txt: 'No, it is short', ico: '⏱️' }, { txt: 'Yes, it is mine', ico: '🙋' }, { txt: 'He is a king', ico: '👑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Của Ai Đây?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ gom 5-6 đồ vật trong nhà (bút, mũ, bóng, đĩa...) bỏ vào một cái túi, rồi lấy từng món ra hỏi con: <i>"Whose pen is this?"</i>.',
              '<b>Bước 2:</b> Con đoán chủ nhân và trả lời <i>"It is mine"</i>, <i>"It is yours"</i> hoặc <i>"It is hers"</i>; nếu đúng thì được giữ món đó.',
              '<b>Bước 3:</b> Con xin mượn đồ của bố/mẹ bằng <i>"Can I borrow your pen?"</i>, bố/mẹ đáp lại với <i>"Yes, you can borrow it"</i> rồi đổi vai.'
            ]
          }
        },
        {
          id: '3.2C', name: 'Bài 3.2C: Môn học và bạn bè',
          grammar: {
            formulas: ['🍰 The cake + ⚡ is + ⭐ more delicious than + 🍲 the soup', '🧠 Mai + ⚡ is + 🟰 as smart as + 👦 Nam', '🏆 It + ⚡ is + 👑 the most exciting + 🎬 drama'],
            tip: 'Tính từ dài thì thêm more hoặc the most phía trước, KHÔNG thêm -er hay -est; as + tính từ + as nghĩa là bằng nhau!'
          },
          chunks: [
            { scene: '🎬😍📺', full: 'This drama is more interesting than that one', parts: [{t:'This drama',ico:'🎬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more interesting than that one',ico:'⭐📺',c:'o'}], traceWord: 'drama' },
            { scene: '🍰😋🍲', full: 'The cake is more delicious than the soup', parts: [{t:'The cake',ico:'🍰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more delicious than the soup',ico:'😋🍲',c:'o'}], traceWord: 'cake' },
            { scene: '👧🧠👦', full: 'My sister is as smart as my brother', parts: [{t:'My sister',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'as smart as my brother',ico:'🧠🟰👦',c:'o'}], traceWord: 'smart' },
            { scene: '🚚🛞💪', full: 'This truck wheel is as thick as my arm', parts: [{t:'This truck wheel',ico:'🚚🛞',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'as thick as my arm',ico:'📚💪',c:'o'}], traceWord: 'wheel' },
            { scene: '🧸🎮⭐', full: 'This toy is more exciting than a game', parts: [{t:'This toy',ico:'🧸',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more exciting than a game',ico:'⭐🎮',c:'o'}], traceWord: 'toy' },
            { scene: '🧥🤏👦', full: 'This jacket is as tight as my old shirt', parts: [{t:'This jacket',ico:'🧥',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'as tight as my old shirt',ico:'🤏👕',c:'o'}], traceWord: 'tight' },
            { scene: '☁️🌅☀️', full: 'That cloud is more beautiful than the sun', parts: [{t:'That cloud',ico:'☁️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more beautiful than the sun',ico:'✨☀️',c:'o'}], traceWord: 'cloud' },
            { scene: '👧👃🔘', full: 'Her nose is as small as a button', parts: [{t:'Her nose',ico:'👃',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'as small as a button',ico:'🤏🔘',c:'o'}], traceWord: 'nose' }
          ],
          qaList: [
            { q: 'Sir, is pollution a big problem?', scene: '🤵🏭😷', ans: 'Yes, it is the most important problem', opts: [{ txt: 'Yes, it is the most important problem', ico: '🏭' }, { txt: 'No, I am as old as you', ico: '🎂' }, { txt: 'I like green tea', ico: '🍵' }] },
            { q: 'Is this answer true or false?', scene: '✅❌❓', ans: 'It is false', opts: [{ txt: 'It is false', ico: '❌' }, { txt: 'It is a truck', ico: '🚚' }, { txt: 'It is Monday', ico: '📆' }] },
            { q: 'Where is the school?', scene: '🏫📍🌳', ans: 'It is beside the park', opts: [{ txt: 'It is beside the park', ico: '🌳' }, { txt: 'I am as tall as him', ico: '📏' }, { txt: 'It is nine', ico: '9️⃣' }] },
            { q: 'What is the most fun everyday activity?', scene: '📆👫🎉', ans: 'Playing with friends is the most fun', opts: [{ txt: 'Playing with friends is the most fun', ico: '👫' }, { txt: 'It is as cold as ice', ico: '🧊' }, { txt: 'A big green bag', ico: '👜' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Ai Hơn Ai?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đặt hai món đồ chơi hoặc hai quyển sách trước mặt con, rồi so sánh: <i>"This book is more interesting than that one"</i>.',
              '<b>Bước 2:</b> Con tự chọn hai món đồ khác trong nhà và so sánh bằng <i>"more... than"</i> hoặc <i>"as... as"</i>; bố/mẹ chấm điểm cho câu đúng.',
              '<b>Bước 3:</b> Cả nhà cùng bình chọn bằng câu <i>"This is the most exciting toy"</i> cho món đồ chơi yêu thích nhất, mỗi người nói lý do bằng một câu tiếng Anh.'
            ]
          }
        }
      ]
    },
    '3.3': {
      lessons: [
        {
          id: '3.3A', name: 'Bài 3.3A: Chuẩn bị vali',
          grammar: {
            formulas: ['👦 I + ⚡ put + 🍬 some sugar', '🎤 The singer + ⚡ has + 💿 a lot of albums', '👦 I + ⚡ don\'t have + 🔘 any buttons'],
            tip: 'Đếm được (pens, shoes) đi với many • không đếm được (sugar, grass) đi với much • câu phủ định và câu hỏi dùng any!'
          },
          chunks: [
            { scene: '🍬🥣👦', full: 'I put some sugar in the bowl', parts: [{t:'I',ico:'👦',c:'s'}, {t:'put',ico:'🤲',c:'v'}, {t:'some sugar in the bowl',ico:'🍬🥣',c:'o'}], traceWord: 'sugar' },
            { scene: '🎤💿🎶', full: 'The singer has a lot of albums', parts: [{t:'The singer',ico:'🎤',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a lot of albums',ico:'💿',c:'o'}], traceWord: 'singer' },
            { scene: '👨‍👩‍👧🌱🚫', full: 'We don\'t have much grass here', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'don\'t have',ico:'🚫',c:'v'}, {t:'much grass here',ico:'🌱',c:'o'}], traceWord: 'grass' },
            { scene: '👦🧼👟', full: 'He has many dirty shoes', parts: [{t:'He',ico:'👦',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'many dirty shoes',ico:'🧼👟',c:'o'}], traceWord: 'dirty' },
            { scene: '👦📜🎆', full: 'Tom reads some poems at the festival', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'reads',ico:'📖',c:'v'}, {t:'some poems at the festival',ico:'📜🎆',c:'o'}], traceWord: 'poems' },
            { scene: '🦵😖🚶', full: 'My knee hurts a lot', parts: [{t:'My knee',ico:'🦵',c:'s'}, {t:'hurts',ico:'😖',c:'v'}, {t:'a lot',ico:'➕',c:'o'}], traceWord: 'knee' },
            { scene: '👦🧥🔘🚫', full: 'I don\'t have any buttons on my jacket', parts: [{t:'I',ico:'👦',c:'s'}, {t:'don\'t have',ico:'🚫',c:'v'}, {t:'any buttons on my jacket',ico:'🔘🧥',c:'o'}], traceWord: 'buttons' },
            { scene: '👨🖊️🧪🧳', full: 'Dad takes some pens and a tube', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'takes',ico:'🤲',c:'v'}, {t:'some pens and a tube',ico:'🖊️🧪',c:'o'}], traceWord: 'tube' }
          ],
          qaList: [
            { q: 'Do you take a bath at night?', scene: '🛁🌙👦', ans: 'Yes, I take a bath at night', opts: [{ txt: 'Yes, I take a bath at night', ico: '🛁' }, { txt: 'It is on the table', ico: '🪑' }, { txt: 'She sings a lot', ico: '🎤' }] },
            { q: 'How many pens do you have?', scene: '🖊️🖊️🖊️', ans: 'I have many pens', opts: [{ txt: 'I have many pens', ico: '🖊️' }, { txt: 'I have much sugar', ico: '🍬' }, { txt: 'It is dirty', ico: '🧼' }] },
            { q: 'How much sugar do you need?', scene: '🍬🥣🤔', ans: 'I need a lot of sugar', opts: [{ txt: 'I need a lot of sugar', ico: '🍬' }, { txt: 'Yes, I am happy', ico: '😄' }, { txt: 'There are many bowls', ico: '🥣' }] },
            { q: 'Is there any grass here?', scene: '🌱🏞️❓', ans: 'Yes, there is some grass', opts: [{ txt: 'Yes, there is some grass', ico: '🌱' }, { txt: 'I like this song', ico: '🎶' }, { txt: 'She is a singer', ico: '🎤' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Xếp Vali Đi Chơi',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày đồ có sẵn (vài cây bút, áo khoác, bát, ít đường trong hộp...) rồi hỏi con: <i>"How many pens do you have?"</i>.',
              '<b>Bước 2:</b> Con đếm và trả lời, nhớ dùng many cho đồ đếm được, much cho đồ không đếm được: <i>"I have many pens"</i>, <i>"I have some sugar"</i>.',
              '<b>Bước 3:</b> Con "xếp vali": cho đồ vào hộp và nói <i>"I put some sugar in the bowl"</i>. Bố/mẹ lấy bớt đồ ra và hỏi <i>"Do you have any pens?"</i> để con trả lời.'
            ]
          }
        },
        {
          id: '3.3B', name: 'Bài 3.3B: Hỏi và tả địa điểm',
          grammar: {
            formulas: ['🗼 The tower + ⚡ is + 🌉 next to the bridge', '📚 The shelf + ⚡ is + ↔️ between two windows', '🎉 The party + ⚡ is + ⏰ at seven'],
            tip: 'Giờ thì dùng at • tháng thì dùng in • thứ trong tuần thì dùng on • giữa hai vật thì dùng between!'
          },
          chunks: [
            { scene: '🗼🌉👀', full: 'The tower is next to the bridge', parts: [{t:'The tower',ico:'🗼',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'next to the bridge',ico:'🌉',c:'o'}], traceWord: 'tower' },
            { scene: '🪟📚🪟', full: 'The shelf is between two windows', parts: [{t:'The shelf',ico:'📚',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'between two windows',ico:'🪟↔️🪟',c:'o'}], traceWord: 'shelf' },
            { scene: '🐖↔️🐄', full: 'The pig is behind the cow', parts: [{t:'The pig',ico:'🐖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'behind the cow',ico:'🐄',c:'o'}], traceWord: 'pig' },
            { scene: '👧👗🎭', full: 'My cousin wears a skirt at the opera', parts: [{t:'My cousin',ico:'👧',c:'s'}, {t:'wears',ico:'👗',c:'v'}, {t:'a skirt at the opera',ico:'👗🎭',c:'o'}], traceWord: 'cousin' },
            { scene: '🏆📅🌸', full: 'The contest is on Monday in April', parts: [{t:'The contest',ico:'🏆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'on Monday in April',ico:'📅',c:'o'}], traceWord: 'contest' },
            { scene: '🎉🕕🎈', full: 'The celebration starts at six o\'clock', parts: [{t:'The celebration',ico:'🎉',c:'s'}, {t:'starts',ico:'▶️',c:'v'}, {t:'at six o\'clock',ico:'🕕',c:'o'}], traceWord: 'celebration' },
            { scene: '🎻🏦↔️', full: 'The musician is near the bank', parts: [{t:'The musician',ico:'🎻',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'near the bank',ico:'🏦',c:'o'}], traceWord: 'musician' },
            { scene: '👦🚿🕖', full: 'I take a shower at seven', parts: [{t:'I',ico:'👦',c:'s'}, {t:'take',ico:'🤲',c:'v'}, {t:'a shower at seven',ico:'🚿🕖',c:'o'}], traceWord: 'shower' }
          ],
          qaList: [
            { q: 'Where do you work in summer?', scene: '⛏️☀️👷', ans: 'We work at the dig', opts: [{ txt: 'We work at the dig', ico: '⛏️' }, { txt: 'It is in April', ico: '📅' }, { txt: 'At seven o\'clock', ico: '🕖' }] },
            { q: 'Where is the chicken?', scene: '🍗🍽️🪑', ans: 'The chicken is on the table', opts: [{ txt: 'The chicken is on the table', ico: '🍗' }, { txt: 'It is on Monday', ico: '📅' }, { txt: 'The chicken is at six', ico: '🕕' }] },
            { q: 'What color is the cream?', scene: '🍦🟠🎨', ans: 'The cream is orange', opts: [{ txt: 'The cream is orange', ico: '🟠' }, { txt: 'The cream is at six', ico: '🕕' }, { txt: 'The cream is on Monday', ico: '📅' }] },
            { q: 'When is the party?', scene: '🎉📅🎈', ans: 'The party is on Sunday', opts: [{ txt: 'The party is on Sunday', ico: '📅' }, { txt: 'It is next to the tower', ico: '🗼' }, { txt: 'Yes, it is', ico: '✅' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Tìm Đồ Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ xếp vài món đồ chơi hoặc đồ dùng quanh phòng (thú bông, sách, cốc...) rồi hỏi con: <i>"Where is the pig?"</i>.',
              '<b>Bước 2:</b> Con nhìn quanh và trả lời bằng giới từ: <i>"The pig is next to the shelf"</i>, <i>"The cow is behind the door"</i>, <i>"The book is between two cups"</i>.',
              '<b>Bước 3:</b> Đổi vai: con giấu đồ rồi tả vị trí để bố/mẹ đoán. Cuối trò chơi hỏi giờ: <i>"What time is dinner?"</i> - <i>"Dinner is at seven"</i>.'
            ]
          }
        },
        {
          id: '3.3C', name: 'Bài 3.3C: Quy định ở sân bay, khách sạn',
          grammar: {
            formulas: ['👨‍👩‍👧 We + ⚡ have to + 🏃 hurry to the airport', '👵 She + ⚡ has to + 🙏 pray at the temple', '👦 He + ⚡ doesn\'t have to + 🔪 bring a knife'],
            tip: 'Have to là bắt buộc phải làm • don\'t have to là không cần làm, được tự do • đừng lẫn với mustn\'t là cấm làm!'
          },
          chunks: [
            { scene: '👨‍👩‍👧🏃✈️', full: 'We have to hurry to the airport', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'have to',ico:'⚠️',c:'v'}, {t:'hurry to the airport',ico:'🏃✈️',c:'o'}], traceWord: 'hurry' },
            { scene: '👵🙏🛕', full: 'My grandmother has to pray at the temple', parts: [{t:'My grandmother',ico:'👵',c:'s'}, {t:'has to',ico:'⚠️',c:'v'}, {t:'pray at the temple',ico:'🙏🛕',c:'o'}], traceWord: 'pray' },
            { scene: '🏨👋🧑‍🤝‍🧑', full: 'We have to greet the guests', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'have to',ico:'⚠️',c:'v'}, {t:'greet the guests',ico:'👋',c:'o'}], traceWord: 'greet' },
            { scene: '👧✍️📄', full: 'Mai has to write a paragraph', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has to',ico:'⚠️',c:'v'}, {t:'write a paragraph',ico:'✍️📄',c:'o'}], traceWord: 'paragraph' },
            { scene: '👦🥔😋', full: 'You don\'t have to eat the potato', parts: [{t:'You',ico:'👦',c:'s'}, {t:'don\'t have to',ico:'🆓',c:'v'}, {t:'eat the potato',ico:'🥔',c:'o'}], traceWord: 'potato' },
            { scene: '👦🔪🚫🎒', full: 'He doesn\'t have to bring a knife', parts: [{t:'He',ico:'👦',c:'s'}, {t:'doesn\'t have to',ico:'🆓',c:'v'}, {t:'bring a knife',ico:'🔪',c:'o'}], traceWord: 'knife' },
            { scene: '👧🎸🎶', full: 'Anna doesn\'t have to play the guitar', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'doesn\'t have to',ico:'🆓',c:'v'}, {t:'play the guitar',ico:'🎸',c:'o'}], traceWord: 'guitar' },
            { scene: '🏨🔔👋', full: 'We don\'t have to ring the bell', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'don\'t have to',ico:'🆓',c:'v'}, {t:'ring the bell',ico:'🔔',c:'o'}], traceWord: 'bell' }
          ],
          qaList: [
            { q: 'Why do we have to be quiet?', scene: '🤫👩‍🏫🚫', ans: 'Because the teacher is strict', opts: [{ txt: 'Because the teacher is strict', ico: '🚫' }, { txt: 'Because the moon is big', ico: '🌙' }, { txt: 'I have a red bag', ico: '🎒' }] },
            { q: 'What do you have to learn in class?', scene: '📝🏫👦', ans: 'I have to learn grammar', opts: [{ txt: 'I have to learn grammar', ico: '📝' }, { txt: 'It is on the moon', ico: '🌙' }, { txt: 'I have a big pizza', ico: '🍕' }] },
            { q: 'What do you want to eat?', scene: '🧀🍫😋', ans: 'I want cheese and chocolate', opts: [{ txt: 'I want cheese and chocolate', ico: '🧀🍫' }, { txt: 'I want a big moon', ico: '🌙' }, { txt: 'I have to go', ico: '🏃' }] },
            { q: 'What can you see in the picture?', scene: '🌙🚩🖼️', ans: 'I see a flag on the moon', opts: [{ txt: 'I see a flag on the moon', ico: '🚩🌙' }, { txt: 'I see a cow on the bed', ico: '🐄🛏️' }, { txt: 'I see a pig in a skirt', ico: '🐖👗' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Nội Quy Khách Sạn',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đóng vai nhân viên khách sạn, đọc nội quy bằng thẻ giấy: <i>"You have to show your ticket"</i>, <i>"You don\'t have to bring a knife"</i>.',
              '<b>Bước 2:</b> Con đóng vai khách, lắng nghe rồi làm đúng việc phải làm (có have to) và bỏ qua việc không cần làm (có don\'t have to), vừa làm vừa nói lại câu đó.',
              '<b>Bước 3:</b> Đổi vai: con làm nhân viên nghiêm khắc (strict) đặt 3 nội quy cho bố/mẹ, ví dụ <i>"We have to greet the guests"</i>, <i>"You don\'t have to ring the bell"</i>.'
            ]
          }
        }
      ]
    },
    '3.4': {
      lessons: [
        {
          id: '3.4A', name: 'Bài 3.4A: Thi đấu thể thao',
          grammar: {
            formulas: ['👨 My uncle + 🏃 runs + ⚡ quickly', '👩 My aunt + ⚽ plays + 👍 well', '👦 Kids + 💪 play + 🔥 hard'],
            tip: 'Trạng từ cho biết "làm như thế nào" và hay đứng sau động từ • good → well, còn fast và hard giữ nguyên!'
          },
          chunks: [
            { scene: '👨🏃🍂', full: 'My uncle runs quickly in autumn', parts: [{t:'My uncle',ico:'👨',c:'s'}, {t:'runs',ico:'🏃',c:'v'}, {t:'quickly in autumn',ico:'🍂',c:'o'}], traceWord: 'uncle' },
            { scene: '👩🎾👍', full: 'My aunt plays tennis very well', parts: [{t:'My aunt',ico:'👩',c:'s'}, {t:'plays',ico:'🎾',c:'v'}, {t:'tennis very well',ico:'👍',c:'o'}], traceWord: 'aunt' },
            { scene: '🐑😴🍽️', full: 'The lazy sheep eats very quickly', parts: [{t:'The lazy sheep',ico:'🐑',c:'s'}, {t:'eats',ico:'🍽️',c:'v'}, {t:'very quickly',ico:'⚡',c:'o'}], traceWord: 'lazy' },
            { scene: '🐀🌳🧗', full: 'The ugly rat climbs the tree quickly', parts: [{t:'The ugly rat',ico:'🐀',c:'s'}, {t:'climbs',ico:'🧗',c:'v'}, {t:'the tree quickly',ico:'🌳',c:'o'}], traceWord: 'rat' },
            { scene: '👧👦⚽💪', full: 'Fifteen girls and nineteen boys play hard', parts: [{t:'Fifteen girls and nineteen boys',ico:'👧👦',c:'s'}, {t:'play',ico:'⚽',c:'v'}, {t:'hard',ico:'💪',c:'o'}], traceWord: 'nineteen' },
            { scene: '🧑‍🏫👂🏃', full: 'Eighteen players listen to the coach carefully', parts: [{t:'Eighteen players',ico:'🏃',c:'s'}, {t:'listen',ico:'👂',c:'v'}, {t:'to the coach carefully',ico:'🧑‍🏫',c:'o'}], traceWord: 'eighteen' },
            { scene: '🧒🏊👍', full: 'Fifty people and forty kids swim well', parts: [{t:'Fifty people and forty kids',ico:'🧒',c:'s'}, {t:'swim',ico:'🏊',c:'v'}, {t:'well',ico:'👍',c:'o'}], traceWord: 'forty' },
            { scene: '⚽🏃⏰', full: 'Fourteen players practice hard for sixty minutes', parts: [{t:'Fourteen players',ico:'🏃',c:'s'}, {t:'practice',ico:'⚽',c:'v'}, {t:'hard for sixty minutes',ico:'⏰',c:'o'}], traceWord: 'sixty' }
          ],
          qaList: [
            { q: 'How old is your cousin?', scene: '🎂1️⃣6️⃣🧒', ans: 'My cousin is sixteen years old', opts: [{ txt: 'My cousin is sixteen years old', ico: '🎂' }, { txt: 'She plays football very well', ico: '⚽' }, { txt: 'It is autumn today', ico: '🍂' }] },
            { q: 'Does your aunt play well?', scene: '👩🎾👍', ans: 'Yes, my aunt plays very well', opts: [{ txt: 'Yes, my aunt plays very well', ico: '👍' }, { txt: 'My uncle is forty years old', ico: '🎂' }, { txt: 'It is autumn today', ico: '🍂' }] },
            { q: 'What do you see in the picture?', scene: '🐀😖', ans: 'I see a very ugly rat', opts: [{ txt: 'I see a very ugly rat', ico: '🐀' }, { txt: 'I see a lazy sheep', ico: '🐑' }, { txt: 'I see a big tree', ico: '🌳' }] },
            { q: 'How do they practice football?', scene: '⚽🧒🧒', ans: 'They practice football very carefully', opts: [{ txt: 'They practice football very carefully', ico: '⚽' }, { txt: 'They are fifty years old', ico: '🎂' }, { txt: 'It is a big sheep', ico: '🐑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thi Đấu Nhanh - Chậm - Cẩn Thận',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ nói một câu lệnh như <i>"Walk quickly!"</i>, <i>"Walk carefully!"</i> hoặc <i>"Jump hard!"</i> và cả hai cùng làm đúng theo cách đó.',
              '<b>Bước 2:</b> Đổi vai: con ra lệnh bằng tiếng Anh, bố/mẹ làm động tác. Khi bố/mẹ làm xong, con khen: <i>"You run quickly!"</i>.',
              '<b>Bước 3:</b> Cả nhà thi chạy đến cái ghế và quay về. Mỗi lượt, người thắng nói <i>"I run quickly!"</i> còn người về sau nói <i>"I play hard!"</i>.'
            ]
          }
        },
        {
          id: '3.4B', name: 'Bài 3.4B: Mình đủ khỏe chưa',
          grammar: {
            formulas: ['📏 The ruler + ⚡ is + 😬 too short', '👦 He + ⚡ is + 💪 old enough', '📖 It + ⚡ is + 🏋️ too heavy'],
            tip: '"too" đứng TRƯỚC tính từ (quá...) • "enough" đứng SAU tính từ (đủ...) • nhớ: too small, nhưng big enough!'
          },
          chunks: [
            { scene: '🏫🧒🧒😮', full: 'The classroom is too small for ninety kids', parts: [{t:'The classroom',ico:'🏫',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'too small for ninety kids',ico:'🧒',c:'o'}], traceWord: 'classroom' },
            { scene: '📏📄😬', full: 'The ruler is too short for the blank page', parts: [{t:'The ruler',ico:'📏',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'too short for the blank page',ico:'⬜',c:'o'}], traceWord: 'ruler' },
            { scene: '📖🏋️😓', full: 'The dictionary is too heavy for me', parts: [{t:'The dictionary',ico:'📖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'too heavy for me',ico:'🏋️',c:'o'}], traceWord: 'dictionary' },
            { scene: '👦🔰🏫', full: 'He is old enough for elementary school', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'old enough for elementary school',ico:'🔰',c:'o'}], traceWord: 'elementary' },
            { scene: '👦🤒🥱', full: 'Tom has a fever and feels too tired', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a fever and feels too tired',ico:'🤒',c:'o'}], traceWord: 'fever' },
            { scene: '🍃🦇👍', full: 'The leaf is big enough for the bat', parts: [{t:'The leaf',ico:'🍃',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'big enough for the bat',ico:'🦇',c:'o'}], traceWord: 'leaf' },
            { scene: '👴💪🏃', full: 'Grandpa is strong enough to run at seventy', parts: [{t:'Grandpa',ico:'👴',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'strong enough to run at seventy',ico:'💪',c:'o'}], traceWord: 'seventy' },
            { scene: '🧑‍💼🌟⏰', full: 'The interviewer is super but too busy', parts: [{t:'The interviewer',ico:'🧑‍💼',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'super but too busy',ico:'🌟',c:'o'}], traceWord: 'interviewer' }
          ],
          qaList: [
            { q: 'How old is the boy?', scene: '👦1️⃣3️⃣🎂', ans: 'The boy is thirteen years old', opts: [{ txt: 'The boy is thirteen years old', ico: '🎂' }, { txt: 'The classroom is too small', ico: '🏫' }, { txt: 'It is a super bat', ico: '🦇' }] },
            { q: 'How old is your grandma?', scene: '👵8️⃣0️⃣🎂', ans: 'My grandma is eighty years old', opts: [{ txt: 'My grandma is eighty years old', ico: '🎂' }, { txt: 'She has a super dictionary', ico: '📖' }, { txt: 'The ruler is long enough', ico: '📏' }] },
            { q: 'Is your sister old enough?', scene: '👧1️⃣7️⃣✅', ans: 'Yes, she is seventeen years old', opts: [{ txt: 'Yes, she is seventeen years old', ico: '👧' }, { txt: 'No, the bat is blank', ico: '🦇' }, { txt: 'Yes, the leaf is blue', ico: '🍃' }] },
            { q: 'Can you carry the box?', scene: '📦🏋️😓', ans: 'No, the box is too heavy', opts: [{ txt: 'No, the box is too heavy', ico: '📦' }, { txt: 'Yes, the classroom is blank', ico: '🏫' }, { txt: 'The sheep is seventy years old', ico: '🐑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đủ Khỏe Chưa?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ chuẩn bị vài món đồ như quyển sách dày, cái thước, chiếc hộp rỗng. Bố/mẹ cầm từng món và hỏi: <i>"Is it too heavy?"</i>.',
              '<b>Bước 2:</b> Con thử nhấc rồi trả lời: <i>"It is too heavy!"</i> hoặc <i>"I am strong enough!"</i>.',
              '<b>Bước 3:</b> Đổi vai: con chọn một món đồ và hỏi bố/mẹ. Cả nhà cùng đếm số món "too heavy" và số món "light enough" bằng tiếng Anh.'
            ]
          }
        },
        {
          id: '3.4C', name: 'Bài 3.4C: Mời và nhờ vả lịch sự',
          grammar: {
            formulas: ['🙏 Could + 👦 you + 🪣 pass the bucket?', '🤝 Shall + 👨‍👩‍👧 we + 🎞️ go to the cinema?', '😊 I + 💭 would like + 🏀 to play'],
            tip: 'Could you...? là nhờ giúp lịch sự • Shall we...? là rủ cùng làm • would like to... là "muốn" nói nhẹ nhàng, không cần thêm -s!'
          },
          chunks: [
            { scene: '🙏👦🪣', full: 'Could you pass me the bucket', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'pass me the bucket',ico:'🪣',c:'o'}], traceWord: 'bucket' },
            { scene: '🙏🚪🛁', full: 'Could you open the bathroom door', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'open the bathroom door',ico:'🛁',c:'o'}], traceWord: 'bathroom' },
            { scene: '👨‍👩‍👧🎞️🍿', full: 'Shall we go to the cinema', parts: [{t:'Shall',ico:'🤝',c:'v'}, {t:'we',ico:'👨‍👩‍👧',c:'s'}, {t:'go to the cinema',ico:'🎞️',c:'o'}], traceWord: 'cinema' },
            { scene: '👧👦🏀🏫', full: 'Shall we play basketball after school', parts: [{t:'Shall',ico:'🤝',c:'v'}, {t:'we',ico:'👧👦',c:'s'}, {t:'play basketball after school',ico:'🏀',c:'o'}], traceWord: 'basketball' },
            { scene: '👨‍👩‍👧✈️👀', full: 'We would like to see an airplane', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'would like',ico:'💭',c:'v'}, {t:'to see an airplane',ico:'✈️',c:'o'}], traceWord: 'airplane' },
            { scene: '👦📚✏️', full: 'I would like to do my homework now', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would like',ico:'💭',c:'v'}, {t:'to do my homework now',ico:'📚',c:'o'}], traceWord: 'homework' },
            { scene: '🙏👦🖼️🧱', full: 'Could you put the poster on the wall', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'put the poster on the wall',ico:'🖼️',c:'o'}], traceWord: 'poster' },
            { scene: '👨‍👩‍👧🛫🚕', full: 'Shall we go to the airport', parts: [{t:'Shall',ico:'🤝',c:'v'}, {t:'we',ico:'👨‍👩‍👧',c:'s'}, {t:'go to the airport',ico:'🛫',c:'o'}], traceWord: 'airport' }
          ],
          qaList: [
            { q: 'Pardon? What do you see?', scene: '🐍😮', ans: 'I see a big snake', opts: [{ txt: 'I see a big snake', ico: '🐍' }, { txt: 'I see a white ghost', ico: '👻' }, { txt: 'I see a basketball', ico: '🏀' }] },
            { q: 'Shall we play baseball today?', scene: '⚾👧👦', ans: 'Yes, let us play baseball', opts: [{ txt: 'Yes, let us play baseball', ico: '⚾' }, { txt: 'My apron is very clean', ico: '👩‍🍳' }, { txt: 'The bucket is full', ico: '🪣' }] },
            { q: 'Are you awake right now?', scene: '👦😳☀️', ans: 'Yes, I am awake now', opts: [{ txt: 'Yes, I am awake now', ico: '😳' }, { txt: 'The poster is on the wall', ico: '🖼️' }, { txt: 'It is a big airplane', ico: '✈️' }] },
            { q: 'Who is clever in your family?', scene: '👧🧠📚', ans: 'My sister is very clever', opts: [{ txt: 'My sister is very clever', ico: '🧠' }, { txt: 'The airport is very big', ico: '🛫' }, { txt: 'The bathroom is very hot', ico: '🛁' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Xin Mời và Nhờ Lịch Sự',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đặt vài món đồ quanh nhà (cái xô, cuốn sách, cái bóng). Bố/mẹ nhờ con: <i>"Could you pass me the ball?"</i> và con đưa đồ.',
              '<b>Bước 2:</b> Đổi vai: con nhờ bố/mẹ bằng <i>"Could you ...?"</i>. Bố/mẹ nhớ nói <i>"Sure!"</i> khi con nhờ lịch sự, còn nếu con quên "Could you" thì bố/mẹ giả vờ không nghe thấy.',
              '<b>Bước 3:</b> Cả hai rủ nhau bằng <i>"Shall we play basketball?"</i> hoặc <i>"Shall we go to the park?"</i>, rồi trả lời <i>"Yes, let us go!"</i> và cùng làm việc đó.'
            ]
          }
        }
      ]
    },
    '3.5': {
      lessons: [
        {
          id: '3.5A', name: 'Bài 3.5A: Dự đoán thời tiết, thế giới',
          grammar: {
            formulas: ['🐝 The bee + ⚡ will + 🌸 fly to the garden', '👧 Lan + 🚫 won\'t + 🧸 buy a broken toy'],
            tip: 'Sau will / won\'t luôn là động từ nguyên mẫu, không thêm s: will fly, won\'t buy!'
          },
          chunks: [
            { scene: '🐝🌼🌳', full: 'The bee will fly to the garden', parts: [{t:'The bee',ico:'🐝',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'fly to the garden',ico:'🌳',c:'o'}], traceWord: 'bee' },
            { scene: '🦋🌸☀️', full: 'The butterfly will sit on the flower', parts: [{t:'The butterfly',ico:'🦋',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'sit on the flower',ico:'🌸',c:'o'}], traceWord: 'butterfly' },
            { scene: '👦🚲🛒', full: 'Tom will buy a bicycle tomorrow', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'buy a bicycle tomorrow',ico:'🚲',c:'o'}], traceWord: 'bicycle' },
            { scene: '🎂🎈🎉', full: 'My birthday party will be fun', parts: [{t:'My birthday party',ico:'🎂',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'be fun',ico:'🎉',c:'o'}], traceWord: 'birthday' },
            { scene: '👧🍔🍪', full: 'Mai will eat a burger and a biscuit', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'eat a burger and a biscuit',ico:'🍔🍪',c:'o'}], traceWord: 'burger' },
            { scene: '👩🫘🧈', full: 'Mum will cook beans with butter', parts: [{t:'Mum',ico:'👩',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'cook beans with butter',ico:'🫘🧈',c:'o'}], traceWord: 'beans' },
            { scene: '👧💔🧸', full: 'Lan won\'t buy a broken toy', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'won\'t',ico:'🚫',c:'v'}, {t:'buy a broken toy',ico:'💔',c:'o'}], traceWord: 'broken' },
            { scene: '🏢🥇🏙️', full: 'This building will be the best in town', parts: [{t:'This building',ico:'🏢',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'be the best in town',ico:'🥇',c:'o'}], traceWord: 'building' }
          ],
          qaList: [
            { q: 'Where will you buy a book?', scene: '📖🛒👦', ans: 'I will go to the bookstore', opts: [{ txt: 'I will go to the bookstore', ico: '📖' }, { txt: 'I will eat soup', ico: '🍲' }, { txt: 'It is cloudy', ico: '☁️' }] },
            { q: 'Will the film be boring?', scene: '🎬😴❓', ans: 'No, it won\'t be boring', opts: [{ txt: 'No, it won\'t be boring', ico: '🎬' }, { txt: 'Yes, I have a pen', ico: '✏️' }, { txt: 'It is in the box', ico: '📦' }] },
            { q: 'Who will come to the party?', scene: '🎉👧👦', ans: 'Her boyfriend will come', opts: [{ txt: 'Her boyfriend will come', ico: '👦' }, { txt: 'Two big cakes', ico: '🍰' }, { txt: 'In the garden', ico: '🌳' }] },
            { q: 'Will the weather be better tomorrow?', scene: '🌤️📈❓', ans: 'Yes, it will be better', opts: [{ txt: 'Yes, it will be better', ico: '📈' }, { txt: 'I have a red hat', ico: '🎩' }, { txt: 'She is in the kitchen', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Nhà tiên tri nhí',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ và con ngồi cạnh cửa sổ, nhìn trời rồi đoán ngày mai. Bố/mẹ nói mẫu <i>"It will be sunny tomorrow."</i> và cho con lặp lại.',
              '<b>Bước 2:</b> Con thay phiên đoán điều sẽ xảy ra với đồ chơi hoặc đồ ăn có sẵn: <i>"Mum will cook beans."</i> Đoán đúng thì bố/mẹ vỗ tay, đoán chưa chắc thì nói <i>"It won\'t be boring."</i>',
              '<b>Bước 3:</b> Con viết hoặc vẽ ba lời hứa nhỏ, ví dụ <i>"I will help Mum."</i> và <i>"I won\'t be late."</i> rồi dán lên tủ lạnh để cả nhà cùng nhớ.'
            ]
          }
        },
        {
          id: '3.5B', name: 'Bài 3.5B: Trước và sau khi...',
          grammar: {
            formulas: ['👦 I + ⚡ eat + 🍪 a cookie after dinner', '🚌 He + ⏳ waits + 🛑 until the bus comes'],
            tip: 'before = trước khi, after = sau khi, when = khi, until = cho đến khi; sau từ nối là một câu đủ chủ ngữ và động từ!'
          },
          chunks: [
            { scene: '👦👋🏠', full: 'I say bye before I go home', parts: [{t:'I',ico:'👦',c:'s'}, {t:'say',ico:'🗣️',c:'v'}, {t:'bye before I go home',ico:'👋',c:'o'}], traceWord: 'bye' },
            { scene: '👨‍👩‍👧📺🍽️', full: 'We watch a cartoon after dinner', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'watch',ico:'👀',c:'v'}, {t:'a cartoon after dinner',ico:'📺',c:'o'}], traceWord: 'cartoon' },
            { scene: '👨🛋️🍽️', full: 'Daddy sits on the couch after lunch', parts: [{t:'Daddy',ico:'👨',c:'s'}, {t:'sits',ico:'⚡',c:'v'}, {t:'on the couch after lunch',ico:'🛋️',c:'o'}], traceWord: 'couch' },
            { scene: '🧑‍🎓🥤☀️', full: 'My classmate drinks a coke when he is hot', parts: [{t:'My classmate',ico:'🧑‍🎓',c:'s'}, {t:'drinks',ico:'⚡',c:'v'}, {t:'a coke when he is hot',ico:'🥤',c:'o'}], traceWord: 'coke' },
            { scene: '👧🌽🍪', full: 'We eat corn before we eat a cookie', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'eat',ico:'😋',c:'v'}, {t:'corn before we eat a cookie',ico:'🌽🍪',c:'o'}], traceWord: 'cookie' },
            { scene: '☕🔒🕘', full: 'The cafe is closed until nine o\'clock', parts: [{t:'The cafe',ico:'☕',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'closed until nine o\'clock',ico:'🔒',c:'o'}], traceWord: 'closed' },
            { scene: '👧🧵✂️', full: 'Mai cuts the cloth before she makes a dress', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'cuts',ico:'✂️',c:'v'}, {t:'the cloth before she makes a dress',ico:'🧵',c:'o'}], traceWord: 'cloth' },
            { scene: '👮🥰🚌', full: 'The cute cop waits until the bus comes', parts: [{t:'The cute cop',ico:'👮',c:'s'}, {t:'waits',ico:'⏳',c:'v'}, {t:'until the bus comes',ico:'🚌',c:'o'}], traceWord: 'cute' }
          ],
          qaList: [
            { q: 'When do you listen to the CD?', scene: '💿🎵🏫', ans: 'I listen to a CD after school', opts: [{ txt: 'I listen to a CD after school', ico: '💿' }, { txt: 'We have a big dog', ico: '🐕' }, { txt: 'It is a green bus', ico: '🚌' }] },
            { q: 'Will you go out when it is cloudy?', scene: '☁️☂️👧', ans: 'Yes, I will take an umbrella', opts: [{ txt: 'Yes, I will take an umbrella', ico: '☂️' }, { txt: 'I have two books', ico: '📚' }, { txt: 'She is nine years old', ico: '9️⃣' }] },
            { q: 'Who sits with you in class?', scene: '🏫🧑‍🎓🪑', ans: 'My classmate sits with me', opts: [{ txt: 'My classmate sits with me', ico: '🧑‍🎓' }, { txt: 'A big red apple', ico: '🍎' }, { txt: 'It is five o\'clock', ico: '🕔' }] },
            { q: 'Where does daddy wait?', scene: '👨☕⏳', ans: 'He waits at the cafe', opts: [{ txt: 'He waits at the cafe', ico: '☕' }, { txt: 'He is eleven', ico: '1️⃣1️⃣' }, { txt: 'It is very cold', ico: '🥶' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Trước và sau',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ làm một việc nhỏ như rửa tay, ăn bánh, xem hoạt hình. Con nhìn rồi nói <i>"Mum washes her hands before dinner."</i>',
              '<b>Bước 2:</b> Đổi vai. Con làm hai việc liên tiếp, bố/mẹ nói câu với <i>after</i> hoặc <i>before</i>, ví dụ <i>"I eat a cookie after I wash my hands."</i>',
              '<b>Bước 3:</b> Chơi trò chờ đợi: bố/mẹ đếm đến mười, con đứng yên và nói <i>"I wait until you say go."</i> Hết giờ cả nhà cùng nói <i>"Bye!"</i>'
            ]
          }
        },
        {
          id: '3.5C', name: 'Bài 3.5C: Kể lại một câu chuyện',
          grammar: {
            formulas: ['👧 Lan + ⚡ found + 🪆 a doll and a drum', '👧 She + ⚡ was dancing + 🧚 with a fairy'],
            tip: 'Kể chuyện: First, next, then để xếp thứ tự; and = và, but = nhưng, so = nên. Việc đã xong dùng quá khứ, việc đang diễn ra dùng was + -ing!'
          },
          chunks: [
            { scene: '👧🪆🥁', full: 'Lan found a doll and a drum', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'found',ico:'🔍',c:'v'}, {t:'a doll and a drum',ico:'🪆🥁',c:'o'}], traceWord: 'doll' },
            { scene: '👧💃🧚', full: 'Then she was dancing with a fairy', parts: [{t:'Then she',ico:'👧',c:'s'}, {t:'was dancing',ico:'💃',c:'v'}, {t:'with a fairy',ico:'🧚',c:'o'}], traceWord: 'dancing' },
            { scene: '🌫️📀🏠', full: 'It was foggy so we watched a DVD', parts: [{t:'It',ico:'🌫️',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'foggy so we watched a DVD',ico:'📀',c:'o'}], traceWord: 'foggy' },
            { scene: '🎣🐟😄', full: 'We went fishing and had fun', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'went',ico:'🚶',c:'v'}, {t:'fishing and had fun',ico:'🎣',c:'o'}], traceWord: 'fishing' },
            { scene: '👇📅🎉', full: 'The following day was exciting', parts: [{t:'The following day',ico:'👇',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'exciting',ico:'🎉',c:'o'}], traceWord: 'following' },
            { scene: '👦🤩😴', full: 'I was excited but she was tired', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'excited but she was tired',ico:'🤩',c:'o'}], traceWord: 'excited' },
            { scene: '👩🍲😋', full: 'Mum cooked dinner and it was delicious', parts: [{t:'Mum',ico:'👩',c:'s'}, {t:'cooked',ico:'🍳',c:'v'}, {t:'dinner and it was delicious',ico:'😋',c:'o'}], traceWord: 'delicious' },
            { scene: '👦🗑️🪑', full: 'Tom took out the garbage then sat down', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'took out',ico:'⚡',c:'v'}, {t:'the garbage then sat down',ico:'🗑️',c:'o'}], traceWord: 'garbage' }
          ],
          qaList: [
            { q: 'What was your feeling at the end?', scene: '❤️😊🌅', ans: 'I had a good feeling', opts: [{ txt: 'I had a good feeling', ico: '❤️' }, { txt: 'Two red balls', ico: '🔴' }, { txt: 'In the kitchen', ico: '🍳' }] },
            { q: 'Who did you meet at the cafe?', scene: '☕🌍👋', ans: 'I met a foreigner', opts: [{ txt: 'I met a foreigner', ico: '🌍' }, { txt: 'It was foggy', ico: '🌫️' }, { txt: 'She has a doll', ico: '🪆' }] },
            { q: 'Who did he meet at the park?', scene: '🌳👦💑', ans: 'He met his girlfriend', opts: [{ txt: 'He met his girlfriend', ico: '💑' }, { txt: 'It was a green kite', ico: '🪁' }, { txt: 'We had two eggs', ico: '🥚' }] },
            { q: 'What did you do first?', scene: '1️⃣🧼🙌', ans: 'First I washed my hands', opts: [{ txt: 'First I washed my hands', ico: '🧼' }, { txt: 'He is very tall', ico: '🧍' }, { txt: 'On the red chair', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Kể chuyện nối tiếp',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy ba món đồ chơi (búp bê, cái trống...) đặt trước mặt. Bố/mẹ mở đầu: <i>"First, Lan found a doll."</i>',
              '<b>Bước 2:</b> Con nối câu tiếp theo bằng <i>then</i>, <i>and</i>, <i>but</i> hoặc <i>so</i>, ví dụ <i>"Then she was dancing."</i> Cả hai thay phiên kể thêm ba câu.',
              '<b>Bước 3:</b> Con kể lại cả câu chuyện từ đầu, vừa nói vừa chỉ từng món đồ chơi. Kể xong, bố/mẹ hỏi <i>"Was it exciting?"</i> để con trả lời.'
            ]
          }
        }
      ]
    },
    '3.6': {
      lessons: [
        {
          id: '3.6A', name: 'Bài 3.6A: Quê nhà, nhà cửa và gia đình ngày xưa',
          grammar: {
            formulas: ['📍 There + ⏪ was + 🏠 a big house', '📍 There + ⏪ were + 👓 two glasses', '📍 There + 🚫 wasn\'t / weren\'t + 🍔 a shop'],
            tip: 'Ngày xưa chỉ có 1 thứ thì dùng "was", có nhiều thứ thì dùng "were" • Hỏi thì đảo lên đầu: "Was there...?"'
          },
          chunks: [
            { scene: '🍇🌳🏡', full: 'There was a grape tree in my hometown', parts: [{t:'There',ico:'📍',c:'s'}, {t:'was',ico:'⏪',c:'v'}, {t:'a grape tree in my hometown',ico:'🍇🌳',c:'o'}], traceWord: 'grape' },
            { scene: '👓👓🪑', full: 'There were two old glasses on the table', parts: [{t:'There',ico:'📍',c:'s'}, {t:'were',ico:'⏪',c:'v'}, {t:'two old glasses on the table',ico:'👓',c:'o'}], traceWord: 'glasses' },
            { scene: '🍔🏪🚫', full: 'There wasn\'t a hamburger shop near here', parts: [{t:'There',ico:'📍',c:'s'}, {t:'wasn\'t',ico:'🚫',c:'v'}, {t:'a hamburger shop near here',ico:'🍔🏪',c:'o'}], traceWord: 'hamburger' },
            { scene: '🌾🏘️🚗🚫', full: 'There weren\'t many cars in the village', parts: [{t:'There',ico:'📍',c:'s'}, {t:'weren\'t',ico:'🚫',c:'v'}, {t:'many cars in the village',ico:'🚗🏘️',c:'o'}], traceWord: 'village' },
            { scene: '🌷🏠❓', full: 'Was there a garden at his house', parts: [{t:'Was',ico:'❓',c:'v'}, {t:'there',ico:'📍',c:'s'}, {t:'a garden at his house',ico:'🌷🏠',c:'o'}], traceWord: 'garden' },
            { scene: '📷👴❤️', full: 'There was a photo of my grandpa', parts: [{t:'There',ico:'📍',c:'s'}, {t:'was',ico:'⏪',c:'v'}, {t:'a photo of my grandpa',ico:'📷👴',c:'o'}], traceWord: 'grandpa' },
            { scene: '🎨🏫👧', full: 'There was a hobby club at her school', parts: [{t:'There',ico:'📍',c:'s'}, {t:'was',ico:'⏪',c:'v'}, {t:'a hobby club at her school',ico:'🎨🏫',c:'o'}], traceWord: 'hobby' },
            { scene: '👴👵🏠', full: 'There were two grandparents at the old house', parts: [{t:'There',ico:'📍',c:'s'}, {t:'were',ico:'⏪',c:'v'}, {t:'two grandparents at the old house',ico:'👴👵',c:'o'}], traceWord: 'grandparents' }
          ],
          qaList: [
            { q: 'What did your grandfather have?', scene: '👴👓', ans: 'He had old glasses', opts: [{ txt: 'He had old glasses', ico: '👓' }, { txt: 'It is on the bus', ico: '🚌' }, { txt: 'Two big cats', ico: '🐱' }] },
            { q: 'Was there a haircut shop near your house?', scene: '💇🏠', ans: 'Yes, there was', opts: [{ txt: 'Yes, there was', ico: '💇' }, { txt: 'It is his hat', ico: '🎩' }, { txt: 'Two big cats', ico: '🐱' }] },
            { q: 'Who was the handsome man?', scene: '😎👴', ans: 'He was my grandfather', opts: [{ txt: 'He was my grandfather', ico: '👴' }, { txt: 'It was a big bus', ico: '🚌' }, { txt: 'There were two cups', ico: '☕' }] },
            { q: 'Is the book hers?', scene: '📖👩', ans: 'Yes, it is hers', opts: [{ txt: 'Yes, it is hers', ico: '👩' }, { txt: 'Yes, I see him', ico: '👨' }, { txt: 'No, there were', ico: '🚫' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thám Tử Quê Nhà Ngày Xưa',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ kể về nơi mình từng sống hồi nhỏ và hỏi con: <i>"Was there a garden at my house?"</i>. Con đoán rồi trả lời <i>"Yes, there was"</i> hoặc <i>"No, there wasn\'t"</i>.',
              '<b>Bước 2:</b> Bố/mẹ lấy ảnh cũ của ông bà hoặc gia đình ra. Con chỉ vào ảnh và nói: <i>"There was a photo of my grandpa"</i> hoặc <i>"There were two old glasses"</i>.',
              '<b>Bước 3:</b> Đổi vai: con hỏi bố/mẹ <i>"Was there...?"</i> về quê nhà ngày xưa, bố/mẹ trả lời bằng <i>"there was"</i> hoặc <i>"there were"</i>.'
            ]
          }
        },
        {
          id: '3.6B', name: 'Bài 3.6B: Ngày xưa và bây giờ, đồ chơi và trò chơi',
          grammar: {
            formulas: ['👦 I + ⏪ used to + 🧃 drink juice', '👧 She + 🚫 didn\'t use to + 🌐 have the internet', '❓ Did + 👦 you + ⏪ use to + 🧸 play?'],
            tip: '"Used to" nghĩa là ngày xưa hay làm, giờ không làm nữa • Sau "used to" luôn là động từ gốc; có "did / didn\'t" thì "use to" bỏ chữ d!'
          },
          chunks: [
            { scene: '👦🧃😋', full: 'I used to drink juice', parts: [{t:'I',ico:'👦',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'drink juice',ico:'🧃',c:'o'}], traceWord: 'juice' },
            { scene: '👨‍👩‍👧🌐🚫', full: 'We didn\'t use to have the internet', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'didn\'t use to',ico:'🚫',c:'v'}, {t:'have the internet',ico:'🌐',c:'o'}], traceWord: 'internet' },
            { scene: '👧👖☀️', full: 'She used to wear jeans every day', parts: [{t:'She',ico:'👧',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'wear jeans every day',ico:'👖',c:'o'}], traceWord: 'jeans' },
            { scene: '👵💍✨', full: 'Grandma used to wear nice jewelry', parts: [{t:'Grandma',ico:'👵',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'wear nice jewelry',ico:'💍',c:'o'}], traceWord: 'jewelry' },
            { scene: '👦🦁😨', full: 'I used to be afraid of lions', parts: [{t:'I',ico:'👦',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'be afraid of lions',ico:'🦁😨',c:'o'}], traceWord: 'lions' },
            { scene: '👦🏠😔', full: 'He used to feel lonely at home', parts: [{t:'He',ico:'👦',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'feel lonely at home',ico:'😔🏠',c:'o'}], traceWord: 'lonely' },
            { scene: '👨🗓️⏳', full: 'Dad used to have a meeting later', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'have a meeting later',ico:'🗓️⏳',c:'o'}], traceWord: 'meeting' },
            { scene: '👦➗🤩', full: 'I used to be interested in math', parts: [{t:'I',ico:'👦',c:'s'}, {t:'used to',ico:'⏪',c:'v'}, {t:'be interested in math',ico:'🤩➗',c:'o'}], traceWord: 'interested' }
          ],
          qaList: [
            { q: 'Was the old jet interesting?', scene: '🛩️✨', ans: 'Yes, it was interesting', opts: [{ txt: 'Yes, it was interesting', ico: '✨' }, { txt: 'No, I am not', ico: '🚫' }, { txt: 'Yes, he did', ico: '👦' }] },
            { q: 'Did you use to play in the living room?', scene: '🛋️🧸', ans: 'Yes, I did', opts: [{ txt: 'Yes, I did', ico: '🛋️' }, { txt: 'Yes, he is', ico: '👦' }, { txt: 'No, there were', ico: '🚫' }] },
            { q: 'What flower did Mai use to grow?', scene: '👧🌸🌱', ans: 'She used to grow lilies', opts: [{ txt: 'She used to grow lilies', ico: '🌸' }, { txt: 'She used to ride a bus', ico: '🚌' }, { txt: 'She used to cut her hair', ico: '💇' }] },
            { q: 'Where did the lion use to sleep?', scene: '🦁😴🏠', ans: 'It used to sleep in its house', opts: [{ txt: 'It used to sleep in its house', ico: '🏠' }, { txt: 'It used to drive a bus', ico: '🚌' }, { txt: 'It used to read a book', ico: '📖' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Ngày Xưa Khác Bây Giờ',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy 3 món đồ chơi hoặc đồ dùng hiện đại (điện thoại, máy tính...) và kể ngày xưa mình không có: <i>"We didn\'t use to have the internet"</i>.',
              '<b>Bước 2:</b> Bố/mẹ hỏi con <i>"Did you use to play with this toy?"</i>. Con trả lời <i>"Yes, I did"</i> hoặc <i>"No, I didn\'t"</i> rồi nói thêm <i>"I used to..."</i>.',
              '<b>Bước 3:</b> Cả nhà thi nhau nói câu <i>"I used to..."</i> về chính mình hồi nhỏ, ai nói được nhiều câu đúng nhất thì thắng.'
            ]
          }
        },
        {
          id: '3.6C', name: 'Bài 3.6C: Tự chăm sóc bản thân, việc nhà',
          grammar: {
            formulas: ['👦 I + 💪 can dress + 🪞 myself', '👧 You + 💪 can wash + 🪞 yourself', '👦 He + ✋ draws + 🖼️ a painting by himself'],
            tip: 'Tự mình làm thì thêm "-self": I → myself, you → yourself, he → himself, they → themselves • "by myself" nghĩa là một mình, không ai giúp!'
          },
          chunks: [
            { scene: '👦👕🕖', full: 'I can dress myself at seven o\'clock', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can dress',ico:'💪',c:'v'}, {t:'myself at seven o\'clock',ico:'🪞🕖',c:'o'}], traceWord: 'o\'clock' },
            { scene: '👧👖🧼', full: 'You can wash your pants yourself', parts: [{t:'You',ico:'👧',c:'s'}, {t:'can wash',ico:'🧼',c:'v'}, {t:'your pants yourself',ico:'👖',c:'o'}], traceWord: 'pants' },
            { scene: '👦🖼️🎨', full: 'He draws a painting by himself', parts: [{t:'He',ico:'👦',c:'s'}, {t:'draws',ico:'🖍️',c:'v'}, {t:'a painting by himself',ico:'🖼️',c:'o'}], traceWord: 'painting' },
            { scene: '👦👧🏰🧱', full: 'They can build a palace themselves', parts: [{t:'They',ico:'👦👧',c:'s'}, {t:'can build',ico:'🧱',c:'v'}, {t:'a palace themselves',ico:'🏰',c:'o'}], traceWord: 'palace' },
            { scene: '👦📓🔍', full: 'I can find my notebook by myself', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can find',ico:'🔍',c:'v'}, {t:'my notebook by myself',ico:'📓',c:'o'}], traceWord: 'notebook' },
            { scene: '👩👧💬👍', full: 'Mommy said you can do it by yourself', parts: [{t:'Mommy',ico:'👩‍👧',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'you can do it by yourself',ico:'👍',c:'o'}], traceWord: 'mommy' },
            { scene: '👦✏️📝', full: 'He can write with a pencil himself', parts: [{t:'He',ico:'👦',c:'s'}, {t:'can write',ico:'📝',c:'v'}, {t:'with a pencil himself',ico:'✏️',c:'o'}], traceWord: 'pencil' },
            { scene: '👦👧🎲🎄', full: 'They played a merry game by themselves', parts: [{t:'They',ico:'👦👧',c:'s'}, {t:'played',ico:'🎲',c:'v'}, {t:'a merry game by themselves',ico:'🎄🎲',c:'o'}], traceWord: 'merry' }
          ],
          qaList: [
            { q: 'What is Tom\'s nationality?', scene: '🛂👦', ans: 'He is from Vietnam', opts: [{ txt: 'He is from Vietnam', ico: '🛂' }, { txt: 'He likes red pants', ico: '👖' }, { txt: 'He is at seven o\'clock', ico: '🕖' }] },
            { q: 'Can you watch the Olympics by yourself?', scene: '🏅📺', ans: 'Ok, I can watch it myself', opts: [{ txt: 'Ok, I can watch it myself', ico: '👌' }, { txt: 'It is in the river', ico: '🌊' }, { txt: 'Two pizzas, please', ico: '🍕' }] },
            { q: 'Is this our painting?', scene: '🖼️👥', ans: 'Yes, it is ours', opts: [{ txt: 'Yes, it is ours', ico: '👥' }, { txt: 'No, I am ten', ico: '🔟' }, { txt: 'It is a big bus', ico: '🚌' }] },
            { q: 'What does your mum say?', scene: '👩💬', ans: 'Mum says do it yourself', opts: [{ txt: 'Mum says do it yourself', ico: '👩' }, { txt: 'Mum is a red apple', ico: '🍎' }, { txt: 'It is in the bag', ico: '🎒' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Bé Tự Làm Một Mình',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đặt ra 4 việc nhỏ: mặc áo, xếp sổ tay, cất bút chì, rửa tay. Mỗi lần bố/mẹ hỏi <i>"Can you do it by yourself?"</i>.',
              '<b>Bước 2:</b> Con làm từng việc và nói to <i>"I can do it myself!"</i> hoặc <i>"I can find my notebook by myself"</i>.',
              '<b>Bước 3:</b> Đổi vai: bố/mẹ làm một việc nhà, con nói về bố/mẹ bằng <i>"He..."</i> hoặc <i>"She..."</i> rồi nhắc lại bằng <i>"by himself"</i> hoặc <i>"by themselves"</i> nếu có nhiều người làm.'
            ]
          }
        }
      ]
    },
    '3.7': {
      lessons: [
        {
          id: '3.7A', name: 'Bài 3.7A: Đi quanh thành phố',
          grammar: {
            formulas: ['🐰 The rabbit + 🦘 jumps + 🎀 over the ribbon', '🤴 The prince + 🚶 walks + 🌊 along the river', '👸 The princess + 🏃 runs + 🍕 into the pizza shop'],
            tip: 'Đi xuyên qua = through, băng ngang = across, đi dọc = along, bên trên = over, bên dưới = under, đi vào = into, đi ra = out of!'
          },
          chunks: [
            { scene: '🐰🎀⬆️', full: 'The rabbit jumps over the ribbon', parts: [{t:'The rabbit',ico:'🐰',c:'s'}, {t:'jumps',ico:'🦘',c:'v'}, {t:'over the ribbon',ico:'🎀',c:'o'}], traceWord: 'rabbit' },
            { scene: '🤴🚶🌊', full: 'The prince walks along the river', parts: [{t:'The prince',ico:'🤴',c:'s'}, {t:'walks',ico:'🚶',c:'v'}, {t:'along the river',ico:'🌊',c:'o'}], traceWord: 'prince' },
            { scene: '👸🍕🏪', full: 'The princess walks into the pizza shop', parts: [{t:'The princess',ico:'👸',c:'s'}, {t:'walks',ico:'🚶',c:'v'}, {t:'into the pizza shop',ico:'🍕',c:'o'}], traceWord: 'pizza' },
            { scene: '⛵🌉👨', full: 'The sailor goes across the bridge', parts: [{t:'The sailor',ico:'⛵',c:'s'}, {t:'goes',ico:'🚶',c:'v'}, {t:'across the bridge',ico:'🌉',c:'o'}], traceWord: 'sailor' },
            { scene: '🐶🟣🪑', full: 'My pet runs under the purple table', parts: [{t:'My pet',ico:'🐶',c:'s'}, {t:'runs',ico:'🏃',c:'v'}, {t:'under the purple table',ico:'🟣',c:'o'}], traceWord: 'purple' },
            { scene: '👨‍👩‍👧🌳🧺', full: 'We walk through the park with a picnic', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'walk',ico:'🚶',c:'v'}, {t:'through the park with a picnic',ico:'🧺',c:'o'}], traceWord: 'picnic' },
            { scene: '👩🌹👜', full: 'Mom takes a rose out of the bag', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'takes',ico:'🤲',c:'v'}, {t:'a rose out of the bag',ico:'🌹',c:'o'}], traceWord: 'rose' },
            { scene: '👨‍👩‍👧🛍️📅', full: 'We go shopping along the street in September', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'go',ico:'🚶',c:'v'}, {t:'shopping along the street in September',ico:'🛍️',c:'o'}], traceWord: 'shopping' }
          ],
          qaList: [
            { q: 'Where does the sailor go?', scene: '⛵🌉', ans: 'He goes across the bridge', opts: [{ txt: 'He goes across the bridge', ico: '🌉' }, { txt: 'She eats a salad', ico: '🥗' }, { txt: 'It is purple', ico: '🟣' }] },
            { q: 'What does the girl eat?', scene: '👧🥪😋', ans: 'She eats a sandwich', opts: [{ txt: 'She eats a sandwich', ico: '🥪' }, { txt: 'She walks along the river', ico: '🌊' }, { txt: 'The rabbit is purple', ico: '🐰' }] },
            { q: 'Is the princess rude?', scene: '👸😊', ans: 'No, she is very nice', opts: [{ txt: 'No, she is very nice', ico: '😊' }, { txt: 'Into the shop', ico: '🏪' }, { txt: 'A big rabbit', ico: '🐰' }] },
            { q: 'Where does mom take the pet?', scene: '👩🐶🏠', ans: 'She takes it out of the house', opts: [{ txt: 'She takes it out of the house', ico: '🏠' }, { txt: 'It is September', ico: '📅' }, { txt: 'A purple rose', ico: '🌹' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Chú Thú Cưng Đi Phố',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ dựng "thành phố" trong nhà: ghế là cây cầu, cái bàn là hầm, cửa phòng là cửa hàng, dây là con sông.',
              '<b>Bước 2:</b> Con cầm một món đồ chơi (thú cưng) và đi theo lệnh của bố/mẹ: <i>"Go through the door!"</i>, <i>"Go under the table!"</i>, <i>"Go across the bridge!"</i>.',
              '<b>Bước 3:</b> Đổi vai: con ra lệnh bằng tiếng Anh, bố/mẹ đưa món đồ chơi đi đúng đường và nói lại: <i>"The pet goes along the river."</i>'
            ]
          }
        },
        {
          id: '3.7B', name: 'Bài 3.7B: Rủ nhau đi chơi cuối tuần',
          grammar: {
            formulas: ['❓ Why don\'t + 👥 we + ⚽ play soccer', '💡 How about + 🚇 taking + 📍 the subway', '🙌 Let\'s + 🚶 go + 🛒 to the supermarket'],
            tip: 'Muốn rủ bạn: Why don\'t we + động từ, How about + động từ thêm -ing, hoặc Let\'s + động từ — nói là bạn đồng ý ngay!'
          },
          chunks: [
            { scene: '👧👦⚽☀️', full: 'Why don\'t we play soccer today', parts: [{t:'Why don\'t',ico:'❓',c:'v'}, {t:'we',ico:'👧👦',c:'s'}, {t:'play soccer today',ico:'⚽',c:'o'}], traceWord: 'soccer' },
            { scene: '👨‍👩‍👧🛒🏬', full: 'Let\'s go to the supermarket', parts: [{t:'Let\'s',ico:'🙌',c:'s'}, {t:'go',ico:'🚶',c:'v'}, {t:'to the supermarket',ico:'🛒',c:'o'}], traceWord: 'supermarket' },
            { scene: '👦🚇🚉', full: 'How about taking the subway today', parts: [{t:'How about',ico:'💡',c:'s'}, {t:'taking',ico:'🚇',c:'v'}, {t:'the subway today',ico:'🚉',c:'o'}], traceWord: 'subway' },
            { scene: '👥🛕🌸', full: 'How about visiting their temple', parts: [{t:'How about',ico:'💡',c:'s'}, {t:'visiting',ico:'🚶',c:'v'}, {t:'their temple',ico:'🛕',c:'o'}], traceWord: 'temple' },
            { scene: '👨‍👩‍👧🍲🌞', full: 'Let\'s eat soup in the sunshine', parts: [{t:'Let\'s',ico:'🙌',c:'s'}, {t:'eat',ico:'😋',c:'v'}, {t:'soup in the sunshine',ico:'🍲',c:'o'}], traceWord: 'sunshine' },
            { scene: '👦🏄🌊🏖️', full: 'Let\'s watch the surf at the beach', parts: [{t:'Let\'s',ico:'🙌',c:'s'}, {t:'watch',ico:'👀',c:'v'}, {t:'the surf at the beach',ico:'🏄',c:'o'}], traceWord: 'surf' },
            { scene: '👧👕🛍️', full: 'How about buying a t-shirt today', parts: [{t:'How about',ico:'💡',c:'s'}, {t:'buying',ico:'💰',c:'v'}, {t:'a t-shirt today',ico:'👕',c:'o'}], traceWord: 'buying' },
            { scene: '👨‍👩‍👧🌨️🏠', full: 'Why don\'t we stay home on a snowy day', parts: [{t:'Why don\'t',ico:'❓',c:'v'}, {t:'we',ico:'👨‍👩‍👧',c:'s'}, {t:'stay home on a snowy day',ico:'🌨️',c:'o'}], traceWord: 'snowy' }
          ],
          qaList: [
            { q: 'Is Mai shy?', scene: '👧😳', ans: 'Yes, she is a little shy', opts: [{ txt: 'Yes, she is a little shy', ico: '😳' }, { txt: 'At the supermarket', ico: '🛒' }, { txt: 'Let\'s play soccer', ico: '⚽' }] },
            { q: 'Who is Mr Smith?', scene: '🕵️🔨', ans: 'Mr Smith is a spy', opts: [{ txt: 'Mr Smith is a spy', ico: '🕵️' }, { txt: 'Thanks, Mom', ico: '🙏' }, { txt: 'On the subway', ico: '🚇' }] },
            { q: 'Is smoking good for you?', scene: '🚬🚫', ans: 'No, smoking is bad', opts: [{ txt: 'No, smoking is bad', ico: '🚬' }, { txt: 'Let\'s go to the park', ico: '🌳' }, { txt: 'It is Sunday', ico: '📅' }] },
            { q: 'Whose bag is that?', scene: '👥👜', ans: 'That is their bag', opts: [{ txt: 'That is their bag', ico: '👜' }, { txt: 'It is Sunday', ico: '📅' }, { txt: 'A shy rabbit', ico: '🐰' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Lên Kế Hoạch Cuối Tuần',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ và con vẽ 4 thẻ địa điểm: ⚽ sân bóng, 🛒 siêu thị, 🛕 ngôi đền, 🏖️ bãi biển. Úp các thẻ xuống bàn.',
              '<b>Bước 2:</b> Bố/mẹ lật một thẻ và rủ con: <i>"Why don\'t we play soccer?"</i> hoặc <i>"How about going to the temple?"</i>. Con trả lời <i>"Great idea! Thanks!"</i>.',
              '<b>Bước 3:</b> Đổi vai: con lật thẻ và rủ bố/mẹ bằng <i>"Let\'s ..."</i>. Cả nhà chọn một kế hoạch thật cho cuối tuần này.'
            ]
          }
        },
        {
          id: '3.7C', name: 'Bài 3.7C: Hỏi đường và quy tắc an toàn',
          grammar: {
            formulas: ['🙏 Please + 👈 turn + 🚽 left at the toilet', '🚫 Don\'t + 🏃 run + 🐯 near those tigers', '🙏 Please + 🧘 be + ⚠️ careful'],
            tip: 'Câu mệnh lệnh bắt đầu bằng động từ luôn: Turn left! Muốn cấm thì thêm Don\'t trước động từ, muốn lịch sự thì thêm Please!'
          },
          chunks: [
            { scene: '👈🚽🚶', full: 'Please turn left at the toilet', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'turn',ico:'👈',c:'v'}, {t:'left at the toilet',ico:'🚽',c:'o'}], traceWord: 'toilet' },
            { scene: '🚫🏃🐯', full: 'Don\'t run near those tigers', parts: [{t:'Don\'t',ico:'🚫',c:'s'}, {t:'run',ico:'🏃',c:'v'}, {t:'near those tigers',ico:'🐯',c:'o'}], traceWord: 'tigers' },
            { scene: '🏺👉⚠️', full: 'Please be careful with these vases', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'be',ico:'🧘',c:'v'}, {t:'careful with these vases',ico:'🏺',c:'o'}], traceWord: 'vases' },
            { scene: '☔📅🌧️', full: 'Please take your umbrella on Tuesday', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'take',ico:'🤲',c:'v'}, {t:'your umbrella on Tuesday',ico:'☔',c:'o'}], traceWord: 'umbrella' },
            { scene: '🚫✋🧼', full: 'Don\'t touch them with dirty hands', parts: [{t:'Don\'t',ico:'🚫',c:'s'}, {t:'touch',ico:'✋',c:'v'}, {t:'them with dirty hands',ico:'👥',c:'o'}], traceWord: 'touch' },
            { scene: '📺🔌🙏', full: 'Please turn off the TV now', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'turn off',ico:'🔌',c:'v'}, {t:'the TV now',ico:'📺',c:'o'}], traceWord: 'tv' },
            { scene: '🧴👖🏖️', full: 'Please take a towel and trousers on vacation', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'take',ico:'🤲',c:'v'}, {t:'a towel and trousers on vacation',ico:'🧴',c:'o'}], traceWord: 'towel' },
            { scene: '✏️📖👧', full: 'Please draw an underline under the word', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'draw',ico:'✏️',c:'v'}, {t:'an underline under the word',ico:'✏️',c:'o'}], traceWord: 'underline' }
          ],
          qaList: [
            { q: 'What is red and round?', scene: '🍅🔴', ans: 'It is a tomato', opts: [{ txt: 'It is a tomato', ico: '🍅' }, { txt: 'Turn left', ico: '👈' }, { txt: 'It is Tuesday', ico: '📅' }] },
            { q: 'What is for dinner?', scene: '🦃🍽️', ans: 'We eat turkey for dinner', opts: [{ txt: 'We eat turkey for dinner', ico: '🦃' }, { txt: 'Don\'t run here', ico: '🚫' }, { txt: 'Turn left', ico: '👈' }] },
            { q: 'Where is the toilet?', scene: '🚽❓🚶', ans: 'Go straight and turn left', opts: [{ txt: 'Go straight and turn left', ico: '👈' }, { txt: 'It is a tiger', ico: '🐯' }, { txt: 'Please eat them', ico: '🍽️' }] },
            { q: 'What should I do at the zoo?', scene: '🐯🏞️', ans: 'Don\'t feed the tigers', opts: [{ txt: 'Don\'t feed the tigers', ico: '🚫' }, { txt: 'Touch the tigers', ico: '✋' }, { txt: 'Run to the tigers', ico: '🏃' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Người Dẫn Đường Bịt Mắt',
            steps: [
              '<b>Bước 1:</b> Con bịt mắt (hoặc nhắm mắt), bố/mẹ đặt vài đồ vật làm "chướng ngại" trong phòng, như gối, ô, chai nhựa.',
              '<b>Bước 2:</b> Bố/mẹ dẫn đường bằng lệnh tiếng Anh: <i>"Turn left."</i>, <i>"Go straight."</i>, <i>"Please be careful."</i>, <i>"Don\'t run."</i>. Con đi theo từng lệnh.',
              '<b>Bước 3:</b> Đổi vai: con dẫn bố/mẹ đến "nhà vệ sinh" hoặc chiếc ô bằng các câu mệnh lệnh, nhớ nói <i>"Please"</i> thật lịch sự.'
            ]
          }
        }
      ]
    },
    '3.8': {
      lessons: [
        {
          id: '3.8A', name: 'Bài 3.8A: Chọn món cho bữa tiệc sinh nhật',
          grammar: {
            formulas: ['👫 Both of us + ⚡ like + 🍰 cake', '🙅 Neither of us + ⚡ is + 😋 hungry', '☝️ Either of us + ⚡ can + 🍪 cook'],
            tip: 'Both = cả hai • Neither = không ai trong hai (đã có nghĩa phủ định, đừng thêm not) • Either = một trong hai!'
          },
          chunks: [
            { scene: '👫🏐😄', full: 'Both of us play volleyball', parts: [{t:'Both of us',ico:'👫',c:'s'}, {t:'play',ico:'⚡',c:'v'}, {t:'volleyball',ico:'🏐',c:'o'}], traceWord: 'volleyball' },
            { scene: '🧑‍🍳💁😊', full: 'Both the waiter and the waitress are nice', parts: [{t:'Both the waiter and the waitress',ico:'🧑‍🍳💁',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'nice',ico:'😊',c:'o'}], traceWord: 'waitress' },
            { scene: '🎂🎉❓', full: 'Whose birthday cake is this', parts: [{t:'Whose birthday cake',ico:'🎂',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'this',ico:'👉',c:'o'}], traceWord: 'whose' },
            { scene: '🥤🔴🫵', full: 'The red cup is yours', parts: [{t:'The red cup',ico:'🥤',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'yours',ico:'🫵',c:'o'}], traceWord: 'yours' },
            { scene: '👫🙅🍔', full: 'Neither of us is even hungry', parts: [{t:'Neither of us',ico:'🙅',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'even hungry',ico:'➕🍔',c:'o'}], traceWord: 'even' },
            { scene: '🎵🎉🤩', full: 'Either song can excite the guests', parts: [{t:'Either song',ico:'🎵',c:'s'}, {t:'can excite',ico:'🤩',c:'v'}, {t:'the guests',ico:'👭',c:'o'}], traceWord: 'excite' },
            { scene: '👩👫👌', full: 'Mom gives both of us an okay', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'both of us an okay',ico:'👫👌',c:'o'}], traceWord: 'okay' },
            { scene: '👧🍪⏮️', full: 'Either of us can have the last cookie', parts: [{t:'Either of us',ico:'☝️',c:'s'}, {t:'can have',ico:'⚡',c:'v'}, {t:'the last cookie',ico:'🍪⏮️',c:'o'}], traceWord: 'last' }
          ],
          qaList: [
            { q: 'Do Mom and Dad agree?', scene: '👩👨🤝', ans: 'Yes, they are in accord', opts: [{ txt: 'Yes, they are in accord', ico: '🤝' }, { txt: 'It is on the table', ico: '🍽️' }, { txt: 'Both of us are tired', ico: '🥱' }] },
            { q: 'Do you like the party games?', scene: '🎮🎉🤩', ans: 'Yes, I have an interest in such games', opts: [{ txt: 'Yes, I have an interest in such games', ico: '🤔' }, { txt: 'The cake is under the bed', ico: '🛏️' }, { txt: 'I am in the kitchen', ico: '🍳' }] },
            { q: 'Where are both of your friends from?', scene: '👫🌏❓', ans: 'Both are from my country', opts: [{ txt: 'Both are from my country', ico: '🌏' }, { txt: 'Neither of us has a hat', ico: '🎩' }, { txt: 'It is a red cup', ico: '🥤' }] },
            { q: 'Who will do the next part?', scene: '🧩➡️❓', ans: 'Either of us can do the next part', opts: [{ txt: 'Either of us can do the next part', ico: '➡️🧩' }, { txt: 'They are in the bag', ico: '🎒' }, { txt: 'I like soup and rice', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Chọn Món Cho Bữa Tiệc',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày 2 món (ví dụ 2 loại bánh hoặc 2 loại trái cây) và hỏi con: <i>"Do you like both?"</i>.',
              '<b>Bước 2:</b> Con chỉ vào món và nói <i>"Both of them are nice!"</i>, <i>"Either one is OK!"</i> hoặc <i>"Neither of them is mine!"</i> tùy ý thích.',
              '<b>Bước 3:</b> Đổi vai: con làm nhân viên phục vụ hỏi <i>"Whose cup is this?"</i>, bố/mẹ trả lời <i>"It is yours!"</i>.'
            ]
          }
        },
        {
          id: '3.8B', name: 'Bài 3.8B: Nhận xét món ăn và buổi tiệc',
          grammar: {
            formulas: ['🍰 The cake + ⚡ is + 😋 so sweet', '🏠 It + ⚡ is + 🌟 such a nice party', '👩 Mom + ⚡ seems + 😄 so happy'],
            tip: 'so + tính từ (so sweet) • such a/an + (tính từ) + danh từ (such a nice party) — nhớ có a/an nhé!'
          },
          chunks: [
            { scene: '🎂🍬😋', full: 'The birthday cake is so sweet', parts: [{t:'The birthday cake',ico:'🎂',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so sweet',ico:'🍬',c:'o'}], traceWord: 'sweet' },
            { scene: '👩🧐😄', full: 'Mom seems so happy today', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'seems',ico:'🧐',c:'v'}, {t:'so happy today',ico:'😄',c:'o'}], traceWord: 'seems' },
            { scene: '🗺️🏠🌟', full: 'This area is such a nice place', parts: [{t:'This area',ico:'🗺️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'such a nice place',ico:'🌟',c:'o'}], traceWord: 'area' },
            { scene: '🍲🔥🤷', full: 'The food might be so hot', parts: [{t:'The food',ico:'🍲',c:'s'}, {t:'might be',ico:'🤷',c:'v'}, {t:'so hot',ico:'🔥',c:'o'}], traceWord: 'might' },
            { scene: '👭🎉⏳', full: 'We were so happy during the party', parts: [{t:'We',ico:'👭',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'so happy during the party',ico:'😄⏳',c:'o'}], traceWord: 'during' },
            { scene: '👨🎂🤲', full: 'Dad will provide such a big cake', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'will provide',ico:'🤲',c:'v'}, {t:'such a big cake',ico:'🎂',c:'o'}], traceWord: 'provide' },
            { scene: '🎉🎮🤏', full: 'The party includes so few games', parts: [{t:'The party',ico:'🎉',c:'s'}, {t:'includes',ico:'📎',c:'v'}, {t:'so few games',ico:'🤏🎮',c:'o'}], traceWord: 'includes' },
            { scene: '👧😄🍰⏱️', full: 'Lan is so happy while she eats cake', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so happy while she eats cake',ico:'😄⏱️🍰',c:'o'}], traceWord: 'while' }
          ],
          qaList: [
            { q: 'What is the fact about the cake?', scene: '🎂📌😋', ans: 'It is such a sweet cake', opts: [{ txt: 'It is such a sweet cake', ico: '🎂' }, { txt: 'I am at the bank', ico: '🏦' }, { txt: 'Two cats are under the bed', ico: '🐱' }] },
            { q: 'Did you read the report on the party?', scene: '📄🎉👀', ans: 'Yes, however it was such a long report', opts: [{ txt: 'Yes, however it was such a long report', ico: '📄' }, { txt: 'The cup is on the table', ico: '🥤' }, { txt: 'My dog is very cute', ico: '🐶' }] },
            { q: 'Do you follow the kitchen system?', scene: '💻👣🍳', ans: 'Yes, it is so easy to follow', opts: [{ txt: 'Yes, it is so easy to follow', ico: '👣' }, { txt: 'She is a nice doctor', ico: '🧑‍⚕️' }, { txt: 'We are at the zoo', ico: '🦁' }] },
            { q: 'How are you since the party?', scene: '🎉📅😄', ans: 'I am in a happy state', opts: [{ txt: 'I am in a happy state', ico: '🏛️😄' }, { txt: 'It is under the chair', ico: '🪑' }, { txt: 'The bus is red', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Nhà Phê Bình Ẩm Thực',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày một món ăn nhẹ (bánh, trái cây) và cùng con ngửi, nếm thử như đầu bếp thật.',
              '<b>Bước 2:</b> Con nhận xét thật to: <i>"It is so sweet!"</i> hoặc <i>"This is such a nice cake!"</i>; bố/mẹ chấm điểm bằng ngón tay cái.',
              '<b>Bước 3:</b> Đổi vai: bố/mẹ nhận xét sai một chút (<i>"It is such sweet"</i>) để con sửa lại thành <i>"such a sweet cake"</i>.'
            ]
          }
        },
        {
          id: '3.8C', name: 'Bài 3.8C: Nấu ăn khi thiếu nguyên liệu',
          grammar: {
            formulas: ['❓ If + 👦 I + ⚡ have eggs', '➡️ I + ⚡ will + 🍲 cook soup', '🧩 If + 😴 hiện tại đơn + 🔮 will + V'],
            tip: 'Mệnh đề If dùng hiện tại đơn (have), mệnh đề chính dùng will + động từ (will cook) — không nói "if I will"!'
          },
          chunks: [
            { scene: '🥚✅🍲', full: 'If we have enough eggs I will cook soup', parts: [{t:'If we have enough eggs',ico:'🥚✅',c:'s'}, {t:'I will',ico:'⚡',c:'v'}, {t:'cook soup',ico:'🍲',c:'o'}], traceWord: 'enough' },
            { scene: '🍰🚫🍬', full: 'If I cook without sugar it will be fine', parts: [{t:'If I cook without sugar',ico:'🚫🍬',c:'s'}, {t:'it will',ico:'⚡',c:'v'}, {t:'be fine',ico:'👌',c:'o'}], traceWord: 'without' },
            { scene: '🍬➖🥗', full: 'If we use less sugar it will be healthy', parts: [{t:'If we use less sugar',ico:'🍬➖',c:'s'}, {t:'it will',ico:'⚡',c:'v'}, {t:'be healthy',ico:'🥗',c:'o'}], traceWord: 'less' },
            { scene: '💰👇🛒', full: 'If the cost is low I will buy it', parts: [{t:'If the cost is low',ico:'💰👇',c:'s'}, {t:'I will',ico:'⚡',c:'v'}, {t:'buy it',ico:'🛒',c:'o'}], traceWord: 'cost' },
            { scene: '💡🍽️👩‍🍳', full: 'If you understand the dish you will cook well', parts: [{t:'If you understand the dish',ico:'💡🍽️',c:'s'}, {t:'you will',ico:'⚡',c:'v'}, {t:'cook well',ico:'👩‍🍳',c:'o'}], traceWord: 'understand' },
            { scene: '👨🍵🎁', full: 'If Dad offers me tea I will say yes', parts: [{t:'If Dad offers me tea',ico:'🍵🎁',c:'s'}, {t:'I will',ico:'⚡',c:'v'}, {t:'say yes',ico:'👍',c:'o'}], traceWord: 'offers' },
            { scene: '📈💰🏠', full: 'If prices increase we will eat at home', parts: [{t:'If prices increase',ico:'📈',c:'s'}, {t:'we will',ico:'⚡',c:'v'}, {t:'eat at home',ico:'🏠',c:'o'}], traceWord: 'increase' },
            { scene: '👧🍳🥇', full: 'If you cook well you will take the lead', parts: [{t:'If you cook well',ico:'🍳',c:'s'}, {t:'you will take',ico:'⚡',c:'v'}, {t:'the lead',ico:'🥇',c:'o'}], traceWord: 'lead' }
          ],
          qaList: [
            { q: 'What will you do if there is an issue?', scene: '🧩❓👨‍👩‍👧', ans: 'I will ask a family member', opts: [{ txt: 'I will ask a family member', ico: '🪪' }, { txt: 'It is under the table', ico: '🍽️' }, { txt: 'She is a nice teacher', ico: '👩‍🏫' }] },
            { q: 'Will Dad help if I have no experience?', scene: '👨🧠🍳', ans: 'Yes, he will help me', opts: [{ txt: 'Yes, he will help me', ico: '🤝' }, { txt: 'It is in the bag', ico: '🎒' }, { txt: 'My cat is on the sofa', ico: '🐱' }] },
            { q: 'What if the water level is low?', scene: '💧📶🍲', ans: 'I will add water though it is late', opts: [{ txt: 'I will add water though it is late', ico: '💧' }, { txt: 'The bus is yellow', ico: '🚌' }, { txt: 'We are at the zoo', ico: '🦁' }] },
            { q: 'Is the government against eating fruit?', scene: '🏛️🍎❓', ans: 'No, no one is against fruit', opts: [{ txt: 'No, no one is against fruit', ico: '🍎' }, { txt: 'My dog is very big', ico: '🐶' }, { txt: 'I am on the bed', ico: '🛏️' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Nếu Thiếu Nguyên Liệu',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy ra vài đồ trong bếp (trứng, sữa, đường...) rồi giấu bớt một món và hỏi: <i>"If we have no sugar, what will you do?"</i>.',
              '<b>Bước 2:</b> Con trả lời bằng câu điều kiện: <i>"If we have no sugar, I will use less sugar!"</i> hoặc <i>"If we have enough eggs, I will cook soup!"</i>.',
              '<b>Bước 3:</b> Đổi vai: con giấu một món, bố/mẹ đoán hậu quả bằng <i>"If ..., I will ..."</i>; ai nói đúng thì được một điểm.'
            ]
          }
        }
      ]
    },
    '3.9': {
      lessons: [
        {
          id: '3.9A', name: 'Bài 3.9A: Những điều bé đã từng thấy ở sở thú',
          grammar: {
            formulas: ['👦 I + 🤲 have + 👀 seen a lion', '👧 She + 🤲 has + 🚫 never touched a snake', '❓ Have + 🧒 you + ♾️ ever + 🐰 seen a rabbit'],
            tip: 'have/has + động từ cột 3: ever = từng (khi hỏi), never = chưa bao giờ • I, you, we, they dùng "have", còn He, She, It dùng "has"!'
          },
          chunks: [
            { scene: '🧒🦁🏞️', full: 'I have visited the local zoo', parts: [{t:'I',ico:'🧒',c:'s'}, {t:'have visited',ico:'🚶',c:'v'}, {t:'the local zoo',ico:'📍🦁',c:'o'}], traceWord: 'local' },
            { scene: '👧🐻🐻', full: 'She has seen at least two bears', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has seen',ico:'👀',c:'v'}, {t:'at least two bears',ico:'🔻🐻',c:'o'}], traceWord: 'least' },
            { scene: '👦🐯⭕', full: 'He has never been within ten steps', parts: [{t:'He',ico:'👦',c:'s'}, {t:'has never been',ico:'🚫',c:'v'}, {t:'within ten steps',ico:'⭕👣',c:'o'}], traceWord: 'within' },
            { scene: '👨‍👩‍👧🐯👌', full: 'We have seen quite a big tiger', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'have seen',ico:'👀',c:'v'}, {t:'quite a big tiger',ico:'👌🐯',c:'o'}], traceWord: 'quite' },
            { scene: '🧒🐒🍌', full: 'I have actually seen a monkey', parts: [{t:'I',ico:'🧒',c:'s'}, {t:'have actually seen',ico:'💡👀',c:'v'}, {t:'a monkey',ico:'🐒',c:'o'}], traceWord: 'actually' },
            { scene: '🦁👥🤝', full: 'The zoo has never lost public support', parts: [{t:'The zoo',ico:'🦁',c:'s'}, {t:'has never lost',ico:'🚫',c:'v'}, {t:'public support',ico:'👥🤝',c:'o'}], traceWord: 'support' },
            { scene: '👨‍🌾🐴🎛️', full: 'He has never lost control of his horse', parts: [{t:'He',ico:'👨‍🌾',c:'s'}, {t:'has never lost',ico:'🚫',c:'v'}, {t:'control of his horse',ico:'🎛️🐴',c:'o'}], traceWord: 'control' },
            { scene: '🧒🤔🐰', full: 'Have you ever considered a pet rabbit', parts: [{t:'Have',ico:'🤲',c:'v'}, {t:'you',ico:'🧒',c:'s'}, {t:'ever considered a pet rabbit',ico:'🤔🐰',c:'o'}], traceWord: 'considered' }
          ],
          qaList: [
            { q: 'Is it possible to see a rather big tiger?', scene: '🐯🤞👀', ans: 'Yes, it is possible', opts: [{ txt: 'Yes, it is possible', ico: '🤞' }, { txt: 'It is on the table', ico: '🍽️' }, { txt: 'She is at school', ico: '🏫' }] },
            { q: 'Have you ever had a good view of a lion?', scene: '🧒🏞️🦁', ans: 'Yes, I have had a good view', opts: [{ txt: 'Yes, I have had a good view', ico: '🏞️' }, { txt: 'No, I am five', ico: '5️⃣' }, { txt: 'It is a red bag', ico: '🎒' }] },
            { q: 'What is your concern about the bat?', scene: '🦇⬇️😟', ans: 'The bat is flying low', opts: [{ txt: 'The bat is flying low', ico: '⬇️' }, { txt: 'The bat is a book', ico: '📖' }, { txt: 'I like to swim', ico: '🏊' }] },
            { q: 'Are you afraid of snakes?', scene: '🧒🐍↔️', ans: 'Although I am afraid, I like snakes', opts: [{ txt: 'Although I am afraid, I like snakes', ico: '↔️' }, { txt: 'The snake is a car', ico: '🚗' }, { txt: 'It is nine o\'clock', ico: '🕘' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Con Đã Từng Thấy Con Vật Nào?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy thú nhồi bông hoặc vẽ vài con vật ra giấy rồi hỏi con: <i>"Have you ever seen a tiger?"</i>.',
              '<b>Bước 2:</b> Con trả lời thật theo trải nghiệm của mình: <i>"Yes, I have seen a tiger"</i> hoặc <i>"No, I have never seen a tiger"</i>.',
              '<b>Bước 3:</b> Đổi vai: con làm "hướng dẫn viên" hỏi bố/mẹ, ai trả lời đúng câu có have/has thì được một ngôi sao ⭐.'
            ]
          }
        },
        {
          id: '3.9B', name: 'Bài 3.9B: Bao lâu rồi, động vật và thú cưng',
          grammar: {
            formulas: ['👦 I + 🤲 have had + 🐶 a dog for two years', '👧 She + 🤲 has had + 🐱 a cat since 2020', '👦 He + 📤 lost + 🐈 a cat two days ago'],
            tip: 'for + khoảng thời gian, since + mốc thời gian (đi với have/has + cột 3) • ago + quá khứ đơn, đứng sau khoảng thời gian!'
          },
          chunks: [
            { scene: '🏡📦🥛', full: 'The farm has sold this product for years', parts: [{t:'The farm',ico:'🏡',c:'s'}, {t:'has sold',ico:'💰',c:'v'}, {t:'this product for years',ico:'📦📆',c:'o'}], traceWord: 'product' },
            { scene: '👦😞🐱', full: 'He lost his cat two days ago', parts: [{t:'He',ico:'👦',c:'s'}, {t:'lost',ico:'😞',c:'v'}, {t:'his cat two days ago',ico:'🐱⏪',c:'o'}], traceWord: 'lost' },
            { scene: '👨‍👩‍👧🐖🔵', full: 'We have had the pig for a whole day', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'have had',ico:'🥣',c:'v'}, {t:'the pig for a whole day',ico:'🐖🔵',c:'o'}], traceWord: 'whole' },
            { scene: '🤝👨‍🌾🐄', full: 'We made a deal two years ago', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'made',ico:'✍️',c:'v'}, {t:'a deal two years ago',ico:'🤝⏪',c:'o'}], traceWord: 'deal' },
            { scene: '🐕🏃☀️', full: 'The dog has continued to run since morning', parts: [{t:'The dog',ico:'🐕',c:'s'}, {t:'has continued',ico:'▶️',c:'v'}, {t:'to run since morning',ico:'🏃🌅',c:'o'}], traceWord: 'continued' },
            { scene: '🐶✅🏞️', full: 'They have allowed dogs here since Monday', parts: [{t:'They',ico:'👥',c:'s'}, {t:'have allowed',ico:'✅',c:'v'}, {t:'dogs here since Monday',ico:'🐶📅',c:'o'}], traceWord: 'allowed' },
            { scene: '🏡🧱📆', full: 'This farm has been our base since 2020', parts: [{t:'This farm',ico:'🏡',c:'s'}, {t:'has been',ico:'⚡',c:'v'}, {t:'our base since 2020',ico:'🧱📆',c:'o'}], traceWord: 'base' },
            { scene: '👧📤📷', full: 'She sent me a photo ten minutes ago', parts: [{t:'She',ico:'👧',c:'s'}, {t:'sent',ico:'📤',c:'v'}, {t:'me a photo ten minutes ago',ico:'📷⏪',c:'o'}], traceWord: 'sent' }
          ],
          qaList: [
            { q: 'Have you ever visited a farm?', scene: '🧒🥕🏡', ans: 'Yes, I visited one a week ago', opts: [{ txt: 'Yes, I visited one a week ago', ico: '🏡' }, { txt: 'It is in the box', ico: '📦' }, { txt: 'She is at the bank', ico: '🏦' }] },
            { q: 'Do you expect the rain to fall?', scene: '☁️🌧️📉', ans: 'Yes, it will probably rain', opts: [{ txt: 'Yes, it will probably rain', ico: '🌧️' }, { txt: 'No, I am a fish', ico: '🐟' }, { txt: 'It is five o\'clock', ico: '🕔' }] },
            { q: 'What was the effect of the long walk?', scene: '🐕🚶💥', ans: 'The dog was tired', opts: [{ txt: 'The dog was tired', ico: '🥱' }, { txt: 'The cake was big', ico: '🎂' }, { txt: 'The sky was red', ico: '🌅' }] },
            { q: 'What can cause a high heart rate?', scene: '🐕🏃❤️📈', ans: 'A long run can cause it', opts: [{ txt: 'A long run can cause it', ico: '🏃' }, { txt: 'A cold drink is nice', ico: '🥤' }, { txt: 'A good book is fun', ico: '📖' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thú Cưng Của Nhà Mình Bao Lâu Rồi?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy ảnh thú cưng, đồ chơi thú hoặc ảnh gia đình, rồi nói: <i>"We have had this toy for two years"</i>.',
              '<b>Bước 2:</b> Con chọn một món đồ rồi nói câu với for hoặc since: <i>"I have had this bear since 2022"</i>; sau đó nói với ago: <i>"I got it two years ago"</i>.',
              '<b>Bước 3:</b> Cả nhà thi xem ai đặt được nhiều câu đúng nhất với for, since và ago trong 3 phút.'
            ]
          }
        },
        {
          id: '3.9C', name: 'Bài 3.9C: Tả con vật và người chăm sóc chúng',
          grammar: {
            formulas: ['👨‍🌾 a man + 👉 who + 🥣 feeds animals', '🐯 an animal + 👉 which / that + 💪 has great power', '🐱 the cat + 👉 that + 🌸 sits among flowers'],
            tip: 'who dùng cho người, which dùng cho vật hoặc con vật, that dùng được cho cả hai • đặt ngay sau danh từ để nói rõ đó là ai hay con gì!'
          },
          chunks: [
            { scene: '🎯🦁🐒', full: 'This is the center that helps animals', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the center that helps animals',ico:'🎯🐾',c:'o'}], traceWord: 'center' },
            { scene: '👨🥣🐦🐦', full: 'He is a man who feeds several animals', parts: [{t:'He',ico:'👨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a man who feeds several animals',ico:'🔢🐾',c:'o'}], traceWord: 'several' },
            { scene: '👨‍⚕️🍖🐕', full: 'The doctor suggests food that dogs like', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'suggests',ico:'💡',c:'v'}, {t:'food that dogs like',ico:'🍖🐕',c:'o'}], traceWord: 'suggests' },
            { scene: '👧⚖️🐕', full: 'Mai is a girl who decided to help dogs', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a girl who decided to help dogs',ico:'⚖️🐕',c:'o'}], traceWord: 'decided' },
            { scene: '🐱📍😊', full: 'The cat that remained here is happy', parts: [{t:'The cat that remained here',ico:'🐱📍',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'happy',ico:'😊',c:'o'}], traceWord: 'remained' },
            { scene: '👧↩️🐕', full: 'The girl who returned my dog is nice', parts: [{t:'The girl who returned my dog',ico:'👧↩️🐕',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nice',ico:'😊',c:'o'}], traceWord: 'returned' },
            { scene: '🐱🌸🌼', full: 'The cat that sits among the flowers is mine', parts: [{t:'The cat that sits among the flowers',ico:'🐱🌸',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'mine',ico:'🙋',c:'o'}], traceWord: 'among' },
            { scene: '🐯💪⚡', full: 'A tiger is an animal which has great power', parts: [{t:'A tiger',ico:'🐯',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'an animal which has great power',ico:'💪⚡',c:'o'}], traceWord: 'power' }
          ],
          qaList: [
            { q: 'Who records the clear sounds of birds?', scene: '🎙️🐦🔍', ans: 'The man who works here', opts: [{ txt: 'The man who works here', ico: '👨' }, { txt: 'The bird that is blue', ico: '🐦' }, { txt: 'The girl who is tired', ico: '🥱' }] },
            { q: 'Which figure shows the ticket value?', scene: '🎫💎🔢', ans: 'The figure that shows ten dollars', opts: [{ txt: 'The figure that shows ten dollars', ico: '💵' }, { txt: 'The man who sells tea', ico: '🍵' }, { txt: 'The bird that is sleeping', ico: '🐦' }] },
            { q: 'Which animal has great force?', scene: '🐴💪🏃', ans: 'The horse that runs fast', opts: [{ txt: 'The horse that runs fast', ico: '🐴' }, { txt: 'The mouse that is small', ico: '🐭' }, { txt: 'The bee that is small', ico: '🐝' }] },
            { q: 'Who helps a young zoo develop?', scene: '🌱🦁🧑‍🤝‍🧑', ans: 'Friends who give a bit of time', opts: [{ txt: 'Friends who give a bit of time', ico: '🤏' }, { txt: 'A car that is red', ico: '🚗' }, { txt: 'A man who sells shoes', ico: '👟' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đố Vui Con Vật Và Người Chăm Sóc',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ giấu trong đầu một con vật hoặc một người làm việc ở sở thú, rồi gợi ý: <i>"It is an animal which has great power"</i>.',
              '<b>Bước 2:</b> Con đoán và trả lời: <i>"It is a tiger!"</i>; sau đó con tự đố lại bố/mẹ bằng câu có who, which hoặc that: <i>"He is a man who feeds animals"</i>.',
              '<b>Bước 3:</b> Chơi 5 lượt rồi đổi vai; mỗi đáp án đúng được một ngôi sao ⭐ dán lên giấy.'
            ]
          }
        }
      ]
    },
    '3.10': {
      lessons: [
        {
          id: '3.10A', name: 'Bài 3.10A: Xin phép dùng máy tính, điện thoại',
          grammar: {
            formulas: ['🙏 Can + 👦 I + 💻 use the computer', '🎩 Could / May + 👦 I + 📱 use the phone'],
            tip: 'Xin phép thì đưa Can / Could / May lên đầu câu, rồi tới I + động từ nguyên mẫu (không thêm s) • Could và May lịch sự hơn Can!'
          },
          chunks: [
            { scene: '🧒🤲🪑', full: 'Can I reach across the table', parts: [{t:'Can',ico:'🙏',c:'v'}, {t:'I',ico:'🧒',c:'s'}, {t:'reach across the table',ico:'🤲',c:'o'}], traceWord: 'reach' },
            { scene: '💻✨🖼️', full: 'Could I create a new picture', parts: [{t:'Could',ico:'🎩',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'create a new picture',ico:'✨',c:'o'}], traceWord: 'create' },
            { scene: '💻🔊🎵', full: 'May I turn on the sound', parts: [{t:'May',ico:'🎩',c:'v'}, {t:'I',ico:'👧',c:'s'}, {t:'turn on the sound',ico:'🔊',c:'o'}], traceWord: 'sound' },
            { scene: '🚶🧭🚪', full: 'Can I walk toward the door', parts: [{t:'Can',ico:'🙏',c:'v'}, {t:'I',ico:'🚶',c:'s'}, {t:'walk toward the door',ico:'🧭',c:'o'}], traceWord: 'toward' },
            { scene: '📱📥💌', full: 'Could I receive a message today', parts: [{t:'Could',ico:'🎩',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'receive a message today',ico:'📥',c:'o'}], traceWord: 'receive' },
            { scene: '💻🔬📚', full: 'May I use it for research', parts: [{t:'May',ico:'🎩',c:'v'}, {t:'I',ico:'👧',c:'s'}, {t:'use it for research',ico:'🔬',c:'o'}], traceWord: 'research' },
            { scene: '🎫📚🏫', full: 'Can I get a pass to the library', parts: [{t:'Can',ico:'🙏',c:'v'}, {t:'I',ico:'🧒',c:'s'}, {t:'get a pass to the library',ico:'🎫',c:'o'}], traceWord: 'pass' },
            { scene: '🙋❓➕', full: 'Could I ask a further question', parts: [{t:'Could',ico:'🎩',c:'v'}, {t:'I',ico:'🙋',c:'s'}, {t:'ask a further question',ico:'➕',c:'o'}], traceWord: 'further' }
          ],
          qaList: [
            { q: 'Can I use the phone in class?', scene: '📱🏫👩‍🏫', ans: 'Perhaps, if you ask the teacher', opts: [{ txt: 'Perhaps, if you ask the teacher', ico: '🤷' }, { txt: 'Yes, my brother is tall', ico: '🧍' }, { txt: 'It is a cold bus', ico: '🚌' }] },
            { q: 'What does the factory produce?', scene: '🏭🧸📦', ans: 'It produces toys', opts: [{ txt: 'It produces toys', ico: '🧸' }, { txt: 'It is Monday today', ico: '📅' }, { txt: 'He is a happy dog', ico: '🐶' }] },
            { q: 'What will appear on the computer?', scene: '💻👀🎬', ans: 'A new video will appear', opts: [{ txt: 'A new video will appear', ico: '🎬' }, { txt: 'A big bus will sleep', ico: '🚌' }, { txt: 'The boy will cry', ico: '😢' }] },
            { q: 'Does the political video make sense?', scene: '🏛️🎬🧠', ans: 'Yes, it is about the law', opts: [{ txt: 'Yes, it is about the law', ico: '⚖️' }, { txt: 'Yes, it is a hot pizza', ico: '🍕' }, { txt: 'No, it is my shoe', ico: '👟' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Xin Phép Lịch Sự',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đặt điện thoại hoặc máy tính (đang tắt) lên bàn và đóng vai cô giáo. Con phải xin phép bằng <i>"Can I use the computer?"</i>.',
              '<b>Bước 2:</b> Bố/mẹ đổi vai, gật đầu hoặc lắc đầu. Lần sau con xin lịch sự hơn: <i>"Could I use it?"</i> hoặc <i>"May I use it?"</i>.',
              '<b>Bước 3:</b> Đổi vai cho con làm cô giáo. Con trả lời cho bố/mẹ xin phép, ví dụ <i>"Yes, you can"</i>. Chơi 5 lượt, mỗi lượt đổi câu xin phép.'
            ]
          }
        },
        {
          id: '3.10B', name: 'Bài 3.10B: Xác nhận thông tin về đồ vật',
          grammar: {
            formulas: ['🎬 The film + ⚡ is + 👍 long, isn\'t it', '🧑 You + ⚡ know + 👥 the staff, don\'t you', '👦 He + ⚡ did + 🧹 it, didn\'t he'],
            tip: 'Câu đuôi: vế đầu khẳng định thì đuôi phủ định • is thì isn\'t it, động từ thường thì don\'t you, quá khứ thì didn\'t!'
          },
          chunks: [
            { scene: '👦🧾💻', full: 'You have an account, don\'t you', parts: [{t:'You',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'an account, don\'t you',ico:'🧾',c:'o'}], traceWord: 'account' },
            { scene: '🎬🍿⏰', full: 'The film is long, isn\'t it', parts: [{t:'The film',ico:'🎬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'long, isn\'t it',ico:'⏰',c:'o'}], traceWord: 'film' },
            { scene: '📋🤔😓', full: 'This situation is hard, isn\'t it', parts: [{t:'This situation',ico:'📋',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'hard, isn\'t it',ico:'😓',c:'o'}], traceWord: 'situation' },
            { scene: '👥🤝😊', full: 'You know the staff, don\'t you', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'know',ico:'🧠',c:'v'}, {t:'the staff, don\'t you',ico:'👥',c:'o'}], traceWord: 'staff' },
            { scene: '🏠👍✨', full: 'The room is in good condition, isn\'t it', parts: [{t:'The room',ico:'🏠',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in good condition, isn\'t it',ico:'📝',c:'o'}], traceWord: 'condition' },
            { scene: '🔝💼📍', full: 'It is a major position, isn\'t it', parts: [{t:'It',ico:'💼',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a major position, isn\'t it',ico:'📍',c:'o'}], traceWord: 'major' },
            { scene: '👦🧹🙋', full: 'He cleaned it himself, didn\'t he', parts: [{t:'He',ico:'👦',c:'s'}, {t:'cleaned',ico:'🧹',c:'v'}, {t:'it himself, didn\'t he',ico:'🙋',c:'o'}], traceWord: 'himself' },
            { scene: '👧👦🛠️', full: 'They did it themselves, didn\'t they', parts: [{t:'They',ico:'👧👦',c:'s'}, {t:'did',ico:'⚡',c:'v'}, {t:'it themselves, didn\'t they',ico:'🙋',c:'o'}], traceWord: 'themselves' }
          ],
          qaList: [
            { q: 'You look forward to lunch, don\'t you?', scene: '🍱😋⭐', ans: 'Yes, especially on Friday', opts: [{ txt: 'Yes, especially on Friday', ico: '⭐' }, { txt: 'It is on the shelf', ico: '📚' }, { txt: 'He is nine years old', ico: '9️⃣' }] },
            { q: 'Did the man die in the film?', scene: '🎬👨🕯️', ans: 'No, he did not die', opts: [{ txt: 'No, he did not die', ico: '🙂' }, { txt: 'I have two cats', ico: '🐱' }, { txt: 'It is a red pen', ico: '🖊️' }] },
            { q: 'Are you certain about this detail?', scene: '🔍👍🧾', ans: 'Yes, I am certain', opts: [{ txt: 'Yes, I am certain', ico: '👍' }, { txt: 'It is a big hat', ico: '🎩' }, { txt: 'I have two dogs', ico: '🐶' }] },
            { q: 'It is a human story, isn\'t it?', scene: '🧑📖❤️', ans: 'Yes, it is a good story', opts: [{ txt: 'Yes, it is a good story', ico: '📖' }, { txt: 'It is on the desk', ico: '🪑' }, { txt: 'She has a blue bike', ico: '🚲' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thám Tử Hỏi Lại',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ chọn 4 đồ vật trong nhà (cốc, sách, điện thoại, tivi) và nói một ý, ví dụ <i>"This book is new, isn\'t it?"</i>.',
              '<b>Bước 2:</b> Con kiểm tra đồ vật rồi trả lời <i>"Yes, it is"</i> hoặc <i>"No, it isn\'t"</i>. Sau đó con thử tự hỏi lại bố/mẹ: <i>"You have a pen, don\'t you?"</i>.',
              '<b>Bước 3:</b> Chơi chuyện hôm qua: bố/mẹ hỏi <i>"You ate lunch, didn\'t you?"</i>, con trả lời. Ai đoán đúng nhiều hơn sau 8 câu thì thắng.'
            ]
          }
        },
        {
          id: '3.10C', name: 'Bài 3.10C: Dùng và cất đồ trong nhà, trong lớp',
          grammar: {
            formulas: ['👦 I + 🔌 turn on / off + 💻 the computer', '👧 She + 👕 puts on + 🧥 a coat', '👦 He + 🤏 picks up / 👀 looks at + 📦 the box'],
            tip: 'Cụm động từ là động từ + từ nhỏ như on, off, up, at, for • ghép lại là nghĩa mới, nhớ nguyên cụm và -s đi sau động từ chính: looks at, puts on!'
          },
          chunks: [
            { scene: '🧒✈️🔌', full: 'I turn on the model plane', parts: [{t:'I',ico:'🧒',c:'s'}, {t:'turn on',ico:'🔌',c:'v'}, {t:'the model plane',ico:'✈️',c:'o'}], traceWord: 'model' },
            { scene: '👧🎒🔍', full: 'She looks for her bag round here', parts: [{t:'She',ico:'👧',c:'s'}, {t:'looks for',ico:'🔍',c:'v'}, {t:'her bag round here',ico:'🎒',c:'o'}], traceWord: 'round' },
            { scene: '👦📦✋', full: 'He picks up the box and raises it', parts: [{t:'He',ico:'👦',c:'s'}, {t:'picks up',ico:'🤏',c:'v'}, {t:'the box and raises it',ico:'✋',c:'o'}], traceWord: 'raises' },
            { scene: '👫🧥❄️', full: 'The couple puts on warm coats', parts: [{t:'The couple',ico:'👫',c:'s'}, {t:'puts on',ico:'👕',c:'v'}, {t:'warm coats',ico:'🧥',c:'o'}], traceWord: 'couple' },
            { scene: '🛍️🎩👀', full: 'The customer looks at a range of hats', parts: [{t:'The customer',ico:'🛍️',c:'s'}, {t:'looks at',ico:'👀',c:'v'}, {t:'a range of hats',ico:'🎩',c:'o'}], traceWord: 'customer' },
            { scene: '✈️🛬📵', full: 'We turn off our phones before the plane lands', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'turn off',ico:'📵',c:'v'}, {t:'our phones before the plane lands',ico:'🛬',c:'o'}], traceWord: 'lands' },
            { scene: '💻🏁🔌', full: 'I finally turn off the computer', parts: [{t:'I',ico:'🧒',c:'s'}, {t:'finally turn off',ico:'🏁',c:'v'}, {t:'the computer',ico:'💻',c:'o'}], traceWord: 'finally' },
            { scene: '🔍📈⭐', full: 'We look for ways to improve quality', parts: [{t:'We',ico:'👩‍👧',c:'s'}, {t:'look for',ico:'🔍',c:'v'}, {t:'ways to improve quality',ico:'📈',c:'o'}], traceWord: 'improve' }
          ],
          qaList: [
            { q: 'Who will claim this bag?', scene: '🎒🙋‍♀️❓', ans: 'The tall girl will claim it', opts: [{ txt: 'The tall girl will claim it', ico: '👧' }, { txt: 'It is a hot day', ico: '☀️' }, { txt: 'Two cats, please', ico: '🐱' }] },
            { q: 'What is sad about the old tree?', scene: '🌳🕯️😢', ans: 'Its death is very sad', opts: [{ txt: 'Its death is very sad', ico: '🕯️' }, { txt: 'It is a big red car', ico: '🚗' }, { txt: 'Its leaf is green', ico: '🍃' }] },
            { q: 'Is this an opportunity to act?', scene: '🚪🎭⭐', ans: 'Yes, we must act now', opts: [{ txt: 'Yes, we must act now', ico: '🎭' }, { txt: 'Yes, it is a cup', ico: '☕' }, { txt: 'No, it is a fish', ico: '🐟' }] },
            { q: 'Can you explain this word?', scene: '💬📖👩‍🏫', ans: 'Yes, I can explain it', opts: [{ txt: 'Yes, I can explain it', ico: '💬' }, { txt: 'It is on the desk', ico: '🪑' }, { txt: 'He is my uncle', ico: '👨' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Săn Đồ Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ nói một mệnh lệnh, con làm theo và nhắc lại cụm từ: <i>"Turn on the light"</i>, <i>"Turn off the TV"</i>, <i>"Put on your hat"</i>, <i>"Pick up the toy"</i>.',
              '<b>Bước 2:</b> Bố/mẹ giấu một món đồ (bút, cốc...). Con vừa đi tìm vừa nói <i>"I look for my pen"</i>, khi thấy thì nói <i>"I look at it"</i>.',
              '<b>Bước 3:</b> Đổi vai: con ra lệnh cho bố/mẹ làm 5 hành động bằng các cụm turn on/off, put on, pick up. Ai làm sai thì hát một câu!'
            ]
          }
        }
      ]
    },
    '3.11': {
      lessons: [
        {
          id: '3.11A', name: 'Bài 3.11A: Người ta nói gì về nghề nghiệp',
          grammar: {
            formulas: ['👩 Mom + 🗣️ says + 💬 (that) she is busy', '👨 Dad + 📣 said + 💬 (that) he was busy', '👦 Tom + 📢 told me + 💬 (that) it was fun'],
            tip: 'Người nói ở hiện tại (says) thì giữ nguyên • said / told me thì lùi một bậc: is → was, will → would, can → could!'
          },
          chunks: [
            { scene: '👨🛣️🚶', full: 'Dad says the road is very long', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'says',ico:'🗣️',c:'v'}, {t:'the road is very long',ico:'🛣️',c:'o'}], traceWord: 'road' },
            { scene: '👩‍🏫🎓📚', full: 'The teacher says education is important', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'says',ico:'🗣️',c:'v'}, {t:'education is important',ico:'🎓',c:'o'}], traceWord: 'education' },
            { scene: '🧑‍🍳🍽️🍲', full: 'The waiter said he would serve us', parts: [{t:'The waiter',ico:'🧑‍🍳',c:'s'}, {t:'said',ico:'📣',c:'v'}, {t:'he would serve us',ico:'🍽️',c:'o'}], traceWord: 'serve' },
            { scene: '👨💬1️⃣', full: 'Mr Tom told me he was single', parts: [{t:'Mr Tom',ico:'👨',c:'s'}, {t:'told me',ico:'📢',c:'v'}, {t:'he was single',ico:'1️⃣',c:'o'}], traceWord: 'single' },
            { scene: '👴🤝💰', full: 'My uncle said trade was good here', parts: [{t:'My uncle',ico:'👴',c:'s'}, {t:'said',ico:'📣',c:'v'}, {t:'trade was good here',ico:'🤝',c:'o'}], traceWord: 'trade' },
            { scene: '👨‍🔬🌌💡', full: 'The scientist says you will realize space is big', parts: [{t:'The scientist',ico:'👨‍🔬',c:'s'}, {t:'says',ico:'🗣️',c:'v'}, {t:'you will realize space is big',ico:'🌌',c:'o'}], traceWord: 'space' },
            { scene: '👩⚽🏛️🏆', full: 'Mom says the national team will certainly win', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'says',ico:'🗣️',c:'v'}, {t:'the national team will certainly win',ico:'🏆',c:'o'}], traceWord: 'national' },
            { scene: '👩🐱🛁', full: 'Mom said the cat could wash itself', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'said',ico:'📣',c:'v'}, {t:'the cat could wash itself',ico:'🐱',c:'o'}], traceWord: 'itself' }
          ],
          qaList: [
            { q: 'What did the farmer say about the air?', scene: '👨‍🌾🌬️🌳', ans: 'He said the air was clean', opts: [{ txt: 'He said the air was clean', ico: '🌬️' }, { txt: 'It is on the table', ico: '🍽️' }, { txt: 'We go to school today', ico: '🏫' }] },
            { q: 'What did Dad say about tomorrow?', scene: '👨🌧️📅', ans: 'He said rain was likely tomorrow', opts: [{ txt: 'He said rain was likely tomorrow', ico: '🌧️' }, { txt: 'She is my little sister', ico: '👧' }, { txt: 'I like a red hat', ico: '🧢' }] },
            { q: 'Why did Lan stay home today?', scene: '👧🤒🏠', ans: 'She was sick and therefore stayed home', opts: [{ txt: 'She was sick and therefore stayed home', ico: '🤒' }, { txt: 'On the big green bus', ico: '🚌' }, { txt: 'Two cats and a dog', ico: '🐱' }] },
            { q: 'Did Nam take the bus?', scene: '👦🚌🚶', ans: 'No, he told me he walked instead', opts: [{ txt: 'No, he told me he walked instead', ico: '🚶' }, { txt: 'Yes, I have two red cats', ico: '🐱' }, { txt: 'It is under the table', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Phóng Viên Chuyền Tin',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ thì thầm một tin vào tai con, ví dụ <i>"I am a doctor"</i>, rồi con chạy sang nói với anh/chị hoặc người thứ ba.',
              '<b>Bước 2:</b> Con làm phóng viên và nói lại bằng câu gián tiếp: <i>"Mom says she is a doctor"</i>. Nếu tin đã nói xong từ trước thì đổi thành <i>"Mom said she was a doctor"</i>.',
              '<b>Bước 3:</b> Đổi vai: con thì thầm tin mới về một nghề (🍽️ phục vụ, 👩‍🏫 giáo viên), bố/mẹ làm phóng viên và nói lại bằng <i>"says"</i> hoặc <i>"told me"</i>.'
            ]
          }
        },
        {
          id: '3.11B', name: 'Bài 3.11B: Tìm đồ, tìm người trong khu phố',
          grammar: {
            formulas: ['👤 Someone + ⚡ is + 🚪 at the door', '🔍 Anyone + ⚡ can + 🎮 play', '🚫 No one / Nothing + ⚡ is + 📍 here'],
            tip: 'someone / something dùng trong câu thường • anyone / anything hay đi với câu hỏi • no one / nothing đã mang nghĩa "không" rồi, đừng thêm not nữa!'
          },
          chunks: [
            { scene: '🧑‍⚕️🏥🤒', full: 'Someone is helping the patient', parts: [{t:'Someone',ico:'👤',c:'s'}, {t:'is helping',ico:'🤝',c:'v'}, {t:'the patient',ico:'🏥',c:'o'}], traceWord: 'patient' },
            { scene: '🚫👀🔊', full: 'No one pays attention to the noise', parts: [{t:'No one',ico:'🚫',c:'s'}, {t:'pays',ico:'💰',c:'v'}, {t:'attention to the noise',ico:'👀',c:'o'}], traceWord: 'attention' },
            { scene: '👤🛋️🛌', full: 'Someone can lie on the sofa', parts: [{t:'Someone',ico:'👤',c:'s'}, {t:'can lie',ico:'🛌',c:'v'}, {t:'on the sofa',ico:'🛋️',c:'o'}], traceWord: 'lie' },
            { scene: '👨‍👩‍👧🎮🔹', full: 'Anyone can play this common game', parts: [{t:'Anyone',ico:'🙋',c:'s'}, {t:'can play',ico:'🎮',c:'v'}, {t:'this common game',ico:'🔹',c:'o'}], traceWord: 'common' },
            { scene: '🚫❌🧱', full: 'Nothing is wrong with this material', parts: [{t:'Nothing',ico:'🚫',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'wrong with this material',ico:'🧱',c:'o'}], traceWord: 'material' },
            { scene: '👨‍👩‍👧🔍🎭', full: 'We looked everywhere for the school performance', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'looked',ico:'🔍',c:'v'}, {t:'everywhere for the school performance',ico:'🎭',c:'o'}], traceWord: 'performance' },
            { scene: '🙋🎲🔀', full: 'Everyone has a chance to make a choice', parts: [{t:'Everyone',ico:'🙋',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a chance to make a choice',ico:'🎲',c:'o'}], traceWord: 'chance' },
            { scene: '🌟💪🏁', full: 'Something great needs a complete effort', parts: [{t:'Something great',ico:'🌟',c:'s'}, {t:'needs',ico:'⚡',c:'v'}, {t:'a complete effort',ico:'💪',c:'o'}], traceWord: 'effort' }
          ],
          qaList: [
            { q: 'Who will accept the gift?', scene: '🎁🙋👍', ans: 'Someone will accept the gift', opts: [{ txt: 'Someone will accept the gift', ico: '🎁' }, { txt: 'There is no mention of it', ico: '🗣️' }, { txt: 'The sun is very hot', ico: '☀️' }] },
            { q: 'What does everyone in society need?', scene: '👥🕊️🌍', ans: 'Everyone in society needs peace', opts: [{ txt: 'Everyone in society needs peace', ico: '🕊️' }, { txt: 'A big red bus', ico: '🚌' }, { txt: 'Nothing is in my bag', ico: '🎒' }] },
            { q: 'How does a story begin?', scene: '📖👑✨', ans: 'Once upon a time there was a king', opts: [{ txt: 'Once upon a time there was a king', ico: '👑' }, { txt: 'Thank you very much', ico: '🙏' }, { txt: 'Good night and sleep well', ico: '🌙' }] },
            { q: 'Which century are we in?', scene: '📅🌍🕰️', ans: 'We live in this century', opts: [{ txt: 'We live in this century', ico: '📅' }, { txt: 'I like tea and milk', ico: '🍵' }, { txt: 'It is a small green frog', ico: '🐸' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thám Tử Tìm Đồ Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ giấu một món đồ (🧸 gấu bông, 🧦 tất) rồi nói <i>"Something is hidden!"</i>. Con hỏi <i>"Is it everywhere?"</i> để bắt đầu tìm.',
              '<b>Bước 2:</b> Con tìm trong nhà và báo cáo: <i>"Nothing is here!"</i> khi không thấy, hoặc <i>"Something is under the sofa!"</i> khi thấy.',
              '<b>Bước 3:</b> Đổi vai: một người trong nhà trốn đi, con hỏi <i>"Is anyone here?"</i> và nói <i>"Someone is behind the door!"</i> khi tìm ra.'
            ]
          }
        },
        {
          id: '3.11C', name: 'Bài 3.11C: Đoán xem đó là nghề gì',
          grammar: {
            formulas: ['👧 She + ⚡ may + 👮 be a police officer', '👦 He + ⚡ might + 💼 work in a court', '👩 Anna + ⚡ may + 📨 apply for the job'],
            tip: 'may / might = có thể, nhưng chưa chắc! Sau may / might luôn là động từ nguyên mẫu, không thêm s dù là He / She.'
          },
          chunks: [
            { scene: '👧👮🚓', full: 'She may be a police officer', parts: [{t:'She',ico:'👧',c:'s'}, {t:'may be',ico:'🤔',c:'v'}, {t:'a police officer',ico:'👮',c:'o'}], traceWord: 'police' },
            { scene: '👨‍⚖️⚖️🏛️', full: 'He might work in the court', parts: [{t:'He',ico:'👨',c:'s'}, {t:'might work',ico:'💼',c:'v'}, {t:'in the court',ico:'⚖️',c:'o'}], traceWord: 'court' },
            { scene: '✍️🔎📄', full: 'The writer may find new evidence', parts: [{t:'The writer',ico:'✍️',c:'s'}, {t:'may find',ico:'🔎',c:'v'}, {t:'new evidence',ico:'📄',c:'o'}], traceWord: 'evidence' },
            { scene: '🎤👩🗣️', full: 'That singer may have a lovely voice', parts: [{t:'That singer',ico:'🎤',c:'s'}, {t:'may have',ico:'🤲',c:'v'}, {t:'a lovely voice',ico:'🗣️',c:'o'}], traceWord: 'voice' },
            { scene: '👩📨🏪', full: 'Anna may apply to manage the shop', parts: [{t:'Anna',ico:'👩',c:'s'}, {t:'may apply',ico:'📨',c:'v'}, {t:'to manage the shop',ico:'📋',c:'o'}], traceWord: 'apply' },
            { scene: '👦📝✏️', full: 'I might prepare for the test now', parts: [{t:'I',ico:'👦',c:'s'}, {t:'might prepare',ico:'📝',c:'v'}, {t:'for the test now',ico:'✏️',c:'o'}], traceWord: 'prepare' },
            { scene: '👩‍🏫⏳↩️', full: 'The teacher may simply wait for a response', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'may simply wait',ico:'⏳',c:'v'}, {t:'for a response',ico:'↩️',c:'o'}], traceWord: 'response' },
            { scene: '📖🧠📍', full: 'A good book may be a source of knowledge', parts: [{t:'A good book',ico:'📖',c:'s'}, {t:'may be',ico:'🤔',c:'v'}, {t:'a source of knowledge',ico:'🧠',c:'o'}], traceWord: 'knowledge' }
          ],
          qaList: [
            { q: 'Does a ghost exist?', scene: '👻❓🌍', ans: 'A ghost might not exist at all', opts: [{ txt: 'A ghost might not exist at all', ico: '👻' }, { txt: 'I have a red bag', ico: '🎒' }, { txt: 'We eat rice for lunch', ico: '🍚' }] },
            { q: 'Whom may I contact for help?', scene: '🆘📇👮', ans: 'You may contact the police', opts: [{ txt: 'You may contact the police', ico: '👮' }, { txt: 'A big green tree', ico: '🌳' }, { txt: 'I am nine years old', ico: '🎂' }] },
            { q: 'Are these two bikes similar?', scene: '🚲🟰🚲', ans: 'Yes, they might be very similar', opts: [{ txt: 'Yes, they might be very similar', ico: '🟰' }, { txt: 'No, he is my uncle', ico: '👴' }, { txt: 'It is in the bag', ico: '🎒' }] },
            { q: 'What might the football team do first?', scene: '⚽🏃⚔️', ans: 'The team might attack from the left', opts: [{ txt: 'The team might attack from the left', ico: '⚔️' }, { txt: 'We read a book at night', ico: '📖' }, { txt: 'The sun is yellow', ico: '☀️' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đoán Nghề Bí Ẩn',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ diễn một nghề không nói ra (🚓 cảnh sát giơ tay dừng xe, 🎤 ca sĩ hát, 👩‍🏫 cô giáo viết bảng).',
              '<b>Bước 2:</b> Con đoán bằng tiếng Anh với may/might: <i>"You may be a police officer"</i> hoặc <i>"You might be a singer"</i>. Đoán sai cũng không sao vì đang đoán thôi!',
              '<b>Bước 3:</b> Khi đoán đúng, đổi vai: con diễn nghề mới, bố/mẹ đoán và con đếm xem đoán được mấy nghề trong 10 phút.'
            ]
          }
        }
      ]
    },
    '3.12': {
      lessons: [
        {
          id: '3.12A', name: 'Bài 3.12A: Phỏng vấn bạn học',
          grammar: {
            formulas: ['❓ What kind of + 🪴 plant + ⚡ is + 👉 this', '❓ How often / long / far / old + ⚡ do / is + 👦 you / it', '❓ Which one + ⚡ is + 📜 the notice'],
            tip: 'Muốn hỏi chi tiết thì thêm từ sau How: often (bao lâu một lần), long (bao lâu), far (bao xa), old (bao nhiêu tuổi)!'
          },
          chunks: [
            { scene: '🪴🌱❓', full: 'What kind of plant is this', parts: [{t:'What kind of plant',ico:'🪴',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'this',ico:'👉',c:'s'}], traceWord: 'plant' },
            { scene: '🌳🏞️🚶', full: 'How often do you visit nature parks', parts: [{t:'How often do',ico:'🔁',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'visit nature parks',ico:'🌳',c:'o'}], traceWord: 'nature' },
            { scene: '✈️🌍🧳', full: 'How long was your international trip', parts: [{t:'How long',ico:'⏳',c:'o'}, {t:'was',ico:'⚡',c:'v'}, {t:'your international trip',ico:'🌍',c:'s'}], traceWord: 'international' },
            { scene: '🪧📜👀', full: 'Which one is the official notice', parts: [{t:'Which one',ico:'☝️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the official notice',ico:'📜',c:'o'}], traceWord: 'notice' },
            { scene: '🤔🏗️🏢', full: 'I wonder what kind of structure it is', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'wonder',ico:'🤔',c:'v'}, {t:'what kind of structure it is',ico:'🏗️',c:'o'}], traceWord: 'wonder' },
            { scene: '🙋📚✏️', full: 'I did my homework myself', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'did',ico:'⚡',c:'v'}, {t:'my homework myself',ico:'📚',c:'o'}], traceWord: 'myself' },
            { scene: '📷🕐🖼️', full: 'How old is this recent photo', parts: [{t:'How old',ico:'🎂',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'this recent photo',ico:'📷',c:'s'}], traceWord: 'recent' },
            { scene: '📖🕐👦', full: 'What did you read recently', parts: [{t:'What did',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'read recently',ico:'📖',c:'o'}], traceWord: 'recently' }
          ],
          qaList: [
            { q: 'What exactly is this feature?', scene: '📱⭐🎯', ans: 'It is a photo feature', opts: [{ txt: 'It is a photo feature', ico: '📷' }, { txt: 'I am at school', ico: '🏫' }, { txt: 'Two red hats', ico: '🎩' }] },
            { q: 'What is your opinion of the film?', scene: '🎬💬😊', ans: 'I think it is great', opts: [{ txt: 'I think it is great', ico: '👍' }, { txt: 'It is on the table', ico: '🪑' }, { txt: 'I am ten years old', ico: '🎂' }] },
            { q: 'Who will represent our class?', scene: '🏫🤝🧑‍🎓', ans: 'Lan will represent our class', opts: [{ txt: 'Lan will represent our class', ico: '🤝' }, { txt: 'I like soup', ico: '🍲' }, { txt: 'It is a red bag', ico: '🎒' }] },
            { q: 'Is this room private or public?', scene: '🚪🔒🏠', ans: 'Yes, this room is private', opts: [{ txt: 'Yes, this room is private', ico: '🔒' }, { txt: 'I have a dog', ico: '🐶' }, { txt: 'It is Monday', ico: '📅' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Phóng Viên Nhí',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ hoặc anh chị đóng vai người được phỏng vấn, con cầm một cây bút làm micro và hỏi: <i>"How often do you visit nature parks?"</i>.',
              '<b>Bước 2:</b> Con thay đổi câu hỏi theo gợi ý trên bàn: <i>"How long...?"</i>, <i>"How old...?"</i>, <i>"What kind of plant is this?"</i>, rồi chỉ vào một chậu cây hoặc đồ vật trong nhà.',
              '<b>Bước 3:</b> Đổi vai: bố/mẹ hỏi, con trả lời bằng cả câu. Con nói được 5 câu hỏi hay trả lời đúng thì cả nhà vỗ tay chúc mừng.'
            ]
          }
        },
        {
          id: '3.12B', name: 'Bài 3.12B: Kể chuyện trong thư gửi bạn',
          grammar: {
            formulas: ['🙋 I + ⚡ have read + 📖 a story', '🙋 I + ⚡ saw (past simple) + 🏁 the match yesterday', '👧 She + ⚡ has been + 💪 fit since January'],
            tip: 'Có mốc thời gian rõ (yesterday, last week) thì dùng quá khứ đơn; kể trải nghiệm không nói mốc thì dùng have / has + V3!'
          },
          chunks: [
            { scene: '📖✅🙋', full: 'I have read a simple story', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'have read',ico:'📖',c:'v'}, {t:'a simple story',ico:'✅',c:'o'}], traceWord: 'simple' },
            { scene: '⚽🏁📅', full: 'I saw the final match yesterday', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'saw',ico:'👀',c:'v'}, {t:'the final match yesterday',ico:'🏁',c:'o'}], traceWord: 'final' },
            { scene: '➕⚾👊', full: 'In addition she hit the ball', parts: [{t:'In addition she',ico:'➕',c:'s'}, {t:'hit',ico:'👊',c:'v'}, {t:'the ball',ico:'⚾',c:'o'}], traceWord: 'hit' },
            { scene: '🎯🙋👍', full: 'I have had one good attempt', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'have had',ico:'🤲',c:'v'}, {t:'one good attempt',ico:'🎯',c:'o'}], traceWord: 'attempt' },
            { scene: '💪🏃🙋', full: 'I have been fit since January', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'have been',ico:'⚡',c:'v'}, {t:'fit since January',ico:'💪',c:'o'}], traceWord: 'fit' },
            { scene: '📱⚙️👍', full: 'My phone has functioned well since March', parts: [{t:'My phone',ico:'📱',c:'s'}, {t:'has functioned',ico:'⚙️',c:'v'}, {t:'well since March',ico:'👍',c:'o'}], traceWord: 'functioned' },
            { scene: '🖼️🙋📅', full: 'I showed you an image yesterday', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'showed',ico:'👉',c:'v'}, {t:'you an image yesterday',ico:'🖼️',c:'o'}], traceWord: 'image' },
            { scene: '🙂🌊👍', full: 'Her behavior has had a good influence', parts: [{t:'Her behavior',ico:'🙂',c:'s'}, {t:'has had',ico:'🤲',c:'v'}, {t:'a good influence',ico:'🌊',c:'o'}], traceWord: 'behavior' }
          ],
          qaList: [
            { q: 'Do I need a coat today?', scene: '🧥❄️❗', ans: 'Indeed, a coat is necessary', opts: [{ txt: 'Indeed, a coat is necessary', ico: '🧥' }, { txt: 'It is on the shelf', ico: '📚' }, { txt: 'I like pizza', ico: '🍕' }] },
            { q: 'Who established the school club?', scene: '🏛️🏫👩‍🏫', ans: 'Mrs Smith established our club', opts: [{ txt: 'Mrs Smith established our club', ico: '🏛️' }, { txt: 'It is a big bus', ico: '🚌' }, { txt: 'I am very hungry', ico: '🍔' }] },
            { q: 'Is your math mark average?', scene: '📊📝🙂', ans: 'Yes, my mark is average', opts: [{ txt: 'Yes, my mark is average', ico: '📊' }, { txt: 'We have two cats', ico: '🐱' }, { txt: 'It is a blue car', ico: '🚗' }] },
            { q: 'What do you want for lunch?', scene: '🍱🤷😋', ans: 'I like whatever you cook', opts: [{ txt: 'I like whatever you cook', ico: '🤷' }, { txt: 'I am at the zoo', ico: '🦁' }, { txt: 'Two red hats', ico: '🎩' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Viết Thư Cho Bạn Xa',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ hoặc anh chị đưa con một tờ giấy và nói: <i>"Write a letter to a friend. What have you done?"</i>. Con kể một trải nghiệm, ví dụ <i>"I have read a simple story"</i>.',
              '<b>Bước 2:</b> Con thêm một chuyện có mốc thời gian, ví dụ <i>"I saw the final match yesterday"</i>. Bố/mẹ hỏi lại: <i>"Have you...?"</i> hoặc <i>"When did you...?"</i> để con chọn đúng thì.',
              '<b>Bước 3:</b> Con đọc to thư cho cả nhà nghe, mỗi câu đúng được một ngôi sao vẽ trên giấy. Gom đủ 5 ngôi sao là thắng.'
            ]
          }
        },
        {
          id: '3.12C', name: 'Bài 3.12C: Kế hoạch năm học mới',
          grammar: {
            formulas: ['🙋 I + ⚡ will enter + 🏫 the new school', '👩‍🏫 She + ⚡ is going to + 📝 mark my test', '🙋 I + ⚡ might see + 🧑‍💼 the director'],
            tip: 'Quyết định ngay lúc nói dùng will, kế hoạch đã có dùng be going to, chưa chắc chắn dùng might, còn điều kiện thì thêm if!'
          },
          chunks: [
            { scene: '🙋🚪🏫', full: 'I will enter the new school', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'will enter',ico:'🚪',c:'v'}, {t:'the new school',ico:'🏫',c:'o'}], traceWord: 'enter' },
            { scene: '❌🔁💪', full: 'I will try again if I fail', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'will try',ico:'💪',c:'v'}, {t:'again if I fail',ico:'❌',c:'o'}], traceWord: 'fail' },
            { scene: '👩‍🏫📝💯', full: 'The teacher is going to mark my test', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'is going to',ico:'➡️',c:'v'}, {t:'mark my test',ico:'💯',c:'o'}], traceWord: 'mark' },
            { scene: '🧑‍💼🏫📅', full: 'I might see the director tomorrow', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'might see',ico:'👀',c:'v'}, {t:'the director tomorrow',ico:'🧑‍💼',c:'o'}], traceWord: 'director' },
            { scene: '🏆📚🔗', full: 'Success will depend on practice', parts: [{t:'Success',ico:'🏆',c:'s'}, {t:'will depend',ico:'🔗',c:'v'}, {t:'on practice',ico:'📚',c:'o'}], traceWord: 'success' },
            { scene: '🗣️🔍👂', full: 'I am going to speak clearly', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'am going to',ico:'➡️',c:'v'}, {t:'speak clearly',ico:'🔍',c:'o'}], traceWord: 'clearly' },
            { scene: '👥📈🏙️', full: 'The population might grow next year', parts: [{t:'The population',ico:'👥',c:'s'}, {t:'might grow',ico:'📈',c:'v'}, {t:'next year',ico:'📅',c:'o'}], traceWord: 'population' },
            { scene: '😴🕳️📈', full: 'A significant lack of sleep might hurt you', parts: [{t:'A significant lack of sleep',ico:'🕳️',c:'s'}, {t:'might hurt',ico:'⚠️',c:'v'}, {t:'you',ico:'😴',c:'o'}], traceWord: 'lack' }
          ],
          qaList: [
            { q: 'What is the purpose of this factory?', scene: '🏭🎯🍞', ans: 'Its purpose is food production', opts: [{ txt: 'Its purpose is food production', ico: '🏭' }, { txt: 'It is a happy dog', ico: '🐶' }, { txt: 'I am ten years old', ico: '🎂' }] },
            { q: 'Will you argue with your friend?', scene: '👦🗣️👧', ans: 'No, I will not argue', opts: [{ txt: 'No, I will not argue', ico: '🙅' }, { txt: 'Yes, it is Monday', ico: '📅' }, { txt: 'Two blue pens', ico: '🖊️' }] },
            { q: 'When do you take a drug?', scene: '💊🤒🛏️', ans: 'I take a drug when I am sick', opts: [{ txt: 'I take a drug when I am sick', ico: '💊' }, { txt: 'It is under the bed', ico: '🛏️' }, { txt: 'We have a red kite', ico: '🪁' }] },
            { q: 'Which road is the direct one?', scene: '🛣️➡️🏁', ans: 'The straight road is direct', opts: [{ txt: 'The straight road is direct', ico: '➡️' }, { txt: 'I like orange juice', ico: '🧃' }, { txt: 'She has a new hat', ico: '🎩' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Hộp Lời Hứa Năm Học Mới',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ hoặc anh chị chuẩn bị một chiếc hộp và vài mảnh giấy nhỏ. Mỗi người viết một kế hoạch, ví dụ <i>"I am going to speak clearly"</i> hoặc <i>"I will try again if I fail"</i>.',
              '<b>Bước 2:</b> Bỏ giấy vào hộp, lần lượt rút một mảnh và đọc to. Người rút phải nói thêm một dự đoán với <i>"I might..."</i>, ví dụ <i>"I might see the director tomorrow"</i>.',
              '<b>Bước 3:</b> Cả nhà cùng đặt một điều kiện bằng <i>"If..."</i> cho kế hoạch đó. Câu nào nói đúng thì được một điểm, ai nhiều điểm nhất được chọn món tráng miệng.'
            ]
          }
        }
      ]
    }
  }
};
