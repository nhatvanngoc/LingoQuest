/* Grade 10 Global Success Curriculum Data
   Syllabus: Bộ Giáo dục và Đào tạo • Global Success (Kết nối tri thức)
   Extracted & Curated via Playwright MCP from Loigiaihay, VietJack & Tech12h
   10 Units + 4 Reviews with full vocabulary, IPA, audio, examples & grammar.
*/

export interface Grade10VocabItem {
  id: string;
  word: string;
  partOfSpeech: string;
  meaningVi: string;
  ipa: string;
  audioUrl: string;
  imageUrl?: string;
  exampleEn: string;
  exampleVi: string;
  collocations?: string[];
}

export interface Grade10Section {
  id: string;
  title: string;
  description: string;
  url?: string;
}

export interface Grade10Unit {
  id: string;
  slug: string;
  unitNumber: number;
  isReview?: boolean;
  titleEn: string;
  titleVi: string;
  topic: string;
  cefrLevel: string;
  term: 1 | 2;
  vocabUrl?: string;
  grammarUrl?: string;
  grammarTitle: string;
  grammarSummary: string;
  grammarHtml?: string;
  sections: Grade10Section[];
  vocabulary: Grade10VocabItem[];
}

export const GRADE_10_CURRICULUM: Grade10Unit[] = [
  {
    "id": "g10-u1",
    "slug": "unit-1-family-life",
    "unitNumber": 1,
    "titleEn": "Family Life",
    "titleVi": "Đời sống gia đình",
    "topic": "Family & Household Responsibilities",
    "cefrLevel": "A2+",
    "term": 1,
    "grammarTitle": "Present Simple vs. Present Continuous",
    "grammarSummary": "Thì Hiện tại đơn diễn tả thói quen, chân lý, lịch trình cố định. Thì Hiện tại tiếp diễn diễn tả hành động đang diễn ra tại thời điểm nói hoặc xu hướng thay đổi tạm thời.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Household chores - Cuộc trò chuyện về phân chia việc nhà"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Phát âm /br/, /kr/, /tr/; ngữ pháp Hiện tại đơn và Hiện tại tiếp diễn"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Lợi ích của việc cùng nhau chia sẻ công việc nhà"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về các công việc nhà phù hợp với lứa tuổi học sinh"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe chia sẻ về vai trò của các thành viên trong gia đình"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết đoạn văn về thói quen sinh hoạt gia đình"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Văn hóa gia đình truyền thống và hiện đại ở các quốc gia"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Tổng kết từ vựng và dự án Gia đình hạnh phúc"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-breadwinner",
        "word": "breadwinner",
        "partOfSpeech": "noun",
        "meaningVi": "người trụ cột đi làm nuôi gia đình",
        "ipa": "/ˈbredwɪnə(r)/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/breadwinner.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "In modern society, both husband and wife often act as breadwinners.",
        "exampleVi": "Trong xã hội hiện đại, cả vợ và chồng thường cùng là trụ cột kinh tế.",
        "collocations": [
          "family breadwinner",
          "sole breadwinner",
          "primary breadwinner"
        ]
      },
      {
        "id": "v10-homemaker",
        "word": "homemaker",
        "partOfSpeech": "noun",
        "meaningVi": "người nội trợ, người chăm lo tổ ấm",
        "ipa": "/ˈhəʊmmeɪkə(r)/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/homemaker.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "Being a homemaker is hard work that requires great organizational skills.",
        "exampleVi": "Làm người nội trợ là công việc vất vả đòi hỏi kỹ năng sắp xếp tuyệt vời.",
        "collocations": [
          "dedicated homemaker",
          "full-time homemaker"
        ]
      },
      {
        "id": "v10-chore",
        "word": "chore",
        "partOfSpeech": "noun",
        "meaningVi": "việc vặt trong nhà, công việc thường nhật",
        "ipa": "/tʃɔːr/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/chore.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "Doing household chores helps teenagers develop essential life skills.",
        "exampleVi": "Làm việc vặt trong nhà giúp thanh thiếu niên phát triển các kỹ năng sống thiết yếu.",
        "collocations": [
          "do household chores",
          "share chores equally",
          "daily chores"
        ]
      },
      {
        "id": "v10-heavy-lifting",
        "word": "heavy lifting",
        "partOfSpeech": "noun",
        "meaningVi": "công việc mang vác nặng nhọc",
        "ipa": "/ˌhevi ˈlɪftɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/heavy_lifting.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "My brother usually does the heavy lifting in our house.",
        "exampleVi": "Anh trai tôi thường làm các công việc mang vác nặng trong nhà.",
        "collocations": [
          "do the heavy lifting",
          "heavy lifting work"
        ]
      },
      {
        "id": "v10-groceries",
        "word": "groceries",
        "partOfSpeech": "noun",
        "meaningVi": "thực phẩm và tạp hóa gia đình",
        "ipa": "/ˈɡrəʊsəriz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/groceries.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "My mother usually shops for groceries at the local supermarket on weekends.",
        "exampleVi": "Mẹ tôi thường mua đồ tạp hóa ở siêu thị địa phương vào dịp cuối tuần.",
        "collocations": [
          "shop for groceries",
          "buy groceries",
          "carry groceries"
        ]
      },
      {
        "id": "v10-responsibility",
        "word": "responsibility",
        "partOfSpeech": "noun",
        "meaningVi": "trách nhiệm, bổn phận",
        "ipa": "/rɪˌspɒnsəˈbɪləti/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/responsibility.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "Children should take responsibility for keeping their study area tidy.",
        "exampleVi": "Con cái nên nhận trách nhiệm giữ cho góc học tập của mình ngăn nắp.",
        "collocations": [
          "take responsibility",
          "household responsibility",
          "sense of responsibility"
        ]
      },
      {
        "id": "v10-gratitude",
        "word": "gratitude",
        "partOfSpeech": "noun",
        "meaningVi": "lòng biết ơn, sự cảm kích",
        "ipa": "/ˈɡrætɪtjuːd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/gratitude.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "We should express our gratitude to parents for their unconditional love.",
        "exampleVi": "Chúng ta nên bày tỏ lòng biết ơn đối với cha mẹ vì tình yêu thương vô điều kiện.",
        "collocations": [
          "express gratitude",
          "feel deep gratitude",
          "show gratitude"
        ]
      },
      {
        "id": "v10-strengthen",
        "word": "strengthen",
        "partOfSpeech": "verb",
        "meaningVi": "củng cố, thắt chặt mối quan hệ",
        "ipa": "/ˈstreŋkθn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/strengthen.mp3",
        "exampleEn": "Eating dinner together helps strengthen family bonds.",
        "exampleVi": "Cùng nhau ăn bữa tối giúp thắt chặt tình cảm gia đình.",
        "collocations": [
          "strengthen family bonds",
          "strengthen relationships"
        ]
      },
      {
        "id": "v10-laundry",
        "word": "laundry",
        "partOfSpeech": "noun",
        "meaningVi": "quần áo giặt ủi, việc giặt giũ",
        "ipa": "/ˈlɔːndri/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/laundry.mp3",
        "imageUrl": "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
        "exampleEn": "I usually do the laundry on Sunday mornings.",
        "exampleVi": "Tôi thường giặt quần áo vào sáng Chủ nhật.",
        "collocations": [
          "do the laundry",
          "laundry detergent",
          "clean laundry"
        ]
      },
      {
        "id": "v10-split",
        "word": "split",
        "partOfSpeech": "verb",
        "meaningVi": "phân chia, chia đều",
        "ipa": "/splɪt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/split.mp3",
        "exampleEn": "We split the household chores equally among all family members.",
        "exampleVi": "Chúng tôi chia đều các công việc nhà cho tất cả các thành viên.",
        "collocations": [
          "split the chores",
          "split the bill",
          "split evenly"
        ]
      },
      {
        "id": "v10-nurture",
        "word": "nurture",
        "partOfSpeech": "verb",
        "meaningVi": "nuôi dưỡng, vun đắp",
        "ipa": "/ˈnɜːtʃə(r)/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/nurture.mp3",
        "exampleEn": "Parents nurture love and mutual respect in their children.",
        "exampleVi": "Cha mẹ nuôi dưỡng tình yêu thương và sự tôn trọng lẫn nhau trong con cái.",
        "collocations": [
          "nurture a child",
          "nurture talent",
          "nurture relationship"
        ]
      },
      {
        "id": "v10-burden",
        "word": "burden",
        "partOfSpeech": "noun",
        "meaningVi": "gánh nặng (tài chính, trách nhiệm)",
        "ipa": "/ˈbɜːdn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/burden.mp3",
        "exampleEn": "Sharing housework reduces the burden on working mothers.",
        "exampleVi": "Chia sẻ việc nhà giúp giảm bớt gánh nặng cho những người mẹ đi làm.",
        "collocations": [
          "heavy burden",
          "shoulder the burden",
          "financial burden"
        ]
      },
      {
        "id": "v10-household-finances",
        "word": "household finances",
        "partOfSpeech": "noun phrase",
        "meaningVi": "tài chính chi tiêu gia đình",
        "ipa": "/ˈhaʊshəʊld faɪˈnænsɪz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/finances.mp3",
        "exampleEn": "Both parents discuss household finances openly every month.",
        "exampleVi": "Cả bố và mẹ đều cởi mở thảo luận về tài chính gia đình mỗi tháng.",
        "collocations": [
          "manage household finances",
          "budget household finances"
        ]
      }
    ]
  },
  {
    "id": "g10-u2",
    "slug": "unit-2-humans-and-the-environment",
    "unitNumber": 2,
    "titleEn": "Humans and the Environment",
    "titleVi": "Con người và môi trường",
    "topic": "Eco-friendly Living & Sustainable Habits",
    "cefrLevel": "A2+",
    "term": 1,
    "grammarTitle": "Future with Will & Be going to, Passive Voice",
    "grammarSummary": "Will diễn tả quyết định tức thời hoặc dự đoán không có căn cứ hiện tại. Be going to diễn tả kế hoạch định sẵn hoặc dự đoán có dấu hiệu ở hiện tại. Câu bị động (Passive voice) nhấn mạnh hành động bảo vệ môi trường.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Go Green Club - Giới thiệu Câu lạc bộ Sống Xanh"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Phát âm /kl/, /pl/, /gr/, /pr/; ngữ pháp Tương lai với Will/Be going to và Bị động"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Cách giảm thiểu lượng khí thải carbon cá nhân (Carbon footprint)"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về các thói quen thân thiện với môi trường tại trường học"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe chia sẻ về lối sống không rác thải (Zero-waste)"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài chia sẻ mẹo tiết kiệm điện nước tại gia đình"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Các chiến dịch giờ Trái Đất trên thế giới"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Góc học tập xanh của em"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-carbon-footprint",
        "word": "carbon footprint",
        "partOfSpeech": "noun",
        "meaningVi": "vết carbon, lượng khí thải carbon tạo ra",
        "ipa": "/ˌkɑːbən ˈfʊtprɪnt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/carbon_footprint.mp3",
        "exampleEn": "Cycling to school reduces your carbon footprint significantly.",
        "exampleVi": "Đạp xe đi học giúp giảm đáng kể lượng phát thải carbon của bạn.",
        "collocations": [
          "reduce carbon footprint",
          "calculate carbon footprint",
          "minimize carbon footprint"
        ]
      },
      {
        "id": "v10-eco-friendly",
        "word": "eco-friendly",
        "partOfSpeech": "adj",
        "meaningVi": "thân thiện với môi trường",
        "ipa": "/ˌiːkəʊ ˈfrendli/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/eco_friendly.mp3",
        "exampleEn": "We should switch to eco-friendly products made from bamboo.",
        "exampleVi": "Chúng ta nên chuyển sang các sản phẩm thân thiện với môi trường làm từ tre.",
        "collocations": [
          "eco-friendly products",
          "eco-friendly lifestyle",
          "eco-friendly packaging"
        ]
      },
      {
        "id": "v10-emission",
        "word": "emission",
        "partOfSpeech": "noun",
        "meaningVi": "sự phát thải, khí thải",
        "ipa": "/iˈmɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/emission.mp3",
        "exampleEn": "Electric vehicles produce zero direct exhaust emissions.",
        "exampleVi": "Các phương tiện giao thông chạy điện không tạo ra khí thải trực tiếp.",
        "collocations": [
          "cut down emissions",
          "greenhouse gas emissions",
          "zero emissions"
        ]
      },
      {
        "id": "v10-appliances",
        "word": "appliances",
        "partOfSpeech": "noun",
        "meaningVi": "thiết bị đồ gia dụng điện",
        "ipa": "/əˈplaɪənsɪz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/appliances.mp3",
        "exampleEn": "Remember to unplug household appliances when not in use.",
        "exampleVi": "Hãy nhớ rút phích cắm các thiết bị điện trong nhà khi không sử dụng.",
        "collocations": [
          "household appliances",
          "energy-efficient appliances"
        ]
      },
      {
        "id": "v10-decompose",
        "word": "decompose",
        "partOfSpeech": "verb",
        "meaningVi": "phân hủy tự nhiên",
        "ipa": "/ˌdiːkəmˈpəʊz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/decompose.mp3",
        "exampleEn": "Plastic bags take hundreds of years to fully decompose in landfills.",
        "exampleVi": "Túi nhựa mất hàng trăm năm để phân hủy hoàn toàn trong bãi rác.",
        "collocations": [
          "decompose naturally",
          "decompose into soil"
        ]
      },
      {
        "id": "v10-replenish",
        "word": "replenish",
        "partOfSpeech": "verb",
        "meaningVi": "bổ sung, làm đầy lại (nguồn tài nguyên)",
        "ipa": "/rɪˈplenɪʃ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/replenish.mp3",
        "exampleEn": "Rainwater helps replenish underground water supplies during dry seasons.",
        "exampleVi": "Nước mưa giúp bổ sung nguồn cung cấp nước ngầm trong mùa khô.",
        "collocations": [
          "replenish resources",
          "replenish water supply"
        ]
      },
      {
        "id": "v10-sustainable",
        "word": "sustainable",
        "partOfSpeech": "adjective",
        "meaningVi": "bền vững, không gây hại môi trường lâu dài",
        "ipa": "/səˈsteɪnəbl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/sustainable.mp3",
        "exampleEn": "Solar and wind energy are leading sources of sustainable energy.",
        "exampleVi": "Năng lượng mặt trời và gió là những nguồn năng lượng bền vững hàng đầu.",
        "collocations": [
          "sustainable development",
          "sustainable agriculture",
          "sustainable future"
        ]
      },
      {
        "id": "v10-single-use",
        "word": "single-use",
        "partOfSpeech": "adjective",
        "meaningVi": "dùng một lần (rồi vứt bỏ)",
        "ipa": "/ˌsɪŋɡl ˈjuːs/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/single_use.mp3",
        "exampleEn": "Many schools have banned single-use plastic cups in their cafeterias.",
        "exampleVi": "Nhiều trường học đã cấm cốc nhựa dùng một lần trong căng tin.",
        "collocations": [
          "single-use plastic",
          "ban single-use items"
        ]
      },
      {
        "id": "v10-green-living",
        "word": "green living",
        "partOfSpeech": "noun phrase",
        "meaningVi": "lối sống xanh, bảo vệ thiên nhiên",
        "ipa": "/ɡriːn ˈlɪvɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/green_living.mp3",
        "exampleEn": "Green living involves conserving electricity and composting organic food waste.",
        "exampleVi": "Lối sống xanh bao gồm việc tiết kiệm điện và ủ phân rác thải thực phẩm hữu cơ.",
        "collocations": [
          "adopt green living",
          "practice green living"
        ]
      },
      {
        "id": "v10-solar-panel",
        "word": "solar panel",
        "partOfSpeech": "noun phrase",
        "meaningVi": "tấm pin năng lượng mặt trời",
        "ipa": "/ˈsəʊlə pænl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/solar_panel.mp3",
        "exampleEn": "Installing solar panels on the roof cuts household electricity bills significantly.",
        "exampleVi": "Lắp đặt các tấm pin mặt trời trên mái nhà giúp giảm đáng kể hóa đơn tiền điện.",
        "collocations": [
          "install solar panels",
          "solar panel efficiency"
        ]
      },
      {
        "id": "v10-appliance",
        "word": "appliance",
        "partOfSpeech": "noun",
        "meaningVi": "thiết bị, đồ gia dụng điện",
        "ipa": "/əˈplaɪəns/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/appliance.mp3",
        "exampleEn": "Energy-saving appliances help households consume far less power.",
        "exampleVi": "Các thiết bị gia dụng tiết kiệm năng lượng giúp các hộ gia đình tiêu thụ ít điện năng hơn nhiều.",
        "collocations": [
          "household appliance",
          "electrical appliance",
          "energy-efficient appliance"
        ]
      }
    ]
  },
  {
    "id": "g10-u3",
    "slug": "unit-3-music",
    "unitNumber": 3,
    "titleEn": "Music",
    "titleVi": "Âm nhạc",
    "topic": "Music, Talents & Cultural Entertainment",
    "cefrLevel": "A2+",
    "term": 1,
    "grammarTitle": "Compound Sentences, To-infinitives & Bare Infinitives",
    "grammarSummary": "Câu ghép với liên từ FANBOYS (for, and, nor, but, or, yet, so). Động từ nguyên mẫu có to (to-infinitive) và nguyên mẫu không to (bare infinitive) sau các động từ tri giác, make/let.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "A talented artist - Giới thiệu về cuộc thi âm nhạc"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Phát âm /eɪ/ & /aɪ/; ngữ pháp Câu ghép và To/Bare-infinitive"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Các chương trình tìm kiếm tài năng âm nhạc thực tế"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Chia sẻ về thể loại âm nhạc và nghệ sĩ yêu thích"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe cuộc phỏng vấn một nhạc sĩ trẻ nổi tiếng"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài đánh giá ngắn (review) về một buổi biểu diễn nghệ thuật"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Âm nhạc dân gian Quan họ và nhạc đồng quê quốc tế"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Ban nhạc học đường của chúng em"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-audience",
        "word": "audience",
        "partOfSpeech": "noun",
        "meaningVi": "khán giả, thính giả",
        "ipa": "/ˈɔːdiəns/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/audience.mp3",
        "exampleEn": "The singer waved warmly to the cheerful audience.",
        "exampleVi": "Ca sĩ vẫy tay nồng nhiệt với đông đảo khán giả đang reo hò.",
        "collocations": [
          "enthusiastic audience",
          "live audience",
          "attract an audience"
        ]
      },
      {
        "id": "v10-talented",
        "word": "talented",
        "partOfSpeech": "adj",
        "meaningVi": "tài năng, có năng khiếu xuất sắc",
        "ipa": "/ˈtæləntɪd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/talented.mp3",
        "exampleEn": "She is a talented musician who plays both piano and violin gracefully.",
        "exampleVi": "Cô ấy là một nhạc sĩ tài năng chơi cả piano và violin một cách duyên dáng.",
        "collocations": [
          "talented musician",
          "exceptionally talented",
          "talented artist"
        ]
      },
      {
        "id": "v10-perform",
        "word": "perform",
        "partOfSpeech": "verb",
        "meaningVi": "biểu diễn, trình diễn nghệ thuật",
        "ipa": "/pəˈfɔːm/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/perform.mp3",
        "exampleEn": "The band will perform live at the charity concert tomorrow.",
        "exampleVi": "Ban nhạc sẽ biểu diễn trực tiếp tại buổi hòa nhạc từ thiện ngày mai.",
        "collocations": [
          "perform live",
          "perform on stage",
          "perform a song"
        ]
      },
      {
        "id": "v10-contestant",
        "word": "contestant",
        "partOfSpeech": "noun",
        "meaningVi": "thí sinh dự thi",
        "ipa": "/kənˈtestənt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/contestant.mp3",
        "exampleEn": "Each contestant performed their favorite ballad in front of the judges.",
        "exampleVi": "Mỗi thí sinh đã biểu diễn bản ballad yêu thích của mình trước ban giám khảo.",
        "collocations": [
          "talented contestant",
          "contestant in a competition"
        ]
      },
      {
        "id": "v10-instrument",
        "word": "instrument",
        "partOfSpeech": "noun",
        "meaningVi": "nhạc cụ",
        "ipa": "/ˈɪnstrəmənt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/instrument.mp3",
        "exampleEn": "Traditional Vietnamese musical instruments include the Dan Bau and Dan Tranh.",
        "exampleVi": "Các nhạc cụ truyền thống của Việt Nam bao gồm Đàn Bầu và Đàn Tranh.",
        "collocations": [
          "play a musical instrument",
          "traditional instrument"
        ]
      },
      {
        "id": "v10-melody",
        "word": "melody",
        "partOfSpeech": "noun",
        "meaningVi": "giai điệu",
        "ipa": "/ˈmelədi/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/melody.mp3",
        "exampleEn": "The catchy melody stayed in my head throughout the entire afternoon.",
        "exampleVi": "Giai điệu bắt tai cứ đọng mãi trong đầu tôi suốt cả buổi chiều.",
        "collocations": [
          "catchy melody",
          "haunting melody",
          "sweet melody"
        ]
      },
      {
        "id": "v10-release",
        "word": "release",
        "partOfSpeech": "verb",
        "meaningVi": "phát hành (album, đĩa đơn, MV)",
        "ipa": "/rɪˈliːs/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/release.mp3",
        "exampleEn": "The band plans to release their debut album next month.",
        "exampleVi": "Ban nhạc dự kiến sẽ phát hành album đầu tay vào tháng tới.",
        "collocations": [
          "release an album",
          "release a single",
          "new release"
        ]
      },
      {
        "id": "v10-judge",
        "word": "judge",
        "partOfSpeech": "noun",
        "meaningVi": "giám khảo (cuộc thi âm nhạc)",
        "ipa": "/dʒʌdʒ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/judge.mp3",
        "exampleEn": "The panel of judges gave constructive feedback to every young performer.",
        "exampleVi": "Hội đồng giám khảo đã đưa ra những lời nhận xét mang tính xây dựng cho từng thí sinh trẻ.",
        "collocations": [
          "panel of judges",
          "harsh judge",
          "music competition judge"
        ]
      },
      {
        "id": "v10-platinum",
        "word": "platinum",
        "partOfSpeech": "noun / adjective",
        "meaningVi": "đĩa bạch kim (chứng nhận doanh số khủng)",
        "ipa": "/ˈplætɪnəm/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/platinum.mp3",
        "exampleEn": "Their comeback song went platinum within only three weeks of its release.",
        "exampleVi": "Bài hát trở lại của họ đã đạt chứng nhận đĩa bạch kim chỉ sau 3 tuần phát hành.",
        "collocations": [
          "go platinum",
          "platinum record",
          "platinum album"
        ]
      },
      {
        "id": "v10-debut",
        "word": "debut",
        "partOfSpeech": "noun / verb",
        "meaningVi": "sự ra mắt lần đầu tiên trước công chúng",
        "ipa": "/ˈdeɪbjuː/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/debut.mp3",
        "exampleEn": "The young artist made her debut on television at the age of sixteen.",
        "exampleVi": "Nghệ sĩ trẻ đã có màn ra mắt lần đầu trên truyền hình vào năm mười sáu tuổi.",
        "collocations": [
          "debut album",
          "make a debut",
          "debut performance"
        ]
      }
    ]
  },
  {
    "id": "g10-r1",
    "slug": "review-1-units-1-2-3",
    "unitNumber": 3.5,
    "isReview": true,
    "titleEn": "Review 1 (Units 1 - 3)",
    "titleVi": "Ôn tập 1 (Bài 1 - 3)",
    "topic": "Mid-Term 1 Review",
    "cefrLevel": "A2+",
    "term": 1,
    "grammarTitle": "Consolidation: Tenses & Sentence Structures",
    "grammarSummary": "Củng cố thì Hiện tại đơn, Hiện tại tiếp diễn, Tương lai với Will/Be going to, Câu bị động và To/Bare-infinitive.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Củng cố ngữ âm, từ vựng và bài tập ngữ pháp tổng hợp"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Luyện tập 4 kỹ năng chuẩn bị bài kiểm tra giữa kỳ 1"
      }
    ],
    "vocabulary": []
  },
  {
    "id": "g10-u4",
    "slug": "unit-4-for-a-better-community",
    "unitNumber": 4,
    "titleEn": "For a Better Community",
    "titleVi": "Vì một cộng đồng tốt đẹp hơn",
    "topic": "Volunteer Work & Community Service",
    "cefrLevel": "B1",
    "term": 1,
    "grammarTitle": "Past Simple vs. Past Continuous with When/While",
    "grammarSummary": "Thì Quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm trong quá khứ hoặc một hành động đang tiếp diễn thì một hành động khác xen vào (dùng Past Simple với When/While).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Community services - Các hoạt động thiện nguyện vì cộng đồng"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Hậu tố -ed, -ing; ngữ pháp Quá khứ đơn vs. Quá khứ tiếp diễn"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Ý nghĩa nhân văn của các hoạt động tình nguyện viên"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Lên kế hoạch một dự án giúp đỡ trẻ em có hoàn cảnh khó khăn"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe chia sẻ về trải nghiệm tình nguyện mùa hè xanh"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết thư bày tỏ nguyện vọng tham gia tổ chức tình nguyện"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Các phong trào tình nguyện của giới trẻ quốc tế"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Vì nụ cười trẻ thơ"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-volunteer",
        "word": "volunteer",
        "partOfSpeech": "noun",
        "meaningVi": "tình nguyện viên, người làm việc công ích",
        "ipa": "/ˌvɒlənˈtɪə(r)/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/volunteer.mp3",
        "exampleEn": "Many student volunteers took part in cleaning up the local beach.",
        "exampleVi": "Nhiều tình nguyện viên học sinh đã tham gia dọn dẹp bãi biển địa phương.",
        "collocations": [
          "community volunteer",
          "volunteer work",
          "volunteer organization"
        ]
      },
      {
        "id": "v10-donate",
        "word": "donate",
        "partOfSpeech": "verb",
        "meaningVi": "quyên góp, ủng hộ từ thiện",
        "ipa": "/dəʊˈneɪt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/donate.mp3",
        "exampleEn": "Our school donated hundreds of warm jackets to flood victims.",
        "exampleVi": "Trường chúng tôi đã quyên góp hàng trăm chiếc áo ấm cho nạn nhân lũ lụt.",
        "collocations": [
          "donate money",
          "donate to charity",
          "donate blood"
        ]
      },
      {
        "id": "v10-disadvantaged",
        "word": "disadvantaged",
        "partOfSpeech": "adj",
        "meaningVi": "thiệt thòi, có hoàn cảnh khó khăn",
        "ipa": "/ˌdɪsədˈvɑːntɪdʒd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/disadvantaged.mp3",
        "exampleEn": "The program provides free meals for disadvantaged children.",
        "exampleVi": "Chương trình cung cấp bữa ăn miễn phí cho trẻ em có hoàn cảnh khó khăn.",
        "collocations": [
          "disadvantaged children",
          "disadvantaged background"
        ]
      },
      {
        "id": "v10-underprivileged",
        "word": "underprivileged",
        "partOfSpeech": "adjective",
        "meaningVi": "thiệt thòi, kém may mắn về hoàn cảnh kinh tế",
        "ipa": "/ˌʌndəˈprɪvəlɪdʒd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/underprivileged.mp3",
        "exampleEn": "Free tutoring programs support underprivileged students across mountainous provinces.",
        "exampleVi": "Các chương trình dạy phụ đạo miễn phí hỗ trợ học sinh có hoàn cảnh khó khăn khắp các tỉnh miền núi.",
        "collocations": [
          "underprivileged background",
          "underprivileged children"
        ]
      },
      {
        "id": "v10-non-profit",
        "word": "non-profit",
        "partOfSpeech": "adjective",
        "meaningVi": "phi lợi nhuận",
        "ipa": "/ˌnɒn ˈprɒfɪt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/non_profit.mp3",
        "exampleEn": "She founded a non-profit organization dedicated to rescuing stray animals.",
        "exampleVi": "Cô ấy đã thành lập một tổ chức phi lợi nhuận chuyên giải cứu động vật vô chủ.",
        "collocations": [
          "non-profit organization (NGO)",
          "non-profit sector"
        ]
      },
      {
        "id": "v10-dedicate",
        "word": "dedicate",
        "partOfSpeech": "verb",
        "meaningVi": "cống hiến, dành hết tâm huyết",
        "ipa": "/ˈdedɪkeɪt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/dedicate.mp3",
        "exampleEn": "He dedicated his entire youth to improving community healthcare.",
        "exampleVi": "Ông đã cống hiến trọn tuổi trẻ để cải thiện dịch vụ chăm sóc sức khỏe cộng đồng.",
        "collocations": [
          "dedicate time to",
          "dedicate life to charity"
        ]
      },
      {
        "id": "v10-remote-area",
        "word": "remote area",
        "partOfSpeech": "noun phrase",
        "meaningVi": "vùng sâu vùng xa, hẻo lánh",
        "ipa": "/rɪˈməʊt ˈeəriə/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/remote_area.mp3",
        "exampleEn": "Building bridges helps residents in remote areas travel safely during floods.",
        "exampleVi": "Xây cầu giúp người dân ở các vùng sâu vùng xa đi lại an toàn trong mùa lũ.",
        "collocations": [
          "live in a remote area",
          "access to remote areas"
        ]
      },
      {
        "id": "v10-contribution",
        "word": "contribution",
        "partOfSpeech": "noun",
        "meaningVi": "sự đóng góp, cống hiến",
        "ipa": "/ˌkɒntrɪˈbjuːʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/contribution.mp3",
        "exampleEn": "Every small contribution makes a tremendous difference in someone's life.",
        "exampleVi": "Mỗi sự đóng góp nhỏ bé đều tạo nên sự khác biệt to lớn trong cuộc sống của ai đó.",
        "collocations": [
          "make a significant contribution",
          "valuable contribution"
        ]
      }
    ]
  },
  {
    "id": "g10-u5",
    "slug": "unit-5-inventions",
    "unitNumber": 5,
    "titleEn": "Inventions",
    "titleVi": "Các phát minh",
    "topic": "Technological Inventions & Digital Innovation",
    "cefrLevel": "B1",
    "term": 1,
    "grammarTitle": "Present Perfect, Gerunds and To-infinitives",
    "grammarSummary": "Thì Hiện tại hoàn thành diễn tả kinh nghiệm hoặc hành động kéo dài từ quá khứ đến hiện tại. Danh động từ và động từ nguyên mẫu có to dùng diễn tả công dụng của đồ vật (used for V-ing / used to V).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Useful inventions - Những phát minh hữu ích trong đời sống"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Ngữ pháp Hiện tại hoàn thành và danh động từ diễn tả công dụng"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Trí tuệ nhân tạo và các phát minh thay đổi thế giới"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Trình bày về một phát minh mà em thấy hữu ích nhất"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe về lịch sử ra đời của điện thoại thông minh"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết đoạn văn miêu tả lợi ích của máy tính cá nhân"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Công nghệ sinh học và giao thông không người lái"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Nhà phát minh tương lai"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-invention",
        "word": "invention",
        "partOfSpeech": "noun",
        "meaningVi": "phát minh, sáng chế kỹ thuật mới",
        "ipa": "/ɪnˈvenʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/invention.mp3",
        "exampleEn": "The invention of smartphones has revolutionized global communication.",
        "exampleVi": "Phát minh ra điện thoại thông minh đã cách mạng hóa giao tiếp toàn cầu.",
        "collocations": [
          "scientific invention",
          "revolutionary invention",
          "patent an invention"
        ]
      },
      {
        "id": "v10-portable",
        "word": "portable",
        "partOfSpeech": "adj",
        "meaningVi": "nhỏ gọn, có thể mang theo dễ dàng",
        "ipa": "/ˈpɔːtəbl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/portable.mp3",
        "exampleEn": "Portable chargers are essential when travelling long distances.",
        "exampleVi": "Sạc dự phòng nhỏ gọn là vật dụng thiết yếu khi đi du lịch đường dài.",
        "collocations": [
          "portable device",
          "portable computer",
          "portable charger"
        ]
      },
      {
        "id": "v10-artificial-intelligence",
        "word": "artificial intelligence",
        "partOfSpeech": "noun",
        "meaningVi": "trí tuệ nhân tạo (AI)",
        "ipa": "/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/artificial_intelligence.mp3",
        "exampleEn": "Artificial intelligence helps doctors diagnose diseases more accurately.",
        "exampleVi": "Trí tuệ nhân tạo giúp các bác sĩ chẩn đoán bệnh chính xác hơn.",
        "collocations": [
          "apply artificial intelligence",
          "generative AI",
          "AI technology"
        ]
      },
      {
        "id": "v10-breakthrough",
        "word": "breakthrough",
        "partOfSpeech": "noun",
        "meaningVi": "bước đột phá về công nghệ / khoa học",
        "ipa": "/ˈbreɪkθruː/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/breakthrough.mp3",
        "exampleEn": "The invention of penicillin was a medical breakthrough that saved millions.",
        "exampleVi": "Phát minh ra penicillin là một bước đột phá y học đã cứu sống hàng triệu người.",
        "collocations": [
          "technological breakthrough",
          "major breakthrough",
          "scientific breakthrough"
        ]
      },
      {
        "id": "v10-patent",
        "word": "patent",
        "partOfSpeech": "noun / verb",
        "meaningVi": "bằng sáng chế; đăng ký bản quyền sáng chế",
        "ipa": "/ˈpeɪtnt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/patent.mp3",
        "exampleEn": "Thomas Edison held more than one thousand patents for his various inventions.",
        "exampleVi": "Thomas Edison nắm giữ hơn một nghìn bằng sáng chế cho các phát minh khác nhau của mình.",
        "collocations": [
          "apply for a patent",
          "patent an invention",
          "patent protection"
        ]
      },
      {
        "id": "v10-3d-printer",
        "word": "3D printer",
        "partOfSpeech": "noun phrase",
        "meaningVi": "máy in không gian 3 chiều",
        "ipa": "/ˌθriː diː ˈprɪntə(r)/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/3d_printer.mp3",
        "exampleEn": "A 3D printer can create prosthetic limbs at a fraction of the traditional cost.",
        "exampleVi": "Máy in 3D có thể tạo ra các chi giả với chi phí chỉ bằng một phần nhỏ so với cách truyền thống.",
        "collocations": [
          "use a 3D printer",
          "3D printing technology"
        ]
      }
    ]
  },
  {
    "id": "g10-r2",
    "slug": "review-2-units-4-5",
    "unitNumber": 5.5,
    "isReview": true,
    "titleEn": "Review 2 (Units 4 - 5)",
    "titleVi": "Ôn tập 2 (Bài 4 - 5)",
    "topic": "End of Term 1 Review",
    "cefrLevel": "B1",
    "term": 1,
    "grammarTitle": "Consolidation: Term 1 Comprehensive Grammar",
    "grammarSummary": "Tổng kết toàn bộ ngữ pháp học kỳ 1: Hiện tại hoàn thành, Quá khứ tiếp diễn với When/While, Câu bị động và Danh động từ.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Hệ thống hóa toàn bộ từ vựng và chuyên đề ngữ pháp học kỳ 1"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Đề thi tổng hợp 4 kỹ năng chuẩn bị cho kỳ thi Cuối học kỳ 1"
      }
    ],
    "vocabulary": []
  },
  {
    "id": "g10-u6",
    "slug": "unit-6-gender-equality",
    "unitNumber": 6,
    "titleEn": "Gender Equality",
    "titleVi": "Bình đẳng giới",
    "topic": "Equal Rights, Opportunities & Career Choices",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Passive Voice with Modal Verbs",
    "grammarSummary": "Câu bị động với động từ khuyết thiếu: S + modal verb (can, should, must, may, might) + be + V3/ed. Nhấn mạnh việc bình đẳng giới cần được tôn trọng và thúc đẩy.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Equal job opportunities - Cơ hội nghề nghiệp công bằng cho nam và nữ"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Trọng âm từ 3 âm tiết; ngữ pháp Bị động với động từ khuyết thiếu"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Phụ nữ trong các lĩnh vực khoa học công nghệ (STEM)"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về việc xóa bỏ định kiến giới trong nghề nghiệp"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe bài nói chuyện về các nữ phi công tiên phong"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết đoạn văn về một phụ nữ truyền cảm hứng"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Bình đẳng giới trong chính sách giáo dục ở các nước Bắc Âu"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Nữ quyền và sự phát triển bền vững"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-equality",
        "word": "equality",
        "partOfSpeech": "noun",
        "meaningVi": "sự bình đẳng, quyền ngang nhau",
        "ipa": "/iˈkwɒləti/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/equality.mp3",
        "exampleEn": "Gender equality is fundamental to building a fair and prosperous society.",
        "exampleVi": "Bình đẳng giới là nền tảng cốt lõi để xây dựng một xã hội công bằng và thịnh vượng.",
        "collocations": [
          "gender equality",
          "promote equality",
          "achieve equality"
        ]
      },
      {
        "id": "v10-discrimination",
        "word": "discrimination",
        "partOfSpeech": "noun",
        "meaningVi": "sự phân biệt đối xử",
        "ipa": "/dɪˌskrɪmɪˈneɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/discrimination.mp3",
        "exampleEn": "Everyone deserves equal pay without discrimination based on gender.",
        "exampleVi": "Mọi người đều xứng đáng được hưởng mức lương bình đẳng mà không bị phân biệt đối xử vì giới tính.",
        "collocations": [
          "gender discrimination",
          "eliminate discrimination",
          "racial discrimination"
        ]
      },
      {
        "id": "v10-eliminate",
        "word": "eliminate",
        "partOfSpeech": "verb",
        "meaningVi": "xóa bỏ, loại trừ hoàn toàn",
        "ipa": "/ɪˈlɪmɪneɪt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/eliminate.mp3",
        "exampleEn": "The government took drastic measures to eliminate gender discrimination in employment.",
        "exampleVi": "Chính phủ đã áp dụng các biện pháp quyết liệt nhằm xóa bỏ phân biệt giới tính trong việc làm.",
        "collocations": [
          "eliminate discrimination",
          "eliminate poverty",
          "eliminate bias"
        ]
      },
      {
        "id": "v10-wage-gap",
        "word": "wage gap",
        "partOfSpeech": "noun phrase",
        "meaningVi": "khoảng cách thu nhập / tiền lương theo giới tính",
        "ipa": "/ˈweɪdʒ ɡæp/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/wage_gap.mp3",
        "exampleEn": "Closing the gender wage gap is crucial for economic fairness and growth.",
        "exampleVi": "Thu hẹp khoảng cách tiền lương theo giới là điều then chốt cho sự công bằng và phát triển kinh tế.",
        "collocations": [
          "gender wage gap",
          "close the wage gap",
          "narrow the wage gap"
        ]
      },
      {
        "id": "v10-pioneer",
        "word": "pioneer",
        "partOfSpeech": "noun / verb",
        "meaningVi": "người tiên phong, mở đường",
        "ipa": "/ˌpaɪəˈnɪə(r)/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/pioneer.mp3",
        "exampleEn": "Marie Curie was a scientific pioneer who won two Nobel Prizes.",
        "exampleVi": "Marie Curie là một nhà khoa học tiên phong từng đoạt hai giải Nobel.",
        "collocations": [
          "female pioneer",
          "pioneer in science",
          "pioneer a new method"
        ]
      },
      {
        "id": "v10-domestic-violence",
        "word": "domestic violence",
        "partOfSpeech": "noun phrase",
        "meaningVi": "bạo lực gia đình",
        "ipa": "/dəˌmestɪk ˈvaɪələns/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/domestic_violence.mp3",
        "exampleEn": "Stricter laws have been enacted to protect women and children from domestic violence.",
        "exampleVi": "Các đạo luật nghiêm khắc hơn đã được ban hành để bảo vệ phụ nữ và trẻ em khỏi bạo lực gia đình.",
        "collocations": [
          "combat domestic violence",
          "victim of domestic violence"
        ]
      },
      {
        "id": "v10-male-dominated",
        "word": "male-dominated",
        "partOfSpeech": "adjective",
        "meaningVi": "do nam giới chiếm ưu thế / thống trị",
        "ipa": "/ˈmeɪl dɒmɪneɪtɪd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/male_dominated.mp3",
        "exampleEn": "Engineering has historically been considered a male-dominated industry.",
        "exampleVi": "Ngành kỹ thuật trong lịch sử từng được coi là lĩnh vực do nam giới chiếm ưu thế.",
        "collocations": [
          "male-dominated field",
          "male-dominated career"
        ]
      }
    ]
  },
  {
    "id": "g10-u7",
    "slug": "unit-7-viet-nam-and-international-organisations",
    "unitNumber": 7,
    "titleEn": "Viet Nam and International Organisations",
    "titleVi": "Việt Nam và các tổ chức quốc tế",
    "topic": "Global Integration, UN, UNICEF & WTO",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Comparative and Superlative Adjectives",
    "grammarSummary": "So sánh hơn và so sánh nhất của tính từ ngắn, tính từ dài và các trường hợp bất quy tắc (good/better/best, bad/worse/worst, far/further/furthest).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Viet Nam joining international groups - Việt Nam gia nhập các tổ chức quốc tế"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "So sánh hơn và so sánh nhất; phát âm trọng âm từ có đuôi -ic, -tion"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Vai trò của Việt Nam trong Liên Hợp Quốc (UN) và UNESCO"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thuyết trình về các dự án UNICEF hỗ trợ trẻ em Việt Nam"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe về hoạt động thương mại trong khuôn khổ WTO"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết đoạn văn ngắn giới thiệu về một tổ chức quốc tế"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Đóng góp của thanh niên Việt Nam trong các diễn đàn toàn cầu"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Đại sứ ngoại giao trẻ"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-organisation",
        "word": "organisation",
        "partOfSpeech": "noun",
        "meaningVi": "tổ chức quốc tế hoặc cơ quan đoàn thể",
        "ipa": "/ˌɔːɡənaɪˈzeɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/organisation.mp3",
        "exampleEn": "Viet Nam is an active member of the United Nations organisation.",
        "exampleVi": "Việt Nam là thành viên tích cực của tổ chức Liên Hợp Quốc.",
        "collocations": [
          "international organisation",
          "join an organisation",
          "non-governmental organisation"
        ]
      },
      {
        "id": "v10-cooperation",
        "word": "cooperation",
        "partOfSpeech": "noun",
        "meaningVi": "sự hợp tác, cùng phối hợp hành động",
        "ipa": "/kəʊˌɒpəˈreɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/cooperation.mp3",
        "exampleEn": "International cooperation is vital in tackling global pandemics.",
        "exampleVi": "Sự hợp tác quốc tế là điều thiết yếu trong việc ứng phó với các đại dịch toàn cầu.",
        "collocations": [
          "international cooperation",
          "in close cooperation with",
          "strengthen cooperation"
        ]
      },
      {
        "id": "v10-multilateral",
        "word": "multilateral",
        "partOfSpeech": "adjective",
        "meaningVi": "đa phương (giữa nhiều quốc gia)",
        "ipa": "/ˌmʌltiˈlætərəl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/multilateral.mp3",
        "exampleEn": "Viet Nam actively participates in multilateral diplomatic forums around the globe.",
        "exampleVi": "Việt Nam tích cực tham gia vào các diễn đàn ngoại giao đa phương trên toàn cầu.",
        "collocations": [
          "multilateral relations",
          "multilateral agreement",
          "multilateral diplomacy"
        ]
      },
      {
        "id": "v10-peacekeeping",
        "word": "peacekeeping",
        "partOfSpeech": "noun / adjective",
        "meaningVi": "gìn giữ hòa bình",
        "ipa": "/ˈpiːskiːpɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/peacekeeping.mp3",
        "exampleEn": "Vietnamese officers have participated honorably in United Nations peacekeeping missions.",
        "exampleVi": "Các sĩ quan Việt Nam đã tham gia một cách đáng tự hào vào các phái bộ gìn giữ hòa bình của Liên Hợp Quốc.",
        "collocations": [
          "peacekeeping mission",
          "peacekeeping forces",
          "UN peacekeeping"
        ]
      },
      {
        "id": "v10-integration",
        "word": "integration",
        "partOfSpeech": "noun",
        "meaningVi": "sự hội nhập quốc tế",
        "ipa": "/ˌɪntɪˈɡreɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/integration.mp3",
        "exampleEn": "International economic integration brings significant opportunities for Vietnamese businesses.",
        "exampleVi": "Hội nhập kinh tế quốc tế mang lại cơ hội to lớn cho các doanh nghiệp Việt Nam.",
        "collocations": [
          "international integration",
          "economic integration",
          "cultural integration"
        ]
      },
      {
        "id": "v10-promote",
        "word": "promote",
        "partOfSpeech": "verb",
        "meaningVi": "thúc đẩy, quảng bá",
        "ipa": "/prəˈməʊt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/promote.mp3",
        "exampleEn": "Joining the WTO helped Viet Nam promote exports and attract foreign direct investment.",
        "exampleVi": "Gia nhập WTO đã giúp Việt Nam thúc đẩy xuất khẩu và thu hút đầu tư trực tiếp nước ngoài.",
        "collocations": [
          "promote trade",
          "promote cultural exchange",
          "promote peace"
        ]
      }
    ]
  },
  {
    "id": "g10-u8",
    "slug": "unit-8-new-ways-to-learn",
    "unitNumber": 8,
    "titleEn": "New Ways to Learn",
    "titleVi": "Những cách học mới",
    "topic": "Blended Learning, Digital Tools & Self-Study",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Relative Clauses (Defining Relative Clauses)",
    "grammarSummary": "Mệnh đề quan hệ xác định dùng các đại từ quan hệ Who, Whom, Which, That, Whose để bổ nghĩa cho danh từ đứng trước, cung cấp thông tin thiết yếu không thể lược bỏ.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Learning with electronic devices - Học tập cùng thiết bị điện tử"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Ngữ pháp Mệnh đề quan hệ xác định (who, which, that, whose)"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Phương pháp học tập kết hợp (Blended Learning) và ứng dụng EdTech"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Tranh biện về việc sử dụng điện thoại thông minh phục vụ học tập"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe chuyên gia chia sẻ mẹo quản lý thời gian khi tự học trực tuyến"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết đoạn văn phân tích ưu điểm và nhược điểm của học trực tuyến"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Lớp học số thông minh tại các nước phát triển"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Không gian học tập thời đại số"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-blended-learning",
        "word": "blended learning",
        "partOfSpeech": "noun",
        "meaningVi": "phương pháp học kết hợp trực tiếp và online",
        "ipa": "/ˌblendɪd ˈlɜːnɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/blended_learning.mp3",
        "exampleEn": "Blended learning allows students to learn at their own pace outside the classroom.",
        "exampleVi": "Học kết hợp cho phép học sinh học theo tốc độ riêng ngoài giờ lên lớp.",
        "collocations": [
          "adopt blended learning",
          "blended learning model",
          "benefits of blended learning"
        ]
      },
      {
        "id": "v10-device",
        "word": "device",
        "partOfSpeech": "noun",
        "meaningVi": "thiết bị công nghệ, dụng cụ điện tử",
        "ipa": "/dɪˈvaɪs/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/device.mp3",
        "exampleEn": "Students can use mobile devices to practice pronunciation with AI tutors.",
        "exampleVi": "Học sinh có thể dùng thiết bị di động để luyện phát âm cùng gia sư AI.",
        "collocations": [
          "electronic device",
          "smart device",
          "digital device"
        ]
      },
      {
        "id": "v10-self-paced",
        "word": "self-paced",
        "partOfSpeech": "adjective",
        "meaningVi": "tự điều chỉnh tốc độ học phù hợp với bản thân",
        "ipa": "/ˌself ˈpeɪst/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/self_paced.mp3",
        "exampleEn": "Online courses provide a self-paced environment where learners can rewatch videos anytime.",
        "exampleVi": "Các khóa học trực tuyến cung cấp môi trường tự điều chỉnh tốc độ nơi người học có thể xem lại video bất cứ lúc nào.",
        "collocations": [
          "self-paced learning",
          "self-paced course"
        ]
      },
      {
        "id": "v10-collaborative",
        "word": "collaborative",
        "partOfSpeech": "adjective",
        "meaningVi": "có tính hợp tác, phối hợp nhóm",
        "ipa": "/kəˈlæbərətɪv/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/collaborative.mp3",
        "exampleEn": "Digital platforms encourage collaborative projects between students from different schools.",
        "exampleVi": "Các nền tảng số khuyến khích các dự án mang tính hợp tác giữa học sinh từ nhiều trường khác nhau.",
        "collocations": [
          "collaborative project",
          "collaborative learning",
          "collaborative effort"
        ]
      },
      {
        "id": "v10-look-up",
        "word": "look up",
        "partOfSpeech": "phrasal verb",
        "meaningVi": "tra cứu (từ điển, thông tin)",
        "ipa": "/lʊk ʌp/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/look_up.mp3",
        "exampleEn": "You can look up new words instantly with just one click on the screen.",
        "exampleVi": "Bạn có thể tra từ mới ngay tức thì chỉ với một cú nhấp chuột trên màn hình.",
        "collocations": [
          "look up a word in the dictionary",
          "look up information online"
        ]
      }
    ]
  },
  {
    "id": "g10-r3",
    "slug": "review-3-units-6-7-8",
    "unitNumber": 8.5,
    "isReview": true,
    "titleEn": "Review 3 (Units 6 - 8)",
    "titleVi": "Ôn tập 3 (Bài 6 - 8)",
    "topic": "Mid-Term 2 Review",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Consolidation: Modals, Comparatives & Relative Clauses",
    "grammarSummary": "Củng cố câu bị động với modal verbs, tính từ so sánh hơn/nhất và mệnh đề quan hệ xác định.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Ôn tập kiến thức ngôn ngữ chuẩn bị cho kỳ thi giữa học kỳ 2"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Luyện đề kỹ năng tổng hợp"
      }
    ],
    "vocabulary": []
  },
  {
    "id": "g10-u9",
    "slug": "unit-9-protecting-the-environment",
    "unitNumber": 9,
    "titleEn": "Protecting the Environment",
    "titleVi": "Bảo vệ môi trường",
    "topic": "Wildlife Conservation & Anti-Pollution",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Reported Speech (Statements & Questions)",
    "grammarSummary": "Câu gián tiếp (tường thuật câu trần thuật và câu hỏi). Quy tắc lùi thì, đổi đại từ nhân xưng, tính từ sở hữu và trạng từ chỉ nơi chốn, thời gian.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Environmental protection campaign - Chiến dịch bảo vệ môi trường"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Quy tắc chuyển đổi câu trực tiếp sang gián tiếp (Reported speech)"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Các loài động vật nguy cấp và mối đe dọa từ nạn phá rừng"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Đề xuất giải pháp bảo tồn đa dạng sinh học tại địa phương"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe về nỗ lực giải cứu động vật hoang dã"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết thông báo kêu gọi tham gia bảo vệ môi trường"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Phong trào trường học không rác thải nhựa trên thế giới"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Tái chế rác thải sáng tạo"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-endangered",
        "word": "endangered",
        "partOfSpeech": "adj",
        "meaningVi": "có nguy cơ tuyệt chủng, bị đe dọa",
        "ipa": "/ɪnˈdeɪndʒəd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/endangered.mp3",
        "exampleEn": "Rhinos and sea turtles are critically endangered animals that need protection.",
        "exampleVi": "Tê giác và rùa biển là những loài động vật có nguy cơ tuyệt chủng nghiêm trọng cần được bảo vệ.",
        "collocations": [
          "endangered species",
          "critically endangered",
          "endangered animals"
        ]
      },
      {
        "id": "v10-habitat",
        "word": "habitat",
        "partOfSpeech": "noun",
        "meaningVi": "môi trường sống tự nhiên của sinh vật",
        "ipa": "/ˈhæbɪtæt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/habitat.mp3",
        "exampleEn": "Deforestation destroys the natural habitats of thousands of forest animals.",
        "exampleVi": "Nạn phá rừng hủy hoại môi trường sống tự nhiên của hàng ngàn loài động vật rừng.",
        "collocations": [
          "natural habitat",
          "habitat loss",
          "preserve wildlife habitat"
        ]
      },
      {
        "id": "v10-biodiversity",
        "word": "biodiversity",
        "partOfSpeech": "noun",
        "meaningVi": "đa dạng sinh học",
        "ipa": "/ˌbaɪəʊdaɪˈvɜːsəti/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/biodiversity.mp3",
        "exampleEn": "Deforestation in tropical rainforests severely threatens global biodiversity.",
        "exampleVi": "Nạn phá rừng ở các khu rừng nhiệt đới đe dọa nghiêm trọng đến sự đa dạng sinh học toàn cầu.",
        "collocations": [
          "preserve biodiversity",
          "loss of biodiversity",
          "rich biodiversity"
        ]
      },
      {
        "id": "v10-poaching",
        "word": "poaching",
        "partOfSpeech": "noun",
        "meaningVi": "nạn săn bắn trộm động vật hoang dã trái phép",
        "ipa": "/ˈpəʊtʃɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/poaching.mp3",
        "exampleEn": "Strict anti-poaching patrols guard the national park day and night.",
        "exampleVi": "Các đội tuần tra chống săn trộm nghiêm ngặt bảo vệ vườn quốc gia ngày đêm.",
        "collocations": [
          "illegal poaching",
          "anti-poaching patrol",
          "stop poaching"
        ]
      },
      {
        "id": "v10-habitat-loss",
        "word": "habitat loss",
        "partOfSpeech": "noun phrase",
        "meaningVi": "mất môi trường sống tự nhiên",
        "ipa": "/ˈhæbɪtæt lɒs/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/habitat_loss.mp3",
        "exampleEn": "Habitat loss is the number one driver pushing rare tiger species to extinction.",
        "exampleVi": "Mất môi trường sống là nguyên nhân hàng đầu đẩy các loài hổ quý hiếm đến bờ vực tuyệt chủng.",
        "collocations": [
          "suffer from habitat loss",
          "cause habitat loss"
        ]
      },
      {
        "id": "v10-sanctuary",
        "word": "sanctuary",
        "partOfSpeech": "noun",
        "meaningVi": "khu bảo tồn an toàn cho động vật hoang dã",
        "ipa": "/ˈsæŋktʃuəri/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/sanctuary.mp3",
        "exampleEn": "Rescued moon bears find a peaceful lifelong home in the Tam Dao bear sanctuary.",
        "exampleVi": "Những cá thể gấu ngựa được giải cứu đã tìm thấy mái nhà bình yên trọn đời tại khu bảo tồn gấu Tam Đảo.",
        "collocations": [
          "wildlife sanctuary",
          "bird sanctuary",
          "safe sanctuary"
        ]
      }
    ]
  },
  {
    "id": "g10-u10",
    "slug": "unit-10-ecotourism",
    "unitNumber": 10,
    "titleEn": "Ecotourism",
    "titleVi": "Du lịch sinh thái",
    "topic": "Responsible Travel & Nature Preservation",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Conditional Sentences Type 1 and Type 2",
    "grammarSummary": "Câu điều kiện loại 1 (điều kiện có thật ở hiện tại/tương lai: If + V(s/es), will + V). Câu điều kiện loại 2 (điều kiện không có thật ở hiện tại: If + V2/ed / were, would + V).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "A tour of Phong Nha - Ke Bang - Khám phá tour du lịch sinh thái"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Ngữ pháp Câu điều kiện loại 1 & 2; phát âm ngữ điệu câu hỏi điều kiện"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc: Nguyên tắc du lịch có trách nhiệm và bảo tồn danh thắng"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Lên kế hoạch một chuyến du lịch sinh thái vì cộng đồng"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe hướng dẫn viên chia sẻ quy tắc ứng xử khi tham quan vườn quốc gia"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết cẩm nang hướng dẫn du khách bảo vệ cảnh quan"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & Culture",
        "description": "Mô hình du lịch sinh thái bền vững trên thế giới"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án Quảng bá du lịch xanh tại quê hương"
      }
    ],
    "vocabulary": [
      {
        "id": "v10-ecotourism",
        "word": "ecotourism",
        "partOfSpeech": "noun",
        "meaningVi": "du lịch sinh thái, du lịch gắn với thiên nhiên",
        "ipa": "/ˈiːkəʊtʊərɪzəm/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/ecotourism.mp3",
        "exampleEn": "Ecotourism helps preserve natural beauty while supporting local communities.",
        "exampleVi": "Du lịch sinh thái giúp bảo tồn vẻ đẹp tự nhiên đồng thời hỗ trợ các cộng đồng địa phương.",
        "collocations": [
          "develop ecotourism",
          "ecotourism destination",
          "sustainable ecotourism"
        ]
      },
      {
        "id": "v10-sustainable",
        "word": "sustainable",
        "partOfSpeech": "adj",
        "meaningVi": "bền vững, thân thiện với môi trường lâu dài",
        "ipa": "/səˈsteɪnəbl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/sustainable.mp3",
        "exampleEn": "Sustainable tourism practices protect biodiversity for future generations.",
        "exampleVi": "Các hoạt động du lịch bền vững bảo vệ đa dạng sinh học cho các thế hệ tương lai.",
        "collocations": [
          "sustainable tourism",
          "sustainable development",
          "sustainable future"
        ]
      },
      {
        "id": "v10-destination",
        "word": "destination",
        "partOfSpeech": "noun",
        "meaningVi": "điểm đến du lịch",
        "ipa": "/ˌdestɪˈneɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/destination.mp3",
        "exampleEn": "Phu Quoc Island has emerged as a premier ecotourism destination in Southeast Asia.",
        "exampleVi": "Đảo Phú Quốc đã vươn lên thành điểm đến du lịch sinh thái hàng đầu ở Đông Nam Á.",
        "collocations": [
          "popular tourist destination",
          "ecotourism destination",
          "holiday destination"
        ]
      },
      {
        "id": "v10-sustainable-tourism",
        "word": "sustainable tourism",
        "partOfSpeech": "noun phrase",
        "meaningVi": "du lịch bền vững (không hủy hoại môi trường và văn hóa bản địa)",
        "ipa": "/səˌsteɪnəbl ˈtʊərɪzəm/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/sustainable_tourism.mp3",
        "exampleEn": "Sustainable tourism creates steady revenue for local ethnic minority communities.",
        "exampleVi": "Du lịch bền vững tạo ra nguồn thu nhập ổn định cho các cộng đồng dân tộc thiểu số địa phương.",
        "collocations": [
          "practice sustainable tourism",
          "principles of sustainable tourism"
        ]
      },
      {
        "id": "v10-flora-and-fauna",
        "word": "flora and fauna",
        "partOfSpeech": "idiom / phrase",
        "meaningVi": "hệ thực vật và động vật",
        "ipa": "/ˌflɔːrə ənd ˈfɔːnə/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/flora_fauna.mp3",
        "exampleEn": "Cuc Phuong National Park boasts an astonishingly rich variety of flora and fauna.",
        "exampleVi": "Vườn Quốc gia Cúc Phương tự hào có hệ động thực vật vô cùng phong phú và đa dạng.",
        "collocations": [
          "native flora and fauna",
          "rich flora and fauna",
          "protect flora and fauna"
        ]
      },
      {
        "id": "v10-indigenous",
        "word": "indigenous",
        "partOfSpeech": "adjective",
        "meaningVi": "bản địa, nguyên sản",
        "ipa": "/ɪnˈdɪdʒənəs/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/indigenous.mp3",
        "exampleEn": "Tourists are asked to strictly respect the customs of indigenous tribal peoples.",
        "exampleVi": "Du khách được yêu cầu tôn trọng nghiêm ngặt các phong tục tập quán của các bộ tộc bản địa.",
        "collocations": [
          "indigenous culture",
          "indigenous people",
          "indigenous species"
        ]
      }
    ]
  },
  {
    "id": "g10-r4",
    "slug": "review-4-units-9-10",
    "unitNumber": 10.5,
    "isReview": true,
    "titleEn": "Review 4 (Units 9 - 10)",
    "titleVi": "Ôn tập 4 (Bài 9 - 10)",
    "topic": "End of Year Review",
    "cefrLevel": "B1",
    "term": 2,
    "grammarTitle": "Consolidation: Reported Speech & Conditionals",
    "grammarSummary": "Tổng kết toàn diện chương trình Tiếng Anh 10 Global Success: Câu gián tiếp, Câu điều kiện loại 1 & 2 và toàn bộ vốn từ vựng cấp THPT.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Tổng kết toàn diện ngữ âm, từ vựng và ngữ pháp học kỳ 2"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Bộ đề ôn tập 4 kỹ năng chuẩn bị cho kỳ thi kết thúc năm học lớp 10"
      }
    ],
    "vocabulary": []
  }
];

export function getGrade10UnitBySlug(slug: string): Grade10Unit | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();

  // 1. Exact match by slug or id
  const exact = GRADE_10_CURRICULUM.find((u) => u.slug.toLowerCase() === clean || u.id.toLowerCase() === clean);
  if (exact) return exact;

  // 2. Unit number match (e.g. "unit-1", "unit1", "u1", "1")
  const unitNumMatch = clean.match(/^(?:unit-?|u)?(\d+)$/i);
  if (unitNumMatch) {
    const num = parseInt(unitNumMatch[1], 10);
    const byNum = GRADE_10_CURRICULUM.find((u) => !u.isReview && u.unitNumber === num);
    if (byNum) return byNum;
  }

  // 3. Review match (e.g. "review-1", "review1", "r1")
  const reviewMatch = clean.match(/^(?:review-?|r)(\d+)$/i);
  if (reviewMatch) {
    const revNum = parseInt(reviewMatch[1], 10);
    const byRev = GRADE_10_CURRICULUM.find((u) => u.isReview && (u.id.endsWith(`r${revNum}`) || u.slug.includes(`review-${revNum}`)));
    if (byRev) return byRev;
  }

  // 4. Prefix or containment match
  const byPrefix = GRADE_10_CURRICULUM.find((u) => u.slug.toLowerCase().startsWith(clean + "-") || clean.startsWith(u.slug.toLowerCase() + "-"));
  if (byPrefix) return byPrefix;

  return undefined;
}

export function getGrade10UnitsByTerm(term: 1 | 2): Grade10Unit[] {
  return GRADE_10_CURRICULUM.filter((u) => u.term === term);
}
