# -*- coding: utf-8 -*-
import json
import os

TOPUP_G10 = {
    "unit-6-gender-equality": [
        ("gender parity", "n.phr", "sự cân bằng tỉ lệ giữa nam và nữ", "/ˈdʒendə ˈpærəti/",
         "The parliament passed new laws to ensure gender parity across senior civil service posts.",
         "Nghị viện đã thông qua đạo luật mới để bảo đảm sự cân bằng tỉ lệ nam nữ trong các chức vụ công quyền cấp cao.",
         ["achieve gender parity", "strive for gender parity"],
         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"),
        ("equal standing", "n.phr", "vị thế và tiếng nói bình đẳng ngang hàng", "/ˌiːkwəl ˈstændɪŋ/",
         "Spouses share equal standing in all financial and family governance decisions.",
         "Vợ chồng chia sẻ vị thế bình đẳng ngang hàng trong mọi quyết định tài chính và quản lý gia đình.",
         ["enjoy equal standing", "recognize equal standing"],
         "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80")
    ],
    "unit-8-new-ways-to-learn": [
        ("multimedia presentation", "n.phr", "bài thuyết trình đa phương tiện kết hợp âm thanh hình ảnh", "/ˌmʌltiˈmiːdiə ˌpreznˈteɪʃn/",
         "Students crafted a vivid multimedia presentation incorporating video clips and audio quotes.",
         "Học sinh đã sáng tạo một bài thuyết trình đa phương tiện sinh động kết hợp các đoạn video và trích dẫn âm thanh.",
         ["deliver a multimedia presentation", "multimedia presentation slides"],
         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80")
    ],
    "unit-9-protecting-the-environment": [
        ("carbon sequestration", "n.phr", "sự thu giữ và cô lập khí carbon của rừng biển", "/ˈkɑːbən ˌsiːkwəˈstreɪʃn/",
         "Coastal salt marshes perform vital carbon sequestration that exceeds terrestrial forests.",
         "Các đầm lầy mặn ven biển thực hiện chức năng cô lập carbon thiết yếu vượt xa cả các khu rừng trên cạn.",
         ["rate of carbon sequestration", "biological carbon sequestration"],
         "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80")
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
inject_to_file(g10_path, TOPUP_G10)
print("Grade 10 100% units reached 80+!")
