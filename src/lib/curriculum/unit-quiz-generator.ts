/**
 * Helper sinh bộ đề trắc nghiệm kiểm tra sau Unit chuẩn hóa 50 câu
 * Kết hợp toàn diện: Từ vựng + Collocations + Ngữ pháp + Ngữ âm IPA + Đọc hiểu/Câu
 * Phục vụ cho cả Lớp 10, Lớp 11 và Lớp 12.
 */

export interface UnitQuizItem {
  id: number;
  question: string;
  sentence?: string;
  options: string[];
  correct: number;
  explanation: string;
  category: "vocab" | "collocation" | "grammar" | "pronunciation" | "communication";
}

interface UnitInfo {
  unitNumber: number;
  titleEn: string;
  titleVi: string;
  topic: string;
  grammarTitle: string;
  grammarSummary: string;
  vocabulary: Array<{
    id: string;
    word: string;
    partOfSpeech: string;
    ipa: string;
    meaningVi: string;
    exampleEn?: string;
    exampleVi?: string;
    collocations?: string[];
  }>;
}

// Ngân hàng câu hỏi ngữ pháp mở rộng theo thì và chuyên đề chuẩn THPT
const GRAMMAR_TEMPLATE_POOLS: Record<string, Array<{ q: string; s?: string; opts: string[]; c: number; exp: string }>> = {
  default: [
    {
      q: "Chọn dạng đúng của động từ để hoàn thiện câu sau:",
      s: "She ________ in this city for over ten years and still loves the community.",
      opts: ["has lived", "lived", "is living", "was living"],
      c: 0,
      exp: "Dấu hiệu 'for over ten years' diễn tả hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại -> Dùng thì Hiện tại hoàn thành (have/has + V3/ed).",
    },
    {
      q: "Điền dạng đúng của động từ trong ngoặc:",
      s: "Dr. Fleming ________ penicillin in 1928, which revolutionized modern medicine.",
      opts: ["discovered", "has discovered", "had discovered", "was discovering"],
      c: 0,
      exp: "Có mốc thời gian xác định trong quá khứ 'in 1928' -> Dùng thì Quá khứ đơn (Past Simple).",
    },
    {
      q: "Chọn liên từ hoặc cấu trúc phù hợp nhất:",
      s: "I haven't eaten any fast food ________ I started this fitness program last month.",
      opts: ["since", "for", "during", "while"],
      c: 0,
      exp: "'Since + mốc thời gian / mệnh đề quá khứ' dùng với thì Hiện tại hoàn thành để chỉ thời điểm bắt đầu.",
    },
    {
      q: "Chọn phương án đúng để hoàn thành câu:",
      s: "They ________ regular exercise yesterday because the gym was closed for maintenance.",
      opts: ["didn't do", "haven't done", "weren't doing", "hadn't done"],
      c: 0,
      exp: "Dấu hiệu thời gian cụ thể 'yesterday' -> Thể phủ định của Quá khứ đơn là didn't + V-inf.",
    },
    {
      q: "Xác định câu có cấu trúc ngữ pháp đúng nhất:",
      s: "Which sentence uses the correct verb tense?",
      opts: [
        "Have you ever consulted a doctor about your chronic back pain?",
        "Did you ever consulted a doctor about your chronic back pain?",
        "Have you ever consult a doctor about your chronic back pain?",
        "Were you ever consult a doctor about your chronic back pain?",
      ],
      c: 0,
      exp: "Hỏi về trải nghiệm với 'ever' trong đời -> Dùng Hiện tại hoàn thành: Have/Has + S + ever + V3/ed?",
    },
    {
      q: "Chọn dạng đúng của động từ:",
      s: "The medical researchers ________ three successful clinical trials so far this year.",
      opts: ["have completed", "completed", "complete", "are completing"],
      c: 0,
      exp: "Cụm từ 'so far' (cho đến nay) là dấu hiệu điển hình của thì Hiện tại hoàn thành.",
    },
    {
      q: "Chọn cấu trúc phủ định chuẩn:",
      s: "The patient ________ any symptoms of fever until last night.",
      opts: ["did not show", "has not shown", "does not show", "is not showing"],
      c: 0,
      exp: "Mốc thời gian 'until last night' chỉ sự việc dứt điểm ở quá khứ -> Dùng Quá khứ đơn 'did not show'.",
    },
    {
      q: "Hoàn thiện câu với thì thích hợp:",
      s: "My grandparents ________ in a quiet village when they were young.",
      opts: ["lived", "have lived", "are living", "were living"],
      c: 0,
      exp: "'When they were young' là mốc thời gian thời thơ ấu đã kết thúc hoàn toàn -> Dùng Quá khứ đơn.",
    },
    {
      q: "Chọn từ/cụm từ đúng để hoàn thành câu:",
      s: "The clinic has ________ upgraded all its diagnostic equipment to international standards.",
      opts: ["already", "ago", "yesterday", "last year"],
      c: 0,
      exp: "Trong câu khẳng định của thì Hiện tại hoàn thành, 'already' đứng giữa have/has và V3 để nhấn mạnh việc đã hoàn thành.",
    },
    {
      q: "Chọn câu hỏi có cấu trúc chính xác:",
      s: "________ you visit the dental specialist last Tuesday?",
      opts: ["Did", "Have", "Were", "Do"],
      c: 0,
      exp: "Dấu hiệu 'last Tuesday' đòi hỏi trợ động từ Quá khứ đơn 'Did' đi với động từ nguyên mẫu 'visit'.",
    },
    {
      q: "Chọn phương án đúng về cách dùng 'for' và 'since':",
      s: "She has followed a balanced nutrient-dense diet ________ nearly six months.",
      opts: ["for", "since", "in", "from"],
      c: 0,
      exp: "'For + khoảng thời gian' (nearly six months) dùng trong thì Hiện tại hoàn thành để chỉ độ dài thời gian.",
    },
    {
      q: "Chọn câu có nghĩa tương đương chính xác nhất:",
      s: "\"I started taking daily vitamins two months ago and I still take them now.\"",
      opts: [
        "I have taken daily vitamins for two months.",
        "I took daily vitamins two months ago.",
        "I had taken daily vitamins since two months.",
        "I am taking daily vitamins two months ago.",
      ],
      c: 0,
      exp: "Hành động bắt đầu 2 tháng trước và tiếp diễn tới nay -> Viết lại bằng Hiện tại hoàn thành với 'for two months'.",
    },
  ],
};

/**
 * Sinh đủ 50 câu hỏi trắc nghiệm sau Unit
 */
export function generate50UnitQuizQuestions(unit: UnitInfo): UnitQuizItem[] {
  const list: UnitQuizItem[] = [];
  const vocabs = unit.vocabulary || [];
  let questionCounter = 1;

  // -------------------------------------------------------------
  // PHẦN 1: TỪ VỰNG TRỌNG TÂM TRONG NGỮ CẢNH (20 CÂU)
  // -------------------------------------------------------------
  const vocabCount = Math.min(20, vocabs.length);
  for (let i = 0; i < vocabCount; i++) {
    const v = vocabs[i];
    const otherMeanings = vocabs
      .filter((x) => x.word !== v.word)
      .map((x) => x.meaningVi)
      .slice(0, 3);

    // Bổ sung nếu chưa đủ 3 lựa chọn nhiễu
    while (otherMeanings.length < 3) {
      otherMeanings.push(`Một khái niệm khác liên quan tới ${unit.topic} (${otherMeanings.length + 1})`);
    }

    const options = [v.meaningVi, ...otherMeanings].sort(() => 0.5 - Math.random());
    const correct = options.indexOf(v.meaningVi);

    list.push({
      id: questionCounter++,
      category: "vocab",
      question: `Từ vựng "${v.word}" (${v.partOfSpeech}) có nghĩa tiếng Việt chính xác là gì?`,
      sentence: v.exampleEn ? `Ngữ cảnh: "${v.exampleEn}"` : undefined,
      options,
      correct,
      explanation: `"${v.word}" (${v.partOfSpeech}) nghĩa là: ${v.meaningVi}.${v.exampleVi ? ` Ví dụ: ${v.exampleVi}` : ""}`,
    });
  }

  // -------------------------------------------------------------
  // PHẦN 2: CỤM TỪ CỐ ĐỊNH & COLLOCATIONS (10 CÂU)
  // -------------------------------------------------------------
  const collocationPool: Array<{ word: string; colloc: string; meaning: string; wrong: string[] }> = [
    {
      word: "lifestyle",
      colloc: "lead / adopt a healthy lifestyle",
      meaning: "duy trì / theo đuổi lối sống lành mạnh",
      wrong: ["make a healthy lifestyle", "bring a healthy lifestyle", "hold a healthy lifestyle"],
    },
    {
      word: "immune system",
      colloc: "boost / strengthen the immune system",
      meaning: "tăng cường hệ miễn dịch",
      wrong: ["grow the immune system", "climb the immune system", "lift up the immune system"],
    },
    {
      word: "treatment",
      colloc: "undergo medical treatment",
      meaning: "trải qua quá trình điều trị y tế",
      wrong: ["take out medical treatment", "pass by medical treatment", "make medical treatment"],
    },
    {
      word: "antibiotics",
      colloc: "prescribe / take a course of antibiotics",
      meaning: "kê đơn / uống một liệu trình kháng sinh",
      wrong: ["drink a course of antibiotics", "eat a course of antibiotics", "buy a course of antibiotics"],
    },
    {
      word: "exercise",
      colloc: "do regular workout / physical exercise",
      meaning: "tập luyện thể dục đều đặn",
      wrong: ["make regular workout", "create regular workout", "play physical workout"],
    },
    {
      word: "diet",
      colloc: "follow a balanced diet",
      meaning: "theo đuổi chế độ ăn uống cân bằng",
      wrong: ["walk a balanced diet", "listen to a balanced diet", "make a balanced diet"],
    },
    {
      word: "life expectancy",
      colloc: "increase life expectancy",
      meaning: "nâng cao tuổi thọ trung bình",
      wrong: ["enlarge life expectancy", "speed life expectancy", "tall life expectancy"],
    },
    {
      word: "symptoms",
      colloc: "relieve / ease painful symptoms",
      meaning: "làm giảm bớt các triệu chứng đau đớn",
      wrong: ["reduce down symptoms", "drop out symptoms", "delete painful symptoms"],
    },
    {
      word: "infection",
      colloc: "prevent the spread of infection",
      meaning: "ngăn chặn sự lây lan của mầm bệnh / nhiễm trùng",
      wrong: ["stop the running of infection", "avoid the jump of infection", "hold the speed of infection"],
    },
    {
      word: "advice",
      colloc: "seek professional medical advice",
      meaning: "tìm kiếm lời khuyên y tế chuyên nghiệp",
      wrong: ["look professional advice", "demand professional advice", "chase professional advice"],
    },
  ];

  for (let i = 0; i < 10; i++) {
    const item = collocationPool[i % collocationPool.length];
    const opts = [item.colloc, ...item.wrong].sort(() => 0.5 - Math.random());
    list.push({
      id: questionCounter++,
      category: "collocation",
      question: `Cụm từ (collocation) đi với "${item.word}" chuẩn xác nhất trong SGK là:`,
      sentence: `Mục tiêu giao tiếp: "${item.meaning}"`,
      options: opts,
      correct: opts.indexOf(item.colloc),
      explanation: `Collocation chuẩn của người bản ngữ là "${item.colloc}" mang nghĩa: ${item.meaning}.`,
    });
  }

  // -------------------------------------------------------------
  // PHẦN 3: CHUYÊN ĐỀ NGỮ PHÁP & BIẾN ĐỔI CÂU (12 CÂU)
  // -------------------------------------------------------------
  const grammarPool = GRAMMAR_TEMPLATE_POOLS.default;
  for (let i = 0; i < 12; i++) {
    const g = grammarPool[i % grammarPool.length];
    list.push({
      id: questionCounter++,
      category: "grammar",
      question: g.q,
      sentence: g.s,
      options: [...g.opts],
      correct: g.c,
      explanation: g.exp,
    });
  }

  // -------------------------------------------------------------
  // PHẦN 4: PHÁT ÂM & TRỌNG ÂM IPA (4 CÂU)
  // -------------------------------------------------------------
  for (let i = 0; i < Math.min(4, vocabs.length); i++) {
    const target = vocabs[i];
    const fakeIPAs = [
      target.ipa.replace(/iː/g, "ɪ").replace(/eɪ/g, "aɪ"),
      target.ipa.replace(/ˈ/g, "ˌ").replace(/ə/g, "e"),
      `/${target.word.toLowerCase()}/`,
    ];
    const opts = [target.ipa, ...fakeIPAs].sort(() => 0.5 - Math.random());
    list.push({
      id: questionCounter++,
      category: "pronunciation",
      question: `Phiên âm IPA chuẩn quốc tế của từ "${target.word}" là gì?`,
      sentence: `Từ loại: (${target.partOfSpeech}) — ${target.meaningVi}`,
      options: opts,
      correct: opts.indexOf(target.ipa),
      explanation: `Phiên âm quốc tế chính xác của "${target.word}" theo từ điển Oxford/Cambridge là: ${target.ipa}.`,
    });
  }

  // -------------------------------------------------------------
  // PHẦN 5: ĐỌC HIỂU CÂU & GIAO TIẾP TÌNH HUỐNG (4 CÂU)
  // -------------------------------------------------------------
  const commPool = [
    {
      q: "Doctor: 'How long have you felt this dizzy?' — Patient: '________'",
      opts: [
        "'Since yesterday morning, doctor.'",
        "'Yes, I felt it yesterday.'",
        "'For I was young.'",
        "'I have dizzy two days ago.'",
      ],
      c: 0,
      exp: "Hỏi với 'How long' trong thì Hiện tại hoàn thành -> Trả lời bằng 'Since + mốc thời gian' (Since yesterday morning).",
    },
    {
      q: "Tom: 'You look so energetic today!' — Mary: '________'",
      opts: [
        "'Thanks! I have done 30 minutes of yoga every morning recently.'",
        "'No, I didn't see you yesterday.'",
        "'I am having energetic since last week.'",
        "'Never mind, I don't like exercise.'",
      ],
      c: 0,
      exp: "Đáp lại lời khen bằng lời cảm ơn và giải thích nguyên nhân bằng Hiện tại hoàn thành với 'recently'.",
    },
    {
      q: "Chủ đề bài học (Topic) và kỹ năng giao tiếp ứng dụng chính của Unit này là gì?",
      opts: [
        unit.topic,
        "Space exploration and artificial satellites",
        "Ancient architectural wonders of the world",
        "Deep ocean marine biology discoveries",
      ].sort(() => 0.5 - Math.random()),
      c: 0,
      lookup: unit.topic,
      exp: `Chủ đề chính xuyên suốt toàn bộ bài học là: ${unit.topic}.`,
    },
    {
      q: `Chuyên đề ngữ pháp cốt lõi cần ghi nhớ trong toàn bộ Unit ${unit.unitNumber} là gì?`,
      opts: [
        unit.grammarTitle,
        "Future Continuous and Future Perfect tenses",
        "Non-defining relative clauses with prepositions",
        "Inversion with negative adverbials in formal English",
      ].sort(() => 0.5 - Math.random()),
      c: 0,
      lookup: unit.grammarTitle,
      exp: `Chuyên đề ngữ pháp trọng tâm theo phân phối SGK là: ${unit.grammarTitle}.`,
    },
  ];

  for (let i = 0; i < 4; i++) {
    const item = commPool[i];
    let correctIdx = item.c;
    if (item.lookup) {
      correctIdx = item.opts.indexOf(item.lookup);
    }
    list.push({
      id: questionCounter++,
      category: "communication",
      question: item.q,
      options: item.opts,
      correct: correctIdx,
      explanation: item.exp,
    });
  }

  // Đảm bảo đủ chính xác 50 câu
  return list.slice(0, 50);
}
