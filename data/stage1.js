/* GIAI ĐOẠN 1 — Cambridge Starters (Pre-A1)
   Dữ liệu một giai đoạn. Nạp bằng <script src> (chạy được từ file://, không dùng fetch).
   Định dạng bài học: xem docs/GEMINI_LESSON_PROMPT.md; kiểm bằng: python tools/validate_lessons.py */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[1] = {
  label: '🌟 GĐ 1: Starters',  // chữ hiện trên nút chọn giai đoạn
  modules: [
    { code: '1.1', title: 'Bản Thân, Số Đếm & Cảm Xúc' },
    { code: '1.2', title: 'Gia Đình, Nhà Cửa & Vị Trí' },
    { code: '1.3', title: 'Động Vật, Cơ Thể & Khả Năng (Can)' },
    { code: '1.4', title: 'Đồ Ăn, Áo Quần & Lễ Phép' },
    { code: '1.5', title: 'Hành Động Đang Diễn Ra (V-ing)' },
    { code: '1.6', title: 'Trường Lớp Của Bé' },
    { code: '1.7', title: 'Đồ Chơi & Màu Sắc' },
    { code: '1.8', title: 'Vườn Hoa & Công Viên' },
    { code: '1.9', title: 'Ngày Vui Cùng Gia Đình' }
  ],
  data: {
    '1.1': {
      lessons: [
        {
          id: '1.1A', name: 'Bài 1.1A: Cảm xúc của con',
          grammar: {
            formulas: ['👦 I + ⚡ am + 🍔 hungry', '👧 She / 👦 He + ⚡ is + 😄 happy'],
            tip: 'I luôn hút "am" • 1 người (He / She) luôn hút "is"!'
          },
          chunks: [
            { scene: '👦🍔😋', full: 'I am hungry', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am',ico:'⚡',c:'v'}, {t:'hungry',ico:'🍔',c:'o'}], traceWord: 'hungry' },
            { scene: '👧💧🥤', full: 'I am thirsty', parts: [{t:'I',ico:'👧',c:'s'}, {t:'am',ico:'⚡',c:'v'}, {t:'thirsty',ico:'💧',c:'o'}], traceWord: 'thirsty' },
            { scene: '👩😄🎈', full: 'She is happy', parts: [{t:'She',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'happy',ico:'😄',c:'o'}], traceWord: 'happy' },
            { scene: '👦🥱🛌', full: 'He is tired', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'tired',ico:'🥱',c:'o'}], traceWord: 'tired' }
          ],
          qaList: [
            { q: 'Are you hungry?', scene: '👦🍔😋', ans: 'I am hungry', opts: [{ txt: 'I am hungry', ico: '🍔' }, { txt: 'He is tired', ico: '🥱' }, { txt: 'Two cats', ico: '🐱' }] },
            { q: 'How is she today?', scene: '👩😄🎈', ans: 'She is happy', opts: [{ txt: 'She is happy', ico: '😄' }, { txt: 'I am thirsty', ico: '💧' }, { txt: 'On the bed', ico: '🛏️' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đóng Kịch Đói - Khát - Vui - Mệt',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ làm điệu bộ xoa bụng đói hoặc ngáp ngủ và hỏi con: <i>"Look! How do I feel?"</i>.',
              '<b>Bước 2:</b> Con chỉ tay và nói nhanh <i>"I am hungry!"</i> hoặc <i>"He is tired!"</i>.',
              '<b>Bước 3:</b> Con tự làm 4 điệu bộ (🍔 đói, 💧 khát, 😄 vui, 🥱 mệt) để bố/mẹ đoán bằng tiếng Anh.'
            ]
          }
        },
        {
          id: '1.1B', name: 'Bài 1.1B: Tuổi & Số đếm',
          grammar: {
            formulas: ['👦 I + 🤲 have + 🔟 ten cars', '👧 She + 🤲 has + 2️⃣ two cats'],
            tip: 'I đi với "have" • She/He đi với "has" • Từ 2 vật trở lên nhớ thêm đuôi "-s" (cars, cats)!'
          },
          chunks: [
            { scene: '🎂6️⃣👦', full: 'I am six', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am',ico:'🎂',c:'v'}, {t:'six',ico:'6️⃣',c:'o'}], traceWord: 'six' },
            { scene: '🎂7️⃣👧', full: 'I am seven', parts: [{t:'I',ico:'👧',c:'s'}, {t:'am',ico:'🎂',c:'v'}, {t:'seven',ico:'7️⃣',c:'o'}], traceWord: 'seven' },
            { scene: '👦🚗🔟', full: 'I have ten cars', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'ten cars',ico:'🔟🚗',c:'o'}], traceWord: 'ten' },
            { scene: '👧🐱2️⃣', full: 'She has two cats', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'two cats',ico:'2️⃣🐱',c:'o'}], traceWord: 'two' }
          ],
          qaList: [
            { q: 'How old are you?', scene: '🎂7️⃣👧', ans: 'I am seven', opts: [{ txt: 'I am seven', ico: '🎂7️⃣' }, { txt: 'She is happy', ico: '😄' }, { txt: 'Red apple', ico: '🍎' }] },
            { q: 'What do you have?', scene: '👦🚗🔟', ans: 'I have ten cars', opts: [{ txt: 'I have ten cars', ico: '🔟🚗' }, { txt: 'I am six', ico: '6️⃣' }, { txt: 'In the box', ico: '📦' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đếm Đồ Chơi & Hỏi Tuổi',
            steps: [
              '<b>Bước 1:</b> Bố và con lấy 2–10 món đồ chơi nhỏ đặt lên bàn.',
              '<b>Bước 2:</b> Bố giơ số ngón tay bất kỳ và hỏi <i>"How old are you?"</i> → Con trả lời <i>"I am six / seven!"</i>.',
              '<b>Bước 3:</b> Con gom đồ chơi vào tay và tự nói <i>"I have two cars / ten pens!"</i>.'
            ]
          }
        },
        {
          id: '1.1C', name: 'Bài 1.1C: Khuôn mặt & Đôi bàn tay',
          grammar: {
            formulas: ['👐 My hands (2 tay) + ⚡ are + 🧼 clean', '👨 He (1 người) + ⚡ is + 💪 strong'],
            tip: '1 người/vật dùng "is" • 2 bàn tay/đôi mắt trở lên dùng "are"!'
          },
          chunks: [
            { scene: '👦👀🤎', full: 'I have brown eyes', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'brown eyes',ico:'👀',c:'o'}], traceWord: 'eyes' },
            { scene: '👧💇‍♀️✨', full: 'She has long hair', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'long hair',ico:'💇‍♀️',c:'o'}], traceWord: 'hair' },
            { scene: '🧼👐✨', full: 'My hands are clean', parts: [{t:'My hands',ico:'👐',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'clean',ico:'🧼',c:'o'}], traceWord: 'clean' },
            { scene: '👨💪⬆️', full: 'He is strong', parts: [{t:'He',ico:'👨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'strong',ico:'💪',c:'o'}], traceWord: 'strong' }
          ],
          qaList: [
            { q: 'Show me your hands!', scene: '🧼👐✨', ans: 'My hands are clean', opts: [{ txt: 'My hands are clean', ico: '🧼👐' }, { txt: 'I am hungry', ico: '🍔' }, { txt: 'Ten cars', ico: '🚗' }] },
            { q: 'Look at Dad!', scene: '👨💪⬆️', ans: 'He is strong', opts: [{ txt: 'He is strong', ico: '💪' }, { txt: 'She has long hair', ico: '💇‍♀️' }, { txt: 'Blue shirt', ico: '👕' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Soi Gương & Rửa Tay Trước Bữa Ăn',
            steps: [
              '<b>Bước 1:</b> Trước khi ăn tối, khi con vừa rửa tay xong, bố hỏi <i>"Show me your hands!"</i>.',
              '<b>Bước 2:</b> Con giơ 2 bàn tay ra và hô to: <i>"My hands are clean!"</i>.',
              '<b>Bước 3:</b> Con chỉ vào mắt mình nói <i>"I have brown eyes"</i> và chỉ vào bố nói <i>"He is strong!"</i>.'
            ]
          }
        }
      ]
    },
    '1.2': {
      lessons: [
        {
          id: '1.2A', name: 'Bài 1.2A: Gia đình yêu thương',
          grammar: {
            formulas: ['👉 This is + 👩 my mom / 👨 my dad', '👦 I + ❤️ love + 👵 my grandma'],
            tip: 'Dùng "This is my..." khi chỉ tay giới thiệu người thân trong nhà!'
          },
          chunks: [
            { scene: '👩❤️👦', full: 'This is my mom', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my mom',ico:'👩',c:'o'}], traceWord: 'mom' },
            { scene: '👨❤️👦', full: 'This is my dad', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my dad',ico:'👨',c:'o'}], traceWord: 'dad' },
            { scene: '👧🎀😊', full: 'She is my sister', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my sister',ico:'🎀',c:'o'}], traceWord: 'sister' },
            { scene: '👵🏡❤️', full: 'I love my grandma', parts: [{t:'I',ico:'👦',c:'s'}, {t:'love',ico:'❤️',c:'v'}, {t:'my grandma',ico:'👵',c:'o'}], traceWord: 'love' }
          ],
          qaList: [
            { q: 'Who is she?', scene: '👩❤️👦', ans: 'This is my mom', opts: [{ txt: 'This is my mom', ico: '👩' }, { txt: 'I am seven', ico: '7️⃣' }, { txt: 'Under the bed', ico: '🛏️' }] },
            { q: 'Who do you love?', scene: '👵🏡❤️', ans: 'I love my grandma', opts: [{ txt: 'I love my grandma', ico: '❤️👵' }, { txt: 'He is tired', ico: '🥱' }, { txt: 'Some water', ico: '💧' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Giới Thiệu Người Thân Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố và con đi quanh nhà hoặc mở ảnh gia đình.',
              '<b>Bước 2:</b> Bố chỉ vào từng người và hỏi <i>"Who is this?"</i> → Con đáp <i>"This is my mom / dad!"</i>.'
            ]
          }
        },
        {
          id: '1.2B', name: 'Bài 1.2B: Các phòng trong nhà',
          grammar: {
            formulas: ['👩 Mom + 📍 is in + 🍳 the kitchen', '👦 I + 💤 sleep + 🛏️ on my bed'],
            tip: 'Ở bên trong phòng nào, ta dùng cụm "in the + tên phòng"!'
          },
          chunks: [
            { scene: '👩🍳🍲', full: 'Mom is in the kitchen', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'is in',ico:'📍',c:'v'}, {t:'the kitchen',ico:'🍳',c:'o'}], traceWord: 'kitchen' },
            { scene: '👨🛋️📺', full: 'Dad is in the room', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'is in',ico:'📍',c:'v'}, {t:'the room',ico:'🛋️',c:'o'}], traceWord: 'room' },
            { scene: '👦🛏️💤', full: 'I sleep on my bed', parts: [{t:'I',ico:'👦',c:'s'}, {t:'sleep',ico:'💤',c:'v'}, {t:'on my bed',ico:'🛏️',c:'o'}], traceWord: 'bed' },
            { scene: '🚪👐🏠', full: 'Open the big door', parts: [{t:'Open',ico:'👐',c:'v'}, {t:'the big',ico:'⬆️',c:'s'}, {t:'door',ico:'🚪',c:'o'}], traceWord: 'door' }
          ],
          qaList: [
            { q: 'Where is Mom?', scene: '👩🍳🍲', ans: 'Mom is in the kitchen', opts: [{ txt: 'Mom is in the kitchen', ico: '👩🍳' }, { txt: 'I have brown eyes', ico: '👀' }, { txt: 'Two cats', ico: '🐱' }] },
            { q: 'Where do you sleep?', scene: '👦🛏️💤', ans: 'I sleep on my bed', opts: [{ txt: 'I sleep on my bed', ico: '💤🛏️' }, { txt: 'She is happy', ico: '😄' }, { txt: 'Red apple', ico: '🍎' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thám Tử Tìm Người Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố hỏi con <i>"Where is Mom / Grandma?"</i>.',
              '<b>Bước 2:</b> Con chạy đi xem rồi báo cáo: <i>"Mom is in the kitchen!"</i>.'
            ]
          }
        },
        {
          id: '1.2C', name: 'Bài 1.2C: Vị trí đồ vật (On, In, Under)',
          grammar: {
            formulas: ['⬆️ on (ở trên mặt)', '📥 in (ở bên trong)', '⬇️ under (ở dưới gầm)', '➡️ by (ở cạnh bên)'],
            tip: 'Hỏi vị trí bắt đầu bằng "Where is..." → Trả lời bằng on / in / under / by!'
          },
          chunks: [
            { scene: '📘⬆️🪑', full: 'The book is on the desk', parts: [{t:'The book',ico:'📘',c:'s'}, {t:'is on',ico:'⬆️',c:'v'}, {t:'the desk',ico:'🪑',c:'o'}], traceWord: 'book' },
            { scene: '🐱⬇️🛏️', full: 'The cat is under the bed', parts: [{t:'The cat',ico:'🐱',c:'s'}, {t:'is under',ico:'⬇️',c:'v'}, {t:'the bed',ico:'🛏️',c:'o'}], traceWord: 'cat' },
            { scene: '⚽📥📦', full: 'The ball is in the box', parts: [{t:'The ball',ico:'⚽',c:'s'}, {t:'is in',ico:'📥',c:'v'}, {t:'the box',ico:'📦',c:'o'}], traceWord: 'box' },
            { scene: '💡➡️🛋️', full: 'The lamp is by the sofa', parts: [{t:'The lamp',ico:'💡',c:'s'}, {t:'is by',ico:'➡️',c:'v'}, {t:'the sofa',ico:'🛋️',c:'o'}], traceWord: 'lamp' }
          ],
          qaList: [
            { q: 'Where is the cat?', scene: '🐱⬇️🛏️', ans: 'The cat is under the bed', opts: [{ txt: 'The cat is under the bed', ico: '🐱⬇️🛏️' }, { txt: 'I am thirsty', ico: '💧' }, { txt: 'He is strong', ico: '💪' }] },
            { q: 'Where is the ball?', scene: '⚽📥📦', ans: 'The ball is in the box', opts: [{ txt: 'The ball is in the box', ico: '⚽📦' }, { txt: 'This is my dad', ico: '👨' }, { txt: 'Seven cars', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Giấu Quả Bóng (On / In / Under)',
            steps: [
              '<b>Bước 1:</b> Bố đặt quả bóng LÊN ghế, TRONG hộp hoặc DƯỚI gầm bàn và hỏi <i>"Where is the ball?"</i>.',
              '<b>Bước 2:</b> Con trả lời nhanh <i>"The ball is in the box / under the desk!"</i>.'
            ]
          }
        }
      ]
    },
    '1.3': {
      lessons: [
        {
          id: '1.3A', name: 'Bài 1.3A: Thế giới động vật',
          grammar: {
            formulas: ['🐘 An elephant + 🤲 has + 👂 big ears', '🐒 A monkey + ❤️ likes + 🍌 bananas'],
            tip: '1 con vật (A/An...) luôn đi với "has" và động từ thêm "-s" (likes)!'
          },
          chunks: [
            { scene: '🐘👂✨', full: 'An elephant has big ears', parts: [{t:'An elephant',ico:'🐘',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'big ears',ico:'👂',c:'o'}], traceWord: 'ears' },
            { scene: '🦒⬆️🌿', full: 'A giraffe has a long neck', parts: [{t:'A giraffe',ico:'🦒',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a long neck',ico:'⬆️',c:'o'}], traceWord: 'long' },
            { scene: '🐒🍌🌳', full: 'A monkey likes bananas', parts: [{t:'A monkey',ico:'🐒',c:'s'}, {t:'likes',ico:'❤️',c:'v'}, {t:'bananas',ico:'🍌',c:'o'}], traceWord: 'monkey' },
            { scene: '🐟🌊🏊', full: 'The fish is in the water', parts: [{t:'The fish',ico:'🐟',c:'s'}, {t:'is in',ico:'📍',c:'v'}, {t:'the water',ico:'🌊',c:'o'}], traceWord: 'fish' }
          ],
          qaList: [
            { q: 'What has big ears?', scene: '🐘👂✨', ans: 'An elephant has big ears', opts: [{ txt: 'An elephant has big ears', ico: '🐘👂' }, { txt: 'The book is on the desk', ico: '📘' }, { txt: 'I am six', ico: '6️⃣' }] },
            { q: 'Where is the fish?', scene: '🐟🌊🏊', ans: 'The fish is in the water', opts: [{ txt: 'The fish is in the water', ico: '🐟🌊' }, { txt: 'This is my mom', ico: '👩' }, { txt: 'Blue shirt', ico: '👕' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Quan Sát Bể Cá Ngoài Sân',
            steps: [
              '<b>Bước 1:</b> Ra khu vực bể cá ngoài sân, bố hỏi <i>"Where is the fish?"</i> → Con nói <i>"The fish is in the water!"</i>.'
            ]
          }
        },
        {
          id: '1.3B', name: 'Bài 1.3B: Khả năng của con vật (Can)',
          grammar: {
            formulas: ['🦅 A bird + 💪 can + ☁️ fly high', '🐧 A penguin + 🚫 cannot + ☁️ fly'],
            tip: 'Làm được dùng "can" • Không làm được dùng "cannot"!'
          },
          chunks: [
            { scene: '🦅☁️⬆️', full: 'A bird can fly high', parts: [{t:'A bird',ico:'🦅',c:'s'}, {t:'can',ico:'💪',c:'v'}, {t:'fly high',ico:'☁️',c:'o'}], traceWord: 'bird' },
            { scene: '🐟🌊💨', full: 'A fish can swim fast', parts: [{t:'A fish',ico:'🐟',c:'s'}, {t:'can',ico:'💪',c:'v'}, {t:'swim fast',ico:'🌊',c:'o'}], traceWord: 'swim' },
            { scene: '🐸🌿⤴️', full: 'A frog can jump far', parts: [{t:'A frog',ico:'🐸',c:'s'}, {t:'can',ico:'💪',c:'v'}, {t:'jump far',ico:'⤴️',c:'o'}], traceWord: 'jump' },
            { scene: '🐧🚫☁️', full: 'A penguin cannot fly', parts: [{t:'A penguin',ico:'🐧',c:'s'}, {t:'cannot',ico:'🚫',c:'v'}, {t:'fly',ico:'☁️',c:'o'}], traceWord: 'fly' }
          ],
          qaList: [
            { q: 'What can a bird do?', scene: '🦅☁️⬆️', ans: 'A bird can fly high', opts: [{ txt: 'A bird can fly high', ico: '🦅☁️' }, { txt: 'I sleep on my bed', ico: '🛏️' }, { txt: 'I am hungry', ico: '🍔' }] },
            { q: 'Can a penguin fly?', scene: '🐧🚫☁️', ans: 'A penguin cannot fly', opts: [{ txt: 'A penguin cannot fly', ico: '🐧🚫' }, { txt: 'A frog can jump far', ico: '🐸' }, { txt: 'Ten cars', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Bắt Chước Động Vật',
            steps: [
              '<b>Bước 1:</b> Ngoài sân rộng, hai bố con vừa bật nhảy vừa hô <i>"A frog can jump far!"</i>.'
            ]
          }
        },
        {
          id: '1.3C', name: 'Bài 1.3C: Kỹ năng của bé (I can...)',
          grammar: {
            formulas: ['👦 I can + 🏃‍♂️ run fast', '👧 I can + 🚲 ride a bike'],
            tip: 'Sau "can" động từ luôn giữ nguyên (run, ride, sing, see)!'
          },
          chunks: [
            { scene: '👦🏃‍♂️💨', full: 'I can run fast', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can',ico:'💪',c:'v'}, {t:'run fast',ico:'🏃‍♂️',c:'o'}], traceWord: 'run' },
            { scene: '👧🚲✨', full: 'I can ride a bike', parts: [{t:'I',ico:'👧',c:'s'}, {t:'can',ico:'💪',c:'v'}, {t:'ride a bike',ico:'🚲',c:'o'}], traceWord: 'bike' },
            { scene: '👦🎵🎤', full: 'I can sing a song', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can',ico:'💪',c:'v'}, {t:'sing a song',ico:'🎵',c:'o'}], traceWord: 'sing' },
            { scene: '👀🌈🐦', full: 'I can see a bird', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can see',ico:'👀',c:'v'}, {t:'a bird',ico:'🐦',c:'o'}], traceWord: 'see' }
          ],
          qaList: [
            { q: 'What can you do?', scene: '👧🚲✨', ans: 'I can ride a bike', opts: [{ txt: 'I can ride a bike', ico: '🚲' }, { txt: 'The cat is under the bed', ico: '🐱' }, { txt: 'He is tired', ico: '🥱' }] },
            { q: 'What can you see in the tree?', scene: '👀🌈🐦', ans: 'I can see a bird', opts: [{ txt: 'I can see a bird', ico: '👀🐦' }, { txt: 'Mom is in the kitchen', ico: '👩' }, { txt: 'Two cats', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thử Thách "I Can..." Ngoài Sân',
            steps: [
              '<b>Bước 1:</b> Ra sân chạy 1 vòng và hô to <i>"I can run fast! I can ride a bike!"</i>.'
            ]
          }
        }
      ]
    },
    '1.4': {
      lessons: [
        {
          id: '1.4A', name: 'Bài 1.4A: Xin phép lịch sự (Would like)',
          grammar: {
            formulas: ['👦 I would like + 🥛 milk / 🍎 an apple', '🤲 Some water + 🙏 please'],
            tip: 'Dùng "I would like..." và "please" khi muốn xin đồ ăn/thức uống một cách lễ phép!'
          },
          chunks: [
            { scene: '👦🙏🥛', full: 'I would like milk', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would like',ico:'🙏',c:'v'}, {t:'milk',ico:'🥛',c:'o'}], traceWord: 'milk' },
            { scene: '👧🙏🍎', full: 'I would like an apple', parts: [{t:'I',ico:'👧',c:'s'}, {t:'would like',ico:'🙏',c:'v'}, {t:'an apple',ico:'🍎',c:'o'}], traceWord: 'apple' },
            { scene: '👦🙏💧', full: 'Some water please', parts: [{t:'Some',ico:'🤲',c:'s'}, {t:'water',ico:'💧',c:'o'}, {t:'please',ico:'🙏',c:'v'}], traceWord: 'water' },
            { scene: '🎁😊🤝', full: 'Thank you very much', parts: [{t:'Thank',ico:'🙏',c:'v'}, {t:'you',ico:'🤝',c:'s'}, {t:'very much',ico:'❤️',c:'o'}], traceWord: 'thank' }
          ],
          qaList: [
            { q: 'What would you like to drink?', scene: '👦🙏🥛', ans: 'I would like milk', opts: [{ txt: 'I would like milk', ico: '🙏🥛' }, { txt: 'A frog can jump far', ico: '🐸' }, { txt: 'Under the bed', ico: '🛏️' }] },
            { q: 'Here is your apple!', scene: '🎁😊🤝', ans: 'Thank you very much', opts: [{ txt: 'Thank you very much', ico: '🙏❤️' }, { txt: 'I can run fast', ico: '🏃‍♂️' }, { txt: 'Ten cars', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Quầy Giải Khát Gia Đình',
            steps: [
              '<b>Bước 1:</b> Bố hỏi <i>"What would you like?"</i> → Con lễ phép đáp <i>"I would like milk / Some water please!"</i>.'
            ]
          }
        },
        {
          id: '1.4B', name: 'Bài 1.4B: Món ăn con thích (I like...)',
          grammar: {
            formulas: ['👧 I like + 🍌 sweet bananas', '👦 I eat + 🍜 beef noodles'],
            tip: 'Nói sở thích chung dùng "I like + tên món ăn số nhiều (bananas, eggs)"!'
          },
          chunks: [
            { scene: '👧😍🍌', full: 'I like sweet bananas', parts: [{t:'I',ico:'👧',c:'s'}, {t:'like',ico:'😍',c:'v'}, {t:'sweet bananas',ico:'🍌',c:'o'}], traceWord: 'like' },
            { scene: '👦😋🍜', full: 'I eat beef noodles', parts: [{t:'I',ico:'👦',c:'s'}, {t:'eat',ico:'🍽️',c:'v'}, {t:'beef noodles',ico:'🍜',c:'o'}], traceWord: 'eat' },
            { scene: '👧🥛⬆️', full: 'Yogurt is very good', parts: [{t:'Yogurt',ico:'🥛',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'very good',ico:'👍',c:'o'}], traceWord: 'good' },
            { scene: '👦🥚🍚', full: 'I like eggs and rice', parts: [{t:'I',ico:'👦',c:'s'}, {t:'like',ico:'😍',c:'v'}, {t:'eggs and rice',ico:'🥚🍚',c:'o'}], traceWord: 'eggs' }
          ],
          qaList: [
            { q: 'What fruit do you like?', scene: '👧😍🍌', ans: 'I like sweet bananas', opts: [{ txt: 'I like sweet bananas', ico: '😍🍌' }, { txt: 'A bird can fly high', ico: '🦅' }, { txt: 'My dad', ico: '👨' }] },
            { q: 'What do you eat for breakfast?', scene: '👦😋🍜', ans: 'I eat beef noodles', opts: [{ txt: 'I eat beef noodles', ico: '🍽️🍜' }, { txt: 'The ball is in the box', ico: '⚽' }, { txt: 'He is tired', ico: '🥱' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Phỏng Vấn Bữa Ăn Sáng & Tối',
            steps: [
              '<b>Bước 1:</b> Trong bữa ăn, bố hỏi <i>"What do you eat?"</i> → Con đáp <i>"I eat beef noodles / Yogurt is very good!"</i>.'
            ]
          }
        },
        {
          id: '1.4C', name: 'Bài 1.4C: Quần áo của con',
          grammar: {
            formulas: ['🙌 Put on (Mặc/Đội vào)', '👐 Take off (Cởi/Tháo ra)'],
            tip: 'I wear (không s) • She wears (có s) • Mặc vào = Put on • Cởi ra = Take off!'
          },
          chunks: [
            { scene: '👦👕🔵', full: 'I wear a blue shirt', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wear',ico:'👕',c:'v'}, {t:'a blue shirt',ico:'🔵',c:'o'}], traceWord: 'shirt' },
            { scene: '👧👗🌸', full: 'She wears a pink dress', parts: [{t:'She',ico:'👧',c:'s'}, {t:'wears',ico:'👗',c:'v'}, {t:'a pink dress',ico:'🌸',c:'o'}], traceWord: 'dress' },
            { scene: '👦🧢☀️', full: 'Put on your red cap', parts: [{t:'Put on',ico:'🙌',c:'v'}, {t:'your',ico:'👦',c:'s'}, {t:'red cap',ico:'🧢',c:'o'}], traceWord: 'cap' },
            { scene: '👟🚪🏠', full: 'Take off your shoes', parts: [{t:'Take off',ico:'👐',c:'v'}, {t:'your',ico:'👦',c:'s'}, {t:'shoes',ico:'👟',c:'o'}], traceWord: 'shoes' }
          ],
          qaList: [
            { q: 'What do you wear today?', scene: '👦👕🔵', ans: 'I wear a blue shirt', opts: [{ txt: 'I wear a blue shirt', ico: '👕🔵' }, { txt: 'I would like milk', ico: '🥛' }, { txt: 'A fish can swim', ico: '🐟' }] },
            { q: 'You are home! What do you do?', scene: '👟🚪🏠', ans: 'Take off your shoes', opts: [{ txt: 'Take off your shoes', ico: '👟🚪' }, { txt: 'I am seven', ico: '7️⃣' }, { txt: 'Big ears', ico: '👂' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Khẩu Lệnh Mặc Áo & Cởi Giày',
            steps: [
              '<b>Bước 1:</b> Đi học về đến hiên nhà, bố hô <i>"Take off your shoes!"</i> để con cởi giày xếp lên kệ.'
            ]
          }
        }
      ]
    },
    '1.5': {
      lessons: [
        {
          id: '1.5A', name: 'Bài 1.5A: Chơi thể thao ngoài sân',
          grammar: {
            formulas: ['👦 I am + ⤴️ jumping', '👧 She / He is + 🦵 kicking / 🏃‍♀️ running'],
            tip: 'Việc đang làm ngay lúc này: Phải có am / is / are + Động từ gắn đuôi "-ing"!'
          },
          chunks: [
            { scene: '👦⚽🥅', full: 'He is kicking the ball', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is kicking',ico:'🦵',c:'v'}, {t:'the ball',ico:'⚽',c:'o'}], traceWord: 'ball' },
            { scene: '👧🏃‍♀️🌳', full: 'She is running fast', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is running',ico:'🏃‍♀️',c:'v'}, {t:'fast',ico:'💨',c:'o'}], traceWord: 'fast' },
            { scene: '👦🪢⤴️', full: 'I am jumping rope', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am jumping',ico:'⤴️',c:'v'}, {t:'rope',ico:'🪢',c:'o'}], traceWord: 'rope' },
            { scene: '👧🏀🙌', full: 'She is catching the ball', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is catching',ico:'🙌',c:'v'}, {t:'the ball',ico:'🏀',c:'o'}], traceWord: 'catching' }
          ],
          qaList: [
            { q: 'What is he doing?', scene: '👦⚽🥅', ans: 'He is kicking the ball', opts: [{ txt: 'He is kicking the ball', ico: '🦵⚽' }, { txt: 'I like sweet bananas', ico: '🍌' }, { txt: 'Under the bed', ico: '🛏️' }] },
            { q: 'What are you doing now?', scene: '👦🪢⤴️', ans: 'I am jumping rope', opts: [{ txt: 'I am jumping rope', ico: '⤴️🪢' }, { txt: 'This is my mom', ico: '👩' }, { txt: 'Some water', ico: '💧' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Bình Luận Viên Thể Thao Ngoài Sân',
            steps: [
              '<b>Bước 1:</b> Ngoài sân nhà, bố đá bóng và hỏi <i>"What am I doing?"</i> → Con đáp <i>"He is kicking the ball!"</i>.'
            ]
          }
        },
        {
          id: '1.5B', name: 'Bài 1.5B: Học bài & Đàn hát trong nhà',
          grammar: {
            formulas: ['👧 She is playing + 🎹 the piano', '👦👧 We are listening + 🎧 to music'],
            tip: 'We (chúng ta - nhiều người) luôn hút "are + V-ing" (We are listening)!'
          },
          chunks: [
            { scene: '👧🎹🎵', full: 'She is playing the piano', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is playing',ico:'🎶',c:'v'}, {t:'the piano',ico:'🎹',c:'o'}], traceWord: 'piano' },
            { scene: '👦📖🐉', full: 'He is reading a book', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is reading',ico:'👀',c:'v'}, {t:'a book',ico:'📖',c:'o'}], traceWord: 'reading' },
            { scene: '👧🎨🖼️', full: 'I am drawing a tree', parts: [{t:'I',ico:'👧',c:'s'}, {t:'am drawing',ico:'🖍️',c:'v'}, {t:'a tree',ico:'🌳',c:'o'}], traceWord: 'drawing' },
            { scene: '👦🎧🎶', full: 'We are listening to music', parts: [{t:'We',ico:'👦👧',c:'s'}, {t:'are listening',ico:'👂',c:'v'}, {t:'to music',ico:'🎧',c:'o'}], traceWord: 'music' }
          ],
          qaList: [
            { q: 'What is she playing?', scene: '👧🎹🎵', ans: 'She is playing the piano', opts: [{ txt: 'She is playing the piano', ico: '🎹🎵' }, { txt: 'Take off your shoes', ico: '👟' }, { txt: 'I am hungry', ico: '🍔' }] },
            { q: 'What are you drawing?', scene: '👧🎨🖼️', ans: 'I am drawing a tree', opts: [{ txt: 'I am drawing a tree', ico: '🖍️🌳' }, { txt: 'A penguin cannot fly', ico: '🐧' }, { txt: 'Ten cars', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Bên Cây Đàn Piano & Bàn Học',
            steps: [
              '<b>Bước 1:</b> Khi ngồi vào đàn Piano ở nhà, con vừa đánh đàn vừa nói <i>"I am playing the piano!"</i>.'
            ]
          }
        },
        {
          id: '1.5C', name: 'Bài 1.5C: Rủ nhau cùng chơi (Let us...)',
          grammar: {
            formulas: ['🙌 Let us + 🏊‍♂️ go swimming / 🪁 fly a kite / 💧 water the trees'],
            tip: 'Muốn rủ bố mẹ hoặc bạn cùng làm việc gì, hãy bắt đầu bằng "Let us..."!'
          },
          chunks: [
            { scene: '🏊‍♂️🌊☀️', full: 'Let us go swimming', parts: [{t:'Let us',ico:'🙌',c:'s'}, {t:'go',ico:'🏃',c:'v'}, {t:'swimming',ico:'🏊‍♂️',c:'o'}], traceWord: 'swimming' },
            { scene: '🪁🌬️🏞️', full: 'Let us fly a kite', parts: [{t:'Let us',ico:'🙌',c:'s'}, {t:'fly',ico:'🌬️',c:'v'}, {t:'a kite',ico:'🪁',c:'o'}], traceWord: 'kite' },
            { scene: '🌳🪴💧', full: 'Let us water the trees', parts: [{t:'Let us',ico:'🙌',c:'s'}, {t:'water',ico:'💧',c:'v'}, {t:'the trees',ico:'🪴',c:'o'}], traceWord: 'trees' },
            { scene: '👍😄✨', full: 'Yes great idea', parts: [{t:'Yes',ico:'👍',c:'s'}, {t:'great',ico:'✨',c:'v'}, {t:'idea',ico:'💡',c:'o'}], traceWord: 'yes' }
          ],
          qaList: [
            { q: 'Look at the garden! What shall we do?', scene: '🌳🪴💧', ans: 'Let us water the trees', opts: [{ txt: 'Let us water the trees', ico: '💧🪴' }, { txt: 'I have brown eyes', ico: '👀' }, { txt: 'Under the bed', ico: '🛏️' }] },
            { q: 'Let us fly a kite!', scene: '👍😄✨', ans: 'Yes great idea', opts: [{ txt: 'Yes great idea', ico: '👍✨' }, { txt: 'He is tired', ico: '🥱' }, { txt: 'Two cats', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Rủ Bố Tưới Cây Ngoài Sân',
            steps: [
              '<b>Bước 1:</b> Buổi chiều ra sân vườn, con rủ bố <i>"Dad! Let us water the trees!"</i> → Bố đáp <i>"Yes, great idea!"</i>.'
            ]
          }
        }
      ]
    },
    '1.6': {
      lessons: [
        {
          id: '1.6A', name: 'Bài 1.6A: Ở trường và đồ dùng học tập',
          grammar: {
            formulas: ['👉 This + ⚡ is + 📘 a new book', '👆 That + ⚡ is + 🚪 the first door'],
            tip: 'This = cái ở gần tay con 👉 • That = cái ở xa, phải chỉ tay thật xa 👆!'
          },
          chunks: [
            { scene: '📘🆕👉', full: 'This is a new book', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a new book',ico:'📘',c:'o'}], traceWord: 'new' },
            { scene: '🚪🥇👆', full: 'That is the first door', parts: [{t:'That',ico:'👆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the first door',ico:'🥇',c:'o'}], traceWord: 'first' },
            { scene: '👥📍🏫', full: 'They are over there', parts: [{t:'They',ico:'👥',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'over there',ico:'📍',c:'o'}], traceWord: 'there' },
            { scene: '👦🙏🪑', full: 'I want this chair', parts: [{t:'I',ico:'👦',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'this chair',ico:'🪑',c:'o'}], traceWord: 'want' },
            { scene: '👧🙏🗄️', full: 'I need that desk', parts: [{t:'I',ico:'👧',c:'s'}, {t:'need',ico:'🙏',c:'v'}, {t:'that desk',ico:'🗄️',c:'o'}], traceWord: 'need' },
            { scene: '👥📥📘', full: 'They get a book', parts: [{t:'They',ico:'👥',c:'s'}, {t:'get',ico:'📥',c:'v'}, {t:'a book',ico:'📘',c:'o'}], traceWord: 'get' },
            { scene: '👩🚪🗓️', full: 'You may come in', parts: [{t:'You',ico:'👩',c:'s'}, {t:'may',ico:'🗓️',c:'v'}, {t:'come in',ico:'🚪',c:'o'}], traceWord: 'may' },
            { scene: '📆🆕🎉', full: 'This is a new year', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a new year',ico:'📆',c:'o'}], traceWord: 'year' }
          ],
          qaList: [
            { q: 'What do you say?', scene: '👋💬😊', ans: 'I say hello', opts: [{ txt: 'I say hello', ico: '💬' }, { txt: 'In the room', ico: '🏠' }, { txt: 'It is June', ico: '🗓️' }] },
            { q: 'Is that a window?', scene: '🚪👆❓', ans: 'No, that is a door', opts: [{ txt: 'No, that is a door', ico: '🚪' }, { txt: 'Yes, they are', ico: '👥' }, { txt: 'I am six', ico: '6️⃣' }] },
            { q: 'What do you make?', scene: '🛠️📘👦', ans: 'I make a book', opts: [{ txt: 'I make a book', ico: '📘' }, { txt: 'I give you a chair', ico: '🎁' }, { txt: 'Very good', ico: '👍' }] },
            { q: 'What time is it?', scene: '⏰🏫🎒', ans: 'It is time for school', opts: [{ txt: 'It is time for school', ico: '🏫' }, { txt: 'I give you a book', ico: '🎁' }, { txt: 'Yes, I can', ico: '✅' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Chỉ Gần - Chỉ Xa',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đặt vài món đồ trong nhà (sách, ghế, bàn) ở gần và ở xa con. Chạm vào món gần và nói <i>"This is a book."</i>',
              '<b>Bước 2:</b> Chỉ tay thật xa vào món ở xa và nói <i>"That is a chair."</i> Con lặp lại, nhớ chạm vào đồ gần (This) và chỉ tay ra xa (That).',
              '<b>Bước 3:</b> Bố/mẹ hỏi <i>"Is this a book?"</i> hoặc <i>"Is that a door?"</i>, con trả lời <i>"Yes"</i> hoặc <i>"No, that is a desk."</i> rồi đổi vai.'
            ]
          }
        },
        {
          id: '1.6B', name: 'Bài 1.6B: Lớp học và bạn bè',
          grammar: {
            formulas: ['👉 These + ⚡ are + 🏠 small houses', '👆 Those + ⚡ are + 📘 two books'],
            tip: 'These / Those là số nhiều, đi với "are" • These = nhiều cái ở gần, Those = nhiều cái ở xa!'
          },
          chunks: [
            { scene: '🏠🐜👉', full: 'These are small houses', parts: [{t:'These',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'small houses',ico:'🏠',c:'o'}], traceWord: 'small' },
            { scene: '👪❤️👆', full: 'Those people are my family', parts: [{t:'Those people',ico:'👆',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'my family',ico:'👪',c:'o'}], traceWord: 'family' },
            { scene: '✍️🏷️📝', full: 'I write my name', parts: [{t:'I',ico:'🧒',c:'s'}, {t:'write',ico:'✍️',c:'v'}, {t:'my name',ico:'🏷️',c:'o'}], traceWord: 'write' },
            { scene: '🤝👩‍🏫🧒', full: 'We help our teacher', parts: [{t:'We',ico:'🧒',c:'s'}, {t:'help',ico:'🤝',c:'v'}, {t:'our teacher',ico:'👩‍🏫',c:'o'}], traceWord: 'help' },
            { scene: '🏁🏫⏰', full: 'We start school now', parts: [{t:'We',ico:'🧒',c:'s'}, {t:'start',ico:'🏁',c:'v'}, {t:'school now',ico:'🏫',c:'o'}], traceWord: 'start' },
            { scene: '💼👍👉', full: 'These are good jobs', parts: [{t:'These',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'good jobs',ico:'💼',c:'o'}], traceWord: 'jobs' },
            { scene: '2️⃣📘👆', full: 'Those are my second books', parts: [{t:'Those',ico:'👆',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'my second books',ico:'2️⃣',c:'o'}], traceWord: 'second' },
            { scene: '👥💵💰', full: 'Those people pay money', parts: [{t:'Those people',ico:'👥',c:'s'}, {t:'pay',ico:'💵',c:'v'}, {t:'money',ico:'💰',c:'o'}], traceWord: 'pay' }
          ],
          qaList: [
            { q: 'Is she a man?', scene: '👩❓', ans: 'No, she is a woman', opts: [{ txt: 'No, she is a woman', ico: '👩' }, { txt: 'Yes, she is a man', ico: '👨' }, { txt: 'They are small houses', ico: '🏠' }] },
            { q: 'Is he a child?', scene: '🧒👦', ans: 'Yes, he is a child', opts: [{ txt: 'Yes, he is a child', ico: '🧒' }, { txt: 'No, he is a doctor', ico: '🩺' }, { txt: 'They are in school', ico: '🏫' }] },
            { q: 'What month is it?', scene: '🗓️☀️', ans: 'It is June', opts: [{ txt: 'It is June', ico: '🗓️' }, { txt: 'It is Monday', ico: '📅' }, { txt: 'It is a house', ico: '🏠' }] },
            { q: 'Who is a man?', scene: '👨👩🧒', ans: 'He is a man', opts: [{ txt: 'He is a man', ico: '👨' }, { txt: 'She is a woman', ico: '👩' }, { txt: 'It is a chair', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đếm Đồ Gần - Xa',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ để vài quyển sách và cái ghế ngay cạnh con, vài món khác ở xa. Chạm vào đồ gần và nói <i>"These are books."</i>',
              '<b>Bước 2:</b> Chỉ tay ra xa vào nhiều món và nói <i>"Those are chairs."</i> Con lặp lại: gần dùng These, xa dùng Those, và nhớ đi với are.',
              '<b>Bước 3:</b> Con chỉ vào các thành viên trong gia đình và nói <i>"Those people are my family."</i> rồi đổi vai cho bố/mẹ nói.'
            ]
          }
        },
        {
          id: '1.6C', name: 'Bài 1.6C: Hoạt động và thầy cô ở trường',
          grammar: {
            formulas: ['❓ What + ⚡ is + 💻 this computer', '🙋 Who + ⚡ is + 👩 your mother'],
            tip: 'What hỏi về VẬT 🎒 • Who hỏi về NGƯỜI 🙋 • Đặt What / Who lên đầu câu hỏi nhé!'
          },
          chunks: [
            { scene: '👩🙋❓', full: 'Who is your mother', parts: [{t:'Who',ico:'🙋',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'your mother',ico:'👩',c:'o'}], traceWord: 'mother' },
            { scene: '💻❓👉', full: 'What is this computer', parts: [{t:'What',ico:'❓',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'this computer',ico:'💻',c:'o'}], traceWord: 'computer' },
            { scene: '🎓🙋❓', full: 'Who is the student', parts: [{t:'Who',ico:'🙋',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the student',ico:'🎓',c:'o'}], traceWord: 'student' },
            { scene: '🏷️💰❓', full: 'What is the price', parts: [{t:'What',ico:'❓',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the price',ico:'🏷️',c:'o'}], traceWord: 'price' },
            { scene: '🗣️🙋🏫', full: 'Who can speak here', parts: [{t:'Who',ico:'🙋',c:'s'}, {t:'can',ico:'⚡',c:'v'}, {t:'speak here',ico:'🗣️',c:'o'}], traceWord: 'speak' },
            { scene: '🏢📍❓', full: 'What is near the office', parts: [{t:'What',ico:'❓',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'near the office',ico:'🏢',c:'o'}], traceWord: 'office' },
            { scene: '🏬👥🙋', full: 'Who is in the shop', parts: [{t:'Who',ico:'🙋',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in the shop',ico:'🏬',c:'o'}], traceWord: 'shop' },
            { scene: '🏪💻🙋', full: 'Who sells computers', parts: [{t:'Who',ico:'🙋',c:'s'}, {t:'sells',ico:'🏪',c:'v'}, {t:'computers',ico:'💻',c:'o'}], traceWord: 'sells' }
          ],
          qaList: [
            { q: 'Is the computer hard?', scene: '💻👌😊', ans: 'No, it is easy', opts: [{ txt: 'No, it is easy', ico: '👌' }, { txt: 'Yes, it is hard', ico: '🪨' }, { txt: 'It is in the city', ico: '🏙️' }] },
            { q: 'Is the school close?', scene: '🏫📍🚶', ans: 'Yes, it is close', opts: [{ txt: 'Yes, it is close', ico: '📍' }, { txt: 'It is one hour', ico: '⏰' }, { txt: 'She is my mother', ico: '👩' }] },
            { q: 'What is short?', scene: '📏🪑', ans: 'The table is short', opts: [{ txt: 'The table is short', ico: '📏' }, { txt: 'It is one minute', ico: '⏱️' }, { txt: 'He is the student', ico: '🎓' }] },
            { q: 'Who is he?', scene: '🎓👦📘', ans: 'He is the student', opts: [{ txt: 'He is the student', ico: '🎓' }, { txt: 'It is a desk', ico: '🗄️' }, { txt: 'In the kitchen', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Hỏi Ai - Hỏi Gì',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ giấu một món đồ học tập (như quyển sách) trong túi vải, con sờ rồi hỏi <i>"What is this?"</i>. Bố/mẹ trả lời, rồi đổi vai.',
              '<b>Bước 2:</b> Bố/mẹ cầm ảnh người thân hoặc ảnh thầy cô, con hỏi <i>"Who is she?"</i> hoặc <i>"Who is he?"</i>, bố/mẹ đáp <i>"She is my mother."</i>',
              '<b>Bước 3:</b> Chơi nhanh 5 lượt: lượt hỏi vật dùng What, lượt hỏi người dùng Who. Ai nói đúng nhiều hơn thì thắng, cả nhà cùng vỗ tay.'
            ]
          }
        }
      ]
    },
    '1.7': {
      lessons: [
        {
          id: '1.7A', name: 'Bài 1.7A: Đồ chơi và trò chơi yêu thích',
          grammar: {
            formulas: ['👦 I + 👀 see + 📱 a phone', '👨 He + ⚡ has + 🥚 an egg', '👧 I + 👀 see + 🧸 some toys'],
            tip: 'Một món thì dùng a • từ bắt đầu bằng âm a, e, i, o, u thì dùng an • nhiều món thì dùng some!'
          },
          chunks: [
            { scene: '👧👀😊', full: 'I see a girl', parts: [{t:'I',ico:'👦',c:'s'}, {t:'see',ico:'👀',c:'v'}, {t:'a girl',ico:'👧',c:'o'}], traceWord: 'girl' },
            { scene: '👦😊🌟', full: 'He is a boy', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a boy',ico:'👦',c:'o'}], traceWord: 'boy' },
            { scene: '👧📱😊', full: 'She has a phone', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a phone',ico:'📱',c:'o'}], traceWord: 'phone' },
            { scene: '👨👷🏗️', full: 'My father is a worker', parts: [{t:'My father',ico:'👨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a worker',ico:'👷',c:'o'}], traceWord: 'worker' },
            { scene: '👩🧑‍🏫📚', full: 'My wife is a teacher', parts: [{t:'My wife',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a teacher',ico:'🧑‍🏫',c:'o'}], traceWord: 'wife' },
            { scene: '👦👀🪑', full: 'I see an old table', parts: [{t:'I',ico:'👦',c:'s'}, {t:'see',ico:'👀',c:'v'}, {t:'an old table',ico:'🪑',c:'o'}], traceWord: 'table' },
            { scene: '👦🚉😊', full: 'My son is at the station', parts: [{t:'My son',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'at the station',ico:'🚉',c:'o'}], traceWord: 'station' },
            { scene: '👦👦🛣️', full: 'Some boys are in the street', parts: [{t:'Some boys',ico:'👦👦',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'in the street',ico:'🛣️',c:'o'}], traceWord: 'street' }
          ],
          qaList: [
            { q: 'What do you see?', scene: '👦👀🪟', ans: 'I see a window', opts: [{ txt: 'I see a window', ico: '🪟' }, { txt: 'I am at home', ico: '🏠' }, { txt: 'He is a boy', ico: '👦' }] },
            { q: 'Where is she?', scene: '👧🏦💰', ans: 'She is at the bank', opts: [{ txt: 'She is at the bank', ico: '🏦' }, { txt: 'I see a girl', ico: '👧' }, { txt: 'It is a table', ico: '🪑' }] },
            { q: 'When do you go home?', scene: '🏠⏩👦', ans: 'I go home tomorrow', opts: [{ txt: 'I go home tomorrow', ico: '⏩' }, { txt: 'He is a teacher', ico: '🧑‍🏫' }, { txt: 'It is a phone', ico: '📱' }] },
            { q: 'Is it morning now?', scene: '🌆🌙😊', ans: 'No, it is evening', opts: [{ txt: 'No, it is evening', ico: '🌆' }, { txt: 'She has a phone', ico: '📱' }, { txt: 'I see some boys', ico: '👦' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Tìm Đồ Vật Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ chọn vài món đồ trong nhà (điện thoại, cái bàn, quả trứng...) và hỏi con: <i>"What do you see?"</i>.',
              '<b>Bước 2:</b> Con chỉ vào đồ vật và nói <i>"I see a phone"</i>, <i>"I see an egg"</i>. Nếu có nhiều món thì nói <i>"I see some books"</i>.',
              '<b>Bước 3:</b> Đổi vai: con hỏi, bố/mẹ trả lời. Ai nói đúng a / an / some thì được một điểm.'
            ]
          }
        },
        {
          id: '1.7B', name: 'Bài 1.7B: Đồ vật quanh bé và màu sắc',
          grammar: {
            formulas: ['👔 boss + es → 👔👔 bosses', '📦 box + es → 📦📦 boxes', '👧 Two bosses + ⚡ are + 😊 busy'],
            tip: 'Từ tận cùng bằng s, x, ch, sh thì thêm es: box → boxes, bus → buses, dish → dishes, boss → bosses!'
          },
          chunks: [
            { scene: '👨‍👦⏳💼', full: 'My brother is busy', parts: [{t:'My brother',ico:'👨‍👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'busy',ico:'⏳',c:'o'}], traceWord: 'busy' },
            { scene: '👨🚗🛣️', full: 'My husband is a driver', parts: [{t:'My husband',ico:'👨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a driver',ico:'🚗',c:'o'}], traceWord: 'driver' },
            { scene: '👧🙇💔', full: 'My daughter is sorry', parts: [{t:'My daughter',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'sorry',ico:'🙇',c:'o'}], traceWord: 'sorry' },
            { scene: '👦🪑🪑', full: 'I have two chairs', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'two chairs',ico:'2️⃣🪑',c:'o'}], traceWord: 'chairs' },
            { scene: '🏨💸😮', full: 'The hotel is expensive', parts: [{t:'The hotel',ico:'🏨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'expensive',ico:'💸',c:'o'}], traceWord: 'expensive' },
            { scene: '👔👔🍴', full: 'Two bosses are at the restaurant', parts: [{t:'Two bosses',ico:'👔👔',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'at the restaurant',ico:'🍴',c:'o'}], traceWord: 'bosses' },
            { scene: '👦🍵🌤️', full: 'I drink tea in the afternoon', parts: [{t:'I',ico:'👦',c:'s'}, {t:'drink',ico:'🥤',c:'v'}, {t:'tea in the afternoon',ico:'🍵🌤️',c:'o'}], traceWord: 'afternoon' },
            { scene: '👔👔☕😊', full: 'The bosses want some coffee', parts: [{t:'The bosses',ico:'👔👔',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'some coffee',ico:'☕',c:'o'}], traceWord: 'coffee' }
          ],
          qaList: [
            { q: 'What do you eat?', scene: '👦🥩😋', ans: 'I eat some meat', opts: [{ txt: 'I eat some meat', ico: '🥩' }, { txt: 'I am sorry', ico: '🙇' }, { txt: 'It is a chair', ico: '🪑' }] },
            { q: 'Do you like vegetables?', scene: '👧🥦😊', ans: 'Yes, I like vegetables', opts: [{ txt: 'Yes, I like vegetables', ico: '🥦' }, { txt: 'It is a big hotel', ico: '🏨' }, { txt: 'Two bosses are here', ico: '👔' }] },
            { q: 'What do you write?', scene: '💻📧✍️', ans: 'I write an email', opts: [{ txt: 'I write an email', ico: '📧' }, { txt: 'She is a driver', ico: '🚗' }, { txt: 'He is my brother', ico: '👨‍👦' }] },
            { q: 'Who is busy?', scene: '👔👔⏳', ans: 'The bosses are busy', opts: [{ txt: 'The bosses are busy', ico: '⏳' }, { txt: 'I drink tea', ico: '🍵' }, { txt: 'It is a chair', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đếm Đồ Vật Số Nhiều',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ chuẩn bị một vài đồ vật có sẵn (ghế, đĩa, hộp...) và đặt từng nhóm 1 món, 2 món lên bàn.',
              '<b>Bước 2:</b> Bố/mẹ hỏi <i>"What do you see?"</i>. Con trả lời <i>"I see a box"</i> khi có 1 món, và <i>"I see two boxes"</i> khi có 2 món.',
              '<b>Bước 3:</b> Con gom đồ vật thành nhóm mới cho bố/mẹ đoán số nhiều. Nói đúng đuôi -es (boxes, dishes) thì được một điểm.'
            ]
          }
        },
        {
          id: '1.7C', name: 'Bài 1.7C: Đồ dùng cá nhân và bạn thân',
          grammar: {
            formulas: ['👦 This + ⚡ is + 🍞 my bread', '👧 Her + 🏠 house + ⚡ has + 5️⃣ five rooms', '👨 His + 👧 sister + ⚡ is + 8️⃣ eight'],
            tip: 'my là của tôi • your là của bạn • his là của anh ấy • her là của cô ấy — đứng trước đồ vật hay người!'
          },
          chunks: [
            { scene: '🍞😋👦', full: 'This is my bread', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my bread',ico:'🍞',c:'o'}], traceWord: 'bread' },
            { scene: '👨‍👩‍👧‍👦4️⃣🏠', full: 'My family has four people', parts: [{t:'My family',ico:'👨‍👩‍👧‍👦',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'four people',ico:'4️⃣👥',c:'o'}], traceWord: 'four' },
            { scene: '👧🏠5️⃣', full: 'Her house has five rooms', parts: [{t:'Her house',ico:'🏠',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'five rooms',ico:'5️⃣🚪',c:'o'}], traceWord: 'five' },
            { scene: '👧🎂8️⃣', full: 'His sister is eight', parts: [{t:'His sister',ico:'👧',c:'s'}, {t:'is',ico:'🎂',c:'v'}, {t:'eight',ico:'8️⃣',c:'o'}], traceWord: 'eight' },
            { scene: '👦🎂🔢', full: 'Her brother is eleven', parts: [{t:'Her brother',ico:'👦',c:'s'}, {t:'is',ico:'🎂',c:'v'}, {t:'eleven',ico:'🔢',c:'o'}], traceWord: 'eleven' },
            { scene: '👩🎂🔢', full: 'Your mother is thirty', parts: [{t:'Your mother',ico:'👩',c:'s'}, {t:'is',ico:'🎂',c:'v'}, {t:'thirty',ico:'🔢',c:'o'}], traceWord: 'thirty' },
            { scene: '🏫🗓️📚', full: 'My school starts in August', parts: [{t:'My school',ico:'🏫',c:'s'}, {t:'starts',ico:'▶️',c:'v'}, {t:'in August',ico:'🗓️',c:'o'}], traceWord: 'august' },
            { scene: '💼🗓️👩', full: 'Her work starts in October', parts: [{t:'Her work',ico:'💼',c:'s'}, {t:'starts',ico:'▶️',c:'v'}, {t:'in October',ico:'🗓️',c:'o'}], traceWord: 'october' }
          ],
          qaList: [
            { q: 'Hello, whose book is this?', scene: '👋📕👦', ans: 'It is my book', opts: [{ txt: 'It is my book', ico: '📕' }, { txt: 'I am at school', ico: '🏫' }, { txt: 'She is happy', ico: '😄' }] },
            { q: 'How old is your son?', scene: '👦🎂9️⃣', ans: 'My son is nine', opts: [{ txt: 'My son is nine', ico: '9️⃣' }, { txt: 'It starts in July', ico: '🗓️' }, { txt: 'My house has three rooms', ico: '3️⃣' }] },
            { q: 'How old is his sister?', scene: '👧🎂🕛', ans: 'His sister is twelve', opts: [{ txt: 'His sister is twelve', ico: '🕛' }, { txt: 'Her school starts in February', ico: '🗓️' }, { txt: 'I have twenty books', ico: '🔢' }] },
            { q: 'When does school start?', scene: '🏫🗓️▶️', ans: 'It starts in March', opts: [{ txt: 'It starts in March', ico: '🗓️' }, { txt: 'It is my bread', ico: '🍞' }, { txt: 'He is my friend', ico: '👦' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đồ Của Ai?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ và con đặt vài món đồ dùng cá nhân (sách, cốc, dép...) lên bàn. Bố/mẹ cầm một món và hỏi: <i>"Whose book is this?"</i>.',
              '<b>Bước 2:</b> Con trả lời <i>"It is my book"</i> nếu là của con, <i>"It is your book"</i> nếu là của bố/mẹ, <i>"It is her book"</i> hay <i>"It is his book"</i> cho người khác.',
              '<b>Bước 3:</b> Bố/mẹ đố con đếm đồ vật từ 3 đến 12 bằng tiếng Anh, sau đó cùng nói tên các tháng trong năm.'
            ]
          }
        }
      ]
    },
    '1.8': {
      lessons: [
        {
          id: '1.8A', name: 'Bài 1.8A: Cây cối, hoa lá ngoài vườn',
          grammar: {
            formulas: ['👉 There + ⚡ is + 🧑‍💼 a boss', '👉 There + ⚡ are + 💯📚 a hundred books'],
            tip: 'Có 1 thứ thì dùng "There is", có nhiều thứ thì dùng "There are"!'
          },
          chunks: [
            { scene: '🧑‍💼👉🏢', full: 'There is a boss here', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a boss here',ico:'🧑‍💼',c:'o'}], traceWord: 'boss' },
            { scene: '👔📋🏢', full: 'There is a manager here', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a manager here',ico:'👔',c:'o'}], traceWord: 'manager' },
            { scene: '🏢🌳🏙️', full: 'There is a big company', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a big company',ico:'🏢',c:'o'}], traceWord: 'company' },
            { scene: '🏘️🌳🌸', full: 'There is a village here', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a village here',ico:'🏘️',c:'o'}], traceWord: 'village' },
            { scene: '💲🥤🍺', full: 'There is cheap beer', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'cheap beer',ico:'💲🍺',c:'o'}], traceWord: 'cheap' },
            { scene: '🏫📅👦', full: 'There is school on Wednesday', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'school on Wednesday',ico:'🏫📅',c:'o'}], traceWord: 'wednesday' },
            { scene: '🏪🛒📅', full: 'There are markets on Thursday', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'markets on Thursday',ico:'🏪📅',c:'o'}], traceWord: 'thursday' },
            { scene: '📚💯📖', full: 'There are a hundred books', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'a hundred books',ico:'💯📚',c:'o'}], traceWord: 'hundred' }
          ],
          qaList: [
            { q: 'Which month is hot?', scene: '☀️🗓️🔥', ans: 'June is hot', opts: [{ txt: 'June is hot', ico: '☀️' }, { txt: 'December is hot', ico: '🎄' }, { txt: 'January is hot', ico: '🗓️' }] },
            { q: 'Is April before June?', scene: '🌸🗓️☀️', ans: 'Yes, it is', opts: [{ txt: 'Yes, it is', ico: '✅' }, { txt: 'No, it is not', ico: '❌' }, { txt: 'It is a book', ico: '📖' }] },
            { q: 'Is November before April?', scene: '🍂🗓️🌸', ans: 'No, it is not', opts: [{ txt: 'No, it is not', ico: '❌' }, { txt: 'Yes, it is', ico: '✅' }, { txt: 'I am a boss', ico: '🧑‍💼' }] },
            { q: 'Is there a market on Saturday?', scene: '🏪📅🛒', ans: 'Yes, there is', opts: [{ txt: 'Yes, there is', ico: '✅' }, { txt: 'No, there is not', ico: '❌' }, { txt: 'It is a beer', ico: '🍺' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Đếm đồ trong nhà',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ chọn một món đồ chỉ có 1 cái (ví dụ cuốn sách, cái bàn). Chỉ vào nó và nói <i>"There is a book here."</i> rồi mời con nhắc lại.',
              '<b>Bước 2:</b> Gom nhiều đồ giống nhau (ví dụ 5 cái bút) và nói <i>"There are five pens."</i> Con tự đếm và nói lại câu có "There are".',
              '<b>Bước 3:</b> Bố/mẹ giấu bớt đồ vật, con đoán và nói <i>"There is..."</i> hoặc <i>"There are..."</i>. Đúng thì được một ngôi sao!'
            ]
          }
        },
        {
          id: '1.8B', name: 'Bài 1.8B: Công viên và khu vui chơi',
          grammar: {
            formulas: ['❓ How many + 👥 people', '👉 There + ⚡ are + 🔢 ten + 📚 books'],
            tip: 'Hỏi "How many" thì dùng "There are" + số đếm để trả lời nhé!'
          },
          chunks: [
            { scene: '0️⃣👥🚫', full: 'There are zero people', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'zero people',ico:'0️⃣👥',c:'o'}], traceWord: 'zero' },
            { scene: '👦👦👉', full: 'There are two other boys', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'two other boys',ico:'2️⃣👦',c:'o'}], traceWord: 'other' },
            { scene: '👥🛫🇻🇳', full: 'There are people from Vietnam', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'people from Vietnam',ico:'👥🇻🇳',c:'o'}], traceWord: 'from' },
            { scene: '👥➕🚪', full: 'There are more people out', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'more people out',ico:'➕👥',c:'o'}], traceWord: 'more' },
            { scene: '🔢📚📖', full: 'There are about twenty books', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'about twenty books',ico:'🔢📚',c:'o'}], traceWord: 'about' },
            { scene: '🐟🌊🔢', full: 'There are a thousand fish', parts: [{t:'There',ico:'👉',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'a thousand fish',ico:'🔢🐟',c:'o'}], traceWord: 'thousand' },
            { scene: '🧠🔟👦', full: 'I know there are ten', parts: [{t:'I',ico:'👦',c:'s'}, {t:'know',ico:'🧠',c:'v'}, {t:'there are ten',ico:'🔟',c:'o'}], traceWord: 'know' },
            { scene: '💭3️⃣0️⃣👧', full: 'I think there are thirty', parts: [{t:'I',ico:'👧',c:'s'}, {t:'think',ico:'💭',c:'v'}, {t:'there are thirty',ico:'3️⃣0️⃣',c:'o'}], traceWord: 'think' }
          ],
          qaList: [
            { q: 'How many of us are there?', scene: '👥🔟❓', ans: 'There are ten of us', opts: [{ txt: 'There are ten of us', ico: '🔟' }, { txt: 'I work as a doctor', ico: '👨‍⚕️' }, { txt: 'It is hot', ico: '🔥' }] },
            { q: 'Are they all here?', scene: '👥🌐🏠', ans: 'Yes, they are all here', opts: [{ txt: 'Yes, they are all here', ico: '✅' }, { txt: 'He is a boss', ico: '🧑‍💼' }, { txt: 'I want rice', ico: '🍚' }] },
            { q: 'Why do we go home?', scene: '❄️🏠👨‍👩‍👧', ans: 'It is cold, so we go', opts: [{ txt: 'It is cold, so we go', ico: '❄️' }, { txt: 'Ten books', ico: '📚' }, { txt: 'I am a boss', ico: '🧑‍💼' }] },
            { q: 'What if it is hot?', scene: '☀️🥵💧', ans: 'Hot, but we go out', opts: [{ txt: 'Hot, but we go out', ico: '🚪' }, { txt: 'Ten books', ico: '📚' }, { txt: 'A cold book', ico: '📖' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Bao nhiêu nhỉ?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày ra một nhóm đồ chơi (hoặc hạt đậu, bút màu). Hỏi con <i>"How many?"</i> rồi cùng con đếm to bằng tiếng Anh.',
              '<b>Bước 2:</b> Con trả lời cả câu: <i>"There are ten."</i> Bố/mẹ thử đổi số lượng và hỏi lại vài lần, lúc có lúc không có thì nói <i>"zero"</i>.',
              '<b>Bước 3:</b> Đổi vai: con làm người hỏi <i>"How many?"</i>, bố/mẹ trả lời, thỉnh thoảng trả lời sai để con sửa lại cho đúng.'
            ]
          }
        },
        {
          id: '1.8C', name: 'Bài 1.8C: Đi chơi và những điều bé muốn',
          grammar: {
            formulas: ['👦 I + ⚡ want + 🍚 rice', '❓ Do + 👧 you + ⚡ want + 🥛 any milk'],
            tip: 'Sau "want" nói thứ con muốn; He/She thì thêm s: wants!'
          },
          chunks: [
            { scene: '👦☝️1️⃣', full: 'I want only one', parts: [{t:'I',ico:'👦',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'only one',ico:'1️⃣',c:'o'}], traceWord: 'only' },
            { scene: '👧📦🙏', full: 'I want this thing', parts: [{t:'I',ico:'👧',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'this thing',ico:'📦',c:'o'}], traceWord: 'thing' },
            { scene: '👩🥛❔', full: 'Do you want any milk', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👩',c:'s'}, {t:'want any milk',ico:'🥛',c:'o'}], traceWord: 'any' },
            { scene: '👦🍚➕', full: 'I also want rice', parts: [{t:'I',ico:'👦',c:'s'}, {t:'also want',ico:'➕',c:'v'}, {t:'rice',ico:'🍚',c:'o'}], traceWord: 'also' },
            { scene: '👧💰🔙', full: 'I want my money back', parts: [{t:'I',ico:'👧',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'my money back',ico:'💰🔙',c:'o'}], traceWord: 'back' },
            { scene: '👩🍵⏱️', full: 'She just wants tea', parts: [{t:'She',ico:'👩',c:'s'}, {t:'just wants',ico:'⏱️',c:'v'}, {t:'tea',ico:'🍵',c:'o'}], traceWord: 'just' },
            { scene: '👦🍽️🏫', full: 'Most boys want food after school', parts: [{t:'Most boys',ico:'📈👦',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'food after school',ico:'🍽️🏫',c:'o'}], traceWord: 'after' },
            { scene: '👧📖🔍', full: 'I want to find my book', parts: [{t:'I',ico:'👧',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'to find my book',ico:'🔍📖',c:'o'}], traceWord: 'find' }
          ],
          qaList: [
            { q: 'What do you want then?', scene: '👦🥛➡️', ans: 'I want milk', opts: [{ txt: 'I want milk', ico: '🥛' }, { txt: 'Go over there', ico: '🌉' }, { txt: 'Ten books', ico: '📚' }] },
            { q: 'How are you?', scene: '😊👦👋', ans: 'I am well', opts: [{ txt: 'I am well', ico: '😊' }, { txt: 'Ten books', ico: '📚' }, { txt: 'I want rice', ico: '🍚' }] },
            { q: 'Where do you want to go?', scene: '👧🚶🏠', ans: 'Go into the house', opts: [{ txt: 'Go into the house', ico: '🚪🏠' }, { txt: 'Ten books', ico: '📚' }, { txt: 'A cold tea', ico: '🍵' }] },
            { q: 'Could I use your phone?', scene: '👦📱🙏', ans: 'Yes, you can', opts: [{ txt: 'Yes, you can', ico: '✅' }, { txt: 'I am well', ico: '😊' }, { txt: 'Ten books', ico: '📚' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Cửa hàng ước muốn',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ bày vài món đồ trên bàn (hộp sữa, quyển sách, đồ chơi) làm "cửa hàng". Bố/mẹ làm người bán, hỏi con <i>"What do you want?"</i>',
              '<b>Bước 2:</b> Con chọn một món và nói <i>"I want milk."</i> Bố/mẹ hỏi thêm <i>"Do you want any rice?"</i> để con trả lời "Yes" hoặc "No".',
              '<b>Bước 3:</b> Đổi vai: con làm người bán, bố/mẹ làm khách và nói <i>"I want a book."</i> Con đưa đúng món đồ cho bố/mẹ.'
            ]
          }
        }
      ]
    },
    '1.9': {
      lessons: [
        {
          id: '1.9A', name: 'Bài 1.9A: Bữa tiệc, sinh nhật và lễ hội',
          grammar: {
            formulas: ['❓ Do + 👦 you + 🍔 like fish?', '✅ Yes, + 👦 I + ⚡ do', '❌ No, + 👦 I + ⚡ do not'],
            tip: 'Hỏi với "you" thì mở đầu bằng "Do" và trả lời gọn: Yes, I do hoặc No, I do not!'
          },
          chunks: [
            { scene: '👦🎉😄', full: 'Do you feel happy', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'feel happy',ico:'😄',c:'o'}], traceWord: 'feel' },
            { scene: '👧🐟✨', full: 'Do you really like fish', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'really like fish',ico:'🐟',c:'o'}], traceWord: 'really' },
            { scene: '👦👧👥🎈', full: 'Do you have many friends', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'have many friends',ico:'👥',c:'o'}], traceWord: 'many' },
            { scene: '👨‍👩‍👧🌱💛', full: 'Do you love your life', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'love your life',ico:'🌱',c:'o'}], traceWord: 'life' },
            { scene: '🏠📍😊', full: 'Do you like this place', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'like this place',ico:'📍',c:'o'}], traceWord: 'place' },
            { scene: '👧📞📱', full: 'Do you want a call', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'want a call',ico:'📞',c:'o'}], traceWord: 'call' },
            { scene: '👦⏪🍞🏫', full: 'Do you eat before school', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'eat before school',ico:'⏪',c:'o'}], traceWord: 'before' },
            { scene: '👧🚪➡️', full: 'Do you go through the door', parts: [{t:'Do',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'go through the door',ico:'🚪',c:'o'}], traceWord: 'through' }
          ],
          qaList: [
            { q: 'Do you mean this book?', scene: '👦📖💭', ans: 'Yes, I do', opts: [{ txt: 'Yes, I do', ico: '✅' }, { txt: 'It is too hot', ico: '🥵' }, { txt: 'Go down', ico: '⬇️' }] },
            { q: 'Do you tell your mother?', scene: '👧🗣️👩', ans: 'Yes, I tell her', opts: [{ txt: 'Yes, I tell her', ico: '🗣️' }, { txt: 'I live between two shops', ico: '↔️' }, { txt: 'Two cold eggs', ico: '🥚' }] },
            { q: 'Do you want a change?', scene: '👦🔄🤔', ans: 'No, I do not', opts: [{ txt: 'No, I do not', ico: '❌' }, { txt: 'Keep still', ico: '🧘' }, { txt: 'At the market', ico: '🛒' }] },
            { q: 'Do you have a problem?', scene: '👧⚠️😟', ans: 'No, I do not', opts: [{ txt: 'No, I do not', ico: '❌' }, { txt: 'Two big chairs', ico: '🪑' }, { txt: 'In the kitchen', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Hỏi Đáp Bữa Tiệc Gia Đình',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ cầm đồ ăn hoặc đồ chơi có sẵn trong nhà và hỏi con: <i>"Do you like fish?"</i>.',
              '<b>Bước 2:</b> Con gật đầu nói <i>"Yes, I do"</i> hoặc lắc đầu nói <i>"No, I do not"</i>.',
              '<b>Bước 3:</b> Đổi vai: con làm "chủ tiệc", hỏi bố/mẹ 4 câu <i>"Do you ...?"</i> rồi cả nhà cùng vỗ tay.'
            ]
          }
        },
        {
          id: '1.9B', name: 'Bài 1.9B: Sở thích và thói quen ngày vui',
          grammar: {
            formulas: ['👦 I / We + 🚫 do not (don\'t) + 🍔 eat fish', '👧 She / 👦 He + 🚫 does not (doesn\'t) + 🍔 eat fish'],
            tip: 'I, we, you dùng "do not"; she, he dùng "does not" và động từ phía sau giữ nguyên, không thêm s!'
          },
          chunks: [
            { scene: '👦🍚🟰', full: 'I don\'t eat the same food', parts: [{t:'I',ico:'👦',c:'s'}, {t:'don\'t',ico:'🚫',c:'v'}, {t:'eat the same food',ico:'🟰',c:'o'}], traceWord: 'same' },
            { scene: '👦🍽️📚', full: 'He doesn\'t eat a lot', parts: [{t:'He',ico:'👦',c:'s'}, {t:'doesn\'t',ico:'🚫',c:'v'}, {t:'eat a lot',ico:'📚',c:'o'}], traceWord: 'lot' },
            { scene: '👧🎯🙅', full: 'She doesn\'t want a try', parts: [{t:'She',ico:'👧',c:'s'}, {t:'doesn\'t',ico:'🚫',c:'v'}, {t:'want a try',ico:'🎯',c:'o'}], traceWord: 'try' },
            { scene: '👦🔢🤔', full: 'I don\'t know the number', parts: [{t:'I',ico:'👦',c:'s'}, {t:'don\'t',ico:'🚫',c:'v'}, {t:'know the number',ico:'🔢',c:'o'}], traceWord: 'number' },
            { scene: '👨‍👩‍👧📖📖✌️', full: 'We don\'t like both books', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'don\'t',ico:'🚫',c:'v'}, {t:'like both books',ico:'✌️',c:'o'}], traceWord: 'both' },
            { scene: '👦🛏️🙋', full: 'He doesn\'t have his own room', parts: [{t:'He',ico:'👦',c:'s'}, {t:'doesn\'t',ico:'🚫',c:'v'}, {t:'have his own room',ico:'🙋',c:'o'}], traceWord: 'own' },
            { scene: '👧🤔📌', full: 'She doesn\'t see the point', parts: [{t:'She',ico:'👧',c:'s'}, {t:'doesn\'t',ico:'🚫',c:'v'}, {t:'see the point',ico:'📌',c:'o'}], traceWord: 'point' },
            { scene: '👦❓👥', full: 'I don\'t ask each friend', parts: [{t:'I',ico:'👦',c:'s'}, {t:'don\'t',ico:'🚫',c:'v'}, {t:'ask each friend',ico:'👆',c:'o'}], traceWord: 'ask' }
          ],
          qaList: [
            { q: 'Does Mai talk a lot?', scene: '👧💬🙅', ans: 'No, she does not', opts: [{ txt: 'No, she does not', ico: '❌' }, { txt: 'Two cold eggs', ico: '🥚' }, { txt: 'In the hospital', ico: '🏥' }] },
            { q: 'Do you meet Tom?', scene: '👦🤝🙅', ans: 'No, I do not', opts: [{ txt: 'No, I do not', ico: '❌' }, { txt: 'I become a doctor', ico: '🌱' }, { txt: 'Another hot day', ico: '🔁' }] },
            { q: 'Does he want something?', scene: '👦💭🙅', ans: 'No, he does not', opts: [{ txt: 'No, he does not', ico: '❌' }, { txt: 'A little milk', ico: '🥛' }, { txt: 'On the desk', ico: '🗄️' }] },
            { q: 'What does Tom not eat?', scene: '👦🚫🐟', ans: 'Tom doesn\'t eat fish', opts: [{ txt: 'Tom doesn\'t eat fish', ico: '🐟' }, { txt: 'In the school', ico: '🏫' }, { txt: 'Two new books', ico: '📚' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Ai Không Thích Gì?',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ và con ngồi cạnh nhau, mỗi người nghĩ về 3 món ăn hoặc đồ vật mình không thích.',
              '<b>Bước 2:</b> Bố/mẹ nói trước: <i>"I don\'t like fish"</i>, rồi chỉ sang mẹ/bố và nói <i>"She doesn\'t like milk"</i>.',
              '<b>Bước 3:</b> Con nói 3 câu với <i>"I don\'t ..."</i> và 2 câu với <i>"He/She doesn\'t ..."</i> về người thân; nói đúng thì được một cái ôm.'
            ]
          }
        },
        {
          id: '1.9C', name: 'Bài 1.9C: Lễ phép và nề nếp hằng ngày',
          grammar: {
            formulas: ['🙏 Please + ⚡ listen + 👂 again', '🚫 Don\'t + ⚡ stop + 📍 at the end'],
            tip: 'Thêm "please" để lời nhờ thật lịch sự, còn muốn bảo "đừng" thì mở đầu bằng "Don\'t" rồi nói động từ!'
          },
          chunks: [
            { scene: '👧👂🔁', full: 'Please listen again', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'listen',ico:'👂',c:'v'}, {t:'again',ico:'🔁',c:'o'}], traceWord: 'again' },
            { scene: '👦📖🗄️', full: 'Please keep this book', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'keep',ico:'🗄️',c:'v'}, {t:'this book',ico:'📖',c:'o'}], traceWord: 'keep' },
            { scene: '👧🔄🪑', full: 'Please come around the table', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'come',ico:'👋',c:'v'}, {t:'around the table',ico:'🔄',c:'o'}], traceWord: 'around' },
            { scene: '👩🏫❔', full: 'Please listen to the question', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'listen',ico:'👂',c:'v'}, {t:'to the question',ico:'❔',c:'o'}], traceWord: 'question' },
            { scene: '👦👧👥🤝', full: 'Please help every group', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'help',ico:'🤝',c:'v'}, {t:'every group',ico:'👥',c:'o'}], traceWord: 'every' },
            { scene: '🙏▶️📚', full: 'Please begin the course', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'begin',ico:'▶️',c:'v'}, {t:'the course',ico:'📚',c:'o'}], traceWord: 'begin' },
            { scene: '🚫✋🔚', full: 'Don\'t stop at the end', parts: [{t:'Don\'t',ico:'🚫',c:'s'}, {t:'stop',ico:'✋',c:'v'}, {t:'at the end',ico:'🔚',c:'o'}], traceWord: 'end' },
            { scene: '👧🍽️⚙️', full: 'Please set the table', parts: [{t:'Please',ico:'🙏',c:'s'}, {t:'set',ico:'⚙️',c:'v'}, {t:'the table',ico:'🪑',c:'o'}], traceWord: 'set' }
          ],
          qaList: [
            { q: 'Do you hear me?', scene: '👦👂🌍', ans: 'Yes, I do', opts: [{ txt: 'Yes, I do', ico: '✅' }, { txt: 'The world is big', ico: '🌍' }, { txt: 'Go down', ico: '⬇️' }] },
            { q: 'Is this important?', scene: '👧❗📁', ans: 'Yes, it is', opts: [{ txt: 'Yes, it is', ico: '✅' }, { txt: 'In the case', ico: '📁' }, { txt: 'On the table', ico: '🪑' }] },
            { q: 'What kind of food?', scene: '🍚🐟🔖', ans: 'Fish and rice', opts: [{ txt: 'Fish and rice', ico: '🐟🍚' }, { txt: 'Different people', ico: '🔀' }, { txt: 'A big school', ico: '🏫' }] },
            { q: 'What do you drink?', scene: '👦🥛😋', ans: 'I drink milk', opts: [{ txt: 'I drink milk', ico: '🥛' }, { txt: 'Go to school', ico: '🏫' }, { txt: 'Two big chairs', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Trò chơi Đời thực (10 phút): Thầy Bảo Ban Lễ Phép',
            steps: [
              '<b>Bước 1:</b> Bố/mẹ đưa ra lệnh lịch sự như <i>"Please sit"</i> hay <i>"Please listen"</i>; con làm đúng động tác thì được một điểm.',
              '<b>Bước 2:</b> Bố/mẹ nói lệnh cấm như <i>"Don\'t run"</i> hoặc <i>"Don\'t stop"</i>; con làm đúng lệnh (không chạy; với "Don\'t stop" thì tiếp tục làm, không dừng) và nhắc lại câu.',
              '<b>Bước 3:</b> Đổi vai: con làm "thầy giáo" ra 3 lệnh có <i>"Please"</i> và 2 lệnh có <i>"Don\'t"</i> cho bố/mẹ làm theo.'
            ]
          }
        }
      ]
    }
  }
};
