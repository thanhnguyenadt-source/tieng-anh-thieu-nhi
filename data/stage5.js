/* GIAI ĐOẠN 5 — B1 Preliminary (PET) cho học sinh
   Dữ liệu một giai đoạn. Nạp bằng <script src> (chạy được từ file://, không dùng fetch).
   Định dạng bài học: xem docs/GEMINI_LESSON_PROMPT.md; kiểm bằng: node tools/validate_lessons.js (và tools/coverage.js) */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[5] = {
  label: '🏆 GĐ 5: PET',  // chữ hiện trên nút chọn giai đoạn
  modules: [
    { code: '5.1', title: 'Cảm Xúc Và Tình Bạn' },
    { code: '5.2', title: 'Học Tập Và Nghề Nghiệp' },
    { code: '5.3', title: 'Công Nghệ Và Truyền Thông' },
    { code: '5.4', title: 'Du Lịch Và Văn Hóa' },
    { code: '5.5', title: 'Xã Hội Và Môi Trường' },
    { code: '5.6', title: 'Sức Khỏe Và Thể Thao' },
    { code: '5.7', title: 'Ăn Uống Và Nấu Nướng' },
    { code: '5.8', title: 'Mua Sắm Và Thời Trang' },
    { code: '5.9', title: 'Thành Phố Và Giao Thông' },
    { code: '5.10', title: 'Nhà Cửa Và Đời Sống' },
    { code: '5.11', title: 'Lịch Sử Và Danh Nhân' },
    { code: '5.12', title: 'Khoa Học Và Khám Phá' },
    { code: '5.13', title: 'Động Vật Và Thiên Nhiên' },
    { code: '5.14', title: 'Việc Làm Và Tiền Bạc' },
    { code: '5.15', title: 'Giải Trí Và Truyền Thông' },
    { code: '5.16', title: 'Nghệ Thuật Và Sáng Tạo' },
    { code: '5.17', title: 'Ngôn Ngữ Và Học Tập' },
    { code: '5.18', title: 'Tương Lai Và Ước Mơ' },
    { code: '5.19', title: 'Vấn Đề Toàn Cầu' },
    { code: '5.20', title: 'Ôn Tổng Kết Và Thi Thử' }
  ],
  data: {
    '5.1': {
      lessons: [
        {
          id: '5.1A', name: 'Bài 5.1A: Việc đang kéo dài đến giờ',
          grammar: {
            formulas: ['👦 I / 👥 You / We / They + ⚡ have been + 🏃 V-ing', '👧 She / 👦 He / 🚋 It + ⚡ has been + 🏃 V-ing', '⏳ ... + for / since + ⏰ khoảng thời gian / mốc thời gian'],
            tip: 'Việc bắt đầu trong quá khứ và còn kéo dài đến giờ: I / you / we / they + have been, he / she / it + has been, rồi thêm V-ing nhé!'
          },
          chunks: [
            { scene: '🦶😣🌅', full: 'My toe has been hurting since yesterday morning', parts: [{t:'My toe',ico:'🦶',c:'s'}, {t:'has been hurting',ico:'⚡',c:'v'}, {t:'since yesterday morning',ico:'🌅',c:'o'}], traceWord: 'toe' },
            { scene: '🪥😁⏳', full: 'I have been using the same toothbrush for a long time', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have been using',ico:'⚡',c:'v'}, {t:'the same toothbrush for a long time',ico:'🪥',c:'o'}], traceWord: 'toothbrush' },
            { scene: '🏋⚽👥', full: 'The team has been doing hard training since January', parts: [{t:'The team',ico:'👥',c:'s'}, {t:'has been doing',ico:'⚡',c:'v'}, {t:'hard training since January',ico:'🏋',c:'o'}], traceWord: 'training' },
            { scene: '🚋⏰🚏', full: 'The tram has been waiting at the station for ten minutes', parts: [{t:'The tram',ico:'🚋',c:'s'}, {t:'has been waiting',ico:'⚡',c:'v'}, {t:'at the station for ten minutes',ico:'🚏',c:'o'}], traceWord: 'tram' },
            { scene: '🧳😣🚌', full: 'The traveler has been feeling uncomfortable on the crowded bus', parts: [{t:'The traveler',ico:'🧳',c:'s'}, {t:'has been feeling',ico:'⚡',c:'v'}, {t:'uncomfortable on the crowded bus',ico:'😣',c:'o'}], traceWord: 'uncomfortable' },
            { scene: '💎🤿🌊', full: 'They have been looking for the treasure underwater all day', parts: [{t:'They',ico:'👥',c:'s'}, {t:'have been looking',ico:'⚡',c:'v'}, {t:'for the treasure underwater all day',ico:'💎',c:'o'}], traceWord: 'treasure' },
            { scene: '👦😟📝', full: 'He has been feeling uneasy about the exam all week', parts: [{t:'He',ico:'👦',c:'s'}, {t:'has been feeling',ico:'⚡',c:'v'}, {t:'uneasy about the exam all week',ico:'😟',c:'o'}], traceWord: 'uneasy' },
            { scene: '🌟✈️👫', full: 'We have been planning an unforgettable trip for our friends', parts: [{t:'We',ico:'👫',c:'s'}, {t:'have been planning',ico:'⚡',c:'v'}, {t:'an unforgettable trip for our friends',ico:'🌟',c:'o'}], traceWord: 'unforgettable' }
          ],
          qaList: [
            { q: 'How has Nam been feeling this week?', scene: '👦🤔😞', ans: 'He has been feeling uncertain and unhappy this week', opts: [{ txt: 'He has been feeling uncertain and unhappy this week', ico: '😞' }, { txt: 'She has been cooking dinner for two hours', ico: '🍳' }, { txt: 'They have been walking in the park today', ico: '🌳' }] },
            { q: 'What has Mai been saying about the new rule?', scene: '👧⚖🚫', ans: 'She has been saying the rule is unfair and unnecessary', opts: [{ txt: 'She has been saying the rule is unfair and unnecessary', ico: '⚖' }, { txt: 'She has been drinking milk with her lunch', ico: '🥛' }, { txt: 'The dog has been running in the garden', ico: '🐕' }] },
            { q: 'What have you been eating too much this month?', scene: '👦🍟🍬', ans: 'I have been eating too many unhealthy snacks this month', opts: [{ txt: 'I have been eating too many unhealthy snacks this month', ico: '🍟' }, { txt: 'I have been reading books at the library today', ico: '📚' }, { txt: 'We have been sleeping on the bus since noon', ico: '😴' }] },
            { q: 'What has Tom been thinking about the small mistake?', scene: '👦💭✏️', ans: 'He has been thinking the mistake is unimportant', opts: [{ txt: 'He has been thinking the mistake is unimportant', ico: '🔽' }, { txt: 'He has been running to the shop in the rain', ico: '🌧' }, { txt: 'She has been painting a big blue house', ico: '🎨' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản Tin Của Một Tuần',
            steps: [
              '<b>Bước 1:</b> Lấy một tờ giấy, viết 4 việc em đã làm liên tục trong thời gian qua (ví dụ: học bài, tập thể thao, đọc truyện, chơi game) và ghi kèm bao lâu (for two hours / since Monday).',
              '<b>Bước 2:</b> Viết mỗi việc thành một câu bằng mẫu mới, ví dụ <i>"I have been practicing the guitar since January."</i> rồi đọc to từng câu và tự ghi âm bằng điện thoại.',
              '<b>Bước 3:</b> Hỏi một người bạn hoặc người thân <i>"What have you been doing lately?"</i>, nghe họ trả lời và ghi lại một câu của họ bằng <i>"He has been..."</i> hoặc <i>"She has been..."</i>.'
            ]
          }
        },
        {
          id: '5.1B', name: 'Bài 5.1B: Chuyện xảy ra trước chuyện khác',
          grammar: {
            formulas: ['👦 I / 👧 She / 👥 They + ⚡ had + ✅ V3', '✅ had + V3 (xong trước) + ⏰ before + ▶️ việc xảy ra sau'],
            tip: 'Hai việc cùng trong quá khứ: việc xảy ra TRƯỚC dùng had + V3, việc xảy ra sau dùng quá khứ đơn. Với mọi chủ ngữ, "had" không bao giờ đổi!'
          },
          chunks: [
            { scene: '👦🧹🤢', full: 'I had cleaned the unpleasant kitchen before my guests arrived', parts: [{t:'I',ico:'👦',c:'s'}, {t:'had cleaned',ico:'🧹',c:'v'}, {t:'the unpleasant kitchen before my guests arrived',ico:'🤢',c:'o'}], traceWord: 'unpleasant' },
            { scene: '👧🪜🍽', full: 'My sister had walked upstairs before we finished dinner', parts: [{t:'My sister',ico:'👧',c:'s'}, {t:'had walked',ico:'🚶',c:'v'}, {t:'upstairs before we finished dinner',ico:'🪜',c:'o'}], traceWord: 'upstairs' },
            { scene: '👧🥶🏠', full: 'She had never been used to cold winters before', parts: [{t:'She',ico:'👧',c:'s'}, {t:'had never been',ico:'⚡',c:'v'}, {t:'used to cold winters before',ico:'🔁',c:'o'}], traceWord: 'used' },
            { scene: '👦👛🎻', full: 'Tom had lost his wallet before the violin lesson ended', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'had lost',ico:'😮',c:'v'}, {t:'his wallet before the violin lesson ended',ico:'🎻',c:'o'}], traceWord: 'violin' },
            { scene: '👧🍽🚶', full: 'Mai had finished the washing-up before we started walking', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'had finished',ico:'✅',c:'v'}, {t:'the washing-up before we started walking',ico:'🍽',c:'o'}], traceWord: 'walking' },
            { scene: '👫🌐💒', full: 'We had visited the website before we planned the wedding', parts: [{t:'We',ico:'👫',c:'s'}, {t:'had visited',ico:'👀',c:'v'}, {t:'the website before we planned the wedding',ico:'💒',c:'o'}], traceWord: 'website' },
            { scene: '👨💼📅🏙', full: 'Dad had worked every weekday before he moved to the city', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'had worked',ico:'💼',c:'v'}, {t:'every weekday before he moved to the city',ico:'📅',c:'o'}], traceWord: 'weekday' },
            { scene: '⭐🎤♿👦', full: 'The well-known singer had helped a boy in a wheelchair', parts: [{t:'The well-known singer',ico:'⭐',c:'s'}, {t:'had helped',ico:'🤝',c:'v'}, {t:'a boy in a wheelchair',ico:'♿',c:'o'}], traceWord: 'wheelchair' }
          ],
          qaList: [
            { q: 'Whom had you called before the party?', scene: '👦📞🎉', ans: 'I had called my cousin before the party started', opts: [{ txt: 'I had called my cousin before the party started', ico: '📞' }, { txt: 'The party is on Saturday night', ico: '🎉' }, { txt: 'My dog is sleeping in the garden', ico: '🐕' }] },
            { q: 'Why did the girl weep after the film?', scene: '👧😭🎬', ans: 'She started to weep because she had lost her toy', opts: [{ txt: 'She started to weep because she had lost her toy', ico: '😭' }, { txt: 'She was laughing because the film was funny', ico: '😂' }, { txt: 'She started to dance because she was happy', ico: '💃' }] },
            { q: 'What had Grandma picked for your new scarf?', scene: '👵🧶🧣', ans: 'Grandma had picked blue wool for my warm scarf', opts: [{ txt: 'Grandma had picked blue wool for my warm scarf', ico: '🧶' }, { txt: 'Grandma had cleaned my red bicycle', ico: '🚲' }, { txt: 'Grandma had visited the zoo with my uncle', ico: '🦁' }] },
            { q: 'Had the guests arrived when you opened the door?', scene: '🚪👥🎁', ans: 'Yes, they had arrived before I opened the door', opts: [{ txt: 'Yes, they had arrived before I opened the door', ico: '🚪' }, { txt: 'I am eating pizza with my uncle now', ico: '🍕' }, { txt: 'No, the weather is hot and sunny', ico: '☀️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám Tử Thời Gian',
            steps: [
              '<b>Bước 1:</b> Viết 3 sự kiện của hôm qua lên 3 mẩu giấy (ví dụ: ăn tối, làm bài tập, tắm). Xếp chúng theo thứ tự thật đã xảy ra.',
              '<b>Bước 2:</b> Nối từng cặp sự kiện bằng mẫu mới, ví dụ <i>"I had finished my homework before I ate dinner."</i> Đọc to và nhờ bạn hoặc người thân kiểm tra thứ tự.',
              '<b>Bước 3:</b> Đổi vai: bạn đưa ra 2 sự kiện lộn xộn, em phải đoán việc nào xảy ra trước và nói <i>"He had ... before ..."</i> thật đúng.'
            ]
          }
        },
        {
          id: '5.1C', name: 'Bài 5.1C: Nếu mình là bạn...',
          grammar: {
            formulas: ['👦 I + ⚡ would + 🎯 V + 💭 if I were ...', '💭 If + 👦 I / 🐱 it + ⚡ were / had + ➡️ I would + V', '🌠 I + ⚡ wish + 💭 I / it + ⚡ were / had ...'],
            tip: 'Điều giả định không có thật: if + quá khứ, would + V. Với I wish cũng lùi về quá khứ, và "were" dùng được cho mọi ngôi nhé!'
          },
          chunks: [
            { scene: '👦😰👩‍🏫', full: 'I would talk to my teacher if I were worried', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would talk',ico:'💬',c:'v'}, {t:'to my teacher if I were worried',ico:'😰',c:'o'}], traceWord: 'worried' },
            { scene: '👦😢📉', full: 'I would feel worse if this were the worst day ever', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would feel',ico:'😢',c:'v'}, {t:'worse if this were the worst day ever',ico:'👎',c:'o'}], traceWord: 'worst' },
            { scene: '🎵🌍⭐', full: 'I wish my favorite song were famous worldwide', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'my favorite song were famous worldwide',ico:'🌍',c:'o'}], traceWord: 'worldwide' },
            { scene: '✍📒📈', full: 'I would improve my writing if I practiced every day', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would improve',ico:'📈',c:'v'}, {t:'my writing if I practiced every day',ico:'✍',c:'o'}], traceWord: 'writing' },
            { scene: '👫🏫🏦', full: 'I wish every friend were an asset to our class', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'every friend were an asset to our class',ico:'🏦',c:'o'}], traceWord: 'asset' },
            { scene: '🗳👥❓', full: 'We would ask more people in a poll if we had time', parts: [{t:'We',ico:'👫',c:'s'}, {t:'would ask',ico:'❓',c:'v'}, {t:'more people in a poll if we had time',ico:'🗳',c:'o'}], traceWord: 'poll' },
            { scene: '👷⚙🔧', full: 'I would build a simple mechanism if I were an engineer', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would build',ico:'🔧',c:'v'}, {t:'a simple mechanism if I were an engineer',ico:'⚙',c:'o'}], traceWord: 'mechanism' },
            { scene: '👥🏗📋', full: 'I wish our team had a clear framework for the plan', parts: [{t:'I',ico:'👦',c:'s'}, {t:'wish',ico:'🌠',c:'v'}, {t:'our team had a clear framework for the plan',ico:'🏗',c:'o'}], traceWord: 'framework' }
          ],
          qaList: [
            { q: 'What would you say to a tired friend?', scene: '👦🥱🛌', ans: 'I would say you ought to rest more', opts: [{ txt: 'I would say you ought to rest more', ico: '☝' }, { txt: 'I would say the tram is purple', ico: '🚋' }, { txt: 'I would say that tea is blue', ico: '🍵' }] },
            { q: 'If you wanted more protein, what would you eat for lunch and dinner?', scene: '🥚🐟🥩', ans: 'I would eat eggs and fish for lunch and dinner respectively', opts: [{ txt: 'I would eat eggs and fish for lunch and dinner respectively', ico: '🥩' }, { txt: 'I would wear a hat and a scarf today', ico: '🧣' }, { txt: 'I would sing a song at the zoo', ico: '🎤' }] },
            { q: 'What would you check first if you were a scientist?', scene: '🧑‍🔬🎚📝', ans: 'I would check each variable and every premise', opts: [{ txt: 'I would check each variable and every premise', ico: '🎚' }, { txt: 'I would sing a loud song at school', ico: '🎤' }, { txt: 'I would sleep in a big blue boat', ico: '⛵' }] },
            { q: 'If you were a judge, what criterion would you use?', scene: '👨‍⚖️📐🖼', ans: 'I would use a clear representation of the idea', opts: [{ txt: 'I would use a clear representation of the idea', ico: '🖼' }, { txt: 'I would use a hot cup of coffee', ico: '☕' }, { txt: 'I would use my red bicycle every day', ico: '🚲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cố Vấn Bạn Bè',
            steps: [
              '<b>Bước 1:</b> Viết 3 vấn đề nhỏ của một bạn tưởng tượng (ví dụ: bị điểm thấp, lo lắng khi thuyết trình, lạc đường) lên 3 mẩu giấy.',
              '<b>Bước 2:</b> Với mỗi vấn đề, viết lời khuyên bằng mẫu <i>"If I were you, I would ..."</i> và một điều ước bằng <i>"I wish ..."</i>, rồi đọc to hoặc ghi âm lại.',
              '<b>Bước 3:</b> Làm một khảo sát nhỏ: hỏi 3 người <i>"What would you do if you were me?"</i>, ghi lại câu trả lời và chọn lời khuyên hay nhất của cả nhóm.'
            ]
          }
        }
      ]
    },
    '5.2': {
      lessons: [
        {
          id: '5.2A', name: 'Bài 5.2A: Thuật lại lời thầy cô',
          grammar: {
            formulas: ['👩‍🏫 She + 🗣️ said + 💬 that it was good', '⏪ am / is → was  +  will → would  +  can → could'],
            tip: 'Thầy cô nói xong là chuyện đã qua, nên am/is lùi thành was, will thành would, can thành could!'
          },
          chunks: [
            { scene: '👩‍🏫➗📉', full: 'The teacher said that the ratio was low', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the ratio was low',ico:'➗',c:'o'}], traceWord: 'ratio' },
            { scene: '👩📎📊', full: 'Mrs Lan said that she would cite the statistic', parts: [{t:'Mrs Lan',ico:'👩',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that she would cite the statistic',ico:'📊',c:'o'}], traceWord: 'statistic' },
            { scene: '🧑‍✈️🚧🌊', full: 'The guide said that the boundary was near the river', parts: [{t:'The guide',ico:'🧑‍✈️',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the boundary was near the river',ico:'🚧',c:'o'}], traceWord: 'boundary' },
            { scene: '👨⏰🟰', full: 'He said that one hour was the equivalent of sixty minutes', parts: [{t:'He',ico:'👨',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that one hour was the equivalent of sixty minutes',ico:'🟰',c:'o'}], traceWord: 'equivalent' },
            { scene: '👩‍🏫💼🏫', full: 'The teacher said that a shareholder would visit our school', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that a shareholder would visit our school',ico:'💼',c:'o'}], traceWord: 'shareholder' },
            { scene: '👨‍🏫⏭️🎛️', full: 'He said that the subsequent lesson would use a new mode', parts: [{t:'He',ico:'👨‍🏫',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the subsequent lesson would use a new mode',ico:'⏭️',c:'o'}], traceWord: 'subsequent' },
            { scene: '👨🔬🧫', full: 'Mr Nam said that the scientist would isolate the virus', parts: [{t:'Mr Nam',ico:'👨',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that the scientist would isolate the virus',ico:'🧫',c:'o'}], traceWord: 'isolate' },
            { scene: '👩💡🧱', full: 'She said that this idea would underlie the whole course', parts: [{t:'She',ico:'👩',c:'s'}, {t:'said',ico:'🗣️',c:'v'}, {t:'that this idea would underlie the whole course',ico:'🧱',c:'o'}], traceWord: 'underlie' }
          ],
          qaList: [
            { q: 'Why could the students not call home?', scene: '📡📵📱', ans: 'She said that the coverage was bad, hence we could not call', opts: [{ txt: 'She said that the coverage was bad, hence we could not call', ico: '📡' }, { txt: 'He said that the cake was big', ico: '🍰' }, { txt: 'I am a happy bird', ico: '🐦' }] },
            { q: 'What did the teacher say about the two stories?', scene: '📖📖🟰', ans: 'She said that they had a parallel', opts: [{ txt: 'She said that they had a parallel', ico: '🟰' }, { txt: 'He said that the bus was red', ico: '🚌' }, { txt: 'The dog is under the bed', ico: '🐶' }] },
            { q: 'What did Mrs Lan say about the new idea?', scene: '💡🧩👩', ans: 'She said that she would incorporate it', opts: [{ txt: 'She said that she would incorporate it', ico: '🧩' }, { txt: 'He said that the milk was hot', ico: '🥛' }, { txt: 'We eat rice at night', ico: '🍚' }] },
            { q: 'What did the doctor say?', scene: '👩‍⚕️🛑🏥', ans: 'She said that the intervention was very helpful', opts: [{ txt: 'She said that the intervention was very helpful', ico: '🛑' }, { txt: 'They said that the moon was a shoe', ico: '🌙' }, { txt: 'The fish can fly to school', ico: '🐟' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phóng Viên Lớp Học',
            steps: [
              '<b>Bước 1:</b> Nhờ một người nhà (hoặc bạn) nói 3 câu về ngày mai, ví dụ <i>"I will go to school early"</i>, rồi bạn ghi lại bằng điện thoại hoặc giấy.',
              '<b>Bước 2:</b> Bạn viết lại từng câu theo lời tường thuật, ví dụ <i>"He said that he would go to school early"</i>, nhớ lùi thì (will → would, am/is → was).',
              '<b>Bước 3:</b> Đọc to 3 câu tường thuật cho người đó nghe và nhờ họ kiểm tra xem bạn có thuật lại đúng ý không.'
            ]
          }
        },
        {
          id: '5.2B', name: 'Bài 5.2B: Phỏng vấn, nhờ vả',
          grammar: {
            formulas: ['❓ She + 🗣️ asked + 💬 if / whether I liked it', '🙋 He + 🗣️ told me + 👉 to open the door', '❓ She + 🗣️ asked + 🔍 what / where I did (không đảo)'],
            tip: 'Tường thuật câu hỏi thì không đảo: asked what I did, đừng nói asked what did I. Lời nhờ thì dùng told me to!'
          },
          chunks: [
            { scene: '🎤🧑‍💼✅', full: 'The reporter asked if I was able to speak', parts: [{t:'The reporter',ico:'🎤',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'if I was able to speak',ico:'✅',c:'o'}], traceWord: 'able' },
            { scene: '👩❓🗃️', full: 'She asked me whether I liked this sort of work', parts: [{t:'She',ico:'👩',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'me whether I liked this sort of work',ico:'🗃️',c:'o'}], traceWord: 'sort' },
            { scene: '👨💸🏫', full: 'Mr Lee asked what the school expenditure was last term', parts: [{t:'Mr Lee',ico:'👨',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'what the school expenditure was last term',ico:'💸',c:'o'}], traceWord: 'expenditure' },
            { scene: '👩‍🏫🔄📖', full: 'The teacher told me to read the process again', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'told',ico:'🗣️',c:'v'}, {t:'me to read the process again',ico:'🔄',c:'o'}], traceWord: 'process' },
            { scene: '👩📢🔔', full: 'She asked why I would advocate a new school service', parts: [{t:'She',ico:'👩',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'why I would advocate a new school service',ico:'📢',c:'o'}], traceWord: 'advocate' },
            { scene: '👩‍⚕️🏥🎲', full: 'The nurse asked if the clinical test was random', parts: [{t:'The nurse',ico:'👩‍⚕️',c:'s'}, {t:'asked',ico:'❓',c:'v'}, {t:'if the clinical test was random',ico:'🏥',c:'o'}], traceWord: 'clinical' },
            { scene: '⚖️🏛️🪑', full: 'The counsel told me to wait in the quiet chamber', parts: [{t:'The counsel',ico:'⚖️',c:'s'}, {t:'told',ico:'🗣️',c:'v'}, {t:'me to wait in the quiet chamber',ico:'🏛️',c:'o'}], traceWord: 'chamber' },
            { scene: '🧑‍🏫😞⚽', full: 'The coach told us not to depress the team whilst we played', parts: [{t:'The coach',ico:'🧑‍🏫',c:'s'}, {t:'told',ico:'🗣️',c:'v'}, {t:'us not to depress the team whilst we played',ico:'😞',c:'o'}], traceWord: 'whilst' }
          ],
          qaList: [
            { q: 'What did the doctor tell you?', scene: '👩‍⚕️🌞🧴', ans: 'She told me to avoid too much exposure to the sun', opts: [{ txt: 'She told me to avoid too much exposure to the sun', ico: '🌞' }, { txt: 'I am a very big tree', ico: '🌳' }, { txt: 'The cat drinks blue shoes', ico: '🐱' }] },
            { q: 'What did the student ask the teacher?', scene: '🧑‍🎓❓📖', ans: 'He asked what the word abortion meant', opts: [{ txt: 'He asked what the word abortion meant', ico: '🩺' }, { txt: 'She told me to open the moon', ico: '🌙' }, { txt: 'We were a green bus', ico: '🚌' }] },
            { q: 'What did the nurse tell you?', scene: '👩‍⚕️🪑👦', ans: 'She told me to sit down', opts: [{ txt: 'She told me to sit down', ico: '🪑' }, { txt: 'He asked if the rain was hungry', ico: '🌧️' }, { txt: 'They are a cold pencil', ico: '✏️' }] },
            { q: 'What did the reporter ask?', scene: '🎤🏠❓', ans: 'He asked where I lived', opts: [{ txt: 'He asked where I lived', ico: '🏠' }, { txt: 'She told me to fly a house', ico: '🏠' }, { txt: 'The milk asked a chair', ico: '🥛' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Bạn Thân',
            steps: [
              '<b>Bước 1:</b> Bạn phỏng vấn một người thân hoặc bạn bằng 3 câu hỏi tiếng Anh, ví dụ <i>"Do you like your job?"</i>, <i>"Where do you work?"</i>, rồi ghi âm hoặc ghi chú câu trả lời.',
              '<b>Bước 2:</b> Viết lại câu hỏi theo kiểu tường thuật, không đảo trật tự: <i>"I asked if he liked his job"</i>, <i>"I asked where he worked"</i>.',
              '<b>Bước 3:</b> Nhờ người đó đưa cho bạn 2 yêu cầu nhỏ, rồi thuật lại bằng <i>"He told me to ..."</i> và đọc to cho cả nhà nghe.'
            ]
          }
        },
        {
          id: '5.2C', name: 'Bài 5.2C: Đoán nghề từ manh mối',
          grammar: {
            formulas: ['🔎 She + ✅ must be + 👩‍⚕️ a doctor (chắc chắn đúng)', '🔎 He + ❌ can\'t be + 🧑‍🎓 a student (chắc chắn sai)', '🔎 They + 🤷 might be + 🧑‍🌾 farmers (có thể)'],
            tip: 'Chắc chắn đúng thì dùng must be, chắc chắn sai thì dùng can\'t be, còn phân vân thì dùng might be!'
          },
          chunks: [
            { scene: '👩‍⚕️🏥🕘', full: 'She must be a general doctor who is available today', parts: [{t:'She',ico:'👩‍⚕️',c:'s'}, {t:'must be',ico:'✅',c:'v'}, {t:'a general doctor who is available today',ico:'🌐',c:'o'}], traceWord: 'general' },
            { scene: '👨🧑‍🎓🏫', full: 'He can\'t be the main teacher because he is a student', parts: [{t:'He',ico:'👨',c:'s'}, {t:'can\'t be',ico:'❌',c:'v'}, {t:'the main teacher because he is a student',ico:'⭐',c:'o'}], traceWord: 'main' },
            { scene: '👩‍🌾🌾⏰', full: 'The woman might be a farmer who works ten hours per day', parts: [{t:'The woman',ico:'👩‍🌾',c:'s'}, {t:'might be',ico:'🤷',c:'v'}, {t:'a farmer who works ten hours per day',ico:'💲',c:'o'}], traceWord: 'per' },
            { scene: '👨📉🏗️', full: 'That man must be an expert in economic development', parts: [{t:'That man',ico:'👨',c:'s'}, {t:'must be',ico:'✅',c:'v'}, {t:'an expert in economic development',ico:'🏗️',c:'o'}], traceWord: 'development' },
            { scene: '👩‍💼🤔📋', full: 'She must be a manager whose job involves many decisions', parts: [{t:'She',ico:'👩‍💼',c:'s'}, {t:'must be',ico:'✅',c:'v'}, {t:'a manager whose job involves many decisions',ico:'🤔',c:'o'}], traceWord: 'involves' },
            { scene: '👨🏃🧭', full: 'The man might be a coach with an individual approach', parts: [{t:'The man',ico:'👨',c:'s'}, {t:'might be',ico:'🤷',c:'v'}, {t:'a coach with an individual approach',ico:'🧭',c:'o'}], traceWord: 'individual' },
            { scene: '👩‍💼🏢📜', full: 'The woman must be a clerk who knows the company policy', parts: [{t:'The woman',ico:'👩‍💼',c:'s'}, {t:'must be',ico:'✅',c:'v'}, {t:'a clerk who knows the company policy',ico:'📜',c:'o'}], traceWord: 'policy' },
            { scene: '👩‍⚕️❌📋', full: 'She can\'t be a doctor because that job requires more study', parts: [{t:'She',ico:'👩',c:'s'}, {t:'can\'t be',ico:'❌',c:'v'}, {t:'a doctor because that job requires more study',ico:'📋',c:'o'}], traceWord: 'requires' }
          ],
          qaList: [
            { q: 'Why is Mr Tan so happy?', scene: '👨😄📈', ans: 'He must be happy about the rise in pay', opts: [{ txt: 'He must be happy about the rise in pay', ico: '📈' }, { txt: 'It is a blue bag', ico: '👜' }, { txt: 'She is on the bus', ico: '🚌' }] },
            { q: 'Is the museum ticket free?', scene: '🏛️🎟️💳', ans: 'It can\'t be free because there is a charge', opts: [{ txt: 'It can\'t be free because there is a charge', ico: '💳' }, { txt: 'It might be a green fish', ico: '🐟' }, { txt: 'We are in the kitchen', ico: '🍳' }] },
            { q: 'Anna and Tom always laugh together. What do you think?', scene: '👧👦😂🤝', ans: 'Their relationship must be very close', opts: [{ txt: 'Their relationship must be very close', ico: '🤝' }, { txt: 'The rain is a red hat', ico: '🌧️' }, { txt: 'He can\'t be a fast table', ico: '🪑' }] },
            { q: 'Why is the clerk busy?', scene: '👩‍💼💰🧮', ans: 'She might count a large amount of money', opts: [{ txt: 'She might count a large amount of money', ico: '💰' }, { txt: 'The moon must be a cold shoe', ico: '🌙' }, { txt: 'They are under the sun', ico: '☀️' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám Tử Nghề Nghiệp',
            steps: [
              '<b>Bước 1:</b> Cắt 6 mảnh giấy, mỗi mảnh ghi một nghề (doctor, farmer, teacher...) cùng 2 manh mối bằng tiếng Anh, ví dụ <i>"works in a hospital"</i>.',
              '<b>Bước 2:</b> Đưa manh mối cho bạn hoặc người nhà và nhờ họ đoán bằng <i>"She must be a doctor"</i>, <i>"He can\'t be a farmer"</i> hoặc <i>"They might be teachers"</i>.',
              '<b>Bước 3:</b> Đổi vai, rồi viết 3 câu đoán của mình vào vở và đọc to lại, nhớ chọn đúng must / can\'t / might theo mức chắc chắn.'
            ]
          }
        }
      ]
    },
    '5.3': {
      lessons: [
        {
          id: '5.3A', name: 'Bài 5.3A: Phát minh thay đổi cuộc sống',
          grammar: {
            formulas: ['📞 The telephone + ⚡ was + 💡 regarded as great', '🏭 Safety measures + ⚡ have been + ➕ added', '🔐 Security + ⚡ will be / must be + ⬆️ improved'],
            tip: 'Bị động = be + V3: quá khứ dùng was/were, hoàn thành dùng have/has been, còn will hay must thì cứ be + V3 nhé!'
          },
          chunks: [
            { scene: '📞💡👍', full: 'The telephone was regarded as a great invention', parts: [{t:'The telephone',ico:'📞',c:'s'}, {t:'was regarded',ico:'👁️',c:'v'}, {t:'as a great invention',ico:'💡',c:'o'}], traceWord: 'regarded' },
            { scene: '🏢👫🛠️', full: 'Many new organizations were created by young people', parts: [{t:'Many new organizations',ico:'🏢',c:'s'}, {t:'were created',ico:'🛠️',c:'v'}, {t:'by young people',ico:'👫',c:'o'}], traceWord: 'organizations' },
            { scene: '🏦🚀🏭', full: 'A new fund was started to help the industry grow', parts: [{t:'A new fund',ico:'🏦',c:'s'}, {t:'was started',ico:'🚀',c:'v'}, {t:'to help the industry grow',ico:'🏭',c:'o'}], traceWord: 'fund' },
            { scene: '📏🏭➕', full: 'Safety measures have been added in every factory', parts: [{t:'Safety measures',ico:'📏',c:'s'}, {t:'have been added',ico:'➕',c:'v'}, {t:'in every factory',ico:'🏭',c:'o'}], traceWord: 'measures' },
            { scene: '🔐💻⬆️', full: 'Online security will be improved by new computer systems', parts: [{t:'Online security',ico:'🔐',c:'s'}, {t:'will be improved',ico:'⬆️',c:'v'}, {t:'by new computer systems',ico:'💻',c:'o'}], traceWord: 'security' },
            { scene: '🎁⚠️🗣️', full: 'The benefits and risks must be explained to everyone', parts: [{t:'The benefits and risks',ico:'🎁',c:'s'}, {t:'must be explained',ico:'🗣️',c:'v'}, {t:'to everyone',ico:'👥',c:'o'}], traceWord: 'risks' },
            { scene: '📏✅📱', full: 'A high standard has been set for all new phones', parts: [{t:'A high standard',ico:'📏',c:'s'}, {t:'has been set',ico:'✅',c:'v'}, {t:'for all new phones',ico:'📱',c:'o'}], traceWord: 'standard' },
            { scene: '➕💰📉', full: 'The total cost will be reduced by ten percent', parts: [{t:'The total cost',ico:'➕',c:'s'}, {t:'will be reduced',ico:'📉',c:'v'}, {t:'by ten percent',ico:'💯',c:'o'}], traceWord: 'reduced' }
          ],
          qaList: [
            { q: 'What has the demand for phones done this year?', scene: '📈📱', ans: 'The demand for phones has increased a lot', opts: [{ txt: 'The demand for phones has increased a lot', ico: '📈' }, { txt: 'The window was cleaned by a small bird', ico: '🐦' }, { txt: 'A famous singer was invited to the party', ico: '🎤' }] },
            { q: 'How high was the picture placed on the wall?', scene: '🖼️🦶', ans: 'It was placed one foot above the desk', opts: [{ txt: 'It was placed one foot above the desk', ico: '🦶' }, { txt: 'It was cooked for dinner by my father', ico: '🍳' }, { txt: 'It was the best song of the year', ico: '🎵' }] },
            { q: 'What should be set for phone use at night?', scene: '📱🌙🚧', ans: 'A time limit should be set for everyone', opts: [{ txt: 'A time limit should be set for everyone', ico: '🚧' }, { txt: 'A big cake should be baked by my mother', ico: '🎂' }, { txt: 'A new bridge should be painted in the morning', ico: '🌉' }] },
            { q: 'Will new jobs be created by technology in the future?', scene: '💼🤖🔮', ans: 'Yes, many new jobs will be created by it', opts: [{ txt: 'Yes, many new jobs will be created by it', ico: '💼' }, { txt: 'No, my homework has been finished since yesterday', ico: '📝' }, { txt: 'The computer was washed by a very small cat', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảo Tàng Phát Minh Mini',
            steps: [
              '<b>Bước 1:</b> Chọn 3 đồ vật có sẵn trong nhà (điện thoại, đèn, đồng hồ). Với mỗi món, viết một câu bị động vào giấy, ví dụ <i>"The telephone was regarded as a great invention."</i>',
              '<b>Bước 2:</b> Viết thêm một câu về tương lai cho mỗi món, ví dụ <i>"New phones will be improved by young people."</i> Gạch chân phần be + V3 bằng bút màu.',
              '<b>Bước 3:</b> Làm hướng dẫn viên: đọc to 3 câu của mình cho người nhà nghe, hoặc ghi âm lại, rồi nghe lại và sửa chỗ nào chưa đúng.'
            ]
          }
        },
        {
          id: '5.3B', name: 'Bài 5.3B: Dịch vụ sửa chữa, nhờ làm giúp',
          grammar: {
            formulas: ['👦 I + ⚡ had + 📱 my cell phone repaired', '👩 She + ⚡ gets + 💇 her hair cut', '🏢 The firm + ⚡ will get + 📄 the report checked'],
            tip: 'Nhờ người khác làm giúp thì dùng have/get + vật + V3: vật đứng trước, V3 đứng sau, mình không tự tay làm đâu nhé!'
          },
          chunks: [
            { scene: '📱🔧👨‍🏫', full: 'I had my cell phone repaired by a former teacher', parts: [{t:'I',ico:'👦',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'my cell phone repaired by a former teacher',ico:'📱',c:'o'}], traceWord: 'cell' },
            { scene: '💻🔍✅', full: 'We get our current computer checked particularly carefully', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'get',ico:'⚡',c:'v'}, {t:'our current computer checked particularly carefully',ico:'💻',c:'o'}], traceWord: 'particularly' },
            { scene: '🎩🚗🧽', full: 'The president had his car washed before the meeting', parts: [{t:'The president',ico:'🎩',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'his car washed before the meeting',ico:'🚗',c:'o'}], traceWord: 'president' },
            { scene: '💭💇✂️', full: 'I suppose you will get your hair cut soon', parts: [{t:'I',ico:'👦',c:'s'}, {t:'suppose',ico:'💭',c:'v'}, {t:'you will get your hair cut soon',ico:'💇',c:'o'}], traceWord: 'suppose' },
            { scene: '🏢💵📄', full: 'The firm had its financial report checked twice', parts: [{t:'The firm',ico:'🏢',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'its financial report checked twice',ico:'💵',c:'o'}], traceWord: 'financial' },
            { scene: '📦👀🔓', full: 'We had the box opened to see what it contains', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'had',ico:'⚡',c:'v'}, {t:'the box opened to see what it contains',ico:'📦',c:'o'}], traceWord: 'contains' },
            { scene: '📰🌏🖨️', full: 'They get their story printed in the press of this region', parts: [{t:'They',ico:'👥',c:'s'}, {t:'get',ico:'⚡',c:'v'}, {t:'their story printed in the press of this region',ico:'📰',c:'o'}], traceWord: 'press' },
            { scene: '👧📷🖨️', full: 'Lan will get her photos printed at the shop tomorrow', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'will get',ico:'⚡',c:'v'}, {t:'her photos printed at the shop tomorrow',ico:'📷',c:'o'}], traceWord: 'photos' }
          ],
          qaList: [
            { q: 'How does sleep affect a student?', scene: '😴🌱🧒', ans: 'Good sleep helps their growth and their mood', opts: [{ txt: 'Good sleep helps their growth and their mood', ico: '😴' }, { txt: 'The student had the window cleaned yesterday', ico: '🪟' }, { txt: 'A bus is cheaper than a taxi today', ico: '🚌' }] },
            { q: 'Which habit is related to good manners?', scene: '🤝😊🔗', ans: 'Showing respect is related to good manners', opts: [{ txt: 'Showing respect is related to good manners', ico: '🤝' }, { txt: 'Washing dishes is related to a new song', ico: '🍽️' }, { txt: 'A tall tree is related to a hot pizza', ico: '🍕' }] },
            { q: 'What should you do when the video is too fast?', scene: '🎬⏩🛑', ans: 'I can press pause and watch the video again', opts: [{ txt: 'I can press pause and watch the video again', ico: '🛑' }, { txt: 'I can open the window and sing loudly', ico: '🎤' }, { txt: 'I can ask my teacher to buy pizza', ico: '🍕' }] },
            { q: 'What did you have done at the shop?', scene: '💇✂️🏪', ans: 'I had my hair cut at the shop', opts: [{ txt: 'I had my hair cut at the shop', ico: '💇' }, { txt: 'I am happy to see my aunt today', ico: '👩' }, { txt: 'My bike is blue and very fast', ico: '🚲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Khảo Sát Dịch Vụ Quanh Nhà',
            steps: [
              '<b>Bước 1:</b> Hỏi 3 người trong nhà hoặc bạn bè: tuần qua bạn nhờ ai làm giúp việc gì (sửa điện thoại, cắt tóc, giặt đồ...). Ghi nhanh câu trả lời bằng tiếng Việt.',
              '<b>Bước 2:</b> Chuyển mỗi câu trả lời thành một câu tiếng Anh với have/get + vật + V3, ví dụ <i>"My mom had her bike repaired."</i> hoặc <i>"My uncle gets his hair cut every month."</i>',
              '<b>Bước 3:</b> Kẻ bảng nhỏ gồm Người, Việc được nhờ, Câu tiếng Anh. Đọc to bảng cho cả nhà nghe hoặc ghi âm, rồi chọn câu hay nhất.'
            ]
          }
        },
        {
          id: '5.3C', name: 'Bài 5.3C: Giới thiệu ứng dụng, kênh video',
          grammar: {
            formulas: ['📱 This application, + ⚡ which is free, + 🎮 has various games', '👧 Mai, + ⚡ whose channel is popular, + 🌟 gained many fans', '🏫 The department, + ⚡ where the management works, + 🏢 is on the top floor'],
            tip: 'Mệnh đề không xác định luôn nằm giữa hai dấu phẩy: who/which chỉ người/vật, whose chỉ sở hữu, where chỉ nơi chốn, và không bao giờ dùng that!'
          },
          chunks: [
            { scene: '📱🎮🆓', full: 'This application, which is free, has various games', parts: [{t:'This application, which is free,',ico:'📱',c:'s'}, {t:'has',ico:'⚡',c:'v'}, {t:'various games',ico:'🎮',c:'o'}], traceWord: 'various' },
            { scene: '🏁🎞👦', full: 'Nam, who loves races, watches a series every week', parts: [{t:'Nam, who loves races,',ico:'👦',c:'s'}, {t:'watches',ico:'👀',c:'v'}, {t:'a series every week',ico:'🎞',c:'o'}], traceWord: 'series' },
            { scene: '📺💬🍂', full: 'The channel, where students share comments, grows every season', parts: [{t:'The channel, where students share comments,',ico:'📺',c:'s'}, {t:'grows',ico:'📈',c:'v'}, {t:'every season',ico:'🍂',c:'o'}], traceWord: 'comments' },
            { scene: '👧📺🌟', full: 'Mai, whose channel is popular, gained many new fans', parts: [{t:'Mai, whose channel is popular,',ico:'👧',c:'s'}, {t:'gained',ico:'📈',c:'v'}, {t:'many new fans',ico:'🌟',c:'o'}], traceWord: 'gained' },
            { scene: '📱🥈👜', full: 'This phone, which is medium in size, fits my small bag', parts: [{t:'This phone, which is medium in size,',ico:'📱',c:'s'}, {t:'fits',ico:'✅',c:'v'}, {t:'my small bag',ico:'👜',c:'o'}], traceWord: 'medium' },
            { scene: '🏢🧑‍💼🔝', full: 'The department, where the management works, is on the top floor', parts: [{t:'The department, where the management works,',ico:'🏢',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'on the top floor',ico:'🔝',c:'o'}], traceWord: 'management' },
            { scene: '📄🔬💹', full: 'The report, which contains a long analysis, shows how the economy works', parts: [{t:'The report, which contains a long analysis,',ico:'📄',c:'s'}, {t:'shows',ico:'👉',c:'v'}, {t:'how the economy works',ico:'💹',c:'o'}], traceWord: 'analysis' },
            { scene: '🔬✅🌍', full: 'The scientist, whose tests prove the idea, was thus recognized worldwide', parts: [{t:'The scientist, whose tests prove the idea,',ico:'🔬',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'thus recognized worldwide',ico:'🌍',c:'o'}], traceWord: 'recognized' }
          ],
          qaList: [
            { q: 'What will determine the winner of this game?', scene: '🔎🏆🎮', ans: 'The judges, who watch carefully, will choose the best team', opts: [{ txt: 'The judges, who watch carefully, will choose the best team', ico: '🏆' }, { txt: 'The cat, which is very small, will drive the bus', ico: '🐱' }, { txt: 'The kitchen, where we cook, will win the game', ico: '🍳' }] },
            { q: 'When does the festival occur in your town?', scene: '🎉❗🏘️', ans: 'The festival, which occurs in winter, is my favorite', opts: [{ txt: 'The festival, which occurs in winter, is my favorite', ico: '🎉' }, { txt: 'The bus, which is blue, goes to the moon', ico: '🚌' }, { txt: 'My aunt, whose house is big, cooks very well', ico: '👩' }] },
            { q: 'Where do you watch your favorite videos?', scene: '📺🏠🤫', ans: 'I watch them in my room, where it is quiet', opts: [{ txt: 'I watch them in my room, where it is quiet', ico: '🛏️' }, { txt: 'They are in my bag, which is green', ico: '🎒' }, { txt: 'It is Monday, which is a school day', ico: '📅' }] },
            { q: 'Who makes this video for the channel?', scene: '🎬👦📺', ans: 'My cousin, whose channel is new, makes it', opts: [{ txt: 'My cousin, whose channel is new, makes it', ico: '🎬' }, { txt: 'The lunch, which is hot, makes the video', ico: '🍜' }, { txt: 'My dog, whose ears are long, paints the wall', ico: '🐶' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Giới Thiệu Kênh Yêu Thích',
            steps: [
              '<b>Bước 1:</b> Chọn một ứng dụng hoặc kênh video em thích. Viết 3 câu giới thiệu có mệnh đề phụ giữa hai dấu phẩy, ví dụ <i>"This channel, which is free, has various videos."</i>',
              '<b>Bước 2:</b> Thêm một câu với whose và một câu với where, ví dụ <i>"Mai, whose channel is popular, makes funny videos."</i> Kiểm tra mỗi mệnh đề đã nằm giữa hai dấu phẩy chưa.',
              '<b>Bước 3:</b> Ghi âm phần giới thiệu dài khoảng một phút như một người dẫn chương trình, rồi cho bạn bè hoặc người nhà nghe và cho một lời nhận xét.'
            ]
          }
        }
      ]
    },
    '5.4': {
      lessons: [
        {
          id: '5.4A', name: 'Bài 5.4A: Kế hoạch và rủi ro chuyến đi',
          grammar: {
            formulas: ['⛔ unless + 🌧 it rains + ✅ we go', '👍 as long as + ☀️ the weather is good + 🧳 we travel', '🎒 in case + ❓ it rains + ☂️ take an umbrella'],
            tip: 'unless = nếu không • as long as = miễn là • in case = phòng khi — sau ba từ này dùng thì hiện tại, đừng dùng will!'
          },
          chunks: [
            { scene: '🗳🏠🧳', full: 'We will not travel unless the election is over', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will not travel',ico:'⚡',c:'v'}, {t:'unless the election is over',ico:'🗳',c:'o'}], traceWord: 'election' },
            { scene: '📱🔗🗺', full: 'I will send you the link in case you get lost', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will send',ico:'📤',c:'v'}, {t:'you the link in case you get lost',ico:'🔗',c:'o'}], traceWord: 'link' },
            { scene: '🌧☔🚶', full: 'We will walk despite the rain as long as it is warm', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will walk',ico:'🚶',c:'v'}, {t:'despite the rain as long as it is warm',ico:'☔',c:'o'}], traceWord: 'despite' },
            { scene: '🛣🚶😓', full: 'A ten mile walk is good movement unless you are tired', parts: [{t:'A ten mile walk',ico:'🛣',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'good movement unless you are tired',ico:'🚶',c:'o'}], traceWord: 'mile' },
            { scene: '🏨🤝🔑', full: 'The hotel will keep our room as long as we sign the agreement', parts: [{t:'The hotel',ico:'🏨',c:'s'}, {t:'will keep',ico:'🔐',c:'v'}, {t:'our room as long as we sign the agreement',ico:'🤝',c:'o'}], traceWord: 'agreement' },
            { scene: '🧾📉🧳', full: 'We keep the receipt in case of a loss or tax', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'keep',ico:'🧳',c:'v'}, {t:'the receipt in case of a loss or tax',ico:'🧾',c:'o'}], traceWord: 'loss' },
            { scene: '🎯🌊☀️', full: 'My aim is to see the sea as long as it is sunny', parts: [{t:'My aim',ico:'🎯',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'to see the sea as long as it is sunny',ico:'🌊',c:'o'}], traceWord: 'aim' },
            { scene: '🔑🌳🌧', full: 'We have access to the park unless the rain is serious', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'access to the park unless the rain is serious',ico:'🔑',c:'o'}], traceWord: 'serious' }
          ],
          qaList: [
            { q: 'What do you bring in case it is hot?', scene: '🥵🎒💧', ans: 'I bring a water supply', opts: [{ txt: 'I bring a water supply', ico: '📦' }, { txt: 'I bring a big coat', ico: '🧥' }, { txt: 'I bring a winter hat', ico: '🧢' }] },
            { q: 'When is the trip worth the money?', scene: '💰🧳☀️', ans: 'It is worth it as long as the weather is good', opts: [{ txt: 'It is worth it as long as the weather is good', ico: '💰' }, { txt: 'It is a blue bag', ico: '👜' }, { txt: 'I am from a small town', ico: '🏘' }] },
            { q: 'What can you do in case a tourist is ill?', scene: '🤒👩‍⚕️💊', ans: 'Call a doctor for fast treatment', opts: [{ txt: 'Call a doctor for fast treatment', ico: '💊' }, { txt: 'Eat a big cake', ico: '🍰' }, { txt: 'Sing a loud song', ico: '🎤' }] },
            { q: 'What is a nice treat after a long walk?', scene: '🚶🥤🍰', ans: 'A cold drink is a nice treat', opts: [{ txt: 'A cold drink is a nice treat', ico: '🥤' }, { txt: 'A broken shoe is a nice treat', ico: '👟' }, { txt: 'A bad cold is a nice treat', ico: '🤧' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản kế hoạch dự phòng',
            steps: [
              '<b>Bước 1:</b> Chọn một chuyến đi tưởng tượng (ví dụ đi biển cuối tuần). Viết 3 câu điều kiện về chuyến đi đó, mỗi câu dùng một từ: <i>"unless"</i>, <i>"as long as"</i>, <i>"in case"</i>.',
              '<b>Bước 2:</b> Nhớ quy tắc: sau unless / as long as / in case dùng thì hiện tại. Đọc to từng câu và gạch chân từ nối. Ví dụ: <i>"I will take an umbrella in case it rains."</i>',
              '<b>Bước 3:</b> Ghi âm bản kế hoạch gửi cho một người bạn hoặc người thân, rồi nhờ họ hỏi lại một câu: <i>"What will you do unless it is sunny?"</i> để bạn trả lời.'
            ]
          }
        },
        {
          id: '5.4B', name: 'Bài 5.4B: Kỷ niệm du lịch',
          grammar: {
            formulas: ['🧠 remember + 📸 V-ing + 🌴 (nhớ là đã làm)', '🧠 remember + ➡️ to V + 🎫 (nhớ để làm)', '🛑 stop + 🚶 V-ing / ➡️ to V + 🔎 (dừng hẳn / dừng để làm)'],
            tip: 'remember / stop / try + V-ing nói về việc ĐÃ làm hay thử làm • + to V nói về việc SẼ làm, nghĩa đổi hẳn nên nhớ kỹ nhé!'
          },
          chunks: [
            { scene: '🎪🙋🐘', full: 'I remember attending a huge festival last year', parts: [{t:'I',ico:'👦',c:'s'}, {t:'remember',ico:'🧠',c:'v'}, {t:'attending a huge festival last year',ico:'🎪',c:'o'}], traceWord: 'attending' },
            { scene: '🏆⚽🛑', full: 'She stopped to check the score of the game', parts: [{t:'She',ico:'👧',c:'s'}, {t:'stopped',ico:'🛑',c:'v'}, {t:'to check the score of the game',ico:'🏆',c:'o'}], traceWord: 'score' },
            { scene: '🌧🚶👍', full: 'We tried walking in the rain and felt positive', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'tried',ico:'💪',c:'v'}, {t:'walking in the rain and felt positive',ico:'👍',c:'o'}], traceWord: 'positive' },
            { scene: '🏘🌱📸', full: 'I remember visiting a town with big tourist potential', parts: [{t:'I',ico:'👦',c:'s'}, {t:'remember',ico:'🧠',c:'v'}, {t:'visiting a town with big tourist potential',ico:'🌱',c:'o'}], traceWord: 'potential' },
            { scene: '👧🏠🔗', full: 'She tried making a good relation with the host family', parts: [{t:'She',ico:'👧',c:'s'}, {t:'tried',ico:'💪',c:'v'}, {t:'making a good relation with the host family',ico:'🔗',c:'o'}], traceWord: 'relation' },
            { scene: '🧳🥵☀️', full: 'Tourists tend to suffer from the heat in summer', parts: [{t:'Tourists',ico:'🧳',c:'s'}, {t:'tend',ico:'📈',c:'v'}, {t:'to suffer from the heat in summer',ico:'😣',c:'o'}], traceWord: 'suffer' },
            { scene: '🏨📅⏩', full: 'I never forget to book in advance', parts: [{t:'I',ico:'👦',c:'s'}, {t:'never forget',ico:'🧠',c:'v'}, {t:'to book in advance',ico:'⏩',c:'o'}], traceWord: 'advance' },
            { scene: '🚌🌐👌', full: 'I remember using the network and it generally works', parts: [{t:'I',ico:'👦',c:'s'}, {t:'remember',ico:'🧠',c:'v'}, {t:'using the network and it generally works',ico:'🌐',c:'o'}], traceWord: 'network' }
          ],
          qaList: [
            { q: 'Why did you stop riding the bus?', scene: '🚌🌙😴', ans: 'The night bus operation was too slow', opts: [{ txt: 'The night bus operation was too slow', ico: '⚙️' }, { txt: 'The ice cream was too hot', ico: '🍦' }, { txt: 'My shoes were too blue', ico: '👟' }] },
            { q: 'What do you associate with summer?', scene: '☀️🌊🏖', ans: 'I associate summer with the sea', opts: [{ txt: 'I associate summer with the sea', ico: '🌊' }, { txt: 'I associate summer with deep snow', ico: '❄️' }, { txt: 'I associate summer with a warm coat', ico: '🧥' }] },
            { q: 'Can you give an instance of a good travel option?', scene: '🚆🔀📌', ans: 'For instance a train is a good option', opts: [{ txt: 'For instance a train is a good option', ico: '🚆' }, { txt: 'For instance a plate is a good option', ico: '🍽' }, { txt: 'For instance a cup is a good option', ico: '☕' }] },
            { q: 'What do you assume about a very quiet beach?', scene: '🏖🤫💭', ans: 'I assume it is a good place to rest', opts: [{ txt: 'I assume it is a good place to rest', ico: '😌' }, { txt: 'I assume it is a loud airport', ico: '✈️' }, { txt: 'I assume it is a hot soup', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký ký ức chuyến đi',
            steps: [
              '<b>Bước 1:</b> Lấy một tấm ảnh hoặc nhớ lại một chuyến đi cũ. Viết 3 câu về nó: một câu với <i>"I remember + V-ing"</i> (việc đã làm), một câu với <i>"I forgot to + V"</i> và một câu với <i>"I tried + V-ing"</i>.',
              '<b>Bước 2:</b> Tự hỏi bản thân: việc này đã xảy ra rồi hay sắp làm? Đã xảy ra thì dùng V-ing, sắp làm thì dùng to V. Ví dụ: <i>"I stopped to take a photo."</i>',
              '<b>Bước 3:</b> Kể ba câu đó cho người nhà nghe và nhờ họ đoán: <i>"Did you do it, or will you do it?"</i> Mỗi lần đoán đúng được một điểm.'
            ]
          }
        },
        {
          id: '5.4C', name: 'Bài 5.4C: Viết bài giới thiệu lễ hội',
          grammar: {
            formulas: ['🌧 Although + 😀 mệnh đề 1 + 🎉 mệnh đề 2', '🎪 despite + ☔ danh từ / V-ing + 😊 mệnh đề', '📖 mệnh đề 1 + ⚖️ while + 📖 mệnh đề 2'],
            tip: 'although và while đi với một mệnh đề đầy đủ • despite đi với danh từ hoặc V-ing, không đi với một câu có chủ ngữ và động từ!'
          },
          chunks: [
            { scene: '🌙🛍💡', full: 'Mai proposes a night market although the street is small', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'proposes',ico:'💡',c:'v'}, {t:'a night market although the street is small',ico:'🛍',c:'o'}], traceWord: 'proposes' },
            { scene: '🧠❓📖', full: 'The theory is unclear although the story is famous', parts: [{t:'The theory',ico:'🧠',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'unclear although the story is famous',ico:'❓',c:'o'}], traceWord: 'theory' },
            { scene: '📄📝✍️', full: 'I sent the document while he wrote the application', parts: [{t:'I',ico:'👦',c:'s'}, {t:'sent',ico:'📤',c:'v'}, {t:'the document while he wrote the application',ico:'📄',c:'o'}], traceWord: 'document' },
            { scene: '🔁👀🧵', full: 'The pattern is obviously beautiful despite the old cloth', parts: [{t:'The pattern',ico:'🔁',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'obviously beautiful despite the old cloth',ico:'👀',c:'o'}], traceWord: 'pattern' },
            { scene: '🎯⛲🚶', full: 'The central square is busy while the side street is quiet', parts: [{t:'The central square',ico:'🎯',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'busy while the side street is quiet',ico:'🚶',c:'o'}], traceWord: 'central' },
            { scene: '💃💼⏳', full: 'She loved dance throughout her career despite the hard work', parts: [{t:'She',ico:'👧',c:'s'}, {t:'loved',ico:'❤️',c:'v'}, {t:'dance throughout her career despite the hard work',ico:'💼',c:'o'}], traceWord: 'career' },
            { scene: '🛡🧰🏘', full: 'We protect the resources of the town although it is small', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'protect',ico:'🛡️',c:'v'}, {t:'the resources of the town although it is small',ico:'🧰',c:'o'}], traceWord: 'protect' },
            { scene: '🦠💥👩‍⚕️', full: 'The disease caused damage although the doctors worked hard', parts: [{t:'The disease',ico:'🦠',c:'s'}, {t:'caused',ico:'⚡',c:'v'}, {t:'damage although the doctors worked hard',ico:'💥',c:'o'}], traceWord: 'disease' }
          ],
          qaList: [
            { q: 'What do you keep in balance on holiday?', scene: '⚖️🏖🎒', ans: 'I keep work and fun in balance', opts: [{ txt: 'I keep work and fun in balance', ico: '⚖️' }, { txt: 'I keep the moon in my bag', ico: '🌙' }, { txt: 'I keep a pen in a cat', ico: '🐱' }] },
            { q: 'Do you like festivals although they are crowded?', scene: '🎉👥😊', ans: 'Yes I like them although they are crowded', opts: [{ txt: 'Yes I like them although they are crowded', ico: '🎉' }, { txt: 'I live in a blue bus', ico: '🚌' }, { txt: 'The festival is under a book', ico: '📖' }] },
            { q: 'What do you do while you wait for the festival?', scene: '⏳📸🎪', ans: 'I take photos while I wait', opts: [{ txt: 'I take photos while I wait', ico: '📸' }, { txt: 'I eat the radio while I wait', ico: '📻' }, { txt: 'I drink the phone while I wait', ico: '📱' }] },
            { q: 'Can you enjoy a trip despite the rain?', scene: '🌧☔😄', ans: 'Yes I can enjoy it despite the rain', opts: [{ txt: 'Yes I can enjoy it despite the rain', ico: '☔' }, { txt: 'No the rain is my uncle', ico: '👨' }, { txt: 'Yes the rain is a green shoe', ico: '👟' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết bài giới thiệu lễ hội',
            steps: [
              '<b>Bước 1:</b> Chọn một lễ hội bạn biết (Tết, Trung thu...). Viết 4 câu giới thiệu, mỗi câu có một cặp ý tương phản dùng <i>"although"</i>, <i>"while"</i> hoặc <i>"despite"</i>.',
              '<b>Bước 2:</b> Kiểm tra: sau although / while có chủ ngữ và động từ chưa? Sau despite chỉ có danh từ hoặc V-ing. Ví dụ: <i>"Although it is crowded, the festival is fun."</i>',
              '<b>Bước 3:</b> Đọc bài cho bạn bè hoặc người nhà nghe, hoặc ghi âm lại, rồi cùng hỏi nhau: <i>"Which part do you like most?"</i>'
            ]
          }
        }
      ]
    },
    '5.5': {
      lessons: [
        {
          id: '5.5A', name: 'Bài 5.5A: Biến đổi khí hậu, thành phố',
          grammar: {
            formulas: ['➕ The more + 👥 people + ⚡ live here, + ➕ the more + 🏠 property costs', '🏙️ The city + ⚡ is + 🔍 much / far / slightly + 📏 bigger + ⚖️ than before', '📉 less + 💵 expensive / 🏆 the least + 😄 fun'],
            tip: 'Càng...càng... = The more..., the more...; much / far = hơn NHIỀU, slightly = hơn MỘT CHÚT; less = ít hơn, the least = ít nhất!'
          },
          chunks: [
            { scene: '🏙️👥🏘️', full: 'The more people live here, the more property costs', parts: [{t:'The more people',ico:'👥',c:'s'}, {t:'live',ico:'🏙️',c:'v'}, {t:'here, the more property costs',ico:'🏘️',c:'o'}], traceWord: 'property' },
            { scene: '🏙️📈📅', full: 'Our city is much bigger than it was in the previous year', parts: [{t:'Our city',ico:'🏙️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'much bigger than it was in the previous year',ico:'⏮️',c:'o'}], traceWord: 'previous' },
            { scene: '🌳🛠️😄', full: 'The more we maintain the parks, the happier people feel', parts: [{t:'The more we',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'maintain',ico:'🛠️',c:'v'}, {t:'the parks, the happier people feel',ico:'🌳',c:'o'}], traceWord: 'maintain' },
            { scene: '🏟️🆕⚽', full: 'The new sports facility is far bigger than the old one', parts: [{t:'The new sports facility',ico:'🏟️',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'far bigger than the old one',ico:'📏',c:'o'}], traceWord: 'facility' },
            { scene: '🛒🍎🍌', full: 'This market has a variety of fruit and is slightly cheaper', parts: [{t:'This market',ico:'🛒',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a variety of fruit and is slightly cheaper',ico:'🎨',c:'o'}], traceWord: 'variety' },
            { scene: '🚲🆓💵', full: 'Riding a bike is completely free and costs less than a bus', parts: [{t:'Riding a bike',ico:'🚲',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'completely free and costs less than a bus',ico:'💯',c:'o'}], traceWord: 'completely' },
            { scene: '🧹🛣️😅', full: 'Cleaning the street is the least fun responsibility of all', parts: [{t:'Cleaning the street',ico:'🧹',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the least fun responsibility of all',ico:'📌',c:'o'}], traceWord: 'responsibility' },
            { scene: '👨‍👩‍👧💵💰', full: 'The more income families have, the more they can save', parts: [{t:'The more income families',ico:'👨‍👩‍👧',c:'s'}, {t:'have,',ico:'🤲',c:'v'}, {t:'the more they can save',ico:'💰',c:'o'}], traceWord: 'income' }
          ],
          qaList: [
            { q: 'Is it legal to extend the library hours here?', scene: '📚⏰⚖️', ans: 'Yes, it is legal', opts: [{ txt: 'Yes, it is legal', ico: '⚖️' }, { txt: 'It is on the table', ico: '🪑' }, { txt: 'I am nine years old', ico: '🎂' }] },
            { q: 'Does the village have a bank or a hospital?', scene: '🏘️🏦🏥', ans: 'It has neither a bank nor a hospital', opts: [{ txt: 'It has neither a bank nor a hospital', ico: '🚫' }, { txt: 'It is very cold today', ico: '🥶' }, { txt: 'She is my best friend', ico: '👭' }] },
            { q: 'Can you define the word basis?', scene: '📖🧱💭', ans: 'A basis is the main part of an idea', opts: [{ txt: 'A basis is the main part of an idea', ico: '🧱' }, { txt: 'It is a kind of fruit', ico: '🍎' }, { txt: 'I walk to school', ico: '🚶' }] },
            { q: 'What is your conclusion about the strange object?', scene: '📦❓🤖', ans: 'There is a possibility that it is a robot', opts: [{ txt: 'There is a possibility that it is a robot', ico: '🤖' }, { txt: 'I have two cats', ico: '🐱' }, { txt: 'The soup is hot', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Khảo Sát Nhỏ Về Nơi Em Sống',
            steps: [
              '<b>Bước 1:</b> Em viết 3 câu so sánh nơi em sống với một nơi khác, dùng <i>"much bigger than"</i>, <i>"slightly cheaper than"</i> và <i>"less expensive than"</i>.',
              '<b>Bước 2:</b> Em hỏi 3 người thân hoặc bạn bè một câu, ví dụ <i>"Do you think the city is better than the village?"</i>, rồi ghi lại câu trả lời.',
              '<b>Bước 3:</b> Em viết một câu kết luận có cấu trúc <i>"The more..., the more..."</i> và đọc to cho cả nhà nghe.'
            ]
          }
        },
        {
          id: '5.5B', name: 'Bài 5.5B: Đồng ý hay phản đối',
          grammar: {
            formulas: ['👦 I like it + ➕ and so + 👧 does Mai', '🙅 I do not like it + ➖ and neither + 👧 does Mai', '🔀 Either + 🅰️ A + or + 🅱️ B • 🤝 Both + 🅰️ A + and + 🅱️ B'],
            tip: 'Đồng ý với câu khẳng định dùng SO, đồng ý với câu phủ định dùng NEITHER, và sau đó là trợ động từ rồi mới đến chủ ngữ!'
          },
          chunks: [
            { scene: '📝👍👧', full: 'I like this proposal and so does Mai', parts: [{t:'I',ico:'👦',c:'s'}, {t:'like',ico:'👍',c:'v'}, {t:'this proposal and so does Mai',ico:'📝',c:'o'}], traceWord: 'proposal' },
            { scene: '🎫💷🗺️', full: 'The ticket costs ten pounds and so does the map', parts: [{t:'The ticket',ico:'🎫',c:'s'}, {t:'costs',ico:'💵',c:'v'}, {t:'ten pounds and so does the map',ico:'💷',c:'o'}], traceWord: 'pounds' },
            { scene: '🙋⚡👦', full: 'Lan answered immediately and so did Nam', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'answered',ico:'🙋',c:'v'}, {t:'immediately and so did Nam',ico:'⚡',c:'o'}], traceWord: 'immediately' },
            { scene: '🌧️☔🚫', full: 'Suddenly it rained, and neither of us had an umbrella', parts: [{t:'Suddenly it',ico:'⚡',c:'s'}, {t:'rained,',ico:'🌧️',c:'v'}, {t:'and neither of us had an umbrella',ico:'☔',c:'o'}], traceWord: 'suddenly' },
            { scene: '👩‍🏫🏆📢', full: 'Either the teacher or the class must announce the winner', parts: [{t:'Either the teacher or the class',ico:'👩‍🏫',c:'s'}, {t:'must announce',ico:'📢',c:'v'}, {t:'the winner',ico:'🏆',c:'o'}], traceWord: 'announce' },
            { scene: '👧👦🧮🎫', full: 'Both Anna and her brother estimate the price of the ticket', parts: [{t:'Both Anna and her brother',ico:'👧👦',c:'s'}, {t:'estimate',ico:'🧮',c:'v'}, {t:'the price of the ticket',ico:'🎫',c:'o'}], traceWord: 'estimate' },
            { scene: '🧑‍🎓📚⛔', full: 'None of the students can come unless they finish the homework', parts: [{t:'None of the students',ico:'🧑‍🎓',c:'s'}, {t:'can come',ico:'🚪',c:'v'}, {t:'unless they finish the homework',ico:'📚',c:'o'}], traceWord: 'unless' },
            { scene: '🗳️👥🦅', full: 'The majority of the class voted for an independent club', parts: [{t:'The majority of the class',ico:'👥',c:'s'}, {t:'voted',ico:'🗳️',c:'v'}, {t:'for an independent club',ico:'🦅',c:'o'}], traceWord: 'majority' }
          ],
          qaList: [
            { q: 'What do you recommend for learning new words?', scene: '📚🎮👍', ans: 'I recommend a game, because it is effective', opts: [{ txt: 'I recommend a game, because it is effective', ico: '🎮' }, { txt: 'I am ten years old', ico: '🎂' }, { txt: 'It is on the table', ico: '🪑' }] },
            { q: 'What can you stick on the wall?', scene: '🧱🖼️📎', ans: 'I can stick a poster there', opts: [{ txt: 'I can stick a poster there', ico: '🖼️' }, { txt: 'She is my best friend', ico: '👭' }, { txt: 'It is very cold', ico: '🥶' }] },
            { q: 'What is the content of your poster?', scene: '🖼️📄🧱', ans: 'The main element is a big picture', opts: [{ txt: 'The main element is a big picture', ico: '🖼️' }, { txt: 'My sister is at school', ico: '🏫' }, { txt: 'It rains a lot in July', ico: '🌧️' }] },
            { q: 'Can your team beat the red team?', scene: '⚽🔴🏆', ans: 'Yes, we can beat them', opts: [{ txt: 'Yes, we can beat them', ico: '🏆' }, { txt: 'I have two cats', ico: '🐱' }, { txt: 'The soup is hot', ico: '🍲' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Tranh Luận Vui Cùng Bạn',
            steps: [
              '<b>Bước 1:</b> Em chọn một đề xuất vui, ví dụ "Cả lớp nên có thêm giờ ra chơi", rồi viết 2 lý do ủng hộ hoặc phản đối.',
              '<b>Bước 2:</b> Em đọc ý kiến cho bạn hoặc người thân nghe, ví dụ <i>"I like this idea."</i> Người nghe đáp lại bằng <i>"So do I."</i> hoặc <i>"Neither do I."</i>',
              '<b>Bước 3:</b> Em viết 2 câu mới dùng <i>"either...or"</i> và <i>"both...and"</i> về chuyện cả hai đang đồng ý hay phản đối.'
            ]
          }
        },
        {
          id: '5.5C', name: 'Bài 5.5C: Bài viết ý kiến, ôn tổng kết',
          grammar: {
            formulas: ['👦 I + ⚡ am used to + 🏙️ city life', '👦 I + 🔄 got used to + 📚 new rules', '👧 She + ⏮️ used to + 🏃 walk (ngày xưa hay làm)'],
            tip: 'Used to + động từ = ngày xưa hay làm; be / get used to + danh từ hoặc V-ing = đã quen hoặc đang dần quen!'
          },
          chunks: [
            { scene: '🏙️😫👦', full: 'I am used to the stress of a big city', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am used to',ico:'🔄',c:'v'}, {t:'the stress of a big city',ico:'😫',c:'o'}], traceWord: 'stress' },
            { scene: '👩📁🏫', full: 'She used to work in the school administration office', parts: [{t:'She',ico:'👩',c:'s'}, {t:'used to work',ico:'⏮️',c:'v'}, {t:'in the school administration office',ico:'📁',c:'o'}], traceWord: 'administration' },
            { scene: '👦🧩📏', full: 'He is not used to complex rules yet', parts: [{t:'He',ico:'👦',c:'s'}, {t:'is not used to',ico:'🚫',c:'v'}, {t:'complex rules yet',ico:'🧩',c:'o'}], traceWord: 'complex' },
            { scene: '👦🗣️👩‍🏫', full: 'I got used to talking directly with my teacher', parts: [{t:'I',ico:'👦',c:'s'}, {t:'got used to',ico:'🔄',c:'v'}, {t:'talking directly with my teacher',ico:'🎯',c:'o'}], traceWord: 'directly' },
            { scene: '🔧🚮📅', full: 'We used to remove the old equipment every Friday', parts: [{t:'We',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'used to remove',ico:'🚮',c:'v'}, {t:'the old equipment every Friday',ico:'🔧',c:'o'}], traceWord: 'equipment' },
            { scene: '👦📏💡', full: 'He used to forget the rules, but now he is aware of them', parts: [{t:'He',ico:'👦',c:'s'}, {t:'used to forget',ico:'⏮️',c:'v'}, {t:'the rules, but now he is aware of them',ico:'💡',c:'o'}], traceWord: 'aware' },
            { scene: '📝🚻👦', full: 'I am used to writing my age and sex on forms', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am used to',ico:'🔄',c:'v'}, {t:'writing my age and sex on forms',ico:'🚻',c:'o'}], traceWord: 'sex' },
            { scene: '📏🤷😟', full: 'You should get used to the rules; otherwise you will feel lost', parts: [{t:'You',ico:'👧',c:'s'}, {t:'should get used to',ico:'🔄',c:'v'}, {t:'the rules; otherwise you will feel lost',ico:'🤷',c:'o'}], traceWord: 'otherwise' }
          ],
          qaList: [
            { q: 'Is the internet connection good at your school?', scene: '🏫🔌💻', ans: 'Yes, it is good, so teachers can deliver lessons online', opts: [{ txt: 'Yes, it is good, so teachers can deliver lessons online', ico: '🔌' }, { txt: 'I have two cats', ico: '🐱' }, { txt: 'The soup is hot', ico: '🍲' }] },
            { q: 'How can you inform your teacher about a problem?', scene: '👩‍🏫📣📧', ans: 'I can inform her by email', opts: [{ txt: 'I can inform her by email', ico: '📧' }, { txt: 'It is very cold today', ico: '🥶' }, { txt: 'She is my best friend', ico: '👭' }] },
            { q: 'What is your main principle for good conduct?', scene: '📐📋😊', ans: 'My principle is to be kind to everyone', opts: [{ txt: 'My principle is to be kind to everyone', ico: '📐' }, { txt: 'It rains a lot in July', ico: '🌧️' }, { txt: 'I am ten years old', ico: '🎂' }] },
            { q: 'What is the appeal of this city?', scene: '🏙️🏖️📢', ans: 'The appeal is the clean beach', opts: [{ txt: 'The appeal is the clean beach', ico: '🏖️' }, { txt: 'My sister is at school', ico: '🏫' }, { txt: 'It is on the table', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Bài Luận Ngắn Về Thói Quen',
            steps: [
              '<b>Bước 1:</b> Em liệt kê 3 điều em từng làm nhưng nay không còn, ví dụ <i>"I used to play with toys every day."</i>',
              '<b>Bước 2:</b> Em viết thêm 2 điều em đã quen hoặc đang dần quen, ví dụ <i>"I am used to getting up early."</i> hoặc <i>"I got used to the new school."</i>',
              '<b>Bước 3:</b> Em ghép các câu thành bài luận ngắn 5 câu, ghi âm lại bằng điện thoại và nghe lại để tự sửa phát âm.'
            ]
          }
        }
      ]
    },
    '5.6': {
      lessons: [
        {
        id: '5.6A',
        name: 'Bài 5.6A: Trận đấu đã qua, giá như...',
        grammar: {
        formulas: ['🔙 If + 👦 had + 🏃 trained', '👦 would + 🏆 have + 🥇 won', '🔙 If + had V3 + ➡️ would have V3'],
        tip: 'Chuyện đã qua không sửa được nên mới "giá như": if + had + V3 ở vế đầu, would have + V3 ở vế sau, đừng dùng will nhé!'
        },
        chunks: [
        { scene: '😴🛏️😊', full: 'If I had slept earlier, I would have felt slightly better.', parts: [{t:'If I had slept earlier,',ico:'😴',c:'s'},{t:'I would have felt',ico:'💭',c:'v'},{t:'slightly better',ico:'😊',c:'o'}], traceWord: 'slightly' },
        { scene: '🧑‍🏫🦵🔍', full: 'If the coach had examined his knee, he would have rested for a week.', parts: [{t:'If the coach had examined his knee,',ico:'🔍',c:'s'},{t:'he would have',ico:'💭',c:'v'},{t:'rested for a week',ico:'🛌',c:'o'}], traceWord: 'examined' },
        { scene: '👦👀⚽', full: 'If Nam had observed the other team, he would have won the match.', parts: [{t:'If Nam had observed the other team,',ico:'👀',c:'s'},{t:'he would have won',ico:'🏆',c:'v'},{t:'the match',ico:'⚽',c:'o'}], traceWord: 'observed' },
        { scene: '📊🏃🏆', full: 'If we had made progress earlier, we would have been champions.', parts: [{t:'If we had made progress earlier,',ico:'📊',c:'s'},{t:'we would have been',ico:'💭',c:'v'},{t:'champions',ico:'🏆',c:'o'}], traceWord: 'progress' },
        { scene: '👥🧑💪', full: 'If the team had been highly responsible, they would have won easily.', parts: [{t:'If the team had been highly responsible,',ico:'🔝',c:'s'},{t:'they would have',ico:'💭',c:'v'},{t:'won easily',ico:'🥇',c:'o'}], traceWord: 'responsible' },
        { scene: '👧💬⚽🥅', full: 'If she had responded quickly, the team would have scored a goal.', parts: [{t:'If she had responded quickly,',ico:'💬',c:'s'},{t:'the team would have',ico:'👥',c:'v'},{t:'scored a goal',ico:'🥅',c:'o'}], traceWord: 'responded' },
        { scene: '👧🎯🏃👟', full: 'If Mai had intended to run, she would have brought her shoes.', parts: [{t:'If Mai had intended to run,',ico:'🎯',c:'s'},{t:'she would have brought',ico:'🎒',c:'v'},{t:'her shoes',ico:'👟',c:'o'}], traceWord: 'intended' },
        { scene: '🌊⚽💯🏆', full: 'If the game had flowed better, we would have absolutely won.', parts: [{t:'If the game had flowed better,',ico:'🌊',c:'s'},{t:'we would have',ico:'💭',c:'v'},{t:'absolutely won',ico:'💯',c:'o'}], traceWord: 'absolutely' }
        ],
        qaList: [
        { q: 'Where do you hang your coat and lay your bag?', scene: '🧥🎒🪑', ans: 'I hang my coat and lay my bag on the chair.', opts: [{txt:'I hang my coat and lay my bag on the chair.',ico:'🪑'},{txt:'I hang my coat and lay my bag in the soup.',ico:'🍲'},{txt:'I hang my coat and lay my bag on the moon.',ico:'🌙'}] },
        { q: 'Why would Tom have been sad if the club had transferred him?', scene: '👦🏟️😢', ans: 'He would have missed his old team.', opts: [{txt:'He would have missed his old team.',ico:'👥'},{txt:'He would have eaten his old team.',ico:'🍽️'},{txt:'He would have driven his old team.',ico:'🚗'}] },
        { q: 'Is a long walk an alternative to taking the bus?', scene: '🚶🚌🔀', ans: 'Yes, it is an alternative to the bus.', opts: [{txt:'Yes, it is an alternative to the bus.',ico:'🔀'},{txt:'No, a walk is a kind of soup.',ico:'🍲'},{txt:'Yes, a bus is a kind of fruit.',ico:'🍎'}] },
        { q: 'What do you talk about with a relative at a match?', scene: '👨⚽💬', ans: 'We talk about the team and the game.', opts: [{txt:'We talk about the team and the game.',ico:'⚽'},{txt:'We only talk about politics under the table.',ico:'🏛'},{txt:'We talk about soup and shoes.',ico:'🍲'}] }
        ],
        parentGame: {
        title: '🎯 Hoạt động Đời thực (12 phút): Nhật ký "Giá như..."',
        steps: [
        '<b>Bước 1:</b> Nhớ lại một trận đấu hoặc bài kiểm tra gần đây của em. Viết ra 3 điều em đã làm chưa tốt (ví dụ ngủ muộn, quên khởi động).',
        '<b>Bước 2:</b> Biến mỗi điều thành một câu điều kiện loại 3 vào vở, ví dụ <i>"If I had slept earlier, I would have felt better."</i> Kiểm tra mỗi câu có đủ <i>had + V3</i> và <i>would have + V3</i>.',
        '<b>Bước 3:</b> Đọc to 3 câu cho bạn hoặc người nhà nghe (hoặc ghi âm lại), rồi cùng chọn một việc sẽ làm khác đi vào lần sau.'
        ]
        }
        },
        {
        id: '5.6B',
        name: 'Bài 5.6B: Tiếc nuối về thói quen sống',
        grammar: {
        formulas: ['😔 I wish + 👦 I + ⏪ had stretched', '😔 If only + 👥 we + ⏪ had trained', '🔙 wish / if only + had + V3'],
        tip: 'Tiếc chuyện đã qua thì lùi một bậc thì: wish / if only + had + V3, đừng dùng was hay did cho chuyện quá khứ nhé!'
        },
        chunks: [
        { scene: '🤸🏃🤕', full: 'If only I had stretched, I would not have this pain.', parts: [{t:'If only I had stretched,',ico:'🤸',c:'s'},{t:'I would not have',ico:'💭',c:'v'},{t:'this pain',ico:'🤕',c:'o'}], traceWord: 'pain' },
        { scene: '🧑‍🏫🚨🏞️', full: 'We wish the coach had warned us about the wet surface.', parts: [{t:'We wish the coach',ico:'😔',c:'s'},{t:'had warned',ico:'🚨',c:'v'},{t:'us about the wet surface',ico:'🏞',c:'o'}], traceWord: 'surface' },
        { scene: '👧🚦👔', full: 'She wishes she had kept her status as team captain.', parts: [{t:'She wishes she',ico:'😔',c:'s'},{t:'had kept',ico:'🤲',c:'v'},{t:'her status as team captain',ico:'🚦',c:'o'}], traceWord: 'status' },
        { scene: '🏟️🚀⚽', full: 'If only the sports club had launched the program earlier.', parts: [{t:'If only the sports club',ico:'🏟️',c:'s'},{t:'had launched',ico:'🚀',c:'v'},{t:'the program earlier',ico:'📅',c:'o'}], traceWord: 'launched' },
        { scene: '👦📉❤️', full: 'I wish I had noticed the decline in my health sooner.', parts: [{t:'I wish I',ico:'😔',c:'s'},{t:'had noticed',ico:'👀',c:'v'},{t:'the decline in my health sooner',ico:'📉',c:'o'}], traceWord: 'decline' },
        { scene: '🛒📖👟', full: 'If only consumers had read the guide before buying cheap shoes.', parts: [{t:'If only consumers',ico:'🛒',c:'s'},{t:'had read',ico:'📖',c:'v'},{t:'the guide before buying cheap shoes',ico:'🧭',c:'o'}], traceWord: 'guide' },
        { scene: '🏃📆🛡️🥇', full: 'I wish I had trained every day to ensure that I won.', parts: [{t:'I wish I',ico:'😔',c:'s'},{t:'had trained',ico:'🏃',c:'v'},{t:'every day to ensure that I won',ico:'🛡',c:'o'}], traceWord: 'ensure' },
        { scene: '🧑‍🏫👥🏆', full: 'The chief coach wishes the team had lifted the cup last year.', parts: [{t:'The chief coach wishes the team',ico:'👔',c:'s'},{t:'had lifted',ico:'🏋️',c:'v'},{t:'the cup last year',ico:'🏆',c:'o'}], traceWord: 'lifted' }
        ],
        qaList: [
        { q: 'Why does Lan wish she had run a shorter distance?', scene: '👧🏃📏', ans: 'Because the long distance made her very tired.', opts: [{txt:'Because the long distance made her very tired.',ico:'😫'},{txt:'Because she wanted to eat more soup.',ico:'🍲'},{txt:'Because the cup was too small.',ico:'🏆'}] },
        { q: 'Why do you wish you had stayed away from the edge of the pool?', scene: '🏊📐💦', ans: 'Because I might fall in the water.', opts: [{txt:'Because I might fall in the water.',ico:'💦'},{txt:'Because I wanted to eat lunch.',ico:'🍱'},{txt:'Because the pool was my school.',ico:'🏫'}] },
        { q: 'If only the school had given us a grant, what could we buy?', scene: '🏫🎁⚽', ans: 'We could buy new balls and shirts.', opts: [{txt:'We could buy new balls and shirts.',ico:'⚽'},{txt:'We could buy a real moon.',ico:'🌙'},{txt:'We could buy a hundred elephants.',ico:'🐘'}] },
        { q: 'She wishes she had practiced earlier. What happened eventually?', scene: '👧🏁🎹', ans: 'Eventually, she learned to practice every day.', opts: [{txt:'Eventually, she learned to practice every day.',ico:'🏁'},{txt:'Eventually, she became a bird.',ico:'🐦'},{txt:'Eventually, she turned into rain.',ico:'🌧'}] }
        ],
        parentGame: {
        title: '🎯 Hoạt động Đời thực (12 phút): Khảo sát "Tôi ước mình đã..."',
        steps: [
        '<b>Bước 1:</b> Hỏi 3 người thân hoặc bạn bè: "Em ước mình đã làm gì khác về sức khỏe (ngủ, ăn uống, tập thể thao)?" Ghi nhanh câu trả lời của từng người.',
        '<b>Bước 2:</b> Viết lại mỗi câu trả lời thành câu tiếng Anh với <i>"I wish I had..."</i> hoặc <i>"If only I had..."</i>, nhớ dùng V3 sau <i>had</i>.',
        '<b>Bước 3:</b> Chọn câu em thích nhất, đọc to hoặc ghi âm, rồi cùng nhau hứa làm một việc tốt cho sức khỏe ngay tuần này.'
        ]
        }
        },
        {
        id: '5.6C',
        name: 'Bài 5.6C: Lời khuyên cho vận động viên',
        grammar: {
        formulas: ['👦 You + ✅ should have + 🔥 warmed', '👦 He + ❌ shouldn\'t have + 🏃 shifted', '🔙 should / shouldn\'t have + V3'],
        tip: 'Should have + V3 là "lẽ ra đã nên làm", shouldn\'t have + V3 là "lẽ ra không nên làm" – đều nói về chuyện đã xảy ra rồi!'
        },
        chunks: [
        { scene: '🔥🏃📅', full: 'You should have warmed up before the annual race.', parts: [{t:'You',ico:'👦',c:'s'},{t:'should have warmed',ico:'✅',c:'v'},{t:'up before the annual race',ico:'📅',c:'o'}], traceWord: 'annual' },
        { scene: '👥🛡️⚽', full: 'The team should have practiced defense more before the final.', parts: [{t:'The team',ico:'👥',c:'s'},{t:'should have practiced',ico:'✅',c:'v'},{t:'defense more before the final',ico:'🛡',c:'o'}], traceWord: 'defense' },
        { scene: '👦🔄🦶🤕', full: 'He shouldn\'t have shifted his weight onto his hurt ankle.', parts: [{t:'He',ico:'👦',c:'s'},{t:'shouldn\'t have shifted',ico:'❌',c:'v'},{t:'his weight onto his hurt ankle',ico:'🦶',c:'o'}], traceWord: 'shifted' },
        { scene: '🏃🚨👨‍⚕️', full: 'The athlete shouldn\'t have ignored the entire warning from the doctor.', parts: [{t:'The athlete',ico:'🏃',c:'s'},{t:'shouldn\'t have ignored',ico:'❌',c:'v'},{t:'the entire warning from the doctor',ico:'💯',c:'o'}], traceWord: 'entire' },
        { scene: '🗂️⭐🏅', full: 'We should have made a select category for the contest.', parts: [{t:'We',ico:'👥',c:'s'},{t:'should have made',ico:'⭐',c:'v'},{t:'a select category for the contest',ico:'🗂',c:'o'}], traceWord: 'select' },
        { scene: '👥⭕🏃😊', full: 'Fans surrounded the player, so he should have smiled more.', parts: [{t:'Fans surrounded the player, so he',ico:'⭕',c:'s'},{t:'should have',ico:'✅',c:'v'},{t:'smiled more',ico:'😊',c:'o'}], traceWord: 'surrounded' },
        { scene: '📣🌐⚽', full: 'The club should have advertised the match to the global audience.', parts: [{t:'The club',ico:'🏟️',c:'s'},{t:'should have advertised',ico:'📣',c:'v'},{t:'the match to the global audience',ico:'🌐',c:'o'}], traceWord: 'global' },
        { scene: '😖🙋🤝', full: 'After a long struggle, he should have asked for help.', parts: [{t:'After a long struggle, he',ico:'😖',c:'s'},{t:'should have asked',ico:'✅',c:'v'},{t:'for help',ico:'🙋',c:'o'}], traceWord: 'struggle' }
        ],
        qaList: [
        { q: 'To what extent should you train before a big match?', scene: '📏🏃⚽', ans: 'You should train hard, but also rest.', opts: [{txt:'You should train hard, but also rest.',ico:'🛌'},{txt:'You should never train or rest.',ico:'🚫'},{txt:'You should only train at midnight.',ico:'🌙'}] },
        { q: 'In reality, should an artist play sports too?', scene: '🎨🌎🏃', ans: 'Yes, an artist should stay healthy and active.', opts: [{txt:'Yes, an artist should stay healthy and active.',ico:'🎨'},{txt:'No, an artist should never walk.',ico:'🚫'},{txt:'No, an artist should sit all day.',ico:'🪑'}] },
        { q: 'Two players had a conflict. What should they have done?', scene: '⚡👦👦🤝', ans: 'They should have talked and said sorry.', opts: [{txt:'They should have talked and said sorry.',ico:'🤝'},{txt:'They should have fought more.',ico:'👊'},{txt:'They should have shouted louder.',ico:'📢'}] },
        { q: 'Why was the presence of fans important at the game?', scene: '🧍👥🏟️', ans: 'Their cheering gave the players more power.', opts: [{txt:'Their cheering gave the players more power.',ico:'📣'},{txt:'Their nuclear power cooked the grass.',ico:'☢'},{txt:'Their shoes ran the whole game.',ico:'👟'}] }
        ],
        parentGame: {
        title: '🎯 Hoạt động Đời thực (12 phút): Thư khuyên vận động viên',
        steps: [
        '<b>Bước 1:</b> Xem một trận đấu hoặc video thể thao ngắn (khoảng 3 phút) cùng bạn hoặc người nhà. Ghi lại 2 điều vận động viên làm chưa tốt và 1 điều làm rất tốt.',
        '<b>Bước 2:</b> Viết một bức thư ngắn gồm 3 lời khuyên bằng <i>"You should have..."</i> hoặc <i>"You shouldn\'t have..."</i>, ví dụ <i>"You should have warmed up."</i> Nhớ dùng V3.',
        '<b>Bước 3:</b> Đọc to hoặc ghi âm bức thư, rồi hỏi người nghe xem lời khuyên nào hữu ích nhất và vì sao.'
        ]
        }
        }
      ]
    },
    '5.7': {
      lessons: [
        {
          id: '5.7A', name: 'Bài 5.7A: Món ăn bị cháy, vì sao',
          grammar: {
            formulas: ['👨‍🍳 The cook + ⚡ may have + 🔥 burned the soup', '👩 Mom + ⚡ might have + 📋 missed a step', '👨 Dad + ⚡ could have + ✅ confirmed it'],
            tip: 'may / might / could + have + V3 = "có lẽ đã…" — sau have luôn dùng V3 (burned, thrown, come)!'
          },
          chunks: [
            { scene: '👨‍🍳🔥🍲', full: 'The cook may have burned the soup during the introduction', parts: [{t:'The cook',ico:'👨‍🍳',c:'s'}, {t:'may have',ico:'⚡',c:'v'}, {t:'burned the soup during the introduction',ico:'🍲',c:'o'}], traceWord: 'introduction' },
            { scene: '👩📋📖', full: 'Mom might have missed one requirement in the book', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'might have',ico:'⚡',c:'v'}, {t:'missed one requirement in the book',ico:'📋',c:'o'}], traceWord: 'requirement' },
            { scene: '👨⏰✅', full: 'Dad could have confirmed the oven time with Mom', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'could have',ico:'⚡',c:'v'}, {t:'confirmed the oven time with Mom',ico:'✅',c:'o'}], traceWord: 'confirmed' },
            { scene: '🧑🗑🍂', full: 'Someone may have thrown the refuse in the bin', parts: [{t:'Someone',ico:'🧑',c:'s'}, {t:'may have',ico:'⚡',c:'v'}, {t:'thrown the refuse in the bin',ico:'🗑',c:'o'}], traceWord: 'refuse' },
            { scene: '🍎🍓🚌', full: 'The fresh fruit might have come late by public transport', parts: [{t:'The fresh fruit',ico:'🍎',c:'s'}, {t:'might have',ico:'⚡',c:'v'}, {t:'come late by public transport',ico:'🚚',c:'o'}], traceWord: 'transport' },
            { scene: '👃💨🔥', full: 'A strange smell may have emerged from the old oven', parts: [{t:'A strange smell',ico:'👃',c:'s'}, {t:'may have',ico:'⚡',c:'v'}, {t:'emerged from the old oven',ico:'🌅',c:'o'}], traceWord: 'emerged' },
            { scene: '👧💡🍽', full: 'Mai could have changed the whole concept of the dinner', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'could have',ico:'⚡',c:'v'}, {t:'changed the whole concept of the dinner',ico:'💡',c:'o'}], traceWord: 'concept' },
            { scene: '👦🛠🍳', full: 'Tom might have tried a new cooking technique at home', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'might have',ico:'⚡',c:'v'}, {t:'tried a new cooking technique at home',ico:'🛠',c:'o'}], traceWord: 'technique' }
          ],
          qaList: [
            { q: 'Why did the cake from the shop taste so bad?', scene: '🍰🏭😖', ans: 'It could have come from mass production in a factory', opts: [{ txt: 'It could have come from mass production in a factory', ico: '🏭' }, { txt: 'She walks to the library every Sunday afternoon', ico: '📚' }, { txt: 'The dog is sleeping under the big table', ico: '🐶' }] },
            { q: 'How might the class have helped to reduce waste?', scene: '🧑‍🤝‍🧑🗑🍎', ans: 'Everyone may have contributed some food to the party', opts: [{ txt: 'Everyone may have contributed some food to the party', ico: '🤲' }, { txt: 'The teacher is reading a book about animals', ico: '📖' }, { txt: 'My brother plays football on Saturday morning', ico: '⚽' }] },
            { q: 'What improvement could the cook have made to the soup?', scene: '👨‍🍳🍲📈', ans: 'She could have combined butter and onion in the pan', opts: [{ txt: 'She could have combined butter and onion in the pan', ico: '🔀' }, { txt: 'They are waiting for the bus at the station', ico: '🚌' }, { txt: 'Our school opens at seven in the morning', ico: '🏫' }] },
            { q: 'Why did they change the menu for the marriage dinner?', scene: '💍🍽📋', ans: 'They might have adopted a simpler plan after the failure', opts: [{ txt: 'They might have adopted a simpler plan after the failure', ico: '🤝' }, { txt: 'He goes swimming in the lake every summer', ico: '🏊' }, { txt: 'The children are drawing pictures of big trees', ico: '🌳' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám tử bữa ăn cháy',
            steps: [
              '<b>Bước 1:</b> Nhờ người nhà (hoặc bạn) đặt trên bàn 3 vật "manh mối" trong bếp, ví dụ một cái nồi, một chiếc thìa, một tờ giấy ghi giờ. Em quan sát 1 phút.',
              '<b>Bước 2:</b> Em viết 4 câu đoán nguyên nhân món ăn bị hỏng, dùng <i>"Someone may have..."</i>, <i>"Mom might have..."</i>, <i>"Dad could have..."</i> + V3. Nhớ sau have phải là V3.',
              '<b>Bước 3:</b> Em đọc to hoặc ghi âm các câu đoán. Người nhà chọn câu hay nhất và nói thêm một khả năng khác bằng <i>"It could have..."</i>.'
            ]
          }
        },
        {
          id: '5.7B', name: 'Bài 5.7B: Bí ẩn trong căn bếp',
          grammar: {
            formulas: ['🕵 Someone + ⚡ must have + 🍰 eaten the cake', '👨 Dad + ⚡ can\'t have + 🚪 forgotten it', '👩 Mom + ⚡ must have + 🗓 arranged it'],
            tip: 'must have + V3 = chắc chắn đã làm; can\'t have + V3 = chắc chắn KHÔNG thể đã làm — cả hai đều theo sau bởi V3!'
          },
          chunks: [
            { scene: '👨‍🍳🍰🟰', full: 'The cook must have cut the cake into equal pieces', parts: [{t:'The cook',ico:'👨‍🍳',c:'s'}, {t:'must have',ico:'⚡',c:'v'}, {t:'cut the cake into equal pieces',ico:'🟰',c:'o'}], traceWord: 'equal' },
            { scene: '👨🎖🍳', full: 'Dad can\'t have forgotten his duty in the kitchen', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'can\'t have',ico:'🚫',c:'v'}, {t:'forgotten his duty in the kitchen',ico:'🎖',c:'o'}], traceWord: 'duty' },
            { scene: '👩🍽🗓', full: 'Mom must have arranged the table before the guests came', parts: [{t:'Mom',ico:'👩',c:'s'}, {t:'must have',ico:'⚡',c:'v'}, {t:'arranged the table before the guests came',ico:'🗓',c:'o'}], traceWord: 'arranged' },
            { scene: '👧🔌🔥', full: 'She can\'t have connected the cooker to the gas', parts: [{t:'She',ico:'👧',c:'s'}, {t:'can\'t have',ico:'🚫',c:'v'}, {t:'connected the cooker to the gas',ico:'🔌',c:'o'}], traceWord: 'connected' },
            { scene: '👩🏮🍜', full: 'Lan must have joined a cultural cooking class last year', parts: [{t:'Lan',ico:'👩',c:'s'}, {t:'must have',ico:'⚡',c:'v'}, {t:'joined a cultural cooking class last year',ico:'🏮',c:'o'}], traceWord: 'cultural' },
            { scene: '👨‍🍳⏱🚨', full: 'The chef must have given a brief talk about a critical problem', parts: [{t:'The chef',ico:'👨‍🍳',c:'s'}, {t:'must have',ico:'⚡',c:'v'}, {t:'given a brief talk about a critical problem',ico:'⏱',c:'o'}], traceWord: 'brief' },
            { scene: '👦🧪🔧', full: 'Nam can\'t have demonstrated the new cooking tool without help', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'can\'t have',ico:'🚫',c:'v'}, {t:'demonstrated the new cooking tool without help',ico:'🧪',c:'o'}], traceWord: 'demonstrated' },
            { scene: '👦💫🍰', full: 'Tom must have had a strong desire to eat the cake', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'must have',ico:'⚡',c:'v'}, {t:'had a strong desire to eat the cake',ico:'💫',c:'o'}], traceWord: 'desire' }
          ],
          qaList: [
            { q: 'Where did the good cake come from this morning?', scene: '🍰🏬🌅', ans: 'It must have come from a commercial kitchen', opts: [{ txt: 'It must have come from a commercial kitchen', ico: '🏬' }, { txt: 'My sister is learning to play the piano', ico: '🎹' }, { txt: 'The bus to the airport leaves at noon', ico: '🚌' }] },
            { q: 'Who left the cup on the table?', scene: '☕🔤👦', ans: 'It must have been Tom because his initial is T', opts: [{ txt: 'It must have been Tom because his initial is T', ico: '🔤' }, { txt: 'The weather is sunny and warm today', ico: '☀' }, { txt: 'I want to buy a new red bag', ico: '👜' }] },
            { q: 'Who paid for the free lunch at work?', scene: '🍱🤝💼', ans: 'The union must have made a big contribution', opts: [{ txt: 'The union must have made a big contribution', ico: '🤲' }, { txt: 'The boys are running in the park now', ico: '🏃' }, { txt: 'Grandma is making tea in the garden', ico: '🍵' }] },
            { q: 'Why is this healthy food trend so popular?', scene: '🥗📈👨‍👩‍👧', ans: 'Fresh food must have become essential for many families', opts: [{ txt: 'Fresh food must have become essential for many families', ico: '🔑' }, { txt: 'My brother is washing his bike outside', ico: '🚲' }, { txt: 'The film starts at eight tonight', ico: '🎬' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phá án căn bếp bí ẩn',
            steps: [
              '<b>Bước 1:</b> Em tự dựng một "hiện trường" nhỏ trong bếp: một đĩa bánh mất một miếng, một cái cốc có chữ cái đầu tên, một chiếc ghế bị kéo ra. Chụp ảnh hoặc vẽ nhanh.',
              '<b>Bước 2:</b> Em viết 5 suy đoán chắc chắn: 3 câu <i>"Someone must have..."</i> và 2 câu <i>"It can\'t have been..."</i> + V3 để loại trừ người không thể làm.',
              '<b>Bước 3:</b> Em đọc suy đoán cho bạn hoặc người nhà nghe. Họ cho biết kết quả thật và em ghi lại câu nào đoán đúng, câu nào sai.'
            ]
          }
        },
        {
          id: '5.7C', name: 'Bài 5.7C: Chuẩn bị bữa tiệc xong xuôi',
          grammar: {
            formulas: ['👩 Mom + ⚡ had been + 🍳 cooking', '👦 We + ⚡ had been + 📏 measuring the table', '🛍 The shop + ⚡ had been + 📣 promoting a package'],
            tip: 'had been + V-ing = đã đang làm gì (kéo dài) trước một mốc trong quá khứ — luôn có "been" và đuôi -ing!'
          },
          chunks: [
            { scene: '👧📏🍽', full: 'Lan had been measuring the length of the party table', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'measuring the length of the party table',ico:'📏',c:'o'}], traceWord: 'length' },
            { scene: '🛍📣📦', full: 'The shop had been promoting a party package since Monday', parts: [{t:'The shop',ico:'🛍',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'promoting a party package since Monday',ico:'📦',c:'o'}], traceWord: 'promoting' },
            { scene: '📋🧲🎉', full: 'The new menu had been attracting many guests since last week', parts: [{t:'The new menu',ico:'📋',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'attracting many guests since last week',ico:'🧲',c:'o'}], traceWord: 'attracting' },
            { scene: '🎤🙋🎶', full: 'The singer had been engaging the crowd with funny songs', parts: [{t:'The singer',ico:'🎤',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'engaging the crowd with funny songs',ico:'🙋',c:'o'}], traceWord: 'engaging' },
            { scene: '👨💸🚨', full: 'Dad had been talking about the money crisis before dinner', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'talking about the money crisis before dinner',ico:'🚨',c:'o'}], traceWord: 'crisis' },
            { scene: '👨‍👩‍👧🧾🤝', full: 'The family had been settling the bill after the dinner', parts: [{t:'The family',ico:'👨‍👩‍👧',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'settling the bill after the dinner',ico:'🤝',c:'o'}], traceWord: 'settling' },
            { scene: '👧🦺🔥', full: 'Mai had been checking the safety of the cooker all day', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'checking the safety of the cooker all day',ico:'🦺',c:'o'}], traceWord: 'safety' },
            { scene: '☕📈🍰', full: 'The cafe had been expanding its menu since it opened', parts: [{t:'The cafe',ico:'☕',c:'s'}, {t:'had been',ico:'⚡',c:'v'}, {t:'expanding its menu since it opened',ico:'📈',c:'o'}], traceWord: 'expanding' }
          ],
          qaList: [
            { q: 'What is the museum currently showing to the visitors?', scene: '🏛⏰👀', ans: 'It is showing an old weapon from the war', opts: [{ txt: 'It is showing an old weapon from the war', ico: '🏛' }, { txt: 'The visitors are eating lunch on the grass', ico: '🥪' }, { txt: 'A little bird is singing in the tree', ico: '🐦' }] },
            { q: 'Why did the police start an investigation?', scene: '👮🔎🍰', ans: 'It was obvious that someone had been stealing food', opts: [{ txt: 'It was obvious that someone had been stealing food', ico: '🔎' }, { txt: 'They wanted to buy a new blue car', ico: '🚗' }, { txt: 'The weather was cold and rainy yesterday', ico: '🌧' }] },
            { q: 'Why had the students been cooking so hard?', scene: '🧑‍🎓🍳🤞', ans: 'They had committed to cook for the whole class', opts: [{ txt: 'They had committed to cook for the whole class', ico: '🤞' }, { txt: 'They had been sleeping under a big tree', ico: '😴' }, { txt: 'They had been watching a film about space', ico: '🚀' }] },
            { q: 'What had the nurse been giving the guests all day?', scene: '👩‍⚕️🆘🎉', ans: 'She had been giving first aid to the guests', opts: [{ txt: 'She had been giving first aid to the guests', ico: '🆘' }, { txt: 'She had been paying for the family insurance', ico: '☂' }, { txt: 'She had been reading a story to the baby', ico: '👶' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký chuẩn bị bữa tiệc',
            steps: [
              '<b>Bước 1:</b> Em chọn một bữa tiệc hoặc bữa cơm gia đình sắp tới. Hỏi người nhà xem mỗi người đã làm gì từ sáng đến lúc khách đến (nấu ăn, dọn bàn, mua đồ...).',
              '<b>Bước 2:</b> Em viết 5 câu nhật ký, mỗi câu dùng <i>"had been"</i> + V-ing, ví dụ <i>"Mom had been cooking for two hours."</i>, và thêm mốc thời gian như since Monday hoặc before dinner.',
              '<b>Bước 3:</b> Em ghi âm giọng đọc các câu nhật ký bằng điện thoại, nghe lại một lần và sửa các câu thiếu "been" hoặc quên đuôi -ing.'
            ]
          }
        }
      ]
    },
    '5.8': {
      lessons: [
        {
          id: '5.8A', name: 'Bài 5.8A: Cửa hàng quần áo và khách hàng',
          grammar: {
            formulas: ['👤 Each / Every + 🏪 danh từ số ít + ⚡ động từ thêm -s', '👪 All + 🛍 danh từ số nhiều + ⚡ động từ số nhiều', '🏬 The whole + 🏪 danh từ số ít = 💯 cả một cái trọn vẹn'],
            tip: 'Each / Every đi với từng món một (động từ thêm -s), All đi với cả nhóm, còn whole là cả một cái trọn vẹn!'
          },
          chunks: [
            { scene: '🌆🏪👕', full: 'Every district has a relatively cheap clothes store', parts: [{t:'Every district',ico:'🌆',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a relatively cheap clothes store',ico:'🏪',c:'o'}], traceWord: 'district' },
            { scene: '🙋👕👗', full: 'Each customer wants a broad choice of shirts', parts: [{t:'Each customer',ico:'🙋',c:'s'}, {t:'wants',ico:'💭',c:'v'}, {t:'a broad choice of shirts',ico:'👕',c:'o'}], traceWord: 'broad' },
            { scene: '🙏🎉👘', full: 'Each religious festival brings new clothes and a happy spirit', parts: [{t:'Each religious festival',ico:'🙏',c:'s'}, {t:'brings',ico:'🎁',c:'v'}, {t:'new clothes and a happy spirit',ico:'👘',c:'o'}], traceWord: 'religious' },
            { scene: '🏬🥊🏷', full: 'The whole shop feels like a battle on sale day', parts: [{t:'The whole shop',ico:'🏬',c:'s'}, {t:'feels',ico:'😮',c:'v'}, {t:'like a battle on sale day',ico:'🥊',c:'o'}], traceWord: 'battle' },
            { scene: '🏪🌳🛍', full: 'Each store runs an environmental experiment with paper bags', parts: [{t:'Each store',ico:'🏪',c:'s'}, {t:'runs',ico:'🏃',c:'v'}, {t:'an environmental experiment with paper bags',ico:'🧪',c:'o'}], traceWord: 'experiment' },
            { scene: '🙋🤔🧥', full: 'Every buyer gives careful consideration to the price of each coat', parts: [{t:'Every buyer',ico:'🙋',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'careful consideration to the price of each coat',ico:'🤔',c:'o'}], traceWord: 'consideration' },
            { scene: '💸👛❗', full: 'All this spending is a threat to the whole budget', parts: [{t:'All this spending',ico:'💸',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'a threat to the whole budget',ico:'❗',c:'o'}], traceWord: 'threat' },
            { scene: '💳🔓💰', full: 'We conclude that this card can enable all buyers to save money', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'conclude',ico:'🏁',c:'v'}, {t:'that this card can enable all buyers to save money',ico:'💳',c:'o'}], traceWord: 'enable' }
          ],
          qaList: [
            { q: 'What does the store sell to active people?', scene: '🏃👟🏪', ans: 'It sells sport shoes for every active person', opts: [{ txt: 'It sells sport shoes for every active person', ico: '👟' }, { txt: 'It sells hot soup and rice', ico: '🍲' }, { txt: 'It sells books for the whole school', ico: '📚' }] },
            { q: 'How do prices vary in this city?', scene: '🌆🏷📊', ans: 'Prices vary from shop to shop', opts: [{ txt: 'Prices vary from shop to shop', ico: '📊' }, { txt: 'The bus is late today', ico: '🚌' }, { txt: 'All the cats are asleep', ico: '😴' }] },
            { q: 'What can a good ad do for the store?', scene: '📢🏪🗣', ans: 'It can convince each customer to buy more', opts: [{ txt: 'It can convince each customer to buy more', ico: '🗣' }, { txt: 'It can wash all the dishes', ico: '🍽' }, { txt: 'It can fly to the moon', ico: '🌙' }] },
            { q: 'Why do all the fans wear pink today?', scene: '👚🎀🩺', ans: 'They wear pink to help people with cancer', opts: [{ txt: 'They wear pink to help people with cancer', ico: '🎀' }, { txt: 'They want a new pet cat', ico: '🐱' }, { txt: 'They have a test at school', ico: '📝' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Khảo Sát Cửa Hàng Quần Áo',
            steps: [
              '<b>Bước 1:</b> Lấy 5 món quần áo trong tủ, đặt lên bàn như một cửa hàng nhỏ và gắn giá giấy cho từng món.',
              '<b>Bước 2:</b> Hỏi 3 bạn hoặc người nhà món nào họ thích nhất, rồi ghi lại bằng câu như <i>"Each customer wants a cheap shirt."</i> hoặc <i>"All of them like the blue coat."</i>.',
              '<b>Bước 3:</b> Viết 3 câu kết luận có Each, Every hoặc All về kết quả khảo sát và đọc to cho cả nhà nghe.'
            ]
          }
        },
        {
          id: '5.8B', name: 'Bài 5.8B: Chọn giữa hai món đồ',
          grammar: {
            formulas: ['✌️ Both of + 👕 these / them + ⚡ are', '🚫 Neither of + 👕 these / them + ⚡ has / is', '🤷 Either of + 👕 them + ⚡ is OK • 💯 All of / 🚫 None of + 🛍 the + danh từ'],
            tip: 'Both là cả hai, Neither là không cái nào trong hai, còn All of / None of dùng khi có từ ba món trở lên!'
          },
          chunks: [
            { scene: '🧥🧥✨', full: 'Both of these coats are totally new', parts: [{t:'Both of these coats',ico:'🧥',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'totally new',ico:'💯',c:'o'}], traceWord: 'totally' },
            { scene: '🏪📍🚧', full: 'Neither of these shops has a good location near the construction site', parts: [{t:'Neither of these shops',ico:'🏪',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a good location near the construction site',ico:'📍',c:'o'}], traceWord: 'location' },
            { scene: '💻💻🪑', full: 'Either of the two monitors fits on my small desk', parts: [{t:'Either of the two monitors',ico:'💻',c:'s'}, {t:'fits',ico:'✅',c:'v'}, {t:'on my small desk',ico:'🪑',c:'o'}], traceWord: 'monitors' },
            { scene: '🚗🚲🏷', full: 'All of the toy vehicles are on sale today', parts: [{t:'All of the toy vehicles',ico:'🚗',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'on sale today',ico:'🏷',c:'o'}], traceWord: 'vehicles' },
            { scene: '👨‍👩‍👧💰🎯', full: 'None of us can invest money without a clear objective', parts: [{t:'None of us',ico:'👨‍👩‍👧',c:'s'}, {t:'can invest',ico:'💰',c:'v'}, {t:'money without a clear objective',ico:'🎯',c:'o'}], traceWord: 'objective' },
            { scene: '👭🛗⏩', full: 'Both of them proceed onto the escalator to the second floor', parts: [{t:'Both of them',ico:'👭',c:'s'}, {t:'proceed',ico:'⏩',c:'v'}, {t:'onto the escalator to the second floor',ico:'🔝',c:'o'}], traceWord: 'proceed' },
            { scene: '🏦🏯🏗', full: 'Neither of the banks will finance this historical building', parts: [{t:'Neither of the banks',ico:'🏦',c:'s'}, {t:'will finance',ico:'💵',c:'v'}, {t:'this historical building',ico:'🏯',c:'o'}], traceWord: 'finance' },
            { scene: '👫🧠🧥', full: 'Neither of us can recall the price of this jacket', parts: [{t:'Neither of us',ico:'👫',c:'s'}, {t:'can recall',ico:'🧠',c:'v'}, {t:'the price of this jacket',ico:'🧥',c:'o'}], traceWord: 'recall' }
          ],
          qaList: [
            { q: 'Why do you want this speaker?', scene: '🔊💸👍', ans: 'It is cheap and moreover it has good volume', opts: [{ txt: 'It is cheap and moreover it has good volume', ico: '🔊' }, { txt: 'I like to swim at the beach', ico: '🏖' }, { txt: 'My uncle has a red car', ico: '🚗' }] },
            { q: 'How do you go to the shop?', scene: '🚲🏪🌤', ans: 'I cycle to the shop with my brother', opts: [{ txt: 'I cycle to the shop with my brother', ico: '🚲' }, { txt: 'It is a very big shop', ico: '🏬' }, { txt: 'I have two blue pens', ico: '🖊' }] },
            { q: 'Do both of the shirts have a pocket?', scene: '👕👕❓', ans: 'Neither of them has a pocket', opts: [{ txt: 'Neither of them has a pocket', ico: '🚫' }, { txt: 'Both of them have a big pocket', ico: '👖' }, { txt: 'It is five o\'clock now', ico: '🕔' }] },
            { q: 'Do you want the red scarf or the blue scarf?', scene: '🧣🔴🔵', ans: 'Either of them is fine for me', opts: [{ txt: 'Either of them is fine for me', ico: '🧣' }, { txt: 'Yes I live in a flat', ico: '🏢' }, { txt: 'My brother is at school', ico: '🏫' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Chọn Một Trong Hai',
            steps: [
              '<b>Bước 1:</b> Chọn 2 món đồ trong nhà (hai chiếc áo, hai cái bút...) và 3 món khác để so sánh. Ghi giá tưởng tượng lên giấy nhớ cho từng món.',
              '<b>Bước 2:</b> Nói thành tiếng vài câu như <i>"Both of them are nice."</i>, <i>"Neither of them is cheap."</i> hoặc <i>"None of the pens is red."</i>.',
              '<b>Bước 3:</b> Ghi âm 3 câu mô tả em chọn món nào và vì sao, rồi nghe lại và chép vào vở.'
            ]
          }
        },
        {
          id: '5.8C', name: 'Bài 5.8C: Ví tiền và ngân sách',
          grammar: {
            formulas: ['🛍 a few / several + 👕 danh từ đếm được số nhiều', '💰 a little / a great deal of + 🪙 danh từ không đếm được', '😟 few / little / hardly any + 💸 gần như không còn'],
            tip: 'Có chữ "a" thì còn đủ dùng (a few, a little), bỏ chữ "a" thì gần như hết sạch (few, little)!'
          },
          chunks: [
            { scene: '👦💰🛁💣', full: 'I have a little money for a bath bomb', parts: [{t:'I',ico:'👦',c:'s'}, {t:'have',ico:'🤲',c:'v'}, {t:'a little money for a bath bomb',ico:'💣',c:'o'}], traceWord: 'bomb' },
            { scene: '👫🧃👅', full: 'A few of my friends like the taste of this juice', parts: [{t:'A few of my friends',ico:'👫',c:'s'}, {t:'like',ico:'❤️',c:'v'}, {t:'the taste of this juice',ico:'👅',c:'o'}], traceWord: 'taste' },
            { scene: '🙋🏷📉', full: 'Few customers can see a decrease in the price', parts: [{t:'Few customers',ico:'🙋',c:'s'}, {t:'can see',ico:'👀',c:'v'}, {t:'a decrease in the price',ico:'📉',c:'o'}], traceWord: 'decrease' },
            { scene: '🏢🪖🏪', full: 'A few council members and army officers shop at the local market', parts: [{t:'A few council members and army officers',ico:'🏢',c:'s'}, {t:'shop',ico:'🛒',c:'v'}, {t:'at the local market',ico:'🏪',c:'o'}], traceWord: 'council' },
            { scene: '👨‍👩‍👧📆🎁', full: 'We normally spend a great deal of money on gifts', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'normally spend',ico:'📆',c:'v'}, {t:'a great deal of money on gifts',ico:'🎁',c:'o'}], traceWord: 'normally' },
            { scene: '🌐🏪🚚⚡', full: 'Several online stores generate a lot of money from delivery', parts: [{t:'Several online stores',ico:'🌐',c:'s'}, {t:'generate',ico:'⚡',c:'v'}, {t:'a lot of money from delivery',ico:'🚚',c:'o'}], traceWord: 'delivery' },
            { scene: '👟💲🙅', full: 'Few people deny that the shoes are cheap', parts: [{t:'Few people',ico:'👥',c:'s'}, {t:'deny',ico:'🙅',c:'v'}, {t:'that the shoes are cheap',ico:'👟',c:'o'}], traceWord: 'deny' },
            { scene: '🏪📍🏛️', full: 'A few shops are located near the civil court', parts: [{t:'A few shops',ico:'🏪',c:'s'}, {t:'are located',ico:'📍',c:'v'}, {t:'near the civil court',ico:'🏛️',c:'o'}], traceWord: 'located' }
          ],
          qaList: [
            { q: 'Is there much violence in this cartoon?', scene: '📺🎬🙂', ans: 'There is hardly any violence in it', opts: [{ txt: 'There is hardly any violence in it', ico: '📺' }, { txt: 'There is a lot of rain', ico: '🌧' }, { txt: 'It is on channel five', ico: '5️⃣' }] },
            { q: 'What arrangement do you have for the special occasion?', scene: '🎉🎁🎂', ans: 'A few gifts and a little cake', opts: [{ txt: 'A few gifts and a little cake', ico: '🎁' }, { txt: 'A great deal of homework', ico: '📚' }, { txt: 'Several red buses', ico: '🚌' }] },
            { q: 'Why do few people ignore the price?', scene: '👛🏷🤔', ans: 'Because they have little money', opts: [{ txt: 'Because they have little money', ico: '👛' }, { txt: 'Because the sun is yellow', ico: '🌞' }, { txt: 'Because they love homework', ico: '📝' }] },
            { q: 'What is your belief about saving money?', scene: '🐷💰🙏', ans: 'A little saving is better than nothing', opts: [{ txt: 'A little saving is better than nothing', ico: '🐷' }, { txt: 'My bag has a hole', ico: '👜' }, { txt: 'Few cats can read', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Lập Ngân Sách Tuần',
            steps: [
              '<b>Bước 1:</b> Vẽ một cái ví lên giấy và ghi số tiền tiêu vặt trong tuần, rồi liệt kê 4 thứ em muốn mua cùng giá tiền.',
              '<b>Bước 2:</b> Viết 4 câu mô tả ngân sách, ví dụ <i>"I have a little money."</i>, <i>"Few things are cheap."</i> hoặc <i>"I want to buy several gifts."</i>.',
              '<b>Bước 3:</b> Hỏi một bạn hoặc người nhà <i>"How much money do you have?"</i> rồi ghi câu trả lời bằng a few, a little hoặc hardly any.'
            ]
          }
        }
      ]
    },
    '5.9': {
      lessons: [
        {
          id: '5.9A', name: 'Bài 5.9A: Cảnh sát và tai nạn giao thông',
          grammar: {
            formulas: ['⚡ Was + 🏗️ the bridge + 🔨 built...?', '👦 He + ⚡ was given + 🎫 a ticket', '📢 The ad + ⚡ was filmed + 🎬 in a studio'],
            tip: 'Câu hỏi bị động: đưa "Was/Were" lên đầu • Cho ai cái gì: người nhận đứng trước "was given", vật đứng sau!'
          },
          chunks: [
            { scene: '🚓🏢🗺️', full: 'Was the police station built near the border', parts: [{t:'Was',ico:'❓',c:'v'}, {t:'the police station',ico:'🚓',c:'s'}, {t:'built near the border',ico:'🗺️',c:'o'}], traceWord: 'border' },
            { scene: '🕵️🚓🔒', full: 'Was the suspect taken to prison by the police', parts: [{t:'Was',ico:'❓',c:'v'}, {t:'the suspect',ico:'🔍',c:'s'}, {t:'taken to prison by the police',ico:'🔒',c:'o'}], traceWord: 'prison' },
            { scene: '🚗👮🎫', full: 'The young driver was given a ticket near the school', parts: [{t:'The young driver',ico:'🚗',c:'s'}, {t:'was given',ico:'🎁',c:'v'}, {t:'a ticket near the school',ico:'🎫',c:'o'}], traceWord: 'given' },
            { scene: '🔌🏭❓', full: 'Was the new switch made in an industrial factory', parts: [{t:'Was',ico:'❓',c:'v'}, {t:'the new switch',ico:'🔌',c:'s'}, {t:'made in an industrial factory',ico:'🏭',c:'o'}], traceWord: 'industrial' },
            { scene: '📢🎬🎥', full: 'The ad was filmed in a big studio last week', parts: [{t:'The ad',ico:'📢',c:'s'}, {t:'was filmed',ico:'🎥',c:'v'}, {t:'in a big studio last week',ico:'🎬',c:'o'}], traceWord: 'studio' },
            { scene: '👔🙌📅', full: 'A representative was asked to participate in the meeting', parts: [{t:'A representative',ico:'👔',c:'s'}, {t:'was asked',ico:'🗣️',c:'v'}, {t:'to participate in the meeting',ico:'🙌',c:'o'}], traceWord: 'participate' },
            { scene: '📦🏟️📜', full: 'Was the capacity of the stadium changed by a new regulation', parts: [{t:'Was',ico:'❓',c:'v'}, {t:'the capacity of the stadium',ico:'📦',c:'s'}, {t:'changed by a new regulation',ico:'📜',c:'o'}], traceWord: 'regulation' },
            { scene: '🏃‍♀️🧴☀️', full: 'The runner was given a cream for her dry skin', parts: [{t:'The runner',ico:'🏃‍♀️',c:'s'}, {t:'was given',ico:'🎁',c:'v'}, {t:'a cream for her dry skin',ico:'🧴',c:'o'}], traceWord: 'skin' }
          ],
          qaList: [
            { q: 'Why can\'t the family buy the new car?', scene: '👨‍👩‍👧🚗💸', ans: 'They can\'t afford it because it is too expensive', opts: [{ txt: 'They can\'t afford it because it is too expensive', ico: '💸' }, { txt: 'They can afford it because it is very cheap', ico: '🛒' }, { txt: 'They can\'t buy it because the sky is green', ico: '🟩' }] },
            { q: 'How was the shy boy helped by his teacher?', scene: '👦👩‍🏫💪', ans: 'He was given confidence by his kind teacher', opts: [{ txt: 'He was given confidence by his kind teacher', ico: '💪' }, { txt: 'He was given a ticket by the police officer', ico: '🎫' }, { txt: 'He was taken to prison by the driver', ico: '🔒' }] },
            { q: 'How did the young engineer acquire his new skills?', scene: '👷📚🌙', ans: 'He acquired them by studying hard every night', opts: [{ txt: 'He acquired them by studying hard every night', ico: '📥' }, { txt: 'He acquired them by sleeping all day long', ico: '😴' }, { txt: 'He acquired them from a tall green tree', ico: '🌳' }] },
            { q: 'What happened near the border yesterday?', scene: '🚌💥🚓', ans: 'A bus accident was reported by the police', opts: [{ txt: 'A bus accident was reported by the police', ico: '🚌' }, { txt: 'A new studio was given to the dog', ico: '🐶' }, { txt: 'The ad was eaten by a hungry cat', ico: '🐱' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Bản Tin Tai Nạn Giao Thông',
            steps: [
              '<b>Bước 1:</b> Em vẽ nhanh một tai nạn nhỏ trên đường (xe buýt, xe đạp, đèn tín hiệu) trên giấy rồi ghi tên 3 nhân vật: tài xế, nghi phạm, cảnh sát.',
              '<b>Bước 2:</b> Em viết 3 câu bị động về bức vẽ, ví dụ <i>"The driver was given a ticket."</i> và <i>"Was the suspect taken to prison?"</i>.',
              '<b>Bước 3:</b> Em đọc to bản tin như phóng viên truyền hình, bạn hoặc người nhà hỏi lại bằng câu hỏi <i>"Was ...?"</i> để em trả lời.'
            ]
          }
        },
        {
          id: '5.9B', name: 'Bài 5.9B: Tin đồn và tin tức đô thị',
          grammar: {
            formulas: ['🗣️ It + ⚡ is said + 📰 that + câu', '👦 He + ⚡ is believed + ➡️ to + động từ', '📰 The mayor + ⚡ is said + ➡️ to hire...'],
            tip: 'Tin đồn có hai kiểu: "It is said that + câu" hoặc "Người + is said + to + động từ" — nhớ "to" đi liền động từ nguyên mẫu!'
          },
          chunks: [
            { scene: '🚑🚔📰', full: 'It is reported that the victim was helped after the arrest', parts: [{t:'It',ico:'📰',c:'s'}, {t:'is reported',ico:'🗣️',c:'v'}, {t:'that the victim was helped after the arrest',ico:'🚑',c:'o'}], traceWord: 'victim' },
            { scene: '👮🏅🚓', full: 'He is believed to have a high rank in the police', parts: [{t:'He',ico:'👮',c:'s'}, {t:'is believed',ico:'💭',c:'v'}, {t:'to have a high rank in the police',ico:'🏅',c:'o'}], traceWord: 'rank' },
            { scene: '👑🚌👨‍✈️', full: 'The mayor is said to hire drivers with strong leadership', parts: [{t:'The mayor',ico:'👑',c:'s'}, {t:'is said',ico:'🗣️',c:'v'}, {t:'to hire drivers with strong leadership',ico:'👔',c:'o'}], traceWord: 'leadership' },
            { scene: '📶📱🔒', full: 'A new signal device is said to be very secure', parts: [{t:'A new signal device',ico:'📶',c:'s'}, {t:'is said',ico:'🗣️',c:'v'}, {t:'to be very secure',ico:'🔒',c:'o'}], traceWord: 'device' },
            { scene: '☝️📒🏫', full: 'It is said that a finger scan can register every student', parts: [{t:'It',ico:'📰',c:'s'}, {t:'is said',ico:'🗣️',c:'v'}, {t:'that a finger scan can register every student',ico:'☝️',c:'o'}], traceWord: 'finger' },
            { scene: '📃🏙️🧾', full: 'The city bond is said to cover the road expense', parts: [{t:'The city bond',ico:'📃',c:'s'}, {t:'is said',ico:'🗣️',c:'v'}, {t:'to cover the road expense',ico:'🧾',c:'o'}], traceWord: 'bond' },
            { scene: '📺📚👩‍🏫', full: 'A new TV channel is said to teach literature', parts: [{t:'A new TV channel',ico:'📺',c:'s'}, {t:'is said',ico:'🗣️',c:'v'}, {t:'to teach literature',ico:'📚',c:'o'}], traceWord: 'channel' },
            { scene: '📋🏢📄', full: 'A typical internal report is said to be too long', parts: [{t:'A typical internal report',ico:'📋',c:'s'}, {t:'is said',ico:'🗣️',c:'v'}, {t:'to be too long',ico:'📏',c:'o'}], traceWord: 'typical' }
          ],
          qaList: [
            { q: 'What is the new device said to do?', scene: '📱🔒✨', ans: 'It is said to keep every phone secure', opts: [{ txt: 'It is said to keep every phone secure', ico: '🔒' }, { txt: 'It is said to cook a big dinner', ico: '🍳' }, { txt: 'It is said to fly to the moon', ico: '🌙' }] },
            { q: 'Where is the victim believed to be now?', scene: '🚑🏥❓', ans: 'He is believed to be at the hospital', opts: [{ txt: 'He is believed to be at the hospital', ico: '🏥' }, { txt: 'He is believed to be at the zoo today', ico: '🦁' }, { txt: 'He is believed to be under the sea', ico: '🌊' }] },
            { q: 'Who is believed to pay the road expense?', scene: '🏙️🛣️💰', ans: 'The city is believed to pay the expense', opts: [{ txt: 'The city is believed to pay the expense', ico: '🏙️' }, { txt: 'A small fish is believed to pay it', ico: '🐟' }, { txt: 'The cow is believed to drive the bus', ico: '🐄' }] },
            { q: 'What is said on the news channel tonight?', scene: '📺🌃🚧', ans: 'It is said that the road will be closed', opts: [{ txt: 'It is said that the road will be closed', ico: '🚧' }, { txt: 'It is said that the cat will drive', ico: '🐱' }, { txt: 'The road is said to sing a song', ico: '🎤' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phóng Viên Tin Đồn Thành Phố',
            steps: [
              '<b>Bước 1:</b> Em chọn 3 tin có thật hoặc tin vui về thành phố (xe buýt mới, đường mới, cửa hàng mới) và ghi vào vở.',
              '<b>Bước 2:</b> Em viết lại mỗi tin thành câu tin đồn, ví dụ <i>"It is said that the city has a new bus."</i> và <i>"The mayor is believed to like bikes."</i>.',
              '<b>Bước 3:</b> Em ghi âm giọng đọc tin như người dẫn chương trình rồi phát cho bạn nghe và hỏi: <i>"What is said about the city?"</i>.'
            ]
          }
        },
        {
          id: '5.9C', name: 'Bài 5.9C: Một giờ nữa bạn đang ở đâu',
          grammar: {
            formulas: ['👦 I / 👧 She + ⚡ will be + 🏃 V-ing', '👨‍👩‍👧 We + ⚡ will be + 🍳 cooking...', '⏰ Tomorrow + 👦 I + ⚡ will be + 📚 studying'],
            tip: 'Tương lai tiếp diễn: "will be" luôn đi cùng động từ đuôi -ing, và dùng cho chủ ngữ nào cũng không đổi!'
          },
          chunks: [
            { scene: '👨‍⚕️🏥🕐', full: 'A resident doctor will be working at the city hospital', parts: [{t:'A resident doctor',ico:'👨‍⚕️',c:'s'}, {t:'will be working',ico:'⏳',c:'v'}, {t:'at the city hospital',ico:'🏥',c:'o'}], traceWord: 'resident' },
            { scene: '👦💻🏠', full: 'I will be working entirely from home tomorrow', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will be working',ico:'⏳',c:'v'}, {t:'entirely from home tomorrow',ico:'🏠',c:'o'}], traceWord: 'entirely' },
            { scene: '👴📖💡', full: 'Grandpa will be insisting that we learn the moral of the story', parts: [{t:'Grandpa',ico:'👴',c:'s'}, {t:'will be insisting',ico:'✊',c:'v'}, {t:'that we learn the moral of the story',ico:'💡',c:'o'}], traceWord: 'moral' },
            { scene: '👨🍳🍚🫘', full: 'Dad will definitely be cooking a combination of rice and beans', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'will definitely be cooking',ico:'🍳',c:'v'}, {t:'a combination of rice and beans',ico:'🔀',c:'o'}], traceWord: 'combination' },
            { scene: '🌧️🏃📅', full: 'Nevertheless, we will be having a training session at six', parts: [{t:'Nevertheless, we',ico:'🔄',c:'s'}, {t:'will be having',ico:'⏳',c:'v'}, {t:'a training session at six',ico:'📅',c:'o'}], traceWord: 'session' },
            { scene: '👩‍⚖️⚖️🧠', full: 'The judge will be using her best judgment tomorrow', parts: [{t:'The judge',ico:'👩‍⚖️',c:'s'}, {t:'will be using',ico:'⏳',c:'v'}, {t:'her best judgment tomorrow',ico:'🧠',c:'o'}], traceWord: 'judgment' },
            { scene: '🧳🚶🌊', full: 'Tourists will be largely walking along the river', parts: [{t:'Tourists',ico:'🧳',c:'s'}, {t:'will be largely walking',ico:'🚶',c:'v'}, {t:'along the river',ico:'🌊',c:'o'}], traceWord: 'largely' },
            { scene: '👮🛡️👑', full: 'The police will be giving protection to the mayor', parts: [{t:'The police',ico:'👮',c:'s'}, {t:'will be giving',ico:'🎁',c:'v'}, {t:'protection to the mayor',ico:'🛡️',c:'o'}], traceWord: 'protection' }
          ],
          qaList: [
            { q: 'What will the city council be doing at noon?', scene: '🏛️📝👍', ans: 'It will be approving a reasonable new plan', opts: [{ txt: 'It will be approving a reasonable new plan', ico: '👍' }, { txt: 'It will be flying a big kite', ico: '🪁' }, { txt: 'It will be swimming in the river', ico: '🏊' }] },
            { q: 'What will the teacher be explaining in class?', scene: '👩‍🏫📖🏫', ans: 'She will be explaining the definition of this word', opts: [{ txt: 'She will be explaining the definition of this word', ico: '📖' }, { txt: 'She will be cooking dinner for the whole school', ico: '🍲' }, { txt: 'She will be riding a horse to the zoo', ico: '🐴' }] },
            { q: 'What will the fans be enjoying at the stadium?', scene: '🏟️🎉😄', ans: 'They will be enjoying the happy atmosphere', opts: [{ txt: 'They will be enjoying the happy atmosphere', ico: '🌍' }, { txt: 'They will be washing the old buses', ico: '🚌' }, { txt: 'They will be sleeping under the sea', ico: '🌊' }] },
            { q: 'What will the shop be giving with every phone?', scene: '🏬📱📜', ans: 'It will be giving a one year guarantee', opts: [{ txt: 'It will be giving a one year guarantee', ico: '📜' }, { txt: 'It will be giving a pet tiger', ico: '🐯' }, { txt: 'It will be giving a big green tree', ico: '🌳' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Lịch Một Giờ Nữa Bạn Ở Đâu',
            steps: [
              '<b>Bước 1:</b> Em kẻ bảng 4 dòng: một giờ nữa, ba giờ nữa, tối nay, sáng mai. Em hỏi một bạn hoặc người nhà <i>"Where will you be at six?"</i> và ghi lại câu trả lời.',
              '<b>Bước 2:</b> Em viết mỗi dòng thành một câu, ví dụ <i>"Mom will be cooking dinner at six."</i> và <i>"I will be studying tomorrow."</i>.',
              '<b>Bước 3:</b> Em ghi âm cả bảng lịch, nghe lại và kiểm tra mỗi câu đều có "will be" và động từ đuôi -ing.'
            ]
          }
        }
      ]
    },
    '5.10': {
      lessons: [
        {
          id: '5.10A', name: 'Bài 5.10A: Mục tiêu đến cuối năm',
          grammar: {
            formulas: ['👦 I + ⚡ will have + ✅ finished', '👩 She + ⚡ will have + 💰 saved + ⏰ by June', '🏁 by + 📅 mốc thời gian'],
            tip: 'Will have + V3 nghĩa là "đến mốc đó là xong rồi!" và mốc thời gian luôn đi với by.'
          },
          chunks: [
            { scene: '📄🔧✅', full: 'I will have finished the practical sheet by Friday', parts: [{t:'I',ico:'👦',c:'s'}, {t:'will have finished',ico:'✅',c:'v'}, {t:'the practical sheet by Friday',ico:'📄',c:'o'}], traceWord: 'practical' },
            { scene: '👩⛽⚙️', full: 'She will have saved enough fuel for the engine by June', parts: [{t:'She',ico:'👩',c:'s'}, {t:'will have saved',ico:'💰',c:'v'}, {t:'enough fuel for the engine by June',ico:'⛽',c:'o'}], traceWord: 'fuel' },
            { scene: '👨‍👩‍👧🆚💎', full: 'We will have made a comparison of every unique idea by May', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'will have made',ico:'🛠️',c:'v'}, {t:'a comparison of every unique idea by May',ico:'🆚',c:'o'}], traceWord: 'comparison' },
            { scene: '👦💼🎉', full: 'Tom will have found employment by the end of the year', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'will have found',ico:'🔎',c:'v'}, {t:'employment by the end of the year',ico:'💼',c:'o'}], traceWord: 'employment' },
            { scene: '👧📈💪', full: 'Mai will have become increasingly strong by the end of June', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'will have become',ico:'🌱',c:'v'}, {t:'increasingly strong by the end of June',ico:'📈',c:'o'}], traceWord: 'increasingly' },
            { scene: '👧💨🏊', full: 'Lan will have learned to hold her breath for one minute by June', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'will have learned',ico:'📚',c:'v'}, {t:'to hold her breath for one minute by June',ico:'💨',c:'o'}], traceWord: 'breath' },
            { scene: '👩‍🏫✅💭', full: 'The teacher will have permitted us to share every notion by noon', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'will have permitted',ico:'✅',c:'v'}, {t:'us to share every notion by noon',ico:'💭',c:'o'}], traceWord: 'permitted' },
            { scene: '👧🔍🌟', full: 'She will have described her best characteristic by the end of May', parts: [{t:'She',ico:'👧',c:'s'}, {t:'will have described',ico:'🗣️',c:'v'}, {t:'her best characteristic by the end of May',ico:'🔍',c:'o'}], traceWord: 'characteristic' }
          ],
          qaList: [
            { q: 'Can I rely on you to finish by Friday?', scene: '🤝📅', ans: 'Yes, you can rely on me', opts: [{ txt: 'Yes, you can rely on me', ico: '🤝' }, { txt: 'Last year it was cold', ico: '❄️' }, { txt: 'A red bike', ico: '🚲' }] },
            { q: 'What do you need to show your identity?', scene: '🪪👦', ans: 'I need a card with my name', opts: [{ txt: 'I need a card with my name', ico: '🪪' }, { txt: 'Two blue chairs', ico: '🪑' }, { txt: 'A very cold winter', ico: '🥶' }] },
            { q: 'Is the road wide or narrow?', scene: '🚧🛣️', ans: 'The road is narrow', opts: [{ txt: 'The road is narrow', ico: '🚧' }, { txt: 'I like warm soup', ico: '🍲' }, { txt: 'She has a red hat', ico: '👒' }] },
            { q: 'What will you have done by the end of the year?', scene: '📚🎯', ans: 'I will have read fifty books', opts: [{ txt: 'I will have read fifty books', ico: '📚' }, { txt: 'It rained all day', ico: '🌧️' }, { txt: 'A small green bag', ico: '🎒' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bảng Mục Tiêu Cuối Năm',
            steps: [
              '<b>Bước 1:</b> Lấy một tờ giấy và viết 4 mục tiêu của em đến cuối năm, ví dụ đọc sách, tiết kiệm tiền, học bơi, giữ phòng gọn.',
              '<b>Bước 2:</b> Với mỗi mục tiêu, viết một câu tiếng Anh dạng <i>"I will have read fifty books by December."</i> và gạch chân mốc thời gian sau chữ by.',
              '<b>Bước 3:</b> Đọc to 4 câu cho bạn hoặc người thân nghe, rồi hỏi <i>"Can I rely on you to check my goals?"</i> để họ nhắc em theo dõi.'
            ]
          }
        },
        {
          id: '5.10B', name: 'Bài 5.10B: Sắp xảy ra và đã đến hạn',
          grammar: {
            formulas: ['⏳ is / are + about to + 🏃 V (sắp làm ngay)', '📅 is / are + due to + 🏃 V (đến hạn theo lịch)', '📋 is / are + supposed to + 🏃 V (được cho là phải làm)'],
            tip: 'About to là "sắp ngay bây giờ", due to là "theo lịch", supposed to là "đáng lẽ phải làm" và sau cả ba luôn là động từ nguyên mẫu.'
          },
          chunks: [
            { scene: '👩‍🔬🔬🐜', full: 'The researcher is about to analyze the tiny sample', parts: [{t:'The researcher',ico:'👩‍🔬',c:'s'}, {t:'is about to analyze',ico:'🔬',c:'v'}, {t:'the tiny sample',ico:'🐜',c:'o'}], traceWord: 'analyze' },
            { scene: '👨🩹📅', full: 'Dad is due to recover from his illness next week', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'is due to recover',ico:'🩹',c:'v'}, {t:'from his illness next week',ico:'🤒',c:'o'}], traceWord: 'recover' },
            { scene: '🧑‍🤝‍🧑🧘🏃', full: 'The class is about to stretch before the long run', parts: [{t:'The class',ico:'🧑‍🤝‍🧑',c:'s'}, {t:'is about to stretch',ico:'🧘',c:'v'}, {t:'before the long run',ico:'🏃',c:'o'}], traceWord: 'stretch' },
            { scene: '👩‍🏫📣🏆', full: 'The teacher is supposed to declare the winner today', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'is supposed to declare',ico:'📣',c:'v'}, {t:'the winner today',ico:'🏆',c:'o'}], traceWord: 'declare' },
            { scene: '🙋✏️😐', full: 'Every participant is supposed to bring an ordinary pencil', parts: [{t:'Every participant',ico:'🙋',c:'s'}, {t:'is supposed to bring',ico:'🎒',c:'v'}, {t:'an ordinary pencil',ico:'✏️',c:'o'}], traceWord: 'participant' },
            { scene: '👨‍👩‍👧👁️🗂️', full: 'We are about to witness the final selection of the team', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'are about to witness',ico:'👁️',c:'v'}, {t:'the final selection of the team',ico:'🗂️',c:'o'}], traceWord: 'witness' },
            { scene: '🧠📝🕙', full: 'The mental test is due to start at ten o\'clock', parts: [{t:'The mental test',ico:'🧠',c:'s'}, {t:'is due to start',ico:'▶️',c:'v'}, {t:'at ten o\'clock',ico:'🕙',c:'o'}], traceWord: 'mental' },
            { scene: '👧👓👀', full: 'Mai is supposed to wear glasses to help her vision', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'is supposed to wear',ico:'👓',c:'v'}, {t:'glasses to help her vision',ico:'👀',c:'o'}], traceWord: 'vision' }
          ],
          qaList: [
            { q: 'Which group does not like change?', scene: '🧓🛑', ans: 'The conservative group does not like change', opts: [{ txt: 'The conservative group does not like change', ico: '🧓' }, { txt: 'Two cats like to swim', ico: '🐱' }, { txt: 'We are due to eat lunch', ico: '🍽️' }] },
            { q: 'Why is the group saying no to the plan?', scene: '🛑📋', ans: 'There is strong opposition to the plan', opts: [{ txt: 'There is strong opposition to the plan', ico: '🛑' }, { txt: 'It is a sunny day', ico: '☀️' }, { txt: 'A small blue bag', ico: '🎒' }] },
            { q: 'Is Tom supposed to pay his debt today?', scene: '👦💳', ans: 'Yes, he is supposed to pay it', opts: [{ txt: 'Yes, he is supposed to pay it', ico: '💳' }, { txt: 'It is a red car', ico: '🚗' }, { txt: 'Two cold drinks', ico: '🥤' }] },
            { q: 'What should you do when a problem arises?', scene: '🌅❓', ans: 'I ask my teacher for help', opts: [{ txt: 'I ask my teacher for help', ico: '🙋' }, { txt: 'I paint a blue wall', ico: '🎨' }, { txt: 'I eat ten cakes', ico: '🍰' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Lịch Việc Sắp Tới Của Gia Đình',
            steps: [
              '<b>Bước 1:</b> Vẽ một bảng 3 cột trên giấy: <i>about to</i> (sắp làm ngay), <i>due to</i> (đến hạn theo lịch), <i>supposed to</i> (việc em phải làm).',
              '<b>Bước 2:</b> Quan sát nhà mình và viết mỗi cột 2 câu thật, ví dụ <i>"Mum is about to cook dinner."</i>, <i>"The bill is due to arrive on Friday."</i>, <i>"I am supposed to clean my room."</i>.',
              '<b>Bước 3:</b> Ghi âm em đọc 6 câu bằng điện thoại, nghe lại và kiểm tra xem sau about to, due to, supposed to đã luôn là động từ nguyên mẫu chưa.'
            ]
          }
        },
        {
          id: '5.10C', name: 'Bài 5.10C: Ký ức tuổi thơ ở quê',
          grammar: {
            formulas: ['👦 I + ⚡ would + 🐸 capture frogs (thói quen quá khứ)', '👴 He + ⚡ used to + 🏡 live there (trạng thái cũ)', '🕰️ would = lặp lại nhiều lần, không dùng cho trạng thái'],
            tip: 'Would chỉ dùng cho thói quen lặp lại ngày xưa, còn trạng thái như "từng sống, từng có" thì chỉ dùng used to.'
          },
          chunks: [
            { scene: '👦🐸🌊', full: 'I would capture frogs by the river every summer', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would capture',ico:'📷',c:'v'}, {t:'frogs by the river every summer',ico:'🐸',c:'o'}], traceWord: 'capture' },
            { scene: '🧒🪁🥇', full: 'My fellow kids would compete to fly the highest kite', parts: [{t:'My fellow kids',ico:'🧒',c:'s'}, {t:'would compete',ico:'🥇',c:'v'}, {t:'to fly the highest kite',ico:'🪁',c:'o'}], traceWord: 'fellow' },
            { scene: '👨‍👩‍👧🌱🤝', full: 'Our two families would keep a joint garden behind the house', parts: [{t:'Our two families',ico:'👨‍👩‍👧',c:'s'}, {t:'would keep',ico:'🌱',c:'v'}, {t:'a joint garden behind the house',ico:'🤝',c:'o'}], traceWord: 'joint' },
            { scene: '👵🍎🏷️', full: 'Grandma would give us a discount on fruit at her shop', parts: [{t:'Grandma',ico:'👵',c:'s'}, {t:'would give',ico:'🎁',c:'v'}, {t:'us a discount on fruit at her shop',ico:'🏷️',c:'o'}], traceWord: 'discount' },
            { scene: '🌾🥧📊', full: 'A considerable proportion of our food would come from the farm', parts: [{t:'A considerable proportion of our food',ico:'🥧',c:'s'}, {t:'would come',ico:'➡️',c:'v'}, {t:'from the farm',ico:'🌾',c:'o'}], traceWord: 'proportion' },
            { scene: '👴👥📖', full: 'Old folk would follow every instruction from the village leader', parts: [{t:'Old folk',ico:'👥',c:'s'}, {t:'would follow',ico:'🚶',c:'v'}, {t:'every instruction from the village leader',ico:'📖',c:'o'}], traceWord: 'folk' },
            { scene: '🧒🖥️🌾', full: 'We would surely give a presentation about the harvest at school', parts: [{t:'We',ico:'🧒',c:'s'}, {t:'would surely give',ico:'✔️',c:'v'}, {t:'a presentation about the harvest at school',ico:'🖥️',c:'o'}], traceWord: 'presentation' },
            { scene: '👩📓🌙', full: 'Mum would write a diary entry every evening before bed', parts: [{t:'Mum',ico:'👩',c:'s'}, {t:'would write',ico:'✍️',c:'v'}, {t:'a diary entry every evening before bed',ico:'📓',c:'o'}], traceWord: 'entry' }
          ],
          qaList: [
            { q: 'Did you use to visit the nature reserve?', scene: '🏞️🌳', ans: 'Yes, we would walk there every Sunday', opts: [{ txt: 'Yes, we would walk there every Sunday', ico: '🚶' }, { txt: 'A cold glass of milk', ico: '🥛' }, { txt: 'Two yellow pencils', ico: '✏️' }] },
            { q: 'Did the price reduction make the fruit cheaper?', scene: '📉🍎', ans: 'Yes, it was much cheaper', opts: [{ txt: 'Yes, it was much cheaper', ico: '📉' }, { txt: 'A small green frog', ico: '🐸' }, { txt: 'Only on Monday night', ico: '🌙' }] },
            { q: 'Would long bus trips bore you as a child?', scene: '🚌😑', ans: 'No, I would sing songs with friends', opts: [{ txt: 'No, I would sing songs with friends', ico: '🎶' }, { txt: 'I used to have a blue bike', ico: '🚲' }, { txt: 'The bus is red and big', ico: '🚌' }] },
            { q: 'What did you use to do in summer?', scene: '🏊☀️', ans: 'I used to swim in the river', opts: [{ txt: 'I used to swim in the river', ico: '🏊' }, { txt: 'She is about to eat lunch', ico: '🍽️' }, { txt: 'Two big red buses', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng Vấn Ký Ức Tuổi Thơ',
            steps: [
              '<b>Bước 1:</b> Chọn một người lớn lớn lên ở quê, như ông bà hoặc cô chú, rồi chuẩn bị 3 câu hỏi như <i>"What would you do every summer?"</i>.',
              '<b>Bước 2:</b> Phỏng vấn và ghi âm. Ghi lại 3 thói quen ngày xưa của họ bằng câu <i>"He would ..."</i> hoặc <i>"She would ..."</i> và 1 câu <i>"used to"</i> nói về một nơi hoặc đồ vật đã thay đổi.',
              '<b>Bước 3:</b> Làm một bài thuyết trình ngắn 1 phút cho cả nhà nghe với 4 câu em ghi lại, rồi nhờ mọi người đoán câu nào dùng would, câu nào chỉ dùng used to.'
            ]
          }
        }
      ]
    },
    '5.11': {
      lessons: [
        {
          id: '5.11A', name: 'Bài 5.11A: Lời hứa và lời thú nhận',
          grammar: {
            formulas: ['👦 He + 🤝 promised + 🎯 to finish the mission', '🧑 He + 😳 admitted + 💬 stealing money', '👩 She + 🙅 refused + 🚪 to leave'],
            tip: 'Hứa, từ chối (promise, refuse) đi với "to + V"; thú nhận, chối, đề nghị (admit, deny, suggest) đi với "V-ing" nhé!'
          },
          chunks: [
            { scene: '👦🤝🚀', full: 'He promised to finish the important mission today', parts: [{t:'He',ico:'👦',c:'s'}, {t:'promised',ico:'🤝',c:'v'}, {t:'to finish the important mission today',ico:'🚀',c:'o'}], traceWord: 'mission' },
            { scene: '👩🙅🌆', full: 'She refused to leave the neighborhood without her friends', parts: [{t:'She',ico:'👩',c:'s'}, {t:'refused',ico:'🙅',c:'v'}, {t:'to leave the neighborhood without her friends',ico:'🌆',c:'o'}], traceWord: 'neighborhood' },
            { scene: '🦹💰🏦', full: 'The criminal admitted stealing money from the bank', parts: [{t:'The criminal',ico:'🦹',c:'s'}, {t:'admitted',ico:'😳',c:'v'}, {t:'stealing money from the bank',ico:'💰',c:'o'}], traceWord: 'criminal' },
            { scene: '👦🪟🙅', full: 'He denied breaking the window of the school', parts: [{t:'He',ico:'👦',c:'s'}, {t:'denied',ico:'🙅',c:'v'}, {t:'breaking the window of the school',ico:'🪟',c:'o'}], traceWord: 'denied' },
            { scene: '👦📢🔨', full: 'Tom suggested joining a protest for justice', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'suggested',ico:'💡',c:'v'}, {t:'joining a protest for justice',ico:'📢',c:'o'}], traceWord: 'protest' },
            { scene: '👩‍🏫📧👔', full: 'My teacher suggested writing a formal email to the mayor', parts: [{t:'My teacher',ico:'👩‍🏫',c:'s'}, {t:'suggested',ico:'💡',c:'v'}, {t:'writing a formal email to the mayor',ico:'👔',c:'o'}], traceWord: 'formal' },
            { scene: '👴📱😅', full: 'He admitted being unable to use the electronic device properly', parts: [{t:'He',ico:'👴',c:'s'}, {t:'admitted',ico:'😳',c:'v'}, {t:'being unable to use the electronic device properly',ico:'📱',c:'o'}], traceWord: 'unable' },
            { scene: '👧👂🔎', full: 'She promised to listen closely and frequently ask questions', parts: [{t:'She',ico:'👧',c:'s'}, {t:'promised',ico:'🤝',c:'v'}, {t:'to listen closely and frequently ask questions',ico:'🔎',c:'o'}], traceWord: 'closely' }
          ],
          qaList: [
            { q: 'What did the new student make on the teacher?', scene: '🧑‍🎓💭', ans: 'A good impression', opts: [{txt:'A good impression',ico:'💭'}, {txt:'A big kitchen',ico:'🍳'}, {txt:'A hot lunch',ico:'🍲'}] },
            { q: 'Why did the soldiers reject the command?', scene: '💂🙅', ans: 'They thought it was wrong', opts: [{txt:'They thought it was wrong',ico:'🤔'}, {txt:'They wanted more soup',ico:'🍲'}, {txt:'They liked the weather',ico:'☀️'}] },
            { q: 'How did he fix the broken computer without help?', scene: '💻🔧🤔', ans: 'Somehow, he fixed it by himself', opts: [{txt:'Somehow, he fixed it by himself',ico:'🤔'}, {txt:'He ate it for lunch',ico:'🍽️'}, {txt:'He sang a long song',ico:'🎤'}] },
            { q: 'What is a religion?', scene: '🛐🙏', ans: 'A belief that many people share', opts: [{txt:'A belief that many people share',ico:'🛐'}, {txt:'A kind of fast car',ico:'🚗'}, {txt:'A place to buy shoes',ico:'👟'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hộp lời hứa',
            steps: [
              '<b>Bước 1:</b> Viết 3 lời hứa của em với gia đình lên 3 mảnh giấy, ví dụ <i>"I promise to clean my room."</i> Gấp lại bỏ vào hộp.',
              '<b>Bước 2:</b> Bốc từng mảnh giấy và nói lại bằng lời tường thuật: <i>"I promised to clean my room."</i> Sau đó tự nghĩ một lời thú nhận vui: <i>"I admit eating the last cookie."</i>',
              '<b>Bước 3:</b> Rủ một bạn hoặc người nhà chơi cùng, người kia phải đáp bằng <i>"deny"</i> hoặc <i>"suggest"</i>: <i>"I deny taking it."</i> / <i>"I suggest sharing it."</i> Ghi âm lại phần hay nhất.'
            ]
          }
        },
        {
          id: '5.11B', name: 'Bài 5.11B: Phỏng vấn danh nhân',
          grammar: {
            formulas: ['🧑‍🏫 The professor + 💬 said + 📧 he could answer via email', '👩 She + 💬 told + 📎 me she had to attach a file', '🏠 He + 💬 said + 🧾 every household had to pay'],
            tip: 'Kể lại lời người khác: now → then, here → there, can → could, must → had to. Lùi một bước thời gian nhé!'
          },
          chunks: [
            { scene: '👨🌐📧', full: 'The professor said he could answer questions via email', parts: [{t:'The professor',ico:'👨',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'he could answer questions via email',ico:'🌐',c:'o'}], traceWord: 'via' },
            { scene: '👩📎📧', full: 'She told me she had to attach a file to the email', parts: [{t:'She',ico:'👩',c:'s'}, {t:'told',ico:'💬',c:'v'}, {t:'me she had to attach a file to the email',ico:'📎',c:'o'}], traceWord: 'attach' },
            { scene: '🏠🌍🧾', full: 'He said every household in the county had to pay', parts: [{t:'He',ico:'👦',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'every household in the county had to pay',ico:'🏠',c:'o'}], traceWord: 'household' },
            { scene: '👩‍🏫🏆🧑‍🎓', full: 'The teacher said the best student would get a reward', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'the best student would get a reward',ico:'🏆',c:'o'}], traceWord: 'reward' },
            { scene: '👷🚧🏫', full: 'She said the workers had to construct a new school there', parts: [{t:'She',ico:'👩',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'the workers had to construct a new school there',ico:'🚧',c:'o'}], traceWord: 'construct' },
            { scene: '🧑‍💼🎯👪', full: 'The mayor said his intention was to help poor families then', parts: [{t:'The mayor',ico:'🧑‍💼',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'his intention was to help poor families then',ico:'🎯',c:'o'}], traceWord: 'intention' },
            { scene: '⚖️👉🚫', full: 'The judge said nobody could accuse him in his absence', parts: [{t:'The judge',ico:'⚖️',c:'s'}, {t:'said',ico:'💬',c:'v'}, {t:'nobody could accuse him in his absence',ico:'👉',c:'o'}], traceWord: 'absence' },
            { scene: '👩🎓🙇📚', full: 'She acknowledged that her academic work had to improve', parts: [{t:'She',ico:'👩',c:'s'}, {t:'acknowledged',ico:'🙇',c:'v'}, {t:'that her academic work had to improve',ico:'🎓',c:'o'}], traceWord: 'academic' }
          ],
          qaList: [
            { q: 'What did the professor remark about the old map?', scene: '👨🗺️💎', ans: 'He remarked that it was very rare', opts: [{txt:'He remarked that it was very rare',ico:'💎'}, {txt:'He ate it at dinner',ico:'🍽️'}, {txt:'He said it was a loud song',ico:'🎵'}] },
            { q: 'What happened meanwhile?', scene: '⏳🧑‍🎓', ans: 'Meanwhile, the students waited outside', opts: [{txt:'Meanwhile, the students waited outside',ico:'⏳'}, {txt:'Meanwhile, the table sang a song',ico:'🎤'}, {txt:'Meanwhile, the sun drank tea',ico:'🍵'}] },
            { q: 'Which word means also in a formal speech?', scene: '➕🗣️', ans: 'Furthermore', opts: [{txt:'Furthermore',ico:'➕'}, {txt:'Never',ico:'🚫'}, {txt:'Under',ico:'⬇️'}] },
            { q: 'Who is a professor?', scene: '👨🎓🏫', ans: 'A teacher at a university', opts: [{txt:'A teacher at a university',ico:'🎓'}, {txt:'A doctor at a zoo',ico:'🦁'}, {txt:'A cook at a bus station',ico:'🚌'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phóng viên nhí',
            steps: [
              '<b>Bước 1:</b> Chọn một người nổi tiếng em thích (hoặc một người thân lớn tuổi) rồi viết 3 câu hỏi phỏng vấn, ví dụ <i>"What can you do now?"</i> Người được phỏng vấn trả lời thật hoặc đóng vai.',
              '<b>Bước 2:</b> Ghi lại câu trả lời, rồi viết lại thành lời tường thuật: <i>"She said she could sing then."</i> Nhớ đổi now → then, here → there, must → had to.',
              '<b>Bước 3:</b> Đọc to bản tin 3 câu của em như một phóng viên và ghi âm lại. Nghe lại để kiểm tra từng câu đã lùi thì đúng chưa.'
            ]
          }
        },
        {
          id: '5.11C', name: 'Bài 5.11C: Người và nơi làm nên lịch sử',
          grammar: {
            formulas: ['🌆 The city + 📍 in which + 👦 he lived', '👦 The man + 🤝 to whom + 👩 she wrote', '⚔️ The man + 🛡️ against whom + 👦 he fought'],
            tip: 'Giới từ đi trước whom / which thì không cần giới từ ở cuối câu: the man to whom, the city in which. Nói rất trang trọng đó!'
          },
          chunks: [
            { scene: '🌆👶🧭', full: 'The city in which he lived is in northern Vietnam', parts: [{t:'The city in which he lived',ico:'🌆',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'in northern Vietnam',ico:'🧭',c:'o'}], traceWord: 'northern' },
            { scene: '👩🥚👑', full: 'The man to whom she gave a dozen eggs was a famous king', parts: [{t:'The man to whom she gave a dozen eggs',ico:'🥚',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'a famous king',ico:'👑',c:'o'}], traceWord: 'dozen' },
            { scene: '🏛️🤝📜', full: 'The room in which they signed the settlement was very small', parts: [{t:'The room in which they signed the settlement',ico:'🤝',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'very small',ico:'🔹',c:'o'}], traceWord: 'settlement' },
            { scene: '👦⚔️😠', full: 'The man against whom he fought was his old enemy', parts: [{t:'The man against whom he fought',ico:'⚔️',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'his old enemy',ico:'😠',c:'o'}], traceWord: 'enemy' },
            { scene: '⚔️🏆🎉', full: 'The battle in which they won a great victory was long', parts: [{t:'The battle in which they won a great victory',ico:'🏆',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'long',ico:'⏳',c:'o'}], traceWord: 'victory' },
            { scene: '📝👂🧑‍💼', full: 'The critic to whom the people listened was appointed mayor', parts: [{t:'The critic to whom the people listened',ico:'📝',c:'s'}, {t:'was appointed',ico:'📋',c:'v'}, {t:'mayor',ico:'🧑‍💼',c:'o'}], traceWord: 'appointed' },
            { scene: '🏫⚖️📚', full: 'The school in which children learn equally has a permanent library', parts: [{t:'The school in which children learn equally',ico:'⚖️',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'a permanent library',ico:'📌',c:'o'}], traceWord: 'equally' },
            { scene: '📰🔦🕳', full: 'The newspaper in which the writer exposed the gap was famous', parts: [{t:'The newspaper in which the writer exposed the gap',ico:'🔦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'famous',ico:'🌟',c:'o'}], traceWord: 'gap' }
          ],
          qaList: [
            { q: 'How did the two countries resolve the problem?', scene: '🌍🧩🤝', ans: 'They resolved it with a long talk', opts: [{txt:'They resolved it with a long talk',ico:'🗣️'}, {txt:'They resolved it with a red hat',ico:'🎩'}, {txt:'They resolved it with a loud bus',ico:'🚌'}] },
            { q: 'What is the minimum age to vote in many countries?', scene: '🗳️🔻', ans: 'It is eighteen', opts: [{txt:'It is eighteen',ico:'🔻'}, {txt:'It is two',ico:'2️⃣'}, {txt:'It is ninety',ico:'9️⃣'}] },
            { q: 'Which one is an emotion?', scene: '🥹😡', ans: 'Anger', opts: [{txt:'Anger',ico:'😡'}, {txt:'Table',ico:'🪑'}, {txt:'Bridge',ico:'🌉'}] },
            { q: 'What did he feel when he saw the cake?', scene: '👦🎂⚡', ans: 'He felt an urge to eat it', opts: [{txt:'He felt an urge to eat it',ico:'⚡'}, {txt:'He felt a bridge',ico:'🌉'}, {txt:'He felt the moon',ico:'🌙'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản đồ danh nhân',
            steps: [
              '<b>Bước 1:</b> Vẽ một bản đồ nhỏ nơi em sống và đánh dấu 3 địa điểm quan trọng (trường, chợ, nhà bạn). Với mỗi nơi, viết một câu: <i>"The school in which I study is near my house."</i>',
              '<b>Bước 2:</b> Chọn 2 người quan trọng với em (thầy cô, ông bà) và viết: <i>"The teacher to whom I talk every day is kind."</i> Kiểm tra giới từ luôn đứng trước whom / which.',
              '<b>Bước 3:</b> Đứng trước bản đồ, đóng vai hướng dẫn viên và đọc to 5 câu của em cho người nhà nghe. Nhờ họ đoán đó là nơi nào hoặc người nào.'
            ]
          }
        }
      ]
    },
    '5.12': {
      lessons: [
        {id: '5.12A', name: 'Bài 5.12A: Thí nghiệm và quan sát', grammar: {formulas: ['👦 The boy + ⚡ standing there + 🚶 is my friend', '📄 The disk + ⚡ given to me + ✅ is new'], tip: 'Rút gọn mệnh đề: chủ động dùng V-ing (the boy standing), bị động dùng V3 (the disk given) - bỏ who/which đi là xong!'}, chunks: [{scene: '👧🚪🎬', full: 'The girl standing near the door is a producer', parts: [{t: 'The girl standing near the door', ico: '👧', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'a producer', ico: '🎬', c: 'o'}], traceWord: 'producer'}, {scene: '💽🤏📋', full: 'The disk given to me is merely a copy', parts: [{t: 'The disk given to me', ico: '💽', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'merely a copy', ico: '🤏', c: 'o'}], traceWord: 'merely'}, {scene: '🤕🚨⏱', full: 'The boy injured in the incident needs immediate help', parts: [{t: 'The boy injured in the incident', ico: '🤕', c: 's'}, {t: 'needs', ico: '⚡', c: 'v'}, {t: 'immediate help', ico: '⏱', c: 'o'}], traceWord: 'immediate'}, {scene: '🧪📺🧱', full: 'The experiment shown on the screen looks very stable', parts: [{t: 'The experiment shown on the screen', ico: '🧪', c: 's'}, {t: 'looks', ico: '⚡', c: 'v'}, {t: 'very stable', ico: '🧱', c: 'o'}], traceWord: 'stable'}, {scene: '🏛🗣🗺', full: 'The politician talking to the students is a regional leader', parts: [{t: 'The politician talking to the students', ico: '🏛', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'a regional leader', ico: '🗺', c: 'o'}], traceWord: 'regional'}, {scene: '🚶‍♀️👦⏳', full: 'The teacher accompanying us has a temporary job', parts: [{t: 'The teacher accompanying us', ico: '👩‍🏫', c: 's'}, {t: 'has', ico: '⚡', c: 'v'}, {t: 'a temporary job', ico: '⏳', c: 'o'}], traceWord: 'accompanying'}, {scene: '🏆🏁💪', full: 'The team qualifying for the final is very competitive', parts: [{t: 'The team qualifying for the final', ico: '🏆', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'very competitive', ico: '🏁', c: 'o'}], traceWord: 'competitive'}, {scene: '🍌💦🩹', full: 'A small slip on the wet floor caused an injury', parts: [{t: 'A small slip on the wet floor', ico: '🍌', c: 's'}, {t: 'caused', ico: '⚡', c: 'v'}, {t: 'an injury', ico: '🩹', c: 'o'}], traceWord: 'slip'}], qaList: [{q: 'What phrase describes the sky seen from space?', scene: '🌌🚀', ans: 'The vast sky is full of bright stars', opts: [{txt: 'The vast sky is full of bright stars', ico: '🌌'}, {txt: 'The vast sky is full of small chairs', ico: '🪑'}, {txt: 'The vast sky is full of hot soup', ico: '🍲'}]}, {q: 'Who is the woman holding the camera?', scene: '👩🎥', ans: 'The woman holding the camera is a producer', opts: [{txt: 'The woman holding the camera is a producer', ico: '🎬'}, {txt: 'The woman holding the camera is a doctor', ico: '🩺'}, {txt: 'The woman holding the camera is a farmer', ico: '🌾'}]}, {q: 'What is lying on the table?', scene: '💽🪵', ans: 'The disk lying on the table is new', opts: [{txt: 'The disk lying on the table is new', ico: '💽'}, {txt: 'The book lying on the table is new', ico: '📖'}, {txt: 'The pen lying on the table is new', ico: '🖊'}]}, {q: 'Which sentence is correct?', scene: '🤕🏠', ans: 'The girl hurt by the slip is resting at home', opts: [{txt: 'The girl hurt by the slip is resting at home', ico: '✅'}, {txt: 'The girl hurting by the slip is resting at home', ico: '❌'}, {txt: 'The girl hurt by the slip are resting at home', ico: '❌'}]}], parentGame: {title: '🎲 Hoạt động Đời thực (12 phút): Nhà quan sát nhỏ', steps: ['<b>Bước 1:</b> Chọn 3 đồ vật trong nhà (ví dụ cốc, sách, đĩa). Quan sát và viết 3 câu dùng V-ing hoặc V3, ví dụ <i>"The cup standing on the table is blue."</i>', '<b>Bước 2:</b> Đổi vị trí đồ vật rồi nhờ bạn hoặc người nhà đọc câu của bạn, họ chỉ đúng đồ vật bạn tả.', '<b>Bước 3:</b> Ghi âm 3 câu hay nhất bằng điện thoại và nghe lại, kiểm tra xem V-ing / V3 đã đúng chưa.']}},
        {id: '5.12B', name: 'Bài 5.12B: Nhà khoa học và kết quả', grammar: {formulas: ['🔬 The scientist + ⚡ wants to be + 🌟 thanked', '🧪 The test + ⚡ is being + ✅ used'], tip: 'Bị động của to V là to be + V3 (to be done), của V-ing là being + V3 (being done) - nhớ có V3 ở cuối!'}, chunks: [{scene: '👩‍🔬🔭🌟', full: 'The scientist wants to be thanked for her observation', parts: [{t: 'The scientist', ico: '👩‍🔬', c: 's'}, {t: 'wants to be thanked', ico: '⚡', c: 'v'}, {t: 'for her observation', ico: '🔭', c: 'o'}], traceWord: 'observation'}, {scene: '🔪🧒🚫', full: 'The sharp knife needs to be kept away from kids', parts: [{t: 'The sharp knife', ico: '🔪', c: 's'}, {t: 'needs to be kept', ico: '⚡', c: 'v'}, {t: 'away from kids', ico: '🧒', c: 'o'}], traceWord: 'sharp'}, {scene: '🚄🧪🔺', full: 'The maximum speed is being used in the laboratory', parts: [{t: 'The maximum speed', ico: '🔺', c: 's'}, {t: 'is being used', ico: '⚡', c: 'v'}, {t: 'in the laboratory', ico: '🧪', c: 'o'}], traceWord: 'maximum'}, {scene: '👩‍🏫🌟🙏', full: 'The old teacher deserves to be thanked for her good reputation', parts: [{t: 'The old teacher', ico: '👩‍🏫', c: 's'}, {t: 'deserves to be thanked', ico: '⚡', c: 'v'}, {t: 'for her good reputation', ico: '🌟', c: 'o'}], traceWord: 'deserves'}, {scene: '🧍🌪🔥', full: 'Nobody wants to be left outside in extreme weather', parts: [{t: 'Nobody', ico: '🧍', c: 's'}, {t: 'wants to be left', ico: '⚡', c: 'v'}, {t: 'outside in extreme weather', ico: '🌪', c: 'o'}], traceWord: 'extreme'}, {scene: '🗳🏫❗', full: 'The importance of democracy is being emphasized in class', parts: [{t: 'The importance of democracy', ico: '🗳', c: 's'}, {t: 'is being emphasized', ico: '⚡', c: 'v'}, {t: 'in class', ico: '🏫', c: 'o'}], traceWord: 'emphasized'}, {scene: '🌍🪐🔬', full: 'The existence of life on other planets needs to be proved', parts: [{t: 'The existence of life on other planets', ico: '🪐', c: 's'}, {t: 'needs', ico: '⚡', c: 'v'}, {t: 'to be proved', ico: '🔬', c: 'o'}], traceWord: 'existence'}, {scene: '⚽➡⬅', full: 'The ball is being passed back and forth by the team', parts: [{t: 'The ball', ico: '⚽', c: 's'}, {t: 'is being passed', ico: '⚡', c: 'v'}, {t: 'back and forth by the team', ico: '➡', c: 'o'}], traceWord: 'forth'}], qaList: [{q: 'What is being discussed on the news?', scene: '📺💥', ans: 'The crash is being discussed on the news', opts: [{txt: 'The crash is being discussed on the news', ico: '💥'}, {txt: 'The soup is being discussed on the news', ico: '🍲'}, {txt: 'The shoe is being discussed on the news', ico: '👟'}]}, {q: 'Why is the teacher emotional?', scene: '👩‍🏫😢', ans: 'She does not want to be disappointed again', opts: [{txt: 'She does not want to be disappointed again', ico: '😞'}, {txt: 'She is happy because the sun is bright', ico: '☀'}, {txt: 'She wants to eat a sandwich at the door', ico: '🥪'}]}, {q: 'Where is the long negotiation being held?', scene: '🏢🤝', ans: 'It is being held in a big room', opts: [{txt: 'It is being held in a big room', ico: '🏢'}, {txt: 'It is being held in a small box', ico: '📦'}, {txt: 'It is being held in a deep river', ico: '🌊'}]}, {q: 'What can complicate your concentration in class?', scene: '🔊🎯', ans: 'Loud noise can complicate your concentration', opts: [{txt: 'Loud noise can complicate your concentration', ico: '🔊'}, {txt: 'A good night of sleep can help your concentration', ico: '😴'}, {txt: 'A clean desk can help you read', ico: '📚'}]}], parentGame: {title: '🎲 Hoạt động Đời thực (12 phút): Báo cáo nhà khoa học', steps: ['<b>Bước 1:</b> Làm một thí nghiệm nhỏ ở nhà (ví dụ cho đá vào nước nóng và nước lạnh). Viết 3 câu bị động, ví dụ <i>"The ice is being melted by hot water."</i>', '<b>Bước 2:</b> Trình bày kết quả cho người nhà như một nhà khoa học, dùng <i>"The test needs to be repeated."</i>', '<b>Bước 3:</b> Tự ghi âm bài trình bày, nghe lại và sửa những chỗ chưa có V3 sau to be / being.']}},
        {id: '5.12C', name: 'Bài 5.12C: Thầy cô và phòng thí nghiệm', grammar: {formulas: ['👩‍🏫 The teacher + ⚡ makes / lets / helps + 👦 us + 🔬 work', '👦 We + ⚡ were made + 📚 to study'], tip: 'Sau make / let / help + người là động từ nguyên mẫu không to, nhưng bị động be made thì phải thêm to!'}, chunks: [{scene: '👩‍🏫🧪📍', full: 'My teacher lets us work in the laboratory nearby', parts: [{t: 'My teacher', ico: '👩‍🏫', c: 's'}, {t: 'lets', ico: '⚡', c: 'v'}, {t: 'us work in the laboratory nearby', ico: '📍', c: 'o'}], traceWord: 'nearby'}, {scene: '👩‍🏫🖍📖', full: 'Our teacher helps us highlight the key words', parts: [{t: 'Our teacher', ico: '👩‍🏫', c: 's'}, {t: 'helps', ico: '⚡', c: 'v'}, {t: 'us highlight the key words', ico: '🖍', c: 'o'}], traceWord: 'highlight'}, {scene: '👩‍🏫😌💪', full: 'The teacher makes us feel proud and capable of learning', parts: [{t: 'The teacher', ico: '👩‍🏫', c: 's'}, {t: 'makes', ico: '⚡', c: 'v'}, {t: 'us feel proud and capable of learning', ico: '😌', c: 'o'}], traceWord: 'proud'}, {scene: '🗣🛡💡', full: 'She lets the students defend their ideas in class', parts: [{t: 'She', ico: '👩‍🏫', c: 's'}, {t: 'lets', ico: '⚡', c: 'v'}, {t: 'the students defend their ideas in class', ico: '🛡', c: 'o'}], traceWord: 'defend'}, {scene: '📖🔍💎', full: 'The lesson helps students distinguish a valuable idea from a wrong one', parts: [{t: 'The lesson', ico: '📖', c: 's'}, {t: 'helps', ico: '⚡', c: 'v'}, {t: 'students distinguish a valuable idea from a wrong one', ico: '💎', c: 'o'}], traceWord: 'distinguish'}, {scene: '⏰🧑‍🎓≈', full: 'The class was made to wait approximately ten minutes', parts: [{t: 'The class', ico: '🧑‍🎓', c: 's'}, {t: 'was made', ico: '⚡', c: 'v'}, {t: 'to wait approximately ten minutes', ico: '≈', c: 'o'}], traceWord: 'approximately'}, {scene: '🌉🏚📚', full: 'We were made to study the collapse of the old bridge', parts: [{t: 'We', ico: '👦', c: 's'}, {t: 'were made', ico: '⚡', c: 'v'}, {t: 'to study the collapse of the old bridge', ico: '🏚', c: 'o'}], traceWord: 'collapse'}, {scene: '🤝🏆🥊', full: 'Good interaction helps our team defeat a strong group', parts: [{t: 'Good interaction', ico: '🤝', c: 's'}, {t: 'helps', ico: '⚡', c: 'v'}, {t: 'our team defeat a strong group', ico: '🥊', c: 'o'}], traceWord: 'defeat'}], qaList: [{q: 'What makes your soul feel calm?', scene: '🕊🎵', ans: 'Quiet music makes my soul feel calm', opts: [{txt: 'Quiet music makes my soul feel calm', ico: '🎵'}, {txt: 'Loud noise makes my soul feel calm', ico: '🔊'}, {txt: 'A broken chair makes my soul feel calm', ico: '🪑'}]}, {q: 'What do you personally want to learn?', scene: '🙋🌱', ans: 'I personally want to learn how plants grow', opts: [{txt: 'I personally want to learn how plants grow', ico: '🌱'}, {txt: 'I personally want to learn how rocks sing', ico: '🪨'}, {txt: 'I personally want to learn how books swim', ico: '📚'}]}, {q: 'How much help does the teacher give us?', scene: '👩‍🏫📊', ans: 'The teacher gives us substantial help', opts: [{txt: 'The teacher gives us substantial help', ico: '📊'}, {txt: 'The teacher gives us no help at all', ico: '🚫'}, {txt: 'The teacher gives us a tiny blue shoe', ico: '👟'}]}, {q: 'What do many people like to eat?', scene: '🍗😋', ans: 'Many people like to eat chicken breast', opts: [{txt: 'Many people like to eat chicken breast', ico: '🍗'}, {txt: 'Many people like to eat chicken stone', ico: '🪨'}, {txt: 'Many people like to eat chicken shoe', ico: '👟'}]}], parentGame: {title: '🎲 Hoạt động Đời thực (12 phút): Phòng thí nghiệm tại nhà', steps: ['<b>Bước 1:</b> Cùng bạn hoặc người nhà đóng vai thầy cô và học sinh. Thầy cô nói các câu như <i>"I let you try."</i> và <i>"I help you learn."</i>', '<b>Bước 2:</b> Học sinh làm một thí nghiệm nhỏ (trộn giấm và muối) và nói lại bằng <i>"The teacher made us wait."</i>', '<b>Bước 3:</b> Viết 3 câu với make, let, help và 1 câu với be made to, rồi đọc to cho người nhà nghe.']}}
      ]
    },
    '5.13': {
      lessons: [
        {
          id: '5.13A', name: 'Bài 5.13A: Bảo vệ loài vật hoang dã',
          grammar: {
            formulas: ['🏞 The park + ⚡ allows + 👥 visitors to feed', '👩‍🏫 The guide + ⚠️ warns + 👥 us to stay away', '📰 A journalist + 💪 encourages + 👥 people to protect'],
            tip: 'Sau allow / encourage / persuade / warn là NGƯỜI (tân ngữ), rồi mới đến to + động từ gốc, đừng thêm -s sau to nhé!'
          },
          chunks: [
            { scene: '🧑‍🏫🐘🏔', full: 'The guide warns visitors to stay aside near a massive elephant', parts: [{t:'The guide',ico:'🧑‍🏫',c:'s'}, {t:'warns',ico:'⚠️',c:'v'}, {t:'visitors to stay aside near a massive elephant',ico:'🐘',c:'o'}], traceWord: 'massive' },
            { scene: '📰🌳🧭', full: 'A journalist encourages people to protect the southern forest', parts: [{t:'A journalist',ico:'📰',c:'s'}, {t:'encourages',ico:'💪',c:'v'}, {t:'people to protect the southern forest',ico:'🌳',c:'o'}], traceWord: 'journalist' },
            { scene: '🔬🌲⬆', full: 'Scientists persuade the government to preserve the upper forest', parts: [{t:'Scientists',ico:'🔬',c:'s'}, {t:'persuade',ico:'🗣',c:'v'}, {t:'the government to preserve the upper forest',ico:'🏛',c:'o'}], traceWord: 'preserve' },
            { scene: '🌦🦌🏝', full: 'A warm climate allows many animals to occupy the island', parts: [{t:'A warm climate',ico:'🌦',c:'s'}, {t:'allows',ico:'✅',c:'v'}, {t:'many animals to occupy the island',ico:'🦌',c:'o'}], traceWord: 'climate' },
            { scene: '👨‍⚕️🤧💧', full: 'The doctor warns people to avoid illness near dirty water', parts: [{t:'The doctor',ico:'👨‍⚕️',c:'s'}, {t:'warns',ico:'⚠️',c:'v'}, {t:'people to avoid illness near dirty water',ico:'🤧',c:'o'}], traceWord: 'illness' },
            { scene: '👩‍🏫➗🐅', full: 'My teacher encourages us to use mathematics to count tigers', parts: [{t:'My teacher',ico:'👩‍🏫',c:'s'}, {t:'encourages',ico:'💪',c:'v'}, {t:'us to use mathematics to count tigers',ico:'➗',c:'o'}], traceWord: 'mathematics' },
            { scene: '🦁🧮🥩', full: 'The zoo tells workers to calculate the food for every animal', parts: [{t:'The zoo',ico:'🦁',c:'s'}, {t:'tells',ico:'📢',c:'v'}, {t:'workers to calculate the food for every animal',ico:'🧮',c:'o'}], traceWord: 'calculate' },
            { scene: '👫🔄📋', full: 'We persuade the club to update the list of animals', parts: [{t:'We',ico:'👫',c:'s'}, {t:'persuade',ico:'🗣',c:'v'}, {t:'the club to update the list of animals',ico:'🔄',c:'o'}], traceWord: 'update' }
          ],
          qaList: [
            { q: 'What does the guide warn us to do during an animal encounter?', scene: '🧑‍🏫🤝🐻', ans: 'She warns us to stay quiet and keep away', opts: [{ txt: 'She warns us to stay quiet and keep away', ico: '🤫' }, { txt: 'She allows us to touch the wild bear', ico: '✋' }, { txt: 'She encourages us to shout at the animal', ico: '📢' }] },
            { q: 'Why does the park install cameras near the river?', scene: '📷🏞🐅', ans: 'The cameras help scientists to watch the animals at night', opts: [{ txt: 'The cameras help scientists to watch the animals at night', ico: '🌙' }, { txt: 'The cameras help animals to cook dinner', ico: '🍳' }, { txt: 'The cameras persuade tigers to climb trees', ico: '🌳' }] },
            { q: 'Can you outline a plan to protect the animals?', scene: '📝🐾🛡', ans: 'Yes, I can outline a plan to save the animals', opts: [{ txt: 'Yes, I can outline a plan to save the animals', ico: '📝' }, { txt: 'I like to eat bread for breakfast every day', ico: '🍞' }, { txt: 'The bus arrives at the station at noon', ico: '🚌' }] },
            { q: 'Is the food sufficient for all the animals?', scene: '🥕🐴✅', ans: 'Yes, there is sufficient food for every animal', opts: [{ txt: 'Yes, there is sufficient food for every animal', ico: '✅' }, { txt: 'She goes to the market on Sunday', ico: '🛒' }, { txt: 'The zoo opens at nine on Monday', ico: '🕘' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Áp Phích Bảo Vệ Động Vật',
            steps: [
              '<b>Bước 1:</b> Chọn một con vật em thích. Viết 3 câu luật cho khu bảo tồn theo mẫu <i>"The park warns visitors to stay away"</i> hoặc <i>"The guide encourages us to protect animals"</i>.',
              '<b>Bước 2:</b> Vẽ áp phích khổ giấy A4 với hình con vật và 3 câu luật, mỗi câu có một động từ allow / encourage / persuade / warn.',
              '<b>Bước 3:</b> Đọc to áp phích cho bạn hoặc người nhà nghe, ghi âm lại và nghe xem mình đã dùng <i>"to"</i> + động từ gốc đúng chưa.'
            ]
          }
        },
        {
          id: '5.13B', name: 'Bài 5.13B: Hoạt động ngoài trời',
          grammar: {
            formulas: ['👥 We + ⚡ look forward to + 🥾 hiking', '⛺ A tent + ⚡ is worth + 🛒 buying', '🤷 We + 👀 see no point in + 🚪 giving up'],
            tip: 'Sau giới từ (to, in, about, for...) luôn là V-ing; chú ý "look forward TO" có to là giới từ chứ không phải to + động từ!'
          },
          chunks: [
            { scene: '🏫⛺😌', full: 'My class looks forward to camping by the calm lake', parts: [{t:'My class',ico:'🏫',c:'s'}, {t:'looks forward to',ico:'🤩',c:'v'}, {t:'camping by the calm lake',ico:'⛺',c:'o'}], traceWord: 'calm' },
            { scene: '⛺⬜🛋', full: 'A plain tent is worth buying for its comfort', parts: [{t:'A plain tent',ico:'⛺',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'worth buying for its comfort',ico:'🛋',c:'o'}], traceWord: 'plain' },
            { scene: '🌧🤷🧳', full: 'We see no point in abandoning the trip after a little rain', parts: [{t:'We',ico:'👫',c:'s'}, {t:'see',ico:'👀',c:'v'}, {t:'no point in abandoning the trip after a little rain',ico:'🚪',c:'o'}], traceWord: 'abandoning' },
            { scene: '👦📸🌪', full: 'Tom is primarily interested in taking photos of severe storms', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'primarily interested in taking photos of severe storms',ico:'📸',c:'o'}], traceWord: 'severe' },
            { scene: '👧🙋🏖', full: 'My sister volunteers for cleaning the beach every weekend', parts: [{t:'My sister',ico:'👧',c:'s'}, {t:'volunteers',ico:'🙋',c:'v'}, {t:'for cleaning the beach every weekend',ico:'🏖',c:'o'}], traceWord: 'volunteers' },
            { scene: '👧📄😰', full: 'Anna is nervous about taking the examination on Monday', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nervous about taking the examination on Monday',ico:'📄',c:'o'}], traceWord: 'examination' },
            { scene: '🔬🧬🐦', full: 'Scientists are busy studying the gene sequence of wild birds', parts: [{t:'Scientists',ico:'🔬',c:'s'}, {t:'are',ico:'⚡',c:'v'}, {t:'busy studying the gene sequence of wild birds',ico:'🧬',c:'o'}], traceWord: 'sequence' },
            { scene: '👫⛰😄', full: 'They look forward to running rapidly down the hill with delight', parts: [{t:'They',ico:'👫',c:'s'}, {t:'look forward to',ico:'🤩',c:'v'}, {t:'running rapidly down the hill with delight',ico:'🏃',c:'o'}], traceWord: 'delight' }
          ],
          qaList: [
            { q: 'Do you bet it is worth climbing the hill today?', scene: '🧗⛰🌅', ans: 'Yes, I bet the view is worth climbing for', opts: [{ txt: 'Yes, I bet the view is worth climbing for', ico: '🌅' }, { txt: 'The bus is late for school today', ico: '🚌' }, { txt: 'I was a student last year', ico: '🎓' }] },
            { q: 'Why do people wear a thick coat when it is cold?', scene: '🧥❄️🥶', ans: 'A thick coat helps the body retain heat', opts: [{ txt: 'A thick coat helps the body retain heat', ico: '🧥' }, { txt: 'It helps people to swim in the pool', ico: '🏊' }, { txt: 'It makes the sky blue and sunny', ico: '☀️' }] },
            { q: 'Is a bike an efficient way of getting to the park?', scene: '🚲🌳⚙', ans: 'Yes, riding a bike is an efficient way of getting there', opts: [{ txt: 'Yes, riding a bike is an efficient way of getting there', ico: '🚲' }, { txt: 'It is cold and rainy in the morning', ico: '🌧' }, { txt: 'My uncle has a small red car', ico: '🚗' }] },
            { q: 'What is worth doing on a sunny weekend?', scene: '☀️🚶💧', ans: 'Going for a walk by the lake is worth doing', opts: [{ txt: 'Going for a walk by the lake is worth doing', ico: '🚶' }, { txt: 'Sunday comes after Saturday every week', ico: '📅' }, { txt: 'We bought some rice at the market', ico: '🍚' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Khảo Sát Hoạt Động Ngoài Trời',
            steps: [
              '<b>Bước 1:</b> Viết sẵn 3 câu hỏi vào vở, ví dụ <i>"Are you looking forward to going camping?"</i>, <i>"Is hiking worth doing?"</i> và <i>"Is there any point in staying at home?"</i>.',
              '<b>Bước 2:</b> Hỏi 3 người (bạn, anh chị, bố mẹ) và ghi nhanh câu trả lời của mỗi người bằng tiếng Anh vào bảng nhỏ.',
              '<b>Bước 3:</b> Viết 3 câu tổng kết với V-ing, ví dụ <i>"Mom looks forward to walking by the lake"</i>, rồi đọc to hoặc ghi âm lại.'
            ]
          }
        },
        {
          id: '5.13C', name: 'Bài 5.13C: Phim tài liệu về thiên nhiên',
          grammar: {
            formulas: ['🎬 The film + ⚡ is + 😲 amazing / surprising', '👦 I + ⚡ was + 😲 amazed / surprised', '📺 The talk + ⚡ was + 😴 boring → 👦 I + ⚡ was + 🥱 bored'],
            tip: 'Vật / việc gây cảm xúc dùng -ing (boring), người cảm thấy dùng -ed (bored): phim thì "boring", em thì "bored"!'
          },
          chunks: [
            { scene: '🎬🦁🥩', full: 'The film about a lean lion hunt is surprising', parts: [{t:'The film about a lean lion hunt',ico:'🎬',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'surprising',ico:'😲',c:'o'}], traceWord: 'lean' },
            { scene: '⛈🎭🍿', full: 'The dramatic storm in the film was exciting', parts: [{t:'The dramatic storm in the film',ico:'⛈',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'exciting',ico:'🤩',c:'o'}], traceWord: 'dramatic' },
            { scene: '👦🥱📉', full: 'I was bored when the speaker talked about unemployment', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'bored when the speaker talked about unemployment',ico:'🥱',c:'o'}], traceWord: 'unemployment' },
            { scene: '👨‍🌾🌾😲', full: 'The farmer was surprised by how much the crops differ', parts: [{t:'The farmer',ico:'👨‍🌾',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'surprised by how much the crops differ',ico:'🌾',c:'o'}], traceWord: 'differ' },
            { scene: '🧑‍🎓🌍🏞', full: 'The students were fascinated by the origin of the river', parts: [{t:'The students',ico:'🧑‍🎓',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'fascinated by the origin of the river',ico:'🌍',c:'o'}], traceWord: 'origin' },
            { scene: '🎩🎤😴', full: 'The old gentleman gives a boring talk about minor problems', parts: [{t:'The old gentleman',ico:'🎩',c:'s'}, {t:'gives',ico:'🎁',c:'v'}, {t:'a boring talk about minor problems',ico:'😴',c:'o'}], traceWord: 'gentleman' },
            { scene: '👩‍🏫🎓👥', full: 'Our teacher was excited to educate us about this minority group', parts: [{t:'Our teacher',ico:'👩‍🏫',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'excited to educate us about this minority group',ico:'🎓',c:'o'}], traceWord: 'educate' },
            { scene: '👫🥇🏆', full: 'The team was excited about winning a prize for their achievement', parts: [{t:'The team',ico:'👫',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'excited about winning a prize for their achievement',ico:'🥇',c:'o'}], traceWord: 'achievement' }
          ],
          qaList: [
            { q: 'Does the film show how workers distribute food to villages?', scene: '🎬📦🏘', ans: 'Yes, the film is fascinating and I was never bored', opts: [{ txt: 'Yes, the film is fascinating and I was never bored', ico: '🎬' }, { txt: 'My uncle drives a taxi at night', ico: '🚕' }, { txt: 'The cat was sleeping on a chair', ico: '🐱' }] },
            { q: 'Where do many English words derive from?', scene: '📖🌿🗣', ans: 'Many English words derive from old languages', opts: [{ txt: 'Many English words derive from old languages', ico: '📖' }, { txt: 'They come from the moon every night', ico: '🌙' }, { txt: 'I think the answer is blue and soft', ico: '🔵' }] },
            { q: 'Why did the two leaders negotiate for many hours?', scene: '🤝⏰👔', ans: 'They wanted to find a peaceful answer to the problem', opts: [{ txt: 'They wanted to find a peaceful answer to the problem', ico: '🕊' }, { txt: 'They wanted to buy a pink umbrella', ico: '☂️' }, { txt: 'They wanted to swim in the cold sea', ico: '🌊' }] },
            { q: 'Are you excited in a fascinating science class?', scene: '🔬🧑‍🎓😲', ans: 'I am excited because the class is fascinating', opts: [{ txt: 'I am excited because the class is fascinating', ico: '🤩' }, { txt: 'I am boring because I am tired', ico: '🥱' }, { txt: 'The class are surprised at the board', ico: '📋' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhà Phê Bình Phim Thiên Nhiên',
            steps: [
              '<b>Bước 1:</b> Cùng bạn hoặc người nhà xem một đoạn phim ngắn về thiên nhiên (khoảng 5 phút) trên điện thoại hoặc TV.',
              '<b>Bước 2:</b> Viết 4 câu nhận xét, mỗi câu dùng một tính từ khác nhau, ví dụ <i>"The film was surprising"</i> và <i>"I was bored"</i>. Nhớ: phim là -ing, em là -ed.',
              '<b>Bước 3:</b> Ghi âm bài nhận xét 30 giây, nghe lại và đổi cặp tính từ nếu thấy mình nói nhầm -ing / -ed.'
            ]
          }
        }
      ]
    },
    '5.14': {
      lessons: [
        {
          id: '5.14A', name: 'Bài 5.14A: Làm thêm và xin việc',
          grammar: {
            formulas: ['👦 I + ⚡ turn on + 💡 the light', '👦 I + ⚡ turn + 💡 it on', '👧 She + ⚡ looks after + 👶 the baby'],
            tip: 'Cụm động từ tách được: danh từ chen giữa được (turn the light on), nhưng đại từ BẮT BUỘC chen giữa (turn it on, không nói turn on it)!'
          },
          chunks: [
            { scene: '🧑‍💼📅💡', full: 'I typically turn on the lights at six', parts: [{t:'I',ico:'👦',c:'s'}, {t:'typically turn on',ico:'💡',c:'v'}, {t:'the lights at six',ico:'🕕',c:'o'}], traceWord: 'typically' },
            { scene: '👦🔌⚡', full: 'Tom turned off the electricity before he left', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'turned off',ico:'🔌',c:'v'}, {t:'the electricity before he left',ico:'⚡',c:'o'}], traceWord: 'electricity' },
            { scene: '👧🏬🛍', full: 'My sister looks after a retail shop on Sundays', parts: [{t:'My sister',ico:'👧',c:'s'}, {t:'looks after',ico:'🤲',c:'v'}, {t:'a retail shop on Sundays',ico:'🏬',c:'o'}], traceWord: 'retail' },
            { scene: '👩‍💼🗒✍', full: 'Mr Lee wrote down the agenda and put emphasis on speed', parts: [{t:'Mr Lee',ico:'👨',c:'s'}, {t:'wrote down',ico:'✍',c:'v'}, {t:'the agenda and put emphasis on speed',ico:'🗒',c:'o'}], traceWord: 'agenda' },
            { scene: '📖👩🤲', full: 'Lan picked up the new edition of the book', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'picked up',ico:'🤲',c:'v'}, {t:'the new edition of the book',ico:'📖',c:'o'}], traceWord: 'edition' },
            { scene: '🧾👦🏢', full: 'Nam handed in the proof of his age', parts: [{t:'Nam',ico:'👦',c:'s'}, {t:'handed in',ico:'📥',c:'v'}, {t:'the proof of his age',ico:'🧾',c:'o'}], traceWord: 'proof' },
            { scene: '😇👨‍💼🏬', full: 'I look up to my honest boss at the shop', parts: [{t:'I',ico:'👦',c:'s'}, {t:'look up to',ico:'🙌',c:'v'}, {t:'my honest boss at the shop',ico:'😇',c:'o'}], traceWord: 'honest' },
            { scene: '👦🔌🗑', full: 'Tom threw the old wire away this morning', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'threw',ico:'🗑',c:'v'}, {t:'the old wire away this morning',ico:'🔌',c:'o'}], traceWord: 'wire' }
          ],
          qaList: [
            { q: 'What do you need for the new job?', scene: '📋🙋', ans: 'I need assistance with the preparation', opts: [{ txt: 'I need assistance with the preparation', ico: '🙋' }, { txt: 'I need a green umbrella', ico: '☂' }, { txt: 'I need a funny song', ico: '🎵' }] },
            { q: 'Which part of a bird helps it fly?', scene: '🦅', ans: 'The wing', opts: [{ txt: 'The wing', ico: '🦅' }, { txt: 'The chair', ico: '🪑' }, { txt: 'The pencil', ico: '✏' }] },
            { q: 'What do you hear at a funny show?', scene: '🎭😂', ans: 'I hear a lot of laughter', opts: [{ txt: 'I hear a lot of laughter', ico: '😂' }, { txt: 'I see a lot of rice', ico: '🍚' }, { txt: 'I eat a lot of snow', ico: '❄' }] },
            { q: 'Will the rain soil my shoes today?', scene: '🌧👟🧺', ans: 'It is unlikely today', opts: [{ txt: 'It is unlikely today', ico: '🤔' }, { txt: 'A thin layer of cream', ico: '🍰' }, { txt: 'On the third floor', ico: '🏢' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Phỏng vấn xin việc làm thêm',
            steps: [
              '<b>Bước 1:</b> Viết trên giấy 6 câu có cụm động từ như <i>"turn on the light"</i>, <i>"look after the shop"</i>, <i>"hand in the form"</i>, rồi gạch chân cụm động từ trong mỗi câu.',
              '<b>Bước 2:</b> Thử nói lại mỗi câu theo hai cách với danh từ và đại từ, ví dụ <i>"turn the light on"</i> và <i>"turn it on"</i>; ghi âm điện thoại để nghe lại phát âm.',
              '<b>Bước 3:</b> Cùng một bạn hoặc người nhà đóng vai buổi phỏng vấn xin việc làm thêm: người phỏng vấn hỏi 3 câu, bạn trả lời bằng câu có cụm động từ, rồi đổi vai.'
            ]
          }
        },
        {
          id: '5.14B', name: 'Bài 5.14B: Đồng nghiệp và công sở',
          grammar: {
            formulas: ['👦 I + ⚡ get along with + 🧑‍🤝‍🧑 my coworker', '👦 I + ⚡ put up with + 😬 noise', '🏢 We + ⚡ run out of + 📄 paper'],
            tip: 'Cụm động từ ba thành phần KHÔNG tách: luôn đi liền nhau (put up with, get along with, run out of) rồi mới đến tân ngữ!'
          },
          chunks: [
            { scene: '👧🧑‍🔬🏢', full: 'Lan gets along with the specialist at work', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'gets along with',ico:'🤝',c:'v'}, {t:'the specialist at work',ico:'🧑‍🔬',c:'o'}], traceWord: 'specialist' },
            { scene: '🛬📄🏢', full: 'We ran out of paper before the arrival of the boss', parts: [{t:'We',ico:'👥',c:'s'}, {t:'ran out of',ico:'📭',c:'v'}, {t:'paper before the arrival of the boss',ico:'🛬',c:'o'}], traceWord: 'arrival' },
            { scene: '😬🏢👦', full: 'I can\'t put up with the tension in this office', parts: [{t:'I',ico:'👦',c:'s'}, {t:'can\'t put up with',ico:'🙅',c:'v'}, {t:'the tension in this office',ico:'😬',c:'o'}], traceWord: 'tension' },
            { scene: '👦🧑‍🤝‍🧑🏢', full: 'Tom gets along with numerous people at work', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'gets along with',ico:'🤝',c:'v'}, {t:'numerous people at work',ico:'🔢',c:'o'}], traceWord: 'numerous' },
            { scene: '🪑🧱🏬', full: 'The shop ran out of solid wood chairs', parts: [{t:'The shop',ico:'🏬',c:'s'}, {t:'ran out of',ico:'📭',c:'v'}, {t:'solid wood chairs',ico:'🪑',c:'o'}], traceWord: 'solid' },
            { scene: '🤕👧⏳', full: 'Anna put up with a slight headache all day', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'put up with',ico:'💪',c:'v'}, {t:'a slight headache all day',ico:'🤕',c:'o'}], traceWord: 'slight' },
            { scene: '🏛🚢🤝', full: 'Tom gets along with the governor of the port', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'gets along with',ico:'🤝',c:'v'}, {t:'the governor of the port',ico:'🏛',c:'o'}], traceWord: 'governor' },
            { scene: '🌈👨‍🤝‍👨🏠', full: 'My gay uncle gets along with every neighbor', parts: [{t:'My gay uncle',ico:'🌈',c:'s'}, {t:'gets along with',ico:'🤝',c:'v'}, {t:'every neighbor',ico:'🏠',c:'o'}], traceWord: 'gay' }
          ],
          qaList: [
            { q: 'What is a symptom of a cold?', scene: '🤒', ans: 'A bad cough', opts: [{ txt: 'A bad cough', ico: '🤒' }, { txt: 'A red kite', ico: '🪁' }, { txt: 'A new bike', ico: '🚲' }] },
            { q: 'Which era is older, ancient or modern?', scene: '🕰', ans: 'The ancient era', opts: [{ txt: 'The ancient era', ico: '🕰' }, { txt: 'The modern era', ico: '🏙' }, { txt: 'A cup of tea', ico: '🍵' }] },
            { q: 'Does Tom owe you any money?', scene: '💸👦', ans: 'Yes, he owes me ten dollars', opts: [{ txt: 'Yes, he owes me ten dollars', ico: '💸' }, { txt: 'There is no trace of money', ico: '🔍' }, { txt: 'I\'m eleven years old', ico: '🎂' }] },
            { q: 'Can a prisoner leave the building?', scene: '⛓🏢', ans: 'No, rules restrict where he goes', opts: [{ txt: 'No, rules restrict where he goes', ico: '🚫' }, { txt: 'Yes, he is on the bus', ico: '🚌' }, { txt: 'It is a big cake', ico: '🎂' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Quy tắc ứng xử ở công sở',
            steps: [
              '<b>Bước 1:</b> Viết 5 câu về một văn phòng tưởng tượng, mỗi câu dùng một cụm: <i>"put up with"</i>, <i>"get along with"</i>, <i>"run out of"</i>.',
              '<b>Bước 2:</b> Làm một khảo sát nhỏ với 3 người thân hoặc bạn bè: <i>"Can you put up with noise?"</i> và <i>"Do you get along with everyone?"</i>, ghi kết quả vào bảng.',
              '<b>Bước 3:</b> Chọn một tình huống (hết giấy, đồng nghiệp ồn ào) và nói 1 phút để giải thích bạn sẽ xử lý thế nào bằng ba cụm động từ này, rồi ghi âm lại.'
            ]
          }
        },
        {
          id: '5.14C', name: 'Bài 5.14C: Kiếm tiền, tiêu tiền, tiết kiệm',
          grammar: {
            formulas: ['👦 I + ⚡ make + 📝 a plan', '👦 I + ⚡ do + 📚 homework', '👦 I + ⚡ take / have / get + 🎯 a walk / fun / a score'],
            tip: 'Trong tiếng Anh ta MAKE a plan nhưng DO homework, TAKE a walk, HAVE fun, GET money: cứ học theo cả cụm, đừng dịch từng chữ!'
          },
          chunks: [
            { scene: '💰📝👦', full: 'I make a plan whenever I get money', parts: [{t:'I',ico:'👦',c:'s'}, {t:'make',ico:'📝',c:'v'}, {t:'a plan whenever I get money',ico:'💰',c:'o'}], traceWord: 'whenever' },
            { scene: '🎒📚👧', full: 'A good pupil does the homework every day', parts: [{t:'A good pupil',ico:'🎒',c:'s'}, {t:'does',ico:'✅',c:'v'}, {t:'the homework every day',ico:'📚',c:'o'}], traceWord: 'pupil' },
            { scene: '👧💰📈', full: 'She makes a steady effort to save money', parts: [{t:'She',ico:'👧',c:'s'}, {t:'makes',ico:'📝',c:'v'}, {t:'a steady effort to save money',ico:'📈',c:'o'}], traceWord: 'steady' },
            { scene: '👦🚶🔁', full: 'I take a walk as part of my routine', parts: [{t:'I',ico:'👦',c:'s'}, {t:'take',ico:'🤲',c:'v'}, {t:'a walk as part of my routine',ico:'🔁',c:'o'}], traceWord: 'routine' },
            { scene: '👨💼🏃', full: 'Tom does the job at a slow pace', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'does',ico:'✅',c:'v'}, {t:'the job at a slow pace',ico:'🏃',c:'o'}], traceWord: 'pace' },
            { scene: '🌪🏠📝', full: 'We have to make a plan for the disaster', parts: [{t:'We',ico:'👥',c:'s'}, {t:'have to make',ico:'📝',c:'v'}, {t:'a plan for the disaster',ico:'🌪',c:'o'}], traceWord: 'disaster' },
            { scene: '🧮💯👦', full: 'I get a good score by using the formula', parts: [{t:'I',ico:'👦',c:'s'}, {t:'get',ico:'🎯',c:'v'}, {t:'a good score by using the formula',ico:'🧮',c:'o'}], traceWord: 'formula' },
            { scene: '📣⚽😄', full: 'The supporter has fun at every football match', parts: [{t:'The supporter',ico:'📣',c:'s'}, {t:'has',ico:'🤲',c:'v'}, {t:'fun at every football match',ico:'⚽',c:'o'}], traceWord: 'supporter' }
          ],
          qaList: [
            { q: 'Who can assist me to restore this old chair?', scene: '🪑🔧', ans: 'My dad can assist you', opts: [{ txt: 'My dad can assist you', ico: '🤝' }, { txt: 'A red umbrella', ico: '☂' }, { txt: 'Last Monday', ico: '📅' }] },
            { q: 'How do you persuade friends to eliminate waste?', scene: '🗣❌', ans: 'I make a clear plan', opts: [{ txt: 'I make a clear plan', ico: '📝' }, { txt: 'I take a bus', ico: '🚌' }, { txt: 'I have a blue hat', ico: '🧢' }] },
            { q: 'What can inspire you to do your best?', scene: '💡', ans: 'A story can fascinate me', opts: [{ txt: 'A story can fascinate me', ico: '🤩' }, { txt: 'A cold lemon', ico: '🍋' }, { txt: 'A bad cough', ico: '🤒' }] },
            { q: 'Why do we stare at the moon?', scene: '👀🌙', ans: 'It is a natural phenomenon', opts: [{ txt: 'It is a natural phenomenon', ico: '🌙' }, { txt: 'It is a pair of shoes', ico: '👟' }, { txt: 'It is on the desk', ico: '🪑' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật ký tiền bạc một tuần',
            steps: [
              '<b>Bước 1:</b> Ghi trong một tuần các việc bạn làm với tiền bằng cụm đúng: <i>"make a plan"</i>, <i>"do the shopping"</i>, <i>"take a bus"</i>, <i>"have lunch"</i>, <i>"get money"</i>.',
              '<b>Bước 2:</b> Mỗi tối viết 2 câu tiếng Anh về chi tiêu trong ngày, ví dụ <i>"I made a list and got a good price."</i>, rồi gạch chân động từ make, do, take, have, get.',
              '<b>Bước 3:</b> Cuối tuần nói cho bạn hoặc người nhà nghe kế hoạch tiết kiệm của bạn trong 1 phút, ghi âm và nghe lại để sửa các cụm dùng sai.'
            ]
          }
        }
      ]
    },
    '5.15': {
      lessons: [
        {
          id: '5.15A', name: 'Bài 5.15A: Phim hay đến mức nào',
          grammar: {
            formulas: ['🎬 The film + ⚡ was + 😢 so sad that I cried', '🎬 It + ⚡ was + 🎟 such a good film that I cried'],
            tip: 'SO + tính từ/trạng từ + THAT, còn SUCH + (a/an) + danh từ + THAT: cả hai đều nói kết quả, đừng nhầm so với such nhé!'
          },
          chunks: [
            { scene: '🎬😢😓', full: 'The movie was so sad that I felt guilty', parts: [{t:'The movie',ico:'🎬',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'so sad that I felt guilty',ico:'😓',c:'o'}], traceWord: 'guilty' },
            { scene: '👻🎬😨', full: 'It was such a good horror movie that it could scare you', parts: [{t:'It',ico:'🎬',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'such a good horror movie that it could scare you',ico:'😨',c:'o'}], traceWord: 'scare' },
            { scene: '😠🎬👀', full: 'His anger was so apparent that everyone saw it', parts: [{t:'His anger',ico:'😠',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'so apparent that everyone saw it',ico:'👁',c:'o'}], traceWord: 'apparent' },
            { scene: '🦸💪🏋', full: 'The hero trains so constantly that his muscles look huge', parts: [{t:'The hero',ico:'🦸',c:'s'}, {t:'trains',ico:'🏋',c:'v'}, {t:'so constantly that his muscles look huge',ico:'💪',c:'o'}], traceWord: 'muscles' },
            { scene: '⛰📏😮', full: 'It was such a high mountain that its height surprised us', parts: [{t:'It',ico:'⛰',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'such a high mountain that its height surprised us',ico:'📏',c:'o'}], traceWord: 'height' },
            { scene: '🏞🐟🎬', full: 'The stream in the movie was so clear that we saw fish', parts: [{t:'The stream in the movie',ico:'🏞',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'so clear that we saw fish',ico:'🐟',c:'o'}], traceWord: 'stream' },
            { scene: '🍺🔊🎬', full: 'The pub in the film was so noisy that we left', parts: [{t:'The pub in the film',ico:'🍺',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'so noisy that we left',ico:'🔊',c:'o'}], traceWord: 'pub' },
            { scene: '🎬🐢😴', full: 'The film was initially so slow that I almost slept', parts: [{t:'The film',ico:'🎬',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'initially so slow that I almost slept',ico:'😴',c:'o'}], traceWord: 'initially' }
          ],
          qaList: [
            { q: 'How did the actors speak?', scene: '🎭🗣🌿', ans: 'They spoke so naturally that I believed them', opts: [{txt:'They spoke so naturally that I believed them',ico:'🌿'}, {txt:'They did not speak at all',ico:'🤐'}, {txt:'They spoke in a pub',ico:'🍺'}] },
            { q: 'Does she often watch horror films?', scene: '👧👻🐢', ans: 'No, she rarely watches them', opts: [{txt:'No, she rarely watches them',ico:'🐢'}, {txt:'Yes, she watches them every day',ico:'📅'}, {txt:'Yes, she is a horror actor',ico:'🎭'}] },
            { q: 'Which word means the money of a country?', scene: '💱🌏💰', ans: 'currency', opts: [{txt:'currency',ico:'💱'}, {txt:'distinction',ico:'↔'}, {txt:'depression',ico:'😔'}] },
            { q: 'How did she feel after the happy ending?', scene: '👩🎬😊', ans: 'She felt such great satisfaction that she smiled', opts: [{txt:'She felt such great satisfaction that she smiled',ico:'😊'}, {txt:'She felt so cold that she cried',ico:'🥶'}, {txt:'She felt so hungry that she left',ico:'🍔'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Cuốn sổ đánh giá phim',
            steps: ['<b>Bước 1:</b> Chọn một bộ phim hoặc video em vừa xem. Viết ra 3 cảm xúc của em khi xem (buồn, sợ, vui...).', '<b>Bước 2:</b> Với mỗi cảm xúc, viết một câu theo mẫu <i>"The film was so ... that ..."</i> hoặc <i>"It was such a ... film that ..."</i>.', '<b>Bước 3:</b> Đọc 3 câu cho một bạn nghe, rồi hỏi bạn: bạn thích câu nào nhất và vì sao?']
          }
        },
        {
          id: '5.15B', name: 'Bài 5.15B: Chương trình bị hoãn',
          grammar: {
            formulas: ['📺 The show + ⚡ was late + 🌧 because of the rain', '📺 The show + ⚡ was late + ⛈ since / as it rained', '🏆 We won + 🙌 thanks to our team'],
            tip: 'Because of / due to / thanks to đi với danh từ, còn as / since đi với một câu đầy đủ; thanks to dùng cho nguyên nhân tốt!'
          },
          chunks: [
            { scene: '🖥⏰🌧', full: 'The demonstration was late because of the heavy rain', parts: [{t:'The demonstration',ico:'🖥',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'late because of the heavy rain',ico:'🌧',c:'o'}], traceWord: 'demonstration' },
            { scene: '🚉🚆⛈', full: 'The train waits at the platform due to the storm', parts: [{t:'The train',ico:'🚆',c:'s'}, {t:'waits',ico:'⏳',c:'v'}, {t:'at the platform due to the storm',ico:'🚉',c:'o'}], traceWord: 'platform' },
            { scene: '🗼🔩🏗', full: 'The tower is strong thanks to its steel foundation', parts: [{t:'The tower',ico:'🗼',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'strong thanks to its steel foundation',ico:'🔩',c:'o'}], traceWord: 'steel' },
            { scene: '🎨🏛🦋', full: 'The designer will transform the hall since it is old', parts: [{t:'The designer',ico:'🎨',c:'s'}, {t:'will transform',ico:'🦋',c:'v'}, {t:'the hall since it is old',ico:'🏛',c:'o'}], traceWord: 'transform' },
            { scene: '⚽🩹😖', full: 'The player left the game due to a wound and strain', parts: [{t:'The player',ico:'⚽',c:'s'}, {t:'left',ico:'🚶',c:'v'}, {t:'the game due to a wound and strain',ico:'🩹',c:'o'}], traceWord: 'wound' },
            { scene: '🥾🛢💧', full: 'We stopped on the trail since the water tank was empty', parts: [{t:'We',ico:'👫',c:'s'}, {t:'stopped',ico:'✋',c:'v'}, {t:'on the trail since the water tank was empty',ico:'🥾',c:'o'}], traceWord: 'tank' },
            { scene: '🎤🌟🤩', full: 'The show was remarkable as the singer had an extraordinary voice', parts: [{t:'The show',ico:'🎤',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'remarkable as the singer had an extraordinary voice',ico:'🤩',c:'o'}], traceWord: 'extraordinary' },
            { scene: '👤💌🐕', full: 'My adviser sent me an invitation since I breed dogs', parts: [{t:'My adviser',ico:'👤',c:'s'}, {t:'sent',ico:'📤',c:'v'}, {t:'me an invitation since I breed dogs',ico:'💌',c:'o'}], traceWord: 'invitation' }
          ],
          qaList: [
            { q: 'Why was the demonstration late?', scene: '🖥⏰🌧', ans: 'It was late because of the rain', opts: [{txt:'It was late because of the rain',ico:'🌧'}, {txt:'It was not late at all',ico:'⏰'}, {txt:'It was in the kitchen',ico:'🍳'}] },
            { q: 'Why did the train stop?', scene: '🚆🛑⛈', ans: 'It stopped due to the storm', opts: [{txt:'It stopped due to the storm',ico:'⛈'}, {txt:'It stopped to eat lunch',ico:'🍱'}, {txt:'It stopped to play a game',ico:'🎮'}] },
            { q: 'Why is she happy?', scene: '👩😊🤝', ans: 'She is happy thanks to her friends', opts: [{txt:'She is happy thanks to her friends',ico:'🤝'}, {txt:'She is happy because of the bad news',ico:'📰'}, {txt:'She is happy since she lost her bag',ico:'👜'}] },
            { q: 'Why did we stay home?', scene: '🏠❄🥶', ans: 'We stayed home as it was very cold', opts: [{txt:'We stayed home as it was very cold',ico:'🥶'}, {txt:'We went out as it was very cold',ico:'🚶'}, {txt:'We stayed home since it was a swimming day',ico:'🏊'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thông báo hoãn chương trình',
            steps: ['<b>Bước 1:</b> Tưởng tượng một buổi biểu diễn của lớp bị hoãn. Viết ra 3 lý do (mưa, bão, ốm...).', '<b>Bước 2:</b> Viết 3 câu thông báo bằng tiếng Anh, mỗi câu dùng một từ nối khác nhau: <i>"because of"</i>, <i>"due to"</i>, <i>"since"</i>.', '<b>Bước 3:</b> Ghi âm giọng em đọc thông báo như một phát thanh viên, rồi nghe lại và sửa chỗ phát âm chưa rõ.']
          }
        },
        {
          id: '5.15C', name: 'Bài 5.15C: Viết bài đánh giá phim, sách',
          grammar: {
            formulas: ['📖 Moreover, + 🎬 the story + ⚡ stems from a true event', '📖 Besides, / In addition, + 🎭 the hero + ⚡ must win', '🏁 Finally, + 🎬 the doctor + ⚡ stops the infection'],
            tip: 'Moreover, besides, in addition dùng để THÊM ý; finally dùng cho ý CUỐI cùng; nhớ đặt dấu phẩy sau chúng!'
          },
          chunks: [
            { scene: '📖🌾🏡', full: 'Moreover, the story stems from an agricultural town', parts: [{t:'Moreover, the story',ico:'📖',c:'s'}, {t:'stems',ico:'🌱',c:'v'}, {t:'from an agricultural town',ico:'🌾',c:'o'}], traceWord: 'stems' },
            { scene: '🦸🏁💪', full: 'Besides, the hero must overcome a strong competitor', parts: [{t:'Besides, the hero',ico:'🦸',c:'s'}, {t:'must overcome',ico:'💪',c:'v'}, {t:'a strong competitor',ico:'🏁',c:'o'}], traceWord: 'competitor' },
            { scene: '🎬🍺🚫', full: 'In addition, the film warns children about alcohol', parts: [{t:'In addition, the film',ico:'🎬',c:'s'}, {t:'warns',ico:'⚠',c:'v'}, {t:'children about alcohol',ico:'🍺',c:'o'}], traceWord: 'alcohol' },
            { scene: '👩‍⚕️🦠😊', full: 'Finally, the doctor stops the infection and everyone is happy', parts: [{t:'Finally, the doctor',ico:'👩‍⚕️',c:'s'}, {t:'stops',ico:'✋',c:'v'}, {t:'the infection and everyone is happy',ico:'🦠',c:'o'}], traceWord: 'infection' },
            { scene: '🚐🛣📈', full: 'Moreover, the van drives around a dangerous curve', parts: [{t:'Moreover, the van',ico:'🚐',c:'s'}, {t:'drives',ico:'🚗',c:'v'}, {t:'around a dangerous curve',ico:'📈',c:'o'}], traceWord: 'curve' },
            { scene: '⛵📝🌊', full: 'Besides, the sailor writes a log about the depth of the sea', parts: [{t:'Besides, the sailor',ico:'⛵',c:'s'}, {t:'writes',ico:'✍',c:'v'}, {t:'a log about the depth of the sea',ico:'🌊',c:'o'}], traceWord: 'depth' },
            { scene: '🦣📚🎞', full: 'In addition, the giant appears in a comic strip', parts: [{t:'In addition, the giant',ico:'🦣',c:'s'}, {t:'appears',ico:'👀',c:'v'}, {t:'in a comic strip',ico:'🎞',c:'o'}], traceWord: 'giant' },
            { scene: '👔🎬🙂', full: 'Finally, the vice president behaves badly in the last scene', parts: [{t:'Finally, the vice president',ico:'👔',c:'s'}, {t:'behaves',ico:'🙂',c:'v'}, {t:'badly in the last scene',ico:'🎬',c:'o'}], traceWord: 'vice' }
          ],
          qaList: [
            { q: 'Which word means the same as also?', scene: '➕💬', ans: 'Besides', opts: [{txt:'Besides',ico:'➕'}, {txt:'Because',ico:'❓'}, {txt:'Finally',ico:'🏁'}] },
            { q: 'Which word starts the last idea?', scene: '🏁📝', ans: 'Finally', opts: [{txt:'Finally',ico:'🏁'}, {txt:'First',ico:'1️⃣'}, {txt:'Similarly',ico:'🔁'}] },
            { q: 'Is the music in the cinema quiet?', scene: '🎬🔊🎵', ans: 'No, it is very loud', opts: [{txt:'No, it is very loud',ico:'🔊'}, {txt:'Yes, it is very quiet',ico:'🤫'}, {txt:'No, it is very cold',ico:'🥶'}] },
            { q: 'Which phrase adds one more idea?', scene: '➕💡', ans: 'In addition', opts: [{txt:'In addition',ico:'➕'}, {txt:'Because of',ico:'🌧'}, {txt:'Due to',ico:'⛈'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết bài đánh giá ngắn',
            steps: ['<b>Bước 1:</b> Chọn một cuốn sách hoặc bộ phim em thích. Ghi ra 3 điều em muốn khen hoặc chê.', '<b>Bước 2:</b> Viết bài đánh giá 4 câu: câu đầu giới thiệu, rồi nối ý bằng <i>"Moreover,"</i>, <i>"In addition,"</i> và kết thúc bằng <i>"Finally,"</i>.', '<b>Bước 3:</b> Đọc bài cho người thân nghe, rồi cho họ chấm 1 đến 5 sao và nói họ có muốn xem phim đó không.']
          }
        }
      ]
    },
    '5.16': {
      lessons: [
        {
          id: '5.16A', name: 'Bài 5.16A: So sánh hai nền nghệ thuật',
          grammar: {
            formulas: ['🎨 Art A + ⚡ is + ↔️ whereas + 🖼 Art B + ⚡ is', '🎵 Music is loud. + 🔄 On the other hand, + 🎨 painting is quiet', '🔄 In contrast, + 🖼 new art + ⚡ uses + 🔩 glass'],
            tip: 'Whereas nối hai vế trái ngược trong CÙNG một câu; On the other hand / In contrast đứng đầu câu mới và luôn có dấu phẩy phía sau!'
          },
          chunks: [
            { scene: '🗿🔩🎨', full: 'Old statues use iron whereas newly painted art uses glass', parts: [{t:'Old statues',ico:'🗿',c:'s'}, {t:'use',ico:'⚡',c:'v'}, {t:'iron whereas newly painted art uses glass',ico:'🔩',c:'o'}], traceWord: 'iron' },
            { scene: '🏛🖼🏖', full: 'The museum has a large quantity of art whereas the resort has beaches', parts: [{t:'The museum',ico:'🏛',c:'s'}, {t:'has',ico:'⚡',c:'v'}, {t:'a large quantity of art whereas the resort has beaches',ico:'🏖',c:'o'}], traceWord: 'quantity' },
            { scene: '📺🆓🪪', full: 'Watching the broadcast is free whereas membership costs money', parts: [{t:'Watching the broadcast',ico:'📺',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'free whereas membership costs money',ico:'🪪',c:'o'}], traceWord: 'membership' },
            { scene: '🦯👩‍🎨💎', full: 'A blind artist feels shape whereas a painter uses pure color', parts: [{t:'A blind artist',ico:'🦯',c:'s'}, {t:'feels',ico:'✋',c:'v'}, {t:'shape whereas a painter uses pure color',ico:'💎',c:'o'}], traceWord: 'pure' },
            { scene: '🎤⏱📊', full: 'The speaker briefly explained efficiency whereas the artist explained beauty', parts: [{t:'The speaker',ico:'🎤',c:'s'}, {t:'briefly explained',ico:'⏱',c:'v'}, {t:'efficiency whereas the artist explained beauty',ico:'📊',c:'o'}], traceWord: 'briefly' },
            { scene: '🏚🤝🎨', full: 'Poverty hurts artists whereas a sponsor helps them', parts: [{t:'Poverty',ico:'🏚',c:'s'}, {t:'hurts',ico:'💔',c:'v'}, {t:'artists whereas a sponsor helps them',ico:'🤝',c:'o'}], traceWord: 'sponsor' },
            { scene: '🤝🖼👢', full: 'The dealer sells paintings whereas the shop sells one boot', parts: [{t:'The dealer',ico:'🤝',c:'s'}, {t:'sells',ico:'💰',c:'v'}, {t:'paintings whereas the shop sells one boot',ico:'👢',c:'o'}], traceWord: 'boot' },
            { scene: '🗺🎯🖼', full: 'The old map is accurate whereas the new picture is wrong', parts: [{t:'The old map',ico:'🗺',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'accurate whereas the new picture is wrong',ico:'🎯',c:'o'}], traceWord: 'accurate' }
          ],
          qaList: [
            { q: 'Which word shows contrast?', scene: '↔️', ans: 'whereas', opts: [{txt:'whereas',ico:'↔️'}, {txt:'because',ico:'➡️'}, {txt:'and',ico:'➕'}] },
            { q: 'Music is loud. In contrast, a painting is what?', scene: '🎵🖼', ans: 'A painting is quiet', opts: [{txt:'A painting is quiet',ico:'🤫'}, {txt:'A painting is loud',ico:'📢'}, {txt:'A painting is angry',ico:'😡'}] },
            { q: 'Which phrase means the same as in contrast?', scene: '🔄', ans: 'on the other hand', opts: [{txt:'on the other hand',ico:'🔄'}, {txt:'in the morning',ico:'🌅'}, {txt:'at the airport',ico:'✈️'}] },
            { q: 'Which sentence uses whereas well?', scene: '✍️', ans: 'I like drawing whereas he likes dancing', opts: [{txt:'I like drawing whereas he likes dancing',ico:'✅'}, {txt:'I like whereas drawing he dancing',ico:'❌'}, {txt:'Whereas I drawing like he',ico:'❌'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Hai nghệ thuật, hai thế giới',
            steps: [
              '<b>Bước 1:</b> Chọn hai loại nghệ thuật em biết (ví dụ tranh và nhạc). Viết ra 3 điểm khác nhau của chúng ra giấy.',
              '<b>Bước 2:</b> Viết 3 câu so sánh bằng whereas, ví dụ <i>"Music is loud whereas a painting is quiet."</i> rồi viết thêm 1 câu dùng <i>"On the other hand"</i> hoặc <i>"In contrast"</i>.',
              '<b>Bước 3:</b> Đọc to các câu cho một bạn hoặc người thân nghe, hoặc ghi âm lại. Nhờ họ đoán xem em đang so sánh hai thứ gì.'
            ]
          }
        },
        {
          id: '5.16B', name: 'Bài 5.16B: Trò chuyện về buổi triển lãm',
          grammar: {
            formulas: ['👦 I am + ✅ right, + ❓ aren\'t I?', '🤝 Let\'s + ✋ go, + ❓ shall we?', '📢 Drag it, + ❓ will you? | 🚫 Nobody comes, + ❓ do they?'],
            tip: 'I am → aren\'t I; Let\'s → shall we; câu mệnh lệnh → will you; Nobody → do they (dùng they, vế đầu không phủ định); giọng lên là hỏi thật, giọng xuống là chờ bạn đồng ý!'
          },
          chunks: [
            { scene: '👦🔍✅', full: 'I am right about the discovery, aren\'t I', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am',ico:'⚡',c:'v'}, {t:'right about the discovery, aren\'t I',ico:'🔍',c:'o'}], traceWord: 'discovery' },
            { scene: '🤝✋🎫', full: 'Let\'s grab a ticket for the show, shall we', parts: [{t:'Let\'s',ico:'🤝',c:'s'}, {t:'grab',ico:'✋',c:'v'}, {t:'a ticket for the show, shall we',ico:'🎫',c:'o'}], traceWord: 'grab' },
            { scene: '🚫🎒😓', full: 'Nobody wants to carry this heavy burden, do they', parts: [{t:'Nobody',ico:'🚫',c:'s'}, {t:'wants',ico:'💭',c:'v'}, {t:'to carry this heavy burden, do they',ico:'🎒',c:'o'}], traceWord: 'burden' },
            { scene: '💻📁🧲', full: 'Drag the digital file to the folder, will you', parts: [{t:'Drag',ico:'🧲',c:'v'}, {t:'the digital file to the folder,',ico:'💻',c:'o'}, {t:'will you',ico:'❓',c:'s'}], traceWord: 'digital' },
            { scene: '👦🌐📖', full: 'You occasionally translate old poems for the class, don\'t you', parts: [{t:'You',ico:'👦',c:'s'}, {t:'occasionally translate',ico:'🌐',c:'v'}, {t:'old poems for the class, don\'t you',ico:'📖',c:'o'}], traceWord: 'occasionally' },
            { scene: '🏢🧠🎨', full: 'The establishment has a clear philosophy, hasn\'t it', parts: [{t:'The establishment',ico:'🏢',c:'s'}, {t:'has',ico:'⚡',c:'v'}, {t:'a clear philosophy, hasn\'t it',ico:'🧠',c:'o'}], traceWord: 'philosophy' },
            { scene: '✅🏦💵', full: 'Your approval is needed for the deposit, isn\'t it', parts: [{t:'Your approval',ico:'✅',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'needed for the deposit, isn\'t it',ico:'🏦',c:'o'}], traceWord: 'approval' },
            { scene: '🪨✏️🖍', full: 'This rough drawing characterizes the artist, doesn\'t it', parts: [{t:'This rough drawing',ico:'🪨',c:'s'}, {t:'characterizes',ico:'🖍',c:'v'}, {t:'the artist, doesn\'t it',ico:'👩‍🎨',c:'o'}], traceWord: 'rough' }
          ],
          qaList: [
            { q: 'What is the exact time of the show?', scene: '📏⏰', ans: 'It is at six', opts: [{txt:'It is at six',ico:'⏰'}, {txt:'It is a cat',ico:'🐱'}, {txt:'It is green',ico:'🟢'}] },
            { q: 'What is the frequency of the art club?', scene: '📶📅', ans: 'It meets every week', opts: [{txt:'It meets every week',ico:'📅'}, {txt:'It is a blue bag',ico:'🎒'}, {txt:'It is a big tree',ico:'🌳'}] },
            { q: 'Nobody comes, ... ?', scene: '🚫🚶', ans: 'do they', opts: [{txt:'do they',ico:'✅'}, {txt:'don\'t they',ico:'❌'}, {txt:'are you',ico:'❌'}] },
            { q: 'After a long illness, how is her recovery?', scene: '📈🏥', ans: 'Her recovery is good', opts: [{txt:'Her recovery is good',ico:'👍'}, {txt:'Her recovery is a pencil',ico:'✏️'}, {txt:'Her recovery are good',ico:'❌'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đi triển lãm cùng bạn',
            steps: [
              '<b>Bước 1:</b> Tưởng tượng em và bạn đang đi xem một buổi triển lãm. Viết 4 câu nhận xét về tranh, ví dụ <i>"The painting is great."</i>',
              '<b>Bước 2:</b> Thêm câu hỏi đuôi vào mỗi câu: <i>"I am right, aren\'t I?"</i>, <i>"Let\'s go, shall we?"</i>, <i>"Open the door, will you?"</i>, <i>"Nobody is late, are they?"</i>',
              '<b>Bước 3:</b> Cùng một bạn hoặc người thân đóng vai khách tham quan và hỏi đáp thử. Thử cả giọng lên (hỏi thật) và giọng xuống (xin đồng ý), có thể ghi âm lại để nghe.'
            ]
          }
        },
        {
          id: '5.16C', name: 'Bài 5.16C: Nghệ sĩ mình ngưỡng mộ',
          grammar: {
            formulas: ['👉 It was + 🎨 Mount Fuji + 🔗 that + 👩‍🎨 she painted', '💖 What I like + ⚡ is + ✨ the new angle', '👉 It was + 😰 anxiety + 🔗 that + 🛑 stopped him'],
            tip: 'Muốn nhấn mạnh điều gì, đặt nó giữa It was ... that; hoặc dùng What I like is ... để nói điều em thích nhất!'
          },
          chunks: [
            { scene: '🗻🎨👩‍🎨', full: 'It was Mount Fuji that the artist painted', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'Mount Fuji that the artist painted',ico:'🗻',c:'o'}], traceWord: 'painted' },
            { scene: '💖👯🎨', full: 'What I like is the work of the twin sisters', parts: [{t:'What I like',ico:'💖',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'the work of the twin sisters',ico:'👯',c:'o'}], traceWord: 'twin' },
            { scene: '📜👴🙄', full: 'It was the historian that said art is never stupid', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'the historian that said art is never stupid',ico:'📜',c:'o'}], traceWord: 'historian' },
            { scene: '🧩🎨✨', full: 'What constitutes good art is its visual power', parts: [{t:'What constitutes good art',ico:'🧩',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'its visual power',ico:'🎨',c:'o'}], traceWord: 'visual' },
            { scene: '🦠😰🏠', full: 'It was a virus and not anxiety that stopped him', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'a virus and not anxiety that stopped him',ico:'🦠',c:'o'}], traceWord: 'virus' },
            { scene: '👩‍🎨🖼🎓', full: 'It was in portraits that she wanted to specialize', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'in portraits that she wanted to specialize',ico:'🎓',c:'o'}], traceWord: 'specialize' },
            { scene: '📐🖼✨', full: 'It was a new angle that made the picture special', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'a new angle that made the picture special',ico:'📐',c:'o'}], traceWord: 'angle' },
            { scene: '💝⭐🖼', full: 'What the charity wants is real significance', parts: [{t:'What the charity wants',ico:'💝',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'real significance',ico:'⭐',c:'o'}], traceWord: 'charity' }
          ],
          qaList: [
            { q: 'What does a mount hold?', scene: '🗻📷', ans: 'It holds a camera', opts: [{txt:'It holds a camera',ico:'📷'}, {txt:'It holds a cold',ico:'🤧'}, {txt:'It holds a song',ico:'🎵'}] },
            { q: 'What Lan likes for lunch is a wrap. What does she like?', scene: '🌯👧', ans: 'A chicken wrap', opts: [{txt:'A chicken wrap',ico:'🌯'}, {txt:'A paper door',ico:'🚪'}, {txt:'A wooden shoe',ico:'👞'}] },
            { q: 'What I need after surgery is moderate rest. What do I need?', scene: '🏥🛏', ans: 'You need moderate rest', opts: [{txt:'You need moderate rest',ico:'🛏'}, {txt:'You need a loud drum',ico:'🥁'}, {txt:'You need a big storm',ico:'⛈'}] },
            { q: 'Which word means the opposite of independent?', scene: '🔗🆓', ans: 'dependent', opts: [{txt:'dependent',ico:'🔗'}, {txt:'famous',ico:'🌟'}, {txt:'yellow',ico:'🟡'}] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nghệ sĩ trong lòng em',
            steps: [
              '<b>Bước 1:</b> Chọn một nghệ sĩ em ngưỡng mộ (họa sĩ, ca sĩ, nhà văn...). Tìm 3 điều về người đó và ghi lại bằng tiếng Việt.',
              '<b>Bước 2:</b> Viết 4 câu tiếng Anh nhấn mạnh, ví dụ <i>"What I like is the music."</i> và <i>"It was his song that I loved."</i>',
              '<b>Bước 3:</b> Đứng trước gương hoặc trước một người bạn, thuyết trình 1 phút về nghệ sĩ đó. Có thể ghi âm lại và nghe để sửa phát âm.'
            ]
          }
        }
      ]
    },
    '5.17': {
      lessons: [
        {
        id: '5.17A',
        name: 'Bài 5.17A: Tự học và giúp đỡ nhau',
        grammar: {
        formulas: ['👦 I + 📖 teach + 🙋 myself', '👭 They + 🤝 help + 💞 each other', '👨‍🎓 The students + 🔄 adapt + 🙋 themselves'],
        tip: 'Mẹo: người làm và người nhận là MỘT thì dùng myself, himself, themselves; hai người giúp qua lại thì dùng each other hoặc one another!'
        },
        chunks: [
        { scene: '👦📖🗣', full: 'I teach myself new words with a short dialog.', parts: [{t:'I',ico:'👦',c:'s'},{t:'teach',ico:'📖',c:'v'},{t:'myself new words with a short dialog',ico:'🗣',c:'o'}], traceWord: 'dialog' },
        { scene: '👭🎓🤝', full: 'We help each other after the long lecture today.', parts: [{t:'We',ico:'👭',c:'s'},{t:'help',ico:'🤝',c:'v'},{t:'each other after the long lecture today',ico:'🎓',c:'o'}], traceWord: 'lecture' },
        { scene: '👦🤕🏖', full: 'Nam hurt himself while running on the soft sand.', parts: [{t:'Nam',ico:'👦',c:'s'},{t:'hurt',ico:'🤕',c:'v'},{t:'himself while running on the soft sand',ico:'🏖',c:'o'}], traceWord: 'sand' },
        { scene: '👭💬⛅', full: 'Lan and Mai tell each other the weather forecast.', parts: [{t:'Lan and Mai',ico:'👭',c:'s'},{t:'tell',ico:'💬',c:'v'},{t:'each other the weather forecast',ico:'⛅',c:'o'}], traceWord: 'forecast' },
        { scene: '👨‍🎓🔄🏫', full: 'The students adapt themselves to the rapid change at school.', parts: [{t:'The students',ico:'👨‍🎓',c:'s'},{t:'adapt',ico:'🔄',c:'v'},{t:'themselves to the rapid change at school',ico:'⚡',c:'o'}], traceWord: 'adapt' },
        { scene: '🧹🗑🏭', full: 'The team cleaned the mess in the compound by themselves.', parts: [{t:'The team',ico:'👥',c:'s'},{t:'cleaned',ico:'🧹',c:'v'},{t:'the mess in the compound by themselves',ico:'🏭',c:'o'}], traceWord: 'mess' },
        { scene: '🏅⚽🤝', full: 'We will not cancel the league match, but we trust each other.', parts: [{t:'We',ico:'👭',c:'s'},{t:'will not cancel',ico:'❌',c:'v'},{t:'the league match, but we trust each other',ico:'🏅',c:'o'}], traceWord: 'league' },
        { scene: '🛟🧭💥', full: 'The eastern rescue team reacts fast and trusts one another.', parts: [{t:'The eastern rescue team',ico:'🛟',c:'s'},{t:'reacts',ico:'💥',c:'v'},{t:'fast and trusts one another',ico:'🤝',c:'o'}], traceWord: 'rescue' }
        ],
        qaList: [
        { q: 'Who did Nam hurt on the sand?', scene: '👦🤕🏖', ans: 'He hurt himself.', opts: [{txt:'He hurt himself.',ico:'🤕'},{txt:'He hurt each other.',ico:'🙅'},{txt:'He hurt yourselves.',ico:'🙅'}] },
        { q: 'What is your preference for studying, alone or together?', scene: '📚👭', ans: 'My preference is to study with a friend.', opts: [{txt:'My preference is to study with a friend.',ico:'👭'},{txt:'My rescue is to study with a friend.',ico:'🛟'},{txt:'My league is the eastern lecture.',ico:'🏅'}] },
        { q: 'How do the two friends help when they study?', scene: '👭📚', ans: 'They help each other.', opts: [{txt:'They help each other.',ico:'🤝'},{txt:'They help myself.',ico:'🙅'},{txt:'They help yourself.',ico:'🙅'}] },
        { q: 'Why does everyone like Mai\'s charm?', scene: '👧✨😊', ans: 'She is kind and always smiles at others.', opts: [{txt:'She is kind and always smiles at others.',ico:'😊'},{txt:'She never talks and always runs away.',ico:'🏃'},{txt:'She is kind and always hits others.',ico:'👊'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Cặp đôi tự học',
        steps: ['<b>Bước 1:</b> Mỗi bạn viết 3 câu về việc mình tự học, ví dụ <i>"I teach myself new words."</i>', '<b>Bước 2:</b> Đổi vở cho bạn cùng học, hai bạn sửa lỗi giúp nhau và nói <i>"We help each other."</i>', '<b>Bước 3:</b> Ghi âm một đoạn hội thoại ngắn dùng myself, themselves và each other, rồi nghe lại cùng nhau.']
        }
        },
        {
        id: '5.17B',
        name: 'Bài 5.17B: Điều làm được và được phép',
        grammar: {
        formulas: ['👦 Nam + 💪 is able to + 🏊 swim', '👧 Mai + 🧗 managed to + 🏔 climb', '👨‍🎓 We + ✅ are allowed to + 📓 read'],
        tip: 'Mẹo: be able to nói về khả năng, managed to là đã làm được sau khi cố gắng, còn be allowed to là được phép làm gì!'
        },
        chunks: [
        { scene: '👦🏊🌉', full: 'Nam is able to swim beneath the bridge.', parts: [{t:'Nam',ico:'👦',c:'s'},{t:'is able to swim',ico:'🏊',c:'v'},{t:'beneath the bridge',ico:'🌉',c:'o'}], traceWord: 'beneath' },
        { scene: '👧🍬✋', full: 'Lan was able to resist the candy after dinner.', parts: [{t:'Lan',ico:'👧',c:'s'},{t:'was able to resist',ico:'✋',c:'v'},{t:'the candy after dinner',ico:'🍬',c:'o'}], traceWord: 'resist' },
        { scene: '👦🗑⚫', full: 'The boy managed to get rid of the old coal.', parts: [{t:'The boy',ico:'👦',c:'s'},{t:'managed to get rid of',ico:'🗑',c:'v'},{t:'the old coal',ico:'⚫',c:'o'}], traceWord: 'coal' },
        { scene: '👨‍🎓📓🏫', full: 'We are allowed to read the journal in class.', parts: [{t:'We',ico:'👨‍🎓',c:'s'},{t:'are allowed to read',ico:'✅',c:'v'},{t:'the journal in class',ico:'📓',c:'o'}], traceWord: 'journal' },
        { scene: '👧🧗⛰', full: 'Mai managed to climb the hill, but she did not dare look down.', parts: [{t:'Mai',ico:'👧',c:'s'},{t:'managed to climb',ico:'🧗',c:'v'},{t:'the hill, but she did not dare look down',ico:'⛰',c:'o'}], traceWord: 'dare' },
        { scene: '🧑🎤💯🔁', full: 'You will be able to speak with absolute confidence after frequent practice.', parts: [{t:'You',ico:'🧑',c:'s'},{t:'will be able to speak',ico:'🎤',c:'v'},{t:'with absolute confidence after frequent practice',ico:'💯',c:'o'}], traceWord: 'frequent' },
        { scene: '👥🛡💡', full: 'The team was able to counter the problem with impressive speed.', parts: [{t:'The team',ico:'👥',c:'s'},{t:'was able to counter',ico:'🛡',c:'v'},{t:'the problem with impressive speed',ico:'👏',c:'o'}], traceWord: 'counter' },
        { scene: '🙋💡🧗', full: 'Everyone is allowed to join the awareness talk about survival.', parts: [{t:'Everyone',ico:'🙋',c:'s'},{t:'is allowed to join',ico:'✅',c:'v'},{t:'the awareness talk about survival',ico:'💡',c:'o'}], traceWord: 'awareness' }
        ],
        qaList: [
        { q: 'Which person is able to fix the motor?', scene: '👦⚙🔧', ans: 'Tom is able to fix the motor.', opts: [{txt:'Tom is able to fix the motor.',ico:'⚙'},{txt:'The motor is able to fix Tom.',ico:'🙅'},{txt:'Tom is able to eat the motor.',ico:'🙅'}] },
        { q: 'Is the sign visible from far away?', scene: '🪧👁', ans: 'Yes, it is visible, so we are able to read it.', opts: [{txt:'Yes, it is visible, so we are able to read it.',ico:'👁'},{txt:'No, we are not able to see it.',ico:'🙈'},{txt:'Yes, it can sleep far away.',ico:'😴'}] },
        { q: 'Do you have a tendency to forget things?', scene: '🔑🤔', ans: 'Yes, I have a tendency to forget my keys.', opts: [{txt:'Yes, I have a tendency to forget my keys.',ico:'🔑'},{txt:'Yes, I have a tendency to drink my keys.',ico:'🥤'},{txt:'No, my keys are able to forget me.',ico:'🙅'}] },
        { q: 'Does your family possess a big garden?', scene: '🏡🌳', ans: 'Yes, we possess a big garden.', opts: [{txt:'Yes, we possess a big garden.',ico:'🌳'},{txt:'Yes, the garden possesses we.',ico:'🙅'},{txt:'Yes, a garden is able to eat.',ico:'🙅'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Tôi làm được gì, tôi được phép gì',
        steps: ['<b>Bước 1:</b> Viết hai cột trên giấy: cột "I am able to..." (điều em làm được) và cột "I am allowed to..." (điều em được phép làm ở nhà).', '<b>Bước 2:</b> Hỏi một người trong nhà và ghi thêm 2 câu của họ, ví dụ <i>"You are allowed to use the phone after dinner."</i>', '<b>Bước 3:</b> Nhớ một việc khó em đã cố gắng và làm được, kể lại bằng <i>"I managed to..."</i> rồi ghi âm.']
        }
        },
        {
        id: '5.17C',
        name: 'Bài 5.17C: Việc không cần làm hóa ra đã làm',
        grammar: {
        formulas: ['👦 He + 🙅 didn\'t need to + 🚆 use', '👧 She + 😮 need not have + 💸 paid', '👨‍🏫 Tom + ⏳ need not have + 🕐 waited'],
        tip: 'Mẹo: didn\'t need to là không cần làm; need not have + V3 là đã lỡ làm rồi mà thật ra không cần!'
        },
        chunks: [
        { scene: '👭🚆🚶', full: 'We didn\'t need to use the rail, so we walked.', parts: [{t:'We',ico:'👭',c:'s'},{t:'didn\'t need to use',ico:'🙅',c:'v'},{t:'the rail, so we walked',ico:'🚆',c:'o'}], traceWord: 'rail' },
        { scene: '🛍💸📏', full: 'The buyer need not have paid extra for the measurement.', parts: [{t:'The buyer',ico:'🛍',c:'s'},{t:'need not have paid',ico:'💸',c:'v'},{t:'extra for the measurement',ico:'📏',c:'o'}], traceWord: 'buyer' },
        { scene: '👧🎈💥', full: 'Mai need not have worried when the balloon burst.', parts: [{t:'Mai',ico:'👧',c:'s'},{t:'need not have worried',ico:'😱',c:'v'},{t:'when the balloon burst',ico:'💥',c:'o'}], traceWord: 'burst' },
        { scene: '👭🤝📋', full: 'They didn\'t need to compromise because their mutual plan was good.', parts: [{t:'They',ico:'👭',c:'s'},{t:'didn\'t need to compromise',ico:'🤝',c:'v'},{t:'because their mutual plan was good',ico:'📋',c:'o'}], traceWord: 'mutual' },
        { scene: '👧❤💪', full: 'Lan need not have worked so hard, but her passion helped her.', parts: [{t:'Lan',ico:'👧',c:'s'},{t:'need not have worked',ico:'💼',c:'v'},{t:'so hard, but her passion helped her',ico:'❤',c:'o'}], traceWord: 'passion' },
        { scene: '👨‍🏫🚀🏆', full: 'The coach didn\'t need to motivate the champion today.', parts: [{t:'The coach',ico:'👨‍🏫',c:'s'},{t:'didn\'t need to motivate',ico:'🚀',c:'v'},{t:'the champion today',ico:'🏆',c:'o'}], traceWord: 'champion' },
        { scene: '👦📣🧪', full: 'Tom need not have waited for the announcement in the laboratory.', parts: [{t:'Tom',ico:'👦',c:'s'},{t:'need not have waited',ico:'⏳',c:'v'},{t:'for the announcement in the laboratory',ico:'🧪',c:'o'}], traceWord: 'announcement' },
        { scene: '👩🙏📣', full: 'Anna didn\'t need to dedicate her weekend to the promotion plan.', parts: [{t:'Anna',ico:'👩',c:'s'},{t:'didn\'t need to dedicate',ico:'🙏',c:'v'},{t:'her weekend to the promotion plan',ico:'📣',c:'o'}], traceWord: 'dedicate' }
        ],
        qaList: [
        { q: 'What did the team accomplish yesterday?', scene: '👥✅', ans: 'They accomplished the whole job.', opts: [{txt:'They accomplished the whole job.',ico:'✅'},{txt:'They accomplished a cold window.',ico:'🪟'},{txt:'They accomplished to the sky.',ico:'☁'}] },
        { q: 'What is one weakness you need to improve?', scene: '😓📚', ans: 'My weakness is that I forget new words.', opts: [{txt:'My weakness is that I forget new words.',ico:'📚'},{txt:'My weakness is a very tall bridge.',ico:'🌉'},{txt:'My weakness is a very fast train.',ico:'🚆'}] },
        { q: 'Anna took an umbrella, but it did not rain. What can we say?', scene: '☂☀👩', ans: 'She need not have taken an umbrella.', opts: [{txt:'She need not have taken an umbrella.',ico:'☂'},{txt:'She must have taken the rain.',ico:'🌧'},{txt:'She was able to rain the umbrella.',ico:'🙅'}] },
        { q: 'Tom bought extra food, but nobody ate it. What can we say?', scene: '👦🍱🛒', ans: 'Tom need not have bought extra food.', opts: [{txt:'Tom need not have bought extra food.',ico:'🍱'},{txt:'Tom must not buy food yesterday.',ico:'🙅'},{txt:'Nobody bought Tom extra food.',ico:'🙅'}] }
        ],
        parentGame: {
        title: '🎲 Hoạt động Đời thực (12 phút): Việc lỡ làm thừa',
        steps: ['<b>Bước 1:</b> Nhớ 3 việc em đã làm tuần này nhưng hóa ra không cần, ví dụ mang áo mưa mà trời nắng, và ghi vào vở.', '<b>Bước 2:</b> Viết mỗi việc thành câu <i>"I need not have brought a raincoat."</i> và một câu <i>"I didn\'t need to..."</i> cho việc em biết trước là không cần.', '<b>Bước 3:</b> Đọc các câu cho bạn hoặc người nhà nghe, rồi cùng đoán xem câu nào là việc đã lỡ làm.']
        }
        }
      ]
    },
    '5.18': {
      lessons: [
        {id: '5.18A', name: 'Bài 5.18A: Phàn nàn chuyện đang làm phiền', grammar: {formulas: ['👦 I + ⚡ wish + 👥 he would + 🛑 stop it', '😩 If only + 👧 she + ⚡ would + 🤫 stay silent'], tip: 'Wish / if only + would = "ước gì ai đó thay đổi" • phàn nàn chuyện người khác làm, đừng dùng cho chính mình!'}, chunks: [{scene: '👦😠👊', full: 'I wish he would stop that aggressive behavior', parts: [{t: 'I', ico: '👦', c: 's'}, {t: 'wish', ico: '🙏', c: 'v'}, {t: 'he would stop that aggressive behavior', ico: '😠', c: 'o'}], traceWord: 'aggressive'}, {scene: '👧👀📱', full: 'I wish you would not glance at my phone', parts: [{t: 'I', ico: '👦', c: 's'}, {t: 'wish', ico: '🙏', c: 'v'}, {t: 'you would not glance at my phone', ico: '👀', c: 'o'}], traceWord: 'glance'}, {scene: '👧😳🏫', full: 'I wish she would not embarrass me in class', parts: [{t: 'I', ico: '👦', c: 's'}, {t: 'wish', ico: '🙏', c: 'v'}, {t: 'she would not embarrass me in class', ico: '😳', c: 'o'}], traceWord: 'embarrass'}, {scene: '👦👏🌟', full: 'If only he would give me some praise', parts: [{t: 'If only he', ico: '👦', c: 's'}, {t: 'would give', ico: '🎁', c: 'v'}, {t: 'me some praise', ico: '👏', c: 'o'}], traceWord: 'praise'}, {scene: '👧🤫🎻', full: 'If only my sister would stay silent when I play classical music', parts: [{t: 'If only my sister', ico: '👧', c: 's'}, {t: 'would stay', ico: '⚡', c: 'v'}, {t: 'silent when I play classical music', ico: '🎻', c: 'o'}], traceWord: 'classical'}, {scene: '🏢📚🗂', full: 'I wish the publisher would modify the book format', parts: [{t: 'I wish', ico: '🙏', c: 's'}, {t: 'the publisher would modify', ico: '🔧', c: 'v'}, {t: 'the book format', ico: '🗂', c: 'o'}], traceWord: 'publisher'}, {scene: '⛽🔊😫', full: 'If only the old pump would stop making that loud noise', parts: [{t: 'If only the old pump', ico: '⛽', c: 's'}, {t: 'would stop', ico: '🛑', c: 'v'}, {t: 'making that loud noise', ico: '🔊', c: 'o'}], traceWord: 'pump'}, {scene: '👔📚💰', full: 'I wish a literary profession would pay more money', parts: [{t: 'I', ico: '👦', c: 's'}, {t: 'wish', ico: '🙏', c: 'v'}, {t: 'a literary profession would pay more money', ico: '👔', c: 'o'}], traceWord: 'profession'}], qaList: [{q: 'What do you wish about the people who govern our city?', scene: '🏛🏙', ans: 'I wish they would listen to young people', opts: [{txt: 'I wish they would listen to young people', ico: '👂'}, {txt: 'We go to the zoo with our class', ico: '🐒'}, {txt: 'She is swimming in the sea today', ico: '🏊'}]}, {q: 'Why does Lan have black hair like her mother?', scene: '👩🧬👧', ans: 'It is genetic, so her mother has the same hair', opts: [{txt: 'It is genetic, so her mother has the same hair', ico: '🧬'}, {txt: 'The bus is late because of rain', ico: '🚌'}, {txt: 'My brother is cooking rice in the kitchen', ico: '🍚'}]}, {q: 'What kind of sale does the shop have today?', scene: '🛍⚡', ans: 'It is a flash sale, so it ends soon', opts: [{txt: 'It is a flash sale, so it ends soon', ico: '⚡'}, {txt: 'It is a big black dog in the park', ico: '🐕'}, {txt: 'My brother is cooking rice in the kitchen', ico: '🍚'}]}, {q: 'What can you use when you do not know the word?', scene: '👋🤔', ans: 'I can use a gesture to show my idea', opts: [{txt: 'I can use a gesture to show my idea', ico: '👋'}, {txt: 'I eat a red apple every morning', ico: '🍎'}, {txt: 'We go to the zoo with our class', ico: '🐒'}]}], parentGame: {title: 'Hoạt động Đời thực (12 phút): Hộp Điều Ước Phàn Nàn', steps: ['<b>Bước 1:</b> Viết 4 điều làm phiền hằng ngày ở nhà hoặc lớp (ồn ào, quên đồ, nói to...) lên 4 mẩu giấy nhỏ, bỏ vào một cái hộp.', '<b>Bước 2:</b> Bốc từng mẩu giấy và nói một câu phàn nàn lịch sự, ví dụ <i>"I wish you would stop making noise."</i> hoặc <i>"If only he would listen."</i>', '<b>Bước 3:</b> Cùng bạn hoặc người nhà chọn câu hay nhất, ghi âm lại bằng điện thoại và nghe lại để sửa phát âm.']}},
        {id: '5.18B', name: 'Bài 5.18B: Nên làm gì ngay bây giờ', grammar: {formulas: ['👦 I + ⚡ had better + 📚 study now', '👧 She + ⚡ would rather + 🎵 sing', '⏰ It is time + 👥 we + 🕒 started (quá khứ)'], tip: 'Had better / would rather + động từ nguyên mẫu (không có to) • It is time + quá khứ, nhưng nghĩa là BÂY GIỜ!'}, chunks: [{scene: '📌🎊👥', full: 'You had better assign the jobs before the ceremony starts', parts: [{t: 'You', ico: '👉', c: 's'}, {t: 'had better', ico: '⚡', c: 'v'}, {t: 'assign the jobs before the ceremony starts', ico: '📌', c: 'o'}], traceWord: 'assign'}, {scene: '🏯🧭👍', full: 'We had better ask a reliable guide about the historic city', parts: [{t: 'We', ico: '👥', c: 's'}, {t: 'had better', ico: '⚡', c: 'v'}, {t: 'ask a reliable guide about the historic city', ico: '👍', c: 'o'}], traceWord: 'reliable'}, {scene: '📜📖📺', full: 'I would rather read poetry than watch TV tonight', parts: [{t: 'I', ico: '👦', c: 's'}, {t: 'would rather', ico: '💭', c: 'v'}, {t: 'read poetry than watch TV tonight', ico: '📜', c: 'o'}], traceWord: 'poetry'}, {scene: '✒📝👩', full: 'She would rather be a poet than a doctor', parts: [{t: 'She', ico: '👧', c: 's'}, {t: 'would rather', ico: '💭', c: 'v'}, {t: 'be a poet than a doctor', ico: '✒', c: 'o'}], traceWord: 'poet'}, {scene: '🎉🎶👥', full: 'It is time we entertained our guests with music', parts: [{t: 'It', ico: '⏰', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'time we entertained our guests with music', ico: '🎉', c: 'o'}], traceWord: 'entertained'}, {scene: '🧐🌍📚', full: 'It is time you were more curious about the world', parts: [{t: 'It', ico: '⏰', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'time you were more curious about the world', ico: '🧐', c: 'o'}], traceWord: 'curious'}, {scene: '🤰👩🎒', full: 'It is time we helped the pregnant woman with her bag', parts: [{t: 'It', ico: '⏰', c: 's'}, {t: 'is', ico: '⚡', c: 'v'}, {t: 'time we helped the pregnant woman with her bag', ico: '🤰', c: 'o'}], traceWord: 'pregnant'}, {scene: '🎒🔒🚌', full: 'You had better keep every possession safe on the trip', parts: [{t: 'You', ico: '👉', c: 's'}, {t: 'had better', ico: '⚡', c: 'v'}, {t: 'keep every possession safe on the trip', ico: '🎒', c: 'o'}], traceWord: 'possession'}], qaList: [{q: 'What kind of book would you rather read tonight?', scene: '📖🌀', ans: 'I would rather read a tale with a twist', opts: [{txt: 'I would rather read a tale with a twist', ico: '📖'}, {txt: 'My brother is cooking rice in the kitchen', ico: '🍚'}, {txt: 'We go to the zoo with our class', ico: '🐒'}]}, {q: 'Who can help you understand the history of this city?', scene: '🎓🏯', ans: 'A scholar can give me deep insight into it', opts: [{txt: 'A scholar can give me deep insight into it', ico: '🎓'}, {txt: 'She is swimming in the sea today', ico: '🏊'}, {txt: 'I eat a red apple every morning', ico: '🍎'}]}, {q: 'Why should we use our phones less at night?', scene: '📱🧠📈', ans: 'The phone boom has a psychological effect on us', opts: [{txt: 'The phone boom has a psychological effect on us', ico: '🧠'}, {txt: 'We go to the zoo with our class', ico: '🐒'}, {txt: 'The bus is late because of rain', ico: '🚌'}]}, {q: 'What had you better do before the test?', scene: '📝⏰', ans: 'I had better study for the test tonight', opts: [{txt: 'I had better study for the test tonight', ico: '📚'}, {txt: 'My brother is cooking rice in the kitchen', ico: '🍚'}, {txt: 'It is a big black dog in the park', ico: '🐕'}]}], parentGame: {title: 'Hoạt động Đời thực (12 phút): Bảng Việc Nên Làm Ngay', steps: ['<b>Bước 1:</b> Kẻ bảng 2 cột trên giấy: "Việc nên làm ngay" và "Việc tôi thích hơn". Ghi mỗi cột 3 việc của tuần này.', '<b>Bước 2:</b> Nói to từng việc bằng cấu trúc đã học: <i>"I had better finish my homework."</i> <i>"I would rather play outside."</i> <i>"It is time I started."</i>', '<b>Bước 3:</b> Hỏi nhanh một người bạn hoặc người nhà việc họ nên làm ngay, ghi lại câu trả lời của họ vào bảng.']}},
        {id: '5.18C', name: 'Bài 5.18C: Giá mà ngày trước... bây giờ đã', grammar: {formulas: ['⏪ If + 👦 I + 🕒 had studied', '⏩ I + ⚡ would be + 🌟 a doctor now'], tip: 'Mệnh đề if nói chuyện ĐÃ QUA (had + V3), mệnh đề chính nói kết quả BÂY GIỜ (would + động từ)!'}, chunks: [{scene: '🗳🏫✅', full: 'If our school had voted early, it would be more democratic now', parts: [{t: 'If our school had voted early,', ico: '🗳', c: 's'}, {t: 'it would be', ico: '⚡', c: 'v'}, {t: 'more democratic now', ico: '🗳', c: 'o'}], traceWord: 'democratic'}, {scene: '🔧🚌✅', full: 'If they had started maintenance early, it would work well now', parts: [{t: 'If they had started maintenance early,', ico: '🔧', c: 's'}, {t: 'it would', ico: '⚡', c: 'v'}, {t: 'work well now', ico: '✅', c: 'o'}], traceWord: 'maintenance'}, {scene: '🍲👩🍽', full: 'If Mom had cleaned the pot, we would have dinner now', parts: [{t: 'If Mom had cleaned the pot,', ico: '🍲', c: 's'}, {t: 'we would', ico: '⚡', c: 'v'}, {t: 'have dinner now', ico: '🍽', c: 'o'}], traceWord: 'pot'}, {scene: '🗑🧹🌆', full: 'If he had used the bin, the street would be clean now', parts: [{t: 'If he had used the bin,', ico: '🗑', c: 's'}, {t: 'the street would be', ico: '⚡', c: 'v'}, {t: 'clean now', ico: '🧹', c: 'o'}], traceWord: 'bin'}, {scene: '💪🔥👧', full: 'If Lan had done intense training, it would have strengthened her legs', parts: [{t: 'If Lan had done intense training,', ico: '🔥', c: 's'}, {t: 'it would have strengthened', ico: '💪', c: 'v'}, {t: 'her legs', ico: '🦵', c: 'o'}], traceWord: 'strengthened'}, {scene: '📄⛵🧵', full: 'If I had learned this craft, I would fold paper boats now', parts: [{t: 'If I had learned this craft,', ico: '🧵', c: 's'}, {t: 'I would fold', ico: '📄', c: 'v'}, {t: 'paper boats now', ico: '⛵', c: 'o'}], traceWord: 'fold'}, {scene: '🎼😄👧', full: 'If Anna had loved music, she would compose songs with humor', parts: [{t: 'If Anna had loved music,', ico: '🎵', c: 's'}, {t: 'she would compose', ico: '🎼', c: 'v'}, {t: 'songs with humor', ico: '😄', c: 'o'}], traceWord: 'compose'}, {scene: '🏥🦵🤕', full: 'If I had hurt my leg, I would undergo surgery now', parts: [{t: 'If I had hurt my leg,', ico: '🤕', c: 's'}, {t: 'I would undergo', ico: '🏥', c: 'v'}, {t: 'surgery now', ico: '🏥', c: 'o'}], traceWord: 'undergo'}], qaList: [{q: 'What would happen if you had missed the bus?', scene: '🚌💨😓', ans: 'If I had missed it, consequently I would be late now', opts: [{txt: 'If I had missed it, consequently I would be late now', ico: '🔜'}, {txt: 'She is swimming in the sea today', ico: '🏊'}, {txt: 'I eat a red apple every morning', ico: '🍎'}]}, {q: 'How would you change the plan?', scene: '📋🔭🚧', ans: 'If we had checked the limitation, we would change the scope', opts: [{txt: 'If we had checked the limitation, we would change the scope', ico: '🔭'}, {txt: 'My brother is cooking rice in the kitchen', ico: '🍚'}, {txt: 'We go to the zoo with our class', ico: '🐒'}]}, {q: 'What would the clerk do now?', scene: '🙋💬👨‍💼', ans: 'If Lan had repeated her inquiry, the clerk would reply now', opts: [{txt: 'If Lan had repeated her inquiry, the clerk would reply now', ico: '🙋'}, {txt: 'It is a big black dog in the park', ico: '🐕'}, {txt: 'The bus is late because of rain', ico: '🚌'}]}, {q: 'What would you do if you had studied harder?', scene: '📚✍', ans: 'If I had studied harder, I would pass the exam now', opts: [{txt: 'If I had studied harder, I would pass the exam now', ico: '📚'}, {txt: 'We go to the zoo with our class', ico: '🐒'}, {txt: 'My brother is cooking rice in the kitchen', ico: '🍚'}]}], parentGame: {title: 'Hoạt động Đời thực (12 phút): Cỗ Máy Thời Gian Giá Mà', steps: ['<b>Bước 1:</b> Nghĩ về 3 việc bạn đã làm hoặc không làm tuần trước. Ghi mỗi việc vào một dòng, ví dụ: học bài muộn, bỏ tập thể dục.', '<b>Bước 2:</b> Đổi mỗi việc thành câu điều kiện hỗn hợp, ví dụ <i>"If I had practiced more, I would play better now."</i> Viết 3 câu vào vở.', '<b>Bước 3:</b> Đọc 3 câu cho một người bạn nghe, rồi hỏi họ: <i>"What about you?"</i> và ghi lại một câu của bạn ấy.']}}
      ]
    },
    '5.19': {
      lessons: [
        {
          id: '5.19A', name: 'Bài 5.19A: Ai đó, không ai, ở đâu đó',
          grammar: {
            formulas: ['🙋 Somebody + ⚡ left + 🍌 a bunch of bananas', '🚫 Nobody + ⚡ wants + ⛓ jail', '👥 Everyone + ⚡ needs + 🏚 shelter'],
            tip: 'Somebody, nobody, everyone luôn đi với động từ số ít (thêm -s), và thêm "else" để nói người khác hay thứ khác: someone else!'
          },
          chunks: [
            { scene: '🙋🍌🏠', full: 'Somebody left a bunch of bananas in the kitchen', parts: [{t:'Somebody',ico:'🙋',c:'s'}, {t:'left',ico:'⚡',c:'v'}, {t:'a bunch of bananas in the kitchen',ico:'🍌',c:'o'}], traceWord: 'bunch' },
            { scene: '🚫⛓😟', full: 'Nobody wants to stay in jail forever', parts: [{t:'Nobody',ico:'🚫',c:'s'}, {t:'wants',ico:'⚡',c:'v'}, {t:'to stay in jail forever',ico:'⛓',c:'o'}], traceWord: 'jail' },
            { scene: '👥🏚⛈', full: 'Everyone needs shelter when the storm comes', parts: [{t:'Everyone',ico:'👥',c:'s'}, {t:'needs',ico:'⚡',c:'v'}, {t:'shelter when the storm comes',ico:'🏚',c:'o'}], traceWord: 'shelter' },
            { scene: '🤏😄🃏', full: 'It was a mere joke and nothing else', parts: [{t:'It',ico:'👉',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'a mere joke and nothing else',ico:'🤏',c:'o'}], traceWord: 'mere' },
            { scene: '🧑🔧🚰🏠', full: 'Someone else fixed the water pipe near the house', parts: [{t:'Someone else',ico:'🧑',c:'s'}, {t:'fixed',ico:'🔧',c:'v'}, {t:'the water pipe near the house',ico:'🚰',c:'o'}], traceWord: 'pipe' },
            { scene: '👦🤫👂', full: 'I heard a whisper but nobody was there', parts: [{t:'I',ico:'👦',c:'s'}, {t:'heard',ico:'👂',c:'v'}, {t:'a whisper but nobody was there',ico:'🤫',c:'o'}], traceWord: 'whisper' },
            { scene: '🤞👥🎨📚', full: 'Hopefully everyone will enjoy my narrative composition today', parts: [{t:'Hopefully everyone',ico:'🤞',c:'s'}, {t:'will enjoy',ico:'😊',c:'v'}, {t:'my narrative composition today',ico:'🎨',c:'o'}], traceWord: 'composition' },
            { scene: '🙋🖨📄', full: 'Somebody must scan this page and send a copy', parts: [{t:'Somebody',ico:'🙋',c:'s'}, {t:'must scan',ico:'🖨',c:'v'}, {t:'this page and send a copy',ico:'📄',c:'o'}], traceWord: 'scan' }
          ],
          qaList: [
            { q: 'Who needs a tissue?', scene: '🤧🧻', ans: 'Somebody needs a tissue', opts: [{ txt: 'Somebody needs a tissue', ico: '🧻' }, { txt: 'The airline is on time', ico: '🛫' }, { txt: 'Nothing else is there', ico: '🚫' }] },
            { q: 'Is racial hate good?', scene: '🌍💔', ans: 'No, nobody likes it', opts: [{ txt: 'No, nobody likes it', ico: '🚫' }, { txt: 'Yes, it is a good thing', ico: '👍' }, { txt: 'Yes, it is a pipe', ico: '🚰' }] },
            { q: 'What can be a trigger for destruction?', scene: '🔫💥', ans: 'Anything can be a trigger', opts: [{ txt: 'Anything can be a trigger', ico: '🔫' }, { txt: 'A banana can sing', ico: '🍌' }, { txt: 'The kitchen can run', ico: '🏠' }] },
            { q: 'What do we say to wish someone good things?', scene: '🙏👨👩👧', ans: 'Bless your family', opts: [{ txt: 'Bless your family', ico: '🙏' }, { txt: 'Wash your pipe', ico: '🚰' }, { txt: 'Hide the carpet', ico: '🧶' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thám Tử Ai Đó - Không Ai - Ở Đâu Đó',
            steps: [
              '<b>Bước 1:</b> Em giấu một món đồ nhỏ trong nhà rồi viết 3 câu gợi ý, ví dụ <i>"Somebody hid it"</i>, <i>"It is nowhere in the kitchen"</i>.',
              '<b>Bước 2:</b> Em đọc to từng câu cho bạn hoặc người nhà nghe, bạn đoán và hỏi <i>"Is it somewhere else?"</i>.',
              '<b>Bước 3:</b> Đổi vai chơi lại, rồi ghi âm 3 câu em thích nhất có dùng somebody, nobody, everyone hoặc else.'
            ]
          }
        },
        {
          id: '5.19B', name: 'Bài 5.19B: Rất mệt hay kiệt sức',
          grammar: {
            formulas: ['👦 I + ⚡ am + 😴 very / quite / rather tired', '🍕 It + ⚡ is + 🌟 absolutely wonderful', '🌍 Excess food + ⚡ is + 😱 absolutely terrible'],
            tip: 'Tính từ thường (tired, important) đi với very, quite, rather; tính từ mạnh (terrible, huge) đi với absolutely. Đừng nói "very terrible" nhé!'
          },
          chunks: [
            { scene: '👦😴🧳', full: 'I was barely awake after the long trip', parts: [{t:'I',ico:'👦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'barely awake after the long trip',ico:'😓',c:'o'}], traceWord: 'barely' },
            { scene: '👧😴🤔', full: 'She is quite tired but she will not hesitate', parts: [{t:'She',ico:'👧',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'quite tired but she will not hesitate',ico:'🤔',c:'o'}], traceWord: 'hesitate' },
            { scene: '🧳🏘💰', full: 'Tourism is rather important for our small town', parts: [{t:'Tourism',ico:'🧳',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'rather important for our small town',ico:'🏘',c:'o'}], traceWord: 'tourism' },
            { scene: '🔥🔁📚', full: 'Continuous motivation is absolutely essential for every student', parts: [{t:'Continuous motivation',ico:'🔥',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'absolutely essential for every student',ico:'🎓',c:'o'}], traceWord: 'continuous' },
            { scene: '👦🪢💪🏆', full: 'He held the rope firmly with great determination', parts: [{t:'He',ico:'👦',c:'s'}, {t:'held',ico:'🤲',c:'v'}, {t:'the rope firmly with great determination',ico:'💪',c:'o'}], traceWord: 'determination' },
            { scene: '🏙🔇🚫', full: 'There is nowhere quiet in the busy city', parts: [{t:'There',ico:'👉',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'nowhere quiet in the busy city',ico:'🚫',c:'o'}], traceWord: 'nowhere' },
            { scene: '🍔🗑🌍', full: 'Excess food is absolutely terrible for our planet', parts: [{t:'Excess food',ico:'➕',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'absolutely terrible for our planet',ico:'🌍',c:'o'}], traceWord: 'excess' },
            { scene: '😮🌊🧭', full: 'Surprisingly the ocean is absolutely beautiful wherever we go', parts: [{t:'Surprisingly the ocean',ico:'🌊',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'absolutely beautiful wherever we go',ico:'🧭',c:'o'}], traceWord: 'surprisingly' }
          ],
          qaList: [
            { q: 'What do tourists love in a city?', scene: '🧳🎡', ans: 'A famous attraction', opts: [{ txt: 'A famous attraction', ico: '🎡' }, { txt: 'A dirty street', ico: '🗑' }, { txt: 'A broken chair', ico: '🪑' }] },
            { q: 'What do big cities consume every day?', scene: '🏙⚡🍴', ans: 'They consume a lot of electricity', opts: [{ txt: 'They consume a lot of electricity', ico: '⚡' }, { txt: 'They fly to the moon', ico: '🌙' }, { txt: 'They paint the sky blue', ico: '🎨' }] },
            { q: 'Which word means something expensive and special?', scene: '💎✨', ans: 'Luxury', opts: [{ txt: 'Luxury', ico: '💎' }, { txt: 'Breakfast', ico: '🍳' }, { txt: 'Window', ico: '🪟' }] },
            { q: 'What do you see in a mirror?', scene: '🪞👧', ans: 'I see my reflection', opts: [{ txt: 'I see my reflection', ico: '🪞' }, { txt: 'I see a hot soup', ico: '🍲' }, { txt: 'I see a flying bus', ico: '🚌' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Thang Đo Mệt - Kiệt Sức',
            steps: [
              '<b>Bước 1:</b> Em vẽ một thang 5 nấc trên giấy, nấc thấp ghi <i>"quite tired"</i>, nấc cao ghi <i>"absolutely terrible"</i>, rồi tự đánh dấu cảm giác của mình hôm nay.',
              '<b>Bước 2:</b> Em phỏng vấn 3 người thân hoặc bạn bè: <i>"How do you feel today?"</i> và ghi lại câu trả lời bằng tiếng Anh vào bảng.',
              '<b>Bước 3:</b> Em đọc to kết quả cho cả nhà, chú ý dùng very, quite, rather với tính từ thường và absolutely với tính từ mạnh.'
            ]
          }
        },
        {
          id: '5.19C', name: 'Bài 5.19C: Chưa bao giờ thấy chuyện như vậy',
          grammar: {
            formulas: ['⏪ Never have + 👦 I + 👀 seen such a carpet', '⏪ Hardly had + 👥 we + 🏁 arrived when ...', '⏪ Not only is + 💡 his logic + ➕ clear but ...'],
            tip: 'Trạng từ phủ định đứng đầu câu thì đảo trợ động từ lên trước chủ ngữ: Never have I (không phải Never I have)!'
          },
          chunks: [
            { scene: '👦👀🧶', full: 'Never have I seen such a big carpet', parts: [{t:'Never have',ico:'⏪',c:'v'}, {t:'I',ico:'👦',c:'s'}, {t:'seen such a big carpet',ico:'🧶',c:'o'}], traceWord: 'carpet' },
            { scene: '🏁😵🏫', full: 'Hardly had we arrived when the confusion began', parts: [{t:'Hardly had',ico:'⏪',c:'v'}, {t:'we',ico:'👥',c:'s'}, {t:'arrived when the confusion began',ico:'😵',c:'o'}], traceWord: 'confusion' },
            { scene: '💡🧩👍', full: 'Not only is his logic clear but his plan is also simple', parts: [{t:'Not only is',ico:'⏪',c:'v'}, {t:'his logic',ico:'🧩',c:'s'}, {t:'clear but his plan is also simple',ico:'💡',c:'o'}], traceWord: 'logic' },
            { scene: '😂🎬⚡', full: 'Never has a comedy been so controversial', parts: [{t:'Never has',ico:'⏪',c:'v'}, {t:'a comedy',ico:'😂',c:'s'}, {t:'been so controversial',ico:'⚡',c:'o'}], traceWord: 'comedy' },
            { scene: '👧📝📖', full: 'Hardly had she revised the essay when the lesson began', parts: [{t:'Hardly had',ico:'⏪',c:'v'}, {t:'she',ico:'👧',c:'s'}, {t:'revised the essay when the lesson began',ico:'📝',c:'o'}], traceWord: 'revised' },
            { scene: '💧🔥⚠', full: 'Not only is the liquid hot but it is also dangerous', parts: [{t:'Not only is',ico:'⏪',c:'v'}, {t:'the liquid',ico:'💧',c:'s'}, {t:'hot but it is also dangerous',ico:'⚠',c:'o'}], traceWord: 'liquid' },
            { scene: '👥🏔⛷', full: 'Never have we climbed such a long slope', parts: [{t:'Never have',ico:'⏪',c:'v'}, {t:'we',ico:'👥',c:'s'}, {t:'climbed such a long slope',ico:'🏔',c:'o'}], traceWord: 'slope' },
            { scene: '🚢⚓⛈', full: 'Hardly had the vessel left the harbor when the storm started', parts: [{t:'Hardly had',ico:'⏪',c:'v'}, {t:'the vessel',ico:'🚢',c:'s'}, {t:'left the harbor when the storm started',ico:'⚓',c:'o'}], traceWord: 'harbor' }
          ],
          qaList: [
            { q: 'How is the transportation in your town?', scene: '🚌🏘', ans: 'It is altogether safe and cheap', opts: [{ txt: 'It is altogether safe and cheap', ico: '🚌' }, { txt: 'It is a sweet banana', ico: '🍌' }, { txt: 'It is a happy song', ico: '🎵' }] },
            { q: 'What happens in a car chase?', scene: '🚗🏃🎬', ans: 'Fast cars run after a thief', opts: [{ txt: 'Fast cars run after a thief', ico: '🏃' }, { txt: 'Soft cakes sleep in a bed', ico: '🍰' }, { txt: 'Two fish read a map', ico: '🐟' }] },
            { q: 'Where do we keep old boxes?', scene: '📦🏠', ans: 'In the storage room', opts: [{ txt: 'In the storage room', ico: '📦' }, { txt: 'In the hot soup', ico: '🍲' }, { txt: 'On the moon', ico: '🌙' }] },
            { q: 'Which is bigger, a city or the universe?', scene: '🌌🏙', ans: 'The universe is bigger', opts: [{ txt: 'The universe is bigger', ico: '🌌' }, { txt: 'The city is bigger', ico: '🏙' }, { txt: 'A box is bigger', ico: '📦' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Bản Tin Chưa Từng Thấy',
            steps: [
              '<b>Bước 1:</b> Em chọn 3 điều lạ em từng thấy (một bộ phim, một con dốc, một chuyến đi) và viết mỗi điều một câu bắt đầu bằng <i>"Never have I seen..."</i>.',
              '<b>Bước 2:</b> Em viết thêm 2 câu với <i>"Hardly had I... when..."</i> hoặc <i>"Not only is... but..."</i>, nhớ đảo trợ động từ lên trước chủ ngữ.',
              '<b>Bước 3:</b> Em ghi âm mình đọc bản tin như phóng viên, rồi nghe lại và kiểm tra xem câu nào đảo đúng thứ tự.'
            ]
          }
        }
      ]
    },
    '5.20': {
      lessons: [
        {
          id: '5.20A', name: 'Bài 5.20A: Kế hoạch đã định trước đó',
          grammar: {
            formulas: ['👦 I / 👨‍👩‍👧 We + ⚡ was / were going to + ⛺ camp', '👦 He / 👧 She + ⚡ was about to + 🚪 leave', '👩‍🏫 Teacher + ⚡ would + 📝 summarize'],
            tip: 'Kế hoạch trong quá khứ: was / were going to + động từ gốc, was about to = sắp sửa, would + động từ gốc, đừng thêm -s hay -ed nhé!'
          },
          chunks: [
            { scene: '⛺🌲🔭', full: 'We were going to camp in a tent by a distant lake', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'were going to camp',ico:'📅',c:'v'}, {t:'in a tent by a distant lake',ico:'⛺',c:'o'}], traceWord: 'tent' },
            { scene: '🎬😱😮', full: 'Tom was about to leave the horrible film with a sigh', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'was about to leave',ico:'🚪',c:'v'}, {t:'the horrible film with a sigh',ico:'😱',c:'o'}], traceWord: 'horrible' },
            { scene: '👩‍🏫📖📅', full: 'Our teacher would summarize the story in a monthly report', parts: [{t:'Our teacher',ico:'👩‍🏫',c:'s'}, {t:'would summarize',ico:'📝',c:'v'}, {t:'the story in a monthly report',ico:'📅',c:'o'}], traceWord: 'summarize' },
            { scene: '👨😇🤞', full: 'I would swear the man was innocent', parts: [{t:'I',ico:'👦',c:'s'}, {t:'would swear',ico:'🤞',c:'v'}, {t:'the man was innocent',ico:'😇',c:'o'}], traceWord: 'innocent' },
            { scene: '🐱🦘🛋', full: 'The cat was about to leap onto the sofa', parts: [{t:'The cat',ico:'🐱',c:'s'}, {t:'was about to leap',ico:'🦘',c:'v'}, {t:'onto the sofa',ico:'🛋',c:'o'}], traceWord: 'leap' },
            { scene: '👨🥄🍲', full: 'Dad was going to stir the soup with a spoon', parts: [{t:'Dad',ico:'👨',c:'s'}, {t:'was going to stir',ico:'🥄',c:'v'}, {t:'the soup with a spoon',ico:'🍲',c:'o'}], traceWord: 'stir' },
            { scene: '👧🎨🖼', full: 'Anna was going to paint an abstract picture', parts: [{t:'Anna',ico:'👧',c:'s'}, {t:'was going to paint',ico:'🖌',c:'v'}, {t:'an abstract picture',ico:'🎨',c:'o'}], traceWord: 'abstract' },
            { scene: '🧑‍🏫🤩📚', full: 'The substitute would teach us with a lot of excitement', parts: [{t:'The substitute',ico:'🔄',c:'s'}, {t:'would teach',ico:'📚',c:'v'}, {t:'us with a lot of excitement',ico:'🤩',c:'o'}], traceWord: 'excitement' }
          ],
          qaList: [
            { q: 'What was Mai going to do at the lake?', scene: '👧💧🧪', ans: 'She was going to clean the water with a filter', opts: [{ txt: 'She was going to clean the water with a filter', ico: '🧪' }, { txt: 'She was going to buy a new phone', ico: '📱' }, { txt: 'She was going to drive to school', ico: '🚌' }] },
            { q: 'What did the report say about tomorrow?', scene: '🌧🎲📰', ans: 'The probability of rain would be high', opts: [{ txt: 'The probability of rain would be high', ico: '🌧' }, { txt: 'My brother would be a good doctor', ico: '👨‍⚕️' }, { txt: 'The shop was going to close early', ico: '🏪' }] },
            { q: 'Was Lan sure about her exam?', scene: '👧📝❓', ans: 'No, she was full of uncertainty about it', opts: [{ txt: 'No, she was full of uncertainty about it', ico: '❓' }, { txt: 'Yes, she was ready to win the prize', ico: '🏆' }, { txt: 'Yes, she was very sure about it', ico: '👍' }] },
            { q: 'What was the boy about to do?', scene: '👦🚪✋', ans: 'He was about to open the door', opts: [{ txt: 'He was about to open the door', ico: '🚪' }, { txt: 'The boy is very tall and strong', ico: '💪' }, { txt: 'My mother has a red bag', ico: '👜' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Nhật Ký Kế Hoạch Bị Đổi',
            steps: [
              '<b>Bước 1:</b> Con nhớ lại 3 kế hoạch trong quá khứ mà sau đó bị thay đổi (ví dụ đi cắm trại nhưng trời mưa) và ghi mỗi kế hoạch ra một mẩu giấy.',
              '<b>Bước 2:</b> Con viết mỗi kế hoạch thành một câu: <i>"I was going to camp, but it rained."</i>, rồi thêm một câu với <i>was about to</i> và một câu với <i>would</i>.',
              '<b>Bước 3:</b> Con đọc to 3 câu, ghi âm bằng điện thoại và nghe lại để sửa phát âm, hoặc đọc cho bạn/người nhà nghe và hỏi <i>"What were you going to do?"</i>.'
            ]
          }
        },
        {
          id: '5.20B', name: 'Bài 5.20B: Bài viết có nhịp điệu',
          grammar: {
            formulas: ['🧒 Mai + ⏰ often + ⚡ coughs', '🧒 Tom + ⚡ is + ⏰ never + 😴 late', '🧒 Anna + ⚡ closes + 🪟 the curtain + 🐢 slowly'],
            tip: 'Trạng từ tần suất đứng TRƯỚC động từ thường nhưng SAU "is / am / are"; only, even, just đứng ngay trước từ mà nó nhấn mạnh!'
          },
          chunks: [
            { scene: '🎖🎤🏆', full: 'The mayor always speaks slowly at the tournament', parts: [{t:'The mayor',ico:'🎖',c:'s'}, {t:'always speaks',ico:'🎤',c:'v'}, {t:'slowly at the tournament',ico:'🏆',c:'o'}], traceWord: 'mayor' },
            { scene: '🏰🌫🗺', full: 'The old empire slowly faded from the map', parts: [{t:'The old empire',ico:'🏰',c:'s'}, {t:'slowly faded',ico:'🌫',c:'v'}, {t:'from the map',ico:'🗺',c:'o'}], traceWord: 'empire' },
            { scene: '👦🤧🌑', full: 'My brother sometimes coughs loudly in the darkness', parts: [{t:'My brother',ico:'👦',c:'s'}, {t:'sometimes coughs',ico:'🤧',c:'v'}, {t:'loudly in the darkness',ico:'🌑',c:'o'}], traceWord: 'darkness' },
            { scene: '👧🪟🤍', full: 'Mai carefully closes the pale curtain every evening', parts: [{t:'Mai',ico:'👧',c:'s'}, {t:'carefully closes',ico:'🪟',c:'v'}, {t:'the pale curtain every evening',ico:'🌆',c:'o'}], traceWord: 'curtain' },
            { scene: '👩🥬🛒', full: 'My mother only buys organic vegetables at the market', parts: [{t:'My mother',ico:'👩',c:'s'}, {t:'only buys',ico:'🛒',c:'v'}, {t:'organic vegetables at the market',ico:'🥬',c:'o'}], traceWord: 'organic' },
            { scene: '👦🍲👅🤨', full: 'Tom just tasted the weird soup with his tongue', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'just tasted',ico:'👅',c:'v'}, {t:'the weird soup with his tongue',ico:'🤨',c:'o'}], traceWord: 'weird' },
            { scene: '🖥📝⚡', full: 'The new server usually handles the registration quickly', parts: [{t:'The new server',ico:'🖥',c:'s'}, {t:'usually handles',ico:'⚙️',c:'v'}, {t:'the registration quickly',ico:'📝',c:'o'}], traceWord: 'server' },
            { scene: '🎵🤝🌍', full: 'Music can even unite people from every country', parts: [{t:'Music',ico:'🎵',c:'s'}, {t:'can even unite',ico:'🤝',c:'v'}, {t:'people from every country',ico:'🌍',c:'o'}], traceWord: 'unite' }
          ],
          qaList: [
            { q: 'What did Anna do with the broken cup?', scene: '👧☕🧩', ans: 'She carefully picked up every fragment of it', opts: [{ txt: 'She carefully picked up every fragment of it', ico: '🧩' }, { txt: 'She often drinks tea with her friends', ico: '🍵' }, { txt: 'She just watched a funny cartoon', ico: '📺' }] },
            { q: 'How often does the mayor visit the tournament?', scene: '🎖🏆📅', ans: 'He usually visits the tournament every year', opts: [{ txt: 'He usually visits the tournament every year', ico: '🏆' }, { txt: 'Because he likes the new bike', ico: '🚲' }, { txt: 'In the big blue house', ico: '🏠' }] },
            { q: 'Does the old man cough a lot?', scene: '👴🤧🌙', ans: 'Yes, he often coughs at night', opts: [{ txt: 'Yes, he often coughs at night', ico: '🤧' }, { txt: 'He is only eight years old', ico: '🎂' }, { txt: 'Yes, he can swim very well', ico: '🏊' }] },
            { q: 'Where do you usually eat organic food?', scene: '🥬🏠👨‍👩‍👧', ans: 'I usually eat it at home with my family', opts: [{ txt: 'I usually eat it at home with my family', ico: '🏠' }, { txt: 'It is too cold to swim today', ico: '🥶' }, { txt: 'Mai even has a pale blue hat', ico: '🧢' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Đo Thói Quen Của Gia Đình',
            steps: [
              '<b>Bước 1:</b> Con làm khảo sát nhỏ: hỏi 3 người trong nhà về thói quen hằng ngày, ví dụ <i>"Do you often read in the evening?"</i>, và ghi lại câu trả lời.',
              '<b>Bước 2:</b> Con viết 5 câu về kết quả, dùng always, usually, sometimes, never đúng vị trí, ví dụ <i>"My father usually drinks tea."</i>, và thêm 1 câu có only hoặc just.',
              '<b>Bước 3:</b> Con đọc 6 câu thật chậm như đọc một bài thơ có nhịp, rồi gạch dưới trạng từ trong từng câu và đọc lại cho cả nhà nghe.'
            ]
          }
        },
        {
          id: '5.20C', name: 'Bài 5.20C: Thư và truyện thi PET',
          grammar: {
            formulas: ['🧒 I + ⚡ am sending + 📎 an attachment', '👨‍👩‍👧 We + ⚡ were + 🍀 fortunate to obtain + 🎟 tickets', '🏛 It + ⚡ is + 📦 responsible for + 🍚 food'],
            tip: 'Ôn tổng hợp: câu nào cũng có chủ ngữ + động từ + phần còn lại, nhớ chọn đúng thì (am sending, was, were, can) và to + động từ gốc!'
          },
          chunks: [
            { scene: '💻📎📉', full: 'I am sending you the graph as an attachment', parts: [{t:'I',ico:'👦',c:'s'}, {t:'am sending',ico:'📧',c:'v'}, {t:'you the graph as an attachment',ico:'📎',c:'o'}], traceWord: 'attachment' },
            { scene: '🍀🎟🎤', full: 'We were fortunate to obtain tickets for the concert', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'were',ico:'⚡',c:'v'}, {t:'fortunate to obtain tickets for the concert',ico:'🍀',c:'o'}], traceWord: 'obtain' },
            { scene: '👦😳📒', full: 'Tom was ashamed because he lost his homework', parts: [{t:'Tom',ico:'👦',c:'s'}, {t:'was',ico:'⚡',c:'v'}, {t:'ashamed because he lost his homework',ico:'😳',c:'o'}], traceWord: 'ashamed' },
            { scene: '🌍👧🍽', full: 'Many children in the world suffer from hunger', parts: [{t:'Many children in the world',ico:'🌍',c:'s'}, {t:'suffer',ico:'😢',c:'v'}, {t:'from hunger',ico:'🍽',c:'o'}], traceWord: 'hunger' },
            { scene: '👧📚🥤', full: 'Lan thirsts for knowledge and reads every day', parts: [{t:'Lan',ico:'👧',c:'s'}, {t:'thirsts',ico:'🥤',c:'v'}, {t:'for knowledge and reads every day',ico:'📚',c:'o'}], traceWord: 'thirsts' },
            { scene: '🏛🚚🍚', full: 'The local authority is responsible for the distribution of food', parts: [{t:'The local authority',ico:'🏛',c:'s'}, {t:'is',ico:'⚡',c:'v'}, {t:'responsible for the distribution of food',ico:'🚚',c:'o'}], traceWord: 'distribution' },
            { scene: '🎭⏸🔍', full: 'We talked about every aspect of the play during the interval', parts: [{t:'We',ico:'👨‍👩‍👧',c:'s'}, {t:'talked',ico:'💬',c:'v'}, {t:'about every aspect of the play during the interval',ico:'⏸',c:'o'}], traceWord: 'aspect' },
            { scene: '👩‍🏫⚛🧬', full: 'The teacher showed a model of an electron and a molecule', parts: [{t:'The teacher',ico:'👩‍🏫',c:'s'}, {t:'showed',ico:'👉',c:'v'}, {t:'a model of an electron and a molecule',ico:'⚛',c:'o'}], traceWord: 'molecule' }
          ],
          qaList: [
            { q: 'Who can help us at home?', scene: '🤖🏠🧹', ans: 'The robot can clean the kitchen and carry bags', opts: [{ txt: 'The robot can clean the kitchen and carry bags', ico: '🤖' }, { txt: 'The moon can drive a red bus', ico: '🌙' }, { txt: 'The rain can read a long book', ico: '🌧' }] },
            { q: 'What do you think about the team?', scene: '⚽🏆👍', ans: 'I think they are bound to win the final', opts: [{ txt: 'I think they are bound to win the final', ico: '🔗' }, { txt: 'I think it is time for lunch', ico: '🍱' }, { txt: 'I think my bike is too old', ico: '🚲' }] },
            { q: 'What did the class read about?', scene: '💧🧊📖', ans: 'They read about the transformation of water into ice', opts: [{ txt: 'They read about the transformation of water into ice', ico: '🦋' }, { txt: 'They read about a funny dog in a hat', ico: '🐶' }, { txt: 'They read about a trip to the moon', ico: '🌙' }] },
            { q: 'How long have you waited here?', scene: '⏰🧍🚏', ans: 'I have waited for two hours', opts: [{ txt: 'I have waited for two hours', ico: '⏰' }, { txt: 'In the kitchen, please', ico: '🍳' }, { txt: 'Because it is red', ico: '🔴' }] }
          ],
          parentGame: {
            title: '🎲 Hoạt động Đời thực (12 phút): Viết Thư Và Kể Chuyện Thi PET',
            steps: [
              '<b>Bước 1:</b> Con viết một bức thư ngắn 5 câu cho bạn, mở đầu bằng <i>"Dear ..."</i>, kể một việc đã xảy ra và một kế hoạch sắp tới.',
              '<b>Bước 2:</b> Con viết tiếp một câu chuyện 5 câu bắt đầu bằng <i>"Last weekend, I was ..."</i>, dùng ít nhất 3 từ mới của bài và gạch dưới chúng.',
              '<b>Bước 3:</b> Con đọc thư và truyện cho người nhà nghe trong 2 phút như đang thi nói, người nghe chấm 1 đến 5 sao cho giọng đọc và sự rõ ràng.'
            ]
          }
        }
      ]
    }
  }
};
