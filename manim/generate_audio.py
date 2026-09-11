import asyncio
import os
import edge_tts
from mutagen.mp3 import MP3

VOICE = "en-US-ChristopherNeural"

SECTIONS = [
    ("intro", "Welcome to LingoQuest Grammar Visualizer. Today, let's understand the core difference between Past Simple and Present Perfect."),
    ("timeline", "Grammar is not just memorizing rules. It's about where an action lives on the Timeline."),
    ("past_simple", "First, Past Simple. 'I lived in Da Nang in 2018'. The action started and completely ended in the past. It has zero connection to now."),
    ("present_perfect", "Now, Present Perfect. 'I have lived in Da Nang for 5 years'. The action started in the past, but it connects directly to the present. I still live there today!"),
    ("comparison", "Notice the verb forms. 'Lived' versus 'Have lived'. One is locked in the past, the other is a bridge to the present."),
    ("summary", "Remember: Past Simple is finished. Present Perfect touches right now. Keep practicing on LingoQuest!")
]

async def generate_all_audio(out_dir):
    os.makedirs(out_dir, exist_ok=True)
    durations = {}
    combined_script = []
    
    for key, text in SECTIONS:
        file_path = os.path.join(out_dir, f"{key}.mp3")
        tts = edge_tts.Communicate(text, VOICE, rate="+3%")
        await tts.save(file_path)
        
        # calculate duration
        audio = MP3(file_path)
        durations[key] = audio.info.length
        print(f"[{key}] {audio.info.length:.2f}s: {text}")
        combined_script.append((key, file_path, audio.info.length))
        
    return durations

if __name__ == "__main__":
    import json
    res = asyncio.run(generate_all_audio("d:/Desktop/AI Agent/lingoquest-edtech-ui-template/manim/audio"))
    with open("d:/Desktop/AI Agent/lingoquest-edtech-ui-template/manim/audio/durations.json", "w") as f:
        json.dump(res, f, indent=2)
    print("All audio generated successfully!")
