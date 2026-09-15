/* Grade 12 Global Success Curriculum Data
   Syllabus: Bộ Giáo dục và Đào tạo • Global Success (Kết nối tri thức)
   Extracted & Curated via Playwright MCP from Loigiaihay, VietJack & Tech12h
   10 Units + 4 Reviews with full vocabulary, IPA, audio, examples & grammar.
*/

export interface Grade12VocabItem {
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

export interface Grade12Section {
  id: string;
  title: string;
  description: string;
  url?: string;
}

export interface Grade12Unit {
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
  sections: Grade12Section[];
  vocabulary: Grade12VocabItem[];
}

export const GRADE_12_CURRICULUM: Grade12Unit[] = [
  {
    "id": "g12-u1",
    "slug": "unit-1-life-stories-we-admire",
    "unitNumber": 1,
    "titleEn": "Life Stories We Admire",
    "titleVi": "Những câu chuyện cuộc đời đáng khâm phục",
    "topic": "Biographies, Inspirations & Historical Figures",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Past Simple vs. Past Continuous",
    "grammarSummary": "Ôn tập và nâng cao thì Quá khứ đơn (hành động đã kết thúc trong quá khứ) và Quá khứ tiếp diễn (hành động đang diễn ra tại một thời điểm hoặc bị một hành động khác xen vào với When/While).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "A life story - Cuộc trò chuyện về những nhân vật vĩ đại truyền cảm hứng"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Phát âm trọng âm từ có 3 âm tiết; Ôn tập thì Quá khứ đơn & Quá khứ tiếp diễn"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu tiểu sử Chủ tịch Hồ Chí Minh và Steve Jobs"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thuyết trình về nhân vật truyền cảm hứng mà bạn ngưỡng mộ"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe bài phỏng vấn về hành trình vượt khó của một nhà khoa học trẻ"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết đoạn văn tiểu sử (biography) về một danh nhân thế giới"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Giao tiếp xã hội và tìm hiểu danh nhân văn hóa Việt Nam"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Triển lãm chân dung những con người làm thay đổi thế giới"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-admirable",
        "word": "admirable",
        "partOfSpeech": "adj",
        "meaningVi": "đáng khâm phục, đáng ngưỡng mộ",
        "ipa": "/ˈædmərəbl/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=admirable&type=2",
        "exampleEn": "Her dedication to cancer research is truly admirable.",
        "exampleVi": "Sự cống hiến của cô ấy cho nghiên cứu ung thư thực sự đáng ngưỡng mộ.",
        "collocations": [
          "admirable effort",
          "admirable dedication",
          "admirable achievement"
        ]
      },
      {
        "id": "v12-biography",
        "word": "biography",
        "partOfSpeech": "n",
        "meaningVi": "tiểu sử, truyện danh nhân",
        "ipa": "/baɪˈɒɡrəfi/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=biography&type=2",
        "exampleEn": "He has just published an inspiring biography of the late inventor.",
        "exampleVi": "Ông vừa xuất bản một cuốn tiểu sử đầy cảm hứng về nhà phát minh quá cố.",
        "collocations": [
          "write a biography",
          "authorized biography",
          "biography of a leader"
        ]
      },
      {
        "id": "v12-perseverance",
        "word": "perseverance",
        "partOfSpeech": "n",
        "meaningVi": "tính kiên trì, sự bền chí",
        "ipa": "/ˌpɜːsɪˈvɪərəns/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=perseverance&type=2",
        "exampleEn": "Through sheer perseverance, she conquered physical challenges and won gold.",
        "exampleVi": "Nhờ sự kiên trì phi thường, cô đã chiến thắng thử thách thể chất và giành huy chương vàng.",
        "collocations": [
          "sheer perseverance",
          "demonstrate perseverance",
          "spirit of perseverance"
        ]
      },
      {
        "id": "v12-dedicated",
        "word": "dedicated",
        "partOfSpeech": "adj",
        "meaningVi": "tận tụy, hết lòng cống hiến",
        "ipa": "/ˈdedɪkeɪtɪd/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=dedicated&type=2",
        "exampleEn": "He remained dedicated to teaching disadvantaged children for four decades.",
        "exampleVi": "Thầy vẫn tận tụy dạy dỗ trẻ em có hoàn cảnh khó khăn suốt bốn thập kỷ.",
        "collocations": [
          "dedicated to",
          "dedicated teacher",
          "dedicated staff"
        ]
      },
      {
        "id": "v12-revolutionary",
        "word": "revolutionary",
        "partOfSpeech": "adj/n",
        "meaningVi": "mang tính cách mạng; nhà cách mạng",
        "ipa": "/ˌrevəˈluːʃənəri/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=revolutionary&type=2",
        "exampleEn": "Penicillin brought about a revolutionary change in modern medicine.",
        "exampleVi": "Penicillin đã mang lại sự thay đổi mang tính cách mạng trong y học hiện đại.",
        "collocations": [
          "revolutionary idea",
          "revolutionary movement",
          "revolutionary leader"
        ]
      },
      {
        "id": "v12-distinguished",
        "word": "distinguished",
        "partOfSpeech": "adj",
        "meaningVi": "xuất chúng, lỗi lạc, ưu tú",
        "ipa": "/dɪˈstɪŋɡwɪʃt/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=distinguished&type=2",
        "exampleEn": "The professor had a distinguished career in theoretical physics.",
        "exampleVi": "Vị giáo sư đã có một sự nghiệp xuất chúng trong lĩnh vực vật lý lý thuyết.",
        "collocations": [
          "distinguished career",
          "distinguished guest",
          "distinguished scientist"
        ]
      },
      {
        "id": "v12-visionary",
        "word": "visionary",
        "partOfSpeech": "adjective / noun",
        "meaningVi": "nhìn xa trông rộng, người có tầm nhìn chiến lược",
        "ipa": "/ˈvɪʒənri/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/visionary.mp3",
        "exampleEn": "Steve Jobs is widely celebrated as a visionary leader in personal computing.",
        "exampleVi": "Steve Jobs được tôn vinh rộng rãi như một nhà lãnh đạo có tầm nhìn xa trong lĩnh vực máy tính cá nhân.",
        "collocations": [
          "visionary leader",
          "visionary thinker",
          "visionary ideas"
        ]
      },
      {
        "id": "v12-humble",
        "word": "humble",
        "partOfSpeech": "adjective",
        "meaningVi": "khiêm tốn, bình dị, xuất thân giản dị",
        "ipa": "/ˈhʌmbl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/humble.mp3",
        "exampleEn": "Despite winning international acclaim, Uncle Ho lived a remarkably humble life.",
        "exampleVi": "Dù được quốc tế ca ngợi nồng nhiệt, Bác Hồ đã sống một cuộc đời vô cùng giản dị.",
        "collocations": [
          "humble beginnings",
          "humble lifestyle",
          "remain humble"
        ]
      },
      {
        "id": "v12-resilience",
        "word": "resilience",
        "partOfSpeech": "noun",
        "meaningVi": "sự kiên cường, khả năng phục hồi sau biến cố",
        "ipa": "/rɪˈzɪliəns/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/resilience.mp3",
        "exampleEn": "Vietnamese history is a shining testament to national unity and resilience.",
        "exampleVi": "Lịch sử Việt Nam là minh chứng sáng ngời cho tinh thần đại đoàn kết và kiên cường bất khuất.",
        "collocations": [
          "remarkable resilience",
          "build resilience",
          "mental resilience"
        ]
      },
      {
        "id": "v12-legacy",
        "word": "legacy",
        "partOfSpeech": "noun",
        "meaningVi": "di sản (tinh thần, vật chất để lại cho đời sau)",
        "ipa": "/ˈleɡəsi/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/legacy.mp3",
        "exampleEn": "Great educators leave a lasting intellectual legacy for future generations.",
        "exampleVi": "Những nhà giáo vĩ đại để lại di sản tri thức lâu bền cho các thế hệ tương lai.",
        "collocations": [
          "leave a lasting legacy",
          "cultural legacy",
          "historical legacy"
        ]
      }
    ]
  },
  {
    "id": "g12-u2",
    "slug": "unit-2-a-multicultural-world",
    "unitNumber": 2,
    "titleEn": "A Multicultural World",
    "titleVi": "Thế giới đa văn hóa",
    "topic": "Cultural Diversity, Customs & Global Harmony",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Articles (A, An, The & Zero Article)",
    "grammarSummary": "Quy tắc sử dụng mạo từ bất định (a/an), mạo từ xác định (the) và không dùng mạo từ (zero article) với danh từ đếm được, không đếm được, tên riêng địa lý và các khái niệm trừu tượng.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Cultural festival - Khám phá lễ hội giao lưu văn hóa quốc tế"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Ngữ điệu trong câu hỏi; Quy tắc sử dụng mạo từ A/An/The và Zero Article"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về sự dung hòa văn hóa trong các đô thị đa sắc tộc"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về phong tục tập quán và sự khác biệt văn hóa khi đi du học"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe về trải nghiệm hội nhập văn hóa của các bạn trẻ quốc tế"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài luận so sánh nét tương đồng và khác biệt giữa hai nền văn hóa"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Bảo tồn bản sắc văn hóa dân tộc trong dòng chảy toàn cầu hóa"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Ngày hội văn hóa quốc tế trường THPT"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-multicultural",
        "word": "multicultural",
        "partOfSpeech": "adj",
        "meaningVi": "đa văn hóa",
        "ipa": "/ˌmʌltiˈkʌltʃərəl/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=multicultural&type=2",
        "exampleEn": "London is renowned as one of the most vibrant multicultural cities on Earth.",
        "exampleVi": "London nổi tiếng là một trong những thành phố đa văn hóa sôi động nhất trên Trái Đất.",
        "collocations": [
          "multicultural society",
          "multicultural education",
          "multicultural environment"
        ]
      },
      {
        "id": "v12-diversity",
        "word": "diversity",
        "partOfSpeech": "n",
        "meaningVi": "sự đa dạng, phong phú",
        "ipa": "/daɪˈvɜːsəti/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=diversity&type=2",
        "exampleEn": "Cultural diversity enriches our community and promotes mutual tolerance.",
        "exampleVi": "Sự đa dạng văn hóa làm phong phú cộng đồng và thúc đẩy sự khoan dung lẫn nhau.",
        "collocations": [
          "cultural diversity",
          "biodiversity",
          "celebrate diversity"
        ]
      },
      {
        "id": "v12-assimilation",
        "word": "assimilation",
        "partOfSpeech": "n",
        "meaningVi": "sự đồng hóa, hòa nhập văn hóa",
        "ipa": "/əˌsɪməˈleɪʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=assimilation&type=2",
        "exampleEn": "Cultural assimilation often occurs when immigrants adapt to their host country.",
        "exampleVi": "Sự hòa nhập văn hóa thường xảy ra khi người nhập cư thích nghi với quốc gia sở tại.",
        "collocations": [
          "cultural assimilation",
          "process of assimilation",
          "social assimilation"
        ]
      },
      {
        "id": "v12-heritage",
        "word": "heritage",
        "partOfSpeech": "n",
        "meaningVi": "di sản văn hóa, truyền thống",
        "ipa": "/ˈherɪtɪdʒ/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=heritage&type=2",
        "exampleEn": "UNESCO works tirelessly to preserve tangible and intangible cultural heritage.",
        "exampleVi": "UNESCO làm việc không ngừng nghỉ để bảo tồn các di sản văn hóa vật thể và phi vật thể.",
        "collocations": [
          "cultural heritage",
          "world heritage site",
          "national heritage"
        ]
      },
      {
        "id": "v12-customary",
        "word": "customary",
        "partOfSpeech": "adj",
        "meaningVi": "theo phong tục, thành thói quen",
        "ipa": "/ˈkʌstəməri/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=customary&type=2",
        "exampleEn": "In Viet Nam, it is customary to exchange lucky money on Tet holiday.",
        "exampleVi": "Tại Việt Nam, việc mừng tuổi vào dịp Tết Nguyên đán là một phong tục truyền thống.",
        "collocations": [
          "customary practice",
          "it is customary to",
          "customary behavior"
        ]
      },
      {
        "id": "v12-cultural-heritage",
        "word": "cultural heritage",
        "partOfSpeech": "noun phrase",
        "meaningVi": "di sản văn hóa",
        "ipa": "/ˌkʌltʃərəl ˈherɪtɪdʒ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/cultural_heritage.mp3",
        "exampleEn": "Hoi An Ancient Town is recognized worldwide as an invaluable cultural heritage site.",
        "exampleVi": "Phố cổ Hội An được công nhận trên toàn thế giới là một địa danh di sản văn hóa vô giá.",
        "collocations": [
          "preserve cultural heritage",
          "intangible cultural heritage",
          "rich cultural heritage"
        ]
      },
      {
        "id": "v12-assimilate",
        "word": "assimilate",
        "partOfSpeech": "verb",
        "meaningVi": "đồng hóa, hòa nhập vào một nền văn hóa",
        "ipa": "/əˈsɪməleɪt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/assimilate.mp3",
        "exampleEn": "Immigrants often strive to assimilate into their new society while preserving their customs.",
        "exampleVi": "Người nhập cư thường nỗ lực hòa nhập vào xã hội mới trong khi vẫn gìn giữ phong tục của mình.",
        "collocations": [
          "assimilate into culture",
          "cultural assimilation"
        ]
      },
      {
        "id": "v12-global-citizen",
        "word": "global citizen",
        "partOfSpeech": "noun phrase",
        "meaningVi": "công dân toàn cầu",
        "ipa": "/ˌɡləʊbl ˈsɪtɪzn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/global_citizen.mp3",
        "exampleEn": "Foreign language proficiency and empathy are indispensable traits of a global citizen.",
        "exampleVi": "Thành thạo ngoại ngữ và sự thấu cảm là những phẩm chất không thể thiếu của một công dân toàn cầu.",
        "collocations": [
          "become a global citizen",
          "responsible global citizen"
        ]
      },
      {
        "id": "v12-intercultural",
        "word": "intercultural",
        "partOfSpeech": "adjective",
        "meaningVi": "liên văn hóa, giao lưu giữa các nền văn hóa",
        "ipa": "/ˌɪntəˈkʌltʃərəl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/intercultural.mp3",
        "exampleEn": "Student exchange programs enhance mutual intercultural understanding.",
        "exampleVi": "Các chương trình trao đổi học sinh giúp nâng cao sự hiểu biết liên văn hóa lẫn nhau.",
        "collocations": [
          "intercultural communication",
          "intercultural competence"
        ]
      },
      {
        "id": "v12-etiquette",
        "word": "etiquette",
        "partOfSpeech": "noun",
        "meaningVi": "phép lịch sự, quy tắc ứng xử chuẩn mực",
        "ipa": "/ˈetɪket/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/etiquette.mp3",
        "exampleEn": "Understanding dining etiquette is important when attending formal international dinners.",
        "exampleVi": "Hiểu biết quy tắc lịch sự trên bàn ăn là điều quan trọng khi tham dự các bữa tiệc quốc tế trang trọng.",
        "collocations": [
          "table etiquette",
          "business etiquette",
          "social etiquette"
        ]
      }
    ]
  },
  {
    "id": "g12-u3",
    "slug": "unit-3-green-living",
    "unitNumber": 3,
    "titleEn": "Green Living",
    "titleVi": "Lối sống xanh",
    "topic": "Eco-friendly Habits, Carbon Neutrality & Circular Economy",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Gerunds & Participles in Adverbial Clauses",
    "grammarSummary": "Rút gọn mệnh đề trạng ngữ bằng V-ing (đồng chủ ngữ, hành động chủ động) hoặc Having + V3/ed (nhấn mạnh hành động hoàn tất trước một hành động khác trong quá khứ).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Eco-habits - Thói quen giảm thiểu rác thải nhựa và dấu chân carbon"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Rút gọn mệnh đề bằng Phân từ hiện tại (V-ing) và Phân từ hoàn thành (Having + P2)"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Bài đọc về mô hình kinh tế tuần hoàn (Circular Economy) và Net-Zero 2050"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về các giải pháp tiêu dùng bền vững trong học đường"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe chuyên gia chia sẻ về giải pháp xử lý rác thải hữu cơ tại nhà"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài luận kêu gọi hành động vì môi trường học đường xanh sạch đẹp"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Công nghệ năng lượng tái tạo và xu hướng thành phố carbon thấp"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Chiến dịch Green School Challenge 30 ngày"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-sustainable",
        "word": "sustainable",
        "partOfSpeech": "adj",
        "meaningVi": "bền vững, thân thiện sinh thái",
        "ipa": "/səˈsteɪnəbl/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=sustainable&type=2",
        "exampleEn": "Adopting a sustainable lifestyle is essential to combat climate change.",
        "exampleVi": "Áp dụng lối sống bền vững là điều thiết yếu để chống lại biến đổi khí hậu.",
        "collocations": [
          "sustainable lifestyle",
          "sustainable development",
          "sustainable materials"
        ]
      },
      {
        "id": "v12-carbon-footprint",
        "word": "carbon footprint",
        "partOfSpeech": "n",
        "meaningVi": "dấu chân carbon (lượng khí thải carbon cá nhân)",
        "ipa": "/ˌkɑːbən ˈfʊtprɪnt/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=carbon+footprint&type=2",
        "exampleEn": "Cycling instead of driving helps reduce your personal carbon footprint significantly.",
        "exampleVi": "Đi xe đạp thay vì ô tô giúp giảm đáng kể dấu chân carbon cá nhân của bạn.",
        "collocations": [
          "reduce carbon footprint",
          "measure carbon footprint",
          "zero carbon footprint"
        ]
      },
      {
        "id": "v12-biodegradable",
        "word": "biodegradable",
        "partOfSpeech": "adj",
        "meaningVi": "có thể phân hủy sinh học",
        "ipa": "/ˌbaɪəʊdɪˈɡreɪdəbl/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=biodegradable&type=2",
        "exampleEn": "Restaurants are urged to replace single-use plastic with biodegradable packaging.",
        "exampleVi": "Các nhà hàng được kêu gọi thay thế đồ nhựa dùng một lần bằng bao bì phân hủy sinh học.",
        "collocations": [
          "biodegradable waste",
          "biodegradable packaging",
          "biodegradable plastic"
        ]
      },
      {
        "id": "v12-circular-economy",
        "word": "circular economy",
        "partOfSpeech": "n",
        "meaningVi": "kinh tế tuần hoàn (tái sử dụng triệt để tài nguyên)",
        "ipa": "/ˌsɜːkjələr ɪˈkɒnəmi/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=circular+economy&type=2",
        "exampleEn": "A circular economy aims to eliminate waste through continual reuse and recycling.",
        "exampleVi": "Kinh tế tuần hoàn hướng tới triệt tiêu rác thải qua việc liên tục tái sử dụng và tái chế.",
        "collocations": [
          "transition to a circular economy",
          "principles of circular economy",
          "closed-loop circular economy"
        ]
      },
      {
        "id": "v12-compost",
        "word": "compost",
        "partOfSpeech": "n/v",
        "meaningVi": "phân hữu cơ; ủ phân hữu cơ",
        "ipa": "/ˈkɒmpɒst/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=compost&type=2",
        "exampleEn": "Kitchen scraps can be turned into nutrient-rich compost for organic gardening.",
        "exampleVi": "Rác thải nhà bếp có thể biến thành phân hữu cơ giàu dinh dưỡng để làm vườn sinh thái.",
        "collocations": [
          "organic compost",
          "compost bin",
          "turn into compost"
        ]
      },
      {
        "id": "v12-zero-waste",
        "word": "zero-waste",
        "partOfSpeech": "adjective / noun",
        "meaningVi": "không rác thải (lối sống hạn chế tối đa đồ thải)",
        "ipa": "/ˌzɪərəʊ ˈweɪst/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/zero_waste.mp3",
        "exampleEn": "Many young urbanites are embracing a zero-waste lifestyle by carrying reusable bottles.",
        "exampleVi": "Nhiều bạn trẻ thành thị đang đón nhận lối sống không rác thải bằng cách mang theo bình nước tái sử dụng.",
        "collocations": [
          "zero-waste lifestyle",
          "zero-waste movement",
          "zero-waste shop"
        ]
      },
      {
        "id": "v12-greenhouse-gas",
        "word": "greenhouse gas",
        "partOfSpeech": "noun phrase",
        "meaningVi": "khí nhà kính gây biến đổi khí hậu",
        "ipa": "/ˌɡriːnhaʊs ˈɡæs/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/greenhouse_gas.mp3",
        "exampleEn": "Burning fossil fuels releases enormous volumes of greenhouse gases into the atmosphere.",
        "exampleVi": "Đốt nhiên liệu hóa thạch thải ra lượng khí nhà kính khổng lồ vào bầu khí quyển.",
        "collocations": [
          "greenhouse gas emissions",
          "trap greenhouse gases"
        ]
      },
      {
        "id": "v12-renewable-energy",
        "word": "renewable energy",
        "partOfSpeech": "noun phrase",
        "meaningVi": "năng lượng tái tạo (gió, mặt trời, thủy triều)",
        "ipa": "/rɪˌnjuːəbl ˈenədʒi/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/renewable_energy.mp3",
        "exampleEn": "Transitioning to renewable energy is the cornerstone of achieving net-zero emissions.",
        "exampleVi": "Chuyển dịch sang năng lượng tái tạo là nền tảng để đạt được mục tiêu phát thải ròng bằng không.",
        "collocations": [
          "invest in renewable energy",
          "sources of renewable energy"
        ]
      },
      {
        "id": "v12-carbon-neutral",
        "word": "carbon-neutral",
        "partOfSpeech": "adjective",
        "meaningVi": "trung hòa carbon (cân bằng lượng phát thải)",
        "ipa": "/ˌkɑːbən ˈnjuːtrəl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/carbon_neutral.mp3",
        "exampleEn": "Viet Nam has pledged to become a carbon-neutral economy by the year 2050.",
        "exampleVi": "Việt Nam đã cam kết trở thành nền kinh tế trung hòa carbon vào năm 2050.",
        "collocations": [
          "carbon-neutral goal",
          "achieve carbon-neutral status"
        ]
      }
    ]
  },
  {
    "id": "g12-r1",
    "slug": "review-1-units-1-2-3",
    "unitNumber": 3.5,
    "isReview": true,
    "titleEn": "Review 1 (Units 1 - 3)",
    "titleVi": "Ôn tập 1 (Bài 1 - 3)",
    "topic": "Mid-Term 1 Consolidation",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Grammar Review: Past Tenses, Articles & Participle Clauses",
    "grammarSummary": "Củng cố thì Quá khứ đơn & Quá khứ tiếp diễn, hệ thống mạo từ A/An/The/Zero Article và mệnh đề rút gọn phân từ.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Luyện tập ngữ âm, từ vựng và ngữ pháp trọng tâm Units 1-3"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Rèn luyện 4 kỹ năng Nghe - Nói - Đọc - Viết theo định dạng đề thi tốt nghiệp THPT mới"
      }
    ],
    "vocabulary": []
  },
  {
    "id": "g12-u4",
    "slug": "unit-4-urbanisation",
    "unitNumber": 4,
    "titleEn": "Urbanisation",
    "titleVi": "Đô thị hóa",
    "topic": "Smart Cities, Rural-to-Urban Migration & Infrastructure",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Compound Adjectives & Diphthongs",
    "grammarSummary": "Cấu tạo tính từ ghép (Noun + Adjective, Adjective + Noun-ed, Noun + Present Participle) và cách dùng để mô tả hiện trạng đô thị hóa, mật độ dân số và cơ sở hạ tầng.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "City growth - Thực trạng dòng người di cư từ nông thôn ra thành thị"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Quy tắc cấu tạo Tính từ ghép (Compound Adjectives); phát âm nguyên âm đôi"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về sự bùng nổ của các siêu đô thị (megacities) và bài toán giao thông"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Tranh biện: Nên sống ở vùng nông thôn thanh bình hay thành phố tiện ích?"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe bài thuyết trình của chuyên gia quy hoạch đô thị về thành phố thông minh"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết biểu đồ phân tích xu hướng đô thị hóa tại khu vực Đông Nam Á"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Ứng dụng IoT và AI trong điều hành giao thông công cộng đô thị"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Thiết kế mô hình thành phố sinh thái tương lai (Eco-Smart City)"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-urbanisation",
        "word": "urbanisation",
        "partOfSpeech": "n",
        "meaningVi": "quá trình đô thị hóa",
        "ipa": "/ˌɜːbənaɪˈzeɪʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=urbanisation&type=2",
        "exampleEn": "Rapid urbanisation creates enormous challenges for housing and transportation.",
        "exampleVi": "Quá trình đô thị hóa nhanh chóng tạo ra những thách thức lớn về nhà ở và giao thông.",
        "collocations": [
          "rapid urbanisation",
          "pace of urbanisation",
          "urbanisation process"
        ]
      },
      {
        "id": "v12-densely-populated",
        "word": "densely-populated",
        "partOfSpeech": "adj",
        "meaningVi": "mật độ dân số dày đặc, đông đúc",
        "ipa": "/ˈdensli ˈpɒpjuleɪtɪd/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=densely+populated&type=2",
        "exampleEn": "Densely-populated metropolitan areas require sophisticated mass transit systems.",
        "exampleVi": "Các vùng đại đô thị đông dân đòi hỏi hệ thống giao thông công cộng tinh vi.",
        "collocations": [
          "densely-populated city",
          "densely-populated area",
          "densely-populated district"
        ]
      },
      {
        "id": "v12-infrastructure",
        "word": "infrastructure",
        "partOfSpeech": "n",
        "meaningVi": "cơ sở hạ tầng (điện, đường, trường, trạm)",
        "ipa": "/ˈɪnfrəstrʌktʃə(r)/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=infrastructure&type=2",
        "exampleEn": "The municipal government invested billions in upgrading urban drainage infrastructure.",
        "exampleVi": "Chính quyền thành phố đã đầu tư hàng tỷ đồng để nâng cấp cơ sở hạ tầng thoát nước đô thị.",
        "collocations": [
          "transport infrastructure",
          "urban infrastructure",
          "upgrade infrastructure"
        ]
      },
      {
        "id": "v12-overcrowded",
        "word": "overcrowded",
        "partOfSpeech": "adj",
        "meaningVi": "quá tải, quá đông đúc",
        "ipa": "/ˌəʊvəˈkraʊdɪd/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=overcrowded&type=2",
        "exampleEn": "Hospitals in central districts become severely overcrowded during epidemics.",
        "exampleVi": "Bệnh viện ở các quận trung tâm trở nên quá tải trầm trọng trong mùa dịch bệnh.",
        "collocations": [
          "overcrowded streets",
          "severely overcrowded",
          "overcrowded living conditions"
        ]
      },
      {
        "id": "v12-megacity",
        "word": "megacity",
        "partOfSpeech": "n",
        "meaningVi": "siêu đô thị (dân số trên 10 triệu người)",
        "ipa": "/ˈmeɡəsɪti/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=megacity&type=2",
        "exampleEn": "Tokyo remains the largest megacity in terms of total metropolitan population.",
        "exampleVi": "Tokyo vẫn là siêu đô thị lớn nhất xét về tổng quy mô dân số vùng đô thị.",
        "collocations": [
          "global megacity",
          "growth of megacities",
          "manage a megacity"
        ]
      },
      {
        "id": "v12-overpopulation",
        "word": "overpopulation",
        "partOfSpeech": "noun",
        "meaningVi": "tình trạng quá tải dân số",
        "ipa": "/ˌəʊvəˌpɒpjuˈleɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/overpopulation.mp3",
        "exampleEn": "Overpopulation in megacities leads to chronic traffic congestion and air pollution.",
        "exampleVi": "Tình trạng quá tải dân số tại các siêu đô thị dẫn đến ùn tắc giao thông kéo dài và ô nhiễm không khí.",
        "collocations": [
          "suffer from overpopulation",
          "problem of overpopulation"
        ]
      },
      {
        "id": "v12-congestion",
        "word": "congestion",
        "partOfSpeech": "noun",
        "meaningVi": "sự tắc nghẽn (giao thông)",
        "ipa": "/kənˈdʒestʃən/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/congestion.mp3",
        "exampleEn": "Developing elevated metro lines effectively eases gridlock and traffic congestion.",
        "exampleVi": "Phát triển các tuyến metro trên cao giải tỏa hiệu quả tình trạng kẹt xe và ùn tắc giao thông.",
        "collocations": [
          "traffic congestion",
          "ease congestion",
          "heavy congestion"
        ]
      },
      {
        "id": "v12-urban-sprawl",
        "word": "urban sprawl",
        "partOfSpeech": "noun phrase",
        "meaningVi": "sự mở rộng tràn lan thiếu quy hoạch của đô thị",
        "ipa": "/ˌɜːbən ˈsprɔːl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/urban_sprawl.mp3",
        "exampleEn": "Unchecked urban sprawl encroaches upon fertile agricultural land around Hanoi.",
        "exampleVi": "Sự phát triển đô thị tràn lan không kiểm soát đang xâm lấn đất nông nghiệp màu mỡ quanh Hà Nội.",
        "collocations": [
          "control urban sprawl",
          "consequences of urban sprawl"
        ]
      }
    ]
  },
  {
    "id": "g12-u5",
    "slug": "unit-5-the-world-of-work",
    "unitNumber": 5,
    "titleEn": "The World of Work",
    "titleVi": "Thế giới việc làm",
    "topic": "Career Readiness, 21st-Century Skills & Workplace Dynamics",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Relative Clauses: Defining & Non-defining",
    "grammarSummary": "Phân biệt mệnh đề quan hệ xác định (Defining) và không xác định (Non-defining, có dấu phẩy, không dùng that). Các đại từ quan hệ Who, Whom, Whose, Which, That và lược bỏ đại từ khi làm tân ngữ.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Future careers - Cuộc thảo luận về chọn ngành nghề và yêu cầu thị trường việc làm"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Luyện tập Mệnh đề quan hệ xác định và không xác định; ngữ điệu câu hỏi phức"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về các kỹ năng thế kỷ 21 mà nhà tuyển dụng toàn cầu tìm kiếm"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thực hành phỏng vấn xin việc (Job Interview Roleplay) theo tiêu chuẩn chuyên nghiệp"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe tư vấn từ chuyên gia nhân sự về cách viết CV và Portfolio thu hút"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết thư ứng tuyển (Cover Letter) xin học bổng hoặc vị trí thực tập sinh"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Xu hướng làm việc từ xa (Remote Work) và nền kinh tế Gig toàn cầu"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Ngày hội hướng nghiệp Career Fair dành cho học sinh THPT"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-adaptability",
        "word": "adaptability",
        "partOfSpeech": "n",
        "meaningVi": "khả năng thích nghi linh hoạt",
        "ipa": "/əˌdæptəˈbɪləti/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=adaptability&type=2",
        "exampleEn": "In a fast-changing job market, adaptability is considered a critical competency.",
        "exampleVi": "Trong thị trường việc làm thay đổi nhanh chóng, khả năng thích nghi được xem là năng lực then chốt.",
        "collocations": [
          "show adaptability",
          "high adaptability",
          "adaptability to change"
        ]
      },
      {
        "id": "v12-competence",
        "word": "competence",
        "partOfSpeech": "n",
        "meaningVi": "năng lực chuyên môn, sự thành thạo",
        "ipa": "/ˈkɒmpɪtəns/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=competence&type=2",
        "exampleEn": "Candidates must prove their linguistic competence in professional English.",
        "exampleVi": "Ứng viên phải chứng minh năng lực ngôn ngữ Tiếng Anh chuyên nghiệp của mình.",
        "collocations": [
          "professional competence",
          "linguistic competence",
          "core competence"
        ]
      },
      {
        "id": "v12-internship",
        "word": "internship",
        "partOfSpeech": "n",
        "meaningVi": "kỳ thực tập, khóa đào tạo thực tế",
        "ipa": "/ˈɪntɜːnʃɪp/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=internship&type=2",
        "exampleEn": "Completing a summer internship gave her valuable firsthand industry experience.",
        "exampleVi": "Hoàn thành kỳ thực tập mùa hè đã mang lại cho cô kinh nghiệm thực tế quý báu trong ngành.",
        "collocations": [
          "summer internship",
          "paid internship",
          "land an internship"
        ]
      },
      {
        "id": "v12-qualification",
        "word": "qualification",
        "partOfSpeech": "n",
        "meaningVi": "bằng cấp, văn bằng chứng chỉ",
        "ipa": "/ˌkwɒlɪfɪˈkeɪʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=qualification&type=2",
        "exampleEn": "Possessing recognized vocational qualifications significantly improves employability.",
        "exampleVi": "Sở hữu bằng cấp nghề được công nhận giúp nâng cao đáng kể cơ hội có việc làm.",
        "collocations": [
          "formal qualifications",
          "academic qualifications",
          "gain qualifications"
        ]
      },
      {
        "id": "v12-workplace",
        "word": "workplace",
        "partOfSpeech": "n",
        "meaningVi": "nơi làm việc, môi trường công sở",
        "ipa": "/ˈwɜːkpleɪs/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=workplace&type=2",
        "exampleEn": "Companies strive to build a welcoming, inclusive workplace culture.",
        "exampleVi": "Các công ty luôn nỗ lực xây dựng một văn hóa công sở hòa đồng và cởi mở.",
        "collocations": [
          "workplace culture",
          "in the workplace",
          "modern workplace"
        ]
      },
      {
        "id": "v12-soft-skills",
        "word": "soft skills",
        "partOfSpeech": "noun phrase",
        "meaningVi": "kỹ năng mềm (giao tiếp, làm việc nhóm, quản lý thời gian)",
        "ipa": "/ˌsɒft ˈskɪlz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/soft_skills.mp3",
        "exampleEn": "Modern employers value soft skills just as highly as academic qualifications.",
        "exampleVi": "Các nhà tuyển dụng hiện đại coi trọng kỹ năng mềm tương đương với bằng cấp học thuật.",
        "collocations": [
          "develop soft skills",
          "essential soft skills",
          "interpersonal soft skills"
        ]
      },
      {
        "id": "v12-probation",
        "word": "probation",
        "partOfSpeech": "noun",
        "meaningVi": "thời gian thử việc",
        "ipa": "/prəˈbeɪʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/probation.mp3",
        "exampleEn": "New employees typically undergo a two-month probation period before signing permanent contracts.",
        "exampleVi": "Nhân viên mới thường trải qua thời gian thử việc 2 tháng trước khi ký hợp đồng chính thức.",
        "collocations": [
          "probation period",
          "pass probation",
          "on probation"
        ]
      },
      {
        "id": "v12-work-life-balance",
        "word": "work-life balance",
        "partOfSpeech": "noun phrase",
        "meaningVi": "sự cân bằng giữa công việc và cuộc sống",
        "ipa": "/ˌwɜːk laɪf ˈbæləns/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/work_life_balance.mp3",
        "exampleEn": "Maintaining a healthy work-life balance prevents burnout and boosts productivity.",
        "exampleVi": "Duy trì sự cân bằng lành mạnh giữa công việc và cuộc sống giúp ngăn ngừa kiệt sức và tăng năng suất.",
        "collocations": [
          "maintain work-life balance",
          "achieve work-life balance"
        ]
      },
      {
        "id": "v12-vocational",
        "word": "vocational",
        "partOfSpeech": "adjective",
        "meaningVi": "thuộc về học nghề, hướng nghiệp thực hành",
        "ipa": "/vəʊˈkeɪʃənl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/vocational.mp3",
        "exampleEn": "Vocational schools train skilled technicians in automotive repair and culinary arts.",
        "exampleVi": "Các trường trung cấp nghề đào tạo kỹ thuật viên lành nghề về sửa chữa ô tô và nghệ thuật ẩm thực.",
        "collocations": [
          "vocational training",
          "vocational school",
          "vocational guidance"
        ]
      }
    ]
  },
  {
    "id": "g12-r2",
    "slug": "review-2-units-4-5",
    "unitNumber": 5.5,
    "isReview": true,
    "titleEn": "Review 2 (Units 4 - 5)",
    "titleVi": "Ôn tập 2 (Bài 4 - 5)",
    "topic": "End of Term 1 Examination Prep",
    "cefrLevel": "B2",
    "term": 1,
    "grammarTitle": "Term 1 Review: Compound Adjectives & Relative Clauses",
    "grammarSummary": "Hệ thống hóa toàn bộ kiến thức Học kỳ 1: Tính từ ghép, Mệnh đề quan hệ, Phân từ rút gọn và Mạo từ chuẩn bị cho đề thi học kỳ 1.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Luyện đề tổng hợp từ vựng và ngữ pháp toàn học kỳ 1"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Luyện thi thử 4 kỹ năng theo cấu trúc chuẩn khảo thí quốc gia"
      }
    ],
    "vocabulary": []
  },
  {
    "id": "g12-u6",
    "slug": "unit-6-artificial-intelligence",
    "unitNumber": 6,
    "titleEn": "Artificial Intelligence",
    "titleVi": "Trí tuệ nhân tạo",
    "topic": "AI Frontiers, Automation, Machine Learning & Ethics",
    "cefrLevel": "B2+",
    "term": 2,
    "grammarTitle": "Active & Passive Causative (Have / Get something done)",
    "grammarSummary": "Cấu trúc thể truyền khiến (Causative): Have someone do sth / Get someone to do sth (chủ động) và Have/Get sth done by someone (bị động - có cái gì được làm bởi ai/hệ thống tự động).",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "AI in daily life - Trợ lý ảo, xe tự hành và công cụ xử lý ngôn ngữ tự nhiên"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Ngữ pháp Thể truyền khiến chủ động và bị động; ngữ điệu câu bình luận"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về tác động của Generative AI và vấn đề đạo đức trí tuệ nhân tạo"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Tranh biện: Liệu AI có thay thế hoàn toàn người lao động trong tương lai?"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe nhà khoa học công nghệ giải thích về mạng nơ-ron và Deep Learning"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài văn nghị luận (opinion essay) về mặt lợi và hại của AI trong giáo dục"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Ứng dụng thuật toán AI trong chẩn đoán y khoa và dự báo thiên tai"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Đề xuất ý tưởng ứng dụng AI giải quyết vấn đề tại địa phương"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-artificial-intelligence",
        "word": "artificial intelligence",
        "partOfSpeech": "n",
        "meaningVi": "trí tuệ nhân tạo (AI)",
        "ipa": "/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=artificial+intelligence&type=2",
        "exampleEn": "Artificial intelligence has revolutionized natural language processing and computer vision.",
        "exampleVi": "Trí tuệ nhân tạo đã cách mạng hóa xử lý ngôn ngữ tự nhiên và thị giác máy tính.",
        "collocations": [
          "generative artificial intelligence",
          "ethics in artificial intelligence",
          "deploy artificial intelligence"
        ]
      },
      {
        "id": "v12-automation",
        "word": "automation",
        "partOfSpeech": "n",
        "meaningVi": "sự tự động hóa",
        "ipa": "/ˌɔːtəˈmeɪʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=automation&type=2",
        "exampleEn": "Industrial automation increases manufacturing precision while lowering labor costs.",
        "exampleVi": "Tự động hóa công nghiệp giúp tăng độ chính xác trong sản xuất đồng thời giảm chi phí lao động.",
        "collocations": [
          "workplace automation",
          "full automation",
          "automation technology"
        ]
      },
      {
        "id": "v12-algorithm",
        "word": "algorithm",
        "partOfSpeech": "n",
        "meaningVi": "thuật toán, quy trình xử lý dữ liệu",
        "ipa": "/ˈælɡərɪðəm/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=algorithm&type=2",
        "exampleEn": "Search engines rely on complex ranking algorithms to deliver precise information.",
        "exampleVi": "Các công cụ tìm kiếm phụ thuộc vào thuật toán xếp hạng phức tạp để cung cấp thông tin chính xác.",
        "collocations": [
          "search algorithm",
          "machine learning algorithm",
          "algorithmic bias"
        ]
      },
      {
        "id": "v12-breakthrough",
        "word": "breakthrough",
        "partOfSpeech": "n",
        "meaningVi": "bước đột phá, phát kiến ngoạn mục",
        "ipa": "/ˈbreɪkθruː/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=breakthrough&type=2",
        "exampleEn": "The invention of transformer architectures was a monumental breakthrough in AI.",
        "exampleVi": "Sự ra đời của kiến trúc Transformer là một bước đột phá vĩ đại trong ngành AI.",
        "collocations": [
          "major breakthrough",
          "technological breakthrough",
          "make a breakthrough"
        ]
      },
      {
        "id": "v12-autonomous",
        "word": "autonomous",
        "partOfSpeech": "adj",
        "meaningVi": "tự hành, tự chủ, hoạt động độc lập",
        "ipa": "/ɔːˈtɒnəməs/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=autonomous&type=2",
        "exampleEn": "Autonomous vehicles use lidar sensors and deep learning to navigate safely.",
        "exampleVi": "Xe tự hành sử dụng cảm biến lidar và học sâu để di chuyển an toàn.",
        "collocations": [
          "autonomous vehicles",
          "autonomous system",
          "autonomous decision-making"
        ]
      },
      {
        "id": "v12-machine-learning",
        "word": "machine learning",
        "partOfSpeech": "noun phrase",
        "meaningVi": "học máy (nhánh then chốt của AI)",
        "ipa": "/məˌʃiːn ˈlɜːnɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/machine_learning.mp3",
        "exampleEn": "Machine learning algorithms analyze large medical scans to detect tumors early.",
        "exampleVi": "Các thuật toán học máy phân tích các bản chụp y tế lớn để phát hiện sớm các khối u.",
        "collocations": [
          "machine learning model",
          "deep machine learning",
          "apply machine learning"
        ]
      },
      {
        "id": "v12-humanoid",
        "word": "humanoid",
        "partOfSpeech": "adjective / noun",
        "meaningVi": "người máy có hình dạng giống con người",
        "ipa": "/ˈhjuːmənɔɪd/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/humanoid.mp3",
        "exampleEn": "Advanced humanoid robots can converse fluently and assist elderly patients.",
        "exampleVi": "Các robot hình người tiên tiến có thể trò chuyện lưu loát và chăm sóc người bệnh cao tuổi.",
        "collocations": [
          "humanoid robot",
          "humanoid features"
        ]
      },
      {
        "id": "v12-ethical-concerns",
        "word": "ethical concerns",
        "partOfSpeech": "noun phrase",
        "meaningVi": "các mối bận tâm / quan ngại về mặt đạo đức",
        "ipa": "/ˌeθɪkl kənˈsɜːnz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/ethical_concerns.mp3",
        "exampleEn": "Deepfake technology raises grave ethical concerns regarding privacy and misinformation.",
        "exampleVi": "Công nghệ deepfake dấy lên những quan ngại đạo đức nghiêm trọng về quyền riêng tư và thông tin sai lệch.",
        "collocations": [
          "raise ethical concerns",
          "address ethical concerns"
        ]
      }
    ]
  },
  {
    "id": "g12-u7",
    "slug": "unit-7-the-world-of-mass-media",
    "unitNumber": 7,
    "titleEn": "The World of Mass Media",
    "titleVi": "Thế giới truyền thông đại chúng",
    "topic": "Digital Journalism, Social Networks & Media Literacy",
    "cefrLevel": "B2",
    "term": 2,
    "grammarTitle": "Prepositions Following Verbs & Adjectives",
    "grammarSummary": "Hệ thống giới từ đi kèm động từ (rely on, depend on, subscribe to, contribute to) và tính từ (addicted to, aware of, critical of, popular with) trong văn cảnh truyền thông báo chí.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Media consumption - Thói quen tiếp nhận tin tức và truyền thông số của giới trẻ"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Giới từ sau động từ và tính từ; ngữ điệu thể hiện thái độ hoài nghi hoặc đồng tình"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về kỹ năng nhận diện tin giả (Fake News) và kiểm chứng nguồn tin số"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về ảnh hưởng tâm lý của mạng xã hội đối với thanh thiếu niên"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe podcast chia sẻ từ một nhà báo điều tra về đạo đức nghề báo"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài đánh giá (review) một kênh tin tức trực tuyến hoặc podcast giáo dục"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Quyền sở hữu trí tuệ và bản quyền nội dung số trên Internet"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Xuất bản bản tin đa phương tiện của trường học"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-mass-media",
        "word": "mass media",
        "partOfSpeech": "n",
        "meaningVi": "truyền thông đại chúng",
        "ipa": "/ˌmæs ˈmiːdiə/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=mass+media&type=2",
        "exampleEn": "The mass media play a vital role in shaping public opinion during national events.",
        "exampleVi": "Truyền thông đại chúng đóng vai trò thiết yếu trong việc định hình dư luận trong các sự kiện quốc gia.",
        "collocations": [
          "influence of mass media",
          "modern mass media",
          "mass media coverage"
        ]
      },
      {
        "id": "v12-digital-literacy",
        "word": "digital literacy",
        "partOfSpeech": "n",
        "meaningVi": "năng lực hiểu biết số, khả năng sử dụng công nghệ an toàn",
        "ipa": "/ˌdɪdʒɪtl ˈlɪtərəsi/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=digital+literacy&type=2",
        "exampleEn": "Teaching digital literacy helps students identify misinformation and protect privacy.",
        "exampleVi": "Dạy năng lực số giúp học sinh nhận biết thông tin sai lệch và bảo vệ quyền riêng tư.",
        "collocations": [
          "enhance digital literacy",
          "digital literacy curriculum",
          "digital literacy skills"
        ]
      },
      {
        "id": "v12-misinformation",
        "word": "misinformation",
        "partOfSpeech": "n",
        "meaningVi": "thông tin sai lệch, tin giả không chủ đích",
        "ipa": "/ˌmɪsɪnfəˈmeɪʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=misinformation&type=2",
        "exampleEn": "Health authorities had to counter dangerous misinformation spreading on social apps.",
        "exampleVi": "Cơ quan y tế đã phải đối phó với thông tin sai lệch nguy hiểm lan truyền trên mạng xã hội.",
        "collocations": [
          "combat misinformation",
          "spread misinformation",
          "counter misinformation"
        ]
      },
      {
        "id": "v12-credibility",
        "word": "credibility",
        "partOfSpeech": "n",
        "meaningVi": "sự uy tín, độ tin cậy",
        "ipa": "/ˌkredəˈbɪləti/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=credibility&type=2",
        "exampleEn": "Always cross-check sources to ensure the credibility of online journalism.",
        "exampleVi": "Luôn kiểm tra chéo các nguồn tin để bảo đảm độ tin cậy của báo chí trực tuyến.",
        "collocations": [
          "source credibility",
          "establish credibility",
          "lose credibility"
        ]
      },
      {
        "id": "v12-sensationalism",
        "word": "sensationalism",
        "partOfSpeech": "n",
        "meaningVi": "xu hướng giật gân, câu view",
        "ipa": "/senˈseɪʃənəlɪzəm/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=sensationalism&type=2",
        "exampleEn": "Critics condemned the newspaper for resorting to sensationalism to boost sales.",
        "exampleVi": "Các nhà phê bình lên án tờ báo vì dùng chiêu trò giật gân để tăng lượng tiêu thụ.",
        "collocations": [
          "media sensationalism",
          "avoid sensationalism",
          "tabloid sensationalism"
        ]
      },
      {
        "id": "v12-media-literacy",
        "word": "media literacy",
        "partOfSpeech": "noun phrase",
        "meaningVi": "năng lực hiểu biết và thẩm định truyền thông số",
        "ipa": "/ˌmiːdiə ˈlɪtərəsi/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/media_literacy.mp3",
        "exampleEn": "Media literacy courses teach students how to identify deepfakes and fake news online.",
        "exampleVi": "Các khóa học thẩm định truyền thông dạy học sinh cách nhận biết video deepfake và tin giả trên mạng.",
        "collocations": [
          "teach media literacy",
          "critical media literacy"
        ]
      }
    ]
  },
  {
    "id": "g12-u8",
    "slug": "unit-8-wildlife-conservation",
    "unitNumber": 8,
    "titleEn": "Wildlife Conservation",
    "titleVi": "Bảo tồn động vật hoang dã",
    "topic": "Endangered Species, Habitat Restoration & Biodiversity",
    "cefrLevel": "B2+",
    "term": 2,
    "grammarTitle": "Complex Sentences with Adverbial Clauses",
    "grammarSummary": "Mệnh đề trạng ngữ chỉ điều kiện (Provided that, As long as), nhượng bộ (Although, Even though, Despite the fact that) và kết quả (So... that, Such... that) trong văn cảnh bảo tồn thiên nhiên.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Saving species - Khám phá các chiến dịch cứu hộ động vật hoang dã tại Việt Nam"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Câu phức chứa mệnh đề trạng ngữ chỉ điều kiện, nhượng bộ và kết quả"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về nỗ lực cứu vãn loài Voọc mông trắng tại Vườn Quốc gia Cúc Phương"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thuyết trình về hậu quả nghiêm trọng của việc săn bắt và buôn bán trái phép thú quý hiếm"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe các nhà kiểm lâm chia sẻ về công tác tuần tra rừng ngập mặn"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết thư kiến nghị gửi cơ quan chức năng đề xuất biện pháp bảo vệ động vật nguy cấp"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Công ước CITES và hành lang pháp lý quốc tế về bảo tồn sinh học"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Chiến dịch gây quỹ hỗ trợ trung tâm cứu hộ động vật hoang dã"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-conservation",
        "word": "conservation",
        "partOfSpeech": "n",
        "meaningVi": "sự bảo tồn thiên nhiên",
        "ipa": "/ˌkɒnsəˈveɪʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=conservation&type=2",
        "exampleEn": "Wildlife conservation projects are vital to protect endangered species from extinction.",
        "exampleVi": "Các dự án bảo tồn động vật hoang dã đóng vai trò sinh tử để bảo vệ các loài có nguy cơ tuyệt chủng.",
        "collocations": [
          "wildlife conservation",
          "conservation effort",
          "conservation area"
        ]
      },
      {
        "id": "v12-poaching",
        "word": "poaching",
        "partOfSpeech": "n",
        "meaningVi": "nạn săn bắt trộm thú quý hiếm",
        "ipa": "/ˈpəʊtʃɪŋ/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=poaching&type=2",
        "exampleEn": "Rangers risk their lives daily to combat illegal poaching in national parks.",
        "exampleVi": "Các kiểm lâm viên liều mình mỗi ngày để chống lại nạn săn bắt trộm bất hợp pháp trong vườn quốc gia.",
        "collocations": [
          "illegal poaching",
          "combat poaching",
          "anti-poaching patrol"
        ]
      },
      {
        "id": "v12-habitat-loss",
        "word": "habitat loss",
        "partOfSpeech": "n",
        "meaningVi": "sự mất môi trường sống tự nhiên",
        "ipa": "/ˈhæbɪtæt lɒs/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=habitat+loss&type=2",
        "exampleEn": "Deforestation is the leading driver of habitat loss for tropical rainforest species.",
        "exampleVi": "Phá rừng là nguyên nhân hàng đầu gây mất môi trường sống của các loài sinh vật rừng nhiệt đới.",
        "collocations": [
          "cause habitat loss",
          "suffer habitat loss",
          "prevent habitat loss"
        ]
      },
      {
        "id": "v12-biodiversity",
        "word": "biodiversity",
        "partOfSpeech": "n",
        "meaningVi": "đa dạng sinh học",
        "ipa": "/ˌbaɪəʊdaɪˈvɜːsəti/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=biodiversity&type=2",
        "exampleEn": "Preserving biodiversity ensures the resilience and equilibrium of global ecosystems.",
        "exampleVi": "Bảo tồn đa dạng sinh học đảm bảo khả năng phục hồi và trạng thái cân bằng của các hệ sinh thái toàn cầu.",
        "collocations": [
          "preserve biodiversity",
          "threat to biodiversity",
          "biodiversity hotspot"
        ]
      },
      {
        "id": "v12-extinction",
        "word": "extinction",
        "partOfSpeech": "n",
        "meaningVi": "sự tuyệt chủng",
        "ipa": "/ɪkˈstɪŋkʃn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=extinction&type=2",
        "exampleEn": "Many precious amphibian species are on the brink of extinction due to pollution.",
        "exampleVi": "Nhiều loài lưỡng cư quý giá đang trên bờ vực tuyệt chủng do ô nhiễm môi trường.",
        "collocations": [
          "brink of extinction",
          "mass extinction",
          "driven to extinction"
        ]
      },
      {
        "id": "v12-biodiversity-hotspot",
        "word": "biodiversity hotspot",
        "partOfSpeech": "noun phrase",
        "meaningVi": "điểm nóng đa dạng sinh học (vùng có vô số loài đặc hữu bị đe dọa)",
        "ipa": "/ˌbaɪəʊdaɪˈvɜːsəti ˈhɒtspɒt/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/hotspot.mp3",
        "exampleEn": "The Annamite Range in Viet Nam is recognized as a global biodiversity hotspot.",
        "exampleVi": "Dãy Trường Sơn tại Việt Nam được công nhận là một điểm nóng đa dạng sinh học toàn cầu.",
        "collocations": [
          "global biodiversity hotspot",
          "protect biodiversity hotspots"
        ]
      },
      {
        "id": "v12-reintroduction",
        "word": "reintroduction",
        "partOfSpeech": "noun",
        "meaningVi": "sự tái thả động vật hoang dã về môi trường tự nhiên",
        "ipa": "/ˌriːˌɪntrəˈdʌkʃn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/reintroduction.mp3",
        "exampleEn": "The captive breeding program successfully carried out the reintroduction of pangolins into the jungle.",
        "exampleVi": "Chương trình nhân giống nuôi nhốt đã tiến hành thành công việc tái thả tê tê về rừng già tự nhiên.",
        "collocations": [
          "reintroduction program",
          "species reintroduction"
        ]
      },
      {
        "id": "v12-extinct-in-the-wild",
        "word": "extinct in the wild",
        "partOfSpeech": "adjective phrase",
        "meaningVi": "tuyệt chủng ngoài tự nhiên (chỉ còn sống trong vườn thú / nuôi nhốt)",
        "ipa": "/ɪkˈstɪŋkt ɪn ðə waɪld/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/extinct_wild.mp3",
        "exampleEn": "Species classified as extinct in the wild require urgent genetic preservation efforts.",
        "exampleVi": "Các loài được phân loại là tuyệt chủng ngoài tự nhiên đòi hỏi nỗ lực bảo tồn nguồn gen khẩn cấp.",
        "collocations": [
          "classified as extinct in the wild",
          "threat of extinction"
        ]
      },
      {
        "id": "v12-wildlife-trafficking",
        "word": "wildlife trafficking",
        "partOfSpeech": "noun phrase",
        "meaningVi": "nạn buôn lậu động vật hoang dã trái phép",
        "ipa": "/ˈwaɪldlaɪf ˈtræfɪkɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/trafficking.mp3",
        "exampleEn": "Interpol coordinates international crackdowns to dismantle wildlife trafficking syndicates.",
        "exampleVi": "Interpol điều phối các đợt trấn áp quốc tế nhằm triệt phá các đường dây buôn lậu động vật hoang dã.",
        "collocations": [
          "combat wildlife trafficking",
          "illicit wildlife trafficking"
        ]
      }
    ]
  },
  {
    "id": "g12-r3",
    "slug": "review-3-units-6-7-8",
    "unitNumber": 8.5,
    "isReview": true,
    "titleEn": "Review 3 (Units 6 - 8)",
    "titleVi": "Ôn tập 3 (Bài 6 - 8)",
    "topic": "Mid-Term 2 Examination Prep",
    "cefrLevel": "B2+",
    "term": 2,
    "grammarTitle": "Consolidation: Causatives, Prepositions & Adverbial Clauses",
    "grammarSummary": "Tổng ôn kiến thức Units 6-8: Cấu trúc truyền khiến (Have/Get done), Giới từ cố định sau động từ & tính từ, và Mệnh đề trạng ngữ nâng cao.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Language Review",
        "description": "Hệ thống hóa cấu trúc ngữ pháp và từ vựng chuyên ngành AI, Truyền thông & Sinh thái"
      },
      {
        "id": "sec-2",
        "title": "II. Skills Review",
        "description": "Luyện bài đọc hiểu dài và bài viết học thuật chuẩn đầu ra THPT"
      }
    ],
    "vocabulary": []
  },
  {
    "id": "g12-u9",
    "slug": "unit-9-career-paths",
    "unitNumber": 9,
    "titleEn": "Career Paths",
    "titleVi": "Các con đường sự nghiệp",
    "topic": "Vocational vs Academic Routes, Lifelong Ambitions & Apprenticeships",
    "cefrLevel": "B2+",
    "term": 2,
    "grammarTitle": "Phrasal Verbs (Advanced Three-Part & Separable)",
    "grammarSummary": "Cụm động từ nâng cao (Phrasal Verbs): 2 thành phần và 3 thành phần (come up with, keep up with, look down on, get on with, carry out, call off) áp dụng trong bối cảnh phát triển sự nghiệp.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Choosing a pathway - Đại học hay trường nghề? Định hướng tương lai"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Trọng âm trong cụm động từ; cách dùng cụm động từ nâng cao có giới từ kép"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về lợi thế thực tiễn của chương trình học nghề và học nghề vừa học vừa làm (Apprenticeship)"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Tư vấn lộ trình sự nghiệp phù hợp với sở thích, đam mê và tính cách cá nhân"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe chia sẻ thành công từ một kỹ sư phần mềm xuất phát điểm từ trường cao đẳng nghề"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài luận phân tích ưu nhược điểm giữa con đường học thuật và đào tạo nghề"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Tiêu chuẩn kỹ năng nghề quốc tế và tính dịch chuyển lao động trong ASEAN"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Bản đồ định hướng lộ trình nghề nghiệp 5 năm (Career Roadmap)"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-career-path",
        "word": "career path",
        "partOfSpeech": "n",
        "meaningVi": "con đường sự nghiệp, lộ trình thăng tiến",
        "ipa": "/kəˈrɪə pɑːθ/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=career+path&type=2",
        "exampleEn": "She charted an impressive career path from junior intern to chief technology officer.",
        "exampleVi": "Cô đã vạch ra một lộ trình sự nghiệp ấn tượng từ thực tập sinh lên tới giám đốc công nghệ.",
        "collocations": [
          "pursue a career path",
          "choose a career path",
          "clear career path"
        ]
      },
      {
        "id": "v12-apprenticeship",
        "word": "apprenticeship",
        "partOfSpeech": "n",
        "meaningVi": "chương trình học nghề, thời gian học việc",
        "ipa": "/əˈprentɪsʃɪp/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=apprenticeship&type=2",
        "exampleEn": "He secured a paid apprenticeship with an internationally acclaimed engineering firm.",
        "exampleVi": "Anh đã giành được một suất học nghề có lương tại một công ty cơ khí nổi tiếng quốc tế.",
        "collocations": [
          "serve an apprenticeship",
          "vocational apprenticeship",
          "paid apprenticeship"
        ]
      },
      {
        "id": "v12-vocational",
        "word": "vocational",
        "partOfSpeech": "adj",
        "meaningVi": "thuộc về hướng nghiệp, dạy nghề",
        "ipa": "/vəʊˈkeɪʃənl/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=vocational&type=2",
        "exampleEn": "Vocational colleges equip students with hands-on skills tailored directly to industry needs.",
        "exampleVi": "Các trường cao đẳng nghề trang bị cho sinh viên những kỹ năng thực hành sát với nhu cầu ngành nghề.",
        "collocations": [
          "vocational training",
          "vocational education",
          "vocational school"
        ]
      },
      {
        "id": "v12-entrepreneurship",
        "word": "entrepreneurship",
        "partOfSpeech": "n",
        "meaningVi": "tinh thần khởi nghiệp, kinh doanh",
        "ipa": "/ˌɒntrəprəˈnɜːʃɪp/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=entrepreneurship&type=2",
        "exampleEn": "The university runs incubation hubs to encourage student entrepreneurship and innovation.",
        "exampleVi": "Trường đại học vận hành các trung tâm ươm tạo để khuyến khích sinh viên khởi nghiệp và đổi mới.",
        "collocations": [
          "foster entrepreneurship",
          "spirit of entrepreneurship",
          "social entrepreneurship"
        ]
      },
      {
        "id": "v12-hands-on",
        "word": "hands-on",
        "partOfSpeech": "adj",
        "meaningVi": "thực hành thực tế, trực tiếp chạm tay vào việc",
        "ipa": "/ˌhændz ˈɒn/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=hands-on&type=2",
        "exampleEn": "Employers highly value candidates who have practical, hands-on laboratory experience.",
        "exampleVi": "Nhà tuyển dụng đánh giá rất cao các ứng viên có kinh nghiệm thực hành phòng thí nghiệm thực tế.",
        "collocations": [
          "hands-on experience",
          "hands-on training",
          "hands-on approach"
        ]
      },
      {
        "id": "v12-trajectory",
        "word": "trajectory",
        "partOfSpeech": "noun",
        "meaningVi": "quỹ đạo, lộ trình tiến triển sự nghiệp",
        "ipa": "/trəˈdʒektəri/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/trajectory.mp3",
        "exampleEn": "Earning a recognized cybersecurity certificate propelled her career trajectory into senior management.",
        "exampleVi": "Giành được chứng chỉ an ninh mạng được công nhận đã thúc đẩy lộ trình sự nghiệp của cô lên cấp quản lý cấp cao.",
        "collocations": [
          "career trajectory",
          "upward trajectory",
          "professional trajectory"
        ]
      },
      {
        "id": "v12-stepping-stone",
        "word": "stepping stone",
        "partOfSpeech": "noun phrase",
        "meaningVi": "bước đệm, bàn đạp thăng tiến",
        "ipa": "/ˈstepɪŋ stəʊn/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/stepping_stone.mp3",
        "exampleEn": "An entry-level customer support job can serve as an ideal stepping stone to product management.",
        "exampleVi": "Một công việc hỗ trợ khách hàng khởi điểm có thể đóng vai trò như một bàn đạp lý tưởng để lên vị trí quản trị sản phẩm.",
        "collocations": [
          "stepping stone to success",
          "serve as a stepping stone"
        ]
      },
      {
        "id": "v12-job-shadowing",
        "word": "job shadowing",
        "partOfSpeech": "noun phrase",
        "meaningVi": "học việc qua quan sát thực tế (đi theo người có kinh nghiệm để học hỏi)",
        "ipa": "/ˈdʒɒb ˌʃædəʊɪŋ/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/job_shadowing.mp3",
        "exampleEn": "High school students gained realistic career insights through a one-week job shadowing scheme.",
        "exampleVi": "Học sinh THPT đã thu nhận được cái nhìn nghề nghiệp thực tế qua chương trình quan sát công việc kéo dài một tuần.",
        "collocations": [
          "job shadowing opportunity",
          "conduct job shadowing"
        ]
      }
    ]
  },
  {
    "id": "g12-u10",
    "slug": "unit-10-lifelong-learning",
    "unitNumber": 10,
    "titleEn": "Lifelong Learning",
    "titleVi": "Học tập suốt đời",
    "topic": "Continuous Self-Education, Adaptability & Growth Mindset",
    "cefrLevel": "B2+",
    "term": 2,
    "grammarTitle": "Inversion with Negative & Restrictive Adverbials",
    "grammarSummary": "Hiện tượng đảo ngữ (Inversion): Đưa các trạng từ phủ định/hạn chế lên đầu câu để nhấn mạnh (Never, Seldom, Rarely, Hardly... when, No sooner... than, Not only... but also, Only by/when) đảo trợ động từ lên trước chủ ngữ.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Getting Started",
        "description": "Learning never stops - Khám phá khái niệm học tập suốt đời trong kỷ nguyên AI"
      },
      {
        "id": "sec-2",
        "title": "II. Language",
        "description": "Đảo ngữ với trạng từ phủ định và hạn chế; ngữ điệu câu đảo ngữ mang tính kịch tính"
      },
      {
        "id": "sec-3",
        "title": "III. Reading",
        "description": "Đọc hiểu về tư duy phát triển (Growth Mindset) và các nền tảng MOOC trực tuyến"
      },
      {
        "id": "sec-4",
        "title": "IV. Speaking",
        "description": "Thảo luận về cách tự học hiệu quả một kỹ năng mới trong vòng 30 ngày"
      },
      {
        "id": "sec-5",
        "title": "V. Listening",
        "description": "Nghe bài phỏng vấn cụ bà 80 tuổi vừa xuất sắc nhận bằng cử nhân đại học"
      },
      {
        "id": "sec-6",
        "title": "VI. Writing",
        "description": "Viết bài luận thuyết phục: Tại sao học tập suốt đời là chìa khóa thành công bền vững?"
      },
      {
        "id": "sec-7",
        "title": "VII. Communication & CLIL",
        "description": "Xây dựng xã hội học tập (Learning Society) theo tiêu chuẩn UNESCO"
      },
      {
        "id": "sec-8",
        "title": "VIII. Looking Back & Project",
        "description": "Dự án: Lập kế hoạch tự học suốt đời cho giai đoạn 10 năm tới"
      }
    ],
    "vocabulary": [
      {
        "id": "v12-lifelong-learning",
        "word": "lifelong learning",
        "partOfSpeech": "n",
        "meaningVi": "học tập suốt đời",
        "ipa": "/ˌlaɪflɒŋ ˈlɜːnɪŋ/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=lifelong+learning&type=2",
        "exampleEn": "Lifelong learning is crucial to maintain professional relevance in an automated economy.",
        "exampleVi": "Học tập suốt đời là điều cốt yếu để duy trì giá trị nghề nghiệp trong nền kinh tế tự động hóa.",
        "collocations": [
          "embrace lifelong learning",
          "lifelong learning skills",
          "commitment to lifelong learning"
        ]
      },
      {
        "id": "v12-growth-mindset",
        "word": "growth mindset",
        "partOfSpeech": "n",
        "meaningVi": "tư duy phát triển (tin rằng năng lực có thể rèn luyện)",
        "ipa": "/ˈɡrəʊθ maɪndset/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=growth+mindset&type=2",
        "exampleEn": "People with a growth mindset view mistakes as valuable opportunities to evolve.",
        "exampleVi": "Những người có tư duy phát triển xem sai lầm là cơ hội quý báu để tiến bộ.",
        "collocations": [
          "cultivate a growth mindset",
          "adopt a growth mindset",
          "fixed versus growth mindset"
        ]
      },
      {
        "id": "v12-self-directed",
        "word": "self-directed",
        "partOfSpeech": "adj",
        "meaningVi": "tự định hướng, tự chủ trong học tập",
        "ipa": "/ˌself daɪˈrektɪd/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=self-directed&type=2",
        "exampleEn": "Self-directed learners actively set goals, locate resources, and monitor their own progress.",
        "exampleVi": "Người học tự định hướng chủ động đặt mục tiêu, tìm kiếm tài liệu và theo dõi tiến độ của chính mình.",
        "collocations": [
          "self-directed learning",
          "self-directed study",
          "self-directed learner"
        ]
      },
      {
        "id": "v12-upskilling",
        "word": "upskilling",
        "partOfSpeech": "n",
        "meaningVi": "nâng cao tay nghề, bổ sung kỹ năng mới",
        "ipa": "/ˌʌpˈskɪlɪŋ/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=upskilling&type=2",
        "exampleEn": "Tech companies provide continuous upskilling courses for their engineering teams.",
        "exampleVi": "Các công ty công nghệ cung cấp các khóa bồi dưỡng nâng cao tay nghề liên tục cho đội ngũ kỹ sư.",
        "collocations": [
          "reskilling and upskilling",
          "upskilling programs",
          "need for upskilling"
        ]
      },
      {
        "id": "v12-inquisitive",
        "word": "inquisitive",
        "partOfSpeech": "adj",
        "meaningVi": "ham học hỏi, tò mò khám phá",
        "ipa": "/ɪnˈkwɪzətɪv/",
        "audioUrl": "https://dict.youdao.com/dictvoice?audio=inquisitive&type=2",
        "exampleEn": "An inquisitive mind is the greatest asset for scientific discovery and personal growth.",
        "exampleVi": "Một tâm trí ham học hỏi là tài sản lớn nhất cho các phát kiến khoa học và sự trưởng thành cá nhân.",
        "collocations": [
          "inquisitive mind",
          "stay inquisitive",
          "naturally inquisitive"
        ]
      },
      {
        "id": "v12-adaptability",
        "word": "adaptability",
        "partOfSpeech": "noun",
        "meaningVi": "khả năng thích ứng linh hoạt trước thay đổi",
        "ipa": "/əˌdæptəˈbɪləti/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/adaptability.mp3",
        "exampleEn": "In the fast-changing era of AI, personal adaptability is far more valuable than static knowledge.",
        "exampleVi": "Trong kỷ nguyên AI thay đổi chóng mặt, khả năng thích ứng cá nhân có giá trị hơn nhiều so với kiến thức tĩnh.",
        "collocations": [
          "high adaptability",
          "demonstrate adaptability",
          "career adaptability"
        ]
      },
      {
        "id": "v12-upskill",
        "word": "upskill",
        "partOfSpeech": "verb",
        "meaningVi": "nâng cao tay nghề, học thêm kỹ năng mới tiên tiến",
        "ipa": "/ˌʌpˈskɪl/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/upskill.mp3",
        "exampleEn": "Professionals must continuously upskill to stay competitive in the digital labor market.",
        "exampleVi": "Các chuyên gia phải liên tục nâng cao tay nghề để duy trì sức cạnh tranh trên thị trường lao động số.",
        "collocations": [
          "upskill workforce",
          "opportunity to upskill",
          "upskilling program"
        ]
      },
      {
        "id": "v12-broaden-horizons",
        "word": "broaden horizons",
        "partOfSpeech": "idiom / phrase",
        "meaningVi": "mở rộng tầm nhìn, mở mang chân trời tri thức",
        "ipa": "/ˈbrɔːdn həˈraɪznz/",
        "audioUrl": "https://img.loigiaihay.com/picture/2021/1103/broaden_horizons.mp3",
        "exampleEn": "Reading diverse academic literature broadens your intellectual horizons.",
        "exampleVi": "Đọc các tác phẩm học thuật đa dạng giúp mở rộng chân trời tri thức của bạn.",
        "collocations": [
          "broaden intellectual horizons",
          "travel to broaden horizons"
        ]
      }
    ]
  },
  {
    "id": "g12-r4",
    "slug": "review-4-units-9-10",
    "unitNumber": 10.5,
    "isReview": true,
    "titleEn": "Review 4 (Units 9 - 10)",
    "titleVi": "Ôn tập 4 (Bài 9 - 10)",
    "topic": "National High School Graduation Exam Synthesis",
    "cefrLevel": "B2+",
    "term": 2,
    "grammarTitle": "Mastery Review: Phrasal Verbs, Inversion & Graduation Exam Focus",
    "grammarSummary": "Tổng kết toàn bộ 3 năm THPT (Lớp 10, 11, 12 Global Success) chuẩn bị cho Kỳ thi Tốt nghiệp THPT Quốc gia theo chương trình mới GDPT 2018.",
    "sections": [
      {
        "id": "sec-1",
        "title": "I. Comprehensive Language Review",
        "description": "Tổng hợp toàn bộ ngữ âm, từ vựng và cấu trúc ngữ pháp then chốt 3 năm THPT"
      },
      {
        "id": "sec-2",
        "title": "II. Exam Practice Test",
        "description": "Bộ đề luyện thi thử tốt nghiệp THPT chuẩn cấu trúc phân hóa của Bộ Giáo dục và Đào tạo"
      }
    ],
    "vocabulary": []
  }
];

export function getGrade12UnitBySlug(slug: string): Grade12Unit | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();

  // 1. Exact match by slug or id
  const exact = GRADE_12_CURRICULUM.find((u) => u.slug.toLowerCase() === clean || u.id.toLowerCase() === clean);
  if (exact) return exact;

  // 2. Unit number match (e.g. "unit-1", "unit1", "u1", "1")
  const unitNumMatch = clean.match(/^(?:unit-?|u)?(\d+)$/i);
  if (unitNumMatch) {
    const num = parseInt(unitNumMatch[1], 10);
    const byNum = GRADE_12_CURRICULUM.find((u) => !u.isReview && u.unitNumber === num);
    if (byNum) return byNum;
  }

  // 3. Review match (e.g. "review-1", "review1", "r1")
  const reviewMatch = clean.match(/^(?:review-?|r)(\d+)$/i);
  if (reviewMatch) {
    const revNum = parseInt(reviewMatch[1], 10);
    const byRev = GRADE_12_CURRICULUM.find((u) => u.isReview && (u.id.endsWith(`r${revNum}`) || u.slug.includes(`review-${revNum}`)));
    if (byRev) return byRev;
  }

  // 4. Prefix or containment match
  const byPrefix = GRADE_12_CURRICULUM.find((u) => u.slug.toLowerCase().startsWith(clean + "-") || clean.startsWith(u.slug.toLowerCase() + "-"));
  if (byPrefix) return byPrefix;

  return undefined;
}

export function getGrade12UnitsByTerm(term: 1 | 2): Grade12Unit[] {
  return GRADE_12_CURRICULUM.filter((u) => u.term === term);
}
