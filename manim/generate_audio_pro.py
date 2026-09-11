import asyncio
import os
import edge_tts
from mutagen.mp3 import MP3

VOICE = "en-US-ChristopherNeural"

SECTIONS = [
    (
        "01_intro",
        "Welcome to LingoQuest Grammar Masterclass. Past Simple versus Present Perfect is one of the most confusing topics in English. Today, let's unlock both tenses with intuitive visual timelines and crystal clear grammar formulas."
    ),
    (
        "02_formulas",
        "Let's start with the grammar structure. For Past Simple, we use Subject plus Verb 2 or V-E-D. In negatives, we use 'did not' plus base verb. For Present Perfect, we need an auxiliary verb: 'have' or 'has', followed by Verb 3, the past participle. Notice this: 'have' and 'has' belong to the present family. They act as a grammatical anchor connecting the action to right now!"
    ),
    (
        "03_past_simple",
        "Now look at the timeline for Past Simple. 'She visited Tokyo in 2019'. The action happened at a specific past timestamp. It is completed, finished, and locked away. There is a complete barrier separating it from the present moment. Time markers include: yesterday, last year, in 2019, or two days ago."
    ),
    (
        "04_pres_perf_ongoing",
        "Next, Present Perfect for ongoing actions. 'She has lived in Tokyo for 4 years'. The action began 4 years ago in the past. But look at the continuous vector beam: it travels across time and touches right now! This means she is still living in Tokyo today. The journey continues."
    ),
    (
        "05_present_result",
        "Here is the most critical difference: The Present Result! Compare these two sentences. 'He lost his phone' versus 'He has lost his phone'. In Past Simple, he lost it yesterday, but maybe he already bought a new one today. But in Present Perfect: 'He has lost his phone' means right now, at this exact moment, he still does not have his phone! The past event directly controls the present reality."
    ),
    (
        "06_since_vs_for",
        "Let's master 'Since' versus 'For'. 'Since' points to a specific starting moment in the past, like 'since 2020' or 'since Monday'. On the other hand, 'For' measures the entire duration: a span of time, such as 'for 5 years' or 'for 3 hours'. 'Since' is a starting pin. 'For' is a measuring tape."
    ),
    (
        "07_interactive_quiz",
        "Time for a quick challenge! Look at this sentence: 'David, blank, English since 2018. Verb: teach'. Because we see 'since 2018', this action started in the past and continues right now. So the base verb 'teach' morphs into: 'has taught'! Correct! 'David has taught English since 2018'."
    ),
    (
        "08_summary",
        "To summarize: Past Simple equals a finished action locked in the past. Present Perfect equals an ongoing action, or a past action with an active result touching right now. Master your grammar quest on LingoQuest!"
    )
]

async def generate_all():
    audio_dir = "d:/Desktop/AI Agent/lingoquest-edtech-ui-template/manim/audio_pro"
    os.makedirs(audio_dir, exist_ok=True)
    durations = {}
    
    print("--- Generating Professional Voiceover ---")
    for key, text in SECTIONS:
        file_path = os.path.join(audio_dir, f"{key}.mp3")
        tts = edge_tts.Communicate(text, VOICE, rate="+2%")
        await tts.save(file_path)
        
        audio = MP3(file_path)
        durations[key] = round(audio.info.length, 2)
        print(f"[{key}] {durations[key]}s: {text[:60]}...")
        
    import json
    with open(os.path.join(audio_dir, "durations.json"), "w") as f:
        json.dump(durations, f, indent=2)
    print("\nDurations saved to durations.json")
    return durations

if __name__ == "__main__":
    asyncio.run(generate_all())
