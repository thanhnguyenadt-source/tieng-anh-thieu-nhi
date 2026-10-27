/* GIAI ĐOẠN 4 — A2 Key (KET) cho học sinh
   Dữ liệu một giai đoạn. Nạp bằng <script src> (chạy được từ file://, không dùng fetch).
   Định dạng bài học: xem docs/GEMINI_LESSON_PROMPT.md; kiểm bằng: node tools/validate_lessons.js (và tools/coverage.js) */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[4] = {
  label: '🎓 GĐ 4: A2 Key',  // chữ hiện trên nút chọn giai đoạn
  modules: [
    { code: '4.1', title: 'Bạn Bè Và Tin Nhắn' },
    { code: '4.2', title: 'Đi Chợ Và Ăn Uống' },
    { code: '4.3', title: 'Phượt Cùng Gia Đình' },
    { code: '4.4', title: 'Học Tập Và Ước Mơ' },
    { code: '4.5', title: 'Bảo Vệ Hành Tinh' },
    { code: '4.6', title: 'Sức Khỏe Và Thói Quen' },
    { code: '4.7', title: 'Nhà Cửa Và Khu Phố' },
    { code: '4.8', title: 'Phim Ảnh Và Truyền Thông' },
    { code: '4.9', title: 'Thể Thao Và Trò Chơi' },
    { code: '4.10', title: 'Công Nghệ Và Internet' },
    { code: '4.11', title: 'Thời Trang Và Mua Sắm' },
    { code: '4.12', title: 'Lễ Hội Và Văn Hóa' },
    { code: '4.13', title: 'Du Lịch Khám Phá' },
    { code: '4.14', title: 'Việc Làm Và Kỹ Năng' },
    { code: '4.15', title: 'Động Vật Và Thiên Nhiên' },
    { code: '4.16', title: 'Thời Tiết Và Thiên Tai' },
    { code: '4.17', title: 'Khoa Học Và Phát Minh' },
    { code: '4.18', title: 'Tình Bạn Và Cảm Xúc' },
    { code: '4.19', title: 'Cộng Đồng Và Tình Nguyện' },
    { code: '4.20', title: 'Ôn Tổng Hợp KET' }
  ],
  data: {
    '4.1': {
      lessons: [
        {
          id: '4.1A', name: 'Bài 4.1A: Kể trải nghiệm đã có',
          grammar: {
            formulas: ['👦 I + ⚡ have never + 🏞️ crossed a wide river', '❓ Have + 🧑 you + ⭐ ever used a new method?', '👧 She / 👦 He + ⚡ has never + 🪙 lost a cent'],
            tip: 'Ever = đã từng (hỏi), never = chưa bao giờ (trả lời) • I / you / we / they đi với "have", He / She đi với "has"!'
          },
          chunks: [
            { scene: '🏞️🌊🚣', full: 'I have never crossed a wide river', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have never crossed',ico:'🚫',c:'v'}, {t:'a wide river',ico:'↔️',c:'o'}], traceWord: 'wide' },
            { scene: '🧑🧭💡', full: 'Have you ever used a new method', parts: [{t:'Have',ico:'⚡',c:'v'}, {t:'you',ico:'🧑',c:'s'}, {t:'ever used a new method',ico:'🧭',c:'o'}], traceWord: 'method' },
            { scene: '👦🪙😮', full: 'Tom has never lost a cent', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'has never lost',ico:'🚫',c:'v'}, {t:'a cent',ico:'🪙',c:'o'}], traceWord: 'cent' },
            { scene: '👧📦🎒', full: 'Mai has nearly finished packing her stuff', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has nearly finished',ico:'🤏',c:'v'}, {t:'packing her stuff',ico:'📦',c:'o'}], traceWord: 'nearly' },
            { scene: '👧🏔️🎉', full: 'Lan has achieved her first big challenge', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'has achieved',ico:'🎯',c:'v'}, {t:'her first big challenge',ico:'🏔️',c:'o'}], traceWord: 'challenge' },
            { scene: '👨🪖🏫', full: 'My uncle has never joined a military club', parts: [{t:'My uncle',ico:'👨',c:'s'}, {t:'has never joined',ico:'🚫',c:'v'}, {t:'a military club',ico:'🪖',c:'o'}], traceWord: 'military' },
            { scene: '👫💬🏳️', full: 'We have never had a long discussion about our nation', parts: [{t:'We',ico:'👫',c:'s'}, {t:'have never had',ico:'🚫',c:'v'}, {t:'a long discussion about our nation',ico:'💬',c:'o'}], traceWord: 'discussion' },
            { scene: '👩‍🏫📢❓', full: 'Has the teacher ever given a clear statement', parts: [{t:'Has',ico:'⚡',c:'v'}, {t:'the teacher',ico:'👩‍🏫',c:'s'}, {t:'ever given a clear statement',ico:'📢',c:'o'}], traceWord: 'statement' }
          ],
          qaList: [
            { q: 'Have you ever had an advantage in a game', scene: '🎮⭐😀', ans: 'Yes, I have had an advantage once', opts: [{ txt: 'Yes, I have had an advantage once', ico: '⭐' }, { txt: 'She is at the bus stop now', ico: '🚌' }, { txt: 'Tom likes green tea very much', ico: '🍵' }] },
            { q: 'Has your cousin ever talked about who she will marry', scene: '👩💍🤵', ans: 'Yes, she has talked about it many times', opts: [{ txt: 'Yes, she has talked about it many times', ico: '💍' }, { txt: 'My bag is under the small table', ico: '🎒' }, { txt: 'We play football on Sunday', ico: '⚽' }] },
            { q: 'Have you ever read about a strike in the news', scene: '📰✊🏙️', ans: 'Yes, I have read about one last year', opts: [{ txt: 'Yes, I have read about one last year', ico: '📰' }, { txt: 'I eat rice for lunch every day', ico: '🍚' }, { txt: 'The cat is asleep on the sofa', ico: '🐱' }] },
            { q: 'Have you ever had to seek help in a new place', scene: '🔍🙋🏫', ans: 'Yes, I have had to seek help at school', opts: [{ txt: 'Yes, I have had to seek help at school', ico: '🔍' }, { txt: 'The red kite is high in the sky', ico: '🪁' }, { txt: 'Mom has two apples and a pear', ico: '🍎' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bạn Đã Từng Chưa?',
            steps: [
              '<b>Bước 1:</b> Lấy 6 mảnh giấy nhỏ, viết mỗi mảnh một việc (ví dụ: ăn kem, đi máy bay, nuôi mèo, leo núi, đọc truyện, nấu ăn) rồi vẽ hình nhỏ bên cạnh.',
              '<b>Bước 2:</b> Bốc từng mảnh giấy và hỏi bạn (hoặc tự hỏi mình trước gương): <i>"Have you ever climbed a mountain?"</i>',
              '<b>Bước 3:</b> Trả lời bằng <i>"Yes, I have."</i> hoặc <i>"No, I have never done that."</i> rồi ghi dấu ✅ hoặc ❌ lên giấy; ai có nhiều ✅ hơn là người thắng.'
            ]
          }
        },
        {
          id: '4.1B', name: 'Bài 4.1B: Quen nhau bao lâu rồi',
          grammar: {
            formulas: ['👦 Tom + ⚡ has lived + 🏛️ here for two years', '👧 Mai + ⚡ has had + 📅 a phone since June', '❓ How long + ⚡ have + 👫 you known her?'],
            tip: 'For + khoảng thời gian (for two years), since + mốc thời gian (since June) • đều dùng với have / has + quá khứ phân từ!'
          },
          chunks: [
            { scene: '👦🏛️🏙️', full: 'Tom has lived in the capital since 2020', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'has lived',ico:'🏠',c:'v'}, {t:'in the capital since 2020',ico:'🏛️',c:'o'}], traceWord: 'capital' },
            { scene: '🌳🌟🌿', full: 'This popular park has had natural beauty for years', parts: [{t:'This popular park',ico:'🌟',c:'s'}, {t:'has had',ico:'⚡',c:'v'}, {t:'natural beauty for years',ico:'🌿',c:'o'}], traceWord: 'popular' },
            { scene: '👧😨😰', full: 'Mai has had fear and pressure since the big test', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has had',ico:'⚡',c:'v'}, {t:'fear and pressure since the big test',ico:'😨',c:'o'}], traceWord: 'fear' },
            { scene: '👦🚄🏢', full: 'He has used a modern express train since June', parts: [{t:'He',ico:'👦',c:'s'}, {t:'has used',ico:'⚡',c:'v'}, {t:'a modern express train since June',ico:'🚄',c:'o'}], traceWord: 'modern' },
            { scene: '👫📖🔢', full: 'We have studied this unit for three weeks', parts: [{t:'We',ico:'👫',c:'s'}, {t:'have studied',ico:'📖',c:'v'}, {t:'this unit for three weeks',ico:'🔢',c:'o'}], traceWord: 'unit' },
            { scene: '👫📚📍', full: 'We have had specific homework since Monday', parts: [{t:'We',ico:'👫',c:'s'}, {t:'have had',ico:'⚡',c:'v'}, {t:'specific homework since Monday',ico:'📍',c:'o'}], traceWord: 'specific' },
            { scene: '👦💪🎯', full: 'Nam has worked on his ability and his target since May', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'has worked',ico:'💪',c:'v'}, {t:'on his ability and his target since May',ico:'🎯',c:'o'}], traceWord: 'ability' },
            { scene: '👩🎓📜', full: 'My sister has had a degree for two years', parts: [{t:'My sister',ico:'👩',c:'s'}, {t:'has had',ico:'⚡',c:'v'}, {t:'a degree for two years',ico:'🎓',c:'o'}], traceWord: 'degree' }
          ],
          qaList: [
            { q: 'Have you played this game since its release', scene: '🎮🚀😀', ans: 'Yes, I have played it since the release', opts: [{ txt: 'Yes, I have played it since the release', ico: '🎮' }, { txt: 'The dog sleeps under the big chair', ico: '🐶' }, { txt: 'She drinks milk with her breakfast', ico: '🥛' }] },
            { q: 'Have you had a solution to the problem since Monday', scene: '💡🧩📅', ans: 'Yes, we have had a solution since Monday', opts: [{ txt: 'Yes, we have had a solution since Monday', ico: '💡' }, { txt: 'I wear a blue hat today', ico: '🧢' }, { txt: 'Dad drives to work by car', ico: '🚗' }] },
            { q: 'Has Tom had to pull this heavy box for an hour', scene: '👦🫸📦', ans: 'Yes, he has had to pull it for an hour', opts: [{ txt: 'Yes, he has had to pull it for an hour', ico: '🫸' }, { txt: 'My phone is on the table', ico: '📱' }, { txt: 'Lan sings a song at the party', ico: '🎤' }] },
            { q: 'Has this sign indicated the way since last year', scene: '🪧👉🛣️', ans: 'Yes, it has indicated the way for years', opts: [{ txt: 'Yes, it has indicated the way for years', ico: '👉' }, { txt: 'Birds fly over the green hill', ico: '🐦' }, { txt: 'The dog sleeps under the big chair', ico: '🐶' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Bạn Thân',
            steps: [
              '<b>Bước 1:</b> Chuẩn bị 4 câu hỏi trên giấy, ví dụ: <i>"How long have you lived here?"</i>, <i>"How long have you known me?"</i>, <i>"How long have you had your phone?"</i>.',
              '<b>Bước 2:</b> Phỏng vấn một người bạn hoặc người thân (hoặc tự quay video phỏng vấn); người trả lời dùng for hoặc since, ví dụ <i>"I have lived here for five years."</i> hoặc <i>"I have had it since June."</i>',
              '<b>Bước 3:</b> Viết lại 3 câu trả lời, gạch chân for hoặc since, rồi đọc to lại cho bạn nghe để cùng kiểm tra.'
            ]
          }
        },
        {
          id: '4.1C', name: 'Bài 4.1C: Viết email, tin nhắn cho bạn',
          grammar: {
            formulas: ['👧 Mai + ⚡ has already + 🗂️ organized her desk', '👦 I + ⚡ have just + 📝 finished my task', '❓ Have + 🧑 you + 💌 given her your promise yet?'],
            tip: 'Just = vừa mới, already = đã rồi (câu khẳng định), yet = chưa (câu phủ định, câu hỏi) • có "yesterday" hay "last week" thì dùng quá khứ đơn nhé!'
          },
          chunks: [
            { scene: '👦📝✅', full: 'I have just finished my first task', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have just finished',ico:'✅',c:'v'}, {t:'my first task',ico:'📝',c:'o'}], traceWord: 'task' },
            { scene: '👧🗂️🪑', full: 'Mai has already organized her desk', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has already organized',ico:'🗂️',c:'v'}, {t:'her desk',ico:'🪑',c:'o'}], traceWord: 'organized' },
            { scene: '🧑🤞💌', full: 'Have you given her your promise yet', parts: [{t:'Have',ico:'⚡',c:'v'}, {t:'you',ico:'🧑',c:'s'}, {t:'given her your promise yet',ico:'🤞',c:'o'}], traceWord: 'promise' },
            { scene: '👦🙅⚠️', full: 'Nam has just avoided some trouble at school', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'has just avoided',ico:'🙅',c:'v'}, {t:'some trouble at school',ico:'⚠️',c:'o'}], traceWord: 'trouble' },
            { scene: '👦🎨🙂', full: 'I have not changed my normal style yet', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have not changed',ico:'🚫',c:'v'}, {t:'my normal style yet',ico:'🎨',c:'o'}], traceWord: 'style' },
            { scene: '👦🏆💬', full: 'Tom has already talked about the competition', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'has already talked',ico:'💬',c:'v'}, {t:'about the competition',ico:'🏆',c:'o'}], traceWord: 'competition' },
            { scene: '👫🗣️😊', full: 'They have just stopped the argument', parts: [{t:'They',ico:'👫',c:'s'}, {t:'have just stopped',ico:'✋',c:'v'}, {t:'the argument',ico:'🗣️',c:'o'}], traceWord: 'argument' },
            { scene: '👩♟️🤔', full: 'Anna has just improved her strategy without any doubt', parts: [{t:'Anna',ico:'👩',c:'s'}, {t:'has just improved',ico:'📈',c:'v'}, {t:'her strategy without any doubt',ico:'♟️',c:'o'}], traceWord: 'strategy' }
          ],
          qaList: [
            { q: 'Has Nam already jumped into deep water', scene: '👦🌊🏊', ans: 'Yes, he has just jumped into deep water', opts: [{ txt: 'Yes, he has just jumped into deep water', ico: '🌊' }, { txt: 'The bus leaves at nine o\'clock', ico: '🚌' }, { txt: 'My mother cooks rice for dinner', ico: '🍚' }] },
            { q: 'Has Lan finished all her homework yet', scene: '👧📚✅', ans: 'Yes, she has finished everything except math', opts: [{ txt: 'Yes, she has finished everything except math', ico: '🚫' }, { txt: 'The moon is big and bright', ico: '🌙' }, { txt: 'I wear a blue hat today', ico: '🧢' }] },
            { q: 'Has Nam already walked beyond the school gate', scene: '👦🏫🌄', ans: 'Yes, he has just walked beyond the gate', opts: [{ txt: 'Yes, he has just walked beyond the gate', ico: '🌄' }, { txt: 'Lan sings a song at the party', ico: '🎤' }, { txt: 'Dad drives to work by car', ico: '🚗' }] },
            { q: 'Have you referred to your dictionary yet', scene: '📖👉🧑', ans: 'Yes, I have just referred to it', opts: [{ txt: 'Yes, I have just referred to it', ico: '👉' }, { txt: 'Birds fly over the green hill', ico: '🐦' }, { txt: 'She drinks milk with her breakfast', ico: '🥛' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Danh Sách Việc Cần Làm',
            steps: [
              '<b>Bước 1:</b> Viết 5 việc cần làm hôm nay (ví dụ: dọn bàn, làm bài tập, nhắn tin cho bạn, đọc sách, gọi cho bà) kèm một ô vuông trống bên cạnh mỗi việc.',
              '<b>Bước 2:</b> Làm xong việc nào thì đánh dấu ✅ và nói to: <i>"I have just finished my task."</i> Việc nào chưa làm thì nói: <i>"I have not done it yet."</i>',
              '<b>Bước 3:</b> Nhắn cho một người bạn 2 câu tiếng Anh, ví dụ <i>"I have already cleaned my desk."</i> và <i>"Have you finished your homework yet?"</i>, rồi chờ bạn trả lời.'
            ]
          }
        }
      ]
    },
    '4.2': {
      lessons: [
        {
          id: '4.2A', name: 'Bài 4.2A: Mua đồ, hỏi giá',
          grammar: {
            formulas: ['👨‍👩‍👧 We + 🛒 need + 🥚 a few eggs', '👦 I + 🤲 have + 💰 a little money', '🏪 The shop + ⚡ has + 🍚 plenty of food'],
            tip: 'a few + danh từ đếm được (eggs) • a little + danh từ không đếm được (oil) • enough = đủ • plenty of = rất nhiều, dùng cho cả hai!'
          },
          chunks: [
            { scene: '🥚🛢️🛒', full: 'We need a few eggs and a little oil', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'need',ico:'🛒',c:'v'}, {t:'a few eggs and a little oil',ico:'🥚🛢️',c:'o'}], traceWord: 'oil' },
            { scene: '🧑🧾💵', full: 'The adult pays the bill at the market', parts: [{t:'The adult',ico:'🧑',c:'s'}, {t:'pays',ico:'💵',c:'v'}, {t:'the bill at the market',ico:'🧾',c:'o'}], traceWord: 'bill' },
            { scene: '👦💰🛍️', full: 'I have a little money but I will buy it anyway', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'a little money but I will buy it anyway',ico:'🤷',c:'o'}], traceWord: 'anyway' },
            { scene: '🏪🍚🥬', full: 'The shop has plenty of basic food', parts: [{t:'The shop',ico:'🏪',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'plenty of basic food',ico:'🔰🍚',c:'o'}], traceWord: 'basic' },
            { scene: '👜🍎🍌', full: 'A useful bag has enough room for fruit', parts: [{t:'A useful bag',ico:'🛠️👜',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'enough room for fruit',ico:'🍎',c:'o'}], traceWord: 'useful' },
            { scene: '✍️📚💵', full: 'The author earns a little money from her books', parts: [{t:'The author',ico:'✍️',c:'s'}, {t:'earns',ico:'💵',c:'v'}, {t:'a little money from her books',ico:'📚',c:'o'}], traceWord: 'author' },
            { scene: '👧🔍📚', full: 'Mai does a search for a few cheap books', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'does',ico:'⚡',c:'v'}, {t:'a search for a few cheap books',ico:'🔍📚',c:'o'}], traceWord: 'search' },
            { scene: '🧑‍🤝‍🧑🧾↔️', full: 'We want a separate bill for each friend', parts: [{t:'We',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'want',ico:'🙏',c:'v'}, {t:'a separate bill for each friend',ico:'↔️🧾',c:'o'}], traceWord: 'separate' }
          ],
          qaList: [
            { q: 'Who can operate the machine?', scene: '⚙️👔🏭', ans: 'A professional can operate it', opts: [{ txt: 'A professional can operate it', ico: '👔' }, { txt: 'A baby can drive a bus', ico: '👶' }, { txt: 'A cat can read a menu', ico: '🐱' }] },
            { q: 'What can a mirror do?', scene: '🪞💡', ans: 'It can reflect light', opts: [{ txt: 'It can reflect light', ico: '🪞' }, { txt: 'It can eat rice', ico: '🍚' }, { txt: 'It can drive a bus', ico: '🚌' }] },
            { q: 'Who will perform on stage?', scene: '🎭🎤👨', ans: 'A male singer will perform', opts: [{ txt: 'A male singer will perform', ico: '👨' }, { txt: 'The oil will sing a song', ico: '🛢️' }, { txt: 'A table will read a book', ico: '📖' }] },
            { q: 'How do you encourage a friend?', scene: '🧑‍🤝‍🧑💪', ans: 'I say you can do it', opts: [{ txt: 'I say you can do it', ico: '💪' }, { txt: 'I drink my tea and sleep', ico: '😴' }, { txt: 'I sit in a box', ico: '📦' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đi Chợ Giả Lập Cùng Bạn',
            steps: [
              '<b>Bước 1:</b> Lấy 6–8 món đồ trong nhà (trứng giả, chai dầu, trái cây...), dán giá bằng giấy nhớ và chia vai: một bạn bán, một bạn mua.',
              '<b>Bước 2:</b> Người mua nói <i>"We need a few eggs and a little oil."</i> rồi hỏi giá; người bán trả lời giá và đưa hóa đơn bằng giấy.',
              '<b>Bước 3:</b> Đổi vai. Người mua tự nói <i>"I have enough money."</i> hoặc <i>"The shop has plenty of food."</i> rồi tính tiền bằng tiền giấy tự làm.'
            ]
          }
        },
        {
          id: '4.2B', name: 'Bài 4.2B: Tả món đồ, món ăn',
          grammar: {
            formulas: ['👩 the girl + 🙋 who + ⚡ works here', '🍲 the soup + 🔗 which / that + 🔥 is hot', '📱 the phone + 🔗 that + 🔋 is dead'],
            tip: 'who nói về NGƯỜI • which nói về ĐỒ VẬT, món ăn • that dùng được cho cả hai, đứng ngay sau danh từ cần tả!'
          },
          chunks: [
            { scene: '🥣🔵📅', full: 'The bowl that I use daily is blue', parts: [{t:'The bowl that I use daily',ico:'🥣',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'blue',ico:'🔵',c:'o'}], traceWord: 'daily' },
            { scene: '👦🍲🔥', full: 'I prefer the soup which is hot', parts: [{t:'I',ico:'👦',c:'s'}, {t:'prefer',ico:'👍',c:'v'}, {t:'the soup which is hot',ico:'🍲',c:'o'}], traceWord: 'prefer' },
            { scene: '👩🏢💼', full: 'She is the girl who works at the agency', parts: [{t:'She',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the girl who works at the agency',ico:'🏢',c:'o'}], traceWord: 'agency' },
            { scene: '📱🖥️🔋', full: 'The phone that has a dead screen is old', parts: [{t:'The phone that has a dead screen',ico:'📱🖥️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'old',ico:'🔋',c:'o'}], traceWord: 'dead' },
            { scene: '👦🍚👌', full: 'Tom is the boy who can easily cook rice', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the boy who can easily cook rice',ico:'👌🍚',c:'o'}], traceWord: 'easily' },
            { scene: '👩‍🏫🎓🏫', full: 'The woman who teaches at the university is my aunt', parts: [{t:'The woman who teaches at the university',ico:'👩‍🏫🎓',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my aunt',ico:'👪',c:'o'}], traceWord: 'university' },
            { scene: '👦💳👜', full: 'I pay with the credit card that is in my bag', parts: [{t:'I',ico:'👦',c:'s'}, {t:'pay',ico:'💵',c:'v'}, {t:'with the credit card that is in my bag',ico:'💳👜',c:'o'}], traceWord: 'credit' },
            { scene: '🔭🪨🎵', full: 'We discover a rock track which is original', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'discover',ico:'🔭',c:'v'}, {t:'a rock track which is original',ico:'🪨🎵🖼️',c:'o'}], traceWord: 'track' }
          ],
          qaList: [
            { q: 'Who joins the debate?', scene: '🎤👩‍🎓🗣️', ans: 'A female student joins it', opts: [{ txt: 'A female student joins it', ico: '👩‍🎓' }, { txt: 'A rice bowl joins it', ico: '🍚' }, { txt: 'A big rock joins it', ico: '🪨' }] },
            { q: 'Which direction is the market?', scene: '🧭🏪', ans: 'It is to the left', opts: [{ txt: 'It is to the left', ico: '⬅️' }, { txt: 'It is a green cat', ico: '🐱' }, { txt: 'It is very sweet', ico: '🍬' }] },
            { q: 'Who is Lan?', scene: '👧🎤🎶', ans: 'She is the girl who sings well', opts: [{ txt: 'She is the girl who sings well', ico: '🎤' }, { txt: 'She is the soup that is hot', ico: '🍲' }, { txt: 'She is the phone that is dead', ico: '📱' }] },
            { q: 'Which food do you prefer?', scene: '🍰🍲🍜', ans: 'I prefer the one which is sweet', opts: [{ txt: 'I prefer the one which is sweet', ico: '🍰' }, { txt: 'I like to walk to school', ico: '🚶' }, { txt: 'It is on the table', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đố Bạn Đoán Món Đồ',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn chọn bí mật một món đồ hoặc món ăn trong nhà (cái bát, điện thoại, quả táo...) và một người trong gia đình/lớp.',
              '<b>Bước 2:</b> Tả cho bạn đoán bằng câu có who/which/that, ví dụ <i>"It is the bowl that I use daily."</i> hoặc <i>"She is the woman who teaches at the university."</i>',
              '<b>Bước 3:</b> Bạn đoán đúng được 1 điểm rồi đổi lượt. Chơi 6 lượt, ai nhiều điểm hơn thắng.'
            ]
          }
        },
        {
          id: '4.2C', name: 'Bài 4.2C: Gọi món ở nhà hàng',
          grammar: {
            formulas: ['🙋 Can / Could + 👦 I + 🍽️ have a menu', '👩 She + ⚡ may / might + 🍜 order soup', '🍲 It + ⚡ may be + 🏮 a traditional dish'],
            tip: 'may / might = có thể (chưa chắc) • Can I / Could I = xin phép lịch sự, Could I nhẹ nhàng hơn Can I!'
          },
          chunks: [
            { scene: '🙏🍽️🧑‍🍳', full: 'Could I make a request please', parts: [{t:'Could',ico:'🙏',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'make a request please',ico:'🙏🍽️',c:'o'}], traceWord: 'request' },
            { scene: '💱🥤📏', full: 'Can I exchange this for a bigger size', parts: [{t:'Can',ico:'🙋',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'exchange this for a bigger size',ico:'💱🥤',c:'o'}], traceWord: 'exchange' },
            { scene: '🍲🏮🇻🇳', full: 'It may be a traditional dish from Vietnam', parts: [{t:'It',ico:'🍲',c:'s'}, {t:'may be',ico:'🤔',c:'v'}, {t:'a traditional dish from Vietnam',ico:'🏮🇻🇳',c:'o'}], traceWord: 'traditional' },
            { scene: '🧑🔄🍲', full: 'Somebody might replace the cold soup', parts: [{t:'Somebody',ico:'🧑',c:'s'}, {t:'might replace',ico:'🔄',c:'v'}, {t:'the cold soup',ico:'🥶🍲',c:'o'}], traceWord: 'replace' },
            { scene: '🧑‍🍳🛠️🍰', full: 'The cook may fix the shape of this cake', parts: [{t:'The cook',ico:'🧑‍🍳',c:'s'}, {t:'may fix',ico:'🛠️',c:'v'}, {t:'the shape of this cake',ico:'🔷🍰',c:'o'}], traceWord: 'shape' },
            { scene: '👧🥗🙋‍♀️', full: 'Mai may make a big salad herself', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'may make',ico:'🥗',c:'v'}, {t:'a big salad herself',ico:'🙋‍♀️🥗',c:'o'}], traceWord: 'herself' },
            { scene: '🕴️💬😓', full: 'The agent may have difficulty with communication', parts: [{t:'The agent',ico:'🕴️',c:'s'}, {t:'may have',ico:'🤔',c:'v'}, {t:'difficulty with communication',ico:'😓💬',c:'o'}], traceWord: 'agent' },
            { scene: '👪🍽️🪑', full: 'Three generations may eat at this table', parts: [{t:'Three generations',ico:'👪',c:'s'}, {t:'may eat',ico:'🍽️',c:'v'}, {t:'at this table',ico:'🪑',c:'o'}], traceWord: 'generations' }
          ],
          qaList: [
            { q: 'Where might we cross the street?', scene: '🚸🚦👨‍👩‍👧', ans: 'We might cross at the corner', opts: [{ txt: 'We might cross at the corner', ico: '🚸' }, { txt: 'We might sleep in a cup', ico: '☕' }, { txt: 'We might eat in the clouds', ico: '☁️' }] },
            { q: 'What might the actor shoot today?', scene: '🎬🎥👨‍🎤', ans: 'He might shoot a new movie', opts: [{ txt: 'He might shoot a new movie', ico: '🎬' }, { txt: 'He might wash the sky', ico: '🌤️' }, { txt: 'He might sleep in a cup', ico: '☕' }] },
            { q: 'Is the fish heavy?', scene: '🐟⚖️', ans: 'Yeah, the weight may be two kilos', opts: [{ txt: 'Yeah, the weight may be two kilos', ico: '⚖️' }, { txt: 'Yeah, it may sing a long song', ico: '🎵' }, { txt: 'Yeah, it may drive a bus', ico: '🚌' }] },
            { q: 'Could I have some water, please?', scene: '🙋💧🧑‍🍳', ans: 'Yes, here you are', opts: [{ txt: 'Yes, here you are', ico: '💧' }, { txt: 'I am ten years old', ico: '🔟' }, { txt: 'It is on Monday', ico: '📅' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhà Hàng Mini Của Nhóm Mình',
            steps: [
              '<b>Bước 1:</b> Cùng bạn làm thực đơn giấy 5 món (có giá). Một bạn làm bồi bàn, một bạn làm khách; đặt cốc, đĩa ra bàn cho giống nhà hàng.',
              '<b>Bước 2:</b> Khách gọi món bằng <i>"Can I have the soup, please?"</i> hoặc <i>"Could I make a request?"</i>; bồi bàn đoán và nói <i>"It may be hot."</i> hoặc <i>"We might have a traditional dish."</i>',
              '<b>Bước 3:</b> Đổi vai, mỗi bạn gọi ít nhất 3 món khác nhau. Ai dùng đúng Can I / Could I và may / might nhiều hơn là người thắng.'
            ]
          }
        }
      ]
    },
    '4.3': {
      lessons: [
        {
          id: '4.3A', name: 'Bài 4.3A: Lên lịch chuyến đi',
          grammar: {
            formulas: ['👨‍👩‍👧 We + 🔮 will + 💰 count the budget', '👦 I + 🗓️ am going to + 💌 invite a friend', '👩 Mom + 📅 is meeting + 👥 the committee on Sunday'],
            tip: 'will = quyết định ngay lúc nói • be going to = kế hoạch đã có • đang + lịch hẹn chắc chắn = am/is/are + V-ing!'
          },
          chunks: [
            { scene: '💰🔢🌙', full: 'We will count our budget tonight', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will count',ico:'🔢',c:'v'}, {t:'our budget tonight',ico:'💰',c:'o'}], traceWord: 'budget' },
            { scene: '👦💌👫', full: 'I am going to invite my cousin', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to',ico:'🗓️',c:'v'}, {t:'invite my cousin',ico:'💌',c:'o'}], traceWord: 'invite' },
            { scene: '👦📱👨', full: 'I will text Dad about the trip', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will text',ico:'📝',c:'v'}, {t:'Dad about the trip',ico:'🧳',c:'o'}], traceWord: 'text' },
            { scene: '👨‍👩‍👧🥣🍪', full: 'We are going to mix some snacks', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'are going to',ico:'🗓️',c:'v'}, {t:'mix some snacks',ico:'🥣',c:'o'}], traceWord: 'mix' },
            { scene: '👨💡👧', full: 'Dad will give us good advice', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'will give',ico:'🔮',c:'v'}, {t:'us good advice',ico:'💡',c:'o'}], traceWord: 'advice' },
            { scene: '👨‍👩‍👧👥📅', full: 'Our family committee is meeting on Sunday', parts: [{t:'Our family committee',ico:'👥',c:'s'}, {t:'is meeting',ico:'📅',c:'v'}, {t:'on Sunday',ico:'☀️',c:'o'}], traceWord: 'committee' },
            { scene: '🧳🩺🛡️', full: 'We will take a medical kit to stay safe', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will take',ico:'🔮',c:'v'}, {t:'a medical kit to stay safe',ico:'🩺',c:'o'}], traceWord: 'safe' },
            { scene: '🙇👦❌', full: 'I am going to admit my mistake', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am going to',ico:'🗓️',c:'v'}, {t:'admit my mistake',ico:'🙇',c:'o'}], traceWord: 'admit' }
          ],
          qaList: [
            { q: 'Which shoes are appropriate for a hike?', scene: '🥾⛰️👍', ans: 'Strong shoes are appropriate', opts: [{ txt: 'Strong shoes are appropriate', ico: '🥾' }, { txt: 'A big warm coat', ico: '🧥' }, { txt: 'Two red balloons', ico: '🎈' }] },
            { q: 'How can we prevent an accident on the bus?', scene: '🚌🛑⚠️', ans: 'We will hold the bus handle', opts: [{ txt: 'We will hold the bus handle', ico: '🔧' }, { txt: 'We will sing very loudly', ico: '🎤' }, { txt: 'We are eating cold soup', ico: '🍲' }] },
            { q: 'What is the nurse checking today?', scene: '👩‍⚕️🩸🩺', ans: 'She is checking my blood', opts: [{ txt: 'She is checking my blood', ico: '🩸' }, { txt: 'She is reading a comic', ico: '📖' }, { txt: 'She is washing a car', ico: '🚗' }] },
            { q: 'What scene will we see at the beach?', scene: '🏖️🌊🎭', ans: 'We will see big blue waves', opts: [{ txt: 'We will see big blue waves', ico: '🌊' }, { txt: 'We will see a tall tree', ico: '⛄' }, { txt: 'We will see a desk', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Lên lịch chuyến đi của em',
            steps: [
              '<b>Bước 1:</b> Lấy một tờ giấy, vẽ bảng 3 cột: <i>"I will..."</i>, <i>"I am going to..."</i>, <i>"I am ...ing on Sunday"</i>.',
              '<b>Bước 2:</b> Nghĩ về một chuyến đi cùng gia đình hoặc bạn bè. Viết mỗi cột 2 câu, ví dụ <i>"I will text Dad about the trip."</i>',
              '<b>Bước 3:</b> Đọc to kế hoạch cho một người bạn (hoặc đọc trước gương) và tự kiểm tra: đã chọn đúng will, be going to hoặc đang + V-ing chưa?'
            ]
          }
        },
        {
          id: '4.3B', name: 'Bài 4.3B: Nội quy và biển báo',
          grammar: {
            formulas: ['🚗 Drivers + 🚫 mustn\'t + 🚀 drive fast', '👤 You + ✅ don\'t have to + 💸 pay extra', '👶 Kids + 📌 need to + 🤝 trust the staff'],
            tip: 'mustn\'t = CẤM làm • don\'t have to = KHÔNG BẮT BUỘC, muốn làm cũng được • need to / should = nên và cần làm!'
          },
          chunks: [
            { scene: '🚗🚀🚫', full: 'Drivers mustn\'t drive at high speed', parts: [{t:'Drivers',ico:'🚗',c:'s'}, {t:'mustn\'t drive',ico:'🚫',c:'v'}, {t:'at high speed',ico:'🚀',c:'o'}], traceWord: 'speed' },
            { scene: '👤💸➕', full: 'You don\'t have to pay extra', parts: [{t:'You',ico:'👤',c:'s'}, {t:'don\'t have to pay',ico:'✅',c:'v'}, {t:'extra',ico:'➕',c:'o'}], traceWord: 'extra' },
            { scene: '👨‍👩‍👧🖨️🧭', full: 'We need to print the tour tickets', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'need to print',ico:'🖨️',c:'v'}, {t:'the tour tickets',ico:'🎫',c:'o'}], traceWord: 'tour' },
            { scene: '👧🗣️✅', full: 'You should tell the truth', parts: [{t:'You',ico:'👧',c:'s'}, {t:'should tell',ico:'📌',c:'v'}, {t:'the truth',ico:'✅',c:'o'}], traceWord: 'truth' },
            { scene: '👦🧪🚫', full: 'You mustn\'t touch the free sample', parts: [{t:'You',ico:'👦',c:'s'}, {t:'mustn\'t touch',ico:'🚫',c:'v'}, {t:'the free sample',ico:'🧪',c:'o'}], traceWord: 'sample' },
            { scene: '👧👦🤝', full: 'Kids need to trust the staff', parts: [{t:'Kids',ico:'👧',c:'s'}, {t:'need to trust',ico:'🤝',c:'v'}, {t:'the staff',ico:'🧑‍💼',c:'o'}], traceWord: 'trust' },
            { scene: '💻⬇️➕', full: 'You don\'t have to buy additional software', parts: [{t:'You',ico:'👤',c:'s'}, {t:'don\'t have to buy',ico:'✅',c:'v'}, {t:'additional software',ico:'💻',c:'o'}], traceWord: 'software' },
            { scene: '🙅😐👎', full: 'Nobody should have a negative attitude', parts: [{t:'Nobody',ico:'🙅',c:'s'}, {t:'should have',ico:'📌',c:'v'}, {t:'a negative attitude',ico:'👎',c:'o'}], traceWord: 'attitude' }
          ],
          qaList: [
            { q: 'What do you need to read first?', scene: '📖🏷️👀', ans: 'I need to read the title', opts: [{ txt: 'I need to read the title', ico: '🏷️' }, { txt: 'I need to eat the book', ico: '🍽️' }, { txt: 'We are at the beach', ico: '🏖️' }] },
            { q: 'Why do we read signs in context?', scene: '🪧🧩🤔', ans: 'We need context to understand them', opts: [{ txt: 'We need context to understand them', ico: '🧩' }, { txt: 'We like cold rain', ico: '🌧️' }, { txt: 'We have a red cat', ico: '🐱' }] },
            { q: 'Do we pay double on Sunday?', scene: '💸2️⃣☀️', ans: 'No, we don\'t have to pay double', opts: [{ txt: 'No, we don\'t have to pay double', ico: '2️⃣' }, { txt: 'Yes, I am a pilot', ico: '✈️' }, { txt: 'It is a big hat', ico: '🎩' }] },
            { q: 'Did Mom send a reply to your message?', scene: '👩📱↩️', ans: 'Yes, she sent a quick reply', opts: [{ txt: 'Yes, she sent a quick reply', ico: '↩️' }, { txt: 'No, she is a green tree', ico: '🌳' }, { txt: 'Yes, it is hot soup', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thợ săn biển báo',
            steps: [
              '<b>Bước 1:</b> Đi một vòng quanh nhà, trường hoặc khu phố và tìm 4 biển báo hay nội quy (cấm, bắt buộc, không bắt buộc).',
              '<b>Bước 2:</b> Với mỗi biển báo, viết một câu: <i>"You mustn\'t ..."</i> hoặc <i>"You don\'t have to ..."</i> hoặc <i>"You need to ..."</i>.',
              '<b>Bước 3:</b> Đọc các câu cho bạn nghe, để bạn đoán xem đó là biển nào. Đổi vai và chơi lại!'
            ]
          }
        },
        {
          id: '4.3C', name: 'Bài 4.3C: Hỏi đường, hỏi thông tin',
          grammar: {
            formulas: ['🙋 Could you + 🗣️ tell me + 📍 where the expert is?', '🙋 Could you + 🗣️ tell me + 🚌 where the bus stops?', '🙋 Could you + 🤲 do me + 🙏 a favor?'],
            tip: 'Hỏi lịch sự thì không đảo: where the expert IS (đúng), không phải where is the expert (sai)!'
          },
          chunks: [
            { scene: '🙋🎓📍', full: 'Could you tell me where the expert is', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'where the expert is',ico:'🎓',c:'o'}], traceWord: 'expert' },
            { scene: '🙋🖥️🏛️', full: 'Could you tell me where the museum display is', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'where the museum display is',ico:'🖥️',c:'o'}], traceWord: 'display' },
            { scene: '🙋🤲🙏', full: 'Could you do me a favor', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'do me',ico:'🤲',c:'v'}, {t:'a favor',ico:'🙏',c:'o'}], traceWord: 'favor' },
            { scene: '🙋🚌🔁', full: 'Could you tell me where the regular bus stops', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'where the regular bus stops',ico:'🚌',c:'o'}], traceWord: 'regular' },
            { scene: '🙋🤵🛍️', full: 'Could you tell me where I can buy a suit', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'where I can buy a suit',ico:'🤵',c:'o'}], traceWord: 'suit' },
            { scene: '🙋❌📝', full: 'Could you tell me what the mistake is', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'what the mistake is',ico:'❌',c:'o'}], traceWord: 'mistake' },
            { scene: '🙋🌊🏖️', full: 'Could you tell me where the big waves are', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'where the big waves are',ico:'🌊',c:'o'}], traceWord: 'waves' },
            { scene: '🙋🍽️😊', full: 'Could you tell me if this meal will satisfy us', parts: [{t:'Could you',ico:'🙋',c:'s'}, {t:'tell me',ico:'🗣️',c:'v'}, {t:'if this meal will satisfy us',ico:'😊',c:'o'}], traceWord: 'satisfy' }
          ],
          qaList: [
            { q: 'What is the importance of physical exercise?', scene: '💪🏃⭐', ans: 'It keeps us healthy and strong', opts: [{ txt: 'It keeps us healthy and strong', ico: '💪' }, { txt: 'It makes us a cold cake', ico: '🍰' }, { txt: 'It is a yellow bus', ico: '🚌' }] },
            { q: 'How is the weather at the beach today?', scene: '🏖️🔥🌟', ans: 'It is perfect, but the heat is strong', opts: [{ txt: 'It is perfect, but the heat is strong', ico: '🔥' }, { txt: 'It is snowing on my bed', ico: '🛏️' }, { txt: 'It is a small pen', ico: '🖊️' }] },
            { q: 'Are the two stations far apart?', scene: '🚉↔️🚉', ans: 'No, they are close', opts: [{ txt: 'No, they are close', ico: '↔️' }, { txt: 'Yes, I like pizza', ico: '🍕' }, { txt: 'It is a red bike', ico: '🚲' }] },
            { q: 'Will the police reveal the crime today?', scene: '👮🚔🔍', ans: 'Yes, they will reveal it today', opts: [{ txt: 'Yes, they will reveal it today', ico: '🔍' }, { txt: 'No, it is my birthday cake', ico: '🎂' }, { txt: 'Yes, I am very sleepy', ico: '😴' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hỏi đường lịch sự',
            steps: [
              '<b>Bước 1:</b> Vẽ một bản đồ nhỏ có 5 địa điểm: nhà ga, bãi biển, cửa hàng, bảo tàng, trạm xe buýt.',
              '<b>Bước 2:</b> Cùng một bạn đóng vai người hỏi và người trả lời. Người hỏi nói: <i>"Could you tell me where the museum is?"</i> rồi chỉ đường bằng tiếng Anh.',
              '<b>Bước 3:</b> Đổi vai 3 lần. Mỗi lần hỏi một địa điểm mới và nhớ giữ trật tự câu: where + chủ ngữ + động từ.'
            ]
          }
        }
      ]
    },
    '4.4': {
      lessons: [
        {
          id: '4.4A', name: 'Bài 4.4A: Môn học yêu thích',
          grammar: {
            formulas: ['👦 I + 💖 enjoy + 📖 reading', '👧 She + 🌟 wants + ✈️ to travel', '👫 We + 🎯 plan + 🏫 to study'],
            tip: 'enjoy đi với V-ing (thích làm gì), còn want / hope / plan đi với to + V (muốn, mong, định làm gì) — nhớ: "thích" thêm ing, "mong" thêm to!'
          },
          chunks: [
            { scene: '📷👨‍👩‍👧😊', full: 'I enjoy looking at a photograph of my family', parts: [{t:'I',ico:'👦',c:'s'}, {t:'enjoy',ico:'💖',c:'v'}, {t:'looking at a photograph of my family',ico:'📷',c:'o'}], traceWord: 'photograph' },
            { scene: '🏫🧭🇻🇳', full: 'My class wants to visit the north of Vietnam', parts: [{t:'My class',ico:'🏫',c:'s'}, {t:'wants',ico:'🌟',c:'v'}, {t:'to visit the north of Vietnam',ico:'🧭',c:'o'}], traceWord: 'north' },
            { scene: '👧🧭☀️', full: 'Anna hopes to travel to the south this summer', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'hopes',ico:'🤞',c:'v'}, {t:'to travel to the south this summer',ico:'🧭',c:'o'}], traceWord: 'south' },
            { scene: '👩🎤👏', full: 'She plans to sing for a big audience', parts: [{t:'She',ico:'👩',c:'s'}, {t:'plans',ico:'🎯',c:'v'}, {t:'to sing for a big audience',ico:'👏',c:'o'}], traceWord: 'audience' },
            { scene: '👦🚶👥', full: 'Tom does not enjoy walking in a crowd', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'does not enjoy',ico:'🚫',c:'v'}, {t:'walking in a crowd',ico:'👥',c:'o'}], traceWord: 'crowd' },
            { scene: '👫📚👷', full: 'We want to learn about labor in history class', parts: [{t:'We',ico:'👫',c:'s'}, {t:'want',ico:'🌟',c:'v'}, {t:'to learn about labor in history class',ico:'👷',c:'o'}], traceWord: 'labor' },
            { scene: '👦🥖🧈', full: 'I want to spread butter on a roll', parts: [{t:'I',ico:'👦',c:'s'}, {t:'want',ico:'🌟',c:'v'}, {t:'to spread butter on a roll',ico:'🥖',c:'o'}], traceWord: 'roll' },
            { scene: '👩💯👩‍💼', full: 'Mai hopes to become a fully trained secretary', parts: [{t:'Mai',ico:'👩',c:'s'}, {t:'hopes',ico:'🤞',c:'v'}, {t:'to become a fully trained secretary',ico:'💯',c:'o'}], traceWord: 'fully' }
          ],
          qaList: [
            { q: 'What does Nam hope to be?', scene: '👦⚡📖', ans: 'A quick reader', opts: [{ txt: 'A quick reader', ico: '⚡' }, { txt: 'A sleepy cat', ico: '😴' }, { txt: 'In the park', ico: '🌳' }] },
            { q: 'What does Dad plan to buy?', scene: '👨🚗⛽', ans: 'He plans to buy gas', opts: [{ txt: 'He plans to buy gas', ico: '⛽' }, { txt: 'I enjoy swimming', ico: '🏊' }, { txt: 'She is happy', ico: '😄' }] },
            { q: 'What does the football player hope to hit?', scene: '⚽🥅🏃', ans: 'He hopes to hit the net', opts: [{ txt: 'He hopes to hit the net', ico: '🥅' }, { txt: 'She enjoys reading', ico: '📖' }, { txt: 'They want to sleep', ico: '😴' }] },
            { q: 'What do you want to use to weigh an apple?', scene: '🍎⚖️🤔', ans: 'I want to use a scale', opts: [{ txt: 'I want to use a scale', ico: '⚖️' }, { txt: 'I enjoy the contrast', ico: '◐' }, { txt: 'She hopes to sleep', ico: '😴' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Bạn Học',
            steps: [
              '<b>Bước 1:</b> Viết ra giấy 3 môn học hoặc việc em thích và 3 điều em muốn làm trong tương lai.',
              '<b>Bước 2:</b> Phỏng vấn một bạn (hoặc nói trước gương): <i>"What do you enjoy doing?"</i> và <i>"What do you want to do?"</i>.',
              '<b>Bước 3:</b> Trả lời bằng câu hoàn chỉnh như <i>"I enjoy reading."</i> và <i>"I hope to travel."</i>, rồi đổi vai cho bạn hỏi lại.'
            ]
          }
        },
        {
          id: '4.4B', name: 'Bài 4.4B: Nghề nghiệp mơ ước',
          grammar: {
            formulas: ['👦 I + 🏃 go + ✈️ to catch a flight', '👧 She + 📚 studies + 🎯 for a test', '👫 We + ⏰ leave + 🚦 so that we are on time'],
            tip: 'Muốn nói "để làm gì": to + V nguyên mẫu, for + danh từ, hoặc so that + một câu đầy đủ (có chủ ngữ và động từ)!'
          },
          chunks: [
            { scene: '👦🚕✈️', full: 'Nam takes a taxi to catch the flight', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'takes',ico:'🚕',c:'v'}, {t:'a taxi to catch the flight',ico:'✈️',c:'o'}], traceWord: 'flight' },
            { scene: '👦🏠🚦', full: 'I leave early so that I can avoid the traffic', parts: [{t:'I',ico:'👦',c:'s'}, {t:'leave',ico:'🚪',c:'v'}, {t:'early so that I can avoid the traffic',ico:'🚦',c:'o'}], traceWord: 'traffic' },
            { scene: '👨‍✈️📅✈️', full: 'The senior pilot checks the schedule for tomorrow', parts: [{t:'The senior pilot',ico:'👨‍✈️',c:'s'}, {t:'checks',ico:'✅',c:'v'}, {t:'the schedule for tomorrow',ico:'📅',c:'o'}], traceWord: 'senior' },
            { scene: '🧑‍🤝‍🧑💧🏜️', full: 'They carry water to survive in the desert', parts: [{t:'They',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'carry',ico:'🎒',c:'v'}, {t:'water to survive in the desert',ico:'🏜️',c:'o'}], traceWord: 'survive' },
            { scene: '🎤🙂👍', full: 'The speaker uses a happy expression to help us', parts: [{t:'The speaker',ico:'🔊',c:'s'}, {t:'uses',ico:'🙂',c:'v'}, {t:'a happy expression to help us',ico:'👍',c:'o'}], traceWord: 'expression' },
            { scene: '👧🖌️🖼️', full: 'Mai paints a blue background for the poster', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'paints',ico:'🖌️',c:'v'}, {t:'a blue background for the poster',ico:'🖼️',c:'o'}], traceWord: 'background' },
            { scene: '💪🏋️🔥', full: 'He trains extremely hard to build strength', parts: [{t:'He',ico:'👦',c:'s'}, {t:'trains',ico:'🏋️',c:'v'}, {t:'extremely hard to build strength',ico:'💪',c:'o'}], traceWord: 'strength' },
            { scene: '👦📖➕📝', full: 'I read a chapter plus notes to prepare for the test', parts: [{t:'I',ico:'👦',c:'s'}, {t:'read',ico:'📖',c:'v'}, {t:'a chapter plus notes to prepare for the test',ico:'➕',c:'o'}], traceWord: 'chapter' }
          ],
          qaList: [
            { q: 'Why does Lan speak quietly?', scene: '👧🤫💬', ans: 'To tell a secret', opts: [{ txt: 'To tell a secret', ico: '🤫' }, { txt: 'To buy a hat', ico: '🎩' }, { txt: 'For a hot soup', ico: '🍲' }] },
            { q: 'Why do you say thank you to your teacher?', scene: '👦🙏👩‍🏫', ans: 'To appreciate her help', opts: [{ txt: 'To appreciate her help', ico: '🙏' }, { txt: 'To eat a cake', ico: '🍰' }, { txt: 'For a red car', ico: '🚗' }] },
            { q: 'Why is Tom sad today?', scene: '👦😔🔑', ans: 'Unfortunately, he lost his key', opts: [{ txt: 'Unfortunately, he lost his key', ico: '😔' }, { txt: 'He found a new bike', ico: '🚲' }, { txt: 'He is eating lunch', ico: '🍱' }] },
            { q: 'What is one consequence of heavy traffic?', scene: '🚗🚌🚦', ans: 'People are late', opts: [{ txt: 'People are late', ico: '⏰' }, { txt: 'The sky is green', ico: '🟩' }, { txt: 'A cat can sing', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thẻ Nghề Mơ Ước',
            steps: [
              '<b>Bước 1:</b> Viết tên 3 nghề em mơ ước lên 3 mảnh giấy (ví dụ: pilot, teacher, chef).',
              '<b>Bước 2:</b> Bốc một mảnh và nói vì sao em muốn làm nghề đó: <i>"I study hard to become a pilot."</i> hoặc <i>"I practice for the job."</i>.',
              '<b>Bước 3:</b> Nói thêm một câu với <i>"so that"</i>, ví dụ <i>"I read books so that I can learn more."</i>, rồi đố bạn đoán nghề.'
            ]
          }
        },
        {
          id: '4.4C', name: 'Bài 4.4C: Ngày xưa và bây giờ',
          grammar: {
            formulas: ['👴 Grandpa + ⏪ used to + 🚶 walk', '👧 I + ⏪ used to + 📖 read', '👨 He + ⏪ used to + 🏠 live here'],
            tip: 'used to + V nguyên mẫu dùng để nói thói quen hay việc ngày xưa hay làm, bây giờ không còn nữa — sau used to không thêm s, ed hay ing!'
          },
          chunks: [
            { scene: '👴🪵🌅', full: 'My grandfather used to gather wood every morning', parts: [{t:'My grandfather',ico:'👴',c:'s'}, {t:'used to gather',ico:'🧺',c:'v'}, {t:'wood every morning',ico:'🪵',c:'o'}], traceWord: 'gather' },
            { scene: '👫🛤️🌳', full: 'We used to walk along a small path', parts: [{t:'We',ico:'👫',c:'s'}, {t:'used to walk',ico:'🚶',c:'v'}, {t:'along a small path',ico:'🛤️',c:'o'}], traceWord: 'path' },
            { scene: '👩📖🌙', full: 'My mother used to read a novel every night', parts: [{t:'My mother',ico:'👩',c:'s'}, {t:'used to read',ico:'📖',c:'v'}, {t:'a novel every night',ico:'🌙',c:'o'}], traceWord: 'novel' },
            { scene: '👵🐟🥬', full: 'Grandma used to buy fresh fish at the market', parts: [{t:'Grandma',ico:'👵',c:'s'}, {t:'used to buy',ico:'🛒',c:'v'}, {t:'fresh fish at the market',ico:'🐟',c:'o'}], traceWord: 'fresh' },
            { scene: '👨‍👩‍👧🏮🎉', full: 'My family used to follow an old tradition', parts: [{t:'My family',ico:'👨‍👩‍👧',c:'s'}, {t:'used to follow',ico:'👣',c:'v'}, {t:'an old tradition',ico:'🏮',c:'o'}], traceWord: 'tradition' },
            { scene: '👥🌍🤔', full: 'People used to think the earth was flat', parts: [{t:'People',ico:'👥',c:'s'}, {t:'used to think',ico:'🤔',c:'v'}, {t:'the earth was flat',ico:'🌍',c:'o'}], traceWord: 'earth' },
            { scene: '👨💼📍🏠', full: 'Dad used to work somewhere far from home', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'used to work',ico:'💼',c:'v'}, {t:'somewhere far from home',ico:'📍',c:'o'}], traceWord: 'somewhere' },
            { scene: '🚂⏳😕', full: 'The old train used to cause a delay', parts: [{t:'The old train',ico:'🚂',c:'s'}, {t:'used to cause',ico:'⚠️',c:'v'}, {t:'a delay',ico:'⏳',c:'o'}], traceWord: 'delay' }
          ],
          qaList: [
            { q: 'Where did Lan use to play as a child?', scene: '👧⚽🌳', ans: 'Apparently, she used to play mostly outside', opts: [{ txt: 'Apparently, she used to play mostly outside', ico: '🌳' }, { txt: 'In a big bank', ico: '🏦' }, { txt: 'At the zoo', ico: '🦁' }] },
            { q: 'Who used to talk on TV twice a week?', scene: '📺🎙️2️⃣', ans: 'The host used to talk on TV twice a week', opts: [{ txt: 'The host used to talk on TV twice a week', ico: '🎙️' }, { txt: 'A cat used to drive a bus', ico: '🐱' }, { txt: 'The moon used to sing', ico: '🌙' }] },
            { q: 'What did the cook use to get in the kitchen?', scene: '👨‍🍳🔥🍳', ans: 'A burn from the stove', opts: [{ txt: 'A burn from the stove', ico: '🔥' }, { txt: 'A new bike', ico: '🚲' }, { txt: 'A big drum', ico: '🥁' }] },
            { q: 'What did the children use to do with the cake?', scene: '🧒🍰➗', ans: 'They used to divide the cake', opts: [{ txt: 'They used to divide the cake', ico: '➗' }, { txt: 'It used to be powerful', ico: '⚡' }, { txt: 'They used to fly a plane', ico: '✈️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Ông Bà',
            steps: [
              '<b>Bước 1:</b> Chọn một người lớn tuổi (ông bà, cô chú) hoặc gọi điện, rồi hỏi bằng tiếng Việt về cuộc sống ngày xưa của họ.',
              '<b>Bước 2:</b> Ghi lại 4 điều họ hay làm ngày xưa và viết thành câu: <i>"My grandfather used to walk to school."</i>.',
              '<b>Bước 3:</b> Tự kể về mình: <i>"I used to play with toys."</i> rồi so sánh với bây giờ cùng một người bạn.'
            ]
          }
        }
      ]
    },
    '4.5': {
      lessons: [
        {
          id: '4.5A', name: 'Bài 4.5A: Nếu chúng ta cùng hành động',
          grammar: {
            formulas: ['🌱 If + 👥 we + ♻️ recycle, + 🔮 we will + 💰 save cash', '☔ If + 🌧️ it rains, + 🔮 we will + 🏠 stay home'],
            tip: 'Sau "if" dùng hiện tại đơn (không dùng will), còn kết quả mới dùng "will + động từ" nhé!'
          },
          chunks: [
            { scene: '♻️👥💰', full: 'If we recycle, we will save cash', parts: [{t:'If we recycle,',ico:'♻️',c:'s'}, {t:'we will save',ico:'🔮',c:'v'}, {t:'cash',ico:'💵',c:'o'}], traceWord: 'cash' },
            { scene: '🚶🚗🌳', full: 'If you walk, you will hardly need a car', parts: [{t:'If you walk,',ico:'🚶',c:'s'}, {t:'you will hardly need',ico:'😮‍💨',c:'v'}, {t:'a car',ico:'🚗',c:'o'}], traceWord: 'hardly' },
            { scene: '🏆👧🎉', full: 'If we win an award, we will be happy', parts: [{t:'If we win an award,',ico:'🏅',c:'s'}, {t:'we will be',ico:'🔮',c:'v'}, {t:'happy',ico:'😄',c:'o'}], traceWord: 'award' },
            { scene: '🌧️☔🏠', full: 'If it rains, we will possibly stay home', parts: [{t:'If it rains,',ico:'🌧️',c:'s'}, {t:'we will possibly stay',ico:'🤷',c:'v'}, {t:'home',ico:'🏠',c:'o'}], traceWord: 'possibly' },
            { scene: '🚑⚠️👧', full: 'An accident will not happen if we are careful', parts: [{t:'An accident',ico:'🚑',c:'s'}, {t:'will not happen',ico:'🚫',c:'v'}, {t:'if we are careful',ico:'👀',c:'o'}], traceWord: 'accident' },
            { scene: '👫💪🌍', full: 'If we work together, nothing will be impossible', parts: [{t:'If we work together,',ico:'👫',c:'s'}, {t:'nothing will be',ico:'🔮',c:'v'}, {t:'impossible',ico:'🚫',c:'o'}], traceWord: 'impossible' },
            { scene: '📦📼👦', full: 'If we pack the box, we will need tape', parts: [{t:'If we pack the box,',ico:'📦',c:'s'}, {t:'we will need',ico:'🔮',c:'v'}, {t:'tape',ico:'📼',c:'o'}], traceWord: 'pack' },
            { scene: '🛋️😌👦', full: 'If you sit on the sofa, you will be comfortable', parts: [{t:'If you sit on the sofa,',ico:'🛋️',c:'s'}, {t:'you will be',ico:'🔮',c:'v'}, {t:'comfortable',ico:'😌',c:'o'}], traceWord: 'comfortable' }
          ],
          qaList: [
            { q: 'What will you do if the shop is opposite the park?', scene: '🏪↔️🌳', ans: 'I will walk there', opts: [{ txt: 'I will walk there', ico: '🚶' }, { txt: 'A blue sofa', ico: '🛋️' }, { txt: 'Two cats', ico: '🐱' }] },
            { q: 'What will you do if you see a soldier?', scene: '🪖👦👋', ans: 'I will say hello', opts: [{ txt: 'I will say hello', ico: '👋' }, { txt: 'It is a big cloud', ico: '☁️' }, { txt: 'We have two cats', ico: '🐱' }] },
            { q: 'What will you eat if you hate the usual lunch?', scene: '😠🍱🔁', ans: 'I will eat rice', opts: [{ txt: 'I will eat rice', ico: '🍚' }, { txt: 'It is a long river', ico: '🏞️' }, { txt: 'She is at school', ico: '🏫' }] },
            { q: 'What will you do if you get a shock?', scene: '😱👦🪑', ans: 'I will sit down', opts: [{ txt: 'I will sit down', ico: '🪑' }, { txt: 'A bottle of wine', ico: '🍷' }, { txt: 'A murder story', ico: '🔪' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Lời Hứa Hành Tinh Xanh',
            steps: [
              '<b>Bước 1:</b> Lấy 6 mảnh giấy nhỏ, mỗi mảnh viết một việc xanh như tắt đèn, đi bộ, tái chế giấy, dùng lại hộp.',
              '<b>Bước 2:</b> Bốc từng mảnh giấy và nói một lời hứa, ví dụ <i>"If we recycle, we will save cash."</i> hoặc <i>"If it rains, we will stay home."</i>',
              '<b>Bước 3:</b> Cùng bạn thay phiên nhau, ai nói đúng "if + hiện tại, will + động từ" thì ghi 1 điểm. Chơi đến khi hết giấy.'
            ]
          }
        },
        {
          id: '4.5B', name: 'Bài 4.5B: Tái chế, sự kiện trường',
          grammar: {
            formulas: ['📰 Old paper + ⚡ is + ♻️ recycled', '🧴 Plastic bottles + ⚡ are + 📦 collected'],
            tip: 'Bị động hiện tại đơn: 1 vật dùng "is", nhiều vật dùng "are", rồi thêm động từ cột 3 (V3) như recycled, made, kept!'
          },
          chunks: [
            { scene: '📰♻️🏛️', full: 'Old paper is recycled at the museum', parts: [{t:'Old paper',ico:'📰',c:'s'}, {t:'is recycled',ico:'♻️',c:'v'}, {t:'at the museum',ico:'🏛️',c:'o'}], traceWord: 'museum' },
            { scene: '🧑‍💼🚪👋', full: 'Visitors are welcomed at the gate', parts: [{t:'Visitors',ico:'🧑‍💼',c:'s'}, {t:'are welcomed',ico:'👋',c:'v'}, {t:'at the gate',ico:'🚪',c:'o'}], traceWord: 'visitors' },
            { scene: '🧴📦📅', full: 'Plastic bottles are mainly collected on Friday', parts: [{t:'Plastic bottles',ico:'🧴',c:'s'}, {t:'are mainly collected',ico:'🎯',c:'v'}, {t:'on Friday',ico:'📅',c:'o'}], traceWord: 'mainly' },
            { scene: '👗✨🏫', full: 'Fashion shows are held in the school hall', parts: [{t:'Fashion shows',ico:'👗',c:'s'}, {t:'are held',ico:'✨',c:'v'}, {t:'in the school hall',ico:'🏫',c:'o'}], traceWord: 'fashion' },
            { scene: '☠️⚠️👶', full: 'Dangerous things are kept away from kids', parts: [{t:'Dangerous things',ico:'☠️',c:'s'}, {t:'are kept',ico:'🔒',c:'v'}, {t:'away from kids',ico:'👶',c:'o'}], traceWord: 'dangerous' },
            { scene: '🌿🧺🍂', full: 'Dry branches are put in a basket', parts: [{t:'Dry branches',ico:'🌿',c:'s'}, {t:'are put',ico:'🫳',c:'v'}, {t:'in a basket',ico:'🧺',c:'o'}], traceWord: 'branches' },
            { scene: '📰📝🔍', full: 'The school newspaper is checked by the editor', parts: [{t:'The school newspaper',ico:'📰',c:'s'}, {t:'is checked',ico:'🔍',c:'v'}, {t:'by the editor',ico:'📝',c:'o'}], traceWord: 'editor' },
            { scene: '🙂🏠👨‍👩‍👧', full: 'Good manners are basically learned at home', parts: [{t:'Good manners',ico:'🙂',c:'s'}, {t:'are basically learned',ico:'📌',c:'v'}, {t:'at home',ico:'🏠',c:'o'}], traceWord: 'manners' }
          ],
          qaList: [
            { q: 'What shape are the tables in the museum?', scene: '🟦🪑🏛️', ans: 'The tables are square', opts: [{ txt: 'The tables are square', ico: '🟦' }, { txt: 'They are very hungry', ico: '🍔' }, { txt: 'It is in the sky', ico: '🌤️' }] },
            { q: 'Is a gun a toy?', scene: '🔫⚠️👶', ans: 'No, a gun is a danger', opts: [{ txt: 'No, a gun is a danger', ico: '⚠️' }, { txt: 'Yes, it belongs to kids', ico: '👶' }, { txt: 'It is in the park', ico: '🌳' }] },
            { q: 'Do the students oppose pollution?', scene: '🏭✋👧', ans: 'Yes, they oppose pollution', opts: [{ txt: 'Yes, they oppose pollution', ico: '✋' }, { txt: 'No, they love it', ico: '❤️' }, { txt: 'It is in the box', ico: '📦' }] },
            { q: 'What is loved by everyone?', scene: '🕊️❤️🌍', ans: 'Freedom is loved by everyone', opts: [{ txt: 'Freedom is loved by everyone', ico: '🕊️' }, { txt: 'A cup is on the table', ico: '☕' }, { txt: 'Rain is in the bag', ico: '🌧️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phóng Viên Tái Chế',
            steps: [
              '<b>Bước 1:</b> Đi một vòng quanh nhà hoặc lớp, tìm 5 đồ vật có thể tái chế như chai nhựa, giấy cũ, hộp, cành khô, lon.',
              '<b>Bước 2:</b> Với mỗi đồ vật, viết một câu bị động vào vở, ví dụ <i>"Plastic bottles are collected on Friday."</i> hoặc <i>"Old paper is recycled."</i>',
              '<b>Bước 3:</b> Đóng vai phóng viên và biên tập viên: đọc to bản tin cho bạn nghe, bạn kiểm tra xem dùng "is" hay "are" đã đúng chưa.'
            ]
          }
        },
        {
          id: '4.5C', name: 'Bài 4.5C: Mời bạn dự sự kiện',
          grammar: {
            formulas: ['🌤️ It + ⚡ is + 👍 nice, + ❓ isn\'t it?', '🙋 You + ⚡ like + 🎉 it, + ❓ don\'t you?'],
            tip: 'Câu hỏi đuôi: vế trước khẳng định thì đuôi phủ định (is - isn\'t it), vế trước phủ định thì đuôi khẳng định (don\'t - do you)!'
          },
          chunks: [
            { scene: '🌡️☀️👍', full: 'The temperature is fairly warm, isn\'t it', parts: [{t:'The temperature',ico:'🌡️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'fairly warm, isn\'t it',ico:'👍',c:'o'}], traceWord: 'temperature' },
            { scene: '👩⏰🎉', full: 'You will remind Mom about the event, won\'t you', parts: [{t:'You',ico:'🙋',c:'s'}, {t:'will remind',ico:'⏰',c:'v'}, {t:'Mom about the event, won\'t you',ico:'🎉',c:'o'}], traceWord: 'remind' },
            { scene: '🧳🆓💵', full: 'There is no fee for tourists, is there', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'no fee for tourists, is there',ico:'🧳',c:'o'}], traceWord: 'fee' },
            { scene: '🏞️👀🙂', full: 'This place is familiar to you, isn\'t it', parts: [{t:'This place',ico:'🏞️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'familiar to you, isn\'t it',ico:'👀',c:'o'}], traceWord: 'familiar' },
            { scene: '🪵🎭🔨', full: 'We use wood for the stage, don\'t we', parts: [{t:'We',ico:'👥',c:'s'}, {t:'use',ico:'🔨',c:'v'}, {t:'wood for the stage, don\'t we',ico:'🪵',c:'o'}], traceWord: 'wood' },
            { scene: '🪪🎊🙌', full: 'Every citizen can join the event, can\'t they', parts: [{t:'Every citizen',ico:'🪪',c:'s'}, {t:'can join',ico:'🙌',c:'v'}, {t:'the event, can\'t they',ico:'🎊',c:'o'}], traceWord: 'citizen' },
            { scene: '⚖️🎤👏', full: 'A lawyer will give a talk, won\'t he', parts: [{t:'A lawyer',ico:'⚖️',c:'s'}, {t:'will give',ico:'🎁',c:'v'}, {t:'a talk, won\'t he',ico:'🎤',c:'o'}], traceWord: 'lawyer' },
            { scene: '🌳💥🚫', full: 'You don\'t want to destroy the forest, do you', parts: [{t:'You',ico:'🙋',c:'s'}, {t:'don\'t want',ico:'🚫',c:'v'}, {t:'to destroy the forest, do you',ico:'🌳',c:'o'}], traceWord: 'destroy' }
          ],
          qaList: [
            { q: 'Is this a proper way to recycle paper?', scene: '📰♻️✅', ans: 'Yes, it is a proper way', opts: [{ txt: 'Yes, it is a proper way', ico: '✅' }, { txt: 'No, it is hot soup', ico: '🍲' }, { txt: 'It is under the bed', ico: '🛏️' }] },
            { q: 'Is the truck full?', scene: '🚚📦📦', ans: 'Yes, it has a big load', opts: [{ txt: 'Yes, it has a big load', ico: '🚚' }, { txt: 'It is a very good song', ico: '🎵' }, { txt: 'She is at the zoo', ico: '🦁' }] },
            { q: 'What does the description say about the event?', scene: '📄🎉❓', ans: 'It says the event is fun', opts: [{ txt: 'It says the event is fun', ico: '🎉' }, { txt: 'A quick escape', ico: '🏃' }, { txt: 'The cat is on the bed', ico: '🐱' }] },
            { q: 'Why is there a tear on her face?', scene: '😢👧💧', ans: 'She is sad', opts: [{ txt: 'She is sad', ico: '😢' }, { txt: 'A family affair', ico: '📂' }, { txt: 'He has two pens', ico: '🖊️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thư Mời Có Câu Hỏi Đuôi',
            steps: [
              '<b>Bước 1:</b> Cùng bạn làm một tấm thiệp mời ngày hội Bảo vệ Hành Tinh, ghi rõ ngày giờ, nơi tổ chức và điều cần mang theo.',
              '<b>Bước 2:</b> Viết thêm 4 câu hỏi đuôi để mời bạn bè, ví dụ <i>"The event is fun, isn\'t it?"</i> hoặc <i>"You will come, won\'t you?"</i>',
              '<b>Bước 3:</b> Đọc to từng câu cho bạn nghe và để bạn trả lời <i>"Yes, it is."</i> hoặc <i>"Yes, I will."</i> Thay phiên nhau cho đến hết thiệp.'
            ]
          }
        }
      ]
    },
    '4.6': {
      lessons: [
        {
          id: '4.6A', name: 'Bài 4.6A: Đi khám bác sĩ, đã từng ốm',
          grammar: {
            formulas: ['❓ Have + 👦 you + 🏥 ever been to ...?', '✅ Yes, + 👦 I + ⚡ have', '🏥 She + ⚡ has been to + 📍 the hospital'],
            tip: '"Have been to" = đã đi rồi và đã về • "have gone to" = đã đi và vẫn đang ở đó!'
          },
          chunks: [
            { scene: '👦🌲👨', full: 'I have been to the forest with my father', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have been',ico:'⚡',c:'v'}, {t:'to the forest with my father',ico:'🌲',c:'o'}], traceWord: 'forest' },
            { scene: '👧😤💪', full: 'She has never complained about her commitment to exercise', parts: [{t:'She',ico:'👧',c:'s'}, {t:'has never complained',ico:'😤',c:'v'}, {t:'about her commitment to exercise',ico:'🤞',c:'o'}], traceWord: 'commitment' },
            { scene: '👨‍👩‍👦❌📝', full: 'We have checked the error in my homework', parts: [{t:'We',ico:'👨‍👩‍👦',c:'s'}, {t:'have checked',ico:'🔍',c:'v'}, {t:'the error in my homework',ico:'❌',c:'o'}], traceWord: 'error' },
            { scene: '🧭🌅🇻🇳', full: 'Have you ever explored the west of Vietnam', parts: [{t:'Have',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'ever explored the west of Vietnam',ico:'🧭',c:'o'}], traceWord: 'explored' },
            { scene: '👧⛓️🖼️', full: 'Has your sister ever put a chain in a frame', parts: [{t:'Has',ico:'❓',c:'v'}, {t:'your sister',ico:'👧',c:'s'}, {t:'ever put a chain in a frame',ico:'🖼️',c:'o'}], traceWord: 'frame' },
            { scene: '👨‍⚕️🐢🚪', full: 'The doctor has walked slowly to the room', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'has walked',ico:'🚶',c:'v'}, {t:'slowly to the room',ico:'🐢',c:'o'}], traceWord: 'slowly' },
            { scene: '👦📚🎯', full: 'I have tried to concentrate on my homework', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have tried',ico:'💪',c:'v'}, {t:'to concentrate on my homework',ico:'🎯',c:'o'}], traceWord: 'concentrate' },
            { scene: '👨👔🎒', full: 'My dad has put a tie in the bag', parts: [{t:'My dad',ico:'👨',c:'s'}, {t:'has put',ico:'🤲',c:'v'}, {t:'a tie in the bag',ico:'👔',c:'o'}], traceWord: 'tie' }
          ],
          qaList: [
            { q: 'Have you ever looked at a tree root?', scene: '🌳🌱👀', ans: 'Yes, I have', opts: [{ txt: 'Yes, I have', ico: '🌱' }, { txt: 'I am at the bank', ico: '🏦' }, { txt: 'It is a red bag', ico: '🎒' }] },
            { q: 'Has your doctor asked you to drink plenty of water?', scene: '👨‍⚕️🥤🧺', ans: 'Yes, she has', opts: [{ txt: 'Yes, she has', ico: '👩‍⚕️' }, { txt: 'Two big cats', ico: '🐱' }, { txt: 'In the kitchen', ico: '🍳' }] },
            { q: 'Do you strongly agree with the doctor?', scene: '👨‍⚕️💪👍', ans: 'Yes, I strongly agree', opts: [{ txt: 'Yes, I strongly agree', ico: '💪' }, { txt: 'It is on the table', ico: '🍽️' }, { txt: 'A blue shirt', ico: '👕' }] },
            { q: 'What does a healthy breakfast consist of?', scene: '🍳🥛🍎', ans: 'It consists of fruit and milk', opts: [{ txt: 'It consists of fruit and milk', ico: '🍎🥛' }, { txt: 'It is in the park', ico: '🌳' }, { txt: 'She is a nurse', ico: '👩‍⚕️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn "Bạn Đã Từng...?"',
            steps: [
              '<b>Bước 1:</b> Viết 6 địa điểm lên giấy (🏥 hospital, 🌲 forest, 🏖️ beach, 🏫 school...). Mỗi tờ một nơi.',
              '<b>Bước 2:</b> Hỏi một bạn (hoặc tự hỏi mình trước gương): <i>"Have you ever been to the hospital?"</i> và trả lời ngắn <i>"Yes, I have"</i> hoặc <i>"No, I haven\'t"</i>.',
              '<b>Bước 3:</b> Ghi kết quả vào bảng ✅ / ❌, rồi nói một câu đầy đủ như <i>"I have been to the forest"</i> cho mỗi dấu ✅.'
            ]
          }
        },
        {
          id: '4.6B', name: 'Bài 4.6B: Cơ thể thay đổi theo tuổi',
          grammar: {
            formulas: ['👦 He + ⚡ is + 📏 much / a bit / slightly + taller + than + 👧 her', '🎸 This + ⚡ is + 📉 less + expensive + than + 🎹 that'],
            tip: 'Much = hơn nhiều, a bit / slightly = hơn một chút • "less ... than" = ít hơn, và sau less không thêm -er!'
          },
          chunks: [
            { scene: '🧍😊✨', full: 'Her appearance is a bit better than before', parts: [{t:'Her appearance',ico:'🧍',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a bit better than before',ico:'✨',c:'o'}], traceWord: 'appearance' },
            { scene: '🛏️🧸☁️', full: 'This blanket is much softer than that one', parts: [{t:'This blanket',ico:'🛏️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'much softer than that one',ico:'🧸',c:'o'}], traceWord: 'softer' },
            { scene: '🎒🫙💨', full: 'My bag is a bit emptier than your bag', parts: [{t:'My bag',ico:'🎒',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a bit emptier than your bag',ico:'🫙',c:'o'}], traceWord: 'emptier' },
            { scene: '🐯🐱🌳', full: 'A tiger is much wilder than a cat', parts: [{t:'A tiger',ico:'🐯',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'much wilder than a cat',ico:'🐱',c:'o'}], traceWord: 'wilder' },
            { scene: '🎻🎸💰', full: 'This instrument is less expensive than that guitar', parts: [{t:'This instrument',ico:'🎻',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'less expensive than that guitar',ico:'🎸',c:'o'}], traceWord: 'instrument' },
            { scene: '⭐💡🤔', full: 'The principal reason is much simpler than that', parts: [{t:'The principal reason',ico:'⭐',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'much simpler than that',ico:'💡',c:'o'}], traceWord: 'principal' },
            { scene: '🏷️👟💵', full: 'This brand is much cheaper than the other brand', parts: [{t:'This brand',ico:'🏷️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'much cheaper than the other brand',ico:'💵',c:'o'}], traceWord: 'brand' },
            { scene: '🏠💵⬇️', full: 'The rent here is a bit lower than before', parts: [{t:'The rent here',ico:'🏠',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a bit lower than before',ico:'⬇️',c:'o'}], traceWord: 'rent' }
          ],
          qaList: [
            { q: 'Can you predict who will graduate first?', scene: '🔮🎓👦', ans: 'Tom will graduate a bit earlier', opts: [{ txt: 'Tom will graduate a bit earlier', ico: '🎓' }, { txt: 'She is on the bus', ico: '🚌' }, { txt: 'A red apple', ico: '🍎' }] },
            { q: 'Which hurts less, the shot or the headache?', scene: '📸🤕😖', ans: 'The shot hurts much less', opts: [{ txt: 'The shot hurts much less', ico: '💉' }, { txt: 'The shot is in the fridge', ico: '🧊' }, { txt: 'The headache is a blue chair', ico: '🪑' }] },
            { q: 'Does the association license new taxi drivers?', scene: '🤝📜🚕', ans: 'Yes, it does', opts: [{ txt: 'Yes, it does', ico: '📜' }, { txt: 'I like blue shoes', ico: '👟' }, { txt: 'It is in a box', ico: '📦' }] },
            { q: 'Will you succeed if you study seriously till night?', scene: '😐📚🏆', ans: 'Yes, I will', opts: [{ txt: 'Yes, I will', ico: '🏆' }, { txt: 'He is a big cow', ico: '🐄' }, { txt: 'On the green grass', ico: '🌿' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cuộc Thi So Sánh Đồ Vật',
            steps: [
              '<b>Bước 1:</b> Lấy 6 đồ vật trong nhà (🧸 gối mềm, 🎒 cặp rỗng, 📚 sách...). Xếp thành hai hàng để so sánh từng cặp.',
              '<b>Bước 2:</b> Với mỗi cặp, nói một câu như <i>"This pillow is much softer than that book"</i> hoặc <i>"My bag is a bit emptier than your bag"</i>.',
              '<b>Bước 3:</b> Đổi vai cho bạn. Ai nói đúng cấu trúc <i>"less ... than"</i> được thêm 1 điểm; ai được 5 điểm trước thì thắng.'
            ]
          }
        },
        {
          id: '4.6C', name: 'Bài 4.6C: Kỷ lục và điều tuyệt nhất',
          grammar: {
            formulas: ['⭐ This + ⚡ is + 🏆 the best journey + 👦 I + ⚡ have ever + 📖 had', '⭐ It + ⚡ is + 🏆 the most musical show + 👦 I + ⚡ have ever + 👀 watched'],
            tip: 'Điều tuyệt nhất trong đời: "the best/the most ... I have ever + V3" — luôn có "ever" và động từ cột 3!'
          },
          chunks: [
            { scene: '🧳🌄😍', full: 'This is the best journey I have ever had', parts: [{t:'This',ico:'🧳',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best journey I have ever had',ico:'🌄',c:'o'}], traceWord: 'journey' },
            { scene: '🎖️🏅😊', full: 'This medal is the best honor I have ever had', parts: [{t:'This medal',ico:'🏅',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best honor I have ever had',ico:'🎖️',c:'o'}], traceWord: 'honor' },
            { scene: '🎵🎭👀', full: 'It is the most musical show I have ever watched', parts: [{t:'It',ico:'🎭',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the most musical show I have ever watched',ico:'🎵',c:'o'}], traceWord: 'musical' },
            { scene: '🔒🔑✅', full: 'This is the most suitable lock I have ever tried', parts: [{t:'This',ico:'🔒',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the most suitable lock I have ever tried',ico:'✅',c:'o'}], traceWord: 'lock' },
            { scene: '💬📖👍', full: 'It is the best explanation I have ever read', parts: [{t:'It',ico:'📖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best explanation I have ever read',ico:'💬',c:'o'}], traceWord: 'explanation' },
            { scene: '🧑‍🎓🎉🎪', full: 'This is the happiest youth festival I have ever visited', parts: [{t:'This',ico:'🎪',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the happiest youth festival I have ever visited',ico:'🧑‍🎓',c:'o'}], traceWord: 'youth' },
            { scene: '🧪🔬👦', full: 'This is the best chemical test I have ever done', parts: [{t:'This',ico:'🧪',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best chemical test I have ever done',ico:'🔬',c:'o'}], traceWord: 'chemical' },
            { scene: '💡👨🙏', full: 'It is the best tip I have ever been given', parts: [{t:'It',ico:'💡',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best tip I have ever been given',ico:'🙏',c:'o'}], traceWord: 'tip' }
          ],
          qaList: [
            { q: 'Has a native speaker ever blamed you for a mistake?', scene: '🗣️👉😟', ans: 'No, nobody would blame me', opts: [{ txt: 'No, nobody would blame me', ico: '🙂' }, { txt: 'A big yellow bus', ico: '🚌' }, { txt: 'It is under the bed', ico: '🛏️' }] },
            { q: 'Have we ever been anywhere better than here?', scene: '📍👥🌈', ans: 'No, we enjoy ourselves best here', opts: [{ txt: 'No, we enjoy ourselves best here', ico: '👥' }, { txt: 'Yes, a red hat', ico: '🎩' }, { txt: 'He is my uncle', ico: '👨' }] },
            { q: 'Does your teacher have a nice personality?', scene: '👩‍🏫🧑‍🎤😊', ans: 'Yes, she has the best personality', opts: [{ txt: 'Yes, she has the best personality', ico: '🧑‍🎤' }, { txt: 'It is on the wall', ico: '🧱' }, { txt: 'Two green apples', ico: '🍏' }] },
            { q: 'Will your grandpa retire this year?', scene: '👴🌴📅', ans: 'No, he will retire next year', opts: [{ txt: 'No, he will retire next year', ico: '🌴' }, { txt: 'In the cold water', ico: '🥶' }, { txt: 'She has a small dog', ico: '🐶' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảng Kỷ Lục Của Tôi',
            steps: [
              '<b>Bước 1:</b> Vẽ một bảng "My Records" với 5 dòng: 🧳 journey, 🎬 show, 🍜 food, 📖 book, 💡 tip.',
              '<b>Bước 2:</b> Với mỗi dòng, viết một câu về điều tuyệt nhất của bạn, ví dụ <i>"It is the best tip I have ever been given"</i> hoặc <i>"This is the best journey I have ever had"</i>.',
              '<b>Bước 3:</b> Đọc bảng cho một bạn nghe, rồi hỏi lại bạn ấy: <i>"What is the best show you have ever watched?"</i> và ghi câu trả lời.'
            ]
          }
        }
      ]
    },
    '4.7': {
      lessons: [
        {
        id: '4.7A',
        name: 'Bài 4.7A: Tả ngôi nhà và phòng ở',
        grammar: {
        formulas: ['🏠 This is + 🚪 the room + 📍 where + 👦 I sleep', '👦 I know + 🧑 a boy + 🔑 whose + 🎒 joke is funny'],
        tip: 'Dùng where nói về NƠI CHỐN (phòng, nhà), dùng whose nói về đồ của AI ĐÓ (whose joke = trò đùa của cậu ấy)!'
        },
        chunks: [
        { scene: '🍳🍽️🏠', full: 'This is the kitchen where we wash the plate.', parts: [{t:'This',ico:'👉',c:'s'},{t:'is',ico:'🟰',c:'v'},{t:'the kitchen where we wash the plate',ico:'🍽️',c:'o'}], traceWord: 'plate' },
        { scene: '💂🚪🏠', full: 'The guard sits in the room where we meet.', parts: [{t:'The guard',ico:'💂',c:'s'},{t:'sits',ico:'🪑',c:'v'},{t:'in the room where we meet',ico:'🏠',c:'o'}], traceWord: 'guard' },
        { scene: '👦😂🤣', full: 'I know a boy whose joke is very funny.', parts: [{t:'I',ico:'🙋',c:'s'},{t:'know',ico:'🧠',c:'v'},{t:'a boy whose joke is very funny',ico:'😂',c:'o'}], traceWord: 'joke' },
        { scene: '🧑‍💼🏡🛋️', full: 'The chairman has a house where people can relax.', parts: [{t:'The chairman',ico:'🧑‍💼',c:'s'},{t:'has',ico:'🤲',c:'v'},{t:'a house where people can relax',ico:'🏡',c:'o'}], traceWord: 'chairman' },
        { scene: '🚌🧍🪑', full: 'The passenger has a chair whose leg is weak.', parts: [{t:'The passenger',ico:'🚌',c:'s'},{t:'has',ico:'🤲',c:'v'},{t:'a chair whose leg is weak',ico:'🪑',c:'o'}], traceWord: 'weak' },
        { scene: '🚪📣👂', full: 'This is the door where I hear a shout.', parts: [{t:'This',ico:'👉',c:'s'},{t:'is',ico:'🟰',c:'v'},{t:'the door where I hear a shout',ico:'📣',c:'o'}], traceWord: 'shout' },
        { scene: '👧🤝✨🛏️', full: 'Anna is the helpful girl whose room is attractive.', parts: [{t:'Anna',ico:'👧',c:'s'},{t:'is',ico:'🟰',c:'v'},{t:'the helpful girl whose room is attractive',ico:'✨',c:'o'}], traceWord: 'attractive' },
        { scene: '2️⃣🏠📚', full: 'I have two rooms, and the latter is where I study.', parts: [{t:'I',ico:'🙋',c:'s'},{t:'have',ico:'🤲',c:'v'},{t:'two rooms, and the latter is where I study',ico:'📚',c:'o'}], traceWord: 'latter' }
        ],
        qaList: [
        { q: 'What is the guard\'s complaint?', scene: '💂🦹💬', ans: 'A thief tries to steal money.', opts: [{txt:'A thief tries to steal money.',ico:'🦹'},{txt:'A thief tries to dance in the rain.',ico:'🌧️'},{txt:'A thief wants to give money.',ico:'🎁'}] },
        { q: 'Where does the rabbit disappear?', scene: '🎩🐇✨', ans: 'It disappears into the hat.', opts: [{txt:'It disappears into the hat.',ico:'🎩'},{txt:'It disappears into the soup.',ico:'🍲'},{txt:'It disappears into the shoe.',ico:'👟'}] },
        { q: 'Why does Tom run to school?', scene: '🏃⏰🏫', ans: 'He is in a rush because he is late.', opts: [{txt:'He is in a rush because he is late.',ico:'🏃'},{txt:'He is relaxed because he has time.',ico:'😌'},{txt:'He is asleep because he is tired.',ico:'😴'}] },
        { q: 'Which girl has intelligence and a kind tone?', scene: '👧🧠🎶', ans: 'The girl whose tone is kind.', opts: [{txt:'The girl whose tone is kind.',ico:'😊'},{txt:'The girl whose tone is rude.',ico:'😠'},{txt:'The girl whose tone is angry.',ico:'😡'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Hướng dẫn viên ngôi nhà',
        steps: ['<b>Bước 1:</b> Đi một vòng quanh nhà, dừng ở 3 phòng và nói <i>"This is the room where I sleep."</i> (thay phòng và việc làm cho đúng).', '<b>Bước 2:</b> Chọn 3 đồ vật của bạn bè hoặc người nhà và nói <i>"This is the book whose cover is red."</i> để chỉ đồ của ai đó.', '<b>Bước 3:</b> Viết 3 câu dùng where hoặc whose vào vở, rồi đọc to cho bạn nghe và hỏi bạn xem câu nào đúng nhất.']
        }
        },
        {
        id: '4.7B',
        name: 'Bài 4.7B: Lịch sử khu phố',
        grammar: {
        formulas: ['🏛️ The temple + ⚡ was visited + 👥 by many people', '🏠 The houses + ⚡ were repaired + 👷 by workers'],
        tip: 'Bị động quá khứ: số ít dùng was, số nhiều dùng were, rồi thêm động từ cột 3 (V3) — người làm việc đứng sau by!'
        },
        chunks: [
        { scene: '🏺🛕👥', full: 'The ancient temple was visited by many people.', parts: [{t:'The ancient temple',ico:'🛕',c:'s'},{t:'was visited',ico:'🚶',c:'v'},{t:'by many people',ico:'👥',c:'o'}], traceWord: 'ancient' },
        { scene: '🏫🚪🤒', full: 'The school was closed because the teacher was ill.', parts: [{t:'The school',ico:'🏫',c:'s'},{t:'was closed',ico:'🔒',c:'v'},{t:'because the teacher was ill',ico:'🤒',c:'o'}], traceWord: 'ill' },
        { scene: '🏬🐘🎉', full: 'The enormous market was opened in 1990.', parts: [{t:'The enormous market',ico:'🐘',c:'s'},{t:'was opened',ico:'🎉',c:'v'},{t:'in 1990',ico:'📅',c:'o'}], traceWord: 'enormous' },
        { scene: '🚪💨🌬️', full: 'The old door was shut by the wind.', parts: [{t:'The old door',ico:'🚪',c:'s'},{t:'was shut',ico:'🚪',c:'v'},{t:'by the wind',ico:'🌬️',c:'o'}], traceWord: 'shut' },
        { scene: '🌳👨‍👩‍👧🌐', full: 'The park was widely used by families.', parts: [{t:'The park',ico:'🌳',c:'s'},{t:'was widely used',ico:'🌐',c:'v'},{t:'by families',ico:'👨‍👩‍👧',c:'o'}], traceWord: 'widely' },
        { scene: '🧭🏖️🧹', full: 'The east coast was cleaned by students.', parts: [{t:'The east coast',ico:'🏖️',c:'s'},{t:'was cleaned',ico:'🧹',c:'v'},{t:'by students',ico:'🧑‍🎓',c:'o'}], traceWord: 'east' },
        { scene: '📊🎨🧑‍💼', full: 'The column was painted by an assistant teacher.', parts: [{t:'The column',ico:'📊',c:'s'},{t:'was painted',ico:'🎨',c:'v'},{t:'by an assistant teacher',ico:'🧑‍💼',c:'o'}], traceWord: 'column' },
        { scene: '🏠🔧🌉', full: 'This house was repaired unlike the old bridge.', parts: [{t:'This house',ico:'🏠',c:'s'},{t:'was repaired',ico:'🔧',c:'v'},{t:'unlike the old bridge',ico:'↔️',c:'o'}], traceWord: 'unlike' }
        ],
        qaList: [
        { q: 'Who was the scientific chart created by?', scene: '📈🔬🧑‍🔬', ans: 'It was created by a scientist.', opts: [{txt:'It was created by a scientist.',ico:'🧑‍🔬'},{txt:'It was created by a cat.',ico:'🐱'},{txt:'It was created by a spoon.',ico:'🥄'}] },
        { q: 'Which tree was alive after the storm?', scene: '⛈️🌳💚', ans: 'The green tree was alive.', opts: [{txt:'The green tree was alive.',ico:'🌳'},{txt:'The dead tree was alive.',ico:'🪵'},{txt:'The broken tree was alive.',ico:'💥'}] },
        { q: 'What was the boy advised to do when ill?', scene: '🤒🛏️💡', ans: 'He was advised to sleep and drink water.', opts: [{txt:'He was advised to sleep and drink water.',ico:'🛏️'},{txt:'He was advised to run very fast.',ico:'🏃'},{txt:'He was advised to swim in the cold lake.',ico:'🏊'}] },
        { q: 'What was offered besides bread at the old market?', scene: '🏺🍞🧀', ans: 'Cheese and milk were offered.', opts: [{txt:'Cheese and milk were offered.',ico:'🧀'},{txt:'Rain and wind were offered.',ico:'🌧️'},{txt:'Cars and clouds were offered.',ico:'☁️'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Thám tử lịch sử khu phố',
        steps: ['<b>Bước 1:</b> Hỏi ông bà hoặc hàng xóm về một nơi cũ trong khu phố (chợ, trường, cây cầu) và ghi 3 điều họ kể.', '<b>Bước 2:</b> Viết 3 câu bị động quá khứ từ những điều đó, ví dụ <i>"The market was opened in 1990."</i> hoặc <i>"The bridge was repaired by workers."</i>', '<b>Bước 3:</b> Vẽ một tấm áp phích nhỏ về nơi ấy, dán 3 câu lên và đọc cho bạn hoặc người nhà nghe.']
        }
        },
        {
        id: '4.7C',
        name: 'Bài 4.7C: Quy luật đời thường',
        grammar: {
        formulas: ['❄️ Water + 🧊 freezes + 🌡️ if it gets cold', '🌱 A seed + 📈 grows + 💧 if you give it water'],
        tip: 'Điều luôn đúng thì dùng if + hiện tại, kết quả cũng ở hiện tại — nhớ chủ ngữ số ít thêm s (water freezes)!'
        },
        chunks: [
        { scene: '🏞️❄️🧊', full: 'Water freezes if the lake gets very cold.', parts: [{t:'Water',ico:'💧',c:'s'},{t:'freezes',ico:'🧊',c:'v'},{t:'if the lake gets very cold',ico:'🏞️',c:'o'}], traceWord: 'lake' },
        { scene: '🌱💧☀️', full: 'A seed grows if you give it water.', parts: [{t:'A seed',ico:'🌱',c:'s'},{t:'grows',ico:'📈',c:'v'},{t:'if you give it water',ico:'💧',c:'o'}], traceWord: 'seed' },
        { scene: '🔩🔥🥵', full: 'Metal gets hot if you put it in fire.', parts: [{t:'Metal',ico:'🔩',c:'s'},{t:'gets',ico:'➡️',c:'v'},{t:'hot if you put it in fire',ico:'🔥',c:'o'}], traceWord: 'metal' },
        { scene: '✈️🧑‍✈️😴', full: 'A pilot feels tired if the flight is long.', parts: [{t:'A pilot',ico:'🧑‍✈️',c:'s'},{t:'feels',ico:'😴',c:'v'},{t:'tired if the flight is long',ico:'✈️',c:'o'}], traceWord: 'pilot' },
        { scene: '💻🗣️👫', full: 'People communicate better if they talk online.', parts: [{t:'People',ico:'👥',c:'s'},{t:'communicate',ico:'🗣️',c:'v'},{t:'better if they talk online',ico:'💻',c:'o'}], traceWord: 'online' },
        { scene: '🚪✊👂', full: 'You hear a knock if someone is at the door.', parts: [{t:'You',ico:'🙋',c:'s'},{t:'hear',ico:'👂',c:'v'},{t:'a knock if someone is at the door',ico:'🚪',c:'o'}], traceWord: 'knock' },
        { scene: '🧒📷👴', full: 'People remember their childhood if they look at old photos.', parts: [{t:'People',ico:'👥',c:'s'},{t:'remember',ico:'💭',c:'v'},{t:'their childhood if they look at old photos',ico:'🧒',c:'o'}], traceWord: 'childhood' },
        { scene: '🌟🎨🎵', full: 'A talent grows if you practice every day.', parts: [{t:'A talent',ico:'🌟',c:'s'},{t:'grows',ico:'📈',c:'v'},{t:'if you practice every day',ico:'📅',c:'o'}], traceWord: 'talent' }
        ],
        qaList: [
        { q: 'What do you check if you have an appointment?', scene: '📅⏰🧑‍⚕️', ans: 'I check the calendar.', opts: [{txt:'I check the calendar.',ico:'📅'},{txt:'I check the soup.',ico:'🍲'},{txt:'I check the shoe.',ico:'👟'}] },
        { q: 'What happens if you truly love music and pursue it?', scene: '🎵🎯💯', ans: 'Your skill grows.', opts: [{txt:'Your skill grows.',ico:'📈'},{txt:'Your skill disappears.',ico:'🫥'},{txt:'Your skill turns into metal.',ico:'🔩'}] },
        { q: 'What do people do if the exhibition is full?', scene: '🖼️👥🚶', ans: 'They go elsewhere.', opts: [{txt:'They go elsewhere.',ico:'🧭'},{txt:'They eat the ticket.',ico:'🎫'},{txt:'They sleep in the lake.',ico:'🏞️'}] },
        { q: 'What do you say if you bother someone?', scene: '😒🙏👤', ans: 'I say sorry.', opts: [{txt:'I say sorry.',ico:'🙏'},{txt:'I laugh at them.',ico:'😂'},{txt:'I run away.',ico:'🏃'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Phòng thí nghiệm quy luật',
        steps: ['<b>Bước 1:</b> Làm 3 thử nghiệm nhỏ ở nhà: để nước vào ngăn đá, để một viên đá ngoài nắng, gieo một hạt đậu vào cốc đất ẩm.', '<b>Bước 2:</b> Quan sát rồi viết 3 câu quy luật, ví dụ <i>"Water freezes if it gets very cold."</i> hoặc <i>"A seed grows if you give it water."</i>', '<b>Bước 3:</b> Đố bạn: nói nửa đầu <i>"If you heat ice..."</i> để bạn nói nốt nửa sau, đổi lượt chơi.']
        }
        }
      ]
    },
    '4.8': {
      lessons: [
        {
          id: '4.8A', name: 'Bài 4.8A: Kể lại lời bạn nói',
          grammar: {
            formulas: ['👦 Nam + 🗣️ said that + 🥗 he was on a diet', '👧 Lan + 🗣️ said that + 🧴 the bottle was plastic'],
            tip: 'Kể lại lời bạn thì "lùi" một bước: am/is thành was, will thành would, và nhớ nói "said that"!'
          },
          chunks: [
            { scene: '👦🥗🍎', full: 'Nam said that he was on a diet', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that he was on a diet',ico:'🥗',c:'o'}], traceWord: 'diet' },
            { scene: '👧🧴💧', full: 'Lan said that the bottle was plastic', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the bottle was plastic',ico:'🧴',c:'o'}], traceWord: 'plastic' },
            { scene: '👧🥶🏞️', full: 'Mai said that the lake would freeze at night', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the lake would freeze at night',ico:'🥶',c:'o'}], traceWord: 'freeze' },
            { scene: '👦📜🤔', full: 'Tom said that the passage was unusual', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the passage was unusual',ico:'📜',c:'o'}], traceWord: 'unusual' },
            { scene: '👧🎬🏛️', full: 'Anna said that the film was a classic', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the film was a classic',ico:'🏛️',c:'o'}], traceWord: 'classic' },
            { scene: '👨🔧🚲', full: 'Dad said that the repair was not easy', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the repair was not easy',ico:'🔧',c:'o'}], traceWord: 'repair' },
            { scene: '👧🌍✈️', full: 'Lan said that she lived abroad', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that she lived abroad',ico:'🌍',c:'o'}], traceWord: 'abroad' },
            { scene: '👦⚙️👌', full: 'Tom said that the machine worked perfectly', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the machine worked perfectly',ico:'👌',c:'o'}], traceWord: 'perfectly' }
          ],
          qaList: [
            { q: 'Why did the girl call the police?', scene: '👧📞🚨', ans: 'She said that it was an emergency', opts: [{ txt: 'She said that it was an emergency', ico: '🚨' }, { txt: 'She said that the book was educational', ico: '📖' }, { txt: 'She said that she liked tea', ico: '🍵' }] },
            { q: 'What did Anna say about the slide?', scene: '👧🖥️◐', ans: 'She said that the slide was partly wrong', opts: [{ txt: 'She said that the slide was partly wrong', ico: '🖥️' }, { txt: 'She said that the cake was sweet', ico: '🍰' }, { txt: 'She said that the dog was big', ico: '🐕' }] },
            { q: 'What did the boy say about the winner?', scene: '👦🏆😄', ans: 'He said that the winner was happy', opts: [{ txt: 'He said that the winner was happy', ico: '🏆' }, { txt: 'He said that he was in bed', ico: '🛏️' }, { txt: 'He said that the soup was cold', ico: '🍲' }] },
            { q: 'What did Mai say about the garden?', scene: '👧🌹🌳', ans: 'She said that the beauty of the garden was great', opts: [{ txt: 'She said that the beauty of the garden was great', ico: '🌹' }, { txt: 'She said that the game would confuse him', ico: '😵' }, { txt: 'She said that she was at school', ico: '🏫' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Truyền Tin Nhắn Thì Thầm',
            steps: [
              '<b>Bước 1:</b> Rủ một bạn (hoặc anh chị em), mỗi người viết 4 câu nói ngắn lên giấy, ví dụ <i>"I am hungry"</i>, rồi đọc to cho nhau nghe.',
              '<b>Bước 2:</b> Kể lại lời bạn bằng câu gián tiếp, nhớ lùi thì: <i>"Nam said that he was hungry"</i>.',
              '<b>Bước 3:</b> Đổi vai và thi xem ai kể lại đúng nhiều câu nhất, mỗi câu đúng được 1 điểm.'
            ]
          }
        },
        {
          id: '4.8B', name: 'Bài 4.8B: Tin đồn và tin tức',
          grammar: {
            formulas: ['👨 Dad + 🗣️ said + 💬 that the roof was wet', '👩 Mom + 👂 told me + 💬 that the storm was strong', '👧 Anna + ❓ asked me + 🎨 to draw the landscape'],
            tip: 'Say không cần "me/us" đứng sau, còn tell và ask thì phải có người nghe: told me, asked us!'
          },
          chunks: [
            { scene: '👩⛈️💨', full: 'Mom told me that the storm was strong', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'told me',ico:'👂',c:'v'}, {t:'that the storm was strong',ico:'⛈️',c:'o'}], traceWord: 'storm' },
            { scene: '👨🏠💧', full: 'Dad said that the roof was wet', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the roof was wet',ico:'🏠',c:'o'}], traceWord: 'roof' },
            { scene: '👧👦😟', full: 'Lan told Tom that she was upset', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'told Tom',ico:'👦',c:'v'}, {t:'that she was upset',ico:'😟',c:'o'}], traceWord: 'upset' },
            { scene: '👧👂📍❓', full: 'Mai told us about the unknown zone', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'told us',ico:'👂',c:'v'}, {t:'about the unknown zone',ico:'❓',c:'o'}], traceWord: 'zone' },
            { scene: '👩‍🏫🤫👦👧', full: 'The teacher asked us for silence', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'asked us',ico:'❓',c:'v'}, {t:'for silence',ico:'🤫',c:'o'}], traceWord: 'silence' },
            { scene: '👦🙇💬', full: 'Tom told me that it was his fault', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'told me',ico:'👂',c:'v'}, {t:'that it was his fault',ico:'🙇',c:'o'}], traceWord: 'fault' },
            { scene: '👧🙏🌊', full: 'She told me she was deeply grateful', parts: [{t:'She',ico:'👧',c:'s'}, {t:'told me',ico:'👂',c:'v'}, {t:'she was deeply grateful',ico:'🙏',c:'o'}], traceWord: 'grateful' },
            { scene: '👧🏞️🎨', full: 'Anna asked me to draw the landscape', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'asked me',ico:'❓',c:'v'}, {t:'to draw the landscape',ico:'🏞️',c:'o'}], traceWord: 'landscape' }
          ],
          qaList: [
            { q: 'What did Nam say about the advertisement?', scene: '👦📺😄', ans: 'He said that the advertisement was funny', opts: [{ txt: 'He said that the advertisement was funny', ico: '📺' }, { txt: 'He told me to sit down', ico: '🪑' }, { txt: 'He asked me for a pen', ico: '🖊️' }] },
            { q: 'What did Lan tell you about the weather?', scene: '👧🌧️⚡', ans: 'She told me about the sudden rain', opts: [{ txt: 'She told me about the sudden rain', ico: '🌧️' }, { txt: 'She asked me if I had a pen', ico: '🖊️' }, { txt: 'She said that the soup was hot', ico: '🍲' }] },
            { q: 'What did Mai ask you?', scene: '👧💍🥈', ans: 'She asked me if my ring was silver', opts: [{ txt: 'She asked me if my ring was silver', ico: '🥈' }, { txt: 'She told me to close the window', ico: '🪟' }, { txt: 'She said that the tea was ready', ico: '🍵' }] },
            { q: 'What did the teacher tell the class?', scene: '👩‍🏫✂️👦👧', ans: 'She told us to split into two groups', opts: [{ txt: 'She told us to split into two groups', ico: '✂️' }, { txt: 'She said that the entertainment was over', ico: '🎭' }, { txt: 'She asked us for a pencil', ico: '✏️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phóng Viên Nhí Đưa Tin',
            steps: [
              '<b>Bước 1:</b> Chuẩn bị 3 mẩu giấy ghi tin ngắn như <i>"The storm is strong"</i>; bạn là phóng viên, rút giấy và đọc cho cả nhóm.',
              '<b>Bước 2:</b> Một bạn khác kể lại bằng đúng động từ: <i>"He said that..."</i>, <i>"He told me that..."</i> hoặc <i>"He asked me to..."</i>.',
              '<b>Bước 3:</b> Đổi vai phóng viên, ai dùng đúng say, tell, ask nhiều nhất là người thắng.'
            ]
          }
        },
        {
          id: '4.8C', name: 'Bài 4.8C: Cảm nhận về phim và sách',
          grammar: {
            formulas: ['📺 The episode + ⚡ is + 🤩 exciting', '👦 I + ⚡ am + 😴 bored', '🎬 The movie + ⚡ is + 😱 frightening'],
            tip: 'Tính từ -ing tả vật gây ra cảm giác (boring), còn -ed tả người cảm thấy (bored)!'
          },
          chunks: [
            { scene: '📺🤩👦', full: 'The new episode of the show is exciting', parts: [{t:'The new episode of the show',ico:'📺',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'exciting',ico:'🤩',c:'o'}], traceWord: 'episode' },
            { scene: '👦🎬😴', full: 'I am not bored with this film anymore', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am not',ico:'🚫',c:'v'}, {t:'bored with this film anymore',ico:'😴',c:'o'}], traceWord: 'anymore' },
            { scene: '👦📝😬', full: 'Tom is nervous about the big test', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nervous about the big test',ico:'😬',c:'o'}], traceWord: 'nervous' },
            { scene: '🦸🎬🤔', full: 'The hero in this movie is interesting', parts: [{t:'The hero in this movie',ico:'🦸',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'interesting',ico:'🤔',c:'o'}], traceWord: 'hero' },
            { scene: '👴🚪😲', full: 'The elderly man was surprised at the gate', parts: [{t:'The elderly man',ico:'👴',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'surprised at the gate',ico:'🚪',c:'o'}], traceWord: 'elderly' },
            { scene: '🌧️☔😴', full: 'It rained heavily and the day was boring', parts: [{t:'It',ico:'☁️',c:'s'}, {t:'rained',ico:'🌧️',c:'v'}, {t:'heavily and the day was boring',ico:'😴',c:'o'}], traceWord: 'heavily' },
            { scene: '😊👍🎉', full: 'My mood is good because I am pleased', parts: [{t:'My mood',ico:'😊',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'good because I am pleased',ico:'👍',c:'o'}], traceWord: 'mood' },
            { scene: '👩😴🚰', full: 'Mom is tired so she pours water into the sink', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'tired so she pours water into the sink',ico:'🚰',c:'o'}], traceWord: 'pours' }
          ],
          qaList: [
            { q: 'How long is the string?', scene: '🧵📏', ans: 'The string is one meter long', opts: [{ txt: 'The string is one meter long', ico: '📏' }, { txt: 'The pen is very tired', ico: '🖊️' }, { txt: 'The cat is on the bed', ico: '🐱' }] },
            { q: 'How do you feel about the terrorist movie?', scene: '🎬😱⚠️', ans: 'I am frightened', opts: [{ txt: 'I am frightened', ico: '😱' }, { txt: 'I am very hungry', ico: '🍔' }, { txt: 'It is a wooden gate', ico: '🚪' }] },
            { q: 'Why is the boy\'s uniform wet?', scene: '👦🔲💧', ans: 'He is wet because it rained', opts: [{ txt: 'He is wet because it rained', ico: '🌧️' }, { txt: 'He is happy because he is hungry', ico: '🍔' }, { txt: 'He is tired of the string', ico: '🧵' }] },
            { q: 'How tall is the toy?', scene: '🧸📏', ans: 'The toy is ten inches tall', opts: [{ txt: 'The toy is ten inches tall', ico: '📏' }, { txt: 'The toy is very boring', ico: '😴' }, { txt: 'The toy is on the roof', ico: '🏠' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bình Chọn Phim Và Sách',
            steps: [
              '<b>Bước 1:</b> Chọn 4 bộ phim hoặc cuốn sách cả hai bạn đều biết, viết tên vào 4 mẩu giấy.',
              '<b>Bước 2:</b> Bốc từng mẩu và nói cảm nhận: <i>"The movie is exciting. I am excited."</i> hoặc <i>"The book is boring. I am bored."</i>',
              '<b>Bước 3:</b> Bạn kia kiểm tra xem dùng -ing cho vật và -ed cho người có đúng không; đúng thì được 1 điểm.'
            ]
          }
        }
      ]
    },
    '4.9': {
      lessons: [
        {
          id: '4.9A', name: 'Bài 4.9A: Thắng thua trong trận đấu',
          grammar: {
            formulas: ['⚽ Although + 👥 we + 🏃 played badly, + 😄 we had fun', '😞 We lost. + ➡️ However, + 😄 we smiled'],
            tip: 'Although / even though = "mặc dù" — chỉ cần MỘT từ nối trong câu, đừng thêm "but"; còn However đứng đầu câu mới, sau nó có dấu phẩy!'
          },
          chunks: [
            { scene: '⚽😞😄', full: 'We had fun although we played badly', parts: [{t:'We',ico:'👥',c:'s'}, {t:'had',ico:'🎉',c:'v'}, {t:'fun although we played badly',ico:'😞',c:'o'}], traceWord: 'badly' },
            { scene: '🏆😢🧑‍🏫', full: 'Although our team lost, the coach was brilliant', parts: [{t:'Although our team',ico:'👥',c:'s'}, {t:'lost,',ico:'😢',c:'v'}, {t:'the coach was brilliant',ico:'✨',c:'o'}], traceWord: 'brilliant' },
            { scene: '📝😴👦', full: 'Tom writes an essay even though he is tired', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'writes',ico:'✍️',c:'v'}, {t:'an essay even though he is tired',ico:'📝',c:'o'}], traceWord: 'essay' },
            { scene: '😱🛡️👧', full: 'The scream does not frighten me even though it is long', parts: [{t:'The scream',ico:'😱',c:'s'}, {t:'does not frighten',ico:'😨',c:'v'}, {t:'me even though it is long',ico:'👧',c:'o'}], traceWord: 'frighten' },
            { scene: '🏢🛋️🏠', full: 'The apartment is small, however it has nice furniture', parts: [{t:'The apartment',ico:'🏢',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'small, however it has nice furniture',ico:'🛋️',c:'o'}], traceWord: 'furniture' },
            { scene: '👕👖😊', full: 'Although the shirt is loose, he likes it', parts: [{t:'Although the shirt',ico:'👕',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'loose, he likes it',ico:'👖',c:'o'}], traceWord: 'loose' },
            { scene: '💰🏆😌', full: 'Wealth is a symbol of success although it is not joy', parts: [{t:'Wealth',ico:'💰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a symbol of success although it is not joy',ico:'➕',c:'o'}], traceWord: 'symbol' },
            { scene: '⚽📈💪', full: 'We learn gradually even though the game is hard', parts: [{t:'We',ico:'👥',c:'s'}, {t:'learn',ico:'📚',c:'v'}, {t:'gradually even though the game is hard',ico:'📈',c:'o'}], traceWord: 'gradually' }
          ],
          qaList: [
            { q: 'What was the weather like at the match?', scene: '🌧️⚽😖', ans: 'The weather was awful', opts: [{txt:'The weather was awful',ico:'😖'}, {txt:'The weather was sunny',ico:'☀️'}, {txt:'The weather was hot',ico:'🔥'}] },
            { q: 'What does the mouse see near the cheese?', scene: '🐭🧀🪤', ans: 'The mouse sees a trap', opts: [{txt:'The mouse sees a trap',ico:'🪤'}, {txt:'The mouse sees a bus',ico:'🚌'}, {txt:'The mouse sees a king',ico:'👑'}] },
            { q: 'Where does the singer look at her face?', scene: '🎤👩🪞', ans: 'She looks in the mirror', opts: [{txt:'She looks in the mirror',ico:'🪞'}, {txt:'She looks in the soup',ico:'🍲'}, {txt:'She looks in the shoe',ico:'👟'}] },
            { q: 'Which word means a short song?', scene: '🎵🎶🎤', ans: 'A tune', opts: [{txt:'A tune',ico:'🎵'}, {txt:'A trap',ico:'🪤'}, {txt:'A shirt',ico:'👕'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thắng thua vẫn vui',
            steps: [
              '<b>Bước 1:</b> Chơi một trò nhỏ với bạn (oẳn tù tì, ném bóng vào hộp). Ghi lại kết quả thắng hoặc thua của mỗi người.',
              '<b>Bước 2:</b> Sau mỗi ván, nói một câu có although hoặc even though, ví dụ <i>"We had fun although we played badly."</i>',
              '<b>Bước 3:</b> Viết thêm 2 câu với However, ví dụ <i>"I lost. However, I smiled."</i> rồi đọc cho bạn nghe.'
            ]
          }
        },
        {
          id: '4.9B', name: 'Bài 4.9B: Câu lạc bộ và đội nhóm',
          grammar: {
            formulas: ['👦 I + ⚡ can adjust + 🥅 the net myself', '👥 The players + 🤝 help + 🔁 each other', '👧 She + 💪 prepares + 🪞 herself'],
            tip: 'Mình làm cho mình thì dùng myself / himself / themselves; hai người làm cho nhau thì dùng each other — nhớ: I → myself, they → themselves!'
          },
          chunks: [
            { scene: '👦🔧🥅', full: 'I can adjust the net myself', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can adjust',ico:'🔧',c:'v'}, {t:'the net myself',ico:'🥅',c:'o'}], traceWord: 'adjust' },
            { scene: '👧😎📆', full: 'Mai feels confident about herself nowadays', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'feels',ico:'💓',c:'v'}, {t:'confident about herself nowadays',ico:'😎',c:'o'}], traceWord: 'confident' },
            { scene: '👥🤝🚪', full: 'The players help each other at the entrance', parts: [{t:'The players',ico:'👥',c:'s'}, {t:'help',ico:'🤝',c:'v'}, {t:'each other at the entrance',ico:'🚪',c:'o'}], traceWord: 'entrance' },
            { scene: '👥🔁📚', full: 'We practice regularly and teach ourselves new skills', parts: [{t:'We',ico:'👥',c:'s'}, {t:'practice',ico:'🏃',c:'v'}, {t:'regularly and teach ourselves new skills',ico:'🔁',c:'o'}], traceWord: 'regularly' },
            { scene: '👦↪️🤸', full: 'Tom does not harm himself when he bends', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'does not harm',ico:'⚠️',c:'v'}, {t:'himself when he bends',ico:'↪️',c:'o'}], traceWord: 'bends' },
            { scene: '👧🎨🌐', full: 'The creative girls make a web page themselves', parts: [{t:'The creative girls',ico:'🎨',c:'s'}, {t:'make',ico:'🛠️',c:'v'}, {t:'a web page themselves',ico:'🌐',c:'o'}], traceWord: 'web' },
            { scene: '👦🕊️🍳', full: 'My brother wants independence and cooks for himself', parts: [{t:'My brother',ico:'👦',c:'s'}, {t:'wants',ico:'💭',c:'v'}, {t:'independence and cooks for himself',ico:'🕊️',c:'o'}], traceWord: 'independence' },
            { scene: '👧📝🤩', full: 'Lan prepares herself for the exam to impress them', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'prepares',ico:'📖',c:'v'}, {t:'herself for the exam to impress them',ico:'📝',c:'o'}], traceWord: 'impress' }
          ],
          qaList: [
            { q: 'What does the boy see behind himself in the sun?', scene: '☀️👦👤', ans: 'He sees his shadow', opts: [{txt:'He sees his shadow',ico:'👤'}, {txt:'He sees his lunch',ico:'🍱'}, {txt:'He sees his pencil',ico:'✏️'}] },
            { q: 'Which planet do we live on?', scene: '🪐🌍👨‍👩‍👧', ans: 'We live on planet Earth', opts: [{txt:'We live on planet Earth',ico:'🌍'}, {txt:'We live on the moon',ico:'🌙'}, {txt:'We live on the sun',ico:'☀️'}] },
            { q: 'How does the new ball feel?', scene: '⚽🧈✋', ans: 'The ball feels smooth', opts: [{txt:'The ball feels smooth',ico:'🧈'}, {txt:'The ball feels hungry',ico:'🍔'}, {txt:'The ball feels married',ico:'💍'}] },
            { q: 'Who has inner strength, the player or the chair?', scene: '🏃💪🪑', ans: 'The player has inner strength', opts: [{txt:'The player has inner strength',ico:'🎯'}, {txt:'The chair has inner strength',ico:'🪑'}, {txt:'The table has inner strength',ico:'🍽️'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đội nhóm tự lập',
            steps: [
              '<b>Bước 1:</b> Rủ một bạn tập một động tác thể thao (nhảy dây, tung bóng). Mỗi người tự chỉnh dụng cụ của mình và nói <i>"I adjust the rope myself."</i>',
              '<b>Bước 2:</b> Hai bạn giúp nhau sửa động tác và nói <i>"We help each other."</i> Khi cả nhóm làm tốt, nói <i>"They do it themselves."</i>',
              '<b>Bước 3:</b> Viết ra 3 câu về đội của mình có myself, themselves hoặc each other, rồi đọc to cho nhau nghe.'
            ]
          }
        },
        {
          id: '4.9C', name: 'Bài 4.9C: Hỏi lại cho chắc',
          grammar: {
            formulas: ['👤 You set the alarm + ❓ didn\'t you?', '🙋 You can lend me a pen + ❓ can\'t you?', '🚰 Don\'t leave the tap open + ❓ will you?'],
            tip: 'Câu khẳng định thì đuôi phủ định, câu phủ định thì đuôi khẳng định; quá khứ dùng did, modal dùng lại modal, mệnh lệnh dùng will you!'
          },
          chunks: [
            { scene: '⏰👤❓', full: 'You set the alarm, didn\'t you', parts: [{t:'You',ico:'👤',c:'s'}, {t:'set',ico:'⚙️',c:'v'}, {t:'the alarm, didn\'t you',ico:'🚨',c:'o'}], traceWord: 'alarm' },
            { scene: '🤫👩‍🏫❓', full: 'We did not disturb the teacher, did we', parts: [{t:'We',ico:'👥',c:'s'}, {t:'did not disturb',ico:'🤫',c:'v'}, {t:'the teacher, did we',ico:'👩‍🏫',c:'o'}], traceWord: 'disturb' },
            { scene: '🌊🏠😟', full: 'The flood was bad, wasn\'t it', parts: [{t:'The flood',ico:'🌊',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'bad, wasn\'t it',ico:'😟',c:'o'}], traceWord: 'flood' },
            { scene: '🤲🖊️👦', full: 'You can lend me a pen, can\'t you', parts: [{t:'You',ico:'👤',c:'s'}, {t:'can lend',ico:'🤲',c:'v'}, {t:'me a pen, can\'t you',ico:'🖊️',c:'o'}], traceWord: 'lend' },
            { scene: '🚰🚫💧', full: 'Don\'t leave the tap open, will you', parts: [{t:'Don\'t leave',ico:'🚫',c:'v'}, {t:'the tap open,',ico:'🚰',c:'o'}, {t:'will you',ico:'👤',c:'s'}], traceWord: 'tap' },
            { scene: '👧🙏👩‍🏫', full: 'Mai apologized to her teacher, didn\'t she', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'apologized',ico:'🙏',c:'v'}, {t:'to her teacher, didn\'t she',ico:'👩‍🏫',c:'o'}], traceWord: 'apologized' },
            { scene: '☀️✈️😊', full: 'It is a pleasant day overseas, isn\'t it', parts: [{t:'It',ico:'☀️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a pleasant day overseas, isn\'t it',ico:'✈️',c:'o'}], traceWord: 'pleasant' },
            { scene: '👨👎🤪', full: 'He criticized the crazy plan, didn\'t he', parts: [{t:'He',ico:'👨',c:'s'}, {t:'criticized',ico:'👎',c:'v'}, {t:'the crazy plan, didn\'t he',ico:'🤪',c:'o'}], traceWord: 'crazy' }
          ],
          qaList: [
            { q: 'Which word tells us boy or girl?', scene: '👦👧❓', ans: 'The word is gender', opts: [{txt:'The word is gender',ico:'⚧️'}, {txt:'The word is desert',ico:'🏜️'}, {txt:'The word is summary',ico:'📋'}] },
            { q: 'Where is it very hot and dry, with little water?', scene: '🏜️☀️🌵', ans: 'It is in the desert', opts: [{txt:'It is in the desert',ico:'🏜️'}, {txt:'It is in the sea',ico:'🌊'}, {txt:'It is in the lake',ico:'🏞️'}] },
            { q: 'Which part of your face do you smile with?', scene: '😊👄❓', ans: 'I smile with my lips', opts: [{txt:'I smile with my lips',ico:'👄'}, {txt:'I smile with my knees',ico:'🦵'}, {txt:'I smile with my shoes',ico:'👟'}] },
            { q: 'Who writes a summary after reading a book?', scene: '📖🧑📋', ans: 'A teenager writes a summary', opts: [{txt:'A teenager writes a summary',ico:'🧑'}, {txt:'A table writes a summary',ico:'🪑'}, {txt:'A cloud writes a summary',ico:'☁️'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hỏi lại cho chắc',
            steps: [
              '<b>Bước 1:</b> Cùng một bạn nói 5 điều về hôm qua, ví dụ <i>"You played football, didn\'t you?"</i> Bạn trả lời Yes hoặc No.',
              '<b>Bước 2:</b> Đổi sang modal và câu mệnh lệnh, ví dụ <i>"You can lend me a pen, can\'t you?"</i> và <i>"Don\'t be late, will you?"</i>',
              '<b>Bước 3:</b> Viết 4 câu hỏi đuôi của riêng bạn lên giấy, đổi giấy cho nhau và cùng kiểm tra đuôi đã đúng chưa.'
            ]
          }
        }
      ]
    },
    '4.10': {
      lessons: [
        {
          id: '4.10A', name: 'Bài 4.10A: Dùng điện thoại, máy tính',
          grammar: {
            formulas: ['📱 The phone + ⚡ was ruined + 💧 by water', '🏨 The hotel + ⚡ is loved + 👥 by tourists', '❓ Was + 📱 the phone + 💥 ruined by water?'],
            tip: 'Bị động = was / is / are + V-ed, còn "người làm" đứng sau by: The phone was ruined by water!'
          },
          chunks: [
            { scene: '📱💧😢', full: 'The old phone was ruined by water', parts: [{t:'The old phone',ico:'📱',c:'s'}, {t:'was ruined',ico:'💥',c:'v'}, {t:'by water',ico:'💧',c:'o'}], traceWord: 'ruined' },
            { scene: '📱👍👫', full: 'This phone is greatly admired by my friends', parts: [{t:'This phone',ico:'📱',c:'s'}, {t:'is greatly admired',ico:'🤝',c:'v'}, {t:'by my friends',ico:'👫',c:'o'}], traceWord: 'greatly' },
            { scene: '🚬🚫🏫', full: 'Cigarettes are not allowed in this school', parts: [{t:'Cigarettes',ico:'🚬',c:'s'}, {t:'are not allowed',ico:'🚫',c:'v'}, {t:'in this school',ico:'🏫',c:'o'}], traceWord: 'cigarettes' },
            { scene: '🎎👨‍👩‍👧‍👦🌸', full: 'The old custom is followed by many people', parts: [{t:'The old custom',ico:'🎎',c:'s'}, {t:'is followed',ico:'👣',c:'v'}, {t:'by many people',ico:'👥',c:'o'}], traceWord: 'custom' },
            { scene: '🏛️🏨🧳', full: 'The architecture of this hotel is loved by tourists', parts: [{t:'The architecture of this hotel',ico:'🏛️',c:'s'}, {t:'is loved',ico:'❤️',c:'v'}, {t:'by tourists',ico:'🧳',c:'o'}], traceWord: 'architecture' },
            { scene: '⚡🚲🔧', full: 'The electric bike was repaired by my father', parts: [{t:'The electric bike',ico:'⚡🚲',c:'s'}, {t:'was repaired',ico:'🔧',c:'v'}, {t:'by my father',ico:'👨',c:'o'}], traceWord: 'electric' },
            { scene: '⛓️👑🤝', full: 'A slave was helped by a kind king', parts: [{t:'A slave',ico:'⛓️',c:'s'}, {t:'was helped',ico:'🤝',c:'v'}, {t:'by a kind king',ico:'👑',c:'o'}], traceWord: 'slave' },
            { scene: '💢🎮👦', full: 'Violent games are not liked by my little brother', parts: [{t:'Violent games',ico:'💢🎮',c:'s'}, {t:'are not liked',ico:'👎',c:'v'}, {t:'by my little brother',ico:'👦',c:'o'}], traceWord: 'violent' }
          ],
          qaList: [
            { q: 'Where was the old box buried?', scene: '📦⚰️🏞️', ans: 'It was buried in the valley', opts: [{ txt: 'It was buried in the valley', ico: '🏞️' }, { txt: 'My sister likes tea', ico: '🍵' }, { txt: 'It is a red bike', ico: '🚲' }] },
            { q: 'Is the float used by the fisherman?', scene: '🎣🎣👨', ans: 'Yes, the float is used by the fisherman', opts: [{ txt: 'Yes, the float is used by the fisherman', ico: '🎣' }, { txt: 'I am at the airport', ico: '✈️' }, { txt: 'She has two cats', ico: '🐱' }] },
            { q: 'Why was Tom mad?', scene: '👦😡📱', ans: 'He had no permission to use it', opts: [{ txt: 'He had no permission to use it', ico: '✅' }, { txt: 'I regret the mistake', ico: '😔' }, { txt: 'It is very big', ico: '🐘' }] },
            { q: 'Is it illegal to use a phone here?', scene: '🚫📱🏫', ans: 'Yes, it is illegal here', opts: [{ txt: 'Yes, it is illegal here', ico: '🚫' }, { txt: 'It is a sunny day', ico: '☀️' }, { txt: 'My brother is happy', ico: '😄' }] }
          ],
          parentGame: {
            title: 'Hoạt động Đời thực (12 phút): Thám Tử Đồ Vật Quanh Nhà',
            steps: [
              '<b>Bước 1:</b> Con chọn 5 đồ vật trong nhà (điện thoại, xe đạp, bàn, sách, cốc) và đoán ai đã dùng hoặc sửa chúng.',
              '<b>Bước 2:</b> Với mỗi đồ vật, con nói một câu bị động, ví dụ <i>"The bike was repaired by my father."</i> hoặc <i>"This phone is used by my mother."</i>',
              '<b>Bước 3:</b> Con và bạn thay phiên hỏi nhau <i>"Was the bike repaired by your father?"</i> rồi trả lời Yes hoặc No bằng cả câu.'
            ]
          }
        },
        {
          id: '4.10B', name: 'Bài 4.10B: Thiết bị hằng ngày',
          grammar: {
            formulas: ['👦 I + 🔛 turn + 📺 the TV on', '👧 She + 🤲 picks + 📱 the phone up', '👦 He + 👕 puts + 🧥 his jacket on'],
            tip: 'Cụm động từ tách được: danh từ chen giữa (turn the TV on), còn đại từ BẮT BUỘC chen giữa: turn it on, không nói turn on it!'
          },
          chunks: [
            { scene: '👧🎮⛳', full: 'Mai turns the fantastic golf game on', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'turns',ico:'🔛',c:'v'}, {t:'the fantastic golf game on',ico:'🎮⛳',c:'o'}], traceWord: 'golf' },
            { scene: '👦💡🌫️', full: 'Tom turns the lamp off to clean the dust', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'turns',ico:'📴',c:'v'}, {t:'the lamp off to clean the dust',ico:'💡🌫️',c:'o'}], traceWord: 'dust' },
            { scene: '👨⚙️🤕', full: 'Dad turns the machine off so nobody is injured', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'turns',ico:'📴',c:'v'}, {t:'the machine off so nobody is injured',ico:'⚙️🤕',c:'o'}], traceWord: 'injured' },
            { scene: '👦🧥🖼️', full: 'He puts his jacket on in the gallery', parts: [{t:'He',ico:'👦',c:'s'}, {t:'puts',ico:'🧥',c:'v'}, {t:'his jacket on in the gallery',ico:'🖼️',c:'o'}], traceWord: 'gallery' },
            { scene: '👩🧂🍽️', full: 'Mom picks the salt up from the table', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'picks',ico:'🤲',c:'v'}, {t:'the salt up from the table',ico:'🧂',c:'o'}], traceWord: 'salt' },
            { scene: '👦💻🏆', full: 'Nam turned the old computer on successfully', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'turned',ico:'🔛',c:'v'}, {t:'the old computer on successfully',ico:'💻🏆',c:'o'}], traceWord: 'successfully' },
            { scene: '👩‍⚕️🩺🫁', full: 'The nurse puts the cold tool on my chest', parts: [{t:'The nurse',ico:'👩‍⚕️',c:'s'}, {t:'puts',ico:'🩺',c:'v'}, {t:'the cold tool on my chest',ico:'🫁',c:'o'}], traceWord: 'chest' },
            { scene: '👦🎒⚖️', full: 'Tom picks up a bag that weighs roughly five kilos', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'picks up',ico:'🤲',c:'v'}, {t:'a bag that weighs roughly five kilos',ico:'🎒⚖️',c:'o'}], traceWord: 'weighs' }
          ],
          qaList: [
            { q: 'Is it acceptable to turn your phone on in class?', scene: '📱🏫🙅', ans: 'No, it is not acceptable', opts: [{ txt: 'No, it is not acceptable', ico: '🙅' }, { txt: 'I put my coat on', ico: '🧥' }, { txt: 'She is at the zoo', ico: '🦁' }] },
            { q: 'Is money more important than friendship?', scene: '💰🤝❓', ans: 'No, friendship is more important', opts: [{ txt: 'No, friendship is more important', ico: '🤝' }, { txt: 'I turn the lamp off', ico: '💡' }, { txt: 'It is a red bag', ico: '🎒' }] },
            { q: 'Do you agree with Tom about the game?', scene: '👦🎮🙅', ans: 'No, I disagree with him', opts: [{ txt: 'No, I disagree with him', ico: '🙅' }, { txt: 'My jacket is blue', ico: '🧥' }, { txt: 'It is in the bag', ico: '🎒' }] },
            { q: 'Is the remote island real?', scene: '🏝️💭❓', ans: 'No, it is only in my imagination', opts: [{ txt: 'No, it is only in my imagination', ico: '💭' }, { txt: 'He picks the salt up', ico: '🧂' }, { txt: 'It is five o\'clock', ico: '🕔' }] }
          ],
          parentGame: {
            title: 'Hoạt động Đời thực (12 phút): Thử Thách Bật - Tắt - Nhặt - Mặc',
            steps: [
              '<b>Bước 1:</b> Con đứng giữa phòng, nhìn quanh và chọn 6 đồ có sẵn: đèn, quạt, điện thoại, áo khoác, cốc, sách.',
              '<b>Bước 2:</b> Con vừa làm động tác vừa nói, ví dụ <i>"I turn the lamp on."</i>, <i>"I pick the book up."</i>, <i>"I put my jacket on."</i> Khi dùng đại từ thì nói <i>"I turn it off."</i>',
              '<b>Bước 3:</b> Con và bạn thay phiên ra lệnh bằng tiếng Anh, bạn làm đúng động tác, ai nói sai vị trí của it thì mất một lượt.'
            ]
          }
        },
        {
          id: '4.10C', name: 'Bài 4.10C: Lỗi máy, nhờ giúp',
          grammar: {
            formulas: ['📱 You + 💬 can chat + 👧 if the phone works', '📁 The file + ⚠️ might be lost + 🚫 unless you save it'],
            tip: 'Unless = "nếu không": sau if / unless dùng thì hiện tại, còn mệnh đề chính dùng can / might / will!'
          },
          chunks: [
            { scene: '📱💬👧', full: 'You can chat with Mai if the phone works', parts: [{t:'You',ico:'👦',c:'s'}, {t:'can chat',ico:'💬',c:'v'}, {t:'with Mai if the phone works',ico:'📱👧',c:'o'}], traceWord: 'chat' },
            { scene: '💻🔥🤖', full: 'The computer will shut down automatically if it is hot', parts: [{t:'The computer',ico:'💻',c:'s'}, {t:'will shut down',ico:'📴',c:'v'}, {t:'automatically if it is hot',ico:'🤖🔥',c:'o'}], traceWord: 'automatically' },
            { scene: '📁⚠️♾️', full: 'The file might be lost forever unless you save it', parts: [{t:'The file',ico:'📁',c:'s'}, {t:'might be lost',ico:'⚠️',c:'v'}, {t:'forever unless you save it',ico:'♾️💾',c:'o'}], traceWord: 'forever' },
            { scene: '🚪🪄🔑', full: 'You can\'t enter unless you know the magic word', parts: [{t:'You',ico:'👦',c:'s'}, {t:'can\'t enter',ico:'🚫',c:'v'}, {t:'unless you know the magic word',ico:'🪄',c:'o'}], traceWord: 'magic' },
            { scene: '🕵️💻🔍', full: 'We might solve the mystery if we search online', parts: [{t:'We',ico:'👫',c:'s'}, {t:'might solve',ico:'🔍',c:'v'}, {t:'the mystery if we search online',ico:'🕵️💻',c:'o'}], traceWord: 'mystery' },
            { scene: '👧😄💌', full: 'Your friend might feel joy if you send a kind message', parts: [{t:'Your friend',ico:'👧',c:'s'}, {t:'might feel',ico:'💭',c:'v'}, {t:'joy if you send a kind message',ico:'😄💌',c:'o'}], traceWord: 'joy' },
            { scene: '📚📷👨‍👩‍👧', full: 'I can tidy the pile of old photos if you help', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can tidy',ico:'🧹',c:'v'}, {t:'the pile of old photos if you help',ico:'📚📷',c:'o'}], traceWord: 'pile' },
            { scene: '🧒🎭🦉', full: 'Children can pretend to be wise kings if they play', parts: [{t:'Children',ico:'🧒',c:'s'}, {t:'can pretend',ico:'🎭',c:'v'}, {t:'to be wise kings if they play',ico:'🦉👑',c:'o'}], traceWord: 'pretend' }
          ],
          qaList: [
            { q: 'What will you do if you find a shell?', scene: '🐚🏖️❓', ans: 'I will keep the shell in a wooden box', opts: [{ txt: 'I will keep the shell in a wooden box', ico: '🐚🪵' }, { txt: 'It is on Monday', ico: '📅' }, { txt: 'She is in the kitchen', ico: '🍳' }] },
            { q: 'Is a fancy phone more important than friends?', scene: '✨📱💰', ans: 'No, a fortune can\'t buy true friends', opts: [{ txt: 'No, a fortune can\'t buy true friends', ico: '💰' }, { txt: 'I have two cats', ico: '🐱' }, { txt: 'It is a wooden box', ico: '📦' }] },
            { q: 'Why do you study hard?', scene: '📖👦👨‍👩‍👦', ans: 'I study for the sake of my family', opts: [{ txt: 'I study for the sake of my family', ico: '🙏' }, { txt: 'I like green tea', ico: '🍵' }, { txt: 'At seven o\'clock', ico: '🕖' }] },
            { q: 'Which creature lives in a pride?', scene: '🦁🦁🌅', ans: 'A lion lives in a pride', opts: [{ txt: 'A lion lives in a pride', ico: '🦁' }, { txt: 'A fish lives in a tree', ico: '🐟' }, { txt: 'A bird lives in the sea', ico: '🐦' }] }
          ],
          parentGame: {
            title: 'Hoạt động Đời thực (12 phút): Cứu Hộ Thiết Bị Hỏng',
            steps: [
              '<b>Bước 1:</b> Con viết 6 tình huống hỏng máy lên giấy nhớ, ví dụ: hết pin, mất mạng, quên mật khẩu, đầy bộ nhớ.',
              '<b>Bước 2:</b> Con bốc từng tờ và nói cách xử lý bằng một câu điều kiện, ví dụ <i>"If you charge it, you can chat with Mai."</i> hoặc <i>"You can\'t enter unless you know the word."</i>',
              '<b>Bước 3:</b> Con và bạn thay phiên đóng vai người nhờ giúp và người sửa máy, dùng <i>might</i> khi chưa chắc chắn, ví dụ <i>"It might work if you restart it."</i>'
            ]
          }
        }
      ]
    },
    '4.11': {
      lessons: [
        {
          id: '4.11A', name: 'Bài 4.11A: Chọn quần áo cho dịp đặc biệt',
          grammar: {
            formulas: ['🎁 It is + 😍 so + 👕 nice', '🎁 It is + 😍 such a + 👕 nice shirt'],
            tip: 'So + tính từ (so nice) • Such a + tính từ + danh từ (such a nice shirt) — nhớ "a" đứng sau such nhé!'
          },
          chunks: [
            { scene: '🥇🪢😍', full: 'The golden belt is so nice today', parts: [{t:'The golden belt',ico:'🥇',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so nice today',ico:'😍',c:'o'}], traceWord: 'golden' },
            { scene: '📜😮🍽️', full: 'The menu is so long for us', parts: [{t:'The menu',ico:'📜',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so long for us',ico:'📏',c:'o'}], traceWord: 'menu' },
            { scene: '👨⛷️❄️', full: 'My dad has such a long ski', parts: [{t:'My dad',ico:'👨',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'such a long ski',ico:'⛷️',c:'o'}], traceWord: 'ski' },
            { scene: '🪙🎩😄', full: 'The coin trick is so funny', parts: [{t:'The coin trick',ico:'🪙',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so funny',ico:'😄',c:'o'}], traceWord: 'trick' },
            { scene: '🏭👕😊', full: 'The shirt maker is so kind', parts: [{t:'The shirt maker',ico:'🏭',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so kind',ico:'😊',c:'o'}], traceWord: 'maker' },
            { scene: '🏅🏆👦', full: 'He is such a pro in the championship', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'such a pro in the championship',ico:'🏆',c:'o'}], traceWord: 'championship' },
            { scene: '🪜🌙😨', full: 'The stair is so high and so dark', parts: [{t:'The stair',ico:'🪜',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so high and so dark',ico:'🌙',c:'o'}], traceWord: 'stair' },
            { scene: '🤢🍽️😌', full: 'My stomach is so full after dinner', parts: [{t:'My stomach',ico:'🤢',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'so full after dinner',ico:'🍽️',c:'o'}], traceWord: 'stomach' }
          ],
          qaList: [
            { q: 'Why do you like the dinner?', scene: '🕯️🍽️💕', ans: 'It is such a romantic dinner', opts: [{ txt: 'It is such a romantic dinner', ico: '💕' }, { txt: 'The bus is at the station', ico: '🚌' }, { txt: 'I have two blue pens', ico: '🖊️' }] },
            { q: 'What do you want to invent?', scene: '💡🔧👦', ans: 'I want to invent such a cool tool', opts: [{ txt: 'I want to invent such a cool tool', ico: '💡' }, { txt: 'My cat is on the sofa', ico: '🐱' }, { txt: 'We eat rice for lunch', ico: '🍚' }] },
            { q: 'How do the stars look at night?', scene: '🌙⭐✨', ans: 'The stars shine so bright at night', opts: [{ txt: 'The stars shine so bright at night', ico: '✨' }, { txt: 'The shirt is too small', ico: '👕' }, { txt: 'He is in the kitchen', ico: '🍳' }] },
            { q: 'Do Tom and Lan like the same style?', scene: '👦👧🔀', ans: 'They dress very differently today', opts: [{ txt: 'They dress very differently today', ico: '🔀' }, { txt: 'The market is near my home', ico: '🏪' }, { txt: 'I read a book at night', ico: '📖' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cuộc Thi Người Mẫu Dịp Đặc Biệt',
            steps: [
              '<b>Bước 1:</b> Em chọn 3 món đồ trong tủ (áo, thắt lưng, mũ...) và đặt lên bàn như cửa hàng thời trang.',
              '<b>Bước 2:</b> Em cầm từng món và nhận xét to bằng tiếng Anh, ví dụ <i>"The belt is so nice!"</i> hoặc <i>"It is such a nice shirt!"</i>.',
              '<b>Bước 3:</b> Em (hoặc bạn) mặc thử một bộ và đi như người mẫu, bạn còn lại khen bằng một câu với <i>so</i> hoặc <i>such a</i>.'
            ]
          }
        },
        {
          id: '4.11B', name: 'Bài 4.11B: Đổi trả và khiếu nại',
          grammar: {
            formulas: ['🙋 Someone + ⚡ has + 🎁 a stamp', '🚫 Nobody + ⚡ is + 🏰 here', '❓ I do not + ⚡ see + 🔍 anything'],
            tip: 'some- dùng câu khẳng định, any- dùng câu phủ định và câu hỏi, còn no- đã mang nghĩa "không" nên đừng thêm not nữa!'
          },
          chunks: [
            { scene: '📮✉️🙋', full: 'Someone has a stamp for the letter', parts: [{t:'Someone',ico:'🙋',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a stamp for the letter',ico:'📮',c:'o'}], traceWord: 'stamp' },
            { scene: '🏰🌙🚫', full: 'Nobody is in the castle tonight', parts: [{t:'Nobody',ico:'🚫',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in the castle tonight',ico:'🏰',c:'o'}], traceWord: 'castle' },
            { scene: '🎉😄👨‍👩‍👧', full: 'Everyone feels happiness at the party', parts: [{t:'Everyone',ico:'👨‍👩‍👧',c:'s'}, {t:'feels',ico:'💗',c:'v'}, {t:'happiness at the party',ico:'😄',c:'o'}], traceWord: 'happiness' },
            { scene: '👦✉️🔍', full: 'I do not see anything in the envelope', parts: [{t:'I',ico:'👦',c:'s'}, {t:'do not see',ico:'👀',c:'v'}, {t:'anything in the envelope',ico:'✉️',c:'o'}], traceWord: 'envelope' },
            { scene: '🙋🤫🚧', full: 'Someone sits quietly near the fence', parts: [{t:'Someone',ico:'🙋',c:'s'}, {t:'sits quietly',ico:'🤫',c:'v'}, {t:'near the fence',ico:'🚧',c:'o'}], traceWord: 'fence' },
            { scene: '👦🖨️📄', full: 'I can print something on the printer', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can print',ico:'📄',c:'v'}, {t:'something on the printer',ico:'🖨️',c:'o'}], traceWord: 'printer' },
            { scene: '🚫🥩🐟', full: 'Nobody wants raw fish for dinner', parts: [{t:'Nobody',ico:'🚫',c:'s'}, {t:'wants',ico:'🙏',c:'v'}, {t:'raw fish for dinner',ico:'🥩',c:'o'}], traceWord: 'raw' },
            { scene: '👨‍👩‍👧📚🗓️', full: 'Everybody likes a weekly fiction book', parts: [{t:'Everybody',ico:'👨‍👩‍👧',c:'s'}, {t:'likes',ico:'❤️',c:'v'}, {t:'a weekly fiction book',ico:'📚',c:'o'}], traceWord: 'weekly' }
          ],
          qaList: [
            { q: 'Why is everybody anxious today?', scene: '😰😱📝', ans: 'Someone feels panic before the big exam', opts: [{ txt: 'Someone feels panic before the big exam', ico: '😱' }, { txt: 'Nobody is at the swimming pool', ico: '🏊' }, { txt: 'We can see a red flower', ico: '🌹' }] },
            { q: 'What do you want to eat?', scene: '🍔😋🤤', ans: 'I want one bite of something sweet', opts: [{ txt: 'I want one bite of something sweet', ico: '🍔' }, { txt: 'The train is late again', ico: '🚆' }, { txt: 'She is in the library', ico: '📚' }] },
            { q: 'Where can we find an adventure?', scene: '🧗🌍🗺️', ans: 'We can find an adventure everywhere', opts: [{ txt: 'We can find an adventure everywhere', ico: '🧗' }, { txt: 'My brother has a new phone', ico: '📱' }, { txt: 'The soup is too hot', ico: '🍲' }] },
            { q: 'What do you study in grammar class?', scene: '📖✏️👧', ans: 'We study the verb and the noun', opts: [{ txt: 'We study the verb and the noun', ico: '📖' }, { txt: 'They play football in the park', ico: '⚽' }, { txt: 'I wash my hands at home', ico: '🧼' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám Tử Tìm Đồ Thất Lạc',
            steps: [
              '<b>Bước 1:</b> Em giấu 3 món đồ nhỏ (bút, tẩy, thẻ...) trong phòng, rồi cầm một tờ giấy ghi: <i>"Someone", "Nobody", "Anything", "Everywhere"</i>.',
              '<b>Bước 2:</b> Em (hoặc bạn) đi tìm và nói to: <i>"I can not see anything here!"</i> hoặc <i>"Nobody is here!"</i> hoặc <i>"Something is under the bed!"</i>.',
              '<b>Bước 3:</b> Khi tìm thấy đồ, đổi vai và viết 3 câu mới với <i>someone, anything, everywhere</i> vào vở.'
            ]
          }
        },
        {
          id: '4.11C', name: 'Bài 4.11C: Mua sắm online',
          grammar: {
            formulas: ['👦 I + 🛒 buy + 👜 a bag', '👦 I + 👀 see + 👜 the bag', '👧 She + ❤️ likes + 👟 shoes'],
            tip: 'a / an cho thứ nhắc lần đầu (an trước nguyên âm), the cho thứ cả hai đều biết, còn tên riêng và danh từ số nhiều nói chung thì không cần mạo từ!'
          },
          chunks: [
            { scene: '👦👜📱', full: 'I buy a leather bag online', parts: [{t:'I',ico:'👦',c:'s'}, {t:'buy',ico:'🛒',c:'v'}, {t:'a leather bag online',ico:'👜',c:'o'}], traceWord: 'leather' },
            { scene: '👦🖼️💻', full: 'I see a portrait on the shop page', parts: [{t:'I',ico:'👦',c:'s'}, {t:'see',ico:'👀',c:'v'}, {t:'a portrait on the shop page',ico:'🖼️',c:'o'}], traceWord: 'portrait' },
            { scene: '🧍📧🏷️', full: 'A stranger sends an email about the sale', parts: [{t:'A stranger',ico:'🧍',c:'s'}, {t:'sends',ico:'📤',c:'v'}, {t:'an email about the sale',ico:'📧',c:'o'}], traceWord: 'stranger' },
            { scene: '👦🍰💻', full: 'Tom buys a slice of cake online', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'buys',ico:'🛒',c:'v'}, {t:'a slice of cake online',ico:'🍰',c:'o'}], traceWord: 'slice' },
            { scene: '🏅👟👑', full: 'The athlete wears royal blue shoes', parts: [{t:'The athlete',ico:'🏅',c:'s'}, {t:'wears',ico:'👟',c:'v'}, {t:'royal blue shoes',ico:'👑',c:'o'}], traceWord: 'royal' },
            { scene: '👨📚🕊️', full: 'Mr Lee is a gentle book lover', parts: [{t:'Mr Lee',ico:'👨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a gentle book lover',ico:'📚',c:'o'}], traceWord: 'gentle' },
            { scene: '🌳🏖️👨‍👩‍👧', full: 'We sit in the shade on the shore', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'sit',ico:'🪑',c:'v'}, {t:'in the shade on the shore',ico:'🌳',c:'o'}], traceWord: 'shade' },
            { scene: '🛒📏🎯', full: 'The online shop gives a precise size', parts: [{t:'The online shop',ico:'🛒',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'a precise size',ico:'🎯',c:'o'}], traceWord: 'precise' }
          ],
          qaList: [
            { q: 'What does the clown do?', scene: '🤡🎪😄', ans: 'He is silly and plays the fool', opts: [{ txt: 'He is silly and plays the fool', ico: '🤡' }, { txt: 'He cleans the big window', ico: '🪟' }, { txt: 'She is at the bus stop', ico: '🚏' }] },
            { q: 'Where do you like to wander?', scene: '🚶🏪🛍️', ans: 'I wander in a big market', opts: [{ txt: 'I wander in a big market', ico: '🚶' }, { txt: 'The soup is hot and sweet', ico: '🍲' }, { txt: 'My uncle has two dogs', ico: '🐕' }] },
            { q: 'Where is the red mark?', scene: '😊🔴👧', ans: 'The red mark is on her cheek', opts: [{ txt: 'The red mark is on her cheek', ico: '😊' }, { txt: 'We play tennis on Sunday', ico: '🎾' }, { txt: 'The train is at the airport', ico: '✈️' }] },
            { q: 'What is the word bag?', scene: '🔤👜❓', ans: 'The word bag is a noun', opts: [{ txt: 'The word bag is a noun', ico: '🔤' }, { txt: 'Anna has a pink hat', ico: '👒' }, { txt: 'They go home by taxi', ico: '🚕' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cửa Hàng Online Giả Lập',
            steps: [
              '<b>Bước 1:</b> Em vẽ hoặc chọn 4 món đồ trong nhà làm "sản phẩm", rồi viết mỗi món một thẻ giá như trang web mua sắm.',
              '<b>Bước 2:</b> Bạn đóng vai khách hỏi, em đóng vai người bán và trả lời bằng đúng mạo từ: <i>"I have a bag."</i>, <i>"I have an umbrella."</i>, <i>"The bag is blue."</i>.',
              '<b>Bước 3:</b> Đổi vai, mỗi người đặt một đơn hàng 3 món và đọc to cho đối phương nghe, chú ý a / an / the.'
            ]
          }
        }
      ]
    },
    '4.12': {
      lessons: [
        {
          id: '4.12A', name: 'Bài 4.12A: Lễ hội truyền thống',
          grammar: {
            formulas: ['🏮 The festival + 💬 , which is old, + ⚡ is + 😄 fun', '👩 My aunt + 💬 , who sings, + ⚡ loves + 🎶 music'],
            tip: 'Which cho đồ vật, who cho người • mệnh đề thêm thông tin luôn nằm giữa hai dấu phẩy!'
          },
          chunks: [
            { scene: '🍜💰👌', full: 'The food, which is cheap, is alright', parts: [{t:'The food, which is cheap,',ico:'🍜',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'alright',ico:'👌',c:'o'}], traceWord: 'alright' },
            { scene: '👨🎼🏮', full: 'Mr Lan, who is a composer, writes festival music', parts: [{t:'Mr Lan, who is a composer,',ico:'🎼',c:'s'}, {t:'writes',ico:'✍️',c:'v'}, {t:'festival music',ico:'🎶',c:'o'}], traceWord: 'composer' },
            { scene: '🏮✨🔢', full: 'Our festival, which has a million lights, is beautiful', parts: [{t:'Our festival, which has a million lights,',ico:'🏮',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'beautiful',ico:'🌟',c:'o'}], traceWord: 'million' },
            { scene: '👩📈👔', full: 'My aunt, who is progressive, has a good occupation', parts: [{t:'My aunt, who is progressive,',ico:'👩',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a good occupation',ico:'👔',c:'o'}], traceWord: 'progressive' },
            { scene: '🏮💥👥', full: 'The festival, which many people love, has a big impact', parts: [{t:'The festival, which many people love,',ico:'🏮',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a big impact',ico:'💥',c:'o'}], traceWord: 'impact' },
            { scene: '📰🏮🆓', full: 'The newspaper, which publishes festival news, is free', parts: [{t:'The newspaper, which publishes festival news,',ico:'📰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'free',ico:'🆓',c:'o'}], traceWord: 'publishes' },
            { scene: '👧📖🔮', full: 'Lan, who studies vocabulary, writes a prediction about the festival', parts: [{t:'Lan, who studies vocabulary,',ico:'📖',c:'s'}, {t:'writes',ico:'✍️',c:'v'}, {t:'a prediction about the festival',ico:'🔮',c:'o'}], traceWord: 'prediction' },
            { scene: '👨‍🏫🧠➕', full: 'The teacher, who is logical, explains the comparative form', parts: [{t:'The teacher, who is logical,',ico:'🧠',c:'s'}, {t:'explains',ico:'🗣️',c:'v'}, {t:'the comparative form',ico:'➕',c:'o'}], traceWord: 'comparative' }
          ],
          qaList: [
            { q: 'What is very small, which scientists study?', scene: '⚛️🔬', ans: 'An atom is very small', opts: [{ txt: 'An atom is very small', ico: '⚛️' }, { txt: 'A mountain is very small', ico: '⛰️' }, { txt: 'The sun is very small', ico: '☀️' }] },
            { q: 'Which word is singular, cat or cats?', scene: '1️⃣🐱', ans: 'Cat is singular', opts: [{ txt: 'Cat is singular', ico: '1️⃣' }, { txt: 'Cats are singular', ico: '🐱🐱' }, { txt: 'Cat is plural', ico: '🔢' }] },
            { q: 'Which animal is an insect, which has six legs?', scene: '🐝🐛', ans: 'A bee is an insect', opts: [{ txt: 'A bee is an insect', ico: '🐝' }, { txt: 'A dog is an insect', ico: '🐶' }, { txt: 'A cow is an insect', ico: '🐄' }] },
            { q: 'What is artificial, which people make?', scene: '🌸🦾', ans: 'A plastic flower is artificial', opts: [{ txt: 'A plastic flower is artificial', ico: '🌸' }, { txt: 'A tree is artificial', ico: '🌳' }, { txt: 'A river is artificial', ico: '🏞️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Báo Lễ Hội Mini',
            steps: [
              '<b>Bước 1:</b> Lấy một tờ giấy, chọn một lễ hội em biết (Tết, Trung thu...) và viết tên lễ hội lên đầu trang như tên một tờ báo.',
              '<b>Bước 2:</b> Viết 3 câu giới thiệu có thêm thông tin trong hai dấu phẩy, ví dụ <i>"Tet, which is old, is fun."</i> và <i>"My aunt, who sings, loves music."</i>',
              '<b>Bước 3:</b> Đọc to báo của em cho bạn hoặc anh chị nghe, rồi đổi giấy và tìm xem bạn đã dùng <i>which</i> và <i>who</i> đúng chưa.'
            ]
          }
        },
        {
          id: '4.12B', name: 'Bài 4.12B: Món ăn và phong tục',
          grammar: {
            formulas: ['👭 Both + 🧒 plural noun + ⚡ have + 🎉 fun', '👨‍👩‍👧 All + 🧒 the plural noun + ⚡ remember + 📖 history', '🚫 Neither of + 🏪 the shops + ⚡ has + 🏷️ a bargain'],
            tip: 'Both = cả hai • All = tất cả • Neither of = không ai trong hai, không cái nào trong hai, sau đó động từ chia số ít!'
          },
          chunks: [
            { scene: '👨‍👩‍👧👴🕯️', full: 'All the families remember their ancestors', parts: [{t:'All the families',ico:'👨‍👩‍👧',c:'s'}, {t:'remember',ico:'🧠',c:'v'}, {t:'their ancestors',ico:'👴',c:'o'}], traceWord: 'ancestors' },
            { scene: '👨‍🌾👩‍🌾🌾', full: 'Both farmers enjoy the harvest in autumn', parts: [{t:'Both farmers',ico:'👨‍🌾',c:'s'}, {t:'enjoy',ico:'😄',c:'v'}, {t:'the harvest in autumn',ico:'🌾',c:'o'}], traceWord: 'harvest' },
            { scene: '👦👦🗣️✔️', full: 'Neither of the boys pronounces the word correctly', parts: [{t:'Neither of the boys',ico:'👦',c:'s'}, {t:'pronounces',ico:'🗣️',c:'v'}, {t:'the word correctly',ico:'✔️',c:'o'}], traceWord: 'correctly' },
            { scene: '🍜🏪🏷️', full: 'Neither of the shops has a bargain', parts: [{t:'Neither of the shops',ico:'🏪',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a bargain',ico:'🏷️',c:'o'}], traceWord: 'bargain' },
            { scene: '🌏🌏🥁', full: 'Both continents have festivals with a strong rhythm', parts: [{t:'Both continents',ico:'🌏',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'festivals with a strong rhythm',ico:'🥁',c:'o'}], traceWord: 'rhythm' },
            { scene: '🧠👥👎', full: 'All the psychologists say crowds have one disadvantage', parts: [{t:'All the psychologists',ico:'🧠',c:'s'}, {t:'say',ico:'💬',c:'v'}, {t:'crowds have one disadvantage',ico:'👎',c:'o'}], traceWord: 'psychologists' },
            { scene: '📘📘🔢', full: 'Either textbook shows the plural of this word', parts: [{t:'Either textbook',ico:'📘',c:'s'}, {t:'shows',ico:'👀',c:'v'}, {t:'the plural of this word',ico:'🔢',c:'o'}], traceWord: 'plural' },
            { scene: '👧👧📔🏮', full: 'Both girls write about the festival in a diary', parts: [{t:'Both girls',ico:'👧',c:'s'}, {t:'write',ico:'✍️',c:'v'}, {t:'about the festival in a diary',ico:'📔',c:'o'}], traceWord: 'diary' }
          ],
          qaList: [
            { q: 'Do all the sun rays give us light?', scene: '☀️💡', ans: 'Yes, all the rays give light', opts: [{ txt: 'Yes, all the rays give light', ico: '☀️' }, { txt: 'No, the rays give no light', ico: '🌑' }, { txt: 'Yes, they are in the box', ico: '📦' }] },
            { q: 'What can scientists do with a sheep?', scene: '🐑🐑🔬', ans: 'They can clone a sheep', opts: [{ txt: 'They can clone a sheep', ico: '🐑🐑' }, { txt: 'They can wear a sheep', ico: '👕' }, { txt: 'They can read a sheep', ico: '📖' }] },
            { q: 'Why is sport good for you?', scene: '⚽💪', ans: 'Importantly, sport keeps us physically healthy', opts: [{ txt: 'Importantly, sport keeps us physically healthy', ico: '💪' }, { txt: 'It is a kind of soup', ico: '🍲' }, { txt: 'It is a very tall tree', ico: '🌳' }] },
            { q: 'How many of the friends like the festival?', scene: '👭👬🏮', ans: 'All of them like it', opts: [{ txt: 'All of them like it', ico: '👭👬' }, { txt: 'In the kitchen', ico: '🍳' }, { txt: 'Nine green apples', ico: '🍏' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Khảo Sát Món Ăn Ngày Lễ',
            steps: [
              '<b>Bước 1:</b> Viết 3 món ăn ngày lễ (bánh chưng, bánh trung thu, mứt...) lên giấy, rồi hỏi 4 bạn hoặc người nhà món nào họ thích.',
              '<b>Bước 2:</b> Đếm kết quả và nói bằng tiếng Anh, ví dụ <i>"Both friends like cake."</i>, <i>"All of them like fruit."</i> hoặc <i>"Neither of them likes onion."</i>',
              '<b>Bước 3:</b> Viết 3 câu kết quả vào nhật ký nhỏ của em, dùng ít nhất một lần <i>both</i>, <i>all</i> và <i>neither of</i>.'
            ]
          }
        },
        {
          id: '4.12C', name: 'Bài 4.12C: Kể về chuyến thăm lễ hội',
          grammar: {
            formulas: ['⏰ We + 🚶 walked + 📍 ten kilometers yesterday', '🔗 She + ⚡ has visited + 🏫 the campus twice'],
            tip: 'Có mốc thời gian đã qua (yesterday, ago) dùng quá khứ đơn • chưa nói mốc, còn liên quan hiện tại (twice, for years) dùng have/has + V3!'
          },
          chunks: [
            { scene: '🚶‍♂️📏🏮', full: 'We walked ten kilometers to the festival yesterday', parts: [{t:'We',ico:'👫',c:'s'}, {t:'walked',ico:'🚶',c:'v'}, {t:'ten kilometers to the festival yesterday',ico:'📏',c:'o'}], traceWord: 'kilometers' },
            { scene: '👩🏫🔊', full: 'She has visited the noisy campus festival twice', parts: [{t:'She',ico:'👩',c:'s'}, {t:'has visited',ico:'🔗',c:'v'}, {t:'the noisy campus festival twice',ico:'🏫',c:'o'}], traceWord: 'campus' },
            { scene: '👨🥛💧', full: 'We carried a liter of water yesterday', parts: [{t:'We',ico:'👫',c:'s'}, {t:'carried',ico:'🎒',c:'v'}, {t:'a liter of water yesterday',ico:'🥛',c:'o'}], traceWord: 'liter' },
            { scene: '👧👶💃', full: 'Mai has joined the junior dance group since March', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has joined',ico:'🔗',c:'v'}, {t:'the junior dance group since March',ico:'👶',c:'o'}], traceWord: 'junior' },
            { scene: '👦🖱️🎧', full: 'My friend clicked the audio button yesterday', parts: [{t:'My friend',ico:'👦',c:'s'}, {t:'clicked',ico:'🖱️',c:'v'}, {t:'the audio button yesterday',ico:'🎧',c:'o'}], traceWord: 'audio' },
            { scene: '👵🦉💬', full: 'Grandma has shared her wisdom with us for years', parts: [{t:'Grandma',ico:'👵',c:'s'}, {t:'has shared',ico:'🔗',c:'v'}, {t:'her wisdom with us for years',ico:'🦉',c:'o'}], traceWord: 'wisdom' },
            { scene: '⚔️🏰📜', full: 'Soldiers invaded the castle many years ago', parts: [{t:'Soldiers',ico:'💂',c:'s'}, {t:'invaded',ico:'⚔️',c:'v'}, {t:'the castle many years ago',ico:'🏰',c:'o'}], traceWord: 'invaded' },
            { scene: '👨🛋️🏮', full: 'He has enjoyed his leisure time at the festival', parts: [{t:'He',ico:'👨',c:'s'}, {t:'has enjoyed',ico:'🔗',c:'v'}, {t:'his leisure time at the festival',ico:'🛋️',c:'o'}], traceWord: 'leisure' }
          ],
          qaList: [
            { q: 'What have you finished?', scene: '📝✅', ans: 'I have finished the quiz', opts: [{ txt: 'I have finished the quiz', ico: '📝' }, { txt: 'I have cooked the moon', ico: '🌙' }, { txt: 'I have finished a blue cat', ico: '🐱' }] },
            { q: 'What did the child follow to find the gift?', scene: '🧒🔎🎁', ans: 'He followed a clue', opts: [{ txt: 'He followed a clue', ico: '🔎' }, { txt: 'He followed a pizza', ico: '🍕' }, { txt: 'He followed a lamp', ico: '💡' }] },
            { q: 'Is a healthy lifestyle good for you?', scene: '🏃🥗', ans: 'Yes, a healthy lifestyle is good', opts: [{ txt: 'Yes, a healthy lifestyle is good', ico: '🏃' }, { txt: 'No, it is a hot soup', ico: '🍲' }, { txt: 'No, it is a big door', ico: '🚪' }] },
            { q: 'How many grams are in the container?', scene: '📦⚖️', ans: 'There are 500 grams in the container', opts: [{ txt: 'There are 500 grams in the container', ico: '⚖️' }, { txt: 'There are two moons in the container', ico: '🌙' }, { txt: 'There is a car in the container', ico: '🚗' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Kể Lại Chuyến Đi Lễ Hội',
            steps: [
              '<b>Bước 1:</b> Nhớ lại một lễ hội em từng đến và viết ra 3 việc đã xảy ra rõ thời gian, ví dụ <i>"We walked to the festival yesterday."</i>',
              '<b>Bước 2:</b> Viết thêm 3 việc em đã làm nhiều lần hoặc còn liên quan đến bây giờ, ví dụ <i>"I have visited the festival twice."</i>',
              '<b>Bước 3:</b> Kể cho bạn nghe câu chuyện đủ 6 câu, rồi cùng bạn kiểm tra câu nào dùng quá khứ đơn, câu nào dùng <i>have/has</i> + V3.'
            ]
          }
        }
      ]
    },
    '4.13': {
      lessons: [
        {
          id: '4.13A', name: 'Bài 4.13A: Tham quan thành phố',
          grammar: {
            formulas: ['👥 We + 🚶 walk + 🛣️ along the street', '👦 He + 🚶 walks + 🌉 across the bridge', '👧 She + 🚶 walks + 🏬 into the mall'],
            tip: 'through = xuyên qua • across = băng ngang • along = dọc theo • into = đi vào • past = đi ngang qua!'
          },
          chunks: [
            { scene: '👥🛣️🏬', full: 'We walk along the street to the mall', parts: [{t:'We',ico:'👥',c:'s'}, {t:'walk',ico:'🚶',c:'v'}, {t:'along the street to the mall',ico:'🏬',c:'o'}], traceWord: 'mall' },
            { scene: '🧳🎡🌳', full: 'The tourists walk through the amusement park', parts: [{t:'The tourists',ico:'🧳',c:'s'}, {t:'walk',ico:'🚶',c:'v'}, {t:'through the amusement park',ico:'🎡',c:'o'}], traceWord: 'amusement' },
            { scene: '👧🛒📦', full: 'Mai walks along the aisle past the shelves', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'walks',ico:'🚶',c:'v'}, {t:'along the aisle past the shelves',ico:'🛒',c:'o'}], traceWord: 'aisle' },
            { scene: '👦👦♟️', full: 'Two boys walk into the club to play chess', parts: [{t:'Two boys',ico:'👦',c:'s'}, {t:'walk',ico:'🚶',c:'v'}, {t:'into the club to play chess',ico:'♟️',c:'o'}], traceWord: 'chess' },
            { scene: '👏📣🏟️', full: 'The fans cheer as we walk past the stadium', parts: [{t:'The fans',ico:'👏',c:'s'}, {t:'cheer',ico:'📣',c:'v'}, {t:'as we walk past the stadium',ico:'🏟️',c:'o'}], traceWord: 'cheer' },
            { scene: '🧓🛣️🚶', full: 'A man aged ninety walks across the road', parts: [{t:'A man aged ninety',ico:'🧓',c:'s'}, {t:'walks',ico:'🚶',c:'v'}, {t:'across the road',ico:'🛣️',c:'o'}], traceWord: 'aged' },
            { scene: '🦶😖🌳', full: 'My ankle hurts when I walk through the garden', parts: [{t:'My ankle',ico:'🦶',c:'s'}, {t:'hurts',ico:'😖',c:'v'}, {t:'when I walk through the garden',ico:'🌳',c:'o'}], traceWord: 'ankle' },
            { scene: '👨😠🚶', full: 'The man angrily walks past the long line', parts: [{t:'The man',ico:'👨',c:'s'}, {t:'angrily walks',ico:'😠',c:'v'}, {t:'past the long line',ico:'🧍🧍🧍',c:'o'}], traceWord: 'angrily' }
          ],
          qaList: [
            { q: 'What is your ambition for this semester?', scene: '📆🚀🚶', ans: 'I want to walk across the whole country', opts: [{ txt: 'I want to walk across the whole country', ico: '🗺️' }, { txt: 'I want to sleep inside a small cup', ico: '🥤' }, { txt: 'I want to eat my blue desk', ico: '🪑' }] },
            { q: 'Why is the worker so happy today?', scene: '💰😄🏦', ans: 'She gets a bonus and walks past the bank', opts: [{ txt: 'She gets a bonus and walks past the bank', ico: '💰' }, { txt: 'An angel sits inside a small shoe', ico: '👼' }, { txt: 'The moon drinks water across the book', ico: '🌙' }] },
            { q: 'Why is the boy amused in the park today?', scene: '👦😄🤡', ans: 'The clown walks past him with a big hat', opts: [{ txt: 'The clown walks past him with a big hat', ico: '🤡' }, { txt: 'The cold river eats my blue chair', ico: '🌊' }, { txt: 'A tall wall sings across the sky', ico: '🧱' }] },
            { q: 'What do you like in your advanced class?', scene: '📚🚀📺', ans: 'I like adjective games and advertising posters', opts: [{ txt: 'I like adjective games and advertising posters', ico: '📚' }, { txt: 'I like cold soup in the sky', ico: '🍲' }, { txt: 'I like blue walls and flying tables', ico: '🧱' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản Đồ Đi Bộ Trong Nhà',
            steps: [
              '<b>Bước 1:</b> Dùng ghế, hộp và gối làm các điểm như "bridge", "tunnel", "mall", "park" rồi vẽ bản đồ nhỏ trên giấy.',
              '<b>Bước 2:</b> Cùng bạn (hoặc tự đóng 2 vai) đi theo bản đồ và nói to: <i>"I walk through the tunnel"</i>, <i>"I walk across the bridge"</i>, <i>"I walk past the mall"</i>.',
              '<b>Bước 3:</b> Đổi vai: một bạn đọc lộ trình bằng tiếng Anh, bạn kia đi đúng theo giới từ along, into, past, across, through.'
            ]
          }
        },
        {
          id: '4.13B', name: 'Bài 4.13B: Khách sạn và đặt phòng',
          grammar: {
            formulas: ['👥 We + 🔑 check in + 🏨 at the hotel', '👦 He + 🚌 gets off + 🚌 the bus', '👧 She + 🔍 looks for + 🛏️ her room'],
            tip: 'check in, get on, look for là cụm động từ không tách: tân ngữ luôn đứng SAU cả cụm, không chen vào giữa!'
          },
          chunks: [
            { scene: '👥🔍🛏️', full: 'We look for our room with a balcony', parts: [{t:'We',ico:'👥',c:'s'}, {t:'look for',ico:'🔍',c:'v'}, {t:'our room with a balcony',ico:'🛏️',c:'o'}], traceWord: 'balcony' },
            { scene: '👫🔑🎂', full: 'They check in at the hotel for their anniversary', parts: [{t:'They',ico:'👫',c:'s'}, {t:'check in',ico:'🔑',c:'v'}, {t:'at the hotel for their anniversary',ico:'🎂',c:'o'}], traceWord: 'anniversary' },
            { scene: '👨‍🚀🚌🕛', full: 'The astronaut gets on the bus at noon', parts: [{t:'The astronaut',ico:'👨‍🚀',c:'s'}, {t:'gets on',ico:'🚌',c:'v'}, {t:'the bus at noon',ico:'🕛',c:'o'}], traceWord: 'astronaut' },
            { scene: '👦👦🚌🏸', full: 'Two boys get off the bus and play badminton', parts: [{t:'Two boys',ico:'👦',c:'s'}, {t:'get off',ico:'🚌',c:'v'}, {t:'the bus and play badminton',ico:'🏸',c:'o'}], traceWord: 'badminton' },
            { scene: '💈🔍💺', full: 'The barber looks for his armchair in the room', parts: [{t:'The barber',ico:'💈',c:'s'}, {t:'looks for',ico:'🔍',c:'v'}, {t:'his armchair in the room',ico:'💺',c:'o'}], traceWord: 'barber' },
            { scene: '👥🧳👶😴', full: 'We check out while the baby is asleep', parts: [{t:'We',ico:'👥',c:'s'}, {t:'check out',ico:'🧳',c:'v'}, {t:'while the baby is asleep',ico:'😴',c:'o'}], traceWord: 'asleep' },
            { scene: '👥🔍🎈🍖', full: 'We look for balloons at the barbecue', parts: [{t:'We',ico:'👥',c:'s'}, {t:'look for',ico:'🔍',c:'v'}, {t:'balloons at the barbecue',ico:'🎈',c:'o'}], traceWord: 'balloons' },
            { scene: '👵🧁🏨', full: 'My aunt bakes a cake at the hotel', parts: [{t:'My aunt',ico:'👵',c:'s'}, {t:'bakes',ico:'🧁',c:'v'}, {t:'a cake at the hotel',ico:'🏨',c:'o'}], traceWord: 'bakes' }
          ],
          qaList: [
            { q: 'What can annoy you at the hotel at night?', scene: '🏨🌙😤', ans: 'The noisy people annoy me at night', opts: [{ txt: 'The noisy people annoy me at night', ico: '😤' }, { txt: 'A big banana looks for the stars', ico: '🍌' }, { txt: 'The white soup checks out the moon', ico: '🍲' }] },
            { q: 'Is the automatic door at the hotel annoying?', scene: '🚪⚙️🏨', ans: 'No, the automatic door is not annoying', opts: [{ txt: 'No, the automatic door is not annoying', ico: '⚙️' }, { txt: 'Yes, the door eats a big pizza', ico: '🍕' }, { txt: 'No, the bus gets off the table', ico: '🚌' }] },
            { q: 'Who works in banking in the city?', scene: '🏦👨‍💼🏙️', ans: 'My uncle works in banking in the city', opts: [{ txt: 'My uncle works in banking in the city', ico: '🏦' }, { txt: 'The armed statue plays in the sea', ico: '🗿' }, { txt: 'The moon gets on the cold cup', ico: '🌙' }] },
            { q: 'Where do you get off for the museum?', scene: '🚌🏛️👥', ans: 'We get off the bus near the museum', opts: [{ txt: 'We get off the bus near the museum', ico: '🏛️' }, { txt: 'We get on the moon in my shoe', ico: '🌙' }, { txt: 'We check out of the sleepy soup', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đóng Vai Lễ Tân Khách Sạn',
            steps: [
              '<b>Bước 1:</b> Dùng bàn làm quầy lễ tân, vài tờ giấy làm thẻ phòng và hành lý là ba lô, cùng bạn chọn vai khách hoặc lễ tân.',
              '<b>Bước 2:</b> Khách nói <i>"I want to check in"</i> và <i>"I am looking for my room"</i>, lễ tân đưa thẻ phòng và trả lời bằng tiếng Anh.',
              '<b>Bước 3:</b> Khách đi ra "xe buýt" bằng ghế rồi nói <i>"I get on the bus"</i>, <i>"I get off the bus"</i> và <i>"I check out"</i>, sau đó đổi vai.'
            ]
          }
        },
        {
          id: '4.13C', name: 'Bài 4.13C: Nhật ký chuyến đi',
          grammar: {
            formulas: ['👥 We + ⏳ have been walking + 🏖️ along the bay', '👧 She + ⏳ has been sleeping + 🛏️ under a blanket', '❓ How long + ⏳ have you been + 🪑 sitting here'],
            tip: 'I/you/we/they dùng "have been", he/she/it dùng "has been" + V-ing • hỏi thời gian thì mở đầu bằng "How long"!'
          },
          chunks: [
            { scene: '👥🚶🏖️', full: 'We have been walking along the bay', parts: [{t:'We',ico:'👥',c:'s'}, {t:'have been walking',ico:'🚶',c:'v'}, {t:'along the bay',ico:'🏖️',c:'o'}], traceWord: 'bay' },
            { scene: '❓⏳🪑', full: 'How long have you been sitting on this bench', parts: [{t:'How long',ico:'⏳',c:'o'}, {t:'have',ico:'❓',c:'v'}, {t:'you been sitting on this bench',ico:'🪑',c:'s'}], traceWord: 'bench' },
            { scene: '👧🧺💪', full: 'Mai has been carrying a heavy basket all day', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has been carrying',ico:'💪',c:'v'}, {t:'a heavy basket all day',ico:'🧺',c:'o'}], traceWord: 'basket' },
            { scene: '🔰🏊📅', full: 'The beginner has been learning to swim for a month', parts: [{t:'The beginner',ico:'🔰',c:'s'}, {t:'has been learning',ico:'📖',c:'v'}, {t:'to swim for a month',ico:'🏊',c:'o'}], traceWord: 'beginner' },
            { scene: '🔋📱🧳', full: 'The battery has been working since the beginning of the trip', parts: [{t:'The battery',ico:'🔋',c:'s'}, {t:'has been working',ico:'⚙️',c:'v'}, {t:'since the beginning of the trip',ico:'🏁',c:'o'}], traceWord: 'battery' },
            { scene: '👨♨️💧⏰', full: 'The man has been boiling water for ten minutes', parts: [{t:'The man',ico:'👨',c:'s'}, {t:'has been boiling',ico:'♨️',c:'v'}, {t:'water for ten minutes',ico:'💧',c:'o'}], traceWord: 'boiling' },
            { scene: '👱‍♀️😴🛏️', full: 'A blonde girl has been sleeping under a blanket', parts: [{t:'A blonde girl',ico:'👱‍♀️',c:'s'}, {t:'has been sleeping',ico:'😴',c:'v'}, {t:'under a blanket',ico:'🛏️',c:'o'}], traceWord: 'blonde' },
            { scene: '👩‍🏫✍️🏫', full: 'The teacher has been writing on the blackboard all morning', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'has been writing',ico:'✍️',c:'v'}, {t:'on the blackboard all morning',ico:'🏫',c:'o'}], traceWord: 'blackboard' }
          ],
          qaList: [
            { q: 'How long has Mom been baking this batch of cookies?', scene: '👩🍪📦', ans: 'She has been baking it for an hour', opts: [{ txt: 'She has been baking it for an hour', ico: '🍪' }, { txt: 'She has been eating a cold moon', ico: '🌙' }, { txt: 'He has been flying a blue desk', ico: '🪑' }] },
            { q: 'Why has the dog been begging near the table?', scene: '🐶🙏🍖', ans: 'It has been begging for food since morning', opts: [{ txt: 'It has been begging for food since morning', ico: '🍖' }, { txt: 'It has been reading a tall tree', ico: '🌳' }, { txt: 'It has been driving a small cup', ico: '🥤' }] },
            { q: 'Why does the strange being touch its belly?', scene: '👽🫃😋', ans: 'It has been eating too much since noon', opts: [{ txt: 'It has been eating too much since noon', ico: '🍔' }, { txt: 'It has been drinking a red wall', ico: '🧱' }, { txt: 'It has been flying inside a small shoe', ico: '👟' }] },
            { q: 'How long have the flowers been in bloom?', scene: '🌸🌷📅', ans: 'They have been in bloom for two weeks', opts: [{ txt: 'They have been in bloom for two weeks', ico: '🌸' }, { txt: 'They have been cooking in a car', ico: '🚗' }, { txt: 'They have been sleeping on a plate', ico: '🍽️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Nhật Ký Chuyến Đi',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn chọn một việc đang làm lâu (đọc sách, vẽ, đi bộ, ngồi chờ) và ghi nhanh thời gian bắt đầu vào giấy nhớ.',
              '<b>Bước 2:</b> Bạn này hỏi <i>"How long have you been reading?"</i>, bạn kia nhìn giấy nhớ rồi trả lời <i>"I have been reading for twenty minutes"</i>.',
              '<b>Bước 3:</b> Viết 3 câu nhật ký chuyến đi bằng cấu trúc <i>"I have been ... for ..."</i> rồi đọc lại cho bạn nghe.'
            ]
          }
        }
      ]
    },
    '4.14': {
      lessons: [
        {
          id: '4.14A', name: 'Bài 4.14A: Xin việc làm thêm',
          grammar: {
            formulas: ['👦 You + 👍 should + 💼 work at a shop', '👦 You + 🚫 shouldn\'t + 🥱 be bored', '💡 Why don\'t + 👦 you + 🔧 fix it'],
            tip: 'should + động từ gốc, không thêm to, không thêm s • had better = "tốt hơn là nên" • Why don\'t you...? = "sao bạn không...?"'
          },
          chunks: [
            { scene: '👦🏪📚', full: 'You should work at a bookshop', parts: [{t:'You',ico:'👦',c:'s'}, {t:'should work',ico:'👍',c:'v'}, {t:'at a bookshop',ico:'🏪',c:'o'}], traceWord: 'bookshop' },
            { scene: '🥱💼🚫', full: 'You shouldn\'t be bored at work', parts: [{t:'You',ico:'👦',c:'s'}, {t:'shouldn\'t be',ico:'🚫',c:'v'}, {t:'bored at work',ico:'🥱',c:'o'}], traceWord: 'bored' },
            { scene: '💼🙋📝', full: 'You had better ask the businessman for a job', parts: [{t:'You',ico:'👦',c:'s'}, {t:'had better ask',ico:'⚡',c:'v'}, {t:'the businessman for a job',ico:'💼',c:'o'}], traceWord: 'businessman' },
            { scene: '📚🧹😊', full: 'Why don\'t you clean the bookcase today', parts: [{t:'Why don\'t',ico:'❓',c:'v'}, {t:'you',ico:'👧',c:'s'}, {t:'clean the bookcase today',ico:'📚',c:'o'}], traceWord: 'bookcase' },
            { scene: '📕📗📘📚', full: 'You should put books on the bookshelf', parts: [{t:'You',ico:'👦',c:'s'}, {t:'should put',ico:'👍',c:'v'}, {t:'books on the bookshelf',ico:'📚',c:'o'}], traceWord: 'bookshelf' },
            { scene: '🦁💪🗣️', full: 'You had better be brave at the interview', parts: [{t:'You',ico:'👧',c:'s'}, {t:'had better be',ico:'⚡',c:'v'}, {t:'brave at the interview',ico:'🦁',c:'o'}], traceWord: 'brave' },
            { scene: '💡🔧🏪', full: 'Why don\'t you fix the bulb in the shop', parts: [{t:'Why don\'t',ico:'❓',c:'v'}, {t:'you',ico:'👦',c:'s'}, {t:'fix the bulb in the shop',ico:'💡',c:'o'}], traceWord: 'bulb' },
            { scene: '🥚🚫🏢', full: 'You shouldn\'t eat boiled eggs in the office', parts: [{t:'You',ico:'👧',c:'s'}, {t:'shouldn\'t eat',ico:'🚫',c:'v'}, {t:'boiled eggs in the office',ico:'🥚',c:'o'}], traceWord: 'boiled' }
          ],
          qaList: [
            { q: 'What should we do before the brainstorm?', scene: '🧠📝👥', ans: 'You should read the notes', opts: [{ txt: 'You should read the notes', ico: '📝' }, { txt: 'You should sleep all day', ico: '😴' }, { txt: 'I like pizza', ico: '🍕' }] },
            { q: 'My bike brake is broken. What should I do?', scene: '🚲🛑🔧', ans: 'You should fix the brake', opts: [{ txt: 'You should fix the brake', ico: '🛑' }, { txt: 'You should buy a new bra', ico: '👙' }, { txt: 'It is Sunday today', ico: '📅' }] },
            { q: 'There is a bug on the bush. What should I do?', scene: '🐛🌳🤔', ans: 'You shouldn\'t touch the bug', opts: [{ txt: 'You shouldn\'t touch the bug', ico: '🐛' }, { txt: 'You should eat the bug', ico: '🍽️' }, { txt: 'You had better hug the bug', ico: '🤗' }] },
            { q: 'The bride is hot. What should she do?', scene: '👰🥵🍃', ans: 'She should sit in the breeze', opts: [{ txt: 'She should sit in the breeze', ico: '🍃' }, { txt: 'She should wear a coat', ico: '🧥' }, { txt: 'She should go to the bookshop', ico: '🏪' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Tư Vấn Xin Việc Làm Thêm',
            steps: [
              '<b>Bước 1:</b> Con viết ra giấy 4 vấn đề của một bạn đi xin việc làm thêm, ví dụ: chán việc, sợ phỏng vấn, đồ trong cửa hàng bị hỏng, chưa biết hỏi ai.',
              '<b>Bước 2:</b> Con (hoặc cùng một bạn) đọc từng vấn đề rồi khuyên bằng tiếng Anh, ví dụ <i>"You should work at a bookshop."</i> hoặc <i>"Why don\'t you fix the bulb?"</i>.',
              '<b>Bước 3:</b> Chọn lời khuyên hay nhất, viết lên giấy nhớ bằng câu <i>"You had better be brave."</i> rồi dán lên bàn học để nhắc mình.'
            ]
          }
        },
        {
          id: '4.14B', name: 'Bài 4.14B: Kể kỹ năng đã có',
          grammar: {
            formulas: ['👦 I + 💪 could + 🚕 drive a cab', '👧 She + 💪 could + 🍳 cook well', '👦 I + 🚫 couldn\'t + 🔍 find it'],
            tip: 'could + động từ gốc cho mọi ngôi (I, he, she, they đều dùng could) • phủ định là couldn\'t • chỉ nói việc con làm được hồi trước!'
          },
          chunks: [
            { scene: '👩🚕🌙', full: 'My aunt could drive a cab at night', parts: [{t:'My aunt',ico:'👩',c:'s'}, {t:'could drive',ico:'💪',c:'v'}, {t:'a cab at night',ico:'🚕',c:'o'}], traceWord: 'cab' },
            { scene: '👨🍳🍽️', full: 'He could cook in the cafeteria', parts: [{t:'He',ico:'👨',c:'s'}, {t:'could cook',ico:'💪',c:'v'}, {t:'in the cafeteria',ico:'🍽️',c:'o'}], traceWord: 'cafeteria' },
            { scene: '👦🗓️🔍', full: 'I couldn\'t find the calendar yesterday', parts: [{t:'I',ico:'👦',c:'s'}, {t:'couldn\'t find',ico:'🚫',c:'v'}, {t:'the calendar yesterday',ico:'🗓️',c:'o'}], traceWord: 'calendar' },
            { scene: '👨‍👩‍👧🏕️🌲', full: 'We could go camping near the lake last summer', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'could go',ico:'💪',c:'v'}, {t:'camping near the lake last summer',ico:'🏕️',c:'o'}], traceWord: 'camping' },
            { scene: '👦⚓⚽', full: 'Nam could win games as the team captain', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'could win',ico:'🏆',c:'v'}, {t:'games as the team captain',ico:'⚓',c:'o'}], traceWord: 'captain' },
            { scene: '👧🥕🌱', full: 'Mai could grow a carrot in her garden', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'could grow',ico:'🌱',c:'v'}, {t:'a carrot in her garden',ico:'🥕',c:'o'}], traceWord: 'carrot' },
            { scene: '🍳🍚🌶️', full: 'The chef could cook rice with chili', parts: [{t:'The chef',ico:'🍳',c:'s'}, {t:'could cook',ico:'💪',c:'v'}, {t:'rice with chili',ico:'🌶️',c:'o'}], traceWord: 'chef' },
            { scene: '👨🧾💵', full: 'My dad could pay with a cheque', parts: [{t:'My dad',ico:'👨',c:'s'}, {t:'could pay',ico:'💵',c:'v'}, {t:'with a cheque',ico:'🧾',c:'o'}], traceWord: 'cheque' }
          ],
          qaList: [
            { q: 'Could your aunt work in an office?', scene: '👩💼🏢', ans: 'Yes, she was a businesswoman', opts: [{ txt: 'Yes, she was a businesswoman', ico: '💼' }, { txt: 'Yes, she could swim', ico: '🏊' }, { txt: 'It is on the table', ico: '🪑' }] },
            { q: 'How could Dad hear old songs?', scene: '👨📼🎵', ans: 'He could play a cassette', opts: [{ txt: 'He could play a cassette', ico: '📼' }, { txt: 'He could pour champagne', ico: '🍾' }, { txt: 'He could sleep in a cab', ico: '🚕' }] },
            { q: 'Could the chimpanzee climb a tree?', scene: '🐒🌳🧗', ans: 'Yes, it could climb very well', opts: [{ txt: 'Yes, it could climb very well', ico: '🐒' }, { txt: 'Yes, it was in the bank', ico: '🏦' }, { txt: 'It is a red bus', ico: '🚌' }] },
            { q: 'How many centimeters could you jump?', scene: '📏🦘👦', ans: 'I could jump fifty centimeters', opts: [{ txt: 'I could jump fifty centimeters', ico: '📏' }, { txt: 'I could eat cereal', ico: '🥣' }, { txt: 'It was in the cafeteria', ico: '🍽️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảng Kỹ Năng Của Con',
            steps: [
              '<b>Bước 1:</b> Con kẻ một bảng 2 cột trên giấy: "When I was seven" và "Now". Ghi vào cột đầu 5 việc con làm được hồi 7 tuổi, ví dụ đạp xe, nấu mì, trồng cà rốt.',
              '<b>Bước 2:</b> Con nói to từng việc bằng tiếng Anh: <i>"I could ride a bike."</i> và <i>"I couldn\'t cook rice."</i>',
              '<b>Bước 3:</b> Đổi cặp với một bạn, hỏi <i>"What could you do?"</i> rồi tìm xem hai bạn có kỹ năng nào giống nhau.'
            ]
          }
        },
        {
          id: '4.14C', name: 'Bài 4.14C: Nhờ người khác làm gì',
          grammar: {
            formulas: ['👩 Mom + 💬 wants + 👦 me + 🧹 to clean', '👨 Dad + 📣 tells + 👧 us + 🎯 to try', '👦 I + 🙏 would like + 🧑 you + 🤝 to help'],
            tip: 'want / ask / tell + người + to + động từ gốc • would like cũng vậy, và nhớ người đứng TRƯỚC to, không nói "want to he"!'
          },
          chunks: [
            { scene: '👩🍳🧽', full: 'Mom wants me to clean the cooker', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'wants',ico:'💬',c:'v'}, {t:'me to clean the cooker',ico:'🍳',c:'o'}], traceWord: 'cooker' },
            { scene: '👔📞💼', full: 'The boss asks the clerk to call me', parts: [{t:'The boss',ico:'👔',c:'s'}, {t:'asks',ico:'🙏',c:'v'}, {t:'the clerk to call me',ico:'📞',c:'o'}], traceWord: 'clerk' },
            { scene: '👨🧗⛰️', full: 'Dad tells us to try climbing on Sunday', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'tells',ico:'📣',c:'v'}, {t:'us to try climbing on Sunday',ico:'🧗',c:'o'}], traceWord: 'climbing' },
            { scene: '👦🧹🪟', full: 'I would like the cleaner to open the window', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would like',ico:'🙏',c:'v'}, {t:'the cleaner to open the window',ico:'🧹',c:'o'}], traceWord: 'cleaner' },
            { scene: '👧🤡🎩', full: 'Lan wants the clown to make a colorful hat', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'wants',ico:'💬',c:'v'}, {t:'the clown to make a colorful hat',ico:'🤡',c:'o'}], traceWord: 'clown' },
            { scene: '👨👦🪮', full: 'Mr Tan asks his son to comb his hair', parts: [{t:'Mr Tan',ico:'👨',c:'s'}, {t:'asks',ico:'🙏',c:'v'}, {t:'his son to comb his hair',ico:'🪮',c:'o'}], traceWord: 'comb' },
            { scene: '👩🥤🏪', full: 'Mom tells me to buy cola', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'tells',ico:'📣',c:'v'}, {t:'me to buy cola',ico:'🥤',c:'o'}], traceWord: 'cola' },
            { scene: '👦📖😂', full: 'Nam wants me to read a funny comic today', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'wants',ico:'💬',c:'v'}, {t:'me to read a funny comic today',ico:'📖',c:'o'}], traceWord: 'comic' }
          ],
          qaList: [
            { q: 'What does your mom want you to do?', scene: '👩👦🍳', ans: 'She wants me to help with cooking', opts: [{ txt: 'She wants me to help with cooking', ico: '🍳' }, { txt: 'She wants me to fly a bus', ico: '🚌' }, { txt: 'I am in the bank', ico: '🏦' }] },
            { q: 'Why is the convenience store convenient?', scene: '🏪🏠👌', ans: 'Because it is near my house', opts: [{ txt: 'Because it is near my house', ico: '🏠' }, { txt: 'Because it has a big chin', ico: '🧔' }, { txt: 'Because the cat is blue', ico: '🐱' }] },
            { q: 'Why are you confused?', scene: '😕🧊🚗', ans: 'Mom asks me to find the cooler', opts: [{ txt: 'Mom asks me to find the cooler', ico: '🧊' }, { txt: 'I have a new comb', ico: '🪮' }, { txt: 'Yes, I like pizza', ico: '🍕' }] },
            { q: 'What do you hear in the morning?', scene: '🌅🐦🎵', ans: 'I hear a happy chirp', opts: [{ txt: 'I hear a happy chirp', ico: '🐦' }, { txt: 'I touch my chin', ico: '🧔' }, { txt: 'I see a red cooker', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Trò Chơi Ông Chủ Ra Lệnh',
            steps: [
              '<b>Bước 1:</b> Con và một bạn bốc thăm vai: một bạn là "boss", bạn kia là "clerk". Viết 4 việc nhỏ ra giấy như đóng cửa sổ, mang cốc nước, cất sách, chải tóc.',
              '<b>Bước 2:</b> "Boss" nói bằng tiếng Anh, ví dụ <i>"I would like you to open the window."</i> hoặc <i>"I want you to comb your hair."</i>, "clerk" làm theo.',
              '<b>Bước 3:</b> Đổi vai, lần này dùng <i>"I ask you to..."</i> và <i>"I tell you to..."</i>, rồi tự chấm xem ai nói đúng nhiều câu hơn.'
            ]
          }
        }
      ]
    },
    '4.15': {
      lessons: [
        {
          id: '4.15A', name: 'Bài 4.15A: Sở thú và rừng rậm',
          grammar: {
            formulas: ['👦 We + ⚡ stop + 🚴 cycling (dừng hẳn việc đang làm)', '👧 Mai + ⚡ remembers + 📝 to put the curry (nhớ để làm)', '👦 Tom + ⚡ tries + 💡 to use his creativity (cố gắng làm)'],
            tip: 'stop + V-ing = dừng việc đang làm • stop + to V = dừng lại để làm việc khác • remember to V = nhớ phải làm, remember V-ing = nhớ chuyện đã xảy ra!'
          },
          chunks: [
            { scene: '🚴🛑🏙️👥', full: 'We stop cycling in the crowded city', parts: [{t:'We',ico:'👫',c:'s'}, {t:'stop',ico:'🛑',c:'v'}, {t:'cycling in the crowded city',ico:'🚴',c:'o'}], traceWord: 'cycling' },
            { scene: '👦🛑🥔🏪', full: 'He stopped to buy crisps at the shop', parts: [{t:'He',ico:'👦',c:'s'}, {t:'stopped',ico:'🛑',c:'v'}, {t:'to buy crisps at the shop',ico:'🥔',c:'o'}], traceWord: 'crisps' },
            { scene: '👧🍛🗄️', full: 'Mai remembers to put the curry in the cupboard', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'remembers',ico:'🧠',c:'v'}, {t:'to put the curry in the cupboard',ico:'🍛',c:'o'}], traceWord: 'cupboard' },
            { scene: '🧑🧠🦗🌾', full: 'I remember seeing a cricket in the countryside', parts: [{t:'I',ico:'🧑',c:'s'}, {t:'remember',ico:'🧠',c:'v'}, {t:'seeing a cricket in the countryside',ico:'🦗',c:'o'}], traceWord: 'cricket' },
            { scene: '💃🛑👑', full: 'The dancer stopped dancing and put on a crown', parts: [{t:'The dancer',ico:'💃',c:'s'}, {t:'stopped',ico:'🛑',c:'v'}, {t:'dancing and put on a crown',ico:'👑',c:'o'}], traceWord: 'dancer' },
            { scene: '👦🎨💡', full: 'Tom tries to use his creativity every day', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'tries',ico:'💪',c:'v'}, {t:'to use his creativity every day',ico:'🎨',c:'o'}], traceWord: 'creativity' },
            { scene: '👧🚴🌤️', full: 'Anna tried cycling in daylight after the rain', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'tried',ico:'💪',c:'v'}, {t:'cycling in daylight after the rain',ico:'🌤️',c:'o'}], traceWord: 'daylight' },
            { scene: '🦷🧼🙌', full: 'The dentist remembers to wash his hands', parts: [{t:'The dentist',ico:'🦷',c:'s'}, {t:'remembers',ico:'🧠',c:'v'}, {t:'to wash his hands',ico:'🧼',c:'o'}], traceWord: 'dentist' }
          ],
          qaList: [
            { q: 'Where do people ride on a cruise?', scene: '🚢🌊', ans: 'They ride on a big ship', opts: [{txt:'They ride on a big ship',ico:'🚢'}, {txt:'They ride in a small cupboard',ico:'🗄️'}, {txt:'They ride under a hot oven',ico:'🔥'}] },
            { q: 'What does a dam hold back in a river?', scene: '🏞️💧', ans: 'It holds back a lot of water', opts: [{txt:'It holds back a lot of water',ico:'💧'}, {txt:'It holds back the bright sun',ico:'☀️'}, {txt:'It holds back a sweet cake',ico:'🍰'}] },
            { q: 'Is a curse a good wish for you?', scene: '🤬❌', ans: 'No, a curse is a bad wish', opts: [{txt:'No, a curse is a bad wish',ico:'👎'}, {txt:'Yes, a curse is a sweet gift',ico:'🎁'}, {txt:'Yes, a curse is a nice song',ico:'🎵'}] },
            { q: 'What do you do after you stop cycling?', scene: '🚴🛑', ans: 'I drink some water and relax', opts: [{txt:'I drink some water and relax',ico:'💧'}, {txt:'I eat my bike for lunch',ico:'🚲'}, {txt:'I drink the road and sky',ico:'🛣️'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Dừng lại hay nhớ làm?',
            steps: [
              '<b>Bước 1:</b> Viết 6 thẻ giấy: 3 thẻ có hoạt động (<i>"cycling"</i>, <i>"dancing"</i>, <i>"reading"</i>) và 3 thẻ có việc cần làm (<i>"buy crisps"</i>, <i>"wash my hands"</i>, <i>"put the curry in the cupboard"</i>).',
              '<b>Bước 2:</b> Bốc một thẻ và nói câu đúng. Thẻ hoạt động thì nói <i>"I stop dancing."</i>; thẻ việc cần làm thì nói <i>"I stop to buy crisps."</i> hoặc <i>"I remember to wash my hands."</i>',
              '<b>Bước 3:</b> Làm động tác thật cho câu vừa nói (đang nhảy rồi dừng lại, hoặc đi mua đồ). Nói đúng cấu trúc 5 lần liên tiếp là thắng, rồi đổi lượt với bạn.'
            ]
          }
        },
        {
          id: '4.15B', name: 'Bài 4.15B: Bảo tồn loài vật',
          grammar: {
            formulas: ['🦖 Dinosaur bones + ⚡ can be seen + 🏛️ in the museum', '💎 A diamond + ⚡ must be kept + 🔒 in a safe place', '📚 The homework + ⚡ must be done + ⏰ before dinner'],
            tip: 'Bị động với modal = modal + be + V3 (can be seen, must be done) • be luôn giữ nguyên dạng "be", không bao giờ thêm -s!'
          },
          chunks: [
            { scene: '🦖🦴🏛️', full: 'Old dinosaur bones can be seen in the museum', parts: [{t:'Old dinosaur bones',ico:'🦖',c:'s'}, {t:'can be seen',ico:'👀',c:'v'}, {t:'in the museum',ico:'🏛️',c:'o'}], traceWord: 'dinosaur' },
            { scene: '💎🔒🏠', full: 'A big diamond must be kept in a safe place', parts: [{t:'A big diamond',ico:'💎',c:'s'}, {t:'must be kept',ico:'🔒',c:'v'}, {t:'in a safe place',ico:'🏠',c:'o'}], traceWord: 'diamond' },
            { scene: '🍰👩‍🍳⏱️', full: 'The dessert can be made in ten minutes', parts: [{t:'The dessert',ico:'🍰',c:'s'}, {t:'can be made',ico:'👩‍🍳',c:'v'}, {t:'in ten minutes',ico:'⏱️',c:'o'}], traceWord: 'dessert' },
            { scene: '📸⬇️🎉', full: 'The photos must be downloaded before the party starts', parts: [{t:'The photos',ico:'📸',c:'s'}, {t:'must be downloaded',ico:'⬇️',c:'v'}, {t:'before the party starts',ico:'🎉',c:'o'}], traceWord: 'downloaded' },
            { scene: '👕🗃️🔽', full: 'Your clothes must be put in the drawer downstairs', parts: [{t:'Your clothes',ico:'👕',c:'s'}, {t:'must be put',ico:'📥',c:'v'}, {t:'in the drawer downstairs',ico:'🗃️',c:'o'}], traceWord: 'drawer' },
            { scene: '🪩🏙️🎶', full: 'The new disco can be found downtown', parts: [{t:'The new disco',ico:'🪩',c:'s'}, {t:'can be found',ico:'🔎',c:'v'}, {t:'downtown',ico:'🏙️',c:'o'}], traceWord: 'disco' },
            { scene: '👧👦🧥❄️', full: 'The kids must be dressed for the cold weather', parts: [{t:'The kids',ico:'👧',c:'s'}, {t:'must be dressed',ico:'🧥',c:'v'}, {t:'for the cold weather',ico:'❄️',c:'o'}], traceWord: 'dressed' },
            { scene: '📚✅🍽️', full: 'The homework must be done before dinner', parts: [{t:'The homework',ico:'📚',c:'s'}, {t:'must be done',ico:'✅',c:'v'}, {t:'before dinner',ico:'🍽️',c:'o'}], traceWord: 'done' }
          ],
          qaList: [
            { q: 'How do you feel after a disappointing game?', scene: '⚽😞', ans: 'I feel disappointed and a little sad', opts: [{txt:'I feel disappointed and a little sad',ico:'😞'}, {txt:'I feel excited and very lucky',ico:'🤩'}, {txt:'I feel happy and very tired',ico:'😄'}] },
            { q: 'Is it good to be dishonest with friends?', scene: '🤥👫', ans: 'No, we should not lie to friends', opts: [{txt:'No, we should not lie to friends',ico:'🙅'}, {txt:'Yes, we should lie to every friend',ico:'🤥'}, {txt:'Yes, it is a very nice thing',ico:'👍'}] },
            { q: 'Why do you feel dizzy on a big boat?', scene: '🚢😵‍💫', ans: 'The boat moves up and down', opts: [{txt:'The boat moves up and down',ico:'🌊'}, {txt:'The boat is quiet and still',ico:'🤫'}, {txt:'My shoes are too small',ico:'👟'}] },
            { q: 'Is noise a dislike for many people in developed cities?', scene: '🏙️🔊', ans: 'Yes, many people dislike noise a lot', opts: [{txt:'Yes, many people dislike noise a lot',ico:'👎'}, {txt:'No, everyone loves the noise',ico:'😍'}, {txt:'No, noise is a kind of fruit',ico:'🍎'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Việc gì phải được làm?',
            steps: [
              '<b>Bước 1:</b> Cùng bạn nhìn quanh phòng và chọn 6 đồ vật (sách, áo, bút, bình nước, túi, hộp). Đặt chúng lên bàn.',
              '<b>Bước 2:</b> Lần lượt chỉ vào một đồ vật và nói câu bị động, ví dụ <i>"The book must be put in the drawer."</i> hoặc <i>"The photos can be seen on the wall."</i> Dùng <b>can be</b> hoặc <b>must be</b> + V3.',
              '<b>Bước 3:</b> Bạn nghe xong thì làm đúng việc đó với đồ vật (cất sách vào ngăn kéo). Làm đúng thì được 1 điểm, ai có 6 điểm trước là thắng.'
            ]
          }
        },
        {
          id: '4.15C', name: 'Bài 4.15C: Thế giới động vật',
          grammar: {
            formulas: ['🦆 The duck + ⚡ is + 😃 quite energetic', '🎪 The zoo show + ⚡ is + 🤩 extremely fascinating', '📈 The more you practice + 🧠 the more you + ⚡ learn'],
            tip: 'quite và fairly đi với tính từ thường (quite fast) • extremely đi với tính từ mạnh (extremely fascinating) • The more ..., the more ... = càng ... càng ...!'
          },
          chunks: [
            { scene: '🦆⚡☀️', full: 'The duck is quite energetic today', parts: [{t:'The duck',ico:'🦆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'quite energetic today',ico:'😃',c:'o'}], traceWord: 'energetic' },
            { scene: '📖🎬😢', full: 'The ending of the story is fairly sad', parts: [{t:'The ending of the story',ico:'🎬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'fairly sad',ico:'😢',c:'o'}], traceWord: 'ending' },
            { scene: '🎪🐼🤩', full: 'The zoo show about endangered animals is extremely fascinating', parts: [{t:'The zoo show about endangered animals',ico:'🐼',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'extremely fascinating',ico:'🤩',c:'o'}], traceWord: 'endangered' },
            { scene: '👧💍❤️', full: 'The more she wears the earring, the more she loves it', parts: [{t:'The more she wears the earring, the more she',ico:'👧',c:'s'}, {t:'loves',ico:'❤️',c:'v'}, {t:'it',ico:'💍',c:'o'}], traceWord: 'earring' },
            { scene: '🎢🏬⚡', full: 'The new escalator in the mall is fairly fast', parts: [{t:'The new escalator in the mall',ico:'🎢',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'fairly fast',ico:'💨',c:'o'}], traceWord: 'escalator' },
            { scene: '🛗🏫🐌', full: 'The elevator at school is quite slow today', parts: [{t:'The elevator at school',ico:'🛗',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'quite slow today',ico:'🐌',c:'o'}], traceWord: 'elevator' },
            { scene: '🚌💶🎫', full: 'The bus fare is only two euros', parts: [{t:'The bus fare',ico:'🚌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'only two euros',ico:'💶',c:'o'}], traceWord: 'euros' },
            { scene: '👷🔩💊', full: 'The workers use a drill near the drugstore', parts: [{t:'The workers',ico:'👷',c:'s'}, {t:'use',ico:'🛠️',c:'v'}, {t:'a drill near the drugstore',ico:'🔩',c:'o'}], traceWord: 'drill' }
          ],
          qaList: [
            { q: 'Is an earthquake quite dangerous for people?', scene: '🌋🏠', ans: 'Yes, an earthquake is very dangerous', opts: [{txt:'Yes, an earthquake is very dangerous',ico:'⚠️'}, {txt:'No, an earthquake is a kind of cake',ico:'🍰'}, {txt:'No, an earthquake is a sweet dessert',ico:'🍨'}] },
            { q: 'Is it embarrassing to fall in front of the class?', scene: '😳🏫', ans: 'Yes, it can be quite embarrassing', opts: [{txt:'Yes, it can be quite embarrassing',ico:'😳'}, {txt:'No, it is a kind of fruit',ico:'🍎'}, {txt:'No, it is a tall tree',ico:'🌳'}] },
            { q: 'Does envy make people feel happy?', scene: '😒❓', ans: 'No, envy makes people feel sad inside', opts: [{txt:'No, envy makes people feel sad inside',ico:'😞'}, {txt:'Yes, envy makes people feel very great',ico:'😄'}, {txt:'Yes, envy is a sweet cake',ico:'🍰'}] },
            { q: 'What happens the more you practice English?', scene: '📚📈', ans: 'The more I practice, the better I get', opts: [{txt:'The more I practice, the better I get',ico:'📈'}, {txt:'The more I practice, the less I learn',ico:'📉'}, {txt:'The more I sleep, the less I eat',ico:'😴'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Càng ... càng ...',
            steps: [
              '<b>Bước 1:</b> Chọn 5 con vật hoặc đồ vật quen thuộc (con vịt đồ chơi, thang cuốn, tiền vé xe buýt...). Viết mỗi thứ lên một mảnh giấy.',
              '<b>Bước 2:</b> Bốc một mảnh và nói một câu với <i>"quite"</i>, <i>"fairly"</i> hoặc <i>"extremely"</i>, ví dụ <i>"The duck is quite energetic."</i> hoặc <i>"The show is extremely fascinating."</i>',
              '<b>Bước 3:</b> Thêm một câu <i>"The more ..., the more ..."</i>, ví dụ <i>"The more I practice, the more I enjoy it."</i> Nói được cả hai câu cho cả 5 mảnh giấy là hoàn thành.'
            ]
          }
        }
      ]
    },
    '4.16': {
      lessons: [
        {
          id: '4.16A', name: 'Bài 4.16A: Dự báo thời tiết',
          grammar: {
            formulas: ['👨‍🌾 The fisherman + ⚡ will go + 🏠 home when the fog comes', '🌧️ It + ⚡ will stop + ⏰ as soon as the rain ends', '👩 Mom + ⚡ will cook + 🍽️ before dinner starts'],
            tip: 'Sau when / as soon as / before nói về tương lai, mệnh đề thời gian vẫn dùng hiện tại: when it rains, KHÔNG phải when it will rain!'
          },
          chunks: [
            { scene: '🎣🌫️🏠', full: 'The fisherman will go home when the fog comes', parts: [{t:'The fisherman',ico:'🎣',c:'s'}, {t:'will go',ico:'⚡',c:'v'}, {t:'home when the fog comes',ico:'🌫️🏠',c:'o'}], traceWord: 'fisherman' },
            { scene: '⚽🌧️🍀', full: 'Fortunately the footballer will play when the rain stops', parts: [{t:'Fortunately the footballer',ico:'🍀⚽',c:'s'}, {t:'will play',ico:'⚡',c:'v'}, {t:'when the rain stops',ico:'🌦️',c:'o'}], traceWord: 'fortunately' },
            { scene: '👩🍳🧊', full: 'Mom will put the fried fish in the fridge before dinner', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'will put',ico:'⚡',c:'v'}, {t:'the fried fish in the fridge before dinner',ico:'🍳🧊',c:'o'}], traceWord: 'fridge' },
            { scene: '👶⛈️😨', full: 'The baby is frightened when the thunderstorm starts', parts: [{t:'The baby',ico:'👶',c:'s'}, {t:'is frightened',ico:'😨',c:'v'}, {t:'when the thunderstorm starts',ico:'⛈️',c:'o'}], traceWord: 'frightened' },
            { scene: '🌪️😱⏰', full: 'The storm looks frightening but it will stop soon', parts: [{t:'The storm',ico:'🌪️',c:'s'}, {t:'looks frightening',ico:'😱',c:'v'}, {t:'but it will stop soon',ico:'⏰',c:'o'}], traceWord: 'frightening' },
            { scene: '👩‍🏫🗣️🌧️', full: 'Our frank teacher will tell us when the rain stops', parts: [{t:'Our frank teacher',ico:'👩‍🏫🗣️',c:'s'}, {t:'will tell',ico:'⚡',c:'v'}, {t:'us when the rain stops',ico:'🌧️',c:'o'}], traceWord: 'frank' },
            { scene: '🥊🪶💨', full: 'The fighter will wear a feather hat when the wind blows', parts: [{t:'The fighter',ico:'🥊',c:'s'}, {t:'will wear',ico:'⚡',c:'v'}, {t:'a feather hat when the wind blows',ico:'🪶💨',c:'o'}], traceWord: 'feather' },
            { scene: '👩🚫🌪️', full: 'Mom will forbid us to go out when the storm comes', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'will forbid',ico:'🚫',c:'v'}, {t:'us to go out when the storm comes',ico:'🌪️🚪',c:'o'}], traceWord: 'forbid' }
          ],
          qaList: [
            { q: 'What will you do as soon as you get home?', scene: '🏠📁', ans: 'I will put the folder on the desk', opts: [{ txt: 'I will put the folder on the desk', ico: '📁' }, { txt: 'I will eat the rain', ico: '🌧️' }, { txt: 'I will drive the moon', ico: '🌙' }] },
            { q: 'What will Mom use before she makes the cake?', scene: '👩🌾🎂', ans: 'She will get the flour', opts: [{ txt: 'She will get the flour', ico: '🌾' }, { txt: 'She will get the moon', ico: '🌙' }, { txt: 'She will get a bus', ico: '🚌' }] },
            { q: 'What will you use when you eat the pasta?', scene: '🍝🍴', ans: 'I will use a fork', opts: [{ txt: 'I will use a fork', ico: '🍴' }, { txt: 'I will use a door', ico: '🚪' }, { txt: 'I will use a cloud', ico: '☁️' }] },
            { q: 'What will the dog do when a flea bites it?', scene: '🐶🐜', ans: 'It will run around the yard', opts: [{ txt: 'It will run around the yard', ico: '🐕' }, { txt: 'It will read a book', ico: '📖' }, { txt: 'It will drive a bus', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản Tin Dự Báo Thời Tiết',
            steps: [
              '<b>Bước 1:</b> Nhìn ra cửa sổ hoặc xem dự báo thời tiết trên điện thoại. Viết ra 3 câu trên giấy, ví dụ: <i>"I will take an umbrella when it rains."</i>',
              '<b>Bước 2:</b> Đổi 3 câu thành bản tin của người dẫn chương trình. Nhớ dùng <i>"when"</i>, <i>"as soon as"</i> và <i>"before"</i> với thì hiện tại ở phía sau.',
              '<b>Bước 3:</b> Đọc bản tin to trước gương hoặc trước một người bạn, rồi nhờ bạn đoán bạn sẽ làm gì khi trời mưa, có sương mù hoặc có gió.'
            ]
          }
        },
        {
          id: '4.16B', name: 'Bài 4.16B: An toàn khi có bão',
          grammar: {
            formulas: ['⛈️ It + ⚡ will probably + 🌧️ rain tonight', '👵 Granny + ⚡ is likely to + 🏠 stay at home', '🌪️ The storm + ⚡ will definitely + 💨 come'],
            tip: 'Chắc 90% thì dùng will probably, chắc 100% thì dùng definitely, còn is likely to đi với động từ nguyên mẫu: likely to + V!'
          },
          chunks: [
            { scene: '👵🏠⛈️', full: 'Granny will probably stay at home during the storm', parts: [{t:'Granny',ico:'👵',c:'s'}, {t:'will probably stay',ico:'⚡',c:'v'}, {t:'at home during the storm',ico:'🏠⛈️',c:'o'}], traceWord: 'granny' },
            { scene: '👴🚗🏠', full: 'Granddad is likely to park the car in the garage', parts: [{t:'Granddad',ico:'👴',c:'s'}, {t:'is likely to park',ico:'⚡',c:'v'}, {t:'the car in the garage',ico:'🚗🏠',c:'o'}], traceWord: 'garage' },
            { scene: '👦🧤💨', full: 'Her grandson will certainly wear gloves in the cold wind', parts: [{t:'Her grandson',ico:'👦',c:'s'}, {t:'will certainly wear',ico:'⚡',c:'v'}, {t:'gloves in the cold wind',ico:'🧤💨',c:'o'}], traceWord: 'gloves' },
            { scene: '👧⛈️😟', full: 'My granddaughter is likely to be afraid of the thunderstorm', parts: [{t:'My granddaughter',ico:'👧',c:'s'}, {t:'is likely to be',ico:'⚡',c:'v'}, {t:'afraid of the thunderstorm',ico:'😟⛈️',c:'o'}], traceWord: 'granddaughter' },
            { scene: '👶🏠🌙', full: 'Every grandchild will probably stay inside tonight', parts: [{t:'Every grandchild',ico:'👶',c:'s'}, {t:'will probably stay',ico:'⚡',c:'v'}, {t:'inside tonight',ico:'🏠🌙',c:'o'}], traceWord: 'grandchild' },
            { scene: '👨‍👩‍👧🍖🔌', full: 'We will probably eat grilled fish when the power goes out', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will probably eat',ico:'⚡',c:'v'}, {t:'grilled fish when the power goes out',ico:'🍖🐟',c:'o'}], traceWord: 'grilled' },
            { scene: '👩🧄🍳', full: 'Mom will certainly fry garlic for dinner tonight', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'will certainly fry',ico:'⚡',c:'v'}, {t:'garlic for dinner tonight',ico:'🧄🍽️',c:'o'}], traceWord: 'garlic' },
            { scene: '🤑🍽️👨', full: 'The greedy man is likely to take all the food', parts: [{t:'The greedy man',ico:'🤑',c:'s'}, {t:'is likely to take',ico:'⚡',c:'v'}, {t:'all the food',ico:'🍽️',c:'o'}], traceWord: 'greedy' }
          ],
          qaList: [
            { q: 'Why does everyone watch the dancer?', scene: '💃🕊️', ans: 'She moves with great grace', opts: [{ txt: 'She moves with great grace', ico: '🕊️' }, { txt: 'She moves with a big door', ico: '🚪' }, { txt: 'She moves with great lunch', ico: '🍱' }] },
            { q: 'Will the good-looking pilot come tonight?', scene: '😎✈️🌙', ans: 'He will probably come tonight', opts: [{ txt: 'He will probably come tonight', ico: '😎' }, { txt: 'He was a red banana', ico: '🍌' }, { txt: 'He is a small cup', ico: '🥤' }] },
            { q: 'Where will you find the globe?', scene: '🌍🔍', ans: 'It is probably on the desk', opts: [{ txt: 'It is probably on the desk', ico: '🌍' }, { txt: 'It is likely to be in my ear', ico: '👂' }, { txt: 'It is on the sun', ico: '☀️' }] },
            { q: 'What is likely to change at a given time?', scene: '🎁⏰🌦️', ans: 'The weather is likely to change', opts: [{ txt: 'The weather is likely to change', ico: '🌦️' }, { txt: 'The desk is likely to swim', ico: '🏊' }, { txt: 'The door is likely to sing', ico: '🎤' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Túi Đồ Khẩn Cấp Khi Có Bão',
            steps: [
              '<b>Bước 1:</b> Lấy một chiếc túi và bỏ vào 4 đồ vật có sẵn trong nhà như đèn pin, nước, găng tay hoặc đồ ăn nhẹ. Gọi tên từng thứ bằng tiếng Anh.',
              '<b>Bước 2:</b> Với mỗi đồ vật, nói một câu dự đoán, ví dụ: <i>"We will probably need water."</i> hoặc <i>"The power is likely to go out."</i>',
              '<b>Bước 3:</b> Cùng bạn thi xem ai nói được nhiều câu về cơn bão hơn trong 2 phút. Mỗi câu đúng ngữ pháp được 1 điểm.'
            ]
          }
        },
        {
          id: '4.16C', name: 'Bài 4.16C: Giả sử có chuyện xảy ra',
          grammar: {
            formulas: ['🙋 If I + ⚡ were + 👩‍🏫 the headteacher', '🙋 I + ⚡ would + 🎁 give less homework', '🙋 If I were rich + ⚡ I would buy + 👜 a new handbag'],
            tip: 'Giả sử không có thật thì dùng if I WERE (không dùng "was") và vế sau luôn là I would + động từ nguyên mẫu!'
          },
          chunks: [
            { scene: '🧑‍🏫📚🙋', full: 'If I were the headteacher I would give less homework', parts: [{t:'If I were the headteacher I',ico:'🧑‍🏫',c:'s'}, {t:'would give',ico:'🎁',c:'v'}, {t:'less homework',ico:'📚',c:'o'}], traceWord: 'headteacher' },
            { scene: '💰🛍️👜', full: 'If I were rich I would buy a new handbag', parts: [{t:'If I were rich I',ico:'💰',c:'s'}, {t:'would buy',ico:'🛍️',c:'v'}, {t:'a new handbag',ico:'👜',c:'o'}], traceWord: 'handbag' },
            { scene: '🏒😊🆓', full: 'If I were free I would play hockey happily', parts: [{t:'If I were free I',ico:'🙋',c:'s'}, {t:'would play',ico:'⚡',c:'v'}, {t:'hockey happily',ico:'🏒😊',c:'o'}], traceWord: 'hockey' },
            { scene: '🥾⛰️📘', full: 'If I were on a hike I would carry a guidebook', parts: [{t:'If I were on a hike I',ico:'🥾',c:'s'}, {t:'would carry',ico:'🎒',c:'v'}, {t:'a guidebook',ico:'📘',c:'o'}], traceWord: 'hike' },
            { scene: '🏔️🥾☀️', full: 'If I were you I would go hiking on Sunday', parts: [{t:'If I were you I',ico:'🙋',c:'s'}, {t:'would go',ico:'⚡',c:'v'}, {t:'hiking on Sunday',ico:'🏔️📅',c:'o'}], traceWord: 'hiking' },
            { scene: '🥶♨️🏠', full: 'If I were cold I would turn on the heating', parts: [{t:'If I were cold I',ico:'🥶',c:'s'}, {t:'would turn on',ico:'🔛',c:'v'}, {t:'the heating',ico:'♨️',c:'o'}], traceWord: 'heating' },
            { scene: '🏷️👟🛒', full: 'If I were at the shop I would buy half-price shoes', parts: [{t:'If I were at the shop I',ico:'🛒',c:'s'}, {t:'would buy',ico:'💳',c:'v'}, {t:'half-price shoes',ico:'🏷️👟',c:'o'}], traceWord: 'shoes' },
            { scene: '🧑‍⚕️🚭☣️', full: 'If I were a doctor I would say smoking is harmful', parts: [{t:'If I were a doctor I',ico:'🧑‍⚕️',c:'s'}, {t:'would say',ico:'🗣️',c:'v'}, {t:'smoking is harmful',ico:'🚭☣️',c:'o'}], traceWord: 'harmful' }
          ],
          qaList: [
            { q: 'Hey, what would you eat with bread?', scene: '👋🥓🍞', ans: 'I would eat ham', opts: [{ txt: 'I would eat ham', ico: '🥓' }, { txt: 'I would eat a chair', ico: '🪑' }, { txt: 'I would eat a clock', ico: '🕐' }] },
            { q: 'If you were on a bus, what would you use to hear music?', scene: '🚌🎧🎶', ans: 'I would use my headphones', opts: [{ txt: 'I would use my headphones', ico: '🎧' }, { txt: 'I would use my shoes', ico: '👟' }, { txt: 'I would use my window', ico: '🪟' }] },
            { q: 'What would you do if you were on the highway?', scene: '🛣️🚗', ans: 'I would drive carefully', opts: [{ txt: 'I would drive carefully', ico: '🚗' }, { txt: 'I would sleep on the road', ico: '😴' }, { txt: 'I would swim in the car', ico: '🏊' }] },
            { q: 'How would you help handicapped people if you were a leader?', scene: '♿🤝🎶', ans: 'I would help everyone live in harmony', opts: [{ txt: 'I would help everyone live in harmony', ico: '🎶' }, { txt: 'I would leave them alone', ico: '🚶' }, { txt: 'I would run away fast', ico: '🏃' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nếu Mình Là...',
            steps: [
              '<b>Bước 1:</b> Viết tên 5 nghề hoặc nhân vật lên 5 mảnh giấy nhỏ, ví dụ hiệu trưởng, bác sĩ, người giàu, người lái xe, vận động viên. Úp các mảnh giấy xuống bàn.',
              '<b>Bước 2:</b> Lật một mảnh giấy rồi nói câu bắt đầu bằng <i>"If I were ..."</i>, ví dụ: <i>"If I were a doctor, I would help sick people."</i>',
              '<b>Bước 3:</b> Chơi cùng bạn, mỗi người lật 3 mảnh. Câu nào dùng đúng <i>"were"</i> và <i>"would"</i> thì được 1 điểm, ai nhiều điểm hơn là người thắng.'
            ]
          }
        }
      ]
    },
    '4.17': {
      lessons: [
        {
          id: '4.17A', name: 'Bài 4.17A: Những phát minh nổi tiếng',
          grammar: {
            formulas: ['🎁 The jam + ⚡ was made + 👩 by my mother', '❓ Who + 🎁 was the jam + 👩 made by?'],
            tip: 'Việc xảy ra trong quá khứ + người làm ra nó? Dùng "was + V3 + by" nhé • Hỏi người làm thì kết thúc câu bằng "by"!'
          },
          chunks: [
            { scene: '🍓🍞👩', full: 'The jam was made by my mother', parts: [{t:'The jam',ico:'🍓',c:'s'}, {t:'was made',ico:'⚡',c:'v'}, {t:'by my mother',ico:'👩',c:'o'}], traceWord: 'jam' },
            { scene: '🔬💡👨‍🔬', full: 'This invention was made by a scientist', parts: [{t:'This invention',ico:'🔬',c:'s'}, {t:'was made',ico:'⚡',c:'v'}, {t:'by a scientist',ico:'👨‍🔬',c:'o'}], traceWord: 'invention' },
            { scene: '🍯🐝👨‍🌾', full: 'The honey was sold by a farmer', parts: [{t:'The honey',ico:'🍯',c:'s'}, {t:'was sold',ico:'💰',c:'v'}, {t:'by a farmer',ico:'👨‍🌾',c:'o'}], traceWord: 'honey' },
            { scene: '🍜🥣👨‍🍳', full: 'Instant soup was invented by a clever chef', parts: [{t:'Instant soup',ico:'🍜',c:'s'}, {t:'was invented',ico:'💡',c:'v'}, {t:'by a clever chef',ico:'👨‍🍳',c:'o'}], traceWord: 'instant' },
            { scene: '🍮😋👧', full: 'The jelly was cooked by my sister', parts: [{t:'The jelly',ico:'🍮',c:'s'}, {t:'was cooked',ico:'🍳',c:'v'}, {t:'by my sister',ico:'👧',c:'o'}], traceWord: 'jelly' },
            { scene: '🪪🔍👮', full: 'The old id was found by a police officer', parts: [{t:'The old id',ico:'🪪',c:'s'}, {t:'was found',ico:'🔍',c:'v'}, {t:'by a police officer',ico:'👮',c:'o'}], traceWord: 'id' },
            { scene: '👻🎬✍️', full: 'A horror movie was written by a famous writer', parts: [{t:'A horror movie',ico:'👻',c:'s'}, {t:'was written',ico:'✍️',c:'v'}, {t:'by a famous writer',ico:'🌟',c:'o'}], traceWord: 'horror' },
            { scene: '🏹🐕🧠', full: 'The hunter was helped by an intelligent dog', parts: [{t:'The hunter',ico:'🏹',c:'s'}, {t:'was helped',ico:'🤝',c:'v'}, {t:'by an intelligent dog',ico:'🐕',c:'o'}], traceWord: 'intelligent' }
          ],
          qaList: [
            { q: 'Who was the jam made by?', scene: '🍓🍞👩', ans: 'It was made by my mother', opts: [{ txt: 'It was made by my mother', ico: '👩' }, { txt: 'I hug my little brother', ico: '🤗' }, { txt: 'In the kitchen', ico: '🏠' }] },
            { q: 'Why was the hunter impatient?', scene: '🏹😤⏳', ans: 'Because he waited a long time', opts: [{ txt: 'Because he waited a long time', ico: '⏳' }, { txt: 'Because it is inexpensive', ico: '💵' }, { txt: 'By a famous writer', ico: '✍️' }] },
            { q: 'Where was the indoor game played?', scene: '🏠🎲👧👦', ans: 'Inside the house', opts: [{ txt: 'Inside the house', ico: '🏠' }, { txt: 'From old junk', ico: '🍟' }, { txt: 'By my teacher', ico: '👩‍🏫' }] },
            { q: 'What gave the writer inspiration?', scene: '💡🏞️✍️', ans: 'A beautiful lake gave her inspiration', opts: [{ txt: 'A beautiful lake gave her inspiration', ico: '🏞️' }, { txt: 'The book was inexpensive', ico: '📕' }, { txt: 'Two hours ago', ico: '🕑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Ai Đã Làm Ra Nó?',
            steps: [
              '<b>Bước 1:</b> Chọn 5 đồ vật trong nhà (cái cốc, quyển sách, hộp mứt...). Tìm trên nhãn hoặc hỏi bạn xem mỗi món do ai làm ra hoặc ai bán.',
              '<b>Bước 2:</b> Đặt câu cho từng món, ví dụ <i>"The jam was made by my mother."</i>, rồi bạn của em hỏi lại <i>"Who was it made by?"</i>.',
              '<b>Bước 3:</b> Đổi vai, mỗi người nói đủ 5 câu bị động có "by" mà không nhìn ghi chú. Ghi lại số câu đúng.'
            ]
          }
        },
        {
          id: '4.17B', name: 'Bài 4.17B: Thí nghiệm ở phòng khoa học',
          grammar: {
            formulas: ['👦 We + ⚡ look forward to + 🔬 the lesson', '👦 I + ⚡ get on with + 🧑‍🎓 every learner', '👦 We + ⚡ run out of + 🍋 lemons'],
            tip: 'Cụm động từ ba thành phần gồm động từ + 2 từ nhỏ, luôn đi trọn bộ • Sau cụm là danh từ hoặc đại từ, không tách ra!'
          },
          chunks: [
            { scene: '🆕🔬📚', full: 'We look forward to the latest science lesson', parts: [{t:'We',ico:'👫',c:'s'}, {t:'look forward to',ico:'👀',c:'v'}, {t:'the latest science lesson',ico:'🆕',c:'o'}], traceWord: 'latest' },
            { scene: '🧑‍🎓🤝🏫', full: 'I get on with every learner in my class', parts: [{t:'I',ico:'👦',c:'s'}, {t:'get on with',ico:'🤝',c:'v'}, {t:'every learner in my class',ico:'🧑‍🎓',c:'o'}], traceWord: 'learner' },
            { scene: '🍋🔬😮', full: 'We run out of lemons in the science room', parts: [{t:'We',ico:'👫',c:'s'}, {t:'run out of',ico:'🏃',c:'v'}, {t:'lemons in the science room',ico:'🍋',c:'o'}], traceWord: 'lemons' },
            { scene: '🍹😮👧', full: 'She runs out of lemonade at lunch', parts: [{t:'She',ico:'👧',c:'s'}, {t:'runs out of',ico:'🏃',c:'v'}, {t:'lemonade at lunch',ico:'🍹',c:'o'}], traceWord: 'lemonade' },
            { scene: '🧰🔬👦', full: 'Tom gets on with his work using the new kit', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'gets on with',ico:'💪',c:'v'}, {t:'his work using the new kit',ico:'🧰',c:'o'}], traceWord: 'kit' },
            { scene: '🎉🔬🏫', full: 'Our class looks forward to a lively science show', parts: [{t:'Our class',ico:'🏫',c:'s'}, {t:'looks forward to',ico:'👀',c:'v'}, {t:'a lively science show',ico:'🎉',c:'o'}], traceWord: 'lively' },
            { scene: '⚖️🍬😮', full: 'We ran out of sugar after one kilo', parts: [{t:'We',ico:'👫',c:'s'}, {t:'ran out of',ico:'🏃',c:'v'}, {t:'sugar after one kilo',ico:'⚖️',c:'o'}], traceWord: 'kilo' },
            { scene: '😊👩‍🏫🧑‍🎓', full: 'The kindly teacher gets on with all the students', parts: [{t:'The kindly teacher',ico:'😊',c:'s'}, {t:'gets on with',ico:'🤝',c:'v'}, {t:'all the students',ico:'🧑‍🎓',c:'o'}], traceWord: 'kindly' }
          ],
          qaList: [
            { q: 'Which door is the science room?', scene: '🚪👈🔬', ans: 'The left-hand door', opts: [{ txt: 'The left-hand door', ico: '👈' }, { txt: 'A killer in a book', ico: '📕' }, { txt: 'A big kingdom', ico: '🏰' }] },
            { q: 'Is laziness good for a learner?', scene: '🦥📚🧑‍🎓', ans: 'No, laziness is bad for study', opts: [{ txt: 'No, laziness is bad for study', ico: '🦥' }, { txt: 'Yes, laziness is great fun', ico: '🎉' }, { txt: 'Turn left in the park', ico: '👈' }] },
            { q: 'Which lane do the cars use?', scene: '🛤️🚗🚗', ans: 'They use the left lane', opts: [{ txt: 'They use the left lane', ico: '🛤️' }, { txt: 'One kilogram', ico: '🏋️' }, { txt: 'It is made of paper', ico: '📄' }] },
            { q: 'What does liberty mean?', scene: '🗽💭🕊️', ans: 'Liberty means freedom', opts: [{ txt: 'Liberty means freedom', ico: '🗽' }, { txt: 'Liberty means a lemon', ico: '🍋' }, { txt: 'Liberty means very small', ico: '🐜' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bộ Thí Nghiệm Nhà Bếp',
            steps: [
              '<b>Bước 1:</b> Cùng bạn chuẩn bị một "bộ thí nghiệm" nhỏ: một quả chanh, đường, nước và một cái cốc. Mỗi người nói <i>"I look forward to the experiment!"</i> bằng cách dùng từ quen thuộc như <i>"lesson"</i>.',
              '<b>Bước 2:</b> Làm nước chanh. Khi hết nguyên liệu, nói <i>"We run out of sugar!"</i>; khi tiếp tục làm, nói <i>"We get on with our work!"</i>.',
              '<b>Bước 3:</b> Viết 3 câu ngắn dùng đủ 3 cụm <i>"look forward to"</i>, <i>"run out of"</i>, <i>"get on with"</i> rồi đọc cho bạn nghe.'
            ]
          }
        },
        {
          id: '4.17C', name: 'Bài 4.17C: Cho phép và bắt buộc',
          grammar: {
            formulas: ['👩 Mom + ⚡ lets + 👦 me eat melon', '👨 Dad + ⚡ makes + 👦 me clean my room', '🏫 The school + ⚡ allows + 🏆 the winner to keep it'],
            tip: 'let và make đi với tân ngữ rồi động từ KHÔNG "to" • allow thì phải có "to" nhé!'
          },
          chunks: [
            { scene: '👩🍈🍱', full: 'My mother lets me eat melon at lunchtime', parts: [{t:'My mother',ico:'👩',c:'s'}, {t:'lets',ico:'✅',c:'v'}, {t:'me eat melon at lunchtime',ico:'🍈',c:'o'}], traceWord: 'melon' },
            { scene: '👩‍🏫📖🎶', full: 'Our teacher lets us read a lyric poem', parts: [{t:'Our teacher',ico:'👩‍🏫',c:'s'}, {t:'lets',ico:'✅',c:'v'}, {t:'us read a lyric poem',ico:'🎶',c:'o'}], traceWord: 'lyric' },
            { scene: '👨🧹🌞', full: 'Dad makes me clean my room at midday', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'makes',ico:'💪',c:'v'}, {t:'me clean my room at midday',ico:'🌞',c:'o'}], traceWord: 'midday' },
            { scene: '👨🙅🌙', full: 'Dad does not let me play until midnight', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'does not let',ico:'🚫',c:'v'}, {t:'me play until midnight',ico:'🌙',c:'o'}], traceWord: 'midnight' },
            { scene: '🏃‍♂️📢👥', full: 'The coach lets the team shout loudly', parts: [{t:'The coach',ico:'🏃‍♂️',c:'s'}, {t:'lets',ico:'✅',c:'v'}, {t:'the team shout loudly',ico:'📢',c:'o'}], traceWord: 'loudly' },
            { scene: '🍀🕌👩‍🏫', full: 'The teacher luckily lets us visit the mosque', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'luckily lets',ico:'🍀',c:'v'}, {t:'us visit the mosque',ico:'🕌',c:'o'}], traceWord: 'mosque' },
            { scene: '💍👩💄', full: 'My married sister lets me try her make-up', parts: [{t:'My married sister',ico:'💍',c:'s'}, {t:'lets',ico:'✅',c:'v'}, {t:'me try her make-up',ico:'💄',c:'o'}], traceWord: 'married' },
            { scene: '🏫🥇🏆', full: 'The school allows the winner to keep the medal', parts: [{t:'The school',ico:'🏫',c:'s'}, {t:'allows',ico:'✅',c:'v'}, {t:'the winner to keep the medal',ico:'🥇',c:'o'}], traceWord: 'medal' }
          ],
          qaList: [
            { q: 'What does the teacher make you do?', scene: '👩‍🏫📕❓', ans: 'She makes me find the missing book', opts: [{ txt: 'She makes me find the missing book', ico: '❓' }, { txt: 'He is lost in the city', ico: '🧭' }, { txt: 'Two big melons', ico: '🍈' }] },
            { q: 'What is the meaning of marvelous?', scene: '🤩💭📖', ans: 'Marvelous means very good', opts: [{ txt: 'Marvelous means very good', ico: '🤩' }, { txt: 'Marvelous means very small', ico: '🐜' }, { txt: 'Marvelous means a mosque', ico: '🕌' }] },
            { q: 'What is the max number of players?', scene: '🔝⚽👥', ans: 'The max is ten players', opts: [{ txt: 'The max is ten players', ico: '🔝' }, { txt: 'My mother is married', ico: '💍' }, { txt: 'It is sunny today', ico: '☀️' }] },
            { q: 'Does your father let you shout loudly?', scene: '👨📢🙅', ans: 'No, he does not let me', opts: [{ txt: 'No, he does not let me', ico: '🙅' }, { txt: 'He is a good doctor', ico: '👨‍⚕️' }, { txt: 'Two big melons', ico: '🍈' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Luật Chơi Của Nhóm Mình',
            steps: [
              '<b>Bước 1:</b> Cùng bạn viết 6 "luật" cho một buổi chơi, ví dụ được làm gì, phải làm gì và không được làm gì.',
              '<b>Bước 2:</b> Một bạn làm "trưởng nhóm" và nói <i>"I let you play."</i>, <i>"I make you clean."</i> hoặc <i>"I allow you to rest."</i>; bạn kia làm đúng theo.',
              '<b>Bước 3:</b> Đổi vai trưởng nhóm. Mỗi người nói đủ 3 câu với <i>let</i>, <i>make</i>, <i>allow</i> mà không nhìn ghi chú.'
            ]
          }
        }
      ]
    },
    '4.18': {
      lessons: [
        {
          id: '4.18A', name: 'Bài 4.18A: Kể chuyện cãi nhau',
          grammar: {
            formulas: ['👦 Tom + 🗣️ asked + ❓ if the oven was hot', '👩 Lan + 🗣️ told / asked + 👦 me + 👉 to put the mug away'],
            tip: 'Kể lại câu hỏi Yes/No thì dùng "asked if" và lùi thì (is thành was); kể lại yêu cầu thì dùng "told / asked me to + động từ"!'
          },
          chunks: [
            { scene: '👩🍄❓', full: 'Mai asked me if I liked mushrooms', parts: [{t:'Mai',ico:'👩',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'me if I liked mushrooms',ico:'🍄',c:'o'}], traceWord: 'mushrooms' },
            { scene: '👦🔥❓', full: 'Tom asked if the oven was hot', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'if the oven was hot',ico:'🔥',c:'o'}], traceWord: 'oven' },
            { scene: '👩☕👉', full: 'Lan told me to put the mug away', parts: [{t:'Lan',ico:'👩',c:'s'}, {t:'told',ico:'🗣️',c:'v'}, {t:'me to put the mug away',ico:'☕',c:'o'}], traceWord: 'mug' },
            { scene: '👨🍳🕛', full: 'Dad asked if I wanted an omelet at noon', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'if I wanted an omelet at noon',ico:'🍳',c:'o'}], traceWord: 'omelet' },
            { scene: '👩🧅🔪', full: 'Mom asked me to cut the onion', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'me to cut the onion',ico:'🧅',c:'o'}], traceWord: 'onion' },
            { scene: '👦🧻🍽️', full: 'Nam asked me to bring a napkin', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'me to bring a napkin',ico:'🧻',c:'o'}], traceWord: 'napkin' },
            { scene: '👩‍🏫🗂️🛏️', full: 'The teacher asked if my room was organized', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'if my room was organized',ico:'🗂️',c:'o'}], traceWord: 'organized' },
            { scene: '👦🧒⚽', full: 'Tom asked if the orphan could join our team', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'asked',ico:'🗣️',c:'v'}, {t:'if the orphan could join our team',ico:'🧒',c:'o'}], traceWord: 'orphan' }
          ],
          qaList: [
            { q: 'What does Nam have now?', scene: '👦🏅😄', ans: 'He has an Olympic medal now', opts: [{ txt: 'He has an Olympic medal now', ico: '🏅' }, { txt: 'She has a big red mug', ico: '☕' }, { txt: 'We have two small cats', ico: '🐱' }] },
            { q: 'What did Mai ask about the sea?', scene: '👩🌊❓', ans: 'She asked if the Pacific sea was big', opts: [{ txt: 'She asked if the Pacific sea was big', ico: '🌊' }, { txt: 'She asked me to wash the oven', ico: '🔥' }, { txt: 'He told me to sit down', ico: '🪑' }] },
            { q: 'What did Anna ask about the mysterious man?', scene: '👩🕵️❓', ans: 'She asked if he lived here', opts: [{ txt: 'She asked if he lived here', ico: '🕵️' }, { txt: 'He asked if the dog was overweight', ico: '🐶' }, { txt: 'We have a green door', ico: '🚪' }] },
            { q: 'Where did Dad ask you to wait?', scene: '👨🌳⏳', ans: 'He asked me to wait under the oak', opts: [{ txt: 'He asked me to wait under the oak', ico: '🌳' }, { txt: 'He asked me to wait on the motorway', ico: '🛣️' }, { txt: 'He asked me to wait in the sea', ico: '🌊' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Truyền Tin Của Phóng Viên',
            steps: [
              '<b>Bước 1:</b> Em và một bạn (hoặc em tự đóng 2 vai) viết ra 4 mẩu giấy: 2 câu hỏi như <i>"Is the oven hot?"</i> và 2 yêu cầu như <i>"Put the mug away."</i>',
              '<b>Bước 2:</b> Em bốc từng mẩu giấy rồi kể lại như phóng viên: <i>"Tom asked if the oven was hot."</i> hoặc <i>"Lan told me to put the mug away."</i>',
              '<b>Bước 3:</b> Đổi vai cho bạn kể. Ai kể đúng "asked if" và "told me to" nhiều hơn thì thắng!'
            ]
          }
        },
        {
          id: '4.18B', name: 'Bài 4.18B: Nói về cảm xúc',
          grammar: {
            formulas: ['👦 I + ⚡ am + 😨 afraid of + 🌙 the dark', '👧 She + ⚡ is + 🌟 good at + 🍝 cooking', '👦 He + ⚡ is + 🔍 interested in + 📸 photography'],
            tip: 'Tính từ nào đi với giới từ nấy: afraid OF, good AT, interested IN, và sau giới từ là danh từ hoặc V-ing!'
          },
          chunks: [
            { scene: '🤜😨🌙', full: 'My pal is afraid of the dark', parts: [{t:'My pal',ico:'🤜',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'afraid of the dark',ico:'🌙',c:'o'}], traceWord: 'pal' },
            { scene: '👦🍝🍳', full: 'I am good at cooking pasta in a pan', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am',ico:'⚡',c:'v'}, {t:'good at cooking pasta in a pan',ico:'🍝',c:'o'}], traceWord: 'pasta' },
            { scene: '👩📸🌄', full: 'Mai is very interested in photography', parts: [{t:'Mai',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'very interested in photography',ico:'📸',c:'o'}], traceWord: 'photography' },
            { scene: '✉️🧑🌏', full: 'My penfriend is interested in Vietnam', parts: [{t:'My penfriend',ico:'✉️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'interested in Vietnam',ico:'🌏',c:'o'}], traceWord: 'penfriend' },
            { scene: '👦💻🖱️', full: 'Nam is good at using his PC', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'good at using his PC',ico:'💻',c:'o'}], traceWord: 'pc' },
            { scene: '📷🕊️🌿', full: 'The photographer is interested in peaceful places', parts: [{t:'The photographer',ico:'📷',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'interested in peaceful places',ico:'🕊️',c:'o'}], traceWord: 'photographer' },
            { scene: '👨🫛🌶️', full: 'Dad is good at making pea soup with pepper', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'good at making pea soup with pepper',ico:'🫛',c:'o'}], traceWord: 'pea' },
            { scene: '🧑‍🎨🍐🖼️', full: 'The painter is interested in a pear on the table', parts: [{t:'The painter',ico:'🧑‍🎨',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'interested in a pear on the table',ico:'🍐',c:'o'}], traceWord: 'painter' }
          ],
          qaList: [
            { q: 'What is the old pilgrim afraid of?', scene: '🚶😨🌙', ans: 'He is afraid of the very dark night', opts: [{ txt: 'He is afraid of the very dark night', ico: '🌙' }, { txt: 'She is good at playing the piano', ico: '🎹' }, { txt: 'We are interested in a red hat', ico: '🎩' }] },
            { q: 'What is Tom good at?', scene: '👦🪙🔢', ans: 'He is good at counting his pence', opts: [{ txt: 'He is good at counting his pence', ico: '🪙' }, { txt: 'He is afraid of the big dog', ico: '🐕' }, { txt: 'She is interested in a green pear', ico: '🍐' }] },
            { q: 'What is Lan interested in?', scene: '👩🧴✨', ans: 'She is interested in a new perfume', opts: [{ txt: 'She is interested in a new perfume', ico: '🧴' }, { txt: 'He is afraid of the red car', ico: '🚗' }, { txt: 'I am good at washing the pan', ico: '🍳' }] },
            { q: 'What is the driver afraid of?', scene: '🚗⛽😨', ans: 'He is afraid of having no petrol', opts: [{ txt: 'He is afraid of having no petrol', ico: '⛽' }, { txt: 'She is good at cooking pasta', ico: '🍝' }, { txt: 'They are interested in a book', ico: '📖' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Bạn Thân',
            steps: [
              '<b>Bước 1:</b> Em chuẩn bị 3 câu hỏi cho một người bạn: <i>"What are you afraid of?"</i>, <i>"What are you good at?"</i>, <i>"What are you interested in?"</i>',
              '<b>Bước 2:</b> Em hỏi bạn và ghi lại câu trả lời, ví dụ <i>"I am good at cooking pasta."</i> hoặc <i>"I am interested in photography."</i>',
              '<b>Bước 3:</b> Em vẽ một tấm thẻ về bạn có 3 dòng, mỗi dòng dùng đúng giới từ: afraid OF, good AT, interested IN, rồi đọc to cho bạn nghe.'
            ]
          }
        },
        {
          id: '4.18C', name: 'Bài 4.18C: Lời khuyên cho bạn',
          grammar: {
            formulas: ['👦 Tom + 💭 thinks about + 🎾 buying a racket', '👩 Mai + 😟 worries about + 💊 taking a pill', '👮 He + 🙏 apologized for + ⏰ being late'],
            tip: 'Sau about và for là động từ thêm -ing, không bao giờ để nguyên: think about GOING, worry about MISSING, apologize for BEING late!'
          },
          chunks: [
            { scene: '👦💭🎾', full: 'Tom thinks about buying a new racket', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'thinks',ico:'💭',c:'v'}, {t:'about buying a new racket',ico:'🎾',c:'o'}], traceWord: 'racket' },
            { scene: '👩😟💊', full: 'Mai worries about taking her pill late', parts: [{t:'Mai',ico:'👩',c:'s'}, {t:'worries',ico:'😟',c:'v'}, {t:'about taking her pill late',ico:'💊',c:'o'}], traceWord: 'pill' },
            { scene: '👮🙏⏰', full: 'The policeman apologized for being late', parts: [{t:'The policeman',ico:'👮',c:'s'}, {t:'apologized',ico:'🙏',c:'v'}, {t:'for being late',ico:'⏰',c:'o'}], traceWord: 'policeman' },
            { scene: '👮‍♀️💭🧒', full: 'The policewoman thinks about helping the children', parts: [{t:'The policewoman',ico:'👮‍♀️',c:'s'}, {t:'thinks',ico:'💭',c:'v'}, {t:'about helping the children',ico:'🧒',c:'o'}], traceWord: 'policewoman' },
            { scene: '👨‍👩‍👧🏭🛝', full: 'We worry about polluting the playground', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'worry',ico:'😟',c:'v'}, {t:'about polluting the playground',ico:'🛝',c:'o'}], traceWord: 'playground' },
            { scene: '😜👦🔊', full: 'The playful boy apologized for being too noisy', parts: [{t:'The playful boy',ico:'😜',c:'s'}, {t:'apologized',ico:'🙏',c:'v'}, {t:'for being too noisy',ico:'🔊',c:'o'}], traceWord: 'playful' },
            { scene: '👑💭🏫', full: 'The queen thinks about visiting our school', parts: [{t:'The queen',ico:'👑',c:'s'}, {t:'thinks',ico:'💭',c:'v'}, {t:'about visiting our school',ico:'🏫',c:'o'}], traceWord: 'queen' },
            { scene: '👧😟🗣️', full: 'Anna worries about her pronunciation and punctuation', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'worries',ico:'😟',c:'v'}, {t:'about her pronunciation and punctuation',ico:'🗣️',c:'o'}], traceWord: 'pronunciation' }
          ],
          qaList: [
            { q: 'Why is Mom pleased with Nam?', scene: '👩😊🙏', ans: 'She is pleased because he is polite', opts: [{ txt: 'She is pleased because he is polite', ico: '😊' }, { txt: 'She worries about the hot oven', ico: '🔥' }, { txt: 'He thinks about buying a big car', ico: '🚗' }] },
            { q: 'What do you think about quitting the team?', scene: '⚽🚪😔', ans: 'I think it is a pity to quit', opts: [{ txt: 'I think it is a pity to quit', ico: '😔' }, { txt: 'I am pleased about the new racket', ico: '🎾' }, { txt: 'We think about buying a big cake', ico: '🎂' }] },
            { q: 'Why is a clean park pleasing?', scene: '🌳👌🧹', ans: 'People do not pollute the park', opts: [{ txt: 'People do not pollute the park', ico: '🌳' }, { txt: 'Dogs worry about the hot sun', ico: '☀️' }, { txt: 'Birds apologize for the green tree', ico: '🐦' }] },
            { q: 'What does Anna worry about?', scene: '👧🚌😟', ans: 'She worries about missing the bus', opts: [{ txt: 'She worries about missing the bus', ico: '🚌' }, { txt: 'He apologizes for the sunny day', ico: '☀️' }, { txt: 'They think about the green door', ico: '🚪' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Góc Lời Khuyên',
            steps: [
              '<b>Bước 1:</b> Em viết 3 vấn đề nhỏ của một người bạn lên giấy, ví dụ bạn bị muộn học, bạn lo bài kiểm tra, bạn nói ồn trong lớp.',
              '<b>Bước 2:</b> Em đưa lời khuyên bằng mẫu câu: <i>"Don\'t worry about missing the bus."</i>, <i>"Think about helping your friend."</i> hoặc <i>"Apologize for being late."</i>',
              '<b>Bước 3:</b> Em cùng bạn thay phiên đóng vai người tư vấn và người nhận lời khuyên, nhớ luôn thêm -ing sau about và for.'
            ]
          }
        }
      ]
    },
    '4.19': {
      lessons: [
        {
          id: '4.19A', name: 'Bài 4.19A: Hoạt động thiện nguyện',
          grammar: {
            formulas: ['👦 We + ✅ have recycled + 🍼 bottles', '👦 We + ⏳ have been recycling + 🕐 for an hour', '👩 Mai + ✅ has roasted + 🍗 chicken'],
            tip: 'have + V3 nói về KẾT QUẢ đã xong (đã tái chế 20 chai) • have been + V-ing nhấn vào QUÁ TRÌNH kéo dài đến giờ (đang tái chế cả tiếng rồi)!'
          },
          chunks: [
            { scene: '♻️🍼👦', full: 'We have recycled twenty bottles', parts: [{t:'We',ico:'👦',c:'s'}, {t:'have recycled',ico:'♻️',c:'v'}, {t:'twenty bottles',ico:'🍼',c:'o'}], traceWord: 'recycled' },
            { scene: '👴🧹🌳', full: 'My retired grandfather has been cleaning the park', parts: [{t:'My retired grandfather',ico:'👴',c:'s'}, {t:'has been cleaning',ico:'🧹',c:'v'}, {t:'the park',ico:'🌳',c:'o'}], traceWord: 'retired' },
            { scene: '👧🍗🥂', full: 'Mai has roasted chicken for the reunion', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has roasted',ico:'🍗',c:'v'}, {t:'chicken for the reunion',ico:'🥂',c:'o'}], traceWord: 'reunion' },
            { scene: '🛎️🧾😊', full: 'The receptionist has given us a receipt', parts: [{t:'The receptionist',ico:'🛎️',c:'s'}, {t:'has given',ico:'🤲',c:'v'}, {t:'us a receipt',ico:'🧾',c:'o'}], traceWord: 'receipt' },
            { scene: '🌧️🧥👦', full: 'We have been wearing raincoats since this morning', parts: [{t:'We',ico:'👦',c:'s'}, {t:'have been wearing',ico:'⏳',c:'v'}, {t:'raincoats since this morning',ico:'🧥',c:'o'}], traceWord: 'raincoats' },
            { scene: '👦🎤🎶', full: 'Tom has been playing rap since lunch', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'has been playing',ico:'⏳',c:'v'}, {t:'rap since lunch',ico:'🎤',c:'o'}], traceWord: 'rap' },
            { scene: '👮🚨✋', full: 'The police have stopped the robbery', parts: [{t:'The police',ico:'👮',c:'s'}, {t:'have stopped',ico:'✋',c:'v'}, {t:'the robbery',ico:'🚨',c:'o'}], traceWord: 'robbery' },
            { scene: '🐦🌳🎶', full: 'A robin has been singing in the right-hand tree', parts: [{t:'A robin',ico:'🐦',c:'s'}, {t:'has been singing',ico:'🎶',c:'v'}, {t:'in the right-hand tree',ico:'👉🌳',c:'o'}], traceWord: 'robin' }
          ],
          qaList: [
            { q: 'Where has she put the milk?', scene: '👩🥛🧊', ans: 'She has put it in the refrigerator', opts: [{ txt: 'She has put it in the refrigerator', ico: '🧊' }, { txt: 'She has put it under the bed', ico: '🛏️' }, { txt: 'She has put it on the roof', ico: '🏠' }] },
            { q: 'How do you feel after the walk?', scene: '🚶😎🌳', ans: 'I have walked a lot and feel relaxed', opts: [{ txt: 'I have walked a lot and feel relaxed', ico: '😎' }, { txt: 'I have been reading a romance', ico: '💕' }, { txt: 'I have been angry since lunch', ico: '😠' }] },
            { q: 'Does the film have a good rating?', scene: '🎬⭐👍', ans: 'Yes, it has a high rating', opts: [{ txt: 'Yes, it has a high rating', ico: '⭐' }, { txt: 'Yes, it has a big nose', ico: '👃' }, { txt: 'No, it has been in the sun', ico: '☀️' }] },
            { q: 'Has anyone robbed the bank today?', scene: '🏦🦹❓', ans: 'No, nobody has robbed the bank', opts: [{ txt: 'No, nobody has robbed the bank', ico: '🏦' }, { txt: 'Yes, the dog has eaten my lunch', ico: '🐶' }, { txt: 'The bank opens at nine o\'clock', ico: '🕘' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật Ký Việc Tốt',
            steps: [
              '<b>Bước 1:</b> Em lấy một tờ giấy và viết 3 việc tốt em đã làm tuần này (nhặt rác, tái chế chai, giúp bạn). Mỗi việc vẽ một hình nhỏ bên cạnh.',
              '<b>Bước 2:</b> Với việc đã xong, em nói <i>"I have recycled bottles."</i>. Với việc làm đã lâu, em nói <i>"I have been helping for an hour."</i>.',
              '<b>Bước 3:</b> Em đọc nhật ký cho một bạn nghe (hoặc đọc trước gương), rồi hỏi <i>"Have you helped today?"</i> để bạn trả lời.'
            ]
          }
        },
        {
          id: '4.19B', name: 'Bài 4.19B: Ước mơ làm điều tốt',
          grammar: {
            formulas: ['👦 I + 🌠 wish + 💭 I had more time', '👩 Mom + 🌠 wishes + 💭 she had scissors', '👧 We + 🌠 wish + 💭 we cooked sausages'],
            tip: 'Ước điều CHƯA có ở hiện tại thì lùi động từ về quá khứ: wish I had, wish he played • to be thì dùng were cho mọi ngôi (I wish I were...)!'
          },
          chunks: [
            { scene: '👦📝⏰', full: 'I wish I had more time for schoolwork', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'I had more time for schoolwork',ico:'📝',c:'o'}], traceWord: 'schoolwork' },
            { scene: '🎒🤝💖', full: 'I wish I could help every schoolchild', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'I could help every schoolchild',ico:'🎒',c:'o'}], traceWord: 'schoolchild' },
            { scene: '👧🧣🏃', full: 'Lan wishes she had a scarf for the runner', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'wishes',ico:'🌠',c:'v'}, {t:'she had a scarf for the runner',ico:'🧣',c:'o'}], traceWord: 'scarf' },
            { scene: '👦🏉🧒', full: 'Tom wishes he played rugby with the kids', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'wishes',ico:'🌠',c:'v'}, {t:'he played rugby with the kids',ico:'🏉',c:'o'}], traceWord: 'rugby' },
            { scene: '⛵🌊🎓', full: 'I wish we had sailing lessons at school', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'we had sailing lessons at school',ico:'⛵',c:'o'}], traceWord: 'sailing' },
            { scene: '🌭🥫👨‍🍳', full: 'I wish we cooked sausages with sauce', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'we cooked sausages with sauce',ico:'🌭',c:'o'}], traceWord: 'sausages' },
            { scene: '👩✂️📄', full: 'Mom wishes she had scissors for the paper', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'wishes',ico:'🌠',c:'v'}, {t:'she had scissors for the paper',ico:'✂️',c:'o'}], traceWord: 'scissors' },
            { scene: '👨🔩🪑', full: 'Dad wishes he had a screw for the chair', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'wishes',ico:'🌠',c:'v'}, {t:'he had a screw for the chair',ico:'🔩',c:'o'}], traceWord: 'screw' }
          ],
          qaList: [
            { q: 'Where do you wish you lived?', scene: '🏖️🏠💭', ans: 'I wish I lived near a sandy beach', opts: [{ txt: 'I wish I lived near a sandy beach', ico: '🏖️' }, { txt: 'I wish I had two cats', ico: '🐱' }, { txt: 'I live in the school bag', ico: '🎒' }] },
            { q: 'What do you wish for the town?', scene: '🏙️🔄🚗', ans: 'I wish it had a safe roundabout', opts: [{ txt: 'I wish it had a safe roundabout', ico: '🔄' }, { txt: 'I wish my pen were red', ico: '🖊️' }, { txt: 'I wish my lunch were cold', ico: '🥶' }] },
            { q: 'What happened at school today?', scene: '🏫🗣️😢', ans: 'Sadly, someone spread a rumor about me', opts: [{ txt: 'Sadly, someone spread a rumor about me', ico: '🗣️' }, { txt: 'We had a good lunch', ico: '🍱' }, { txt: 'The teacher wore a blue scarf', ico: '🧣' }] },
            { q: 'What do you wish about the trip?', scene: '🚌🏞️💭', ans: 'I wish we saw more beautiful scenery', opts: [{ txt: 'I wish we saw more beautiful scenery', ico: '🏞️' }, { txt: 'I wish I had a rabbit', ico: '🐰' }, { txt: 'We ate lunch at noon', ico: '🍽️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảng Ước Mơ Việc Tốt',
            steps: [
              '<b>Bước 1:</b> Em lấy giấy màu hoặc vở nháp, chia làm 3 ô. Mỗi ô em vẽ một điều em muốn làm cho người khác nhưng chưa làm được (ví dụ có kéo, có khăn).',
              '<b>Bước 2:</b> Dưới mỗi hình, em viết một câu ước, ví dụ <i>"I wish I had a scarf for the runner."</i> Nhớ dùng quá khứ sau wish.',
              '<b>Bước 3:</b> Em đọc to 3 điều ước cho một bạn nghe, rồi đổi lượt để bạn chia sẻ ước mơ của bạn ấy bằng <i>"I wish..."</i>.'
            ]
          }
        },
        {
          id: '4.19C', name: 'Bài 4.19C: Đồng ý hay không đồng ý',
          grammar: {
            formulas: ['👦 I + 👍 like seafood + 🤝 and so does Mai', '👦 I + 🚫 can\'t sew + 🤝 and neither can Tom', '👧 I + 😴 was sleepy + 🤝 and so was my dad'],
            tip: 'Đồng ý câu KHẲNG ĐỊNH: so + trợ động từ + chủ ngữ • Đồng ý câu PHỦ ĐỊNH: neither + trợ động từ + chủ ngữ • trợ động từ phải khớp với câu gốc (do, does, was, can...)!'
          },
          chunks: [
            { scene: '🦐🌊👧', full: 'I like seafood at the seaside and so does Mai', parts: [{t:'I',ico:'👦',c:'s'}, {t:'like seafood at the seaside and so does',ico:'🦐',c:'v'}, {t:'Mai',ico:'👧',c:'o'}], traceWord: 'seafood' },
            { scene: '🧵🚫👦', full: 'I can\'t sew and neither can Tom', parts: [{t:'I',ico:'👧',c:'s'}, {t:'can\'t sew and neither can',ico:'🧵',c:'v'}, {t:'Tom',ico:'👦',c:'o'}], traceWord: 'sew' },
            { scene: '😴👦👨', full: 'I was sleepy and so was my dad', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was sleepy and so was',ico:'😴',c:'v'}, {t:'my dad',ico:'👨',c:'o'}], traceWord: 'sleepy' },
            { scene: '⛷️🚫👩', full: 'I don\'t like skiing and neither does Anna', parts: [{t:'I',ico:'👧',c:'s'}, {t:'don\'t like skiing and neither does',ico:'⛷️',c:'v'}, {t:'Anna',ico:'👩',c:'o'}], traceWord: 'skiing' },
            { scene: '🛹⛸️👫', full: 'I love skateboarding and skating and so do my friends', parts: [{t:'I',ico:'👦',c:'s'}, {t:'love skateboarding and skating and so do',ico:'🛹',c:'v'}, {t:'my friends',ico:'👫',c:'o'}], traceWord: 'skateboarding' },
            { scene: '🥱🌙👧', full: 'I was sleepless last night and so was Mai', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was sleepless last night and so was',ico:'🥱',c:'v'}, {t:'Mai',ico:'👧',c:'o'}], traceWord: 'sleepless' },
            { scene: '⛸️🚫👦', full: 'I don\'t have skates and neither does Tom', parts: [{t:'I',ico:'👧',c:'s'}, {t:'don\'t have skates and neither does',ico:'⛸️',c:'v'}, {t:'Tom',ico:'👦',c:'o'}], traceWord: 'skates' },
            { scene: '🎤📸👧', full: 'I enjoy singing and sightseeing and so does Lan', parts: [{t:'I',ico:'👦',c:'s'}, {t:'enjoy singing and sightseeing and so does',ico:'🎤',c:'v'}, {t:'Lan',ico:'👧',c:'o'}], traceWord: 'sightseeing' }
          ],
          qaList: [
            { q: 'I love this shampoo. What about you?', scene: '🧴😊💬', ans: 'So do I and it smells nice', opts: [{ txt: 'So do I and it smells nice', ico: '🧴' }, { txt: 'So am I and it smells nice', ico: '❌' }, { txt: 'Neither do I and I love it', ico: '❌' }] },
            { q: 'I am not very slim.', scene: '🧍💬😊', ans: 'Neither am I but we are healthy', opts: [{ txt: 'Neither am I but we are healthy', ico: '💪' }, { txt: 'So am I and I am slim', ico: '❌' }, { txt: 'So do I but we are healthy', ico: '❌' }] },
            { q: 'I can read silently and speak smoothly.', scene: '🤫📖🧈', ans: 'So can I and it is fun', opts: [{ txt: 'So can I and it is fun', ico: '🤫' }, { txt: 'So do I and it is fun', ico: '❌' }, { txt: 'Neither can I and it is fun', ico: '❌' }] },
            { q: 'I didn\'t write the script.', scene: '📜🚫💬', ans: 'Neither did I so ask Mai', opts: [{ txt: 'Neither did I so ask Mai', ico: '📜' }, { txt: 'So did I so ask Mai', ico: '❌' }, { txt: 'Neither was I so ask Mai', ico: '❌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đồng Ý Hay Không?',
            steps: [
              '<b>Bước 1:</b> Em viết 6 câu về mình vào 6 mảnh giấy, 3 câu khẳng định (<i>"I like seafood."</i>) và 3 câu phủ định (<i>"I can\'t sew."</i>). Gấp lại và trộn đều.',
              '<b>Bước 2:</b> Em và bạn lần lượt bốc một mảnh giấy và đọc to. Người nghe trả lời bằng <i>"So do I!"</i> hoặc <i>"Neither can I!"</i> nếu giống mình.',
              '<b>Bước 3:</b> Nếu không giống, trả lời bình thường, ví dụ <i>"I do."</i> Ai đồng ý đúng nhiều nhất thì thắng và được chọn trò chơi tiếp theo.'
            ]
          }
        }
      ]
    },
    '4.20': {
      lessons: [
        {
          id: '4.20A', name: 'Bài 4.20A: Ôn thì quá khứ, hoàn thành, tương lai',
          grammar: {
            formulas: ['👦 I + ⏪ had + 🍪 a snack', '👩 Mai + ✅ has washed + 🧼 her hands', '👨 We + ⏩ will travel + 🚀 in a spaceship'],
            tip: 'Có "yesterday" thì dùng quá khứ, có "just" thì dùng hoàn thành (has/have + V3), có "tomorrow" hay "someday" thì dùng will!'
          },
          chunks: [
            { scene: '👦🍪🏫', full: 'I had a snack at school', parts: [{t:'I',ico:'👦',c:'s'}, {t:'had',ico:'⏪',c:'v'}, {t:'a snack at school',ico:'🍪',c:'o'}], traceWord: 'snack' },
            { scene: '👦🥤🧦', full: 'Tom spilled soda on his sock', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'spilled',ico:'🥤',c:'v'}, {t:'soda on his sock',ico:'🧦',c:'o'}], traceWord: 'spilled' },
            { scene: '👧🧼🙌', full: 'Mai has washed her hands with soap', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'has washed',ico:'✅',c:'v'}, {t:'her hands with soap',ico:'🧼',c:'o'}], traceWord: 'soap' },
            { scene: '👨‍👩‍👧🏟️📅', full: 'We visited the big stadium last week', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'visited',ico:'⏪',c:'v'}, {t:'the big stadium last week',ico:'🏟️',c:'o'}], traceWord: 'stadium' },
            { scene: '👨🥩🍝', full: 'Dad has just cooked steak and spaghetti', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'has just cooked',ico:'✅',c:'v'}, {t:'steak and spaghetti',ico:'🥩🍝',c:'o'}], traceWord: 'spaghetti' },
            { scene: '👧💦🏊', full: 'Anna splashed water in the pool', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'splashed',ico:'💦',c:'v'}, {t:'water in the pool',ico:'🏊',c:'o'}], traceWord: 'splashed' },
            { scene: '👧🤫📚', full: 'Lan will talk softly in the library', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'will talk',ico:'⏩',c:'v'}, {t:'softly in the library',ico:'🤏',c:'o'}], traceWord: 'softly' },
            { scene: '👦🏂❄️', full: 'Next winter I will try snowboarding', parts: [{t:'Next winter I',ico:'👦',c:'s'}, {t:'will try',ico:'⏩',c:'v'}, {t:'snowboarding',ico:'🏂',c:'o'}], traceWord: 'snowboarding' }
          ],
          qaList: [
            { q: 'What did Tom use for his spaghetti?', scene: '🍝🥄', ans: 'He used a spoon', opts: [{txt:'He used a spoon',ico:'🥄'}, {txt:'He used a sock',ico:'🧦'}, {txt:'He used soap',ico:'🧼'}] },
            { q: 'Where did Lan see the statue?', scene: '🗽🌳', ans: 'She saw it in the park', opts: [{txt:'She saw it in the park',ico:'🌳'}, {txt:'She saw it in a cup',ico:'☕'}, {txt:'She saw it in the soup',ico:'🍲'}] },
            { q: 'Tomorrow we ___ to the stadium.', scene: '🏟️📅', ans: 'will go', opts: [{txt:'will go',ico:'⏩'}, {txt:'visited',ico:'⏪'}, {txt:'has visited',ico:'✅'}] },
            { q: 'How will we travel to the moon someday?', scene: '🚀🌙', ans: 'We will go by spaceship', opts: [{txt:'We will go by spaceship',ico:'🚀'}, {txt:'We will go by sock',ico:'🧦'}, {txt:'We will go by spoon',ico:'🥄'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký ba thì',
            steps: [
              '<b>Bước 1:</b> Lấy một tờ giấy, chia làm ba cột: Hôm qua, Vừa xong, Ngày mai. Viết tên đồ ăn hoặc đồ vật trong nhà bạn thấy (snack, soda, spoon, sock).',
              '<b>Bước 2:</b> Mỗi cột viết một câu đúng thì, ví dụ <i>"I had a snack yesterday."</i>, <i>"I have just washed my sock."</i>, <i>"I will drink soda tomorrow."</i>',
              '<b>Bước 3:</b> Đọc ba câu cho một người bạn nghe và để bạn đoán cột nào là thì nào. Đoán đúng thì đổi vai nhé!'
            ]
          }
        },
        {
          id: '4.20B', name: 'Bài 4.20B: Ôn câu phức và bị động',
          grammar: {
            formulas: ['👧 The girl + ⚡ who has + 🕶️ sunglasses', '🍲 The supper + ⚡ is cooked + 🍳 on the stove', '👦 You + ⚡ should drink + 💧 water if you sweat'],
            tip: 'Người thì dùng "who", vật thì dùng "that"; bị động luôn là "be + V3", còn câu điều kiện có "if" thì vế sau dùng will hoặc should!'
          },
          chunks: [
            { scene: '👧🕶️☀️', full: 'The girl who has sunglasses is my sister', parts: [{t:'The girl who has sunglasses',ico:'👧🕶️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my sister',ico:'👭',c:'o'}], traceWord: 'sunglasses' },
            { scene: '🍲🍳🔥', full: 'The supper is cooked on the stove', parts: [{t:'The supper',ico:'🍲',c:'s'}, {t:'is cooked',ico:'⚡',c:'v'}, {t:'on the stove',ico:'🍳',c:'o'}], traceWord: 'supper' },
            { scene: '😓💧🥤', full: 'You should drink water if you sweat', parts: [{t:'You',ico:'👦',c:'s'}, {t:'should drink',ico:'⚡',c:'v'}, {t:'water if you sweat',ico:'😓',c:'o'}], traceWord: 'sweat' },
            { scene: '🪪🧳✍️', full: 'My surname is written on the suitcase', parts: [{t:'My surname',ico:'🪪',c:'s'}, {t:'is written',ico:'✍️',c:'v'}, {t:'on the suitcase',ico:'🧳',c:'o'}], traceWord: 'surname' },
            { scene: '🌻☀️🌱', full: 'The sunflower that grows in sunlight is tall', parts: [{t:'The sunflower that grows in sunlight',ico:'🌻☀️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'tall',ico:'📏',c:'o'}], traceWord: 'sunflower' },
            { scene: '😖🤢🍬', full: 'You will get a stomachache if you swallow it', parts: [{t:'You',ico:'👦',c:'s'}, {t:'will get',ico:'⚡',c:'v'}, {t:'a stomachache if you swallow it',ico:'🤢',c:'o'}], traceWord: 'stomachache' },
            { scene: '🌟😲🎁', full: 'The superstar was surprised by the surprising news', parts: [{t:'The superstar',ico:'🌟',c:'s'}, {t:'was surprised',ico:'😲',c:'v'}, {t:'by the surprising news',ico:'🎁',c:'o'}], traceWord: 'surprising' },
            { scene: '🥇📖✍️', full: 'The superlative of good is best', parts: [{t:'The superlative of good',ico:'🥇',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'best',ico:'🏆',c:'o'}], traceWord: 'superlative' }
          ],
          qaList: [
            { q: 'What do you wear if you feel cold?', scene: '🥶🧶', ans: 'I wear a sweater', opts: [{txt:'I wear a sweater',ico:'🧶'}, {txt:'I wear a stove',ico:'🍳'}, {txt:'I wear a suitcase',ico:'🧳'}] },
            { q: 'What is done with a board on big waves?', scene: '🌊🏄', ans: 'Surfing', opts: [{txt:'Surfing',ico:'🌊'}, {txt:'Cooking',ico:'🍳'}, {txt:'Reading',ico:'📖'}] },
            { q: 'If it rains tomorrow, what will you do?', scene: '🌧️🏠', ans: 'I will stay at home', opts: [{txt:'I will stay at home',ico:'🏠'}, {txt:'I will eat a suitcase',ico:'🧳'}, {txt:'I will drink a stove',ico:'🍳'}] },
            { q: 'Where is the suitcase kept?', scene: '🧳🛏️', ans: 'It is kept under the bed', opts: [{txt:'It is kept under the bed',ico:'🛏️'}, {txt:'It is kept in the soup',ico:'🍲'}, {txt:'It is kept on the moon',ico:'🌙'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám tử câu phức',
            steps: [
              '<b>Bước 1:</b> Chọn ba đồ vật trong nhà (suitcase, sweater, sunglasses) và đặt lên bàn. Với mỗi đồ vật, viết một câu bị động, ví dụ <i>"The suitcase is kept under the bed."</i>',
              '<b>Bước 2:</b> Viết thêm hai câu có "who" hoặc "that" và một câu có "if", ví dụ <i>"The boy who has sunglasses is my friend."</i> và <i>"If I sweat, I will drink water."</i>',
              '<b>Bước 3:</b> Cùng một người bạn thi xem ai tìm đúng đồ vật theo câu gợi ý nhanh hơn, rồi đổi vai.'
            ]
          }
        },
        {
          id: '4.20C', name: 'Bài 4.20C: Viết bài KET hoàn chỉnh',
          grammar: {
            formulas: ['👧 Anna + 💬 said + 🩱 she packed a swimsuit', '👦 You + 🍞 eat + ❓ toast, don\'t you', '👦 Nam + 🎻 enjoyed + 🎶 the symphony because it was beautiful'],
            tip: 'Câu gián tiếp lùi một thì (is thành was), câu hỏi đuôi đảo khẳng định thành phủ định, và "because" nối lý do trong bài viết 35 từ!'
          },
          chunks: [
            { scene: '👧🎒🩱', full: 'Anna said she packed a swimsuit', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'she packed a swimsuit',ico:'🩱',c:'o'}], traceWord: 'swimsuit' },
            { scene: '👦🍞☀️❓', full: 'You eat toast every morning, don\'t you', parts: [{t:'You',ico:'👦',c:'s'}, {t:'eat',ico:'🍞',c:'v'}, {t:'toast every morning, don\'t you',ico:'☀️',c:'o'}], traceWord: 'toast' },
            { scene: '👧🗓️🎒', full: 'Mai said the timetable was in her bag', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'the timetable was in her bag',ico:'🗓️',c:'o'}], traceWord: 'timetable' },
            { scene: '🦹⛈️😨', full: 'The thief was afraid of the thunderstorm', parts: [{t:'The thief',ico:'🦹',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'afraid of the thunderstorm',ico:'⛈️',c:'o'}], traceWord: 'thunderstorm' },
            { scene: '🧑🛏️✨', full: 'My teenage brother keeps his room tidy', parts: [{t:'My teenage brother',ico:'🧑',c:'s'}, {t:'keeps',ico:'🤲',c:'v'}, {t:'his room tidy',ico:'✨',c:'o'}], traceWord: 'tidy' },
            { scene: '👨🥄🍬', full: 'Dad said I need one tablespoon of sugar', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'I need one tablespoon of sugar',ico:'🥄',c:'o'}], traceWord: 'tablespoon' },
            { scene: '👦🎻🎶', full: 'Nam enjoyed the symphony because it was beautiful', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'enjoyed',ico:'🎻',c:'v'}, {t:'the symphony because it was beautiful',ico:'🎶',c:'o'}], traceWord: 'symphony' },
            { scene: '👦💭3️⃣❓', full: 'I thought the third question was easy', parts: [{t:'I',ico:'👦',c:'s'}, {t:'thought',ico:'💭',c:'v'}, {t:'the third question was easy',ico:'3️⃣',c:'o'}], traceWord: 'third' }
          ],
          qaList: [
            { q: 'Whose bags are on the table?', scene: '🎒👥', ans: 'The bags are theirs', opts: [{txt:'The bags are theirs',ico:'👥'}, {txt:'The bags are toast',ico:'🍞'}, {txt:'The bags are tidy tights',ico:'🧦'}] },
            { q: 'What does a girl wear with a skirt in winter?', scene: '👧🧦❄️', ans: 'She wears tights', opts: [{txt:'She wears tights',ico:'🧦'}, {txt:'She wears toast',ico:'🍞'}, {txt:'She wears a thief',ico:'🦹'}] },
            { q: 'Does a thunderstorm terrify small dogs?', scene: '⛈️🐶😱', ans: 'Yes it can terrify them', opts: [{txt:'Yes it can terrify them',ico:'😱'}, {txt:'No it is a big spoon',ico:'🥄'}, {txt:'No it is a teenage sock',ico:'🧦'}] },
            { q: 'Dad calls Mom his sweetheart. Who is his sweetheart?', scene: '👨💖👩', ans: 'Mom is his sweetheart', opts: [{txt:'Mom is his sweetheart',ico:'💖'}, {txt:'The thief is his sweetheart',ico:'🦹'}, {txt:'The toast is his sweetheart',ico:'🍞'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết bài KET 35 từ',
            steps: [
              '<b>Bước 1:</b> Hãy tưởng tượng bạn viết email cho bạn về một ngày cuối tuần. Ghi nhanh ba ý: ăn gì (toast), mặc gì (swimsuit), đi đâu.',
              '<b>Bước 2:</b> Viết đoạn khoảng 35 từ, dùng một câu gián tiếp, một câu hỏi đuôi và từ "because", ví dụ <i>"Mai said the timetable was new, didn\'t she?"</i>',
              '<b>Bước 3:</b> Đếm số từ, đọc to cho một người bạn nghe và nhờ bạn kiểm tra lỗi thì động từ giúp bạn.'
            ]
          }
        }
      ]
    }
  }
};
