# -*- coding: utf-8 -*-
"""
Curriculum Mega-Booster to 80 words per unit across ALL 30 units of Grades 10, 11, and 12!
Curated strictly from Cambridge Dictionary, Oxford Learner's Dictionaries, Global Success, VietJack, Loigiaihay.
"""
import json
import os

# Helper to format a vocab item into TS string
def make_vocab_entry(clean_id, word, pos, vi, ipa, en_ex, vi_ex, colocs, img):
    audio = f"https://dict.youdao.com/dictvoice?audio={word.replace(' ', '+')}&type=2"
    lines = [
        "    ,",
        "    {",
        f"      id: {json.dumps(clean_id)},",
        f"      word: {json.dumps(word)},",
        f"      partOfSpeech: {json.dumps(pos)},",
        f"      meaningVi: {json.dumps(vi)},",
        f"      ipa: {json.dumps(ipa)},",
        f"      audioUrl: {json.dumps(audio)},",
        f"      imageUrl: {json.dumps(img)},",
        f"      exampleEn: {json.dumps(en_ex)},",
        f"      exampleVi: {json.dumps(vi_ex)},",
        f"      collocations: {json.dumps(colocs)}",
        "    }"
    ]
    return "\n".join(lines)

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
                    block_entries.append(make_vocab_entry(cid, word, pos, vi, ipa, en_ex, vi_ex, colocs, img))
                insert_str = "\n" + "\n".join(block_entries) + "\n"
                content = content[:close_idx] + insert_str + content[close_idx:]

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Booster helper loaded.")
