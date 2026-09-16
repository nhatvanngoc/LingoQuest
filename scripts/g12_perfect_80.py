# -*- coding: utf-8 -*-
import json
import os

TOPUP_G12 = {
    "unit-1-life-stories-we-admire": [
        ("self-sacrifice", "n", "sự hy sinh quên mình vì đại nghĩa", "/ˌself ˈsækrɪfaɪs/",
         "The soldiers displayed extraordinary self-sacrifice defending the mountain border outpost.",
         "Những người lính đã thể hiện sự hy sinh quên mình phi thường khi bảo vệ tiền đồn biên cương trên núi.",
         ["noble self-sacrifice", "act of self-sacrifice"],
         "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80")
    ],
    "unit-4-urbanisation": [
        ("ring road", "n.phr", "tuyến đường vành đai giải tỏa ách tắc đô thị", "/ˈrɪŋ rəʊd/",
         "Constructing the fourth municipal ring road diverted heavy cargo container trucks away from the inner core.",
         "Xây dựng tuyến đường vành đai thứ tư đã giúp điều hướng các đoàn xe container chở hàng nặng tránh xa lõi trung tâm thành phố.",
         ["drive along the ring road", "inner ring road"],
         "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80"),
        ("commuter rail link", "n.phr", "tuyến đường sắt kết nối khu ngoại ô vào nội đô", "/kəˈmjuːtə reɪl lɪŋk/",
         "The high-speed commuter rail link cuts rush-hour travel times to twenty minutes.",
         "Tuyến đường sắt đô thị tốc độ cao rút ngắn thời gian di chuyển giờ cao điểm xuống chỉ còn hai mươi phút.",
         ["ride the commuter rail link", "modern rail link"],
         "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80")
    ],
    "unit-7-the-world-of-mass-media": [
        ("media watchdog", "n.phr", "cơ quan giám sát độc lập tính trung thực của báo chí", "/ˈmiːdiə ˈwɒtʃdɒɡ/",
         "The independent media watchdog investigates instances of unethical covert product placement in morning talk shows.",
         "Cơ quan giám sát báo chí độc lập điều tra các vụ cài cắm quảng cáo sản phẩm ngầm thiếu đạo đức trong các chương trình trò chuyện buổi sáng.",
         ["role of media watchdog", "watchdog organization"],
         "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80"),
        ("digital stream", "n.phr", "luồng phát sóng trực tuyến âm thanh hình ảnh kỹ thuật số", "/ˌdɪdʒɪtl striːm/",
         "Millions of viewers tuned in to the official high-definition digital stream of the charity concert.",
         "Hàng triệu khán giả đã theo dõi luồng phát sóng trực tuyến độ nét cao chính thức của đêm nhạc gây quỹ từ thiện.",
         ["watch the digital stream", "live digital stream"],
         "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80")
    ],
    "unit-10-lifelong-learning": [
        ("self-actualization", "n", "nhu cầu tự thể hiện và hiện thực hóa tiềm năng bản thân", "/ˌself ˌæktʃuəlaɪˈzeɪʃn/",
         "Reaching self-actualization through creative painting and poetry fulfills an innate human desire.",
         "Đạt tới sự tự hiện thực hóa tiềm năng bản thân qua hội họa sáng tạo và thơ ca thỏa mãn khát khao sâu thẳm của con người.",
         ["strive for self-actualization", "peak of self-actualization"],
         "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80")
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

g12_path = os.path.join(os.path.dirname(__file__), "..", "src", "lib", "curriculum", "expanded-vocab-g12.ts")
inject_to_file(g12_path, TOPUP_G12)
print("Grade 12 topup complete!")
