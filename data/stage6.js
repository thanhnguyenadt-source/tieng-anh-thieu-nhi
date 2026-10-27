/* GIAI ĐOẠN 6 — B2 First cho học sinh
   Dữ liệu một giai đoạn. Nạp bằng <script src> (chạy được từ file://, không dùng fetch).
   Định dạng bài học: xem docs/GEMINI_LESSON_PROMPT.md; kiểm bằng: node tools/validate_lessons.js (và tools/coverage.js) */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[6] = {
  label: '👑 GĐ 6: B2 First',  // chữ hiện trên nút chọn giai đoạn
  modules: [
    { code: '6.1', title: 'Kể Chuyện Đủ Mọi Thì' },
    { code: '6.2', title: 'Tương Lai Nhiều Sắc Thái' },
    { code: '6.3', title: 'Thói Quen Và Trạng Thái' },
    { code: '6.4', title: 'Nếu Như Mọi Chuyện Khác Đi' },
    { code: '6.5', title: 'Giả Định Và Đảo Ngữ Điều Kiện' },
    { code: '6.6', title: 'Ước Muốn Và Tiếc Nuối' },
    { code: '6.7', title: 'Đoán Chuyện Đã Qua' },
    { code: '6.8', title: 'Bị Động Nâng Cao' },
    { code: '6.9', title: 'Nhờ Làm Và Bị Làm' },
    { code: '6.10', title: 'Thuật Lại Lời Người Khác' },
    { code: '6.11', title: 'Tường Thuật Câu Hỏi Và Đề Nghị' },
    { code: '6.12', title: 'Mệnh Đề Quan Hệ Trọn Vẹn' },
    { code: '6.13', title: 'Rút Gọn Mệnh Đề' },
    { code: '6.14', title: 'Danh Động Từ Và Nguyên Mẫu' },
    { code: '6.15', title: 'Đảo Ngữ Để Nhấn Mạnh' },
    { code: '6.16', title: 'Câu Chẻ Và Nhấn Mạnh' },
    { code: '6.17', title: 'So Sánh Tinh Tế' },
    { code: '6.18', title: 'Lượng Từ Và Mạo Từ' },
    { code: '6.19', title: 'Liên Từ Mạch Lạc' },
    { code: '6.20', title: 'Mức Độ Và Trạng Từ' },
    { code: '6.21', title: 'Cụm Động Từ Theo Chủ Đề' },
    { code: '6.22', title: 'Giới Từ Đi Kèm' },
    { code: '6.23', title: 'Tạo Từ Thông Minh' },
    { code: '6.24', title: 'Kết Hợp Từ Tự Nhiên' },
    { code: '6.25', title: 'Hỏi Và Đáp Lịch Sự' },
    { code: '6.26', title: 'Văn Phong Trang Trọng' },
    { code: '6.27', title: 'Tổng Kết B2 First' }
  ],
  data: {
    '6.1': {
      lessons: [
        {
          id: '6.1A', name: 'Bài 6.1A: Kỷ niệm đáng nhớ với bạn bè',
          grammar: {
            formulas: ['👦 Nam + ⏳ was studying + 🔔 when I walked in', '👧 We + ⏪ had written + 🔔 before the bell rang', '👩 Lan + ✅ arrived + 🏫 at the classroom'],
            tip: 'Việc đang diễn ra làm nền thì dùng was/were + V-ing, việc xảy ra trước một mốc quá khứ thì dùng had + V3, còn việc chính nối tiếp thì dùng quá khứ đơn!'
          },
          chunks: [
            { scene: '👦📖🏫', full: 'Nam was studying vowel sounds when I walked into the classroom', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'was studying',ico:'📖',c:'v'}, {t:'vowel sounds when I walked into the classroom',ico:'🔤',c:'o'}], traceWord: 'vowel' },
            { scene: '👧📝🔔', full: 'We had written only a partial summary of the story before the bell rang', parts: [{t:'We',ico:'👧',c:'s'}, {t:'had written',ico:'📝',c:'v'}, {t:'only a partial summary of the story before the bell rang',ico:'🌗',c:'o'}], traceWord: 'partial' },
            { scene: '💧📊🎤', full: 'Our class had measured the water consumption with great accuracy before we gave the report', parts: [{t:'Our class',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'had measured',ico:'📏',c:'v'}, {t:'the water consumption with great accuracy before we gave the report',ico:'📊',c:'o'}], traceWord: 'consumption' },
            { scene: '👩🗣📱', full: 'Anna was talking with a bilingual guide when she dropped her phone', parts: [{t:'Anna',ico:'👩',c:'s'}, {t:'was talking',ico:'🗣',c:'v'}, {t:'with a bilingual guide when she dropped her phone',ico:'📱',c:'o'}], traceWord: 'bilingual' },
            { scene: '😂👩‍🏫👨‍🏫🟰', full: 'We laughed because we had noticed a strange similarity between our two teachers', parts: [{t:'We',ico:'👧',c:'s'}, {t:'laughed',ico:'😂',c:'v'}, {t:'because we had noticed a strange similarity between our two teachers',ico:'🟰',c:'o'}], traceWord: 'similarity' },
            { scene: '👧✏️🦠', full: 'Lan was drawing the nucleus of a tiny organism when her friend arrived', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'was drawing',ico:'✏️',c:'v'}, {t:'the nucleus of a tiny organism when her friend arrived',ico:'🦠',c:'o'}], traceWord: 'nucleus' },
            { scene: '👧🧮🤝', full: 'Mai had made a calculation mistake, so her friends checked it in a systematic way', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'had made',ico:'⏪',c:'v'}, {t:'a calculation mistake, so her friends checked it in a systematic way',ico:'🧮',c:'o'}], traceWord: 'calculation' },
            { scene: '🏊👦💪👀', full: 'It was evident that Tom, an intermediate swimmer, had practiced hard for years', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'evident that Tom, an intermediate swimmer, had practiced hard for years',ico:'👀',c:'o'}], traceWord: 'evident' }
          ],
          qaList: [
            { q: 'Why did everyone call Nam a rational boy after the school trip?', scene: '🎒🧠👦', ans: 'He stayed calm and thought carefully when we got lost', opts: [{ txt: 'He stayed calm and thought carefully when we got lost', ico: '🧠' }, { txt: 'He shouted loudly and ran away from the group', ico: '🏃' }, { txt: 'He forgot his bag and went home alone', ico: '🎒' }] },
            { q: 'What had the doctor explained about the syndrome before the old lady left the hospital?', scene: '🩺👵🏥', ans: 'He had explained that the syndrome needs rest and medicine', opts: [{ txt: 'He had explained that the syndrome needs rest and medicine', ico: '💊' }, { txt: 'He had said that the hospital sold cheap shoes', ico: '👟' }, { txt: 'He had asked her to play football in the rain', ico: '⚽' }] },
            { q: 'What did you and your friends commonly do after school last year?', scene: '🏫⚽👫', ans: 'We commonly played football on the playground until it got dark', opts: [{ txt: 'We commonly played football on the playground until it got dark', ico: '⚽' }, { txt: 'We flew to the moon on a yellow bus', ico: '🚌' }, { txt: 'We slept in the library every night', ico: '😴' }] },
            { q: 'How big was the round cake that her friends had made for her birthday?', scene: '🎂👫🎉', ans: 'Its diameter was about thirty centimeters', opts: [{ txt: 'Its diameter was about thirty centimeters', ico: '📏' }, { txt: 'It was a very long and thin pencil', ico: '✏️' }, { txt: 'It was ten kilometers tall and made of glass', ico: '🏙' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Kể Lại Một Kỷ Niệm Với Bạn',
            steps: [
              '<b>Bước 1:</b> Chọn một kỷ niệm vui với bạn bè và viết 3 ý chính: chuyện gì đang diễn ra, chuyện gì đã xảy ra trước đó, chuyện gì xảy ra sau cùng.',
              '<b>Bước 2:</b> Viết 3 câu tiếng Anh, mỗi câu dùng một thì, ví dụ <i>"I was walking home when I met Nam."</i> và <i>"We had planned a trip before it rained."</i>.',
              '<b>Bước 3:</b> Kể câu chuyện cho bạn hoặc người thân nghe trong 1 phút, rồi nhờ họ chỉ ra câu nào là việc nền, việc xảy ra trước và việc chính.'
            ]
          }
        },
        {
          id: '6.1B', name: 'Bài 6.1B: Một ngày học tập vất vả',
          grammar: {
            formulas: ['👧 Lan + ⏳ had been trying + 🤝 to interact with new friends', '👦 Tom + ✅ had drawn + 🔮 a perfect sphere', '👩 Mai + ⏳ had been practicing + 🗣 for the oral'],
            tip: 'Had been + V-ing nhấn vào quá trình kéo dài, còn had + V3 nhấn vào kết quả đã hoàn tất, nên hãy tự hỏi mình nên nhấn vào điều nào!'
          },
          chunks: [
            { scene: '👧🤝🌍', full: 'Lan had been trying to interact with the foreign students since the morning', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'had been trying',ico:'⏳',c:'v'}, {t:'to interact with the foreign students since the morning',ico:'🤝',c:'o'}], traceWord: 'interact' },
            { scene: '👦🔮🧑‍🏫', full: 'Tom had drawn a perfect sphere on the board before the teacher walked in', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'had drawn',ico:'✏️',c:'v'}, {t:'a perfect sphere on the board before the teacher walked in',ico:'🔮',c:'o'}], traceWord: 'sphere' },
            { scene: '🐶🐱🗃💡', full: 'We had been classifying the animals by size for two hours when the lights went out', parts: [{t:'We',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'had been classifying',ico:'🗃',c:'v'}, {t:'the animals by size for two hours when the lights went out',ico:'🐶',c:'o'}], traceWord: 'classifying' },
            { scene: '👧🗣😴', full: 'Mai had been practicing for the oral since seven, so she felt very tired', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'had been practicing',ico:'⏳',c:'v'}, {t:'for the oral since seven, so she felt very tired',ico:'🗣',c:'o'}], traceWord: 'oral' },
            { scene: '👩📖🌴', full: 'Anna had been reading about tropical forests all afternoon when her mother called', parts: [{t:'Anna',ico:'👩',c:'s'}, {t:'had been reading',ico:'📖',c:'v'}, {t:'about tropical forests all afternoon when her mother called',ico:'🌴',c:'o'}], traceWord: 'tropical' },
            { scene: '🧑‍🏫☢📐', full: 'The teacher had explained radiation twice, but the diagram was still confusing', parts: [{t:'The teacher',ico:'🧑‍🏫',c:'s'}, {t:'had explained',ico:'💬',c:'v'}, {t:'radiation twice, but the diagram was still confusing',ico:'☢',c:'o'}], traceWord: 'radiation' },
            { scene: '👦💔↔👫', full: 'Nam had been missing his best friend since their separation in the summer', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'had been missing',ico:'💔',c:'v'}, {t:'his best friend since their separation in the summer',ico:'↔',c:'o'}], traceWord: 'separation' },
            { scene: '🧑‍🏫⚖🌈', full: 'Our teacher had been discussing equality in a diverse world before the bell rang', parts: [{t:'Our teacher',ico:'🧑‍🏫',c:'s'}, {t:'had been discussing',ico:'💬',c:'v'}, {t:'equality in a diverse world before the bell rang',ico:'⚖',c:'o'}], traceWord: 'equality' }
          ],
          qaList: [
            { q: 'What had made the long study day better for the tired students?', scene: '🎵😴📚', ans: 'Some music had been a perfect complement to their lessons', opts: [{ txt: 'Some music had been a perfect complement to their lessons', ico: '🎵' }, { txt: 'The bus had been broken for a week', ico: '🚌' }, { txt: 'They had been sleeping in the garden since noon', ico: '😴' }] },
            { q: 'Which organ had the biology class been studying all day?', scene: '🫀🔬📚', ans: 'They had been studying the heart, which is an important organ', opts: [{ txt: 'They had been studying the heart, which is an important organ', ico: '🫀' }, { txt: 'They had been cooking soup in the school kitchen', ico: '🍲' }, { txt: 'They had been painting the wall of the gym', ico: '🎨' }] },
            { q: 'What had the students drawn first on the diagram of the earth?', scene: '🌍📐✏️', ans: 'They had drawn the outer layer first', opts: [{ txt: 'They had drawn the outer layer first', ico: '🌍' }, { txt: 'They had drawn a big red car', ico: '🚗' }, { txt: 'They had drawn their parents at home', ico: '🏠' }] },
            { q: 'Why could the students not finish the test in peace?', scene: '🔔📝😖', ans: 'Two classes had been singing simultaneously, and the disturbance was too loud', opts: [{ txt: 'Two classes had been singing simultaneously, and the disturbance was too loud', ico: '🔔' }, { txt: 'The test had been written on a very warm sandwich', ico: '🥪' }, { txt: 'The teacher had given them a free holiday', ico: '🏖' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật Ký Một Ngày Học Mệt',
            steps: [
              '<b>Bước 1:</b> Nhớ lại một ngày học thật mệt và liệt kê 4 việc: 2 việc bạn đã làm liên tục trong nhiều giờ, 2 việc bạn đã hoàn thành xong.',
              '<b>Bước 2:</b> Viết 4 câu tiếng Anh: việc kéo dài dùng <i>"I had been studying for three hours."</i>, việc hoàn tất dùng <i>"I had finished my homework."</i>.',
              '<b>Bước 3:</b> Đọc nhật ký cho một người bạn nghe và hỏi bạn ấy: <i>"Which sentence shows a long process?"</i> để cả hai cùng kiểm tra.'
            ]
          }
        },
        {
          id: '6.1C', name: 'Bài 6.1C: Dự án và sở thích gần đây',
          grammar: {
            formulas: ['👦 I + ⏳ have been practicing + 🔤 consonant sounds', '👦 Nam + ✅ has finished + 🧬 his homework', '👧 Lan + 😬 has felt + ⏰ tense (không dùng tiếp diễn)'],
            tip: 'Have been + V-ing nói về quá trình đến tận bây giờ, have + V3 nói về kết quả hiện tại, còn động từ trạng thái như be, know, have thì không chia tiếp diễn!'
          },
          chunks: [
            { scene: '👦🔤🌙', full: 'I have been practicing consonant sounds every evening this week', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have been practicing',ico:'⏳',c:'v'}, {t:'consonant sounds every evening this week',ico:'🔤',c:'o'}], traceWord: 'consonant' },
            { scene: '👦🧬✅⚽', full: 'Nam has finished his biology homework, so he can play football now', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'has finished',ico:'✅',c:'v'}, {t:'his biology homework, so he can play football now',ico:'🧬',c:'o'}], traceWord: 'biology' },
            { scene: '👧📖↩👔', full: 'I have been reading a book with a contrary opinion about school uniforms', parts: [{t:'I',ico:'👧',c:'s'}, {t:'have been reading',ico:'📖',c:'v'}, {t:'a book with a contrary opinion about school uniforms',ico:'↩',c:'o'}], traceWord: 'contrary' },
            { scene: '🧑‍🎓📝📚', full: 'We have been studying the usage of present perfect in short stories', parts: [{t:'We',ico:'🧑‍🎓',c:'s'}, {t:'have been studying',ico:'📚',c:'v'}, {t:'the usage of present perfect in short stories',ico:'📝',c:'o'}], traceWord: 'usage' },
            { scene: '👧😐🗣', full: 'Lan has stayed neutral in the argument and has asked only indirect questions', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'has stayed',ico:'😐',c:'v'}, {t:'neutral in the argument and has asked only indirect questions',ico:'↪',c:'o'}], traceWord: 'neutral' },
            { scene: '📱🥇😊', full: 'This new phone has superior quality, so I have been using it every day', parts: [{t:'This new phone',ico:'📱',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'superior quality, so I have been using it every day',ico:'🥇',c:'o'}], traceWord: 'superior' },
            { scene: '🌱💨🥬☀️', full: 'The plants have been getting enough oxygen and nutrients since we moved them outside', parts: [{t:'The plants',ico:'🌱',c:'s'}, {t:'have been getting',ico:'⏳',c:'v'}, {t:'enough oxygen and nutrients since we moved them outside',ico:'💨',c:'o'}], traceWord: 'oxygen' },
            { scene: '🌳🌐🧑‍🎓', full: 'Interest in nature conservation has become widespread among students in our city', parts: [{t:'Interest in nature conservation',ico:'🌳',c:'s'}, {t:'has become',ico:'📈',c:'v'}, {t:'widespread among students in our city',ico:'🌐',c:'o'}], traceWord: 'conservation' }
          ],
          qaList: [
            { q: 'Why have the students sent a questionnaire home?', scene: '📋🏠👪', ans: 'They have asked for parental opinions about homework', opts: [{ txt: 'They have asked for parental opinions about homework', ico: '👪' }, { txt: 'They have lost all the tickets for the circus', ico: '🎪' }, { txt: 'They have bought a new boat for the lake', ico: '⛵' }] },
            { q: 'Why has Mai felt tense for two days?', scene: '👧😬📝', ans: 'She has been waiting for her exam results', opts: [{ txt: 'She has been waiting for her exam results', ico: '📝' }, { txt: 'She has been swimming in a warm pool', ico: '🏊' }, { txt: 'She has been eating ice cream at the beach', ico: '🍦' }] },
            { q: 'Who has Anna been reading about recently?', scene: '👩📖🌟', ans: 'She has been reading about a prominent scientist', opts: [{ txt: 'She has been reading about a prominent scientist', ico: '🌟' }, { txt: 'She has never opened a book in her life', ico: '📕' }, { txt: 'She has been standing on the roof', ico: '🏠' }] },
            { q: 'How has the school tried to minimize waste this year?', scene: '🏫♻📉', ans: 'It has asked everybody to recycle paper and plastic bottles', opts: [{ txt: 'It has asked everybody to recycle paper and plastic bottles', ico: '♻' }, { txt: 'It has bought more plastic cups for every lesson', ico: '🥤' }, { txt: 'It has thrown rubbish into the river', ico: '🗑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thuyết Trình Mini Về Việc Gần Đây',
            steps: [
              '<b>Bước 1:</b> Chọn một dự án hoặc sở thích gần đây của bạn và ghi ra 2 việc đã làm xong cùng 2 việc bạn vẫn đang làm.',
              '<b>Bước 2:</b> Viết 4 câu: kết quả dùng <i>"I have finished my poster."</i>, quá trình dùng <i>"I have been practicing every evening."</i>.',
              '<b>Bước 3:</b> Thuyết trình 1 phút cho người thân hoặc bạn bè, rồi nhờ họ hỏi <i>"How long have you been doing it?"</i> để bạn trả lời.'
            ]
          }
        }
      ]
    },
    '6.2': {
      lessons: [
        {id:'6.2A',name:'Bài 6.2A: Kế hoạch học tập năm tới',grammar:{formulas:['👦 I + ⚡ will be studying + 🌿 ecology this time next year','👧 She + ⚡ will have finished + 📝 the assignment by then'],tip:'"This time next year" là đang làm giữa chừng (will be + V-ing), còn "by then / by the time" là đã xong rồi (will have + V3).'},chunks:[
        {scene:'👦📚🎓🌿',full:'I will be studying ecology at university this time next year.',parts:[{t:'I',ico:'👦',c:'s'},{t:'will be studying',ico:'📖',c:'v'},{t:'ecology at university this time next year',ico:'🌿',c:'o'}],traceWord:'ecology'},
        {scene:'👧📝✅🌱',full:'She will have finished her ecological assignment by the time class begins.',parts:[{t:'She',ico:'👧',c:'s'},{t:'will have finished',ico:'✅',c:'v'},{t:'her ecological assignment by the time class begins',ico:'📝',c:'o'}],traceWord:'ecological'},
        {scene:'👨‍🏫🌾🏡📚',full:'Tomorrow at ten, we will be learning about agriculture and modern farms.',parts:[{t:'Tomorrow at ten, we',ico:'👫',c:'s'},{t:'will be learning',ico:'📚',c:'v'},{t:'about agriculture and modern farms',ico:'🌾',c:'o'}],traceWord:'agriculture'},
        {scene:'👨🔧⚙️✂️',full:'By then, he will have simplified the mechanical design of the machine.',parts:[{t:'By then, he',ico:'👨',c:'s'},{t:'will have simplified',ico:'✂️',c:'v'},{t:'the mechanical design of the machine',ico:'⚙️',c:'o'}],traceWord:'mechanical'},
        {scene:'👧🛫🧳⏳',full:'Mai will be waiting at the airport terminal when our class arrives.',parts:[{t:'Mai',ico:'👧',c:'s'},{t:'will be waiting',ico:'⏳',c:'v'},{t:'at the airport terminal when our class arrives',ico:'🛫',c:'o'}],traceWord:'terminal'},
        {scene:'👩‍🏫✏️➡️🔴',full:'By then, the teacher will have marked every correction with a red arrow.',parts:[{t:'By then, the teacher',ico:'👩‍🏫',c:'s'},{t:'will have marked',ico:'✏️',c:'v'},{t:'every correction with a red arrow',ico:'➡️',c:'o'}],traceWord:'correction'},
        {scene:'🔬🐄🌳🦌',full:'This time next year, they will be studying how cattle scatter across a habitat.',parts:[{t:'This time next year, they',ico:'🔬',c:'s'},{t:'will be studying',ico:'📖',c:'v'},{t:'how cattle scatter across a habitat',ico:'🐄',c:'o'}],traceWord:'scatter'},
        {scene:'🏫♿🤝🎓',full:'By then, our school will have helped every student with a disability.',parts:[{t:'By then, our school',ico:'🏫',c:'s'},{t:'will have helped',ico:'🤝',c:'v'},{t:'every student with a disability',ico:'♿',c:'o'}],traceWord:'disability'}],
        qaList:[
        {q:'Nam starts cooking at six and stops at eight. What will he be doing at seven?',scene:'👨‍🍳🍚🕖',ans:'He will be cooking.',opts:[{txt:'He will be cooking.',ico:'🍚'},{txt:'He will be sleeping.',ico:'😴'},{txt:'He will be flying a plane.',ico:'✈️'}]},
        {q:'Lan finishes her homework at five. What will she have done by six?',scene:'👧📖🕕',ans:'She will have finished her homework.',opts:[{txt:'She will have finished her homework.',ico:'✅'},{txt:'She will be starting her homework.',ico:'📖'},{txt:'She will have been a doctor.',ico:'🩺'}]},
        {q:'Tom is in year ten now. What will he be doing this time next year?',scene:'👦🏫📆',ans:'He will be studying in year eleven.',opts:[{txt:'He will be studying in year eleven.',ico:'🏫'},{txt:'He will be studying in year nine.',ico:'9️⃣'},{txt:'He will be studying in year five.',ico:'5️⃣'}]},
        {q:'What will the class have learned by the end of the course?',scene:'🌱🔬🎓',ans:'They will have learned how plants reproduce.',opts:[{txt:'They will have learned how plants reproduce.',ico:'🌱'},{txt:'They will have learned how to fly a plane.',ico:'✈️'},{txt:'They will have learned how to cook rice.',ico:'🍚'}]}],
        parentGame:{title:'🎲 Hoạt động Đời thực (12 phút): Lịch học năm tới',steps:[
        '<b>Bước 1:</b> Vẽ một đường thời gian cho năm tới, ghi 3 mốc (ví dụ tháng 3, tháng 6, tháng 12) và một mục tiêu học tập ở mỗi mốc.',
        '<b>Bước 2:</b> Viết 3 câu: một câu với <i>"This time next year, I will be studying..."</i> và hai câu với <i>"By then, I will have finished..."</i>.',
        '<b>Bước 3:</b> Đọc kế hoạch cho một người bạn, rồi nhờ bạn chỉ ra câu nào là đang làm giữa chừng và câu nào là đã xong.']}},
        {id:'6.2B',name:'Bài 6.2B: Mục tiêu nghề nghiệp sau này',grammar:{formulas:['👩 She + ⚡ will have been studying + ⏳ for two years','👦 He + ⚡ will have been working + ⏳ for ten years'],tip:'Dùng will have been + V-ing với "for + khoảng thời gian" để nói việc sẽ kéo dài bao lâu tính đến một mốc tương lai.'},chunks:[
        {scene:'👩🫁💨📚',full:'She will have been studying how lungs absorb air for two years by June.',parts:[{t:'She',ico:'👩',c:'s'},{t:'will have been studying',ico:'📚',c:'v'},{t:'how lungs absorb air for two years by June',ico:'🫁',c:'o'}],traceWord:'absorb'},
        {scene:'🧑‍⚕️🫀🩸📖',full:'I will have been studying the liver and veins for five years by 2035.',parts:[{t:'I',ico:'🧑‍⚕️',c:'s'},{t:'will have been studying',ico:'📖',c:'v'},{t:'the liver and veins for five years by 2035',ico:'🫀',c:'o'}],traceWord:'liver'},
        {scene:'👨‍⚖️📜🚫🤝',full:'He will have been defending the constitution against discrimination for ten years by 2040.',parts:[{t:'He',ico:'👨‍⚖️',c:'s'},{t:'will have been defending',ico:'🛡️',c:'v'},{t:'the constitution against discrimination for ten years by 2040',ico:'📜',c:'o'}],traceWord:'discrimination'},
        {scene:'👥⛏️🪓🔬',full:'The team will have been studying primitive tools and minerals for six months by summer.',parts:[{t:'The team',ico:'👥',c:'s'},{t:'will have been studying',ico:'🔬',c:'v'},{t:'primitive tools and minerals for six months by summer',ico:'⛏️',c:'o'}],traceWord:'primitive'},
        {scene:'👩‍💼📈♟️👥',full:'Lan will have been leading a productive team and making strategic plans for ten years.',parts:[{t:'Lan',ico:'👩‍💼',c:'s'},{t:'will have been leading',ico:'📈',c:'v'},{t:'a productive team and making strategic plans for ten years',ico:'♟️',c:'o'}],traceWord:'strategic'},
        {scene:'✍️📚👩‍👧👯',full:'She will have been writing for ten years, and her style will resemble her mother\'s.',parts:[{t:'She',ico:'👩',c:'s'},{t:'will have been writing',ico:'✍️',c:'v'},{t:'for ten years, and her style will resemble her mother\'s',ico:'👯',c:'o'}],traceWord:'resemble'},
        {scene:'📖🐉✍️👨‍🎨',full:'The author will have been rewriting an old myth for two years by next spring.',parts:[{t:'The author',ico:'✍️',c:'s'},{t:'will have been rewriting',ico:'📝',c:'v'},{t:'an old myth for two years by next spring',ico:'🐉',c:'o'}],traceWord:'myth'},
        {scene:'🤝🏫🧩🗓️',full:'We will have been working to unify the club for a year by May.',parts:[{t:'We',ico:'👫',c:'s'},{t:'will have been working',ico:'🤝',c:'v'},{t:'to unify the club for a year by May',ico:'🧩',c:'o'}],traceWord:'unify'}],
        qaList:[
        {q:'Mai has decided on her job for sure. Is her plan definite?',scene:'👩‍💼✔️💼',ans:'Yes, her plan is definite.',opts:[{txt:'Yes, her plan is definite.',ico:'✔️'},{txt:'No, she has not decided.',ico:'🤔'},{txt:'Yes, she is still deciding.',ico:'🤷'}]},
        {q:'Dr. Lee is awake and knows what is happening around him. Is he conscious?',scene:'👨‍⚕️🧠👀',ans:'Yes, he is conscious.',opts:[{txt:'Yes, he is conscious.',ico:'🧠'},{txt:'No, he is deeply asleep.',ico:'😴'},{txt:'Yes, he is deeply asleep.',ico:'💤'}]},
        {q:'Tom started studying in January. How long will he have been studying by June?',scene:'👦📖📆',ans:'He will have been studying for five months.',opts:[{txt:'He will have been studying for five months.',ico:'📆'},{txt:'He will have been studying for five years.',ico:'🗓️'},{txt:'He will have been studying for five days.',ico:'⏱️'}]},
        {q:'Mai will start work in 2030. By 2040, how long will she have been working?',scene:'👩‍💼💼🗓️',ans:'She will have been working for ten years.',opts:[{txt:'She will have been working for ten years.',ico:'🗓️'},{txt:'She will have been working for one year.',ico:'1️⃣'},{txt:'She will have been working for twenty years.',ico:'2️⃣'}]}],
        parentGame:{title:'🎲 Hoạt động Đời thực (12 phút): Hồ sơ nghề nghiệp năm 2040',steps:[
        '<b>Bước 1:</b> Chọn một nghề bạn mơ ước và ghi 3 mốc tương lai (ví dụ 2030, 2035, 2040) cùng việc bạn sẽ làm đến mốc đó.',
        '<b>Bước 2:</b> Viết 3 câu dạng <i>"By 2040, I will have been working as ... for ... years."</i> với 3 khoảng thời gian khác nhau.',
        '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn hoặc người nhà, rồi hỏi họ: <i>"How long will I have been working by then?"</i>']}},
        {id:'6.2C',name:'Bài 6.2C: Lịch trình, sự kiện và thông báo',grammar:{formulas:['🏫 The school + ⚡ is to announce + 📢 the plan','🌧️ It + ⚡ is likely to + ☔ rain','🚌 The bus + ⚡ is on the point of + 🚪 leaving'],tip:'Be to = đã lên lịch (trang trọng), be bound to = chắc chắn xảy ra, be likely to = có khả năng, be on the point of + V-ing = sắp sửa làm ngay.'},chunks:[
        {scene:'🏫📢📚🤵',full:'The school is to formally announce the new curriculum on Monday.',parts:[{t:'The school',ico:'🏫',c:'s'},{t:'is to formally announce',ico:'📢',c:'v'},{t:'the new curriculum on Monday',ico:'📚',c:'o'}],traceWord:'curriculum'},
        {scene:'🛠️🕘🎫🆓',full:'The workshop is to begin at nine, and admission is free.',parts:[{t:'The workshop',ico:'🛠️',c:'s'},{t:'is to begin',ico:'🕘',c:'v'},{t:'at nine, and admission is free',ico:'🎫',c:'o'}],traceWord:'workshop'},
        {scene:'🧑🏺🗣️🌙',full:'A famous philosopher is to speak about ancient civilization tonight.',parts:[{t:'A famous philosopher',ico:'🧑',c:'s'},{t:'is to speak',ico:'🗣️',c:'v'},{t:'about ancient civilization tonight',ico:'🏺',c:'o'}],traceWord:'philosopher'},
        {scene:'👨‍💼🙅🎯✅',full:'The manager is bound to answer every objection accurately.',parts:[{t:'The manager',ico:'👨‍💼',c:'s'},{t:'is bound to answer',ico:'✅',c:'v'},{t:'every objection accurately',ico:'🙅',c:'o'}],traceWord:'objection'},
        {scene:'👩‍🏫🗣️🌍🆕',full:'The new teacher is likely to have a strong accent.',parts:[{t:'The new teacher',ico:'👩‍🏫',c:'s'},{t:'is likely to have',ico:'🌍',c:'v'},{t:'a strong accent',ico:'🗣️',c:'o'}],traceWord:'accent'},
        {scene:'👦🚰🧼🖐️',full:'Nam is on the point of washing his hands in the basin.',parts:[{t:'Nam',ico:'👦',c:'s'},{t:'is on the point of washing',ico:'🧼',c:'v'},{t:'his hands in the basin',ico:'🚰',c:'o'}],traceWord:'basin'},
        {scene:'🚌🌳💡👥',full:'Our trip is likely to be a meaningful way to grow socially.',parts:[{t:'Our trip',ico:'🚌',c:'s'},{t:'is likely to be',ico:'💡',c:'v'},{t:'a meaningful way to grow socially',ico:'👥',c:'o'}],traceWord:'meaningful'},
        {scene:'📋🍊💧⚠️',full:'The report is to explain the essence of the sleep deficiency.',parts:[{t:'The report',ico:'📋',c:'s'},{t:'is to explain',ico:'🔍',c:'v'},{t:'the essence of the sleep deficiency',ico:'⚠️',c:'o'}],traceWord:'deficiency'}],
        qaList:[
        {q:'Mai is sure the show is to start at eight. What can she say?',scene:'👧🎭🕗',ans:'I can positively say it starts at eight.',opts:[{txt:'I can positively say it starts at eight.',ico:'👍'},{txt:'I do not know anything about the show.',ico:'🤐'},{txt:'I am on the point of cooking dinner.',ico:'🍳'}]},
        {q:'The bus is on the point of leaving. What should you do?',scene:'🚌💨🏃',ans:'I should run now.',opts:[{txt:'I should run now.',ico:'🏃'},{txt:'I should sit down and read.',ico:'📖'},{txt:'I should wait until tomorrow.',ico:'🗓️'}]},
        {q:'Dark clouds are in the sky. What is likely to happen?',scene:'☁️🌩️🌧️',ans:'It is likely to rain.',opts:[{txt:'It is likely to rain.',ico:'🌧️'},{txt:'It is likely to be hot.',ico:'🔥'},{txt:'The sun is bound to shine all day.',ico:'☀️'}]},
        {q:'The head teacher says the meeting is to start at two. When will it start?',scene:'👨‍🏫🕑📅',ans:'It will start at two.',opts:[{txt:'It will start at two.',ico:'🕑'},{txt:'It will start at four.',ico:'🕓'},{txt:'It will start yesterday.',ico:'⏪'}]}],
        parentGame:{title:'🎲 Hoạt động Đời thực (12 phút): Bản tin thông báo của lớp',steps:[
        '<b>Bước 1:</b> Tưởng tượng một sự kiện của lớp hoặc câu lạc bộ (hội thảo, buổi nói chuyện, chuyến đi) và ghi giờ, địa điểm, vé vào cửa.',
        '<b>Bước 2:</b> Viết bản thông báo 4 câu với <i>"is to"</i>, <i>"is bound to"</i>, <i>"is likely to"</i> và <i>"is on the point of"</i>, mỗi cấu trúc một lần.',
        '<b>Bước 3:</b> Đọc bản tin như một người dẫn chương trình trang trọng cho bạn bè nghe, rồi hỏi họ thấy cấu trúc nào chắc chắn nhất.']}}
      ]
    },
    '6.3': {
      lessons: [
        {
          id: '6.3A', name: 'Bài 6.3A: Thói quen gây khó chịu',
          grammar: {
            formulas: ['👦 My brother + ⚡ is always talking + 🎓 about his scholarship', '👨‍🏫 Our teacher + ⏪ would always give + ⚖ us a punishment', '👨‍👩‍👧 My family + 🏮 would traditionally eat + 🍲 dinner together'],
            tip: 'Always + tiếp diễn = than phiền về thói quen hiện tại; would always = thói quen đã có trong quá khứ!'
          },
          chunks: [
            { scene: '👦🗣🎓', full: 'My brother is always talking about his scholarship', parts: [{t:'My brother',ico:'👦',c:'s'}, {t:'is always talking',ico:'🗣',c:'v'}, {t:'about his scholarship',ico:'🎓',c:'o'}], traceWord: 'scholarship' },
            { scene: '👨‍🏫📏😬', full: 'Our old teacher would always give us a fair punishment', parts: [{t:'Our old teacher',ico:'👨‍🏫',c:'s'}, {t:'would always give',ico:'⏪',c:'v'}, {t:'us a fair punishment',ico:'⚖',c:'o'}], traceWord: 'punishment' },
            { scene: '👨‍👩‍👧🏮🍲', full: 'My family would traditionally eat dinner together every evening', parts: [{t:'My family',ico:'👨‍👩‍👧',c:'s'}, {t:'would traditionally eat',ico:'🏮',c:'v'}, {t:'dinner together every evening',ico:'🍲',c:'o'}], traceWord: 'traditionally' },
            { scene: '👧📚⏱', full: 'My sister is always studying in an intensive summer course', parts: [{t:'My sister',ico:'👧',c:'s'}, {t:'is always studying',ico:'📚',c:'v'}, {t:'in an intensive summer course',ico:'⏱',c:'o'}], traceWord: 'intensive' },
            { scene: '👦❓🔑', full: 'Tom is always asking about my motive for being late', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'is always asking',ico:'❓',c:'v'}, {t:'about my motive for being late',ico:'🔑',c:'o'}], traceWord: 'motive' },
            { scene: '👩‍⚕️🏥💉', full: 'The doctor at the clinic would always smile before she injected me', parts: [{t:'The doctor at the clinic',ico:'👩‍⚕️',c:'s'}, {t:'would always smile',ico:'😊',c:'v'}, {t:'before she injected me',ico:'💉',c:'o'}], traceWord: 'injected' },
            { scene: '📐🏗✏', full: 'The architect is always drawing realistic plans for the new school', parts: [{t:'The architect',ico:'📐',c:'s'}, {t:'is always drawing',ico:'✏',c:'v'}, {t:'realistic plans for the new school',ico:'🎯',c:'o'}], traceWord: 'architect' },
            { scene: '🌧🏙📅', full: 'The rainfall in our town is always changing these days', parts: [{t:'The rainfall in our town',ico:'🌧',c:'s'}, {t:'is always changing',ico:'🔄',c:'v'}, {t:'these days',ico:'📅',c:'o'}], traceWord: 'rainfall' }
          ],
          qaList: [
            { q: 'Where would the birds fly freely every morning?', scene: '🐦🕊🌅', ans: 'They would fly toward the horizon', opts: [{ txt: 'They would fly toward the horizon', ico: '🌅' }, { txt: 'Because they are very hungry', ico: '🍞' }, { txt: 'In the kitchen', ico: '🍳' }] },
            { q: 'What is our science teacher always talking about?', scene: '👨‍🏫⚛🧬', ans: 'He is always talking about atomic power and genetics', opts: [{ txt: 'He is always talking about atomic power and genetics', ico: '⚛🧬' }, { txt: 'Because he likes red apples', ico: '🍎' }, { txt: 'On the second floor', ico: '🏢' }] },
            { q: 'What would your uncle always tell us about?', scene: '👨🧊🧲', ans: 'He would always tell us about the south pole', opts: [{ txt: 'He would always tell us about the south pole', ico: '🧲' }, { txt: 'He is sleeping on the sofa now', ico: '🛋' }, { txt: 'Because it is a sunny day', ico: '☀' }] },
            { q: 'What is the history teacher always talking about?', scene: '👩‍🏫📖⚔', ans: 'She is always talking about the invasion', opts: [{ txt: 'She is always talking about the invasion', ico: '⚔' }, { txt: 'Because she likes blue pens', ico: '🖊' }, { txt: 'By bus at seven', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật Ký Thói Quen Của Cả Nhà',
            steps: [
              '<b>Bước 1:</b> Em viết 3 thói quen hiện tại của người thân làm em hơi khó chịu, ví dụ <i>"My brother is always talking about his games."</i> (viết nhẹ nhàng, vui vẻ).',
              '<b>Bước 2:</b> Em viết thêm 3 thói quen ngày xưa của ông bà hoặc thầy cô bằng <i>"would always"</i>, ví dụ <i>"My grandmother would always tell us a story."</i>.',
              '<b>Bước 3:</b> Em đọc to các câu cho bạn hoặc người nhà nghe, rồi cả hai đoán đó là thói quen của ai và chọn một thói quen đáng yêu nhất.'
            ]
          }
        },
        {
          id: '6.3B', name: 'Bài 6.3B: Suy nghĩ, cảm nhận và giác quan',
          grammar: {
            formulas: ['👦 I + 🤔 am thinking + 🧩 about a puzzle (đang suy nghĩ)', '👦 I + 💡 think + 🚪 the exit is there (ý kiến)', '👨‍🔧 He + 🍽 is having + 🥪 lunch (đang ăn)'],
            tip: 'think, have, see, taste, be thường là động từ trạng thái nên ít dùng -ing, nhưng khi nghĩa đổi thành hành động (đang nghĩ, đang ăn, đang gặp, đang nếm, đang cư xử) thì dùng -ing được!'
          },
          chunks: [
            { scene: '👦🤔🧩', full: 'I am thinking about this puzzle for my physics homework', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am thinking',ico:'🤔',c:'v'}, {t:'about this puzzle for my physics homework',ico:'🧩',c:'o'}], traceWord: 'puzzle' },
            { scene: '👦💡🚪', full: 'I think the exit is on the other side of the hall', parts: [{t:'I',ico:'👦',c:'s'}, {t:'think',ico:'💡',c:'v'}, {t:'the exit is on the other side of the hall',ico:'🚪',c:'o'}], traceWord: 'exit' },
            { scene: '👨‍🔧🍽⏳', full: 'The mechanic is having lunch now and will be ready shortly', parts: [{t:'The mechanic',ico:'👨‍🔧',c:'s'}, {t:'is having',ico:'🍽',c:'v'}, {t:'lunch now and will be ready shortly',ico:'⏳',c:'o'}], traceWord: 'shortly' },
            { scene: '👧👀⚗', full: 'Lan is seeing the chemistry teacher about her homework after school', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'is seeing',ico:'👀',c:'v'}, {t:'the chemistry teacher about her homework after school',ico:'⚗',c:'o'}], traceWord: 'chemistry' },
            { scene: '👦🖼🎨', full: 'I see that your picture is very artistic', parts: [{t:'I',ico:'👦',c:'s'}, {t:'see',ico:'👀',c:'v'}, {t:'that your picture is very artistic',ico:'🎨',c:'o'}], traceWord: 'artistic' },
            { scene: '👨‍🍳🍲🧂', full: 'The cook is tasting the soup because the salt did not dissolve', parts: [{t:'The cook',ico:'👨‍🍳',c:'s'}, {t:'is tasting',ico:'👅',c:'v'}, {t:'the soup because the salt did not dissolve',ico:'🧂',c:'o'}], traceWord: 'dissolve' },
            { scene: '🧒🏊💧', full: 'The children are being careful in the shallow water', parts: [{t:'The children',ico:'🧒',c:'s'}, {t:'are being',ico:'⚡',c:'v'}, {t:'careful in the shallow water',ico:'🏊',c:'o'}], traceWord: 'shallow' },
            { scene: '👥🗣⛓', full: 'We are having a long talk about slavery in history class', parts: [{t:'We',ico:'👥',c:'s'}, {t:'are having',ico:'🗣',c:'v'}, {t:'a long talk about slavery in history class',ico:'⛓',c:'o'}], traceWord: 'slavery' }
          ],
          qaList: [
            { q: 'Which way is the bubble going?', scene: '🫧📈', ans: 'It is going upward', opts: [{ txt: 'It is going upward', ico: '📈' }, { txt: 'It is having lunch', ico: '🍽' }, { txt: 'It is a good friend', ico: '👫' }] },
            { q: 'What is the shop selling today?', scene: '🏪📦💰', ans: 'It is selling cheap goods', opts: [{ txt: 'It is selling cheap goods', ico: '📦' }, { txt: 'Because it is raining', ico: '🌧' }, { txt: 'She is seeing a doctor', ico: '👩‍⚕️' }] },
            { q: 'What does the doctor have for the flu?', scene: '👩‍⚕️💊🤧', ans: 'She has a cure for the flu', opts: [{ txt: 'She has a cure for the flu', ico: '💊' }, { txt: 'On the other side of the hall', ico: '🚪' }, { txt: 'Because the salt is sweet', ico: '🧂' }] },
            { q: 'How does the cold water feel?', scene: '🧊💧✨', ans: 'It is a strange sensation, but I like it nonetheless', opts: [{ txt: 'It is a strange sensation, but I like it nonetheless', ico: '✨' }, { txt: 'At the school gate', ico: '🏫' }, { txt: 'Because the soup is hot', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đoán Nghĩa -ing Trong Cuộc Sống',
            steps: [
              '<b>Bước 1:</b> Em làm hai thẻ giấy: thẻ "trạng thái" (<i>"I think it is easy."</i>) và thẻ "hành động" (<i>"I am thinking about the answer."</i>). Làm cùng như vậy cho have, see, taste, be.',
              '<b>Bước 2:</b> Bạn rút một thẻ, em nói câu tiếng Anh tương ứng và giải thích bằng tiếng Việt vì sao dùng hoặc không dùng -ing.',
              '<b>Bước 3:</b> Em viết ngắn 4 câu về những gì em đang làm hôm nay (đang nghĩ, đang ăn, đang gặp ai, đang nếm món gì) rồi đọc cho bạn nghe.'
            ]
          }
        },
        {
          id: '6.3C', name: 'Bài 6.3C: Lối sống lành mạnh lâu dài',
          grammar: {
            formulas: ['🌾 Farmers + 🔮 will grow + 🍚 more rice once scientists have changed it', '👦 I + 🚫 will not interrupt + 🗣 you until you have finished', '🚌 The bus + 🔮 will leave + ⏰ by the time we have packed'],
            tip: 'Sau once / as soon as / until / by the time, nói về tương lai nhưng vẫn dùng hiện tại hoàn thành (have finished), tuyệt đối không dùng will!'
          },
          chunks: [
            { scene: '👨‍🌾🍚🧬', full: 'Farmers will grow more rice once scientists have changed it genetically', parts: [{t:'Farmers',ico:'👨‍🌾',c:'s'}, {t:'will grow',ico:'🌱',c:'v'}, {t:'more rice once scientists have changed it genetically',ico:'🧬',c:'o'}], traceWord: 'genetically' },
            { scene: '👕💧☀', full: 'I will not put on this damp shirt until it has dried completely', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will not put on',ico:'🚫',c:'v'}, {t:'this damp shirt until it has dried completely',ico:'💧',c:'o'}], traceWord: 'damp' },
            { scene: '👴🦴🌳', full: 'Grandpa will rest his sore hip as soon as he has finished the garden work', parts: [{t:'Grandpa',ico:'👴',c:'s'}, {t:'will rest',ico:'🛋',c:'v'}, {t:'his sore hip as soon as he has finished the garden work',ico:'🦴',c:'o'}], traceWord: 'hip' },
            { scene: '🤝🌍🚫', full: 'We will not end prejudice until we have learned about each other', parts: [{t:'We',ico:'👥',c:'s'}, {t:'will not end',ico:'🚫',c:'v'}, {t:'prejudice until we have learned about each other',ico:'🤝',c:'o'}], traceWord: 'prejudice' },
            { scene: '👧✋🗣', full: 'I will not interrupt you until you have finished your speech', parts: [{t:'I',ico:'👧',c:'s'}, {t:'will not interrupt',ico:'✋',c:'v'}, {t:'you until you have finished your speech',ico:'🗣',c:'o'}], traceWord: 'interrupt' },
            { scene: '☝🩸🩹', full: 'Your finger will stop bleeding as soon as you have put on a bandage', parts: [{t:'Your finger',ico:'☝',c:'s'}, {t:'will stop',ico:'🛑',c:'v'}, {t:'bleeding as soon as you have put on a bandage',ico:'🩹',c:'o'}], traceWord: 'bleeding' },
            { scene: '📝🌁✏', full: 'Your answer will stay vague until you have added more detail', parts: [{t:'Your answer',ico:'📝',c:'s'}, {t:'will stay',ico:'⏳',c:'v'}, {t:'vague until you have added more detail',ico:'🌁',c:'o'}], traceWord: 'vague' },
            { scene: '👦📞🏠', full: 'I will call you as soon as I have arrived and we can talk afterward', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will call',ico:'📞',c:'v'}, {t:'you as soon as I have arrived and we can talk afterward',ico:'➡',c:'o'}], traceWord: 'afterward' }
          ],
          qaList: [
            { q: 'What will you do once you have finished your homework?', scene: '📚✅🎷', ans: 'I will listen to jazz', opts: [{ txt: 'I will listen to jazz', ico: '🎷' }, { txt: 'It was a red bus', ico: '🚌' }, { txt: 'At the school gate', ico: '🏫' }] },
            { q: 'How long will my uncle stay unemployed?', scene: '👨💼🔍', ans: 'He will stay unemployed until he has found a job', opts: [{ txt: 'He will stay unemployed until he has found a job', ico: '💼' }, { txt: 'Because he likes cold milk', ico: '🥛' }, { txt: 'He is sitting on a chair', ico: '🪑' }] },
            { q: 'What will the republic do once the thief has been found?', scene: '🏛🕵🔨', ans: 'It will punish the thief', opts: [{ txt: 'It will punish the thief', ico: '🔨' }, { txt: 'It was a long summer', ico: '☀' }, { txt: 'In the old kitchen', ico: '🍳' }] },
            { q: 'What will Mum say when she has seen your room?', scene: '👩🛏🧦', ans: 'Goodness, what a mess', opts: [{ txt: 'Goodness, what a mess', ico: '😮' }, { txt: 'Yes, I like green apples', ico: '🍏' }, { txt: 'By train at nine', ico: '🚆' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Kế Hoạch Sống Khỏe Của Em',
            steps: [
              '<b>Bước 1:</b> Em viết 5 mục tiêu sống khỏe của mình, ví dụ ngủ sớm, vận động, ăn rau, mỗi mục một dòng.',
              '<b>Bước 2:</b> Em nối mỗi mục tiêu với một mốc thời gian bằng <i>"once"</i>, <i>"as soon as"</i>, <i>"until"</i> hoặc <i>"by the time"</i>, ví dụ <i>"I will go for a run as soon as I have finished my homework."</i>.',
              '<b>Bước 3:</b> Em thuyết trình mini 1 phút kế hoạch của mình cho bạn hoặc người nhà nghe, rồi bạn góp ý một mốc thời gian thực tế hơn.'
            ]
          }
        }
      ]
    },
    '6.4': {
      lessons: [
        {
          id: '6.4A', name: 'Bài 6.4A: Lựa chọn và hệ quả trong học tập',
          grammar: {
            formulas: ['⏪ If + had V3 + 🔜 would + V (quá khứ → hiện tại)', '⏩ If + past simple + 🔙 would have V3 (hiện tại → quá khứ)'],
            tip: 'Hai thời gian trộn nhau: chọn sai hôm qua thì hôm nay chịu hậu quả (had V3 → would V), còn tính cách hiện tại có thể đổi chuyện cũ (past → would have V3)!'
          },
          chunks: [
            { scene: '🗓️😌🎰', full: 'I would be calm now if I had chosen the early slot', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would be',ico:'⚡',c:'v'}, {t:'calm now if I had chosen the early slot',ico:'🎰',c:'o'}], traceWord: 'slot' },
            { scene: '🎮📚🍰', full: 'The game would not tempt me now if I had finished my homework', parts: [{t:'The game',ico:'🎮',c:'s'}, {t:'would not tempt',ico:'🍰',c:'v'}, {t:'me now if I had finished my homework',ico:'📚',c:'o'}], traceWord: 'tempt' },
            { scene: '👩‍⚕️🩺🌟', full: 'She would be a surgeon now if she had made a tremendous effort', parts: [{t:'She',ico:'👩',c:'s'}, {t:'would be',ico:'⚡',c:'v'}, {t:'a surgeon now if she had made a tremendous effort',ico:'🩺',c:'o'}], traceWord: 'surgeon' },
            { scene: '🦶😣🎈', full: 'My ankle would not be painful or swelling now if I had rested yesterday', parts: [{t:'My ankle',ico:'🦶',c:'s'}, {t:'would not be',ico:'⚡',c:'v'}, {t:'painful or swelling now if I had rested yesterday',ico:'😣',c:'o'}], traceWord: 'swelling' },
            { scene: '👑🏛️🪨', full: 'The emperor would be famous today if he had built that marble tower', parts: [{t:'The emperor',ico:'👑',c:'s'}, {t:'would be',ico:'⚡',c:'v'}, {t:'famous today if he had built that marble tower',ico:'🪨',c:'o'}], traceWord: 'emperor' },
            { scene: '🚌⏰📍', full: 'We would be at our destination now if we had left earlier', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'would be',ico:'⚡',c:'v'}, {t:'at our destination now if we had left earlier',ico:'📍',c:'o'}], traceWord: 'destination' },
            { scene: '🧑‍🎓🔬😨', full: 'He would have joined the lab last year if he had been braver', parts: [{t:'He',ico:'👦',c:'s'}, {t:'would have joined',ico:'⏪',c:'v'}, {t:'the lab last year if he had been braver',ico:'🔬',c:'o'}], traceWord: 'lab' },
            { scene: '🍞🧁🧂', full: 'The bread would be softer now if I had added baking powder', parts: [{t:'The bread',ico:'🍞',c:'s'}, {t:'would be',ico:'⚡',c:'v'}, {t:'softer now if I had added baking powder',ico:'🧂',c:'o'}], traceWord: 'powder' }
          ],
          qaList: [
            { q: 'What is ten minus four?', scene: '🔟➖4️⃣', ans: 'It is six', opts: [{ txt: 'It is six', ico: '6️⃣' }, { txt: 'It is fourteen', ico: '🔢' }, { txt: 'It is ten', ico: '🔟' }] },
            { q: 'Is the test hard for you?', scene: '📝🤷', ans: 'It is supposedly easy', opts: [{ txt: 'It is supposedly easy', ico: '🤷' }, { txt: 'It is on the wall', ico: '🧱' }, { txt: 'He is a surgeon', ico: '🩺' }] },
            { q: 'What would you pull out if the lamp were dangerous?', scene: '💡⚠️🔌', ans: 'I would pull out the plug', opts: [{ txt: 'I would pull out the plug', ico: '🔌' }, { txt: 'I would pull out the clock', ico: '🕒' }, { txt: 'I would pull out the window', ico: '🪟' }] },
            { q: 'How would a tiger look without its stripes?', scene: '🐯🟦❓', ans: 'It would look naked', opts: [{ txt: 'It would look naked', ico: '🧍' }, { txt: 'It would look very tall', ico: '📏' }, { txt: 'It would fly away', ico: '🕊️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nếu hôm qua khác đi',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn viết ra 2 lựa chọn mình đã làm tuần này (ví dụ: ngủ muộn, làm bài sớm). Viết ngắn, mỗi lựa chọn một dòng.',
              '<b>Bước 2:</b> Biến mỗi lựa chọn thành 1 câu điều kiện hỗn hợp, ví dụ <i>"I would be calm now if I had chosen the early slot."</i> Một câu nói về hiện tại, một câu nói về quá khứ.',
              '<b>Bước 3:</b> Đọc to cho bạn hoặc người nhà nghe, rồi cùng kiểm tra: vế if có đúng thì (had V3 hoặc quá khứ đơn) và vế chính có would / would have V3 chưa?'
            ]
          }
        },
        {
          id: '6.4B', name: 'Bài 6.4B: Điều kiện và thỏa thuận',
          grammar: {
            formulas: ['🚫 Main clause + unless + ✅ S + V', '🤝 Main clause + as long as / provided that / on condition that + 📋 S + V'],
            tip: 'unless = if ... not, nên đừng thêm not nữa; còn as long as / provided that / on condition that = chỉ khi, và sau chúng dùng hiện tại, không dùng will!'
          },
          chunks: [
            { scene: '⏰🏆😟', full: 'We will lose the prize unless we meet the deadline', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will lose',ico:'⚡',c:'v'}, {t:'the prize unless we meet the deadline',ico:'⏰',c:'o'}], traceWord: 'deadline' },
            { scene: '📦🪑✅', full: 'You can leave the parcel underneath the table as long as it is safe', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'can leave',ico:'⚡',c:'v'}, {t:'the parcel underneath the table as long as it is safe',ico:'📦',c:'o'}], traceWord: 'parcel' },
            { scene: '🧠📜🏅', full: 'Whoever memorizes the poem first will get a medal', parts: [{t:'Whoever memorizes the poem first',ico:'👥',c:'s'}, {t:'will get',ico:'⚡',c:'v'}, {t:'a medal',ico:'🏅',c:'o'}], traceWord: 'memorizes' },
            { scene: '📚🤷👍', full: 'You can take whichever book you like provided that you return it', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'can take',ico:'⚡',c:'v'}, {t:'whichever book you like provided that you return it',ico:'📚',c:'o'}], traceWord: 'whichever' },
            { scene: '🏛️🤯🗓️', full: 'You can visit the incredible museum sometime this year on condition that you bring a friend', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'can visit',ico:'⚡',c:'v'}, {t:'the incredible museum sometime this year on condition that you bring a friend',ico:'🤯',c:'o'}], traceWord: 'incredible' },
            { scene: '💂⚔️🛢️', full: 'The soldier will hide his sword inside a barrel as long as nobody is watching', parts: [{t:'The soldier',ico:'💂',c:'s'}, {t:'will hide',ico:'⚡',c:'v'}, {t:'his sword inside a barrel as long as nobody is watching',ico:'⚔️',c:'o'}], traceWord: 'sword' },
            { scene: '📝•📋', full: 'You can use a bullet point for each idea unless the list is short', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'can use',ico:'⚡',c:'v'}, {t:'a bullet point for each idea unless the list is short',ico:'•',c:'o'}], traceWord: 'bullet' },
            { scene: '🪟💨📎', full: 'The window will bang in the wind unless you use a clip', parts: [{t:'The window',ico:'🪟',c:'s'}, {t:'will bang',ico:'💥',c:'v'}, {t:'in the wind unless you use a clip',ico:'📎',c:'o'}], traceWord: 'bang' }
          ],
          qaList: [
            { q: 'What do we put between two words in a list?', scene: '📝✏️', ans: 'We put a comma', opts: [{ txt: 'We put a comma', ico: '✏️' }, { txt: 'We put a sword', ico: '⚔️' }, { txt: 'We put a barrel', ico: '🛢️' }] },
            { q: 'Which finger can show that you like something?', scene: '👍😊', ans: 'My thumb', opts: [{ txt: 'My thumb', ico: '👍' }, { txt: 'My ear', ico: '👂' }, { txt: 'My knee', ico: '🦵' }] },
            { q: 'Can I go out tonight?', scene: '🌙🚪🙋', ans: 'Yes, as long as you finish your homework', opts: [{ txt: 'Yes, as long as you finish your homework', ico: '✅' }, { txt: 'Yes, unless you finish your homework', ico: '❌' }, { txt: 'No, provided that you are happy', ico: '🙅' }] },
            { q: 'Will the team win the game?', scene: '⚽🏆🤔', ans: 'Yes, provided that everyone plays well', opts: [{ txt: 'Yes, provided that everyone plays well', ico: '🏆' }, { txt: 'Yes, unless everyone plays well', ico: '❌' }, { txt: 'No, as long as everyone plays well', ico: '🙅' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản thỏa thuận của chúng mình',
            steps: [
              '<b>Bước 1:</b> Cùng một bạn hoặc người nhà chọn một chủ đề cần thỏa thuận (giờ chơi game, việc nhà, giờ học nhóm). Mỗi người nói điều mình muốn.',
              '<b>Bước 2:</b> Viết 3 điều kiện thành 3 gạch đầu dòng, mỗi dòng dùng một cấu trúc khác nhau: <i>"as long as"</i>, <i>"provided that"</i>, <i>"unless"</i>. Ví dụ: <i>"You can play unless you miss the deadline."</i>',
              '<b>Bước 3:</b> Đọc to bản thỏa thuận, cả hai cùng kiểm tra: sau unless có phủ định thừa không? Sau as long as có dùng hiện tại chưa? Rồi ký tên vào giấy.'
            ]
          }
        },
        {
          id: '6.4C', name: 'Bài 6.4C: Nhờ có sự giúp đỡ',
          grammar: {
            formulas: ['🙏 Without / But for + 🧮 danh từ + 🔙 would have V3', '⚠️ Otherwise + 🔜 will / would + V', '💭 What if / Supposing + 🧑 S + V'],
            tip: 'without và but for đi với danh từ (không có động từ chia), còn otherwise thì cần cả một mệnh đề mới: "Wear a scarf, otherwise you will sneeze".'
          },
          chunks: [
            { scene: '📝🧮😰', full: 'I would have failed this nasty test without my calculator', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would have failed',ico:'⏪',c:'v'}, {t:'this nasty test without my calculator',ico:'🧮',c:'o'}], traceWord: 'calculator' },
            { scene: '🧣🤧❄️', full: 'You should wear a scarf, otherwise you will sneeze all day', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'should wear',ico:'🧣',c:'v'}, {t:'a scarf, otherwise you will sneeze all day',ico:'🤧',c:'o'}], traceWord: 'sneeze' },
            { scene: '🏫🙋🚫', full: 'You would be marked absent without a note from home', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'would be marked',ico:'📋',c:'v'}, {t:'absent without a note from home',ico:'🙋',c:'o'}], traceWord: 'absent' },
            { scene: '🏃👏🥇', full: 'She would not have won such loud applause without her athletic training', parts: [{t:'She',ico:'👧',c:'s'}, {t:'would not have won',ico:'🥇',c:'v'}, {t:'such loud applause without her athletic training',ico:'👏',c:'o'}], traceWord: 'applause' },
            { scene: '🎫🚢👨‍👩‍👧', full: 'We would not be aboard now but for this ticket', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'would not be',ico:'⚡',c:'v'}, {t:'aboard now but for this ticket',ico:'🚢',c:'o'}], traceWord: 'aboard' },
            { scene: '🦘🏜️🧭', full: 'What if the aborigine guide had not helped us in the desert', parts: [{t:'What if the aborigine guide',ico:'🦘',c:'s'}, {t:'had not helped',ico:'🤝',c:'v'}, {t:'us in the desert',ico:'🏜️',c:'o'}], traceWord: 'aborigine' },
            { scene: '🌧️🌾🍚', full: 'The farm would not have an abundance of rice without abundant rain', parts: [{t:'The farm',ico:'🚜',c:'s'}, {t:'would not have',ico:'⚡',c:'v'}, {t:'an abundance of rice without abundant rain',ico:'🌾',c:'o'}], traceWord: 'abundance' },
            { scene: '👩‍🏫✉️🏫', full: 'She would not have received the acceptance letter from the academy without help from her teacher', parts: [{t:'She',ico:'👧',c:'s'}, {t:'would not have received',ico:'⏪',c:'v'}, {t:'the acceptance letter from the academy without help from her teacher',ico:'✅',c:'o'}], traceWord: 'acceptance' }
          ],
          qaList: [
            { q: 'The doctor says your heart rate is not normal. What is it?', scene: '🩺❤️⚠️', ans: 'It is abnormal', opts: [{ txt: 'It is abnormal', ico: '⚠️' }, { txt: 'It is absent', ico: '🙋' }, { txt: 'It is a calculator', ico: '🧮' }] },
            { q: 'What if I wore a winter coat on a hot beach?', scene: '🧥🏖️🤡', ans: 'That would be ridiculous', opts: [{ txt: 'That would be ridiculous', ico: '🤡' }, { txt: 'That would be a good idea', ico: '💡' }, { txt: 'That would be athletic', ico: '🏃' }] },
            { q: 'How was the show last night?', scene: '🎭🌙😮', ans: 'It was incredibly good', opts: [{ txt: 'It was incredibly good', ico: '😮' }, { txt: 'It was on the table', ico: '🪑' }, { txt: 'It was a nasty sneeze', ico: '🤧' }] },
            { q: 'What would happen if you stayed up all night?', scene: '🌙😴☕', ans: 'I would be terribly tired', opts: [{ txt: 'I would be terribly tired', ico: '😰' }, { txt: 'I would feel fresh and strong', ico: '⚡' }, { txt: 'I would be on the moon', ico: '🌙' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cảm ơn người giúp mình',
            steps: [
              '<b>Bước 1:</b> Nghĩ đến 3 người hoặc 3 vật đã giúp bạn gần đây (thầy cô, bạn bè, máy tính bỏ túi, vé xe...). Ghi tên từng cái vào một tờ giấy.',
              '<b>Bước 2:</b> Viết mỗi cái thành một câu với <i>"without"</i> hoặc <i>"but for"</i>, ví dụ <i>"I would have failed without my calculator."</i> Thêm một câu với <i>"otherwise"</i> và một câu hỏi <i>"What if...?"</i>.',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn hoặc người nhà nghe, rồi cùng kiểm tra: sau without / but for có phải danh từ không? Sau otherwise có một mệnh đề đầy đủ không?'
            ]
          }
        }
      ]
    },
    '6.5': {
      lessons: [
        {
          id: '6.5A', name: 'Bài 6.5A: Hướng dẫn sử dụng công nghệ',
          grammar: {
            formulas: ['⚠️ Should + 👤 you + 🔧 need help', '⏪ Were + 👦 I + 💼 an accountant', '⏮️ Had + 👦 I + 📚 known'],
            tip: 'Bỏ "if" rồi đảo trợ từ lên đầu: Should / Were / Had + chủ ngữ — nghĩa vẫn y như cũ!'
          },
          chunks: [
            { scene: '📖💻♿', full: 'Should you need help, this guide is accessible online', parts: [{t:'Should',ico:'⚠️',c:'v'}, {t:'you',ico:'👤',c:'s'}, {t:'need help, this guide is accessible online',ico:'📖',c:'o'}], traceWord: 'accessible' },
            { scene: '👜🔍🏪', full: 'Should you lose the accessory, ask the shop to help you', parts: [{t:'Should',ico:'⚠️',c:'v'}, {t:'you',ico:'👤',c:'s'}, {t:'lose the accessory, ask the shop to help you',ico:'👜',c:'o'}], traceWord: 'lose' },
            { scene: '🧾🔢👨‍💼', full: 'Were I an accountant, I would check the numbers twice', parts: [{t:'Were',ico:'⏪',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'an accountant, I would check the numbers twice',ico:'🧾',c:'o'}], traceWord: 'numbers' },
            { scene: '🎲🖱️😌', full: 'Had I known it was accidental, I would have stayed calm', parts: [{t:'Had',ico:'⏮️',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'known it was accidental, I would have stayed calm',ico:'🎲',c:'o'}], traceWord: 'stayed' },
            { scene: '🐶🥰🙈', full: 'Had the adorable puppy accidentally followed us, we would have kept it', parts: [{t:'Had',ico:'⏮️',c:'v'}, {t:'the adorable puppy',ico:'🥰',c:'s'}, {t:'accidentally followed us, we would have kept it',ico:'🙈',c:'o'}], traceWord: 'accidentally' },
            { scene: '🤕👨‍⚕️⏰', full: 'Should the ache continue, you must see a doctor soon', parts: [{t:'Should',ico:'⚠️',c:'v'}, {t:'the ache',ico:'🤕',c:'s'}, {t:'continue, you must see a doctor soon',ico:'👨‍⚕️',c:'o'}], traceWord: 'ache' },
            { scene: '👧🔁🤩', full: 'Had she accustomed herself to practice, she would have won more admiration', parts: [{t:'Had',ico:'⏮️',c:'v'}, {t:'she',ico:'👧',c:'s'}, {t:'accustomed herself to practice, she would have won more admiration',ico:'🤩',c:'o'}], traceWord: 'accustomed' },
            { scene: '📝🏢📩', full: 'Should you send the form, the office will send an acknowledgment', parts: [{t:'Should',ico:'⚠️',c:'v'}, {t:'you',ico:'👤',c:'s'}, {t:'send the form, the office will send an acknowledgment',ico:'📩',c:'o'}], traceWord: 'acknowledgment' }
          ],
          qaList: [
            { q: 'Should you write a letter, who is the addressee?', scene: '✉️📮👤', ans: 'The person who gets it', opts: [{ txt: 'The person who gets it', ico: '✉️' }, { txt: 'The pen that writes it', ico: '🖊️' }, { txt: 'The box on the table', ico: '📦' }] },
            { q: 'Who is someone you know a little?', scene: '🤝👤🙂', ans: 'An acquaintance', opts: [{ txt: 'An acquaintance', ico: '🤝' }, { txt: 'An actress', ico: '🎭' }, { txt: 'An ant', ico: '🐜' }] },
            { q: 'What kind of word is quickly?', scene: '🔤🏃💨', ans: 'It is an adverb', opts: [{ txt: 'It is an adverb', ico: '🔤' }, { txt: 'It is an ache', ico: '🤕' }, { txt: 'It is an ant', ico: '🐜' }] },
            { q: 'What kind of phrase is in the morning?', scene: '🌅⏰🔤', ans: 'It is an adverbial phrase', opts: [{ txt: 'It is an adverbial phrase', ico: '🔤' }, { txt: 'It is an accessory', ico: '👜' }, { txt: 'It is an accountant', ico: '🧾' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Hướng Dẫn Dùng Đồ Công Nghệ',
            steps: [
              '<b>Bước 1:</b> Chọn một thiết bị trong nhà (điện thoại, quạt, nồi cơm...) và viết 3 lời khuyên ngắn cho người mới dùng, mở đầu bằng <i>"Should you need help, ..."</i>.',
              '<b>Bước 2:</b> Viết thêm 2 câu về quá khứ với <i>"Had I known ..., I would have ..."</i> (ví dụ một lần bạn lỡ bấm nhầm).',
              '<b>Bước 3:</b> Đọc to hướng dẫn cho bạn hoặc người nhà nghe, rồi để họ thử làm theo và góp ý cho bạn.'
            ]
          }
        },
        {
          id: '6.5B', name: 'Bài 6.5B: Tình huống bất ngờ khi du lịch',
          grammar: {
            formulas: ['❓ If + 👤 you + ⚠️ should + ✈️ get lost', '❓ If + 👤 you + 🎲 happen to + 🤧 be allergic', '❓ If + 👦 I + 🌠 were to + 🗣️ say it'],
            tip: 'should / happen to / were to nghĩa là "lỡ như" — chuyện hiếm xảy ra, nên mệnh đề chính cứ yên tâm dùng will, would hay mệnh lệnh!'
          },
          chunks: [
            { scene: '📢🏨💰', full: 'If you should see an advert for a cheap hotel, please tell me', parts: [{t:'If you',ico:'👤',c:'s'}, {t:'should see',ico:'⚠️',c:'v'}, {t:'an advert for a cheap hotel, please tell me',ico:'📢',c:'o'}], traceWord: 'advert' },
            { scene: '🤸💃😄', full: 'If you happen to join an aerobics class, you will feel great', parts: [{t:'If you',ico:'👤',c:'s'}, {t:'happen to join',ico:'🎲',c:'v'}, {t:'an aerobics class, you will feel great',ico:'🤸',c:'o'}], traceWord: 'aerobics' },
            { scene: '🐶💗🧍', full: 'If my dog should show affection to a stranger, I would be amazed', parts: [{t:'If my dog',ico:'🐶',c:'s'}, {t:'should show',ico:'⚠️',c:'v'}, {t:'affection to a stranger, I would be amazed',ico:'💗',c:'o'}], traceWord: 'amazed' },
            { scene: '🌧️🏖️➡️', full: 'If the rain should stop, we will walk to the beach afterwards', parts: [{t:'If the rain',ico:'🌧️',c:'s'}, {t:'should stop,',ico:'⚠️',c:'v'}, {t:'we will walk to the beach afterwards',ico:'🏖️',c:'o'}], traceWord: 'afterwards' },
            { scene: '🍺🚫👧', full: 'If the drink should be alcoholic, we will not give it to the children', parts: [{t:'If the drink',ico:'🍺',c:'s'}, {t:'should be',ico:'⚠️',c:'v'}, {t:'alcoholic, we will not give it to the children',ico:'🚫',c:'o'}], traceWord: 'drink' },
            { scene: '🐟🤧🍽️', full: 'If you happen to be allergic to fish, tell the waiter at once', parts: [{t:'If you',ico:'👤',c:'s'}, {t:'happen to be',ico:'🎲',c:'v'}, {t:'allergic to fish, tell the waiter at once',ico:'🤧',c:'o'}], traceWord: 'allergic' },
            { scene: '🧳🤒🚑', full: 'If a tourist should fall ill, call the ambulance at once', parts: [{t:'If a tourist',ico:'🧳',c:'s'}, {t:'should fall',ico:'⚠️',c:'v'}, {t:'ill, call the ambulance at once',ico:'🚑',c:'o'}], traceWord: 'ambulance' },
            { scene: '🔠🗣️😄', full: 'If I were to say the alphabet aloud, my friends would find it amusing', parts: [{t:'If I',ico:'👦',c:'s'}, {t:'were to say',ico:'🌠',c:'v'}, {t:'the alphabet aloud, my friends would find it amusing',ico:'🔠',c:'o'}], traceWord: 'alphabet' }
          ],
          qaList: [
            { q: 'If you were to get a weekly allowance, what would you do?', scene: '💵👦🐷', ans: 'I would save some money', opts: [{ txt: 'I would save some money', ico: '💵' }, { txt: 'I would eat the table', ico: '🪑' }, { txt: 'I would paint the sun', ico: '🌞' }] },
            { q: 'If two bags should look alike, what would you check?', scene: '👜👜👯', ans: 'I would check the name on the bag', opts: [{ txt: 'I would check the name on the bag', ico: '👜' }, { txt: 'I would check the moon', ico: '🌙' }, { txt: 'I would check the cloud', ico: '☁️' }] },
            { q: 'If you were to watch an animated film, how would it be?', scene: '🎬💬🤩', ans: 'It would be amazing', opts: [{ txt: 'It would be amazing', ico: '🤩' }, { txt: 'It would be a chair', ico: '🪑' }, { txt: 'It would be a shoe', ico: '👟' }] },
            { q: 'If a girl should be ambitious, what would she do?', scene: '👧🚀📚', ans: 'She would work hard every day', opts: [{ txt: 'She would work hard every day', ico: '🚀' }, { txt: 'She would sleep all year', ico: '😴' }, { txt: 'She would hide in the bag', ico: '🎒' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thẻ Xử Lý Tình Huống Du Lịch',
            steps: [
              '<b>Bước 1:</b> Cùng bạn viết 5 thẻ tình huống bất ngờ khi đi du lịch (lạc đường, mất vé, bị dị ứng, mưa lớn...), mỗi thẻ mở đầu bằng <i>"If you should ..."</i> hoặc <i>"If you happen to ..."</i>.',
              '<b>Bước 2:</b> Lần lượt bốc một thẻ, đọc to rồi nói cách xử lý của mình, ví dụ <i>"I would call the hotel."</i>.',
              '<b>Bước 3:</b> Bình chọn cách xử lý thông minh nhất và viết lại thành một lời khuyên du lịch cho cả nhóm.'
            ]
          }
        },
        {
          id: '6.5C', name: 'Bài 6.5C: Quyết định khó khăn',
          grammar: {
            formulas: ['🤝 even if + 🤔 chưa chắc xảy ra', '✅ even though + 📌 đã xảy ra rồi', '🔑 only if + 📋 điều kiện bắt buộc', '💭 if only + 😢 ước gì', '🎒 in case + 🛟 phòng xa'],
            tip: 'Even if là "dù cho" (có thể chưa xảy ra), even though là "mặc dù" (đã xảy ra thật), còn in case là mang theo đồ để phòng xa — đừng lẫn nhé!'
          },
          chunks: [
            { scene: '😠👂✅', full: 'He listened to the end even though he felt annoyed', parts: [{t:'He',ico:'👦',c:'s'}, {t:'listened',ico:'👂',c:'v'}, {t:'to the end even though he felt annoyed',ico:'😠',c:'o'}], traceWord: 'annoyed' },
            { scene: '🏺💰🛍️', full: 'I will buy the antique even if it costs a lot of money', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will buy',ico:'🛍️',c:'v'}, {t:'the antique even if it costs a lot of money',ico:'🏺',c:'o'}], traceWord: 'antique' },
            { scene: '💊🤕🎒', full: 'I take an aspirin in case my head starts to ache', parts: [{t:'I',ico:'👦',c:'s'}, {t:'take',ico:'🤲',c:'v'}, {t:'an aspirin in case my head starts to ache',ico:'💊',c:'o'}], traceWord: 'aspirin' },
            { scene: '➕📘⚽', full: 'He can play outside only if he finishes his arithmetic', parts: [{t:'He',ico:'👦',c:'s'}, {t:'can play',ico:'⚽',c:'v'}, {t:'outside only if he finishes his arithmetic',ico:'➕',c:'o'}], traceWord: 'arithmetic' },
            { scene: '🍽️🍚😋', full: 'If only I had more appetite, I could finish this big meal', parts: [{t:'If only I',ico:'👦',c:'s'}, {t:'had',ico:'🤲',c:'v'}, {t:'more appetite, I could finish this big meal',ico:'🍽️',c:'o'}], traceWord: 'meal' },
            { scene: '🐜☀️💪', full: 'The ant keeps working even though the sun is very hot', parts: [{t:'The ant',ico:'🐜',c:'s'}, {t:'keeps',ico:'💪',c:'v'}, {t:'working even though the sun is very hot',ico:'☀️',c:'o'}], traceWord: 'ant' },
            { scene: '🙇✍️🤷', full: 'She wrote an apology anyhow, even if it was not her fault', parts: [{t:'She',ico:'👧',c:'s'}, {t:'wrote',ico:'✍️',c:'v'}, {t:'an apology anyhow, even if it was not her fault',ico:'🙇',c:'o'}], traceWord: 'apology' },
            { scene: '👏🎭🙏', full: 'The class will applaud loudly to show appreciation, even if the show is short', parts: [{t:'The class',ico:'🧑‍🎓',c:'s'}, {t:'will applaud',ico:'👏',c:'v'}, {t:'loudly to show appreciation, even if the show is short',ico:'🙏',c:'o'}], traceWord: 'applaud' }
          ],
          qaList: [
            { q: 'What do we call a film made from drawings?', scene: '🎞️✏️🎬', ans: 'An animation', opts: [{ txt: 'An animation', ico: '🎞️' }, { txt: 'An ape', ico: '🦍' }, { txt: 'An antique', ico: '🏺' }] },
            { q: 'She waits anxiously for the test that is held annually. How often is it?', scene: '😟📅📝', ans: 'Every year', opts: [{ txt: 'Every year', ico: '📅' }, { txt: 'Every minute', ico: '⏱️' }, { txt: 'Only on Monday', ico: '🗓️' }] },
            { q: 'What do you feel when a loud noise wakes you up?', scene: '🔊😴😤', ans: 'I feel annoyance', opts: [{ txt: 'I feel annoyance', ico: '😤' }, { txt: 'I feel a table', ico: '🪑' }, { txt: 'I feel a shoe', ico: '👟' }] },
            { q: 'Which word is an antonym of big?', scene: '↔️🐘🐜', ans: 'Small is an antonym of big', opts: [{ txt: 'Small is an antonym of big', ico: '🐜' }, { txt: 'Large is an antonym of big', ico: '🐘' }, { txt: 'Huge is an antonym of big', ico: '🏔️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảng Cân Nhắc Quyết Định Khó',
            steps: [
              '<b>Bước 1:</b> Nghĩ về một quyết định khó của em (chọn câu lạc bộ, mua đồ đắt tiền...) và viết 3 câu dùng <i>"even if"</i>, <i>"even though"</i>, <i>"only if"</i>.',
              '<b>Bước 2:</b> Viết thêm một câu <i>"If only I ..."</i> nói về điều em ước và một câu với <i>"in case"</i> nói về việc em chuẩn bị phòng xa.',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn nghe quyết định của em, rồi để bạn hỏi lại và góp ý.'
            ]
          }
        }
      ]
    },
    '6.6': {
      lessons: [
        {
          id: '6.6A', name: 'Bài 6.6A: Gia đình và các mối quan hệ',
          grammar: {
            formulas: ['👦 I + 💭 wish + 👨‍👩‍👧 S + ⏪ past (were / lived)', '😢 If only + 👦 S + ⏮ had + 📘 V3', '😤 I wish + 👨 S + 🔮 would + 🛑 V'],
            tip: 'Ước điều không có ở hiện tại thì lùi một thì (were / lived), tiếc chuyện đã qua thì lùi hai thì (had + V3), còn muốn ai đó thôi làm gì thì dùng would!'
          },
          chunks: [
            { scene: '👦🔭🌟', full: 'I wish my brother were an astronomer and could show me the stars', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'💭',c:'v'}, {t:'my brother were an astronomer and could show me the stars',ico:'🔭',c:'o'}], traceWord: 'astronomer' },
            { scene: '👧🌊🏖', full: 'I wish my cousin lived on the Atlantic coast so we could visit often', parts: [{t:'I',ico:'👧',c:'s'}, {t:'wish',ico:'💭',c:'v'}, {t:'my cousin lived on the Atlantic coast so we could visit often',ico:'🌊',c:'o'}], traceWord: 'coast' },
            { scene: '👦📚🎯', full: 'I wish I had worked harder to attain my goal at school', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'💭',c:'v'}, {t:'I had worked harder to attain my goal at school',ico:'🎯',c:'o'}], traceWord: 'attain' },
            { scene: '👵🤕😢', full: 'If only my grandma did not have a backache every single morning', parts: [{t:'If only my grandma',ico:'👵',c:'s'}, {t:'did not have',ico:'🚫',c:'v'}, {t:'a backache every single morning',ico:'🤕',c:'o'}], traceWord: 'backache' },
            { scene: '👨🥓🍳', full: 'I wish my dad would stop eating bacon for breakfast every day', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'💭',c:'v'}, {t:'my dad would stop eating bacon for breakfast every day',ico:'🥓',c:'o'}], traceWord: 'bacon' },
            { scene: '🎒🌙😟', full: 'If only I had packed my backpack the night before we left', parts: [{t:'If only I',ico:'👦',c:'s'}, {t:'had packed',ico:'⏮',c:'v'}, {t:'my backpack the night before we left',ico:'🎒',c:'o'}], traceWord: 'backpack' },
            { scene: '👩🥾🌍', full: 'I wish my aunt were a backpacker so she could take me backpacking', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'💭',c:'v'}, {t:'my aunt were a backpacker so she could take me backpacking',ico:'🥾',c:'o'}], traceWord: 'backpacking' },
            { scene: '🧳✈️😢', full: 'If only our baggage had not been lost at the airport last summer', parts: [{t:'If only our baggage',ico:'🧳',c:'s'}, {t:'had not been lost',ico:'❌',c:'v'}, {t:'at the airport last summer',ico:'✈️',c:'o'}], traceWord: 'baggage' }
          ],
          qaList: [
            { q: 'What do you wish about your little cousin this weekend?', scene: '👧👶🤩', ans: 'I wish I could babysit her because she is awesome', opts: [{ txt: 'I wish I could babysit her because she is awesome', ico: '👶' }, { txt: 'My uncle eats fresh bread at the market every Sunday', ico: '🍞' }, { txt: 'The train to the airport leaves at ten o\'clock tonight', ico: '🚆' }] },
            { q: 'How did you feel when the new babysitter arrived at your house?', scene: '🧑🏠😬', ans: 'I felt awkward and I wish I had said hello first', opts: [{ txt: 'I felt awkward and I wish I had said hello first', ico: '😬' }, { txt: 'My little brother is eating bacon and eggs at the table', ico: '🥓' }, { txt: 'We walked along the beach and collected beautiful shells', ico: '🐚' }] },
            { q: 'Where do you wish your grandparents lived now?', scene: '👴👵🛣🏠', ans: 'I wish they lived on the same avenue as our house', opts: [{ txt: 'I wish they lived on the same avenue as our house', ico: '🛣' }, { txt: 'She felt tired because she worked in the garden all day', ico: '🌱' }, { txt: 'We usually have rice and fresh fruit for dinner', ico: '🍚' }] },
            { q: 'Which auxiliary verb do we use after wish for a past regret?', scene: '📘✏️🤔', ans: 'We use the auxiliary verb had followed by a past participle', opts: [{ txt: 'We use the auxiliary verb had followed by a past participle', ico: '📘' }, { txt: 'We always use the word because after every wish sentence', ico: '❌' }, { txt: 'We use the present tense after wish for the past', ico: '⏰' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bức Thư Ước Muốn Gửi Người Thân',
            steps: [
              '<b>Bước 1:</b> Chọn một người thân (anh, chị, em, ông bà...) và viết ra giấy 3 điều em ước họ khác đi, ví dụ <i>"I wish my grandma did not have a backache."</i>',
              '<b>Bước 2:</b> Viết thêm 2 câu tiếc nuối về chuyện đã qua với <i>"If only I had ..."</i>, rồi kiểm tra lại xem động từ đã lùi đúng thì chưa.',
              '<b>Bước 3:</b> Đọc to các câu cho bạn hoặc người nhà nghe, rồi cùng nhau đoán xem mỗi điều ước nói về ai và vì sao.'
            ]
          }
        },
        {
          id: '6.6B', name: 'Bài 6.6B: Sở thích và lựa chọn cá nhân',
          grammar: {
            formulas: ['👦 I + 💭 would rather + 👩 S + ⏪ past', '👦 I + ❤️ prefer + ➡️ to V + ⚖️ rather than + ➡️ V'],
            tip: 'Muốn người khác làm gì thì would rather + S + quá khứ (I would rather you told me), còn nói về mình thì prefer to V rather than V!'
          },
          chunks: [
            { scene: '👦🧑🍞', full: 'I would rather my brother worked as a baker than as a barman', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would rather',ico:'💭',c:'v'}, {t:'my brother worked as a baker than as a barman',ico:'🧑',c:'o'}], traceWord: 'baker' },
            { scene: '👦🚶🥐', full: 'I prefer to walk to the bakery rather than take the bus', parts: [{t:'I',ico:'👦',c:'s'}, {t:'prefer',ico:'❤️',c:'v'}, {t:'to walk to the bakery rather than take the bus',ico:'🥐',c:'o'}], traceWord: 'bakery' },
            { scene: '👴🧔🎩', full: 'I would rather my bald grandpa grew a beard than wear a hat', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would rather',ico:'💭',c:'v'}, {t:'my bald grandpa grew a beard than wear a hat',ico:'🧔',c:'o'}], traceWord: 'beard' },
            { scene: '👧🩹🦵', full: 'I would rather my sister put a bandage on her knee at once', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would rather',ico:'💭',c:'v'}, {t:'my sister put a bandage on her knee at once',ico:'🩹',c:'o'}], traceWord: 'bandage' },
            { scene: '👦🏖🦶', full: 'I prefer to walk on the beach with bare feet rather than wear shoes', parts: [{t:'I',ico:'👦',c:'s'}, {t:'prefer',ico:'❤️',c:'v'}, {t:'to walk on the beach with bare feet rather than wear shoes',ico:'🦶',c:'o'}], traceWord: 'bare' },
            { scene: '🦫🌳🪵', full: 'I would rather the beaver ate tree bark than damaged our wooden fence', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would rather',ico:'💭',c:'v'}, {t:'the beaver ate tree bark than damaged our wooden fence',ico:'🦫',c:'o'}], traceWord: 'beaver' },
            { scene: '👦🐶🛁', full: 'I prefer to bathe my puppy outside rather than inside the house', parts: [{t:'I',ico:'👦',c:'s'}, {t:'prefer',ico:'❤️',c:'v'}, {t:'to bathe my puppy outside rather than inside the house',ico:'🛁',c:'o'}], traceWord: 'bathe' },
            { scene: '👦🛏🐗', full: 'I would rather you told me a story about a beast at my bedside', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would rather',ico:'💭',c:'v'}, {t:'you told me a story about a beast at my bedside',ico:'🛏',c:'o'}], traceWord: 'bedside' }
          ],
          qaList: [
            { q: 'Where would you rather your friends played on a rainy day?', scene: '🌧👦👧🏚', ans: 'I would rather they played in the basement than in the garden', opts: [{ txt: 'I would rather they played in the basement than in the garden', ico: '🏚' }, { txt: 'My brother is a baker who wakes up very early', ico: '🧑' }, { txt: 'We prefer to take the bus rather than walk to school', ico: '🚌' }] },
            { q: 'How would you rather your sister sang at the school concert?', scene: '👧🎤✨', ans: 'I would rather she sang beautifully than sang loudly', opts: [{ txt: 'I would rather she sang beautifully than sang loudly', ico: '✨' }, { txt: 'My grandfather lives near a small river in the countryside', ico: '🏞' }, { txt: 'She prefers to sit by the window rather than the door', ico: '🪟' }] },
            { q: 'Who would you rather speak on behalf of the class at the party?', scene: '🏫🎉🤝', ans: 'I would rather our teacher spoke on behalf of the whole class', opts: [{ txt: 'I would rather our teacher spoke on behalf of the whole class', ico: '🤝' }, { txt: 'The bakery sells cakes and bread every morning', ico: '🍰' }, { txt: 'He prefers to read books rather than watch television', ico: '📚' }] },
            { q: 'Who would you rather visit on your birthday?', scene: '🎂👵💖', ans: 'I would rather visit my beloved grandma than go to a party', opts: [{ txt: 'I would rather visit my beloved grandma than go to a party', ico: '💖' }, { txt: 'The beaver built a small house near the river', ico: '🦫' }, { txt: 'We usually play football in the park after school', ico: '⚽' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cuộc Thi "Bạn Chọn Gì?"',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn viết 5 cặp lựa chọn quen thuộc (đi bộ hay đi xe buýt, ở nhà hay đi chơi...) rồi viết câu bằng <i>"I prefer to ... rather than ..."</i>.',
              '<b>Bước 2:</b> Đổi giấy cho bạn và nói điều mình muốn người kia làm, ví dụ <i>"I would rather you told me the truth."</i> Nhớ chia động từ ở quá khứ.',
              '<b>Bước 3:</b> Mỗi bạn thuyết trình 1 phút về lựa chọn thú vị nhất, các bạn khác bình chọn bằng cách giơ tay và nói lý do.'
            ]
          }
        },
        {
          id: '6.6C', name: 'Bài 6.6C: Thay đổi thói quen xấu',
          grammar: {
            formulas: ['⏰ It is + 🔔 (high / about) time + 👦 S + ⏪ past', '🎭 S + 🗣 V + 🤔 as if / as though + ⏪ past (were)'],
            tip: 'It is time + S + quá khứ nghĩa là "đã đến lúc rồi, làm ngay thôi", còn as if / as though + were nói về điều không có thật!'
          },
          chunks: [
            { scene: '😎📝🗣', full: 'It is high time you stopped boasting about your grades to everyone', parts: [{t:'It',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'high time you stopped boasting about your grades to everyone',ico:'😎',c:'o'}], traceWord: 'boasting' },
            { scene: '☕😖🌙', full: 'It is about time I stopped drinking bitter coffee late at night', parts: [{t:'It',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'about time I stopped drinking bitter coffee late at night',ico:'☕',c:'o'}], traceWord: 'bitter' },
            { scene: '🍓🥛🥤', full: 'It is about time we blended fruit and milk for a healthy breakfast', parts: [{t:'It',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'about time we blended fruit and milk for a healthy breakfast',ico:'🥤',c:'o'}], traceWord: 'blended' },
            { scene: '👦🥱🌍', full: 'He sighs as if boredom were the worst thing in the whole world', parts: [{t:'He',ico:'👦',c:'s'}, {t:'sighs',ico:'😮‍💨',c:'v'}, {t:'as if boredom were the worst thing in the whole world',ico:'🥱',c:'o'}], traceWord: 'boredom' },
            { scene: '👦⛪🙏', full: 'He talks as if he were a bishop giving a blessing to the whole class', parts: [{t:'He',ico:'👦',c:'s'}, {t:'talks',ico:'🗣',c:'v'}, {t:'as if he were a bishop giving a blessing to the whole class',ico:'🙏',c:'o'}], traceWord: 'blessing' },
            { scene: '💻🎮🌙', full: 'It is time you wrote a blog post instead of playing games all night', parts: [{t:'It',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'time you wrote a blog post instead of playing games all night',ico:'💻',c:'o'}], traceWord: 'blog' },
            { scene: '👴🎒↪️', full: 'My grandpa walks as though his back were bent under a heavy bag', parts: [{t:'My grandpa',ico:'👴',c:'s'}, {t:'walks',ico:'🚶',c:'v'}, {t:'as though his back were bent under a heavy bag',ico:'↪️',c:'o'}], traceWord: 'bent' },
            { scene: '👨‍👩‍👧📅✈️', full: 'It is high time we made the booking for our trip instead of waiting', parts: [{t:'It',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'high time we made the booking for our trip instead of waiting',ico:'📅',c:'o'}], traceWord: 'booking' }
          ],
          qaList: [
            { q: 'What is it high time for a good blogger to do?', scene: '📝💻💪', ans: 'It is high time she wrote boldly and honestly about her life', opts: [{ txt: 'It is high time she wrote boldly and honestly about her life', ico: '💪' }, { txt: 'My grandpa walks with a stick because his knee hurts a lot', ico: '🦯' }, { txt: 'We should visit the museum before it closes this afternoon', ico: '🏛' }] },
            { q: 'What does Mai say about the biography she is reading?', scene: '👧📖🤩', ans: 'She talks as if the biography were the best book ever written', opts: [{ txt: 'She talks as if the biography were the best book ever written', ico: '📖' }, { txt: 'The bank opens at nine o\'clock every morning from Monday', ico: '🏦' }, { txt: 'Please close the window because it is cold outside tonight', ico: '🪟' }] },
            { q: 'Why does your cousin study late at night?', scene: '👦🧪🌙', ans: 'He studies as though his biochemistry exam were tomorrow', opts: [{ txt: 'He studies as though his biochemistry exam were tomorrow', ico: '🧪' }, { txt: 'The restaurant on the corner serves hot soup and bread', ico: '🍲' }, { txt: 'Our teacher gave us a long list of new words', ico: '📝' }] },
            { q: 'What is it time for shy Tom to do?', scene: '👦😊💬', ans: 'It is high time he stopped hiding his blush and became bold', opts: [{ txt: 'It is high time he stopped hiding his blush and became bold', ico: '😊' }, { txt: 'Tom wants to ride his bike to the library on Saturday', ico: '🚲' }, { txt: 'The weather is sunny and warm across the whole country', ico: '☀️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Kế Hoạch Bỏ Thói Quen Xấu',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn viết ra 3 thói quen xấu của mình (thức khuya, chơi game quá lâu...) và nói <i>"It is high time I stopped ..."</i> cho từng thói quen.',
              '<b>Bước 2:</b> Đóng vai một người hay làm màu: nói 2 câu với <i>"as if / as though"</i>, ví dụ <i>"He talks as if he were a king."</i> để bạn bè đoán đó là ai.',
              '<b>Bước 3:</b> Cùng bạn chọn 1 thói quen tốt để bắt đầu từ ngày mai, viết thành cam kết ngắn với <i>"It is time we ..."</i> và dán lên bàn học.'
            ]
          }
        }
      ]
    },
    '6.7': {
      lessons: [
        {
          id: '6.7A', name: 'Bài 6.7A: Bí ẩn trong tin tức',
          grammar: {
            formulas: ['📰 The news + ⚡ must have + 🔍 V3 (chắc chắn đã)', '🤔 He + ⚡ might / could have + 🔍 V3 (có thể đã)', '🚫 She + ⚡ can\'t have + 🔍 V3 (chắc chắn không)'],
            tip: 'Chắc chắn đã xảy ra: must have V3 • chắc chắn KHÔNG: can\'t have V3 • chỉ đoán: might / could have V3 — luôn có "have" + V3!'
          },
          chunks: [
            { scene: '⚽🧱💨', full: 'The ball must have bounced off the brick wall', parts: [{t:'The ball',ico:'⚽',c:'s'}, {t:'must have bounced',ico:'🔍',c:'v'}, {t:'off the brick wall',ico:'🧱',c:'o'}], traceWord: 'bounced' },
            { scene: '🥊🙇🏆', full: 'He might have taken a bow after the boxing match', parts: [{t:'He',ico:'👦',c:'s'}, {t:'might have taken',ico:'🤔',c:'v'}, {t:'a bow after the boxing match',ico:'🥊',c:'o'}], traceWord: 'boxing' },
            { scene: '📿😢🏫', full: 'She can\'t have lost her bracelet at school', parts: [{t:'She',ico:'👧',c:'s'}, {t:'can\'t have lost',ico:'🚫',c:'v'}, {t:'her bracelet at school',ico:'📿',c:'o'}], traceWord: 'bracelet' },
            { scene: '🧠💬👥', full: 'We must have had a good brainstorming session yesterday', parts: [{t:'We',ico:'👥',c:'s'}, {t:'must have had',ico:'🔍',c:'v'}, {t:'a good brainstorming session yesterday',ico:'🧠',c:'o'}], traceWord: 'brainstorming' },
            { scene: '🆕🎺🎶', full: 'The brand-new brass band must have practiced for many weeks', parts: [{t:'The brand-new brass band',ico:'🎺',c:'s'}, {t:'must have practiced',ico:'🔍',c:'v'}, {t:'for many weeks',ico:'📅',c:'o'}], traceWord: 'brass' },
            { scene: '🦸🔥🐕', full: 'The firefighter must have acted bravely to save the dog', parts: [{t:'The firefighter',ico:'🦸',c:'s'}, {t:'must have acted',ico:'🔍',c:'v'}, {t:'bravely to save the dog',ico:'🐕',c:'o'}], traceWord: 'bravely' },
            { scene: '🤝💡🏆', full: 'The brotherhood of the team could have led to a big breakthrough', parts: [{t:'The brotherhood of the team',ico:'🤝',c:'s'}, {t:'could have led',ico:'🤔',c:'v'}, {t:'to a big breakthrough',ico:'💡',c:'o'}], traceWord: 'breakthrough' },
            { scene: '🥦🍽😮', full: 'Someone must have eaten all the broccoli before dinner', parts: [{t:'Someone',ico:'🧑',c:'s'}, {t:'must have eaten',ico:'🔍',c:'v'}, {t:'all the broccoli before dinner',ico:'🥦',c:'o'}], traceWord: 'broccoli' }
          ],
          qaList: [
            { q: 'Why was the runner breathless after the race?', scene: '🏃🥵', ans: 'He must have run too fast', opts: [{ txt: 'He must have run too fast', ico: '🏃' }, { txt: 'He can\'t have left home', ico: '🏠' }, { txt: 'He could have slept all day', ico: '😴' }] },
            { q: 'Why are there many new cows on the farm?', scene: '🐄🌾', ans: 'They must have started breeding them', opts: [{ txt: 'They must have started breeding them', ico: '🐄' }, { txt: 'They can\'t have gone to school', ico: '🏫' }, { txt: 'They might have flown home', ico: '✈' }] },
            { q: 'Why was the room so bright this morning?', scene: '🌞🏠', ans: 'The sun must have shone brightly', opts: [{ txt: 'The sun must have shone brightly', ico: '🌞' }, { txt: 'It can\'t have been a big fish', ico: '🐟' }, { txt: 'The rain must have fallen all night', ico: '🌧' }] },
            { q: 'What did the girl win at the sports day?', scene: '🥉🏃', ans: 'She might have won the bronze', opts: [{ txt: 'She might have won the bronze', ico: '🥉' }, { txt: 'She can\'t have eaten the race', ico: '🍽' }, { txt: 'She must have painted the sun', ico: '🎨' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám Tử Tin Tức',
            steps: [
              '<b>Bước 1:</b> Chọn một bức ảnh hoặc tiêu đề tin tức bí ẩn (ví dụ một căn phòng bị lộn xộn). Cùng bạn nhìn kỹ và ghi 3 manh mối.',
              '<b>Bước 2:</b> Dùng các manh mối để đoán chuyện đã xảy ra, ví dụ <i>"Someone must have left in a hurry."</i> hoặc <i>"It can\'t have been the dog."</i> Viết 4 câu đoán vào vở.',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn nghe, rồi hai bạn bình chọn câu đoán hợp lý nhất bằng <i>"must have"</i>, <i>"might have"</i> hoặc <i>"can\'t have"</i>.'
            ]
          }
        },
        {
          id: '6.7B', name: 'Bài 6.7B: Sai lầm và bài học',
          grammar: {
            formulas: ['🙋 You + ⚡ should have + 🔍 V3 (lẽ ra nên)', '🙅 He + ⚡ shouldn\'t have + 🔍 V3 (lẽ ra không nên)', '📋 I + ⚡ was supposed to + 🔍 V (đáng lẽ phải)'],
            tip: 'Đã lỡ rồi mới tiếc: should have V3 = lẽ ra nên làm • could have V3 = đã có cơ hội mà không làm • was supposed to + V gốc!'
          },
          chunks: [
            { scene: '👋📞⚽', full: 'You should have told your buddy about the problem', parts: [{t:'You',ico:'🙋',c:'s'}, {t:'should have told',ico:'🔍',c:'v'}, {t:'your buddy about the problem',ico:'👋',c:'o'}], traceWord: 'buddy' },
            { scene: '👷🏠🌧', full: 'The builder should have checked the roof before the rain', parts: [{t:'The builder',ico:'👷',c:'s'}, {t:'should have checked',ico:'🔍',c:'v'}, {t:'the roof before the rain',ico:'🏠',c:'o'}], traceWord: 'builder' },
            { scene: '🧑‍🌾🐂🐄', full: 'The farmer ought to have kept the bull away from the calf', parts: [{t:'The farmer',ico:'🧑‍🌾',c:'s'}, {t:'ought to have kept',ico:'🔍',c:'v'}, {t:'the bull away from the calf',ico:'🐂',c:'o'}], traceWord: 'bull' },
            { scene: '📰📖🏫', full: 'I was supposed to read the school bulletin this morning', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was supposed to read',ico:'📋',c:'v'}, {t:'the school bulletin this morning',ico:'📰',c:'o'}], traceWord: 'bulletin' },
            { scene: '💥🪑🏺', full: 'You should not have bumped the table and bust the vase', parts: [{t:'You',ico:'🙋',c:'s'}, {t:'should not have bumped',ico:'🙅',c:'v'}, {t:'the table and bust the vase',ico:'💥',c:'o'}], traceWord: 'bust' },
            { scene: '🦹🐦🏠', full: 'The burglar could have taken the cage but he left it', parts: [{t:'The burglar',ico:'🦹',c:'s'}, {t:'could have taken',ico:'🤔',c:'v'}, {t:'the cage but he left it',ico:'🐦',c:'o'}], traceWord: 'burglar' },
            { scene: '🥩👨‍🍳⏰', full: 'The butcher should have sold the meat before it went bad', parts: [{t:'The butcher',ico:'🥩',c:'s'}, {t:'should have sold',ico:'🔍',c:'v'}, {t:'the meat before it went bad',ico:'🥩',c:'o'}], traceWord: 'butcher' },
            { scene: '🛳🛏🌊', full: 'We should have booked a cabin on the ship much earlier', parts: [{t:'We',ico:'👥',c:'s'}, {t:'should have booked',ico:'🔍',c:'v'}, {t:'a cabin on the ship much earlier',ico:'🛳',c:'o'}], traceWord: 'cabin' }
          ],
          qaList: [
            { q: 'What should people do about a burning house?', scene: '🔥🏠', ans: 'They should call for help at once', opts: [{ txt: 'They should call for help at once', ico: '📞' }, { txt: 'They should have eaten more cake', ico: '🍰' }, { txt: 'They ought to sing a song', ico: '🎵' }] },
            { q: 'What was Mum supposed to buy at the market?', scene: '🧺🛒', ans: 'She was supposed to buy cabbage', opts: [{ txt: 'She was supposed to buy cabbage', ico: '🥬' }, { txt: 'She was supposed to buy a car', ico: '🚗' }, { txt: 'She was supposed to buy the moon', ico: '🌙' }] },
            { q: 'What should the caller have done?', scene: '📞😟', ans: 'The caller should have left a message', opts: [{ txt: 'The caller should have left a message', ico: '📞' }, { txt: 'The caller should have eaten the phone', ico: '🍽' }, { txt: 'The caller ought to have flown away', ico: '🕊' }] },
            { q: 'Where was Dad supposed to go on Monday?', scene: '👨🏢', ans: 'He was supposed to go to the bureau', opts: [{ txt: 'He was supposed to go to the bureau', ico: '🏢' }, { txt: 'He was supposed to go to the sea bed', ico: '🌊' }, { txt: 'He was supposed to go to sleep in a tree', ico: '🌳' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bài Học Từ Sai Lầm',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn nghĩ về một sai lầm nhỏ trong tuần qua (quên bài, đến muộn...) và viết 2 câu bằng tiếng Anh, ví dụ <i>"I should have started earlier."</i>',
              '<b>Bước 2:</b> Đổi vở cho bạn, bạn viết thêm một lời khuyên với <i>"could have"</i> hoặc <i>"ought to have"</i> cho cơ hội đã bỏ lỡ.',
              '<b>Bước 3:</b> Mỗi bạn đọc to một bài học rút ra trong 1 phút, rồi cả hai chọn bài học hay nhất để dán lên bàn học.'
            ]
          }
        },
        {
          id: '6.7C', name: 'Bài 6.7C: Đoán việc người khác đang làm',
          grammar: {
            formulas: ['👀 She + ⚡ must be + 🏃 V-ing (chắc đang)', '🤔 He + ⚡ might have been + 🏃 V-ing (có thể lúc đó đang)', '🚫 They + ⚡ can\'t have been + 🏃 V-ing (chắc chắn lúc đó không)'],
            tip: 'Đoán việc đang diễn ra: must be + V-ing • đoán việc đang làm trong quá khứ: might / can\'t have been + V-ing — nhớ "been" và đuôi -ing!'
          },
          chunks: [
            { scene: '😌⛈🧘', full: 'They must be showing great calmness during the storm', parts: [{t:'They',ico:'👥',c:'s'}, {t:'must be showing',ico:'👀',c:'v'}, {t:'great calmness during the storm',ico:'😌',c:'o'}], traceWord: 'calmness' },
            { scene: '🐪🚣🌅', full: 'The camel must be walking along the canal', parts: [{t:'The camel',ico:'🐪',c:'s'}, {t:'must be walking',ico:'👀',c:'v'}, {t:'along the canal',ico:'🚣',c:'o'}], traceWord: 'camel' },
            { scene: '⛺🕯🌙', full: 'They must be sitting around a candle at the campsite', parts: [{t:'They',ico:'👥',c:'s'}, {t:'must be sitting',ico:'👀',c:'v'}, {t:'around a candle at the campsite',ico:'🕯',c:'o'}], traceWord: 'campsite' },
            { scene: '🥫🍽👨‍🍳', full: 'The cook must be opening canned fish in the canteen', parts: [{t:'The cook',ico:'👨‍🍳',c:'s'}, {t:'must be opening',ico:'👀',c:'v'}, {t:'canned fish in the canteen',ico:'🥫',c:'o'}], traceWord: 'canned' },
            { scene: '🚃😴🧳', full: 'The passengers might have been sleeping in the carriage', parts: [{t:'The passengers',ico:'🧳',c:'s'}, {t:'might have been sleeping',ico:'🤔',c:'v'}, {t:'in the carriage',ico:'🚃',c:'o'}], traceWord: 'carriage' },
            { scene: '🚗🌧🙈', full: 'He can\'t have been driving carelessly on the wet road', parts: [{t:'He',ico:'👦',c:'s'}, {t:'can\'t have been driving',ico:'🚫',c:'v'}, {t:'carelessly on the wet road',ico:'🙈',c:'o'}], traceWord: 'carelessly' },
            { scene: '🏧💵👨', full: 'My dad must be using the cashpoint outside the bank', parts: [{t:'My dad',ico:'👨',c:'s'}, {t:'must be using',ico:'👀',c:'v'}, {t:'the cashpoint outside the bank',ico:'🏧',c:'o'}], traceWord: 'cashpoint' },
            { scene: '👕😎🌴', full: 'She must be wearing casual clothes for the picnic', parts: [{t:'She',ico:'👧',c:'s'}, {t:'must be wearing',ico:'👀',c:'v'}, {t:'casual clothes for the picnic',ico:'👕',c:'o'}], traceWord: 'casual' }
          ],
          qaList: [
            { q: 'What is the nurse giving to the sick boy?', scene: '👩‍⚕️💊🤒', ans: 'She must be giving him a capsule', opts: [{ txt: 'She must be giving him a capsule', ico: '💊' }, { txt: 'He must be carrying a carton', ico: '🥛' }, { txt: 'They can\'t have been flying', ico: '✈' }] },
            { q: 'What is a careless worker showing?', scene: '🙈⚠', ans: 'He must be showing carelessness', opts: [{ txt: 'He must be showing carelessness', ico: '⚠' }, { txt: 'He must be drinking the road', ico: '🛣' }, { txt: 'He might have been a camel', ico: '🐪' }] },
            { q: 'What must the teacher be doing with the books?', scene: '👩‍🏫📚🗂', ans: 'She must be categorizing them', opts: [{ txt: 'She must be categorizing them', ico: '🗂' }, { txt: 'She can\'t have been eating them', ico: '🍽' }, { txt: 'She might have been flying them', ico: '🪁' }] },
            { q: 'Where might the children have been playing?', scene: '🧒⛺🌳', ans: 'They might have been playing in the forest', opts: [{ txt: 'They might have been playing in the forest', ico: '🌳' }, { txt: 'They can\'t have been swimming in the sky', ico: '☁' }, { txt: 'They must be sleeping in a cup', ico: '☕' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đoán Xem Họ Đang Làm Gì',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn chọn một người quen (bố mẹ, thầy cô, hàng xóm) và nghĩ xem lúc này họ đang làm gì. Bạn kia đoán bằng <i>"She must be cooking."</i> hoặc <i>"He might be working."</i>',
              '<b>Bước 2:</b> Nghĩ về hôm qua lúc 8 giờ tối, đoán họ đã làm gì với <i>"might have been + V-ing"</i> hoặc <i>"can\'t have been + V-ing"</i>. Viết 4 câu vào vở.',
              '<b>Bước 3:</b> Gọi điện hoặc nhắn tin hỏi người đó để kiểm tra, rồi thuyết trình mini 1 phút: bạn đoán đúng được mấy câu?'
            ]
          }
        }
      ]
    },
    '6.8': {
      lessons: [
        {
        id: '6.8A', name: 'Bài 6.8A: Môi trường đang thay đổi',
        grammar: { formulas: ['🌳 The forest + ⚡ is being + 🛡 protected', '🏙 The town + ⚡ has been + 🧹 cleaned', '🌊 The river + ⚡ had been + 🗑 polluted'], tip: 'Bị động = be + V3: đang diễn ra thì thêm being, đã xong thì thêm been (has/have/had been + V3)!' },
        chunks: [
          { scene: '🕳🔦🧪', full: 'The old cave is being explored by a cautious team of scientists', parts: [{t:'The old cave',ico:'🕳',c:'s'}, {t:'is being explored',ico:'🔍',c:'v'}, {t:'by a cautious team of scientists',ico:'🧐',c:'o'}], traceWord: 'cautious' },
          { scene: '⚠🌳💧', full: 'Great caution has been taken to keep the water clean', parts: [{t:'Great caution',ico:'⚠',c:'s'}, {t:'has been taken',ico:'✅',c:'v'}, {t:'to keep the water clean',ico:'💧',c:'o'}], traceWord: 'caution' },
          { scene: '🏘🌪🌀', full: 'The town had been left in chaos after the storm', parts: [{t:'The town',ico:'🏘',c:'s'}, {t:'had been left',ico:'⏳',c:'v'}, {t:'in chaos after the storm',ico:'🌀',c:'o'}], traceWord: 'chaos' },
          { scene: '⚗📄💿', full: 'The old reports have been saved on a CD-ROM by the chemist', parts: [{t:'The old reports',ico:'📄',c:'s'}, {t:'have been saved',ico:'💾',c:'v'}, {t:'on a CD-ROM by the chemist',ico:'💿',c:'o'}], traceWord: 'chemist' },
          { scene: '🌟🌳🤝', full: 'A famous celebrity is being asked to help save the forest', parts: [{t:'A famous celebrity',ico:'🌟',c:'s'}, {t:'is being asked',ico:'🙋',c:'v'}, {t:'to help save the forest',ico:'🌳',c:'o'}], traceWord: 'celebrity' },
          { scene: '🌊🛍😵', full: 'The river is being choked by plastic bags in the town', parts: [{t:'The river',ico:'🌊',c:'s'}, {t:'is being choked',ico:'😵',c:'v'}, {t:'by plastic bags in the town',ico:'🛍',c:'o'}], traceWord: 'choked' },
          { scene: '🎶😄🏖', full: 'The choir had been asked to sing at a cheerful event', parts: [{t:'The choir',ico:'🎶',c:'s'}, {t:'had been asked',ico:'🙋',c:'v'}, {t:'to sing at a cheerful event',ico:'😄',c:'o'}], traceWord: 'choir' },
          { scene: '🧗🌍🔧', full: 'The challenging climate problem has not been solved yet', parts: [{t:'The challenging climate problem',ico:'🧗',c:'s'}, {t:'has not been solved',ico:'❌',c:'v'}, {t:'yet',ico:'⏳',c:'o'}], traceWord: 'challenging' }
        ],
        qaList: [
          { q: 'Who is the forest being cherished by?', scene: '🌳💝👧', ans: 'It is being cherished by every child in the town', opts: [{ txt: 'It is being cherished by every child in the town', ico: '💝' }, { txt: 'It was written by a chemist', ico: '⚗' }, { txt: 'Two bags were put in the cave', ico: '🕳' }] },
          { q: 'Where have the paper bags been placed?', scene: '🛒📄🛍', ans: 'They have been placed near the checkout', opts: [{ txt: 'The weather was very cold', ico: '🥶' }, { txt: 'They have been placed near the checkout', ico: '🛒' }, { txt: 'He is said to be a famous celebrity', ico: '🌟' }] },
          { q: 'Do scientists know the answer with certainty?', scene: '🔬✅❓', ans: 'Yes, it has been proved with certainty', opts: [{ txt: 'No, it is being sung by the choir', ico: '🎶' }, { txt: 'Yes, the town is very small', ico: '🏘' }, { txt: 'Yes, it has been proved with certainty', ico: '✅' }] },
          { q: 'What was pulled by two horses long ago?', scene: '🐎🐎🏛', ans: 'A chariot was pulled by two horses', opts: [{ txt: 'A chariot was pulled by two horses', ico: '🏛' }, { txt: 'A plastic bag was pulled by a bus', ico: '🛍' }, { txt: 'The river was pulled by a boat', ico: '🌊' }] }
        ],
        parentGame: { title: '🎲 Hoạt động Đời thực (12 phút): Bản tin môi trường quanh em', steps: [
          '<b>Bước 1:</b> Cùng bạn đi một vòng quanh nhà hoặc trường, chọn 3 thứ đang được thay đổi hoặc bảo vệ (cây xanh, thùng rác, dòng nước...). Ghi nhanh mỗi thứ vào giấy.',
          '<b>Bước 2:</b> Viết mỗi thứ thành một câu bị động, ví dụ <i>"The garden is being cleaned by the students."</i> hoặc <i>"The bins have been moved."</i> Chú ý chọn being hay been cho đúng.',
          '<b>Bước 3:</b> Thuyết trình mini 1 phút như phóng viên: đọc 3 câu cho bạn nghe, bạn đoán xem việc đang diễn ra hay đã xong.'
        ] }
        },
        {
        id: '6.8B', name: 'Bài 6.8B: Phát hiện khoa học được đưa tin',
        grammar: { formulas: ['📰 It + ⚡ is thought + 💬 that + 🌠 a comet came', '👨 He + ⚡ is said to have + 📖 written', '👧 She + ⚡ is said to be + 🏃 walking'], tip: 'To have + V3 nói về chuyện đã xảy ra trước, to be + V-ing nói về chuyện đang diễn ra: tin tức hay dùng is said, is thought, is believed!' },
        chunks: [
          { scene: '🌠🌍⏳', full: 'It is thought that a comet passed near the Earth long ago', parts: [{t:'It',ico:'📰',c:'s'}, {t:'is thought',ico:'💭',c:'v'}, {t:'that a comet passed near the Earth long ago',ico:'🌠',c:'o'}], traceWord: 'comet' },
          { scene: '📰✍🔬', full: 'A famous columnist is said to have written about the discovery', parts: [{t:'A famous columnist',ico:'📰',c:'s'}, {t:'is said to have written',ico:'✍',c:'v'}, {t:'about the discovery',ico:'🔬',c:'o'}], traceWord: 'columnist' },
          { scene: '🕯⛰🔍', full: 'The old coffin is believed to have been found near the cliff', parts: [{t:'The old coffin',ico:'🕯',c:'s'}, {t:'is believed to have been found',ico:'🔍',c:'v'}, {t:'near the cliff',ico:'⛰',c:'o'}], traceWord: 'coffin' },
          { scene: '🧗🏖🚶', full: 'The climber is said to be walking on a coastal path', parts: [{t:'The climber',ico:'🧗',c:'s'}, {t:'is said to be walking',ico:'🚶',c:'v'}, {t:'on a coastal path',ico:'🏖',c:'o'}], traceWord: 'coastal' },
          { scene: '🐟🌊❄', full: 'It is believed that cod have lived in these cold seas for years', parts: [{t:'It',ico:'📰',c:'s'}, {t:'is believed',ico:'💭',c:'v'}, {t:'that cod have lived in these cold seas for years',ico:'🐟',c:'o'}], traceWord: 'cod' },
          { scene: '🎤😆🎭', full: 'The comedian is said to have ended the show with a chuckle', parts: [{t:'The comedian',ico:'🎤',c:'s'}, {t:'is said to have ended',ico:'🏁',c:'v'}, {t:'the show with a chuckle',ico:'😆',c:'o'}], traceWord: 'chuckle' },
          { scene: '🎪🏘📅', full: 'A circus is reported to be visiting the town next week', parts: [{t:'A circus',ico:'🎪',c:'s'}, {t:'is reported to be visiting',ico:'🚌',c:'v'}, {t:'the town next week',ico:'🏘',c:'o'}], traceWord: 'circus' },
          { scene: '⭕🪨🚀', full: 'A circular stone is thought to have fallen from space', parts: [{t:'A circular stone',ico:'⭕',c:'s'}, {t:'is thought to have fallen',ico:'⬇',c:'v'}, {t:'from space',ico:'🚀',c:'o'}], traceWord: 'circular' }
        ],
        qaList: [
          { q: 'Which church is thought to be very old?', scene: '⛪🏛⏳', ans: 'A Christian church is thought to be very old', opts: [{ txt: 'A Christian church is thought to be very old', ico: '⛪' }, { txt: 'A comet is said to be playing', ico: '🌠' }, { txt: 'The cod is reported to be funny', ico: '🐟' }] },
          { q: 'How are the events written in the report?', scene: '📅📋📰', ans: 'They are written in chronological order', opts: [{ txt: 'It is thought to be very cold', ico: '🥶' }, { txt: 'They are written in chronological order', ico: '📅' }, { txt: 'They are said to be a comedian', ico: '🎤' }] },
          { q: 'What is the man said to have received last year?', scene: '👨🛂📄', ans: 'He is said to have received citizenship', opts: [{ txt: 'He is believed to be a circus', ico: '🎪' }, { txt: 'It is reported to be a cliff', ico: '⛰' }, { txt: 'He is said to have received citizenship', ico: '🛂' }] },
          { q: 'Who is said to have worn a white collar on the trip?', scene: '👔🧳🤝', ans: 'His companion is said to have worn a white collar', opts: [{ txt: 'His companion is said to have worn a white collar', ico: '👔' }, { txt: 'A comet is said to have worn a trip', ico: '🌠' }, { txt: 'The coffin is thought to be happy', ico: '🕯' }] }
        ],
        parentGame: { title: '🎲 Hoạt động Đời thực (12 phút): Tin nóng của lớp', steps: [
          '<b>Bước 1:</b> Mỗi bạn nghĩ ra một tin khoa học vui (có thể bịa) về động vật, vũ trụ hoặc một nhà khoa học nổi tiếng và ghi ra giấy.',
          '<b>Bước 2:</b> Viết lại tin đó thành 2 câu tường thuật bị động, ví dụ <i>"It is thought that a comet passed near the Earth."</i> và <i>"The scientist is said to have found a new star."</i>',
          '<b>Bước 3:</b> Đóng vai người đọc bản tin trong 1 phút. Bạn nghe chỉ ra câu nào dùng to have + V3, câu nào dùng to be + V-ing.'
        ] }
        },
        {
        id: '6.8C', name: 'Bài 6.8C: Trách nhiệm bảo vệ thiên nhiên',
        grammar: { formulas: ['🌳 The forest + ⚡ must be + 🛡 protected', '🌊 The river + ⚡ should have been + 🧹 cleaned', '🌍 The Earth + ⚡ might have been + 💔 damaged'], tip: 'Modal + be + V3 cho việc cần làm bây giờ, modal + have been + V3 cho việc đã xảy ra: should have been = lẽ ra đã phải được làm!' },
        chunks: [
          { scene: '🦁🌳🌍', full: 'More courage should have been shown by leaders to protect nature', parts: [{t:'More courage',ico:'🦁',c:'s'}, {t:'should have been shown',ico:'👀',c:'v'}, {t:'by leaders to protect nature',ico:'🌳',c:'o'}], traceWord: 'courage' },
          { scene: '🌊🧹👥', full: 'The oceans must be cleaned continually by everyone', parts: [{t:'The oceans',ico:'🌊',c:'s'}, {t:'must be cleaned',ico:'🧹',c:'v'}, {t:'continually by everyone',ico:'🔁',c:'o'}], traceWord: 'continually' },
          { scene: '🧵🛍🌱', full: 'Plastic bags must be replaced by cotton ones', parts: [{t:'Plastic bags',ico:'🛍',c:'s'}, {t:'must be replaced',ico:'♻',c:'v'}, {t:'by cotton ones',ico:'🧵',c:'o'}], traceWord: 'cotton' },
          { scene: '📜🤯📝', full: 'The rules might have been written in a complicated way', parts: [{t:'The rules',ico:'📜',c:'s'}, {t:'might have been written',ico:'📝',c:'v'}, {t:'in a complicated way',ico:'🤯',c:'o'}], traceWord: 'complicated' },
          { scene: '🌊🏭⏳', full: 'The river might have been polluted continuously for many years', parts: [{t:'The river',ico:'🌊',c:'s'}, {t:'might have been polluted',ico:'🏭',c:'v'}, {t:'continuously for many years',ico:'🔄',c:'o'}], traceWord: 'continuously' },
          { scene: '💬👧👦🌍', full: 'The message should have been conveyed to the students more clearly', parts: [{t:'The message',ico:'💬',c:'s'}, {t:'should have been conveyed',ico:'📢',c:'v'}, {t:'to the students more clearly',ico:'🧑‍🎓',c:'o'}], traceWord: 'conveyed' },
          { scene: '🌳🌳🌳🌱', full: 'The forest must be saved for countless animals and plants', parts: [{t:'The forest',ico:'🌲',c:'s'}, {t:'must be saved',ico:'🛡',c:'v'}, {t:'for countless animals and plants',ico:'🌳',c:'o'}], traceWord: 'countless' },
          { scene: '👏🌱🏅', full: 'Young volunteers should have been congratulated for their hard work', parts: [{t:'Young volunteers',ico:'🧑',c:'s'}, {t:'should have been congratulated',ico:'👏',c:'v'}, {t:'for their hard work',ico:'💪',c:'o'}], traceWord: 'congratulated' }
        ],
        qaList: [
          { q: 'Why are people concerned about the river?', scene: '😟🌊🏭', ans: 'Because continual pollution has damaged it', opts: [{ txt: 'Because continual pollution has damaged it', ico: '🔁' }, { txt: 'Because the beach is very small', ico: '🏖' }, { txt: 'Because the shop is closed', ico: '🛒' }] },
          { q: 'Which sign should have been changed?', scene: '🪧😵🔧', ans: 'The confusing sign should have been changed', opts: [{ txt: 'The copyright should have been checked', ico: '📄' }, { txt: 'The confusing sign should have been changed', ico: '😵' }, { txt: 'Counseling should have been offered to him', ico: '💬' }] },
          { q: 'What must be received before the trip?', scene: '🧳📧✅', ans: 'A confirmation must be received by email', opts: [{ txt: 'The copyright must be checked by a cave', ico: '📄' }, { txt: 'A cotton shirt must be washed', ico: '🧵' }, { txt: 'A confirmation must be received by email', ico: '📧' }] },
          { q: 'What should have been given to the brave team?', scene: '🏅👥🚩', ans: 'A compliment should have been given to them', opts: [{ txt: 'A compliment should have been given to them', ico: '👍' }, { txt: 'The mountain might have been conquered', ico: '⛰' }, { txt: 'A plastic bag should have been thrown away', ico: '🛍' }] }
        ],
        parentGame: { title: '🎲 Hoạt động Đời thực (12 phút): Cam kết xanh của em', steps: [
          '<b>Bước 1:</b> Cùng bạn liệt kê 3 việc lẽ ra đã phải làm để bảo vệ thiên nhiên ở nhà hoặc ở trường (tắt đèn, phân loại rác, trồng cây...) và 3 việc cần làm ngay.',
          '<b>Bước 2:</b> Viết thành câu bị động có modal, ví dụ <i>"Less plastic should have been used."</i> và <i>"More trees must be planted."</i> Mỗi câu phải có be hoặc have been + V3.',
          '<b>Bước 3:</b> Chọn 1 việc cần làm ngay và viết một lời cam kết ngắn trên giấy màu, dán ở nơi cả nhà nhìn thấy, rồi đọc to cho mọi người nghe.'
        ] }
        }
      ]
    },
    '6.9': {
      lessons: [
        {
          id: '6.9A', name: 'Bài 6.9A: Dịch vụ quanh em',
          grammar: {
            formulas: ['👦 I + ⚡ have + 💇 my hair + ✂️ cut', '👧 She + ⚡ is having + 🛋 a cushion + 🛠 made', '👦 Tom + ⚡ had + 🚲 his bike + 🚨 stolen'],
            tip: 'Nhờ người khác làm: have/get + vật + V3. Chuyện không may cũng dùng have + vật + V3 (had my bag stolen) nhé!'
          },
          chunks: [
            { scene: '💇‍♀️🌀✂️', full: 'She had her curly hair cut at the shop yesterday', parts: [{t:'She',ico:'👧',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'her curly hair cut at the shop yesterday',ico:'💇‍♀️',c:'o'}], traceWord: 'curly' },
            { scene: '🪑🛠👨‍🎨', full: 'We are having a soft cushion made by a young creator', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'are having',ico:'⚡',c:'v'}, {t:'a soft cushion made by a young creator',ico:'🛠',c:'o'}], traceWord: 'cushion' },
            { scene: '🛃🧳✈️', full: 'He had his bag checked at customs at the airport', parts: [{t:'He',ico:'👦',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'his bag checked at customs at the airport',ico:'🛃',c:'o'}], traceWord: 'customs' },
            { scene: '🥒🔪🍽', full: 'I will get the courgette and cucumber cut before dinner', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will get',ico:'⚡',c:'v'}, {t:'the courgette and cucumber cut before dinner',ico:'🥒',c:'o'}], traceWord: 'courgette' },
            { scene: '👨‍🌾🌾🚜', full: 'The farmer gets his big field cultivated by workers every spring', parts: [{t:'The farmer',ico:'👨‍🌾',c:'s'}, {t:'gets',ico:'⚡',c:'v'}, {t:'his big field cultivated by workers every spring',ico:'🌾',c:'o'}], traceWord: 'cultivated' },
            { scene: '👦🚲🚸', full: 'Tom had his bike stolen near the crossing yesterday', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'his bike stolen near the crossing yesterday',ico:'🚸',c:'o'}], traceWord: 'crossing' },
            { scene: '👧👜🚦', full: 'Lan had her new bag stolen at the crossroads last night', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'her new bag stolen at the crossroads last night',ico:'🚦',c:'o'}], traceWord: 'crossroads' },
            { scene: '👧📱😢', full: 'It was cruel that Anna had her phone stolen on the way home', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'cruel that Anna had her phone stolen on the way home',ico:'😡',c:'o'}], traceWord: 'cruel' }
          ],
          qaList: [
            { q: 'Why did everyone call the girl courageous?', scene: '👧🦁🐦', ans: 'She saved a small crow from the road', opts: [{ txt: 'She saved a small crow from the road', ico: '🐦' }, { txt: 'She had her hair cut yesterday', ico: '💇‍♀️' }, { txt: 'She bought a soft cushion', ico: '🪑' }] },
            { q: 'Why does Nam have a crush on Mai?', scene: '👦💘👧', ans: 'Because she is kind and funny', opts: [{ txt: 'Because she is kind and funny', ico: '💘' }, { txt: 'Because it is raining today', ico: '🌧' }, { txt: 'Because the shop is open', ico: '🏪' }] },
            { q: 'Why did Lan open the strange box?', scene: '👧📦🤔', ans: 'Her curiosity was strong', opts: [{ txt: 'Her curiosity was strong', ico: '🤔' }, { txt: 'She was very sleepy', ico: '😴' }, { txt: 'It was her birthday', ico: '🎂' }] },
            { q: 'How did Tom look at the strange machine, wanting to learn more?', scene: '👦⚙️🧐', ans: 'He looked at it curiously', opts: [{ txt: 'He looked at it curiously', ico: '🧐' }, { txt: 'He fell asleep on it', ico: '😴' }, { txt: 'He gave it to a crow', ico: '🐦' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Dịch vụ quanh em',
            steps: [
              '<b>Bước 1:</b> Cùng bạn liệt kê 5 dịch vụ quanh nhà (cắt tóc, sửa xe, giặt đồ, kiểm tra hành lý...). Viết mỗi dịch vụ thành một câu: <i>"I had my hair cut."</i>',
              '<b>Bước 2:</b> Đổi vai: một bạn nói việc mình nhờ người khác làm, bạn kia đoán dịch vụ. Dùng <i>"have / get + vật + V3"</i> cho mọi thì (had, am having, will get).',
              '<b>Bước 3:</b> Viết 2 câu về chuyện không may (<i>"I had my bike stolen."</i>) rồi đọc to cho bạn nghe và sửa lỗi cho nhau.'
            ]
          }
        },
        {
          id: '6.9B', name: 'Bài 6.9B: Nhờ người khác giúp đỡ',
          grammar: {
            formulas: ['👩 Mai + ⚡ had + 👨‍🏫 her teacher + ✍️ check her CV', '👦 I + ⚡ got + 👦 my brother + 🙏 to help me', '👨‍✈️ The police + ⚡ made + 🚗 the driver + 🛑 stop'],
            tip: 'have/make + người + V (không to); get + người + TO V. Mẹo: make = bắt buộc, have = nhờ lịch sự, get = thuyết phục!'
          },
          chunks: [
            { scene: '👩📑👨‍🏫', full: 'Mai had her teacher check her CV before the interview', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'her teacher check her CV before the interview',ico:'📑',c:'o'}], traceWord: 'teacher' },
            { scene: '👨📱❌', full: 'Dad got me to delete the old photos from his phone', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'me to delete the old photos from his phone',ico:'❌',c:'o'}], traceWord: 'delete' },
            { scene: '🏪📦👷', full: 'The manager got a worker to replace the damaged boxes', parts: [{t:'The manager',ico:'👨‍💼',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'a worker to replace the damaged boxes',ico:'📦',c:'o'}], traceWord: 'damaged' },
            { scene: '👩‍🏫🌼🌱', full: 'Our teacher had us plant daisy seeds in the school garden', parts: [{t:'Our teacher',ico:'👩‍🏫',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'us plant daisy seeds in the school garden',ico:'🌼',c:'o'}], traceWord: 'daisy' },
            { scene: '👮🚗🚨', full: 'The police made the young driver stop driving dangerously', parts: [{t:'The police',ico:'👮',c:'s'}, {t:'made',ico:'⚡',c:'v'}, {t:'the young driver stop driving dangerously',ico:'🚨',c:'o'}], traceWord: 'dangerously' },
            { scene: '👩‍🏫📋🏆', full: 'The teacher had us write a short declaration about a good deed', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'us write a short declaration about a good deed',ico:'📋',c:'o'}], traceWord: 'declaration' },
            { scene: '⚽🌸🍰', full: 'Our coach got the defender to carry the delicate cake', parts: [{t:'Our coach',ico:'🧑‍🏫',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'the defender to carry the delicate cake',ico:'⚽',c:'o'}], traceWord: 'defender' },
            { scene: '👩😄🧹', full: 'Mum was delighted when I got my brother to help me', parts: [{t:'Mum',ico:'👩',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'delighted when I got my brother to help me',ico:'😄',c:'o'}], traceWord: 'delighted' }
          ],
          qaList: [
            { q: 'What does dating mean?', scene: '💑❓', ans: 'It means going out with someone special', opts: [{ txt: 'It means going out with someone special', ico: '💑' }, { txt: 'It means going to a doctor', ico: '🏥' }, { txt: 'It means cleaning a room', ico: '🧹' }] },
            { q: 'What happened to Anna at the concert?', scene: '👧✨😶', ans: 'The dazzle of the lights left her in a daze', opts: [{ txt: 'The dazzle of the lights left her in a daze', ico: '✨' }, { txt: 'She had her hair cut', ico: '💇‍♀️' }, { txt: 'Her teacher made her run', ico: '🏃' }] },
            { q: 'Why did the workers make everyone stay away from the debris?', scene: '🧱💀👷', ans: 'Because the debris was deadly', opts: [{ txt: 'Because the debris was deadly', ico: '💀' }, { txt: 'Because it was a holiday', ico: '🎉' }, { txt: 'Because the bus was late', ico: '🚌' }] },
            { q: 'Why did the teacher have the class speak slowly to the deaf girl?', scene: '👩‍🏫🦻👧', ans: 'She could not hear well', opts: [{ txt: 'She could not hear well', ico: '🦻' }, { txt: 'She was very rich', ico: '💰' }, { txt: 'She was late for school', ico: '⏰' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhờ ai làm gì?',
            steps: [
              '<b>Bước 1:</b> Viết 3 việc em cần người khác giúp (kiểm tra bài, xóa file, sửa đồ). Với mỗi việc, viết một câu với <i>"had"</i>, <i>"got ... to"</i> hoặc <i>"made"</i>.',
              '<b>Bước 2:</b> Đọc câu cho bạn nghe. Bạn phải chỉ ra câu nào là nhờ lịch sự (<i>have</i>), thuyết phục (<i>get ... to</i>), hay bắt buộc (<i>make</i>).',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút: <i>"Last week I got my brother to help me."</i> Cả nhóm góp ý ngữ pháp.'
            ]
          }
        },
        {
          id: '6.9C', name: 'Bài 6.9C: Rắc rối thường ngày',
          grammar: {
            formulas: ['👦 Tom + ⚡ got + 🧭 lost', '👧 She + ⚡ got + 💌 invited', '🧥 The coat + ⚡ needs + 🧼 washing'],
            tip: 'get + V3 nói chuyện tự nhiên xảy ra với ta (get lost, get hurt). need + V-ing = need to be V3: "needs washing" = "needs to be washed".'
          },
          chunks: [
            { scene: '🚌🕘🧭', full: 'Our bus will depart at nine, so we must not get lost', parts: [{t:'Our bus',ico:'🚌',c:'s'}, {t:'will depart',ico:'🛫',c:'v'}, {t:'at nine, so we must not get lost',ico:'🧭',c:'o'}], traceWord: 'depart' },
            { scene: '👦🧳🛫', full: 'Tom got lost on the way to the departure gate at the airport', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'lost on the way to the departure gate at the airport',ico:'🧳',c:'o'}], traceWord: 'departure' },
            { scene: '🌳🌸💧', full: 'The delightful little garden needs watering every single day', parts: [{t:'The delightful little garden',ico:'🌳',c:'s'}, {t:'needs',ico:'⚡',c:'v'}, {t:'watering every single day',ico:'💧',c:'o'}], traceWord: 'delightful' },
            { scene: '👧😞🎉', full: 'She got depressed when she was not invited to the party', parts: [{t:'She',ico:'👧',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'depressed when she was not invited to the party',ico:'😞',c:'o'}], traceWord: 'depressed' },
            { scene: '🌧🧥👨‍👩‍👧', full: 'We got wet in the depressing rain, and our coats need drying', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'wet in the depressing rain, and our coats need drying',ico:'🌧',c:'o'}], traceWord: 'depressing' },
            { scene: '👨😴👶', full: 'He got deprived of sleep, and the baby\'s diaper needs changing', parts: [{t:'He',ico:'👨',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'deprived of sleep, and the baby\'s diaper needs changing',ico:'👶',c:'o'}], traceWord: 'diaper' },
            { scene: '🔎🏙🧭', full: 'The young detective got lost, but he did not fall into despair', parts: [{t:'The young detective',ico:'🔎',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'lost, but he did not fall into despair',ico:'😩',c:'o'}], traceWord: 'detective' },
            { scene: '🏠🌪💥', full: 'Many homes got damaged in the destructive storm', parts: [{t:'Many homes',ico:'🏠',c:'s'}, {t:'got',ico:'⚡',c:'v'}, {t:'damaged in the destructive storm',ico:'💥',c:'o'}], traceWord: 'destructive' }
          ],
          qaList: [
            { q: 'Why did the flood devastate the village?', scene: '🌊🏘💔', ans: 'It was a devastating flood that took many homes', opts: [{ txt: 'It was a devastating flood that took many homes', ico: '🌊' }, { txt: 'It was a happy holiday for everyone', ico: '🎉' }, { txt: 'It was a good day for the farmers', ico: '🌾' }] },
            { q: 'Why did the desperate man call for help?', scene: '👨🚗🆘', ans: 'He got lost and needed help', opts: [{ txt: 'He got lost and needed help', ico: '🆘' }, { txt: 'He wanted to buy a gift', ico: '🎁' }, { txt: 'He was happy with his book', ico: '📖' }] },
            { q: 'What did the nurse show when she worked all night for the sick?', scene: '👩‍⚕️🌙❤', ans: 'She showed great devotion', opts: [{ txt: 'She showed great devotion', ico: '❤' }, { txt: 'She showed a blue shirt', ico: '👕' }, { txt: 'She showed a long road', ico: '🛣' }] },
            { q: 'How do you call Grandma on an old phone?', scene: '👵📞👦', ans: 'I dial her number', opts: [{ txt: 'I dial her number', ico: '📞' }, { txt: 'I wash her number', ico: '🧼' }, { txt: 'I send her a letter', ico: '✉️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Rắc rối và cách xử lý',
            steps: [
              '<b>Bước 1:</b> Nhìn quanh nhà, tìm 3 thứ cần sửa hoặc làm. Viết câu: <i>"The window needs cleaning."</i> (= needs to be cleaned).',
              '<b>Bước 2:</b> Viết 3 rắc rối thường ngày bằng get-passive: <i>"I got lost."</i>, <i>"He got hurt."</i>, <i>"She got invited."</i> Chọn một chuyện thật của em.',
              '<b>Bước 3:</b> Kể mini 1 phút cho bạn nghe chuyện đó và nói cách em xử lý. Bạn đặt thêm 1 câu hỏi.'
            ]
          }
        }
      ]
    },
    '6.10': {
      lessons: [
        {
          id: '6.10A', name: 'Bài 6.10A: Phỏng vấn trên truyền thông',
          grammar: {
            formulas: ['🎤 The mayor + 🗣 explained + 💬 that the city was clean', '📰 The cook + 🗣 insisted / claimed + 💬 that it was true', '🙋 He + 🗣 admitted / warned / pointed out + 💬 that there was a problem'],
            tip: 'Sau explain, claim, insist, admit, warn, point out ta nối bằng that rồi kể lại cả câu — lời kể ở quá khứ thì động từ lùi một thì: is → was, will → would!'
          },
          chunks: [
            { scene: '🎤👨‍💼🏙', full: 'The mayor explained that diligence and hard work make a city better', parts: [{t:'The mayor',ico:'👨‍💼',c:'s'}, {t:'explained',ico:'🗣',c:'v'}, {t:'that diligence and hard work make a city better',ico:'💪',c:'o'}], traceWord: 'diligence' },
            { scene: '👩‍🏫📝⏰', full: 'The teacher claimed that every diligent student could finish the test early', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'claimed',ico:'🗣',c:'v'}, {t:'that every diligent student could finish the test early',ico:'💪',c:'o'}], traceWord: 'diligent' },
            { scene: '👨‍🍳🍽🧹', full: 'The cook insisted that the dishwasher was not the cause of the dirt', parts: [{t:'The cook',ico:'👨‍🍳',c:'s'}, {t:'insisted',ico:'☝️',c:'v'}, {t:'that the dishwasher was not the cause of the dirt',ico:'🍽',c:'o'}], traceWord: 'dishwasher' },
            { scene: '🎤🎭🙁', full: 'The singer admitted that the disastrous show was a big disappointment', parts: [{t:'The singer',ico:'🎤',c:'s'}, {t:'admitted',ico:'🙇',c:'v'}, {t:'that the disastrous show was a big disappointment',ico:'🙁',c:'o'}], traceWord: 'disappointment' },
            { scene: '👨‍⚕️🪑😖', full: 'The doctor warned that the old chair could cause discomfort in the back', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'warned',ico:'⚠️',c:'v'}, {t:'that the old chair could cause discomfort in the back',ico:'😖',c:'o'}], traceWord: 'discomfort' },
            { scene: '🎙📰⚡', full: 'The reporter pointed out that the disagreement between the two teams was not serious', parts: [{t:'The reporter',ico:'🎙',c:'s'}, {t:'pointed out',ico:'👉',c:'v'}, {t:'that the disagreement between the two teams was not serious',ico:'⚡',c:'o'}], traceWord: 'disagreement' },
            { scene: '👩‍💼🔔🔒', full: 'The manager warned that someone might disable the alarm during the meeting', parts: [{t:'The manager',ico:'👩‍💼',c:'s'}, {t:'warned',ico:'⚠️',c:'v'}, {t:'that someone might disable the alarm during the meeting',ico:'🔒',c:'o'}], traceWord: 'disable' },
            { scene: '🤿🌊✨', full: 'The diver admitted that the dive was dangerous but the sea looked divine', parts: [{t:'The diver',ico:'🤿',c:'s'}, {t:'admitted',ico:'🙇',c:'v'}, {t:'that the dive was dangerous but the sea looked divine',ico:'✨',c:'o'}], traceWord: 'diver' }
          ],
          qaList: [
            { q: 'What did the neighbor claim about the smell in the kitchen?', scene: '🏠🤢👃', ans: 'He claimed that the disgusting smell was coming from the old bin', opts: [{ txt: 'He claimed that the disgusting smell was coming from the old bin', ico: '🤢' }, { txt: 'He asked me to buy some bread', ico: '🍞' }, { txt: 'She admitted that she was late for school', ico: '🏫' }] },
            { q: 'What did the guide point out about the disabled visitors at the museum?', scene: '♿🏛👩‍🏫', ans: 'She pointed out that disabled visitors could use the lift at the door', opts: [{ txt: 'She pointed out that disabled visitors could use the lift at the door', ico: '♿' }, { txt: 'She admitted that the museum was closed on Monday', ico: '🏛' }, { txt: 'The visitors warned us about the rain', ico: '🌧' }] },
            { q: 'What did the coach warn the players about before the game?', scene: '⚽👨‍🏫⏳', ans: 'He warned that a long delay could discourage many fans', opts: [{ txt: 'He warned that a long delay could discourage many fans', ico: '😕' }, { txt: 'He insisted that the game was on Sunday', ico: '📅' }, { txt: 'She claimed that the ball was in the garden', ico: '⚽' }] },
            { q: 'What did the witness insist about the thief near the bank?', scene: '🕵️🏦🔍', ans: 'She insisted that she saw the thief distinctly under the street light', opts: [{ txt: 'She insisted that she saw the thief distinctly under the street light', ico: '🔍' }, { txt: 'She admitted that she was asleep at home', ico: '😴' }, { txt: 'She warned that the bank was closed today', ico: '🏦' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phóng Viên Nhí Thuật Lại',
            steps: [
              '<b>Bước 1:</b> Làm việc cùng một bạn: một người là phóng viên, người kia là thị trưởng, đầu bếp hoặc ca sĩ. Phóng viên hỏi 3 câu ngắn bằng tiếng Việt hoặc tiếng Anh về một vấn đề trong thành phố.',
              '<b>Bước 2:</b> Phóng viên ghi nhanh câu trả lời, rồi thuật lại bằng tiếng Anh, ví dụ <i>"The mayor explained that diligence makes a city better."</i> Hãy thử đủ các động từ: explain, claim, insist, admit, warn, point out.',
              '<b>Bước 3:</b> Đổi vai, sau đó viết 4 câu tin ngắn có chữ <i>that</i> và đọc to như bản tin cho cả nhà nghe.'
            ]
          }
        },
        {
          id: '6.10B', name: 'Bài 6.10B: Tranh cãi và xin lỗi',
          grammar: {
            formulas: ['😠 Tom + 🗣 accused + 👧 Anna + 🔗 of + 🏃 leaving', '🙏 Nam + 🗣 apologized + 🔗 for + 🏃 calling', '🎉 Mai + 🗣 congratulated + 👦 him + 🔗 on + 🏃 diving'],
            tip: 'Sau giới từ (of, for, on) động từ luôn thêm -ing: accuse ... of leaving, blame ... for breaking, insist on taking!'
          },
          chunks: [
            { scene: '👧🤿🐬', full: 'Mai congratulated her brother on diving with a dolphin last summer', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'congratulated',ico:'🎉',c:'v'}, {t:'her brother on diving with a dolphin last summer',ico:'🐬',c:'o'}], traceWord: 'diving' },
            { scene: '👦🙏🎬', full: 'Nam apologized for calling the documentary dull and too long', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'apologized',ico:'🙏',c:'v'}, {t:'for calling the documentary dull and too long',ico:'🎬',c:'o'}], traceWord: 'documentary' },
            { scene: '👨🏊‍♂️🌊', full: 'Dad insisted on teaching me to swim so I would never drown', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'insisted on',ico:'☝️',c:'v'}, {t:'teaching me to swim so I would never drown',ico:'🏊‍♂️',c:'o'}], traceWord: 'drown' },
            { scene: '🧓📦🗑', full: 'The neighbor accused Tom of dumping old boxes next to the dustbin', parts: [{t:'The neighbor',ico:'🧓',c:'s'}, {t:'accused',ico:'👉',c:'v'}, {t:'Tom of dumping old boxes next to the dustbin',ico:'🗑',c:'o'}], traceWord: 'dustbin' },
            { scene: '👧🎧🎶', full: 'Lan congratulated the dj on playing great music at the party', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'congratulated',ico:'🎉',c:'v'}, {t:'the dj on playing great music at the party',ico:'🎧',c:'o'}], traceWord: 'dj' },
            { scene: '👦🙏🧑📱', full: 'Tom apologized to the dude for breaking his phone yesterday', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'apologized',ico:'🙏',c:'v'}, {t:'to the dude for breaking his phone yesterday',ico:'🧑',c:'o'}], traceWord: 'dude' },
            { scene: '👧🖨📄⚫', full: 'Mai blamed the old printer for leaving a black dot on the doc', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'blamed',ico:'😤',c:'v'}, {t:'the old printer for leaving a black dot on the doc',ico:'📄',c:'o'}], traceWord: 'dot' },
            { scene: '🎙☁️📉', full: 'The reporter blamed the weather for causing a downward trend in sales', parts: [{t:'The reporter',ico:'🎙',c:'s'}, {t:'blamed',ico:'😤',c:'v'}, {t:'the weather for causing a downward trend in sales',ico:'📉',c:'o'}], traceWord: 'downward' }
          ],
          qaList: [
            { q: 'Why did the police officer blame the driver?', scene: '👮🚗🥴', ans: 'He blamed the driver for driving when he was drunk', opts: [{ txt: 'He blamed the driver for driving when he was drunk', ico: '🥴' }, { txt: 'He congratulated the driver on passing the test', ico: '🎉' }, { txt: 'He apologized for forgetting the bus ticket', ico: '🎫' }] },
            { q: 'Why did Lan apologize to her divorced aunt on Sunday?', scene: '👧👩💔', ans: 'She apologized for forgetting the party at the house', opts: [{ txt: 'She apologized for forgetting the party at the house', ico: '🙏' }, { txt: 'She congratulated her on winning a prize', ico: '🏆' }, { txt: 'She accused her of eating the cake', ico: '🍰' }] },
            { q: 'What did Grandpa insist on after the big lunch?', scene: '👴🍚😴', ans: 'He insisted on taking a short doze in the armchair', opts: [{ txt: 'He insisted on taking a short doze in the armchair', ico: '😴' }, { txt: 'He blamed the cat for breaking the cup', ico: '🐱' }, { txt: 'He apologized for calling the dj', ico: '🎧' }] },
            { q: 'What did Mai congratulate her brother on at the pool?', scene: '👧🏊‍♂️🏅', ans: 'She congratulated him on winning the swimming race', opts: [{ txt: 'She congratulated him on winning the swimming race', ico: '🏅' }, { txt: 'She accused him of dumping the boxes', ico: '📦' }, { txt: 'She blamed him for losing the key', ico: '🔑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phiên Tòa Xin Lỗi',
            steps: [
              '<b>Bước 1:</b> Cùng một bạn nghĩ ra 3 tình huống nhỏ, ví dụ làm hỏng điện thoại, bỏ rác sai chỗ, thắng một cuộc thi bơi. Ghi mỗi tình huống lên một mẩu giấy.',
              '<b>Bước 2:</b> Bốc một mẩu giấy và nói câu thuật lại bằng tiếng Anh với đúng giới từ + V-ing, ví dụ <i>"Tom apologized for breaking his phone."</i> hoặc <i>"The neighbor accused Tom of dumping old boxes."</i>',
              '<b>Bước 3:</b> Mỗi người viết 4 câu mới với accuse of, blame for, apologize for, insist on, congratulate on rồi đọc cho nhau kiểm tra xem động từ sau giới từ đã thêm -ing chưa.'
            ]
          }
        },
        {
          id: '6.10C', name: 'Bài 6.10C: Lời khuyên của thầy cô',
          grammar: {
            formulas: ['👩‍🏫 The teacher + 🗣 advised + 👦 us + ➡️ to clean', '👩 Mom + 🗣 reminded + 👨 Dad + ➡️ to buy', '🙏 Anna + 🗣 begged + 👩‍🏫 her teacher + ➡️ to give'],
            tip: 'Advise, remind, urge, encourage, beg luôn cần một người đứng ngay sau động từ, rồi mới đến to + V: advised US to clean!'
          },
          chunks: [
            { scene: '👩‍🏫🧹🌫', full: 'The teacher advised us to clean the dusty shelf before the lesson', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'advised',ico:'💡',c:'v'}, {t:'us to clean the dusty shelf before the lesson',ico:'🌫',c:'o'}], traceWord: 'dusty' },
            { scene: '👩🛍✈️', full: 'Mom reminded Dad to buy gifts at the duty-free shop', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'reminded',ico:'⏰',c:'v'}, {t:'Dad to buy gifts at the duty-free shop',ico:'🛍',c:'o'}], traceWord: 'gifts' },
            { scene: '👵🛏🧺', full: 'I will urge my brother to wash the duvet because it is dirty', parts: [{t:'I',ico:'👵',c:'s'}, {t:'will urge',ico:'👉',c:'v'}, {t:'my brother to wash the duvet because it is dirty',ico:'🛏',c:'o'}], traceWord: 'duvet' },
            { scene: '👨‍🏫📚👑', full: 'Our history teacher encouraged us to read about the Tran dynasty', parts: [{t:'Our history teacher',ico:'👨‍🏫',c:'s'}, {t:'encouraged',ico:'👍',c:'v'}, {t:'us to read about the Tran dynasty',ico:'👑',c:'o'}], traceWord: 'dynasty' },
            { scene: '👨‍🏫⚽🙋', full: 'The coach encouraged the eager players to show their eagerness on the field', parts: [{t:'The coach',ico:'👨‍🏫',c:'s'}, {t:'encouraged',ico:'👍',c:'v'}, {t:'the eager players to show their eagerness on the field',ico:'🙋',c:'o'}], traceWord: 'eager' },
            { scene: '👩‍⚕️👦👂', full: 'The nurse advised Tom to rest because he had an earache', parts: [{t:'The nurse',ico:'👩‍⚕️',c:'s'}, {t:'advised',ico:'💡',c:'v'}, {t:'Tom to rest because he had an earache',ico:'👂',c:'o'}], traceWord: 'earache' },
            { scene: '👧🙏😊⏰', full: 'Anna begged her easygoing teacher in an earnest voice to give her more time', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'begged',ico:'🙏',c:'v'}, {t:'her easygoing teacher in an earnest voice to give her more time',ico:'🫡',c:'o'}], traceWord: 'earnest' },
            { scene: '👩‍🏫📊🌿', full: 'The teacher reminded us to study economics and the local ecosystem', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'reminded',ico:'⏰',c:'v'}, {t:'us to study economics and the local ecosystem',ico:'📊',c:'o'}], traceWord: 'economics' }
          ],
          qaList: [
            { q: 'What will the teacher urge the students to bring to school?', scene: '👩‍🏫🌱👜', ans: 'She will urge them to bring eco bags to school', opts: [{ txt: 'She will urge them to bring eco bags to school', ico: '🌱' }, { txt: 'She begged them to forget the lesson', ico: '📖' }, { txt: 'She reminded them to buy a new car', ico: '🚗' }] },
            { q: 'How did Dad encourage Mai after the school prize?', scene: '👨👧🤩', ans: 'He encouraged her to share her ecstasy with her friends', opts: [{ txt: 'He encouraged her to share her ecstasy with her friends', ico: '🤩' }, { txt: 'He advised her to sleep in the kitchen', ico: '🍳' }, { txt: 'He will urge her to wash the dog', ico: '🐶' }] },
            { q: 'What did the nurse advise the embarrassed boy to do with his elbow?', scene: '👩‍⚕️👦😳💪', ans: 'She advised him to rest his elbow and not play today', opts: [{ txt: 'She advised him to rest his elbow and not play today', ico: '💪' }, { txt: 'She begged him to buy a big cake', ico: '🎂' }, { txt: 'She reminded him to visit the zoo', ico: '🦁' }] },
            { q: 'Why did the engineer remind Tom to turn off the electrical box?', scene: '👷👦🔌', ans: 'He reminded Tom to turn off the electrical power first', opts: [{ txt: 'He reminded Tom to turn off the electrical power first', ico: '🔌' }, { txt: 'He will urge Tom to paint the garden wall', ico: '🎨' }, { txt: 'He encouraged Tom to sing a song', ico: '🎤' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Chuyên Gia Lời Khuyên',
            steps: [
              '<b>Bước 1:</b> Nhớ lại 4 lời khuyên mà thầy cô hoặc bố mẹ hay nói với em, ví dụ dọn bàn học, ôn bài, giữ gìn sức khỏe. Ghi nhanh mỗi lời khuyên bằng tiếng Việt.',
              '<b>Bước 2:</b> Thuật lại từng lời khuyên bằng tiếng Anh với advise, remind, urge, encourage hoặc beg + người + to V, ví dụ <i>"My teacher advised us to clean the shelf."</i>',
              '<b>Bước 3:</b> Trình bày mini trước bạn hoặc gia đình trong 1 phút. Người nghe nghe thử xem em đã đặt người ngay sau động từ chưa, rồi cho em một lời góp ý.'
            ]
          }
        }
      ]
    },
    '6.11': {
      lessons: [
        {
          id: '6.11A', name: 'Bài 6.11A: Buổi phỏng vấn tuyển sinh',
          grammar: {
            formulas: ['🧑‍🏫 The teacher + ❓ asked + 💬 whether / if I was ready', '👩 She + ❓ asked + 💬 what / how / why + S + V', '👦 He + ❓ asked + 💬 if I could + V'],
            tip: 'Câu hỏi Yes/No tường thuật dùng if hoặc whether, và nhớ viết như câu kể: S + V, không đảo trợ động từ lên trước!'
          },
          chunks: [
            { scene: '🧑‍🏫🎤😢', full: 'The teacher asked me whether I felt emotionally ready for the interview', parts: [{t:'The teacher',ico:'🧑‍🏫',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'me whether I felt emotionally ready for the interview',ico:'😢',c:'o'}], traceWord: 'emotionally' },
            { scene: '👩📎✉️', full: 'She asked if I could enclose a short letter with my form', parts: [{t:'She',ico:'👩',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'if I could enclose a short letter with my form',ico:'📎',c:'o'}], traceWord: 'enclose' },
            { scene: '👦😳🙈', full: 'Tom asked what he could do to hide his embarrassment', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'what he could do to hide his embarrassment',ico:'😳',c:'o'}], traceWord: 'embarrassment' },
            { scene: '🧑‍🏫👏👍', full: 'The teacher asked who gave me encouragement when my results were not encouraging', parts: [{t:'The teacher',ico:'🧑‍🏫',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'who gave me encouragement when my results were not encouraging',ico:'👏',c:'o'}], traceWord: 'encouragement' },
            { scene: '👨📚⚠️', full: 'He asked whether I had read the encyclopedia page on what can endanger sea animals', parts: [{t:'He',ico:'👨',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'whether I had read the encyclopedia page on what can endanger sea animals',ico:'📚',c:'o'}], traceWord: 'encyclopedia' },
            { scene: '👩⏳💪', full: 'She asked how long I could endure the endless waiting before my interview', parts: [{t:'She',ico:'👩',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'how long I could endure the endless waiting before my interview',ico:'♾',c:'o'}], traceWord: 'endure' },
            { scene: '👵💍⚙️', full: 'My aunt asked whether her son was engaged to an engineering student', parts: [{t:'My aunt',ico:'👵',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'whether her son was engaged to an engineering student',ico:'💍',c:'o'}], traceWord: 'engineering' },
            { scene: '👧🧔🎭', full: 'Lan asked whether the Englishman on the stage was a famous entertainer', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'whether the Englishman on the stage was a famous entertainer',ico:'🎭',c:'o'}], traceWord: 'entertainer' }
          ],
          qaList: [
            { q: 'Was the interview enjoyable?', scene: '🎤😄', ans: 'Yes, it was very enjoyable', opts: [{ txt: 'Yes, it was very enjoyable', ico: '😄' }, { txt: 'No, I lost my bag', ico: '🎒' }, { txt: 'It is on the table', ico: '🪑' }] },
            { q: 'How can reading enrich your life?', scene: '📚💎', ans: 'It can enrich my mind', opts: [{ txt: 'It can enrich my mind', ico: '💎' }, { txt: 'I can ride a bike', ico: '🚲' }, { txt: 'It is a big table', ico: '🪑' }] },
            { q: 'What brings you great enjoyment?', scene: '🎵😊', ans: 'Music brings me great enjoyment', opts: [{ txt: 'Music brings me great enjoyment', ico: '🎵' }, { txt: 'My bag is very heavy', ico: '🎒' }, { txt: 'He is at the door', ico: '🚪' }] },
            { q: 'What did the teacher ask Mai?', scene: '🧑‍🏫👧❓', ans: 'She asked Mai if she was ready', opts: [{ txt: 'She asked Mai if she was ready', ico: '❓' }, { txt: 'Mai has a red bag', ico: '🎒' }, { txt: 'The bus is in the street', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Mô Phỏng',
            steps: [
              '<b>Bước 1:</b> Làm việc cùng một bạn. Bạn A đóng vai giám khảo và hỏi 4 câu như <i>"Are you ready for this interview?"</i> hoặc <i>"How do you stay calm?"</i>, bạn B trả lời ngắn.',
              '<b>Bước 2:</b> Bạn B viết lại từng câu hỏi dưới dạng tường thuật, ví dụ <i>"He asked whether I was ready."</i>, nhớ dùng if hoặc whether và không đảo trợ động từ.',
              '<b>Bước 3:</b> Đổi vai và tường thuật lại bằng lời cho cả nhóm nghe. Cả nhóm bình chọn người có câu tường thuật chính xác nhất.'
            ]
          }
        },
        {
          id: '6.11B', name: 'Bài 6.11B: Tin tức vẫn còn đúng',
          grammar: {
            formulas: ['👩 She + 💬 says + 📌 that + sự thật hiện tại', '👨 He + 📣 has told me + 📌 that + S + V', '🧑‍🏫 The teacher + 💬 says + 🌍 that + điều luôn đúng'],
            tip: 'Khi động từ tường thuật ở hiện tại (says, has told) hoặc điều được nói vẫn còn đúng, cứ giữ nguyên thì, không cần lùi thì nhé!'
          },
          chunks: [
            { scene: '🧑📝⏰', full: 'The examiner says that the speaking test lasts ten minutes', parts: [{t:'The examiner',ico:'🧑',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'that the speaking test lasts ten minutes',ico:'⏰',c:'o'}], traceWord: 'examiner' },
            { scene: '🧑‍🏫🏆💪', full: 'Our teacher says that excellence comes from hard work every day', parts: [{t:'Our teacher',ico:'🧑‍🏫',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'that excellence comes from hard work every day',ico:'🏆',c:'o'}], traceWord: 'excellence' },
            { scene: '🌍🧑‍🔬🌊', full: 'An environmentalist has told us that plastic stays in the sea for many years', parts: [{t:'An environmentalist',ico:'🌍',c:'s'}, {t:'has told',ico:'📣',c:'v'}, {t:'us that plastic stays in the sea for many years',ico:'🌊',c:'o'}], traceWord: 'environmentalist' },
            { scene: '👦😩🏃', full: 'Tom says that he is exhausted because he ran all day', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'that he is exhausted because he ran all day',ico:'😩',c:'o'}], traceWord: 'exhausted' },
            { scene: '🏔💎🧑', full: 'The club says that its exclusive trips need an experienced guide', parts: [{t:'The club',ico:'🏔',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'that its exclusive trips need an experienced guide',ico:'🧑',c:'o'}], traceWord: 'exclusive' },
            { scene: '👧🧭🚀', full: 'Mai says that she is enthusiastic about the exploration of space', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'that she is enthusiastic about the exploration of space',ico:'🧭',c:'o'}], traceWord: 'exploration' },
            { scene: '👨📣💥', full: 'Dad has told me that there was an explosion near the factory yesterday', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'has told',ico:'📣',c:'v'}, {t:'me that there was an explosion near the factory yesterday',ico:'💥',c:'o'}], traceWord: 'explosion' },
            { scene: '👧🔥🎵', full: 'Lan says that her enthusiasm grows because she is a music enthusiast', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'that her enthusiasm grows because she is a music enthusiast',ico:'🔥',c:'o'}], traceWord: 'enthusiasm' }
          ],
          qaList: [
            { q: 'What does the poet say about love?', scene: '📖💖♾', ans: 'He says that love is eternal', opts: [{ txt: 'He says that love is eternal', ico: '♾' }, { txt: 'He has a blue car', ico: '🚗' }, { txt: 'It is under the bed', ico: '🛏️' }] },
            { q: 'What does the song say about waiting?', scene: '🎵⏳', ans: 'It says that waiting feels like an eternity', opts: [{ txt: 'It says that waiting feels like an eternity', ico: '⏳' }, { txt: 'It is a big green bus', ico: '🚌' }, { txt: 'She likes red apples', ico: '🍎' }] },
            { q: 'How does Tom say we should share the cake?', scene: '🍰⚖️', ans: 'He says we should share it evenly', opts: [{ txt: 'He says we should share it evenly', ico: '⚖' }, { txt: 'He is in the kitchen', ico: '🍳' }, { txt: 'We have two cats', ico: '🐱' }] },
            { q: 'How does Anna say the children ran?', scene: '👧👦🏃🎉', ans: 'She says they ran excitedly to the gate', opts: [{ txt: 'She says they ran excitedly to the gate', ico: '🎉' }, { txt: 'She says it is a long book', ico: '📖' }, { txt: 'They are on the moon', ico: '🌙' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản Tin Nhỏ Của Lớp',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn tìm 3 thông tin vẫn còn đúng từ sách báo hoặc internet, ví dụ một sự thật về môi trường hay khoa học, rồi ghi lại ngắn gọn.',
              '<b>Bước 2:</b> Viết mỗi thông tin thành câu tường thuật với động từ ở hiện tại, như <i>"The book says that plastic stays in the sea for many years."</i> hoặc <i>"My teacher has told me that..."</i>, không lùi thì.',
              '<b>Bước 3:</b> Đọc bản tin mini cho cả nhóm nghe. Nhóm đoán vì sao không cần lùi thì và bình chọn tin thú vị nhất.'
            ]
          }
        },
        {
          id: '6.11C', name: 'Bài 6.11C: Gợi ý và lời mời',
          grammar: {
            formulas: ['👧 Mai + 💡 suggested + 🚶 V-ing', '👩 She + 💡 suggested + 📌 that we should + V', '👦 Tom + 🤝 offered + 🎯 to + V'],
            tip: 'Sau suggest dùng V-ing hoặc that + S + (should) + V, tuyệt đối không nói suggest to do; còn offer và invite thì đi với to!'
          },
          chunks: [
            { scene: '👧🤝💬', full: 'Mai suggested meeting face-to-face to talk about the trip', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'suggested',ico:'💡',c:'v'}, {t:'meeting face-to-face to talk about the trip',ico:'🤝',c:'o'}], traceWord: 'meeting' },
            { scene: '🧑‍🏫📖📚', full: 'My teacher recommended reading extensively to improve my English', parts: [{t:'My teacher',ico:'🧑‍🏫',c:'s'}, {t:'recommended',ico:'👍',c:'v'}, {t:'reading extensively to improve my English',ico:'📖',c:'o'}], traceWord: 'extensively' },
            { scene: '👨‍⚕️👁📅', full: 'The doctor suggested that I should check my eyesight every year', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'suggested',ico:'💡',c:'v'}, {t:'that I should check my eyesight every year',ico:'👁',c:'o'}], traceWord: 'eyesight' },
            { scene: '👨🚜🌾', full: 'Dad offered to help with farming on his farmland at weekends', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'offered',ico:'🤲',c:'v'}, {t:'to help with farming on his farmland at weekends',ico:'🚜',c:'o'}], traceWord: 'farming' },
            { scene: '👧🏔👋', full: 'Lan invited us to visit her faraway village for the farewell party', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'invited',ico:'💌',c:'v'}, {t:'us to visit her faraway village for the farewell party',ico:'🏔',c:'o'}], traceWord: 'farewell' },
            { scene: '👩📚🦕', full: 'She recommended a book about the extinction of big animals', parts: [{t:'She',ico:'👩',c:'s'}, {t:'recommended',ico:'👍',c:'v'}, {t:'a book about the extinction of big animals',ico:'🦕',c:'o'}], traceWord: 'extinction' },
            { scene: '👩🌲🍂', full: 'Mum suggested that we should follow the faint path past the fallen tree', parts: [{t:'Mum',ico:'👩',c:'s'}, {t:'suggested',ico:'💡',c:'v'}, {t:'that we should follow the faint path past the fallen tree',ico:'🍂',c:'o'}], traceWord: 'fallen' },
            { scene: '👧🦄🐕', full: 'Lan recommended a fantasy book about a faithful dog', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'recommended',ico:'👍',c:'v'}, {t:'a fantasy book about a faithful dog',ico:'🦄',c:'o'}], traceWord: 'fantasy' }
          ],
          qaList: [
            { q: 'What did the teacher recommend reading about?', scene: '🧑‍🏫📚🦖', ans: 'She recommended a book about extinct animals', opts: [{ txt: 'She recommended a book about extinct animals', ico: '🦖' }, { txt: 'She went home by bus', ico: '🚌' }, { txt: 'It is a cold day', ico: '❄️' }] },
            { q: 'What did Mai suggest we do?', scene: '👧🚶➡️', ans: 'She suggested walking farther to the lake', opts: [{ txt: 'She suggested walking farther to the lake', ico: '➡' }, { txt: 'She has a red hat', ico: '🎩' }, { txt: 'They are in the box', ico: '📦' }] },
            { q: 'Who offered to run the farthest?', scene: '👦🏃🏁', ans: 'Nam offered to run the farthest', opts: [{ txt: 'Nam offered to run the farthest', ico: '🏁' }, { txt: 'Nam has two cats', ico: '🐱' }, { txt: 'The cake is on the plate', ico: '🍰' }] },
            { q: 'What did Mr Lee suggest?', scene: '👨🛍️🎭', ans: 'He suggested not buying fake bags online', opts: [{ txt: 'He suggested not buying fake bags online', ico: '🎭' }, { txt: 'He is under the table', ico: '🪑' }, { txt: 'He likes blue milk', ico: '🥛' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hội Đồng Gợi Ý',
            steps: [
              '<b>Bước 1:</b> Mỗi bạn nêu một vấn đề nhỏ của mình, ví dụ muốn đọc sách hay hơn, hay cần đi chơi cuối tuần, và cả nhóm đưa ra gợi ý bằng lời, như <i>"Why don\'t you read more?"</i>.',
              '<b>Bước 2:</b> Viết lại từng gợi ý bằng câu tường thuật với suggest, recommend, offer hoặc invite, ví dụ <i>"Mai suggested reading extensively."</i> hoặc <i>"Tom offered to help."</i>.',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút: đọc to 3 câu tường thuật cho nhóm, nhóm kiểm tra xem sau suggest có dùng V-ing hoặc that + should đúng không.'
            ]
          }
        }
      ]
    },
    '6.12': {
      lessons: [
        {
          id: '6.12A', name: 'Bài 6.12A: Di sản văn hóa',
          grammar: {
            formulas: ['🧑 The film-maker + 🔗 who visits our school + 👗 wears fashionable clothes', '🎆 The firework + 💬 , which filled the sky , + 🌟 was my best memory', '🧑‍🚒 The firefighter + 🤝 (that) we know + 💨 fetched water'],
            tip: 'Mệnh đề không xác định có dấu phẩy thì không dùng that; còn that/which xác định có thể bỏ khi nó là tân ngữ!'
          },
          chunks: [
            { scene: '⛴🌊🎊', full: 'The ferry that crosses the river carries a festive crowd', parts: [{t:'The ferry that crosses the river',ico:'⛴',c:'s'}, {t:'carries',ico:'🚢',c:'v'}, {t:'a festive crowd',ico:'🎊',c:'o'}], traceWord: 'festive' },
            { scene: '🎥👗🏫', full: 'The film-maker who visits our school wears fashionable clothes', parts: [{t:'The film-maker who visits our school',ico:'🎥',c:'s'}, {t:'wears',ico:'⚡',c:'v'}, {t:'fashionable clothes',ico:'👗',c:'o'}], traceWord: 'fashionable' },
            { scene: '🍗👨‍👩‍👧🎉', full: 'We enjoyed the feast that our family cooked for the festival', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'enjoyed',ico:'😋',c:'v'}, {t:'the feast that our family cooked for the festival',ico:'🍗',c:'o'}], traceWord: 'feast' },
            { scene: '🎆🌌✨', full: 'The firework, which filled the sky with color, was my best memory', parts: [{t:'The firework, which filled the sky with color,',ico:'🎆',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'my best memory',ico:'💭',c:'o'}], traceWord: 'firework' },
            { scene: '🧑‍🚒💧🏃', full: 'The firefighter we know fetched water feverishly from the river', parts: [{t:'The firefighter we know',ico:'🧑‍🚒',c:'s'}, {t:'fetched',ico:'🏃',c:'v'}, {t:'water feverishly from the river',ico:'💧',c:'o'}], traceWord: 'feverishly' },
            { scene: '🥧🍎😋', full: 'The pie, which has a sweet apple filling, tastes wonderful', parts: [{t:'The pie, which has a sweet apple filling,',ico:'🥧',c:'s'}, {t:'tastes',ico:'👅',c:'v'}, {t:'wonderful',ico:'😋',c:'o'}], traceWord: 'filling' },
            { scene: '👤🔗👜⛴', full: 'You must fasten the belt that holds the bag before we leave', parts: [{t:'You',ico:'👤',c:'s'}, {t:'must fasten',ico:'🔗',c:'v'}, {t:'the belt that holds the bag before we leave',ico:'👜',c:'o'}], traceWord: 'fasten' },
            { scene: '🔬📄👍', full: 'The finding that the scientist explained was favorable for our town', parts: [{t:'The finding that the scientist explained',ico:'🔎',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'favorable for our town',ico:'👍',c:'o'}], traceWord: 'favorable' }
          ],
          qaList: [
            { q: 'Which machine sends pages through a phone line?', scene: '📠☎️', ans: 'A fax machine', opts: [{txt:'A fax machine',ico:'📠'}, {txt:'A ferry',ico:'⛴'}, {txt:'A firework',ico:'🎆'}] },
            { q: 'If you cut a cake into five equal pieces, what is one piece?', scene: '🍰✂️5️⃣', ans: 'A fifth of the cake', opts: [{txt:'A fifth of the cake',ico:'🖐'}, {txt:'Half of the cake',ico:'🍰'}, {txt:'Ten cakes',ico:'🎂'}] },
            { q: 'What do people watch that fills the sky with color?', scene: '🌃🎇👀', ans: 'A firework show', opts: [{txt:'A firework show',ico:'🎆'}, {txt:'A ferry ride',ico:'⛴'}, {txt:'A fax page',ico:'📠'}] },
            { q: 'Do we use who or which for people?', scene: '👤❓', ans: 'We use who for people.', opts: [{txt:'We use who for people.',ico:'👤'}, {txt:'We use which for people.',ico:'📦'}, {txt:'We use no word for people.',ico:'🚫'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thuyết trình mini về lễ hội',
            steps: ['<b>Bước 1:</b> Chọn một lễ hội ở quê em hoặc lễ hội em thích. Viết 4 câu về nó, mỗi câu có một mệnh đề quan hệ, ví dụ <i>"The feast that our family cooked was great."</i>', '<b>Bước 2:</b> Trong 4 câu, hãy có 2 câu xác định (không dấu phẩy) và 2 câu không xác định (có dấu phẩy với which/who). Thử bỏ that/which ở câu nào được.', '<b>Bước 3:</b> Đọc cho bạn hoặc người thân nghe trong 2 phút. Họ đoán lễ hội nào và chỉ ra một mệnh đề quan hệ mà họ nghe được.'] }
        },
        {
          id: '6.12B', name: 'Bài 6.12B: Nhân vật và nơi chốn đặc biệt',
          grammar: {
            formulas: ['👧 The girl + 🎵 whose flute you like + 📍 is in the room', '👩‍🏫 The guide + 🗣 to whom we talked + 💬 speaks English', '👨‍🌾 The farmer + 🚶 with whom I walked + 🐑 owns a flock'],
            tip: 'Whose chỉ sự sở hữu và đứng trước danh từ; giới từ đứng trước whom thì trang trọng, còn nói thường thì đặt giới từ cuối câu!'
          },
          chunks: [
            { scene: '👧🪈🏢', full: 'The girl whose flute you like is in the first-floor room', parts: [{t:'The girl whose flute you like',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in the first-floor room',ico:'🏢',c:'o'}], traceWord: 'flute' },
            { scene: '👦🤕🤧', full: 'The boy whose forehead feels hot has the flu', parts: [{t:'The boy whose forehead feels hot',ico:'🤕',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'the flu',ico:'🤧',c:'o'}], traceWord: 'forehead' },
            { scene: '🧑‍🏫🗣🇬🇧', full: 'The guide to whom we talked speaks English fluently', parts: [{t:'The guide to whom we talked',ico:'🧑‍🏫',c:'s'}, {t:'speaks',ico:'🗣',c:'v'}, {t:'English fluently',ico:'🇬🇧',c:'o'}], traceWord: 'fluently' },
            { scene: '🏋️👨🏃', full: 'Mr Lee, whose fitness is very good, runs to the river every day', parts: [{t:'Mr Lee, whose fitness is very good,',ico:'🏋',c:'s'}, {t:'runs',ico:'🏃',c:'v'}, {t:'to the river every day',ico:'🌊',c:'o'}], traceWord: 'fitness' },
            { scene: '🍦🍫👧', full: 'This is the ice cream whose flavor my sister likes best', parts: [{t:'This',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the ice cream whose flavor my sister likes best',ico:'🍦',c:'o'}], traceWord: 'flavor' },
            { scene: '👨‍🌾🐑🐑', full: 'The farmer with whom I walked owns a large flock of sheep', parts: [{t:'The farmer with whom I walked',ico:'👨‍🌾',c:'s'}, {t:'owns',ico:'🤲',c:'v'}, {t:'a large flock of sheep',ico:'🐑',c:'o'}], traceWord: 'flock' },
            { scene: '👦📝❌🤪', full: 'The boy who flunked the exam yesterday felt very foolish', parts: [{t:'The boy who flunked the exam yesterday',ico:'❌',c:'s'}, {t:'felt',ico:'💭',c:'v'}, {t:'very foolish',ico:'🤪',c:'o'}], traceWord: 'flunked' },
            { scene: '👩🥰📅', full: 'My aunt, of whom I am very fond, is with us for a fortnight', parts: [{t:'My aunt, of whom I am very fond,',ico:'👩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'with us for a fortnight',ico:'📅',c:'o'}], traceWord: 'fortnight' }
          ],
          qaList: [
            { q: 'What do you feel when you love your pet very much?', scene: '🐶🥰', ans: 'I feel great fondness for it.', opts: [{txt:'I feel great fondness for it.',ico:'🥰'}, {txt:'I feel great fright for it.',ico:'😱'}, {txt:'I feel very cold.',ico:'🥶'}] },
            { q: 'Which sign tells you that you can\'t go in?', scene: '🚪🚫', ans: 'Going in is forbidden.', opts: [{txt:'Going in is forbidden.',ico:'🚫'}, {txt:'Going in is free.',ico:'🆓'}, {txt:'Please come in.',ico:'👋'}] },
            { q: 'Your friend dropped your pen in the water. What do you say?', scene: '🖊️💧👦', ans: 'I forgive you, my friend.', opts: [{txt:'I forgive you, my friend.',ico:'🕊'}, {txt:'I will drop it too.',ico:'😠'}, {txt:'I never talk to you.',ico:'🙅'}] },
            { q: 'Lan, whose English is fluent, can talk to guests. Is Lan good at English?', scene: '👧🗣🇬🇧', ans: 'Yes, her English is fluent.', opts: [{txt:'Yes, her English is fluent.',ico:'🗣'}, {txt:'No, she can\'t speak it.',ico:'🤐'}, {txt:'No, she is foolish.',ico:'🤪'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng vấn người đặc biệt',
            steps: ['<b>Bước 1:</b> Chọn một người em quý (thầy cô, người thân) và một nơi đặc biệt với họ. Viết 3 câu hỏi dùng whose hoặc giới từ + whom, ví dụ <i>"The teacher to whom I talked is kind."</i>', '<b>Bước 2:</b> Viết mỗi ý hai cách: một câu trang trọng có giới từ trước whom (<i>"the friend with whom I walked"</i>) và một câu thường có giới từ ở cuối câu.', '<b>Bước 3:</b> Đọc cả hai cách cho bạn nghe và hỏi bạn thích cách nào hơn, rồi giải thích vì sao cách đầu nghe trang trọng hơn.'] }
        },
        {
          id: '6.12C', name: 'Bài 6.12C: Lễ hội và truyền thống',
          grammar: {
            formulas: ['❄️ It was freezing , + 💬 which + 😮 surprised the town', '👥 many visitors , + 🔢 some of whom + 😤 were frustrated', '🏠 The funeral , + 💬 which we attended , + 😢 was quiet'],
            tip: 'Which có thể thay cho cả mệnh đề trước nó; some/most/many + of whom (người) hoặc of which (vật) luôn đứng sau dấu phẩy!'
          },
          chunks: [
            { scene: '🥶❄️🏘', full: 'It was freezing this morning, which surprised the whole town', parts: [{t:'It',ico:'🌡',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'freezing this morning, which surprised the whole town',ico:'🥶',c:'o'}], traceWord: 'freezing' },
            { scene: '⛄🛣🚗', full: 'The thick frost covered the road, which made us drive slowly', parts: [{t:'The thick frost',ico:'⛄',c:'s'}, {t:'covered',ico:'🧊',c:'v'}, {t:'the road, which made us drive slowly',ico:'🛣',c:'o'}], traceWord: 'frost' },
            { scene: '⛲🧊🪟', full: 'The fountain in the square, which is frozen today, looks like glass', parts: [{t:'The fountain in the square, which is frozen today,',ico:'⛲',c:'s'}, {t:'looks',ico:'👀',c:'v'}, {t:'like glass',ico:'🧊',c:'o'}], traceWord: 'fountain' },
            { scene: '🧊🍦🏠', full: 'Our freezer, which is full of ice cream, is very big', parts: [{t:'Our freezer, which is full of ice cream,',ico:'🧊',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'very big',ico:'📏',c:'o'}], traceWord: 'freezer' },
            { scene: '🎓👧😊', full: 'Mai, a freshman, showed great friendliness, which made everyone smile', parts: [{t:'Mai, a freshman,',ico:'🎓',c:'s'}, {t:'showed',ico:'👋',c:'v'}, {t:'great friendliness, which made everyone smile',ico:'😊',c:'o'}], traceWord: 'freshman' },
            { scene: '👥😤⏳', full: 'We invited many visitors, some of whom were frustrated by the long wait', parts: [{t:'We',ico:'👥',c:'s'}, {t:'invited',ico:'💌',c:'v'}, {t:'many visitors, some of whom were frustrated by the long wait',ico:'😤',c:'o'}], traceWord: 'frustrated' },
            { scene: '👦😖📢', full: 'The boy shouted in frustration, which surprised everyone in the room', parts: [{t:'The boy',ico:'👦',c:'s'}, {t:'shouted',ico:'📢',c:'v'}, {t:'in frustration, which surprised everyone in the room',ico:'😖',c:'o'}], traceWord: 'frustration' },
            { scene: '🖤🏘😢', full: 'The funeral, which we attended in the furthest village, was quiet and sad', parts: [{t:'The funeral, which we attended in the furthest village,',ico:'🖤',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'quiet and sad',ico:'😢',c:'o'}], traceWord: 'funeral' }
          ],
          qaList: [
            { q: 'Which thing keeps a bear warm in winter?', scene: '🐻❄️', ans: 'Its thick fur', opts: [{txt:'Its thick fur',ico:'🦊'}, {txt:'Its wet shoes',ico:'👟'}, {txt:'Its big hat',ico:'🎩'}] },
            { q: 'What do you do when you put chairs and beds in a new house?', scene: '🏠🪑🛏', ans: 'You furnish it.', opts: [{txt:'You furnish it.',ico:'🪑'}, {txt:'You fasten it.',ico:'🔗'}, {txt:'You freeze it.',ico:'🧊'}] },
            { q: 'Mr Lee works from nine to five every day. What kind of job is it?', scene: '👨💼⏰', ans: 'It is a full-time job.', opts: [{txt:'It is a full-time job.',ico:'💼'}, {txt:'It is a free ticket.',ico:'🎫'}, {txt:'It is a small gift.',ico:'🎁'}] },
            { q: 'Why did Lan jump when the dog ran to her?', scene: '👧🐕😱', ans: 'She jumped with fright.', opts: [{txt:'She jumped with fright.',ico:'😱'}, {txt:'She was very sleepy.',ico:'😴'}, {txt:'She wanted lunch.',ico:'🍱'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Báo cáo truyền thống gia đình',
            steps: ['<b>Bước 1:</b> Hỏi người lớn trong nhà về một lễ hội hoặc truyền thống của gia đình. Ghi lại 3 điều thú vị em nghe được.', '<b>Bước 2:</b> Viết 3 câu nối ý bằng which hoặc some/most of whom/which, ví dụ <i>"We invited ten guests, most of whom were family."</i> Nhớ đặt dấu phẩy trước which và whom.', '<b>Bước 3:</b> Trình bày 1 phút cho cả nhà nghe. Mọi người nghe xem em đã dùng "which" thay cho cả ý ở câu nào.'] }
        }
      ]
    },
    '6.13': {
      lessons: [
        {
          id: '6.13A', name: 'Bài 6.13A: Thiết bị công nghệ mới',
          grammar: {
            formulas: ['👧 The girl + 📱 using the tablet + ⚡ is + 🌟 gifted', '🤖 The robot + 🔧 built by Nam + ⚡ can + 💃 dance', '👩 Anna + ⚡ was + 🥇 the first to wear + 👕 a garment'],
            tip: 'Bỏ "who is / that is" cho gọn: who is using → using, that was built → built, the first who wore → the first to wear!'
          },
          chunks: [
            { scene: '👧📱🌟', full: 'The girl using the new tablet is a gifted student', parts: [{t:'The girl using the new tablet',ico:'👧📱',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a gifted student',ico:'🌟',c:'o'}], traceWord: 'gifted' },
            { scene: '🤖💃😮', full: 'Gee, the robot built by that clever boy can dance', parts: [{t:'Gee, the robot built by that clever boy',ico:'😮🤖',c:'s'}, {t:'can',ico:'⚡',c:'v'}, {t:'dance',ico:'💃',c:'o'}], traceWord: 'gee' },
            { scene: '👩‍🏫🌍🗺️', full: 'The teacher teaching geography shows us a map with many geographical details', parts: [{t:'The teacher teaching geography',ico:'👩‍🏫🌍',c:'s'}, {t:'shows',ico:'👉',c:'v'}, {t:'us a map with many geographical details',ico:'🗺️',c:'o'}], traceWord: 'geographical' },
            { scene: '👦🪨📷', full: 'The student studying geology uses a camera to take photos of each stone', parts: [{t:'The student studying geology',ico:'👦🪨',c:'s'}, {t:'uses',ico:'🔧',c:'v'}, {t:'a camera to take photos of each stone',ico:'📷',c:'o'}], traceWord: 'geology' },
            { scene: '👩👕🔋', full: 'Anna was the first girl to wear a garment with a small heater', parts: [{t:'Anna',ico:'👩',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'the first girl to wear a garment with a small heater',ico:'👕🔥',c:'o'}], traceWord: 'garment' },
            { scene: '👦😒📱', full: 'The boy making a fuss about the broken phone is my brother', parts: [{t:'The boy making a fuss about the broken phone',ico:'👦😒',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'my brother',ico:'👦',c:'o'}], traceWord: 'fuss' },
            { scene: '👨📱😠💰', full: 'The man selling the old phone had the gall to ask for a lot of money', parts: [{t:'The man selling the old phone',ico:'👨📱',c:'s'}, {t:'had',ico:'🤲',c:'v'}, {t:'the gall to ask for a lot of money',ico:'😠💰',c:'o'}], traceWord: 'gall' },
            { scene: '👧✨📦', full: 'Mai was the only one to see a glint of gold in the box', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'the only one to see a glint of gold in the box',ico:'✨📦',c:'o'}], traceWord: 'glint' }
          ],
          qaList: [
            { q: 'What did the girl looking at the sky see?', scene: '👧🦅👀', ans: 'She caught a glimpse of a bird in a slow glide', opts: [{ txt: 'She caught a glimpse of a bird in a slow glide', ico: '🦅' }, { txt: 'She bought new shoes and a red hat', ico: '👟' }, { txt: 'She went home by bus after the class', ico: '🚌' }] },
            { q: 'Who is the man planting flowers in the garden?', scene: '👨🌱🌸', ans: 'He is my uncle, a generous man who loves gardening', opts: [{ txt: 'He is my uncle, a generous man who loves gardening', ico: '🌱' }, { txt: 'He is a doctor working at the hospital', ico: '🏥' }, { txt: 'They are my friends from the school', ico: '🏫' }] },
            { q: 'What did Mom buy at the market for the soup?', scene: '👩🛒🍲', ans: 'She bought ginger and a gallon of milk', opts: [{ txt: 'She bought ginger and a gallon of milk', ico: '🌿⛽' }, { txt: 'She bought a pink dress and a new bag', ico: '👗' }, { txt: 'She watched a funny film at the cinema', ico: '🎬' }] },
            { q: 'What did the class hear after the funny video?', scene: '🏫🤭📹', ans: 'We heard a loud giggle from the back of the class', opts: [{ txt: 'We heard a loud giggle from the back of the class', ico: '🤭' }, { txt: 'We saw a big truck outside the school', ico: '🚚' }, { txt: 'The teacher gave us a lot of homework', ico: '📚' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thuyết Trình Mini Về Thiết Bị Em Thích',
            steps: [
              '<b>Bước 1:</b> Chọn 3 thiết bị công nghệ trong nhà (điện thoại, máy tính bảng, tai nghe...) và viết mỗi thiết bị một câu rút gọn, ví dụ: <i>"The boy using the tablet is my brother."</i>',
              '<b>Bước 2:</b> Đổi câu đầy đủ (who is using...) thành câu rút gọn (using...), rồi đọc cho bạn hoặc người thân kiểm tra xem đã bỏ đúng "who is / that is" chưa.',
              '<b>Bước 3:</b> Thuyết trình 1 phút về thiết bị em thích nhất, dùng ít nhất 2 câu có <i>"the first to"</i> hoặc <i>"the only one to"</i>.'
            ]
          }
        },
        {
          id: '6.13B', name: 'Bài 6.13B: Thí nghiệm khoa học',
          grammar: {
            formulas: ['😄 Feeling excited, + 👦 Tom + ⚡ began + 🔬 the test', '✅ Having finished, + 👧 Lan + ⚡ cleaned + 🧪 the table', '🏗️ Built to catch balls, + 🤖 the robot + ⚡ stopped + ⚽ every shot'],
            tip: 'Hai việc cùng MỘT người làm thì bỏ chủ ngữ vế phụ: Feeling tired = Because I felt tired. Having finished = làm xong rồi mới làm tiếp!'
          },
          chunks: [
            { scene: '😄🧑‍🔬🌅', full: 'Feeling excited, the class started the experiment on a glorious sunny morning', parts: [{t:'Feeling excited, the class',ico:'😄🧑‍🎓',c:'s'}, {t:'started',ico:'▶️',c:'v'}, {t:'the experiment on a glorious sunny morning',ico:'🧪🌅',c:'o'}], traceWord: 'glorious' },
            { scene: '✅💻📊', full: 'Having finished the experiment, Tom drew the results with simple graphics on his computer', parts: [{t:'Having finished the experiment, Tom',ico:'✅👦',c:'s'}, {t:'drew',ico:'✏️',c:'v'}, {t:'the results with simple graphics on his computer',ico:'📊💻',c:'o'}], traceWord: 'graphics' },
            { scene: '🎨👧📋', full: 'Using graphic design, Lan made a clear poster about the experiment', parts: [{t:'Using graphic design, Lan',ico:'🎨👧',c:'s'}, {t:'made',ico:'🛠️',c:'v'}, {t:'a clear poster about the experiment',ico:'📋🧪',c:'o'}], traceWord: 'graphic' },
            { scene: '🦍🪵💧📝', full: 'Watching a gorilla use a stick in the water, the scientist wrote down every step', parts: [{t:'Watching a gorilla use a stick in the water, the scientist',ico:'🦍🧑‍🔬',c:'s'}, {t:'wrote down',ico:'✍️',c:'v'}, {t:'every step',ico:'📝',c:'o'}], traceWord: 'gorilla' },
            { scene: '🥅🤖⚽', full: 'Built to catch fast balls, the robot goalkeeper stopped every shot in the test', parts: [{t:'Built to catch fast balls, the robot goalkeeper',ico:'🤖🥅',c:'s'}, {t:'stopped',ico:'✋',c:'v'}, {t:'every shot in the test',ico:'⚽',c:'o'}], traceWord: 'goalkeeper' },
            { scene: '⛳🌬️🌿', full: 'Wanting to test the wind, the golfer threw some grass into the air', parts: [{t:'Wanting to test the wind, the golfer',ico:'🌬️⛳',c:'s'}, {t:'threw',ico:'🤾',c:'v'}, {t:'some grass into the air',ico:'🌿',c:'o'}], traceWord: 'golfer' },
            { scene: '👸🗿😍', full: 'Seen from far away, the statue of the goddess looked gorgeous in the sunlight', parts: [{t:'Seen from far away, the statue of the goddess',ico:'👀👸',c:'s'}, {t:'looked',ico:'👁️',c:'v'}, {t:'gorgeous in the sunlight',ico:'😍☀️',c:'o'}], traceWord: 'goddess' },
            { scene: '👧💬🧪', full: 'Hearing some gossip about the experiment, Mai asked her teacher for the real facts', parts: [{t:'Hearing some gossip about the experiment, Mai',ico:'💬👧',c:'s'}, {t:'asked',ico:'🙋',c:'v'}, {t:'her teacher for the real facts',ico:'👩‍🏫📖',c:'o'}], traceWord: 'gossip' }
          ],
          qaList: [
            { q: 'What is Lan wearing at her graduation?', scene: '👧🎓👗', ans: 'She is wearing a long white gown today', opts: [{ txt: 'She is wearing a long white gown today', ico: '👗' }, { txt: 'She is playing football in the park', ico: '⚽' }, { txt: 'She is cooking rice in the kitchen', ico: '🍚' }] },
            { q: 'How did the dancer feel after the show?', scene: '🩰🙏👏', ans: 'Feeling full of gratitude, she gave a graceful bow', opts: [{ txt: 'Feeling full of gratitude, she gave a graceful bow', ico: '🙏' }, { txt: 'Feeling very sleepy, she went to the zoo', ico: '🦁' }, { txt: 'Feeling hungry, he ate a big burger', ico: '🍔' }] },
            { q: 'What does the old book tell us about the king?', scene: '📖👑🪦', ans: 'It tells of his glory and shows his grave near the river', opts: [{ txt: 'It tells of his glory and shows his grave near the river', ico: '🏆🪦' }, { txt: 'It says he sold fruit at a small shop', ico: '🍎' }, { txt: 'It says he lives in a new flat', ico: '🏢' }] },
            { q: 'What did Dad put on the potatoes for dinner?', scene: '👨🥔🍲', ans: 'He put hot gravy on the potatoes for dinner', opts: [{ txt: 'He put hot gravy on the potatoes for dinner', ico: '🍲' }, { txt: 'He put a blue hat on the table', ico: '🧢' }, { txt: 'He put his shoes in the box', ico: '👟' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật Ký Thí Nghiệm Tại Nhà',
            steps: [
              '<b>Bước 1:</b> Làm một thí nghiệm nhỏ với đồ có sẵn (ví dụ thả muối hoặc đường vào cốc nước ấm và quan sát). Ghi lại các bước vào vở.',
              '<b>Bước 2:</b> Viết 3 câu nhật ký dùng phân từ, ví dụ: <i>"Feeling excited, I mixed the sugar with water."</i> và <i>"Having finished the test, I wrote the result."</i>',
              '<b>Bước 3:</b> Đọc nhật ký cho bạn nghe, rồi cùng kiểm tra: người làm hai việc trong mỗi câu có phải là CÙNG một người không?'
            ]
          }
        },
        {
          id: '6.13C', name: 'Bài 6.13C: Hành trình khám phá',
          grammar: {
            formulas: ['🚶 While walking, + 👧 Lan + ⚡ found + 🔨 a hammer', '🍽️ After eating, + 👦 Tom + ⚡ washed + 🥣 the dishes', '🎁 When given help, + 👩 she + ⚡ felt + 😊 happy'],
            tip: 'Sau while / after / before / since + V-ing, người làm việc đó phải là chủ ngữ của vế chính. Khi bị làm (được cho, được hỏi): when + V3!'
          },
          chunks: [
            { scene: '🚶🌱🔨', full: 'While walking to the greenhouse, Lan found a small hammer on the path', parts: [{t:'While walking to the greenhouse, Lan',ico:'🚶🌱',c:'s'}, {t:'found',ico:'🔍',c:'v'}, {t:'a small hammer on the path',ico:'🔨',c:'o'}], traceWord: 'greenhouse' },
            { scene: '👋🧭📻', full: 'After saying a warm greeting, the guide gave each of us a hand-held radio', parts: [{t:'After saying a warm greeting, the guide',ico:'👋🧭',c:'s'}, {t:'gave',ico:'🎁',c:'v'}, {t:'each of us a hand-held radio',ico:'📻',c:'o'}], traceWord: 'greeting' },
            { scene: '🎸🍖🏕️', full: 'Before leaving the campsite, the guitarist played a quiet song near the grill', parts: [{t:'Before leaving the campsite, the guitarist',ico:'🏕️🎸',c:'s'}, {t:'played',ico:'🎶',c:'v'}, {t:'a quiet song near the grill',ico:'🎵🍖',c:'o'}], traceWord: 'guitarist' },
            { scene: '🤵🏨🚶', full: 'Since arriving at the hotel, the groom has taken a long walk every morning', parts: [{t:'Since arriving at the hotel, the groom',ico:'🏨🤵',c:'s'}, {t:'has taken',ico:'🚶',c:'v'}, {t:'a long walk every morning',ico:'🌅',c:'o'}], traceWord: 'groom' },
            { scene: '💪🤸👧', full: 'While waiting at the gym, Mai watched a gymnastics class for the first time', parts: [{t:'While waiting at the gym, Mai',ico:'💪👧',c:'s'}, {t:'watched',ico:'👀',c:'v'}, {t:'a gymnastics class for the first time',ico:'🤸',c:'o'}], traceWord: 'gymnastics' },
            { scene: '💇💨🎒', full: 'When asked for help, the hairdresser used her hairdryer to dry our wet bags', parts: [{t:'When asked for help, the hairdresser',ico:'🙋💇',c:'s'}, {t:'used',ico:'🔧',c:'v'}, {t:'her hairdryer to dry our wet bags',ico:'💨🎒',c:'o'}], traceWord: 'hairdryer' },
            { scene: '🤾🏖️🥵', full: 'After playing handball on the beach, the children felt hot and thirsty', parts: [{t:'After playing handball on the beach, the children',ico:'🤾🏖️',c:'s'}, {t:'felt',ico:'💭',c:'v'}, {t:'hot and thirsty',ico:'🥵💧',c:'o'}], traceWord: 'handball' },
            { scene: '🧭📂🗺️', full: 'When given good guidance, the students finished the grouping of the maps quickly', parts: [{t:'When given good guidance, the students',ico:'🧭🧑‍🎓',c:'s'}, {t:'finished',ico:'✅',c:'v'}, {t:'the grouping of the maps quickly',ico:'📂🗺️',c:'o'}], traceWord: 'guidance' }
          ],
          qaList: [
            { q: 'How did Tom feel after he broke the window?', scene: '👦🪟😔', ans: 'Feeling a lot of guilt, he said sorry to his neighbor', opts: [{ txt: 'Feeling a lot of guilt, he said sorry to his neighbor', ico: '😔' }, { txt: 'Feeling very proud, he won a big prize', ico: '🏆' }, { txt: 'Feeling cold, he put on a thick coat', ico: '🧥' }] },
            { q: 'What should we do before crossing the road?', scene: '🚸🛣️👀', ans: 'Before crossing the road, we should look both ways', opts: [{ txt: 'Before crossing the road, we should look both ways', ico: '👀' }, { txt: 'Before crossing the road, we should eat ice cream', ico: '🍦' }, { txt: 'Before crossing the road, we should close our eyes', ico: '🙈' }] },
            { q: 'What did Mai do while waiting for the bus?', scene: '👧🚌📖', ans: 'While waiting for the bus, she read a book', opts: [{ txt: 'While waiting for the bus, she read a book', ico: '📖' }, { txt: 'While waiting for the bus, she swam in the sea', ico: '🏊' }, { txt: 'While waiting for the bus, she painted the roof', ico: '🎨' }] },
            { q: 'How did the boy feel when given the prize?', scene: '👦🏆😊', ans: 'When given the prize, he felt very proud', opts: [{ txt: 'When given the prize, he felt very proud', ico: '🏆' }, { txt: 'When given the prize, he went to bed early', ico: '🛏️' }, { txt: 'When given the prize, he cooked a big dinner', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật Ký Hành Trình Một Ngày',
            steps: [
              '<b>Bước 1:</b> Nhớ lại một chuyến đi hoặc một buổi đi chơi gần đây và viết ra 4 việc em đã làm theo thứ tự thời gian.',
              '<b>Bước 2:</b> Nối các việc bằng while / after / before / since + V-ing, ví dụ: <i>"After arriving at the park, I played handball."</i> Chú ý người làm hai việc phải là cùng một người.',
              '<b>Bước 3:</b> Kể hành trình cho bạn nghe trong 1 phút; bạn lắng nghe và tìm xem có câu phân từ treo nào cần sửa không.'
            ]
          }
        }
      ]
    },
    '6.14': {
      lessons: [
        {
        id: '6.14A',
        name: 'Bài 6.14A: Sở thích và thời gian rảnh',
        grammar: {
        formulas: ['👦 I + ⚡ remember packing + 🤧 a handkerchief', '👦 I + ⚡ tried using + 🧰 a handy app', '👦 I + ⚡ regret ignoring + 🚧 the sign'],
        tip: 'Nhớ nhé: remember/forget/regret + V-ing là chuyện ĐÃ xảy ra, còn + to V là việc SẼ phải làm; stop + V-ing là dừng hẳn, stop + to V là dừng lại để làm việc khác!'
        },
        chunks: [
        { scene: '🎒🤧✈', full: 'I remember packing a handkerchief for the long trip', parts: [{t:'I',ico:'👦',c:'s'},{t:'remember packing',ico:'🎒',c:'v'},{t:'a handkerchief for the long trip',ico:'🤧',c:'o'}], traceWord: 'handkerchief' },
        { scene: '📝✏🌙', full: 'I never forget to practice my handwriting every evening', parts: [{t:'I',ico:'👦',c:'s'},{t:'never forget to practice',ico:'🔁',c:'v'},{t:'my handwriting every evening',ico:'📝',c:'o'}], traceWord: 'handwriting' },
        { scene: '🤝😊🕊', full: 'He stopped talking and offered a firm handshake without any hatred', parts: [{t:'He',ico:'👨',c:'s'},{t:'stopped talking and offered',ico:'🤐',c:'v'},{t:'a firm handshake without any hatred',ico:'🤝',c:'o'}], traceWord: 'handshake' },
        { scene: '📱🧰⏰', full: 'I tried using a handy tool to save time on my homework', parts: [{t:'I',ico:'👦',c:'s'},{t:'tried using',ico:'📱',c:'v'},{t:'a handy tool to save time on my homework',ico:'🧰',c:'o'}], traceWord: 'handy' },
        { scene: '🐜👥🌃', full: 'Mai went on working with her hard-working team until night', parts: [{t:'Mai',ico:'👧',c:'s'},{t:'went on working',ico:'💼',c:'v'},{t:'with her hard-working team until night',ico:'🐜',c:'o'}], traceWord: 'working' },
        { scene: '🚪💡🔒', full: 'We tried to open the hatch under the hanging lamp, but it was stuck', parts: [{t:'We',ico:'👫',c:'s'},{t:'tried to open',ico:'🔑',c:'v'},{t:'the hatch under the hanging lamp, but it was stuck',ico:'🚪',c:'o'}], traceWord: 'hatch' },
        { scene: '🚧🌊🏞', full: 'I regret ignoring the hazard sign near our old haunt by the river', parts: [{t:'I',ico:'👦',c:'s'},{t:'regret ignoring',ico:'😔',c:'v'},{t:'the hazard sign near our old haunt by the river',ico:'🚧',c:'o'}], traceWord: 'hazard' },
        { scene: '🏙😥📚', full: 'Moving here meant facing hardship, but the library became my haven', parts: [{t:'Moving here',ico:'🚚',c:'s'},{t:'meant facing',ico:'💪',c:'v'},{t:'hardship, but the library became my haven',ico:'🌴',c:'o'}], traceWord: 'hardship' }
        ],
        qaList: [
        { q: 'What did Tom stop doing to read the headline?', scene: '📰🚶', ans: 'He stopped walking', opts: [{txt:'He stopped walking',ico:'🚶'},{txt:'He started to sing',ico:'🎤'},{txt:'He stopped the rain',ico:'🌧'}] },
        { q: 'How long did the cut take to heal?', scene: '🩹📅', ans: 'It took two weeks', opts: [{txt:'It took two weeks',ico:'📅'},{txt:'It was very cold',ico:'🥶'},{txt:'It cost ten dollars',ico:'💵'}] },
        { q: 'Why did she regret her hasty decision?', scene: '⚡😔', ans: 'She did not think carefully', opts: [{txt:'She did not think carefully',ico:'🤔'},{txt:'She won the big prize',ico:'🏆'},{txt:'She was very happy',ico:'😄'}] },
        { q: 'What did Lan forget to check on the horse?', scene: '🐴👧', ans: 'She forgot to check the harness', opts: [{txt:'She forgot to check the harness',ico:'🐴'},{txt:'She forgot to check the exam',ico:'📄'},{txt:'She forgot to check the moon',ico:'🌙'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký thói quen',
        steps: ['<b>Bước 1:</b> Viết 3 câu về những việc bạn nhớ đã làm và những việc bạn đừng quên làm, ví dụ <i>"I remember packing my bag."</i> và <i>"I must remember to call Mai."</i>', '<b>Bước 2:</b> Chia sẻ với bạn và giải thích khác biệt: remember + V-ing (việc đã xảy ra) và remember + to V (việc cần làm).', '<b>Bước 3:</b> Cùng bạn viết thêm 2 câu với stop, try hoặc regret rồi đọc to, đoán xem nghĩa thay đổi thế nào.']
        }
        },
        {
        id: '6.14B',
        name: 'Bài 6.14B: Thành tích và kỷ niệm',
        grammar: {
        formulas: ['👦 I + ⚡ am proud of having + 🏆 won', '👦 He + ⚡ seems to have + 📜 lost it', '👦 She + ⚡ enjoys being + 🙏 thanked'],
        tip: 'Việc đã xảy ra TRƯỚC thì dùng having + V3 hoặc to have + V3, còn khi chủ ngữ BỊ tác động thì dùng being + V3 hoặc to be + V3!'
        },
        chunks: [
        { scene: '🏃🦶🏁', full: 'He held his sore heel after having finished the race', parts: [{t:'He',ico:'👨',c:'s'},{t:'held',ico:'🤲',c:'v'},{t:'his sore heel after having finished the race',ico:'🦶',c:'o'}], traceWord: 'heel' },
        { scene: '🏚👨‍👩‍👧❄', full: 'She was proud of having helped a homeless family last winter', parts: [{t:'She',ico:'👧',c:'s'},{t:'was proud of having helped',ico:'🤲',c:'v'},{t:'a homeless family last winter',ico:'🏚',c:'o'}], traceWord: 'homeless' },
        { scene: '💛🙏😊', full: 'He enjoys being thanked for his kind help', parts: [{t:'He',ico:'👨',c:'s'},{t:'enjoys being thanked',ico:'🙏',c:'v'},{t:'for his kind help',ico:'💛',c:'o'}], traceWord: 'thanked' },
        { scene: '👴👂🎵', full: 'The old man seems to have lost his hearing years ago', parts: [{t:'The old man',ico:'👴',c:'s'},{t:'seems to have lost',ico:'😕',c:'v'},{t:'his hearing years ago',ico:'👂',c:'o'}], traceWord: 'hearing' },
        { scene: '👧😞🤝', full: 'Anna honestly admitted having felt helpless at first', parts: [{t:'Anna',ico:'👧',c:'s'},{t:'honestly admitted',ico:'🤞',c:'v'},{t:'having felt helpless at first',ico:'😞',c:'o'}], traceWord: 'honestly' },
        { scene: '🕵🛤🛐', full: 'We were happy to have found a hidden path to the holy temple', parts: [{t:'We',ico:'👫',c:'s'},{t:'were happy to have found',ico:'😊',c:'v'},{t:'a hidden path to the holy temple',ico:'🛐',c:'o'}], traceWord: 'hidden' },
        { scene: '♨🔧❄', full: 'The old heater needs to be repaired before winter comes', parts: [{t:'The old heater',ico:'♨',c:'s'},{t:'needs to be repaired',ico:'🔧',c:'v'},{t:'before winter comes',ico:'❄',c:'o'}], traceWord: 'heater' },
        { scene: '🛏😴☁', full: 'The soft bed felt like heaven to him after being tired all day', parts: [{t:'The soft bed',ico:'🛏',c:'s'},{t:'felt like',ico:'💭',c:'v'},{t:'heaven to him after being tired all day',ico:'☁',c:'o'}], traceWord: 'heaven' }
        ],
        qaList: [
        { q: 'What did each cow in the herd want to be?', scene: '🐃🌾', ans: 'It wanted to be fed first', opts: [{txt:'It wanted to be fed first',ico:'🌾'},{txt:'It wanted to be a phone',ico:'📱'},{txt:'It wanted to be on a plane',ico:'✈'}] },
        { q: 'Why was she proud of having helped people with HIV?', scene: '🎗🤲', ans: 'She gave them support', opts: [{txt:'She gave them support',ico:'🤲'},{txt:'She took their money',ico:'💰'},{txt:'She left them alone',ico:'🚶'}] },
        { q: 'Why was the hearty dinner so good?', scene: '🍲😋', ans: 'It was warm and tasty', opts: [{txt:'It was warm and tasty',ico:'🍲'},{txt:'It was cold and bad',ico:'🥶'},{txt:'It was small and sad',ico:'😢'}] },
        { q: 'How does the healing tea taste after being sick?', scene: '🍵💚', ans: 'It tastes heavenly', opts: [{txt:'It tastes heavenly',ico:'😇'},{txt:'It tastes very loud',ico:'🔊'},{txt:'It tastes very square',ico:'⬛'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Thành tích của tôi',
        steps: ['<b>Bước 1:</b> Viết 3 điều bạn tự hào đã làm được, dùng mẫu <i>"I am proud of having finished..."</i> hoặc <i>"I am happy to have learned..."</i>', '<b>Bước 2:</b> Viết 2 câu về việc bạn được khen hoặc được giúp, dùng <i>"I enjoy being thanked"</i> hoặc <i>"I was glad to be helped."</i>', '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn hoặc người thân nghe, rồi cùng nhau kiểm tra xem dùng having V3 và being V3 đã đúng chưa.']
        }
        },
        {
        id: '6.14C',
        name: 'Bài 6.14C: Quan sát thế giới xung quanh',
        grammar: {
        formulas: ['👦 I + 👂 heard + 📯 a horn blowing', '👦 We + 👀 noticed + 🦘 the frog take a hop', '👧 She + ❤ loves + 🌟 to watch her idol'],
        tip: 'Thấy/nghe TOÀN BỘ hành động thì dùng O + V nguyên mẫu, còn thấy hành động ĐANG diễn ra thì dùng O + V-ing; like/love/hate đi được với cả to V và V-ing!'
        },
        chunks: [
        { scene: '📯🚗🛏', full: 'I heard a horn blowing loudly outside the hostel', parts: [{t:'I',ico:'👦',c:'s'},{t:'heard',ico:'👂',c:'v'},{t:'a horn blowing loudly outside the hostel',ico:'📯',c:'o'}], traceWord: 'horn' },
        { scene: '🐸🦘💧', full: 'We noticed the frog take one small hop across the humid path', parts: [{t:'We',ico:'👫',c:'s'},{t:'noticed',ico:'👀',c:'v'},{t:'the frog take one small hop across the humid path',ico:'🦘',c:'o'}], traceWord: 'hop' },
        { scene: '🧹😩☀', full: 'My sister hates doing housework on sunny weekends', parts: [{t:'My sister',ico:'👧',c:'s'},{t:'hates doing',ico:'😩',c:'v'},{t:'housework on sunny weekends',ico:'🧹',c:'o'}], traceWord: 'housework' },
        { scene: '🌟🎤👧', full: 'Lan loves to watch her idol sing on stage', parts: [{t:'Lan',ico:'👧',c:'s'},{t:'loves to watch',ico:'❤',c:'v'},{t:'her idol sing on stage',ico:'🌟',c:'o'}], traceWord: 'idol' },
        { scene: '🏃🛖🌧', full: 'We saw the man hurriedly leave his hut in the rain', parts: [{t:'We',ico:'👫',c:'s'},{t:'saw',ico:'👀',c:'v'},{t:'the man hurriedly leave his hut in the rain',ico:'🛖',c:'o'}], traceWord: 'hurriedly' },
        { scene: '😄💬👂', full: 'Everyone likes listening to his humorous story about an old idiom', parts: [{t:'Everyone',ico:'👥',c:'s'},{t:'likes listening to',ico:'👂',c:'v'},{t:'his humorous story about an old idiom',ico:'😄',c:'o'}], traceWord: 'humorous' },
        { scene: '👨‍🏫🤝🤞', full: 'Mr Lee noticed the students showing honesty, and he felt hopeful', parts: [{t:'Mr Lee',ico:'👨‍🏫',c:'s'},{t:'noticed',ico:'👀',c:'v'},{t:'the students showing honesty, and he felt hopeful',ico:'🤝',c:'o'}], traceWord: 'honesty' },
        { scene: '💑🏝🌅', full: 'They love spending their honeymoon on a quiet island', parts: [{t:'They',ico:'💑',c:'s'},{t:'love spending',ico:'❤',c:'v'},{t:'their honeymoon on a quiet island',ico:'🏝',c:'o'}], traceWord: 'honeymoon' }
        ],
        qaList: [
        { q: 'Why did the scary film horrify the children?', scene: '🎬😱', ans: 'It was too scary', opts: [{txt:'It was too scary',ico:'😱'},{txt:'It was too sweet',ico:'🍬'},{txt:'It was too round',ico:'⚪'}] },
        { q: 'How did the lost boy feel when he heard no answer?', scene: '🧒😔', ans: 'He felt hopeless', opts: [{txt:'He felt hopeless',ico:'😔'},{txt:'He felt very full',ico:'🍽'},{txt:'He felt very hot',ico:'🥵'}] },
        { q: 'What does the teacher love to see in her students?', scene: '👩‍🏫🌍', ans: 'She loves to see humanity', opts: [{txt:'She loves to see humanity',ico:'🌍'},{txt:'She loves to see trash',ico:'🗑'},{txt:'She loves to see anger',ico:'😠'}] },
        { q: 'What did you watch from the window?', scene: '🪟👴🚦', ans: 'I watched an old man cross the road', opts: [{txt:'I watched an old man cross the road',ico:'👴'},{txt:'I watched a cup cross the sky',ico:'☕'},{txt:'I watched a shoe drink the road',ico:'👟'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Nhà quan sát nhỏ',
        steps: ['<b>Bước 1:</b> Ngồi ở cửa sổ hoặc ban công 3 phút, ghi lại 4 điều bạn thấy hoặc nghe, dùng mẫu <i>"I saw a man cross the road."</i> và <i>"I heard a horn blowing."</i>', '<b>Bước 2:</b> Viết 3 câu về việc bạn thích hoặc ghét làm, dùng <i>"I love to ..."</i> và <i>"I hate doing ..."</i>', '<b>Bước 3:</b> Đọc to cho bạn nghe, bạn đoán và sửa xem bạn nên dùng V nguyên mẫu hay V-ing sau mỗi động từ tri giác.']
        }
        }
      ]
    },
    '6.15': {
      lessons: [
        {
        id: '6.15A',
        name: 'Bài 6.15A: Chuyến đi khó quên',
        grammar: {
        formulas: ['🚫 Never + ⚡ have + 👦 I + 🍔 seen it', '😮 Rarely / Seldom + ⚡ do + 👨‍👩‍👧 they + 🏃 go', '🤔 Little + ⚡ did + 👦 we + 💡 know'],
        tip: 'Mở câu bằng Never, Rarely, Seldom hay Little thì trợ động từ phải chạy lên trước chủ ngữ, như xe buýt đón khách trước khi vào bến!'
        },
        chunks: [
        { scene: '🚗🚫🏙', full: 'Never have we parked illegally in a foreign city.', parts: [{t:'Never have',ico:'🚫',c:'v'},{t:'we',ico:'👨‍👩‍👧',c:'s'},{t:'parked illegally in a foreign city.',ico:'🚗',c:'o'}], traceWord: 'illegally' },
        { scene: '💡🛣🌙', full: 'Rarely does the lamp illuminate the whole road at night.', parts: [{t:'Rarely does',ico:'😮',c:'v'},{t:'the lamp',ico:'💡',c:'s'},{t:'illuminate the whole road at night.',ico:'🛣',c:'o'}], traceWord: 'illuminate' },
        { scene: '🪞👧💭', full: 'Never do children imitate imaginary heroes during a long trip.', parts: [{t:'Never do',ico:'🚫',c:'v'},{t:'children',ico:'🧒',c:'s'},{t:'imitate imaginary heroes during a long trip.',ico:'🪞',c:'o'}], traceWord: 'imaginary' },
        { scene: '🛃⏳✈', full: 'Little did we know that long lines at immigration were inevitable.', parts: [{t:'Little did',ico:'🤔',c:'v'},{t:'we',ico:'👨‍👩‍👧',c:'s'},{t:'know that long lines at immigration were inevitable.',ico:'🛃',c:'o'}], traceWord: 'immigration' },
        { scene: '👮❓🛫', full: 'Rarely has an officer asked such improper questions at the airport.', parts: [{t:'Rarely has',ico:'😮',c:'v'},{t:'an officer',ico:'👮',c:'s'},{t:'asked such improper questions at the airport.',ico:'🚫',c:'o'}], traceWord: 'improper' },
        { scene: '🏨🍳➕', full: 'Rarely is a hotel including free breakfast inconvenient for tired travelers.', parts: [{t:'Rarely is',ico:'😮',c:'v'},{t:'a hotel including free breakfast',ico:'🏨',c:'s'},{t:'inconvenient for tired travelers.',ico:'😣',c:'o'}], traceWord: 'including' },
        { scene: '📝❌👧', full: 'Little did Lan realize that her answer on the form was incorrect.', parts: [{t:'Little did',ico:'🤔',c:'v'},{t:'Lan',ico:'👧',c:'s'},{t:'realize that her answer on the form was incorrect.',ico:'❌',c:'o'}], traceWord: 'incorrect' },
        { scene: '🏠🌧☀', full: 'Rarely do we stay indoors when the weather is nice on holiday.', parts: [{t:'Rarely do',ico:'😮',c:'v'},{t:'we',ico:'👨‍👩‍👧',c:'s'},{t:'stay indoors when the weather is nice on holiday.',ico:'🏠',c:'o'}], traceWord: 'indoors' }
        ],
        qaList: [
        { q: 'Why do some families want to immigrate to another country?', scene: '✈🏠', ans: 'They want better jobs and a safer home.', opts: [{txt:'They want better jobs and a safer home.',ico:'✈'},{txt:'They want to sleep all day and night.',ico:'😴'},{txt:'They want to lose their old shoes.',ico:'👟'}] },
        { q: 'What can heavy fog impair on a mountain road?', scene: '🌫🏔🚗', ans: 'Our view of the road.', opts: [{txt:'Our view of the road.',ico:'🌫'},{txt:'The price of the ticket.',ico:'🎫'},{txt:'Our favorite song at home.',ico:'🎵'}] },
        { q: 'How did Mai hear the news about the trip?', scene: '👧📣🗺', ans: 'She heard it indirectly from a friend.', opts: [{txt:'She heard it indirectly from a friend.',ico:'🔀'},{txt:'She heard it from a talking tree.',ico:'🌳'},{txt:'She heard it before she was five.',ico:'👶'}] },
        { q: 'Which part is the infinitive in the sentence "I want to travel"?', scene: '📘🧳', ans: 'to travel', opts: [{txt:'to travel',ico:'📘'},{txt:'I want',ico:'👦'},{txt:'a long trip',ico:'🧳'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký chuyến đi đảo ngữ',
        steps: [
        '<b>Bước 1:</b> Nhớ lại một chuyến đi của em (hoặc tưởng tượng một chuyến đi). Viết ra 3 điều em chưa bao giờ làm hoặc hiếm khi làm trong chuyến đó.',
        '<b>Bước 2:</b> Viết lại mỗi ý bằng đảo ngữ, ví dụ <i>"Never have I seen such a beautiful beach."</i> và <i>"Rarely do we stay indoors on holiday."</i> Nhớ đưa trợ động từ lên trước chủ ngữ.',
        '<b>Bước 3:</b> Đọc 3 câu cho một bạn hoặc người nhà nghe, rồi để họ kiểm tra xem em đã đảo đúng thứ tự trợ động từ và chủ ngữ chưa.'
        ]
        }
        },
        {
        id: '6.15B',
        name: 'Bài 6.15B: Sự cố bất ngờ khi du lịch',
        grammar: {
        formulas: ['⏱ Hardly + ⚡ had + 👦 we + 🚪 left ... when + 🌧 it rained', '⏱ Scarcely + ⚡ had + 👦 I + 🛫 arrived ... when + 📞 it rang', '⚡ No sooner + ⚡ had + 👦 they + 🍽 eaten ... than + 🌧 it rained'],
        tip: 'Hardly và Scarcely đi với when, còn No sooner đi với than; cả ba đều dùng had + chủ ngữ + V3 cho việc xảy ra trước, và việc xảy ra sau chia quá khứ đơn.'
        },
        chunks: [
        { scene: '🚌🧑‍🏫📚', full: 'Hardly had the guide begun the informative tour when the bus stopped.', parts: [{t:'Hardly had',ico:'⏱',c:'v'},{t:'the guide',ico:'🧑‍🏫',c:'s'},{t:'begun the informative tour when the bus stopped.',ico:'🚌',c:'o'}], traceWord: 'informative' },
        { scene: '🍲🥕😮', full: 'No sooner had we ordered the meal than the cook lost every ingredient.', parts: [{t:'No sooner had',ico:'⏱',c:'v'},{t:'we',ico:'👨‍👩‍👧',c:'s'},{t:'ordered the meal than the cook lost every ingredient.',ico:'🥕',c:'o'}], traceWord: 'ingredient' },
        { scene: '🏘🌧🏃', full: 'Hardly had the inhabitants left the village when the storm arrived.', parts: [{t:'Hardly had',ico:'⏱',c:'v'},{t:'the inhabitants',ico:'🏘',c:'s'},{t:'left the village when the storm arrived.',ico:'⛈',c:'o'}], traceWord: 'inhabitants' },
        { scene: '🏔💨😌', full: 'No sooner had we inhaled the cold air than we felt better.', parts: [{t:'No sooner had',ico:'⏱',c:'v'},{t:'we',ico:'👨‍👩‍👧',c:'s'},{t:'inhaled the cold air than we felt better.',ico:'💨',c:'o'}], traceWord: 'inhaled' },
        { scene: '🧑🧴📝', full: 'Hardly had the instructor opened the bottle of ink when it fell.', parts: [{t:'Hardly had',ico:'⏱',c:'v'},{t:'the instructor',ico:'🧑',c:'s'},{t:'opened the bottle of ink when it fell.',ico:'🧴',c:'o'}], traceWord: 'instructor' },
        { scene: '💡🏫👏', full: 'No sooner had the innovator shown the idea than the whole institute applauded.', parts: [{t:'No sooner had',ico:'⏱',c:'v'},{t:'the innovator',ico:'💡',c:'s'},{t:'shown the idea than the whole institute applauded.',ico:'🏫',c:'o'}], traceWord: 'institute' },
        { scene: '🎭⏸🌍', full: 'Hardly had the intermission begun when an internationally famous singer arrived.', parts: [{t:'Hardly had',ico:'⏱',c:'v'},{t:'the intermission',ico:'🎭',c:'s'},{t:'begun when an internationally famous singer arrived.',ico:'🌍',c:'o'}], traceWord: 'intermission' },
        { scene: '🔍🚪🎯', full: 'Hardly had the inspection ended when the guard intentionally closed the gate.', parts: [{t:'Hardly had',ico:'⏱',c:'v'},{t:'the inspection',ico:'🔍',c:'s'},{t:'ended when the guard intentionally closed the gate.',ico:'🚪',c:'o'}], traceWord: 'inspection' }
        ],
        qaList: [
        { q: 'Is it insane to climb a mountain in a big storm?', scene: '⛈🏔🤪', ans: 'Yes, it is insane and dangerous.', opts: [{txt:'Yes, it is insane and dangerous.',ico:'🤪'},{txt:'No, it is quiet and safe.',ico:'😌'},{txt:'No, it is a kind of fruit.',ico:'🍎'}] },
        { q: 'What did the worker inscribe on the old stone?', scene: '🪨🔖👷', ans: 'He inscribed the year of the festival.', opts: [{txt:'He inscribed the year of the festival.',ico:'🔖'},{txt:'He inscribed a hot bowl of soup.',ico:'🍜'},{txt:'He inscribed a very fast train.',ico:'🚄'}] },
        { q: 'What does the inscription on the old gate say?', scene: '📜🚪👀', ans: 'It says, "Welcome to our village."', opts: [{txt:'It says, "Welcome to our village."',ico:'📜'},{txt:'It says nothing and it can sing.',ico:'🎤'},{txt:'It says the gate is a banana.',ico:'🍌'}] },
        { q: 'What do people share only with close friends?', scene: '💭👭❤', ans: 'Their innermost feelings.', opts: [{txt:'Their innermost feelings.',ico:'💭'},{txt:'Their big blue buses.',ico:'🚌'},{txt:'Their tall brown mountains.',ico:'🏔'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Bản tin sự cố',
        steps: [
        '<b>Bước 1:</b> Nghĩ ra 3 sự cố bất ngờ có thể xảy ra khi đi du lịch (mưa bão, trễ xe, mất vé...). Ghi mỗi sự cố thành hai sự việc: việc xảy ra trước và việc xảy ra ngay sau đó.',
        '<b>Bước 2:</b> Nối hai sự việc bằng <i>"Hardly had ... when ..."</i>, <i>"Scarcely had ... when ..."</i> hoặc <i>"No sooner had ... than ..."</i>. Nhớ dùng had + chủ ngữ + V3 ở vế đầu.',
        '<b>Bước 3:</b> Đóng vai phóng viên đọc "bản tin" 3 câu cho bạn hoặc người nhà nghe, và nhờ họ đoán xem em đã dùng cấu trúc nào.'
        ]
        }
        },
        {
        id: '6.15C',
        name: 'Bài 6.15C: Quy định và cảnh báo',
        grammar: {
        formulas: ['➕ Not only + ⚡ was + 🙋 he + 😊 polite, but also well prepared', '⏳ Only when / Only after / Not until + 📅 mệnh đề + ⚡ trợ động từ + 👦 chủ ngữ', '🚫 Under no circumstances + ⚡ should + 👦 you + ✋ touch it'],
        tip: 'Cứ thấy Not only, Only when, Not until, Under no circumstances hay So + tính từ ở đầu câu, hãy đẩy trợ động từ lên trước chủ ngữ, như đội trưởng đi trước đội viên!'
        },
        chunks: [
        { scene: '🙋😊📋', full: 'Not only was the interviewee polite, but she was also well prepared.', parts: [{t:'Not only was',ico:'➕',c:'v'},{t:'the interviewee',ico:'🙋',c:'s'},{t:'polite, but she was also well prepared.',ico:'😊',c:'o'}], traceWord: 'interviewee' },
        { scene: '🐘🚫✋', full: 'On no account should visitors touch the ivory statues in this museum.', parts: [{t:'On no account should',ico:'🚫',c:'v'},{t:'visitors',ico:'🧑‍🤝‍🧑',c:'s'},{t:'touch the ivory statues in this museum.',ico:'🐘',c:'o'}], traceWord: 'ivory' },
        { scene: '📢🧩👫', full: 'Only when the rules are clear can everyone get involved in the game.', parts: [{t:'Only when the rules are clear can',ico:'⏳',c:'v'},{t:'everyone',ico:'👫',c:'s'},{t:'get involved in the game.',ico:'🧩',c:'o'}], traceWord: 'involved' },
        { scene: '🌴🧍⛵', full: 'Not until we reached the quiet isle did we understand its isolation.', parts: [{t:'Not until we reached the quiet isle did',ico:'⏳',c:'v'},{t:'we',ico:'👨‍👩‍👧',c:'s'},{t:'understand its isolation.',ico:'🌴',c:'o'}], traceWord: 'isle' },
        { scene: '💎💍😍', full: 'So beautiful was the jade jewel that everyone stopped to look.', parts: [{t:'So beautiful was',ico:'😍',c:'v'},{t:'the jade jewel',ico:'💎',c:'s'},{t:'that everyone stopped to look.',ico:'👀',c:'o'}], traceWord: 'jewel' },
        { scene: '🏃🥛💧', full: 'Only after we finished jogging did we drink from the jug.', parts: [{t:'Only after we finished jogging did',ico:'⏳',c:'v'},{t:'we',ico:'👫',c:'s'},{t:'drink from the jug.',ico:'🥛',c:'o'}], traceWord: 'jug' },
        { scene: '👨🏃👔', full: 'Not only does Dad jog every day, but he also enjoys ironing.', parts: [{t:'Not only does',ico:'➕',c:'v'},{t:'Dad',ico:'👨',c:'s'},{t:'jog every day, but he also enjoys ironing.',ico:'🏃',c:'o'}], traceWord: 'ironing' },
        { scene: '🍯🚫🐝', full: 'On no account should you leave the jar open, because the smell may irritate bees.', parts: [{t:'On no account should',ico:'🚫',c:'v'},{t:'you',ico:'🧑',c:'s'},{t:'leave the jar open, because the smell may irritate bees.',ico:'🍯',c:'o'}], traceWord: 'jar' }
        ],
        qaList: [
        { q: 'How did Ben jump when he heard the loud noise?', scene: '👦😲🔊', ans: 'He jumped involuntarily.', opts: [{txt:'He jumped involuntarily.',ico:'😲'},{txt:'He jumped on purpose for an hour.',ico:'⏰'},{txt:'He did not have any legs.',ico:'🦵'}] },
        { q: 'Is "go" a regular or an irregular verb?', scene: '📘🚶', ans: 'It is an irregular verb.', opts: [{txt:'It is an irregular verb.',ico:'🎲'},{txt:'It is a regular verb.',ico:'📏'},{txt:'It is a kind of fruit.',ico:'🍌'}] },
        { q: 'How did Anna feel about her friend\'s new bike?', scene: '👧🚲😒', ans: 'She felt a little jealous.', opts: [{txt:'She felt a little jealous.',ico:'😒'},{txt:'She felt like a big window.',ico:'🪟'},{txt:'She felt the bike was a cat.',ico:'🐱'}] },
        { q: 'What is jade?', scene: '💎🟢', ans: 'It is a green stone.', opts: [{txt:'It is a green stone.',ico:'💎'},{txt:'It is a cold drink.',ico:'🥤'},{txt:'It is a fast car.',ico:'🚗'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Bảng nội quy đảo ngữ',
        steps: [
        '<b>Bước 1:</b> Chọn một nơi quen thuộc (thư viện, phòng học, bảo tàng, sân chạy bộ). Viết ra 3 quy định quan trọng nhất của nơi đó.',
        '<b>Bước 2:</b> Viết lại mỗi quy định thành câu cảnh báo mạnh bằng <i>"On no account should ..."</i>, <i>"Only when ... can ..."</i> hoặc <i>"Not only ... but also ..."</i>. Nhớ đảo trợ động từ lên trước chủ ngữ.',
        '<b>Bước 3:</b> Vẽ một tấm biển nhỏ với 3 câu đó, thuyết trình mini 1 phút cho bạn hoặc người nhà và hỏi xem họ có hiểu quy định không.'
        ]
        }
        }
      ]
    },
    '6.16': {
      lessons: [
        {
          id: '6.16A', name: 'Bài 6.16A: Nghệ sĩ và tác phẩm',
          grammar: {
            formulas: ['🎯 It was + 👩 Lan + 🔗 who + 🧶 knit this jumper', '🎯 It is not + 🍰 the cake + 🔀 but + 🍊 the orange + 🔗 that I want'],
            tip: 'Muốn nhấn mạnh người thì dùng who, nhấn mạnh vật hay nơi chốn thì dùng that: "It was ... that / who ..." đặt phần quan trọng ngay sau It was!'
          },
          chunks: [
            { scene: '👩🧶🧥', full: 'It was Lan who knit this jumper for her grandma', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'Lan who knit this jumper for her grandma',ico:'👩🧶🧥',c:'o'}], traceWord: 'knit' },
            { scene: '🐱🪜🌳', full: 'It was my kitten that climbed the tall ladder in the garden', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'my kitten that climbed the tall ladder in the garden',ico:'🐱🪜',c:'o'}], traceWord: 'kitten' },
            { scene: '🍰🍊😋', full: 'It is not the sweet cake but the juicy orange that I want', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'not the sweet cake but the juicy orange that I want',ico:'🍊',c:'o'}], traceWord: 'juicy' },
            { scene: '🌴🎨🖼', full: 'It was in the jungle that the artist painted her best picture', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'in the jungle that the artist painted her best picture',ico:'🌴🎨',c:'o'}], traceWord: 'jungle' },
            { scene: '🏠👨🫖', full: 'It was the landlord who fixed the old kettle in our kitchen', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'the landlord who fixed the old kettle in our kitchen',ico:'🏠🫖',c:'o'}], traceWord: 'landlord' },
            { scene: '💗🤝😊', full: 'It is not her money but her kindness that people remember', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'not her money but her kindness that people remember',ico:'💗',c:'o'}], traceWord: 'kindness' },
            { scene: '🏃⌨🏫', full: 'It was the latecomer who touched the keyboard during the lesson', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'the latecomer who touched the keyboard during the lesson',ico:'🏃⌨',c:'o'}], traceWord: 'latecomer' },
            { scene: '🕐👫⏳', full: 'It was only lately that Anna and Tom started a lasting friendship', parts: [{t:'It',ico:'🎯',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'only lately that Anna and Tom started a lasting friendship',ico:'🕐⏳',c:'o'}], traceWord: 'lasting' }
          ],
          qaList: [
            { q: 'What did the family cook for dinner on Sunday?', scene: '🐑🍽👨‍👩‍👧', ans: 'It was the lamb that we cooked', opts: [{ txt: 'It was the lamb that we cooked', ico: '🐑' }, { txt: 'At the bus stop', ico: '🚏' }, { txt: 'Two old keyboards', ico: '⌨' }] },
            { q: 'Why do people love her?', scene: '💗👩😊', ans: 'It is her kindness that people love', opts: [{ txt: 'It is her kindness that people love', ico: '💗' }, { txt: 'On the tall ladder', ico: '🪜' }, { txt: 'A juicy orange', ico: '🍊' }] },
            { q: 'Where did the artist paint the picture?', scene: '🎨🖼🌳', ans: 'It was in the garden that she painted it', opts: [{ txt: 'It was in the garden that she painted it', ico: '🌳' }, { txt: 'Because he is tired', ico: '🥱' }, { txt: 'Two little kittens', ico: '🐱' }] },
            { q: 'What is hot in the kitchen?', scene: '🫖🔥🍳', ans: 'It is the kettle that is hot', opts: [{ txt: 'It is the kettle that is hot', ico: '🫖' }, { txt: 'I am ten years old', ico: '🔟' }, { txt: 'Next to the bus', ico: '🚌' }] }
          ],
          parentGame: {
            title: 'Hoạt động Đời thực (12 phút): Thám tử tác phẩm',
            steps: [
              '<b>Bước 1:</b> Chọn 3 đồ vật hoặc bức tranh có sẵn ở nhà (một bức vẽ, một món đồ thủ công, một bản nhạc...). Với mỗi thứ, đoán xem ai là người làm ra nó hoặc nó được làm ở đâu.',
              '<b>Bước 2:</b> Viết mỗi thứ một câu nhấn mạnh, ví dụ <i>"It was my sister who painted this picture."</i> hoặc <i>"It is not the color but the idea that I like."</i>',
              '<b>Bước 3:</b> Đọc to các câu cho bạn hoặc người thân nghe, rồi để họ đoán phần được nhấn mạnh; ai đoán đúng nhiều hơn thì thắng.'
            ]
          }
        },
        {
          id: '6.16B', name: 'Bài 6.16B: Điều thực sự quan trọng',
          grammar: {
            formulas: ['❓ What + 👦 I need + ⚡ is + 🤝 a lifelong friend', '☝ All + 👦 I want + ⚡ is + 🏊 to be a lifeguard', '🔎 The reason why + 👦 I eat lettuce + ⚡ is + 💡 that it is healthy'],
            tip: 'Câu what-cleft chia làm hai nửa: nửa đầu (What I need) là câu hỏi bị giấu, nửa sau sau chữ is mới là đáp án quan trọng nhất!'
          },
          chunks: [
            { scene: '🤝♾😊', full: 'What I need is a lifelong friend who is always honest', parts: [{t:'What I need',ico:'❓',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a lifelong friend who is always honest',ico:'🤝♾',c:'o'}], traceWord: 'lifelong' },
            { scene: '🏊⚡🌊', full: 'What the lifeguard said was that everyone must leave the water when lightning comes', parts: [{t:'What the lifeguard said',ico:'🏊',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'that everyone must leave the water when lightning comes',ico:'⚡🌊',c:'o'}], traceWord: 'lifeguard' },
            { scene: '📖👩🤫', full: 'What the librarian wants is a quiet room with enough books', parts: [{t:'What the librarian wants',ico:'📖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a quiet room with enough books',ico:'🤫📚',c:'o'}], traceWord: 'librarian' },
            { scene: '🤥😠👦', full: 'The thing that I dislike most about him is that he is a liar', parts: [{t:'The thing that I dislike most about him',ico:'👎',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'that he is a liar',ico:'🤥',c:'o'}], traceWord: 'liar' },
            { scene: '🥬🥗💪', full: 'The reason why I eat lettuce every day is that it is healthy', parts: [{t:'The reason why I eat lettuce every day',ico:'🥬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'that it is healthy',ico:'💪',c:'o'}], traceWord: 'lettuce' },
            { scene: '🥇🏢📱', full: 'What the leading company needs is a lighter phone', parts: [{t:'What the leading company needs',ico:'🥇',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a lighter phone',ico:'🪶📱',c:'o'}], traceWord: 'leading' },
            { scene: '📉💧🌍', full: 'What we must do is lessen waste because our water is limited', parts: [{t:'What we must do',ico:'❓',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'lessen waste because our water is limited',ico:'📉💧',c:'o'}], traceWord: 'lessen' },
            { scene: '🖼👥😮', full: 'The thing that surprised us was the likeness between the two portraits', parts: [{t:'The thing that surprised us',ico:'😮',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'the likeness between the two portraits',ico:'🖼🖼',c:'o'}], traceWord: 'likeness' }
          ],
          qaList: [
            { q: 'What did the people celebrate after the liberation?', scene: '🕊🎉👥', ans: 'What they celebrated was their freedom', opts: [{ txt: 'What they celebrated was their freedom', ico: '🕊' }, { txt: 'Two cups of tea', ico: '🍵' }, { txt: 'Next to the door', ico: '🚪' }] },
            { q: 'What did the soldiers want to do?', scene: '💂🏘🕊', ans: 'All they wanted was to liberate the town', opts: [{ txt: 'All they wanted was to liberate the town', ico: '🕊' }, { txt: 'A big red bus', ico: '🚌' }, { txt: 'It is very cold', ico: '🥶' }] },
            { q: 'Is it lawful for a child to drive a car?', scene: '👦🚗⚖', ans: 'No, the reason why is that he is not legally old enough', opts: [{ txt: 'No, the reason why is that he is not legally old enough', ico: '⚖' }, { txt: 'In the kitchen', ico: '🍳' }, { txt: 'Two green apples', ico: '🍏' }] },
            { q: 'How should I hold a small bird?', scene: '🐦🤲🪶', ans: 'What you should do is hold it lightly', opts: [{ txt: 'What you should do is hold it lightly', ico: '🪶' }, { txt: 'A long river', ico: '🏞' }, { txt: 'I like cold milk', ico: '🥛' }] }
          ],
          parentGame: {
            title: 'Hoạt động Đời thực (12 phút): Điều quan trọng nhất với mình',
            steps: [
              '<b>Bước 1:</b> Viết ra giấy 3 điều thật sự quan trọng với bạn (một người, một thói quen, một ước mơ). Mỗi điều ghi vào một mẩu giấy nhỏ.',
              '<b>Bước 2:</b> Biến mỗi điều thành một câu nhấn mạnh, ví dụ <i>"What I need is a lifelong friend."</i> hoặc <i>"All I want is more time to read."</i>',
              '<b>Bước 3:</b> Trình bày 1 phút trước bạn hoặc người thân, giải thích lý do bằng <i>"The reason why ... is that ..."</i> rồi hỏi họ điều quan trọng với họ là gì.'
            ]
          }
        },
        {
          id: '6.16C', name: 'Bài 6.16C: Bày tỏ cảm xúc mạnh',
          grammar: {
            formulas: ['👦 I + 💥 do love + ✨ this magical town', '🎯 This is + 👆 the very + 📪 mailbox', '😮 Who + 🌍 on earth + ⚡ put + 🏷 this logo?'],
            tip: 'Thêm do / does / did trước động từ gốc để nhấn mạnh "thật sự là", và on earth hay ever đứng sau từ để hỏi để thể hiện sự ngạc nhiên!'
          },
          chunks: [
            { scene: '🏘✨🏨', full: 'I do love this magical little town and its old lodge', parts: [{t:'I',ico:'👦',c:'s'}, {t:'do love',ico:'💥',c:'v'}, {t:'this magical little town and its old lodge',ico:'✨🏨',c:'o'}], traceWord: 'magical' },
            { scene: '👨🚚🛣', full: 'My uncle does drive a big lorry every single day', parts: [{t:'My uncle',ico:'👨',c:'s'}, {t:'does drive',ico:'💥',c:'v'}, {t:'a big lorry every single day',ico:'🚚',c:'o'}], traceWord: 'lorry' },
            { scene: '👨‍🍳🍞☀', full: 'The baker did make a fresh loaf for us this morning', parts: [{t:'The baker',ico:'👨‍🍳',c:'s'}, {t:'did make',ico:'💥',c:'v'}, {t:'a fresh loaf for us this morning',ico:'🍞',c:'o'}], traceWord: 'loaf' },
            { scene: '📪✉👦', full: 'This is the very mailbox that I used to send my letter', parts: [{t:'This',ico:'👆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the very mailbox that I used to send my letter',ico:'📪✉',c:'o'}], traceWord: 'mailbox' },
            { scene: '🎩🏰🎪', full: 'The magician did make a magnificent castle appear on the stage', parts: [{t:'The magician',ico:'🎩',c:'s'}, {t:'did make',ico:'💥',c:'v'}, {t:'a magnificent castle appear on the stage',ico:'🏰✨',c:'o'}], traceWord: 'magician' },
            { scene: '👧💕🐕', full: 'She did look lovingly at her loyal old dog', parts: [{t:'She',ico:'👧',c:'s'}, {t:'did look',ico:'💥',c:'v'}, {t:'lovingly at her loyal old dog',ico:'💕🐕',c:'o'}], traceWord: 'loyal' },
            { scene: '🧑🩼🧳', full: 'He did limp to the bus because his luggage was so heavy', parts: [{t:'He',ico:'🧑',c:'s'}, {t:'did limp',ico:'💥',c:'v'}, {t:'to the bus because his luggage was so heavy',ico:'🩼🧳',c:'o'}], traceWord: 'limp' },
            { scene: '🏷🔊😮', full: 'Who on earth put this logo on the loudspeaker', parts: [{t:'Who on earth',ico:'🌍',c:'s'}, {t:'put',ico:'💥',c:'v'}, {t:'this logo on the loudspeaker',ico:'🏷🔊',c:'o'}], traceWord: 'logo' }
          ],
          qaList: [
            { q: 'Did you ever win the lottery?', scene: '🎟🤑❓', ans: 'No, I did not, but I do hope to someday', opts: [{ txt: 'No, I did not, but I do hope to someday', ico: '🎟' }, { txt: 'Two red buses', ico: '🚌' }, { txt: 'On the table', ico: '🍽' }] },
            { q: 'Did Tom build the little house himself?', scene: '👦🔨🏠', ans: 'Yes, he did build it himself', opts: [{ txt: 'Yes, he did build it himself', ico: '🔨' }, { txt: 'A cup of milk', ico: '🥛' }, { txt: 'It is very hot', ico: '🥵' }] },
            { q: 'What does a good friend always show?', scene: '🤝💙👫', ans: 'A good friend does show great loyalty', opts: [{ txt: 'A good friend does show great loyalty', ico: '💙' }, { txt: 'Under the bed', ico: '🛏' }, { txt: 'Three green trees', ico: '🌳' }] },
            { q: 'Who ever sent you this strange letter?', scene: '✉❓👦', ans: 'It was my cousin who did send it', opts: [{ txt: 'It was my cousin who did send it', ico: '✉' }, { txt: 'Ten big fish', ico: '🐟' }, { txt: 'Near the school', ico: '🏫' }] }
          ],
          parentGame: {
            title: 'Hoạt động Đời thực (12 phút): Phỏng vấn cảm xúc mạnh',
            steps: [
              '<b>Bước 1:</b> Hai bạn ngồi đối diện. Mỗi bạn viết 3 điều mình rất thích hoặc rất ngạc nhiên trong tuần qua (một món ăn, một chuyến đi, một bất ngờ).',
              '<b>Bước 2:</b> Bạn A hỏi bằng câu nhấn mạnh như <i>"What on earth did you do there?"</i> hoặc <i>"Did you ever try it?"</i>; bạn B trả lời bằng <i>"I did love it!"</i> hoặc <i>"He does work hard."</i>',
              '<b>Bước 3:</b> Đổi vai, rồi mỗi bạn viết 3 câu nhấn mạnh về người bạn vừa phỏng vấn và đọc lại cho bạn ấy nghe.'
            ]
          }
        }
      ]
    },
    '6.17': {
      lessons: [
        {id: '6.17A', name: 'Bài 6.17A: Thành phố ngày càng thay đổi', grammar: {formulas: ['🌳 The + taller + 🌳 the tree, the + 🐦 more birds', '🏙 The city + ⚡ gets + 📈 bigger and bigger', '🧑 The + more + 🧘 you practice, the + 😌 calmer you feel'], tip: 'Hai vế đều là so sánh hơn: "The + so sánh hơn, the + so sánh hơn" — vế này tăng thì vế kia tăng theo!'}, chunks: [{scene: '🌳🍁🏞', full: 'The maple trees in the park grow taller and taller every year', parts: [{t: 'The maple trees in the park', ico: '🍁', c: 's'}, {t: 'grow', ico: '🌱', c: 'v'}, {t: 'taller and taller every year', ico: '📈', c: 'o'}], traceWord: 'maple'}, {scene: '🏙🗑😵', full: 'The city is getting messier and messier every day', parts: [{t: 'The city', ico: '🏙', c: 's'}, {t: 'is getting', ico: '⚡', c: 'v'}, {t: 'messier and messier every day', ico: '🗑', c: 'o'}], traceWord: 'messier'}, {scene: '🏙🌟📸', full: 'The city is becoming more and more memorable for visitors', parts: [{t: 'The city', ico: '🏙', c: 's'}, {t: 'is becoming', ico: '⚡', c: 'v'}, {t: 'more and more memorable for visitors', ico: '🌟', c: 'o'}], traceWord: 'memorable'}, {scene: '🏪👴💰', full: 'The older the merchant gets, the more he loves his small shop', parts: [{t: 'The older the merchant', ico: '🏪', c: 's'}, {t: 'gets,', ico: '⚡', c: 'v'}, {t: 'the more he loves his small shop', ico: '❤', c: 'o'}], traceWord: 'merchant'}, {scene: '🧮👩📈', full: 'The harder the mathematician works, the more marked her progress becomes', parts: [{t: 'The harder the mathematician', ico: '🧮', c: 's'}, {t: 'works,', ico: '💪', c: 'v'}, {t: 'the more marked her progress becomes', ico: '📍', c: 'o'}], traceWord: 'marked'}, {scene: '🧘🧠😌', full: 'The more meditation he does, the calmer he feels mentally', parts: [{t: 'The more meditation he does,', ico: '🧘', c: 's'}, {t: 'the calmer', ico: '😌', c: 'v'}, {t: 'he feels mentally', ico: '🧠', c: 'o'}], traceWord: 'meditation'}, {scene: '🥔🍽😋', full: 'The longer you mash the potatoes, the smoother they become', parts: [{t: 'The longer you', ico: '👦', c: 's'}, {t: 'mash', ico: '🥔', c: 'v'}, {t: 'the potatoes, the smoother they become', ico: '😋', c: 'o'}], traceWord: 'mash'}, {scene: '🌍🐠🌊', full: 'The more mankind learns about the sea, the more marine life it can protect', parts: [{t: 'The more mankind', ico: '🌍', c: 's'}, {t: 'learns', ico: '📚', c: 'v'}, {t: 'about the sea, the more marine life it can protect', ico: '🐠', c: 'o'}], traceWord: 'marine'}], qaList: [{q: 'What happens to ice when the day gets hotter?', scene: '☀🧊🫠', ans: 'The hotter it gets, the faster the ice melts', opts: [{txt: 'The hotter it gets, the faster the ice melts', ico: '🫠'}, {txt: 'The hotter it gets, the harder the ice grows', ico: '🧊'}, {txt: 'The colder it gets, the hotter the ice feels', ico: '🔥'}]}, {q: 'What does the middle-aged teacher do to feel calmer?', scene: '🧑‍🏫🧘😌', ans: 'The middle-aged teacher likes to meditate', opts: [{txt: 'The middle-aged teacher likes to meditate', ico: '🧘'}, {txt: 'The middle-aged teacher likes to shout loudly', ico: '📢'}, {txt: 'The middle-aged teacher likes to break chairs', ico: '🪑'}]}, {q: 'Which sea is getting warmer and warmer?', scene: '🌊☀🌡', ans: 'The Mediterranean is getting warmer and warmer', opts: [{txt: 'The Mediterranean is getting warmer and warmer', ico: '🌊'}, {txt: 'The sun is getting colder and colder', ico: '☀'}, {txt: 'The book is getting heavier and heavier', ico: '📕'}]}, {q: 'How does the old shirt get better?', scene: '👕🧵👩', ans: 'The more she mends it, the better it looks', opts: [{txt: 'The more she mends it, the better it looks', ico: '🧵'}, {txt: 'The more she mends it, the worse it sleeps', ico: '😴'}, {txt: 'The less she cooks it, the bigger it sings', ico: '🎤'}]}], parentGame: {title: '🎲 Hoạt động Đời thực (12 phút): Thành Phố Của Em Đang Thay Đổi', steps: ['<b>Bước 1:</b> Hãy nghĩ về nơi em sống và ghi 3 điều đang thay đổi, ví dụ: đường đông hơn, cây cao hơn, nhà mới nhiều hơn.', '<b>Bước 2:</b> Viết mỗi điều thành một câu so sánh kép, ví dụ: <i>"The older the city gets, the busier it becomes."</i> và <i>"The trees grow taller and taller."</i>', '<b>Bước 3:</b> Đọc 3 câu cho bạn hoặc người thân nghe, rồi hỏi họ nghĩ điều gì sẽ thay đổi nữa trong 10 năm tới.']}},
        {id: '6.17B', name: 'Bài 6.17B: Hai lối sống khác nhau', grammar: {formulas: ['🏙 City life + ⚡ is + 🔢 twice as noisy as + 🏡 village life', '🏡 Village + ⚡ is + 🚫 not nearly as busy as + 🏙 the city', '🎨 The moss + ⚡ is + 🟰 the same green as + 🌿 the grass'], tip: 'Chỉ cần nhớ khung "as + tính từ + as"; thêm twice, just, nowhere near, not nearly để chỉnh mức độ, và the same + danh từ + as khi hai thứ giống nhau!'}, chunks: [{scene: '❄🌤🏡', full: 'Winter in my town is not nearly as mild as winter in the south', parts: [{t: 'Winter in my town', ico: '❄', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'not nearly as mild as winter in the south', ico: '🌤', c: 'o'}], traceWord: 'mild'}, {scene: '🏘🌫⛰', full: 'The village is nowhere near as misty as the mountain town', parts: [{t: 'The village', ico: '🏘', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'nowhere near as misty as the mountain town', ico: '🌫', c: 'o'}], traceWord: 'misty'}, {scene: '🦟🏠🏙', full: 'Mosquitoes here are twice as big as the ones in my city', parts: [{t: 'Mosquitoes here', ico: '🦟', c: 's'}, {t: 'are', ico: '⚡', c: 'v'}, {t: 'twice as big as the ones in my city', ico: '2️⃣', c: 'o'}], traceWord: 'mosquitoes'}, {scene: '🧘🏯😄', full: 'The monk in the temple is just as happy as the rich man', parts: [{t: 'The monk in the temple', ico: '🧘', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'just as happy as the rich man', ico: '😄', c: 'o'}], traceWord: 'monk'}, {scene: '💰😞🏠', full: 'A rich man can be just as miserable as a poor man', parts: [{t: 'A rich man', ico: '💰', c: 's'}, {t: 'can be', ico: '⚡', c: 'v'}, {t: 'just as miserable as a poor man', ico: '😞', c: 'o'}], traceWord: 'miserable'}, {scene: '🗿🌿🟩', full: 'The moss on the old monument is the same green as the grass', parts: [{t: 'The moss on the old monument', ico: '🌿', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'the same green as the grass', ico: '🟩', c: 'o'}], traceWord: 'moss'}, {scene: '🌲💧🏙', full: 'The air in the forest has twice as much moisture as the air in the city', parts: [{t: 'The air in the forest', ico: '🌲', c: 's'}, {t: 'has', ico: '⚡', c: 'v'}, {t: 'twice as much moisture as the air in the city', ico: '💧', c: 'o'}], traceWord: 'moisture'}, {scene: '👹😜👦', full: 'The little monster in the story is just as full of mischief as my brother', parts: [{t: 'The little monster in the story', ico: '👹', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'just as full of mischief as my brother', ico: '😜', c: 'o'}], traceWord: 'monster'}], qaList: [{q: 'Which is cheaper, a modem or a computer?', scene: '📡🖥💰', ans: 'A modem is not nearly as expensive as a computer', opts: [{txt: 'A modem is not nearly as expensive as a computer', ico: '📡'}, {txt: 'A modem is twice as expensive as a computer', ico: '💸'}, {txt: 'A computer is as small as a coin', ico: '🪙'}]}, {q: 'How did the family feel about the rescue?', scene: '👨‍👩‍👧🌈😭', ans: 'To them, the rescue was as amazing as a miracle', opts: [{txt: 'To them, the rescue was as amazing as a miracle', ico: '🌈'}, {txt: 'To them, the rescue was as boring as a stone', ico: '🪨'}, {txt: 'To them, the rescue was as cold as a cup', ico: '🥤'}]}, {q: 'Why were the two friends unhappy?', scene: '👦👦🙅😢', ans: 'A small misunderstanding caused as much misery as a big fight', opts: [{txt: 'A small misunderstanding caused as much misery as a big fight', ico: '🙅'}, {txt: 'A small cake caused as much misery as a big hat', ico: '🎂'}, {txt: 'A new bike caused as much misery as a warm bath', ico: '🚲'}]}, {q: 'Why should you check the facts?', scene: '🗺🧭🤔', ans: 'A wrong map can mislead you just as easily as a wrong sign', opts: [{txt: 'A wrong map can mislead you just as easily as a wrong sign', ico: '🧭'}, {txt: 'A wrong map can swim you just as easily as a wrong sign', ico: '🏊'}, {txt: 'A wrong map can eat you just as easily as a wrong sign', ico: '🍴'}]}], parentGame: {title: '🎲 Hoạt động Đời thực (12 phút): So Sánh Hai Lối Sống', steps: ['<b>Bước 1:</b> Chọn hai nơi em biết rõ (thành phố và quê, hoặc hai ngôi trường) và kẻ bảng 2 cột, ghi 5 điều khác nhau ở mỗi nơi.', '<b>Bước 2:</b> Viết 5 câu so sánh với "as...as" và từ bổ nghĩa, ví dụ: <i>"My village is not nearly as noisy as the city."</i> hoặc <i>"The air here is twice as clean."</i>', '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn bè hoặc người thân, rồi để họ đoán em thích lối sống nào hơn và vì sao.']}},
        {id: '6.17C', name: 'Bài 6.17C: Kỷ lục thế giới', grammar: {formulas: ['🏔 It + ⚡ is + ⭐ by far the highest + 🌍 in the world', '🚗 It + ⚡ is + ⭐ one of the most popular + 🛵 ways', '🥈 Dad + ⚡ took + 🥈 the second longest nap'], tip: 'Muốn nhấn mạnh "nhất" thì thêm by far hoặc easily trước the + so sánh nhất; like = giống như, as = với vai trò là!'}, chunks: [{scene: '🏔🌍⭐', full: 'Mount Everest is by far the highest mountaintop in the world', parts: [{t: 'Mount Everest', ico: '🏔', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'by far the highest mountaintop in the world', ico: '⭐', c: 'o'}], traceWord: 'mountaintop'}, {scene: '👩📿🧍', full: 'The model wore a gold necklace and stood motionless like a statue', parts: [{t: 'The model', ico: '👩', c: 's'}, {t: 'wore', ico: '📿', c: 'v'}, {t: 'a gold necklace and stood motionless like a statue', ico: '🧍', c: 'o'}], traceWord: 'motionless'}, {scene: '🏍🇻🇳🚦', full: 'A motorcycle is one of the most popular ways to travel in Vietnam', parts: [{t: 'A motorcycle', ico: '🏍', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'one of the most popular ways to travel in Vietnam', ico: '🇻🇳', c: 'o'}], traceWord: 'motorcycle'}, {scene: '👨🛋😴', full: 'Dad took the second longest nap of his life on the sofa', parts: [{t: 'Dad', ico: '👨', c: 's'}, {t: 'took', ico: '⚡', c: 'v'}, {t: 'the second longest nap of his life on the sofa', ico: '😴', c: 'o'}], traceWord: 'nap'}, {scene: '👦🟤😄', full: 'The boy who plays in the mud is by far the happiest in our class', parts: [{t: 'The boy who plays in the mud', ico: '🟤', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'by far the happiest in our class', ico: '😄', c: 'o'}], traceWord: 'mud'}, {scene: '🐴⛰💪', full: 'A mule is easily the strongest animal in the village', parts: [{t: 'A mule', ico: '🐴', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'easily the strongest animal in the village', ico: '💪', c: 'o'}], traceWord: 'mule'}, {scene: '🌭🟡😋', full: 'Mustard is easily the best sauce for a hot dog', parts: [{t: 'Mustard', ico: '🌭', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'easily the best sauce for a hot dog', ico: '😋', c: 'o'}], traceWord: 'mustard'}, {scene: '📜🏞❤', full: 'Our motto is to love our motherland like our own family', parts: [{t: 'Our motto', ico: '📜', c: 's'}, {t: 'is to love', ico: '❤', c: 'v'}, {t: 'our motherland like our own family', ico: '🏞', c: 'o'}], traceWord: 'motherland'}], qaList: [{q: 'What is the smallest thing in the box?', scene: '🧰🔨', ans: 'A nail is easily the smallest thing in the box', opts: [{txt: 'A nail is easily the smallest thing in the box', ico: '🔨'}, {txt: 'A saw is easily the smallest thing in the box', ico: '🪚'}, {txt: 'A ladder is easily the smallest thing in the box', ico: '🪜'}]}, {q: 'Who will narrate the film about wild animals?', scene: '🎬🎙🦁', ans: 'My uncle will narrate it like a famous actor', opts: [{txt: 'My uncle will narrate it like a famous actor', ico: '🎙'}, {txt: 'My uncle will sleep it like a famous cake', ico: '🍰'}, {txt: 'My uncle will paint it like a famous soup', ico: '🍲'}]}, {q: 'What do bees take from flowers?', scene: '🐝🌸🍯', ans: 'Bees take sweet nectar from the flowers', opts: [{txt: 'Bees take sweet nectar from the flowers', ico: '🍯'}, {txt: 'Bees take warm shoes from the flowers', ico: '👟'}, {txt: 'Bees take loud music from the flowers', ico: '🎵'}]}, {q: 'How do people feel when a great leader dies?', scene: '🖤😢🕯', ans: 'Many people mourn when a great leader dies', opts: [{txt: 'Many people mourn when a great leader dies', ico: '🖤'}, {txt: 'Many people dance when a great leader dies', ico: '💃'}, {txt: 'Many people laugh when a great leader dies', ico: '😂'}]}], parentGame: {title: '🎲 Hoạt động Đời thực (12 phút): Cuộc Thi Kỷ Lục Của Lớp', steps: ['<b>Bước 1:</b> Cùng vài bạn chọn 4 kỷ lục vui trong lớp hoặc gia đình: ai cao nhất, ai chạy nhanh nhất, ai ngủ trưa lâu nhất, ai biết nhiều từ nhất.', '<b>Bước 2:</b> Đo hoặc đếm kết quả rồi viết câu có từ bổ nghĩa, ví dụ: <i>"Nam is by far the tallest boy."</i> và <i>"Lan is easily the fastest runner."</i>', '<b>Bước 3:</b> Công bố "bảng kỷ lục" bằng tiếng Anh, thêm câu <i>"He is the second fastest."</i> cho người về nhì.']}}
      ]
    },
    '6.18': {
      lessons: [
        {
          id: '6.18A', name: 'Bài 6.18A: Ăn uống và dinh dưỡng',
          grammar: {
            formulas: ['👥 A great many people + 🍽 enjoy + 🌃 the nightlife', '👶 A newborn baby + 🥛 drinks + 📏 a large amount of milk', '🐟 Most of the fish + ✅ is + 😋 fresh'],
            tip: 'Đếm được thì dùng "a great many / a large number of / quite a few"; không đếm được dùng "a large amount of"; "most + danh từ" nói chung, "most of the + danh từ" nói một nhóm cụ thể!'
          },
          chunks: [
            { scene: '👥🌃🍜', full: 'A great many people enjoy the nightlife in the northeast of the city', parts: [{t:'A great many people',ico:'👥',c:'s'}, {t:'enjoy',ico:'🎉',c:'v'}, {t:'the nightlife in the northeast of the city',ico:'🌃',c:'o'}], traceWord: 'nightlife' },
            { scene: '🙋🍱🏘', full: 'Quite a few newcomers eat lunch with the next-door family every week', parts: [{t:'Quite a few newcomers',ico:'🙋',c:'s'}, {t:'eat',ico:'🍽',c:'v'}, {t:'lunch with the next-door family every week',ico:'🏘',c:'o'}], traceWord: 'newcomers' },
            { scene: '👶🥛📏', full: 'A newborn baby drinks a large amount of milk every day', parts: [{t:'A newborn baby',ico:'👶',c:'s'}, {t:'drinks',ico:'🥛',c:'v'}, {t:'a large amount of milk every day',ico:'📏',c:'o'}], traceWord: 'newborn' },
            { scene: '🐟🧭🛒', full: 'Most of the fish at the northwest market is fresh and cheap', parts: [{t:'Most of the fish at the northwest market',ico:'🐟',c:'s'}, {t:'is',ico:'✅',c:'v'}, {t:'fresh and cheap',ico:'😋',c:'o'}], traceWord: 'northwest' },
            { scene: '🧭🍚👥', full: 'Most people in the northeastern region eat rice every day', parts: [{t:'Most people in the northeastern region',ico:'👥',c:'s'}, {t:'eat',ico:'🍽',c:'v'}, {t:'rice every day',ico:'🍚',c:'o'}], traceWord: 'northeastern' },
            { scene: '🏷👧🍬', full: 'Her nickname is Candy because she eats quite a few sweets', parts: [{t:'Her nickname',ico:'🏷',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'Candy because she eats quite a few sweets',ico:'🍬',c:'o'}], traceWord: 'nickname' },
            { scene: '📱🥗🙄', full: 'Most of the diet advice on that website is nonsense', parts: [{t:'Most of the diet advice on that website',ico:'📱',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nonsense',ico:'🙄',c:'o'}], traceWord: 'nonsense' },
            { scene: '😰💉🪡', full: 'Quite a few people feel nervousness when they see a needle', parts: [{t:'Quite a few people',ico:'👥',c:'s'}, {t:'feel',ico:'💭',c:'v'}, {t:'nervousness when they see a needle',ico:'😰',c:'o'}], traceWord: 'needle' }
          ],
          qaList: [
            { q: 'Where does my nephew eat lunch?', scene: '👦🍱🏞', ans: 'He eats lunch on the ness', opts: [{txt:'He eats lunch on the ness',ico:'🏞'}, {txt:'He eats lunch in a car',ico:'🚗'}, {txt:'He eats lunch in a tree',ico:'🌳'}] },
            { q: 'How much sweet food does your niece eat?', scene: '👧🍰🍰🍰', ans: 'She eats a large amount of it', opts: [{txt:'She eats a large amount of it',ico:'🍰'}, {txt:'She eats none of it',ico:'🚫'}, {txt:'She eats one small cake',ico:'🧁'}] },
            { q: 'What does a teacher give when your answer is right?', scene: '👩‍🏫✅🙂', ans: 'She gives a nod', opts: [{txt:'She gives a nod',ico:'🙂'}, {txt:'She gives a needle',ico:'🪡'}, {txt:'She gives a nickname',ico:'🏷'}] },
            { q: 'How do the boys eat?', scene: '👦👦🍔🔊', ans: 'Most of the boys eat noisily', opts: [{txt:'Most of the boys eat noisily',ico:'🔊'}, {txt:'Most of the boys eat quietly',ico:'🤫'}, {txt:'Most of the boys do not eat',ico:'🚫'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Khảo sát bữa ăn của lớp',
            steps: [
              '<b>Bước 1:</b> Hỏi 5 bạn hoặc người thân: "Bạn ăn gì hôm qua?" và ghi nhanh vào giấy các món (rau, cá, đồ ngọt...).',
              '<b>Bước 2:</b> Đếm kết quả rồi viết 4 câu dùng <i>"Quite a few..."</i>, <i>"A large amount of..."</i>, <i>"Most of the..."</i> và <i>"Most people..."</i> để mô tả.',
              '<b>Bước 3:</b> Đọc to các câu cho bạn nghe và hỏi bạn: câu nào đúng với bữa ăn của mình? Cùng sửa nếu dùng sai many/much.'
            ]
          }
        },
        {
          id: '6.18B', name: 'Bài 6.18B: Chăm sóc sức khỏe cộng đồng',
          grammar: {
            formulas: ['👵 The elderly + 🙏 need + 🥦 nutritious food', '🐄 The cow + 🎁 gives + 🥛 nutritious milk', '👦 Nam + 🚌 goes + 🏫 to school'],
            tip: 'The + tính từ = một nhóm người (the elderly, the poor) và đi với động từ số nhiều; "go to school" là đi học, còn "go to the school" là đến một ngôi trường cụ thể!'
          },
          chunks: [
            { scene: '👵🥗🏘', full: 'The elderly in the northwestern town need nutritious food', parts: [{t:'The elderly in the northwestern town',ico:'👵',c:'s'}, {t:'need',ico:'🙏',c:'v'}, {t:'nutritious food',ico:'🥦',c:'o'}], traceWord: 'northwestern' },
            { scene: '🤝🚧🥗', full: 'The poor often face a big obstacle to good nutrition', parts: [{t:'The poor',ico:'🤝',c:'s'}, {t:'often face',ico:'😟',c:'v'}, {t:'a big obstacle to good nutrition',ico:'🚧',c:'o'}], traceWord: 'obstacle' },
            { scene: '👨‍⚕️🏫🍟', full: 'The doctor goes to the school to talk about oily food', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'goes',ico:'🚶',c:'v'}, {t:'to the school to talk about oily food',ico:'🏫',c:'o'}], traceWord: 'oily' },
            { scene: '🍟⚠🍔', full: 'Fast food is notorious as an oily meal', parts: [{t:'Fast food',ico:'🍔',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'notorious as an oily meal',ico:'⚠',c:'o'}], traceWord: 'notorious' },
            { scene: '🐄🥛🥦', full: 'The cow gives people a lot of nutritious milk', parts: [{t:'The cow',ico:'🐄',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'people a lot of nutritious milk',ico:'🥛',c:'o'}], traceWord: 'nutritious' },
            { scene: '✍📖🥗', full: 'A novelist writes about nutrition in an old-fashioned way', parts: [{t:'A novelist',ico:'✍',c:'s'}, {t:'writes',ico:'📝',c:'v'}, {t:'about nutrition in an old-fashioned way',ico:'📻',c:'o'}], traceWord: 'novelist' },
            { scene: '🎭📜🏥', full: 'The principal officially opens the health week onstage', parts: [{t:'The principal',ico:'👩‍💼',c:'s'}, {t:'officially opens',ico:'📜',c:'v'}, {t:'the health week onstage',ico:'🎭',c:'o'}], traceWord: 'officially' },
            { scene: '👦🏫📌', full: 'Nam goes to school early and reads the noticeboard', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'goes',ico:'🚶',c:'v'}, {t:'to school early and reads the noticeboard',ico:'📌',c:'o'}], traceWord: 'noticeboard' }
          ],
          qaList: [
            { q: 'How often should we eat oily food?', scene: '🍟🗓', ans: 'Only as an occasional meal', opts: [{txt:'Only as an occasional meal',ico:'🗓'}, {txt:'At every meal',ico:'🍽'}, {txt:'Three times every day',ico:'3️⃣'}] },
            { q: 'What is a rude joke about the poor?', scene: '🙊🤝', ans: 'It is offensive', opts: [{txt:'It is offensive',ico:'🙊'}, {txt:'It is nutritious',ico:'🥦'}, {txt:'It is oily',ico:'🍟'}] },
            { q: 'Is the change after one month of exercise noticeable?', scene: '🏃💪👀', ans: 'Yes, the change is noticeable', opts: [{txt:'Yes, the change is noticeable',ico:'👀'}, {txt:'No, I do not see anything',ico:'🙈'}, {txt:'Yes, it is a cow',ico:'🐄'}] },
            { q: 'What should one do for good health?', scene: '🪞💪🥗', ans: 'One should take care of oneself', opts: [{txt:'One should take care of oneself',ico:'🪞'}, {txt:'One should not eat any meal',ico:'🚫'}, {txt:'One should sleep all day',ico:'😴'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Áp phích sức khỏe cho cộng đồng',
            steps: [
              '<b>Bước 1:</b> Chọn một nhóm người (người già, trẻ nhỏ, người lao động) và nghĩ ra 2 lời khuyên về ăn uống cho họ, ví dụ <i>"The elderly need nutritious food."</i>',
              '<b>Bước 2:</b> Vẽ một tờ áp phích nhỏ trên giấy A4 với tiêu đề và 2 câu tiếng Anh dùng <i>"the + tính từ"</i>, rồi dán lên bảng thông báo trong nhà.',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút cho người thân hoặc bạn, rồi hỏi họ: bạn thấy lời khuyên nào dễ nhớ nhất?'
            ]
          }
        },
        {
          id: '6.18C', name: 'Bài 6.18C: Lời khuyên về sức khỏe',
          grammar: {
            formulas: ['👨‍⚕️ The doctor + 🎁 gives + 💡 a piece of advice', '🎻 The orchestra + 🎶 plays + 🏥 at the opening', '📄 The information + ⚡ is + 📆 out-of-date'],
            tip: 'Advice, information và news là danh từ không đếm được: không thêm -s, hãy nói "a piece of advice"; còn danh từ tập hợp như team, orchestra thường đi với động từ số ít!'
          },
          chunks: [
            { scene: '👨‍⚕️💡🏕', full: 'The doctor gives me a piece of advice about outdoor exercise', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'me a piece of advice about outdoor exercise',ico:'🏕',c:'o'}], traceWord: 'outdoor' },
            { scene: '💡🌳⏰', full: 'Her advice is to play outdoors for an hour every day', parts: [{t:'Her advice',ico:'💡',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'to play outdoors for an hour every day',ico:'🌳',c:'o'}], traceWord: 'outdoors' },
            { scene: '📄💊📆', full: 'The information on the old medicine box is out-of-date', parts: [{t:'The information on the old medicine box',ico:'📄',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'out-of-date',ico:'📆',c:'o'}], traceWord: 'information' },
            { scene: '🎻🎶🏥', full: 'The orchestra plays at the opening of the new hospital', parts: [{t:'The orchestra',ico:'🎻',c:'s'}, {t:'plays',ico:'🎶',c:'v'}, {t:'at the opening of the new hospital',ico:'🏥',c:'o'}], traceWord: 'orchestra' },
            { scene: '👥🥳🏆', full: 'The team is overjoyed with this outstanding piece of news', parts: [{t:'The team',ico:'👥',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'overjoyed with this outstanding piece of news',ico:'🥳',c:'o'}], traceWord: 'overjoyed' },
            { scene: '😟📚➡', full: 'Tired students often show outward signs of stress', parts: [{t:'Tired students',ico:'😟',c:'s'}, {t:'often show',ico:'👀',c:'v'}, {t:'outward signs of stress',ico:'➡',c:'o'}], traceWord: 'outward' },
            { scene: '🌙😴⚖', full: 'The benefit of a good overnight sleep outweighs the cost', parts: [{t:'The benefit of a good overnight sleep',ico:'🌙',c:'s'}, {t:'outweighs',ico:'⚖',c:'v'}, {t:'the cost',ico:'💰',c:'o'}], traceWord: 'outweighs' },
            { scene: '🧹🍳✨', full: 'A clean and orderly kitchen keeps food safe', parts: [{t:'A clean and orderly kitchen',ico:'📋',c:'s'}, {t:'keeps',ico:'🔒',c:'v'}, {t:'food safe',ico:'🍳',c:'o'}], traceWord: 'orderly' }
          ],
          qaList: [
            { q: 'What does a planet move around the sun in?', scene: '🪐☀', ans: 'It moves in an orbit', opts: [{txt:'It moves in an orbit',ico:'🪐'}, {txt:'It moves in a bag',ico:'👜'}, {txt:'It moves in a shoe',ico:'👟'}] },
            { q: 'Who is a person that breaks the law?', scene: '🤠🚔', ans: 'He is an outlaw', opts: [{txt:'He is an outlaw',ico:'🤠'}, {txt:'He is a doctor',ico:'👨‍⚕️'}, {txt:'He is a teacher',ico:'👨‍🏫'}] },
            { q: 'What can too much homework do to a student?', scene: '📚📚😵', ans: 'It can overwhelm a student', opts: [{txt:'It can overwhelm a student',ico:'😵'}, {txt:'It can cook a student',ico:'🍳'}, {txt:'It can paint a student',ico:'🎨'}] },
            { q: 'What do bad leaders do to the people?', scene: '👑⛓😢', ans: 'They oppress people', opts: [{txt:'They oppress people',ico:'⛓'}, {txt:'They end oppression',ico:'🕊'}, {txt:'They help people',ico:'🤝'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hộp lời khuyên sức khỏe',
            steps: [
              '<b>Bước 1:</b> Viết 3 lời khuyên sức khỏe trên 3 mảnh giấy, mỗi lời bắt đầu bằng <i>"A piece of advice is..."</i> (ví dụ ngủ đủ, vận động ngoài trời).',
              '<b>Bước 2:</b> Bỏ giấy vào hộp, bốc từng mảnh và đọc to. Nhớ rằng "advice" và "information" không thêm -s.',
              '<b>Bước 3:</b> Chọn lời khuyên mà bạn thích nhất, viết 2 câu giải thích tại sao, rồi trình bày 1 phút cho người thân nghe.'
            ]
          }
        }
      ]
    },
    '6.19': {
      lessons: [
        {
          id: '6.19A', name: 'Bài 6.19A: Ưu nhược điểm của công việc',
          grammar: {
            formulas: ['👩 She + ⚡ kept working + 🔊 despite + 🌊 the noise', '👦 Tom + ⚡ likes his job + 🔗 despite the fact that + 💰 it pays little', '😫 Work is hard + ⚡ nevertheless / even so + 😊 she smiles'],
            tip: 'Sau "despite" là danh từ hoặc V-ing, còn "whereas" nối hai mệnh đề đối lập: Despite the rain, we played = We played, nevertheless!'
          },
          chunks: [
            { scene: '👩💻🔊', full: 'She kept working in the busy office despite the overwhelming noise', parts: [{t:'She',ico:'👩',c:'s'}, {t:'kept working',ico:'💻',c:'v'}, {t:'in the busy office despite the overwhelming noise',ico:'🌊',c:'o'}], traceWord: 'overwhelming' },
            { scene: '👦⏳💼', full: 'Tom likes his part-time job despite the fact that it pays little', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'likes',ico:'❤️',c:'v'}, {t:'his part-time job despite the fact that it pays little',ico:'⏳',c:'o'}], traceWord: 'job' },
            { scene: '😫🌴💵', full: 'Overwork makes people tired, whereas a paid holiday helps them relax', parts: [{t:'Overwork',ico:'😫',c:'s'}, {t:'makes',ico:'⚡',c:'v'}, {t:'people tired, whereas a paid holiday helps them relax',ico:'💵',c:'o'}], traceWord: 'paid' },
            { scene: '📦🎁😊', full: 'Packing is boring work; even so, Lan does it with a smile', parts: [{t:'Packing',ico:'📦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'boring work; even so, Lan does it with a smile',ico:'😊',c:'o'}], traceWord: 'packing' },
            { scene: '👩🛶🌬️', full: 'Anna used a wooden paddle despite the strong wind on the river', parts: [{t:'Anna',ico:'👩',c:'s'}, {t:'used',ico:'🤲',c:'v'}, {t:'a wooden paddle despite the strong wind on the river',ico:'🛶',c:'o'}], traceWord: 'paddle' },
            { scene: '🅿️🚗⏰', full: 'Parking was hard owing to the traffic; even so, we arrived on time', parts: [{t:'Parking',ico:'🅿️',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'hard owing to the traffic; even so, we arrived on time',ico:'🚗',c:'o'}], traceWord: 'owing' },
            { scene: '👧🪂😨', full: 'Mai wore a parachute and jumped despite the fact that she was afraid', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'wore',ico:'👕',c:'v'}, {t:'a parachute and jumped despite the fact that she was afraid',ico:'🪂',c:'o'}], traceWord: 'parachute' },
            { scene: '🦜🖐🐱', full: 'The parrot sat on my palm, whereas the cat hid under the bed', parts: [{t:'The parrot',ico:'🦜',c:'s'}, {t:'sat',ico:'⚡',c:'v'}, {t:'on my palm, whereas the cat hid under the bed',ico:'🖐',c:'o'}], traceWord: 'palm' }
          ],
          qaList: [
            { q: 'Why do many people dream about a holiday on that island?', scene: '🏝️🌴😍', ans: 'It looks like a paradise, even though the trip there is long', opts: [{ txt: 'It looks like a paradise, even though the trip there is long', ico: '🏝' }, { txt: 'It looks like a prison, and everyone wants to leave quickly', ico: '🔒' }, { txt: 'It is a cold desert with no water or trees at all', ico: '🏜️' }] },
            { q: 'What can fear do to a person during a test?', scene: '😨📝🧊', ans: 'Fear can paralyze you, so you forget the answers you know', opts: [{ txt: 'Fear can paralyze you, so you forget the answers you know', ico: '🧊' }, { txt: 'Fear always helps you remember every answer very clearly', ico: '💡' }, { txt: 'Fear can give you a new phone, so you feel proud', ico: '📱' }] },
            { q: 'What do we call the form reading in the sentence She is reading?', scene: '👧📖📚', ans: 'It is a participle, whereas read is the base verb', opts: [{ txt: 'It is a participle, whereas read is the base verb', ico: '📚' }, { txt: 'It is a pronoun, whereas read is a punctuation mark', ico: '❓' }, { txt: 'It is a number, whereas she is an adjective', ico: '🔢' }] },
            { q: 'Does Sam join the class talk?', scene: '👦😑🏫', ans: 'No, he is passive, even so he has many good ideas', opts: [{ txt: 'No, he is passive, even so he has many good ideas', ico: '😑' }, { txt: 'Yes, he is very active, even so he has no ideas', ico: '🙋' }, { txt: 'Yes, he speaks first and always shouts loudly in class', ico: '📢' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảng Ưu - Nhược Điểm',
            steps: [
              '<b>Bước 1:</b> Chọn một công việc bạn biết (bác sĩ, giáo viên, bán hàng...). Kẻ giấy làm hai cột: <i>"Good points"</i> và <i>"Bad points"</i>, ghi mỗi cột ít nhất hai ý bằng tiếng Việt.',
              '<b>Bước 2:</b> Nói với bạn hoặc người nhà 3 câu tiếng Anh nối hai cột, ví dụ <i>"The job is tiring; nevertheless, I like it."</i> hoặc <i>"Despite the stress, it pays well."</i>',
              '<b>Bước 3:</b> Đổi vai: bạn của bạn đoán công việc nào và phản biện lại bằng <i>"whereas"</i> hoặc <i>"even so"</i>. Viết lại câu hay nhất vào vở.'
            ]
          }
        },
        {
          id: '6.19B', name: 'Bài 6.19B: Mục tiêu và kế hoạch',
          grammar: {
            formulas: ['🎯 You + ⚡ need patience + 🔗 in order to / so as to + 🏆 win', '🔑 She + ⚡ wrote a password + 🔗 so that + 🔒 nobody could open it', '🎒 I + ⚡ keep it safe + 🔗 in case / for fear of + 😟 losing it'],
            tip: 'in order to / so as to + động từ nguyên mẫu; so that + can/could; in case + mệnh đề; for fear of + V-ing. Nhớ: "so as not to" để nói không muốn điều gì xảy ra!'
          },
          chunks: [
            { scene: '🛂🎒😟', full: 'I keep my passport in a safe place in case I lose my bag', parts: [{t:'I',ico:'👦',c:'s'}, {t:'keep',ico:'🤲',c:'v'}, {t:'my passport in a safe place in case I lose my bag',ico:'🛂',c:'o'}], traceWord: 'passport' },
            { scene: '👧🔑💻', full: 'She wrote a new password so that nobody could open her account', parts: [{t:'She',ico:'👧',c:'s'}, {t:'wrote',ico:'✏️',c:'v'}, {t:'a new password so that nobody could open her account',ico:'🔑',c:'o'}], traceWord: 'password' },
            { scene: '⏳🗣️🗳️', full: 'You need patience and a persuasive speech in order to win the vote', parts: [{t:'You',ico:'🧑',c:'s'}, {t:'need',ico:'⚡',c:'v'}, {t:'patience and a persuasive speech in order to win the vote',ico:'🗣',c:'o'}], traceWord: 'patience' },
            { scene: '🚓🌳🌙', full: 'A patrol walks around the park at night so as to keep us safe', parts: [{t:'A patrol',ico:'🚓',c:'s'}, {t:'walks',ico:'🚶',c:'v'}, {t:'around the park at night so as to keep us safe',ico:'🌙',c:'o'}], traceWord: 'patrol' },
            { scene: '👧🥜🥧', full: 'Mai bought a peanut pie in order to share it with her friends', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'bought',ico:'🛒',c:'v'}, {t:'a peanut pie in order to share it with her friends',ico:'🥧',c:'o'}], traceWord: 'peanut' },
            { scene: '👦🪙🎫', full: 'The penniless boy saved every penny so that he could buy a ticket', parts: [{t:'The penniless boy',ico:'👦',c:'s'}, {t:'saved',ico:'🐷',c:'v'}, {t:'every penny so that he could buy a ticket',ico:'🪙',c:'o'}], traceWord: 'penniless' },
            { scene: '🎤💊😷', full: 'The performer bought medicine at the pharmacy for fear of losing her voice', parts: [{t:'The performer',ico:'🎤',c:'s'}, {t:'bought',ico:'🛒',c:'v'}, {t:'medicine at the pharmacy for fear of losing her voice',ico:'💊',c:'o'}], traceWord: 'pharmacy' },
            { scene: '👨🖨️🗺️', full: 'Mr Tan made a photocopy of the peculiar map in case he lost it', parts: [{t:'Mr Tan',ico:'👨',c:'s'}, {t:'made',ico:'⚡',c:'v'}, {t:'a photocopy of the peculiar map in case he lost it',ico:'🖨',c:'o'}], traceWord: 'photocopy' }
          ],
          qaList: [
            { q: 'What is a phoenix in the old story?', scene: '🐦🔥✨', ans: 'A phoenix is a bird that rises from the fire', opts: [{ txt: 'A phoenix is a bird that rises from the fire', ico: '🐦' }, { txt: 'A phoenix is a fish that lives in the cold sea', ico: '🐟' }, { txt: 'A phoenix is a tool that cuts paper in the kitchen', ico: '✂️' }] },
            { q: 'Why were the children afraid in the old house?', scene: '🏚️👻😱', ans: 'They were afraid because they saw a phantom in the dark room', opts: [{ txt: 'They were afraid because they saw a phantom in the dark room', ico: '👻' }, { txt: 'They were afraid because they won a big prize at school', ico: '🏆' }, { txt: 'They were afraid because they saw a pizza in the kitchen', ico: '🍕' }] },
            { q: 'Why did the family move to another city?', scene: '👨‍👩‍👦🏠📌', ans: 'They want to live there permanently so that Nam can study', opts: [{ txt: 'They want to live there permanently so that Nam can study', ico: '📌' }, { txt: 'They will stay for one hour so that nobody sees them', ico: '⏱️' }, { txt: 'They only want a short visit, so as to take photos', ico: '📷' }] },
            { q: 'What must you show at the airport in order to travel to another country?', scene: '✈️🛂🌍', ans: 'You must show your passport at the airport in order to fly abroad', opts: [{ txt: 'You must show your passport at the airport in order to fly abroad', ico: '🛂' }, { txt: 'You must show your pencil at the airport in order to sleep', ico: '✏️' }, { txt: 'You must show your umbrella at the airport so as to buy rice', ico: '☂️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Kế Hoạch Mục Tiêu Của Em',
            steps: [
              '<b>Bước 1:</b> Viết ra một mục tiêu của em trong tháng này (ví dụ: nói tiếng Anh tự tin hơn, thi tốt môn Toán) và ba việc cần làm.',
              '<b>Bước 2:</b> Nói với một người bạn mỗi việc bằng một câu tiếng Anh với mục đích, ví dụ <i>"I study every night in order to improve my grades."</i> hoặc <i>"I set an alarm so that I can wake up early."</i>',
              '<b>Bước 3:</b> Thêm một câu dặn dò dùng <i>"in case"</i>, ví dụ <i>"I take an umbrella in case it rains."</i> Bạn của em nghe và sửa lỗi giúp em.'
            ]
          }
        },
        {
          id: '6.19C', name: 'Bài 6.19C: Nguyên nhân và kết quả',
          grammar: {
            formulas: ['🏭 Cause + ⚡ ; as a result, + 🐟 result', '🍄 Cause + ⚡ ; therefore / consequently / hence + 🚫 result', '🌧️ Result + ⚡ owing to + 🔍 cause'],
            tip: 'Trước therefore, consequently, hence thường có dấu chấm phẩy (;) và sau nó là dấu phẩy. Còn "owing to" đứng trước danh từ, chỉ nguyên nhân!'
          },
          chunks: [
            { scene: '🏭🌊🐟', full: 'Factories release a pollutant into the river; as a result, many fish die', parts: [{t:'Factories',ico:'🏭',c:'s'}, {t:'release',ico:'💨',c:'v'}, {t:'a pollutant into the river; as a result, many fish die',ico:'🐟',c:'o'}], traceWord: 'pollutant' },
            { scene: '🍄☠️🚫', full: 'The mushroom was poisonous; therefore, nobody ate it at dinner', parts: [{t:'The mushroom',ico:'🍄',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'poisonous; therefore, nobody ate it at dinner',ico:'☠️',c:'o'}], traceWord: 'poisonous' },
            { scene: '🐍☠️👨‍🌾', full: 'The snake has strong poison; consequently, the farmer stays away from it', parts: [{t:'The snake',ico:'🐍',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'strong poison; consequently, the farmer stays away from it',ico:'☠️',c:'o'}], traceWord: 'poison' },
            { scene: '👦🛏️😴', full: 'Tom slept badly on a hard bed; hence he asked for a soft pillow', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'slept',ico:'😴',c:'v'}, {t:'badly on a hard bed; hence he asked for a soft pillow',ico:'🛏',c:'o'}], traceWord: 'pillow' },
            { scene: '📮😊🙂', full: 'The postman spoke politely to everyone; as a result, people liked him', parts: [{t:'The postman',ico:'📮',c:'s'}, {t:'spoke',ico:'🗣️',c:'v'}, {t:'politely to everyone; as a result, people liked him',ico:'🙂',c:'o'}], traceWord: 'politely' },
            { scene: '💌⛈️⏰', full: 'My postcard arrived two weeks late owing to the storm', parts: [{t:'My postcard',ico:'💌',c:'s'}, {t:'arrived',ico:'📬',c:'v'}, {t:'two weeks late owing to the storm',ico:'⛈️',c:'o'}], traceWord: 'postcard' },
            { scene: '👧🥓🍍🍿', full: 'Mai ate pork and pineapple at lunch; consequently, she did not want popcorn', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'ate',ico:'😋',c:'v'}, {t:'pork and pineapple at lunch; consequently, she did not want popcorn',ico:'🍍',c:'o'}], traceWord: 'pineapple' },
            { scene: '🕳️🚧📌', full: 'A pit appeared in the road; hence the workers pinned a sign on the fence', parts: [{t:'A pit',ico:'🕳',c:'s'}, {t:'appeared',ico:'⚡',c:'v'}, {t:'in the road; hence the workers pinned a sign on the fence',ico:'📌',c:'o'}], traceWord: 'pit' }
          ],
          qaList: [
            { q: 'What does the monk do every morning at the temple?', scene: '🧘🙏🌅', ans: 'His deep piety is strong, so he prays for an hour', opts: [{ txt: 'His deep piety is strong, so he prays for an hour', ico: '🙏' }, { txt: 'His deep piety is weak, so he never goes there', ico: '🚫' }, { txt: 'He plays football for an hour in the busy street', ico: '⚽' }] },
            { q: 'How did the cool wind feel in the hot afternoon?', scene: '🌬️☀️😊', ans: 'It felt pleasantly cool; as a result, we sat outside', opts: [{ txt: 'It felt pleasantly cool; as a result, we sat outside', ico: '😊' }, { txt: 'It felt unpleasant and dirty; consequently, we went inside', ico: '🏠' }, { txt: 'It felt dirty and wet; hence we went to bed early', ico: '🛏' }] },
            { q: 'Why did the other children stop playing with Tom?', scene: '👦🧸😠', ans: 'Tom is very possessive, so he never shares his toys', opts: [{ txt: 'Tom is very possessive, so he never shares his toys', ico: '😠' }, { txt: 'Tom is very generous, so he always shares his toys', ico: '🎁' }, { txt: 'Tom is very tall, so he can touch the roof', ico: '📏' }] },
            { q: 'Why did the doctor say the red mushrooms were dangerous?', scene: '👨‍⚕️🍄☠️', ans: 'They are poisonous; as a result, no one should eat them', opts: [{ txt: 'They are poisonous; as a result, no one should eat them', ico: '☠️' }, { txt: 'They are very sweet; therefore, everyone should eat many', ico: '🍬' }, { txt: 'They are cheap; hence you should buy ten', ico: '💰' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Chuỗi Nguyên Nhân - Kết Quả',
            steps: [
              '<b>Bước 1:</b> Nhìn quanh nhà hoặc lớp học và chọn 3 sự việc xảy ra gần đây (mưa to, đi ngủ muộn, quên bài tập...). Ghi nguyên nhân ở bên trái, kết quả ở bên phải.',
              '<b>Bước 2:</b> Nói thành câu có liên từ, ví dụ <i>"It rained heavily; as a result, the match was cancelled."</i> hoặc <i>"I slept late; consequently, I was tired."</i> Thử dùng cả <i>"therefore"</i> và <i>"hence"</i>.',
              '<b>Bước 3:</b> Đổi cách nói với <i>"owing to"</i>: <i>"The match was cancelled owing to the rain."</i> Bạn của em kiểm tra dấu chấm phẩy (;) và dấu phẩy giúp em.'
            ]
          }
        }
      ]
    },
    '6.20': {
      lessons: [
        {
          id: '6.20A', name: 'Bài 6.20A: Thử thách thể thao',
          grammar: {
            formulas: ['🎒 The bag + ⚡ is + 🏋️ too heavy for me to carry', '💪 She + ⚡ is + 🏃 strong enough to run', '🏟️ The stadium + ⚡ brings + 🌟 such prosperity'],
            tip: 'too = quá (nên không làm được) • enough đứng SAU tính từ • such + danh từ không đếm được thì KHÔNG có a!'
          },
          chunks: [
            { scene: '🧒🏫🏁', full: 'The preschool children are too young to play in the big race', parts: [{t:'The preschool children',ico:'🧒',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'too young to play in the big race',ico:'🏁',c:'o'}], traceWord: 'preschool' },
            { scene: '👧🙏🏃', full: 'She said a quiet prayer before the race and felt prepared enough to run', parts: [{t:'She',ico:'👧',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'a quiet prayer before the race and felt prepared enough to run',ico:'🙏',c:'o'}], traceWord: 'prayer' },
            { scene: '⏰💎🐌', full: 'Time is too precious for a player to waste on procrastination', parts: [{t:'Time',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'too precious for a player to waste on procrastination',ico:'💎',c:'o'}], traceWord: 'precious' },
            { scene: '🔤🔍📖', full: 'A prefix is small enough for a student to find at the start of a word', parts: [{t:'A prefix',ico:'🔤',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'small enough for a student to find at the start of a word',ico:'🔍',c:'o'}], traceWord: 'prefix' },
            { scene: '📖👧📚', full: 'The word under is a preposition that is easy enough for a child to learn', parts: [{t:'The word under',ico:'📖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a preposition that is easy enough for a child to learn',ico:'🔤',c:'o'}], traceWord: 'preposition' },
            { scene: '📖👦👧', full: 'The pronoun they is short enough for every young student to use', parts: [{t:'The pronoun they',ico:'📖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'short enough for every young student to use',ico:'✏️',c:'o'}], traceWord: 'pronoun' },
            { scene: '👩‍⚕️📝🦵', full: 'The doctor wrote a prescription because her leg was too sore to run', parts: [{t:'The doctor',ico:'👩‍⚕️',c:'s'}, {t:'wrote',ico:'✍️',c:'v'}, {t:'a prescription because her leg was too sore to run',ico:'📝',c:'o'}], traceWord: 'prescription' },
            { scene: '🏟️📈😊', full: 'The new stadium brings such prosperity to our town that everyone feels proud', parts: [{t:'The new stadium',ico:'🏟️',c:'s'}, {t:'brings',ico:'🎁',c:'v'}, {t:'such prosperity to our town that everyone feels proud',ico:'📈',c:'o'}], traceWord: 'prosperity' }
          ],
          qaList: [
            { q: 'How can we help with the preservation of old pottery?', scene: '🏺🤲✅', ans: 'We can be careful enough to keep old pottery safe', opts: [{ txt: 'We can be careful enough to keep old pottery safe', ico: '🏺' }, { txt: 'We can drop it on the hard floor and run away', ico: '💥' }, { txt: 'We can leave it outside in the rain all night', ico: '🌧️' }] },
            { q: 'Who is kind enough to give us water after the long race?', scene: '⛪🥤🏃', ans: 'The old priest in our village is kind enough to give us water', opts: [{ txt: 'The old priest in our village is kind enough to give us water', ico: '⛪' }, { txt: 'The tall teacher is too busy to talk with us today', ico: '👨‍🏫' }, { txt: 'The big dog is too tired to carry the water', ico: '🐕' }] },
            { q: 'What does every player need after a hard game?', scene: '⚽😮‍💨🚪', ans: 'Every player needs enough privacy to rest in a quiet room', opts: [{ txt: 'Every player needs enough privacy to rest in a quiet room', ico: '🔐' }, { txt: 'Every player needs a heavy bag to carry all day', ico: '🎒' }, { txt: 'Every player needs a loud song to hear all night', ico: '🔊' }] },
            { q: 'What will the mayor proclaim in the stadium today?', scene: '🎙️🏟️🚭', ans: 'He will proclaim the prohibition of smoking in the stadium', opts: [{ txt: 'He will proclaim the prohibition of smoking in the stadium', ico: '🚫' }, { txt: 'He will sing a very long song about a small cat', ico: '🐱' }, { txt: 'He will eat a big pizza with the winner', ico: '🍕' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Quá nặng hay đủ khỏe?',
            steps: [
              '<b>Bước 1:</b> Em lấy 6 đồ vật trong nhà (cặp sách, bút, chai nước, gối, quyển sách, giày) và xếp theo thứ tự từ nhẹ đến nặng.',
              '<b>Bước 2:</b> Cầm từng món và nói một câu với bạn hoặc người nhà, ví dụ <i>"This bag is too heavy for me to carry."</i> hoặc <i>"I am strong enough to lift this book."</i>.',
              '<b>Bước 3:</b> Viết ngắn 3 câu về một môn thể thao em thích, mỗi câu dùng một từ <i>too</i>, <i>enough</i> hoặc <i>such</i>, rồi đọc cho cả nhà nghe.'
            ]
          }
        },
        {
          id: '6.20B', name: 'Bài 6.20B: Luyện tập mỗi ngày',
          grammar: {
            formulas: ['🏃 I + ⚡ still run + 🌅 every day', '🐶 My puppy + ⚡ is nearly + 🧥 big enough', '💰 She + ⚡ has hardly + 👛 any money'],
            tip: 'hardly / barely = gần như KHÔNG (đừng thêm not nữa!) • still = vẫn • already = đã rồi • yet = chưa • trạng từ đứng sau be nhưng trước động từ thường.'
          },
          chunks: [
            { scene: '🏘️💰💪', full: 'The town is already prosperous but the people still work hard every day', parts: [{t:'The town',ico:'🏘️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'already prosperous but the people still work hard every day',ico:'💰',c:'o'}], traceWord: 'prosperous' },
            { scene: '👧⛑️🚲', full: 'She already has a protective helmet but she still checks it every day', parts: [{t:'She',ico:'👧',c:'s'}, {t:'already has',ico:'🤲',c:'v'}, {t:'a protective helmet but she still checks it every day',ico:'🧤',c:'o'}], traceWord: 'protective' },
            { scene: '👨‍🏫📣🧓', full: 'The coach publicly shared a proverb about practice and we still remember it', parts: [{t:'The coach',ico:'👨‍🏫',c:'s'}, {t:'publicly shared',ico:'📣',c:'v'}, {t:'a proverb about practice and we still remember it',ico:'🧓',c:'o'}], traceWord: 'proverb' },
            { scene: '🏃🌦️✅', full: 'I will still run every day provided the weather is not too bad', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will still run',ico:'🏃',c:'v'}, {t:'every day provided the weather is not too bad',ico:'🤞',c:'o'}], traceWord: 'provided' },
            { scene: '👩‍🏫🏅📚', full: 'The coach is already qualified to teach but she still studies every night', parts: [{t:'The coach',ico:'👩‍🏫',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'already qualified to teach but she still studies every night',ico:'🏅',c:'o'}], traceWord: 'qualified' },
            { scene: '🐶🧥😄', full: 'My puppy is nearly big enough to wear my old pullover', parts: [{t:'My puppy',ico:'🐶',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nearly big enough to wear my old pullover',ico:'🧥',c:'o'}], traceWord: 'puppy' },
            { scene: '🤖💧⚡', full: 'The machine can already purify water but it still needs more power', parts: [{t:'The machine',ico:'🤖',c:'s'}, {t:'can already purify',ico:'💧',c:'v'}, {t:'water but it still needs more power',ico:'⚡',c:'o'}], traceWord: 'purify' },
            { scene: '🚆🌳🚧', full: 'The railway to the rainforest is nearly finished but trains do not run yet', parts: [{t:'The railway to the rainforest',ico:'🚆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nearly finished but trains do not run yet',ico:'🚧',c:'o'}], traceWord: 'railway' }
          ],
          qaList: [
            { q: 'Where is she standing with her purse in her hand?', scene: '👩👛🚶', ans: 'She is standing in the queue and is almost at the front', opts: [{ txt: 'She is standing in the queue and is almost at the front', ico: '🚶' }, { txt: 'She is sitting on the bus and is already asleep', ico: '🚌' }, { txt: 'She is playing in the water and is nearly wet', ico: '💦' }] },
            { q: 'What did the people feel last night in the town?', scene: '🌋🏠😨', ans: 'They felt a small quake and it almost made the houses fall', opts: [{ txt: 'They felt a small quake and it almost made the houses fall', ico: '🌋' }, { txt: 'They felt a warm wind and it hardly moved the leaves', ico: '🍃' }, { txt: 'They heard a song and it even made them dance', ico: '💃' }] },
            { q: 'Why was the old worker in a rage at the railroad?', scene: '👷🤬🚂', ans: 'He was in a rage because the train was already late again', opts: [{ txt: 'He was in a rage because the train was already late again', ico: '🤬' }, { txt: 'He was glad because the train had already come', ico: '😊' }, { txt: 'He was asleep because the train was still far away', ico: '😴' }] },
            { q: 'Have you finished your daily practice for the match yet?', scene: '⚽📅✅', ans: 'Yes I have already finished it and I even did more', opts: [{ txt: 'Yes I have already finished it and I even did more', ico: '✅' }, { txt: 'The bus is almost here at the station', ico: '🚌' }, { txt: 'My brother is nearly ready to go to school', ico: '🎒' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký luyện tập 5 ngày',
            steps: [
              '<b>Bước 1:</b> Em chọn một kỹ năng muốn luyện (chạy bộ, đọc to, vẽ...) và kẻ bảng 5 ngày trên giấy, mỗi ngày một ô.',
              '<b>Bước 2:</b> Mỗi ngày tô ô và viết một câu ngắn, ví dụ <i>"I have already practiced today."</i> hoặc <i>"I have not finished yet."</i>, nhớ thử dùng <i>still</i>, <i>hardly</i> hoặc <i>almost</i>.',
              '<b>Bước 3:</b> Cuối tuần thuyết trình mini 1 phút cho gia đình: kể em đã tiến bộ thế nào bằng 3 câu tiếng Anh.'
            ]
          }
        },
        {
          id: '6.20C', name: 'Bài 6.20C: Cổ vũ và thi đấu',
          grammar: {
            formulas: ['📣 There + ⚡ were + 👏 so many fans that...', '🍽️ The team + ⚡ had + 🍞 so little food that...', '🎉 We + ⚡ had + 😄 such a lot of fun'],
            tip: 'so many + danh từ đếm được, so much / so little + danh từ không đếm được, so few + đếm được • such a lot of = rất nhiều, đi với that chỉ kết quả.'
          },
          chunks: [
            { scene: '👏🟨📣', full: 'There were so many fans that the referee could hardly hear the whistle', parts: [{t:'There',ico:'📍',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'so many fans that the referee could hardly hear the whistle',ico:'📣',c:'o'}], traceWord: 'referee' },
            { scene: '👏🥤🍿', full: 'The fans ate so many refreshments that nothing was left', parts: [{t:'The fans',ico:'👏',c:'s'}, {t:'ate',ico:'😋',c:'v'}, {t:'so many refreshments that nothing was left',ico:'🥤',c:'o'}], traceWord: 'refreshments' },
            { scene: '🍓⚽😋', full: 'There were so few raspberries left that each player got only one', parts: [{t:'There',ico:'📍',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'so few raspberries left that each player got only one',ico:'🍓',c:'o'}], traceWord: 'raspberries' },
            { scene: '⚽🍞👦', full: 'The team had so little food that every player got a small ration', parts: [{t:'The team',ico:'⚽',c:'s'}, {t:'had',ico:'🤲',c:'v'}, {t:'so little food that every player got a small ration',ico:'🍞',c:'o'}], traceWord: 'ration' },
            { scene: '👧🎙️📜', full: 'She practiced so much that she could recite the poem at the reception', parts: [{t:'She',ico:'👧',c:'s'}, {t:'practiced',ico:'📚',c:'v'}, {t:'so much that she could recite the poem at the reception',ico:'🎙️',c:'o'}], traceWord: 'recite' },
            { scene: '🔴🎥🏟️', full: 'The recording of the match was extremely clear and completely free of noise', parts: [{t:'The recording of the match',ico:'🔴',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'extremely clear and completely free of noise',ico:'🔊',c:'o'}], traceWord: 'recording' },
            { scene: '🏫🌿📄', full: 'Our school has such a lot of recycled paper that every class can use it', parts: [{t:'Our school',ico:'🏫',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'such a lot of recycled paper that every class can use it',ico:'🌿',c:'o'}], traceWord: 'recycled' },
            { scene: '⛈️🏗🪑', full: 'The storm was so strong that we had to rebuild the stage and rearrange the chairs', parts: [{t:'The storm',ico:'⛈️',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'so strong that we had to rebuild the stage and rearrange the chairs',ico:'🏗',c:'o'}], traceWord: 'rebuild' }
          ],
          qaList: [
            { q: 'Why did the customer ask for a refund at the shop?', scene: '🧍👕💸', ans: 'The shirt was so small that it did not fit him', opts: [{ txt: 'The shirt was so small that it did not fit him', ico: '👕' }, { txt: 'He was so happy that he wanted to dance', ico: '💃' }, { txt: 'The shop had such a lot of fresh bread today', ico: '🍞' }] },
            { q: 'Where can I reclaim my bag after the match?', scene: '🎒🔙🏟️', ans: 'You can reclaim it at the front desk of the stadium', opts: [{ txt: 'You can reclaim it at the front desk of the stadium', ico: '🏟️' }, { txt: 'You can find it in the sky above the clouds', ico: '☁️' }, { txt: 'You can put it on your head like a hat', ico: '🎩' }] },
            { q: 'Why is recycling extremely important for the reef?', scene: '🌱🐠🌊', ans: 'Because so much plastic in the sea can hurt the fish', opts: [{ txt: 'Because so much plastic in the sea can hurt the fish', ico: '🐠' }, { txt: 'Because the reef is completely dry and has no water', ico: '🏜️' }, { txt: 'Because the fish want to play football with us', ico: '⚽' }] },
            { q: 'Which thing is extremely dangerous for a small child to touch?', scene: '🧒🧼⚠️', ans: 'A razor is so sharp that a child should never touch it', opts: [{ txt: 'A razor is so sharp that a child should never touch it', ico: '🧼' }, { txt: 'A soft pullover is completely safe for a child to wear', ico: '🧥' }, { txt: 'A cup of warm milk is safe for a child to drink', ico: '🥛' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cổ vũ trận đấu mini',
            steps: [
              '<b>Bước 1:</b> Em và bạn (hoặc người nhà) chia thành 2 đội, mỗi đội chọn một trò thi đấu nhỏ như ném bóng giấy vào hộp hoặc đọc nhanh một đoạn.',
              '<b>Bước 2:</b> Đội cổ vũ nói những câu to và rõ như <i>"There are so many fans that I can hardly hear!"</i> hoặc <i>"We have such a lot of fun!"</i>.',
              '<b>Bước 3:</b> Cuối trận, mỗi người viết 2 câu tổng kết với <i>so many</i>, <i>so much</i>, <i>extremely</i> hoặc <i>completely</i> rồi đọc cho cả nhóm nghe.'
            ]
          }
        }
      ]
    },
    '6.21': {
      lessons: [
        {
          id: '6.21A', name: 'Bài 6.21A: Bạn bè và mâu thuẫn',
          grammar: {
            formulas: ['👦 Lan and Mai + 💥 fell out with + 🗣 each other', '👧 I + 🤝 will make up with + 👩 Anna', '👦 We + 😔 let down / 🌟 look up to + 👤 a friend'],
            tip: 'Cụm động từ là một khối: get on with = hòa thuận, fall out with = cãi nhau, make up = làm lành, look up to = ngưỡng mộ, let down = làm ai thất vọng!'
          },
          chunks: [
            { scene: '👧💥👧', full: 'Lan and Mai fell out with each other regarding a small secret', parts: [{t:'Lan and Mai',ico:'👧👧',c:'s'}, {t:'fell out with',ico:'💥',c:'v'}, {t:'each other regarding a small secret',ico:'📌',c:'o'}], traceWord: 'regarding' },
            { scene: '🙅😔👦', full: 'His refusal to say sorry let down his best friend', parts: [{t:'His refusal to say sorry',ico:'🙅',c:'s'}, {t:'let down',ico:'😔',c:'v'}, {t:'his best friend',ico:'👦',c:'o'}], traceWord: 'refusal' },
            { scene: '👧🤝🔙', full: 'I will make up with Anna and regain her trust', parts: [{t:'I',ico:'👧',c:'s'}, {t:'will make up with',ico:'🤝',c:'v'}, {t:'Anna and regain her trust',ico:'🔙',c:'o'}], traceWord: 'regain' },
            { scene: '👧👫😌', full: 'Mai gets on with her classmates because the club is relaxing', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'gets on with',ico:'👫',c:'v'}, {t:'her classmates because the club is relaxing',ico:'😌',c:'o'}], traceWord: 'relaxing' },
            { scene: '🏫🌟👨‍🏫', full: 'The remainder of the class looks up to our kind captain', parts: [{t:'The remainder of the class',ico:'➗',c:'s'}, {t:'looks up to',ico:'🌟',c:'v'}, {t:'our kind captain',ico:'🧑',c:'o'}], traceWord: 'remainder' },
            { scene: '💬💊👫', full: 'Saying sorry is the best remedy when friends fall out', parts: [{t:'Saying sorry',ico:'💬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the best remedy when friends fall out',ico:'💊',c:'o'}], traceWord: 'remedy' },
            { scene: '🕯🤝👫', full: 'Fond remembrance of old days helps friends make up quickly', parts: [{t:'Fond remembrance of old days',ico:'🕯',c:'s'}, {t:'helps',ico:'🆘',c:'v'}, {t:'friends make up quickly',ico:'🤝',c:'o'}], traceWord: 'remembrance' },
            { scene: '🔄👫❤️', full: 'We renew our friendship and promise never to let each other down', parts: [{t:'We',ico:'👫',c:'s'}, {t:'renew',ico:'🔄',c:'v'}, {t:'our friendship and promise never to let each other down',ico:'❤️',c:'o'}], traceWord: 'renew' }
          ],
          qaList: [
            { q: 'Why do you look up to your respectable neighbor?', scene: '🎩👵🌟', ans: 'She never lets her friends down', opts: [{ txt: 'She never lets her friends down', ico: '🎩' }, { txt: 'Because it is raining', ico: '🌧' }, { txt: 'At the train station', ico: '🚉' }] },
            { q: 'How will you repay a friend who helped you repeatedly?', scene: '💸🎁👫', ans: 'I will repay him with a gift', opts: [{ txt: 'I will repay him with a gift', ico: '🎁' }, { txt: 'I will shout at him loudly', ico: '😤' }, { txt: 'He is eleven years old', ico: '🎂' }] },
            { q: 'Where did you make the reservation for dinner?', scene: '📆🍽🏘', ans: 'In a residential area near school', opts: [{ txt: 'In a residential area near school', ico: '🏘' }, { txt: 'It was very cold', ico: '🥶' }, { txt: 'With a red pen', ico: '🖊' }] },
            { q: 'What can you retell about the reunification of Vietnam?', scene: '🗣🇻🇳⏪', ans: 'In retrospect, it brought families together', opts: [{ txt: 'In retrospect, it brought families together', ico: '🇻🇳' }, { txt: 'It is a kind of fish', ico: '🐟' }, { txt: 'I play football on Monday', ico: '⚽' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Làm lành bằng lời hay',
            steps: [
              '<b>Bước 1:</b> Nhớ lại một lần em và bạn giận nhau. Viết 3 câu ngắn, dùng ít nhất hai cụm như <i>"fall out with"</i> và <i>"make up"</i>.',
              '<b>Bước 2:</b> Cùng một bạn (hoặc người nhà) đóng vai hai người bạn đang giận nhau. Luyện nói <i>"I am sorry. I do not want to let you down."</i> rồi làm lành.',
              '<b>Bước 3:</b> Nói 1 phút về một người em ngưỡng mộ với câu <i>"I look up to ... because ..."</i>. Người nghe góp ý cách dùng cụm động từ.'
            ]
          }
        },
        {
          id: '6.21B', name: 'Bài 6.21B: Một từ nhiều nghĩa',
          grammar: {
            formulas: ['✈️ The plane + 🛫 will take off + 📍 from the runway', '🍊 The orange + 🔍 turned out + ✅ to be ripe', '❓ A question + ⬆️ came up + 🏫 in class'],
            tip: 'Một cụm động từ có thể có nhiều nghĩa: take off là cất cánh hoặc cởi ra, turn out là hóa ra, come up là xuất hiện. Hãy đoán nghĩa theo ngữ cảnh!'
          },
          chunks: [
            { scene: '✈️🛫🌅', full: 'The plane will take off from the long runway at noon', parts: [{t:'The plane',ico:'✈️',c:'s'}, {t:'will take off',ico:'🛫',c:'v'}, {t:'from the long runway at noon',ico:'🛣',c:'o'}], traceWord: 'runway' },
            { scene: '👨‍👩‍👧🗑🛣', full: 'We pick up the rubbish by the roadside every Sunday morning', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'pick up',ico:'🧤',c:'v'}, {t:'the rubbish by the roadside every Sunday morning',ico:'🗑',c:'o'}], traceWord: 'rubbish' },
            { scene: '🍊😋✅', full: 'The orange turned out to be ripe and very sweet', parts: [{t:'The orange',ico:'🍊',c:'s'}, {t:'turned out',ico:'🔍',c:'v'}, {t:'to be ripe and very sweet',ico:'😋',c:'o'}], traceWord: 'ripe' },
            { scene: '🍌🤢🔍', full: 'That old banana turned out to be rotten inside', parts: [{t:'That old banana',ico:'🍌',c:'s'}, {t:'turned out',ico:'🔍',c:'v'}, {t:'to be rotten inside',ico:'🤢',c:'o'}], traceWord: 'rotten' },
            { scene: '👧📝⏰', full: 'She put off her revision until the night before the exam', parts: [{t:'She',ico:'👧',c:'s'}, {t:'put off',ico:'⏰',c:'v'}, {t:'her revision until the night before the exam',ico:'📝',c:'o'}], traceWord: 'revision' },
            { scene: '❓🏃👦🏫', full: 'A question about the runaway boy came up in our class', parts: [{t:'A question about the runaway boy',ico:'🏃',c:'s'}, {t:'came up',ico:'⬆️',c:'v'}, {t:'in our class',ico:'🏫',c:'o'}], traceWord: 'runaway' },
            { scene: '👦🥾🏞', full: 'He took off his rubber boots and ran up the rolling hill', parts: [{t:'He',ico:'👦',c:'s'}, {t:'took off',ico:'🥾',c:'v'}, {t:'his rubber boots and ran up the rolling hill',ico:'🏞',c:'o'}], traceWord: 'rubber' },
            { scene: '😢💭😤', full: 'Her sadness came up again when he spoke rudely to her', parts: [{t:'Her sadness',ico:'😢',c:'s'}, {t:'came up',ico:'⬆️',c:'v'}, {t:'again when he spoke rudely to her',ico:'😤',c:'o'}], traceWord: 'sadness' }
          ],
          qaList: [
            { q: 'Did the leaders want to reunify the country?', scene: '🤝🇻🇳🎉', ans: 'Yes, they wanted peace', opts: [{ txt: 'Yes, they wanted peace', ico: '🕊' }, { txt: 'No, it is a big apple', ico: '🍎' }, { txt: 'At seven in the morning', ico: '⏰' }] },
            { q: 'What was the old wall riddled with?', scene: '🧱🕳🧩', ans: 'It was riddled with holes', opts: [{ txt: 'It was riddled with holes', ico: '🕳' }, { txt: 'It was very happy', ico: '😄' }, { txt: 'My brother is tall', ico: '🧍' }] },
            { q: 'Why is the temple sacred to many people?', scene: '🛐🙏⛩', ans: 'People pray there every day', opts: [{ txt: 'People pray there every day', ico: '🙏' }, { txt: 'It is next to a bus', ico: '🚌' }, { txt: 'Because he is eating', ico: '🍜' }] },
            { q: 'What did the family see on safari?', scene: '🦁🚙🌍', ans: 'They saw lions on safari', opts: [{ txt: 'They saw lions on safari', ico: '🦁' }, { txt: 'They saw an elephant', ico: '🐘' }, { txt: 'We are in the kitchen', ico: '🍳' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đoán nghĩa theo ngữ cảnh',
            steps: [
              '<b>Bước 1:</b> Viết 5 câu, mỗi câu dùng một cụm: <i>"take off"</i>, <i>"pick up"</i>, <i>"turn out"</i>, <i>"come up"</i>, <i>"put off"</i>. Với <i>"take off"</i>, viết hai câu có nghĩa khác nhau.',
              '<b>Bước 2:</b> Đọc câu cho bạn nghe nhưng nói "bíp" thay cho cụm động từ. Bạn đoán cụm nào và giải thích nghĩa bằng tiếng Việt.',
              '<b>Bước 3:</b> Cùng nhau chọn câu hay nhất, đọc to và cho điểm: đúng nghĩa 1 điểm, ngữ pháp đúng 1 điểm.'
            ]
          }
        },
        {
          id: '6.21C', name: 'Bài 6.21C: Kế hoạch và trở ngại',
          grammar: {
            formulas: ['🛰 A problem + 💥 caused + 🚧 a big delay', '🧑 We + 🚪 set out / ✍️ wrote down + 📋 the plan', '👦 He + 🏳️ gave up + 🗺 the plan'],
            tip: 'Tiểu từ mang nghĩa: up = hoàn tất hoặc bỏ cuộc, out = bắt đầu hành trình, off = rời đi, down = ghi lại hoặc hạ xuống. Có thể dùng danh từ như breakdown (sự hỏng), outcome (kết quả), setback (trở ngại)!'
          },
          chunks: [
            { scene: '🛰💥🚧', full: 'A problem with the satellite caused a big delay for our plan', parts: [{t:'A problem with the satellite',ico:'🛰',c:'s'}, {t:'caused',ico:'💥',c:'v'}, {t:'a big delay for our plan',ico:'🚧',c:'o'}], traceWord: 'satellite' },
            { scene: '🚗🌄🦺', full: 'We set out early to take a scenic road and arrive safely', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'set out',ico:'🚗',c:'v'}, {t:'early to take a scenic road and arrive safely',ico:'🌄',c:'o'}], traceWord: 'scenic' },
            { scene: '🧑✍️🩴', full: 'The salesman wrote down the price of the sandal for me', parts: [{t:'The salesman',ico:'🧑',c:'s'}, {t:'wrote down',ico:'✍️',c:'v'}, {t:'the price of the sandal for me',ico:'🩴',c:'o'}], traceWord: 'sandal' },
            { scene: '👧😊📋', full: 'I was satisfied with the result after we worked out the plan', parts: [{t:'I',ico:'👧',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'satisfied with the result after we worked out the plan',ico:'😊',c:'o'}], traceWord: 'satisfied' },
            { scene: '👧🏳️⛰😱', full: 'My schoolmate gave up the plan because the hill looked scary', parts: [{t:'My schoolmate',ico:'🧑',c:'s'}, {t:'gave up',ico:'🏳️',c:'v'}, {t:'the plan because the hill looked scary',ico:'😱',c:'o'}], traceWord: 'schoolmate' },
            { scene: '👩😌🩹', full: 'The schoolteacher did not scold him for the small scratch', parts: [{t:'The schoolteacher',ico:'👩',c:'s'}, {t:'did not scold',ico:'😌',c:'v'}, {t:'him for the small scratch',ico:'🩹',c:'o'}], traceWord: 'scratch' },
            { scene: '⛑🚲🛡', full: 'Wearing a helmet is a good safeguard when we cycle down a hill', parts: [{t:'Wearing a helmet',ico:'⛑',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a good safeguard when we cycle down a hill',ico:'🛡',c:'o'}], traceWord: 'safeguard' },
            { scene: '👨🍲🐟', full: 'Dad took down the saucepan and cooked some salmon for us', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'took down',ico:'⬇️',c:'v'}, {t:'the saucepan and cooked some salmon for us',ico:'🍲',c:'o'}], traceWord: 'saucepan' }
          ],
          qaList: [
            { q: 'Why was the boy scared?', scene: '😨🌙🚪', ans: 'He heard a strange noise', opts: [{ txt: 'He heard a strange noise', ico: '😨' }, { txt: 'He likes blue shoes', ico: '👟' }, { txt: 'It is on the table', ico: '🍽' }] },
            { q: 'Where is the cup?', scene: '☕🍵🍽', ans: 'It is on the saucer', opts: [{ txt: 'It is on the saucer', ico: '🍵' }, { txt: 'It is in the sky', ico: '☁️' }, { txt: 'It is my uncle', ico: '👨' }] },
            { q: 'What did the children do with the cake?', scene: '🎂👧👦😋', ans: 'They ate it up', opts: [{ txt: 'They ate it up', ico: '😋' }, { txt: 'They are very tall', ico: '📏' }, { txt: 'On Friday afternoon', ico: '📅' }] },
            { q: 'How did the plan turn out?', scene: '📋✅🎉', ans: 'It turned out well in the end', opts: [{ txt: 'It turned out well in the end', ico: '🎉' }, { txt: 'It is under the bed', ico: '🛏' }, { txt: 'She has two brothers', ico: '👫' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Kế hoạch cuối tuần và cách vượt trở ngại',
            steps: [
              '<b>Bước 1:</b> Viết kế hoạch cuối tuần gồm 4 việc. Dùng các cụm như <i>"set out"</i>, <i>"work out"</i>, <i>"write down"</i> trong câu.',
              '<b>Bước 2:</b> Nghĩ ra một trở ngại, ví dụ trời mưa. Nói với bạn: <i>"If it rains, we will ..."</i> và giải thích cách xử lý.',
              '<b>Bước 3:</b> Thuyết trình mini 1 phút. Cuối cùng nói <i>"The result was ..."</i> và nhờ bạn nhận xét.'
            ]
          }
        }
      ]
    },
    '6.22': {
      lessons: [
        {
          id: '6.22A', name: 'Bài 6.22A: Thành công ở trường học',
          grammar: {
            formulas: ['🧑‍🎓 The student + ⚡ depends on + 📚 hard work', '👥 The club + ⚡ consists of + 🧑‍🤝‍🧑 ten students', '🧑‍🎓 Mai + ⚡ succeeded in + 🏆 the contest'],
            tip: 'Mỗi động từ "kết đôi" với một giới từ: depend ON, rely ON, consist OF, succeed IN, object TO. Sau giới từ là danh từ hoặc V-ing!'
          },
          chunks: [
            { scene: '🎨🗿🧑', full: 'The art class succeeded in making a sculpture of a settler', parts: [{t:'The art class',ico:'🎨',c:'s'}, {t:'succeeded in',ico:'🏆',c:'v'}, {t:'making a sculpture of a settler',ico:'🗿',c:'o'}], traceWord: 'sculpture' },
            { scene: '🔬🌊🌿', full: 'Our science group relies on seawater and seaweed for the class', parts: [{t:'Our science group',ico:'🔬',c:'s'}, {t:'relies on',ico:'🤝',c:'v'}, {t:'seawater and seaweed for the class',ico:'🌊',c:'o'}], traceWord: 'seaweed' },
            { scene: '🏫📈💪', full: 'My success at school depends on how hard I study every day', parts: [{t:'My success at school',ico:'🏫',c:'s'}, {t:'depends on',ico:'⚖',c:'v'}, {t:'how hard I study every day',ico:'💪',c:'o'}], traceWord: 'depends' },
            { scene: '🏫👥🧑‍🏫', full: 'The school club consists of ten students and one teacher', parts: [{t:'The school club',ico:'🏫',c:'s'}, {t:'consists of',ico:'🧩',c:'v'}, {t:'ten students and one teacher',ico:'👥',c:'o'}], traceWord: 'consists' },
            { scene: '👕♻🙁', full: 'Some students secretly object to wearing second-hand clothes at school', parts: [{t:'Some students',ico:'🧑‍🎓',c:'s'}, {t:'secretly object to',ico:'🤫',c:'v'}, {t:'wearing second-hand clothes at school',ico:'♻',c:'o'}], traceWord: 'secretly' },
            { scene: '😒📒🙅', full: 'Selfish students often object to sharing their notes with others', parts: [{t:'Selfish students',ico:'😒',c:'s'}, {t:'often object to',ico:'🙅',c:'v'}, {t:'sharing their notes with others',ico:'📒',c:'o'}], traceWord: 'selfish' },
            { scene: '👧✊🎤', full: 'Mai succeeded in seizing every chance to use the self-service library', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'succeeded in',ico:'🏆',c:'v'}, {t:'seizing every chance to use the self-service library',ico:'🛒',c:'o'}], traceWord: 'seizing' },
            { scene: '🎭🌑🏞', full: 'The setting of the play consists of a shadowy forest and a small house', parts: [{t:'The setting of the play',ico:'🏞',c:'s'}, {t:'consists of',ico:'🧩',c:'v'}, {t:'a shadowy forest and a small house',ico:'🌑',c:'o'}], traceWord: 'shadowy' }
          ],
          qaList: [
            { q: 'What did the boy do wrong?', scene: '👦🤥😞', ans: 'He told a shameful lie', opts: [{txt:'He told a shameful lie',ico:'😞'}, {txt:'He helped a friend',ico:'🤝'}, {txt:'He cleaned the room',ico:'🧹'}] },
            { q: 'Where does Dad shave every morning?', scene: '👨🪒🪞', ans: 'He shaves in front of the mirror', opts: [{txt:'He shaves in front of the mirror',ico:'🪞'}, {txt:'He shaves at the bus stop',ico:'🚌'}, {txt:'He shaves in the river',ico:'🏞'}] },
            { q: 'Why was the student upset?', scene: '🧑‍🎓📝😔', ans: 'She felt shame after the mistake', opts: [{txt:'She felt shame after the mistake',ico:'😔'}, {txt:'She won a big prize',ico:'🏆'}, {txt:'She got a new bag',ico:'🎒'}] },
            { q: 'How did the storm hurt the school?', scene: '⛈🏫⚠', ans: 'It severely damaged the roof', opts: [{txt:'It severely damaged the roof',ico:'⚠'}, {txt:'It gave the school a gift',ico:'🎁'}, {txt:'It made the roof taller',ico:'📏'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bài nói 1 phút về thành công',
            steps: [
              '<b>Bước 1:</b> Viết 5 câu về học tập của em, mỗi câu dùng một cụm: depend on, rely on, consist of, succeed in, object to. Ví dụ: <i>"My grade depends on my homework."</i>',
              '<b>Bước 2:</b> Đọc to 5 câu cho một bạn hoặc người thân nghe. Bạn nghe lắng nghe và đoán xem giới từ nào đi với động từ nào.',
              '<b>Bước 3:</b> Nói 1 phút: <i>"I succeeded in ... because I relied on ..."</i> rồi đổi vai. Ghi lại cặp động từ + giới từ em hay nhầm nhất.'
            ]
          }
        },
        {
          id: '6.22B', name: 'Bài 6.22B: Trách nhiệm và nhận thức',
          grammar: {
            formulas: ['👮 The sheriff + ⚡ is responsible for + 🛡 safety', '🛍 The shopper + ⚡ is aware of + 📉 the shortage', '🚌 A new bus + ⚡ is + 💡 the solution to the problem'],
            tip: 'Tính từ và danh từ cũng có giới từ riêng: responsible FOR, aware OF, reason FOR, increase IN, solution TO. Học cả cụm, đừng học từ lẻ!'
          },
          chunks: [
            { scene: '🤠👮🏘', full: 'The sheriff is responsible for keeping people safe in town', parts: [{t:'The sheriff',ico:'🤠',c:'s'}, {t:'is responsible for',ico:'🛡',c:'v'}, {t:'keeping people safe in town',ico:'🏘',c:'o'}], traceWord: 'sheriff' },
            { scene: '🛍📉🍎', full: 'Every shopper should be aware of the shortage of fresh food', parts: [{t:'Every shopper',ico:'🛍',c:'s'}, {t:'should be aware of',ico:'👀',c:'v'}, {t:'the shortage of fresh food',ico:'📉',c:'o'}], traceWord: 'shortage' },
            { scene: '👩‍⚕️🤒❓', full: 'The doctor explained the reason for the long sickness', parts: [{t:'The doctor',ico:'👩‍⚕️',c:'s'}, {t:'explained',ico:'🗣',c:'v'}, {t:'the reason for the long sickness',ico:'🤒',c:'o'}], traceWord: 'sickness' },
            { scene: '🛍😲🦐', full: 'The shopper was shocked by the sheer increase in the price of shrimp', parts: [{t:'The shopper',ico:'🛍',c:'s'}, {t:'was shocked by',ico:'😲',c:'v'}, {t:'the sheer increase in the price of shrimp',ico:'🦐',c:'o'}], traceWord: 'shocked' },
            { scene: '🚌🪧⏳', full: 'A second bus is the solution to the long wait at the signpost', parts: [{t:'A second bus',ico:'🚌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the solution to the long wait at the signpost',ico:'🪧',c:'o'}], traceWord: 'signpost' },
            { scene: '👧💀🥶', full: 'The little girl was aware of a skeleton and began to shiver', parts: [{t:'The little girl',ico:'👧',c:'s'}, {t:'was aware of',ico:'👀',c:'v'}, {t:'a skeleton and began to shiver',ico:'💀',c:'o'}], traceWord: 'skeleton' },
            { scene: '👷🏙✨', full: 'The builder is responsible for the shiny skyscraper in the city', parts: [{t:'The builder',ico:'👷',c:'s'}, {t:'is responsible for',ico:'🛡',c:'v'}, {t:'the shiny skyscraper in the city',ico:'🏙',c:'o'}], traceWord: 'skyscraper' },
            { scene: '👩✍📄', full: 'She was aware of the need for her signature on the letter', parts: [{t:'She',ico:'👩',c:'s'}, {t:'was aware of',ico:'👀',c:'v'}, {t:'the need for her signature on the letter',ico:'✍',c:'o'}], traceWord: 'signature' }
          ],
          qaList: [
            { q: 'Where do people walk in the city?', scene: '🚶🏙🛣', ans: 'They walk on the sidewalk', opts: [{txt:'They walk on the sidewalk',ico:'🚶'}, {txt:'They walk on the roof',ico:'🏠'}, {txt:'They walk in the river',ico:'🌊'}] },
            { q: 'Why is the news shocking?', scene: '📰😱💧', ans: 'It is shocking because the water is dirty', opts: [{txt:'It is shocking because the water is dirty',ico:'💧'}, {txt:'It is shocking because the cake is sweet',ico:'🍰'}, {txt:'It is shocking because the day is long',ico:'☀'}] },
            { q: 'What is the dress made of?', scene: '👗🧵✨', ans: 'It is made of soft silk', opts: [{txt:'It is made of soft silk',ico:'🧵'}, {txt:'It is made of hard rock',ico:'🪨'}, {txt:'It is made of cold ice',ico:'🧊'}] },
            { q: 'Who is responsible for the class trip?', scene: '🧑‍🏫🚌🎒', ans: 'The teacher is responsible for the trip', opts: [{txt:'The teacher is responsible for the trip',ico:'🧑‍🏫'}, {txt:'The moon is responsible for the trip',ico:'🌙'}, {txt:'The window is responsible for the trip',ico:'🪟'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Ai chịu trách nhiệm?',
            steps: [
              '<b>Bước 1:</b> Nhìn quanh nhà hoặc lớp học, chọn 3 vấn đề (rác, đèn quên tắt, thiếu giờ ngủ). Viết mỗi vấn đề một câu với <i>"... is responsible for ..."</i> hoặc <i>"... is aware of ..."</i>.',
              '<b>Bước 2:</b> Với mỗi vấn đề, viết thêm một câu dùng <i>"the reason for ..."</i> và một câu dùng <i>"a solution to ..."</i>.',
              '<b>Bước 3:</b> Trình bày mini 1 phút cho bạn hoặc người thân: nêu vấn đề, nguyên nhân và giải pháp. Bạn nghe hỏi một câu, em trả lời bằng tiếng Anh.'
            ]
          }
        },
        {
          id: '6.22C', name: 'Bài 6.22C: Công việc hằng ngày',
          grammar: {
            formulas: ['🧑 Tom + ⚡ wore it + 😳 by mistake', '👩 Mr Nam + ⚡ is in charge of + 🚌 the trip', '👧 Children + ⚡ are at risk + ❄ in a snowstorm'],
            tip: 'Cụm giới từ cố định học thuộc như một khối: by mistake (nhầm), on purpose (cố ý), in charge of (phụ trách), out of date (lỗi thời), at risk (gặp nguy cơ), under pressure (chịu áp lực).'
          },
          chunks: [
            { scene: '🧑🧥😳', full: 'Tom wore a big coat by mistake and the sleeve was too long', parts: [{t:'Tom',ico:'🧑',c:'s'}, {t:'wore',ico:'🧥',c:'v'}, {t:'a big coat by mistake and the sleeve was too long',ico:'😳',c:'o'}], traceWord: 'sleeve' },
            { scene: '👧🏂😟', full: 'Lan did not break the school snowboard on purpose so do not be angry', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'did not break',ico:'🚫',c:'v'}, {t:'the school snowboard on purpose so do not be angry',ico:'🏂',c:'o'}], traceWord: 'snowboard' },
            { scene: '👨‍🏫🎓🧭', full: 'Mr Nam is in charge of the sophomore class trip to the southeast', parts: [{t:'Mr Nam',ico:'👨‍🏫',c:'s'}, {t:'is in charge of',ico:'📋',c:'v'}, {t:'the sophomore class trip to the southeast',ico:'🎓',c:'o'}], traceWord: 'southeast' },
            { scene: '🗺📅🧭', full: 'Our old map is out of date because the southwest road has changed', parts: [{t:'Our old map',ico:'🗺',c:'s'}, {t:'is out of date',ico:'📅',c:'v'}, {t:'because the southwest road has changed',ico:'🧭',c:'o'}], traceWord: 'southwest' },
            { scene: '👧🧒⛄', full: 'Children without warm coats are at risk during a snowstorm', parts: [{t:'Children without warm coats',ico:'🧒',c:'s'}, {t:'are at risk',ico:'⚠',c:'v'}, {t:'during a snowstorm',ico:'⛄',c:'o'}], traceWord: 'snowstorm' },
            { scene: '😰📝🤕', full: 'I felt under pressure all week and my neck was sore', parts: [{t:'I',ico:'👦',c:'s'}, {t:'felt under pressure',ico:'😰',c:'v'}, {t:'all week and my neck was sore',ico:'🤕',c:'o'}], traceWord: 'sore' },
            { scene: '🍵🤕😌', full: 'Warm tea with honey can soothe a sore back', parts: [{t:'Warm tea with honey',ico:'🍵',c:'s'}, {t:'can soothe',ico:'😌',c:'v'}, {t:'a sore back',ico:'🤒',c:'o'}], traceWord: 'soothe' },
            { scene: '🚬👴😢', full: 'The old smoker felt sorrow when his doctor said he was at risk', parts: [{t:'The old smoker',ico:'🚬',c:'s'}, {t:'felt',ico:'💭',c:'v'}, {t:'sorrow when his doctor said he was at risk',ico:'😢',c:'o'}], traceWord: 'smoker' }
          ],
          qaList: [
            { q: 'What is on the classroom wall?', scene: '🏫📣💫', ans: 'The wall has a slogan with a bright sparkle', opts: [{txt:'The wall has a slogan with a bright sparkle',ico:'💫'}, {txt:'The wall has a broken door',ico:'🚪'}, {txt:'The wall has a hot soup',ico:'🍲'}] },
            { q: 'Where do you want to travel next summer?', scene: '🧳☀📍', ans: 'I want to go someplace warm', opts: [{txt:'I want to go someplace warm',ico:'📍'}, {txt:'I want to go yesterday',ico:'📅'}, {txt:'I want my homework to swim',ico:'🏊'}] },
            { q: 'Why did Lan make a face?', scene: '👧🍋😖', ans: 'The lemon was too sour', opts: [{txt:'The lemon was too sour',ico:'🍋'}, {txt:'The pencil was too happy',ico:'✏'}, {txt:'The chair was too early',ico:'🪑'}] },
            { q: 'What did Nam bring home from the trip?', scene: '👦🧳🎁', ans: 'He brought a small souvenir for his mother', opts: [{txt:'He brought a small souvenir for his mother',ico:'🎁'}, {txt:'He brought a small tree for the school',ico:'🌳'}, {txt:'He brought a big river for his brother',ico:'🌊'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Một ngày làm việc',
            steps: [
              '<b>Bước 1:</b> Viết lại một ngày của em hoặc của người thân, dùng ít nhất 4 cụm: by mistake, on purpose, in charge of, out of date, at risk, under pressure.',
              '<b>Bước 2:</b> Đọc cho một bạn nghe nhưng bỏ trống các cụm giới từ (nói <i>"blank"</i>). Bạn đoán cụm đúng, ví dụ <i>"I am in charge of ... the dishes."</i>',
              '<b>Bước 3:</b> Cùng nhau kể một tình huống "under pressure" và cách bình tĩnh lại bằng tiếng Anh, 3 câu. Đổi vai rồi ghi lại cụm nào em hay quên.'
            ]
          }
        }
      ]
    },
    '6.23': {
      lessons: [
        {
          id: '6.23A', name: 'Bài 6.23A: Phát minh và đổi mới',
          grammar: {
            formulas: ['👩‍🔬 Động từ + -tion / -ment → 💡 danh từ (invent → invention)', '😊 Tính từ + -ness / -ity → 🏅 danh từ (kind → kindness)', '🎽 Động từ / danh từ + -er / -or / -ist → 👤 người (visit → visitor)'],
            tip: 'Thêm đuôi -tion, -ment, -ness, -ity, -ance, -ence, -er, -ist là biến từ thành DANH TỪ chỉ việc, tính chất hoặc người!'
          },
          chunks: [
            { scene: '👩‍🔬🎆💡', full: 'The young scientist made a spectacular invention for our school', parts: [{t:'The young scientist',ico:'👩‍🔬',c:'s'}, {t:'made',ico:'🛠️',c:'v'}, {t:'a spectacular invention for our school',ico:'🎆',c:'o'}], traceWord: 'spectacular' },
            { scene: '👥👏🥇', full: 'Every spectator cheered when the team showed great sportsmanship', parts: [{t:'Every spectator',ico:'👥',c:'s'}, {t:'cheered',ico:'👏',c:'v'}, {t:'when the team showed great sportsmanship',ico:'🥇',c:'o'}], traceWord: 'sportsmanship' },
            { scene: '👧🔤📈', full: 'Her careful spelling shows great improvement this year', parts: [{t:'Her careful spelling',ico:'🔤',c:'s'}, {t:'shows',ico:'👀',c:'v'}, {t:'great improvement this year',ico:'📈',c:'o'}], traceWord: 'spelling' },
            { scene: '👨‍🍳🧂🔥', full: 'The cook added spice to the soup and the spicy smell filled the kitchen', parts: [{t:'The cook',ico:'👨‍🍳',c:'s'}, {t:'added',ico:'➕',c:'v'}, {t:'spice to the soup and the spicy smell filled the kitchen',ico:'🔥',c:'o'}], traceWord: 'spicy' },
            { scene: '🧑🕷️🌀', full: 'The visitor saw a spider building a spiral web near the market stall', parts: [{t:'The visitor',ico:'🧑',c:'s'}, {t:'saw',ico:'👀',c:'v'}, {t:'a spider building a spiral web near the market stall',ico:'🕷️',c:'o'}], traceWord: 'spider' },
            { scene: '🥬🏅⚡', full: 'Fresh spinach gives every athlete the nutrition and strength for a long match', parts: [{t:'Fresh spinach',ico:'🥬',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'every athlete the nutrition and strength for a long match',ico:'🏅',c:'o'}], traceWord: 'spinach' },
            { scene: '🛕🙏😌', full: 'Her visit to the temple brought spiritual peace and real happiness', parts: [{t:'Her visit to the temple',ico:'🛕',c:'s'}, {t:'brought',ico:'🎁',c:'v'}, {t:'spiritual peace and real happiness',ico:'🙏',c:'o'}], traceWord: 'spiritual' },
            { scene: '🧪😬🥀', full: 'Carelessness can spoil the whole experiment in the laboratory', parts: [{t:'Carelessness',ico:'😬',c:'s'}, {t:'can spoil',ico:'🥀',c:'v'}, {t:'the whole experiment in the laboratory',ico:'🧪',c:'o'}], traceWord: 'spoil' }
          ],
          qaList: [
            { q: 'Why did the engineer create a new sponge?', scene: '👷🧽', ans: 'He designed it specially for cleaning screens', opts: [{ txt: 'He designed it specially for cleaning screens', ico: '🧽' }, { txt: 'It makes a loud musical sound', ico: '🎵' }, { txt: 'He wanted a new kind of dessert', ico: '🍰' }] },
            { q: 'How did sales change after the invention?', scene: '📈💡', ans: 'Sales rose steadily every month', opts: [{ txt: 'Sales rose steadily every month', ico: '📈' }, { txt: 'Nobody bought the product at all', ico: '🚫' }, { txt: 'The shop closed on Monday', ico: '🔒' }] },
            { q: 'What does Mai do after school?', scene: '👧🏅', ans: 'She joins the sports club', opts: [{ txt: 'She joins the sports club', ico: '🏅' }, { txt: 'She flies a big airplane', ico: '✈️' }, { txt: 'She cooks dinner for sixty people', ico: '🍲' }] },
            { q: 'What is the best way to improve spelling?', scene: '🔤📚', ans: 'Read and write every day', opts: [{ txt: 'Read and write every day', ico: '📚' }, { txt: 'Sleep all day long', ico: '😴' }, { txt: 'Never open a book', ico: '🚫' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cuộc Thi Phát Minh Mini',
            steps: [
              '<b>Bước 1:</b> Em chọn một vật dụng quen thuộc và viết 3 câu tiếng Anh về một phát minh mới giúp vật đó tốt hơn, dùng ít nhất 3 danh từ có đuôi như <i>"invention"</i>, <i>"improvement"</i>, <i>"creativity"</i>.',
              '<b>Bước 2:</b> Vẽ nhanh phát minh lên giấy rồi gạch chân mọi danh từ tạo bằng hậu tố (-tion, -ment, -ness, -ity, -er, -ist).',
              '<b>Bước 3:</b> Thuyết trình 1 phút cho bạn hoặc người nhà bằng câu như <i>"This is a spectacular invention."</i>, rồi để họ chấm điểm sự sáng tạo.'
            ]
          }
        },
        {
          id: '6.23B', name: 'Bài 6.23B: Đánh giá sản phẩm công nghệ',
          grammar: {
            formulas: ['📦 Danh từ + -ful / -less → 😀 tính từ (use → useful / useless)', '⚙️ Danh từ + -ous / -al, động từ + -ive / -able → 📝 tính từ (danger → dangerous)', '🐢 Tính từ + -ly → ⚡ trạng từ (strange → strangely)'],
            tip: 'Đuôi -ful nghĩa là "có", -less nghĩa là "không có", còn -ly biến tính từ thành trạng từ mô tả cách làm việc!'
          },
          chunks: [
            { scene: '📝💨🧹', full: 'My teacher says the new steam cleaner is powerful and reliable', parts: [{t:'My teacher',ico:'👩‍🏫',c:'s'}, {t:'says',ico:'💬',c:'v'}, {t:'the new steam cleaner is powerful and reliable',ico:'💨',c:'o'}], traceWord: 'steam' },
            { scene: '⛰️🚲😓', full: 'The steep hill makes riding this electric bike hard and stressful', parts: [{t:'The steep hill',ico:'⛰️',c:'s'}, {t:'makes',ico:'⚙️',c:'v'}, {t:'riding this electric bike hard and stressful',ico:'🚲',c:'o'}], traceWord: 'steep' },
            { scene: '👧🔖📱', full: 'She put a colorful sticker on the back of her tablet', parts: [{t:'She',ico:'👧',c:'s'}, {t:'put',ico:'✋',c:'v'}, {t:'a colorful sticker on the back of her tablet',ico:'🔖',c:'o'}], traceWord: 'sticker' },
            { scene: '⌨️🍯😠', full: 'The sticky keys on this cheap keyboard are really annoying', parts: [{t:'The sticky keys on this cheap keyboard',ico:'⌨️',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'really annoying',ico:'😠',c:'o'}], traceWord: 'sticky' },
            { scene: '⛈️🏚️🔌', full: 'The stormy night left the stricken village without any electricity', parts: [{t:'The stormy night',ico:'⛈️',c:'s'}, {t:'left',ico:'🚪',c:'v'}, {t:'the stricken village without any electricity',ico:'🏚️',c:'o'}], traceWord: 'stricken' },
            { scene: '🧙📖📱', full: 'The famous storyteller recorded a wonderful story for the new program', parts: [{t:'The famous storyteller',ico:'🧙',c:'s'}, {t:'recorded',ico:'🎙️',c:'v'}, {t:'a wonderful story for the new program',ico:'📱',c:'o'}], traceWord: 'storyteller' },
            { scene: '🤖🤨🙅', full: 'The stubborn robot strangely refused to follow every useful command', parts: [{t:'The stubborn robot',ico:'🤖',c:'s'}, {t:'strangely refused',ico:'🤨',c:'v'}, {t:'to follow every useful command',ico:'🙅',c:'o'}], traceWord: 'strangely' },
            { scene: '👷😰💻', full: 'The stressed engineer was stuck in a slow and endless online meeting', parts: [{t:'The stressed engineer',ico:'😰',c:'s'}, {t:'was stuck',ico:'😖',c:'v'}, {t:'in a slow and endless online meeting',ico:'💻',c:'o'}], traceWord: 'stuck' }
          ],
          qaList: [
            { q: 'What comes with the strawberry drink?', scene: '🍓🥤', ans: 'It comes with a paper straw', opts: [{ txt: 'It comes with a paper straw', ico: '🥤' }, { txt: 'It comes with a heavy wheel', ico: '🛞' }, { txt: 'It comes with a free airplane', ico: '✈️' }] },
            { q: 'How does he feel after the big dinner?', scene: '🍲😵', ans: 'He feels stuffed and sleepy', opts: [{ txt: 'He feels stuffed and sleepy', ico: '😵' }, { txt: 'He feels cold and hungry', ico: '🥶' }, { txt: 'He feels ready to fly', ico: '🪂' }] },
            { q: 'Why did the robot stop at the top of the stairs?', scene: '🤖🪜', ans: 'It did not want to stumble', opts: [{ txt: 'It did not want to stumble', ico: '🚶' }, { txt: 'It wanted to bake a cake', ico: '🎂' }, { txt: 'It was happy to dance', ico: '💃' }] },
            { q: 'Is the new cleaner helpful?', scene: '🧹❓', ans: 'Yes it is wonderful and powerful', opts: [{ txt: 'Yes it is wonderful and powerful', ico: '👍' }, { txt: 'No it is a green banana', ico: '🍌' }, { txt: 'Yes it is a tiny cloud', ico: '☁️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Bài Đánh Giá Sản Phẩm',
            steps: [
              '<b>Bước 1:</b> Em chọn một đồ công nghệ có sẵn (điện thoại, tai nghe, đèn bàn...) và liệt kê 5 tính từ tạo bằng hậu tố như <i>"useful"</i>, <i>"careless"</i>, <i>"reliable"</i>, <i>"dangerous"</i>.',
              '<b>Bước 2:</b> Viết đánh giá 4 câu, dùng ít nhất 2 trạng từ đuôi -ly, ví dụ <i>"It works perfectly."</i> hoặc <i>"It works strangely."</i>.',
              '<b>Bước 3:</b> Đọc bài đánh giá cho bạn hoặc người nhà nghe và hỏi họ có muốn mua sản phẩm đó không, vì sao.'
            ]
          }
        },
        {
          id: '6.23C', name: 'Bài 6.23C: Khoa học và sai lầm',
          grammar: {
            formulas: ['🚫 un- / in- / im- / ir- / dis- + 😀 tính từ → ngược nghĩa (happy → unhappy)', '❌ mis- + ⚡ động từ → làm sai (read → misread)', '🔁 re- + ⚡ động từ → làm lại (start → restart)'],
            tip: 'Tiền tố đứng trước từ gốc và đổi nghĩa: un-, in-, im-, ir-, dis- là "không"; mis- là "sai"; re- là "lại"; over- là "quá"; under- là "chưa đủ"!'
          },
          chunks: [
            { scene: '🔬😲📊', full: 'The unexpected result will stun the whole team', parts: [{t:'The unexpected result',ico:'📊',c:'s'}, {t:'will stun',ico:'😲',c:'v'}, {t:'the whole team',ico:'👥',c:'o'}], traceWord: 'stun' },
            { scene: '🗻🤩📸', full: 'The stunning view from the summit was absolutely unforgettable', parts: [{t:'The stunning view from the summit',ico:'🗻',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'absolutely unforgettable',ico:'🤩',c:'o'}], traceWord: 'stunning' },
            { scene: '🔬🚢📉', full: 'Scientists repeat the test when the information from the submarine looks wrong', parts: [{t:'Scientists',ico:'🔬',c:'s'}, {t:'repeat',ico:'🔁',c:'v'}, {t:'the test when the information from the submarine looks wrong',ico:'🚢',c:'o'}], traceWord: 'submarine' },
            { scene: '📖🔤✏️', full: 'Adding a suffix or a prefix can change the meaning of a word', parts: [{t:'Adding a suffix or a prefix',ico:'✏️',c:'s'}, {t:'can change',ico:'🔄',c:'v'}, {t:'the meaning of a word',ico:'📖',c:'o'}], traceWord: 'suffix' },
            { scene: '🌞🏖️⚠️', full: 'It is unhealthy to sunbathe at noon without any protection', parts: [{t:'It',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'unhealthy to sunbathe at noon without any protection',ico:'🌞',c:'o'}], traceWord: 'sunbathe' },
            { scene: '⏰🌇🌳', full: 'The old sundial in the garden is useless at sunset', parts: [{t:'The old sundial in the garden',ico:'⏰',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'useless at sunset',ico:'🌇',c:'o'}], traceWord: 'sundial' },
            { scene: '👗🌅🧪', full: 'The stylish researcher arrived at sunrise to repeat the experiment', parts: [{t:'The stylish researcher',ico:'👗',c:'s'}, {t:'arrived',ico:'🚶',c:'v'}, {t:'at sunrise to repeat the experiment',ico:'🌅',c:'o'}], traceWord: 'sunrise' },
            { scene: '🔮🐈‍⬛🍀', full: 'A superstition is a false belief that a black cat brings bad luck', parts: [{t:'A superstition',ico:'🔮',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a false belief that a black cat brings bad luck',ico:'🐈‍⬛',c:'o'}], traceWord: 'superstition' }
          ],
          qaList: [
            { q: 'Who helps you after a big mistake?', scene: '😔🤝', ans: 'A supportive friend helps me', opts: [{ txt: 'A supportive friend helps me', ico: '🤝' }, { txt: 'A broken clock helps me', ico: '⏰' }, { txt: 'A spicy sandwich helps me', ico: '🥪' }] },
            { q: 'Why was the village so quiet?', scene: '🏘️🌫️', ans: 'The surrounding hills were covered in fog', opts: [{ txt: 'The surrounding hills were covered in fog', ico: '🌫️' }, { txt: 'The children were singing loudly', ico: '🎤' }, { txt: 'The market was full of people', ico: '🛒' }] },
            { q: 'Who was rescued after the accident?', scene: '🚑🧗', ans: 'The only survivor was rescued', opts: [{ txt: 'The only survivor was rescued', ico: '🧗' }, { txt: 'Nobody needed any help', ico: '🙅' }, { txt: 'A famous singer arrived late', ico: '🎤' }] },
            { q: 'What controls habits we do not notice?', scene: '🧠❓', ans: 'Our subconscious mind controls them', opts: [{ txt: 'Our subconscious mind controls them', ico: '🧠' }, { txt: 'Our shoes control them', ico: '👟' }, { txt: 'The weather controls them', ico: '🌦️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám Tử Tiền Tố',
            steps: [
              '<b>Bước 1:</b> Em viết 6 từ có tiền tố (ví dụ <i>"unfair"</i>, <i>"impossible"</i>, <i>"misunderstand"</i>, <i>"restart"</i>) lên giấy nhớ và đoán nghĩa của từng từ.',
              '<b>Bước 2:</b> Nhớ lại một sai lầm của em hoặc của một nhà khoa học nổi tiếng, rồi viết 3 câu tiếng Anh kể lại, dùng ít nhất 2 từ có tiền tố, ví dụ <i>"I misread the question."</i>.',
              '<b>Bước 3:</b> Kể câu chuyện cho bạn hoặc người nhà nghe rồi mời họ chỉ ra các tiền tố và nói điều em đã học được từ sai lầm.'
            ]
          }
        }
      ]
    },
    '6.24': {
      lessons: [
        {
        id: '6.24A',
        name: 'Bài 6.24A: Hành động vì môi trường',
        grammar: {
        formulas: ['👦 Every teammate + ⚡ take + 🤝 responsibility', '👀 We + ⚡ pay + 🔔 attention', '📢 They + ⚡ raise + 🌍 awareness', '🧠 The class + ⚡ reach + ✅ a decision'],
        tip: 'Mỗi danh từ có "bạn đồng hành" riêng: ta nói take responsibility, pay attention, raise awareness, reach a decision, đừng nói make responsibility hay do a decision nhé!'
        },
        chunks: [
        { scene: '🏖️🧹👦', full: 'Every teammate should take responsibility for cleaning the beach.', parts: [{t:'Every teammate',ico:'👥',c:'s'},{t:'should take responsibility',ico:'🤝',c:'v'},{t:'for cleaning the beach',ico:'🏖️',c:'o'}], traceWord: 'teammate' },
        { scene: '🤝🗣️🌊', full: 'Good teamwork helps our class reach a decision about cleaning the river.', parts: [{t:'Good teamwork',ico:'🤝',c:'s'},{t:'helps',ico:'🙌',c:'v'},{t:'our class reach a decision about cleaning the river',ico:'🌊',c:'o'}], traceWord: 'teamwork' },
        { scene: '🏊💧📢', full: 'The talented swimmer wants to raise awareness about dirty water.', parts: [{t:'The talented swimmer',ico:'🏊',c:'s'},{t:'wants to raise awareness',ico:'📢',c:'v'},{t:'about dirty water',ico:'💧',c:'o'}], traceWord: 'swimmer' },
        { scene: '🐝🌳👀', full: 'We must pay attention to the swarm of bees near the garden.', parts: [{t:'We',ico:'👫',c:'s'},{t:'must pay attention',ico:'👀',c:'v'},{t:'to the swarm of bees near the garden',ico:'🐝',c:'o'}], traceWord: 'swarm' },
        { scene: '🧥♻️🍾', full: 'Our talkative teammate raised awareness in a sweatshirt made from old plastic bottles.', parts: [{t:'Our talkative teammate',ico:'💬',c:'s'},{t:'raised awareness',ico:'📢',c:'v'},{t:'in a sweatshirt made from old plastic bottles',ico:'🧥',c:'o'}], traceWord: 'sweatshirt' },
        { scene: '📱📄🧑‍🎓', full: 'The students reached a decision to use a tablet instead of paper.', parts: [{t:'The students',ico:'🧑‍🎓',c:'s'},{t:'reached a decision',ico:'✅',c:'v'},{t:'to use a tablet instead of paper',ico:'📱',c:'o'}], traceWord: 'tablet' },
        { scene: '📚👧🗑️', full: 'Early teaching is a good way to raise awareness about waste.', parts: [{t:'Early teaching',ico:'📚',c:'s'},{t:'is',ico:'⚡',c:'v'},{t:'a good way to raise awareness about waste',ico:'🗑️',c:'o'}], traceWord: 'teaching' },
        { scene: '🏊🤕💐', full: 'Everyone showed sympathy for the swimmer with a swollen foot.', parts: [{t:'Everyone',ico:'👫',c:'s'},{t:'showed sympathy',ico:'💐',c:'v'},{t:'for the swimmer with a swollen foot',ico:'🤕',c:'o'}], traceWord: 'swollen' }
        ],
        qaList: [
        { q: 'What did the teacher have about the dirty water?', scene: '👩‍🏫🤨💧', ans: 'She had a suspicion.', opts: [{txt:'She had a suspicion.',ico:'🤨'},{txt:'She had a sweatshirt.',ico:'🧥'},{txt:'She had a swarm.',ico:'🐝'}] },
        { q: 'Why did Lan not finish her soup?', scene: '🍜😐👧', ans: 'It was tasteless and cold.', opts: [{txt:'It was tasteless and cold.',ico:'😐'},{txt:'It was tasty and hot.',ico:'😋'},{txt:'It was hot and delicious.',ico:'🔥'}] },
        { q: 'Where do we put the takeaway boxes?', scene: '🥡📦♻️', ans: 'We put them in the recycling bin.', opts: [{txt:'We put them in the recycling bin.',ico:'♻️'},{txt:'We put them in the river.',ico:'🌊'},{txt:'We put them on the beach.',ico:'🏖️'}] },
        { q: 'What did the passengers hear before takeoff?', scene: '🛫🧳📢', ans: 'They heard a short safety message.', opts: [{txt:'They heard a short safety message.',ico:'📢'},{txt:'They heard a loud birthday song.',ico:'🎂'},{txt:'They heard nothing from the sea.',ico:'🌊'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Dự án nhỏ vì môi trường',
        steps: ['<b>Bước 1:</b> Cùng bạn chọn một vấn đề rác thải ở trường hoặc khu phố. Viết 3 câu bằng cụm <i>"raise awareness"</i>, <i>"pay attention"</i> và <i>"take responsibility"</i>.', '<b>Bước 2:</b> Thảo luận 3 phút và <i>"reach a decision"</i> về một việc nhỏ cả nhóm sẽ làm tuần này (ví dụ: mang túi vải, phân loại rác).', '<b>Bước 3:</b> Thuyết trình mini 1 phút: mỗi bạn nói một câu bằng tiếng Anh về phần việc mình chịu trách nhiệm.']
        }
        },
        {
        id: '6.24B',
        name: 'Bài 6.24B: Thiên tai và thời tiết',
        grammar: {
        formulas: ['🌧️ heavy + 🌧️ rain', '💨 strong + 💨 wind', '😨 deeply + 😟 concerned'],
        tip: 'Tính từ hay trạng từ nào đứng cạnh từ nào là "cặp đôi" cố định: nói heavy rain, strong wind, highly unlikely, deeply concerned, đừng nói strong rain hay heavy wind!'
        },
        chunks: [
        { scene: '🌧️💨🏘️', full: 'Heavy rain and strong wind hit the town last night.', parts: [{t:'Heavy rain and strong wind',ico:'🌧️',c:'s'},{t:'hit',ico:'💥',c:'v'},{t:'the town last night',ico:'🏘️',c:'o'}], traceWord: 'rain' },
        { scene: '🧑😨☁️', full: 'The teen was terrified of the threatening black clouds.', parts: [{t:'The teen',ico:'🧑',c:'s'},{t:'was terrified',ico:'😨',c:'v'},{t:'of the threatening black clouds',ico:'☁️',c:'o'}], traceWord: 'terrified' },
        { scene: '🌤️🌩️🏘️', full: 'It is highly unlikely that the storm will reach our town today.', parts: [{t:'It',ico:'👉',c:'s'},{t:'is',ico:'⚡',c:'v'},{t:'highly unlikely that the storm will reach our town today',ico:'🌤️',c:'o'}], traceWord: 'unlikely' },
        { scene: '🏦👩😟🌊', full: 'A bank teller was deeply concerned about the flood near the bridge.', parts: [{t:'A bank teller',ico:'🏦',c:'s'},{t:'was',ico:'⚡',c:'v'},{t:'deeply concerned about the flood near the bridge',ico:'🌊',c:'o'}], traceWord: 'teller' },
        { scene: '💻🔍💨', full: 'Technological tools help scientists make a thorough report on strong winds.', parts: [{t:'Technological tools',ico:'💻',c:'s'},{t:'help',ico:'🙌',c:'v'},{t:'scientists make a thorough report on strong winds',ico:'🔍',c:'o'}], traceWord: 'thorough' },
        { scene: '📡👷🌙', full: 'The telecommunications workers worked all night to fix the broken lines.', parts: [{t:'The telecommunications workers',ico:'📡',c:'s'},{t:'worked',ico:'🛠️',c:'v'},{t:'all night to fix the broken lines',ico:'🌙',c:'o'}], traceWord: 'telecommunications' },
        { scene: '📨🏘️🌊', full: 'People sent a telegram to warn the village about the terrible flood.', parts: [{t:'People',ico:'👫',c:'s'},{t:'sent',ico:'📤',c:'v'},{t:'a telegram to warn the village about the terrible flood',ico:'📨',c:'o'}], traceWord: 'telegram' },
        { scene: '🙏🚒🌊', full: 'The people in the village were thankful to the terrific rescue team after the flood.', parts: [{t:'The people in the village',ico:'🏘️',c:'s'},{t:'were thankful',ico:'🙏',c:'v'},{t:'to the terrific rescue team after the flood',ico:'🚒',c:'o'}], traceWord: 'terrific' }
        ],
        qaList: [
        { q: 'Why did the man lose his temper in the storm?', scene: '🚗🌧️😡', ans: 'His car was stuck in heavy rain.', opts: [{txt:'His car was stuck in heavy rain.',ico:'🚗'},{txt:'He had a nice sunny day.',ico:'☀️'},{txt:'He was eating lunch quietly.',ico:'🍚'}] },
        { q: 'What filled the little girl with terror?', scene: '👧⚡😱', ans: 'The loud thunder.', opts: [{txt:'The loud thunder.',ico:'⚡'},{txt:'The warm sunshine.',ico:'☀️'},{txt:'The soft music.',ico:'🎵'}] },
        { q: 'What worried the police after the flood?', scene: '👮🌊🦹', ans: 'They were worried about theft.', opts: [{txt:'They were worried about theft.',ico:'🦹'},{txt:'They were worried about a sunny day.',ico:'☀️'},{txt:'They were worried about homework.',ico:'📚'}] },
        { q: 'What can strong wind do to weak trees?', scene: '💨🌳💥', ans: 'It can break them.', opts: [{txt:'It can break them.',ico:'💥'},{txt:'It can paint them blue.',ico:'🎨'},{txt:'It can make them speak.',ico:'🗣️'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Bản tin thời tiết mini',
        steps: ['<b>Bước 1:</b> Xem dự báo thời tiết hôm nay (điện thoại hoặc TV) và ghi 4 cặp từ, ví dụ <i>"heavy rain"</i>, <i>"strong wind"</i>, <i>"highly unlikely"</i>, <i>"deeply concerned"</i>.', '<b>Bước 2:</b> Viết 3 câu tiếng Anh về thời tiết hoặc một cơn bão có thật mà bạn biết, mỗi câu dùng ít nhất một cặp từ ở trên.', '<b>Bước 3:</b> Làm phát thanh viên: đọc bản tin 1 phút cho bạn hoặc người nhà nghe, rồi hỏi họ nhớ được cặp từ nào.']
        }
        },
        {
        id: '6.24C',
        name: 'Bài 6.24C: Lối sống xanh lâu dài',
        grammar: {
        formulas: ['⏳ In the long run, + 👦 we + ⚡ save + 💰 money', '🔁 Once in a while + 👦 I + ⚡ walk', '🏁 In the end (kết quả) ≠ 📍 at the end of (điểm cuối)'],
        tip: 'In the end nghĩa là "rốt cuộc", còn at the end of đi với một thứ cụ thể như the lesson hay the month, nhớ đừng lẫn hai cụm này nhé!'
        },
        chunks: [
        { scene: '🥫♻️💰', full: 'Old tins save us money in the long run.', parts: [{t:'Old tins',ico:'🥫',c:'s'},{t:'save',ico:'💰',c:'v'},{t:'us money in the long run',ico:'⏳',c:'o'}], traceWord: 'tins' },
        { scene: '🚶😩🌍', full: 'A tiring walk to school once in a while is better than taking the bus.', parts: [{t:'A tiring walk to school once in a while',ico:'🚶',c:'s'},{t:'is',ico:'⚡',c:'v'},{t:'better than taking the bus',ico:'🚌',c:'o'}], traceWord: 'tiring' },
        { scene: '🍎🗑️🪥', full: 'On the whole, we toss less food away and use less toothpaste.', parts: [{t:'On the whole, we',ico:'👫',c:'s'},{t:'toss',ico:'🪙',c:'v'},{t:'less food away and use less toothpaste',ico:'🪥',c:'o'}], traceWord: 'toothpaste' },
        { scene: '📜🛍️⏰', full: 'In the end, a timely rule about plastic bags helped the whole town.', parts: [{t:'In the end, a timely rule about plastic bags',ico:'⏰',c:'s'},{t:'helped',ico:'🙌',c:'v'},{t:'the whole town',ico:'🏘️',c:'o'}], traceWord: 'timely' },
        { scene: '🔧♻️🤏', full: 'At the end of the lesson, we tighten the taps and tie the recycling bags tightly.', parts: [{t:'At the end of the lesson, we',ico:'🏫',c:'s'},{t:'tighten',ico:'🔧',c:'v'},{t:'the taps and tie the recycling bags tightly',ico:'🤏',c:'o'}], traceWord: 'tighten' },
        { scene: '🧱🏡🌿', full: 'Old tiles from our kitchen made a strong garden path in the end.', parts: [{t:'Old tiles from our kitchen',ico:'🧱',c:'s'},{t:'made',ico:'🛠️',c:'v'},{t:'a strong garden path in the end',ico:'🌿',c:'o'}], traceWord: 'tiles' },
        { scene: '🎬🌀🍿', full: 'We watch a thriller about a tornado once in a while.', parts: [{t:'We',ico:'👫',c:'s'},{t:'watch',ico:'👀',c:'v'},{t:'a thriller about a tornado once in a while',ico:'🎬',c:'o'}], traceWord: 'thriller' },
        { scene: '🎭👏💓', full: 'At the end of the show, the thunderous applause made my heart thump with joy.', parts: [{t:'At the end of the show, the thunderous applause',ico:'👏',c:'s'},{t:'made',ico:'✨',c:'v'},{t:'my heart thump with joy',ico:'💓',c:'o'}], traceWord: 'thunderous' }
        ],
        qaList: [
        { q: 'What do we hear in a storm?', scene: '⛈️👂⚡', ans: 'We hear thunder.', opts: [{txt:'We hear thunder.',ico:'⚡'},{txt:'We hear the sun.',ico:'☀️'},{txt:'We hear soft snow.',ico:'❄️'}] },
        { q: 'When do we tick a box on a list?', scene: '✅📝✏️', ans: 'We tick it after we finish a task.', opts: [{txt:'We tick it after we finish a task.',ico:'✅'},{txt:'We tick it before we wake up.',ico:'😴'},{txt:'We tick it when we sleep.',ico:'🛌'}] },
        { q: 'Why is the beach wide at low tide?', scene: '🌊🏖️👀', ans: 'The sea goes out.', opts: [{txt:'The sea goes out.',ico:'🌊'},{txt:'The sand turns into snow.',ico:'❄️'},{txt:'The sea comes up to school.',ico:'🏫'}] },
        { q: 'Why is tobacco bad for the air?', scene: '🚬💨😷', ans: 'Its smoke is bad for people.', opts: [{txt:'Its smoke is bad for people.',ico:'😷'},{txt:'Its smoke makes the air fresh.',ico:'🌬️'},{txt:'Its smoke makes flowers grow.',ico:'🌸'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Cam kết xanh dài hạn',
        steps: ['<b>Bước 1:</b> Viết 3 thói quen xanh bạn muốn giữ (ví dụ: dùng lại hộp, tắt nước khi đánh răng). Với mỗi thói quen, viết một câu có <i>"in the long run"</i> hoặc <i>"on the whole"</i>.', '<b>Bước 2:</b> Kẻ bảng kiểm 7 ngày; mỗi tối <i>"tick"</i> vào ô nếu bạn làm được, và nói một câu với <i>"once in a while"</i> về việc thỉnh thoảng bạn quên.', '<b>Bước 3:</b> Cuối tuần, kể lại cho bạn nghe: <i>"At the end of the week, I ..."</i> và <i>"In the end, I ..."</i> để phân biệt hai cụm này.']
        }
        }
      ]
    },
    '6.25': {
      lessons: [
        {
          id: '6.25A', name: 'Bài 6.25A: Phỏng vấn xin học bổng',
          grammar: {
            formulas: ['🙋 Do you happen to know + ❓ where / if + 🏫 chủ ngữ + động từ', '💭 I was wondering + ❓ if + 👦 chủ ngữ + động từ', '🙏 Would you mind + ❓ if + 👦 I + ⏪ động từ quá khứ'],
            tip: 'Hỏi lịch sự thì "giấu" câu hỏi vào trong: sau where / if câu trở về trật tự thường (chủ ngữ trước động từ), không mượn do / does nữa!'
          },
          chunks: [
            { scene: '🙋🏫↩️', full: 'Do you happen to know where the turning to the hall is', parts: [{t:'Do',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'happen to know where the turning to the hall is',ico:'↩️',c:'o'}], traceWord: 'turning' },
            { scene: '😨🎤👔', full: 'I was wondering if it is normal to tremble before an interview', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was wondering',ico:'💭',c:'v'}, {t:'if it is normal to tremble before an interview',ico:'😨',c:'o'}], traceWord: 'tremble' },
            { scene: '🏃🎒🚪', full: 'Would you mind if I put my tracksuit in the bag', parts: [{t:'Would',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'mind if I put my tracksuit in the bag',ico:'🏃',c:'o'}], traceWord: 'tracksuit' },
            { scene: '🤝🎓👦', full: 'I was wondering if a trustworthy student has a better chance', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was wondering',ico:'💭',c:'v'}, {t:'if a trustworthy student has a better chance',ico:'🤝',c:'o'}], traceWord: 'trustworthy' },
            { scene: '🏆🏫👨‍👩‍👧', full: 'I was wondering if winning this prize would be a triumph for my school', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was wondering',ico:'💭',c:'v'}, {t:'if winning this prize would be a triumph for my school',ico:'🏆',c:'o'}], traceWord: 'triumph' },
            { scene: '🔄🏫💼', full: 'Do you happen to know if this program is a transitional step between school and work', parts: [{t:'Do',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'happen to know if this program is a transitional step between school and work',ico:'🔄',c:'o'}], traceWord: 'transitional' },
            { scene: '💔📝👦', full: 'Would you mind if I wrote about a tragedy in my essay', parts: [{t:'Would',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'mind if I wrote about a tragedy in my essay',ico:'💔',c:'o'}], traceWord: 'tragedy' },
            { scene: '😢📖❓', full: 'Do you happen to know why the story has such a tragic end', parts: [{t:'Do',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'happen to know why the story has such a tragic end',ico:'😢',c:'o'}], traceWord: 'tragic' }
          ],
          qaList: [
            { q: 'Do you happen to know what the pilot said about the turbulence?', scene: '✈️🌪️👨‍✈️', ans: 'He said the turbulence will be over soon', opts: [{ txt: 'He said the turbulence will be over soon', ico: '✈️' }, { txt: 'The music room is on the left', ico: '🎵' }, { txt: 'My brother likes red apples', ico: '🍎' }] },
            { q: 'Would you mind if I put this trash in your bin?', scene: '🚮👦🙏', ans: 'Not at all, please put it in there', opts: [{ txt: 'Not at all, please put it in there', ico: '🚮' }, { txt: 'Yes, the tuna is very fresh', ico: '🐟' }, { txt: 'I think the turtle is slow', ico: '🐢' }] },
            { q: 'Do you happen to know if the barber gives a quick trim?', scene: '💇✂️⏰', ans: 'Yes, he does it in ten minutes', opts: [{ txt: 'Yes, he does it in ten minutes', ico: '💇' }, { txt: 'The trumpet is very loud', ico: '🎺' }, { txt: 'My bag is on the table', ico: '🎒' }] },
            { q: 'Do you happen to know if the turtle will tumble off the rock?', scene: '🐢🪨🤸', ans: 'Do not worry, it holds on well', opts: [{ txt: 'Do not worry, it holds on well', ico: '🐢' }, { txt: 'It is time for lunch', ico: '🍱' }, { txt: 'The bus is late today', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng vấn thử với bạn',
            steps: [
              '<b>Bước 1:</b> Cùng một bạn, mỗi người viết trên giấy 3 câu hỏi lịch sự cho buổi phỏng vấn học bổng, ví dụ <i>"Do you happen to know where the hall is?"</i> hoặc <i>"Would you mind if I sat here?"</i>.',
              '<b>Bước 2:</b> Đóng vai: một người là giám khảo, một người là ứng viên. Ứng viên dùng ít nhất 2 mẫu <i>"I was wondering if..."</i> trong lúc hỏi, giám khảo trả lời lịch sự bằng tiếng Anh.',
              '<b>Bước 3:</b> Đổi vai, rồi mỗi người viết 2 câu tự nhận xét: câu hỏi nào nghe lịch sự nhất? Đọc to cho bạn nghe và sửa lỗi trật tự từ nếu có.'
            ]
          }
        },
        {
          id: '6.25B', name: 'Bài 6.25B: Trả lời khéo léo',
          grammar: {
            formulas: ['😬 I am afraid + 💬 that + 📰 mệnh đề', '🤔 It seems that + 📰 mệnh đề / 👥 There seems to be + 📦 danh từ', '👦 He appears to / tends to + ⚡ động từ nguyên mẫu'],
            tip: 'Muốn nói nhẹ nhàng, đừng "phán" thẳng: thêm I am afraid, I would say, It seems that, tends to... — nghe khéo hơn nhiều!'
          },
          chunks: [
            { scene: '😬📰🎁', full: 'I am afraid that the news was quite unexpected', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am afraid',ico:'😬',c:'v'}, {t:'that the news was quite unexpected',ico:'🎁',c:'o'}], traceWord: 'unexpected' },
            { scene: '👥🏠😠', full: 'I would say the new neighbors are rather unfriendly', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would say',ico:'💬',c:'v'}, {t:'the new neighbors are rather unfriendly',ico:'😠',c:'o'}], traceWord: 'unfriendly' },
            { scene: '🤔📄🎬', full: 'It seems that the story will unfold slowly', parts: [{t:'It',ico:'📖',c:'s'}, {t:'seems',ico:'🤔',c:'v'}, {t:'that the story will unfold slowly',ico:'📄',c:'o'}], traceWord: 'unfold' },
            { scene: '👦💪📝', full: 'He appears to be unafraid of the big exam', parts: [{t:'He',ico:'👦',c:'s'}, {t:'appears',ico:'🤔',c:'v'}, {t:'to be unafraid of the big exam',ico:'💪',c:'o'}], traceWord: 'unafraid' },
            { scene: '📝❗😞', full: 'There seems to be an unfortunate mistake in my report', parts: [{t:'There',ico:'👉',c:'s'}, {t:'seems',ico:'🤔',c:'v'}, {t:'to be an unfortunate mistake in my report',ico:'😞',c:'o'}], traceWord: 'unfortunate' },
            { scene: '🧑‍🎓🙉👂', full: 'Students tend to feel unheard when adults do not listen', parts: [{t:'Students',ico:'🧑‍🎓',c:'s'}, {t:'tend',ico:'🤔',c:'v'}, {t:'to feel unheard when adults do not listen',ico:'🙉',c:'o'}], traceWord: 'unheard' },
            { scene: '⚖️👥😕', full: 'It seems that some people act unfairly', parts: [{t:'It',ico:'📖',c:'s'}, {t:'seems',ico:'🤔',c:'v'}, {t:'that some people act unfairly',ico:'⚖️',c:'o'}], traceWord: 'unfairly' },
            { scene: '⚽😲👏', full: 'I would say his skill is unbelievable for such a young player', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would say',ico:'💬',c:'v'}, {t:'his skill is unbelievable for such a young player',ico:'😲',c:'o'}], traceWord: 'unbelievable' }
          ],
          qaList: [
            { q: 'Why did the crowd keep laughing?', scene: '😂👥🌪️', ans: 'I would say their laughter was uncontrollable', opts: [{ txt: 'I would say their laughter was uncontrollable', ico: '🌪️' }, { txt: 'She arrived unexpectedly at noon', ico: '⚡' }, { txt: 'An underage driver is not allowed', ico: '🔞' }] },
            { q: 'What does the clever detective tend to do?', scene: '🕵️🔍❓', ans: 'He tends to uncover the truth', opts: [{ txt: 'He tends to uncover the truth', ico: '🔍' }, { txt: 'He is unfit for the long race', ico: '🏃' }, { txt: 'The soup is too hot today', ico: '🍲' }] },
            { q: 'I made a mistake. Can I undo it?', scene: '↩️📝😟', ans: 'I am afraid you can\'t undo it now', opts: [{ txt: 'I am afraid you can\'t undo it now', ico: '↩️' }, { txt: 'The train leaves at seven', ico: '🚆' }, { txt: 'She has a blue umbrella', ico: '☂️' }] },
            { q: 'What should kids do after a swim?', scene: '🏊👕🩲', ans: 'They should undress and put on dry underpants', opts: [{ txt: 'They should undress and put on dry underpants', ico: '🩲' }, { txt: 'They should read a long book', ico: '📖' }, { txt: 'They should close the window', ico: '🪟' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Từ thẳng sang khéo',
            steps: [
              '<b>Bước 1:</b> Viết 4 câu nói thẳng, hơi phũ, ví dụ <i>"Your idea is bad."</i> hoặc <i>"You are wrong."</i> (chỉ để luyện, không nói với ai thật).',
              '<b>Bước 2:</b> Viết lại mỗi câu cho khéo hơn bằng một mẫu: <i>"I am afraid..."</i>, <i>"I would say..."</i>, <i>"It seems that..."</i> hoặc <i>"There seems to be..."</i>.',
              '<b>Bước 3:</b> Đọc cả hai phiên bản cho một bạn nghe và hỏi: bản nào dễ nghe hơn? Cùng bạn thêm một câu có <i>"tend to"</i> hoặc <i>"appear to"</i> nói về thói quen của một nhóm bạn.'
            ]
          }
        },
        {
          id: '6.25C', name: 'Bài 6.25C: Thảo luận nhóm',
          grammar: {
            formulas: ['📰 Câu khẳng định + ❓ , isn\'t it / don\'t they', '🤔 Don\'t you think + 📰 mệnh đề', '🙅 I don\'t think + 📰 mệnh đề + ❓ , do you'],
            tip: 'Câu hỏi đuôi: vế đầu khẳng định thì đuôi phủ định, vế đầu phủ định thì đuôi khẳng định. Nhớ: I don\'t think... thì đuôi là do you!'
          },
          chunks: [
            { scene: '🥱📚💬', full: 'This topic is really uninteresting for all of us, isn\'t it', parts: [{t:'This topic',ico:'📚',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'really uninteresting for all of us, isn\'t it',ico:'🥱',c:'o'}], traceWord: 'uninteresting' },
            { scene: '🤔📏🔗', full: 'Don\'t you think the new rule is unrelated to our homework', parts: [{t:'Don\'t',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'think the new rule is unrelated to our homework',ico:'🔗',c:'o'}], traceWord: 'unrelated' },
            { scene: '🤒👧💬', full: 'I don\'t think Mai is unwell today, do you', parts: [{t:'I',ico:'👦',c:'s'}, {t:'don\'t think',ico:'🤔',c:'v'}, {t:'Mai is unwell today, do you',ico:'🤒',c:'o'}], traceWord: 'unwell' },
            { scene: '🤫🏫❗', full: 'Isn\'t it unusually quiet in the classroom today', parts: [{t:'Isn\'t',ico:'⚡',c:'v'}, {t:'it',ico:'🏫',c:'s'}, {t:'unusually quiet in the classroom today',ico:'❗',c:'o'}], traceWord: 'unusually' },
            { scene: '🌦️🎲☂️', full: 'The weather in this city is unpredictable, isn\'t it', parts: [{t:'The weather in this city',ico:'🌦️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'unpredictable, isn\'t it',ico:'🎲',c:'o'}], traceWord: 'unpredictable' },
            { scene: '🍀⚽😔', full: 'You were unlucky in the last game of the season, weren\'t you', parts: [{t:'You',ico:'👦',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'unlucky in the last game of the season, weren\'t you',ico:'🍀',c:'o'}], traceWord: 'unlucky' },
            { scene: '🚨💌🤔', full: 'Don\'t you think this message is urgent for the whole team', parts: [{t:'Don\'t',ico:'⚡',c:'v'}, {t:'you',ico:'🙋',c:'s'}, {t:'think this message is urgent for the whole team',ico:'🚨',c:'o'}], traceWord: 'urgent' },
            { scene: '😐👥📋', full: 'Some members of our group look uninterested, don\'t they', parts: [{t:'Some members of our group',ico:'👥',c:'s'}, {t:'look',ico:'👀',c:'v'}, {t:'uninterested, don\'t they',ico:'😐',c:'o'}], traceWord: 'uninterested' }
          ],
          qaList: [
            { q: 'Your room is untidy, isn\'t it?', scene: '🗑️🛏️🧳', ans: 'Yes, I need to unpack my bag', opts: [{ txt: 'Yes, I need to unpack my bag', ico: '🧳' }, { txt: 'She is a good singer', ico: '🎤' }, { txt: 'It is a bright blue bus', ico: '🚌' }] },
            { q: 'Don\'t you think this old map is useless now?', scene: '🗺️🚫🆕', ans: 'Yes, we need an up-to-date one', opts: [{ txt: 'Yes, we need an up-to-date one', ico: '🆕' }, { txt: 'No, I want a cold drink', ico: '🥤' }, { txt: 'My sister plays the piano', ico: '🎹' }] },
            { q: 'You will upload the notes tonight, won\'t you?', scene: '⬆️📝🌙', ans: 'Yes, I will upload them before dinner', opts: [{ txt: 'Yes, I will upload them before dinner', ico: '⬆️' }, { txt: 'These unwanted gifts are in the box', ico: '🚯' }, { txt: 'The dog is under the table', ico: '🐶' }] },
            { q: 'Isn\'t there a vacancy in the school club?', scene: '📋🏫👥', ans: 'Yes, and I feel uplifted about it', opts: [{ txt: 'Yes, and I feel uplifted about it', ico: '😊' }, { txt: 'The soup is on the stove', ico: '🍲' }, { txt: 'We ride bikes on Sunday', ico: '🚲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Mini thảo luận nhóm',
            steps: [
              '<b>Bước 1:</b> Chọn một chủ đề quen thuộc (ví dụ: đồng phục, bài tập về nhà, điện thoại ở lớp). Mỗi người viết 3 ý kiến bằng câu hỏi đuôi, ví dụ <i>"Homework is urgent, isn\'t it?"</i>.',
              '<b>Bước 2:</b> Thảo luận 5 phút với 2–3 bạn: dùng <i>"Don\'t you think...?"</i> để hỏi ý kiến và <i>"I don\'t think..., do you?"</i> để nêu ý khác nhẹ nhàng.',
              '<b>Bước 3:</b> Mỗi người tóm tắt kết luận của nhóm trong 2 câu tiếng Anh ngắn và đọc to cho cả nhóm nghe.'
            ]
          }
        }
      ]
    },
    '6.26': {
      lessons: [
        {
          id: '6.26A', name: 'Bài 6.26A: Thư góp ý cho nhà trường',
          grammar: {
            formulas: ['🏫 I / We + 💡 suggest + 📝 that the school offer...', '📌 It + ⚡ is essential + 📝 that every viewpoint be heard'],
            tip: 'Sau suggest / recommend / insist / essential that: động từ giữ NGUYÊN MẪU, không thêm -s (the school offer, không phải offers)!'
          },
          chunks: [
            { scene: '🏫🥗🍽', full: 'I suggest that the school offer vegetarian lunches', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'suggest',ico:'💡',c:'v'}, {t:'that the school offer vegetarian lunches',ico:'🥗',c:'o'}], traceWord: 'vegetarian' },
            { scene: '🐕👩‍⚕️🏫', full: 'We recommend that the club invite a vet to talk', parts: [{t:'We',ico:'👭',c:'s'}, {t:'recommend',ico:'👍',c:'v'}, {t:'that the club invite a vet to talk',ico:'🐕',c:'o'}], traceWord: 'vet' },
            { scene: '🔭👂🧑‍🤝‍🧑', full: 'It is essential that every viewpoint be heard', parts: [{t:'It',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'essential that every viewpoint be heard',ico:'🔭',c:'o'}], traceWord: 'viewpoint' },
            { scene: '💻🏫📚', full: 'Students insist that the school hold virtual lessons', parts: [{t:'Students',ico:'🎒',c:'s'}, {t:'insist',ico:'☝️',c:'v'}, {t:'that the school hold virtual lessons',ico:'💻',c:'o'}], traceWord: 'virtual' },
            { scene: '🛂✈️👧', full: 'I recommend that she apply for a visa early', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'recommend',ico:'👍',c:'v'}, {t:'that she apply for a visa early',ico:'🛂',c:'o'}], traceWord: 'visa' },
            { scene: '🖼👀✨', full: 'It is essential that the poster be visually clear and vivid', parts: [{t:'It',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'essential that the poster be visually clear and vivid',ico:'🌈',c:'o'}], traceWord: 'visually' },
            { scene: '👨‍🏫👧🌈', full: 'Mr Lee suggests that Anna describe the trip vividly', parts: [{t:'Mr Lee',ico:'👨‍🏫',c:'s'}, {t:'suggests',ico:'💡',c:'v'}, {t:'that Anna describe the trip vividly',ico:'🌈',c:'o'}], traceWord: 'vividly' },
            { scene: '👨‍🏫🚫💢', full: 'The teacher insists that nobody argue violently in class', parts: [{t:'The teacher',ico:'👨‍🏫',c:'s'}, {t:'insists',ico:'☝️',c:'v'}, {t:'that nobody argue violently in class',ico:'💢',c:'o'}], traceWord: 'violently' }
          ],
          qaList: [
            { q: 'Who helps patients in the ward?', scene: '🏥👩‍⚕️🛏', ans: 'A kind nurse', opts: [{ txt: 'A kind nurse', ico: '👩‍⚕️' }, { txt: 'A wagon driver', ico: '🛒' }, { txt: 'A small bird', ico: '🐦' }] },
            { q: 'Where does Tom keep his clothes?', scene: '👦👔🚪', ans: 'In his wardrobe', opts: [{ txt: 'In his wardrobe', ico: '👔' }, { txt: 'In a volcano', ico: '🌋' }, { txt: 'In the river', ico: '🏞' }] },
            { q: 'What did the class read about?', scene: '📖🚢🌋', ans: 'A voyage past a volcano', opts: [{ txt: 'A voyage past a volcano', ico: '🚢🌋' }, { txt: 'A lunch in the library', ico: '🍽' }, { txt: 'A new phone', ico: '📱' }] },
            { q: 'Did her first plan work?', scene: '👧📋😔', ans: 'No, she tried in vain', opts: [{ txt: 'No, she tried in vain', ico: '😔' }, { txt: 'Yes, it was a great success', ico: '🏆' }, { txt: 'Yes, it worked well', ico: '👍' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Thư Góp Ý Cho Trường',
            steps: [
              '<b>Bước 1:</b> Cùng bạn chọn 3 điều trường mình nên cải thiện (bữa trưa, thư viện, lớp học trực tuyến...) và ghi nhanh vào giấy.',
              '<b>Bước 2:</b> Mỗi người viết 3 câu góp ý, nhớ giữ động từ nguyên mẫu: <i>"I suggest that the school offer vegetarian lunches."</i>',
              '<b>Bước 3:</b> Đọc to thư cho bạn nghe, rồi cùng kiểm tra xem động từ sau that đã đúng nguyên mẫu chưa.'
            ]
          }
        },
        {
          id: '6.26B', name: 'Bài 6.26B: Trò chuyện tự nhiên, gọn gàng',
          grammar: {
            formulas: ['🗣 I broke my old bag, so I will buy + 🆕 a new one', '🤞 I hope so / 😕 I\'m afraid not', '✅ They told us to stop, and we + ⚡ did so'],
            tip: 'Đừng lặp từ! Dùng one / ones thay danh từ đếm được, so / not thay cả mệnh đề, và did so thay cả hành động.'
          },
          chunks: [
            { scene: '🚰💔🆕', full: 'I broke my old washbowl, so I will buy a new one', parts: [{t:'I',ico:'🙋',c:'s'}, {t:'broke',ico:'💔',c:'v'}, {t:'my old washbowl, so I will buy a new one',ico:'🚰',c:'o'}], traceWord: 'washbowl' },
            { scene: '📜🤔🙏', full: 'Tom asked if the warranty was still good, and Lan said she hoped so', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'if the warranty was still good, and Lan said she hoped so',ico:'📜',c:'o'}], traceWord: 'warranty' },
            { scene: '🦆🌿🚶', full: 'The guide told us to leave the wetland, and we did so', parts: [{t:'The guide',ico:'🧑‍🏫',c:'s'}, {t:'told',ico:'🗣',c:'v'}, {t:'us to leave the wetland, and we did so',ico:'🦆',c:'o'}], traceWord: 'wetland' },
            { scene: '📣👦🆕', full: 'My brother has an old whistle, but I want a new one', parts: [{t:'My brother',ico:'👦',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'an old whistle, but I want a new one',ico:'📣',c:'o'}], traceWord: 'whistle' },
            { scene: '🔥🏠🛋', full: 'The fire gives warmth, and the one in the hall gives more', parts: [{t:'The fire',ico:'🔥',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'warmth, and the one in the hall gives more',ico:'🤗',c:'o'}], traceWord: 'warmth' },
            { scene: '👩‍🏫🤗👧', full: 'The teacher welcomed the new girl warmly, and the others did so too', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'welcomed',ico:'👋',c:'v'}, {t:'the new girl warmly, and the others did so too',ico:'🤗',c:'o'}], traceWord: 'warmly' },
            { scene: '🦌🧑‍🏫👔', full: 'The wildlife guide was well-dressed, and the new one was too', parts: [{t:'The wildlife guide',ico:'🦌',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'well-dressed, and the new one was too',ico:'👔',c:'o'}], traceWord: 'wildlife' },
            { scene: '📷🚮👨', full: 'We thought the old webcam was wasteful, and Dad thought so too', parts: [{t:'We',ico:'👭',c:'s'}, {t:'thought',ico:'💭',c:'v'}, {t:'the old webcam was wasteful, and Dad thought so too',ico:'📷',c:'o'}], traceWord: 'webcam' }
          ],
          qaList: [
            { q: 'What is that candle made of?', scene: '🕯🧴🔥', ans: 'It is made of wax', opts: [{ txt: 'It is made of wax', ico: '🧴' }, { txt: 'It is made of ice', ico: '🧊' }, { txt: 'It is made of glass', ico: '🥛' }] },
            { q: 'Does the weather warning say it will rain?', scene: '🚧🌧☔', ans: 'Yes, I\'m afraid so', opts: [{ txt: 'Yes, I\'m afraid so', ico: '🌧' }, { txt: 'It is by the waterfall', ico: '💦' }, { txt: 'He is a brave warrior', ico: '🏹' }] },
            { q: 'Which way did the group go?', scene: '🧭🚶‍♂️🌅', ans: 'They went westward', opts: [{ txt: 'They went westward', ico: '🧭' }, { txt: 'They danced wildly', ico: '🎢' }, { txt: 'They ate lunch', ico: '🍽' }] },
            { q: 'Is the shop closed on Sunday?', scene: '🏪🚫📅', ans: 'I\'m afraid so', opts: [{ txt: 'I\'m afraid so', ico: '😕' }, { txt: 'On the shelf', ico: '📚' }, { txt: 'A red one', ico: '🔴' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hội Thoại Không Lặp Từ',
            steps: [
              '<b>Bước 1:</b> Cùng bạn chọn 3 đồ vật trong phòng (có màu hoặc cỡ khác nhau) và viết mỗi đồ một câu có từ <i>"one"</i> hoặc <i>"ones"</i>.',
              '<b>Bước 2:</b> Một người hỏi câu Yes/No, người kia trả lời gọn: <i>"I hope so."</i> hoặc <i>"I\'m afraid not."</i>',
              '<b>Bước 3:</b> Đổi vai, thêm một câu có <i>"did so"</i>, rồi cả hai bình chọn ai nói gọn và tự nhiên nhất.'
            ]
          }
        },
        {
          id: '6.26C', name: 'Bài 6.26C: Bài báo và bài luận',
          grammar: {
            formulas: ['📌 It + ⚡ is worth + 🔧 V-ing', '🚫 There + ⚡ is no point in + 🔧 V-ing', '🧠 S + ⚡ find(s) + 📌 it + 😮 adj + 🔧 to V'],
            tip: 'Sau worth và sau giới từ in luôn là V-ing; còn find it + adj thì đi với to + V. Câu mở đầu bằng It / There là "chủ ngữ giả"!'
          },
          chunks: [
            { scene: '🏢👀💼', full: 'It is worth visiting a workplace before choosing a job', parts: [{t:'It',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'worth visiting a workplace before choosing a job',ico:'🏢',c:'o'}], traceWord: 'workplace' },
            { scene: '🏋🌅👍', full: 'It is worthwhile to do a short workout every day', parts: [{t:'It',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'worthwhile to do a short workout every day',ico:'🏋',c:'o'}], traceWord: 'workout' },
            { scene: '⌚🛒🚫', full: 'There is no point in buying a wristwatch that is not working', parts: [{t:'There',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'no point in buying a wristwatch that is not working',ico:'⌚',c:'o'}], traceWord: 'wristwatch' },
            { scene: '📖✍📋', full: 'It is no use reading the written rules if you do not follow them', parts: [{t:'It',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'no use reading the written rules if you do not follow them',ico:'✍',c:'o'}], traceWord: 'written' },
            { scene: '👧🤲✏️', full: 'She finds it hard to hold a pen with a sore wrist', parts: [{t:'She',ico:'👧',c:'s'}, {t:'finds',ico:'🧠',c:'v'}, {t:'it hard to hold a pen with a sore wrist',ico:'🤲',c:'o'}], traceWord: 'wrist' },
            { scene: '🏄🌊☀️', full: 'Tom finds it exciting to try windsurfing in the summer', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'finds',ico:'🧠',c:'v'}, {t:'it exciting to try windsurfing in the summer',ico:'🏄',c:'o'}], traceWord: 'windsurfing' },
            { scene: '🎁🗑🚫', full: 'There is no point in keeping the wrapping from the gift', parts: [{t:'There',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'no point in keeping the wrapping from the gift',ico:'🎁',c:'o'}], traceWord: 'wrapping' },
            { scene: '🥀💧⏰', full: 'It is no use giving water too late, because the flowers will wither', parts: [{t:'It',ico:'📌',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'no use giving water too late, because the flowers will wither',ico:'🥀',c:'o'}], traceWord: 'wither' }
          ],
          qaList: [
            { q: 'Is it worth asking Lan to fix the computer?', scene: '👧💻🧙', ans: 'Yes, she is a wizard with computers', opts: [{ txt: 'Yes, she is a wizard with computers', ico: '🧙' }, { txt: 'Red apple', ico: '🍎' }, { txt: 'In the box', ico: '📦' }] },
            { q: 'What do teachers like in a new student?', scene: '👩‍🏫🙋🎒', ans: 'A willingness to learn', opts: [{ txt: 'A willingness to learn', ico: '🙋' }, { txt: 'A dirty windscreen', ico: '🚗' }, { txt: 'A broken bag', ico: '🎒' }] },
            { q: 'Who is worthy of the first prize?', scene: '🏅👧🎉', ans: 'Mai, who worked hard', opts: [{ txt: 'Mai, who worked hard', ico: '🏅' }, { txt: 'The empty box', ico: '📦' }, { txt: 'A cold morning', ico: '🌅' }] },
            { q: 'Why do you want new shoes?', scene: '👞🛍😕', ans: 'My old ones are worn', opts: [{ txt: 'My old ones are worn', ico: '👞' }, { txt: 'It is a sunny day', ico: '☀️' }, { txt: 'At the bus stop', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Mini Bài Luận Ý Kiến',
            steps: [
              '<b>Bước 1:</b> Chọn một chủ đề (tập thể dục, thể thao, nơi làm việc) và viết 3 câu mở bài với <i>"It is worth..."</i>, <i>"There is no point in..."</i>, <i>"I find it hard to..."</i>.',
              '<b>Bước 2:</b> Trao đổi bài với bạn, gạch dưới các cụm chủ ngữ giả It / There và kiểm tra V-ing, to V đã đúng chưa.',
              '<b>Bước 3:</b> Mỗi người đọc to bài luận mini trong 1 phút như đang thuyết trình, bạn còn lại cho 1 lời khen.'
            ]
          }
        }
      ]
    },
    '6.27': {
      lessons: [
        {
        id: '6.27A',
        name: 'Bài 6.27A: Ôn thi: biến đổi câu',
        grammar: {
        formulas: ['👦 I + 💭 wish + 🧘 I could do yoga', '📰 The amendment + ✍ was written + 🧑 by a civilian', '🏢 The firm + ⏪ would have avoided + 📋 the liability'],
        tip: 'Biến đổi câu thì ý nghĩa phải giữ nguyên: điều kiện loại 3 dùng If + had + V3, would have + V3; ước muốn ở hiện tại dùng wish + quá khứ; tường thuật lùi một thì!'
        },
        chunks: [
        { scene: '🧘🌅😊', full: 'I wish I could do yoga every day.', parts: [{t:'I',ico:'👦',c:'s'},{t:'wish',ico:'💭',c:'v'},{t:'I could do yoga every day',ico:'🧘',c:'o'}], traceWord: 'yoga' },
        { scene: '👧👂📣', full: 'She said that she heard a yell.', parts: [{t:'She',ico:'👧',c:'s'},{t:'said',ico:'💬',c:'v'},{t:'that she heard a yell',ico:'📣',c:'o'}], traceWord: 'yell' },
        { scene: '📝✍🧑', full: 'The amendment was written by a civilian.', parts: [{t:'The amendment',ico:'📝',c:'s'},{t:'was written',ico:'✍',c:'v'},{t:'by a civilian',ico:'🧑',c:'o'}], traceWord: 'amendment' },
        { scene: '🗣👨🚫', full: 'The man is alleged to have ignored the sanction.', parts: [{t:'The man',ico:'👨',c:'s'},{t:'is alleged',ico:'🗣',c:'v'},{t:'to have ignored the sanction',ico:'🚫',c:'o'}], traceWord: 'sanction' },
        { scene: '⛓🌈👫', full: 'We would enjoy more diversity if there were less constraint.', parts: [{t:'We',ico:'👫',c:'s'},{t:'would enjoy',ico:'😊',c:'v'},{t:'more diversity if there were less constraint',ico:'🌈',c:'o'}], traceWord: 'diversity' },
        { scene: '🏫📍🏘', full: 'The school is situated in a quiet cluster of houses.', parts: [{t:'The school',ico:'🏫',c:'s'},{t:'is situated',ico:'📍',c:'v'},{t:'in a quiet cluster of houses',ico:'🏘',c:'o'}], traceWord: 'situated' },
        { scene: '🏢📋🛠', full: 'The firm would have avoided the liability if it had planned the implementation better.', parts: [{t:'The firm',ico:'🏢',c:'s'},{t:'would have avoided',ico:'⏪',c:'v'},{t:'the liability if it had planned the implementation better',ico:'📋',c:'o'}], traceWord: 'implementation' },
        { scene: '👥🎓🧩', full: 'The team comprises ten students and two teachers.', parts: [{t:'The team',ico:'👥',c:'s'},{t:'comprises',ico:'🧩',c:'v'},{t:'ten students and two teachers',ico:'🎓',c:'o'}], traceWord: 'comprises' }
        ],
        qaList: [
        { q: 'Is there any indication of bias in the test?', scene: '📍⚖📝', ans: 'No, there is no indication of bias.', opts: [{txt:'No, there is no indication of bias.',ico:'✅'},{txt:'Yes, we wish we could do yoga.',ico:'🧘'},{txt:'No, the test is a quiet cluster.',ico:'🍇'}] },
        { q: 'What kind of accent does she have?', scene: '👧🗣🔎', ans: 'She has a distinct accent.', opts: [{txt:'She has a distinct accent.',ico:'🔎'},{txt:'She has a heavy suitcase.',ico:'🧳'},{txt:'She has a hot soup.',ico:'🍲'}] },
        { q: 'What would you do if you heard a yell?', scene: '📣👂😮', ans: 'I would look for the person.', opts: [{txt:'I would look for the person.',ico:'🔍'},{txt:'I would eat the door.',ico:'🚪'},{txt:'I would wash the moon.',ico:'🌙'}] },
        { q: 'Who is a civilian?', scene: '🧑🏙❓', ans: 'A civilian is not a soldier.', opts: [{txt:'A civilian is not a soldier.',ico:'🧑'},{txt:'A civilian is a kind of fruit.',ico:'🍎'},{txt:'A civilian is a big train.',ico:'🚆'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Biến đổi câu như thi thật',
        steps: [
        '<b>Bước 1:</b> Viết ba câu của em lên giấy, ví dụ <i>"I wish I could do yoga every day."</i> hoặc <i>"She said that she heard a yell."</i>',
        '<b>Bước 2:</b> Cùng bạn biến đổi mỗi câu sang một cấu trúc khác (bị động, tường thuật, câu điều kiện, wish) mà nghĩa không đổi, rồi đổi giấy cho nhau chấm.',
        '<b>Bước 3:</b> Chọn câu hay nhất, đọc to trước bạn hoặc người thân và giải thích vì sao hai câu có cùng nghĩa.'
        ]
        }
        },
        {
        id: '6.27B',
        name: 'Bài 6.27B: Ôn thi: điền từ ngữ pháp',
        grammar: {
        formulas: ['👩 She + 🚶 went + 🏥 to the doctor', '🏫 The school + 🎁 gives + 🤝 support to students', '🔬 The scientist + 🧪 will test + 💡 her hypothesis in the lab'],
        tip: 'Điền từ vào chỗ trống: đọc cả câu, đoán loại từ cần điền (mạo từ, giới từ, trợ động từ hay liên từ) rồi thử đọc lại xem có tự nhiên không!'
        },
        chunks: [
        { scene: '🤰👩‍⚕️🏥', full: 'She went to the doctor because of her pregnancy.', parts: [{t:'She',ico:'👩',c:'s'},{t:'went',ico:'🚶',c:'v'},{t:'to the doctor because of her pregnancy',ico:'🤰',c:'o'}], traceWord: 'pregnancy' },
        { scene: '🧪🏫🏢', full: 'The experimental class was held in a new building.', parts: [{t:'The experimental class',ico:'🧪',c:'s'},{t:'was held',ico:'📅',c:'v'},{t:'in a new building',ico:'🏢',c:'o'}], traceWord: 'experimental' },
        { scene: '🏛🎒🤝', full: 'The school gives institutional support to all new students.', parts: [{t:'The school',ico:'🏫',c:'s'},{t:'gives',ico:'🎁',c:'v'},{t:'institutional support to all new students',ico:'🏛',c:'o'}], traceWord: 'institutional' },
        { scene: '👦🏅⏭', full: 'He joined the club, and subsequently he became its leader.', parts: [{t:'He',ico:'👦',c:'s'},{t:'joined',ico:'🚪',c:'v'},{t:'the club, and subsequently he became its leader',ico:'⏭',c:'o'}], traceWord: 'subsequently' },
        { scene: '🏠🔑👭', full: 'The ownership of the house passed to her sister.', parts: [{t:'The ownership of the house',ico:'🔑',c:'s'},{t:'passed',ico:'➡',c:'v'},{t:'to her sister',ico:'👭',c:'o'}], traceWord: 'ownership' },
        { scene: '🙋👥🏥', full: 'Many people did voluntary work at the hospital.', parts: [{t:'Many people',ico:'👥',c:'s'},{t:'did',ico:'💪',c:'v'},{t:'voluntary work at the hospital',ico:'🙋',c:'o'}], traceWord: 'voluntary' },
        { scene: '🌉🏗🚧', full: 'The bridge has a structural problem, so it is closed.', parts: [{t:'The bridge',ico:'🌉',c:'s'},{t:'has',ico:'✋',c:'v'},{t:'a structural problem, so it is closed',ico:'🚧',c:'o'}], traceWord: 'structural' },
        { scene: '🔬👩‍🔬💡', full: 'The scientist will test her hypothesis in the lab.', parts: [{t:'The scientist',ico:'👩‍🔬',c:'s'},{t:'will test',ico:'🧪',c:'v'},{t:'her hypothesis in the lab',ico:'🔬',c:'o'}], traceWord: 'hypothesis' }
        ],
        qaList: [
        { q: 'What is the first module like?', scene: '🧱📐📖', ans: 'The first module is theoretical.', opts: [{txt:'The first module is theoretical.',ico:'📐'},{txt:'The first module is very tasty.',ico:'😋'},{txt:'The first module is under the bed.',ico:'🛏'}] },
        { q: 'What does the first parameter show?', scene: '📐📊🏙', ans: 'It shows the density of the city.', opts: [{txt:'It shows the density of the city.',ico:'📊'},{txt:'It shows a trillion stars.',ico:'🌟'},{txt:'It shows a cold sandwich.',ico:'🥪'}] },
        { q: 'What should you do for a new car?', scene: '🚗🛡📄', ans: 'You should insure it.', opts: [{txt:'You should insure it.',ico:'🛡'},{txt:'You should sing to it.',ico:'🎤'},{txt:'You should paint the sky.',ico:'🎨'}] },
        { q: 'How does the man do his work?', scene: '👨💼🤝', ans: 'He does it faithfully.', opts: [{txt:'He does it faithfully.',ico:'🤝'},{txt:'He does it under the table.',ico:'🪑'},{txt:'He does it purple.',ico:'🟣'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Thi điền từ cùng bạn',
        steps: [
        '<b>Bước 1:</b> Chép một đoạn văn ngắn 5 câu bằng tiếng Anh (về trường lớp hoặc câu lạc bộ) và dùng bút che 5 từ ngữ pháp như <i>"the"</i>, <i>"in"</i>, <i>"was"</i>, <i>"because"</i>, <i>"of"</i>.',
        '<b>Bước 2:</b> Đưa đoạn văn cho bạn hoặc người thân, mỗi chỗ trống chỉ được điền MỘT từ; sau đó mở che ra so đáp án.',
        '<b>Bước 3:</b> Với mỗi chỗ sai, nói to vì sao từ đó mới đúng (mạo từ, giới từ, trợ động từ hay liên từ) và ghi vào sổ tay.'
        ]
        }
        },
        {
        id: '6.27C',
        name: 'Bài 6.27C: Ôn thi: viết bài luận và bài đánh giá',
        grammar: {
        formulas: ['⛔ Never has + 🌐 this domain + 🔓 been so open', '👉 It was + 🔤 the semantic meaning + ❓ that confused us', '✍ The writer + 🙋 who wrote this + ⭐ is on par with the best'],
        tip: 'Viết luận hay thì phối hợp nhiều cấu trúc: đảo ngữ (Never has + S + V3), câu chẻ (It was ... that ...) và mệnh đề quan hệ (who, which); nhớ đảo trợ động từ lên trước chủ ngữ!'
        },
        chunks: [
        { scene: '🌐🔓💡', full: 'Never has this domain been so open to new ideas.', parts: [{t:'Never has',ico:'⛔',c:'v'},{t:'this domain',ico:'🌐',c:'s'},{t:'been so open to new ideas',ico:'💡',c:'o'}], traceWord: 'domain' },
        { scene: '🔤😕🎓', full: 'It was the semantic meaning that confused the students.', parts: [{t:'It',ico:'👉',c:'s'},{t:'was',ico:'⚡',c:'v'},{t:'the semantic meaning that confused the students',ico:'🔤',c:'o'}], traceWord: 'semantic' },
        { scene: '🗺🔴🏙', full: 'The red line denotes the border of the city.', parts: [{t:'The red line',ico:'🔴',c:'s'},{t:'denotes',ico:'🔣',c:'v'},{t:'the border of the city',ico:'🏙',c:'o'}], traceWord: 'denotes' },
        { scene: '✍⭐🏆', full: 'The writer who wrote this review is on par with the best critics.', parts: [{t:'The writer who wrote this review',ico:'✍',c:'s'},{t:'is',ico:'⚡',c:'v'},{t:'on par with the best critics',ico:'⛳',c:'o'}], traceWord: 'par' },
        { scene: '📖📈😊', full: 'The story is easy to follow because it has a linear path.', parts: [{t:'The story',ico:'📖',c:'s'},{t:'is',ico:'⚡',c:'v'},{t:'easy to follow because it has a linear path',ico:'📈',c:'o'}], traceWord: 'linear' },
        { scene: '👧🔢😲', full: 'Hardly had she read the matrix when she found the mistake.', parts: [{t:'Hardly had',ico:'⏱',c:'v'},{t:'she',ico:'👧',c:'s'},{t:'read the matrix when she found the mistake',ico:'🔢',c:'o'}], traceWord: 'matrix' },
        { scene: '🧠📝👧', full: 'This test measures cognitive skills, which help children learn.', parts: [{t:'This test',ico:'📝',c:'s'},{t:'measures',ico:'📏',c:'v'},{t:'cognitive skills, which help children learn',ico:'🧠',c:'o'}], traceWord: 'cognitive' },
        { scene: '😴📊🌟', full: 'There is a clear correlation between sleep and good marks.', parts: [{t:'There',ico:'👉',c:'s'},{t:'is',ico:'⚡',c:'v'},{t:'a clear correlation between sleep and good marks',ico:'📊',c:'o'}], traceWord: 'correlation' }
        ],
        qaList: [
        { q: 'What does a linguistic test study?', scene: '🗣📝💬', ans: 'It studies language and discourse.', opts: [{txt:'It studies language and discourse.',ico:'💬'},{txt:'It studies cars and their velocity.',ico:'🚗'},{txt:'It studies a cold ion in tea.',ico:'🍵'}] },
        { q: 'What does a vector show?', scene: '➡💨📐', ans: 'A vector shows direction and velocity.', opts: [{txt:'A vector shows direction and velocity.',ico:'➡'},{txt:'A vector shows the price of a cake.',ico:'🍰'},{txt:'A vector is a small ion in tea.',ico:'⚛'}] },
        { q: 'What can induce a quick answer?', scene: '⚡🙋💨', ans: 'A strong stimulus can.', opts: [{txt:'A strong stimulus can.',ico:'⚡'},{txt:'A closed door can.',ico:'🚪'},{txt:'A sleepy cat can.',ico:'🐱'}] },
        { q: 'Is the time for the exam finite or endless?', scene: '⏰📝🔒', ans: 'It is finite, so we must plan well.', opts: [{txt:'It is finite, so we must plan well.',ico:'🔒'},{txt:'It is endless, so we can sleep.',ico:'😴'},{txt:'It is a red apple.',ico:'🍎'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Bài luận mini và đánh giá phim',
        steps: [
        '<b>Bước 1:</b> Chọn một bộ phim hoặc cuốn sách em thích và viết 4 câu đánh giá, trong đó có một câu chẻ <i>"It was ... that ..."</i> và một câu có <i>who</i> hoặc <i>which</i>.',
        '<b>Bước 2:</b> Thêm một câu đảo ngữ như <i>"Never has this story been so exciting."</i> rồi gạch chân ba cấu trúc em đã dùng.',
        '<b>Bước 3:</b> Thuyết trình mini 1 phút cho bạn hoặc người thân nghe và xin họ nhận xét xem bài viết có rõ ý và dễ hiểu không.'
        ]
        }
        }
      ]
    }
  }
};
