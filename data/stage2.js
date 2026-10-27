/* GIAI ĐOẠN 2 — Cambridge Movers (A1)
   Dữ liệu một giai đoạn. Nạp bằng <script src> (chạy được từ file://, không dùng fetch).
   Định dạng bài học: xem docs/GEMINI_LESSON_PROMPT.md; kiểm bằng: python tools/validate_lessons.py */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[2] = {
  label: '🚀 GĐ 2: Movers',  // chữ hiện trên nút chọn giai đoạn
  modules: [
    { code: '2.1', title: 'Thói Quen & Tần Suất (Routines)' },
    { code: '2.2', title: 'Thị Trấn, Xe Cộ & Quy Tắc (Must)' },
    { code: '2.3', title: 'Kể Chuyện Quá Khứ (Yesterday)' },
    { code: '2.4', title: 'So Sánh Hơn & Nhất (Bigger/Biggest)' },
    { code: '2.5', title: 'Sức Khỏe, Lời Khuyên & Because' },
    { code: '2.6', title: 'Kể Chuyện Hôm Qua Hay Hơn' },
    { code: '2.7', title: 'Ngày Mai Con Sẽ Làm Gì' },
    { code: '2.8', title: 'Mấy Giờ Rồi Nhỉ' },
    { code: '2.9', title: 'Bao Nhiêu Nhỉ' },
    { code: '2.10', title: 'Của Ai, Cho Ai' },
    { code: '2.11', title: 'Quá Nhiều, Rất Nhiều' },
    { code: '2.12', title: 'Nối Câu Thật Mượt' }
  ],
  data: {
    '2.1': {
      lessons: [
        {
          id: '2.1A', name: 'Bài 2.1A: Nhịp sinh học sáng & tối',
          grammar: {
            formulas: ['👦 I + ⏰ wake up / 🪥 brush / 🚿 wash (Thói quen lặp lại mỗi ngày)'],
            tip: 'Việc lặp đi lặp lại mỗi sáng và tối: Dùng động từ nguyên mẫu với "I"!'
          },
          chunks: [
            { scene: '🌅👦⏰', full: 'I wake up early', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wake up',ico:'⏰',c:'v'}, {t:'early',ico:'🌅',c:'o'}], traceWord: 'wake' },
            { scene: '👦🪥🦷', full: 'I brush my teeth', parts: [{t:'I',ico:'👦',c:'s'}, {t:'brush',ico:'🪥',c:'v'}, {t:'my teeth',ico:'🦷',c:'o'}], traceWord: 'teeth' },
            { scene: '👦🚿🧼', full: 'I wash my face', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wash',ico:'🚿',c:'v'}, {t:'my face',ico:'😊',c:'o'}], traceWord: 'wash' },
            { scene: '🌙👦🛌', full: 'I sleep at night', parts: [{t:'I',ico:'👦',c:'s'}, {t:'sleep',ico:'💤',c:'v'}, {t:'at night',ico:'🌙',c:'o'}], traceWord: 'night' }
          ],
          qaList: [
            { q: 'What do you do in the morning?', scene: '👦🪥🦷', ans: 'I brush my teeth', opts: [{ txt: 'I brush my teeth', ico: '🪥🦷' }, { txt: 'I sleep at night', ico: '🌙' }, { txt: 'It was sunny', ico: '☀️' }] },
            { q: 'When do you go to sleep?', scene: '🌙👦🛌', ans: 'I sleep at night', opts: [{ txt: 'I sleep at night', ico: '💤🌙' }, { txt: 'I wake up early', ico: '🌅' }, { txt: 'By car', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Nhịp Sinh Hoạt Sáng & Tối',
            steps: ['<b>Bước 1:</b> Mỗi sáng khi đánh răng rửa mặt, con tự nói to <i>"I wake up early! I brush my teeth!"</i>.']
          }
        },
        {
          id: '2.1B', name: 'Bài 2.1B: Trạng từ tần suất',
          grammar: {
            formulas: ['💯 always (100%)', '🎵 often (75%)', '🔄 sometimes (50%)', '🚫 never (0%)'],
            tip: 'Từ chỉ tần suất luôn đứng NGAY TRƯỚC hành động (I always read / I never eat)!'
          },
          chunks: [
            { scene: '💯👦📖', full: 'I always read books', parts: [{t:'I',ico:'👦',c:'s'}, {t:'always read',ico:'💯📖',c:'v'}, {t:'books',ico:'📚',c:'o'}], traceWord: 'always' },
            { scene: '👧🎹🎵', full: 'She often plays piano', parts: [{t:'She',ico:'👧',c:'s'}, {t:'often plays',ico:'🎵',c:'v'}, {t:'piano',ico:'🎹',c:'o'}], traceWord: 'often' },
            { scene: '👦🏊‍♂️🌊', full: 'He sometimes swims', parts: [{t:'He',ico:'👦',c:'s'}, {t:'sometimes',ico:'🔄',c:'v'}, {t:'swims',ico:'🏊‍♂️',c:'o'}], traceWord: 'swims' },
            { scene: '🚫🍬🌙', full: 'I never eat candy', parts: [{t:'I',ico:'👦',c:'s'}, {t:'never eat',ico:'🚫🍽️',c:'v'}, {t:'candy',ico:'🍬',c:'o'}], traceWord: 'never' }
          ],
          qaList: [
            { q: 'How often do you read books?', scene: '💯👦📖', ans: 'I always read books', opts: [{ txt: 'I always read books', ico: '💯📚' }, { txt: 'I never eat candy', ico: '🚫🍬' }, { txt: 'Turn left', ico: '⬅️' }] },
            { q: 'Do you eat candy at night?', scene: '🚫🍬🌙', ans: 'I never eat candy', opts: [{ txt: 'I never eat candy', ico: '🚫🍬' }, { txt: 'She often plays piano', ico: '🎹' }, { txt: 'At the zoo', ico: '🦁' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Phỏng Vấn Thói Quen Tốt',
            steps: ['<b>Bước 1:</b> Bố hỏi <i>"How often do you read books?"</i> → Con đáp <i>"I always read books!"</i>.']
          }
        },
        {
          id: '2.1C', name: 'Bài 2.1C: Các ngày trong tuần',
          grammar: {
            formulas: ['📅 on + Monday / Friday / Sunday'],
            tip: 'Trước các thứ trong tuần (Monday -> Sunday), luôn dùng giới từ "on"!'
          },
          chunks: [
            { scene: '📅🎒🏫', full: 'I study on Monday', parts: [{t:'I',ico:'👦',c:'s'}, {t:'study',ico:'🎒',c:'v'}, {t:'on Monday',ico:'📅',c:'o'}], traceWord: 'monday' },
            { scene: '📅⚽🌳', full: 'We play on Friday', parts: [{t:'We',ico:'👦👧',c:'s'}, {t:'play',ico:'⚽',c:'v'}, {t:'on Friday',ico:'📅',c:'o'}], traceWord: 'friday' },
            { scene: '📅🏡👨‍👩‍👧', full: 'I relax on Sunday', parts: [{t:'I',ico:'👦',c:'s'}, {t:'relax',ico:'🏡',c:'v'}, {t:'on Sunday',ico:'☀️',c:'o'}], traceWord: 'sunday' },
            { scene: '📅7️⃣✨', full: 'Seven days a week', parts: [{t:'Seven',ico:'7️⃣',c:'s'}, {t:'days',ico:'📅',c:'v'}, {t:'a week',ico:'✨',c:'o'}], traceWord: 'week' }
          ],
          qaList: [
            { q: 'When do you go to school?', scene: '📅🎒🏫', ans: 'I study on Monday', opts: [{ txt: 'I study on Monday', ico: '🎒📅' }, { txt: 'I relax on Sunday', ico: '🏡☀️' }, { txt: 'Bigger than', ico: '🐘' }] },
            { q: 'What do you do on Sunday?', scene: '📅🏡👨‍👩‍👧', ans: 'I relax on Sunday', opts: [{ txt: 'I relax on Sunday', ico: '🏡☀️' }, { txt: 'I brush my teeth', ico: '🪥' }, { txt: 'He has a cold', ico: '🤧' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Lịch Trình Tuần',
            steps: ['<b>Bước 1:</b> Bố chỉ vào tờ lịch và hỏi <i>"What do you do on Monday / Sunday?"</i>.']
          }
        }
      ]
    },
    '2.2': {
      lessons: [
        {
          id: '2.2A', name: 'Bài 2.2A: Địa điểm quanh ta',
          grammar: {
            formulas: ['🚶‍♀️ go to + the market', '🛝 play in + the park', '🏥 work at + the hospital'],
            tip: 'Đi đến đâu dùng "go to" • Ở tại địa điểm nào dùng "in / at"!'
          },
          chunks: [
            { scene: '👩🛒🍎', full: 'Mom goes to the market', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'goes to',ico:'🚶‍♀️',c:'v'}, {t:'the market',ico:'🛒',c:'o'}], traceWord: 'market' },
            { scene: '👦👧🌳🛝', full: 'We play in the park', parts: [{t:'We',ico:'👦👧',c:'s'}, {t:'play in',ico:'🛝',c:'v'}, {t:'the park',ico:'🌳',c:'o'}], traceWord: 'park' },
            { scene: '🦁🐘🦒', full: 'Animals live at the zoo', parts: [{t:'Animals',ico:'🦁',c:'s'}, {t:'live at',ico:'📍',c:'v'}, {t:'the zoo',ico:'🐘',c:'o'}], traceWord: 'zoo' },
            { scene: '👨‍⚕️🏥💊', full: 'Doctors work at the hospital', parts: [{t:'Doctors',ico:'👨‍⚕️',c:'s'}, {t:'work at',ico:'🏥',c:'v'}, {t:'the hospital',ico:'💊',c:'o'}], traceWord: 'doctors' }
          ],
          qaList: [
            { q: 'Where does Mom buy food?', scene: '👩🛒🍎', ans: 'Mom goes to the market', opts: [{ txt: 'Mom goes to the market', ico: '👩🛒' }, { txt: 'Animals live at the zoo', ico: '🦁' }, { txt: 'I sleep at night', ico: '🌙' }] },
            { q: 'Where do you play with friends?', scene: '👦👧🌳🛝', ans: 'We play in the park', opts: [{ txt: 'We play in the park', ico: '🌳🛝' }, { txt: 'Doctors work at the hospital', ico: '🏥' }, { txt: 'Two cats', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Đi Dạo Phố Cùng Bố Mẹ',
            steps: ['<b>Bước 1:</b> Khi đi qua công viên/siêu thị, con chỉ tay nói <i>"We play in the park / Mom goes to the market!"</i>.']
          }
        },
        {
          id: '2.2B', name: 'Bài 2.2B: Phương tiện giao thông',
          grammar: {
            formulas: ['🛣️ by + 🚗 car / 🚌 bus / 🚂 train'],
            tip: 'Đi bằng phương tiện gì, ta gắn chữ "by" ở trước (by car, by bus)!'
          },
          chunks: [
            { scene: '👨🚗🛣️', full: 'We travel by car', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'travel',ico:'🛣️',c:'v'}, {t:'by car',ico:'🚗',c:'o'}], traceWord: 'car' },
            { scene: '👦🚌🏫', full: 'He goes by bus', parts: [{t:'He',ico:'👦',c:'s'}, {t:'goes',ico:'➡️',c:'v'}, {t:'by bus',ico:'🚌',c:'o'}], traceWord: 'bus' },
            { scene: '🚂💨🛤️', full: 'The train is long', parts: [{t:'The train',ico:'🚂',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'long',ico:'🛤️',c:'o'}], traceWord: 'train' },
            { scene: '✈️☁️🌍', full: 'Planes fly in the sky', parts: [{t:'Planes',ico:'✈️',c:'s'}, {t:'fly in',ico:'☁️',c:'v'}, {t:'the sky',ico:'🌍',c:'o'}], traceWord: 'planes' }
          ],
          qaList: [
            { q: 'How do we travel today?', scene: '👨🚗🛣️', ans: 'We travel by car', opts: [{ txt: 'We travel by car', ico: '🚗🛣️' }, { txt: 'I brush my teeth', ico: '🪥' }, { txt: 'Under the bed', ico: '🛏️' }] },
            { q: 'Where do planes fly?', scene: '✈️☁️🌍', ans: 'Planes fly in the sky', opts: [{ txt: 'Planes fly in the sky', ico: '✈️☁️' }, { txt: 'He goes by bus', ico: '🚌' }, { txt: 'I am hungry', ico: '🍔' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Khi Lên Xe Ô Tô',
            steps: ['<b>Bước 1:</b> Khi lên xe ô tô đi học, con nói <i>"We travel by car!"</i>.']
          }
        },
        {
          id: '2.2C', name: 'Bài 2.2C: Chỉ đường & Quy tắc (Must)',
          grammar: {
            formulas: ['🛑 You must + stop / wear a helmet (Quy tắc bắt buộc)'],
            tip: 'Quy tắc an toàn bắt buộc phải làm: Dùng "You must + hành động"!'
          },
          chunks: [
            { scene: '🚦🛑🚗', full: 'You must stop here', parts: [{t:'You',ico:'👉',c:'s'}, {t:'must stop',ico:'🛑',c:'v'}, {t:'here',ico:'🚦',c:'o'}], traceWord: 'stop' },
            { scene: '🛵🪖👍', full: 'You must wear a helmet', parts: [{t:'You',ico:'👦',c:'s'}, {t:'must wear',ico:'👍',c:'v'}, {t:'a helmet',ico:'🪖',c:'o'}], traceWord: 'must' },
            { scene: '⬅️🛣️🚗', full: 'Turn left right now', parts: [{t:'Turn',ico:'🔄',c:'v'}, {t:'left',ico:'⬅️',c:'o'}, {t:'right now',ico:'🛣️',c:'s'}], traceWord: 'left' },
            { scene: '⬆️🚶‍♂️🛣️', full: 'Go straight ahead', parts: [{t:'Go',ico:'🚶‍♂️',c:'v'}, {t:'straight',ico:'⬆️',c:'o'}, {t:'ahead',ico:'🛣️',c:'s'}], traceWord: 'straight' }
          ],
          qaList: [
            { q: 'The light is red! What must we do?', scene: '🚦🛑🚗', ans: 'You must stop here', opts: [{ txt: 'You must stop here', ico: '🛑🚦' }, { txt: 'I relax on Sunday', ico: '☀️' }, { txt: 'Sweet bananas', ico: '🍌' }] },
            { q: 'Which way should we turn?', scene: '⬅️🛣️🚗', ans: 'Turn left right now', opts: [{ txt: 'Turn left right now', ico: '⬅️🛣️' }, { txt: 'Planes fly in the sky', ico: '✈️' }, { txt: 'Seven days', ico: '7️⃣' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Hoa Tiêu Chỉ Đường',
            steps: ['<b>Bước 1:</b> Con hô khẩu lệnh <i>"Go straight ahead! Turn left right now! You must stop here!"</i>.']
          }
        }
      ]
    },
    '2.3': {
      lessons: [
        {
          id: '2.3A', name: 'Bài 2.3A: Hôm qua ở đâu? (Was / Were)',
          grammar: {
            formulas: ['⏪ I / It + was (Hôm qua)', '⏪ We / They + were (Hôm qua)'],
            tip: 'Khi có "Yesterday" (Hôm qua): am/is đổi thành "was" • are đổi thành "were"!'
          },
          chunks: [
            { scene: '⏪👦🏡', full: 'Yesterday I was at home', parts: [{t:'Yesterday I',ico:'⏪👦',c:'s'}, {t:'was',ico:'📍',c:'v'}, {t:'at home',ico:'🏡',c:'o'}], traceWord: 'was' },
            { scene: '⏪👦👧🦁', full: 'We were at the zoo', parts: [{t:'We',ico:'👦👧',c:'s'}, {t:'were',ico:'⏪',c:'v'}, {t:'at the zoo',ico:'🦁',c:'o'}], traceWord: 'were' },
            { scene: '⏪☀️🌡️', full: 'It was sunny yesterday', parts: [{t:'It',ico:'🌤️',c:'s'}, {t:'was sunny',ico:'☀️',c:'v'}, {t:'yesterday',ico:'⏪',c:'o'}], traceWord: 'sunny' },
            { scene: '⏪🎬😂', full: 'The movie was funny', parts: [{t:'The movie',ico:'🎬',c:'s'}, {t:'was',ico:'⏪',c:'v'}, {t:'funny',ico:'😂',c:'o'}], traceWord: 'funny' }
          ],
          qaList: [
            { q: 'Where were you yesterday?', scene: '⏪👦🏡', ans: 'Yesterday I was at home', opts: [{ txt: 'Yesterday I was at home', ico: '⏪🏡' }, { txt: 'You must stop here', ico: '🛑' }, { txt: 'I brush my teeth', ico: '🪥' }] },
            { q: 'How was the weather yesterday?', scene: '⏪☀️🌡️', ans: 'It was sunny yesterday', opts: [{ txt: 'It was sunny yesterday', ico: '☀️⏪' }, { txt: 'We travel by car', ico: '🚗' }, { txt: 'Two cats', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Hồi Tưởng Ngày Hôm Qua',
            steps: ['<b>Bước 1:</b> Bố chỉ ngón cái ra sau lưng hỏi <i>"Where were you yesterday?"</i> → Con đáp <i>"Yesterday I was at home!"</i>.']
          }
        },
        {
          id: '2.3B', name: 'Bài 2.3B: Việc đã làm hôm qua (-ed)',
          grammar: {
            formulas: ['⏪ play → played', '⏪ cook → cooked', '⏪ watch → watched'],
            tip: 'Kể chuyện đã làm hôm qua: Gắn thêm đuôi "-ed" vào sau động từ!'
          },
          chunks: [
            { scene: '⏪👧🎹', full: 'I played piano yesterday', parts: [{t:'I',ico:'👧',c:'s'}, {t:'played piano',ico:'🎹',c:'v'}, {t:'yesterday',ico:'⏪',c:'o'}], traceWord: 'played' },
            { scene: '⏪👩🍳', full: 'Mom cooked a good meal', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'cooked',ico:'🍳',c:'v'}, {t:'a good meal',ico:'🍲',c:'o'}], traceWord: 'cooked' },
            { scene: '⏪👦🪴', full: 'I watered the green trees', parts: [{t:'I',ico:'👦',c:'s'}, {t:'watered',ico:'💧',c:'v'}, {t:'the green trees',ico:'🪴',c:'o'}], traceWord: 'watered' },
            { scene: '⏪👨‍👩‍👧📺', full: 'We watched a movie', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'watched',ico:'📺',c:'v'}, {t:'a movie',ico:'🎬',c:'o'}], traceWord: 'watched' }
          ],
          qaList: [
            { q: 'What did you play yesterday?', scene: '⏪👧🎹', ans: 'I played piano yesterday', opts: [{ txt: 'I played piano yesterday', ico: '🎹⏪' }, { txt: 'Mom goes to the market', ico: '🛒' }, { txt: 'Turn left', ico: '⬅️' }] },
            { q: 'What did Mom cook yesterday?', scene: '⏪👩🍳', ans: 'Mom cooked a good meal', opts: [{ txt: 'Mom cooked a good meal', ico: '👩🍳' }, { txt: 'Planes fly in the sky', ico: '✈️' }, { txt: 'Seven days', ico: '7️⃣' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Báo Cáo Việc Đã Làm',
            steps: ['<b>Bước 1:</b> Cuối ngày con kể lại: <i>"I played piano yesterday! Mom cooked a good meal!"</i>.']
          }
        },
        {
          id: '2.3C', name: 'Bài 2.3C: 4 Động từ quá khứ đặc biệt',
          grammar: {
            formulas: ['go → went (đã đi)', 'see → saw (đã thấy)', 'eat → ate (đã ăn)', 'drink → drank (đã uống)'],
            tip: '4 động từ siêu nhân biến hình hoàn toàn khi kể chuyện hôm qua / sáng nay!'
          },
          chunks: [
            { scene: '⏪🚶‍♂️🌳', full: 'I went to the park', parts: [{t:'I',ico:'👦',c:'s'}, {t:'went to',ico:'⏪🚶‍♂️',c:'v'}, {t:'the park',ico:'🌳',c:'o'}], traceWord: 'went' },
            { scene: '⏪👀🐟', full: 'I saw a big fish', parts: [{t:'I',ico:'👦',c:'s'}, {t:'saw',ico:'⏪👀',c:'v'}, {t:'a big fish',ico:'🐟',c:'o'}], traceWord: 'saw' },
            { scene: '⏪🍽️🍜', full: 'I ate beef noodles', parts: [{t:'I',ico:'👦',c:'s'}, {t:'ate',ico:'⏪🍽️',c:'v'}, {t:'beef noodles',ico:'🍜',c:'o'}], traceWord: 'ate' },
            { scene: '⏪🥤🥛', full: 'I drank warm milk', parts: [{t:'I',ico:'👦',c:'s'}, {t:'drank',ico:'⏪🥤',c:'v'}, {t:'warm milk',ico:'🥛',c:'o'}], traceWord: 'drank' }
          ],
          qaList: [
            { q: 'What did you eat this morning?', scene: '⏪🍽️🍜', ans: 'I ate beef noodles', opts: [{ txt: 'I ate beef noodles', ico: '⏪🍜' }, { txt: 'I wake up early', ico: '🌅' }, { txt: 'You must stop', ico: '🛑' }] },
            { q: 'What did you see in the pond?', scene: '⏪👀🐟', ans: 'I saw a big fish', opts: [{ txt: 'I saw a big fish', ico: '👀🐟' }, { txt: 'I drank warm milk', ico: '🥛' }, { txt: 'On Sunday', ico: '☀️' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Kể Chuyện Bữa Sáng',
            steps: ['<b>Bước 1:</b> Buổi tối bố hỏi sáng nay ăn gì → Con đáp <i>"I ate beef noodles! I drank warm milk!"</i>.']
          }
        }
      ]
    },
    '2.4': {
      lessons: [
        {
          id: '2.4A', name: 'Bài 2.4A: So sánh hơn (-er than)',
          grammar: {
            formulas: ['big → bigger than', 'fast → faster than', 'tall → taller than'],
            tip: 'Khi đặt 2 vật cạnh nhau để so sánh: Thêm đuôi "-er than" (to hơn / nhanh hơn)!'
          },
          chunks: [
            { scene: '🐘⬆️🐶', full: 'An elephant is bigger than a dog', parts: [{t:'An elephant',ico:'🐘',c:'s'}, {t:'is bigger than',ico:'⬆️',c:'v'}, {t:'a dog',ico:'🐶',c:'o'}], traceWord: 'bigger' },
            { scene: '🚗💨🚲', full: 'A car is faster than a bike', parts: [{t:'A car',ico:'🚗',c:'s'}, {t:'is faster than',ico:'💨',c:'v'}, {t:'a bike',ico:'🚲',c:'o'}], traceWord: 'faster' },
            { scene: '🦒⬆️🐎', full: 'A giraffe is taller than a horse', parts: [{t:'A giraffe',ico:'🦒',c:'s'}, {t:'is taller than',ico:'⬆️',c:'v'}, {t:'a horse',ico:'🐎',c:'o'}], traceWord: 'taller' },
            { scene: '👨⬆️👦', full: 'Dad is stronger than me', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'is stronger than',ico:'💪',c:'v'}, {t:'me',ico:'👦',c:'o'}], traceWord: 'stronger' }
          ],
          qaList: [
            { q: 'Compare an elephant and a dog!', scene: '🐘⬆️🐶', ans: 'An elephant is bigger than a dog', opts: [{ txt: 'An elephant is bigger than a dog', ico: '🐘⬆️🐶' }, { txt: 'I went to the park', ico: '🌳' }, { txt: 'Turn left', ico: '⬅️' }] },
            { q: 'Which one is faster: a car or a bike?', scene: '🚗💨🚲', ans: 'A car is faster than a bike', opts: [{ txt: 'A car is faster than a bike', ico: '🚗💨🚲' }, { txt: 'I brush my teeth', ico: '🪥' }, { txt: 'At home', ico: '🏡' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: So Sánh 2 Đồ Vật',
            steps: ['<b>Bước 1:</b> Con đứng cạnh bố và nói <i>"Dad is stronger than me! A car is faster than a bike!"</i>.']
          }
        },
        {
          id: '2.4B', name: 'Bài 2.4B: So sánh nhất (The -est)',
          grammar: {
            formulas: ['👑 the biggest (to nhất)', '👑 the fastest (nhanh nhất)', '👑 the tallest (cao nhất)'],
            tip: 'Khi trao vương miện số 1 (Nhất): Luôn dùng "the + đuôi -est"!'
          },
          chunks: [
            { scene: '🐋👑🌊', full: 'The whale is the biggest', parts: [{t:'The whale',ico:'🐋',c:'s'}, {t:'is',ico:'👑',c:'v'}, {t:'the biggest',ico:'⬆️',c:'o'}], traceWord: 'biggest' },
            { scene: '🐆👑💨', full: 'The cheetah is the fastest', parts: [{t:'The cheetah',ico:'🐆',c:'s'}, {t:'is',ico:'👑',c:'v'}, {t:'the fastest',ico:'💨',c:'o'}], traceWord: 'fastest' },
            { scene: '🦒👑🌳', full: 'The giraffe is the tallest', parts: [{t:'The giraffe',ico:'🦒',c:'s'}, {t:'is',ico:'👑',c:'v'}, {t:'the tallest',ico:'⬆️',c:'o'}], traceWord: 'tallest' },
            { scene: '👵👑❤️', full: 'Grandma is the kindest', parts: [{t:'Grandma',ico:'👵',c:'s'}, {t:'is',ico:'👑',c:'v'}, {t:'the kindest',ico:'❤️',c:'o'}], traceWord: 'kindest' }
          ],
          qaList: [
            { q: 'Which animal is the biggest in the sea?', scene: '🐋👑🌊', ans: 'The whale is the biggest', opts: [{ txt: 'The whale is the biggest', ico: '🐋👑' }, { txt: 'I ate beef noodles', ico: '🍜' }, { txt: 'On Monday', ico: '📅' }] },
            { q: 'Which animal runs the fastest?', scene: '🐆👑💨', ans: 'The cheetah is the fastest', opts: [{ txt: 'The cheetah is the fastest', ico: '🐆💨' }, { txt: 'You must wear a helmet', ico: '🪖' }, { txt: 'At night', ico: '🌙' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Tìm Nhà Vô Địch',
            steps: ['<b>Bước 1:</b> Chỉ ra con cá to nhất trong bể hoặc cây cao nhất ngoài sân: <i>"This is the biggest!"</i>.']
          }
        },
        {
          id: '2.4C', name: 'Bài 2.4C: Thời tiết & Thiên nhiên',
          grammar: {
            formulas: ['☀️ Today is + hotter than + ⏪ yesterday', '🌤️ It is + windy and cool'],
            tip: 'Mô tả thời tiết và cảnh vật tự nhiên bằng "It is / The river is + tính từ"!'
          },
          chunks: [
            { scene: '☀️🌡️🥵', full: 'Today is hotter than yesterday', parts: [{t:'Today',ico:'☀️',c:'s'}, {t:'is hotter than',ico:'🌡️',c:'v'}, {t:'yesterday',ico:'⏪',c:'o'}], traceWord: 'hotter' },
            { scene: '🌬️🍃🌳', full: 'It is windy and cool', parts: [{t:'It',ico:'🌤️',c:'s'}, {t:'is windy',ico:'🌬️',c:'v'}, {t:'and cool',ico:'🍃',c:'o'}], traceWord: 'windy' },
            { scene: '🏞️🌊➡️', full: 'The river is very long', parts: [{t:'The river',ico:'🏞️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'very long',ico:'🌊',c:'o'}], traceWord: 'river' },
            { scene: '⛰️☁️⬆️', full: 'The mountain is high', parts: [{t:'The mountain',ico:'⛰️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'high',ico:'☁️',c:'o'}], traceWord: 'high' }
          ],
          qaList: [
            { q: 'How is the weather outside?', scene: '🌬️🍃🌳', ans: 'It is windy and cool', opts: [{ txt: 'It is windy and cool', ico: '🌬️🍃' }, { txt: 'I never eat candy', ico: '🍬' }, { txt: 'By bus', ico: '🚌' }] },
            { q: 'Look at the mountain!', scene: '⛰️☁️⬆️', ans: 'The mountain is high', opts: [{ txt: 'The mountain is high', ico: '⛰️☁️' }, { txt: 'I brush my teeth', ico: '🪥' }, { txt: 'Two cats', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Bản Tin Thời Tiết',
            steps: ['<b>Bước 1:</b> Bước ra sân nhà và mô tả thời tiết: <i>"It is windy and cool!"</i>.']
          }
        }
      ]
    },
    '2.5': {
      lessons: [
        {
          id: '2.5A', name: 'Bài 2.5A: Sức khỏe & Cơ thể',
          grammar: {
            formulas: ['👦 I have + 🤕 a headache', '👧 She has + 🦷 a toothache', '🦵 My leg + hurts'],
            tip: 'Nói triệu chứng bệnh: Dùng "have/has a + tên bệnh" hoặc "My... hurts"!'
          },
          chunks: [
            { scene: '👦🤕💥', full: 'I have a headache', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'a headache',ico:'🤕',c:'o'}], traceWord: 'headache' },
            { scene: '👧🦷😣', full: 'She has a toothache', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a toothache',ico:'🦷',c:'o'}], traceWord: 'toothache' },
            { scene: '👦🤧🧣', full: 'He has a bad cold', parts: [{t:'He',ico:'👦',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a bad cold',ico:'🤧',c:'o'}], traceWord: 'cold' },
            { scene: '👦🦵🩹', full: 'My leg hurts today', parts: [{t:'My leg',ico:'🦵',c:'s'}, {t:'hurts',ico:'🩹',c:'v'}, {t:'today',ico:'📅',c:'o'}], traceWord: 'hurts' }
          ],
          qaList: [
            { q: 'What is the matter with you?', scene: '👦🤕💥', ans: 'I have a headache', opts: [{ txt: 'I have a headache', ico: '🤕💥' }, { txt: 'The whale is the biggest', ico: '🐋' }, { txt: 'By car', ico: '🚗' }] },
            { q: 'Why is she crying?', scene: '👧🦷😣', ans: 'She has a toothache', opts: [{ txt: 'She has a toothache', ico: '🦷😣' }, { txt: 'We play in the park', ico: '🌳' }, { txt: 'On Sunday', ico: '☀️' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Bác Sĩ Nhí Khám Bệnh',
            steps: ['<b>Bước 1:</b> Con đóng vai bác sĩ hỏi <i>"What is the matter?"</i> → Bố đáp <i>"I have a headache!"</i>.']
          }
        },
        {
          id: '2.5B', name: 'Bài 2.5B: Đưa ra lời khuyên (Should)',
          grammar: {
            formulas: ['👍 You should + drink warm water / take a rest', '🚫 You should not + stay up late'],
            tip: 'Khuyên ai nên làm gì dùng "You should..." • Khuyên không nên dùng "You should not..."!'
          },
          chunks: [
            { scene: '👉🥤💧', full: 'You should drink warm water', parts: [{t:'You',ico:'👉',c:'s'}, {t:'should drink',ico:'🥤',c:'v'}, {t:'warm water',ico:'💧',c:'o'}], traceWord: 'should' },
            { scene: '👉🛌💤', full: 'You should take a rest', parts: [{t:'You',ico:'👉',c:'s'}, {t:'should take',ico:'👍',c:'v'}, {t:'a rest',ico:'🛌',c:'o'}], traceWord: 'rest' },
            { scene: '👉👨‍⚕️🏥', full: 'You should see a doctor', parts: [{t:'You',ico:'👉',c:'s'}, {t:'should see',ico:'👀',c:'v'}, {t:'a doctor',ico:'👨‍⚕️',c:'o'}], traceWord: 'doctor' },
            { scene: '🚫🌙🎮', full: 'You should not stay up late', parts: [{t:'You',ico:'👉',c:'s'}, {t:'should not',ico:'🚫',c:'v'}, {t:'stay up late',ico:'🌙',c:'o'}], traceWord: 'late' }
          ],
          qaList: [
            { q: 'I have a cold! What should I do?', scene: '👉🥤💧', ans: 'You should drink warm water', opts: [{ txt: 'You should drink warm water', ico: '🥤💧' }, { txt: 'A car is faster than a bike', ico: '🚗' }, { txt: 'At the zoo', ico: '🦁' }] },
            { q: 'I am very tired! What should I do?', scene: '👉🛌💤', ans: 'You should take a rest', opts: [{ txt: 'You should take a rest', ico: '🛌💤' }, { txt: 'I ate beef noodles', ico: '🍜' }, { txt: 'Turn left', ico: '⬅️' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Lời Khuyên Của Bác Sĩ Nhí',
            steps: ['<b>Bước 1:</b> Con khuyên bố mẹ: <i>"You should drink warm water! You should take a rest!"</i>.']
          }
        },
        {
          id: '2.5C', name: 'Bài 2.5C: Giải thích lý do (Because)',
          grammar: {
            formulas: ['[Hành động] + 💡 because (bởi vì) + [Lý do]'],
            tip: 'Hỏi bằng "Why...?" (Tại sao) → Luôn nối lý do bằng chữ "because" (bởi vì)!'
          },
          chunks: [
            { scene: '🧥❄️🌬️', full: 'I wear a coat because it is cold', parts: [{t:'I wear a coat',ico:'🧥',c:'s'}, {t:'because',ico:'💡',c:'v'}, {t:'it is cold',ico:'❄️',c:'o'}], traceWord: 'because' },
            { scene: '💧👦🥵', full: 'I drink water because I am thirsty', parts: [{t:'I drink water',ico:'💧',c:'s'}, {t:'because',ico:'💡',c:'v'}, {t:'I am thirsty',ico:'🥵',c:'o'}], traceWord: 'thirsty' },
            { scene: '🏠🌧️☔', full: 'We stay home because it is rainy', parts: [{t:'We stay home',ico:'🏠',c:'s'}, {t:'because',ico:'💡',c:'v'}, {t:'it is rainy',ico:'🌧️',c:'o'}], traceWord: 'rainy' },
            { scene: '😄🎁🎉', full: 'She smiles because she is happy', parts: [{t:'She smiles',ico:'😄',c:'s'}, {t:'because',ico:'💡',c:'v'}, {t:'she is happy',ico:'🎉',c:'o'}], traceWord: 'smiles' }
          ],
          qaList: [
            { q: 'Why do you wear a warm coat?', scene: '🧥❄️🌬️', ans: 'I wear a coat because it is cold', opts: [{ txt: 'I wear a coat because it is cold', ico: '🧥❄️' }, { txt: 'I study on Monday', ico: '📅' }, { txt: 'By bus', ico: '🚌' }] },
            { q: 'Why do we stay at home today?', scene: '🏠🌧️☔', ans: 'We stay home because it is rainy', opts: [{ txt: 'We stay home because it is rainy', ico: '🏠🌧️' }, { txt: 'The giraffe is the tallest', ico: '🦒' }, { txt: 'Two cats', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Thực chiến Đời thực: Hỏi "Why?" – Đáp "Because!"',
            steps: ['<b>Bước 1:</b> Bố hỏi <i>"Why do you drink water?"</i> → Con đáp <i>"I drink water because I am thirsty!"</i>.']
          }
        }
      ]
    },
    '2.6': {
      lessons: [
        {
          id: '2.6A', name: 'Bài 2.6A: Chuyến đi chơi & kỳ nghỉ',
          grammar: {
            formulas: ['👦 We + ⚡ had + 🏨 a large room', '👩 She + ⚡ took / made / got / gave + 🎒 something'],
            tip: 'Chuyện hôm qua thì đổi động từ: have → had, come → came, take → took, make → made, get → got, give → gave. Không thêm -ed đâu nhé!'
          },
          chunks: [
            { scene: '🏨🛏️👨‍👩‍👧', full: 'We had a large room', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'had',ico:'🤲',c:'v'}, {t:'a large room',ico:'🏨',c:'o'}], traceWord: 'large' },
            { scene: '👨📋🚗', full: 'My father came with a plan', parts: [{t:'My father',ico:'👨',c:'s'}, {t:'came',ico:'🚶',c:'v'}, {t:'with a plan',ico:'📋',c:'o'}], traceWord: 'plan' },
            { scene: '👧🎒🚶', full: 'She took her bag away', parts: [{t:'She',ico:'👧',c:'s'}, {t:'took',ico:'🤲',c:'v'}, {t:'her bag away',ico:'🎒',c:'o'}], traceWord: 'away' },
            { scene: '👦♟️👍', full: 'He made a good move', parts: [{t:'He',ico:'👦',c:'s'}, {t:'made',ico:'🛠️',c:'v'}, {t:'a good move',ico:'➡️',c:'o'}], traceWord: 'move' },
            { scene: '👩💼ℹ️', full: 'My mother got business information', parts: [{t:'My mother',ico:'👩',c:'s'}, {t:'got',ico:'📥',c:'v'}, {t:'business information',ico:'💼',c:'o'}], traceWord: 'information' },
            { scene: '👧📌🏫', full: 'I gave an example to the class', parts: [{t:'I',ico:'👧',c:'s'}, {t:'gave',ico:'🎁',c:'v'}, {t:'an example to the class',ico:'📌',c:'o'}], traceWord: 'example' },
            { scene: '👷🏗️🌊', full: 'They built a hotel by the sea', parts: [{t:'They',ico:'👷',c:'s'}, {t:'built',ico:'🏗️',c:'v'}, {t:'a hotel by the sea',ico:'🏨',c:'o'}], traceWord: 'built' },
            { scene: '👧🔤📃', full: 'She brought a word list', parts: [{t:'She',ico:'👧',c:'s'}, {t:'brought',ico:'🎁',c:'v'}, {t:'a word list',ico:'🔤',c:'o'}], traceWord: 'word' }
          ],
          qaList: [
            { q: 'What happened at the beach?', scene: '🏖️👧🤝', ans: 'I made a friend', opts: [{ txt: 'I made a friend', ico: '🤝' }, { txt: 'Two red cars', ico: '🚗' }, { txt: 'In the big bag', ico: '🎒' }] },
            { q: 'Can you bring and hold my bag?', scene: '🎒🤲👦', ans: 'Yes, I can hold it', opts: [{ txt: 'Yes, I can hold it', ico: '✊' }, { txt: 'A horse is blue', ico: '🐴' }, { txt: 'It is ten years', ico: '🔟' }] },
            { q: 'Is this your order?', scene: '🧾🍽️👩', ans: 'Yes, it is my order', opts: [{ txt: 'Yes, it is my order', ico: '🧾' }, { txt: 'On the green tree', ico: '🌳' }, { txt: 'He can sing', ico: '🎤' }] },
            { q: 'Do you believe the result?', scene: '📊🙏👦', ans: 'Yes, I believe it', opts: [{ txt: 'Yes, I believe it', ico: '🙏' }, { txt: 'Under the hot sun', ico: '☀️' }, { txt: 'Two small eggs', ico: '🥚' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Kể Lại Chuyến Đi Hôm Qua',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy 6 món đồ trong nhà (túi, sách, thẻ, bóng...) làm "kỷ niệm chuyến đi" và hỏi con: <i>"What did you take?"</i>.',
              '<b>Bước 2:</b> Con chọn một món, giả vờ đi chơi và nói câu quá khứ: <i>"I took my bag away"</i>, <i>"I made a plan"</i>, <i>"I gave an example"</i>.',
              '<b>Bước 3:</b> Đổi vai: bố/mẹ cố tình nói sai như <i>"I taked a bag"</i>, con phát hiện lỗi và sửa lại thành <i>"I took a bag"</i>.'
            ]
          }
        },
        {
          id: '2.6B', name: 'Bài 2.6B: Một ngày ở trường',
          grammar: {
            formulas: ['👦 He + 🚫 didn\'t + 💰 spend money', '👧 She + 🚫 didn\'t + 😴 sleep'],
            tip: 'Đã dùng didn\'t thì động từ phía sau quay về nguyên mẫu: didn\'t go, didn\'t see. Tuyệt đối không viết didn\'t went nhé!'
          },
          chunks: [
            { scene: '👦💰🚫', full: 'He didn\'t spend much money', parts: [{t:'He',ico:'👦',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'spend much money',ico:'💸',c:'o'}], traceWord: 'spend' },
            { scene: '👧😴⏳', full: 'She didn\'t sleep until ten', parts: [{t:'She',ico:'👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'sleep until ten',ico:'⏳',c:'o'}], traceWord: 'until' },
            { scene: '👨‍👩‍👧💻📺', full: 'They didn\'t see the program', parts: [{t:'They',ico:'👨‍👩‍👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'see the program',ico:'💻',c:'o'}], traceWord: 'program' },
            { scene: '👦🧠✋', full: 'I didn\'t touch my head', parts: [{t:'I',ico:'👦',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'touch my head',ico:'🧠',c:'o'}], traceWord: 'head' },
            { scene: '🧑👧😊', full: 'The young girl didn\'t cry', parts: [{t:'The young girl',ico:'🧑',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'cry',ico:'😢',c:'o'}], traceWord: 'young' },
            { scene: '👨‍🏫📝✏️', full: 'We didn\'t write on the form', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'write on the form',ico:'📝',c:'o'}], traceWord: 'form' },
            { scene: '🧍📏🚫', full: 'I didn\'t stand in line', parts: [{t:'I',ico:'👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'stand in line',ico:'📏',c:'o'}], traceWord: 'line' },
            { scene: '👧🎁🚫', full: 'She didn\'t take the present', parts: [{t:'She',ico:'👧',c:'s'}, {t:'didn\'t',ico:'🚫',c:'v'}, {t:'take the present',ico:'🎁',c:'o'}], traceWord: 'present' }
          ],
          qaList: [
            { q: 'What didn\'t he learn?', scene: '👦📚🧐', ans: 'He didn\'t learn the reason', opts: [{ txt: 'He didn\'t learn the reason', ico: '🧐' }, { txt: 'A big blue bus', ico: '🚌' }, { txt: 'In the kitchen', ico: '🍳' }] },
            { q: 'Who didn\'t sit on this side?', scene: '🪑↔️🧑', ans: 'One person didn\'t sit there', opts: [{ txt: 'One person didn\'t sit there', ico: '🧑' }, { txt: 'Five red bags', ico: '🎒' }, { txt: 'It is very cold', ico: '🥶' }] },
            { q: 'Did you go there once?', scene: '1️⃣🏫👦', ans: 'Yes, I did once', opts: [{ txt: 'Yes, I did once', ico: '1️⃣' }, { txt: 'My sister is short', ico: '👧' }, { txt: 'Two white dogs', ico: '🐕' }] },
            { q: 'Are you sure?', scene: '👍🤔👧', ans: 'I hope so', opts: [{ txt: 'I hope so', ico: '🌈' }, { txt: 'Under the table', ico: '🪑' }, { txt: 'Ten green trees', ico: '🌳' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Hôm Nay Con Không Làm Gì?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ hỏi con về ngày ở trường, cố tình đoán sai: <i>"You spent much money, right?"</i>.',
              '<b>Bước 2:</b> Con lắc đầu và đính chính bằng câu phủ định: <i>"No! I didn\'t spend money"</i>, <i>"I didn\'t cry"</i>.',
              '<b>Bước 3:</b> Con nghĩ ra 3 điều mình KHÔNG làm hôm nay, nói thành câu với <i>didn\'t</i> cho bố/mẹ ghi lại và cùng đọc to.'
            ]
          }
        },
        {
          id: '2.6C', name: 'Bài 2.6C: Tiệc sinh nhật & bạn bè',
          grammar: {
            formulas: ['❓ Did + 👦 you + 🎉 go to the party?', '✅ Yes, I did / 🚫 No, I didn\'t'],
            tip: 'Hỏi với Did thì động từ chính giữ nguyên mẫu: Did you go? (không phải Did you went). Trả lời ngắn: Yes, I did / No, I didn\'t.'
          },
          chunks: [
            { scene: '🎉👦🎈', full: 'Did you go to the party', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'go to the party',ico:'🎉',c:'o'}], traceWord: 'party' },
            { scene: '👨‍👩‍👧🏠🤝', full: 'Did you visit your parents', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'visit your parents',ico:'👪',c:'o'}], traceWord: 'parents' },
            { scene: '📖👧👦', full: 'Did you read the story together', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'read the story together',ico:'📖',c:'o'}], traceWord: 'story' },
            { scene: '📝✏️⏳', full: 'Did you finish the test yet', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'finish the test yet',ico:'📝',c:'o'}], traceWord: 'test' },
            { scene: '🏫👀❓', full: 'Did you see anything at school', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'see anything at school',ico:'🏫',c:'o'}], traceWord: 'anything' },
            { scene: '⚽🤏🏆', full: 'Did you almost win the game', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'almost win the game',ico:'🏆',c:'o'}], traceWord: 'almost' },
            { scene: '🚶🏪🍎', full: 'Did you walk past the fruit stand', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'you',ico:'🚶',c:'s'}, {t:'walk past the fruit stand',ico:'🏪',c:'o'}], traceWord: 'stand' },
            { scene: '🎂👧🔟', full: 'Did she tell you her age', parts: [{t:'Did',ico:'❓',c:'v'}, {t:'she',ico:'👧',c:'s'}, {t:'tell you her age',ico:'🎂',c:'o'}], traceWord: 'age' }
          ],
          qaList: [
            { q: 'Did you finish lunch already?', scene: '🍱✅👦', ans: 'Yes, I did', opts: [{ txt: 'Yes, I did', ico: '✅' }, { txt: 'Two red cars', ico: '🚗' }, { txt: 'In the big bag', ico: '🎒' }] },
            { q: 'Did you take care of the baby?', scene: '👶💚👧', ans: 'Yes, I took care of her', opts: [{ txt: 'Yes, I took care of her', ico: '💚' }, { txt: 'A blue bus', ico: '🚌' }, { txt: 'It is very hot', ico: '🥵' }] },
            { q: 'Did he come soon?', scene: '⏰🚪👦', ans: 'No, he didn\'t come soon', opts: [{ txt: 'No, he didn\'t come soon', ico: '⏰' }, { txt: 'Five white eggs', ico: '🥚' }, { txt: 'On the green tree', ico: '🌳' }] },
            { q: 'Did you play football?', scene: '⚽👦❓', ans: 'No, I didn\'t', opts: [{ txt: 'No, I didn\'t', ico: '🚫' }, { txt: 'Under the table', ico: '🪑' }, { txt: 'Ten small birds', ico: '🐦' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Phóng Viên Tiệc Sinh Nhật',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ làm "phóng viên" cầm một chiếc thìa làm micro và hỏi con về tiệc hoặc ngày hôm qua: <i>"Did you go to the party?"</i>.',
              '<b>Bước 2:</b> Con trả lời ngắn <i>"Yes, I did"</i> hoặc <i>"No, I didn\'t"</i>, rồi thêm một câu kể: <i>"I read the story together with my friend"</i>.',
              '<b>Bước 3:</b> Đổi vai: con làm phóng viên đặt 3 câu hỏi <i>"Did you...?"</i> cho bố/mẹ, bố/mẹ trả lời bằng Yes, I did / No, I didn\'t.'
            ]
          }
        }
      ]
    },
    '2.7': {
      lessons: [
        {
          id: '2.7A', name: 'Bài 2.7A: Kế hoạch cuối tuần',
          grammar: {
            formulas: ['👦 I + ⚡ am going to + 🚶 walk', '👧 She / 👦 He + ⚡ is going to + 🌱 grow', '👥 We / They + ⚡ are going to + 🗣️ learn'],
            tip: 'Dự định sắp làm thì có "going to" • sau "to" luôn là động từ gốc, không thêm -s hay -ing nhé!'
          },
          chunks: [
            { scene: '👦🚶🌳', full: 'I am going to walk', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to',ico:'⚡',c:'v'}, {t:'walk',ico:'🚶',c:'o'}], traceWord: 'walk' },
            { scene: '👧🪑🌳', full: 'I am going to sit here', parts: [{t:'I',ico:'👧',c:'s'}, {t:'am going to',ico:'⚡',c:'v'}, {t:'sit here',ico:'🪑',c:'o'}], traceWord: 'sit' },
            { scene: '👫🤲🍰', full: 'We are going to share half of it', parts: [{t:'We',ico:'👫',c:'s'}, {t:'are going to',ico:'⚡',c:'v'}, {t:'share half of it',ico:'🤲➗',c:'o'}], traceWord: 'half' },
            { scene: '👧🌱🌸', full: 'She is going to grow flowers', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is going to',ico:'⚡',c:'v'}, {t:'grow flowers',ico:'🌱🌸',c:'o'}], traceWord: 'grow' },
            { scene: '👦✉️💬', full: 'He is going to answer the letter', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is going to',ico:'⚡',c:'v'}, {t:'answer the letter',ico:'✉️',c:'o'}], traceWord: 'letter' },
            { scene: '👦🛋️🚫', full: 'I am going to do nothing', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to',ico:'⚡',c:'v'}, {t:'do nothing',ico:'🚫',c:'o'}], traceWord: 'nothing' },
            { scene: '👫📖🗣️', full: 'We are going to learn a language', parts: [{t:'We',ico:'👫',c:'s'}, {t:'are going to',ico:'⚡',c:'v'}, {t:'learn a language',ico:'🗣️',c:'o'}], traceWord: 'language' },
            { scene: '🏫👧👦🏘️', full: 'My class is going to visit the town', parts: [{t:'My class',ico:'🏫',c:'s'}, {t:'is going to',ico:'⚡',c:'v'}, {t:'visit the town',ico:'🏘️',c:'o'}], traceWord: 'town' }
          ],
          qaList: [
            { q: 'What is your favorite subject?', scene: '👧📚🎨', ans: 'My favorite subject is art', opts: [{ txt: 'My favorite subject is art', ico: '📚' }, { txt: 'At the beach', ico: '🏖️' }, { txt: 'Two big dogs', ico: '🐕' }] },
            { q: 'Is this a real horse?', scene: '🐎✔️', ans: 'Yes, it is a real horse', opts: [{ txt: 'Yes, it is a real horse', ico: '🐎' }, { txt: 'In my bag', ico: '🎒' }, { txt: 'On Sunday', ico: '📅' }] },
            { q: 'Do you remember my name?', scene: '👧🧠💭', ans: 'Yes, I remember your name', opts: [{ txt: 'Yes, I remember your name', ico: '🧠' }, { txt: 'At the station', ico: '🚉' }, { txt: 'A red car', ico: '🚗' }] },
            { q: 'What is on your mind?', scene: '👦🧠⚽', ans: 'I am going to play football', opts: [{ txt: 'I am going to play football', ico: '⚽' }, { txt: 'Two blue chairs', ico: '🪑' }, { txt: 'In the kitchen', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Kế Hoạch Cuối Tuần Của Gia Đình',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ lấy một tờ giấy, vẽ 3 ô: 🚶 đi bộ, 🪑 ngồi nghỉ, 🌱 trồng cây. Bố/mẹ nói mẫu <i>"I am going to walk."</i> rồi chỉ vào ô đi bộ.',
              '<b>Bước 2:</b> Đến lượt con chọn một ô và nói <i>"I am going to sit here."</i> hoặc <i>"We are going to share half of it."</i> trong lúc làm động tác tương ứng.',
              '<b>Bước 3:</b> Cả nhà đổi vai: con hỏi <i>"What is on your mind?"</i>, bố/mẹ trả lời bằng một dự định cuối tuần thật của gia đình.'
            ]
          }
        },
        {
          id: '2.7B', name: 'Bài 2.7B: Ngày mai và tuần sau',
          grammar: {
            formulas: ['👧 She + ⚡ is not going to + 💥 break', '❓ What + ⚡ are you going to + 🎮 do', '👦 I + ⚡ am not going to + 🏃 go either'],
            tip: 'Phủ định thì thêm "not" sau am/is/are • câu hỏi thì đưa am/is/are lên trước chủ ngữ: What are you going to do?'
          },
          chunks: [
            { scene: '👧🥛🚫', full: 'She is not going to break the glass', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is not going to',ico:'🚫',c:'v'}, {t:'break the glass',ico:'💥',c:'o'}], traceWord: 'break' },
            { scene: '👫🎮🏆', full: 'We are going to win the game', parts: [{t:'We',ico:'👫',c:'s'}, {t:'are going to',ico:'⚡',c:'v'}, {t:'win the game',ico:'🏆',c:'o'}], traceWord: 'win' },
            { scene: '👨🚗🚫', full: 'He is not going to drive today', parts: [{t:'He',ico:'👨',c:'s'}, {t:'is not going to',ico:'🚫',c:'v'}, {t:'drive today',ico:'🚗',c:'o'}], traceWord: 'drive' },
            { scene: '👧🚶‍♀️➡️', full: 'She is going to come along', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is going to',ico:'⚡',c:'v'}, {t:'come along',ico:'➡️',c:'o'}], traceWord: 'along' },
            { scene: '👦✏️📝', full: 'I am going to write a note', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to',ico:'⚡',c:'v'}, {t:'write a note',ico:'📝',c:'o'}], traceWord: 'note' },
            { scene: '👦🤷🏠', full: 'I am not going to go either', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am not going to',ico:'🚫',c:'v'}, {t:'go either',ico:'🤷',c:'o'}], traceWord: 'either' },
            { scene: '👫📜📖', full: 'We are going to learn about history', parts: [{t:'We',ico:'👫',c:'s'}, {t:'are going to',ico:'⚡',c:'v'}, {t:'learn about history',ico:'📜',c:'o'}], traceWord: 'history' },
            { scene: '👧🎨🔝', full: 'Mai is going to color the top', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'is going to',ico:'⚡',c:'v'}, {t:'color the top',ico:'🎨🔝',c:'o'}], traceWord: 'color' }
          ],
          qaList: [
            { q: 'What are you going to do in the future?', scene: '👦🔮👨‍🏫', ans: 'I am going to be a teacher', opts: [{ txt: 'I am going to be a teacher', ico: '👨‍🏫' }, { txt: 'I was a baby long ago', ico: '⏪' }, { txt: 'A big green tree', ico: '🌳' }] },
            { q: 'What type of music do you like?', scene: '🎵🔤👧', ans: 'I like quiet music', opts: [{ txt: 'I like quiet music', ico: '🎵' }, { txt: 'On Monday', ico: '📅' }, { txt: 'Yes, she is', ico: '👩' }] },
            { q: 'Are you going to join the social club?', scene: '🧑👫🏫', ans: 'No, I am not going to join', opts: [{ txt: 'No, I am not going to join', ico: '🙅' }, { txt: 'A red car', ico: '🚗' }, { txt: 'On Friday', ico: '📅' }] },
            { q: 'What are you going to do this period?', scene: '⏳📚👦', ans: 'I am going to read a book', opts: [{ txt: 'I am going to read a book', ico: '📖' }, { txt: 'She was here a week ago', ico: '⏪' }, { txt: 'It is a blue bag', ico: '🎒' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Hộp Dự Định Ngày Mai',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ và con viết mỗi người 3 mẩu giấy ghi dự định ngày mai (vẽ hình cũng được) rồi bỏ vào một cái hộp hoặc cái mũ.',
              '<b>Bước 2:</b> Lần lượt bốc một mẩu giấy và hỏi <i>"What are you going to do?"</i>; người được hỏi trả lời <i>"I am going to write a note."</i> hoặc <i>"I am not going to drive today."</i>',
              '<b>Bước 3:</b> Chơi thêm một vòng đoán vui: bố/mẹ nói một dự định sai, con sửa lại bằng <i>"No, she is not going to break the glass!"</i>'
            ]
          }
        },
        {
          id: '2.7C', name: 'Bài 2.7C: Thời tiết & điều sắp xảy ra',
          grammar: {
            formulas: ['🌧️ It + ⚡ will + ☔ rain', '👦 I + ⚡ will + ⌛ wait', '👫 We + ⚡ will + 👍 agree'],
            tip: 'Đoán tương lai hoặc hứa giúp thì dùng "will" • sau will luôn là động từ gốc, kể cả với He, She, It!'
          },
          chunks: [
            { scene: '🌧️☔🌦️', full: 'It will rain tomorrow', parts: [{t:'It',ico:'🌧️',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'rain tomorrow',ico:'☔',c:'o'}], traceWord: 'rain' },
            { scene: '👦⌛✋', full: 'I will wait a moment', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'wait a moment',ico:'⌛',c:'o'}], traceWord: 'moment' },
            { scene: '👫🆓☀️', full: 'We will be free on Sunday', parts: [{t:'We',ico:'👫',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'be free on Sunday',ico:'🆓',c:'o'}], traceWord: 'free' },
            { scene: '👥👍🤝', full: 'Our team will agree with you', parts: [{t:'Our team',ico:'👥',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'agree with you',ico:'👍',c:'o'}], traceWord: 'team' },
            { scene: '🎒⚫🍽️', full: 'The black bag will be full', parts: [{t:'The black bag',ico:'🎒⚫',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'be full',ico:'🍽️',c:'o'}], traceWord: 'black' },
            { scene: '👦💧🥛', full: 'I will add water to the glass', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'add water to the glass',ico:'➕💧',c:'o'}], traceWord: 'add' },
            { scene: '👧📄📕', full: 'I will cover the paper', parts: [{t:'I',ico:'👧',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'cover the paper',ico:'📄📕',c:'o'}], traceWord: 'paper' },
            { scene: '🌐😊👍', full: 'Everything will be fine', parts: [{t:'Everything',ico:'🌐',c:'s'}, {t:'will',ico:'⚡',c:'v'}, {t:'be fine',ico:'😊',c:'o'}], traceWord: 'everything' }
          ],
          qaList: [
            { q: 'Will the shop have a sale?', scene: '🏪🏷️', ans: 'Yes, there will be a sale', opts: [{ txt: 'Yes, there will be a sale', ico: '🏷️' }, { txt: 'In the kitchen', ico: '🍳' }, { txt: 'She is my sister', ico: '👧' }] },
            { q: 'How will you keep your body strong?', scene: '🧍💪🏃', ans: 'I will run every day', opts: [{ txt: 'I will run every day', ico: '🏃' }, { txt: 'A black bag', ico: '🎒' }, { txt: 'In the garden', ico: '🌷' }] },
            { q: 'What is the rule?', scene: '📏🏫👦', ans: 'We will not run in class', opts: [{ txt: 'We will not run in class', ico: '📏' }, { txt: 'It is a big tree', ico: '🌳' }, { txt: 'Yes, she is', ico: '👩' }] },
            { q: 'What activity will you do tomorrow?', scene: '🎯👫⚽', ans: 'I will play football with friends', opts: [{ txt: 'I will play football with friends', ico: '⚽' }, { txt: 'My mother is a nurse', ico: '👩‍⚕️' }, { txt: 'A red box', ico: '📦' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Nhà Dự Báo Thời Tiết Nhí',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ cùng con nhìn ra cửa sổ hoặc xem dự báo thời tiết, rồi bố/mẹ làm mẫu như người dẫn chương trình: <i>"It will rain tomorrow."</i>',
              '<b>Bước 2:</b> Con làm "nhà dự báo": nói một điều sẽ xảy ra ngày mai, ví dụ <i>"We will be free on Sunday."</i>, và dán hình ☔ ☀️ lên tờ giấy lịch.',
              '<b>Bước 3:</b> Bố/mẹ nhờ giúp một việc nhỏ (cầm giấy, thêm nước vào cốc), con đáp lại bằng lời hứa <i>"I will add water."</i> hoặc <i>"I will wait a moment."</i>'
            ]
          }
        }
      ]
    },
    '2.8': {
      lessons: [
        {
          id: '2.8A', name: 'Bài 2.8A: Giờ giấc hằng ngày',
          grammar: {
            formulas: ['❓ What time + ⚡ is + 🎉 the event', '👦 I + ⚡ carry + 🎒 my bag + ⏰ at seven', '👧 We + ⚡ choose + 🐻 a bear + ⏰ at ten'],
            tip: 'Hỏi giờ thì bắt đầu bằng "What time"; trả lời giờ thì luôn có "at" đứng trước số giờ!'
          },
          chunks: [
            { scene: '👨‍👩‍👦🎬⚔️', full: 'We watch a war movie at eight', parts: [{t:'We',ico:'👨‍👩‍👦',c:'s'}, {t:'watch',ico:'👀',c:'v'}, {t:'a war movie at eight',ico:'⚔️🎬',c:'o'}], traceWord: 'war' },
            { scene: '🧑🏠🚪', full: 'Someone comes to my house at nine', parts: [{t:'Someone',ico:'🧑',c:'s'}, {t:'comes',ico:'🚶',c:'v'}, {t:'to my house at nine',ico:'🏠',c:'o'}], traceWord: 'someone' },
            { scene: '🐦☁️🕕', full: 'The bird flies above us at six', parts: [{t:'The bird',ico:'🐦',c:'s'}, {t:'flies',ico:'🪽',c:'v'}, {t:'above us at six',ico:'⬆️',c:'o'}], traceWord: 'above' },
            { scene: '🎉❓⏰', full: 'What time is the event', parts: [{t:'What time',ico:'⏰',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'the event',ico:'🎉',c:'s'}], traceWord: 'event' },
            { scene: '👦✏️⭐', full: 'I design a special card at four', parts: [{t:'I',ico:'👦',c:'s'}, {t:'design',ico:'✏️',c:'v'}, {t:'a special card at four',ico:'⭐💌',c:'o'}], traceWord: 'special' },
            { scene: '👦✂️🍞', full: 'Nam cuts bread at five', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'cuts',ico:'✂️',c:'v'}, {t:'bread at five',ico:'🍞',c:'o'}], traceWord: 'cuts' },
            { scene: '👧🎒🏫', full: 'I carry my bag to school at seven', parts: [{t:'I',ico:'👧',c:'s'}, {t:'carry',ico:'🎒',c:'v'}, {t:'my bag to school at seven',ico:'🏫',c:'o'}], traceWord: 'carry' },
            { scene: '👨‍👩‍👧🐻🤔', full: 'We choose a bear at ten', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'choose',ico:'🤔',c:'v'}, {t:'a bear at ten',ico:'🐻',c:'o'}], traceWord: 'bear' }
          ],
          qaList: [
            { q: 'What time do you join us?', scene: '🤝⏰', ans: 'I join you at six', opts: [{ txt: 'I join you at six', ico: '🤝' }, { txt: 'It is a red bear', ico: '🐻' }, { txt: 'The bird is blue', ico: '🐦' }] },
            { q: 'Can you describe your day?', scene: '🗣️☀️', ans: 'Maybe I get up at seven', opts: [{ txt: 'Maybe I get up at seven', ico: '🤷' }, { txt: 'The war is big', ico: '⚔️' }, { txt: 'A bag is above me', ico: '🎒' }] },
            { q: 'What else do you do at night?', scene: '🌙📖➕', ans: 'I read a book at night', opts: [{ txt: 'I read a book at night', ico: '📖' }, { txt: 'I am six', ico: '6️⃣' }, { txt: 'It is in the sun', ico: '☀️' }] },
            { q: 'What is your role at the event?', scene: '🎭🎉', ans: 'I am a good leader', opts: [{ txt: 'I am a good leader', ico: '🎭' }, { txt: 'We eat bread at five', ico: '🍞' }, { txt: 'The bus is far', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đồng Hồ Giấy Của Con',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ vẽ một chiếc đồng hồ lên giấy và xoay kim cho con xem, rồi hỏi: <i>"What time is it?"</i>.',
              '<b>Bước 2:</b> Con nhìn kim đồng hồ và trả lời, ví dụ <i>"It is seven"</i>, rồi nói thêm hoạt động: <i>"I carry my bag at seven."</i>.',
              '<b>Bước 3:</b> Đổi vai: con xoay kim và hỏi bố/mẹ <i>"What time is the event?"</i>, bố/mẹ trả lời bằng <i>"at ..."</i>.'
            ]
          }
        },
        {
          id: '2.8B', name: 'Bài 2.8B: Chuyện đang diễn ra',
          grammar: {
            formulas: ['❓ What + ⚡ are + 👦 you doing', '👦 He + ⚡ is not + 😴 sleeping', '❓ Are + 👦 you + 🎵 enjoying it'],
            tip: 'Hỏi thì đưa "am / is / are" lên đầu câu, phủ định thì thêm "not" sau "am / is / are", và động từ luôn có đuôi -ing!'
          },
          chunks: [
            { scene: '👩🚪❓', full: 'What is she doing behind the door', parts: [{t:'What',ico:'❓',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'she doing behind the door',ico:'👩🚪',c:'s'}], traceWord: 'behind' },
            { scene: '👦😴🏗️', full: 'He is not sleeping at the site', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is not',ico:'🚫',c:'v'}, {t:'sleeping at the site',ico:'🏗️',c:'o'}], traceWord: 'site' },
            { scene: '👧🔁📚', full: 'I am not doing my practice', parts: [{t:'I',ico:'👧',c:'s'}, {t:'am not',ico:'🚫',c:'v'}, {t:'doing my practice',ico:'🔁',c:'o'}], traceWord: 'practice' },
            { scene: '👦🎵😊', full: 'Are you enjoying the music', parts: [{t:'Are',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'enjoying the music',ico:'🎵😊',c:'o'}], traceWord: 'enjoying' },
            { scene: '👩👣🪧', full: 'She is not stepping on the sign', parts: [{t:'She',ico:'👩',c:'s'}, {t:'is not',ico:'🚫',c:'v'}, {t:'stepping on the sign',ico:'👣🪧',c:'o'}], traceWord: 'stepping' },
            { scene: '⚪🐦🚫', full: 'The white bird is not flying', parts: [{t:'The white bird',ico:'⚪🐦',c:'s'}, {t:'is not',ico:'🚫',c:'v'}, {t:'flying',ico:'🪽',c:'o'}], traceWord: 'white' },
            { scene: '👩🎬🙂', full: 'She is doing a nice action', parts: [{t:'She',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'doing a nice action',ico:'🎬🙂',c:'o'}], traceWord: 'action' },
            { scene: '👦✍️📅', full: 'Are you writing the date now', parts: [{t:'Are',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'writing the date now',ico:'✍️📅',c:'o'}], traceWord: 'date' }
          ],
          qaList: [
            { q: 'Are you doing a difficult test?', scene: '📝😓', ans: 'Yes, I am doing it now', opts: [{ txt: 'Yes, I am doing it now', ico: '📝' }, { txt: 'No, he is a doctor', ico: '🩺' }, { txt: 'It is in the park', ico: '🌳' }] },
            { q: 'Who is walking in front of you?', scene: '🧍⬆️👧', ans: 'Mai is walking in front of me', opts: [{ txt: 'Mai is walking in front of me', ico: '🧍' }, { txt: 'A bird is in the sea', ico: '🐦' }, { txt: 'I am six years old', ico: '6️⃣' }] },
            { q: 'What is the difference between us?', scene: '↔️👦👧', ans: 'I am reading and he is sleeping', opts: [{ txt: 'I am reading and he is sleeping', ico: '↔️' }, { txt: 'We are at the bank', ico: '🏦' }, { txt: 'It is a red car', ico: '🚗' }] },
            { q: 'Is it true? Is walking good for health?', scene: '🚶🩺✅', ans: 'Yes, it is true', opts: [{ txt: 'Yes, it is true', ico: '✅' }, { txt: 'I am not a doctor', ico: '🚫' }, { txt: 'The bag is white', ico: '🎒' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đoán Việc Đang Làm',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ diễn một hành động như ngủ, đọc sách hoặc nghe nhạc và hỏi con: <i>"What am I doing?"</i>.',
              '<b>Bước 2:</b> Con đoán bằng tiếng Anh: <i>"You are sleeping!"</i> hoặc nói phủ định: <i>"You are not reading."</i>.',
              '<b>Bước 3:</b> Đổi vai: con diễn một hành động, bố/mẹ hỏi <i>"What are you doing?"</i> và <i>"Are you enjoying it?"</i> để con trả lời.'
            ]
          }
        },
        {
          id: '2.8C', name: 'Bài 2.8C: Các mùa & các buổi trong ngày',
          grammar: {
            formulas: ['🌸 in + 🍃 spring / ☀️ the morning', '🕕 at + 6️⃣ six / 🌙 night', '📅 on + 🗓️ Sunday'],
            tip: 'Nhớ nhé: "in" cho buổi và mùa, "at" cho giờ và đêm, "on" cho thứ trong tuần!'
          },
          chunks: [
            { scene: '👧🖼️🌸', full: 'I draw a picture in spring', parts: [{t:'I',ico:'👧',c:'s'}, {t:'draw',ico:'✏️',c:'v'}, {t:'a picture in spring',ico:'🖼️🌸',c:'o'}], traceWord: 'picture' },
            { scene: '👦📋📅', full: 'I write a list on Monday', parts: [{t:'I',ico:'👦',c:'s'}, {t:'write',ico:'✍️',c:'v'}, {t:'a list on Monday',ico:'📋',c:'o'}], traceWord: 'list' },
            { scene: '👧🌠🌙', full: 'She makes a wish at night', parts: [{t:'She',ico:'👧',c:'s'}, {t:'makes',ico:'🛠️',c:'v'}, {t:'a wish at night',ico:'🌠',c:'o'}], traceWord: 'wish' },
            { scene: '🧒🌾🏃', full: 'The kid runs in the field on Sunday', parts: [{t:'The kid',ico:'🧒',c:'s'}, {t:'runs',ico:'🏃',c:'v'}, {t:'in the field on Sunday',ico:'🌾',c:'o'}], traceWord: 'field' },
            { scene: '🥶🌸❄️', full: 'Cold can kill flowers in winter', parts: [{t:'Cold',ico:'🥶',c:'s'}, {t:'can kill',ico:'🛑',c:'v'}, {t:'flowers in winter',ico:'🌸❄️',c:'o'}], traceWord: 'kill' },
            { scene: '👩‍🏫👧☀️', full: 'My teacher teaches us in the morning', parts: [{t:'My teacher',ico:'👩‍🏫',c:'s'}, {t:'teaches',ico:'🏫',c:'v'}, {t:'us in the morning',ico:'☀️',c:'o'}], traceWord: 'teaches' },
            { scene: '👨‍👩‍👧📰📺', full: 'We watch the news at six', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'watch',ico:'📺',c:'v'}, {t:'the news at six',ico:'📰',c:'o'}], traceWord: 'news' },
            { scene: '👨‍👩‍👧🗳️✅', full: 'We vote on Sunday', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'vote',ico:'🗳️',c:'v'}, {t:'on Sunday',ico:'📅',c:'o'}], traceWord: 'vote' }
          ],
          qaList: [
            { q: 'When do you usually focus?', scene: '🎯☀️', ans: 'I usually focus in the morning', opts: [{ txt: 'I usually focus in the morning', ico: '🎯' }, { txt: 'It is on the table', ico: '🍽️' }, { txt: 'My bag is blue', ico: '🎒' }] },
            { q: 'Do you use technology on the stage?', scene: '🖥️🎭', ans: 'Yes, we use it on Friday', opts: [{ txt: 'Yes, we use it on Friday', ico: '🖥️' }, { txt: 'No, I am a bird', ico: '🐦' }, { txt: 'It is a big tree', ico: '🌳' }] },
            { q: 'Where do you save your address?', scene: '📮💾📱', ans: 'I save it in my phone', opts: [{ txt: 'I save it in my phone', ico: '📱' }, { txt: 'I am six years old', ico: '6️⃣' }, { txt: 'We run in winter', ico: '🏃' }] },
            { q: 'When do you eat dinner?', scene: '🍚🌙⏰', ans: 'I eat dinner at six', opts: [{ txt: 'I eat dinner at six', ico: '🍚' }, { txt: 'It is in spring', ico: '🌸' }, { txt: 'She is my sister', ico: '👧' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Lịch Của Gia Đình Mình',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ viết trên giấy các thẻ: <i>morning, night, spring, winter, Sunday, six</i> rồi úp xuống bàn.',
              '<b>Bước 2:</b> Con lật một thẻ và chọn đúng từ nối: <i>"in the morning"</i>, <i>"at night"</i>, <i>"on Sunday"</i>, <i>"at six"</i>.',
              '<b>Bước 3:</b> Con nói một câu thật về nhà mình, ví dụ <i>"We watch the news at six"</i>, bố/mẹ khen và đổi lượt.'
            ]
          }
        }
      ]
    },
    '2.9': {
      lessons: [
        {
          id: '2.9A', name: 'Bài 2.9A: Đồ chơi và đồ dùng đếm được',
          grammar: {
            formulas: ['❓ How many + 🧸 danh từ số nhiều + ⚡ are + 📍 there', '📍 There + ⚡ are + 🔢 số + 🧸 danh từ số nhiều'],
            tip: 'Hỏi số lượng đếm được thì dùng "How many" + danh từ thêm -s, rồi trả lời bằng một con số nhé!'
          },
          chunks: [
            { scene: '🧩🧩🧩', full: 'There are six pieces', parts: [{t:'There',ico:'📍',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'six pieces',ico:'6️⃣🧩',c:'o'}], traceWord: 'pieces' },
            { scene: '👦👆🃏', full: 'I pick three cards', parts: [{t:'I',ico:'👦',c:'s'}, {t:'pick',ico:'👆',c:'v'}, {t:'three cards',ico:'3️⃣🃏',c:'o'}], traceWord: 'pick' },
            { scene: '📚📚🌍', full: 'How many books are on the ground', parts: [{t:'How many books',ico:'❓📚',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'on the ground',ico:'🌍',c:'o'}], traceWord: 'ground' },
            { scene: '🧑‍💼🧑‍💼🧑‍💼', full: 'How many leaders are there', parts: [{t:'How many leaders',ico:'❓🧑‍💼',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'there',ico:'📍',c:'o'}], traceWord: 'leaders' },
            { scene: '⚽🏀🏅', full: 'How many sports do you like', parts: [{t:'How many sports',ico:'❓🏅',c:'o'}, {t:'do',ico:'⚡',c:'v'}, {t:'you like',ico:'👦❤️',c:'s'}], traceWord: 'sports' },
            { scene: '🌸🌸🌸👍', full: 'How many fine flowers are there', parts: [{t:'How many fine flowers',ico:'❓🌸',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'there',ico:'📍',c:'o'}], traceWord: 'fine' },
            { scene: '👫🛬🏠', full: 'How many friends arrive today', parts: [{t:'How many friends',ico:'❓👫',c:'s'}, {t:'arrive',ico:'🛬',c:'v'}, {t:'today',ico:'📅',c:'o'}], traceWord: 'arrive' },
            { scene: '📝❌🔟', full: 'There are ten wrong answers', parts: [{t:'There',ico:'📍',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'ten wrong answers',ico:'🔟❌',c:'o'}], traceWord: 'wrong' }
          ],
          qaList: [
            { q: 'How many books are due today?', scene: '📚⏳📅', ans: 'Two books are due today', opts: [{ txt: 'Two books are due today', ico: '📚' }, { txt: 'I am very happy', ico: '😄' }, { txt: 'On the big table', ico: '🪑' }] },
            { q: 'How many checks are there?', scene: '🔍🔍🔍', ans: 'There are three checks', opts: [{ txt: 'There are three checks', ico: '🔍' }, { txt: 'We finish the game', ico: '🏁' }, { txt: 'I am at school', ico: '🏫' }] },
            { q: 'How many people discuss culture?', scene: '🗨️🏮👥', ans: 'Six people discuss culture', opts: [{ txt: 'Six people discuss culture', ico: '🗨️' }, { txt: 'It is on the wall', ico: '🧱' }, { txt: 'I have a red ball', ico: '🔴' }] },
            { q: 'How many personal cards do you have?', scene: '🙋🃏✌️', ans: 'I have two personal cards', opts: [{ txt: 'I have two personal cards', ico: '🃏' }, { txt: 'There is no fight', ico: '🥊' }, { txt: 'It is the finish line', ico: '🏁' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đếm Đồ Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ gom một nhóm đồ có sẵn như sách, thẻ, mảnh ghép, bóng và đặt lên bàn. Bố/mẹ hỏi: <i>"How many books are there?"</i>.',
              '<b>Bước 2:</b> Con đếm to từng món rồi trả lời: <i>"There are three books."</i>. Bố/mẹ lấy bớt hoặc thêm đồ rồi hỏi lại.',
              '<b>Bước 3:</b> Đổi vai: con giấu một ít đồ và hỏi bố/mẹ <i>"How many cards are there?"</i>, bố/mẹ đoán số lượng.'
            ]
          }
        },
        {
          id: '2.9B', name: 'Bài 2.9B: Đồ ăn thức uống không đếm được',
          grammar: {
            formulas: ['❓ How much + 🥛 danh từ không đếm được + ⚡ is + 📍 there', '🥛 It + ⚡ is + 💵 số tiền + dollars'],
            tip: 'Nước, sữa, cơm, bánh mì không đếm được từng cái, nên hỏi "How much", không thêm -s. Hỏi giá tiền cũng dùng "How much is...?"'
          },
          chunks: [
            { scene: '🥛🏬❓', full: 'How much milk is in the store', parts: [{t:'How much milk',ico:'❓🥛',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in the store',ico:'🏬',c:'o'}], traceWord: 'store' },
            { scene: '🍵👥😋', full: 'How much tea does everyone drink', parts: [{t:'How much tea',ico:'❓🍵',c:'o'}, {t:'does',ico:'⚡',c:'v'}, {t:'everyone drink',ico:'👥🥤',c:'s'}], traceWord: 'everyone' },
            { scene: '🃏🌺💵', full: 'How much is this pretty card', parts: [{t:'How much',ico:'❓💵',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'this pretty card',ico:'🌺🃏',c:'s'}], traceWord: 'pretty' },
            { scene: '📄💵2️⃣', full: 'The article is two dollars', parts: [{t:'The article',ico:'📄',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'two dollars',ico:'2️⃣💵',c:'o'}], traceWord: 'article' },
            { scene: '🌏🥛💵', full: 'The foreign milk is expensive', parts: [{t:'The foreign milk',ico:'🌏🥛',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'expensive',ico:'💰',c:'o'}], traceWord: 'foreign' },
            { scene: '🥺👨💵', full: 'The poor man has no money', parts: [{t:'The poor man',ico:'🥺👨',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'no money',ico:'🚫💵',c:'o'}], traceWord: 'poor' },
            { scene: '💧🔥❓', full: 'How much water is on the fire', parts: [{t:'How much water',ico:'❓💧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'on the fire',ico:'🔥',c:'o'}], traceWord: 'fire' },
            { scene: '🍚⬇️👦', full: 'How much food do you drop', parts: [{t:'How much food',ico:'❓🍚',c:'o'}, {t:'do',ico:'⚡',c:'v'}, {t:'you drop',ico:'👦⬇️',c:'s'}], traceWord: 'drop' }
          ],
          qaList: [
            { q: 'How much is the art book?', scene: '🎨📘💵', ans: 'It is ten dollars', opts: [{ txt: 'It is ten dollars', ico: '💵' }, { txt: 'We laugh a lot', ico: '😂' }, { txt: 'In the big box', ico: '📦' }] },
            { q: 'How much money is in the surprise box?', scene: '🎁💵❓', ans: 'There are ten dollars', opts: [{ txt: 'There are ten dollars', ico: '💵' }, { txt: 'My arm is strong', ico: '💪' }, { txt: 'I miss my friend', ico: '🎯' }] },
            { q: 'How much is the heart card?', scene: '❤️🃏💵', ans: 'It is two dollars', opts: [{ txt: 'It is two dollars', ico: '💵' }, { txt: 'It is on the table', ico: '🪑' }, { txt: 'I am at home', ico: '🏠' }] },
            { q: 'How much tea is in the surprise bag?', scene: '🎁🍵👜', ans: 'There is some tea', opts: [{ txt: 'There is some tea', ico: '🍵' }, { txt: 'My arm is on the desk', ico: '💪' }, { txt: 'I laugh with you', ico: '😂' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Cửa Hàng Nhỏ Trong Bếp',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày đồ có sẵn như nước, sữa, gạo, bánh mì lên bàn và dán giá giấy nhỏ (ví dụ 2 dollars). Bố/mẹ làm người bán, con làm người mua.',
              '<b>Bước 2:</b> Con hỏi giá: <i>"How much is the milk?"</i>. Bố/mẹ trả lời: <i>"It is two dollars."</i>. Sau đó con hỏi thêm: <i>"How much water is there?"</i>.',
              '<b>Bước 3:</b> Con đưa tiền giấy tự làm để mua đồ. Xong thì đổi vai, con làm người bán và nói giá bằng tiếng Anh.'
            ]
          }
        },
        {
          id: '2.9C', name: 'Bài 2.9C: Cửa hàng và siêu thị',
          grammar: {
            formulas: ['👦 We + 🤲 have + 🛒 some + 🥛 đồ vật', '❓ Do + 👦 you + 🤲 have any + 🛒 đồ vật'],
            tip: 'Câu khẳng định dùng "some", câu hỏi và câu phủ định dùng "any". Much đi với đồ không đếm được, many đi với đồ đếm được!'
          },
          chunks: [
            { scene: '🏬🎨🪣', full: 'We have some paint in the store', parts: [{t:'We',ico:'👫',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'some paint in the store',ico:'🎨🏬',c:'o'}], traceWord: 'paint' },
            { scene: '🥛📦🛒', full: 'There is some milk inside the bag', parts: [{t:'There',ico:'📍',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'some milk inside the bag',ico:'🥛📦',c:'o'}], traceWord: 'inside' },
            { scene: '🔑🔑❓', full: 'Do you have any keys', parts: [{t:'Do',ico:'⚡',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'have any keys',ico:'🔑',c:'o'}], traceWord: 'keys' },
            { scene: '📏👕❓', full: 'Do you have any other sizes', parts: [{t:'Do',ico:'⚡',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'have any other sizes',ico:'📏',c:'o'}], traceWord: 'sizes' },
            { scene: '🤔📄❓', full: 'Did you forget any pages', parts: [{t:'Did',ico:'⚡',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'forget any pages',ico:'🤔📄',c:'o'}], traceWord: 'forget' },
            { scene: '☀️😊🚫😟', full: 'There is not much worry in summer', parts: [{t:'There',ico:'📍',c:'s'}, {t:'is not',ico:'⚡',c:'v'}, {t:'much worry in summer',ico:'😟☀️',c:'o'}], traceWord: 'worry' },
            { scene: '⚽🛠️👍', full: 'The player has some skills', parts: [{t:'The player',ico:'⚽',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'some skills',ico:'🛠️',c:'o'}], traceWord: 'skills' },
            { scene: '📑🛒❓', full: 'Is there any section for sports', parts: [{t:'Is',ico:'⚡',c:'v'}, {t:'there',ico:'📍',c:'s'}, {t:'any section for sports',ico:'📑🏅',c:'o'}], traceWord: 'section' }
          ],
          qaList: [
            { q: 'Do you have any paint?', scene: '🎨🏬❓', ans: 'Yes, I have some paint', opts: [{ txt: 'Yes, I have some paint', ico: '🎨' }, { txt: 'The guy is very strong', ico: '👨' }, { txt: 'It is in the park', ico: '🌳' }] },
            { q: 'Are there any characters on the wall?', scene: '🧱🎭❓', ans: 'Yes, there are some characters', opts: [{ txt: 'Yes, there are some characters', ico: '🎭' }, { txt: 'I am alone at home', ico: '🧍' }, { txt: 'It is ten dollars', ico: '💵' }] },
            { q: 'Is there much water inside?', scene: '💧📦❓', ans: 'No, there is not much water', opts: [{ txt: 'No, there is not much water', ico: '💧' }, { txt: 'I have a red ball', ico: '🔴' }, { txt: 'She is at school', ico: '🏫' }] },
            { q: 'Do you have any money?', scene: '💵👦❓', ans: 'Yes, I have some money', opts: [{ txt: 'Yes, I have some money', ico: '💵' }, { txt: 'It is a big section', ico: '📑' }, { txt: 'We are in the car', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đi Siêu Thị Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày đồ dùng trong nhà thành các quầy hàng nhỏ (quầy đồ ăn, quầy đồ chơi, quầy sách). Con làm khách, bố/mẹ làm người bán.',
              '<b>Bước 2:</b> Con hỏi: <i>"Do you have any milk?"</i>. Bố/mẹ trả lời: <i>"Yes, I have some milk."</i> hoặc <i>"No, I do not have any."</i>.',
              '<b>Bước 3:</b> Con chọn vài món bỏ vào giỏ và nói: <i>"I have some books."</i>. Xong thì đổi vai cho con làm người bán.'
            ]
          }
        }
      ]
    },
    '2.10': {
      lessons: [
        {
          id: '2.10A', name: 'Bài 2.10A: Bạn bè & người thân',
          grammar: {
            formulas: ['👧 Anna + 📞 calls + 👦 me', '👦 Tom + 🤝 helps + 👥 them', '👩 Mai + 👀 sees + 👧 her'],
            tip: 'me, you, him, her, us, them là "bạn nhỏ" đứng SAU động từ — không nói "Anna calls I" mà nói "Anna calls me"!'
          },
          chunks: [
            { scene: '👧📞🎓', full: 'Anna calls me at college', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'calls',ico:'📞',c:'v'}, {t:'me at college',ico:'🎓',c:'o'}], traceWord: 'college' },
            { scene: '👩🤝👦', full: 'Mai introduces him to us', parts: [{t:'Mai',ico:'👩',c:'s'}, {t:'introduces',ico:'🤝',c:'v'}, {t:'him to us',ico:'👦',c:'o'}], traceWord: 'introduces' },
            { scene: '👀👥⛪', full: 'I see them at church', parts: [{t:'I',ico:'👦',c:'s'}, {t:'see',ico:'👀',c:'v'}, {t:'them at church',ico:'⛪',c:'o'}], traceWord: 'church' },
            { scene: '⚙️✅👨‍👩‍👧', full: 'The machine is ready for us', parts: [{t:'The machine',ico:'⚙️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'ready for us',ico:'✅',c:'o'}], traceWord: 'ready' },
            { scene: '👩🙋🎉', full: 'Mai asks me about the club', parts: [{t:'Mai',ico:'👩',c:'s'}, {t:'asks',ico:'🙋',c:'v'}, {t:'me about the club',ico:'🎉',c:'o'}], traceWord: 'club' },
            { scene: '👩🏖️💳', full: 'Mother gives him a holiday card', parts: [{t:'Mother',ico:'👩',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'him a holiday card',ico:'🏖️💳',c:'o'}], traceWord: 'holiday' },
            { scene: '👦👧⚡🤝', full: 'Tom and I help them quickly', parts: [{t:'Tom and I',ico:'👦👦',c:'s'}, {t:'help',ico:'🤝',c:'v'}, {t:'them quickly',ico:'⚡',c:'o'}], traceWord: 'quickly' },
            { scene: '🙋🪧⬇️', full: 'Anyone can find them below the board', parts: [{t:'Anyone',ico:'🙋',c:'s'}, {t:'can find',ico:'🔍',c:'v'}, {t:'them below the board',ico:'🪧⬇️',c:'o'}], traceWord: 'board' }
          ],
          qaList: [
            { q: 'Where is the item?', scene: '📦🏢', ans: 'It is on the floor', opts: [{ txt: 'It is on the floor', ico: '🏢' }, { txt: 'He is my brother', ico: '👦' }, { txt: 'I am ready', ico: '✅' }] },
            { q: 'Can you read the review?', scene: '📝👀', ans: 'Yes, I read it', opts: [{ txt: 'Yes, I read it', ico: '📝' }, { txt: 'She is at the club', ico: '🎉' }, { txt: 'Tom helps them', ico: '🤝' }] },
            { q: 'Who helps you?', scene: '👩🤝👦', ans: 'Mai helps me', opts: [{ txt: 'Mai helps me', ico: '👩' }, { txt: 'A holiday card', ico: '💳' }, { txt: 'On the floor', ico: '🏢' }] },
            { q: 'Do you see him?', scene: '👦👀', ans: 'Yes, I see him', opts: [{ txt: 'Yes, I see him', ico: '👀' }, { txt: 'It is below the board', ico: '🪧' }, { txt: 'Two blue cards', ico: '💳' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Ai Giúp Ai?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ cùng con xếp vài món đồ và ảnh người thân trên bàn, rồi chỉ vào từng người và nói <i>"I see her"</i>, <i>"I see him"</i>.',
              '<b>Bước 2:</b> Bố/mẹ hỏi <i>"Who helps you?"</i>, con chỉ vào người đó và trả lời <i>"Mai helps me"</i> hoặc <i>"Tom helps them"</i>.',
              '<b>Bước 3:</b> Đổi vai: con làm "người giới thiệu", chỉ bố/mẹ và nói <i>"Mai introduces him to us"</i> thật nhanh nhé!'
            ]
          }
        },
        {
          id: '2.10B', name: 'Bài 2.10B: Đồ vật trong lớp học',
          grammar: {
            formulas: ['❓ Whose + 💺 seat + ⚡ is it', '👦 It is + 👦 Tom\'s + 💺 seat', '👧 Mai\'s + 📁 file + ⚡ is + 📍 here'],
            tip: 'Của ai thì thêm \'s sau tên: Tom\'s, Mai\'s — hỏi "của ai" thì dùng Whose!'
          },
          chunks: [
            { scene: '💺❓🏫', full: 'Whose seat is it', parts: [{t:'Whose seat',ico:'💺',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'it',ico:'👉',c:'s'}], traceWord: 'seat' },
            { scene: '👧🌸⭐', full: 'It is Mai\'s beautiful star', parts: [{t:'It',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'Mai\'s beautiful star',ico:'🌸⭐',c:'o'}], traceWord: 'beautiful' },
            { scene: '📺❓', full: 'Whose television is that', parts: [{t:'Whose television',ico:'📺',c:'o'}, {t:'is',ico:'⚡',c:'v'}, {t:'that',ico:'👉',c:'s'}], traceWord: 'television' },
            { scene: '👦📁', full: 'That is Tom\'s file', parts: [{t:'That',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'Tom\'s file',ico:'📁',c:'o'}], traceWord: 'file' },
            { scene: '👦⚽🥅', full: 'This is Nam\'s goal in the match', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'Nam\'s goal in the match',ico:'⚽🥅',c:'o'}], traceWord: 'goal' },
            { scene: '🎒❓🎯🍸', full: 'Whose bag is on the middle bar', parts: [{t:'Whose bag',ico:'🎒',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'on the middle bar',ico:'🎯🍸',c:'o'}], traceWord: 'middle' },
            { scene: '👦🏀👍', full: 'Tom\'s throw is very good', parts: [{t:'Tom\'s throw',ico:'🏀',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'very good',ico:'👍',c:'o'}], traceWord: 'throw' },
            { scene: '👧🤝📅', full: 'Mai\'s interview is on Friday', parts: [{t:'Mai\'s interview',ico:'🤝',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'on Friday',ico:'📅',c:'o'}], traceWord: 'interview' }
          ],
          qaList: [
            { q: 'Whose trip is it?', scene: '🧳❓', ans: 'It is Lan\'s trip', opts: [{ txt: 'It is Lan\'s trip', ico: '🧳' }, { txt: 'I am ready', ico: '✅' }, { txt: 'A red bag', ico: '🎒' }] },
            { q: 'What can you fill?', scene: '🪣📦', ans: 'I can fill the box', opts: [{ txt: 'I can fill the box', ico: '📦' }, { txt: 'On Friday', ico: '📅' }, { txt: 'Yes, it is', ico: '👍' }] },
            { q: 'Can you do it yourself?', scene: '🫵💪', ans: 'Yes, I can', opts: [{ txt: 'Yes, I can', ico: '💪' }, { txt: 'It is Tom\'s', ico: '👦' }, { txt: 'In the middle', ico: '🎯' }] },
            { q: 'Do you keep in touch with Tom?', scene: '🤚👦📞', ans: 'Yes, I keep in touch with him', opts: [{ txt: 'Yes, I keep in touch with him', ico: '🤚' }, { txt: 'It is Lan\'s seat', ico: '💺' }, { txt: 'A beautiful star', ico: '⭐' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đồ Này Của Ai?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ gom 5–6 đồ vật trong nhà (cặp, sách, bút, ghế...) và đặt chung giữa bàn. Mỗi người nhận một món là của mình.',
              '<b>Bước 2:</b> Bố/mẹ cầm một món lên hỏi <i>"Whose bag is it?"</i>, con trả lời <i>"It is Mai\'s bag"</i> (dùng tên người trong nhà).',
              '<b>Bước 3:</b> Đổi vai: con cầm đồ lên hỏi, bố/mẹ đoán đúng thì con trao lại và nói <i>"That is Tom\'s file"</i>.'
            ]
          }
        },
        {
          id: '2.10C', name: 'Bài 2.10C: Đồ chơi của chúng mình',
          grammar: {
            formulas: ['🎲 This ball + ⚡ is + 👦 mine', '🎲 That bag + ⚡ is + 🫵 yours', '🎲 The game + ⚡ is + 👨‍👩‍👧 ours / 👥 theirs'],
            tip: 'mine, yours, his, hers, ours, theirs đã có nghĩa "của" rồi — đứng một mình, không đi kèm danh từ phía sau!'
          },
          chunks: [
            { scene: '💬📱👦', full: 'This message is mine', parts: [{t:'This message',ico:'💬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'mine',ico:'👦',c:'o'}], traceWord: 'message' },
            { scene: '📰🫵', full: 'That newspaper is mine', parts: [{t:'That newspaper',ico:'📰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'mine',ico:'🫵',c:'o'}], traceWord: 'newspaper' },
            { scene: '👶🎒👦', full: 'The baby bag is his', parts: [{t:'The baby bag',ico:'👶🎒',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'his',ico:'👦',c:'o'}], traceWord: 'baby' },
            { scene: '🌑🚗👦', full: 'The dark car is his', parts: [{t:'The dark car',ico:'🌑🚗',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'his',ico:'👦',c:'o'}], traceWord: 'dark' },
            { scene: '🔬📘👨‍👩‍👧', full: 'The science book is mine', parts: [{t:'The science book',ico:'🔬📘',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'mine',ico:'👦',c:'o'}], traceWord: 'science' },
            { scene: '😄🎮👥', full: 'The fun game is mine', parts: [{t:'The fun game',ico:'😄🎮',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'mine',ico:'👦',c:'o'}], traceWord: 'fun' },
            { scene: '🎙️🏆👦', full: 'That successful speech is his', parts: [{t:'That successful speech',ico:'🎙️🏆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'his',ico:'👦',c:'o'}], traceWord: 'speech' },
            { scene: '👮🤔🫵', full: 'The officer guesses it is mine', parts: [{t:'The officer',ico:'👮',c:'s'}, {t:'guesses',ico:'🤔',c:'v'}, {t:'it is mine',ico:'👦',c:'o'}], traceWord: 'guesses' }
          ],
          qaList: [
            { q: 'Is the post his?', scene: '📮🫵', ans: 'Yes, the post is his', opts: [{ txt: 'Yes, the post is his', ico: '📮' }, { txt: 'I exercise at home', ico: '🏃' }, { txt: 'In the dark', ico: '🌑' }] },
            { q: 'Can you push the car?', scene: '👉🚗', ans: 'Yes, I can push it', opts: [{ txt: 'Yes, I can push it', ico: '👉' }, { txt: 'A quarter is mine', ico: '🕒' }, { txt: 'The bag is his', ico: '🎒' }] },
            { q: 'Do you exercise with them?', scene: '🏃👥', ans: 'Yes, we exercise with them', opts: [{ txt: 'Yes, we exercise with them', ico: '🏃' }, { txt: 'The game is mine', ico: '🎮' }, { txt: 'Five minutes', ico: '⏰' }] },
            { q: 'Can you imagine his game?', scene: '💭🎮', ans: 'Yes, it is his', opts: [{ txt: 'Yes, it is his', ico: '💭' }, { txt: 'The officer is at school', ico: '👮' }, { txt: 'It is below the board', ico: '🪧' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đoán Xem Của Ai',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ và con mỗi người bỏ 2–3 món đồ chơi hoặc đồ dùng của mình vào một túi chung.',
              '<b>Bước 2:</b> Bố/mẹ lấy một món ra và nói <i>"Guess! Is it mine or yours?"</i>. Con đoán và trả lời <i>"It is yours"</i> hoặc <i>"It is mine"</i>.',
              '<b>Bước 3:</b> Chơi tiếp với đồ của người khác trong nhà, con nói <i>"It is his"</i>, <i>"It is hers"</i>, <i>"It is ours"</i>.'
            ]
          }
        }
      ]
    },
    '2.11': {
      lessons: [
        {
          id: '2.11A', name: 'Bài 2.11A: Đồ ăn & vị giác',
          grammar: {
            formulas: ['🍵 The tea + ⚡ is + 🔥 too hot', '🍚 The rice + ⚡ is + 👍 very / really good'],
            tip: 'very và really = rất (vẫn ổn), còn too = QUÁ mức nên không ổn: too hot là nóng quá, không uống được!'
          },
          chunks: [
            { scene: '🍵🔥😖', full: 'The tea is too hot', parts: [{t:'The tea',ico:'🍵',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'too hot',ico:'🔥',c:'o'}], traceWord: 'hot' },
            { scene: '👧🍚😋', full: 'My favorite rice is really good', parts: [{t:'My favorite rice',ico:'🍚',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'really good',ico:'👍',c:'o'}], traceWord: 'favorite' },
            { scene: '👥🍲😄', full: 'Everybody is very happy at dinner', parts: [{t:'Everybody',ico:'👥',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'very happy at dinner',ico:'🍲',c:'o'}], traceWord: 'everybody' },
            { scene: '🛋️💃🎉', full: 'The weekend dance is really fun', parts: [{t:'The weekend dance',ico:'💃',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'really fun',ico:'🎉',c:'o'}], traceWord: 'weekend' },
            { scene: '🕰️🐢⏰', full: 'The clock is too slow', parts: [{t:'The clock',ico:'🕰️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'too slow',ico:'🐢',c:'o'}], traceWord: 'clock' },
            { scene: '🙋💤✨', full: 'Mine is a very big dream', parts: [{t:'Mine',ico:'🙋',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a very big dream',ico:'💤',c:'o'}], traceWord: 'mine' },
            { scene: '🧠👍👧', full: 'My memory is really good', parts: [{t:'My memory',ico:'🧠',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'really good',ico:'👍',c:'o'}], traceWord: 'memory' },
            { scene: '👕☀️🏜️', full: 'My clothes are too dry', parts: [{t:'My clothes',ico:'👕',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'too dry',ico:'🏜️',c:'o'}], traceWord: 'clothes' }
          ],
          qaList: [
            { q: 'How much is the magazine?', scene: '📖💵', ans: 'The magazine is one dollar', opts: [{txt:'The magazine is one dollar',ico:'💵'}, {txt:'The magazine is too hot',ico:'🔥'}, {txt:'The magazine is a big fish',ico:'🐟'}] },
            { q: 'What do we say to a friend at the door?', scene: '🚪🤝😊', ans: 'Welcome to my house', opts: [{txt:'Welcome to my house',ico:'🤝'}, {txt:'Go away from here',ico:'🚫'}, {txt:'Sorry, I am wrong',ico:'🙇'}] },
            { q: 'What is a good rule?', scene: '⚖️👥👍', ans: 'Don\'t judge people too fast', opts: [{txt:'Don\'t judge people too fast',ico:'⚖️'}, {txt:'Run on the street',ico:'🏃'}, {txt:'Eat your phone',ico:'📱'}] },
            { q: 'What do you do on the phone?', scene: '📱🔔💬', ans: 'I ring my friend for a conversation', opts: [{txt:'I ring my friend for a conversation',ico:'🔔'}, {txt:'I eat my phone',ico:'🍽️'}, {txt:'I drink my phone',ico:'🥤'}] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Nếm thử "quá" hay "rất"',
            steps: [
              '<b>Bước 1:</b> Chuẩn bị 3 ly nước: nóng ấm, rất nóng (để nguội cho an toàn), và lạnh. Bố/mẹ đưa từng ly cho con sờ nhẹ bên ngoài.',
              '<b>Bước 2:</b> Con chọn nói: <i>"The water is very good"</i> nếu ổn, hoặc <i>"The water is too hot"</i> / <i>"too cold"</i> nếu không ổn. Bố/mẹ đổi vai và nói sai cho con sửa.',
              '<b>Bước 3:</b> Thêm đồ ăn có sẵn (cơm, bánh mì, trái cây): con nếm và nói <i>"It is really good"</i>. Ai nói đúng nhiều nhất được chọn món tối!'
            ]
          }
        },
        {
          id: '2.11B', name: 'Bài 2.11B: Bổn phận ở nhà & ở trường',
          grammar: {
            formulas: ['👦 I / 👥 We / You + ⚡ have to + 🧹 clean', '👧 She / 👦 He + ⚡ has to + 📚 collect', '👦 You + ⚡ don\'t have to + 🤑 be rich'],
            tip: 'I, we, you dùng have to; he, she dùng has to; còn don\'t have to nghĩa là "không cần phải" làm!'
          },
          chunks: [
            { scene: '👦📄✅', full: 'I have to copy the correct page', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have to',ico:'⚡',c:'v'}, {t:'copy the correct page',ico:'📄',c:'o'}], traceWord: 'copy' },
            { scene: '👧📚📥', full: 'She has to collect the books', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has to',ico:'⚡',c:'v'}, {t:'collect the books',ico:'📥',c:'o'}], traceWord: 'collect' },
            { scene: '👥🥛🧽', full: 'We have to clean the glass', parts: [{t:'We',ico:'👥',c:'s'}, {t:'have to',ico:'⚡',c:'v'}, {t:'clean the glass',ico:'🥛',c:'o'}], traceWord: 'glass' },
            { scene: '👦📦🏋️', full: 'He has to carry heavy boxes', parts: [{t:'He',ico:'👦',c:'s'}, {t:'has to',ico:'⚡',c:'v'}, {t:'carry heavy boxes',ico:'🏋️',c:'o'}], traceWord: 'heavy' },
            { scene: '👧☎️📞', full: 'I have to answer the telephone', parts: [{t:'I',ico:'👧',c:'s'}, {t:'have to',ico:'⚡',c:'v'}, {t:'answer the telephone',ico:'☎️',c:'o'}], traceWord: 'telephone' },
            { scene: '👩🍚🌟', full: 'Mother has to cook wonderful rice', parts: [{t:'Mother',ico:'👩',c:'s'}, {t:'has to',ico:'⚡',c:'v'}, {t:'cook wonderful rice',ico:'🍚',c:'o'}], traceWord: 'wonderful' },
            { scene: '✍️📖🌟', full: 'The famous writer has to write books', parts: [{t:'The famous writer',ico:'✍️',c:'s'}, {t:'has to',ico:'⚡',c:'v'}, {t:'write books',ico:'📖',c:'o'}], traceWord: 'famous' },
            { scene: '🧑‍🎓📋✏️', full: 'Students have to do a survey', parts: [{t:'Students',ico:'🧑‍🎓',c:'s'}, {t:'have to',ico:'⚡',c:'v'}, {t:'do a survey',ico:'📋',c:'o'}], traceWord: 'survey' }
          ],
          qaList: [
            { q: 'What does Father have to turn on?', scene: '👨📻🎵', ans: 'He has to turn on the radio', opts: [{txt:'He has to turn on the radio',ico:'📻'}, {txt:'He has to turn on the tea',ico:'🍵'}, {txt:'He has to turn on the bread',ico:'🍞'}] },
            { q: 'What do you wear in the wind?', scene: '💨👕🧥', ans: 'I have to wear warm clothes', opts: [{txt:'I have to wear warm clothes',ico:'👕'}, {txt:'I have to wear a big table',ico:'🪑'}, {txt:'I have to wear hot rice',ico:'🍚'}] },
            { q: 'How far is the video shop?', scene: '🎥🏪🧱', ans: 'It is one block from here', opts: [{txt:'It is one block from here',ico:'🧱'}, {txt:'It is one fish from here',ico:'🐟'}, {txt:'It is one egg from here',ico:'🥚'}] },
            { q: 'Do we have to be rich?', scene: '🤑❓', ans: 'No, we don\'t have to be rich', opts: [{txt:'No, we don\'t have to be rich',ico:'🤑'}, {txt:'Yes, we have to be a fish',ico:'🐟'}, {txt:'Yes, we have to be a table',ico:'🪑'}] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Bảng việc nhà "have to"',
            steps: [
              '<b>Bước 1:</b> Cùng con viết 4 việc nhà lên giấy (dọn ly, mang đồ nặng, nghe điện thoại, gấp quần áo). Ghi tên ai làm việc nào: bố, mẹ, con.',
              '<b>Bước 2:</b> Chỉ vào từng việc và nói: <i>"I have to carry heavy boxes"</i>, <i>"She has to clean the glass"</i>. Con nhắc lại, nhớ dùng have to cho I/we/you và has to cho he/she.',
              '<b>Bước 3:</b> Chọn một việc hôm nay không cần làm và cùng nói <i>"We don\'t have to clean the glass today"</i>. Con làm xong việc được dán một ngôi sao!'
            ]
          }
        },
        {
          id: '2.11C', name: 'Bài 2.11C: Nhân vật & siêu anh hùng',
          grammar: {
            formulas: ['🚢 This ship + ⚡ is + ⭐ more expensive than that', '🏢 My flat + ⚡ is + 👍 better than the hotel', '🎸 That band + ⚡ is + 🏆 the best'],
            tip: 'Tính từ dài thì thêm more phía trước (more beautiful); riêng good đổi thành better rồi best, không nói "more good"!'
          },
          chunks: [
            { scene: '🚢💰⭐', full: 'This ship is more expensive than that', parts: [{t:'This ship',ico:'🚢',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more expensive than that',ico:'💰',c:'o'}], traceWord: 'ship' },
            { scene: '🏢👍🏨', full: 'My flat is better than the hotel', parts: [{t:'My flat',ico:'🏢',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'better than the hotel',ico:'🏨',c:'o'}], traceWord: 'flat' },
            { scene: '👟👟✨', full: 'This pair is more beautiful than that', parts: [{t:'This pair',ico:'👟',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more beautiful than that',ico:'✨',c:'o'}], traceWord: 'pair' },
            { scene: '🤝📖🏆', full: 'My partner is the best reader', parts: [{t:'My partner',ico:'🤝',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best reader',ico:'🏆',c:'o'}], traceWord: 'partner' },
            { scene: '🍲🍱👍', full: 'Dinner is better than lunch', parts: [{t:'Dinner',ico:'🍲',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'better than lunch',ico:'🍱',c:'o'}], traceWord: 'dinner' },
            { scene: '🗃️⭐🙋', full: 'Her collection is more special than mine', parts: [{t:'Her collection',ico:'🗃️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more special than mine',ico:'⭐',c:'o'}], traceWord: 'collection' },
            { scene: '🎸🎶🏆', full: 'That band is the best in town', parts: [{t:'That band',ico:'🎸',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best in town',ico:'🏆',c:'o'}], traceWord: 'band' },
            { scene: '✍️📝😓', full: 'This sentence is more difficult than that', parts: [{t:'This sentence',ico:'✍️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'more difficult than that',ico:'😓',c:'o'}], traceWord: 'sentence' }
          ],
          qaList: [
            { q: 'Which place has more peace?', scene: '🚜🕊️', ans: 'The farm has more peace', opts: [{txt:'The farm has more peace',ico:'🚜'}, {txt:'The bus has more peace',ico:'🚌'}, {txt:'The train has more peace',ico:'🚆'}] },
            { q: 'Who is more fair?', scene: '⚖️👨‍🏫', ans: 'The coach is more fair than the boss', opts: [{txt:'The coach is more fair than the boss',ico:'⚖️'}, {txt:'The coach is more eat than the boss',ico:'🍽️'}, {txt:'The coach is more table than the boss',ico:'🪑'}] },
            { q: 'Is a ship slow?', scene: '🚢✈️🐢', ans: 'Yes, a ship is slower than a plane', opts: [{txt:'Yes, a ship is slower than a plane',ico:'🚢'}, {txt:'Yes, a ship is faster than a plane',ico:'✈️'}, {txt:'Yes, a plane is slower than a ship',ico:'🐢'}] },
            { q: 'Which spot is more dry?', scene: '🏠🏊📍', ans: 'The room is more dry than the pool', opts: [{txt:'The room is more dry than the pool',ico:'🏠'}, {txt:'The pool is more dry than the room',ico:'🏊'}, {txt:'The sea is more dry than the room',ico:'🌊'}] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Cuộc thi "ai hơn ai"',
            steps: [
              '<b>Bước 1:</b> Lấy 3 món đồ trong nhà (ví dụ 3 đôi dép hoặc 3 quyển sách). Xếp chúng thành một hàng trước mặt con.',
              '<b>Bước 2:</b> Bố/mẹ hỏi, con so sánh: <i>"This pair is more beautiful than that"</i>. Với món ngon thì nói <i>"Dinner is better than lunch"</i>, và chọn món <i>"the best"</i>.',
              '<b>Bước 3:</b> Đổi vai: con ra đề, bố/mẹ trả lời. Nhớ quy tắc: nói "better" chứ không nói "more good". Nói sai thì cả nhà cùng cười và sửa lại!'
            ]
          }
        }
      ]
    },
    '2.12': {
      lessons: [
        {
          id: '2.12A', name: 'Bài 2.12A: Sở thích & hoạt động vui',
          grammar: {
            formulas: ['👦 I + ❤️ like + ⚽ football and 🎵 music', '👦 He + ⚡ is + 😅 busy but 😄 happy', '👨‍👩‍👧 They + 🚕 take + 🚕 a taxi or 🚌 a bus'],
            tip: 'and = thêm ý • but = ý ngược lại • or = chọn một trong hai!'
          },
          chunks: [
            { scene: '👦⚽🎵', full: 'I like football and music', parts: [{t:'I',ico:'👦',c:'s'}, {t:'like',ico:'❤️',c:'v'}, {t:'football and music',ico:'⚽🎵',c:'o'}], traceWord: 'football' },
            { scene: '👨‍👩‍👧📚🏠', full: 'We go to the library or home', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'go',ico:'🚶',c:'v'}, {t:'to the library or home',ico:'📚🏠',c:'o'}], traceWord: 'library' },
            { scene: '👦⛺😄', full: 'He is busy but happy at camp', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'busy but happy at camp',ico:'⛺😄',c:'o'}], traceWord: 'camp' },
            { scene: '👧🗺️📷', full: 'She has a map and a photo', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a map and a photo',ico:'🗺️📷',c:'o'}], traceWord: 'map' },
            { scene: '👨‍👩‍👧🚕🚌', full: 'They take a taxi or a bus', parts: [{t:'They',ico:'👨‍👩‍👧',c:'s'}, {t:'take',ico:'🚕',c:'v'}, {t:'a taxi or a bus',ico:'🚕🚌',c:'o'}], traceWord: 'taxi' },
            { scene: '👨‍👩‍👧🌾🐴🐶', full: 'We buy feed for the horse and dog', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'buy',ico:'🛒',c:'v'}, {t:'feed for the horse and dog',ico:'🌾🐴🐶',c:'o'}], traceWord: 'feed' },
            { scene: '👦😢👶', full: 'I hear a cry and help the baby', parts: [{t:'I',ico:'👦',c:'s'}, {t:'hear',ico:'👂',c:'v'}, {t:'a cry and help the baby',ico:'😢👶',c:'o'}], traceWord: 'cry' },
            { scene: '👨‍👩‍👧🧩🏆', full: 'We solve it and the result is excellent', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'solve',ico:'🧩',c:'v'}, {t:'it and the result is excellent',ico:'🏆',c:'o'}], traceWord: 'excellent' }
          ],
          qaList: [
            { q: 'What does the neighbor have?', scene: '🏘️🔧🗺️', ans: 'A tool and a map', opts: [{ txt: 'A tool and a map', ico: '🔧🗺️' }, { txt: 'A bird and a fish', ico: '🐦🐟' }, { txt: 'In the room', ico: '🚪' }] },
            { q: 'Do you see smoke or fire?', scene: '💨🔥', ans: 'I see smoke', opts: [{ txt: 'I see smoke', ico: '💨' }, { txt: 'I like bread', ico: '🍞' }, { txt: 'She is a nurse', ico: '🏥' }] },
            { q: 'Where is the taxi?', scene: '🚕📐', ans: 'At the corner', opts: [{ txt: 'At the corner', ico: '📐' }, { txt: 'I am happy', ico: '😄' }, { txt: 'Two books', ico: '📚' }] },
            { q: 'Is the island big or small?', scene: '🏝️🌊', ans: 'The island is big', opts: [{ txt: 'The island is big', ico: '🏝️' }, { txt: 'He is a doctor', ico: '🩺' }, { txt: 'I eat rice', ico: '🍚' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Chọn And - But - Or',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đặt hai món đồ chơi hoặc hai bức ảnh trước mặt con và nói <i>"I like football and music."</i> để con nghe cách nối ý bằng <i>and</i>.',
              '<b>Bước 2:</b> Bố/mẹ hỏi <i>"Taxi or bus?"</i>, con chọn và nói cả câu <i>"I take a taxi."</i>; sau đó thử nói ý ngược lại với <i>but</i>, ví dụ <i>"He is busy but happy."</i>.',
              '<b>Bước 3:</b> Đổi vai: con tự đặt một câu với and, but hoặc or về món mình thích, bố/mẹ đoán và vỗ tay khen.'
            ]
          }
        },
        {
          id: '2.12B', name: 'Bài 2.12B: Công thức làm món ăn & trò chơi',
          grammar: {
            formulas: ['1️⃣ First + 👦 I + 👜 open my bag', '2️⃣ Then + 👦 I + 🎫 find a ticket', '3️⃣ After that + 👨‍👩‍👧 we + 🎵 play pop music'],
            tip: 'Kể việc theo thứ tự: First (đầu tiên) → Then (rồi) → After that (sau đó)!'
          },
          chunks: [
            { scene: '👦👜📂', full: 'First I open my bag', parts: [{t:'First I',ico:'1️⃣👦',c:'s'}, {t:'open',ico:'📂',c:'v'}, {t:'my bag',ico:'👜',c:'o'}], traceWord: 'bag' },
            { scene: '👦🎫🔍', full: 'Then I find a ticket', parts: [{t:'Then I',ico:'2️⃣👦',c:'s'}, {t:'find',ico:'🔍',c:'v'}, {t:'a ticket',ico:'🎫',c:'o'}], traceWord: 'ticket' },
            { scene: '👨‍👩‍👧🗂️👆', full: 'First we pick a topic', parts: [{t:'First we',ico:'1️⃣👨‍👩‍👧',c:'s'}, {t:'pick',ico:'👆',c:'v'}, {t:'a topic',ico:'🗂️',c:'o'}], traceWord: 'topic' },
            { scene: '👨‍👩‍👧📘🔁', full: 'Then we repeat the lesson', parts: [{t:'Then we',ico:'2️⃣👨‍👩‍👧',c:'s'}, {t:'repeat',ico:'🔁',c:'v'}, {t:'the lesson',ico:'📘',c:'o'}], traceWord: 'repeat' },
            { scene: '👦🧠💡', full: 'First I use my brain', parts: [{t:'First I',ico:'1️⃣👦',c:'s'}, {t:'use',ico:'💡',c:'v'}, {t:'my brain',ico:'🧠',c:'o'}], traceWord: 'brain' },
            { scene: '👦👜🙈', full: 'After that I hide my bag', parts: [{t:'After that I',ico:'3️⃣👦',c:'s'}, {t:'hide',ico:'🙈',c:'v'}, {t:'my bag',ico:'👜',c:'o'}], traceWord: 'hide' },
            { scene: '👨‍👩‍👧🏖️🚶', full: 'Then we walk on the beach', parts: [{t:'Then we',ico:'2️⃣👨‍👩‍👧',c:'s'}, {t:'walk',ico:'🚶',c:'v'}, {t:'on the beach',ico:'🏖️',c:'o'}], traceWord: 'beach' },
            { scene: '👨‍👩‍👧🎵🎤', full: 'After that we sing a pop song', parts: [{t:'After that we',ico:'3️⃣👨‍👩‍👧',c:'s'}, {t:'sing',ico:'🎤',c:'v'}, {t:'a pop song',ico:'🎵',c:'o'}], traceWord: 'pop' }
          ],
          qaList: [
            { q: 'Who is the owner?', scene: '👩🏠', ans: 'The lady is the owner', opts: [{ txt: 'The lady is the owner', ico: '👩' }, { txt: 'Then I eat', ico: '🍽️' }, { txt: 'At the bottom', ico: '⬇️' }] },
            { q: 'What do you hear?', scene: '🌧️👂', ans: 'I hear the rain', opts: [{ txt: 'I hear the rain', ico: '🌧️' }, { txt: 'I see a bus', ico: '🚌' }, { txt: 'It is a song', ico: '🎵' }] },
            { q: 'Where is the ticket?', scene: '👜🎫⬇️', ans: 'At the bottom of the bag', opts: [{ txt: 'At the bottom of the bag', ico: '⬇️👜' }, { txt: 'My name is Mai', ico: '👧' }, { txt: 'I am ten', ico: '🔟' }] },
            { q: 'Do you like my suggestion?', scene: '💬😊', ans: 'Yes, with pleasure', opts: [{ txt: 'Yes, with pleasure', ico: '😊' }, { txt: 'On the table', ico: '🪑' }, { txt: 'Three books', ico: '📚' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Làm Gì Trước, Làm Gì Sau',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ làm một việc quen thuộc như mở túi, lấy vé giấy rồi cất đi, và nói từng bước: <i>"First I open my bag. Then I find a ticket."</i>.',
              '<b>Bước 2:</b> Con làm theo và nói lại với <i>First</i>, <i>Then</i>, <i>After that</i>, mỗi bước kèm một động tác thật.',
              '<b>Bước 3:</b> Bố/mẹ xáo trộn thứ tự ba thẻ giấy ghi First, Then, After that, con xếp lại đúng và đọc to cả ba câu.'
            ]
          }
        },
        {
          id: '2.12C', name: 'Bài 2.12C: Xin phép & nhờ giúp đỡ',
          grammar: {
            formulas: ['🙋 Can + 👦 I + 🌸 see the flower', '🙏 Could + 👤 you + 🤫 be quiet please', '✋ May + 👦 I + ☀️ sit in the sun'],
            tip: 'Xin phép dùng Can I / May I, nhờ người khác dùng Could you, và nhớ thêm please cho lịch sự!'
          },
          chunks: [
            { scene: '👦🌸👀', full: 'Can I see the flower', parts: [{t:'Can',ico:'🙋',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'see the flower',ico:'🌸',c:'o'}], traceWord: 'flower' },
            { scene: '👦⛵🌊', full: 'Can I ride the boat', parts: [{t:'Can',ico:'🙋',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'ride the boat',ico:'⛵',c:'o'}], traceWord: 'boat' },
            { scene: '👤👷🤝', full: 'Could you help the engineer', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'you',ico:'👤',c:'s'}, {t:'help the engineer',ico:'👷',c:'o'}], traceWord: 'engineer' },
            { scene: '👦☀️🪑', full: 'May I sit in the sun', parts: [{t:'May',ico:'✋',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'sit in the sun',ico:'☀️',c:'o'}], traceWord: 'sun' },
            { scene: '👤🤫📚', full: 'Could you be quiet please', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'you',ico:'👤',c:'s'}, {t:'be quiet please',ico:'🤫',c:'o'}], traceWord: 'quiet' },
            { scene: '👦🏊💦', full: 'May I play in the pool', parts: [{t:'May',ico:'✋',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'play in the pool',ico:'🏊',c:'o'}], traceWord: 'pool' },
            { scene: '👦🍱🏅', full: 'Can I have lunch with the coach', parts: [{t:'Can',ico:'🙋',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'have lunch with the coach',ico:'🍱🏅',c:'o'}], traceWord: 'lunch' },
            { scene: '👤🔢🤨', full: 'Could you check the strange code', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'you',ico:'👤',c:'s'}, {t:'check the strange code',ico:'🔢🤨',c:'o'}], traceWord: 'code' }
          ],
          qaList: [
            { q: 'Are you a fan of football?', scene: '📣⚽', ans: 'Yes, I am a fan', opts: [{ txt: 'Yes, I am a fan', ico: '📣' }, { txt: 'In the pool', ico: '🏊' }, { txt: 'Two flowers', ico: '🌸🌸' }] },
            { q: 'Is the nurse afraid?', scene: '🏥😨', ans: 'No, she is not afraid', opts: [{ txt: 'No, she is not afraid', ico: '🏥😊' }, { txt: 'On the boat', ico: '⛵' }, { txt: 'I have lunch', ico: '🍱' }] },
            { q: 'Is it hot in winter?', scene: '❄️🧥', ans: 'No, it is cold', opts: [{ txt: 'No, it is cold', ico: '❄️' }, { txt: 'Yes, it is hot', ico: '🔥' }, { txt: 'Yes, I can', ico: '🙋' }] },
            { q: 'When do flowers grow?', scene: '🌱🌸', ans: 'Flowers grow in spring', opts: [{ txt: 'Flowers grow in spring', ico: '🌱🌸' }, { txt: 'I am afraid', ico: '😨' }, { txt: 'At the pool', ico: '🏊' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Xin Phép Lịch Sự',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ ngồi vai "người lớn", con muốn lấy một món đồ (cái quạt, bông hoa giả...) và phải hỏi lịch sự: <i>"Can I have the flower, please?"</i>.',
              '<b>Bước 2:</b> Đổi vai: con nhờ bố/mẹ giúp bằng <i>"Could you help me, please?"</i> hoặc xin phép bằng <i>"May I sit here?"</i>, bố/mẹ chỉ đồng ý khi con nói đủ please.',
              '<b>Bước 3:</b> Cả nhà thi đua: mỗi lần con xin hoặc nhờ đúng và lịch sự được một ngôi sao giấy, đủ 5 ngôi sao thì được chọn trò chơi tiếp theo.'
            ]
          }
        }
      ]
    }
  }
};
