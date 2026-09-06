# Project Constitution: LingoQuest Monolithic EdTech Platform
**Stitch Project ID:** `projects/lingoquest-unified-edtech-v2`
**Version:** 2.5.0 (Monolithic Architecture)
**Last Updated:** 2026-09-06

---

## 1. Core Identity
- **Project Name:** LingoQuest (Nền tảng học Tiếng Anh thông minh chuẩn Khung Năng Lực Sư Phạm)
- **Mission:** Cung cấp giải pháp học và giảng dạy tiếng Anh 5-trong-1 khép kín và liền mạch: kết hợp video bài giảng thực tế, thẻ từ vựng phát âm chuẩn Web Speech, trắc nghiệm ngữ pháp, bài tập điền từ ngữ cảnh và luyện viết tự luận có AI chấm thử thời gian thực.
- **Target Audience:**
  - **Học sinh (Learners):** Học sinh THPT & người học muốn nâng cao vốn từ vựng, ngữ pháp và kỹ năng viết với lộ trình game hóa, phản hồi ngay lập tức.
  - **Giáo viên (Educators):** Giáo viên tiếng Anh cần công cụ soạn bài tập 5-trong-1 chỉ bằng 1 cú nhấp chuột (AI Co-Pilot), theo dõi ma trận tiến độ cả lớp, quản lý trực tiếp bài giảng (xóa/ẩn/nhân bản trên web), và trợ lý AI gợi ý điểm số + nhận xét luận văn.
- **Voice & Tone:** *Tận tâm (Empathetic), Đĩnh đạc & Đáng tin cậy (Academic Trust), Khuyến khích & Tràn đầy cảm hứng (Encouraging Gamification).*

---

## 2. Visual Language & Vibe
- **Aesthetic Keywords:** `Kinetic Crisp`, `Editorial High-Trust`, `Tactile Gamified`.
- **Primary Color:** Deep Forest Emerald (`#10B981` / `#059669`) — Đại diện cho sự tiến bộ và tính chuẩn mực.
- **Accent Color:** Cerulean Blue (`#3B82F6`) — Kích thích tập trung trong các hoạt động tương tác.
- **Neutral Palette:** Crisp White (`#FFFFFF`) card surfaces on Gentle Slate-50 canvas (`#F8FAFC`).
- **Surface Elevation:** Micro-borders with soft ambient occlusion shadows (`shadow-soft hover:shadow-card`).

---

## 3. Architecture & Directory Structure
Monolithic Next.js 14 App Router codebase with direct PostgreSQL / Drizzle ORM persistence:

```
lingoquest-edtech-ui-template/
├── DESIGN.md                          # Google Stitch Semantic Design System
├── .stitch/
│   └── SITE.md                        # Stitch Project Constitution & Live Sitemap
├── src/
│   ├── app/
│   │   ├── page.tsx                   # Landing Page (Value Proposition & Features)
│   │   ├── login/page.tsx             # Role-aware Auth (Student / Teacher Switcher)
│   │   ├── dashboard/page.tsx         # Student Dashboard (Quest, Daily Streak, Assignments)
│   │   ├── exercise/[id]/page.tsx     # 5-Stage Monolithic Player (Video, Vocab, Quiz, Fill, Writing)
│   │   ├── flashcards/page.tsx        # Standalone Spaced-Repetition Vocab Deck
│   │   ├── video/page.tsx             # Interactive Video Player with Transcript & Vocab
│   │   ├── progress/page.tsx          # Student Progress, XP Roster & Graded Essay Submissions
│   │   ├── teacher/
│   │   │   ├── page.tsx               # Central Management Dashboard (Assignments, Videos, Matrix)
│   │   │   ├── assignments/new/       # AI Co-Pilot 5-in-1 Assignment Studio (with Cloning)
│   │   │   ├── grading/               # One-Click AI Pre-Grading & Essay Evaluation Hub
│   │   │   ├── lessons/new/           # Video Lesson Publishing Hub
│   │   │   └── students/              # Class Roster, Performance Rankings & UTF-8 CSV Export
│   │   └── api/
│   │       ├── auth/session/          # Role-based Session & Cookie Management
│   │       ├── dashboard/overview/    # Filtered Student Dashboard Data
│   │       ├── exercise/submit/       # Unified Multi-Stage Scoring & Attempt Tracking
│   │       ├── teacher/assignments/   # Web CRUD (Create, Hide/Show, Delete, Clone)
│   │       ├── teacher/lessons/       # Web CRUD for Video Lessons
│   │       ├── teacher/grade-ai/      # Groq Qwen AI Essay Evaluation
│   │       ├── teacher/grading/       # Manual & AI-Assisted Submission Grading
│   │       └── teacher/students/      # Detailed Student Stats API
│   ├── components/
│   │   ├── AppShell.tsx               # Responsive Shell with Global Nav & Floating Mobile Bar
│   │   ├── AssignmentCard.tsx         # Context-aware Assignment Tile with Urgency & Feedback Route
│   │   └── ui/                        # Accessible Core Components (Button, Dialog, Input, Toasts)
│   ├── db/                            # Drizzle Schema & Optimized SQL Queries
│   └── lib/                           # Audio Web Speech, Framer Motion, AI Groq Client
```

---

## 4. Live Sitemap & Status Matrix

| Route | Page Title | Role Access | Key Capabilities | Status |
| :--- | :--- | :--- | :--- | :---: |
| `/` | Landing Page | Public | Trình diễn tính năng 5-trong-1, video demo, bảng giá | `[x]` |
| `/login` | Đăng nhập / Chuyển vai trò | Public | Chuyển đổi linh hoạt 1-click Học sinh ↔ Giáo viên | `[x]` |
| `/dashboard` | Bảng điều khiển Học sinh | Student | Danh sách bài tập cần làm, chuỗi ngày học, thẻ từ vựng | `[x]` |
| `/exercise/[id]` | Trình làm bài tập 5-trong-1 | Student | Video bài giảng, Flashcard âm thanh, Quiz, Điền từ, Viết luận | `[x]` |
| `/flashcards` | Ôn tập Flashcards | Student | Luyện phát âm Web Speech 🔊, chấm điểm độ thuộc | `[x]` |
| `/video` | Xem video bài giảng | Student | Video Youtube tích hợp từ điển từ vựng trực tiếp | `[x]` |
| `/progress` | Tiến độ & Xem bài đã chấm | Student | Lịch sử làm bài, nhận xét của giáo viên, xem điểm số | `[x]` |
| `/teacher` | Quản trị trung tâm Giáo viên | Teacher | Quản lý bài tập (Xóa/Ẩn/Nhân bản), video, ma trận điểm | `[x]` |
| `/teacher/assignments/new` | Studio soạn bài AI Co-Pilot | Teacher | Tự động sinh trọn bộ bài tập 5-trong-1 hoặc khôi phục bản sao | `[x]` |
| `/teacher/grading` | Trung tâm chấm bài & AI gợi ý | Teacher | Chấm bài luận, 1-click "AI Chấm thử" bằng Groq Qwen | `[x]` |
| `/teacher/lessons/new` | Đăng video bài giảng | Teacher | Gắn video YouTube kèm danh sách từ vựng trọng tâm | `[x]` |
| `/teacher/students` | Bảng vàng & Danh sách học sinh | Teacher | Bộ lọc xếp hạng XP, Streak và Xuất file Excel / CSV UTF-8 | `[x]` |

---

## 5. Completed Enhancements Across 5 Dimensions

### 1. Interaction Logic (Logic Người Dùng Tương Tác & Trải Nghiệm)
- `[x]` **Closed Feedback Loop:** Học sinh hoàn thành bài tập có thể nhấp trực tiếp từ Dashboard sang `/progress#submissions` để xem điểm số chi tiết và lời phê của giáo viên.
- `[x]` **Local Draft Auto-Save:** Trình làm bài 5 giai đoạn tự động lưu tạm bài làm vào `localStorage` phòng trường hợp rớt mạng hoặc tải lại trang.
- `[x]` **1-Click Assignment Cloning:** Giáo viên nhân bản bài tập bất kỳ kèm toàn bộ video, từ vựng, trắc nghiệm, điền từ và đề luận sang Studio để tái sử dụng.

### 2. Pedagogical Content Design (Cấu Trúc & Sư Phạm Nội Dung)
- `[x]` **Target Vocabulary Live Tracker:** Trong giai đoạn Viết tự luận, các từ vựng trọng tâm xuất hiện dưới dạng chip tương tác và tự động chuyển sang màu xanh khi học sinh vận dụng vào bài viết.
- `[x]` **Native Web Speech Pronunciation:** Tích hợp nút phát âm chuẩn bản ngữ 🔊 cho mọi thẻ từ vựng (cả mặt trước và mặt sau thẻ).
- `[x]` **Tolerant Scoring Engine:** Khắc phục lỗi gõ sai khoảng trắng hoặc chữ hoa/thường trong bài tập điền từ, tạo tâm lý tích cực cho học sinh.

### 3. Core Features Roadmap (Chức Năng Cốt Lõi)
- `[x]` **AI Pre-Grading Co-Pilot:** Kết nối mô hình Groq Qwen 27B để đọc bài luận của học sinh, tự động chấm điểm trên thang 10 và viết nhận xét chi tiết bằng tiếng Việt.
- `[x]` **Direct Web Management (No SQL):** Cho phép giáo viên Xóa, Ẩn/Hiện bài tập và video bài giảng trực tiếp trên giao diện web.
- `[x]` **Universal Excel/CSV Export:** Xuất danh sách học sinh, cấp độ, kinh nghiệm và chuỗi ngày học ra định dạng CSV chuẩn UTF-8 BOM mở ngay trên Microsoft Excel.

### 4. UI / Visual Design Polish (Giao Diện & Tương Tác Trực Quan)
- `[x]` **Google Stitch Semantic Design System:** Chuẩn hóa toàn bộ token trong `DESIGN.md` và tuân thủ nguyên tắc không lạm dụng dải màu AI tím/xanh neon.
- `[x]` **Spring Physics Micro-Interactions:** Tối ưu hiệu ứng lật thẻ 3D, hiệu ứng đếm số NumberTicker, và các huy hiệu trạng thái chuyển động mượt mà.

### 5. Navigation & Roles (Điều Hướng & Khả Năng Của Giáo Viên)
- `[x]` **Strict Role-based Navigation:** Học sinh chỉ nhìn thấy các bài tập và video ở trạng thái `published`; giáo viên toàn quyền quản lý kho học liệu.
- `[x]` **Deep Linking:** Điều hướng mượt mà từ bảng điều khiển tới màn hình chấm bài và xem phản hồi.
