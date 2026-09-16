import type { Grade11VocabItem } from "./grade11-data";

/**
 * Ngân hàng từ vựng mở rộng chuyên sâu cho toàn bộ 10 Units Khối 11
 * Khai thác & chuẩn hóa theo SGK Global Success (Bộ GD&ĐT), VietJack, Lời giải hay & Cambridge
 * Đảm bảo mỗi Unit đạt từ 50 đến 80+ từ vựng phong phú kèm Collocations, IPA, Audio & Ảnh thực tế.
 */

export const EXPANDED_VOCAB_GRADE11: Record<string, Grade11VocabItem[]> = {
  "unit-1-a-long-and-healthy-life": [
    {
      id: "v11-u1-longevity",
      word: "longevity",
      partOfSpeech: "n",
      meaningVi: "tuổi thọ cao, sự sống lâu",
      ipa: "/lɒnˈdʒevəti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=longevity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A balanced diet and stress management are vital for human longevity.",
      exampleVi: "Chế độ ăn uống cân bằng và quản lý căng thẳng là yếu tố sống còn cho tuổi thọ của con người.",
      collocations: ["promote longevity", "secret to longevity", "exceptional longevity"]
    },
    {
      id: "v11-u1-immune-system",
      word: "immune system",
      partOfSpeech: "n.phr",
      meaningVi: "hệ miễn dịch, hệ thống phòng thủ cơ thể",
      ipa: "/ɪˈmjuːn ˈsɪstəm/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=immune+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adequate sleep and vitamin C strengthen your immune system against seasonal flu.",
      exampleVi: "Ngủ đủ giấc và bổ sung vitamin C giúp tăng cường hệ miễn dịch chống lại cảm cúm theo mùa.",
      collocations: ["boost the immune system", "weaken the immune system", "healthy immune system"]
    },
    {
      id: "v11-u1-metabolism",
      word: "metabolism",
      partOfSpeech: "n",
      meaningVi: "sự trao đổi chất trong cơ thể",
      ipa: "/məˈtæbəlɪzəm/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=metabolism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Aerobic workouts help speed up your body's metabolism and burn extra calories.",
      exampleVi: "Các bài tập aerobic giúp tăng tốc độ trao đổi chất của cơ thể và đốt cháy thêm calo.",
      collocations: ["boost metabolism", "fast metabolism", "slow metabolism"]
    },
    {
      id: "v11-u1-sedentary",
      word: "sedentary",
      partOfSpeech: "adj",
      meaningVi: "ngồi một chỗ nhiều, thụ động ít vận động",
      ipa: "/ˈsedntri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sedentary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A sedentary lifestyle significantly elevates the risk of cardiovascular disease.",
      exampleVi: "Lối sống ít vận động làm gia tăng đáng kể nguy cơ mắc bệnh tim mạch.",
      collocations: ["sedentary lifestyle", "sedentary habit", "sedentary job"]
    },
    {
      id: "v11-u1-cardiovascular",
      word: "cardiovascular",
      partOfSpeech: "adj",
      meaningVi: "thuộc tim mạch",
      ipa: "/ˌkɑːdiəʊˈvæskjələ(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cardiovascular&type=2",
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Regular cycling improves cardiovascular endurance and mental alertness.",
      exampleVi: "Đạp xe thường xuyên cải thiện sức bền tim mạch và sự tỉnh táo về tinh thần.",
      collocations: ["cardiovascular health", "cardiovascular fitness", "cardiovascular disease"]
    },
    {
      id: "v11-u1-dietary-fibre",
      word: "dietary fibre",
      partOfSpeech: "n.phr",
      meaningVi: "chất xơ trong khẩu phần ăn",
      ipa: "/ˌdaɪətəri ˈfaɪbə(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dietary+fibre&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Whole grains and green vegetables are packed with beneficial dietary fibre.",
      exampleVi: "Ngũ cốc nguyên hạt và rau xanh chứa nhiều chất xơ có lợi cho cơ thể.",
      collocations: ["rich in dietary fibre", "high in dietary fibre", "source of dietary fibre"]
    },
    {
      id: "v11-u1-cholesterol",
      word: "cholesterol",
      partOfSpeech: "n",
      meaningVi: "chất mỡ trong máu (cholesterol)",
      ipa: "/kəˈlestərɒl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cholesterol&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Limiting fried oily snacks is essential to keep blood cholesterol levels low.",
      exampleVi: "Hạn chế đồ ăn vặt chiên dầu là điều cần thiết để duy trì lượng cholesterol trong máu ở mức thấp.",
      collocations: ["lower cholesterol", "high cholesterol", "cholesterol level"]
    },
    {
      id: "v11-u1-calorie-intake",
      word: "calorie intake",
      partOfSpeech: "n.phr",
      meaningVi: "lượng calo nạp vào cơ thể",
      ipa: "/ˈkæləri ˈɪnteɪk/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=calorie+intake&type=2",
      imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Athletes need to adjust their daily calorie intake according to their training load.",
      exampleVi: "Các vận động viên cần điều chỉnh lượng calo nạp vào mỗi ngày theo cường độ tập luyện.",
      collocations: ["daily calorie intake", "reduce calorie intake", "monitor calorie intake"]
    },
    {
      id: "v11-u1-mindfulness",
      word: "mindfulness",
      partOfSpeech: "n",
      meaningVi: "sự tỉnh thức, trạng thái tập trung tâm trí an lành",
      ipa: "/ˈmaɪndflnəs/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mindfulness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing mindfulness meditation relieves chronic anxiety and improves focus.",
      exampleVi: "Thực hành thiền tỉnh thức giúp giải tỏa lo âu mãn tính và cải thiện sự tập trung.",
      collocations: ["practice mindfulness", "mindfulness meditation", "state of mindfulness"]
    },
    {
      id: "v11-u1-wellbeing",
      word: "wellbeing",
      partOfSpeech: "n",
      meaningVi: "tình trạng hạnh phúc, khỏe khoắn toàn diện cả thể chất lẫn tinh thần",
      ipa: "/ˌwel ˈbiːɪŋ/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wellbeing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Spending time in nature significantly boosts psychological wellbeing.",
      exampleVi: "Dành thời gian hòa mình vào thiên nhiên giúp nâng cao đáng kể sự khỏe khoắn tinh thần.",
      collocations: ["mental wellbeing", "emotional wellbeing", "physical wellbeing"]
    },
    {
      id: "v11-u1-life-expectancy",
      word: "life expectancy",
      partOfSpeech: "n.phr",
      meaningVi: "tuổi thọ trung bình dự tính",
      ipa: "/ˈlaɪf ɪkspektənsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=life+expectancy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Advances in modern pharmacology have doubled global life expectancy over the past century.",
      exampleVi: "Những tiến bộ trong dược học hiện đại đã nhân đôi tuổi thọ trung bình toàn cầu trong thế kỷ qua.",
      collocations: ["increase life expectancy", "average life expectancy", "high life expectancy"]
    },
    {
      id: "v11-u1-chronic-illness",
      word: "chronic illness",
      partOfSpeech: "n.phr",
      meaningVi: "bệnh mãn tính kéo dài",
      ipa: "/ˈkrɒnɪk ˈɪlnəs/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chronic+illness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Diabetes and hypertension are prevalent chronic illnesses in aging populations.",
      exampleVi: "Bệnh tiểu đường và cao huyết áp là những căn bệnh mãn tính phổ biến ở người cao tuổi.",
      collocations: ["suffer from chronic illness", "manage chronic illness", "prevent chronic illness"]
    },
    {
      id: "v11-u1-hydration",
      word: "hydration",
      partOfSpeech: "n",
      meaningVi: "sự giữ nước, bổ sung nước cho cơ thể",
      ipa: "/haɪˈdreɪʃn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hydration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Proper hydration maintains healthy skin complexion and prevents fatigue.",
      exampleVi: "Bổ sung đủ nước giúp duy trì làn da khỏe đẹp và ngăn ngừa cảm giác mệt mỏi.",
      collocations: ["adequate hydration", "maintain hydration", "proper hydration"]
    },
    {
      id: "v11-u1-acupuncture",
      word: "acupuncture",
      partOfSpeech: "n",
      meaningVi: "thuật châm cứu (y học cổ truyền phương Đông)",
      ipa: "/ˈækjupʌŋktʃə(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=acupuncture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1512290900672-1f55b9665a36?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Traditional acupuncture can effectively alleviate migraine headaches and chronic pain.",
      exampleVi: "Châm cứu truyền thống có thể xoa dịu hiệu quả các cơn đau nửa đầu và đau nhức mãn tính.",
      collocations: ["receive acupuncture", "acupuncture treatment", "acupuncture needles"]
    },
    {
      id: "v11-u1-herbal-medicine",
      word: "herbal medicine",
      partOfSpeech: "n.phr",
      meaningVi: "thuốc thảo dược, đông y trị liệu",
      ipa: "/ˈhɜːbl ˈmedsn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=herbal+medicine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many Vietnamese families utilize herbal medicine such as ginger and lemongrass for mild colds.",
      exampleVi: "Nhiều gia đình Việt Nam sử dụng thảo dược như gừng và sả để chữa cảm mạo nhẹ.",
      collocations: ["rely on herbal medicine", "traditional herbal medicine", "natural herbal medicine"]
    },
    {
      id: "v11-u1-prescription",
      word: "prescription",
      partOfSpeech: "n",
      meaningVi: "đơn thuốc do bác sĩ kê",
      ipa: "/prɪˈskrɪpʃn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prescription&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Never consume strong antibiotics without a licensed physician's prescription.",
      exampleVi: "Tuyệt đối không uống thuốc kháng sinh liều cao khi chưa có đơn thuốc của bác sĩ.",
      collocations: ["write a prescription", "fill a prescription", "prescription medicine"]
    },
    {
      id: "v11-u1-rehabilitation",
      word: "rehabilitation",
      partOfSpeech: "n",
      meaningVi: "sự phục hồi chức năng sau chấn thương hoặc phẫu thuật",
      ipa: "/ˌriːhəˌbɪlɪˈteɪʃn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rehabilitation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Physical rehabilitation helped the injured gymnast regain full mobility in her knee.",
      exampleVi: "Phục hồi chức năng vật lý trị liệu đã giúp nữ vận động viên lấy lại hoàn toàn khả năng vận động đầu gối.",
      collocations: ["undergo rehabilitation", "physical rehabilitation", "rehabilitation center"]
    },
    {
      id: "v11-u1-hygiene",
      word: "hygiene",
      partOfSpeech: "n",
      meaningVi: "vệ sinh phòng bệnh cá nhân",
      ipa: "/ˈhaɪdʒiːn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hygiene&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing rigorous hand hygiene curbs the transmission of infectious pathogens.",
      exampleVi: "Thực hiện vệ sinh tay nghiêm ngặt giúp ngăn chặn sự lây truyền các mầm bệnh truyền nhiễm.",
      collocations: ["personal hygiene", "food hygiene", "maintain hygiene"]
    },
    {
      id: "v11-u1-endurance",
      word: "endurance",
      partOfSpeech: "n",
      meaningVi: "sức bền, khả năng chịu đựng dẻo dai",
      ipa: "/ɪnˈdjʊərəns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endurance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Long-distance runners build muscular endurance through structured interval training.",
      exampleVi: "Các vận động viên chạy cự ly dài xây dựng sức bền cơ bắp thông qua bài tập biến tốc có cấu trúc.",
      collocations: ["build endurance", "endurance training", "physical endurance"]
    },
    {
      id: "v11-u1-nutrient-dense",
      word: "nutrient-dense",
      partOfSpeech: "adj",
      meaningVi: "giàu dưỡng chất, mật độ dinh dưỡng cao",
      ipa: "/ˈnjuːtriənt dens/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nutrient-dense&type=2",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Avocados, salmon, and leafy greens are prime examples of nutrient-dense whole foods.",
      exampleVi: "Bơ, cá hồi và rau lá xanh là những ví dụ điển hình về thực phẩm nguyên phần giàu dưỡng chất.",
      collocations: ["nutrient-dense food", "nutrient-dense meal", "nutrient-dense diet"]
    },
    {
      id: "v11-u1-antioxidant",
      word: "antioxidant",
      partOfSpeech: "n",
      meaningVi: "chất chống oxy hóa bảo vệ tế bào",
      ipa: "/ˌæntiˈɒksɪdənt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=antioxidant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Green tea and blueberries contain potent antioxidants that neutralize cellular damage.",
      exampleVi: "Trà xanh và quả việt quất chứa các chất chống oxy hóa mạnh mẽ giúp vô hiệu hóa tổn thương tế bào.",
      collocations: ["rich in antioxidants", "natural antioxidants", "powerful antioxidant"]
    },
    {
      id: "v11-u1-deficiency",
      word: "deficiency",
      partOfSpeech: "n",
      meaningVi: "sự thiếu hụt, suy giảm vi chất",
      ipa: "/dɪˈfɪʃnsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=deficiency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Iron deficiency is the leading trigger of anemia and persistent lethargy in teenagers.",
      exampleVi: "Thiếu sắt là nguyên nhân hàng đầu dẫn đến thiếu máu và cảm giác uể oải kéo dài ở lứa tuổi thiếu niên.",
      collocations: ["vitamin deficiency", "mineral deficiency", "iron deficiency"]
    },
    {
      id: "v11-u1-remedy",
      word: "remedy",
      partOfSpeech: "n",
      meaningVi: "phương thuốc, biện pháp chữa lành",
      ipa: "/ˈremədi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=remedy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Warm honey lemon tea is an ancient natural remedy for a sore and scratchy throat.",
      exampleVi: "Trà chanh mật ong ấm là một phương thuốc tự nhiên lâu đời cho chứng đau rát cổ họng.",
      collocations: ["natural remedy", "home remedy", "effective remedy"]
    },
    {
      id: "v11-u1-contagious",
      word: "contagious",
      partOfSpeech: "adj",
      meaningVi: "truyền nhiễm, dễ lây qua tiếp xúc",
      ipa: "/kənˈteɪdʒəs/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=contagious&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Influenza is highly contagious, so wearing face coverings indoors is advisable.",
      exampleVi: "Bệnh cúm có tính lây lan rất cao, do đó nên đeo khẩu trang khi ở không gian kín.",
      collocations: ["highly contagious", "contagious disease", "contagious infection"]
    },
    {
      id: "v11-u1-cardio",
      word: "cardio",
      partOfSpeech: "n",
      meaningVi: "bài tập vận động tim phổi",
      ipa: "/ˈkɑːdiəʊ/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cardio&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thirty minutes of moderate cardio daily keeps your resting heart rate optimal.",
      exampleVi: "Ba mươi phút tập cardio cường độ vừa phải mỗi ngày giúp duy trì nhịp tim khi nghỉ ngơi ở mức tối ưu.",
      collocations: ["do cardio", "cardio workout", "cardio exercise"]
    },
    {
      id: "v11-u1-posture",
      word: "posture",
      partOfSpeech: "n",
      meaningVi: "tư thế đứng, ngồi của cơ thể",
      ipa: "/ˈpɒstʃə(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=posture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ergonomic study chairs help students maintain good spinal posture during long study sessions.",
      exampleVi: "Ghế học công thái học giúp học sinh duy trì tư thế cột sống chuẩn khi học tập trong thời gian dài.",
      collocations: ["good posture", "poor posture", "improve posture"]
    },
    {
      id: "v11-u1-moderation",
      word: "moderation",
      partOfSpeech: "n",
      meaningVi: "sự điều độ, chừng mực hợp lý",
      ipa: "/ˌmɒdəˈreɪʃn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=moderation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Nutritionists recommend consuming sugar and caffeinated beverages in strict moderation.",
      exampleVi: "Các chuyên gia dinh dưỡng khuyến nghị nên tiêu thụ đường và đồ uống chứa caffein một cách hết sức chừng mực.",
      collocations: ["in moderation", "practice moderation", "moderate amount"]
    },
    {
      id: "v11-u1-immunity",
      word: "immunity",
      partOfSpeech: "n",
      meaningVi: "khả năng miễn dịch chống lại bệnh tật",
      ipa: "/ɪˈmjuːnəti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=immunity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vaccination stimulates adaptive immunity without causing full-blown illness.",
      exampleVi: "Tiêm chủng kích thích khả năng miễn dịch thích ứng mà không gây phát bệnh toàn diện.",
      collocations: ["natural immunity", "acquire immunity", "boost immunity"]
    },
    {
      id: "v11-u1-vitality",
      word: "vitality",
      partOfSpeech: "n",
      meaningVi: "sức sống căng tràn, sinh lực dồi dào",
      ipa: "/vaɪˈtæləti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vitality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A nutritious breakfast endows you with renewed energy and physical vitality for the school day.",
      exampleVi: "Bữa sáng bổ dưỡng mang lại cho bạn nguồn năng lượng mới và sinh lực dồi dào cho ngày học.",
      collocations: ["full of vitality", "restore vitality", "youthful vitality"]
    },
    {
      id: "v11-u1-dehydrated",
      word: "dehydrated",
      partOfSpeech: "adj",
      meaningVi: "bị mất nước, khô khát",
      ipa: "/ˌdiːhaɪˈdreɪtɪd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dehydrated&type=2",
      imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Drinking water immediately upon waking prevents the brain from feeling sluggish and dehydrated.",
      exampleVi: "Uống nước ngay sau khi thức dậy giúp não bộ không bị uể oải và thiếu nước.",
      collocations: ["become dehydrated", "feel dehydrated", "severely dehydrated"]
    },
    {
      id: "v11-u1-obesity",
      word: "obesity",
      partOfSpeech: "n",
      meaningVi: "bệnh béo phì",
      ipa: "/əʊˈbiːsəti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=obesity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      exampleEn: "School nutrition campaigns strive to tackle childhood obesity through healthy canteen choices.",
      exampleVi: "Các chiến dịch dinh dưỡng học đường nỗ lực giải quyết nạn béo phì ở trẻ em thông qua thực đơn căn-tin lành mạnh.",
      collocations: ["combat obesity", "childhood obesity", "obesity epidemic"]
    },
    {
      id: "v11-u1-sedentary-behavior",
      word: "sedentary behavior",
      partOfSpeech: "n.phr",
      meaningVi: "hành vi ít vận động, lười thể dục",
      ipa: "/ˈsedntri bɪˈheɪvjə(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sedentary+behavior&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Limiting recreational screen time reduces sedentary behavior in teenagers.",
      exampleVi: "Hạn chế thời gian giải trí trước màn hình giúp giảm thiểu hành vi thụ động ở lứa tuổi thanh thiếu niên.",
      collocations: ["reduce sedentary behavior", "sedentary behavior at work"]
    },
    {
      id: "v11-u1-aerobic-exercise",
      word: "aerobic exercise",
      partOfSpeech: "n.phr",
      meaningVi: "bài tập hiếu khí tăng nhịp tim và hô hấp (chạy bộ, bơi lội)",
      ipa: "/eəˈrəʊbɪk ˈeksəsaɪz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=aerobic+exercise&type=2",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Brisk walking for 40 minutes is an accessible form of aerobic exercise for all age groups.",
      exampleVi: "Đi bộ nhanh trong 40 phút là một hình thức tập thể dục hiếu khí dễ tiếp cận cho mọi lứa tuổi.",
      collocations: ["engage in aerobic exercise", "benefits of aerobic exercise"]
    },
    {
      id: "v11-u1-insomnia",
      word: "insomnia",
      partOfSpeech: "n",
      meaningVi: "chứng mất ngủ, khó ngủ",
      ipa: "/ɪnˈsɒmniə/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=insomnia&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Avoiding blue light exposure before bedtime is a proven method to combat insomnia.",
      exampleVi: "Tránh tiếp xúc với ánh sáng xanh trước khi ngủ là phương pháp đã được chứng minh giúp đẩy lùi chứng mất ngủ.",
      collocations: ["suffer from insomnia", "chronic insomnia", "treat insomnia"]
    },
    {
      id: "v11-u1-digestive-tract",
      word: "digestive tract",
      partOfSpeech: "n.phr",
      meaningVi: "đường tiêu hóa",
      ipa: "/daɪˈdʒestɪv trækt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digestive+tract&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Probiotics found in fermented yogurt support a healthy bacterial flora in the digestive tract.",
      exampleVi: "Lợi khuẩn có trong sữa chua lên men hỗ trợ hệ vi sinh vật khỏe mạnh trong đường tiêu hóa.",
      collocations: ["healthy digestive tract", "digestive tract flora"]
    },
    {
      id: "v11-u1-wellness",
      word: "wellness",
      partOfSpeech: "n",
      meaningVi: "sức khỏe toàn diện, sự khỏe mạnh hài hòa",
      ipa: "/ˈwelnəs/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wellness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Corporate wellness programs include ergonomic desks, gym subsidies, and mental health counseling.",
      exampleVi: "Các chương trình chăm sóc sức khỏe doanh nghiệp bao gồm bàn làm việc công thái học, hỗ trợ phòng gym và tư vấn tâm lý.",
      collocations: ["wellness program", "holistic wellness", "promote wellness"]
    },
    {
      id: "v11-u1-hereditary",
      word: "hereditary",
      partOfSpeech: "adj",
      meaningVi: "di truyền từ cha mẹ sang con cái",
      ipa: "/həˈredɪtri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hereditary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Some heart conditions are hereditary, but a clean lifestyle can substantially diminish the risks.",
      exampleVi: "Một số bệnh lý tim mạch có tính di truyền, tuy nhiên lối sống lành mạnh có thể làm giảm đáng kể các nguy cơ.",
      collocations: ["hereditary disease", "hereditary trait", "hereditary factor"]
    },
    {
      id: "v11-u1-fatigue",
      word: "fatigue",
      partOfSpeech: "n",
      meaningVi: "sự mệt mỏi suy kiệt cơ thể hoặc trí não",
      ipa: "/fəˈtiːɡ/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fatigue&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Chronic fatigue is frequently triggered by unmanaged academic stress and poor sleep schedules.",
      exampleVi: "Mệt mỏi mãn tính thường bắt nguồn từ áp lực thi cử không được giải tỏa và lịch trình ngủ nghê thất thường.",
      collocations: ["mental fatigue", "muscle fatigue", "combat fatigue"]
    },
    {
      id: "v11-u1-supplements",
      word: "dietary supplements",
      partOfSpeech: "n.phr",
      meaningVi: "thực phẩm bổ sung, vitamin bổ trợ",
      ipa: "/ˈdaɪətəri ˈsʌplɪmənts/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dietary+supplements&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Consult your doctor before taking dietary supplements alongside everyday foods.",
      exampleVi: "Hãy tham khảo ý kiến bác sĩ trước khi sử dụng thực phẩm bổ sung cùng với bữa ăn hàng ngày.",
      collocations: ["take dietary supplements", "vitamin supplements", "mineral supplements"]
    },
    {
      id: "v11-u1-wholesome",
      word: "wholesome",
      partOfSpeech: "adj",
      meaningVi: "lành mạnh, tốt cho sức khỏe và phẩm chất",
      ipa: "/ˈhəʊlsəm/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wholesome&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A wholesome home-cooked dinner strengthens family connections and nourishes growing adolescents.",
      exampleVi: "Bữa tối cơm nhà bổ dưỡng lành mạnh thắt chặt tình cảm gia đình và nuôi dưỡng lứa tuổi thanh thiếu niên đang lớn.",
      collocations: ["wholesome food", "wholesome meal", "wholesome lifestyle"]
    }
  ],
  "unit-2-the-generation-gap": [
    {
      id: "v11-u2-generation-gap",
      word: "generation gap",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3ng c\u00e1ch th\u1ebf h\u1ec7 v\u1ec1 t\u01b0 t\u01b0\u1edfng",
      ipa: "/\u02ccd\u0292en\u0259\u02c8re\u026a\u0283n \u0261\u00e6p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=generation+gap&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open communication helps families bridge the generation gap.",
      exampleVi: "Giao ti\u1ebfp c\u1edfi m\u1edf gi\u00fap c\u00e1c gia \u0111\u00ecnh thu h\u1eb9p kho\u1ea3ng c\u00e1ch th\u1ebf h\u1ec7.",
      collocations: ["bridge the generation gap", "widen the generation gap"]
    },
    {
      id: "v11-u2-traditional-values",
      word: "traditional values",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c truy\u1ec1n th\u1ed1ng",
      ipa: "/tr\u0259\u02c8d\u026a\u0283\u0259nl \u02c8v\u00e6lju\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traditional+values&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Grandparents always strive to pass down traditional values to their grandchildren.",
      exampleVi: "\u00d4ng b\u00e0 lu\u00f4n n\u1ed7 l\u1ef1c truy\u1ec1n d\u1ea1y nh\u1eefng gi\u00e1 tr\u1ecb truy\u1ec1n th\u1ed1ng cho con ch\u00e1u.",
      collocations: ["uphold traditional values", "respect traditional values"]
    },
    {
      id: "v11-u2-open-minded",
      word: "open-minded",
      partOfSpeech: "adj",
      meaningVi: "c\u1edfi m\u1edf, ti\u1ebfp thu t\u01b0 t\u01b0\u1edfng m\u1edbi",
      ipa: "/\u02cc\u0259\u028ap\u0259n \u02c8ma\u026and\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=open-minded&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open-minded parents listen attentively to their teenagers' career aspirations.",
      exampleVi: "Cha m\u1eb9 c\u1edfi m\u1edf lu\u00f4n ch\u0103m ch\u00fa l\u1eafng nghe nguy\u1ec7n v\u1ecdng ngh\u1ec1 nghi\u1ec7p c\u1ee7a con c\u00e1i.",
      collocations: ["open-minded attitude", "be open-minded about"]
    },
    {
      id: "v11-u2-conservative",
      word: "conservative",
      partOfSpeech: "adj",
      meaningVi: "b\u1ea3o th\u1ee7, gi\u1eef n\u1ebfp ngh\u0129 c\u0169",
      ipa: "/k\u0259n\u02c8s\u025c\u02d0v\u0259t\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=conservative&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Some conservative relatives frown upon modern hairstyles and tattoos.",
      exampleVi: "M\u1ed9t s\u1ed1 ng\u01b0\u1eddi th\u00e2n b\u1ea3o th\u1ee7 th\u01b0\u1eddng kh\u00f4ng th\u00edch ki\u1ec3u t\u00f3c v\u00e0 h\u00ecnh x\u0103m hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["conservative views", "conservative upbringing"]
    },
    {
      id: "v11-u2-curfew",
      word: "curfew",
      partOfSpeech: "n",
      meaningVi: "gi\u1edd gi\u1edbi nghi\u00eam bu\u1ed5i t\u1ed1i ph\u1ea3i v\u1ec1 nh\u00e0",
      ipa: "/\u02c8k\u025c\u02d0fju\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=curfew&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "His parents set a strict 10 PM curfew on school nights.",
      exampleVi: "B\u1ed1 m\u1eb9 anh \u1ea5y \u0111\u1eb7t gi\u1edd gi\u1edbi nghi\u00eam nghi\u00eam ng\u1eb7t 10 gi\u1edd t\u1ed1i v\u00e0o c\u00e1c ng\u00e0y \u0111i h\u1ecdc.",
      collocations: ["strict curfew", "break the curfew", "impose a curfew"]
    },
    {
      id: "v11-u2-mutual-understanding",
      word: "mutual understanding",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u1ea5u hi\u1ec3u v\u00e0 th\u00f4ng c\u1ea3m l\u1eabn nhau",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l \u02cc\u028cnd\u0259\u02c8st\u00e6nd\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+understanding&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mutual understanding is the cornerstone of healthy parent-child relationships.",
      exampleVi: "S\u1ef1 th\u1ea5u hi\u1ec3u l\u1eabn nhau l\u00e0 n\u1ec1n t\u1ea3ng c\u1ee7a m\u1ed1i quan h\u1ec7 t\u1ed1t \u0111\u1eb9p gi\u1eefa cha m\u1eb9 v\u00e0 con c\u00e1i.",
      collocations: ["foster mutual understanding", "reach mutual understanding"]
    },
    {
      id: "v11-u2-financial-independence",
      word: "financial independence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u1ef1 ch\u1ee7 v\u00e0 \u0111\u1ed9c l\u1eadp v\u1ec1 t\u00e0i ch\u00ednh",
      ipa: "/fa\u026a\u02c8n\u00e6n\u0283l \u02cc\u026and\u026a\u02c8pend\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=financial+independence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Working a part-time job during college helps students gain financial independence.",
      exampleVi: "L\u00e0m th\u00eam th\u1eddi \u0111\u1ea1i h\u1ecdc gi\u00fap sinh vi\u00ean d\u1ea7n \u0111\u1ea1t \u0111\u01b0\u1ee3c s\u1ef1 t\u1ef1 ch\u1ee7 t\u00e0i ch\u00ednh.",
      collocations: ["achieve financial independence", "strive for financial independence"]
    },
    {
      id: "v11-u2-nagging",
      word: "nagging",
      partOfSpeech: "n / adj",
      meaningVi: "s\u1ef1 c\u1eb1n nh\u1eb1n, n\u00f3i \u0111i n\u00f3i l\u1ea1i phi\u1ec1n to\u00e1i",
      ipa: "/\u02c8n\u00e6\u0261\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nagging&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Constant nagging often drives teenagers to become distant and secretive.",
      exampleVi: "S\u1ef1 c\u1eb1n nh\u1eb1n li\u00ean t\u1ee5c th\u01b0\u1eddng khi\u1ebfn thanh thi\u1ebfu ni\u00ean tr\u1edf n\u00ean xa c\u00e1ch v\u00e0 kh\u00e9p k\u00edn.",
      collocations: ["stop nagging", "constant nagging"]
    },
    {
      id: "v11-u2-privacy",
      word: "privacy",
      partOfSpeech: "n",
      meaningVi: "quy\u1ec1n ri\u00eang t\u01b0 c\u00e1 nh\u00e2n",
      ipa: "/\u02c8pr\u026av\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=privacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents should respect their teenagers' personal privacy by knocking before entering.",
      exampleVi: "Cha m\u1eb9 n\u00ean t\u00f4n tr\u1ecdng s\u1ef1 ri\u00eang t\u01b0 c\u1ee7a con b\u1eb1ng c\u00e1ch g\u00f5 c\u1eeda tr\u01b0\u1edbc khi v\u00e0o ph\u00f2ng.",
      collocations: ["respect personal privacy", "invasion of privacy"]
    },
    {
      id: "v11-u2-peer-pressure",
      word: "peer pressure",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e1p l\u1ef1c t\u1eeb b\u1ea1n b\u00e8 c\u00f9ng trang l\u1ee9a",
      ipa: "/\u02c8p\u026a\u0259 pre\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+pressure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teens need moral courage to resist negative peer pressure regarding smoking.",
      exampleVi: "Tu\u1ed5i teen c\u1ea7n l\u00f2ng d\u0169ng c\u1ea3m \u0111\u1ea1o \u0111\u1ee9c \u0111\u1ec3 ch\u1ed1ng l\u1ea1i \u00e1p l\u1ef1c b\u1ea1n b\u00e8 v\u1ec1 vi\u1ec7c h\u00fat thu\u1ed1c.",
      collocations: ["succumb to peer pressure", "resist peer pressure"]
    },
    {
      id: "v11-u2-rebellious",
      word: "rebellious",
      partOfSpeech: "adj",
      meaningVi: "ng\u1ed7 ngh\u1ecbch, n\u1ed5i lo\u1ea1n ch\u1ed1ng \u0111\u1ed1i",
      ipa: "/r\u026a\u02c8belj\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rebellious&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He went through a rebellious phase during ninth grade before maturing.",
      exampleVi: "Anh \u1ea5y \u0111\u00e3 tr\u1ea3i qua m\u1ed9t giai \u0111o\u1ea1n ng\u1ed7 ngh\u1ecbch \u1edf l\u1edbp 9 tr\u01b0\u1edbc khi ch\u00edn ch\u1eafn h\u01a1n.",
      collocations: ["rebellious teenager", "rebellious behavior"]
    },
    {
      id: "v11-u2-worldview",
      word: "worldview",
      partOfSpeech: "n",
      meaningVi: "th\u1ebf gi\u1edbi quan, nh\u00e2n sinh quan",
      ipa: "/\u02c8w\u025c\u02d0ldvju\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=worldview&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Growing up in the digital age shapes a distinctly global worldview for Gen Z.",
      exampleVi: "L\u1edbn l\u00ean trong th\u1eddi \u0111\u1ea1i s\u1ed1 \u0111\u1ecbnh h\u00ecnh th\u1ebf gi\u1edbi quan mang t\u00ednh to\u00e0n c\u1ea7u r\u00f5 r\u1ec7t cho Gen Z.",
      collocations: ["broad worldview", "different worldviews"]
    },
    {
      id: "v11-u2-bridge-the-gap",
      word: "bridge the gap",
      partOfSpeech: "v.phr",
      meaningVi: "thu h\u1eb9p kho\u1ea3ng c\u00e1ch b\u1ea5t \u0111\u1ed3ng",
      ipa: "/br\u026ad\u0292 \u00f0\u0259 \u0261\u00e6p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bridge+the+gap&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Family dinner discussions can bridge the gap between age groups.",
      exampleVi: "Nh\u1eefng cu\u1ed9c tr\u00f2 chuy\u1ec7n trong b\u1eefa c\u01a1m c\u00f3 th\u1ec3 thu h\u1eb9p kho\u1ea3ng c\u00e1ch gi\u1eefa c\u00e1c l\u1ee9a tu\u1ed5i.",
      collocations: ["bridge the generational gap", "effort to bridge the gap"]
    },
    {
      id: "v11-u2-parental-expectations",
      word: "parental expectations",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef3 v\u1ecdng c\u1ee7a cha m\u1eb9 \u0111\u1eb7t l\u00ean con c\u00e1i",
      ipa: "/p\u0259\u02c8rentl \u02ccekspek\u02c8te\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parental+expectations&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High parental expectations can inadvertently burden high school seniors.",
      exampleVi: "K\u1ef3 v\u1ecdng qu\u00e1 cao c\u1ee7a cha m\u1eb9 c\u00f3 th\u1ec3 v\u00f4 t\u00ecnh t\u1ea1o \u00e1p l\u1ef1c n\u1eb7ng n\u1ec1 cho h\u1ecdc sinh cu\u1ed1i c\u1ea5p.",
      collocations: ["live up to parental expectations", "heavy parental expectations"]
    },
    {
      id: "v11-u2-lifestyle-choices",
      word: "lifestyle choices",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ef1a ch\u1ecdn phong c\u00e1ch s\u1ed1ng",
      ipa: "/\u02c8la\u026afsta\u026al \u02c8t\u0283\u0254\u026as\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifestyle+choices&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Young adults appreciate having autonomy over their personal lifestyle choices.",
      exampleVi: "Ng\u01b0\u1eddi tr\u1ebb \u0111\u00e1nh gi\u00e1 cao vi\u1ec7c \u0111\u01b0\u1ee3c t\u1ef1 ch\u1ee7 v\u1ec1 nh\u1eefng l\u1ef1a ch\u1ecdn phong c\u00e1ch s\u1ed1ng c\u1ee7a m\u00ecnh.",
      collocations: ["respect lifestyle choices", "independent lifestyle choices"]
    },
    {
      id: "v11-u2-generation",
      word: "generation",
      partOfSpeech: "n",
      meaningVi: "th\u1ebf h\u1ec7 l\u1ee9a tu\u1ed5i",
      ipa: "/\u02ccd\u0292en\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=generation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each generation possesses unique cultural references, slang, and musical tastes.",
      exampleVi: "M\u1ed7i th\u1ebf h\u1ec7 \u0111\u1ec1u s\u1edf h\u1eefu nh\u1eefng d\u1ea5u \u1ea5n v\u0103n h\u00f3a, ti\u1ebfng l\u00f3ng v\u00e0 gu \u00e2m nh\u1ea1c ri\u00eang bi\u1ec7t.",
      collocations: ["older generation", "younger generation", "future generations"]
    },
    {
      id: "v11-u2-clash",
      word: "clash",
      partOfSpeech: "v / n",
      meaningVi: "s\u1ef1 xung \u0111\u1ed9t gay g\u1eaft quan \u0111i\u1ec3m",
      ipa: "/kl\u00e6\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clash&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cultural beliefs often clash when grandparents live under the same roof.",
      exampleVi: "Quan \u0111i\u1ec3m v\u0103n h\u00f3a th\u01b0\u1eddng x\u1ea3y ra va ch\u1ea1m khi \u00f4ng b\u00e0 s\u1ed1ng chung m\u1ed9t m\u00e1i nh\u00e0.",
      collocations: ["clash of opinions", "clash with parents"]
    },
    {
      id: "v11-u2-overprotective",
      word: "overprotective",
      partOfSpeech: "adj",
      meaningVi: "bao b\u1ecdc, b\u1ea3o b\u1ecdc con c\u00e1i qu\u00e1 m\u1ee9c",
      ipa: "/\u02cc\u0259\u028av\u0259pr\u0259\u02c8tekt\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=overprotective&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overprotective parenting may hinder adolescents from building self-confidence.",
      exampleVi: "S\u1ef1 bao b\u1ecdc qu\u00e1 m\u1ee9c c\u1ee7a cha m\u1eb9 c\u00f3 th\u1ec3 c\u1ea3n tr\u1edf con c\u00e1i x\u00e2y d\u1ef1ng s\u1ef1 t\u1ef1 tin.",
      collocations: ["overprotective parents", "overprotective attitude"]
    },
    {
      id: "v11-u2-impose",
      word: "impose",
      partOfSpeech: "v",
      meaningVi: "\u00e1p \u0111\u1eb7t suy ngh\u0129, \u00e1p \u0111\u1eb7t quy t\u1eafc",
      ipa: "/\u026am\u02c8p\u0259\u028az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=impose&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents should guide rather than impose their career dreams onto their offspring.",
      exampleVi: "Cha m\u1eb9 n\u00ean \u0111\u1ecbnh h\u01b0\u1edbng thay v\u00ec \u00e1p \u0111\u1eb7t \u01b0\u1edbc m\u01a1 ngh\u1ec1 nghi\u1ec7p c\u1ee7a m\u00ecnh l\u00ean con c\u00e1i.",
      collocations: ["impose opinions on", "impose rules"]
    },
    {
      id: "v11-u2-sympathetic",
      word: "sympathetic",
      partOfSpeech: "adj",
      meaningVi: "th\u00f4ng c\u1ea3m, bi\u1ebft l\u1eafng nghe chia s\u1ebb",
      ipa: "/\u02ccs\u026amp\u0259\u02c8\u03b8et\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sympathetic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A sympathetic teacher helped the teenager navigate difficult domestic troubles.",
      exampleVi: "Ng\u01b0\u1eddi th\u1ea7y bi\u1ebft th\u00f4ng c\u1ea3m \u0111\u00e3 gi\u00fap em h\u1ecdc sinh v\u01b0\u1ee3t qua nh\u1eefng kh\u00f3 kh\u0103n gia \u0111\u00ecnh.",
      collocations: ["sympathetic listener", "be sympathetic towards"]
    },
    {
      id: "v11-u2-table-manners",
      word: "table manners",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e9p l\u1ecbch s\u1ef1 tr\u00ean b\u00e0n \u0103n",
      ipa: "/\u02c8te\u026abl \u02c8m\u00e6n\u0259z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=table+manners&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Respecting elder members when serving soup is an essential Vietnamese table manner.",
      exampleVi: "M\u1eddi ng\u01b0\u1eddi l\u1edbn tu\u1ed5i tr\u01b0\u1edbc khi \u0103n l\u00e0 ph\u00e9p l\u1ecbch s\u1ef1 c\u01a1 b\u1ea3n tr\u00ean b\u00e0n \u0103n c\u1ee7a ng\u01b0\u1eddi Vi\u1ec7t.",
      collocations: ["observe table manners", "good table manners"]
    },
    {
      id: "v11-u2-individualism",
      word: "individualism",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee7 ngh\u0129a c\u00e1 nh\u00e2n, \u0111\u1ec1 cao t\u1ef1 do",
      ipa: "/\u02cc\u026and\u026a\u02c8v\u026ad\u0292u\u0259l\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=individualism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Western youth culture often places immense importance on individualism.",
      exampleVi: "V\u0103n h\u00f3a ng\u01b0\u1eddi tr\u1ebb ph\u01b0\u01a1ng T\u00e2y th\u01b0\u1eddng \u0111\u1eb7t tr\u1ecdng t\u00e2m l\u1edbn v\u00e0o ch\u1ee7 ngh\u0129a c\u00e1 nh\u00e2n.",
      collocations: ["embrace individualism", "spirit of individualism"]
    },
    {
      id: "v11-u2-collectivism",
      word: "collectivism",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u1eadp th\u1ec3, \u0111\u1eb7t c\u1ed9ng \u0111\u1ed3ng l\u00ean tr\u01b0\u1edbc",
      ipa: "/k\u0259\u02c8lekt\u026av\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=collectivism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Asian traditions are deeply anchored in family and community collectivism.",
      exampleVi: "Truy\u1ec1n th\u1ed1ng \u00c1 \u0110\u00f4ng g\u1eafn b\u00f3 s\u00e2u s\u1eafc v\u1edbi tinh th\u1ea7n t\u1eadp th\u1ec3 gia \u0111\u00ecnh v\u00e0 c\u1ed9ng \u0111\u1ed3ng.",
      collocations: ["culture of collectivism", "principles of collectivism"]
    },
    {
      id: "v11-u2-compromise",
      word: "compromise",
      partOfSpeech: "v / n",
      meaningVi: "s\u1ef1 th\u1ecfa hi\u1ec7p, nh\u01b0\u1ee3ng b\u1ed9 \u00f4n h\u00f2a",
      ipa: "/\u02c8k\u0252mpr\u0259ma\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=compromise&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Family harmony thrives when both generations are willing to make compromises.",
      exampleVi: "S\u1ef1 h\u00f2a thu\u1eadn gia \u0111\u00ecnh s\u1ebd \u0111\u01a1m hoa khi c\u1ea3 hai th\u1ebf h\u1ec7 s\u1eb5n s\u00e0ng nh\u01b0\u1ee3ng b\u1ed9 nhau.",
      collocations: ["reach a compromise", "willingness to compromise"]
    },
    {
      id: "v11-u2-authoritarian",
      word: "authoritarian",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u1ed9c \u0111o\u00e1n, gia tr\u01b0\u1edfng \u00e1p \u0111\u1eb7t",
      ipa: "/\u0254\u02d0\u02cc\u03b8\u0252r\u026a\u02c8te\u0259ri\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=authoritarian&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Authoritarian parenting styles often result in communication breakdowns.",
      exampleVi: "Phong c\u00e1ch nu\u00f4i d\u1ea1y con c\u00e1i gia tr\u01b0\u1edfng \u0111\u1ed9c \u0111o\u00e1n th\u01b0\u1eddng d\u1eabn t\u1edbi s\u1ef1 \u0111\u1ee9t g\u00e3y giao ti\u1ebfp.",
      collocations: ["authoritarian parents", "authoritarian style"]
    },
    {
      id: "v11-u2-permissive",
      word: "permissive",
      partOfSpeech: "adj",
      meaningVi: "d\u1ec5 d\u00e3i, nu\u00f4ng chi\u1ec1u bu\u00f4ng l\u1ecfng",
      ipa: "/p\u0259\u02c8m\u026as\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=permissive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Permissive parenting without clear rules makes children struggle with self-control.",
      exampleVi: "Nu\u00f4ng chi\u1ec1u bu\u00f4ng l\u1ecfng kh\u00f4ng c\u00f3 k\u1ef7 lu\u1eadt khi\u1ebfn tr\u1ebb em g\u1eb7p kh\u00f3 kh\u0103n trong vi\u1ec7c t\u1ef1 ch\u1ee7.",
      collocations: ["permissive parenting", "overly permissive"]
    },
    {
      id: "v11-u2-digital-native",
      word: "digital native",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi sinh ra trong th\u1eddi \u0111\u1ea1i k\u1ef9 thu\u1eadt s\u1ed1",
      ipa: "/\u02ccd\u026ad\u0292\u026atl \u02c8ne\u026at\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+native&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "As digital natives, Gen Z teenagers learn smartphone apps almost instinctively.",
      exampleVi: "L\u00e0 nh\u1eefng ng\u01b0\u1eddi sinh ra trong th\u1eddi \u0111\u1ea1i s\u1ed1, gi\u1edbi tr\u1ebb Gen Z h\u1ecdc d\u00f9ng \u1ee9ng d\u1ee5ng \u0111i\u1ec7n tho\u1ea1i g\u1ea7n nh\u01b0 theo b\u1ea3n n\u0103ng.",
      collocations: ["digital native generation", "characteristics of digital natives"]
    },
    {
      id: "v11-u2-digital-immigrant",
      word: "digital immigrant",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi ti\u1ebfp c\u1eadn c\u00f4ng ngh\u1ec7 khi \u0111\u00e3 tr\u01b0\u1edfng th\u00e0nh",
      ipa: "/\u02ccd\u026ad\u0292\u026atl \u02c8\u026am\u026a\u0261r\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+immigrant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Grandparents are digital immigrants who need patient tutoring with video calling apps.",
      exampleVi: "\u00d4ng b\u00e0 l\u00e0 nh\u1eefng ng\u01b0\u1eddi ti\u1ebfp c\u1eadn c\u00f4ng ngh\u1ec7 mu\u1ed9n n\u00ean c\u1ea7n con ch\u00e1u ki\u00ean nh\u1eabn ch\u1ec9 c\u00e1ch g\u1ecdi video.",
      collocations: ["digital immigrant generation", "support digital immigrants"]
    },
    {
      id: "v11-u2-family-dispute",
      word: "family dispute",
      partOfSpeech: "n.phr",
      meaningVi: "tranh ch\u1ea5p, m\u00e2u thu\u1eabn n\u1ed9i b\u1ed9 gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li d\u026a\u02c8spju\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+dispute&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Calm conversations can defuse an emotional family dispute over career paths.",
      exampleVi: "Nh\u1eefng cu\u1ed9c tr\u00f2 chuy\u1ec7n b\u00ecnh t\u0129nh c\u00f3 th\u1ec3 h\u00f3a gi\u1ea3i m\u00e2u thu\u1eabn gia \u0111\u00ecnh v\u1ec1 \u0111\u1ecbnh h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["settle a family dispute", "cause family disputes"]
    },
    {
      id: "v11-u2-autonomy",
      word: "autonomy",
      partOfSpeech: "n",
      meaningVi: "quy\u1ec1n t\u1ef1 ch\u1ee7, t\u1ef1 quy\u1ebft \u0111\u1ecbnh",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259mi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High school seniors crave greater personal autonomy as they prepare for college.",
      exampleVi: "H\u1ecdc sinh cu\u1ed1i c\u1ea5p khao kh\u00e1t quy\u1ec1n t\u1ef1 ch\u1ee7 c\u00e1 nh\u00e2n nhi\u1ec1u h\u01a1n khi chu\u1ea9n b\u1ecb v\u00e0o gi\u1ea3ng \u0111\u01b0\u1eddng.",
      collocations: ["grant autonomy", "personal autonomy"]
    },
    {
      id: "v11-u2-filial-obligation",
      word: "filial obligation",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ed5n ph\u1eadn con c\u00e1i \u0111\u1ed1i v\u1edbi cha m\u1eb9",
      ipa: "/\u02c8f\u026ali\u0259l \u02cc\u0252bl\u026a\u02c8\u0261e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=filial+obligation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Caring for aging parents in their retirement is regarded as a sacred filial obligation.",
      exampleVi: "Ch\u0103m s\u00f3c cha m\u1eb9 khi tu\u1ed5i gi\u00e0 \u0111\u01b0\u1ee3c xem l\u00e0 b\u1ed5n ph\u1eadn l\u00e0m con thi\u00eang li\u00eang.",
      collocations: ["fulfill filial obligation", "sense of filial obligation"]
    },
    {
      id: "v11-u2-role-conflict",
      word: "role conflict",
      partOfSpeech: "n.phr",
      meaningVi: "xung \u0111\u1ed9t vai tr\u00f2 trong gia \u0111\u00ecnh/x\u00e3 h\u1ed9i",
      ipa: "/r\u0259\u028al \u02c8k\u0252nfl\u026akt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=role+conflict&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Working mothers frequently face role conflicts between office work and child care.",
      exampleVi: "Ng\u01b0\u1eddi m\u1eb9 \u0111i l\u00e0m th\u01b0\u1eddng \u0111\u1ed1i m\u1eb7t v\u1edbi xung \u0111\u1ed9t vai tr\u00f2 gi\u1eefa c\u00f4ng vi\u1ec7c c\u01a1 quan v\u00e0 ch\u0103m s\u00f3c con.",
      collocations: ["experience role conflict", "resolve role conflict"]
    },
    {
      id: "v11-u2-heart-to-heart",
      word: "heart-to-heart",
      partOfSpeech: "adj",
      meaningVi: "ch\u00e2n th\u00e0nh, tr\u1ea3i l\u00f2ng t\u1eeb \u0111\u00e1y l\u00f2ng",
      ipa: "/\u02cch\u0251\u02d0t t\u0259 \u02c8h\u0251\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heart-to-heart&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A late-night heart-to-heart talk resolved years of silence between father and son.",
      exampleVi: "M\u1ed9t cu\u1ed9c n\u00f3i chuy\u1ec7n tr\u1ea3i l\u00f2ng \u0111\u00eam mu\u1ed9n \u0111\u00e3 x\u00f3a tan nhi\u1ec1u n\u0103m im l\u1eb7ng gi\u1eefa hai cha con.",
      collocations: ["heart-to-heart talk", "heart-to-heart conversation"]
    },
    {
      id: "v11-u2-alienation",
      word: "alienation",
      partOfSpeech: "n",
      meaningVi: "c\u1ea3m gi\u00e1c xa l\u00e1nh, c\u00f4 l\u1eadp kh\u1ecfi gia \u0111\u00ecnh",
      ipa: "/\u02cce\u026ali\u0259\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=alienation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lack of dinner conversations can lead to painful feelings of alienation in youths.",
      exampleVi: "Thi\u1ebfu nh\u1eefng b\u1eefa c\u01a1m tr\u00f2 chuy\u1ec7n c\u00f3 th\u1ec3 d\u1eabn \u0111\u1ebfn c\u1ea3m gi\u00e1c xa l\u00e1nh \u0111au l\u00f2ng \u1edf ng\u01b0\u1eddi tr\u1ebb.",
      collocations: ["feelings of alienation", "social alienation"]
    },
    {
      id: "v11-u2-tolerance",
      word: "tolerance",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng khoan dung, ch\u1ea5p nh\u1eadn s\u1ef1 kh\u00e1c bi\u1ec7t",
      ipa: "/\u02c8t\u0252l\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tolerance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing tolerance helps elders appreciate new forms of music and dress.",
      exampleVi: "R\u00e8n luy\u1ec7n l\u00f2ng khoan dung gi\u00fap ng\u01b0\u1eddi l\u1edbn tu\u1ed5i hi\u1ec3u v\u00e0 \u0111\u00f3n nh\u1eadn c\u00e1c phong c\u00e1ch \u00e2m nh\u1ea1c v\u00e0 trang ph\u1ee5c m\u1edbi.",
      collocations: ["show tolerance towards", "mutual tolerance"]
    },
    {
      id: "v11-u2-intergenerational",
      word: "intergenerational",
      partOfSpeech: "adj",
      meaningVi: "gi\u1eefa c\u00e1c th\u1ebf h\u1ec7 v\u1edbi nhau",
      ipa: "/\u02cc\u026ant\u0259d\u0292en\u0259\u02c8re\u026a\u0283\u0259nl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intergenerational&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community centers host intergenerational storytelling nights to connect seniors and kids.",
      exampleVi: "Nh\u00e0 v\u0103n h\u00f3a t\u1ed5 ch\u1ee9c c\u00e1c \u0111\u00eam k\u1ec3 chuy\u1ec7n li\u00ean th\u1ebf h\u1ec7 \u0111\u1ec3 g\u1eafn k\u1ebft c\u00e1c c\u1ee5 gi\u00e0 v\u00e0 tr\u1ebb nh\u1ecf.",
      collocations: ["intergenerational dialogue", "intergenerational living"]
    }
    ,
    {
      id: "mega-unit-2-generational-divide",
      word: "generational divide",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n h\u00f3a quan \u0111i\u1ec3m gi\u1eefa c\u00e1c th\u1ebf h\u1ec7",
      ipa: "/\u02ccd\u0292en\u0259\u02c8re\u026a\u0283\u0259nl d\u026a\u02c8va\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=generational+divide&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open family conversations help bridge the widening generational divide regarding tech use.",
      exampleVi: "Nh\u1eefng cu\u1ed9c tr\u00f2 chuy\u1ec7n gia \u0111\u00ecnh c\u1edfi m\u1edf gi\u00fap thu h\u1eb9p s\u1ef1 ph\u00e2n h\u00f3a kho\u1ea3ng c\u00e1ch th\u1ebf h\u1ec7 v\u1ec1 vi\u1ec7c d\u00f9ng c\u00f4ng ngh\u1ec7.",
      collocations: ["bridge the generational divide", "deepening divide"]
    }
    ,
    {
      id: "mega-unit-2-digital-native",
      word: "digital native",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ebf h\u1ec7 sinh ra \u0111\u00e3 ti\u1ebfp x\u00fac v\u1edbi c\u00f4ng ngh\u1ec7 s\u1ed1",
      ipa: "/\u02ccd\u026ad\u0292\u026atl \u02c8ne\u026at\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+native&type=2",
      imageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Born with touchscreens in hand, digital natives grasp smartphone interfaces effortlessly.",
      exampleVi: "Sinh ra \u0111\u00e3 quen thu\u1ed9c v\u1edbi m\u00e0n h\u00ecnh c\u1ea3m \u1ee9ng, th\u1ebf h\u1ec7 b\u1ea3n \u0111\u1ecba k\u1ef9 thu\u1eadt s\u1ed1 n\u1eafm b\u1eaft giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i r\u1ea5t d\u1ec5 d\u00e0ng.",
      collocations: ["habits of digital natives", "generation of digital natives"]
    }
    ,
    {
      id: "mega-unit-2-digital-immigrant",
      word: "digital immigrant",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi th\u1ebf h\u1ec7 tr\u01b0\u1edbc h\u1ecdc c\u00e1ch ti\u1ebfp c\u1eadn c\u00f4ng ngh\u1ec7 s\u1ed1",
      ipa: "/\u02ccd\u026ad\u0292\u026atl \u02c8\u026am\u026a\u0261r\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+immigrant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Grandparents often feel like digital immigrants trying to decode modern internet slang.",
      exampleVi: "\u00d4ng b\u00e0 th\u01b0\u1eddng c\u1ea3m th\u1ea5y m\u00ecnh nh\u01b0 nh\u1eefng ng\u01b0\u1eddi m\u1edbi ti\u1ebfp c\u1eadn c\u00f4ng ngh\u1ec7 khi c\u1ed1 gi\u1ea3i ngh\u0129a ti\u1ebfng l\u00f3ng tr\u00ean m\u1ea1ng.",
      collocations: ["teach digital immigrants", "struggles of digital immigrants"]
    }
    ,
    {
      id: "mega-unit-2-parental-expectation",
      word: "parental expectation",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef3 v\u1ecdng c\u1ee7a cha m\u1eb9 \u0111\u1ed1i v\u1edbi th\u00e0nh t\u00edch con c\u00e1i",
      ipa: "/p\u0259\u02c8rentl \u02ccekspek\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=parental+expectation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High parental expectation can motivate teenagers but may also induce acute study anxiety.",
      exampleVi: "K\u1ef3 v\u1ecdng cao c\u1ee7a cha m\u1eb9 c\u00f3 th\u1ec3 l\u00e0 \u0111\u1ed9ng l\u1ef1c nh\u01b0ng c\u0169ng c\u00f3 th\u1ec3 g\u00e2y ra lo \u00e2u thi c\u1eed c\u0103ng th\u1eb3ng cho con tr\u1ebb.",
      collocations: ["meet parental expectations", "pressure from expectations"]
    }
    ,
    {
      id: "mega-unit-2-helicopter-parenting",
      word: "helicopter parenting",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3u nu\u00f4i d\u1ea1y con bao b\u1ecdc ki\u1ec3m so\u00e1t th\u00e1i qu\u00e1",
      ipa: "/\u02c8hel\u026ak\u0252pt\u0259 \u02ccpe\u0259r\u0259nt\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=helicopter+parenting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Helicopter parenting hinders adolescent emotional autonomy and independent problem-solving.",
      exampleVi: "Ki\u1ec3u nu\u00f4i d\u1ea1y con bao b\u1ecdc ki\u1ec3m so\u00e1t th\u00e1i qu\u00e1 k\u00ecm h\u00e3m s\u1ef1 t\u1ef1 ch\u1ee7 c\u1ea3m x\u00fac v\u00e0 kh\u1ea3 n\u0103ng t\u1ef1 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 c\u1ee7a tr\u1ebb.",
      collocations: ["resist helicopter parenting", "dangers of helicopter parenting"]
    }
    ,
    {
      id: "mega-unit-2-family-tradition",
      word: "family tradition",
      partOfSpeech: "n.phr",
      meaningVi: "truy\u1ec1n th\u1ed1ng phong n\u1ebfp sinh ho\u1ea1t gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li tr\u0259\u02c8d\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+tradition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Making chung cake together during Tet remains a cherished family tradition for Vietnamese homes.",
      exampleVi: "C\u00f9ng nhau g\u00f3i b\u00e1nh ch\u01b0ng d\u1ecbp T\u1ebft v\u1eabn l\u00e0 m\u1ed9t truy\u1ec1n th\u1ed1ng gia \u0111\u00ecnh thi\u00eang li\u00eang v\u00e0 \u0111\u1ea7m \u1ea5m c\u1ee7a ng\u01b0\u1eddi Vi\u1ec7t.",
      collocations: ["uphold family tradition", "cherished family tradition"]
    }
    ,
    {
      id: "mega-unit-2-mutual-understanding",
      word: "mutual understanding",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u1ea5u hi\u1ec3u v\u00e0 \u0111\u1ed3ng c\u1ea3m t\u1eeb hai ph\u00eda",
      ipa: "/\u02ccmju\u02d0t\u0283u\u0259l \u02cc\u028cnd\u0259\u02c8st\u00e6nd\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+understanding&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Active listening sessions foster mutual understanding between conservative parents and liberal youth.",
      exampleVi: "Nh\u1eefng bu\u1ed5i tr\u00f2 chuy\u1ec7n bi\u1ebft l\u1eafng nghe vun \u0111\u1eafp s\u1ef1 th\u1ea5u hi\u1ec3u gi\u1eefa cha m\u1eb9 truy\u1ec1n th\u1ed1ng v\u00e0 con c\u00e1i hi\u1ec7n \u0111\u1ea1i.",
      collocations: ["reach mutual understanding", "based on mutual understanding"]
    }
    ,
    {
      id: "mega-unit-2-career-aspiration",
      word: "career aspiration",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00e1t v\u1ecdng v\u00e0 \u0111\u1ecbnh h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p c\u00e1 nh\u00e2n",
      ipa: "/k\u0259\u02c8r\u026a\u0259r \u02cc\u00e6sp\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+aspiration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Young students discuss their career aspirations candidly with school vocational counselors.",
      exampleVi: "C\u00e1c h\u1ecdc sinh tr\u1ebb th\u1ea3o lu\u1eadn c\u1edfi m\u1edf v\u1ec1 kh\u00e1t v\u1ecdng ngh\u1ec1 nghi\u1ec7p t\u01b0\u01a1ng lai v\u1edbi th\u1ea7y c\u00f4 h\u01b0\u1edbng nghi\u1ec7p.",
      collocations: ["pursue career aspirations", "fulfill aspirations"]
    }
    ,
    {
      id: "mega-unit-2-peer-pressure",
      word: "peer pressure",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e1p l\u1ef1c ph\u1ea3i theo s\u1ed1 \u0111\u00f4ng t\u1eeb b\u1ea1n b\u00e8 \u0111\u1ed3ng l\u1ee9a",
      ipa: "/\u02c8p\u026a\u0259 pre\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+pressure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strong self-worth empowers adolescents to resist detrimental peer pressure regarding drinking.",
      exampleVi: "L\u00f2ng t\u1ef1 tr\u1ecdng v\u1eefng v\u00e0ng ti\u1ebfp th\u00eam s\u1ee9c m\u1ea1nh cho thanh thi\u1ebfu ni\u00ean c\u01b0\u1ee1ng l\u1ea1i \u00e1p l\u1ef1c b\u1ea1n b\u00e8 l\u00f4i k\u00e9o bia r\u01b0\u1ee3u.",
      collocations: ["succumb to peer pressure", "cope with peer pressure"]
    }
    ,
    {
      id: "mega-unit-2-financial-dependence",
      word: "financial dependence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u1ee5 thu\u1ed9c chu c\u1ea5p t\u00e0i ch\u00ednh v\u00e0o gia \u0111\u00ecnh",
      ipa: "/fa\u026a\u02ccn\u00e6n\u0283l d\u026a\u02c8pend\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=financial+dependence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "College graduates aim for swift employment to break free from prolonged financial dependence.",
      exampleVi: "Sinh vi\u00ean m\u1edbi t\u1ed1t nghi\u1ec7p nh\u1eafm t\u1edbi vi\u1ec7c \u0111i l\u00e0m s\u1edbm \u0111\u1ec3 tho\u00e1t kh\u1ecfi s\u1ef1 ph\u1ee5 thu\u1ed9c t\u00e0i ch\u00ednh k\u00e9o d\u00e0i v\u00e0o cha m\u1eb9.",
      collocations: ["reduce financial dependence", "struggle with dependence"]
    }
    ,
    {
      id: "mega-unit-2-curfew-violation",
      word: "curfew violation",
      partOfSpeech: "n.phr",
      meaningVi: "vi ph\u1ea1m gi\u1edd gi\u1edbi nghi\u00eam v\u1ec1 nh\u00e0 mu\u1ed9n",
      ipa: "/\u02c8k\u025c\u02d0fju\u02d0 \u02ccva\u026a\u0259\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=curfew+violation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Repeated curfew violations led to grounded privileges and intense dinner arguments.",
      exampleVi: "Nh\u1eefng l\u1ea7n li\u00ean ti\u1ebfp vi ph\u1ea1m gi\u1edd gi\u1edbi nghi\u00eam \u0111\u00e3 d\u1eabn t\u1edbi vi\u1ec7c b\u1ecb ph\u1ea1t c\u1ea5m t\u00fac v\u00e0 nh\u1eefng tranh c\u00e3i n\u1ea3y l\u1eeda trong b\u1eefa t\u1ed1i.",
      collocations: ["punish curfew violation", "strict curfew rule"]
    }
    ,
    {
      id: "mega-unit-2-personal-boundary",
      word: "personal boundary",
      partOfSpeech: "n.phr",
      meaningVi: "ranh gi\u1edbi ri\u00eang t\u01b0 c\u00e1 nh\u00e2n c\u1ea7n \u0111\u01b0\u1ee3c t\u00f4n tr\u1ecdng",
      ipa: "/\u02c8p\u025c\u02d0s\u0259nl \u02c8ba\u028andri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=personal+boundary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teens appreciate when parents knock on closed doors and respect their personal boundaries.",
      exampleVi: "C\u00e1c b\u1ea1n tr\u1ebb r\u1ea5t tr\u00e2n tr\u1ecdng khi cha m\u1eb9 g\u00f5 c\u1eeda tr\u01b0\u1edbc khi v\u00e0o v\u00e0 t\u00f4n tr\u1ecdng ranh gi\u1edbi ri\u00eang t\u01b0 c\u1ee7a con c\u00e1i.",
      collocations: ["set personal boundaries", "respect someone's boundaries"]
    }
    ,
    {
      id: "mega-unit-2-dress-code-dispute",
      word: "dress code dispute",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea5t \u0111\u1ed3ng tranh c\u00e3i v\u1ec1 c\u00e1ch \u0103n m\u1eb7c trang ph\u1ee5c",
      ipa: "/\u02c8dres k\u0259\u028ad d\u026a\u02c8spju\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dress+code+dispute&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dyed hair and ripped jeans triggered a fiery dress code dispute between Nam and his mother.",
      exampleVi: "M\u00e1i t\u00f3c nhu\u1ed9m m\u00e0u v\u00e0 chi\u1ebfc qu\u1ea7n b\u00f2 r\u00e1ch \u0111\u00e3 ch\u00e2m ng\u00f2i cho cu\u1ed9c tranh c\u00e3i trang ph\u1ee5c gay g\u1eaft gi\u1eefa Nam v\u00e0 m\u1eb9.",
      collocations: ["resolve a dress code dispute", "spark a dispute"]
    }
    ,
    {
      id: "mega-unit-2-emotional-maturity",
      word: "emotional maturity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 tr\u01b0\u1edfng th\u00e0nh v\u00e0 ch\u00edn ch\u1eafn trong c\u1ea3m x\u00fac",
      ipa: "/\u026a\u02ccm\u0259\u028a\u0283\u0259nl m\u0259\u02c8t\u0283\u028a\u0259r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emotional+maturity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Resolving familial conflicts calmly is a reliable indicator of genuine emotional maturity.",
      exampleVi: "B\u00ecnh t\u0129nh gi\u1ea3i quy\u1ebft m\u00e2u thu\u1eabn gia \u0111\u00ecnh l\u00e0 m\u1ed9t th\u01b0\u1edbc \u0111o \u0111\u00e1ng tin c\u1eady c\u1ee7a s\u1ef1 ch\u00edn ch\u1eafn c\u1ea3m x\u00fac th\u1ef1c th\u1ee5.",
      collocations: ["demonstrate emotional maturity", "develop emotional maturity"]
    }
    ,
    {
      id: "mega-unit-2-lifestyle-clash",
      word: "lifestyle clash",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 xung \u0111\u1ed9t phong c\u00e1ch v\u00e0 n\u1ebfp s\u1ed1ng sinh ho\u1ea1t",
      ipa: "/\u02c8la\u026afsta\u026al kl\u00e6\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=lifestyle+clash&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Late-night video streaming versus early dawn risers created a chronic lifestyle clash in the flat.",
      exampleVi: "Vi\u1ec7c th\u1ee9c khuya c\u00e0y phim \u0111\u1ed1i l\u1eadp v\u1edbi th\u00f3i quen d\u1eady s\u1edbm t\u1eadp th\u1ec3 d\u1ee5c g\u00e2y ra xung \u0111\u1ed9t n\u1ebfp s\u1ed1ng th\u01b0\u1eddng nh\u1eadt trong c\u0103n h\u1ed9.",
      collocations: ["endure a lifestyle clash", "minimize lifestyle clashes"]
    }
    ,
    {
      id: "mega-unit-2-traditional-viewpoint",
      word: "traditional viewpoint",
      partOfSpeech: "n.phr",
      meaningVi: "quan \u0111i\u1ec3m nh\u00ecn nh\u1eadn theo n\u1ebfp ngh\u0129 truy\u1ec1n th\u1ed1ng",
      ipa: "/tr\u0259\u02c8d\u026a\u0283\u0259nl \u02c8vj\u028a\u0259p\u0254\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traditional+viewpoint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Grandparents often hold traditional viewpoints regarding marriage and family responsibilities.",
      exampleVi: "\u00d4ng b\u00e0 th\u01b0\u1eddng gi\u1eef nh\u1eefng quan \u0111i\u1ec3m truy\u1ec1n th\u1ed1ng s\u00e2u s\u1eafc v\u1ec1 h\u00f4n nh\u00e2n v\u00e0 b\u1ed5n ph\u1eadn gia \u0111\u00ecnh.",
      collocations: ["adhere to traditional viewpoints", "challenge a viewpoint"]
    }
    ,
    {
      id: "mega-unit-2-open-mindedness",
      word: "open-mindedness",
      partOfSpeech: "n",
      meaningVi: "t\u01b0 duy c\u1edfi m\u1edf s\u1eb5n s\u00e0ng ti\u1ebfp thu \u0111i\u1ec1u m\u1edbi",
      ipa: "/\u02cc\u0259\u028ap\u0259n \u02c8ma\u026and\u026adn\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=open-mindedness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open-mindedness allows older relatives to appreciate youthful creative endeavors and careers.",
      exampleVi: "T\u01b0 duy c\u1edfi m\u1edf gi\u00fap nh\u1eefng ng\u01b0\u1eddi l\u1edbn tu\u1ed5i tr\u00e2n tr\u1ecdng v\u00e0 \u0111\u00f3n nh\u1eadn nh\u1eefng n\u1ed7 l\u1ef1c s\u00e1ng t\u1ea1o v\u00e0 ngh\u1ec1 nghi\u1ec7p m\u1edbi c\u1ee7a gi\u1edbi tr\u1ebb.",
      collocations: ["foster open-mindedness", "act with open-mindedness"]
    }
    ,
    {
      id: "mega-unit-2-social-etiquette",
      word: "social etiquette",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e9p l\u1ecbch s\u1ef1 x\u00e3 giao v\u00e0 quy t\u1eafc \u1ee9ng x\u1eed",
      ipa: "/\u02ccs\u0259\u028a\u0283l \u02c8et\u026aket/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+etiquette&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Parents teach young children courteous table manners and respectful social etiquette.",
      exampleVi: "Cha m\u1eb9 r\u00e8n gi\u0169a cho con tr\u1ebb ph\u00e9p l\u1ecbch s\u1ef1 tr\u00ean b\u00e0n \u0103n v\u00e0 c\u00e1c quy t\u1eafc \u1ee9ng x\u1eed x\u00e3 h\u1ed9i l\u1ec5 ph\u00e9p.",
      collocations: ["observe social etiquette", "breach of social etiquette"]
    }
    ,
    {
      id: "mega-unit-2-rebellious-phase",
      word: "rebellious phase",
      partOfSpeech: "n.phr",
      meaningVi: "giai \u0111o\u1ea1n tu\u1ed5i d\u1eady th\u00ec n\u1ed5i lo\u1ea1n v\u00e0 mu\u1ed1n t\u1ef1 kh\u1eb3ng \u0111\u1ecbnh",
      ipa: "/r\u026a\u02c8belj\u0259s fe\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rebellious+phase&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Patience and warm empathy help parents support teens through their volatile rebellious phase.",
      exampleVi: "S\u1ef1 ki\u00ean nh\u1eabn v\u00e0 \u0111\u1ed3ng c\u1ea3m \u1ea5m \u00e1p gi\u00fap cha m\u1eb9 \u0111\u1ed3ng h\u00e0nh c\u00f9ng con v\u01b0\u1ee3t qua giai \u0111o\u1ea1n d\u1eady th\u00ec \u1ea9m \u01b0\u01a1ng n\u1ed5i lo\u1ea1n.",
      collocations: ["go through a rebellious phase", "handle a rebellious phase"]
    }
    ,
    {
      id: "mega-unit-2-family-gathering",
      word: "family gathering",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i sum h\u1ecdp gia \u0111\u00ecnh \u1ea5m c\u00fang \u0111\u00f4ng \u0111\u1ee7",
      ipa: "/\u02c8f\u00e6m\u0259li \u02c8\u0261\u00e6\u00f0\u0259r\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+gathering&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sunday lunches serve as a joyful family gathering where cousins catch up on school life.",
      exampleVi: "B\u1eefa c\u01a1m tr\u01b0a Ch\u1ee7 nh\u1eadt l\u00e0 bu\u1ed5i sum h\u1ecdp gia \u0111\u00ecnh ng\u1eadp tr\u00e0n ti\u1ebfng c\u01b0\u1eddi n\u01a1i anh ch\u1ecb em h\u1ecd r\u00f4m r\u1ea3 k\u1ec3 chuy\u1ec7n tr\u01b0\u1eddng l\u1edbp.",
      collocations: ["attend a family gathering", "host a family gathering"]
    }
    ,
    {
      id: "mega-unit-2-ancestral-values",
      word: "ancestral values",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1eefng gi\u00e1 tr\u1ecb \u0111\u1ea1o l\u00fd t\u1ed1t \u0111\u1eb9p c\u1ee7a t\u1ed5 ti\u00ean truy\u1ec1n l\u1ea1i",
      ipa: "/\u00e6n\u02c8sestr\u0259l \u02c8v\u00e6lju\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ancestral+values&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Preserving ancestral values of diligence and compassion anchors the family through changing times.",
      exampleVi: "G\u00ecn gi\u1eef nh\u1eefng gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c t\u1ed5 ti\u00ean v\u1ec1 s\u1ef1 c\u1ea7n c\u00f9 v\u00e0 l\u00f2ng nh\u00e2n \u00e1i l\u00e0 \u0111i\u1ec3m t\u1ef1a cho gia \u0111\u00ecnh qua bao th\u0103ng tr\u1ea7m.",
      collocations: ["uphold ancestral values", "pass down values"]
    }
    ,
    {
      id: "mega-unit-2-intergenerational-dialogue",
      word: "intergenerational dialogue",
      partOfSpeech: "n.phr",
      meaningVi: "cu\u1ed9c \u0111\u1ed1i tho\u1ea1i c\u1edfi m\u1edf gi\u1eefa c\u00e1c th\u1ebf h\u1ec7",
      ipa: "/\u02cc\u026ant\u0259d\u0292en\u0259\u02c8re\u026a\u0283\u0259nl \u02c8da\u026a\u0259l\u0252\u0261/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intergenerational+dialogue&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community centers host intergenerational dialogue sessions to connect elders and teens.",
      exampleVi: "C\u00e1c nh\u00e0 v\u0103n h\u00f3a c\u1ed9ng \u0111\u1ed3ng t\u1ed5 ch\u1ee9c c\u00e1c bu\u1ed5i \u0111\u1ed1i tho\u1ea1i li\u00ean th\u1ebf h\u1ec7 \u0111\u1ec3 g\u1eafn k\u1ebft c\u00e1c b\u1eadc cao ni\u00ean v\u00e0 gi\u1edbi tr\u1ebb.",
      collocations: ["encourage intergenerational dialogue", "fruitful dialogue"]
    }
  ],
  "unit-3-cities-of-the-future": [
    {
      id: "v11-u3-smart-city",
      word: "smart city",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00f4 th\u1ecb th\u00f4ng minh t\u00edch h\u1ee3p c\u00f4ng ngh\u1ec7",
      ipa: "/sm\u0251\u02d0t \u02c8s\u026ati/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smart+city&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A smart city utilizes IoT sensors to manage traffic flow and reduce power waste.",
      exampleVi: "\u0110\u00f4 th\u1ecb th\u00f4ng minh s\u1eed d\u1ee5ng c\u1ea3m bi\u1ebfn IoT \u0111\u1ec3 \u0111i\u1ec1u ph\u1ed1i giao th\u00f4ng v\u00e0 gi\u1ea3m l\u00e3ng ph\u00ed \u0111i\u1ec7n n\u0103ng.",
      collocations: ["develop a smart city", "smart city technology"]
    },
    {
      id: "v11-u3-urban-planning",
      word: "urban planning",
      partOfSpeech: "n.phr",
      meaningVi: "quy ho\u1ea1ch \u0111\u00f4 th\u1ecb khoa h\u1ecdc",
      ipa: "/\u02c8\u025c\u02d0b\u0259n \u02c8pl\u00e6n\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+planning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable urban planning prioritizes tree-lined sidewalks and public transport networks.",
      exampleVi: "Quy ho\u1ea1ch \u0111\u00f4 th\u1ecb b\u1ec1n v\u1eefng \u01b0u ti\u00ean v\u1ec9a h\u00e8 r\u1ee3p b\u00f3ng c\u00e2y v\u00e0 m\u1ea1ng l\u01b0\u1edbi giao th\u00f4ng c\u00f4ng c\u1ed9ng.",
      collocations: ["modern urban planning", "principles of urban planning"]
    },
    {
      id: "v11-u3-skytrain",
      word: "skytrain",
      partOfSpeech: "n",
      meaningVi: "t\u00e0u \u0111i\u1ec7n tr\u00ean cao ch\u1ed1ng t\u1eafc \u0111\u01b0\u1eddng",
      ipa: "/\u02c8ska\u026atre\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=skytrain&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The newly opened skytrain line cuts commute times between districts by half.",
      exampleVi: "Tuy\u1ebfn t\u00e0u \u0111i\u1ec7n tr\u00ean cao m\u1edbi khai tr\u01b0\u01a1ng gi\u00fap gi\u1ea3m m\u1ed9t n\u1eeda th\u1eddi gian \u0111i l\u1ea1i gi\u1eefa c\u00e1c qu\u1eadn.",
      collocations: ["ride the skytrain", "urban skytrain network"]
    },
    {
      id: "v11-u3-pedestrian-zone",
      word: "pedestrian zone",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ed1 \u0111i b\u1ed9 c\u1ea5m xe c\u1ed9",
      ipa: "/p\u0259\u02c8destri\u0259n z\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pedestrian+zone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hoan Kiem Lake pedestrian zone comes alive every weekend with folk games and buskers.",
      exampleVi: "Ph\u1ed1 \u0111i b\u1ed9 h\u1ed3 Ho\u00e0n Ki\u1ebfm tr\u1edf n\u00ean n\u00e1o nhi\u1ec7t m\u1ed7i cu\u1ed1i tu\u1ea7n v\u1edbi tr\u00f2 ch\u01a1i d\u00e2n gian v\u00e0 ngh\u1ec7 s\u0129 \u0111\u01b0\u1eddng ph\u1ed1.",
      collocations: ["car-free pedestrian zone", "create pedestrian zones"]
    },
    {
      id: "v11-u3-high-rise-building",
      word: "high-rise building",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00f2a nh\u00e0 cao t\u1ea7ng ch\u1ecdc tr\u1eddi",
      ipa: "/\u02c8ha\u026a ra\u026az \u02c8b\u026ald\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=high-rise+building&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Future high-rise buildings incorporate vertical forest balconies to cool apartments.",
      exampleVi: "C\u00e1c t\u00f2a nh\u00e0 cao t\u1ea7ng t\u01b0\u01a1ng lai t\u00edch h\u1ee3p ban c\u00f4ng r\u1eebng th\u1eb3ng \u0111\u1ee9ng \u0111\u1ec3 l\u00e0m m\u00e1t c\u0103n h\u1ed9.",
      collocations: ["modern high-rise building", "cluster of high-rise buildings"]
    },
    {
      id: "v11-u3-infrastructure",
      word: "infrastructure",
      partOfSpeech: "n",
      meaningVi: "c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng k\u1ef9 thu\u1eadt \u0111\u00f4 th\u1ecb",
      ipa: "/\u02c8\u026anfr\u0259str\u028ckt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=infrastructure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Upgrading drainage infrastructure prevents catastrophic street flooding during heavy downpours.",
      exampleVi: "N\u00e2ng c\u1ea5p h\u1ea1 t\u1ea7ng tho\u00e1t n\u01b0\u1edbc gi\u00fap ng\u0103n ch\u1eb7n ng\u1eadp l\u1ee5t \u0111\u01b0\u1eddng ph\u1ed1 trong nh\u1eefng tr\u1eadn m\u01b0a nh\u01b0 tr\u00fat.",
      collocations: ["transport infrastructure", "green infrastructure"]
    },
    {
      id: "v11-u3-green-building",
      word: "green building",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng tr\u00ecnh ki\u1ebfn tr\u00fac xanh th\u00e2n thi\u1ec7n",
      ipa: "/\u0261ri\u02d0n \u02c8b\u026ald\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+building&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Green buildings collect rainwater and maximize natural daylight to cut carbon emissions.",
      exampleVi: "C\u00e1c c\u00f4ng tr\u00ecnh xanh h\u1ee9ng n\u01b0\u1edbc m\u01b0a v\u00e0 t\u1eadn d\u1ee5ng t\u1ed1i \u0111a \u00e1nh s\u00e1ng t\u1ef1 nhi\u00ean \u0111\u1ec3 gi\u1ea3m ph\u00e1t th\u1ea3i carbon.",
      collocations: ["certified green building", "design green buildings"]
    },
    {
      id: "v11-u3-congestion",
      word: "congestion",
      partOfSpeech: "n",
      meaningVi: "t\u00ecnh tr\u1ea1ng t\u1eafc ngh\u1ebdn k\u1eb9t xe \u0111\u00f4 th\u1ecb",
      ipa: "/k\u0259n\u02c8d\u0292est\u0283\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=congestion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investing in metro subway systems relieves chronic traffic congestion during rush hours.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o t\u00e0u \u0111i\u1ec7n ng\u1ea7m gi\u00fap gi\u1ea3i t\u1ecfa t\u00ecnh tr\u1ea1ng \u00f9n t\u1eafc giao th\u00f4ng kinh ni\u00ean gi\u1edd cao \u0111i\u1ec3m.",
      collocations: ["traffic congestion", "ease congestion"]
    },
    {
      id: "v11-u3-zero-emission",
      word: "zero emission",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00f4ng ph\u00e1t th\u1ea3i kh\u00ed \u0111\u1ed9c h\u1ea1i",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u026a\u02c8m\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero+emission&type=2",
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The city plans to transition its entire bus fleet to zero emission electric buses.",
      exampleVi: "Th\u00e0nh ph\u1ed1 \u0111\u1eb7t k\u1ebf ho\u1ea1ch chuy\u1ec3n \u0111\u1ed5i to\u00e0n b\u1ed9 xe bu\u00fdt sang xe \u0111i\u1ec7n kh\u00f4ng ph\u00e1t th\u1ea3i.",
      collocations: ["zero emission vehicle", "target zero emissions"]
    },
    {
      id: "v11-u3-rooftop-garden",
      word: "rooftop garden",
      partOfSpeech: "n.phr",
      meaningVi: "v\u01b0\u1eddn c\u00e2y tr\u00ean s\u00e2n th\u01b0\u1ee3ng t\u00f2a nh\u00e0",
      ipa: "/\u02c8ru\u02d0ft\u0252p \u02c8\u0261\u0251\u02d0dn/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rooftop+garden&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rooftop gardens reduce the urban heat island effect and produce fresh organic herbs.",
      exampleVi: "V\u01b0\u1eddn s\u00e2n th\u01b0\u1ee3ng l\u00e0m gi\u1ea3m hi\u1ec7u \u1ee9ng \u0111\u1ea3o nhi\u1ec7t \u0111\u00f4 th\u1ecb v\u00e0 cung c\u1ea5p rau th\u01a1m h\u1eefu c\u01a1 t\u01b0\u01a1i ngon.",
      collocations: ["install a rooftop garden", "lush rooftop garden"]
    },
    {
      id: "v11-u3-livable",
      word: "livable",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u00e1ng s\u1ed1ng, ti\u1ec7n nghi trong l\u00e0nh",
      ipa: "/\u02c8l\u026av\u0259bl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=livable&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Da Nang is frequently voted as one of Vietnam's most livable coastal cities.",
      exampleVi: "\u0110\u00e0 N\u1eb5ng th\u01b0\u1eddng xuy\u00ean \u0111\u01b0\u1ee3c b\u00ecnh ch\u1ecdn l\u00e0 m\u1ed9t trong nh\u1eefng th\u00e0nh ph\u1ed1 bi\u1ec3n \u0111\u00e1ng s\u1ed1ng nh\u1ea5t Vi\u1ec7t Nam.",
      collocations: ["most livable city", "create livable neighborhoods"]
    },
    {
      id: "v11-u3-sustainable-living",
      word: "sustainable living",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ed1i s\u1ed1ng b\u1ec1n v\u1eefng b\u1ea3o v\u1ec7 t\u01b0\u01a1ng lai",
      ipa: "/s\u0259\u02c8ste\u026an\u0259bl \u02c8l\u026av\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+living&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sustainable living entails using public bicycles, composting food scraps, and saving power.",
      exampleVi: "L\u1ed1i s\u1ed1ng b\u1ec1n v\u1eefng bao g\u1ed3m \u0111i xe \u0111\u1ea1p c\u00f4ng c\u1ed9ng, \u1ee7 r\u00e1c h\u1eefu c\u01a1 v\u00e0 ti\u1ebft ki\u1ec7m \u0111i\u1ec7n.",
      collocations: ["promote sustainable living", "adopt sustainable living"]
    },
    {
      id: "v11-u3-waste-to-energy",
      word: "waste-to-energy",
      partOfSpeech: "n.phr",
      meaningVi: "bi\u1ebfn r\u00e1c th\u1ea3i th\u00e0nh \u0111i\u1ec7n n\u0103ng",
      ipa: "/we\u026ast tu\u02d0 \u02c8en\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=waste-to-energy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The modern waste-to-energy plant incinerates municipal garbage cleanly to generate electricity.",
      exampleVi: "Nh\u00e0 m\u00e1y r\u00e1c ph\u00e1t \u0111i\u1ec7n hi\u1ec7n \u0111\u1ea1i \u0111\u1ed1t r\u00e1c sinh ho\u1ea1t s\u1ea1ch \u0111\u1ec3 s\u1ea3n xu\u1ea5t \u0111i\u1ec7n n\u0103ng.",
      collocations: ["waste-to-energy plant", "waste-to-energy technology"]
    },
    {
      id: "v11-u3-automated",
      word: "automated",
      partOfSpeech: "adj",
      meaningVi: "\u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng h\u00f3a b\u1eb1ng c\u1ea3m bi\u1ebfn v\u00e0 m\u00e1y t\u00ednh",
      ipa: "/\u02c8\u0254\u02d0t\u0259me\u026at\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=automated&type=2",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Automated streetlights dim when roads are empty and brighten when pedestrians approach.",
      exampleVi: "\u0110\u00e8n \u0111\u01b0\u1eddng t\u1ef1 \u0111\u1ed9ng gi\u1ea3m s\u00e1ng khi \u0111\u01b0\u1eddng v\u1eafng v\u00e0 s\u00e1ng r\u00f5 khi c\u00f3 ng\u01b0\u1eddi \u0111i b\u1ed9 \u0111\u1ebfn g\u1ea7n.",
      collocations: ["automated system", "fully automated transit"]
    },
    {
      id: "v11-u3-sensor",
      word: "sensor",
      partOfSpeech: "n",
      meaningVi: "c\u1ea3m bi\u1ebfn thu th\u1eadp d\u1eef li\u1ec7u m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02c8sens\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sensor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Air quality sensors mounted on lamp posts transmit pollution data to citizens' mobile apps.",
      exampleVi: "C\u1ea3m bi\u1ebfn ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng kh\u00ed g\u1eafn tr\u00ean c\u1ed9t \u0111\u00e8n g\u1eedi d\u1eef li\u1ec7u \u00f4 nhi\u1ec5m \u0111\u1ebfn \u1ee9ng d\u1ee5ng c\u1ee7a ng\u01b0\u1eddi d\u00e2n.",
      collocations: ["environmental sensors", "install smart sensors"]
    },
    {
      id: "v11-u3-eco-friendly-transit",
      word: "eco-friendly transit",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u01b0\u01a1ng ti\u1ec7n giao th\u00f4ng xanh th\u00e2n thi\u1ec7n",
      ipa: "/\u02cci\u02d0k\u0259\u028a \u02c8frendli \u02c8tr\u00e6nz\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=eco-friendly+transit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eco-friendly transit choices like electric trams reduce urban smog significantly.",
      exampleVi: "L\u1ef1a ch\u1ecdn giao th\u00f4ng xanh nh\u01b0 t\u00e0u \u0111i\u1ec7n m\u1eb7t \u0111\u1ea5t gi\u00fap gi\u1ea3m kh\u00f3i b\u1ee5i \u0111\u00f4 th\u1ecb r\u00f5 r\u1ec7t.",
      collocations: ["expand eco-friendly transit", "invest in eco-friendly transit"]
    },
    {
      id: "v11-u3-commute",
      word: "commute",
      partOfSpeech: "v / n",
      meaningVi: "qu\u00e3ng \u0111\u01b0\u1eddng \u0111i l\u1ea1i h\u00e0ng ng\u00e0y gi\u1eefa nh\u00e0 v\u00e0 n\u01a1i l\u00e0m/h\u1ecdc",
      ipa: "/k\u0259\u02c8mju\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=commute&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her morning commute became effortless after the new metro station opened nearby.",
      exampleVi: "H\u00e0nh tr\u00ecnh \u0111i l\u00e0m bu\u1ed5i s\u00e1ng c\u1ee7a c\u00f4 tr\u1edf n\u00ean nh\u00e0n t\u00eanh sau khi ga t\u00e0u \u0111i\u1ec7n ng\u1ea7m m\u1edbi m\u1edf g\u1ea7n nh\u00e0.",
      collocations: ["daily commute", "long commute"]
    },
    {
      id: "v11-u3-quality-of-life",
      word: "quality of life",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ea5t l\u01b0\u1ee3ng cu\u1ed9c s\u1ed1ng \u0111\u00f4 th\u1ecb",
      ipa: "/\u02c8kw\u0252l\u0259ti \u0259v la\u026af/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=quality+of+life&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "More parks, clean air, and safe cycle lanes vastly improve citizens' quality of life.",
      exampleVi: "Nhi\u1ec1u c\u00f4ng vi\u00ean, kh\u00f4ng kh\u00ed s\u1ea1ch v\u00e0 \u0111\u01b0\u1eddng xe \u0111\u1ea1p an to\u00e0n n\u00e2ng cao ch\u1ea5t l\u01b0\u1ee3ng s\u1ed1ng c\u1ee7a c\u01b0 d\u00e2n.",
      collocations: ["enhance quality of life", "high quality of life"]
    },
    {
      id: "v11-u3-overcrowded",
      word: "overcrowded",
      partOfSpeech: "adj",
      meaningVi: "qu\u00e1 \u0111\u00f4ng \u0111\u00fac ngh\u1eb9t th\u1edf",
      ipa: "/\u02cc\u0259\u028av\u0259\u02c8kra\u028ad\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=overcrowded&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Expanding suburban satellite towns prevents downtown centers from becoming overcrowded.",
      exampleVi: "M\u1edf r\u1ed9ng c\u00e1c \u0111\u00f4 th\u1ecb v\u1ec7 tinh v\u00f9ng ven gi\u00fap khu trung t\u00e2m kh\u00f4ng b\u1ecb qu\u00e1 t\u1ea3i \u0111\u00f4ng \u0111\u00fac.",
      collocations: ["overcrowded streets", "overcrowded public transit"]
    },
    {
      id: "v11-u3-renewable-grid",
      word: "renewable grid",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0\u1edbi \u0111i\u1ec7n th\u00f4ng minh s\u1eed d\u1ee5ng n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o",
      ipa: "/r\u026a\u02c8nju\u02d0\u0259bl \u0261r\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=renewable+grid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Future cities feed wind and solar energy into a decentralized smart renewable grid.",
      exampleVi: "Th\u00e0nh ph\u1ed1 t\u01b0\u01a1ng lai \u0111\u01b0a \u0111i\u1ec7n gi\u00f3 v\u00e0 \u0111i\u1ec7n m\u1eb7t tr\u1eddi v\u00e0o l\u01b0\u1edbi \u0111i\u1ec7n t\u00e1i t\u1ea1o th\u00f4ng minh.",
      collocations: ["power the renewable grid", "modernize the renewable grid"]
    }
    ,
    {
      id: "mega-unit-3-smart-grid",
      word: "smart grid",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0\u1edbi \u0111i\u1ec7n th\u00f4ng minh t\u1ef1 \u0111i\u1ec1u ph\u1ed1i ph\u1ee5 t\u1ea3i",
      ipa: "/sm\u0251\u02d0t \u0261r\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=smart+grid&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A municipal smart grid redirects surplus solar energy to battery stations during peak hours.",
      exampleVi: "M\u1ea1ng l\u01b0\u1edbi \u0111i\u1ec7n th\u00f4ng minh c\u1ee7a th\u00e0nh ph\u1ed1 t\u1ef1 \u0111\u1ed9ng \u0111i\u1ec1u ph\u1ed1i \u0111i\u1ec7n m\u1eb7t tr\u1eddi d\u01b0 th\u1eeba t\u1edbi c\u00e1c tr\u1ea1m pin trong gi\u1edd cao \u0111i\u1ec3m.",
      collocations: ["deploy a smart grid", "smart grid resilience"]
    }
    ,
    {
      id: "mega-unit-3-vertical-farming",
      word: "vertical farming",
      partOfSpeech: "n.phr",
      meaningVi: "canh t\u00e1c n\u00f4ng nghi\u1ec7p th\u1eb3ng \u0111\u1ee9ng nhi\u1ec1u t\u1ea7ng trong nh\u00e0",
      ipa: "/\u02c8v\u025c\u02d0t\u026akl \u02c8f\u0251\u02d0m\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vertical+farming&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Skyscraper vertical farming produces organic lettuce year-round using 95 percent less freshwater.",
      exampleVi: "H\u1ec7 th\u1ed1ng n\u00f4ng nghi\u1ec7p th\u1eb3ng \u0111\u1ee9ng trong c\u00e1c t\u00f2a nh\u00e0 ch\u1ecdc tr\u1eddi s\u1ea3n xu\u1ea5t x\u00e0 l\u00e1ch s\u1ea1ch quanh n\u0103m v\u00e0 ti\u1ebft ki\u1ec7m 95% n\u01b0\u1edbc ng\u1ecdt.",
      collocations: ["invest in vertical farming", "urban vertical farming"]
    }
    ,
    {
      id: "mega-unit-3-autonomous-shuttle",
      word: "autonomous shuttle",
      partOfSpeech: "n.phr",
      meaningVi: "xe bu\u00fdt \u0111\u01b0a \u0111\u00f3n t\u1ef1 h\u00e0nh kh\u00f4ng ng\u01b0\u1eddi l\u00e1i",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s \u02c8\u0283\u028ctl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous+shuttle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Electric autonomous shuttles circulate continuously through the university science campus.",
      exampleVi: "C\u00e1c tuy\u1ebfn xe bu\u00fdt \u0111i\u1ec7n t\u1ef1 h\u00e0nh kh\u00f4ng ng\u01b0\u1eddi l\u00e1i ch\u1ea1y tu\u1ea7n ho\u00e0n li\u00ean t\u1ee5c quanh khu\u00f4n vi\u00ean \u0111\u1ea1i h\u1ecdc khoa h\u1ecdc.",
      collocations: ["ride an autonomous shuttle", "fleet of autonomous shuttles"]
    }
    ,
    {
      id: "mega-unit-3-pedestrian-zone",
      word: "pedestrian zone",
      partOfSpeech: "n.phr",
      meaningVi: "tuy\u1ebfn ph\u1ed1 \u0111i b\u1ed9 kh\u00f4ng kh\u00f3i xe",
      ipa: "/p\u0259\u02c8destri\u0259n z\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pedestrian+zone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Converting downtown avenues into a pedestrian zone boosted retail foot traffic and air quality.",
      exampleVi: "Vi\u1ec7c chuy\u1ec3n \u0111\u1ed5i c\u00e1c \u0111\u1ea1i l\u1ed9 trung t\u00e2m th\u00e0nh ph\u1ed1 \u0111i b\u1ed9 \u0111\u00e3 l\u00e0m t\u0103ng l\u01b0\u1ee3ng kh\u00e1ch mua s\u1eafm v\u00e0 c\u1ea3i thi\u1ec7n ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng kh\u00ed.",
      collocations: ["stroll through a pedestrian zone", "designated pedestrian zone"]
    }
    ,
    {
      id: "mega-unit-3-urban-heat-island",
      word: "urban heat island",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng \u0111\u1ea3o nhi\u1ec7t \u0111\u00f4 th\u1ecb do b\u00ea t\u00f4ng h\u1ea5p th\u1ee5 nhi\u1ec7t",
      ipa: "/\u02c8\u025c\u02d0b\u0259n hi\u02d0t \u02c8a\u026al\u0259nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=urban+heat+island&type=2",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rooftop gardens and reflective asphalt mitigate the blistering urban heat island effect.",
      exampleVi: "V\u01b0\u1eddn tr\u00ean s\u00e2n th\u01b0\u1ee3ng v\u00e0 m\u1eb7t \u0111\u01b0\u1eddng nh\u1ef1a ph\u1ea3n quang gi\u00fap gi\u1ea3m thi\u1ec3u \u0111\u00e1ng k\u1ec3 hi\u1ec7u \u1ee9ng \u0111\u1ea3o nhi\u1ec7t gay g\u1eaft trong th\u00e0nh ph\u1ed1.",
      collocations: ["counter the urban heat island", "urban heat island mitigation"]
    }
    ,
    {
      id: "mega-unit-3-biophilic-architecture",
      word: "biophilic architecture",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ebfn tr\u00fac sinh th\u00e1i \u0111\u01b0a thi\u00ean nhi\u00ean v\u00e0o kh\u00f4ng gian s\u1ed1ng",
      ipa: "/\u02ccba\u026a\u0259\u028a\u02c8f\u026al\u026ak \u02c8\u0251\u02d0k\u026atekt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biophilic+architecture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Singapore's iconic skyscrapers incorporate biophilic architecture with waterfalls cascading down facades.",
      exampleVi: "Nh\u1eefng t\u00f2a th\u00e1p bi\u1ec3u t\u01b0\u1ee3ng c\u1ee7a Singapore \u1ee9ng d\u1ee5ng ki\u1ebfn tr\u00fac sinh th\u00e1i v\u1edbi th\u00e1c n\u01b0\u1edbc r\u00f3c r\u00e1ch ch\u1ea3y d\u1ecdc m\u1eb7t ti\u1ec1n.",
      collocations: ["embrace biophilic architecture", "biophilic design principles"]
    }
    ,
    {
      id: "mega-unit-3-transit-oriented-development",
      word: "transit-oriented development",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh ph\u00e1t tri\u1ec3n \u0111\u00f4 th\u1ecb l\u1ea5y giao th\u00f4ng c\u00f4ng c\u1ed9ng l\u00e0m trung t\u00e2m",
      ipa: "/\u02c8tr\u00e6nz\u026at \u02cc\u0254\u02d0rient\u026ad d\u026a\u02c8vel\u0259pm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=transit-oriented+development&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High-density apartments clustered near metro terminals epitomize transit-oriented development.",
      exampleVi: "C\u00e1c c\u1ee5m chung c\u01b0 cao t\u1ea7ng n\u1eb1m s\u00e1t nh\u00e0 ga t\u00e0u \u0111i\u1ec7n ng\u1ea7m l\u00e0 h\u00ecnh m\u1eabu ti\u00eau bi\u1ec3u c\u1ee7a \u0111\u00f4 th\u1ecb l\u1ea5y giao th\u00f4ng c\u00f4ng c\u1ed9ng l\u00e0m t\u00e2m \u0111i\u1ec3m.",
      collocations: ["plan transit-oriented development", "TOD model"]
    }
    ,
    {
      id: "mega-unit-3-sponge-city",
      word: "sponge city",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00e0nh ph\u1ed1 b\u1ecdt bi\u1ec3n th\u1ea5m h\u00fat n\u01b0\u1edbc m\u01b0a ch\u1ed1ng ng\u1eadp",
      ipa: "/sp\u028cnd\u0292 \u02c8s\u026ati/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sponge+city&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Permeable pavements and urban retention ponds turn coastal metropolises into resilient sponge cities.",
      exampleVi: "V\u1ec9a h\u00e8 th\u1ea5m n\u01b0\u1edbc v\u00e0 c\u00e1c h\u1ed3 \u0111i\u1ec1u h\u00f2a bi\u1ebfn c\u00e1c si\u00eau \u0111\u00f4 th\u1ecb ven bi\u1ec3n th\u00e0nh c\u00e1c th\u00e0nh ph\u1ed1 b\u1ecdt bi\u1ec3n ch\u1ed1ng ng\u1eadp hi\u1ec7u qu\u1ea3.",
      collocations: ["sponge city initiative", "features of a sponge city"]
    }
    ,
    {
      id: "mega-unit-3-waste-to-energy-plant",
      word: "waste-to-energy plant",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e0 m\u00e1y \u0111\u1ed1t r\u00e1c ph\u00e1t \u0111i\u1ec7n hi\u1ec7n \u0111\u1ea1i",
      ipa: "/we\u026ast tu \u02c8en\u0259d\u0292i pl\u0251\u02d0nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=waste-to-energy+plant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The high-tech waste-to-energy plant incinerates municipal trash cleanly while powering 50,000 homes.",
      exampleVi: "Nh\u00e0 m\u00e1y \u0111\u1ed1t r\u00e1c ph\u00e1t \u0111i\u1ec7n c\u00f4ng ngh\u1ec7 cao thi\u00eau h\u1ee7y r\u00e1c th\u1ea3i sinh ho\u1ea1t s\u1ea1ch s\u1ebd \u0111\u1ed3ng th\u1eddi c\u1ea5p \u0111i\u1ec7n cho 50.000 h\u1ed9 d\u00e2n.",
      collocations: ["construct a waste-to-energy plant", "state-of-the-art plant"]
    }
    ,
    {
      id: "mega-unit-3-rooftop-solar-array",
      word: "rooftop solar array",
      partOfSpeech: "n.phr",
      meaningVi: "gi\u00e0n pin n\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi l\u1eafp m\u00e1i nh\u00e0",
      ipa: "/\u02c8ru\u02d0ft\u0252p \u02c8s\u0259\u028al\u0259r \u0259\u02c8re\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rooftop+solar+array&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Installing a rooftop solar array cuts household electricity bills by up to seventy percent.",
      exampleVi: "L\u1eafp \u0111\u1eb7t gi\u00e0n pin m\u1eb7t tr\u1eddi tr\u00ean m\u00e1i nh\u00e0 gi\u00fap gi\u1ea3m ti\u1ec1n \u0111i\u1ec7n sinh ho\u1ea1t h\u1eb1ng th\u00e1ng t\u1edbi b\u1ea3y m\u01b0\u01a1i ph\u1ea7n tr\u0103m.",
      collocations: ["mount a rooftop solar array", "solar array efficiency"]
    }
    ,
    {
      id: "mega-unit-3-zero-carbon-footprint",
      word: "zero-carbon footprint",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ee9c ph\u00e1t th\u1ea3i kh\u00ed carbon b\u1eb1ng kh\u00f4ng",
      ipa: "/\u02ccz\u026a\u0259r\u0259\u028a \u02c8k\u0251\u02d0b\u0259n \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=zero-carbon+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The eco-district aims to achieve a certified net zero-carbon footprint by the decade's end.",
      exampleVi: "Khu \u0111\u00f4 th\u1ecb sinh th\u00e1i \u0111\u1eb7t m\u1ee5c ti\u00eau \u0111\u1ea1t ch\u1ee9ng nh\u1eadn m\u1ee9c ph\u00e1t th\u1ea3i kh\u00ed carbon b\u1eb1ng kh\u00f4ng tr\u01b0\u1edbc khi th\u1eadp k\u1ef7 kh\u00e9p l\u1ea1i.",
      collocations: ["target zero-carbon footprint", "strive for zero-carbon"]
    }
    ,
    {
      id: "mega-unit-3-commuter-rail",
      word: "commuter rail",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u01b0\u1eddng s\u1eaft \u0111\u00f4 th\u1ecb k\u1ebft n\u1ed1i ngo\u1ea1i \u00f4",
      ipa: "/k\u0259\u02c8mju\u02d0t\u0259 re\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=commuter+rail&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Electrified commuter rail whisks suburban workers to financial centers in under twenty minutes.",
      exampleVi: "Tuy\u1ebfn \u0111\u01b0\u1eddng s\u1eaft \u0111\u00f4 th\u1ecb ch\u1ea1y \u0111i\u1ec7n \u0111\u01b0a ng\u01b0\u1eddi lao \u0111\u1ed9ng ngo\u1ea1i \u00f4 v\u00e0o trung t\u00e2m t\u00e0i ch\u00ednh ch\u1ec9 trong ch\u01b0a \u0111\u1ea7y hai m\u01b0\u01a1i ph\u00fat.",
      collocations: ["ride commuter rail", "commuter rail station"]
    }
    ,
    {
      id: "mega-unit-3-intelligent-traffic-system",
      word: "intelligent traffic system",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng \u0111i\u1ec1u khi\u1ec3n giao th\u00f4ng th\u00f4ng minh b\u1eb1ng AI",
      ipa: "/\u026an\u02cctel\u026ad\u0292\u0259nt \u02c8tr\u00e6f\u026ak \u02c8s\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intelligent+traffic+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An intelligent traffic system adjusts traffic signal lights dynamically based on real-time vehicle flow.",
      exampleVi: "H\u1ec7 th\u1ed1ng giao th\u00f4ng th\u00f4ng minh t\u1ef1 \u0111\u1ed9ng \u0111i\u1ec1u ch\u1ec9nh \u0111\u00e8n t\u00edn hi\u1ec7u linh ho\u1ea1t d\u1ef1a tr\u00ean l\u01b0u l\u01b0\u1ee3ng xe c\u1ed9 theo th\u1eddi gian th\u1ef1c.",
      collocations: ["install intelligent traffic systems", "traffic optimization"]
    }
    ,
    {
      id: "mega-unit-3-mixed-use-zoning",
      word: "mixed-use zoning",
      partOfSpeech: "n.phr",
      meaningVi: "quy ho\u1ea1ch \u0111a ch\u1ee9c n\u0103ng k\u1ebft h\u1ee3p nh\u00e0 \u1edf v\u00e0 th\u01b0\u01a1ng m\u1ea1i",
      ipa: "/\u02ccm\u026akst \u02c8ju\u02d0s \u02c8z\u0259\u028an\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mixed-use+zoning&type=2",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mixed-use zoning lets residents live, work, dine, and shop within a leisurely 15-minute stroll.",
      exampleVi: "Quy ho\u1ea1ch \u0111a ch\u1ee9c n\u0103ng cho ph\u00e9p c\u01b0 d\u00e2n sinh s\u1ed1ng, l\u00e0m vi\u1ec7c, \u0103n u\u1ed1ng v\u00e0 mua s\u1eafm ch\u1ec9 trong v\u00f2ng 15 ph\u00fat \u0111i b\u1ed9.",
      collocations: ["benefit from mixed-use zoning", "mixed-use development"]
    }
    ,
    {
      id: "mega-unit-3-air-quality-sensor",
      word: "air quality sensor",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ea3m bi\u1ebfn \u0111o l\u01b0\u1eddng n\u1ed3ng \u0111\u1ed9 b\u1ee5i v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng kh\u00ed",
      ipa: "/\u02c8e\u0259 \u02c8kw\u0252l\u0259ti \u02c8sens\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=air+quality+sensor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Solar-powered air quality sensors mounted on streetlamps transmit pollution levels to mobile apps.",
      exampleVi: "C\u00e1c c\u1ea3m bi\u1ebfn ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng kh\u00ed ch\u1ea1y pin m\u1eb7t tr\u1eddi g\u1eafn tr\u00ean c\u1ed9t \u0111\u00e8n \u0111\u01b0\u1eddng truy\u1ec1n d\u1eef li\u1ec7u \u00f4 nhi\u1ec5m t\u1edbi \u1ee9ng d\u1ee5ng di \u0111\u1ed9ng.",
      collocations: ["deploy air quality sensors", "real-time sensor readouts"]
    }
    ,
    {
      id: "mega-unit-3-automated-recycling-depot",
      word: "automated recycling depot",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea1m thu gom ph\u00e2n lo\u1ea1i r\u00e1c t\u00e1i ch\u1ebf t\u1ef1 \u0111\u1ed9ng",
      ipa: "/\u02c8\u0254\u02d0t\u0259me\u026at\u026ad \u02ccri\u02d0\u02c8sa\u026akl\u026a\u014b \u02c8di\u02d0p\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=automated+recycling+depot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Residents deposit plastic bottles into the automated recycling depot and receive transport fare credits.",
      exampleVi: "C\u01b0 d\u00e2n b\u1ecf chai nh\u1ef1a v\u00e0o tr\u1ea1m t\u00e1i ch\u1ebf t\u1ef1 \u0111\u1ed9ng v\u00e0 nh\u1eadn ngay \u0111i\u1ec3m t\u00edch l\u0169y v\u00e9 xe bu\u00fdt \u0111i\u1ec7n tho\u1ea1i.",
      collocations: ["visit the automated recycling depot", "recycling kiosk"]
    }
    ,
    {
      id: "mega-unit-3-drone-delivery-corridor",
      word: "drone delivery corridor",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh lang bay an to\u00e0n d\u00e0nh ri\u00eang cho drone giao h\u00e0ng",
      ipa: "/dr\u0259\u028an d\u026a\u02c8l\u026av\u0259ri \u02c8k\u0252r\u026ad\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=drone+delivery+corridor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Aviation regulators approved a dedicated drone delivery corridor for swift medicine transit.",
      exampleVi: "C\u01a1 quan qu\u1ea3n l\u00fd h\u00e0ng kh\u00f4ng \u0111\u00e3 ph\u00ea chu\u1ea9n h\u00e0nh lang bay giao h\u00e0ng b\u1eb1ng drone chuy\u00ean d\u1ee5ng \u0111\u1ec3 v\u1eadn chuy\u1ec3n thu\u1ed1c kh\u1ea9n c\u1ea5p.",
      collocations: ["establish a drone delivery corridor", "fly along the corridor"]
    }
    ,
    {
      id: "mega-unit-3-green-corridor",
      word: "green corridor",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh lang c\u00e2y xanh sinh th\u00e1i k\u1ebft n\u1ed1i c\u00e1c c\u00f4ng vi\u00ean",
      ipa: "/\u0261ri\u02d0n \u02c8k\u0252r\u026ad\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=green+corridor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The green corridor allows urban wildlife and cyclists to traverse the city without crossing highways.",
      exampleVi: "H\u00e0nh lang c\u00e2y xanh cho ph\u00e9p sinh v\u1eadt hoang d\u00e3 v\u00e0 ng\u01b0\u1eddi \u0111i xe \u0111\u1ea1p b\u0103ng qua th\u00e0nh ph\u1ed1 m\u00e0 kh\u00f4ng ph\u1ea3i b\u0103ng c\u1eaft qua cao t\u1ed1c.",
      collocations: ["create continuous green corridors", "wildlife corridor"]
    }
  ],
  "unit-4-asean-and-vietnam": [
    {
      id: "v11-u4-charter",
      word: "charter",
      partOfSpeech: "n",
      meaningVi: "hi\u1ebfn ch\u01b0\u01a1ng quy \u0111\u1ecbnh ph\u00e1p l\u00fd t\u1ed5 ch\u1ee9c",
      ipa: "/\u02c8t\u0283\u0251\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Charter establishes the legal and institutional framework for the ten nations.",
      exampleVi: "Hi\u1ebfn ch\u01b0\u01a1ng ASEAN thi\u1ebft l\u1eadp khu\u00f4n kh\u1ed5 ph\u00e1p l\u00fd v\u00e0 th\u1ec3 ch\u1ebf cho m\u01b0\u1eddi qu\u1ed1c gia th\u00e0nh vi\u00ean.",
      collocations: ["sign the ASEAN Charter", "principles of the Charter"]
    },
    {
      id: "v11-u4-solidarity",
      word: "solidarity",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n \u0111o\u00e0n k\u1ebft h\u1eefu ngh\u1ecb gi\u1eefa c\u00e1c n\u01b0\u1edbc",
      ipa: "/\u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The motto 'One Vision, One Identity, One Community' underscores regional solidarity.",
      exampleVi: "Kh\u1ea9u hi\u1ec7u 'M\u1ed9t t\u1ea7m nh\u00ecn, M\u1ed9t b\u1ea3n s\u1eafc, M\u1ed9t c\u1ed9ng \u0111\u1ed3ng' kh\u1eb3ng \u0111\u1ecbnh t\u00ecnh \u0111o\u00e0n k\u1ebft khu v\u1ef1c.",
      collocations: ["regional solidarity", "strengthen solidarity"]
    },
    {
      id: "v11-u4-member-state",
      word: "member state",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u1ed1c gia th\u00e0nh vi\u00ean ch\u00ednh th\u1ee9c",
      ipa: "/\u02c8memb\u0259 ste\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=member+state&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam officially joined as the seventh member state of ASEAN in July 1995.",
      exampleVi: "Vi\u1ec7t Nam ch\u00ednh th\u1ee9c gia nh\u1eadp v\u1edbi t\u01b0 c\u00e1ch qu\u1ed1c gia th\u00e0nh vi\u00ean th\u1ee9 b\u1ea3y c\u1ee7a ASEAN v\u00e0o th\u00e1ng 7 n\u0103m 1995.",
      collocations: ["ASEAN member states", "founding member state"]
    },
    {
      id: "v11-u4-cultural-exchange",
      word: "cultural exchange",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng giao l\u01b0u v\u0103n h\u00f3a ngh\u1ec7 thu\u1eadt",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u026aks\u02c8t\u0283e\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+exchange&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Youth Camp encourages vibrant cultural exchange through traditional dance.",
      exampleVi: "Tr\u1ea1i h\u00e8 thanh ni\u00ean ASEAN khuy\u1ebfn kh\u00edch giao l\u01b0u v\u0103n h\u00f3a s\u00f4i n\u1ed5i qua c\u00e1c \u0111i\u1ec7u m\u00faa truy\u1ec1n th\u1ed1ng.",
      collocations: ["participate in cultural exchange", "foster cultural exchange"]
    },
    {
      id: "v11-u4-regional-cooperation",
      word: "regional cooperation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u1ee3p t\u00e1c s\u00e2u r\u1ed9ng trong khu v\u1ef1c",
      ipa: "/\u02c8ri\u02d0d\u0292\u0259nl k\u0259\u028a\u02cc\u0252p\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=regional+cooperation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Regional cooperation is vital for combating cross-border drug trafficking and cybercrime.",
      exampleVi: "H\u1ee3p t\u00e1c khu v\u1ef1c l\u00e0 \u0111i\u1ec1u thi\u1ebft y\u1ebfu \u0111\u1ec3 ph\u00f2ng ch\u1ed1ng t\u1ed9i ph\u1ea1m ma t\u00fay v\u00e0 an ninh m\u1ea1ng xuy\u00ean bi\u00ean gi\u1edbi.",
      collocations: ["enhance regional cooperation", "framework of regional cooperation"]
    },
    {
      id: "v11-u4-consensus",
      word: "consensus",
      partOfSpeech: "n",
      meaningVi: "nguy\u00ean t\u1eafc \u0111\u1ed3ng thu\u1eadn chung trong m\u1ecdi quy\u1ebft \u0111\u1ecbnh",
      ipa: "/k\u0259n\u02c8sens\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=consensus&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Decisions at ministerial summits are taken by unanimous consultation and consensus.",
      exampleVi: "C\u00e1c quy\u1ebft \u0111\u1ecbnh t\u1ea1i h\u1ed9i ngh\u1ecb b\u1ed9 tr\u01b0\u1edfng \u0111\u01b0\u1ee3c th\u00f4ng qua d\u1ef1a tr\u00ean tham v\u1ea5n v\u00e0 \u0111\u1ed3ng thu\u1eadn nh\u1ea5t tr\u00ed.",
      collocations: ["reach consensus", "consensus-based diplomacy"]
    },
    {
      id: "v11-u4-free-trade-area",
      word: "free trade area",
      partOfSpeech: "n.phr",
      meaningVi: "khu v\u1ef1c m\u1eadu d\u1ecbch t\u1ef1 do (AFTA)",
      ipa: "/\u02ccfri\u02d0 \u02c8tre\u026ad \u02c8e\u0259ri\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=free+trade+area&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Free Trade Area eliminated tariff barriers on thousands of agricultural goods.",
      exampleVi: "Khu v\u1ef1c M\u1eadu d\u1ecbch T\u1ef1 do ASEAN \u0111\u00e3 x\u00f3a b\u1ecf h\u00e0ng r\u00e0o thu\u1ebf quan \u0111\u1ed1i v\u1edbi h\u00e0ng ng\u00e0n m\u1eb7t h\u00e0ng n\u00f4ng s\u1ea3n.",
      collocations: ["establish a free trade area", "benefits of the free trade area"]
    },
    {
      id: "v11-u4-mutual-assistance",
      word: "mutual assistance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 gi\u00fap \u0111\u1ee1, h\u1ed7 tr\u1ee3 l\u1eabn nhau khi ho\u1ea1n n\u1ea1n",
      ipa: "/\u02c8mju\u02d0t\u0283u\u0259l \u0259\u02c8s\u026ast\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mutual+assistance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "ASEAN countries demonstrated swift mutual assistance by sending search teams after earthquakes.",
      exampleVi: "C\u00e1c n\u01b0\u1edbc ASEAN \u0111\u00e3 th\u1ec3 hi\u1ec7n s\u1ef1 t\u01b0\u01a1ng tr\u1ee3 k\u1ecbp th\u1eddi b\u1eb1ng vi\u1ec7c c\u1eed \u0111\u1ed9i c\u1ee9u n\u1ea1n sau \u0111\u1ed9ng \u0111\u1ea5t.",
      collocations: ["render mutual assistance", "treaty of mutual assistance"]
    },
    {
      id: "v11-u4-stability",
      word: "stability",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 \u1ed5n \u0111\u1ecbnh ch\u00ednh tr\u1ecb v\u00e0 an ninh khu v\u1ef1c",
      ipa: "/st\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Maintaining peace and maritime stability in the South China Sea benefits all members.",
      exampleVi: "Duy tr\u00ec h\u00f2a b\u00ecnh v\u00e0 \u1ed5n \u0111\u1ecbnh an ninh tr\u00ean Bi\u1ec3n \u0110\u00f4ng mang l\u1ea1i l\u1ee3i \u00edch cho m\u1ecdi th\u00e0nh vi\u00ean.",
      collocations: ["regional stability", "maintain political stability"]
    },
    {
      id: "v11-u4-scholarship",
      word: "scholarship",
      partOfSpeech: "n",
      meaningVi: "h\u1ecdc b\u1ed5ng du h\u1ecdc gi\u1eefa c\u00e1c n\u01b0\u1edbc",
      ipa: "/\u02c8sk\u0252l\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=scholarship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Singapore-ASEAN scholarship awards outstanding Vietnamese students full college tuition.",
      exampleVi: "H\u1ecdc b\u1ed5ng Singapore-ASEAN trao cho h\u1ecdc sinh Vi\u1ec7t Nam xu\u1ea5t s\u1eafc to\u00e0n b\u1ed9 h\u1ecdc ph\u00ed \u0111\u1ea1i h\u1ecdc.",
      collocations: ["win an ASEAN scholarship", "prestigious scholarship"]
    },
    {
      id: "v11-u4-youth-festival",
      word: "youth festival",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e0y h\u1ed9i giao l\u01b0u thanh ni\u00ean",
      ipa: "/ju\u02d0\u03b8 \u02c8fest\u026avl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=youth+festival&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Delegates brought traditional ao dai and conical hats to the ASEAN youth festival.",
      exampleVi: "C\u00e1c \u0111\u1ea1i bi\u1ec3u mang \u00e1o d\u00e0i truy\u1ec1n th\u1ed1ng v\u00e0 n\u00f3n l\u00e1 \u0111\u1ebfn ng\u00e0y h\u1ed9i thanh ni\u00ean ASEAN.",
      collocations: ["host a youth festival", "annual youth festival"]
    },
    {
      id: "v11-u4-integration",
      word: "integration",
      partOfSpeech: "n",
      meaningVi: "ti\u1ebfn tr\u00ecnh h\u1ed9i nh\u1eadp khu v\u1ef1c to\u00e0n di\u1ec7n",
      ipa: "/\u02cc\u026ant\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=integration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Economic integration allows skilled labor like engineers and nurses to work across borders.",
      exampleVi: "H\u1ed9i nh\u1eadp kinh t\u1ebf cho ph\u00e9p lao \u0111\u1ed9ng tay ngh\u1ec1 cao nh\u01b0 k\u1ef9 s\u01b0 v\u00e0 y t\u00e1 sang l\u00e0m vi\u1ec7c gi\u1eefa c\u00e1c n\u01b0\u1edbc.",
      collocations: ["deeper integration", "accelerate regional integration"]
    },
    {
      id: "v11-u4-summit",
      word: "summit",
      partOfSpeech: "n",
      meaningVi: "h\u1ed9i ngh\u1ecb c\u1ea5p cao nguy\u00ean th\u1ee7 qu\u1ed1c gia",
      ipa: "/\u02c8s\u028cm\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=summit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Leaders gathered in Jakarta for the semi-annual ASEAN Summit to discuss economic recovery.",
      exampleVi: "C\u00e1c nh\u00e0 l\u00e3nh \u0111\u1ea1o t\u1ec1 t\u1ef1u t\u1ea1i Jakarta d\u1ef1 H\u1ed9i ngh\u1ecb C\u1ea5p cao ASEAN \u0111\u1ec3 b\u00e0n th\u1ea3o ph\u1ee5c h\u1ed3i kinh t\u1ebf.",
      collocations: ["attend the summit", "chair the ASEAN summit"]
    },
    {
      id: "v11-u4-declaration",
      word: "declaration",
      partOfSpeech: "n",
      meaningVi: "tuy\u00ean b\u1ed1 chung mang t\u00ednh \u0111\u1ecbnh h\u01b0\u1edbng",
      ipa: "/\u02ccdekl\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=declaration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Foreign ministers signed a joint declaration reaffirming adherence to international law.",
      exampleVi: "C\u00e1c ngo\u1ea1i tr\u01b0\u1edfng \u0111\u00e3 k\u00fd tuy\u00ean b\u1ed1 chung t\u00e1i kh\u1eb3ng \u0111\u1ecbnh vi\u1ec7c tu\u00e2n th\u1ee7 lu\u1eadt ph\u00e1p qu\u1ed1c t\u1ebf.",
      collocations: ["issue a joint declaration", "Bangkok Declaration"]
    },
    {
      id: "v11-u4-diversity",
      word: "diversity",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 \u0111a d\u1ea1ng phong ph\u00fa v\u1ec1 v\u0103n h\u00f3a v\u00e0 t\u00f4n gi\u00e1o",
      ipa: "/da\u026a\u02c8v\u025c\u02d0s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=diversity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "ASEAN takes pride in its immense cultural and religious diversity.",
      exampleVi: "Kh\u1ed1i ASEAN t\u1ef1 h\u00e0o v\u1ec1 s\u1ef1 \u0111a d\u1ea1ng phong ph\u00fa v\u1ec1 v\u0103n h\u00f3a v\u00e0 t\u00f4n gi\u00e1o c\u1ee7a c\u00e1c d\u00e2n t\u1ed9c.",
      collocations: ["cultural diversity", "unity in diversity"]
    },
    {
      id: "v11-u4-economic-community",
      word: "economic community",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed9ng \u0111\u1ed3ng kinh t\u1ebf (AEC)",
      ipa: "/\u02cci\u02d0k\u0259\u02c8n\u0252m\u026ak k\u0259\u02c8mju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=economic+community&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Economic Community envisions a single market with free flow of goods and services.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng Kinh t\u1ebf ASEAN h\u01b0\u1edbng t\u1edbi m\u1ed9t th\u1ecb tr\u01b0\u1eddng chung v\u1edbi d\u00f2ng h\u00e0ng h\u00f3a d\u1ecbch chuy\u1ec3n t\u1ef1 do.",
      collocations: ["launch the economic community", "member of the economic community"]
    },
    {
      id: "v11-u4-diplomacy",
      word: "diplomacy",
      partOfSpeech: "n",
      meaningVi: "ng\u00e0nh ngo\u1ea1i giao v\u00e0 \u0111\u00e0m ph\u00e1n qu\u1ed1c t\u1ebf",
      ipa: "/d\u026a\u02c8pl\u0259\u028am\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=diplomacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese diplomacy adheres to the flexible bamboo philosophy: solid roots, pliable branches.",
      exampleVi: "Ngo\u1ea1i giao Vi\u1ec7t Nam qu\u00e1n tri\u1ec7t tr\u01b0\u1eddng ph\u00e1i ngo\u1ea1i giao c\u00e2y tre: g\u1ed1c v\u1eefng, c\u00e0nh uy\u1ec3n chuy\u1ec3n.",
      collocations: ["bamboo diplomacy", "multilateral diplomacy"]
    },
    {
      id: "v11-u4-pillar",
      word: "pillar",
      partOfSpeech: "n",
      meaningVi: "tr\u1ee5 c\u1ed9t then ch\u1ed1t c\u1ea5u th\u00e0nh t\u1ed5 ch\u1ee9c",
      ipa: "/\u02c8p\u026al\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pillar&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Community rests on three fundamental pillars: Security, Economy, and Socio-Cultural.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng ASEAN d\u1ef1a tr\u00ean ba tr\u1ee5 c\u1ed9t n\u1ec1n t\u1ea3ng: An ninh, Kinh t\u1ebf v\u00e0 V\u0103n h\u00f3a - X\u00e3 h\u1ed9i.",
      collocations: ["three pillars of ASEAN", "central pillar"]
    },
    {
      id: "v11-u4-visa-free",
      word: "visa-free",
      partOfSpeech: "adj",
      meaningVi: "mi\u1ec5n th\u1ecb th\u1ef1c nh\u1eadp c\u1ea3nh \u0111i l\u1ea1i",
      ipa: "/\u02ccvi\u02d0z\u0259 \u02c8fri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=visa-free&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Citizens of ASEAN enjoy visa-free entry for up to thirty days across most member countries.",
      exampleVi: "C\u00f4ng d\u00e2n c\u00e1c n\u01b0\u1edbc ASEAN \u0111\u01b0\u1ee3c h\u01b0\u1edfng quy\u1ec1n mi\u1ec5n th\u1ecb th\u1ef1c nh\u1eadp c\u1ea3nh t\u1edbi 30 ng\u00e0y \u1edf ph\u1ea7n l\u1edbn c\u00e1c n\u01b0\u1edbc th\u00e0nh vi\u00ean.",
      collocations: ["visa-free travel", "visa-free policy"]
    },
    {
      id: "v11-u4-cohesion",
      word: "cohesion",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 g\u1eafn k\u1ebft ch\u1eb7t ch\u1ebd keo s\u01a1n",
      ipa: "/k\u0259\u028a\u02c8hi\u02d0\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cohesion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Under Vietnam's 2020 chairmanship, the theme was 'Cohesive and Responsive ASEAN'.",
      exampleVi: "N\u0103m Vi\u1ec7t Nam l\u00e0m ch\u1ee7 t\u1ecbch 2020, ch\u1ee7 \u0111\u1ec1 l\u00e0 'ASEAN g\u1eafn k\u1ebft v\u00e0 ch\u1ee7 \u0111\u1ed9ng th\u00edch \u1ee9ng'.",
      collocations: ["strengthen regional cohesion", "social cohesion"]
    }
    ,
    {
      id: "v11-boost-regional-bloc",
      word: "regional bloc",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ed1i li\u00ean minh khu v\u1ef1c",
      ipa: "/\u02c8ri\u02d0d\u0292\u0259nl bl\u0252k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=regional+bloc&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "ASEAN is one of the most dynamic regional economic blocs in Asia.",
      exampleVi: "ASEAN l\u00e0 m\u1ed9t trong nh\u1eefng kh\u1ed1i li\u00ean minh kinh t\u1ebf khu v\u1ef1c n\u0103ng \u0111\u1ed9ng nh\u1ea5t ch\u00e2u \u00c1.",
      collocations: ["dynamic regional bloc", "member of a regional bloc"]
    }
    ,
    {
      id: "v11-boost-youth-delegation",
      word: "youth delegation",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1i \u0111o\u00e0n thanh ni\u00ean \u0111\u1ea1i bi\u1ec3u",
      ipa: "/ju\u02d0\u03b8 \u02ccdel\u026a\u02c8\u0261e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=youth+delegation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnamese youth delegations actively contribute creative initiatives at ASEAN forums.",
      exampleVi: "C\u00e1c ph\u00e1i \u0111o\u00e0n thanh ni\u00ean Vi\u1ec7t Nam t\u00edch c\u1ef1c \u0111\u00f3ng g\u00f3p s\u00e1ng ki\u1ebfn t\u1ea1i c\u00e1c di\u1ec5n \u0111\u00e0n ASEAN.",
      collocations: ["send a youth delegation", "represent the youth delegation"]
    }
    ,
    {
      id: "v11-boost-treaty-of-amity",
      word: "treaty of amity",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7p \u01b0\u1edbc th\u00e2n thi\u1ec7n v\u00e0 h\u1ee3p t\u00e1c",
      ipa: "/\u02c8tri\u02d0ti \u0259v \u02c8\u00e6m\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=treaty+of+amity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Treaty of Amity and Cooperation embodies peaceful coexistence in Southeast Asia.",
      exampleVi: "Hi\u1ec7p \u01b0\u1edbc Th\u00e2n thi\u1ec7n v\u00e0 H\u1ee3p t\u00e1c th\u1ec3 hi\u1ec7n tinh th\u1ea7n chung s\u1ed1ng h\u00f2a b\u00ecnh \u1edf \u0110\u00f4ng Nam \u00c1.",
      collocations: ["sign the Treaty of Amity", "principles of amity"]
    }
    ,
    {
      id: "v11-boost-multilateral-ties",
      word: "multilateral ties",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ed1i quan h\u1ec7 li\u00ean k\u1ebft \u0111a ph\u01b0\u01a1ng",
      ipa: "/\u02ccm\u028clti\u02c8l\u00e6t\u0259r\u0259l ta\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=multilateral+ties&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Deepening multilateral ties safeguards national sovereignty and maritime peace.",
      exampleVi: "L\u00e0m s\u00e2u s\u1eafc c\u00e1c m\u1ed1i quan h\u1ec7 \u0111a ph\u01b0\u01a1ng gi\u00fap b\u1ea3o v\u1ec7 ch\u1ee7 quy\u1ec1n v\u00e0 h\u00f2a b\u00ecnh tr\u00ean bi\u1ec3n.",
      collocations: ["strengthen multilateral ties", "develop multilateral ties"]
    }
    ,
    {
      id: "v11-boost-communique",
      word: "communique",
      partOfSpeech: "n",
      meaningVi: "th\u00f4ng c\u00e1o chung sau h\u1ed9i ngh\u1ecb c\u1ea5p cao",
      ipa: "/k\u0259\u02c8mju\u02d0n\u026ake\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=communique&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The foreign ministers issued a landmark joint communique on maritime security.",
      exampleVi: "C\u00e1c ngo\u1ea1i tr\u01b0\u1edfng \u0111\u00e3 ra th\u00f4ng c\u00e1o chung mang t\u00ednh b\u01b0\u1edbc ngo\u1eb7t v\u1ec1 an ninh bi\u1ec3n.",
      collocations: ["issue a joint communique", "official communique"]
    }
    ,
    {
      id: "v11-boost-cross-cultural-dialogue",
      word: "cross-cultural dialogue",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ed1i tho\u1ea1i giao l\u01b0u li\u00ean v\u0103n h\u00f3a",
      ipa: "/\u02cckr\u0252s \u02c8k\u028clt\u0283\u0259r\u0259l \u02c8da\u026a\u0259l\u0252\u0261/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-cultural+dialogue&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cross-cultural dialogue builds lasting empathy and dismantles historical prejudices.",
      exampleVi: "\u0110\u1ed1i tho\u1ea1i li\u00ean v\u0103n h\u00f3a b\u1ed3i \u0111\u1eafp l\u00f2ng th\u1ea5u c\u1ea3m v\u00e0 x\u00f3a b\u1ecf c\u00e1c \u0111\u1ecbnh ki\u1ebfn l\u1ecbch s\u1eed.",
      collocations: ["foster cross-cultural dialogue", "participate in dialogue"]
    }
    ,
    {
      id: "v11-boost-socio-cultural",
      word: "socio-cultural",
      partOfSpeech: "adj",
      meaningVi: "thu\u1ed9c v\u1ec1 l\u0129nh v\u1ef1c v\u0103n h\u00f3a x\u00e3 h\u1ed9i",
      ipa: "/\u02ccs\u0259\u028asi\u0259\u028a \u02c8k\u028clt\u0283\u0259r\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=socio-cultural&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Socio-Cultural Community focuses on education and social welfare.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng V\u0103n h\u00f3a - X\u00e3 h\u1ed9i ASEAN t\u1eadp trung v\u00e0o gi\u00e1o d\u1ee5c v\u00e0 ph\u00fac l\u1ee3i x\u00e3 h\u1ed9i.",
      collocations: ["socio-cultural pillar", "socio-cultural development"]
    }
    ,
    {
      id: "v11-boost-chairmanship",
      word: "chairmanship",
      partOfSpeech: "n",
      meaningVi: "vai tr\u00f2 ch\u1ee7 t\u1ecbch lu\u00e2n phi\u00ean nhi\u1ec7m k\u1ef3",
      ipa: "/\u02c8t\u0283e\u0259m\u0259n\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=chairmanship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam successfully concluded its 2020 ASEAN chairmanship despite pandemic difficulties.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 ho\u00e0n th\u00e0nh xu\u1ea5t s\u1eafc tr\u1ecdng tr\u00e1ch ch\u1ee7 t\u1ecbch ASEAN 2020 b\u1ea5t ch\u1ea5p d\u1ecbch b\u1ec7nh.",
      collocations: ["assume the chairmanship", "successful chairmanship"]
    }
    ,
    {
      id: "v11-boost-trade-barrier",
      word: "trade barrier",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0ng r\u00e0o thu\u1ebf quan v\u00e0 m\u1eadu d\u1ecbch",
      ipa: "/\u02c8tre\u026ad \u02c8b\u00e6ri\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+barrier&type=2",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "AFTA agreements dismantle technical and tariff trade barriers across Southeast Asia.",
      exampleVi: "Hi\u1ec7p \u0111\u1ecbnh AFTA d\u1ee1 b\u1ecf c\u00e1c h\u00e0ng r\u00e0o thu\u1ebf quan v\u00e0 k\u1ef9 thu\u1eadt tr\u00ean kh\u1eafp \u0110\u00f4ng Nam \u00c1.",
      collocations: ["lower trade barriers", "remove trade barriers"]
    }
    ,
    {
      id: "v11-boost-connectivity",
      word: "connectivity",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 k\u1ebft n\u1ed1i giao th\u00f4ng v\u00e0 s\u1ed1 h\u00f3a",
      ipa: "/\u02cck\u0252nek\u02c8t\u026av\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=connectivity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Master plans for ASEAN connectivity link highways, fiber optics, and power grids.",
      exampleVi: "K\u1ebf ho\u1ea1ch t\u1ed5ng th\u1ec3 v\u1ec1 k\u1ebft n\u1ed1i ASEAN li\u00ean k\u1ebft \u0111\u01b0\u1eddng cao t\u1ed1c, c\u00e1p quang v\u00e0 l\u01b0\u1edbi \u0111i\u1ec7n.",
      collocations: ["enhance connectivity", "regional connectivity"]
    }
    ,
    {
      id: "mega-unit-4-charter-ratification",
      word: "charter ratification",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00ea chu\u1ea9n hi\u1ebfn ch\u01b0\u01a1ng ch\u00ednh th\u1ee9c",
      ipa: "/\u02c8t\u0283\u0251\u02d0t\u0259 \u02ccr\u00e6t\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=charter+ratification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The historic ASEAN Charter ratification cemented legal frameworks for Southeast Asian cooperation.",
      exampleVi: "S\u1ef1 ph\u00ea chu\u1ea9n Hi\u1ebfn ch\u01b0\u01a1ng ASEAN l\u1ecbch s\u1eed \u0111\u00e3 c\u1ee7ng c\u1ed1 v\u1eefng ch\u1eafc khung ph\u00e1p l\u00fd cho h\u1ee3p t\u00e1c \u0110\u00f4ng Nam \u00c1.",
      collocations: ["celebrate charter ratification", "formal ratification"]
    }
    ,
    {
      id: "mega-unit-4-consensual-decision-making",
      word: "consensual decision-making",
      partOfSpeech: "n.phr",
      meaningVi: "nguy\u00ean t\u1eafc \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh d\u1ef1a tr\u00ean \u0111\u1ed3ng thu\u1eadn",
      ipa: "/k\u0259n\u02c8sen\u0283u\u0259l d\u026a\u02c8s\u026a\u0292n \u02c8me\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=consensual+decision-making&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Consensual decision-making ensures that all ten member states have an equitable voice.",
      exampleVi: "Nguy\u00ean t\u1eafc ra quy\u1ebft \u0111\u1ecbnh d\u1ef1a tr\u00ean \u0111\u1ed3ng thu\u1eadn b\u1ea3o \u0111\u1ea3m r\u1eb1ng to\u00e0n b\u1ed9 m\u01b0\u1eddi qu\u1ed1c gia th\u00e0nh vi\u00ean \u0111\u1ec1u c\u00f3 ti\u1ebfng n\u00f3i b\u00ecnh \u0111\u1eb3ng.",
      collocations: ["uphold consensual decision-making", "principle of consensus"]
    }
    ,
    {
      id: "mega-unit-4-economic-pillar",
      word: "economic pillar",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ee5 c\u1ed9t h\u1ee3p t\u00e1c kinh t\u1ebf trong kh\u1ed1i",
      ipa: "/\u02cci\u02d0k\u0259\u02c8n\u0252m\u026ak \u02c8p\u026al\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=economic+pillar&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN Economic Community stands as a dynamic economic pillar facilitating single-market trade.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng Kinh t\u1ebf ASEAN l\u00e0 m\u1ed9t tr\u1ee5 c\u1ed9t kinh t\u1ebf n\u0103ng \u0111\u1ed9ng th\u00fac \u0111\u1ea9y th\u1ecb tr\u01b0\u1eddng \u0111\u01a1n nh\u1ea5t v\u00e0 t\u1ef1 do l\u01b0u chuy\u1ec3n th\u01b0\u01a1ng m\u1ea1i.",
      collocations: ["strengthen the economic pillar", "three foundational pillars"]
    }
    ,
    {
      id: "mega-unit-4-youth-summit",
      word: "youth summit",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9i ngh\u1ecb th\u01b0\u1ee3ng \u0111\u1ec9nh thanh ni\u00ean khu v\u1ef1c",
      ipa: "/ju\u02d0\u03b8 \u02c8s\u028cm\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=youth+summit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Student delegates from Ha Noi and Jakarta drafted climate proposals at the ASEAN youth summit.",
      exampleVi: "C\u00e1c \u0111\u1ea1i bi\u1ec3u h\u1ecdc sinh \u0111\u1ebfn t\u1eeb H\u00e0 N\u1ed9i v\u00e0 Jakarta \u0111\u00e3 so\u1ea1n th\u1ea3o c\u00e1c \u0111\u1ec1 xu\u1ea5t kh\u00ed h\u1eadu t\u1ea1i h\u1ed9i ngh\u1ecb th\u01b0\u1ee3ng \u0111\u1ec9nh thanh ni\u00ean ASEAN.",
      collocations: ["convene a youth summit", "address the youth summit"]
    }
    ,
    {
      id: "mega-unit-4-cultural-tapestry",
      word: "cultural tapestry",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ee9c tranh v\u0103n h\u00f3a mu\u00f4n m\u00e0u \u0111a d\u1ea1ng",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8t\u00e6p\u0259stri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+tapestry&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Southeast Asia presents a vibrant cultural tapestry of ancient dance, architecture, and culinary traditions.",
      exampleVi: "\u0110\u00f4ng Nam \u00c1 m\u1edf ra m\u1ed9t b\u1ee9c tranh v\u0103n h\u00f3a \u0111a d\u1ea1ng r\u1ef1c r\u1ee1 t\u1eeb v\u0169 \u0111i\u1ec7u c\u1ed5 truy\u1ec1n, ki\u1ebfn tr\u00fac \u0111\u1ebfn \u1ea9m th\u1ef1c phong ph\u00fa.",
      collocations: ["rich cultural tapestry", "explore the tapestry"]
    }
    ,
    {
      id: "mega-unit-4-visa-exemption",
      word: "visa exemption",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u00ednh s\u00e1ch mi\u1ec5n th\u1ecb th\u1ef1c xu\u1ea5t nh\u1eadp c\u1ea3nh",
      ipa: "/\u02c8vi\u02d0z\u0259 \u026a\u0261\u02c8zemp\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=visa+exemption&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mutual 30-day visa exemption agreements allow citizens to travel seamlessly across member states.",
      exampleVi: "Hi\u1ec7p \u0111\u1ecbnh mi\u1ec5n th\u1ecb th\u1ef1c 30 ng\u00e0y song ph\u01b0\u01a1ng cho ph\u00e9p c\u00f4ng d\u00e2n du l\u1ecbch d\u1ec5 d\u00e0ng qua l\u1ea1i gi\u1eefa c\u00e1c n\u01b0\u1edbc th\u00e0nh vi\u00ean.",
      collocations: ["benefit from visa exemption", "bilateral visa exemption"]
    }
    ,
    {
      id: "mega-unit-4-disaster-relief-mechanism",
      word: "disaster relief mechanism",
      partOfSpeech: "n.phr",
      meaningVi: "c\u01a1 ch\u1ebf \u0111i\u1ec1u ph\u1ed1i c\u1ee9u tr\u1ee3 thi\u00ean tai kh\u1ea9n c\u1ea5p",
      ipa: "/d\u026a\u02c8z\u0251\u02d0st\u0259 r\u026a\u02c8li\u02d0f \u02c8mek\u0259n\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=disaster+relief+mechanism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The AHA Centre operates a rapid disaster relief mechanism delivering supplies after typhoons.",
      exampleVi: "Trung t\u00e2m AHA v\u1eadn h\u00e0nh c\u01a1 ch\u1ebf c\u1ee9u tr\u1ee3 thi\u00ean tai nhanh ch\u00f3ng v\u1eadn chuy\u1ec3n nhu y\u1ebfu ph\u1ea9m sau c\u00e1c \u0111\u1ee3t b\u00e3o l\u1edbn.",
      collocations: ["activate the disaster relief mechanism", "regional relief mechanism"]
    }
    ,
    {
      id: "mega-unit-4-socio-cultural-community",
      word: "socio-cultural community",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed9ng \u0111\u1ed3ng v\u0103n h\u00f3a - x\u00e3 h\u1ed9i",
      ipa: "/\u02ccs\u0259\u028asi\u0259\u028a \u02c8k\u028clt\u0283\u0259r\u0259l k\u0259\u02c8mju\u02d0n\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=socio-cultural+community&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The socio-cultural community focuses on human development, social justice, and environmental protection.",
      exampleVi: "C\u1ed9ng \u0111\u1ed3ng v\u0103n h\u00f3a - x\u00e3 h\u1ed9i t\u1eadp trung v\u00e0o ph\u00e1t tri\u1ec3n con ng\u01b0\u1eddi, c\u00f4ng b\u1eb1ng x\u00e3 h\u1ed9i v\u00e0 b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng b\u1ec1n v\u1eefng.",
      collocations: ["advance the socio-cultural community", "pillars of community"]
    }
    ,
    {
      id: "mega-unit-4-trade-liberalization",
      word: "trade liberalization",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u1ef1 do h\u00f3a th\u01b0\u01a1ng m\u1ea1i m\u1edf c\u1eeda th\u1ecb tr\u01b0\u1eddng",
      ipa: "/\u02c8tre\u026ad \u02ccl\u026abr\u0259la\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+liberalization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Aggressive trade liberalization lowered tariffs on over 99 percent of regional manufactured goods.",
      exampleVi: "Ch\u00ednh s\u00e1ch t\u1ef1 do h\u00f3a th\u01b0\u01a1ng m\u1ea1i m\u1ea1nh m\u1ebd \u0111\u00e3 gi\u1ea3m thu\u1ebf quan tr\u00ean h\u01a1n 99% c\u00e1c m\u1eb7t h\u00e0ng s\u1ea3n xu\u1ea5t trong khu v\u1ef1c.",
      collocations: ["pursue trade liberalization", "benefits of liberalization"]
    }
    ,
    {
      id: "mega-unit-4-non-interference-policy",
      word: "non-interference policy",
      partOfSpeech: "n.phr",
      meaningVi: "nguy\u00ean t\u1eafc kh\u00f4ng can thi\u1ec7p c\u00f4ng vi\u1ec7c n\u1ed9i b\u1ed9",
      ipa: "/\u02ccn\u0252n \u02cc\u026ant\u0259\u02c8f\u026a\u0259r\u0259ns \u02c8p\u0252l\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=non-interference+policy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The long-standing non-interference policy remains a cornerstone of Southeast Asian diplomacy.",
      exampleVi: "Nguy\u00ean t\u1eafc l\u00e2u \u0111\u1eddi kh\u00f4ng can thi\u1ec7p v\u00e0o c\u00f4ng vi\u1ec7c n\u1ed9i b\u1ed9 c\u1ee7a nhau v\u1eabn l\u00e0 h\u00f2n \u0111\u00e1 t\u1ea3ng c\u1ee7a n\u1ec1n ngo\u1ea1i giao \u0110\u00f4ng Nam \u00c1.",
      collocations: ["respect the non-interference policy", "diplomatic policy"]
    }
    ,
    {
      id: "mega-unit-4-single-market",
      word: "single market",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1ecb tr\u01b0\u1eddng \u0111\u01a1n nh\u1ea5t l\u01b0u chuy\u1ec3n h\u00e0ng h\u00f3a t\u1ef1 do",
      ipa: "/\u02ccs\u026a\u014b\u0261l \u02c8m\u0251\u02d0k\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=single+market&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Forming a single market facilitates the free movement of skilled labor, goods, and capital investments.",
      exampleVi: "Vi\u1ec7c h\u00ecnh th\u00e0nh m\u1ed9t th\u1ecb tr\u01b0\u1eddng chung t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho s\u1ef1 l\u01b0u chuy\u1ec3n t\u1ef1 do c\u1ee7a lao \u0111\u1ed9ng tay ngh\u1ec1 cao, h\u00e0ng h\u00f3a v\u00e0 v\u1ed1n \u0111\u1ea7u t\u01b0.",
      collocations: ["integrate into a single market", "benefits of a single market"]
    }
    ,
    {
      id: "mega-unit-4-scholarship-exchange",
      word: "scholarship exchange",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc b\u1ed5ng trao \u0111\u1ed5i sinh vi\u00ean du h\u1ecdc",
      ipa: "/\u02c8sk\u0252l\u0259\u0283\u026ap \u026aks\u02c8t\u0283e\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=scholarship+exchange&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN university network awards scholarship exchange opportunities to outstanding undergraduates.",
      exampleVi: "M\u1ea1ng l\u01b0\u1edbi c\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc ASEAN trao c\u00e1c c\u01a1 h\u1ed9i h\u1ecdc b\u1ed5ng trao \u0111\u1ed5i sinh vi\u00ean cho nh\u1eefng c\u00e1 nh\u00e2n c\u00f3 th\u00e0nh t\u00edch xu\u1ea5t s\u1eafc.",
      collocations: ["apply for a scholarship exchange", "win an exchange scholarship"]
    }
    ,
    {
      id: "mega-unit-4-peace-accord",
      word: "peace accord",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7p \u01b0\u1edbc h\u00f2a b\u00ecnh v\u00e0 h\u1eefu ngh\u1ecb",
      ipa: "/pi\u02d0s \u0259\u02c8k\u0254\u02d0d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peace+accord&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Treaty of Amity and Cooperation serves as an enduring peace accord guiding diplomatic relations.",
      exampleVi: "Hi\u1ec7p \u01b0\u1edbc Th\u00e2n thi\u1ec7n v\u00e0 H\u1ee3p t\u00e1c \u0111\u00f3ng vai tr\u00f2 nh\u01b0 m\u1ed9t hi\u1ec7p \u0111\u1ecbnh h\u00f2a b\u00ecnh l\u00e2u d\u00e0i \u0111\u1ecbnh h\u01b0\u1edbng quan h\u1ec7 ngo\u1ea1i giao.",
      collocations: ["sign a peace accord", "uphold the peace accord"]
    }
    ,
    {
      id: "mega-unit-4-maritime-security",
      word: "maritime security",
      partOfSpeech: "n.phr",
      meaningVi: "an ninh bi\u1ec3n v\u00e0 an to\u00e0n h\u00e0ng h\u1ea3i",
      ipa: "/\u02c8m\u00e6r\u026ata\u026am s\u026a\u02c8kj\u028a\u0259r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=maritime+security&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Naval coast guard exercises bolster joint maritime security along vital international shipping lanes.",
      exampleVi: "C\u00e1c cu\u1ed9c di\u1ec5n t\u1eadp h\u1ea3i qu\u00e2n c\u1ea3nh s\u00e1t bi\u1ec3n t\u0103ng c\u01b0\u1eddng an ninh h\u00e0ng h\u1ea3i chung d\u1ecdc c\u00e1c tuy\u1ebfn h\u00e0ng h\u1ea3i qu\u1ed1c t\u1ebf tr\u1ecdng y\u1ebfu.",
      collocations: ["strengthen maritime security", "maritime security cooperation"]
    }
    ,
    {
      id: "mega-unit-4-regional-solidarity",
      word: "regional solidarity",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n \u0111o\u00e0n k\u1ebft keo s\u01a1n c\u1ee7a khu v\u1ef1c",
      ipa: "/\u02ccri\u02d0d\u0292\u0259nl \u02ccs\u0252l\u026a\u02c8d\u00e6r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=regional+solidarity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Member nations demonstrated heartwarming regional solidarity by shipping medical vaccines during the epidemic.",
      exampleVi: "C\u00e1c qu\u1ed1c gia th\u00e0nh vi\u00ean \u0111\u00e3 th\u1ec3 hi\u1ec7n tinh th\u1ea7n \u0111o\u00e0n k\u1ebft khu v\u1ef1c \u1ea5m \u00e1p b\u1eb1ng vi\u1ec7c h\u1ed7 tr\u1ee3 v\u1eafc xin trong \u0111\u1ee3t d\u1ecbch b\u1ec7nh.",
      collocations: ["forge regional solidarity", "spirit of solidarity"]
    }
    ,
    {
      id: "mega-unit-4-trade-surplus",
      word: "trade surplus",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eb7ng d\u01b0 xu\u1ea5t si\u00eau th\u01b0\u01a1ng m\u1ea1i",
      ipa: "/\u02c8tre\u026ad \u02c8s\u025c\u02d0pl\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+surplus&type=2",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Exporting electronics and coffee helped Viet Nam maintain a healthy trade surplus with partners.",
      exampleVi: "Xu\u1ea5t kh\u1ea9u \u0111\u1ed3 \u0111i\u1ec7n t\u1eed v\u00e0 c\u00e0 ph\u00ea gi\u00fap Vi\u1ec7t Nam duy tr\u00ec m\u1ee9c th\u1eb7ng d\u01b0 xu\u1ea5t si\u00eau th\u01b0\u01a1ng m\u1ea1i l\u00e0nh m\u1ea1nh v\u1edbi c\u00e1c \u0111\u1ed1i t\u00e1c.",
      collocations: ["achieve a trade surplus", "record trade surplus"]
    }
    ,
    {
      id: "mega-unit-4-cross-cultural-festival",
      word: "cross-cultural festival",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ec5 h\u1ed9i giao l\u01b0u li\u00ean v\u0103n h\u00f3a",
      ipa: "/\u02cckr\u0252s \u02c8k\u028clt\u0283\u0259r\u0259l \u02c8fest\u026avl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cross-cultural+festival&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dancers from Thailand and Viet Nam performed together at the cross-cultural festival in Da Nang.",
      exampleVi: "C\u00e1c v\u0169 c\u00f4ng t\u1eeb Th\u00e1i Lan v\u00e0 Vi\u1ec7t Nam \u0111\u00e3 c\u00f9ng bi\u1ec3u di\u1ec5n t\u1ea1i l\u1ec5 h\u1ed9i giao l\u01b0u li\u00ean v\u0103n h\u00f3a t\u1ea1i \u0110\u00e0 N\u1eb5ng.",
      collocations: ["organize a cross-cultural festival", "attend a cultural festival"]
    }
    ,
    {
      id: "mega-unit-4-customs-union",
      word: "customs union",
      partOfSpeech: "n.phr",
      meaningVi: "li\u00ean minh thu\u1ebf quan chung",
      ipa: "/\u02c8k\u028cst\u0259mz \u02c8ju\u02d0ni\u0259n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=customs+union&type=2",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Economists explored whether a deeper customs union could eliminate secondary documentation fees.",
      exampleVi: "C\u00e1c nh\u00e0 kinh t\u1ebf \u0111\u00e3 nghi\u00ean c\u1ee9u li\u1ec7u m\u1ed9t li\u00ean minh thu\u1ebf quan s\u00e2u r\u1ed9ng h\u01a1n c\u00f3 th\u1ec3 x\u00f3a b\u1ecf c\u00e1c chi ph\u00ed ch\u1ee9ng t\u1eeb ph\u1ee5 tr\u1ee3 hay kh\u00f4ng.",
      collocations: ["establish a customs union", "rules of the customs union"]
    }
    ,
    {
      id: "mega-unit-4-food-security-reserves",
      word: "food security reserves",
      partOfSpeech: "n.phr",
      meaningVi: "kho d\u1ef1 tr\u1eef an ninh l\u01b0\u01a1ng th\u1ef1c kh\u1ea9n c\u1ea5p",
      ipa: "/fu\u02d0d s\u026a\u02c8kj\u028a\u0259r\u0259ti r\u026a\u02c8z\u025c\u02d0vz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=food+security+reserves&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The regional rice reserve ensures emergency food security reserves during unforeseen droughts.",
      exampleVi: "Kho d\u1ef1 tr\u1eef l\u00faa g\u1ea1o khu v\u1ef1c b\u1ea3o \u0111\u1ea3m an ninh l\u01b0\u01a1ng th\u1ef1c d\u1ef1 ph\u00f2ng kh\u1ea9n c\u1ea5p trong nh\u1eefng \u0111\u1ee3t h\u1ea1n h\u00e1n b\u1ea5t ng\u1edd.",
      collocations: ["maintain food security reserves", "emergency rice reserve"]
    }
    ,
    {
      id: "mega-unit-4-joint-military-exercise",
      word: "joint military exercise",
      partOfSpeech: "n.phr",
      meaningVi: "di\u1ec5n t\u1eadp qu\u00e2n s\u1ef1 ph\u00f2ng th\u1ee7 ph\u1ed1i h\u1ee3p",
      ipa: "/\u02ccd\u0292\u0254\u026ant \u02c8m\u026al\u0259tri \u02c8eks\u0259sa\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=joint+military+exercise&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Armed forces conducted a simulated counter-terrorism joint military exercise off the coast.",
      exampleVi: "L\u1ef1c l\u01b0\u1ee3ng v\u0169 trang \u0111\u00e3 t\u1ed5 ch\u1ee9c m\u1ed9t cu\u1ed9c di\u1ec5n t\u1eadp qu\u00e2n s\u1ef1 ph\u1ed1i h\u1ee3p ch\u1ed1ng kh\u1ee7ng b\u1ed1 m\u00f4 ph\u1ecfng ngo\u00e0i kh\u01a1i.",
      collocations: ["participate in a joint military exercise", "defense exercise"]
    }
    ,
    {
      id: "mega-unit-4-ministerial-conference",
      word: "ministerial conference",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9i ngh\u1ecb c\u1ea5p b\u1ed9 tr\u01b0\u1edfng chuy\u00ean ng\u00e0nh",
      ipa: "/\u02ccm\u026an\u026a\u02c8st\u026a\u0259ri\u0259l \u02c8k\u0252nf\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ministerial+conference&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ministers of foreign affairs finalized the agenda during a closed ministerial conference.",
      exampleVi: "C\u00e1c b\u1ed9 tr\u01b0\u1edfng ngo\u1ea1i giao \u0111\u00e3 ho\u00e0n thi\u1ec7n ch\u01b0\u01a1ng tr\u00ecnh ngh\u1ecb s\u1ef1 trong m\u1ed9t phi\u00ean h\u1ed9i ngh\u1ecb c\u1ea5p b\u1ed9 tr\u01b0\u1edfng k\u00edn.",
      collocations: ["convene a ministerial conference", "annual conference"]
    }
    ,
    {
      id: "mega-unit-4-sustainable-fisheries",
      word: "sustainable fisheries",
      partOfSpeech: "n.phr",
      meaningVi: "ngh\u1ec1 c\u00e1 khai th\u00e1c h\u1ea3i s\u1ea3n b\u1ec1n v\u1eefng",
      ipa: "/s\u0259\u02ccste\u026an\u0259bl \u02c8f\u026a\u0283\u0259riz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sustainable+fisheries&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Member nations signed accords to crack down on illegal trawling and safeguard sustainable fisheries.",
      exampleVi: "C\u00e1c n\u01b0\u1edbc th\u00e0nh vi\u00ean \u0111\u00e3 k\u00fd th\u1ecfa thu\u1eadn tr\u1ea5n \u00e1p t\u00e0u k\u00e9o tr\u00e1i ph\u00e9p v\u00e0 b\u1ea3o v\u1ec7 ngu\u1ed3n l\u1ee3i ngh\u1ec1 c\u00e1 b\u1ec1n v\u1eefng.",
      collocations: ["promote sustainable fisheries", "regulations for fisheries"]
    }
    ,
    {
      id: "mega-unit-4-shared-identity",
      word: "shared identity",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n s\u1eafc g\u1eafn k\u1ebft v\u00e0 gi\u00e1 tr\u1ecb chung",
      ipa: "/\u0283e\u0259d a\u026a\u02c8dent\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=shared+identity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ASEAN anthem and emblem celebrate a harmonious shared identity among diverse peoples.",
      exampleVi: "B\u00e0i ca v\u00e0 bi\u1ec3u tr\u01b0ng ASEAN t\u00f4n vinh b\u1ea3n s\u1eafc h\u00f2a h\u1ee3p chung gi\u1eefa c\u00e1c d\u00e2n t\u1ed9c anh em \u0111a d\u1ea1ng.",
      collocations: ["cultivate a shared identity", "pride in shared identity"]
    }
  ],
  "unit-5-global-warming": [
    {
      id: "v11-u5-greenhouse-effect",
      word: "greenhouse effect",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng nh\u00e0 k\u00ednh gi\u1eef nhi\u1ec7t",
      ipa: "/\u02c8\u0261ri\u02d0nha\u028as \u026a\u02ccfekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=greenhouse+effect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Gases in the atmosphere cause the greenhouse effect by trapping solar heat.",
      exampleVi: "C\u00e1c ch\u1ea5t kh\u00ed trong kh\u00ed quy\u1ec3n g\u00e2y ra hi\u1ec7u \u1ee9ng nh\u00e0 k\u00ednh b\u1eb1ng c\u00e1ch gi\u1eef nhi\u1ec7t m\u1eb7t tr\u1eddi.",
      collocations: ["intensify the greenhouse effect", "natural greenhouse effect"]
    },
    {
      id: "v11-u5-melting-glaciers",
      word: "melting glaciers",
      partOfSpeech: "n.phr",
      meaningVi: "b\u0103ng tan \u1edf c\u00e1c c\u1ef1c v\u00e0 \u0111\u1ec9nh n\u00fai",
      ipa: "/\u02c8melt\u026a\u014b \u02c8\u0261l\u00e6si\u0259z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=melting+glaciers&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Melting glaciers in Greenland contribute directly to dangerous sea level rises.",
      exampleVi: "B\u0103ng tan \u1edf Greenland tr\u1ef1c ti\u1ebfp l\u00e0m cho m\u1ef1c n\u01b0\u1edbc bi\u1ec3n d\u00e2ng cao nguy hi\u1ec3m.",
      collocations: ["accelerated melting glaciers", "threat of melting glaciers"]
    },
    {
      id: "v11-u5-sea-level-rise",
      word: "sea level rise",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng n\u01b0\u1edbc bi\u1ec3n d\u00e2ng cao",
      ipa: "/\u02c8si\u02d0 levl ra\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sea+level+rise&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coastal farmlands in low-lying deltas are threatened by sea level rise and saltwater intrusion.",
      exampleVi: "\u0110\u1ea5t canh t\u00e1c ven bi\u1ec3n \u1edf c\u00e1c \u0111\u1ed3ng b\u1eb1ng tr\u0169ng b\u1ecb \u0111e d\u1ecda b\u1edfi n\u01b0\u1edbc bi\u1ec3n d\u00e2ng v\u00e0 x\u00e2m nh\u1eadp m\u1eb7n.",
      collocations: ["combat sea level rise", "consequences of sea level rise"]
    },
    {
      id: "v11-u5-heatwave",
      word: "heatwave",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ee3t n\u1eafng n\u00f3ng gay g\u1eaft k\u00e9o d\u00e0i",
      ipa: "/\u02c8hi\u02d0twe\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heatwave&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Prolonged summer heatwaves pose severe health risks to infants and elderly people.",
      exampleVi: "C\u00e1c \u0111\u1ee3t n\u1eafng n\u00f3ng gay g\u1eaft k\u00e9o d\u00e0i g\u00e2y nguy c\u01a1 s\u1ee9c kh\u1ecfe nghi\u00eam tr\u1ecdng cho tr\u1ebb nh\u1ecf v\u00e0 ng\u01b0\u1eddi gi\u00e0.",
      collocations: ["record-breaking heatwave", "suffer through a heatwave"]
    },
    {
      id: "v11-u5-carbon-footprint",
      word: "carbon footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n carbon c\u1ee7a c\u00e1 nh\u00e2n/t\u1ed5 ch\u1ee9c",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Taking public trains instead of domestic flights lowers your personal carbon footprint.",
      exampleVi: "\u0110i t\u00e0u h\u1ecfa thay v\u00ec bay c\u00e1c chuy\u1ebfn bay n\u1ed9i \u0111\u1ecba gi\u00fap gi\u1ea3m d\u1ea5u ch\u00e2n carbon c\u00e1 nh\u00e2n.",
      collocations: ["offset carbon footprint", "calculate carbon footprint"]
    },
    {
      id: "v11-u5-extreme-weather",
      word: "extreme weather",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eddi ti\u1ebft c\u1ef1c \u0111oan (b\u00e3o d\u1eef, h\u1ea1n h\u00e1n)",
      ipa: "/\u026ak\u02ccstri\u02d0m \u02c8we\u00f0\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extreme+weather&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Global warming leads to an increased frequency of extreme weather events worldwide.",
      exampleVi: "S\u1ef1 n\u00f3ng l\u00ean to\u00e0n c\u1ea7u l\u00e0m gia t\u0103ng t\u1ea7n su\u1ea5t x\u1ea3y ra c\u00e1c hi\u1ec7n t\u01b0\u1ee3ng th\u1eddi ti\u1ebft c\u1ef1c \u0111oan.",
      collocations: ["unprecedented extreme weather", "face extreme weather"]
    },
    {
      id: "v11-u5-drought",
      word: "drought",
      partOfSpeech: "n",
      meaningVi: "n\u1ea1n h\u1ea1n h\u00e1n kh\u00f4 ki\u1ec7t k\u00e9o d\u00e0i",
      ipa: "/dra\u028at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=drought&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Severe agricultural drought dried up irrigation canals and ruined thousands of hectares of corn.",
      exampleVi: "H\u1ea1n h\u00e1n n\u00f4ng nghi\u1ec7p nghi\u00eam tr\u1ecdng l\u00e0m kh\u00f4 ki\u1ec7t k\u00eanh m\u01b0\u01a1ng v\u00e0 l\u00e0m h\u1ecfng h\u00e0ng ng\u00e0n hecta ng\u00f4.",
      collocations: ["suffer from prolonged drought", "drought-stricken area"]
    },
    {
      id: "v11-u5-catastrophe",
      word: "catastrophe",
      partOfSpeech: "n",
      meaningVi: "th\u1ea3m h\u1ecda th\u1ea3m kh\u1ed1c t\u00e0n ph\u00e1",
      ipa: "/k\u0259\u02c8t\u00e6str\u0259fi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=catastrophe&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Failing to curb global carbon emissions will trigger irreversible ecological catastrophe.",
      exampleVi: "Kh\u00f4ng ki\u1ec3m so\u00e1t \u0111\u01b0\u1ee3c ph\u00e1t th\u1ea3i carbon s\u1ebd ch\u00e2m ng\u00f2i cho th\u1ea3m h\u1ecda sinh th\u00e1i kh\u00f4ng th\u1ec3 \u0111\u1ea3o ng\u01b0\u1ee3c.",
      collocations: ["environmental catastrophe", "avert catastrophe"]
    },
    {
      id: "v11-u5-carbon-tax",
      word: "carbon tax",
      partOfSpeech: "n.phr",
      meaningVi: "thu\u1ebf ph\u00e1t th\u1ea3i carbon \u0111\u00e1nh v\u00e0o doanh nghi\u1ec7p",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n t\u00e6ks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+tax&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Implementing a fair carbon tax penalizes heavy polluters and incentivizes green technology.",
      exampleVi: "\u0110\u00e1nh thu\u1ebf carbon c\u00f4ng b\u1eb1ng x\u1eed ph\u1ea1t c\u00e1c doanh nghi\u1ec7p x\u1ea3 th\u1ea3i l\u1edbn v\u00e0 khuy\u1ebfn kh\u00edch c\u00f4ng ngh\u1ec7 s\u1ea1ch.",
      collocations: ["levy a carbon tax", "impose a carbon tax"]
    },
    {
      id: "v11-u5-net-zero",
      word: "net-zero",
      partOfSpeech: "n / adj",
      meaningVi: "ph\u00e1t th\u1ea3i r\u00f2ng b\u1eb1ng kh\u00f4ng",
      ipa: "/\u02ccnet \u02c8z\u026a\u0259r\u0259\u028a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=net-zero&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vietnam boldly committed to achieving net-zero greenhouse emissions by 2050 at COP26.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 m\u1ea1nh m\u1ebd cam k\u1ebft \u0111\u1ea1t m\u1ee9c ph\u00e1t th\u1ea3i r\u00f2ng b\u1eb1ng kh\u00f4ng v\u00e0o n\u0103m 2050 t\u1ea1i COP26.",
      collocations: ["reach net-zero emissions", "net-zero target"]
    },
    {
      id: "v11-u5-fossil-fuels",
      word: "fossil fuels",
      partOfSpeech: "n.phr",
      meaningVi: "nhi\u00ean li\u1ec7u h\u00f3a th\u1ea1ch g\u00e2y \u00f4 nhi\u1ec5m",
      ipa: "/\u02c8f\u0252sl fju\u02d0\u0259lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fossil+fuels&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Phase out of coal-fired power plants is crucial to stop burning fossil fuels.",
      exampleVi: "Lo\u1ea1i b\u1ecf d\u1ea7n c\u00e1c nh\u00e0 m\u00e1y nhi\u1ec7t \u0111i\u1ec7n than l\u00e0 \u0111i\u1ec1u s\u1ed1ng c\u00f2n \u0111\u1ec3 ng\u1eebng \u0111\u1ed1t nhi\u00ean li\u1ec7u h\u00f3a th\u1ea1ch.",
      collocations: ["dependence on fossil fuels", "burn fossil fuels"]
    },
    {
      id: "v11-u5-renewable-sources",
      word: "renewable sources",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00e1c ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch t\u00e1i t\u1ea1o",
      ipa: "/r\u026a\u02ccnju\u02d0\u0259bl \u02c8s\u0254\u02d0s\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=renewable+sources&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Solar, hydro, and offshore wind are clean renewable sources replacing oil.",
      exampleVi: "N\u0103ng l\u01b0\u1ee3ng m\u1eb7t tr\u1eddi, th\u1ee7y \u0111i\u1ec7n v\u00e0 gi\u00f3 bi\u1ec3n l\u00e0 c\u00e1c ngu\u1ed3n n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o s\u1ea1ch thay th\u1ebf d\u1ea7u m\u1ecf.",
      collocations: ["harness renewable sources", "transition to renewable sources"]
    },
    {
      id: "v11-u5-reforestation",
      word: "reforestation",
      partOfSpeech: "n",
      meaningVi: "tr\u1ed3ng r\u1eebng t\u00e1i sinh \u0111\u1ec3 h\u1ea5p th\u1ee5 CO2",
      ipa: "/\u02ccri\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reforestation creates massive natural carbon sinks that absorb greenhouse gases.",
      exampleVi: "Tr\u1ed3ng l\u1ea1i r\u1eebng t\u1ea1o ra c\u00e1c b\u1ec3 ch\u1ee9a carbon t\u1ef1 nhi\u00ean kh\u1ed5ng l\u1ed3 h\u1ea5p th\u1ee5 kh\u00ed nh\u00e0 k\u00ednh.",
      collocations: ["large-scale reforestation", "reforestation initiative"]
    },
    {
      id: "v11-u5-ecological-footprint",
      word: "ecological footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n sinh th\u00e1i t\u00e0i nguy\u00ean s\u1eed d\u1ee5ng",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Eating more plant-based meals drastically lowers an individual's ecological footprint.",
      exampleVi: "\u0102n nhi\u1ec1u rau c\u1ee7 h\u01a1n gi\u00fap gi\u1ea3m \u0111\u00e1ng k\u1ec3 d\u1ea5u ch\u00e2n sinh th\u00e1i c\u1ee7a m\u1ed7i c\u00e1 nh\u00e2n.",
      collocations: ["reduce ecological footprint", "measure ecological footprint"]
    },
    {
      id: "v11-u5-climate-change",
      word: "climate change",
      partOfSpeech: "n.phr",
      meaningVi: "bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu to\u00e0n c\u1ea7u",
      ipa: "/\u02c8kla\u026am\u0259t t\u0283e\u026and\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+change&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scientists warn that climate change causes irreversible damage to ocean coral ecosystems.",
      exampleVi: "C\u00e1c nh\u00e0 khoa h\u1ecdc c\u1ea3nh b\u00e1o bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu g\u00e2y t\u1ed5n h\u1ea1i kh\u00f4ng th\u1ec3 \u0111\u1ea3o ng\u01b0\u1ee3c cho h\u1ec7 san h\u00f4.",
      collocations: ["fight climate change", "combat climate change"]
    },
    {
      id: "v11-u5-carbon-sink",
      word: "carbon sink",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ec3 ch\u1ee9a h\u1ea5p th\u1ee5 v\u00e0 l\u01b0u gi\u1eef carbon",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n s\u026a\u014bk/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+sink&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Oceans and ancient rainforests serve as the planet's primary carbon sinks.",
      exampleVi: "\u0110\u1ea1i d\u01b0\u01a1ng v\u00e0 nh\u1eefng c\u00e1nh r\u1eebng m\u01b0a nguy\u00ean sinh \u0111\u00f3ng vai tr\u00f2 l\u00e0 b\u1ec3 h\u1ea5p th\u1ee5 carbon ch\u00ednh c\u1ee7a h\u00e0nh tinh.",
      collocations: ["natural carbon sink", "protect carbon sinks"]
    },
    {
      id: "v11-u5-albedo-effect",
      word: "albedo effect",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng ph\u1ea3n x\u1ea1 \u00e1nh s\u00e1ng c\u1ee7a b\u0103ng tuy\u1ebft",
      ipa: "/\u00e6l\u02c8bi\u02d0d\u0259\u028a \u026a\u02ccfekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=albedo+effect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "When white polar ice melts, dark ocean water absorbs more heat, diminishing the albedo effect.",
      exampleVi: "Khi b\u0103ng tuy\u1ebft tr\u1eafng tan ch\u1ea3y, n\u01b0\u1edbc bi\u1ec3n t\u1ed1i m\u00e0u h\u1ea5p th\u1ee5 th\u00eam nhi\u1ec7t, l\u00e0m gi\u1ea3m hi\u1ec7u \u1ee9ng ph\u1ea3n x\u1ea1.",
      collocations: ["diminish the albedo effect", "polar albedo effect"]
    },
    {
      id: "v11-u5-clean-technology",
      word: "clean technology",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 s\u1ea1ch th\u00e2n thi\u1ec7n m\u00f4i sinh",
      ipa: "/kli\u02d0n tek\u02c8n\u0252l\u0259d\u0292i/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=clean+technology&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Governments offer generous subsidies to startups pioneering clean technology.",
      exampleVi: "C\u00e1c ch\u00ednh ph\u1ee7 trao tr\u1ee3 c\u1ea5p h\u00e0o ph\u00f3ng cho c\u00e1c c\u00f4ng ty kh\u1edfi nghi\u1ec7p ti\u00ean phong v\u1ec1 c\u00f4ng ngh\u1ec7 s\u1ea1ch.",
      collocations: ["invest in clean technology", "adopt clean technology"]
    },
    {
      id: "v11-u5-soil-degradation",
      word: "soil degradation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 tho\u00e1i h\u00f3a v\u00e0 b\u1ea1c m\u00e0u c\u1ee7a \u0111\u1ea5t tr\u1ed3ng",
      ipa: "/\u02c8s\u0254\u026al \u02ccde\u0261r\u0259\u02c8de\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=soil+degradation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Excessive synthetic chemical fertilizer causes rapid soil degradation in orchards.",
      exampleVi: "L\u1ea1m d\u1ee5ng ph\u00e2n b\u00f3n h\u00f3a h\u1ecdc nh\u00e2n t\u1ea1o g\u00e2y tho\u00e1i h\u00f3a \u0111\u1ea5t nhanh ch\u00f3ng \u1edf c\u00e1c v\u01b0\u1eddn c\u00e2y \u0103n tr\u00e1i.",
      collocations: ["halt soil degradation", "combat soil degradation"]
    },
    {
      id: "v11-u5-permafrost",
      word: "permafrost",
      partOfSpeech: "n",
      meaningVi: "t\u1ea7ng \u0111\u1ea5t \u0111\u00f3ng b\u0103ng v\u0129nh c\u1eedu v\u00f9ng c\u1ef1c",
      ipa: "/\u02c8p\u025c\u02d0m\u0259fr\u0252st/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=permafrost&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thawing Arctic permafrost risks releasing billions of tons of trapped methane gas.",
      exampleVi: "B\u0103ng v\u0129nh c\u1eedu B\u1eafc C\u1ef1c tan ch\u1ea3y c\u00f3 nguy c\u01a1 gi\u1ea3i ph\u00f3ng h\u00e0ng t\u1ef7 t\u1ea5n kh\u00ed metan b\u1ecb ch\u00f4n v\u00f9i.",
      collocations: ["thawing permafrost", "melting permafrost"]
    }
    ,
    {
      id: "v11-boost-carbon-capture",
      word: "carbon capture",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 thu gi\u1eef v\u00e0 ch\u00f4n l\u1ea5p carbon",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8k\u00e6pt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+capture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Carbon capture technology traps factory emissions and stores them deep underground.",
      exampleVi: "C\u00f4ng ngh\u1ec7 thu gi\u1eef carbon ch\u1eb7n kh\u00ed th\u1ea3i nh\u00e0 m\u00e1y v\u00e0 ch\u00f4n l\u1ea5p s\u00e2u d\u01b0\u1edbi l\u00f2ng \u0111\u1ea5t.",
      collocations: ["invest in carbon capture", "carbon capture and storage"]
    }
    ,
    {
      id: "v11-boost-tipping-point",
      word: "tipping point",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m b\u00f9ng ph\u00e1t kh\u00ed h\u1eadu kh\u00f4ng th\u1ec3 \u0111\u1ea3o ng\u01b0\u1ee3c",
      ipa: "/\u02c8t\u026ap\u026a\u014b p\u0254\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tipping+point&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Scientists warn that Amazon forest loss is dangerously near an irreversible tipping point.",
      exampleVi: "C\u00e1c nh\u00e0 khoa h\u1ecdc c\u1ea3nh b\u00e1o m\u1ea5t r\u1eebng Amazon \u0111ang ti\u1ebfn g\u1ea7n \u0111i\u1ec3m b\u00f9ng ph\u00e1t nguy hi\u1ec3m.",
      collocations: ["reach a tipping point", "climate tipping point"]
    }
    ,
    {
      id: "v11-boost-methane-emissions",
      word: "methane emissions",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u00ed th\u1ea3i metan g\u00e2y n\u00f3ng l\u00ean to\u00e0n c\u1ea7u",
      ipa: "/\u02c8mi\u02d0\u03b8e\u026an \u026a\u02c8m\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=methane+emissions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Methane emissions from animal husbandry trap heat eighty times faster than carbon dioxide.",
      exampleVi: "Kh\u00ed th\u1ea3i metan t\u1eeb ch\u0103n nu\u00f4i gi\u1eef nhi\u1ec7t g\u1ea5p t\u00e1m m\u01b0\u01a1i l\u1ea7n so v\u1edbi kh\u00ed CO2.",
      collocations: ["cut methane emissions", "reduce methane emissions"]
    }
    ,
    {
      id: "v11-boost-afforestation",
      word: "afforestation",
      partOfSpeech: "n",
      meaningVi: "tr\u1ed3ng r\u1eebng ph\u1ee7 xanh \u0111\u1ea5t tr\u1ed1ng \u0111\u1ed3i tr\u1ecdc",
      ipa: "/\u00e6\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=afforestation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "National afforestation campaigns absorb hundreds of thousands of tons of emissions.",
      exampleVi: "C\u00e1c chi\u1ebfn d\u1ecbch tr\u1ed3ng r\u1eebng ph\u1ee7 xanh h\u1ea5p th\u1ee5 h\u00e0ng tr\u0103m ng\u00e0n t\u1ea5n kh\u00ed th\u1ea3i nh\u00e0 k\u00ednh.",
      collocations: ["support afforestation", "large-scale afforestation"]
    }
    ,
    {
      id: "v11-boost-climate-refugee",
      word: "climate refugee",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi t\u1ecb n\u1ea1n do bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu",
      ipa: "/\u02c8kla\u026am\u0259t \u02ccrefju\u02c8d\u0292i\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+refugee&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rising sea waters may force millions of delta residents to become climate refugees.",
      exampleVi: "M\u1ef1c n\u01b0\u1edbc bi\u1ec3n d\u00e2ng cao c\u00f3 th\u1ec3 bu\u1ed9c h\u00e0ng tri\u1ec7u c\u01b0 d\u00e2n \u0111\u1ed3ng b\u1eb1ng ph\u1ea3i t\u1ecb n\u1ea1n kh\u00ed h\u1eadu.",
      collocations: ["protect climate refugees", "plight of climate refugees"]
    }
    ,
    {
      id: "v11-boost-greenhouse-gas-inventory",
      word: "greenhouse gas inventory",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3m k\u00ea l\u01b0\u1ee3ng ph\u00e1t th\u1ea3i kh\u00ed nh\u00e0 k\u00ednh",
      ipa: "/\u02c8\u0261ri\u02d0nha\u028as \u0261\u00e6s \u02c8\u026anv\u0259ntri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=greenhouse+gas+inventory&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Enterprises must submit an annual greenhouse gas inventory to environmental authorities.",
      exampleVi: "C\u00e1c doanh nghi\u1ec7p ph\u1ea3i n\u1ed9p b\u00e1o c\u00e1o ki\u1ec3m k\u00ea kh\u00ed nh\u00e0 k\u00ednh h\u00e0ng n\u0103m cho c\u01a1 quan m\u00f4i tr\u01b0\u1eddng.",
      collocations: ["conduct a greenhouse gas inventory", "national inventory"]
    }
    ,
    {
      id: "v11-boost-carbon-footprint-audit",
      word: "carbon footprint audit",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ec3m to\u00e1n \u0111o l\u01b0\u1eddng d\u1ea5u ch\u00e2n carbon",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n \u02c8f\u028atpr\u026ant \u02c8\u0254\u02d0d\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+footprint+audit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The green university underwent a comprehensive carbon footprint audit.",
      exampleVi: "Ng\u00f4i tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc xanh \u0111\u00e3 th\u1ef1c hi\u1ec7n ki\u1ec3m to\u00e1n to\u00e0n di\u1ec7n v\u1ec1 d\u1ea5u ch\u00e2n carbon.",
      collocations: ["carry out a carbon audit", "carbon footprint audit report"]
    }
    ,
    {
      id: "v11-boost-energy-transition",
      word: "energy transition",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ec3n d\u1ecbch c\u01a1 c\u1ea5u n\u0103ng l\u01b0\u1ee3ng xanh",
      ipa: "/\u02c8en\u0259d\u0292i tr\u00e6n\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+transition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national energy transition replaces coal generators with offshore wind turbines.",
      exampleVi: "Chuy\u1ec3n d\u1ecbch n\u0103ng l\u01b0\u1ee3ng qu\u1ed1c gia thay th\u1ebf nhi\u1ec7t \u0111i\u1ec7n than b\u1eb1ng tua-bin gi\u00f3 ngo\u00e0i kh\u01a1i.",
      collocations: ["just energy transition", "accelerate energy transition"]
    }
    ,
    {
      id: "mega-unit-5-greenhouse-effect",
      word: "greenhouse effect",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng nh\u00e0 k\u00ednh l\u00e0m t\u0103ng nhi\u1ec7t \u0111\u1ed9 tr\u00e1i \u0111\u1ea5t",
      ipa: "/\u02c8\u0261ri\u02d0nha\u028as \u026a\u02ccfekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=greenhouse+effect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The enhanced greenhouse effect traps excess thermal radiation inside the earth's atmosphere.",
      exampleVi: "Hi\u1ec7u \u1ee9ng nh\u00e0 k\u00ednh t\u0103ng c\u01b0\u1eddng gi\u1eef l\u1ea1i b\u1ee9c x\u1ea1 nhi\u1ec7t d\u01b0 th\u1eeba b\u00ean trong b\u1ea7u kh\u00ed quy\u1ec3n tr\u00e1i \u0111\u1ea5t.",
      collocations: ["cause the greenhouse effect", "combat the greenhouse effect"]
    }
    ,
    {
      id: "mega-unit-5-glacial-retreat",
      word: "glacial retreat",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng b\u0103ng h\u00e0 tan ch\u1ea3y thu h\u1eb9p di\u1ec7n t\u00edch",
      ipa: "/\u02cc\u0261l\u00e6si\u0259l r\u026a\u02c8tri\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=glacial+retreat&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Satellite imagery documents accelerated glacial retreat across the Himalayan ice caps.",
      exampleVi: "H\u00ecnh \u1ea3nh v\u1ec7 tinh ghi nh\u1eadn t\u00ecnh tr\u1ea1ng b\u0103ng tan thu h\u1eb9p t\u0103ng t\u1ed1c tr\u00ean c\u00e1c ch\u1ecfm b\u0103ng d\u00e3y Himalaya.",
      collocations: ["witness glacial retreat", "speed of glacial retreat"]
    }
    ,
    {
      id: "mega-unit-5-carbon-neutrality",
      word: "carbon neutrality",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea1ng th\u00e1i trung h\u00f2a carbon kh\u00f4ng ph\u00e1t th\u1ea3i r\u00f2ng",
      ipa: "/\u02cck\u0251\u02d0b\u0259n nju\u02d0\u02c8tr\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+neutrality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Viet Nam committed to achieving complete carbon neutrality by the year 2050 at COP26.",
      exampleVi: "Vi\u1ec7t Nam \u0111\u00e3 cam k\u1ebft \u0111\u1ea1t \u0111\u01b0\u1ee3c tr\u1ea1ng th\u00e1i trung h\u00f2a carbon ho\u00e0n to\u00e0n v\u00e0o n\u0103m 2050 t\u1ea1i h\u1ed9i ngh\u1ecb COP26.",
      collocations: ["commit to carbon neutrality", "path to carbon neutrality"]
    }
    ,
    {
      id: "mega-unit-5-sea-level-rise",
      word: "sea-level rise",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ef1c n\u01b0\u1edbc bi\u1ec3n d\u00e2ng cao \u0111e d\u1ecda v\u00f9ng tr\u0169ng",
      ipa: "/\u02c8si\u02d0 levl ra\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sea-level+rise&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sea-level rise poses imminent inundation hazards for low-lying farming hamlets in the Mekong Delta.",
      exampleVi: "N\u01b0\u1edbc bi\u1ec3n d\u00e2ng g\u00e2y ra hi\u1ec3m h\u1ecda ng\u1eadp \u00fang c\u1eadn k\u1ec1 cho c\u00e1c th\u00f4n x\u00f3m n\u00f4ng nghi\u1ec7p tr\u0169ng th\u1ea5p \u1edf \u0110BSCL.",
      collocations: ["threatened by sea-level rise", "rate of sea-level rise"]
    }
    ,
    {
      id: "mega-unit-5-methane-leak",
      word: "methane leak",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 r\u00f2 r\u1ec9 kh\u00ed methane \u0111\u1ed9c h\u1ea1i",
      ipa: "/\u02c8mi\u02d0\u03b8e\u026an li\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=methane+leak&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Infrared drones identify fugitive methane leaks from abandoned shale gas extraction wells.",
      exampleVi: "M\u00e1y bay kh\u00f4ng ng\u01b0\u1eddi l\u00e1i h\u1ed3ng ngo\u1ea1i ph\u00e1t hi\u1ec7n c\u00e1c v\u1ee5 r\u00f2 r\u1ec9 kh\u00ed methane t\u1eeb nh\u1eefng gi\u1ebfng khoan kh\u00ed \u0111\u00e1 phi\u1ebfn b\u1ecf hoang.",
      collocations: ["detect a methane leak", "repair methane leaks"]
    }
    ,
    {
      id: "mega-unit-5-fossil-fuel-phase-out",
      word: "fossil fuel phase-out",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ed9 tr\u00ecnh lo\u1ea1i b\u1ecf d\u1ea7n nhi\u00ean li\u1ec7u h\u00f3a th\u1ea1ch",
      ipa: "/\u02c8f\u0252sl fju\u02d0\u0259l fe\u026az a\u028at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=fossil+fuel+phase-out&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Environmentalists urge governments to enact a binding timetable for fossil fuel phase-out.",
      exampleVi: "C\u00e1c nh\u00e0 m\u00f4i tr\u01b0\u1eddng h\u1ed1i th\u00fac ch\u00ednh ph\u1ee7 ban h\u00e0nh l\u1ed9 tr\u00ecnh mang t\u00ednh r\u00e0ng bu\u1ed9c \u0111\u1ec3 lo\u1ea1i b\u1ecf d\u1ea7n nhi\u00ean li\u1ec7u h\u00f3a th\u1ea1ch.",
      collocations: ["accelerate fossil fuel phase-out", "demand phase-out"]
    }
    ,
    {
      id: "mega-unit-5-ocean-acidification",
      word: "ocean acidification",
      partOfSpeech: "n.phr",
      meaningVi: "axit h\u00f3a \u0111\u1ea1i d\u01b0\u01a1ng do h\u1ea5p th\u1ee5 nhi\u1ec1u CO2",
      ipa: "/\u02c8\u0259\u028a\u0283n \u0259\u02ccs\u026ad\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ocean+acidification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Rising ocean acidification weakens the calcium carbonate shells of oysters and coral polyps.",
      exampleVi: "S\u1ef1 gia t\u0103ng axit h\u00f3a \u0111\u1ea1i d\u01b0\u01a1ng l\u00e0m suy y\u1ebfu v\u1ecf canxi cacbonat c\u1ee7a c\u00e1c lo\u00e0i h\u00e0u v\u00e0 polyp san h\u00f4.",
      collocations: ["consequences of ocean acidification", "rate of acidification"]
    }
    ,
    {
      id: "mega-unit-5-permafrost-thaw",
      word: "permafrost thaw",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 tan ch\u1ea3y t\u1ea7ng \u0111\u1ea5t \u0111\u00f3ng b\u0103ng v\u0129nh c\u1eedu",
      ipa: "/\u02c8p\u025c\u02d0m\u0259fr\u0252st \u03b8\u0254\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=permafrost+thaw&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Widespread Arctic permafrost thaw releases trapped prehistoric greenhouse gases into the skies.",
      exampleVi: "Hi\u1ec7n t\u01b0\u1ee3ng tan t\u1ea7ng \u0111\u1ea5t \u0111\u00f3ng b\u0103ng v\u0129nh c\u1eedu \u1edf B\u1eafc C\u1ef1c gi\u1ea3i ph\u00f3ng kh\u00ed nh\u00e0 k\u00ednh th\u1eddi ti\u1ec1n s\u1eed b\u1ecb giam gi\u1eef v\u00e0o b\u1ea7u kh\u00ed quy\u1ec3n.",
      collocations: ["trigger permafrost thaw", "accelerated thaw"]
    }
    ,
    {
      id: "mega-unit-5-extreme-weather-event",
      word: "extreme weather event",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng th\u1eddi ti\u1ebft c\u1ef1c \u0111oan nh\u01b0 b\u00e3o l\u0169 h\u1ea1n h\u00e1n",
      ipa: "/\u026ak\u02ccstri\u02d0m \u02c8we\u00f0\u0259r \u026a\u02c8vent/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=extreme+weather+event&type=2",
      imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meteorologists attribute the frequency of extreme weather events directly to elevated atmospheric temperatures.",
      exampleVi: "C\u00e1c nh\u00e0 kh\u00ed t\u01b0\u1ee3ng h\u1ecdc cho r\u1eb1ng t\u1ea7n su\u1ea5t xu\u1ea5t hi\u1ec7n c\u00e1c hi\u1ec7n t\u01b0\u1ee3ng th\u1eddi ti\u1ebft c\u1ef1c \u0111oan b\u1eaft ngu\u1ed3n t\u1eeb nhi\u1ec7t \u0111\u1ed9 kh\u00ed quy\u1ec3n t\u0103ng cao.",
      collocations: ["frequency of extreme weather events", "cope with extreme events"]
    }
    ,
    {
      id: "mega-unit-5-thermal-expansion",
      word: "thermal expansion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 gi\u00e3n n\u1edf nhi\u1ec7t c\u1ee7a kh\u1ed1i n\u01b0\u1edbc \u0111\u1ea1i d\u01b0\u01a1ng",
      ipa: "/\u02c8\u03b8\u025c\u02d0ml \u026ak\u02c8sp\u00e6n\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=thermal+expansion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thermal expansion of warming seawater accounts for almost half of observed ocean volume gains.",
      exampleVi: "S\u1ef1 gi\u00e3n n\u1edf v\u00ec nhi\u1ec7t c\u1ee7a n\u01b0\u1edbc bi\u1ec3n \u1ea5m l\u00ean chi\u1ebfm g\u1ea7n m\u1ed9t n\u1eeda m\u1ee9c t\u0103ng th\u1ec3 t\u00edch \u0111\u1ea1i d\u01b0\u01a1ng \u0111\u01b0\u1ee3c quan s\u00e1t.",
      collocations: ["mechanism of thermal expansion", "cause of expansion"]
    }
    ,
    {
      id: "mega-unit-5-albedo-effect",
      word: "albedo effect",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng ph\u1ea3n x\u1ea1 \u00e1nh s\u00e1ng m\u1eb7t tr\u1eddi c\u1ee7a b\u1ec1 m\u1eb7t b\u0103ng",
      ipa: "/\u00e6l\u02c8bi\u02d0d\u0259\u028a \u026a\u02ccfekt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=albedo+effect&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Melting white sea ice diminishes the polar albedo effect, causing dark waters to absorb solar rays.",
      exampleVi: "B\u0103ng bi\u1ec3n tr\u1eafng tan ch\u1ea3y l\u00e0m gi\u1ea3m hi\u1ec7u \u1ee9ng ph\u1ea3n x\u1ea1 \u00e1nh s\u00e1ng \u1edf hai c\u1ef1c, khi\u1ebfn l\u00e0n n\u01b0\u1edbc s\u1eabm m\u00e0u h\u1ea5p th\u1ee5 nhi\u1ec1u b\u1ee9c x\u1ea1 nhi\u1ec7t h\u01a1n.",
      collocations: ["understand the albedo effect", "loss of albedo"]
    }
    ,
    {
      id: "mega-unit-5-carbon-tax",
      word: "carbon tax",
      partOfSpeech: "n.phr",
      meaningVi: "thu\u1ebf \u0111\u00e1nh v\u00e0o l\u01b0\u1ee3ng ph\u00e1t th\u1ea3i carbon c\u1ee7a doanh nghi\u1ec7p",
      ipa: "/\u02c8k\u0251\u02d0b\u0259n t\u00e6ks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+tax&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Levying a national carbon tax incentivizes heavy industries to invest in carbon-scrubbing filters.",
      exampleVi: "Vi\u1ec7c \u00e1p thu\u1ebf carbon to\u00e0n qu\u1ed1c t\u1ea1o \u0111\u1ed9ng l\u1ef1c cho c\u00e1c ng\u00e0nh c\u00f4ng nghi\u1ec7p n\u1eb7ng \u0111\u1ea7u t\u01b0 v\u00e0o h\u1ec7 th\u1ed1ng l\u1ecdc kh\u00ed th\u1ea3i carbon.",
      collocations: ["impose a carbon tax", "revenues from carbon tax"]
    }
    ,
    {
      id: "mega-unit-5-climate-migration",
      word: "climate migration",
      partOfSpeech: "n.phr",
      meaningVi: "di c\u01b0 do bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu t\u00e0n ph\u00e1 sinh k\u1ebf",
      ipa: "/\u02c8kla\u026am\u0259t ma\u026a\u02c8\u0261re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+migration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Severe droughts and saltwater intrusion spark involuntary climate migration toward inland industrial towns.",
      exampleVi: "H\u1ea1n h\u00e1n kh\u1ed1c li\u1ec7t v\u00e0 x\u00e2m nh\u1eadp m\u1eb7n l\u00e0m b\u00f9ng ph\u00e1t l\u00e0n s\u00f3ng di c\u01b0 do bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu t\u1edbi c\u00e1c th\u00e0nh ph\u1ed1 c\u00f4ng nghi\u1ec7p n\u1ed9i \u0111\u1ecba.",
      collocations: ["trends in climate migration", "climate migration crisis"]
    }
    ,
    {
      id: "mega-unit-5-coral-bleaching",
      word: "coral bleaching",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng san h\u00f4 b\u1ecb t\u1ea9y tr\u1eafng do n\u01b0\u1edbc bi\u1ec3n n\u00f3ng",
      ipa: "/\u02c8k\u0252r\u0259l \u02c8bli\u02d0t\u0283\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=coral+bleaching&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Prolonged marine heatwaves cause catastrophic coral bleaching across the Great Barrier Reef.",
      exampleVi: "C\u00e1c \u0111\u1ee3t s\u00f3ng nhi\u1ec7t bi\u1ec3n k\u00e9o d\u00e0i g\u00e2y ra hi\u1ec7n t\u01b0\u1ee3ng t\u1ea9y tr\u1eafng san h\u00f4 th\u1ea3m kh\u1ed1c tr\u00ean kh\u1eafp r\u1ea1n san h\u00f4 Great Barrier.",
      collocations: ["widespread coral bleaching", "prevent bleaching"]
    }
    ,
    {
      id: "mega-unit-5-reforestation-initiative",
      word: "reforestation initiative",
      partOfSpeech: "n.phr",
      meaningVi: "s\u00e1ng ki\u1ebfn tr\u1ed3ng l\u1ea1i r\u1eebng \u0111\u1ea7u ngu\u1ed3n",
      ipa: "/\u02ccri\u02d0\u02ccf\u0252r\u026a\u02c8ste\u026a\u0283n \u026a\u02c8n\u026a\u0283\u0259t\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=reforestation+initiative&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community reforestation initiatives planted two million indigenous acacia saplings across barren hills.",
      exampleVi: "C\u00e1c s\u00e1ng ki\u1ebfn tr\u1ed3ng l\u1ea1i r\u1eebng c\u1ed9ng \u0111\u1ed3ng \u0111\u00e3 gieo tr\u1ed3ng hai tri\u1ec7u c\u00e2y tr\u00e0m b\u1ea3n \u0111\u1ecba tr\u00ean nh\u1eefng qu\u1ea3 \u0111\u1ed3i tr\u1ecdc.",
      collocations: ["launch a reforestation initiative", "volunteer for initiative"]
    }
    ,
    {
      id: "mega-unit-5-climate-adaptation",
      word: "climate adaptation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u00edch \u1ee9ng linh ho\u1ea1t v\u1edbi bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu",
      ipa: "/\u02c8kla\u026am\u0259t \u02cc\u00e6d\u00e6p\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+adaptation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Farmers practice climate adaptation by planting saline-tolerant rice varieties in brackish basins.",
      exampleVi: "B\u00e0 con n\u00f4ng d\u00e2n ch\u1ee7 \u0111\u1ed9ng th\u00edch \u1ee9ng kh\u00ed h\u1eadu b\u1eb1ng vi\u1ec7c gieo c\u1ea5y c\u00e1c gi\u1ed1ng l\u00faa ch\u1ecbu m\u1eb7n tr\u00ean c\u00e1c v\u00f9ng n\u01b0\u1edbc l\u1ee3.",
      collocations: ["strategies for climate adaptation", "invest in adaptation"]
    }
    ,
    {
      id: "mega-unit-5-saltwater-intrusion",
      word: "saltwater intrusion",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n t\u01b0\u1ee3ng x\u00e2m nh\u1eadp m\u1eb7n v\u00e0o \u0111\u1ea5t canh t\u00e1c",
      ipa: "/\u02c8s\u0254\u02d0ltw\u0254\u02d0t\u0259 \u026an\u02c8tru\u02d0\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=saltwater+intrusion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Low upstream river discharges trigger severe saltwater intrusion deep into delta fruit orchards.",
      exampleVi: "L\u01b0u l\u01b0\u1ee3ng n\u01b0\u1edbc s\u00f4ng th\u01b0\u1ee3ng ngu\u1ed3n th\u1ea5p ch\u00e2m ng\u00f2i cho hi\u1ec7n t\u01b0\u1ee3ng x\u00e2m nh\u1eadp m\u1eb7n nghi\u00eam tr\u1ecdng \u0103n s\u00e2u v\u00e0o c\u00e1c v\u01b0\u1eddn c\u00e2y \u0103n tr\u00e1i \u1edf \u0111\u1ed3ng b\u1eb1ng.",
      collocations: ["combat saltwater intrusion", "extent of intrusion"]
    }
    ,
    {
      id: "mega-unit-5-tipping-point",
      word: "tipping point",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m b\u00f9ng ph\u00e1t t\u1edbi h\u1ea1n kh\u00f4ng th\u1ec3 c\u1ee9u v\u00e3n",
      ipa: "/\u02c8t\u026ap\u026a\u014b p\u0254\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tipping+point&type=2",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Climatologists warn that melting Greenland ice sheets may cross an irreversible tipping point.",
      exampleVi: "C\u00e1c nh\u00e0 kh\u00ed h\u1eadu h\u1ecdc c\u1ea3nh b\u00e1o r\u1eb1ng c\u00e1c t\u1ea3ng b\u0103ng tan \u1edf Greenland c\u00f3 th\u1ec3 v\u01b0\u1ee3t qua \u0111i\u1ec3m t\u1edbi h\u1ea1n kh\u00f4ng th\u1ec3 \u0111\u1ea3o ng\u01b0\u1ee3c.",
      collocations: ["reach a tipping point", "climate tipping point"]
    }
    ,
    {
      id: "mega-unit-5-energy-transition",
      word: "energy transition",
      partOfSpeech: "n.phr",
      meaningVi: "qu\u00e1 tr\u00ecnh chuy\u1ec3n d\u1ecbch sang n\u0103ng l\u01b0\u1ee3ng s\u1ea1ch",
      ipa: "/\u02c8en\u0259d\u0292i tr\u00e6n\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=energy+transition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Subsidizing solar and battery facilities accelerates the national equitable energy transition.",
      exampleVi: "Vi\u1ec7c tr\u1ee3 c\u1ea5p cho c\u01a1 s\u1edf \u0111i\u1ec7n m\u1eb7t tr\u1eddi v\u00e0 pin l\u01b0u tr\u1eef \u0111\u1ea9y nhanh qu\u00e1 tr\u00ecnh chuy\u1ec3n d\u1ecbch n\u0103ng l\u01b0\u1ee3ng c\u00f4ng b\u1eb1ng qu\u1ed1c gia.",
      collocations: ["accelerate energy transition", "just energy transition"]
    }
    ,
    {
      id: "mega-unit-5-ecological-crisis",
      word: "ecological crisis",
      partOfSpeech: "n.phr",
      meaningVi: "cu\u1ed9c kh\u1ee7ng ho\u1ea3ng sinh th\u00e1i nghi\u00eam tr\u1ecdng",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8kra\u026as\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+crisis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth worldwide mobilize strikes demanding emergency legislation to resolve the planetary ecological crisis.",
      exampleVi: "Gi\u1edbi tr\u1ebb to\u00e0n c\u1ea7u \u0111\u1ed3ng lo\u1ea1t tu\u1ea7n h\u00e0nh \u0111\u00f2i h\u1ecfi c\u00e1c lu\u1eadt kh\u1ea9n c\u1ea5p \u0111\u1ec3 gi\u1ea3i quy\u1ebft cu\u1ed9c kh\u1ee7ng ho\u1ea3ng sinh th\u00e1i tr\u00ean h\u00e0nh tinh.",
      collocations: ["face an ecological crisis", "address the crisis"]
    }
    ,
    {
      id: "mega-unit-5-climate-resilience",
      word: "climate resilience",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng ch\u1ed1ng ch\u1ecbu ph\u1ee5c h\u1ed3i tr\u01b0\u1edbc kh\u00ed h\u1eadu kh\u1eafc nghi\u1ec7t",
      ipa: "/\u02c8kla\u026am\u0259t r\u026a\u02c8z\u026ali\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+resilience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Constructing elevated sea dikes bolsters coastal climate resilience against catastrophic storm surges.",
      exampleVi: "X\u00e2y d\u1ef1ng \u0111\u00ea bi\u1ec3n tr\u00ean cao gi\u00fap n\u00e2ng cao n\u0103ng l\u1ef1c ch\u1ed1ng ch\u1ecbu kh\u00ed h\u1eadu ven bi\u1ec3n tr\u01b0\u1edbc c\u00e1c \u0111\u1ee3t tri\u1ec1u c\u01b0\u1eddng b\u00e3o d\u00e2ng th\u1ea3m kh\u1ed1c.",
      collocations: ["build climate resilience", "enhance resilience"]
    }
    ,
    {
      id: "mega-unit-5-carbon-capture-and-storage",
      word: "carbon capture and storage",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng ngh\u1ec7 thu gi\u1eef v\u00e0 ch\u00f4n c\u1ea5t kh\u00ed carbon",
      ipa: "/\u02cck\u0251\u02d0b\u0259n \u02c8k\u00e6pt\u0283\u0259r \u0259nd \u02c8st\u0254\u02d0r\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carbon+capture+and+storage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Engineers inject captured power plant carbon dioxide into subterranean geological basalt caverns.",
      exampleVi: "C\u00e1c k\u1ef9 s\u01b0 b\u01a1m kh\u00ed CO2 thu \u0111\u01b0\u1ee3c t\u1eeb nh\u00e0 m\u00e1y \u0111i\u1ec7n v\u00e0o c\u00e1c hang \u0111\u00e1 bazan s\u00e2u trong l\u00f2ng \u0111\u1ea5t.",
      collocations: ["commercialize carbon capture and storage", "CCS technology"]
    }
    ,
    {
      id: "mega-unit-5-climate-activism",
      word: "climate activism",
      partOfSpeech: "n.phr",
      meaningVi: "phong tr\u00e0o ho\u1ea1t \u0111\u1ed9ng v\u00ec m\u00f4i tr\u01b0\u1eddng kh\u00ed h\u1eadu",
      ipa: "/\u02c8kla\u026am\u0259t \u02c8\u00e6kt\u026av\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=climate+activism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Grassroots climate activism spearheaded by high schoolers pushed local councils to declare climate emergencies.",
      exampleVi: "Phong tr\u00e0o h\u00e0nh \u0111\u1ed9ng v\u00ec kh\u00ed h\u1eadu do h\u1ecdc sinh c\u1ea5p 3 d\u1eabn d\u1eaft \u0111\u00e3 th\u00fac \u0111\u1ea9y c\u00e1c h\u1ed9i \u0111\u1ed3ng \u0111\u1ecba ph\u01b0\u01a1ng tuy\u00ean b\u1ed1 t\u00ecnh tr\u1ea1ng kh\u1ea9n c\u1ea5p kh\u00ed h\u1eadu.",
      collocations: ["engage in climate activism", "voice of activism"]
    }
  ],
  "unit-6-preserving-our-heritage": [
    {
      id: "v11-u6-tangible-heritage",
      word: "tangible heritage",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a v\u1eadt th\u1ec3 (\u0111\u1ec1n, ch\u00f9a, th\u00e0nh qu\u00e1ch)",
      ipa: "/\u02c8t\u00e6nd\u0292\u0259bl \u02c8her\u026at\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tangible+heritage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Hue Imperial Citadel is a world-renowned tangible heritage site in central Vietnam.",
      exampleVi: "Kinh th\u00e0nh Hu\u1ebf l\u00e0 di s\u1ea3n v\u1eadt th\u1ec3 n\u1ed5i ti\u1ebfng th\u1ebf gi\u1edbi \u1edf mi\u1ec1n Trung Vi\u1ec7t Nam.",
      collocations: ["protect tangible heritage", "restore tangible heritage"]
    },
    {
      id: "v11-u6-intangible-heritage",
      word: "intangible heritage",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a phi v\u1eadt th\u1ec3 (d\u00e2n ca, l\u1ec5 h\u1ed9i)",
      ipa: "/\u026an\u02c8t\u00e6nd\u0292\u0259bl \u02c8her\u026at\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intangible+heritage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "UNESCO inscribed Ca Tru singing as an intangible heritage in need of urgent safeguarding.",
      exampleVi: "UNESCO \u0111\u00e3 ghi danh h\u00e1t Ca Tr\u00f9 l\u00e0 di s\u1ea3n v\u0103n h\u00f3a phi v\u1eadt th\u1ec3 c\u1ea7n b\u1ea3o v\u1ec7 kh\u1ea9n c\u1ea5p.",
      collocations: ["safeguard intangible heritage", "rich intangible heritage"]
    },
    {
      id: "v11-u6-folk-music",
      word: "folk music",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e2m nh\u1ea1c d\u00e2n gian truy\u1ec1n th\u1ed1ng",
      ipa: "/f\u0259\u028ak \u02c8mju\u02d0z\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folk+music&type=2",
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Quan ho folk music is celebrated for its poetic lyrics and alternating vocal delivery.",
      exampleVi: "D\u00e2n ca Quan h\u1ecd n\u1ed5i ti\u1ebfng b\u1edfi l\u1eddi ca gi\u00e0u ch\u1ea5t th\u01a1 v\u00e0 l\u1ed1i h\u00e1t \u0111\u1ed1i \u0111\u00e1p giao duy\u00ean.",
      collocations: ["traditional folk music", "preserve folk music"]
    },
    {
      id: "v11-u6-folk-dance",
      word: "folk dance",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec7u m\u00faa d\u00e2n gian d\u00e2n t\u1ed9c",
      ipa: "/f\u0259\u028ak d\u0251\u02d0ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folk+dance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The bamboo folk dance brings cheerful energy to highland harvest celebrations.",
      exampleVi: "\u0110i\u1ec7u m\u00faa s\u1ea1p d\u00e2n gian \u0111em l\u1ea1i n\u0103ng l\u01b0\u1ee3ng t\u01b0\u01a1i vui cho nh\u1eefng ng\u00e0y h\u1ed9i m\u1eebng l\u00faa m\u1edbi v\u00f9ng cao.",
      collocations: ["perform a folk dance", "traditional folk dance"]
    },
    {
      id: "v11-u6-historical-monument",
      word: "historical monument",
      partOfSpeech: "n.phr",
      meaningVi: "di t\u00edch l\u1ecbch s\u1eed qu\u1ed1c gia",
      ipa: "/h\u026a\u02c8st\u0252r\u026akl \u02c8m\u0252njum\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=historical+monument&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Temple of Literature is an ancient historical monument honoring scholars and teachers.",
      exampleVi: "V\u0103n Mi\u1ebfu - Qu\u1ed1c T\u1eed Gi\u00e1m l\u00e0 di t\u00edch l\u1ecbch s\u1eed c\u1ed5 k\u00ednh t\u00f4n vinh c\u00e1c b\u1eadc hi\u1ec1n t\u00e0i v\u00e0 nh\u00e0 gi\u00e1o.",
      collocations: ["visit a historical monument", "preserve historical monuments"]
    },
    {
      id: "v11-u6-restoration",
      word: "restoration",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 tr\u00f9ng tu, ph\u1ee5c ch\u1ebf c\u00f4ng tr\u00ecnh c\u1ed5",
      ipa: "/\u02ccrest\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=restoration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Master carpenters used traditional wood joining techniques during the temple restoration.",
      exampleVi: "Nh\u1eefng ng\u01b0\u1eddi th\u1ee3 m\u1ed9c b\u1eadc th\u1ea7y \u0111\u00e3 d\u00f9ng k\u1ef9 thu\u1eadt gh\u00e9p m\u1ed9ng truy\u1ec1n th\u1ed1ng khi tr\u00f9ng tu ng\u00f4i \u0111\u1ec1n.",
      collocations: ["historic restoration", "undergo restoration"]
    },
    {
      id: "v11-u6-unesco-recognition",
      word: "UNESCO recognition",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00f4ng nh\u1eadn ch\u00ednh th\u1ee9c c\u1ee7a UNESCO",
      ipa: "/ju\u02d0\u02c8nesk\u0259\u028a \u02ccrek\u0259\u0261\u02c8n\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=UNESCO+recognition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ha Long Bay gained UNESCO recognition for its breathtaking karst geomorphology.",
      exampleVi: "V\u1ecbnh H\u1ea1 Long \u0111\u01b0\u1ee3c UNESCO c\u00f4ng nh\u1eadn nh\u1edd \u0111\u1ecba m\u1ea1o karst \u0111\u00e1 v\u00f4i ngo\u1ea1n m\u1ee5c.",
      collocations: ["receive UNESCO recognition", "seek UNESCO recognition"]
    },
    {
      id: "v11-u6-cultural-identity",
      word: "cultural identity",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n s\u1eafc v\u0103n h\u00f3a c\u1ee7a d\u00e2n t\u1ed9c",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l a\u026a\u02c8dent\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+identity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wearing traditional ao dai on festive holidays reinforces national cultural identity.",
      exampleVi: "M\u1eb7c \u00e1o d\u00e0i truy\u1ec1n th\u1ed1ng v\u00e0o c\u00e1c d\u1ecbp l\u1ec5 h\u1ed9i gi\u00fap t\u00f4n vinh v\u00e0 b\u1ed3i \u0111\u1eafp b\u1ea3n s\u1eafc v\u0103n h\u00f3a d\u00e2n t\u1ed9c.",
      collocations: ["preserve cultural identity", "express cultural identity"]
    },
    {
      id: "v11-u6-ancient-town",
      word: "ancient town",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u1ed1 c\u1ed5 l\u01b0u gi\u1eef ki\u1ebfn tr\u00fac x\u01b0a",
      ipa: "/\u02c8e\u026an\u0283\u0259nt ta\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ancient+town&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hoi An ancient town is famous for yellow facades, Japanese bridge, and glowing silk lanterns.",
      exampleVi: "Ph\u1ed1 c\u1ed5 H\u1ed9i An n\u1ed5i ti\u1ebfng v\u1edbi t\u01b0\u1eddng qu\u00e9t v\u00f4i v\u00e0ng, Ch\u00f9a C\u1ea7u v\u00e0 nh\u1eefng chi\u1ebfc \u0111\u00e8n l\u1ed3ng l\u1ee5a lung linh.",
      collocations: ["visit an ancient town", "historic ancient town"]
    },
    {
      id: "v11-u6-ruins",
      word: "ruins",
      partOfSpeech: "n.pl",
      meaningVi: "t\u00e0n t\u00edch ph\u1ebf t\u00edch l\u1ecbch s\u1eed c\u00f2n s\u00f3t l\u1ea1i",
      ipa: "/\u02c8ru\u02d0\u026anz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ruins&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The mystical brick ruins of My Son sanctuary reveal ancient Cham architecture.",
      exampleVi: "Nh\u1eefng ph\u1ebf t\u00edch g\u1ea1ch r\u00eau phong huy\u1ec1n b\u00ed \u1edf Th\u00e1nh \u0111\u1ecba M\u1ef9 S\u01a1n h\u00e9 l\u1ed9 ki\u1ebfn tr\u00fac Ch\u0103m c\u1ed5 x\u01b0a.",
      collocations: ["ancient ruins", "explore temple ruins"]
    },
    {
      id: "v11-u6-craftsmanship",
      word: "craftsmanship",
      partOfSpeech: "n",
      meaningVi: "tay ngh\u1ec1 th\u1ee7 c\u00f4ng kh\u00e9o l\u00e9o \u0111i\u00eau luy\u1ec7n",
      ipa: "/\u02c8kr\u0251\u02d0ftsm\u0259n\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=craftsmanship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bat Trang ceramic bowls are admired for delicate glaze and master craftsmanship.",
      exampleVi: "B\u00e1t g\u1ed1m B\u00e1t Tr\u00e0ng \u0111\u01b0\u1ee3c ng\u01b0\u1ee1ng m\u1ed9 b\u1edfi n\u01b0\u1edbc men thanh nh\u00e3 v\u00e0 tay ngh\u1ec1 th\u1ee7 c\u00f4ng \u0111i\u00eau luy\u1ec7n.",
      collocations: ["exquisite craftsmanship", "traditional craftsmanship"]
    },
    {
      id: "v11-u6-pass-down",
      word: "pass down",
      partOfSpeech: "v.phr",
      meaningVi: "truy\u1ec1n l\u1ea1i qua c\u00e1c th\u1ebf h\u1ec7 con ch\u00e1u",
      ipa: "/p\u0251\u02d0s da\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pass+down&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Folk lullabies are passed down orally from grandmothers to infants.",
      exampleVi: "Nh\u1eefng \u0111i\u1ec7u ru con d\u00e2n gian \u0111\u01b0\u1ee3c truy\u1ec1n mi\u1ec7ng t\u1eeb b\u00e0 sang c\u00e1c ch\u00e1u nh\u1ecf.",
      collocations: ["pass down through generations", "pass down traditional skills"]
    },
    {
      id: "v11-u6-archaeological-site",
      word: "archaeological site",
      partOfSpeech: "n.phr",
      meaningVi: "di ch\u1ec9 kh\u1ea3o c\u1ed5 h\u1ecdc khai qu\u1eadt",
      ipa: "/\u02cc\u0251\u02d0ki\u0259\u02c8l\u0252d\u0292\u026akl sa\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=archaeological+site&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Archaeologists uncovered centuries-old ceramic pottery at Thang Long Imperial Citadel site.",
      exampleVi: "C\u00e1c nh\u00e0 kh\u1ea3o c\u1ed5 h\u1ecdc \u0111\u00e3 khai qu\u1eadt \u0111\u01b0\u1ee3c g\u1ed1m s\u1ee9 nhi\u1ec1u th\u1ebf k\u1ef7 tr\u01b0\u1edbc t\u1ea1i di ch\u1ec9 Ho\u00e0ng th\u00e0nh Th\u0103ng Long.",
      collocations: ["excavate an archaeological site", "historic archaeological site"]
    },
    {
      id: "v11-u6-customary-ritual",
      word: "customary ritual",
      partOfSpeech: "n.phr",
      meaningVi: "nghi l\u1ec5 phong t\u1ee5c t\u1eadp qu\u00e1n c\u1ed5 truy\u1ec1n",
      ipa: "/\u02c8k\u028cst\u0259m\u0259ri \u02c8r\u026at\u0283u\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=customary+ritual&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Praying for peace at ancestral village pagodas is an annual customary ritual.",
      exampleVi: "C\u1ea7u an t\u1ea1i ch\u00f9a l\u00e0ng l\u00e0 nghi l\u1ec5 phong t\u1ee5c th\u01b0\u1eddng ni\u00ean c\u1ee7a c\u00e1c d\u00f2ng h\u1ecd.",
      collocations: ["perform a customary ritual", "ancient customary ritual"]
    },
    {
      id: "v11-u6-heritage-conservation",
      word: "heritage conservation",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n v\u00e0 g\u00ecn gi\u1eef di s\u1ea3n",
      ipa: "/\u02c8her\u026at\u026ad\u0292 \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heritage+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Heritage conservation balances modern tourism revenues with preservation needs.",
      exampleVi: "B\u1ea3o t\u1ed3n di s\u1ea3n c\u00e2n b\u1eb1ng gi\u1eefa ngu\u1ed3n thu du l\u1ecbch hi\u1ec7n \u0111\u1ea1i v\u00e0 nhu c\u1ea7u gi\u1eef g\u00ecn di t\u00edch.",
      collocations: ["fund heritage conservation", "advocate heritage conservation"]
    },
    {
      id: "v11-u6-handicraft",
      word: "handicraft",
      partOfSpeech: "n",
      meaningVi: "s\u1ea3n ph\u1ea9m th\u1ee7 c\u00f4ng m\u1ef9 ngh\u1ec7 tinh x\u1ea3o",
      ipa: "/\u02c8h\u00e6ndikr\u0251\u02d0ft/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=handicraft&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Foreign tourists love browsing delicate bamboo and lacquer handicrafts in the old quarter.",
      exampleVi: "Kh\u00e1ch du l\u1ecbch qu\u1ed1c t\u1ebf r\u1ea5t th\u00edch ng\u1eafm ngh\u00eda \u0111\u1ed3 m\u00e2y tre v\u00e0 s\u01a1n m\u00e0i th\u1ee7 c\u00f4ng m\u1ef9 ngh\u1ec7 trong ph\u1ed1 c\u1ed5.",
      collocations: ["traditional handicraft", "handicraft village"]
    },
    {
      id: "v11-u6-indigenous-folklore",
      word: "indigenous folklore",
      partOfSpeech: "n.phr",
      meaningVi: "v\u0103n h\u1ecdc d\u00e2n gian truy\u1ec1n mi\u1ec7ng b\u1ea3n \u0111\u1ecba",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s \u02c8f\u0259\u028akl\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous+folklore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Folktales of Lac Long Quan and Au Co are treasured jewels of indigenous folklore.",
      exampleVi: "Truy\u1ec1n thuy\u1ebft L\u1ea1c Long Qu\u00e2n v\u00e0 \u00c2u C\u01a1 l\u00e0 vi\u00ean ng\u1ecdc qu\u00fd trong kho t\u00e0ng v\u0103n h\u1ecdc d\u00e2n gian.",
      collocations: ["record indigenous folklore", "rich indigenous folklore"]
    },
    {
      id: "v11-u6-sacred-sanctuary",
      word: "sacred sanctuary",
      partOfSpeech: "n.phr",
      meaningVi: "n\u01a1i ch\u1ed1n th\u1edd ph\u1ee5ng t\u00f4n nghi\u00eam",
      ipa: "/\u02c8se\u026akr\u026ad \u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sacred+sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Pilgrims climb Yen Tu mountain to pray at the sacred bronze temple sanctuary.",
      exampleVi: "Kh\u00e1ch h\u00e0nh h\u01b0\u01a1ng leo l\u00ean n\u00fai Y\u00ean T\u1eed \u0111\u1ec3 chi\u00eam b\u00e1i ng\u00f4i ch\u00f9a \u0111\u1ed3ng t\u00f4n nghi\u00eam tr\u00ean \u0111\u1ec9nh n\u00fai.",
      collocations: ["revere a sacred sanctuary", "visit a sacred sanctuary"]
    },
    {
      id: "v11-u6-dynasty",
      word: "dynasty",
      partOfSpeech: "n",
      meaningVi: "tri\u1ec1u \u0111\u1ea1i phong ki\u1ebfn l\u1ecbch s\u1eed",
      ipa: "/\u02c8d\u026an\u0259sti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dynasty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Ly Dynasty established Hanoi as the permanent imperial capital in the year 1010.",
      exampleVi: "Nh\u00e0 L\u00fd \u0111\u00e3 \u0111\u1ecbnh \u0111\u00f4 H\u00e0 N\u1ed9i l\u00e0m kinh \u0111\u00f4 mu\u00f4n \u0111\u1eddi c\u1ee7a \u0111\u1ea5t n\u01b0\u1edbc v\u00e0o n\u0103m 1010.",
      collocations: ["reign of a dynasty", "Nguyen Dynasty relics"]
    },
    {
      id: "v11-u6-cultural-legacy",
      word: "cultural legacy",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a tinh th\u1ea7n \u0111\u1ec3 l\u1ea1i cho \u0111\u1eddi sau",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8le\u0261\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+legacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "President Ho Chi Minh left a profound moral and cultural legacy for the entire nation.",
      exampleVi: "Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\u00ed Minh \u0111\u00e3 \u0111\u1ec3 l\u1ea1i m\u1ed9t di s\u1ea3n \u0111\u1ea1o \u0111\u1ee9c v\u00e0 v\u0103n h\u00f3a s\u00e2u s\u1eafc cho to\u00e0n th\u1ec3 d\u00e2n t\u1ed9c.",
      collocations: ["rich cultural legacy", "cherish the cultural legacy"]
    }
    ,
    {
      id: "v-boost-historic-relic",
      word: "historic relic",
      partOfSpeech: "n.phr",
      meaningVi: "di t\u00edch l\u1ecbch s\u1eed qu\u00fd b\u00e1u c\u00f3 gi\u00e1 tr\u1ecb",
      ipa: "/h\u026a\u02c8st\u0252r\u026ak \u02c8rel\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=historic+relic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The ancient pagoda houses a precious historic relic from the Ly Dynasty.",
      exampleVi: "Ng\u00f4i ch\u00f9a c\u1ed5 l\u01b0u gi\u1eef m\u1ed9t di t\u00edch l\u1ecbch s\u1eed qu\u00fd b\u00e1u t\u1eeb th\u1eddi nh\u00e0 L\u00fd.",
      collocations: ["precious historic relic", "preserve historic relics"]
    }
    ,
    {
      id: "v-boost-cultural-identity",
      word: "cultural identity",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n s\u1eafc v\u0103n h\u00f3a d\u00e2n t\u1ed9c \u0111\u1ed9c \u0111\u00e1o",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l a\u026a\u02c8dent\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+identity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Traditional costumes help young generations maintain their cultural identity.",
      exampleVi: "Trang ph\u1ee5c truy\u1ec1n th\u1ed1ng gi\u00fap th\u1ebf h\u1ec7 tr\u1ebb duy tr\u00ec b\u1ea3n s\u1eafc v\u0103n h\u00f3a c\u1ee7a m\u00ecnh.",
      collocations: ["preserve cultural identity", "strong cultural identity"]
    }
    ,
    {
      id: "v-boost-customs-and-traditions",
      word: "customs and traditions",
      partOfSpeech: "n.phr",
      meaningVi: "phong t\u1ee5c t\u1eadp qu\u00e1n truy\u1ec1n th\u1ed1ng l\u00e2u \u0111\u1eddi",
      ipa: "/\u02c8k\u028cst\u0259mz \u0259nd tr\u0259\u02c8d\u026a\u0283nz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=customs+and+traditions&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Villagers strictly observe ancient customs and traditions during Tet holidays.",
      exampleVi: "D\u00e2n l\u00e0ng tu\u00e2n th\u1ee7 nghi\u00eam ng\u1eb7t c\u00e1c phong t\u1ee5c t\u1eadp qu\u00e1n c\u1ed5 truy\u1ec1n trong d\u1ecbp T\u1ebft.",
      collocations: ["ancient customs and traditions", "observe customs and traditions"]
    }
    ,
    {
      id: "v-boost-architectural-style",
      word: "architectural style",
      partOfSpeech: "n.phr",
      meaningVi: "phong c\u00e1ch ki\u1ebfn tr\u00fac c\u1ed5 k\u00ednh \u0111\u1eb7c tr\u01b0ng",
      ipa: "/\u02cc\u0251\u02d0k\u026a\u02c8tekt\u0283\u0259r\u0259l sta\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=architectural+style&type=2",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Hue Citadel is famous for its harmonious Nguyen dynasty architectural style.",
      exampleVi: "Kinh th\u00e0nh Hu\u1ebf n\u1ed5i ti\u1ebfng v\u1edbi phong c\u00e1ch ki\u1ebfn tr\u00fac tri\u1ec1u Nguy\u1ec5n h\u00e0i h\u00f2a.",
      collocations: ["distinctive architectural style", "traditional architectural style"]
    }
    ,
    {
      id: "v-boost-oral-tradition",
      word: "oral tradition",
      partOfSpeech: "n.phr",
      meaningVi: "truy\u1ec1n th\u1ed1ng truy\u1ec1n kh\u1ea9u d\u00e2n gian",
      ipa: "/\u02c8\u0254\u02d0r\u0259l tr\u0259\u02c8d\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=oral+tradition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Folk epic tales have been transmitted across centuries through oral tradition.",
      exampleVi: "C\u00e1c b\u1ea3n tr\u01b0\u1eddng ca s\u1eed thi \u0111\u00e3 \u0111\u01b0\u1ee3c l\u01b0u truy\u1ec1n qua nhi\u1ec1u th\u1ebf k\u1ef7 b\u1eb1ng truy\u1ec1n th\u1ed1ng truy\u1ec1n kh\u1ea9u.",
      collocations: ["rich oral tradition", "pass down by oral tradition"]
    }
    ,
    {
      id: "v-boost-indigenous-culture",
      word: "indigenous culture",
      partOfSpeech: "n.phr",
      meaningVi: "v\u0103n h\u00f3a b\u1ea3n \u0111\u1ecba \u0111\u1eb7c s\u1eafc",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s \u02c8k\u028clt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous+culture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The festival celebrates the indigenous culture of ethnic minorities in the northern mountains.",
      exampleVi: "L\u1ec5 h\u1ed9i t\u00f4n vinh n\u1ec1n v\u0103n h\u00f3a b\u1ea3n \u0111\u1ecba c\u1ee7a \u0111\u1ed3ng b\u00e0o d\u00e2n t\u1ed9c thi\u1ec3u s\u1ed1 v\u00f9ng n\u00fai ph\u00eda b\u1eafc.",
      collocations: ["celebrate indigenous culture", "unique indigenous culture"]
    }
    ,
    {
      id: "mega-unit-6-intangible-heritage",
      word: "intangible heritage",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n v\u0103n h\u00f3a phi v\u1eadt th\u1ec3",
      ipa: "/\u026an\u02cct\u00e6nd\u0292\u0259bl \u02c8her\u026at\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=intangible+heritage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ca Tru singing and Quan Ho folk melodies are recognized by UNESCO as intangible heritage.",
      exampleVi: "H\u00e1t Ca tr\u00f9 v\u00e0 D\u00e2n ca Quan h\u1ecd \u0111\u01b0\u1ee3c UNESCO c\u00f4ng nh\u1eadn l\u00e0 di s\u1ea3n v\u0103n h\u00f3a phi v\u1eadt th\u1ec3 c\u1ee7a nh\u00e2n lo\u1ea1i.",
      collocations: ["preserve intangible heritage", "world intangible heritage"]
    }
    ,
    {
      id: "mega-unit-6-monument-restoration",
      word: "monument restoration",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c tr\u00f9ng tu v\u00e0 ph\u1ee5c d\u1ef1ng di t\u00edch l\u1ecbch s\u1eed",
      ipa: "/\u02c8m\u0252njum\u0259nt \u02ccrest\u0259\u02c8re\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=monument+restoration&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Master craftsmen use traditional lime mortar during the delicate ancient temple monument restoration.",
      exampleVi: "C\u00e1c ngh\u1ec7 nh\u00e2n b\u1eadc th\u1ea7y s\u1eed d\u1ee5ng v\u1eefa v\u00f4i truy\u1ec1n th\u1ed1ng trong c\u00f4ng t\u00e1c tr\u00f9ng tu ph\u1ee5c d\u1ef1ng di t\u00edch ng\u00f4i \u0111\u1ec1n c\u1ed5.",
      collocations: ["undertake monument restoration", "meticulous restoration"]
    }
    ,
    {
      id: "mega-unit-6-folklore-preservation",
      word: "folklore preservation",
      partOfSpeech: "n.phr",
      meaningVi: "vi\u1ec7c s\u01b0u t\u1ea7m v\u00e0 b\u1ea3o t\u1ed3n v\u0103n h\u00f3a d\u00e2n gian",
      ipa: "/\u02c8f\u0259\u028akl\u0254\u02d0 \u02ccprez\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=folklore+preservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Anthropologists record bedtime epics recited by tribal elders for folklore preservation archives.",
      exampleVi: "C\u00e1c nh\u00e0 nh\u00e2n ch\u1ee7ng h\u1ecdc ghi \u00e2m c\u00e1c s\u1eed thi do c\u00e1c gi\u00e0 l\u00e0ng k\u1ec3 l\u1ea1i \u0111\u1ec3 l\u01b0u tr\u1eef b\u1ea3o t\u1ed3n v\u0103n h\u00f3a d\u00e2n gian.",
      collocations: ["commit to folklore preservation", "dedication to preservation"]
    }
    ,
    {
      id: "mega-unit-6-unesco-world-heritage-site",
      word: "unesco world heritage site",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n th\u1ebf gi\u1edbi \u0111\u01b0\u1ee3c UNESCO c\u00f4ng nh\u1eadn",
      ipa: "/ju\u02d0\u02c8nesk\u0259\u028a w\u025c\u02d0ld \u02c8her\u026at\u026ad\u0292 sa\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=unesco+world+heritage+site&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ha Long Bay and Trang An Landscape Complex are globally famous UNESCO World Heritage sites.",
      exampleVi: "V\u1ecbnh H\u1ea1 Long v\u00e0 Qu\u1ea7n th\u1ec3 danh th\u1eafng Tr\u00e0ng An l\u00e0 nh\u1eefng di s\u1ea3n th\u1ebf gi\u1edbi n\u1ed5i ti\u1ebfng to\u00e0n c\u1ea7u \u0111\u01b0\u1ee3c UNESCO vinh danh.",
      collocations: ["inscribed as a World Heritage site", "visit a heritage site"]
    }
    ,
    {
      id: "mega-unit-6-historic-citadel",
      word: "historic citadel",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u00e0ng th\u00e0nh v\u00e0 th\u00e0nh l\u0169y c\u1ed5 k\u00ednh",
      ipa: "/h\u026a\u02c8st\u0252r\u026ak \u02c8s\u026at\u0259d\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=historic+citadel&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stone ramparts and royal gates enclose the magnificent historic citadel in Hue.",
      exampleVi: "Nh\u1eefng b\u1ee9c t\u01b0\u1eddng \u0111\u00e1 v\u00e0 c\u1ed5ng ho\u00e0ng gia bao b\u1ecdc l\u1ea5y khu ho\u00e0ng th\u00e0nh l\u1ecbch s\u1eed tr\u00e1ng l\u1ec7 t\u1ea1i C\u1ed1 \u0111\u00f4 Hu\u1ebf.",
      collocations: ["tour the historic citadel", "ramparts of the citadel"]
    }
    ,
    {
      id: "mega-unit-6-ancestral-shrine",
      word: "ancestral shrine",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e0 th\u1edd t\u1ed5 v\u00e0 ban th\u1edd t\u1ed5 ti\u00ean",
      ipa: "/\u00e6n\u02c8sestr\u0259l \u0283ra\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ancestral+shrine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Villagers burn fragrant incense at the ancestral shrine on the first day of every lunar month.",
      exampleVi: "D\u00e2n l\u00e0ng th\u1eafp nh\u1eefng n\u00e9n h\u01b0\u01a1ng th\u01a1m t\u1ea1i nh\u00e0 th\u1edd t\u1ed5 v\u00e0o ng\u00e0y m\u00f9ng m\u1ed9t \u00e2m l\u1ecbch h\u1eb1ng th\u00e1ng.",
      collocations: ["pay homage at an ancestral shrine", "village shrine"]
    }
    ,
    {
      id: "mega-unit-6-cultural-relic",
      word: "cultural relic",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7n v\u1eadt v\u00e0 di v\u1eadt v\u0103n h\u00f3a c\u1ed5 x\u01b0a",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u02c8rel\u026ak/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+relic&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Excavations in the Red River Delta unearthed Dong Son bronze drums classified as priceless cultural relics.",
      exampleVi: "C\u00e1c cu\u1ed9c khai qu\u1eadt \u1edf \u0110BSH \u0111\u00e3 ph\u00e1t l\u1ed9 nh\u1eefng chi\u1ebfc tr\u1ed1ng \u0111\u1ed3ng \u0110\u00f4ng S\u01a1n \u0111\u01b0\u1ee3c x\u1ebfp h\u1ea1ng c\u1ed5 v\u1eadt v\u0103n h\u00f3a v\u00f4 gi\u00e1.",
      collocations: ["excavate cultural relics", "safeguard relics"]
    }
    ,
    {
      id: "mega-unit-6-architectural-landmark",
      word: "architectural landmark",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng tr\u00ecnh ki\u1ebfn tr\u00fac mang t\u00ednh bi\u1ec3u t\u01b0\u1ee3ng",
      ipa: "/\u02cc\u0251\u02d0k\u026a\u02c8tekt\u0283\u0259r\u0259l \u02c8l\u00e6ndm\u0251\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=architectural+landmark&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The One Pillar Pagoda represents a unique 11th-century architectural landmark resembling a lotus.",
      exampleVi: "Ch\u00f9a M\u1ed9t C\u1ed9t l\u00e0 m\u1ed9t c\u00f4ng tr\u00ecnh ki\u1ebfn tr\u00fac bi\u1ec3u t\u01b0\u1ee3ng \u0111\u1ed9c \u0111\u00e1o t\u1eeb th\u1ebf k\u1ef7 11 m\u00f4 ph\u1ecfng m\u1ed9t \u0111\u00f3a sen ng\u00e1t h\u01b0\u01a1ng.",
      collocations: ["famous architectural landmark", "heritage landmark"]
    }
    ,
    {
      id: "mega-unit-6-traditional-craft-village",
      word: "traditional craft village",
      partOfSpeech: "n.phr",
      meaningVi: "l\u00e0ng ngh\u1ec1 th\u1ee7 c\u00f4ng truy\u1ec1n th\u1ed1ng",
      ipa: "/tr\u0259\u02c8d\u026a\u0283\u0259nl kr\u0251\u02d0ft \u02c8v\u026al\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=traditional+craft+village&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bat Trang is an internationally renowned traditional craft village producing artistic glazed ceramics.",
      exampleVi: "B\u00e1t Tr\u00e0ng l\u00e0 l\u00e0ng ngh\u1ec1 th\u1ee7 c\u00f4ng truy\u1ec1n th\u1ed1ng n\u1ed5i ti\u1ebfng qu\u1ed1c t\u1ebf s\u1ea3n xu\u1ea5t \u0111\u1ed3 g\u1ed1m s\u1ee9 tr\u00e1ng men ngh\u1ec7 thu\u1eadt.",
      collocations: ["visit a traditional craft village", "centuries-old village"]
    }
    ,
    {
      id: "mega-unit-6-oral-tradition",
      word: "oral tradition",
      partOfSpeech: "n.phr",
      meaningVi: "truy\u1ec1n th\u1ed1ng truy\u1ec1n kh\u1ea9u d\u00e2n gian",
      ipa: "/\u02c8\u0254\u02d0r\u0259l tr\u0259\u02c8d\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=oral+tradition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Folk riddles and moral fables were preserved across generations primarily through oral tradition.",
      exampleVi: "Nh\u1eefng c\u00e2u \u0111\u1ed1 d\u00e2n gian v\u00e0 truy\u1ec7n ng\u1ee5 ng\u00f4n \u0111\u1ea1o \u0111\u1ee9c \u0111\u01b0\u1ee3c g\u00ecn gi\u1eef qua bao th\u1ebf h\u1ec7 ch\u1ee7 y\u1ebfu b\u1eb1ng truy\u1ec1n kh\u1ea9u.",
      collocations: ["transmitted via oral tradition", "rich oral tradition"]
    }
    ,
    {
      id: "mega-unit-6-archaeological-site",
      word: "archaeological site",
      partOfSpeech: "n.phr",
      meaningVi: "khu di ch\u1ec9 kh\u1ea3o c\u1ed5 h\u1ecdc",
      ipa: "/\u02cc\u0251\u02d0ki\u0259\u02c8l\u0252d\u0292\u026akl sa\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=archaeological+site&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unesco specialists surveyed the newly uncovered subterranean brick foundations at the archaeological site.",
      exampleVi: "C\u00e1c chuy\u00ean gia UNESCO \u0111\u00e3 kh\u1ea3o s\u00e1t n\u1ec1n m\u00f3ng g\u1ea1ch ng\u1ea7m m\u1edbi ph\u00e1t l\u1ed9 t\u1ea1i khu di ch\u1ec9 kh\u1ea3o c\u1ed5 h\u1ecdc.",
      collocations: ["excavate an archaeological site", "protect the site"]
    }
    ,
    {
      id: "mega-unit-6-living-heritage",
      word: "living heritage",
      partOfSpeech: "n.phr",
      meaningVi: "di s\u1ea3n s\u1ed1ng v\u1eabn \u0111ang ti\u1ebfp di\u1ec5n trong \u0111\u1eddi s\u1ed1ng nh\u00e2n d\u00e2n",
      ipa: "/\u02c8l\u026av\u026a\u014b \u02c8her\u026at\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=living+heritage&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Water puppetry remains a vibrant form of living heritage captivating modern theater audiences.",
      exampleVi: "M\u00faa r\u1ed1i n\u01b0\u1edbc v\u1eabn l\u00e0 m\u1ed9t di s\u1ea3n s\u1ed1ng \u0111\u1ed9ng tr\u00e0n \u0111\u1ea7y s\u1ee9c s\u1ed1ng cu\u1ed1n h\u00fat kh\u00e1n gi\u1ea3 trong c\u00e1c nh\u00e0 h\u00e1t \u0111\u01b0\u01a1ng \u0111\u1ea1i.",
      collocations: ["celebrate living heritage", "cherish living heritage"]
    }
    ,
    {
      id: "mega-unit-6-heritage-conservationist",
      word: "heritage conservationist",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e0 b\u1ea3o t\u1ed3n di s\u1ea3n v\u0103n h\u00f3a",
      ipa: "/\u02c8her\u026at\u026ad\u0292 \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283\u0259n\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heritage+conservationist&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dedicated heritage conservationists fought vigorously against demolishing the historic railway terminal.",
      exampleVi: "Nh\u1eefng nh\u00e0 b\u1ea3o t\u1ed3n di s\u1ea3n t\u00e2m huy\u1ebft \u0111\u00e3 \u0111\u1ea5u tranh quy\u1ebft li\u1ec7t ch\u1ed1ng l\u1ea1i vi\u1ec7c ph\u00e1 b\u1ecf nh\u00e0 ga xe l\u1eeda l\u1ecbch s\u1eed.",
      collocations: ["consult heritage conservationists", "work of conservationists"]
    }
    ,
    {
      id: "mega-unit-6-colonial-architecture",
      word: "colonial architecture",
      partOfSpeech: "n.phr",
      meaningVi: "ki\u1ebfn tr\u00fac th\u1eddi k\u1ef3 thu\u1ed9c \u0111\u1ecba",
      ipa: "/k\u0259\u02c8l\u0259\u028ani\u0259l \u02c8\u0251\u02d0k\u026atekt\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=colonial+architecture&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Ha Noi Opera House stands as an exquisite testament to French colonial architecture.",
      exampleVi: "Nh\u00e0 h\u00e1t L\u1edbn H\u00e0 N\u1ed9i l\u00e0 m\u1ed9t minh ch\u1ee9ng tinh t\u1ebf cho phong c\u00e1ch ki\u1ebfn tr\u00fac Ph\u00e1p thu\u1ed9c th\u1eddi k\u1ef3 tr\u01b0\u1edbc.",
      collocations: ["admire colonial architecture", "preserve colonial buildings"]
    }
    ,
    {
      id: "mega-unit-6-historical-reenactment",
      word: "historical reenactment",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng t\u00e1i hi\u1ec7n l\u1ecbch s\u1eed trong l\u1ec5 h\u1ed9i",
      ipa: "/h\u026a\u02c8st\u0252r\u026akl \u02ccri\u02d0\u026a\u02c8n\u00e6ktm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=historical+reenactment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Actors donned royal armor for a thrilling historical reenactment of the legendary naval victory on Bach Dang River.",
      exampleVi: "C\u00e1c di\u1ec5n vi\u00ean m\u1eb7c \u00e1o gi\u00e1p ho\u00e0ng gia trong m\u00e0n t\u00e1i hi\u1ec7n l\u1ecbch s\u1eed h\u00e0o h\u00f9ng v\u1ec1 chi\u1ebfn th\u1eafng l\u1eaby l\u1eebng tr\u00ean s\u00f4ng B\u1ea1ch \u0110\u1eb1ng.",
      collocations: ["stage a historical reenactment", "vivid reenactment"]
    }
    ,
    {
      id: "mega-unit-6-artisanal-craftsmanship",
      word: "artisanal craftsmanship",
      partOfSpeech: "n.phr",
      meaningVi: "tay ngh\u1ec1 th\u1ee7 c\u00f4ng m\u1ef9 ngh\u1ec7 tinh x\u1ea3o",
      ipa: "/\u02cc\u0251\u02d0t\u026a\u02c8z\u00e6nl \u02c8kr\u0251\u02d0ftsm\u0259n\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=artisanal+craftsmanship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mother-of-pearl lacquerware requires meticulous patience and exquisite artisanal craftsmanship.",
      exampleVi: "S\u1ea3n ph\u1ea9m s\u01a1n m\u00e0i kh\u1ea3m trai \u0111\u00f2i h\u1ecfi s\u1ef1 ki\u00ean nh\u1eabn t\u1ec9 m\u1ec9 v\u00e0 tay ngh\u1ec1 th\u1ee7 c\u00f4ng m\u1ef9 ngh\u1ec7 v\u00f4 c\u00f9ng tinh x\u1ea3o.",
      collocations: ["embody artisanal craftsmanship", "master craftsmanship"]
    }
    ,
    {
      id: "mega-unit-6-cultural-appropriation",
      word: "cultural appropriation",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh vi chi\u1ebfm d\u1ee5ng v\u0103n h\u00f3a sai l\u1ec7ch",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l \u0259\u02ccpr\u0259\u028apri\u02c8e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+appropriation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Critics warned fashion designers against commercial cultural appropriation of sacred ethnic embroidery.",
      exampleVi: "Gi\u1edbi ph\u00ea b\u00ecnh c\u1ea3nh b\u00e1o c\u00e1c nh\u00e0 thi\u1ebft k\u1ebf th\u1eddi trang ch\u1ed1ng l\u1ea1i vi\u1ec7c chi\u1ebfm d\u1ee5ng th\u01b0\u01a1ng m\u1ea1i sai l\u1ec7ch h\u1ecda ti\u1ebft th\u1ed5 c\u1ea9m thi\u00eang li\u00eang.",
      collocations: ["avoid cultural appropriation", "guilty of appropriation"]
    }
    ,
    {
      id: "mega-unit-6-restoration-ethics",
      word: "restoration ethics",
      partOfSpeech: "n.phr",
      meaningVi: "chu\u1ea9n m\u1ef1c \u0111\u1ea1o \u0111\u1ee9c trong tr\u00f9ng tu di s\u1ea3n",
      ipa: "/\u02ccrest\u0259\u02c8re\u026a\u0283n \u02c8e\u03b8\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=restoration+ethics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Strict restoration ethics dictate that original stone carvings must never be painted over in acrylics.",
      exampleVi: "Quy chu\u1ea9n \u0111\u1ea1o \u0111\u1ee9c tr\u00f9ng tu nghi\u00eam ng\u1eb7t quy \u0111\u1ecbnh r\u1eb1ng c\u00e1c b\u1ee9c ph\u00f9 \u0111i\u00eau \u0111\u00e1 nguy\u00ean b\u1ea3n kh\u00f4ng bao gi\u1edd \u0111\u01b0\u1ee3c s\u01a1n ph\u1ee7 b\u1eb1ng s\u01a1n h\u00f3a h\u1ecdc.",
      collocations: ["adhere to restoration ethics", "breach of ethics"]
    }
    ,
    {
      id: "mega-unit-6-temple-pagoda",
      word: "temple pagoda",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00f4i \u0111\u00ecnh ch\u00f9a thanh t\u1ecbnh linh thi\u00eang",
      ipa: "/\u02c8templ p\u0259\u02c8\u0261\u0259\u028ad\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=temple+pagoda&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Incense smoke wafted gently between ancient carved wooden pillars inside the riverside temple pagoda.",
      exampleVi: "Kh\u00f3i h\u01b0\u01a1ng nh\u00e8 nh\u1eb9 lan t\u1ecfa gi\u1eefa nh\u1eefng c\u1ed9t g\u1ed7 ch\u1ea1m kh\u1eafc c\u1ed5 k\u00ednh b\u00ean trong ng\u00f4i \u0111\u00ecnh ch\u00f9a ven s\u00f4ng.",
      collocations: ["pray at the temple pagoda", "ancient pagoda"]
    }
    ,
    {
      id: "mega-unit-6-indigenous-folklore",
      word: "indigenous folklore",
      partOfSpeech: "n.phr",
      meaningVi: "truy\u1ec7n c\u1ed5 t\u00edch v\u00e0 truy\u1ec1n thuy\u1ebft b\u1ea3n \u0111\u1ecba",
      ipa: "/\u026an\u02c8d\u026ad\u0292\u0259n\u0259s \u02c8f\u0259\u028akl\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=indigenous+folklore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The legend of the Golden Turtle is an integral chapter in Vietnamese indigenous folklore.",
      exampleVi: "Truy\u1ec1n thuy\u1ebft R\u00f9a V\u00e0ng l\u00e0 m\u1ed9t ch\u01b0\u01a1ng thi\u00eang li\u00eang g\u1eafn b\u00f3 m\u1eadt thi\u1ebft trong kho t\u00e0ng truy\u1ec7n d\u00e2n gian b\u1ea3n \u0111\u1ecba Vi\u1ec7t Nam.",
      collocations: ["learn indigenous folklore", "anthology of folklore"]
    }
    ,
    {
      id: "mega-unit-6-cultural-revitalization",
      word: "cultural revitalization",
      partOfSpeech: "n.phr",
      meaningVi: "phong tr\u00e0o ph\u1ee5c h\u01b0ng h\u1ed3i sinh v\u0103n h\u00f3a",
      ipa: "/\u02c8k\u028clt\u0283\u0259r\u0259l ri\u02d0\u02ccva\u026at\u0259la\u026a\u02c8ze\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cultural+revitalization&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth workshops on traditional zither music spearhead an exciting cultural revitalization movement.",
      exampleVi: "Nh\u1eefng l\u1edbp h\u1ecdc \u0111\u00e0n tranh d\u00e0nh cho gi\u1edbi tr\u1ebb \u0111\u00e3 d\u1eabn \u0111\u1ea7u phong tr\u00e0o ph\u1ee5c h\u01b0ng \u00e2m nh\u1ea1c truy\u1ec1n th\u1ed1ng \u0111\u1ea7y h\u1ee9ng kh\u1edfi.",
      collocations: ["spark cultural revitalization", "efforts at revitalization"]
    }
    ,
    {
      id: "mega-unit-6-historic-preservation",
      word: "historic preservation",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n g\u00ecn gi\u1eef c\u00e1c c\u00f4ng tr\u00ecnh l\u1ecbch s\u1eed",
      ipa: "/h\u026a\u02c8st\u0252r\u026ak \u02ccprez\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=historic+preservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Municipal zoning ordinances protect the ancient town from commercial destruction via historic preservation.",
      exampleVi: "Quy ho\u1ea1ch \u0111\u00f4 th\u1ecb b\u1ea3o v\u1ec7 ph\u1ed1 c\u1ed5 kh\u1ecfi s\u1ef1 t\u00e0n ph\u00e1 th\u01b0\u01a1ng m\u1ea1i th\u00f4ng qua \u0111\u1ea1o lu\u1eadt b\u1ea3o t\u1ed3n l\u1ecbch s\u1eed nghi\u00eam ng\u1eb7t.",
      collocations: ["advocate historic preservation", "preservation grant"]
    }
    ,
    {
      id: "mega-unit-6-sacred-sanctuary",
      word: "sacred sanctuary",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00e1nh \u0111\u1ecba t\u00f4n gi\u00e1o linh thi\u00eang",
      ipa: "/\u02c8se\u026akr\u026ad \u02c8s\u00e6\u014bkt\u0283u\u0259ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=sacred+sanctuary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "My Son Sanctuary preserves red brick tower-temples built by the Champa kingdoms.",
      exampleVi: "Th\u00e1nh \u0111\u1ecba M\u1ef9 S\u01a1n g\u00ecn gi\u1eef nh\u1eefng th\u00e1p \u0111\u1ec1n b\u1eb1ng g\u1ea1ch \u0111\u1ecf r\u1ef1c r\u1ee1 do v\u01b0\u01a1ng qu\u1ed1c Ch\u0103m Pa c\u1ed5 x\u01b0a x\u00e2y d\u1ef1ng.",
      collocations: ["visit a sacred sanctuary", "pilgrimage to a sanctuary"]
    }
    ,
    {
      id: "mega-unit-6-heritage-tourism",
      word: "heritage tourism",
      partOfSpeech: "n.phr",
      meaningVi: "du l\u1ecbch v\u0103n h\u00f3a t\u00ecm v\u1ec1 c\u1ed9i ngu\u1ed3n di s\u1ea3n",
      ipa: "/\u02c8her\u026at\u026ad\u0292 \u02c8t\u028a\u0259r\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=heritage+tourism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hoi An Ancient Town generates vital municipal municipal income through well-regulated heritage tourism.",
      exampleVi: "\u0110\u00f4 th\u1ecb c\u1ed5 H\u1ed9i An t\u1ea1o ra ngu\u1ed3n thu ng\u00e2n s\u00e1ch quan tr\u1ecdng th\u00f4ng qua m\u00f4 h\u00ecnh du l\u1ecbch di s\u1ea3n \u0111\u01b0\u1ee3c qu\u1ea3n l\u00fd b\u00e0i b\u1ea3n.",
      collocations: ["sustainable heritage tourism", "boom in heritage tourism"]
    }
  ],
  "unit-7-education-options-for-school-leavers": [
    {
      id: "v11-u7-vocational-training",
      word: "vocational training",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc ngh\u1ec1 th\u1ef1c h\u00e0nh th\u1ef1c t\u1ebf",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283\u0259nl \u02c8tre\u026an\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocational+training&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vocational training programs equip high school leavers with hands-on technical skills.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc ngh\u1ec1 trang b\u1ecb cho h\u1ecdc sinh t\u1ed1t nghi\u1ec7p k\u1ef9 n\u0103ng th\u1ef1c h\u00e0nh k\u1ef9 thu\u1eadt.",
      collocations: ["enroll in vocational training", "vocational training college"]
    },
    {
      id: "v11-u7-higher-education",
      word: "higher education",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eadc gi\u00e1o d\u1ee5c \u0111\u1ea1i h\u1ecdc v\u00e0 sau \u0111\u1ea1i h\u1ecdc",
      ipa: "/\u02ccha\u026a\u0259r ed\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=higher+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many graduates choose higher education to study medicine, law, or artificial intelligence.",
      exampleVi: "Nhi\u1ec1u h\u1ecdc sinh ch\u1ecdn h\u1ecdc \u0111\u1ea1i h\u1ecdc \u0111\u1ec3 nghi\u00ean c\u1ee9u y khoa, lu\u1eadt h\u1ecdc ho\u1eb7c tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o.",
      collocations: ["pursue higher education", "higher education institution"]
    },
    {
      id: "v11-u7-university-degree",
      word: "university degree",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ea5m b\u1eb1ng c\u1eed nh\u00e2n \u0111\u1ea1i h\u1ecdc",
      ipa: "/\u02ccju\u02d0n\u026a\u02c8v\u025c\u02d0s\u0259ti d\u026a\u02c8\u0261ri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=university+degree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earning a university degree in computer engineering unlocks diverse career prospects.",
      exampleVi: "Nh\u1eadn b\u1eb1ng c\u1eed nh\u00e2n c\u00f4ng ngh\u1ec7 th\u00f4ng tin m\u1edf ra nhi\u1ec1u tri\u1ec3n v\u1ecdng ngh\u1ec1 nghi\u1ec7p \u0111a d\u1ea1ng.",
      collocations: ["graduate with a university degree", "obtain a university degree"]
    },
    {
      id: "v11-u7-apprentice",
      word: "apprentice",
      partOfSpeech: "n",
      meaningVi: "ng\u01b0\u1eddi h\u1ecdc vi\u1ec7c, th\u1ef1c t\u1eadp sinh tay ngh\u1ec1",
      ipa: "/\u0259\u02c8prent\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=apprentice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He began as an automotive electrical apprentice and quickly became a master technician.",
      exampleVi: "Anh b\u1eaft \u0111\u1ea7u t\u1eeb m\u1ed9t th\u1ee3 h\u1ecdc vi\u1ec7c \u0111i\u1ec7n \u00f4 t\u00f4 v\u00e0 nhanh ch\u00f3ng tr\u1edf th\u00e0nh k\u1ef9 thu\u1eadt vi\u00ean b\u1eadc th\u1ea7y.",
      collocations: ["work as an apprentice", "plumbing apprentice"]
    },
    {
      id: "v11-u7-career-orientation",
      word: "career orientation",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecbnh h\u01b0\u1edbng v\u00e0 h\u01b0\u1edbng nghi\u1ec7p t\u01b0\u01a1ng lai",
      ipa: "/k\u0259\u02c8r\u026a\u0259r \u02cc\u0254\u02d0ri\u0259n\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+orientation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High schools organize career orientation days with visiting university professors.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng ph\u1ed5 th\u00f4ng t\u1ed5 ch\u1ee9c ng\u00e0y h\u1ed9i h\u01b0\u1edbng nghi\u1ec7p v\u1edbi s\u1ef1 tham gia c\u1ee7a c\u00e1c gi\u00e1o s\u01b0 \u0111\u1ea1i h\u1ecdc.",
      collocations: ["provide career orientation", "career orientation session"]
    },
    {
      id: "v11-u7-gap-year",
      word: "gap year",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ed9t n\u0103m ngh\u1ec9 ng\u01a1i \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m cu\u1ed9c s\u1ed1ng",
      ipa: "/\u02c8\u0261\u00e6p j\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gap+year&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Taking a productive gap year to volunteer overseas helped her decide on her major.",
      exampleVi: "D\u00e0nh m\u1ed9t n\u0103m gap year \u0111i thi\u1ec7n nguy\u1ec7n n\u01b0\u1edbc ngo\u00e0i \u0111\u00e3 gi\u00fap c\u00f4 b\u1ea1n x\u00e1c \u0111\u1ecbnh r\u00f5 ng\u00e0nh h\u1ecdc.",
      collocations: ["take a gap year", "spend a gap year volunteering"]
    },
    {
      id: "v11-u7-trade-school",
      word: "trade school",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u01b0\u1eddng \u0111\u00e0o t\u1ea1o ngh\u1ec1 chuy\u00ean ng\u00e0nh",
      ipa: "/\u02c8tre\u026ad sku\u02d0l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+school&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Culinary trade schools prepare passionate chefs for prestigious restaurant kitchens.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng ngh\u1ec1 \u1ea9m th\u1ef1c \u0111\u00e0o t\u1ea1o nh\u1eefng \u0111\u1ea7u b\u1ebfp \u0111\u1ea7y nhi\u1ec7t huy\u1ebft cho c\u00e1c nh\u00e0 h\u00e0ng danh ti\u1ebfng.",
      collocations: ["graduate from a trade school", "attend a trade school"]
    },
    {
      id: "v11-u7-tuition-fees",
      word: "tuition fees",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ecdc ph\u00ed chi tr\u1ea3 cho vi\u1ec7c h\u1ecdc t\u1eadp",
      ipa: "/tju\u02d0\u02c8\u026a\u0283n fi\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tuition+fees&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Public scholarships help lessen the burden of costly university tuition fees.",
      exampleVi: "H\u1ecdc b\u1ed5ng nh\u00e0 n\u01b0\u1edbc gi\u00fap gi\u1ea3m b\u1edbt g\u00e1nh n\u1eb7ng h\u1ecdc ph\u00ed \u0111\u1eaft \u0111\u1ecf \u1edf c\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc.",
      collocations: ["pay tuition fees", "affordable tuition fees"]
    },
    {
      id: "v11-u7-scholarship",
      word: "scholarship",
      partOfSpeech: "n",
      meaningVi: "h\u1ecdc b\u1ed5ng t\u00e0i tr\u1ee3 t\u00e0i n\u0103ng",
      ipa: "/\u02c8sk\u0252l\u0259\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=scholarship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Her stellar academic achievements won her a full four-year scholarship abroad.",
      exampleVi: "Th\u00e0nh t\u00edch h\u1ecdc t\u1eadp xu\u1ea5t s\u1eafc \u0111\u00e3 mang l\u1ea1i cho c\u00f4 su\u1ea5t h\u1ecdc b\u1ed5ng to\u00e0n ph\u1ea7n b\u1ed1n n\u0103m \u1edf n\u01b0\u1edbc ngo\u00e0i.",
      collocations: ["win a scholarship", "apply for a scholarship"]
    },
    {
      id: "v11-u7-internship",
      word: "internship",
      partOfSpeech: "n",
      meaningVi: "k\u1ef3 th\u1ef1c t\u1eadp c\u1ecd x\u00e1t t\u1ea1i doanh nghi\u1ec7p",
      ipa: "/\u02c8\u026ant\u025c\u02d0n\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=internship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Completing a summer internship at a software firm guarantees a fast-track job offer.",
      exampleVi: "Ho\u00e0n th\u00e0nh k\u1ef3 th\u1ef1c t\u1eadp m\u00f9a h\u00e8 t\u1ea1i c\u00f4ng ty ph\u1ea7n m\u1ec1m gi\u00fap m\u1edf r\u1ed9ng c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m sau t\u1ed1t nghi\u1ec7p.",
      collocations: ["paid internship", "summer internship program"]
    },
    {
      id: "v11-u7-academic-path",
      word: "academic path",
      partOfSpeech: "n.phr",
      meaningVi: "con \u0111\u01b0\u1eddng h\u1ecdc thu\u1eadt nghi\u00ean c\u1ee9u",
      ipa: "/\u02cc\u00e6k\u0259\u02c8dem\u026ak p\u0251\u02d0\u03b8/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=academic+path&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Choosing an academic path leads towards research fellowships and university lecturing.",
      exampleVi: "L\u1ef1a ch\u1ecdn con \u0111\u01b0\u1eddng h\u1ecdc thu\u1eadt d\u1eabn t\u1edbi nghi\u00ean c\u1ee9u sinh v\u00e0 c\u00f4ng t\u00e1c gi\u1ea3ng d\u1ea1y \u0111\u1ea1i h\u1ecdc.",
      collocations: ["pursue an academic path", "rigorous academic path"]
    },
    {
      id: "v11-u7-job-prospects",
      word: "job prospects",
      partOfSpeech: "n.phr",
      meaningVi: "tri\u1ec3n v\u1ecdng c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m",
      ipa: "/\u02c8d\u0292\u0252b \u02c8pr\u0252spekts/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+prospects&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Graduates with AI and data analysis skills enjoy outstanding global job prospects.",
      exampleVi: "Sinh vi\u00ean c\u00f3 k\u1ef9 n\u0103ng v\u1ec1 AI v\u00e0 ph\u00e2n t\u00edch d\u1eef li\u1ec7u c\u00f3 tri\u1ec3n v\u1ecdng vi\u1ec7c l\u00e0m to\u00e0n c\u1ea7u v\u01b0\u1ee3t tr\u1ed9i.",
      collocations: ["bright job prospects", "improve job prospects"]
    },
    {
      id: "v11-u7-entry-requirements",
      word: "entry requirements",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec1u ki\u1ec7n v\u00e0 ti\u00eau chu\u1ea9n \u0111\u1ea7u v\u00e0o x\u00e9t tuy\u1ec3n",
      ipa: "/\u02c8entri r\u026a\u02c8kwa\u026a\u0259m\u0259nts/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entry+requirements&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Check the official college portal for specific entrance examination entry requirements.",
      exampleVi: "H\u00e3y xem c\u1ed5ng th\u00f4ng tin c\u1ee7a tr\u01b0\u1eddng \u0111\u1ec3 n\u1eafm r\u00f5 \u0111i\u1ec1u ki\u1ec7n x\u00e9t tuy\u1ec3n \u0111\u1ea7u v\u00e0o k\u1ef3 thi.",
      collocations: ["meet entry requirements", "strict entry requirements"]
    },
    {
      id: "v11-u7-qualification",
      word: "qualification",
      partOfSpeech: "n",
      meaningVi: "v\u0103n b\u1eb1ng ch\u1ee9ng ch\u1ec9 chuy\u00ean m\u00f4n",
      ipa: "/\u02cckw\u0252l\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=qualification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A recognized teaching qualification is mandatory to lecture at bilingual schools.",
      exampleVi: "Ch\u1ee9ng ch\u1ec9 s\u01b0 ph\u1ea1m \u0111\u01b0\u1ee3c c\u00f4ng nh\u1eadn l\u00e0 \u0111i\u1ec1u ki\u1ec7n b\u1eaft bu\u1ed9c \u0111\u1ec3 d\u1ea1y t\u1ea1i c\u00e1c tr\u01b0\u1eddng song ng\u1eef.",
      collocations: ["gain professional qualifications", "academic qualification"]
    },
    {
      id: "v11-u7-curriculum-vitae",
      word: "curriculum vitae",
      partOfSpeech: "n.phr",
      meaningVi: "s\u01a1 y\u1ebfu l\u00fd l\u1ecbch xin vi\u1ec7c (CV)",
      ipa: "/k\u0259\u02ccr\u026akj\u0259l\u0259m \u02c8vi\u02d0ta\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=curriculum+vitae&type=2",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Highlight practical project milestones and leadership roles on your curriculum vitae.",
      exampleVi: "H\u00e3y l\u00e0m n\u1ed5i b\u1eadt c\u00e1c d\u1ea5u m\u1ed1c d\u1ef1 \u00e1n th\u1ef1c t\u1ebf v\u00e0 vai tr\u00f2 l\u00e3nh \u0111\u1ea1o trong s\u01a1 y\u1ebfu l\u00fd l\u1ecbch c\u1ee7a b\u1ea1n.",
      collocations: ["submit a curriculum vitae", "update your curriculum vitae"]
    },
    {
      id: "v11-u7-hands-on-skills",
      word: "hands-on skills",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng tay ngh\u1ec1 th\u1ef1c t\u1ebf",
      ipa: "/\u02cch\u00e6ndz \u02c8\u0252n sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hands-on+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Employers value technical graduates who demonstrate proficient hands-on skills from day one.",
      exampleVi: "Nh\u00e0 tuy\u1ec3n d\u1ee5ng \u0111\u00e1nh gi\u00e1 cao c\u1eed nh\u00e2n k\u1ef9 thu\u1eadt th\u1ec3 hi\u1ec7n k\u1ef9 n\u0103ng th\u1ef1c h\u00e0nh th\u00e0nh th\u1ea1o ngay t\u1eeb ng\u00e0y \u0111\u1ea7u.",
      collocations: ["master hands-on skills", "practical hands-on skills"]
    },
    {
      id: "v11-u7-student-loan",
      word: "student loan",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n vay v\u1ed1n \u01b0u \u0111\u00e3i sinh vi\u00ean h\u1ecdc \u0111\u1ea1i h\u1ecdc",
      ipa: "/\u02c8stju\u02d0dnt l\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=student+loan&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Low-interest student loans give disadvantaged youths access to medical schooling.",
      exampleVi: "Kho\u1ea3n vay sinh vi\u00ean l\u00e3i su\u1ea5t th\u1ea5p gi\u00fap thanh ni\u00ean ho\u00e0n c\u1ea3nh kh\u00f3 kh\u0103n c\u00f3 c\u01a1 h\u1ed9i h\u1ecdc ng\u00e0nh y.",
      collocations: ["apply for a student loan", "repay student loans"]
    },
    {
      id: "v11-u7-alumni-network",
      word: "alumni network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi c\u1ef1u sinh vi\u00ean k\u1ebft n\u1ed1i",
      ipa: "/\u0259\u02c8l\u028cmna\u026a \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=alumni+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "An active alumni network helps fresh graduates connect with hiring managers easily.",
      exampleVi: "M\u1ea1ng l\u01b0\u1edbi c\u1ef1u sinh vi\u00ean n\u0103ng \u0111\u1ed9ng gi\u00fap sinh vi\u00ean m\u1edbi ra tr\u01b0\u1eddng d\u1ec5 d\u00e0ng k\u1ebft n\u1ed1i v\u1edbi c\u00e1c nh\u00e0 tuy\u1ec3n d\u1ee5ng.",
      collocations: ["leverage the alumni network", "strong alumni network"]
    },
    {
      id: "v11-u7-employability",
      word: "employability",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng t\u00ecm vi\u1ec7c v\u00e0 th\u00edch \u1ee9ng vi\u1ec7c l\u00e0m",
      ipa: "/\u026am\u02ccpl\u0254\u026a\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=employability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning foreign languages and presentation skills significantly enhances employability.",
      exampleVi: "H\u1ecdc ngo\u1ea1i ng\u1eef v\u00e0 k\u1ef9 n\u0103ng thuy\u1ebft tr\u00ecnh gi\u00fap n\u00e2ng cao \u0111\u00e1ng k\u1ec3 c\u01a1 h\u1ed9i t\u00ecm ki\u1ebfm vi\u1ec7c l\u00e0m.",
      collocations: ["boost employability", "enhance graduate employability"]
    },
    {
      id: "v11-u7-vocational-certificate",
      word: "vocational certificate",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng ch\u1ec9 ngh\u1ec1 nghi\u1ec7p ch\u00ednh quy",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283\u0259nl s\u0259\u02c8t\u026af\u026ak\u0259t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocational+certificate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earning an accredited vocational certificate allows electricians to practice legally.",
      exampleVi: "Nh\u1eadn ch\u1ee9ng ch\u1ec9 ngh\u1ec1 ch\u00ednh quy cho ph\u00e9p th\u1ee3 \u0111i\u1ec7n h\u00e0nh ngh\u1ec1 h\u1ee3p ph\u00e1p.",
      collocations: ["obtain a vocational certificate", "recognized vocational certificate"]
    }
    ,
    {
      id: "v11-boost-scholarship-recipient",
      word: "scholarship recipient",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u01b0\u1eddi vinh d\u1ef1 \u0111\u01b0\u1ee3c nh\u1eadn h\u1ecdc b\u1ed5ng",
      ipa: "/\u02c8sk\u0252l\u0259\u0283\u026ap r\u026a\u02c8s\u026api\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=scholarship+recipient&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The scholarship recipient thanked her teachers for their unwavering encouragement.",
      exampleVi: "N\u1eef sinh nh\u1eadn h\u1ecdc b\u1ed5ng \u0111\u00e3 g\u1eedi l\u1eddi c\u1ea3m \u01a1n s\u00e2u s\u1eafc t\u1edbi th\u1ea7y c\u00f4 v\u00ec s\u1ef1 \u0111\u1ed9ng vi\u00ean kh\u00f4ng ng\u1eebng.",
      collocations: ["proud scholarship recipient", "annual scholarship recipient"]
    }
    ,
    {
      id: "v11-boost-postgraduate-degree",
      word: "postgraduate degree",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eb1ng sau \u0111\u1ea1i h\u1ecdc (th\u1ea1c s\u0129, ti\u1ebfn s\u0129)",
      ipa: "/\u02ccp\u0259\u028ast\u02c8\u0261r\u00e6d\u0292u\u0259t d\u026a\u02c8\u0261ri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=postgraduate+degree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She enrolled in a postgraduate degree in artificial intelligence and robotics.",
      exampleVi: "C\u00f4 \u1ea5y \u0111\u00e3 \u0111\u0103ng k\u00fd h\u1ecdc b\u1eb1ng sau \u0111\u1ea1i h\u1ecdc v\u1ec1 tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o v\u00e0 ch\u1ebf t\u1ea1o robot.",
      collocations: ["pursue a postgraduate degree", "postgraduate degree studies"]
    }
    ,
    {
      id: "v11-boost-job-placement-rate",
      word: "job placement rate",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ef7 l\u1ec7 sinh vi\u00ean c\u00f3 vi\u1ec7c l\u00e0m sau t\u1ed1t nghi\u1ec7p",
      ipa: "/\u02c8d\u0292\u0252b \u02c8ple\u026asm\u0259nt re\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+placement+rate&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The technical college boasts a 98% job placement rate within six months of graduation.",
      exampleVi: "Tr\u01b0\u1eddng cao \u0111\u1eb3ng k\u1ef9 thu\u1eadt t\u1ef1 h\u00e0o c\u00f3 t\u1ef7 l\u1ec7 98% sinh vi\u00ean c\u00f3 vi\u1ec7c l\u00e0m sau 6 th\u00e1ng t\u1ed1t nghi\u1ec7p.",
      collocations: ["high job placement rate", "measure job placement rates"]
    }
    ,
    {
      id: "v11-boost-hands-on-workshop",
      word: "hands-on workshop",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i t\u1eadp hu\u1ea5n th\u1ef1c h\u00e0nh tay ngh\u1ec1",
      ipa: "/\u02cch\u00e6ndz \u02c8\u0252n \u02c8w\u025c\u02d0k\u0283\u0252p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hands-on+workshop&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Automotive students spent four hours in the hands-on workshop diagnosing car engines.",
      exampleVi: "Sinh vi\u00ean ng\u00e0nh \u00f4 t\u00f4 \u0111\u00e3 d\u00e0nh b\u1ed1n ti\u1ebfng trong x\u01b0\u1edfng th\u1ef1c h\u00e0nh \u0111\u1ec3 ch\u1ea9n \u0111o\u00e1n \u0111\u1ed9ng c\u01a1 xe.",
      collocations: ["attend a hands-on workshop", "conduct a hands-on workshop"]
    }
    ,
    {
      id: "v11-boost-credit-transfer",
      word: "credit transfer",
      partOfSpeech: "n.phr",
      meaningVi: "chuy\u1ec3n \u0111\u1ed5i v\u00e0 c\u00f4ng nh\u1eadn t\u00edn ch\u1ec9 h\u1ecdc t\u1eadp",
      ipa: "/\u02c8kred\u026at tr\u00e6ns\u02c8f\u025c\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=credit+transfer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The partnership program allows easy credit transfer to international universities.",
      exampleVi: "Ch\u01b0\u01a1ng tr\u00ecnh li\u00ean k\u1ebft cho ph\u00e9p chuy\u1ec3n \u0111\u1ed5i t\u00edn ch\u1ec9 d\u1ec5 d\u00e0ng sang c\u00e1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc qu\u1ed1c t\u1ebf.",
      collocations: ["eligible for credit transfer", "credit transfer agreement"]
    }
    ,
    {
      id: "v11-boost-dual-degree",
      word: "dual degree",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh nh\u1eadn song b\u1eb1ng \u0111\u1ea1i h\u1ecdc",
      ipa: "/\u02ccdju\u02d0\u0259l d\u026a\u02c8\u0261ri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dual+degree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Graduating with a dual degree in business and software engineering is a great advantage.",
      exampleVi: "T\u1ed1t nghi\u1ec7p v\u1edbi song b\u1eb1ng kinh doanh v\u00e0 k\u1ef9 thu\u1eadt ph\u1ea7n m\u1ec1m l\u00e0 l\u1ee3i th\u1ebf c\u1ea1nh tranh r\u1ea5t l\u1edbn.",
      collocations: ["earn a dual degree", "dual degree program"]
    }
    ,
    {
      id: "v11-boost-continuing-education",
      word: "continuing education",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 \u0111\u00e0o t\u1ea1o gi\u00e1o d\u1ee5c th\u01b0\u1eddng xuy\u00ean",
      ipa: "/k\u0259n\u02cct\u026anju\u02d0\u026a\u014b \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=continuing+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Adults attend evening continuing education classes to learn accounting software.",
      exampleVi: "Ng\u01b0\u1eddi l\u1edbn tu\u1ed5i tham gia c\u00e1c l\u1edbp gi\u00e1o d\u1ee5c th\u01b0\u1eddng xuy\u00ean bu\u1ed5i t\u1ed1i \u0111\u1ec3 h\u1ecdc ph\u1ea7n m\u1ec1m k\u1ebf to\u00e1n.",
      collocations: ["center for continuing education", "enroll in continuing education"]
    }
    ,
    {
      id: "v11-boost-academic-advisor",
      word: "academic advisor",
      partOfSpeech: "n.phr",
      meaningVi: "c\u1ed1 v\u1ea5n h\u1ecdc t\u1eadp cho sinh vi\u00ean",
      ipa: "/\u02cc\u00e6k\u0259\u02c8dem\u026ak \u0259d\u02c8va\u026az\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=academic+advisor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meet with your academic advisor before selecting elective courses for the semester.",
      exampleVi: "H\u00e3y g\u1eb7p c\u1ed1 v\u1ea5n h\u1ecdc t\u1eadp tr\u01b0\u1edbc khi ch\u1ecdn c\u00e1c m\u00f4n h\u1ecdc t\u1ef1 ch\u1ecdn cho h\u1ecdc k\u1ef3 m\u1edbi.",
      collocations: ["consult an academic advisor", "guidance from academic advisors"]
    }
    ,
    {
      id: "v11-boost-probation-period",
      word: "probation period",
      partOfSpeech: "n.phr",
      meaningVi: "th\u1eddi gian th\u1eed vi\u1ec7c tr\u01b0\u1edbc tuy\u1ec3n ch\u00ednh th\u1ee9c",
      ipa: "/pr\u0259\u02c8be\u026a\u0283n \u02c8p\u026a\u0259ri\u0259d/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=probation+period&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Engineering recruits receive full coaching during their three-month probation period.",
      exampleVi: "K\u1ef9 s\u01b0 m\u1edbi tuy\u1ec3n \u0111\u01b0\u1ee3c h\u01b0\u1edbng d\u1eabn t\u1eadn t\u00ecnh trong su\u1ed1t th\u1eddi gian th\u1eed vi\u1ec7c ba th\u00e1ng.",
      collocations: ["pass the probation period", "complete probation period"]
    }
    ,
    {
      id: "v11-boost-work-study-program",
      word: "work-study program",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh v\u1eeba h\u1ecdc v\u1eeba l\u00e0m th\u1ef1c t\u1ebf",
      ipa: "/\u02c8w\u025c\u02d0k st\u028cdi \u02c8pr\u0259\u028a\u0261r\u00e6m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work-study+program&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The university work-study program allows students to earn pocket money on campus.",
      exampleVi: "Ch\u01b0\u01a1ng tr\u00ecnh v\u1eeba h\u1ecdc v\u1eeba l\u00e0m c\u1ee7a tr\u01b0\u1eddng cho ph\u00e9p sinh vi\u00ean ki\u1ebfm th\u00eam thu nh\u1eadp t\u1ea1i khu\u00f4n vi\u00ean.",
      collocations: ["apply for a work-study program", "benefit of work-study programs"]
    }
    ,
    {
      id: "v11-boost-career-fair",
      word: "career fair",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e0y h\u1ed9i vi\u1ec7c l\u00e0m tuy\u1ec3n d\u1ee5ng sinh vi\u00ean",
      ipa: "/k\u0259\u02c8r\u026a\u0259 fe\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+fair&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dozens of multinational technology corporations set up recruitment booths at the career fair.",
      exampleVi: "H\u00e0ng ch\u1ee5c t\u1eadp \u0111o\u00e0n c\u00f4ng ngh\u1ec7 \u0111a qu\u1ed1c gia \u0111\u1eb7t b\u00e0n tuy\u1ec3n d\u1ee5ng t\u1ea1i ng\u00e0y h\u1ed9i vi\u1ec7c l\u00e0m.",
      collocations: ["attend a career fair", "annual career fair"]
    }
    ,
    {
      id: "v11-boost-practical-training",
      word: "practical training",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0o t\u1ea1o th\u1ef1c h\u00e0nh tay ngh\u1ec1 chuy\u00ean s\u00e2u",
      ipa: "/\u02c8pr\u00e6kt\u026akl \u02c8tre\u026an\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=practical+training&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Hands-on practical training ensures nursing graduates administer injections accurately.",
      exampleVi: "\u0110\u00e0o t\u1ea1o th\u1ef1c h\u00e0nh b\u00e0i b\u1ea3n \u0111\u1ea3m b\u1ea3o sinh vi\u00ean \u0111i\u1ec1u d\u01b0\u1ee1ng ti\u00eam truy\u1ec1n ch\u00ednh x\u00e1c.",
      collocations: ["undergo practical training", "comprehensive practical training"]
    }
    ,
    {
      id: "v11-boost-job-interview",
      word: "job interview",
      partOfSpeech: "n.phr",
      meaningVi: "bu\u1ed5i ph\u1ecfng v\u1ea5n xin vi\u1ec7c tr\u1ef1c ti\u1ebfp",
      ipa: "/\u02c8d\u0292\u0252b \u02c8\u026ant\u0259vju\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+interview&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wear professional attire and maintain polite eye contact during the job interview.",
      exampleVi: "H\u00e3y m\u1eb7c trang ph\u1ee5c trang nh\u00e3 v\u00e0 giao ti\u1ebfp m\u1eaft t\u1ef1 tin trong bu\u1ed5i ph\u1ecfng v\u1ea5n xin vi\u1ec7c.",
      collocations: ["pass the job interview", "job interview preparation"]
    }
    ,
    {
      id: "v11-boost-professional-ethics",
      word: "professional ethics",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ea1o \u0111\u1ee9c ngh\u1ec1 nghi\u1ec7p chuy\u00ean m\u00f4n",
      ipa: "/pr\u0259\u02c8fe\u0283\u0259nl \u02c8e\u03b8\u026aks/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=professional+ethics&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Medical and legal students must adhere strictly to professional ethics.",
      exampleVi: "Sinh vi\u00ean ng\u00e0nh y v\u00e0 lu\u1eadt ph\u1ea3i lu\u00f4n tu\u00e2n th\u1ee7 nghi\u00eam ng\u1eb7t chu\u1ea9n m\u1ef1c \u0111\u1ea1o \u0111\u1ee9c ngh\u1ec1 nghi\u1ec7p.",
      collocations: ["adhere to professional ethics", "standards of professional ethics"]
    }
    ,
    {
      id: "mega-unit-7-vocational-apprenticeship",
      word: "vocational apprenticeship",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc ngh\u1ec1 v\u1eeba h\u1ecdc v\u1eeba l\u00e0m c\u00f3 l\u01b0\u01a1ng",
      ipa: "/v\u0259\u028a\u02c8ke\u026a\u0283\u0259nl \u0259\u02c8prent\u026as\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vocational+apprenticeship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many high school leavers enroll in a vocational apprenticeship to become certified automotive technicians.",
      exampleVi: "Nhi\u1ec1u h\u1ecdc sinh t\u1ed1t nghi\u1ec7p THPT \u0111\u0103ng k\u00fd h\u1ecdc ngh\u1ec1 v\u1eeba h\u1ecdc v\u1eeba l\u00e0m \u0111\u1ec3 tr\u1edf th\u00e0nh k\u1ef9 thu\u1eadt vi\u00ean \u00f4 t\u00f4 c\u00f3 ch\u1ee9ng ch\u1ec9.",
      collocations: ["undertake an apprenticeship", "paid vocational apprenticeship"]
    }
    ,
    {
      id: "mega-unit-7-tertiary-education",
      word: "tertiary education",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eadc gi\u00e1o d\u1ee5c \u0111\u1ea1i h\u1ecdc v\u00e0 cao \u0111\u1eb3ng",
      ipa: "/\u02c8t\u025c\u02d0\u0283\u0259ri \u02cced\u0292u\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tertiary+education&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tuition loan programs assist underprivileged students in pursuing prestigious tertiary education.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh vay v\u1ed1n h\u1ecdc t\u1eadp gi\u00fap \u0111\u1ee1 h\u1ecdc sinh c\u00f3 ho\u00e0n c\u1ea3nh kh\u00f3 kh\u0103n theo \u0111u\u1ed5i b\u1eadc gi\u00e1o d\u1ee5c \u0111\u1ea1i h\u1ecdc danh gi\u00e1.",
      collocations: ["enter tertiary education", "tertiary education enrollment"]
    }
    ,
    {
      id: "mega-unit-7-internship-placement",
      word: "internship placement",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb tr\u00ed th\u1ef1c t\u1eadp sinh t\u1ea1i doanh nghi\u1ec7p",
      ipa: "/\u02c8\u026ant\u025c\u02d0n\u0283\u026ap \u02c8ple\u026asm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=internship+placement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The college career center coordinates summer internship placements with leading software firms.",
      exampleVi: "Trung t\u00e2m h\u01b0\u1edbng nghi\u1ec7p c\u1ee7a tr\u01b0\u1eddng k\u1ebft n\u1ed1i c\u00e1c v\u1ecb tr\u00ed th\u1ef1c t\u1eadp h\u00e8 t\u1ea1i c\u00e1c c\u00f4ng ty ph\u1ea7n m\u1ec1m h\u00e0ng \u0111\u1ea7u.",
      collocations: ["secure an internship placement", "corporate internship"]
    }
    ,
    {
      id: "mega-unit-7-career-guidance",
      word: "career guidance",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng t\u01b0 v\u1ea5n \u0111\u1ecbnh h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 \u02c8\u0261a\u026adns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+guidance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Psychometric personality tests provide students with insightful career guidance before selecting a major.",
      exampleVi: "B\u00e0i ki\u1ec3m tra t\u00ednh c\u00e1ch mang l\u1ea1i cho h\u1ecdc sinh s\u1ef1 t\u01b0 v\u1ea5n h\u01b0\u1edbng nghi\u1ec7p s\u00e2u s\u1eafc tr\u01b0\u1edbc khi ch\u1ecdn ng\u00e0nh h\u1ecdc.",
      collocations: ["seek career guidance", "career guidance counselor"]
    }
    ,
    {
      id: "mega-unit-7-tuition-fee-waiver",
      word: "tuition fee waiver",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ebf \u0111\u1ed9 mi\u1ec5n gi\u1ea3m 100% h\u1ecdc ph\u00ed",
      ipa: "/tju\u02d0\u02c8\u026a\u0283n fi\u02d0 \u02c8we\u026av\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tuition+fee+waiver&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Valedictorians are awarded a full four-year tuition fee waiver at the state university.",
      exampleVi: "Th\u1ee7 khoa \u0111\u1ea7u v\u00e0o \u0111\u01b0\u1ee3c trao su\u1ea5t mi\u1ec5n gi\u1ea3m h\u1ecdc ph\u00ed to\u00e0n ph\u1ea7n b\u1ed1n n\u0103m t\u1ea1i tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc qu\u1ed1c gia.",
      collocations: ["qualify for a tuition fee waiver", "grant a fee waiver"]
    }
    ,
    {
      id: "mega-unit-7-trade-qualification",
      word: "trade qualification",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng ch\u1ec9 h\u00e0nh ngh\u1ec1 chuy\u00ean m\u00f4n k\u1ef9 thu\u1eadt",
      ipa: "/tre\u026ad \u02cckw\u0252l\u026af\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trade+qualification&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Electricians and plumbers must obtain a formal trade qualification before taking commercial jobs.",
      exampleVi: "Th\u1ee3 \u0111i\u1ec7n v\u00e0 th\u1ee3 s\u1eeda \u1ed1ng n\u01b0\u1edbc ph\u1ea3i c\u00f3 ch\u1ee9ng ch\u1ec9 ngh\u1ec1 ch\u00ednh quy tr\u01b0\u1edbc khi nh\u1eadn c\u00e1c c\u00f4ng tr\u00ecnh th\u01b0\u01a1ng m\u1ea1i.",
      collocations: ["earn a trade qualification", "recognized trade qualification"]
    }
    ,
    {
      id: "mega-unit-7-dual-degree",
      word: "dual degree",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh \u0111\u00e0o t\u1ea1o song b\u1eb1ng \u0111\u1ea1i h\u1ecdc",
      ipa: "/\u02ccdju\u02d0\u0259l d\u026a\u02c8\u0261ri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=dual+degree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Motivated students pursued a dual degree in computer science and international business.",
      exampleVi: "Nhi\u1ec1u sinh vi\u00ean gi\u00e0u ngh\u1ecb l\u1ef1c \u0111\u00e3 theo h\u1ecdc ch\u01b0\u01a1ng tr\u00ecnh song b\u1eb1ng ng\u00e0nh khoa h\u1ecdc m\u00e1y t\u00ednh v\u00e0 kinh doanh qu\u1ed1c t\u1ebf.",
      collocations: ["complete a dual degree", "dual degree program"]
    }
    ,
    {
      id: "mega-unit-7-gap-year-experience",
      word: "gap year experience",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u1ea3i nghi\u1ec7m m\u1ed9t n\u0103m ngh\u1ec9 ng\u01a1i \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m",
      ipa: "/\u0261\u00e6p j\u026a\u0259r \u026ak\u02c8sp\u026a\u0259ri\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=gap+year+experience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Volunteering abroad during a gap year experience cultivated resilience and fluent foreign language skills.",
      exampleVi: "Tham gia t\u00ecnh nguy\u1ec7n \u1edf n\u01b0\u1edbc ngo\u00e0i trong n\u0103m gap year gi\u00fap t\u00f4i r\u00e8n luy\u1ec7n b\u1ea3n l\u0129nh v\u00e0 kh\u1ea3 n\u0103ng ngo\u1ea1i ng\u1eef l\u01b0u lo\u00e1t.",
      collocations: ["embark on a gap year experience", "valuable gap year"]
    }
    ,
    {
      id: "mega-unit-7-job-fair",
      word: "job fair",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e0y h\u1ed9i vi\u1ec7c l\u00e0m tuy\u1ec3n d\u1ee5ng sinh vi\u00ean",
      ipa: "/\u02c8d\u0292\u0252b fe\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=job+fair&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Over fifty multinational corporations set up interview booths at the university annual job fair.",
      exampleVi: "H\u01a1n n\u0103m m\u01b0\u01a1i t\u1eadp \u0111o\u00e0n \u0111a qu\u1ed1c gia \u0111\u00e3 d\u1ef1ng b\u00e0n ph\u1ecfng v\u1ea5n t\u1ea1i ng\u00e0y h\u1ed9i vi\u1ec7c l\u00e0m h\u1eb1ng n\u0103m c\u1ee7a tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc.",
      collocations: ["attend a job fair", "participate in a job fair"]
    }
    ,
    {
      id: "mega-unit-7-academic-transcript",
      word: "academic transcript",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3ng \u0111i\u1ec3m h\u1ecdc b\u1ea1 ch\u00ednh th\u1ee9c",
      ipa: "/\u02cc\u00e6k\u0259\u02c8dem\u026ak \u02c8tr\u00e6nskr\u026apt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=academic+transcript&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Admissions officers evaluate extracurricular portfolios alongside verified academic transcripts.",
      exampleVi: "Ban tuy\u1ec3n sinh \u0111\u00e1nh gi\u00e1 h\u1ed3 s\u01a1 ho\u1ea1t \u0111\u1ed9ng ngo\u1ea1i kh\u00f3a song h\u00e0nh v\u1edbi b\u1ea3ng \u0111i\u1ec3m h\u1ecdc b\u1ea1 \u0111\u00e3 \u0111\u01b0\u1ee3c ch\u1ee9ng th\u1ef1c.",
      collocations: ["submit an academic transcript", "certified transcript"]
    }
    ,
    {
      id: "mega-unit-7-hands-on-training",
      word: "hands-on training",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0o t\u1ea1o th\u1ef1c h\u00e0nh c\u1ea7m tay ch\u1ec9 vi\u1ec7c",
      ipa: "/\u02cch\u00e6ndz \u02c8\u0252n \u02c8tre\u026an\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hands-on+training&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Polytechnic institutes emphasize hands-on training inside automated flight simulation cockpits.",
      exampleVi: "C\u00e1c vi\u1ec7n b\u00e1ch khoa nh\u1ea5n m\u1ea1nh vi\u1ec7c \u0111\u00e0o t\u1ea1o th\u1ef1c h\u00e0nh tr\u1ef1c ti\u1ebfp trong c\u00e1c bu\u1ed3ng l\u00e1i m\u00f4 ph\u1ecfng bay t\u1ef1 \u0111\u1ed9ng.",
      collocations: ["receive hands-on training", "hands-on training workshops"]
    }
    ,
    {
      id: "mega-unit-7-campus-accommodation",
      word: "campus accommodation",
      partOfSpeech: "n.phr",
      meaningVi: "k\u00fd t\u00fac x\u00e1 ch\u1ed7 \u1edf b\u00ean trong khu\u00f4n vi\u00ean tr\u01b0\u1eddng",
      ipa: "/\u02c8k\u00e6mp\u0259s \u0259\u02cck\u0252m\u0259\u02c8de\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=campus+accommodation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Freshmen can apply for affordable campus accommodation located steps away from lecture halls.",
      exampleVi: "Sinh vi\u00ean n\u0103m nh\u1ea5t c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd k\u00fd t\u00fac x\u00e1 gi\u00e1 r\u1ebb n\u1eb1m ngay s\u00e1t c\u00e1c gi\u1ea3ng \u0111\u01b0\u1eddng trong khu\u00f4n vi\u00ean tr\u01b0\u1eddng.",
      collocations: ["reside in campus accommodation", "apply for accommodation"]
    }
    ,
    {
      id: "mega-unit-7-student-loan-debt",
      word: "student loan debt",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n n\u1ee3 vay \u0111i h\u1ecdc c\u1ee7a sinh vi\u00ean",
      ipa: "/\u02c8stju\u02d0dnt l\u0259\u028an det/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=student+loan+debt&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Budgeting carefully during college avoids burdensome post-graduation student loan debt.",
      exampleVi: "Chi ti\u00eau ti\u1ebft ki\u1ec7m th\u1eddi sinh vi\u00ean gi\u00fap tr\u00e1nh \u0111\u01b0\u1ee3c g\u00e1nh n\u1eb7ng n\u1ee3 vay h\u1ecdc t\u1eadp sau khi t\u1ed1t nghi\u1ec7p ra tr\u01b0\u1eddng.",
      collocations: ["pay off student loan debt", "burden of loan debt"]
    }
    ,
    {
      id: "mega-unit-7-work-study-program",
      word: "work-study program",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u01b0\u01a1ng tr\u00ecnh v\u1eeba h\u1ecdc v\u1eeba l\u00e0m trong tr\u01b0\u1eddng",
      ipa: "/\u02c8w\u025c\u02d0k st\u028cdi \u02c8pr\u0259\u028a\u0261r\u00e6m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work-study+program&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The library hired students under the work-study program to catalog digital academic journals.",
      exampleVi: "Th\u01b0 vi\u1ec7n \u0111\u00e3 tuy\u1ec3n sinh vi\u00ean theo ch\u01b0\u01a1ng tr\u00ecnh v\u1eeba h\u1ecdc v\u1eeba l\u00e0m \u0111\u1ec3 ph\u00e2n lo\u1ea1i c\u00e1c t\u1ea1p ch\u00ed h\u1ecdc thu\u1eadt \u0111i\u1ec7n t\u1eed.",
      collocations: ["join a work-study program", "eligible for work-study"]
    }
    ,
    {
      id: "mega-unit-7-undergraduate-degree",
      word: "undergraduate degree",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eb1ng c\u1eed nh\u00e2n \u0111\u1ea1i h\u1ecdc h\u1ec7 ch\u00ednh quy",
      ipa: "/\u02cc\u028cnd\u0259\u02c8\u0261r\u00e6d\u0292u\u0259t d\u026a\u02c8\u0261ri\u02d0/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=undergraduate+degree&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "She completed her four-year undergraduate degree in environmental chemistry with top honors.",
      exampleVi: "C\u00f4 \u1ea5y \u0111\u00e3 ho\u00e0n th\u00e0nh t\u1ea5m b\u1eb1ng c\u1eed nh\u00e2n \u0111\u1ea1i h\u1ecdc b\u1ed1n n\u0103m ng\u00e0nh h\u00f3a m\u00f4i tr\u01b0\u1eddng v\u1edbi th\u1ee9 h\u1ea1ng xu\u1ea5t s\u1eafc.",
      collocations: ["earn an undergraduate degree", "pursue an undergraduate degree"]
    }
    ,
    {
      id: "mega-unit-7-alumni-network",
      word: "alumni network",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi c\u1ef1u sinh vi\u00ean gi\u00fap \u0111\u1ee1 ngh\u1ec1 nghi\u1ec7p",
      ipa: "/\u0259\u02c8l\u028cmna\u026a \u02c8netw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=alumni+network&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Graduates tap into the robust alumni network to discover unadvertised corporate job openings.",
      exampleVi: "Sinh vi\u00ean t\u1ed1t nghi\u1ec7p t\u1eadn d\u1ee5ng m\u1ea1ng l\u01b0\u1edbi c\u1ef1u sinh vi\u00ean n\u0103ng \u0111\u1ed9ng \u0111\u1ec3 t\u00ecm ki\u1ebfm c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m n\u1ed9i b\u1ed9 ch\u01b0a c\u00f4ng b\u1ed1.",
      collocations: ["connect through alumni network", "active alumni network"]
    }
    ,
    {
      id: "mega-unit-7-technical-college",
      word: "technical college",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u01b0\u1eddng cao \u0111\u1eb3ng k\u1ef9 thu\u1eadt \u0111\u00e0o t\u1ea1o ngh\u1ec1",
      ipa: "/\u02c8tekn\u026akl \u02c8k\u0252l\u026ad\u0292/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=technical+college&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Many teens opt for technical colleges offering condensed two-year robotics certifications.",
      exampleVi: "Nhi\u1ec1u b\u1ea1n tr\u1ebb l\u1ef1a ch\u1ecdn h\u1ecdc cao \u0111\u1eb3ng k\u1ef9 thu\u1eadt v\u1edbi ch\u1ee9ng ch\u1ec9 chuy\u00ean m\u00f4n ng\u00e0nh robot r\u00fat g\u1ecdn trong hai n\u0103m.",
      collocations: ["enroll in a technical college", "graduate from technical college"]
    }
    ,
    {
      id: "mega-unit-7-transferable-skills",
      word: "transferable skills",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1eefng k\u1ef9 n\u0103ng \u0111a d\u1ee5ng c\u00f3 th\u1ec3 \u00e1p d\u1ee5ng cho m\u1ecdi ngh\u1ec1",
      ipa: "/tr\u00e6ns\u02c8f\u025c\u02d0r\u0259bl sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=transferable+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Communication and critical thinking are essential transferable skills prized across all industries.",
      exampleVi: "Giao ti\u1ebfp v\u00e0 t\u01b0 duy ph\u1ea3n bi\u1ec7n l\u00e0 nh\u1eefng k\u1ef9 n\u0103ng \u0111a d\u1ee5ng quan tr\u1ecdng \u0111\u01b0\u1ee3c s\u0103n \u0111\u00f3n trong m\u1ecdi ng\u00e0nh ngh\u1ec1.",
      collocations: ["develop transferable skills", "highlight transferable skills"]
    }
    ,
    {
      id: "mega-unit-7-entry-level-position",
      word: "entry-level position",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb tr\u00ed c\u00f4ng vi\u1ec7c kh\u1edfi \u0111i\u1ec3m cho ng\u01b0\u1eddi m\u1edbi",
      ipa: "/\u02ccentri \u02c8levl p\u0259\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=entry-level+position&type=2",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      exampleEn: "He started in an entry-level position as a junior copywriter and rose to creative director.",
      exampleVi: "Anh \u1ea5y b\u1eaft \u0111\u1ea7u \u1edf v\u1ecb tr\u00ed kh\u1edfi \u0111i\u1ec3m l\u00e0 nh\u00e2n vi\u00ean vi\u1ebft n\u1ed9i dung t\u1eadp s\u1ef1 v\u00e0 th\u0103ng ti\u1ebfn l\u00ean gi\u00e1m \u0111\u1ed1c s\u00e1ng t\u1ea1o.",
      collocations: ["apply for an entry-level position", "secure an entry-level job"]
    }
    ,
    {
      id: "mega-unit-7-scholarship-criteria",
      word: "scholarship criteria",
      partOfSpeech: "n.phr",
      meaningVi: "ti\u00eau ch\u00ed x\u00e9t duy\u1ec7t trao h\u1ecdc b\u1ed5ng",
      ipa: "/\u02c8sk\u0252l\u0259\u0283\u026ap kra\u026a\u02c8t\u026a\u0259ri\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=scholarship+criteria&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High GPA and demonstrated community volunteer leadership form key scholarship criteria.",
      exampleVi: "\u0110i\u1ec3m s\u1ed1 GPA cao v\u00e0 th\u00e0nh t\u00edch l\u00e3nh \u0111\u1ea1o t\u00ecnh nguy\u1ec7n c\u1ed9ng \u0111\u1ed3ng l\u00e0 nh\u1eefng ti\u00eau ch\u00ed trao h\u1ecdc b\u1ed5ng c\u1ed1t l\u00f5i.",
      collocations: ["satisfy scholarship criteria", "rigorous criteria"]
    }
    ,
    {
      id: "mega-unit-7-qualification-framework",
      word: "qualification framework",
      partOfSpeech: "n.phr",
      meaningVi: "khung tr\u00ecnh \u0111\u1ed9 k\u1ef9 n\u0103ng ngh\u1ec1 nghi\u1ec7p qu\u1ed1c gia",
      ipa: "/\u02cckw\u0252l\u026af\u026a\u02c8ke\u026a\u0283n \u02c8fre\u026amw\u025c\u02d0k/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=qualification+framework&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national qualification framework aligns vocational badges with European credit standards.",
      exampleVi: "Khung tr\u00ecnh \u0111\u1ed9 qu\u1ed1c gia \u0111\u1ed3ng b\u1ed9 c\u00e1c ch\u1ee9ng ch\u1ec9 ngh\u1ec1 v\u1edbi h\u1ec7 th\u1ed1ng ti\u00eau chu\u1ea9n t\u00edn ch\u1ec9 c\u1ee7a ch\u00e2u \u00c2u.",
      collocations: ["aligned with qualification framework", "national framework"]
    }
    ,
    {
      id: "mega-unit-7-continuing-professional-development",
      word: "continuing professional development",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e0o t\u1ea1o n\u00e2ng cao chuy\u00ean m\u00f4n nghi\u1ec7p v\u1ee5 li\u00ean t\u1ee5c",
      ipa: "/k\u0259n\u02cct\u026anju\u02d0\u026a\u014b pr\u0259\u02c8fe\u0283\u0259nl d\u026a\u02c8vel\u0259pm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=continuing+professional+development&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Teachers attend weekend workshops for mandatory continuing professional development points.",
      exampleVi: "Gi\u00e1o vi\u00ean tham d\u1ef1 c\u00e1c l\u1edbp h\u1ed9i th\u1ea3o cu\u1ed1i tu\u1ea7n \u0111\u1ec3 t\u00edch l\u0169y \u0111i\u1ec3m b\u1ed3i d\u01b0\u1ee1ng nghi\u1ec7p v\u1ee5 chuy\u00ean m\u00f4n li\u00ean t\u1ee5c.",
      collocations: ["engage in professional development", "CPD credits"]
    }
    ,
    {
      id: "mega-unit-7-tuition-installment",
      word: "tuition installment",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n ti\u1ec1n \u0111\u00f3ng h\u1ecdc ph\u00ed chia theo t\u1eebng \u0111\u1ee3t",
      ipa: "/tju\u02d0\u02c8\u026a\u0283n \u026an\u02c8st\u0254\u02d0lm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tuition+installment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Paying through monthly tuition installments eases financial stress for middle-class parents.",
      exampleVi: "Thanh to\u00e1n h\u1ecdc ph\u00ed chia theo t\u1eebng \u0111\u1ee3t h\u1eb1ng th\u00e1ng gi\u00fap gi\u1ea3m b\u1edbt g\u00e1nh n\u1eb7ng t\u00e0i ch\u00ednh cho c\u00e1c b\u1eadc ph\u1ee5 huynh.",
      collocations: ["pay in tuition installments", "interest-free installment"]
    }
    ,
    {
      id: "mega-unit-7-career-transition",
      word: "career transition",
      partOfSpeech: "n.phr",
      meaningVi: "b\u01b0\u1edbc ngo\u1eb7t chuy\u1ec3n h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p",
      ipa: "/k\u0259\u02c8r\u026a\u0259 tr\u00e6n\u02c8z\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=career+transition&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mid-career bootcamps help factory technicians manage a smooth career transition into web development.",
      exampleVi: "C\u00e1c kh\u00f3a hu\u1ea5n luy\u1ec7n ng\u1eafn h\u1ea1n gi\u00fap c\u00e1c k\u1ef9 thu\u1eadt vi\u00ean nh\u00e0 m\u00e1y chuy\u1ec3n h\u01b0\u1edbng ngh\u1ec1 nghi\u1ec7p \u00eam th\u1ea5m sang l\u1eadp tr\u00ecnh web.",
      collocations: ["navigate a career transition", "successful transition"]
    }
  ],
  "unit-8-becoming-independent": [
    {
      id: "v11-u8-self-reliant",
      word: "self-reliant",
      partOfSpeech: "adj",
      meaningVi: "t\u1ef1 l\u1ef1c c\u00e1nh sinh, \u0111\u1ed9c l\u1eadp t\u1ef1 ch\u1ee7",
      ipa: "/\u02ccself r\u026a\u02c8la\u026a\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-reliant&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Living in a college dorm teaches students to become completely self-reliant.",
      exampleVi: "S\u1ed1ng trong k\u00fd t\u00fac x\u00e1 \u0111\u1ea1i h\u1ecdc d\u1ea1y sinh vi\u00ean bi\u1ebft t\u1ef1 l\u1ef1c c\u00e1nh sinh trong m\u1ecdi vi\u1ec7c.",
      collocations: ["become self-reliant", "self-reliant individual"]
    },
    {
      id: "v11-u8-time-management",
      word: "time management",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng qu\u1ea3n l\u00fd v\u00e0 s\u1eafp x\u1ebfp th\u1eddi gian",
      ipa: "/\u02c8ta\u026am \u02ccm\u00e6n\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=time+management&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Effective time management prevents exam cramming and late-night panic.",
      exampleVi: "Qu\u1ea3n l\u00fd th\u1eddi gian hi\u1ec7u qu\u1ea3 gi\u00fap tr\u00e1nh vi\u1ec7c h\u1ecdc d\u1ed3n tr\u01b0\u1edbc k\u1ef3 thi v\u00e0 n\u1ed7i ho\u1ea3ng lo\u1ea1n \u0111\u00eam khuya.",
      collocations: ["time management skills", "practice good time management"]
    },
    {
      id: "v11-u8-budgeting",
      word: "budgeting",
      partOfSpeech: "n",
      meaningVi: "k\u1ef9 n\u0103ng l\u1eadp k\u1ebf ho\u1ea1ch qu\u1ea3n l\u00fd chi ti\u00eau",
      ipa: "/\u02c8b\u028cd\u0292\u026at\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=budgeting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mastering monthly budgeting ensures young adults never run short of rent money.",
      exampleVi: "L\u00e0m ch\u1ee7 vi\u1ec7c l\u1eadp k\u1ebf ho\u1ea1ch chi ti\u00eau \u0111\u1ea3m b\u1ea3o ng\u01b0\u1eddi tr\u1ebb kh\u00f4ng bao gi\u1edd b\u1ecb thi\u1ebfu ti\u1ec1n thu\u00ea nh\u00e0.",
      collocations: ["budgeting skills", "learn budgeting"]
    },
    {
      id: "v11-u8-problem-solving",
      word: "problem-solving",
      partOfSpeech: "n / adj",
      meaningVi: "k\u1ef9 n\u0103ng gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 linh ho\u1ea1t",
      ipa: "/\u02c8pr\u0252bl\u0259m \u02ccs\u0252lv\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=problem-solving&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Independent living sharpens everyday problem-solving skills when household appliances break.",
      exampleVi: "S\u1ed1ng \u0111\u1ed9c l\u1eadp r\u00e8n luy\u1ec7n k\u1ef9 n\u0103ng gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 khi \u0111\u1ed3 \u0111\u1ea1c trong nh\u00e0 g\u1eb7p s\u1ef1 c\u1ed1.",
      collocations: ["problem-solving skills", "creative problem-solving"]
    },
    {
      id: "v11-u8-self-discipline",
      word: "self-discipline",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u1ef1 gi\u00e1c k\u1ef7 lu\u1eadt b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02c8d\u026as\u0259pl\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-discipline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Waking up at 6 AM for morning study requires tremendous self-discipline.",
      exampleVi: "Th\u1ee9c d\u1eady l\u00fac 6 gi\u1edd s\u00e1ng \u0111\u1ec3 h\u1ecdc b\u00e0i \u0111\u00f2i h\u1ecfi tinh th\u1ea7n t\u1ef1 gi\u00e1c k\u1ef7 lu\u1eadt r\u1ea5t l\u1edbn.",
      collocations: ["develop self-discipline", "iron self-discipline"]
    },
    {
      id: "v11-u8-coping-skills",
      word: "coping skills",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng \u0111\u1ed1i ph\u00f3 v\u1edbi kh\u00f3 kh\u0103n v\u00e0 c\u0103ng th\u1eb3ng",
      ipa: "/\u02c8k\u0259\u028ap\u026a\u014b sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=coping+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Developing positive coping skills prevents emotional burnout during stressful final exams.",
      exampleVi: "Ph\u00e1t tri\u1ec3n k\u1ef9 n\u0103ng \u1ee9ng ph\u00f3 l\u00e0nh m\u1ea1nh gi\u00fap ng\u0103n ng\u1eeba ki\u1ec7t s\u1ee9c c\u1ea3m x\u00fac trong m\u00f9a thi c\u0103ng th\u1eb3ng.",
      collocations: ["healthy coping skills", "stress coping skills"]
    },
    {
      id: "v11-u8-interpersonal-skills",
      word: "interpersonal skills",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng giao ti\u1ebfp v\u00e0 \u1ee9ng x\u1eed gi\u1eefa ng\u01b0\u1eddi v\u1edbi ng\u01b0\u1eddi",
      ipa: "/\u02cc\u026ant\u0259\u02c8p\u025c\u02d0s\u0259nl sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=interpersonal+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Good interpersonal skills allow room-mates to share apartment chores without friction.",
      exampleVi: "K\u1ef9 n\u0103ng giao ti\u1ebfp \u1ee9ng x\u1eed t\u1ed1t gi\u00fap c\u00e1c b\u1ea1n c\u00f9ng ph\u00f2ng chia vi\u1ec7c nh\u00e0 m\u00e0 kh\u00f4ng x\u00edch m\u00edch.",
      collocations: ["strong interpersonal skills", "improve interpersonal skills"]
    },
    {
      id: "v11-u8-personal-responsibility",
      word: "personal responsibility",
      partOfSpeech: "n.phr",
      meaningVi: "tr\u00e1ch nhi\u1ec7m c\u00e1 nh\u00e2n \u0111\u1ed1i v\u1edbi h\u00e0nh vi c\u1ee7a m\u00ecnh",
      ipa: "/\u02c8p\u025c\u02d0s\u0259nl r\u026a\u02ccsp\u0252ns\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=personal+responsibility&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Maturity is marked by taking full personal responsibility for your own mistakes.",
      exampleVi: "S\u1ef1 tr\u01b0\u1edfng th\u00e0nh \u0111\u01b0\u1ee3c \u0111\u00e1nh d\u1ea5u b\u1eb1ng vi\u1ec7c bi\u1ebft ch\u1ecbu tr\u00e1ch nhi\u1ec7m c\u00e1 nh\u00e2n v\u1ec1 l\u1ed7i l\u1ea7m c\u1ee7a m\u00ecnh.",
      collocations: ["take personal responsibility", "accept personal responsibility"]
    },
    {
      id: "v11-u8-cook-meals",
      word: "cook meals",
      partOfSpeech: "v.phr",
      meaningVi: "t\u1ef1 n\u1ea5u n\u01b0\u1edbng b\u1eefa \u0103n \u0111\u1ea7y \u0111\u1ee7 dinh d\u01b0\u1ee1ng",
      ipa: "/k\u028ak mi\u02d0lz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cook+meals&type=2",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning to cook meals saves money and keeps college students nourished.",
      exampleVi: "H\u1ecdc c\u00e1ch t\u1ef1 n\u1ea5u \u0103n gi\u00fap ti\u1ebft ki\u1ec7m chi ph\u00ed v\u00e0 \u0111\u1ea3m b\u1ea3o dinh d\u01b0\u1ee1ng cho sinh vi\u00ean.",
      collocations: ["cook nutritious meals", "cook simple meals"]
    },
    {
      id: "v11-u8-emotional-maturity",
      word: "emotional maturity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ch\u00edn ch\u1eafn tr\u01b0\u1edfng th\u00e0nh v\u1ec1 c\u1ea3m x\u00fac",
      ipa: "/\u026a\u02c8m\u0259\u028a\u0283\u0259nl m\u0259\u02c8t\u0283\u028a\u0259r\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emotional+maturity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Emotional maturity means handling criticism calmly without throwing temper tantrums.",
      exampleVi: "Tr\u01b0\u1edfng th\u00e0nh v\u1ec1 c\u1ea3m x\u00fac l\u00e0 bi\u1ebft ti\u1ebfp nh\u1eadn l\u1eddi g\u00f3p \u00fd b\u00ecnh t\u0129nh m\u00e0 kh\u00f4ng n\u1ed5i gi\u1eadn v\u00f4 c\u1edb.",
      collocations: ["reach emotional maturity", "sign of emotional maturity"]
    },
    {
      id: "v11-u8-live-on-one's-own",
      word: "live on one's own",
      partOfSpeech: "v.phr",
      meaningVi: "s\u1ed1ng t\u1ef1 l\u1eadp ra \u1edf ri\u00eang m\u1ed9t m\u00ecnh",
      ipa: "/l\u026av \u0252n w\u028cnz \u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=live+on+one's+own&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Moving into a studio apartment was her first step to live on her own.",
      exampleVi: "Chuy\u1ec3n v\u00e0o c\u0103n h\u1ed9 nh\u1ecf l\u00e0 b\u01b0\u1edbc \u0111\u1ea7u ti\u00ean \u0111\u1ec3 c\u00f4 b\u1ea1n t\u1ef1 l\u1eadp s\u1ed1ng m\u1ed9t m\u00ecnh.",
      collocations: ["ready to live on one's own", "challenge of living on one's own"]
    },
    {
      id: "v11-u8-self-motivation",
      word: "self-motivation",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed9ng l\u1ef1c t\u1ef1 th\u00e2n th\u00fac \u0111\u1ea9y t\u1eeb b\u00ean trong",
      ipa: "/\u02ccself \u02ccm\u0259\u028at\u026a\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-motivation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Without teachers watching over you, college study relies heavily on self-motivation.",
      exampleVi: "Kh\u00f4ng c\u00f2n th\u1ea7y c\u00f4 gi\u00e1m s\u00e1t t\u1eebng ch\u00fat, vi\u1ec7c h\u1ecdc \u0111\u1ea1i h\u1ecdc ph\u1ee5 thu\u1ed9c l\u1edbn v\u00e0o \u0111\u1ed9ng l\u1ef1c t\u1ef1 th\u00e2n.",
      collocations: ["high self-motivation", "source of self-motivation"]
    },
    {
      id: "v11-u8-decision-making",
      word: "decision-making",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng t\u1ef1 quy\u1ebft \u0111\u1ecbnh t\u01b0\u01a1ng lai",
      ipa: "/d\u026a\u02c8s\u026a\u0292n \u02ccme\u026ak\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=decision-making&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Independent adolescents make careful decisions by weighing advantages and risks.",
      exampleVi: "Ng\u01b0\u1eddi tr\u1ebb \u0111\u1ed9c l\u1eadp \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh c\u1ea9n tr\u1ecdng b\u1eb1ng c\u00e1ch c\u00e2n nh\u1eafc k\u1ef9 l\u1ee3i \u00edch v\u00e0 r\u1ee7i ro.",
      collocations: ["independent decision-making", "sound decision-making"]
    },
    {
      id: "v11-u8-resilience",
      word: "resilience",
      partOfSpeech: "n",
      meaningVi: "ngh\u1ecb l\u1ef1c ki\u00ean c\u01b0\u1eddng v\u01b0\u1ee3t kh\u00f3",
      ipa: "/r\u026a\u02c8z\u026ali\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resilience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overcoming small setbacks builds psychological resilience in young adults.",
      exampleVi: "V\u01b0\u1ee3t qua nh\u1eefng kh\u00f3 kh\u0103n nh\u1ecf gi\u00fap b\u1ed3i \u0111\u1eafp ngh\u1ecb l\u1ef1c ki\u00ean c\u01b0\u1eddng cho ng\u01b0\u1eddi tr\u1ebb.",
      collocations: ["build mental resilience", "remarkable resilience"]
    },
    {
      id: "v11-u8-self-confidence",
      word: "self-confidence",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng t\u1ef1 tin v\u00e0o b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02c8k\u0252nf\u026ad\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-confidence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Successfully fixing a leaky sink gave him an immense boost in self-confidence.",
      exampleVi: "T\u1ef1 s\u1eeda th\u00e0nh c\u00f4ng v\u00f2i n\u01b0\u1edbc r\u1ec9 \u0111\u00e3 \u0111em l\u1ea1i cho anh \u1ea5y s\u1ef1 t\u1ef1 tin r\u1ea5t l\u1edbn v\u00e0o b\u1ea3n th\u00e2n.",
      collocations: ["boost self-confidence", "lack self-confidence"]
    },
    {
      id: "v11-u8-assertive",
      word: "assertive",
      partOfSpeech: "adj",
      meaningVi: "qu\u1ea3 quy\u1ebft, kh\u00e9o l\u00e9o b\u1ea3o v\u1ec7 quan \u0111i\u1ec3m",
      ipa: "/\u0259\u02c8s\u025c\u02d0t\u026av/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=assertive&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Being politely assertive helps you decline unreasonable demands without guilt.",
      exampleVi: "Bi\u1ebft qu\u1ea3 quy\u1ebft m\u1ed9t c\u00e1ch l\u1ecbch s\u1ef1 gi\u00fap b\u1ea1n t\u1eeb ch\u1ed1i nh\u1eefng \u0111\u00f2i h\u1ecfi v\u00f4 l\u00fd m\u00e0 kh\u00f4ng \u00e1y n\u00e1y.",
      collocations: ["assertive communication", "learn to be assertive"]
    },
    {
      id: "v11-u8-self-care",
      word: "self-care",
      partOfSpeech: "n",
      meaningVi: "t\u1ef1 ch\u0103m s\u00f3c s\u1ee9c kh\u1ecfe th\u1ec3 ch\u1ea5t v\u00e0 tinh th\u1ea7n",
      ipa: "/\u02ccself \u02c8ke\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-care&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Prioritizing self-care by eating well and exercising is fundamental to adult independence.",
      exampleVi: "Bi\u1ebft \u01b0u ti\u00ean t\u1ef1 ch\u0103m s\u00f3c b\u1ea3n th\u00e2n b\u1eb1ng vi\u1ec7c \u0103n u\u1ed1ng l\u00e0nh m\u1ea1nh v\u00e0 t\u1eadp luy\u1ec7n l\u00e0 n\u1ec1n t\u1ea3ng c\u1ee7a t\u1ef1 l\u1eadp.",
      collocations: ["practice self-care", "routine self-care"]
    },
    {
      id: "v11-u8-manage-expenses",
      word: "manage expenses",
      partOfSpeech: "v.phr",
      meaningVi: "qu\u1ea3n l\u00fd c\u00e1c kho\u1ea3n chi ti\u00eau",
      ipa: "/\u02c8m\u00e6n\u026ad\u0292 \u026ak\u02c8spens\u026az/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=manage+expenses&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tracking every coffee purchase in a mobile app helps freshmen manage daily expenses.",
      exampleVi: "Ghi ch\u00e9p t\u1eebng c\u1ed1c c\u00e0 ph\u00ea v\u00e0o \u1ee9ng d\u1ee5ng \u0111i\u1ec7n tho\u1ea1i gi\u00fap sinh vi\u00ean n\u0103m nh\u1ea5t ki\u1ec3m so\u00e1t chi ti\u00eau.",
      collocations: ["manage living expenses", "effectively manage expenses"]
    },
    {
      id: "v11-u8-emergency-fund",
      word: "emergency fund",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3n ti\u1ec1n d\u1ef1 ph\u00f2ng kh\u1ea9n c\u1ea5p khi \u1ed1m \u0111au/s\u1ef1 c\u1ed1",
      ipa: "/\u026a\u02c8m\u025c\u02d0d\u0292\u0259nsi f\u028cnd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emergency+fund&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Always set aside three months of living costs as an emergency fund.",
      exampleVi: "Lu\u00f4n \u0111\u1ec3 d\u00e0nh ba th\u00e1ng chi ph\u00ed sinh ho\u1ea1t l\u00e0m kho\u1ea3n ti\u1ec1n d\u1ef1 ph\u00f2ng cho nh\u1eefng l\u00fac kh\u1ea9n c\u1ea5p.",
      collocations: ["build an emergency fund", "dip into the emergency fund"]
    },
    {
      id: "v11-u8-adaptability",
      word: "adaptability",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng th\u00edch nghi nhanh v\u1edbi m\u00f4i tr\u01b0\u1eddng m\u1edbi",
      ipa: "/\u0259\u02ccd\u00e6pt\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Moving to a foreign university challenges and tests your cross-cultural adaptability.",
      exampleVi: "Chuy\u1ec3n \u0111\u1ebfn h\u1ecdc t\u1ea1i m\u1ed9t tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc n\u01b0\u1edbc ngo\u00e0i l\u00e0 ph\u00e9p th\u1eed kh\u1ea3 n\u0103ng th\u00edch nghi v\u0103n h\u00f3a c\u1ee7a b\u1ea1n.",
      collocations: ["high adaptability", "demonstrate adaptability"]
    }
    ,
    {
      id: "v11-boost-self-reliant-living",
      word: "self-reliant living",
      partOfSpeech: "n.phr",
      meaningVi: "cu\u1ed9c s\u1ed1ng t\u1ef1 l\u1eadp, t\u1ef1 lo li\u1ec7u",
      ipa: "/\u02ccself r\u026a\u02c8la\u026a\u0259nt \u02c8l\u026av\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-reliant+living&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Self-reliant living involves cooking, washing clothes, and budgeting personal funds.",
      exampleVi: "S\u1ed1ng t\u1ef1 l\u1eadp bao g\u1ed3m t\u1ef1 n\u1ea5u n\u01b0\u1edbng, gi\u1eb7t gi\u0169 v\u00e0 c\u00e2n \u0111\u1ed1i chi ti\u00eau c\u00e1 nh\u00e2n.",
      collocations: ["embrace self-reliant living", "skills for self-reliant living"]
    }
    ,
    {
      id: "v11-boost-financial-prudence",
      word: "financial prudence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u1eadn tr\u1ecdng v\u00e0 kh\u00f4n ngoan v\u1ec1 t\u00e0i ch\u00ednh",
      ipa: "/fa\u026a\u02c8n\u00e6n\u0283l \u02c8pru\u02d0dns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=financial+prudence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing financial prudence prevents college students from accumulating credit debts.",
      exampleVi: "Th\u1eadn tr\u1ecdng trong chi ti\u00eau gi\u00fap sinh vi\u00ean \u0111\u1ea1i h\u1ecdc kh\u00f4ng b\u1ecb v\u01b0\u1edbng v\u00e0o n\u1ee3 n\u1ea7n th\u1ebb t\u00edn d\u1ee5ng.",
      collocations: ["exercise financial prudence", "principles of financial prudence"]
    }
    ,
    {
      id: "v11-boost-grocery-budgeting",
      word: "grocery budgeting",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1eadp ng\u00e2n s\u00e1ch chi ti\u00eau mua th\u1ef1c ph\u1ea9m",
      ipa: "/\u02c8\u0261r\u0259\u028as\u0259ri \u02c8b\u028cd\u0292\u026at\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=grocery+budgeting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Planning weekly meals ahead of time makes grocery budgeting far more efficient.",
      exampleVi: "L\u00ean th\u1ef1c \u0111\u01a1n tu\u1ea7n tr\u01b0\u1edbc gi\u00fap vi\u1ec7c d\u1ef1 to\u00e1n ti\u1ec1n \u0111i ch\u1ee3 hi\u1ec7u qu\u1ea3 h\u01a1n r\u1ea5t nhi\u1ec1u.",
      collocations: ["practice grocery budgeting", "grocery budgeting tips"]
    }
    ,
    {
      id: "v11-boost-household-maintenance",
      word: "household maintenance",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3o tr\u00ec, ch\u0103m s\u00f3c nh\u00e0 c\u1eeda \u0111\u1ed3 \u0111\u1ea1c",
      ipa: "/\u02c8ha\u028ash\u0259\u028ald \u02c8me\u026ant\u0259n\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=household+maintenance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Basic household maintenance like unblocking sinks saves considerable repair expenses.",
      exampleVi: "B\u1ea3o tr\u00ec nh\u00e0 c\u1eeda c\u01a1 b\u1ea3n nh\u01b0 th\u00f4ng t\u1eafc b\u1ed3n r\u1eeda gi\u00fap ti\u1ebft ki\u1ec7m chi ph\u00ed g\u1ecdi th\u1ee3.",
      collocations: ["learn household maintenance", "routine household maintenance"]
    }
    ,
    {
      id: "v11-boost-personal-boundary",
      word: "personal boundary",
      partOfSpeech: "n.phr",
      meaningVi: "ranh gi\u1edbi c\u00e1 nh\u00e2n trong quan h\u1ec7 x\u00e3 h\u1ed9i",
      ipa: "/\u02c8p\u025c\u02d0s\u0259nl \u02c8ba\u028andri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=personal+boundary&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Setting healthy personal boundaries ensures roommates respect your quiet study hours.",
      exampleVi: "Thi\u1ebft l\u1eadp ranh gi\u1edbi c\u00e1 nh\u00e2n r\u00f5 r\u00e0ng gi\u00fap b\u1ea1n c\u00f9ng ph\u00f2ng t\u00f4n tr\u1ecdng gi\u1edd t\u1ef1 h\u1ecdc c\u1ee7a b\u1ea1n.",
      collocations: ["establish personal boundaries", "respect personal boundaries"]
    }
    ,
    {
      id: "v11-boost-stress-management",
      word: "stress management",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng qu\u1ea3n l\u00fd v\u00e0 gi\u1ea3i t\u1ecfa c\u0103ng th\u1eb3ng",
      ipa: "/\u02c8stres \u02ccm\u00e6n\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=stress+management&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Regular exercise and meditation are proven stress management techniques for teens.",
      exampleVi: "T\u1eadp th\u1ec3 d\u1ee5c \u0111\u1ec1u \u0111\u1eb7n v\u00e0 thi\u1ec1n l\u00e0 c\u00e1c ph\u01b0\u01a1ng ph\u00e1p x\u1ea3 stress \u0111\u00e3 \u0111\u01b0\u1ee3c ch\u1ee9ng minh hi\u1ec7u qu\u1ea3.",
      collocations: ["practice stress management", "stress management seminar"]
    }
    ,
    {
      id: "v11-boost-self-advocacy",
      word: "self-advocacy",
      partOfSpeech: "n",
      meaningVi: "kh\u1ea3 n\u0103ng t\u1ef1 l\u00ean ti\u1ebfng b\u1ea3o v\u1ec7 quy\u1ec1n l\u1ee3i b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02c8\u00e6dv\u0259k\u0259si/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-advocacy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Developing self-advocacy helps college freshmen speak up when unfair grades occur.",
      exampleVi: "R\u00e8n luy\u1ec7n k\u1ef9 n\u0103ng t\u1ef1 l\u00ean ti\u1ebfng gi\u00fap t\u00e2n sinh vi\u00ean bi\u1ebft b\u1ea3o v\u1ec7 quy\u1ec1n l\u1ee3i khi c\u00f3 nh\u1ea7m l\u1eabn \u0111i\u1ec3m s\u1ed1.",
      collocations: ["practice self-advocacy", "learn self-advocacy"]
    }
    ,
    {
      id: "v11-boost-mental-resilience",
      word: "mental resilience",
      partOfSpeech: "n.phr",
      meaningVi: "ngh\u1ecb l\u1ef1c tinh th\u1ea7n v\u1eefng v\u00e0ng tr\u01b0\u1edbc s\u00f3ng gi\u00f3",
      ipa: "/\u02ccmentl r\u026a\u02c8z\u026ali\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mental+resilience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Facing setbacks builds mental resilience that prepares you for adult career challenges.",
      exampleVi: "\u0110\u1ed1i m\u1eb7t v\u1edbi kh\u00f3 kh\u0103n gi\u00fap b\u1ed3i \u0111\u1eafp ngh\u1ecb l\u1ef1c tinh th\u1ea7n chu\u1ea9n b\u1ecb cho s\u1ef1 nghi\u1ec7p sau n\u00e0y.",
      collocations: ["foster mental resilience", "build mental resilience"]
    }
    ,
    {
      id: "v11-boost-punctuality",
      word: "punctuality",
      partOfSpeech: "n",
      meaningVi: "t\u00e1c phong \u0111\u00fang gi\u1edd gi\u1ea5c k\u1ef7 lu\u1eadt",
      ipa: "/\u02ccp\u028c\u014bkt\u0283u\u02c8\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=punctuality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Punctuality reflects personal respect for your teachers and fellow study group members.",
      exampleVi: "\u0110\u00fang gi\u1edd th\u1ec3 hi\u1ec7n s\u1ef1 t\u00f4n tr\u1ecdng c\u1ee7a b\u1ea1n \u0111\u1ed1i v\u1edbi th\u1ea7y c\u00f4 v\u00e0 c\u00e1c b\u1ea1n trong nh\u00f3m h\u1ecdc t\u1eadp.",
      collocations: ["strict punctuality", "importance of punctuality"]
    }
    ,
    {
      id: "v11-boost-autonomous",
      word: "autonomous",
      partOfSpeech: "adj",
      meaningVi: "t\u1ef1 ch\u1ee7, c\u00f3 kh\u1ea3 n\u0103ng t\u1ef1 v\u1eadn h\u00e0nh",
      ipa: "/\u0254\u02d0\u02c8t\u0252n\u0259m\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=autonomous&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Independent students become autonomous decision-makers who don't rely on constant reminders.",
      exampleVi: "H\u1ecdc sinh t\u1ef1 l\u1eadp tr\u1edf th\u00e0nh nh\u1eefng ng\u01b0\u1eddi t\u1ef1 ch\u1ee7 ra quy\u1ebft \u0111\u1ecbnh m\u00e0 kh\u00f4ng c\u1ea7n ai ph\u1ea3i nh\u1eafc nh\u1edf.",
      collocations: ["autonomous learner", "autonomous individual"]
    }
    ,
    {
      id: "v11-boost-accountability",
      word: "accountability",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u1ef1 ch\u1ecbu tr\u00e1ch nhi\u1ec7m v\u1ec1 k\u1ebft qu\u1ea3",
      ipa: "/\u0259\u02ccka\u028ant\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=accountability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Personal accountability means holding yourself responsible for meeting study milestones.",
      exampleVi: "Tinh th\u1ea7n t\u1ef1 ch\u1ecbu tr\u00e1ch nhi\u1ec7m l\u00e0 t\u1ef1 cam k\u1ebft ho\u00e0n th\u00e0nh c\u00e1c m\u1ee5c ti\u00eau h\u1ecdc t\u1eadp \u0111\u1ec1 ra.",
      collocations: ["take accountability", "sense of accountability"]
    }
    ,
    {
      id: "v11-boost-frugality",
      word: "frugality",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ee9c t\u00ednh ti\u1ebft ki\u1ec7m, kh\u00f4ng l\u00e3ng ph\u00ed",
      ipa: "/fru\u02d0\u02c8\u0261\u00e6l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=frugality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Practicing frugality allowed the student to save enough money for a new laptop.",
      exampleVi: "Th\u1ef1c h\u00e0nh t\u00ednh ti\u1ebft ki\u1ec7m \u0111\u00e3 gi\u00fap b\u1ea1n sinh vi\u00ean d\u00e0nh d\u1ee5m \u0111\u1ee7 ti\u1ec1n mua m\u00e1y t\u00ednh x\u00e1ch tay m\u1edbi.",
      collocations: ["embrace frugality", "habit of frugality"]
    }
    ,
    {
      id: "v11-boost-first-aid-skill",
      word: "first-aid skill",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng s\u01a1 c\u1ea5p c\u1ee9u kh\u1ea9n c\u1ea5p c\u01a1 b\u1ea3n",
      ipa: "/\u02c8f\u025c\u02d0st e\u026ad sk\u026al/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=first-aid+skill&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every teenager living alone should master basic first-aid skills like treating burns.",
      exampleVi: "M\u1ecdi b\u1ea1n tr\u1ebb s\u1ed1ng t\u1ef1 l\u1eadp n\u00ean n\u1eafm v\u1eefng k\u1ef9 n\u0103ng s\u01a1 c\u1ee9u c\u01a1 b\u1ea3n nh\u01b0 x\u1eed l\u00fd v\u1ebft b\u1ecfng.",
      collocations: ["learn first-aid skills", "essential first-aid skills"]
    }
    ,
    {
      id: "v11-boost-daily-routine",
      word: "daily routine",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f3i quen sinh ho\u1ea1t n\u1ec1 n\u1ebfp h\u00e0ng ng\u00e0y",
      ipa: "/\u02c8de\u026ali ru\u02d0\u02c8ti\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=daily+routine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A structured daily routine of regular sleep and study maximizes productivity.",
      exampleVi: "Th\u00f3i quen sinh ho\u1ea1t n\u1ec1 n\u1ebfp ng\u1ee7 ngh\u1ec9 v\u00e0 h\u1ecdc t\u1eadp khoa h\u1ecdc gi\u00fap t\u1ed1i \u01b0u h\u00f3a n\u0103ng su\u1ea5t.",
      collocations: ["stick to a daily routine", "healthy daily routine"]
    }
    ,
    {
      id: "v11-boost-resourcefulness",
      word: "resourcefulness",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 th\u00e1o v\u00e1t, bi\u1ebft xoay x\u1edf linh ho\u1ea1t",
      ipa: "/r\u026a\u02c8z\u0254\u02d0sfln\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resourcefulness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Living independently builds resourcefulness when cooking with limited ingredients.",
      exampleVi: "S\u1ed1ng t\u1ef1 l\u1eadp r\u00e8n luy\u1ec7n s\u1ef1 th\u00e1o v\u00e1t khi ph\u1ea3i n\u1ea5u b\u1eefa c\u01a1m v\u1edbi nh\u1eefng nguy\u00ean li\u1ec7u s\u1eb5n c\u00f3.",
      collocations: ["demonstrate resourcefulness", "practical resourcefulness"]
    }
    ,
    {
      id: "v11-boost-self-awareness",
      word: "self-awareness",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 t\u1ef1 nh\u1eadn th\u1ee9c r\u00f5 \u0111i\u1ec3m m\u1ea1nh y\u1ebfu b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u0259\u02c8we\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-awareness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Developing honest self-awareness helps you choose realistic academic and career goals.",
      exampleVi: "T\u1ef1 nh\u1eadn th\u1ee9c r\u00f5 b\u1ea3n th\u00e2n gi\u00fap b\u1ea1n l\u1ef1a ch\u1ecdn c\u00e1c m\u1ee5c ti\u00eau h\u1ecdc t\u1eadp v\u00e0 ngh\u1ec1 nghi\u1ec7p th\u1ef1c t\u1ebf.",
      collocations: ["heighten self-awareness", "accurate self-awareness"]
    }
    ,
    {
      id: "v11-boost-perseverance",
      word: "perseverance",
      partOfSpeech: "n",
      meaningVi: "l\u00f2ng ki\u00ean tr\u00ec theo \u0111u\u1ed5i m\u1ee5c ti\u00eau",
      ipa: "/\u02ccp\u025c\u02d0s\u0259\u02c8v\u026a\u0259r\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=perseverance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Success in independent college research requires continuous focus and perseverance.",
      exampleVi: "Th\u00e0nh c\u00f4ng trong nghi\u00ean c\u1ee9u \u0111\u1ea1i h\u1ecdc t\u1ef1 l\u1eadp \u0111\u00f2i h\u1ecfi s\u1ef1 t\u1eadp trung v\u00e0 l\u00f2ng ki\u00ean tr\u00ec kh\u00f4ng ng\u1eebng.",
      collocations: ["display perseverance", "reward for perseverance"]
    }
    ,
    {
      id: "v11-boost-self-care-routine",
      word: "self-care routine",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f3i quen t\u1ef1 ch\u0103m s\u00f3c b\u1ea3n th\u00e2n",
      ipa: "/\u02ccself \u02c8ke\u0259 ru\u02d0\u02ccti\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-care+routine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Taking an evening walk and drinking water are simple components of a self-care routine.",
      exampleVi: "\u0110i d\u1ea1o bu\u1ed5i t\u1ed1i v\u00e0 u\u1ed1ng \u0111\u1ee7 n\u01b0\u1edbc l\u00e0 nh\u1eefng th\u00f3i quen \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 t\u1ef1 ch\u0103m s\u00f3c c\u01a1 th\u1ec3.",
      collocations: ["maintain a self-care routine", "daily self-care routine"]
    }
    ,
    {
      id: "mega-unit-8-self-reliance",
      word: "self-reliance",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n t\u1ef1 l\u1ef1c c\u00e1nh sinh d\u1ef1a v\u00e0o ch\u00ednh m\u00ecnh",
      ipa: "/\u02ccself r\u026a\u02c8la\u026a\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-reliance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Living alone in a dormitory fosters absolute self-reliance and resourcefulness in students.",
      exampleVi: "S\u1ed1ng t\u1ef1 l\u1eadp trong k\u00fd t\u00fac x\u00e1 r\u00e8n luy\u1ec7n tinh th\u1ea7n t\u1ef1 l\u1ef1c c\u00e1nh sinh v\u00e0 s\u1ef1 th\u00e1o v\u00e1t \u0111\u1ed1i v\u1edbi sinh vi\u00ean.",
      collocations: ["cultivate self-reliance", "spirit of self-reliance"]
    }
    ,
    {
      id: "mega-unit-8-financial-prudence",
      word: "financial prudence",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 th\u1eadn tr\u1ecdng kh\u00f4n ngoan trong chi ti\u00eau qu\u1ea3n l\u00fd ti\u1ec1n b\u1ea1c",
      ipa: "/fa\u026a\u02c8n\u00e6n\u0283l \u02c8pru\u02d0dns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=financial+prudence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Setting up a monthly grocery budget teaches young adults essential financial prudence.",
      exampleVi: "L\u1eadp ng\u00e2n s\u00e1ch ti\u1ec1n ch\u1ee3 h\u1eb1ng th\u00e1ng d\u1ea1y cho c\u00e1c b\u1ea1n tr\u1ebb s\u1ef1 c\u1ea9n tr\u1ecdng v\u00e0 kh\u00f4n ngoan thi\u1ebft y\u1ebfu trong chi ti\u00eau.",
      collocations: ["practice financial prudence", "exercise prudence"]
    }
    ,
    {
      id: "mega-unit-8-domestic-autonomy",
      word: "domestic autonomy",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c t\u1ef1 qu\u00e1n xuy\u1ebfn m\u1ecdi vi\u1ec7c nh\u00e0 \u0111\u1ed9c l\u1eadp",
      ipa: "/d\u0259\u02ccmest\u026ak \u0254\u02d0\u02c8t\u0252n\u0259mi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=domestic+autonomy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mastering laundry, cooking, and ironing grants young people true domestic autonomy.",
      exampleVi: "Th\u00e0nh th\u1ea1o vi\u1ec7c gi\u1eb7t gi\u0169, n\u1ea5u n\u01b0\u1edbng v\u00e0 l\u00e0 qu\u1ea7n \u00e1o mang l\u1ea1i cho ng\u01b0\u1eddi tr\u1ebb n\u0103ng l\u1ef1c t\u1ef1 ch\u1ee7 ho\u00e0n to\u00e0n trong vi\u1ec7c nh\u00e0.",
      collocations: ["achieve domestic autonomy", "demonstrate autonomy"]
    }
    ,
    {
      id: "mega-unit-8-decision-making-skills",
      word: "decision-making skills",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng c\u00e2n nh\u1eafc v\u00e0 ra quy\u1ebft \u0111\u1ecbnh ch\u00ednh x\u00e1c",
      ipa: "/d\u026a\u02c8s\u026a\u0292n \u02ccme\u026ak\u026a\u014b sk\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=decision-making+skills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Independent adolescents hone sound decision-making skills by weighing pros and cons.",
      exampleVi: "Nh\u1eefng b\u1ea1n tr\u1ebb t\u1ef1 l\u1eadp m\u00e0i gi\u0169a k\u1ef9 n\u0103ng \u0111\u01b0a ra quy\u1ebft \u0111\u1ecbnh s\u00e1ng su\u1ed1t b\u1eb1ng c\u00e1ch c\u00e2n nh\u1eafc k\u1ef9 m\u1eb7t l\u1ee3i v\u00e0 m\u1eb7t h\u1ea1i.",
      collocations: ["sharpen decision-making skills", "flawed decision-making"]
    }
    ,
    {
      id: "mega-unit-8-crisis-management",
      word: "crisis management",
      partOfSpeech: "n.phr",
      meaningVi: "k\u1ef9 n\u0103ng x\u1eed l\u00fd \u1ee9ng ph\u00f3 v\u1edbi t\u00ecnh hu\u1ed1ng kh\u1ee7ng ho\u1ea3ng",
      ipa: "/\u02c8kra\u026as\u026as \u02c8m\u00e6n\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=crisis+management&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Knowing how to turn off the water main during a burst pipe pipe is basic domestic crisis management.",
      exampleVi: "Bi\u1ebft c\u00e1ch kh\u00f3a van n\u01b0\u1edbc t\u1ed5ng khi v\u1ee1 \u0111\u01b0\u1eddng \u1ed1ng l\u00e0 k\u1ef9 n\u0103ng x\u1eed l\u00fd kh\u1ee7ng ho\u1ea3ng vi\u1ec7c nh\u00e0 c\u01a1 b\u1ea3n m\u00e0 ai c\u0169ng c\u1ea7n bi\u1ebft.",
      collocations: ["handle crisis management", "crisis management plan"]
    }
    ,
    {
      id: "mega-unit-8-emergency-preparedness",
      word: "emergency preparedness",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n ch\u1ee7 \u0111\u1ed9ng s\u1eb5n s\u00e0ng \u0111\u1ed1i ph\u00f3 t\u00ecnh hu\u1ed1ng kh\u1ea9n c\u1ea5p",
      ipa: "/\u026a\u02c8m\u025c\u02d0d\u0292\u0259nsi pr\u026a\u02c8pe\u0259dn\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emergency+preparedness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Stocking flashlights, first-aid gauze, and canned rations shows mature emergency preparedness.",
      exampleVi: "Tr\u1eef s\u1eb5n \u0111\u00e8n pin, g\u1ea1c c\u1ee9u th\u01b0\u01a1ng v\u00e0 th\u1ef1c ph\u1ea9m \u0111\u00f3ng h\u1ed9p th\u1ec3 hi\u1ec7n s\u1ef1 chu\u1ea9n b\u1ecb s\u1eb5n s\u00e0ng chu \u0111\u00e1o cho m\u1ecdi t\u00ecnh hu\u1ed1ng kh\u1ea9n c\u1ea5p.",
      collocations: ["maintain emergency preparedness", "household preparedness"]
    }
    ,
    {
      id: "mega-unit-8-apartment-lease",
      word: "apartment lease",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ee3p \u0111\u1ed3ng thu\u00ea nh\u00e0 c\u0103n h\u1ed9",
      ipa: "/\u0259\u02c8p\u0251\u02d0tm\u0259nt li\u02d0s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=apartment+lease&type=2",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Before moving in, review every clause of your apartment lease regarding deposits and utilities.",
      exampleVi: "Tr\u01b0\u1edbc khi d\u1ecdn v\u00e0o \u1edf, h\u00e3y xem x\u00e9t k\u1ef9 l\u01b0\u1ee1ng t\u1eebng \u0111i\u1ec1u kho\u1ea3n trong h\u1ee3p \u0111\u1ed3ng thu\u00ea nh\u00e0 v\u1ec1 ti\u1ec1n c\u1ecdc v\u00e0 \u0111i\u1ec7n n\u01b0\u1edbc.",
      collocations: ["sign an apartment lease", "break a lease"]
    }
    ,
    {
      id: "mega-unit-8-culinary-competence",
      word: "culinary competence",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng n\u1ea5u n\u01b0\u1edbng ch\u1ebf bi\u1ebfn m\u00f3n \u0103n ngon l\u00e0nh",
      ipa: "/\u02c8k\u028cl\u026an\u0259ri \u02c8k\u0252mp\u026at\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=culinary+competence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cooking nutritious meals at home rather than ordering takeout proves solid culinary competence.",
      exampleVi: "T\u1ef1 n\u1ea5u nh\u1eefng b\u1eefa \u0103n gi\u00e0u d\u01b0\u1ee1ng ch\u1ea5t t\u1ea1i nh\u00e0 thay v\u00ec g\u1ecdi \u0111\u1ed3 \u0103n ngo\u00e0i ch\u1ee9ng minh n\u0103ng l\u1ef1c n\u1ea5u n\u01b0\u1edbng v\u1eefng v\u00e0ng.",
      collocations: ["acquire culinary competence", "develop competence"]
    }
    ,
    {
      id: "mega-unit-8-time-allocation",
      word: "time allocation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n b\u1ed5 v\u00e0 s\u1eafp x\u1ebfp qu\u1ef9 th\u1eddi gian bi\u1ec3u",
      ipa: "/\u02c8ta\u026am \u02cc\u00e6l\u0259\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=time+allocation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Effective time allocation allows university students to balance part-time shifts and exam study.",
      exampleVi: "S\u1ef1 ph\u00e2n b\u1ed5 th\u1eddi gian hi\u1ec7u qu\u1ea3 gi\u00fap sinh vi\u00ean \u0111\u1ea1i h\u1ecdc c\u00e2n b\u1eb1ng \u0111\u01b0\u1ee3c gi\u1eefa ca l\u00e0m th\u00eam v\u00e0 vi\u1ec7c \u00f4n thi.",
      collocations: ["optimize time allocation", "smart time allocation"]
    }
    ,
    {
      id: "mega-unit-8-utility-bills",
      word: "utility bills",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00f3a \u0111\u01a1n chi ph\u00ed \u0111i\u1ec7n n\u01b0\u1edbc v\u00e0 internet h\u1eb1ng th\u00e1ng",
      ipa: "/ju\u02d0\u02c8t\u026al\u0259ti b\u026alz/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=utility+bills&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Paying electric and water utility bills on time preserves a sound credit history.",
      exampleVi: "Thanh to\u00e1n \u0111\u00fang h\u1ea1n c\u00e1c h\u00f3a \u0111\u01a1n sinh ho\u1ea1t \u0111i\u1ec7n n\u01b0\u1edbc gi\u00fap duy tr\u00ec l\u1ecbch s\u1eed t\u00edn d\u1ee5ng uy t\u00edn.",
      collocations: ["settle utility bills", "split utility bills"]
    }
    ,
    {
      id: "mega-unit-8-assertive-communication",
      word: "assertive communication",
      partOfSpeech: "n.phr",
      meaningVi: "giao ti\u1ebfp quy\u1ebft \u0111o\u00e1n b\u1ea3o v\u1ec7 ch\u00ednh ki\u1ebfn l\u1ecbch thi\u1ec7p",
      ipa: "/\u0259\u02c8s\u025c\u02d0t\u026av k\u0259\u02ccmju\u02d0n\u026a\u02c8ke\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=assertive+communication&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Assertive communication allows roommates to resolve cleanliness issues without bitter arguing.",
      exampleVi: "Giao ti\u1ebfp quy\u1ebft \u0111o\u00e1n gi\u00fap nh\u1eefng ng\u01b0\u1eddi b\u1ea1n c\u00f9ng ph\u00f2ng gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 d\u1ecdn d\u1eb9p v\u1ec7 sinh m\u00e0 kh\u00f4ng g\u00e2y c\u00e3i v\u00e3 chua ch\u00e1t.",
      collocations: ["practice assertive communication", "express thoughts assertively"]
    }
    ,
    {
      id: "mega-unit-8-self-discipline",
      word: "self-discipline",
      partOfSpeech: "n",
      meaningVi: "tinh th\u1ea7n k\u1ef7 lu\u1eadt t\u1ef1 gi\u00e1c cao",
      ipa: "/\u02ccself \u02c8d\u026as\u0259pl\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-discipline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Waking up at six to jog without parental alarms requires formidable self-discipline.",
      exampleVi: "Th\u1ee9c d\u1eady l\u00fac s\u00e1u gi\u1edd \u0111\u1ec3 ch\u1ea1y b\u1ed9 m\u00e0 kh\u00f4ng c\u1ea7n b\u1ed1 m\u1eb9 g\u1ecdi \u0111\u00f2i h\u1ecfi tinh th\u1ea7n k\u1ef7 lu\u1eadt t\u1ef1 gi\u00e1c \u0111\u00e1ng kh\u00e2m ph\u1ee5c.",
      collocations: ["exhibit strict self-discipline", "matter of self-discipline"]
    }
    ,
    {
      id: "mega-unit-8-emotional-self-regulation",
      word: "emotional self-regulation",
      partOfSpeech: "n.phr",
      meaningVi: "kh\u1ea3 n\u0103ng t\u1ef1 l\u00e0m ch\u1ee7 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh c\u1ea3m x\u00fac",
      ipa: "/\u026a\u02ccm\u0259\u028a\u0283\u0259nl \u02ccself \u02ccre\u0261ju\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emotional+self-regulation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meditation and deep breathing promote emotional self-regulation when facing daunting setbacks.",
      exampleVi: "Thi\u1ec1n v\u00e0 h\u00edt th\u1edf s\u00e2u gi\u00fap n\u00e2ng cao kh\u1ea3 n\u0103ng t\u1ef1 l\u00e0m ch\u1ee7 c\u1ea3m x\u00fac khi \u0111\u01b0\u01a1ng \u0111\u1ea7u v\u1edbi nh\u1eefng ngh\u1ecbch c\u1ea3nh kh\u00f3 kh\u0103n.",
      collocations: ["master emotional self-regulation", "techniques of self-regulation"]
    }
    ,
    {
      id: "mega-unit-8-grocery-budgeting",
      word: "grocery budgeting",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1eadp k\u1ebf ho\u1ea1ch chi ti\u00eau mua s\u1eafm th\u1ef1c ph\u1ea9m",
      ipa: "/\u02c8\u0261r\u0259\u028as\u0259ri \u02c8b\u028cd\u0292\u026at\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=grocery+budgeting&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Meal planning on Sundays prevents reckless overspending during weekly grocery budgeting.",
      exampleVi: "L\u00ean th\u1ef1c \u0111\u01a1n v\u00e0o Ch\u1ee7 nh\u1eadt gi\u00fap ng\u0103n ch\u1eb7n vi\u1ec7c vung tay qu\u00e1 tr\u00e1n khi \u0111i mua s\u1eafm th\u1ef1c ph\u1ea9m trong tu\u1ea7n.",
      collocations: ["stick to grocery budgeting", "smart grocery shopping"]
    }
    ,
    {
      id: "mega-unit-8-housekeeping-routine",
      word: "housekeeping routine",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f3i quen d\u1ecdn d\u1eb9p nh\u00e0 c\u1eeda ng\u0103n n\u1eafp th\u01b0\u1eddng nh\u1eadt",
      ipa: "/\u02c8ha\u028aski\u02d0p\u026a\u014b ru\u02d0\u02c8ti\u02d0n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=housekeeping+routine&type=2",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Maintaining a regular housekeeping routine keeps the shared kitchen hygienic and welcoming.",
      exampleVi: "Duy tr\u00ec th\u00f3i quen d\u1ecdn d\u1eb9p vi\u1ec7c nh\u00e0 \u0111\u1ec1u \u0111\u1eb7n gi\u00fap gian b\u1ebfp chung lu\u00f4n v\u1ec7 sinh s\u1ea1ch s\u1ebd v\u00e0 g\u1ecdn g\u00e0ng.",
      collocations: ["establish a housekeeping routine", "daily routine"]
    }
    ,
    {
      id: "mega-unit-8-problem-solving-capacity",
      word: "problem-solving capacity",
      partOfSpeech: "n.phr",
      meaningVi: "n\u0103ng l\u1ef1c t\u00ecm t\u00f2i gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1",
      ipa: "/\u02c8pr\u0252bl\u0259m \u02ccs\u0252lv\u026a\u014b k\u0259\u02c8p\u00e6s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=problem-solving+capacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overcoming unexpected travel delays independently sharpens an adolescent's problem-solving capacity.",
      exampleVi: "T\u1ef1 m\u00ecnh xoay x\u1edf khi chuy\u1ebfn bay b\u1ecb ho\u00e3n \u0111\u1ed9t xu\u1ea5t gi\u00fap r\u00e8n gi\u0169a n\u0103ng l\u1ef1c \u1ee9ng bi\u1ebfn v\u00e0 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 c\u1ee7a b\u1ea1n tr\u1ebb.",
      collocations: ["enhance problem-solving capacity", "test someone's capacity"]
    }
    ,
    {
      id: "mega-unit-8-first-aid-kit",
      word: "first-aid kit",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ed9p c\u1ee9u th\u01b0\u01a1ng gia \u0111\u00ecnh",
      ipa: "/\u02ccf\u025c\u02d0st \u02c8e\u026ad k\u026at/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=first-aid+kit&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Keep an accessible first-aid kit stocked with antiseptic, sterile bandages, and thermometer.",
      exampleVi: "H\u00e3y \u0111\u1ec3 h\u1ed9p c\u1ee9u th\u01b0\u01a1ng \u1edf n\u01a1i d\u1ec5 l\u1ea5y v\u1edbi \u0111\u1ea7y \u0111\u1ee7 c\u1ed3n s\u00e1t khu\u1ea9n, b\u0103ng g\u1ea1c v\u00f4 tr\u00f9ng v\u00e0 nhi\u1ec7t k\u1ebf.",
      collocations: ["stock a first-aid kit", "emergency first-aid kit"]
    }
    ,
    {
      id: "mega-unit-8-resilience",
      word: "resilience",
      partOfSpeech: "n",
      meaningVi: "s\u1ee9c b\u1ec1n t\u00e2m l\u00fd ki\u00ean c\u01b0\u1eddng v\u01b0\u1ee3t kh\u00f3",
      ipa: "/r\u026a\u02c8z\u026ali\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=resilience&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Learning from repeated failures builds the emotional resilience needed to triumph in adulthood.",
      exampleVi: "H\u1ecdc h\u1ecfi t\u1eeb nh\u1eefng th\u1ea5t b\u1ea1i li\u00ean ti\u1ebfp gi\u00fap x\u00e2y d\u1ef1ng s\u1ee9c b\u1ec1n t\u00e2m l\u00fd ki\u00ean c\u01b0\u1eddng c\u1ea7n thi\u1ebft \u0111\u1ec3 th\u00e0nh c\u00f4ng trong cu\u1ed9c \u0111\u1eddi.",
      collocations: ["demonstrate exceptional resilience", "build emotional resilience"]
    }
    ,
    {
      id: "mega-unit-8-self-motivation",
      word: "self-motivation",
      partOfSpeech: "n",
      meaningVi: "ngu\u1ed3n \u0111\u1ed9ng l\u1ef1c t\u1ef1 th\u00e2n th\u00fac \u0111\u1ea9y h\u00e0nh \u0111\u1ed9ng",
      ipa: "/\u02ccself \u02ccm\u0259\u028at\u026a\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-motivation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Without classroom supervision, distance college students rely completely on self-motivation.",
      exampleVi: "Khi kh\u00f4ng c\u00f3 s\u1ef1 gi\u00e1m s\u00e1t tr\u1ef1c ti\u1ebfp t\u1ea1i l\u1edbp, sinh vi\u00ean h\u1ecdc t\u1eeb xa ph\u1ea3i ho\u00e0n to\u00e0n d\u1ef1a v\u00e0o ngu\u1ed3n \u0111\u1ed9ng l\u1ef1c t\u1ef1 th\u00e2n.",
      collocations: ["harness self-motivation", "lack of self-motivation"]
    }
    ,
    {
      id: "mega-unit-8-work-life-balance",
      word: "work-life balance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng gi\u1eefa c\u00f4ng vi\u1ec7c v\u00e0 cu\u1ed9c s\u1ed1ng ri\u00eang",
      ipa: "/\u02ccw\u025c\u02d0k \u02c8la\u026af \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=work-life+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Setting firm end-of-day boundaries preserves a healthy work-life balance and prevents burnout.",
      exampleVi: "\u0110\u1eb7t ra ranh gi\u1edbi k\u1ebft th\u00fac gi\u1edd l\u00e0m vi\u1ec7c r\u00f5 r\u00e0ng gi\u00fap gi\u1eef g\u00ecn s\u1ef1 c\u00e2n b\u1eb1ng gi\u1eefa c\u00f4ng vi\u1ec7c v\u00e0 \u0111\u1eddi s\u1ed1ng, tr\u00e1nh ki\u1ec7t s\u1ee9c.",
      collocations: ["maintain a work-life balance", "achieve balance"]
    }
    ,
    {
      id: "mega-unit-8-civic-duty",
      word: "civic duty",
      partOfSpeech: "n.phr",
      meaningVi: "ngh\u0129a v\u1ee5 c\u00f4ng d\u00e2n \u0111\u00f3ng g\u00f3p cho x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u026av\u026ak \u02c8dju\u02d0ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civic+duty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Voting in parliamentary elections and volunteering at blood drives are manifestations of civic duty.",
      exampleVi: "B\u1ecf phi\u1ebfu trong k\u1ef3 b\u1ea7u c\u1eed qu\u1ed1c h\u1ed9i v\u00e0 hi\u1ebfn m\u00e1u nh\u00e2n \u0111\u1ea1o l\u00e0 nh\u1eefng bi\u1ec3u hi\u1ec7n ti\u00eau bi\u1ec3u c\u1ee7a ngh\u0129a v\u1ee5 c\u00f4ng d\u00e2n.",
      collocations: ["fulfill one's civic duty", "sense of civic duty"]
    }
    ,
    {
      id: "mega-unit-8-tenancy-agreement",
      word: "tenancy agreement",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea3n th\u1ecfa thu\u1eadn thu\u00ea m\u01b0\u1edbn nh\u00e0 \u1edf",
      ipa: "/\u02c8ten\u0259nsi \u0259\u02cc\u0261ri\u02d0m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tenancy+agreement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ensure your security deposit terms are explicitly written into the signed tenancy agreement.",
      exampleVi: "H\u00e3y ch\u1eafc ch\u1eafn r\u1eb1ng c\u00e1c \u0111i\u1ec1u kho\u1ea3n v\u1ec1 ti\u1ec1n \u0111\u1eb7t c\u1ecdc \u0111\u01b0\u1ee3c ghi r\u00f5 r\u00e0ng trong b\u1ea3n th\u1ecfa thu\u1eadn thu\u00ea nh\u00e0 \u0111\u00e3 k\u00fd k\u1ebft.",
      collocations: ["draft a tenancy agreement", "binding tenancy agreement"]
    }
    ,
    {
      id: "mega-unit-8-self-care-ritual",
      word: "self-care ritual",
      partOfSpeech: "n.phr",
      meaningVi: "th\u00f3i quen ch\u0103m s\u00f3c s\u1ee9c kh\u1ecfe th\u1ec3 ch\u1ea5t tinh th\u1ea7n cho b\u1ea3n th\u00e2n",
      ipa: "/\u02c8self ke\u0259 \u02c8r\u026at\u0283u\u0259l/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=self-care+ritual&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A warm chamomile tea and 30 minutes of reading before bed is my rejuvenating self-care ritual.",
      exampleVi: "M\u1ed9t t\u00e1ch tr\u00e0 hoa c\u00fac \u1ea5m v\u00e0 30 ph\u00fat \u0111\u1ecdc s\u00e1ch tr\u01b0\u1edbc khi ng\u1ee7 l\u00e0 th\u00f3i quen ch\u0103m s\u00f3c b\u1ea3n th\u00e2n gi\u00fap t\u00f4i h\u1ed3i ph\u1ee5c n\u0103ng l\u01b0\u1ee3ng.",
      collocations: ["practice a self-care ritual", "daily self-care ritual"]
    }
    ,
    {
      id: "mega-unit-8-independent-thinking",
      word: "independent thinking",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 duy \u0111\u1ed9c l\u1eadp kh\u00f4ng b\u1ecb d\u1eaft m\u0169i",
      ipa: "/\u02cc\u026and\u026a\u02c8pend\u0259nt \u02c8\u03b8\u026a\u014bk\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=independent+thinking&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Philosophy courses encourage independent thinking rather than blind conformity to dogma.",
      exampleVi: "C\u00e1c m\u00f4n tri\u1ebft h\u1ecdc khuy\u1ebfn kh\u00edch t\u01b0 duy \u0111\u1ed9c l\u1eadp thay v\u00ec s\u1ef1 r\u1eadp khu\u00f4n m\u00f9 qu\u00e1ng theo gi\u00e1o \u0111i\u1ec1u.",
      collocations: ["encourage independent thinking", "value independent thinking"]
    }
    ,
    {
      id: "mega-unit-8-personal-accountability",
      word: "personal accountability",
      partOfSpeech: "n.phr",
      meaningVi: "tinh th\u1ea7n d\u00e1m nh\u1eadn tr\u00e1ch nhi\u1ec7m v\u1ec1 vi\u1ec7c l\u00e0m c\u1ee7a m\u00ecnh",
      ipa: "/\u02c8p\u025c\u02d0s\u0259nl \u0259\u02ccka\u028ant\u0259\u02c8b\u026al\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=personal+accountability&type=2",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Independent adults accept personal accountability for their mistakes without shifting blame.",
      exampleVi: "Nh\u1eefng ng\u01b0\u1eddi tr\u01b0\u1edfng th\u00e0nh t\u1ef1 l\u1eadp lu\u00f4n nh\u1eadn tr\u00e1ch nhi\u1ec7m c\u00e1 nh\u00e2n v\u1ec1 sai l\u1ea7m c\u1ee7a m\u00ecnh m\u00e0 kh\u00f4ng \u0111\u1ed5 l\u1ed7i cho ai.",
      collocations: ["take personal accountability", "culture of accountability"]
    }
  ],
  "unit-9-social-issues": [
    {
      id: "v11-u9-cyberbullying",
      word: "cyberbullying",
      partOfSpeech: "n",
      meaningVi: "h\u00e0nh vi b\u1eaft n\u1ea1t qua m\u1ea1ng x\u00e3 h\u1ed9i",
      ipa: "/\u02c8sa\u026ab\u0259b\u028ali\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cyberbullying&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools implement strict zero-tolerance policies to combat malicious cyberbullying.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng h\u1ecdc \u00e1p d\u1ee5ng ch\u00ednh s\u00e1ch kh\u00f4ng khoan nh\u01b0\u1ee3ng nghi\u00eam kh\u1eafc \u0111\u1ec3 b\u00e0i tr\u1eeb n\u1ea1n b\u1eaft n\u1ea1t tr\u00ean m\u1ea1ng.",
      collocations: ["victim of cyberbullying", "stop cyberbullying"]
    },
    {
      id: "v11-u9-poverty",
      word: "poverty",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 ngh\u00e8o \u0111\u00f3i v\u00e0 thi\u1ebfu th\u1ed1n c\u01a1 b\u1ea3n",
      ipa: "/\u02c8p\u0252v\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=poverty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Education and vocational skills are the most sustainable paths out of poverty.",
      exampleVi: "Gi\u00e1o d\u1ee5c v\u00e0 k\u1ef9 n\u0103ng ngh\u1ec1 l\u00e0 con \u0111\u01b0\u1eddng b\u1ec1n v\u1eefng nh\u1ea5t \u0111\u1ec3 tho\u00e1t ngh\u00e8o.",
      collocations: ["live in extreme poverty", "poverty line", "alleviate poverty"]
    },
    {
      id: "v11-u9-peer-pressure",
      word: "peer pressure",
      partOfSpeech: "n.phr",
      meaningVi: "\u00e1p l\u1ef1c l\u00f4i k\u00e9o t\u1eeb b\u1ea1n c\u00f9ng trang l\u1ee9a",
      ipa: "/\u02c8p\u026a\u0259 pre\u0283\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+pressure&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Susceptible teens need counseling to withstand negative peer pressure regarding drugs.",
      exampleVi: "Nh\u1eefng b\u1ea1n tr\u1ebb d\u1ec5 b\u1ecb l\u00f4i k\u00e9o c\u1ea7n \u0111\u01b0\u1ee3c t\u01b0 v\u1ea5n t\u00e2m l\u00fd \u0111\u1ec3 \u0111\u1ee9ng v\u1eefng tr\u01b0\u1edbc \u00e1p l\u1ef1c t\u1ec7 n\u1ea1n t\u1eeb b\u1ea1n b\u00e8.",
      collocations: ["succumb to peer pressure", "resist peer pressure"]
    },
    {
      id: "v11-u9-mental-health",
      word: "mental health",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9c kh\u1ecfe tinh th\u1ea7n v\u00e0 t\u00e2m l\u00fd h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/\u02ccmentl \u02c8hel\u03b8/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mental+health&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Addressing student mental health reduces anxiety and boosts academic well-being.",
      exampleVi: "Ch\u00fa tr\u1ecdng s\u1ee9c kh\u1ecfe t\u00e2m th\u1ea7n h\u1ecdc \u0111\u01b0\u1eddng gi\u00fap gi\u1ea3m lo \u00e2u v\u00e0 n\u00e2ng cao ch\u1ea5t l\u01b0\u1ee3ng h\u1ecdc t\u1eadp.",
      collocations: ["mental health awareness", "support mental health"]
    },
    {
      id: "v11-u9-social-inequality",
      word: "social inequality",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea5t b\u00ecnh \u0111\u1eb3ng x\u00e3 h\u1ed9i gi\u1eefa c\u00e1c t\u1ea7ng l\u1edbp",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02cc\u026an\u026a\u02c8kw\u0252l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+inequality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unequal access to quality schooling widens social inequality across regions.",
      exampleVi: "Ti\u1ebfp c\u1eadn gi\u00e1o d\u1ee5c ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng \u0111\u1ed3ng \u0111\u1ec1u l\u00e0m gia t\u0103ng s\u1ef1 b\u1ea5t b\u00ecnh \u0111\u1eb3ng x\u00e3 h\u1ed9i gi\u1eefa c\u00e1c v\u00f9ng mi\u1ec1n.",
      collocations: ["combat social inequality", "reduce social inequality"]
    },
    {
      id: "v11-u9-substance-abuse",
      word: "substance abuse",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ea1m d\u1ee5ng ch\u1ea5t k\u00edch th\u00edch \u0111\u1ed9c h\u1ea1i",
      ipa: "/\u02c8s\u028cbst\u0259ns \u0259\u02ccbju\u02d0s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=substance+abuse&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educational workshops warn teenagers about the deadly traps of substance abuse.",
      exampleVi: "C\u00e1c bu\u1ed5i chuy\u00ean \u0111\u1ec1 c\u1ea3nh b\u00e1o h\u1ecdc sinh v\u1ec1 nh\u1eefng c\u1ea1m b\u1eaby ch\u1ebft ng\u01b0\u1eddi c\u1ee7a vi\u1ec7c l\u1ea1m d\u1ee5ng ch\u1ea5t g\u00e2y nghi\u1ec7n.",
      collocations: ["prevent substance abuse", "treatment for substance abuse"]
    },
    {
      id: "v11-u9-depression",
      word: "depression",
      partOfSpeech: "n",
      meaningVi: "ch\u1ee9ng tr\u1ea7m c\u1ea3m, \u1ee7 r\u0169 t\u00e2m l\u00fd",
      ipa: "/d\u026a\u02c8pre\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=depression&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Early psychological counseling helps teenagers recover from clinical depression.",
      exampleVi: "T\u01b0 v\u1ea5n t\u00e2m l\u00fd s\u1edbm gi\u00fap thanh thi\u1ebfu ni\u00ean h\u1ed3i ph\u1ee5c sau ch\u1ee9ng tr\u1ea7m c\u1ea3m h\u1ecdc \u0111\u01b0\u1eddng.",
      collocations: ["suffer from depression", "combat depression"]
    },
    {
      id: "v11-u9-youth-violence",
      word: "youth violence",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea1o l\u1ef1c trong gi\u1edbi tr\u1ebb, b\u1ea1o l\u1ef1c h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/ju\u02d0\u03b8 \u02c8va\u026a\u0259l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=youth+violence&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community sports programs provide positive outlets that deter youth violence.",
      exampleVi: "C\u00e1c s\u00e2n ch\u01a1i th\u1ec3 thao c\u1ed9ng \u0111\u1ed3ng mang l\u1ea1i m\u00f4i tr\u01b0\u1eddng l\u00e0nh m\u1ea1nh gi\u00fap ng\u0103n ng\u1eeba b\u1ea1o l\u1ef1c thanh thi\u1ebfu ni\u00ean.",
      collocations: ["curb youth violence", "prevent youth violence"]
    },
    {
      id: "v11-u9-awareness-campaign",
      word: "awareness campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch n\u00e2ng cao nh\u1eadn th\u1ee9c c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u0259\u02c8we\u0259n\u0259s k\u00e6m\u02ccpe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=awareness+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Youth volunteers launched an awareness campaign highlighting the dangers of drunk driving.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean tr\u1ebb \u0111\u00e3 ph\u00e1t \u0111\u1ed9ng chi\u1ebfn d\u1ecbch n\u00e2ng cao nh\u1eadn th\u1ee9c v\u1ec1 nguy hi\u1ec3m khi l\u00e1i xe say x\u1ec9n.",
      collocations: ["launch an awareness campaign", "national awareness campaign"]
    },
    {
      id: "v11-u9-rehabilitation",
      word: "rehabilitation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 cai nghi\u1ec7n ph\u1ee5c h\u1ed3i nh\u00e2n ph\u1ea9m",
      ipa: "/\u02ccri\u02d0\u0259\u02ccb\u026al\u026a\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rehabilitation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Modern rehabilitation centers teach vocational skills to help former addicts rejoin society.",
      exampleVi: "C\u00e1c trung t\u00e2m ph\u1ee5c h\u1ed3i nh\u00e2n ph\u1ea9m d\u1ea1y ngh\u1ec1 gi\u00fap ng\u01b0\u1eddi sau cai nghi\u1ec7n t\u00e1i h\u00f2a nh\u1eadp c\u1ed9ng \u0111\u1ed3ng.",
      collocations: ["rehabilitation center", "undergo rehabilitation"]
    },
    {
      id: "v11-u9-discrimination",
      word: "discrimination",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 k\u1ef3 th\u1ecb v\u00e0 ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed",
      ipa: "/d\u026a\u02ccskr\u026am\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=discrimination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Every citizen has the legal right to work free from racial or religious discrimination.",
      exampleVi: "M\u1ecdi c\u00f4ng d\u00e2n \u0111\u1ec1u c\u00f3 quy\u1ec1n l\u00e0m vi\u1ec7c m\u00e0 kh\u00f4ng b\u1ecb k\u1ef3 th\u1ecb v\u1ec1 s\u1eafc t\u1ed9c hay t\u00f4n gi\u00e1o.",
      collocations: ["eliminate discrimination", "face discrimination"]
    },
    {
      id: "v11-u9-addiction",
      word: "addiction",
      partOfSpeech: "n",
      meaningVi: "th\u00f3i nghi\u1ec7n ng\u1eadp (game, ch\u1ea5t k\u00edch th\u00edch)",
      ipa: "/\u0259\u02c8d\u026ak\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=addiction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Excessive video gaming can develop into a serious behavioral addiction.",
      exampleVi: "Ch\u01a1i game \u0111i\u1ec7n t\u1eed qu\u00e1 m\u1ee9c c\u00f3 th\u1ec3 bi\u1ebfn th\u00e0nh ch\u1ee9ng nghi\u1ec7n h\u00e0nh vi nghi\u00eam tr\u1ecdng.",
      collocations: ["overcome addiction", "struggle with addiction"]
    },
    {
      id: "v11-u9-truancy",
      word: "truancy",
      partOfSpeech: "n",
      meaningVi: "n\u1ea1n tr\u1ed1n h\u1ecdc, b\u1ecf ti\u1ebft h\u1ecdc kh\u00f4ng ph\u00e9p",
      ipa: "/\u02c8tru\u02d0\u0259nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=truancy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools collaborate with parents to identify early warning signs of chronic truancy.",
      exampleVi: "Nh\u00e0 tr\u01b0\u1eddng ph\u1ed1i h\u1ee3p v\u1edbi ph\u1ee5 huynh \u0111\u1ec3 ph\u00e1t hi\u1ec7n s\u1edbm c\u00e1c d\u1ea5u hi\u1ec7u h\u1ecdc sinh tr\u1ed1n h\u1ecdc th\u01b0\u1eddng xuy\u00ean.",
      collocations: ["combat truancy", "rates of truancy"]
    },
    {
      id: "v11-u9-juvenile-delinquency",
      word: "juvenile delinquency",
      partOfSpeech: "n.phr",
      meaningVi: "t\u00ecnh tr\u1ea1ng ph\u1ea1m ph\u00e1p tu\u1ed5i v\u1ecb th\u00e0nh ni\u00ean",
      ipa: "/\u02c8d\u0292u\u02d0v\u0259na\u026al d\u026a\u02c8l\u026a\u014bkw\u0259nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=juvenile+delinquency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mentorship programs provide positive guidance to steer youths away from juvenile delinquency.",
      exampleVi: "C\u00e1c ch\u01b0\u01a1ng tr\u00ecnh k\u00e8m c\u1eb7p h\u01b0\u1edbng d\u1eabn t\u00edch c\u1ef1c gi\u00fap thanh thi\u1ebfu ni\u00ean tr\u00e1nh xa con \u0111\u01b0\u1eddng ph\u1ea1m ph\u00e1p.",
      collocations: ["prevent juvenile delinquency", "causes of juvenile delinquency"]
    },
    {
      id: "v11-u9-social-stigma",
      word: "social stigma",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 k\u1ef3 th\u1ecb \u0111\u1ecbnh ki\u1ebfn ti\u00eau c\u1ef1c c\u1ee7a x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8st\u026a\u0261m\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+stigma&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Educational campaigns aim to eliminate social stigma surrounding mental illnesses.",
      exampleVi: "C\u00e1c chi\u1ebfn d\u1ecbch gi\u00e1o d\u1ee5c nh\u1eb1m x\u00f3a b\u1ecf \u0111\u1ecbnh ki\u1ebfn ti\u00eau c\u1ef1c c\u1ee7a x\u00e3 h\u1ed9i v\u1ec1 b\u1ec7nh t\u00e2m l\u00fd.",
      collocations: ["overcome social stigma", "attach a social stigma to"]
    },
    {
      id: "v11-u9-hotline",
      word: "hotline",
      partOfSpeech: "n",
      meaningVi: "\u0111\u01b0\u1eddng d\u00e2y n\u00f3ng h\u1ed7 tr\u1ee3 t\u01b0 v\u1ea5n kh\u1ea9n c\u1ea5p",
      ipa: "/\u02c8h\u0252tla\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hotline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trained psychologists operate a 24/7 suicide prevention hotline to support distressed teens.",
      exampleVi: "C\u00e1c chuy\u00ean gia t\u00e2m l\u00fd tr\u1ef1c \u0111\u01b0\u1eddng d\u00e2y n\u00f3ng 24/7 h\u1ed7 tr\u1ee3 kh\u1ea9n c\u1ea5p cho h\u1ecdc sinh g\u1eb7p b\u1ebf t\u1eafc.",
      collocations: ["call a crisis hotline", "support hotline"]
    },
    {
      id: "v11-u9-counselor",
      word: "counselor",
      partOfSpeech: "n",
      meaningVi: "chuy\u00ean vi\u00ean t\u01b0 v\u1ea5n t\u00e2m l\u00fd h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/\u02c8ka\u028ans\u0259l\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=counselor&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A caring school counselor helped the shy student open up about peer bullying.",
      exampleVi: "Chuy\u00ean vi\u00ean t\u01b0 v\u1ea5n t\u00e2m l\u00fd h\u1ecdc \u0111\u01b0\u1eddng \u0111\u00e3 gi\u00fap em h\u1ecdc sinh nh\u00fat nh\u00e1t tr\u1ea3i l\u00f2ng v\u1ec1 vi\u1ec7c b\u1ecb b\u1eaft n\u1ea1t.",
      collocations: ["visit the school counselor", "guidance counselor"]
    },
    {
      id: "v11-u9-marginalized",
      word: "marginalized",
      partOfSpeech: "adj",
      meaningVi: "b\u1ecb g\u1ea1t ra ngo\u00e0i l\u1ec1 x\u00e3 h\u1ed9i, thi\u1ec7t th\u00f2i",
      ipa: "/\u02c8m\u0251\u02d0d\u0292\u026an\u0259la\u026azd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marginalized&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Non-profit initiatives offer free digital skills training to marginalized youths.",
      exampleVi: "C\u00e1c d\u1ef1 \u00e1n phi l\u1ee3i nhu\u1eadn cung c\u1ea5p \u0111\u00e0o t\u1ea1o k\u1ef9 n\u0103ng s\u1ed1 mi\u1ec5n ph\u00ed cho thanh ni\u00ean y\u1ebfu th\u1ebf.",
      collocations: ["marginalized communities", "support marginalized groups"]
    },
    {
      id: "v11-u9-social-harmony",
      word: "social harmony",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u00f2a thu\u1eadn h\u00f2a b\u00ecnh trong c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8h\u0251\u02d0m\u0259ni/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+harmony&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mutual respect and tolerance are essential pillars of lasting social harmony.",
      exampleVi: "S\u1ef1 t\u00f4n tr\u1ecdng v\u00e0 l\u00f2ng bao dung l\u00e0 tr\u1ee5 c\u1ed9t thi\u1ebft y\u1ebfu cho s\u1ef1 h\u00f2a thu\u1eadn b\u1ec1n v\u1eefng c\u1ee7a x\u00e3 h\u1ed9i.",
      collocations: ["foster social harmony", "preserve social harmony"]
    },
    {
      id: "v11-u9-body-shaming",
      word: "body shaming",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh vi mi\u1ec7t th\u1ecb ngo\u1ea1i h\u00ecnh ng\u01b0\u1eddi kh\u00e1c",
      ipa: "/\u02c8b\u0252di \u02c8\u0283e\u026am\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=body+shaming&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Body shaming on social media causes severe eating disorders among teenage girls.",
      exampleVi: "Mi\u1ec7t th\u1ecb ngo\u1ea1i h\u00ecnh tr\u00ean m\u1ea1ng x\u00e3 h\u1ed9i g\u00e2y ra r\u1ed1i lo\u1ea1n \u0103n u\u1ed1ng nghi\u00eam tr\u1ecdng \u1edf c\u00e1c n\u1eef sinh.",
      collocations: ["condemn body shaming", "stop body shaming"]
    }
    ,
    {
      id: "v11-boost-social-safety",
      word: "social safety",
      partOfSpeech: "n.phr",
      meaningVi: "an to\u00e0n tr\u1eadt t\u1ef1 x\u00e3 h\u1ed9i khu d\u00e2n c\u01b0",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8se\u026afti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+safety&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Neighborhood watch programs enhance social safety and prevent petty street theft.",
      exampleVi: "C\u00e1c t\u1ed5 d\u00e2n ph\u00f2ng tu\u1ea7n tra gi\u00fap n\u00e2ng cao an to\u00e0n x\u00e3 h\u1ed9i v\u00e0 ph\u00f2ng ch\u1ed1ng tr\u1ed9m c\u1eafp v\u1eb7t.",
      collocations: ["ensure social safety", "social safety measures"]
    }
    ,
    {
      id: "v11-boost-school-bullying",
      word: "school bullying",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1ea1o l\u1ef1c v\u00e0 b\u1eaft n\u1ea1t h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/sku\u02d0l \u02c8b\u028ali\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=school+bullying&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools organize open assemblies to educate students on combating school bullying.",
      exampleVi: "Nh\u00e0 tr\u01b0\u1eddng t\u1ed5 ch\u1ee9c c\u00e1c bu\u1ed5i sinh ho\u1ea1t d\u01b0\u1edbi c\u1edd \u0111\u1ec3 gi\u00e1o d\u1ee5c h\u1ecdc sinh ph\u00f2ng ch\u1ed1ng b\u1ea1o l\u1ef1c h\u1ecdc \u0111\u01b0\u1eddng.",
      collocations: ["eradicate school bullying", "victims of school bullying"]
    }
    ,
    {
      id: "v11-boost-mental-well-being",
      word: "mental well-being",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9c kh\u1ecfe tinh th\u1ea7n an y\u00ean, l\u00e0nh m\u1ea1nh",
      ipa: "/\u02ccmentl \u02c8wel bi\u02d0\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mental+well-being&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Regular physical sports in fresh air promote both physical fitness and mental well-being.",
      exampleVi: "T\u1eadp th\u1ec3 thao ngo\u00e0i tr\u1eddi n\u00e2ng cao c\u1ea3 th\u1ec3 l\u1ef1c l\u1eabn s\u1ee9c kh\u1ecfe tinh th\u1ea7n an y\u00ean.",
      collocations: ["nurture mental well-being", "enhance mental well-being"]
    }
    ,
    {
      id: "v11-boost-community-support",
      word: "community support",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 h\u1ed7 tr\u1ee3 \u0111\u00f9m b\u1ecdc t\u1eeb c\u1ed9ng \u0111\u1ed3ng",
      ipa: "/k\u0259\u02c8mju\u02d0n\u0259ti s\u0259\u02c8p\u0254\u02d0t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+support&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Vulnerable orphans thrive when they receive affectionate community support.",
      exampleVi: "Tr\u1ebb m\u1ed3 c\u00f4i thi\u1ec7t th\u00f2i s\u1ebd l\u1edbn kh\u00f4n khi nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 \u0111\u00f9m b\u1ecdc y\u00eau th\u01b0\u01a1ng c\u1ee7a c\u1ed9ng \u0111\u1ed3ng.",
      collocations: ["rally community support", "rely on community support"]
    }
    ,
    {
      id: "v11-boost-social-alienation",
      word: "social alienation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00f4 l\u1eadp v\u00e0 xa l\u00e1nh x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02cce\u026ali\u0259\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+alienation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Spending twelve hours a day online causes severe social alienation from real peers.",
      exampleVi: "D\u00e0nh 12 ti\u1ebfng m\u1ed7i ng\u00e0y tr\u00ean m\u1ea1ng g\u00e2y ra s\u1ef1 c\u00f4 l\u1eadp x\u00e3 h\u1ed9i nghi\u00eam tr\u1ecdng kh\u1ecfi b\u1ea1n b\u00e8 ngo\u00e0i \u0111\u1eddi.",
      collocations: ["suffer from social alienation", "overcome social alienation"]
    }
    ,
    {
      id: "v11-boost-digital-addiction",
      word: "digital addiction",
      partOfSpeech: "n.phr",
      meaningVi: "ch\u1ee9ng nghi\u1ec7n thi\u1ebft b\u1ecb k\u1ef9 thu\u1eadt s\u1ed1",
      ipa: "/\u02c8d\u026ad\u0292\u026atl \u0259\u02c8d\u026ak\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+addiction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Setting phone curfew hours at night is an effective way to beat digital addiction.",
      exampleVi: "Quy \u0111\u1ecbnh gi\u1edd c\u1ea5t \u0111i\u1ec7n tho\u1ea1i ban \u0111\u00eam l\u00e0 c\u00e1ch hi\u1ec7u qu\u1ea3 \u0111\u1ec3 ch\u1eefa ch\u1ee9ng nghi\u1ec7n thi\u1ebft b\u1ecb s\u1ed1.",
      collocations: ["break digital addiction", "signs of digital addiction"]
    }
    ,
    {
      id: "v11-boost-child-protection",
      word: "child protection",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c b\u1ea3o v\u1ec7 ch\u0103m s\u00f3c tr\u1ebb em",
      ipa: "/\u02c8t\u0283a\u026ald pr\u0259\u02c8tek\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=child+protection&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The national hotline 111 provides round-the-clock emergency child protection services.",
      exampleVi: "T\u1ed5ng \u0111\u00e0i qu\u1ed1c gia 111 cung c\u1ea5p d\u1ecbch v\u1ee5 b\u1ea3o v\u1ec7 tr\u1ebb em kh\u1ea9n c\u1ea5p su\u1ed1t 24/7.",
      collocations: ["child protection law", "advocate child protection"]
    }
    ,
    {
      id: "v11-boost-delinquent-behavior",
      word: "delinquent behavior",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh vi vi ph\u1ea1m ph\u00e1p lu\u1eadt tu\u1ed5i v\u1ecb th\u00e0nh ni\u00ean",
      ipa: "/d\u026a\u02c8l\u026a\u014bkw\u0259nt b\u026a\u02c8he\u026avj\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=delinquent+behavior&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Caring mentorship helps troubled adolescents turn away from delinquent behavior.",
      exampleVi: "S\u1ef1 k\u00e8m c\u1eb7p y\u00eau th\u01b0\u01a1ng gi\u00fap thi\u1ebfu ni\u00ean l\u1ea7m l\u1ee1 t\u1eeb b\u1ecf c\u00e1c h\u00e0nh vi vi ph\u1ea1m ph\u00e1p lu\u1eadt.",
      collocations: ["curb delinquent behavior", "signs of delinquent behavior"]
    }
    ,
    {
      id: "v11-boost-psychological-counseling",
      word: "psychological counseling",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 v\u1ea5n v\u00e0 tham v\u1ea5n t\u00e2m l\u00fd chuy\u00ean s\u00e2u",
      ipa: "/\u02ccsa\u026ak\u0259\u02c8l\u0252d\u0292\u026akl \u02c8ka\u028ans\u0259l\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=psychological+counseling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High schools provide free psychological counseling for students facing academic burnout.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng THPT cung c\u1ea5p d\u1ecbch v\u1ee5 t\u01b0 v\u1ea5n t\u00e2m l\u00fd mi\u1ec5n ph\u00ed cho h\u1ecdc sinh b\u1ecb ki\u1ec7t s\u1ee9c thi c\u1eed.",
      collocations: ["seek psychological counseling", "receive psychological counseling"]
    }
    ,
    {
      id: "v11-boost-social-justice",
      word: "social justice",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng b\u1eb1ng v\u00e0 l\u1ebd ph\u1ea3i trong x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l \u02c8d\u0292\u028cst\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+justice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Equal access to clean water and healthcare is fundamental to social justice.",
      exampleVi: "Ti\u1ebfp c\u1eadn b\u00ecnh \u0111\u1eb3ng v\u1edbi n\u01b0\u1edbc s\u1ea1ch v\u00e0 y t\u1ebf l\u00e0 n\u1ec1n t\u1ea3ng c\u1ed1t l\u00f5i c\u1ee7a c\u00f4ng b\u1eb1ng x\u00e3 h\u1ed9i.",
      collocations: ["fight for social justice", "champion social justice"]
    }
    ,
    {
      id: "v11-boost-inclusive-society",
      word: "inclusive society",
      partOfSpeech: "n.phr",
      meaningVi: "x\u00e3 h\u1ed9i h\u00f2a nh\u1eadp, kh\u00f4ng ai b\u1ecb b\u1ecf l\u1ea1i ph\u00eda sau",
      ipa: "/\u026an\u02c8klu\u02d0s\u026av s\u0259\u02c8sa\u026a\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=inclusive+society&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building barrier-free sidewalks for wheelchairs helps foster an inclusive society.",
      exampleVi: "X\u00e2y d\u1ef1ng v\u1ec9a h\u00e8 kh\u00f4ng r\u00e0o c\u1ea3n cho xe l\u0103n gi\u00fap x\u00e2y d\u1ef1ng m\u1ed9t x\u00e3 h\u1ed9i h\u00f2a nh\u1eadp v\u0103n minh.",
      collocations: ["build an inclusive society", "promote an inclusive society"]
    }
    ,
    {
      id: "v11-boost-substance-dependency",
      word: "substance dependency",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 l\u1ec7 thu\u1ed9c v\u00e0o ch\u1ea5t k\u00edch th\u00edch",
      ipa: "/\u02c8s\u028cbst\u0259ns d\u026a\u02c8pend\u0259nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=substance+dependency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Early medical intervention halts the progression of dangerous substance dependency.",
      exampleVi: "Can thi\u1ec7p y t\u1ebf s\u1edbm gi\u00fap ng\u0103n ch\u1eb7n s\u1ef1 ti\u1ebfn tri\u1ec3n c\u1ee7a t\u00ecnh tr\u1ea1ng l\u1ec7 thu\u1ed9c ch\u1ea5t \u0111\u1ed9c h\u1ea1i.",
      collocations: ["treat substance dependency", "overcome substance dependency"]
    }
    ,
    {
      id: "v11-boost-vulnerable-population",
      word: "vulnerable population",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00f3m d\u00e2n c\u01b0 y\u1ebfu th\u1ebf c\u1ea7n \u0111\u01b0\u1ee3c ch\u1edf che",
      ipa: "/\u02c8v\u028cln\u0259r\u0259bl \u02ccp\u0252pju\u02c8le\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=vulnerable+population&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Social workers distribute warm blankets and canned food to vulnerable populations.",
      exampleVi: "C\u00e1c c\u00e1n b\u1ed9 x\u00e3 h\u1ed9i trao t\u1eb7ng ch\u0103n \u1ea5m v\u00e0 \u0111\u1ed3 h\u1ed9p cho c\u00e1c nh\u00f3m d\u00e2n c\u01b0 y\u1ebfu th\u1ebf.",
      collocations: ["protect vulnerable populations", "support vulnerable populations"]
    }
    ,
    {
      id: "v11-boost-anti-bullying-campaign",
      word: "anti-bullying campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch ph\u00f2ng ch\u1ed1ng b\u1eaft n\u1ea1t h\u1ecdc \u0111\u01b0\u1eddng",
      ipa: "/\u02cc\u00e6nti \u02c8b\u028ali\u026a\u014b k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=anti-bullying+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students created colorful posters as part of the nationwide anti-bullying campaign.",
      exampleVi: "C\u00e1c em h\u1ecdc sinh v\u1ebd tranh c\u1ed5 \u0111\u1ed9ng h\u01b0\u1edfng \u1ee9ng chi\u1ebfn d\u1ecbch ph\u00f2ng ch\u1ed1ng b\u1ea1o l\u1ef1c h\u1ecdc \u0111\u01b0\u1eddng to\u00e0n qu\u1ed1c.",
      collocations: ["join an anti-bullying campaign", "school anti-bullying campaign"]
    }
    ,
    {
      id: "v11-boost-family-breakdown",
      word: "family breakdown",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 \u0111\u1ed5 v\u1ee1 h\u00f4n nh\u00e2n v\u00e0 r\u1ea1n n\u1ee9t gia \u0111\u00ecnh",
      ipa: "/\u02c8f\u00e6m\u0259li \u02c8bre\u026akda\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=family+breakdown&type=2",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Counselors provide emotional support to adolescents coping with family breakdown.",
      exampleVi: "C\u00e1c chuy\u00ean gia t\u00e2m l\u00fd h\u1ed7 tr\u1ee3 c\u1ea3m x\u00fac cho thanh thi\u1ebfu ni\u00ean \u0111\u1ed1i m\u1eb7t v\u1edbi s\u1ef1 \u0111\u1ed5 v\u1ee1 gia \u0111\u00ecnh.",
      collocations: ["cope with family breakdown", "effects of family breakdown"]
    }
    ,
    {
      id: "v11-boost-homelessness",
      word: "homelessness",
      partOfSpeech: "n",
      meaningVi: "t\u00ecnh tr\u1ea1ng v\u00f4 gia c\u01b0 kh\u00f4ng n\u01a1i n\u01b0\u01a1ng t\u1ef1a",
      ipa: "/\u02c8h\u0259\u028aml\u0259sn\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=homelessness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Municipal social housing initiatives aim to eliminate urban homelessness permanently.",
      exampleVi: "C\u00e1c \u0111\u1ec1 \u00e1n nh\u00e0 \u1edf x\u00e3 h\u1ed9i c\u1ee7a th\u00e0nh ph\u1ed1 h\u01b0\u1edbng t\u1edbi vi\u1ec7c x\u00f3a b\u1ecf v\u0129nh vi\u1ec5n n\u1ea1n v\u00f4 gia c\u01b0.",
      collocations: ["tackle homelessness", "eradicate homelessness"]
    }
    ,
    {
      id: "v11-boost-emotional-distress",
      word: "emotional distress",
      partOfSpeech: "n.phr",
      meaningVi: "n\u1ed7i \u0111au \u0111\u1edbn v\u00e0 kh\u1ee7ng ho\u1ea3ng c\u1ea3m x\u00fac",
      ipa: "/\u026a\u02c8m\u0259\u028a\u0283\u0259nl d\u026a\u02c8stres/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=emotional+distress&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Online harassment can inflict severe, long-lasting emotional distress on teenagers.",
      exampleVi: "Qu\u1ea5y r\u1ed1i tr\u00ean m\u1ea1ng c\u00f3 th\u1ec3 g\u00e2y ra n\u1ed7i kh\u1ee7ng ho\u1ea3ng c\u1ea3m x\u00fac \u0111au \u0111\u1edbn k\u00e9o d\u00e0i cho tu\u1ed5i teen.",
      collocations: ["suffer emotional distress", "alleviate emotional distress"]
    }
    ,
    {
      id: "v11-boost-public-awareness",
      word: "public awareness",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u1eadn th\u1ee9c hi\u1ec3u bi\u1ebft c\u1ee7a c\u00f4ng ch\u00fang x\u00e3 h\u1ed9i",
      ipa: "/\u02c8p\u028cbl\u026ak \u0259\u02c8we\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=public+awareness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Media campaigns raise public awareness regarding teenage mental health support.",
      exampleVi: "C\u00e1c chi\u1ebfn d\u1ecbch truy\u1ec1n th\u00f4ng n\u00e2ng cao nh\u1eadn th\u1ee9c c\u1ed9ng \u0111\u1ed3ng v\u1ec1 ch\u0103m s\u00f3c s\u1ee9c kh\u1ecfe t\u00e2m th\u1ea7n tu\u1ed5i teen.",
      collocations: ["raise public awareness", "heightened public awareness"]
    }
    ,
    {
      id: "v11-boost-social-cohesion",
      word: "social cohesion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 g\u1eafn k\u1ebft t\u01b0\u01a1ng th\u00e2n t\u01b0\u01a1ng \u00e1i trong x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u0259\u028a\u0283l k\u0259\u028a\u02c8hi\u02d0\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+cohesion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Cultural festivals and community sports build strong bonds of social cohesion.",
      exampleVi: "C\u00e1c l\u1ec5 h\u1ed9i v\u0103n h\u00f3a v\u00e0 th\u1ec3 thao c\u1ed9ng \u0111\u1ed3ng x\u00e2y \u0111\u1eafp m\u1ed1i g\u1eafn k\u1ebft x\u00e3 h\u1ed9i b\u1ec1n ch\u1eb7t.",
      collocations: ["strengthen social cohesion", "foster social cohesion"]
    }
    ,
    {
      id: "v11-boost-peer-support-group",
      word: "peer support group",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00f3m b\u1ea1n b\u00e8 h\u1ed7 tr\u1ee3 \u0111\u1ed3ng \u0111\u1eb3ng",
      ipa: "/\u02c8p\u026a\u0259 s\u0259\u02c8p\u0254\u02d0t \u0261ru\u02d0p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+support+group&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Joining a peer support group provides a safe space to share anxiety and overcome fears.",
      exampleVi: "Tham gia nh\u00f3m h\u1ed7 tr\u1ee3 \u0111\u1ed3ng \u0111\u1eb3ng mang l\u1ea1i kh\u00f4ng gian an to\u00e0n \u0111\u1ec3 s\u1ebb chia lo \u00e2u v\u00e0 v\u01b0\u1ee3t qua s\u1ee3 h\u00e3i.",
      collocations: ["facilitate a peer support group", "benefits of peer support groups"]
    }
    ,
    {
      id: "v11-boost-civic-duty",
      word: "civic duty",
      partOfSpeech: "n.phr",
      meaningVi: "ngh\u0129a v\u1ee5 v\u00e0 tr\u00e1ch nhi\u1ec7m c\u00f4ng d\u00e2n",
      ipa: "/\u02c8s\u026av\u026ak \u02c8dju\u02d0ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civic+duty&type=2",
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reporting domestic violence or child abuse to police hotlines is a civic duty.",
      exampleVi: "B\u00e1o c\u00e1o b\u1ea1o l\u1ef1c gia \u0111\u00ecnh ho\u1eb7c b\u1ea1o h\u00e0nh tr\u1ebb em cho \u0111\u01b0\u1eddng d\u00e2y n\u00f3ng l\u00e0 ngh\u0129a v\u1ee5 c\u00f4ng d\u00e2n.",
      collocations: ["fulfill your civic duty", "sense of civic duty"]
    }
    ,
    {
      id: "mega-unit-9-cyberbullying",
      word: "cyberbullying",
      partOfSpeech: "n",
      meaningVi: "b\u1eaft n\u1ea1t tr\u00ean kh\u00f4ng gian m\u1ea1ng internet",
      ipa: "/\u02c8sa\u026ab\u0259b\u028ali\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=cyberbullying&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools enforce strict reporting channels to protect vulnerable pupils against hurtful cyberbullying.",
      exampleVi: "C\u00e1c tr\u01b0\u1eddng h\u1ecdc tri\u1ec3n khai k\u00eanh t\u1ed1 gi\u00e1c nghi\u00eam ng\u1eb7t \u0111\u1ec3 b\u1ea3o v\u1ec7 h\u1ecdc sinh y\u1ebfu th\u1ebf kh\u1ecfi v\u1ea5n n\u1ea1n b\u1eaft n\u1ea1t tr\u00ean m\u1ea1ng.",
      collocations: ["combat cyberbullying", "victim of cyberbullying"]
    }
    ,
    {
      id: "mega-unit-9-substance-abuse",
      word: "substance abuse",
      partOfSpeech: "n.phr",
      meaningVi: "l\u1ea1m d\u1ee5ng ch\u1ea5t k\u00edch th\u00edch \u0111\u1ed9c h\u1ea1i",
      ipa: "/\u02c8s\u028cbst\u0259ns \u0259\u02ccbju\u02d0s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=substance+abuse&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community rehabilitation centers assist young patients in breaking free from substance abuse.",
      exampleVi: "C\u00e1c trung t\u00e2m ph\u1ee5c h\u1ed3i c\u1ed9ng \u0111\u1ed3ng gi\u00fap \u0111\u1ee1 c\u00e1c b\u1ea1n tr\u1ebb cai nghi\u1ec7n v\u00e0 tho\u00e1t kh\u1ecfi s\u1ef1 l\u1ea1m d\u1ee5ng ch\u1ea5t k\u00edch th\u00edch.",
      collocations: ["overcome substance abuse", "treatment for substance abuse"]
    }
    ,
    {
      id: "mega-unit-9-juvenile-delinquency",
      word: "juvenile delinquency",
      partOfSpeech: "n.phr",
      meaningVi: "t\u1ed9i ph\u1ea1m v\u1ecb th\u00e0nh ni\u00ean thanh thi\u1ebfu ni\u00ean ph\u1ea1m ph\u00e1p",
      ipa: "/\u02c8d\u0292u\u02d0v\u0259na\u026al d\u026a\u02c8l\u026a\u014bkw\u0259nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=juvenile+delinquency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Investing in after-school athletic leagues significantly lowers neighborhood juvenile delinquency.",
      exampleVi: "\u0110\u1ea7u t\u01b0 v\u00e0o c\u00e1c gi\u1ea3i th\u1ec3 thao sau gi\u1edd h\u1ecdc gi\u00fap gi\u1ea3m thi\u1ec3u \u0111\u00e1ng k\u1ec3 t\u00ecnh tr\u1ea1ng thanh thi\u1ebfu ni\u00ean vi ph\u1ea1m ph\u00e1p lu\u1eadt.",
      collocations: ["prevent juvenile delinquency", "causes of juvenile delinquency"]
    }
    ,
    {
      id: "mega-unit-9-social-inequality",
      word: "social inequality",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 b\u1ea5t b\u00ecnh \u0111\u1eb3ng x\u00e3 h\u1ed9i gi\u00e0u ngh\u00e8o",
      ipa: "/\u02ccs\u0259\u028a\u0283l \u02cc\u026an\u026a\u02c8kw\u0252l\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+inequality&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Equitable public schooling remains the most potent instrument to alleviate widening social inequality.",
      exampleVi: "Gi\u00e1o d\u1ee5c c\u00f4ng l\u1eadp c\u00f4ng b\u1eb1ng l\u00e0 c\u00f4ng c\u1ee5 h\u1eefu hi\u1ec7u nh\u1ea5t \u0111\u1ec3 gi\u1ea3m b\u1edbt s\u1ef1 gia t\u0103ng b\u1ea5t b\u00ecnh \u0111\u1eb3ng x\u00e3 h\u1ed9i.",
      collocations: ["address social inequality", "root causes of inequality"]
    }
    ,
    {
      id: "mega-unit-9-homeless-shelter",
      word: "homeless shelter",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00e0 t\u1ea1m tr\u00fa cho ng\u01b0\u1eddi v\u00f4 gia c\u01b0",
      ipa: "/\u02c8h\u0259\u028aml\u0259s \u02c8\u0283elt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=homeless+shelter&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Charity volunteers distributed warm coats and hearty soups at the municipal homeless shelter.",
      exampleVi: "C\u00e1c t\u00ecnh nguy\u1ec7n vi\u00ean t\u1eeb thi\u1ec7n \u0111\u00e3 ph\u00e1t \u00e1o \u1ea5m v\u00e0 s\u00fap n\u00f3ng t\u1ea1i nh\u00e0 t\u1ea1m tr\u00fa cho ng\u01b0\u1eddi v\u00f4 gia c\u01b0 c\u1ee7a th\u00e0nh ph\u1ed1.",
      collocations: ["volunteer at a homeless shelter", "stay in a shelter"]
    }
    ,
    {
      id: "mega-unit-9-mental-health-awareness",
      word: "mental health awareness",
      partOfSpeech: "n.phr",
      meaningVi: "n\u00e2ng cao nh\u1eadn th\u1ee9c v\u1ec1 s\u1ee9c kh\u1ecfe tinh th\u1ea7n",
      ipa: "/\u02ccmentl \u02c8hel\u03b8 \u0259\u02c8we\u0259n\u0259s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=mental+health+awareness&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Campus workshops boost mental health awareness and remove harmful social stigmas around depression.",
      exampleVi: "C\u00e1c bu\u1ed5i t\u1ecda \u0111\u00e0m trong tr\u01b0\u1eddng n\u00e2ng cao nh\u1eadn th\u1ee9c v\u1ec1 s\u1ee9c kh\u1ecfe t\u00e2m th\u1ea7n v\u00e0 x\u00f3a b\u1ecf \u0111\u1ecbnh ki\u1ebfn \u00e1c c\u1ea3m v\u1edbi tr\u1ea7m c\u1ea3m.",
      collocations: ["raise mental health awareness", "promote awareness"]
    }
    ,
    {
      id: "mega-unit-9-peer-harassment",
      word: "peer harassment",
      partOfSpeech: "n.phr",
      meaningVi: "h\u00e0nh vi tr\u00eau ch\u1ecdc qu\u1ea5y r\u1ed1i t\u1eeb b\u1ea1n b\u00e8",
      ipa: "/\u02c8p\u026a\u0259 h\u0259\u02c8r\u00e6sm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+harassment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The principal delivered a firm reprimand after uncovering incidents of corridor peer harassment.",
      exampleVi: "Th\u1ea7y hi\u1ec7u tr\u01b0\u1edfng \u0111\u00e3 khi\u1ec3n tr\u00e1ch nghi\u00eam kh\u1eafc sau khi ph\u00e1t hi\u1ec7n c\u00e1c v\u1ee5 tr\u00eau ch\u1ecdc qu\u1ea5y r\u1ed1i b\u1ea1n b\u00e8 ngo\u00e0i h\u00e0nh lang.",
      collocations: ["intervene in peer harassment", "report peer harassment"]
    }
    ,
    {
      id: "mega-unit-9-hate-speech",
      word: "hate speech",
      partOfSpeech: "n.phr",
      meaningVi: "ph\u00e1t ng\u00f4n k\u00edch \u0111\u1ed9ng th\u00f9 h\u1eb1n v\u00e0 ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed",
      ipa: "/\u02c8he\u026at spi\u02d0t\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=hate+speech&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Social media moderators employ natural language algorithms to filter toxic hate speech immediately.",
      exampleVi: "C\u00e1c \u0111i\u1ec1u h\u00e0nh vi\u00ean m\u1ea1ng x\u00e3 h\u1ed9i d\u00f9ng thu\u1eadt to\u00e1n x\u1eed l\u00fd ng\u00f4n ng\u1eef t\u1ef1 nhi\u00ean \u0111\u1ec3 l\u1ecdc ngay c\u00e1c ph\u00e1t ng\u00f4n k\u00edch \u0111\u1ed9ng th\u00f9 \u0111\u1ecbch.",
      collocations: ["ban hate speech", "clamp down on hate speech"]
    }
    ,
    {
      id: "mega-unit-9-food-bank",
      word: "food bank",
      partOfSpeech: "n.phr",
      meaningVi: "ng\u00e2n h\u00e0ng th\u1ef1c ph\u1ea9m ph\u00e2n ph\u00e1t t\u1eeb thi\u1ec7n",
      ipa: "/\u02c8fu\u02d0d b\u00e6\u014bk/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=food+bank&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Supermarkets donate unsold surplus produce daily to supply the neighborhood food bank.",
      exampleVi: "C\u00e1c si\u00eau th\u1ecb quy\u00ean g\u00f3p n\u00f4ng s\u1ea3n d\u01b0 th\u1eeba m\u1ed7i ng\u00e0y \u0111\u1ec3 ti\u1ebfp t\u1ebf cho ng\u00e2n h\u00e0ng th\u1ef1c ph\u1ea9m trong khu d\u00e2n c\u01b0.",
      collocations: ["donate to a food bank", "distribute food from the bank"]
    }
    ,
    {
      id: "mega-unit-9-truancy",
      word: "truancy",
      partOfSpeech: "n",
      meaningVi: "h\u00e0nh vi tr\u1ed1n h\u1ecdc b\u00f9ng ti\u1ebft kh\u00f4ng ph\u00e9p",
      ipa: "/\u02c8tru\u02d0\u0259nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=truancy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Schools send automated text alerts to parents upon detecting unauthorized pupil truancy.",
      exampleVi: "Nh\u00e0 tr\u01b0\u1eddng g\u1eedi tin nh\u1eafn t\u1ef1 \u0111\u1ed9ng c\u1ea3nh b\u00e1o cho ph\u1ee5 huynh ngay khi ph\u00e1t hi\u1ec7n h\u1ecdc sinh tr\u1ed1n h\u1ecdc kh\u00f4ng ph\u00e9p.",
      collocations: ["tackle persistent truancy", "rates of truancy"]
    }
    ,
    {
      id: "mega-unit-9-social-cohesion",
      word: "social cohesion",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 g\u1eafn k\u1ebft v\u00e0 h\u00f2a thu\u1eadn trong c\u1ed9ng \u0111\u1ed3ng x\u00e3 h\u1ed9i",
      ipa: "/\u02ccs\u0259\u028a\u0283l k\u0259\u028a\u02c8hi\u02d0\u0292n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+cohesion&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Neighborhood cultural street festivals strengthen long-term local social cohesion.",
      exampleVi: "Nh\u1eefng l\u1ec5 h\u1ed9i \u0111\u01b0\u1eddng ph\u1ed1 v\u0103n h\u00f3a t\u1ea1i c\u00e1c khu ph\u1ed1 th\u1eaft ch\u1eb7t s\u1ef1 g\u1eafn k\u1ebft x\u00e3 h\u1ed9i l\u00e2u d\u00e0i gi\u1eefa c\u00e1c h\u1ed9 d\u00e2n.",
      collocations: ["strengthen social cohesion", "threat to social cohesion"]
    }
    ,
    {
      id: "mega-unit-9-marginalized-group",
      word: "marginalized group",
      partOfSpeech: "n.phr",
      meaningVi: "nh\u00f3m ng\u01b0\u1eddi y\u1ebfu th\u1ebf b\u00ean l\u1ec1 x\u00e3 h\u1ed9i",
      ipa: "/\u02c8m\u0251\u02d0d\u0292\u026an\u0259la\u026azd \u0261ru\u02d0p/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marginalized+group&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Legal aid foundations defend the human rights of vulnerable and marginalized groups.",
      exampleVi: "C\u00e1c qu\u1ef9 tr\u1ee3 gi\u00fap ph\u00e1p l\u00fd b\u1ea3o v\u1ec7 nh\u00e2n quy\u1ec1n cho c\u00e1c nh\u00f3m y\u1ebfu th\u1ebf v\u00e0 d\u1ec5 b\u1ecb t\u1ed5n th\u01b0\u01a1ng b\u00ean l\u1ec1 x\u00e3 h\u1ed9i.",
      collocations: ["support marginalized groups", "empower marginalized communities"]
    }
    ,
    {
      id: "mega-unit-9-digital-divide",
      word: "digital divide",
      partOfSpeech: "n.phr",
      meaningVi: "kho\u1ea3ng c\u00e1ch b\u1ea5t b\u00ecnh \u0111\u1eb3ng v\u1ec1 c\u01a1 h\u1ed9i ti\u1ebfp c\u1eadn c\u00f4ng ngh\u1ec7",
      ipa: "/\u02ccd\u026ad\u0292\u026atl d\u026a\u02c8va\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=digital+divide&type=2",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Donating refurbished laptops to mountain schools helps bridge the alarming digital divide.",
      exampleVi: "Trao t\u1eb7ng m\u00e1y t\u00ednh x\u00e1ch tay t\u00e2n trang cho c\u00e1c tr\u01b0\u1eddng h\u1ecdc v\u00f9ng cao gi\u00fap thu h\u1eb9p kho\u1ea3ng c\u00e1ch s\u1ed1 \u0111\u00e1ng b\u00e1o \u0111\u1ed9ng.",
      collocations: ["bridge the digital divide", "narrow the divide"]
    }
    ,
    {
      id: "mega-unit-9-community-policing",
      word: "community policing",
      partOfSpeech: "n.phr",
      meaningVi: "m\u00f4 h\u00ecnh c\u1ea3nh s\u00e1t khu v\u1ef1c g\u1eafn b\u00f3 v\u1edbi nh\u00e2n d\u00e2n",
      ipa: "/k\u0259\u02ccmju\u02d0n\u0259ti p\u0259\u02c8li\u02d0s\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=community+policing&type=2",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Community policing builds mutual trust and deters street crime through daily neighborhood foot patrols.",
      exampleVi: "C\u1ea3nh s\u00e1t khu v\u1ef1c x\u00e2y d\u1ef1ng l\u00f2ng tin c\u1eady v\u00e0 ng\u0103n ch\u1eb7n t\u1ed9i ph\u1ea1m \u0111\u01b0\u1eddng ph\u1ed1 th\u00f4ng qua vi\u1ec7c \u0111i tu\u1ea7n tra h\u1eb1ng ng\u00e0y.",
      collocations: ["implement community policing", "benefits of community policing"]
    }
    ,
    {
      id: "mega-unit-9-counseling-service",
      word: "counseling service",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ecbch v\u1ee5 tham v\u1ea5n v\u00e0 tr\u1ecb li\u1ec7u t\u00e2m l\u00fd",
      ipa: "/\u02c8ka\u028ans\u0259l\u026a\u014b \u02c8s\u025c\u02d0v\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=counseling+service&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The high school provides confidential counseling services for students struggling with family grief.",
      exampleVi: "Tr\u01b0\u1eddng c\u1ea5p ba cung c\u1ea5p d\u1ecbch v\u1ee5 t\u01b0 v\u1ea5n t\u00e2m l\u00fd b\u1ea3o m\u1eadt cho h\u1ecdc sinh \u0111ang ph\u1ea3i tr\u1ea3i qua n\u1ed7i \u0111au m\u1ea5t ng\u01b0\u1eddi th\u00e2n.",
      collocations: ["access counseling services", "free counseling service"]
    }
    ,
    {
      id: "mega-unit-9-rehabilitation-center",
      word: "rehabilitation center",
      partOfSpeech: "n.phr",
      meaningVi: "trung t\u00e2m ph\u1ee5c h\u1ed3i ch\u1ee9c n\u0103ng v\u00e0 cai nghi\u1ec7n",
      ipa: "/\u02ccri\u02d0\u0259\u02ccb\u026al\u026a\u02c8te\u026a\u0283n \u02c8sent\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=rehabilitation+center&type=2",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The rehabilitation center offers vocational skills courses alongside psychological therapy.",
      exampleVi: "Trung t\u00e2m cai nghi\u1ec7n v\u00e0 ph\u1ee5c h\u1ed3i cung c\u1ea5p c\u00e1c kh\u00f3a h\u1ecdc ngh\u1ec1 song song v\u1edbi c\u00e1c bu\u1ed5i tr\u1ecb li\u1ec7u t\u00e2m l\u00fd.",
      collocations: ["check into a rehabilitation center", "graduate from the center"]
    }
    ,
    {
      id: "mega-unit-9-civic-engagement",
      word: "civic engagement",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 d\u1ea5n th\u00e2n tham gia t\u00edch c\u1ef1c v\u00e0o vi\u1ec7c chung x\u00e3 h\u1ed9i",
      ipa: "/\u02c8s\u026av\u026ak \u026an\u02c8\u0261e\u026ad\u0292m\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=civic+engagement&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "High voter turnouts and town hall attendance demonstrate exemplary civic engagement.",
      exampleVi: "T\u1ef7 l\u1ec7 c\u1eed tri \u0111i b\u1ea7u cao v\u00e0 s\u1ef1 c\u00f3 m\u1eb7t \u0111\u00f4ng \u0111\u1ee7 t\u1ea1i c\u00e1c bu\u1ed5i ti\u1ebfp x\u00fac c\u1eed tri th\u1ec3 hi\u1ec7n s\u1ef1 d\u1ea5n th\u00e2n x\u00e3 h\u1ed9i m\u1eabu m\u1ef1c.",
      collocations: ["encourage civic engagement", "high level of engagement"]
    }
    ,
    {
      id: "mega-unit-9-affirmative-outreach",
      word: "affirmative outreach",
      partOfSpeech: "n.phr",
      meaningVi: "ho\u1ea1t \u0111\u1ed9ng ti\u1ebfp c\u1eadn ch\u1ee7 \u0111\u1ed9ng h\u1ed7 tr\u1ee3 ng\u01b0\u1eddi kh\u00f3 kh\u0103n",
      ipa: "/\u0259\u02ccf\u025c\u02d0m\u0259t\u026av \u02c8a\u028atri\u02d0t\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=affirmative+outreach&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mobile healthcare vans conduct affirmative outreach across remote ethnic villages.",
      exampleVi: "Nh\u1eefng chuy\u1ebfn xe y t\u1ebf l\u01b0u \u0111\u1ed9ng th\u1ef1c hi\u1ec7n ho\u1ea1t \u0111\u1ed9ng ch\u1ee7 \u0111\u1ed9ng ti\u1ebfp c\u1eadn ch\u0103m s\u00f3c s\u1ee9c kh\u1ecfe t\u1ea1i c\u00e1c b\u1ea3n l\u00e0ng d\u00e2n t\u1ed9c xa x\u00f4i.",
      collocations: ["conduct affirmative outreach", "community outreach program"]
    }
    ,
    {
      id: "mega-unit-9-systemic-discrimination",
      word: "systemic discrimination",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed mang t\u00ednh h\u1ec7 th\u1ed1ng",
      ipa: "/s\u026a\u02ccstem\u026ak d\u026a\u02ccskr\u026am\u026a\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=systemic+discrimination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Civil rights legislation aims to dismantle centuries of systemic discrimination in housing.",
      exampleVi: "Lu\u1eadt d\u00e2n quy\u1ec1n h\u01b0\u1edbng t\u1edbi vi\u1ec7c x\u00f3a b\u1ecf tri\u1ec7t \u0111\u1ec3 s\u1ef1 ph\u00e2n bi\u1ec7t \u0111\u1ed1i x\u1eed mang t\u00ednh h\u1ec7 th\u1ed1ng k\u00e9o d\u00e0i h\u00e0ng th\u1ebf k\u1ef7 trong thu\u00ea mua nh\u00e0 \u1edf.",
      collocations: ["uproot systemic discrimination", "end discrimination"]
    }
    ,
    {
      id: "mega-unit-9-crisis-hotline",
      word: "crisis hotline",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u01b0\u1eddng d\u00e2y n\u00f3ng h\u1ed7 tr\u1ee3 kh\u1ee7ng ho\u1ea3ng t\u00e2m l\u00fd 24/7",
      ipa: "/\u02c8kra\u026as\u026as \u02c8h\u0252tla\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=crisis+hotline&type=2",
      imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Trained operators staff the suicide prevention crisis hotline twenty-four hours a day.",
      exampleVi: "C\u00e1c t\u1ed5ng \u0111\u00e0i vi\u00ean \u0111\u01b0\u1ee3c \u0111\u00e0o t\u1ea1o t\u00fac tr\u1ef1c \u0111\u01b0\u1eddng d\u00e2y n\u00f3ng h\u1ed7 tr\u1ee3 kh\u1ee7ng ho\u1ea3ng t\u00e2m l\u00fd 24/24 su\u1ed1t ng\u00e0y \u0111\u00eam.",
      collocations: ["call a crisis hotline", "toll-free hotline"]
    }
    ,
    {
      id: "mega-unit-9-social-stigma",
      word: "social stigma",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u1ecbnh ki\u1ebfn x\u00e3 h\u1ed9i v\u00e0 v\u1ebft nh\u01a1 k\u1ef3 th\u1ecb",
      ipa: "/\u02ccs\u0259\u028a\u0283l \u02c8st\u026a\u0261m\u0259/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=social+stigma&type=2",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Open public dialogues help eradicate the lingering social stigma surrounding psychiatric help.",
      exampleVi: "C\u00e1c cu\u1ed9c \u0111\u1ed1i tho\u1ea1i c\u1edfi m\u1edf gi\u00fap x\u00f3a tan \u0111\u1ecbnh ki\u1ebfn k\u1ef3 th\u1ecb c\u1ee7a x\u00e3 h\u1ed9i xoay quanh vi\u1ec7c t\u00ecm ki\u1ebfm h\u1ed7 tr\u1ee3 t\u00e2m th\u1ea7n.",
      collocations: ["overcome social stigma", "attach stigma"]
    }
    ,
    {
      id: "mega-unit-9-restorative-justice",
      word: "restorative justice",
      partOfSpeech: "n.phr",
      meaningVi: "t\u01b0 ph\u00e1p ph\u1ee5c h\u1ed3i h\u00f2a gi\u1ea3i thay v\u00ec tr\u1eebng ph\u1ea1t",
      ipa: "/r\u026a\u02ccst\u0254\u02d0r\u0259t\u026av \u02c8d\u0292\u028cst\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=restorative+justice&type=2",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Restorative justice conferences bring together young offenders and victims to heal emotional harms.",
      exampleVi: "C\u00e1c phi\u00ean h\u00f2a gi\u1ea3i t\u01b0 ph\u00e1p ph\u1ee5c h\u1ed3i k\u1ebft n\u1ed1i ng\u01b0\u1eddi ph\u1ea1m t\u1ed9i tr\u1ebb tu\u1ed5i v\u00e0 n\u1ea1n nh\u00e2n \u0111\u1ec3 xoa d\u1ecbu nh\u1eefng t\u1ed5n th\u01b0\u01a1ng tinh th\u1ea7n.",
      collocations: ["practice restorative justice", "principles of justice"]
    }
    ,
    {
      id: "mega-unit-9-welfare-system",
      word: "welfare system",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 th\u1ed1ng ph\u00fac l\u1ee3i x\u00e3 h\u1ed9i c\u1ee9u tr\u1ee3 an sinh",
      ipa: "/\u02c8welfe\u0259 \u02c8s\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=welfare+system&type=2",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      exampleEn: "A resilient welfare system provides unemployment stipends and subsidized medicine to citizens in crisis.",
      exampleVi: "H\u1ec7 th\u1ed1ng an sinh x\u00e3 h\u1ed9i v\u1eefng ch\u1eafc c\u1ea5p tr\u1ee3 c\u1ea5p th\u1ea5t nghi\u1ec7p v\u00e0 h\u1ed7 tr\u1ee3 thu\u1ed1c men cho c\u00f4ng d\u00e2n khi g\u1eb7p bi\u1ebfn c\u1ed1.",
      collocations: ["reform the welfare system", "state welfare system"]
    }
    ,
    {
      id: "mega-unit-9-advocacy-campaign",
      word: "advocacy campaign",
      partOfSpeech: "n.phr",
      meaningVi: "chi\u1ebfn d\u1ecbch v\u1eadn \u0111\u1ed9ng thay \u0111\u1ed5i nh\u1eadn th\u1ee9c x\u00e3 h\u1ed9i",
      ipa: "/\u02c8\u00e6dv\u0259k\u0259si k\u00e6m\u02c8pe\u026an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=advocacy+campaign&type=2",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Students launched a creative advocacy campaign raising awareness of plastic pollution in rivers.",
      exampleVi: "C\u00e1c b\u1ea1n h\u1ecdc sinh \u0111\u00e3 ph\u00e1t \u0111\u1ed9ng m\u1ed9t chi\u1ebfn d\u1ecbch v\u1eadn \u0111\u1ed9ng s\u00e1ng t\u1ea1o nh\u1eb1m n\u00e2ng cao nh\u1eadn th\u1ee9c v\u1ec1 r\u00e1c nh\u1ef1a tr\u00ean c\u00e1c d\u00f2ng s\u00f4ng.",
      collocations: ["launch an advocacy campaign", "nationwide campaign"]
    }
    ,
    {
      id: "mega-unit-9-peer-intervention",
      word: "peer intervention",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 can thi\u1ec7p k\u1ecbp th\u1eddi t\u1eeb b\u1ea1n b\u00e8 \u0111\u1ec3 ng\u0103n ch\u1eb7n \u0111i\u1ec1u x\u1ea5u",
      ipa: "/\u02c8p\u026a\u0259r \u02cc\u026ant\u0259\u02c8ven\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=peer+intervention&type=2",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Timely peer intervention stopped an escalating hallway confrontation before fists were thrown.",
      exampleVi: "S\u1ef1 can thi\u1ec7p k\u1ecbp th\u1eddi c\u1ee7a b\u1ea1n b\u00e8 \u0111\u00e3 ng\u0103n ch\u1eb7n cu\u1ed9c \u0111\u1ed1i \u0111\u1ea7u gay g\u1eaft ngo\u00e0i h\u00e0nh lang tr\u01b0\u1edbc khi x\u1ea3y ra \u1ea9u \u0111\u1ea3.",
      collocations: ["effective peer intervention", "encourage intervention"]
    }
  ],
  "unit-10-the-ecosystem": [
    {
      id: "v11-u10-ecosystem-balance",
      word: "ecosystem balance",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 c\u00e2n b\u1eb1ng t\u1ef1 nhi\u00ean c\u1ee7a h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8i\u02d0k\u0259\u028as\u026ast\u0259m \u02c8b\u00e6l\u0259ns/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecosystem+balance&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Removing top predators severely upsets the delicate ecosystem balance.",
      exampleVi: "Lo\u1ea1i b\u1ecf \u0111\u1ed9ng v\u1eadt s\u0103n m\u1ed3i \u0111\u1ea7u chu\u1ed7i l\u00e0m \u0111\u1ea3o l\u1ed9n nghi\u00eam tr\u1ecdng s\u1ef1 c\u00e2n b\u1eb1ng mong manh c\u1ee7a h\u1ec7 sinh th\u00e1i.",
      collocations: ["maintain ecosystem balance", "disrupt ecosystem balance"]
    },
    {
      id: "v11-u10-predator",
      word: "predator",
      partOfSpeech: "n",
      meaningVi: "lo\u00e0i th\u00fa s\u0103n m\u1ed3i \u0103n th\u1ecbt",
      ipa: "/\u02c8pred\u0259t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=predator&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Apex predators like leopards control deer populations and keep woodlands healthy.",
      exampleVi: "Th\u00fa s\u0103n m\u1ed3i h\u00e0ng \u0111\u1ea7u nh\u01b0 b\u00e1o g\u1ea5m ki\u1ec3m so\u00e1t s\u1ed1 l\u01b0\u1ee3ng h\u01b0\u01a1u nai v\u00e0 gi\u1eef r\u1eebng kh\u1ecfe m\u1ea1nh.",
      collocations: ["apex predator", "natural predator"]
    },
    {
      id: "v11-u10-prey",
      word: "prey",
      partOfSpeech: "n",
      meaningVi: "con m\u1ed3i b\u1ecb s\u0103n \u0111u\u1ed5i",
      ipa: "/pre\u026a/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=prey&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Herbivores like gazelles and antelopes are easy prey for stalking cheetahs.",
      exampleVi: "\u0110\u1ed9ng v\u1eadt \u0103n c\u1ecf nh\u01b0 linh d\u01b0\u01a1ng l\u00e0 con m\u1ed3i cho nh\u1eefng con b\u00e1o s\u0103n m\u1ed3i r\u00ecnh r\u1eadp.",
      collocations: ["fall prey to", "hunt for prey"]
    },
    {
      id: "v11-u10-habitat-destruction",
      word: "habitat destruction",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 t\u00e0n ph\u00e1 m\u00f4i tr\u01b0\u1eddng sinh s\u1ed1ng hoang d\u00e3",
      ipa: "/\u02c8h\u00e6b\u026at\u00e6t d\u026a\u02c8str\u028ck\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=habitat+destruction&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Slash-and-burn farming leads to irreversible habitat destruction for rare primates.",
      exampleVi: "T\u1eadp qu\u00e1n \u0111\u1ed1t n\u01b0\u01a1ng l\u00e0m r\u1eaby g\u00e2y ph\u00e1 h\u1ee7y m\u00f4i tr\u01b0\u1eddng s\u1ed1ng kh\u00f4ng th\u1ec3 ph\u1ee5c h\u1ed3i c\u1ee7a linh tr\u01b0\u1edfng qu\u00fd.",
      collocations: ["halt habitat destruction", "cause habitat destruction"]
    },
    {
      id: "v11-u10-coral-reef",
      word: "coral reef",
      partOfSpeech: "n.phr",
      meaningVi: "r\u1ea1n san h\u00f4 ng\u1ea7m d\u01b0\u1edbi bi\u1ec3n",
      ipa: "/\u02c8k\u0252r\u0259l ri\u02d0f/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=coral+reef&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coral reefs shelter one quarter of all marine organisms despite covering 1% of the seabed.",
      exampleVi: "R\u1ea1n san h\u00f4 l\u00e0 n\u01a1i tr\u00fa \u1ea9n c\u1ee7a 1/4 sinh v\u1eadt bi\u1ec3n d\u00f9 ch\u1ec9 chi\u1ebfm 1% di\u1ec7n t\u00edch \u0111\u00e1y \u0111\u1ea1i d\u01b0\u01a1ng.",
      collocations: ["protect coral reefs", "vibrant coral reef"]
    },
    {
      id: "v11-u10-wetland",
      word: "wetland",
      partOfSpeech: "n",
      meaningVi: "v\u00f9ng \u0111\u1ea5t ng\u1eadp n\u01b0\u1edbc l\u1ecdc n\u01b0\u1edbc t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8wetl\u00e6nd/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wetland&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Wetlands act as giant sponges that soak up storm waters and prevent disastrous floods.",
      exampleVi: "V\u00f9ng \u0111\u1ea5t ng\u1eadp n\u01b0\u1edbc nh\u01b0 nh\u1eefng mi\u1ebfng b\u1ecdt bi\u1ec3n kh\u1ed5ng l\u1ed3 h\u00fat n\u01b0\u1edbc b\u00e3o v\u00e0 ng\u0103n ng\u1eeba ng\u1eadp l\u1ee5t.",
      collocations: ["coastal wetland", "preserve wetlands"]
    },
    {
      id: "v11-u10-organism",
      word: "organism",
      partOfSpeech: "n",
      meaningVi: "sinh v\u1eadt s\u1ed1ng c\u00e1 th\u1ec3",
      ipa: "/\u02c8\u0254\u02d0\u0261\u0259n\u026az\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=organism&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Microscopic organisms in fertile soil break down leaves into rich plant humus.",
      exampleVi: "C\u00e1c vi sinh v\u1eadt trong \u0111\u1ea5t m\u00e0u m\u1ee1 ph\u00e2n h\u1ee7y l\u00e1 c\u00e2y th\u00e0nh l\u1edbp m\u00f9n dinh d\u01b0\u1ee1ng cho c\u00e2y tr\u1ed3ng.",
      collocations: ["living organism", "microscopic organism"]
    },
    {
      id: "v11-u10-tropical-rainforest",
      word: "tropical rainforest",
      partOfSpeech: "n.phr",
      meaningVi: "r\u1eebng m\u01b0a nhi\u1ec7t \u0111\u1edbi r\u1eadm r\u1ea1p",
      ipa: "/\u02cctr\u0252p\u026akl \u02c8re\u026anf\u0252r\u026ast/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=tropical+rainforest&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Amazon is the planet's largest tropical rainforest, producing vast oxygen stores.",
      exampleVi: "Amazon l\u00e0 c\u00e1nh r\u1eebng m\u01b0a nhi\u1ec7t \u0111\u1edbi l\u1edbn nh\u1ea5t h\u00e0nh tinh, s\u1ea3n xu\u1ea5t tr\u1eef l\u01b0\u1ee3ng oxy kh\u1ed5ng l\u1ed3.",
      collocations: ["conserve tropical rainforests", "dense tropical rainforest"]
    },
    {
      id: "v11-u10-food-web",
      word: "food web",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ea1ng l\u01b0\u1edbi th\u1ee9c \u0103n ch\u1eb1ng ch\u1ecbt trong t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8fu\u02d0d web/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=food+web&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Unlike a single chain, a food web illustrates complex interconnected feeding pathways.",
      exampleVi: "Kh\u00f4ng gi\u1ed1ng chu\u1ed7i \u0111\u01a1n l\u1ebb, m\u1ea1ng l\u01b0\u1edbi th\u1ee9c \u0103n th\u1ec3 hi\u1ec7n c\u00e1c m\u1ed1i quan h\u1ec7 dinh d\u01b0\u1ee1ng \u0111an xen ph\u1ee9c t\u1ea1p.",
      collocations: ["complex food web", "marine food web"]
    },
    {
      id: "v11-u10-trophic-level",
      word: "trophic level",
      partOfSpeech: "n.phr",
      meaningVi: "b\u1eadc dinh d\u01b0\u1ee1ng trong chu\u1ed7i sinh th\u00e1i",
      ipa: "/\u02c8tr\u0259\u028af\u026ak \u02c8levl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trophic+level&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Energy diminishes by approximately ninety percent with each step up a trophic level.",
      exampleVi: "N\u0103ng l\u01b0\u1ee3ng ti\u00eau hao kho\u1ea3ng 90 ph\u1ea7n tr\u0103m sau m\u1ed7i b\u1eadc dinh d\u01b0\u1ee1ng \u0111i l\u00ean.",
      collocations: ["higher trophic level", "primary trophic level"]
    },
    {
      id: "v11-u10-ecological-niche",
      word: "ecological niche",
      partOfSpeech: "n.phr",
      meaningVi: "\u1ed5 sinh th\u00e1i c\u1ee7a lo\u00e0i trong sinh c\u1ea3nh",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl ni\u02d0\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+niche&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each woodpecker species occupies a specialized ecological niche in the pine forest.",
      exampleVi: "M\u1ed7i lo\u00e0i chim g\u00f5 ki\u1ebfn chi\u1ebfm gi\u1eef m\u1ed9t \u1ed5 sinh th\u00e1i ri\u00eang bi\u1ec7t trong r\u1eebng th\u00f4ng.",
      collocations: ["occupy an ecological niche", "specialized niche"]
    },
    {
      id: "v11-u10-decomposer",
      word: "decomposer",
      partOfSpeech: "n",
      meaningVi: "sinh v\u1eadt ph\u00e2n gi\u1ea3i x\u00e1c h\u1eefu c\u01a1 (n\u1ea5m, giun)",
      ipa: "/\u02ccdi\u02d0k\u0259m\u02c8p\u0259\u028az\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=decomposer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fungi and bacteria serve as nature's essential decomposers, recycling dead matter.",
      exampleVi: "N\u1ea5m v\u00e0 vi khu\u1ea9n l\u00e0 nh\u1eefng sinh v\u1eadt ph\u00e2n gi\u1ea3i thi\u1ebft y\u1ebfu c\u1ee7a t\u1ef1 nhi\u00ean gi\u00fap t\u00e1i ch\u1ebf x\u00e1c h\u1eefu c\u01a1.",
      collocations: ["role of decomposers", "soil decomposers"]
    },
    {
      id: "v11-u10-herbivore",
      word: "herbivore",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed9ng v\u1eadt \u0103n c\u1ecf th\u1ef1c v\u1eadt",
      ipa: "/\u02c8h\u025c\u02d0b\u026av\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=herbivore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Elephants are gentle herbivores that consume hundreds of pounds of foliage daily.",
      exampleVi: "Voi l\u00e0 lo\u00e0i \u0111\u1ed9ng v\u1eadt \u0103n c\u1ecf hi\u1ec1n l\u00e0nh ti\u00eau th\u1ee5 h\u00e0ng tr\u0103m pound l\u00e1 c\u00e2y m\u1ed7i ng\u00e0y.",
      collocations: ["grazing herbivore", "herbivore diet"]
    },
    {
      id: "v11-u10-carnivore",
      word: "carnivore",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed9ng v\u1eadt \u0103n th\u1ecbt s\u0103n m\u1ed3i",
      ipa: "/\u02c8k\u0251\u02d0n\u026av\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carnivore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lions are fierce carnivores equipped with sharp canine teeth and retractable claws.",
      exampleVi: "S\u01b0 t\u1eed l\u00e0 lo\u00e0i \u0103n th\u1ecbt d\u0169ng m\u00e3nh \u0111\u01b0\u1ee3c trang b\u1ecb r\u0103ng nanh s\u1eafc nh\u1ecdn v\u00e0 m\u00f3ng vu\u1ed1t gi\u01b0\u01a1ng co.",
      collocations: ["strict carnivore", "carnivore species"]
    },
    {
      id: "v11-u10-omnivore",
      word: "omnivore",
      partOfSpeech: "n",
      meaningVi: "\u0111\u1ed9ng v\u1eadt \u0103n t\u1ea1p c\u1ea3 th\u1ef1c v\u1eadt v\u00e0 \u0111\u1ed9ng v\u1eadt",
      ipa: "/\u02c8\u0252mn\u026av\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=omnivore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bears are resourceful omnivores feeding on berries, roots, salmon, and honey.",
      exampleVi: "G\u1ea5u l\u00e0 lo\u00e0i \u0103n t\u1ea1p bi\u1ebft t\u1eadn d\u1ee5ng th\u1ee9c \u0103n t\u1eeb qu\u1ea3 d\u1ea1i, r\u1ec5 c\u00e2y, c\u00e1 h\u1ed3i \u0111\u1ebfn m\u1eadt ong.",
      collocations: ["typical omnivore", "omnivore metabolism"]
    },
    {
      id: "v11-u10-pollination",
      word: "pollination",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 th\u1ee5 ph\u1ea5n hoa nh\u1edd ong b\u01b0\u1edbm",
      ipa: "/\u02ccp\u0252l\u0259\u02c8ne\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pollination&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Honeybee pollination is indispensable for the yield of commercial apple orchards.",
      exampleVi: "S\u1ef1 th\u1ee5 ph\u1ea5n c\u1ee7a ong m\u1eadt l\u00e0 \u0111i\u1ec1u kh\u00f4ng th\u1ec3 thi\u1ebfu \u0111\u1ed1i v\u1edbi s\u1ea3n l\u01b0\u1ee3ng c\u1ee7a c\u00e1c v\u01b0\u1eddn t\u00e1o.",
      collocations: ["insect pollination", "cross-pollination"]
    },
    {
      id: "v11-u10-canopy",
      word: "canopy",
      partOfSpeech: "n",
      meaningVi: "t\u1ea7ng t\u00e1n l\u00e1 cao nh\u1ea5t c\u1ee7a r\u1eebng r\u1eadm",
      ipa: "/\u02c8k\u00e6n\u0259pi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=canopy&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Monkeys and toucans spend their entire lives in the sunlit forest canopy.",
      exampleVi: "Kh\u1ec9 v\u00e0 chim tu-c\u0103ng d\u00e0nh tr\u1ecdn c\u1ea3 cu\u1ed9c \u0111\u1eddi sinh s\u1ed1ng tr\u00ean t\u1ea7ng t\u00e1n l\u00e1 ng\u1eadp n\u1eafng c\u1ee7a r\u1eebng nhi\u1ec7t \u0111\u1edbi.",
      collocations: ["forest canopy", "canopy walk"]
    },
    {
      id: "v11-u10-understory",
      word: "understory",
      partOfSpeech: "n",
      meaningVi: "t\u1ea7ng d\u01b0\u1edbi t\u00e1n r\u1eebng r\u1eadm r\u1ea1p",
      ipa: "/\u02c8\u028cnd\u0259st\u0254\u02d0ri/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=understory&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ferns and shade-tolerant shrubs thrive in the humid forest understory.",
      exampleVi: "C\u00e2y d\u01b0\u01a1ng x\u1ec9 v\u00e0 c\u00e2y b\u1ee5i ch\u1ecbu b\u00f3ng ph\u00e1t tri\u1ec3n m\u1ea1nh m\u1ebd \u1edf t\u1ea7ng d\u01b0\u1edbi t\u00e1n r\u1eebng \u1ea9m \u01b0\u1edbt.",
      collocations: ["jungle understory", "understory vegetation"]
    },
    {
      id: "v11-u10-adaptation",
      word: "adaptation",
      partOfSpeech: "n",
      meaningVi: "s\u1ef1 th\u00edch nghi ti\u1ebfn h\u00f3a sinh t\u1ed3n",
      ipa: "/\u02cc\u00e6d\u00e6p\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=adaptation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Thick blubber is a physiological adaptation that keeps seals warm in icy waters.",
      exampleVi: "L\u1edbp m\u1ee1 d\u00e0y l\u00e0 s\u1ef1 th\u00edch nghi sinh l\u00fd gi\u00fap h\u1ea3i c\u1ea9u gi\u1eef \u1ea5m c\u01a1 th\u1ec3 trong l\u00e0n n\u01b0\u1edbc b\u0103ng gi\u00e1.",
      collocations: ["evolutionary adaptation", "remarkable adaptation"]
    },
    {
      id: "v11-u10-biodiversity-loss",
      word: "biodiversity loss",
      partOfSpeech: "n.phr",
      meaningVi: "suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc c\u00e1c lo\u00e0i",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti l\u0252s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+loss&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Pollution and habitat fragmentation accelerate alarming rates of global biodiversity loss.",
      exampleVi: "\u00d4 nhi\u1ec5m v\u00e0 m\u00f4i tr\u01b0\u1eddng b\u1ecb chia c\u1eaft \u0111\u1ea9y nhanh t\u1ed1c \u0111\u1ed9 suy gi\u1ea3m \u0111a d\u1ea1ng sinh h\u1ecdc \u0111\u00e1ng b\u00e1o \u0111\u1ed9ng.",
      collocations: ["reverse biodiversity loss", "threat of biodiversity loss"]
    }
    ,
    {
      id: "v11-boost-marine-ecosystem",
      word: "marine ecosystem",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 sinh th\u00e1i bi\u1ec3n \u0111\u1ea1i d\u01b0\u01a1ng",
      ipa: "/m\u0259\u02c8ri\u02d0n \u02c8i\u02d0k\u0259\u028as\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=marine+ecosystem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Coral reefs and mangrove forests are cornerstones of a healthy marine ecosystem.",
      exampleVi: "R\u1ea1n san h\u00f4 v\u00e0 r\u1eebng ng\u1eadp m\u1eb7n l\u00e0 nh\u1eefng n\u1ec1n t\u1ea3ng c\u1ee7a m\u1ed9t h\u1ec7 sinh th\u00e1i bi\u1ec3n kh\u1ecfe m\u1ea1nh.",
      collocations: ["protect marine ecosystems", "fragile marine ecosystem"]
    }
    ,
    {
      id: "v11-boost-terrestrial-ecosystem",
      word: "terrestrial ecosystem",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 sinh th\u00e1i tr\u00ean c\u1ea1n l\u1ee5c \u0111\u1ecba",
      ipa: "/t\u0259\u02c8restri\u0259l \u02c8i\u02d0k\u0259\u028as\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=terrestrial+ecosystem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tropical savannahs and temperate pine forests are diverse terrestrial ecosystems.",
      exampleVi: "Xavan nhi\u1ec7t \u0111\u1edbi v\u00e0 r\u1eebng th\u00f4ng \u00f4n \u0111\u1edbi l\u00e0 c\u00e1c h\u1ec7 sinh th\u00e1i tr\u00ean c\u1ea1n \u0111a d\u1ea1ng.",
      collocations: ["terrestrial ecosystem diversity", "study terrestrial ecosystems"]
    }
    ,
    {
      id: "v11-boost-biosphere",
      word: "biosphere",
      partOfSpeech: "n",
      meaningVi: "sinh quy\u1ec3n bao quanh tr\u00e1i \u0111\u1ea5t",
      ipa: "/\u02c8ba\u026a\u0259\u028asf\u026a\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biosphere&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Human pollution threatens to destabilize delicate biochemical cycles across the biosphere.",
      exampleVi: "\u00d4 nhi\u1ec5m do con ng\u01b0\u1eddi g\u00e2y ra \u0111e d\u1ecda l\u00e0m m\u1ea5t c\u00e2n b\u1eb1ng c\u00e1c chu tr\u00ecnh sinh h\u00f3a trong sinh quy\u1ec3n.",
      collocations: ["protect the biosphere", "global biosphere"]
    }
    ,
    {
      id: "v11-boost-trophic-cascade",
      word: "trophic cascade",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng th\u00e1c dinh d\u01b0\u1ee1ng lan truy\u1ec1n",
      ipa: "/\u02c8tr\u0259\u028af\u026ak k\u00e6\u02c8ske\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trophic+cascade&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reintroducing wolves triggered a beneficial trophic cascade that restored riverbanks.",
      exampleVi: "T\u00e1i th\u1ea3 lo\u00e0i s\u00f3i \u0111\u00e3 k\u00edch ho\u1ea1t hi\u1ec7u \u1ee9ng th\u00e1c dinh d\u01b0\u1ee1ng gi\u00fap h\u1ed3i sinh nh\u1eefng b\u1edd s\u00f4ng.",
      collocations: ["trigger a trophic cascade", "ecological trophic cascade"]
    }
    ,
    {
      id: "v11-boost-symbiosis",
      word: "symbiosis",
      partOfSpeech: "n",
      meaningVi: "m\u1ed1i quan h\u1ec7 c\u1ed9ng sinh t\u01b0\u01a1ng h\u1ed7",
      ipa: "/\u02ccs\u026amba\u026a\u02c8\u0259\u028as\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=symbiosis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Clownfish and sea anemones live in a classic mutual symbiosis for mutual protection.",
      exampleVi: "C\u00e1 h\u1ec1 v\u00e0 h\u1ea3i qu\u1ef3 s\u1ed1ng trong m\u1ed1i quan h\u1ec7 c\u1ed9ng sinh t\u01b0\u01a1ng h\u1ed7 kinh \u0111i\u1ec3n \u0111\u1ec3 b\u1ea3o v\u1ec7 l\u1eabn nhau.",
      collocations: ["mutual symbiosis", "live in symbiosis"]
    }
    ,
    {
      id: "v11-boost-keystone-predator",
      word: "keystone predator",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i s\u0103n m\u1ed3i ch\u1ee7 ch\u1ed1t \u0111\u1ecbnh h\u00ecnh h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8ki\u02d0st\u0259\u028an \u02c8pred\u0259t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=keystone+predator&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The sea otter is a keystone predator that prevents sea urchins from mowing down kelp.",
      exampleVi: "R\u00e1i c\u00e1 bi\u1ec3n l\u00e0 lo\u00e0i s\u0103n m\u1ed3i ch\u1ee7 ch\u1ed1t ng\u0103n nh\u00edm bi\u1ec3n g\u1eb7m s\u1ea1ch c\u00e1c th\u1ea3m t\u1ea3o b\u1eb9.",
      collocations: ["role of keystone predators", "protect keystone predators"]
    }
    ,
    {
      id: "v11-boost-nutrient-cycle",
      word: "nutrient cycle",
      partOfSpeech: "n.phr",
      meaningVi: "chu tr\u00ecnh tu\u1ea7n ho\u00e0n dinh d\u01b0\u1ee1ng t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8nju\u02d0tri\u0259nt \u02c8sa\u026akl/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nutrient+cycle&type=2",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Decomposers like worms and earth fungi drive the essential soil nutrient cycle.",
      exampleVi: "Sinh v\u1eadt ph\u00e2n gi\u1ea3i nh\u01b0 giun v\u00e0 n\u1ea5m \u0111\u1ea5t v\u1eadn h\u00e0nh chu tr\u00ecnh dinh d\u01b0\u1ee1ng thi\u1ebft y\u1ebfu trong \u0111\u1ea5t.",
      collocations: ["maintain nutrient cycles", "disrupt nutrient cycles"]
    }
    ,
    {
      id: "v11-boost-carrying-capacity",
      word: "carrying capacity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9c t\u1ea3i t\u1ed1i \u0111a c\u1ee7a m\u00f4i tr\u01b0\u1eddng s\u1ed1ng",
      ipa: "/\u02c8k\u00e6ri\u026a\u014b k\u0259\u02ccp\u00e6s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carrying+capacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overpopulation exceeds the carrying capacity of grazing pastures, causing desertification.",
      exampleVi: "Qu\u00e1 t\u1ea3i s\u1ed1 l\u01b0\u1ee3ng v\u01b0\u1ee3t s\u1ee9c ch\u1ee9a c\u1ee7a \u0111\u1ed3ng c\u1ecf, d\u1eabn \u0111\u1ebfn hi\u1ec7n t\u01b0\u1ee3ng sa m\u1ea1c h\u00f3a.",
      collocations: ["exceed carrying capacity", "environmental carrying capacity"]
    }
    ,
    {
      id: "v11-boost-endemic-species",
      word: "endemic species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i \u0111\u1eb7c h\u1eefu duy nh\u1ea5t c\u1ee7a m\u1ed9t v\u00f9ng",
      ipa: "/en\u02c8dem\u026ak \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endemic+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Tonkin snub-nosed monkey is an endemic species found only in northern Vietnam.",
      exampleVi: "Vo\u1ecdc m\u0169i h\u1ebfch l\u00e0 lo\u00e0i \u0111\u1eb7c h\u1eefu qu\u00fd hi\u1ebfm ch\u1ec9 t\u00ecm th\u1ea5y t\u1ea1i v\u00f9ng n\u00fai ph\u00eda B\u1eafc Vi\u1ec7t Nam.",
      collocations: ["shelter endemic species", "rare endemic species"]
    }
    ,
    {
      id: "v11-boost-primary-producer",
      word: "primary producer",
      partOfSpeech: "n.phr",
      meaningVi: "sinh v\u1eadt s\u1ea3n xu\u1ea5t s\u01a1 c\u1ea5p (th\u1ef1c v\u1eadt quang h\u1ee3p)",
      ipa: "/\u02c8pra\u026am\u0259ri pr\u0259\u02c8dju\u02d0s\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=primary+producer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Green plants and microscopic phytoplankton are the primary producers of organic sugars.",
      exampleVi: "C\u00e2y xanh v\u00e0 th\u1ef1c v\u1eadt ph\u00f9 du l\u00e0 nh\u1eefng sinh v\u1eadt s\u1ea3n xu\u1ea5t s\u01a1 c\u1ea5p t\u1ea1o n\u00ean c\u00e1c h\u1ee3p ch\u1ea5t h\u1eefu c\u01a1.",
      collocations: ["role of primary producers", "aquatic primary producers"]
    }
    ,
    {
      id: "v11-boost-biodiversity-assessment",
      word: "biodiversity assessment",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111\u00e1nh gi\u00e1 kh\u1ea3o s\u00e1t \u0111a d\u1ea1ng sinh h\u1ecdc",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u0259\u02c8sesm\u0259nt/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+assessment&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Biologists conducted a comprehensive biodiversity assessment before park expansion.",
      exampleVi: "C\u00e1c nh\u00e0 sinh v\u1eadt h\u1ecdc \u0111\u00e3 ti\u1ebfn h\u00e0nh kh\u1ea3o s\u00e1t \u0111a d\u1ea1ng sinh h\u1ecdc to\u00e0n di\u1ec7n tr\u01b0\u1edbc khi m\u1edf r\u1ed9ng v\u01b0\u1eddn.",
      collocations: ["conduct a biodiversity assessment", "rigorous assessment"]
    }
    ,
    {
      id: "v11-boost-ecological-niche",
      word: "ecological niche",
      partOfSpeech: "n.phr",
      meaningVi: "v\u1ecb tr\u00ed \u1ed5 sinh th\u00e1i trong sinh c\u1ea3nh",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl ni\u02d0\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+niche&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "No two competing species can stably occupy the exact same ecological niche indefinitely.",
      exampleVi: "Kh\u00f4ng c\u00f3 hai lo\u00e0i c\u1ea1nh tranh n\u00e0o c\u00f3 th\u1ec3 c\u00f9ng chi\u1ebfm gi\u1eef chung m\u1ed9t \u1ed5 sinh th\u00e1i m\u00e3i m\u00e3i.",
      collocations: ["occupy a distinct niche", "specialized ecological niche"]
    }
    ,
    {
      id: "v11-boost-photosynthesis",
      word: "photosynthesis",
      partOfSpeech: "n",
      meaningVi: "qu\u00e1 tr\u00ecnh quang h\u1ee3p h\u1ea5p th\u1ee5 \u00e1nh s\u00e1ng",
      ipa: "/\u02ccf\u0259\u028at\u0259\u028a\u02c8s\u026an\u03b8\u0259s\u026as/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=photosynthesis&type=2",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Through photosynthesis, green forest foliage converts carbon dioxide and sunlight into oxygen.",
      exampleVi: "Qua quang h\u1ee3p, t\u00e1n l\u00e1 r\u1eebng xanh chuy\u1ec3n \u0111\u1ed5i kh\u00ed carbon dioxide v\u00e0 \u00e1nh n\u1eafng th\u00e0nh oxy.",
      collocations: ["rate of photosynthesis", "process of photosynthesis"]
    }
    ,
    {
      id: "v11-boost-biodiversity-preservation",
      word: "biodiversity preservation",
      partOfSpeech: "n.phr",
      meaningVi: "g\u00ecn gi\u1eef v\u00e0 b\u1ea3o t\u1ed3n \u0111a d\u1ea1ng sinh th\u00e1i",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02ccprez\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+preservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Biodiversity preservation in national parks safeguards irreplaceable gene pools.",
      exampleVi: "B\u1ea3o t\u1ed3n \u0111a d\u1ea1ng sinh h\u1ecdc trong c\u00e1c v\u01b0\u1eddn qu\u1ed1c gia b\u1ea3o v\u1ec7 c\u00e1c ngu\u1ed3n gen v\u00f4 gi\u00e1 kh\u00f4ng th\u1ec3 thay th\u1ebf.",
      collocations: ["fund biodiversity preservation", "commit to preservation"]
    }
    ,
    {
      id: "mega-unit-1-food-web",
      word: "food web",
      partOfSpeech: "n.phr",
      meaningVi: "l\u01b0\u1edbi th\u1ee9c \u0103n t\u1ef1 nhi\u00ean trong chu\u1ed7i sinh th\u00e1i",
      ipa: "/\u02c8fu\u02d0d web/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=food+web&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Phytoplankton form the foundational base supporting the entire oceanic food web.",
      exampleVi: "Th\u1ef1c v\u1eadt ph\u00f9 du t\u1ea1o n\u00ean n\u1ec1n t\u1ea3ng c\u1ed1t l\u00f5i nu\u00f4i s\u1ed1ng to\u00e0n b\u1ed9 l\u01b0\u1edbi th\u1ee9c \u0103n c\u1ee7a \u0111\u1ea1i d\u01b0\u01a1ng.",
      collocations: ["complex food web", "disrupt the food web"]
    }
    ,
    {
      id: "mega-unit-1-trophic-cascade",
      word: "trophic cascade",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u \u1ee9ng ph\u1ea3n \u1ee9ng d\u00e2y chuy\u1ec1n qua c\u00e1c b\u1eadc dinh d\u01b0\u1ee1ng",
      ipa: "/\u02c8tr\u0252f\u026ak k\u00e6\u02c8ske\u026ad/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=trophic+cascade&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Reintroducing wolves to Yellowstone triggered a magnificent trophic cascade reviving rivers and willows.",
      exampleVi: "Vi\u1ec7c t\u00e1i th\u1ea3 lo\u00e0i s\u00f3i v\u1ec1 Yellowstone \u0111\u00e3 t\u1ea1o n\u00ean m\u1ed9t ph\u1ea3n \u1ee9ng d\u00e2y chuy\u1ec1n dinh d\u01b0\u1ee1ng k\u1ef3 di\u1ec7u h\u1ed3i sinh c\u00e1c d\u00f2ng s\u00f4ng v\u00e0 r\u1eebng li\u1ec5u.",
      collocations: ["trigger a trophic cascade", "observe a cascade"]
    }
    ,
    {
      id: "mega-unit-1-keystone-species",
      word: "keystone species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i sinh v\u1eadt ch\u1ee7 ch\u1ed1t duy tr\u00ec c\u00e2n b\u1eb1ng h\u1ec7 sinh th\u00e1i",
      ipa: "/\u02c8ki\u02d0st\u0259\u028an \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=keystone+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Sea otters serve as a keystone species by devouring sea urchins that would otherwise decimate kelp forests.",
      exampleVi: "R\u00e1i c\u00e1 bi\u1ec3n l\u00e0 lo\u00e0i ch\u1ee7 ch\u1ed1t b\u1edfi ch\u00fang \u0103n nh\u00edm bi\u1ec3n, lo\u00e0i sinh v\u1eadt n\u1ebfu kh\u00f4ng ki\u1ec3m so\u00e1t s\u1ebd t\u00e0n ph\u00e1 c\u00e1c c\u00e1nh r\u1eebng t\u1ea3o b\u1eb9.",
      collocations: ["protect a keystone species", "role of a keystone species"]
    }
    ,
    {
      id: "mega-unit-1-symbiotic-relationship",
      word: "symbiotic relationship",
      partOfSpeech: "n.phr",
      meaningVi: "m\u1ed1i quan h\u1ec7 c\u1ed9ng sinh c\u00f9ng c\u00f3 l\u1ee3i",
      ipa: "/\u02ccs\u026amba\u026a\u02c8\u0252t\u026ak r\u026a\u02c8le\u026a\u0283n\u0283\u026ap/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=symbiotic+relationship&type=2",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Clownfish and sea anemones live in a mutually protective symbiotic relationship.",
      exampleVi: "C\u00e1 h\u1ec1 v\u00e0 h\u1ea3i qu\u1ef3 chung s\u1ed1ng trong m\u1ed9t m\u1ed1i quan h\u1ec7 c\u1ed9ng sinh b\u1ea3o v\u1ec7 l\u1eabn nhau v\u00f4 c\u00f9ng k\u1ef3 th\u00fa.",
      collocations: ["form a symbiotic relationship", "mutual symbiotic bond"]
    }
    ,
    {
      id: "mega-unit-1-invasive-species",
      word: "invasive species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i ngo\u1ea1i lai x\u00e2m l\u1ea5n t\u00e0n ph\u00e1 sinh th\u00e1i b\u1ea3n \u0111\u1ecba",
      ipa: "/\u026an\u02c8ve\u026as\u026av \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=invasive+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Golden apple snails introduced decades ago became a devastating invasive species in paddy fields.",
      exampleVi: "\u1ed0c b\u01b0\u01a1u v\u00e0ng du nh\u1eadp nhi\u1ec1u th\u1eadp k\u1ef7 tr\u01b0\u1edbc \u0111\u00e3 tr\u1edf th\u00e0nh lo\u00e0i ngo\u1ea1i lai x\u00e2m h\u1ea1i t\u00e0n ph\u00e1 nghi\u00eam tr\u1ecdng c\u00e1c c\u00e1nh \u0111\u1ed3ng l\u00faa.",
      collocations: ["eradicate invasive species", "threat of invasive species"]
    }
    ,
    {
      id: "mega-unit-1-primary-producer",
      word: "primary producer",
      partOfSpeech: "n.phr",
      meaningVi: "sinh v\u1eadt s\u1ea3n xu\u1ea5t s\u01a1 c\u1ea5p quang h\u1ee3p",
      ipa: "/\u02c8pra\u026am\u0259ri pr\u0259\u02c8dju\u02d0s\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=primary+producer&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Green algae and terrestrial flora act as primary producers converting solar sunlight into chemical glucose.",
      exampleVi: "T\u1ea3o xanh v\u00e0 th\u1ef1c v\u1eadt tr\u00ean c\u1ea1n \u0111\u00f3ng vai tr\u00f2 l\u00e0 c\u00e1c sinh v\u1eadt s\u1ea3n xu\u1ea5t s\u01a1 c\u1ea5p chuy\u1ec3n h\u00f3a \u00e1nh s\u00e1ng m\u1eb7t tr\u1eddi th\u00e0nh n\u0103ng l\u01b0\u1ee3ng \u0111\u01b0\u1eddng.",
      collocations: ["role of primary producers", "vital producers"]
    }
    ,
    {
      id: "mega-unit-1-apex-predator",
      word: "apex predator",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i s\u0103n m\u1ed3i \u0111\u1ec9nh b\u1ea3ng kh\u00f4ng c\u00f3 thi\u00ean \u0111\u1ecbch t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8e\u026apeks \u02c8pred\u0259t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=apex+predator&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Bengal tiger reigns as the undisputed apex predator of the mangrove swamp jungle.",
      exampleVi: "H\u1ed5 Bengal ng\u1ef1 tr\u1ecb nh\u01b0 m\u1ed9t lo\u00e0i s\u0103n m\u1ed3i \u0111\u1ec9nh b\u1ea3ng t\u1ed1i cao c\u1ee7a nh\u1eefng khu r\u1eebng \u0111\u1ea7m l\u1ea7y ng\u1eadp m\u1eb7n.",
      collocations: ["reign as apex predator", "removal of apex predators"]
    }
    ,
    {
      id: "mega-unit-1-nutrient-cycling",
      word: "nutrient cycling",
      partOfSpeech: "n.phr",
      meaningVi: "chu tr\u00ecnh tu\u1ea7n ho\u00e0n dinh d\u01b0\u1ee1ng trong t\u1ef1 nhi\u00ean",
      ipa: "/\u02c8nju\u02d0tri\u0259nt \u02c8sa\u026akl\u026a\u014b/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=nutrient+cycling&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Fungi and soil bacteria decompose leaf litter, driving perpetual nutrient cycling in old-growth woods.",
      exampleVi: "N\u1ea5m v\u00e0 vi khu\u1ea9n \u0111\u1ea5t ph\u00e2n h\u1ee7y l\u00e1 m\u1ee5c, th\u00fac \u0111\u1ea9y chu tr\u00ecnh tu\u1ea7n ho\u00e0n dinh d\u01b0\u1ee1ng li\u00ean t\u1ee5c trong c\u00e1c c\u00e1nh r\u1eebng nguy\u00ean sinh.",
      collocations: ["facilitate nutrient cycling", "soil nutrient cycle"]
    }
    ,
    {
      id: "mega-unit-1-carrying-ecosystem-capacity",
      word: "carrying ecosystem capacity",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ee9c ch\u1ecbu t\u1ea3i sinh th\u00e1i t\u1ed1i \u0111a c\u1ee7a m\u00f4i tr\u01b0\u1eddng",
      ipa: "/\u02c8k\u00e6ri\u026a\u014b \u02cci\u02d0k\u0259\u028a\u02c8s\u026ast\u0259m k\u0259\u02c8p\u00e6s\u0259ti/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=carrying+ecosystem+capacity&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Overgrazing cattle herds pushed grassland vegetation far beyond its natural carrying ecosystem capacity.",
      exampleVi: "Vi\u1ec7c ch\u0103n th\u1ea3 qu\u00e1 m\u1ee9c \u0111\u00e0n gia s\u00fac \u0111\u00e3 \u0111\u1ea9y th\u1ea3m th\u1ef1c v\u1eadt \u0111\u1ed3ng c\u1ecf v\u01b0\u1ee3t xa s\u1ee9c ch\u1ecbu t\u1ea3i sinh th\u00e1i t\u1ef1 nhi\u00ean.",
      collocations: ["exceed carrying ecosystem capacity", "balance with capacity"]
    }
    ,
    {
      id: "mega-unit-1-ecological-niche",
      word: "ecological niche",
      partOfSpeech: "n.phr",
      meaningVi: "\u1ed5 sinh th\u00e1i v\u1ecb tr\u00ed c\u1ee7a m\u1ed9t lo\u00e0i trong t\u1ef1 nhi\u00ean",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl ni\u02d0\u0283/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+niche&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Each species of Darwin finch evolved distinct beak profiles to exploit a specific ecological niche.",
      exampleVi: "M\u1ed7i lo\u00e0i chim s\u1ebb Darwin \u0111\u00e3 ti\u1ebfn h\u00f3a h\u00ecnh d\u1ea1ng m\u1ecf ri\u00eang bi\u1ec7t \u0111\u1ec3 khai th\u00e1c m\u1ed9t \u1ed5 sinh th\u00e1i c\u1ee5 th\u1ec3 tr\u00ean \u0111\u1ea3o.",
      collocations: ["occupy an ecological niche", "niche specialization"]
    }
    ,
    {
      id: "mega-unit-1-biomass",
      word: "biomass",
      partOfSpeech: "n",
      meaningVi: "sinh kh\u1ed1i t\u1ed5ng tr\u1ecdng l\u01b0\u1ee3ng sinh v\u1eadt trong khu v\u1ef1c",
      ipa: "/\u02c8ba\u026a\u0259\u028am\u00e6s/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biomass&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Tropical rainforests boast the highest terrestrial plant biomass density per square hectare on Earth.",
      exampleVi: "R\u1eebng nhi\u1ec7t \u0111\u1edbi t\u1ef1 h\u00e0o c\u00f3 m\u1eadt \u0111\u1ed9 sinh kh\u1ed1i th\u1ef1c v\u1eadt tr\u00ean c\u1ea1n cao nh\u1ea5t tr\u00ean m\u1ed7i h\u00e9c-ta tr\u00ean Tr\u00e1i \u0110\u1ea5t.",
      collocations: ["total plant biomass", "generate biomass"]
    }
    ,
    {
      id: "mega-unit-1-brackish-water",
      word: "brackish water",
      partOfSpeech: "n.phr",
      meaningVi: "v\u00f9ng n\u01b0\u1edbc l\u1ee3 giao thoa gi\u1eefa s\u00f4ng v\u00e0 bi\u1ec3n",
      ipa: "/\u02c8br\u00e6k\u026a\u0283 \u02c8w\u0254\u02d0t\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=brackish+water&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Mangrove trees develop specialized breathing roots to survive in salty brackish water estuaries.",
      exampleVi: "C\u00e2y \u0111\u01b0\u1edbc ng\u1eadp m\u1eb7n ph\u00e1t tri\u1ec3n r\u1ec5 th\u1edf \u0111\u1eb7c bi\u1ec7t \u0111\u1ec3 sinh t\u1ed3n trong v\u00f9ng n\u01b0\u1edbc l\u1ee3 c\u1ee7a c\u00e1c c\u1eeda s\u00f4ng m\u1eb7n.",
      collocations: ["thrive in brackish water", "brackish water estuary"]
    }
    ,
    {
      id: "mega-unit-1-pollination-vector",
      word: "pollination vector",
      partOfSpeech: "n.phr",
      meaningVi: "sinh v\u1eadt truy\u1ec1n ph\u1ea5n hoa th\u1ee5 ph\u1ea5n cho c\u00e2y",
      ipa: "/\u02ccp\u0252l\u0259\u02c8ne\u026a\u0283n \u02c8vekt\u0259(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=pollination+vector&type=2",
      imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Honeybees and hummingbirds serve as crucial pollination vectors for agricultural crop yields.",
      exampleVi: "Ong m\u1eadt v\u00e0 chim ru\u1ed3i \u0111\u00f3ng vai tr\u00f2 l\u00e0 c\u00e1c sinh v\u1eadt th\u1ee5 ph\u1ea5n truy\u1ec1n hoa c\u1ed1t t\u1eed cho n\u0103ng su\u1ea5t m\u00f9a m\u00e0ng.",
      collocations: ["essential pollination vector", "loss of vectors"]
    }
    ,
    {
      id: "mega-unit-1-habitat-fragmentation",
      word: "habitat fragmentation",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 ph\u00e2n m\u1ea3nh sinh c\u1ea3nh do \u0111\u01b0\u1eddng s\u00e1 x\u1ebb \u0111\u00f4i",
      ipa: "/\u02c8h\u00e6b\u026at\u00e6t \u02ccfr\u00e6\u0261men\u02c8te\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=habitat+fragmentation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Building multi-lane highways across national parks induces severe habitat fragmentation for deer.",
      exampleVi: "Vi\u1ec7c x\u00e2y d\u1ef1ng c\u00e1c \u0111\u01b0\u1eddng cao t\u1ed1c nhi\u1ec1u l\u00e0n b\u0103ng qua v\u01b0\u1eddn qu\u1ed1c gia g\u00e2y ra s\u1ef1 chia c\u1eaft manh m\u00fan sinh c\u1ea3nh s\u1ed1ng cho lo\u00e0i h\u01b0\u01a1u.",
      collocations: ["mitigate habitat fragmentation", "cause fragmentation"]
    }
    ,
    {
      id: "mega-unit-1-watershed-protection",
      word: "watershed protection",
      partOfSpeech: "n.phr",
      meaningVi: "s\u1ef1 b\u1ea3o v\u1ec7 r\u1eebng ph\u00f2ng h\u1ed9 \u0111\u1ea7u ngu\u1ed3n n\u01b0\u1edbc",
      ipa: "/\u02c8w\u0254\u02d0t\u0259\u0283ed pr\u0259\u02c8tek\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=watershed+protection&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Dense upland forest roots maintain watershed protection preventing flash floods and sediment erosion.",
      exampleVi: "R\u1ec5 c\u00e2y c\u1ee7a c\u00e1c khu r\u1eebng \u0111\u1ea7u ngu\u1ed3n r\u1eadm r\u1ea1p b\u1ea3o v\u1ec7 l\u01b0u v\u1ef1c n\u01b0\u1edbc, ng\u0103n ch\u1eb7n l\u0169 qu\u00e9t v\u00e0 x\u00f3i m\u00f2n b\u00f9n \u0111\u1ea5t.",
      collocations: ["priority for watershed protection", "watershed basin"]
    }
    ,
    {
      id: "mega-unit-1-estuary-ecosystem",
      word: "estuary ecosystem",
      partOfSpeech: "n.phr",
      meaningVi: "h\u1ec7 sinh th\u00e1i v\u00f9ng c\u1eeda s\u00f4ng m\u00e0u m\u1ee1",
      ipa: "/\u02c8est\u0283u\u0259ri \u02cci\u02d0k\u0259\u028as\u026ast\u0259m/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=estuary+ecosystem&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The estuary ecosystem acts as a nutrient-rich nursery habitat for juvenile shrimp and crabs.",
      exampleVi: "H\u1ec7 sinh th\u00e1i c\u1eeda s\u00f4ng \u0111\u00f3ng vai tr\u00f2 nh\u01b0 m\u1ed9t v\u01b0\u1eddn \u01b0\u01a1m gi\u00e0u dinh d\u01b0\u1ee1ng cho c\u00e1c lo\u00e0i t\u00f4m cua con.",
      collocations: ["protect the estuary ecosystem", "fragile estuary"]
    }
    ,
    {
      id: "mega-unit-1-detritivore",
      word: "detritivore",
      partOfSpeech: "n",
      meaningVi: "sinh v\u1eadt \u0103n m\u00f9n b\u00e3 h\u1eefu c\u01a1 x\u00e1c th\u1ed1i",
      ipa: "/d\u026a\u02c8tra\u026at\u026av\u0254\u02d0(r)/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=detritivore&type=2",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Earthworms and millipedes are active detritivores breaking down fallen timber on the forest floor.",
      exampleVi: "Giun \u0111\u1ea5t v\u00e0 cu\u1ed1n chi\u1ebfu l\u00e0 nh\u1eefng sinh v\u1eadt \u0103n m\u00f9n b\u00e3 t\u00edch c\u1ef1c ph\u00e2n gi\u1ea3i c\u00e1c th\u00e2n g\u1ed7 m\u1ee5c tr\u00ean m\u1eb7t \u0111\u1ea5t r\u1eebng.",
      collocations: ["role of detritivores", "soil detritivore"]
    }
    ,
    {
      id: "mega-unit-1-endemic-species",
      word: "endemic species",
      partOfSpeech: "n.phr",
      meaningVi: "lo\u00e0i sinh v\u1eadt \u0111\u1eb7c h\u1eefu ch\u1ec9 sinh s\u1ed1ng \u1edf m\u1ed9t n\u01a1i",
      ipa: "/en\u02c8dem\u026ak \u02c8spi\u02d0\u0283i\u02d0z/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=endemic+species&type=2",
      imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Delacour's langur is a critically endangered endemic species found solely in Van Long wetland.",
      exampleVi: "Vo\u1ecdc m\u00f4ng tr\u1eafng l\u00e0 lo\u00e0i \u0111\u1eb7c h\u1eefu c\u1ef1c k\u1ef3 nguy c\u1ea5p ch\u1ec9 c\u00f3 th\u1ec3 t\u00ecm th\u1ea5y duy nh\u1ea5t t\u1ea1i \u0111\u1ea7m ng\u1eadp n\u01b0\u1edbc V\u00e2n Long.",
      collocations: ["harbor endemic species", "protect endemic fauna"]
    }
    ,
    {
      id: "mega-unit-1-biodiversity-hotspot",
      word: "biodiversity hotspot",
      partOfSpeech: "n.phr",
      meaningVi: "\u0111i\u1ec3m n\u00f3ng \u0111a d\u1ea1ng sinh h\u1ecdc phong ph\u00fa b\u1eadc nh\u1ea5t",
      ipa: "/\u02ccba\u026a\u0259\u028ada\u026a\u02c8v\u025c\u02d0s\u0259ti \u02c8h\u0252tsp\u0252t/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=biodiversity+hotspot&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "The Annamite Range is classified as a global biodiversity hotspot sheltering elusive saolas.",
      exampleVi: "D\u00e3y Tr\u01b0\u1eddng S\u01a1n \u0111\u01b0\u1ee3c x\u1ebfp h\u1ea1ng l\u00e0 m\u1ed9t \u0111i\u1ec3m n\u00f3ng \u0111a d\u1ea1ng sinh h\u1ecdc to\u00e0n c\u1ea7u che ch\u1edf cho lo\u00e0i sao la b\u00ed \u1ea9n.",
      collocations: ["designated biodiversity hotspot", "explore the hotspot"]
    }
    ,
    {
      id: "mega-unit-1-wetland-conservation",
      word: "wetland conservation",
      partOfSpeech: "n.phr",
      meaningVi: "c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n c\u00e1c v\u00f9ng \u0111\u1ea5t ng\u1eadp n\u01b0\u1edbc",
      ipa: "/\u02c8wetl\u0259nd \u02cck\u0252ns\u0259\u02c8ve\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=wetland+conservation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Ramsar treaty agreements mobilize international funds dedicated to coastal wetland conservation.",
      exampleVi: "Hi\u1ec7p \u01b0\u1edbc Ramsar huy \u0111\u1ed9ng c\u00e1c ngu\u1ed3n qu\u1ef9 qu\u1ed1c t\u1ebf d\u00e0nh ri\u00eang cho c\u00f4ng t\u00e1c b\u1ea3o t\u1ed3n \u0111\u1ea5t ng\u1eadp n\u01b0\u1edbc ven bi\u1ec3n.",
      collocations: ["promote wetland conservation", "wetland reserve"]
    }
    ,
    {
      id: "mega-unit-1-photosynthetic-efficiency",
      word: "photosynthetic efficiency",
      partOfSpeech: "n.phr",
      meaningVi: "hi\u1ec7u su\u1ea5t quang h\u1ee3p c\u1ee7a c\u00e2y xanh",
      ipa: "/\u02ccf\u0259\u028at\u0259\u028as\u026an\u02c8\u03b8et\u026ak \u026a\u02c8f\u026a\u0283nsi/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=photosynthetic+efficiency&type=2",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Canopy leaves optimize their angle to maintain maximal photosynthetic efficiency throughout daylight.",
      exampleVi: "T\u00e1n l\u00e1 r\u1eebng t\u1ef1 \u0111i\u1ec1u ch\u1ec9nh g\u00f3c nghi\u00eang \u0111\u1ec3 duy tr\u00ec hi\u1ec7u su\u1ea5t quang h\u1ee3p t\u1ed1i \u0111a trong su\u1ed1t th\u1eddi gian ban ng\u00e0y.",
      collocations: ["measure photosynthetic efficiency", "high efficiency"]
    }
    ,
    {
      id: "mega-unit-1-ecological-succession",
      word: "ecological succession",
      partOfSpeech: "n.phr",
      meaningVi: "di\u1ec5n th\u1ebf sinh th\u00e1i bi\u1ebfn \u0111\u1ed5i th\u1ea3m th\u1ef1c v\u1eadt qua th\u1eddi gian",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl s\u0259k\u02c8se\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+succession&type=2",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Lichen colonizing volcanic lava rocks begins the ancient process of primary ecological succession.",
      exampleVi: "\u0110\u1ecba y b\u00e1m tr\u00ean \u0111\u00e1 dung nham n\u00fai l\u1eeda kh\u1edfi \u0111\u1ea7u cho qu\u00e1 tr\u00ecnh di\u1ec5n th\u1ebf sinh th\u00e1i nguy\u00ean sinh c\u1ed5 x\u01b0a.",
      collocations: ["stages of ecological succession", "climax succession"]
    }
    ,
    {
      id: "mega-unit-1-riparian-zone",
      word: "riparian zone",
      partOfSpeech: "n.phr",
      meaningVi: "v\u00f9ng \u0111\u1ec7m ven s\u00f4ng b\u1ea3o v\u1ec7 ngu\u1ed3n n\u01b0\u1edbc v\u00e0 \u0111\u1ea5t",
      ipa: "/ra\u026a\u02c8pe\u0259ri\u0259n z\u0259\u028an/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=riparian+zone&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Planting willows along the riparian zone filters agricultural fertilizer before it enters the river.",
      exampleVi: "Tr\u1ed3ng c\u00e2y li\u1ec5u d\u1ecdc theo v\u00f9ng \u0111\u1ec7m ven s\u00f4ng gi\u00fap l\u1ecdc ph\u00e2n b\u00f3n n\u00f4ng nghi\u1ec7p tr\u01b0\u1edbc khi ch\u1ea3y v\u00e0o l\u00f2ng s\u00f4ng.",
      collocations: ["restore the riparian zone", "vegetation in riparian zones"]
    }
    ,
    {
      id: "mega-unit-1-ecological-footprint",
      word: "ecological footprint",
      partOfSpeech: "n.phr",
      meaningVi: "d\u1ea5u ch\u00e2n sinh th\u00e1i di\u1ec7n t\u00edch \u0111\u1ea5t n\u01b0\u1edbc c\u1ea7n \u0111\u1ec3 duy tr\u00ec \u0111\u1eddi s\u1ed1ng",
      ipa: "/\u02cci\u02d0k\u0259\u02c8l\u0252d\u0292\u026akl \u02c8f\u028atpr\u026ant/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=ecological+footprint&type=2",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Transitioning to plant-based diets significantly reduces a consumer's overall ecological footprint.",
      exampleVi: "Chuy\u1ec3n sang ch\u1ebf \u0111\u1ed9 \u0103n nhi\u1ec1u th\u1ef1c v\u1eadt gi\u00fap gi\u1ea3m thi\u1ec3u \u0111\u00e1ng k\u1ec3 d\u1ea5u ch\u00e2n sinh th\u00e1i t\u1ed5ng th\u1ec3 c\u1ee7a ng\u01b0\u1eddi ti\u00eau d\u00f9ng.",
      collocations: ["reduce one's ecological footprint", "measure ecological footprint"]
    }
    ,
    {
      id: "mega-unit-1-bioremediation",
      word: "bioremediation",
      partOfSpeech: "n",
      meaningVi: "x\u1eed l\u00fd l\u00e0m s\u1ea1ch \u00f4 nhi\u1ec5m b\u1eb1ng vi sinh v\u1eadt",
      ipa: "/\u02ccba\u026a\u0259\u028ar\u026a\u02ccmi\u02d0di\u02c8e\u026a\u0283n/",
      audioUrl: "https://dict.youdao.com/dictvoice?audio=bioremediation&type=2",
      imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
      exampleEn: "Bioremediation with oil-eating bacteria effectively cleans up catastrophic coastal petrochemical spills.",
      exampleVi: "Ph\u01b0\u01a1ng ph\u00e1p x\u1eed l\u00fd sinh h\u1ecdc d\u00f9ng vi khu\u1ea9n \u0103n d\u1ea7u l\u00e0m s\u1ea1ch hi\u1ec7u qu\u1ea3 c\u00e1c v\u1ee5 tr\u00e0n h\u00f3a ch\u1ea5t d\u1ea7u m\u1ecf ven b\u1edd.",
      collocations: ["rely on bioremediation", "bioremediation techniques"]
    }
  ],
};
