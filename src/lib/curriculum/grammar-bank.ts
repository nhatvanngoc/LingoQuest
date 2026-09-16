/**
 * Comprehensive Grammar Bank for Grades 10, 11, 12
 * Syllabus: Global Success (Bộ Giáo dục và Đào tạo)
 * References: Cambridge Advanced Grammar in Use, Oxford English Grammar, VietJack, Loigiaihay
 * Includes: Formulas, rules, signal words, sentence patterns, and pedagogical quiz questions with in-depth explanations.
 */

export interface GrammarTopicData {
  key: string;
  title: string;
  summary: string;
  badge: string;
  timeline?: {
    leftLabel: string;
    leftDesc: string;
    rightLabel: string;
    rightDesc: string;
  };
  cardLeft: {
    title: string;
    formula: string;
    rules: string[];
    signals: string[];
    examples: Array<{
      en: string;
      vi: string;
      tag: string;
    }>;
  };
  cardRight: {
    title: string;
    formula: string;
    rules: string[];
    signals: string[];
    examples: Array<{
      en: string;
      vi: string;
      tag: string;
    }>;
  };
  quizQuestions: Array<{
    q: string;
    s?: string;
    opts: string[];
    c: number;
    exp: string;
  }>;
}

export const GRAMMAR_BANK: Record<string, GrammarTopicData> = {
  // -------------------------------------------------------------
  // GRADE 10 TOPICS
  // -------------------------------------------------------------
  "present-simple-vs-continuous": {
    key: "present-simple-vs-continuous",
    title: "Present Simple vs. Present Continuous",
    summary: "Phân biệt Thì Hiện tại đơn (thói quen, chân lý, lịch trình) và Hiện tại tiếp diễn (hành động đang diễn ra tại thời điểm nói hoặc xu hướng tạm thời).",
    badge: "Thì Hiện tại cốt lõi • Lớp 10",
    timeline: {
      leftLabel: "Hiện tại đơn",
      leftDesc: "Lặp đi lặp lại / Chân lý vĩnh cửu",
      rightLabel: "Hiện tại tiếp diễn",
      rightDesc: "Đang diễn ra ngay lúc này",
    },
    cardLeft: {
      title: "PRESENT SIMPLE (Hiện tại đơn)",
      formula: "S + V(s/es) / S + don't/doesn't + V-inf",
      rules: [
        "Thói quen, hành động lặp đi lặp lại hằng ngày (daily routines).",
        "Sự thật hiển nhiên, quy luật tự nhiên hoặc chân lý khoa học.",
        "Lịch trình, thời khóa biểu cố định của tàu xe, lớp học.",
      ],
      signals: ["always", "usually", "often", "sometimes", "never", "every day", "once a week"],
      examples: [
        { en: "My father usually washes the dishes after dinner.", vi: "Bố tôi thường rửa bát sau bữa tối (thói quen hàng ngày).", tag: "Thói quen gia đình" },
        { en: "Water boils at 100 degrees Celsius under normal pressure.", vi: "Nước sôi ở 100 độ C dưới áp suất bình thường (chân lý khoa học).", tag: "Chân lý khoa học" },
        { en: "The train to Da Nang leaves at 6:30 AM tomorrow.", vi: "Chuyến tàu đi Đà Nẵng khởi hành lúc 6:30 sáng mai (lịch trình cố định).", tag: "Lịch trình tàu xe" },
        { en: "Do your family members share household chores equally?", vi: "Các thành viên trong gia đình bạn có chia sẻ việc nhà đều nhau không?", tag: "Câu hỏi thói quen" },
      ],
    },
    cardRight: {
      title: "PRESENT CONTINUOUS (Hiện tại tiếp diễn)",
      formula: "S + am/is/are + V-ing",
      rules: [
        "Hành động đang diễn ra ngay tại thời điểm nói.",
        "Hành động mang tính tạm thời trong giai đoạn hiện tại.",
        "Phàn nàn về một thói quen gây khó chịu khi dùng với 'always'.",
      ],
      signals: ["now", "right now", "at the moment", "currently", "Look!", "Listen!", "always (annoyance)"],
      examples: [
        { en: "Look! The children are preparing dinner for their grandparents.", vi: "Nhìn kìa! Lũ trẻ đang chuẩn bị bữa tối cho ông bà.", tag: "Đang diễn ra (Look!)" },
        { en: "I am living with my aunt this month while my parents travel.", vi: "Tháng này tôi đang ở cùng dì trong lúc bố mẹ đi công tác (tạm thời).", tag: "Tình huống tạm thời" },
        { en: "He is always leaving his dirty laundry on the floor!", vi: "Anh ta cứ luôn để quần áo bẩn bừa bãi trên sàn nhà! (phàn nàn).", tag: "Phàn nàn với 'always'" },
        { en: "Listen! Someone is knocking on the front door.", vi: "Lắng nghe kìa! Có ai đó đang gõ cửa trước.", tag: "Ngay lúc nói (Listen!)" },
      ],
    },
    quizQuestions: [
      {
        q: "Chọn dạng đúng của động từ để hoàn thành câu:",
        s: "My mother ________ breakfast for the whole family every morning at 6 AM.",
        opts: ["prepares", "is preparing", "has prepared", "prepared"],
        c: 0,
        exp: "Dấu hiệu 'every morning' diễn tả thói quen lặp đi lặp lại hằng ngày -> Dùng thì Hiện tại đơn (S số ít chia prepares).",
      },
      {
        q: "Điền dạng đúng của động từ trong ngoặc:",
        s: "Be quiet! The baby ________ soundly in the next room.",
        opts: ["is sleeping", "sleeps", "has slept", "slept"],
        c: 0,
        exp: "Mệnh lệnh thức 'Be quiet!' báo hiệu hành động đang diễn ra ngay lúc nói -> Dùng thì Hiện tại tiếp diễn (is sleeping).",
      },
      {
        q: "Chọn phương án chính xác nhất:",
        s: "Water ________ of hydrogen and oxygen molecules.",
        opts: ["consists", "is consisting", "has consisted", "was consisting"],
        c: 0,
        exp: "Động từ trạng thái 'consist of' (bao gồm) và chân lý khoa học -> Không dùng ở dạng tiếp diễn, dùng Hiện tại đơn.",
      },
      {
        q: "Chọn câu có cách dùng 'always' diễn tả sự phàn nàn đúng nhất:",
        s: "Which sentence expresses irritation or annoyance?",
        opts: [
          "He is always forgetting to turn off the lights when leaving the room.",
          "He always forgets to turn off the lights when leaving the room.",
          "He has always forgotten to turn off the lights yesterday.",
          "He was always forget to turn off the lights.",
        ],
        c: 0,
        exp: "Cấu trúc 'S + am/is/are + always + V-ing' được dùng đặc biệt để phàn nàn về một hành vi gây khó chịu lặp đi lặp lại.",
      },
      {
        q: "Chọn dạng đúng của động từ:",
        s: "Currently, our school club ________ funds to support underprivileged children.",
        opts: ["is raising", "raises", "raised", "has raised"],
        c: 0,
        exp: "Dấu hiệu 'Currently' (hiện tại / dạo này) chỉ hành động tạm thời đang tiến hành -> Dùng Hiện tại tiếp diễn (is raising).",
      },
      {
        q: "Chọn phương án đúng về lịch trình cố định:",
        s: "The flight to London ________ at 8:45 tonight according to the timetable.",
        opts: ["departs", "is departing", "has departed", "departed"],
        c: 0,
        exp: "Lịch trình tàu bay theo thời khóa biểu (timetable) cố định trong tương lai -> Dùng thì Hiện tại đơn mang nghĩa tương lai.",
      },
      {
        q: "Chọn câu đúng ngữ pháp:",
        s: "At the moment, my sister ________ a novel about environmental preservation.",
        opts: ["is reading", "reads", "has read", "was reading"],
        c: 0,
        exp: "Cụm từ 'At the moment' là dấu hiệu rõ ràng của thì Hiện tại tiếp diễn (is reading).",
      },
      {
        q: "Chọn dạng đúng của động từ trạng thái:",
        s: "I ________ that sharing household chores strengthens family bonds.",
        opts: ["believe", "am believing", "have believed", "was believing"],
        c: 0,
        exp: "'Believe' là động từ trạng thái chỉ nhận thức / quan điểm cá nhân, không chia ở thì tiếp diễn -> Dùng 'believe'.",
      },
      {
        q: "Chọn phương án hoàn thiện câu hỏi:",
        s: "Why ________ your shoes in the middle of the hallway again?",
        opts: ["are you always leaving", "do you always leave", "have you always left", "were you always leaving"],
        c: 0,
        exp: "Hỏi với thái độ bực bội về thói quen bừa bãi lặp đi lặp lại -> Dùng 'are you always leaving'.",
      },
      {
        q: "Chọn câu có động từ chia đúng:",
        s: "The Earth ________ around the Sun once every 365.25 days.",
        opts: ["revolves", "is revolving", "revolved", "has revolved"],
        c: 0,
        exp: "Hiện tượng thiên văn và chân lý vĩnh cửu của vũ trụ -> Bắt buộc dùng thì Hiện tại đơn (revolves).",
      },
      {
        q: "Chọn dạng phủ định đúng của thì Hiện tại đơn:",
        s: "He ________ meat because he is a committed vegetarian.",
        opts: ["doesn't eat", "isn't eating", "hasn't eaten", "didn't eat"],
        c: 0,
        exp: "Nói về nguyên tắc sống và chế độ ăn lâu dài -> Dùng Hiện tại đơn phủ định 'doesn't eat'.",
      },
      {
        q: "Chọn phương án chính xác:",
        s: "Listen! The school choir ________ a traditional Vietnamese folk melody.",
        opts: ["is singing", "sings", "has sung", "sang"],
        c: 0,
        exp: "Mệnh lệnh thức 'Listen!' kêu gọi chú ý vào sự việc đang diễn ra trực tiếp -> Dùng 'is singing'.",
      },
    ],
  },

  "passive-voice": {
    key: "passive-voice",
    title: "The Passive Voice",
    summary: "Câu bị động được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động hoặc khi chủ thể thực hiện hành động không quan trọng / chưa rõ.",
    badge: "Thể Bị động • Lớp 10",
    timeline: {
      leftLabel: "Câu chủ động (Active)",
      leftDesc: "Chủ ngữ là người thực hiện hành động",
      rightLabel: "Câu bị động (Passive)",
      rightDesc: "Chủ ngữ là người/vật nhận tác động",
    },
    cardLeft: {
      title: "ACTIVE VOICE (Chủ động)",
      formula: "S + V + O",
      rules: [
        "Người hoặc vật thực hiện hành động đóng vai trò là chủ ngữ (Subject).",
        "Tập trung vào 'ai làm việc gì'.",
      ],
      signals: ["by + agent (chỉ rõ người làm)", "tập trung vào tác nhân"],
      examples: [
        { en: "Volunteers clean the local park every weekend.", vi: "Tình nguyện viên dọn dẹp công viên địa phương mỗi cuối tuần.", tag: "Chủ động Hiện tại đơn" },
        { en: "Scientists invented a revolutionary water filtration device.", vi: "Các nhà khoa học đã phát minh một thiết bị lọc nước mang tính cách mạng.", tag: "Chủ động Quá khứ đơn" },
      ],
    },
    cardRight: {
      title: "PASSIVE VOICE (Bị động)",
      formula: "S + be + V3/ed (+ by O)",
      rules: [
        "Tân ngữ của câu chủ động chuyển lên làm chủ ngữ mới.",
        "Động từ 'be' chia theo đúng thì của câu chủ động và số của chủ ngữ mới.",
        "Động từ chính chuyển sang dạng Phân từ 2 (V3/ed).",
      ],
      signals: ["be + V3/ed", "by + O", "nhấn mạnh kết quả hành động"],
      examples: [
        { en: "The local park is cleaned by volunteers every weekend.", vi: "Công viên địa phương được dọn dẹp bởi các tình nguyện viên mỗi cuối tuần.", tag: "Bị động Hiện tại đơn" },
        { en: "Millions of trees have been planted across the province.", vi: "Hàng triệu cây xanh đã được trồng trên khắp tỉnh (nhấn mạnh số cây).", tag: "Bị động Hiện tại hoàn thành" },
        { en: "Single-use plastics should be banned immediately.", vi: "Đồ nhựa dùng một lần nên bị cấm ngay lập tức (Bị động với Modal verb).", tag: "Bị động với Động từ khuyết thiếu" },
      ],
    },
    quizQuestions: [
      {
        q: "Chuyển câu sau sang thể bị động: 'People recycle tons of plastic bottles every day.'",
        s: "Tons of plastic bottles ________ every day.",
        opts: ["are recycled", "is recycled", "were recycled", "have been recycled"],
        c: 0,
        exp: "Chủ ngữ mới 'Tons of plastic bottles' là danh từ số nhiều, thì Hiện tại đơn -> Dùng 'are recycled'.",
      },
      {
        q: "Chọn dạng đúng của động từ bị động:",
        s: "The historic temple ________ by heavy floods last winter.",
        opts: ["was damaged", "is damaged", "has been damaged", "damaged"],
        c: 0,
        exp: "Dấu hiệu 'last winter' (mùa đông năm ngoái) -> Bị động thì Quá khứ đơn với chủ ngữ số ít là 'was damaged'.",
      },
      {
        q: "Chọn câu bị động với động từ khuyết thiếu (Modal verb) chuẩn xác:",
        s: "Electronic waste must ________ properly to protect the soil.",
        opts: ["be disposed of", "dispose of", "being disposed", "been disposed"],
        c: 0,
        exp: "Cấu trúc bị động với modal verb: Modal + be + V3/ed -> 'must be disposed of'.",
      },
      {
        q: "Chọn dạng bị động của thì Hiện tại hoàn thành:",
        s: "Three modern wind power stations ________ in this coastal area since 2022.",
        opts: ["have been built", "have built", "were built", "are built"],
        c: 0,
        exp: "Dấu hiệu 'since 2022' và chủ ngữ số nhiều 'Three modern wind power stations' -> Dùng 'have been built'.",
      },
      {
        q: "Xác định câu có lỗi sai về thể bị động:",
        s: "Which sentence contains an incorrect passive form?",
        opts: [
          "The report was wrote by the environmental committee.",
          "The report was written by the environmental committee.",
          "The report has been reviewed by experts.",
          "The report is being prepared right now.",
        ],
        c: 0,
        exp: "V3 của 'write' là 'written', không thể dùng 'wrote' (V2) sau to be trong câu bị động.",
      },
      {
        q: "Chọn phương án đúng để hoàn thành câu:",
        s: "A new environmental campaign ________ by students at this moment.",
        opts: ["is being launched", "is launched", "was being launched", "has launched"],
        c: 0,
        exp: "Dấu hiệu 'at this moment' đòi hỏi thì Hiện tại tiếp diễn -> Bị động: S + is/are + being + V3/ed ('is being launched').",
      },
      {
        q: "Chọn giới từ thích hợp đi với câu bị động:",
        s: "The cake was made ________ fresh local organic eggs and milk.",
        opts: ["with", "by", "from", "for"],
        c: 0,
        exp: "Dùng 'with' để chỉ công cụ hoặc nguyên liệu làm ra đồ vật, trong khi 'by' chỉ tác nhân người thực hiện.",
      },
      {
        q: "Chuyển câu hỏi sang dạng bị động: 'Did they discover penicillin in 1928?'",
        s: "________ penicillin ________ in 1928?",
        opts: ["Was / discovered", "Did / discover", "Has / been discovered", "Were / discovered"],
        c: 0,
        exp: "Câu hỏi bị động Quá khứ đơn với danh từ không đếm được 'penicillin': Was + S + V3/ed? -> 'Was penicillin discovered?'.",
      },
      {
        q: "Chọn phương án hoàn thiện câu:",
        s: "Endangered marine species ________ from poachers by coastal guards.",
        opts: ["are protected", "protect", "is protected", "protecting"],
        c: 0,
        exp: "Chủ ngữ 'Endangered marine species' ở dạng số nhiều -> Dùng 'are protected'.",
      },
      {
        q: "Chọn câu bị động trong tương lai đơn:",
        s: "All traditional paper receipts ________ by digital tokens next year.",
        opts: ["will be replaced", "will replace", "are replacing", "have been replaced"],
        c: 0,
        exp: "Bị động Tương lai đơn với 'next year': will be + V3/ed ('will be replaced').",
      },
      {
        q: "Điền dạng đúng của động từ:",
        s: "Nothing ________ about the cancelled seminar until the principal spoke.",
        opts: ["was known", "knew", "is known", "has known"],
        c: 0,
        exp: "Mốc thời gian quá khứ 'until the principal spoke' -> Bị động Quá khứ đơn 'was known'.",
      },
      {
        q: "Chọn câu có cấu trúc bị động tự nhiên nhất:",
        s: "Which sentence is the best passive construction?",
        opts: [
          "Solar panels have been installed on the school roof to generate clean electricity.",
          "Solar panels installed on the roof to clean electricity.",
          "Solar panels are been installed on the roof.",
          "Solar panels were been installed on the roof.",
        ],
        c: 0,
        exp: "Cấu trúc Hiện tại hoàn thành bị động chuẩn: have been + V3/ed ('have been installed').",
      },
    ],
  },

  // -------------------------------------------------------------
  // GRADE 11 TOPICS
  // -------------------------------------------------------------
  "past-simple-vs-present-perfect": {
    key: "past-simple-vs-present-perfect",
    title: "Past Simple vs. Present Perfect",
    summary: "Quá khứ đơn diễn tả sự việc đã chấm dứt hoàn toàn tại thời điểm cụ thể trong quá khứ. Hiện tại hoàn thành diễn tả hành động bắt đầu trong quá khứ kéo dài đến hiện tại hoặc vừa mới hoàn thành có kết quả thấy rõ.",
    badge: "Chuyên đề cốt lõi • Lớp 11",
    timeline: {
      leftLabel: "Quá khứ đơn (Past Simple)",
      leftDesc: "Chấm dứt hoàn toàn trong quá khứ",
      rightLabel: "Hiện tại hoàn thành (Present Perfect)",
      rightDesc: "Cầu nối quá khứ kéo dài đến hiện tại",
    },
    cardLeft: {
      title: "PAST SIMPLE (Quá khứ đơn)",
      formula: "S + V2/ed / S + didn't + V-inf",
      rules: [
        "Sự việc bắt đầu và kết thúc trọn vẹn tại thời điểm xác định trong quá khứ.",
        "Kể lại một chuỗi sự kiện lịch sử hoặc hành động nối tiếp nhau.",
        "Thói quen từng có trong quá khứ nhưng nay không còn nữa.",
      ],
      signals: ["yesterday", "ago", "last week/year", "in 2020", "when I was young"],
      examples: [
        { en: "Alexander Fleming discovered penicillin in 1928.", vi: "Alexander Fleming đã phát minh ra kháng sinh penicillin vào năm 1928 (mốc quá khứ).", tag: "Mốc lịch sử 1928" },
        { en: "We lived in a small rural village when I was a toddler.", vi: "Chúng tôi đã sống ở một ngôi làng nông thôn nhỏ khi tôi còn bé xíu.", tag: "Thời thơ ấu đã qua" },
        { en: "She did not take any headache medicine yesterday evening.", vi: "Tối qua cô ấy đã không uống viên thuốc giảm đau nào cả.", tag: "Phủ định với yesterday" },
      ],
    },
    cardRight: {
      title: "PRESENT PERFECT (Hiện tại hoàn thành)",
      formula: "S + have/has + V3/ed",
      rules: [
        "Hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn ở hiện tại.",
        "Hành động vừa mới xảy ra, để lại kết quả rõ ràng ở hiện tại.",
        "Nhấn mạnh kinh nghiệm, trải nghiệm tính đến thời điểm hiện tại (ever/never).",
      ],
      signals: ["since", "for", "already", "yet", "just", "ever", "never", "so far", "recently"],
      examples: [
        { en: "Scientists have developed several effective antiviral therapies recently.", vi: "Các nhà khoa học vừa phát triển nhiều liệu pháp kháng virus hiệu quả gần đây.", tag: "Dấu hiệu 'recently'" },
        { en: "I have followed a balanced Mediterranean diet for six months.", vi: "Tôi đã theo đuổi chế độ ăn Địa Trung Hải được 6 tháng nay (vẫn đang tiếp tục).", tag: "Kéo dài với 'for 6 months'" },
        { en: "Have you ever received a tetanus vaccination in your life?", vi: "Bạn đã từng tiêm phòng vắc-xin uốn ván bao giờ trong đời chưa?", tag: "Trải nghiệm 'ever'" },
      ],
    },
    quizQuestions: [
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
  },

  "modals-must-have-to-should": {
    key: "modals-must-have-to-should",
    title: "Modal Verbs: Must, Have to, and Should",
    summary: "Phân biệt Must (bắt buộc xuất phát từ người nói / luật nghiêm ngặt), Have to (bắt buộc do hoàn cảnh bên ngoài / nội quy khách quan), và Should (lời khuyên, đề xuất nhẹ nhàng).",
    badge: "Động từ khuyết thiếu • Lớp 11",
    cardLeft: {
      title: "MUST & HAVE TO (Sự bắt buộc)",
      formula: "Must + V-inf / Have to + V-inf",
      rules: [
        "Must: Sự bắt buộc chủ quan do người nói tự thấy cần thiết, hoặc mệnh lệnh luật pháp tối cao.",
        "Have to: Sự bắt buộc khách quan do quy định công ty, gia đình hoặc hoàn cảnh bên ngoài ép buộc.",
        "Mustn't: Cấm đoán tuyệt đối không được làm (Prohibition).",
        "Don't have to: Không bắt buộc, không cần thiết phải làm (Lack of obligation).",
      ],
      signals: ["rules", "obligations", "laws", "mustn't (cấm)", "don't have to (không cần)"],
      examples: [
        { en: "You must stop your vehicle when the traffic light turns red.", vi: "Bạn bắt buộc phải dừng xe khi đèn tín hiệu giao thông chuyển sang đỏ (luật pháp).", tag: "Luật giao thông" },
        { en: "Students have to wear uniforms on Mondays according to school rules.", vi: "Học sinh phải mặc đồng phục vào thứ Hai theo nội quy của trường (quy định ngoài).", tag: "Nội quy trường học" },
        { en: "You mustn't step on the grass in the botanical garden.", vi: "Bạn tuyệt đối không được giẫm lên cỏ trong vườn bách thảo (cấm đoán).", tag: "Cấm đoán (mustn't)" },
        { en: "You don't have to cook dinner tonight; we can dine out.", vi: "Tối nay em không phải nấu cơm đâu; mình có thể ra ngoài ăn (không bắt buộc).", tag: "Không cần (don't have to)" },
      ],
    },
    cardRight: {
      title: "SHOULD & SHOULDN'T (Lời khuyên)",
      formula: "Should + V-inf / Shouldn't + V-inf",
      rules: [
        "Đưa ra lời khuyên, đề xuất hành động đúng đắn hoặc khôn ngoan.",
        "Bày tỏ ý kiến cá nhân xem điều gì là nên hoặc không nên làm.",
      ],
      signals: ["I think you should...", "ought to", "had better", "advice"],
      examples: [
        { en: "Teenagers should get at least eight hours of sound sleep every night.", vi: "Thanh thiếu niên nên ngủ ít nhất 8 tiếng mỗi đêm (lời khuyên sức khỏe).", tag: "Lời khuyên y tế" },
        { en: "You shouldn't spend more than two hours glued to a smartphone screen.", vi: "Bạn không nên dán mắt vào màn hình điện thoại quá hai tiếng (khuyên can).", tag: "Khuyên can (shouldn't)" },
      ],
    },
    quizQuestions: [
      {
        q: "Chọn từ khuyết thiếu phù hợp: Biển báo ghi 'No Smoking'.",
        s: "You ________ smoke inside this petrol station.",
        opts: ["mustn't", "don't have to", "shouldn't", "needn't"],
        c: 0,
        exp: "Hành vi bị cấm đoán nghiêm ngặt vì an toàn cháy nổ -> Bắt buộc dùng 'mustn't' (tuyệt đối không được làm).",
      },
      {
        q: "Điền modal verb chỉ sự không bắt buộc:",
        s: "Tomorrow is Sunday, so I ________ wake up at 5:30 AM.",
        opts: ["don't have to", "mustn't", "shouldn't", "can't"],
        c: 0,
        exp: "Chủ nhật được nghỉ nên việc dậy sớm là 'không cần thiết / không bắt buộc' -> Dùng 'don't have to'.",
      },
      {
        q: "Chọn câu khuyên nhủ phù hợp nhất:",
        s: "You look exhausted after the long march. You ________ rest for an hour.",
        opts: ["should", "must", "have to", "need"],
        c: 0,
        exp: "Thấy bạn mệt và đưa ra lời khuyên thân mật -> Dùng 'should' (nên).",
      },
      {
        q: "Chọn dạng đúng của modal verb trong quá khứ:",
        s: "In the 19th century, students ________ walk miles to reach the village school.",
        opts: ["had to", "must", "must have", "should"],
        c: 0,
        exp: "'Must' không có dạng quá khứ; để diễn tả sự bắt buộc trong quá khứ, ta dùng 'had to'.",
      },
      {
        q: "Phân biệt must và have to:",
        s: "My doctor told me that I ________ reduce my sodium intake immediately.",
        opts: ["have to", "must", "ought", "may"],
        c: 0,
        exp: "Sự bắt buộc do chỉ định của bác sĩ (yếu tố bên ngoài áp đặt) -> Dùng 'have to'.",
      },
      {
        q: "Chọn câu diễn đạt sự cấm đoán:",
        s: "Visitors ________ touch the fragile archaeological artifacts on display.",
        opts: ["mustn't", "don't have to", "might not", "shouldn't"],
        c: 0,
        exp: "Hiện vật khảo cổ dễ vỡ trong bảo tàng bị cấm chạm vào -> Bắt buộc dùng 'mustn't'.",
      },
      {
        q: "Chọn câu có nghĩa tương đương: 'It is not necessary for you to submit the draft today.'",
        s: "Which sentence has the same meaning?",
        opts: [
          "You don't have to submit the draft today.",
          "You mustn't submit the draft today.",
          "You shouldn't submit the draft today.",
          "You cannot submit the draft today.",
        ],
        c: 0,
        exp: "'It is not necessary for you to...' (Không cần thiết phải...) tương đương với 'You don't have to...'.",
      },
      {
        q: "Chọn phương án đúng để hoàn thành câu:",
        s: "I think parents ________ listen more empathetically to their teenagers' struggles.",
        opts: ["should", "must", "have to", "are having to"],
        c: 0,
        exp: "'I think...' là dấu hiệu nêu quan điểm và đưa ra lời khuyên -> Dùng 'should'.",
      },
      {
        q: "Chọn modal verb chính xác:",
        s: "Soldiers ________ obey the commands of their superior officers without hesitation.",
        opts: ["must", "should", "don't have to", "might"],
        c: 0,
        exp: "Kỷ luật quân đội mang tính tuyệt đối và bắt buộc nghiêm ngặt -> Dùng 'must'.",
      },
      {
        q: "Chọn phương án hoàn thiện câu:",
        s: "We ________ buy more groceries; the refrigerator is already packed full.",
        opts: ["don't have to", "mustn't", "should", "must"],
        c: 0,
        exp: "Tủ lạnh đã đầy ắp nên việc mua thêm là không cần thiết -> Dùng 'don't have to'.",
      },
      {
        q: "Chọn modal verb chỉ lời khuyên tiêu cực:",
        s: "You ________ drink ice water when you have a sore throat.",
        opts: ["shouldn't", "mustn't", "don't have to", "can't"],
        c: 0,
        exp: "Khuyên không nên uống nước đá khi bị viêm họng -> Dùng 'shouldn't'.",
      },
      {
        q: "Chọn câu có cấu trúc đúng:",
        s: "Does she ________ wear safety goggles during chemistry experiments?",
        opts: ["have to", "must", "should", "has to"],
        c: 0,
        exp: "Trong câu hỏi với trợ động từ 'Does', động từ khuyết thiếu chia nguyên mẫu: 'have to'.",
      },
    ],
  },

  // -------------------------------------------------------------
  // GRADE 12 TOPICS
  // -------------------------------------------------------------
  "past-simple-vs-past-continuous": {
    key: "past-simple-vs-past-continuous",
    title: "Past Simple vs. Past Continuous",
    summary: "Quá khứ tiếp diễn diễn tả hành động đang diễn ra tại một thời điểm xác định trong quá khứ hoặc một hành động đang diễn ra thì bị một hành động khác xen vào (Quá khứ đơn) với When / While.",
    badge: "Chuyên đề nâng cao • Lớp 12",
    timeline: {
      leftLabel: "Hành động nền tảng (Past Continuous)",
      leftDesc: "Đang diễn ra liên tục (was/were + V-ing)",
      rightLabel: "Hành động xen vào (Past Simple)",
      rightDesc: "Đột ngột cắt ngang (V2/ed)",
    },
    cardLeft: {
      title: "PAST CONTINUOUS (Quá khứ tiếp diễn)",
      formula: "S + was/were + V-ing",
      rules: [
        "Hành động đang diễn ra tại một thời điểm chính xác trong quá khứ (e.g. at 8 PM yesterday).",
        "Hai hành động cùng diễn ra song song trong quá khứ (dùng với While).",
        "Làm nền cho một sự việc khác xen ngang vào.",
      ],
      signals: ["at that time", "at 8 PM last night", "while", "as", "all day yesterday"],
      examples: [
        { en: "At 9 PM yesterday, the scientist was analyzing clinical sample data.", vi: "Vào lúc 9 giờ tối hôm qua, nhà khoa học đang phân tích dữ liệu mẫu thử nghiệm.", tag: "Thời điểm chính xác" },
        { en: "While mother was preparing dinner, father was repairing the electric bicycle.", vi: "Trong khi mẹ đang nấu bữa tối thì bố đang sửa chiếc xe đạp điện (song song).", tag: "Hai hành động song song" },
      ],
    },
    cardRight: {
      title: "WHEN & WHILE INTERACTION (Sự kết hợp)",
      formula: "When + Past Simple, Past Continuous / While + Past Continuous, Past Simple",
      rules: [
        "Hành động dài đang diễn ra dùng Past Continuous.",
        "Hành động ngắn xen vào cắt ngang dùng Past Simple.",
      ],
      signals: ["When + short action (V2/ed)", "While + long action (was/were V-ing)"],
      examples: [
        { en: "While I was studying in the library, a famous author walked in.", vi: "Khi tôi đang học trong thư viện thì một tác giả nổi tiếng bước vào (xen ngang).", tag: "Hành động xen vào" },
        { en: "He was driving home from work when the thunderstorm struck.", vi: "Anh ấy đang lái xe về nhà sau giờ làm việc thì cơn giông bão ập tới.", tag: "Khi cơn bão ập tới" },
      ],
    },
    quizQuestions: [
      {
        q: "Chọn dạng đúng của động từ: Hành động đang diễn ra thì có sự việc khác xen vào.",
        s: "The surgeon ________ a delicate heart procedure when the emergency alarm sounded.",
        opts: ["was performing", "performed", "has performed", "is performing"],
        c: 0,
        exp: "Bác sĩ đang thực hiện ca phẫu thuật (hành động dài đang diễn ra -> was performing) thì chuông báo vang lên (xen vào -> sounded).",
      },
      {
        q: "Điền động từ vào mệnh đề xen ngang:",
        s: "While millions of citizens were watching the live broadcast, the satellite signal ________.",
        opts: ["dropped", "was dropping", "has dropped", "drops"],
        c: 0,
        exp: "Tín hiệu vệ tinh đột ngột bị ngắt (hành động ngắn cắt ngang) -> Dùng Quá khứ đơn 'dropped'.",
      },
      {
        q: "Chọn dạng đúng của hai hành động diễn ra song song:",
        s: "While the professor ________ the lecture, the students ________ diligent notes.",
        opts: [
          "was delivering / were taking",
          "delivered / took",
          "was delivering / took",
          "delivered / were taking",
        ],
        c: 0,
        exp: "Hai hành động xảy ra song song đồng thời trong quá khứ nối với 'While' -> Cả hai đều dùng Quá khứ tiếp diễn.",
      },
      {
        q: "Chọn câu có cấu trúc đúng với 'at this time last year':",
        s: "At this time last year, our team ________ a clean technology startup.",
        opts: ["was establishing", "established", "has established", "is establishing"],
        c: 0,
        exp: "Mốc thời gian xác định trong quá khứ 'At this time last year' -> Dùng Quá khứ tiếp diễn 'was establishing'.",
      },
      {
        q: "Chọn liên từ phù hợp nhất:",
        s: "________ she was browsing through antique biographies, she discovered an unpublished poem.",
        opts: ["While", "During", "Since", "Unless"],
        c: 0,
        exp: "'While + mệnh đề tiếp diễn' dùng để chỉ hành động đang diễn ra.",
      },
      {
        q: "Chọn câu đúng về trật tự thì:",
        s: "What ________ you ________ when the electrical grid failed last night?",
        opts: ["were / doing", "did / do", "have / done", "are / doing"],
        c: 0,
        exp: "Hỏi ai đó 'đang làm gì' khi một sự cố quá khứ bất ngờ xảy ra -> 'were you doing'.",
      },
      {
        q: "Chọn câu có nghĩa tương đương:",
        s: "\"I was in the middle of writing my essay when the doorbell rang.\"",
        opts: [
          "The doorbell rang while I was writing my essay.",
          "I wrote my essay when the doorbell was ringing.",
          "The doorbell was ringing while I wrote my essay.",
          "I have written my essay after the doorbell rang.",
        ],
        c: 0,
        exp: "Chuyển đổi tương đương: 'While I was writing my essay, the doorbell rang.'",
      },
      {
        q: "Chọn phương án đúng hoàn thành câu:",
        s: "He ________ his bicycle along the riverbank when he spotted an injured crane.",
        opts: ["was riding", "rode", "has ridden", "is riding"],
        c: 0,
        exp: "Đang đạp xe (hành động kéo dài) thì nhìn thấy con sếu bị thương (xen vào) -> 'was riding'.",
      },
      {
        q: "Chọn dạng đúng của động từ trong ngữ cảnh lịch sử:",
        s: "In the late 19th century, industrialists ________ massive steel mills across the continent.",
        opts: ["were erecting", "are erecting", "have erected", "erect"],
        c: 0,
        exp: "Diễn tả xu hướng đang bùng nổ trong một giai đoạn quá khứ -> Dùng Quá khứ tiếp diễn 'were erecting'.",
      },
      {
        q: "Chọn phương án chính xác:",
        s: "She ________ into the lecture hall, took a seat, and opened her notebook.",
        opts: ["walked", "was walking", "has walked", "walks"],
        c: 0,
        exp: "Chuỗi ba hành động liên tiếp nối tiếp nhau trong quá khứ (walked, took, opened) -> Dùng Quá khứ đơn.",
      },
      {
        q: "Chọn câu hỏi chính xác:",
        s: "Were you ________ attention while the instructor was demonstrating the chemistry apparatus?",
        opts: ["paying", "paid", "pay", "to pay"],
        c: 0,
        exp: "Were you + V-ing -> 'Were you paying attention'.",
      },
      {
        q: "Chọn đáp án đúng:",
        s: "The wind ________ violently and the rain was lashing against the window pane.",
        opts: ["was howling", "howled", "has howled", "is howling"],
        c: 0,
        exp: "Miêu tả bầu không khí và cảnh quan trong quá khứ -> Dùng Quá khứ tiếp diễn song song 'was howling'.",
      },
    ],
  },
};

/**
 * Helper tra cứu dữ liệu ngữ pháp theo tên chuyên đề hoặc slug
 */
export function getGrammarTopicData(titleOrSummary: string): GrammarTopicData {
  const clean = titleOrSummary.toLowerCase();
  if (clean.includes("present simple") && clean.includes("continuous")) {
    return GRAMMAR_BANK["present-simple-vs-continuous"];
  }
  if (clean.includes("passive")) {
    return GRAMMAR_BANK["passive-voice"];
  }
  if (clean.includes("must") || clean.includes("have to") || clean.includes("modal")) {
    return GRAMMAR_BANK["modals-must-have-to-should"];
  }
  if (clean.includes("past continuous") || clean.includes("past simple vs. past continuous")) {
    return GRAMMAR_BANK["past-simple-vs-past-continuous"];
  }
  // Default to Past Simple vs Present Perfect
  return GRAMMAR_BANK["past-simple-vs-present-perfect"];
}
