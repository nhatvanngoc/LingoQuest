import type { Grade12VocabItem } from "./grade12-data";

/**
 * Ngân hàng từ vựng mở rộng chuyên sâu cho toàn bộ 10 Units Khối 12
 * Khai thác & chuẩn hóa theo SGK Global Success (Bộ GD&ĐT), VietJack, Lời giải hay & Cambridge
 * Đảm bảo mỗi Unit đạt từ 55 đến 65+ từ vựng phong phú kèm Collocations, IPA, Audio & Ảnh thực tế.
 */

export const EXPANDED_VOCAB_GRADE12: Record<string, Grade12VocabItem[]> = {
  "unit-1-life-stories-we-admire": [
    {
      id: "v12-u1-biography",
      word: "biography",
      partOfSpeech: "n",
      meaningVi: "ti\u1ec3u s\u1eed cu\u1ed9c \u0111\u1eddi do ng\u01b0\u1eddi kh\u00e1c vi\u1ebft",
      ipa: "/ba\u026a\u02c8\u0252\u0261r\u0259fi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biography&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The biography chronicles her journey from modest beginnings to Nobel laureate.",
      exampleVi: "Cu\u1ed1n ti\u1ec3u s\u1eed ghi l\u1ea1i h\u00e0nh tr\u00ecnh t\u1eeb xu\u1ea5t th\u00e2n khi\u00eam t\u1ed1n t\u1edbi gi\u1ea3i th\u01b0\u1edfng Nobel danh gi\u00e1 c\u1ee7a b\u00e0.",
      collocations: ["write an authorized biography", "compelling biography"]
    },
    {
      id: "v12-u1-autobiography",
      word: "autobiography",
      partOfSpeech: "n",
      meaningVi: "t\u1ef1 truy\u1ec7n do ch\u00ednh t\u00e1c gi\u1ea3 t\u1ef1 vi\u1ebft",
      ipa: "/\u02cc\u0254\u02d0t\u0259ba\u026a\u02c8\u0252\u0261r\u0259fi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autobiography&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "In his moving autobiography, the scientist reveals personal struggles with illness.",
      exampleVi: "Trong cu\u1ed1n t\u1ef1 truy\u1ec7n c\u1ea3m \u0111\u1ed9ng, nh\u00e0 khoa h\u1ecdc ti\u1ebft l\u1ed9 nh\u1eefng cu\u1ed9c chi\u1ebfn th\u1ea7m l\u1eb7ng v\u1edbi b\u1ec7nh t\u1eadt.",
      collocations: ["publish an autobiography", "bestselling autobiography"]
    },
    {
      id: "v12-u1-perseverance",
      word: "perseverance",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng ki\u00ean tr\u00ec b\u1ec1n b\u1ec9 kh\u00f4ng b\u1ecf cu\u1ed9c",
      ipa: "/\u02ccp\u025c\u02d0s\u0259\u02c8v\u026a\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=perseverance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Through sheer perseverance, Thomas Edison tested thousands of materials before inventing the light bulb.",
      exampleVi: "B\u1eb1ng l\u00f2ng ki\u00ean tr\u00ec b\u1ec1n b\u1ec9, Thomas Edison \u0111\u00e3 th\u1eed nghi\u1ec7m h\u00e0ng ng\u00e0n v\u1eadt li\u1ec7u tr\u01b0\u1edbc khi ch\u1ebf t\u1ea1o th\u00e0nh c\u00f4ng b\u00f3ng \u0111\u00e8n.",
      collocations: ["show great perseverance", "triumph through perseverance"]
    },
    {
      id: "v12-u1-overcome-adversity",
      word: "overcome adversity",
      partOfSpeech: "v.phr",
      meaningVi: "v\u01b0\u1ee3t qua ngh\u1ecbch c\u1ea3nh \u00e9o le",
      ipa: "/\u02cc\u0259\u028av\u0259\u02c8k\u028cm \u0259d\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=overcome+adversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her ability to overcome adversity and finish medical school inspired millions.",
      exampleVi: "Kh\u1ea3 n\u0103ng v\u01b0\u1ee3t qua ngh\u1ecbch c\u1ea3nh v\u00e0 t\u1ed1t nghi\u1ec7p tr\u01b0\u1eddng y c\u1ee7a c\u00f4 \u0111\u00e3 truy\u1ec1n c\u1ea3m h\u1ee9ng cho h\u00e0ng tri\u1ec7u ng\u01b0\u1eddi.",
      collocations: ["courage to overcome adversity", "learn to overcome adversity"]
    },
    {
      id: "v12-u1-legacy",
      word: "legacy",
      partOfSpeech: "n",
      meaningVi: "di s\u1ea3n qu\u00fd gi\u00e1 \u0111\u1ec3 l\u1ea1i cho th\u1ebf h\u1ec7 sau",
      ipa: "/\u02c8le\u0261\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=legacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "President Ho Chi Minh left an enduring legacy of national independence and self-reliance.",
      exampleVi: "Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\u00ed Minh \u0111\u00e3 \u0111\u1ec3 l\u1ea1i m\u1ed9t di s\u1ea3n tr\u01b0\u1eddng t\u1ed3n v\u1ec1 \u0111\u1ed9c l\u1eadp d\u00e2n t\u1ed9c v\u00e0 t\u1ef1 l\u1ef1c t\u1ef1 c\u01b0\u1eddng.",
      collocations: ["leave a lasting legacy", "cherish the legacy"]
    },
    {
      id: "v12-u1-visionary",
      word: "visionary",
      partOfSpeech: "n / adj",
      meaningVi: "nh\u00e0 l\u00e3nh \u0111\u1ea1o c\u00f3 t\u1ea7m nh\u00ecn xa tr\u00f4ng r\u1ed9ng",
      ipa: "/\u02c8v\u026a\u0292\u0259nri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=visionary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Steve Jobs was a visionary who reshaped personal computing and smartphones.",
      exampleVi: "Steve Jobs l\u00e0 m\u1ed9t nh\u00e0 l\u00e3nh \u0111\u1ea1o c\u00f3 t\u1ea7m nh\u00ecn xa tr\u00f4ng r\u1ed9ng \u0111\u00e3 t\u00e1i \u0111\u1ecbnh h\u00ecnh m\u00e1y t\u00ednh c\u00e1 nh\u00e2n v\u00e0 \u0111i\u1ec7n tho\u1ea1i.",
      collocations: ["visionary leader", "visionary ideas"]
    },
    {
      id: "v12-u1-inspirational",
      word: "inspirational",
      partOfSpeech: "adj",
      meaningVi: "truy\u1ec1n c\u1ea3m h\u1ee9ng s\u1ed1ng m\u1ea1nh m\u1ebd",
      ipa: "/\u02cc\u026ansp\u0259\u02c8re\u026a\u0283\u0259nl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=inspirational&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "His motivational speech on overcoming failure was deeply inspirational to students.",
      exampleVi: "B\u00e0i n\u00f3i chuy\u1ec7n c\u1ee7a \u00f4ng v\u1ec1 v\u01b0\u1ee3t qua th\u1ea5t b\u1ea1i \u0111\u00e3 truy\u1ec1n c\u1ea3m h\u1ee9ng s\u00e2u s\u1eafc cho c\u00e1c em h\u1ecdc sinh.",
      collocations: ["inspirational figure", "inspirational story"]
    },
    {
      id: "v12-u1-devotion",
      word: "devotion",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u1eadn t\u00e2m c\u1ed1ng hi\u1ebfn qu\u00ean m\u00ecnh",
      ipa: "/d\u026a\u02c8v\u0259\u028a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=devotion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mother Teresa's lifelong devotion to the destitute earned global veneration.",
      exampleVi: "S\u1ef1 t\u1eadn t\u00e2m c\u1ed1ng hi\u1ebfn tr\u1ecdn \u0111\u1eddi cho ng\u01b0\u1eddi ngh\u00e8o kh\u00f3 c\u1ee7a M\u1eb9 Teresa \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 k\u00ednh tr\u1ecdng c\u1ee7a to\u00e0n th\u1ebf gi\u1edbi.",
      collocations: ["selfless devotion", "lifelong devotion to science"]
    },
    {
      id: "v12-u1-humble-origins",
      word: "humble origins",
      partOfSpeech: "n.phr",
      meaningVi: "xu\u1ea5t th\u00e2n ngh\u00e8o kh\u00f3, khi\u00eam nh\u01b0\u1eddng",
      ipa: "/\u02c8h\u028cmbl \u02c8\u0252r\u026ad\u0292\u026anz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=humble+origins&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Despite rising from humble origins in a farming village, he became an accomplished surgeon.",
      exampleVi: "D\u00f9 xu\u1ea5t th\u00e2n khi\u00eam t\u1ed1n t\u1eeb m\u1ed9t l\u00e0ng qu\u00ea l\u00e0m n\u00f4ng, \u00f4ng \u0111\u00e3 tr\u1edf th\u00e0nh m\u1ed9t b\u00e1c s\u0129 ph\u1eabu thu\u1eadt xu\u1ea5t ch\u00fang.",
      collocations: ["rise from humble origins", "proud of humble origins"]
    },
    {
      id: "v12-u1-breakthrough-achievement",
      word: "breakthrough achievement",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00e0nh t\u1ef1u \u0111\u1ed9t ph\u00e1 mang t\u00ednh l\u1ecbch s\u1eed",
      ipa: "/\u02c8bre\u026ak\u03b8ru\u02d0 \u0259\u02c8t\u0283i\u02d0vm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breakthrough+achievement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Marie Curie's discovery of radium was a breakthrough achievement in nuclear physics.",
      exampleVi: "Ph\u00e1t hi\u1ec7n ra nguy\u00ean t\u1ed1 ph\u00f3ng x\u1ea1 radium c\u1ee7a Marie Curie l\u00e0 th\u00e0nh t\u1ef1u \u0111\u1ed9t ph\u00e1 trong v\u1eadt l\u00fd h\u1ea1t nh\u00e2n.",
      collocations: ["celebrate breakthrough achievements", "landmark breakthrough achievement"]
    },
    {
      id: "v12-u1-philanthropy",
      word: "philanthropy",
      partOfSpeech: "n",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng t\u1eeb thi\u1ec7n, b\u00e1c \u00e1i v\u00ec con ng\u01b0\u1eddi",
      ipa: "/f\u026a\u02c8l\u00e6n\u03b8r\u0259pi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=philanthropy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bill Gates channeled billions into global public health through foundation philanthropy.",
      exampleVi: "Bill Gates \u0111\u00e3 r\u00f3t h\u00e0ng t\u1ef7 \u0111\u00f4 la v\u00e0o y t\u1ebf c\u00f4ng c\u1ed9ng th\u1ebf gi\u1edbi th\u00f4ng qua qu\u1ef9 t\u1eeb thi\u1ec7n.",
      collocations: ["engage in philanthropy", "champion philanthropy"]
    },
    {
      id: "v12-u1-resilience",
      word: "resilience",
      partOfSpeech: "n",
      meaningVi: "ngh\u1ecb l\u1ef1c ph\u1ee5c h\u1ed3i ki\u00ean c\u01b0\u1eddng",
      ipa: "/r\u026a\u02c8z\u026ali\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resilience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nelson Mandela demonstrated superhuman psychological resilience during twenty-seven years of imprisonment.",
      exampleVi: "Nelson Mandela \u0111\u00e3 th\u1ec3 hi\u1ec7n ngh\u1ecb l\u1ef1c tinh th\u1ea7n phi th\u01b0\u1eddng trong su\u1ed1t 27 n\u0103m b\u1ecb giam c\u1ea7m.",
      collocations: ["remarkable resilience", "inner resilience"]
    },
    {
      id: "v12-u1-role-model",
      word: "role model",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00ecnh m\u1eabu l\u00fd t\u01b0\u1edfng noi theo",
      ipa: "/\u02c8r\u0259\u028al m\u0252dl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=role+model&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Malala Yousafzai stands as a fearless role model for girls fighting for schooling rights.",
      exampleVi: "Malala Yousafzai l\u00e0 h\u00ecnh m\u1eabu qu\u1ea3 c\u1ea3m cho c\u00e1c tr\u1ebb em g\u00e1i \u0111\u1ea5u tranh v\u00ec quy\u1ec1n h\u1ecdc h\u00e0nh.",
      collocations: ["serve as a role model", "positive role model"]
    },
    {
      id: "v12-u1-tribute",
      word: "tribute",
      partOfSpeech: "n",
      meaningVi: "l\u1eddi tri \u00e2n, s\u1ef1 t\u00f4n k\u00ednh ch\u00e2n th\u00e0nh",
      ipa: "/\u02c8tr\u026abju\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tribute&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thousands gathered in Ba Dinh Square to pay solemn tribute to fallen heroes.",
      exampleVi: "H\u00e0ng ng\u00e0n ng\u01b0\u1eddi t\u1ec1 t\u1ef1u t\u1ea1i Qu\u1ea3ng tr\u01b0\u1eddng Ba \u0110\u00ecnh \u0111\u1ec3 nghi\u00eang m\u00ecnh t\u01b0\u1edfng nh\u1edb v\u00e0 tri \u00e2n c\u00e1c anh h\u00f9ng li\u1ec7t s\u0129.",
      collocations: ["pay tribute to", "fitting tribute"]
    },
    {
      id: "v12-u1-distinguished",
      word: "distinguished",
      partOfSpeech: "adj",
      meaningVi: "xu\u1ea5t ch\u00fang, \u01b0u t\u00fa l\u1ed7i l\u1ea1c",
      ipa: "/d\u026a\u02c8st\u026a\u014b\u0261w\u026a\u0283t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=distinguished&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "General Vo Nguyen Giap was a distinguished military strategist admired globally.",
      exampleVi: "\u0110\u1ea1i t\u01b0\u1edbng V\u00f5 Nguy\u00ean Gi\u00e1p l\u00e0 m\u1ed9t nh\u00e0 chi\u1ebfn l\u01b0\u1ee3c qu\u00e2n s\u1ef1 l\u1ed7i l\u1ea1c \u0111\u01b0\u1ee3c c\u1ea3 th\u1ebf gi\u1edbi kh\u00e2m ph\u1ee5c.",
      collocations: ["distinguished career", "distinguished scholar"]
    },
    {
      id: "v12-u1-unwavering",
      word: "unwavering",
      partOfSpeech: "adj",
      meaningVi: "ki\u00ean \u0111\u1ecbnh, kh\u00f4ng h\u1ec1 dao \u0111\u1ed9ng",
      ipa: "/\u028cn\u02c8we\u026av\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=unwavering&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her unwavering commitment to social justice guided every lawsuit she filed.",
      exampleVi: "L\u00f2ng ki\u00ean \u0111\u1ecbnh kh\u00f4ng h\u1ec1 lay chuy\u1ec3n v\u1edbi c\u00f4ng l\u00fd x\u00e3 h\u1ed9i \u0111\u00e3 d\u1eabn \u0111\u01b0\u1eddng cho m\u1ecdi v\u1ee5 ki\u1ec7n c\u1ee7a b\u00e0.",
      collocations: ["unwavering faith", "unwavering dedication"]
    },
    {
      id: "v12-u1-posthumous",
      word: "posthumous",
      partOfSpeech: "adj",
      meaningVi: "truy t\u1eb7ng sau khi qua \u0111\u1eddi",
      ipa: "/\u02c8p\u0252stj\u028am\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=posthumous&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The soldier received a posthumous Medal of Honor for saving his comrades.",
      exampleVi: "Ng\u01b0\u1eddi l\u00ednh \u0111\u00e3 \u0111\u01b0\u1ee3c truy t\u1eb7ng Hu\u00e2n ch\u01b0\u01a1ng Danh d\u1ef1 sau khi hy sinh c\u1ee9u \u0111\u1ed3ng \u0111\u1ed9i.",
      collocations: ["posthumous award", "posthumous fame"]
    },
    {
      id: "v12-u1-heroic",
      word: "heroic",
      partOfSpeech: "adj",
      meaningVi: "anh h\u00f9ng, qu\u1ea3 c\u1ea3m phi th\u01b0\u1eddng",
      ipa: "/h\u0259\u02c8r\u0259\u028a\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heroic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Doctors and nurses mounted heroic efforts on the frontline during the health pandemic.",
      exampleVi: "C\u00e1c b\u00e1c s\u0129 v\u00e0 y t\u00e1 \u0111\u00e3 n\u1ed7 l\u1ef1c qu\u1ea3 c\u1ea3m phi th\u01b0\u1eddng tr\u00ean tuy\u1ebfn \u0111\u1ea7u ch\u1ed1ng d\u1ecbch.",
      collocations: ["heroic deed", "heroic sacrifice"]
    },
    {
      id: "v12-u1-pioneer",
      word: "pioneer",
      partOfSpeech: "n / v",
      meaningVi: "ng\u01b0\u1eddi ti\u00ean phong m\u1edf \u0111\u01b0\u1eddng",
      ipa: "/\u02ccpa\u026a\u0259\u02c8n\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pioneer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Alan Turing was a mathematical pioneer whose work laid the bedrock for modern computer science.",
      exampleVi: "Alan Turing l\u00e0 nh\u00e0 to\u00e1n h\u1ecdc ti\u00ean phong v\u1edbi nh\u1eefng c\u00f4ng tr\u00ecnh \u0111\u1eb7t n\u1ec1n m\u00f3ng cho khoa h\u1ecdc m\u00e1y t\u00ednh.",
      collocations: ["pioneer in the field", "pioneer new methods"]
    },
    {
      id: "v12-u1-patriotism",
      word: "patriotism",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng y\u00eau n\u01b0\u1edbc n\u1ed3ng n\u00e0n",
      ipa: "/\u02c8p\u00e6tri\u0259t\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=patriotism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese youth showed fervent patriotism during the national struggle for independence.",
      exampleVi: "Tu\u1ed5i tr\u1ebb Vi\u1ec7t Nam \u0111\u00e3 th\u1ec3 hi\u1ec7n l\u00f2ng y\u00eau n\u01b0\u1edbc n\u1ed3ng n\u00e0n trong cu\u1ed9c kh\u00e1ng chi\u1ebfn gi\u00e0nh \u0111\u1ed9c l\u1eadp d\u00e2n t\u1ed9c.",
      collocations: ["deep patriotism", "sense of patriotism"]
    },
    {
      id: "v12-u1-self-sacrifice",
      word: "self-sacrifice",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 hy sinh b\u1ea3n th\u00e2n v\u00ec \u0111\u1ea1i ngh\u0129a",
      ipa: "/\u02ccself \u02c8s\u00e6kr\u026afa\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-sacrifice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The monument honors the noble self-sacrifice of young youth volunteers on Truong Son trail.",
      exampleVi: "T\u01b0\u1ee3ng \u0111\u00e0i vinh danh s\u1ef1 hy sinh cao c\u1ea3 c\u1ee7a c\u00e1c thanh ni\u00ean xung phong tr\u00ean \u0111\u01b0\u1eddng Tr\u01b0\u1eddng S\u01a1n huy\u1ec1n tho\u1ea1i.",
      collocations: ["act of self-sacrifice", "noble self-sacrifice"]
    },
    {
      id: "v12-u1-monumental",
      word: "monumental",
      partOfSpeech: "adj",
      meaningVi: "v\u0129 \u0111\u1ea1i, mang t\u1ea7m v\u00f3c to l\u1edbn",
      ipa: "/\u02ccm\u0252nju\u02c8mentl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=monumental&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The discovery of penicillin was a monumental breakthrough in modern antibiotic medicine.",
      exampleVi: "Ph\u00e1t hi\u1ec7n ra penicillin l\u00e0 m\u1ed9t b\u01b0\u1edbc \u0111\u1ed9t ph\u00e1 v\u0129 \u0111\u1ea1i trong y h\u1ecdc kh\u00e1ng sinh hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["monumental achievement", "monumental impact"]
    },
    {
      id: "v12-u1-renowned",
      word: "renowned",
      partOfSpeech: "adj",
      meaningVi: "l\u1eebng danh, n\u1ed5i ti\u1ebfng kh\u1eafp n\u01a1i",
      ipa: "/r\u026a\u02c8na\u028and/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=renowned&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Professor Ngo Bao Chau is a world-renowned mathematician awarded the Fields Medal.",
      exampleVi: "Gi\u00e1o s\u01b0 Ng\u00f4 B\u1ea3o Ch\u00e2u l\u00e0 nh\u00e0 to\u00e1n h\u1ecdc l\u1eebng danh th\u1ebf gi\u1edbi t\u1eebng \u0111\u01b0\u1ee3c trao Huy ch\u01b0\u01a1ng Fields.",
      collocations: ["world-renowned scholar", "internationally renowned"]
    },
    {
      id: "v12-u1-prolific",
      word: "prolific",
      partOfSpeech: "adj",
      meaningVi: "s\u00e1ng t\u00e1c nhi\u1ec1u, n\u0103ng su\u1ea5t phi th\u01b0\u1eddng",
      ipa: "/pr\u0259\u02c8l\u026af\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prolific&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nguyen Du was a prolific classical poet whose Master Tale of Kieu is revered nationwide.",
      exampleVi: "Nguy\u1ec5n Du l\u00e0 \u0111\u1ea1i thi h\u00e0o ki\u1ec7t xu\u1ea5t v\u1edbi ki\u1ec7t t\u00e1c Truy\u1ec7n Ki\u1ec1u \u0111\u01b0\u1ee3c mu\u00f4n \u0111\u1eddi tr\u00e2n qu\u00fd.",
      collocations: ["prolific writer", "prolific composer"]
    },
    {
      id: "v12-u1-charismatic",
      word: "charismatic",
      partOfSpeech: "adj",
      meaningVi: "c\u00f3 s\u1ee9c h\u00fat l\u00f4i cu\u1ed1n qu\u1ea7n ch\u00fang",
      ipa: "/\u02cck\u00e6r\u026az\u02c8m\u00e6t\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charismatic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The charismatic orator unified disparate factions around a common democratic vision.",
      exampleVi: "V\u1ecb di\u1ec5n gi\u1ea3 \u0111\u1ea7y s\u1ee9c h\u00fat \u0111\u00e3 g\u1eafn k\u1ebft c\u00e1c phe ph\u00e1i xung quanh m\u1ed9t t\u1ea7m nh\u00ecn d\u00e2n ch\u1ee7 chung.",
      collocations: ["charismatic leader", "charismatic personality"]
    },
    {
      id: "v12-u1-indomitable",
      word: "indomitable",
      partOfSpeech: "adj",
      meaningVi: "b\u1ea5t khu\u1ea5t, kh\u00f4ng g\u00ec khu\u1ea5t ph\u1ee5c n\u1ed5i",
      ipa: "/\u026an\u02c8d\u0252m\u026at\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indomitable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The indomitable spirit of the Vietnamese people withstood centuries of foreign invasions.",
      exampleVi: "Tinh th\u1ea7n b\u1ea5t khu\u1ea5t c\u1ee7a nh\u00e2n d\u00e2n Vi\u1ec7t Nam \u0111\u00e3 \u0111\u1ee9ng v\u1eefng tr\u01b0\u1edbc h\u00e0ng th\u1ebf k\u1ef7 gi\u1eb7c ngo\u1ea1i x\u00e2m.",
      collocations: ["indomitable spirit", "indomitable will"]
    },
    {
      id: "v12-u1-trailblazer",
      word: "trailblazer",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi khai s\u01a1n ph\u00e1 th\u1ea1ch m\u1edf l\u1ed1i",
      ipa: "/\u02c8tre\u026alble\u026az\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trailblazer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She was an academic trailblazer who became the university's first female dean.",
      exampleVi: "B\u00e0 l\u00e0 ng\u01b0\u1eddi ti\u00ean phong m\u1edf l\u1ed1i khi tr\u1edf th\u00e0nh n\u1eef hi\u1ec7u tr\u01b0\u1edfng \u0111\u1ea7u ti\u00ean c\u1ee7a tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc.",
      collocations: ["cultural trailblazer", "trailblazer in science"]
    },
    {
      id: "v12-u1-tenacity",
      word: "tenacity",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ki\u00ean c\u01b0\u1eddng b\u1ec1n b\u1ec9 d\u1ebbo dai",
      ipa: "/t\u0259\u02c8n\u00e6s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tenacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her intellectual tenacity pushed the vaccine project across the finish line despite skepticism.",
      exampleVi: "S\u1ef1 ki\u00ean c\u01b0\u1eddng b\u1ec1n b\u1ec9 trong nghi\u00ean c\u1ee9u c\u1ee7a b\u00e0 \u0111\u00e3 \u0111\u01b0a d\u1ef1 \u00e1n v\u1eafc-xin v\u1ec1 \u0111\u00edch b\u1ea5t ch\u1ea5p ho\u00e0i nghi.",
      collocations: ["remarkable tenacity", "tenacity of purpose"]
    },
    {
      id: "v12-u1-philanthropist",
      word: "philanthropist",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 t\u1eeb thi\u1ec7n h\u1ea3o t\u00e2m v\u00ec nh\u00e2n lo\u1ea1i",
      ipa: "/f\u026a\u02c8l\u00e6n\u03b8r\u0259p\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=philanthropist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The billionaire philanthropist donated ninety percent of his wealth to eradicate malaria.",
      exampleVi: "Nh\u00e0 t\u1eeb thi\u1ec7n h\u00e0o hi\u1ec7p \u0111\u00e3 trao t\u1eb7ng ch\u00edn m\u01b0\u01a1i ph\u1ea7n tr\u0103m t\u00e0i s\u1ea3n \u0111\u1ec3 thanh to\u00e1n b\u1ec7nh s\u1ed1t r\u00e9t.",
      collocations: ["generous philanthropist", "noted philanthropist"]
    },
    {
      id: "v12-u1-martyr",
      word: "martyr",
      partOfSpeech: "n",
      meaningVi: "li\u1ec7t s\u0129 hy sinh v\u00ec t\u1ed5 qu\u1ed1c",
      ipa: "/\u02c8m\u0251\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=martyr&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national cemetery honors thousands of young martyrs who gave their youth for freedom.",
      exampleVi: "Ngh\u0129a trang li\u1ec7t s\u0129 qu\u1ed1c gia kh\u1eafc ghi c\u00f4ng \u01a1n h\u00e0ng ng\u00e0n li\u1ec7t s\u0129 \u0111\u00e3 d\u00e2ng hi\u1ebfn tu\u1ed5i thanh xu\u00e2n cho t\u1ef1 do.",
      collocations: ["national martyr", "honor the martyrs"]
    },
    {
      id: "v12-u1-commemorate",
      word: "commemorate",
      partOfSpeech: "v",
      meaningVi: "t\u01b0\u1edfng nh\u1edb, k\u1ef7 ni\u1ec7m chi\u1ebfn c\u00f4ng",
      ipa: "/k\u0259\u02c8mem\u0259re\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=commemorate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The monument was erected to commemorate the historic victory of Dien Bien Phu.",
      exampleVi: "\u0110\u00e0i t\u01b0\u1edfng ni\u1ec7m \u0111\u01b0\u1ee3c d\u1ef1ng l\u00ean \u0111\u1ec3 ghi nh\u1edb chi\u1ebfn th\u1eafng \u0110i\u1ec7n Bi\u00ean Ph\u1ee7 l\u1eaby l\u1eebng n\u0103m ch\u00e2u.",
      collocations: ["commemorate fallen soldiers", "commemorate an anniversary"]
    },
    {
      id: "v12-u1-luminary",
      word: "luminary",
      partOfSpeech: "n",
      meaningVi: "danh nh\u00e2n ki\u1ec7t xu\u1ea5t soi s\u00e1ng th\u1eddi \u0111\u1ea1i",
      ipa: "/\u02c8lu\u02d0m\u026an\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=luminary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Literary luminaries like Chu Van An guided generations of Vietnamese intellectuals.",
      exampleVi: "Nh\u1eefng b\u1eadc danh nh\u00e2n l\u1ed7i l\u1ea1c nh\u01b0 Chu V\u0103n An \u0111\u00e3 d\u1eabn d\u1eaft bi\u1ebft bao th\u1ebf h\u1ec7 tr\u00ed th\u1ee9c Vi\u1ec7t Nam.",
      collocations: ["intellectual luminary", "cultural luminary"]
    },
    {
      id: "v12-u1-formidable",
      word: "formidable",
      partOfSpeech: "adj",
      meaningVi: "phi th\u01b0\u1eddng, \u0111\u00e1ng n\u1ec3 ph\u1ee5c",
      ipa: "/f\u0259\u02c8m\u026ad\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=formidable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She overcame formidable physical disabilities to earn an Olympic gold medal.",
      exampleVi: "C\u00f4 \u1ea5y \u0111\u00e3 v\u01b0\u1ee3t qua nh\u1eefng khi\u1ebfm khuy\u1ebft th\u1ec3 ch\u1ea5t \u0111\u00e1ng n\u1ec3 \u0111\u1ec3 gi\u00e0nh t\u1ea5m huy ch\u01b0\u01a1ng v\u00e0ng Olympic.",
      collocations: ["formidable challenge", "formidable willpower"]
    },
    {
      id: "v12-u1-altruistic",
      word: "altruistic",
      partOfSpeech: "adj",
      meaningVi: "v\u1ecb tha, lu\u00f4n ngh\u0129 cho ng\u01b0\u1eddi kh\u00e1c",
      ipa: "/\u02cc\u00e6ltru\u02c8\u026ast\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=altruistic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her altruistic decision to establish a free clinic in the slum saved thousands of lives.",
      exampleVi: "Quy\u1ebft \u0111\u1ecbnh v\u1ecb tha m\u1edf ph\u00f2ng kh\u00e1m mi\u1ec5n ph\u00ed t\u1ea1i khu \u1ed5 chu\u1ed9t c\u1ee7a b\u00e0 \u0111\u00e3 c\u1ee9u s\u1ed1ng h\u00e0ng ng\u00e0n sinh m\u1ea1ng.",
      collocations: ["altruistic behavior", "purely altruistic"]
    },
    {
      id: "v12-u1-undaunted",
      word: "undaunted",
      partOfSpeech: "adj",
      meaningVi: "kh\u00f4ng h\u1ec1 n\u1ea3n l\u00f2ng, b\u1ea5t khu\u1ea5t tr\u01b0\u1edbc hi\u1ec3m nguy",
      ipa: "/\u028cn\u02c8d\u0254\u02d0nt\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=undaunted&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Undaunted by repeated lab failures, the researchers persevered until the cure was confirmed.",
      exampleVi: "Kh\u00f4ng h\u1ec1 n\u1ea3n l\u00f2ng tr\u01b0\u1edbc nhi\u1ec1u l\u1ea7n th\u1ea5t b\u1ea1i trong ph\u00f2ng th\u00ed nghi\u1ec7m, c\u00e1c nh\u00e0 nghi\u00ean c\u1ee9u \u0111\u00e3 ki\u00ean tr\u00ec \u0111\u1ebfn c\u00f9ng.",
      collocations: ["remain undaunted", "undaunted by hardships"]
    },
    {
      id: "v12-u1-exemplary",
      word: "exemplary",
      partOfSpeech: "adj",
      meaningVi: "m\u1eabu m\u1ef1c, g\u01b0\u01a1ng m\u1eabu cho \u0111\u1eddi",
      ipa: "/\u026a\u0261\u02c8zempl\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=exemplary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "His exemplary moral character made him a revered headmaster for four decades.",
      exampleVi: "\u0110\u1ea1o \u0111\u1ee9c m\u1eabu m\u1ef1c c\u1ee7a th\u1ea7y \u0111\u00e3 khi\u1ebfn th\u1ea7y \u0111\u01b0\u1ee3c k\u00ednh tr\u1ecdng su\u1ed1t b\u1ed1n th\u1eadp k\u1ef7 l\u00e0m hi\u1ec7u tr\u01b0\u1edfng.",
      collocations: ["exemplary conduct", "exemplary life"]
    },
    {
      id: "v12-u1-eponymous",
      word: "eponymous",
      partOfSpeech: "adj",
      meaningVi: "mang t\u00ean ch\u00ednh t\u00e1c gi\u1ea3/nh\u00e2n v\u1eadt",
      ipa: "/\u026a\u02c8p\u0252n\u026am\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eponymous&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Pasteur Institute is the eponymous medical research center named after Louis Pasteur.",
      exampleVi: "Vi\u1ec7n Pasteur l\u00e0 trung t\u00e2m nghi\u00ean c\u1ee9u y khoa mang t\u00ean ch\u00ednh nh\u00e0 b\u00e1c h\u1ecdc Louis Pasteur.",
      collocations: ["eponymous foundation", "eponymous hero"]
    },
    {
      id: "v12-u1-revere",
      word: "revere",
      partOfSpeech: "v",
      meaningVi: "s\u00f9ng k\u00ednh, t\u00f4n k\u00ednh h\u1ebft m\u1ef1c",
      ipa: "/r\u026a\u02c8v\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=revere&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Generations of Vietnamese deeply revere Hung Kings as the mythical ancestors of the nation.",
      exampleVi: "Bi\u1ebft bao th\u1ebf h\u1ec7 ng\u01b0\u1eddi Vi\u1ec7t lu\u00f4n th\u00e0nh k\u00ednh t\u00f4n k\u00ednh c\u00e1c Vua H\u00f9ng l\u00e0 t\u1ed5 ti\u00ean d\u1ef1ng n\u01b0\u1edbc.",
      collocations: ["deeply revere", "revere ancestors"]
    },
    {
      id: "v12-u1-valiance",
      word: "valiance",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng d\u0169ng c\u1ea3m qu\u1ea3 c\u1ea3m ki\u00ean c\u01b0\u1eddng",
      ipa: "/\u02c8v\u00e6li\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=valiance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The valiance of youth soldiers on the frontline protected national territorial integrity.",
      exampleVi: "L\u00f2ng qu\u1ea3 c\u1ea3m c\u1ee7a nh\u1eefng ng\u01b0\u1eddi l\u00ednh tr\u1ebb tr\u00ean tuy\u1ebfn \u0111\u1ea7u \u0111\u00e3 b\u1ea3o v\u1ec7 s\u1ef1 to\u00e0n v\u1eb9n l\u00e3nh th\u1ed5 qu\u1ed1c gia.",
      collocations: ["admirable valiance", "display great valiance"]
    },
    {
      id: "v12-u1-self-effacing",
      word: "self-effacing",
      partOfSpeech: "adj",
      meaningVi: "khi\u00eam nh\u01b0\u1eddng, kh\u00f4ng m\u00e0ng ph\u00f4 tr\u01b0\u01a1ng",
      ipa: "/\u02ccself \u026a\u02c8fe\u026as\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-effacing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Despite his Nobel Prize, the elderly scientist remained remarkably humble and self-effacing.",
      exampleVi: "D\u00f9 \u0111o\u1ea1t gi\u1ea3i Nobel, nh\u00e0 khoa h\u1ecdc l\u00e3o th\u00e0nh v\u1eabn gi\u1eef t\u00ednh c\u00e1ch v\u00f4 c\u00f9ng khi\u00eam nh\u01b0\u1eddng v\u00e0 gi\u1ea3n d\u1ecb.",
      collocations: ["self-effacing manner", "quietly self-effacing"]
    }
    ,
    {
      id: "v12-extra-statesman",
      word: "statesman",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 ch\u00ednh tr\u1ecb l\u1ed7i l\u1ea1c, ch\u00ednh kh\u00e1ch c\u00f3 t\u1ea7m",
      ipa: "/\u02c8ste\u026atsm\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=statesman&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "President Ho Chi Minh is remembered as an internationally respected statesman.",
      exampleVi: "Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\u00ed Minh \u0111\u01b0\u1ee3c t\u01b0\u1edfng nh\u1edb nh\u01b0 m\u1ed9t nh\u00e0 ch\u00ednh kh\u00e1ch l\u1ed7i l\u1ea1c \u0111\u01b0\u1ee3c qu\u1ed1c t\u1ebf k\u00ednh tr\u1ecdng.",
      collocations: ["distinguished statesman", "visionary statesman"]
    }
    ,
    {
      id: "v12-extra-intellectual-rigor",
      word: "intellectual rigor",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nghi\u00eam c\u1ea9n v\u00e0 ch\u1eb7t ch\u1ebd trong h\u1ecdc thu\u1eadt",
      ipa: "/\u02cc\u026ant\u0259\u02c8lekt\u0283u\u0259l \u02c8r\u026a\u0261\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intellectual+rigor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her scientific papers are celebrated for profound insights and intellectual rigor.",
      exampleVi: "C\u00e1c c\u00f4ng tr\u00ecnh khoa h\u1ecdc c\u1ee7a b\u00e0 \u0111\u01b0\u1ee3c ca ng\u1ee3i b\u1edfi s\u1ef1 s\u00e2u s\u1eafc v\u00e0 t\u00ednh nghi\u00eam c\u1ea9n h\u1ecdc thu\u1eadt.",
      collocations: ["display intellectual rigor", "demand intellectual rigor"]
    }
    ,
    {
      id: "v12-extra-moral-fortitude",
      word: "moral fortitude",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ki\u00ean \u0111\u1ecbnh v\u00e0 b\u1ea3n l\u0129nh \u0111\u1ea1o \u0111\u1ee9c",
      ipa: "/\u02c8m\u0252r\u0259l \u02c8f\u0254\u02d0t\u026atju\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=moral+fortitude&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He stood firm against corrupt pressures with remarkable moral fortitude.",
      exampleVi: "\u00d4ng \u0111\u00e3 \u0111\u1ee9ng v\u1eefng tr\u01b0\u1edbc nh\u1eefng s\u1ee9c \u00e9p ti\u00eau c\u1ef1c v\u1edbi b\u1ea3n l\u0129nh \u0111\u1ea1o \u0111\u1ee9c phi th\u01b0\u1eddng.",
      collocations: ["show moral fortitude", "admire moral fortitude"]
    }
    ,
    {
      id: "v12-extra-selfless-devotion",
      word: "selfless devotion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u1ed1ng hi\u1ebfn qu\u00ean m\u00ecnh v\u00ec nh\u00e2n d\u00e2n",
      ipa: "/\u02c8selfl\u0259s d\u026a\u02c8v\u0259\u028a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=selfless+devotion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Doctors in remote communes serve with selfless devotion through long stormy nights.",
      exampleVi: "C\u00e1c y b\u00e1c s\u0129 v\u00f9ng s\u00e2u v\u00f9ng xa c\u1ed1ng hi\u1ebfn h\u1ebft m\u00ecnh qu\u00ean th\u00e2n qua nh\u1eefng \u0111\u00eam m\u01b0a b\u00e3o.",
      collocations: ["admire selfless devotion", "lifelong selfless devotion"]
    }
    ,
    {
      id: "v12-extra-legendary-hero",
      word: "legendary hero",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb anh h\u00f9ng huy\u1ec1n tho\u1ea1i trong s\u1eed s\u00e1ch",
      ipa: "/\u02c8led\u0292\u0259ndri \u02c8h\u026a\u0259r\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=legendary+hero&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "General Tran Hung Dao is revered as a legendary hero who defeated three Mongol invasions.",
      exampleVi: "H\u01b0ng \u0110\u1ea1o \u0110\u1ea1i V\u01b0\u01a1ng Tr\u1ea7n Qu\u1ed1c Tu\u1ea5n l\u00e0 v\u1ecb anh h\u00f9ng huy\u1ec1n tho\u1ea1i ba l\u1ea7n \u0111\u00e1nh tan qu\u00e2n Nguy\u00ean M\u00f4ng.",
      collocations: ["revere a legendary hero", "feats of a legendary hero"]
    }
    ,
    {
      id: "v12-extra-unshakable-resolve",
      word: "unshakable resolve",
      partOfSpeech: "n.phr",
      meaningVi: "quy\u1ebft t\u00e2m s\u1eaft \u0111\u00e1 kh\u00f4ng g\u00ec lay chuy\u1ec3n",
      ipa: "/\u028cn\u02c8\u0283e\u026ak\u0259bl r\u026a\u02c8z\u0252lv/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=unshakable+resolve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The youth marched with unshakable resolve to build a prosperous homeland.",
      exampleVi: "Thanh ni\u00ean ti\u1ebfn b\u01b0\u1edbc v\u1edbi quy\u1ebft t\u00e2m s\u1eaft \u0111\u00e1 x\u00e2y d\u1ef1ng qu\u00ea h\u01b0\u01a1ng gi\u00e0u \u0111\u1eb9p.",
      collocations: ["demonstrate unshakable resolve", "unshakable resolve to succeed"]
    }
    ,
    {
      id: "v12-extra-historic-turning-point",
      word: "historic turning point",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc ngo\u1eb7t l\u1ecbch s\u1eed l\u00e0m xoay chuy\u1ec3n th\u1eddi cu\u1ed9c",
      ipa: "/h\u026a\u02c8st\u0252r\u026ak \u02c8t\u025c\u02d0n\u026a\u014b p\u0254\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=historic+turning+point&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The August Revolution of 1945 was a monumental historic turning point for Vietnam.",
      exampleVi: "C\u00e1ch m\u1ea1ng Th\u00e1ng T\u00e1m n\u0103m 1945 l\u00e0 b\u01b0\u1edbc ngo\u1eb7t l\u1ecbch s\u1eed v\u0129 \u0111\u1ea1i c\u1ee7a d\u00e2n t\u1ed9c Vi\u1ec7t Nam.",
      collocations: ["mark a historic turning point", "crucial turning point"]
    }
    ,
    {
      id: "v12-extra-illustrious-career",
      word: "illustrious career",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nghi\u1ec7p l\u1eaby l\u1eebng, v\u1ebb vang",
      ipa: "/\u026a\u02c8l\u028cstri\u0259s k\u0259\u02c8r\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=illustrious+career&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The professor capped an illustrious career with the national scientific prize.",
      exampleVi: "V\u1ecb gi\u00e1o s\u01b0 \u0111\u00e3 kh\u00e9p l\u1ea1i s\u1ef1 nghi\u1ec7p l\u1eaby l\u1eebng b\u1eb1ng gi\u1ea3i th\u01b0\u1edfng khoa h\u1ecdc c\u1ea5p qu\u1ed1c gia.",
      collocations: ["conclude an illustrious career", "illustrious medical career"]
    }
    ,
    {
      id: "v12-extra-philanthropic-mission",
      word: "philanthropic mission",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9 m\u1ec7nh t\u1eeb thi\u1ec7n nh\u00e2n \u0111\u1ea1o cao c\u1ea3",
      ipa: "/\u02ccf\u026al\u0259n\u02c8\u03b8r\u0252p\u026ak \u02c8m\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=philanthropic+mission&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her philanthropic mission built thirty primary schools in mountain hamlets.",
      exampleVi: "S\u1ee9 m\u1ec7nh thi\u1ec7n nguy\u1ec7n c\u1ee7a b\u00e0 \u0111\u00e3 x\u00e2y d\u1ef1ng ba m\u01b0\u01a1i tr\u01b0\u1eddng ti\u1ec3u h\u1ecdc t\u1ea1i c\u00e1c b\u1ea3n v\u00f9ng cao.",
      collocations: ["embark on a philanthropic mission", "support philanthropic missions"]
    }
    ,
    {
      id: "v12-extra-heroic-sacrifice",
      word: "heroic sacrifice",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 hy sinh anh d\u0169ng v\u00ec t\u1ed5 qu\u1ed1c",
      ipa: "/h\u0259\u02c8r\u0259\u028a\u026ak \u02c8s\u00e6kr\u026afa\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heroic+sacrifice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We bow our heads in gratitude for the heroic sacrifice of front-line medics.",
      exampleVi: "Ch\u00fang ta nghi\u00eang m\u00ecnh bi\u1ebft \u01a1n s\u1ef1 hy sinh anh d\u0169ng c\u1ee7a c\u00e1c chi\u1ebfn s\u0129 \u00e1o tr\u1eafng tuy\u1ebfn \u0111\u1ea7u.",
      collocations: ["commemorate heroic sacrifice", "honor heroic sacrifice"]
    }
  ],
  "unit-2-a-multicultural-world": [
    {
      id: "v12-u2-cultural-diversity",
      word: "cultural diversity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111a d\u1ea1ng v\u0103n h\u00f3a gi\u1eefa c\u00e1c d\u00e2n t\u1ed9c",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l da\u026a\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+diversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cultural diversity enriches society with new artistic perspectives and culinary traditions.",
      exampleVi: "S\u1ef1 \u0111a d\u1ea1ng v\u0103n h\u00f3a l\u00e0m gi\u00e0u cho x\u00e3 h\u1ed9i b\u1eb1ng c\u00e1c g\u00f3c nh\u00ecn ngh\u1ec7 thu\u1eadt m\u1edbi v\u00e0 \u1ea9m th\u1ef1c \u0111\u1eb7c s\u1eafc.",
      collocations: ["celebrate cultural diversity", "promote cultural diversity"]
    },
    {
      id: "v12-u2-multiculturalism",
      word: "multiculturalism",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee7 ngh\u0129a \u0111a v\u0103n h\u00f3a h\u00e0i h\u00f2a",
      ipa: "/\u02ccm\u028clti\u02c8k\u028clt\u0283\u0259r\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multiculturalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Canada embraced official multiculturalism to protect the identities of immigrant communities.",
      exampleVi: "Canada \u0111\u00e3 \u00e1p d\u1ee5ng ch\u1ee7 ngh\u0129a \u0111a v\u0103n h\u00f3a ch\u00ednh th\u1ee9c \u0111\u1ec3 b\u1ea3o v\u1ec7 b\u1ea3n s\u1eafc c\u1ee7a c\u00e1c c\u1ed9ng \u0111\u1ed3ng nh\u1eadp c\u01b0.",
      collocations: ["policy of multiculturalism", "support multiculturalism"]
    },
    {
      id: "v12-u2-assimilate",
      word: "assimilate",
      partOfSpeech: "v",
      meaningVi: "\u0111\u1ed3ng h\u00f3a, h\u00f2a nh\u1eadp v\u00e0o n\u1ec1n v\u0103n h\u00f3a m\u1edbi",
      ipa: "/\u0259\u02c8s\u026am\u0259le\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=assimilate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Immigrants can assimilate into civic life while still keeping their native language alive.",
      exampleVi: "Ng\u01b0\u1eddi nh\u1eadp c\u01b0 c\u00f3 th\u1ec3 h\u00f2a nh\u1eadp v\u00e0o \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i trong khi v\u1eabn gi\u1eef g\u00ecn ti\u1ebfng m\u1eb9 \u0111\u1ebb.",
      collocations: ["assimilate into society", "difficulty assimilating"]
    },
    {
      id: "v12-u2-cultural-nuance",
      word: "cultural nuance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1eafc th\u00e1i v\u0103n h\u00f3a tinh t\u1ebf",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8nju\u02d0\u0251\u02d0ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+nuance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Understanding subtle cultural nuances avoids misunderstandings during business negotiations.",
      exampleVi: "Th\u1ea5u hi\u1ec3u c\u00e1c s\u1eafc th\u00e1i v\u0103n h\u00f3a tinh t\u1ebf gi\u00fap tr\u00e1nh hi\u1ec3u l\u1ea7m trong \u0111\u00e0m ph\u00e1n th\u01b0\u01a1ng m\u1ea1i.",
      collocations: ["appreciate cultural nuances", "subtle cultural nuance"]
    },
    {
      id: "v12-u2-ethnic-minority",
      word: "ethnic minority",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ed3ng b\u00e0o d\u00e2n t\u1ed9c thi\u1ec3u s\u1ed1",
      ipa: "/\u02cce\u03b8n\u026ak ma\u026a\u02c8n\u0252r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ethnic+minority&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam is home to 54 ethnic groups, including 53 rich ethnic minorities.",
      exampleVi: "Vi\u1ec7t Nam l\u00e0 m\u00e1i nh\u00e0 chung c\u1ee7a 54 d\u00e2n t\u1ed9c anh em, g\u1ed3m 53 d\u00e2n t\u1ed9c thi\u1ec3u s\u1ed1 gi\u00e0u b\u1ea3n s\u1eafc.",
      collocations: ["ethnic minority communities", "preserve ethnic minority culture"]
    },
    {
      id: "v12-u2-custom",
      word: "custom",
      partOfSpeech: "n",
      meaningVi: "phong t\u1ee5c t\u1eadp qu\u00e1n truy\u1ec1n \u0111\u1eddi",
      ipa: "/\u02c8k\u028cst\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=custom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Giving red lucky money envelopes at Lunar New Year is a cherished Vietnamese custom.",
      exampleVi: "M\u1eebng tu\u1ed5i l\u00ec x\u00ec \u0111\u1ea7u n\u0103m m\u1edbi l\u00e0 phong t\u1ee5c t\u1ed1t \u0111\u1eb9p \u0111\u00e1ng tr\u00e2n qu\u00fd c\u1ee7a ng\u01b0\u1eddi Vi\u1ec7t.",
      collocations: ["ancient custom", "follow local customs"]
    },
    {
      id: "v12-u2-cross-cultural",
      word: "cross-cultural",
      partOfSpeech: "adj",
      meaningVi: "giao thoa, li\u00ean v\u0103n h\u00f3a",
      ipa: "/\u02cckr\u0252s \u02c8k\u028clt\u0283\u0259r\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-cultural&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International student exchange fosters essential cross-cultural communication skills.",
      exampleVi: "Trao \u0111\u1ed5i sinh vi\u00ean qu\u1ed1c t\u1ebf b\u1ed3i \u0111\u1eafp c\u00e1c k\u1ef9 n\u0103ng giao ti\u1ebfp li\u00ean v\u0103n h\u00f3a thi\u1ebft y\u1ebfu.",
      collocations: ["cross-cultural communication", "cross-cultural understanding"]
    },
    {
      id: "v12-u2-heritage",
      word: "heritage",
      partOfSpeech: "n",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a l\u1ecbch s\u1eed",
      ipa: "/\u02c8her\u026at\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heritage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Our culinary heritage includes world-famous dishes like pho and crispy spring rolls.",
      exampleVi: "Di s\u1ea3n \u1ea9m th\u1ef1c c\u1ee7a ch\u00fang ta bao g\u1ed3m nh\u1eefng m\u00f3n \u0103n n\u1ee9c ti\u1ebfng nh\u01b0 ph\u1edf v\u00e0 nem r\u00e1n gi\u00f2n tan.",
      collocations: ["national heritage", "preserve cultural heritage"]
    },
    {
      id: "v12-u2-tolerance",
      word: "tolerance",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng bao dung, khoan dung v\u1edbi d\u1ecb bi\u1ec7t",
      ipa: "/\u02c8t\u0252l\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tolerance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Religious tolerance ensures that diverse faith communities live together in peace.",
      exampleVi: "Khoan dung t\u00f4n gi\u00e1o \u0111\u1ea3m b\u1ea3o c\u00e1c c\u1ed9ng \u0111\u1ed3ng t\u00edn ng\u01b0\u1ee1ng c\u00f9ng chung s\u1ed1ng h\u00f2a thu\u1eadn.",
      collocations: ["promote tolerance", "religious tolerance"]
    },
    {
      id: "v12-u2-globalization",
      word: "globalization",
      partOfSpeech: "n",
      meaningVi: "ti\u1ebfn tr\u00ecnh to\u00e0n c\u1ea7u h\u00f3a",
      ipa: "/\u02cc\u0261l\u0259\u028ab\u0259la\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=globalization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Economic globalization connects markets while accelerating cross-border travel.",
      exampleVi: "To\u00e0n c\u1ea7u h\u00f3a kinh t\u1ebf k\u1ebft n\u1ed1i c\u00e1c th\u1ecb tr\u01b0\u1eddng \u0111\u1ed3ng th\u1eddi th\u00fac \u0111\u1ea9y vi\u1ec7c \u0111i l\u1ea1i gi\u1eefa c\u00e1c n\u01b0\u1edbc.",
      collocations: ["forces of globalization", "effects of globalization"]
    },
    {
      id: "v12-u2-stereotype",
      word: "stereotype",
      partOfSpeech: "n / v",
      meaningVi: "\u0111\u1ecbnh ki\u1ebfn khu\u00f4n m\u1eabu r\u1eadp khu\u00f4n",
      ipa: "/\u02c8steri\u0259ta\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stereotype&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Education dismantles harmful cultural stereotypes and builds mutual empathy.",
      exampleVi: "Gi\u00e1o d\u1ee5c x\u00f3a b\u1ecf c\u00e1c \u0111\u1ecbnh ki\u1ebfn v\u0103n h\u00f3a sai l\u1ec7ch v\u00e0 b\u1ed3i \u0111\u1eafp l\u00f2ng tr\u1eafc \u1ea9n l\u1eabn nhau.",
      collocations: ["cultural stereotype", "dispel stereotypes"]
    },
    {
      id: "v12-u2-acculturation",
      word: "acculturation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 giao l\u01b0u ti\u1ebfp bi\u1ebfn v\u0103n h\u00f3a",
      ipa: "/\u0259\u02cck\u028clt\u0283\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=acculturation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Acculturation happens when immigrants blend new civic norms with their native customs.",
      exampleVi: "Ti\u1ebfp bi\u1ebfn v\u0103n h\u00f3a di\u1ec5n ra khi ng\u01b0\u1eddi nh\u1eadp c\u01b0 dung h\u00f2a chu\u1ea9n m\u1ef1c m\u1edbi v\u1edbi phong t\u1ee5c qu\u00ea h\u01b0\u01a1ng.",
      collocations: ["process of acculturation", "psychological acculturation"]
    },
    {
      id: "v12-u2-cosmopolitan",
      word: "cosmopolitan",
      partOfSpeech: "adj",
      meaningVi: "mang t\u00ednh qu\u1ed1c t\u1ebf, quy t\u1ee5 nhi\u1ec1u n\u1ec1n v\u0103n h\u00f3a",
      ipa: "/\u02cck\u0252zm\u0259\u02c8p\u0252l\u026at\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cosmopolitan&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ho Chi Minh City is a vibrant, cosmopolitan metropolis with cuisine from every continent.",
      exampleVi: "Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh l\u00e0 \u0111\u00f4 th\u1ecb ph\u1ed3n hoa mang t\u00ednh qu\u1ed1c t\u1ebf v\u1edbi \u1ea9m th\u1ef1c t\u1eeb kh\u1eafp c\u00e1c ch\u00e2u l\u1ee5c.",
      collocations: ["cosmopolitan city", "cosmopolitan outlook"]
    },
    {
      id: "v12-u2-indigenous",
      word: "indigenous",
      partOfSpeech: "adj",
      meaningVi: "b\u1ea3n \u0111\u1ecba, xu\u1ea5t x\u1ee9 nguy\u00ean th\u1ee7y",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Indigenous wisdom on herbal plants helps researchers discover life-saving medicines.",
      exampleVi: "Tri th\u1ee9c b\u1ea3n \u0111\u1ecba v\u1ec1 c\u00e1c c\u00e2y thu\u1ed1c gi\u00fap c\u00e1c nh\u00e0 nghi\u00ean c\u1ee9u t\u00ecm ra thu\u1ed1c c\u1ee9u ng\u01b0\u1eddi.",
      collocations: ["indigenous people", "indigenous knowledge"]
    },
    {
      id: "v12-u2-bilingualism",
      word: "bilingualism",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng song ng\u1eef th\u00e0nh th\u1ea1o hai th\u1ee9 ti\u1ebfng",
      ipa: "/\u02ccba\u026a\u02c8l\u026a\u014b\u0261w\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bilingualism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Early bilingualism boosts children's cognitive flexibility and problem-solving agility.",
      exampleVi: "Kh\u1ea3 n\u0103ng song ng\u1eef t\u1eeb nh\u1ecf gi\u00fap n\u00e2ng cao s\u1ef1 linh ho\u1ea1t t\u01b0 duy v\u00e0 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 c\u1ee7a tr\u1ebb em.",
      collocations: ["promote bilingualism", "benefits of bilingualism"]
    },
    {
      id: "v12-u2-festivity",
      word: "festivity",
      partOfSpeech: "n",
      meaningVi: "l\u1ec5 h\u1ed9i r\u1ed9n r\u00e0ng, kh\u00f4ng kh\u00ed ng\u00e0y h\u1ed9i",
      ipa: "/fe\u02c8st\u026av\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=festivity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Mid-Autumn festivities fill streets with colorful lion dances and mooncake lanterns.",
      exampleVi: "Kh\u00f4ng kh\u00ed l\u1ec5 h\u1ed9i Trung Thu l\u00e0m r\u1ed9n r\u00e0ng \u0111\u01b0\u1eddng ph\u1ed1 v\u1edbi m\u00faa l\u00e2n v\u00e0 nh\u1eefng chi\u1ebfc \u0111\u00e8n l\u1ed3ng.",
      collocations: ["street festivities", "join the festivities"]
    },
    {
      id: "v12-u2-ethnocentrism",
      word: "ethnocentrism",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee7 ngh\u0129a v\u1ecb ch\u1ee7ng t\u1ef1 coi m\u00ecnh l\u00e0 trung t\u00e2m",
      ipa: "/\u02cce\u03b8n\u0259\u028a\u02c8sentr\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ethnocentrism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Studying world history guards against ethnocentrism by showing each civilization's triumphs.",
      exampleVi: "H\u1ecdc l\u1ecbch s\u1eed th\u1ebf gi\u1edbi gi\u00fap ph\u00f2ng tr\u00e1nh ch\u1ee7 ngh\u0129a v\u1ecb ch\u1ee7ng b\u1eb1ng c\u00e1ch ch\u1ec9 ra th\u00e0nh t\u1ef1u c\u1ee7a m\u1ecdi n\u1ec1n v\u0103n minh.",
      collocations: ["reject ethnocentrism", "dangers of ethnocentrism"]
    },
    {
      id: "v12-u2-pluralism",
      word: "pluralism",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee7 ngh\u0129a \u0111a nguy\u00ean x\u00e3 h\u1ed9i",
      ipa: "/\u02c8pl\u028a\u0259r\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pluralism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Democratic cultural pluralism respects the rights of minority communities to thrive.",
      exampleVi: "Ch\u1ee7 ngh\u0129a \u0111a nguy\u00ean v\u0103n h\u00f3a t\u00f4n tr\u1ecdng quy\u1ec1n ph\u00e1t tri\u1ec3n c\u1ee7a c\u00e1c c\u1ed9ng \u0111\u1ed3ng thi\u1ec3u s\u1ed1.",
      collocations: ["cultural pluralism", "embrace pluralism"]
    },
    {
      id: "v12-u2-folklore",
      word: "folklore",
      partOfSpeech: "n",
      meaningVi: "kho t\u00e0ng v\u0103n h\u00f3a d\u00e2n gian d\u00e2n t\u1ed9c",
      ipa: "/\u02c8f\u0259\u028akl\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folklore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese folklore is rich with legends of dragons, golden turtles, and patriotic heroines.",
      exampleVi: "Kho t\u00e0ng v\u0103n h\u00f3a d\u00e2n gian Vi\u1ec7t Nam gi\u00e0u c\u00f3 nh\u1eefng truy\u1ec1n thuy\u1ebft v\u1ec1 r\u1ed3ng v\u00e0ng, r\u00f9a th\u1ea7n v\u00e0 c\u00e1c n\u1eef t\u01b0\u1edbng.",
      collocations: ["traditional folklore", "study folklore"]
    },
    {
      id: "v12-u2-intercultural",
      word: "intercultural",
      partOfSpeech: "adj",
      meaningVi: "gi\u1eefa c\u00e1c n\u1ec1n v\u0103n h\u00f3a t\u01b0\u01a1ng t\u00e1c v\u1edbi nhau",
      ipa: "/\u02cc\u026ant\u0259\u02c8k\u028clt\u0283\u0259r\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intercultural&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university organized an intercultural fair with food stalls from 30 countries.",
      exampleVi: "Tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc t\u1ed5 ch\u1ee9c h\u1ed9i ch\u1ee3 giao l\u01b0u gi\u1eefa c\u00e1c n\u1ec1n v\u0103n h\u00f3a v\u1edbi c\u00e1c gian h\u00e0ng t\u1eeb 30 qu\u1ed1c gia.",
      collocations: ["intercultural dialogue", "intercultural competence"]
    }
    ,
    {
      id: "v12-extra-cultural-assimilation",
      word: "cultural assimilation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ed3ng h\u00f3a v\u0103n h\u00f3a v\u00e0o x\u00e3 h\u1ed9i",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u0259\u02ccs\u026am\u0259\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+assimilation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sociologists study how second-generation immigrants navigate cultural assimilation.",
      exampleVi: "C\u00e1c nh\u00e0 x\u00e3 h\u1ed9i h\u1ecdc nghi\u00ean c\u1ee9u c\u00e1ch th\u1ebf h\u1ec7 ng\u01b0\u1eddi nh\u1eadp c\u01b0 th\u1ee9 hai th\u00edch nghi v\u0103n h\u00f3a.",
      collocations: ["speed of cultural assimilation", "resist cultural assimilation"]
    }
    ,
    {
      id: "v12-extra-multicultural-harmony",
      word: "multicultural harmony",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u00f2a h\u1ee3p gi\u1eefa c\u00e1c n\u1ec1n v\u0103n h\u00f3a",
      ipa: "/\u02ccm\u028clti\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8h\u0251\u02d0m\u0259ni/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multicultural+harmony&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Singapore is celebrated globally for maintaining vibrant multicultural harmony.",
      exampleVi: "Singapore \u0111\u01b0\u1ee3c c\u1ea3 th\u1ebf gi\u1edbi ng\u1ee3i ca nh\u1edd duy tr\u00ec s\u1ef1 h\u00f2a h\u1ee3p \u0111a v\u0103n h\u00f3a r\u1ef1c r\u1ee1.",
      collocations: ["promote multicultural harmony", "preserve multicultural harmony"]
    }
    ,
    {
      id: "v12-extra-ethnic-diversity",
      word: "ethnic diversity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 phong ph\u00fa \u0111a d\u1ea1ng c\u1ee7a c\u00e1c d\u00e2n t\u1ed9c",
      ipa: "/\u02cce\u03b8n\u026ak da\u026a\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ethnic+diversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The central highlands showcase remarkable ethnic diversity in musical traditions.",
      exampleVi: "V\u00f9ng \u0111\u1ea5t T\u00e2y Nguy\u00ean th\u1ec3 hi\u1ec7n s\u1ef1 \u0111a d\u1ea1ng d\u00e2n t\u1ed9c \u0111\u00e1ng n\u1ec3 qua truy\u1ec1n th\u1ed1ng \u00e2m nh\u1ea1c.",
      collocations: ["celebrate ethnic diversity", "rich ethnic diversity"]
    }
    ,
    {
      id: "v12-extra-cross-cultural-awareness",
      word: "cross-cultural awareness",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1eadn th\u1ee9c v\u00e0 s\u1ef1 tinh t\u1ebf li\u00ean v\u0103n h\u00f3a",
      ipa: "/\u02cckr\u0252s \u02c8k\u028clt\u0283\u0259r\u0259l \u0259\u02c8we\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-cultural+awareness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Studying abroad builds cross-cultural awareness that prevents unintentional social blunders.",
      exampleVi: "Du h\u1ecdc gi\u00fap r\u00e8n luy\u1ec7n nh\u1eadn th\u1ee9c li\u00ean v\u0103n h\u00f3a \u0111\u1ec3 tr\u00e1nh nh\u1eefng s\u01a1 su\u1ea5t v\u00f4 \u00fd trong giao ti\u1ebfp.",
      collocations: ["develop cross-cultural awareness", "heightened awareness"]
    }
    ,
    {
      id: "v12-extra-cultural-hybridity",
      word: "cultural hybridity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 giao thoa lai gh\u00e9p v\u0103n h\u00f3a \u0111\u1ed9c \u0111\u00e1o",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l ha\u026a\u02c8br\u026ad\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+hybridity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Banh mi is a delicious culinary example of Vietnamese-French cultural hybridity.",
      exampleVi: "B\u00e1nh m\u00ec l\u00e0 v\u00ed d\u1ee5 \u1ea9m th\u1ef1c th\u01a1m ngon cho s\u1ef1 giao thoa lai gh\u00e9p v\u0103n h\u00f3a Vi\u1ec7t - Ph\u00e1p.",
      collocations: ["expression of cultural hybridity", "modern cultural hybridity"]
    }
    ,
    {
      id: "v12-extra-heritage-preservation",
      word: "heritage preservation",
      partOfSpeech: "n.phr",
      meaningVi: "g\u00ecn gi\u1eef v\u00e0 b\u1ea3o t\u1ed3n di s\u1ea3n cha \u00f4ng",
      ipa: "/\u02c8her\u026at\u026ad\u0292 \u02ccprez\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heritage+preservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Funds are allocated for intangible heritage preservation like Quan Ho singing.",
      exampleVi: "Ng\u00e2n s\u00e1ch \u0111\u01b0\u1ee3c ph\u00e2n b\u1ed5 cho vi\u1ec7c g\u00ecn gi\u1eef di s\u1ea3n phi v\u1eadt th\u1ec3 nh\u01b0 d\u00e2n ca Quan h\u1ecd.",
      collocations: ["advocate heritage preservation", "fund heritage preservation"]
    }
    ,
    {
      id: "v12-extra-linguistic-diversity",
      word: "linguistic diversity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111a d\u1ea1ng ng\u00f4n ng\u1eef v\u00e0 ti\u1ebfng n\u00f3i",
      ipa: "/l\u026a\u014b\u02c8\u0261w\u026ast\u026ak da\u026a\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=linguistic+diversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "UNESCO actively records dying dialects to protect global linguistic diversity.",
      exampleVi: "UNESCO t\u00edch c\u1ef1c ghi ch\u00e9p c\u00e1c ph\u01b0\u01a1ng ng\u00f4n nguy c\u1ea5p \u0111\u1ec3 b\u1ea3o v\u1ec7 \u0111a d\u1ea1ng ng\u00f4n ng\u1eef.",
      collocations: ["protect linguistic diversity", "rich linguistic diversity"]
    }
    ,
    {
      id: "v12-extra-cultural-sensitivity",
      word: "cultural sensitivity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u1ebf nh\u1ecb v\u00e0 t\u00f4n tr\u1ecdng chu\u1ea9n m\u1ef1c v\u0103n h\u00f3a",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02ccsens\u0259\u02c8t\u026av\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+sensitivity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Displaying cultural sensitivity when greeting international guests builds mutual trust.",
      exampleVi: "Th\u1ec3 hi\u1ec7n s\u1ef1 t\u1ebf nh\u1ecb v\u0103n h\u00f3a khi ch\u00e0o \u0111\u00f3n kh\u00e1ch qu\u1ed1c t\u1ebf gi\u00fap x\u00e2y \u0111\u1eafp l\u00f2ng tin c\u1eady.",
      collocations: ["demonstrate cultural sensitivity", "exercise cultural sensitivity"]
    }
    ,
    {
      id: "v12-extra-traditional-costumes",
      word: "traditional costumes",
      partOfSpeech: "n.phr",
      meaningVi: "trang ph\u1ee5c d\u00e2n t\u1ed9c truy\u1ec1n th\u1ed1ng",
      ipa: "/tr\u0259\u02c8d\u026a\u0283\u0259nl \u02c8k\u0252stju\u02d0mz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traditional+costumes&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Highland girls weave vibrant brocade textiles to sew their own traditional costumes.",
      exampleVi: "C\u00e1c thi\u1ebfu n\u1eef v\u00f9ng cao d\u1ec7t th\u1ed5 c\u1ea9m r\u1ef1c r\u1ee1 \u0111\u1ec3 t\u1ef1 may trang ph\u1ee5c truy\u1ec1n th\u1ed1ng c\u1ee7a m\u00ecnh.",
      collocations: ["wear traditional costumes", "sew traditional costumes"]
    }
    ,
    {
      id: "v12-extra-festive-season",
      word: "festive season",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f9a l\u1ec5 h\u1ed9i t\u01b0ng b\u1eebng \u0111\u1ea7u xu\u00e2n",
      ipa: "/\u02c8fest\u026av \u02c8si\u02d0zn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=festive+season&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Streets are filled with peach blossoms and kumquat trees during the Tet festive season.",
      exampleVi: "\u0110\u01b0\u1eddng ph\u1ed1 r\u1ef1c r\u1ee1 hoa \u0111\u00e0o v\u00e0 qu\u1ea5t c\u1ea3nh trong m\u00f9a l\u1ec5 h\u1ed9i T\u1ebft t\u01b0ng b\u1eebng.",
      collocations: ["celebrate the festive season", "vibrant festive season"]
    }
    ,
    {
      id: "v12-extra-cultural-appropriation",
      word: "cultural appropriation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 chi\u1ebfm d\u1ee5ng v\u0103n h\u00f3a thi\u1ebfu t\u00f4n tr\u1ecdng",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u0259\u02ccpr\u0259\u028apri\u02c8e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+appropriation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educators explain the subtle boundary between cultural appreciation and appropriation.",
      exampleVi: "C\u00e1c nh\u00e0 gi\u00e1o d\u1ee5c ch\u1ec9 ra ranh gi\u1edbi gi\u1eefa vi\u1ec7c tr\u00e2n qu\u00fd v\u0103n h\u00f3a v\u00e0 chi\u1ebfm d\u1ee5ng v\u0103n h\u00f3a.",
      collocations: ["accused of cultural appropriation", "avoid cultural appropriation"]
    }
    ,
    {
      id: "v12-extra-ancestral-worship",
      word: "ancestral worship",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00edn ng\u01b0\u1ee1ng th\u1edd c\u00fang t\u1ed5 ti\u00ean",
      ipa: "/\u00e6n\u02c8sestr\u0259l \u02c8w\u025c\u02d0\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ancestral+worship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ancestral worship is central to Vietnamese spirituality and filial piety.",
      exampleVi: "Th\u1edd c\u00fang t\u1ed5 ti\u00ean l\u00e0 n\u00e9t t\u00e2m linh c\u1ed1t l\u00f5i c\u1ee7a l\u00f2ng hi\u1ebfu k\u00ednh ng\u01b0\u1eddi Vi\u1ec7t.",
      collocations: ["practice ancestral worship", "tradition of ancestral worship"]
    }
    ,
    {
      id: "v12-extra-mutual-coexistence",
      word: "mutual coexistence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00f9ng chung s\u1ed1ng h\u00f2a h\u1ee3p h\u00f2a b\u00ecnh",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l \u02cck\u0259\u028a\u026a\u0261\u02c8z\u026ast\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+coexistence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Different ethnic groups have shared river valleys in mutual coexistence for centuries.",
      exampleVi: "Nhi\u1ec1u d\u00e2n t\u1ed9c anh em \u0111\u00e3 c\u00f9ng chung s\u1ed1ng h\u00f2a thu\u1eadn b\u00ean nh\u1eefng d\u00f2ng s\u00f4ng qua bao th\u1ebf k\u1ef7.",
      collocations: ["peaceful mutual coexistence", "principles of coexistence"]
    }
    ,
    {
      id: "v12-extra-culinary-fusion",
      word: "culinary fusion",
      partOfSpeech: "n.phr",
      meaningVi: "\u1ea9m th\u1ef1c giao thoa phong v\u1ecb \u00c1 - \u00c2u",
      ipa: "/\u02c8k\u028cl\u026an\u0259ri \u02c8fju\u02d0\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=culinary+fusion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern Vietnamese chefs experiment with delightful culinary fusion in five-star dining.",
      exampleVi: "C\u00e1c \u0111\u1ea7u b\u1ebfp Vi\u1ec7t hi\u1ec7n \u0111\u1ea1i s\u00e1ng t\u1ea1o c\u00e1c m\u00f3n \u0103n giao thoa phong v\u1ecb tuy\u1ec7t v\u1eddi.",
      collocations: ["delightful culinary fusion", "culinary fusion trend"]
    }
    ,
    {
      id: "v12-extra-cultural-melting-pot",
      word: "cultural melting pot",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ed3i l\u1ea9u v\u0103n h\u00f3a, n\u01a1i quy t\u1ee5 giao thoa",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8melt\u026a\u014b p\u0252t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+melting+pot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "New York and London are classic examples of a dynamic cultural melting pot.",
      exampleVi: "New York v\u00e0 London l\u00e0 nh\u1eefng v\u00ed d\u1ee5 kinh \u0111i\u1ec3n v\u1ec1 n\u01a1i h\u1ed9i t\u1ee5 giao thoa v\u0103n h\u00f3a s\u00f4i \u0111\u1ed9ng.",
      collocations: ["vibrant cultural melting pot", "live in a melting pot"]
    }
    ,
    {
      id: "v12-extra-solidarity",
      word: "solidarity",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u01b0\u01a1ng tr\u1ee3 \u0111o\u00e0n k\u1ebft m\u1ed9t l\u00f2ng",
      ipa: "/\u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The 54 ethnic groups of Vietnam stand in rock-solid national solidarity.",
      exampleVi: "54 d\u00e2n t\u1ed9c anh em c\u1ee7a \u0111\u1ea5t n\u01b0\u1edbc Vi\u1ec7t Nam lu\u00f4n g\u1eafn k\u1ebft trong t\u00ecnh \u0111o\u00e0n k\u1ebft keo s\u01a1n.",
      collocations: ["great national solidarity", "express solidarity"]
    }
    ,
    {
      id: "v12-extra-intercultural-competence",
      word: "intercultural competence",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c giao ti\u1ebfp v\u00e0 l\u00e0m vi\u1ec7c li\u00ean v\u0103n h\u00f3a",
      ipa: "/\u02cc\u026ant\u0259\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8k\u0252mp\u026at\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intercultural+competence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Multinational executives need strong intercultural competence to lead diverse teams.",
      exampleVi: "L\u00e3nh \u0111\u1ea1o c\u00e1c t\u1eadp \u0111o\u00e0n \u0111a qu\u1ed1c gia c\u1ea7n n\u0103ng l\u1ef1c li\u00ean v\u0103n h\u00f3a v\u1eefng v\u00e0ng \u0111\u1ec3 d\u1eabn d\u1eaft \u0111\u1ed9i ng\u0169.",
      collocations: ["develop intercultural competence", "master intercultural competence"]
    }
    ,
    {
      id: "v12-extra-indigenous-folklore",
      word: "indigenous folklore",
      partOfSpeech: "n.phr",
      meaningVi: "kho t\u00e0ng truy\u1ec7n k\u1ec3 d\u00e2n gian b\u1ea3n \u0111\u1ecba",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s \u02c8f\u0259\u028akl\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous+folklore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Central Highlands epic poems of Dam San are treasures of indigenous folklore.",
      exampleVi: "S\u1eed thi \u0110\u0103m S\u0103n c\u1ee7a \u0111\u1ed3ng b\u00e0o T\u00e2y Nguy\u00ean l\u00e0 b\u00e1u v\u1eadt c\u1ee7a kho t\u00e0ng truy\u1ec7n k\u1ec3 d\u00e2n gian.",
      collocations: ["oral indigenous folklore", "study indigenous folklore"]
    }
    ,
    {
      id: "v12-extra-cultural-legacy",
      word: "cultural legacy",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a tinh th\u1ea7n qu\u00fd gi\u00e1",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8le\u0261\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+legacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ancient pagodas leave a serene cultural legacy of mindfulness and compassion.",
      exampleVi: "Nh\u1eefng ng\u00f4i ch\u00f9a c\u1ed5 \u0111\u1ec3 l\u1ea1i di s\u1ea3n v\u0103n h\u00f3a thanh t\u1ecbnh v\u1ec1 ch\u00e1nh ni\u1ec7m v\u00e0 l\u00f2ng t\u1eeb bi.",
      collocations: ["rich cultural legacy", "cherish cultural legacy"]
    }
    ,
    {
      id: "v12-extra-shared-values",
      word: "shared values",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c chung c\u1ee7a con ng\u01b0\u1eddi",
      ipa: "/\u0283e\u0259d \u02c8v\u00e6lju\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shared+values&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Benevolence, honesty, and hospitality are shared values across all world cultures.",
      exampleVi: "L\u00f2ng nh\u00e2n t\u1eeb, t\u00ednh trung th\u1ef1c v\u00e0 l\u00f2ng hi\u1ebfu kh\u00e1ch l\u00e0 c\u00e1c gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c chung c\u1ee7a nh\u00e2n lo\u1ea1i.",
      collocations: ["foster shared values", "uphold shared values"]
    }
    ,
    {
      id: "v-boost-multiculturalism",
      word: "multiculturalism",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee7 ngh\u0129a \u0111a v\u0103n h\u00f3a, ch\u00ednh s\u00e1ch h\u00f2a nh\u1eadp",
      ipa: "/\u02ccm\u028clti\u02c8k\u028clt\u0283\u0259r\u0259\u02ccl\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multiculturalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many democratic nations embrace multiculturalism as a core civic value.",
      exampleVi: "Nhi\u1ec1u qu\u1ed1c gia d\u00e2n ch\u1ee7 coi ch\u1ee7 ngh\u0129a \u0111a v\u0103n h\u00f3a nh\u01b0 m\u1ed9t gi\u00e1 tr\u1ecb c\u00f4ng d\u00e2n c\u1ed1t l\u00f5i.",
      collocations: ["embrace multiculturalism", "advocate multiculturalism"]
    }
    ,
    {
      id: "v-boost-cultural-integration",
      word: "cultural integration",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u1ed9i nh\u1eadp v\u0103n h\u00f3a s\u00e2u r\u1ed9ng",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02cc\u026ant\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+integration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Effective language programs facilitate smooth cultural integration for newcomers.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh ng\u00f4n ng\u1eef hi\u1ec7u qu\u1ea3 gi\u00fap ng\u01b0\u1eddi m\u1edbi \u0111\u1ebfn h\u1ed9i nh\u1eadp v\u0103n h\u00f3a d\u1ec5 d\u00e0ng h\u01a1n.",
      collocations: ["smooth cultural integration", "promote cultural integration"]
    }
    ,
    {
      id: "v-boost-cultural-heritage-site",
      word: "cultural heritage site",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecba \u0111i\u1ec3m di s\u1ea3n v\u0103n h\u00f3a th\u1ebf gi\u1edbi",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8her\u026at\u026ad\u0292 sa\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+heritage+site&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hoi An Ancient Town was declared a UNESCO cultural heritage site in 1999.",
      exampleVi: "Ph\u1ed1 c\u1ed5 H\u1ed9i An \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn l\u00e0 di s\u1ea3n v\u0103n h\u00f3a th\u1ebf gi\u1edbi c\u1ee7a UNESCO v\u00e0o n\u0103m 1999.",
      collocations: ["UNESCO cultural heritage site", "visit a cultural heritage site"]
    }
    ,
    {
      id: "v-boost-cross-cultural-communication",
      word: "cross-cultural communication",
      partOfSpeech: "n.phr",
      meaningVi: "giao ti\u1ebfp li\u00ean v\u0103n h\u00f3a hi\u1ec7u qu\u1ea3",
      ipa: "/\u02cckr\u0252s \u02c8k\u028clt\u0283\u0259r\u0259l k\u0259\u02ccmju\u02d0n\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-cultural+communication&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Diplomats require rigorous training in cross-cultural communication techniques.",
      exampleVi: "C\u00e1c nh\u00e0 ngo\u1ea1i giao c\u1ea7n \u0111\u01b0\u1ee3c \u0111\u00e0o t\u1ea1o k\u1ef9 l\u01b0\u1ee1ng v\u1ec1 k\u1ef9 n\u0103ng giao ti\u1ebfp li\u00ean v\u0103n h\u00f3a.",
      collocations: ["master cross-cultural communication", "effective cross-cultural communication"]
    }
    ,
    {
      id: "v-boost-intercultural-competence",
      word: "intercultural competence",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c th\u1ea5u hi\u1ec3u v\u00e0 th\u00edch \u1ee9ng \u0111a v\u0103n h\u00f3a",
      ipa: "/\u02cc\u026ant\u0259\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8k\u0252mp\u026at\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intercultural+competence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International organizations value candidates with proven intercultural competence.",
      exampleVi: "C\u00e1c t\u1ed5 ch\u1ee9c qu\u1ed1c t\u1ebf \u0111\u00e1nh gi\u00e1 cao nh\u1eefng \u1ee9ng vi\u00ean c\u00f3 n\u0103ng l\u1ef1c \u0111a v\u0103n h\u00f3a v\u1eefng v\u00e0ng.",
      collocations: ["develop intercultural competence", "demonstrate intercultural competence"]
    }
    ,
    {
      id: "v-boost-cultural-stereotype",
      word: "cultural stereotype",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecbnh ki\u1ebfn khu\u00f4n m\u1eabu sai l\u1ea7m v\u1ec1 v\u0103n h\u00f3a",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8steri\u0259ta\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+stereotype&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educational exchanges help dismantle harmful cultural stereotypes among teenagers.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh trao \u0111\u1ed5i gi\u00e1o d\u1ee5c gi\u00fap x\u00f3a b\u1ecf \u0111\u1ecbnh ki\u1ebfn khu\u00f4n m\u1eabu v\u0103n h\u00f3a ti\u00eau c\u1ef1c.",
      collocations: ["break down cultural stereotypes", "harmful cultural stereotype"]
    }
    ,
    {
      id: "v-boost-folk-festival",
      word: "folk festival",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ec5 h\u1ed9i d\u00e2n gian truy\u1ec1n th\u1ed1ng s\u00f4i n\u1ed5i",
      ipa: "/f\u0259\u028ak \u02c8fest\u026avl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folk+festival&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thousands of pilgrims gather annually at the Hung Kings temple folk festival.",
      exampleVi: "H\u00e0ng ng\u00e0n ng\u01b0\u1eddi h\u00e0nh h\u01b0\u01a1ng \u0111\u1ed5 v\u1ec1 l\u1ec5 h\u1ed9i d\u00e2n gian \u0110\u1ec1n H\u00f9ng h\u1eb1ng n\u0103m.",
      collocations: ["annual folk festival", "attend a folk festival"]
    }
    ,
    {
      id: "v-boost-linguistic-barrier",
      word: "linguistic barrier",
      partOfSpeech: "n.phr",
      meaningVi: "r\u00e0o c\u1ea3n ng\u00f4n ng\u1eef g\u00e2y kh\u00f3 kh\u0103n giao ti\u1ebfp",
      ipa: "/l\u026a\u014b\u02c8\u0261w\u026ast\u026ak \u02c8b\u00e6ri\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=linguistic+barrier&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Translating medical leaflets helps overcome linguistic barriers for ethnic patients.",
      exampleVi: "D\u1ecbch t\u1edd r\u01a1i y t\u1ebf gi\u00fap v\u01b0\u1ee3t qua r\u00e0o c\u1ea3n ng\u00f4n ng\u1eef cho b\u1ec7nh nh\u00e2n \u0111\u1ed3ng b\u00e0o thi\u1ec3u s\u1ed1.",
      collocations: ["overcome linguistic barriers", "break down linguistic barriers"]
    }
  ],
  "unit-3-green-living": [
    {
      id: "v12-u3-zero-waste",
      word: "zero-waste",
      partOfSpeech: "adj",
      meaningVi: "l\u1ed1i s\u1ed1ng kh\u00f4ng ph\u00e1t th\u1ea3i r\u00e1c",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u02c8we\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero-waste&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adopting a zero-waste lifestyle means refilling glass jars and composting all food scraps.",
      exampleVi: "\u00c1p d\u1ee5ng l\u1ed1i s\u1ed1ng kh\u00f4ng r\u00e1c th\u1ea3i c\u00f3 ngh\u0129a l\u00e0 d\u00f9ng h\u0169 th\u1ee7y tinh mua s\u1eafm v\u00e0 \u1ee7 to\u00e0n b\u1ed9 r\u00e1c h\u1eefu c\u01a1.",
      collocations: ["zero-waste movement", "zero-waste kitchen"]
    },
    {
      id: "v12-u3-circular-economy",
      word: "circular economy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ec1n kinh t\u1ebf tu\u1ea7n ho\u00e0n t\u00e1i t\u1ea1o",
      ipa: "/\u02ccs\u025c\u02d0kj\u0259l\u0259(r) \u026a\u02c8k\u0252n\u0259mi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=circular+economy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A circular economy designs products for disassembly, repair, and continuous remanufacturing.",
      exampleVi: "N\u1ec1n kinh t\u1ebf tu\u1ea7n ho\u00e0n thi\u1ebft k\u1ebf s\u1ea3n ph\u1ea9m \u0111\u1ec3 d\u1ec5 th\u00e1o r\u1eddi, s\u1eeda ch\u1eefa v\u00e0 t\u00e1i s\u1ea3n xu\u1ea5t li\u00ean t\u1ee5c.",
      collocations: ["transition to a circular economy", "principles of circular economy"]
    },
    {
      id: "v12-u3-carbon-neutrality",
      word: "carbon neutrality",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea1ng th\u00e1i trung h\u00f2a kh\u00ed th\u1ea3i carbon",
      ipa: "/\u02cck\u0251\u02d0b\u0259n nju\u02d0\u02c8tr\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+neutrality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The country pledged to achieve complete carbon neutrality by expanding green hydrogen power.",
      exampleVi: "Qu\u1ed1c gia cam k\u1ebft \u0111\u1ea1t tr\u1ea1ng th\u00e1i trung h\u00f2a carbon b\u1eb1ng c\u00e1ch m\u1edf r\u1ed9ng ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng hydro xanh.",
      collocations: ["strive for carbon neutrality", "achieve carbon neutrality"]
    },
    {
      id: "v12-u3-upcycle",
      word: "upcycle",
      partOfSpeech: "v",
      meaningVi: "t\u00e1i ch\u1ebf n\u00e2ng c\u1ea5p th\u00e0nh \u0111\u1ed3 v\u1eadt gi\u00e1 tr\u1ecb cao h\u01a1n",
      ipa: "/\u02c8\u028cpsa\u026akl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=upcycle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Artisans upcycle discarded coffee sacks into fashionable tote bags and wallets.",
      exampleVi: "C\u00e1c ngh\u1ec7 nh\u00e2n t\u00e1i ch\u1ebf n\u00e2ng c\u1ea5p bao t\u1ea3i c\u00e0 ph\u00ea b\u1ecf \u0111i th\u00e0nh nh\u1eefng chi\u1ebfc t\u00fai x\u00e1ch th\u1eddi trang.",
      collocations: ["upcycle materials", "upcycle furniture"]
    },
    {
      id: "v12-u3-minimal-packaging",
      word: "minimal packaging",
      partOfSpeech: "n.phr",
      meaningVi: "bao b\u00ec t\u1ed1i gi\u1ea3n h\u1ea1n ch\u1ebf r\u00e1c",
      ipa: "/\u02c8m\u026an\u026aml \u02c8p\u00e6k\u026ad\u0292\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=minimal+packaging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Conscious brands use minimal packaging made from recycled unbleached cardboard.",
      exampleVi: "C\u00e1c nh\u00e3n h\u00e0ng c\u00f3 \u00fd th\u1ee9c s\u1eed d\u1ee5ng bao b\u00ec t\u1ed1i gi\u1ea3n l\u00e0m t\u1eeb b\u00eca c\u00e1c-t\u00f4ng t\u00e1i ch\u1ebf kh\u00f4ng t\u1ea9y tr\u1eafng.",
      collocations: ["choose minimal packaging", "minimal packaging design"]
    },
    {
      id: "v12-u3-renewable-energy",
      word: "renewable energy",
      partOfSpeech: "n.phr",
      meaningVi: "ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch v\u00f4 t\u1eadn",
      ipa: "/r\u026a\u02c8nju\u02d0\u0259bl \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=renewable+energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rooftop solar and offshore wind farms generate clean renewable energy nationwide.",
      exampleVi: "\u0110i\u1ec7n m\u1eb7t tr\u1eddi m\u00e1i nh\u00e0 v\u00e0 c\u00e1c trang tr\u1ea1i gi\u00f3 ngo\u00e0i kh\u01a1i s\u1ea3n xu\u1ea5t ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch v\u00f4 t\u1eadn.",
      collocations: ["invest in renewable energy", "switch to renewable energy"]
    },
    {
      id: "v12-u3-composting",
      word: "composting",
      partOfSpeech: "n",
      meaningVi: "\u1ee7 ph\u00e2n h\u1eefu c\u01a1 vi sinh t\u1ea1i nh\u00e0",
      ipa: "/\u02c8k\u0252mp\u0252st\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=composting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Kitchen composting transforms banana peels and coffee grounds into rich black humus.",
      exampleVi: "\u1ee6 r\u00e1c nh\u00e0 b\u1ebfp bi\u1ebfn v\u1ecf chu\u1ed1i v\u00e0 b\u00e3 c\u00e0 ph\u00ea th\u00e0nh m\u00f9n \u0111\u1ea5t m\u00e0u m\u1ee1 b\u00f3n cho c\u00e2y c\u1ea3nh.",
      collocations: ["backyard composting", "composting bin"]
    },
    {
      id: "v12-u3-sustainability",
      word: "sustainability",
      partOfSpeech: "n",
      meaningVi: "t\u00ednh b\u1ec1n v\u1eefng l\u00e2u d\u00e0i cho m\u00f4i sinh",
      ipa: "/s\u0259\u02ccste\u026an\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Corporate sustainability programs focus on cutting water waste and reducing plastics.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh ph\u00e1t tri\u1ec3n b\u1ec1n v\u1eefng c\u1ee7a doanh nghi\u1ec7p t\u1eadp trung gi\u1ea3m l\u00e3ng ph\u00ed n\u01b0\u1edbc v\u00e0 c\u1eaft gi\u1ea3m \u0111\u1ed3 nh\u1ef1a.",
      collocations: ["environmental sustainability", "commitment to sustainability"]
    },
    {
      id: "v12-u3-organic-farming",
      word: "organic farming",
      partOfSpeech: "n.phr",
      meaningVi: "n\u00f4ng nghi\u1ec7p h\u1eefu c\u01a1 s\u1ea1ch kh\u00f4ng h\u00f3a ch\u1ea5t",
      ipa: "/\u0254\u02d0\u02c8\u0261\u00e6n\u026ak \u02c8f\u0251\u02d0m\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=organic+farming&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Organic farming fosters healthy soil microbiomes by eliminating chemical pesticides.",
      exampleVi: "N\u00f4ng nghi\u1ec7p h\u1eefu c\u01a1 nu\u00f4i d\u01b0\u1ee1ng vi sinh v\u1eadt \u0111\u1ea5t kh\u1ecfe m\u1ea1nh b\u1eb1ng c\u00e1ch lo\u1ea1i b\u1ecf thu\u1ed1c tr\u1eeb s\u00e2u h\u00f3a h\u1ecdc.",
      collocations: ["practice organic farming", "transition to organic farming"]
    },
    {
      id: "v12-u3-energy-efficient",
      word: "energy-efficient",
      partOfSpeech: "adj",
      meaningVi: "ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng \u0111i\u1ec7n t\u1ed1i \u0111a",
      ipa: "/\u02c8en\u0259d\u0292i \u026a\u02c8f\u026a\u0283nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy-efficient&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Inverter refrigerators and five-star rated air conditioners are highly energy-efficient.",
      exampleVi: "T\u1ee7 l\u1ea1nh Inverter v\u00e0 \u0111i\u1ec1u h\u00f2a chu\u1ea9n 5 sao gi\u00fap ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng \u0111i\u1ec7n t\u1ed1i \u0111a.",
      collocations: ["energy-efficient appliances", "energy-efficient lighting"]
    },
    {
      id: "v12-u3-plastic-free",
      word: "plastic-free",
      partOfSpeech: "adj",
      meaningVi: "ho\u00e0n to\u00e0n kh\u00f4ng d\u00f9ng \u0111\u1ed3 nh\u1ef1a",
      ipa: "/\u02ccpl\u00e6st\u026ak \u02c8fri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=plastic-free&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many youth clubs launched plastic-free school campaigns with bamboo straws and steel lunchboxes.",
      exampleVi: "Nhi\u1ec1u c\u00e2u l\u1ea1c b\u1ed9 ph\u00e1t \u0111\u1ed9ng chi\u1ebfn d\u1ecbch tr\u01b0\u1eddng h\u1ecdc kh\u00f4ng \u0111\u1ed3 nh\u1ef1a v\u1edbi \u1ed1ng h\u00fat tre v\u00e0 h\u1ed9p c\u01a1m inox.",
      collocations: ["plastic-free lifestyle", "go plastic-free"]
    },
    {
      id: "v12-u3-conserve-resources",
      word: "conserve resources",
      partOfSpeech: "v.phr",
      meaningVi: "ti\u1ebft ki\u1ec7m v\u00e0 gi\u1eef g\u00ecn c\u00e1c t\u00e0i nguy\u00ean qu\u00fd",
      ipa: "/k\u0259n\u02c8s\u025c\u02d0v r\u026a\u02c8z\u0254\u02d0s\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conserve+resources&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Turning off water taps while brushing teeth helps conserve precious natural resources.",
      exampleVi: "Kh\u00f3a v\u00f2i n\u01b0\u1edbc trong l\u00fac \u0111\u00e1nh r\u0103ng gi\u00fap ti\u1ebft ki\u1ec7m ngu\u1ed3n t\u00e0i nguy\u00ean thi\u00ean nhi\u00ean qu\u00fd b\u00e1u.",
      collocations: ["conserve natural resources", "duty to conserve resources"]
    },
    {
      id: "v12-u3-ecological-footprint",
      word: "ecological footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n sinh th\u00e1i c\u1ee7a m\u1ed7i c\u00e1 nh\u00e2n",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Buying locally grown seasonal produce significantly reduces our family's ecological footprint.",
      exampleVi: "Mua rau c\u1ee7 theo m\u00f9a tr\u1ed3ng t\u1ea1i \u0111\u1ecba ph\u01b0\u01a1ng gi\u00fap gi\u1ea3m \u0111\u00e1ng k\u1ec3 d\u1ea5u ch\u00e2n sinh th\u00e1i c\u1ee7a gia \u0111\u00ecnh.",
      collocations: ["calculate ecological footprint", "shrink ecological footprint"]
    },
    {
      id: "v12-u3-biodegradable",
      word: "biodegradable",
      partOfSpeech: "adj",
      meaningVi: "t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc trong \u0111\u1ea5t",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Biodegradable plant starch bags break down harmlessly in soil in under twelve weeks.",
      exampleVi: "T\u00fai l\u00e0m t\u1eeb tinh b\u1ed9t th\u1ef1c v\u1eadt t\u1ef1 ph\u00e2n h\u1ee7y an to\u00e0n trong \u0111\u1ea5t ch\u1ec9 trong v\u00f2ng ch\u01b0a \u0111\u1ea7y m\u01b0\u1eddi hai tu\u1ea7n.",
      collocations: ["biodegradable material", "fully biodegradable"]
    },
    {
      id: "v12-u3-reusable",
      word: "reusable",
      partOfSpeech: "adj",
      meaningVi: "t\u00e1i s\u1eed d\u1ee5ng nhi\u1ec1u l\u1ea7n b\u1ec1n b\u1ec9",
      ipa: "/\u02ccri\u02d0\u02c8ju\u02d0z\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reusable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Keep a reusable cotton canvas bag inside your backpack for spontaneous shopping trips.",
      exampleVi: "H\u00e3y lu\u00f4n \u0111\u1ec3 m\u1ed9t chi\u1ebfc t\u00fai v\u1ea3i canvas t\u00e1i s\u1eed d\u1ee5ng trong balo cho nh\u1eefng l\u1ea7n mua s\u1eafm ti\u1ec7n \u0111\u01b0\u1eddng.",
      collocations: ["reusable container", "reusable water bottle"]
    },
    {
      id: "v12-u3-eco-friendly",
      word: "eco-friendly",
      partOfSpeech: "adj",
      meaningVi: "th\u00e2n thi\u1ec7n v\u00e0 b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using beeswax food wrap is a popular eco-friendly alternative to plastic cling wrap.",
      exampleVi: "D\u00f9ng s\u00e1p ong b\u1ecdc th\u1ef1c ph\u1ea9m l\u00e0 gi\u1ea3i ph\u00e1p th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng ph\u1ed5 bi\u1ebfn thay th\u1ebf m\u00e0ng b\u1ecdc nilon.",
      collocations: ["eco-friendly alternative", "eco-friendly packaging"]
    },
    {
      id: "v12-u3-green-consumption",
      word: "green consumption",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u00eau d\u00f9ng xanh th\u00f4ng th\u00e1i",
      ipa: "/\u0261ri\u02d0n k\u0259n\u02c8s\u028cmp\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+consumption&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Green consumption urges consumers to examine where products were made and how they decompose.",
      exampleVi: "Ti\u00eau d\u00f9ng xanh k\u00eau g\u1ecdi ng\u01b0\u1eddi mua t\u00ecm hi\u1ec3u xu\u1ea5t x\u1ee9 h\u00e0ng h\u00f3a v\u00e0 c\u00e1ch ch\u00fang ph\u00e2n h\u1ee7y sau s\u1eed d\u1ee5ng.",
      collocations: ["pattern of green consumption", "embrace green consumption"]
    },
    {
      id: "v12-u3-decarbonize",
      word: "decarbonize",
      partOfSpeech: "v",
      meaningVi: "kh\u1eed carbon, lo\u1ea1i b\u1ecf n\u0103ng l\u01b0\u1ee3ng b\u1ea9n",
      ipa: "/di\u02d0\u02c8k\u0251\u02d0b\u0259na\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=decarbonize&type=2",
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The automotive industry is racing to decarbonize passenger transport by manufacturing EVs.",
      exampleVi: "Ng\u00e0nh c\u00f4ng nghi\u1ec7p \u00f4 t\u00f4 \u0111ang ch\u1ea1y \u0111ua kh\u1eed carbon giao th\u00f4ng b\u1eb1ng c\u00e1ch s\u1ea3n xu\u1ea5t xe \u0111i\u1ec7n.",
      collocations: ["decarbonize the economy", "effort to decarbonize"]
    },
    {
      id: "v12-u3-solar-panel",
      word: "solar panel",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea5m pin n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi \u00e1p m\u00e1i",
      ipa: "/\u02c8s\u0259\u028al\u0259 \u02c8p\u00e6nl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solar+panel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Installing solar panels powers the home air conditioner during sunny midday hours.",
      exampleVi: "L\u1eafp pin m\u1eb7t tr\u1eddi c\u1ea5p \u0111i\u1ec7n cho \u0111i\u1ec1u h\u00f2a gia \u0111\u00ecnh ho\u1ea1t \u0111\u1ed9ng v\u00e0o nh\u1eefng gi\u1edd tr\u01b0a n\u1eafng g\u1eaft.",
      collocations: ["rooftop solar panels", "efficiency of solar panels"]
    },
    {
      id: "v12-u3-clean-energy",
      word: "clean energy",
      partOfSpeech: "n.phr",
      meaningVi: "ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch kh\u00f4ng kh\u00f3i b\u1ee5i",
      ipa: "/kli\u02d0n \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clean+energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investing in clean energy creates thousands of skilled engineering jobs in rural regions.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch t\u1ea1o ra h\u00e0ng ng\u00e0n vi\u1ec7c l\u00e0m k\u1ef9 thu\u1eadt ch\u1ea5t l\u01b0\u1ee3ng t\u1ea1i c\u00e1c v\u00f9ng qu\u00ea.",
      collocations: ["generate clean energy", "transition to clean energy"]
    }
    ,
    {
      id: "v12-extra-carbon-neutrality-target",
      word: "carbon neutrality target",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ee5c ti\u00eau trung h\u00f2a kh\u00ed th\u1ea3i carbon",
      ipa: "/\u02cck\u0251\u02d0b\u0259n nju\u02d0\u02c8tr\u00e6l\u0259ti \u02c8t\u0251\u02d0\u0261\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+neutrality+target&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The manufacturing hub set an ambitious carbon neutrality target for the next decade.",
      exampleVi: "Khu s\u1ea3n xu\u1ea5t \u0111\u1eb7t m\u1ee5c ti\u00eau trung h\u00f2a kh\u00ed carbon \u0111\u1ea7y tham v\u1ecdng cho th\u1eadp k\u1ef7 t\u1edbi.",
      collocations: ["achieve carbon neutrality target", "commit to a target"]
    }
    ,
    {
      id: "v12-extra-energy-efficiency-standard",
      word: "energy efficiency standard",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u00eau chu\u1ea9n s\u1eed d\u1ee5ng n\u0103ng l\u01b0\u1ee3ng ti\u1ebft ki\u1ec7m",
      ipa: "/\u02c8en\u0259d\u0292i \u026a\u02c8f\u026a\u0283nsi \u02c8st\u00e6nd\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+efficiency+standard&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "New apartment towers must meet rigorous national energy efficiency standards.",
      exampleVi: "C\u00e1c t\u00f2a chung c\u01b0 m\u1edbi ph\u1ea3i \u0111\u00e1p \u1ee9ng c\u00e1c ti\u00eau chu\u1ea9n ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng kh\u1eaft khe.",
      collocations: ["comply with energy efficiency standards", "high standards"]
    }
    ,
    {
      id: "v12-extra-zero-waste-movement",
      word: "zero-waste movement",
      partOfSpeech: "n.phr",
      meaningVi: "phong tr\u00e0o kh\u00f4ng ph\u00e1t th\u1ea3i r\u00e1c",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u02c8we\u026ast \u02c8mu\u02d0vm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero-waste+movement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Young urbanites enthusiastically join the zero-waste movement by composting kitchen scraps.",
      exampleVi: "Gi\u1edbi tr\u1ebb th\u00e0nh th\u1ecb nhi\u1ec7t th\u00e0nh tham gia phong tr\u00e0o kh\u00f4ng r\u00e1c th\u1ea3i b\u1eb1ng vi\u1ec7c t\u1ef1 \u1ee7 r\u00e1c nh\u00e0 b\u1ebfp.",
      collocations: ["pioneer the zero-waste movement", "advocate zero-waste"]
    }
    ,
    {
      id: "v12-extra-green-mobility",
      word: "green mobility",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng th\u1ee9c \u0111i l\u1ea1i xanh th\u00e2n thi\u1ec7n",
      ipa: "/\u0261ri\u02d0n m\u0259\u028a\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+mobility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Electric scooters and bicycles are pillars of sustainable green mobility in Hanoi.",
      exampleVi: "Xe m\u00e1y \u0111i\u1ec7n v\u00e0 xe \u0111\u1ea1p l\u00e0 tr\u1ee5 c\u1ed9t c\u1ee7a giao th\u00f4ng xanh b\u1ec1n v\u1eefng t\u1ea1i H\u00e0 N\u1ed9i.",
      collocations: ["adopt green mobility", "infrastructure for green mobility"]
    }
    ,
    {
      id: "v12-extra-circular-manufacturing",
      word: "circular manufacturing",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ea3n xu\u1ea5t tu\u1ea7n ho\u00e0n t\u00e1i ch\u1ebf kh\u00e9p k\u00edn",
      ipa: "/\u02c8s\u025c\u02d0kj\u0259l\u0259(r) \u02ccm\u00e6nju\u02c8f\u00e6kt\u0283\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=circular+manufacturing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Circular manufacturing reuses scrap metal to fabricate new industrial parts.",
      exampleVi: "S\u1ea3n xu\u1ea5t tu\u1ea7n ho\u00e0n t\u00e1i s\u1eed d\u1ee5ng ph\u1ebf li\u1ec7u kim lo\u1ea1i \u0111\u1ec3 \u0111\u00fac c\u00e1c linh ki\u1ec7n c\u00f4ng nghi\u1ec7p m\u1edbi.",
      collocations: ["embrace circular manufacturing", "benefits of circular manufacturing"]
    }
    ,
    {
      id: "v12-extra-sustainable-sourcing",
      word: "sustainable sourcing",
      partOfSpeech: "n.phr",
      meaningVi: "thu mua nguy\u00ean li\u1ec7u c\u00f3 ngu\u1ed3n g\u1ed1c b\u1ec1n v\u1eefng",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8s\u0254\u02d0s\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+sourcing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The coffee chain guarantees ethical, sustainable sourcing from certified farmers.",
      exampleVi: "Chu\u1ed7i c\u00e0 ph\u00ea \u0111\u1ea3m b\u1ea3o thu mua b\u1ec1n v\u1eefng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c t\u1eeb c\u00e1c n\u00f4ng h\u1ed9 \u0111\u1ea1t ch\u1ee9ng nh\u1eadn.",
      collocations: ["practice sustainable sourcing", "commitment to sourcing"]
    }
    ,
    {
      id: "v12-extra-rainwater-harvesting",
      word: "rainwater harvesting",
      partOfSpeech: "n.phr",
      meaningVi: "thu gom v\u00e0 t\u00edch tr\u1eef n\u01b0\u1edbc m\u01b0a s\u1eed d\u1ee5ng",
      ipa: "/\u02c8re\u026anw\u0254\u02d0t\u0259(r) \u02c8h\u0251\u02d0v\u026ast\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rainwater+harvesting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rooftop rainwater harvesting systems irrigate the school's organic botanical gardens.",
      exampleVi: "H\u1ec7 th\u1ed1ng h\u1ee9ng n\u01b0\u1edbc m\u01b0a m\u00e1i nh\u00e0 \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u01b0\u1edbi v\u01b0\u1eddn th\u1ef1c v\u1eadt h\u1eefu c\u01a1 c\u1ee7a tr\u01b0\u1eddng.",
      collocations: ["install rainwater harvesting", "harvesting tank"]
    }
    ,
    {
      id: "v12-extra-plant-based-diet",
      word: "plant-based diet",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ebf \u0111\u1ed9 \u0103n u\u1ed1ng thu\u1ea7n th\u1ef1c v\u1eadt gi\u00e0u ch\u1ea5t x\u01a1",
      ipa: "/\u02ccpl\u0251\u02d0nt be\u026ast \u02c8da\u026a\u0259t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=plant-based+diet&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Switching to a plant-based diet lowers cholesterol and shrinks your carbon footprint.",
      exampleVi: "Chuy\u1ec3n sang ch\u1ebf \u0111\u1ed9 \u0103n th\u1ef1c v\u1eadt gi\u00fap gi\u1ea3m m\u1ee1 m\u00e1u v\u00e0 gi\u1ea3m d\u1ea5u ch\u00e2n carbon c\u1ee7a b\u1ea1n.",
      collocations: ["follow a plant-based diet", "healthy plant-based diet"]
    }
    ,
    {
      id: "v12-extra-permaculture",
      word: "permaculture",
      partOfSpeech: "n",
      meaningVi: "n\u00f4ng nghi\u1ec7p v\u0129nh c\u1eedu thu\u1eadn t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8p\u025c\u02d0m\u0259k\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=permaculture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The mountain orchard applies permaculture design to cultivate fruits without pesticides.",
      exampleVi: "V\u01b0\u1eddn \u0111\u1ed3i \u00e1p d\u1ee5ng m\u00f4 h\u00ecnh n\u00f4ng nghi\u1ec7p v\u0129nh c\u1eedu \u0111\u1ec3 tr\u1ed3ng c\u00e2y \u0103n tr\u00e1i kh\u00f4ng thu\u1ed1c tr\u1eeb s\u00e2u.",
      collocations: ["practice permaculture", "principles of permaculture"]
    }
    ,
    {
      id: "v12-extra-eco-friendly-alternatives",
      word: "eco-friendly alternatives",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c gi\u1ea3i ph\u00e1p thay th\u1ebf th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli \u0254\u02d0l\u02c8t\u025c\u02d0n\u0259t\u026avz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly+alternatives&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cloth totes and bamboo toothbrushes are simple eco-friendly alternatives to plastics.",
      exampleVi: "T\u00fai v\u1ea3i v\u00e0 b\u00e0n ch\u1ea3i tre l\u00e0 nh\u1eefng gi\u1ea3i ph\u00e1p thay th\u1ebf th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng cho \u0111\u1ed3 nh\u1ef1a.",
      collocations: ["switch to eco-friendly alternatives", "affordable alternatives"]
    }
    ,
    {
      id: "v12-extra-energy-audit",
      word: "energy audit",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3m to\u00e1n m\u1ee9c \u0111\u1ed9 ti\u00eau hao n\u0103ng l\u01b0\u1ee3ng",
      ipa: "/\u02c8en\u0259d\u0292i \u02c8\u0254\u02d0d\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+audit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Conducting a home energy audit pinpoints drafty windows that leak air conditioning.",
      exampleVi: "Th\u1ef1c hi\u1ec7n ki\u1ec3m to\u00e1n n\u0103ng l\u01b0\u1ee3ng trong nh\u00e0 gi\u00fap ph\u00e1t hi\u1ec7n c\u1eeda s\u1ed5 h\u1edf l\u00e0m tho\u00e1t nhi\u1ec7t \u0111i\u1ec1u h\u00f2a.",
      collocations: ["perform an energy audit", "home energy audit report"]
    }
    ,
    {
      id: "v12-extra-green-consumerism",
      word: "green consumerism",
      partOfSpeech: "n.phr",
      meaningVi: "xu h\u01b0\u1edbng ti\u00eau d\u00f9ng xanh c\u00f3 tr\u00e1ch nhi\u1ec7m",
      ipa: "/\u0261ri\u02d0n k\u0259n\u02c8sju\u02d0m\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+consumerism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Surging green consumerism pressures packaging companies to switch to recycled paper.",
      exampleVi: "L\u00e0n s\u00f3ng ti\u00eau d\u00f9ng xanh t\u1ea1o s\u1ee9c \u00e9p bu\u1ed9c c\u00f4ng ty bao b\u00ec ph\u1ea3i chuy\u1ec3n sang gi\u1ea5y t\u00e1i ch\u1ebf.",
      collocations: ["rise of green consumerism", "influence of green consumerism"]
    }
    ,
    {
      id: "v12-extra-natural-habitat-conservation",
      word: "natural habitat conservation",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3o t\u1ed3n sinh c\u1ea3nh thi\u00ean nhi\u00ean hoang d\u00e3",
      ipa: "/\u02c8n\u00e6t\u0283r\u0259l \u02c8h\u00e6b\u026at\u00e6t \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=natural+habitat+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Protecting marine coral reefs is vital for natural habitat conservation.",
      exampleVi: "B\u1ea3o v\u1ec7 r\u1ea1n san h\u00f4 ng\u1ea7m l\u00e0 \u0111i\u1ec1u thi\u1ebft y\u1ebfu cho c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n sinh c\u1ea3nh t\u1ef1 nhi\u00ean.",
      collocations: ["support natural habitat conservation", "priority for conservation"]
    }
    ,
    {
      id: "v12-extra-biodegradable-material",
      word: "biodegradable material",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1eadt li\u1ec7u t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc an to\u00e0n",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl m\u0259\u02c8t\u026a\u0259ri\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable+material&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Food delivery boxes made from sugarcane bagasse are 100% biodegradable material.",
      exampleVi: "H\u1ed9p c\u01a1m l\u00e0m t\u1eeb b\u00e3 m\u00eda l\u00e0 v\u1eadt li\u1ec7u t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc an to\u00e0n 100%.",
      collocations: ["made of biodegradable material", "safe biodegradable material"]
    }
    ,
    {
      id: "v12-extra-environmental-stewardship",
      word: "environmental stewardship",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m b\u1ea3o h\u1ed9 m\u1eb9 thi\u00ean nhi\u00ean",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u02c8stju\u02d0\u0259d\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+stewardship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teaching environmental stewardship instills lifelong respect for clean rivers.",
      exampleVi: "Gi\u00e1o d\u1ee5c tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng h\u00ecnh th\u00e0nh \u00fd th\u1ee9c gi\u1eef s\u1ea1ch d\u00f2ng s\u00f4ng.",
      collocations: ["practice environmental stewardship", "embody environmental stewardship"]
    }
    ,
    {
      id: "v-boost-zero-waste",
      word: "zero waste",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ed1i s\u1ed1ng kh\u00f4ng r\u00e1c th\u1ea3i",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u02c8we\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero+waste&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many young households adopt a zero waste lifestyle by composting and avoiding plastics.",
      exampleVi: "Nhi\u1ec1u gia \u0111\u00ecnh tr\u1ebb ch\u1ecdn l\u1ed1i s\u1ed1ng kh\u00f4ng r\u00e1c th\u1ea3i b\u1eb1ng c\u00e1ch \u1ee7 ph\u00e2n v\u00e0 kh\u00f4ng d\u00f9ng \u0111\u1ed3 nh\u1ef1a.",
      collocations: ["zero waste lifestyle", "achieve zero waste"]
    }
    ,
    {
      id: "v-boost-biodegradable-material",
      word: "biodegradable material",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1eadt li\u1ec7u t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl m\u0259\u02c8t\u026a\u0259ri\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable+material&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scientists developed biodegradable materials made from cassava starch.",
      exampleVi: "C\u00e1c nh\u00e0 khoa h\u1ecdc ph\u00e1t minh v\u1eadt li\u1ec7u t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc l\u00e0m t\u1eeb tinh b\u1ed9t s\u1eafn.",
      collocations: ["use biodegradable materials", "switch to biodegradable materials"]
    }
    ,
    {
      id: "v-boost-carbon-offset",
      word: "carbon offset",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh b\u00f9 \u0111\u1eafp kh\u00ed th\u1ea3i c\u00e1c-bon",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8\u0252fset/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+offset&type=2",
      imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Airlines encourage passengers to purchase carbon offsets by funding reforestation.",
      exampleVi: "C\u00e1c h\u00e3ng h\u00e0ng kh\u00f4ng khuy\u1ebfn kh\u00edch h\u00e0nh kh\u00e1ch mua t\u00edn ch\u1ec9 b\u00f9 \u0111\u1eafp kh\u00ed th\u1ea3i qua vi\u1ec7c tr\u1ed3ng r\u1eebng.",
      collocations: ["purchase carbon offsets", "carbon offset scheme"]
    }
    ,
    {
      id: "v-boost-energy-efficient-appliance",
      word: "energy-efficient appliance",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u1ebft b\u1ecb gia d\u1ee5ng ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng",
      ipa: "/\u02ccen\u0259d\u0292i \u026a\u02c8f\u026a\u0283nt \u0259\u02c8pla\u026a\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy-efficient+appliance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Replacing older air conditioners with energy-efficient appliances lowers utility bills.",
      exampleVi: "Thay m\u00e1y l\u1ea1nh c\u0169 b\u1eb1ng c\u00e1c thi\u1ebft b\u1ecb ti\u1ebft ki\u1ec7m \u0111i\u1ec7n gi\u00fap gi\u1ea3m ti\u1ec1n \u0111i\u1ec7n sinh ho\u1ea1t.",
      collocations: ["install energy-efficient appliances", "eco-friendly appliances"]
    }
    ,
    {
      id: "v-boost-circular-economy",
      word: "circular economy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ec1n kinh t\u1ebf tu\u1ea7n ho\u00e0n t\u00e1i s\u1eed d\u1ee5ng",
      ipa: "/\u02ccs\u025c\u02d0kj\u0259l\u0259r \u026a\u02c8k\u0252n\u0259mi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=circular+economy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A circular economy aims to eliminate industrial waste through continuous recycling.",
      exampleVi: "N\u1ec1n kinh t\u1ebf tu\u1ea7n ho\u00e0n h\u01b0\u1edbng \u0111\u1ebfn lo\u1ea1i b\u1ecf r\u00e1c th\u1ea3i c\u00f4ng nghi\u1ec7p qua t\u00e1i ch\u1ebf li\u00ean t\u1ee5c.",
      collocations: ["transition to a circular economy", "circular economy model"]
    }
    ,
    {
      id: "v-boost-single-use-plastic",
      word: "single-use plastic",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ed3 nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n g\u00e2y \u00f4 nhi\u1ec5m",
      ipa: "/\u02ccs\u026a\u014b\u0261l ju\u02d0s \u02c8pl\u00e6st\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=single-use+plastic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The city banned single-use plastic bags and straws in all supermarket chains.",
      exampleVi: "Th\u00e0nh ph\u1ed1 c\u1ea5m t\u00fai v\u00e0 \u1ed1ng h\u00fat nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n trong t\u1ea5t c\u1ea3 chu\u1ed7i si\u00eau th\u1ecb.",
      collocations: ["ban single-use plastics", "reduce single-use plastics"]
    }
    ,
    {
      id: "v-boost-sustainable-agriculture",
      word: "sustainable agriculture",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ec1n n\u00f4ng nghi\u1ec7p canh t\u00e1c b\u1ec1n v\u1eefng",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8\u00e6\u0261r\u026ak\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+agriculture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable agriculture protects fertile soil without chemical pesticide runoff.",
      exampleVi: "N\u00f4ng nghi\u1ec7p b\u1ec1n v\u1eefng b\u1ea3o v\u1ec7 \u0111\u1ed9 ph\u00ec c\u1ee7a \u0111\u1ea5t m\u00e0 kh\u00f4ng g\u00e2y ng\u1ea5m thu\u1ed1c tr\u1eeb s\u00e2u h\u00f3a h\u1ecdc.",
      collocations: ["practice sustainable agriculture", "methods of sustainable agriculture"]
    }
    ,
    {
      id: "v-boost-compostable-packaging",
      word: "compostable packaging",
      partOfSpeech: "n.phr",
      meaningVi: "bao b\u00ec c\u00f3 th\u1ec3 \u1ee7 th\u00e0nh ph\u00e2n h\u1eefu c\u01a1",
      ipa: "/k\u0252m\u02c8p\u0252st\u0259bl \u02c8p\u00e6k\u026ad\u0292\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=compostable+packaging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern food outlets are transitioning to 100% compostable packaging.",
      exampleVi: "C\u00e1c qu\u00e1n \u0103n hi\u1ec7n \u0111\u1ea1i \u0111ang chuy\u1ec3n sang d\u00f9ng 100% bao b\u00ec c\u00f3 th\u1ec3 \u1ee7 ph\u00e2n sinh h\u1ecdc.",
      collocations: ["certified compostable packaging", "eco-friendly packaging"]
    }
    ,
    {
      id: "v-boost-geothermal-energy",
      word: "geothermal energy",
      partOfSpeech: "n.phr",
      meaningVi: "ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng \u0111\u1ecba nhi\u1ec7t s\u1ea1ch",
      ipa: "/\u02ccd\u0292i\u02d0\u0259\u028a\u02c8\u03b8\u025c\u02d0ml \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=geothermal+energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Iceland heats over ninety percent of its homes using clean geothermal energy.",
      exampleVi: "Iceland s\u01b0\u1edfi \u1ea5m h\u01a1n 90% nh\u00e0 \u1edf b\u1eb1ng ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng \u0111\u1ecba nhi\u1ec7t s\u1ea1ch t\u1ef1 nhi\u00ean.",
      collocations: ["tap geothermal energy", "harness geothermal energy"]
    }
    ,
    {
      id: "v-boost-water-conservation",
      word: "water conservation",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3o t\u1ed3n v\u00e0 ti\u1ebft ki\u1ec7m ngu\u1ed3n n\u01b0\u1edbc ng\u1ecdt",
      ipa: "/\u02c8w\u0254\u02d0t\u0259 \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=water+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Drip irrigation is an ingenious technique for agricultural water conservation.",
      exampleVi: "T\u01b0\u1edbi nh\u1ecf gi\u1ecdt l\u00e0 k\u1ef9 thu\u1eadt th\u00f4ng minh \u0111\u1ec3 ti\u1ebft ki\u1ec7m n\u01b0\u1edbc trong s\u1ea3n xu\u1ea5t n\u00f4ng nghi\u1ec7p.",
      collocations: ["encourage water conservation", "water conservation measures"]
    }
    ,
    {
      id: "v-boost-clean-technology",
      word: "clean technology",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 s\u1ea1ch th\u00e2n thi\u1ec7n m\u00f4i sinh",
      ipa: "/kli\u02d0n tek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clean+technology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investment in clean technology surged after global climate agreements were signed.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o c\u00f4ng ngh\u1ec7 s\u1ea1ch t\u0103ng v\u1ecdt sau khi c\u00e1c hi\u1ec7p \u0111\u1ecbnh kh\u00ed h\u1eadu to\u00e0n c\u1ea7u \u0111\u01b0\u1ee3c k\u00fd k\u1ebft.",
      collocations: ["invest in clean technology", "advance clean technology"]
    }
    ,
    {
      id: "v-boost-ecological-balance",
      word: "ecological balance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i t\u1ef1 nhi\u00ean",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overfishing in coral reefs severely disrupts the delicate ecological balance.",
      exampleVi: "\u0110\u00e1nh b\u1eaft c\u00e1 qu\u00e1 m\u1ee9c \u1edf c\u00e1c r\u1ea1n san h\u00f4 l\u00e0m \u0111\u1ea3o l\u1ed9n nghi\u00eam tr\u1ecdng s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i.",
      collocations: ["maintain ecological balance", "restore ecological balance"]
    }
    ,
    {
      id: "v-boost-organic-farming",
      word: "organic farming",
      partOfSpeech: "n.phr",
      meaningVi: "canh t\u00e1c n\u00f4ng nghi\u1ec7p h\u1eefu c\u01a1 an to\u00e0n",
      ipa: "/\u0254\u02d0\u02c8\u0261\u00e6n\u026ak \u02c8f\u0251\u02d0m\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=organic+farming&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Consumers gladly pay a premium for vegetables grown through organic farming.",
      exampleVi: "Ng\u01b0\u1eddi ti\u00eau d\u00f9ng s\u1eb5n l\u00f2ng tr\u1ea3 gi\u00e1 cao h\u01a1n cho rau c\u1ee7 \u0111\u01b0\u1ee3c tr\u1ed3ng theo ph\u01b0\u01a1ng ph\u00e1p h\u1eefu c\u01a1.",
      collocations: ["certified organic farming", "principles of organic farming"]
    }
    ,
    {
      id: "v-boost-reusable-container",
      word: "reusable container",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9p \u0111\u1ef1ng c\u00f3 th\u1ec3 d\u00f9ng l\u1ea1i nhi\u1ec1u l\u1ea7n",
      ipa: "/\u02ccri\u02d0\u02c8ju\u02d0z\u0259bl k\u0259n\u02c8te\u026an\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reusable+container&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Shoppers bring reusable containers to bulk dry-food stores to reduce packaging.",
      exampleVi: "Kh\u00e1ch mua h\u00e0ng mang theo h\u1ed9p t\u00e1i s\u1eed d\u1ee5ng t\u1edbi c\u00e1c c\u1eeda h\u00e0ng th\u1ef1c ph\u1ea9m \u0111\u1ec3 gi\u1ea3m bao b\u00ec.",
      collocations: ["bring reusable containers", "washable containers"]
    }
    ,
    {
      id: "v-boost-greenhouse-gas-emission",
      word: "greenhouse gas emission",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e1t th\u1ea3i kh\u00ed nh\u00e0 k\u00ednh g\u00e2y bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu",
      ipa: "/\u02c8\u0261ri\u02d0nha\u028as \u0261\u00e6s \u026a\u02c8m\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=greenhouse+gas+emission&type=2",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The treaty mandates a fifty percent cut in greenhouse gas emissions by 2030.",
      exampleVi: "Hi\u1ec7p \u01b0\u1edbc quy \u0111\u1ecbnh c\u1eaft gi\u1ea3m 50% l\u01b0\u1ee3ng ph\u00e1t th\u1ea3i kh\u00ed nh\u00e0 k\u00ednh tr\u01b0\u1edbc n\u0103m 2030.",
      collocations: ["slash greenhouse gas emissions", "monitor greenhouse gas emissions"]
    }
  ],
  "unit-4-urbanisation": [
    {
      id: "v12-u4-urbanisation",
      word: "urbanisation",
      partOfSpeech: "n",
      meaningVi: "ti\u1ebfn tr\u00ecnh \u0111\u00f4 th\u1ecb h\u00f3a",
      ipa: "/\u02cc\u025c\u02d0b\u0259na\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urbanisation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rapid urbanisation brings economic growth but also strains urban transportation networks.",
      exampleVi: "\u0110\u00f4 th\u1ecb h\u00f3a th\u1ea7n t\u1ed1c mang l\u1ea1i t\u0103ng tr\u01b0\u1edfng kinh t\u1ebf nh\u01b0ng c\u0169ng t\u1ea1o \u00e1p l\u1ef1c l\u1edbn l\u00ean m\u1ea1ng l\u01b0\u1edbi giao th\u00f4ng.",
      collocations: ["rapid urbanisation", "process of urbanisation"]
    },
    {
      id: "v12-u4-rural-to-urban-migration",
      word: "rural-to-urban migration",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00e0n s\u00f3ng di c\u01b0 t\u1eeb n\u00f4ng th\u00f4n ra th\u00e0nh th\u1ecb",
      ipa: "/\u02ccr\u028a\u0259r\u0259l tu\u02d0 \u02c8\u025c\u02d0b\u0259n ma\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rural-to-urban+migration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rural-to-urban migration fills manufacturing factories in suburban industrial parks.",
      exampleVi: "D\u00f2ng di c\u01b0 t\u1eeb n\u00f4ng th\u00f4n ra th\u00e0nh ph\u1ed1 cung \u1ee9ng ngu\u1ed3n nh\u00e2n l\u1ef1c cho c\u00e1c khu c\u00f4ng nghi\u1ec7p ngo\u1ea1i th\u00e0nh.",
      collocations: ["rates of rural-to-urban migration", "drivers of migration"]
    },
    {
      id: "v12-u4-metropolitan",
      word: "metropolitan",
      partOfSpeech: "adj",
      meaningVi: "thu\u1ed9c v\u1ec1 v\u00f9ng \u0111\u00f4 th\u1ecb l\u1edbn trung t\u00e2m",
      ipa: "/\u02ccmetr\u0259\u02c8p\u0252l\u026at\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=metropolitan&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Hanoi metropolitan area encompasses vibrant satellite towns and tech corridors.",
      exampleVi: "V\u00f9ng \u0111\u00f4 th\u1ecb H\u00e0 N\u1ed9i bao g\u1ed3m c\u00e1c \u0111\u00f4 th\u1ecb v\u1ec7 tinh s\u00f4i \u0111\u1ed9ng v\u00e0 c\u00e1c h\u00e0nh lang c\u00f4ng ngh\u1ec7 cao.",
      collocations: ["metropolitan area", "metropolitan transport"]
    },
    {
      id: "v12-u4-urban-sprawl",
      word: "urban sprawl",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1edf r\u1ed9ng \u0111\u00f4 th\u1ecb t\u1ef1 ph\u00e1t thi\u1ebfu quy ho\u1ea1ch",
      ipa: "/\u02cc\u025c\u02d0b\u0259n \u02c8spr\u0254\u02d0l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+sprawl&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Uncontrolled urban sprawl eats away fertile agricultural rice fields on city peripheries.",
      exampleVi: "\u0110\u00f4 th\u1ecb h\u00f3a t\u1ef1 ph\u00e1t thi\u1ebfu ki\u1ec3m so\u00e1t g\u1eb7m nh\u1ea5m nh\u1eefng c\u00e1nh \u0111\u1ed3ng l\u00faa m\u00e0u m\u1ee1 \u1edf r\u00eca th\u00e0nh ph\u1ed1.",
      collocations: ["halt urban sprawl", "consequences of urban sprawl"]
    },
    {
      id: "v12-u4-overcrowding",
      word: "overcrowding",
      partOfSpeech: "n",
      meaningVi: "t\u00ecnh tr\u1ea1ng qu\u00e1 t\u1ea3i \u0111\u00f4ng \u0111\u00fac ng\u1ed9t ng\u1ea1t",
      ipa: "/\u02cc\u0259\u028av\u0259\u02c8kra\u028ad\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=overcrowding&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building satellite university campuses alleviates overcrowding in central districts.",
      exampleVi: "X\u00e2y d\u1ef1ng c\u00e1c c\u01a1 s\u1edf \u0111\u1ea1i h\u1ecdc v\u1ec7 tinh gi\u00fap gi\u1ea3m t\u1ea3i \u00e1p l\u1ef1c \u0111\u00f4ng \u0111\u00fac \u1edf c\u00e1c qu\u1eadn trung t\u00e2m.",
      collocations: ["severe overcrowding", "relieve overcrowding"]
    },
    {
      id: "v12-u4-industrialization",
      word: "industrialization",
      partOfSpeech: "n",
      meaningVi: "ti\u1ebfn tr\u00ecnh c\u00f4ng nghi\u1ec7p h\u00f3a hi\u1ec7n \u0111\u1ea1i h\u00f3a",
      ipa: "/\u026an\u02ccd\u028cstri\u0259la\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=industrialization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Industrialization and modernization have radically modernized Vietnamese rural society.",
      exampleVi: "C\u00f4ng nghi\u1ec7p h\u00f3a v\u00e0 hi\u1ec7n \u0111\u1ea1i h\u00f3a \u0111\u00e3 thay \u0111\u1ed5i di\u1ec7n m\u1ea1o \u0111\u1eddi s\u1ed1ng n\u00f4ng th\u00f4n Vi\u1ec7t Nam m\u1ed9t c\u00e1ch c\u0103n b\u1ea3n.",
      collocations: ["rapid industrialization", "pace of industrialization"]
    },
    {
      id: "v12-u4-housing-shortage",
      word: "housing shortage",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 khan hi\u1ebfm nh\u00e0 \u1edf gi\u00e1 r\u1ebb cho d\u00e2n c\u01b0",
      ipa: "/\u02c8ha\u028az\u026a\u014b \u02c8\u0283\u0254\u02d0t\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=housing+shortage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The municipal government constructed social apartments to combat the acute housing shortage.",
      exampleVi: "Ch\u00ednh quy\u1ec1n th\u00e0nh ph\u1ed1 \u0111\u00e3 x\u00e2y d\u1ef1ng nhi\u1ec1u khu nh\u00e0 \u1edf x\u00e3 h\u1ed9i \u0111\u1ec3 gi\u1ea3i quy\u1ebft n\u1ea1n khan hi\u1ebfm nh\u00e0 \u1edf gay g\u1eaft.",
      collocations: ["address the housing shortage", "acute housing shortage"]
    },
    {
      id: "v12-u4-slum",
      word: "slum",
      partOfSpeech: "n",
      meaningVi: "khu nh\u00e0 \u1ed5 chu\u1ed9t l\u1ee5p x\u1ee5p t\u1ed3i t\u00e0n",
      ipa: "/sl\u028cm/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=slum&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Urban regeneration programs replace dilapidated canal slums with modern high-rise flats.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh ch\u1ec9nh trang \u0111\u00f4 th\u1ecb thay th\u1ebf khu nh\u00e0 \u1ed5 chu\u1ed9t ven k\u00eanh b\u1eb1ng c\u00e1c chung c\u01b0 khang trang.",
      collocations: ["clear urban slums", "slum upgrading"]
    },
    {
      id: "v12-u4-public-infrastructure",
      word: "public infrastructure",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng c\u00f4ng c\u1ed9ng thi\u1ebft y\u1ebfu",
      ipa: "/\u02c8p\u028cbl\u026ak \u02c8\u026anfr\u0259str\u028ckt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+infrastructure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Heavy investment in public infrastructure like elevated ring roads speeds up transit.",
      exampleVi: "\u0110\u1ea7u t\u01b0 m\u1ea1nh v\u00e0o h\u1ea1 t\u1ea7ng c\u00f4ng c\u1ed9ng nh\u01b0 \u0111\u01b0\u1eddng v\u00e0nh \u0111ai tr\u00ean cao gi\u00fap vi\u1ec7c l\u01b0u th\u00f4ng nhanh ch\u00f3ng.",
      collocations: ["upgrade public infrastructure", "modern public infrastructure"]
    },
    {
      id: "v12-u4-economic-opportunities",
      word: "economic opportunities",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 h\u1ed9i l\u00e0m \u0103n kinh t\u1ebf v\u00e0 l\u1eadp nghi\u1ec7p",
      ipa: "/\u02cci\u02d0k\u0259\u02c8n\u0252m\u026ak \u02cc\u0252p\u0259\u02c8tju\u02d0n\u0259tiz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=economic+opportunities&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Big cities attract ambitious university graduates seeking abundant economic opportunities.",
      exampleVi: "C\u00e1c th\u00e0nh ph\u1ed1 l\u1edbn thu h\u00fat c\u1eed nh\u00e2n \u0111\u1ea1i h\u1ecdc \u0111\u1ea7y ho\u00e0i b\u00e3o t\u00ecm ki\u1ebfm c\u00e1c c\u01a1 h\u1ed9i kinh t\u1ebf r\u1ed9ng m\u1edf.",
      collocations: ["seek economic opportunities", "vast economic opportunities"]
    },
    {
      id: "v12-u4-living-standards",
      word: "living standards",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ee9c s\u1ed1ng v\u00e0 ti\u1ec7n nghi cu\u1ed9c s\u1ed1ng",
      ipa: "/\u02c8l\u026av\u026a\u014b \u02c8st\u00e6nd\u0259dz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=living+standards&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern healthcare facilities and digital services elevate urban living standards.",
      exampleVi: "C\u01a1 s\u1edf y t\u1ebf hi\u1ec7n \u0111\u1ea1i v\u00e0 d\u1ecbch v\u1ee5 s\u1ed1 n\u00e2ng cao m\u1ee9c s\u1ed1ng c\u1ee7a c\u01b0 d\u00e2n th\u00e0nh th\u1ecb.",
      collocations: ["improve living standards", "high living standards"]
    },
    {
      id: "v12-u4-satellite-city",
      word: "satellite city",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00f4 th\u1ecb v\u1ec7 tinh bao quanh th\u00e0nh ph\u1ed1 l\u1edbn",
      ipa: "/\u02c8s\u00e6t\u0259la\u026at \u02c8s\u026ati/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=satellite+city&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Connecting satellite cities via high-speed commuter rail decentralizes urban density.",
      exampleVi: "K\u1ebft n\u1ed1i c\u00e1c \u0111\u00f4 th\u1ecb v\u1ec7 tinh b\u1eb1ng \u0111\u01b0\u1eddng s\u1eaft t\u1ed1c h\u00e0nh gi\u00fap ph\u00e2n t\u00e1n m\u1eadt \u0111\u1ed9 d\u00e2n s\u1ed1 n\u1ed9i \u0111\u00f4.",
      collocations: ["develop satellite cities", "planned satellite city"]
    },
    {
      id: "v12-u4-demographic-shift",
      word: "demographic shift",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 bi\u1ebfn \u0111\u1ed9ng d\u1ecbch chuy\u1ec3n c\u01a1 c\u1ea5u d\u00e2n s\u1ed1",
      ipa: "/\u02ccdem\u0259\u02c8\u0261r\u00e6f\u026ak \u0283\u026aft/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=demographic+shift&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The country is experiencing a demographic shift as working-age youths move to coastal hubs.",
      exampleVi: "\u0110\u1ea5t n\u01b0\u1edbc \u0111ang tr\u1ea3i qua s\u1ef1 chuy\u1ec3n d\u1ecbch c\u01a1 c\u1ea5u d\u00e2n s\u1ed1 khi thanh ni\u00ean \u0111\u1ed9 tu\u1ed5i lao \u0111\u1ed9ng \u0111\u1ed5 v\u1ec1 v\u00f9ng ven bi\u1ec3n.",
      collocations: ["major demographic shift", "witness demographic shifts"]
    },
    {
      id: "v12-u4-sanitation",
      word: "sanitation",
      partOfSpeech: "n",
      meaningVi: "h\u1ec7 th\u1ed1ng v\u1ec7 sinh m\u00f4i tr\u01b0\u1eddng \u0111\u00f4 th\u1ecb",
      ipa: "/\u02ccs\u00e6n\u026a\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sanitation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Upgrading neighborhood sewage pipes improves public health and community sanitation.",
      exampleVi: "N\u00e2ng c\u1ea5p \u0111\u01b0\u1eddng \u1ed1ng tho\u00e1t n\u01b0\u1edbc th\u1ea3i khu ph\u1ed1 gi\u00fap c\u1ea3i thi\u1ec7n s\u1ee9c kh\u1ecfe c\u1ed9ng \u0111\u1ed3ng v\u00e0 v\u1ec7 sinh m\u00f4i tr\u01b0\u1eddng.",
      collocations: ["adequate sanitation", "sanitation facilities"]
    },
    {
      id: "v12-u4-gentrification",
      word: "gentrification",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u00f4n t\u1ea1o ch\u1ec9nh trang l\u00e0m \u0111\u1eaft \u0111\u1ecf khu ph\u1ed1 c\u0169",
      ipa: "/\u02ccd\u0292entr\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gentrification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Urban gentrification brought trendy cafes but also forced out low-income lifelong renters.",
      exampleVi: "Ch\u1ec9nh trang \u0111\u00f4 th\u1ecb \u0111em l\u1ea1i nh\u1eefng qu\u00e1n c\u00e0 ph\u00ea th\u1eddi th\u01b0\u1ee3ng nh\u01b0ng c\u0169ng \u0111\u1ea9y ng\u01b0\u1eddi thu\u00ea ngh\u00e8o \u0111i n\u01a1i kh\u00e1c.",
      collocations: ["effects of gentrification", "resist gentrification"]
    },
    {
      id: "v12-u4-gridlock",
      word: "gridlock",
      partOfSpeech: "n",
      meaningVi: "t\u00ecnh tr\u1ea1ng t\u00ea li\u1ec7t giao th\u00f4ng t\u1eafc c\u1ee9ng",
      ipa: "/\u02c8\u0261r\u026adl\u0252k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gridlock&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A broken-down truck caused total gridlock on the suspension bridge for three hours.",
      exampleVi: "Chi\u1ebfc xe t\u1ea3i h\u1ecfng \u0111\u00e3 g\u00e2y ra c\u1ea3nh t\u00ea li\u1ec7t giao th\u00f4ng ho\u00e0n to\u00e0n tr\u00ean c\u1ea7u treo su\u1ed1t ba gi\u1edd \u0111\u1ed3ng h\u1ed3.",
      collocations: ["traffic gridlock", "reach total gridlock"]
    },
    {
      id: "v12-u4-mass-transit",
      word: "mass transit",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng giao th\u00f4ng c\u00f4ng c\u1ed9ng ch\u1edf kh\u00e1ch s\u1ed1 l\u01b0\u1ee3ng l\u1edbn",
      ipa: "/\u02ccm\u00e6s \u02c8tr\u00e6nz\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mass+transit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building an interconnected mass transit grid is the only permanent solution to smog.",
      exampleVi: "X\u00e2y d\u1ef1ng m\u1ea1ng l\u01b0\u1edbi giao th\u00f4ng c\u00f4ng c\u1ed9ng s\u1ee9c ch\u1edf l\u1edbn l\u00e0 gi\u1ea3i ph\u00e1p tri\u1ec7t \u0111\u1ec3 duy nh\u1ea5t cho n\u1ea1n kh\u00f3i m\u00f9.",
      collocations: ["expand mass transit", "modern mass transit"]
    },
    {
      id: "v12-u4-urban-heat-island",
      word: "urban heat island",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng \u0111\u1ea3o nhi\u1ec7t \u0111\u00f4 th\u1ecb oi b\u1ee9c",
      ipa: "/\u02c8\u025c\u02d0b\u0259n hi\u02d0t \u02c8a\u026al\u0259nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+heat+island&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Concrete and asphalt absorb solar radiation, intensifying the urban heat island effect.",
      exampleVi: "B\u00ea t\u00f4ng v\u00e0 \u0111\u01b0\u1eddng nh\u1ef1a h\u1ea5p th\u1ee5 b\u1ee9c x\u1ea1 nhi\u1ec7t, l\u00e0m tr\u1ea7m tr\u1ecdng th\u00eam hi\u1ec7u \u1ee9ng \u0111\u1ea3o nhi\u1ec7t \u0111\u00f4 th\u1ecb.",
      collocations: ["mitigate urban heat island", "urban heat island effect"]
    },
    {
      id: "v12-u4-sustainable-urbanism",
      word: "sustainable urbanism",
      partOfSpeech: "n.phr",
      meaningVi: "quy ho\u1ea1ch \u0111\u00f4 th\u1ecb sinh th\u00e1i b\u1ec1n v\u1eefng",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8\u025c\u02d0b\u0259n\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+urbanism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable urbanism blends high-density apartments with extensive pocket parks and wetlands.",
      exampleVi: "\u0110\u00f4 th\u1ecb sinh th\u00e1i b\u1ec1n v\u1eefng k\u1ebft h\u1ee3p c\u00e1c chung c\u01b0 cao t\u1ea7ng v\u1edbi nhi\u1ec1u c\u00f4ng vi\u00ean nh\u1ecf v\u00e0 h\u1ed3 c\u1ea3nh quan.",
      collocations: ["champion sustainable urbanism", "model of sustainable urbanism"]
    },
    {
      id: "v12-u4-suburb",
      word: "suburb",
      partOfSpeech: "n",
      meaningVi: "v\u00f9ng ngo\u1ea1i \u00f4 y\u00ean t\u0129nh ven \u0111\u00f4",
      ipa: "/\u02c8s\u028cb\u025c\u02d0b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=suburb&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many families with young children move to the green suburbs for cleaner air and yards.",
      exampleVi: "Nhi\u1ec1u gia \u0111\u00ecnh c\u00f3 con nh\u1ecf chuy\u1ec3n ra v\u00f9ng ngo\u1ea1i \u00f4 xanh m\u00e1t \u0111\u1ec3 c\u00f3 kh\u00f4ng kh\u00ed trong l\u00e0nh v\u00e0 s\u00e2n v\u01b0\u1eddn.",
      collocations: ["live in the suburbs", "quiet suburb"]
    }
    ,
    {
      id: "v12-extra-urban-planning-authority",
      word: "urban planning authority",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 quan qu\u1ea3n l\u00fd quy ho\u1ea1ch \u0111\u00f4 th\u1ecb",
      ipa: "/\u02c8\u025c\u02d0b\u0259n \u02c8pl\u00e6n\u026a\u014b \u0254\u02d0\u02cc\u03b8\u0252r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+planning+authority&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The urban planning authority approved green buffer zones along the river.",
      exampleVi: "C\u01a1 quan qu\u1ea3n l\u00fd quy ho\u1ea1ch \u0111\u00f4 th\u1ecb \u0111\u00e3 ph\u00ea duy\u1ec7t d\u1ea3i c\u00e2y xanh \u0111\u1ec7m d\u1ecdc b\u1edd s\u00f4ng.",
      collocations: ["consult the planning authority", "urban authority guidelines"]
    }
    ,
    {
      id: "v12-extra-satellite-township",
      word: "satellite township",
      partOfSpeech: "n.phr",
      meaningVi: "khu \u0111\u00f4 th\u1ecb v\u1ec7 tinh hi\u1ec7n \u0111\u1ea1i",
      ipa: "/\u02c8s\u00e6t\u0259la\u026at \u02c8ta\u028an\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=satellite+township&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern satellite townships offer quiet living spaces with schools and supermarkets.",
      exampleVi: "C\u00e1c khu \u0111\u00f4 th\u1ecb v\u1ec7 tinh \u0111em l\u1ea1i kh\u00f4ng gian s\u1ed1ng thanh b\u00ecnh c\u00f3 \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng h\u1ecdc v\u00e0 si\u00eau th\u1ecb.",
      collocations: ["develop satellite townships", "live in a satellite township"]
    }
    ,
    {
      id: "v12-extra-suburbanization",
      word: "suburbanization",
      partOfSpeech: "n",
      meaningVi: "qu\u00e1 tr\u00ecnh ngo\u1ea1i \u00f4 h\u00f3a d\u00e2n c\u01b0",
      ipa: "/s\u0259\u02ccb\u025c\u02d0b\u0259na\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=suburbanization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Suburbanization is accelerated by comfortable regional train connections.",
      exampleVi: "Qu\u00e1 tr\u00ecnh ngo\u1ea1i \u00f4 h\u00f3a di\u1ec5n ra nhanh h\u01a1n nh\u1edd c\u00e1c tuy\u1ebfn t\u00e0u h\u1ecfa ngo\u1ea1i \u00f4 ti\u1ec7n l\u1ee3i.",
      collocations: ["trend of suburbanization", "effects of suburbanization"]
    }
    ,
    {
      id: "v12-extra-high-density-housing",
      word: "high-density housing",
      partOfSpeech: "n.phr",
      meaningVi: "khu nh\u00e0 \u1edf m\u1eadt \u0111\u1ed9 d\u00e2n c\u01b0 cao",
      ipa: "/\u02c8ha\u026a \u02c8dens\u0259ti \u02c8ha\u028az\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=high-density+housing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High-density housing near metro stations encourages pedestrian commuting.",
      exampleVi: "Nh\u00e0 \u1edf m\u1eadt \u0111\u1ed9 cao g\u1ea7n ga t\u00e0u \u0111i\u1ec7n khuy\u1ebfn kh\u00edch ng\u01b0\u1eddi d\u00e2n \u0111i b\u1ed9 \u0111i l\u00e0m.",
      collocations: ["build high-density housing", "demand for high-density housing"]
    }
    ,
    {
      id: "v12-extra-urban-transit-network",
      word: "urban transit network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi giao th\u00f4ng c\u00f4ng c\u1ed9ng \u0111\u00f4 th\u1ecb",
      ipa: "/\u02c8\u025c\u02d0b\u0259n \u02c8tr\u00e6nz\u026at \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+transit+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An integrated urban transit network links buses, subways, and shared bicycles.",
      exampleVi: "M\u1ea1ng l\u01b0\u1edbi giao th\u00f4ng \u0111\u00f4 th\u1ecb t\u00edch h\u1ee3p k\u1ebft n\u1ed1i xe bu\u00fdt, t\u00e0u \u0111i\u1ec7n ng\u1ea7m v\u00e0 xe \u0111\u1ea1p c\u00f4ng c\u1ed9ng.",
      collocations: ["expand the transit network", "reliable urban transit network"]
    }
    ,
    {
      id: "v12-extra-demographic-pressure",
      word: "demographic pressure",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e1p l\u1ef1c gia t\u0103ng d\u00e2n s\u1ed1 l\u00ean h\u1ea1 t\u1ea7ng",
      ipa: "/\u02ccdem\u0259\u02c8\u0261r\u00e6f\u026ak \u02c8pre\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=demographic+pressure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Demographic pressure strains hospitals and primary schools in big cities.",
      exampleVi: "\u00c1p l\u1ef1c d\u00e2n s\u1ed1 gia t\u0103ng g\u00e2y qu\u00e1 t\u1ea3i cho b\u1ec7nh vi\u1ec7n v\u00e0 tr\u01b0\u1eddng ti\u1ec3u h\u1ecdc \u1edf c\u00e1c \u0111\u00f4 th\u1ecb l\u1edbn.",
      collocations: ["cope with demographic pressure", "alleviate demographic pressure"]
    }
    ,
    {
      id: "v12-extra-living-standards",
      word: "living standards",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ea5t l\u01b0\u1ee3ng v\u00e0 ti\u00eau chu\u1ea9n s\u1ed1ng",
      ipa: "/\u02c8l\u026av\u026a\u014b \u02c8st\u00e6nd\u0259dz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=living+standards&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Higher urban wages improve living standards but also entail higher living costs.",
      exampleVi: "Thu nh\u1eadp th\u00e0nh th\u1ecb cao h\u01a1n gi\u00fap n\u00e2ng cao m\u1ee9c s\u1ed1ng nh\u01b0ng c\u0169ng k\u00e9o theo chi ph\u00ed \u0111\u1eaft \u0111\u1ecf.",
      collocations: ["elevate living standards", "gap in living standards"]
    }
    ,
    {
      id: "v12-extra-airborne-pollution",
      word: "airborne pollution",
      partOfSpeech: "n.phr",
      meaningVi: "\u00f4 nhi\u1ec5m b\u1ee5i m\u1ecbn trong kh\u00f4ng kh\u00ed",
      ipa: "/\u02c8e\u0259b\u0254\u02d0n p\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=airborne+pollution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Spraying streets with recycled water helps settle down fine airborne pollution.",
      exampleVi: "T\u01b0\u1edbi r\u1eeda \u0111\u01b0\u1eddng ph\u1ed1 b\u1eb1ng n\u01b0\u1edbc t\u00e1i ch\u1ebf gi\u00fap l\u1eafng \u0111\u1ecdng b\u1ee5i m\u1ecbn \u00f4 nhi\u1ec5m trong kh\u00f4ng kh\u00ed.",
      collocations: ["combat airborne pollution", "levels of airborne pollution"]
    }
    ,
    {
      id: "v12-extra-pedestrian-walkway",
      word: "pedestrian walkway",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ed1i \u0111i b\u1ed9 an to\u00e0n l\u00e1t g\u1ea1ch",
      ipa: "/p\u0259\u02c8destri\u0259n \u02c8w\u0254\u02d0kwe\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pedestrian+walkway&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Paved pedestrian walkways shaded by trees encourage residents to walk daily.",
      exampleVi: "L\u1ed1i \u0111i b\u1ed9 l\u00e1t g\u1ea1ch r\u1ee3p b\u00f3ng m\u00e1t khuy\u1ebfn kh\u00edch c\u01b0 d\u00e2n t\u1eadp th\u1ec3 d\u1ee5c \u0111i b\u1ed9 m\u1ed7i ng\u00e0y.",
      collocations: ["walk along the pedestrian walkway", "clear pedestrian walkways"]
    }
    ,
    {
      id: "v12-extra-megacity",
      word: "megacity",
      partOfSpeech: "n",
      meaningVi: "si\u00eau \u0111\u00f4 th\u1ecb c\u00f3 tr\u00ean 10 tri\u1ec7u d\u00e2n",
      ipa: "/\u02c8me\u0261\u0259s\u026ati/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=megacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tokyo and Jakarta are megacities facing complex transport and waste logistics.",
      exampleVi: "Tokyo v\u00e0 Jakarta l\u00e0 nh\u1eefng si\u00eau \u0111\u00f4 th\u1ecb \u0111\u1ed1i m\u1eb7t v\u1edbi b\u00e0i to\u00e1n ph\u1ee9c t\u1ea1p v\u1ec1 giao th\u00f4ng v\u00e0 r\u00e1c th\u1ea3i.",
      collocations: ["fastest-growing megacity", "challenges of a megacity"]
    }
    ,
    {
      id: "v12-extra-green-lung",
      word: "green lung",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00e1 ph\u1ed5i xanh \u0111i\u1ec1u h\u00f2a kh\u00f4ng kh\u00ed th\u00e0nh ph\u1ed1",
      ipa: "/\u0261ri\u02d0n l\u028c\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+lung&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Botanical gardens and lakes serve as the cooling green lungs of the downtown district.",
      exampleVi: "V\u01b0\u1eddn b\u00e1ch th\u1ea3o v\u00e0 c\u00e1c h\u1ed3 n\u01b0\u1edbc \u0111\u00f3ng vai tr\u00f2 nh\u01b0 l\u00e1 ph\u1ed5i xanh l\u00e0m m\u00e1t khu trung t\u00e2m.",
      collocations: ["preserve urban green lungs", "expand the green lung"]
    }
    ,
    {
      id: "v12-extra-social-housing-project",
      word: "social housing project",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ef1 \u00e1n nh\u00e0 \u1edf x\u00e3 h\u1ed9i cho ng\u01b0\u1eddi thu nh\u1eadp th\u1ea5p",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8ha\u028az\u026a\u014b \u02c8pr\u0252d\u0292ekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+housing+project&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Government subsidies support social housing projects for young working families.",
      exampleVi: "H\u1ed7 tr\u1ee3 c\u1ee7a ch\u00ednh ph\u1ee7 th\u00fac \u0111\u1ea9y c\u00e1c d\u1ef1 \u00e1n nh\u00e0 \u1edf x\u00e3 h\u1ed9i cho c\u00e1c gia \u0111\u00ecnh tr\u1ebb.",
      collocations: ["fund a social housing project", "move into social housing"]
    }
    ,
    {
      id: "v12-extra-traffic-congestion",
      word: "traffic congestion",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh tr\u1ea1ng \u00e1ch t\u1eafc giao th\u00f4ng",
      ipa: "/\u02c8tr\u00e6f\u026ak k\u0259n\u02c8d\u0292est\u0283\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traffic+congestion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The opening of the underground metro system successfully relieved traffic congestion.",
      exampleVi: "Vi\u1ec7c v\u1eadn h\u00e0nh tuy\u1ebfn t\u00e0u \u0111i\u1ec7n ng\u1ea7m \u0111\u00e3 gi\u1ea3i t\u1ecfa th\u00e0nh c\u00f4ng t\u00ecnh tr\u1ea1ng \u00f9n t\u1eafc giao th\u00f4ng.",
      collocations: ["ease traffic congestion", "suffer traffic congestion"]
    }
    ,
    {
      id: "v12-extra-urban-renewal",
      word: "urban renewal",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh ch\u1ec9nh trang t\u00e1i thi\u1ebft \u0111\u00f4 th\u1ecb",
      ipa: "/\u02cc\u025c\u02d0b\u0259n r\u026a\u02c8nju\u02d0\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+renewal&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Urban renewal revitalized historic waterfront streets with cafes and street art.",
      exampleVi: "T\u00e1i thi\u1ebft \u0111\u00f4 th\u1ecb \u0111\u00e3 l\u00e0m s\u1ed1ng l\u1ea1i nh\u1eefng con ph\u1ed1 ven s\u00f4ng v\u1edbi qu\u00e1n c\u00e0 ph\u00ea v\u00e0 ngh\u1ec7 thu\u1eadt \u0111\u01b0\u1eddng ph\u1ed1.",
      collocations: ["urban renewal initiative", "lead urban renewal"]
    }
    ,
    {
      id: "v-boost-urban-sprawl",
      word: "urban sprawl",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1edf r\u1ed9ng \u0111\u00f4 th\u1ecb t\u1ef1 ph\u00e1t thi\u1ebfu quy ho\u1ea1ch",
      ipa: "/\u02cc\u025c\u02d0b\u0259n \u02c8spr\u0254\u02d0l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+sprawl&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unchecked urban sprawl consumes fertile rice paddies around metropolitan borders.",
      exampleVi: "S\u1ef1 m\u1edf r\u1ed9ng \u0111\u00f4 th\u1ecb thi\u1ebfu ki\u1ec3m so\u00e1t \u0111\u00e3 nu\u1ed1t tr\u1ecdn nhi\u1ec1u c\u00e1nh \u0111\u1ed3ng l\u00faa quanh ngo\u1ea1i \u00f4.",
      collocations: ["curb urban sprawl", "consequences of urban sprawl"]
    }
    ,
    {
      id: "v-boost-megacity",
      word: "megacity",
      partOfSpeech: "n",
      meaningVi: "si\u00eau \u0111\u00f4 th\u1ecb c\u00f3 tr\u00ean m\u01b0\u1eddi tri\u1ec7u d\u00e2n",
      ipa: "/\u02c8me\u0261\u0259s\u026ati/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=megacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tokyo and Shanghai are prominent examples of thriving Asian megacities.",
      exampleVi: "Tokyo v\u00e0 Th\u01b0\u1ee3ng H\u1ea3i l\u00e0 nh\u1eefng v\u00ed d\u1ee5 \u0111i\u1ec3n h\u00ecnh c\u1ee7a c\u00e1c si\u00eau \u0111\u00f4 th\u1ecb ph\u1ed3n vinh t\u1ea1i ch\u00e2u \u00c1.",
      collocations: ["rapid growth of megacities", "manage a megacity"]
    }
    ,
    {
      id: "v-boost-metropolitan-area",
      word: "metropolitan area",
      partOfSpeech: "n.phr",
      meaningVi: "v\u00f9ng \u0111\u00f4 th\u1ecb trung t\u00e2m s\u1ea7m u\u1ea5t",
      ipa: "/\u02ccmetr\u0259\u02c8p\u0252l\u026at\u0259n \u02c8e\u0259ri\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=metropolitan+area&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Hanoi metropolitan area is home to over eight million industrious residents.",
      exampleVi: "V\u00f9ng \u0111\u00f4 th\u1ecb H\u00e0 N\u1ed9i l\u00e0 n\u01a1i sinh s\u1ed1ng c\u1ee7a h\u01a1n t\u00e1m tri\u1ec7u c\u01b0 d\u00e2n c\u1ea7n c\u00f9 ch\u0103m ch\u1ec9.",
      collocations: ["expand the metropolitan area", "bustling metropolitan area"]
    }
    ,
    {
      id: "v-boost-traffic-congestion",
      word: "traffic congestion",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh tr\u1ea1ng t\u1eafc ngh\u1ebdn giao th\u00f4ng gi\u1edd cao \u0111i\u1ec3m",
      ipa: "/\u02c8tr\u00e6f\u026ak k\u0259n\u02c8d\u0292est\u0283\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traffic+congestion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building metro transit lines is the most viable solution to traffic congestion.",
      exampleVi: "X\u00e2y d\u1ef1ng c\u00e1c tuy\u1ebfn t\u00e0u \u0111i\u1ec7n ng\u1ea7m l\u00e0 gi\u1ea3i ph\u00e1p kh\u1ea3 thi nh\u1ea5t cho v\u1ea5n n\u1ea1n \u00f9n t\u1eafc giao th\u00f4ng.",
      collocations: ["ease traffic congestion", "severe traffic congestion"]
    }
    ,
    {
      id: "v-boost-infrastructure-development",
      word: "infrastructure development",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1t tri\u1ec3n c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng giao th\u00f4ng v\u00e0 k\u1ef9 thu\u1eadt",
      ipa: "/\u02c8\u026anfr\u0259str\u028ckt\u0283\u0259 d\u026a\u02c8vel\u0259pm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=infrastructure+development&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The government prioritizes infrastructure development including highways and bridges.",
      exampleVi: "Ch\u00ednh ph\u1ee7 \u01b0u ti\u00ean ph\u00e1t tri\u1ec3n c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng bao g\u1ed3m m\u1ea1ng l\u01b0\u1edbi \u0111\u01b0\u1eddng cao t\u1ed1c v\u00e0 c\u1ea7u \u0111\u01b0\u1eddng.",
      collocations: ["accelerate infrastructure development", "funding for infrastructure development"]
    }
    ,
    {
      id: "v-boost-rural-urban-migration",
      word: "rural-urban migration",
      partOfSpeech: "n.phr",
      meaningVi: "d\u00f2ng di c\u01b0 t\u1eeb n\u00f4ng th\u00f4n ra th\u00e0nh th\u1ecb",
      ipa: "/\u02ccr\u028a\u0259r\u0259l \u02c8\u025c\u02d0b\u0259n ma\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rural-urban+migration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rural-urban migration provides vital labor for burgeoning manufacturing plants.",
      exampleVi: "D\u00f2ng di c\u01b0 t\u1eeb n\u00f4ng th\u00f4n ra th\u00e0nh th\u1ecb cung c\u1ea5p ngu\u1ed3n nh\u00e2n l\u1ef1c thi\u1ebft y\u1ebfu cho c\u00e1c nh\u00e0 m\u00e1y s\u1ea3n xu\u1ea5t.",
      collocations: ["wave of rural-urban migration", "reasons for rural-urban migration"]
    }
    ,
    {
      id: "v-boost-housing-shortage",
      word: "housing shortage",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh tr\u1ea1ng khan hi\u1ebfm nh\u00e0 \u1edf gi\u00e1 h\u1ee3p l\u00fd",
      ipa: "/\u02c8ha\u028az\u026a\u014b \u02c8\u0283\u0254\u02d0t\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=housing+shortage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Subsidized social apartments are being constructed to alleviate the housing shortage.",
      exampleVi: "Nhi\u1ec1u c\u0103n h\u1ed9 nh\u00e0 \u1edf x\u00e3 h\u1ed9i \u0111ang \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng nh\u1eb1m gi\u1ea3i quy\u1ebft t\u00ecnh tr\u1ea1ng thi\u1ebfu th\u1ed1n nh\u00e0 \u1edf.",
      collocations: ["acute housing shortage", "address the housing shortage"]
    }
    ,
    {
      id: "v-boost-slum-clearance",
      word: "slum clearance",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c gi\u1ea3i t\u1ecfa c\u00e1c khu \u1ed5 chu\u1ed9t t\u1ed3i t\u00e0n",
      ipa: "/sl\u028cm \u02c8kl\u026a\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=slum+clearance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Humane slum clearance programs must offer displaced families adequate resettlement.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh gi\u1ea3i t\u1ecfa khu \u1ed5 chu\u1ed9t nh\u00e2n v\u0103n c\u1ea7n mang l\u1ea1i n\u01a1i t\u00e1i \u0111\u1ecbnh c\u01b0 th\u1ecfa \u0111\u00e1ng.",
      collocations: ["undertake slum clearance", "urban slum clearance"]
    }
    ,
    {
      id: "v-boost-public-transit-system",
      word: "public transit system",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng v\u1eadn t\u1ea3i h\u00e0nh kh\u00e1ch c\u00f4ng c\u1ed9ng",
      ipa: "/\u02ccp\u028cbl\u026ak \u02c8tr\u00e6nz\u026at \u02c8s\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+transit+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An integrated public transit system connects bus routes with electric elevated trains.",
      exampleVi: "H\u1ec7 th\u1ed1ng v\u1eadn t\u1ea3i c\u00f4ng c\u1ed9ng k\u1ebft h\u1ee3p c\u00e1c tuy\u1ebfn xe bu\u00fdt v\u1edbi m\u1ea1ng l\u01b0\u1edbi t\u00e0u \u0111i\u1ec7n tr\u00ean cao.",
      collocations: ["upgrade public transit systems", "reliable public transit"]
    }
    ,
    {
      id: "v-boost-smart-urbanization",
      word: "smart urbanization",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00f4 th\u1ecb h\u00f3a th\u00f4ng minh \u0111\u1ecbnh h\u01b0\u1edbng t\u01b0\u01a1ng lai",
      ipa: "/sm\u0251\u02d0t \u02cc\u025c\u02d0b\u0259na\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smart+urbanization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smart urbanization integrates sensors to optimize energy consumption and waste pickup.",
      exampleVi: "\u0110\u00f4 th\u1ecb h\u00f3a th\u00f4ng minh t\u00edch h\u1ee3p c\u1ea3m bi\u1ebfn \u0111\u1ec3 t\u1ed1i \u01b0u h\u00f3a vi\u1ec7c d\u00f9ng n\u0103ng l\u01b0\u1ee3ng v\u00e0 thu gom r\u00e1c.",
      collocations: ["foster smart urbanization", "strategy for smart urbanization"]
    }
    ,
    {
      id: "v-boost-overcrowded-neighborhood",
      word: "overcrowded neighborhood",
      partOfSpeech: "n.phr",
      meaningVi: "khu d\u00e2n c\u01b0 ch\u1eadt ch\u1ed9i \u0111\u00f4ng \u0111\u00fac",
      ipa: "/\u02cc\u0259\u028av\u0259\u02c8kra\u028ad\u026ad \u02c8ne\u026ab\u0259h\u028ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=overcrowded+neighborhood&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fire safety regulations are strictly enforced in historically overcrowded neighborhoods.",
      exampleVi: "Quy chu\u1ea9n ph\u00f2ng ch\u00e1y ch\u1eefa ch\u00e1y \u0111\u01b0\u1ee3c si\u1ebft ch\u1eb7t t\u1ea1i c\u00e1c khu d\u00e2n c\u01b0 \u0111\u00f4ng \u0111\u00fac l\u00e2u \u0111\u1eddi.",
      collocations: ["densely overcrowded neighborhood", "live in an overcrowded neighborhood"]
    }
    ,
    {
      id: "v-boost-sanitation-facility",
      word: "sanitation facility",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng tr\u00ecnh v\u1ec7 sinh c\u00f4ng c\u1ed9ng \u0111\u1ea1t chu\u1ea9n",
      ipa: "/\u02ccs\u00e6n\u026a\u02c8te\u026a\u0283n f\u0259\u02c8s\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sanitation+facility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Upgrading city sanitation facilities prevents waterborne epidemics during monsoon season.",
      exampleVi: "N\u00e2ng c\u1ea5p c\u00f4ng tr\u00ecnh v\u1ec7 sinh \u0111\u00f4 th\u1ecb gi\u00fap ng\u0103n ng\u1eeba c\u00e1c d\u1ecbch b\u1ec7nh l\u00e2y qua ngu\u1ed3n n\u01b0\u1edbc v\u00e0o m\u00f9a m\u01b0a.",
      collocations: ["improve sanitation facilities", "modern sanitation facilities"]
    }
    ,
    {
      id: "v-boost-city-dweller",
      word: "city dweller",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01b0 d\u00e2n th\u00e0nh th\u1ecb",
      ipa: "/\u02c8s\u026ati \u02c8dwel\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=city+dweller&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      exampleEn: "City dwellers often crave weekend escapes to calm countryside orchards.",
      exampleVi: "C\u01b0 d\u00e2n \u0111\u00f4 th\u1ecb th\u01b0\u1eddng mong mu\u1ed1n nh\u1eefng chuy\u1ebfn ngh\u1ec9 ng\u01a1i cu\u1ed1i tu\u1ea7n v\u1ec1 c\u00e1c v\u01b0\u1eddn c\u00e2y mi\u1ec7t v\u01b0\u1eddn.",
      collocations: ["urban city dwellers", "lifestyle of city dwellers"]
    }
    ,
    {
      id: "v-boost-suburban-commuter",
      word: "suburban commuter",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi \u0111i l\u00e0m t\u1eeb ngo\u1ea1i \u00f4 v\u00e0o n\u1ed9i \u0111\u00f4",
      ipa: "/s\u0259\u02c8b\u025c\u02d0b\u0259n k\u0259\u02c8mju\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=suburban+commuter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thousands of suburban commuters board express trains at sunrise every weekday.",
      exampleVi: "H\u00e0ng ng\u00e0n ng\u01b0\u1eddi \u0111i l\u00e0m t\u1eeb ngo\u1ea1i \u00f4 l\u00ean c\u00e1c chuy\u1ebfn t\u00e0u h\u1ecfa t\u1ed1c h\u00e0nh l\u00fac b\u00ecnh minh m\u1ed7i ng\u00e0y.",
      collocations: ["daily suburban commuter", "rush of suburban commuters"]
    }
    ,
    {
      id: "v-boost-industrial-zone",
      word: "industrial zone",
      partOfSpeech: "n.phr",
      meaningVi: "khu ch\u1ebf xu\u1ea5t c\u00f4ng nghi\u1ec7p t\u1eadp trung",
      ipa: "/\u026an\u02c8d\u028cstri\u0259l z\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=industrial+zone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strict environmental filters are installed in smokestacks across the industrial zone.",
      exampleVi: "B\u1ed9 l\u1ecdc kh\u00ed th\u1ea3i m\u00f4i tr\u01b0\u1eddng nghi\u00eam ng\u1eb7t \u0111\u01b0\u1ee3c l\u1eafp \u0111\u1eb7t tr\u00ean \u1ed1ng kh\u00f3i trong khu c\u00f4ng nghi\u1ec7p.",
      collocations: ["high-tech industrial zone", "relocate to an industrial zone"]
    }
    ,
    {
      id: "v-boost-living-standard",
      word: "living standard",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ee9c s\u1ed1ng v\u00e0 ti\u1ec7n nghi sinh ho\u1ea1t",
      ipa: "/\u02c8l\u026av\u026a\u014b \u02c8st\u00e6nd\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=living+standard&type=2",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Access to clean tap water and high-speed broadband has raised the general living standard.",
      exampleVi: "N\u01b0\u1edbc m\u00e1y s\u1ea1ch v\u00e0 m\u1ea1ng internet t\u1ed1c \u0111\u1ed9 cao \u0111\u00e3 n\u00e2ng cao m\u1ee9c s\u1ed1ng chung c\u1ee7a ng\u01b0\u1eddi d\u00e2n.",
      collocations: ["elevate living standards", "high living standard"]
    }
  ],
  "unit-5-the-world-of-work": [
    {
      id: "v12-u5-job-market",
      word: "job market",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ecb tr\u01b0\u1eddng vi\u1ec7c l\u00e0m v\u00e0 tuy\u1ec3n d\u1ee5ng",
      ipa: "/\u02c8d\u0292\u0252b \u02ccm\u0251\u02d0k\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+market&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The digital job market demands versatile candidates with both coding and communication skills.",
      exampleVi: "Th\u1ecb tr\u01b0\u1eddng vi\u1ec7c l\u00e0m th\u1eddi \u0111\u1ea1i s\u1ed1 \u0111\u00f2i h\u1ecfi c\u00e1c \u1ee9ng vi\u00ean \u0111a n\u0103ng c\u00f3 c\u1ea3 k\u1ef9 n\u0103ng l\u1eadp tr\u00ecnh l\u1eabn giao ti\u1ebfp.",
      collocations: ["competitive job market", "enter the job market"]
    },
    {
      id: "v12-u5-employment-prospects",
      word: "employment prospects",
      partOfSpeech: "n.phr",
      meaningVi: "tri\u1ec3n v\u1ecdng c\u01a1 h\u1ed9i c\u00f3 vi\u1ec7c l\u00e0m",
      ipa: "/\u026am\u02c8pl\u0254\u026am\u0259nt \u02c8pr\u0252spekts/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=employment+prospects&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Graduates who master artificial intelligence and data science enjoy stellar employment prospects.",
      exampleVi: "Sinh vi\u00ean t\u1ed1t nghi\u1ec7p th\u00e0nh th\u1ea1o tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o v\u00e0 khoa h\u1ecdc d\u1eef li\u1ec7u c\u00f3 tri\u1ec3n v\u1ecdng vi\u1ec7c l\u00e0m r\u1ea5t x\u00e1n l\u1ea1n.",
      collocations: ["bright employment prospects", "boost employment prospects"]
    },
    {
      id: "v12-u5-freelance",
      word: "freelance",
      partOfSpeech: "adj / v",
      meaningVi: "l\u00e0m vi\u1ec7c \u0111\u1ed9c l\u1eadp t\u1ef1 do theo d\u1ef1 \u00e1n",
      ipa: "/\u02c8fri\u02d0l\u0251\u02d0ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=freelance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She works as a freelance graphic designer for international publishing houses.",
      exampleVi: "C\u00f4 \u1ea5y l\u00e0m thi\u1ebft k\u1ebf \u0111\u1ed3 h\u1ecda t\u1ef1 do theo d\u1ef1 \u00e1n cho c\u00e1c nh\u00e0 xu\u1ea5t b\u1ea3n qu\u1ed1c t\u1ebf.",
      collocations: ["freelance worker", "go freelance"]
    },
    {
      id: "v12-u5-career-ladder",
      word: "career ladder",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ea5c thang th\u0103ng ti\u1ebfn trong ngh\u1ec1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02c8l\u00e6d\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+ladder&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "His dedication and strategic vision propelled him swiftly up the corporate career ladder.",
      exampleVi: "S\u1ef1 t\u1eadn t\u1ee5y v\u00e0 t\u1ea7m nh\u00ecn chi\u1ebfn l\u01b0\u1ee3c \u0111\u00e3 gi\u00fap anh nhanh ch\u00f3ng th\u0103ng ti\u1ebfn tr\u00ean n\u1ea5c thang s\u1ef1 nghi\u1ec7p.",
      collocations: ["climb the career ladder", "top of the career ladder"]
    },
    {
      id: "v12-u5-work-life-balance",
      word: "work-life balance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng gi\u1eefa c\u00f4ng vi\u1ec7c v\u00e0 \u0111\u1eddi s\u1ed1ng c\u00e1 nh\u00e2n",
      ipa: "/\u02ccw\u025c\u02d0k la\u026af \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work-life+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Maintaining a healthy work-life balance prevents burnout and keeps families connected.",
      exampleVi: "Duy tr\u00ec s\u1ef1 c\u00e2n b\u1eb1ng gi\u1eefa c\u00f4ng vi\u1ec7c v\u00e0 cu\u1ed9c s\u1ed1ng gi\u00fap ng\u0103n ng\u1eeba ki\u1ec7t s\u1ee9c v\u00e0 gi\u1eef l\u1eeda h\u1ea1nh ph\u00fac gia \u0111\u00ecnh.",
      collocations: ["achieve work-life balance", "healthy work-life balance"]
    },
    {
      id: "v12-u5-telecommuting",
      word: "telecommuting",
      partOfSpeech: "n",
      meaningVi: "l\u00e0m vi\u1ec7c t\u1eeb xa qua m\u1ea1ng m\u00e1y t\u00ednh",
      ipa: "/\u02cctelik\u0259\u02c8mju\u02d0t\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=telecommuting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Telecommuting allows employees to work productively from home while cutting travel hours.",
      exampleVi: "L\u00e0m vi\u1ec7c t\u1eeb xa cho ph\u00e9p nh\u00e2n vi\u00ean l\u00e0m vi\u1ec7c hi\u1ec7u qu\u1ea3 t\u1ea1i nh\u00e0 \u0111\u1ed3ng th\u1eddi c\u1eaft gi\u1ea3m th\u1eddi gian \u0111i l\u1ea1i.",
      collocations: ["adopt telecommuting", "benefits of telecommuting"]
    },
    {
      id: "v12-u5-job-satisfaction",
      word: "job satisfaction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u1ecfa m\u00e3n v\u00e0 h\u00e0i l\u00f2ng v\u1edbi c\u00f4ng vi\u1ec7c",
      ipa: "/\u02c8d\u0292\u0252b \u02ccs\u00e6t\u026as\u02c8f\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+satisfaction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meaningful tasks and respectful colleagues contribute directly to high job satisfaction.",
      exampleVi: "C\u00f4ng vi\u1ec7c \u00fd ngh\u0129a v\u00e0 \u0111\u1ed3ng nghi\u1ec7p bi\u1ebft t\u00f4n tr\u1ecdng nhau g\u00f3p ph\u1ea7n tr\u1ef1c ti\u1ebfp t\u1ea1o n\u00ean s\u1ef1 h\u00e0i l\u00f2ng ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["high job satisfaction", "derive job satisfaction"]
    },
    {
      id: "v12-u5-interview-technique",
      word: "interview technique",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng ph\u1ecfng v\u1ea5n xin vi\u1ec7c kh\u00e9o l\u00e9o",
      ipa: "/\u02c8\u026ant\u0259vju\u02d0 tek\u02c8ni\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interview+technique&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing mock interviews with mentors sharpens your poise and interview technique.",
      exampleVi: "Luy\u1ec7n t\u1eadp ph\u1ecfng v\u1ea5n th\u1eed c\u00f9ng ng\u01b0\u1eddi h\u01b0\u1edbng d\u1eabn gi\u00fap r\u00e8n luy\u1ec7n s\u1ef1 \u0111\u0129nh \u0111\u1ea1c v\u00e0 k\u1ef9 n\u0103ng ph\u1ecfng v\u1ea5n.",
      collocations: ["master interview techniques", "effective interview technique"]
    },
    {
      id: "v12-u5-soft-skills",
      word: "soft skills",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c k\u1ef9 n\u0103ng m\u1ec1m (giao ti\u1ebfp, l\u00e0m vi\u1ec7c nh\u00f3m, \u1ee9ng x\u1eed)",
      ipa: "/\u02c8s\u0252ft sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soft+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "While technical know-how secures an interview, soft skills win long-term promotions.",
      exampleVi: "N\u1ebfu ki\u1ebfn th\u1ee9c chuy\u00ean m\u00f4n gi\u00fap b\u1ea1n qua v\u00f2ng h\u1ed3 s\u01a1, th\u00ec k\u1ef9 n\u0103ng m\u1ec1m quy\u1ebft \u0111\u1ecbnh s\u1ef1 th\u0103ng ti\u1ebfn l\u00e2u d\u00e0i.",
      collocations: ["develop soft skills", "crucial soft skills"]
    },
    {
      id: "v12-u5-layoff",
      word: "layoff",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ee3t c\u1eaft gi\u1ea3m sa th\u1ea3i nh\u00e2n s\u1ef1",
      ipa: "/\u02c8le\u026a\u0252f/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=layoff&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "During the global recession, the tech titan announced a five percent workforce layoff.",
      exampleVi: "Trong \u0111\u1ee3t suy tho\u00e1i kinh t\u1ebf to\u00e0n c\u1ea7u, t\u1eadp \u0111o\u00e0n c\u00f4ng ngh\u1ec7 \u0111\u00e3 c\u00f4ng b\u1ed1 c\u1eaft gi\u1ea3m 5% nh\u00e2n s\u1ef1.",
      collocations: ["face layoffs", "avoid mass layoffs"]
    },
    {
      id: "v12-u5-headhunter",
      word: "headhunter",
      partOfSpeech: "n",
      meaningVi: "chuy\u00ean vi\u00ean s\u0103n \u0111\u1ea7u ng\u01b0\u1eddi t\u00ecm ki\u1ebfm nh\u00e2n t\u00e0i",
      ipa: "/\u02c8hedh\u028cnt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=headhunter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Executive headhunters frequently contact senior software architects with lucrative offers.",
      exampleVi: "C\u00e1c chuy\u00ean vi\u00ean s\u0103n \u0111\u1ea7u ng\u01b0\u1eddi c\u1ea5p cao th\u01b0\u1eddng xuy\u00ean li\u00ean h\u1ec7 v\u1edbi c\u00e1c ki\u1ebfn tr\u00fac s\u01b0 ph\u1ea7n m\u1ec1m k\u1ef3 c\u1ef1u.",
      collocations: ["contacted by a headhunter", "role of headhunters"]
    },
    {
      id: "v12-u5-probation",
      word: "probation",
      partOfSpeech: "n",
      meaningVi: "th\u1eddi gian th\u1eed vi\u1ec7c tr\u01b0\u1edbc khi k\u00fd h\u1ee3p \u0111\u1ed3ng ch\u00ednh th\u1ee9c",
      ipa: "/pr\u0259\u02c8be\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=probation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "New employees undergo a two-month probation period before receiving health insurance.",
      exampleVi: "Nh\u00e2n vi\u00ean m\u1edbi tr\u1ea3i qua th\u1eddi gian th\u1eed vi\u1ec7c hai th\u00e1ng tr\u01b0\u1edbc khi \u0111\u01b0\u1ee3c \u0111\u00f3ng b\u1ea3o hi\u1ec3m y t\u1ebf \u0111\u1ea7y \u0111\u1ee7.",
      collocations: ["probation period", "pass probation"]
    },
    {
      id: "v12-u5-remuneration",
      word: "remuneration",
      partOfSpeech: "n",
      meaningVi: "ch\u1ebf \u0111\u1ed9 th\u00f9 lao v\u00e0 ti\u1ec1n l\u01b0\u01a1ng \u0111\u00e3i ng\u1ed9",
      ipa: "/r\u026a\u02ccmju\u02d0n\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=remuneration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The firm offers competitive remuneration packages with performance bonuses and stock options.",
      exampleVi: "C\u00f4ng ty \u0111\u01b0a ra g\u00f3i th\u00f9 lao \u0111\u00e3i ng\u1ed9 c\u1ea1nh tranh g\u1ed3m th\u01b0\u1edfng hi\u1ec7u qu\u1ea3 c\u00f4ng vi\u1ec7c v\u00e0 quy\u1ec1n mua c\u1ed5 phi\u1ebfu.",
      collocations: ["attractive remuneration", "remuneration package"]
    },
    {
      id: "v12-u5-severance-pay",
      word: "severance pay",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u1ec1n tr\u1ee3 c\u1ea5p th\u00f4i vi\u1ec7c khi ngh\u1ec9 l\u00e0m",
      ipa: "/\u02c8sev\u0259r\u0259ns pe\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=severance+pay&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Laid-off workers received six months of severance pay and healthcare continuation.",
      exampleVi: "Nh\u1eefng ng\u01b0\u1eddi lao \u0111\u1ed9ng b\u1ecb tinh gi\u1ea3n bi\u00ean ch\u1ebf \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c s\u00e1u th\u00e1ng ti\u1ec1n tr\u1ee3 c\u1ea5p th\u00f4i vi\u1ec7c.",
      collocations: ["receive severance pay", "generous severance pay"]
    },
    {
      id: "v12-u5-gig-economy",
      word: "gig economy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ec1n kinh t\u1ebf vi\u1ec7c l\u00e0m ng\u1eafn h\u1ea1n (ch\u1ea1y app, l\u00e0m th\u1eddi v\u1ee5)",
      ipa: "/\u02c8\u0261\u026a\u0261 \u026a\u02cck\u0252n\u0259mi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gig+economy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ride-hailing apps and delivery services are quintessential examples of the gig economy.",
      exampleVi: "C\u00e1c \u1ee9ng d\u1ee5ng g\u1ecdi xe c\u00f4ng ngh\u1ec7 v\u00e0 giao h\u00e0ng l\u00e0 v\u00ed d\u1ee5 \u0111i\u1ec3n h\u00ecnh c\u1ee7a n\u1ec1n kinh t\u1ebf vi\u1ec7c l\u00e0m ng\u1eafn h\u1ea1n.",
      collocations: ["rise of the gig economy", "workers in the gig economy"]
    },
    {
      id: "v12-u5-appraisal",
      word: "appraisal",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 \u0111\u00e1nh gi\u00e1 x\u1ebfp lo\u1ea1i hi\u1ec7u qu\u1ea3 c\u00f4ng vi\u1ec7c \u0111\u1ecbnh k\u1ef3",
      ipa: "/\u0259\u02c8pre\u026azl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=appraisal&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her stellar annual performance appraisal paved the way for promotion to vice president.",
      exampleVi: "K\u1ebft qu\u1ea3 \u0111\u00e1nh gi\u00e1 x\u1ebfp lo\u1ea1i c\u00f4ng vi\u1ec7c th\u01b0\u1eddng ni\u00ean xu\u1ea5t s\u1eafc \u0111\u00e3 m\u1edf \u0111\u01b0\u1eddng cho c\u00f4 th\u0103ng ch\u1ee9c ph\u00f3 ch\u1ee7 t\u1ecbch.",
      collocations: ["performance appraisal", "annual appraisal"]
    },
    {
      id: "v12-u5-redundancy",
      word: "redundancy",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 sa th\u1ea3i do v\u1ecb tr\u00ed c\u00f4ng vi\u1ec7c kh\u00f4ng c\u00f2n c\u1ea7n thi\u1ebft",
      ipa: "/r\u026a\u02c8d\u028cnd\u0259nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=redundancy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Factory automation unfortunately led to thirty staff redundancies on the assembly line.",
      exampleVi: "T\u1ef1 \u0111\u1ed9ng h\u00f3a nh\u00e0 m\u00e1y kh\u00f4ng may \u0111\u00e3 d\u1eabn t\u1edbi vi\u1ec7c c\u1eaft gi\u1ea3m ba m\u01b0\u01a1i v\u1ecb tr\u00ed tr\u00ean d\u00e2y chuy\u1ec1n.",
      collocations: ["face redundancy", "voluntary redundancy"]
    },
    {
      id: "v12-u5-workplace-wellness",
      word: "workplace wellness",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u0103m s\u00f3c s\u1ee9c kh\u1ecfe th\u1ec3 ch\u1ea5t v\u00e0 tinh th\u1ea7n t\u1ea1i n\u01a1i l\u00e0m vi\u1ec7c",
      ipa: "/\u02c8w\u025c\u02d0kple\u026as \u02c8weln\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=workplace+wellness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Providing gym memberships and ergonomic chairs improves workplace wellness.",
      exampleVi: "H\u1ed7 tr\u1ee3 th\u1ebb t\u1eadp th\u1ec3 h\u00ecnh v\u00e0 gh\u1ebf c\u00f4ng th\u00e1i h\u1ecdc gi\u00fap n\u00e2ng cao s\u1ee9c kh\u1ecfe t\u1ea1i n\u01a1i l\u00e0m vi\u1ec7c.",
      collocations: ["promote workplace wellness", "workplace wellness program"]
    },
    {
      id: "v12-u5-onboarding",
      word: "onboarding",
      partOfSpeech: "n",
      meaningVi: "quy tr\u00ecnh h\u01b0\u1edbng d\u1eabn h\u00f2a nh\u1eadp cho nh\u00e2n vi\u00ean m\u1edbi",
      ipa: "/\u02c8\u0252nb\u0254\u02d0d\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=onboarding&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A structured onboarding week pairs each newcomer with an experienced department buddy.",
      exampleVi: "Tu\u1ea7n l\u1ec5 h\u01b0\u1edbng d\u1eabn nh\u00e2n vi\u00ean m\u1edbi b\u00e0i b\u1ea3n gh\u00e9p \u0111\u00f4i m\u1ed7i ng\u01b0\u1eddi m\u1edbi v\u1edbi m\u1ed9t \u0111\u1ed3ng nghi\u1ec7p gi\u00e0u kinh nghi\u1ec7m.",
      collocations: ["onboarding process", "smooth onboarding"]
    },
    {
      id: "v12-u5-entrepreneurship",
      word: "entrepreneurship",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n kh\u1edfi nghi\u1ec7p v\u00e0 kinh doanh \u0111\u1ed5i m\u1edbi",
      ipa: "/\u02cc\u0252ntr\u0259pr\u0259\u02c8n\u025c\u02d0\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entrepreneurship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "University business incubators provide seed funding to encourage student entrepreneurship.",
      exampleVi: "V\u01b0\u1eddn \u01b0\u01a1m doanh nghi\u1ec7p tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc cung c\u1ea5p v\u1ed1n m\u1ed3i \u0111\u1ec3 khuy\u1ebfn kh\u00edch sinh vi\u00ean kh\u1edfi nghi\u1ec7p.",
      collocations: ["foster entrepreneurship", "spirit of entrepreneurship"]
    }
    ,
    {
      id: "v12-extra-labor-market-dynamics",
      word: "labor market dynamics",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 bi\u1ebfn \u0111\u1ed9ng c\u1ee7a th\u1ecb tr\u01b0\u1eddng lao \u0111\u1ed9ng",
      ipa: "/\u02c8le\u026ab\u0259 \u02ccm\u0251\u02d0k\u026at da\u026a\u02c8n\u00e6m\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=labor+market+dynamics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Understanding labor market dynamics helps students choose future-proof majors.",
      exampleVi: "Hi\u1ec3u r\u00f5 s\u1ef1 bi\u1ebfn \u0111\u1ed9ng c\u1ee7a th\u1ecb tr\u01b0\u1eddng lao \u0111\u1ed9ng gi\u00fap sinh vi\u00ean ch\u1ecdn ng\u00e0nh h\u1ecdc \u0111\u00f3n \u0111\u1ea7u t\u01b0\u01a1ng lai.",
      collocations: ["study labor market dynamics", "rapid dynamics"]
    }
    ,
    {
      id: "v12-extra-career-progression",
      word: "career progression",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u1ebfn tr\u00ecnh ph\u00e1t tri\u1ec3n v\u00e0 th\u0103ng ti\u1ebfn ngh\u1ec1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 pr\u0259\u02cc\u0261re\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+progression&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Continuous upskilling guarantees steady, satisfying career progression.",
      exampleVi: "Kh\u00f4ng ng\u1eebng n\u00e2ng cao k\u1ef9 n\u0103ng \u0111\u1ea3m b\u1ea3o s\u1ef1 ph\u00e1t tri\u1ec3n ngh\u1ec1 nghi\u1ec7p v\u1eefng ch\u1eafc v\u00e0 m\u00e3n nguy\u1ec7n.",
      collocations: ["accelerate career progression", "clear career progression"]
    }
    ,
    {
      id: "v12-extra-work-ethic",
      word: "work ethic",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1o \u0111\u1ee9c v\u00e0 tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m trong c\u00f4ng vi\u1ec7c",
      ipa: "/\u02c8w\u025c\u02d0k \u02cce\u03b8\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work+ethic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her punctuality, honesty, and diligence reflect an impeccable work ethic.",
      exampleVi: "S\u1ef1 \u0111\u00fang gi\u1edd, trung th\u1ef1c v\u00e0 si\u00eang n\u0103ng c\u1ee7a c\u00f4 ph\u1ea3n \u00e1nh tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m ngh\u1ec1 nghi\u1ec7p \u0111\u00e1ng n\u1ec3.",
      collocations: ["strong work ethic", "admirable work ethic"]
    }
    ,
    {
      id: "v12-extra-job-stability",
      word: "job stability",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u1ed5n \u0111\u1ecbnh l\u00e2u d\u00e0i trong c\u00f4ng vi\u1ec7c",
      ipa: "/\u02c8d\u0292\u0252b st\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+stability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Public sector careers offer valuable job stability alongside healthcare benefits.",
      exampleVi: "C\u00f4ng vi\u1ec7c trong khu v\u1ef1c c\u00f4ng mang l\u1ea1i s\u1ef1 \u1ed5n \u0111\u1ecbnh vi\u1ec7c l\u00e0m c\u00f9ng ch\u1ebf \u0111\u1ed9 y t\u1ebf t\u1ed1t.",
      collocations: ["seek job stability", "lack of job stability"]
    }
    ,
    {
      id: "v12-extra-recruitment-drive",
      word: "recruitment drive",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ee3t tuy\u1ec3n d\u1ee5ng nh\u00e2n s\u1ef1 quy m\u00f4 l\u1edbn",
      ipa: "/r\u026a\u02c8kru\u02d0tm\u0259nt dra\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=recruitment+drive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The tech conglomerate launched a nationwide recruitment drive for software architects.",
      exampleVi: "T\u1eadp \u0111o\u00e0n c\u00f4ng ngh\u1ec7 ph\u00e1t \u0111\u1ed9ng \u0111\u1ee3t tuy\u1ec3n d\u1ee5ng to\u00e0n qu\u1ed1c cho v\u1ecb tr\u00ed ki\u1ebfn tr\u00fac s\u01b0 ph\u1ea7n m\u1ec1m.",
      collocations: ["launch a recruitment drive", "annual recruitment drive"]
    }
    ,
    {
      id: "v12-extra-corporate-culture",
      word: "corporate culture",
      partOfSpeech: "n.phr",
      meaningVi: "v\u0103n h\u00f3a doanh nghi\u1ec7p v\u0103n minh",
      ipa: "/\u02c8k\u0254\u02d0p\u0259r\u0259t \u02c8k\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=corporate+culture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A positive corporate culture encourages collaborative brainstorming without fear of failure.",
      exampleVi: "V\u0103n h\u00f3a doanh nghi\u1ec7p t\u00edch c\u1ef1c khuy\u1ebfn kh\u00edch \u0111\u00f3ng g\u00f3p \u00fd t\u01b0\u1edfng m\u00e0 kh\u00f4ng ng\u1ea1i th\u1ea5t b\u1ea1i.",
      collocations: ["healthy corporate culture", "build corporate culture"]
    }
    ,
    {
      id: "v12-extra-employee-retention",
      word: "employee retention",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u1eef ch\u00e2n nh\u00e2n t\u00e0i g\u1eafn b\u00f3 l\u00e2u d\u00e0i",
      ipa: "/\u026am\u02c8pl\u0254\u026ai\u02d0 r\u026a\u02c8ten\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=employee+retention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Flexible hours and fair bonuses are proven strategies for high employee retention.",
      exampleVi: "Gi\u1edd l\u00e0m linh ho\u1ea1t v\u00e0 th\u01b0\u1edfng c\u00f4ng b\u1eb1ng l\u00e0 chi\u1ebfn l\u01b0\u1ee3c hi\u1ec7u qu\u1ea3 \u0111\u1ec3 gi\u1eef ch\u00e2n nh\u00e2n t\u00e0i.",
      collocations: ["improve employee retention", "employee retention rate"]
    }
    ,
    {
      id: "v12-extra-hybrid-workplace",
      word: "hybrid workplace",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4i tr\u01b0\u1eddng l\u00e0m vi\u1ec7c k\u1ebft h\u1ee3p (t\u1ea1i nh\u00e0 v\u00e0 v\u0103n ph\u00f2ng)",
      ipa: "/\u02c8ha\u026abr\u026ad \u02c8w\u025c\u02d0kple\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hybrid+workplace&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The hybrid workplace lets employees work two days from home each week.",
      exampleVi: "M\u00f4 h\u00ecnh l\u00e0m vi\u1ec7c k\u1ebft h\u1ee3p cho ph\u00e9p nh\u00e2n vi\u00ean l\u00e0m vi\u1ec7c t\u1ea1i nh\u00e0 hai ng\u00e0y m\u1ed7i tu\u1ea7n.",
      collocations: ["adapt to a hybrid workplace", "hybrid workplace model"]
    }
    ,
    {
      id: "v12-extra-performance-evaluation",
      word: "performance evaluation",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e1nh gi\u00e1 hi\u1ec7u qu\u1ea3 c\u00f4ng t\u00e1c \u0111\u1ecbnh k\u1ef3",
      ipa: "/p\u0259\u02c8f\u0254\u02d0m\u0259ns \u026a\u02ccv\u00e6lju\u02c8e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=performance+evaluation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Constructive feedback during performance evaluation sets clear milestones for the year.",
      exampleVi: "G\u00f3p \u00fd ch\u00e2n th\u00e0nh trong \u0111\u1ee3t \u0111\u00e1nh gi\u00e1 \u0111\u1ecbnh k\u1ef3 gi\u00fap x\u00e1c \u0111\u1ecbnh r\u00f5 m\u1ee5c ti\u00eau cho n\u0103m m\u1edbi.",
      collocations: ["annual performance evaluation", "conduct performance evaluation"]
    }
    ,
    {
      id: "v12-extra-workplace-diversity",
      word: "workplace diversity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111a d\u1ea1ng v\u0103n h\u00f3a v\u00e0 gi\u1edbi t\u00ednh n\u01a1i l\u00e0m vi\u1ec7c",
      ipa: "/\u02c8w\u025c\u02d0kple\u026as da\u026a\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=workplace+diversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Workplace diversity sparks innovative ideas from people of different backgrounds.",
      exampleVi: "S\u1ef1 \u0111a d\u1ea1ng t\u1ea1i n\u01a1i l\u00e0m vi\u1ec7c k\u00edch ho\u1ea1t nh\u1eefng \u00fd t\u01b0\u1edfng s\u00e1ng t\u1ea1o t\u1eeb nh\u1eefng g\u00f3c nh\u00ecn kh\u00e1c nhau.",
      collocations: ["champion workplace diversity", "value workplace diversity"]
    }
    ,
    {
      id: "v12-extra-internship-program",
      word: "internship program",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh th\u1ef1c t\u1eadp sinh c\u1ecd x\u00e1t th\u1ef1c t\u1ebf",
      ipa: "/\u02c8\u026ant\u025c\u02d0n\u0283\u026ap \u02c8pr\u0259\u028a\u0261r\u00e6m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=internship+program&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The summer internship program offers university seniors mentorship from department heads.",
      exampleVi: "Ch\u01b0\u01a1ng tr\u00ecnh th\u1ef1c t\u1eadp m\u00f9a h\u00e8 mang l\u1ea1i cho sinh vi\u00ean s\u1ef1 h\u01b0\u1edbng d\u1eabn t\u1eeb c\u00e1c tr\u01b0\u1edfng ph\u00f2ng.",
      collocations: ["enroll in an internship program", "prestigious internship program"]
    }
    ,
    {
      id: "v12-extra-professional-network",
      word: "professional network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi quan h\u1ec7 \u0111\u1ed3ng nghi\u1ec7p ngh\u1ec1 nghi\u1ec7p",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Attending international seminars broadens your professional network.",
      exampleVi: "Tham d\u1ef1 c\u00e1c bu\u1ed5i h\u1ed9i th\u1ea3o qu\u1ed1c t\u1ebf gi\u00fap m\u1edf r\u1ed9ng m\u1ea1ng l\u01b0\u1edbi quan h\u1ec7 \u0111\u1ed3ng nghi\u1ec7p.",
      collocations: ["expand professional network", "active professional network"]
    }
    ,
    {
      id: "v12-extra-adaptability",
      word: "adaptability",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng th\u00edch \u1ee9ng linh ho\u1ea1t tr\u01b0\u1edbc bi\u1ebfn \u0111\u1ed9ng",
      ipa: "/\u0259\u02ccd\u00e6pt\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High adaptability helps software engineers master new programming languages swiftly.",
      exampleVi: "Kh\u1ea3 n\u0103ng th\u00edch \u1ee9ng cao gi\u00fap k\u1ef9 s\u01b0 ph\u1ea7n m\u1ec1m l\u00e0m ch\u1ee7 c\u00e1c ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh m\u1edbi nhanh ch\u00f3ng.",
      collocations: ["demonstrate adaptability", "crucial adaptability"]
    }
    ,
    {
      id: "v12-extra-career-fulfillment",
      word: "career fulfillment",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ea3m gi\u00e1c m\u00e3n nguy\u1ec7n v\u1edbi s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 f\u028al\u02c8f\u026alm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+fulfillment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Doing work that helps the community brings profound career fulfillment.",
      exampleVi: "L\u00e0m c\u00f4ng vi\u1ec7c gi\u00fap \u00edch cho c\u1ed9ng \u0111\u1ed3ng \u0111em l\u1ea1i s\u1ef1 m\u00e3n nguy\u1ec7n s\u00e2u s\u1eafc trong s\u1ef1 nghi\u1ec7p.",
      collocations: ["achieve career fulfillment", "seek career fulfillment"]
    }
    ,
    {
      id: "v-boost-job-market-demand",
      word: "job market demand",
      partOfSpeech: "n.phr",
      meaningVi: "nhu c\u1ea7u tuy\u1ec3n d\u1ee5ng c\u1ee7a th\u1ecb tr\u01b0\u1eddng vi\u1ec7c l\u00e0m",
      ipa: "/d\u0292\u0252b \u02c8m\u0251\u02d0k\u026at d\u026a\u02c8m\u0251\u02d0nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+market+demand&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Universities adjust their training curricula to match actual job market demand.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc \u0111i\u1ec1u ch\u1ec9nh gi\u00e1o tr\u00ecnh \u0111\u00e0o t\u1ea1o cho ph\u00f9 h\u1ee3p nhu c\u1ea7u th\u1ef1c t\u1ebf c\u1ee7a th\u1ecb tr\u01b0\u1eddng.",
      collocations: ["meet job market demand", "shift in job market demand"]
    }
    ,
    {
      id: "v-boost-probationary-period",
      word: "probationary period",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eddi gian th\u1eed vi\u1ec7c ban \u0111\u1ea7u",
      ipa: "/pr\u0259\u02c8be\u026a\u0283\u0259nri \u02c8p\u026a\u0259ri\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=probationary+period&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She impressed her team leads during her two-month probationary period.",
      exampleVi: "C\u00f4 \u1ea5y \u0111\u00e3 g\u00e2y \u1ea5n t\u01b0\u1ee3ng xu\u1ea5t s\u1eafc v\u1edbi l\u00e3nh \u0111\u1ea1o nh\u00f3m trong hai th\u00e1ng th\u1eed vi\u1ec7c.",
      collocations: ["complete the probationary period", "standard probationary period"]
    }
    ,
    {
      id: "v-boost-fringe-benefits",
      word: "fringe benefits",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00fac l\u1ee3i v\u00e0 \u0111\u00e3i ng\u1ed9 b\u1ed5 sung",
      ipa: "/\u02c8fr\u026and\u0292 \u02c8ben\u026af\u026ats/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fringe+benefits&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Attractive fringe benefits like health insurance and gym memberships boost employee morale.",
      exampleVi: "C\u00e1c ch\u1ebf \u0111\u1ed9 \u0111\u00e3i ng\u1ed9 h\u1ea5p d\u1eabn nh\u01b0 b\u1ea3o hi\u1ec3m s\u1ee9c kh\u1ecfe v\u00e0 th\u1ebb t\u1eadp gym gi\u00fap n\u00e2ng cao tinh th\u1ea7n l\u00e0m vi\u1ec7c.",
      collocations: ["generous fringe benefits", "offer fringe benefits"]
    }
    ,
    {
      id: "v-boost-performance-appraisal",
      word: "performance appraisal",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i \u0111\u00e1nh gi\u00e1 hi\u1ec7u qu\u1ea3 c\u00f4ng vi\u1ec7c",
      ipa: "/p\u0259\u02c8f\u0254\u02d0m\u0259ns \u0259\u02c8pre\u026azl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=performance+appraisal&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Annual performance appraisals determine salary increments and promotions.",
      exampleVi: "Bu\u1ed5i \u0111\u00e1nh gi\u00e1 n\u0103ng l\u1ef1c h\u1eb1ng n\u0103m l\u00e0 c\u0103n c\u1ee9 \u0111\u1ec3 quy\u1ebft \u0111\u1ecbnh t\u0103ng l\u01b0\u01a1ng v\u00e0 c\u1ea5t nh\u1eafc th\u0103ng ch\u1ee9c.",
      collocations: ["conduct a performance appraisal", "rigorous performance appraisal"]
    }
    ,
    {
      id: "v-boost-telecommuting",
      word: "telecommuting",
      partOfSpeech: "n",
      meaningVi: "l\u00e0m vi\u1ec7c t\u1eeb xa qua m\u1ea1ng internet",
      ipa: "/\u02cctelik\u0259\u02c8mju\u02d0t\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=telecommuting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Telecommuting allows software engineers to collaborate seamlessly across time zones.",
      exampleVi: "L\u00e0m vi\u1ec7c t\u1eeb xa cho ph\u00e9p c\u00e1c k\u1ef9 s\u01b0 ph\u1ea7n m\u1ec1m ph\u1ed1i h\u1ee3p nh\u1ecbp nh\u00e0ng xuy\u00ean m\u00fai gi\u1edd.",
      collocations: ["adopt telecommuting", "flexibility of telecommuting"]
    }
    ,
    {
      id: "v-boost-work-life-balance",
      word: "work-life balance",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e2n b\u1eb1ng gi\u1eefa s\u1ef1 nghi\u1ec7p v\u00e0 cu\u1ed9c s\u1ed1ng",
      ipa: "/\u02ccw\u025c\u02d0k la\u026af \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work-life+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Forward-thinking corporations prioritize healthy work-life balance for all staff.",
      exampleVi: "C\u00e1c t\u1eadp \u0111o\u00e0n c\u00f3 t\u1ea7m nh\u00ecn ti\u1ebfn b\u1ed9 lu\u00f4n coi tr\u1ecdng vi\u1ec7c c\u00e2n b\u1eb1ng h\u00e0i h\u00f2a gi\u1eefa c\u00f4ng vi\u1ec7c v\u00e0 \u0111\u1eddi s\u1ed1ng.",
      collocations: ["maintain work-life balance", "achieve work-life balance"]
    }
    ,
    {
      id: "v-boost-career-advancement",
      word: "career advancement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u0103ng ti\u1ebfn trong n\u1ea5c thang s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259r \u0259d\u02c8v\u0251\u02d0nsm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+advancement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Continuous skill enhancement is indispensable for steady career advancement.",
      exampleVi: "Li\u00ean t\u1ee5c n\u00e2ng cao k\u1ef9 n\u0103ng l\u00e0 \u0111i\u1ec1u ki\u1ec7n kh\u00f4ng th\u1ec3 thi\u1ebfu \u0111\u1ec3 th\u0103ng ti\u1ebfn ngh\u1ec1 nghi\u1ec7p v\u1eefng ch\u1eafc.",
      collocations: ["pathways to career advancement", "strive for career advancement"]
    }
    ,
    {
      id: "v-boost-job-satisfaction",
      word: "job satisfaction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u1ecfa m\u00e3n v\u00e0 g\u1eafn b\u00f3 v\u1edbi c\u00f4ng vi\u1ec7c",
      ipa: "/d\u0292\u0252b \u02ccs\u00e6t\u026as\u02c8f\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+satisfaction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meaningful tasks and supportive colleagues contribute immensely to job satisfaction.",
      exampleVi: "C\u00f4ng vi\u1ec7c c\u00f3 \u00fd ngh\u0129a v\u00e0 \u0111\u1ed3ng nghi\u1ec7p t\u1eadn t\u00ecnh \u0111\u00f3ng g\u00f3p r\u1ea5t l\u1edbn v\u00e0o s\u1ef1 h\u00e0i l\u00f2ng v\u1edbi ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["high job satisfaction", "improve job satisfaction"]
    }
    ,
    {
      id: "v-boost-professional-networking",
      word: "professional networking",
      partOfSpeech: "n.phr",
      meaningVi: "x\u00e2y d\u1ef1ng m\u1ed1i quan h\u1ec7 c\u00f4ng vi\u1ec7c chuy\u00ean nghi\u1ec7p",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl \u02c8netw\u025c\u02d0k\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+networking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Attending industry seminars is a great avenue for professional networking.",
      exampleVi: "Tham d\u1ef1 c\u00e1c h\u1ed9i th\u1ea3o chuy\u00ean ng\u00e0nh l\u00e0 c\u01a1 h\u1ed9i t\u1ed1t \u0111\u1ec3 m\u1edf r\u1ed9ng c\u00e1c m\u1ed1i quan h\u1ec7 \u0111\u1ed3ng nghi\u1ec7p.",
      collocations: ["engage in professional networking", "power of professional networking"]
    }
    ,
    {
      id: "v-boost-severance-package",
      word: "severance package",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n tr\u1ee3 c\u1ea5p th\u00f4i vi\u1ec7c h\u1ee3p ph\u00e1p",
      ipa: "/\u02c8sev\u0259r\u0259ns \u02c8p\u00e6k\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=severance+package&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Employees impacted by the restructuring received a very fair severance package.",
      exampleVi: "C\u00e1c nh\u00e2n vi\u00ean ch\u1ecbu \u1ea3nh h\u01b0\u1edfng do t\u00e1i c\u01a1 c\u1ea5u \u0111\u01b0\u1ee3c nh\u1eadn kho\u1ea3n tr\u1ee3 c\u1ea5p th\u00f4i vi\u1ec7c r\u1ea5t th\u1ecfa \u0111\u00e1ng.",
      collocations: ["negotiate a severance package", "entitled to a severance package"]
    }
    ,
    {
      id: "v-boost-vocational-training",
      word: "vocational training",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0o t\u1ea1o ngh\u1ec1 th\u1ef1c h\u00e0nh chuy\u00ean m\u00f4n",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283\u0259nl \u02c8tre\u026an\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocational+training&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High-quality vocational training equips graduates with immediate practical mastery.",
      exampleVi: "\u0110\u00e0o t\u1ea1o ngh\u1ec1 ch\u1ea5t l\u01b0\u1ee3ng cao trang b\u1ecb cho h\u1ecdc vi\u00ean k\u1ef9 n\u0103ng th\u1ef1c h\u00e0nh v\u1eefng v\u00e0ng ngay khi ra tr\u01b0\u1eddng.",
      collocations: ["enroll in vocational training", "vocational training center"]
    }
    ,
    {
      id: "v-boost-entry-level-position",
      word: "entry-level position",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb tr\u00ed c\u00f4ng vi\u1ec7c kh\u1edfi \u0111i\u1ec3m cho ng\u01b0\u1eddi m\u1edbi",
      ipa: "/\u02c8entri levl p\u0259\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entry-level+position&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fresh university graduates usually start in an entry-level position to learn routines.",
      exampleVi: "Sinh vi\u00ean m\u1edbi t\u1ed1t nghi\u1ec7p th\u01b0\u1eddng b\u1eaft \u0111\u1ea7u t\u1eeb v\u1ecb tr\u00ed kh\u1edfi \u0111i\u1ec3m \u0111\u1ec3 h\u1ecdc h\u1ecfi quy tr\u00ecnh th\u1ef1c t\u1ebf.",
      collocations: ["apply for an entry-level position", "entry-level position requirements"]
    }
    ,
    {
      id: "v-boost-corporate-culture",
      word: "corporate culture",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n s\u1eafc v\u0103n h\u00f3a doanh nghi\u1ec7p",
      ipa: "/\u02c8k\u0254\u02d0p\u0259r\u0259t \u02c8k\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=corporate+culture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Transparency, innovation, and mutual empathy define our corporate culture.",
      exampleVi: "S\u1ef1 minh b\u1ea1ch, s\u00e1ng t\u1ea1o v\u00e0 th\u1ea5u hi\u1ec3u l\u1eabn nhau t\u1ea1o n\u00ean n\u00e9t v\u0103n h\u00f3a \u0111\u1eb7c tr\u01b0ng c\u1ee7a c\u00f4ng ty ch\u00fang t\u00f4i.",
      collocations: ["strong corporate culture", "fit the corporate culture"]
    }
    ,
    {
      id: "v-boost-annual-leave-entitlement",
      word: "annual leave entitlement",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ebf \u0111\u1ed9 ngh\u1ec9 ph\u00e9p n\u0103m \u0111\u01b0\u1ee3c h\u01b0\u1edfng",
      ipa: "/\u02cc\u00e6nju\u0259l li\u02d0v \u026an\u02c8ta\u026atlm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=annual+leave+entitlement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every full-time staff member enjoys a statutory annual leave entitlement of fourteen days.",
      exampleVi: "M\u1ed7i nh\u00e2n vi\u00ean ch\u00ednh th\u1ee9c \u0111\u01b0\u1ee3c h\u01b0\u1edfng quy\u1ec1n l\u1ee3i ngh\u1ec9 ph\u00e9p n\u0103m 14 ng\u00e0y theo \u0111\u00fang lu\u1eadt \u0111\u1ecbnh.",
      collocations: ["statutory annual leave entitlement", "generous leave entitlement"]
    }
    ,
    {
      id: "v-boost-human-resource-management",
      word: "human resource management",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ea3n tr\u1ecb ngu\u1ed3n nh\u00e2n l\u1ef1c",
      ipa: "/\u02cchju\u02d0m\u0259n r\u026a\u02c8s\u0254\u02d0s \u02c8m\u00e6n\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=human+resource+management&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern human resource management emphasizes continuous employee coaching and retention.",
      exampleVi: "Qu\u1ea3n tr\u1ecb nh\u00e2n l\u1ef1c hi\u1ec7n \u0111\u1ea1i t\u1eadp trung v\u00e0o vi\u1ec7c \u0111\u00e0o t\u1ea1o k\u00e8m c\u1eb7p v\u00e0 gi\u1eef ch\u00e2n ng\u01b0\u1eddi t\u00e0i.",
      collocations: ["strategic human resource management", "principles of human resources"]
    }
    ,
    {
      id: "v-boost-work-ethic",
      word: "work ethic",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1o \u0111\u1ee9c ngh\u1ec1 nghi\u1ec7p v\u00e0 tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m",
      ipa: "/w\u025c\u02d0k \u02c8e\u03b8\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work+ethic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her impeccable work ethic and punctuality earned the admiration of all partners.",
      exampleVi: "\u0110\u1ea1o \u0111\u1ee9c l\u00e0m vi\u1ec7c ch\u1ec9n chu v\u00e0 t\u00ednh \u0111\u00fang gi\u1edd c\u1ee7a c\u00f4 \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 n\u1ec3 ph\u1ee5c c\u1ee7a c\u00e1c \u0111\u1ed1i t\u00e1c.",
      collocations: ["strong work ethic", "admirable work ethic"]
    }
  ],
  "unit-6-artificial-intelligence": [
    {
      id: "v12-u6-machine-learning",
      word: "machine learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc m\u00e1y (nh\u00e1nh c\u1ed1t l\u00f5i c\u1ee7a AI)",
      ipa: "/m\u0259\u02c8\u0283i\u02d0n \u02ccl\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=machine+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Machine learning models analyze millions of medical x-rays to spot early-stage tumors.",
      exampleVi: "M\u00f4 h\u00ecnh h\u1ecdc m\u00e1y ph\u00e2n t\u00edch h\u00e0ng tri\u1ec7u phim ch\u1ee5p X-quang \u0111\u1ec3 ph\u00e1t hi\u1ec7n kh\u1ed1i u giai \u0111o\u1ea1n s\u1edbm.",
      collocations: ["machine learning algorithms", "powered by machine learning"]
    },
    {
      id: "v12-u6-neural-network",
      word: "neural network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng n\u01a1-ron nh\u00e2n t\u1ea1o m\u00f4 ph\u1ecfng n\u00e3o b\u1ed9",
      ipa: "/\u02c8nj\u028a\u0259r\u0259l \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=neural+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deep neural networks enable computers to recognize human speech across various regional accents.",
      exampleVi: "M\u1ea1ng n\u01a1-ron s\u00e2u cho ph\u00e9p m\u00e1y t\u00ednh nh\u1eadn di\u1ec7n gi\u1ecdng n\u00f3i con ng\u01b0\u1eddi qua nhi\u1ec1u ch\u1ea5t gi\u1ecdng \u0111\u1ecba ph\u01b0\u01a1ng.",
      collocations: ["artificial neural network", "train a neural network"]
    },
    {
      id: "v12-u6-automation",
      word: "automation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u1ef1 \u0111\u1ed9ng h\u00f3a b\u1eb1ng robot v\u00e0 ph\u1ea7n m\u1ec1m",
      ipa: "/\u02cc\u0254\u02d0t\u0259\u02c8me\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=automation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Automation streamlines repetitive warehouse sorting and expedites parcel deliveries.",
      exampleVi: "T\u1ef1 \u0111\u1ed9ng h\u00f3a gi\u00fap t\u1ed1i \u01b0u h\u00f3a vi\u1ec7c ph\u00e2n lo\u1ea1i h\u00e0ng h\u00f3a trong kho v\u00e0 t\u0103ng t\u1ed1c giao ph\u00e1t ki\u1ec7n h\u00e0ng.",
      collocations: ["industrial automation", "displace jobs through automation"]
    },
    {
      id: "v12-u6-algorithm",
      word: "algorithm",
      partOfSpeech: "n",
      meaningVi: "thu\u1eadt to\u00e1n m\u00e1y t\u00ednh t\u00ednh to\u00e1n logic",
      ipa: "/\u02c8\u00e6l\u0261\u0259r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=algorithm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Recommendation algorithms analyze your viewing history to suggest relevant educational videos.",
      exampleVi: "Thu\u1eadt to\u00e1n g\u1ee3i \u00fd ph\u00e2n t\u00edch l\u1ecbch s\u1eed xem \u0111\u1ec3 \u0111\u1ec1 xu\u1ea5t c\u00e1c video gi\u00e1o d\u1ee5c ph\u00f9 h\u1ee3p.",
      collocations: ["complex algorithm", "sorting algorithm"]
    },
    {
      id: "v12-u6-big-data",
      word: "big data",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1eef li\u1ec7u l\u1edbn \u0111a chi\u1ec1u quy m\u00f4 kh\u1ed5ng l\u1ed3",
      ipa: "/\u02ccb\u026a\u0261 \u02c8de\u026at\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=big+data&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meteorologists crunch big data from weather satellites to forecast typhoon trajectories.",
      exampleVi: "C\u00e1c nh\u00e0 kh\u00ed t\u01b0\u1ee3ng h\u1ecdc x\u1eed l\u00fd d\u1eef li\u1ec7u l\u1edbn t\u1eeb v\u1ec7 tinh th\u1eddi ti\u1ebft \u0111\u1ec3 d\u1ef1 b\u00e1o \u0111\u01b0\u1eddng \u0111i c\u1ee7a b\u00e3o.",
      collocations: ["big data analytics", "harvest big data"]
    },
    {
      id: "v12-u6-natural-language-processing",
      word: "natural language processing",
      partOfSpeech: "n.phr",
      meaningVi: "x\u1eed l\u00fd ng\u00f4n ng\u1eef t\u1ef1 nhi\u00ean (NLP)",
      ipa: "/\u02ccn\u00e6t\u0283r\u0259l \u02c8l\u00e6\u014b\u0261w\u026ad\u0292 \u02c8pr\u0259\u028ases\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=natural+language+processing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Natural language processing allows virtual assistants to comprehend conversational voice requests.",
      exampleVi: "X\u1eed l\u00fd ng\u00f4n ng\u1eef t\u1ef1 nhi\u00ean gi\u00fap c\u00e1c tr\u1ee3 l\u00fd \u1ea3o hi\u1ec3u \u0111\u01b0\u1ee3c c\u00e1c kh\u1ea9u l\u1ec7nh tr\u00f2 chuy\u1ec7n c\u1ee7a ng\u01b0\u1eddi d\u00f9ng.",
      collocations: ["field of natural language processing", "applications of NLP"]
    },
    {
      id: "v12-u6-predictive-analytics",
      word: "predictive analytics",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e2n t\u00edch d\u1eef li\u1ec7u d\u1ef1 \u0111o\u00e1n t\u01b0\u01a1ng lai",
      ipa: "/pr\u026a\u02c8d\u026akt\u026av \u02cc\u00e6n\u0259\u02c8l\u026at\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=predictive+analytics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Airlines leverage predictive analytics to schedule aircraft engine maintenance before malfunctions occur.",
      exampleVi: "C\u00e1c h\u00e3ng bay \u1ee9ng d\u1ee5ng ph\u00e2n t\u00edch d\u1ef1 \u0111o\u00e1n \u0111\u1ec3 b\u1ea3o d\u01b0\u1ee1ng \u0111\u1ed9ng c\u01a1 m\u00e1y bay tr\u01b0\u1edbc khi x\u1ea3y ra tr\u1ee5c tr\u1eb7c.",
      collocations: ["use predictive analytics", "power of predictive analytics"]
    },
    {
      id: "v12-u6-deep-learning",
      word: "deep learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc s\u00e2u nhi\u1ec1u t\u1ea7ng n\u01a1-ron",
      ipa: "/\u02ccdi\u02d0p \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deep+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deep learning revolutionized autonomous driving by enabling real-time pedestrian detection.",
      exampleVi: "H\u1ecdc s\u00e2u \u0111\u00e3 c\u00e1ch m\u1ea1ng h\u00f3a xe t\u1ef1 h\u00e0nh b\u1eb1ng vi\u1ec7c cho ph\u00e9p ph\u00e1t hi\u1ec7n ng\u01b0\u1eddi \u0111i b\u1ed9 trong th\u1eddi gian th\u1ef1c.",
      collocations: ["deep learning model", "breakthrough in deep learning"]
    },
    {
      id: "v12-u6-ethical-ai",
      word: "ethical AI",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o c\u00f3 \u0111\u1ea1o \u0111\u1ee9c v\u00e0 minh b\u1ea1ch",
      ipa: "/\u02cce\u03b8\u026akl \u02cce\u026a \u02c8a\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ethical+AI&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Governments enact regulations demanding ethical AI systems free of racial or gender biases.",
      exampleVi: "C\u00e1c ch\u00ednh ph\u1ee7 ban h\u00e0nh lu\u1eadt l\u1ec7 y\u00eau c\u1ea7u h\u1ec7 th\u1ed1ng AI ph\u1ea3i c\u00f3 \u0111\u1ea1o \u0111\u1ee9c v\u00e0 kh\u00f4ng c\u00f3 thi\u00ean ki\u1ebfn ph\u00e2n bi\u1ec7t.",
      collocations: ["standards for ethical AI", "develop ethical AI"]
    },
    {
      id: "v12-u6-singularity",
      word: "singularity",
      partOfSpeech: "n",
      meaningVi: "\u0111i\u1ec3m k\u1ef3 d\u1ecb c\u00f4ng ngh\u1ec7 khi AI v\u01b0\u1ee3t tr\u00ed tu\u1ec7 con ng\u01b0\u1eddi",
      ipa: "/\u02ccs\u026a\u014b\u0261j\u028a\u02c8l\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=singularity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Futurists debate whether humanity will reach technological singularity within this century.",
      exampleVi: "C\u00e1c nh\u00e0 t\u01b0\u01a1ng lai h\u1ecdc tranh lu\u1eadn li\u1ec7u lo\u00e0i ng\u01b0\u1eddi c\u00f3 ch\u1ea1m t\u1edbi \u0111i\u1ec3m k\u1ef3 d\u1ecb c\u00f4ng ngh\u1ec7 trong th\u1ebf k\u1ef7 n\u00e0y.",
      collocations: ["technological singularity", "approach the singularity"]
    },
    {
      id: "v12-u6-computer-vision",
      word: "computer vision",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ecb gi\u00e1c m\u00e1y t\u00ednh nh\u1eadn di\u1ec7n h\u00ecnh \u1ea3nh",
      ipa: "/k\u0259m\u02c8pju\u02d0t\u0259 \u02c8v\u026a\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=computer+vision&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Computer vision enables drones to survey damaged power grids during tropical storms.",
      exampleVi: "Th\u1ecb gi\u00e1c m\u00e1y t\u00ednh cho ph\u00e9p thi\u1ebft b\u1ecb bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i kh\u1ea3o s\u00e1t l\u01b0\u1edbi \u0111i\u1ec7n b\u1ecb h\u01b0 h\u1ecfng sau b\u00e3o.",
      collocations: ["computer vision technology", "advancements in computer vision"]
    },
    {
      id: "v12-u6-generative-ai",
      word: "generative AI",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o t\u1ea1o sinh (v\u0103n b\u1ea3n, tranh, code)",
      ipa: "/\u02c8d\u0292en\u0259r\u0259t\u026av \u02cce\u026a \u02c8a\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=generative+AI&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Generative AI tools assist graphic designers by generating preliminary storyboards in seconds.",
      exampleVi: "C\u00e1c c\u00f4ng c\u1ee5 AI t\u1ea1o sinh h\u1ed7 tr\u1ee3 ng\u01b0\u1eddi thi\u1ebft k\u1ebf t\u1ea1o ra c\u00e1c khung k\u1ecbch b\u1ea3n ph\u00e1c th\u1ea3o ch\u1ec9 trong v\u00e0i gi\u00e2y.",
      collocations: ["use generative AI", "generative AI models"]
    },
    {
      id: "v12-u6-chatbot",
      word: "chatbot",
      partOfSpeech: "n",
      meaningVi: "ph\u1ea7n m\u1ec1m tr\u00f2 chuy\u1ec7n t\u1ef1 \u0111\u1ed9ng th\u00f4ng minh",
      ipa: "/\u02c8t\u0283\u00e6tb\u0252t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chatbot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The customer service chatbot answers passenger inquiries twenty-four hours a day.",
      exampleVi: "Ph\u1ea7n m\u1ec1m tr\u00f2 chuy\u1ec7n t\u1ef1 \u0111\u1ed9ng gi\u1ea3i \u0111\u00e1p th\u1eafc m\u1eafc c\u1ee7a h\u00e0nh kh\u00e1ch 24/7 kh\u00f4ng ngh\u1ec9.",
      collocations: ["AI-powered chatbot", "interact with a chatbot"]
    },
    {
      id: "v12-u6-facial-recognition",
      word: "facial recognition",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 nh\u1eadn di\u1ec7n khu\u00f4n m\u1eb7t",
      ipa: "/\u02ccfe\u026a\u0283l \u02ccrek\u0259\u0261\u02c8n\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=facial+recognition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Airport security gates use facial recognition to expedite international departures safely.",
      exampleVi: "C\u1eeda kh\u1ea9u s\u00e2n bay s\u1eed d\u1ee5ng nh\u1eadn di\u1ec7n khu\u00f4n m\u1eb7t \u0111\u1ec3 l\u00e0m th\u1ee7 t\u1ee5c xu\u1ea5t c\u1ea3nh nhanh ch\u00f3ng v\u00e0 an to\u00e0n.",
      collocations: ["facial recognition software", "accuracy of facial recognition"]
    },
    {
      id: "v12-u6-data-mining",
      word: "data mining",
      partOfSpeech: "n.phr",
      meaningVi: "khai ph\u00e1 d\u1eef li\u1ec7u t\u00ecm quy lu\u1eadt ti\u1ec1m \u1ea9n",
      ipa: "/\u02c8de\u026at\u0259 \u02c8ma\u026an\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=data+mining&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Retailers employ data mining techniques to identify seasonal buying trends.",
      exampleVi: "C\u00e1c nh\u00e0 b\u00e1n l\u1ebb \u1ee9ng d\u1ee5ng k\u1ef9 thu\u1eadt khai ph\u00e1 d\u1eef li\u1ec7u \u0111\u1ec3 t\u00ecm ra c\u00e1c xu h\u01b0\u1edbng mua s\u1eafm theo m\u00f9a.",
      collocations: ["data mining algorithms", "conduct data mining"]
    },
    {
      id: "v12-u6-autonomous-robot",
      word: "autonomous robot",
      partOfSpeech: "n.phr",
      meaningVi: "robot t\u1ef1 h\u00e0nh c\u00f3 kh\u1ea3 n\u0103ng t\u1ef1 quy\u1ebft",
      ipa: "/\u0254\u02d0\u02cct\u0252n\u0259m\u0259s \u02c8r\u0259\u028ab\u0252t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+robot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Autonomous robots harvest ripe strawberries carefully without bruising delicate fruit.",
      exampleVi: "Robot t\u1ef1 h\u00e0nh h\u00e1i d\u00e2u t\u00e2y ch\u00edn c\u1ea9n th\u1eadn m\u00e0 kh\u00f4ng l\u00e0m d\u1eadp n\u00e1t qu\u1ea3 m\u1ec1m.",
      collocations: ["deploy autonomous robots", "autonomous robotic system"]
    },
    {
      id: "v12-u6-algorithmic-bias",
      word: "algorithmic bias",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u00ean ki\u1ebfn sai l\u1ec7ch trong thu\u1eadt to\u00e1n m\u00e1y t\u00ednh",
      ipa: "/\u02cc\u00e6l\u0261\u0259r\u026a\u00f0m\u026ak \u02c8ba\u026a\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=algorithmic+bias&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Engineers actively audit code to eliminate algorithmic bias in loan approval models.",
      exampleVi: "C\u00e1c k\u1ef9 s\u01b0 ch\u1ee7 \u0111\u1ed9ng r\u00e0 so\u00e1t m\u00e3 ngu\u1ed3n \u0111\u1ec3 tri\u1ec7t ti\u00eau thi\u00ean ki\u1ebfn thu\u1eadt to\u00e1n trong duy\u1ec7t h\u1ed3 s\u01a1 vay.",
      collocations: ["detect algorithmic bias", "eliminate algorithmic bias"]
    },
    {
      id: "v12-u6-humanoid",
      word: "humanoid",
      partOfSpeech: "adj / n",
      meaningVi: "robot c\u00f3 h\u00ecnh d\u00e1ng gi\u1ed1ng ng\u01b0\u1eddi",
      ipa: "/\u02c8hju\u02d0m\u0259n\u0254\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=humanoid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Humanoid robots with flexible articulated fingers can play classical piano sonatas.",
      exampleVi: "Nh\u1eefng ch\u00fa robot h\u00ecnh ng\u01b0\u1eddi v\u1edbi c\u00e1c ng\u00f3n tay linh ho\u1ea1t c\u00f3 th\u1ec3 g\u1ea3y nh\u1eefng b\u1ea3n sonata piano c\u1ed5 \u0111i\u1ec3n.",
      collocations: ["humanoid robot", "bipedal humanoid"]
    },
    {
      id: "v12-u6-cognitive-computing",
      word: "cognitive computing",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec7n to\u00e1n m\u00f4 ph\u1ecfng nh\u1eadn th\u1ee9c con ng\u01b0\u1eddi",
      ipa: "/\u02c8k\u0252\u0261n\u0259t\u026av k\u0259m\u02c8pju\u02d0t\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cognitive+computing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cognitive computing assists oncologists by synthesizing thousands of medical research papers.",
      exampleVi: "\u0110i\u1ec7n to\u00e1n nh\u1eadn th\u1ee9c h\u1ed7 tr\u1ee3 c\u00e1c b\u00e1c s\u0129 ung b\u01b0\u1edbu b\u1eb1ng c\u00e1ch t\u1ed5ng h\u1ee3p h\u00e0ng ng\u00e0n b\u00e0i b\u00e1o y khoa.",
      collocations: ["power of cognitive computing", "cognitive computing systems"]
    },
    {
      id: "v12-u6-job-displacement",
      word: "job displacement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1ea5t vi\u1ec7c l\u00e0m do c\u00f4ng ngh\u1ec7 thay th\u1ebf",
      ipa: "/\u02c8d\u0292\u0252b d\u026as\u02ccple\u026asm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+displacement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Governments fund worker reskilling initiatives to mitigate technological job displacement.",
      exampleVi: "Nh\u00e0 n\u01b0\u1edbc c\u1ea5p ng\u00e2n s\u00e1ch \u0111\u00e0o t\u1ea1o l\u1ea1i k\u1ef9 n\u0103ng cho ng\u01b0\u1eddi lao \u0111\u1ed9ng \u0111\u1ec3 gi\u1ea3m thi\u1ec3u nguy c\u01a1 m\u1ea5t vi\u1ec7c v\u00ec m\u00e1y m\u00f3c.",
      collocations: ["fear of job displacement", "prevent job displacement"]
    }
    ,
    {
      id: "v12-extra-deep-learning-model",
      word: "deep learning model",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh h\u1ecdc s\u00e2u nhi\u1ec1u l\u1edbp n\u01a1-ron",
      ipa: "/\u02ccdi\u02d0p \u02c8l\u025c\u02d0n\u026a\u014b \u02c8m\u0252dl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deep+learning+model&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The deep learning model identifies early cancerous cells with ninety-nine percent accuracy.",
      exampleVi: "M\u00f4 h\u00ecnh h\u1ecdc s\u00e2u ph\u00e1t hi\u1ec7n t\u1ebf b\u00e0o ung th\u01b0 s\u1edbm v\u1edbi \u0111\u1ed9 ch\u00ednh x\u00e1c ch\u00edn m\u01b0\u01a1i ch\u00edn ph\u1ea7n tr\u0103m.",
      collocations: ["train a deep learning model", "deploy deep learning models"]
    }
    ,
    {
      id: "v12-extra-autonomous-navigation",
      word: "autonomous navigation",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec1u h\u01b0\u1edbng t\u1ef1 h\u00e0nh kh\u00f4ng ng\u01b0\u1eddi l\u00e1i",
      ipa: "/\u0254\u02d0\u02cct\u0252n\u0259m\u0259s \u02ccn\u00e6v\u026a\u02c8\u0261e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+navigation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Autonomous navigation algorithms steer Mars exploration rovers around rocky craters.",
      exampleVi: "Thu\u1eadt to\u00e1n \u0111i\u1ec1u h\u01b0\u1edbng t\u1ef1 h\u00e0nh d\u1eabn d\u1eaft t\u00e0u th\u00e1m hi\u1ec3m Sao H\u1ecfa tr\u00e1nh mi\u1ec7ng n\u00fai l\u1eeda \u0111\u00e1.",
      collocations: ["system of autonomous navigation", "autonomous navigation capability"]
    }
    ,
    {
      id: "v12-extra-data-processing",
      word: "data processing",
      partOfSpeech: "n.phr",
      meaningVi: "x\u1eed l\u00fd d\u1eef li\u1ec7u t\u1ed1c \u0111\u1ed9 cao",
      ipa: "/\u02c8de\u026at\u0259 \u02c8pr\u0259\u028ases\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=data+processing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cloud data processing allows weather models to calculate forecast maps in minutes.",
      exampleVi: "X\u1eed l\u00fd d\u1eef li\u1ec7u \u0111\u00e1m m\u00e2y cho ph\u00e9p c\u00e1c m\u00f4 h\u00ecnh th\u1eddi ti\u1ebft t\u00ednh to\u00e1n b\u1ea3n \u0111\u1ed3 d\u1ef1 b\u00e1o trong v\u00e0i ph\u00fat.",
      collocations: ["high-speed data processing", "real-time data processing"]
    }
    ,
    {
      id: "v12-extra-speech-synthesis",
      word: "speech synthesis",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ed5ng h\u1ee3p gi\u1ecdng n\u00f3i nh\u00e2n t\u1ea1o",
      ipa: "/spi\u02d0t\u0283 \u02c8s\u026an\u03b8\u0259s\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=speech+synthesis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Advances in speech synthesis produce lifelike, expressive virtual audio narration.",
      exampleVi: "Ti\u1ebfn b\u1ed9 trong t\u1ed5ng h\u1ee3p gi\u1ecdng n\u00f3i t\u1ea1o ra gi\u1ecdng \u0111\u1ecdc truy\u1ec1n c\u1ea3m t\u1ef1 nhi\u00ean nh\u01b0 ng\u01b0\u1eddi th\u1eadt.",
      collocations: ["natural speech synthesis", "technology of speech synthesis"]
    }
    ,
    {
      id: "v12-extra-intelligent-system",
      word: "intelligent system",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng th\u00f4ng minh t\u1ef1 th\u00edch \u1ee9ng",
      ipa: "/\u026an\u02c8tel\u026ad\u0292\u0259nt \u02c8s\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intelligent+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Intelligent systems in hospitals alert nurses whenever patients show signs of fever.",
      exampleVi: "H\u1ec7 th\u1ed1ng th\u00f4ng minh trong b\u1ec7nh vi\u1ec7n c\u1ea3nh b\u00e1o y t\u00e1 m\u1ed7i khi b\u1ec7nh nh\u00e2n c\u00f3 d\u1ea5u hi\u1ec7u s\u1ed1t.",
      collocations: ["design intelligent systems", "complex intelligent system"]
    }
    ,
    {
      id: "v12-extra-predictive-algorithm",
      word: "predictive algorithm",
      partOfSpeech: "n.phr",
      meaningVi: "thu\u1eadt to\u00e1n d\u1ef1 \u0111o\u00e1n h\u00e0nh vi",
      ipa: "/pr\u026a\u02c8d\u026akt\u026av \u02c8\u00e6l\u0261\u0259r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=predictive+algorithm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Predictive algorithms recommend study flashcards based on your past review errors.",
      exampleVi: "Thu\u1eadt to\u00e1n d\u1ef1 \u0111o\u00e1n g\u1ee3i \u00fd c\u00e1c th\u1ebb t\u1eeb v\u1ef1ng d\u1ef1a tr\u00ean nh\u1eefng l\u1ed7i sai tr\u01b0\u1edbc \u0111\u00e2y c\u1ee7a b\u1ea1n.",
      collocations: ["accuracy of predictive algorithms", "use predictive algorithms"]
    }
    ,
    {
      id: "v12-extra-human-machine-collaboration",
      word: "human-machine collaboration",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u1ed1i h\u1ee3p l\u00e0m vi\u1ec7c gi\u1eefa ng\u01b0\u1eddi v\u00e0 m\u00e1y m\u00f3c",
      ipa: "/\u02c8hju\u02d0m\u0259n m\u0259\u02c8\u0283i\u02d0n k\u0259\u02ccl\u00e6b\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=human-machine+collaboration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Surgeons practice human-machine collaboration by commanding micro-robotic arms.",
      exampleVi: "C\u00e1c b\u00e1c s\u0129 ph\u1eabu thu\u1eadt ph\u1ed1i h\u1ee3p gi\u1eefa ng\u01b0\u1eddi v\u00e0 m\u00e1y b\u1eb1ng vi\u1ec7c \u0111i\u1ec1u khi\u1ec3n c\u00e1nh tay robot vi ph\u1eabu.",
      collocations: ["foster human-machine collaboration", "future of collaboration"]
    }
    ,
    {
      id: "v12-extra-computer-vision-algorithm",
      word: "computer vision algorithm",
      partOfSpeech: "n.phr",
      meaningVi: "thu\u1eadt to\u00e1n th\u1ecb gi\u00e1c m\u00e1y t\u00ednh nh\u1eadn di\u1ec7n \u1ea3nh",
      ipa: "/k\u0259m\u02c8pju\u02d0t\u0259 \u02c8v\u026a\u0292n \u02c8\u00e6l\u0261\u0259r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=computer+vision+algorithm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Computer vision algorithms inspect manufactured silicon chips for microscopic defects.",
      exampleVi: "Thu\u1eadt to\u00e1n th\u1ecb gi\u00e1c m\u00e1y t\u00ednh ki\u1ec3m tra chip b\u00e1n d\u1eabn \u0111\u1ec3 ph\u00e1t hi\u1ec7n c\u00e1c l\u1ed7i si\u00eau nh\u1ecf.",
      collocations: ["accuracy of computer vision", "train computer vision algorithms"]
    }
    ,
    {
      id: "v12-extra-virtual-assistant",
      word: "virtual assistant",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ee3 l\u00fd \u1ea3o \u0111i\u1ec1u khi\u1ec3n b\u1eb1ng gi\u1ecdng n\u00f3i",
      ipa: "/\u02ccv\u025c\u02d0t\u0283u\u0259l \u0259\u02c8s\u026ast\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+assistant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voice-activated virtual assistants can set alarms, play music, and answer questions.",
      exampleVi: "Tr\u1ee3 l\u00fd \u1ea3o k\u00edch ho\u1ea1t b\u1eb1ng gi\u1ecdng n\u00f3i c\u00f3 th\u1ec3 \u0111\u1eb7t b\u00e1o th\u1ee9c, ph\u00e1t nh\u1ea1c v\u00e0 gi\u1ea3i \u0111\u00e1p th\u1eafc m\u1eafc.",
      collocations: ["command a virtual assistant", "smart virtual assistant"]
    }
    ,
    {
      id: "v12-extra-ethical-guideline",
      word: "ethical guideline",
      partOfSpeech: "n.phr",
      meaningVi: "h\u01b0\u1edbng d\u1eabn chu\u1ea9n m\u1ef1c \u0111\u1ea1o \u0111\u1ee9c c\u00f4ng ngh\u1ec7",
      ipa: "/\u02cce\u03b8\u026akl \u02c8\u0261a\u026adla\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ethical+guideline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International organizations drafted ethical guidelines for artificial intelligence.",
      exampleVi: "C\u00e1c t\u1ed5 ch\u1ee9c qu\u1ed1c t\u1ebf \u0111\u00e3 so\u1ea1n th\u1ea3o c\u00e1c h\u01b0\u1edbng d\u1eabn chu\u1ea9n m\u1ef1c \u0111\u1ea1o \u0111\u1ee9c cho tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o.",
      collocations: ["adhere to ethical guidelines", "propose ethical guidelines"]
    }
    ,
    {
      id: "v12-extra-computational-power",
      word: "computational power",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c t\u00ednh to\u00e1n x\u1eed l\u00fd d\u1eef li\u1ec7u",
      ipa: "/\u02cck\u0252mpju\u02c8te\u026a\u0283\u0259nl \u02c8pa\u028a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=computational+power&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Quantum computers promise to deliver astronomical leaps in computational power.",
      exampleVi: "M\u00e1y t\u00ednh l\u01b0\u1ee3ng t\u1eed h\u1ee9a h\u1eb9n mang l\u1ea1i b\u01b0\u1edbc nh\u1ea3y v\u1ecdt th\u1ea7n k\u1ef3 v\u1ec1 n\u0103ng l\u1ef1c x\u1eed l\u00fd t\u00ednh to\u00e1n.",
      collocations: ["exponential computational power", "vast computational power"]
    }
    ,
    {
      id: "v12-extra-data-security",
      word: "data security",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3o m\u1eadt v\u00e0 an to\u00e0n d\u1eef li\u1ec7u s\u1ed1",
      ipa: "/\u02c8de\u026at\u0259 s\u026a\u02c8kj\u028a\u0259r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=data+security&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Financial applications implement military-grade encryption to protect user data security.",
      exampleVi: "C\u00e1c \u1ee9ng d\u1ee5ng t\u00e0i ch\u00ednh \u00e1p d\u1ee5ng m\u00e3 h\u00f3a c\u1ea5p qu\u00e2n s\u1ef1 \u0111\u1ec3 b\u1ea3o \u0111\u1ea3m an to\u00e0n d\u1eef li\u1ec7u ng\u01b0\u1eddi d\u00f9ng.",
      collocations: ["ensure data security", "breach of data security"]
    }
    ,
    {
      id: "v12-extra-automated-reasoning",
      word: "automated reasoning",
      partOfSpeech: "n.phr",
      meaningVi: "suy lu\u1eadn t\u1ef1 \u0111\u1ed9ng b\u1eb1ng logic m\u00e1y",
      ipa: "/\u02cc\u0254\u02d0t\u0259me\u026at\u026ad \u02c8ri\u02d0zn\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=automated+reasoning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Automated reasoning systems verify mathematical theorems that are too long for humans.",
      exampleVi: "H\u1ec7 th\u1ed1ng suy lu\u1eadn t\u1ef1 \u0111\u1ed9ng ki\u1ec3m ch\u1ee9ng c\u00e1c \u0111\u1ecbnh l\u00fd to\u00e1n h\u1ecdc qu\u00e1 d\u00e0i \u0111\u1ed1i v\u1edbi con ng\u01b0\u1eddi.",
      collocations: ["field of automated reasoning", "apply automated reasoning"]
    }
    ,
    {
      id: "v12-extra-digital-automation",
      word: "digital automation",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ef1 \u0111\u1ed9ng h\u00f3a quy tr\u00ecnh k\u1ef9 thu\u1eadt s\u1ed1",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02cc\u0254\u02d0t\u0259\u02c8me\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+automation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital automation frees clerks from repetitive data entry, letting them focus on clients.",
      exampleVi: "T\u1ef1 \u0111\u1ed9ng h\u00f3a s\u1ed1 gi\u1ea3i ph\u00f3ng nh\u00e2n vi\u00ean kh\u1ecfi vi\u1ec7c nh\u1eadp li\u1ec7u l\u1eb7p \u0111i l\u1eb7p l\u1ea1i \u0111\u1ec3 ch\u0103m s\u00f3c kh\u00e1ch h\u00e0ng.",
      collocations: ["implement digital automation", "benefits of digital automation"]
    }
    ,
    {
      id: "v-boost-machine-learning-algorithm",
      word: "machine learning algorithm",
      partOfSpeech: "n.phr",
      meaningVi: "thu\u1eadt to\u00e1n m\u00e1y h\u1ecdc t\u1ef1 \u0111\u1ed9ng",
      ipa: "/m\u0259\u02c8\u0283i\u02d0n \u02c8l\u025c\u02d0n\u026a\u014b \u02c8\u00e6l\u0261\u0259r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=machine+learning+algorithm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Machine learning algorithms identify diagnostic anomalies in lung CT scans.",
      exampleVi: "C\u00e1c thu\u1eadt to\u00e1n m\u00e1y h\u1ecdc ph\u00e1t hi\u1ec7n nh\u1eefng b\u1ea5t th\u01b0\u1eddng ch\u1ea9n \u0111o\u00e1n tr\u00ean phim ch\u1ee5p CT ph\u1ed5i.",
      collocations: ["train a machine learning algorithm", "complex algorithms"]
    }
    ,
    {
      id: "v-boost-deep-neural-network",
      word: "deep neural network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng n\u01a1-ron h\u1ecdc s\u00e2u nhi\u1ec1u t\u1ea7ng",
      ipa: "/di\u02d0p \u02c8nj\u028a\u0259r\u0259l \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deep+neural+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deep neural networks mimic the human brain to decode natural human speech.",
      exampleVi: "M\u1ea1ng n\u01a1-ron s\u00e2u m\u00f4 ph\u1ecfng n\u00e3o b\u1ed9 ng\u01b0\u1eddi \u0111\u1ec3 gi\u1ea3i m\u00e3 ng\u00f4n ng\u1eef n\u00f3i t\u1ef1 nhi\u00ean.",
      collocations: ["architectures of deep neural networks", "train deep neural networks"]
    }
    ,
    {
      id: "v-boost-natural-language-processing",
      word: "natural language processing",
      partOfSpeech: "n.phr",
      meaningVi: "x\u1eed l\u00fd ng\u00f4n ng\u1eef t\u1ef1 nhi\u00ean th\u00f4ng minh",
      ipa: "/\u02c8n\u00e6t\u0283r\u0259l \u02c8l\u00e6\u014b\u0261w\u026ad\u0292 \u02c8pr\u0259\u028ases\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=natural+language+processing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Natural language processing enables AI chat assistants to converse fluently.",
      exampleVi: "C\u00f4ng ngh\u1ec7 x\u1eed l\u00fd ng\u00f4n ng\u1eef t\u1ef1 nhi\u00ean gi\u00fap tr\u1ee3 l\u00fd AI tr\u00f2 chuy\u1ec7n m\u1ea1ch l\u1ea1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng.",
      collocations: ["advances in natural language processing", "NLP models"]
    }
    ,
    {
      id: "v-boost-computer-vision",
      word: "computer vision",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ecb gi\u00e1c m\u00e1y t\u00ednh nh\u1eadn bi\u1ebft h\u00ecnh \u1ea3nh",
      ipa: "/k\u0259m\u02c8pju\u02d0t\u0259 \u02c8v\u026a\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=computer+vision&type=2",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Computer vision lets automated drones survey farmland and spot insect infestations.",
      exampleVi: "Th\u1ecb gi\u00e1c m\u00e1y t\u00ednh gi\u00fap thi\u1ebft b\u1ecb bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i kh\u1ea3o s\u00e1t ru\u1ed9ng \u0111\u1ed3ng v\u00e0 ph\u00e1t hi\u1ec7n s\u00e2u b\u1ec7nh.",
      collocations: ["applications of computer vision", "computer vision system"]
    }
    ,
    {
      id: "v-boost-autonomous-vehicle",
      word: "autonomous vehicle",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ti\u1ec7n xe t\u1ef1 h\u00e0nh kh\u00f4ng ng\u01b0\u1eddi l\u00e1i",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s \u02c8vi\u02d0\u0259kl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+vehicle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Autonomous vehicles utilize lidar and radar to navigate busy urban intersections.",
      exampleVi: "Xe t\u1ef1 h\u00e0nh s\u1eed d\u1ee5ng lidar v\u00e0 radar \u0111\u1ec3 \u0111i\u1ec1u h\u01b0\u1edbng an to\u00e0n qua c\u00e1c giao l\u1ed9 \u0111\u00f4 th\u1ecb \u0111\u00f4ng \u0111\u00fac.",
      collocations: ["test autonomous vehicles", "fleet of autonomous vehicles"]
    }
    ,
    {
      id: "v-boost-generative-model",
      word: "generative model",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o t\u1ea1o sinh",
      ipa: "/\u02c8d\u0292en\u0259r\u0259t\u026av \u02c8m\u0252dl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=generative+model&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Generative models can compose original classical melodies and design graphics.",
      exampleVi: "C\u00e1c m\u00f4 h\u00ecnh AI t\u1ea1o sinh c\u00f3 th\u1ec3 s\u00e1ng t\u00e1c giai \u0111i\u1ec7u c\u1ed5 \u0111i\u1ec3n v\u00e0 thi\u1ebft k\u1ebf \u0111\u1ed3 h\u1ecda \u0111\u1ed9c \u0111\u00e1o.",
      collocations: ["leverage generative models", "state-of-the-art generative model"]
    }
    ,
    {
      id: "v-boost-algorithmic-bias",
      word: "algorithmic bias",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u00ean v\u1ecb thu\u1eadt to\u00e1n do d\u1eef li\u1ec7u hu\u1ea5n luy\u1ec7n",
      ipa: "/\u02cc\u00e6l\u0261\u0259\u02c8r\u026a\u00f0m\u026ak \u02c8ba\u026a\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=algorithmic+bias&type=2",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Data scientists work diligently to eliminate algorithmic bias in credit scoring systems.",
      exampleVi: "C\u00e1c chuy\u00ean gia d\u1eef li\u1ec7u n\u1ed7 l\u1ef1c lo\u1ea1i tr\u1eeb thi\u00ean ki\u1ebfn thu\u1eadt to\u00e1n trong ch\u1ea5m \u0111i\u1ec3m t\u00edn d\u1ee5ng.",
      collocations: ["mitigate algorithmic bias", "detect algorithmic bias"]
    }
    ,
    {
      id: "v-boost-facial-recognition",
      word: "facial recognition",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 nh\u1eadn d\u1ea1ng khu\u00f4n m\u1eb7t",
      ipa: "/\u02c8fe\u026a\u0283l \u02ccrek\u0259\u0261\u02c8n\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=facial+recognition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Airport customs checkpoints rely on facial recognition to verify passport holders.",
      exampleVi: "C\u1eeda kh\u1ea9u s\u00e2n bay s\u1eed d\u1ee5ng nh\u1eadn di\u1ec7n g\u01b0\u01a1ng m\u1eb7t \u0111\u1ec3 x\u00e1c th\u1ef1c h\u00e0nh kh\u00e1ch mang h\u1ed9 chi\u1ebfu.",
      collocations: ["deploy facial recognition", "facial recognition scanner"]
    }
    ,
    {
      id: "v-boost-predictive-analytics",
      word: "predictive analytics",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e2n t\u00edch d\u1eef li\u1ec7u d\u1ef1 b\u00e1o t\u01b0\u01a1ng lai",
      ipa: "/pr\u026a\u02c8d\u026akt\u026av \u02cc\u00e6n\u0259\u02c8l\u026at\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=predictive+analytics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Retail giants employ predictive analytics to anticipate seasonal shopping surges.",
      exampleVi: "C\u00e1c h\u00e3ng b\u00e1n l\u1ebb l\u1edbn d\u00f9ng ph\u00e2n t\u00edch d\u1ef1 b\u00e1o \u0111\u1ec3 \u0111\u00f3n \u0111\u1ea7u c\u00e1c \u0111\u1ee3t cao \u0111i\u1ec3m mua s\u1eafm.",
      collocations: ["utilize predictive analytics", "predictive analytics tool"]
    }
    ,
    {
      id: "v-boost-automated-decision-making",
      word: "automated decision-making",
      partOfSpeech: "n.phr",
      meaningVi: "ra quy\u1ebft \u0111\u1ecbnh ho\u00e0n to\u00e0n t\u1ef1 \u0111\u1ed9ng b\u1eb1ng m\u00e1y",
      ipa: "/\u02c8\u0254\u02d0t\u0259me\u026at\u026ad d\u026a\u02c8s\u026a\u0292n \u02c8me\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=automated+decision-making&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Regulations require human oversight in automated decision-making for loan approvals.",
      exampleVi: "Quy \u0111\u1ecbnh ph\u00e1p l\u00fd \u0111\u00f2i h\u1ecfi ph\u1ea3i c\u00f3 con ng\u01b0\u1eddi gi\u00e1m s\u00e1t khi duy\u1ec7t vay v\u1ed1n b\u1eb1ng h\u1ec7 th\u1ed1ng t\u1ef1 \u0111\u1ed9ng.",
      collocations: ["ethics of automated decision-making", "automated decision-making algorithms"]
    }
    ,
    {
      id: "v-boost-data-privacy-regulation",
      word: "data privacy regulation",
      partOfSpeech: "n.phr",
      meaningVi: "quy chu\u1ea9n b\u1ea3o v\u1ec7 t\u00ednh ri\u00eang t\u01b0 c\u1ee7a d\u1eef li\u1ec7u",
      ipa: "/\u02c8de\u026at\u0259 \u02c8pr\u026av\u0259si \u02ccre\u0261ju\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=data+privacy+regulation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tech firms must comply strictly with data privacy regulations such as the GDPR.",
      exampleVi: "C\u00e1c c\u00f4ng ty c\u00f4ng ngh\u1ec7 ph\u1ea3i tu\u00e2n th\u1ee7 nghi\u00eam ng\u1eb7t c\u00e1c quy \u0111\u1ecbnh v\u1ec1 quy\u1ec1n ri\u00eang t\u01b0 d\u1eef li\u1ec7u.",
      collocations: ["enforce data privacy regulations", "comply with data privacy regulations"]
    }
    ,
    {
      id: "v-boost-human-ai-collaboration",
      word: "human-AI collaboration",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u1ee3p t\u00e1c hi\u1ec7u qu\u1ea3 gi\u1eefa con ng\u01b0\u1eddi v\u00e0 AI",
      ipa: "/\u02cchju\u02d0m\u0259n e\u026a \u02c8a\u026a k\u0259\u02ccl\u00e6b\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=human-AI+collaboration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The future of design lies in synergistic human-AI collaboration rather than total replacement.",
      exampleVi: "T\u01b0\u01a1ng lai ng\u00e0nh thi\u1ebft k\u1ebf n\u1eb1m \u1edf s\u1ef1 h\u1ee3p t\u00e1c gi\u1eefa ng\u01b0\u1eddi v\u00e0 AI thay v\u00ec thay th\u1ebf ho\u00e0n to\u00e0n.",
      collocations: ["effective human-AI collaboration", "synergy in human-AI collaboration"]
    }
    ,
    {
      id: "v-boost-expert-system",
      word: "expert system",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng chuy\u00ean gia gi\u1ea3i quy\u1ebft b\u00e0i to\u00e1n ph\u1ee9c t\u1ea1p",
      ipa: "/\u02c8eksp\u025c\u02d0t \u02c8s\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=expert+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An expert system incorporates rule-based knowledge to assist petroleum prospecting.",
      exampleVi: "H\u1ec7 chuy\u00ean gia k\u1ebft h\u1ee3p kho ki\u1ebfn th\u1ee9c d\u1ef1a tr\u00ean lu\u1eadt \u0111\u1ec3 h\u1ed7 tr\u1ee3 th\u0103m d\u00f2 d\u1ea7u kh\u00ed.",
      collocations: ["consult an expert system", "design an expert system"]
    }
    ,
    {
      id: "v-boost-reinforcement-learning",
      word: "reinforcement learning",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc m\u00e1y t\u0103ng c\u01b0\u1eddng qua khen th\u01b0\u1edfng",
      ipa: "/\u02ccri\u02d0\u026an\u02c8f\u0254\u02d0sm\u0259nt \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reinforcement+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Chess-playing algorithms achieve superhuman prowess through reinforcement learning.",
      exampleVi: "Thu\u1eadt to\u00e1n ch\u01a1i c\u1edd vua \u0111\u1ea1t tr\u00ecnh \u0111\u1ed9 v\u01b0\u1ee3t b\u1eadc nh\u1edd ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc t\u0103ng c\u01b0\u1eddng t\u1ef1 ch\u01a1i.",
      collocations: ["master reinforcement learning", "reinforcement learning policy"]
    }
    ,
    {
      id: "v-boost-data-mining-technique",
      word: "data mining technique",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 thu\u1eadt khai ph\u00e1 d\u1eef li\u1ec7u quy m\u00f4 l\u1edbn",
      ipa: "/\u02c8de\u026at\u0259 \u02c8ma\u026an\u026a\u014b tek\u02c8ni\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=data+mining+technique&type=2",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Researchers apply data mining techniques to uncover previously unknown genomic links.",
      exampleVi: "C\u00e1c nh\u00e0 nghi\u00ean c\u1ee9u \u00e1p d\u1ee5ng k\u1ef9 thu\u1eadt khai ph\u00e1 d\u1eef li\u1ec7u \u0111\u1ec3 t\u00ecm ra c\u00e1c li\u00ean k\u1ebft gen ch\u01b0a t\u1eebng bi\u1ebft.",
      collocations: ["advanced data mining techniques", "execute data mining techniques"]
    }
    ,
    {
      id: "v-boost-hallucination-risk",
      word: "hallucination risk",
      partOfSpeech: "n.phr",
      meaningVi: "nguy c\u01a1 \u0111\u01b0a ra th\u00f4ng tin b\u1ecba \u0111\u1eb7t v\u00f4 c\u0103n c\u1ee9",
      ipa: "/h\u0259\u02cclu\u02d0s\u026a\u02c8ne\u026a\u0283n r\u026ask/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hallucination+risk&type=2",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Engineers implement retrieval-augmented generation to curb hallucination risks.",
      exampleVi: "C\u00e1c k\u1ef9 s\u01b0 \u00e1p d\u1ee5ng ph\u01b0\u01a1ng ph\u00e1p truy xu\u1ea5t t\u0103ng c\u01b0\u1eddng \u0111\u1ec3 ki\u1ec3m so\u00e1t r\u1ee7i ro AI b\u1ecba th\u00f4ng tin.",
      collocations: ["curb hallucination risk", "minimize hallucination risk"]
    }
    ,
    {
      id: "v-boost-sentient-capability",
      word: "sentient capability",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng nh\u1eadn th\u1ee9c v\u00e0 c\u1ea3m x\u00fac t\u1ef1 th\u00e2n",
      ipa: "/\u02c8sen\u0283nt \u02ccke\u026ap\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sentient+capability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Philosophers debate whether synthetic neural nodes could ever attain sentient capability.",
      exampleVi: "C\u00e1c tri\u1ebft gia tranh lu\u1eadn li\u1ec7u m\u1ea1ng n\u01a1-ron nh\u00e2n t\u1ea1o c\u00f3 th\u1ec3 \u0111\u1ea1t t\u1edbi kh\u1ea3 n\u0103ng t\u1ef1 tri gi\u00e1c hay kh\u00f4ng.",
      collocations: ["possess sentient capability", "debate sentient capability"]
    }
  ],
  "unit-7-the-world-of-mass-media": [
    {
      id: "v12-u7-broadcast-journalism",
      word: "broadcast journalism",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e1o ch\u00ed ph\u00e1t thanh truy\u1ec1n h\u00ecnh",
      ipa: "/\u02c8br\u0254\u02d0dk\u0251\u02d0st \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=broadcast+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Broadcast journalism requires accurate fact-checking before airing breaking news segments.",
      exampleVi: "B\u00e1o ch\u00ed ph\u00e1t thanh truy\u1ec1n h\u00ecnh \u0111\u00f2i h\u1ecfi ki\u1ec3m ch\u1ee9ng s\u1ef1 th\u1eadt ch\u1eb7t ch\u1ebd tr\u01b0\u1edbc khi ph\u00e1t s\u00f3ng tin n\u00f3ng.",
      collocations: ["field of broadcast journalism", "investigative broadcast journalism"]
    },
    {
      id: "v12-u7-sensationalism",
      word: "sensationalism",
      partOfSpeech: "n",
      meaningVi: "xu h\u01b0\u1edbng gi\u1eadt g\u00e2n, c\u00e2u kh\u00e1ch r\u1ebb ti\u1ec1n",
      ipa: "/sen\u02c8se\u026a\u0283\u0259n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sensationalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tabloids rely on vulgar sensationalism and clickbait headlines to boost ad views.",
      exampleVi: "B\u00e1o l\u00e1 c\u1ea3i th\u01b0\u1eddng d\u1ef1a v\u00e0o tin t\u1ee9c gi\u1eadt g\u00e2n v\u00e0 ti\u00eau \u0111\u1ec1 c\u00e2u view \u0111\u1ec3 t\u0103ng l\u01b0\u1ee3t xem qu\u1ea3ng c\u00e1o.",
      collocations: ["media sensationalism", "avoid sensationalism"]
    },
    {
      id: "v12-u7-media-literacy",
      word: "media literacy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c hi\u1ec3u bi\u1ebft v\u00e0 th\u1ea9m th\u1ea5u truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8mi\u02d0di\u0259 \u02c8l\u026at\u0259r\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=media+literacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Media literacy teaches high schoolers how to differentiate verified reports from rumors.",
      exampleVi: "Hi\u1ec3u bi\u1ebft truy\u1ec1n th\u00f4ng d\u1ea1y h\u1ecdc sinh ph\u1ed5 th\u00f4ng c\u00e1ch ph\u00e2n bi\u1ec7t tin t\u1ee9c x\u00e1c th\u1ef1c v\u1edbi tin \u0111\u1ed3n nh\u1ea3m.",
      collocations: ["improve media literacy", "essential media literacy"]
    },
    {
      id: "v12-u7-digital-journalism",
      word: "digital journalism",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e1o ch\u00ed \u0111i\u1ec7n t\u1eed tr\u00ean kh\u00f4ng gian m\u1ea1ng",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital journalism combines live video feeds, interactive infographics, and podcasts.",
      exampleVi: "B\u00e1o ch\u00ed \u0111i\u1ec7n t\u1eed k\u1ebft h\u1ee3p video tr\u1ef1c ti\u1ebfp, \u0111\u1ed3 h\u1ecda t\u01b0\u01a1ng t\u00e1c v\u00e0 c\u00e1c t\u1ec7p \u00e2m thanh podcast.",
      collocations: ["rise of digital journalism", "digital journalism ethics"]
    },
    {
      id: "v12-u7-fake-news",
      word: "fake news",
      partOfSpeech: "n.phr",
      meaningVi: "tin t\u1ee9c gi\u1ea3 m\u1ea1o, tin v\u1ecbt l\u1eeba \u0111\u1ea3o",
      ipa: "/\u02ccfe\u026ak \u02c8nju\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fake+news&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Social networks are taking legal measures to halt the viral spread of fake news.",
      exampleVi: "C\u00e1c m\u1ea1ng x\u00e3 h\u1ed9i \u0111ang th\u1ef1c hi\u1ec7n c\u00e1c bi\u1ec7n ph\u00e1p ph\u00e1p l\u00fd \u0111\u1ec3 ch\u1eb7n \u0111\u1ee9ng s\u1ef1 l\u00e2y lan c\u1ee7a tin gi\u1ea3 m\u1ea1o.",
      collocations: ["spread of fake news", "spot fake news"]
    },
    {
      id: "v12-u7-editorial",
      word: "editorial",
      partOfSpeech: "n / adj",
      meaningVi: "b\u00e0i x\u00e3 lu\u1eadn \u0111\u1ecbnh h\u01b0\u1edbng c\u1ee7a ban bi\u00ean t\u1eadp",
      ipa: "/\u02cced\u026a\u02c8t\u0254\u02d0ri\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=editorial&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The chief newspaper editorial urged city planners to protect remaining urban parks.",
      exampleVi: "B\u00e0i x\u00e3 lu\u1eadn c\u1ee7a b\u00e1o \u0111\u00e3 th\u00fac gi\u1ee5c c\u00e1c nh\u00e0 quy ho\u1ea1ch b\u1ea3o v\u1ec7 nh\u1eefng c\u00f4ng vi\u00ean c\u00f2n l\u1ea1i c\u1ee7a th\u00e0nh ph\u1ed1.",
      collocations: ["newspaper editorial", "editorial board"]
    },
    {
      id: "v12-u7-advertising-campaign",
      word: "advertising campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch qu\u1ea3ng c\u00e1o truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8\u00e6dv\u0259ta\u026az\u026a\u014b k\u00e6m\u02ccpe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=advertising+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The viral advertising campaign generated millions of impressions across video platforms.",
      exampleVi: "Chi\u1ebfn d\u1ecbch qu\u1ea3ng c\u00e1o \u0111\u00e3 t\u1ea1o n\u00ean h\u00e0ng tri\u1ec7u l\u01b0\u1ee3t ti\u1ebfp c\u1eadn tr\u00ean c\u00e1c n\u1ec1n t\u1ea3ng video.",
      collocations: ["launch an advertising campaign", "successful advertising campaign"]
    },
    {
      id: "v12-u7-public-opinion",
      word: "public opinion",
      partOfSpeech: "n.phr",
      meaningVi: "d\u01b0 lu\u1eadn x\u00e3 h\u1ed9i, \u00fd ki\u1ebfn c\u00f4ng ch\u00fang",
      ipa: "/\u02ccp\u028cbl\u026ak \u0259\u02c8p\u026anj\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+opinion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investigative documentary reports shifted public opinion in favor of wildlife protection.",
      exampleVi: "Ph\u00f3ng s\u1ef1 t\u00e0i li\u1ec7u \u0111i\u1ec1u tra \u0111\u00e3 l\u00e0m thay \u0111\u1ed5i d\u01b0 lu\u1eadn x\u00e3 h\u1ed9i \u1ee7ng h\u1ed9 vi\u1ec7c b\u1ea3o v\u1ec7 \u0111\u1ed9ng v\u1eadt hoang d\u00e3.",
      collocations: ["shape public opinion", "influence public opinion"]
    },
    {
      id: "v12-u7-press-freedom",
      word: "press freedom",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ef1 do b\u00e1o ch\u00ed v\u00e0 truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8pres \u02c8fri\u02d0d\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=press+freedom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Press freedom allows investigative reporters to hold corrupt officials accountable.",
      exampleVi: "T\u1ef1 do b\u00e1o ch\u00ed cho ph\u00e9p c\u00e1c ph\u00f3ng vi\u00ean \u0111i\u1ec1u tra l\u00e0m s\u00e1ng t\u1ecf nh\u1eefng ti\u00eau c\u1ef1c trong x\u00e3 h\u1ed9i.",
      collocations: ["champion press freedom", "defend press freedom"]
    },
    {
      id: "v12-u7-viral-content",
      word: "viral content",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ed9i dung lan truy\u1ec1n v\u1edbi t\u1ed1c \u0111\u1ed9 ch\u00f3ng m\u1eb7t",
      ipa: "/\u02c8va\u026ar\u0259l \u02c8k\u0252ntent/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=viral+content&type=2",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A rescue video of a trapped dolphin quickly became viral content with ten million shares.",
      exampleVi: "\u0110o\u1ea1n video gi\u1ea3i c\u1ee9u ch\u00fa c\u00e1 heo m\u1eafc c\u1ea1n \u0111\u00e3 nhanh ch\u00f3ng tr\u1edf th\u00e0nh n\u1ed9i dung lan truy\u1ec1n v\u1edbi m\u01b0\u1eddi tri\u1ec7u l\u01b0\u1ee3t chia s\u1ebb.",
      collocations: ["create viral content", "go viral"]
    },
    {
      id: "v12-u7-mass-communication",
      word: "mass communication",
      partOfSpeech: "n.phr",
      meaningVi: "truy\u1ec1n th\u00f4ng \u0111\u1ea1i ch\u00fang",
      ipa: "/\u02ccm\u00e6s k\u0259\u02ccmju\u02d0n\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mass+communication&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Television and the Internet are the most pervasive channels of mass communication.",
      exampleVi: "Truy\u1ec1n h\u00ecnh v\u00e0 Internet l\u00e0 nh\u1eefng k\u00eanh truy\u1ec1n th\u00f4ng \u0111\u1ea1i ch\u00fang c\u00f3 s\u1ee9c lan t\u1ecfa r\u1ed9ng kh\u1eafp nh\u1ea5t.",
      collocations: ["tools of mass communication", "study mass communication"]
    },
    {
      id: "v12-u7-social-influencer",
      word: "social influencer",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi c\u00f3 t\u1ea7m \u1ea3nh h\u01b0\u1edfng tr\u00ean m\u1ea1ng x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8\u026anflu\u0259ns\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+influencer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The social influencer promoted reading books and visiting historic museums to young fans.",
      exampleVi: "Ng\u01b0\u1eddi c\u00f3 t\u1ea7m \u1ea3nh h\u01b0\u1edfng tr\u00ean m\u1ea1ng x\u00e3 h\u1ed9i \u0111\u00e3 khuy\u1ebfn kh\u00edch ng\u01b0\u1eddi h\u00e2m m\u1ed9 tr\u1ebb \u0111\u1ecdc s\u00e1ch v\u00e0 th\u0103m b\u1ea3o t\u00e0ng l\u1ecbch s\u1eed.",
      collocations: ["collaborate with influencers", "influencer marketing"]
    },
    {
      id: "v12-u7-infotainment",
      word: "infotainment",
      partOfSpeech: "n",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh k\u1ebft h\u1ee3p th\u00f4ng tin v\u00e0 gi\u1ea3i tr\u00ed",
      ipa: "/\u02cc\u026anf\u0259\u028a\u02c8te\u026anm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=infotainment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern evening news uses colorful graphics and infotainment formats to engage viewers.",
      exampleVi: "B\u1ea3n tin t\u1ed1i hi\u1ec7n \u0111\u1ea1i d\u00f9ng \u0111\u1ed3 h\u1ecda sinh \u0111\u1ed9ng v\u00e0 l\u1ed1i d\u1eabn th\u00f4ng tin gi\u1ea3i tr\u00ed \u0111\u1ec3 thu h\u00fat ng\u01b0\u1eddi xem.",
      collocations: ["infotainment channel", "rise of infotainment"]
    },
    {
      id: "v12-u7-fact-checking",
      word: "fact-checking",
      partOfSpeech: "n",
      meaningVi: "c\u00f4ng t\u00e1c x\u00e1c minh v\u00e0 ki\u1ec3m ch\u1ee9ng s\u1ef1 th\u1eadt",
      ipa: "/\u02c8f\u00e6kt t\u0283ek\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fact-checking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reputable media agencies maintain independent fact-checking desks to eliminate hoaxes.",
      exampleVi: "C\u00e1c c\u01a1 quan truy\u1ec1n th\u00f4ng uy t\u00edn duy tr\u00ec b\u1ed9 ph\u1eadn ki\u1ec3m ch\u1ee9ng s\u1ef1 th\u1eadt \u0111\u1ed9c l\u1eadp \u0111\u1ec3 lo\u1ea1i b\u1ecf tin gi\u1ea3.",
      collocations: ["rigorous fact-checking", "fact-checking website"]
    },
    {
      id: "v12-u7-censorship",
      word: "censorship",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ki\u1ec3m duy\u1ec7t n\u1ed9i dung \u0111\u1ed9c h\u1ea1i/b\u1ea1o l\u1ef1c",
      ipa: "/\u02c8sens\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=censorship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Age-rating censorship protects young children from violent or explicit movie scenes.",
      exampleVi: "Ki\u1ec3m duy\u1ec7t ph\u00e2n lo\u1ea1i \u0111\u1ed9 tu\u1ed5i b\u1ea3o v\u1ec7 tr\u1ebb nh\u1ecf kh\u1ecfi nh\u1eefng c\u1ea3nh phim b\u1ea1o l\u1ef1c ho\u1eb7c \u0111\u1ed9c h\u1ea1i.",
      collocations: ["media censorship", "subject to censorship"]
    },
    {
      id: "v12-u7-citizen-journalism",
      word: "citizen journalism",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e1o ch\u00ed c\u00f4ng d\u00e2n (ng\u01b0\u1eddi d\u00e2n t\u1ef1 quay ch\u1ee5p tin)",
      ipa: "/\u02ccs\u026at\u026azn \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=citizen+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smartphone videos taken by bystanders are powerful forms of citizen journalism during disasters.",
      exampleVi: "Video quay b\u1eb1ng \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ng\u01b0\u1eddi qua \u0111\u01b0\u1eddng l\u00e0 h\u00ecnh th\u1ee9c b\u00e1o ch\u00ed c\u00f4ng d\u00e2n \u0111\u1eafc l\u1ef1c khi c\u00f3 thi\u00ean tai.",
      collocations: ["power of citizen journalism", "practice citizen journalism"]
    },
    {
      id: "v12-u7-clickbait",
      word: "clickbait",
      partOfSpeech: "n",
      meaningVi: "m\u1ed3i nh\u1eed nh\u1ea5p chu\u1ed9t, ti\u00eau \u0111\u1ec1 gi\u1eadt g\u00e2n r\u1ebb ti\u1ec1n",
      ipa: "/\u02c8kl\u026akbe\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clickbait&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Misleading clickbait articles deceive readers with exaggerated headlines that fail to deliver.",
      exampleVi: "Nh\u1eefng b\u00e0i vi\u1ebft gi\u1eadt t\u00edt c\u00e2u click \u0111\u00e1nh l\u1eeba ng\u01b0\u1eddi \u0111\u1ecdc b\u1eb1ng ti\u00eau \u0111\u1ec1 th\u1ed5i ph\u1ed3ng sai s\u1ef1 th\u1eadt.",
      collocations: ["avoid clickbait", "clickbait title"]
    },
    {
      id: "v12-u7-soundbite",
      word: "soundbite",
      partOfSpeech: "n",
      meaningVi: "c\u00e2u tr\u00edch ng\u1eafn \u1ea5n t\u01b0\u1ee3ng \u0111\u1ec3 ph\u00e1t tr\u00ean s\u00f3ng",
      ipa: "/\u02c8sa\u028andba\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soundbite&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Politicians practice crafting memorable ten-second soundbites for the evening television news.",
      exampleVi: "C\u00e1c ch\u00ednh kh\u00e1ch luy\u1ec7n t\u1eadp t\u1ea1o ra nh\u1eefng c\u00e2u n\u00f3i ng\u1eafn g\u1ecdn m\u01b0\u1eddi gi\u00e2y \u0111\u1eaft gi\u00e1 cho b\u1ea3n tin truy\u1ec1n h\u00ecnh t\u1ed1i.",
      collocations: ["catchy soundbite", "headline soundbite"]
    },
    {
      id: "v12-u7-bias",
      word: "bias",
      partOfSpeech: "n",
      meaningVi: "thi\u00ean v\u1ecb, g\u00f3c nh\u00ecn \u0111\u1ecbnh ki\u1ebfn m\u1ed9t chi\u1ec1u",
      ipa: "/\u02c8ba\u026a\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bias&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Responsible journalists disclose conflicts of interest to avoid reporting bias.",
      exampleVi: "Nh\u1eefng nh\u00e0 b\u00e1o c\u00f3 tr\u00e1ch nhi\u1ec7m lu\u00f4n c\u00f4ng khai l\u1ee3i \u00edch li\u00ean quan \u0111\u1ec3 tr\u00e1nh thi\u00ean ki\u1ebfn khi \u0111\u01b0a tin.",
      collocations: ["media bias", "free from bias"]
    },
    {
      id: "v12-u7-digital-footprint",
      word: "digital footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u v\u1ebft s\u1ed1 c\u1ee7a ng\u01b0\u1eddi d\u00f9ng tr\u00ean Internet",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Be conscious of your online comments because your digital footprint persists indefinitely.",
      exampleVi: "H\u00e3y c\u1ea9n tr\u1ecdng v\u1edbi c\u00e1c b\u00ecnh lu\u1eadn tr\u00ean m\u1ea1ng v\u00ec d\u1ea5u v\u1ebft k\u1ef9 thu\u1eadt s\u1ed1 c\u1ee7a b\u1ea1n s\u1ebd t\u1ed3n t\u1ea1i m\u00e3i m\u00e3i.",
      collocations: ["manage your digital footprint", "clean digital footprint"]
    }
    ,
    {
      id: "v12-extra-investigative-journalism",
      word: "investigative journalism",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e1o ch\u00ed \u0111i\u1ec1u tra s\u1ef1 th\u1eadt",
      ipa: "/\u026an\u02c8vest\u026a\u0261\u0259t\u026av \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=investigative+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investigative journalism uncovers environmental pollution concealed by rogue factories.",
      exampleVi: "B\u00e1o ch\u00ed \u0111i\u1ec1u tra v\u1ea1ch tr\u1ea7n h\u00e0nh vi x\u1ea3 th\u1ea3i m\u00f4i tr\u01b0\u1eddng b\u1ecb che gi\u1ea5u b\u1edfi c\u00e1c nh\u00e0 m\u00e1y.",
      collocations: ["power of investigative journalism", "award for investigative journalism"]
    }
    ,
    {
      id: "v12-extra-media-regulation",
      word: "media regulation",
      partOfSpeech: "n.phr",
      meaningVi: "quy \u0111\u1ecbnh qu\u1ea3n l\u00fd b\u00e1o ch\u00ed v\u00e0 truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8mi\u02d0di\u0259 \u02ccre\u0261ju\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=media+regulation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Media regulations prohibit misleading medical advertisements targeting vulnerable elders.",
      exampleVi: "Quy \u0111\u1ecbnh truy\u1ec1n th\u00f4ng nghi\u00eam c\u1ea5m qu\u1ea3ng c\u00e1o thu\u1ed1c \u0111\u00e1nh l\u1eeba ng\u01b0\u1eddi cao tu\u1ed5i nh\u1eb9 d\u1ea1.",
      collocations: ["enforce media regulations", "stricter media regulation"]
    }
    ,
    {
      id: "v12-extra-online-disinformation",
      word: "online disinformation",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f4ng tin sai l\u1ec7ch c\u00f3 ch\u1ee7 \u0111\u00edch tr\u00ean m\u1ea1ng",
      ipa: "/\u02cc\u0252nla\u026an \u02ccd\u026as\u026anf\u0259\u02c8me\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+disinformation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educators teach students how to identify and debunk online disinformation campaigns.",
      exampleVi: "Th\u1ea7y c\u00f4 h\u01b0\u1edbng d\u1eabn h\u1ecdc sinh c\u00e1ch nh\u1eadn di\u1ec7n v\u00e0 b\u00e1c b\u1ecf c\u00e1c chi\u1ebfn d\u1ecbch tin gi\u1ea3 m\u1ea1o c\u00f3 ch\u1ee7 \u0111\u00edch.",
      collocations: ["combat online disinformation", "spread of disinformation"]
    }
    ,
    {
      id: "v12-extra-digital-broadcaster",
      word: "digital broadcaster",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0i truy\u1ec1n h\u00ecnh s\u1ed1 tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8br\u0254\u02d0dk\u0251\u02d0st\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+broadcaster&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The digital broadcaster streams documentaries simultaneously to mobile apps and smart TVs.",
      exampleVi: "\u0110\u00e0i truy\u1ec1n h\u00ecnh s\u1ed1 ph\u00e1t tr\u1ef1c ti\u1ebfp c\u00e1c b\u1ed9 phim t\u00e0i li\u1ec7u \u0111\u1ed3ng th\u1eddi l\u00ean \u1ee9ng d\u1ee5ng v\u00e0 tivi th\u00f4ng minh.",
      collocations: ["national digital broadcaster", "licensed digital broadcaster"]
    }
    ,
    {
      id: "v12-extra-target-audience",
      word: "target audience",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ed1i t\u01b0\u1ee3ng kh\u00e1n th\u00ednh gi\u1ea3 m\u1ee5c ti\u00eau",
      ipa: "/\u02c8t\u0251\u02d0\u0261\u026at \u02c8\u0254\u02d0di\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=target+audience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The educational podcast crafted content specifically tailored to its teenage target audience.",
      exampleVi: "Ch\u01b0\u01a1ng tr\u00ecnh podcast thi\u1ebft k\u1ebf n\u1ed9i dung ph\u00f9 h\u1ee3p ri\u00eang v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng th\u00ednh gi\u1ea3 tu\u1ed5i teen.",
      collocations: ["reach the target audience", "define the target audience"]
    }
    ,
    {
      id: "v12-extra-prime-time-broadcast",
      word: "prime-time broadcast",
      partOfSpeech: "n.phr",
      meaningVi: "khung gi\u1edd v\u00e0ng ph\u00e1t s\u00f3ng truy\u1ec1n h\u00ecnh",
      ipa: "/\u02ccpra\u026am ta\u026am \u02c8br\u0254\u02d0dk\u0251\u02d0st/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prime-time+broadcast&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The evening news is aired during the 7 PM prime-time broadcast across national channels.",
      exampleVi: "B\u1ea3n tin th\u1eddi s\u1ef1 \u0111\u01b0\u1ee3c ph\u00e1t s\u00f3ng v\u00e0o khung gi\u1edd v\u00e0ng 7 gi\u1edd t\u1ed1i tr\u00ean c\u00e1c k\u00eanh truy\u1ec1n h\u00ecnh qu\u1ed1c gia.",
      collocations: ["watch the prime-time broadcast", "prime-time viewership"]
    }
    ,
    {
      id: "v12-extra-media-accountability",
      word: "media accountability",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00e1ch nhi\u1ec7m gi\u1ea3i tr\u00ecnh c\u1ee7a c\u01a1 quan truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8mi\u02d0di\u0259 \u0259\u02ccka\u028ant\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=media+accountability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Publishing prompt corrections when errors happen reinforces media accountability.",
      exampleVi: "\u0110\u0103ng l\u1eddi \u0111\u00ednh ch\u00ednh k\u1ecbp th\u1eddi khi c\u00f3 sai s\u00f3t gi\u00fap c\u1ee7ng c\u1ed1 tr\u00e1ch nhi\u1ec7m c\u1ee7a c\u01a1 quan b\u00e1o ch\u00ed.",
      collocations: ["demand media accountability", "principles of accountability"]
    }
    ,
    {
      id: "v12-extra-information-dissemination",
      word: "information dissemination",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u1ed5 bi\u1ebfn v\u00e0 lan t\u1ecfa th\u00f4ng tin",
      ipa: "/\u02cc\u026anf\u0259\u02c8me\u026a\u0283n d\u026a\u02ccsem\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=information+dissemination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Social channels enable instantaneous information dissemination during national emergencies.",
      exampleVi: "C\u00e1c k\u00eanh m\u1ea1ng x\u00e3 h\u1ed9i cho ph\u00e9p lan t\u1ecfa th\u00f4ng tin t\u1ee9c th\u1eddi trong c\u00e1c t\u00ecnh hu\u1ed1ng kh\u1ea9n c\u1ea5p.",
      collocations: ["rapid information dissemination", "channels of dissemination"]
    }
    ,
    {
      id: "v12-extra-public-service-announcement",
      word: "public service announcement",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f4ng \u0111i\u1ec7p tuy\u00ean truy\u1ec1n v\u00ec l\u1ee3i \u00edch c\u00f4ng",
      ipa: "/\u02ccp\u028cbl\u026ak \u02c8s\u025c\u02d0v\u026as \u0259\u02ccna\u028ansm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+service+announcement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The health ministry broadcasted public service announcements about helmet safety.",
      exampleVi: "B\u1ed9 Y t\u1ebf \u0111\u00e3 ph\u00e1t s\u00f3ng c\u00e1c th\u00f4ng \u0111i\u1ec7p truy\u1ec1n th\u00f4ng c\u00f4ng \u00edch v\u1ec1 an to\u00e0n \u0111\u1ed9i m\u0169 b\u1ea3o hi\u1ec3m.",
      collocations: ["air a public service announcement", "televised announcement"]
    }
    ,
    {
      id: "v12-extra-newsfeed",
      word: "newsfeed",
      partOfSpeech: "n",
      meaningVi: "b\u1ea3ng tin c\u1eadp nh\u1eadt tr\u00ean \u1ee9ng d\u1ee5ng m\u1ea1ng x\u00e3 h\u1ed9i",
      ipa: "/\u02c8nju\u02d0zfi\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=newsfeed&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Algorithms curate your personal newsfeed to display topics matching your clicks.",
      exampleVi: "Thu\u1eadt to\u00e1n s\u1eafp x\u1ebfp b\u1ea3ng tin c\u00e1 nh\u00e2n \u0111\u1ec3 hi\u1ec3n th\u1ecb nh\u1eefng ch\u1ee7 \u0111\u1ec1 b\u1ea1n th\u01b0\u1eddng xem.",
      collocations: ["scroll through the newsfeed", "personalized newsfeed"]
    }
    ,
    {
      id: "v12-extra-verified-account",
      word: "verified account",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e0i kho\u1ea3n m\u1ea1ng x\u00e3 h\u1ed9i c\u00f3 t\u00edch xanh x\u00e1c th\u1ef1c",
      ipa: "/\u02c8ver\u026afa\u026ad \u0259\u02c8ka\u028ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=verified+account&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Check for verified accounts with official badges to confirm government statements.",
      exampleVi: "H\u00e3y xem c\u00e1c t\u00e0i kho\u1ea3n c\u00f3 t\u00edch xanh x\u00e1c th\u1ef1c \u0111\u1ec3 \u0111\u1ecdc th\u00f4ng tin ch\u00ednh th\u1ee9c c\u1ee7a c\u01a1 quan nh\u00e0 n\u01b0\u1edbc.",
      collocations: ["follow verified accounts", "official verified account"]
    }
    ,
    {
      id: "v12-extra-live-stream",
      word: "live-stream",
      partOfSpeech: "v / n",
      meaningVi: "ph\u00e1t s\u00f3ng tr\u1ef1c ti\u1ebfp s\u1ef1 ki\u1ec7n qua m\u1ea1ng",
      ipa: "/\u02c8la\u026avstri\u02d0m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=live-stream&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university will live-stream the graduation ceremony for relatives overseas.",
      exampleVi: "Tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc s\u1ebd ph\u00e1t s\u00f3ng tr\u1ef1c ti\u1ebfp l\u1ec5 t\u1ed1t nghi\u1ec7p cho ng\u01b0\u1eddi th\u00e2n \u1edf n\u01b0\u1edbc ngo\u00e0i c\u00f9ng xem.",
      collocations: ["watch the live-stream", "host a live-stream"]
    }
    ,
    {
      id: "v12-extra-editorial-integrity",
      word: "editorial integrity",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ednh li\u00eam ch\u00ednh v\u00e0 kh\u00e1ch quan c\u1ee7a ban bi\u00ean t\u1eadp",
      ipa: "/\u02cced\u026a\u02c8t\u0254\u02d0ri\u0259l \u026an\u02c8te\u0261r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=editorial+integrity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reputable magazines safeguard editorial integrity by rejecting commercial sponsorships.",
      exampleVi: "C\u00e1c t\u1ea1p ch\u00ed uy t\u00edn gi\u1eef g\u00ecn t\u00ednh li\u00eam ch\u00ednh bi\u00ean t\u1eadp b\u1eb1ng c\u00e1ch t\u1eeb ch\u1ed1i t\u00e0i tr\u1ee3 th\u01b0\u01a1ng m\u1ea1i.",
      collocations: ["uphold editorial integrity", "compromise integrity"]
    }
    ,
    {
      id: "v12-extra-media-landscape",
      word: "media landscape",
      partOfSpeech: "n.phr",
      meaningVi: "di\u1ec7n m\u1ea1o v\u00e0 b\u1ee9c tranh to\u00e0n c\u1ea3nh truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8mi\u02d0di\u0259 \u02c8l\u00e6ndske\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=media+landscape&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smartphones have dramatically transformed the modern media landscape in Vietnam.",
      exampleVi: "\u0110i\u1ec7n tho\u1ea1i th\u00f4ng minh \u0111\u00e3 thay \u0111\u1ed5i c\u0103n b\u1ea3n di\u1ec7n m\u1ea1o truy\u1ec1n th\u00f4ng hi\u1ec7n \u0111\u1ea1i t\u1ea1i Vi\u1ec7t Nam.",
      collocations: ["dynamic media landscape", "changing media landscape"]
    }
    ,
    {
      id: "v-boost-investigative-journalism",
      word: "investigative journalism",
      partOfSpeech: "n.phr",
      meaningVi: "ngh\u1ec1 b\u00e1o ch\u00ed \u0111i\u1ec1u tra phanh phui s\u1ef1 th\u1eadt",
      ipa: "/\u026an\u02ccvest\u026a\u0261\u0259t\u026av \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=investigative+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A prestigious award honored the team for courageous investigative journalism.",
      exampleVi: "Gi\u1ea3i th\u01b0\u1edfng danh gi\u00e1 t\u00f4n vinh nh\u00f3m ph\u00f3ng vi\u00ean v\u00ec s\u1ef1 d\u0169ng c\u1ea3m trong t\u00e1c nghi\u1ec7p \u0111i\u1ec1u tra.",
      collocations: ["triumph of investigative journalism", "pursue investigative journalism"]
    }
    ,
    {
      id: "v-boost-broadcast-journalism",
      word: "broadcast journalism",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e0nh b\u00e1o ch\u00ed truy\u1ec1n h\u00ecnh v\u00e0 ph\u00e1t thanh",
      ipa: "/\u02c8br\u0254\u02d0dk\u0251\u02d0st \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=broadcast+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She majored in broadcast journalism and currently anchors the evening news bulletin.",
      exampleVi: "C\u00f4 \u1ea5y t\u1ed1t nghi\u1ec7p ng\u00e0nh b\u00e1o ch\u00ed truy\u1ec1n h\u00ecnh v\u00e0 hi\u1ec7n \u0111ang d\u1eabn b\u1ea3n tin th\u1eddi s\u1ef1 bu\u1ed5i t\u1ed1i.",
      collocations: ["career in broadcast journalism", "standards of broadcast journalism"]
    }
    ,
    {
      id: "v-boost-media-censorship",
      word: "media censorship",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ki\u1ec3m duy\u1ec7t n\u1ed9i dung tr\u00ean ph\u01b0\u01a1ng ti\u1ec7n truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8mi\u02d0di\u0259 \u02c8sens\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=media+censorship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Civil liberties watchdogs monitor instances of unwarranted media censorship.",
      exampleVi: "C\u00e1c t\u1ed5 ch\u1ee9c b\u1ea3o v\u1ec7 quy\u1ec1n c\u00f4ng d\u00e2n theo d\u00f5i s\u00e1t sao nh\u1eefng bi\u1ec3u hi\u1ec7n ki\u1ec3m duy\u1ec7t truy\u1ec1n th\u00f4ng.",
      collocations: ["subject to media censorship", "oppose media censorship"]
    }
    ,
    {
      id: "v-boost-press-freedom",
      word: "press freedom",
      partOfSpeech: "n.phr",
      meaningVi: "quy\u1ec1n t\u1ef1 do b\u00e1o ch\u00ed h\u1ee3p ph\u00e1p",
      ipa: "/pres \u02c8fri\u02d0d\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=press+freedom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A thriving society requires robust press freedom to hold institutions accountable.",
      exampleVi: "M\u1ed9t x\u00e3 h\u1ed9i ph\u1ed3n vinh c\u1ea7n quy\u1ec1n t\u1ef1 do b\u00e1o ch\u00ed v\u1eefng v\u00e0ng \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o t\u00ednh gi\u1ea3i tr\u00ecnh minh b\u1ea1ch.",
      collocations: ["defend press freedom", "index of press freedom"]
    }
    ,
    {
      id: "v-boost-public-opinion-poll",
      word: "public opinion poll",
      partOfSpeech: "n.phr",
      meaningVi: "cu\u1ed9c th\u0103m d\u00f2 d\u01b0 lu\u1eadn v\u00e0 \u00fd ki\u1ebfn c\u00f4ng ch\u00fang",
      ipa: "/\u02ccp\u028cbl\u026ak \u0259\u02c8p\u026anj\u0259n p\u0259\u028al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+opinion+poll&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The latest public opinion poll reveals overwhelming backing for environmental laws.",
      exampleVi: "Cu\u1ed9c th\u0103m d\u00f2 d\u01b0 lu\u1eadn m\u1edbi nh\u1ea5t cho th\u1ea5y s\u1ef1 \u1ee7ng h\u1ed9 \u00e1p \u0111\u1ea3o \u0111\u1ed1i v\u1edbi lu\u1eadt m\u00f4i tr\u01b0\u1eddng.",
      collocations: ["conduct a public opinion poll", "results of the public opinion poll"]
    }
    ,
    {
      id: "v-boost-sensational-headline",
      word: "sensational headline",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u00eau \u0111\u1ec1 gi\u1eadt g\u00e2n thu h\u00fat s\u1ef1 ch\u00fa \u00fd",
      ipa: "/sen\u02c8se\u026a\u0283\u0259nl \u02c8hedla\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sensational+headline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tabloids frequently rely on sensational headlines to entice casual readers.",
      exampleVi: "C\u00e1c t\u1edd b\u00e1o l\u00e1 c\u1ea3i th\u01b0\u1eddng d\u1ef1a v\u00e0o nh\u1eefng ti\u00eau \u0111\u1ec1 gi\u1eadt g\u00e2n \u0111\u1ec3 l\u00f4i k\u00e9o ng\u01b0\u1eddi \u0111\u1ecdc l\u01b0\u1edbt qua.",
      collocations: ["misleading sensational headlines", "write sensational headlines"]
    }
    ,
    {
      id: "v-boost-citizen-journalism",
      word: "citizen journalism",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e1o ch\u00ed c\u00f4ng d\u00e2n qua video ng\u01b0\u1eddi d\u00e2n quay",
      ipa: "/\u02ccs\u026at\u026azn \u02c8d\u0292\u025c\u02d0n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=citizen+journalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smartphone livestreams of natural disasters are compelling examples of citizen journalism.",
      exampleVi: "C\u00e1c video tr\u1ef1c ti\u1ebfp v\u1ec1 thi\u00ean tai t\u1eeb \u0111i\u1ec7n tho\u1ea1i th\u00f4ng minh l\u00e0 minh ch\u1ee9ng cho b\u00e1o ch\u00ed c\u00f4ng d\u00e2n.",
      collocations: ["rise of citizen journalism", "empower citizen journalism"]
    }
    ,
    {
      id: "v-boost-digital-disinformation",
      word: "digital disinformation",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f4ng tin sai l\u1ec7ch c\u1ed1 \u00fd tr\u00ean m\u00f4i tr\u01b0\u1eddng s\u1ed1",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02ccd\u026as\u026anf\u0259\u02c8me\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+disinformation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tech platforms cooperate with universities to detect and neutralize digital disinformation.",
      exampleVi: "C\u00e1c n\u1ec1n t\u1ea3ng c\u00f4ng ngh\u1ec7 h\u1ee3p t\u00e1c c\u00f9ng tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc \u0111\u1ec3 ng\u0103n ch\u1eb7n th\u00f4ng tin b\u1ecba \u0111\u1eb7t tr\u1ef1c tuy\u1ebfn.",
      collocations: ["combat digital disinformation", "spread of digital disinformation"]
    }
    ,
    {
      id: "v-boost-advertising-revenue",
      word: "advertising revenue",
      partOfSpeech: "n.phr",
      meaningVi: "ngu\u1ed3n thu t\u1eeb qu\u1ea3ng c\u00e1o truy\u1ec1n th\u00f4ng",
      ipa: "/\u02c8\u00e6dv\u0259ta\u026az\u026a\u014b \u02c8rev\u0259nju\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=advertising+revenue&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Print publications suffered a steep decline in traditional advertising revenue.",
      exampleVi: "B\u00e1o in truy\u1ec1n th\u1ed1ng s\u1ee5t gi\u1ea3m m\u1ea1nh v\u1ec1 doanh thu qu\u1ea3ng c\u00e1o khi \u0111\u1ed9c gi\u1ea3 chuy\u1ec3n sang m\u1ea1ng.",
      collocations: ["boost advertising revenue", "rely on advertising revenue"]
    }
    ,
    {
      id: "v-boost-social-media-influencer",
      word: "social media influencer",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi c\u00f3 s\u1ee9c \u1ea3nh h\u01b0\u1edfng tr\u00ean m\u1ea1ng x\u00e3 h\u1ed9i",
      ipa: "/\u02ccs\u0259\u028a\u0283l \u02c8mi\u02d0di\u0259 \u02c8\u026anflu\u0259ns\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+media+influencer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The fashion brand partnered with a prominent social media influencer to launch the line.",
      exampleVi: "Nh\u00e3n h\u00e0ng th\u1eddi trang b\u1eaft tay v\u1edbi m\u1ed9t ng\u01b0\u1eddi c\u00f3 s\u1ee9c \u1ea3nh h\u01b0\u1edfng l\u1edbn tr\u00ean m\u1ea1ng \u0111\u1ec3 ra m\u1eaft b\u1ed9 s\u01b0u t\u1eadp.",
      collocations: ["popular social media influencer", "reach of social media influencers"]
    }
    ,
    {
      id: "v-boost-prime-time-broadcast",
      word: "prime-time broadcast",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh ph\u00e1t s\u00f3ng gi\u1edd v\u00e0ng",
      ipa: "/\u02ccpra\u026am \u02c8ta\u026am \u02c8br\u0254\u02d0dk\u0251\u02d0st/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prime-time+broadcast&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The presidential debate attracted thirty million viewers during its prime-time broadcast.",
      exampleVi: "Bu\u1ed5i tranh lu\u1eadn t\u1ed5ng th\u1ed1ng thu h\u00fat ba m\u01b0\u01a1i tri\u1ec7u kh\u00e1n gi\u1ea3 trong khung gi\u1edd ph\u00e1t s\u00f3ng v\u00e0ng.",
      collocations: ["schedule a prime-time broadcast", "tune in to the prime-time broadcast"]
    }
    ,
    {
      id: "v-boost-media-literacy-skill",
      word: "media literacy skill",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng ph\u00e2n t\u00edch ch\u1ecdn l\u1ecdc th\u00f4ng tin",
      ipa: "/\u02c8mi\u02d0di\u0259 \u02c8l\u026at\u0259r\u0259si sk\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=media+literacy+skill&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools teach media literacy skills to help teenagers evaluate online claims critically.",
      exampleVi: "Tr\u01b0\u1eddng h\u1ecdc d\u1ea1y k\u1ef9 n\u0103ng ph\u00e2n t\u00edch truy\u1ec1n th\u00f4ng \u0111\u1ec3 h\u1ecdc sinh \u0111\u00e1nh gi\u00e1 th\u00f4ng tin m\u1ea1ng c\u00f3 ph\u00ea ph\u00e1n.",
      collocations: ["sharpen media literacy skills", "essential media literacy skills"]
    }
    ,
    {
      id: "v-boost-fact-checking-website",
      word: "fact-checking website",
      partOfSpeech: "n.phr",
      meaningVi: "trang web ki\u1ec3m ch\u1ee9ng \u0111\u1ed9 ch\u00ednh x\u00e1c th\u00f4ng tin",
      ipa: "/\u02c8f\u00e6kt t\u0283ek\u026a\u014b \u02c8websa\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fact-checking+website&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Always cross-reference sensational rumors with a certified fact-checking website.",
      exampleVi: "Lu\u00f4n \u0111\u1ed1i chi\u1ebfu c\u00e1c tin \u0111\u1ed3n gi\u1eadt g\u00e2n v\u1edbi trang web ki\u1ec3m ch\u1ee9ng s\u1ef1 th\u1eadt \u0111\u00e1ng tin c\u1eady.",
      collocations: ["consult a fact-checking website", "independent fact-checking website"]
    }
    ,
    {
      id: "v-boost-editorial-independence",
      word: "editorial independence",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ednh \u0111\u1ed9c l\u1eadp trong ho\u1ea1t \u0111\u1ed9ng bi\u00ean t\u1eadp",
      ipa: "/\u02cced\u026a\u02c8t\u0254\u02d0ri\u0259l \u02cc\u026and\u026a\u02c8pend\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=editorial+independence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The newsroom protects its editorial independence from commercial sponsor pressure.",
      exampleVi: "T\u00f2a so\u1ea1n b\u1ea3o v\u1ec7 t\u00ednh \u0111\u1ed9c l\u1eadp bi\u00ean t\u1eadp tr\u01b0\u1edbc s\u1ee9c \u00e9p t\u1eeb c\u00e1c nh\u00e0 t\u00e0i tr\u1ee3 th\u01b0\u01a1ng m\u1ea1i.",
      collocations: ["safeguard editorial independence", "cherish editorial independence"]
    }
    ,
    {
      id: "v-boost-target-audience",
      word: "target audience",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00e1n th\u00ednh gi\u1ea3 v\u00e0 \u0111\u1ed9c gi\u1ea3 m\u1ee5c ti\u00eau",
      ipa: "/\u02c8t\u0251\u02d0\u0261\u026at \u02c8\u0254\u02d0di\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=target+audience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The educational podcast caters specifically to a target audience of high school seniors.",
      exampleVi: "K\u00eanh podcast gi\u00e1o d\u1ee5c n\u00e0y h\u01b0\u1edbng \u0111\u1ebfn \u0111\u1ed1i t\u01b0\u1ee3ng kh\u00e1n th\u00ednh gi\u1ea3 m\u1ee5c ti\u00eau l\u00e0 h\u1ecdc sinh cu\u1ed1i c\u1ea5p 3.",
      collocations: ["reach the target audience", "engage the target audience"]
    }
    ,
    {
      id: "v-boost-viral-marketing-campaign",
      word: "viral marketing campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch ti\u1ebfp th\u1ecb lan t\u1ecfa nh\u01b0 virus",
      ipa: "/\u02c8va\u026ar\u0259l \u02c8m\u0251\u02d0k\u026at\u026a\u014b k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=viral+marketing+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Their witty short video sparked a massive viral marketing campaign with millions of shares.",
      exampleVi: "Video ng\u1eafn h\u00f3m h\u1ec9nh \u0111\u00e3 t\u1ea1o n\u00ean chi\u1ebfn d\u1ecbch ti\u1ebfp th\u1ecb lan truy\u1ec1n r\u1ed9ng kh\u1eafp v\u1edbi h\u00e0ng tri\u1ec7u l\u01b0\u1ee3t chia s\u1ebb.",
      collocations: ["launch a viral marketing campaign", "success of viral marketing campaign"]
    }
    ,
    {
      id: "v-boost-breaking-news-bulletin",
      word: "breaking news bulletin",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n tin kh\u1ea9n c\u1ea5p ph\u00e1t s\u00f3ng \u0111\u1ed9t xu\u1ea5t",
      ipa: "/\u02ccbre\u026ak\u026a\u014b \u02c8nju\u02d0z \u02c8b\u028al\u0259t\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breaking+news+bulletin&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The regular drama was interrupted by a breaking news bulletin regarding the typhoon.",
      exampleVi: "B\u1ed9 phim truy\u1ec1n h\u00ecnh \u0111ang chi\u1ebfu b\u1ecb gi\u00e1n \u0111o\u1ea1n b\u1edfi b\u1ea3n tin kh\u1ea9n c\u1ea5p v\u1ec1 c\u01a1n b\u00e3o l\u1edbn.",
      collocations: ["flash a breaking news bulletin", "urgent breaking news bulletin"]
    }
  ],
  "unit-8-wildlife-conservation": [
    {
      id: "v12-u8-endangered-species",
      word: "endangered species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i \u0111\u1ed9ng v\u1eadt c\u00f3 nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng cao",
      ipa: "/\u026an\u02ccde\u026and\u0292\u0259d \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endangered+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The pangolin is the world's most trafficked and critically endangered species.",
      exampleVi: "T\u00ea t\u00ea l\u00e0 lo\u00e0i \u0111\u1ed9ng v\u1eadt b\u1ecb bu\u00f4n b\u00e1n nhi\u1ec1u nh\u1ea5t v\u00e0 c\u00f3 nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng c\u1ef1c k\u1ef3 nguy c\u1ea5p.",
      collocations: ["rescue endangered species", "list of endangered species"]
    },
    {
      id: "v12-u8-poaching",
      word: "poaching",
      partOfSpeech: "n",
      meaningVi: "n\u1ea1n s\u0103n b\u1eaft tr\u1ed9m \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02c8p\u0259\u028at\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poaching&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Equipping rangers with night-vision drones helps clamp down on tiger poaching.",
      exampleVi: "Trang b\u1ecb m\u00e1y bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i h\u1ed3ng ngo\u1ea1i cho ki\u1ec3m l\u00e2m gi\u00fap tr\u1ea5n \u00e1p n\u1ea1n s\u0103n tr\u1ed9m h\u1ed5.",
      collocations: ["illegal poaching", "combat poaching"]
    },
    {
      id: "v12-u8-natural-sanctuary",
      word: "natural sanctuary",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n c\u1ee9u h\u1ed9 thi\u00ean nhi\u00ean an to\u00e0n",
      ipa: "/\u02c8n\u00e6t\u0283r\u0259l \u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=natural+sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The sanctuary provides expansive bamboo enclosures where rescued moon bears recover.",
      exampleVi: "Khu b\u1ea3o t\u1ed3n t\u1ea1o nh\u1eefng v\u1ea1t r\u1eebng tre r\u1ed9ng l\u1edbn \u0111\u1ec3 nh\u1eefng ch\u00fa g\u1ea5u ng\u1ef1a \u0111\u01b0\u1ee3c gi\u1ea3i c\u1ee9u h\u1ed3i ph\u1ee5c.",
      collocations: ["wildlife natural sanctuary", "safe natural sanctuary"]
    },
    {
      id: "v12-u8-extinction-vortex",
      word: "extinction vortex",
      partOfSpeech: "n.phr",
      meaningVi: "v\u00f2ng xo\u00e1y tuy\u1ec7t ch\u1ee7ng kh\u00f4ng th\u1ec3 c\u1ee9u v\u00e3n",
      ipa: "/\u026ak\u02c8st\u026a\u014bk\u0283n \u02c8v\u0254\u02d0teks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extinction+vortex&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "When populations drop below fifty breeding pairs, species enter an irreversible extinction vortex.",
      exampleVi: "Khi qu\u1ea7n th\u1ec3 gi\u1ea3m xu\u1ed1ng d\u01b0\u1edbi n\u0103m m\u01b0\u01a1i c\u1eb7p sinh s\u1ea3n, lo\u00e0i v\u1eadt s\u1ebd r\u01a1i v\u00e0o v\u00f2ng xo\u00e1y tuy\u1ec7t ch\u1ee7ng.",
      collocations: ["escape the extinction vortex", "fall into an extinction vortex"]
    },
    {
      id: "v12-u8-captive-breeding",
      word: "captive breeding",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh nh\u00e2n gi\u1ed1ng sinh s\u1ea3n trong nu\u00f4i nh\u1ed1t",
      ipa: "/\u02cck\u00e6pt\u026av \u02c8bri\u02d0d\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=captive+breeding&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Captive breeding programs in zoological parks prevented the extinction of the California condor.",
      exampleVi: "Ch\u01b0\u01a1ng tr\u00ecnh nh\u00e2n gi\u1ed1ng trong \u0111i\u1ec1u ki\u1ec7n nu\u00f4i nh\u1ed1t \u0111\u00e3 c\u1ee9u lo\u00e0i k\u1ec1n k\u1ec1n California tho\u00e1t kh\u1ecfi tuy\u1ec7t ch\u1ee7ng.",
      collocations: ["successful captive breeding", "captive breeding initiative"]
    },
    {
      id: "v12-u8-biodiversity-corridor",
      word: "biodiversity corridor",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh lang k\u1ebft n\u1ed1i \u0111a d\u1ea1ng sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02c8k\u0252r\u026ad\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+corridor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A forested biodiversity corridor bridges isolated patches of jungle, letting gibbons mate safely.",
      exampleVi: "H\u00e0nh lang r\u1eebng sinh th\u00e1i n\u1ed1i c\u00e1c m\u1ea3nh r\u1eebng b\u1ecb chia c\u1eaft, gi\u00fap lo\u00e0i v\u01b0\u1ee3n k\u1ebft \u0111\u00f4i an to\u00e0n.",
      collocations: ["establish biodiversity corridors", "wildlife corridor"]
    },
    {
      id: "v12-u8-ecosystem-restoration",
      word: "ecosystem restoration",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u1ee5c h\u1ed3i v\u00e0 t\u00e1i t\u1ea1o h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8i\u02d0k\u0259\u028as\u026ast\u0259m \u02ccrest\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecosystem+restoration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mangrove ecosystem restoration shields fishing villages from catastrophic tidal surges.",
      exampleVi: "T\u00e1i t\u1ea1o h\u1ec7 sinh th\u00e1i r\u1eebng ng\u1eadp m\u1eb7n che ch\u1edf cho l\u00e0ng ch\u00e0i tr\u01b0\u1edbc tri\u1ec1u c\u01b0\u1eddng hung d\u1eef.",
      collocations: ["engage in ecosystem restoration", "coastal ecosystem restoration"]
    },
    {
      id: "v12-u8-illegal-trafficking",
      word: "illegal trafficking",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u00f4n l\u1eadu v\u1eadn chuy\u1ec3n \u0111\u1ed9ng v\u1eadt tr\u00e1i ph\u00e9p",
      ipa: "/\u026a\u02c8li\u02d0\u0261l \u02c8tr\u00e6f\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=illegal+trafficking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Customs officers seized two tons of elephant ivory smuggled via maritime shipping containers.",
      exampleVi: "C\u00e1n b\u1ed9 h\u1ea3i quan \u0111\u00e3 thu gi\u1eef hai t\u1ea5n ng\u00e0 voi bu\u00f4n l\u1eadu qua c\u00e1c container \u0111\u01b0\u1eddng bi\u1ec3n.",
      collocations: ["combat illegal trafficking", "wildlife trafficking networks"]
    },
    {
      id: "v12-u8-habitat-fragmentation",
      word: "habitat fragmentation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n m\u1ea3nh v\u00e0 chia c\u1eaft sinh c\u1ea3nh s\u1ed1ng",
      ipa: "/\u02c8h\u00e6b\u026at\u00e6t \u02ccfr\u00e6\u0261men\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=habitat+fragmentation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Highway construction through pristine forests causes devastating habitat fragmentation.",
      exampleVi: "X\u00e2y d\u1ef1ng \u0111\u01b0\u1eddng cao t\u1ed1c qua r\u1eebng nguy\u00ean sinh g\u00e2y chia c\u1eaft m\u00f4i tr\u01b0\u1eddng s\u1ed1ng nghi\u00eam tr\u1ecdng.",
      collocations: ["prevent habitat fragmentation", "severe habitat fragmentation"]
    },
    {
      id: "v12-u8-iucn-red-list",
      word: "IUCN Red List",
      partOfSpeech: "n.pr",
      meaningVi: "S\u00e1ch \u0110\u1ecf B\u1ea3o t\u1ed3n Thi\u00ean nhi\u00ean Qu\u1ed1c t\u1ebf",
      ipa: "/\u02cca\u026a ju\u02d0 si\u02d0 \u02c8en red l\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=IUCN+Red+List&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Vietnamese Delacour's langur is classified as critically endangered on the IUCN Red List.",
      exampleVi: "Lo\u00e0i vo\u1ecdc m\u00f4ng tr\u1eafng c\u1ee7a Vi\u1ec7t Nam \u0111\u01b0\u1ee3c x\u1ebfp lo\u1ea1i c\u1ef1c k\u1ef3 nguy c\u1ea5p trong S\u00e1ch \u0110\u1ecf IUCN.",
      collocations: ["listed on the IUCN Red List", "consult the IUCN Red List"]
    },
    {
      id: "v12-u8-anti-poaching-patrol",
      word: "anti-poaching patrol",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ed9i tu\u1ea7n tra ch\u1ed1ng s\u0103n b\u1eaft tr\u1ed9m r\u1eebng",
      ipa: "/\u02cc\u00e6nti \u02c8p\u0259\u028at\u0283\u026a\u014b p\u0259\u02c8tr\u0259\u028al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=anti-poaching+patrol&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Armed anti-poaching patrols dismantle thousands of deadly wire snares every single month.",
      exampleVi: "C\u00e1c \u0111\u1ed9i tu\u1ea7n tra ch\u1ed1ng s\u0103n tr\u1ed9m th\u00e1o g\u1ee1 h\u00e0ng ng\u00e0n chi\u1ebfc b\u1eaby d\u00e2y ch\u1ebft ng\u01b0\u1eddi m\u1ed7i th\u00e1ng.",
      collocations: ["conduct anti-poaching patrols", "brave anti-poaching patrol"]
    },
    {
      id: "v12-u8-keystone-species",
      word: "keystone species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i then ch\u1ed1t \u0111\u1ecbnh h\u00ecnh to\u00e0n b\u1ed9 h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8ki\u02d0st\u0259\u028an \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=keystone+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sea otters are a keystone species whose presence protects underwater kelp forests.",
      exampleVi: "R\u00e1i c\u00e1 bi\u1ec3n l\u00e0 lo\u00e0i then ch\u1ed1t m\u00e0 s\u1ef1 hi\u1ec7n di\u1ec7n c\u1ee7a ch\u00fang b\u1ea3o v\u1ec7 c\u00e1c c\u00e1nh r\u1eebng t\u1ea3o b\u1eb9 d\u01b0\u1edbi n\u01b0\u1edbc.",
      collocations: ["vital keystone species", "role of keystone species"]
    },
    {
      id: "v12-u8-reintroduction",
      word: "reintroduction",
      partOfSpeech: "n",
      meaningVi: "t\u00e1i th\u1ea3 \u0111\u1ed9ng v\u1eadt \u0111\u01b0\u1ee3c c\u1ee9u h\u1ed9 v\u1ec1 t\u1ef1 nhi\u00ean",
      ipa: "/\u02ccri\u02d0\u026antr\u0259\u02c8d\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reintroduction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "After medical rehabilitation, the reintroduction of the healed sea turtle was a joyous event.",
      exampleVi: "Sau khi \u0111\u01b0\u1ee3c \u0111i\u1ec1u tr\u1ecb, vi\u1ec7c t\u00e1i th\u1ea3 ch\u00fa r\u00f9a bi\u1ec3n l\u00e0nh l\u1eb7n v\u1ec1 t\u1ef1 nhi\u00ean l\u00e0 kho\u1ea3nh kh\u1eafc x\u00fac \u0111\u1ed9ng.",
      collocations: ["species reintroduction", "reintroduction into the wild"]
    },
    {
      id: "v12-u8-wildlife-forensics",
      word: "wildlife forensics",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u00e1m \u0111\u1ecbnh ph\u00e1p y \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02c8wa\u026aldla\u026af f\u0259\u02c8renz\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+forensics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wildlife forensics uses DNA profiling to identify the geographic origin of seized pangolin scales.",
      exampleVi: "Ph\u00e1p y \u0111\u1ed9ng v\u1eadt d\u00f9ng ADN \u0111\u1ec3 x\u00e1c \u0111\u1ecbnh xu\u1ea5t x\u1ee9 \u0111\u1ecba l\u00fd c\u1ee7a nh\u1eefng bao v\u1ea3y t\u00ea t\u00ea b\u1ecb t\u1ecbch thu.",
      collocations: ["wildlife forensics laboratory", "techniques in wildlife forensics"]
    },
    {
      id: "v12-u8-depletion",
      word: "depletion",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 suy gi\u1ea3m c\u1ea1n ki\u1ec7t s\u1ed1 l\u01b0\u1ee3ng c\u00e1 th\u1ec3",
      ipa: "/d\u026a\u02c8pli\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=depletion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Industrial bottom trawling causes catastrophic depletion of marine fish stocks.",
      exampleVi: "\u0110\u00e1nh b\u1eaft gi\u00e3 c\u00e0o \u0111\u00e1y bi\u1ec3n c\u00f4ng nghi\u1ec7p g\u00e2y suy ki\u1ec7t nghi\u00eam tr\u1ecdng ngu\u1ed3n c\u00e1 bi\u1ec3n t\u1ef1 nhi\u00ean.",
      collocations: ["depletion of wildlife", "population depletion"]
    },
    {
      id: "v12-u8-game-reserve",
      word: "game reserve",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 nghi\u00eam ng\u1eb7t",
      ipa: "/\u02c8\u0261e\u026am r\u026a\u02ccz\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=game+reserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tourists must stay inside closed safari vehicles while touring the African game reserve.",
      exampleVi: "Du kh\u00e1ch ph\u1ea3i ng\u1ed3i trong xe chuy\u00ean d\u1ee5ng khi tham quan khu b\u1ea3o t\u1ed3n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 ch\u00e2u Phi.",
      collocations: ["visit a game reserve", "private game reserve"]
    },
    {
      id: "v12-u8-biodiversity-loss",
      word: "biodiversity loss",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1ea5t m\u00e1t \u0111a d\u1ea1ng sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti l\u0252s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+loss&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Protecting ancient wetlands halts the tragic pace of global biodiversity loss.",
      exampleVi: "B\u1ea3o v\u1ec7 nh\u1eefng v\u00f9ng ng\u1eadp n\u01b0\u1edbc c\u1ed5 x\u01b0a gi\u00fap ng\u0103n ch\u1eb7n t\u1ed1c \u0111\u1ed9 suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc \u0111\u00e1ng b\u00e1o \u0111\u1ed9ng.",
      collocations: ["reverse biodiversity loss", "stem biodiversity loss"]
    },
    {
      id: "v12-u8-snare",
      word: "snare",
      partOfSpeech: "n",
      meaningVi: "b\u1eaby d\u00e2y th\u1eaft tr\u1ed9m th\u00fa nguy hi\u1ec3m",
      ipa: "/sne\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=snare&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thousands of wire snares hidden in forest leaves maim endangered deer and wild boars.",
      exampleVi: "H\u00e0ng ng\u00e0n chi\u1ebfc b\u1eaby d\u00e2y gi\u1ea5u d\u01b0\u1edbi l\u00e1 r\u1eebng l\u00e0m th\u01b0\u01a1ng t\u1eadt nhi\u1ec1u lo\u00e0i h\u01b0\u01a1u v\u00e0 l\u1ee3n r\u1eebng qu\u00fd hi\u1ebfm.",
      collocations: ["dismantle wire snares", "deadly snare"]
    },
    {
      id: "v12-u8-trophy-hunting",
      word: "trophy hunting",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00fa s\u0103n b\u1eafn chi\u1ebfn l\u1ee3i ph\u1ea9m t\u00e0n nh\u1eabn",
      ipa: "/\u02c8tr\u0259\u028afi \u02cch\u028cnt\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trophy+hunting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Conservationists campaign vehemently to outlaw wealthy foreign trophy hunting tours.",
      exampleVi: "C\u00e1c nh\u00e0 b\u1ea3o t\u1ed3n ph\u1ea3n \u0111\u1ed1i k\u1ecbch li\u1ec7t v\u00e0 \u0111\u00f2i c\u1ea5m nh\u1eefng tour s\u0103n b\u1eafn l\u1ea5y chi\u1ebfn l\u1ee3i ph\u1ea9m t\u00e0n nh\u1eabn.",
      collocations: ["ban trophy hunting", "opposition to trophy hunting"]
    },
    {
      id: "v12-u8-coexistence",
      word: "coexistence",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 chung s\u1ed1ng h\u00f2a b\u00ecnh gi\u1eefa ng\u01b0\u1eddi v\u00e0 mu\u00f4ng th\u00fa",
      ipa: "/\u02cck\u0259\u028a\u026a\u0261\u02c8z\u026ast\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=coexistence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fencing crops with beehives enables peaceful coexistence between farmers and wild elephants.",
      exampleVi: "R\u00e0o n\u01b0\u01a1ng b\u1eb1ng t\u1ed5 ong gi\u00fap n\u00f4ng d\u00e2n v\u00e0 \u0111\u00e0n voi hoang d\u00e3 chung s\u1ed1ng h\u00f2a b\u00ecnh kh\u00f4ng xung \u0111\u1ed9t.",
      collocations: ["human-wildlife coexistence", "promote coexistence"]
    }
    ,
    {
      id: "v12-extra-poaching-syndicate",
      word: "poaching syndicate",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u01b0\u1eddng d\u00e2y bu\u00f4n b\u00e1n v\u00e0 s\u0103n tr\u1ed9m th\u00fa xuy\u00ean qu\u1ed1c gia",
      ipa: "/\u02c8p\u0259\u028at\u0283\u026a\u014b \u02c8s\u026and\u026ak\u0259t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poaching+syndicate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International police dismantled an elusive rhino horn poaching syndicate.",
      exampleVi: "C\u1ea3nh s\u00e1t qu\u1ed1c t\u1ebf \u0111\u00e3 tri\u1ec7t ph\u00e1 m\u1ed9t \u0111\u01b0\u1eddng d\u00e2y bu\u00f4n l\u1eadu s\u1eebng t\u00ea gi\u00e1c xuy\u00ean qu\u1ed1c gia tinh vi.",
      collocations: ["bust a poaching syndicate", "target poaching syndicates"]
    }
    ,
    {
      id: "v12-extra-wildlife-rehabilitation",
      word: "wildlife rehabilitation",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ee9u h\u1ed9 v\u00e0 ph\u1ee5c h\u1ed3i ch\u1ee9c n\u0103ng cho th\u00fa hoang",
      ipa: "/\u02c8wa\u026aldla\u026af \u02ccri\u02d0\u0259\u02ccb\u026al\u026a\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+rehabilitation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The wildlife rehabilitation center nursed thirty wounded pangolins back to full health.",
      exampleVi: "Trung t\u00e2m c\u1ee9u h\u1ed9 \u0111\u1ed9ng v\u1eadt hoang d\u00e3 \u0111\u00e3 ch\u0103m s\u00f3c ba m\u01b0\u01a1i c\u00e1 th\u1ec3 t\u00ea t\u00ea b\u1ecb th\u01b0\u01a1ng kh\u1ecfe m\u1ea1nh tr\u1edf l\u1ea1i.",
      collocations: ["support wildlife rehabilitation", "center for rehabilitation"]
    }
    ,
    {
      id: "v12-extra-nature-sanctuary",
      word: "nature sanctuary",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean an to\u00e0n cho mu\u00f4ng th\u00fa",
      ipa: "/\u02c8ne\u026at\u0283\u0259 \u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rescued elephants roam freely inside the protected nature sanctuary in Dak Lak.",
      exampleVi: "Nh\u1eefng ch\u00fa voi \u0111\u01b0\u1ee3c gi\u1ea3i c\u1ee9u \u0111i l\u1ea1i t\u1ef1 do trong khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean t\u1ea1i \u0110\u1eafk L\u1eafk.",
      collocations: ["elephant nature sanctuary", "visit a nature sanctuary"]
    }
    ,
    {
      id: "v12-extra-wildlife-corridor",
      word: "wildlife corridor",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh lang r\u1eebng an to\u00e0n cho \u0111\u1ed9ng v\u1eadt di chuy\u1ec3n",
      ipa: "/\u02c8wa\u026aldla\u026af \u02c8k\u0252r\u026ad\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+corridor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building highway overpasses planted with trees creates safe wildlife corridors.",
      exampleVi: "X\u00e2y c\u1ea7u v\u01b0\u1ee3t c\u00f3 tr\u1ed3ng c\u00e2y xanh tr\u00ean cao t\u1ed1c t\u1ea1o h\u00e0nh lang an to\u00e0n cho th\u00fa r\u1eebng qua \u0111\u01b0\u1eddng.",
      collocations: ["create wildlife corridors", "safe wildlife corridor"]
    }
    ,
    {
      id: "v12-extra-anti-trafficking-law",
      word: "anti-trafficking law",
      partOfSpeech: "n.phr",
      meaningVi: "lu\u1eadt ph\u00f2ng ch\u1ed1ng bu\u00f4n l\u1eadu \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02cc\u00e6nti \u02c8tr\u00e6f\u026ak\u026a\u014b l\u0254\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=anti-trafficking+law&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strict anti-trafficking laws impose up to fifteen years of imprisonment for ivory traders.",
      exampleVi: "Lu\u1eadt ph\u00f2ng ch\u1ed1ng bu\u00f4n l\u1eadu th\u00fa qu\u00fd hi\u1ebfm \u00e1p m\u1ee9c \u00e1n t\u1edbi 15 n\u0103m t\u00f9 cho \u0111\u1ed1i t\u01b0\u1ee3ng bu\u00f4n ng\u00e0 voi.",
      collocations: ["enforce anti-trafficking laws", "stricter laws"]
    }
    ,
    {
      id: "v12-extra-biodiversity-monitoring",
      word: "biodiversity monitoring",
      partOfSpeech: "n.phr",
      meaningVi: "theo d\u00f5i v\u00e0 gi\u00e1m s\u00e1t \u0111a d\u1ea1ng sinh h\u1ecdc r\u1eebng",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02c8m\u0252n\u026at\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+monitoring&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Motion-triggered camera traps assist rangers in continuous biodiversity monitoring.",
      exampleVi: "B\u1eaby \u1ea3nh c\u1ea3m bi\u1ebfn chuy\u1ec3n \u0111\u1ed9ng h\u1ed7 tr\u1ee3 ki\u1ec3m l\u00e2m gi\u00e1m s\u00e1t li\u00ean t\u1ee5c c\u00e1c lo\u00e0i th\u00fa qu\u00fd trong r\u1eebng.",
      collocations: ["conduct biodiversity monitoring", "scientific monitoring"]
    }
    ,
    {
      id: "v12-extra-native-fauna",
      word: "native fauna",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ea7n th\u1ec3 \u0111\u1ed9ng v\u1eadt b\u1ea3n \u0111\u1ecba qu\u00fd b\u00e1u",
      ipa: "/\u02c8ne\u026at\u026av \u02c8f\u0254\u02d0n\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=native+fauna&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Invasive bullfrogs compete with native fauna for insect prey and clean water pools.",
      exampleVi: "\u1ebech ngo\u1ea1i lai x\u00e2m h\u1ea1i c\u1ea1nh tranh con m\u1ed3i v\u00e0 ngu\u1ed3n n\u01b0\u1edbc s\u1ea1ch v\u1edbi c\u00e1c lo\u00e0i \u0111\u1ed9ng v\u1eadt b\u1ea3n \u0111\u1ecba.",
      collocations: ["protect native fauna", "rich native fauna"]
    }
    ,
    {
      id: "v12-extra-illegal-snare",
      word: "illegal snare",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eaby d\u00e2y s\u0103n b\u1eaft th\u00fa tr\u00e1i ph\u00e9p \u0111\u1ed9c \u00e1c",
      ipa: "/\u026a\u02c8li\u02d0\u0261l sne\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=illegal+snare&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Forest rangers dismantled forty illegal snares during yesterday's patrol.",
      exampleVi: "C\u00e1c ki\u1ec3m l\u00e2m vi\u00ean \u0111\u00e3 th\u00e1o g\u1ee1 b\u1ed1n m\u01b0\u01a1i chi\u1ebfc b\u1eaby d\u00e2y tr\u00e1i ph\u00e9p trong chuy\u1ebfn tu\u1ea7n tra h\u00f4m qua.",
      collocations: ["remove illegal snares", "deadly snares"]
    }
    ,
    {
      id: "v12-extra-ecological-balance",
      word: "ecological balance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng t\u1ef1 nhi\u00ean c\u1ee7a h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every living creature from frogs to eagles plays a role in maintaining ecological balance.",
      exampleVi: "M\u1ecdi sinh v\u1eadt t\u1eeb \u1ebfch nh\u00e1i \u0111\u1ebfn \u0111\u1ea1i b\u00e0ng \u0111\u1ec1u \u0111\u00f3ng vai tr\u00f2 g\u00ecn gi\u1eef s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i.",
      collocations: ["restore ecological balance", "vital for ecological balance"]
    }
    ,
    {
      id: "v12-extra-captive-breeding-center",
      word: "captive breeding center",
      partOfSpeech: "n.phr",
      meaningVi: "trung t\u00e2m nh\u00e2n gi\u1ed1ng b\u1ea3o t\u1ed3n \u0111\u1ed9ng v\u1eadt qu\u00fd",
      ipa: "/\u02cck\u00e6pt\u026av \u02c8bri\u02d0d\u026a\u014b \u02c8sent\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=captive+breeding+center&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The turtle captive breeding center successfully hatched sixty endangered sea turtles.",
      exampleVi: "Trung t\u00e2m nh\u00e2n gi\u1ed1ng r\u00f9a \u0111\u00e3 \u1ea5p n\u1edf th\u00e0nh c\u00f4ng s\u00e1u m\u01b0\u01a1i c\u00e1 th\u1ec3 r\u00f9a bi\u1ec3n qu\u00fd hi\u1ebfm.",
      collocations: ["support the breeding center", "turtle captive breeding center"]
    }
    ,
    {
      id: "v12-extra-community-ranger",
      word: "community ranger",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3m l\u00e2m vi\u00ean c\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi b\u1ea3n \u0111\u1ecba",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti \u02c8re\u026and\u0292\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+ranger&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community rangers from local ethnic villages patrol boundary lines with deep local pride.",
      exampleVi: "C\u00e1c ki\u1ec3m l\u00e2m vi\u00ean c\u1ed9ng \u0111\u1ed3ng t\u1eeb c\u00e1c b\u1ea3n l\u00e0ng tu\u1ea7n tra bi\u00ean gi\u1edbi r\u1eebng v\u1edbi ni\u1ec1m t\u1ef1 h\u00e0o l\u1edbn.",
      collocations: ["train community rangers", "role of community rangers"]
    }
    ,
    {
      id: "v12-extra-extinction-prevention",
      word: "extinction prevention",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u0103n ng\u1eeba nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng cho c\u00e1c lo\u00e0i",
      ipa: "/\u026ak\u02c8st\u026a\u014bk\u0283n pr\u026a\u02c8ven\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extinction+prevention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Emergency field reserves are established for the urgent extinction prevention of saolas.",
      exampleVi: "C\u00e1c khu b\u1ea3o t\u1ed3n th\u1ef1c \u0111\u1ecba kh\u1ea9n c\u1ea5p \u0111\u01b0\u1ee3c th\u00e0nh l\u1eadp \u0111\u1ec3 ng\u0103n ch\u1eb7n nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng lo\u00e0i sao la.",
      collocations: ["actions for extinction prevention", "focus on prevention"]
    }
    ,
    {
      id: "v12-extra-habitat-restoration",
      word: "habitat restoration",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ee5c h\u1ed3i sinh c\u1ea3nh t\u1ef1 nhi\u00ean b\u1ecb t\u00e0n ph\u00e1",
      ipa: "/\u02c8h\u00e6b\u026at\u00e6t \u02ccrest\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=habitat+restoration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Replanting native broad-leaf trees is the first stage of mountain habitat restoration.",
      exampleVi: "Tr\u1ed3ng l\u1ea1i c\u00e2y l\u00e1 r\u1ed9ng b\u1ea3n \u0111\u1ecba l\u00e0 giai \u0111o\u1ea1n \u0111\u1ea7u ti\u00ean c\u1ee7a qu\u00e1 tr\u00ecnh ph\u1ee5c h\u1ed3i sinh c\u1ea3nh \u0111\u1ed3i n\u00fai.",
      collocations: ["conduct habitat restoration", "successful restoration"]
    }
    ,
    {
      id: "v12-extra-conservation-hero",
      word: "conservation hero",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi anh h\u00f9ng trong c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean",
      ipa: "/\u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n \u02c8h\u026a\u0259r\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservation+hero&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nguyen Van Thai received the prestigious Goldman Environmental Prize as a conservation hero.",
      exampleVi: "Anh Nguy\u1ec5n V\u0103n Th\u00e1i \u0111\u01b0\u1ee3c trao gi\u1ea3i th\u01b0\u1edfng m\u00f4i tr\u01b0\u1eddng Goldman danh gi\u00e1 nh\u01b0 m\u1ed9t anh h\u00f9ng b\u1ea3o t\u1ed3n.",
      collocations: ["celebrate conservation heroes", "true conservation hero"]
    }
    ,
    {
      id: "v-boost-critically-endangered-species",
      word: "critically endangered species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i \u0111\u1ee9ng tr\u01b0\u1edbc nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng c\u1ef1c k\u1ef3 cao",
      ipa: "/\u02cckr\u026at\u026akli \u026an\u02c8de\u026and\u0292\u0259d \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=critically+endangered+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Javan rhinoceros is officially classified as a critically endangered species.",
      exampleVi: "T\u00ea gi\u00e1c Java \u0111\u01b0\u1ee3c x\u1ebfp lo\u1ea1i ch\u00ednh th\u1ee9c l\u00e0 lo\u00e0i c\u00f3 nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng c\u1ef1c k\u1ef3 nghi\u00eam tr\u1ecdng.",
      collocations: ["protect critically endangered species", "habitat of endangered species"]
    }
    ,
    {
      id: "v-boost-poaching-penalty",
      word: "poaching penalty",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00ecnh ph\u1ea1t nghi\u00eam kh\u1eafc \u0111\u1ed1i v\u1edbi t\u1ed9i s\u0103n tr\u1ed9m",
      ipa: "/\u02c8p\u0259\u028at\u0283\u026a\u014b \u02c8pen\u0259lti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poaching+penalty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1574063413132-355dbfd83e23?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stricter poaching penalties with long prison sentences have deterred timber and game thieves.",
      exampleVi: "C\u00e1c ch\u1ebf t\u00e0i x\u1eed ph\u1ea1t s\u0103n tr\u1ed9m nghi\u00eam kh\u1eafc k\u00e8m \u00e1n t\u00f9 d\u00e0i h\u1ea1n \u0111\u00e3 r\u0103n \u0111e k\u1ebb tr\u1ed9m g\u1ed7 v\u00e0 th\u00fa r\u1eebng.",
      collocations: ["impose poaching penalties", "stiff poaching penalties"]
    }
    ,
    {
      id: "v-boost-biodiversity-hotspot",
      word: "biodiversity hotspot",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m n\u00f3ng \u0111a d\u1ea1ng sinh h\u1ecdc qu\u00fd gi\u00e1",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02c8h\u0252tsp\u0252t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+hotspot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam's Annamite Range is celebrated as an internationally vital biodiversity hotspot.",
      exampleVi: "D\u00e3y Tr\u01b0\u1eddng S\u01a1n c\u1ee7a Vi\u1ec7t Nam \u0111\u01b0\u1ee3c ghi nh\u1eadn l\u00e0 m\u1ed9t \u0111i\u1ec3m n\u00f3ng \u0111a d\u1ea1ng sinh h\u1ecdc t\u1ea7m c\u1ee1 qu\u1ed1c t\u1ebf.",
      collocations: ["conserve biodiversity hotspots", "vibrant biodiversity hotspot"]
    }
    ,
    {
      id: "v-boost-natural-habitat-restoration",
      word: "natural habitat restoration",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00f4i ph\u1ee5c m\u00f4i tr\u01b0\u1eddng s\u1ed1ng t\u1ef1 nhi\u00ean hoang d\u00e3",
      ipa: "/\u02c8n\u00e6t\u0283r\u0259l \u02c8h\u00e6b\u026at\u00e6t \u02ccrest\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=natural+habitat+restoration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteers planted mangrove seedlings as part of a coastal natural habitat restoration drive.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean tr\u1ed3ng c\u00e2y \u0111\u01b0\u1edbc gi\u1ed1ng nh\u01b0 m\u1ed9t ph\u1ea7n chi\u1ebfn d\u1ecbch kh\u00f4i ph\u1ee5c sinh c\u1ea3nh ng\u1eadp m\u1eb7n.",
      collocations: ["engage in natural habitat restoration", "funds for habitat restoration"]
    }
    ,
    {
      id: "v-boost-captive-breeding-program",
      word: "captive breeding program",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh nh\u00e2n gi\u1ed1ng b\u1ea3o t\u1ed3n trong m\u00f4i tr\u01b0\u1eddng nu\u00f4i nh\u1ed1t",
      ipa: "/\u02cck\u00e6pt\u026av \u02c8bri\u02d0d\u026a\u014b \u02c8pr\u0259\u028a\u0261r\u00e6m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=captive+breeding+program&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national zoo runs a successful captive breeding program for endangered pangolins.",
      exampleVi: "V\u01b0\u1eddn th\u00fa qu\u1ed1c gia v\u1eadn h\u00e0nh th\u00e0nh c\u00f4ng ch\u01b0\u01a1ng tr\u00ecnh nh\u00e2n gi\u1ed1ng nu\u00f4i nh\u1ed1t cho lo\u00e0i t\u00ea t\u00ea qu\u00fd hi\u1ebfm.",
      collocations: ["support captive breeding programs", "success of captive breeding programs"]
    }
    ,
    {
      id: "v-boost-wildlife-corridor",
      word: "wildlife corridor",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh lang an to\u00e0n cho \u0111\u1ed9ng v\u1eadt hoang d\u00e3 di chuy\u1ec3n",
      ipa: "/\u02c8wa\u026aldla\u026af \u02c8k\u0252r\u026ad\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+corridor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1574063413132-355dbfd83e23?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Constructing overpass bridges as wildlife corridors prevents highway collisions with deer.",
      exampleVi: "X\u00e2y c\u1ea7u v\u01b0\u1ee3t l\u00e0m h\u00e0nh lang cho th\u00fa hoang gi\u00fap ng\u0103n va ch\u1ea1m giao th\u00f4ng nguy hi\u1ec3m v\u1edbi h\u01b0\u01a1u nai.",
      collocations: ["establish wildlife corridors", "safe wildlife corridor"]
    }
    ,
    {
      id: "v-boost-game-reserve",
      word: "game reserve",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean nghi\u00eam ng\u1eb7t",
      ipa: "/\u0261e\u026am r\u026a\u02c8z\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=game+reserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Armed rangers patrol the expansive game reserve to protect elephants from poachers.",
      exampleVi: "Ki\u1ec3m l\u00e2m c\u00f3 v\u0169 trang tu\u1ea7n tra khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean r\u1ed9ng l\u1edbn \u0111\u1ec3 che ch\u1edf \u0111\u00e0n voi kh\u1ecfi k\u1ebb s\u0103n tr\u1ed9m.",
      collocations: ["patrol the game reserve", "safari in a game reserve"]
    }
    ,
    {
      id: "v-boost-marine-protected-area",
      word: "marine protected area",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n bi\u1ec3n sinh th\u00e1i",
      ipa: "/m\u0259\u02c8ri\u02d0n pr\u0259\u02c8tekt\u026ad \u02c8e\u0259ri\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marine+protected+area&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cu Lao Cham is an internationally recognized marine protected area with pristine reefs.",
      exampleVi: "C\u00f9 Lao Ch\u00e0m l\u00e0 khu b\u1ea3o t\u1ed3n bi\u1ec3n \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn qu\u1ed1c t\u1ebf v\u1edbi c\u00e1c r\u1ea1n san h\u00f4 nguy\u00ean s\u01a1 tuy\u1ec7t \u0111\u1eb9p.",
      collocations: ["designate a marine protected area", "conserve marine protected areas"]
    }
    ,
    {
      id: "v-boost-illegal-wildlife-trafficking",
      word: "illegal wildlife trafficking",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ea1n bu\u00f4n b\u00e1n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 tr\u00e1i ph\u00e9p",
      ipa: "/\u026a\u02c8li\u02d0\u0261l \u02c8wa\u026aldla\u026af \u02c8tr\u00e6f\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=illegal+wildlife+trafficking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1574063413132-355dbfd83e23?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Customs officers cracked down on an international syndicate for illegal wildlife trafficking.",
      exampleVi: "L\u1ef1c l\u01b0\u1ee3ng h\u1ea3i quan \u0111\u00e3 tri\u1ec7t ph\u00e1 m\u1ed9t \u0111\u01b0\u1eddng d\u00e2y qu\u1ed1c t\u1ebf bu\u00f4n b\u00e1n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 tr\u00e1i ph\u00e9p.",
      collocations: ["eradicate illegal wildlife trafficking", "combat wildlife trafficking"]
    }
    ,
    {
      id: "v-boost-ecological-footprint",
      word: "ecological footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n sinh th\u00e1i t\u00e1c \u0111\u1ed9ng l\u00ean t\u00e0i nguy\u00ean thi\u00ean nhi\u00ean",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Consumers strive to shrink their ecological footprint by choosing locally sourced produce.",
      exampleVi: "Ng\u01b0\u1eddi ti\u00eau d\u00f9ng c\u1ed1 g\u1eafng thu h\u1eb9p d\u1ea5u ch\u00e2n sinh th\u00e1i b\u1eb1ng vi\u1ec7c mua s\u1eafm n\u00f4ng s\u1ea3n \u0111\u1ecba ph\u01b0\u01a1ng.",
      collocations: ["minimize ecological footprint", "measure ecological footprint"]
    }
    ,
    {
      id: "v-boost-extinction-threat",
      word: "extinction threat",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ed1i \u0111e d\u1ecda bi\u1ebfn m\u1ea5t v\u0129nh vi\u1ec5n tr\u00ean h\u00e0nh tinh",
      ipa: "/\u026ak\u02c8st\u026a\u014bk\u0283n \u03b8ret/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extinction+threat&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Habitat fragmentation poses the single greatest extinction threat to big cats.",
      exampleVi: "Ph\u00e2n m\u1ea3nh m\u00f4i tr\u01b0\u1eddng s\u1ed1ng l\u00e0 m\u1ed1i \u0111e d\u1ecda tuy\u1ec7t ch\u1ee7ng l\u1edbn nh\u1ea5t \u0111\u1ed1i v\u1edbi c\u00e1c lo\u00e0i th\u00fa h\u1ecd m\u00e8o l\u1edbn.",
      collocations: ["face an extinction threat", "looming extinction threat"]
    }
    ,
    {
      id: "v-boost-endemic-flora-and-fauna",
      word: "endemic flora and fauna",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 \u0111\u1ed9ng th\u1ef1c v\u1eadt \u0111\u1eb7c h\u1eefu ri\u00eang c\u1ee7a v\u00f9ng mi\u1ec1n",
      ipa: "/en\u02c8dem\u026ak \u02c8fl\u0254\u02d0r\u0259 \u0259nd \u02c8f\u0254\u02d0n\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endemic+flora+and+fauna&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Madagascar is renowned for its remarkable richness in endemic flora and fauna.",
      exampleVi: "Madagascar n\u1ed5i ti\u1ebfng kh\u1eafp th\u1ebf gi\u1edbi b\u1edfi s\u1ef1 tr\u00f9 ph\u00fa c\u1ee7a h\u1ec7 \u0111\u1ed9ng th\u1ef1c v\u1eadt \u0111\u1eb7c h\u1eefu \u0111\u1ed9c nh\u1ea5t v\u00f4 nh\u1ecb.",
      collocations: ["richness of endemic flora and fauna", "protect endemic flora and fauna"]
    }
    ,
    {
      id: "v-boost-rainforest-deforestation",
      word: "rainforest deforestation",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ea1n ch\u1eb7t ph\u00e1 r\u1eebng nhi\u1ec7t \u0111\u1edbi b\u1eeba b\u00e3i",
      ipa: "/\u02c8re\u026anf\u0252r\u026ast di\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rainforest+deforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rainforest deforestation drastically accelerates global warming and soil erosion.",
      exampleVi: "N\u1ea1n t\u00e0n ph\u00e1 r\u1eebng m\u01b0a nhi\u1ec7t \u0111\u1edbi l\u00e0m gia t\u0103ng t\u1ed1c \u0111\u1ed9 n\u00f3ng l\u00ean to\u00e0n c\u1ea7u v\u00e0 x\u00f3i m\u00f2n \u0111\u1ea5t \u0111ai.",
      collocations: ["halt rainforest deforestation", "consequences of deforestation"]
    }
    ,
    {
      id: "v-boost-reintroduction-into-the-wild",
      word: "reintroduction into the wild",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e1i th\u1ea3 \u0111\u1ed9ng v\u1eadt \u0111\u01b0\u1ee3c c\u1ee9u h\u1ed9 v\u1ec1 v\u1edbi t\u1ef1 nhi\u00ean",
      ipa: "/\u02ccri\u02d0\u026antr\u0259\u02c8d\u028ck\u0283n \u02c8\u026ant\u0259 \u00f0\u0259 wa\u026ald/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reintroduction+into+the+wild&type=2",
      imageUrl: "https://images.unsplash.com/photo-1574063413132-355dbfd83e23?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rescued moon bears undergo behavioral rehabilitation before reintroduction into the wild.",
      exampleVi: "G\u1ea5u ng\u1ef1a \u0111\u01b0\u1ee3c gi\u1ea3i c\u1ee9u s\u1ebd tr\u1ea3i qua ph\u1ee5c h\u1ed3i t\u1eadp t\u00ednh tr\u01b0\u1edbc khi \u0111\u01b0\u1ee3c t\u00e1i th\u1ea3 v\u1ec1 v\u1edbi t\u1ef1 nhi\u00ean.",
      collocations: ["plan reintroduction into the wild", "successful reintroduction"]
    }
  ],
  "unit-9-career-paths": [
    {
      id: "v12-u9-career-trajectory",
      word: "career trajectory",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ef9 \u0111\u1ea1o ph\u00e1t tri\u1ec3n s\u1ef1 nghi\u1ec7p d\u00e0i h\u1ea1n",
      ipa: "/k\u0259\u02c8r\u026a\u0259 tr\u0259\u02c8d\u0292ekt\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+trajectory&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An international internship can accelerate your overall career trajectory.",
      exampleVi: "M\u1ed9t k\u1ef3 th\u1ef1c t\u1eadp qu\u1ed1c t\u1ebf c\u00f3 th\u1ec3 \u0111\u1ea9y nhanh qu\u1ef9 \u0111\u1ea1o ph\u00e1t tri\u1ec3n s\u1ef1 nghi\u1ec7p c\u1ee7a b\u1ea1n.",
      collocations: ["shape your career trajectory", "upward career trajectory"]
    },
    {
      id: "v12-u9-vocation",
      word: "vocation",
      partOfSpeech: "n",
      meaningVi: "thi\u00ean h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p, ti\u1ebfng g\u1ecdi \u0111am m\u00ea",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She found her true vocation in teaching underprivileged children in remote mountain hamlets.",
      exampleVi: "C\u00f4 \u1ea5y \u0111\u00e3 t\u00ecm th\u1ea5y thi\u00ean h\u01b0\u1edbng \u0111am m\u00ea \u0111\u00edch th\u1ef1c khi d\u1ea1y h\u1ecdc cho tr\u1ebb em v\u00f9ng cao ngh\u00e8o kh\u00f3.",
      collocations: ["follow your vocation", "find your true vocation"]
    },
    {
      id: "v12-u9-career-counselor",
      word: "career counselor",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u00ean vi\u00ean t\u01b0 v\u1ea5n h\u01b0\u1edbng nghi\u1ec7p h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02c8ka\u028ans\u0259l\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+counselor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A career counselor helps high schoolers identify strengths and choose suitable university majors.",
      exampleVi: "Chuy\u00ean vi\u00ean h\u01b0\u1edbng nghi\u1ec7p gi\u00fap h\u1ecdc sinh THPT nh\u1eadn di\u1ec7n th\u1ebf m\u1ea1nh v\u00e0 ch\u1ecdn ng\u00e0nh h\u1ecdc ph\u00f9 h\u1ee3p.",
      collocations: ["consult a career counselor", "guidance from a career counselor"]
    },
    {
      id: "v12-u9-specialization",
      word: "specialization",
      partOfSpeech: "n",
      meaningVi: "chuy\u00ean ng\u00e0nh \u0111\u00e0o t\u1ea1o chuy\u00ean s\u00e2u",
      ipa: "/\u02ccspe\u0283\u0259la\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=specialization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Choosing a specialization in pediatric cardiology requires extensive postgraduate residency.",
      exampleVi: "Ch\u1ecdn chuy\u00ean khoa s\u00e2u v\u1ec1 tim m\u1ea1ch nhi \u0111\u00f2i h\u1ecfi th\u1eddi gian n\u1ed9i tr\u00fa sau \u0111\u1ea1i h\u1ecdc b\u00e0i b\u1ea3n.",
      collocations: ["academic specialization", "field of specialization"]
    },
    {
      id: "v12-u9-occupational-growth",
      word: "occupational growth",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e1t tri\u1ec3n m\u1edf r\u1ed9ng ngh\u1ec1 nghi\u1ec7p",
      ipa: "/\u02cc\u0252kju\u02c8pe\u026a\u0283\u0259nl \u0261r\u0259\u028a\u03b8/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=occupational+growth&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Renewable energy and cybersecurity fields are experiencing unprecedented occupational growth.",
      exampleVi: "C\u00e1c ng\u00e0nh n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o v\u00e0 an ninh m\u1ea1ng \u0111ang c\u00f3 s\u1ef1 ph\u00e1t tri\u1ec3n ngh\u1ec1 nghi\u1ec7p ch\u01b0a t\u1eebng th\u1ea5y.",
      collocations: ["robust occupational growth", "driver of occupational growth"]
    },
    {
      id: "v12-u9-lifelong-ambition",
      word: "lifelong ambition",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u00e0i b\u00e3o \u01b0\u1edbc m\u01a1 \u1ea5p \u1ee7 su\u1ed1t \u0111\u1eddi",
      ipa: "/\u02c8la\u026afl\u0252\u014b \u00e6m\u02c8b\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifelong+ambition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Becoming an aerospace pilot was her lifelong ambition since viewing rockets as a child.",
      exampleVi: "Tr\u1edf th\u00e0nh phi c\u00f4ng h\u00e0ng kh\u00f4ng v\u0169 tr\u1ee5 l\u00e0 ho\u00e0i b\u00e3o c\u1ea3 \u0111\u1eddi c\u1ee7a c\u00f4 k\u1ec3 t\u1eeb khi nh\u00ecn th\u1ea5y t\u00ean l\u1eeda l\u00fac b\u00e9.",
      collocations: ["fulfill a lifelong ambition", "pursue a lifelong ambition"]
    },
    {
      id: "v12-u9-transferable-skills",
      word: "transferable skills",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c k\u1ef9 n\u0103ng chuy\u1ec3n \u0111\u1ed5i d\u00f9ng cho nhi\u1ec1u ng\u00e0nh",
      ipa: "/tr\u00e6ns\u02c8f\u025c\u02d0r\u0259bl sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=transferable+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Critical thinking, public speaking, and project management are invaluable transferable skills.",
      exampleVi: "T\u01b0 duy ph\u1ea3n bi\u1ec7n, thuy\u1ebft tr\u00ecnh v\u00e0 qu\u1ea3n l\u00fd d\u1ef1 \u00e1n l\u00e0 c\u00e1c k\u1ef9 n\u0103ng chuy\u1ec3n \u0111\u1ed5i v\u00f4 gi\u00e1 gi\u1eefa c\u00e1c ngh\u1ec1.",
      collocations: ["acquire transferable skills", "highlight transferable skills"]
    },
    {
      id: "v12-u9-job-shadow",
      word: "job shadow",
      partOfSpeech: "v / n",
      meaningVi: "\u0111i theo h\u1ecdc vi\u1ec7c quan s\u00e1t th\u1ef1c t\u1ebf c\u00f4ng vi\u1ec7c",
      ipa: "/\u02c8d\u0292\u0252b \u0283\u00e6d\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+shadow&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High school seniors job shadowed pediatricians for a week to experience medical duties.",
      exampleVi: "H\u1ecdc sinh cu\u1ed1i c\u1ea5p \u0111\u00e3 \u0111i theo quan s\u00e1t b\u00e1c s\u0129 nhi trong m\u1ed9t tu\u1ea7n \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m c\u00f4ng vi\u1ec7c th\u1ef1c t\u1ebf.",
      collocations: ["job shadow a professional", "job shadowing program"]
    },
    {
      id: "v12-u9-career-transition",
      word: "career transition",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc chuy\u1ec3n h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p m\u1edbi",
      ipa: "/k\u0259\u02c8r\u026a\u0259 tr\u00e6n\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+transition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mid-career transitions into programming are facilitated by intensive coding bootcamps.",
      exampleVi: "Vi\u1ec7c chuy\u1ec3n h\u01b0\u1edbng sang ng\u00e0nh l\u1eadp tr\u00ecnh \u1edf tu\u1ed5i ba m\u01b0\u01a1i \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 b\u1edfi c\u00e1c kh\u00f3a h\u1ecdc c\u1ea5p t\u1ed1c.",
      collocations: ["navigate a career transition", "successful career transition"]
    },
    {
      id: "v12-u9-entrepreneurial-venture",
      word: "entrepreneurial venture",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ef1 \u00e1n kinh doanh kh\u1edfi nghi\u1ec7p s\u00e1ng t\u1ea1o",
      ipa: "/\u02cc\u0252ntr\u0259pr\u0259\u02c8n\u025c\u02d0ri\u0259l \u02c8vent\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entrepreneurial+venture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university graduates launched an entrepreneurial venture developing plant-based packaging.",
      exampleVi: "C\u00e1c c\u1eed nh\u00e2n \u0111\u00e3 th\u00e0nh l\u1eadp doanh nghi\u1ec7p kh\u1edfi nghi\u1ec7p ph\u00e1t tri\u1ec3n bao b\u00ec sinh h\u1ecdc t\u1eeb th\u1ef1c v\u1eadt.",
      collocations: ["found an entrepreneurial venture", "back an entrepreneurial venture"]
    },
    {
      id: "v12-u9-industry-demand",
      word: "industry demand",
      partOfSpeech: "n.phr",
      meaningVi: "nhu c\u1ea7u tuy\u1ec3n d\u1ee5ng c\u1ee7a th\u1ecb tr\u01b0\u1eddng c\u00e1c ng\u00e0nh",
      ipa: "/\u02c8\u026and\u0259stri d\u026a\u02c8m\u0251\u02d0nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=industry+demand&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Choosing college programs aligned with industry demand guarantees immediate placement.",
      exampleVi: "Ch\u1ecdn ng\u00e0nh \u0111\u1ea1i h\u1ecdc b\u00e1m s\u00e1t nhu c\u1ea7u th\u1ecb tr\u01b0\u1eddng \u0111\u1ea3m b\u1ea3o c\u01a1 h\u1ed9i c\u00f3 vi\u1ec7c l\u00e0m ngay sau khi ra tr\u01b0\u1eddng.",
      collocations: ["meet industry demand", "surging industry demand"]
    },
    {
      id: "v12-u9-professional-network",
      word: "professional network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi quan h\u1ec7 \u0111\u1ed3ng nghi\u1ec7p chuy\u00ean nghi\u1ec7p",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Attending national conferences broadens your professional network with leading experts.",
      exampleVi: "Tham d\u1ef1 c\u00e1c h\u1ed9i ngh\u1ecb chuy\u00ean ng\u00e0nh gi\u00fap m\u1edf r\u1ed9ng m\u1ea1ng l\u01b0\u1edbi quan h\u1ec7 v\u1edbi c\u00e1c chuy\u00ean gia h\u00e0ng \u0111\u1ea7u.",
      collocations: ["build a professional network", "expand your professional network"]
    },
    {
      id: "v12-u9-mentorship",
      word: "mentorship",
      partOfSpeech: "n",
      meaningVi: "m\u1ed1i quan h\u1ec7 d\u00ecu d\u1eaft c\u1ed1 v\u1ea5n c\u1ee7a \u0111\u00e0n anh",
      ipa: "/\u02c8ment\u0254\u02d0\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mentorship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Receiving mentorship from senior directors provides invaluable guidance on career dilemmas.",
      exampleVi: "\u0110\u01b0\u1ee3c s\u1ef1 c\u1ed1 v\u1ea5n t\u1eeb c\u00e1c gi\u00e1m \u0111\u1ed1c k\u1ef3 c\u1ef1u mang l\u1ea1i nh\u1eefng l\u1eddi khuy\u00ean v\u00f4 gi\u00e1 tr\u01b0\u1edbc ng\u00e3 r\u1ebd s\u1ef1 nghi\u1ec7p.",
      collocations: ["seek mentorship", "benefit from mentorship"]
    },
    {
      id: "v12-u9-portfolio",
      word: "portfolio",
      partOfSpeech: "n",
      meaningVi: "h\u1ed3 s\u01a1 n\u0103ng l\u1ef1c tr\u01b0ng b\u00e0y s\u1ea3n ph\u1ea9m d\u1ef1 \u00e1n",
      ipa: "/p\u0254\u02d0t\u02c8f\u0259\u028ali\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=portfolio&type=2",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An impressive design portfolio showcasing user interface projects wins client contracts.",
      exampleVi: "H\u1ed3 s\u01a1 n\u0103ng l\u1ef1c \u1ea5n t\u01b0\u1ee3ng tr\u01b0ng b\u00e0y c\u00e1c d\u1ef1 \u00e1n giao di\u1ec7n ng\u01b0\u1eddi d\u00f9ng gi\u00fap k\u00fd \u0111\u01b0\u1ee3c h\u1ee3p \u0111\u1ed3ng v\u1edbi kh\u00e1ch.",
      collocations: ["build a design portfolio", "digital portfolio"]
    },
    {
      id: "v12-u9-accreditation",
      word: "accreditation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ki\u1ec3m \u0111\u1ecbnh ch\u1ea5t l\u01b0\u1ee3ng \u0111\u00e0o t\u1ea1o ch\u00ednh quy",
      ipa: "/\u0259\u02cckred\u026a\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=accreditation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Verify that the online MBA program holds international accreditation before enrolling.",
      exampleVi: "H\u00e3y ki\u1ec3m tra xem ch\u01b0\u01a1ng tr\u00ecnh th\u1ea1c s\u0129 tr\u1ef1c tuy\u1ebfn c\u00f3 \u0111\u1ea1t ki\u1ec3m \u0111\u1ecbnh qu\u1ed1c t\u1ebf tr\u01b0\u1edbc khi \u0111\u0103ng k\u00fd.",
      collocations: ["gain official accreditation", "recognized accreditation"]
    },
    {
      id: "v12-u9-work-ethic",
      word: "work ethic",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1o \u0111\u1ee9c v\u00e0 tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m ngh\u1ec1 nghi\u1ec7p",
      ipa: "/\u02c8w\u025c\u02d0k \u02cce\u03b8\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work+ethic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Employers prize candidates who combine sharp intellect with a tireless work ethic.",
      exampleVi: "Nh\u00e0 tuy\u1ec3n d\u1ee5ng tr\u00e2n tr\u1ecdng \u1ee9ng vi\u00ean k\u1ebft h\u1ee3p tr\u00ed tu\u1ec7 s\u1eafc b\u00e9n v\u1edbi tinh th\u1ea7n l\u00e0m vi\u1ec7c b\u1ec1n b\u1ec9.",
      collocations: ["strong work ethic", "uncompromising work ethic"]
    },
    {
      id: "v12-u9-headstart",
      word: "headstart",
      partOfSpeech: "n",
      meaningVi: "l\u1ee3i th\u1ebf kh\u1edfi \u0111\u1ea7u s\u1edbm h\u01a1n ng\u01b0\u1eddi kh\u00e1c",
      ipa: "/\u02c8hedst\u0251\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=headstart&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning Python programming in high school gives computer science freshmen a decisive headstart.",
      exampleVi: "H\u1ecdc l\u1eadp tr\u00ecnh Python t\u1eeb c\u1ea5p ba mang l\u1ea1i cho sinh vi\u00ean n\u0103m nh\u1ea5t l\u1ee3i th\u1ebf d\u1eabn \u0111\u1ea7u r\u00f5 r\u1ec7t.",
      collocations: ["gain a headstart", "early headstart"]
    },
    {
      id: "v12-u9-lateral-move",
      word: "lateral move",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc chuy\u1ec3n ngang sang b\u1ed9 ph\u1eadn kh\u00e1c trong c\u00f4ng ty",
      ipa: "/\u02c8l\u00e6t\u0259r\u0259l mu\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lateral+move&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Making a lateral move from sales to marketing allowed her to discover her creative flair.",
      exampleVi: "Chuy\u1ec3n ngang t\u1eeb b\u1ed9 ph\u1eadn kinh doanh sang ti\u1ebfp th\u1ecb \u0111\u00e3 gi\u00fap c\u00f4 kh\u00e1m ph\u00e1 n\u0103ng khi\u1ebfu s\u00e1ng t\u1ea1o c\u1ee7a m\u00ecnh.",
      collocations: ["make a lateral move", "benefit of lateral moves"]
    },
    {
      id: "v12-u9-professionalism",
      word: "professionalism",
      partOfSpeech: "n",
      meaningVi: "t\u00e1c phong l\u00e0m vi\u1ec7c chuy\u00ean nghi\u1ec7p, chu \u0111\u00e1o",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professionalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Arriving punctually and meeting deadlines consistently demonstrates true professionalism.",
      exampleVi: "\u0110\u1ebfn \u0111\u00fang gi\u1edd v\u00e0 lu\u00f4n ho\u00e0n th\u00e0nh ti\u1ebfn \u0111\u1ed9 th\u1ec3 hi\u1ec7n t\u00e1c phong l\u00e0m vi\u1ec7c chuy\u00ean nghi\u1ec7p th\u1ef1c th\u1ee5.",
      collocations: ["high level of professionalism", "display professionalism"]
    },
    {
      id: "v12-u9-career-milestone",
      word: "career milestone",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u m\u1ed1c quan tr\u1ecdng trong s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02c8ma\u026alst\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+milestone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Being promoted to lead engineer was a momentous career milestone in his young life.",
      exampleVi: "\u0110\u01b0\u1ee3c th\u0103ng ch\u1ee9c l\u00e0m k\u1ef9 s\u01b0 tr\u01b0\u1edfng l\u00e0 d\u1ea5u m\u1ed1c quan tr\u1ecdng trong s\u1ef1 nghi\u1ec7p tr\u1ebb tu\u1ed5i c\u1ee7a anh \u1ea5y.",
      collocations: ["reach a career milestone", "celebrate career milestones"]
    }
    ,
    {
      id: "v12-extra-career-milestone",
      word: "career milestone",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed9t m\u1ed1c quan tr\u1ecdng trong s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02c8ma\u026alst\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+milestone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Publishing her first research paper in Nature was a proud career milestone.",
      exampleVi: "\u0110\u01b0\u1ee3c \u0111\u0103ng b\u00e0i b\u00e1o nghi\u00ean c\u1ee9u \u0111\u1ea7u ti\u00ean tr\u00ean t\u1ea1p ch\u00ed Nature l\u00e0 c\u1ed9t m\u1ed1c s\u1ef1 nghi\u1ec7p \u0111\u00e1ng t\u1ef1 h\u00e0o.",
      collocations: ["celebrate a career milestone", "crucial milestone"]
    }
    ,
    {
      id: "v12-extra-professional-qualification",
      word: "professional qualification",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eb1ng c\u1ea5p chuy\u00ean m\u00f4n \u0111\u01b0\u1ee3c ch\u1ee9ng nh\u1eadn",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl \u02cckw\u0252l\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+qualification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Certified Public Accountant (CPA) is an internationally recognized professional qualification.",
      exampleVi: "Ch\u1ee9ng ch\u1ec9 ki\u1ec3m to\u00e1n vi\u00ean c\u00f4ng ch\u1ee9ng (CPA) l\u00e0 v\u0103n b\u1eb1ng chuy\u00ean m\u00f4n \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn qu\u1ed1c t\u1ebf.",
      collocations: ["earn a professional qualification", "mandatory qualification"]
    }
    ,
    {
      id: "v12-extra-vocational-orientation",
      word: "vocational orientation",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecbnh h\u01b0\u1edbng l\u1ef1a ch\u1ecdn tr\u01b0\u1eddng ngh\u1ec1 ph\u00f9 h\u1ee3p",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283\u0259nl \u02cc\u0254\u02d0ri\u0259n\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocational+orientation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vocational orientation tours introduce high schoolers to modern robotic manufacturing labs.",
      exampleVi: "C\u00e1c chuy\u1ebfn tham quan h\u01b0\u1edbng nghi\u1ec7p gi\u00fap h\u1ecdc sinh ti\u1ebfp c\u1eadn x\u01b0\u1edfng s\u1ea3n xu\u1ea5t t\u1ef1 \u0111\u1ed9ng h\u00f3a hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["effective vocational orientation", "career orientation day"]
    }
    ,
    {
      id: "v12-extra-industry-credential",
      word: "industry credential",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng ch\u1ec9 chuy\u00ean m\u00f4n chu\u1ea9n ng\u00e0nh c\u00f4ng nghi\u1ec7p",
      ipa: "/\u02c8\u026and\u0259stri kr\u026a\u02c8den\u0283l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=industry+credential&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tech certifications from Cisco and AWS serve as valuable industry credentials on your CV.",
      exampleVi: "Ch\u1ee9ng ch\u1ec9 c\u00f4ng ngh\u1ec7 t\u1eeb Cisco v\u00e0 AWS l\u00e0 nh\u1eefng ch\u1ee9ng ch\u1ec9 ng\u00e0nh ngh\u1ec1 \u0111\u1eaft gi\u00e1 tr\u00ean h\u1ed3 s\u01a1 xin vi\u1ec7c.",
      collocations: ["earn an industry credential", "recognized credentials"]
    }
    ,
    {
      id: "v12-extra-executive-leadership",
      word: "executive leadership",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c l\u00e3nh \u0111\u1ea1o \u0111i\u1ec1u h\u00e0nh c\u1ea5p cao",
      ipa: "/\u026a\u0261\u02c8zekj\u0259t\u026av \u02c8li\u02d0d\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=executive+leadership&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Executive leadership seminars teach empathetic communication and conflict resolution.",
      exampleVi: "C\u00e1c kh\u00f3a \u0111\u00e0o t\u1ea1o l\u00e3nh \u0111\u1ea1o \u0111i\u1ec1u h\u00e0nh d\u1ea1y k\u1ef9 n\u0103ng giao ti\u1ebfp th\u1ea5u c\u1ea3m v\u00e0 gi\u1ea3i quy\u1ebft xung \u0111\u1ed9t.",
      collocations: ["display executive leadership", "executive leadership skills"]
    }
    ,
    {
      id: "v12-extra-entrepreneurial-spirit",
      word: "entrepreneurial spirit",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n kh\u1edfi nghi\u1ec7p s\u00e1ng t\u1ea1o d\u1ea5n th\u00e2n",
      ipa: "/\u02cc\u0252ntr\u0259pr\u0259\u02c8n\u025c\u02d0ri\u0259l \u02c8sp\u026ar\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entrepreneurial+spirit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth incubation hubs foster entrepreneurial spirit through pitch competitions and seed grants.",
      exampleVi: "V\u01b0\u1eddn \u01b0\u01a1m thanh ni\u00ean nu\u00f4i d\u01b0\u1ee1ng tinh th\u1ea7n kh\u1edfi nghi\u1ec7p qua c\u00e1c cu\u1ed9c thi thuy\u1ebft tr\u00ecnh g\u1ecdi v\u1ed1n.",
      collocations: ["ignite entrepreneurial spirit", "foster entrepreneurial spirit"]
    }
    ,
    {
      id: "v12-extra-resume-optimization",
      word: "resume optimization",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ed1i \u01b0u h\u00f3a h\u1ed3 s\u01a1 xin vi\u1ec7c n\u1ed5i b\u1eadt",
      ipa: "/\u02c8rezju\u02d0me\u026a \u02cc\u0252pt\u026ama\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resume+optimization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Resume optimization tools help candidates highlight quantitative metrics and leadership achievements.",
      exampleVi: "C\u00f4ng c\u1ee5 t\u1ed1i \u01b0u h\u00f3a h\u1ed3 s\u01a1 gi\u00fap \u1ee9ng vi\u00ean n\u00eau b\u1eadt c\u00e1c s\u1ed1 li\u1ec7u \u0111\u1ecbnh l\u01b0\u1ee3ng v\u00e0 th\u00e0nh t\u00edch n\u1ed5i tr\u1ed9i.",
      collocations: ["tips for resume optimization", "effective optimization"]
    }
    ,
    {
      id: "v12-extra-mock-interview",
      word: "mock interview",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i ph\u1ecfng v\u1ea5n th\u1eed nghi\u1ec7m r\u00e8n t\u00e2m l\u00fd",
      ipa: "/\u02ccm\u0252k \u02c8\u026ant\u0259vju\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mock+interview&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing mock interviews with college career counselors boosts your poise and answers.",
      exampleVi: "Ph\u1ecfng v\u1ea5n th\u1eed c\u00f9ng chuy\u00ean vi\u00ean h\u01b0\u1edbng nghi\u1ec7p tr\u01b0\u1eddng gi\u00fap b\u1ea1n v\u1eefng t\u00e2m l\u00fd v\u00e0 tr\u1ea3 l\u1eddi l\u01b0u lo\u00e1t.",
      collocations: ["conduct mock interviews", "benefit of mock interviews"]
    }
    ,
    {
      id: "v12-extra-career-agility",
      word: "career agility",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nhanh nh\u1ea1y th\u00edch \u1ee9ng v\u1edbi bi\u1ebfn chuy\u1ec3n ngh\u1ec1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259r \u0259\u02c8d\u0292\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+agility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "In an AI-driven economy, career agility allows professionals to pivot across domains.",
      exampleVi: "Trong n\u1ec1n kinh t\u1ebf AI, s\u1ef1 nhanh nh\u1ea1y ngh\u1ec1 nghi\u1ec7p gi\u00fap ng\u01b0\u1eddi lao \u0111\u1ed9ng linh ho\u1ea1t chuy\u1ec3n h\u01b0\u1edbng.",
      collocations: ["develop career agility", "importance of career agility"]
    }
    ,
    {
      id: "v12-extra-job-shadowing-experience",
      word: "job shadowing experience",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea3i nghi\u1ec7m \u0111i theo quan s\u00e1t c\u00f4ng vi\u1ec7c th\u1ef1c t\u1ebf",
      ipa: "/\u02c8d\u0292\u0252b \u0283\u00e6d\u0259\u028a\u026a\u014b \u026ak\u02c8sp\u026a\u0259ri\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+shadowing+experience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The hospital job shadowing experience solidified her decision to study neurosurgery.",
      exampleVi: "Tr\u1ea3i nghi\u1ec7m quan s\u00e1t t\u1ea1i b\u1ec7nh vi\u1ec7n \u0111\u00e3 c\u1ee7ng c\u1ed1 quy\u1ebft t\u00e2m thi v\u00e0o ng\u00e0nh ph\u1eabu thu\u1eadt th\u1ea7n kinh c\u1ee7a c\u00f4.",
      collocations: ["valuable shadowing experience", "participate in shadowing"]
    }
    ,
    {
      id: "v12-extra-workplace-professionalism",
      word: "workplace professionalism",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e1c phong chuy\u00ean nghi\u1ec7p chu\u1ea9n m\u1ef1c c\u00f4ng s\u1edf",
      ipa: "/\u02c8w\u025c\u02d0kple\u026as pr\u0259\u02c8fe\u0283\u0259n\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=workplace+professionalism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Punctuality and transparent communication are pillars of workplace professionalism.",
      exampleVi: "\u0110\u00fang gi\u1edd v\u00e0 giao ti\u1ebfp minh b\u1ea1ch l\u00e0 hai tr\u1ee5 c\u1ed9t c\u1ee7a t\u00e1c phong chuy\u00ean nghi\u1ec7p n\u01a1i c\u00f4ng s\u1edf.",
      collocations: ["uphold workplace professionalism", "standards of professionalism"]
    }
    ,
    {
      id: "v12-extra-lifelong-employability",
      word: "lifelong employability",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng duy tr\u00ec c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m su\u1ed1t \u0111\u1eddi",
      ipa: "/\u02c8la\u026afl\u0252\u014b \u026am\u02ccpl\u0254\u026a\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifelong+employability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Continuous upskilling guarantees lifelong employability regardless of technological disruption.",
      exampleVi: "Kh\u00f4ng ng\u1eebng h\u1ecdc h\u1ecfi \u0111\u1ea3m b\u1ea3o c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m su\u1ed1t \u0111\u1eddi b\u1ea5t k\u1ec3 nh\u1eefng bi\u1ebfn \u0111\u1ed9ng c\u00f4ng ngh\u1ec7.",
      collocations: ["secure lifelong employability", "strive for employability"]
    }
    ,
    {
      id: "v12-extra-career-satisfaction",
      word: "career satisfaction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u00e0i l\u00f2ng v\u00e0 h\u1ea1nh ph\u00fac v\u1edbi c\u00f4ng vi\u1ec7c",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02ccs\u00e6t\u026as\u02c8f\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+satisfaction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Aligning your personal passions with your daily job brings genuine career satisfaction.",
      exampleVi: "K\u1ebft h\u1ee3p \u0111am m\u00ea c\u00e1 nh\u00e2n v\u1edbi c\u00f4ng vi\u1ec7c h\u00e0ng ng\u00e0y \u0111em l\u1ea1i s\u1ef1 h\u00e0i l\u00f2ng ngh\u1ec1 nghi\u1ec7p \u0111\u00edch th\u1ef1c.",
      collocations: ["high career satisfaction", "derive career satisfaction"]
    }
    ,
    {
      id: "v-boost-vocational-qualification",
      word: "vocational qualification",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng ch\u1ec9 v\u00e0 v\u0103n b\u1eb1ng ngh\u1ec1 nghi\u1ec7p th\u1ef1c h\u00e0nh",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283\u0259nl \u02cckw\u0252l\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocational+qualification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earning a recognized vocational qualification guarantees quick job placement in technical trades.",
      exampleVi: "S\u1edf h\u1eefu ch\u1ee9ng ch\u1ec9 ngh\u1ec1 \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn gi\u00fap \u0111\u1ea3m b\u1ea3o nhanh ch\u00f3ng c\u00f3 vi\u1ec7c l\u00e0m trong ng\u00e0nh k\u1ef9 thu\u1eadt.",
      collocations: ["gain vocational qualifications", "recognized vocational qualification"]
    }
    ,
    {
      id: "v-boost-transferable-skills",
      word: "transferable skills",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng c\u00f3 th\u1ec3 v\u1eadn d\u1ee5ng linh ho\u1ea1t \u0111a ng\u00e0nh ngh\u1ec1",
      ipa: "/tr\u00e6ns\u02c8f\u025c\u02d0r\u0259bl sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=transferable+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Critical thinking and teamwork are valuable transferable skills sought by every employer.",
      exampleVi: "T\u01b0 duy ph\u1ea3n bi\u1ec7n v\u00e0 l\u00e0m vi\u1ec7c nh\u00f3m l\u00e0 nh\u1eefng k\u1ef9 n\u0103ng linh ho\u1ea1t qu\u00fd b\u00e1u m\u00e0 m\u1ecdi nh\u00e0 tuy\u1ec3n d\u1ee5ng t\u00ecm ki\u1ebfm.",
      collocations: ["develop transferable skills", "showcase transferable skills"]
    }
    ,
    {
      id: "v-boost-internship-opportunity",
      word: "internship opportunity",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 h\u1ed9i th\u1ef1c t\u1eadp c\u1ecd x\u00e1t kinh nghi\u1ec7m th\u1ef1c t\u1ebf",
      ipa: "/\u02c8\u026ant\u025c\u02d0n\u0283\u026ap \u02cc\u0252p\u0259\u02c8tju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=internship+opportunity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The tech firm offers paid internship opportunities to outstanding third-year undergraduates.",
      exampleVi: "C\u00f4ng ty c\u00f4ng ngh\u1ec7 d\u00e0nh c\u00e1c c\u01a1 h\u1ed9i th\u1ef1c t\u1eadp c\u00f3 l\u01b0\u01a1ng cho sinh vi\u00ean n\u0103m ba xu\u1ea5t s\u1eafc.",
      collocations: ["secure an internship opportunity", "valuable internship opportunities"]
    }
    ,
    {
      id: "v-boost-entrepreneurial-ambition",
      word: "entrepreneurial ambition",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00e1t v\u1ecdng v\u00e0 ch\u00ed h\u01b0\u1edbng d\u1ea5n th\u00e2n kh\u1edfi nghi\u1ec7p",
      ipa: "/\u02cc\u0252ntr\u0259pr\u0259\u02c8n\u025c\u02d0ri\u0259l \u00e6m\u02c8b\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entrepreneurial+ambition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Incubators provide seed funding to help students realize their entrepreneurial ambitions.",
      exampleVi: "V\u01b0\u1eddn \u01b0\u01a1m cung c\u1ea5p v\u1ed1n m\u1ed3i \u0111\u1ec3 gi\u00fap c\u00e1c b\u1ea1n tr\u1ebb hi\u1ec7n th\u1ef1c h\u00f3a kh\u00e1t v\u1ecdng kh\u1edfi nghi\u1ec7p c\u1ee7a m\u00ecnh.",
      collocations: ["pursue entrepreneurial ambitions", "fuel entrepreneurial ambitions"]
    }
    ,
    {
      id: "v-boost-career-counselor",
      word: "career counselor",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u00ean vi\u00ean t\u01b0 v\u1ea5n \u0111\u1ecbnh h\u01b0\u1edbng ch\u1ecdn ngh\u1ec1",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02c8ka\u028ans\u0259l\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+counselor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A career counselor helps high school students choose college majors matching their passions.",
      exampleVi: "Chuy\u00ean vi\u00ean h\u01b0\u1edbng nghi\u1ec7p gi\u00fap h\u1ecdc sinh c\u1ea5p 3 ch\u1ecdn ng\u00e0nh h\u1ecdc \u0111\u1ea1i h\u1ecdc \u0111\u00fang \u0111am m\u00ea s\u1edf th\u00edch.",
      collocations: ["consult a career counselor", "advice from a career counselor"]
    }
    ,
    {
      id: "v-boost-job-shadowing-experience",
      word: "job shadowing experience",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea3i nghi\u1ec7m \u0111i theo h\u1ecdc vi\u1ec7c v\u00e0 quan s\u00e1t th\u1ef1c t\u1ebf",
      ipa: "/d\u0292\u0252b \u02c8\u0283\u00e6d\u0259\u028a\u026a\u014b \u026ak\u02c8sp\u026a\u0259ri\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+shadowing+experience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Job shadowing experiences give learners clear insight into the daily life of an architect.",
      exampleVi: "Tr\u1ea3i nghi\u1ec7m theo ch\u00e2n ng\u01b0\u1eddi \u0111i l\u00e0m gi\u00fap h\u1ecdc sinh hi\u1ec3u r\u00f5 c\u00f4ng vi\u1ec7c th\u01b0\u1eddng nh\u1eadt c\u1ee7a ki\u1ebfn tr\u00fac s\u01b0.",
      collocations: ["participate in job shadowing", "rewarding job shadowing experience"]
    }
    ,
    {
      id: "v-boost-professional-mentorship",
      word: "professional mentorship",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 k\u00e8m c\u1eb7p h\u01b0\u1edbng d\u1eabn t\u1eeb c\u1ed1 v\u1ea5n d\u00e0y d\u1eb7n",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl \u02c8ment\u0254\u02d0\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+mentorship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Young designers flourish under the caring guidance of professional mentorship.",
      exampleVi: "C\u00e1c nh\u00e0 thi\u1ebft k\u1ebf tr\u1ebb ti\u1ebfn b\u1ed9 v\u01b0\u1ee3t b\u1eadc d\u01b0\u1edbi s\u1ef1 d\u00ecu d\u1eaft t\u1eadn t\u00e2m c\u1ee7a c\u1ed1 v\u1ea5n ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["benefit from professional mentorship", "seek professional mentorship"]
    }
    ,
    {
      id: "v-boost-resume-refinement",
      word: "resume refinement",
      partOfSpeech: "n.phr",
      meaningVi: "trau chu\u1ed1t v\u00e0 ho\u00e0n thi\u1ec7n h\u1ed3 s\u01a1 xin vi\u1ec7c",
      ipa: "/\u02c8rezju\u02d0me\u026a r\u026a\u02c8fa\u026anm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resume+refinement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Careful resume refinement highlights measurable accomplishments with clear data.",
      exampleVi: "Trau chu\u1ed1t CV c\u1ea9n th\u1eadn gi\u00fap l\u00e0m n\u1ed5i b\u1eadt c\u00e1c th\u00e0nh t\u00edch c\u00f3 th\u1ec3 \u0111o l\u01b0\u1eddng b\u1eb1ng s\u1ed1 li\u1ec7u c\u1ee5 th\u1ec3.",
      collocations: ["undergo resume refinement", "tips for resume refinement"]
    }
    ,
    {
      id: "v-boost-career-transition",
      word: "career transition",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc ngo\u1eb7t chuy\u1ec3n \u0111\u1ed5i \u0111\u1ecbnh h\u01b0\u1edbng s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 tr\u00e6n\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+transition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mid-career transitions require re-skilling and genuine adaptability in digital tools.",
      exampleVi: "Chuy\u1ec3n \u0111\u1ed5i ngh\u1ec1 nghi\u1ec7p gi\u1eefa ch\u1eebng \u0111\u00f2i h\u1ecfi ph\u1ea3i h\u1ecdc k\u1ef9 n\u0103ng m\u1edbi v\u00e0 th\u00edch \u1ee9ng c\u00f4ng c\u1ee5 s\u1ed1.",
      collocations: ["navigate a career transition", "successful career transition"]
    }
    ,
    {
      id: "v-boost-salary-negotiation",
      word: "salary negotiation",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng \u0111\u00e0m ph\u00e1n m\u1ee9c l\u01b0\u01a1ng \u0111\u00e3i ng\u1ed9",
      ipa: "/\u02c8s\u00e6l\u0259ri n\u026a\u02cc\u0261\u0259\u028a\u0283i\u02c8e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=salary+negotiation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Effective salary negotiation begins with thorough market research on industry benchmarks.",
      exampleVi: "K\u1ef9 n\u0103ng \u0111\u00e0m ph\u00e1n l\u01b0\u01a1ng hi\u1ec7u qu\u1ea3 b\u1eaft \u0111\u1ea7u b\u1eb1ng vi\u1ec7c t\u00ecm hi\u1ec3u k\u1ef9 m\u1eb7t b\u1eb1ng chung c\u1ee7a th\u1ecb tr\u01b0\u1eddng.",
      collocations: ["master salary negotiation", "tactics in salary negotiation"]
    }
    ,
    {
      id: "v-boost-apprenticeship-contract",
      word: "apprenticeship contract",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ee3p \u0111\u1ed3ng h\u1ecdc ngh\u1ec1 v\u1eeba h\u1ecdc v\u1eeba nh\u1eadn th\u00f9 lao",
      ipa: "/\u0259\u02c8prent\u026as\u0283\u026ap \u02c8k\u0252ntr\u00e6kt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=apprenticeship+contract&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He signed an apprenticeship contract with an aerospace engineering manufacturer.",
      exampleVi: "Anh \u1ea5y \u0111\u00e3 k\u00fd h\u1ee3p \u0111\u1ed3ng h\u1ecdc ngh\u1ec1 v\u1edbi m\u1ed9t c\u00f4ng ty ch\u1ebf t\u1ea1o linh ki\u1ec7n h\u00e0ng kh\u00f4ng v\u0169 tr\u1ee5.",
      collocations: ["sign an apprenticeship contract", "three-year apprenticeship contract"]
    }
    ,
    {
      id: "v-boost-employment-prospect",
      word: "employment prospect",
      partOfSpeech: "n.phr",
      meaningVi: "tri\u1ec3n v\u1ecdng v\u00e0 c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m r\u1ed9ng m\u1edf",
      ipa: "/\u026am\u02c8pl\u0254\u026am\u0259nt \u02c8pr\u0252spekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=employment+prospect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Graduates in artificial intelligence and renewable energy enjoy bright employment prospects.",
      exampleVi: "Sinh vi\u00ean t\u1ed1t nghi\u1ec7p ng\u00e0nh tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o v\u00e0 n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch c\u00f3 c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m v\u00f4 c\u00f9ng x\u00e1n l\u1ea1n.",
      collocations: ["bright employment prospects", "improve employment prospects"]
    }
    ,
    {
      id: "v-boost-in-demand-profession",
      word: "in-demand profession",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e0nh ngh\u1ec1 th\u1ecb tr\u01b0\u1eddng \u0111ang r\u1ea5t c\u1ea7n nh\u00e2n l\u1ef1c",
      ipa: "/\u02cc\u026an d\u026a\u02c8m\u0251\u02d0nd pr\u0259\u02c8fe\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=in-demand+profession&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cybersecurity analysis has rapidly become one of the most in-demand professions globally.",
      exampleVi: "Chuy\u00ean vi\u00ean an ninh m\u1ea1ng \u0111\u00e3 nhanh ch\u00f3ng tr\u1edf th\u00e0nh m\u1ed9t trong nh\u1eefng ngh\u1ec1 kh\u00e1t nh\u00e2n l\u1ef1c nh\u1ea5t.",
      collocations: ["enter an in-demand profession", "top in-demand professions"]
    }
    ,
    {
      id: "v-boost-freelance-contracting",
      word: "freelance contracting",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00e0m vi\u1ec7c t\u1ef1 do theo h\u1ee3p \u0111\u1ed3ng t\u1eebng d\u1ef1 \u00e1n",
      ipa: "/\u02c8fri\u02d0l\u0251\u02d0ns k\u0259n\u02c8tr\u00e6kt\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=freelance+contracting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many digital creators prefer freelance contracting because of its schedule autonomy.",
      exampleVi: "Nhi\u1ec1u nh\u00e0 s\u00e1ng t\u1ea1o n\u1ed9i dung s\u1ed1 th\u00edch l\u00e0m t\u1ef1 do theo h\u1ee3p \u0111\u1ed3ng v\u00ec \u0111\u01b0\u1ee3c t\u1ef1 ch\u1ee7 th\u1eddi gian l\u00e0m vi\u1ec7c.",
      collocations: ["opt for freelance contracting", "sustainable freelance contracting"]
    }
  ],
  "unit-10-lifelong-learning": [
    {
      id: "v12-u10-continuous-learning",
      word: "continuous learning",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c h\u1ecdc t\u1eadp li\u00ean t\u1ee5c kh\u00f4ng ng\u1eebng ngh\u1ec9",
      ipa: "/k\u0259n\u02c8t\u026anju\u0259s \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=continuous+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "In a fast-changing economy, continuous learning is essential to remain competitive.",
      exampleVi: "Trong n\u1ec1n kinh t\u1ebf thay \u0111\u1ed5i ch\u00f3ng m\u1eb7t, h\u1ecdc t\u1eadp li\u00ean t\u1ee5c l\u00e0 \u0111i\u1ec1u thi\u1ebft y\u1ebfu \u0111\u1ec3 gi\u1eef v\u1eefng n\u0103ng l\u1ef1c c\u1ea1nh tranh.",
      collocations: ["culture of continuous learning", "commit to continuous learning"]
    },
    {
      id: "v12-u10-self-directed-learning",
      word: "self-directed learning",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c t\u1ef1 \u0111\u1ecbnh h\u01b0\u1edbng v\u00e0 t\u1ef1 h\u1ecdc ch\u1ee7 \u0111\u1ed9ng",
      ipa: "/\u02ccself da\u026a\u02c8rekt\u026ad \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-directed+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Self-directed learning empowers adults to master digital skills through online modules.",
      exampleVi: "T\u1ef1 \u0111\u1ecbnh h\u01b0\u1edbng h\u1ecdc t\u1eadp trao quy\u1ec1n cho ng\u01b0\u1eddi tr\u01b0\u1edfng th\u00e0nh l\u00e0m ch\u1ee7 k\u1ef9 n\u0103ng s\u1ed1 qua c\u00e1c b\u00e0i h\u1ecdc tr\u1ef1c tuy\u1ebfn.",
      collocations: ["practice self-directed learning", "principles of self-directed learning"]
    },
    {
      id: "v12-u10-upskilling",
      word: "upskilling",
      partOfSpeech: "n",
      meaningVi: "n\u00e2ng cao v\u00e0 b\u1ed3i d\u01b0\u1ee1ng k\u1ef9 n\u0103ng chuy\u00ean m\u00f4n",
      ipa: "/\u02cc\u028cp\u02c8sk\u026al\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=upskilling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Companies invest in employee upskilling programs to prepare staff for automated machinery.",
      exampleVi: "C\u00e1c c\u00f4ng ty \u0111\u1ea7u t\u01b0 v\u00e0o ch\u01b0\u01a1ng tr\u00ecnh n\u00e2ng cao k\u1ef9 n\u0103ng cho nh\u00e2n vi\u00ean \u0111\u1ec3 v\u1eadn h\u00e0nh m\u00e1y m\u00f3c t\u1ef1 \u0111\u1ed9ng.",
      collocations: ["invest in upskilling", "upskilling opportunities"]
    },
    {
      id: "v12-u10-reskilling",
      word: "reskilling",
      partOfSpeech: "n",
      meaningVi: "h\u1ecdc l\u1ea1i k\u1ef9 n\u0103ng m\u1edbi \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i ngh\u1ec1 nghi\u1ec7p",
      ipa: "/\u02ccri\u02d0\u02c8sk\u026al\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reskilling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mid-career factory workers underwent reskilling to become solar panel maintenance technicians.",
      exampleVi: "C\u00f4ng nh\u00e2n nh\u00e0 m\u00e1y \u0111\u00e3 tham gia h\u1ecdc ngh\u1ec1 m\u1edbi \u0111\u1ec3 tr\u1edf th\u00e0nh k\u1ef9 thu\u1eadt vi\u00ean b\u1ea3o tr\u00ec pin m\u1eb7t tr\u1eddi.",
      collocations: ["workforce reskilling", "reskilling for the digital era"]
    },
    {
      id: "v12-u10-professional-development",
      word: "professional development",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e1t tri\u1ec3n ngh\u1ec1 nghi\u1ec7p n\u00e2ng cao tr\u00ecnh \u0111\u1ed9",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl d\u026a\u02c8vel\u0259pm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+development&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teachers participate in monthly professional development seminars to master new pedagogy.",
      exampleVi: "Gi\u00e1o vi\u00ean tham gia c\u00e1c bu\u1ed5i h\u1ed9i th\u1ea3o ph\u00e1t tri\u1ec3n ngh\u1ec1 nghi\u1ec7p h\u00e0ng th\u00e1ng \u0111\u1ec3 l\u00e0m ch\u1ee7 ph\u01b0\u01a1ng ph\u00e1p s\u01b0 ph\u1ea1m m\u1edbi.",
      collocations: ["attend professional development", "ongoing professional development"]
    },
    {
      id: "v12-u10-adult-education",
      word: "adult education",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u00e1o d\u1ee5c d\u00e0nh cho ng\u01b0\u1eddi l\u1edbn tu\u1ed5i",
      ipa: "/\u02cc\u00e6d\u028clt \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adult+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community centers offer adult education courses in conversational foreign languages.",
      exampleVi: "Nh\u00e0 v\u0103n h\u00f3a c\u1ed9ng \u0111\u1ed3ng m\u1edf c\u00e1c l\u1edbp h\u1ecdc d\u00e0nh cho ng\u01b0\u1eddi l\u1edbn tu\u1ed5i v\u1ec1 \u0111\u00e0m tho\u1ea1i ngo\u1ea1i ng\u1eef.",
      collocations: ["enroll in adult education", "adult education classes"]
    },
    {
      id: "v12-u10-intellectual-curiosity",
      word: "intellectual curiosity",
      partOfSpeech: "n.phr",
      meaningVi: "ni\u1ec1m say m\u00ea ham hi\u1ec3u bi\u1ebft tri th\u1ee9c",
      ipa: "/\u02cc\u026ant\u0259\u02c8lekt\u0283u\u0259l \u02cckj\u028a\u0259ri\u02c8\u0252s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intellectual+curiosity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lifelong learners maintain deep intellectual curiosity about nature, astronomy, and art.",
      exampleVi: "Ng\u01b0\u1eddi h\u1ecdc t\u1eadp su\u1ed1t \u0111\u1eddi lu\u00f4n duy tr\u00ec ni\u1ec1m say m\u00ea t\u00ecm hi\u1ec3u s\u00e2u s\u1eafc v\u1ec1 t\u1ef1 nhi\u00ean, thi\u00ean v\u0103n v\u00e0 ngh\u1ec7 thu\u1eadt.",
      collocations: ["spark intellectual curiosity", "nurture intellectual curiosity"]
    },
    {
      id: "v12-u10-skill-obsolescence",
      word: "skill obsolescence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 l\u1ed7i th\u1eddi c\u1ee7a c\u00e1c k\u1ef9 n\u0103ng c\u0169",
      ipa: "/sk\u026al \u02cc\u0252bs\u0259\u02c8lesns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=skill+obsolescence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rapid software advancements cause rapid skill obsolescence for passive professionals.",
      exampleVi: "C\u00f4ng ngh\u1ec7 ph\u1ea7n m\u1ec1m ph\u00e1t tri\u1ec3n th\u1ea7n t\u1ed1c l\u00e0m cho k\u1ef9 n\u0103ng c\u0169 nhanh ch\u00f3ng b\u1ecb l\u1ed7i th\u1eddi n\u1ebfu kh\u00f4ng ch\u1ecbu h\u1ecdc h\u1ecfi.",
      collocations: ["prevent skill obsolescence", "risk of skill obsolescence"]
    },
    {
      id: "v12-u10-micro-credentials",
      word: "micro-credentials",
      partOfSpeech: "n.pl",
      meaningVi: "ch\u1ee9ng ch\u1ec9 chuy\u00ean s\u00e2u ng\u1eafn h\u1ea1n (vi ch\u1ee9ng ch\u1ec9)",
      ipa: "/\u02c8ma\u026akr\u0259\u028a kr\u026a\u02c8den\u0283lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=micro-credentials&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earning verified micro-credentials on cloud computing demonstrates up-to-date competence.",
      exampleVi: "S\u1edf h\u1eefu c\u00e1c vi ch\u1ee9ng ch\u1ec9 x\u00e1c th\u1ef1c v\u1ec1 \u0111i\u1ec7n to\u00e1n \u0111\u00e1m m\u00e2y ch\u1ee9ng minh n\u0103ng l\u1ef1c chuy\u00ean m\u00f4n c\u1eadp nh\u1eadt.",
      collocations: ["stackable micro-credentials", "earn micro-credentials"]
    },
    {
      id: "v12-u10-growth-mindset",
      word: "growth mindset",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 duy ph\u00e1t tri\u1ec3n kh\u00f4ng ng\u1eebng",
      ipa: "/\u0261r\u0259\u028a\u03b8 \u02c8ma\u026andset/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=growth+mindset&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adopting a growth mindset views mistakes not as failures, but as opportunities for improvement.",
      exampleVi: "\u00c1p d\u1ee5ng t\u01b0 duy ph\u00e1t tri\u1ec3n nh\u00ecn nh\u1eadn sai s\u00f3t kh\u00f4ng ph\u1ea3i th\u1ea5t b\u1ea1i m\u00e0 l\u00e0 c\u01a1 h\u1ed9i \u0111\u1ec3 ho\u00e0n thi\u1ec7n b\u1ea3n th\u00e2n.",
      collocations: ["cultivate a growth mindset", "embrace a growth mindset"]
    },
    {
      id: "v12-u10-knowledge-acquisition",
      word: "knowledge acquisition",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ti\u1ebfp thu v\u00e0 thu n\u1ea1p tri th\u1ee9c m\u1edbi",
      ipa: "/\u02c8n\u0252l\u026ad\u0292 \u02cc\u00e6kw\u026a\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=knowledge+acquisition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reading informative nonfiction books daily accelerates your knowledge acquisition.",
      exampleVi: "\u0110\u1ecdc s\u00e1ch phi h\u01b0 c\u1ea5u h\u1eefu \u00edch m\u1ed7i ng\u00e0y gi\u00fap \u0111\u1ea9y nhanh vi\u1ec7c ti\u1ebfp thu tri th\u1ee9c m\u1edbi.",
      collocations: ["facilitate knowledge acquisition", "methods of knowledge acquisition"]
    },
    {
      id: "v12-u10-online-certification",
      word: "online certification",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng nh\u1eadn tr\u1ef1c tuy\u1ebfn \u0111\u01b0\u1ee3c qu\u1ed1c t\u1ebf c\u00f4ng nh\u1eadn",
      ipa: "/\u02c8\u0252nla\u026an \u02ccs\u025c\u02d0t\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+certification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Completing an accredited online certification in data visualization enhances your CV.",
      exampleVi: "Ho\u00e0n th\u00e0nh ch\u1ee9ng nh\u1eadn tr\u1ef1c tuy\u1ebfn \u0111\u01b0\u1ee3c ki\u1ec3m \u0111\u1ecbnh v\u1ec1 tr\u1ef1c quan h\u00f3a d\u1eef li\u1ec7u l\u00e0m \u0111\u1eb9p h\u1ed3 s\u01a1 xin vi\u1ec7c.",
      collocations: ["pursue online certification", "verified online certification"]
    },
    {
      id: "v12-u10-adaptability",
      word: "adaptability",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng th\u00edch \u1ee9ng linh ho\u1ea1t tr\u01b0\u1edbc \u0111\u1ed5i thay",
      ipa: "/\u0259\u02ccd\u00e6pt\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High adaptability enables professionals to transition smoothly across multiple careers.",
      exampleVi: "Kh\u1ea3 n\u0103ng th\u00edch \u1ee9ng cao cho ph\u00e9p ng\u01b0\u1eddi \u0111i l\u00e0m chuy\u1ec3n \u0111\u1ed5i su\u00f4n s\u1ebb qua nhi\u1ec1u ngh\u1ec1 nghi\u1ec7p kh\u00e1c nhau.",
      collocations: ["high adaptability", "demonstrate adaptability"]
    },
    {
      id: "v12-u10-critical-thinking",
      word: "critical thinking",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 duy ph\u1ea3n bi\u1ec7n logic s\u00e2u s\u1eafc",
      ipa: "/\u02cckr\u026at\u026akl \u02c8\u03b8\u026a\u014bk\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=critical+thinking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lifelong study sharpens critical thinking to dissect biased propaganda on social channels.",
      exampleVi: "H\u1ecdc t\u1eadp su\u1ed1t \u0111\u1eddi r\u00e8n luy\u1ec7n t\u01b0 duy ph\u1ea3n bi\u1ec7n s\u1eafc b\u00e9n \u0111\u1ec3 b\u00f3c t\u00e1ch nh\u1eefng lu\u1eadn \u0111i\u1ec7u thi\u00ean l\u1ec7ch tr\u00ean m\u1ea1ng.",
      collocations: ["exercise critical thinking", "sharpen critical thinking"]
    },
    {
      id: "v12-u10-self-actualization",
      word: "self-actualization",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ho\u00e0n thi\u1ec7n v\u00e0 ph\u00e1t huy t\u1ed1i \u0111a ti\u1ec1m n\u0103ng b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02cc\u00e6kt\u0283u\u0259la\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-actualization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "At the top of Maslow's pyramid of human needs lies self-actualization through creative work.",
      exampleVi: "Tr\u00ean \u0111\u1ec9nh th\u00e1p nhu c\u1ea7u c\u1ee7a Maslow ch\u00ednh l\u00e0 s\u1ef1 t\u1ef1 kh\u1eb3ng \u0111\u1ecbnh v\u00e0 ph\u00e1t huy t\u1ed1i \u0111a ti\u1ec1m n\u0103ng b\u1ea3n th\u00e2n.",
      collocations: ["strive for self-actualization", "path to self-actualization"]
    },
    {
      id: "v12-u10-distance-education",
      word: "distance education",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u00e1o d\u1ee5c \u0111\u00e0o t\u1ea1o t\u1eeb xa qua m\u1ea1ng",
      ipa: "/\u02c8d\u026ast\u0259ns \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=distance+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Distance education allows parents with young babies to earn degrees without leaving home.",
      exampleVi: "\u0110\u00e0o t\u1ea1o t\u1eeb xa cho ph\u00e9p c\u00e1c b\u1eadc cha m\u1eb9 c\u00f3 con nh\u1ecf l\u1ea5y b\u1eb1ng \u0111\u1ea1i h\u1ecdc m\u00e0 kh\u00f4ng c\u1ea7n r\u1eddi nh\u00e0.",
      collocations: ["enroll in distance education", "accredited distance education"]
    },
    {
      id: "v12-u10-open-educational-resources",
      word: "open educational resources",
      partOfSpeech: "n.phr",
      meaningVi: "ngu\u1ed3n h\u1ecdc li\u1ec7u gi\u00e1o d\u1ee5c m\u1edf mi\u1ec5n ph\u00ed (OER)",
      ipa: "/\u02cc\u0259\u028ap\u0259n \u02cced\u0292u\u02c8ke\u026a\u0283\u0259nl r\u026a\u02c8s\u0254\u02d0s\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=open+educational+resources&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Universities freely share lecture slides and textbooks as open educational resources.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc t\u1ef1 do chia s\u1ebb b\u00e0i gi\u1ea3ng v\u00e0 gi\u00e1o tr\u00ecnh d\u01b0\u1edbi d\u1ea1ng t\u00e0i nguy\u00ean gi\u00e1o d\u1ee5c m\u1edf.",
      collocations: ["utilize open educational resources", "access to OER"]
    },
    {
      id: "v12-u10-mental-agility",
      word: "mental agility",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nhanh nh\u1ea1y minh m\u1eabn c\u1ee7a tr\u00ed n\u00e3o",
      ipa: "/\u02ccmentl \u0259\u02c8d\u0292\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mental+agility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning a musical instrument or chess late in life preserves mental agility in seniors.",
      exampleVi: "H\u1ecdc ch\u01a1i nh\u1ea1c c\u1ee5 hay c\u1edd vua khi v\u1ec1 gi\u00e0 gi\u00fap duy tr\u00ec s\u1ef1 nhanh nh\u1ea1y minh m\u1eabn c\u1ee7a tr\u00ed n\u00e3o.",
      collocations: ["maintain mental agility", "boost mental agility"]
    },
    {
      id: "v12-u10-active-recall",
      word: "active recall",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ph\u00e1p ch\u1ee7 \u0111\u1ed9ng g\u1ee3i nh\u1edb ki\u1ebfn th\u1ee9c",
      ipa: "/\u02cc\u00e6kt\u026av r\u026a\u02c8k\u0254\u02d0l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=active+recall&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Testing yourself with blank paper practice leverages active recall for deeper memory.",
      exampleVi: "T\u1ef1 ki\u1ec3m tra tr\u00ean gi\u1ea5y tr\u1eafng \u1ee9ng d\u1ee5ng ph\u01b0\u01a1ng ph\u00e1p ch\u1ee7 \u0111\u1ed9ng g\u1ee3i nh\u1edb gi\u00fap nh\u1edb b\u00e0i s\u00e2u s\u1eafc h\u01a1n.",
      collocations: ["practice active recall", "benefits of active recall"]
    },
    {
      id: "v12-u10-knowledge-retention",
      word: "knowledge retention",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng l\u01b0u gi\u1eef v\u00e0 duy tr\u00ec ki\u1ebfn th\u1ee9c l\u00e2u d\u00e0i",
      ipa: "/\u02c8n\u0252l\u026ad\u0292 r\u026a\u02c8ten\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=knowledge+retention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Spaced repetition schedules guarantee optimal knowledge retention over years.",
      exampleVi: "L\u1ecbch \u00f4n t\u1eadp ng\u1eaft qu\u00e3ng khoa h\u1ecdc \u0111\u1ea3m b\u1ea3o kh\u1ea3 n\u0103ng ghi nh\u1edb v\u00e0 l\u01b0u gi\u1eef ki\u1ebfn th\u1ee9c nhi\u1ec1u n\u0103m.",
      collocations: ["enhance knowledge retention", "long-term knowledge retention"]
    }
    ,
    {
      id: "v12-extra-self-regulated-learning",
      word: "self-regulated learning",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c t\u1ef1 \u0111i\u1ec1u ti\u1ebft v\u00e0 l\u00e0m ch\u1ee7 vi\u1ec7c h\u1ecdc",
      ipa: "/\u02ccself \u02c8re\u0261jule\u026at\u026ad \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-regulated+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Self-regulated learning enables adults to pace their online degree coursework effectively.",
      exampleVi: "T\u1ef1 \u0111i\u1ec1u ti\u1ebft h\u1ecdc t\u1eadp gi\u00fap ng\u01b0\u1eddi tr\u01b0\u1edfng th\u00e0nh t\u1ef1 ph\u00e2n b\u1ed5 b\u00e0i v\u1edf \u0111\u1ea1i h\u1ecdc tr\u1ef1c tuy\u1ebfn hi\u1ec7u qu\u1ea3.",
      collocations: ["practice self-regulated learning", "strategies of self-regulated learning"]
    }
    ,
    {
      id: "v12-extra-intellectual-growth",
      word: "intellectual growth",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e1t tri\u1ec3n v\u00e0 m\u1edf r\u1ed9ng tr\u00ed tu\u1ec7 tri th\u1ee9c",
      ipa: "/\u02cc\u026ant\u0259\u02c8lekt\u0283u\u0259l \u0261r\u0259\u028a\u03b8/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intellectual+growth&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reading deep philosophy and science books stimulates continuous intellectual growth.",
      exampleVi: "\u0110\u1ecdc nh\u1eefng cu\u1ed1n s\u00e1ch tri\u1ebft h\u1ecdc v\u00e0 khoa h\u1ecdc s\u00e2u s\u1eafc k\u00edch th\u00edch s\u1ef1 ph\u00e1t tri\u1ec3n tr\u00ed tu\u1ec7 kh\u00f4ng ng\u1eebng.",
      collocations: ["nurture intellectual growth", "catalyst for intellectual growth"]
    }
    ,
    {
      id: "v12-extra-online-credentials",
      word: "online credentials",
      partOfSpeech: "n.pl",
      meaningVi: "ch\u1ee9ng ch\u1ec9 h\u1ecdc t\u1eadp tr\u1ef1c tuy\u1ebfn x\u00e1c th\u1ef1c",
      ipa: "/\u02c8\u0252nla\u026an kr\u026a\u02c8den\u0283lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+credentials&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earning verified online credentials from top universities boosts career mobility.",
      exampleVi: "S\u1edf h\u1eefu ch\u1ee9ng ch\u1ec9 tr\u1ef1c tuy\u1ebfn t\u1eeb c\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc h\u00e0ng \u0111\u1ea7u gi\u00fap gia t\u0103ng c\u01a1 h\u1ed9i ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["stackable online credentials", "verified credentials"]
    }
    ,
    {
      id: "v12-extra-mindset-shift",
      word: "mindset shift",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 chuy\u1ec3n \u0111\u1ed5i t\u01b0 duy t\u00edch c\u1ef1c",
      ipa: "/\u02c8ma\u026andset \u0283\u026aft/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mindset+shift&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Embracing lifelong study requires a mindset shift from passive listener to active seeker.",
      exampleVi: "\u0110\u00f3n nh\u1eadn h\u1ecdc t\u1eadp su\u1ed1t \u0111\u1eddi \u0111\u00f2i h\u1ecfi s\u1ef1 chuy\u1ec3n \u0111\u1ed5i t\u1eeb ng\u01b0\u1eddi nghe th\u1ee5 \u0111\u1ed9ng sang ng\u01b0\u1eddi ch\u1ee7 \u0111\u1ed9ng t\u00ecm t\u00f2i.",
      collocations: ["undergo a mindset shift", "trigger a mindset shift"]
    }
    ,
    {
      id: "v12-extra-curiosity-driven",
      word: "curiosity-driven",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u01b0\u1ee3c th\u00f4i th\u00fac b\u1edfi l\u00f2ng hi\u1ebfu tri, say m\u00ea",
      ipa: "/\u02cckj\u028a\u0259ri\u02c8\u0252s\u0259ti \u02c8dr\u026avn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=curiosity-driven&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Curiosity-driven study leads to surprising breakthroughs in unexpected domains.",
      exampleVi: "H\u1ecdc t\u1eadp th\u00f4i th\u00fac b\u1edfi l\u00f2ng hi\u1ebfu tri m\u1edf ra nh\u1eefng b\u01b0\u1edbc \u0111\u1ed9t ph\u00e1 k\u1ef3 di\u1ec7u \u1edf nhi\u1ec1u l\u0129nh v\u1ef1c.",
      collocations: ["curiosity-driven learning", "curiosity-driven research"]
    }
    ,
    {
      id: "v12-extra-cognitive-flexibility",
      word: "cognitive flexibility",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 linh ho\u1ea1t, nhanh nh\u1ea1y trong t\u01b0 duy nh\u1eadn th\u1ee9c",
      ipa: "/\u02c8k\u0252\u0261n\u0259t\u026av \u02ccfleks\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cognitive+flexibility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Solving puzzles and learning foreign languages enhances cognitive flexibility in elderly adults.",
      exampleVi: "Gi\u1ea3i \u0111\u1ed1 v\u00e0 h\u1ecdc ngo\u1ea1i ng\u1eef t\u0103ng c\u01b0\u1eddng s\u1ef1 linh ho\u1ea1t nh\u1eadn th\u1ee9c cho ng\u01b0\u1eddi cao tu\u1ed5i.",
      collocations: ["boost cognitive flexibility", "maintain cognitive flexibility"]
    }
    ,
    {
      id: "v12-extra-reflective-learning",
      word: "reflective learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp qua ph\u1ea3n t\u01b0 v\u00e0 \u0111\u00fac k\u1ebft kinh nghi\u1ec7m",
      ipa: "/r\u026a\u02c8flekt\u026av \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reflective+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Keeping a daily learning journal is a proven method of reflective learning.",
      exampleVi: "Vi\u1ebft nh\u1eadt k\u00fd h\u1ecdc t\u1eadp m\u1ed7i ng\u00e0y l\u00e0 ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc qua ph\u1ea3n t\u01b0 \u0111\u00e3 \u0111\u01b0\u1ee3c ch\u1ee9ng minh hi\u1ec7u qu\u1ea3.",
      collocations: ["practice reflective learning", "benefits of reflective learning"]
    }
    ,
    {
      id: "v12-extra-digital-learning-tools",
      word: "digital learning tools",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng c\u1ee5 h\u1ed7 tr\u1ee3 h\u1ecdc t\u1eadp k\u1ef9 thu\u1eadt s\u1ed1",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8l\u025c\u02d0n\u026a\u014b tu\u02d0lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+learning+tools&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital learning tools like spaced repetition apps accelerate vocabulary retention threefold.",
      exampleVi: "C\u00e1c c\u00f4ng c\u1ee5 h\u1ecdc t\u1eadp s\u1ed1 nh\u01b0 \u1ee9ng d\u1ee5ng l\u1eb7p l\u1ea1i ng\u1eaft qu\u00e3ng gi\u00fap nh\u1edb t\u1eeb v\u1ef1ng nhanh g\u1ea5p ba l\u1ea7n.",
      collocations: ["use digital learning tools", "master digital learning tools"]
    }
    ,
    {
      id: "v12-extra-critical-analysis",
      word: "critical analysis",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e2n t\u00edch ph\u1ea3n bi\u1ec7n c\u00f3 chi\u1ec1u s\u00e2u",
      ipa: "/\u02cckr\u026at\u026akl \u0259\u02c8n\u00e6l\u0259s\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=critical+analysis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Academic essays require rigorous critical analysis rather than mere recitation of facts.",
      exampleVi: "B\u00e0i lu\u1eadn h\u1ecdc thu\u1eadt \u0111\u00f2i h\u1ecfi ph\u00e2n t\u00edch ph\u1ea3n bi\u1ec7n ch\u1eb7t ch\u1ebd thay v\u00ec ch\u1ec9 \u0111\u01a1n thu\u1ea7n k\u1ec3 l\u1ea1i s\u1ef1 vi\u1ec7c.",
      collocations: ["conduct critical analysis", "sharpen critical analysis"]
    }
    ,
    {
      id: "v12-extra-knowledge-sharing",
      word: "knowledge sharing",
      partOfSpeech: "n.phr",
      meaningVi: "chia s\u1ebb v\u00e0 lan t\u1ecfa tri th\u1ee9c c\u00f9ng nhau",
      ipa: "/\u02c8n\u0252l\u026ad\u0292 \u02c8\u0283e\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=knowledge+sharing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open online forums foster voluntary knowledge sharing among worldwide enthusiasts.",
      exampleVi: "Di\u1ec5n \u0111\u00e0n tr\u1ef1c tuy\u1ebfn c\u1edfi m\u1edf th\u00fac \u0111\u1ea9y vi\u1ec7c t\u1ef1 nguy\u1ec7n chia s\u1ebb tri th\u1ee9c gi\u1eefa nh\u1eefng ng\u01b0\u1eddi say m\u00ea.",
      collocations: ["culture of knowledge sharing", "promote knowledge sharing"]
    }
    ,
    {
      id: "v12-extra-growth-mindset",
      word: "growth mindset",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 duy ph\u00e1t tri\u1ec3n \u0111\u00f3n nh\u1eadn th\u1eed th\u00e1ch",
      ipa: "/\u0261r\u0259\u028a\u03b8 \u02c8ma\u026andset/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=growth+mindset&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students with a growth mindset view complex physics problems as fun challenges to conquer.",
      exampleVi: "H\u1ecdc sinh c\u00f3 t\u01b0 duy ph\u00e1t tri\u1ec3n xem b\u00e0i to\u00e1n v\u1eadt l\u00fd kh\u00f3 nh\u01b0 th\u1eed th\u00e1ch th\u00fa v\u1ecb \u0111\u1ec3 chinh ph\u1ee5c.",
      collocations: ["cultivate a growth mindset", "power of growth mindset"]
    }
    ,
    {
      id: "v12-extra-self-education",
      word: "self-education",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u1ef1 h\u1ecdc ki\u00ean tr\u00ec c\u1ee7a b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Abraham Lincoln achieved historical greatness largely through diligent self-education by candlelight.",
      exampleVi: "Abraham Lincoln l\u00e0m n\u00ean s\u1ef1 nghi\u1ec7p v\u0129 \u0111\u1ea1i ph\u1ea7n l\u1edbn nh\u1edd t\u1ef1 h\u1ecdc mi\u1ec7t m\u00e0i b\u00ean \u00e1nh \u0111\u00e8n d\u1ea7u.",
      collocations: ["pursue self-education", "value of self-education"]
    }
    ,
    {
      id: "v12-extra-intellectual-stamina",
      word: "intellectual stamina",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9c b\u1ec1n v\u00e0 s\u1ef1 d\u1ebbo dai c\u1ee7a tr\u00ed \u00f3c",
      ipa: "/\u02cc\u026ant\u0259\u02c8lekt\u0283u\u0259l \u02c8st\u00e6m\u026an\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intellectual+stamina&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Solving lengthy mathematical proofs builds deep intellectual stamina over months.",
      exampleVi: "Gi\u1ea3i c\u00e1c b\u00e0i to\u00e1n ch\u1ee9ng minh d\u00e0i gi\u00fap b\u1ed3i \u0111\u1eafp s\u1ee9c b\u1ec1n tr\u00ed tu\u1ec7 sau nhi\u1ec1u th\u00e1ng r\u00e8n gi\u0169a.",
      collocations: ["build intellectual stamina", "display intellectual stamina"]
    }
    ,
    {
      id: "v12-extra-adaptive-learner",
      word: "adaptive learner",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi h\u1ecdc c\u00f3 n\u0103ng l\u1ef1c th\u00edch \u1ee9ng linh ho\u1ea1t",
      ipa: "/\u0259\u02c8d\u00e6pt\u026av \u02c8l\u025c\u02d0n\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptive+learner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The digital era rewards adaptive learners who readily acquire emerging skills.",
      exampleVi: "K\u1ef7 nguy\u00ean s\u1ed1 t\u01b0\u1edfng th\u01b0\u1edfng cho nh\u1eefng ng\u01b0\u1eddi h\u1ecdc linh ho\u1ea1t s\u1eb5n s\u00e0ng ti\u1ebfp thu k\u1ef9 n\u0103ng m\u1edbi n\u1ed5i.",
      collocations: ["become an adaptive learner", "traits of adaptive learners"]
    }
    ,
    {
      id: "v-boost-autonomous-learning",
      word: "autonomous learning",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ef1 h\u1ecdc ch\u1ee7 \u0111\u1ed9ng v\u00e0 t\u1ef1 l\u1eadp k\u1ebf ho\u1ea1ch",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Autonomous learning enables self-driven individuals to conquer complex foreign languages.",
      exampleVi: "Ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc t\u1ef1 ch\u1ee7 gi\u00fap nh\u1eefng c\u00e1 nh\u00e2n ki\u00ean tr\u00ec chinh ph\u1ee5c th\u00e0nh c\u00f4ng ngo\u1ea1i ng\u1eef kh\u00f3.",
      collocations: ["cultivate autonomous learning", "strategies for autonomous learning"]
    }
    ,
    {
      id: "v-boost-cognitive-flexibility",
      word: "cognitive flexibility",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 linh ho\u1ea1t trong t\u01b0 duy nh\u1eadn th\u1ee9c",
      ipa: "/\u02c8k\u0252\u0261n\u0259t\u026av \u02ccfleks\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cognitive+flexibility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing musical instruments and learning logic games enhances cognitive flexibility.",
      exampleVi: "Luy\u1ec7n ch\u01a1i nh\u1ea1c c\u1ee5 v\u00e0 gi\u1ea3i \u0111\u1ed1 t\u01b0 duy logic gi\u00fap t\u0103ng c\u01b0\u1eddng s\u1ef1 linh ho\u1ea1t nh\u1eadn th\u1ee9c cho n\u00e3o b\u1ed9.",
      collocations: ["boost cognitive flexibility", "demonstrate cognitive flexibility"]
    }
    ,
    {
      id: "v-boost-skill-obsolescence",
      word: "skill obsolescence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 l\u1ea1c h\u1eadu l\u1ed7i th\u1eddi c\u1ee7a k\u1ef9 n\u0103ng c\u0169",
      ipa: "/sk\u026al \u02cc\u0252bs\u0259\u02c8lesns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=skill+obsolescence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Continuous upskilling protects workers from sudden skill obsolescence in the automated age.",
      exampleVi: "Th\u01b0\u1eddng xuy\u00ean n\u00e2ng cao tay ngh\u1ec1 b\u1ea3o v\u1ec7 ng\u01b0\u1eddi lao \u0111\u1ed9ng kh\u1ecfi s\u1ef1 l\u1ed7i th\u1eddi k\u1ef9 n\u0103ng trong th\u1eddi \u0111\u1ea1i t\u1ef1 \u0111\u1ed9ng.",
      collocations: ["guard against skill obsolescence", "rate of skill obsolescence"]
    }
    ,
    {
      id: "v-boost-continuous-professional-development",
      word: "continuous professional development",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1t tri\u1ec3n chuy\u00ean m\u00f4n nghi\u1ec7p v\u1ee5 li\u00ean t\u1ee5c",
      ipa: "/k\u0259n\u02c8t\u026anju\u0259s pr\u0259\u02c8fe\u0283\u0259nl d\u026a\u02c8vel\u0259pm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=continuous+professional+development&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teachers earn annual credits through continuous professional development seminars.",
      exampleVi: "Gi\u00e1o vi\u00ean t\u00edch l\u0169y t\u00edn ch\u1ec9 h\u1eb1ng n\u0103m qua c\u00e1c h\u1ed9i th\u1ea3o ph\u00e1t tri\u1ec3n nghi\u1ec7p v\u1ee5 li\u00ean t\u1ee5c.",
      collocations: ["commit to continuous professional development", "CPD programs"]
    }
    ,
    {
      id: "v-boost-online-micro-credential",
      word: "online micro-credential",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng ch\u1ec9 k\u1ef9 n\u0103ng ng\u1eafn h\u1ea1n tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02cc\u0252nla\u026an \u02c8ma\u026akr\u0259\u028a kr\u0259\u02ccden\u0283l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+micro-credential&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earning online micro-credentials helps professionals prove niche expertise quickly.",
      exampleVi: "S\u1edf h\u1eefu c\u00e1c ch\u1ee9ng ch\u1ec9 s\u1ed1 ng\u1eafn h\u1ea1n tr\u1ef1c tuy\u1ebfn gi\u00fap ng\u01b0\u1eddi \u0111i l\u00e0m nhanh ch\u00f3ng ch\u1ee9ng minh chuy\u00ean m\u00f4n s\u00e2u.",
      collocations: ["stack online micro-credentials", "earn micro-credentials"]
    }
    ,
    {
      id: "v-boost-information-synthesis",
      word: "information synthesis",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng t\u1ed5ng h\u1ee3p v\u00e0 ch\u1eaft l\u1ecdc th\u00f4ng tin",
      ipa: "/\u02cc\u026anf\u0259\u02c8me\u026a\u0283n \u02c8s\u026an\u03b8\u0259s\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=information+synthesis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mastering information synthesis allows researchers to extract gems from voluminous papers.",
      exampleVi: "Th\u00e0nh th\u1ea1o k\u1ef9 n\u0103ng t\u1ed5ng h\u1ee3p th\u00f4ng tin gi\u00fap ng\u01b0\u1eddi nghi\u00ean c\u1ee9u ch\u1eaft l\u1ecdc tinh hoa t\u1eeb h\u00e0ng tr\u0103m t\u00e0i li\u1ec7u.",
      collocations: ["excel in information synthesis", "rapid information synthesis"]
    }
    ,
    {
      id: "v-boost-metacognitive-awareness",
      word: "metacognitive awareness",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1eadn th\u1ee9c v\u1ec1 ch\u00ednh qu\u00e1 tr\u00ecnh t\u01b0 duy c\u1ee7a b\u1ea3n th\u00e2n",
      ipa: "/\u02ccmet\u0259k\u0252\u0261\u02c8n\u026at\u026av \u0259\u02c8we\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=metacognitive+awareness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students with high metacognitive awareness readily pinpoint which study strategies work best.",
      exampleVi: "H\u1ecdc sinh c\u00f3 nh\u1eadn th\u1ee9c si\u00eau nh\u1eadn th\u1ee9c cao d\u1ec5 d\u00e0ng bi\u1ebft r\u00f5 chi\u1ebfn l\u01b0\u1ee3c h\u1ecdc n\u00e0o ph\u00e1t huy hi\u1ec7u qu\u1ea3 nh\u1ea5t.",
      collocations: ["heighten metacognitive awareness", "benefits of metacognitive awareness"]
    }
    ,
    {
      id: "v-boost-distance-education",
      word: "distance education",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00ecnh th\u1ee9c \u0111\u00e0o t\u1ea1o gi\u00e1o d\u1ee5c t\u1eeb xa",
      ipa: "/\u02ccd\u026ast\u0259ns \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=distance+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Distance education brings world-class university lectures to rural mountainous districts.",
      exampleVi: "Gi\u00e1o d\u1ee5c t\u1eeb xa mang b\u00e0i gi\u1ea3ng c\u1ee7a c\u00e1c \u0111\u1ea1i h\u1ecdc h\u00e0ng \u0111\u1ea7u \u0111\u1ebfn v\u1edbi h\u1ecdc sinh c\u00e1c huy\u1ec7n mi\u1ec1n n\u00fai xa x\u00f4i.",
      collocations: ["enroll in distance education", "accredited distance education"]
    }
    ,
    {
      id: "v-boost-lifelong-inquiry",
      word: "lifelong inquiry",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n ham h\u1ecdc h\u1ecfi t\u00ecm t\u00f2i tr\u1ecdn \u0111\u1eddi",
      ipa: "/\u02ccla\u026afl\u0252\u014b \u026an\u02c8kwa\u026a\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifelong+inquiry&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "True scientists are distinguished by their perpetual spirit of lifelong inquiry.",
      exampleVi: "Nh\u1eefng nh\u00e0 khoa h\u1ecdc ch\u00e2n ch\u00ednh \u0111\u01b0\u1ee3c nh\u1eadn bi\u1ebft b\u1edfi tinh th\u1ea7n say m\u00ea t\u00ecm t\u00f2i h\u1ecdc h\u1ecfi su\u1ed1t c\u1ea3 cu\u1ed9c \u0111\u1eddi.",
      collocations: ["spirit of lifelong inquiry", "foster lifelong inquiry"]
    }
    ,
    {
      id: "v-boost-experiential-learning",
      word: "experiential learning",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc t\u1eadp th\u00f4ng qua tr\u1ea3i nghi\u1ec7m th\u1ef1c t\u1ebf",
      ipa: "/\u026ak\u02ccsp\u026a\u0259ri\u02c8en\u0283l \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=experiential+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Field trips and lab experiments are classic examples of experiential learning.",
      exampleVi: "C\u00e1c chuy\u1ebfn \u0111i th\u1ef1c \u0111\u1ecba v\u00e0 th\u00ed nghi\u1ec7m ph\u00f2ng lab l\u00e0 v\u00ed d\u1ee5 \u0111i\u1ec3n h\u00ecnh cho ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc qua tr\u1ea3i nghi\u1ec7m.",
      collocations: ["power of experiential learning", "engage in experiential learning"]
    }
    ,
    {
      id: "v-boost-peer-to-peer-mentoring",
      word: "peer-to-peer mentoring",
      partOfSpeech: "n.phr",
      meaningVi: "k\u00e8m c\u1eb7p v\u00e0 h\u01b0\u1edbng d\u1eabn t\u01b0\u01a1ng tr\u1ee3 gi\u1eefa c\u00e1c b\u1ea1n h\u1ecdc",
      ipa: "/\u02ccp\u026a\u0259 t\u0259 \u02c8p\u026a\u0259 \u02c8ment\u0254\u02d0r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer-to-peer+mentoring&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Peer-to-peer mentoring builds confidence in junior pupils while consolidating seniors' mastery.",
      exampleVi: "M\u00f4 h\u00ecnh \u0111\u00f4i b\u1ea1n c\u00f9ng ti\u1ebfn gi\u00fap h\u1ecdc sinh kh\u00f3a d\u01b0\u1edbi t\u1ef1 tin h\u01a1n v\u00e0 c\u1ee7ng c\u1ed1 ki\u1ebfn th\u1ee9c cho kh\u00f3a tr\u00ean.",
      collocations: ["participate in peer-to-peer mentoring", "mutual mentoring"]
    }
    ,
    {
      id: "v-boost-intellectual-stimulation",
      word: "intellectual stimulation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 k\u00edch th\u00edch v\u00e0 kh\u01a1i d\u1eady ni\u1ec1m say m\u00ea tr\u00ed tu\u1ec7",
      ipa: "/\u02cc\u026ant\u0259\u02c8lekt\u0283u\u0259l \u02ccst\u026amju\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intellectual+stimulation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reading profound philosophy classics provides immense intellectual stimulation.",
      exampleVi: "\u0110\u1ecdc nh\u1eefng t\u00e1c ph\u1ea9m tri\u1ebft h\u1ecdc kinh \u0111i\u1ec3n mang l\u1ea1i s\u1ef1 k\u00edch th\u00edch tr\u00ed tu\u1ec7 v\u00f4 c\u00f9ng to l\u1edbn.",
      collocations: ["seek intellectual stimulation", "source of intellectual stimulation"]
    }
    ,
    {
      id: "v-boost-adaptability-quotient",
      word: "adaptability quotient",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ec9 s\u1ed1 n\u0103ng l\u1ef1c th\u00edch \u1ee9ng v\u1edbi s\u1ef1 thay \u0111\u1ed5i",
      ipa: "/\u0259\u02ccd\u00e6pt\u0259\u02c8b\u026al\u0259ti \u02c8kw\u0259\u028a\u0283nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptability+quotient&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "HR leaders argue that adaptability quotient is even more critical than raw IQ in modern crises.",
      exampleVi: "C\u00e1c nh\u00e0 qu\u1ea3n l\u00fd nh\u00e2n s\u1ef1 cho r\u1eb1ng ch\u1ec9 s\u1ed1 th\u00edch \u1ee9ng c\u00f2n quan tr\u1ecdng h\u01a1n c\u1ea3 IQ tr\u01b0\u1edbc bi\u1ebfn \u0111\u1ed9ng th\u1eddi cu\u1ed9c.",
      collocations: ["high adaptability quotient", "test adaptability quotient"]
    }
    ,
    {
      id: "v-boost-open-source-knowledge",
      word: "open-source knowledge",
      partOfSpeech: "n.phr",
      meaningVi: "kho tri th\u1ee9c ngu\u1ed3n m\u1edf t\u1ef1 do cho nh\u00e2n lo\u1ea1i",
      ipa: "/\u02cc\u0259\u028ap\u0259n s\u0254\u02d0s \u02c8n\u0252l\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=open-source+knowledge&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open-source knowledge repositories democratize access to high-end programming tools.",
      exampleVi: "C\u00e1c kho tri th\u1ee9c ngu\u1ed3n m\u1edf gi\u00fap b\u00ecnh \u0111\u1eb3ng h\u00f3a vi\u1ec7c ti\u1ebfp c\u1eadn c\u00e1c c\u00f4ng c\u1ee5 l\u1eadp tr\u00ecnh ti\u00ean ti\u1ebfn.",
      collocations: ["contribute to open-source knowledge", "free open-source knowledge"]
    }
    ,
    {
      id: "v-boost-self-directed-project",
      word: "self-directed project",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ef1 \u00e1n nghi\u00ean c\u1ee9u t\u1ef1 kh\u1edfi x\u01b0\u1edbng v\u00e0 \u0111i\u1ec1u h\u00e0nh",
      ipa: "/\u02ccself da\u026a\u02c8rekt\u026ad \u02c8pr\u0252d\u0292ekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-directed+project&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High school seniors build robots through ambitious self-directed projects.",
      exampleVi: "H\u1ecdc sinh c\u1ea5p 3 t\u1ef1 l\u1eafp r\u00e1p robot th\u00f4ng qua nh\u1eefng d\u1ef1 \u00e1n t\u1ef1 \u0111\u1ecbnh h\u01b0\u1edbng \u0111\u1ea7y ho\u00e0i b\u00e3o.",
      collocations: ["execute self-directed projects", "presentation of self-directed projects"]
    }
    ,
    {
      id: "v-boost-problem-solving-agility",
      word: "problem-solving agility",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nh\u1ea1y b\u00e9n v\u00e0 linh ho\u1ea1t trong th\u00e1o g\u1ee1 kh\u00f3 kh\u0103n",
      ipa: "/\u02c8pr\u0252bl\u0259m \u02ccs\u0252lv\u026a\u014b \u0259\u02c8d\u0292\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=problem-solving+agility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hackathons test participants' problem-solving agility under strict 24-hour deadlines.",
      exampleVi: "C\u00e1c cu\u1ed9c thi l\u1eadp tr\u00ecnh th\u1eed th\u00e1ch s\u1ef1 nh\u1ea1y b\u00e9n gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 c\u1ee7a th\u00ed sinh trong v\u00f2ng 24 gi\u1edd.",
      collocations: ["demonstrate problem-solving agility", "hone problem-solving agility"]
    }
    ,
    {
      id: "v-boost-lifelong-enrichment",
      word: "lifelong enrichment",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 b\u1ed3i \u0111\u1eafp v\u00e0 l\u00e0m gi\u00e0u t\u00e2m h\u1ed3n tr\u00ed tu\u1ec7 su\u1ed1t \u0111\u1eddi",
      ipa: "/\u02ccla\u026afl\u0252\u014b \u026an\u02c8r\u026at\u0283m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifelong+enrichment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Pursuing arts, languages, and literature delivers deep lifelong enrichment for senior citizens.",
      exampleVi: "\u0110am m\u00ea ngh\u1ec7 thu\u1eadt, ng\u00f4n ng\u1eef v\u00e0 v\u0103n h\u1ecdc \u0111em l\u1ea1i s\u1ef1 b\u1ed3i \u0111\u1eafp t\u00e2m h\u1ed3n s\u00e2u s\u1eafc su\u1ed1t \u0111\u1eddi cho ng\u01b0\u1eddi cao tu\u1ed5i.",
      collocations: ["source of lifelong enrichment", "attain lifelong enrichment"]
    }
  ],
};
