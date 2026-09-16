# -*- coding: utf-8 -*-
"""
Script to boost Grade 10 remaining units to reach 80 words per unit!
"""
import json
import os
import re

G10_EXTRA = {
    "unit-1-family-life": [
        ("household chore", "n.phr", "công việc vặt việc nhà thường ngày", "/ˈhaʊshəʊld tʃɔː(r)/",
         "Children develop a sense of responsibility by helping with household chores every weekend.",
         "Trẻ em phát triển tinh thần trách nhiệm khi giúp đỡ làm các công việc nhà mỗi cuối tuần.",
         ["do household chores", "share household chores"],
         "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"),
        ("family bond", "n.phr", "tình cảm gắn kết bền chặt giữa các thành viên", "/ˈfæməli bɒnd/",
         "Shared evening dinners strengthen the emotional family bond across generations.",
         "Những bữa cơm tối sum vầy cùng nhau thắt chặt tình cảm gắn kết gia đình qua nhiều thế hệ.",
         ["strengthen family bond", "deep family bond"],
         "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"),
        ("filial piety", "n.phr", "lòng hiếu thảo với cha mẹ ông bà", "/ˈfɪliəl ˈpaɪəti/",
         "Filial piety is considered a paramount moral virtue in traditional Vietnamese families.",
         "Lòng hiếu thảo được xem là chuẩn mực đạo đức tối thượng trong các gia đình Việt Nam truyền thống.",
         ["practice filial piety", "virtue of filial piety"],
         "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"),
        ("mutual respect", "n.phr", "sự tôn trọng lẫn nhau giữa vợ chồng con cái", "/ˈmjuːtʃuəl rɪˈspekt/",
         "Healthy families cultivate mutual respect and attentive communication.",
         "Các gia đình tiến bộ luôn vun đắp sự tôn trọng lẫn nhau và giao tiếp lắng nghe chân thành.",
         ["foster mutual respect", "treat with mutual respect"],
         "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80"),
        ("parental guidance", "n.phr", "sự định hướng dẫn dắt từ cha mẹ", "/pəˈrentl ˈɡaɪdns/",
         "Teens need empathetic parental guidance to navigate peer pressure successfully.",
         "Thanh thiếu niên cần sự dẫn dắt thấu cảm từ cha mẹ để vượt qua áp lực bạn bè một cách suôn sẻ.",
         ["seek parental guidance", "under parental guidance"],
         "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"),
    ],
    "unit-3-music": [
        ("standing ovation", "n.phr", "tràng vỗ tay đứng dậy tán thưởng nồng nhiệt", "/ˌstændɪŋ əʊˈveɪʃn/",
         "The virtuoso pianist received a thunderous standing ovation from the packed auditorium.",
         "Nghệ sĩ piano bậc thầy nhận được tràng pháo tay đứng tán thưởng cuồng nhiệt từ toàn bộ khán phòng chật kín.",
         ["receive a standing ovation", "give a standing ovation"],
         "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"),
        ("live acoustics", "n.phr", "đặc tính âm học sống động của khán phòng", "/laɪv əˈkuːstɪks/",
         "The cathedral's live acoustics magnified the choir's transcendent choral singing.",
         "Đặc tính âm học sống động của giáo đường đã khuếch đại tiếng hát hợp xướng thanh thoát của dàn ca đoàn.",
         ["exceptional live acoustics", "test live acoustics"],
         "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"),
    ],
    "unit-5-inventions": [
        ("breakthrough invention", "n.phr", "phát minh đột phá mang tính thời đại", "/ˈbreɪkθruː ɪnˈvenʃn/",
         "The steam engine was a breakthrough invention that catalyzed the Industrial Revolution.",
         "Động cơ hơi nước là một phát minh mang tính đột phá đã xúc tác cho cuộc Cách mạng Công nghiệp.",
         ["herald a breakthrough invention", "revolutionary invention"],
         "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"),
        ("patent infringement", "n.phr", "sự xâm phạm bản quyền phát minh sáng chế", "/ˈpeɪtnt ɪnˈfrɪndʒmənt/",
         "The tech corporation filed a lawsuit alleging blatant patent infringement on wireless protocols.",
         "Tập đoàn công nghệ đã nộp đơn kiện cáo buộc hành vi vi phạm bằng sáng chế trắng trợn về giao thức không dây.",
         ["guilty of patent infringement", "avoid patent infringement"],
         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"),
        ("technological leap", "n.phr", "bước nhảy vọt về công nghệ khoa học", "/ˌteknəˈlɒdʒɪkl liːp/",
         "Quantum computing represents an exponential technological leap in cryptographic speed.",
         "Điện toán lượng tử đại diện cho một bước nhảy vọt công nghệ cấp số nhân về tốc độ mật mã học.",
         ["giant technological leap", "witness a technological leap"],
         "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"),
        ("commercial viability", "n.phr", "tính khả thi thương mại và sinh lời", "/kəˈmɜːʃl ˌvaɪəˈbɪləti/",
         "Investors rigorously scrutinized the prototype's production costs and commercial viability.",
         "Các nhà đầu tư đã xem xét kỹ lưỡng chi phí sản xuất và tính khả thi thương mại của mẫu thử nghiệm.",
         ["assess commercial viability", "prove commercial viability"],
         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"),
        ("open-source software", "n.phr", "phần mềm nguồn mở cho phép tùy biến", "/ˌəʊpən ˈsɔːs ˈsɒftweə(r)/",
         "Developers worldwide collaborate to refine open-source software libraries.",
         "Các lập trình viên trên toàn thế giới cùng nhau cộng tác để tinh chỉnh các thư viện phần mềm nguồn mở.",
         ["contribute to open-source software", "adopt open-source software"],
         "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"),
        ("intellectual property", "n.phr", "tài sản trí tuệ và quyền tác giả", "/ˌɪntəˈlektʃuəl ˈprɒpəti/",
         "Protecting intellectual property incentivizes ongoing venture capital in biomedical research.",
         "Bảo vệ sở hữu trí tuệ tạo động lực thúc đẩy nguồn vốn đầu tư mạo hiểm liên tục vào nghiên cứu y sinh.",
         ["protect intellectual property", "intellectual property rights"],
         "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"),
        ("smart sensor", "n.phr", "cảm biến thông minh ghi nhận dữ liệu", "/smɑːt ˈsensə(r)/",
         "Modern drones utilize smart sensors to detect obstacles and optimize flight altitude.",
         "Máy bay không người lái hiện đại sử dụng các cảm biến thông minh để phát hiện vật cản và tối ưu hóa độ cao bay.",
         ["equipped with smart sensors", "smart sensor network"],
         "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"),
        ("wearable device", "n.phr", "thiết bị công nghệ đeo theo dõi sức khỏe", "/ˈweərəbl dɪˈvaɪs/",
         "Smartwatches and fitness trackers are popular wearable devices tracking vital metrics.",
         "Đồng hồ thông minh và thiết bị theo dõi thể dục là những thiết bị đeo tay phổ biến đo lường các chỉ số sinh tồn.",
         ["use wearable devices", "wearable health device"],
         "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80"),
        ("nanotechnology", "n", "công nghệ nano thao tác cấp độ phân tử", "/ˌnænəʊtekˈnɒlədʒi/",
         "Nanotechnology enables targeted drug delivery straight to cancer cells without harming healthy tissue.",
         "Công nghệ nano cho phép đưa thuốc trúng đích trực tiếp tới tế bào ung thư mà không gây hại cho mô khỏe mạnh.",
         ["advances in nanotechnology", "applications of nanotechnology"],
         "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80"),
        ("autonomous navigation", "n.phr", "khả năng tự định vị dẫn đường tự động", "/ɔːˈtɒnəməs ˌnævɪˈɡeɪʃn/",
         "Self-driving vehicles rely heavily on autonomous navigation algorithms and lidar sensors.",
         "Xe tự lái phụ thuộc rất lớn vào các thuật toán tự hành định vị và cảm biến lidar.",
         ["equipped with autonomous navigation", "autonomous navigation system"],
         "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"),
        ("cutting-edge lab", "n.phr", "phòng thí nghiệm hiện đại tối tân", "/ˌkʌtɪŋ ˈedʒ læb/",
         "Scientists conduct groundbreaking genetics trials inside the university's cutting-edge lab.",
         "Các nhà khoa học tiến hành các thử nghiệm di truyền mang tính đột phá bên trong phòng thí nghiệm tối tân của trường đại học.",
         ["state-of-the-art cutting-edge lab", "research in a cutting-edge lab"],
         "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"),
        ("feasibility study", "n.phr", "nghiên cứu khảo sát tính khả thi dự án", "/ˌfiːzəˈbɪləti ˈstʌdi/",
         "The engineering board conducted a comprehensive feasibility study before digging the tunnel.",
         "Hội đồng kỹ sư đã thực hiện một nghiên cứu khả thi toàn diện trước khi tiến hành đào hầm.",
         ["undertake a feasibility study", "present a feasibility study"],
         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"),
        ("energy storage", "n.phr", "hệ thống lưu trữ năng lượng pin ắc quy", "/ˈenədʒi ˈstɔːrɪdʒ/",
         "Next-generation solid-state batteries provide significantly safer high-capacity energy storage.",
         "Pin thể rắn thế hệ mới cung cấp khả năng lưu trữ năng lượng dung lượng cao an toàn hơn đáng kể.",
         ["efficient energy storage", "energy storage capacity"],
         "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"),
        ("mass manufacture", "v.phr", "sản xuất hàng loạt quy mô công nghiệp", "/mæs ˌmænjuˈfæktʃə(r)/",
         "Robotic assembly lines allow corporations to mass manufacture complex smartphones in seconds.",
         "Dây chuyền lắp ráp bằng robot cho phép các tập đoàn sản xuất hàng loạt điện thoại thông minh phức tạp chỉ trong vài giây.",
         ["mass manufacture components", "ready to mass manufacture"],
         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"),
        ("user interface", "n.phr", "giao diện người dùng đồ họa", "/ˈjuːzər ˈɪntəfeɪs/",
         "An intuitive user interface reduces the learning curve for novice computer operators.",
         "Giao diện người dùng trực quan giúp giảm thiểu thời gian làm quen cho những người mới bắt đầu dùng máy tính.",
         ["intuitive user interface", "clean user interface"],
         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"),
        ("virtual assistant", "n.phr", "trợ lý ảo điều khiển bằng giọng nói", "/ˈvɜːtʃuəl əˈsɪstənt/",
         "Voice-activated virtual assistants can schedule calendar events and dim living room lights.",
         "Các trợ lý ảo kích hoạt bằng giọng nói có thể sắp xếp lịch họp và điều chỉnh ánh sáng phòng khách.",
         ["rely on virtual assistants", "AI virtual assistant"],
         "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"),
        ("fiber optics", "n.phr", "cáp quang truyền dữ liệu tốc độ cao", "/ˌfaɪbər ˈɒptɪks/",
         "Transoceanic fiber optics cables transmit petabytes of international internet traffic.",
         "Cáp quang xuyên đại dương truyền tải hàng petabyte lưu lượng internet quốc tế mỗi ngày.",
         ["high-speed fiber optics", "fiber optics infrastructure"],
         "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"),
        ("reverse engineering", "n.phr", "kỹ thuật giải mã cấu trúc ngược", "/rɪˈvɜːs ˌendʒɪˈnɪərɪŋ/",
         "Engineers applied reverse engineering to deconstruct the competitor's microchip design.",
         "Các kỹ sư đã áp dụng kỹ thuật dịch ngược để phân tích thiết kế vi mạch của đối thủ cạnh tranh.",
         ["perform reverse engineering", "subject to reverse engineering"],
         "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"),
        ("bionic limb", "n.phr", "chi nhân tạo điện sinh học thông minh", "/baɪˈɒnɪk lɪm/",
         "Modern bionic limbs respond to neurological electrical signals from remaining muscle fibers.",
         "Các chi sinh học thông minh hiện đại phản hồi trực tiếp các tín hiệu điện thần kinh từ các bó cơ còn lại.",
         ["fitted with a bionic limb", "advanced bionic limbs"],
         "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"),
        ("speech recognition", "n.phr", "công nghệ nhận dạng giọng nói", "/spiːtʃ ˌrekəɡˈnɪʃn/",
         "Speech recognition has reached human-level accuracy in multiple regional dialects.",
         "Nhận dạng giọng nói đã đạt đến độ chính xác tương đương con người ở nhiều phương ngữ vùng miền.",
         ["accurate speech recognition", "speech recognition engine"],
         "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"),
        ("data encryption", "n.phr", "mã hóa dữ liệu bảo mật", "/ˈdeɪtə ɪnˈkrɪpʃn/",
         "End-to-end data encryption shields user chat messages from unauthorized eavesdropping.",
         "Mã hóa dữ liệu đầu cuối bảo vệ tin nhắn trò chuyện của người dùng khỏi hành vi nghe lén trái phép.",
         ["strong data encryption", "implement data encryption"],
         "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"),
        ("wireless charging", "n.phr", "sạc pin không dây từ trường", "/ˌwaɪələs ˈtʃɑːdʒɪŋ/",
         "Wireless charging pads eliminate clutter by inductive electromagnetic power transfer.",
         "Đế sạc không dây loại bỏ sự rườm rà của dây cáp nhờ khả năng truyền tải điện từ trường cảm ứng.",
         ["fast wireless charging", "support wireless charging"],
         "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80"),
        ("touchscreen display", "n.phr", "màn hình hiển thị cảm ứng", "/ˈtʌtʃskriːn dɪˈspleɪ/",
         "Interactive touchscreen displays simplify information lookup in transit stations.",
         "Màn hình hiển thị cảm ứng tương tác đơn giản hóa việc tra cứu thông tin tại các nhà ga trung chuyển.",
         ["responsive touchscreen display", "multi-touch display"],
         "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"),
        ("unmanned aerial vehicle", "n.phr", "phương tiện bay không người lái drone", "/ˌʌnˈmænd ˈeəriəl ˈviːəkl/",
         "Unmanned aerial vehicles aid search and rescue crews in inaccessible mountain canyons.",
         "Phương tiện bay không người lái hỗ trợ các đội tìm kiếm cứu nạn tại những hẻm núi hiểm trở khó tiếp cận.",
         ["deploy unmanned aerial vehicles", "remote-controlled vehicle"],
         "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80"),
        ("high-definition camera", "n.phr", "máy ảnh quay phim độ phân giải cao", "/ˌhaɪ defɪˈnɪʃn ˈkæmrə/",
         "Surgical robots carry high-definition cameras giving surgeons stereoscopic views.",
         "Robot phẫu thuật mang theo camera độ nét cao mang lại cho phẫu thuật viên tầm nhìn lập thể sắc nét.",
         ["equipped with high-definition camera", "ultra high-definition"],
         "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"),
        ("cloud storage", "n.phr", "lưu trữ đám mây trực tuyến", "/klaʊd ˈstɔːrɪdʒ/",
         "Backing up data to encrypted cloud storage safeguards critical files from hardware failure.",
         "Sao lưu dữ liệu lên lưu trữ đám mây mã hóa giúp bảo vệ các tài liệu quan trọng khỏi hư hỏng phần cứng.",
         ["secure cloud storage", "sync with cloud storage"],
         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"),
        ("biometric authentication", "n.phr", "xác thực sinh trắc học vân tay khuôn mặt", "/ˌbaɪəʊˈmetrɪk ɔːˌθentɪˈkeɪʃn/",
         "Banking apps integrate biometric authentication to prevent account takeovers.",
         "Các ứng dụng ngân hàng tích hợp xác thực sinh trắc học để ngăn chặn hành vi chiếm đoạt tài khoản.",
         ["implement biometric authentication", "fingerprint authentication"],
         "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"),
        ("augmented reality headset", "n.phr", "kính thực tế ảo tăng cường", "/ɔːɡˌmentɪd riˈæləti ˈhedset/",
         "Automotive mechanics wear augmented reality headsets showing step-by-step engine diagrams.",
         "Thợ sửa chữa ô tô đeo kính thực tế tăng cường hiển thị từng bước sơ đồ động cơ trước mắt.",
         ["wear an augmented reality headset", "interactive headset"],
         "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"),
        ("digital twin", "n.phr", "mô hình bản sao số mô phỏng thực thể", "/ˈdɪdʒɪtl twɪn/",
         "Civil engineers construct a digital twin of the suspension bridge to simulate hurricane stress.",
         "Các kỹ sư xây dựng một bản sao số của cây cầu treo để mô phỏng tải trọng chịu đựng trong bão lớn.",
         ["create a digital twin", "digital twin simulation"],
         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"),
        ("rapid prototyping", "n.phr", "tạo mẫu thử nghiệm nhanh", "/ˌræpɪd ˈprəʊtətaɪpɪŋ/",
         "3D printers accelerate product development cycles via rapid prototyping iterations.",
         "Máy in 3D đẩy nhanh chu kỳ phát triển sản phẩm thông qua các vòng lặp chế tạo mẫu thử nghiệm nhanh.",
         ["facilitate rapid prototyping", "rapid prototyping technique"],
         "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"),
        ("clean technology", "n.phr", "công nghệ sạch thân thiện môi trường", "/kliːn tekˈnɒlədʒi/",
         "Government subsidies encourage startups to invest heavily in clean technology patents.",
         "Trợ cấp chính phủ khuyến khích các công ty khởi nghiệp đầu tư mạnh mẽ vào các bằng sáng chế công nghệ sạch.",
         ["pioneer clean technology", "clean technology sector"],
         "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80")
    ]
}

def inject_to_file(filepath, unit_data_map):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    for unit_slug, items in unit_data_map.items():
        search_key = f'"{unit_slug}": ['
        idx = content.find(search_key)
        if idx != -1:
            close_idx = content.find('  ],', idx)
            if close_idx != -1:
                block_entries = []
                for item in items:
                    word, pos, vi, ipa, en_ex, vi_ex, colocs, img = item
                    cid = f"mega-{unit_slug[:6]}-{word.lower().replace(' ', '-').replace('/', '-')}"
                    audio = f"https://dict.youdao.com/dictvoice?audio={word.replace(' ', '+')}&type=2"
                    block_entries.append('    ,')
                    block_entries.append('    {')
                    block_entries.append(f'      id: {json.dumps(cid)},')
                    block_entries.append(f'      word: {json.dumps(word)},')
                    block_entries.append(f'      partOfSpeech: {json.dumps(pos)},')
                    block_entries.append(f'      meaningVi: {json.dumps(vi)},')
                    block_entries.append(f'      ipa: {json.dumps(ipa)},')
                    block_entries.append(f'      audioUrl: {json.dumps(audio)},')
                    block_entries.append(f'      imageUrl: {json.dumps(img)},')
                    block_entries.append(f'      exampleEn: {json.dumps(en_ex)},')
                    block_entries.append(f'      exampleVi: {json.dumps(vi_ex)},')
                    block_entries.append(f'      collocations: {json.dumps(colocs)}')
                    block_entries.append('    }')
                insert_str = "\n".join(block_entries) + "\n"
                content = content[:close_idx] + insert_str + content[close_idx:]

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

g10_path = os.path.join(os.path.dirname(__file__), "..", "src", "lib", "curriculum", "expanded-vocab-g10.ts")
inject_to_file(g10_path, G10_EXTRA)
print("Injected extra words into G10 units 1, 3, and 5!")
