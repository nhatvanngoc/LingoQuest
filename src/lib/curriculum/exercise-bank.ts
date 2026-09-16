/**
 * Ngân hàng bài tập đa dạng & mẫu câu giao tiếp chuyên sâu cho học sinh tự học tối đa
 * Khai thác chuẩn SGK Global Success (Bộ GD&ĐT), VietJack, Lời giải hay, Cambridge & Ngân hàng đề thi THPT Quốc gia.
 * Bao gồm:
 * 1. Viết lại câu không đổi nghĩa (Sentence Transformation)
 * 2. Tìm & sửa lỗi sai 4 phần gạch chân A, B, C, D (Error Identification)
 * 3. Sắp xếp từ thành câu hoàn chỉnh (Sentence Unscramble)
 * 4. Mẫu câu đàm thoại & giao tiếp phản xạ theo chủ đề (Communicative Sentence Patterns)
 */

export interface SentenceTransformationItem {
  id: number;
  originalSentence: string;
  startingPhrase: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  hint: string;
  explanation: string;
}

export interface ErrorIdentificationItem {
  id: number;
  sentence: string; // chứa các thẻ [A], [B], [C], [D]
  segments: {
    key: "A" | "B" | "C" | "D";
    text: string;
  }[];
  correctError: "A" | "B" | "C" | "D";
  correction: string;
  explanation: string;
}

export interface SentenceUnscrambleItem {
  id: number;
  jumbledWords: string[];
  correctSentence: string;
  translationVi: string;
  grammarFocus: string;
  explanation: string;
}

export interface CommunicativePatternItem {
  id: number;
  pattern: string;
  structure: string;
  dialogueEn: string;
  dialogueVi: string;
  speakerA: string;
  speakerB: string;
  usageContext: string;
}

export interface UnitExerciseData {
  topicKey: string;
  title: string;
  transformations: SentenceTransformationItem[];
  errorIdentifications: ErrorIdentificationItem[];
  sentenceUnscrambles: SentenceUnscrambleItem[];
  communicativePatterns: CommunicativePatternItem[];
}

export const EXERCISE_BANK: Record<string, UnitExerciseData> = {
  // -------------------------------------------------------------
  // GRADE 10: PRESENT SIMPLE VS CONTINUOUS & FAMILY LIFE
  // -------------------------------------------------------------
  "family-life": {
    topicKey: "family-life",
    title: "Unit 1: Family Life • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "He started sharing household chores with his wife five years ago and he still does it.",
        startingPhrase: "He has",
        correctAnswer: "He has shared household chores with his wife for five years.",
        acceptableAnswers: [
          "He has shared household chores with his wife for 5 years.",
          "He has been sharing household chores with his wife for five years."
        ],
        hint: "Chuyển từ Quá khứ đơn sang Hiện tại hoàn thành với 'for + khoảng thời gian'.",
        explanation: "Cấu trúc chuyển đổi thì: 'S + started/began + V-ing/to V + ... ago' -> 'S + have/has + V3/ed + for + time'. Diễn tả việc chia sẻ việc nhà bắt đầu 5 năm trước và vẫn tiếp diễn.",
      },
      {
        id: 2,
        originalSentence: "It is his habit to take out the garbage every evening at 7 PM.",
        startingPhrase: "He usually",
        correctAnswer: "He usually takes out the garbage every evening at 7 PM.",
        hint: "Dùng trạng từ chỉ tần suất 'usually' với thì Hiện tại đơn để nói về thói quen.",
        explanation: "Thói quen hàng ngày (daily habit) được diễn đạt bằng thì Hiện tại đơn: S + usually + V(s/es) + ...",
      },
      {
        id: 3,
        originalSentence: "Look at the dirty floor! Someone spilled cooking oil right now.",
        startingPhrase: "Cooking oil is",
        correctAnswer: "Cooking oil is leaking on the dirty floor right now.",
        hint: "Dùng thì Hiện tại tiếp diễn chỉ sự việc đang tiếp diễn trước mắt.",
        explanation: "Dấu hiệu 'Look!' và 'right now' đòi hỏi động từ ở thì Hiện tại tiếp diễn: S + is/are + V-ing.",
      },
      {
        id: 4,
        originalSentence: "I am annoyed because my brother always leaves his dirty socks in the living room.",
        startingPhrase: "My brother is",
        correctAnswer: "My brother is always leaving his dirty socks in the living room.",
        hint: "Dùng 'S + is/are + always + V-ing' để phàn nàn về một thói quen gây khó chịu.",
        explanation: "Cấu trúc đặc biệt của thì Hiện tại tiếp diễn kết hợp với 'always' dùng để bộc lộ cảm xúc bực mình, phàn nàn về hành vi xấu lặp đi lặp lại.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "My father [A] usually is preparing [B] dinner while [C] my mother washes [D] the dishes.",
        segments: [
          { key: "A", text: "usually" },
          { key: "B", text: "is preparing" },
          { key: "C", text: "while" },
          { key: "D", text: "washes" },
        ],
        correctError: "B",
        correction: "prepares",
        explanation: "Trạng từ 'usually' chỉ thói quen lặp lại hằng ngày của bố -> Phải dùng thì Hiện tại đơn 'prepares', không dùng Hiện tại tiếp diễn 'is preparing'.",
      },
      {
        id: 2,
        sentence: "Look! The children [A] are play [B] football in the garden [C] after finishing [D] their chores.",
        segments: [
          { key: "A", text: "The children" },
          { key: "B", text: "are play" },
          { key: "C", text: "in the garden" },
          { key: "D", text: "after finishing" },
        ],
        correctError: "B",
        correction: "are playing",
        explanation: "Sau trợ động từ to be 'are' trong thì Hiện tại tiếp diễn (Look!) bắt buộc phải là V-ing: 'are playing', không dùng nguyên mẫu 'are play'.",
      },
      {
        id: 3,
        sentence: "She [A] don't mind [B] doing the heavy [C] lifting around [D] the house.",
        segments: [
          { key: "A", text: "She" },
          { key: "B", text: "don't mind" },
          { key: "C", text: "heavy" },
          { key: "D", text: "around" },
        ],
        correctError: "B",
        correction: "doesn't mind",
        explanation: "Chủ ngữ ngôi thứ ba số ít 'She' ở thì Hiện tại đơn phải đi với trợ động từ phủ định 'doesn't', không dùng 'don't'.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["equally", "family", "chores", "all", "members", "share", "household"],
        correctSentence: "All family members share household chores equally.",
        translationVi: "Tất cả thành viên trong gia đình đều chia sẻ việc nhà công bằng.",
        grammarFocus: "S + V + O + Adv (Hiện tại đơn chỉ thói quen nếp sống)",
        explanation: "Chủ ngữ 'All family members' + động từ 'share' + tân ngữ 'household chores' + trạng từ thể cách 'equally'.",
      },
      {
        id: 2,
        jumbledWords: ["is", "dinner", "kitchen", "preparing", "mother", "in", "my", "the"],
        correctSentence: "My mother is preparing dinner in the kitchen.",
        translationVi: "Mẹ tôi đang nấu bữa tối trong bếp.",
        grammarFocus: "S + is + V-ing + O + Trạng từ nơi chốn (Hiện tại tiếp diễn)",
        explanation: "Thì Hiện tại tiếp diễn diễn tả hành động đang diễn ra tại thời điểm nói.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "Could you please lend me a hand with...?",
        structure: "Could you please + V-inf + O + with + Noun / V-ing?",
        dialogueEn: "Son: 'Could you please lend me a hand with this vacuum cleaner?' — Father: 'Sure, let me check the dust bag for you.'",
        dialogueVi: "Con trai: 'Bố có thể phụ con một tay với máy hút bụi này được không ạ?' — Bố: 'Chắc chắn rồi, để bố kiểm tra túi bụi cho con nhé.'",
        speakerA: "Son",
        speakerB: "Father",
        usageContext: "Đưa ra lời đề nghị giúp đỡ lịch sự trong phân công việc nhà.",
      },
      {
        id: 2,
        pattern: "Whose turn is it to... today?",
        structure: "Whose turn is it + to V-inf + ...?",
        dialogueEn: "Sister: 'Whose turn is it to wash the dishes today?' — Brother: 'It is my turn; I will do it right after this homework.'",
        dialogueVi: "Chị gái: 'Hôm nay tới phiên ai rửa bát vậy?' — Em trai: 'Tới lượt em; em sẽ làm ngay sau khi làm xong bài tập này.'",
        speakerA: "Sister",
        speakerB: "Brother",
        usageContext: "Hỏi về lịch trực nhật hoặc phiên làm việc nhà luân phiên trong gia đình.",
      },
      {
        id: 3,
        pattern: "I believe sharing chores strengthens...",
        structure: "I believe (that) + Gerund (V-ing) + Verb(s/es) + Object",
        dialogueEn: "Mai: 'Why do you prioritize doing chores together?' — Nam: 'I believe sharing chores strengthens family bonds significantly.'",
        dialogueVi: "Mai: 'Tại sao cậu lại coi trọng việc làm việc nhà cùng nhau thế?' — Nam: 'Mình tin rằng việc chia sẻ việc nhà giúp thắt chặt tình cảm gia đình rất nhiều.'",
        speakerA: "Mai",
        speakerB: "Nam",
        usageContext: "Bày tỏ quan điểm cá nhân có chiều sâu về giá trị của gia đình trong bài nói Speaking.",
      },
    ],
  },

  // -------------------------------------------------------------
  // GRADE 11: PAST SIMPLE VS PRESENT PERFECT & HEALTHY LIFE
  // -------------------------------------------------------------
  "healthy-life": {
    topicKey: "healthy-life",
    title: "Unit 1: A Long and Healthy Life • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "I last visited a dental specialist two years ago.",
        startingPhrase: "I have not",
        correctAnswer: "I have not visited a dental specialist for two years.",
        acceptableAnswers: [
          "I have not visited a dental specialist for 2 years.",
          "I haven't visited a dental specialist for two years."
        ],
        hint: "'S + last + V2/ed + ... ago' chuyển thành 'S + have/has not + V3/ed + for + time'.",
        explanation: "Công thức viết lại câu kinh điển trong đề thi: 'Lần cuối cùng tôi làm việc X là 2 năm trước' đồng nghĩa với 'Tôi đã không làm việc X suốt 2 năm nay'.",
      },
      {
        id: 2,
        originalSentence: "This is the first time she has experienced such severe migraine headaches.",
        startingPhrase: "She has never",
        correctAnswer: "She has never experienced such severe migraine headaches before.",
        hint: "'This is the first time S + have/has + V3' -> 'S + have/has never + V3 + before'.",
        explanation: "'Đây là lần đầu tiên cô ấy trải qua...' viết lại thành 'Cô ấy chưa bao giờ trải qua... trước đây'.",
      },
      {
        id: 3,
        originalSentence: "Scientists started searching for cancer vaccines in the 1990s.",
        startingPhrase: "Scientists have",
        correctAnswer: "Scientists have searched for cancer vaccines since the 1990s.",
        acceptableAnswers: [
          "Scientists have been searching for cancer vaccines since the 1990s."
        ],
        hint: "Dùng Hiện tại hoàn thành với 'since + mốc thời gian thập niên 1990'.",
        explanation: "'started + V-ing + in (mốc thời gian)' -> chuyển sang thì Hiện tại hoàn thành dùng 'since (mốc thời gian)'.",
      },
      {
        id: 4,
        originalSentence: "When did you begin following a nutrient-dense Mediterranean diet?",
        startingPhrase: "How long have",
        correctAnswer: "How long have you followed a nutrient-dense Mediterranean diet?",
        acceptableAnswers: [
          "How long have you been following a nutrient-dense Mediterranean diet?"
        ],
        hint: "'When did you begin/start...?' tương đương với 'How long have you + V3/ed...?'",
        explanation: "Câu hỏi quá khứ 'When did you start...?' chuyển sang câu hỏi Hiện tại hoàn thành 'How long have you + V3/ed...?' để hỏi về khoảng thời gian kéo dài đến nay.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "He [A] has undergone [B] a major heart surgery [C] last month [D] at the central hospital.",
        segments: [
          { key: "A", text: "has undergone" },
          { key: "B", text: "a major" },
          { key: "C", text: "last month" },
          { key: "D", text: "at the central" },
        ],
        correctError: "A",
        correction: "underwent",
        explanation: "Trong câu có mốc thời gian xác định đã kết thúc hoàn toàn trong quá khứ 'last month' -> Không được dùng thì Hiện tại hoàn thành 'has undergone', mà phải dùng Quá khứ đơn 'underwent'.",
      },
      {
        id: 2,
        sentence: "She [A] didn't take [B] any antibiotics [C] since [D] she consulted the physician.",
        segments: [
          { key: "A", text: "didn't take" },
          { key: "B", text: "any" },
          { key: "C", text: "since" },
          { key: "D", text: "consulted" },
        ],
        correctError: "A",
        correction: "hasn't taken",
        explanation: "Mệnh đề chính đi với 'since + mệnh đề quá khứ' phải chia ở thì Hiện tại hoàn thành -> Sửa 'didn't take' thành 'hasn't taken'.",
      },
      {
        id: 3,
        sentence: "Dr. Alexander Fleming [A] has discovered [B] penicillin by accident [C] in 1928 [D].",
        segments: [
          { key: "A", text: "Dr. Alexander Fleming" },
          { key: "B", text: "has discovered" },
          { key: "C", text: "by accident" },
          { key: "D", text: "in 1928" },
        ],
        correctError: "B",
        correction: "discovered",
        explanation: "Năm 1928 là một mốc lịch sử cụ thể đã chấm dứt hoàn toàn trong quá khứ -> Dùng Quá khứ đơn 'discovered'.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["lifestyle", "expectancy", "healthy", "a", "adopt", "to", "life", "increase"],
        correctSentence: "Adopt a healthy lifestyle to increase life expectancy.",
        translationVi: "Hãy theo đuổi một lối sống lành mạnh để nâng cao tuổi thọ.",
        grammarFocus: "Imperative Verb + to-infinitive of purpose",
        explanation: "Mệnh lệnh thức 'Adopt a healthy lifestyle' + mệnh đề chỉ mục đích 'to increase life expectancy'.",
      },
      {
        id: 2,
        jumbledWords: ["daily", "immune", "regular", "boosts", "system", "the", "workout"],
        correctSentence: "Regular daily workout boosts the immune system.",
        translationVi: "Tập luyện thể thao đều đặn hằng ngày giúp tăng cường hệ miễn dịch.",
        grammarFocus: "S (Noun phrase) + V(s/es) + O",
        explanation: "Chủ ngữ cụm danh từ số ít 'Regular daily workout' đi với động từ chia đuôi 's': 'boosts the immune system'.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "How long have you been suffering from...?",
        structure: "How long have you been + V-ing / suffering from + Noun (symptom)?",
        dialogueEn: "Doctor: 'How long have you been suffering from this chest pain?' — Patient: 'Since Tuesday morning, doctor.'",
        dialogueVi: "Bác sĩ: 'Bác bị cơn đau ngực này hành hạ bao lâu rồi?' — Bệnh nhân: 'Dạ thưa bác sĩ, từ sáng thứ Ba đến giờ ạ.'",
        speakerA: "Doctor",
        speakerB: "Patient",
        usageContext: "Hỏi bệnh sử và triệu chứng trong thăm khám y khoa.",
      },
      {
        id: 2,
        pattern: "I strongly advise you to cut down on...",
        structure: "I strongly advise you + to V-inf (cut down on / avoid) + Noun",
        dialogueEn: "Nutritionist: 'I strongly advise you to cut down on saturated fats.' — Client: 'Understood, I will switch to olive oil and steamed fish.'",
        dialogueVi: "Chuyên gia dinh dưỡng: 'Tôi khuyên bạn nên cắt giảm chất béo bão hòa.' — Khách hàng: 'Tôi hiểu rồi, tôi sẽ chuyển sang dùng dầu ô liu và cá hấp.'",
        speakerA: "Nutritionist",
        speakerB: "Client",
        usageContext: "Đưa ra lời khuyên chuyên môn y tế có tính thuyết phục cao.",
      },
      {
        id: 3,
        pattern: "It is essential that you complete the full course of...",
        structure: "It is essential that + S + (should) V-inf + ...",
        dialogueEn: "Pharmacist: 'It is essential that you complete the full course of antibiotics.' — Customer: 'Even if I feel completely fine after three days?' — Pharmacist: 'Yes, to prevent bacterial resistance.'",
        dialogueVi: "Dược sĩ: 'Điều thiết yếu là bạn phải uống hết liệu trình kháng sinh.' — Khách: 'Dù sau ba ngày tôi thấy khỏe hẳn rồi sao?' — Dược sĩ: 'Đúng vậy, để phòng ngừa vi khuẩn kháng thuốc.'",
        speakerA: "Pharmacist",
        speakerB: "Customer",
        usageContext: "Nhắc nhở tuân thủ nghiêm ngặt phác đồ điều trị của bác sĩ.",
      },
    ],
  },

  // -------------------------------------------------------------
  // GRADE 12: PAST SIMPLE VS CONTINUOUS & INSPIRING LIVES
  // -------------------------------------------------------------
  "life-stories": {
    topicKey: "life-stories",
    title: "Unit 1: Life Stories We Admire • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "During his medical experiments, the laboratory caught fire.",
        startingPhrase: "While he was",
        correctAnswer: "While he was conducting his medical experiments, the laboratory caught fire.",
        acceptableAnswers: [
          "While he was doing his medical experiments, the laboratory caught fire."
        ],
        hint: "'During + Noun' chuyển thành 'While + S + was/were + V-ing'.",
        explanation: "Chuyển từ giới từ 'During + danh từ' sang mệnh đề trạng ngữ chỉ thời gian với 'While + thì Quá khứ tiếp diễn' để nhấn mạnh hành động đang diễn ra liên tục thì có biến cố bất ngờ xảy đến.",
      },
      {
        id: 2,
        originalSentence: "She was lecturing in the amphitheater and suddenly the electricity went out.",
        startingPhrase: "When the electricity",
        correctAnswer: "When the electricity went out, she was lecturing in the amphitheater.",
        hint: "'When + Quá khứ đơn (hành động xen vào), Quá khứ tiếp diễn (hành động đang diễn ra)'.",
        explanation: "Cấu trúc kết hợp thì với When: Sự việc mất điện đột ngột xen vào dùng Quá khứ đơn, hành động đang giảng bài dùng Quá khứ tiếp diễn.",
      },
      {
        id: 3,
        originalSentence: "At 8 PM yesterday, President Ho Chi Minh was drafting the historic declaration.",
        startingPhrase: "President Ho Chi Minh was in the middle of",
        correctAnswer: "President Ho Chi Minh was in the middle of drafting the historic declaration at 8 PM yesterday.",
        hint: "'S + was/were + V-ing' tương đương với 'S + was/were in the middle of + V-ing'.",
        explanation: "'In the middle of + V-ing' là thành ngữ tự nhiên mang nghĩa 'đang dở tay làm việc gì đó'.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "While the young scientist [A] was experimented [B] with the vaccine, he noticed [C] an unexpected reaction [D].",
        segments: [
          { key: "A", text: "While the young scientist" },
          { key: "B", text: "was experimented" },
          { key: "C", text: "noticed" },
          { key: "D", text: "reaction" },
        ],
        correctError: "B",
        correction: "was experimenting",
        explanation: "Chủ ngữ là nhà khoa học đang chủ động làm thí nghiệm -> Phải dùng thể chủ động của Quá khứ tiếp diễn 'was experimenting', 'was experimented' là thể bị động mang nghĩa vô lý.",
      },
      {
        id: 2,
        sentence: "The war [A] broke out while my grandfather [B] served [C] in the border military outpost [D].",
        segments: [
          { key: "A", text: "The war" },
          { key: "B", text: "while my grandfather" },
          { key: "C", text: "served" },
          { key: "D", text: "military outpost" },
        ],
        correctError: "C",
        correction: "was serving",
        explanation: "Sau 'while' là hành động đang diễn ra liên tục tại đồn biên phòng -> Phải dùng Quá khứ tiếp diễn 'was serving'.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["dedicated", "independence", "hero", "his", "national", "entire", "the", "life", "to"],
        correctSentence: "The hero dedicated his entire life to national independence.",
        translationVi: "Vị anh hùng đã cống hiến trọn vẹn cuộc đời mình cho nền độc lập dân tộc.",
        grammarFocus: "S + dedicated + his life to + Noun (Quá khứ đơn lịch sử)",
        explanation: "Cấu trúc cống hiến: dedicate one's life to something / doing something.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "What I admire most about him/her is...",
        structure: "What I admire most about + Person + is + Noun / Clause",
        dialogueEn: "Presenter: 'Who is your greatest historical inspiration?' — Student: 'What I admire most about President Ho Chi Minh is his boundless selflessness and wisdom.'",
        dialogueVi: "Người dẫn chương trình: 'Ai là nguồn cảm hứng lịch sử lớn nhất của bạn?' — Học sinh: 'Điều em khâm phục nhất ở Chủ tịch Hồ Chí Minh là đức hy sinh quên mình và trí tuệ vô biên của Người.'",
        speakerA: "Presenter",
        speakerB: "Student",
        usageContext: "Thuyết trình và bày tỏ cảm nghĩ trong phần thi Nói (IELTS / THPT).",
      },
    ],
  },

  // -------------------------------------------------------------
  // THE ENVIRONMENT & SUSTAINABLE ECOSYSTEM
  // -------------------------------------------------------------
  "environment": {
    topicKey: "environment",
    title: "Protecting the Environment & Ecosystem • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "People cut down trees excessively, so global temperatures rise every year.",
        startingPhrase: "If people did not",
        correctAnswer: "If people did not cut down trees excessively, global temperatures would not rise every year.",
        acceptableAnswers: [
          "If people didn't cut down trees excessively, global temperatures wouldn't rise every year."
        ],
        hint: "Chuyển câu nguyên nhân - kết quả ở hiện tại sang Câu điều kiện loại 2 (ngược với hiện tại).",
        explanation: "Câu điều kiện loại 2 diễn tả giả định trái ngược với thực tế ở hiện tại: If + S + V2/ed, S + would/could (not) + V-inf.",
      },
      {
        id: 2,
        originalSentence: "Volunteers will plant over five thousand mangrove trees along the coast next Saturday.",
        startingPhrase: "Over five thousand mangrove trees",
        correctAnswer: "Over five thousand mangrove trees will be planted along the coast next Saturday.",
        hint: "Chuyển câu chủ động thì Tương lai đơn sang Bị động: 'will be + V3/ed'.",
        explanation: "Thể bị động của Tương lai đơn: S + will be + V3/ed (+ by O) + time.",
      },
      {
        id: 3,
        originalSentence: "Because the factory discharged untreated toxic wastewater, the local river was severely polluted.",
        startingPhrase: "Due to discharging",
        correctAnswer: "Due to discharging untreated toxic wastewater from the factory, the local river was severely polluted.",
        acceptableAnswers: [
          "Due to the discharge of untreated toxic wastewater, the local river was severely polluted."
        ],
        hint: "'Because + Clause' chuyển thành 'Due to + V-ing / Noun phrase'.",
        explanation: "Cấu trúc chuyển mệnh đề trạng ngữ chỉ nguyên nhân sang cụm giới từ 'Due to + Noun/V-ing'.",
      },
      {
        id: 4,
        originalSentence: "It is strictly forbidden for visitors to litter or light campfires in this national reserve.",
        startingPhrase: "Visitors must not",
        correctAnswer: "Visitors must not litter or light campfires in this national reserve.",
        hint: "Dùng động từ khuyết thiếu 'must not' để chỉ lệnh cấm ngặt nghèo.",
        explanation: "'It is forbidden to V' = 'S + must not + V-inf' (cấm chỉ, không được phép).",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "If governments [A] will invest [B] in clean solar energy, fossil fuel [C] consumption will drop [D] dramatically.",
        segments: [
          { key: "A", text: "If governments" },
          { key: "B", text: "will invest" },
          { key: "C", text: "fossil fuel" },
          { key: "D", text: "will drop" },
        ],
        correctError: "B",
        correction: "invest",
        explanation: "Trong mệnh đề điều kiện 'If' của Câu điều kiện loại 1, động từ chia ở Hiện tại đơn (invest), tuyệt đối không dùng trợ động từ 'will'.",
      },
      {
        id: 2,
        sentence: "Thousands tons [A] of single-use plastic [B] are discarded [C] into the oceans annually [D].",
        segments: [
          { key: "A", text: "Thousands tons" },
          { key: "B", text: "single-use plastic" },
          { key: "C", text: "are discarded" },
          { key: "D", text: "annually" },
        ],
        correctError: "A",
        correction: "Thousands of tons",
        explanation: "Cụm danh từ chỉ lượng ước lượng: 'Thousands of tons of...' (bắt buộc phải có giới từ 'of' sau thousands).",
      },
      {
        id: 3,
        sentence: "Illegal deforestation [A] causes severe soil erosion, [B] that leads [C] to devastating seasonal floods [D].",
        segments: [
          { key: "A", text: "Illegal deforestation" },
          { key: "B", text: "soil erosion," },
          { key: "C", text: "that leads" },
          { key: "D", text: "seasonal floods" },
        ],
        correctError: "C",
        correction: "which leads",
        explanation: "Trong mệnh đề quan hệ không xác định (đứng sau dấu phẩy để bổ nghĩa cho cả mệnh đề phía trước), bắt buộc dùng đại từ 'which', không bao giờ dùng 'that'.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["warming", "effectively", "planting", "helps", "more", "mitigate", "global", "trees"],
        correctSentence: "Planting more trees helps mitigate global warming effectively.",
        translationVi: "Trồng nhiều cây xanh giúp giảm nhẹ sự nóng lên toàn cầu một cách hiệu quả.",
        grammarFocus: "Gerund as Subject: V-ing + V(s/es) + Object + Adv",
        explanation: "Danh động từ 'Planting more trees' làm chủ ngữ số ít, đi với động từ 'helps mitigate'.",
      },
      {
        id: 2,
        jumbledWords: ["carbon", "renewable", "energy", "significantly", "footprint", "reduces", "our", "sources"],
        correctSentence: "Renewable energy sources reduce our carbon footprint significantly.",
        translationVi: "Các nguồn năng lượng tái tạo giúp giảm đáng kể lượng phát thải carbon của chúng ta.",
        grammarFocus: "S (plural noun) + V + O + Adv",
        explanation: "Chủ ngữ số nhiều 'Renewable energy sources' đi với động từ nguyên mẫu 'reduce'.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "What practical measures can we take to...?",
        structure: "What practical measures can we take + to V-inf + ...?",
        dialogueEn: "Interviewer: 'What practical measures can we take to cut single-use plastic in schools?' — Principal: 'We can eliminate plastic straws and encourage stainless steel bottles.'",
        dialogueVi: "Phóng viên: 'Chúng ta có thể thực hiện những biện pháp thiết thực nào để cắt giảm đồ nhựa dùng một lần trong trường học?' — Hiệu trưởng: 'Chúng tôi có thể loại bỏ ống hút nhựa và khuyến khích học sinh dùng bình nước inox.'",
        speakerA: "Interviewer",
        speakerB: "Principal",
        usageContext: "Đề xuất và thảo luận giải pháp bảo vệ môi trường trong các buổi tọa đàm và kỳ thi Speaking.",
      },
      {
        id: 2,
        pattern: "I am firmly convinced that transitioning to... is imperative.",
        structure: "I am firmly convinced that + Gerund / S + is imperative",
        dialogueEn: "Speaker: 'I am firmly convinced that transitioning to renewable energy is imperative for our survival.' — Audience: 'We completely agree with that viewpoint.'",
        dialogueVi: "Diễn giả: 'Tôi tin chắc rằng việc chuyển đổi sang năng lượng tái tạo là điều tối quan trọng đối với sự sống còn của chúng ta.' — Khán thính giả: 'Chúng tôi hoàn toàn đồng tình với quan điểm ấy.'",
        speakerA: "Speaker",
        speakerB: "Audience",
        usageContext: "Bày tỏ niềm tin mãnh liệt mang tính học thuật cao trong bài luận và thuyết trình.",
      },
    ],
  },

  // -------------------------------------------------------------
  // ARTIFICIAL INTELLIGENCE & SMART INVENTIONS
  // -------------------------------------------------------------
  "artificial-intelligence": {
    topicKey: "artificial-intelligence",
    title: "Artificial Intelligence & Inventions • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "The automated translation tool is so efficient that it can process complex legal texts in seconds.",
        startingPhrase: "It is such",
        correctAnswer: "It is such an efficient automated translation tool that it can process complex legal texts in seconds.",
        hint: "Chuyển 'so + adj + that' sang 'such + (a/an) + adj + noun + that'.",
        explanation: "Công thức biến đổi giữa SO và SUCH: S + be + so + adj + that = It + be + such + (a/an) + adj + N + that.",
      },
      {
        id: 2,
        originalSentence: "Although artificial intelligence offers immense breakthroughs, algorithmic bias remains a challenge.",
        startingPhrase: "Despite offering",
        correctAnswer: "Despite offering immense breakthroughs, artificial intelligence still poses algorithmic bias as a challenge.",
        acceptableAnswers: [
          "Despite offering immense breakthroughs, artificial intelligence still faces algorithmic bias challenges."
        ],
        hint: "Chuyển liên từ 'Although + clause' sang giới từ 'Despite + V-ing'.",
        explanation: "'Although + S + V' chuyển đổi tương đương với 'Despite / In spite of + V-ing / Noun phrase'.",
      },
      {
        id: 3,
        originalSentence: "Computer vision engineers programmed autonomous drones to deliver emergency medical kits.",
        startingPhrase: "Autonomous drones were",
        correctAnswer: "Autonomous drones were programmed to deliver emergency medical kits by computer vision engineers.",
        hint: "Chuyển câu chủ động Quá khứ đơn sang Bị động: 'were + V3/ed'.",
        explanation: "Thể bị động: S + was/were + V3/ed + to V-inf + by O.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "Deep learning algorithms [A] enable machines [B] recognizing [C] human speech patterns with precision [D].",
        segments: [
          { key: "A", text: "Deep learning algorithms" },
          { key: "B", text: "enable machines" },
          { key: "C", text: "recognizing" },
          { key: "D", text: "with precision" },
        ],
        correctError: "C",
        correction: "to recognize",
        explanation: "Cấu trúc động từ: 'enable someone/something to do something' (cho phép/tạo điều kiện làm gì) -> Phải dùng 'to recognize', không dùng V-ing.",
      },
      {
        id: 2,
        sentence: "The smartphone [A] who [B] revolutionised global communications [C] was introduced in the late 2000s [D].",
        segments: [
          { key: "A", text: "The smartphone" },
          { key: "B", text: "who" },
          { key: "C", text: "global communications" },
          { key: "D", text: "in the late 2000s" },
        ],
        correctError: "B",
        correction: "which / that",
        explanation: "Đại từ quan hệ thay thế cho danh từ chỉ vật 'The smartphone' phải là 'which' hoặc 'that', 'who' chỉ dùng cho người.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["intelligence", "diagnostics", "artificial", "transforming", "is", "medical", "rapidly"],
        correctSentence: "Artificial intelligence is rapidly transforming medical diagnostics.",
        translationVi: "Trí tuệ nhân tạo đang chuyển đổi nhanh chóng lĩnh vực chẩn đoán y khoa.",
        grammarFocus: "S + is + Adv + V-ing + O (Hiện tại tiếp diễn)",
        explanation: "Trạng từ 'rapidly' đứng giữa trợ động từ 'is' và động từ chính 'transforming'.",
      },
      {
        id: 2,
        jumbledWords: ["smart", "routine", "automate", "algorithms", "administrative", "tasks", "office"],
        correctSentence: "Smart algorithms automate routine office administrative tasks.",
        translationVi: "Các thuật toán thông minh tự động hóa các tác vụ hành chính văn phòng thường nhật.",
        grammarFocus: "S + V + O",
        explanation: "Chủ ngữ số nhiều 'Smart algorithms' đi với động từ nguyên mẫu 'automate'.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "Do you believe artificial intelligence could ever replace...?",
        structure: "Do you believe + S + could ever replace + Noun?",
        dialogueEn: "Journalist: 'Do you believe artificial intelligence could ever replace human teachers?' — Professor: 'Not entirely; AI can provide adaptive content, but human empathy and mentorship are irreplaceable.'",
        dialogueVi: "Nhà báo: 'Giáo sư có tin rằng trí tuệ nhân tạo có thể thay thế giáo viên con người không?' — Giáo sư: 'Không hoàn toàn; AI có thể cung cấp nội dung thích ứng, nhưng sự thấu cảm và dìu dắt của con người là không thể thay thế.'",
        speakerA: "Journalist",
        speakerB: "Professor",
        usageContext: "Trao đổi quan điểm về tác động của công nghệ đột phá trong kỷ nguyên số.",
      },
      {
        id: 2,
        pattern: "From an ethical standpoint, we ought to ensure that...",
        structure: "From an ethical standpoint, we ought to ensure that + Clause",
        dialogueEn: "Engineer: 'From an ethical standpoint, we ought to ensure that user privacy is safeguarded at all times.' — Manager: 'Absolutely, transparency is our core priority.'",
        dialogueVi: "Kỹ sư: 'Xét từ góc độ đạo đức, chúng ta phải đảm bảo rằng quyền riêng tư của người dùng được bảo vệ mọi lúc.' — Giám đốc: 'Chắc chắn rồi, tính minh bạch là ưu tiên cốt lõi của chúng ta.'",
        speakerA: "Engineer",
        speakerB: "Manager",
        usageContext: "Trình bày lập luận đạo đức công nghệ trong môi trường làm việc chuyên nghiệp.",
      },
    ],
  },

  // -------------------------------------------------------------
  // CITIES OF THE FUTURE & URBANISATION
  // -------------------------------------------------------------
  "cities-future": {
    topicKey: "cities-future",
    title: "Cities of the Future & Urbanisation • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "As urban populations grow larger, traffic congestion becomes more severe.",
        startingPhrase: "The larger urban populations grow,",
        correctAnswer: "The larger urban populations grow, the more severe traffic congestion becomes.",
        hint: "Dùng cấu trúc so sánh kép 'The + comparative..., the + comparative...'.",
        explanation: "Cấu trúc so sánh càng... càng...: The + tính từ so sánh hơn + S + V, the + tính từ so sánh hơn + S + V.",
      },
      {
        id: 2,
        originalSentence: "Architects are designing vertical gardens to purify air inside high-rise buildings.",
        startingPhrase: "Vertical gardens are",
        correctAnswer: "Vertical gardens are being designed by architects to purify air inside high-rise buildings.",
        hint: "Chuyển Hiện tại tiếp diễn sang Bị động: 'are being + V3/ed'.",
        explanation: "Thể bị động của Hiện tại tiếp diễn: S + is/are being + V3/ed + to V-inf.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "The more green spaces [A] a smart city builds [B], the most healthy [C] its residents feel [D].",
        segments: [
          { key: "A", text: "The more green spaces" },
          { key: "B", text: "a smart city builds" },
          { key: "C", text: "the most healthy" },
          { key: "D", text: "its residents feel" },
        ],
        correctError: "C",
        correction: "the healthier",
        explanation: "Trong cấu trúc so sánh kép 'The + comparative..., the + comparative...', cả hai vế đều phải ở dạng so sánh hơn ('the healthier'), không dùng so sánh nhất 'the most healthy'.",
      },
      {
        id: 2,
        sentence: "Autonomous electric buses [A] are equipped by [B] sensors to avoid [C] collisions with pedestrians [D].",
        segments: [
          { key: "A", text: "Autonomous electric buses" },
          { key: "B", text: "are equipped by" },
          { key: "C", text: "to avoid" },
          { key: "D", text: "collisions" },
        ],
        correctError: "B",
        correction: "are equipped with",
        explanation: "Cụm thành ngữ cố định: 'be equipped with something' (được trang bị thứ gì đó), không dùng giới từ 'by'.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["smart", "optimize", "infrastructure", "sensors", "traffic", "urban", "flow", "to"],
        correctSentence: "Smart sensors optimize urban infrastructure to facilitate traffic flow.",
        translationVi: "Các cảm biến thông minh tối ưu hóa hạ tầng đô thị để tạo thuận lợi cho luồng giao thông.",
        grammarFocus: "S + V + O + to V-inf",
        explanation: "Chỉ mục đích bằng 'to V-inf': facilitate traffic flow.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "How do you envision sustainable urban living in 2050?",
        structure: "How do you envision + Noun / Gerund + in + Year?",
        dialogueEn: "Host: 'How do you envision sustainable urban living in 2050?' — Architect: 'Zero-emission public transport and solar glass towers will dominate our skylines.'",
        dialogueVi: "MC: 'Bạn mường tượng lối sống đô thị bền vững năm 2050 ra sao?' — Kiến trúc sư: 'Giao thông công cộng không phát thải và những tòa tháp kính quang điện sẽ thống trị cảnh quan thành phố.'",
        speakerA: "Host",
        speakerB: "Architect",
        usageContext: "Dự phóng viễn cảnh tương lai trong các đề tài nghiên cứu đô thị thông minh.",
      },
    ],
  },

  // -------------------------------------------------------------
  // THE WORLD OF WORK & CAREER PATHS
  // -------------------------------------------------------------
  "world-of-work": {
    topicKey: "world-of-work",
    title: "The World of Work & Career Paths • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "'I will submit my updated resume to the software company tomorrow,' Linh said.",
        startingPhrase: "Linh said that",
        correctAnswer: "Linh said that she would submit her updated resume to the software company the following day.",
        acceptableAnswers: [
          "Linh said that she would submit her updated resume to the software company the next day."
        ],
        hint: "Chuyển câu trực tiếp sang gián tiếp: lùi thì 'will -> would', đổi ngôi 'I -> she, my -> her', đổi trạng từ 'tomorrow -> the following day'.",
        explanation: "Quy tắc câu tường thuật (Reported Speech): lùi thì, đổi đại từ nhân xưng và trạng từ chỉ thời gian.",
      },
      {
        id: 2,
        originalSentence: "It is necessary for university graduates to acquire critical digital skills.",
        startingPhrase: "University graduates must",
        correctAnswer: "University graduates must acquire critical digital skills.",
        hint: "'It is necessary for sb to V' = 'S + must + V-inf'.",
        explanation: "Động từ khuyết thiếu 'must' diễn tả tính cấp thiết và bắt buộc đối với sinh viên tốt nghiệp.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "The interviewer asked [A] me why did I apply [B] for this position instead of [C] remaining in academia [D].",
        segments: [
          { key: "A", text: "The interviewer asked" },
          { key: "B", text: "why did I apply" },
          { key: "C", text: "instead of" },
          { key: "D", text: "remaining in academia" },
        ],
        correctError: "B",
        correction: "why I applied",
        explanation: "Trong câu tường thuật gián tiếp dạng Wh-question, trật tự từ là Wh-word + S + V (không đảo trợ động từ 'did' lên trước chủ ngữ).",
      },
      {
        id: 2,
        sentence: "All candidates must [A] to bring [B] valid identification documents [C] to the assessment center [D].",
        segments: [
          { key: "A", text: "All candidates must" },
          { key: "B", text: "to bring" },
          { key: "C", text: "identification documents" },
          { key: "D", text: "to the assessment center" },
        ],
        correctError: "B",
        correction: "bring",
        explanation: "Sau động từ khuyết thiếu 'must' là động từ nguyên mẫu không 'to' (V-inf) -> 'bring', không dùng 'to bring'.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["skills", "adaptability", "and", "job", "lifelong", "learning", "are", "vital", "in", "the", "modern", "market"],
        correctSentence: "Adaptability and lifelong learning are vital skills in the modern job market.",
        translationVi: "Khả năng thích ứng và học tập suốt đời là những kỹ năng sống còn trong thị trường việc làm hiện đại.",
        grammarFocus: "Compound Subject + are + Adjective + Noun phrase",
        explanation: "Chủ ngữ ghép 'Adaptability and lifelong learning' đi với to be số nhiều 'are'.",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "What do you consider your greatest professional asset?",
        structure: "What do you consider + your greatest + Noun?",
        dialogueEn: "Recruiter: 'What do you consider your greatest professional asset?' — Candidate: 'My ability to synthesize complex data and lead collaborative teams under tight deadlines.'",
        dialogueVi: "Nhà tuyển dụng: 'Bạn coi đâu là thế mạnh chuyên môn lớn nhất của mình?' — Ứng viên: 'Khả năng tổng hợp dữ liệu phức tạp và dẫn dắt đội ngũ làm việc ăn ý dưới áp lực thời gian gấp rút.'",
        speakerA: "Recruiter",
        speakerB: "Candidate",
        usageContext: "Trả lời phỏng vấn tuyển dụng chuyên nghiệp cho các vị trí việc làm chất lượng cao.",
      },
    ],
  },

  // -------------------------------------------------------------
  // THE GENERATION GAP & FAMILY HARMONY
  // -------------------------------------------------------------
  "generation-gap": {
    topicKey: "generation-gap",
    title: "The Generation Gap & Relationships • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "It is mandatory for children to show courtesy to grandparents.",
        startingPhrase: "Children have to",
        correctAnswer: "Children have to show courtesy to grandparents.",
        hint: "'It is mandatory to V' = 'S + have to + V-inf'.",
        explanation: "'Have to' diễn tả sự bắt buộc xuất phát từ quy chuẩn xã hội hoặc phong tục gia đình.",
      },
      {
        id: 2,
        originalSentence: "My parents do not allow me to stay out beyond 10 PM on school nights.",
        startingPhrase: "My parents forbid me",
        correctAnswer: "My parents forbid me from staying out beyond 10 PM on school nights.",
        hint: "'forbid sb from + V-ing': cấm ai làm việc gì.",
        explanation: "Cấu trúc tương đương: not allow sb to V = forbid sb from V-ing.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "Young people ought [A] discuss their perspectives [B] openly instead of [C] withdrawing into silence [D].",
        segments: [
          { key: "A", text: "ought" },
          { key: "B", text: "discuss their perspectives" },
          { key: "C", text: "instead of" },
          { key: "D", text: "withdrawing into silence" },
        ],
        correctError: "A",
        correction: "ought to",
        explanation: "Động từ khuyết thiếu 'ought' bắt buộc phải có 'to' đi kèm: 'ought to discuss', không bao giờ đứng độc lập trước động từ nguyên mẫu.",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["communication", "gap", "generation", "bridge", "helps", "open", "the"],
        correctSentence: "Open communication helps bridge the generation gap.",
        translationVi: "Giao tiếp cởi mở giúp thu hẹp khoảng cách thế hệ.",
        grammarFocus: "S + helps + (to) V + O",
        explanation: "Thành ngữ: bridge the generation gap (thu hẹp khoảng cách thế hệ).",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "How do you navigate differences in opinion with your parents?",
        structure: "How do you navigate + differences in opinion + with + Person?",
        dialogueEn: "Counselor: 'How do you navigate differences in opinion with your parents?' — Teen: 'I practice active listening first and express my reasoning calmly without raising my voice.'",
        dialogueVi: "Chuyên viên tư vấn: 'Em xử lý những bất đồng quan điểm với cha mẹ như thế nào?' — Thiếu niên: 'Em tập lắng nghe thấu cảm trước, rồi mới giải thích lý lẽ một cách bình tĩnh mà không to tiếng.'",
        speakerA: "Counselor",
        speakerB: "Teen",
        usageContext: "Tâm lý học đường và giải quyết mâu thuẫn gia đình tích cực.",
      },
    ],
  },

  // -------------------------------------------------------------
  // MASS MEDIA & DIGITAL CITIZENSHIP
  // -------------------------------------------------------------
  "mass-media": {
    topicKey: "mass-media",
    title: "Mass Media & Digital Information • Luyện tập đa dạng & Mẫu câu",
    transformations: [
      {
        id: 1,
        originalSentence: "The news site published the breaking report before the official authorities verified the facts.",
        startingPhrase: "By the time the official authorities verified the facts,",
        correctAnswer: "By the time the official authorities verified the facts, the news site had published the breaking report.",
        hint: "Kết hợp thì Quá khứ hoàn thành (hành động xảy ra trước) và Quá khứ đơn (By the time + V2/ed).",
        explanation: "Quy tắc: By the time + S + V2/ed, S + had + V3/ed.",
      },
    ],
    errorIdentifications: [
      {
        id: 1,
        sentence: "Social networking sites [A] provides [B] instant communication, but fake news spread [C] alarmingly fast [D].",
        segments: [
          { key: "A", text: "Social networking sites" },
          { key: "B", text: "provides" },
          { key: "C", text: "fake news spread" },
          { key: "D", text: "alarmingly fast" },
        ],
        correctError: "B",
        correction: "provide",
        explanation: "Chủ ngữ số nhiều 'Social networking sites' đi với động từ nguyên mẫu không 's' ('provide').",
      },
    ],
    sentenceUnscrambles: [
      {
        id: 1,
        jumbledWords: ["critical", "thinking", "distinguish", "allows", "citizens", "to", "truth", "rumors", "from"],
        correctSentence: "Critical thinking allows citizens to distinguish truth from rumors.",
        translationVi: "Tư duy phản biện cho phép công dân phân biệt sự thật với những lời đồn thổi.",
        grammarFocus: "S + allows + O + to V-inf + O1 + from + O2",
        explanation: "Cấu trúc: distinguish A from B (phân biệt A với B).",
      },
    ],
    communicativePatterns: [
      {
        id: 1,
        pattern: "How can internet users verify whether an online news source is trustworthy?",
        structure: "How can + S + verify whether + Clause?",
        dialogueEn: "Host: 'How can internet users verify whether an online news source is trustworthy?' — Expert: 'Check the author's credentials, cross-reference multiple reputable outlets, and examine the primary citations.'",
        dialogueVi: "MC: 'Người dùng internet có thể kiểm chứng một nguồn tin mạng có đáng tin hay không bằng cách nào?' — Chuyên gia: 'Hãy kiểm tra lý lịch tác giả, đối chiếu chéo nhiều tòa soạn uy tín và đọc kỹ các trích dẫn gốc.'",
        speakerA: "Host",
        speakerB: "Expert",
        usageContext: "Thảo luận về kỹ năng số và tư duy phản biện truyền thông trong thời đại số.",
      },
    ],
  },
};

/**
 * Tra cứu dữ liệu bài tập thực hành theo chủ đề hoặc slug của Unit
 * Hỗ trợ toàn diện 30 Unit của cả 3 khối lớp 10, 11, 12
 */
export function getUnitExerciseData(slugOrTopic: string): UnitExerciseData {
  const clean = slugOrTopic.toLowerCase();

  // Khớp trực tiếp nếu key có sẵn
  if (EXERCISE_BANK[clean]) {
    return EXERCISE_BANK[clean];
  }

  // 1. Gia đình, thói quen, nếp sống (Grade 10 Unit 1, Unit 7...)
  if (clean.includes("family") || clean.includes("home") || clean.includes("chore") || (clean.includes("unit-1") && clean.includes("10"))) {
    return EXERCISE_BANK["family-life"];
  }

  // 2. Sức khỏe, dinh dưỡng, lối sống lành mạnh (Grade 11 Unit 1, Grade 10 Unit 2...)
  if (clean.includes("health") || clean.includes("diet") || clean.includes("fitness") || clean.includes("longevity") || clean.includes("living") || (clean.includes("unit-1") && clean.includes("11"))) {
    return EXERCISE_BANK["healthy-life"];
  }

  // 3. Nhân vật truyền cảm hứng, cuộc đời, tiểu sử (Grade 12 Unit 1, Unit 7...)
  if (clean.includes("life-stories") || clean.includes("biography") || clean.includes("admire") || clean.includes("hero") || clean.includes("people") || (clean.includes("unit-1") && clean.includes("12"))) {
    return EXERCISE_BANK["life-stories"];
  }

  // 4. Môi trường, hệ sinh thái, biến đổi khí hậu (Grade 10 Unit 2/3/9/10, Grade 11 Unit 2/6, Grade 12 Unit 2/6)
  if (
    clean.includes("environment") ||
    clean.includes("green") ||
    clean.includes("ecotourism") ||
    clean.includes("nature") ||
    clean.includes("climate") ||
    clean.includes("planet") ||
    clean.includes("protect") ||
    clean.includes("endangered") ||
    clean.includes("unit-2") ||
    clean.includes("unit-6") ||
    clean.includes("unit-9") ||
    clean.includes("unit-10")
  ) {
    return EXERCISE_BANK["environment"];
  }

  // 5. Trí tuệ nhân tạo, phát minh, công nghệ số (Grade 10 Unit 5, Grade 11 Unit 3, Grade 12 Unit 3/5)
  if (
    clean.includes("invent") ||
    clean.includes("ai") ||
    clean.includes("artificial") ||
    clean.includes("tech") ||
    clean.includes("digital") ||
    clean.includes("science") ||
    clean.includes("robot") ||
    clean.includes("unit-5")
  ) {
    return EXERCISE_BANK["artificial-intelligence"];
  }

  // 6. Thành phố tương lai, đô thị hóa (Grade 11 Unit 3, Grade 12 Unit 8)
  if (clean.includes("city") || clean.includes("cities") || clean.includes("urban") || clean.includes("future") || clean.includes("unit-3")) {
    return EXERCISE_BANK["cities-future"];
  }

  // 7. Khoảng cách thế hệ, quan hệ xã hội (Grade 11 Unit 2/7)
  if (clean.includes("generation") || clean.includes("gap") || clean.includes("parent") || clean.includes("relationship") || clean.includes("unit-7")) {
    return EXERCISE_BANK["generation-gap"];
  }

  // 8. Truyền thông đại chúng, mạng xã hội (Grade 11 Unit 4/8, Grade 12 Unit 4)
  if (clean.includes("media") || clean.includes("press") || clean.includes("communication") || clean.includes("internet") || clean.includes("unit-4")) {
    return EXERCISE_BANK["mass-media"];
  }

  // 9. Thế giới nghề nghiệp, việc làm (Grade 10 Unit 8, Grade 12 Unit 9)
  if (clean.includes("work") || clean.includes("career") || clean.includes("job") || clean.includes("vocation") || clean.includes("profession") || clean.includes("unit-8")) {
    return EXERCISE_BANK["world-of-work"];
  }

  // Phân phối dự phòng mượt mà theo chu kỳ cho mọi Unit khác
  const allBankKeys = Object.keys(EXERCISE_BANK);
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash << 5) - hash + clean.charCodeAt(i);
    hash |= 0;
  }
  const selectedIndex = Math.abs(hash) % allBankKeys.length;
  return EXERCISE_BANK[allBankKeys[selectedIndex]];
}
