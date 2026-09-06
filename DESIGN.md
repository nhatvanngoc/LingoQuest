# Design System: LingoQuest Monolithic EdTech Platform
**Project ID:** `projects/lingoquest-unified-edtech-v2`
**Specification Standard:** Google Stitch Semantic Design System (`taste-design` & `design-md`)

---

## 1. Visual Theme & Atmosphere
- **Aesthetic Philosophy:** *Kinetic Editorial High-Agency EdTech*. Balancing high-trust academic credibility with playful gamification mechanics.
- **Density:** `Daily App Balanced` (Level 5/10) with generous whitespace (`clamp(1.5rem, 4vw, 3rem)`), clear visual grouping, and zero cluttered text walls.
- **Variance:** `Offset Asymmetric` (Level 6/10). Balanced left-aligned typography hierarchy paired with dynamic cards, tactile progress meters, and floating context chips.
- **Motion:** `Fluid Spring Physics` (Level 7/10). Natural spring response (`stiffness: 100, damping: 20`) on card flips, stage transitions, and tab switches.

---

## 2. Color Palette & Functional Roles
Strictly anti-slop color discipline: Zero uncalibrated neon gradients or generic purple glowing buttons.

| Descriptive Name | Hex Code | Functional Role |
| :--- | :--- | :--- |
| **Deep Forest Emerald (Primary Brand)** | `#10B981` / `#059669` | Primary actions, completed badges, forward progression, high-trust accents |
| **Cerulean Ocean (Accent Action)** | `#3B82F6` / `#2563EB` | Active learning stages, vocabulary highlights, interactive flashcards |
| **Amber Sun (Urgency & Streak)** | `#F59E0B` / `#D97706` | Daily streaks, review urgency alerts, XP rewards |
| **Off-White Canvas (Base Surface)** | `#F8FAFC` | Main app background, gentle on student eyes during long study sessions |
| **Pure Crisp White (Card Surface)** | `#FFFFFF` | Elevated learning modules, exercise stages, and interactive cards |
| **Deep Zinc-Slate (Typography Dark)** | `#0F172A` / `#1E293B` | High-contrast readable headings and student prompts |
| **Muted Slate (Secondary Body)** | `#64748B` | Pronunciation IPA text, helper guidelines, timestamps |
| **Crimson Guard (Destructive / Danger)** | `#EF4444` / `#DC2626` | Delete actions, overdue assignments, grammatical corrections |

---

## 3. Typographic Architecture
- **Font Stack:** Modern geometric humanist typography pairing:
  - **Headings & Badges:** `Plus Jakarta Sans` / `Outfit` (`font-extrabold`, tracking `-0.02em`)
  - **Body & Prompts:** `Inter` / `system-ui` (`font-normal` or `font-medium`, relaxed line-height `1.65`, max 68 characters/line)
  - **Metrics, Counters & Phonetics:** `JetBrains Mono` / monospace numerals for number ticker counters, timers, and pronunciation brackets (`/ɪkˈsplɔːr/`)
- **Hierarchy:**
  - `h1`: `text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight`
  - `h2`: `text-xl font-bold text-slate-900`
  - `h3`: `text-base font-bold text-slate-800`
  - `body-sm`: `text-sm text-slate-600`
  - `caption`: `text-xs font-semibold text-slate-400 uppercase tracking-wider`

---

## 4. Component Stylings & Interaction Rules
- **Tactile Push Buttons:**
  - `rounded-2xl` geometry with crisp micro-border (`border border-slate-200/80`).
  - Active state feedback: `active:scale-[0.98] transition-transform duration-100 ease-out`.
- **Learning Stage Flashcards:**
  - 3D Flip perspective (`rotateY` with 0.45s smooth spring).
  - Native Web Speech synthesis button (`🔊`) integrated into both Front and Back faces.
  - Generously rounded corners (`rounded-3xl`), whisper-soft diffused drop shadow (`shadow-soft hover:shadow-card`).
- **Interactive Inputs & Forms:**
  - Tolerant scoring text inputs (`border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 rounded-xl`).
  - Real-time vocabulary usage pills: dynamic badge highlights from Slate-100 to Emerald-100 as students incorporate target words into their essays.
- **Teacher Co-Pilot Action Bar:**
  - 1-Click AI Pre-grading button with subtle pulse shimmer during evaluation.
  - 1-Click Assignment Cloner preserving all 5 core stages into Studio draft memory.
  - UTF-8 BOM CSV export for instant Excel compatibility.

---

## 5. Motion Physics & Animation Specifications
- **Framer Motion Presets:**
  ```ts
  export const springPhysics = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  };
  export const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: springPhysics },
  };
  ```
- **Perpetual Micro-Interactions:**
  - Subtle breathing glow on active study cards.
  - Smooth progress bar filling on stage completion.
  - Toast alerts floating in from top-right with auto-dismiss in 4 seconds.

---

## 6. Monolithic Unified Product Architecture
LingoQuest connects 5 pedagogical learning phases into a single continuous experience:
1. **Video Comprehension:** Contextual YouTube immersion with structured timestamped notes.
2. **Flashcard Drills:** Dual-faced interactive flashcards with native Web Speech pronunciation.
3. **Multiple Choice Quizzes:** Immediate feedback with granular grammatical explanations.
4. **Fill-in-the-Blank:** Contextual grammatical retrieval with tolerant spacing/case matching.
5. **Applied Writing Practice:** Open-ended essay composition with live target vocabulary tracking and automated AI pre-grading for teachers.

---

## 7. Anti-Patterns & Banned AI Tells
- ❌ **No Purple/Blue Neon Gradient Slop:** Interfaces must feel tangible, professional, and educational.
- ❌ **No Hidden Traps or Dead-Ends:** Every student assignment has a clear next step; completed assignments route directly to feedback review.
- ❌ **No Unsaved Data Loss:** All multi-step exercise answers auto-save to local storage drafts to protect student work against browser refreshes.
- ❌ **No Manual SQL Friction for Educators:** Full CRUD (Hide/Show, Delete, Clone, Export, AI Pre-grade) accessible directly in the browser UI.
