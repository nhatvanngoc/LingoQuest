import type { Grade10VocabItem } from "./grade10-data";

/**
 * Ngân hàng từ vựng mở rộng chuyên sâu cho toàn bộ 10 Units Khối 10
 * Khai thác & chuẩn hóa theo SGK Global Success (Bộ GD&ĐT), VietJack, Lời giải hay & Từ điển Cambridge
 * Đảm bảo mỗi Unit đạt từ 50 đến 60+ từ vựng thực tế kèm Collocations, IPA, Audio & Ảnh thực tế.
 */

export const EXPANDED_VOCAB_GRADE10: Record<string, Grade10VocabItem[]> = {
  "unit-1-family-life": [
    {
      id: "v10-u1-nurture",
      word: "nurture",
      partOfSpeech: "v",
      meaningVi: "nu\u00f4i d\u01b0\u1ee1ng, b\u1ed3i \u0111\u1eafp",
      ipa: "/\u02c8n\u025c\u02d0t\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nurture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents strive to nurture strong ethical values in their children.",
      exampleVi: "Cha m\u1eb9 n\u1ed7 l\u1ef1c nu\u00f4i d\u01b0\u1ee1ng c\u00e1c gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c t\u1ed1t \u0111\u1eb9p cho con c\u00e1i.",
      collocations: ["nurture talent", "nurture a bond", "lovingly nurture"]
    },
    {
      id: "v10-u1-extended-family",
      word: "extended family",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1i gia \u0111\u00ecnh nhi\u1ec1u th\u1ebf h\u1ec7",
      ipa: "/\u026ak\u02ccstend\u026ad \u02c8f\u00e6m\u0259li/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extended+family&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "During Tet holidays, our extended family gathers to cook banh chung together.",
      exampleVi: "D\u1ecbp T\u1ebft, \u0111\u1ea1i gia \u0111\u00ecnh t\u00f4i qu\u00e2y qu\u1ea7n c\u00f9ng nhau g\u00f3i b\u00e1nh ch\u01b0ng.",
      collocations: ["live in an extended family", "extended family members"]
    },
    {
      id: "v10-u1-nuclear-family",
      word: "nuclear family",
      partOfSpeech: "n.phr",
      meaningVi: "gia \u0111\u00ecnh h\u1ea1t nh\u00e2n (cha m\u1eb9 v\u00e0 con)",
      ipa: "/\u02ccnju\u02d0kli\u0259 \u02c8f\u00e6m\u0259li/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nuclear+family&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Young couples in big cities often prefer living in a nuclear family.",
      exampleVi: "C\u00e1c c\u1eb7p v\u1ee3 ch\u1ed3ng tr\u1ebb \u1edf th\u00e0nh ph\u1ed1 l\u1edbn th\u01b0\u1eddng th\u00edch s\u1ed1ng trong gia \u0111\u00ecnh h\u1ea1t nh\u00e2n.",
      collocations: ["nuclear family structure", "modern nuclear family"]
    },
    {
      id: "v10-u1-split-chores",
      word: "split chores",
      partOfSpeech: "v.phr",
      meaningVi: "chia s\u1ebb c\u00f4ng vi\u1ec7c nh\u00e0",
      ipa: "/spl\u026at t\u0283\u0254\u02d0rz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=split+chores&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Couples who split chores equally maintain a harmonious home atmosphere.",
      exampleVi: "Nh\u1eefng c\u1eb7p \u0111\u00f4i chia s\u1ebb vi\u1ec7c nh\u00e0 c\u00f4ng b\u1eb1ng s\u1ebd gi\u1eef \u0111\u01b0\u1ee3c b\u1ea7u kh\u00f4ng kh\u00ed h\u00f2a thu\u1eadn.",
      collocations: ["split chores equally", "split household tasks"]
    },
    {
      id: "v10-u1-family-bond",
      word: "family bond",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh c\u1ea3m g\u1eafn k\u1ebft gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li b\u0252nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+bond&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Having dinner together every evening strengthens our family bond.",
      exampleVi: "C\u00f9ng \u0103n t\u1ed1i m\u1ed7i ng\u00e0y gi\u00fap th\u1eaft ch\u1eb7t t\u00ecnh c\u1ea3m gia \u0111\u00ecnh.",
      collocations: ["strengthen family bonds", "close family bond"]
    },
    {
      id: "v10-u1-heavy-lifting",
      word: "heavy lifting",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c n\u1eb7ng nh\u1ecdc th\u1ec3 l\u1ef1c",
      ipa: "/\u02cchevi \u02c8l\u026aft\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heavy+lifting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      exampleEn: "My brother gladly takes care of the heavy lifting when we rearrange furniture.",
      exampleVi: "Anh trai t\u00f4i vui v\u1ebb \u0111\u1ea3m nh\u1eadn vi\u1ec7c n\u1eb7ng nh\u1ecdc khi ch\u00fang t\u00f4i s\u1eafp x\u1ebfp l\u1ea1i \u0111\u1ed3 \u0111\u1ea1c.",
      collocations: ["do the heavy lifting", "heavy lifting jobs"]
    },
    {
      id: "v10-u1-financial-burden",
      word: "financial burden",
      partOfSpeech: "n.phr",
      meaningVi: "g\u00e1nh n\u1eb7ng t\u00e0i ch\u00ednh",
      ipa: "/fa\u026a\u02c8n\u00e6n\u0283l \u02c8b\u025c\u02d0dn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=financial+burden&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sharing household expenses reduces the financial burden on the breadwinner.",
      exampleVi: "Chia s\u1ebb chi ti\u00eau gia \u0111\u00ecnh gi\u00fap gi\u1ea3m b\u1edbt g\u00e1nh n\u1eb7ng t\u00e0i ch\u00ednh cho ng\u01b0\u1eddi tr\u1ee5 c\u1ed9t.",
      collocations: ["ease the financial burden", "bear the financial burden"]
    },
    {
      id: "v10-u1-breadwinner",
      word: "breadwinner",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi tr\u1ee5 c\u1ed9t kinh t\u1ebf gia \u0111\u00ecnh",
      ipa: "/\u02c8bredw\u026an\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breadwinner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Both parents work as breadwinners to secure their children's education.",
      exampleVi: "C\u1ea3 b\u1ed1 v\u00e0 m\u1eb9 \u0111\u1ec1u \u0111i l\u00e0m tr\u1ee5 c\u1ed9t \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o t\u01b0\u01a1ng lai h\u1ecdc v\u1ea5n c\u1ee7a con.",
      collocations: ["sole breadwinner", "primary breadwinner"]
    },
    {
      id: "v10-u1-homemaker",
      word: "homemaker",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi n\u1ed9i tr\u1ee3 qu\u00e1n xuy\u1ebfn gia \u0111\u00ecnh",
      ipa: "/\u02c8h\u0259\u028amme\u026ak\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=homemaker&type=2",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A skilled homemaker keeps the house clean and prepares nutritious meals.",
      exampleVi: "M\u1ed9t ng\u01b0\u1eddi n\u1ed9i tr\u1ee3 kh\u00e9o l\u00e9o gi\u1eef nh\u00e0 c\u1eeda s\u1ea1ch s\u1ebd v\u00e0 n\u1ea5u nh\u1eefng b\u1eefa \u0103n b\u1ed5 d\u01b0\u1ee1ng.",
      collocations: ["dedicated homemaker", "full-time homemaker"]
    },
    {
      id: "v10-u1-household-duties",
      word: "household duties",
      partOfSpeech: "n.phr",
      meaningVi: "nhi\u1ec7m v\u1ee5 gia \u0111\u00ecnh, vi\u1ec7c nh\u00e0",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald \u02c8dju\u02d0tiz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+duties&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each family member has specific household duties assigned every weekend.",
      exampleVi: "M\u1ed7i th\u00e0nh vi\u00ean trong nh\u00e0 \u0111\u1ec1u \u0111\u01b0\u1ee3c ph\u00e2n c\u00f4ng nhi\u1ec7m v\u1ee5 gia \u0111\u00ecnh v\u00e0o cu\u1ed1i tu\u1ea7n.",
      collocations: ["perform household duties", "share household duties"]
    },
    {
      id: "v10-u1-mutual-respect",
      word: "mutual respect",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u00f4n tr\u1ecdng l\u1eabn nhau",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l r\u026a\u02c8spekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+respect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Happy marriages are built on love and mutual respect between partners.",
      exampleVi: "H\u00f4n nh\u00e2n h\u1ea1nh ph\u00fac \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng d\u1ef1a tr\u00ean t\u00ecnh y\u00eau v\u00e0 s\u1ef1 t\u00f4n tr\u1ecdng l\u1eabn nhau.",
      collocations: ["foster mutual respect", "show mutual respect"]
    },
    {
      id: "v10-u1-child-rearing",
      word: "child-rearing",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c nu\u00f4i d\u1ea1y con c\u00e1i",
      ipa: "/\u02c8t\u0283a\u026ald r\u026a\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=child-rearing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Child-rearing requires immense patience, consistency, and affection.",
      exampleVi: "Vi\u1ec7c nu\u00f4i d\u1ea1y con c\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 ki\u00ean nh\u1eabn to l\u1edbn, nh\u1ea5t qu\u00e1n v\u00e0 l\u00f2ng y\u00eau th\u01b0\u01a1ng.",
      collocations: ["child-rearing practices", "responsibilities of child-rearing"]
    },
    {
      id: "v10-u1-quality-time",
      word: "quality time",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eddi gian \u00fd ngh\u0129a d\u00e0nh cho nhau",
      ipa: "/\u02c8kw\u0252l\u0259ti ta\u026am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=quality+time&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Spending quality time playing board games builds lasting family memories.",
      exampleVi: "D\u00e0nh th\u1eddi gian \u00fd ngh\u0129a ch\u01a1i c\u1edd c\u00f9ng nhau t\u1ea1o n\u00ean nh\u1eefng k\u1ef7 ni\u1ec7m gia \u0111\u00ecnh b\u1ec1n ch\u1eb7t.",
      collocations: ["spend quality time", "quality time together"]
    },
    {
      id: "v10-u1-role-model",
      word: "role model",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea5m g\u01b0\u01a1ng s\u00e1ng m\u1eabu m\u1ef1c",
      ipa: "/\u02c8r\u0259\u028al m\u0252dl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=role+model&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents are the primary role models for their children's manners and speech.",
      exampleVi: "Cha m\u1eb9 l\u00e0 nh\u1eefng t\u1ea5m g\u01b0\u01a1ng m\u1eabu m\u1ef1c \u0111\u1ea7u ti\u00ean \u0111\u1ed1i v\u1edbi c\u1eed ch\u1ec9 v\u00e0 l\u1eddi n\u00f3i c\u1ee7a con c\u00e1i.",
      collocations: ["positive role model", "serve as a role model"]
    },
    {
      id: "v10-u1-moral-support",
      word: "moral support",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u1ee7ng h\u1ed9 v\u1ec1 m\u1eb7t tinh th\u1ea7n",
      ipa: "/\u02c8m\u0252r\u0259l s\u0259\u02c8p\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=moral+support&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "My family gave me moral support throughout my strenuous exam period.",
      exampleVi: "Gia \u0111\u00ecnh \u0111\u00e3 d\u00e0nh cho t\u00f4i s\u1ef1 \u1ee7ng h\u1ed9 tinh th\u1ea7n to l\u1edbn trong su\u1ed1t k\u1ef3 thi c\u0103ng th\u1eb3ng.",
      collocations: ["provide moral support", "offer moral support"]
    },
    {
      id: "v10-u1-close-knit",
      word: "close-knit",
      partOfSpeech: "adj",
      meaningVi: "g\u1eafn b\u00f3 kh\u0103ng kh\u00edt",
      ipa: "/\u02cckl\u0259\u028as \u02c8n\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=close-knit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "They grew up in a close-knit community where neighbors always helped each other.",
      exampleVi: "H\u1ecd l\u1edbn l\u00ean trong m\u1ed9t c\u1ed9ng \u0111\u1ed3ng g\u1eafn b\u00f3 kh\u0103ng kh\u00edt, n\u01a1i h\u00e0ng x\u00f3m lu\u00f4n gi\u00fap \u0111\u1ee1 nhau.",
      collocations: ["close-knit family", "close-knit community"]
    },
    {
      id: "v10-u1-sibling-rivalry",
      word: "sibling rivalry",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ganh \u0111ua gi\u1eefa anh ch\u1ecb em",
      ipa: "/\u02c8s\u026abl\u026a\u014b \u02c8ra\u026avlri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sibling+rivalry&type=2",
      imageUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Gentle guidance from parents can effectively resolve sibling rivalry.",
      exampleVi: "S\u1ef1 ch\u1ec9 d\u1eabn nh\u1eb9 nh\u00e0ng c\u1ee7a cha m\u1eb9 c\u00f3 th\u1ec3 gi\u1ea3i quy\u1ebft hi\u1ec7u qu\u1ea3 s\u1ef1 ganh \u0111ua gi\u1eefa anh ch\u1ecb em.",
      collocations: ["overcome sibling rivalry", "prevent sibling rivalry"]
    },
    {
      id: "v10-u1-shared-values",
      word: "shared values",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c chung",
      ipa: "/\u0283e\u0259d \u02c8v\u00e6lju\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shared+values&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A stable family is anchored by shared values of honesty and empathy.",
      exampleVi: "M\u1ed9t gia \u0111\u00ecnh b\u1ec1n v\u1eefng lu\u00f4n neo gi\u1eef c\u00e1c gi\u00e1 tr\u1ecb chung v\u1ec1 s\u1ef1 trung th\u1ef1c v\u00e0 th\u1ea5u c\u1ea3m.",
      collocations: ["uphold shared values", "instill shared values"]
    },
    {
      id: "v10-u1-household-budget",
      word: "household budget",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e2n s\u00e1ch chi ti\u00eau gia \u0111\u00ecnh",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald \u02c8b\u028cd\u0292\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+budget&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Managing the household budget carefully avoids unwanted debt.",
      exampleVi: "Qu\u1ea3n l\u00fd ng\u00e2n s\u00e1ch gia \u0111\u00ecnh c\u1ea9n th\u1eadn gi\u00fap tr\u00e1nh \u0111\u01b0\u1ee3c nh\u1eefng kho\u1ea3n n\u1ee3 ngo\u00e0i \u00fd mu\u1ed1n.",
      collocations: ["manage a household budget", "tight household budget"]
    },
    {
      id: "v10-u1-domestic-responsibilities",
      word: "domestic responsibilities",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00e1ch nhi\u1ec7m vi\u1ec7c nh\u00e0",
      ipa: "/d\u0259\u02c8mest\u026ak r\u026a\u02ccsp\u0252ns\u0259\u02c8b\u026al\u0259tiz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=domestic+responsibilities&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sharing domestic responsibilities fosters gender equality right inside the house.",
      exampleVi: "Chia s\u1ebb tr\u00e1ch nhi\u1ec7m vi\u1ec7c nh\u00e0 th\u00fac \u0111\u1ea9y b\u00ecnh \u0111\u1eb3ng gi\u1edbi ngay trong t\u1ed5 \u1ea5m.",
      collocations: ["handle domestic responsibilities", "balance domestic responsibilities"]
    },
    {
      id: "v10-u1-unconditional-love",
      word: "unconditional love",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh y\u00eau th\u01b0\u01a1ng v\u00f4 \u0111i\u1ec1u ki\u1ec7n",
      ipa: "/\u02cc\u028cnk\u0259n\u02c8d\u026a\u0283\u0259nl l\u028cv/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=unconditional+love&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents offer unconditional love regardless of their children's mistakes.",
      exampleVi: "Cha m\u1eb9 lu\u00f4n d\u00e0nh t\u00ecnh th\u01b0\u01a1ng y\u00eau v\u00f4 \u0111i\u1ec1u ki\u1ec7n d\u00f9 con c\u00e1i c\u00f3 ph\u1ea1m l\u1ed7i l\u1ea7m.",
      collocations: ["shower with unconditional love", "experience unconditional love"]
    },
    {
      id: "v10-u1-family-reunion",
      word: "family reunion",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i sum h\u1ecdp gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li \u02ccri\u02d0\u02c8ju\u02d0ni\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+reunion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We organize an annual family reunion to catch up with distant cousins.",
      exampleVi: "Ch\u00fang t\u00f4i t\u1ed5 ch\u1ee9c bu\u1ed5i sum h\u1ecdp gia \u0111\u00ecnh th\u01b0\u1eddng ni\u00ean \u0111\u1ec3 th\u0103m h\u1ecfi anh em h\u1ecd h\u00e0ng xa.",
      collocations: ["attend a family reunion", "annual family reunion"]
    },
    {
      id: "v10-u1-upbringing",
      word: "upbringing",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 gi\u00e1o d\u1ee5c, nu\u00f4i n\u1ea5ng t\u1eeb nh\u1ecf",
      ipa: "/\u02c8\u028cpbr\u026a\u014b\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=upbringing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "His polite manners reflect his disciplined and loving upbringing.",
      exampleVi: "Th\u00e1i \u0111\u1ed9 l\u1ecbch thi\u1ec7p c\u1ee7a anh \u1ea5y ph\u1ea3n \u00e1nh s\u1ef1 nu\u00f4i d\u1ea1y k\u1ef7 lu\u1eadt v\u00e0 tr\u00e0n ng\u1eadp t\u00ecnh y\u00eau th\u01b0\u01a1ng.",
      collocations: ["strict upbringing", "sheltered upbringing"]
    },
    {
      id: "v10-u1-discipline",
      word: "discipline",
      partOfSpeech: "n / v",
      meaningVi: "k\u1ef7 lu\u1eadt, r\u00e8n luy\u1ec7n khu\u00f4n ph\u00e9p",
      ipa: "/\u02c8d\u026as\u0259pl\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=discipline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Self-discipline learned at home prepares students for independent adult life.",
      exampleVi: "K\u1ef7 lu\u1eadt t\u1ef1 gi\u00e1c h\u1ecdc \u0111\u01b0\u1ee3c \u1edf nh\u00e0 chu\u1ea9n b\u1ecb cho h\u1ecdc sinh b\u01b0\u1edbc v\u00e0o \u0111\u1eddi \u0111\u1ed9c l\u1eadp.",
      collocations: ["maintain discipline", "instill discipline in children"]
    },
    {
      id: "v10-u1-parental-guidance",
      word: "parental guidance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u01b0\u1edbng d\u1eabn, \u0111\u1ecbnh h\u01b0\u1edbng c\u1ee7a cha m\u1eb9",
      ipa: "/p\u0259\u02c8rentl \u02c8\u0261a\u026adns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parental+guidance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teens need empathetic parental guidance rather than harsh punishment.",
      exampleVi: "Tu\u1ed5i teen c\u1ea7n s\u1ef1 \u0111\u1ecbnh h\u01b0\u1edbng th\u1ea5u c\u1ea3m t\u1eeb cha m\u1eb9 h\u01a1n l\u00e0 nh\u1eefng h\u00ecnh ph\u1ea1t n\u1eb7ng n\u1ec1.",
      collocations: ["under parental guidance", "seek parental guidance"]
    },
    {
      id: "v10-u1-conflict-resolution",
      word: "conflict resolution",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u1ea3i quy\u1ebft xung \u0111\u1ed9t \u00f4n h\u00f2a",
      ipa: "/\u02c8k\u0252nfl\u026akt \u02ccrez\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conflict+resolution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning conflict resolution helps family members communicate without screaming.",
      exampleVi: "H\u1ecdc c\u00e1ch gi\u1ea3i quy\u1ebft xung \u0111\u1ed9t gi\u00fap ng\u01b0\u1eddi th\u00e2n trong gia \u0111\u00ecnh trao \u0111\u1ed5i m\u00e0 kh\u00f4ng c\u00e3i v\u00e3.",
      collocations: ["peaceful conflict resolution", "skills in conflict resolution"]
    },
    {
      id: "v10-u1-family-traditions",
      word: "family traditions",
      partOfSpeech: "n.phr",
      meaningVi: "truy\u1ec1n th\u1ed1ng gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li tr\u0259\u02c8d\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+traditions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lighting lanterns on Mid-Autumn Festival is one of our cherished family traditions.",
      exampleVi: "Th\u1eafp l\u1ed3ng \u0111\u00e8n d\u1ecbp Trung Thu l\u00e0 m\u1ed9t trong nh\u1eefng truy\u1ec1n th\u1ed1ng gia \u0111\u00ecnh \u0111\u00e1ng tr\u00e2n qu\u00fd c\u1ee7a ch\u00fang t\u00f4i.",
      collocations: ["preserve family traditions", "pass down family traditions"]
    },
    {
      id: "v10-u1-filial-piety",
      word: "filial piety",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00f2ng hi\u1ebfu th\u1ea3o v\u1edbi cha m\u1eb9, \u00f4ng b\u00e0",
      ipa: "/\u02ccf\u026ali\u0259l \u02c8pa\u026a\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=filial+piety&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Filial piety is a deeply rooted core value in Vietnamese culture.",
      exampleVi: "L\u00f2ng hi\u1ebfu th\u1ea3o l\u00e0 gi\u00e1 tr\u1ecb c\u1ed1t l\u00f5i \u0103n s\u00e2u trong n\u1ec1n v\u0103n h\u00f3a Vi\u1ec7t Nam.",
      collocations: ["practice filial piety", "express filial piety"]
    },
    {
      id: "v10-u1-chores-allocation",
      word: "chores allocation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n c\u00f4ng vi\u1ec7c nh\u00e0 h\u1ee3p l\u00fd",
      ipa: "/t\u0283\u0254\u02d0rz \u02cc\u00e6l\u0259\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chores+allocation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A fair chores allocation chart on the fridge keeps everyone accountable.",
      exampleVi: "B\u1ea3ng ph\u00e2n c\u00f4ng vi\u1ec7c nh\u00e0 c\u00f4ng b\u1eb1ng d\u00e1n tr\u00ean t\u1ee7 l\u1ea1nh gi\u00fap m\u1ecdi ng\u01b0\u1eddi \u0111\u1ec1u c\u00f3 tr\u00e1ch nhi\u1ec7m.",
      collocations: ["fair chores allocation", "daily chores allocation"]
    },
    {
      id: "v10-u1-grocery-shopping",
      word: "grocery shopping",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c \u0111i ch\u1ee3, mua s\u1eafm th\u1ef1c ph\u1ea9m",
      ipa: "/\u02c8\u0261r\u0259\u028as\u0259ri \u02c8\u0283\u0252p\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=grocery+shopping&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Doing grocery shopping together on Sundays is an enjoyable family routine.",
      exampleVi: "C\u00f9ng nhau \u0111i si\u00eau th\u1ecb mua th\u1ee9c \u0103n v\u00e0o Ch\u1ee7 nh\u1eadt l\u00e0 th\u00f3i quen vui v\u1ebb c\u1ee7a c\u1ea3 nh\u00e0.",
      collocations: ["do the grocery shopping", "weekly grocery shopping"]
    },
    {
      id: "v10-u1-laundry",
      word: "laundry",
      partOfSpeech: "n",
      meaningVi: "gi\u1eb7t gi\u0169 qu\u1ea7n \u00e1o",
      ipa: "/\u02c8l\u0254\u02d0ndri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=laundry&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Folding the laundry promptly prevents wrinkles and keeps the bedrooms tidy.",
      exampleVi: "G\u1ea5p qu\u1ea7n \u00e1o gi\u1eb7t gi\u0169 k\u1ecbp th\u1eddi gi\u00fap ch\u1ed1ng nh\u0103n v\u00e0 gi\u1eef ph\u00f2ng ng\u1ee7 g\u1ecdn g\u00e0ng.",
      collocations: ["do the laundry", "fold the laundry", "laundry basket"]
    },
    {
      id: "v10-u1-ironing",
      word: "ironing",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c \u1ee7i/l\u00e0 qu\u1ea7n \u00e1o",
      ipa: "/\u02c8a\u026a\u0259n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ironing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She listens to English podcasts while doing the ironing.",
      exampleVi: "C\u00f4 \u1ea5y v\u1eeba nghe podcast ti\u1ebfng Anh v\u1eeba \u1ee7i qu\u1ea7n \u00e1o.",
      collocations: ["do the ironing", "an ironing board"]
    },
    {
      id: "v10-u1-dishwashing",
      word: "dishwashing",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c r\u1eeda ch\u00e9n b\u00e1t",
      ipa: "/\u02c8d\u026a\u0283\u02ccw\u0252\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dishwashing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using an energy-efficient dishwasher saves water compared to hand dishwashing.",
      exampleVi: "D\u00f9ng m\u00e1y r\u1eeda b\u00e1t ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng \u0111\u1ee1 t\u1ed1n n\u01b0\u1edbc h\u01a1n r\u1eeda ch\u00e9n b\u1eb1ng tay.",
      collocations: ["dishwashing liquid", "take turns doing dishwashing"]
    },
    {
      id: "v10-u1-tidy-up",
      word: "tidy up",
      partOfSpeech: "v.phr",
      meaningVi: "d\u1ecdn d\u1eb9p, s\u1eafp x\u1ebfp ng\u0103n n\u1eafp",
      ipa: "/\u02c8ta\u026adi \u028cp/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tidy+up&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The children tidy up their study desks before heading to bed.",
      exampleVi: "T\u1ee5i nh\u1ecf d\u1ecdn d\u1eb9p b\u00e0n h\u1ecdc ng\u0103n n\u1eafp tr\u01b0\u1edbc khi \u0111i ng\u1ee7.",
      collocations: ["tidy up the room", "tidy up clutter"]
    },
    {
      id: "v10-u1-vacuum-the-floor",
      word: "vacuum the floor",
      partOfSpeech: "v.phr",
      meaningVi: "h\u00fat b\u1ee5i s\u00e0n nh\u00e0",
      ipa: "/\u02c8v\u00e6kju\u02d0m \u00f0\u0259 fl\u0254\u02d0r/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vacuum+the+floor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He vacuums the living room carpet every Saturday morning.",
      exampleVi: "Anh \u1ea5y h\u00fat b\u1ee5i th\u1ea3m ph\u00f2ng kh\u00e1ch v\u00e0o m\u1ed7i s\u00e1ng th\u1ee9 B\u1ea3y.",
      collocations: ["vacuum the floor thoroughly", "vacuum cleaner"]
    },
    {
      id: "v10-u1-mop-the-floor",
      word: "mop the floor",
      partOfSpeech: "v.phr",
      meaningVi: "lau s\u00e0n nh\u00e0",
      ipa: "/m\u0252p \u00f0\u0259 fl\u0254\u02d0r/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mop+the+floor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "After sweeping away dust, she mops the floor with lavender scented water.",
      exampleVi: "Sau khi qu\u00e9t s\u1ea1ch b\u1ee5i, c\u00f4 \u1ea5y lau s\u00e0n b\u1eb1ng n\u01b0\u1edbc th\u01a1m h\u01b0\u01a1ng hoa o\u1ea3i h\u01b0\u01a1ng.",
      collocations: ["sweep and mop the floor", "mop head"]
    },
    {
      id: "v10-u1-take-out-the-trash",
      word: "take out the trash",
      partOfSpeech: "v.phr",
      meaningVi: "\u0111\u1ed5 r\u00e1c \u0111\u00fang gi\u1edd",
      ipa: "/te\u026ak a\u028at \u00f0\u0259 tr\u00e6\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=take+out+the+trash&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "It is my younger brother's duty to take out the trash each evening at 7 PM.",
      exampleVi: "Nhi\u1ec7m v\u1ee5 c\u1ee7a em trai t\u00f4i l\u00e0 \u0111i \u0111\u1ed5 r\u00e1c v\u00e0o m\u1ed7i 7 gi\u1edd t\u1ed1i.",
      collocations: ["take out the trash daily", "sort and take out the trash"]
    },
    {
      id: "v10-u1-appreciative",
      word: "appreciative",
      partOfSpeech: "adj",
      meaningVi: "bi\u1ebft \u01a1n, tr\u00e2n tr\u1ecdng",
      ipa: "/\u0259\u02c8pri\u02d0\u0283\u0259t\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=appreciative&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Children become more appreciative when they actively participate in household work.",
      exampleVi: "Tr\u1ebb em s\u1ebd bi\u1ebft \u01a1n v\u00e0 tr\u00e2n tr\u1ecdng h\u01a1n khi ch\u00fang ch\u1ee7 \u0111\u1ed9ng tham gia l\u00e0m vi\u1ec7c nh\u00e0.",
      collocations: ["be deeply appreciative", "appreciative smile"]
    },
    {
      id: "v10-u1-harmonious",
      word: "harmonious",
      partOfSpeech: "adj",
      meaningVi: "h\u00e0i h\u00f2a, \u00eam \u1ea5m",
      ipa: "/h\u0251\u02d0\u02c8m\u0259\u028ani\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=harmonious&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mutual understanding between generations creates a harmonious family life.",
      exampleVi: "S\u1ef1 th\u1ea5u hi\u1ec3u gi\u1eefa c\u00e1c th\u1ebf h\u1ec7 t\u1ea1o n\u00ean m\u1ed9t \u0111\u1eddi s\u1ed1ng gia \u0111\u00ecnh \u00eam \u1ea5m, thu\u1eadn h\u00f2a.",
      collocations: ["harmonious relationship", "harmonious atmosphere"]
    },
    {
      id: "v10-u1-cherish",
      word: "cherish",
      partOfSpeech: "v",
      meaningVi: "tr\u00e2n tr\u1ecdng, y\u00eau qu\u00fd",
      ipa: "/\u02c8t\u0283er\u026a\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cherish&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "I cherish every moment spent listening to my grandparents' folk stories.",
      exampleVi: "T\u00f4i lu\u00f4n tr\u00e2n tr\u1ecdng t\u1eebng kho\u1ea3nh kh\u1eafc ng\u1ed3i nghe \u00f4ng b\u00e0 k\u1ec3 chuy\u1ec7n x\u01b0a.",
      collocations: ["cherish memories", "cherish every moment"]
    }
    ,
    {
      id: "v10-extra-household-finances",
      word: "household finances",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e0i ch\u00ednh gia \u0111\u00ecnh",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald \u02c8fa\u026an\u00e6ns\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+finances&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Couples should openly discuss household finances each month.",
      exampleVi: "V\u1ee3 ch\u1ed3ng n\u00ean c\u1edfi m\u1edf th\u1ea3o lu\u1eadn v\u1ec1 t\u00e0i ch\u00ednh gia \u0111\u00ecnh m\u1ed7i th\u00e1ng.",
      collocations: ["manage household finances", "track household finances"]
    }
    ,
    {
      id: "v10-extra-family-tree",
      word: "family tree",
      partOfSpeech: "n.phr",
      meaningVi: "gia ph\u1ea3, c\u00e2y ph\u1ea3 h\u1ec7 d\u00f2ng h\u1ecd",
      ipa: "/\u02c8f\u00e6m\u0259li tri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+tree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The grandfather showed the children their ancient family tree.",
      exampleVi: "\u00d4ng n\u1ed9i ch\u1ec9 cho c\u00e1c ch\u00e1u xem cu\u1ed1n gia ph\u1ea3 c\u1ed5 c\u1ee7a d\u00f2ng h\u1ecd.",
      collocations: ["trace a family tree", "family tree chart"]
    }
    ,
    {
      id: "v10-extra-chores-rotation",
      word: "chores rotation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 lu\u00e2n phi\u00ean l\u00e0m vi\u1ec7c nh\u00e0",
      ipa: "/t\u0283\u0254\u02d0rz r\u0259\u028a\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chores+rotation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Having a chores rotation schedule ensures everyone helps out fairly.",
      exampleVi: "C\u00f3 l\u1ecbch lu\u00e2n phi\u00ean l\u00e0m vi\u1ec7c nh\u00e0 \u0111\u1ea3m b\u1ea3o m\u1ecdi ng\u01b0\u1eddi \u0111\u1ec1u gi\u00fap \u0111\u1ee1 c\u00f4ng b\u1eb1ng.",
      collocations: ["weekly chores rotation", "follow chores rotation"]
    }
    ,
    {
      id: "v10-extra-parental-blessing",
      word: "parental blessing",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1eddi ch\u00fac ph\u00fac c\u1ee7a cha m\u1eb9",
      ipa: "/p\u0259\u02c8rentl \u02c8bles\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parental+blessing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The bride and groom knelt to ask for parental blessing on their wedding day.",
      exampleVi: "C\u00f4 d\u00e2u v\u00e0 ch\u00fa r\u1ec3 qu\u1ef3 xin l\u1eddi ch\u00fac ph\u00fac c\u1ee7a cha m\u1eb9 trong ng\u00e0y c\u01b0\u1edbi.",
      collocations: ["receive parental blessing", "seek parental blessing"]
    }
    ,
    {
      id: "v10-extra-nurturing-environment",
      word: "nurturing environment",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4i tr\u01b0\u1eddng nu\u00f4i d\u01b0\u1ee1ng y\u00eau th\u01b0\u01a1ng",
      ipa: "/\u02c8n\u025c\u02d0t\u0283\u0259r\u026a\u014b \u026an\u02c8va\u026ar\u0259nm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nurturing+environment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Growing up in a nurturing environment helps children become confident adults.",
      exampleVi: "L\u1edbn l\u00ean trong m\u00f4i tr\u01b0\u1eddng y\u00eau th\u01b0\u01a1ng gi\u00fap tr\u1ebb tr\u1edf th\u00e0nh ng\u01b0\u1eddi l\u1edbn t\u1ef1 tin.",
      collocations: ["provide a nurturing environment", "create a nurturing environment"]
    }
    ,
    {
      id: "mega-unit-1-household-finances",
      word: "household finances",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e0i ch\u00ednh v\u00e0 chi ti\u00eau trong gia \u0111\u00ecnh",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald \u02c8fa\u026an\u00e6ns\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+finances&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Couples should openly discuss household finances to avoid misunderstandings.",
      exampleVi: "C\u00e1c c\u1eb7p v\u1ee3 ch\u1ed3ng n\u00ean th\u1ea3o lu\u1eadn c\u1edfi m\u1edf v\u1ec1 t\u00e0i ch\u00ednh gia \u0111\u00ecnh \u0111\u1ec3 tr\u00e1nh hi\u1ec3u l\u1ea7m.",
      collocations: ["manage household finances", "budget for household finances"]
    }
    ,
    {
      id: "mega-unit-1-family-reunion",
      word: "family reunion",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i sum h\u1ecdp gia \u0111\u00ecnh \u1ea5m c\u00fang",
      ipa: "/\u02c8f\u00e6m\u0259li \u02ccri\u02d0\u02c8ju\u02d0ni\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+reunion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tet holiday is the most cherished occasion for family reunions across Vietnam.",
      exampleVi: "D\u1ecbp T\u1ebft l\u00e0 c\u01a1 h\u1ed9i qu\u00fd gi\u00e1 nh\u1ea5t cho nh\u1eefng bu\u1ed5i \u0111o\u00e0n vi\u00ean gia \u0111\u00ecnh tr\u00ean kh\u1eafp Vi\u1ec7t Nam.",
      collocations: ["annual family reunion", "host a family reunion"]
    }
    ,
    {
      id: "mega-unit-1-mutual-respect",
      word: "mutual respect",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u00f4n tr\u1ecdng l\u1eabn nhau gi\u1eefa c\u00e1c th\u00e0nh vi\u00ean",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l r\u026a\u02c8spekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+respect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A peaceful household relies on mutual respect between parents and teenagers.",
      exampleVi: "M\u1ed9t m\u00e1i \u1ea5m h\u00f2a thu\u1eadn d\u1ef1a tr\u00ean s\u1ef1 t\u00f4n tr\u1ecdng l\u1eabn nhau gi\u1eefa cha m\u1eb9 v\u00e0 con c\u00e1i.",
      collocations: ["foster mutual respect", "treat with mutual respect"]
    }
    ,
    {
      id: "mega-unit-1-parental-guidance",
      word: "parental guidance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ecbnh h\u01b0\u1edbng v\u00e0 ch\u1ec9 d\u1eabn c\u1ee7a cha m\u1eb9",
      ipa: "/p\u0259\u02c8rentl \u02c8\u0261a\u026adns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parental+guidance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Children navigate online risks much better under loving parental guidance.",
      exampleVi: "Tr\u1ebb em v\u01b0\u1ee3t qua c\u00e1c r\u1ee7i ro tr\u00ean m\u1ea1ng t\u1ed1t h\u01a1n nhi\u1ec1u khi c\u00f3 s\u1ef1 ch\u1ec9 d\u1eabn y\u00eau th\u01b0\u01a1ng c\u1ee7a cha m\u1eb9.",
      collocations: ["seek parental guidance", "under parental guidance"]
    }
    ,
    {
      id: "mega-unit-1-domestic-harmony",
      word: "domestic harmony",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u00f2a thu\u1eadn trong \u0111\u1eddi s\u1ed1ng gia \u0111\u00ecnh",
      ipa: "/d\u0259\u02c8mest\u026ak \u02c8h\u0251\u02d0m\u0259ni/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=domestic+harmony&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sharing chores equally contributes directly to domestic harmony.",
      exampleVi: "Chia s\u1ebb vi\u1ec7c nh\u00e0 c\u00f4ng b\u1eb1ng \u0111\u00f3ng g\u00f3p tr\u1ef1c ti\u1ebfp v\u00e0o s\u1ef1 h\u00f2a thu\u1eadn gia \u0111\u00ecnh.",
      collocations: ["maintain domestic harmony", "disrupt domestic harmony"]
    }
    ,
    {
      id: "mega-unit-1-chores-allocation",
      word: "chores allocation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n c\u00f4ng vi\u1ec7c nh\u00e0 h\u1ee3p l\u00fd",
      ipa: "/t\u0283\u0254\u02d0z \u02cc\u00e6l\u0259\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chores+allocation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A fair chores allocation chart on the fridge keeps everyone accountable.",
      exampleVi: "B\u1ea3ng ph\u00e2n c\u00f4ng vi\u1ec7c nh\u00e0 c\u00f4ng b\u1eb1ng d\u00e1n tr\u00ean t\u1ee7 l\u1ea1nh gi\u00fap m\u1ecdi ng\u01b0\u1eddi c\u00f3 tr\u00e1ch nhi\u1ec7m.",
      collocations: ["agree on chores allocation", "fair chores allocation"]
    }
    ,
    {
      id: "mega-unit-1-filial-piety",
      word: "filial piety",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00f2ng hi\u1ebfu th\u1ea3o v\u1edbi cha m\u1eb9 \u00f4ng b\u00e0",
      ipa: "/\u02c8f\u026ali\u0259l \u02c8pa\u026a\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=filial+piety&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Filial piety is a cornerstone of traditional Vietnamese ethical values.",
      exampleVi: "L\u00f2ng hi\u1ebfu th\u1ea3o l\u00e0 m\u1ed9t tr\u1ee5 c\u1ed9t trong gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c truy\u1ec1n th\u1ed1ng c\u1ee7a ng\u01b0\u1eddi Vi\u1ec7t.",
      collocations: ["practice filial piety", "deep filial piety"]
    }
    ,
    {
      id: "mega-unit-1-moral-upbringing",
      word: "moral upbringing",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 gi\u00e1o d\u1ee5c \u0111\u1ea1o \u0111\u1ee9c t\u1eeb thu\u1edf nh\u1ecf",
      ipa: "/\u02c8m\u0252r\u0259l \u02c8\u028cpbr\u026a\u014b\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=moral+upbringing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her politeness and honesty reflect a rigorous moral upbringing at home.",
      exampleVi: "S\u1ef1 l\u1ec5 ph\u00e9p v\u00e0 t\u00ednh trung th\u1ef1c ph\u1ea3n \u00e1nh s\u1ef1 d\u1ea1y d\u1ed7 \u0111\u1ea1o \u0111\u1ee9c nghi\u00eam c\u1ea9n t\u1eeb gia \u0111\u00ecnh.",
      collocations: ["credit for moral upbringing", "sound moral upbringing"]
    }
    ,
    {
      id: "mega-unit-1-family-bond",
      word: "family bond",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh c\u1ea3m g\u1eafn k\u1ebft thi\u00eang li\u00eang gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li b\u0252nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+bond&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cooking dinner together on weekends strengthens the family bond.",
      exampleVi: "C\u00f9ng nhau n\u1ea5u b\u1eefa t\u1ed1i v\u00e0o cu\u1ed1i tu\u1ea7n gi\u00fap th\u1eaft ch\u1eb7t t\u00ecnh c\u1ea3m g\u1eafn k\u1ebft gia \u0111\u00ecnh.",
      collocations: ["strengthen family bonds", "cherish family bonds"]
    }
    ,
    {
      id: "mega-unit-1-role-model",
      word: "role model",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea5m g\u01b0\u01a1ng s\u00e1ng \u0111\u1ec3 noi theo",
      ipa: "/\u02c8r\u0259\u028al m\u0252dl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=role+model&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Elder brothers often serve as a role model for their younger siblings.",
      exampleVi: "Anh trai th\u01b0\u1eddng \u0111\u00f3ng vai tr\u00f2 nh\u01b0 m\u1ed9t t\u1ea5m g\u01b0\u01a1ng s\u00e1ng cho c\u00e1c em noi theo.",
      collocations: ["positive role model", "serve as a role model"]
    }
    ,
    {
      id: "mega-unit-1-quality-time",
      word: "quality time",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eddi gian ch\u1ea5t l\u01b0\u1ee3ng d\u00e0nh cho nhau",
      ipa: "/\u02c8kw\u0252l\u0259ti ta\u026am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=quality+time&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents should set aside quality time each evening to converse with their kids.",
      exampleVi: "Cha m\u1eb9 n\u00ean d\u00e0nh th\u1eddi gian qu\u00fd b\u00e1u m\u1ed7i bu\u1ed5i t\u1ed1i \u0111\u1ec3 tr\u00f2 chuy\u1ec7n c\u00f9ng con c\u00e1i.",
      collocations: ["spend quality time", "valuable quality time"]
    }
    ,
    {
      id: "mega-unit-1-sibling-rivalry",
      word: "sibling rivalry",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u1ea1nh tranh t\u1ecb n\u1ea1nh gi\u1eefa anh ch\u1ecb em",
      ipa: "/\u02c8s\u026abl\u026a\u014b \u02c8ra\u026avlri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sibling+rivalry&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Encouraging cooperation rather than comparison mitigates sibling rivalry.",
      exampleVi: "Khuy\u1ebfn kh\u00edch h\u1ee3p t\u00e1c thay v\u00ec so s\u00e1nh gi\u00fap gi\u1ea3m b\u1edbt s\u1ef1 t\u1ecb n\u1ea1nh gi\u1eefa anh ch\u1ecb em.",
      collocations: ["resolve sibling rivalry", "cause sibling rivalry"]
    }
    ,
    {
      id: "mega-unit-1-nuclear-family",
      word: "nuclear family",
      partOfSpeech: "n.phr",
      meaningVi: "gia \u0111\u00ecnh h\u1ea1t nh\u00e2n (ch\u1ec9 b\u1ed1 m\u1eb9 v\u00e0 con)",
      ipa: "/\u02ccnju\u02d0kli\u0259 \u02c8f\u00e6m\u0259li/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nuclear+family&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The nuclear family is the predominant living structure in modern cities.",
      exampleVi: "Gia \u0111\u00ecnh h\u1ea1t nh\u00e2n l\u00e0 m\u00f4 h\u00ecnh sinh s\u1ed1ng ph\u1ed5 bi\u1ebfn nh\u1ea5t t\u1ea1i c\u00e1c \u0111\u00f4 th\u1ecb hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["live in a nuclear family", "rise of the nuclear family"]
    }
    ,
    {
      id: "mega-unit-1-extended-family",
      word: "extended family",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1i gia \u0111\u00ecnh nhi\u1ec1u th\u1ebf h\u1ec7 s\u1ed1ng chung",
      ipa: "/\u026ak\u02ccstend\u026ad \u02c8f\u00e6m\u0259li/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extended+family&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Living in an extended family allows grandparents to assist with childcare.",
      exampleVi: "S\u1ed1ng trong \u0111\u1ea1i gia \u0111\u00ecnh nhi\u1ec1u th\u1ebf h\u1ec7 gi\u00fap \u00f4ng b\u00e0 c\u00f3 th\u1ec3 h\u1ed7 tr\u1ee3 ch\u0103m s\u00f3c con tr\u1ebb.",
      collocations: ["support from extended family", "member of an extended family"]
    }
    ,
    {
      id: "mega-unit-1-homemaker",
      word: "homemaker",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi n\u1ed9i tr\u1ee3 \u0111\u1ea3m \u0111ang ch\u0103m s\u00f3c t\u1ed5 \u1ea5m",
      ipa: "/\u02c8h\u0259\u028amme\u026ak\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=homemaker&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She decided to become a full-time homemaker to nurture her three toddlers.",
      exampleVi: "B\u00e0 quy\u1ebft \u0111\u1ecbnh tr\u1edf th\u00e0nh ng\u01b0\u1eddi n\u1ed9i tr\u1ee3 to\u00e0n th\u1eddi gian \u0111\u1ec3 ch\u0103m s\u00f3c ba \u0111\u1ee9a con th\u01a1.",
      collocations: ["dedicated homemaker", "role of a homemaker"]
    }
    ,
    {
      id: "mega-unit-1-breadwinner",
      word: "breadwinner",
      partOfSpeech: "n",
      meaningVi: "tr\u1ee5 c\u1ed9t ki\u1ebfm ti\u1ec1n nu\u00f4i gia \u0111\u00ecnh",
      ipa: "/\u02c8bredw\u026an\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breadwinner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "In modern households, both husband and wife often act as co-breadwinners.",
      exampleVi: "Trong c\u00e1c gia \u0111\u00ecnh hi\u1ec7n \u0111\u1ea1i, c\u1ea3 v\u1ee3 v\u00e0 ch\u1ed3ng th\u01b0\u1eddng c\u00f9ng l\u00e0 tr\u1ee5 c\u1ed9t ki\u1ebfm thu nh\u1eadp.",
      collocations: ["primary breadwinner", "sole breadwinner"]
    }
    ,
    {
      id: "mega-unit-1-groceries",
      word: "groceries",
      partOfSpeech: "n.pl",
      meaningVi: "th\u1ef1c ph\u1ea9m v\u00e0 \u0111\u1ed3 d\u00f9ng gia \u0111\u00ecnh mua s\u1eafm",
      ipa: "/\u02c8\u0261r\u0259\u028as\u0259riz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=groceries&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He stops by the local supermarket to pick up fresh groceries after work.",
      exampleVi: "Anh gh\u00e9 qua si\u00eau th\u1ecb \u0111\u1ecba ph\u01b0\u01a1ng \u0111\u1ec3 mua th\u1ef1c ph\u1ea9m t\u01b0\u01a1i s\u1ed1ng sau gi\u1edd tan s\u1edf.",
      collocations: ["buy groceries", "carry groceries"]
    }
    ,
    {
      id: "mega-unit-1-ironing",
      word: "ironing",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c l\u00e0 \u1ee7i qu\u1ea7n \u00e1o ph\u1eb3ng phiu",
      ipa: "/\u02c8a\u026a\u0259n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ironing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Listening to audiobooks makes Sunday afternoon ironing enjoyable.",
      exampleVi: "Nghe s\u00e1ch n\u00f3i khi\u1ebfn c\u00f4ng vi\u1ec7c l\u00e0 \u1ee7i qu\u1ea7n \u00e1o chi\u1ec1u Ch\u1ee7 nh\u1eadt tr\u1edf n\u00ean th\u00fa v\u1ecb.",
      collocations: ["do the ironing", "pile of ironing"]
    }
    ,
    {
      id: "mega-unit-1-laundry-detergent",
      word: "laundry detergent",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ed9t gi\u1eb7t ho\u1eb7c n\u01b0\u1edbc gi\u1eb7t qu\u1ea7n \u00e1o",
      ipa: "/\u02c8l\u0254\u02d0ndri d\u026a\u02c8t\u025c\u02d0d\u0292\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=laundry+detergent&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using eco-friendly laundry detergent protects clothes and river ecosystems.",
      exampleVi: "D\u00f9ng n\u01b0\u1edbc gi\u1eb7t th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng gi\u00fap b\u1ea3o v\u1ec7 v\u1ea3i v\u00f3c v\u00e0 ngu\u1ed3n n\u01b0\u1edbc.",
      collocations: ["eco-friendly laundry detergent", "measure laundry detergent"]
    }
    ,
    {
      id: "mega-unit-1-vacuum-cleaner",
      word: "vacuum cleaner",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e1y h\u00fat b\u1ee5i s\u00e0n nh\u00e0",
      ipa: "/\u02c8v\u00e6kju\u02d0m kli\u02d0n\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vacuum+cleaner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A robotic vacuum cleaner automatically navigates the living room rugs.",
      exampleVi: "Robot h\u00fat b\u1ee5i t\u1ef1 \u0111\u1ed9ng di chuy\u1ec3n l\u00e0m s\u1ea1ch c\u00e1c t\u1ea5m th\u1ea3m trong ph\u00f2ng kh\u00e1ch.",
      collocations: ["run the vacuum cleaner", "cordless vacuum cleaner"]
    }
    ,
    {
      id: "mega-unit-1-dishwashing-liquid",
      word: "dishwashing liquid",
      partOfSpeech: "n.phr",
      meaningVi: "n\u01b0\u1edbc r\u1eeda b\u00e1t di\u1ec7t khu\u1ea9n",
      ipa: "/\u02c8d\u026a\u0283w\u0252\u0283\u026a\u014b \u02c8l\u026akw\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dishwashing+liquid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She chooses organic dishwashing liquid with gentle lemon scent.",
      exampleVi: "C\u00f4 ch\u1ecdn n\u01b0\u1edbc r\u1eeda ch\u00e9n h\u1eefu c\u01a1 v\u1edbi h\u01b0\u01a1ng chanh t\u1ef1 nhi\u00ean d\u1ecbu nh\u1eb9 cho da tay.",
      collocations: ["bottle of dishwashing liquid", "natural dishwashing liquid"]
    }
    ,
    {
      id: "mega-unit-1-family-tree",
      word: "family tree",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ea3 h\u1ec7 gia ph\u1ea3 c\u00e1c \u0111\u1eddi d\u00f2ng h\u1ecd",
      ipa: "/\u02c8f\u00e6m\u0259li tri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+tree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The grandfather showed the youngsters their family tree tracing back ten generations.",
      exampleVi: "Ng\u01b0\u1eddi \u00f4ng ch\u1ec9 cho l\u0169 tr\u1ebb xem c\u00e2y gia ph\u1ea3 d\u00f2ng h\u1ecd l\u01b0u truy\u1ec1n m\u01b0\u1eddi th\u1ebf h\u1ec7.",
      collocations: ["trace the family tree", "draw a family tree"]
    }
    ,
    {
      id: "mega-unit-1-chores-checklist",
      word: "chores checklist",
      partOfSpeech: "n.phr",
      meaningVi: "danh s\u00e1ch ki\u1ec3m tra c\u00e1c vi\u1ec7c nh\u00e0 c\u1ea7n l\u00e0m",
      ipa: "/t\u0283\u0254\u02d0z \u02c8t\u0283ekl\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chores+checklist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tick off each completed task on the daily chores checklist.",
      exampleVi: "\u0110\u00e1nh d\u1ea5u v\u00e0o t\u1eebng c\u00f4ng vi\u1ec7c \u0111\u00e3 ho\u00e0n th\u00e0nh trong danh m\u1ee5c vi\u1ec7c nh\u00e0 m\u1ed7i ng\u00e0y.",
      collocations: ["follow a chores checklist", "daily chores checklist"]
    }
    ,
    {
      id: "mega-unit-1-tidy-up",
      word: "tidy up",
      partOfSpeech: "phr.v",
      meaningVi: "d\u1ecdn d\u1eb9p v\u00e0 s\u1eafp x\u1ebfp g\u1ecdn g\u00e0ng ng\u0103n n\u1eafp",
      ipa: "/\u02c8ta\u026adi \u028cp/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tidy+up&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Please tidy up your study desk before turning in for bed.",
      exampleVi: "L\u00e0m \u01a1n h\u00e3y d\u1ecdn d\u1eb9p b\u00e0n h\u1ecdc c\u1ee7a con th\u1eadt ng\u0103n n\u1eafp tr\u01b0\u1edbc khi \u0111i ng\u1ee7.",
      collocations: ["tidy up the bedroom", "quick tidy up"]
    }
    ,
    {
      id: "mega-unit-1-mop-the-floor",
      word: "mop the floor",
      partOfSpeech: "v.phr",
      meaningVi: "lau ch\u00f9i s\u00e0n nh\u00e0 s\u1ea1ch s\u1ebd",
      ipa: "/m\u0252p \u00f0\u0259 fl\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mop+the+floor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He mops the kitchen floor twice a week to remove greasy stains.",
      exampleVi: "Anh \u1ea5y lau s\u00e0n b\u1ebfp hai l\u1ea7n m\u1ed9t tu\u1ea7n \u0111\u1ec3 lo\u1ea1i b\u1ecf c\u00e1c v\u1ebft d\u1ea7u m\u1ee1 c\u1ee9ng \u0111\u1ea7u.",
      collocations: ["mop the floor thoroughly", "sweep and mop the floor"]
    }
    ,
    {
      id: "mega-unit-1-take-out-the-trash",
      word: "take out the trash",
      partOfSpeech: "v.phr",
      meaningVi: "\u0111\u1ed5 r\u00e1c v\u00e0 v\u1ee9t b\u1ecf r\u00e1c th\u1ea3i sinh ho\u1ea1t",
      ipa: "/te\u026ak a\u028at \u00f0\u0259 tr\u00e6\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=take+out+the+trash&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "It is his designated turn to take out the trash before 8 PM.",
      exampleVi: "\u0110\u1ebfn l\u01b0\u1ee3t anh \u1ea5y ph\u1ea3i \u0111i \u0111\u1ed5 r\u00e1c tr\u01b0\u1edbc 8 gi\u1edd t\u1ed1i theo l\u1ecbch ph\u00e2n c\u00f4ng.",
      collocations: ["take out the trash daily", "forget to take out the trash"]
    }
    ,
    {
      id: "mega-unit-1-set-the-table",
      word: "set the table",
      partOfSpeech: "v.phr",
      meaningVi: "b\u00e0y b\u00e1t \u0111\u0169a chu\u1ea9n b\u1ecb b\u1eefa \u0103n",
      ipa: "/set \u00f0\u0259 \u02c8te\u026abl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=set+the+table&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The children love helping their grandmother set the table with bowls and chopsticks.",
      exampleVi: "Nh\u1eefng \u0111\u1ee9a tr\u1ebb th\u00edch gi\u00fap b\u00e0 b\u00e0y bi\u1ec7n b\u00e1t \u0111\u0169a l\u00ean b\u00e0n \u0103n tr\u01b0\u1edbc b\u1eefa c\u01a1m.",
      collocations: ["set the table for dinner", "help set the table"]
    }
    ,
    {
      id: "mega-unit-1-household-harmony",
      word: "household harmony",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 thu\u1eadn h\u00f2a v\u00e0 vui v\u1ebb trong gia \u0111\u00ecnh",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald \u02c8h\u0251\u02d0m\u0259ni/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+harmony&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open dialogue between generations safeguards lasting household harmony.",
      exampleVi: "\u0110\u1ed1i tho\u1ea1i c\u1edfi m\u1edf gi\u1eefa c\u00e1c th\u1ebf h\u1ec7 g\u00ecn gi\u1eef s\u1ef1 h\u00f2a thu\u1eadn b\u1ec1n v\u1eefng trong gia \u0111\u00ecnh.",
      collocations: ["promote household harmony", "cherish household harmony"]
    }
    ,
    {
      id: "mega-unit-1-household-chore",
      word: "household chore",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng vi\u1ec7c v\u1eb7t vi\u1ec7c nh\u00e0 th\u01b0\u1eddng ng\u00e0y",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald t\u0283\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+chore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Children develop a sense of responsibility by helping with household chores every weekend.",
      exampleVi: "Tr\u1ebb em ph\u00e1t tri\u1ec3n tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m khi gi\u00fap \u0111\u1ee1 l\u00e0m c\u00e1c c\u00f4ng vi\u1ec7c nh\u00e0 m\u1ed7i cu\u1ed1i tu\u1ea7n.",
      collocations: ["do household chores", "share household chores"]
    }
    ,
    {
      id: "mega-unit-1-family-bond",
      word: "family bond",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh c\u1ea3m g\u1eafn k\u1ebft b\u1ec1n ch\u1eb7t gi\u1eefa c\u00e1c th\u00e0nh vi\u00ean",
      ipa: "/\u02c8f\u00e6m\u0259li b\u0252nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+bond&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Shared evening dinners strengthen the emotional family bond across generations.",
      exampleVi: "Nh\u1eefng b\u1eefa c\u01a1m t\u1ed1i sum v\u1ea7y c\u00f9ng nhau th\u1eaft ch\u1eb7t t\u00ecnh c\u1ea3m g\u1eafn k\u1ebft gia \u0111\u00ecnh qua nhi\u1ec1u th\u1ebf h\u1ec7.",
      collocations: ["strengthen family bond", "deep family bond"]
    }
    ,
    {
      id: "mega-unit-1-filial-piety",
      word: "filial piety",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00f2ng hi\u1ebfu th\u1ea3o v\u1edbi cha m\u1eb9 \u00f4ng b\u00e0",
      ipa: "/\u02c8f\u026ali\u0259l \u02c8pa\u026a\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=filial+piety&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Filial piety is considered a paramount moral virtue in traditional Vietnamese families.",
      exampleVi: "L\u00f2ng hi\u1ebfu th\u1ea3o \u0111\u01b0\u1ee3c xem l\u00e0 chu\u1ea9n m\u1ef1c \u0111\u1ea1o \u0111\u1ee9c t\u1ed1i th\u01b0\u1ee3ng trong c\u00e1c gia \u0111\u00ecnh Vi\u1ec7t Nam truy\u1ec1n th\u1ed1ng.",
      collocations: ["practice filial piety", "virtue of filial piety"]
    }
    ,
    {
      id: "mega-unit-1-mutual-respect",
      word: "mutual respect",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u00f4n tr\u1ecdng l\u1eabn nhau gi\u1eefa v\u1ee3 ch\u1ed3ng con c\u00e1i",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l r\u026a\u02c8spekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+respect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Healthy families cultivate mutual respect and attentive communication.",
      exampleVi: "C\u00e1c gia \u0111\u00ecnh ti\u1ebfn b\u1ed9 lu\u00f4n vun \u0111\u1eafp s\u1ef1 t\u00f4n tr\u1ecdng l\u1eabn nhau v\u00e0 giao ti\u1ebfp l\u1eafng nghe ch\u00e2n th\u00e0nh.",
      collocations: ["foster mutual respect", "treat with mutual respect"]
    }
    ,
    {
      id: "mega-unit-1-parental-guidance",
      word: "parental guidance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ecbnh h\u01b0\u1edbng d\u1eabn d\u1eaft t\u1eeb cha m\u1eb9",
      ipa: "/p\u0259\u02c8rentl \u02c8\u0261a\u026adns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parental+guidance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teens need empathetic parental guidance to navigate peer pressure successfully.",
      exampleVi: "Thanh thi\u1ebfu ni\u00ean c\u1ea7n s\u1ef1 d\u1eabn d\u1eaft th\u1ea5u c\u1ea3m t\u1eeb cha m\u1eb9 \u0111\u1ec3 v\u01b0\u1ee3t qua \u00e1p l\u1ef1c b\u1ea1n b\u00e8 m\u1ed9t c\u00e1ch su\u00f4n s\u1ebb.",
      collocations: ["seek parental guidance", "under parental guidance"]
    }
  ],
  "unit-2-humans-and-the-environment": [
    {
      id: "v10-u2-carbon-footprint",
      word: "carbon footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n carbon (l\u01b0\u1ee3ng ph\u00e1t th\u1ea3i kh\u00ed nh\u00e0 k\u00ednh)",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cycling instead of driving cuts your annual carbon footprint significantly.",
      exampleVi: "\u0110i xe \u0111\u1ea1p thay v\u00ec \u0111i \u00f4 t\u00f4 gi\u00fap gi\u1ea3m \u0111\u00e1ng k\u1ec3 d\u1ea5u ch\u00e2n carbon h\u00e0ng n\u0103m c\u1ee7a b\u1ea1n.",
      collocations: ["reduce carbon footprint", "calculate carbon footprint"]
    },
    {
      id: "v10-u2-renewable-energy",
      word: "renewable energy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o (m\u1eb7t tr\u1eddi, gi\u00f3)",
      ipa: "/r\u026a\u02c8nju\u02d0\u0259bl \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=renewable+energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investing in renewable energy is essential for long-term ecological balance.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o l\u00e0 \u0111i\u1ec1u thi\u1ebft y\u1ebfu cho s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i l\u00e2u d\u00e0i.",
      collocations: ["renewable energy sources", "switch to renewable energy"]
    },
    {
      id: "v10-u2-biodegradable",
      word: "biodegradable",
      partOfSpeech: "adj",
      meaningVi: "t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc trong t\u1ef1 nhi\u00ean",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using biodegradable packaging helps eliminate persistent plastic pollution.",
      exampleVi: "S\u1eed d\u1ee5ng bao b\u00ec t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc gi\u00fap lo\u1ea1i b\u1ecf \u00f4 nhi\u1ec5m nh\u1ef1a k\u00e9o d\u00e0i.",
      collocations: ["biodegradable material", "biodegradable waste"]
    },
    {
      id: "v10-u2-eco-friendly",
      word: "eco-friendly",
      partOfSpeech: "adj",
      meaningVi: "th\u00e2n thi\u1ec7n v\u1edbi m\u00f4i tr\u01b0\u1eddng t\u1ef1 nhi\u00ean",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eco-friendly cleaning supplies protect local water streams from dangerous chemicals.",
      exampleVi: "Ch\u1ea5t t\u1ea9y r\u1eeda th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng b\u1ea3o v\u1ec7 ngu\u1ed3n n\u01b0\u1edbc kh\u1ecfi h\u00f3a ch\u1ea5t nguy hi\u1ec3m.",
      collocations: ["eco-friendly products", "eco-friendly lifestyle"]
    },
    {
      id: "v10-u2-greenhouse-gas",
      word: "greenhouse gas",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00ed nh\u00e0 k\u00ednh g\u00e2y gi\u1eef nhi\u1ec7t",
      ipa: "/\u02c8\u0261ri\u02d0nha\u028as \u0261\u00e6s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=greenhouse+gas&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trapping thermal heat, greenhouse gas emissions raise planetary temperatures.",
      exampleVi: "Kh\u00ed nh\u00e0 k\u00ednh gi\u1eef nhi\u1ec7t l\u00e0m t\u0103ng nhi\u1ec7t \u0111\u1ed9 to\u00e0n c\u1ea7u.",
      collocations: ["greenhouse gas emissions", "trap greenhouse gases"]
    },
    {
      id: "v10-u2-sustainable-lifestyle",
      word: "sustainable lifestyle",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ed1i s\u1ed1ng b\u1ec1n v\u1eefng b\u1ea3o v\u1ec7 t\u00e0i nguy\u00ean",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8la\u026afsta\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+lifestyle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Living a sustainable lifestyle means wasting fewer resources and reusing goods.",
      exampleVi: "S\u1ed1ng b\u1ec1n v\u1eefng c\u00f3 ngh\u0129a l\u00e0 l\u00e3ng ph\u00ed \u00edt t\u00e0i nguy\u00ean h\u01a1n v\u00e0 t\u00e1i s\u1eed d\u1ee5ng \u0111\u1ed3 \u0111\u1ea1c.",
      collocations: ["adopt a sustainable lifestyle", "promote sustainable lifestyles"]
    },
    {
      id: "v10-u2-deforestation",
      word: "deforestation",
      partOfSpeech: "n",
      meaningVi: "n\u1ea1n ph\u00e1 r\u1eebng tr\u00e0n lan",
      ipa: "/di\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Uncontrolled deforestation destroys biodiversity and causes severe landslides.",
      exampleVi: "N\u1ea1n ph\u00e1 r\u1eebng tr\u00e0n lan ph\u00e1 h\u1ee7y \u0111a d\u1ea1ng sinh h\u1ecdc v\u00e0 g\u00e2y s\u1ea1t l\u1edf \u0111\u1ea5t nghi\u00eam tr\u1ecdng.",
      collocations: ["halt deforestation", "combat deforestation"]
    },
    {
      id: "v10-u2-composting",
      word: "composting",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c \u1ee7 r\u00e1c h\u1eefu c\u01a1 th\u00e0nh ph\u00e2n b\u00f3n",
      ipa: "/\u02c8k\u0252mp\u0252st\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=composting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Backyard composting turns food scraps into rich fertilizer for vegetables.",
      exampleVi: "\u1ee6 r\u00e1c t\u1ea1i nh\u00e0 bi\u1ebfn th\u1ee9c \u0103n th\u1eeba th\u00e0nh ph\u00e2n b\u00f3n m\u00e0u m\u1ee1 cho rau tr\u1ed3ng.",
      collocations: ["composting bin", "home composting"]
    },
    {
      id: "v10-u2-conserve",
      word: "conserve",
      partOfSpeech: "v",
      meaningVi: "ti\u1ebft ki\u1ec7m, b\u1ea3o t\u1ed3n t\u00e0i nguy\u00ean",
      ipa: "/k\u0259n\u02c8s\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We must conserve fresh water during long dry summer periods.",
      exampleVi: "Ch\u00fang ta ph\u1ea3i ti\u1ebft ki\u1ec7m n\u01b0\u1edbc s\u1ea1ch trong nh\u1eefng \u0111\u1ee3t kh\u00f4 h\u1ea1n m\u00f9a h\u00e8.",
      collocations: ["conserve energy", "conserve water"]
    },
    {
      id: "v10-u2-single-use-plastic",
      word: "single-use plastic",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n",
      ipa: "/\u02ccs\u026a\u014b\u0261l ju\u02d0s \u02c8pl\u00e6st\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=single-use+plastic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Supermarkets are phasing out single-use plastic bags in favor of canvas totes.",
      exampleVi: "C\u00e1c si\u00eau th\u1ecb \u0111ang lo\u1ea1i b\u1ecf d\u1ea7n t\u00fai nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n \u0111\u1ec3 chuy\u1ec3n sang t\u00fai v\u1ea3i.",
      collocations: ["ban single-use plastic", "avoid single-use plastic"]
    },
    {
      id: "v10-u2-landfill",
      word: "landfill",
      partOfSpeech: "n",
      meaningVi: "b\u00e3i ch\u00f4n l\u1ea5p r\u00e1c th\u1ea3i",
      ipa: "/\u02c8l\u00e6ndf\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=landfill&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Recycling prevents tons of solid household waste from rotting in landfills.",
      exampleVi: "T\u00e1i ch\u1ebf gi\u00fap ng\u0103n ch\u1eb7n h\u00e0ng t\u1ea5n r\u00e1c th\u1ea3i sinh ho\u1ea1t ph\u00e2n h\u1ee7y t\u1ea1i c\u00e1c b\u00e3i ch\u00f4n l\u1ea5p.",
      collocations: ["end up in landfill", "landfill site"]
    },
    {
      id: "v10-u2-deplete",
      word: "deplete",
      partOfSpeech: "v",
      meaningVi: "l\u00e0m c\u1ea1n ki\u1ec7t ngu\u1ed3n t\u00e0i nguy\u00ean",
      ipa: "/d\u026a\u02c8pli\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deplete&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overfishing continues to deplete valuable marine fish stocks.",
      exampleVi: "\u0110\u00e1nh b\u1eaft c\u00e1 qu\u00e1 m\u1ee9c ti\u1ebfp t\u1ee5c l\u00e0m c\u1ea1n ki\u1ec7t tr\u1eef l\u01b0\u1ee3ng c\u00e1 bi\u1ec3n qu\u00fd gi\u00e1.",
      collocations: ["deplete natural resources", "deplete the ozone layer"]
    },
    {
      id: "v10-u2-organic-farming",
      word: "organic farming",
      partOfSpeech: "n.phr",
      meaningVi: "n\u00f4ng nghi\u1ec7p h\u1eefu c\u01a1 s\u1ea1ch",
      ipa: "/\u0254\u02d0\u02c8\u0261\u00e6n\u026ak \u02c8f\u0251\u02d0m\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=organic+farming&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Organic farming avoids toxic chemical pesticides and synthetic fertilizers.",
      exampleVi: "N\u00f4ng nghi\u1ec7p h\u1eefu c\u01a1 tr\u00e1nh d\u00f9ng thu\u1ed1c tr\u1eeb s\u00e2u h\u00f3a h\u1ecdc \u0111\u1ed9c h\u1ea1i v\u00e0 ph\u00e2n b\u00f3n nh\u00e2n t\u1ea1o.",
      collocations: ["practice organic farming", "benefits of organic farming"]
    },
    {
      id: "v10-u2-pollutant",
      word: "pollutant",
      partOfSpeech: "n",
      meaningVi: "ch\u1ea5t g\u00e2y \u00f4 nhi\u1ec5m m\u00f4i tr\u01b0\u1eddng",
      ipa: "/p\u0259\u02c8lu\u02d0t\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pollutant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vehicle exhaust emits harmful airborne pollutants into crowded streets.",
      exampleVi: "Kh\u00f3i xe th\u1ea3i ra c\u00e1c ch\u1ea5t \u00f4 nhi\u1ec5m kh\u00f4ng kh\u00ed nguy hi\u1ec3m v\u00e0o c\u00e1c con ph\u1ed1 \u0111\u00f4ng \u0111\u00fac.",
      collocations: ["air pollutants", "chemical pollutants"]
    },
    {
      id: "v10-u2-contamination",
      word: "contamination",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 l\u00e0m b\u1ea9n, nhi\u1ec5m \u0111\u1ed9c ngu\u1ed3n n\u01b0\u1edbc/\u0111\u1ea5t",
      ipa: "/k\u0259n\u02cct\u00e6m\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=contamination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Industrial waste runoff leads to widespread ground water contamination.",
      exampleVi: "N\u01b0\u1edbc th\u1ea3i c\u00f4ng nghi\u1ec7p d\u1eabn \u0111\u1ebfn t\u00ecnh tr\u1ea1ng \u00f4 nhi\u1ec5m n\u01b0\u1edbc ng\u1ea7m lan r\u1ed9ng.",
      collocations: ["water contamination", "soil contamination"]
    },
    {
      id: "v10-u2-reusable",
      word: "reusable",
      partOfSpeech: "adj",
      meaningVi: "c\u00f3 th\u1ec3 t\u00e1i s\u1eed d\u1ee5ng nhi\u1ec1u l\u1ea7n",
      ipa: "/\u02ccri\u02d0\u02c8ju\u02d0z\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reusable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Carrying a reusable stainless-steel water bottle saves money and plastic.",
      exampleVi: "Mang b\u00ecnh n\u01b0\u1edbc inox t\u00e1i s\u1eed d\u1ee5ng gi\u00fap ti\u1ebft ki\u1ec7m ti\u1ec1n v\u00e0 gi\u1ea3m thi\u1ec3u \u0111\u1ed3 nh\u1ef1a.",
      collocations: ["reusable bag", "reusable container"]
    },
    {
      id: "v10-u2-solar-panel",
      word: "solar panel",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea5m pin n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi",
      ipa: "/\u02c8s\u0259\u028al\u0259 \u02c8p\u00e6nl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solar+panel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Installing solar panels on the roof cuts household electric bills in half.",
      exampleVi: "L\u1eafp pin m\u1eb7t tr\u1eddi tr\u00ean m\u00e1i nh\u00e0 gi\u00fap gi\u1ea3m m\u1ed9t n\u1eeda ti\u1ec1n \u0111i\u1ec7n sinh ho\u1ea1t.",
      collocations: ["install solar panels", "rooftop solar panels"]
    },
    {
      id: "v10-u2-wind-turbine",
      word: "wind turbine",
      partOfSpeech: "n.phr",
      meaningVi: "tua-bin phong \u0111i\u1ec7n sinh n\u0103ng l\u01b0\u1ee3ng",
      ipa: "/\u02c8w\u026and t\u025c\u02d0ba\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wind+turbine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Giant wind turbines generate clean electricity along the sunny coastlines.",
      exampleVi: "Nh\u1eefng c\u00e1nh qu\u1ea1t gi\u00f3 kh\u1ed5ng l\u1ed3 s\u1ea3n xu\u1ea5t \u0111i\u1ec7n s\u1ea1ch d\u1ecdc b\u1edd bi\u1ec3n nhi\u1ec1u gi\u00f3.",
      collocations: ["offshore wind turbine", "wind turbine farm"]
    },
    {
      id: "v10-u2-fossil-fuels",
      word: "fossil fuels",
      partOfSpeech: "n.phr",
      meaningVi: "nhi\u00ean li\u1ec7u h\u00f3a th\u1ea1ch (than \u0111\u00e1, d\u1ea7u m\u1ecf)",
      ipa: "/\u02c8f\u0252sl fju\u02d0\u0259lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fossil+fuels&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Burning fossil fuels produces thick clouds of carbon dioxide.",
      exampleVi: "\u0110\u1ed1t ch\u00e1y nhi\u00ean li\u1ec7u h\u00f3a th\u1ea1ch t\u1ea1o ra l\u01b0\u1ee3ng l\u1edbn kh\u00ed carbon dioxide.",
      collocations: ["rely on fossil fuels", "burn fossil fuels"]
    },
    {
      id: "v10-u2-energy-efficient",
      word: "energy-efficient",
      partOfSpeech: "adj",
      meaningVi: "ti\u1ebft ki\u1ec7m v\u00e0 s\u1eed d\u1ee5ng hi\u1ec7u qu\u1ea3 n\u0103ng l\u01b0\u1ee3ng",
      ipa: "/\u02c8en\u0259d\u0292i \u026a\u02c8f\u026a\u0283nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy-efficient&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Replacing old light bulbs with energy-efficient LED lamps lowers consumption.",
      exampleVi: "Thay b\u00f3ng \u0111\u00e8n c\u0169 b\u1eb1ng b\u00f3ng LED ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng gi\u00fap gi\u1ea3m ti\u00eau th\u1ee5 \u0111i\u1ec7n.",
      collocations: ["energy-efficient appliances", "energy-efficient lighting"]
    },
    {
      id: "v10-u2-ecological-balance",
      word: "ecological balance",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e2n b\u1eb1ng sinh th\u00e1i t\u1ef1 nhi\u00ean",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Protecting apex predators maintains the overall ecological balance.",
      exampleVi: "B\u1ea3o v\u1ec7 th\u00fa s\u0103n m\u1ed3i \u0111\u1ea7u chu\u1ed7i th\u1ee9c \u0103n gi\u00fap duy tr\u00ec s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i.",
      collocations: ["maintain ecological balance", "disrupt ecological balance"]
    },
    {
      id: "v10-u2-biodiversity",
      word: "biodiversity",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 \u0111a d\u1ea1ng sinh h\u1ecdc c\u00e1c lo\u00e0i",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tropical rain forests harbor more than half of the planet's biodiversity.",
      exampleVi: "R\u1eebng m\u01b0a nhi\u1ec7t \u0111\u1edbi l\u00e0 n\u01a1i sinh s\u1ed1ng c\u1ee7a h\u01a1n m\u1ed9t n\u1eeda \u0111a d\u1ea1ng sinh h\u1ecdc tr\u00ean h\u00e0nh tinh.",
      collocations: ["rich biodiversity", "loss of biodiversity"]
    },
    {
      id: "v10-u2-sorting-rubbish",
      word: "sorting rubbish",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e2n lo\u1ea1i r\u00e1c t\u1ea1i ngu\u1ed3n",
      ipa: "/\u02c8s\u0254\u02d0t\u026a\u014b \u02c8r\u028cb\u026a\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sorting+rubbish&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sorting rubbish into recyclables and organics is mandatory in many green towns.",
      exampleVi: "Ph\u00e2n lo\u1ea1i r\u00e1c th\u00e0nh \u0111\u1ed3 t\u00e1i ch\u1ebf v\u00e0 r\u00e1c h\u1eefu c\u01a1 l\u00e0 b\u1eaft bu\u1ed9c \u1edf nhi\u1ec1u \u0111\u00f4 th\u1ecb xanh.",
      collocations: ["sort rubbish at source", "proper sorting of rubbish"]
    },
    {
      id: "v10-u2-hazardous-waste",
      word: "hazardous waste",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ea5t th\u1ea3i \u0111\u1ed9c h\u1ea1i nguy hi\u1ec3m",
      ipa: "/\u02c8h\u00e6z\u0259d\u0259s we\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hazardous+waste&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Used batteries and electronics must be handled as hazardous waste.",
      exampleVi: "Pin v\u00e0 linh ki\u1ec7n \u0111i\u1ec7n t\u1eed \u0111\u00e3 qua s\u1eed d\u1ee5ng ph\u1ea3i \u0111\u01b0\u1ee3c x\u1eed l\u00fd nh\u01b0 r\u00e1c \u0111\u1ed9c h\u1ea1i.",
      collocations: ["dispose of hazardous waste", "hazardous waste treatment"]
    },
    {
      id: "v10-u2-afforestation",
      word: "afforestation",
      partOfSpeech: "n",
      meaningVi: "tr\u1ed3ng r\u1eebng t\u00e1i t\u1ea1o ph\u1ee7 xanh \u0111\u1ed3i tr\u1ecdc",
      ipa: "/\u00e6\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=afforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "National afforestation projects have successfully greened many barren hills.",
      exampleVi: "C\u00e1c d\u1ef1 \u00e1n tr\u1ed3ng r\u1eebng qu\u1ed1c gia \u0111\u00e3 ph\u1ee7 xanh th\u00e0nh c\u00f4ng nhi\u1ec1u \u0111\u1ed3i tr\u1ecdc.",
      collocations: ["mass afforestation campaign", "support afforestation"]
    },
    {
      id: "v10-u2-raw-materials",
      word: "raw materials",
      partOfSpeech: "n.phr",
      meaningVi: "nguy\u00ean li\u1ec7u th\u00f4 s\u01a1",
      ipa: "/\u02ccr\u0254\u02d0 m\u0259\u02c8t\u026a\u0259ri\u0259lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=raw+materials&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Recycling paper saves millions of trees from being felled for raw materials.",
      exampleVi: "T\u00e1i ch\u1ebf gi\u1ea5y gi\u00fap b\u1ea3o v\u1ec7 h\u00e0ng tri\u1ec7u c\u00e2y xanh kh\u1ecfi b\u1ecb \u0111\u1ed1n l\u00e0m nguy\u00ean li\u1ec7u th\u00f4.",
      collocations: ["extract raw materials", "supply of raw materials"]
    },
    {
      id: "v10-u2-climate-crisis",
      word: "climate crisis",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ee7ng ho\u1ea3ng kh\u00ed h\u1eadu to\u00e0n c\u1ea7u",
      ipa: "/\u02c8kla\u026am\u0259t \u02c8kra\u026as\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+crisis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth worldwide are actively protesting to demand solutions to the climate crisis.",
      exampleVi: "Thanh ni\u00ean kh\u1eafp th\u1ebf gi\u1edbi \u0111ang l\u00ean ti\u1ebfng \u0111\u00f2i h\u1ecfi c\u00e1c gi\u1ea3i ph\u00e1p cho cu\u1ed9c kh\u1ee7ng ho\u1ea3ng kh\u00ed h\u1eadu.",
      collocations: ["tackle the climate crisis", "urgency of the climate crisis"]
    },
    {
      id: "v10-u2-clean-up-campaign",
      word: "clean-up campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch ra qu\u00e2n d\u1ecdn v\u1ec7 sinh",
      ipa: "/\u02c8kli\u02d0n \u028cp k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clean-up+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Our school organized a weekend beach clean-up campaign in Da Nang.",
      exampleVi: "Tr\u01b0\u1eddng ch\u00fang t\u00f4i \u0111\u00e3 t\u1ed5 ch\u1ee9c chi\u1ebfn d\u1ecbch d\u1ecdn r\u00e1c b\u00e3i bi\u1ec3n v\u00e0o cu\u1ed1i tu\u1ea7n t\u1ea1i \u0110\u00e0 N\u1eb5ng.",
      collocations: ["join a clean-up campaign", "community clean-up campaign"]
    },
    {
      id: "v10-u2-environmental-awareness",
      word: "environmental awareness",
      partOfSpeech: "n.phr",
      meaningVi: "\u00fd th\u1ee9c b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u0259\u02c8we\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+awareness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Education plays a central role in raising environmental awareness among youth.",
      exampleVi: "Gi\u00e1o d\u1ee5c \u0111\u00f3ng vai tr\u00f2 trung t\u00e2m trong vi\u1ec7c n\u00e2ng cao \u00fd th\u1ee9c m\u00f4i tr\u01b0\u1eddng cho gi\u1edbi tr\u1ebb.",
      collocations: ["raise environmental awareness", "heightened environmental awareness"]
    },
    {
      id: "v10-u2-decompose",
      word: "decompose",
      partOfSpeech: "v",
      meaningVi: "ph\u00e2n h\u1ee7y, r\u00e3 m\u1ee5c t\u1ef1 nhi\u00ean",
      ipa: "/\u02ccdi\u02d0k\u0259m\u02c8p\u0259\u028az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=decompose&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Plastic bottles may take up to 450 years to decompose in nature.",
      exampleVi: "Chai nh\u1ef1a c\u00f3 th\u1ec3 m\u1ea5t t\u1edbi 450 n\u0103m \u0111\u1ec3 ph\u00e2n h\u1ee7y trong t\u1ef1 nhi\u00ean.",
      collocations: ["slowly decompose", "decompose organically"]
    },
    {
      id: "v10-u2-water-conservation",
      word: "water conservation",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c ti\u1ebft ki\u1ec7m v\u00e0 b\u1ea3o v\u1ec7 ngu\u1ed3n n\u01b0\u1edbc",
      ipa: "/\u02c8w\u0254\u02d0t\u0259 \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=water+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Installing drip irrigation is an efficient water conservation practice in farming.",
      exampleVi: "L\u1eafp h\u1ec7 th\u1ed1ng t\u01b0\u1edbi nh\u1ecf gi\u1ecdt l\u00e0 gi\u1ea3i ph\u00e1p ti\u1ebft ki\u1ec7m n\u01b0\u1edbc hi\u1ec7u qu\u1ea3 trong tr\u1ed3ng tr\u1ecdt.",
      collocations: ["promote water conservation", "water conservation methods"]
    },
    {
      id: "v10-u2-zero-waste",
      word: "zero-waste",
      partOfSpeech: "adj",
      meaningVi: "kh\u00f4ng ph\u00e1t th\u1ea3i r\u00e1c, t\u00e1i ch\u1ebf t\u1ed1i \u0111a",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u02c8we\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero-waste&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She adopted a zero-waste lifestyle by shopping with reusable glass jars.",
      exampleVi: "C\u00f4 \u1ea5y \u00e1p d\u1ee5ng l\u1ed1i s\u1ed1ng kh\u00f4ng r\u00e1c th\u1ea3i b\u1eb1ng vi\u1ec7c \u0111i ch\u1ee3 v\u1edbi h\u0169 th\u1ee7y tinh t\u00e1i s\u1eed d\u1ee5ng.",
      collocations: ["zero-waste lifestyle", "zero-waste movement"]
    },
    {
      id: "v10-u2-harmful-emissions",
      word: "harmful emissions",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00ed th\u1ea3i \u0111\u1ed9c h\u1ea1i t\u1eeb c\u00f4ng nghi\u1ec7p/xe",
      ipa: "/\u02c8h\u0251\u02d0mfl \u026a\u02c8m\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=harmful+emissions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stricter standards mandate factories to filter out harmful emissions.",
      exampleVi: "C\u00e1c ti\u00eau chu\u1ea9n kh\u1eaft khe h\u01a1n b\u1eaft bu\u1ed9c nh\u00e0 m\u00e1y ph\u1ea3i l\u1ecdc c\u00e1c kh\u00ed th\u1ea3i \u0111\u1ed9c h\u1ea1i.",
      collocations: ["cut harmful emissions", "reduce harmful emissions"]
    },
    {
      id: "v10-u2-ecosystem",
      word: "ecosystem",
      partOfSpeech: "n",
      meaningVi: "h\u1ec7 sinh th\u00e1i m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02c8i\u02d0k\u0259\u028as\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecosystem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wetlands function as a vital ecosystem that filters water and shelters birds.",
      exampleVi: "V\u00f9ng \u0111\u1ea5t ng\u1eadp n\u01b0\u1edbc \u0111\u00f3ng vai tr\u00f2 nh\u01b0 m\u1ed9t h\u1ec7 sinh th\u00e1i quan tr\u1ecdng gi\u00fap l\u1ecdc n\u01b0\u1edbc v\u00e0 che ch\u1edf cho chim mu\u00f4ng.",
      collocations: ["fragile ecosystem", "healthy ecosystem"]
    },
    {
      id: "v10-u2-conservationist",
      word: "conservationist",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 ho\u1ea1t \u0111\u1ed9ng b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean",
      ipa: "/\u02cck\u0252ns\u0259\u02c8ve\u026a\u0283\u0259n\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservationist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Conservationists are working around the clock to rescue stranded sea turtles.",
      exampleVi: "C\u00e1c nh\u00e0 b\u1ea3o t\u1ed3n \u0111ang l\u00e0m vi\u1ec7c su\u1ed1t ng\u00e0y \u0111\u00eam \u0111\u1ec3 gi\u1ea3i c\u1ee9u r\u00f9a bi\u1ec3n m\u1eafc c\u1ea1n.",
      collocations: ["wildlife conservationist", "dedicated conservationist"]
    },
    {
      id: "v10-u2-green-consumption",
      word: "green consumption",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u00eau d\u00f9ng xanh, th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u0261ri\u02d0n k\u0259n\u02c8s\u028cmp\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+consumption&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Green consumption encourages shoppers to choose locally grown, pesticide-free crops.",
      exampleVi: "Ti\u00eau d\u00f9ng xanh khuy\u1ebfn kh\u00edch ng\u01b0\u1eddi mua ch\u1ecdn n\u00f4ng s\u1ea3n \u0111\u1ecba ph\u01b0\u01a1ng kh\u00f4ng thu\u1ed1c tr\u1eeb s\u00e2u.",
      collocations: ["encourage green consumption", "trends in green consumption"]
    },
    {
      id: "v10-u2-carbon-neutral",
      word: "carbon neutral",
      partOfSpeech: "adj",
      meaningVi: "trung h\u00f2a carbon (c\u00e2n b\u1eb1ng l\u01b0\u1ee3ng th\u1ea3i)",
      ipa: "/\u02cck\u0251\u02d0b\u0259n \u02c8nju\u02d0tr\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+neutral&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The tech corporation aims to be completely carbon neutral by 2030.",
      exampleVi: "T\u1eadp \u0111o\u00e0n c\u00f4ng ngh\u1ec7 \u0111\u1eb7t m\u1ee5c ti\u00eau trung h\u00f2a carbon ho\u00e0n to\u00e0n tr\u01b0\u1edbc n\u0103m 2030.",
      collocations: ["become carbon neutral", "carbon neutral campus"]
    },
    {
      id: "v10-u2-solar-energy",
      word: "solar energy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi s\u1ea1ch",
      ipa: "/\u02c8s\u0259\u028al\u0259 \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solar+energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam has vast potential for generating clean solar energy in the southern provinces.",
      exampleVi: "Vi\u1ec7t Nam c\u00f3 ti\u1ec1m n\u0103ng to l\u1edbn \u0111\u1ec3 s\u1ea3n xu\u1ea5t n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi t\u1ea1i c\u00e1c t\u1ec9nh ph\u00eda Nam.",
      collocations: ["harness solar energy", "solar energy system"]
    }
    ,
    {
      id: "v10-extra-reforestation",
      word: "reforestation",
      partOfSpeech: "n",
      meaningVi: "tr\u1ed3ng l\u1ea1i r\u1eebng ph\u1ee7 xanh",
      ipa: "/\u02ccri\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reforestation projects help slow down catastrophic soil erosion.",
      exampleVi: "C\u00e1c d\u1ef1 \u00e1n tr\u1ed3ng l\u1ea1i r\u1eebng gi\u00fap l\u00e0m ch\u1eadm qu\u00e1 tr\u00ecnh x\u00f3i m\u00f2n \u0111\u1ea5t.",
      collocations: ["coastal reforestation", "mass reforestation"]
    }
    ,
    {
      id: "v10-extra-energy-conservation",
      word: "energy conservation",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c ti\u1ebft ki\u1ec7m \u0111i\u1ec7n n\u0103ng",
      ipa: "/\u02c8en\u0259d\u0292i \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Simple habits like turning off fans support national energy conservation.",
      exampleVi: "Th\u00f3i quen t\u1eaft qu\u1ea1t khi ra kh\u1ecfi ph\u00f2ng h\u1ed7 tr\u1ee3 ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng qu\u1ed1c gia.",
      collocations: ["practice energy conservation", "energy conservation tips"]
    }
    ,
    {
      id: "v10-extra-biodiversity-loss",
      word: "biodiversity loss",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti l\u0252s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+loss&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Habitat destruction is the main driver of biodiversity loss globally.",
      exampleVi: "Ph\u00e1 h\u1ee7y m\u00f4i tr\u01b0\u1eddng s\u1ed1ng l\u00e0 nguy\u00ean nh\u00e2n ch\u00ednh d\u1eabn \u0111\u1ebfn suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc.",
      collocations: ["halt biodiversity loss", "threat of biodiversity loss"]
    }
    ,
    {
      id: "v10-extra-upcycling",
      word: "upcycling",
      partOfSpeech: "n",
      meaningVi: "t\u00e1i ch\u1ebf s\u00e1ng t\u1ea1o th\u00e0nh \u0111\u1ed3 v\u1eadt c\u00f3 \u00edch",
      ipa: "/\u02c8\u028cpsa\u026akl\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=upcycling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Upcycling glass jars into flower pots is a creative weekend DIY project.",
      exampleVi: "T\u00e1i ch\u1ebf h\u0169 th\u1ee7y tinh th\u00e0nh ch\u1eadu hoa l\u00e0 \u00fd t\u01b0\u1edfng s\u00e1ng t\u1ea1o v\u00e0o cu\u1ed1i tu\u1ea7n.",
      collocations: ["creative upcycling", "benefits of upcycling"]
    }
    ,
    {
      id: "v10-extra-green-technology",
      word: "green technology",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 xanh b\u1ea3o v\u1ec7 tr\u00e1i \u0111\u1ea5t",
      ipa: "/\u0261ri\u02d0n tek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+technology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investing in green technology reduces factory emissions significantly.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o c\u00f4ng ngh\u1ec7 xanh gi\u00fap gi\u1ea3m \u0111\u00e1ng k\u1ec3 kh\u00ed th\u1ea3i nh\u00e0 m\u00e1y.",
      collocations: ["develop green technology", "adopt green technology"]
    }
    ,
    {
      id: "v10-extra-ecocentrism",
      word: "ecocentrism",
      partOfSpeech: "n",
      meaningVi: "thuy\u1ebft trung t\u00e2m sinh th\u00e1i t\u00f4n tr\u1ecdng mu\u00f4n lo\u00e0i",
      ipa: "/\u02cci\u02d0k\u0259\u028a\u02c8sentr\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecocentrism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ecocentrism emphasizes that all living organisms possess inherent value.",
      exampleVi: "Thuy\u1ebft trung t\u00e2m sinh th\u00e1i nh\u1ea5n m\u1ea1nh m\u1ecdi sinh v\u1eadt \u0111\u1ec1u c\u00f3 gi\u00e1 tr\u1ecb t\u1ef1 th\u00e2n.",
      collocations: ["embrace ecocentrism", "principles of ecocentrism"]
    }
    ,
    {
      id: "mega-unit-2-reusable-grocery-bag",
      word: "reusable grocery bag",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00fai v\u1ea3i \u0111i ch\u1ee3 d\u00f9ng nhi\u1ec1u l\u1ea7n",
      ipa: "/ri\u02d0\u02c8ju\u02d0z\u0259bl \u02c8\u0261r\u0259\u028as\u0259ri b\u00e6\u0261/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reusable+grocery+bag&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Shoppers carry reusable grocery bags to diminish single-use plastic waste.",
      exampleVi: "Ng\u01b0\u1eddi \u0111i ch\u1ee3 mang theo t\u00fai v\u1ea3i d\u00f9ng nhi\u1ec1u l\u1ea7n \u0111\u1ec3 gi\u1ea3m thi\u1ec3u r\u00e1c th\u1ea3i nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n.",
      collocations: ["carry a reusable bag", "switch to reusable bags"]
    }
    ,
    {
      id: "mega-unit-2-energy-audit",
      word: "energy audit",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3m to\u00e1n ti\u00eau th\u1ee5 n\u0103ng l\u01b0\u1ee3ng gia \u0111\u00ecnh",
      ipa: "/\u02c8en\u0259d\u0292i \u02c8\u0254\u02d0d\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+audit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Conducting an energy audit pinpoints which appliances consume excessive electricity.",
      exampleVi: "Ti\u1ebfn h\u00e0nh ki\u1ec3m to\u00e1n n\u0103ng l\u01b0\u1ee3ng gi\u00fap ch\u1ec9 ra thi\u1ebft b\u1ecb n\u00e0o \u0111ang ti\u00eau hao qu\u00e1 nhi\u1ec1u \u0111i\u1ec7n n\u0103ng.",
      collocations: ["conduct an energy audit", "home energy audit"]
    }
    ,
    {
      id: "mega-unit-2-air-pollution-index",
      word: "air pollution index",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ec9 s\u1ed1 \u00f4 nhi\u1ec5m ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng kh\u00ed",
      ipa: "/e\u0259 p\u0259\u02c8lu\u02d0\u0283n \u02c8\u026andeks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=air+pollution+index&type=2",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Citizens check the air pollution index every morning before outdoor exercise.",
      exampleVi: "Ng\u01b0\u1eddi d\u00e2n tra c\u1ee9u ch\u1ec9 s\u1ed1 \u00f4 nhi\u1ec5m kh\u00f4ng kh\u00ed m\u1ed7i s\u00e1ng tr\u01b0\u1edbc khi t\u1eadp th\u1ec3 d\u1ee5c ngo\u00e0i tr\u1eddi.",
      collocations: ["check air pollution index", "high air pollution index"]
    }
    ,
    {
      id: "mega-unit-2-water-footprint",
      word: "water footprint",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0\u1ee3ng n\u01b0\u1edbc ng\u1ecdt ti\u00eau th\u1ee5 tr\u1ef1c ti\u1ebfp v\u00e0 gi\u00e1n ti\u1ebfp",
      ipa: "/\u02c8w\u0254\u02d0t\u0259 \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=water+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Producing a cotton shirt carries an astonishingly large water footprint.",
      exampleVi: "S\u1ea3n xu\u1ea5t m\u1ed9t chi\u1ebfc \u00e1o s\u01a1 mi cotton ti\u00eau t\u1ed1n m\u1ed9t l\u01b0\u1ee3ng n\u01b0\u1edbc ng\u1ecdt l\u1edbn \u0111\u1ebfn kinh ng\u1ea1c.",
      collocations: ["reduce water footprint", "calculate water footprint"]
    }
    ,
    {
      id: "mega-unit-2-vampire-power",
      word: "vampire power",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec7n n\u0103ng ti\u00eau hao \u1ea9n khi thi\u1ebft b\u1ecb \u1edf ch\u1ebf \u0111\u1ed9 ch\u1edd",
      ipa: "/\u02c8v\u00e6mpa\u026a\u0259 \u02c8pa\u028a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vampire+power&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unplugging television chargers eliminates wasteful vampire power.",
      exampleVi: "R\u00fat ph\u00edch c\u1eafm s\u1ea1c tivi gi\u00fap tri\u1ec7t ti\u00eau l\u01b0\u1ee3ng \u0111i\u1ec7n ma ti\u00eau hao l\u00e3ng ph\u00ed khi kh\u00f4ng d\u00f9ng.",
      collocations: ["eliminate vampire power", "vampire power draw"]
    }
    ,
    {
      id: "mega-unit-2-solar-water-heater",
      word: "solar water heater",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00ecnh n\u01b0\u1edbc n\u00f3ng n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi",
      ipa: "/\u02ccs\u0259\u028al\u0259 \u02c8w\u0254\u02d0t\u0259 \u02c8hi\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solar+water+heater&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Installing a solar water heater saves up to forty percent on monthly electric bills.",
      exampleVi: "L\u1eafp b\u00ecnh n\u01b0\u1edbc n\u00f3ng n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi ti\u1ebft ki\u1ec7m t\u1edbi 40% ti\u1ec1n \u0111i\u1ec7n sinh ho\u1ea1t h\u00e0ng th\u00e1ng.",
      collocations: ["install a solar water heater", "rooftop solar water heater"]
    }
    ,
    {
      id: "mega-unit-2-rainwater-harvesting",
      word: "rainwater harvesting",
      partOfSpeech: "n.phr",
      meaningVi: "thu gom v\u00e0 tr\u1eef n\u01b0\u1edbc m\u01b0a s\u1eed d\u1ee5ng",
      ipa: "/\u02c8re\u026anw\u0254\u02d0t\u0259 \u02c8h\u0251\u02d0v\u026ast\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rainwater+harvesting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rural households utilize rainwater harvesting systems to irrigate vegetable plots.",
      exampleVi: "Nhi\u1ec1u gia \u0111\u00ecnh n\u00f4ng th\u00f4n d\u00f9ng h\u1ec7 th\u1ed1ng thu n\u01b0\u1edbc m\u01b0a \u0111\u1ec3 t\u01b0\u1edbi ti\u00eau c\u00e1c lu\u1ed1ng rau s\u1ea1ch.",
      collocations: ["practice rainwater harvesting", "rainwater harvesting tank"]
    }
    ,
    {
      id: "mega-unit-2-waste-segregation",
      word: "waste segregation",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e2n lo\u1ea1i r\u00e1c th\u1ea3i t\u1ea1i ngu\u1ed3n",
      ipa: "/we\u026ast \u02ccse\u0261r\u026a\u02c8\u0261e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=waste+segregation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Waste segregation into organic, recyclable, and hazardous bins is mandatory.",
      exampleVi: "Ph\u00e2n lo\u1ea1i r\u00e1c t\u1ea1i ngu\u1ed3n th\u00e0nh th\u00f9ng h\u1eefu c\u01a1, t\u00e1i ch\u1ebf v\u00e0 \u0111\u1ed9c h\u1ea1i l\u00e0 \u0111i\u1ec1u b\u1eaft bu\u1ed9c.",
      collocations: ["practice waste segregation", "waste segregation scheme"]
    }
    ,
    {
      id: "mega-unit-2-compost-bin",
      word: "compost bin",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f9ng \u1ee7 r\u00e1c h\u1eefu c\u01a1 th\u00e0nh ph\u00e2n b\u00f3n",
      ipa: "/\u02c8k\u0252mp\u0252st b\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=compost+bin&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vegetable peels and coffee grounds belong in the backyard compost bin.",
      exampleVi: "V\u1ecf rau c\u1ee7 qu\u1ea3 v\u00e0 b\u00e3 c\u00e0 ph\u00ea \u0111\u01b0\u1ee3c cho v\u00e0o th\u00f9ng \u1ee7 ph\u00e2n h\u1eefu c\u01a1 sau v\u01b0\u1eddn.",
      collocations: ["fill the compost bin", "backyard compost bin"]
    }
    ,
    {
      id: "mega-unit-2-public-bicycle",
      word: "public bicycle",
      partOfSpeech: "n.phr",
      meaningVi: "xe \u0111\u1ea1p c\u00f4ng c\u1ed9ng chia s\u1ebb",
      ipa: "/\u02ccp\u028cbl\u026ak \u02c8ba\u026as\u026akl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+bicycle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Commuters unlock public bicycles via mobile apps for short city trips.",
      exampleVi: "Ng\u01b0\u1eddi \u0111i l\u00e0m m\u1edf kh\u00f3a xe \u0111\u1ea1p c\u00f4ng c\u1ed9ng qua \u1ee9ng d\u1ee5ng \u0111i\u1ec7n tho\u1ea1i cho c\u00e1c chuy\u1ebfn \u0111i ng\u1eafn.",
      collocations: ["rent a public bicycle", "public bicycle sharing"]
    }
    ,
    {
      id: "mega-unit-2-exhaust-fumes",
      word: "exhaust fumes",
      partOfSpeech: "n.pl",
      meaningVi: "kh\u00ed th\u1ea3i \u0111\u1ed9c h\u1ea1i t\u1eeb \u1ed1ng x\u1ea3 ph\u01b0\u01a1ng ti\u1ec7n",
      ipa: "/\u026a\u0261\u02c8z\u0254\u02d0st fju\u02d0mz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=exhaust+fumes&type=2",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Traffic police wear filtered masks to protect against dangerous exhaust fumes.",
      exampleVi: "C\u1ea3nh s\u00e1t giao th\u00f4ng \u0111eo kh\u1ea9u trang l\u1ecdc \u0111\u1ed9c \u0111\u1ec3 ph\u00f2ng tr\u00e1nh kh\u00ed th\u1ea3i \u0111\u1ed9c h\u1ea1i.",
      collocations: ["choke on exhaust fumes", "toxic exhaust fumes"]
    }
    ,
    {
      id: "mega-unit-2-noise-pollution",
      word: "noise pollution",
      partOfSpeech: "n.phr",
      meaningVi: "\u00f4 nhi\u1ec5m ti\u1ebfng \u1ed3n \u0111\u00f4 th\u1ecb",
      ipa: "/n\u0254\u026az p\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=noise+pollution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Double-glazed glass windows shield inner apartments from street noise pollution.",
      exampleVi: "C\u1eeda s\u1ed5 k\u00ednh hai l\u1edbp che ch\u1eafn c\u0103n h\u1ed9 b\u00ean trong kh\u1ecfi \u00f4 nhi\u1ec5m ti\u1ebfng \u1ed3n \u0111\u01b0\u1eddng ph\u1ed1.",
      collocations: ["suffer from noise pollution", "curb noise pollution"]
    }
    ,
    {
      id: "mega-unit-2-light-pollution",
      word: "light pollution",
      partOfSpeech: "n.phr",
      meaningVi: "\u00f4 nhi\u1ec5m \u00e1nh s\u00e1ng nh\u00e2n t\u1ea1o ban \u0111\u00eam",
      ipa: "/la\u026at p\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=light+pollution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bright neon city signs cause light pollution that disorients nocturnal birds.",
      exampleVi: "Bi\u1ec3n qu\u1ea3ng c\u00e1o neon s\u00e1ng r\u1ef1c g\u00e2y \u00f4 nhi\u1ec5m \u00e1nh s\u00e1ng l\u00e0m chim \u0103n \u0111\u00eam m\u1ea5t ph\u01b0\u01a1ng h\u01b0\u1edbng.",
      collocations: ["reduce light pollution", "effects of light pollution"]
    }
    ,
    {
      id: "mega-unit-2-reforestation-campaign",
      word: "reforestation campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch tr\u1ed3ng r\u1eebng ph\u1ee7 xanh \u0111\u1ea5t tr\u1ed1ng",
      ipa: "/\u02ccri\u02d0f\u0252r\u026a\u02c8ste\u026a\u0283n k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reforestation+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth volunteers planted ten thousand pine saplings during the reforestation campaign.",
      exampleVi: "C\u00e1c thanh ni\u00ean t\u00ecnh nguy\u1ec7n \u0111\u00e3 tr\u1ed3ng m\u01b0\u1eddi ng\u00e0n c\u00e2y th\u00f4ng non trong chi\u1ebfn d\u1ecbch ph\u1ee7 xanh.",
      collocations: ["join a reforestation campaign", "launch a reforestation campaign"]
    }
    ,
    {
      id: "mega-unit-2-sustainable-consumption",
      word: "sustainable consumption",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u00eau d\u00f9ng b\u1ec1n v\u1eefng c\u00f3 tr\u00e1ch nhi\u1ec7m",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl k\u0259n\u02c8s\u028cmp\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+consumption&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Buying only what is truly necessary exemplifies mindful sustainable consumption.",
      exampleVi: "Ch\u1ec9 mua s\u1eafm nh\u1eefng g\u00ec th\u1ef1c s\u1ef1 thi\u1ebft y\u1ebfu l\u00e0 bi\u1ec3u hi\u1ec7n c\u1ee7a ti\u00eau d\u00f9ng b\u1ec1n v\u1eefng c\u00f3 ch\u1eebng m\u1ef1c.",
      collocations: ["promote sustainable consumption", "principles of sustainable consumption"]
    }
    ,
    {
      id: "mega-unit-2-carbon-neutral",
      word: "carbon neutral",
      partOfSpeech: "adj.phr",
      meaningVi: "trung h\u00f2a kh\u00ed c\u00e1c-bon kh\u00f4ng ph\u00e1t th\u1ea3i r\u00f2ng",
      ipa: "/\u02cck\u0251\u02d0b\u0259n \u02c8nju\u02d0tr\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+neutral&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university pledged to become completely carbon neutral by the year 2040.",
      exampleVi: "Tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc cam k\u1ebft s\u1ebd ho\u00e0n to\u00e0n trung h\u00f2a c\u00e1c-bon tr\u01b0\u1edbc n\u0103m 2040.",
      collocations: ["achieve carbon neutral status", "aim to be carbon neutral"]
    }
    ,
    {
      id: "mega-unit-2-green-transport",
      word: "green transport",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ti\u1ec7n giao th\u00f4ng xanh th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u0261ri\u02d0n \u02c8tr\u00e6nsp\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+transport&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Electric buses and bicycles form the backbone of modern green transport.",
      exampleVi: "Xe bu\u00fdt \u0111i\u1ec7n v\u00e0 xe \u0111\u1ea1p t\u1ea1o th\u00e0nh x\u01b0\u01a1ng s\u1ed1ng c\u1ee7a h\u1ec7 th\u1ed1ng giao th\u00f4ng xanh hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["invest in green transport", "prioritize green transport"]
    }
    ,
    {
      id: "mega-unit-2-soil-degradation",
      word: "soil degradation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 tho\u00e1i h\u00f3a b\u1ea1c m\u00e0u c\u1ee7a \u0111\u1ea5t tr\u1ed3ng",
      ipa: "/s\u0254\u026al \u02ccde\u0261r\u0259\u02c8de\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soil+degradation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overusing chemical fertilizers leads to severe soil degradation over decades.",
      exampleVi: "L\u1ea1m d\u1ee5ng ph\u00e2n b\u00f3n h\u00f3a h\u1ecdc d\u1eabn t\u1edbi s\u1ef1 tho\u00e1i h\u00f3a \u0111\u1ea5t nghi\u00eam tr\u1ecdng sau nhi\u1ec1u th\u1eadp k\u1ef7.",
      collocations: ["prevent soil degradation", "combat soil degradation"]
    }
    ,
    {
      id: "mega-unit-2-green-consumerism",
      word: "green consumerism",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00e0n s\u00f3ng ti\u00eau d\u00f9ng chu\u1ed9ng s\u1ea3n ph\u1ea9m xanh",
      ipa: "/\u0261ri\u02d0n k\u0259n\u02c8sju\u02d0m\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+consumerism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Manufacturers change their formulas to align with rising green consumerism.",
      exampleVi: "C\u00e1c nh\u00e0 s\u1ea3n xu\u1ea5t thay \u0111\u1ed5i c\u00f4ng th\u1ee9c s\u1ea3n ph\u1ea9m \u0111\u1ec3 b\u1eaft nh\u1ecbp xu h\u01b0\u1edbng ti\u00eau d\u00f9ng xanh.",
      collocations: ["rise of green consumerism", "support green consumerism"]
    }
    ,
    {
      id: "mega-unit-2-energy-efficiency-rating",
      word: "energy efficiency rating",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e3n \u0111\u00e1nh gi\u00e1 c\u1ea5p \u0111\u1ed9 ti\u1ebft ki\u1ec7m \u0111i\u1ec7n",
      ipa: "/\u02c8en\u0259d\u0292i \u026a\u02c8f\u026a\u0283nsi \u02c8re\u026at\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+efficiency+rating&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Always check the five-star energy efficiency rating before buying a refrigerator.",
      exampleVi: "Lu\u00f4n ki\u1ec3m tra nh\u00e3n n\u0103ng l\u01b0\u1ee3ng n\u0103m sao tr\u01b0\u1edbc khi quy\u1ebft \u0111\u1ecbnh mua t\u1ee7 l\u1ea1nh m\u1edbi.",
      collocations: ["top energy efficiency rating", "five-star rating"]
    }
    ,
    {
      id: "mega-unit-2-water-purifier",
      word: "water purifier",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e1y l\u1ecdc n\u01b0\u1edbc s\u1ea1ch u\u1ed1ng t\u1ea1i v\u00f2i",
      ipa: "/\u02c8w\u0254\u02d0t\u0259 \u02ccpj\u028a\u0259r\u026afa\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=water+purifier&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A reverse osmosis water purifier delivers pure drinking water directly to the tap.",
      exampleVi: "M\u00e1y l\u1ecdc n\u01b0\u1edbc RO cung c\u1ea5p ngu\u1ed3n n\u01b0\u1edbc u\u1ed1ng tinh khi\u1ebft tr\u1ef1c ti\u1ebfp ngay t\u1ea1i v\u00f2i gia \u0111\u00ecnh.",
      collocations: ["install a water purifier", "replace purifier filter"]
    }
    ,
    {
      id: "mega-unit-2-biodegradable-straw",
      word: "biodegradable straw",
      partOfSpeech: "n.phr",
      meaningVi: "\u1ed1ng h\u00fat t\u1ef1 ph\u00e2n h\u1ee7y b\u1eb1ng b\u1ed9t ng\u00f4 hay c\u1ecf b\u00e0ng",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl str\u0254\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable+straw&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coffee shops replaced plastic straws with biodegradable straws made of grass.",
      exampleVi: "C\u00e1c qu\u00e1n c\u00e0 ph\u00ea thay th\u1ebf \u1ed1ng h\u00fat nh\u1ef1a b\u1eb1ng \u1ed1ng h\u00fat t\u1ef1 ph\u00e2n h\u1ee7y l\u00e0m t\u1eeb c\u1ecf b\u00e0ng.",
      collocations: ["sip through biodegradable straws", "use natural straws"]
    }
    ,
    {
      id: "mega-unit-2-ocean-cleanup",
      word: "ocean cleanup",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch l\u00e0m s\u1ea1ch r\u00e1c th\u1ea3i \u0111\u1ea1i d\u01b0\u01a1ng",
      ipa: "/\u02c8\u0259\u028a\u0283n \u02c8kli\u02d0n\u028cp/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ocean+cleanup&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Automated floating barriers assist in large-scale ocean cleanup initiatives.",
      exampleVi: "C\u00e1c h\u00e0ng r\u00e0o n\u1ed5i t\u1ef1 \u0111\u1ed9ng h\u1ed7 tr\u1ee3 \u0111\u1eafc l\u1ef1c trong chi\u1ebfn d\u1ecbch d\u1ecdn s\u1ea1ch r\u00e1c bi\u1ec3n.",
      collocations: ["participate in ocean cleanup", "support ocean cleanups"]
    }
    ,
    {
      id: "mega-unit-2-energy-conservationist",
      word: "energy conservationist",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi t\u00edch c\u1ef1c c\u1ed5 v\u0169 ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng",
      ipa: "/\u02c8en\u0259d\u0292i \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283\u0259n\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+conservationist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Energy conservationists urge citizens to turn off unused room fans.",
      exampleVi: "C\u00e1c nh\u00e0 ho\u1ea1t \u0111\u1ed9ng b\u1ea3o t\u1ed3n n\u0103ng l\u01b0\u1ee3ng k\u00eau g\u1ecdi ng\u01b0\u1eddi d\u00e2n t\u1eaft qu\u1ea1t khi r\u1eddi ph\u00f2ng.",
      collocations: ["advise like a conservationist", "leading conservationist"]
    }
    ,
    {
      id: "mega-unit-2-sustainable-lifestyle",
      word: "sustainable lifestyle",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ed1i s\u1ed1ng b\u1ec1n v\u1eefng h\u00e0i h\u00f2a thi\u00ean nhi\u00ean",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8la\u026afsta\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+lifestyle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adopting a sustainable lifestyle begins with small daily mindful habits.",
      exampleVi: "Theo \u0111u\u1ed5i l\u1ed1i s\u1ed1ng b\u1ec1n v\u1eefng b\u1eaft \u0111\u1ea7u t\u1eeb nh\u1eefng th\u00f3i quen nh\u1ecf ch\u1eebng m\u1ef1c m\u1ed7i ng\u00e0y.",
      collocations: ["adopt a sustainable lifestyle", "lead a sustainable lifestyle"]
    }
    ,
    {
      id: "mega-unit-2-eco-conscious",
      word: "eco-conscious",
      partOfSpeech: "adj",
      meaningVi: "c\u00f3 \u00fd th\u1ee9c s\u00e2u s\u1eafc v\u1ec1 b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02c8i\u02d0k\u0259\u028a \u02c8k\u0252n\u0283\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-conscious&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eco-conscious teenagers refuse to purchase over-packaged takeaway food.",
      exampleVi: "Th\u1ebf h\u1ec7 tr\u1ebb c\u00f3 \u00fd th\u1ee9c m\u00f4i tr\u01b0\u1eddng t\u1eeb ch\u1ed1i mua \u0111\u1ed3 \u0103n mang v\u1ec1 b\u1ecdc qu\u00e1 nhi\u1ec1u l\u1edbp nilon.",
      collocations: ["eco-conscious generation", "become eco-conscious"]
    }
    ,
    {
      id: "mega-unit-2-electronic-invoice",
      word: "electronic invoice",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00f3a \u0111\u01a1n \u0111i\u1ec7n t\u1eed kh\u00f4ng d\u00f9ng gi\u1ea5y in",
      ipa: "/\u026a\u02cclek\u02c8tr\u0252n\u026ak \u02c8\u026anv\u0254\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=electronic+invoice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Opting for electronic invoices saves millions of reams of paper annually.",
      exampleVi: "L\u1ef1a ch\u1ecdn h\u00f3a \u0111\u01a1n \u0111i\u1ec7n t\u1eed gi\u00fap ti\u1ebft ki\u1ec7m h\u00e0ng tri\u1ec7u ram gi\u1ea5y in m\u1ed7i n\u0103m.",
      collocations: ["receive electronic invoices", "issue electronic invoices"]
    }
    ,
    {
      id: "mega-unit-2-environmental-steward",
      word: "environmental steward",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi qu\u1ea3n h\u1ed9 g\u00ecn gi\u1eef m\u00f4i tr\u01b0\u1eddng t\u1ef1 nhi\u00ean",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u02c8stju\u02d0\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+steward&type=2",
      imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each student should act as a responsible environmental steward on campus.",
      exampleVi: "M\u1ed7i h\u1ecdc sinh n\u00ean \u0111\u00f3ng vai tr\u00f2 l\u00e0 m\u1ed9t ng\u01b0\u1eddi qu\u1ea3n h\u1ed9 c\u00f3 tr\u00e1ch nhi\u1ec7m g\u00ecn gi\u1eef khu\u00f4n vi\u00ean tr\u01b0\u1eddng.",
      collocations: ["serve as environmental stewards", "proud environmental steward"]
    }
    ,
    {
      id: "mega-unit-2-green-campus",
      word: "green campus",
      partOfSpeech: "n.phr",
      meaningVi: "khu\u00f4n vi\u00ean tr\u01b0\u1eddng h\u1ecdc xanh m\u00e1t th\u00e2n thi\u1ec7n",
      ipa: "/\u0261ri\u02d0n \u02c8k\u00e6mp\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+campus&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trees and flowerbeds create an invigorating atmosphere in our green campus.",
      exampleVi: "C\u00e2y xanh v\u00e0 b\u1ed3n hoa t\u1ea1o n\u00ean b\u1ea7u kh\u00f4ng kh\u00ed t\u01b0\u01a1i m\u1edbi trong khu\u00f4n vi\u00ean tr\u01b0\u1eddng xanh.",
      collocations: ["build a green campus", "award for green campus"]
    }
  ],
  "unit-3-music": [
    {
      id: "v10-u3-melody",
      word: "melody",
      partOfSpeech: "n",
      meaningVi: "giai \u0111i\u1ec7u b\u00e0i h\u00e1t",
      ipa: "/\u02c8mel\u0259di/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=melody&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The sweet piano melody captivated the entire concert hall.",
      exampleVi: "Giai \u0111i\u1ec7u piano ng\u1ecdt ng\u00e0o l\u00e0m say \u0111\u1eafm c\u1ea3 kh\u00e1n ph\u00f2ng h\u00f2a nh\u1ea1c.",
      collocations: ["catchy melody", "haunting melody", "memorable melody"]
    },
    {
      id: "v10-u3-harmony",
      word: "harmony",
      partOfSpeech: "n",
      meaningVi: "h\u00f2a \u00e2m, s\u1ef1 ph\u1ed1i h\u1ee3p \u00e2m h\u01b0\u1edfng",
      ipa: "/\u02c8h\u0251\u02d0m\u0259ni/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=harmony&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Singing in four-part harmony produces a rich, resonant choral sound.",
      exampleVi: "H\u00e1t b\u00e8 h\u00f2a \u00e2m b\u1ed1n ph\u1ea7n t\u1ea1o n\u00ean \u00e2m h\u01b0\u1edfng d\u00e0n h\u1ee3p x\u01b0\u1edbng vang d\u1ed9i.",
      collocations: ["vocal harmony", "sing in harmony"]
    },
    {
      id: "v10-u3-rhythm",
      word: "rhythm",
      partOfSpeech: "n",
      meaningVi: "nh\u1ecbp \u0111i\u1ec7u, ti\u1ebft t\u1ea5u",
      ipa: "/\u02c8r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rhythm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The energetic drum rhythm got everyone in the stadium dancing.",
      exampleVi: "Ti\u1ebft t\u1ea5u tr\u1ed1ng tr\u00e0n \u0111\u1ea7y n\u0103ng l\u01b0\u1ee3ng khi\u1ebfn m\u1ecdi ng\u01b0\u1eddi trong s\u00e2n v\u1eadn \u0111\u1ed9ng c\u00f9ng nh\u1ea3y m\u00faa.",
      collocations: ["steady rhythm", "infectious rhythm"]
    },
    {
      id: "v10-u3-lyrics",
      word: "lyrics",
      partOfSpeech: "n.pl",
      meaningVi: "l\u1eddi b\u00e0i h\u00e1t",
      ipa: "/\u02c8l\u026ar\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lyrics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "His poetic lyrics convey deep emotional longings and nostalgia.",
      exampleVi: "L\u1eddi b\u00e0i h\u00e1t \u0111\u1ea7y ch\u1ea5t th\u01a1 c\u1ee7a anh \u1ea5y truy\u1ec1n t\u1ea3i n\u1ed7i ho\u00e0i ni\u1ec7m s\u00e2u l\u1eafng.",
      collocations: ["write heartfelt lyrics", "meaningful lyrics"]
    },
    {
      id: "v10-u3-composer",
      word: "composer",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 so\u1ea1n nh\u1ea1c t\u00e0i ba",
      ipa: "/k\u0259m\u02c8p\u0259\u028az\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=composer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Beethoven is recognized worldwide as one of humanity's greatest classical composers.",
      exampleVi: "Beethoven \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn l\u00e0 m\u1ed9t trong nh\u1eefng nh\u00e0 so\u1ea1n nh\u1ea1c c\u1ed5 \u0111i\u1ec3n v\u0129 \u0111\u1ea1i nh\u1ea5t.",
      collocations: ["classical composer", "prolific composer"]
    },
    {
      id: "v10-u3-vocalist",
      word: "vocalist",
      partOfSpeech: "n",
      meaningVi: "ca s\u0129 h\u00e1t ch\u00ednh",
      ipa: "/\u02c8v\u0259\u028ak\u0259l\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocalist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The lead vocalist delivered an emotional ballad that brought tears to fans' eyes.",
      exampleVi: "Ca s\u0129 h\u00e1t ch\u00ednh \u0111\u00e3 th\u1ec3 hi\u1ec7n m\u1ed9t kh\u00fac ballad x\u00fac \u0111\u1ed9ng khi\u1ebfn ng\u01b0\u1eddi h\u00e2m m\u1ed9 r\u01a1i l\u1ec7.",
      collocations: ["lead vocalist", "talented vocalist"]
    },
    {
      id: "v10-u3-debut-album",
      word: "debut album",
      partOfSpeech: "n.phr",
      meaningVi: "album \u0111\u1ea7u tay ra m\u1eaft c\u00f4ng ch\u00fang",
      ipa: "/\u02c8de\u026abju\u02d0 \u02c8\u00e6lb\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=debut+album&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her debut album topped the international music charts in less than 48 hours.",
      exampleVi: "Album \u0111\u1ea7u tay c\u1ee7a c\u00f4 \u1ea5y \u0111\u00e3 v\u01b0\u01a1n l\u00ean d\u1eabn \u0111\u1ea7u c\u00e1c b\u1ea3ng x\u1ebfp h\u1ea1ng \u00e2m nh\u1ea1c qu\u1ed1c t\u1ebf trong ch\u01b0a \u0111\u1ea7y 48 gi\u1edd.",
      collocations: ["release a debut album", "critically acclaimed debut album"]
    },
    {
      id: "v10-u3-platinum-record",
      word: "platinum record",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u0129a b\u1ea1ch kim (ch\u1ee9ng nh\u1eadn k\u1ef7 l\u1ee5c b\u00e1n \u0111\u0129a)",
      ipa: "/\u02c8pl\u00e6t\u026an\u0259m \u02c8rek\u0254\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=platinum+record&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Selling over one million copies earned the young band their first platinum record.",
      exampleVi: "B\u00e1n \u0111\u01b0\u1ee3c h\u01a1n m\u1ed9t tri\u1ec7u b\u1ea3n \u0111\u00e3 mang l\u1ea1i cho ban nh\u1ea1c tr\u1ebb chi\u1ebfc \u0111\u0129a b\u1ea1ch kim \u0111\u1ea7u ti\u00ean.",
      collocations: ["go platinum", "platinum record certification"]
    },
    {
      id: "v10-u3-instrumental",
      word: "instrumental",
      partOfSpeech: "adj / n",
      meaningVi: "b\u1ea3n h\u00f2a t\u1ea5u kh\u00f4ng l\u1eddi / nh\u1ea1c c\u1ee5",
      ipa: "/\u02cc\u026anstr\u0259\u02c8mentl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=instrumental&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She prefers listening to calming instrumental music while studying math.",
      exampleVi: "C\u00f4 \u1ea5y th\u00edch nghe nh\u1ea1c h\u00f2a t\u1ea5u \u00eam d\u1ecbu trong khi h\u1ecdc to\u00e1n.",
      collocations: ["instrumental version", "instrumental track"]
    },
    {
      id: "v10-u3-catchy-tune",
      word: "catchy tune",
      partOfSpeech: "n.phr",
      meaningVi: "giai \u0111i\u1ec7u b\u1eaft tai, d\u1ec5 nh\u1edb",
      ipa: "/\u02c8k\u00e6t\u0283i tju\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=catchy+tune&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The commercial used a catchy tune that stuck in people's minds all day.",
      exampleVi: "Qu\u1ea3ng c\u00e1o \u0111\u00e3 s\u1eed d\u1ee5ng m\u1ed9t giai \u0111i\u1ec7u r\u1ea5t b\u1eaft tai khi\u1ebfn ng\u01b0\u1eddi ta nh\u1edb m\u00e3i c\u1ea3 ng\u00e0y.",
      collocations: ["hum a catchy tune", "catchy tune with upbeat tempo"]
    },
    {
      id: "v10-u3-orchestra",
      word: "orchestra",
      partOfSpeech: "n",
      meaningVi: "d\u00e0n nh\u1ea1c giao h\u01b0\u1edfng",
      ipa: "/\u02c8\u0254\u02d0k\u026astr\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=orchestra&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The symphony orchestra performed Beethoven's Ninth Symphony flawlessly.",
      exampleVi: "D\u00e0n nh\u1ea1c giao h\u01b0\u1edfng \u0111\u00e3 bi\u1ec3u di\u1ec5n b\u1ea3n Giao h\u01b0\u1edfng s\u1ed1 9 c\u1ee7a Beethoven kh\u00f4ng m\u1ed9t l\u1ed7i nh\u1ecf.",
      collocations: ["symphony orchestra", "conduct an orchestra"]
    },
    {
      id: "v10-u3-audition",
      word: "audition",
      partOfSpeech: "n / v",
      meaningVi: "bu\u1ed5i th\u1eed gi\u1ecdng, th\u1eed vai ngh\u1ec7 thu\u1eadt",
      ipa: "/\u0254\u02d0\u02c8d\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=audition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hundreds of aspiring singers queued up for the national talent show audition.",
      exampleVi: "H\u00e0ng tr\u0103m ca s\u0129 tr\u1ebb tri\u1ec3n v\u1ecdng x\u1ebfp h\u00e0ng tham gia bu\u1ed5i th\u1eed gi\u1ecdng cu\u1ed9c thi t\u00ecm ki\u1ebfm t\u00e0i n\u0103ng.",
      collocations: ["pass an audition", "hold an audition"]
    },
    {
      id: "v10-u3-concert-tour",
      word: "concert tour",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ebfn l\u01b0u di\u1ec5n ca nh\u1ea1c",
      ipa: "/\u02c8k\u0252ns\u0259t t\u028a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=concert+tour&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The pop star announced a worldwide concert tour spanning 25 major cities.",
      exampleVi: "Ng\u00f4i sao nh\u1ea1c pop \u0111\u00e3 c\u00f4ng b\u1ed1 chuy\u1ebfn l\u01b0u di\u1ec5n v\u00f2ng quanh th\u1ebf gi\u1edbi qua 25 th\u00e0nh ph\u1ed1 l\u1edbn.",
      collocations: ["stadium concert tour", "kick off a concert tour"]
    },
    {
      id: "v10-u3-fanbase",
      word: "fanbase",
      partOfSpeech: "n",
      meaningVi: "c\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi h\u00e2m m\u1ed9",
      ipa: "/\u02c8f\u00e6nbe\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fanbase&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A loyal and supportive fanbase propelled the indie band to global stardom.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng fan trung th\u00e0nh v\u00e0 nhi\u1ec7t th\u00e0nh \u0111\u00e3 \u0111\u01b0a ban nh\u1ea1c indie l\u00ean t\u1ea7m ng\u00f4i sao to\u00e0n c\u1ea7u.",
      collocations: ["loyal fanbase", "massive fanbase"]
    },
    {
      id: "v10-u3-live-performance",
      word: "live performance",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i bi\u1ec3u di\u1ec5n tr\u1ef1c ti\u1ebfp tr\u00ean s\u00e2n kh\u1ea5u",
      ipa: "/la\u026av p\u0259\u02c8f\u0254\u02d0m\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=live+performance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nothing compares to the raw adrenaline of seeing a live performance on stage.",
      exampleVi: "Kh\u00f4ng g\u00ec s\u00e1nh b\u1eb1ng c\u1ea3m x\u00fac b\u00f9ng n\u1ed5 khi \u0111\u01b0\u1ee3c xem m\u1ed9t bu\u1ed5i bi\u1ec3u di\u1ec5n tr\u1ef1c ti\u1ebfp tr\u00ean s\u00e2n kh\u1ea5u.",
      collocations: ["give a live performance", "spectacular live performance"]
    },
    {
      id: "v10-u3-release-a-single",
      word: "release a single",
      partOfSpeech: "v.phr",
      meaningVi: "ph\u00e1t h\u00e0nh \u0111\u0129a \u0111\u01a1n \u00e2m nh\u1ea1c",
      ipa: "/r\u026a\u02c8li\u02d0s \u0259 \u02c8s\u026a\u014b\u0261l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=release+a+single&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The artist plans to release a single ahead of the full studio album next month.",
      exampleVi: "Ngh\u1ec7 s\u0129 d\u1ef1 \u0111\u1ecbnh ph\u00e1t h\u00e0nh m\u1ed9t \u0111\u0129a \u0111\u01a1n tr\u01b0\u1edbc khi ra m\u1eaft to\u00e0n b\u1ed9 album ph\u00f2ng thu v\u00e0o th\u00e1ng t\u1edbi.",
      collocations: ["release a new single", "chart-topping single"]
    },
    {
      id: "v10-u3-musical-instrument",
      word: "musical instrument",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ea1c c\u1ee5 bi\u1ec3u di\u1ec5n",
      ipa: "/\u02c8mju\u02d0z\u026akl \u02c8\u026anstr\u0259m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=musical+instrument&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning to play a musical instrument like the guitar improves focus and brain memory.",
      exampleVi: "H\u1ecdc ch\u01a1i m\u1ed9t nh\u1ea1c c\u1ee5 nh\u01b0 \u0111\u00e0n ghi-ta gi\u00fap t\u0103ng c\u01b0\u1eddng s\u1ef1 t\u1eadp trung v\u00e0 tr\u00ed nh\u1edb.",
      collocations: ["play a musical instrument", "traditional musical instrument"]
    },
    {
      id: "v10-u3-folk-music",
      word: "folk music",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e2m nh\u1ea1c d\u00e2n gian, truy\u1ec1n th\u1ed1ng",
      ipa: "/f\u0259\u028ak \u02c8mju\u02d0z\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folk+music&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese quan ho is an iconic genre of traditional folk music.",
      exampleVi: "D\u00e2n ca quan h\u1ecd l\u00e0 th\u1ec3 lo\u1ea1i \u00e2m nh\u1ea1c d\u00e2n gian truy\u1ec1n th\u1ed1ng mang t\u00ednh bi\u1ec3u t\u01b0\u1ee3ng c\u1ee7a Vi\u1ec7t Nam.",
      collocations: ["traditional folk music", "preserve folk music"]
    },
    {
      id: "v10-u3-acapella",
      word: "acapella",
      partOfSpeech: "n / adj",
      meaningVi: "h\u00e1t chay kh\u00f4ng nh\u1ea1c \u0111\u1ec7m",
      ipa: "/\u02cc\u0251\u02d0 k\u0259\u02c8pel\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=acapella&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The choir sang in acapella, astonishing listeners with pure vocal harmonies.",
      exampleVi: "D\u00e0n h\u1ee3p x\u01b0\u1edbng h\u00e1t chay kh\u00f4ng nh\u1ea1c \u0111\u1ec7m, l\u00e0m kh\u00e1n gi\u1ea3 kinh ng\u1ea1c b\u1edfi s\u1ef1 h\u00f2a gi\u1ecdng thu\u1ea7n khi\u1ebft.",
      collocations: ["sing acapella", "acapella group"]
    },
    {
      id: "v10-u3-chart-topping",
      word: "chart-topping",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u1ee9ng \u0111\u1ea7u c\u00e1c b\u1ea3ng x\u1ebfp h\u1ea1ng \u00e2m nh\u1ea1c",
      ipa: "/\u02c8t\u0283\u0251\u02d0t t\u0252p\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chart-topping&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Their chart-topping hit was streamed over a billion times across all streaming platforms.",
      exampleVi: "B\u1ea3n hit \u0111\u1ee9ng \u0111\u1ea7u b\u1ea3ng x\u1ebfp h\u1ea1ng c\u1ee7a h\u1ecd \u0111\u00e3 \u0111\u01b0\u1ee3c nghe tr\u1ef1c tuy\u1ebfn h\u01a1n m\u1ed9t t\u1ef7 l\u01b0\u1ee3t.",
      collocations: ["chart-topping hit", "chart-topping track"]
    },
    {
      id: "v10-u3-acoustic",
      word: "acoustic",
      partOfSpeech: "adj",
      meaningVi: "m\u1ed9c m\u1ea1c, kh\u00f4ng d\u00f9ng \u00e2m thanh \u0111i\u1ec7n t\u1eed",
      ipa: "/\u0259\u02c8ku\u02d0st\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=acoustic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The singer performed an intimate acoustic session with just his vintage guitar.",
      exampleVi: "Nam ca s\u0129 \u0111\u00e3 bi\u1ec3u di\u1ec5n m\u1ed9t bu\u1ed5i nh\u1ea1c m\u1ed9c \u1ea5m c\u00fang ch\u1ec9 v\u1edbi c\u00e2y \u0111\u00e0n ghi-ta c\u1ed5 \u0111i\u1ec3n.",
      collocations: ["acoustic guitar", "acoustic version"]
    },
    {
      id: "v10-u3-tempo",
      word: "tempo",
      partOfSpeech: "n",
      meaningVi: "t\u1ed1c \u0111\u1ed9 nh\u1ecbp \u0111i\u1ec7u c\u1ee7a b\u1ea3n nh\u1ea1c",
      ipa: "/\u02c8temp\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tempo&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The song switches from a slow romantic ballad to a high-tempo dance track.",
      exampleVi: "B\u00e0i h\u00e1t chuy\u1ec3n t\u1eeb giai \u0111i\u1ec7u ballad tr\u1eef t\u00ecnh ch\u1eadm r\u00e3i sang nh\u1ecbp \u0111i\u1ec7u khi\u00eau v\u0169 nhanh s\u00f4i \u0111\u1ed9ng.",
      collocations: ["fast tempo", "upbeat tempo"]
    },
    {
      id: "v10-u3-soundtrack",
      word: "soundtrack",
      partOfSpeech: "n",
      meaningVi: "nh\u1ea1c phim ch\u00ednh th\u1ee9c",
      ipa: "/\u02c8sa\u028andtr\u00e6k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soundtrack&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The cinematic soundtrack elevated every dramatic sequence in the adventure movie.",
      exampleVi: "Nh\u1ea1c phim \u0111\u00e3 n\u00e2ng t\u1ea7m m\u1ecdi ph\u00e2n c\u1ea3nh k\u1ecbch t\u00ednh trong b\u1ed9 phim phi\u00eau l\u01b0u.",
      collocations: ["original soundtrack (OST)", "compose a soundtrack"]
    },
    {
      id: "v10-u3-conductor",
      word: "conductor",
      partOfSpeech: "n",
      meaningVi: "nh\u1ea1c tr\u01b0\u1edfng ch\u1ec9 huy d\u00e0n nh\u1ea1c",
      ipa: "/k\u0259n\u02c8d\u028ckt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conductor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The orchestra conductor raised his baton, signaling the brass section to begin.",
      exampleVi: "V\u1ecb nh\u1ea1c tr\u01b0\u1edfng gi\u01a1 c\u00e2y \u0111\u0169a ch\u1ec9 huy, ra hi\u1ec7u cho d\u00e0n k\u00e8n \u0111\u1ed3ng b\u1eaft \u0111\u1ea7u t\u1ea5u nh\u1ea1c.",
      collocations: ["orchestra conductor", "distinguished conductor"]
    },
    {
      id: "v10-u3-encore",
      word: "encore",
      partOfSpeech: "n / v",
      meaningVi: "ti\u1ebft m\u1ee5c bi\u1ec3u di\u1ec5n l\u1ea1i theo y\u00eau c\u1ea7u kh\u00e1n gi\u1ea3",
      ipa: "/\u02c8\u0252\u014bk\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=encore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The crowd shouted enthusiastically for an encore until the band returned to stage.",
      exampleVi: "Kh\u00e1n gi\u1ea3 h\u00f2 reo \u0111\u00f2i h\u00e1t l\u1ea1i cho \u0111\u1ebfn khi ban nh\u1ea1c quay tr\u1edf l\u1ea1i s\u00e2n kh\u1ea5u.",
      collocations: ["play an encore", "demand an encore"]
    },
    {
      id: "v10-u3-music-streaming",
      word: "music streaming",
      partOfSpeech: "n.phr",
      meaningVi: "nghe nh\u1ea1c tr\u1ef1c tuy\u1ebfn tr\u00ean n\u1ec1n t\u1ea3ng s\u1ed1",
      ipa: "/\u02c8mju\u02d0z\u026ak \u02c8stri\u02d0m\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=music+streaming&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Music streaming services have transformed how youngsters discover international artists.",
      exampleVi: "D\u1ecbch v\u1ee5 nghe nh\u1ea1c tr\u1ef1c tuy\u1ebfn \u0111\u00e3 thay \u0111\u1ed5i c\u00e1ch gi\u1edbi tr\u1ebb kh\u00e1m ph\u00e1 ngh\u1ec7 s\u0129 qu\u1ed1c t\u1ebf.",
      collocations: ["music streaming service", "music streaming platform"]
    },
    {
      id: "v10-u3-versatile",
      word: "versatile",
      partOfSpeech: "adj",
      meaningVi: "\u0111a t\u00e0i, \u0111a d\u1ea1ng th\u1ec3 lo\u1ea1i bi\u1ec3u di\u1ec5n",
      ipa: "/\u02c8v\u025c\u02d0s\u0259ta\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=versatile&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She is a versatile musician who can effortlessly transition between jazz and rock.",
      exampleVi: "C\u00f4 \u1ea5y l\u00e0 m\u1ed9t nh\u1ea1c s\u0129 \u0111a t\u00e0i c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng chuy\u1ec3n t\u1eeb phong c\u00e1ch jazz sang rock.",
      collocations: ["versatile performer", "versatile musician"]
    },
    {
      id: "v10-u3-phenomenon",
      word: "phenomenon",
      partOfSpeech: "n",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng \u00e2m nh\u1ea1c n\u1ed5i b\u1eadt",
      ipa: "/f\u0259\u02c8n\u0252m\u026an\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=phenomenon&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The K-pop idol group became a global cultural phenomenon almost overnight.",
      exampleVi: "Nh\u00f3m th\u1ea7n t\u01b0\u1ee3ng K-pop \u0111\u00e3 tr\u1edf th\u00e0nh hi\u1ec7n t\u01b0\u1ee3ng v\u0103n h\u00f3a to\u00e0n c\u1ea7u g\u1ea7n nh\u01b0 ch\u1ec9 sau m\u1ed9t \u0111\u00eam.",
      collocations: ["musical phenomenon", "global phenomenon"]
    },
    {
      id: "v10-u3-record-label",
      word: "record label",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e3ng thu \u00e2m, ph\u00e1t h\u00e0nh \u0111\u0129a h\u00e1t",
      ipa: "/\u02c8rek\u0254\u02d0d \u02c8le\u026abl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=record+label&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Signing with a reputable record label opens doors to top audio production studios.",
      exampleVi: "K\u00fd h\u1ee3p \u0111\u1ed3ng v\u1edbi h\u00e3ng thu \u00e2m danh ti\u1ebfng m\u1edf ra c\u01a1 h\u1ed9i l\u00e0m vi\u1ec7c v\u1edbi c\u00e1c ph\u00f2ng thu h\u00e0ng \u0111\u1ea7u.",
      collocations: ["sign with a record label", "major record label"]
    },
    {
      id: "v10-u3-stage-presence",
      word: "stage presence",
      partOfSpeech: "n.phr",
      meaningVi: "phong th\u00e1i v\u00e0 th\u1ea7n th\u00e1i l\u00e0m ch\u1ee7 s\u00e2n kh\u1ea5u",
      ipa: "/ste\u026ad\u0292 \u02c8prezns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stage+presence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her magnetic stage presence keeps thousands of spectators thoroughly engaged.",
      exampleVi: "Th\u1ea7n th\u00e1i l\u00e0m ch\u1ee7 s\u00e2n kh\u1ea5u \u0111\u1ea7y cu\u1ed1n h\u00fat c\u1ee7a c\u00f4 \u1ea5y thu h\u00fat h\u00e0ng ng\u00e0n kh\u00e1n gi\u1ea3.",
      collocations: ["commanding stage presence", "charismatic stage presence"]
    },
    {
      id: "v10-u3-music-festival",
      word: "music festival",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ec5 h\u1ed9i \u00e2m nh\u1ea1c quy m\u00f4 l\u1edbn",
      ipa: "/\u02c8mju\u02d0z\u026ak \u02c8fest\u026avl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=music+festival&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Summer music festivals attract music lovers from every corner of the country.",
      exampleVi: "C\u00e1c l\u1ec5 h\u1ed9i \u00e2m nh\u1ea1c m\u00f9a h\u00e8 thu h\u00fat ng\u01b0\u1eddi y\u00eau nh\u1ea1c t\u1eeb kh\u1eafp m\u1ecdi mi\u1ec1n \u0111\u1ea5t n\u01b0\u1edbc.",
      collocations: ["outdoor music festival", "annual music festival"]
    },
    {
      id: "v10-u3-applause",
      word: "applause",
      partOfSpeech: "n",
      meaningVi: "tr\u00e0ng v\u1ed7 tay t\u00e1n th\u01b0\u1edfng nhi\u1ec7t li\u1ec7t",
      ipa: "/\u0259\u02c8pl\u0254\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=applause&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The final curtain dropped to thunderous applause and standing ovations.",
      exampleVi: "T\u1ea5m m\u00e0n s\u00e2n kh\u1ea5u kh\u00e9p l\u1ea1i trong tr\u00e0ng v\u1ed7 tay r\u1ec1n vang v\u00e0 s\u1ef1 t\u00e1n th\u01b0\u1edfng nhi\u1ec7t li\u1ec7t.",
      collocations: ["thunderous applause", "burst of applause"]
    },
    {
      id: "v10-u3-ballad",
      word: "ballad",
      partOfSpeech: "n",
      meaningVi: "kh\u00fac ca tr\u1eef t\u00ecnh ch\u1eadm r\u00e3i",
      ipa: "/\u02c8b\u00e6l\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ballad&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Romantic ballads are consistently requested on midnight radio programs.",
      exampleVi: "Nh\u1eefng b\u1ea3n ballad t\u00ecnh ca l\u00e3ng m\u1ea1n lu\u00f4n \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u nhi\u1ec1u nh\u1ea5t tr\u00ean \u0111\u00e0i ph\u00e1t thanh \u0111\u00eam.",
      collocations: ["emotional ballad", "love ballad"]
    },
    {
      id: "v10-u3-duet",
      word: "duet",
      partOfSpeech: "n",
      meaningVi: "ti\u1ebft m\u1ee5c song ca hai gi\u1ecdng h\u00e1t",
      ipa: "/dju\u02d0\u02c8et/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=duet&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The two superstars teamed up to sing a heartfelt duet for the charity gala.",
      exampleVi: "Hai si\u00eau sao \u0111\u00e3 c\u00f9ng nhau song ca m\u1ed9t ti\u1ebft m\u1ee5c \u0111\u1ea7y c\u1ea3m x\u00fac cho \u0111\u00eam ti\u1ec7c t\u1eeb thi\u1ec7n.",
      collocations: ["perform a duet", "sing a duet with"]
    },
    {
      id: "v10-u3-pitch",
      word: "pitch",
      partOfSpeech: "n",
      meaningVi: "cao \u0111\u1ed9 c\u1ee7a n\u1ed1t nh\u1ea1c",
      ipa: "/p\u026at\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pitch&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Singers with perfect pitch can identify any musical note without hesitation.",
      exampleVi: "Nh\u1eefng ca s\u0129 c\u00f3 \u0111\u00f4i tai c\u1ea3m \u00e2m cao \u0111\u1ed9 tuy\u1ec7t \u0111\u1ed1i c\u00f3 th\u1ec3 nh\u1eadn bi\u1ebft b\u1ea5t k\u1ef3 n\u1ed1t nh\u1ea1c n\u00e0o ngay t\u1ee9c th\u00ec.",
      collocations: ["perfect pitch", "high pitch", "low pitch"]
    },
    {
      id: "v10-u3-chords",
      word: "chords",
      partOfSpeech: "n.pl",
      meaningVi: "h\u1ee3p \u00e2m k\u1ebft h\u1ee3p nhi\u1ec1u n\u1ed1t nh\u1ea1c",
      ipa: "/k\u0254\u02d0dz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chords&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mastering basic guitar chords allows beginners to accompany hundreds of folk songs.",
      exampleVi: "N\u1eafm v\u1eefng c\u00e1c h\u1ee3p \u00e2m ghi-ta c\u01a1 b\u1ea3n cho ph\u00e9p ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u \u0111\u1ec7m h\u00e0ng tr\u0103m b\u00e0i h\u00e1t.",
      collocations: ["guitar chords", "strum chords"]
    },
    {
      id: "v10-u3-resonance",
      word: "resonance",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed9 ng\u00e2n vang s\u00e2u c\u1ee7a \u00e2m thanh",
      ipa: "/\u02c8rez\u0259n\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resonance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The wooden acoustic cello chamber provides extraordinary warmth and resonance.",
      exampleVi: "Th\u00f9ng \u0111\u00e0n cello b\u1eb1ng g\u1ed7 m\u1ed9c mang l\u1ea1i \u0111\u1ed9 ng\u00e2n vang v\u00e0 \u00e2m s\u1eafc tr\u1ea7m \u1ea5m \u0111\u1eb7c bi\u1ec7t.",
      collocations: ["deep resonance", "acoustic resonance"]
    },
    {
      id: "v10-u3-standing-ovation",
      word: "standing ovation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ee9ng d\u1eady v\u1ed7 tay t\u00e1n th\u01b0\u1edfng n\u1ed3ng nhi\u1ec7t",
      ipa: "/\u02ccst\u00e6nd\u026a\u014b \u0259\u028a\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=standing+ovation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The virtuosic pianist received a three-minute standing ovation from the audience.",
      exampleVi: "Ngh\u1ec7 s\u0129 piano b\u1eadc th\u1ea7y \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c tr\u00e0ng ph\u00e1o tay \u0111\u1ee9ng t\u00e1n th\u01b0\u1edfng k\u00e9o d\u00e0i ba ph\u00fat t\u1eeb kh\u00e1n gi\u1ea3.",
      collocations: ["receive a standing ovation", "give a standing ovation"]
    }
    ,
    {
      id: "v10-extra-soundtrack",
      word: "soundtrack",
      partOfSpeech: "n",
      meaningVi: "nh\u1ea1c n\u1ec1n phim \u1ea3nh",
      ipa: "/\u02c8sa\u028andtr\u00e6k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soundtrack&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The movie soundtrack topped global streaming charts for three months.",
      exampleVi: "Nh\u1ea1c phim \u0111\u00e3 \u0111\u1ee9ng \u0111\u1ea7u c\u00e1c b\u1ea3ng x\u1ebfp h\u1ea1ng tr\u1ef1c tuy\u1ebfn su\u1ed1t ba th\u00e1ng.",
      collocations: ["original soundtrack", "listen to the soundtrack"]
    }
    ,
    {
      id: "v10-extra-acoustic-guitar",
      word: "acoustic guitar",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0n ghi-ta m\u1ed9c truy\u1ec1n th\u1ed1ng",
      ipa: "/\u0259\u02ccku\u02d0st\u026ak \u0261\u026a\u02c8t\u0251\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=acoustic+guitar&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He played a gentle folk song on his vintage acoustic guitar.",
      exampleVi: "Anh \u1ea5y \u0111\u00e3 g\u1ea3y m\u1ed9t b\u1ea3n d\u00e2n ca \u00eam d\u1ecbu tr\u00ean c\u00e2y \u0111\u00e0n ghi-ta m\u1ed9c c\u1ed5 \u0111i\u1ec3n.",
      collocations: ["strum an acoustic guitar", "acoustic guitar cords"]
    }
    ,
    {
      id: "v10-extra-vocal-range",
      word: "vocal range",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u00e3ng gi\u1ecdng h\u00e1t c\u1ee7a ca s\u0129",
      ipa: "/\u02c8v\u0259\u028akl re\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocal+range&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The soprano amazed the judges with her impressive four-octave vocal range.",
      exampleVi: "N\u1eef ca s\u0129 th\u00ednh ph\u00f2ng l\u00e0m ban gi\u00e1m kh\u1ea3o kinh ng\u1ea1c v\u1edbi qu\u00e3ng gi\u1ecdng b\u1ed1n qu\u00e3ng t\u00e1m.",
      collocations: ["wide vocal range", "extend vocal range"]
    }
    ,
    {
      id: "v10-extra-sing-along",
      word: "sing-along",
      partOfSpeech: "n",
      meaningVi: "bu\u1ed5i h\u00e1t h\u00f2a gi\u1ecdng c\u00f9ng nhau",
      ipa: "/\u02c8s\u026a\u014b \u0259l\u0252\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sing-along&type=2",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The campfire ended with an energetic acoustic sing-along.",
      exampleVi: "\u0110\u00eam l\u1eeda tr\u1ea1i kh\u00e9p l\u1ea1i b\u1eb1ng m\u1ed9t m\u00e0n h\u00f2a gi\u1ecdng h\u00e1t c\u00f9ng nhau \u0111\u1ea7y h\u00e0o h\u1ee9ng.",
      collocations: ["join a sing-along", "fun sing-along"]
    }
    ,
    {
      id: "mega-unit-3-melody",
      word: "melody",
      partOfSpeech: "n",
      meaningVi: "giai \u0111i\u1ec7u b\u00e0i h\u00e1t du d\u01b0\u01a1ng",
      ipa: "/\u02c8mel\u0259di/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=melody&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The sweet violin melody lingered in the concert hall long after the performance ended.",
      exampleVi: "Giai \u0111i\u1ec7u v\u0129 c\u1ea7m ng\u1ecdt ng\u00e0o c\u00f2n ng\u00e2n vang trong kh\u00e1n ph\u00f2ng r\u1ea5t l\u00e2u sau khi bu\u1ed5i bi\u1ec3u di\u1ec5n k\u1ebft th\u00fac.",
      collocations: ["catchy melody", "haunting melody"]
    }
    ,
    {
      id: "mega-unit-3-harmony",
      word: "harmony",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 h\u00f2a \u00e2m ph\u1ed1i kh\u00ed du d\u01b0\u01a1ng",
      ipa: "/\u02c8h\u0251\u02d0m\u0259ni/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=harmony&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The choir singers blended their voices in sublime four-part harmony.",
      exampleVi: "D\u00e0n h\u1ee3p x\u01b0\u1edbng h\u00f2a gi\u1ecdng trong b\u1ea3n h\u00f2a \u00e2m b\u1ed1n b\u00e8 tuy\u1ec7t m\u1ef9.",
      collocations: ["vocal harmony", "rich harmonies"]
    }
    ,
    {
      id: "mega-unit-3-rhythm-section",
      word: "rhythm section",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ed9 ph\u1eadn ti\u1ebft t\u1ea5u tr\u1ed1ng v\u00e0 bass trong ban nh\u1ea1c",
      ipa: "/\u02c8r\u026a\u00f0\u0259m \u02c8sek\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rhythm+section&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A tight rhythm section keeps the jazz ensemble synchronized.",
      exampleVi: "B\u1ed9 ph\u1eadn g\u00f5 ti\u1ebft t\u1ea5u ch\u1eafc nh\u1ecbp gi\u00fap ban nh\u1ea1c jazz gi\u1eef \u0111\u01b0\u1ee3c s\u1ef1 \u0111\u1ed3ng \u0111i\u1ec7u.",
      collocations: ["solid rhythm section", "drive the rhythm section"]
    }
    ,
    {
      id: "mega-unit-3-orchestra-conductor",
      word: "orchestra conductor",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ea1c tr\u01b0\u1edfng ch\u1ec9 huy d\u00e0n nh\u1ea1c giao h\u01b0\u1edfng",
      ipa: "/\u02c8\u0254\u02d0k\u026astr\u0259 k\u0259n\u02c8d\u028ckt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=orchestra+conductor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The orchestra conductor raised his baton and the grand overture commenced.",
      exampleVi: "V\u1ecb nh\u1ea1c tr\u01b0\u1edfng gi\u01a1 \u0111\u0169a ch\u1ec9 huy v\u00e0 kh\u00fac d\u1ea1o \u0111\u1ea7u ho\u00e0nh tr\u00e1ng b\u1eaft \u0111\u1ea7u c\u1ea5t l\u00ean.",
      collocations: ["renowned orchestra conductor", "cue from conductor"]
    }
    ,
    {
      id: "mega-unit-3-musical-score",
      word: "musical score",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n t\u1ed5ng ph\u1ed5 ghi n\u1ed1t nh\u1ea1c",
      ipa: "/\u02c8mju\u02d0z\u026akl sk\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=musical+score&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Pianists read complex musical scores effortlessly during recitals.",
      exampleVi: "Ngh\u1ec7 s\u0129 piano \u0111\u1ecdc c\u00e1c b\u1ea3n t\u1ed5ng ph\u1ed5 ph\u1ee9c t\u1ea1p m\u1ed9t c\u00e1ch thu\u1ea7n th\u1ee5c trong bu\u1ed5i \u0111\u1ed9c t\u1ea5u.",
      collocations: ["read a musical score", "compose a score"]
    }
    ,
    {
      id: "mega-unit-3-percussion-instrument",
      word: "percussion instrument",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ea1c c\u1ee5 g\u00f5 nh\u01b0 tr\u1ed1ng hay thanh la",
      ipa: "/p\u0259\u02c8k\u028c\u0283n \u02c8\u026anstr\u0259m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=percussion+instrument&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Xylophones and kettle drums belong to the percussion instrument family.",
      exampleVi: "M\u1ed9c c\u1ea7m v\u00e0 tr\u1ed1ng \u0111\u1ecbnh \u00e2m thu\u1ed9c b\u1ed9 nh\u1ea1c c\u1ee5 g\u00f5 trong d\u00e0n nh\u1ea1c.",
      collocations: ["play percussion instruments", "traditional percussion instruments"]
    }
    ,
    {
      id: "mega-unit-3-string-quartet",
      word: "string quartet",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ee9 t\u1ea5u \u0111\u00e0n d\u00e2y th\u00ednh ph\u00f2ng",
      ipa: "/str\u026a\u014b kw\u0254\u02d0\u02c8tet/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=string+quartet&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The string quartet delivered an intimate rendition of Beethoven's compositions.",
      exampleVi: "T\u1ee9 t\u1ea5u \u0111\u00e0n d\u00e2y mang l\u1ea1i m\u00e0n bi\u1ec3u di\u1ec5n \u1ea5m c\u00fang c\u00e1c t\u00e1c ph\u1ea9m c\u1ee7a Beethoven.",
      collocations: ["award-winning string quartet", "classical string quartet"]
    }
    ,
    {
      id: "mega-unit-3-vocal-timbre",
      word: "vocal timbre",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e2m s\u1eafc v\u00e0 m\u00e0u gi\u1ecdng \u0111\u1eb7c tr\u01b0ng c\u1ee7a ca s\u0129",
      ipa: "/\u02c8v\u0259\u028akl \u02c8t\u00e6mb\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocal+timbre&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her warm vocal timbre makes emotional ballads unforgettable.",
      exampleVi: "\u00c2m s\u1eafc gi\u1ecdng h\u00e1t \u1ea5m \u00e1p c\u1ee7a c\u00f4 khi\u1ebfn nh\u1eefng b\u1ea3n ballad tr\u1eef t\u00ecnh tr\u1edf n\u00ean kh\u00f3 qu\u00ean.",
      collocations: ["unique vocal timbre", "rich vocal timbre"]
    }
    ,
    {
      id: "mega-unit-3-folk-ballad",
      word: "folk ballad",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e0i d\u00e2n ca tr\u1eef t\u00ecnh qu\u00ea h\u01b0\u01a1ng",
      ipa: "/f\u0259\u028ak \u02c8b\u00e6l\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folk+ballad&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The folk ballad recounts ancient legends of mountain villages.",
      exampleVi: "B\u1ea3n d\u00e2n ca tr\u1eef t\u00ecnh k\u1ec3 l\u1ea1i nh\u1eefng truy\u1ec1n thuy\u1ebft c\u1ed5 x\u01b0a c\u1ee7a c\u00e1c b\u1ea3n l\u00e0ng v\u00f9ng cao.",
      collocations: ["sing folk ballads", "haunting folk ballad"]
    }
    ,
    {
      id: "mega-unit-3-acoustic-guitar",
      word: "acoustic guitar",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0n ghi-ta m\u1ed9c",
      ipa: "/\u0259\u02c8ku\u02d0st\u026ak \u0261\u026a\u02c8t\u0251\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=acoustic+guitar&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He unplugged the electric gear and strummed a wooden acoustic guitar.",
      exampleVi: "Anh r\u00fat ph\u00edch c\u1eafm d\u00e0n \u0111i\u1ec7n v\u00e0 g\u1ea3y nh\u1eefng n\u1ed1t \u00eam \u0111\u1ec1m tr\u00ean c\u00e2y ghi-ta m\u1ed9c.",
      collocations: ["play acoustic guitar", "strum acoustic guitar"]
    }
    ,
    {
      id: "mega-unit-3-music-conservatory",
      word: "music conservatory",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ea1c vi\u1ec7n \u0111\u00e0o t\u1ea1o \u00e2m nh\u1ea1c chuy\u00ean nghi\u1ec7p",
      ipa: "/\u02c8mju\u02d0z\u026ak k\u0259n\u02c8s\u025c\u02d0v\u0259tri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=music+conservatory&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Talented violinists audition rigorously to enter the national music conservatory.",
      exampleVi: "C\u00e1c ngh\u1ec7 s\u0129 violin t\u00e0i n\u0103ng thi tuy\u1ec3n g\u1eaft gao \u0111\u1ec3 b\u01b0\u1edbc ch\u00e2n v\u00e0o nh\u1ea1c vi\u1ec7n qu\u1ed1c gia.",
      collocations: ["study at a conservatory", "prestigious conservatory"]
    }
    ,
    {
      id: "mega-unit-3-chart-topping-hit",
      word: "chart-topping hit",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e0i h\u00e1t \u0111\u1ee9ng \u0111\u1ea7u c\u00e1c b\u1ea3ng x\u1ebfp h\u1ea1ng \u00e2m nh\u1ea1c",
      ipa: "/t\u0283\u0251\u02d0t \u02c8t\u0252p\u026a\u014b h\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chart-topping+hit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Their summer single became a chart-topping hit across digital streaming services.",
      exampleVi: "\u0110\u0129a \u0111\u01a1n m\u00f9a h\u00e8 c\u1ee7a h\u1ecd tr\u1edf th\u00e0nh b\u1ea3n hit \u0111\u1ee9ng \u0111\u1ea7u b\u1ea3ng x\u1ebfp h\u1ea1ng tr\u00ean c\u00e1c n\u1ec1n t\u1ea3ng s\u1ed1.",
      collocations: ["release a chart-topping hit", "produce hits"]
    }
    ,
    {
      id: "mega-unit-3-live-performance",
      word: "live performance",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i bi\u1ec3u di\u1ec5n tr\u1ef1c ti\u1ebfp tr\u00ean s\u00e2n kh\u1ea5u",
      ipa: "/la\u026av p\u0259\u02c8f\u0254\u02d0m\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=live+performance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nothing replicates the electrifying energy of a stadium live performance.",
      exampleVi: "Kh\u00f4ng \u0111i\u1ec1u g\u00ec c\u00f3 th\u1ec3 thay th\u1ebf \u0111\u01b0\u1ee3c ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng b\u00f9ng n\u1ed5 c\u1ee7a m\u1ed9t bu\u1ed5i di\u1ec5n tr\u1ef1c ti\u1ebfp.",
      collocations: ["give a live performance", "thrilling live performance"]
    }
    ,
    {
      id: "mega-unit-3-music-genre",
      word: "music genre",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ec3 lo\u1ea1i \u00e2m nh\u1ea1c",
      ipa: "/\u02c8mju\u02d0z\u026ak \u02c8\u0292\u0252nr\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=music+genre&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teenagers frequently explore diverse music genres from hip-hop to indie folk.",
      exampleVi: "Gi\u1edbi tr\u1ebb th\u01b0\u1eddng kh\u00e1m ph\u00e1 c\u00e1c d\u00f2ng nh\u1ea1c \u0111a d\u1ea1ng t\u1eeb hip-hop t\u1edbi indie folk.",
      collocations: ["explore music genres", "popular music genre"]
    }
    ,
    {
      id: "mega-unit-3-stage-lighting",
      word: "stage lighting",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng \u00e1nh s\u00e1ng s\u00e2n kh\u1ea5u bi\u1ec3u di\u1ec5n",
      ipa: "/ste\u026ad\u0292 \u02c8la\u026at\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stage+lighting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dynamic stage lighting synced perfectly with the drum crescendos.",
      exampleVi: "\u00c1nh s\u00e1ng s\u00e2n kh\u1ea5u chuy\u1ec3n \u0111\u1ed9ng \u0103n kh\u1edbp ho\u00e0n h\u1ea3o theo t\u1eebng nh\u1ecbp tr\u1ed1ng d\u1ed3n d\u1eadp.",
      collocations: ["spectacular stage lighting", "lighting designer"]
    }
    ,
    {
      id: "mega-unit-3-fan-community",
      word: "fan community",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi h\u00e2m m\u1ed9 trung th\u00e0nh",
      ipa: "/f\u00e6n k\u0259\u02c8mju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fan+community&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A global fan community organized philanthropic drives to celebrate the album launch.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi h\u00e2m m\u1ed9 to\u00e0n c\u1ea7u \u0111\u00e3 t\u1ed5 ch\u1ee9c chi\u1ebfn d\u1ecbch thi\u1ec7n nguy\u1ec7n m\u1eebng ra m\u1eaft album.",
      collocations: ["passionate fan community", "build a fan community"]
    }
    ,
    {
      id: "mega-unit-3-record-label",
      word: "record label",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e3ng thu \u00e2m v\u00e0 ph\u00e1t h\u00e0nh \u00e2m nh\u1ea1c",
      ipa: "/\u02c8rek\u0254\u02d0d \u02c8le\u026abl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=record+label&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Independent artists often launch their own record labels to retain creative freedom.",
      exampleVi: "C\u00e1c ngh\u1ec7 s\u0129 \u0111\u1ed9c l\u1eadp th\u01b0\u1eddng l\u1eadp h\u00e3ng \u0111\u0129a ri\u00eang \u0111\u1ec3 gi\u1eef tr\u1ecdn quy\u1ec1n t\u1ef1 do s\u00e1ng t\u1ea1o.",
      collocations: ["sign with a record label", "major record label"]
    }
    ,
    {
      id: "mega-unit-3-musical-prodigy",
      word: "musical prodigy",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ea7n \u0111\u1ed3ng \u00e2m nh\u1ea1c xu\u1ea5t ch\u00fang",
      ipa: "/\u02c8mju\u02d0z\u026akl \u02c8pr\u0252d\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=musical+prodigy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mozart was a renowned musical prodigy who composed sonatas at age five.",
      exampleVi: "Mozart l\u00e0 th\u1ea7n \u0111\u1ed3ng \u00e2m nh\u1ea1c l\u1eebng danh, ng\u01b0\u1eddi \u0111\u00e3 s\u00e1ng t\u00e1c b\u1ea3n sonata khi m\u1edbi l\u00ean n\u0103m.",
      collocations: ["celebrated musical prodigy", "child prodigy"]
    }
    ,
    {
      id: "mega-unit-3-sound-engineer",
      word: "sound engineer",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 s\u01b0 \u00e2m thanh ph\u00f2ng thu v\u00e0 s\u00e2n kh\u1ea5u",
      ipa: "/sa\u028and \u02ccend\u0292\u026a\u02c8n\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sound+engineer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The sound engineer balanced the microphone levels to prevent audio feedback.",
      exampleVi: "K\u1ef9 s\u01b0 \u00e2m thanh c\u00e2n ch\u1ec9nh micro \u0111\u1ec3 tr\u00e1nh hi\u1ec7n t\u01b0\u1ee3ng d\u1ed9i \u00e2m kh\u00f3 ch\u1ecbu.",
      collocations: ["skilled sound engineer", "work as a sound engineer"]
    }
    ,
    {
      id: "mega-unit-3-debut-album",
      word: "debut album",
      partOfSpeech: "n.phr",
      meaningVi: "album \u0111\u1ea7u tay ra m\u1eaft c\u00f4ng ch\u00fang",
      ipa: "/\u02c8de\u026abju\u02d0 \u02c8\u00e6lb\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=debut+album&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her debut album garnered widespread acclaim from leading music critics.",
      exampleVi: "Album \u0111\u1ea7u tay c\u1ee7a c\u00f4 nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 khen ng\u1ee3i n\u1ed3ng nhi\u1ec7t t\u1eeb gi\u1edbi ph\u00ea b\u00ecnh \u00e2m nh\u1ea1c.",
      collocations: ["release a debut album", "critically acclaimed debut album"]
    }
    ,
    {
      id: "mega-unit-3-audition",
      word: "audition",
      partOfSpeech: "n",
      meaningVi: "bu\u1ed5i th\u1eed gi\u1ecdng ho\u1eb7c di\u1ec5n th\u1eed",
      ipa: "/\u0254\u02d0\u02c8d\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=audition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hundreds of aspiring vocalists lined up early for the talent show audition.",
      exampleVi: "H\u00e0ng tr\u0103m gi\u1ecdng ca tr\u1ebb x\u1ebfp h\u00e0ng t\u1eeb s\u1edbm \u0111\u1ec3 tham gia bu\u1ed5i th\u1eed gi\u1ecdng cu\u1ed9c thi t\u00e0i n\u0103ng.",
      collocations: ["pass the audition", "attend an audition"]
    }
    ,
    {
      id: "mega-unit-3-musical-rhythm",
      word: "musical rhythm",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ecbp \u0111i\u1ec7u v\u00e0 ti\u1ebft t\u1ea5u \u00e2m nh\u1ea1c",
      ipa: "/\u02c8mju\u02d0z\u026akl \u02c8r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=musical+rhythm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Traditional drumming conveys a powerful musical rhythm that gets crowds dancing.",
      exampleVi: "Ti\u1ebfng tr\u1ed1ng truy\u1ec1n th\u1ed1ng mang l\u1ea1i nh\u1ecbp \u0111i\u1ec7u r\u1ed9n r\u00e3 khi\u1ebfn \u0111\u00e1m \u0111\u00f4ng mu\u1ed1n nh\u00fan nh\u1ea3y.",
      collocations: ["infectious musical rhythm", "syncopated rhythm"]
    }
    ,
    {
      id: "mega-unit-3-lyricist",
      word: "lyricist",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi vi\u1ebft l\u1eddi b\u00e0i h\u00e1t",
      ipa: "/\u02c8l\u026ar\u026as\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lyricist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A great lyricist captures poetic emotions in simple, memorable verses.",
      exampleVi: "M\u1ed9t ng\u01b0\u1eddi vi\u1ebft l\u1eddi t\u00e0i ba c\u00f4 \u0111\u1ecdng c\u1ea3m x\u00fac thi v\u1ecb trong nh\u1eefng c\u00e2u t\u1eeb dung d\u1ecb d\u1ec5 nh\u1edb.",
      collocations: ["talented lyricist", "collaborate with a lyricist"]
    }
    ,
    {
      id: "mega-unit-3-soundtrack",
      word: "soundtrack",
      partOfSpeech: "n",
      meaningVi: "nh\u1ea1c n\u1ec1n trong phim ho\u1eb7c k\u1ecbch",
      ipa: "/\u02c8sa\u028andtr\u00e6k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soundtrack&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The orchestral soundtrack elevated the emotional climax of the movie.",
      exampleVi: "B\u1ea3n nh\u1ea1c phim giao h\u01b0\u1edfng \u0111\u00e3 n\u00e2ng t\u1ea7m cao tr\u00e0o c\u1ea3m x\u00fac c\u1ee7a b\u1ed9 phim \u0111i\u1ec7n \u1ea3nh.",
      collocations: ["original soundtrack", "movie soundtrack"]
    }
    ,
    {
      id: "mega-unit-3-music-streaming-service",
      word: "music streaming service",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ecbch v\u1ee5 ph\u00e1t nh\u1ea1c tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02c8mju\u02d0z\u026ak \u02c8stri\u02d0m\u026a\u014b \u02c8s\u025c\u02d0v\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=music+streaming+service&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Subscribers can access millions of curated playlists on music streaming services.",
      exampleVi: "Ng\u01b0\u1eddi d\u00f9ng c\u00f3 th\u1ec3 truy c\u1eadp h\u00e0ng tri\u1ec7u danh s\u00e1ch ph\u00e1t tuy\u1ec3n ch\u1ecdn tr\u00ean c\u00e1c \u1ee9ng d\u1ee5ng nghe nh\u1ea1c s\u1ed1.",
      collocations: ["listen on streaming services", "stream music online"]
    }
    ,
    {
      id: "mega-unit-3-musical-arrangement",
      word: "musical arrangement",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n ph\u1ed1i \u00e2m nh\u1ea1c m\u1edbi m\u1ebb",
      ipa: "/\u02c8mju\u02d0z\u026akl \u0259\u02c8re\u026and\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=musical+arrangement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The jazz adaptation featured a sophisticated musical arrangement of the folk song.",
      exampleVi: "B\u1ea3n ph\u1ed1i mang phong c\u00e1ch jazz \u0111em l\u1ea1i di\u1ec7n m\u1ea1o m\u1edbi \u0111\u1ea7y tinh t\u1ebf cho l\u00e0n \u0111i\u1ec7u d\u00e2n ca.",
      collocations: ["innovative musical arrangement", "masterful arrangement"]
    }
    ,
    {
      id: "mega-unit-3-folk-ensemble",
      word: "folk ensemble",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111o\u00e0n ngh\u1ec7 thu\u1eadt di\u1ec5n t\u1ea5u nh\u1ea1c c\u1ee5 d\u00e2n t\u1ed9c",
      ipa: "/f\u0259\u028ak \u0252n\u02c8s\u0252mbl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folk+ensemble&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The folk ensemble performed bamboo flutes and stone chimes at the festival.",
      exampleVi: "\u0110o\u00e0n di\u1ec5n t\u1ea5u nh\u1ea1c d\u00e2n t\u1ed9c bi\u1ec3u di\u1ec5n s\u00e1o tr\u00fac v\u00e0 \u0111\u00e0n \u0111\u00e1 t\u1ea1i l\u1ec5 h\u1ed9i v\u0103n h\u00f3a.",
      collocations: ["traditional folk ensemble", "award-winning ensemble"]
    }
    ,
    {
      id: "mega-unit-3-anthem",
      word: "anthem",
      partOfSpeech: "n",
      meaningVi: "b\u00e0i ca ch\u00ednh th\u1ee9c, b\u00e0i qu\u1ed1c ca ho\u1eb7c b\u00e0i ca h\u00e0o h\u00f9ng",
      ipa: "/\u02c8\u00e6n\u03b8\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=anthem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national anthem echoes solemnly across the stadium as the flag ascends.",
      exampleVi: "Qu\u1ed1c ca vang l\u00ean trang nghi\u00eam kh\u1eafp s\u00e2n v\u1eadn \u0111\u1ed9ng trong l\u00fac l\u00e1 c\u1edd t\u1ed5 qu\u1ed1c t\u1eeb t\u1eeb d\u00e2ng cao.",
      collocations: ["sing the national anthem", "inspirational anthem"]
    }
    ,
    {
      id: "mega-unit-3-standing-ovation",
      word: "standing ovation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ee9ng d\u1eady v\u1ed7 tay t\u00e1n th\u01b0\u1edfng n\u1ed3ng nhi\u1ec7t",
      ipa: "/\u02ccst\u00e6nd\u026a\u014b \u0259\u028a\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=standing+ovation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The audience erupted into a five-minute standing ovation after the final piano chord.",
      exampleVi: "Kh\u00e1n gi\u1ea3 \u0111\u1ed3ng lo\u1ea1t \u0111\u1ee9ng d\u1eady v\u1ed7 tay t\u00e1n th\u01b0\u1edfng su\u1ed1t n\u0103m ph\u00fat sau h\u1ee3p \u00e2m d\u01b0\u01a1ng c\u1ea7m cu\u1ed1i c\u00f9ng.",
      collocations: ["receive a standing ovation", "give a standing ovation"]
    }
    ,
    {
      id: "mega-unit-3-standing-ovation",
      word: "standing ovation",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00e0ng v\u1ed7 tay \u0111\u1ee9ng d\u1eady t\u00e1n th\u01b0\u1edfng n\u1ed3ng nhi\u1ec7t",
      ipa: "/\u02ccst\u00e6nd\u026a\u014b \u0259\u028a\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=standing+ovation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The virtuoso pianist received a thunderous standing ovation from the packed auditorium.",
      exampleVi: "Ngh\u1ec7 s\u0129 piano b\u1eadc th\u1ea7y nh\u1eadn \u0111\u01b0\u1ee3c tr\u00e0ng ph\u00e1o tay \u0111\u1ee9ng t\u00e1n th\u01b0\u1edfng cu\u1ed3ng nhi\u1ec7t t\u1eeb to\u00e0n b\u1ed9 kh\u00e1n ph\u00f2ng ch\u1eadt k\u00edn.",
      collocations: ["receive a standing ovation", "give a standing ovation"]
    }
    ,
    {
      id: "mega-unit-3-live-acoustics",
      word: "live acoustics",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1eb7c t\u00ednh \u00e2m h\u1ecdc s\u1ed1ng \u0111\u1ed9ng c\u1ee7a kh\u00e1n ph\u00f2ng",
      ipa: "/la\u026av \u0259\u02c8ku\u02d0st\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=live+acoustics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The cathedral's live acoustics magnified the choir's transcendent choral singing.",
      exampleVi: "\u0110\u1eb7c t\u00ednh \u00e2m h\u1ecdc s\u1ed1ng \u0111\u1ed9ng c\u1ee7a gi\u00e1o \u0111\u01b0\u1eddng \u0111\u00e3 khu\u1ebfch \u0111\u1ea1i ti\u1ebfng h\u00e1t h\u1ee3p x\u01b0\u1edbng thanh tho\u00e1t c\u1ee7a d\u00e0n ca \u0111o\u00e0n.",
      collocations: ["exceptional live acoustics", "test live acoustics"]
    }
  ],
  "unit-4-for-a-better-community": [
    {
      id: "v10-u4-volunteer",
      word: "volunteer",
      partOfSpeech: "n / v",
      meaningVi: "t\u00ecnh nguy\u1ec7n vi\u00ean, l\u00e0m vi\u1ec7c thi\u1ec7n nguy\u1ec7n",
      ipa: "/\u02ccv\u0252l\u0259n\u02c8t\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=volunteer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many high school students volunteer at local soup kitchens every Saturday morning.",
      exampleVi: "Nhi\u1ec1u h\u1ecdc sinh trung h\u1ecdc \u0111i l\u00e0m t\u00ecnh nguy\u1ec7n t\u1ea1i c\u00e1c b\u1ebfp \u0103n t\u1eeb thi\u1ec7n v\u00e0o m\u1ed7i s\u00e1ng th\u1ee9 B\u1ea3y.",
      collocations: ["volunteer work", "sign up as a volunteer"]
    },
    {
      id: "v10-u4-philanthropy",
      word: "philanthropy",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng b\u00e1c \u00e1i, ho\u1ea1t \u0111\u1ed9ng nh\u00e2n \u0111\u1ea1o",
      ipa: "/f\u026a\u02c8l\u00e6n\u03b8r\u0259pi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=philanthropy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Through acts of generous philanthropy, the foundation financed five new schools.",
      exampleVi: "Qua c\u00e1c ho\u1ea1t \u0111\u1ed9ng nh\u00e2n \u0111\u1ea1o h\u00e0o hi\u1ec7p, qu\u1ef9 \u0111\u00e3 t\u00e0i tr\u1ee3 x\u00e2y d\u1ef1ng n\u0103m ng\u00f4i tr\u01b0\u1eddng m\u1edbi.",
      collocations: ["corporate philanthropy", "engage in philanthropy"]
    },
    {
      id: "v10-u4-underprivileged",
      word: "underprivileged",
      partOfSpeech: "adj",
      meaningVi: "thi\u1ec7t th\u00f2i v\u1ec1 \u0111i\u1ec1u ki\u1ec7n kinh t\u1ebf x\u00e3 h\u1ed9i",
      ipa: "/\u02cc\u028cnd\u0259\u02c8pr\u026av\u0259l\u026ad\u0292d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=underprivileged&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The project provides free books and warm clothes to underprivileged mountain kids.",
      exampleVi: "D\u1ef1 \u00e1n cung c\u1ea5p s\u00e1ch v\u1edf mi\u1ec5n ph\u00ed v\u00e0 \u00e1o \u1ea5m cho tr\u1ebb em v\u00f9ng cao c\u00f3 ho\u00e0n c\u1ea3nh kh\u00f3 kh\u0103n.",
      collocations: ["underprivileged children", "underprivileged backgrounds"]
    },
    {
      id: "v10-u4-fundraising",
      word: "fundraising",
      partOfSpeech: "n",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng g\u00e2y qu\u1ef9 t\u1eeb thi\u1ec7n",
      ipa: "/\u02c8f\u028cndre\u026az\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fundraising&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Our school charity club organized a bake sale for fundraising.",
      exampleVi: "C\u00e2u l\u1ea1c b\u1ed9 t\u1eeb thi\u1ec7n tr\u01b0\u1eddng t\u00f4i \u0111\u00e3 t\u1ed5 ch\u1ee9c b\u00e1n b\u00e1nh \u0111\u1ec3 g\u00e2y qu\u1ef9.",
      collocations: ["fundraising event", "fundraising campaign"]
    },
    {
      id: "v10-u4-non-profit",
      word: "non-profit",
      partOfSpeech: "adj / n",
      meaningVi: "t\u1ed5 ch\u1ee9c phi l\u1ee3i nhu\u1eadn ph\u1ee5c v\u1ee5 c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02ccn\u0252n \u02c8pr\u0252f\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=non-profit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The non-profit organization focuses on delivering clean drinking water to remote villages.",
      exampleVi: "T\u1ed5 ch\u1ee9c phi l\u1ee3i nhu\u1eadn t\u1eadp trung v\u00e0o vi\u1ec7c mang n\u01b0\u1edbc s\u1ea1ch t\u1edbi c\u00e1c th\u00f4n x\u00f3m xa x\u00f4i.",
      collocations: ["non-profit organization (NGO)", "work for a non-profit"]
    },
    {
      id: "v10-u4-community-service",
      word: "community service",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c ph\u1ee5c v\u1ee5 c\u1ed9ng \u0111\u1ed3ng x\u00e3 h\u1ed9i",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti \u02c8s\u025c\u02d0v\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+service&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Doing community service instills empathy and civic responsibility in teenagers.",
      exampleVi: "L\u00e0m c\u00f4ng t\u00e1c x\u00e3 h\u1ed9i b\u1ed3i \u0111\u1eafp l\u00f2ng tr\u1eafc \u1ea9n v\u00e0 tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m c\u00f4ng d\u00e2n cho gi\u1edbi tr\u1ebb.",
      collocations: ["perform community service", "hours of community service"]
    },
    {
      id: "v10-u4-orphanage",
      word: "orphanage",
      partOfSpeech: "n",
      meaningVi: "tr\u1ea1i tr\u1ebb m\u1ed3 c\u00f4i nh\u00e2n \u0111\u1ea1o",
      ipa: "/\u02c8\u0254\u02d0f\u0259n\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=orphanage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteers visit the provincial orphanage every Sunday to tutor math and English.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean t\u1edbi th\u0103m tr\u1ea1i tr\u1ebb m\u1ed3 c\u00f4i t\u1ec9nh v\u00e0o m\u1ed7i Ch\u1ee7 nh\u1eadt \u0111\u1ec3 d\u1ea1y k\u00e8m To\u00e1n v\u00e0 ti\u1ebfng Anh.",
      collocations: ["visit an orphanage", "orphanage director"]
    },
    {
      id: "v10-u4-disadvantaged",
      word: "disadvantaged",
      partOfSpeech: "adj",
      meaningVi: "ho\u00e0n c\u1ea3nh kh\u00f3 kh\u0103n, k\u00e9m may m\u1eafn",
      ipa: "/\u02ccd\u026as\u0259d\u02c8v\u0251\u02d0nt\u026ad\u0292d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=disadvantaged&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scholarships give disadvantaged students equal chances to pursue higher education.",
      exampleVi: "H\u1ecdc b\u1ed5ng trao cho h\u1ecdc sinh c\u00f3 ho\u00e0n c\u1ea3nh kh\u00f3 kh\u0103n c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng \u0111\u1ec3 h\u1ecdc \u0111\u1ea1i h\u1ecdc.",
      collocations: ["disadvantaged youth", "economically disadvantaged"]
    },
    {
      id: "v10-u4-empathy",
      word: "empathy",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng th\u1ea5u c\u1ea3m, c\u1ea3m th\u00f4ng s\u00e2u s\u1eafc",
      ipa: "/\u02c8emp\u0259\u03b8i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empathy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteering teaches us to look at life through empathy rather than prejudice.",
      exampleVi: "Ho\u1ea1t \u0111\u1ed9ng thi\u1ec7n nguy\u1ec7n d\u1ea1y ch\u00fang ta nh\u00ecn cu\u1ed9c s\u1ed1ng b\u1eb1ng s\u1ef1 th\u1ea5u c\u1ea3m thay v\u00ec \u0111\u1ecbnh ki\u1ebfn.",
      collocations: ["show deep empathy", "feel empathy for"]
    },
    {
      id: "v10-u4-generosity",
      word: "generosity",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng h\u1ea3o t\u00e2m, s\u1ef1 r\u1ed9ng l\u01b0\u1ee3ng",
      ipa: "/\u02ccd\u0292en\u0259\u02c8r\u0252s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=generosity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thanks to the community's generosity, the destroyed bridge was quickly rebuilt.",
      exampleVi: "Nh\u1edd l\u00f2ng h\u1ea3o t\u00e2m c\u1ee7a c\u1ed9ng \u0111\u1ed3ng, c\u00e2y c\u1ea7u b\u1ecb l\u0169 cu\u1ed1n \u0111\u00e3 nhanh ch\u00f3ng \u0111\u01b0\u1ee3c x\u00e2y l\u1ea1i.",
      collocations: ["act of generosity", "remarkable generosity"]
    },
    {
      id: "v10-u4-dedication",
      word: "dedication",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u1eadn t\u1ee5y c\u1ed1ng hi\u1ebfn h\u1ebft m\u00ecnh",
      ipa: "/\u02ccded\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dedication&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her selfless dedication to caring for disabled children inspired the town.",
      exampleVi: "S\u1ef1 t\u1eadn t\u1ee5y qu\u00ean m\u00ecnh trong ch\u0103m s\u00f3c tr\u1ebb khuy\u1ebft t\u1eadt c\u1ee7a c\u00f4 \u0111\u00e3 truy\u1ec1n c\u1ea3m h\u1ee9ng cho c\u1ea3 th\u1ecb tr\u1ea5n.",
      collocations: ["dedication to community", "admirable dedication"]
    },
    {
      id: "v10-u4-food-drive",
      word: "food drive",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ee3t quy\u00ean g\u00f3p th\u1ef1c ph\u1ea9m t\u1eeb thi\u1ec7n",
      ipa: "/\u02c8fu\u02d0d dra\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=food+drive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The neighborhood canned food drive gathered three tons of food for flood victims.",
      exampleVi: "\u0110\u1ee3t quy\u00ean g\u00f3p th\u1ef1c ph\u1ea9m c\u1ee7a khu ph\u1ed1 \u0111\u00e3 thu \u0111\u01b0\u1ee3c ba t\u1ea5n \u0111\u1ed3 \u0103n gi\u00fap \u0111\u1ee1 b\u00e0 con v\u00f9ng l\u0169.",
      collocations: ["organize a food drive", "participate in a food drive"]
    },
    {
      id: "v10-u4-charitable",
      word: "charitable",
      partOfSpeech: "adj",
      meaningVi: "nh\u00e2n t\u1eeb, mang t\u00ednh ch\u1ea5t t\u1eeb thi\u1ec7n",
      ipa: "/\u02c8t\u0283\u00e6r\u0259t\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charitable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A portion of every ticket sale is donated directly to charitable organizations.",
      exampleVi: "M\u1ed9t ph\u1ea7n ti\u1ec1n b\u00e1n m\u1ed7i v\u00e9 \u0111\u01b0\u1ee3c quy\u00ean g\u00f3p tr\u1ef1c ti\u1ebfp cho c\u00e1c t\u1ed5 ch\u1ee9c t\u1eeb thi\u1ec7n.",
      collocations: ["charitable foundation", "charitable deeds"]
    },
    {
      id: "v10-u4-nursing-home",
      word: "nursing home",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7n d\u01b0\u1ee1ng l\u00e3o cho ng\u01b0\u1eddi gi\u00e0",
      ipa: "/\u02c8n\u025c\u02d0s\u026a\u014b h\u0259\u028am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nursing+home&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High schoolers bring musical performances to residents at the local nursing home.",
      exampleVi: "C\u00e1c b\u1ea1n h\u1ecdc sinh mang l\u1eddi ca ti\u1ebfng h\u00e1t t\u1edbi c\u00e1c c\u1ee5 gi\u00e0 t\u1ea1i vi\u1ec7n d\u01b0\u1ee1ng l\u00e3o \u0111\u1ecba ph\u01b0\u01a1ng.",
      collocations: ["visit a nursing home", "elderly residents in nursing homes"]
    },
    {
      id: "v10-u4-disability",
      word: "disability",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 khuy\u1ebft t\u1eadt th\u1ec3 ch\u1ea5t ho\u1eb7c tr\u00ed tu\u1ec7",
      ipa: "/\u02ccd\u026as\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=disability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Public facilities must install ramps to ensure accessibility for people with disabilities.",
      exampleVi: "C\u00e1c c\u00f4ng tr\u00ecnh c\u00f4ng c\u1ed9ng ph\u1ea3i l\u1eafp \u0111\u01b0\u1eddng d\u1ed1c \u0111\u1ec3 ng\u01b0\u1eddi khuy\u1ebft t\u1eadt c\u00f3 th\u1ec3 ti\u1ebfp c\u1eadn thu\u1eadn ti\u1ec7n.",
      collocations: ["people with disabilities", "physical disability"]
    },
    {
      id: "v10-u4-altruism",
      word: "altruism",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng v\u1ecb tha, s\u1ef1 v\u00ec ng\u01b0\u1eddi kh\u00e1c",
      ipa: "/\u02c8\u00e6ltru\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=altruism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "True altruism means doing good deeds quietly without expecting public recognition.",
      exampleVi: "L\u00f2ng v\u1ecb tha ch\u00e2n ch\u00ednh l\u00e0 l\u00e0m vi\u1ec7c t\u1ed1t th\u1ea7m l\u1eb7ng m\u00e0 kh\u00f4ng m\u00e0ng danh ti\u1ebfng hay tung h\u00f4.",
      collocations: ["pure altruism", "motivate by altruism"]
    },
    {
      id: "v10-u4-civic-engagement",
      word: "civic engagement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 tham gia t\u00edch c\u1ef1c vi\u1ec7c c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02c8s\u026av\u026ak \u026an\u02c8\u0261e\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civic+engagement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools encourage civic engagement through voter education and park clean-up drives.",
      exampleVi: "Nh\u00e0 tr\u01b0\u1eddng khuy\u1ebfn kh\u00edch s\u1ef1 tham gia vi\u1ec7c c\u00f4ng qua gi\u00e1o d\u1ee5c b\u1ea7u c\u1eed v\u00e0 d\u1ecdn s\u1ea1ch c\u00f4ng vi\u00ean.",
      collocations: ["foster civic engagement", "active civic engagement"]
    },
    {
      id: "v10-u4-empower",
      word: "empower",
      partOfSpeech: "v",
      meaningVi: "trao quy\u1ec1n, n\u00e2ng cao n\u0103ng l\u1ef1c cho ng\u01b0\u1eddi kh\u00e1c",
      ipa: "/\u026am\u02c8pa\u028a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empower&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vocational workshops empower women in remote villages to earn their own livelihoods.",
      exampleVi: "C\u00e1c l\u1edbp d\u1ea1y ngh\u1ec1 gi\u00fap ph\u1ee5 n\u1eef \u1edf c\u00e1c th\u00f4n b\u1ea3n v\u00f9ng s\u00e2u c\u00f3 n\u0103ng l\u1ef1c t\u1ef1 nu\u00f4i s\u1ed1ng b\u1ea3n th\u00e2n.",
      collocations: ["empower local communities", "empower youth"]
    },
    {
      id: "v10-u4-blood-donation",
      word: "blood donation",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ebfn m\u00e1u nh\u00e2n \u0111\u1ea1o c\u1ee9u ng\u01b0\u1eddi",
      ipa: "/\u02c8bl\u028cd d\u0259\u028a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=blood+donation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Red Cross organized a blood donation drive that collected over 500 units.",
      exampleVi: "H\u1ed9i Ch\u1eef Th\u1eadp \u0110\u1ecf \u0111\u00e3 t\u1ed5 ch\u1ee9c ng\u00e0y h\u1ed9i hi\u1ebfn m\u00e1u nh\u00e2n \u0111\u1ea1o thu \u0111\u01b0\u1ee3c h\u01a1n 500 \u0111\u01a1n v\u1ecb m\u00e1u.",
      collocations: ["voluntary blood donation", "blood donation drive"]
    },
    {
      id: "v10-u4-mentor",
      word: "mentor",
      partOfSpeech: "n / v",
      meaningVi: "ng\u01b0\u1eddi h\u01b0\u1edbng d\u1eabn, c\u1ed1 v\u1ea5n t\u1eadn t\u00ecnh",
      ipa: "/\u02c8ment\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mentor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "University seniors mentor younger students who struggle with exam anxiety.",
      exampleVi: "C\u00e1c sinh vi\u00ean n\u0103m cu\u1ed1i t\u1eadn t\u00ecnh c\u1ed1 v\u1ea5n cho h\u1ecdc sinh kh\u00f3a d\u01b0\u1edbi \u0111ang lo \u00e2u v\u1ec1 thi c\u1eed.",
      collocations: ["mentor a child", "trusted mentor"]
    },
    {
      id: "v10-u4-grassroots",
      word: "grassroots",
      partOfSpeech: "adj / n",
      meaningVi: "phong tr\u00e0o t\u1eeb c\u1ea5p c\u01a1 s\u1edf qu\u1ea7n ch\u00fang",
      ipa: "/\u02c8\u0261r\u0251\u02d0sru\u02d0ts/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=grassroots&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The recycling campaign began as a modest grassroots initiative in a small ward.",
      exampleVi: "Chi\u1ebfn d\u1ecbch t\u00e1i ch\u1ebf b\u1eaft \u0111\u1ea7u nh\u01b0 m\u1ed9t s\u00e1ng ki\u1ebfn qu\u1ea7n ch\u00fang khi\u00eam t\u1ed1n t\u1ea1i m\u1ed9t ph\u01b0\u1eddng nh\u1ecf.",
      collocations: ["grassroots movement", "grassroots campaign"]
    },
    {
      id: "v10-u4-homeless-shelter",
      word: "homeless shelter",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e0 m\u00e1i \u1ea5m ti\u1ebfp nh\u1eadn ng\u01b0\u1eddi v\u00f4 gia c\u01b0",
      ipa: "/\u02c8h\u0259\u028aml\u0259s \u02c8\u0283elt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=homeless+shelter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteers served hot beef stew to residents at the downtown homeless shelter.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean \u0111\u00e3 n\u1ea5u m\u00f3n h\u1ea7m n\u00f3ng ph\u1ee5c v\u1ee5 ng\u01b0\u1eddi d\u00e2n t\u1ea1i m\u00e1i \u1ea5m ti\u1ebfp nh\u1eadn ng\u01b0\u1eddi v\u00f4 gia c\u01b0.",
      collocations: ["stay in a homeless shelter", "support homeless shelters"]
    },
    {
      id: "v10-u4-tutor",
      word: "tutor",
      partOfSpeech: "v / n",
      meaningVi: "d\u1ea1y k\u00e8m b\u1ed5 tr\u1ee3 h\u1ecdc t\u1eadp",
      ipa: "/\u02c8tju\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tutor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth club members tutor impoverished children in basic reading and arithmetic.",
      exampleVi: "C\u00e1c b\u1ea1n tr\u1ebb c\u00e2u l\u1ea1c b\u1ed9 d\u1ea1y k\u00e8m \u0111\u1ecdc ch\u1eef v\u00e0 l\u00e0m to\u00e1n c\u01a1 b\u1ea3n cho tr\u1ebb em ngh\u00e8o.",
      collocations: ["tutor underprivileged kids", "volunteer tutor"]
    },
    {
      id: "v10-u4-humanitarian-aid",
      word: "humanitarian aid",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7n tr\u1ee3 c\u1ee9u tr\u1ee3 nh\u00e2n \u0111\u1ea1o kh\u1ea9n c\u1ea5p",
      ipa: "/hju\u02d0\u02ccm\u00e6n\u026a\u02c8te\u0259ri\u0259n e\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=humanitarian+aid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trucks loaded with blankets and emergency humanitarian aid arrived in the disaster zone.",
      exampleVi: "Nh\u1eefng xe t\u1ea3i ch\u1edf ch\u0103n \u1ea5m v\u00e0 h\u00e0ng c\u1ee9u tr\u1ee3 nh\u00e2n \u0111\u1ea1o kh\u1ea9n c\u1ea5p \u0111\u00e3 t\u1edbi v\u00f9ng b\u1ecb thi\u00ean tai.",
      collocations: ["deliver humanitarian aid", "humanitarian aid worker"]
    },
    {
      id: "v10-u4-social-worker",
      word: "social worker",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1n b\u1ed9 nh\u00e2n vi\u00ean c\u00f4ng t\u00e1c x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8w\u025c\u02d0k\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+worker&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dedicated social workers offer counseling and connect vulnerable families with resources.",
      exampleVi: "C\u00e1c nh\u00e2n vi\u00ean c\u00f4ng t\u00e1c x\u00e3 h\u1ed9i t\u1eadn t\u00e2m t\u01b0 v\u1ea5n v\u00e0 k\u1ebft n\u1ed1i c\u00e1c gia \u0111\u00ecnh kh\u00f3 kh\u0103n v\u1edbi ngu\u1ed3n tr\u1ee3 c\u1ea5p.",
      collocations: ["certified social worker", "role of social workers"]
    },
    {
      id: "v10-u4-make-a-difference",
      word: "make a difference",
      partOfSpeech: "v.phr",
      meaningVi: "t\u1ea1o n\u00ean s\u1ef1 \u0111\u1ed5i thay t\u00edch c\u1ef1c",
      ipa: "/me\u026ak \u0259 \u02c8d\u026afr\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=make+a+difference&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Even a small monthly donation can truly make a difference in an orphan's life.",
      exampleVi: "Ngay c\u1ea3 m\u1ed9t kho\u1ea3n quy\u00ean g\u00f3p nh\u1ecf m\u1ed7i th\u00e1ng c\u0169ng th\u1ef1c s\u1ef1 t\u1ea1o n\u00ean s\u1ef1 \u0111\u1ed5i thay trong \u0111\u1eddi tr\u1ebb m\u1ed3 c\u00f4i.",
      collocations: ["make a positive difference", "make a real difference"]
    },
    {
      id: "v10-u4-public-welfare",
      word: "public welfare",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00fac l\u1ee3i c\u00f4ng c\u1ed9ng cho x\u00e3 h\u1ed9i",
      ipa: "/\u02c8p\u028cbl\u026ak \u02c8welfe\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+welfare&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investing in public healthcare directly enhances overall public welfare.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o y t\u1ebf c\u00f4ng c\u1ed9ng tr\u1ef1c ti\u1ebfp n\u00e2ng cao ph\u00fac l\u1ee3i chung c\u1ee7a to\u00e0n x\u00e3 h\u1ed9i.",
      collocations: ["improve public welfare", "public welfare project"]
    },
    {
      id: "v10-u4-solidarity",
      word: "solidarity",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n \u0111o\u00e0n k\u1ebft, t\u01b0\u01a1ng th\u00e2n t\u01b0\u01a1ng \u00e1i",
      ipa: "/\u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Neighbors displayed heart-warming solidarity by sharing rice rations during the flood.",
      exampleVi: "B\u00e0 con l\u1ed1i x\u00f3m \u0111\u00e3 th\u1ec3 hi\u1ec7n t\u00ecnh \u0111o\u00e0n k\u1ebft \u1ea5m l\u00f2ng khi chia s\u1ebb t\u1eebng bao g\u1ea1o trong \u0111\u1ee3t ng\u1eadp l\u1ee5t.",
      collocations: ["show solidarity with", "spirit of solidarity"]
    },
    {
      id: "v10-u4-hands-on-experience",
      word: "hands-on experience",
      partOfSpeech: "n.phr",
      meaningVi: "kinh nghi\u1ec7m th\u1ef1c h\u00e0nh th\u1ef1c t\u1ebf",
      ipa: "/\u02cch\u00e6ndz \u02c8\u0252n \u026ak\u02c8sp\u026a\u0259ri\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hands-on+experience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteering outdoors gives students valuable hands-on experience in leadership.",
      exampleVi: "L\u00e0m t\u00ecnh nguy\u1ec7n th\u1ef1c t\u1ebf mang l\u1ea1i cho h\u1ecdc sinh kinh nghi\u1ec7m th\u1ef1c ti\u1ec5n qu\u00fd gi\u00e1 v\u1ec1 l\u00e3nh \u0111\u1ea1o.",
      collocations: ["gain hands-on experience", "practical hands-on experience"]
    },
    {
      id: "v10-u4-kind-hearted",
      word: "kind-hearted",
      partOfSpeech: "adj",
      meaningVi: "nh\u00e2n h\u1eadu, t\u1ed1t b\u1ee5ng",
      ipa: "/\u02ccka\u026and \u02c8h\u0251\u02d0t\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=kind-hearted&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A kind-hearted baker leaves fresh bread outside each evening for those in need.",
      exampleVi: "Ng\u01b0\u1eddi ch\u1ee7 ti\u1ec7m b\u00e1nh nh\u00e2n h\u1eadu lu\u00f4n \u0111\u1ec3 l\u1ea1i b\u00e1nh m\u00ec m\u1edbi v\u00e0o m\u1ed7i t\u1ed1i cho nh\u1eefng ai kh\u00f3 kh\u0103n.",
      collocations: ["kind-hearted volunteer", "kind-hearted gesture"]
    },
    {
      id: "v10-u4-beneficiary",
      word: "beneficiary",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi \u0111\u01b0\u1ee3c th\u1ee5 h\u01b0\u1edfng quy\u1ec1n l\u1ee3i/t\u1eeb thi\u1ec7n",
      ipa: "/\u02ccben\u026a\u02c8f\u026a\u0283\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=beneficiary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Over two thousand students are direct beneficiaries of the new digital scholarship.",
      exampleVi: "H\u01a1n hai ng\u00e0n h\u1ecdc sinh l\u00e0 ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng tr\u1ef1c ti\u1ebfp t\u1eeb ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc b\u1ed5ng s\u1ed1 m\u1edbi.",
      collocations: ["primary beneficiaries", "direct beneficiary"]
    },
    {
      id: "v10-u4-raise-funds",
      word: "raise funds",
      partOfSpeech: "v.phr",
      meaningVi: "v\u1eadn \u0111\u1ed9ng g\u00e2y qu\u1ef9 t\u1eeb thi\u1ec7n",
      ipa: "/re\u026az f\u028cndz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=raise+funds&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The student council organized an acoustic concert to raise funds for cancer patients.",
      exampleVi: "H\u1ed9i h\u1ecdc sinh \u0111\u00e3 t\u1ed5 ch\u1ee9c \u0111\u00eam nh\u1ea1c m\u1ed9c \u0111\u1ec3 v\u1eadn \u0111\u1ed9ng g\u00e2y qu\u1ef9 cho b\u1ec7nh nh\u00e2n ung th\u01b0.",
      collocations: ["raise funds for charity", "successfully raise funds"]
    },
    {
      id: "v10-u4-gratifying",
      word: "gratifying",
      partOfSpeech: "adj",
      meaningVi: "\u0111em l\u1ea1i ni\u1ec1m vui m\u00e3n nguy\u1ec7n",
      ipa: "/\u02c8\u0261r\u00e6t\u026afa\u026a\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gratifying&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Seeing the cheerful smiles of elderly folks after the show was deeply gratifying.",
      exampleVi: "Th\u1ea5y n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1 c\u1ee7a c\u00e1c c\u1ee5 gi\u00e0 sau bu\u1ed5i bi\u1ec3u di\u1ec5n l\u00e0 \u0111i\u1ec1u v\u00f4 c\u00f9ng m\u00e3n nguy\u1ec7n.",
      collocations: ["gratifying experience", "immensely gratifying"]
    },
    {
      id: "v10-u4-vulnerable",
      word: "vulnerable",
      partOfSpeech: "adj",
      meaningVi: "d\u1ec5 b\u1ecb t\u1ed5n th\u01b0\u01a1ng, c\u1ea7n che ch\u1edf",
      ipa: "/\u02c8v\u028cln\u0259r\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vulnerable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Social welfare programs provide emergency safety nets for vulnerable groups.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh an sinh x\u00e3 h\u1ed9i cung c\u1ea5p m\u1ea1ng l\u01b0\u1edbi an to\u00e0n kh\u1ea9n c\u1ea5p cho c\u00e1c nh\u00f3m d\u1ec5 b\u1ecb t\u1ed5n th\u01b0\u01a1ng.",
      collocations: ["vulnerable groups in society", "vulnerable children"]
    },
    {
      id: "v10-u4-selfless",
      word: "selfless",
      partOfSpeech: "adj",
      meaningVi: "v\u1ecb tha, kh\u00f4ng m\u00e0ng t\u01b0 l\u1ee3i",
      ipa: "/\u02c8selfl\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=selfless&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her selfless volunteer service earned her the national community medal.",
      exampleVi: "S\u1ef1 c\u1ed1ng hi\u1ebfn thi\u1ec7n nguy\u1ec7n qu\u00ean m\u00ecnh \u0111\u00e3 gi\u00fap c\u00f4 nh\u1eadn \u0111\u01b0\u1ee3c hu\u00e2n ch\u01b0\u01a1ng c\u1ed9ng \u0111\u1ed3ng to\u00e0n qu\u1ed1c.",
      collocations: ["selfless devotion", "selfless actions"]
    },
    {
      id: "v10-u4-join-hands",
      word: "join hands",
      partOfSpeech: "v.phr",
      meaningVi: "chung tay g\u00f3p s\u1ee9c c\u00f9ng nhau",
      ipa: "/d\u0292\u0254\u026an h\u00e6ndz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=join+hands&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Let us all join hands to build a safer and cleaner neighborhood for our children.",
      exampleVi: "T\u1ea5t c\u1ea3 ch\u00fang ta h\u00e3y c\u00f9ng chung tay g\u00f3p s\u1ee9c x\u00e2y d\u1ef1ng khu ph\u1ed1 an to\u00e0n v\u00e0 s\u1ea1ch \u0111\u1eb9p cho con em.",
      collocations: ["join hands to help", "join hands with communities"]
    }
    ,
    {
      id: "v10-extra-charity-drive",
      word: "charity drive",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ee3t quy\u00ean g\u00f3p c\u1ee9u tr\u1ee3 t\u1eeb thi\u1ec7n",
      ipa: "/\u02c8t\u0283\u00e6r\u0259ti dra\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charity+drive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The neighborhood organized a warm clothing charity drive for winter.",
      exampleVi: "Khu d\u00e2n c\u01b0 \u0111\u00e3 ph\u00e1t \u0111\u1ed9ng \u0111\u1ee3t quy\u00ean g\u00f3p \u00e1o \u1ea5m t\u1eeb thi\u1ec7n cho m\u00f9a \u0111\u00f4ng.",
      collocations: ["launch a charity drive", "participate in a charity drive"]
    }
    ,
    {
      id: "v10-extra-benevolence",
      word: "benevolence",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng nh\u00e2n t\u1eeb, b\u00e1c \u00e1i",
      ipa: "/b\u0259\u02c8nev\u0259l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=benevolence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her heartfelt benevolence brought food and shelter to flood victims.",
      exampleVi: "T\u1ea5m l\u00f2ng nh\u00e2n t\u1eeb c\u1ee7a c\u00f4 \u0111\u00e3 mang l\u1ea1i c\u01a1m \u0103n v\u00e0 ch\u1ed7 \u1edf cho \u0111\u1ed3ng b\u00e0o v\u00f9ng l\u0169.",
      collocations: ["act of benevolence", "pure benevolence"]
    }
    ,
    {
      id: "v10-extra-soup-kitchen",
      word: "soup kitchen",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ebfp \u0103n t\u1eeb thi\u1ec7n ph\u00e1t c\u01a1m mi\u1ec5n ph\u00ed",
      ipa: "/\u02c8su\u02d0p \u02c8k\u026at\u0283\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soup+kitchen&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteers prepare hundreds of hot meals daily at the charity soup kitchen.",
      exampleVi: "T\u00ecnh nguy\u1ec7n vi\u00ean n\u1ea5u h\u00e0ng tr\u0103m su\u1ea5t c\u01a1m n\u00f3ng m\u1ed7i ng\u00e0y t\u1ea1i b\u1ebfp \u0103n t\u1eeb thi\u1ec7n.",
      collocations: ["volunteer at a soup kitchen", "community soup kitchen"]
    }
    ,
    {
      id: "v10-extra-social-safety-net",
      word: "social safety net",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi an sinh x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8se\u026afti net/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+safety+net&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Pensions and disability grants form a vital social safety net for citizens.",
      exampleVi: "L\u01b0\u01a1ng h\u01b0u v\u00e0 tr\u1ee3 c\u1ea5p khuy\u1ebft t\u1eadt t\u1ea1o n\u00ean m\u1ea1ng l\u01b0\u1edbi an sinh x\u00e3 h\u1ed9i thi\u1ebft y\u1ebfu.",
      collocations: ["strengthen the social safety net", "broad social safety net"]
    }
    ,
    {
      id: "v10-extra-disaster-relief",
      word: "disaster relief",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c c\u1ee9u tr\u1ee3 thi\u00ean tai b\u00e3o l\u0169",
      ipa: "/d\u026a\u02c8z\u0251\u02d0st\u0259 r\u026a\u02ccli\u02d0f/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=disaster+relief&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trucks loaded with clean drinking water rushed to join disaster relief efforts.",
      exampleVi: "Nh\u1eefng xe t\u1ea3i ch\u1edf n\u01b0\u1edbc s\u1ea1ch nhanh ch\u00f3ng l\u00ean \u0111\u01b0\u1eddng c\u1ee9u tr\u1ee3 v\u00f9ng b\u00e3o l\u0169.",
      collocations: ["coordinate disaster relief", "disaster relief team"]
    }
    ,
    {
      id: "v10-extra-public-spirited",
      word: "public-spirited",
      partOfSpeech: "adj",
      meaningVi: "c\u00f3 tinh th\u1ea7n v\u00ec c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02ccp\u028cbl\u026ak \u02c8sp\u026ar\u026at\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public-spirited&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Public-spirited youths repainted the rusty community playground equipment.",
      exampleVi: "Nh\u1eefng thanh ni\u00ean c\u00f3 tinh th\u1ea7n c\u1ed9ng \u0111\u1ed3ng \u0111\u00e3 s\u01a1n s\u1eeda l\u1ea1i thi\u1ebft b\u1ecb s\u00e2n ch\u01a1i c\u0169.",
      collocations: ["public-spirited citizen", "public-spirited action"]
    }
    ,
    {
      id: "v10-extra-shelter",
      word: "shelter",
      partOfSpeech: "n / v",
      meaningVi: "n\u01a1i che ch\u1edf, m\u00e1i \u1ea5m cho ng\u01b0\u1eddi neo \u0111\u01a1n",
      ipa: "/\u02c8\u0283elt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shelter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The community shelter opens its warm doors during freezing winter nights.",
      exampleVi: "M\u00e1i \u1ea5m c\u1ed9ng \u0111\u1ed3ng m\u1edf r\u1ed9ng c\u1eeda \u0111\u00f3n ng\u01b0\u1eddi c\u01a1 nh\u1ee1 v\u00e0o nh\u1eefng \u0111\u00eam \u0111\u00f4ng bu\u1ed1t gi\u00e1.",
      collocations: ["provide shelter", "seek shelter"]
    }
    ,
    {
      id: "v10-extra-aid-convoy",
      word: "aid convoy",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111o\u00e0n xe vi\u1ec7n tr\u1ee3 c\u1ee9u tr\u1ee3 kh\u1ea9n c\u1ea5p",
      ipa: "/e\u026ad \u02c8k\u0252nv\u0254\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=aid+convoy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An international aid convoy delivered medical supplies to disaster zones.",
      exampleVi: "\u0110o\u00e0n xe vi\u1ec7n tr\u1ee3 qu\u1ed1c t\u1ebf \u0111\u00e3 k\u1ecbp th\u1eddi chuy\u1ec3n thu\u1ed1c men t\u1edbi v\u00f9ng th\u1ea3m h\u1ecda.",
      collocations: ["dispatch an aid convoy", "relief aid convoy"]
    }
    ,
    {
      id: "v10-extra-outreach-program",
      word: "outreach program",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh ti\u1ebfp c\u1eadn gi\u00fap \u0111\u1ee1 c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02c8a\u028atri\u02d0t\u0283 \u02ccpr\u0259\u028a\u0261r\u00e6m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=outreach+program&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university hospital runs an outreach program checking eyes for rural kids.",
      exampleVi: "B\u1ec7nh vi\u1ec7n \u0111\u1ea1i h\u1ecdc th\u1ef1c hi\u1ec7n ch\u01b0\u01a1ng tr\u00ecnh kh\u00e1m m\u1eaft mi\u1ec5n ph\u00ed cho tr\u1ebb em v\u00f9ng s\u00e2u.",
      collocations: ["community outreach program", "conduct an outreach program"]
    }
    ,
    {
      id: "v10-extra-empathetic",
      word: "empathetic",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u1ed3ng c\u1ea3m, gi\u00e0u t\u00ecnh tr\u1eafc \u1ea9n",
      ipa: "/\u02ccemp\u0259\u02c8\u03b8et\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empathetic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An empathetic listener can bring great comfort to someone in distress.",
      exampleVi: "M\u1ed9t ng\u01b0\u1eddi bi\u1ebft \u0111\u1ed3ng c\u1ea3m l\u1eafng nghe c\u00f3 th\u1ec3 \u0111em l\u1ea1i s\u1ef1 an \u1ee7i to l\u1edbn cho ng\u01b0\u1eddi \u0111au kh\u1ed5.",
      collocations: ["empathetic response", "empathetic understanding"]
    }
    ,
    {
      id: "v10-extra-good-deed",
      word: "good deed",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c l\u00e0m t\u1ed1t, ngh\u0129a c\u1eed cao \u0111\u1eb9p",
      ipa: "/\u0261\u028ad di\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=good+deed&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She makes a habit of doing one good deed anonymously every day.",
      exampleVi: "C\u00f4 \u1ea5y t\u1ea1o th\u00f3i quen l\u00e0m m\u1ed9t vi\u1ec7c t\u1ed1t th\u1ea7m l\u1eb7ng m\u1ed7i ng\u00e0y.",
      collocations: ["do a good deed", "reward a good deed"]
    }
    ,
    {
      id: "mega-unit-4-charitable-foundation",
      word: "charitable foundation",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ef9 thi\u1ec7n nguy\u1ec7n phi l\u1ee3i nhu\u1eadn",
      ipa: "/\u02c8t\u0283\u00e6r\u0259t\u0259bl fa\u028an\u02c8de\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charitable+foundation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The charitable foundation provides scholarships to orphans in remote mountainous areas.",
      exampleVi: "Qu\u1ef9 thi\u1ec7n nguy\u1ec7n trao h\u1ecdc b\u1ed5ng cho tr\u1ebb em m\u1ed3 c\u00f4i t\u1ea1i c\u00e1c v\u00f9ng n\u00fai xa x\u00f4i.",
      collocations: ["establish a charitable foundation", "donate to a foundation"]
    }
    ,
    {
      id: "mega-unit-4-civic-engagement",
      word: "civic engagement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 tham gia t\u00edch c\u1ef1c v\u00e0o c\u00e1c ho\u1ea1t \u0111\u1ed9ng c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02c8s\u026av\u026ak \u026an\u02c8\u0261e\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civic+engagement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High schools encourage civic engagement through regular neighborhood cleanup drives.",
      exampleVi: "Tr\u01b0\u1eddng c\u1ea5p 3 khuy\u1ebfn kh\u00edch s\u1ef1 tham gia c\u1ed9ng \u0111\u1ed3ng qua c\u00e1c \u0111\u1ee3t l\u00e0m s\u1ea1ch khu ph\u1ed1 \u0111\u1ecbnh k\u1ef3.",
      collocations: ["foster civic engagement", "active civic engagement"]
    }
    ,
    {
      id: "mega-unit-4-soup-kitchen",
      word: "soup kitchen",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ebfp \u0103n t\u00ecnh th\u01b0\u01a1ng ph\u1ee5c v\u1ee5 ng\u01b0\u1eddi ngh\u00e8o",
      ipa: "/su\u02d0p \u02c8k\u026at\u0283\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soup+kitchen&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteers prepare hundreds of nutritious lunches daily at the charity soup kitchen.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean n\u1ea5u h\u00e0ng tr\u0103m su\u1ea5t c\u01a1m dinh d\u01b0\u1ee1ng m\u1ed7i ng\u00e0y t\u1ea1i b\u1ebfp \u0103n t\u1eeb thi\u1ec7n.",
      collocations: ["volunteer at a soup kitchen", "community soup kitchen"]
    }
    ,
    {
      id: "mega-unit-4-blood-donation-drive",
      word: "blood donation drive",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e0y h\u1ed9i hi\u1ebfn m\u00e1u nh\u00e2n \u0111\u1ea1o",
      ipa: "/bl\u028cd d\u0259\u028a\u02c8ne\u026a\u0283n dra\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=blood+donation+drive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Red Cross youth organized a blood donation drive that collected five hundred units.",
      exampleVi: "Thanh ni\u00ean Ch\u1eef th\u1eadp \u0111\u1ecf t\u1ed5 ch\u1ee9c ng\u00e0y h\u1ed9i hi\u1ebfn m\u00e1u thu v\u1ec1 500 \u0111\u01a1n v\u1ecb m\u00e1u qu\u00fd gi\u00e1.",
      collocations: ["participate in a blood donation drive", "annual donation drive"]
    }
    ,
    {
      id: "mega-unit-4-disadvantaged-background",
      word: "disadvantaged background",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u00e0n c\u1ea3nh gia \u0111\u00ecnh kh\u00f3 kh\u0103n",
      ipa: "/\u02ccd\u026as\u0259d\u02c8v\u0251\u02d0nt\u026ad\u0292d \u02c8b\u00e6k\u0261ra\u028and/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=disadvantaged+background&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tutors offer free evening mathematics classes for children from disadvantaged backgrounds.",
      exampleVi: "C\u00e1c gia s\u01b0 m\u1edf l\u1edbp d\u1ea1y to\u00e1n bu\u1ed5i t\u1ed1i mi\u1ec5n ph\u00ed cho tr\u1ebb em c\u00f3 ho\u00e0n c\u1ea3nh gia \u0111\u00ecnh kh\u00f3 kh\u0103n.",
      collocations: ["students from disadvantaged backgrounds", "support disadvantaged youths"]
    }
    ,
    {
      id: "mega-unit-4-shelter-for-the-homeless",
      word: "shelter for the homeless",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e1i \u1ea5m nh\u00e0 m\u1edf cho ng\u01b0\u1eddi v\u00f4 gia c\u01b0",
      ipa: "/\u02c8\u0283elt\u0259 f\u0259 \u00f0\u0259 \u02c8h\u0259\u028aml\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shelter+for+the+homeless&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The local shelter for the homeless provides hot meals and warm blankets in winter.",
      exampleVi: "M\u00e1i \u1ea5m cho ng\u01b0\u1eddi v\u00f4 gia c\u01b0 cung c\u1ea5p b\u1eefa \u0103n n\u00f3ng v\u00e0 ch\u0103n \u1ea5m trong m\u00f9a \u0111\u00f4ng gi\u00e1 r\u00e9t.",
      collocations: ["operate a homeless shelter", "seek refuge in a shelter"]
    }
    ,
    {
      id: "mega-unit-4-humanitarian-aid",
      word: "humanitarian aid",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0ng c\u1ee9u tr\u1ee3 nh\u00e2n \u0111\u1ea1o kh\u1ea9n c\u1ea5p",
      ipa: "/hju\u02d0\u02ccm\u00e6n\u026a\u02c8te\u0259ri\u0259n e\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=humanitarian+aid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Convoys carried essential humanitarian aid to villages isolated by landslides.",
      exampleVi: "\u0110o\u00e0n xe v\u1eadn chuy\u1ec3n h\u00e0ng c\u1ee9u tr\u1ee3 nh\u00e2n \u0111\u1ea1o kh\u1ea9n c\u1ea5p t\u1edbi c\u00e1c b\u1ea3n l\u00e0ng b\u1ecb c\u00f4 l\u1eadp do s\u1ea1t l\u1edf.",
      collocations: ["deliver humanitarian aid", "provide emergency aid"]
    }
    ,
    {
      id: "mega-unit-4-fundraising-campaign",
      word: "fundraising campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch quy\u00ean g\u00f3p qu\u1ef9 \u1ee7ng h\u1ed9",
      ipa: "/\u02c8f\u028cndre\u026az\u026a\u014b k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fundraising+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The student council launched an online fundraising campaign to build a village library.",
      exampleVi: "Ban ch\u1ea5p h\u00e0nh h\u1ecdc sinh kh\u1edfi \u0111\u1ed9ng chi\u1ebfn d\u1ecbch g\u00e2y qu\u1ef9 tr\u1ef1c tuy\u1ebfn \u0111\u1ec3 x\u00e2y d\u1ef1ng th\u01b0 vi\u1ec7n x\u00e3.",
      collocations: ["launch a fundraising campaign", "exceed fundraising targets"]
    }
    ,
    {
      id: "mega-unit-4-social-worker",
      word: "social worker",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e2n vi\u00ean c\u00f4ng t\u00e1c x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8w\u025c\u02d0k\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+worker&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A compassionate social worker counsels teenagers facing domestic turbulence.",
      exampleVi: "Nh\u00e2n vi\u00ean c\u00f4ng t\u00e1c x\u00e3 h\u1ed9i t\u1eadn t\u00e2m t\u01b0 v\u1ea5n h\u1ed7 tr\u1ee3 thanh thi\u1ebfu ni\u00ean g\u1eb7p b\u1ea5t tr\u1eafc gia \u0111\u00ecnh.",
      collocations: ["trained social worker", "career as a social worker"]
    }
    ,
    {
      id: "mega-unit-4-community-center",
      word: "community center",
      partOfSpeech: "n.phr",
      meaningVi: "trung t\u00e2m sinh ho\u1ea1t c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti \u02c8sent\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+center&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Elderly citizens enjoy chess matches and painting classes at the community center.",
      exampleVi: "C\u00e1c c\u1ee5 cao tu\u1ed5i ch\u01a1i c\u1edd v\u00e0 h\u1ecdc v\u1ebd tranh t\u1ea1i nh\u00e0 sinh ho\u1ea1t c\u1ed9ng \u0111\u1ed3ng c\u1ee7a ph\u01b0\u1eddng.",
      collocations: ["visit the community center", "programs at community centers"]
    }
    ,
    {
      id: "mega-unit-4-youth-empowerment",
      word: "youth empowerment",
      partOfSpeech: "n.phr",
      meaningVi: "trao quy\u1ec1n v\u00e0 ph\u00e1t huy n\u0103ng l\u1ef1c gi\u1edbi tr\u1ebb",
      ipa: "/ju\u02d0\u03b8 \u026am\u02c8pa\u028a\u0259m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=youth+empowerment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vocational workshops advance youth empowerment in rural provinces.",
      exampleVi: "C\u00e1c h\u1ed9i th\u1ea3o h\u01b0\u1edbng nghi\u1ec7p gi\u00fap n\u00e2ng cao n\u0103ng l\u1ef1c t\u1ef1 ch\u1ee7 cho thanh ni\u00ean n\u00f4ng th\u00f4n.",
      collocations: ["promote youth empowerment", "empowerment initiatives"]
    }
    ,
    {
      id: "mega-unit-4-altruistic-deed",
      word: "altruistic deed",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh \u0111\u1ed9ng nh\u00e2n \u00e1i v\u1ecb tha",
      ipa: "/\u02cc\u00e6ltru\u02c8\u026ast\u026ak di\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=altruistic+deed&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Quietly donating savings to surgery funds was a deeply altruistic deed.",
      exampleVi: "\u00c2m th\u1ea7m quy\u00ean g\u00f3p ti\u1ec1n ti\u1ebft ki\u1ec7m v\u00e0o qu\u1ef9 m\u1ed5 tim l\u00e0 m\u1ed9t ngh\u0129a c\u1eed nh\u00e2n \u00e1i cao \u0111\u1eb9p.",
      collocations: ["perform altruistic deeds", "spirit of altruism"]
    }
    ,
    {
      id: "mega-unit-4-disaster-relief",
      word: "disaster relief",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c c\u1ee9u tr\u1ee3 thi\u00ean tai l\u0169 l\u1ee5t",
      ipa: "/d\u026a\u02c8z\u0251\u02d0st\u0259 r\u026a\u02c8li\u02d0f/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=disaster+relief&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rescue teams coordinated disaster relief after the severe tropical storm.",
      exampleVi: "\u0110\u1ed9i c\u1ee9u h\u1ed9 \u0111i\u1ec1u ph\u1ed1i c\u00f4ng t\u00e1c c\u1ee9u tr\u1ee3 thi\u00ean tai sau c\u01a1n b\u00e3o nhi\u1ec7t \u0111\u1edbi d\u1eef d\u1ed9i.",
      collocations: ["coordinate disaster relief", "disaster relief supplies"]
    }
    ,
    {
      id: "mega-unit-4-community-bond",
      word: "community bond",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh l\u00e0ng ngh\u0129a x\u00f3m g\u1eafn b\u00f3 keo s\u01a1n",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti b\u0252nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+bond&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Neighborhood festivals strengthen the heartfelt community bond among residents.",
      exampleVi: "Ng\u00e0y h\u1ed9i khu ph\u1ed1 th\u1eaft ch\u1eb7t th\u00eam t\u00ecnh l\u00e0ng ngh\u0129a x\u00f3m ch\u00e2n t\u00ecnh gi\u1eefa c\u00e1c h\u1ed9 d\u00e2n.",
      collocations: ["tighten community bonds", "cherish community bonds"]
    }
    ,
    {
      id: "mega-unit-4-mentoring-program",
      word: "mentoring program",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh \u0111\u1ed3ng h\u00e0nh k\u00e8m c\u1eb7p h\u01b0\u1edbng d\u1eabn",
      ipa: "/\u02c8ment\u0254\u02d0r\u026a\u014b \u02c8pr\u0259\u028a\u0261r\u00e6m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mentoring+program&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "University students volunteer in a mentoring program for first-generation high schoolers.",
      exampleVi: "Sinh vi\u00ean \u0111\u1ea1i h\u1ecdc t\u00ecnh nguy\u1ec7n tham gia ch\u01b0\u01a1ng tr\u00ecnh k\u00e8m c\u1eb7p c\u00e1c em h\u1ecdc sinh kh\u00f3a d\u01b0\u1edbi.",
      collocations: ["establish a mentoring program", "mentor-mentee relationship"]
    }
    ,
    {
      id: "mega-unit-4-philanthropist",
      word: "philanthropist",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 h\u1ea3o t\u00e2m, ng\u01b0\u1eddi l\u00e0m t\u1eeb thi\u1ec7n c\u1ed1ng hi\u1ebfn cho x\u00e3 h\u1ed9i",
      ipa: "/f\u026a\u02c8l\u00e6n\u03b8r\u0259p\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=philanthropist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The generous philanthropist funded the pediatric cardiology wing entirely.",
      exampleVi: "Nh\u00e0 h\u1ea3o t\u00e2m nh\u00e2n t\u1eeb \u0111\u00e3 t\u00e0i tr\u1ee3 to\u00e0n b\u1ed9 chi ph\u00ed x\u00e2y khoa tim m\u1ea1ch nhi khoa.",
      collocations: ["generous philanthropist", "acclaimed philanthropist"]
    }
    ,
    {
      id: "mega-unit-4-civic-duty",
      word: "civic duty",
      partOfSpeech: "n.phr",
      meaningVi: "ngh\u0129a v\u1ee5 v\u00e0 tr\u00e1ch nhi\u1ec7m c\u00f4ng d\u00e2n",
      ipa: "/\u02c8s\u026av\u026ak \u02c8dju\u02d0ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civic+duty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voting in elections and keeping public parks clean is every citizen's civic duty.",
      exampleVi: "B\u1ecf phi\u1ebfu b\u1ea7u c\u1eed v\u00e0 gi\u1eef g\u00ecn c\u00f4ng vi\u00ean s\u1ea1ch \u0111\u1eb9p l\u00e0 ngh\u0129a v\u1ee5 c\u00f4ng d\u00e2n c\u1ee7a m\u1ed7i ng\u01b0\u1eddi.",
      collocations: ["fulfill one's civic duty", "sense of civic duty"]
    }
    ,
    {
      id: "mega-unit-4-in-kind-donation",
      word: "in-kind donation",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n v\u1eadt \u0111\u00f3ng g\u00f3p t\u1eeb thi\u1ec7n (s\u00e1ch v\u1edf, \u00e1o \u1ea5m)",
      ipa: "/\u026an ka\u026and d\u0259\u028a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=in-kind+donation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The charity accepts both financial grants and in-kind donations of winter coats.",
      exampleVi: "T\u1ed5 ch\u1ee9c t\u1eeb thi\u1ec7n ti\u1ebfp nh\u1eadn c\u1ea3 ti\u1ec1n m\u1eb7t l\u1eabn hi\u1ec7n v\u1eadt \u0111\u00f3ng g\u00f3p nh\u01b0 \u00e1o \u1ea5m m\u00f9a \u0111\u00f4ng.",
      collocations: ["make an in-kind donation", "generous in-kind donations"]
    }
    ,
    {
      id: "mega-unit-4-orphanage",
      word: "orphanage",
      partOfSpeech: "n",
      meaningVi: "tr\u1ea1i tr\u1ebb m\u1ed3 c\u00f4i, m\u00e1i \u1ea5m t\u00ecnh th\u01b0\u01a1ng",
      ipa: "/\u02c8\u0254\u02d0f\u0259n\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=orphanage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteers visit the district orphanage every Sunday afternoon to play chess with children.",
      exampleVi: "T\u00ecnh nguy\u1ec7n vi\u00ean gh\u00e9 th\u0103m tr\u1ea1i tr\u1ebb m\u1ed3 c\u00f4i huy\u1ec7n m\u1ed7i chi\u1ec1u Ch\u1ee7 nh\u1eadt \u0111\u1ec3 ch\u01a1i c\u1edd c\u00f9ng c\u00e1c em.",
      collocations: ["visit an orphanage", "support local orphanages"]
    }
    ,
    {
      id: "mega-unit-4-nursing-home",
      word: "nursing home",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7n d\u01b0\u1ee1ng l\u00e3o ch\u0103m s\u00f3c ng\u01b0\u1eddi cao tu\u1ed5i",
      ipa: "/\u02c8n\u025c\u02d0s\u026a\u014b h\u0259\u028am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nursing+home&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High school choirs perform folk melodies for elderly residents at the nursing home.",
      exampleVi: "D\u00e0n \u0111\u1ed3ng ca h\u1ecdc sinh bi\u1ec3u di\u1ec5n c\u00e1c l\u00e0n \u0111i\u1ec7u d\u00e2n ca t\u1eb7ng c\u00e1c c\u1ee5 gi\u00e0 t\u1ea1i vi\u1ec7n d\u01b0\u1ee1ng l\u00e3o.",
      collocations: ["live in a nursing home", "visit a nursing home"]
    }
    ,
    {
      id: "mega-unit-4-solidarity",
      word: "solidarity",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n \u0111o\u00e0n k\u1ebft t\u01b0\u01a1ng th\u00e2n t\u01b0\u01a1ng \u00e1i",
      ipa: "/\u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Neighbors displayed remarkable solidarity when helping repair storm-damaged roofs.",
      exampleVi: "B\u00e0 con ch\u00f2m x\u00f3m th\u1ec3 hi\u1ec7n tinh th\u1ea7n t\u01b0\u01a1ng th\u00e2n t\u01b0\u01a1ng \u00e1i khi c\u00f9ng nhau l\u1ee3p l\u1ea1i m\u00e1i nh\u00e0 sau b\u00e3o.",
      collocations: ["show solidarity with", "stand in solidarity"]
    }
    ,
    {
      id: "mega-unit-4-benevolence",
      word: "benevolence",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng nh\u00e2n t\u1eeb h\u01b0\u1edbng thi\u1ec7n",
      ipa: "/b\u0259\u02c8nev\u0259l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=benevolence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her lifelong benevolence brought hope to thousands of impoverished patients.",
      exampleVi: "T\u1ea5m l\u00f2ng nh\u00e2n t\u1eeb su\u1ed1t \u0111\u1eddi c\u1ee7a b\u00e0 \u0111\u00e3 th\u1eafp l\u00ean hy v\u1ecdng cho h\u00e0ng ng\u00e0n b\u1ec7nh nh\u00e2n ngh\u00e8o kh\u00f3.",
      collocations: ["act of benevolence", "spirit of benevolence"]
    }
    ,
    {
      id: "mega-unit-4-social-inclusion",
      word: "social inclusion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u00f2a nh\u1eadp x\u00e3 h\u1ed9i b\u00ecnh \u0111\u1eb3ng",
      ipa: "/\u02ccs\u0259\u028a\u0283l \u026an\u02c8klu\u02d0\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+inclusion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adaptive sports programs foster social inclusion for youth with physical disabilities.",
      exampleVi: "Th\u1ec3 thao th\u00edch \u1ee9ng th\u00fac \u0111\u1ea9y s\u1ef1 h\u00f2a nh\u1eadp x\u00e3 h\u1ed9i cho thanh thi\u1ebfu ni\u00ean khuy\u1ebft t\u1eadt.",
      collocations: ["promote social inclusion", "barriers to social inclusion"]
    }
    ,
    {
      id: "mega-unit-4-community-outreach",
      word: "community outreach",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng ti\u1ebfp c\u1eadn v\u00e0 gi\u00fap \u0111\u1ee1 c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti \u02c8a\u028atri\u02d0t\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+outreach&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Doctors participate in weekend community outreach programs providing free checkups.",
      exampleVi: "C\u00e1c b\u00e1c s\u0129 tham gia ho\u1ea1t \u0111\u1ed9ng c\u1ed9ng \u0111\u1ed3ng cu\u1ed1i tu\u1ea7n \u0111\u1ec3 kh\u00e1m s\u1ee9c kh\u1ecfe mi\u1ec5n ph\u00ed cho d\u00e2n ngh\u00e8o.",
      collocations: ["conduct community outreach", "outreach initiative"]
    }
    ,
    {
      id: "mega-unit-4-voluntary-contribution",
      word: "voluntary contribution",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n \u0111\u00f3ng g\u00f3p t\u1ef1 nguy\u1ec7n v\u00ec c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02c8v\u0252l\u0259ntri \u02cck\u0252ntr\u026a\u02c8bju\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=voluntary+contribution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The bridge was built entirely through voluntary contributions from villagers.",
      exampleVi: "C\u00e2y c\u1ea7u \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng ho\u00e0n to\u00e0n t\u1eeb nh\u1eefng \u0111\u00f3ng g\u00f3p t\u1ef1 nguy\u1ec7n c\u1ee7a b\u00e0 con d\u00e2n l\u00e0ng.",
      collocations: ["make a voluntary contribution", "rely on voluntary contributions"]
    }
    ,
    {
      id: "mega-unit-4-neighborhood-cleanup",
      word: "neighborhood cleanup",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i t\u1ed5ng v\u1ec7 sinh ng\u00f5 ph\u1ed1 xanh s\u1ea1ch \u0111\u1eb9p",
      ipa: "/\u02c8ne\u026ab\u0259h\u028ad \u02c8kli\u02d0n\u028cp/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=neighborhood+cleanup&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Families gathered on Sunday morning for the monthly neighborhood cleanup.",
      exampleVi: "C\u00e1c gia \u0111\u00ecnh t\u1eadp trung v\u00e0o s\u00e1ng Ch\u1ee7 nh\u1eadt \u0111\u1ec3 tham gia bu\u1ed5i t\u1ed5ng v\u1ec7 sinh ng\u00f5 ph\u1ed1 \u0111\u1ecbnh k\u1ef3.",
      collocations: ["join a neighborhood cleanup", "organize a cleanup"]
    }
    ,
    {
      id: "mega-unit-4-free-dental-clinic",
      word: "free dental clinic",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00f2ng kh\u00e1m r\u0103ng mi\u1ec5n ph\u00ed cho ng\u01b0\u1eddi ngh\u00e8o",
      ipa: "/fri\u02d0 \u02c8dentl \u02c8kl\u026an\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=free+dental+clinic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dentistry students volunteer at the free dental clinic twice a month.",
      exampleVi: "Sinh vi\u00ean khoa r\u0103ng h\u00e0m m\u1eb7t t\u00ecnh nguy\u1ec7n kh\u00e1m t\u1ea1i ph\u00f2ng nha mi\u1ec5n ph\u00ed hai l\u1ea7n m\u1ed7i th\u00e1ng.",
      collocations: ["run a free dental clinic", "attend a free clinic"]
    }
    ,
    {
      id: "mega-unit-4-empathy",
      word: "empathy",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 th\u1ea5u c\u1ea3m v\u00e0 s\u1ebb chia s\u00e2u s\u1eafc",
      ipa: "/\u02c8emp\u0259\u03b8i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empathy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "True volunteering begins with heartfelt empathy for those enduring hardships.",
      exampleVi: "Ho\u1ea1t \u0111\u1ed9ng t\u00ecnh nguy\u1ec7n \u0111\u00edch th\u1ef1c b\u1eaft \u0111\u1ea7u t\u1eeb s\u1ef1 th\u1ea5u c\u1ea3m ch\u00e2n th\u00e0nh v\u1edbi nh\u1eefng ng\u01b0\u1eddi ho\u1ea1n n\u1ea1n.",
      collocations: ["display deep empathy", "cultivate empathy"]
    }
    ,
    {
      id: "mega-unit-4-community-welfare",
      word: "community welfare",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00fac l\u1ee3i v\u00e0 \u0111\u1eddi s\u1ed1ng an sinh c\u1ee7a c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti \u02c8welfe\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+welfare&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Public investments in clean water directly improve community welfare.",
      exampleVi: "\u0110\u1ea7u t\u01b0 c\u00f4ng v\u00e0o h\u1ec7 th\u1ed1ng n\u01b0\u1edbc s\u1ea1ch n\u00e2ng cao tr\u1ef1c ti\u1ebfp ph\u00fac l\u1ee3i \u0111\u1eddi s\u1ed1ng c\u1ee7a ng\u01b0\u1eddi d\u00e2n.",
      collocations: ["enhance community welfare", "dedication to community welfare"]
    }
  ],
  "unit-5-inventions": [
    {
      id: "v10-u5-breakthrough",
      word: "breakthrough",
      partOfSpeech: "n",
      meaningVi: "b\u01b0\u1edbc \u0111\u1ed9t ph\u00e1 c\u00f4ng ngh\u1ec7 mang t\u00ednh c\u00e1ch m\u1ea1ng",
      ipa: "/\u02c8bre\u026ak\u03b8ru\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breakthrough&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scientists announced a historic breakthrough in solid-state lithium battery design.",
      exampleVi: "C\u00e1c nh\u00e0 khoa h\u1ecdc c\u00f4ng b\u1ed1 b\u01b0\u1edbc \u0111\u1ed9t ph\u00e1 l\u1ecbch s\u1eed trong thi\u1ebft k\u1ebf pin lithium th\u1ec3 r\u1eafn.",
      collocations: ["technological breakthrough", "major scientific breakthrough"]
    },
    {
      id: "v10-u5-innovate",
      word: "innovate",
      partOfSpeech: "v",
      meaningVi: "\u0111\u1ed5i m\u1edbi s\u00e1ng t\u1ea1o kh\u00f4ng ng\u1eebng",
      ipa: "/\u02c8\u026an\u0259ve\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=innovate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Enterprises must innovate continuously to remain competitive in global markets.",
      exampleVi: "Doanh nghi\u1ec7p ph\u1ea3i kh\u00f4ng ng\u1eebng \u0111\u1ed5i m\u1edbi s\u00e1ng t\u1ea1o \u0111\u1ec3 duy tr\u00ec n\u0103ng l\u1ef1c c\u1ea1nh tranh tr\u00ean th\u1ecb tr\u01b0\u1eddng qu\u1ed1c t\u1ebf.",
      collocations: ["innovate constantly", "innovate new solutions"]
    },
    {
      id: "v10-u5-artificial-intelligence",
      word: "artificial intelligence",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o (AI)",
      ipa: "/\u02cc\u0251\u02d0t\u026af\u026a\u0283l \u026an\u02c8tel\u026ad\u0292\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=artificial+intelligence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Artificial intelligence helps doctors diagnose rare illnesses from CT scans in seconds.",
      exampleVi: "Tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o gi\u00fap b\u00e1c s\u0129 ch\u1ea9n \u0111o\u00e1n c\u00e1c b\u1ec7nh hi\u1ebfm t\u1eeb phim ch\u1ee5p CT ch\u1ec9 trong v\u00e0i gi\u00e2y.",
      collocations: ["applications of artificial intelligence", "powered by artificial intelligence"]
    },
    {
      id: "v10-u5-patent",
      word: "patent",
      partOfSpeech: "n / v",
      meaningVi: "b\u1eb1ng s\u00e1ng ch\u1ebf \u0111\u1ed9c quy\u1ec1n",
      ipa: "/\u02c8p\u00e6tnt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=patent&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The inventor was granted an international patent for her low-cost water purifier.",
      exampleVi: "N\u1eef nh\u00e0 s\u00e1ng ch\u1ebf \u0111\u00e3 \u0111\u01b0\u1ee3c c\u1ea5p b\u1eb1ng s\u00e1ng ch\u1ebf qu\u1ed1c t\u1ebf cho m\u00e1y l\u1ecdc n\u01b0\u1edbc chi ph\u00ed th\u1ea5p c\u1ee7a m\u00ecnh.",
      collocations: ["apply for a patent", "grant a patent", "hold a patent"]
    },
    {
      id: "v10-u5-device",
      word: "device",
      partOfSpeech: "n",
      meaningVi: "thi\u1ebft b\u1ecb \u0111i\u1ec7n t\u1eed chuy\u00ean d\u1ee5ng",
      ipa: "/d\u026a\u02c8va\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=device&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smart wearable devices track your heart rate and sleep patterns throughout the night.",
      exampleVi: "C\u00e1c thi\u1ebft b\u1ecb \u0111eo th\u00f4ng minh theo d\u00f5i nh\u1ecbp tim v\u00e0 chu k\u1ef3 gi\u1ea5c ng\u1ee7 su\u1ed1t \u0111\u00eam.",
      collocations: ["electronic device", "portable device"]
    },
    {
      id: "v10-u5-gadget",
      word: "gadget",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed3 d\u00f9ng c\u00f4ng ngh\u1ec7 ti\u1ec7n \u00edch nh\u1ecf g\u1ecdn",
      ipa: "/\u02c8\u0261\u00e6d\u0292\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gadget&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "This pocket-sized gadget can translate spoken conversations across thirty languages.",
      exampleVi: "M\u00f3n \u0111\u1ed3 c\u00f4ng ngh\u1ec7 nh\u1ecf g\u1ecdn b\u1ecf t\u00fai n\u00e0y c\u00f3 th\u1ec3 d\u1ecbch \u0111\u00e0m tho\u1ea1i tr\u1ef1c ti\u1ebfp qua ba m\u01b0\u01a1i ng\u00f4n ng\u1eef.",
      collocations: ["latest high-tech gadget", "kitchen gadget"]
    },
    {
      id: "v10-u5-portable",
      word: "portable",
      partOfSpeech: "adj",
      meaningVi: "d\u1ec5 d\u00e0ng mang theo, di \u0111\u1ed9ng",
      ipa: "/\u02c8p\u0254\u02d0t\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=portable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lightweight solar power banks are highly portable for outdoor camping trips.",
      exampleVi: "Pin s\u1ea1c d\u1ef1 ph\u00f2ng n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi si\u00eau nh\u1eb9 r\u1ea5t ti\u1ec7n mang theo khi \u0111i d\u00e3 ngo\u1ea1i.",
      collocations: ["portable charger", "portable speaker", "highly portable"]
    },
    {
      id: "v10-u5-wireless",
      word: "wireless",
      partOfSpeech: "adj",
      meaningVi: "k\u1ebft n\u1ed1i kh\u00f4ng d\u00e2y ti\u1ec7n l\u1ee3i",
      ipa: "/\u02c8wa\u026a\u0259l\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wireless&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wireless charging pads eliminate the clutter of tangled cables on work desks.",
      exampleVi: "\u0110\u1ebf s\u1ea1c kh\u00f4ng d\u00e2y gi\u00fap d\u1ecdn d\u1eb9p \u0111\u1ed1ng d\u00e2y c\u00e1p l\u1ed9n x\u1ed9n tr\u00ean b\u00e0n l\u00e0m vi\u1ec7c.",
      collocations: ["wireless technology", "wireless earbuds"]
    },
    {
      id: "v10-u5-revolutionize",
      word: "revolutionize",
      partOfSpeech: "v",
      meaningVi: "c\u00e1ch m\u1ea1ng h\u00f3a, thay \u0111\u1ed5i to\u00e0n di\u1ec7n",
      ipa: "/\u02ccrev\u0259\u02c8lu\u02d0\u0283\u0259na\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=revolutionize&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smartphones have revolutionized the way humans communicate and share news.",
      exampleVi: "\u0110i\u1ec7n tho\u1ea1i th\u00f4ng minh \u0111\u00e3 c\u00e1ch m\u1ea1ng h\u00f3a c\u00e1ch lo\u00e0i ng\u01b0\u1eddi li\u00ean l\u1ea1c v\u00e0 chia s\u1ebb tin t\u1ee9c.",
      collocations: ["revolutionize the industry", "completely revolutionize"]
    },
    {
      id: "v10-u5-vacuum-cleaner",
      word: "vacuum cleaner",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e1y h\u00fat b\u1ee5i t\u1ef1 \u0111\u1ed9ng/c\u1ea7m tay",
      ipa: "/\u02c8v\u00e6kju\u02d0m \u02c8kli\u02d0n\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vacuum+cleaner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Robotic vacuum cleaners navigate living rooms autonomously while you sleep.",
      exampleVi: "M\u00e1y h\u00fat b\u1ee5i robot t\u1ef1 \u0111\u1ed9ng di chuy\u1ec3n l\u00e0m s\u1ea1ch ph\u00f2ng kh\u00e1ch trong khi b\u1ea1n ng\u1ee7.",
      collocations: ["robotic vacuum cleaner", "cordless vacuum cleaner"]
    },
    {
      id: "v10-u5-3d-printing",
      word: "3D printing",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 in ba chi\u1ec1u t\u1ea1o m\u1eabu",
      ipa: "/\u02cc\u03b8ri\u02d0 di\u02d0 \u02c8pr\u026ant\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=3D+printing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "3D printing enables engineers to build complex medical prosthetics quickly.",
      exampleVi: "C\u00f4ng ngh\u1ec7 in 3D cho ph\u00e9p c\u00e1c k\u1ef9 s\u01b0 t\u1ea1o ra c\u00e1c chi gi\u1ea3 y t\u1ebf ph\u1ee9c t\u1ea1p m\u1ed9t c\u00e1ch nhanh ch\u00f3ng.",
      collocations: ["3D printing technology", "commercial 3D printing"]
    },
    {
      id: "v10-u5-autonomous-vehicle",
      word: "autonomous vehicle",
      partOfSpeech: "n.phr",
      meaningVi: "xe t\u1ef1 h\u00e0nh kh\u00f4ng ng\u01b0\u1eddi l\u00e1i",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s \u02c8vi\u02d0\u0259kl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+vehicle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Autonomous vehicles utilize LiDAR sensors and AI algorithms to avoid road accidents.",
      exampleVi: "Xe t\u1ef1 h\u00e0nh s\u1eed d\u1ee5ng c\u1ea3m bi\u1ebfn LiDAR v\u00e0 thu\u1eadt to\u00e1n AI \u0111\u1ec3 tr\u00e1nh tai n\u1ea1n giao th\u00f4ng.",
      collocations: ["self-driving autonomous vehicle", "fleet of autonomous vehicles"]
    },
    {
      id: "v10-u5-cutting-edge",
      word: "cutting-edge",
      partOfSpeech: "adj",
      meaningVi: "t\u1ed1i t\u00e2n, ti\u00ean ti\u1ebfn h\u00e0ng \u0111\u1ea7u",
      ipa: "/\u02cck\u028ct\u026a\u014b \u02c8ed\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cutting-edge&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The laboratory is furnished with cutting-edge nanotechnology equipment.",
      exampleVi: "Ph\u00f2ng th\u00ed nghi\u1ec7m \u0111\u01b0\u1ee3c trang b\u1ecb c\u00e1c thi\u1ebft b\u1ecb c\u00f4ng ngh\u1ec7 nano t\u1ed1i t\u00e2n nh\u1ea5t.",
      collocations: ["cutting-edge technology", "cutting-edge research"]
    },
    {
      id: "v10-u5-prototype",
      word: "prototype",
      partOfSpeech: "n",
      meaningVi: "m\u1eabu nguy\u00ean m\u1eabu \u0111\u1ea7u ti\u00ean \u0111\u1ec3 th\u1eed nghi\u1ec7m",
      ipa: "/\u02c8pr\u0259\u028at\u0259ta\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prototype&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Engineers tested their electric airplane prototype in specialized wind tunnels.",
      exampleVi: "C\u00e1c k\u1ef9 s\u01b0 \u0111\u00e3 th\u1eed nghi\u1ec7m m\u1eabu m\u00e1y bay \u0111i\u1ec7n \u0111\u1ea7u ti\u00ean c\u1ee7a h\u1ecd trong \u0111\u01b0\u1eddng h\u1ea7m gi\u00f3 chuy\u00ean d\u1ee5ng.",
      collocations: ["build a prototype", "functional prototype"]
    },
    {
      id: "v10-u5-efficiency",
      word: "efficiency",
      partOfSpeech: "n",
      meaningVi: "hi\u1ec7u su\u1ea5t, n\u0103ng su\u1ea5t ho\u1ea1t \u0111\u1ed9ng",
      ipa: "/\u026a\u02c8f\u026a\u0283nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=efficiency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The new microchip boosts computing efficiency while drawing 40 percent less battery.",
      exampleVi: "Con chip m\u1edbi n\u00e2ng cao hi\u1ec7u su\u1ea5t x\u1eed l\u00fd trong khi ti\u00eau t\u1ed1n \u00edt h\u01a1n 40 ph\u1ea7n tr\u0103m pin.",
      collocations: ["operational efficiency", "improve energy efficiency"]
    },
    {
      id: "v10-u5-automation",
      word: "automation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u1ef1 \u0111\u1ed9ng h\u00f3a trong s\u1ea3n xu\u1ea5t",
      ipa: "/\u02cc\u0254\u02d0t\u0259\u02c8me\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=automation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Factory automation speeds up automobile assembly lines and lowers workplace accidents.",
      exampleVi: "T\u1ef1 \u0111\u1ed9ng h\u00f3a nh\u00e0 m\u00e1y t\u0103ng t\u1ed1c d\u00e2y chuy\u1ec1n l\u1eafp r\u00e1p \u00f4 t\u00f4 v\u00e0 gi\u1ea3m thi\u1ec3u tai n\u1ea1n lao \u0111\u1ed9ng.",
      collocations: ["industrial automation", "full automation"]
    },
    {
      id: "v10-u5-biometric",
      word: "biometric",
      partOfSpeech: "adj",
      meaningVi: "thu\u1ed9c v\u1ec1 sinh tr\u1eafc h\u1ecdc (v\u00e2n tay, m\u1ed1ng m\u1eaft)",
      ipa: "/\u02ccba\u026a\u0259\u028a\u02c8metr\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biometric&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Biometric facial recognition unlocks smartphones instantly and securely.",
      exampleVi: "Nh\u1eadn di\u1ec7n khu\u00f4n m\u1eb7t sinh tr\u1eafc h\u1ecdc m\u1edf kh\u00f3a \u0111i\u1ec7n tho\u1ea1i th\u00f4ng minh ngay t\u1ee9c th\u00ec v\u00e0 an to\u00e0n.",
      collocations: ["biometric authentication", "biometric sensor"]
    },
    {
      id: "v10-u5-user-friendly",
      word: "user-friendly",
      partOfSpeech: "adj",
      meaningVi: "d\u1ec5 s\u1eed d\u1ee5ng, th\u00e2n thi\u1ec7n ng\u01b0\u1eddi d\u00f9ng",
      ipa: "/\u02ccju\u02d0z\u0259 \u02c8frendli/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=user-friendly&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The app features an intuitive, user-friendly interface suitable for elderly users.",
      exampleVi: "\u1ee8ng d\u1ee5ng s\u1edf h\u1eefu giao di\u1ec7n tr\u1ef1c quan, th\u00e2n thi\u1ec7n d\u1ec5 d\u00f9ng ph\u00f9 h\u1ee3p v\u1edbi ng\u01b0\u1eddi l\u1edbn tu\u1ed5i.",
      collocations: ["user-friendly interface", "user-friendly design"]
    },
    {
      id: "v10-u5-telecommunication",
      word: "telecommunication",
      partOfSpeech: "n",
      meaningVi: "ng\u00e0nh vi\u1ec5n th\u00f4ng truy\u1ec1n d\u1eabn",
      ipa: "/\u02cctel\u026ak\u0259\u02ccmju\u02d0n\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=telecommunication&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "5G networks represent the next leap forward in global telecommunication.",
      exampleVi: "M\u1ea1ng 5G \u0111\u1ea1i di\u1ec7n cho b\u01b0\u1edbc nh\u1ea3y v\u1ecdt ti\u1ebfp theo trong ng\u00e0nh vi\u1ec5n th\u00f4ng to\u00e0n c\u1ea7u.",
      collocations: ["telecommunication network", "modern telecommunication"]
    },
    {
      id: "v10-u5-sensor",
      word: "sensor",
      partOfSpeech: "n",
      meaningVi: "c\u1ea3m bi\u1ebfn ph\u00e1t hi\u1ec7n chuy\u1ec3n \u0111\u1ed9ng/nhi\u1ec7t",
      ipa: "/\u02c8sens\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sensor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Optical sensors detect oncoming obstacles and apply emergency brakes automatically.",
      exampleVi: "C\u1ea3m bi\u1ebfn quang h\u1ecdc ph\u00e1t hi\u1ec7n ch\u01b0\u1edbng ng\u1ea1i v\u1eadt ph\u00eda tr\u01b0\u1edbc v\u00e0 k\u00edch ho\u1ea1t phanh kh\u1ea9n c\u1ea5p t\u1ef1 \u0111\u1ed9ng.",
      collocations: ["motion sensor", "temperature sensor"]
    },
    {
      id: "v10-u5-cybersecurity",
      word: "cybersecurity",
      partOfSpeech: "n",
      meaningVi: "an ninh m\u1ea1ng, b\u1ea3o m\u1eadt d\u1eef li\u1ec7u s\u1ed1",
      ipa: "/\u02c8sa\u026ab\u0259s\u026akj\u028a\u0259r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cybersecurity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Companies invest heavily in cybersecurity to guard confidential customer databases.",
      exampleVi: "C\u00e1c c\u00f4ng ty \u0111\u1ea7u t\u01b0 m\u1ea1nh v\u00e0o an ninh m\u1ea1ng \u0111\u1ec3 b\u1ea3o v\u1ec7 c\u01a1 s\u1edf d\u1eef li\u1ec7u kh\u00e1ch h\u00e0ng b\u1ea3o m\u1eadt.",
      collocations: ["cybersecurity threats", "enhance cybersecurity"]
    },
    {
      id: "v10-u5-virtual-reality",
      word: "virtual reality",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ef1c t\u1ebf \u1ea3o (VR)",
      ipa: "/\u02ccv\u025c\u02d0t\u0283u\u0259l ri\u02c8\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+reality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Virtual reality headsets transport students directly inside ancient Roman temples.",
      exampleVi: "K\u00ednh th\u1ef1c t\u1ebf \u1ea3o \u0111\u01b0a h\u1ecdc sinh v\u00e0o kh\u00e1m ph\u00e1 tr\u1ef1c ti\u1ebfp b\u00ean trong c\u00e1c ng\u00f4i \u0111\u1ec1n La M\u00e3 c\u1ed5 \u0111\u1ea1i.",
      collocations: ["virtual reality headset", "immerse in virtual reality"]
    },
    {
      id: "v10-u5-augmented-reality",
      word: "augmented reality",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ef1c t\u1ebf t\u0103ng c\u01b0\u1eddng (AR)",
      ipa: "/\u0254\u02d0\u0261\u02ccment\u026ad ri\u02c8\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=augmented+reality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Augmented reality apps project 3D anatomy models right onto students' study desks.",
      exampleVi: "\u1ee8ng d\u1ee5ng th\u1ef1c t\u1ebf t\u0103ng c\u01b0\u1eddng hi\u1ec3n th\u1ecb m\u00f4 h\u00ecnh gi\u1ea3i ph\u1eabu 3D ngay tr\u00ean b\u00e0n h\u1ecdc sinh.",
      collocations: ["augmented reality glasses", "interactive augmented reality"]
    },
    {
      id: "v10-u5-breakthrough-technology",
      word: "breakthrough technology",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 \u0111\u1ed9t ph\u00e1 ti\u00ean phong",
      ipa: "/\u02c8bre\u026ak\u03b8ru\u02d0 tek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breakthrough+technology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Quantum computing is hailed as a breakthrough technology for cryptography.",
      exampleVi: "\u0110i\u1ec7n to\u00e1n l\u01b0\u1ee3ng t\u1eed \u0111\u01b0\u1ee3c ca ng\u1ee3i l\u00e0 c\u00f4ng ngh\u1ec7 \u0111\u1ed9t ph\u00e1 cho ng\u00e0nh m\u1eadt m\u00e3 h\u1ecdc.",
      collocations: ["adopt breakthrough technology", "invest in breakthrough technology"]
    },
    {
      id: "v10-u5-durable",
      word: "durable",
      partOfSpeech: "adj",
      meaningVi: "b\u1ec1n b\u1ec9, ch\u1ecbu l\u1ef1c t\u1ed1t theo th\u1eddi gian",
      ipa: "/\u02c8dj\u028a\u0259r\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=durable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Titanium casing makes the new adventure smartwatch exceptionally durable.",
      exampleVi: "V\u1ecf titan gi\u00fap chi\u1ebfc \u0111\u1ed3ng h\u1ed3 th\u00f4ng minh th\u00e1m hi\u1ec3m m\u1edbi c\u00f3 \u0111\u1ed9 b\u1ec1n \u0111\u1eb7c bi\u1ec7t cao.",
      collocations: ["durable material", "long-lasting and durable"]
    },
    {
      id: "v10-u5-digital-transformation",
      word: "digital transformation",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ec3n \u0111\u1ed5i s\u1ed1 to\u00e0n di\u1ec7n",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02cctr\u00e6nsf\u0259\u02c8me\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+transformation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools are undergoing digital transformation by replacing paper books with tablets.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng h\u1ecdc \u0111ang tr\u1ea3i qua qu\u00e1 tr\u00ecnh chuy\u1ec3n \u0111\u1ed5i s\u1ed1 b\u1eb1ng vi\u1ec7c thay s\u00e1ch gi\u1ea5y b\u1eb1ng m\u00e1y t\u00ednh b\u1ea3ng.",
      collocations: ["accelerate digital transformation", "digital transformation strategy"]
    },
    {
      id: "v10-u5-robotics",
      word: "robotics",
      partOfSpeech: "n",
      meaningVi: "ng\u00e0nh khoa h\u1ecdc ch\u1ebf t\u1ea1o robot",
      ipa: "/r\u0259\u028a\u02c8b\u0252t\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=robotics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High school robotics clubs compete annually in programming autonomous rescue bots.",
      exampleVi: "C\u00e2u l\u1ea1c b\u1ed9 ch\u1ebf t\u1ea1o robot tr\u01b0\u1eddng ph\u1ed5 th\u00f4ng thi \u0111\u1ea5u th\u01b0\u1eddng ni\u00ean v\u1ec1 l\u1eadp tr\u00ecnh robot c\u1ee9u h\u1ed9 t\u1ef1 \u0111\u1ed9ng.",
      collocations: ["field of robotics", "robotics engineering"]
    },
    {
      id: "v10-u5-cloud-storage",
      word: "cloud storage",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0u tr\u1eef d\u1eef li\u1ec7u \u0111i\u1ec7n to\u00e1n \u0111\u00e1m m\u00e2y",
      ipa: "/\u02c8kla\u028ad \u02c8st\u0254\u02d0r\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cloud+storage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Backing up project files to cloud storage prevents accidental data loss.",
      exampleVi: "Sao l\u01b0u h\u1ed3 s\u01a1 d\u1ef1 \u00e1n l\u00ean \u0111\u00e1m m\u00e2y gi\u00fap ng\u0103n ch\u1eb7n vi\u1ec7c m\u1ea5t d\u1eef li\u1ec7u ngo\u00e0i \u00fd mu\u1ed1n.",
      collocations: ["upload to cloud storage", "secure cloud storage"]
    },
    {
      id: "v10-u5-mass-production",
      word: "mass production",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ea3n xu\u1ea5t h\u00e0ng lo\u1ea1t quy m\u00f4 l\u1edbn",
      ipa: "/\u02ccm\u00e6s pr\u0259\u02c8d\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mass+production&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The invention of the assembly line enabled the mass production of affordable automobiles.",
      exampleVi: "S\u00e1ng ch\u1ebf ra d\u00e2y chuy\u1ec1n l\u1eafp r\u00e1p \u0111\u00e3 cho ph\u00e9p s\u1ea3n xu\u1ea5t h\u00e0ng lo\u1ea1t \u00f4 t\u00f4 v\u1edbi gi\u00e1 ph\u1ea3i ch\u0103ng.",
      collocations: ["enter mass production", "cheap mass production"]
    },
    {
      id: "v10-u5-obsolete",
      word: "obsolete",
      partOfSpeech: "adj",
      meaningVi: "l\u1ed7i th\u1eddi, kh\u00f4ng c\u00f2n ai s\u1eed d\u1ee5ng",
      ipa: "/\u02c8\u0252bs\u0259li\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=obsolete&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Floppy disks became obsolete shortly after the introduction of USB flash drives.",
      exampleVi: "\u0110\u0129a m\u1ec1m \u0111\u00e3 tr\u1edf n\u00ean l\u1ed7i th\u1eddi ngay sau khi \u1ed5 \u0111\u0129a USB flash ra \u0111\u1eddi.",
      collocations: ["render obsolete", "become obsolete"]
    },
    {
      id: "v10-u5-smart-appliance",
      word: "smart appliance",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u1ebft b\u1ecb gia d\u1ee5ng th\u00f4ng minh k\u1ebft n\u1ed1i m\u1ea1ng",
      ipa: "/sm\u0251\u02d0t \u0259\u02c8pla\u026a\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smart+appliance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smart appliances allow homeowners to preheat ovens or turn on air conditioners remotely.",
      exampleVi: "Thi\u1ebft b\u1ecb gia d\u1ee5ng th\u00f4ng minh cho ph\u00e9p ch\u1ee7 nh\u00e0 b\u1eadt l\u00f2 n\u01b0\u1edbng hay b\u1eadt \u0111i\u1ec1u h\u00f2a t\u1eeb xa.",
      collocations: ["energy-saving smart appliances", "interconnected smart appliances"]
    },
    {
      id: "v10-u5-algorithm",
      word: "algorithm",
      partOfSpeech: "n",
      meaningVi: "thu\u1eadt to\u00e1n x\u1eed l\u00fd t\u00ednh to\u00e1n m\u00e1y t\u00ednh",
      ipa: "/\u02c8\u00e6l\u0261\u0259r\u026a\u00f0\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=algorithm&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The navigation algorithm recalculates faster detour routes when heavy traffic is detected.",
      exampleVi: "Thu\u1eadt to\u00e1n \u0111\u1ecbnh v\u1ecb t\u1ef1 t\u00ednh to\u00e1n \u0111\u01b0\u1eddng v\u00f2ng nhanh h\u01a1n khi ph\u00e1t hi\u1ec7n k\u1eb9t xe.",
      collocations: ["search algorithm", "complex algorithm"]
    },
    {
      id: "v10-u5-ergonomic",
      word: "ergonomic",
      partOfSpeech: "adj",
      meaningVi: "c\u00f4ng th\u00e1i h\u1ecdc, thi\u1ebft k\u1ebf \u0111\u1ee1 m\u1ecfi c\u01a1 th\u1ec3",
      ipa: "/\u02cc\u025c\u02d0\u0261\u0259\u02c8n\u0252m\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ergonomic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An ergonomic office chair protects software engineers from chronic back pain.",
      exampleVi: "Chi\u1ebfc gh\u1ebf v\u0103n ph\u00f2ng c\u00f4ng th\u00e1i h\u1ecdc b\u1ea3o v\u1ec7 k\u1ef9 s\u01b0 ph\u1ea7n m\u1ec1m kh\u1ecfi ch\u1ee9ng \u0111au l\u01b0ng m\u00e3n t\u00ednh.",
      collocations: ["ergonomic keyboard", "ergonomic design"]
    },
    {
      id: "v10-u5-nanotechnology",
      word: "nanotechnology",
      partOfSpeech: "n",
      meaningVi: "c\u00f4ng ngh\u1ec7 v\u1eadt li\u1ec7u k\u00edch th\u01b0\u1edbc nano",
      ipa: "/\u02ccn\u00e6n\u0259\u028atek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nanotechnology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nanotechnology enables water-repellent coatings that keep smartphone screens smudge-free.",
      exampleVi: "C\u00f4ng ngh\u1ec7 nano t\u1ea1o ra l\u1edbp ph\u1ee7 kh\u00e1ng n\u01b0\u1edbc gi\u00fap m\u00e0n h\u00ecnh \u0111i\u1ec7n tho\u1ea1i kh\u00f4ng d\u00ednh d\u1ea5u v\u00e2n tay.",
      collocations: ["applications of nanotechnology", "nanotechnology research"]
    },
    {
      id: "v10-u5-high-tech",
      word: "high-tech",
      partOfSpeech: "adj",
      meaningVi: "c\u00f4ng ngh\u1ec7 cao ti\u00ean ti\u1ebfn",
      ipa: "/\u02ccha\u026a \u02c8tek/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=high-tech&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Silicon Valley remains the global capital for high-tech entrepreneurship and venture capital.",
      exampleVi: "Thung l\u0169ng Silicon v\u1eabn l\u00e0 th\u1ee7 ph\u1ee7 to\u00e0n c\u1ea7u cho kh\u1edfi nghi\u1ec7p c\u00f4ng ngh\u1ec7 cao v\u00e0 qu\u1ef9 \u0111\u1ea7u t\u01b0.",
      collocations: ["high-tech industry", "high-tech gadgets"]
    }
    ,
    {
      id: "v10-extra-touchscreen",
      word: "touchscreen",
      partOfSpeech: "n",
      meaningVi: "m\u00e0n h\u00ecnh c\u1ea3m \u1ee9ng \u0111a \u0111i\u1ec3m",
      ipa: "/\u02c8t\u028ct\u0283skri\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=touchscreen&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Touchscreen interfaces replaced physical phone keypads completely.",
      exampleVi: "M\u00e0n h\u00ecnh c\u1ea3m \u1ee9ng \u0111\u00e3 thay th\u1ebf ho\u00e0n to\u00e0n b\u00e0n ph\u00edm s\u1ed1 v\u1eadt l\u00fd tr\u00ean \u0111i\u1ec7n tho\u1ea1i.",
      collocations: ["touchscreen display", "responsive touchscreen"]
    }
    ,
    {
      id: "v10-extra-microchip",
      word: "microchip",
      partOfSpeech: "n",
      meaningVi: "vi m\u1ea1ch b\u00e1n d\u1eabn \u0111i\u1ec7n t\u1eed",
      ipa: "/\u02c8ma\u026akr\u0259\u028at\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=microchip&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern microchips pack billions of transistors onto a fingernail-sized silicon die.",
      exampleVi: "Vi m\u1ea1ch b\u00e1n d\u1eabn hi\u1ec7n \u0111\u1ea1i ch\u1ee9a h\u00e0ng t\u1ef7 b\u00f3ng b\u00e1n d\u1eabn tr\u00ean m\u1ed9t mi\u1ebfng silicon nh\u1ecf b\u1eb1ng m\u00f3ng tay.",
      collocations: ["silicon microchip", "microchip manufacturing"]
    }
    ,
    {
      id: "v10-extra-smartwatch",
      word: "smartwatch",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed3ng h\u1ed3 th\u00f4ng minh theo d\u00f5i s\u1ee9c kh\u1ecfe",
      ipa: "/\u02c8sm\u0251\u02d0tw\u0252t\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smartwatch&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her smartwatch alerts her whenever her resting heart rate spikes unusually.",
      exampleVi: "\u0110\u1ed3ng h\u1ed3 th\u00f4ng minh c\u1ea3nh b\u00e1o m\u1ed7i khi nh\u1ecbp tim l\u00fac ngh\u1ec9 c\u1ee7a c\u00f4 t\u0103ng cao b\u1ea5t th\u01b0\u1eddng.",
      collocations: ["wear a smartwatch", "smartwatch features"]
    }
    ,
    {
      id: "v10-extra-fiber-optics",
      word: "fiber optics",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 c\u00e1p quang t\u1ed1c \u0111\u1ed9 cao",
      ipa: "/\u02ccfa\u026ab\u0259r \u02c8\u0252pt\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fiber+optics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High-speed fiber optics allow seamless 4K video streaming without buffering.",
      exampleVi: "C\u00e1p quang t\u1ed1c \u0111\u1ed9 cao cho ph\u00e9p xem phim 4K m\u01b0\u1ee3t m\u00e0 kh\u00f4ng b\u1ecb gi\u1eadt lag.",
      collocations: ["fiber optics cable", "fiber optics network"]
    }
    ,
    {
      id: "v10-extra-drone",
      word: "drone",
      partOfSpeech: "n",
      meaningVi: "thi\u1ebft b\u1ecb bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i \u0111i\u1ec1u khi\u1ec3n t\u1eeb xa",
      ipa: "/dr\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=drone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Farmers use agricultural drones to spray organic bio-fertilizer over rice fields.",
      exampleVi: "N\u00f4ng d\u00e2n d\u00f9ng drone n\u00f4ng nghi\u1ec7p \u0111\u1ec3 phun ph\u00e2n b\u00f3n h\u1eefu c\u01a1 tr\u00ean \u0111\u1ed3ng l\u00faa.",
      collocations: ["commercial drone", "fly a drone"]
    }
    ,
    {
      id: "v10-extra-lithium-ion-battery",
      word: "lithium-ion battery",
      partOfSpeech: "n.phr",
      meaningVi: "pin s\u1ea1c lithium-ion",
      ipa: "/\u02ccl\u026a\u03b8i\u0259m \u02c8a\u026a\u0259n \u02c8b\u00e6t\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lithium-ion+battery&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Electric motorcycles rely on rechargeable lithium-ion battery packs.",
      exampleVi: "Xe m\u00e1y \u0111i\u1ec7n ch\u1ea1y b\u1eb1ng c\u00e1c kh\u1ed1i pin s\u1ea1c lithium-ion hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["lithium-ion battery pack", "charge a lithium-ion battery"]
    }
    ,
    {
      id: "v10-extra-bluetooth",
      word: "Bluetooth",
      partOfSpeech: "n.pr",
      meaningVi: "c\u00f4ng ngh\u1ec7 k\u1ebft n\u1ed1i kh\u00f4ng d\u00e2y t\u1ea7m g\u1ea7n",
      ipa: "/\u02c8blu\u02d0tu\u02d0\u03b8/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=Bluetooth&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Connect your wireless earbuds to your laptop using Bluetooth in one tap.",
      exampleVi: "K\u1ebft n\u1ed1i tai nghe kh\u00f4ng d\u00e2y v\u1edbi m\u00e1y t\u00ednh x\u00e1ch tay qua Bluetooth ch\u1ec9 b\u1eb1ng m\u1ed9t ch\u1ea1m.",
      collocations: ["Bluetooth connection", "pair via Bluetooth"]
    }
    ,
    {
      id: "v10-extra-smart-home",
      word: "smart home",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00f4i nh\u00e0 th\u00f4ng minh \u0111i\u1ec1u khi\u1ec3n t\u1ef1 \u0111\u1ed9ng",
      ipa: "/sm\u0251\u02d0t h\u0259\u028am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smart+home&type=2",
      imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A smart home allows you to adjust air conditioning and lock doors remotely.",
      exampleVi: "Nh\u00e0 th\u00f4ng minh cho ph\u00e9p b\u1ea1n ch\u1ec9nh \u0111i\u1ec1u h\u00f2a v\u00e0 kh\u00f3a c\u1eeda t\u1eeb xa qua \u0111i\u1ec7n tho\u1ea1i.",
      collocations: ["smart home devices", "install smart home systems"]
    }
    ,
    {
      id: "v10-extra-voice-recognition",
      word: "voice recognition",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 nh\u1eadn di\u1ec7n kh\u1ea9u l\u1ec7nh gi\u1ecdng n\u00f3i",
      ipa: "/v\u0254\u026as \u02ccrek\u0259\u0261\u02c8n\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=voice+recognition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voice recognition software allows hands-free texting while commuting.",
      exampleVi: "Ph\u1ea7n m\u1ec1m nh\u1eadn di\u1ec7n gi\u1ecdng n\u00f3i cho ph\u00e9p nh\u1eafn tin r\u1ea3nh tay khi \u0111ang \u0111i l\u1ea1i.",
      collocations: ["accurate voice recognition", "voice recognition technology"]
    }
    ,
    {
      id: "v10-extra-wireless-charging",
      word: "wireless charging",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 s\u1ea1c kh\u00f4ng d\u00e2y",
      ipa: "/\u02c8wa\u026a\u0259l\u0259s \u02c8t\u0283\u0251\u02d0d\u0292\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wireless+charging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Simply placing your phone on the pad initiates fast wireless charging.",
      exampleVi: "Ch\u1ec9 c\u1ea7n \u0111\u1eb7t \u0111i\u1ec7n tho\u1ea1i l\u00ean \u0111\u1ebf l\u00e0 qu\u00e1 tr\u00ecnh s\u1ea1c nhanh kh\u00f4ng d\u00e2y t\u1ef1 \u0111\u1ed9ng k\u00edch ho\u1ea1t.",
      collocations: ["wireless charging pad", "support wireless charging"]
    }
    ,
    {
      id: "v10-extra-interactive-display",
      word: "interactive display",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e0n h\u00ecnh hi\u1ec3n th\u1ecb t\u01b0\u01a1ng t\u00e1c",
      ipa: "/\u02cc\u026ant\u0259r\u02c8\u00e6kt\u026av d\u026a\u02c8sple\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interactive+display&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Museums install interactive displays to make historical exhibits fascinating.",
      exampleVi: "C\u00e1c b\u1ea3o t\u00e0ng l\u1eafp m\u00e0n h\u00ecnh t\u01b0\u01a1ng t\u00e1c \u0111\u1ec3 hi\u1ec7n v\u1eadt l\u1ecbch s\u1eed tr\u1edf n\u00ean l\u00f4i cu\u1ed1n.",
      collocations: ["touch interactive display", "interactive display screen"]
    }
    ,
    {
      id: "v10-extra-high-definition",
      word: "high-definition",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u1ed9 n\u00e9t cao, h\u00ecnh \u1ea3nh s\u1eafc n\u00e9t",
      ipa: "/\u02ccha\u026a def\u026a\u02c8n\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=high-definition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The new television reproduces sports matches in crystal-clear high-definition.",
      exampleVi: "Chi\u1ebfc tivi m\u1edbi hi\u1ec3n th\u1ecb c\u00e1c tr\u1eadn b\u00f3ng \u0111\u00e1 v\u1edbi \u0111\u1ed9 n\u00e9t cao s\u1eafc n\u00e9t nh\u01b0 th\u1eadt.",
      collocations: ["high-definition video", "high-definition camera"]
    }
    ,
    {
      id: "v10-extra-compact-design",
      word: "compact design",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u1ebft k\u1ebf nh\u1ecf g\u1ecdn, tinh t\u1ebf",
      ipa: "/\u02c8k\u0252mp\u00e6kt d\u026a\u02c8za\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=compact+design&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Travellers love this portable power bank because of its ultra-slim compact design.",
      exampleVi: "D\u00e2n du l\u1ecbch th\u00edch c\u1ee5c s\u1ea1c n\u00e0y v\u00ec thi\u1ebft k\u1ebf si\u00eau m\u1ecfng nh\u1ecf g\u1ecdn d\u1ec5 b\u1ecf t\u00fai.",
      collocations: ["sleek compact design", "benefit of compact design"]
    }
    ,
    {
      id: "v10-extra-technological-leap",
      word: "technological leap",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc nh\u1ea3y v\u1ecdt c\u00f4ng ngh\u1ec7 th\u1ea7n k\u1ef3",
      ipa: "/\u02cctekn\u0259\u02c8l\u0252d\u0292\u026akl li\u02d0p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=technological+leap&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The discovery of the transistor was a monumental technological leap forward.",
      exampleVi: "Ph\u00e1t minh ra b\u00f3ng b\u00e1n d\u1eabn l\u00e0 b\u01b0\u1edbc nh\u1ea3y v\u1ecdt c\u00f4ng ngh\u1ec7 mang t\u00ednh th\u1eddi \u0111\u1ea1i.",
      collocations: ["giant technological leap", "witness a technological leap"]
    }
    ,
    {
      id: "mega-unit-5-breakthrough-invention",
      word: "breakthrough invention",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1t minh \u0111\u1ed9t ph\u00e1 mang t\u00ednh th\u1eddi \u0111\u1ea1i",
      ipa: "/\u02c8bre\u026ak\u03b8ru\u02d0 \u026an\u02c8ven\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breakthrough+invention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The steam engine was a breakthrough invention that catalyzed the Industrial Revolution.",
      exampleVi: "\u0110\u1ed9ng c\u01a1 h\u01a1i n\u01b0\u1edbc l\u00e0 m\u1ed9t ph\u00e1t minh mang t\u00ednh \u0111\u1ed9t ph\u00e1 \u0111\u00e3 x\u00fac t\u00e1c cho cu\u1ed9c C\u00e1ch m\u1ea1ng C\u00f4ng nghi\u1ec7p.",
      collocations: ["herald a breakthrough invention", "revolutionary invention"]
    }
    ,
    {
      id: "mega-unit-5-patent-infringement",
      word: "patent infringement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 x\u00e2m ph\u1ea1m b\u1ea3n quy\u1ec1n ph\u00e1t minh s\u00e1ng ch\u1ebf",
      ipa: "/\u02c8pe\u026atnt \u026an\u02c8fr\u026and\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=patent+infringement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The tech corporation filed a lawsuit alleging blatant patent infringement on wireless protocols.",
      exampleVi: "T\u1eadp \u0111o\u00e0n c\u00f4ng ngh\u1ec7 \u0111\u00e3 n\u1ed9p \u0111\u01a1n ki\u1ec7n c\u00e1o bu\u1ed9c h\u00e0nh vi vi ph\u1ea1m b\u1eb1ng s\u00e1ng ch\u1ebf tr\u1eafng tr\u1ee3n v\u1ec1 giao th\u1ee9c kh\u00f4ng d\u00e2y.",
      collocations: ["guilty of patent infringement", "avoid patent infringement"]
    }
    ,
    {
      id: "mega-unit-5-technological-leap",
      word: "technological leap",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc nh\u1ea3y v\u1ecdt v\u1ec1 c\u00f4ng ngh\u1ec7 khoa h\u1ecdc",
      ipa: "/\u02cctekn\u0259\u02c8l\u0252d\u0292\u026akl li\u02d0p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=technological+leap&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Quantum computing represents an exponential technological leap in cryptographic speed.",
      exampleVi: "\u0110i\u1ec7n to\u00e1n l\u01b0\u1ee3ng t\u1eed \u0111\u1ea1i di\u1ec7n cho m\u1ed9t b\u01b0\u1edbc nh\u1ea3y v\u1ecdt c\u00f4ng ngh\u1ec7 c\u1ea5p s\u1ed1 nh\u00e2n v\u1ec1 t\u1ed1c \u0111\u1ed9 m\u1eadt m\u00e3 h\u1ecdc.",
      collocations: ["giant technological leap", "witness a technological leap"]
    }
    ,
    {
      id: "mega-unit-5-commercial-viability",
      word: "commercial viability",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ednh kh\u1ea3 thi th\u01b0\u01a1ng m\u1ea1i v\u00e0 sinh l\u1eddi",
      ipa: "/k\u0259\u02c8m\u025c\u02d0\u0283l \u02ccva\u026a\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=commercial+viability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investors rigorously scrutinized the prototype's production costs and commercial viability.",
      exampleVi: "C\u00e1c nh\u00e0 \u0111\u1ea7u t\u01b0 \u0111\u00e3 xem x\u00e9t k\u1ef9 l\u01b0\u1ee1ng chi ph\u00ed s\u1ea3n xu\u1ea5t v\u00e0 t\u00ednh kh\u1ea3 thi th\u01b0\u01a1ng m\u1ea1i c\u1ee7a m\u1eabu th\u1eed nghi\u1ec7m.",
      collocations: ["assess commercial viability", "prove commercial viability"]
    }
    ,
    {
      id: "mega-unit-5-open-source-software",
      word: "open-source software",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ea7n m\u1ec1m ngu\u1ed3n m\u1edf cho ph\u00e9p t\u00f9y bi\u1ebfn",
      ipa: "/\u02cc\u0259\u028ap\u0259n \u02c8s\u0254\u02d0s \u02c8s\u0252ftwe\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=open-source+software&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Developers worldwide collaborate to refine open-source software libraries.",
      exampleVi: "C\u00e1c l\u1eadp tr\u00ecnh vi\u00ean tr\u00ean to\u00e0n th\u1ebf gi\u1edbi c\u00f9ng nhau c\u1ed9ng t\u00e1c \u0111\u1ec3 tinh ch\u1ec9nh c\u00e1c th\u01b0 vi\u1ec7n ph\u1ea7n m\u1ec1m ngu\u1ed3n m\u1edf.",
      collocations: ["contribute to open-source software", "adopt open-source software"]
    }
    ,
    {
      id: "mega-unit-5-intellectual-property",
      word: "intellectual property",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e0i s\u1ea3n tr\u00ed tu\u1ec7 v\u00e0 quy\u1ec1n t\u00e1c gi\u1ea3",
      ipa: "/\u02cc\u026ant\u0259\u02c8lekt\u0283u\u0259l \u02c8pr\u0252p\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intellectual+property&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Protecting intellectual property incentivizes ongoing venture capital in biomedical research.",
      exampleVi: "B\u1ea3o v\u1ec7 s\u1edf h\u1eefu tr\u00ed tu\u1ec7 t\u1ea1o \u0111\u1ed9ng l\u1ef1c th\u00fac \u0111\u1ea9y ngu\u1ed3n v\u1ed1n \u0111\u1ea7u t\u01b0 m\u1ea1o hi\u1ec3m li\u00ean t\u1ee5c v\u00e0o nghi\u00ean c\u1ee9u y sinh.",
      collocations: ["protect intellectual property", "intellectual property rights"]
    }
    ,
    {
      id: "mega-unit-5-smart-sensor",
      word: "smart sensor",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ea3m bi\u1ebfn th\u00f4ng minh ghi nh\u1eadn d\u1eef li\u1ec7u",
      ipa: "/sm\u0251\u02d0t \u02c8sens\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smart+sensor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern drones utilize smart sensors to detect obstacles and optimize flight altitude.",
      exampleVi: "M\u00e1y bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i hi\u1ec7n \u0111\u1ea1i s\u1eed d\u1ee5ng c\u00e1c c\u1ea3m bi\u1ebfn th\u00f4ng minh \u0111\u1ec3 ph\u00e1t hi\u1ec7n v\u1eadt c\u1ea3n v\u00e0 t\u1ed1i \u01b0u h\u00f3a \u0111\u1ed9 cao bay.",
      collocations: ["equipped with smart sensors", "smart sensor network"]
    }
    ,
    {
      id: "mega-unit-5-wearable-device",
      word: "wearable device",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u1ebft b\u1ecb c\u00f4ng ngh\u1ec7 \u0111eo theo d\u00f5i s\u1ee9c kh\u1ecfe",
      ipa: "/\u02c8we\u0259r\u0259bl d\u026a\u02c8va\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wearable+device&type=2",
      imageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Smartwatches and fitness trackers are popular wearable devices tracking vital metrics.",
      exampleVi: "\u0110\u1ed3ng h\u1ed3 th\u00f4ng minh v\u00e0 thi\u1ebft b\u1ecb theo d\u00f5i th\u1ec3 d\u1ee5c l\u00e0 nh\u1eefng thi\u1ebft b\u1ecb \u0111eo tay ph\u1ed5 bi\u1ebfn \u0111o l\u01b0\u1eddng c\u00e1c ch\u1ec9 s\u1ed1 sinh t\u1ed3n.",
      collocations: ["use wearable devices", "wearable health device"]
    }
    ,
    {
      id: "mega-unit-5-nanotechnology",
      word: "nanotechnology",
      partOfSpeech: "n",
      meaningVi: "c\u00f4ng ngh\u1ec7 nano thao t\u00e1c c\u1ea5p \u0111\u1ed9 ph\u00e2n t\u1eed",
      ipa: "/\u02ccn\u00e6n\u0259\u028atek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nanotechnology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nanotechnology enables targeted drug delivery straight to cancer cells without harming healthy tissue.",
      exampleVi: "C\u00f4ng ngh\u1ec7 nano cho ph\u00e9p \u0111\u01b0a thu\u1ed1c tr\u00fang \u0111\u00edch tr\u1ef1c ti\u1ebfp t\u1edbi t\u1ebf b\u00e0o ung th\u01b0 m\u00e0 kh\u00f4ng g\u00e2y h\u1ea1i cho m\u00f4 kh\u1ecfe m\u1ea1nh.",
      collocations: ["advances in nanotechnology", "applications of nanotechnology"]
    }
    ,
    {
      id: "mega-unit-5-autonomous-navigation",
      word: "autonomous navigation",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng t\u1ef1 \u0111\u1ecbnh v\u1ecb d\u1eabn \u0111\u01b0\u1eddng t\u1ef1 \u0111\u1ed9ng",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s \u02ccn\u00e6v\u026a\u02c8\u0261e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+navigation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Self-driving vehicles rely heavily on autonomous navigation algorithms and lidar sensors.",
      exampleVi: "Xe t\u1ef1 l\u00e1i ph\u1ee5 thu\u1ed9c r\u1ea5t l\u1edbn v\u00e0o c\u00e1c thu\u1eadt to\u00e1n t\u1ef1 h\u00e0nh \u0111\u1ecbnh v\u1ecb v\u00e0 c\u1ea3m bi\u1ebfn lidar.",
      collocations: ["equipped with autonomous navigation", "autonomous navigation system"]
    }
    ,
    {
      id: "mega-unit-5-cutting-edge-lab",
      word: "cutting-edge lab",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00f2ng th\u00ed nghi\u1ec7m hi\u1ec7n \u0111\u1ea1i t\u1ed1i t\u00e2n",
      ipa: "/\u02cck\u028ct\u026a\u014b \u02c8ed\u0292 l\u00e6b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cutting-edge+lab&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scientists conduct groundbreaking genetics trials inside the university's cutting-edge lab.",
      exampleVi: "C\u00e1c nh\u00e0 khoa h\u1ecdc ti\u1ebfn h\u00e0nh c\u00e1c th\u1eed nghi\u1ec7m di truy\u1ec1n mang t\u00ednh \u0111\u1ed9t ph\u00e1 b\u00ean trong ph\u00f2ng th\u00ed nghi\u1ec7m t\u1ed1i t\u00e2n c\u1ee7a tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc.",
      collocations: ["state-of-the-art cutting-edge lab", "research in a cutting-edge lab"]
    }
    ,
    {
      id: "mega-unit-5-feasibility-study",
      word: "feasibility study",
      partOfSpeech: "n.phr",
      meaningVi: "nghi\u00ean c\u1ee9u kh\u1ea3o s\u00e1t t\u00ednh kh\u1ea3 thi d\u1ef1 \u00e1n",
      ipa: "/\u02ccfi\u02d0z\u0259\u02c8b\u026al\u0259ti \u02c8st\u028cdi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=feasibility+study&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The engineering board conducted a comprehensive feasibility study before digging the tunnel.",
      exampleVi: "H\u1ed9i \u0111\u1ed3ng k\u1ef9 s\u01b0 \u0111\u00e3 th\u1ef1c hi\u1ec7n m\u1ed9t nghi\u00ean c\u1ee9u kh\u1ea3 thi to\u00e0n di\u1ec7n tr\u01b0\u1edbc khi ti\u1ebfn h\u00e0nh \u0111\u00e0o h\u1ea7m.",
      collocations: ["undertake a feasibility study", "present a feasibility study"]
    }
    ,
    {
      id: "mega-unit-5-energy-storage",
      word: "energy storage",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng l\u01b0u tr\u1eef n\u0103ng l\u01b0\u1ee3ng pin \u1eafc quy",
      ipa: "/\u02c8en\u0259d\u0292i \u02c8st\u0254\u02d0r\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+storage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Next-generation solid-state batteries provide significantly safer high-capacity energy storage.",
      exampleVi: "Pin th\u1ec3 r\u1eafn th\u1ebf h\u1ec7 m\u1edbi cung c\u1ea5p kh\u1ea3 n\u0103ng l\u01b0u tr\u1eef n\u0103ng l\u01b0\u1ee3ng dung l\u01b0\u1ee3ng cao an to\u00e0n h\u01a1n \u0111\u00e1ng k\u1ec3.",
      collocations: ["efficient energy storage", "energy storage capacity"]
    }
    ,
    {
      id: "mega-unit-5-mass-manufacture",
      word: "mass manufacture",
      partOfSpeech: "v.phr",
      meaningVi: "s\u1ea3n xu\u1ea5t h\u00e0ng lo\u1ea1t quy m\u00f4 c\u00f4ng nghi\u1ec7p",
      ipa: "/m\u00e6s \u02ccm\u00e6nju\u02c8f\u00e6kt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mass+manufacture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Robotic assembly lines allow corporations to mass manufacture complex smartphones in seconds.",
      exampleVi: "D\u00e2y chuy\u1ec1n l\u1eafp r\u00e1p b\u1eb1ng robot cho ph\u00e9p c\u00e1c t\u1eadp \u0111o\u00e0n s\u1ea3n xu\u1ea5t h\u00e0ng lo\u1ea1t \u0111i\u1ec7n tho\u1ea1i th\u00f4ng minh ph\u1ee9c t\u1ea1p ch\u1ec9 trong v\u00e0i gi\u00e2y.",
      collocations: ["mass manufacture components", "ready to mass manufacture"]
    }
    ,
    {
      id: "mega-unit-5-user-interface",
      word: "user interface",
      partOfSpeech: "n.phr",
      meaningVi: "giao di\u1ec7n ng\u01b0\u1eddi d\u00f9ng \u0111\u1ed3 h\u1ecda",
      ipa: "/\u02c8ju\u02d0z\u0259r \u02c8\u026ant\u0259fe\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=user+interface&type=2",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An intuitive user interface reduces the learning curve for novice computer operators.",
      exampleVi: "Giao di\u1ec7n ng\u01b0\u1eddi d\u00f9ng tr\u1ef1c quan gi\u00fap gi\u1ea3m thi\u1ec3u th\u1eddi gian l\u00e0m quen cho nh\u1eefng ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u d\u00f9ng m\u00e1y t\u00ednh.",
      collocations: ["intuitive user interface", "clean user interface"]
    }
    ,
    {
      id: "mega-unit-5-virtual-assistant",
      word: "virtual assistant",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ee3 l\u00fd \u1ea3o \u0111i\u1ec1u khi\u1ec3n b\u1eb1ng gi\u1ecdng n\u00f3i",
      ipa: "/\u02c8v\u025c\u02d0t\u0283u\u0259l \u0259\u02c8s\u026ast\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+assistant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voice-activated virtual assistants can schedule calendar events and dim living room lights.",
      exampleVi: "C\u00e1c tr\u1ee3 l\u00fd \u1ea3o k\u00edch ho\u1ea1t b\u1eb1ng gi\u1ecdng n\u00f3i c\u00f3 th\u1ec3 s\u1eafp x\u1ebfp l\u1ecbch h\u1ecdp v\u00e0 \u0111i\u1ec1u ch\u1ec9nh \u00e1nh s\u00e1ng ph\u00f2ng kh\u00e1ch.",
      collocations: ["rely on virtual assistants", "AI virtual assistant"]
    }
    ,
    {
      id: "mega-unit-5-fiber-optics",
      word: "fiber optics",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1p quang truy\u1ec1n d\u1eef li\u1ec7u t\u1ed1c \u0111\u1ed9 cao",
      ipa: "/\u02ccfa\u026ab\u0259r \u02c8\u0252pt\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fiber+optics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Transoceanic fiber optics cables transmit petabytes of international internet traffic.",
      exampleVi: "C\u00e1p quang xuy\u00ean \u0111\u1ea1i d\u01b0\u01a1ng truy\u1ec1n t\u1ea3i h\u00e0ng petabyte l\u01b0u l\u01b0\u1ee3ng internet qu\u1ed1c t\u1ebf m\u1ed7i ng\u00e0y.",
      collocations: ["high-speed fiber optics", "fiber optics infrastructure"]
    }
    ,
    {
      id: "mega-unit-5-reverse-engineering",
      word: "reverse engineering",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 thu\u1eadt gi\u1ea3i m\u00e3 c\u1ea5u tr\u00fac ng\u01b0\u1ee3c",
      ipa: "/r\u026a\u02c8v\u025c\u02d0s \u02ccend\u0292\u026a\u02c8n\u026a\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reverse+engineering&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Engineers applied reverse engineering to deconstruct the competitor's microchip design.",
      exampleVi: "C\u00e1c k\u1ef9 s\u01b0 \u0111\u00e3 \u00e1p d\u1ee5ng k\u1ef9 thu\u1eadt d\u1ecbch ng\u01b0\u1ee3c \u0111\u1ec3 ph\u00e2n t\u00edch thi\u1ebft k\u1ebf vi m\u1ea1ch c\u1ee7a \u0111\u1ed1i th\u1ee7 c\u1ea1nh tranh.",
      collocations: ["perform reverse engineering", "subject to reverse engineering"]
    }
    ,
    {
      id: "mega-unit-5-bionic-limb",
      word: "bionic limb",
      partOfSpeech: "n.phr",
      meaningVi: "chi nh\u00e2n t\u1ea1o \u0111i\u1ec7n sinh h\u1ecdc th\u00f4ng minh",
      ipa: "/ba\u026a\u02c8\u0252n\u026ak l\u026am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bionic+limb&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern bionic limbs respond to neurological electrical signals from remaining muscle fibers.",
      exampleVi: "C\u00e1c chi sinh h\u1ecdc th\u00f4ng minh hi\u1ec7n \u0111\u1ea1i ph\u1ea3n h\u1ed3i tr\u1ef1c ti\u1ebfp c\u00e1c t\u00edn hi\u1ec7u \u0111i\u1ec7n th\u1ea7n kinh t\u1eeb c\u00e1c b\u00f3 c\u01a1 c\u00f2n l\u1ea1i.",
      collocations: ["fitted with a bionic limb", "advanced bionic limbs"]
    }
    ,
    {
      id: "mega-unit-5-speech-recognition",
      word: "speech recognition",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 nh\u1eadn d\u1ea1ng gi\u1ecdng n\u00f3i",
      ipa: "/spi\u02d0t\u0283 \u02ccrek\u0259\u0261\u02c8n\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=speech+recognition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Speech recognition has reached human-level accuracy in multiple regional dialects.",
      exampleVi: "Nh\u1eadn d\u1ea1ng gi\u1ecdng n\u00f3i \u0111\u00e3 \u0111\u1ea1t \u0111\u1ebfn \u0111\u1ed9 ch\u00ednh x\u00e1c t\u01b0\u01a1ng \u0111\u01b0\u01a1ng con ng\u01b0\u1eddi \u1edf nhi\u1ec1u ph\u01b0\u01a1ng ng\u1eef v\u00f9ng mi\u1ec1n.",
      collocations: ["accurate speech recognition", "speech recognition engine"]
    }
    ,
    {
      id: "mega-unit-5-data-encryption",
      word: "data encryption",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e3 h\u00f3a d\u1eef li\u1ec7u b\u1ea3o m\u1eadt",
      ipa: "/\u02c8de\u026at\u0259 \u026an\u02c8kr\u026ap\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=data+encryption&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "End-to-end data encryption shields user chat messages from unauthorized eavesdropping.",
      exampleVi: "M\u00e3 h\u00f3a d\u1eef li\u1ec7u \u0111\u1ea7u cu\u1ed1i b\u1ea3o v\u1ec7 tin nh\u1eafn tr\u00f2 chuy\u1ec7n c\u1ee7a ng\u01b0\u1eddi d\u00f9ng kh\u1ecfi h\u00e0nh vi nghe l\u00e9n tr\u00e1i ph\u00e9p.",
      collocations: ["strong data encryption", "implement data encryption"]
    }
    ,
    {
      id: "mega-unit-5-wireless-charging",
      word: "wireless charging",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ea1c pin kh\u00f4ng d\u00e2y t\u1eeb tr\u01b0\u1eddng",
      ipa: "/\u02ccwa\u026a\u0259l\u0259s \u02c8t\u0283\u0251\u02d0d\u0292\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wireless+charging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wireless charging pads eliminate clutter by inductive electromagnetic power transfer.",
      exampleVi: "\u0110\u1ebf s\u1ea1c kh\u00f4ng d\u00e2y lo\u1ea1i b\u1ecf s\u1ef1 r\u01b0\u1eddm r\u00e0 c\u1ee7a d\u00e2y c\u00e1p nh\u1edd kh\u1ea3 n\u0103ng truy\u1ec1n t\u1ea3i \u0111i\u1ec7n t\u1eeb tr\u01b0\u1eddng c\u1ea3m \u1ee9ng.",
      collocations: ["fast wireless charging", "support wireless charging"]
    }
    ,
    {
      id: "mega-unit-5-touchscreen-display",
      word: "touchscreen display",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e0n h\u00ecnh hi\u1ec3n th\u1ecb c\u1ea3m \u1ee9ng",
      ipa: "/\u02c8t\u028ct\u0283skri\u02d0n d\u026a\u02c8sple\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=touchscreen+display&type=2",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Interactive touchscreen displays simplify information lookup in transit stations.",
      exampleVi: "M\u00e0n h\u00ecnh hi\u1ec3n th\u1ecb c\u1ea3m \u1ee9ng t\u01b0\u01a1ng t\u00e1c \u0111\u01a1n gi\u1ea3n h\u00f3a vi\u1ec7c tra c\u1ee9u th\u00f4ng tin t\u1ea1i c\u00e1c nh\u00e0 ga trung chuy\u1ec3n.",
      collocations: ["responsive touchscreen display", "multi-touch display"]
    }
    ,
    {
      id: "mega-unit-5-unmanned-aerial-vehicle",
      word: "unmanned aerial vehicle",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ti\u1ec7n bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i drone",
      ipa: "/\u02cc\u028cn\u02c8m\u00e6nd \u02c8e\u0259ri\u0259l \u02c8vi\u02d0\u0259kl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=unmanned+aerial+vehicle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unmanned aerial vehicles aid search and rescue crews in inaccessible mountain canyons.",
      exampleVi: "Ph\u01b0\u01a1ng ti\u1ec7n bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i h\u1ed7 tr\u1ee3 c\u00e1c \u0111\u1ed9i t\u00ecm ki\u1ebfm c\u1ee9u n\u1ea1n t\u1ea1i nh\u1eefng h\u1ebbm n\u00fai hi\u1ec3m tr\u1edf kh\u00f3 ti\u1ebfp c\u1eadn.",
      collocations: ["deploy unmanned aerial vehicles", "remote-controlled vehicle"]
    }
    ,
    {
      id: "mega-unit-5-high-definition-camera",
      word: "high-definition camera",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e1y \u1ea3nh quay phim \u0111\u1ed9 ph\u00e2n gi\u1ea3i cao",
      ipa: "/\u02ccha\u026a def\u026a\u02c8n\u026a\u0283n \u02c8k\u00e6mr\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=high-definition+camera&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Surgical robots carry high-definition cameras giving surgeons stereoscopic views.",
      exampleVi: "Robot ph\u1eabu thu\u1eadt mang theo camera \u0111\u1ed9 n\u00e9t cao mang l\u1ea1i cho ph\u1eabu thu\u1eadt vi\u00ean t\u1ea7m nh\u00ecn l\u1eadp th\u1ec3 s\u1eafc n\u00e9t.",
      collocations: ["equipped with high-definition camera", "ultra high-definition"]
    }
    ,
    {
      id: "mega-unit-5-cloud-storage",
      word: "cloud storage",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0u tr\u1eef \u0111\u00e1m m\u00e2y tr\u1ef1c tuy\u1ebfn",
      ipa: "/kla\u028ad \u02c8st\u0254\u02d0r\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cloud+storage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Backing up data to encrypted cloud storage safeguards critical files from hardware failure.",
      exampleVi: "Sao l\u01b0u d\u1eef li\u1ec7u l\u00ean l\u01b0u tr\u1eef \u0111\u00e1m m\u00e2y m\u00e3 h\u00f3a gi\u00fap b\u1ea3o v\u1ec7 c\u00e1c t\u00e0i li\u1ec7u quan tr\u1ecdng kh\u1ecfi h\u01b0 h\u1ecfng ph\u1ea7n c\u1ee9ng.",
      collocations: ["secure cloud storage", "sync with cloud storage"]
    }
    ,
    {
      id: "mega-unit-5-biometric-authentication",
      word: "biometric authentication",
      partOfSpeech: "n.phr",
      meaningVi: "x\u00e1c th\u1ef1c sinh tr\u1eafc h\u1ecdc v\u00e2n tay khu\u00f4n m\u1eb7t",
      ipa: "/\u02ccba\u026a\u0259\u028a\u02c8metr\u026ak \u0254\u02d0\u02cc\u03b8ent\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biometric+authentication&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Banking apps integrate biometric authentication to prevent account takeovers.",
      exampleVi: "C\u00e1c \u1ee9ng d\u1ee5ng ng\u00e2n h\u00e0ng t\u00edch h\u1ee3p x\u00e1c th\u1ef1c sinh tr\u1eafc h\u1ecdc \u0111\u1ec3 ng\u0103n ch\u1eb7n h\u00e0nh vi chi\u1ebfm \u0111o\u1ea1t t\u00e0i kho\u1ea3n.",
      collocations: ["implement biometric authentication", "fingerprint authentication"]
    }
    ,
    {
      id: "mega-unit-5-augmented-reality-headset",
      word: "augmented reality headset",
      partOfSpeech: "n.phr",
      meaningVi: "k\u00ednh th\u1ef1c t\u1ebf \u1ea3o t\u0103ng c\u01b0\u1eddng",
      ipa: "/\u0254\u02d0\u0261\u02ccment\u026ad ri\u02c8\u00e6l\u0259ti \u02c8hedset/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=augmented+reality+headset&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Automotive mechanics wear augmented reality headsets showing step-by-step engine diagrams.",
      exampleVi: "Th\u1ee3 s\u1eeda ch\u1eefa \u00f4 t\u00f4 \u0111eo k\u00ednh th\u1ef1c t\u1ebf t\u0103ng c\u01b0\u1eddng hi\u1ec3n th\u1ecb t\u1eebng b\u01b0\u1edbc s\u01a1 \u0111\u1ed3 \u0111\u1ed9ng c\u01a1 tr\u01b0\u1edbc m\u1eaft.",
      collocations: ["wear an augmented reality headset", "interactive headset"]
    }
    ,
    {
      id: "mega-unit-5-digital-twin",
      word: "digital twin",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh b\u1ea3n sao s\u1ed1 m\u00f4 ph\u1ecfng th\u1ef1c th\u1ec3",
      ipa: "/\u02c8d\u026ad\u0292\u026atl tw\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+twin&type=2",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Civil engineers construct a digital twin of the suspension bridge to simulate hurricane stress.",
      exampleVi: "C\u00e1c k\u1ef9 s\u01b0 x\u00e2y d\u1ef1ng m\u1ed9t b\u1ea3n sao s\u1ed1 c\u1ee7a c\u00e2y c\u1ea7u treo \u0111\u1ec3 m\u00f4 ph\u1ecfng t\u1ea3i tr\u1ecdng ch\u1ecbu \u0111\u1ef1ng trong b\u00e3o l\u1edbn.",
      collocations: ["create a digital twin", "digital twin simulation"]
    }
    ,
    {
      id: "mega-unit-5-rapid-prototyping",
      word: "rapid prototyping",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea1o m\u1eabu th\u1eed nghi\u1ec7m nhanh",
      ipa: "/\u02ccr\u00e6p\u026ad \u02c8pr\u0259\u028at\u0259ta\u026ap\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rapid+prototyping&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      exampleEn: "3D printers accelerate product development cycles via rapid prototyping iterations.",
      exampleVi: "M\u00e1y in 3D \u0111\u1ea9y nhanh chu k\u1ef3 ph\u00e1t tri\u1ec3n s\u1ea3n ph\u1ea9m th\u00f4ng qua c\u00e1c v\u00f2ng l\u1eb7p ch\u1ebf t\u1ea1o m\u1eabu th\u1eed nghi\u1ec7m nhanh.",
      collocations: ["facilitate rapid prototyping", "rapid prototyping technique"]
    }
    ,
    {
      id: "mega-unit-5-clean-technology",
      word: "clean technology",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 s\u1ea1ch th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng",
      ipa: "/kli\u02d0n tek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clean+technology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Government subsidies encourage startups to invest heavily in clean technology patents.",
      exampleVi: "Tr\u1ee3 c\u1ea5p ch\u00ednh ph\u1ee7 khuy\u1ebfn kh\u00edch c\u00e1c c\u00f4ng ty kh\u1edfi nghi\u1ec7p \u0111\u1ea7u t\u01b0 m\u1ea1nh m\u1ebd v\u00e0o c\u00e1c b\u1eb1ng s\u00e1ng ch\u1ebf c\u00f4ng ngh\u1ec7 s\u1ea1ch.",
      collocations: ["pioneer clean technology", "clean technology sector"]
    }
  ],
  "unit-6-gender-equality": [
    {
      id: "v10-u6-gender-equality",
      word: "gender equality",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00ecnh \u0111\u1eb3ng gi\u1edbi t\u00ednh gi\u1eefa nam v\u00e0 n\u1eef",
      ipa: "/\u02c8d\u0292end\u0259 i\u02c8kw\u0252l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gender+equality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Achieving gender equality is essential for building a fair and prosperous society.",
      exampleVi: "\u0110\u1ea1t \u0111\u01b0\u1ee3c b\u00ecnh \u0111\u1eb3ng gi\u1edbi l\u00e0 \u0111i\u1ec1u thi\u1ebft y\u1ebfu \u0111\u1ec3 x\u00e2y d\u1ef1ng m\u1ed9t x\u00e3 h\u1ed9i c\u00f4ng b\u1eb1ng v\u00e0 ph\u1ed3n vinh.",
      collocations: ["promote gender equality", "fight for gender equality"]
    },
    {
      id: "v10-u6-equal-opportunities",
      word: "equal opportunities",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng cho m\u1ecdi ng\u01b0\u1eddi",
      ipa: "/\u02c8i\u02d0kw\u0259l \u02cc\u0252p\u0259\u02c8tju\u02d0n\u0259tiz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+opportunities&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern legislation guarantees equal opportunities for men and women in the workplace.",
      exampleVi: "Lu\u1eadt ph\u00e1p hi\u1ec7n \u0111\u1ea1i \u0111\u1ea3m b\u1ea3o c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng cho c\u1ea3 nam v\u00e0 n\u1eef t\u1ea1i n\u01a1i l\u00e0m vi\u1ec7c.",
      collocations: ["provide equal opportunities", "equal opportunities policy"]
    },
    {
      id: "v10-u6-wage-gap",
      word: "wage gap",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3ng c\u00e1ch ch\u00eanh l\u1ec7ch ti\u1ec1n l\u01b0\u01a1ng theo gi\u1edbi",
      ipa: "/\u02c8we\u026ad\u0292 \u0261\u00e6p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wage+gap&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Government policies aim to eliminate the gender wage gap across all corporate sectors.",
      exampleVi: "Ch\u00ednh s\u00e1ch c\u1ee7a ch\u00ednh ph\u1ee7 nh\u1eb1m m\u1ee5c \u0111\u00edch x\u00f3a b\u1ecf kho\u1ea3ng c\u00e1ch ti\u1ec1n l\u01b0\u01a1ng theo gi\u1edbi \u1edf m\u1ecdi l\u0129nh v\u1ef1c.",
      collocations: ["narrow the wage gap", "gender wage gap"]
    },
    {
      id: "v10-u6-discrimination",
      word: "discrimination",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed b\u1ea5t c\u00f4ng",
      ipa: "/d\u026a\u02ccskr\u026am\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=discrimination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Workplace discrimination based on gender is strictly prohibited by labor laws.",
      exampleVi: "S\u1ef1 ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed t\u1ea1i n\u01a1i l\u00e0m vi\u1ec7c d\u1ef1a tr\u00ean gi\u1edbi t\u00ednh b\u1ecb ph\u00e1p lu\u1eadt lao \u0111\u1ed9ng nghi\u00eam c\u1ea5m.",
      collocations: ["gender discrimination", "prohibit discrimination"]
    },
    {
      id: "v10-u6-empowerment",
      word: "empowerment",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 trao quy\u1ec1n, n\u00e2ng cao v\u1ecb th\u1ebf",
      ipa: "/\u026am\u02c8pa\u028a\u0259m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empowerment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Female economic empowerment spurs poverty reduction and boosts child welfare.",
      exampleVi: "Vi\u1ec7c n\u00e2ng cao quy\u1ec1n n\u0103ng kinh t\u1ebf c\u1ee7a ph\u1ee5 n\u1eef th\u00fac \u0111\u1ea9y gi\u1ea3m ngh\u00e8o v\u00e0 c\u1ea3i thi\u1ec7n \u0111\u1eddi s\u1ed1ng tr\u1ebb em.",
      collocations: ["female empowerment", "economic empowerment"]
    },
    {
      id: "v10-u6-glass-ceiling",
      word: "glass ceiling",
      partOfSpeech: "n.phr",
      meaningVi: "r\u00e0o c\u1ea3n v\u00f4 h\u00ecnh c\u1ea3n tr\u1edf ph\u1ee5 n\u1eef th\u0103ng ti\u1ebfn",
      ipa: "/\u02cc\u0261l\u0251\u02d0s \u02c8si\u02d0l\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=glass+ceiling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her appointment as CEO broke the invisible glass ceiling in the banking conglomerate.",
      exampleVi: "Vi\u1ec7c c\u00f4 \u0111\u01b0\u1ee3c b\u1ed5 nhi\u1ec7m l\u00e0m CEO \u0111\u00e3 ph\u00e1 v\u1ee1 r\u00e0o c\u1ea3n v\u00f4 h\u00ecnh trong t\u1eadp \u0111o\u00e0n ng\u00e2n h\u00e0ng.",
      collocations: ["shatter the glass ceiling", "break through the glass ceiling"]
    },
    {
      id: "v10-u6-domestic-violence",
      word: "domestic violence",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea1o l\u1ef1c gia \u0111\u00ecnh",
      ipa: "/d\u0259\u02ccmest\u026ak \u02c8va\u026a\u0259l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=domestic+violence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community hotlines provide shelter and legal protection for victims of domestic violence.",
      exampleVi: "\u0110\u01b0\u1eddng d\u00e2y n\u00f3ng c\u1ed9ng \u0111\u1ed3ng cung c\u1ea5p n\u01a1i tr\u00fa \u1ea9n v\u00e0 b\u1ea3o v\u1ec7 ph\u00e1p l\u00fd cho n\u1ea1n nh\u00e2n b\u1ea1o l\u1ef1c gia \u0111\u00ecnh.",
      collocations: ["eradicate domestic violence", "victims of domestic violence"]
    },
    {
      id: "v10-u6-stereotype",
      word: "stereotype",
      partOfSpeech: "n / v",
      meaningVi: "\u0111\u1ecbnh ki\u1ebfn khu\u00f4n m\u1eabu \u00e1p \u0111\u1eb7t",
      ipa: "/\u02c8steri\u0259ta\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stereotype&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We must challenge traditional gender stereotypes that assign cooking only to girls.",
      exampleVi: "Ch\u00fang ta ph\u1ea3i th\u00e1ch th\u1ee9c nh\u1eefng \u0111\u1ecbnh ki\u1ebfn khu\u00f4n m\u1eabu cho r\u1eb1ng vi\u1ec7c b\u1ebfp n\u00fac ch\u1ec9 d\u00e0nh cho con g\u00e1i.",
      collocations: ["gender stereotypes", "shatter stereotypes"]
    },
    {
      id: "v10-u6-maternity-leave",
      word: "maternity leave",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef3 ngh\u1ec9 thai s\u1ea3n cho m\u1eb9 sinh con",
      ipa: "/m\u0259\u02c8t\u025c\u02d0n\u0259ti li\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=maternity+leave&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese law grants female employees six full months of paid maternity leave.",
      exampleVi: "Lu\u1eadt ph\u00e1p Vi\u1ec7t Nam trao cho lao \u0111\u1ed9ng n\u1eef s\u00e1u th\u00e1ng ngh\u1ec9 thai s\u1ea3n h\u01b0\u1edfng nguy\u00ean l\u01b0\u01a1ng.",
      collocations: ["paid maternity leave", "take maternity leave"]
    },
    {
      id: "v10-u6-paternity-leave",
      word: "paternity leave",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef3 ngh\u1ec9 ch\u0103m v\u1ee3 sinh con c\u1ee7a ng\u01b0\u1eddi b\u1ed1",
      ipa: "/p\u0259\u02c8t\u025c\u02d0n\u0259ti li\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=paternity+leave&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Offering paternity leave allows fathers to bond with their newborns from day one.",
      exampleVi: "Ch\u00ednh s\u00e1ch ngh\u1ec9 ch\u0103m con cho b\u1ed1 gi\u00fap ng\u01b0\u1eddi cha g\u1eafn k\u1ebft v\u1edbi con nh\u1ecf ngay t\u1eeb nh\u1eefng ng\u00e0y \u0111\u1ea7u.",
      collocations: ["grant paternity leave", "take paternity leave"]
    },
    {
      id: "v10-u6-career-advancement",
      word: "career advancement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u0103ng ti\u1ebfn trong s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259r \u0259d\u02c8v\u0251\u02d0nsm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+advancement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mentorship programs provide women with clear pathways for career advancement.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh c\u1ed1 v\u1ea5n mang l\u1ea1i cho ph\u1ee5 n\u1eef con \u0111\u01b0\u1eddng r\u00f5 r\u00e0ng \u0111\u1ec3 th\u0103ng ti\u1ebfn trong ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["opportunities for career advancement", "stifle career advancement"]
    },
    {
      id: "v10-u6-female-representation",
      word: "female representation",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ef7 l\u1ec7 \u0111\u1ea1i di\u1ec7n c\u1ee7a ph\u1ee5 n\u1eef",
      ipa: "/\u02c8fi\u02d0me\u026al \u02ccrepr\u026azen\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=female+representation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Increasing female representation in parliament leads to better maternal healthcare laws.",
      exampleVi: "T\u0103ng c\u01b0\u1eddng t\u1ef7 l\u1ec7 n\u1eef \u0111\u1ea1i bi\u1ec3u trong qu\u1ed1c h\u1ed9i d\u1eabn t\u1edbi c\u00e1c lu\u1eadt ch\u0103m s\u00f3c s\u1ee9c kh\u1ecfe thai s\u1ea3n t\u1ed1t h\u01a1n.",
      collocations: ["equal female representation", "female representation in STEM"]
    },
    {
      id: "v10-u6-equity",
      word: "equity",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 c\u00f4ng b\u1eb1ng th\u1ef1c ch\u1ea5t theo nhu c\u1ea7u",
      ipa: "/\u02c8ekw\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "While equality gives everyone the same shoe, equity gives everyone a shoe that fits.",
      exampleVi: "N\u1ebfu b\u00ecnh \u0111\u1eb3ng l\u00e0 ph\u00e1t cho m\u1ecdi ng\u01b0\u1eddi c\u00f9ng m\u1ed9t \u0111\u00f4i gi\u00e0y, th\u00ec c\u00f4ng b\u1eb1ng l\u00e0 ph\u00e1t cho m\u1ed7i ng\u01b0\u1eddi \u0111\u00f4i gi\u00e0y v\u1eeba v\u1eb7n.",
      collocations: ["gender equity", "social equity"]
    },
    {
      id: "v10-u6-workforce",
      word: "workforce",
      partOfSpeech: "n",
      meaningVi: "l\u1ef1c l\u01b0\u1ee3ng lao \u0111\u1ed9ng x\u00e3 h\u1ed9i",
      ipa: "/\u02c8w\u025c\u02d0kf\u0254\u02d0s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=workforce&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Women make up almost half of the national manufacturing and technology workforce.",
      exampleVi: "Ph\u1ee5 n\u1eef chi\u1ebfm g\u1ea7n m\u1ed9t n\u1eeda l\u1ef1c l\u01b0\u1ee3ng lao \u0111\u1ed9ng c\u00f4ng ngh\u1ec7 v\u00e0 s\u1ea3n xu\u1ea5t c\u1ee7a c\u1ea3 n\u01b0\u1edbc.",
      collocations: ["female workforce", "enter the workforce"]
    },
    {
      id: "v10-u6-traditional-roles",
      word: "traditional roles",
      partOfSpeech: "n.phr",
      meaningVi: "vai tr\u00f2 truy\u1ec1n th\u1ed1ng quy \u01b0\u1edbc c\u0169",
      ipa: "/tr\u0259\u02c8d\u026a\u0283\u0259nl r\u0259\u028alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traditional+roles&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern families are breaking away from rigid traditional roles to share duties.",
      exampleVi: "C\u00e1c gia \u0111\u00ecnh hi\u1ec7n \u0111\u1ea1i \u0111ang tho\u00e1t kh\u1ecfi nh\u1eefng vai tr\u00f2 truy\u1ec1n th\u1ed1ng c\u1ee9ng nh\u1eafc \u0111\u1ec3 c\u00f9ng g\u00e1nh v\u00e1c vi\u1ec7c nh\u00e0.",
      collocations: ["confined to traditional roles", "redefine traditional roles"]
    },
    {
      id: "v10-u6-prejudice",
      word: "prejudice",
      partOfSpeech: "n",
      meaningVi: "th\u00e0nh ki\u1ebfn, suy ngh\u0129 sai l\u1ec7ch",
      ipa: "/\u02c8pred\u0292\u0259d\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prejudice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deep-seated social prejudice against female engineers is gradually being dismantled.",
      exampleVi: "Th\u00e0nh ki\u1ebfn x\u00e3 h\u1ed9i th\u00e2m c\u0103n c\u1ed1 \u0111\u1ebf \u0111\u1ed1i v\u1edbi n\u1eef k\u1ef9 s\u01b0 \u0111ang d\u1ea7n d\u1ea7n b\u1ecb x\u00f3a b\u1ecf.",
      collocations: ["overcome prejudice", "free of prejudice"]
    },
    {
      id: "v10-u6-leadership-skills",
      word: "leadership skills",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng l\u00e3nh \u0111\u1ea1o \u0111i\u1ec1u h\u00e0nh",
      ipa: "/\u02c8li\u02d0d\u0259\u0283\u026ap sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=leadership+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Both young women and men exhibit remarkable leadership skills in university clubs.",
      exampleVi: "C\u1ea3 n\u1eef sinh v\u00e0 nam sinh \u0111\u1ec1u th\u1ec3 hi\u1ec7n k\u1ef9 n\u0103ng l\u00e3nh \u0111\u1ea1o xu\u1ea5t s\u1eafc trong c\u00e1c c\u00e2u l\u1ea1c b\u1ed9 \u0111\u1ea1i h\u1ecdc.",
      collocations: ["develop leadership skills", "demonstrate leadership skills"]
    },
    {
      id: "v10-u6-stem-fields",
      word: "STEM fields",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c ng\u00e0nh khoa h\u1ecdc c\u00f4ng ngh\u1ec7 (STEM)",
      ipa: "/stem fi\u02d0ldz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=STEM+fields&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Government scholarships encourage more high school girls to pursue careers in STEM fields.",
      exampleVi: "H\u1ecdc b\u1ed5ng nh\u00e0 n\u01b0\u1edbc khuy\u1ebfn kh\u00edch th\u00eam nhi\u1ec1u n\u1eef sinh ph\u1ed5 th\u00f4ng theo \u0111u\u1ed5i c\u00e1c ng\u00e0nh khoa h\u1ecdc c\u00f4ng ngh\u1ec7.",
      collocations: ["women in STEM fields", "careers in STEM fields"]
    },
    {
      id: "v10-u6-equal-pay",
      word: "equal pay",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea3 l\u01b0\u01a1ng b\u00ecnh \u0111\u1eb3ng cho c\u00f9ng c\u00f4ng vi\u1ec7c",
      ipa: "/\u02c8i\u02d0kw\u0259l pe\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+pay&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The sports federation finally instituted equal pay for male and female soccer athletes.",
      exampleVi: "Li\u00ean \u0111o\u00e0n th\u1ec3 thao cu\u1ed1i c\u00f9ng \u0111\u00e3 thi\u1ebft l\u1eadp m\u1ee9c th\u00f9 lao b\u00ecnh \u0111\u1eb3ng cho c\u1ea7u th\u1ee7 b\u00f3ng \u0111\u00e1 nam v\u00e0 n\u1eef.",
      collocations: ["demand equal pay", "equal pay for equal work"]
    },
    {
      id: "v10-u6-breadwinning-role",
      word: "breadwinning role",
      partOfSpeech: "n.phr",
      meaningVi: "vai tr\u00f2 l\u00e0m tr\u1ee5 c\u1ed9t kinh t\u1ebf",
      ipa: "/\u02c8bredw\u026an\u026a\u014b r\u0259\u028al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breadwinning+role&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many wives now comfortably assume the breadwinning role in modern households.",
      exampleVi: "Nhi\u1ec1u ng\u01b0\u1eddi v\u1ee3 hi\u1ec7n nay \u0111\u1ea3m nh\u1eadn vai tr\u00f2 tr\u1ee5 c\u1ed9t kinh t\u1ebf m\u1ed9t c\u00e1ch tho\u1ea3i m\u00e1i trong gia \u0111\u00ecnh hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["take on the breadwinning role", "shared breadwinning role"]
    },
    {
      id: "v10-u6-decision-making",
      word: "decision-making",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh h\u1ec7 tr\u1ecdng",
      ipa: "/d\u026a\u02c8s\u026a\u0292n \u02ccme\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=decision-making&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Both spouses should have an equal voice in major financial decision-making.",
      exampleVi: "C\u1ea3 hai v\u1ee3 ch\u1ed3ng \u0111\u1ec1u n\u00ean c\u00f3 ti\u1ebfng n\u00f3i b\u00ecnh \u0111\u1eb3ng trong vi\u1ec7c \u0111\u01b0a ra c\u00e1c quy\u1ebft \u0111\u1ecbnh t\u00e0i ch\u00ednh quan tr\u1ecdng.",
      collocations: ["participate in decision-making", "decision-making power"]
    },
    {
      id: "v10-u6-human-rights",
      word: "human rights",
      partOfSpeech: "n.phr",
      meaningVi: "quy\u1ec1n con ng\u01b0\u1eddi c\u0103n b\u1ea3n",
      ipa: "/\u02c8hju\u02d0m\u0259n ra\u026ats/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=human+rights&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Gender equality is fundamentally an issue of universal human rights.",
      exampleVi: "B\u00ecnh \u0111\u1eb3ng gi\u1edbi v\u1ec1 b\u1ea3n ch\u1ea5t l\u00e0 v\u1ea5n \u0111\u1ec1 thu\u1ed9c quy\u1ec1n con ng\u01b0\u1eddi ph\u1ed5 qu\u00e1t.",
      collocations: ["protect human rights", "fundamental human rights"]
    },
    {
      id: "v10-u6-bias",
      word: "bias",
      partOfSpeech: "n",
      meaningVi: "thi\u00ean ki\u1ebfn, s\u1ef1 thi\u00ean v\u1ecb ng\u1ea7m",
      ipa: "/\u02c8ba\u026a\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bias&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unconscious bias during interviews can unfairly disqualify talented female candidates.",
      exampleVi: "Thi\u00ean ki\u1ebfn v\u00f4 th\u1ee9c khi ph\u1ecfng v\u1ea5n c\u00f3 th\u1ec3 lo\u1ea1i b\u1ecf b\u1ea5t c\u00f4ng c\u00e1c \u1ee9ng vi\u00ean n\u1eef t\u00e0i n\u0103ng.",
      collocations: ["unconscious bias", "eliminate gender bias"]
    },
    {
      id: "v10-u6-emancipate",
      word: "emancipate",
      partOfSpeech: "v",
      meaningVi: "gi\u1ea3i ph\u00f3ng kh\u1ecfi xi\u1ec1ng x\u00edch \u0111\u1ecbnh ki\u1ebfn",
      ipa: "/\u026a\u02c8m\u00e6ns\u026ape\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emancipate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Education emancipates women from archaic social expectations and dependency.",
      exampleVi: "Gi\u00e1o d\u1ee5c gi\u1ea3i ph\u00f3ng ng\u01b0\u1eddi ph\u1ee5 n\u1eef kh\u1ecfi nh\u1eefng h\u1ee7 t\u1ee5c v\u00e0 s\u1ef1 ph\u1ee5 thu\u1ed9c l\u1ea1c h\u1eadu.",
      collocations: ["emancipate women", "fully emancipated"]
    },
    {
      id: "v10-u6-fairness",
      word: "fairness",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 c\u00f4ng b\u1eb1ng, ch\u00ednh tr\u1ef1c",
      ipa: "/\u02c8fe\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fairness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A truly fair society treats every citizen with dignity and fairness.",
      exampleVi: "M\u1ed9t x\u00e3 h\u1ed9i th\u1ef1c s\u1ef1 ti\u1ebfn b\u1ed9 \u0111\u1ed1i x\u1eed v\u1edbi m\u1ecdi c\u00f4ng d\u00e2n b\u1eb1ng s\u1ef1 t\u00f4n nghi\u00eam v\u00e0 c\u00f4ng b\u1eb1ng.",
      collocations: ["sense of fairness", "ensure absolute fairness"]
    },
    {
      id: "v10-u6-advocate",
      word: "advocate",
      partOfSpeech: "v / n",
      meaningVi: "ng\u01b0\u1eddi \u1ee7ng h\u1ed9, \u0111\u1ea5u tranh cho l\u1ebd ph\u1ea3i",
      ipa: "/\u02c8\u00e6dv\u0259ke\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=advocate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She is a passionate advocate for girls' education in underserved mountain districts.",
      exampleVi: "C\u00f4 \u1ea5y l\u00e0 ng\u01b0\u1eddi \u1ee7ng h\u1ed9 nhi\u1ec7t th\u00e0nh cho quy\u1ec1n h\u1ecdc h\u00e0nh c\u1ee7a c\u00e1c b\u00e9 g\u00e1i v\u00f9ng cao kh\u00f3 kh\u0103n.",
      collocations: ["advocate for women's rights", "staunch advocate"]
    },
    {
      id: "v10-u6-role-reversal",
      word: "role reversal",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ea3o ng\u01b0\u1ee3c vai tr\u00f2 x\u00e3 h\u1ed9i",
      ipa: "/r\u0259\u028al r\u026a\u02c8v\u025c\u02d0sl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=role+reversal&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stay-at-home dads represent a healthy role reversal in contemporary families.",
      exampleVi: "Nh\u1eefng \u00f4ng b\u1ed1 \u1edf nh\u00e0 ch\u0103m con \u0111\u1ea1i di\u1ec7n cho s\u1ef1 \u0111\u1ea3o ng\u01b0\u1ee3c vai tr\u00f2 t\u00edch c\u1ef1c trong gia \u0111\u00ecnh th\u1eddi nay.",
      collocations: ["experience role reversal", "comfort with role reversal"]
    },
    {
      id: "v10-u6-inclusive",
      word: "inclusive",
      partOfSpeech: "adj",
      meaningVi: "h\u00f2a nh\u1eadp, kh\u00f4ng ph\u00e2n bi\u1ec7t ai",
      ipa: "/\u026an\u02c8klu\u02d0s\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=inclusive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building an inclusive work culture allows diverse talents to thrive.",
      exampleVi: "X\u00e2y d\u1ef1ng v\u0103n h\u00f3a l\u00e0m vi\u1ec7c h\u00f2a nh\u1eadp cho ph\u00e9p m\u1ecdi t\u00e0i n\u0103ng \u0111a d\u1ea1ng c\u00f9ng ph\u00e1t tri\u1ec3n.",
      collocations: ["inclusive environment", "inclusive policy"]
    },
    {
      id: "v10-u6-patriarchy",
      word: "patriarchy",
      partOfSpeech: "n",
      meaningVi: "ch\u1ebf \u0111\u1ed9 ph\u1ee5 quy\u1ec1n ph\u1ee5 h\u1ec7 c\u0169",
      ipa: "/\u02c8pe\u026atri\u0251\u02d0ki/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=patriarchy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reforming antiquated laws helps dismantle the remaining traces of patriarchy.",
      exampleVi: "C\u1ea3i c\u00e1ch c\u00e1c \u0111\u1ea1o lu\u1eadt l\u1ed7i th\u1eddi gi\u00fap lo\u1ea1i b\u1ecf nh\u1eefng t\u00e0n d\u01b0 c\u1ee7a ch\u1ebf \u0111\u1ed9 ph\u1ee5 quy\u1ec1n.",
      collocations: ["challenge patriarchy", "overcome patriarchy"]
    },
    {
      id: "v10-u6-dignity",
      word: "dignity",
      partOfSpeech: "n",
      meaningVi: "ph\u1ea9m gi\u00e1, s\u1ef1 t\u1ef1 tr\u1ecdng",
      ipa: "/\u02c8d\u026a\u0261n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dignity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every worker deserves to be treated with respect and human dignity.",
      exampleVi: "M\u1ecdi ng\u01b0\u1eddi lao \u0111\u1ed9ng \u0111\u1ec1u x\u1ee9ng \u0111\u00e1ng \u0111\u01b0\u1ee3c \u0111\u1ed1i x\u1eed b\u1eb1ng s\u1ef1 t\u00f4n tr\u1ecdng v\u00e0 ph\u1ea9m gi\u00e1 con ng\u01b0\u1eddi.",
      collocations: ["treat with dignity", "preserve personal dignity"]
    },
    {
      id: "v10-u6-co-parenting",
      word: "co-parenting",
      partOfSpeech: "n",
      meaningVi: "c\u00f9ng nhau ch\u0103m s\u00f3c nu\u00f4i d\u1ea1y con",
      ipa: "/\u02cck\u0259\u028a \u02c8pe\u0259r\u0259nt\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=co-parenting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Effective co-parenting balances child-care duties evenly between mother and father.",
      exampleVi: "C\u00f9ng nu\u00f4i d\u1ea1y con hi\u1ec7u qu\u1ea3 chia \u0111\u1ec1u c\u00e1c c\u00f4ng vi\u1ec7c ch\u0103m s\u00f3c con gi\u1eefa b\u1ed1 v\u00e0 m\u1eb9.",
      collocations: ["practice co-parenting", "healthy co-parenting relationship"]
    },
    {
      id: "v10-u6-barrier",
      word: "barrier",
      partOfSpeech: "n",
      meaningVi: "r\u00e0o c\u1ea3n ng\u0103n b\u01b0\u1edbc ti\u1ebfn",
      ipa: "/\u02c8b\u00e6ri\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=barrier&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lack of affordable child care remains a major barrier for mothers returning to jobs.",
      exampleVi: "Thi\u1ebfu d\u1ecbch v\u1ee5 g\u1eedi tr\u1ebb gi\u00e1 r\u1ebb v\u1eabn l\u00e0 m\u1ed9t r\u00e0o c\u1ea3n l\u1edbn \u0111\u1ed1i v\u1edbi c\u00e1c b\u00e0 m\u1eb9 mu\u1ed1n \u0111i l\u00e0m l\u1ea1i.",
      collocations: ["remove barriers", "overcome social barriers"]
    },
    {
      id: "v10-u6-social-progress",
      word: "social progress",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ti\u1ebfn b\u1ed9 v\u0103n minh c\u1ee7a x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8pr\u0259\u028a\u0261res/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+progress&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The advancement of women is a primary indicator of genuine social progress.",
      exampleVi: "S\u1ef1 ti\u1ebfn b\u1ed9 c\u1ee7a ph\u1ee5 n\u1eef l\u00e0 th\u01b0\u1edbc \u0111o ch\u00ednh c\u1ee7a m\u1ed9t x\u00e3 h\u1ed9i v\u0103n minh ti\u1ebfn b\u1ed9 th\u1ef1c th\u1ee5.",
      collocations: ["catalyst for social progress", "drive social progress"]
    },
    {
      id: "v10-u6-parity",
      word: "parity",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ngang b\u1eb1ng, c\u00e2n b\u1eb1ng t\u1ec9 l\u1ec7",
      ipa: "/\u02c8p\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The company reached gender parity on its executive board this year.",
      exampleVi: "C\u00f4ng ty \u0111\u00e3 \u0111\u1ea1t \u0111\u01b0\u1ee3c s\u1ef1 c\u00e2n b\u1eb1ng b\u00ecnh \u0111\u1eb3ng gi\u1edbi trong ban \u0111i\u1ec1u h\u00e0nh v\u00e0o n\u0103m nay.",
      collocations: ["achieve gender parity", "strive for parity"]
    },
    {
      id: "v10-u6-equal-footing",
      word: "equal footing",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb th\u1ebf ngang h\u00e0ng, b\u00ecnh \u0111\u1eb3ng",
      ipa: "/\u02cci\u02d0kw\u0259l \u02c8f\u028at\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+footing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Comprehensive training puts junior female engineers on an equal footing with male peers.",
      exampleVi: "\u0110\u00e0o t\u1ea1o b\u00e0i b\u1ea3n \u0111\u01b0a c\u00e1c n\u1eef k\u1ef9 s\u01b0 tr\u1ebb v\u00e0o v\u1ecb th\u1ebf ngang h\u00e0ng v\u1edbi c\u00e1c \u0111\u1ed3ng nghi\u1ec7p nam.",
      collocations: ["stand on an equal footing", "compete on an equal footing"]
    }
    ,
    {
      id: "v10-extra-equal-standing",
      word: "equal standing",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb th\u1ebf b\u00ecnh \u0111\u1eb3ng ngang h\u00e0ng",
      ipa: "/\u02c8i\u02d0kw\u0259l \u02c8st\u00e6nd\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+standing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Men and women should stand on equal standing in both family and career.",
      exampleVi: "Nam v\u00e0 n\u1eef c\u1ea7n c\u00f3 v\u1ecb th\u1ebf ngang h\u00e0ng b\u00ecnh \u0111\u1eb3ng trong c\u1ea3 gia \u0111\u00ecnh l\u1eabn s\u1ef1 nghi\u1ec7p.",
      collocations: ["on equal standing", "achieve equal standing"]
    }
    ,
    {
      id: "v10-extra-equal-status",
      word: "equal status",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecba v\u1ecb x\u00e3 h\u1ed9i b\u00ecnh \u0111\u1eb3ng",
      ipa: "/\u02c8i\u02d0kw\u0259l \u02c8ste\u026at\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+status&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The law ensures equal status for both spouses in marriage and property rights.",
      exampleVi: "Ph\u00e1p lu\u1eadt \u0111\u1ea3m b\u1ea3o \u0111\u1ecba v\u1ecb b\u00ecnh \u0111\u1eb3ng cho v\u1ee3 v\u00e0 ch\u1ed3ng trong h\u00f4n nh\u00e2n v\u00e0 quy\u1ec1n t\u00e0i s\u1ea3n.",
      collocations: ["grant equal status", "equal legal status"]
    }
    ,
    {
      id: "v10-extra-shared-responsibility",
      word: "shared responsibility",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00e1ch nhi\u1ec7m c\u00f9ng g\u00e1nh v\u00e1c",
      ipa: "/\u0283e\u0259d r\u026a\u02ccsp\u0252ns\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shared+responsibility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Child upbringing is a shared responsibility between both father and mother.",
      exampleVi: "Nu\u00f4i d\u1ea1y con c\u00e1i l\u00e0 tr\u00e1ch nhi\u1ec7m chung c\u1ea7n g\u00e1nh v\u00e1c c\u1ee7a c\u1ea3 b\u1ed1 v\u00e0 m\u1eb9.",
      collocations: ["shared responsibility for", "spirit of shared responsibility"]
    }
    ,
    {
      id: "v10-extra-fair-treatment",
      word: "fair treatment",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ed1i x\u1eed c\u00f4ng b\u1eb1ng, v\u00f4 t\u01b0",
      ipa: "/fe\u0259 \u02c8tri\u02d0tm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fair+treatment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every employee deserves fair treatment regardless of their gender or background.",
      exampleVi: "M\u1ecdi ng\u01b0\u1eddi lao \u0111\u1ed9ng \u0111\u1ec1u x\u1ee9ng \u0111\u00e1ng \u0111\u01b0\u1ee3c \u0111\u1ed1i x\u1eed c\u00f4ng b\u1eb1ng kh\u00f4ng ph\u00e2n bi\u1ec7t gi\u1edbi t\u00ednh.",
      collocations: ["ensure fair treatment", "demand fair treatment"]
    }
    ,
    {
      id: "v10-extra-equal-rights",
      word: "equal rights",
      partOfSpeech: "n.phr",
      meaningVi: "quy\u1ec1n b\u00ecnh \u0111\u1eb3ng c\u1ee7a c\u00f4ng d\u00e2n",
      ipa: "/\u02c8i\u02d0kw\u0259l ra\u026ats/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+rights&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Generations of suffragettes fought courageously for women's equal rights.",
      exampleVi: "Nhi\u1ec1u th\u1ebf h\u1ec7 ph\u1ee5 n\u1eef \u0111\u00e3 \u0111\u1ea5u tranh qu\u1ea3 c\u1ea3m \u0111\u1ec3 gi\u00e0nh quy\u1ec1n b\u00ecnh \u0111\u1eb3ng cho ph\u00e1i n\u1eef.",
      collocations: ["fight for equal rights", "guarantee equal rights"]
    }
    ,
    {
      id: "v10-extra-empowered",
      word: "empowered",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u01b0\u1ee3c trao quy\u1ec1n t\u1ef1 ch\u1ee7 m\u1ea1nh m\u1ebd",
      ipa: "/\u026am\u02c8pa\u028a\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empowered&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educated women feel empowered to make independent career choices.",
      exampleVi: "Ph\u1ee5 n\u1eef c\u00f3 h\u1ecdc th\u1ee9c c\u1ea3m th\u1ea5y \u0111\u01b0\u1ee3c trao quy\u1ec1n \u0111\u1ec3 t\u1ef1 quy\u1ebft \u0111\u1ecbnh s\u1ef1 nghi\u1ec7p c\u1ee7a m\u00ecnh.",
      collocations: ["feel empowered", "empowered women"]
    }
    ,
    {
      id: "v10-extra-mutual-support",
      word: "mutual support",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u1ed7 tr\u1ee3 n\u00e2ng \u0111\u1ee1 l\u1eabn nhau",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l s\u0259\u02c8p\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+support&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mutual support between spouses is the key to thriving in modern society.",
      exampleVi: "S\u1ef1 n\u00e2ng \u0111\u1ee1 l\u1eabn nhau gi\u1eefa v\u1ee3 ch\u1ed3ng l\u00e0 ch\u00eca kh\u00f3a \u0111\u1ec3 ph\u00e1t tri\u1ec3n trong x\u00e3 h\u1ed9i hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["provide mutual support", "spirit of mutual support"]
    }
    ,
    {
      id: "v10-extra-fair-play",
      word: "fair play",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n c\u00f4ng b\u1eb1ng ch\u00ednh tr\u1ef1c",
      ipa: "/\u02ccfe\u0259 \u02c8ple\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fair+play&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Promoting fair play in hiring practices eliminates unconscious biases.",
      exampleVi: "Th\u00fac \u0111\u1ea9y s\u1ef1 c\u00f4ng b\u1eb1ng trong tuy\u1ec3n d\u1ee5ng gi\u00fap lo\u1ea1i b\u1ecf c\u00e1c thi\u00ean ki\u1ebfn ng\u1ea7m.",
      collocations: ["sense of fair play", "principle of fair play"]
    }
    ,
    {
      id: "v10-extra-equality-of-opportunity",
      word: "equality of opportunity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 b\u00ecnh \u0111\u1eb3ng v\u1ec1 c\u01a1 h\u1ed9i ph\u00e1t tri\u1ec3n",
      ipa: "/i\u02c8kw\u0252l\u0259ti \u0259v \u02cc\u0252p\u0259\u02c8tju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equality+of+opportunity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "True social justice begins with guaranteeing equality of opportunity in schools.",
      exampleVi: "C\u00f4ng b\u1eb1ng x\u00e3 h\u1ed9i th\u1ef1c ch\u1ea5t b\u1eaft \u0111\u1ea7u t\u1eeb vi\u1ec7c \u0111\u1ea3m b\u1ea3o c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng trong tr\u01b0\u1eddng h\u1ecdc.",
      collocations: ["guarantee equality of opportunity", "strive for equality of opportunity"]
    }
    ,
    {
      id: "v10-extra-nondiscrimination",
      word: "nondiscrimination",
      partOfSpeech: "n",
      meaningVi: "nguy\u00ean t\u1eafc kh\u00f4ng ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed",
      ipa: "/\u02ccn\u0252nd\u026a\u02ccskr\u026am\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nondiscrimination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The labor code enforces strict nondiscrimination against female workers.",
      exampleVi: "B\u1ed9 lu\u1eadt lao \u0111\u1ed9ng th\u1ef1c thi nguy\u00ean t\u1eafc kh\u00f4ng ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed v\u1edbi lao \u0111\u1ed9ng n\u1eef.",
      collocations: ["policy of nondiscrimination", "ensure nondiscrimination"]
    }
    ,
    {
      id: "v10-extra-co-breadwinner",
      word: "co-breadwinner",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi c\u00f9ng l\u00e0m tr\u1ee5 c\u1ed9t kinh t\u1ebf gia \u0111\u00ecnh",
      ipa: "/\u02cck\u0259\u028a \u02c8bredw\u026an\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=co-breadwinner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Both husband and wife act as co-breadwinners in many modern households.",
      exampleVi: "C\u1ea3 v\u1ee3 v\u00e0 ch\u1ed3ng c\u00f9ng l\u00e0m tr\u1ee5 c\u1ed9t kinh t\u1ebf trong nhi\u1ec1u gia \u0111\u00ecnh th\u1eddi nay.",
      collocations: ["serve as co-breadwinners", "role of co-breadwinner"]
    }
    ,
    {
      id: "v10-extra-egalitarian",
      word: "egalitarian",
      partOfSpeech: "adj",
      meaningVi: "b\u00ecnh \u0111\u1eb3ng, h\u01b0\u1edbng t\u1edbi b\u00ecnh quy\u1ec1n",
      ipa: "/\u026a\u02cc\u0261\u00e6l\u026a\u02c8te\u0259ri\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=egalitarian&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An egalitarian marriage shares both earning and household responsibilities evenly.",
      exampleVi: "M\u1ed9t cu\u1ed9c h\u00f4n nh\u00e2n b\u00ecnh \u0111\u1eb3ng chia \u0111\u1ec1u c\u1ea3 vi\u1ec7c ki\u1ebfm ti\u1ec1n l\u1eabn vi\u1ec7c gia \u0111\u00ecnh.",
      collocations: ["egalitarian society", "egalitarian family"]
    }
    ,
    {
      id: "mega-unit-6-glass-ceiling",
      word: "glass ceiling",
      partOfSpeech: "n.phr",
      meaningVi: "r\u00e0o c\u1ea3n v\u00f4 h\u00ecnh k\u00ecm h\u00e3m s\u1ef1 th\u0103ng ti\u1ebfn c\u1ee7a ph\u1ee5 n\u1eef",
      ipa: "/\u02cc\u0261l\u0251\u02d0s \u02c8si\u02d0l\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=glass+ceiling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many female corporate executives still strive to shatter the invisible glass ceiling.",
      exampleVi: "Nhi\u1ec1u n\u1eef gi\u00e1m \u0111\u1ed1c \u0111i\u1ec1u h\u00e0nh v\u1eabn n\u1ed7 l\u1ef1c ph\u00e1 v\u1ee1 r\u00e0o c\u1ea3n v\u00f4 h\u00ecnh k\u00ecm h\u00e3m s\u1ef1 th\u0103ng ti\u1ebfn trong s\u1ef1 nghi\u1ec7p.",
      collocations: ["shatter the glass ceiling", "confront the glass ceiling"]
    }
    ,
    {
      id: "mega-unit-6-gender-disparity",
      word: "gender disparity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ch\u00eanh l\u1ec7ch b\u1ea5t b\u00ecnh \u0111\u1eb3ng gi\u1edbi t\u00ednh",
      ipa: "/\u02c8d\u0292end\u0259 d\u026a\u02c8sp\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gender+disparity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Policymakers enact laws to eliminate the gender disparity in technical salaries.",
      exampleVi: "C\u00e1c nh\u00e0 ho\u1ea1ch \u0111\u1ecbnh ch\u00ednh s\u00e1ch ban h\u00e0nh lu\u1eadt \u0111\u1ec3 x\u00f3a b\u1ecf s\u1ef1 ch\u00eanh l\u1ec7ch gi\u1edbi t\u00ednh trong m\u1ee9c l\u01b0\u01a1ng ng\u00e0nh k\u1ef9 thu\u1eadt.",
      collocations: ["narrow gender disparity", "gender disparity in education"]
    }
    ,
    {
      id: "mega-unit-6-maternity-leave",
      word: "maternity leave",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef3 ngh\u1ec9 thai s\u1ea3n c\u00f3 l\u01b0\u01a1ng",
      ipa: "/m\u0259\u02c8t\u025c\u02d0n\u0259ti li\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=maternity+leave&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Progressive labor laws guarantee six months of paid maternity leave for new mothers.",
      exampleVi: "B\u1ed9 lu\u1eadt lao \u0111\u1ed9ng ti\u1ebfn b\u1ed9 \u0111\u1ea3m b\u1ea3o s\u00e1u th\u00e1ng ngh\u1ec9 thai s\u1ea3n h\u01b0\u1edfng l\u01b0\u01a1ng cho c\u00e1c b\u00e0 m\u1eb9 m\u1edbi sinh.",
      collocations: ["take maternity leave", "paid maternity leave"]
    }
    ,
    {
      id: "mega-unit-6-paternity-leave",
      word: "paternity leave",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef3 ngh\u1ec9 ch\u0103m s\u00f3c con d\u00e0nh cho ng\u01b0\u1eddi cha",
      ipa: "/p\u0259\u02c8t\u025c\u02d0n\u0259ti li\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=paternity+leave&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Offering paternity leave encourages fathers to share infant caretaking duties equally.",
      exampleVi: "Ch\u1ebf \u0111\u1ed9 ngh\u1ec9 thai s\u1ea3n d\u00e0nh cho cha khuy\u1ebfn kh\u00edch nh\u1eefng ng\u01b0\u1eddi \u0111\u00e0n \u00f4ng c\u00f9ng chia s\u1ebb tr\u00e1ch nhi\u1ec7m ch\u0103m s\u00f3c tr\u1ebb s\u01a1 sinh m\u1ed9t c\u00e1ch b\u00ecnh \u0111\u1eb3ng.",
      collocations: ["grant paternity leave", "encourage paternity leave"]
    }
    ,
    {
      id: "mega-unit-6-equal-pay",
      word: "equal pay",
      partOfSpeech: "n.phr",
      meaningVi: "nguy\u00ean t\u1eafc tr\u1ea3 l\u01b0\u01a1ng ngang nhau cho c\u00f9ng c\u00f4ng vi\u1ec7c",
      ipa: "/\u02cci\u02d0kw\u0259l \u02c8pe\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+pay&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The campaign advocates for equal pay for equal work regardless of biological gender.",
      exampleVi: "Chi\u1ebfn d\u1ecbch v\u1eadn \u0111\u1ed9ng cho nguy\u00ean t\u1eafc tr\u1ea3 l\u01b0\u01a1ng b\u00ecnh \u0111\u1eb3ng cho c\u00f4ng vi\u1ec7c ngang nhau kh\u00f4ng ph\u00e2n bi\u1ec7t gi\u1edbi t\u00ednh sinh h\u1ecdc.",
      collocations: ["demand equal pay", "equal pay legislation"]
    }
    ,
    {
      id: "mega-unit-6-empowerment",
      word: "empowerment",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 trao quy\u1ec1n v\u00e0 t\u1ea1o v\u1ecb th\u1ebf l\u00e0m ch\u1ee7",
      ipa: "/\u026am\u02c8pa\u028a\u0259m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=empowerment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vocational training programs drive the socioeconomic empowerment of rural women.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh \u0111\u00e0o t\u1ea1o ngh\u1ec1 th\u00fac \u0111\u1ea9y s\u1ef1 trao quy\u1ec1n kinh t\u1ebf - x\u00e3 h\u1ed9i cho ph\u1ee5 n\u1eef n\u00f4ng th\u00f4n.",
      collocations: ["female empowerment", "youth empowerment"]
    }
    ,
    {
      id: "mega-unit-6-breadwinner-stereotype",
      word: "breadwinner stereotype",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecbnh ki\u1ebfn \u00e1p \u0111\u1eb7t ng\u01b0\u1eddi \u0111\u00e0n \u00f4ng ph\u1ea3i l\u00e0 tr\u1ee5 c\u1ed9t",
      ipa: "/\u02c8bredw\u026an\u0259 \u02c8steri\u0259ta\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=breadwinner+stereotype&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Challenging the breadwinner stereotype relieves intense psychological pressure on young husbands.",
      exampleVi: "Th\u00e1ch th\u1ee9c \u0111\u1ecbnh ki\u1ebfn tr\u1ee5 c\u1ed9t kinh t\u1ebf gi\u00fap gi\u1ea3i t\u1ecfa \u00e1p l\u1ef1c t\u00e2m l\u00fd n\u1eb7ng n\u1ec1 cho nh\u1eefng ng\u01b0\u1eddi ch\u1ed3ng tr\u1ebb.",
      collocations: ["dismantle the breadwinner stereotype", "traditional stereotype"]
    }
    ,
    {
      id: "mega-unit-6-affirmative-action",
      word: "affirmative action",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u00ednh s\u00e1ch \u01b0u ti\u00ean tuy\u1ec3n d\u1ee5ng \u0111\u1ec3 t\u1ea1o c\u00f4ng b\u1eb1ng",
      ipa: "/\u0259\u02ccf\u025c\u02d0m\u0259t\u026av \u02c8\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=affirmative+action&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university applies affirmative action policies to increase female enrollment in robotics.",
      exampleVi: "Tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc \u00e1p d\u1ee5ng ch\u00ednh s\u00e1ch \u01b0u \u0111\u00e3i t\u00edch c\u1ef1c \u0111\u1ec3 t\u0103ng t\u1ef7 l\u1ec7 n\u1eef sinh theo h\u1ecdc ng\u00e0nh robot ch\u1ebf t\u1ea1o m\u00e1y.",
      collocations: ["implement affirmative action", "affirmative action program"]
    }
    ,
    {
      id: "mega-unit-6-leadership-quota",
      word: "leadership quota",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ef7 l\u1ec7 h\u1ea1n ng\u1ea1ch b\u1eaft bu\u1ed9c cho l\u00e3nh \u0111\u1ea1o n\u1eef",
      ipa: "/\u02c8li\u02d0d\u0259\u0283\u026ap \u02c8kw\u0259\u028at\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=leadership+quota&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Several parliaments introduced a 40 percent leadership quota to ensure gender balance.",
      exampleVi: "M\u1ed9t s\u1ed1 ngh\u1ecb vi\u1ec7n \u0111\u00e3 \u0111\u01b0a ra h\u1ea1n ng\u1ea1ch l\u00e3nh \u0111\u1ea1o 40 ph\u1ea7n tr\u0103m \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o c\u00e2n b\u1eb1ng gi\u1edbi t\u00ednh.",
      collocations: ["meet the leadership quota", "mandate a quota"]
    }
    ,
    {
      id: "mega-unit-6-domestic-violence",
      word: "domestic violence",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh vi b\u1ea1o l\u1ef1c gia \u0111\u00ecnh",
      ipa: "/d\u0259\u02ccmest\u026ak \u02c8va\u026a\u0259l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=domestic+violence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community hotlines provide confidential support for survivors of domestic violence.",
      exampleVi: "\u0110\u01b0\u1eddng d\u00e2y n\u00f3ng c\u1ed9ng \u0111\u1ed3ng cung c\u1ea5p s\u1ef1 h\u1ed7 tr\u1ee3 b\u00ed m\u1eadt an to\u00e0n cho c\u00e1c n\u1ea1n nh\u00e2n c\u1ee7a b\u1ea1o l\u1ef1c gia \u0111\u00ecnh.",
      collocations: ["combat domestic violence", "victim of domestic violence"]
    }
    ,
    {
      id: "mega-unit-6-workplace-harassment",
      word: "workplace harassment",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh vi qu\u1ea5y r\u1ed1i n\u01a1i c\u00f4ng s\u1edf",
      ipa: "/\u02c8w\u025c\u02d0kple\u026as h\u0259\u02c8r\u00e6sm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=workplace+harassment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Zero-tolerance corporate guidelines strictly penalize all forms of workplace harassment.",
      exampleVi: "Quy \u0111\u1ecbnh nghi\u00eam ng\u1eb7t c\u1ee7a c\u00f4ng ty x\u1eed ph\u1ea1t th\u1eb3ng tay m\u1ecdi h\u00e0nh vi qu\u1ea5y r\u1ed1i t\u1ea1i n\u01a1i l\u00e0m vi\u1ec7c.",
      collocations: ["prevent workplace harassment", "report harassment"]
    }
    ,
    {
      id: "mega-unit-6-career-advancement",
      word: "career advancement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u0103ng ti\u1ebfn v\u00e0 ph\u00e1t tri\u1ec3n s\u1ef1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259r \u0259d\u02c8v\u0251\u02d0nsm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+advancement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mentorship circles provide female engineers with pathways for rapid career advancement.",
      exampleVi: "C\u00e1c nh\u00f3m c\u1ed1 v\u1ea5n chuy\u00ean m\u00f4n mang \u0111\u1ebfn cho c\u00e1c n\u1eef k\u1ef9 s\u01b0 l\u1ed9 tr\u00ecnh th\u0103ng ti\u1ebfn s\u1ef1 nghi\u1ec7p nhanh ch\u00f3ng.",
      collocations: ["pursue career advancement", "opportunities for advancement"]
    }
    ,
    {
      id: "mega-unit-6-equal-opportunity",
      word: "equal opportunity",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng cho m\u1ecdi c\u00e1 nh\u00e2n",
      ipa: "/\u02cci\u02d0kw\u0259l \u02cc\u0252p\u0259\u02c8tju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+opportunity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The constitution guarantees equal opportunity in public employment and civil service.",
      exampleVi: "Hi\u1ebfn ph\u00e1p b\u1ea3o \u0111\u1ea3m c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng trong tuy\u1ec3n d\u1ee5ng vi\u1ec7c l\u00e0m c\u00f4ng v\u00e0 c\u01a1 quan nh\u00e0 n\u01b0\u1edbc.",
      collocations: ["equal opportunity employer", "provide equal opportunity"]
    }
    ,
    {
      id: "mega-unit-6-stem-education",
      word: "stem education",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u00e1o d\u1ee5c kh\u1ed1i ng\u00e0nh khoa h\u1ecdc c\u00f4ng ngh\u1ec7",
      ipa: "/stem \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stem+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scholarships inspire high school girls to excel in STEM education tracks.",
      exampleVi: "C\u00e1c su\u1ea5t h\u1ecdc b\u1ed5ng truy\u1ec1n c\u1ea3m h\u1ee9ng cho c\u00e1c n\u1eef sinh c\u1ea5p 3 xu\u1ea5t s\u1eafc trong c\u00e1c ng\u00e0nh gi\u00e1o d\u1ee5c STEM.",
      collocations: ["encourage STEM education", "promote girls in STEM"]
    }
    ,
    {
      id: "mega-unit-6-wage-gap",
      word: "wage gap",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3ng c\u00e1ch ch\u00eanh l\u1ec7ch m\u1ee9c thu nh\u1eadp ti\u1ec1n l\u01b0\u01a1ng",
      ipa: "/\u02c8we\u026ad\u0292 \u0261\u00e6p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wage+gap&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Transparent salary disclosures assist auditors in bridging the gender wage gap.",
      exampleVi: "Vi\u1ec7c c\u00f4ng khai minh b\u1ea1ch b\u1ea3ng l\u01b0\u01a1ng gi\u00fap c\u00e1c ki\u1ec3m to\u00e1n vi\u00ean thu h\u1eb9p kho\u1ea3ng c\u00e1ch thu nh\u1eadp gi\u1edbi.",
      collocations: ["narrow the wage gap", "unadjusted wage gap"]
    }
    ,
    {
      id: "mega-unit-6-social-prejudice",
      word: "social prejudice",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecbnh ki\u1ebfn x\u00e3 h\u1ed9i c\u1ed5 h\u1ee7",
      ipa: "/\u02ccs\u0259\u028a\u0283l \u02c8pred\u0292\u0259d\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+prejudice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Education is the most potent weapon to dismantle persistent social prejudice.",
      exampleVi: "Gi\u00e1o d\u1ee5c l\u00e0 v\u0169 kh\u00ed h\u1eefu hi\u1ec7u nh\u1ea5t \u0111\u1ec3 \u0111\u1eadp tan nh\u1eefng \u0111\u1ecbnh ki\u1ebfn x\u00e3 h\u1ed9i c\u1ed5 h\u1ee7 dai d\u1eb3ng.",
      collocations: ["overcome social prejudice", "deep-seated prejudice"]
    }
    ,
    {
      id: "mega-unit-6-inclusive-culture",
      word: "inclusive culture",
      partOfSpeech: "n.phr",
      meaningVi: "v\u0103n h\u00f3a t\u00f4n tr\u1ecdng s\u1ef1 h\u00f2a nh\u1eadp \u0111a d\u1ea1ng",
      ipa: "/\u026an\u02c8klu\u02d0s\u026av \u02c8k\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=inclusive+culture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tech firms foster an inclusive culture where every voice contributes meaningfully to debate.",
      exampleVi: "C\u00e1c c\u00f4ng ty c\u00f4ng ngh\u1ec7 x\u00e2y d\u1ef1ng m\u1ed9t v\u0103n h\u00f3a h\u00f2a nh\u1eadp n\u01a1i m\u1ecdi ti\u1ebfng n\u00f3i \u0111\u1ec1u \u0111\u00f3ng g\u00f3p \u00fd ngh\u0129a v\u00e0o th\u1ea3o lu\u1eadn.",
      collocations: ["build an inclusive culture", "thrive in an inclusive culture"]
    }
    ,
    {
      id: "mega-unit-6-double-burden",
      word: "double burden",
      partOfSpeech: "n.phr",
      meaningVi: "g\u00e1nh n\u1eb7ng k\u00e9p v\u1eeba \u0111i l\u00e0m v\u1eeba g\u00e1nh vi\u1ec7c nh\u00e0",
      ipa: "/\u02ccd\u028cbl \u02c8b\u025c\u02d0dn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=double+burden&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Working mothers often bear a double burden of demanding jobs and unshared chores.",
      exampleVi: "Ph\u1ee5 n\u1eef \u0111i l\u00e0m th\u01b0\u1eddng ph\u1ea3i ch\u1ecbu g\u00e1nh n\u1eb7ng k\u00e9p gi\u1eefa c\u00f4ng vi\u1ec7c \u00e1p l\u1ef1c v\u00e0 vi\u1ec7c nh\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c s\u1ebb chia.",
      collocations: ["relieve the double burden", "shoulder a double burden"]
    }
    ,
    {
      id: "mega-unit-6-female-entrepreneur",
      word: "female entrepreneur",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1eef doanh nh\u00e2n s\u00e1ng l\u1eadp kh\u1edfi nghi\u1ec7p",
      ipa: "/\u02c8fi\u02d0me\u026al \u02cc\u0252ntr\u0259pr\u0259\u02c8n\u025c\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=female+entrepreneur&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Microloans empower female entrepreneurs to expand eco-friendly agricultural ventures.",
      exampleVi: "V\u1ed1n vay vi m\u00f4 ti\u1ebfp s\u1ee9c cho c\u00e1c n\u1eef doanh nh\u00e2n m\u1edf r\u1ed9ng c\u00e1c d\u1ef1 \u00e1n kh\u1edfi nghi\u1ec7p n\u00f4ng nghi\u1ec7p sinh th\u00e1i.",
      collocations: ["support female entrepreneurs", "successful entrepreneur"]
    }
    ,
    {
      id: "mega-unit-6-gender-neutral",
      word: "gender-neutral",
      partOfSpeech: "adj",
      meaningVi: "trung t\u00ednh kh\u00f4ng ph\u00e2n bi\u1ec7t nam n\u1eef",
      ipa: "/\u02ccd\u0292end\u0259 \u02c8nju\u02d0tr\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gender-neutral&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Textbooks have been updated with gender-neutral pronouns and balanced job illustrations.",
      exampleVi: "S\u00e1ch gi\u00e1o khoa \u0111\u00e3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt v\u1edbi \u0111\u1ea1i t\u1eeb trung t\u00ednh v\u00e0 h\u00ecnh \u1ea3nh minh h\u1ecda ngh\u1ec1 nghi\u1ec7p c\u00e2n b\u1eb1ng.",
      collocations: ["gender-neutral language", "gender-neutral toys"]
    }
    ,
    {
      id: "mega-unit-6-fair-representation",
      word: "fair representation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 hi\u1ec7n di\u1ec7n \u0111\u1ea1i di\u1ec7n c\u00f4ng b\u1eb1ng",
      ipa: "/fe\u0259 \u02ccrepr\u026azen\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fair+representation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voters demand fair representation of both genders on the municipal city council.",
      exampleVi: "C\u1eed tri y\u00eau c\u1ea7u s\u1ef1 \u0111\u1ea1i di\u1ec7n c\u00f4ng b\u1eb1ng c\u1ee7a c\u1ea3 hai gi\u1edbi trong h\u1ed9i \u0111\u1ed3ng nh\u00e2n d\u00e2n th\u00e0nh ph\u1ed1.",
      collocations: ["ensure fair representation", "strive for fair representation"]
    }
    ,
    {
      id: "mega-unit-6-pay-equity",
      word: "pay equity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00f4ng b\u1eb1ng ch\u00ednh tr\u1ef1c trong thang l\u01b0\u01a1ng",
      ipa: "/pe\u026a \u02c8ekw\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pay+equity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Annual compensation audits verify that pay equity is strictly maintained.",
      exampleVi: "Ki\u1ec3m to\u00e1n \u0111\u00e3i ng\u1ed9 h\u1eb1ng n\u0103m x\u00e1c minh r\u1eb1ng s\u1ef1 c\u00f4ng b\u1eb1ng trong ti\u1ec1n l\u01b0\u01a1ng \u0111\u01b0\u1ee3c tu\u00e2n th\u1ee7 nghi\u00eam ng\u1eb7t.",
      collocations: ["achieve pay equity", "commit to pay equity"]
    }
    ,
    {
      id: "mega-unit-6-childcare-subsidy",
      word: "childcare subsidy",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ee3 c\u1ea5p nh\u00e0 n\u01b0\u1edbc h\u1ed7 tr\u1ee3 g\u1eedi tr\u1ebb",
      ipa: "/\u02c8t\u0283a\u026aldke\u0259 \u02c8s\u028cbs\u0259di/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=childcare+subsidy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A government childcare subsidy enables mothers to re-enter the workforce promptly.",
      exampleVi: "Kho\u1ea3n tr\u1ee3 c\u1ea5p tr\u00f4ng tr\u1ebb c\u1ee7a ch\u00ednh ph\u1ee7 gi\u00fap c\u00e1c b\u00e0 m\u1eb9 nhanh ch\u00f3ng quay tr\u1edf l\u1ea1i th\u1ecb tr\u01b0\u1eddng lao \u0111\u1ed9ng.",
      collocations: ["receive a childcare subsidy", "expand childcare subsidies"]
    }
    ,
    {
      id: "mega-unit-6-shared-responsibility",
      word: "shared responsibility",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00e1ch nhi\u1ec7m c\u00f9ng chung vai s\u1ebb chia",
      ipa: "/\u0283e\u0259d r\u026a\u02ccsp\u0252ns\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shared+responsibility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parenting is a shared responsibility requiring coordinated teamwork from both partners.",
      exampleVi: "Nu\u00f4i d\u1ea1y con c\u00e1i l\u00e0 tr\u00e1ch nhi\u1ec7m chung \u0111\u00f2i h\u1ecfi s\u1ef1 ph\u1ed1i h\u1ee3p \u0103n \u00fd t\u1eeb c\u1ea3 hai ng\u01b0\u1eddi b\u1ea1n \u0111\u1eddi.",
      collocations: ["mutual shared responsibility", "embrace shared responsibility"]
    }
    ,
    {
      id: "mega-unit-6-civil-rights",
      word: "civil rights",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c quy\u1ec1n c\u00f4ng d\u00e2n c\u01a1 b\u1ea3n",
      ipa: "/\u02c8s\u026avl ra\u026ats/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civil+rights&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Activists peacefully protested to defend the foundational civil rights of minorities.",
      exampleVi: "C\u00e1c nh\u00e0 ho\u1ea1t \u0111\u1ed9ng \u0111\u00e3 tu\u1ea7n h\u00e0nh h\u00f2a b\u00ecnh \u0111\u1ec3 b\u1ea3o v\u1ec7 c\u00e1c quy\u1ec1n c\u00f4ng d\u00e2n c\u01a1 b\u1ea3n c\u1ee7a nh\u00f3m thi\u1ec3u s\u1ed1.",
      collocations: ["champion civil rights", "civil rights movement"]
    }
    ,
    {
      id: "mega-unit-6-role-model",
      word: "role model",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea5m g\u01b0\u01a1ng m\u1eabu m\u1ef1c \u0111\u1ec3 noi theo",
      ipa: "/\u02c8r\u0259\u028al m\u0252dl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=role+model&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Astronaut Mae Jemison serves as an inspiring role model for aspiring young women.",
      exampleVi: "Nh\u00e0 du h\u00e0nh v\u0169 tr\u1ee5 Mae Jemison l\u00e0 m\u1ed9t t\u1ea5m g\u01b0\u01a1ng truy\u1ec1n c\u1ea3m h\u1ee9ng cho c\u00e1c c\u00f4 g\u00e1i tr\u1ebb \u0111\u1ea7y kh\u00e1t v\u1ecdng.",
      collocations: ["positive role model", "act as a role model"]
    }
    ,
    {
      id: "mega-unit-6-unconscious-bias",
      word: "unconscious bias",
      partOfSpeech: "n.phr",
      meaningVi: "thi\u00ean ki\u1ebfn v\u00f4 th\u1ee9c trong ti\u1ec1m th\u1ee9c",
      ipa: "/\u028cn\u02c8k\u0252n\u0283\u0259s \u02c8ba\u026a\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=unconscious+bias&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "HR departments conduct workshops to detect and neutralize unconscious bias during hiring.",
      exampleVi: "Ph\u00f2ng nh\u00e2n s\u1ef1 t\u1ed5 ch\u1ee9c h\u1ed9i th\u1ea3o \u0111\u1ec3 ph\u00e1t hi\u1ec7n v\u00e0 lo\u1ea1i b\u1ecf c\u00e1c thi\u00ean ki\u1ebfn v\u00f4 th\u1ee9c trong qu\u00e1 tr\u00ecnh ph\u1ecfng v\u1ea5n.",
      collocations: ["eliminate unconscious bias", "overcome bias"]
    }
    ,
    {
      id: "mega-unit-6-self-determination",
      word: "self-determination",
      partOfSpeech: "n",
      meaningVi: "quy\u1ec1n t\u1ef1 quy\u1ebft \u0111\u1ecbnh v\u1eadn m\u1ec7nh cu\u1ed9c \u0111\u1eddi",
      ipa: "/\u02ccself d\u026a\u02cct\u025c\u02d0m\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-determination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Access to higher education grants young women total self-determination over their careers.",
      exampleVi: "C\u01a1 h\u1ed9i ti\u1ebfp c\u1eadn gi\u00e1o d\u1ee5c \u0111\u1ea1i h\u1ecdc trao cho c\u00e1c c\u00f4 g\u00e1i tr\u1ebb quy\u1ec1n t\u1ef1 quy\u1ebft ho\u00e0n to\u00e0n \u0111\u1ed1i v\u1edbi s\u1ef1 nghi\u1ec7p c\u1ee7a m\u00ecnh.",
      collocations: ["right to self-determination", "foster self-determination"]
    }
    ,
    {
      id: "mega-unit-6-advocacy-group",
      word: "advocacy group",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00f3m v\u1eadn \u0111\u1ed9ng ch\u00ednh s\u00e1ch x\u00e3 h\u1ed9i",
      ipa: "/\u02c8\u00e6dv\u0259k\u0259si \u0261ru\u02d0p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=advocacy+group&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The advocacy group successfully lobbied for stricter penalties against sex discrimination.",
      exampleVi: "Nh\u00f3m v\u1eadn \u0111\u1ed9ng ch\u00ednh s\u00e1ch \u0111\u00e3 v\u1eadn \u0111\u1ed9ng th\u00e0nh c\u00f4ng c\u00e1c ch\u1ebf t\u00e0i nghi\u00eam kh\u1eafc h\u01a1n \u0111\u1ed1i v\u1edbi h\u00e0nh vi ph\u00e2n bi\u1ec7t gi\u1edbi t\u00ednh.",
      collocations: ["join an advocacy group", "nonprofit advocacy group"]
    }
    ,
    {
      id: "mega-unit-6-gender-parity",
      word: "gender parity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng t\u1ec9 l\u1ec7 gi\u1eefa nam v\u00e0 n\u1eef",
      ipa: "/\u02c8d\u0292end\u0259 \u02c8p\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gender+parity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The parliament passed new laws to ensure gender parity across senior civil service posts.",
      exampleVi: "Ngh\u1ecb vi\u1ec7n \u0111\u00e3 th\u00f4ng qua \u0111\u1ea1o lu\u1eadt m\u1edbi \u0111\u1ec3 b\u1ea3o \u0111\u1ea3m s\u1ef1 c\u00e2n b\u1eb1ng t\u1ec9 l\u1ec7 nam n\u1eef trong c\u00e1c ch\u1ee9c v\u1ee5 c\u00f4ng quy\u1ec1n c\u1ea5p cao.",
      collocations: ["achieve gender parity", "strive for gender parity"]
    }
    ,
    {
      id: "mega-unit-6-equal-standing",
      word: "equal standing",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb th\u1ebf v\u00e0 ti\u1ebfng n\u00f3i b\u00ecnh \u0111\u1eb3ng ngang h\u00e0ng",
      ipa: "/\u02cci\u02d0kw\u0259l \u02c8st\u00e6nd\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=equal+standing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Spouses share equal standing in all financial and family governance decisions.",
      exampleVi: "V\u1ee3 ch\u1ed3ng chia s\u1ebb v\u1ecb th\u1ebf b\u00ecnh \u0111\u1eb3ng ngang h\u00e0ng trong m\u1ecdi quy\u1ebft \u0111\u1ecbnh t\u00e0i ch\u00ednh v\u00e0 qu\u1ea3n l\u00fd gia \u0111\u00ecnh.",
      collocations: ["enjoy equal standing", "recognize equal standing"]
    }
  ],
  "unit-7-viet-nam-and-international-organisations": [
    {
      id: "v10-u7-diplomatic-relations",
      word: "diplomatic relations",
      partOfSpeech: "n.phr",
      meaningVi: "quan h\u1ec7 ngo\u1ea1i giao ch\u00ednh th\u1ee9c",
      ipa: "/\u02ccd\u026apl\u0259\u02c8m\u00e6t\u026ak r\u026a\u02c8le\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=diplomatic+relations&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam established diplomatic relations with hundreds of nations across the globe.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 thi\u1ebft l\u1eadp quan h\u1ec7 ngo\u1ea1i giao ch\u00ednh th\u1ee9c v\u1edbi h\u00e0ng tr\u0103m qu\u1ed1c gia tr\u00ean to\u00e0n th\u1ebf gi\u1edbi.",
      collocations: ["establish diplomatic relations", "deepen diplomatic relations"]
    },
    {
      id: "v10-u7-bilateral",
      word: "bilateral",
      partOfSpeech: "adj",
      meaningVi: "song ph\u01b0\u01a1ng (gi\u1eefa hai qu\u1ed1c gia)",
      ipa: "/\u02ccba\u026a\u02c8l\u00e6t\u0259r\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bilateral&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The two presidents signed historic bilateral trade agreements during the state visit.",
      exampleVi: "Hai v\u1ecb t\u1ed5ng th\u1ed1ng \u0111\u00e3 k\u00fd c\u00e1c hi\u1ec7p \u0111\u1ecbnh th\u01b0\u01a1ng m\u1ea1i song ph\u01b0\u01a1ng l\u1ecbch s\u1eed trong chuy\u1ebfn th\u0103m c\u1ea5p nh\u00e0 n\u01b0\u1edbc.",
      collocations: ["bilateral cooperation", "bilateral trade agreement"]
    },
    {
      id: "v10-u7-multilateral",
      word: "multilateral",
      partOfSpeech: "adj",
      meaningVi: "\u0111a ph\u01b0\u01a1ng (gi\u1eefa nhi\u1ec1u b\u00ean/qu\u1ed1c gia)",
      ipa: "/\u02ccm\u028clti\u02c8l\u00e6t\u0259r\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multilateral&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam actively engages in multilateral diplomacy to resolve global challenges.",
      exampleVi: "Vi\u1ec7t Nam t\u00edch c\u1ef1c tham gia ngo\u1ea1i giao \u0111a ph\u01b0\u01a1ng \u0111\u1ec3 gi\u1ea3i quy\u1ebft c\u00e1c th\u00e1ch th\u1ee9c to\u00e0n c\u1ea7u.",
      collocations: ["multilateral forums", "multilateral cooperation"]
    },
    {
      id: "v10-u7-united-nations",
      word: "United Nations",
      partOfSpeech: "n.pr",
      meaningVi: "Li\u00ean H\u1ee3p Qu\u1ed1c (UN)",
      ipa: "/ju\u02d0\u02ccna\u026at\u026ad \u02c8ne\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=United+Nations&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam was elected as a non-permanent member of the United Nations Security Council.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 \u0111\u01b0\u1ee3c b\u1ea7u l\u00e0m \u1ee7y vi\u00ean kh\u00f4ng th\u01b0\u1eddng tr\u1ef1c H\u1ed9i \u0111\u1ed3ng B\u1ea3o an Li\u00ean H\u1ee3p Qu\u1ed1c.",
      collocations: ["join the United Nations", "United Nations Charter"]
    },
    {
      id: "v10-u7-peacekeeping",
      word: "peacekeeping",
      partOfSpeech: "n",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng g\u00ecn gi\u1eef h\u00f2a b\u00ecnh qu\u1ed1c t\u1ebf",
      ipa: "/\u02c8pi\u02d0ski\u02d0p\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peacekeeping&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese military doctors deployed to South Sudan for UN peacekeeping missions.",
      exampleVi: "C\u00e1c b\u00e1c s\u0129 qu\u00e2n y Vi\u1ec7t Nam \u0111\u00e3 l\u00ean \u0111\u01b0\u1eddng sang Nam Sudan l\u00e0m nhi\u1ec7m v\u1ee5 g\u00ecn gi\u1eef h\u00f2a b\u00ecnh Li\u00ean H\u1ee3p Qu\u1ed1c.",
      collocations: ["peacekeeping mission", "UN peacekeeping forces"]
    },
    {
      id: "v10-u7-integration",
      word: "integration",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 h\u1ed9i nh\u1eadp kinh t\u1ebf qu\u1ed1c t\u1ebf s\u00e2u r\u1ed9ng",
      ipa: "/\u02cc\u026ant\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=integration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deep economic integration has transformed Vietnam into an open manufacturing hub.",
      exampleVi: "H\u1ed9i nh\u1eadp kinh t\u1ebf s\u00e2u r\u1ed9ng \u0111\u00e3 \u0111\u01b0a Vi\u1ec7t Nam tr\u1edf th\u00e0nh m\u1ed9t trung t\u00e2m s\u1ea3n xu\u1ea5t m\u1edf c\u1ee7a khu v\u1ef1c.",
      collocations: ["international integration", "regional economic integration"]
    },
    {
      id: "v10-u7-treaty",
      word: "treaty",
      partOfSpeech: "n",
      meaningVi: "hi\u1ec7p \u01b0\u1edbc qu\u1ed1c t\u1ebf c\u00f3 t\u00ednh r\u00e0ng bu\u1ed9c",
      ipa: "/\u02c8tri\u02d0ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=treaty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Member states pledged to uphold the non-proliferation treaty.",
      exampleVi: "C\u00e1c qu\u1ed1c gia th\u00e0nh vi\u00ean cam k\u1ebft t\u00f4n tr\u1ecdng hi\u1ec7p \u01b0\u1edbc kh\u00f4ng ph\u1ed5 bi\u1ebfn v\u0169 kh\u00ed.",
      collocations: ["sign a peace treaty", "ratify a treaty"]
    },
    {
      id: "v10-u7-sovereignty",
      word: "sovereignty",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee7 quy\u1ec1n l\u00e3nh th\u1ed5 b\u1ea5t kh\u1ea3 x\u00e2m ph\u1ea1m",
      ipa: "/\u02c8s\u0252vr\u0259nti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sovereignty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Protecting national territorial sovereignty and maritime rights is sacred.",
      exampleVi: "B\u1ea3o v\u1ec7 ch\u1ee7 quy\u1ec1n l\u00e3nh th\u1ed5 v\u00e0 quy\u1ec1n t\u00e0i ph\u00e1n bi\u1ec3n qu\u1ed1c gia l\u00e0 \u0111i\u1ec1u thi\u00eang li\u00eang.",
      collocations: ["national sovereignty", "territorial sovereignty"]
    },
    {
      id: "v10-u7-trade-agreement",
      word: "trade agreement",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7p \u0111\u1ecbnh th\u01b0\u01a1ng m\u1ea1i m\u1edf c\u1eeda th\u1ecb tr\u01b0\u1eddng",
      ipa: "/\u02c8tre\u026ad \u0259\u02cc\u0261ri\u02d0m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+agreement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The free trade agreement lowered tariff duties for Vietnamese agricultural produce.",
      exampleVi: "Hi\u1ec7p \u0111\u1ecbnh th\u01b0\u01a1ng m\u1ea1i t\u1ef1 do \u0111\u00e3 h\u1ea1 th\u1ea5p thu\u1ebf quan cho n\u00f4ng s\u1ea3n xu\u1ea5t kh\u1ea9u c\u1ee7a Vi\u1ec7t Nam.",
      collocations: ["free trade agreement (FTA)", "negotiate a trade agreement"]
    },
    {
      id: "v10-u7-ambassador",
      word: "ambassador",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ea1i s\u1ee9 \u0111\u1ea1i di\u1ec7n qu\u1ed1c gia",
      ipa: "/\u00e6m\u02c8b\u00e6s\u0259d\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ambassador&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Vietnamese ambassador in London hosted a cultural reception for local students.",
      exampleVi: "\u0110\u1ea1i s\u1ee9 Vi\u1ec7t Nam t\u1ea1i Lu\u00e2n \u0110\u00f4n \u0111\u00e3 t\u1ed5 ch\u1ee9c bu\u1ed5i \u0111\u00f3n ti\u1ebfp v\u0103n h\u00f3a \u1ea5m c\u00fang cho sinh vi\u00ean s\u1edf t\u1ea1i.",
      collocations: ["appointed as ambassador", "goodwill ambassador"]
    },
    {
      id: "v10-u7-summit",
      word: "summit",
      partOfSpeech: "n",
      meaningVi: "h\u1ed9i ngh\u1ecb th\u01b0\u1ee3ng \u0111\u1ec9nh c\u00e1c nguy\u00ean th\u1ee7",
      ipa: "/\u02c8s\u028cm\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=summit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hanoi successfully hosted the landmark ASEAN Summit and high-level dialogue.",
      exampleVi: "H\u00e0 N\u1ed9i \u0111\u00e3 \u0111\u0103ng cai t\u1ed5 ch\u1ee9c th\u00e0nh c\u00f4ng H\u1ed9i ngh\u1ecb Th\u01b0\u1ee3ng \u0111\u1ec9nh ASEAN v\u00e0 \u0111\u1ed1i tho\u1ea1i c\u1ea5p cao.",
      collocations: ["host a summit", "attend the climate summit"]
    },
    {
      id: "v10-u7-global-standing",
      word: "global standing",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb th\u1ebf v\u00e0 uy t\u00edn tr\u00ean tr\u01b0\u1eddng qu\u1ed1c t\u1ebf",
      ipa: "/\u02c8\u0261l\u0259\u028abl \u02c8st\u00e6nd\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=global+standing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Active participation in international treaties elevated Vietnam's global standing.",
      exampleVi: "S\u1ef1 tham gia t\u00edch c\u1ef1c v\u00e0o c\u00e1c hi\u1ec7p \u01b0\u1edbc qu\u1ed1c t\u1ebf \u0111\u00e3 n\u00e2ng cao v\u1ecb th\u1ebf to\u00e0n c\u1ea7u c\u1ee7a Vi\u1ec7t Nam.",
      collocations: ["enhance global standing", "elevate national standing"]
    },
    {
      id: "v10-u7-delegation",
      word: "delegation",
      partOfSpeech: "n",
      meaningVi: "ph\u00e1i \u0111o\u00e0n \u0111\u1ea1i bi\u1ec3u tham d\u1ef1 h\u1ed9i ngh\u1ecb",
      ipa: "/\u02ccdel\u026a\u02c8\u0261e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=delegation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A high-level trade delegation visited Tokyo to promote bilateral exports.",
      exampleVi: "M\u1ed9t ph\u00e1i \u0111o\u00e0n th\u01b0\u01a1ng m\u1ea1i c\u1ea5p cao \u0111\u00e3 t\u1edbi Tokyo \u0111\u1ec3 x\u00fac ti\u1ebfn xu\u1ea5t kh\u1ea9u song ph\u01b0\u01a1ng.",
      collocations: ["lead a delegation", "official delegation"]
    },
    {
      id: "v10-u7-foreign-investment",
      word: "foreign investment",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ed1n \u0111\u1ea7u t\u01b0 tr\u1ef1c ti\u1ebfp t\u1eeb n\u01b0\u1edbc ngo\u00e0i (FDI)",
      ipa: "/\u02c8f\u0252r\u0259n \u026an\u02c8vestm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=foreign+investment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Favorable tax policies attracted billions in foreign investment to high-tech industrial parks.",
      exampleVi: "Ch\u00ednh s\u00e1ch thu\u1ebf \u01b0u \u0111\u00e3i \u0111\u00e3 thu h\u00fat h\u00e0ng t\u1ef7 \u0111\u00f4 la v\u1ed1n \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i v\u00e0o c\u00e1c khu c\u00f4ng ngh\u1ec7 cao.",
      collocations: ["attract foreign investment", "foreign direct investment (FDI)"]
    },
    {
      id: "v10-u7-coexistence",
      word: "coexistence",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 chung s\u1ed1ng h\u00f2a b\u00ecnh gi\u1eefa c\u00e1c d\u00e2n t\u1ed9c",
      ipa: "/\u02cck\u0259\u028a\u026a\u0261\u02c8z\u026ast\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=coexistence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam advocates peaceful coexistence and respect for international law.",
      exampleVi: "Vi\u1ec7t Nam ch\u1ee7 tr\u01b0\u01a1ng chung s\u1ed1ng h\u00f2a b\u00ecnh v\u00e0 t\u00f4n tr\u1ecdng lu\u1eadt ph\u00e1p qu\u1ed1c t\u1ebf.",
      collocations: ["peaceful coexistence", "principles of coexistence"]
    },
    {
      id: "v10-u7-membership",
      word: "membership",
      partOfSpeech: "n",
      meaningVi: "t\u01b0 c\u00e1ch th\u00e0nh vi\u00ean t\u1ed5 ch\u1ee9c",
      ipa: "/\u02c8memb\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=membership&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam's accession to WTO membership opened doors to global export markets.",
      exampleVi: "Vi\u1ec7c gia nh\u1eadp t\u01b0 c\u00e1ch th\u00e0nh vi\u00ean WTO \u0111\u00e3 m\u1edf toang c\u00e1nh c\u1eeda v\u00e0o th\u1ecb tr\u01b0\u1eddng xu\u1ea5t kh\u1ea9u th\u1ebf gi\u1edbi.",
      collocations: ["gain full membership", "WTO membership"]
    },
    {
      id: "v10-u7-cultural-exchange",
      word: "cultural exchange",
      partOfSpeech: "n.phr",
      meaningVi: "giao l\u01b0u trao \u0111\u1ed5i v\u0103n h\u00f3a ngh\u1ec7 thu\u1eadt",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u026aks\u02c8t\u0283e\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+exchange&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Annual cultural exchange festivals promote mutual understanding among Asian youth.",
      exampleVi: "C\u00e1c l\u1ec5 h\u1ed9i giao l\u01b0u v\u0103n h\u00f3a th\u01b0\u1eddng ni\u00ean th\u00fac \u0111\u1ea9y s\u1ef1 hi\u1ec3u bi\u1ebft gi\u1eefa thanh ni\u00ean ch\u00e2u \u00c1.",
      collocations: ["promote cultural exchange", "foster cultural exchange"]
    },
    {
      id: "v10-u7-solidarity",
      word: "solidarity",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u01b0\u01a1ng tr\u1ee3 \u0111o\u00e0n k\u1ebft qu\u1ed1c t\u1ebf",
      ipa: "/\u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam sent medical face masks to European countries in a gesture of international solidarity.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 g\u1eedi kh\u1ea9u trang y t\u1ebf t\u1edbi c\u00e1c n\u01b0\u1edbc ch\u00e2u \u00c2u nh\u01b0 m\u1ed9t bi\u1ec3u t\u01b0\u1ee3ng c\u1ee7a t\u00ecnh \u0111o\u00e0n k\u1ebft qu\u1ed1c t\u1ebf.",
      collocations: ["international solidarity", "express solidarity with"]
    },
    {
      id: "v10-u7-non-governmental",
      word: "non-governmental",
      partOfSpeech: "adj",
      meaningVi: "phi ch\u00ednh ph\u1ee7 (NGO)",
      ipa: "/\u02ccn\u0252n \u02cc\u0261\u028cvn\u02c8mentl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=non-governmental&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Non-governmental organizations provide vital support in rural education and healthcare.",
      exampleVi: "C\u00e1c t\u1ed5 ch\u1ee9c phi ch\u00ednh ph\u1ee7 mang l\u1ea1i h\u1ed7 tr\u1ee3 thi\u1ebft th\u1ef1c cho gi\u00e1o d\u1ee5c v\u00e0 y t\u1ebf n\u00f4ng th\u00f4n.",
      collocations: ["non-governmental organization (NGO)", "non-governmental sector"]
    },
    {
      id: "v10-u7-dialogue",
      word: "dialogue",
      partOfSpeech: "n",
      meaningVi: "cu\u1ed9c \u0111\u1ed1i tho\u1ea1i \u0111\u00e0m ph\u00e1n x\u00e2y d\u1ef1ng",
      ipa: "/\u02c8da\u026a\u0259l\u0252\u0261/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dialogue&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Constructive diplomatic dialogue resolved the long-standing maritime border dispute.",
      exampleVi: "Cu\u1ed9c \u0111\u1ed1i tho\u1ea1i ngo\u1ea1i giao mang t\u00ednh x\u00e2y d\u1ef1ng \u0111\u00e3 gi\u1ea3i quy\u1ebft tranh ch\u1ea5p bi\u00ean gi\u1edbi bi\u1ec3n k\u00e9o d\u00e0i.",
      collocations: ["open dialogue", "engage in diplomatic dialogue"]
    },
    {
      id: "v10-u7-tariff",
      word: "tariff",
      partOfSpeech: "n",
      meaningVi: "thu\u1ebf quan xu\u1ea5t nh\u1eadp kh\u1ea9u h\u00e0ng h\u00f3a",
      ipa: "/\u02c8t\u00e6r\u026af/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tariff&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eliminating customs tariffs makes Vietnamese tropical fruit competitive in Europe.",
      exampleVi: "Vi\u1ec7c x\u00f3a b\u1ecf thu\u1ebf quan h\u1ea3i quan gi\u00fap tr\u00e1i c\u00e2y nhi\u1ec7t \u0111\u1edbi Vi\u1ec7t Nam c\u1ea1nh tranh t\u1ed1t t\u1ea1i ch\u00e2u \u00c2u.",
      collocations: ["reduce import tariffs", "zero tariff barrier"]
    },
    {
      id: "v10-u7-poverty-reduction",
      word: "poverty reduction",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng cu\u1ed9c x\u00f3a \u0111\u00f3i gi\u1ea3m ngh\u00e8o",
      ipa: "/\u02c8p\u0252v\u0259ti r\u026a\u02c8d\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poverty+reduction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam's poverty reduction achievements have been commended by the World Bank.",
      exampleVi: "Th\u00e0nh t\u1ef1u x\u00f3a \u0111\u00f3i gi\u1ea3m ngh\u00e8o c\u1ee7a Vi\u1ec7t Nam \u0111\u00e3 \u0111\u01b0\u1ee3c Ng\u00e2n h\u00e0ng Th\u1ebf gi\u1edbi khen ng\u1ee3i.",
      collocations: ["rapid poverty reduction", "programs for poverty reduction"]
    },
    {
      id: "v10-u7-sustainable-development",
      word: "sustainable development",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1t tri\u1ec3n b\u1ec1n v\u1eefng, h\u00e0i h\u00f2a",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl d\u026a\u02c8vel\u0259pm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+development&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The United Nations outlined seventeen sustainable development goals for 2030.",
      exampleVi: "Li\u00ean H\u1ee3p Qu\u1ed1c \u0111\u00e3 \u0111\u1ec1 ra m\u01b0\u1eddi b\u1ea3y m\u1ee5c ti\u00eau ph\u00e1t tri\u1ec3n b\u1ec1n v\u1eefng cho n\u0103m 2030.",
      collocations: ["sustainable development goals (SDGs)", "promote sustainable development"]
    },
    {
      id: "v10-u7-strategic-partnership",
      word: "strategic partnership",
      partOfSpeech: "n.phr",
      meaningVi: "quan h\u1ec7 \u0111\u1ed1i t\u00e1c chi\u1ebfn l\u01b0\u1ee3c",
      ipa: "/str\u0259\u02c8ti\u02d0d\u0292\u026ak \u02c8p\u0251\u02d0tn\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=strategic+partnership&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam upgraded its bilateral ties with major powers to comprehensive strategic partnerships.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 n\u00e2ng c\u1ea5p quan h\u1ec7 song ph\u01b0\u01a1ng v\u1edbi c\u00e1c c\u01b0\u1eddng qu\u1ed1c l\u00ean \u0111\u1ed1i t\u00e1c chi\u1ebfn l\u01b0\u1ee3c to\u00e0n di\u1ec7n.",
      collocations: ["comprehensive strategic partnership", "forge a strategic partnership"]
    },
    {
      id: "v10-u7-charter",
      word: "charter",
      partOfSpeech: "n",
      meaningVi: "hi\u1ebfn ch\u01b0\u01a1ng ph\u00e1p l\u00fd t\u1ed5 ch\u1ee9c",
      ipa: "/\u02c8t\u0283\u0251\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "All signatory nations solemnly pledge to uphold the principles of the UN Charter.",
      exampleVi: "T\u1ea5t c\u1ea3 c\u00e1c qu\u1ed1c gia k\u00fd k\u1ebft \u0111\u1ec1u long tr\u1ecdng cam k\u1ebft tu\u00e2n th\u1ee7 c\u00e1c nguy\u00ean t\u1eafc c\u1ee7a Hi\u1ebfn ch\u01b0\u01a1ng LHQ.",
      collocations: ["UN Charter", "ASEAN Charter"]
    },
    {
      id: "v10-u7-human-rights-council",
      word: "human rights council",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9i \u0111\u1ed3ng nh\u00e2n quy\u1ec1n qu\u1ed1c t\u1ebf",
      ipa: "/\u02c8hju\u02d0m\u0259n ra\u026ats \u02c8ka\u028ansl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=human+rights+council&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam served actively as a member of the UN Human Rights Council.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 \u0111\u1ea3m nhi\u1ec7m t\u00edch c\u1ef1c vai tr\u00f2 th\u00e0nh vi\u00ean H\u1ed9i \u0111\u1ed3ng Nh\u00e2n quy\u1ec1n Li\u00ean H\u1ee3p Qu\u1ed1c.",
      collocations: ["seat on the Human Rights Council", "session of the Human Rights Council"]
    },
    {
      id: "v10-u7-cooperation",
      word: "cooperation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 h\u1ee3p t\u00e1c h\u1eefu ngh\u1ecb c\u00f9ng ph\u00e1t tri\u1ec3n",
      ipa: "/k\u0259\u028a\u02cc\u0252p\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cooperation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deep scientific cooperation allows universities to share cutting-edge laboratory facilities.",
      exampleVi: "H\u1ee3p t\u00e1c khoa h\u1ecdc s\u00e2u r\u1ed9ng cho ph\u00e9p c\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc chia s\u1ebb ph\u00f2ng th\u00ed nghi\u1ec7m hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["international cooperation", "strengthen cooperation"]
    },
    {
      id: "v10-u7-bilateral-trade",
      word: "bilateral trade",
      partOfSpeech: "n.phr",
      meaningVi: "kim ng\u1ea1ch th\u01b0\u01a1ng m\u1ea1i hai chi\u1ec1u",
      ipa: "/\u02ccba\u026a\u02c8l\u00e6t\u0259r\u0259l tre\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bilateral+trade&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bilateral trade between Vietnam and the European Union surpassed 60 billion dollars.",
      exampleVi: "Th\u01b0\u01a1ng m\u1ea1i hai chi\u1ec1u gi\u1eefa Vi\u1ec7t Nam v\u00e0 Li\u00ean minh ch\u00e2u \u00c2u \u0111\u00e3 v\u01b0\u1ee3t 60 t\u1ef7 \u0111\u00f4 la.",
      collocations: ["volume of bilateral trade", "boost bilateral trade"]
    },
    {
      id: "v10-u7-foreign-policy",
      word: "foreign policy",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u01b0\u1eddng l\u1ed1i ch\u00ednh s\u00e1ch \u0111\u1ed1i ngo\u1ea1i",
      ipa: "/\u02c8f\u0252r\u0259n \u02c8p\u0252l\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=foreign+policy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam's foreign policy is independence, self-reliance, peace, and multilateralism.",
      exampleVi: "Ch\u00ednh s\u00e1ch \u0111\u1ed1i ngo\u1ea1i c\u1ee7a Vi\u1ec7t Nam l\u00e0 \u0111\u1ed9c l\u1eadp, t\u1ef1 ch\u1ee7, h\u00f2a b\u00ecnh v\u00e0 \u0111a ph\u01b0\u01a1ng h\u00f3a.",
      collocations: ["independent foreign policy", "conduct foreign policy"]
    },
    {
      id: "v10-u7-consensus",
      word: "consensus",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 \u0111\u1ed3ng thu\u1eadn chung gi\u1eefa c\u00e1c b\u00ean",
      ipa: "/k\u0259n\u02c8sens\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=consensus&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "ASEAN operates on the fundamental principle of consultation and consensus.",
      exampleVi: "Hi\u1ec7p h\u1ed9i ASEAN ho\u1ea1t \u0111\u1ed9ng d\u1ef1a tr\u00ean nguy\u00ean t\u1eafc c\u01a1 b\u1ea3n l\u00e0 tham v\u1ea5n v\u00e0 \u0111\u1ed3ng thu\u1eadn chung.",
      collocations: ["reach a consensus", "by consensus"]
    },
    {
      id: "v10-u7-non-interference",
      word: "non-interference",
      partOfSpeech: "n",
      meaningVi: "nguy\u00ean t\u1eafc kh\u00f4ng can thi\u1ec7p n\u1ed9i b\u1ed9",
      ipa: "/\u02ccn\u0252n \u02cc\u026ant\u0259\u02c8f\u026a\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=non-interference&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Non-interference in each other's internal affairs is a foundational pillar of diplomacy.",
      exampleVi: "Kh\u00f4ng can thi\u1ec7p v\u00e0o c\u00f4ng vi\u1ec7c n\u1ed9i b\u1ed9 c\u1ee7a nhau l\u00e0 tr\u1ee5 c\u1ed9t n\u1ec1n t\u1ea3ng c\u1ee7a n\u1ec1n ngo\u1ea1i giao.",
      collocations: ["principle of non-interference", "respect non-interference"]
    },
    {
      id: "v10-u7-cross-border",
      word: "cross-border",
      partOfSpeech: "adj",
      meaningVi: "xuy\u00ean bi\u00ean gi\u1edbi c\u00e1c qu\u1ed1c gia",
      ipa: "/\u02cckr\u0252s \u02c8b\u0254\u02d0d\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-border&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital payment platforms facilitate seamless cross-border e-commerce across ASEAN.",
      exampleVi: "C\u00e1c n\u1ec1n t\u1ea3ng thanh to\u00e1n s\u1ed1 t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed xuy\u00ean bi\u00ean gi\u1edbi trong ASEAN.",
      collocations: ["cross-border trade", "cross-border payments"]
    },
    {
      id: "v10-u7-goodwill",
      word: "goodwill",
      partOfSpeech: "n",
      meaningVi: "thi\u1ec7n ch\u00ed h\u1eefu ngh\u1ecb gi\u1eefa c\u00e1c b\u00ean",
      ipa: "/\u02cc\u0261\u028ad\u02c8w\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=goodwill&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The official gift exchange was held in an atmosphere of warmth and mutual goodwill.",
      exampleVi: "Nghi th\u1ee9c trao \u0111\u1ed5i qu\u00e0 l\u01b0u ni\u1ec7m ch\u00ednh th\u1ee9c di\u1ec5n ra trong b\u1ea7u kh\u00f4ng kh\u00ed \u1ea5m \u00e1p v\u00e0 tr\u00e0n ng\u1eadp thi\u1ec7n ch\u00ed.",
      collocations: ["gesture of goodwill", "atmosphere of goodwill"]
    },
    {
      id: "v10-u7-bilateral-ties",
      word: "bilateral ties",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ed1i quan h\u1ec7 g\u1eafn k\u1ebft song ph\u01b0\u01a1ng",
      ipa: "/\u02ccba\u026a\u02c8l\u00e6t\u0259r\u0259l ta\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bilateral+ties&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Both prime ministers agreed to elevate bilateral ties in digital innovation.",
      exampleVi: "C\u1ea3 hai th\u1ee7 t\u01b0\u1edbng nh\u1ea5t tr\u00ed l\u00e0m s\u00e2u s\u1eafc m\u1ed1i quan h\u1ec7 song ph\u01b0\u01a1ng trong \u0111\u1ed5i m\u1edbi s\u00e1ng t\u1ea1o s\u1ed1.",
      collocations: ["strengthen bilateral ties", "warm bilateral ties"]
    },
    {
      id: "v10-u7-global-challenge",
      word: "global challenge",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00e1ch th\u1ee9c mang t\u00ednh to\u00e0n c\u1ea7u",
      ipa: "/\u02c8\u0261l\u0259\u028abl \u02c8t\u0283\u00e6l\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=global+challenge&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Climate change and infectious pandemics are pressing global challenges requiring joint action.",
      exampleVi: "Bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu v\u00e0 \u0111\u1ea1i d\u1ecbch truy\u1ec1n nhi\u1ec5m l\u00e0 c\u00e1c th\u00e1ch th\u1ee9c to\u00e0n c\u1ea7u c\u1ea5p b\u00e1ch c\u1ea7n h\u00e0nh \u0111\u1ed9ng chung.",
      collocations: ["address global challenges", "tackle global challenges"]
    }
    ,
    {
      id: "v10-extra-peacekeeping-mission",
      word: "peacekeeping mission",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9 m\u1ec7nh g\u00ecn gi\u1eef h\u00f2a b\u00ecnh Li\u00ean H\u1ee3p Qu\u1ed1c",
      ipa: "/\u02c8pi\u02d0ski\u02d0p\u026a\u014b \u02c8m\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peacekeeping+mission&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam deploys level-two field hospitals to UN peacekeeping missions in South Sudan.",
      exampleVi: "Vi\u1ec7t Nam c\u1eed b\u1ec7nh vi\u1ec7n d\u00e3 chi\u1ebfn c\u1ea5p hai t\u1edbi c\u00e1c ph\u00e1i b\u1ed9 g\u00ecn gi\u1eef h\u00f2a b\u00ecnh LHQ t\u1ea1i Nam Sudan.",
      collocations: ["join a peacekeeping mission", "peacekeeping mission personnel"]
    }
    ,
    {
      id: "v10-extra-bilateral-cooperation",
      word: "bilateral cooperation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u1ee3p t\u00e1c song ph\u01b0\u01a1ng gi\u1eefa hai n\u01b0\u1edbc",
      ipa: "/\u02ccba\u026a\u02c8l\u00e6t\u0259r\u0259l k\u0259\u028a\u02cc\u0252p\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bilateral+cooperation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bilateral cooperation in agricultural exports has grown substantially.",
      exampleVi: "H\u1ee3p t\u00e1c song ph\u01b0\u01a1ng trong xu\u1ea5t kh\u1ea9u n\u00f4ng s\u1ea3n \u0111\u00e3 t\u0103ng tr\u01b0\u1edfng v\u01b0\u1ee3t b\u1eadc.",
      collocations: ["deepen bilateral cooperation", "framework for bilateral cooperation"]
    }
    ,
    {
      id: "v10-extra-member-nation",
      word: "member nation",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ed1c gia th\u00e0nh vi\u00ean trong t\u1ed5 ch\u1ee9c",
      ipa: "/\u02c8memb\u0259 \u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=member+nation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each member nation has an equal vote at the United Nations General Assembly.",
      exampleVi: "M\u1ed7i qu\u1ed1c gia th\u00e0nh vi\u00ean \u0111\u1ec1u c\u00f3 m\u1ed9t l\u00e1 phi\u1ebfu b\u00ecnh \u0111\u1eb3ng t\u1ea1i \u0110\u1ea1i h\u1ed9i \u0111\u1ed3ng Li\u00ean H\u1ee3p Qu\u1ed1c.",
      collocations: ["active member nation", "contributions of member nations"]
    }
    ,
    {
      id: "v10-extra-multilateral-forum",
      word: "multilateral forum",
      partOfSpeech: "n.phr",
      meaningVi: "di\u1ec5n \u0111\u00e0n h\u1ee3p t\u00e1c \u0111a ph\u01b0\u01a1ng",
      ipa: "/\u02ccm\u028clti\u02c8l\u00e6t\u0259r\u0259l \u02c8f\u0254\u02d0r\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multilateral+forum&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam actively raises its voice at prominent multilateral forums like APEC and ASEAN.",
      exampleVi: "Vi\u1ec7t Nam t\u00edch c\u1ef1c c\u1ea5t cao ti\u1ebfng n\u00f3i t\u1ea1i c\u00e1c di\u1ec5n \u0111\u00e0n \u0111a ph\u01b0\u01a1ng l\u1edbn nh\u01b0 APEC v\u00e0 ASEAN.",
      collocations: ["participate in multilateral forums", "host a multilateral forum"]
    }
    ,
    {
      id: "v10-extra-strategic-partner",
      word: "strategic partner",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ed1i t\u00e1c chi\u1ebfn l\u01b0\u1ee3c tin c\u1eady",
      ipa: "/str\u0259\u02c8ti\u02d0d\u0292\u026ak \u02c8p\u0251\u02d0tn\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=strategic+partner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam has established strategic partner relations with leading economic powers.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 thi\u1ebft l\u1eadp quan h\u1ec7 \u0111\u1ed1i t\u00e1c chi\u1ebfn l\u01b0\u1ee3c v\u1edbi c\u00e1c c\u01b0\u1eddng qu\u1ed1c kinh t\u1ebf h\u00e0ng \u0111\u1ea7u.",
      collocations: ["reliable strategic partner", "become a strategic partner"]
    }
    ,
    {
      id: "v10-extra-free-trade",
      word: "free trade",
      partOfSpeech: "n.phr",
      meaningVi: "th\u01b0\u01a1ng m\u1ea1i t\u1ef1 do kh\u00f4ng r\u00e0o c\u1ea3n",
      ipa: "/\u02ccfri\u02d0 \u02c8tre\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=free+trade&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Free trade agreements allow Vietnamese textiles to enter European markets with zero tariffs.",
      exampleVi: "C\u00e1c hi\u1ec7p \u0111\u1ecbnh th\u01b0\u01a1ng m\u1ea1i t\u1ef1 do gi\u00fap d\u1ec7t may Vi\u1ec7t Nam v\u00e0o th\u1ecb tr\u01b0\u1eddng ch\u00e2u \u00c2u v\u1edbi thu\u1ebf su\u1ea5t 0%.",
      collocations: ["advocate free trade", "benefits of free trade"]
    }
    ,
    {
      id: "v10-extra-diplomat",
      word: "diplomat",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 ngo\u1ea1i giao \u0111\u1ea1i di\u1ec7n cho \u0111\u1ea5t n\u01b0\u1edbc",
      ipa: "/\u02c8d\u026apl\u0259m\u00e6t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=diplomat&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese diplomats work untiringly to protect citizens residing overseas.",
      exampleVi: "C\u00e1c nh\u00e0 ngo\u1ea1i giao Vi\u1ec7t Nam l\u00e0m vi\u1ec7c kh\u00f4ng m\u1ec7t m\u1ecfi \u0111\u1ec3 b\u1ea3o h\u1ed9 c\u00f4ng d\u00e2n \u1edf n\u01b0\u1edbc ngo\u00e0i.",
      collocations: ["career diplomat", "skilled diplomat"]
    }
    ,
    {
      id: "v10-extra-humanitarian-assistance",
      word: "humanitarian assistance",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed7 tr\u1ee3 c\u1ee9u tr\u1ee3 nh\u00e2n \u0111\u1ea1o",
      ipa: "/hju\u02d0\u02ccm\u00e6n\u026a\u02c8te\u0259ri\u0259n \u0259\u02c8s\u026ast\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=humanitarian+assistance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam provided emergency humanitarian assistance to countries hit by earthquakes.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 g\u1eedi h\u00e0ng c\u1ee9u tr\u1ee3 nh\u00e2n \u0111\u1ea1o kh\u1ea9n c\u1ea5p t\u1edbi c\u00e1c qu\u1ed1c gia b\u1ecb \u0111\u1ed9ng \u0111\u1ea5t.",
      collocations: ["provide humanitarian assistance", "emergency humanitarian assistance"]
    }
    ,
    {
      id: "v10-extra-economic-integration",
      word: "economic integration",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9i nh\u1eadp kinh t\u1ebf khu v\u1ef1c v\u00e0 th\u1ebf gi\u1edbi",
      ipa: "/\u02cci\u02d0k\u0259\u02c8n\u0252m\u026ak \u02cc\u026ant\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=economic+integration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Economic integration opened access to international supply chains for local firms.",
      exampleVi: "H\u1ed9i nh\u1eadp kinh t\u1ebf m\u1edf ra c\u01a1 h\u1ed9i tham gia chu\u1ed7i cung \u1ee9ng qu\u1ed1c t\u1ebf cho doanh nghi\u1ec7p trong n\u01b0\u1edbc.",
      collocations: ["accelerate economic integration", "deep economic integration"]
    }
    ,
    {
      id: "v10-extra-sovereign-state",
      word: "sovereign state",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ed1c gia c\u00f3 ch\u1ee7 quy\u1ec1n \u0111\u1ed9c l\u1eadp",
      ipa: "/\u02c8s\u0252vr\u026an ste\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sovereign+state&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam interacts with all sovereign states on the basis of mutual respect.",
      exampleVi: "Vi\u1ec7t Nam giao l\u01b0u v\u1edbi m\u1ecdi qu\u1ed1c gia c\u00f3 ch\u1ee7 quy\u1ec1n tr\u00ean c\u01a1 s\u1edf t\u00f4n tr\u1ecdng l\u1eabn nhau.",
      collocations: ["independent sovereign state", "rights of a sovereign state"]
    }
    ,
    {
      id: "v10-extra-peaceful-settlement",
      word: "peaceful settlement",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u1ea3i quy\u1ebft h\u00f2a b\u00ecnh c\u00e1c tranh ch\u1ea5p",
      ipa: "/\u02c8pi\u02d0sfl \u02c8setlm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peaceful+settlement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam advocates the peaceful settlement of all international disputes via dialogue.",
      exampleVi: "Vi\u1ec7t Nam \u1ee7ng h\u1ed9 vi\u1ec7c gi\u1ea3i quy\u1ebft h\u00f2a b\u00ecnh m\u1ecdi tranh ch\u1ea5p qu\u1ed1c t\u1ebf th\u00f4ng qua \u0111\u1ed1i tho\u1ea1i.",
      collocations: ["peaceful settlement of disputes", "seek a peaceful settlement"]
    }
    ,
    {
      id: "v10-extra-solidarity",
      word: "solidarity",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u01b0\u01a1ng th\u00e2n \u0111o\u00e0n k\u1ebft",
      ipa: "/\u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "ASEAN solidarity ensures a coordinated approach towards common regional goals.",
      exampleVi: "T\u00ecnh \u0111o\u00e0n k\u1ebft ASEAN \u0111\u1ea3m b\u1ea3o s\u1ef1 ph\u1ed1i h\u1ee3p nh\u1ecbp nh\u00e0ng h\u01b0\u1edbng t\u1edbi c\u00e1c m\u1ee5c ti\u00eau chung.",
      collocations: ["express solidarity", "strengthen regional solidarity"]
    }
    ,
    {
      id: "v10-extra-foreign-relations",
      word: "foreign relations",
      partOfSpeech: "n.phr",
      meaningVi: "quan h\u1ec7 \u0111\u1ed1i ngo\u1ea1i c\u1ee7a nh\u00e0 n\u01b0\u1edbc",
      ipa: "/\u02c8f\u0252r\u0259n r\u026a\u02c8le\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=foreign+relations&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Expanding friendly foreign relations has significantly boosted foreign direct investment.",
      exampleVi: "M\u1edf r\u1ed9ng quan h\u1ec7 \u0111\u1ed1i ngo\u1ea1i h\u1eefu ngh\u1ecb \u0111\u00e3 th\u00fac \u0111\u1ea9y m\u1ea1nh m\u1ebd ngu\u1ed3n v\u1ed1n \u0111\u1ea7u t\u01b0 tr\u1ef1c ti\u1ebfp n\u01b0\u1edbc ngo\u00e0i.",
      collocations: ["conduct foreign relations", "friendly foreign relations"]
    }
    ,
    {
      id: "mega-unit-7-multilateral-diplomacy",
      word: "multilateral diplomacy",
      partOfSpeech: "n.phr",
      meaningVi: "ngo\u1ea1i giao \u0111a ph\u01b0\u01a1ng qu\u1ed1c t\u1ebf",
      ipa: "/\u02ccm\u028clti\u02c8l\u00e6t\u0259r\u0259l d\u026a\u02c8pl\u0259\u028am\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multilateral+diplomacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Viet Nam actively promotes peace and mutual stability through multilateral diplomacy.",
      exampleVi: "Vi\u1ec7t Nam t\u00edch c\u1ef1c th\u00fac \u0111\u1ea9y h\u00f2a b\u00ecnh v\u00e0 \u1ed5n \u0111\u1ecbnh khu v\u1ef1c th\u00f4ng qua n\u1ec1n ngo\u1ea1i giao \u0111a ph\u01b0\u01a1ng.",
      collocations: ["engage in multilateral diplomacy", "conduct diplomacy"]
    }
    ,
    {
      id: "mega-unit-7-peacekeeping-mission",
      word: "peacekeeping mission",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9 m\u1ec7nh g\u00ecn gi\u1eef h\u00f2a b\u00ecnh Li\u00ean H\u1ee3p Qu\u1ed1c",
      ipa: "/\u02c8pi\u02d0ski\u02d0p\u026a\u014b \u02c8m\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peacekeeping+mission&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese field hospital doctors departed on a United Nations peacekeeping mission in South Sudan.",
      exampleVi: "C\u00e1c b\u00e1c s\u0129 b\u1ec7nh vi\u1ec7n d\u00e3 chi\u1ebfn Vi\u1ec7t Nam l\u00ean \u0111\u01b0\u1eddng th\u1ef1c hi\u1ec7n s\u1ee9 m\u1ec7nh g\u00ecn gi\u1eef h\u00f2a b\u00ecnh Li\u00ean H\u1ee3p Qu\u1ed1c t\u1ea1i Nam Sudan.",
      collocations: ["deploy on a peacekeeping mission", "UN peacekeeping mission"]
    }
    ,
    {
      id: "mega-unit-7-free-trade-agreement",
      word: "free trade agreement",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7p \u0111\u1ecbnh th\u01b0\u01a1ng m\u1ea1i t\u1ef1 do",
      ipa: "/\u02ccfri\u02d0 \u02c8tre\u026ad \u0259\u02cc\u0261ri\u02d0m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=free+trade+agreement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Signing bilateral free trade agreements slashed tariffs and catalyzed manufacturing exports.",
      exampleVi: "Vi\u1ec7c k\u00fd k\u1ebft c\u00e1c hi\u1ec7p \u0111\u1ecbnh th\u01b0\u01a1ng m\u1ea1i t\u1ef1 do song ph\u01b0\u01a1ng \u0111\u00e3 c\u1eaft gi\u1ea3m thu\u1ebf quan v\u00e0 th\u00fac \u0111\u1ea9y xu\u1ea5t kh\u1ea9u s\u1ea3n xu\u1ea5t.",
      collocations: ["negotiate a free trade agreement", "ratify an agreement"]
    }
    ,
    {
      id: "mega-unit-7-strategic-partnership",
      word: "strategic partnership",
      partOfSpeech: "n.phr",
      meaningVi: "quan h\u1ec7 \u0111\u1ed1i t\u00e1c chi\u1ebfn l\u01b0\u1ee3c to\u00e0n di\u1ec7n",
      ipa: "/str\u0259\u02c8ti\u02d0d\u0292\u026ak \u02c8p\u0251\u02d0tn\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=strategic+partnership&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The two nations upgraded their ties to a comprehensive strategic partnership.",
      exampleVi: "Hai qu\u1ed1c gia \u0111\u00e3 n\u00e2ng t\u1ea7m m\u1ed1i quan h\u1ec7 l\u00ean m\u1ee9c \u0111\u1ed1i t\u00e1c chi\u1ebfn l\u01b0\u1ee3c to\u00e0n di\u1ec7n.",
      collocations: ["forge a strategic partnership", "bilateral strategic partnership"]
    }
    ,
    {
      id: "mega-unit-7-humanitarian-aid",
      word: "humanitarian aid",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7n tr\u1ee3 nh\u00e2n \u0111\u1ea1o c\u1ee9u tr\u1ee3 kh\u1ea9n c\u1ea5p",
      ipa: "/hju\u02d0\u02ccm\u00e6n\u026a\u02c8te\u0259ri\u0259n e\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=humanitarian+aid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International organizations dispatched emergency humanitarian aid following the coastal typhoon.",
      exampleVi: "C\u00e1c t\u1ed5 ch\u1ee9c qu\u1ed1c t\u1ebf \u0111\u00e3 \u0111i\u1ec1u \u0111\u1ed9ng h\u00e0ng vi\u1ec7n tr\u1ee3 nh\u00e2n \u0111\u1ea1o kh\u1ea9n c\u1ea5p sau c\u01a1n b\u00e3o \u0111\u1ed5 b\u1ed9 v\u00e0o mi\u1ec1n duy\u00ean h\u1ea3i.",
      collocations: ["deliver humanitarian aid", "provide humanitarian aid"]
    }
    ,
    {
      id: "mega-unit-7-trade-barrier",
      word: "trade barrier",
      partOfSpeech: "n.phr",
      meaningVi: "r\u00e0o c\u1ea3n b\u1ea3o h\u1ed9 th\u01b0\u01a1ng m\u1ea1i",
      ipa: "/\u02c8tre\u026ad \u02c8b\u00e6ri\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+barrier&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The WTO encourages member states to lower trade barriers and streamline customs clearances.",
      exampleVi: "T\u1ed5 ch\u1ee9c Th\u01b0\u01a1ng m\u1ea1i Th\u1ebf gi\u1edbi khuy\u1ebfn kh\u00edch c\u00e1c qu\u1ed1c gia th\u00e0nh vi\u00ean d\u1ee1 b\u1ecf r\u00e0o c\u1ea3n th\u01b0\u01a1ng m\u1ea1i v\u00e0 \u0111\u01a1n gi\u1ea3n h\u00f3a th\u1ee7 t\u1ee5c h\u1ea3i quan.",
      collocations: ["eliminate trade barriers", "impose trade barriers"]
    }
    ,
    {
      id: "mega-unit-7-sustainable-development-goals",
      word: "sustainable development goals",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c m\u1ee5c ti\u00eau ph\u00e1t tri\u1ec3n b\u1ec1n v\u1eefng c\u1ee7a LHQ",
      ipa: "/s\u0259\u02ccste\u026an\u0259bl d\u026a\u02c8vel\u0259pm\u0259nt \u0261\u0259\u028alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+development+goals&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Viet Nam is deeply committed to fulfilling the 17 UN Sustainable Development Goals by 2030.",
      exampleVi: "Vi\u1ec7t Nam cam k\u1ebft s\u00e2u s\u1eafc trong vi\u1ec7c th\u1ef1c hi\u1ec7n 17 M\u1ee5c ti\u00eau Ph\u00e1t tri\u1ec3n B\u1ec1n v\u1eefng c\u1ee7a LHQ v\u00e0o n\u0103m 2030.",
      collocations: ["achieve Sustainable Development Goals", "UN goals"]
    }
    ,
    {
      id: "mega-unit-7-bilateral-ties",
      word: "bilateral ties",
      partOfSpeech: "n.phr",
      meaningVi: "quan h\u1ec7 song ph\u01b0\u01a1ng gi\u1eefa hai n\u01b0\u1edbc",
      ipa: "/\u02ccba\u026a\u02c8l\u00e6t\u0259r\u0259l ta\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bilateral+ties&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Diplomatic delegations met in Ha Noi to foster closer bilateral ties in green energy.",
      exampleVi: "C\u00e1c ph\u00e1i \u0111o\u00e0n ngo\u1ea1i giao \u0111\u00e3 g\u1eb7p nhau t\u1ea1i H\u00e0 N\u1ed9i \u0111\u1ec3 t\u0103ng c\u01b0\u1eddng quan h\u1ec7 song ph\u01b0\u01a1ng ch\u1eb7t ch\u1ebd h\u01a1n v\u1ec1 n\u0103ng l\u01b0\u1ee3ng xanh.",
      collocations: ["deepen bilateral ties", "strengthen bilateral ties"]
    }
    ,
    {
      id: "mega-unit-7-cultural-diplomacy",
      word: "cultural diplomacy",
      partOfSpeech: "n.phr",
      meaningVi: "ngo\u1ea1i giao v\u0103n h\u00f3a qu\u1ea3ng b\u00e1 h\u00ecnh \u1ea3nh",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l d\u026a\u02c8pl\u0259\u028am\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+diplomacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Food festivals and traditional music showcases serve as prime examples of cultural diplomacy.",
      exampleVi: "C\u00e1c l\u1ec5 h\u1ed9i \u1ea9m th\u1ef1c v\u00e0 bi\u1ec3u di\u1ec5n \u00e2m nh\u1ea1c d\u00e2n t\u1ed9c \u0111\u00f3ng vai tr\u00f2 l\u00e0 v\u00ed d\u1ee5 ti\u00eau bi\u1ec3u c\u1ee7a ngo\u1ea1i giao v\u0103n h\u00f3a.",
      collocations: ["promote cultural diplomacy", "cultural exchange diplomacy"]
    }
    ,
    {
      id: "mega-unit-7-foreign-direct-investment",
      word: "foreign direct investment",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ed1n \u0111\u1ea7u t\u01b0 tr\u1ef1c ti\u1ebfp n\u01b0\u1edbc ngo\u00e0i FDI",
      ipa: "/\u02ccf\u0252r\u0259n d\u0259\u02c8rekt \u026an\u02c8vestm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=foreign+direct+investment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Competitive tax incentives and stable politics attract massive foreign direct investment.",
      exampleVi: "C\u00e1c \u01b0u \u0111\u00e3i thu\u1ebf h\u1ea5p d\u1eabn v\u00e0 ch\u00ednh tr\u1ecb \u1ed5n \u0111\u1ecbnh thu h\u00fat ngu\u1ed3n v\u1ed1n \u0111\u1ea7u t\u01b0 tr\u1ef1c ti\u1ebfp n\u01b0\u1edbc ngo\u00e0i kh\u1ed5ng l\u1ed3.",
      collocations: ["attract foreign direct investment", "inflow of investment"]
    }
    ,
    {
      id: "mega-unit-7-international-treaty",
      word: "international treaty",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec1u \u01b0\u1edbc hi\u1ec7p \u01b0\u1edbc qu\u1ed1c t\u1ebf c\u00f3 t\u00ednh r\u00e0ng bu\u1ed9c",
      ipa: "/\u02cc\u026ant\u0259\u02c8n\u00e6\u0283n\u0259l \u02c8tri\u02d0ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=international+treaty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national assembly voted overwhelmingly to ratify the climate international treaty.",
      exampleVi: "Qu\u1ed1c h\u1ed9i \u0111\u00e3 b\u1ecf phi\u1ebfu v\u1edbi \u0111a s\u1ed1 tuy\u1ec7t \u0111\u1ed1i \u0111\u1ec3 ph\u00ea chu\u1ea9n hi\u1ec7p \u01b0\u1edbc qu\u1ed1c t\u1ebf v\u1ec1 kh\u00ed h\u1eadu.",
      collocations: ["sign an international treaty", "ratify a treaty"]
    }
    ,
    {
      id: "mega-unit-7-diplomatic-envoy",
      word: "diplomatic envoy",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1i vi\u00ean ngo\u1ea1i giao \u0111\u1ea1i s\u1ee9",
      ipa: "/\u02ccd\u026apl\u0259\u02c8m\u00e6t\u026ak \u02c8env\u0254\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=diplomatic+envoy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The diplomatic envoy conveyed a message of friendship from the state president.",
      exampleVi: "V\u1ecb \u0111\u1eb7c ph\u00e1i vi\u00ean ngo\u1ea1i giao \u0111\u00e3 chuy\u1ec3n t\u1ea3i th\u00f4ng \u0111i\u1ec7p h\u1eefu ngh\u1ecb t\u1ed1t \u0111\u1eb9p t\u1eeb ch\u1ee7 t\u1ecbch n\u01b0\u1edbc.",
      collocations: ["dispatch a diplomatic envoy", "senior diplomatic envoy"]
    }
    ,
    {
      id: "mega-unit-7-global-supply-chain",
      word: "global supply chain",
      partOfSpeech: "n.phr",
      meaningVi: "chu\u1ed7i cung \u1ee9ng to\u00e0n c\u1ea7u ho\u00e1",
      ipa: "/\u02cc\u0261l\u0259\u028abl s\u0259\u02c8pla\u026a t\u0283e\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=global+supply+chain&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Viet Nam has emerged as a resilient manufacturing hub in the global supply chain.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 n\u1ed5i l\u00ean nh\u01b0 m\u1ed9t m\u1eaft x\u00edch s\u1ea3n xu\u1ea5t ki\u00ean c\u01b0\u1eddng trong chu\u1ed7i cung \u1ee9ng to\u00e0n c\u1ea7u.",
      collocations: ["integrate into the global supply chain", "disrupt the supply chain"]
    }
    ,
    {
      id: "mega-unit-7-dispute-resolution",
      word: "dispute resolution",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u1ea3i quy\u1ebft tranh ch\u1ea5p b\u1eb1ng bi\u1ec7n ph\u00e1p h\u00f2a b\u00ecnh",
      ipa: "/d\u026a\u02c8spju\u02d0t \u02ccrez\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dispute+resolution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International maritime laws provide frameworks for peaceful dispute resolution.",
      exampleVi: "Lu\u1eadt bi\u1ec3n qu\u1ed1c t\u1ebf cung c\u1ea5p c\u00e1c khung ph\u00e1p l\u00fd minh b\u1ea1ch cho vi\u1ec7c gi\u1ea3i quy\u1ebft tranh ch\u1ea5p b\u1eb1ng bi\u1ec7n ph\u00e1p h\u00f2a b\u00ecnh.",
      collocations: ["peaceful dispute resolution", "dispute resolution mechanism"]
    }
    ,
    {
      id: "mega-unit-7-world-bank",
      word: "world bank",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e2n h\u00e0ng th\u1ebf gi\u1edbi t\u00e0i tr\u1ee3 h\u1ea1 t\u1ea7ng",
      ipa: "/w\u025c\u02d0ld b\u00e6\u014bk/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=world+bank&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The World Bank funded the construction of clean water networks across the Mekong Delta.",
      exampleVi: "Ng\u00e2n h\u00e0ng Th\u1ebf gi\u1edbi \u0111\u00e3 t\u00e0i tr\u1ee3 kinh ph\u00ed x\u00e2y d\u1ef1ng c\u00e1c m\u1ea1ng l\u01b0\u1edbi n\u01b0\u1edbc s\u1ea1ch tr\u00ean kh\u1eafp v\u00f9ng \u0110\u1ed3ng b\u1eb1ng s\u00f4ng C\u1eedu Long.",
      collocations: ["funded by the World Bank", "World Bank loan"]
    }
    ,
    {
      id: "mega-unit-7-red-cross",
      word: "red cross",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9i ch\u1eef th\u1eadp \u0111\u1ecf c\u1ee9u tr\u1ee3 y t\u1ebf",
      ipa: "/red kr\u0252s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=red+cross&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Red Cross volunteers mobilized emergency food rations for inundated flood victims.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean H\u1ed9i Ch\u1eef Th\u1eadp \u0110\u1ecf \u0111\u00e3 huy \u0111\u1ed9ng kh\u1ea9u ph\u1ea7n l\u01b0\u01a1ng th\u1ef1c kh\u1ea9n c\u1ea5p cho c\u00e1c n\u1ea1n nh\u00e2n v\u00f9ng l\u0169.",
      collocations: ["volunteer with the Red Cross", "Red Cross emergency relief"]
    }
    ,
    {
      id: "mega-unit-7-non-governmental-organization",
      word: "non-governmental organization",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ed5 ch\u1ee9c phi ch\u00ednh ph\u1ee7 thi\u1ec7n nguy\u1ec7n",
      ipa: "/\u02ccn\u0252n \u02cc\u0261\u028cv\u0259n\u02c8mentl \u02cc\u0254\u02d0\u0261\u0259na\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=non-governmental+organization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Local youth work alongside an international non-governmental organization to conserve marine coral.",
      exampleVi: "Thanh ni\u00ean \u0111\u1ecba ph\u01b0\u01a1ng c\u00f9ng l\u00e0m vi\u1ec7c b\u00ean c\u1ea1nh m\u1ed9t t\u1ed5 ch\u1ee9c phi ch\u00ednh ph\u1ee7 qu\u1ed1c t\u1ebf \u0111\u1ec3 b\u1ea3o t\u1ed3n san h\u00f4 bi\u1ec3n.",
      collocations: ["join a non-governmental organization", "charitable organization"]
    }
    ,
    {
      id: "mega-unit-7-sovereign-state",
      word: "sovereign state",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ed1c gia c\u00f3 ch\u1ee7 quy\u1ec1n \u0111\u1ed9c l\u1eadp",
      ipa: "/\u02c8s\u0252vr\u026an ste\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sovereign+state&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every sovereign state has the legitimate right to safeguard its territorial integrity.",
      exampleVi: "M\u1ecdi qu\u1ed1c gia c\u00f3 ch\u1ee7 quy\u1ec1n \u0111\u1ec1u c\u00f3 quy\u1ec1n h\u1ee3p ph\u00e1p \u0111\u1ec3 b\u1ea3o v\u1ec7 to\u00e0n v\u1eb9n l\u00e3nh th\u1ed5 thi\u00eang li\u00eang c\u1ee7a m\u00ecnh.",
      collocations: ["independent sovereign state", "rights of a sovereign state"]
    }
    ,
    {
      id: "mega-unit-7-customs-clearance",
      word: "customs clearance",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ee7 t\u1ee5c th\u00f4ng quan h\u00e0ng h\u00f3a c\u1eeda kh\u1ea9u",
      ipa: "/\u02c8k\u028cst\u0259mz \u02c8kl\u026a\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=customs+clearance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital tracking platforms expedite customs clearance for perishable agricultural fruits.",
      exampleVi: "N\u1ec1n t\u1ea3ng gi\u00e1m s\u00e1t k\u1ef9 thu\u1eadt s\u1ed1 \u0111\u1ea9y nhanh th\u1ee7 t\u1ee5c th\u00f4ng quan h\u00e0ng h\u00f3a cho c\u00e1c m\u1eb7t h\u00e0ng hoa qu\u1ea3 t\u01b0\u01a1i xu\u1ea5t kh\u1ea9u.",
      collocations: ["expedite customs clearance", "customs clearance documents"]
    }
    ,
    {
      id: "mega-unit-7-joint-communique",
      word: "joint communique",
      partOfSpeech: "n.phr",
      meaningVi: "tuy\u00ean b\u1ed1 th\u00f4ng c\u00e1o chung sau h\u1ed9i ngh\u1ecb",
      ipa: "/\u02ccd\u0292\u0254\u026ant k\u0259\u02c8mju\u02d0n\u026ake\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=joint+communique&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The summit concluded with a historic joint communique outlining regional anti-pollution accords.",
      exampleVi: "H\u1ed9i ngh\u1ecb th\u01b0\u1ee3ng \u0111\u1ec9nh \u0111\u00e3 kh\u00e9p l\u1ea1i v\u1edbi b\u1ea3n th\u00f4ng c\u00e1o chung l\u1ecbch s\u1eed v\u1ea1ch ra c\u00e1c th\u1ecfa thu\u1eadn gi\u1ea3m \u00f4 nhi\u1ec5m khu v\u1ef1c.",
      collocations: ["issue a joint communique", "sign a joint communique"]
    }
    ,
    {
      id: "mega-unit-7-export-subsidy",
      word: "export subsidy",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n tr\u1ee3 c\u1ea5p khuy\u1ebfn kh\u00edch xu\u1ea5t kh\u1ea9u",
      ipa: "/\u02c8eksp\u0254\u02d0t \u02c8s\u028cbs\u0259di/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=export+subsidy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Multilateral trade rules discourage unfair export subsidies that distort market pricing.",
      exampleVi: "Quy t\u1eafc th\u01b0\u01a1ng m\u1ea1i \u0111a ph\u01b0\u01a1ng kh\u00f4ng khuy\u1ebfn kh\u00edch c\u00e1c kho\u1ea3n tr\u1ee3 c\u1ea5p xu\u1ea5t kh\u1ea9u thi\u1ebfu c\u00f4ng b\u1eb1ng g\u00e2y m\u00e9o m\u00f3 gi\u00e1 c\u1ea3 th\u1ecb tr\u01b0\u1eddng.",
      collocations: ["prohibit export subsidies", "review export subsidy"]
    }
    ,
    {
      id: "mega-unit-7-technological-transfer",
      word: "technological transfer",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ec3n giao c\u00f4ng ngh\u1ec7 t\u00e2n ti\u1ebfn",
      ipa: "/\u02cctekn\u0259\u02c8l\u0252d\u0292\u026akl tr\u00e6ns\u02c8f\u025c\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=technological+transfer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The partnership includes training modules for technological transfer in renewable wind power.",
      exampleVi: "Th\u1ecfa thu\u1eadn h\u1ee3p t\u00e1c bao g\u1ed3m c\u00e1c h\u1ecdc ph\u1ea7n \u0111\u00e0o t\u1ea1o chuy\u1ec3n giao c\u00f4ng ngh\u1ec7 trong l\u0129nh v\u1ef1c \u0111i\u1ec7n gi\u00f3 t\u00e1i t\u1ea1o.",
      collocations: ["facilitate technological transfer", "agreement on technological transfer"]
    }
    ,
    {
      id: "mega-unit-7-poverty-reduction",
      word: "poverty reduction",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng cu\u1ed9c gi\u1ea3m ngh\u00e8o b\u1ec1n v\u1eefng",
      ipa: "/\u02c8p\u0252v\u0259ti r\u026a\u02c8d\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poverty+reduction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Micro-finance initiatives have spearheaded successful poverty reduction in highland communities.",
      exampleVi: "C\u00e1c s\u00e1ng ki\u1ebfn t\u00e0i ch\u00ednh vi m\u00f4 \u0111\u00e3 d\u1eabn \u0111\u1ea7u c\u00f4ng cu\u1ed9c x\u00f3a \u0111\u00f3i gi\u1ea3m ngh\u00e8o th\u00e0nh c\u00f4ng t\u1ea1i c\u00e1c b\u1ea3n l\u00e0ng v\u00f9ng cao.",
      collocations: ["achieve poverty reduction", "national poverty reduction"]
    }
    ,
    {
      id: "mega-unit-7-cultural-exchange",
      word: "cultural exchange",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng giao l\u01b0u v\u0103n h\u00f3a qu\u1ed1c t\u1ebf",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u026aks\u02c8t\u0283e\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+exchange&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Student delegations visited Tokyo for an enriching weeklong cultural exchange program.",
      exampleVi: "C\u00e1c ph\u00e1i \u0111o\u00e0n h\u1ecdc sinh \u0111\u00e3 t\u1edbi Tokyo tham gia ch\u01b0\u01a1ng tr\u00ecnh giao l\u01b0u v\u0103n h\u00f3a \u00fd ngh\u0129a k\u00e9o d\u00e0i m\u1ed9t tu\u1ea7n.",
      collocations: ["foster cultural exchange", "bilateral cultural exchange"]
    }
    ,
    {
      id: "mega-unit-7-regional-security",
      word: "regional security",
      partOfSpeech: "n.phr",
      meaningVi: "an ninh tr\u1eadt t\u1ef1 \u1ed5n \u0111\u1ecbnh khu v\u1ef1c",
      ipa: "/\u02ccri\u02d0d\u0292\u0259nl s\u026a\u02c8kj\u028a\u0259r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=regional+security&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coordinated maritime coast guard drills preserve regional security and deter piracy.",
      exampleVi: "C\u00e1c cu\u1ed9c di\u1ec5n t\u1eadp c\u1ea3nh s\u00e1t bi\u1ec3n hi\u1ec7p \u0111\u1ed3ng gi\u00fap duy tr\u00ec an ninh khu v\u1ef1c v\u00e0 ng\u0103n ch\u1eb7n n\u1ea1n c\u01b0\u1edbp bi\u1ec3n.",
      collocations: ["safeguard regional security", "threaten regional security"]
    }
    ,
    {
      id: "mega-unit-7-general-assembly",
      word: "general assembly",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1i h\u1ed9i \u0111\u1ed3ng Li\u00ean H\u1ee3p Qu\u1ed1c",
      ipa: "/\u02ccd\u0292enr\u0259l \u0259\u02c8sembli/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=general+assembly&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "World leaders convene annually at the United Nations General Assembly in New York.",
      exampleVi: "C\u00e1c nh\u00e0 l\u00e3nh \u0111\u1ea1o th\u1ebf gi\u1edbi h\u1ecdp m\u1eb7t h\u1eb1ng n\u0103m t\u1ea1i \u0110\u1ea1i h\u1ed9i \u0111\u1ed3ng Li\u00ean H\u1ee3p Qu\u1ed1c \u1edf New York.",
      collocations: ["address the General Assembly", "vote at the General Assembly"]
    }
    ,
    {
      id: "mega-unit-7-tariff-concession",
      word: "tariff concession",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u01b0\u1ee3ng b\u1ed9 thu\u1ebf quan xu\u1ea5t nh\u1eadp kh\u1ea9u",
      ipa: "/\u02c8t\u00e6r\u026af k\u0259n\u02c8se\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tariff+concession&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Negotiators agreed on generous tariff concessions to stimulate green vehicle commerce.",
      exampleVi: "C\u00e1c nh\u00e0 \u0111\u00e0m ph\u00e1n \u0111\u00e3 \u0111\u1ed3ng \u00fd nh\u1eefng nh\u01b0\u1ee3ng b\u1ed9 thu\u1ebf quan \u01b0u \u0111\u00e3i \u0111\u1ec3 k\u00edch th\u00edch th\u01b0\u01a1ng m\u1ea1i xe \u0111i\u1ec7n th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng.",
      collocations: ["grant tariff concessions", "reciprocal tariff concessions"]
    }
    ,
    {
      id: "mega-unit-7-climate-accord",
      word: "climate accord",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ecfa \u01b0\u1edbc hi\u1ec7p \u0111\u1ecbnh qu\u1ed1c t\u1ebf v\u1ec1 kh\u00ed h\u1eadu",
      ipa: "/\u02c8kla\u026am\u0259t \u0259\u02c8k\u0254\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+accord&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Signatories reaffirmed their solemn obligations under the Paris climate accord.",
      exampleVi: "C\u00e1c b\u00ean k\u00fd k\u1ebft t\u00e1i kh\u1eb3ng \u0111\u1ecbnh ngh\u0129a v\u1ee5 trang nghi\u00eam c\u1ee7a m\u00ecnh theo hi\u1ec7p \u0111\u1ecbnh kh\u00ed h\u1eadu Paris.",
      collocations: ["comply with the climate accord", "historic climate accord"]
    }
    ,
    {
      id: "mega-unit-7-cross-border-investment",
      word: "cross-border investment",
      partOfSpeech: "n.phr",
      meaningVi: "d\u00f2ng v\u1ed1n \u0111\u1ea7u t\u01b0 xuy\u00ean bi\u00ean gi\u1edbi",
      ipa: "/\u02cckr\u0252s \u02c8b\u0254\u02d0d\u0259 \u026an\u02c8vestm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-border+investment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Simplified currency regulations spur robust cross-border investment throughout Southeast Asia.",
      exampleVi: "Quy \u0111\u1ecbnh ngo\u1ea1i h\u1ed1i \u0111\u01a1n gi\u1ea3n h\u00f3a th\u00fac \u0111\u1ea9y d\u00f2ng v\u1ed1n \u0111\u1ea7u t\u01b0 xuy\u00ean bi\u00ean gi\u1edbi m\u1ea1nh m\u1ebd kh\u1eafp \u0110\u00f4ng Nam \u00c1.",
      collocations: ["stimulate cross-border investment", "flow of investment"]
    }
    ,
    {
      id: "mega-unit-7-mutual-benefit",
      word: "mutual benefit",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ee3i \u00edch \u0111\u00f4i b\u00ean c\u00f9ng c\u00f3 l\u1ee3i",
      ipa: "/\u02ccmju\u02d0t\u0283u\u0259l \u02c8ben\u026af\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+benefit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trade partnerships flourish when built on equitable terms of mutual benefit.",
      exampleVi: "C\u00e1c m\u1ed1i quan h\u1ec7 \u0111\u1ed1i t\u00e1c th\u01b0\u01a1ng m\u1ea1i th\u0103ng hoa khi \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng tr\u00ean c\u00e1c \u0111i\u1ec1u kho\u1ea3n b\u00ecnh \u0111\u1eb3ng c\u00f9ng c\u00f3 l\u1ee3i.",
      collocations: ["principle of mutual benefit", "for mutual benefit"]
    }
  ],
  "unit-8-new-ways-to-learn": [
    {
      id: "v10-u8-blended-learning",
      word: "blended learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp k\u1ebft h\u1ee3p (tr\u1ef1c ti\u1ebfp v\u00e0 online)",
      ipa: "/\u02ccblend\u026ad \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=blended+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Blended learning combines traditional in-class lectures with interactive digital modules.",
      exampleVi: "Ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc k\u1ebft h\u1ee3p t\u00edch h\u1ee3p b\u00e0i gi\u1ea3ng tr\u00ean l\u1edbp v\u1edbi c\u00e1c b\u00e0i h\u1ecdc k\u1ef9 thu\u1eadt s\u1ed1 t\u01b0\u01a1ng t\u00e1c.",
      collocations: ["adopt blended learning", "blended learning environment"]
    },
    {
      id: "v10-u8-e-learning",
      word: "e-learning",
      partOfSpeech: "n",
      meaningVi: "h\u1ecdc tr\u1ef1c tuy\u1ebfn qua m\u1ea1ng Internet",
      ipa: "/\u02c8i\u02d0 l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=e-learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "E-learning allows busy high schoolers to review biology video lessons at their own pace.",
      exampleVi: "H\u1ecdc tr\u1ef1c tuy\u1ebfn cho ph\u00e9p h\u1ecdc sinh xem l\u1ea1i b\u00e0i gi\u1ea3ng Sinh h\u1ecdc theo t\u1ed1c \u0111\u1ed9 t\u1ef1 ch\u1ee7 c\u1ee7a ri\u00eang m\u00ecnh.",
      collocations: ["e-learning platform", "benefits of e-learning"]
    },
    {
      id: "v10-u8-interactive-whiteboard",
      word: "interactive whiteboard",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3ng t\u01b0\u01a1ng t\u00e1c th\u00f4ng minh c\u1ea3m \u1ee9ng",
      ipa: "/\u02cc\u026ant\u0259r\u02c8\u00e6kt\u026av \u02c8wa\u026atb\u0254\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interactive+whiteboard&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The teacher projected a 3D animated solar system onto the interactive whiteboard.",
      exampleVi: "Th\u1ea7y gi\u00e1o \u0111\u00e3 chi\u1ebfu h\u1ec7 m\u1eb7t tr\u1eddi m\u00f4 ph\u1ecfng 3D l\u00ean chi\u1ebfc b\u1ea3ng t\u01b0\u01a1ng t\u00e1c c\u1ea3m \u1ee9ng th\u00f4ng minh.",
      collocations: ["use an interactive whiteboard", "smart interactive whiteboard"]
    },
    {
      id: "v10-u8-virtual-classroom",
      word: "virtual classroom",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1edbp h\u1ecdc \u1ea3o tr\u00ean kh\u00f4ng gian m\u1ea1ng",
      ipa: "/\u02ccv\u025c\u02d0t\u0283u\u0259l \u02c8kl\u0251\u02d0sru\u02d0m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+classroom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students from different provinces logged into the virtual classroom for debate practice.",
      exampleVi: "H\u1ecdc sinh t\u1eeb nhi\u1ec1u t\u1ec9nh th\u00e0nh \u0111\u00e3 \u0111\u0103ng nh\u1eadp v\u00e0o l\u1edbp h\u1ecdc \u1ea3o \u0111\u1ec3 c\u00f9ng r\u00e8n luy\u1ec7n k\u1ef9 n\u0103ng tranh bi\u1ec7n.",
      collocations: ["join a virtual classroom", "interactive virtual classroom"]
    },
    {
      id: "v10-u8-self-paced",
      word: "self-paced",
      partOfSpeech: "adj",
      meaningVi: "t\u1ef1 \u0111i\u1ec1u ch\u1ec9nh t\u1ed1c \u0111\u1ed9 h\u1ecdc t\u1eadp c\u1ee7a b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02c8pe\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-paced&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Self-paced online courses allow motivated learners to finish modules ahead of schedule.",
      exampleVi: "C\u00e1c kh\u00f3a h\u1ecdc t\u1ef1 h\u1ecdc cho ph\u00e9p ng\u01b0\u1eddi h\u1ecdc n\u0103ng n\u1ed5 ho\u00e0n th\u00e0nh b\u00e0i tr\u01b0\u1edbc th\u1eddi h\u1ea1n d\u1ef1 ki\u1ebfn.",
      collocations: ["self-paced learning", "self-paced study program"]
    },
    {
      id: "v10-u8-distance-learning",
      word: "distance learning",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0o t\u1ea1o h\u1ecdc t\u1eeb xa qua k\u1ebft n\u1ed1i m\u1ea1ng",
      ipa: "/\u02c8d\u026ast\u0259ns \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=distance+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Distance learning opened access to accredited university degrees for rural students.",
      exampleVi: "H\u1ecdc t\u1eeb xa \u0111\u00e3 m\u1edf ra c\u01a1 h\u1ed9i l\u1ea5y b\u1eb1ng \u0111\u1ea1i h\u1ecdc ch\u00ednh quy cho h\u1ecdc sinh n\u00f4ng th\u00f4n.",
      collocations: ["enroll in distance learning", "distance learning program"]
    },
    {
      id: "v10-u8-digital-literacy",
      word: "digital literacy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c c\u00f4ng ngh\u1ec7 s\u1ed1 v\u00e0 k\u1ef9 n\u0103ng m\u00e1y t\u00ednh",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8l\u026at\u0259r\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+literacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools emphasize digital literacy so pupils can evaluate online information critically.",
      exampleVi: "Tr\u01b0\u1eddng h\u1ecdc ch\u00fa tr\u1ecdng n\u0103ng l\u1ef1c s\u1ed1 \u0111\u1ec3 h\u1ecdc sinh bi\u1ebft \u0111\u00e1nh gi\u00e1 th\u00f4ng tin m\u1ea1ng c\u00f3 ph\u00ea ph\u00e1n.",
      collocations: ["improve digital literacy", "essential digital literacy"]
    },
    {
      id: "v10-u8-educational-app",
      word: "educational app",
      partOfSpeech: "n.phr",
      meaningVi: "\u1ee9ng d\u1ee5ng gi\u00e1o d\u1ee5c h\u1ed7 tr\u1ee3 h\u1ecdc b\u00e0i",
      ipa: "/\u02cced\u0292u\u02c8ke\u026a\u0283\u0259nl \u00e6p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=educational+app&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using an educational app with spaced repetition helps me remember 20 new words daily.",
      exampleVi: "D\u00f9ng \u1ee9ng d\u1ee5ng gi\u00e1o d\u1ee5c l\u1eb7p l\u1ea1i ng\u1eaft qu\u00e3ng gi\u00fap t\u00f4i ghi nh\u1edb 20 t\u1eeb m\u1edbi m\u1ed7i ng\u00e0y.",
      collocations: ["download an educational app", "interactive educational app"]
    },
    {
      id: "v10-u8-online-course",
      word: "online course",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00f3a h\u1ecdc tr\u1ef1c tuy\u1ebfn tr\u00ean m\u1ea1ng",
      ipa: "/\u02c8\u0252nla\u026an k\u0254\u02d0s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+course&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He completed an online course in Python programming and earned a verified certificate.",
      exampleVi: "B\u1ea1n \u1ea5y \u0111\u00e3 ho\u00e0n th\u00e0nh kh\u00f3a h\u1ecdc Python tr\u1ef1c tuy\u1ebfn v\u00e0 nh\u1eadn \u0111\u01b0\u1ee3c ch\u1ee9ng ch\u1ec9 x\u00e1c th\u1ef1c.",
      collocations: ["take an online course", "sign up for an online course"]
    },
    {
      id: "v10-u8-mobile-learning",
      word: "mobile learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp qua thi\u1ebft b\u1ecb di \u0111\u1ed9ng (m-learning)",
      ipa: "/\u02c8m\u0259\u028aba\u026al \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mobile+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mobile learning enables quick grammar practice during commute times on the city bus.",
      exampleVi: "H\u1ecdc qua di \u0111\u1ed9ng cho ph\u00e9p \u00f4n luy\u1ec7n ng\u1eef ph\u00e1p nhanh trong l\u00fac \u0111i xe bu\u00fdt tr\u00ean \u0111\u01b0\u1eddng \u0111\u1ebfn tr\u01b0\u1eddng.",
      collocations: ["embrace mobile learning", "advantages of mobile learning"]
    },
    {
      id: "v10-u8-engagement",
      word: "engagement",
      partOfSpeech: "n",
      meaningVi: "m\u1ee9c \u0111\u1ed9 t\u1eadp trung g\u1eafn k\u1ebft v\u1edbi b\u00e0i h\u1ecdc",
      ipa: "/\u026an\u02c8\u0261e\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=engagement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Interactive quizzes dramatically increase student engagement during difficult chemistry lessons.",
      exampleVi: "C\u00e1c c\u00e2u \u0111\u1ed1 t\u01b0\u01a1ng t\u00e1c l\u00e0m t\u0103ng \u0111\u00e1ng k\u1ec3 s\u1ef1 h\u1ee9ng th\u00fa t\u1eadp trung c\u1ee7a h\u1ecdc sinh trong gi\u1edd H\u00f3a kh\u00f3 nh\u1eb1n.",
      collocations: ["student engagement", "boost engagement"]
    },
    {
      id: "v10-u8-distraction",
      word: "distraction",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 xao nh\u00e3ng, m\u1ea5t t\u1eadp trung khi h\u1ecdc",
      ipa: "/d\u026a\u02c8str\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=distraction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Social media notifications on smartphones can be a major distraction during homework.",
      exampleVi: "Th\u00f4ng b\u00e1o m\u1ea1ng x\u00e3 h\u1ed9i tr\u00ean \u0111i\u1ec7n tho\u1ea1i c\u00f3 th\u1ec3 l\u00e0 t\u00e1c nh\u00e2n g\u00e2y xao nh\u00e3ng l\u1edbn khi l\u00e0m b\u00e0i t\u1eadp.",
      collocations: ["avoid distractions", "source of distraction"]
    },
    {
      id: "v10-u8-hybrid-education",
      word: "hybrid education",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh gi\u00e1o d\u1ee5c h\u1ed7n h\u1ee3p",
      ipa: "/\u02c8ha\u026abr\u026ad \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hybrid+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many high schools adopted hybrid education models to offer flexible timetable schedules.",
      exampleVi: "Nhi\u1ec1u tr\u01b0\u1eddng THPT \u00e1p d\u1ee5ng m\u00f4 h\u00ecnh gi\u00e1o d\u1ee5c h\u1ed7n h\u1ee3p \u0111\u1ec3 \u0111em l\u1ea1i l\u1ecbch h\u1ecdc linh ho\u1ea1t.",
      collocations: ["shift to hybrid education", "flexible hybrid education"]
    },
    {
      id: "v10-u8-flipped-classroom",
      word: "flipped classroom",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh l\u1edbp h\u1ecdc \u0111\u1ea3o ng\u01b0\u1ee3c hi\u1ec7n \u0111\u1ea1i",
      ipa: "/fl\u026apt \u02c8kl\u0251\u02d0sru\u02d0m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=flipped+classroom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "In a flipped classroom, students watch video lectures at home and solve problems in class.",
      exampleVi: "Trong l\u1edbp h\u1ecdc \u0111\u1ea3o ng\u01b0\u1ee3c, h\u1ecdc sinh xem b\u00e0i gi\u1ea3ng video \u1edf nh\u00e0 v\u00e0 c\u00f9ng gi\u1ea3i b\u00e0i t\u1eadp tr\u00ean l\u1edbp.",
      collocations: ["implement a flipped classroom", "flipped classroom model"]
    },
    {
      id: "v10-u8-gamification",
      word: "gamification",
      partOfSpeech: "n",
      meaningVi: "\u1ee9ng d\u1ee5ng c\u01a1 ch\u1ebf tr\u00f2 ch\u01a1i v\u00e0o h\u1ecdc t\u1eadp",
      ipa: "/\u02cc\u0261e\u026am\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gamification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Gamification with badges and experience points makes vocabulary study addictive.",
      exampleVi: "\u1ee8ng d\u1ee5ng y\u1ebfu t\u1ed1 tr\u00f2 ch\u01a1i v\u1edbi huy hi\u1ec7u v\u00e0 \u0111i\u1ec3m kinh nghi\u1ec7m khi\u1ebfn vi\u1ec7c h\u1ecdc t\u1eeb v\u1ef1ng cu\u1ed1n h\u00fat.",
      collocations: ["gamification in education", "effective gamification"]
    },
    {
      id: "v10-u8-podcasts",
      word: "podcasts",
      partOfSpeech: "n.pl",
      meaningVi: "t\u1ec7p \u00e2m thanh b\u00e0i gi\u1ea3ng s\u1ed1 (podcast)",
      ipa: "/\u02c8p\u0252dk\u0251\u02d0sts/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=podcasts&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Listening to English history podcasts every night improves listening comprehension.",
      exampleVi: "Nghe podcast l\u1ecbch s\u1eed b\u1eb1ng ti\u1ebfng Anh m\u1ed7i t\u1ed1i gi\u00fap c\u1ea3i thi\u1ec7n ph\u1ea3n x\u1ea1 nghe hi\u1ec3u.",
      collocations: ["educational podcasts", "subscribe to a podcast"]
    },
    {
      id: "v10-u8-tablet",
      word: "tablet",
      partOfSpeech: "n",
      meaningVi: "m\u00e1y t\u00ednh b\u1ea3ng m\u1ecfng nh\u1eb9 ph\u1ee5c v\u1ee5 h\u1ecdc t\u1eadp",
      ipa: "/\u02c8t\u00e6bl\u0259t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tablet&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each pupil was issued a stylus-enabled tablet for digital note-taking and sketching.",
      exampleVi: "M\u1ed7i h\u1ecdc sinh \u0111\u01b0\u1ee3c ph\u00e1t m\u1ed9t m\u00e1y t\u00ednh b\u1ea3ng c\u00f3 b\u00fat c\u1ea3m \u1ee9ng \u0111\u1ec3 ghi ch\u00e9p v\u00e0 v\u1ebd s\u01a1 \u0111\u1ed3 t\u01b0 duy.",
      collocations: ["study on a tablet", "tablet computer"]
    },
    {
      id: "v10-u8-collaboration",
      word: "collaboration",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 h\u1ee3p t\u00e1c l\u00e0m vi\u1ec7c nh\u00f3m qua m\u1ea1ng",
      ipa: "/k\u0259\u02ccl\u00e6b\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=collaboration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cloud documents enable real-time collaboration on group research presentations.",
      exampleVi: "T\u00e0i li\u1ec7u \u0111\u00e1m m\u00e2y cho ph\u00e9p l\u00e0m vi\u1ec7c nh\u00f3m th\u1eddi gian th\u1ef1c tr\u00ean c\u00e1c b\u00e0i thuy\u1ebft tr\u00ecnh nghi\u00ean c\u1ee9u.",
      collocations: ["online collaboration", "collaborative project"]
    },
    {
      id: "v10-u8-critical-thinking",
      word: "critical thinking",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 duy ph\u1ea3n bi\u1ec7n logic s\u00e2u s\u1eafc",
      ipa: "/\u02cckr\u026at\u026akl \u02c8\u03b8\u026a\u014bk\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=critical+thinking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Debating in online forums sharpens students' analytical and critical thinking skills.",
      exampleVi: "Tranh bi\u1ec7n tr\u00ean c\u00e1c di\u1ec5n \u0111\u00e0n r\u00e8n s\u1eafc b\u00e9n t\u01b0 duy ph\u00e2n t\u00edch v\u00e0 ph\u1ea3n bi\u1ec7n c\u1ee7a h\u1ecdc sinh.",
      collocations: ["develop critical thinking", "foster critical thinking"]
    },
    {
      id: "v10-u8-digital-footprint",
      word: "digital footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u v\u1ebft s\u1ed1 l\u01b0u l\u1ea1i tr\u00ean Internet",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students are reminded to safeguard their digital footprint when posting comments.",
      exampleVi: "H\u1ecdc sinh \u0111\u01b0\u1ee3c nh\u1eafc nh\u1edf ph\u1ea3i gi\u1eef g\u00ecn d\u1ea5u v\u1ebft s\u1ed1 c\u1ee7a m\u00ecnh c\u1ea9n th\u1eadn khi b\u00ecnh lu\u1eadn tr\u00ean m\u1ea1ng.",
      collocations: ["positive digital footprint", "manage your digital footprint"]
    },
    {
      id: "v10-u8-interactive-software",
      word: "interactive software",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ea7n m\u1ec1m h\u1ecdc t\u1eadp t\u01b0\u01a1ng t\u00e1c cao",
      ipa: "/\u02cc\u026ant\u0259r\u02c8\u00e6kt\u026av \u02c8s\u0252ftwe\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interactive+software&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The biology interactive software allows students to virtually dissect virtual specimens.",
      exampleVi: "Ph\u1ea7n m\u1ec1m sinh h\u1ecdc t\u01b0\u01a1ng t\u00e1c cho ph\u00e9p h\u1ecdc sinh ph\u1eabu t\u00edch m\u1eabu v\u1eadt \u1ea3o tr\u00ean m\u00e0n h\u00ecnh.",
      collocations: ["install interactive software", "use interactive software"]
    },
    {
      id: "v10-u8-virtual-lab",
      word: "virtual lab",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00f2ng th\u00ed nghi\u1ec7m m\u00f4 ph\u1ecfng \u1ea3o",
      ipa: "/\u02ccv\u025c\u02d0t\u0283u\u0259l l\u00e6b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+lab&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Virtual labs give high schoolers safe environments to simulate volatile chemical reactions.",
      exampleVi: "Ph\u00f2ng th\u00ed nghi\u1ec7m \u1ea3o t\u1ea1o m\u00f4i tr\u01b0\u1eddng an to\u00e0n \u0111\u1ec3 h\u1ecdc sinh m\u00f4 ph\u1ecfng c\u00e1c ph\u1ea3n \u1ee9ng h\u00f3a h\u1ecdc d\u1ec5 n\u1ed5.",
      collocations: ["conduct experiments in a virtual lab", "interactive virtual lab"]
    },
    {
      id: "v10-u8-plagiarism",
      word: "plagiarism",
      partOfSpeech: "n",
      meaningVi: "h\u00e0nh vi \u0111\u1ea1o v\u0103n, sao ch\u00e9p tr\u00e1i ph\u00e9p",
      ipa: "/\u02c8ple\u026ad\u0292\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=plagiarism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Plagiarism checkers automatically scan student essays against millions of web pages.",
      exampleVi: "Ph\u1ea7n m\u1ec1m ki\u1ec3m tra \u0111\u1ea1o v\u0103n t\u1ef1 \u0111\u1ed9ng qu\u00e9t b\u00e0i lu\u1eadn c\u1ee7a h\u1ecdc sinh \u0111\u1ed1i chi\u1ebfu v\u1edbi h\u00e0ng tri\u1ec7u trang web.",
      collocations: ["avoid plagiarism", "commit plagiarism"]
    },
    {
      id: "v10-u8-personalized-learning",
      word: "personalized learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp c\u00e1 nh\u00e2n h\u00f3a theo n\u0103ng l\u1ef1c",
      ipa: "/\u02c8p\u025c\u02d0s\u0259n\u0259la\u026azd \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=personalized+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "AI algorithms curate personalized learning paths targeting each student's weaknesses.",
      exampleVi: "Thu\u1eadt to\u00e1n AI x\u00e2y d\u1ef1ng l\u1ed9 tr\u00ecnh h\u1ecdc t\u1eadp c\u00e1 nh\u00e2n h\u00f3a kh\u1eafc ph\u1ee5c \u0111\u00fang \u0111i\u1ec3m y\u1ebfu c\u1ee7a t\u1eebng h\u1ecdc tr\u00f2.",
      collocations: ["personalized learning pathway", "benefits of personalized learning"]
    },
    {
      id: "v10-u8-spaced-repetition",
      word: "spaced repetition",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ph\u00e1p l\u1eb7p l\u1ea1i ng\u1eaft qu\u00e3ng khoa h\u1ecdc",
      ipa: "/spe\u026ast \u02ccrep\u0259\u02c8t\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=spaced+repetition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using flashcard apps with spaced repetition ensures long-term retention of vocabulary.",
      exampleVi: "S\u1eed d\u1ee5ng flashcard v\u1edbi ph\u01b0\u01a1ng ph\u00e1p l\u1eb7p l\u1ea1i ng\u1eaft qu\u00e3ng \u0111\u1ea3m b\u1ea3o ghi nh\u1edb t\u1eeb v\u1ef1ng l\u00e2u d\u00e0i.",
      collocations: ["spaced repetition system (SRS)", "spaced repetition algorithm"]
    },
    {
      id: "v10-u8-screen-time",
      word: "screen time",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eddi gian nh\u00ecn m\u00e0n h\u00ecnh thi\u1ebft b\u1ecb s\u1ed1",
      ipa: "/\u02c8skri\u02d0n ta\u026am/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=screen+time&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Health experts advise taking regular five-minute eye breaks to curb excessive screen time.",
      exampleVi: "Chuy\u00ean gia s\u1ee9c kh\u1ecfe khuy\u00ean n\u00ean ngh\u1ec9 ng\u01a1i m\u1eaft 5 ph\u00fat \u0111\u1ecbnh k\u1ef3 \u0111\u1ec3 h\u1ea1n ch\u1ebf th\u1eddi gian nh\u00ecn m\u00e0n h\u00ecnh.",
      collocations: ["limit screen time", "excessive screen time"]
    },
    {
      id: "v10-u8-autonomous-learning",
      word: "autonomous learning",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c t\u1ef1 h\u1ecdc t\u1ef1 ch\u1ee7",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fostering autonomous learning empowers students to seek knowledge outside school walls.",
      exampleVi: "R\u00e8n luy\u1ec7n n\u0103ng l\u1ef1c t\u1ef1 h\u1ecdc gi\u00fap h\u1ecdc sinh ch\u1ee7 \u0111\u1ed9ng t\u00ecm ki\u1ebfm ki\u1ebfn th\u1ee9c v\u01b0\u1ee3t ngo\u00e0i s\u00e1ch v\u1edf.",
      collocations: ["encourage autonomous learning", "autonomous learning skills"]
    },
    {
      id: "v10-u8-mind-mapping",
      word: "mind mapping",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 thu\u1eadt v\u1ebd s\u01a1 \u0111\u1ed3 t\u01b0 duy li\u00ean k\u1ebft",
      ipa: "/\u02c8ma\u026and m\u00e6p\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mind+mapping&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital mind mapping software helps students visualize links between complex concepts.",
      exampleVi: "Ph\u1ea7n m\u1ec1m v\u1ebd s\u01a1 \u0111\u1ed3 t\u01b0 duy gi\u00fap h\u1ecdc sinh h\u00ecnh dung r\u00f5 r\u00e0ng m\u1ed1i li\u00ean h\u1ec7 gi\u1eefa c\u00e1c kh\u00e1i ni\u1ec7m.",
      collocations: ["mind mapping tool", "create a mind map"]
    },
    {
      id: "v10-u8-search-engine",
      word: "search engine",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng c\u1ee5 tra c\u1ee9u t\u00ecm ki\u1ebfm tr\u00ean web",
      ipa: "/\u02c8s\u025c\u02d0t\u0283 \u02c8end\u0292\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=search+engine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Knowing how to use search engine operators yields accurate academic citations faster.",
      exampleVi: "Bi\u1ebft d\u00f9ng c\u00e1c to\u00e1n t\u1eed t\u00ecm ki\u1ebfm gi\u00fap h\u1ecdc sinh thu th\u1eadp tr\u00edch d\u1eabn h\u1ecdc thu\u1eadt nhanh v\u00e0 chu\u1ea9n x\u00e1c h\u01a1n.",
      collocations: ["search engine query", "popular search engine"]
    },
    {
      id: "v10-u8-cyber-safety",
      word: "cyber safety",
      partOfSpeech: "n.phr",
      meaningVi: "an to\u00e0n tr\u00ean kh\u00f4ng gian m\u1ea1ng",
      ipa: "/\u02c8sa\u026ab\u0259 \u02c8se\u026afti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cyber+safety&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools organize monthly workshops to teach pupils cyber safety and password protection.",
      exampleVi: "Tr\u01b0\u1eddng h\u1ecdc t\u1ed5 ch\u1ee9c c\u00e1c bu\u1ed5i chuy\u00ean \u0111\u1ec1 h\u00e0ng th\u00e1ng \u0111\u1ec3 d\u1ea1y h\u1ecdc sinh v\u1ec1 an to\u00e0n m\u1ea1ng v\u00e0 b\u1ea3o m\u1eadt m\u1eadt kh\u1ea9u.",
      collocations: ["practice cyber safety", "cyber safety guidelines"]
    },
    {
      id: "v10-u8-digital-distraction",
      word: "digital distraction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1ea5t t\u1eadp trung v\u00ec thi\u1ebft b\u1ecb c\u00f4ng ngh\u1ec7",
      ipa: "/\u02c8d\u026ad\u0292\u026atl d\u026a\u02c8str\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+distraction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using website blockers during study sessions effectively cuts out digital distractions.",
      exampleVi: "Ch\u1eb7n c\u00e1c trang web gi\u1ea3i tr\u00ed trong l\u00fac h\u1ecdc gi\u00fap tri\u1ec7t ti\u00eau s\u1ef1 m\u1ea5t t\u1eadp trung do thi\u1ebft b\u1ecb s\u1ed1.",
      collocations: ["resist digital distractions", "overcome digital distraction"]
    },
    {
      id: "v10-u8-instant-feedback",
      word: "instant feedback",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ea3n h\u1ed3i ch\u1ea5m \u0111i\u1ec3m ngay t\u1ee9c th\u00ec",
      ipa: "/\u02c8\u026anst\u0259nt \u02c8fi\u02d0db\u00e6k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=instant+feedback&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Online grammar tests provide instant feedback with detailed explanation of mistakes.",
      exampleVi: "B\u00e0i thi ng\u1eef ph\u00e1p tr\u1ef1c tuy\u1ebfn \u0111em l\u1ea1i k\u1ebft qu\u1ea3 ph\u1ea3n h\u1ed3i t\u1ee9c th\u00ec c\u00f9ng l\u1eddi gi\u1ea3i th\u00edch chi ti\u1ebft cho t\u1eebng l\u1ed7i sai.",
      collocations: ["receive instant feedback", "provide instant feedback"]
    },
    {
      id: "v10-u8-retention",
      word: "retention",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng ghi nh\u1edb v\u00e0 l\u01b0u gi\u1eef ki\u1ebfn th\u1ee9c",
      ipa: "/r\u026a\u02c8ten\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=retention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Active recall study techniques produce far higher memory retention than passive re-reading.",
      exampleVi: "Ph\u01b0\u01a1ng ph\u00e1p ch\u1ee7 \u0111\u1ed9ng g\u1ee3i nh\u1edb mang l\u1ea1i t\u1ef7 l\u1ec7 ghi nh\u1edb ki\u1ebfn th\u1ee9c v\u01b0\u1ee3t tr\u1ed9i so v\u1edbi \u0111\u1ecdc l\u1ea1i th\u1ee5 \u0111\u1ed9ng.",
      collocations: ["long-term retention", "memory retention rate"]
    },
    {
      id: "v10-u8-discussion-board",
      word: "discussion board",
      partOfSpeech: "n.phr",
      meaningVi: "di\u1ec5n \u0111\u00e0n trao \u0111\u1ed5i th\u1ea3o lu\u1eadn tr\u1ef1c tuy\u1ebfn",
      ipa: "/d\u026a\u02c8sk\u028c\u0283n b\u0254\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=discussion+board&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The class discussion board allows students to post tricky homework questions for peers.",
      exampleVi: "Di\u1ec5n \u0111\u00e0n th\u1ea3o lu\u1eadn c\u1ee7a l\u1edbp cho ph\u00e9p h\u1ecdc sinh \u0111\u0103ng c\u00e1c c\u00e2u h\u1ecfi kh\u00f3 \u0111\u1ec3 c\u00f9ng b\u1ea1n b\u00e8 gi\u1ea3i \u0111\u00e1p.",
      collocations: ["post on the discussion board", "class discussion board"]
    },
    {
      id: "v10-u8-multimedia",
      word: "multimedia",
      partOfSpeech: "n / adj",
      meaningVi: "\u0111a ph\u01b0\u01a1ng ti\u1ec7n k\u1ebft h\u1ee3p \u00e2m thanh h\u00ecnh \u1ea3nh",
      ipa: "/\u02ccm\u028clti\u02c8mi\u02d0di\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multimedia&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using multimedia presentations helps communicate scientific concepts persuasively.",
      exampleVi: "D\u00f9ng b\u00e0i thuy\u1ebft tr\u00ecnh \u0111a ph\u01b0\u01a1ng ti\u1ec7n gi\u00fap truy\u1ec1n \u0111\u1ea1t c\u00e1c kh\u00e1i ni\u1ec7m khoa h\u1ecdc \u0111\u1ea7y thuy\u1ebft ph\u1ee5c.",
      collocations: ["multimedia content", "interactive multimedia"]
    }
    ,
    {
      id: "v10-extra-online-tutorial",
      word: "online tutorial",
      partOfSpeech: "n.phr",
      meaningVi: "video h\u01b0\u1edbng d\u1eabn h\u1ecdc tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02c8\u0252nla\u026an tju\u02d0\u02c8t\u0254\u02d0ri\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+tutorial&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students watch online tutorials to master tricky geometry theorems at home.",
      exampleVi: "H\u1ecdc sinh xem c\u00e1c video h\u01b0\u1edbng d\u1eabn tr\u1ef1c tuy\u1ebfn \u0111\u1ec3 \u00f4n l\u1ea1i c\u00e1c \u0111\u1ecbnh l\u00fd h\u00ecnh h\u1ecdc kh\u00f3 \u1edf nh\u00e0.",
      collocations: ["watch an online tutorial", "helpful online tutorial"]
    }
    ,
    {
      id: "v10-extra-screen-recorder",
      word: "screen recorder",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ea7n m\u1ec1m quay m\u00e0n h\u00ecnh b\u00e0i gi\u1ea3ng",
      ipa: "/skri\u02d0n r\u026a\u02c8k\u0254\u02d0d\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=screen+recorder&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The teacher uses a screen recorder to save computer science code demonstrations.",
      exampleVi: "Th\u1ea7y gi\u00e1o d\u00f9ng ph\u1ea7n m\u1ec1m quay m\u00e0n h\u00ecnh \u0111\u1ec3 l\u01b0u l\u1ea1i c\u00e1c \u0111o\u1ea1n m\u1eabu vi\u1ebft m\u00e3 tin h\u1ecdc.",
      collocations: ["use a screen recorder", "screen recorder app"]
    }
    ,
    {
      id: "v10-extra-digital-quiz",
      word: "digital quiz",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e0i tr\u1eafc nghi\u1ec7m ki\u1ec3m tra s\u1ed1",
      ipa: "/\u02c8d\u026ad\u0292\u026atl kw\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+quiz&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Playing a digital quiz at the end of class reinforces key grammar lessons funly.",
      exampleVi: "Ch\u01a1i tr\u00f2 \u0111\u1ed1 vui tr\u1eafc nghi\u1ec7m tr\u1ef1c tuy\u1ebfn cu\u1ed1i gi\u1edd gi\u00fap c\u1ee7ng c\u1ed1 ng\u1eef ph\u00e1p r\u1ea5t vui v\u1ebb.",
      collocations: ["take a digital quiz", "create a digital quiz"]
    }
    ,
    {
      id: "v10-extra-microlearning",
      word: "microlearning",
      partOfSpeech: "n",
      meaningVi: "h\u1ecdc theo t\u1eebng m\u1ea9u ki\u1ebfn th\u1ee9c ng\u1eafn (5 ph\u00fat)",
      ipa: "/\u02c8ma\u026akr\u0259\u028a\u02ccl\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=microlearning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Microlearning modules allow busy pupils to study English in short five-minute breaks.",
      exampleVi: "H\u1ecdc vi m\u00f4 cho ph\u00e9p h\u1ecdc sinh tranh th\u1ee7 h\u1ecdc ti\u1ebfng Anh trong nh\u1eefng gi\u1edd gi\u1ea3i lao 5 ph\u00fat.",
      collocations: ["benefits of microlearning", "microlearning technique"]
    }
    ,
    {
      id: "v10-extra-flashcard",
      word: "flashcard",
      partOfSpeech: "n",
      meaningVi: "th\u1ebb h\u1ecdc t\u1eeb v\u1ef1ng hai m\u1eb7t th\u00f4ng minh",
      ipa: "/\u02c8fl\u00e6\u0283k\u0251\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=flashcard&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Digital flashcards prompt your memory with images, pronunciation, and examples.",
      exampleVi: "Th\u1ebb t\u1eeb v\u1ef1ng s\u1ed1 g\u1ee3i nh\u1edb cho b\u1ea1n v\u1edbi h\u00ecnh \u1ea3nh, ph\u00e1t \u00e2m v\u00e0 c\u00e2u v\u00ed d\u1ee5.",
      collocations: ["study with flashcards", "vocabulary flashcard"]
    }
    ,
    {
      id: "v10-extra-remote-study",
      word: "remote study",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp t\u1eeb xa qua m\u00e1y t\u00ednh",
      ipa: "/r\u026a\u02c8m\u0259\u028at \u02c8st\u028cdi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=remote+study&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Remote study demands high self-motivation and quiet study corners at home.",
      exampleVi: "H\u1ecdc t\u1eeb xa \u0111\u00f2i h\u1ecfi tinh th\u1ea7n t\u1ef1 gi\u00e1c cao v\u00e0 m\u1ed9t g\u00f3c h\u1ecdc t\u1eadp y\u00ean t\u0129nh \u1edf nh\u00e0.",
      collocations: ["manage remote study", "effective remote study"]
    }
    ,
    {
      id: "v10-extra-digital-note-taking",
      word: "digital note-taking",
      partOfSpeech: "n.phr",
      meaningVi: "ghi ch\u00e9p b\u00e0i gi\u1ea3ng tr\u00ean thi\u1ebft b\u1ecb s\u1ed1",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u02c8n\u0259\u028at te\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+note-taking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stylus pens on tablets make digital note-taking neat, colorful, and searchable.",
      exampleVi: "B\u00fat c\u1ea3m \u1ee9ng tr\u00ean m\u00e1y t\u00ednh b\u1ea3ng gi\u00fap vi\u1ec7c ghi ch\u00e9p s\u1ed1 g\u1ecdn g\u00e0ng, \u0111\u1eb9p m\u1eaft v\u00e0 d\u1ec5 t\u00ecm ki\u1ebfm.",
      collocations: ["practice digital note-taking", "apps for digital note-taking"]
    }
    ,
    {
      id: "v10-extra-peer-review",
      word: "peer review",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ea5m ch\u00e9o v\u00e0 g\u00f3p \u00fd b\u00e0i l\u00e0m cho b\u1ea1n",
      ipa: "/\u02c8p\u026a\u0259 r\u026a\u02ccvju\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+review&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Peer review helps classmates learn from each other's writing techniques.",
      exampleVi: "Ch\u1ea5m ch\u00e9o gi\u00fap c\u00e1c b\u1ea1n c\u00f9ng l\u1edbp h\u1ecdc h\u1ecfi l\u1eabn nhau v\u1ec1 k\u1ef9 n\u0103ng h\u00e0nh v\u0103n.",
      collocations: ["conduct peer review", "valuable peer review"]
    }
    ,
    {
      id: "v10-extra-audiobook",
      word: "audiobook",
      partOfSpeech: "n",
      meaningVi: "s\u00e1ch n\u00f3i nghe tr\u00ean \u0111i\u1ec7n tho\u1ea1i",
      ipa: "/\u02c8\u0254\u02d0di\u0259\u028ab\u028ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=audiobook&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Listening to literature audiobooks while walking improves literary comprehension.",
      exampleVi: "Nghe s\u00e1ch n\u00f3i t\u00e1c ph\u1ea9m v\u0103n h\u1ecdc trong l\u00fac \u0111i d\u1ea1o gi\u00fap th\u1ea9m th\u1ea5u b\u00e0i v\u0103n hay h\u01a1n.",
      collocations: ["listen to an audiobook", "narrate an audiobook"]
    }
    ,
    {
      id: "v10-extra-virtual-whiteboarding",
      word: "virtual whiteboarding",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ebd b\u1ea3ng tr\u1eafng t\u01b0\u01a1ng t\u00e1c nh\u00f3m tr\u00ean m\u1ea1ng",
      ipa: "/\u02c8v\u025c\u02d0t\u0283u\u0259l \u02c8wa\u026atb\u0254\u02d0d\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+whiteboarding&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Team members brainstorm physics project diagrams using virtual whiteboarding.",
      exampleVi: "C\u1ea3 nh\u00f3m c\u00f9ng l\u00ean \u00fd t\u01b0\u1edfng s\u01a1 \u0111\u1ed3 d\u1ef1 \u00e1n V\u1eadt l\u00fd b\u1eb1ng b\u1ea3ng tr\u1eafng \u1ea3o tr\u00ean m\u1ea1ng.",
      collocations: ["use virtual whiteboarding", "collaborative whiteboarding"]
    }
    ,
    {
      id: "v10-extra-study-group",
      word: "study group",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00f3m h\u1ecdc t\u1eadp c\u00f9ng ti\u1ebfn",
      ipa: "/\u02c8st\u028cdi \u0261ru\u02d0p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=study+group&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Joining an online study group keeps classmates accountable for math problem sets.",
      exampleVi: "Tham gia nh\u00f3m h\u1ecdc t\u1eadp tr\u1ef1c tuy\u1ebfn gi\u00fap c\u00e1c b\u1ea1n nh\u1eafc nh\u1edf nhau l\u00e0m b\u00e0i t\u1eadp to\u00e1n \u0111\u1ea7y \u0111\u1ee7.",
      collocations: ["form a study group", "weekly study group"]
    }
    ,
    {
      id: "v10-extra-interactive-simulation",
      word: "interactive simulation",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 ph\u1ecfng t\u01b0\u01a1ng t\u00e1c th\u00ed nghi\u1ec7m",
      ipa: "/\u02cc\u026ant\u0259r\u02c8\u00e6kt\u026av \u02ccs\u026amju\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interactive+simulation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Chemistry interactive simulations allow safe visualization of molecular bonding.",
      exampleVi: "M\u00f4 ph\u1ecfng t\u01b0\u01a1ng t\u00e1c m\u00f4n H\u00f3a gi\u00fap quan s\u00e1t tr\u1ef1c quan li\u00ean k\u1ebft ph\u00e2n t\u1eed m\u1ed9t c\u00e1ch an to\u00e0n.",
      collocations: ["run an interactive simulation", "science interactive simulations"]
    }
    ,
    {
      id: "mega-unit-8-blended-learning",
      word: "blended learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp k\u1ebft h\u1ee3p tr\u1ef1c ti\u1ebfp v\u00e0 tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02ccblend\u026ad \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=blended+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Blended learning merges classroom peer interaction with flexible online self-paced modules.",
      exampleVi: "H\u1ecdc t\u1eadp k\u1ebft h\u1ee3p h\u00f2a quy\u1ec7n gi\u1eefa t\u01b0\u01a1ng t\u00e1c tr\u1ef1c ti\u1ebfp tr\u00ean l\u1edbp v\u00e0 c\u00e1c m\u00f4-\u0111un t\u1ef1 h\u1ecdc tr\u1ef1c tuy\u1ebfn linh ho\u1ea1t.",
      collocations: ["adopt blended learning", "blended learning environment"]
    }
    ,
    {
      id: "mega-unit-8-flipped-classroom",
      word: "flipped classroom",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1edbp h\u1ecdc \u0111\u1ea3o ng\u01b0\u1ee3c h\u1ecdc tr\u00f2 chu\u1ea9n b\u1ecb tr\u01b0\u1edbc \u1edf nh\u00e0",
      ipa: "/\u02ccfl\u026apt \u02c8kl\u0251\u02d0sru\u02d0m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=flipped+classroom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "In a flipped classroom, students absorb video lectures at home and solve problems together in class.",
      exampleVi: "Trong m\u00f4 h\u00ecnh l\u1edbp h\u1ecdc \u0111\u1ea3o ng\u01b0\u1ee3c, h\u1ecdc sinh xem b\u00e0i gi\u1ea3ng video \u1edf nh\u00e0 v\u00e0 c\u00f9ng gi\u1ea3i quy\u1ebft b\u00e0i t\u1eadp tr\u00ean l\u1edbp.",
      collocations: ["implement a flipped classroom", "flipped classroom model"]
    }
    ,
    {
      id: "mega-unit-8-gamification",
      word: "gamification",
      partOfSpeech: "n",
      meaningVi: "tr\u00f2 ch\u01a1i h\u00f3a h\u1ecdc t\u1eadp \u0111\u1ec3 t\u0103ng h\u1ee9ng th\u00fa",
      ipa: "/\u02cc\u0261e\u026am\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gamification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educational apps leverage gamification through badges, streaks, and leaderboards to keep students engaged.",
      exampleVi: "C\u00e1c \u1ee9ng d\u1ee5ng gi\u00e1o d\u1ee5c t\u1eadn d\u1ee5ng y\u1ebfu t\u1ed1 tr\u00f2 ch\u01a1i h\u00f3a qua huy hi\u1ec7u, chu\u1ed7i h\u1ecdc v\u00e0 b\u1ea3ng x\u1ebfp h\u1ea1ng \u0111\u1ec3 gi\u1eef ch\u00e2n ng\u01b0\u1eddi h\u1ecdc.",
      collocations: ["apply gamification", "gamification in education"]
    }
    ,
    {
      id: "mega-unit-8-adaptive-learning",
      word: "adaptive learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp th\u00edch \u1ee9ng t\u1ef1 \u0111i\u1ec1u ch\u1ec9nh \u0111\u1ed9 kh\u00f3",
      ipa: "/\u0259\u02ccd\u00e6pt\u026av \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptive+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adaptive learning software automatically adjusts quiz difficulty based on individual student mastery.",
      exampleVi: "Ph\u1ea7n m\u1ec1m h\u1ecdc th\u00edch \u1ee9ng t\u1ef1 \u0111\u1ed9ng \u0111i\u1ec1u ch\u1ec9nh \u0111\u1ed9 kh\u00f3 c\u1ee7a c\u00e2u h\u1ecfi d\u1ef1a tr\u00ean m\u1ee9c \u0111\u1ed9 n\u1eafm v\u1eefng b\u00e0i c\u1ee7a t\u1eebng h\u1ecdc sinh.",
      collocations: ["powered by adaptive learning", "adaptive learning platform"]
    }
    ,
    {
      id: "mega-unit-8-digital-literacy",
      word: "digital literacy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c c\u00f4ng ngh\u1ec7 v\u00e0 hi\u1ec3u bi\u1ebft k\u1ef9 thu\u1eadt s\u1ed1",
      ipa: "/\u02ccd\u026ad\u0292\u026atl \u02c8l\u026at\u0259r\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+literacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern curricula emphasize digital literacy so students can discern authentic facts from fake news.",
      exampleVi: "Ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc hi\u1ec7n \u0111\u1ea1i nh\u1ea5n m\u1ea1nh n\u0103ng l\u1ef1c s\u1ed1 \u0111\u1ec3 h\u1ecdc sinh ph\u00e2n bi\u1ec7t \u0111\u01b0\u1ee3c th\u00f4ng tin x\u00e1c th\u1ef1c v\u1edbi tin gi\u1ea3.",
      collocations: ["foster digital literacy", "essential digital literacy"]
    }
    ,
    {
      id: "mega-unit-8-virtual-classroom",
      word: "virtual classroom",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1edbp h\u1ecdc \u1ea3o qua m\u1ea1ng internet",
      ipa: "/\u02ccv\u025c\u02d0t\u0283u\u0259l \u02c8kl\u0251\u02d0sru\u02d0m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=virtual+classroom&type=2",
      imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teachers and students connect seamlessly in high-definition virtual classrooms during remote sessions.",
      exampleVi: "Gi\u00e1o vi\u00ean v\u00e0 h\u1ecdc sinh k\u1ebft n\u1ed1i li\u1ec1n m\u1ea1ch trong c\u00e1c l\u1edbp h\u1ecdc \u1ea3o \u0111\u1ed9 n\u00e9t cao su\u1ed1t c\u00e1c bu\u1ed5i h\u1ecdc t\u1eeb xa.",
      collocations: ["enter the virtual classroom", "virtual classroom features"]
    }
    ,
    {
      id: "mega-unit-8-collaborative-workspace",
      word: "collaborative workspace",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00f4ng gian l\u00e0m vi\u1ec7c nh\u00f3m tr\u1ef1c tuy\u1ebfn",
      ipa: "/k\u0259\u02ccl\u00e6b\u0259r\u0259t\u026av \u02c8w\u025c\u02d0kspe\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=collaborative+workspace&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Shared cloud whiteboards serve as a collaborative workspace for brainstorming capstone projects.",
      exampleVi: "B\u1ea3ng tr\u1eafng \u0111i\u1ec7n to\u00e1n \u0111\u00e1m m\u00e2y \u0111\u00f3ng vai tr\u00f2 nh\u01b0 kh\u00f4ng gian l\u00e0m vi\u1ec7c nh\u00f3m cho vi\u1ec7c l\u00ean \u00fd t\u01b0\u1edfng d\u1ef1 \u00e1n kh\u00f3a lu\u1eadn.",
      collocations: ["join a collaborative workspace", "online collaborative workspace"]
    }
    ,
    {
      id: "mega-unit-8-microlearning",
      word: "microlearning",
      partOfSpeech: "n",
      meaningVi: "h\u1ecdc theo t\u1eebng m\u1ea9u ki\u1ebfn th\u1ee9c ng\u1eafn 3-5 ph\u00fat",
      ipa: "/\u02c8ma\u026akr\u0259\u028al\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=microlearning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Busy professionals prefer microlearning bite-sized video lessons during daily transit commutes.",
      exampleVi: "Nh\u1eefng ng\u01b0\u1eddi b\u1eadn r\u1ed9n \u01b0a chu\u1ed9ng ph\u01b0\u01a1ng ph\u00e1p h\u1ecdc vi m\u00f4 v\u1edbi c\u00e1c b\u00e0i h\u1ecdc ng\u1eafn v\u00e0i ph\u00fat tr\u00ean \u0111\u01b0\u1eddng \u0111i l\u00e0m.",
      collocations: ["utilize microlearning", "microlearning strategy"]
    }
    ,
    {
      id: "mega-unit-8-self-directed-learning",
      word: "self-directed learning",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n t\u1ef1 h\u1ecdc t\u1ef1 ch\u1ee7 \u0111\u1ecbnh h\u01b0\u1edbng",
      ipa: "/\u02ccself d\u0259\u02c8rekt\u026ad \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-directed+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "University courses require strong self-directed learning habits to complete independent research.",
      exampleVi: "C\u00e1c kh\u00f3a h\u1ecdc \u0111\u1ea1i h\u1ecdc \u0111\u00f2i h\u1ecfi th\u00f3i quen t\u1ef1 h\u1ecdc t\u1ef1 ch\u1ee7 cao \u0111\u1ec3 ho\u00e0n th\u00e0nh c\u00e1c \u0111\u1ec1 t\u00e0i nghi\u00ean c\u1ee9u \u0111\u1ed9c l\u1eadp.",
      collocations: ["encourage self-directed learning", "master self-directed learning"]
    }
    ,
    {
      id: "mega-unit-8-open-educational-resources",
      word: "open educational resources",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e0i nguy\u00ean gi\u00e1o d\u1ee5c m\u1edf mi\u1ec5n ph\u00ed",
      ipa: "/\u02cc\u0259\u028ap\u0259n \u02cced\u0292u\u02c8ke\u026a\u0283\u0259nl r\u026a\u02c8s\u0254\u02d0s\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=open+educational+resources&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Top universities publish open educational resources including textbooks and full lecture recordings.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc h\u00e0ng \u0111\u1ea7u c\u00f4ng b\u1ed1 ngu\u1ed3n t\u00e0i nguy\u00ean gi\u00e1o d\u1ee5c m\u1edf g\u1ed3m s\u00e1ch gi\u00e1o tr\u00ecnh v\u00e0 to\u00e0n b\u1ed9 video b\u00e0i gi\u1ea3ng.",
      collocations: ["access open educational resources", "download free resources"]
    }
    ,
    {
      id: "mega-unit-8-learning-management-system",
      word: "learning management system",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng qu\u1ea3n l\u00fd h\u1ecdc t\u1eadp tr\u1ef1c tuy\u1ebfn LMS",
      ipa: "/\u02c8l\u025c\u02d0n\u026a\u014b \u02c8m\u00e6n\u026ad\u0292m\u0259nt \u02c8s\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=learning+management+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students submit assignments and track grade rubrics through the school's learning management system.",
      exampleVi: "H\u1ecdc sinh n\u1ed9p b\u00e0i t\u1eadp v\u00e0 theo d\u00f5i bi\u1ec3u \u0111i\u1ec3m \u0111\u00e1nh gi\u00e1 th\u00f4ng qua h\u1ec7 th\u1ed1ng qu\u1ea3n l\u00fd h\u1ecdc t\u1eadp c\u1ee7a nh\u00e0 tr\u01b0\u1eddng.",
      collocations: ["log in to the learning management system", "deploy an LMS"]
    }
    ,
    {
      id: "mega-unit-8-interactive-whiteboard",
      word: "interactive whiteboard",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3ng t\u01b0\u01a1ng t\u00e1c th\u00f4ng minh c\u1ea3m \u1ee9ng",
      ipa: "/\u02cc\u026ant\u0259r\u02c8\u00e6kt\u026av \u02c8wa\u026atb\u0254\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interactive+whiteboard&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The instructor dragged digital geometry shapes across the large interactive whiteboard.",
      exampleVi: "Gi\u00e1o vi\u00ean k\u00e9o th\u1ea3 c\u00e1c h\u00ecnh h\u1ecdc k\u1ef9 thu\u1eadt s\u1ed1 tr\u00ean t\u1ea5m b\u1ea3ng c\u1ea3m \u1ee9ng t\u01b0\u01a1ng t\u00e1c th\u00f4ng minh c\u1ee1 l\u1edbn.",
      collocations: ["write on the interactive whiteboard", "smart whiteboard"]
    }
    ,
    {
      id: "mega-unit-8-peer-assessment",
      word: "peer assessment",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng ch\u1ea5m \u0111i\u1ec3m \u0111\u00e1nh gi\u00e1 \u0111\u1ed3ng \u0111\u1eb3ng",
      ipa: "/\u02ccp\u026a\u0259r \u0259\u02c8sesm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+assessment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Peer assessment allows students to analyze classmates' essays and gain diverse stylistic perspectives.",
      exampleVi: "\u0110\u00e1nh gi\u00e1 \u0111\u1ed3ng \u0111\u1eb3ng cho ph\u00e9p h\u1ecdc sinh ph\u00e2n t\u00edch b\u00e0i lu\u1eadn c\u1ee7a b\u1ea1n c\u00f9ng l\u1edbp v\u00e0 ti\u1ebfp thu nhi\u1ec1u g\u00f3c nh\u00ecn h\u00e0nh v\u0103n \u0111a d\u1ea1ng.",
      collocations: ["conduct peer assessment", "rubric for peer assessment"]
    }
    ,
    {
      id: "mega-unit-8-formative-feedback",
      word: "formative feedback",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1eadn x\u00e9t ph\u1ea3n h\u1ed3i mang t\u00ednh x\u00e2y d\u1ef1ng k\u1ecbp th\u1eddi",
      ipa: "/\u02c8f\u0254\u02d0m\u0259t\u026av \u02c8fi\u02d0db\u00e6k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=formative+feedback&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Timely formative feedback guides learners in rectifying conceptual errors before final exams.",
      exampleVi: "Ph\u1ea3n h\u1ed3i \u0111\u1ecbnh h\u00ecnh k\u1ecbp th\u1eddi gi\u00fap ng\u01b0\u1eddi h\u1ecdc kh\u1eafc ph\u1ee5c c\u00e1c l\u1ed7i sai kh\u00e1i ni\u1ec7m tr\u01b0\u1edbc k\u1ef3 thi cu\u1ed1i k\u1ef3.",
      collocations: ["receive formative feedback", "provide constructive feedback"]
    }
    ,
    {
      id: "mega-unit-8-podcast-lecture",
      word: "podcast lecture",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e0i gi\u1ea3ng \u00e2m thanh podcast ti\u1ec7n l\u1ee3i",
      ipa: "/\u02c8p\u0252dk\u0251\u02d0st \u02c8lekt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=podcast+lecture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Linguistics students listen to historical podcast lectures during their afternoon walk.",
      exampleVi: "Sinh vi\u00ean ng\u00e0nh ng\u00f4n ng\u1eef h\u1ecdc nghe c\u00e1c b\u00e0i gi\u1ea3ng podcast l\u1ecbch s\u1eed trong l\u00fac \u0111i d\u1ea1o bu\u1ed5i chi\u1ec1u.",
      collocations: ["listen to podcast lectures", "subscribe to lectures"]
    }
    ,
    {
      id: "mega-unit-8-online-forum",
      word: "online forum",
      partOfSpeech: "n.phr",
      meaningVi: "di\u1ec5n \u0111\u00e0n h\u1ecfi \u0111\u00e1p th\u1ea3o lu\u1eadn tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02c8\u0252nla\u026an \u02c8f\u0254\u02d0r\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=online+forum&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students post coding bug queries on the course online forum for community feedback.",
      exampleVi: "H\u1ecdc sinh \u0111\u0103ng t\u1ea3i c\u00e2u h\u1ecfi l\u1ed7i l\u1eadp tr\u00ecnh l\u00ean di\u1ec5n \u0111\u00e0n tr\u1ef1c tuy\u1ebfn c\u1ee7a kh\u00f3a h\u1ecdc \u0111\u1ec3 nh\u1eadn tr\u1ee3 gi\u00fap t\u1eeb c\u1ed9ng \u0111\u1ed3ng.",
      collocations: ["participate in an online forum", "post on the forum"]
    }
    ,
    {
      id: "mega-unit-8-asynchronous-learning",
      word: "asynchronous learning",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc t\u1eadp kh\u00f4ng \u0111\u1ed3ng b\u1ed9 t\u1ef1 ch\u1ecdn th\u1eddi gian",
      ipa: "/e\u026a\u02c8s\u026a\u014bkr\u0259n\u0259s \u02c8l\u025c\u02d0n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=asynchronous+learning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Asynchronous learning lets overseas students view recorded seminars at times that fit their time zones.",
      exampleVi: "H\u1ecdc t\u1eadp kh\u00f4ng \u0111\u1ed3ng b\u1ed9 cho ph\u00e9p sinh vi\u00ean qu\u1ed1c t\u1ebf xem l\u1ea1i c\u00e1c bu\u1ed5i h\u1ed9i th\u1ea3o \u0111\u00e3 ghi h\u00ecnh v\u00e0o khung gi\u1edd ph\u00f9 h\u1ee3p v\u1edbi m\u00fai gi\u1edd c\u1ee7a m\u00ecnh.",
      collocations: ["benefit from asynchronous learning", "asynchronous courses"]
    }
    ,
    {
      id: "mega-unit-8-synchronous-session",
      word: "synchronous session",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i h\u1ecdc tr\u1ef1c tuy\u1ebfn tr\u1ef1c ti\u1ebfp c\u00f9ng gi\u1edd",
      ipa: "/\u02c8s\u026a\u014bkr\u0259n\u0259s \u02c8se\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=synchronous+session&type=2",
      imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Attendance is mandatory during weekly synchronous sessions for oral debate practice.",
      exampleVi: "\u0110i\u1ec3m danh l\u00e0 b\u1eaft bu\u1ed9c trong c\u00e1c bu\u1ed5i h\u1ecdc tr\u1ef1c tuy\u1ebfn \u0111\u1ed3ng th\u1eddi h\u1eb1ng tu\u1ea7n \u0111\u1ec3 luy\u1ec7n t\u1eadp tranh bi\u1ec7n n\u00f3i.",
      collocations: ["join a synchronous session", "live synchronous session"]
    }
    ,
    {
      id: "mega-unit-8-spaced-repetition",
      word: "spaced repetition",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 thu\u1eadt l\u1eb7p l\u1ea1i ng\u1eaft qu\u00e3ng \u0111\u1ec3 ghi nh\u1edb s\u00e2u",
      ipa: "/\u02ccspe\u026ast \u02ccrep\u0259\u02c8t\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=spaced+repetition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Flashcard algorithms rely on spaced repetition intervals to anchor words into long-term memory.",
      exampleVi: "Thu\u1eadt to\u00e1n flashcard d\u1ef1a tr\u00ean kho\u1ea3ng c\u00e1ch l\u1eb7p l\u1ea1i ng\u1eaft qu\u00e3ng \u0111\u1ec3 kh\u1eafc s\u00e2u t\u1eeb v\u1ef1ng v\u00e0o tr\u00ed nh\u1edb d\u00e0i h\u1ea1n.",
      collocations: ["practice spaced repetition", "spaced repetition algorithm"]
    }
    ,
    {
      id: "mega-unit-8-active-recall",
      word: "active recall",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee7 \u0111\u1ed9ng truy xu\u1ea5t g\u1ee3i nh\u1edb ki\u1ebfn th\u1ee9c",
      ipa: "/\u02cc\u00e6kt\u026av r\u026a\u02c8k\u0254\u02d0l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=active+recall&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Testing yourself with flashcards practices active recall far more effectively than passive rereading.",
      exampleVi: "T\u1ef1 ki\u1ec3m tra b\u1eb1ng flashcard k\u00edch ho\u1ea1t vi\u1ec7c ch\u1ee7 \u0111\u1ed9ng nh\u1edb l\u1ea1i hi\u1ec7u qu\u1ea3 h\u01a1n nhi\u1ec1u so v\u1edbi vi\u1ec7c ch\u1ec9 \u0111\u1ecdc l\u1ea1i th\u1ee5 \u0111\u1ed9ng.",
      collocations: ["employ active recall", "active recall study method"]
    }
    ,
    {
      id: "mega-unit-8-mind-mapping",
      word: "mind mapping",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ebd s\u01a1 \u0111\u1ed3 t\u01b0 duy h\u1ec7 th\u1ed1ng h\u00f3a ki\u1ebfn th\u1ee9c",
      ipa: "/\u02c8ma\u026and m\u00e6p\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mind+mapping&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mind mapping aids visual learners in establishing conceptual links between historical events.",
      exampleVi: "V\u1ebd s\u01a1 \u0111\u1ed3 t\u01b0 duy gi\u00fap ng\u01b0\u1eddi h\u1ecdc tr\u1ef1c quan thi\u1ebft l\u1eadp c\u00e1c m\u1ed1i li\u00ean k\u1ebft kh\u00e1i ni\u1ec7m gi\u1eefa c\u00e1c s\u1ef1 ki\u1ec7n l\u1ecbch s\u1eed.",
      collocations: ["utilize mind mapping", "mind mapping software"]
    }
    ,
    {
      id: "mega-unit-8-plagiarism-checker",
      word: "plagiarism checker",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng c\u1ee5 qu\u00e9t ph\u00e1t hi\u1ec7n \u0111\u1ea1o v\u0103n sao ch\u00e9p",
      ipa: "/\u02c8ple\u026ad\u0292\u0259r\u026az\u0259m \u02c8t\u0283ek\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=plagiarism+checker&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university requires every term paper to pass through a digital plagiarism checker.",
      exampleVi: "Tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc y\u00eau c\u1ea7u m\u1ecdi b\u00e0i ti\u1ec3u lu\u1eadn m\u00f4n h\u1ecdc ph\u1ea3i \u0111\u01b0\u1ee3c qu\u00e9t qua c\u00f4ng c\u1ee5 ph\u00e1t hi\u1ec7n sao ch\u00e9p \u0111\u1ea1o v\u0103n s\u1ed1.",
      collocations: ["run through a plagiarism checker", "detect plagiarism"]
    }
    ,
    {
      id: "mega-unit-8-webinar",
      word: "webinar",
      partOfSpeech: "n",
      meaningVi: "h\u1ed9i th\u1ea3o chuy\u00ean \u0111\u1ec1 h\u1ecdc thu\u1eadt tr\u1ef1c tuy\u1ebfn",
      ipa: "/\u02c8web\u026an\u0251\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=webinar&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Renowned linguists hosted a live webinar demonstrating corpus analysis methodologies.",
      exampleVi: "C\u00e1c nh\u00e0 ng\u00f4n ng\u1eef h\u1ecdc danh ti\u1ebfng \u0111\u00e3 t\u1ed5 ch\u1ee9c m\u1ed9t bu\u1ed5i h\u1ed9i th\u1ea3o tr\u1ef1c tuy\u1ebfn tr\u00ecnh di\u1ec5n ph\u01b0\u01a1ng ph\u00e1p ph\u00e2n t\u00edch kho ng\u1eef li\u1ec7u.",
      collocations: ["register for a webinar", "attend an academic webinar"]
    }
    ,
    {
      id: "mega-unit-8-knowledge-retention",
      word: "knowledge retention",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng l\u01b0u gi\u1eef ghi nh\u1edb ki\u1ebfn th\u1ee9c l\u00e2u d\u00e0i",
      ipa: "/\u02c8n\u0252l\u026ad\u0292 r\u026a\u02c8ten\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=knowledge+retention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hands-on science experiments yield substantially higher knowledge retention than lectures.",
      exampleVi: "C\u00e1c th\u00ed nghi\u1ec7m khoa h\u1ecdc th\u1ef1c h\u00e0nh mang l\u1ea1i kh\u1ea3 n\u0103ng ghi nh\u1edb ki\u1ebfn th\u1ee9c cao h\u01a1n \u0111\u00e1ng k\u1ec3 so v\u1edbi vi\u1ec7c ch\u1ec9 nghe gi\u1ea3ng.",
      collocations: ["boost knowledge retention", "long-term retention"]
    }
    ,
    {
      id: "mega-unit-8-digital-distraction",
      word: "digital distraction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 xao nh\u00e3ng m\u1ea5t t\u1eadp trung do thi\u1ebft b\u1ecb s\u1ed1",
      ipa: "/\u02ccd\u026ad\u0292\u026atl d\u026a\u02c8str\u00e6k\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+distraction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Turning off phone notifications minimizes digital distraction during intense revision hours.",
      exampleVi: "T\u1eaft th\u00f4ng b\u00e1o \u0111i\u1ec7n tho\u1ea1i gi\u00fap gi\u1ea3m thi\u1ec3u s\u1ef1 xao nh\u00e3ng do thi\u1ebft b\u1ecb s\u1ed1 trong nh\u1eefng gi\u1edd \u00f4n thi c\u0103ng th\u1eb3ng.",
      collocations: ["eliminate digital distraction", "susceptible to distraction"]
    }
    ,
    {
      id: "mega-unit-8-critical-thinking",
      word: "critical thinking",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 duy ph\u1ea3n bi\u1ec7n ph\u00e2n t\u00edch l\u1eadp lu\u1eadn",
      ipa: "/\u02cckr\u026at\u026akl \u02c8\u03b8\u026a\u014bk\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=critical+thinking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Debate clubs nurture critical thinking by examining issues from multiple dialectical angles.",
      exampleVi: "C\u00e2u l\u1ea1c b\u1ed9 tranh bi\u1ec7n nu\u00f4i d\u01b0\u1ee1ng t\u01b0 duy ph\u1ea3n bi\u1ec7n b\u1eb1ng c\u00e1ch xem x\u00e9t c\u00e1c v\u1ea5n \u0111\u1ec1 t\u1eeb nhi\u1ec1u g\u00f3c \u0111\u1ed9 bi\u1ec7n ch\u1ee9ng.",
      collocations: ["sharpen critical thinking", "critical thinking skills"]
    }
    ,
    {
      id: "mega-unit-8-personalized-instruction",
      word: "personalized instruction",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ph\u00e1p gi\u1ea3ng d\u1ea1y c\u00e1 nh\u00e2n h\u00f3a",
      ipa: "/\u02c8p\u025c\u02d0s\u0259n\u0259la\u026azd \u026an\u02c8str\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=personalized+instruction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "AI tutors deliver personalized instruction targeted specifically at a student's weak concepts.",
      exampleVi: "Gia s\u01b0 AI mang \u0111\u1ebfn ph\u01b0\u01a1ng ph\u00e1p gi\u1ea3ng d\u1ea1y c\u00e1 nh\u00e2n h\u00f3a nh\u1eafm tr\u00fang c\u00e1c kh\u00e1i ni\u1ec7m h\u1ecdc sinh c\u00f2n y\u1ebfu.",
      collocations: ["offer personalized instruction", "tailor instruction"]
    }
    ,
    {
      id: "mega-unit-8-digital-credential",
      word: "digital credential",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng ch\u1ec9 s\u1ed1 x\u00e1c th\u1ef1c b\u1eb1ng blockchain",
      ipa: "/\u02ccd\u026ad\u0292\u026atl kr\u0259\u02c8den\u0283l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+credential&type=2",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Completing the coding bootcamp awards a verifiable digital credential for LinkedIn.",
      exampleVi: "Ho\u00e0n th\u00e0nh kh\u00f3a l\u1eadp tr\u00ecnh c\u1ea5p ch\u1ee9ng ch\u1ec9 s\u1ed1 c\u00f3 th\u1ec3 x\u00e1c th\u1ef1c tr\u1ef1c ti\u1ebfp tr\u00ean h\u1ed3 s\u01a1 LinkedIn.",
      collocations: ["earn a digital credential", "issue digital credentials"]
    }
    ,
    {
      id: "mega-unit-8-screen-fatigue",
      word: "screen fatigue",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1ec7t m\u1ecfi th\u1ecb gi\u00e1c do nh\u00ecn m\u00e0n h\u00ecnh l\u00e2u",
      ipa: "/skri\u02d0n f\u0259\u02c8ti\u02d0\u0261/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=screen+fatigue&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing the 20-20-20 rule mitigates acute eye strain and screen fatigue.",
      exampleVi: "\u00c1p d\u1ee5ng quy t\u1eafc 20-20-20 gi\u00fap l\u00e0m d\u1ecbu c\u1ea3m gi\u00e1c m\u1ecfi m\u1eaft v\u00e0 m\u1ec7t m\u1ecfi th\u1ecb gi\u00e1c do nh\u00ecn m\u00e0n h\u00ecnh m\u00e1y t\u00ednh qu\u00e1 l\u00e2u.",
      collocations: ["suffer from screen fatigue", "prevent screen fatigue"]
    }
    ,
    {
      id: "mega-unit-8-lifelong-learner",
      word: "lifelong learner",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi kh\u00f4ng ng\u1eebng h\u1ecdc t\u1eadp su\u1ed1t \u0111\u1eddi",
      ipa: "/\u02ccla\u026afl\u0252\u014b \u02c8l\u025c\u02d0n\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifelong+learner&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The digital era demands every professional to be an adaptable, proactive lifelong learner.",
      exampleVi: "K\u1ef7 nguy\u00ean s\u1ed1 \u0111\u00f2i h\u1ecfi m\u1ed7i ng\u01b0\u1eddi \u0111i l\u00e0m ph\u1ea3i l\u00e0 m\u1ed9t ng\u01b0\u1eddi ham h\u1ecdc h\u1ecfi su\u1ed1t \u0111\u1eddi c\u00f3 kh\u1ea3 n\u0103ng th\u00edch \u1ee9ng linh ho\u1ea1t.",
      collocations: ["become a lifelong learner", "spirit of a lifelong learner"]
    }
    ,
    {
      id: "mega-unit-8-multimedia-presentation",
      word: "multimedia presentation",
      partOfSpeech: "n.phr",
      meaningVi: "b\u00e0i thuy\u1ebft tr\u00ecnh \u0111a ph\u01b0\u01a1ng ti\u1ec7n k\u1ebft h\u1ee3p \u00e2m thanh h\u00ecnh \u1ea3nh",
      ipa: "/\u02ccm\u028clti\u02c8mi\u02d0di\u0259 \u02ccprezn\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multimedia+presentation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students crafted a vivid multimedia presentation incorporating video clips and audio quotes.",
      exampleVi: "H\u1ecdc sinh \u0111\u00e3 s\u00e1ng t\u1ea1o m\u1ed9t b\u00e0i thuy\u1ebft tr\u00ecnh \u0111a ph\u01b0\u01a1ng ti\u1ec7n sinh \u0111\u1ed9ng k\u1ebft h\u1ee3p c\u00e1c \u0111o\u1ea1n video v\u00e0 tr\u00edch d\u1eabn \u00e2m thanh.",
      collocations: ["deliver a multimedia presentation", "multimedia presentation slides"]
    }
  ],
  "unit-9-protecting-the-environment": [
    {
      id: "v10-u9-endangered-species",
      word: "endangered species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i \u0111\u1ed9ng th\u1ef1c v\u1eadt c\u00f3 nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng",
      ipa: "/\u026an\u02ccde\u026and\u0292\u0259d \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endangered+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Javan rhinoceros is one of the world's most critically endangered species.",
      exampleVi: "T\u00ea gi\u00e1c Java l\u00e0 m\u1ed9t trong nh\u1eefng lo\u00e0i c\u00f3 nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng nguy c\u1ea5p nh\u1ea5t tr\u00ean th\u1ebf gi\u1edbi.",
      collocations: ["protect endangered species", "critically endangered species"]
    },
    {
      id: "v10-u9-habitat-loss",
      word: "habitat loss",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea5t m\u00f4i tr\u01b0\u1eddng s\u1ed1ng t\u1ef1 nhi\u00ean c\u1ee7a sinh v\u1eadt",
      ipa: "/\u02c8h\u00e6b\u026at\u00e6t l\u0252s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=habitat+loss&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Urban sprawl and industrial expansion are the primary drivers of wildlife habitat loss.",
      exampleVi: "\u0110\u00f4 th\u1ecb h\u00f3a t\u1ef1 ph\u00e1t v\u00e0 m\u1edf r\u1ed9ng c\u00f4ng nghi\u1ec7p l\u00e0 nguy\u00ean nh\u00e2n ch\u00ednh g\u00e2y m\u1ea5t m\u00f4i tr\u01b0\u1eddng s\u1ed1ng hoang d\u00e3.",
      collocations: ["suffer habitat loss", "threatened by habitat loss"]
    },
    {
      id: "v10-u9-poaching",
      word: "poaching",
      partOfSpeech: "n",
      meaningVi: "n\u1ea1n s\u0103n b\u1eaft \u0111\u1ed9ng v\u1eadt tr\u00e1i ph\u00e9p",
      ipa: "/\u02c8p\u0259\u028at\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poaching&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strict ranger patrols are deployed to combat elephant poaching in national parks.",
      exampleVi: "L\u1ef1c l\u01b0\u1ee3ng ki\u1ec3m l\u00e2m \u0111\u01b0\u1ee3c tri\u1ec3n khai tu\u1ea7n tra nghi\u00eam ng\u1eb7t \u0111\u1ec3 ch\u1ed1ng n\u1ea1n s\u0103n tr\u1ed9m voi \u1edf v\u01b0\u1eddn qu\u1ed1c gia.",
      collocations: ["combat illegal poaching", "poaching ring"]
    },
    {
      id: "v10-u9-nature-reserve",
      word: "nature reserve",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean nghi\u00eam ng\u1eb7t",
      ipa: "/\u02c8ne\u026at\u0283\u0259 r\u026a\u02ccz\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+reserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cuc Phuong is the oldest nature reserve and national park in Vietnam.",
      exampleVi: "C\u00fac Ph\u01b0\u01a1ng l\u00e0 khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean v\u00e0 v\u01b0\u1eddn qu\u1ed1c gia l\u00e2u \u0111\u1eddi nh\u1ea5t t\u1ea1i Vi\u1ec7t Nam.",
      collocations: ["visit a nature reserve", "establish a nature reserve"]
    },
    {
      id: "v10-u9-marine-pollution",
      word: "marine pollution",
      partOfSpeech: "n.phr",
      meaningVi: "\u00f4 nhi\u1ec5m m\u00f4i tr\u01b0\u1eddng bi\u1ec3n \u0111\u1ea1i d\u01b0\u01a1ng",
      ipa: "/m\u0259\u02c8ri\u02d0n p\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marine+pollution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Discarded nylon fishing nets contribute dangerously to marine pollution.",
      exampleVi: "L\u01b0\u1edbi \u0111\u00e1nh c\u00e1 b\u1eb1ng nylon b\u1ecb v\u1ee9t b\u1ecf g\u00e2y t\u00e1c h\u1ea1i nguy hi\u1ec3m cho t\u00ecnh tr\u1ea1ng \u00f4 nhi\u1ec5m bi\u1ec3n.",
      collocations: ["combat marine pollution", "tackle marine pollution"]
    },
    {
      id: "v10-u9-reforestation",
      word: "reforestation",
      partOfSpeech: "n",
      meaningVi: "tr\u1ed3ng l\u1ea1i r\u1eebng, t\u00e1i sinh th\u1ea3m th\u1ef1c v\u1eadt",
      ipa: "/\u02ccri\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community volunteers planted ten thousand mangrove seedlings for coastal reforestation.",
      exampleVi: "T\u00ecnh nguy\u1ec7n vi\u00ean \u0111\u00e3 tr\u1ed3ng m\u01b0\u1eddi ng\u00e0n c\u00e2y \u0111\u01b0\u1edbc con \u0111\u1ec3 t\u00e1i t\u1ea1o r\u1eebng ph\u00f2ng h\u1ed9 ven bi\u1ec3n.",
      collocations: ["reforestation project", "coastal reforestation"]
    },
    {
      id: "v10-u9-illegal-wildlife-trade",
      word: "illegal wildlife trade",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u00f4n b\u00e1n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 tr\u00e1i ph\u00e9p",
      ipa: "/\u026a\u02c8li\u02d0\u0261l \u02c8wa\u026aldla\u026af tre\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=illegal+wildlife+trade&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International police cracked down on a transnational illegal wildlife trade syndicate.",
      exampleVi: "C\u1ea3nh s\u00e1t qu\u1ed1c t\u1ebf \u0111\u00e3 tri\u1ec7t ph\u00e1 m\u1ed9t \u0111\u01b0\u1eddng d\u00e2y bu\u00f4n b\u00e1n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 xuy\u00ean qu\u1ed1c gia.",
      collocations: ["clamp down on illegal wildlife trade", "halt the wildlife trade"]
    },
    {
      id: "v10-u9-extinction",
      word: "extinction",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 tuy\u1ec7t ch\u1ee7ng ho\u00e0n to\u00e0n c\u1ee7a m\u1ed9t lo\u00e0i",
      ipa: "/\u026ak\u02c8st\u026a\u014bk\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extinction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Without immediate intervention, the rare saola species faces irreversible extinction.",
      exampleVi: "N\u1ebfu kh\u00f4ng c\u00f3 can thi\u1ec7p t\u1ee9c th\u00ec, lo\u00e0i sao la qu\u00fd hi\u1ebfm s\u1ebd \u0111\u1ed1i m\u1eb7t v\u1edbi nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng v\u0129nh vi\u1ec5n.",
      collocations: ["verge of extinction", "threat of extinction"]
    },
    {
      id: "v10-u9-coral-bleaching",
      word: "coral bleaching",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng san h\u00f4 b\u1ecb t\u1ea9y tr\u1eafng v\u00ec n\u01b0\u1edbc n\u00f3ng",
      ipa: "/\u02c8k\u0252r\u0259l \u02c8bli\u02d0t\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=coral+bleaching&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rising sea water temperatures trigger widespread coral bleaching across coastal reefs.",
      exampleVi: "Nhi\u1ec7t \u0111\u1ed9 n\u01b0\u1edbc bi\u1ec3n t\u0103ng cao g\u00e2y ra hi\u1ec7n t\u01b0\u1ee3ng san h\u00f4 b\u1ecb t\u1ea9y tr\u1eafng tr\u00ean di\u1ec7n r\u1ed9ng \u1edf c\u00e1c r\u1ea1n san h\u00f4.",
      collocations: ["suffer from coral bleaching", "mass coral bleaching"]
    },
    {
      id: "v10-u9-carbon-offset",
      word: "carbon offset",
      partOfSpeech: "n.phr",
      meaningVi: "bi\u1ec7n ph\u00e1p b\u00f9 tr\u1eeb l\u01b0\u1ee3ng ph\u00e1t th\u1ea3i carbon",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8\u0252fset/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+offset&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Airlines encourage flyers to purchase carbon offset credits to fund tree planting.",
      exampleVi: "H\u00e3ng bay khuy\u1ebfn kh\u00edch h\u00e0nh kh\u00e1ch mua t\u00edn ch\u1ec9 b\u00f9 tr\u1eeb carbon \u0111\u1ec3 t\u00e0i tr\u1ee3 cho vi\u1ec7c tr\u1ed3ng c\u00e2y xanh.",
      collocations: ["invest in carbon offsets", "carbon offset program"]
    },
    {
      id: "v10-u9-conservation",
      word: "conservation",
      partOfSpeech: "n",
      meaningVi: "c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean v\u00e0 lo\u00e0i v\u1eadt",
      ipa: "/\u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wildlife conservation initiatives have succeeded in doubling tiger populations.",
      exampleVi: "C\u00e1c s\u00e1ng ki\u1ebfn b\u1ea3o t\u1ed3n \u0111\u1ed9ng v\u1eadt hoang d\u00e3 \u0111\u00e3 th\u00e0nh c\u00f4ng trong vi\u1ec7c nh\u00e2n \u0111\u00f4i s\u1ed1 l\u01b0\u1ee3ng c\u00e1 th\u1ec3 h\u1ed5.",
      collocations: ["wildlife conservation", "environmental conservation"]
    },
    {
      id: "v10-u9-sanctuary",
      word: "sanctuary",
      partOfSpeech: "n",
      meaningVi: "khu b\u1ea3o t\u1ed3n c\u1ee9u h\u1ed9 an to\u00e0n cho \u0111\u1ed9ng v\u1eadt",
      ipa: "/\u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The moon bear sanctuary cares for rescued animals that were saved from bile farms.",
      exampleVi: "Khu b\u1ea3o t\u1ed3n g\u1ea5u ch\u0103m s\u00f3c c\u00e1c c\u00e1 th\u1ec3 g\u1ea5u \u0111\u01b0\u1ee3c gi\u1ea3i c\u1ee9u kh\u1ecfi c\u00e1c trang tr\u1ea1i nu\u00f4i l\u1ea5y m\u1eadt.",
      collocations: ["wildlife sanctuary", "bird sanctuary"]
    },
    {
      id: "v10-u9-contamination",
      word: "contamination",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 l\u00e0m b\u1ea9n, nhi\u1ec5m \u0111\u1ed9c \u0111\u1ed9c t\u1ed1",
      ipa: "/k\u0259n\u02cct\u00e6m\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=contamination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fertilizer runoff causes heavy toxic contamination in municipal reservoirs.",
      exampleVi: "N\u01b0\u1edbc r\u1eeda tr\u00f4i ph\u00e2n b\u00f3n h\u00f3a h\u1ecdc g\u00e2y nhi\u1ec5m \u0111\u1ed9c n\u1eb7ng cho c\u00e1c h\u1ed3 ch\u1ee9a n\u01b0\u1edbc c\u1ee7a th\u00e0nh ph\u1ed1.",
      collocations: ["chemical contamination", "soil contamination"]
    },
    {
      id: "v10-u9-pesticide",
      word: "pesticide",
      partOfSpeech: "n",
      meaningVi: "thu\u1ed1c tr\u1eeb s\u00e2u h\u00f3a h\u1ecdc \u0111\u1ed9c h\u1ea1i",
      ipa: "/\u02c8pest\u026asa\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pesticide&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Excessive pesticide usage harms pollinating bees and alters the food chain.",
      exampleVi: "D\u00f9ng thu\u1ed1c tr\u1eeb s\u00e2u qu\u00e1 m\u1ee9c g\u00e2y h\u1ea1i cho ong th\u1ee5 ph\u1ea5n v\u00e0 l\u00e0m bi\u1ebfn \u0111\u1ed5i chu\u1ed7i th\u1ee9c \u0103n.",
      collocations: ["chemical pesticide", "spray pesticides"]
    },
    {
      id: "v10-u9-depletion",
      word: "depletion",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 suy gi\u1ea3m c\u1ea1n ki\u1ec7t ngu\u1ed3n t\u00e0i nguy\u00ean",
      ipa: "/d\u026a\u02c8pli\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=depletion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unchecked groundwater depletion threatens rice cultivation in the Mekong Delta.",
      exampleVi: "T\u00ecnh tr\u1ea1ng c\u1ea1n ki\u1ec7t n\u01b0\u1edbc ng\u1ea7m kh\u00f4ng ki\u1ec3m so\u00e1t \u0111e d\u1ecda vi\u1ec7c tr\u1ed3ng l\u00faa t\u1ea1i \u0111\u1ed3ng b\u1eb1ng s\u00f4ng C\u1eedu Long.",
      collocations: ["depletion of resources", "ozone layer depletion"]
    },
    {
      id: "v10-u9-biodiversity-hotspot",
      word: "biodiversity hotspot",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m n\u00f3ng \u0111a d\u1ea1ng sinh h\u1ecdc qu\u00fd gi\u00e1",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02c8h\u0252tsp\u0252t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+hotspot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Annamite Range is celebrated globally as a prime biodiversity hotspot.",
      exampleVi: "D\u00e3y Tr\u01b0\u1eddng S\u01a1n \u0111\u01b0\u1ee3c qu\u1ed1c t\u1ebf vinh danh l\u00e0 m\u1ed9t \u0111i\u1ec3m n\u00f3ng \u0111a d\u1ea1ng sinh h\u1ecdc h\u00e0ng \u0111\u1ea7u.",
      collocations: ["protect biodiversity hotspots", "global biodiversity hotspot"]
    },
    {
      id: "v10-u9-native-species",
      word: "native species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i b\u1ea3n \u0111\u1ecba c\u1ee7a m\u1ed9t v\u00f9ng \u0111\u1ea5t",
      ipa: "/\u02c8ne\u026at\u026av \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=native+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Planting native species prevents foreign weeds from dominating gardens.",
      exampleVi: "Tr\u1ed3ng c\u00e1c lo\u00e0i c\u00e2y b\u1ea3n \u0111\u1ecba gi\u00fap ng\u0103n ch\u1eb7n c\u1ecf d\u1ea1i ngo\u1ea1i lai x\u00e2m l\u1ea5n khu v\u01b0\u1eddn.",
      collocations: ["preserve native species", "indigenous native species"]
    },
    {
      id: "v10-u9-invasive-species",
      word: "invasive species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i ngo\u1ea1i lai x\u00e2m l\u1ea5n g\u00e2y h\u1ea1i",
      ipa: "/\u026an\u02c8ve\u026as\u026av \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=invasive+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Golden apple snails are a notorious invasive species damaging rice paddies.",
      exampleVi: "\u1ed0c b\u01b0\u01a1u v\u00e0ng l\u00e0 lo\u00e0i x\u00e2m l\u1ea5n kh\u00e9t ti\u1ebfng ph\u00e1 ho\u1ea1i nh\u1eefng c\u00e1nh \u0111\u1ed3ng l\u00faa.",
      collocations: ["eradicate invasive species", "threat from invasive species"]
    },
    {
      id: "v10-u9-poacher",
      word: "poacher",
      partOfSpeech: "n",
      meaningVi: "k\u1ebb s\u0103n tr\u1ed9m \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02c8p\u0259\u028at\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poacher&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Armed forest rangers caught two poachers setting wire traps in the national park.",
      exampleVi: "Ki\u1ec3m l\u00e2m c\u00f3 trang b\u1ecb \u0111\u00e3 b\u1eaft gi\u1eef hai k\u1ebb s\u0103n tr\u1ed9m \u0111ang g\u00e0i b\u1eaby d\u00e2y trong v\u01b0\u1eddn qu\u1ed1c gia.",
      collocations: ["arrest a poacher", "trap set by poachers"]
    },
    {
      id: "v10-u9-waste-management",
      word: "waste management",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ea3n l\u00fd v\u00e0 x\u1eed l\u00fd ch\u1ea5t th\u1ea3i khoa h\u1ecdc",
      ipa: "/\u02c8we\u026ast \u02ccm\u00e6n\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=waste+management&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern cities invest in circular waste management to transform garbage into energy.",
      exampleVi: "C\u00e1c \u0111\u00f4 th\u1ecb hi\u1ec7n \u0111\u1ea1i \u0111\u1ea7u t\u01b0 v\u00e0o qu\u1ea3n l\u00fd r\u00e1c tu\u1ea7n ho\u00e0n \u0111\u1ec3 bi\u1ebfn r\u00e1c th\u1ea3i th\u00e0nh n\u0103ng l\u01b0\u1ee3ng.",
      collocations: ["effective waste management", "waste management system"]
    },
    {
      id: "v10-u9-environmental-legislation",
      word: "environmental legislation",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng lu\u1eadt ph\u00e1p v\u1ec1 b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u02ccled\u0292\u026as\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+legislation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stricter environmental legislation imposes heavy criminal fines on polluters.",
      exampleVi: "H\u1ec7 th\u1ed1ng lu\u1eadt m\u00f4i tr\u01b0\u1eddng kh\u1eaft khe h\u01a1n \u00e1p m\u1ee9c ph\u1ea1t h\u00ecnh s\u1ef1 r\u1ea5t n\u1eb7ng v\u1edbi c\u00e1c \u0111\u01a1n v\u1ecb g\u00e2y \u00f4 nhi\u1ec5m.",
      collocations: ["enact environmental legislation", "comply with environmental legislation"]
    },
    {
      id: "v10-u9-food-chain",
      word: "food chain",
      partOfSpeech: "n.phr",
      meaningVi: "chu\u1ed7i th\u1ee9c \u0103n trong h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8fu\u02d0d t\u0283e\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=food+chain&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Plankton form the foundation of the marine food chain upon which whales depend.",
      exampleVi: "Sinh v\u1eadt ph\u00f9 du t\u1ea1o n\u00ean n\u1ec1n t\u1ea3ng c\u1ee7a chu\u1ed7i th\u1ee9c \u0103n \u0111\u1ea1i d\u01b0\u01a1ng m\u00e0 lo\u00e0i c\u00e1 voi ph\u1ee5 thu\u1ed9c.",
      collocations: ["top of the food chain", "marine food chain"]
    },
    {
      id: "v10-u9-overexploitation",
      word: "overexploitation",
      partOfSpeech: "n",
      meaningVi: "khai th\u00e1c qu\u00e1 m\u1ee9c \u0111\u1ebfn c\u1ea1n ki\u1ec7t",
      ipa: "/\u02cc\u0259\u028av\u0259r\u02ccekspl\u0254\u026a\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=overexploitation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The overexploitation of timber forests has caused severe soil degradation.",
      exampleVi: "Khai th\u00e1c g\u1ed7 r\u1eebng qu\u00e1 m\u1ee9c \u0111\u00e3 g\u00e2y n\u00ean t\u00ecnh tr\u1ea1ng tho\u00e1i h\u00f3a \u0111\u1ea5t nghi\u00eam tr\u1ecdng.",
      collocations: ["halt overexploitation", "overexploitation of natural resources"]
    },
    {
      id: "v10-u9-flora-and-fauna",
      word: "flora and fauna",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ef1c v\u1eadt v\u00e0 \u0111\u1ed9ng v\u1eadt c\u1ee7a m\u1ed9t v\u00f9ng",
      ipa: "/\u02ccfl\u0254\u02d0r\u0259 \u0259nd \u02c8f\u0254\u02d0n\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=flora+and+fauna&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ba Be National Park boasts an astonishing diversity of rare flora and fauna.",
      exampleVi: "V\u01b0\u1eddn qu\u1ed1c gia Ba B\u1ec3 t\u1ef1 h\u00e0o c\u00f3 s\u1ef1 \u0111a d\u1ea1ng \u0111\u00e1ng kinh ng\u1ea1c c\u1ee7a c\u00e1c lo\u00e0i \u0111\u1ed9ng th\u1ef1c v\u1eadt qu\u00fd hi\u1ebfm.",
      collocations: ["endemic flora and fauna", "rich flora and fauna"]
    },
    {
      id: "v10-u9-forest-ranger",
      word: "forest ranger",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3m l\u00e2m vi\u00ean b\u1ea3o v\u1ec7 r\u1eebng",
      ipa: "/\u02c8f\u0252r\u026ast \u02c8re\u026and\u0292\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=forest+ranger&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Brave forest rangers patrol steep mountain passes day and night to prevent illegal logging.",
      exampleVi: "C\u00e1c ki\u1ec3m l\u00e2m vi\u00ean d\u0169ng c\u1ea3m tu\u1ea7n tra \u0111\u00e8o d\u1ed1c ng\u00e0y \u0111\u00eam \u0111\u1ec3 ng\u0103n ch\u1eb7n t\u00ecnh tr\u1ea1ng ch\u1eb7t g\u1ed7 tr\u00e1i ph\u00e9p.",
      collocations: ["dedicated forest ranger", "ranger station"]
    },
    {
      id: "v10-u9-ecological",
      word: "ecological",
      partOfSpeech: "adj",
      meaningVi: "thu\u1ed9c v\u1ec1 sinh th\u00e1i h\u1ecdc",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The construction project was paused to assess its potential ecological consequences.",
      exampleVi: "D\u1ef1 \u00e1n x\u00e2y d\u1ef1ng \u0111\u00e3 t\u1ea1m d\u1eebng \u0111\u1ec3 \u0111\u00e1nh gi\u00e1 c\u00e1c t\u00e1c \u0111\u1ed9ng sinh th\u00e1i ti\u1ec1m t\u00e0ng.",
      collocations: ["ecological disaster", "ecological integrity"]
    },
    {
      id: "v10-u9-sustainable-forestry",
      word: "sustainable forestry",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00e2m nghi\u1ec7p b\u1ec1n v\u1eefng, tr\u1ed3ng \u0111i \u0111\u00f4i v\u1edbi \u0111\u1ed1n",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8f\u0252r\u026astri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+forestry&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable forestry ensures that whenever a tree is harvested, three are planted in return.",
      exampleVi: "L\u00e2m nghi\u1ec7p b\u1ec1n v\u1eefng \u0111\u1ea3m b\u1ea3o m\u1ed7i khi m\u1ed9t c\u00e2y b\u1ecb \u0111\u1ed1n h\u1ea1, ba c\u00e2y m\u1edbi s\u1ebd \u0111\u01b0\u1ee3c tr\u1ed3ng th\u1ebf ch\u1ed7.",
      collocations: ["practice sustainable forestry", "sustainable forestry certification"]
    },
    {
      id: "v10-u9-microplastics",
      word: "microplastics",
      partOfSpeech: "n.pl",
      meaningVi: "h\u1ea1t vi nh\u1ef1a si\u00eau nh\u1ecf kh\u00f3 nh\u00ecn th\u1ea5y",
      ipa: "/\u02c8ma\u026akr\u0259\u028a\u02ccpl\u00e6st\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=microplastics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fish ingest microplastics, which subsequently travel up the global food chain to humans.",
      exampleVi: "C\u00e1 nu\u1ed1t ph\u1ea3i h\u1ea1t vi nh\u1ef1a, v\u00e0 nh\u1eefng h\u1ea1t n\u00e0y d\u1ea7n \u0111i l\u00ean theo chu\u1ed7i th\u1ee9c \u0103n \u0111\u1ebfn con ng\u01b0\u1eddi.",
      collocations: ["filter out microplastics", "microplastics in seawater"]
    },
    {
      id: "v10-u9-green-initiative",
      word: "green initiative",
      partOfSpeech: "n.phr",
      meaningVi: "s\u00e1ng ki\u1ebfn xanh b\u1ea3o v\u1ec7 m\u00f4i sinh",
      ipa: "/\u0261ri\u02d0n \u026a\u02c8n\u026a\u0283\u0259t\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+initiative&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The youth club launched a green initiative to replace paper cups with reusable mugs.",
      exampleVi: "C\u00e2u l\u1ea1c b\u1ed9 thanh ni\u00ean ph\u00e1t \u0111\u1ed9ng s\u00e1ng ki\u1ebfn xanh thay th\u1ebf ly gi\u1ea5y b\u1eb1ng c\u1ed1c u\u1ed1ng t\u00e1i s\u1eed d\u1ee5ng.",
      collocations: ["support green initiatives", "pioneer a green initiative"]
    },
    {
      id: "v10-u9-untouched",
      word: "untouched",
      partOfSpeech: "adj",
      meaningVi: "nguy\u00ean s\u01a1, ch\u01b0a b\u1ecb con ng\u01b0\u1eddi t\u00e1c \u0111\u1ed9ng",
      ipa: "/\u028cn\u02c8t\u028ct\u0283t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=untouched&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The remote valley remains untouched by mass tourism and industrial development.",
      exampleVi: "Thung l\u0169ng xa x\u00f4i v\u1eabn gi\u1eef v\u1ebb nguy\u00ean s\u01a1 ch\u01b0a b\u1ecb t\u00e1c \u0111\u1ed9ng b\u1edfi du l\u1ecbch \u0111\u1ea1i tr\u00e0 v\u00e0 c\u00f4ng nghi\u1ec7p.",
      collocations: ["untouched wilderness", "untouched natural beauty"]
    },
    {
      id: "v10-u9-recycle",
      word: "recycle",
      partOfSpeech: "v",
      meaningVi: "t\u00e1i ch\u1ebf ph\u1ebf li\u1ec7u th\u00e0nh s\u1ea3n ph\u1ea9m m\u1edbi",
      ipa: "/\u02ccri\u02d0\u02c8sa\u026akl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=recycle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every household should actively recycle paper, aluminum cans, and cardboard.",
      exampleVi: "M\u1ed7i h\u1ed9 gia \u0111\u00ecnh n\u00ean ch\u1ee7 \u0111\u1ed9ng t\u00e1i ch\u1ebf gi\u1ea5y b\u00e1o, lon nh\u00f4m v\u00e0 b\u00eca c\u00e1c-t\u00f4ng.",
      collocations: ["recycle waste", "recycle plastics"]
    },
    {
      id: "v10-u9-preserve",
      word: "preserve",
      partOfSpeech: "v",
      meaningVi: "g\u00ecn gi\u1eef nguy\u00ean v\u1eb9n, b\u1ea3o t\u1ed3n l\u00e2u d\u00e0i",
      ipa: "/pr\u026a\u02c8z\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=preserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stringent environmental zoning preserves pristine mangrove forests along the coast.",
      exampleVi: "Quy ho\u1ea1ch m\u00f4i tr\u01b0\u1eddng nghi\u00eam ng\u1eb7t gi\u00fap b\u1ea3o t\u1ed3n nguy\u00ean v\u1eb9n c\u00e1c c\u00e1nh r\u1eebng ng\u1eadp m\u1eb7n ven bi\u1ec3n.",
      collocations: ["preserve nature", "preserve natural habitats"]
    },
    {
      id: "v10-u9-carbon-emissions",
      word: "carbon emissions",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0\u1ee3ng kh\u00ed th\u1ea3i carbon v\u00e0o kh\u00ed quy\u1ec3n",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u026a\u02c8m\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+emissions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Transitioning to electric buses significantly reduces urban carbon emissions.",
      exampleVi: "Chuy\u1ec3n sang xe bu\u00fdt \u0111i\u1ec7n gi\u00fap gi\u1ea3m thi\u1ec3u \u0111\u00e1ng k\u1ec3 l\u01b0\u1ee3ng kh\u00ed th\u1ea3i carbon \u0111\u00f4 th\u1ecb.",
      collocations: ["slash carbon emissions", "curb carbon emissions"]
    },
    {
      id: "v10-u9-soil-erosion",
      word: "soil erosion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 x\u00f3i m\u00f2n v\u00e0 s\u1ea1t l\u1edf \u0111\u1ea5t \u0111ai",
      ipa: "/\u02c8s\u0254\u026al \u026a\u02ccr\u0259\u028a\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soil+erosion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tree roots bind soil particles firmly, preventing soil erosion during typhoons.",
      exampleVi: "R\u1ec5 c\u00e2y gi\u1eef ch\u1eb7t c\u00e1c h\u1ea1t \u0111\u1ea5t, gi\u00fap ng\u0103n ch\u1eb7n x\u00f3i m\u00f2n \u0111\u1ea5t trong nh\u1eefng tr\u1eadn b\u00e3o l\u1edbn.",
      collocations: ["prevent soil erosion", "severe soil erosion"]
    },
    {
      id: "v10-u9-environmentalist",
      word: "environmentalist",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 ho\u1ea1t \u0111\u1ed9ng m\u00f4i tr\u01b0\u1eddng nhi\u1ec7t th\u00e0nh",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8ment\u0259l\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmentalist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Environmentalists organized a campaign urging supermarkets to stop wrapping fruit in cling film.",
      exampleVi: "C\u00e1c nh\u00e0 ho\u1ea1t \u0111\u1ed9ng m\u00f4i tr\u01b0\u1eddng \u0111\u00e3 t\u1ed5 ch\u1ee9c chi\u1ebfn d\u1ecbch k\u00eau g\u1ecdi si\u00eau th\u1ecb ng\u1eebng b\u1ecdc m\u00e0ng nh\u1ef1a quanh qu\u1ea3.",
      collocations: ["prominent environmentalist", "passionate environmentalist"]
    }
    ,
    {
      id: "v10-extra-nature-conservation",
      word: "nature conservation",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean",
      ipa: "/\u02c8ne\u026at\u0283\u0259 \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nature conservation preserves pristine mountain forests for future generations.",
      exampleVi: "B\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean gi\u1eef g\u00ecn nh\u1eefng c\u00e1nh r\u1eebng nguy\u00ean sinh cho c\u00e1c th\u1ebf h\u1ec7 t\u01b0\u01a1ng lai.",
      collocations: ["support nature conservation", "field of nature conservation"]
    }
    ,
    {
      id: "v10-extra-ecological-reserve",
      word: "ecological reserve",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n sinh th\u00e1i",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl r\u026a\u02c8z\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+reserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strict regulations in the ecological reserve prohibit campfires and littering.",
      exampleVi: "Quy \u0111\u1ecbnh nghi\u00eam ng\u1eb7t t\u1ea1i khu b\u1ea3o t\u1ed3n sinh th\u00e1i c\u1ea5m \u0111\u1ed1t l\u1eeda tr\u1ea1i v\u00e0 x\u1ea3 r\u00e1c.",
      collocations: ["protect the ecological reserve", "wild ecological reserve"]
    }
    ,
    {
      id: "v10-extra-tree-planting",
      word: "tree-planting",
      partOfSpeech: "n",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng tr\u1ed3ng c\u00e2y xanh g\u00e2y r\u1eebng",
      ipa: "/\u02c8tri\u02d0 \u02ccpl\u0251\u02d0nt\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tree-planting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Our school organized a tree-planting festival to celebrate the new spring.",
      exampleVi: "Tr\u01b0\u1eddng t\u00f4i \u0111\u00e3 t\u1ed5 ch\u1ee9c t\u1ebft tr\u1ed3ng c\u00e2y \u0111\u1ec3 ch\u00e0o \u0111\u00f3n m\u00f9a xu\u00e2n m\u1edbi.",
      collocations: ["tree-planting campaign", "join tree-planting"]
    }
    ,
    {
      id: "v10-extra-wildlife-protection",
      word: "wildlife protection",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3o v\u1ec7 \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02c8wa\u026aldla\u026af pr\u0259\u02c8tek\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+protection&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stricter penal codes were introduced for wildlife protection in national parks.",
      exampleVi: "C\u00e1c \u0111i\u1ec1u lu\u1eadt h\u00ecnh s\u1ef1 nghi\u00eam kh\u1eafc h\u01a1n \u0111\u00e3 \u0111\u01b0\u1ee3c \u00e1p d\u1ee5ng \u0111\u1ec3 b\u1ea3o v\u1ec7 \u0111\u1ed9ng v\u1eadt hoang d\u00e3.",
      collocations: ["advocate wildlife protection", "law on wildlife protection"]
    }
    ,
    {
      id: "v10-extra-clean-environment",
      word: "clean environment",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4i tr\u01b0\u1eddng s\u1ed1ng xanh s\u1ea1ch",
      ipa: "/kli\u02d0n \u026an\u02c8va\u026ar\u0259nm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clean+environment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every citizen has the basic right to live in a clean and healthy environment.",
      exampleVi: "M\u1ecdi c\u00f4ng d\u00e2n \u0111\u1ec1u c\u00f3 quy\u1ec1n c\u01a1 b\u1ea3n \u0111\u01b0\u1ee3c s\u1ed1ng trong m\u1ed9t m\u00f4i tr\u01b0\u1eddng trong l\u00e0nh s\u1ea1ch \u0111\u1eb9p.",
      collocations: ["maintain a clean environment", "strive for a clean environment"]
    }
    ,
    {
      id: "v10-extra-green-planet",
      word: "green planet",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh tinh xanh c\u1ee7a ch\u00fang ta",
      ipa: "/\u0261ri\u02d0n \u02c8pl\u00e6n\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+planet&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Planting more trees is our shared responsibility to preserve a green planet.",
      exampleVi: "Tr\u1ed3ng th\u00eam c\u00e2y xanh l\u00e0 tr\u00e1ch nhi\u1ec7m chung c\u1ee7a ch\u00fang ta \u0111\u1ec3 g\u00ecn gi\u1eef h\u00e0nh tinh xanh.",
      collocations: ["cherish our green planet", "protect our green planet"]
    }
    ,
    {
      id: "v10-extra-marine-ecosystem",
      word: "marine ecosystem",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 sinh th\u00e1i bi\u1ec3n v\u00e0 h\u1ea3i \u0111\u1ea3o",
      ipa: "/m\u0259\u02c8ri\u02d0n \u02c8i\u02d0k\u0259\u028as\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marine+ecosystem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coral reefs and seagrass beds are vital components of the marine ecosystem.",
      exampleVi: "R\u1ea1n san h\u00f4 v\u00e0 th\u1ea3m c\u1ecf bi\u1ec3n l\u00e0 nh\u1eefng th\u00e0nh t\u1ed1 s\u1ed1ng c\u00f2n c\u1ee7a h\u1ec7 sinh th\u00e1i \u0111\u1ea1i d\u01b0\u01a1ng.",
      collocations: ["conserve the marine ecosystem", "fragile marine ecosystem"]
    }
    ,
    {
      id: "v10-extra-environmental-education",
      word: "environmental education",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u00e1o d\u1ee5c b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Early environmental education instills green habits in kindergarten students.",
      exampleVi: "Gi\u00e1o d\u1ee5c m\u00f4i tr\u01b0\u1eddng t\u1eeb nh\u1ecf h\u00ecnh th\u00e0nh th\u00f3i quen xanh cho c\u00e1c em h\u1ecdc sinh m\u1eabu gi\u00e1o.",
      collocations: ["promote environmental education", "role of environmental education"]
    }
    ,
    {
      id: "v10-extra-green-campaign",
      word: "green campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch xanh v\u00ec m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u0261ri\u02d0n k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth unions launched a green campaign to collect used plastic bottles for recycling.",
      exampleVi: "\u0110o\u00e0n thanh ni\u00ean ph\u00e1t \u0111\u1ed9ng chi\u1ebfn d\u1ecbch xanh thu gom chai nh\u1ef1a c\u0169 \u0111\u1ec3 t\u00e1i ch\u1ebf.",
      collocations: ["join a green campaign", "school green campaign"]
    }
    ,
    {
      id: "v10-extra-sustainable-future",
      word: "sustainable future",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0\u01a1ng lai ph\u00e1t tri\u1ec3n b\u1ec1n v\u1eefng",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8fju\u02d0t\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+future&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Saving power and planting trees ensures a sustainable future for our children.",
      exampleVi: "Ti\u1ebft ki\u1ec7m \u0111i\u1ec7n v\u00e0 tr\u1ed3ng c\u00e2y xanh \u0111\u1ea3m b\u1ea3o m\u1ed9t t\u01b0\u01a1ng lai b\u1ec1n v\u1eefng cho con em ch\u00fang ta.",
      collocations: ["build a sustainable future", "work towards a sustainable future"]
    }
    ,
    {
      id: "v10-extra-anti-littering",
      word: "anti-littering",
      partOfSpeech: "adj",
      meaningVi: "ch\u1ed1ng x\u1ea3 r\u00e1c b\u1eeba b\u00e3i",
      ipa: "/\u02cc\u00e6nti \u02c8l\u026at\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=anti-littering&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Clear anti-littering signs along the hiking trail remind visitors to pack out their trash.",
      exampleVi: "Bi\u1ec3n b\u00e1o ch\u1ed1ng x\u1ea3 r\u00e1c d\u1ecdc \u0111\u01b0\u1eddng m\u00f2n nh\u1eafc nh\u1edf du kh\u00e1ch t\u1ef1 thu d\u1ecdn r\u00e1c mang v\u1ec1.",
      collocations: ["anti-littering law", "anti-littering signage"]
    }
    ,
    {
      id: "v10-extra-eco-friendly-habit",
      word: "eco-friendly habit",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f3i quen th\u00e2n thi\u1ec7n v\u1edbi m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli \u02c8h\u00e6b\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly+habit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Using a reusable fabric bag when shopping is an easy eco-friendly habit.",
      exampleVi: "Mang theo t\u00fai v\u1ea3i khi \u0111i ch\u1ee3 l\u00e0 m\u1ed9t th\u00f3i quen th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng r\u1ea5t d\u1ec5 th\u1ef1c hi\u1ec7n.",
      collocations: ["develop eco-friendly habits", "daily eco-friendly habit"]
    }
    ,
    {
      id: "mega-unit-9-carbon-footprint",
      word: "carbon footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n carbon l\u01b0\u1ee3ng kh\u00ed th\u1ea3i c\u00e1 nh\u00e2n",
      ipa: "/\u02cck\u0251\u02d0b\u0259n \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Commuting via electric metro significantly diminishes an urbanite's individual carbon footprint.",
      exampleVi: "\u0110i l\u00e0m b\u1eb1ng t\u00e0u \u0111i\u1ec7n ng\u1ea7m gi\u00fap gi\u1ea3m thi\u1ec3u \u0111\u00e1ng k\u1ec3 d\u1ea5u ch\u00e2n carbon c\u00e1 nh\u00e2n c\u1ee7a ng\u01b0\u1eddi d\u00e2n th\u00e0nh th\u1ecb.",
      collocations: ["reduce carbon footprint", "calculate carbon footprint"]
    }
    ,
    {
      id: "mega-unit-9-deforestation",
      word: "deforestation",
      partOfSpeech: "n",
      meaningVi: "n\u1ea1n ph\u00e1 r\u1eebng h\u1ee7y ho\u1ea1i th\u1ea3m th\u1ef1c v\u1eadt",
      ipa: "/di\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Illegal deforestation in tropical rainforests destroys ancient habitats of endangered primates.",
      exampleVi: "N\u1ea1n ch\u1eb7t ph\u00e1 r\u1eebng tr\u00e1i ph\u00e9p \u1edf c\u00e1c khu r\u1eebng nhi\u1ec7t \u0111\u1edbi ph\u00e1 h\u1ee7y m\u00f4i tr\u01b0\u1eddng s\u1ed1ng c\u1ed5 x\u01b0a c\u1ee7a c\u00e1c lo\u00e0i linh tr\u01b0\u1edfng qu\u00fd hi\u1ebfm.",
      collocations: ["halt deforestation", "driver of deforestation"]
    }
    ,
    {
      id: "mega-unit-9-biodiversity-loss",
      word: "biodiversity loss",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 m\u1ea5t m\u00e1t suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti l\u0252s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+loss&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Widespread pesticide runoff accelerates acute biodiversity loss across rural wetlands.",
      exampleVi: "D\u00f2ng n\u01b0\u1edbc ch\u1ea3y nhi\u1ec5m thu\u1ed1c tr\u1eeb s\u00e2u lan r\u1ed9ng l\u00e0m gia t\u0103ng s\u1ef1 suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc t\u1ea1i c\u00e1c v\u00f9ng \u0111\u1ea5t ng\u1eadp n\u01b0\u1edbc.",
      collocations: ["stem biodiversity loss", "threat of biodiversity loss"]
    }
    ,
    {
      id: "mega-unit-9-renewable-energy",
      word: "renewable energy",
      partOfSpeech: "n.phr",
      meaningVi: "ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o s\u1ea1ch",
      ipa: "/r\u026a\u02ccnju\u02d0\u0259bl \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=renewable+energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Offshore wind farms generate abundant clean, renewable energy for maritime cities.",
      exampleVi: "C\u00e1c trang tr\u1ea1i \u0111i\u1ec7n gi\u00f3 ngo\u00e0i kh\u01a1i t\u1ea1o ra ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o s\u1ea1ch d\u1ed3i d\u00e0o cho c\u00e1c th\u00e0nh ph\u1ed1 ven bi\u1ec3n.",
      collocations: ["invest in renewable energy", "renewable energy transition"]
    }
    ,
    {
      id: "mega-unit-9-greenhouse-gas-emissions",
      word: "greenhouse gas emissions",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0\u1ee3ng kh\u00ed th\u1ea3i nh\u00e0 k\u00ednh g\u00e2y n\u00f3ng l\u00ean",
      ipa: "/\u02c8\u0261ri\u02d0nha\u028as \u0261\u00e6s \u026a\u02c8m\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=greenhouse+gas+emissions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "International treaties mandate strict legal caps on national greenhouse gas emissions.",
      exampleVi: "C\u00e1c hi\u1ec7p \u01b0\u1edbc qu\u1ed1c t\u1ebf quy \u0111\u1ecbnh h\u1ea1n ng\u1ea1ch ph\u00e1p l\u00fd nghi\u00eam ng\u1eb7t \u0111\u1ed1i v\u1edbi l\u01b0\u1ee3ng kh\u00ed th\u1ea3i nh\u00e0 k\u00ednh c\u1ee7a c\u00e1c qu\u1ed1c gia.",
      collocations: ["curb greenhouse gas emissions", "net-zero emissions"]
    }
    ,
    {
      id: "mega-unit-9-plastic-pollution",
      word: "plastic pollution",
      partOfSpeech: "n.phr",
      meaningVi: "\u00f4 nhi\u1ec5m r\u00e1c th\u1ea3i nh\u1ef1a \u0111\u1ea1i d\u01b0\u01a1ng",
      ipa: "/\u02c8pl\u00e6st\u026ak p\u0259\u02c8lu\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=plastic+pollution&type=2",
      imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community volunteers collected marine trash along beaches to combat plastic pollution.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean c\u1ed9ng \u0111\u1ed3ng \u0111\u00e3 thu gom r\u00e1c bi\u1ec3n d\u1ecdc b\u1edd bi\u1ec3n \u0111\u1ec3 \u0111\u1ea9y l\u00f9i n\u1ea1n \u00f4 nhi\u1ec5m r\u00e1c th\u1ea3i nh\u1ef1a.",
      collocations: ["fight plastic pollution", "choked by plastic pollution"]
    }
    ,
    {
      id: "mega-unit-9-ecosystem-restoration",
      word: "ecosystem restoration",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u1ee5c h\u1ed3i c\u00e2n b\u1eb1ng h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8i\u02d0k\u0259\u028as\u026ast\u0259m \u02ccrest\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecosystem+restoration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mangrove replanting drives comprehensive coastal ecosystem restoration and storm protection.",
      exampleVi: "Vi\u1ec7c tr\u1ed3ng l\u1ea1i r\u1eebng ng\u1eadp m\u1eb7n th\u00fac \u0111\u1ea9y s\u1ef1 ph\u1ee5c h\u1ed3i to\u00e0n di\u1ec7n h\u1ec7 sinh th\u00e1i ven bi\u1ec3n v\u00e0 che ch\u1eafn b\u00e3o.",
      collocations: ["spearhead ecosystem restoration", "fund restoration"]
    }
    ,
    {
      id: "mega-unit-9-sustainable-agriculture",
      word: "sustainable agriculture",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ec1n n\u00f4ng nghi\u1ec7p b\u1ec1n v\u1eefng h\u1eefu c\u01a1",
      ipa: "/s\u0259\u02ccste\u026an\u0259bl \u02c8\u00e6\u0261r\u026ak\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+agriculture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Crop rotation and organic compost form the backbone of sustainable agriculture.",
      exampleVi: "Lu\u00e2n canh c\u00e2y tr\u1ed3ng v\u00e0 ph\u00e2n h\u1eefu c\u01a1 t\u1ea1o n\u00ean n\u1ec1n t\u1ea3ng c\u1ed1t l\u00f5i c\u1ee7a n\u1ec1n n\u00f4ng nghi\u1ec7p b\u1ec1n v\u1eefng.",
      collocations: ["promote sustainable agriculture", "methods of agriculture"]
    }
    ,
    {
      id: "mega-unit-9-composting",
      word: "composting",
      partOfSpeech: "n",
      meaningVi: "vi\u1ec7c \u1ee7 ph\u00e2n h\u1eefu c\u01a1 t\u1eeb r\u00e1c nh\u00e0 b\u1ebfp",
      ipa: "/\u02c8k\u0252mp\u0252st\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=composting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Backyard composting turns fruit peels and vegetable scraps into nutrient-rich soil.",
      exampleVi: "Vi\u1ec7c \u1ee7 ph\u00e2n t\u1ea1i v\u01b0\u1eddn nh\u00e0 bi\u1ebfn v\u1ecf tr\u00e1i c\u00e2y v\u00e0 rau th\u1eeba th\u00e0nh l\u1edbp \u0111\u1ea5t gi\u00e0u dinh d\u01b0\u1ee1ng cho c\u00e2y tr\u1ed3ng.",
      collocations: ["start composting", "home composting system"]
    }
    ,
    {
      id: "mega-unit-9-landfill-waste",
      word: "landfill waste",
      partOfSpeech: "n.phr",
      meaningVi: "r\u00e1c th\u1ea3i ch\u00f4n l\u1ea5p t\u1ea1i b\u00e3i r\u00e1c",
      ipa: "/\u02c8l\u00e6ndf\u026al we\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=landfill+waste&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rigorous sorting of recyclables cuts household landfill waste by more than fifty percent.",
      exampleVi: "Ph\u00e2n lo\u1ea1i r\u00e1c t\u00e1i ch\u1ebf k\u1ef9 l\u01b0\u1ee1ng gi\u00fap c\u1eaft gi\u1ea3m l\u01b0\u1ee3ng r\u00e1c th\u1ea3i sinh ho\u1ea1t ch\u00f4n l\u1ea5p h\u01a1n n\u0103m m\u01b0\u01a1i ph\u1ea7n tr\u0103m.",
      collocations: ["divert landfill waste", "overflowing landfill"]
    }
    ,
    {
      id: "mega-unit-9-water-conservation",
      word: "water conservation",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3o t\u1ed3n g\u00ecn gi\u1eef ngu\u1ed3n n\u01b0\u1edbc ng\u1ecdt",
      ipa: "/\u02c8w\u0254\u02d0t\u0259 \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=water+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Low-flow shower heads and rainwater cisterns promote household water conservation.",
      exampleVi: "V\u00f2i hoa sen ti\u1ebft ki\u1ec7m n\u01b0\u1edbc v\u00e0 b\u1ec3 ch\u1ee9a n\u01b0\u1edbc m\u01b0a th\u00fac \u0111\u1ea9y vi\u1ec7c b\u1ea3o t\u1ed3n n\u01b0\u1edbc trong gia \u0111\u00ecnh.",
      collocations: ["practice water conservation", "water conservation campaign"]
    }
    ,
    {
      id: "mega-unit-9-afforestation",
      word: "afforestation",
      partOfSpeech: "n",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng tr\u1ed3ng r\u1eebng g\u00e2y r\u1eebng m\u1edbi",
      ipa: "/\u0259\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=afforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Large-scale national afforestation projects transform arid plains into lush carbon sinks.",
      exampleVi: "C\u00e1c d\u1ef1 \u00e1n tr\u1ed3ng r\u1eebng m\u1edbi quy m\u00f4 qu\u1ed1c gia bi\u1ebfn nh\u1eefng v\u00f9ng \u0111\u1ea5t kh\u00f4 c\u1eb1n th\u00e0nh nh\u1eefng b\u1ec3 ch\u1ee9a carbon xanh t\u1ed1t.",
      collocations: ["support afforestation", "afforestation drive"]
    }
    ,
    {
      id: "mega-unit-9-microplastics",
      word: "microplastics",
      partOfSpeech: "n.pl",
      meaningVi: "h\u1ea1t vi nh\u1ef1a si\u00eau nh\u1ecf g\u00e2y \u0111\u1ed9c sinh v\u1eadt",
      ipa: "/\u02c8ma\u026akr\u0259\u028apl\u00e6st\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=microplastics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Marine biologists discover alarming concentrations of toxic microplastics inside deep-sea fish.",
      exampleVi: "C\u00e1c nh\u00e0 sinh v\u1eadt bi\u1ec3n ph\u00e1t hi\u1ec7n n\u1ed3ng \u0111\u1ed9 h\u1ea1t vi nh\u1ef1a \u0111\u1ed9c h\u1ea1i \u0111\u00e1ng b\u00e1o \u0111\u1ed9ng b\u00ean trong c\u00e1 bi\u1ec3n s\u00e2u.",
      collocations: ["ingest microplastics", "filtered microplastics"]
    }
    ,
    {
      id: "mega-unit-9-energy-efficiency",
      word: "energy efficiency",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u su\u1ea5t s\u1eed d\u1ee5ng n\u0103ng l\u01b0\u1ee3ng t\u1ed1i \u01b0u",
      ipa: "/\u02c8en\u0259d\u0292i \u026a\u02c8f\u026a\u0283nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+efficiency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Double-glazed glass windows enhance home heating and cooling energy efficiency.",
      exampleVi: "C\u1eeda s\u1ed5 k\u00ednh hai l\u1edbp gi\u00fap t\u0103ng c\u01b0\u1eddng hi\u1ec7u su\u1ea5t s\u1eed d\u1ee5ng n\u0103ng l\u01b0\u1ee3ng khi s\u01b0\u1edfi \u1ea5m v\u00e0 l\u00e0m m\u00e1t nh\u00e0.",
      collocations: ["improve energy efficiency", "rating for energy efficiency"]
    }
    ,
    {
      id: "mega-unit-9-hazardous-waste",
      word: "hazardous waste",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ea5t th\u1ea3i nguy h\u1ea1i ch\u1ee9a h\u00f3a ch\u1ea5t \u0111\u1ed9c",
      ipa: "/\u02c8h\u00e6z\u0259d\u0259s we\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hazardous+waste&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Specialized facilities are legally certified to incinerate hospital hazardous waste safely.",
      exampleVi: "C\u00e1c c\u01a1 s\u1edf chuy\u00ean d\u1ee5ng \u0111\u01b0\u1ee3c c\u1ea5p ph\u00e9p \u0111\u1ec3 thi\u00eau h\u1ee7y ch\u1ea5t th\u1ea3i y t\u1ebf nguy h\u1ea1i m\u1ed9t c\u00e1ch an to\u00e0n.",
      collocations: ["dispose of hazardous waste", "hazardous waste regulations"]
    }
    ,
    {
      id: "mega-unit-9-circular-economy",
      word: "circular economy",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh kinh t\u1ebf tu\u1ea7n ho\u00e0n t\u00e1i s\u1eed d\u1ee5ng",
      ipa: "/\u02ccs\u025c\u02d0kj\u0259l\u0259r \u026a\u02c8k\u0252n\u0259mi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=circular+economy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A circular economy emphasizes repairing, repurposing, and recycling raw materials endlessly.",
      exampleVi: "Kinh t\u1ebf tu\u1ea7n ho\u00e0n nh\u1ea5n m\u1ea1nh vi\u1ec7c s\u1eeda ch\u1eefa, t\u00e1i ch\u1ebf v\u00e0 t\u00e1i s\u1eed d\u1ee5ng nguy\u00ean v\u1eadt li\u1ec7u li\u00ean t\u1ee5c.",
      collocations: ["transition to a circular economy", "circular economy framework"]
    }
    ,
    {
      id: "mega-unit-9-ecological-balance",
      word: "ecological balance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i c\u1ee7a t\u1ef1 nhi\u00ean",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overfishing of top predators threatens the delicate ecological balance of coral reefs.",
      exampleVi: "Vi\u1ec7c \u0111\u00e1nh b\u1eaft qu\u00e1 m\u1ee9c c\u00e1c lo\u00e0i s\u0103n m\u1ed3i \u0111\u1ec9nh \u0111e d\u1ecda s\u1ef1 c\u00e2n b\u1eb1ng sinh th\u00e1i mong manh c\u1ee7a r\u1ea1n san h\u00f4.",
      collocations: ["preserve ecological balance", "disrupt balance"]
    }
    ,
    {
      id: "mega-unit-9-air-purifier",
      word: "air purifier",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00e1y l\u1ecdc kh\u00f4ng kh\u00ed kh\u1eed b\u1ee5i m\u1ecbn",
      ipa: "/\u02c8e\u0259 pj\u028a\u0259r\u026afa\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=air+purifier&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Households in smog-prone metropolises rely on HEPA air purifiers to filter particulate dust.",
      exampleVi: "Nhi\u1ec1u gia \u0111\u00ecnh \u1edf c\u00e1c \u0111\u00f4 th\u1ecb c\u00f3 s\u01b0\u01a1ng m\u00f9 kh\u00f3i b\u1ee5i l\u1eafp m\u00e1y l\u1ecdc kh\u00f4ng kh\u00ed HEPA \u0111\u1ec3 kh\u1eed b\u1ee5i m\u1ecbn.",
      collocations: ["install an air purifier", "HEPA air purifier"]
    }
    ,
    {
      id: "mega-unit-9-single-use-plastic",
      word: "single-use plastic",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n r\u1ed3i v\u1ee9t b\u1ecf",
      ipa: "/\u02ccs\u026a\u014b\u0261l ju\u02d0s \u02c8pl\u00e6st\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=single-use+plastic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Supermarkets phased out single-use plastic grocery bags in favor of durable woven canvas totes.",
      exampleVi: "C\u00e1c si\u00eau th\u1ecb \u0111\u00e3 d\u1eebng s\u1eed d\u1ee5ng t\u00fai nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n \u0111\u1ec3 chuy\u1ec3n sang c\u00e1c t\u00fai v\u1ea3i b\u1ea1t b\u1ec1n \u0111\u1eb9p.",
      collocations: ["ban single-use plastic", "alternatives to single-use plastic"]
    }
    ,
    {
      id: "mega-unit-9-soil-erosion",
      word: "soil erosion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 x\u00f3i m\u00f2n v\u00e0 r\u1eeda tr\u00f4i \u0111\u1ea5t canh t\u00e1c",
      ipa: "/s\u0254\u026al \u026a\u02c8r\u0259\u028a\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soil+erosion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Planting vetiver grass along steep hillsides prevents devastating monsoon soil erosion.",
      exampleVi: "Tr\u1ed3ng c\u1ecf vetiver d\u1ecdc s\u01b0\u1eddn \u0111\u1ed3i d\u1ed1c gi\u00fap ng\u0103n ng\u1eeba t\u00ecnh tr\u1ea1ng x\u00f3i m\u00f2n \u0111\u1ea5t nghi\u00eam tr\u1ecdng do m\u01b0a b\u00e3o.",
      collocations: ["prevent soil erosion", "susceptible to erosion"]
    }
    ,
    {
      id: "mega-unit-9-ozone-depletion",
      word: "ozone depletion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 suy gi\u1ea3m th\u1ee7ng t\u1ea7ng ozone",
      ipa: "/\u02c8\u0259\u028az\u0259\u028an d\u026a\u02c8pli\u02d0\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ozone+depletion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Montreal Protocol successfully reversed critical global ozone depletion trends.",
      exampleVi: "Ngh\u1ecb \u0111\u1ecbnh th\u01b0 Montreal \u0111\u00e3 \u0111\u1ea3o ng\u01b0\u1ee3c th\u00e0nh c\u00f4ng xu h\u01b0\u1edbng suy gi\u1ea3m t\u1ea7ng ozone nguy k\u1ecbch to\u00e0n c\u1ea7u.",
      collocations: ["combat ozone depletion", "substances causing depletion"]
    }
    ,
    {
      id: "mega-unit-9-carbon-offset",
      word: "carbon offset",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n b\u00f9 \u0111\u1eafp ph\u00e1t th\u1ea3i carbon",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8\u0252fset/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+offset&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Airlines allow passengers to purchase carbon offset credits that fund tree planting reserves.",
      exampleVi: "C\u00e1c h\u00e3ng h\u00e0ng kh\u00f4ng cho ph\u00e9p h\u00e0nh kh\u00e1ch mua t\u00edn ch\u1ec9 b\u00f9 \u0111\u1eafp carbon \u0111\u1ec3 g\u00e2y qu\u1ef9 cho c\u00e1c khu b\u1ea3o t\u1ed3n tr\u1ed3ng r\u1eebng.",
      collocations: ["purchase carbon offsets", "verified carbon offset"]
    }
    ,
    {
      id: "mega-unit-9-green-transport",
      word: "green transport",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ti\u1ec7n giao th\u00f4ng xanh kh\u00f4ng kh\u00f3i",
      ipa: "/\u0261ri\u02d0n \u02c8tr\u00e6nsp\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+transport&type=2",
      imageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Municipal leaders invest billions in green transport including electric buses and bike lanes.",
      exampleVi: "L\u00e3nh \u0111\u1ea1o th\u00e0nh ph\u1ed1 \u0111\u1ea7u t\u01b0 h\u00e0ng t\u1ef7 \u0111\u00f4 v\u00e0o giao th\u00f4ng xanh bao g\u1ed3m xe bu\u00fdt \u0111i\u1ec7n v\u00e0 l\u00e0n \u0111\u01b0\u1eddng cho xe \u0111\u1ea1p.",
      collocations: ["promote green transport", "switch to green transport"]
    }
    ,
    {
      id: "mega-unit-9-zero-emission-vehicle",
      word: "zero-emission vehicle",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ti\u1ec7n kh\u00f4ng ph\u00e1t th\u1ea3i kh\u00ed nh\u00e0 k\u00ednh",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u026a\u02c8m\u026a\u0283n \u02c8vi\u02d0\u0259kl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero-emission+vehicle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tax incentives accelerate the widespread adoption of zero-emission vehicles across suburban districts.",
      exampleVi: "C\u00e1c \u01b0u \u0111\u00e3i thu\u1ebf \u0111\u1ea9y nhanh vi\u1ec7c \u00e1p d\u1ee5ng r\u1ed9ng r\u00e3i xe kh\u00f4ng ph\u00e1t th\u1ea3i tr\u00ean kh\u1eafp c\u00e1c qu\u1eadn ngo\u1ea1i \u00f4.",
      collocations: ["drive a zero-emission vehicle", "mandate zero-emission vehicles"]
    }
    ,
    {
      id: "mega-unit-9-poaching",
      word: "poaching",
      partOfSpeech: "n",
      meaningVi: "h\u00e0nh vi s\u0103n tr\u1ed9m \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02c8p\u0259\u028at\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poaching&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Armed park rangers patrol sanctuaries day and night to stop elephant and rhino poaching.",
      exampleVi: "L\u1ef1c l\u01b0\u1ee3ng ki\u1ec3m l\u00e2m tu\u1ea7n tra c\u00e1c khu b\u1ea3o t\u1ed3n ng\u00e0y \u0111\u00eam \u0111\u1ec3 ng\u0103n ch\u1eb7n n\u1ea1n s\u0103n tr\u1ed9m voi v\u00e0 t\u00ea gi\u00e1c.",
      collocations: ["deter illegal poaching", "anti-poaching patrol"]
    }
    ,
    {
      id: "mega-unit-9-endangered-species",
      word: "endangered species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i sinh v\u1eadt nguy c\u1ea5p \u0111\u1ee9ng tr\u01b0\u1edbc nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng",
      ipa: "/\u026an\u02ccde\u026and\u0292\u0259d \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endangered+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The red panda is classified as an endangered species facing shrinking forest bamboo groves.",
      exampleVi: "G\u1ea5u tr\u00fac \u0111\u1ecf \u0111\u01b0\u1ee3c ph\u00e2n lo\u1ea1i l\u00e0 lo\u00e0i nguy c\u1ea5p \u0111\u1ed1i m\u1eb7t v\u1edbi vi\u1ec7c c\u00e1c r\u1eb7ng tre r\u1eebng ng\u00e0y c\u00e0ng thu h\u1eb9p.",
      collocations: ["protect endangered species", "list of endangered species"]
    }
    ,
    {
      id: "mega-unit-9-habitat-destruction",
      word: "habitat destruction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u00e0n ph\u00e1 sinh c\u1ea3nh s\u1ed1ng t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8h\u00e6b\u026at\u00e6t d\u026a\u02c8str\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=habitat+destruction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unregulated urban sprawl causes irreversible habitat destruction for local bird populations.",
      exampleVi: "Qu\u00e1 tr\u00ecnh \u0111\u00f4 th\u1ecb h\u00f3a tr\u00e0n lan g\u00e2y ra s\u1ef1 t\u00e0n ph\u00e1 sinh c\u1ea3nh s\u1ed1ng kh\u00f4ng th\u1ec3 \u0111\u1ea3o ng\u01b0\u1ee3c cho c\u00e1c qu\u1ea7n th\u1ec3 chim \u0111\u1ecba ph\u01b0\u01a1ng.",
      collocations: ["halt habitat destruction", "consequences of habitat destruction"]
    }
    ,
    {
      id: "mega-unit-9-environmental-stewardship",
      word: "environmental stewardship",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n tr\u00e1ch nhi\u1ec7m b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u02c8stju\u02d0\u0259d\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+stewardship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools foster environmental stewardship through campus vegetable gardens and cleanups.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng h\u1ecdc b\u1ed3i \u0111\u1eafp tinh th\u1ea7n b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng th\u00f4ng qua v\u01b0\u1eddn rau trong khu\u00f4n vi\u00ean v\u00e0 c\u00e1c \u0111\u1ee3t d\u1ecdn v\u1ec7 sinh.",
      collocations: ["demonstrate environmental stewardship", "embrace stewardship"]
    }
    ,
    {
      id: "mega-unit-9-green-building",
      word: "green building",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng tr\u00ecnh ki\u1ebfn tr\u00fac xanh ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng",
      ipa: "/\u0261ri\u02d0n \u02c8b\u026ald\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+building&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The corporate headquarters received LEED platinum certification for its smart green building architecture.",
      exampleVi: "Tr\u1ee5 s\u1edf t\u1eadp \u0111o\u00e0n \u0111\u00e3 nh\u1eadn ch\u1ee9ng ch\u1ec9 b\u1ea1ch kim LEED nh\u1edd ki\u1ebfn tr\u00fac c\u00f4ng tr\u00ecnh xanh th\u00f4ng minh.",
      collocations: ["design green buildings", "green building standards"]
    }
    ,
    {
      id: "mega-unit-9-eco-friendly-packaging",
      word: "eco-friendly packaging",
      partOfSpeech: "n.phr",
      meaningVi: "bao b\u00ec sinh h\u1ecdc th\u00e2n thi\u1ec7n v\u1edbi m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli \u02c8p\u00e6k\u026ad\u0292\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly+packaging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Brands have transitioned entirely to biodegradable cornstarch and mushroom eco-friendly packaging.",
      exampleVi: "C\u00e1c th\u01b0\u01a1ng hi\u1ec7u \u0111\u00e3 chuy\u1ec3n \u0111\u1ed5i ho\u00e0n to\u00e0n sang bao b\u00ec sinh h\u1ecdc th\u00e2n thi\u1ec7n l\u00e0m t\u1eeb tinh b\u1ed9t ng\u00f4 v\u00e0 n\u1ea5m.",
      collocations: ["use eco-friendly packaging", "innovative packaging"]
    }
    ,
    {
      id: "mega-unit-9-carbon-sequestration",
      word: "carbon sequestration",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 thu gi\u1eef v\u00e0 c\u00f4 l\u1eadp kh\u00ed carbon c\u1ee7a r\u1eebng bi\u1ec3n",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02ccsi\u02d0kw\u0259\u02c8stre\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+sequestration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coastal salt marshes perform vital carbon sequestration that exceeds terrestrial forests.",
      exampleVi: "C\u00e1c \u0111\u1ea7m l\u1ea7y m\u1eb7n ven bi\u1ec3n th\u1ef1c hi\u1ec7n ch\u1ee9c n\u0103ng c\u00f4 l\u1eadp carbon thi\u1ebft y\u1ebfu v\u01b0\u1ee3t xa c\u1ea3 c\u00e1c khu r\u1eebng tr\u00ean c\u1ea1n.",
      collocations: ["rate of carbon sequestration", "biological carbon sequestration"]
    }
  ],
  "unit-10-ecotourism": [
    {
      id: "v10-u10-ecotourism",
      word: "ecotourism",
      partOfSpeech: "n",
      meaningVi: "du l\u1ecbch sinh th\u00e1i t\u00f4n tr\u1ecdng t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8i\u02d0k\u0259\u028at\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecotourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ecotourism gives visitors thrilling nature adventures while funding wildlife preservation.",
      exampleVi: "Du l\u1ecbch sinh th\u00e1i mang l\u1ea1i cho du kh\u00e1ch tr\u1ea3i nghi\u1ec7m k\u1ef3 th\u00fa trong khi t\u00e0i tr\u1ee3 cho vi\u1ec7c b\u1ea3o t\u1ed3n t\u1ef1 nhi\u00ean.",
      collocations: ["develop ecotourism", "ecotourism destination"]
    },
    {
      id: "v10-u10-sustainable-tourism",
      word: "sustainable tourism",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch b\u1ec1n v\u1eefng b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng v\u00e0 v\u0103n h\u00f3a",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8t\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+tourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable tourism ensures that historic ancient towns remain intact for future travelers.",
      exampleVi: "Du l\u1ecbch b\u1ec1n v\u1eefng \u0111\u1ea3m b\u1ea3o c\u00e1c ph\u1ed1 c\u1ed5 l\u1ecbch s\u1eed v\u1eabn nguy\u00ean v\u1eb9n cho th\u1ebf h\u1ec7 l\u1eef kh\u00e1ch t\u01b0\u01a1ng lai.",
      collocations: ["promote sustainable tourism", "principles of sustainable tourism"]
    },
    {
      id: "v10-u10-eco-resort",
      word: "eco-resort",
      partOfSpeech: "n.phr",
      meaningVi: "khu ngh\u1ec9 d\u01b0\u1ee1ng sinh th\u00e1i th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02c8i\u02d0k\u0259\u028a r\u026a\u02ccz\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-resort&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The jungle eco-resort generates its own solar electricity and harvests rainwater.",
      exampleVi: "Khu ngh\u1ec9 d\u01b0\u1ee1ng sinh th\u00e1i gi\u1eefa r\u1eebng t\u1ef1 s\u1ea3n xu\u1ea5t \u0111i\u1ec7n m\u1eb7t tr\u1eddi v\u00e0 h\u1ee9ng n\u01b0\u1edbc m\u01b0a \u0111\u1ec3 s\u1eed d\u1ee5ng.",
      collocations: ["stay at an eco-resort", "luxurious eco-resort"]
    },
    {
      id: "v10-u10-responsible-travel",
      word: "responsible travel",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch c\u00f3 tr\u00e1ch nhi\u1ec7m v\u1edbi \u0111i\u1ec3m \u0111\u1ebfn",
      ipa: "/r\u026a\u02c8sp\u0252ns\u0259bl \u02c8tr\u00e6vl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=responsible+travel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Responsible travel involves hiring local ethnic guides and respecting quiet village rules.",
      exampleVi: "Du l\u1ecbch c\u00f3 tr\u00e1ch nhi\u1ec7m bao g\u1ed3m thu\u00ea h\u01b0\u1edbng d\u1eabn vi\u00ean ng\u01b0\u1eddi b\u1ea3n \u0111\u1ecba v\u00e0 t\u00f4n tr\u1ecdng n\u1ebfp s\u1ed1ng y\u00ean t\u0129nh c\u1ee7a b\u1ea3n l\u00e0ng.",
      collocations: ["practice responsible travel", "advocate responsible travel"]
    },
    {
      id: "v10-u10-cultural-heritage",
      word: "cultural heritage",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a truy\u1ec1n th\u1ed1ng",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8her\u026at\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+heritage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hoi An ancient town is a UNESCO world cultural heritage site cherished by millions.",
      exampleVi: "Ph\u1ed1 c\u1ed5 H\u1ed9i An l\u00e0 di s\u1ea3n v\u0103n h\u00f3a th\u1ebf gi\u1edbi UNESCO \u0111\u01b0\u1ee3c h\u00e0ng tri\u1ec7u ng\u01b0\u1eddi tr\u00e2n qu\u00fd.",
      collocations: ["rich cultural heritage", "preserve cultural heritage"]
    },
    {
      id: "v10-u10-nature-trek",
      word: "nature trek",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ebfn \u0111i b\u1ed9 b\u0103ng r\u1eebng kh\u00e1m ph\u00e1 thi\u00ean nhi\u00ean",
      ipa: "/\u02c8ne\u026at\u0283\u0259 trek/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+trek&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We booked a guided nature trek through the lush limestone valleys of Phong Nha.",
      exampleVi: "Ch\u00fang t\u00f4i \u0111\u00e3 \u0111\u1eb7t m\u1ed9t tour \u0111i b\u1ed9 b\u0103ng r\u1eebng c\u00f3 h\u01b0\u1edbng d\u1eabn qua thung l\u0169ng \u0111\u00e1 v\u00f4i t\u01b0\u01a1i \u0111\u1eb9p \u1edf Phong Nha.",
      collocations: ["go on a nature trek", "guided nature trek"]
    },
    {
      id: "v10-u10-environmental-impact",
      word: "environmental impact",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00e1c \u0111\u1ed9ng \u0111\u1ebfn m\u00f4i tr\u01b0\u1eddng xung quanh",
      ipa: "/\u026an\u02ccva\u026ar\u0259n\u02c8mentl \u02c8\u026amp\u00e6kt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=environmental+impact&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Campers are strictly trained to minimize their environmental impact and leave no trash.",
      exampleVi: "Ng\u01b0\u1eddi c\u1eafm tr\u1ea1i \u0111\u01b0\u1ee3c h\u01b0\u1edbng d\u1eabn nghi\u00eam ng\u1eb7t \u0111\u1ec3 gi\u1ea3m t\u1ed1i \u0111a t\u00e1c \u0111\u1ed9ng m\u00f4i tr\u01b0\u1eddng v\u00e0 kh\u00f4ng \u0111\u1ec3 l\u1ea1i r\u00e1c.",
      collocations: ["minimize environmental impact", "assess environmental impact"]
    },
    {
      id: "v10-u10-low-impact",
      word: "low-impact",
      partOfSpeech: "adj",
      meaningVi: "\u00edt g\u00e2y t\u00e1c \u0111\u1ed9ng ti\u00eau c\u1ef1c l\u00ean t\u1ef1 nhi\u00ean",
      ipa: "/\u02ccl\u0259\u028a \u02c8\u026amp\u00e6kt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=low-impact&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Kayaking and bicycling are low-impact recreational activities ideal for ecotourists.",
      exampleVi: "Ch\u00e8o thuy\u1ec1n kayak v\u00e0 \u0111\u1ea1p xe l\u00e0 c\u00e1c ho\u1ea1t \u0111\u1ed9ng gi\u1ea3i tr\u00ed \u00edt t\u00e1c \u0111\u1ed9ng m\u00f4i tr\u01b0\u1eddng l\u00fd t\u01b0\u1edfng cho kh\u00e1ch du l\u1ecbch sinh th\u00e1i.",
      collocations: ["low-impact tourism", "low-impact travel"]
    },
    {
      id: "v10-u10-local-community",
      word: "local community",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi d\u00e2n \u0111\u1ecba ph\u01b0\u01a1ng",
      ipa: "/\u02c8l\u0259\u028akl k\u0259\u02c8mju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=local+community&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Purchasing handmade brocade textiles directly supports the economic welfare of the local community.",
      exampleVi: "Mua v\u1ea3i th\u1ed5 c\u1ea9m d\u1ec7t tay h\u1ed7 tr\u1ee3 tr\u1ef1c ti\u1ebfp ph\u00fac l\u1ee3i kinh t\u1ebf c\u1ee7a c\u1ed9ng \u0111\u1ed3ng \u0111\u1ecba ph\u01b0\u01a1ng.",
      collocations: ["empower local communities", "benefit the local community"]
    },
    {
      id: "v10-u10-authentic-experience",
      word: "authentic experience",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea3i nghi\u1ec7m ch\u00e2n th\u1ef1c, nguy\u00ean b\u1ea3n",
      ipa: "/\u0254\u02d0\u02c8\u03b8ent\u026ak \u026ak\u02c8sp\u026a\u0259ri\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=authentic+experience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Staying in an ethnic stilt house offers an authentic experience of upland rural life.",
      exampleVi: "Ngh\u1ec9 t\u1ea1i nh\u00e0 s\u00e0n d\u00e2n t\u1ed9c mang l\u1ea1i tr\u1ea3i nghi\u1ec7m ch\u00e2n th\u1ef1c v\u1ec1 \u0111\u1eddi s\u1ed1ng n\u00f4ng th\u00f4n v\u00f9ng cao.",
      collocations: ["provide an authentic experience", "seek authentic experiences"]
    },
    {
      id: "v10-u10-homestay",
      word: "homestay",
      partOfSpeech: "n",
      meaningVi: "h\u00ecnh th\u1ee9c du l\u1ecbch \u1edf nh\u00e0 ng\u01b0\u1eddi b\u1ea3n x\u1ee9",
      ipa: "/\u02c8h\u0259\u028amste\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=homestay&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Our homestay host in Sa Pa treated us to traditional herbal baths and steaming hotpots.",
      exampleVi: "Ch\u1ee7 homestay \u1edf Sa Pa \u0111\u00e3 \u0111\u00e3i ch\u00fang t\u00f4i t\u1eafm l\u00e1 thu\u1ed1c truy\u1ec1n th\u1ed1ng v\u00e0 n\u1ed3i l\u1ea9u b\u1ed1c kh\u00f3i.",
      collocations: ["book a homestay", "family-run homestay"]
    },
    {
      id: "v10-u10-pristine",
      word: "pristine",
      partOfSpeech: "adj",
      meaningVi: "nguy\u00ean s\u01a1, trong l\u00e0nh kh\u00f4ng t\u00ec v\u1ebft",
      ipa: "/\u02c8pr\u026asti\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pristine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Con Dao archipelago is renowned for its pristine turquoise waters and nesting sea turtles.",
      exampleVi: "Qu\u1ea7n \u0111\u1ea3o C\u00f4n \u0110\u1ea3o n\u1ed5i ti\u1ebfng v\u1edbi l\u00e0n n\u01b0\u1edbc ng\u1ecdc b\u00edch nguy\u00ean s\u01a1 v\u00e0 b\u00e3i r\u00f9a \u0111\u1ebb tr\u1ee9ng.",
      collocations: ["pristine beaches", "pristine wilderness"]
    },
    {
      id: "v10-u10-souvenir",
      word: "souvenir",
      partOfSpeech: "n",
      meaningVi: "v\u1eadt k\u1ef7 ni\u1ec7m, qu\u00e0 l\u01b0u ni\u1ec7m",
      ipa: "/\u02ccsu\u02d0v\u0259\u02c8n\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=souvenir&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Instead of plastic knick-knacks, tourists are encouraged to buy locally made artisan souvenirs.",
      exampleVi: "Thay v\u00ec mua \u0111\u1ed3 nh\u1ef1a linh tinh, du kh\u00e1ch \u0111\u01b0\u1ee3c khuy\u1ebfn kh\u00edch mua qu\u00e0 l\u01b0u ni\u1ec7m th\u1ee7 c\u00f4ng \u0111\u1ecba ph\u01b0\u01a1ng.",
      collocations: ["buy local souvenirs", "handmade souvenir"]
    },
    {
      id: "v10-u10-conservation-fee",
      word: "conservation fee",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00ed b\u1ea3o t\u1ed3n t\u1ef1 nhi\u00ean tr\u00edch t\u1eeb v\u00e9 v\u00e0o c\u1ed5ng",
      ipa: "/\u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n fi\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservation+fee&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A small conservation fee is bundled into cave tickets to finance cave cleaning crews.",
      exampleVi: "M\u1ed9t kho\u1ea3n ph\u00ed b\u1ea3o t\u1ed3n nh\u1ecf \u0111\u01b0\u1ee3c g\u1ed9p trong v\u00e9 hang \u0111\u1ed9ng \u0111\u1ec3 chi tr\u1ea3 cho \u0111\u1ed9i d\u1ecdn v\u1ec7 sinh.",
      collocations: ["pay a conservation fee", "conservation fee contribution"]
    },
    {
      id: "v10-u10-bird-watching",
      word: "bird-watching",
      partOfSpeech: "n",
      meaningVi: "th\u00fa ng\u1eafm chim hoang d\u00e3 trong t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8b\u025c\u02d0d \u02ccw\u0252t\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bird-watching&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tram Chim National Park is an internationally acclaimed paradise for bird-watching enthusiasts.",
      exampleVi: "V\u01b0\u1eddn qu\u1ed1c gia Tr\u00e0m Chim l\u00e0 thi\u00ean \u0111\u01b0\u1eddng \u0111\u01b0\u1ee3c qu\u1ed1c t\u1ebf ca ng\u1ee3i cho nh\u1eefng ng\u01b0\u1eddi say m\u00ea ng\u1eafm chim hoang d\u00e3.",
      collocations: ["go bird-watching", "bird-watching tour"]
    },
    {
      id: "v10-u10-leave-no-trace",
      word: "leave no trace",
      partOfSpeech: "idiom",
      meaningVi: "kh\u00f4ng \u0111\u1ec3 l\u1ea1i d\u1ea5u v\u1ebft g\u00ec ngo\u00e0i b\u01b0\u1edbc ch\u00e2n",
      ipa: "/li\u02d0v n\u0259\u028a tre\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=leave+no+trace&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ecotourists live by the golden principle: 'Take only memories, leave no trace.'",
      exampleVi: "Kh\u00e1ch du l\u1ecbch sinh th\u00e1i lu\u00f4n tu\u00e2n theo nguy\u00ean t\u1eafc v\u00e0ng: 'Ch\u1ec9 mang \u0111i k\u1ef7 ni\u1ec7m, kh\u00f4ng \u0111\u1ec3 l\u1ea1i d\u1ea5u v\u1ebft g\u00ec.'",
      collocations: ["leave no trace ethics", "practice leave no trace"]
    },
    {
      id: "v10-u10-wildlife-viewing",
      word: "wildlife viewing",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng quan s\u00e1t \u0111\u1ed9ng v\u1eadt hoang d\u00e3",
      ipa: "/\u02c8wa\u026aldla\u026af \u02c8vju\u02d0\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+viewing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Night safaris offer safe wildlife viewing of nocturnal flying squirrels in Cat Tien.",
      exampleVi: "Chuy\u1ebfn \u0111i ban \u0111\u00eam cho ph\u00e9p quan s\u00e1t s\u00f3c bay ki\u1ebfm \u0103n an to\u00e0n trong r\u1eebng C\u00e1t Ti\u00ean.",
      collocations: ["wildlife viewing spot", "responsible wildlife viewing"]
    },
    {
      id: "v10-u10-biodiversity-corridor",
      word: "biodiversity corridor",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh lang \u0111a d\u1ea1ng sinh h\u1ecdc li\u00ean k\u1ebft r\u1eebng",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02c8k\u0252r\u026ad\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+corridor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Establishing a biodiversity corridor lets wild elephants migrate freely without entering farms.",
      exampleVi: "Thi\u1ebft l\u1eadp h\u00e0nh lang \u0111a d\u1ea1ng sinh h\u1ecdc gi\u00fap \u0111\u00e0n voi hoang d\u00e3 di chuy\u1ec3n t\u1ef1 do m\u00e0 kh\u00f4ng v\u00e0o ph\u00e1 hoa m\u00e0u.",
      collocations: ["wildlife biodiversity corridor", "protect ecological corridors"]
    },
    {
      id: "v10-u10-eco-conscious",
      word: "eco-conscious",
      partOfSpeech: "adj",
      meaningVi: "c\u00f3 \u00fd th\u1ee9c s\u00e2u s\u1eafc v\u1ec1 b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8k\u0252n\u0283\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-conscious&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eco-conscious backpackers avoid single-use bottles and take public electric shuttles.",
      exampleVi: "C\u00e1c b\u1ea1n ph\u01b0\u1ee3t th\u1ee7 c\u00f3 \u00fd th\u1ee9c m\u00f4i tr\u01b0\u1eddng tr\u00e1nh d\u00f9ng chai nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n v\u00e0 \u0111i xe \u0111i\u1ec7n c\u00f4ng c\u1ed9ng.",
      collocations: ["eco-conscious traveler", "eco-conscious choices"]
    },
    {
      id: "v10-u10-customs-and-traditions",
      word: "customs and traditions",
      partOfSpeech: "n.phr",
      meaningVi: "phong t\u1ee5c t\u1eadp qu\u00e1n truy\u1ec1n th\u1ed1ng",
      ipa: "/\u02c8k\u028cst\u0259mz \u0259nd tr\u0259\u02c8d\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=customs+and+traditions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Visitors should learn about local customs and traditions before entering village temples.",
      exampleVi: "Kh\u00e1ch du l\u1ecbch n\u00ean t\u00ecm hi\u1ec3u phong t\u1ee5c t\u1eadp qu\u00e1n \u0111\u1ecba ph\u01b0\u01a1ng tr\u01b0\u1edbc khi b\u01b0\u1edbc v\u00e0o c\u00e1c ng\u00f4i \u0111\u1ec1n trong l\u00e0ng.",
      collocations: ["respect customs and traditions", "ancient customs and traditions"]
    },
    {
      id: "v10-u10-littering",
      word: "littering",
      partOfSpeech: "n",
      meaningVi: "h\u00e0nh vi x\u1ea3 r\u00e1c b\u1eeba b\u00e3i ra c\u1ea3nh quan",
      ipa: "/\u02c8l\u026at\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=littering&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strict environmental fines have significantly curtailed littering on hiking trails.",
      exampleVi: "M\u1ee9c ph\u1ea1t m\u00f4i tr\u01b0\u1eddng nghi\u00eam kh\u1eafc \u0111\u00e3 gi\u1ea3m h\u1eb3n t\u00ecnh tr\u1ea1ng x\u1ea3 r\u00e1c b\u1eeba b\u00e3i tr\u00ean c\u00e1c cung \u0111\u01b0\u1eddng leo n\u00fai.",
      collocations: ["prohibit littering", "heavy fines for littering"]
    },
    {
      id: "v10-u10-caving",
      word: "caving",
      partOfSpeech: "n",
      meaningVi: "th\u00e1m hi\u1ec3m kh\u00e1m ph\u00e1 hang \u0111\u1ed9ng",
      ipa: "/\u02c8ke\u026av\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=caving&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Son Doong offers world-class caving adventures that attract international speleologists.",
      exampleVi: "S\u01a1n \u0110o\u00f2ng mang l\u1ea1i tr\u1ea3i nghi\u1ec7m th\u00e1m hi\u1ec3m hang \u0111\u1ed9ng \u0111\u1eb3ng c\u1ea5p th\u1ebf gi\u1edbi thu h\u00fat c\u00e1c nh\u00e0 \u0111\u1ecba ch\u1ea5t qu\u1ed1c t\u1ebf.",
      collocations: ["go caving", "caving expedition"]
    },
    {
      id: "v10-u10-eco-friendly-accommodation",
      word: "eco-friendly accommodation",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 s\u1edf l\u01b0u tr\u00fa xanh th\u00e2n thi\u1ec7n m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli \u0259\u02cck\u0252m\u0259\u02c8de\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly+accommodation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Choosing eco-friendly accommodation supports solar-heated showers and organic garden dining.",
      exampleVi: "Ch\u1ecdn n\u01a1i l\u01b0u tr\u00fa xanh h\u1ed7 tr\u1ee3 v\u00f2i t\u1eafm n\u01b0\u1edbc n\u00f3ng n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi v\u00e0 b\u1eefa \u0103n t\u1eeb v\u01b0\u1eddn rau h\u1eefu c\u01a1.",
      collocations: ["book eco-friendly accommodation", "certified eco-friendly accommodation"]
    },
    {
      id: "v10-u10-national-park",
      word: "national park",
      partOfSpeech: "n.phr",
      meaningVi: "v\u01b0\u1eddn qu\u1ed1c gia b\u1ea3o v\u1ec7 c\u1ea3nh quan",
      ipa: "/\u02ccn\u00e6\u0283n\u0259l \u02c8p\u0251\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=national+park&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cat Ba National Park combines rugged tropical karst mountains with rich marine life.",
      exampleVi: "V\u01b0\u1eddn qu\u1ed1c gia C\u00e1t B\u00e0 k\u1ebft h\u1ee3p n\u00fai \u0111\u00e1 v\u00f4i nhi\u1ec7t \u0111\u1edbi hi\u1ec3m tr\u1edf v\u1edbi \u0111\u1eddi s\u1ed1ng sinh v\u1eadt bi\u1ec3n phong ph\u00fa.",
      collocations: ["visit a national park", "designated as a national park"]
    },
    {
      id: "v10-u10-indigenous-culture",
      word: "indigenous culture",
      partOfSpeech: "n.phr",
      meaningVi: "v\u0103n h\u00f3a b\u1ea3n \u0111\u1ecba c\u1ee7a ng\u01b0\u1eddi d\u00e2n t\u1ed9c thi\u1ec3u s\u1ed1",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s \u02c8k\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous+culture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The museum preserves the intangible music and indigenous culture of Central Highland tribes.",
      exampleVi: "B\u1ea3o t\u00e0ng l\u01b0u gi\u1eef \u00e2m nh\u1ea1c phi v\u1eadt th\u1ec3 v\u00e0 v\u0103n h\u00f3a b\u1ea3n \u0111\u1ecba c\u1ee7a c\u00e1c b\u1ed9 t\u1ed9c T\u00e2y Nguy\u00ean.",
      collocations: ["celebrate indigenous culture", "respect indigenous culture"]
    },
    {
      id: "v10-u10-carbon-free",
      word: "carbon-free",
      partOfSpeech: "adj",
      meaningVi: "kh\u00f4ng ph\u00e1t th\u1ea3i kh\u00ed carbon",
      ipa: "/\u02cck\u0251\u02d0b\u0259n \u02c8fri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon-free&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Renting a bicycle is a delightful carbon-free way to tour the ancient imperial citadel.",
      exampleVi: "Thu\u00ea xe \u0111\u1ea1p l\u00e0 c\u00e1ch \u0111i d\u1ea1o kh\u00f4ng ph\u00e1t th\u1ea3i carbon tuy\u1ec7t v\u1eddi \u0111\u1ec3 ng\u1eafm nh\u00ecn kinh th\u00e0nh c\u1ed5.",
      collocations: ["carbon-free travel", "carbon-free transport"]
    },
    {
      id: "v10-u10-tour-guide",
      word: "tour guide",
      partOfSpeech: "n.phr",
      meaningVi: "h\u01b0\u1edbng d\u1eabn vi\u00ean du l\u1ecbch chuy\u00ean nghi\u1ec7p",
      ipa: "/\u02c8t\u028a\u0259 \u0261a\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tour+guide&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A knowledgeable local tour guide pointed out rare medicinal orchids clinging to the limestone cliffs.",
      exampleVi: "M\u1ed9t h\u01b0\u1edbng d\u1eabn vi\u00ean am hi\u1ec3u \u0111\u00e3 ch\u1ec9 cho ch\u00fang t\u00f4i nh\u1eefng nh\u00e0nh lan thu\u1ed1c qu\u00fd b\u00e1m tr\u00ean v\u00e1ch \u0111\u00e1 v\u00f4i.",
      collocations: ["licensed tour guide", "local tour guide"]
    },
    {
      id: "v10-u10-fragile-ecosystem",
      word: "fragile ecosystem",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 sinh th\u00e1i mong manh d\u1ec5 t\u1ed5n th\u01b0\u01a1ng",
      ipa: "/\u02ccfr\u00e6d\u0292a\u026al \u02c8i\u02d0k\u0259\u028as\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fragile+ecosystem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Restricting visitor numbers prevents overcrowding in the fragile ecosystem of coral bays.",
      exampleVi: "Gi\u1edbi h\u1ea1n s\u1ed1 l\u01b0\u1ee3ng kh\u00e1ch gi\u00fap ng\u0103n ng\u1eeba qu\u00e1 t\u1ea3i cho h\u1ec7 sinh th\u00e1i san h\u00f4 mong manh \u1edf c\u00e1c v\u1ecbnh bi\u1ec3n.",
      collocations: ["protect a fragile ecosystem", "disrupt a fragile ecosystem"]
    },
    {
      id: "v10-u10-mass-tourism",
      word: "mass tourism",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch \u0111\u1ea1i tr\u00e0 v\u1edbi s\u1ed1 l\u01b0\u1ee3ng du kh\u00e1ch \u1ed3 \u1ea1t",
      ipa: "/\u02ccm\u00e6s \u02c8t\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mass+tourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unregulated mass tourism often pollutes natural beaches and drives up local cost of living.",
      exampleVi: "Du l\u1ecbch \u0111\u1ea1i tr\u00e0 \u1ed3 \u1ea1t kh\u00f4ng ki\u1ec3m so\u00e1t th\u01b0\u1eddng l\u00e0m \u00f4 nhi\u1ec5m b\u00e3i bi\u1ec3n v\u00e0 \u0111\u1ea9y chi ph\u00ed sinh ho\u1ea1t l\u00ean cao.",
      collocations: ["drawbacks of mass tourism", "alternatives to mass tourism"]
    },
    {
      id: "v10-u10-hospitality",
      word: "hospitality",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng hi\u1ebfu kh\u00e1ch, s\u1ef1 \u0111\u00f3n ti\u1ebfp n\u1ed3ng h\u1eadu",
      ipa: "/\u02cch\u0252sp\u026a\u02c8t\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hospitality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The warm hospitality of Vietnamese villagers leaves lasting impressions on foreigners.",
      exampleVi: "L\u00f2ng hi\u1ebfu kh\u00e1ch n\u1ed3ng h\u1eadu c\u1ee7a b\u00e0 con n\u00f4ng th\u00f4n Vi\u1ec7t Nam \u0111\u1ec3 l\u1ea1i \u1ea5n t\u01b0\u1ee3ng s\u00e2u \u0111\u1eadm cho du kh\u00e1ch qu\u1ed1c t\u1ebf.",
      collocations: ["warm hospitality", "generous hospitality"]
    },
    {
      id: "v10-u10-green-destination",
      word: "green destination",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m \u0111\u1ebfn du l\u1ecbch xanh th\u00e2n thi\u1ec7n",
      ipa: "/\u0261ri\u02d0n \u02ccdest\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+destination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Quang Nam province is pioneering new guidelines to become Vietnam's premier green destination.",
      exampleVi: "T\u1ec9nh Qu\u1ea3ng Nam \u0111ang ti\u00ean phong th\u1ef1c hi\u1ec7n h\u01b0\u1edbng d\u1eabn m\u1edbi \u0111\u1ec3 tr\u1edf th\u00e0nh \u0111i\u1ec3m \u0111\u1ebfn xanh h\u00e0ng \u0111\u1ea7u c\u1ea3 n\u01b0\u1edbc.",
      collocations: ["sustainable green destination", "award-winning green destination"]
    },
    {
      id: "v10-u10-tranquil",
      word: "tranquil",
      partOfSpeech: "adj",
      meaningVi: "y\u00ean b\u00ecnh, thanh t\u1ecbnh t\u0129nh l\u1eb7ng",
      ipa: "/\u02c8tr\u00e6\u014bkw\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tranquil&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Paddling along the tranquil river at dawn refreshed our spirits away from city sirens.",
      exampleVi: "Ch\u00e8o thuy\u1ec1n thong dong tr\u00ean d\u00f2ng s\u00f4ng thanh b\u00ecnh l\u00fac b\u00ecnh minh gi\u00fap t\u00e2m h\u1ed3n th\u01b0 th\u00e1i xa r\u1eddi c\u00f2i xe \u0111\u00f4 th\u1ecb.",
      collocations: ["tranquil scenery", "tranquil village"]
    },
    {
      id: "v10-u10-itinerary",
      word: "itinerary",
      partOfSpeech: "n",
      meaningVi: "l\u1ecbch tr\u00ecnh chuy\u1ebfn tham quan chi ti\u1ebft",
      ipa: "/a\u026a\u02c8t\u026an\u0259r\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=itinerary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Our ecotourism itinerary includes sunrise bird-watching and a pottery workshop.",
      exampleVi: "L\u1ecbch tr\u00ecnh tour du l\u1ecbch sinh th\u00e1i bao g\u1ed3m ng\u1eafm chim l\u00fac b\u00ecnh minh v\u00e0 tr\u1ea3i nghi\u1ec7m l\u00e0m g\u1ed1m.",
      collocations: ["plan an itinerary", "detailed travel itinerary"]
    },
    {
      id: "v10-u10-biodegradable-sunscreen",
      word: "biodegradable sunscreen",
      partOfSpeech: "n.phr",
      meaningVi: "kem ch\u1ed1ng n\u1eafng t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl \u02c8s\u028cnskri\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable+sunscreen&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Swimmers are requested to apply reef-safe biodegradable sunscreen to protect marine coral.",
      exampleVi: "Kh\u00e1ch t\u1eafm bi\u1ec3n \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u d\u00f9ng kem ch\u1ed1ng n\u1eafng t\u1ef1 ph\u00e2n h\u1ee7y sinh h\u1ecdc \u0111\u1ec3 b\u1ea3o v\u1ec7 r\u1ea1n san h\u00f4.",
      collocations: ["reef-safe biodegradable sunscreen", "use biodegradable sunscreen"]
    },
    {
      id: "v10-u10-trekking",
      word: "trekking",
      partOfSpeech: "n",
      meaningVi: "chuy\u1ebfn \u0111i b\u1ed9 d\u00e3 ngo\u1ea1i leo n\u00fai d\u00e0i ng\u00e0y",
      ipa: "/\u02c8trek\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trekking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trekking across Fansipan peak requires strong physical stamina and proper boots.",
      exampleVi: "\u0110i b\u1ed9 leo n\u00fai xuy\u00ean \u0111\u1ec9nh Fansipan \u0111\u00f2i h\u1ecfi th\u1ec3 l\u1ef1c b\u1ec1n b\u1ec9 v\u00e0 gi\u00e0y leo n\u00fai chuy\u00ean d\u1ee5ng.",
      collocations: ["mountain trekking", "go trekking in Sa Pa"]
    }
    ,
    {
      id: "v10-extra-guided-tour",
      word: "guided tour",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ebfn tham quan c\u00f3 h\u01b0\u1edbng d\u1eabn vi\u00ean",
      ipa: "/\u02cc\u0261a\u026ad\u026ad \u02c8t\u028a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=guided+tour&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A knowledgeable ranger led our guided tour through the bat cave safely.",
      exampleVi: "Ng\u01b0\u1eddi ki\u1ec3m l\u00e2m am hi\u1ec3u \u0111\u00e3 d\u1eabn d\u1eaft chuy\u1ebfn tham quan qua hang d\u01a1i m\u1ed9t c\u00e1ch an to\u00e0n.",
      collocations: ["book a guided tour", "informative guided tour"]
    }
    ,
    {
      id: "v10-extra-nature-trail",
      word: "nature trail",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u01b0\u1eddng m\u00f2n kh\u00e1m ph\u00e1 thi\u00ean nhi\u00ean",
      ipa: "/\u02c8ne\u026at\u0283\u0259 tre\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+trail&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We followed a marked nature trail through ancient limestone karst valleys.",
      exampleVi: "Ch\u00fang t\u00f4i men theo \u0111\u01b0\u1eddng m\u00f2n thi\u00ean nhi\u00ean qua c\u00e1c thung l\u0169ng \u0111\u00e1 v\u00f4i c\u1ed5 k\u00ednh.",
      collocations: ["hike a nature trail", "scenic nature trail"]
    }
    ,
    {
      id: "v10-extra-responsible-tourism",
      word: "responsible tourism",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch c\u00f3 tr\u00e1ch nhi\u1ec7m v\u1edbi \u0111i\u1ec3m \u0111\u1ebfn",
      ipa: "/r\u026a\u02c8sp\u0252ns\u0259bl \u02c8t\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=responsible+tourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Responsible tourism respects local ethnic customs and supports homegrown craft markets.",
      exampleVi: "Du l\u1ecbch c\u00f3 tr\u00e1ch nhi\u1ec7m t\u00f4n tr\u1ecdng phong t\u1ee5c \u0111\u1ecba ph\u01b0\u01a1ng v\u00e0 mua s\u1eafm t\u1ea1i ch\u1ee3 th\u1ee7 c\u00f4ng b\u1ea3n \u0111\u1ecba.",
      collocations: ["principles of responsible tourism", "promote responsible tourism"]
    }
    ,
    {
      id: "v10-extra-eco-lodge",
      word: "eco-lodge",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e0 ngh\u1ec9 sinh th\u00e1i b\u1eb1ng tre n\u1ee9a t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8i\u02d0k\u0259\u028a l\u0252d\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-lodge&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "We stayed at a riverside eco-lodge built entirely of bamboo and thatch.",
      exampleVi: "Ch\u00fang t\u00f4i ngh\u1ec9 t\u1ea1i khu nh\u00e0 ngh\u1ec9 sinh th\u00e1i ven s\u00f4ng l\u00e0m ho\u00e0n to\u00e0n b\u1eb1ng tre v\u00e0 m\u00e1i l\u00e1.",
      collocations: ["stay at an eco-lodge", "rustic eco-lodge"]
    }
    ,
    {
      id: "v10-extra-cultural-sensitivity",
      word: "cultural sensitivity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nh\u1ea1y b\u00e9n v\u00e0 t\u00f4n tr\u1ecdng v\u0103n h\u00f3a b\u1ea3n \u0111\u1ecba",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02ccsens\u0259\u02c8t\u026av\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+sensitivity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tourists should dress modestly in sacred pagodas to demonstrate cultural sensitivity.",
      exampleVi: "Du kh\u00e1ch n\u00ean \u0103n m\u1eb7c l\u1ecbch s\u1ef1 khi v\u00e0o ch\u00f9a chi\u1ec1n \u0111\u1ec3 th\u1ec3 hi\u1ec7n s\u1ef1 t\u00f4n tr\u1ecdng v\u0103n h\u00f3a.",
      collocations: ["show cultural sensitivity", "exercise cultural sensitivity"]
    }
    ,
    {
      id: "v10-extra-sustainable-travel",
      word: "sustainable travel",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch b\u1ec1n v\u1eefng b\u1ea3o v\u1ec7 t\u01b0\u01a1ng lai",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8tr\u00e6vl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+travel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable travel minimizes carbon emissions by prioritizing train transit over flights.",
      exampleVi: "Du l\u1ecbch b\u1ec1n v\u1eefng gi\u1ea3m thi\u1ec3u kh\u00ed th\u1ea3i b\u1eb1ng c\u00e1ch \u01b0u ti\u00ean \u0111i t\u00e0u h\u1ecfa thay cho m\u00e1y bay.",
      collocations: ["advocate sustainable travel", "sustainable travel guide"]
    }
    ,
    {
      id: "v10-extra-green-traveler",
      word: "green traveler",
      partOfSpeech: "n.phr",
      meaningVi: "du kh\u00e1ch xanh c\u00f3 \u00fd th\u1ee9c b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u0261ri\u02d0n \u02c8tr\u00e6v\u0259l\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+traveler&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A green traveler carries a refillable steel flask and avoids single-use plastic.",
      exampleVi: "M\u1ed9t du kh\u00e1ch xanh lu\u00f4n mang b\u00ecnh n\u01b0\u1edbc inox t\u00e1i s\u1eed d\u1ee5ng v\u00e0 tr\u00e1nh d\u00f9ng \u0111\u1ed3 nh\u1ef1a m\u1ed9t l\u1ea7n.",
      collocations: ["habits of a green traveler", "become a green traveler"]
    }
    ,
    {
      id: "v10-extra-nature-exploration",
      word: "nature exploration",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00e1m hi\u1ec3m v\u00e0 kh\u00e1m ph\u00e1 v\u1ebb \u0111\u1eb9p t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8ne\u026at\u0283\u0259 \u02ccekspl\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+exploration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Caving expeditions in Phong Nha offer unmatched thrills of nature exploration.",
      exampleVi: "Th\u00e1m hi\u1ec3m hang \u0111\u1ed9ng \u1edf Phong Nha \u0111em l\u1ea1i c\u1ea3m gi\u00e1c kh\u00e1m ph\u00e1 t\u1ef1 nhi\u00ean k\u1ef3 th\u00fa c\u00f3 m\u1ed9t kh\u00f4ng hai.",
      collocations: ["thrill of nature exploration", "join nature exploration"]
    }
    ,
    {
      id: "v10-extra-wilderness",
      word: "wilderness",
      partOfSpeech: "n",
      meaningVi: "v\u00f9ng hoang d\u00e3 thi\u00ean nhi\u00ean nguy\u00ean s\u01a1",
      ipa: "/\u02c8w\u026ald\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wilderness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hikers must carry compasses and emergency radios when venturing into the deep wilderness.",
      exampleVi: "Ng\u01b0\u1eddi leo n\u00fai ph\u1ea3i mang theo la b\u00e0n v\u00e0 b\u1ed9 \u0111\u00e0m kh\u1ea9n c\u1ea5p khi b\u01b0\u1edbc v\u00e0o v\u00f9ng r\u1eebng hoang d\u00e3.",
      collocations: ["untouched wilderness", "survive in the wilderness"]
    }
    ,
    {
      id: "v10-extra-eco-adventure",
      word: "eco-adventure",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ebfn phi\u00eau l\u01b0u d\u00e3 ngo\u1ea1i sinh th\u00e1i",
      ipa: "/\u02c8i\u02d0k\u0259\u028a \u0259d\u02c8vent\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-adventure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Whitewater rafting on jungle rivers is an exhilarating eco-adventure for youths.",
      exampleVi: "Ch\u00e8o xu\u1ed3ng v\u01b0\u1ee3t th\u00e1c tr\u00ean s\u00f4ng gi\u1eefa r\u1eebng l\u00e0 chuy\u1ebfn phi\u00eau l\u01b0u sinh th\u00e1i \u0111\u1ea7y k\u00edch th\u00edch cho gi\u1edbi tr\u1ebb.",
      collocations: ["embark on an eco-adventure", "memorable eco-adventure"]
    }
    ,
    {
      id: "v10-extra-conservation-travel",
      word: "conservation travel",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch k\u1ebft h\u1ee3p tham gia b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean",
      ipa: "/\u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n \u02c8tr\u00e6vl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservation+travel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteering to protect turtle nests on Con Dao island is meaningful conservation travel.",
      exampleVi: "T\u00ecnh nguy\u1ec7n b\u1ea3o v\u1ec7 b\u00e3i r\u00f9a \u0111\u1ebb tr\u1ee9ng t\u1ea1i C\u00f4n \u0110\u1ea3o l\u00e0 chuy\u1ebfn \u0111i b\u1ea3o t\u1ed3n \u0111\u1ea7y \u00fd ngh\u0129a.",
      collocations: ["participate in conservation travel", "conservation travel programs"]
    }
    ,
    {
      id: "mega-unit-1-nature-reserve",
      word: "nature reserve",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean \u0111\u01b0\u1ee3c b\u1ea3o v\u1ec7 nghi\u00eam ng\u1eb7t",
      ipa: "/\u02c8ne\u026at\u0283\u0259 r\u026a\u02c8z\u025c\u02d0v/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nature+reserve&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Visitors in the nature reserve must strictly remain on marked walking timber boardwalks.",
      exampleVi: "Kh\u00e1ch tham quan trong khu b\u1ea3o t\u1ed3n thi\u00ean nhi\u00ean ph\u1ea3i tu\u00e2n th\u1ee7 nghi\u00eam vi\u1ec7c ch\u1ec9 \u0111i tr\u00ean l\u1ed1i \u0111i b\u1eb1ng g\u1ed7 quy \u0111\u1ecbnh.",
      collocations: ["explore a nature reserve", "wildlife in a nature reserve"]
    }
    ,
    {
      id: "mega-unit-1-responsible-tourism",
      word: "responsible tourism",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch c\u00f3 tr\u00e1ch nhi\u1ec7m v\u1edbi c\u1ed9ng \u0111\u1ed3ng v\u00e0 thi\u00ean nhi\u00ean",
      ipa: "/r\u026a\u02ccsp\u0252ns\u0259bl \u02c8t\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=responsible+tourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Responsible tourism minimizes carbon emissions while contributing revenue directly to native villages.",
      exampleVi: "Du l\u1ecbch c\u00f3 tr\u00e1ch nhi\u1ec7m gi\u1ea3m thi\u1ec3u ph\u00e1t th\u1ea3i carbon \u0111\u1ed3ng th\u1eddi \u0111\u00f3ng g\u00f3p doanh thu tr\u1ef1c ti\u1ebfp cho c\u00e1c b\u1ea3n l\u00e0ng b\u1ea3n \u0111\u1ecba.",
      collocations: ["practice responsible tourism", "code of responsible tourism"]
    }
    ,
    {
      id: "mega-unit-1-indigenous-community",
      word: "indigenous community",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed9ng \u0111\u1ed3ng ng\u01b0\u1eddi b\u1ea3n \u0111\u1ecba sinh s\u1ed1ng l\u00e2u \u0111\u1eddi",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s k\u0259\u02c8mju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous+community&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Homestays run by the indigenous community offer travelers authentic immersion into ancestral crafts.",
      exampleVi: "Nh\u1eefng c\u0103n nh\u00e0 homestay do c\u1ed9ng \u0111\u1ed3ng b\u1ea3n \u0111\u1ecba t\u1ef1 qu\u1ea3n l\u00fd mang l\u1ea1i cho du kh\u00e1ch tr\u1ea3i nghi\u1ec7m ch\u00e2n th\u1ef1c v\u1ec1 ngh\u1ec1 th\u1ee7 c\u00f4ng truy\u1ec1n th\u1ed1ng.",
      collocations: ["support indigenous communities", "heritage of the community"]
    }
    ,
    {
      id: "mega-unit-1-low-impact-travel",
      word: "low-impact travel",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch t\u00e1c \u0111\u1ed9ng th\u1ea5p h\u1ea1n ch\u1ebf t\u1ed1i \u0111a r\u00e1c v\u00e0 kh\u00ed th\u1ea3i",
      ipa: "/\u02ccl\u0259\u028a \u02c8\u026amp\u00e6kt \u02c8tr\u00e6vl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=low-impact+travel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bicycling through national park valley trails exemplifies low-impact travel.",
      exampleVi: "\u0110\u1ea1p xe qua c\u00e1c cung \u0111\u01b0\u1eddng thung l\u0169ng v\u01b0\u1eddn qu\u1ed1c gia l\u00e0 h\u00ecnh m\u1eabu ti\u00eau bi\u1ec3u c\u1ee7a phong c\u00e1ch du l\u1ecbch t\u00e1c \u0111\u1ed9ng th\u1ea5p.",
      collocations: ["opt for low-impact travel", "low-impact travel principles"]
    }
    ,
    {
      id: "mega-unit-1-cultural-sensitivity",
      word: "cultural sensitivity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 nh\u1ea1y b\u00e9n t\u00f4n tr\u1ecdng phong t\u1ee5c v\u0103n h\u00f3a \u0111\u1ecba ph\u01b0\u01a1ng",
      ipa: "/\u02cck\u028clt\u0283\u0259r\u0259l \u02ccsens\u0259\u02c8t\u026av\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+sensitivity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tour guides brief foreign trekkers on dress codes to maintain cultural sensitivity at mountain temples.",
      exampleVi: "H\u01b0\u1edbng d\u1eabn vi\u00ean nh\u1eafc nh\u1edf du kh\u00e1ch v\u1ec1 quy chu\u1ea9n trang ph\u1ee5c nh\u1eb1m gi\u1eef g\u00ecn s\u1ef1 t\u00f4n tr\u1ecdng v\u0103n h\u00f3a t\u1ea1i c\u00e1c ng\u00f4i ch\u00f9a v\u00f9ng cao.",
      collocations: ["exercise cultural sensitivity", "demonstrate sensitivity"]
    }
    ,
    {
      id: "mega-unit-1-carrying-capacity",
      word: "carrying capacity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9c ch\u1ee9a du kh\u00e1ch t\u1ed1i \u0111a \u0111\u1ec3 b\u1ea3o v\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8k\u00e6ri\u026a\u014b k\u0259\u02c8p\u00e6s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carrying+capacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The marine island limits daily ferry passenger numbers to remain well within its environmental carrying capacity.",
      exampleVi: "H\u00f2n \u0111\u1ea3o gi\u1edbi h\u1ea1n s\u1ed1 l\u01b0\u1ee3ng kh\u00e1ch \u0111i ph\u00e0 m\u1ed7i ng\u00e0y \u0111\u1ec3 n\u1eb1m trong ng\u01b0\u1ee1ng s\u1ee9c ch\u1ee9a m\u00f4i tr\u01b0\u1eddng cho ph\u00e9p.",
      collocations: ["exceed carrying capacity", "calculate carrying capacity"]
    }
    ,
    {
      id: "mega-unit-1-eco-resort",
      word: "eco-resort",
      partOfSpeech: "n.phr",
      meaningVi: "khu ngh\u1ec9 d\u01b0\u1ee1ng sinh th\u00e1i s\u1eed d\u1ee5ng n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi",
      ipa: "/\u02c8i\u02d0k\u0259\u028a r\u026a\u02c8z\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-resort&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The beachfront eco-resort powers all bungalows with solar panels and harvests rainwater.",
      exampleVi: "Khu ngh\u1ec9 d\u01b0\u1ee1ng sinh th\u00e1i ven bi\u1ec3n v\u1eadn h\u00e0nh to\u00e0n b\u1ed9 c\u00e1c c\u0103n nh\u00e0 bungalow b\u1eb1ng pin m\u1eb7t tr\u1eddi v\u00e0 thu gom n\u01b0\u1edbc m\u01b0a.",
      collocations: ["stay at an eco-resort", "sustainable eco-resort"]
    }
    ,
    {
      id: "mega-unit-1-guided-trek",
      word: "guided trek",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ebfn \u0111i b\u1ed9 xuy\u00ean r\u1eebng c\u00f3 h\u01b0\u1edbng d\u1eabn vi\u00ean",
      ipa: "/\u02c8\u0261a\u026ad\u026ad trek/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=guided+trek&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Visitors booked a three-day guided trek through Phong Nha-Ke Bang's subterranean river caves.",
      exampleVi: "Du kh\u00e1ch \u0111\u1eb7t chuy\u1ebfn \u0111i b\u1ed9 v\u01b0\u1ee3t r\u1eebng ba ng\u00e0y c\u00f3 ng\u01b0\u1eddi d\u1eabn \u0111\u01b0\u1eddng qua c\u00e1c hang \u0111\u1ed9ng s\u00f4ng ng\u1ea7m Phong Nha - K\u1ebb B\u00e0ng.",
      collocations: ["embark on a guided trek", "strenuous guided trek"]
    }
    ,
    {
      id: "mega-unit-1-wildlife-viewing",
      word: "wildlife viewing",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng ng\u1eafm nh\u00ecn \u0111\u1ed9ng v\u1eadt hoang d\u00e3 t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8wa\u026aldla\u026af \u02c8vju\u02d0\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wildlife+viewing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Early dawn boat rides on the lagoon present tranquil opportunities for migratory wildlife viewing.",
      exampleVi: "Nh\u1eefng chuy\u1ebfn thuy\u1ec1n s\u1edbm l\u00fac b\u00ecnh minh tr\u00ean \u0111\u1ea7m ph\u00e1 mang l\u1ea1i c\u01a1 h\u1ed9i tuy\u1ec7t v\u1eddi \u0111\u1ec3 chi\u00eam ng\u01b0\u1ee1ng chim di c\u01b0 ngo\u00e0i t\u1ef1 nhi\u00ean.",
      collocations: ["ethical wildlife viewing", "wildlife viewing platform"]
    }
    ,
    {
      id: "mega-unit-1-leave-no-trace",
      word: "leave no trace",
      partOfSpeech: "idiom",
      meaningVi: "nguy\u00ean t\u1eafc kh\u00f4ng \u0111\u1ec3 l\u1ea1i d\u1ea5u v\u1ebft r\u00e1c th\u1ea3i trong t\u1ef1 nhi\u00ean",
      ipa: "/li\u02d0v n\u0259\u028a tre\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=leave+no+trace&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Campers follow the strict leave no trace ethic by packing out all remnants of plastic and food packaging.",
      exampleVi: "Nh\u1eefng ng\u01b0\u1eddi c\u1eafm tr\u1ea1i tu\u00e2n th\u1ee7 nghi\u00eam ng\u1eb7t nguy\u00ean t\u1eafc kh\u00f4ng \u0111\u1ec3 l\u1ea1i d\u1ea5u v\u1ebft b\u1eb1ng c\u00e1ch gom s\u1ea1ch m\u1ecdi bao b\u00ec v\u00e0 r\u00e1c th\u1ea3i mang v\u1ec1.",
      collocations: ["practice leave no trace", "leave no trace guidelines"]
    }
    ,
    {
      id: "mega-unit-1-local-craft",
      word: "local craft",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ea3n ph\u1ea9m th\u1ee7 c\u00f4ng m\u1ef9 ngh\u1ec7 \u0111\u1ecba ph\u01b0\u01a1ng",
      ipa: "/\u02c8l\u0259\u028akl kr\u0251\u02d0ft/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=local+craft&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Purchasing local crafts like handwoven brocade directly bolsters tribal artisan households.",
      exampleVi: "Mua s\u1eafm c\u00e1c s\u1ea3n ph\u1ea9m th\u1ee7 c\u00f4ng \u0111\u1ecba ph\u01b0\u01a1ng nh\u01b0 th\u1ed5 c\u1ea9m d\u1ec7t tay gi\u00fap tr\u1ef1c ti\u1ebfp nu\u00f4i s\u1ed1ng c\u00e1c gia \u0111\u00ecnh ngh\u1ec7 nh\u00e2n d\u00e2n t\u1ed9c.",
      collocations: ["support local crafts", "traditional local crafts"]
    }
    ,
    {
      id: "mega-unit-1-canopy-walkway",
      word: "canopy walkway",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ea7u treo \u0111i b\u1ed9 tr\u00ean ng\u1ecdn c\u00e2y r\u1eebng nguy\u00ean sinh",
      ipa: "/\u02c8k\u00e6n\u0259pi \u02c8w\u0254\u02d0kwe\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=canopy+walkway&type=2",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Suspended high above the forest floor, the canopy walkway grants breathtaking panoramic jungle vistas.",
      exampleVi: "\u0110\u01b0\u1ee3c treo l\u01a1 l\u1eedng tr\u00ean c\u00e1c t\u1ea7ng c\u00e2y r\u1eebng, c\u00e2y c\u1ea7u \u0111i b\u1ed9 tr\u00ean ng\u1ecdn c\u00e2y \u0111em l\u1ea1i t\u1ea7m nh\u00ecn to\u00e0n c\u1ea3nh r\u1eebng r\u1eadm tuy\u1ec7t m\u1ef9.",
      collocations: ["stroll along the canopy walkway", "aerial canopy walkway"]
    }
    ,
    {
      id: "mega-unit-1-sustainable-lodging",
      word: "sustainable lodging",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 s\u1edf l\u01b0u tr\u00fa \u0111\u1ea1t ti\u00eau chu\u1ea9n b\u1ea3o v\u1ec7 sinh th\u00e1i",
      ipa: "/s\u0259\u02ccste\u026an\u0259bl \u02c8l\u0252d\u0292\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+lodging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ecolodges built with untreated bamboo and thatch provide rustic sustainable lodging.",
      exampleVi: "Nh\u1eefng c\u0103n nh\u00e0 sinh th\u00e1i d\u1ef1ng t\u1eeb tre n\u1ee9a m\u1ed9c v\u00e0 m\u00e1i l\u00e1 mang l\u1ea1i ch\u1ed7 l\u01b0u tr\u00fa m\u1ed9c m\u1ea1c v\u00e0 th\u00e2n thi\u1ec7n v\u1edbi t\u1ef1 nhi\u00ean.",
      collocations: ["book sustainable lodging", "certified lodging"]
    }
    ,
    {
      id: "mega-unit-1-botanical-garden",
      word: "botanical garden",
      partOfSpeech: "n.phr",
      meaningVi: "v\u01b0\u1eddn th\u1ef1c v\u1eadt b\u1ea3o t\u1ed3n c\u00e1c lo\u00e0i c\u00e2y hoa qu\u00fd",
      ipa: "/b\u0259\u02c8t\u00e6n\u026akl \u02c8\u0261\u0251\u02d0dn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=botanical+garden&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The botanical garden preserves rare alpine medicinal herbs collected across the northern highlands.",
      exampleVi: "V\u01b0\u1eddn th\u1ef1c v\u1eadt l\u01b0u gi\u1eef v\u00e0 b\u1ea3o t\u1ed3n c\u00e1c lo\u00e0i th\u1ea3o d\u01b0\u1ee3c qu\u00fd hi\u1ebfm v\u00f9ng n\u00fai cao thu th\u1eadp t\u1eeb kh\u1eafp v\u00f9ng cao ph\u00eda B\u1eafc.",
      collocations: ["visit a botanical garden", "stroll through the garden"]
    }
    ,
    {
      id: "mega-unit-1-pristine-landscape",
      word: "pristine landscape",
      partOfSpeech: "n.phr",
      meaningVi: "phong c\u1ea3nh thi\u00ean nhi\u00ean nguy\u00ean s\u01a1 ch\u01b0a b\u1ecb t\u00e0n ph\u00e1",
      ipa: "/\u02c8pr\u026asti\u02d0n \u02c8l\u00e6ndske\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pristine+landscape&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The island's pristine landscape of emerald lagoons and limestone cliffs left tourists utterly spellbound.",
      exampleVi: "Khung c\u1ea3nh nguy\u00ean s\u01a1 c\u1ee7a h\u00f2n \u0111\u1ea3o v\u1edbi \u0111\u1ea7m ph\u00e1 xanh ng\u1ecdc b\u00edch v\u00e0 v\u00e1ch \u0111\u00e1 v\u00f4i khi\u1ebfn du kh\u00e1ch ho\u00e0n to\u00e0n m\u00ea \u0111\u1eafm.",
      collocations: ["admire pristine landscapes", "preserve pristine landscapes"]
    }
    ,
    {
      id: "mega-unit-1-biodegradable-sunscreen",
      word: "biodegradable sunscreen",
      partOfSpeech: "n.phr",
      meaningVi: "kem ch\u1ed1ng n\u1eafng ph\u00e2n h\u1ee7y sinh h\u1ecdc an to\u00e0n cho san h\u00f4",
      ipa: "/\u02ccba\u026a\u0259\u028ad\u026a\u02c8\u0261re\u026ad\u0259bl \u02c8s\u028cnskri\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodegradable+sunscreen&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Snorkelers are required to wear coral-safe biodegradable sunscreen before jumping into the marine bay.",
      exampleVi: "Du kh\u00e1ch l\u1eb7n bi\u1ec3n ph\u1ea3i thoa kem ch\u1ed1ng n\u1eafng ph\u00e2n h\u1ee7y sinh h\u1ecdc an to\u00e0n cho san h\u00f4 tr\u01b0\u1edbc khi nh\u1ea3y xu\u1ed1ng v\u1ecbnh bi\u1ec3n.",
      collocations: ["apply biodegradable sunscreen", "coral-safe sunscreen"]
    }
    ,
    {
      id: "mega-unit-1-birdwatching-sanctuary",
      word: "birdwatching sanctuary",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n ng\u1eafm chim hoang d\u00e3",
      ipa: "/\u02c8b\u025c\u02d0dw\u0252t\u0283\u026a\u014b \u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=birdwatching+sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Armed with binoculars, naturalists gathered at Tram Chim birdwatching sanctuary to glimpse Sarus cranes.",
      exampleVi: "Mang theo \u1ed1ng nh\u00f2m, c\u00e1c nh\u00e0 t\u1ef1 nhi\u00ean h\u1ecdc h\u1ed9i t\u1ee5 t\u1ea1i khu b\u1ea3o t\u1ed3n chim Tr\u00e0m Chim \u0111\u1ec3 ng\u1eafm nh\u00ecn s\u1ebfu \u0111\u1ea7u \u0111\u1ecf.",
      collocations: ["flock to the sanctuary", "wetland birdwatching sanctuary"]
    }
    ,
    {
      id: "mega-unit-1-conservation-levy",
      word: "conservation levy",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n ph\u00ed b\u1ea3o t\u1ed3n m\u00f4i tr\u01b0\u1eddng thu t\u1eeb du kh\u00e1ch",
      ipa: "/\u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n \u02c8levi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservation+levy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ticket revenues include a modest conservation levy dedicated directly to reforestation patrols.",
      exampleVi: "Doanh thu ti\u1ec1n v\u00e9 bao g\u1ed3m m\u1ed9t kho\u1ea3n ph\u00ed b\u1ea3o t\u1ed3n nh\u1ecf \u0111\u01b0\u1ee3c d\u00f9ng tr\u1ef1c ti\u1ebfp cho c\u00e1c \u0111\u1ed9i tu\u1ea7n tra tr\u1ed3ng r\u1eebng.",
      collocations: ["impose a conservation levy", "fund wildlife through a levy"]
    }
    ,
    {
      id: "mega-unit-1-organic-farmstay",
      word: "organic farmstay",
      partOfSpeech: "n.phr",
      meaningVi: "n\u00f4ng tr\u1ea1i h\u1eefu c\u01a1 k\u1ebft h\u1ee3p tr\u1ea3i nghi\u1ec7m l\u01b0u tr\u00fa",
      ipa: "/\u0254\u02d0\u02c8\u0261\u00e6n\u026ak \u02c8f\u0251\u02d0mste\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=organic+farmstay&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Guests at the organic farmstay harvested fresh heirloom strawberries for their breakfast smoothie bowls.",
      exampleVi: "Kh\u00e1ch t\u1ea1i n\u00f4ng tr\u1ea1i h\u1eefu c\u01a1 t\u1ef1 tay thu ho\u1ea1ch nh\u1eefng qu\u1ea3 d\u00e2u t\u00e2y t\u01b0\u01a1i ngon cho b\u1eefa sinh t\u1ed1 s\u00e1ng l\u00e0nh m\u1ea1nh.",
      collocations: ["book an organic farmstay", "farmstay experience"]
    }
    ,
    {
      id: "mega-unit-1-scenic-overlook",
      word: "scenic overlook",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m ng\u1eafm c\u1ea3nh thi\u00ean nhi\u00ean tr\u00ean cao",
      ipa: "/\u02c8si\u02d0n\u026ak \u02c8\u0259\u028av\u0259l\u028ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=scenic+overlook&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The mountain pass features a panoramic scenic overlook presenting sweeping views of terraced rice valleys.",
      exampleVi: "\u0110\u00e8o n\u00fai c\u00f3 \u0111i\u1ec3m d\u1eebng ch\u00e2n ng\u1eafm c\u1ea3nh tr\u00ean cao tuy\u1ec7t \u0111\u1eb9p m\u1edf ra g\u00f3c nh\u00ecn bao la \u00f4m tr\u1ecdn nh\u1eefng thung l\u0169ng ru\u1ed9ng b\u1eadc thang.",
      collocations: ["stop at a scenic overlook", "scenic overlook terrace"]
    }
    ,
    {
      id: "mega-unit-1-marine-sanctuary",
      word: "marine sanctuary",
      partOfSpeech: "n.phr",
      meaningVi: "khu b\u1ea3o t\u1ed3n bi\u1ec3n nghi\u00eam c\u1ea5m \u0111\u00e1nh b\u1eaft",
      ipa: "/m\u0259\u02c8ri\u02d0n \u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marine+sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fishing trawlers are banned inside the Cu Lao Cham marine sanctuary to let reef fish spawn freely.",
      exampleVi: "T\u00e0u k\u00e9o \u0111\u00e1nh b\u1eaft b\u1ecb c\u1ea5m ho\u00e0n to\u00e0n trong khu b\u1ea3o t\u1ed3n bi\u1ec3n C\u00f9 Lao Ch\u00e0m \u0111\u1ec3 c\u00e1 r\u1ea1n san h\u00f4 t\u1ef1 do sinh s\u1ea3n.",
      collocations: ["establish a marine sanctuary", "dive in a marine sanctuary"]
    }
    ,
    {
      id: "mega-unit-1-eco-conscious-traveler",
      word: "eco-conscious traveler",
      partOfSpeech: "n.phr",
      meaningVi: "du kh\u00e1ch c\u00f3 \u00fd th\u1ee9c b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8k\u0252n\u0283\u0259s \u02c8tr\u00e6v\u0259l\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-conscious+traveler&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eco-conscious travelers bring reusable stainless steel bottles and reject disposable hotel plastic tubes.",
      exampleVi: "Nh\u1eefng du kh\u00e1ch c\u00f3 \u00fd th\u1ee9c m\u00f4i tr\u01b0\u1eddng lu\u00f4n mang theo b\u00ecnh gi\u1eef nhi\u1ec7t inox v\u00e0 t\u1eeb ch\u1ed1i c\u00e1c chai nh\u1ef1a d\u00f9ng m\u1ed9t l\u1ea7n \u1edf kh\u00e1ch s\u1ea1n.",
      collocations: ["cater to eco-conscious travelers", "habits of conscious travelers"]
    }
    ,
    {
      id: "mega-unit-1-cultural-heritage-tour",
      word: "cultural heritage tour",
      partOfSpeech: "n.phr",
      meaningVi: "tour du l\u1ecbch t\u00ecm hi\u1ec3u di s\u1ea3n v\u0103n h\u00f3a",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8her\u026at\u026ad\u0292 t\u028a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+heritage+tour&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The cultural heritage tour guided students through ancient citadel ruins and bronze casting foundries.",
      exampleVi: "Tour di s\u1ea3n v\u0103n h\u00f3a \u0111\u00e3 d\u1eabn d\u1eaft h\u1ecdc sinh tham quan c\u00e1c ph\u1ebf t\u00edch ho\u00e0ng th\u00e0nh c\u1ed5 v\u00e0 c\u00e1c x\u01b0\u1edfng \u0111\u00fac \u0111\u1ed3ng truy\u1ec1n th\u1ed1ng.",
      collocations: ["join a cultural heritage tour", "guided heritage tour"]
    }
    ,
    {
      id: "mega-unit-1-carbon-neutral-itinerary",
      word: "carbon-neutral itinerary",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh tr\u00ecnh du l\u1ecbch trung h\u00f2a carbon",
      ipa: "/\u02cck\u0251\u02d0b\u0259n \u02c8nju\u02d0tr\u0259l a\u026a\u02c8t\u026an\u0259r\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon-neutral+itinerary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The travel agency engineered a fully carbon-neutral itinerary utilizing electric rail and certified lodges.",
      exampleVi: "C\u00f4ng ty du l\u1ecbch \u0111\u00e3 thi\u1ebft k\u1ebf h\u00e0nh tr\u00ecnh ho\u00e0n to\u00e0n trung h\u00f2a carbon s\u1eed d\u1ee5ng \u0111\u01b0\u1eddng s\u1eaft ch\u1ea1y \u0111i\u1ec7n v\u00e0 c\u01a1 s\u1edf l\u01b0u tr\u00fa \u0111\u1ea1t chu\u1ea9n xanh.",
      collocations: ["design a carbon-neutral itinerary", "book a neutral tour"]
    }
    ,
    {
      id: "mega-unit-1-voluntourism",
      word: "voluntourism",
      partOfSpeech: "n",
      meaningVi: "du l\u1ecbch k\u1ebft h\u1ee3p l\u00e0m c\u00f4ng t\u00e1c t\u00ecnh nguy\u1ec7n x\u00e3 h\u1ed9i",
      ipa: "/\u02ccv\u0252l\u0259n\u02c8t\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=voluntourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voluntourism programs allow participants to teach conversational English while exploring rural highlands.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh du l\u1ecbch t\u00ecnh nguy\u1ec7n cho ph\u00e9p ng\u01b0\u1eddi tham gia d\u1ea1y ti\u1ebfng Anh giao ti\u1ebfp trong khi kh\u00e1m ph\u00e1 v\u00f9ng cao.",
      collocations: ["critique voluntourism", "ethical voluntourism"]
    }
    ,
    {
      id: "mega-unit-1-off-the-beaten-track",
      word: "off-the-beaten-track",
      partOfSpeech: "idiom",
      meaningVi: "n\u01a1i h\u1ebbo l\u00e1nh hoang s\u01a1 \u00edt ng\u01b0\u1eddi \u0111\u1eb7t ch\u00e2n t\u1edbi",
      ipa: "/\u02cc\u0252f \u00f0\u0259 \u02ccbi\u02d0tn \u02c8tr\u00e6k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=off-the-beaten-track&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adventurous backpackers ventured off-the-beaten-track to hidden waterfalls deep within the misty mountains.",
      exampleVi: "Nh\u1eefng tay ph\u01b0\u1ee3t th\u1ee7 \u01b0a m\u1ea1o hi\u1ec3m \u0111\u00e3 t\u00ecm \u0111\u1ebfn nh\u1eefng ch\u1ed1n hoang s\u01a1 \u00edt ng\u01b0\u1eddi \u0111\u1eb7t ch\u00e2n t\u1edbi \u0111\u1ec3 chi\u00eam ng\u01b0\u1ee1ng th\u00e1c n\u01b0\u1edbc \u1ea9n m\u00ecnh trong n\u00fai s\u01b0\u01a1ng m\u00f9.",
      collocations: ["travel off-the-beaten-track", "remote destination"]
    }
    ,
    {
      id: "mega-unit-1-eco-lodge",
      word: "eco-lodge",
      partOfSpeech: "n",
      meaningVi: "nh\u00e0 tr\u1ecd du l\u1ecbch sinh th\u00e1i h\u00f2a m\u00ecnh v\u00e0o thi\u00ean nhi\u00ean",
      ipa: "/\u02c8i\u02d0k\u0259\u028al\u0252d\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-lodge&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Perched on stilts overlooking the rainforest valley, the eco-lodge utilizes natural cross-ventilation.",
      exampleVi: "\u0110\u01b0\u1ee3c d\u1ef1ng tr\u00ean c\u00e1c c\u1ed9t nh\u00e0 s\u00e0n nh\u00ecn xu\u1ed1ng thung l\u0169ng r\u1eebng nhi\u1ec7t \u0111\u1edbi, nh\u00e0 tr\u1ecd sinh th\u00e1i t\u1eadn d\u1ee5ng lu\u1ed3ng th\u00f4ng gi\u00f3 t\u1ef1 nhi\u00ean m\u00e1t r\u01b0\u1ee3i.",
      collocations: ["stay at an eco-lodge", "rustic eco-lodge"]
    }
    ,
    {
      id: "mega-unit-1-snorkeling-reef",
      word: "snorkeling reef",
      partOfSpeech: "n.phr",
      meaningVi: "r\u1ea1n san h\u00f4 n\u00f4ng l\u00fd t\u01b0\u1edfng cho l\u1eb7n \u1ed1ng th\u1edf",
      ipa: "/\u02c8sn\u0254\u02d0k\u0259l\u026a\u014b ri\u02d0f/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=snorkeling+reef&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Colorful parrotfish and sea anemones thrive throughout the sheltered snorkeling reef.",
      exampleVi: "C\u00e1 v\u1eb9t r\u1ef1c r\u1ee1 s\u1eafc m\u00e0u v\u00e0 h\u1ea3i qu\u1ef3 sinh s\u00f4i m\u1ea1nh m\u1ebd kh\u1eafp r\u1ea1n san h\u00f4 n\u00f4ng k\u00edn gi\u00f3 l\u00fd t\u01b0\u1edfng cho l\u1eb7n \u1ed1ng th\u1edf.",
      collocations: ["explore the snorkeling reef", "shallow reef"]
    }
    ,
    {
      id: "mega-unit-1-zero-waste-travel",
      word: "zero-waste travel",
      partOfSpeech: "n.phr",
      meaningVi: "phong c\u00e1ch du l\u1ecbch kh\u00f4ng r\u00e1c th\u1ea3i",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u02c8we\u026ast \u02c8tr\u00e6vl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero-waste+travel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Zero-waste travel advocates carry cloth napkins, metal straws, and solid soap bars everywhere.",
      exampleVi: "Nh\u1eefng ng\u01b0\u1eddi \u1ee7ng h\u1ed9 phong c\u00e1ch du l\u1ecbch kh\u00f4ng r\u00e1c th\u1ea3i lu\u00f4n mang theo kh\u0103n v\u1ea3i, \u1ed1ng h\u00fat kim lo\u1ea1i v\u00e0 x\u00e0 ph\u00f2ng b\u00e1nh \u0111\u1ebfn m\u1ecdi n\u01a1i.",
      collocations: ["commit to zero-waste travel", "zero-waste packing"]
    }
    ,
    {
      id: "mega-unit-1-wilderness-expedition",
      word: "wilderness expedition",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ebfn th\u00e1m hi\u1ec3m v\u00f9ng \u0111\u1ea5t hoang d\u00e3",
      ipa: "/\u02c8w\u026ald\u0259n\u0259s \u02cceksp\u0259\u02c8d\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wilderness+expedition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Experienced mountaineers packed thermal gear for an intensive wilderness expedition across Mount Fansipan.",
      exampleVi: "C\u00e1c nh\u00e0 leo n\u00fai d\u00e0y d\u1ea1n kinh nghi\u1ec7m chu\u1ea9n b\u1ecb \u0111\u1ed3 gi\u1eef nhi\u1ec7t cho chuy\u1ebfn th\u00e1m hi\u1ec3m thi\u00ean nhi\u00ean hoang d\u00e3 \u0111\u1ec9nh Fansipan k\u1ef3 v\u0129.",
      collocations: ["undertake a wilderness expedition", "challenging expedition"]
    }
  ],
};
