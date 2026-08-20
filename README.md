# 🦜 LingoQuest — Template UI/UX nền tảng học tiếng Anh

Bộ template giao diện hoàn chỉnh cho nền tảng EdTech **LingoQuest** — kết hợp **Video + Flashcard + Bài tập + Game 2D**.
Thiết kế chuẩn **Duolingo-style nhưng chuyên nghiệp hơn**: sạch, phẳng, bo góc lớn, thân thiện với người Việt.

> Tất cả dữ liệu là **mock data** (xem `src/lib/mock/data.ts`), UI text bằng tiếng Việt, nội dung học bằng tiếng Anh. Dễ thay bằng API thật sau.

## ✨ Tính năng đã thiết kế

| # | Màn hình | Đường dẫn | Mô tả |
|---|----------|-----------|-------|
| 1 | Landing Page | `/` | Hero, 3 tính năng, đăng nhập Google |
| 2 | Chờ phê duyệt | `/pending` | Mascot, gửi yêu cầu giáo viên, đăng xuất |
| 3 | Dashboard học sinh | `/dashboard` | Bài học hôm nay, bài tập, luyện nhanh, nhiệm vụ |
| 4 | Màn hình học | `/learn/lesson-1` | Luồng 3 bước: Video → Flashcard → Kiểm tra |
| 5 | Luyện Flashcard | `/flashcards/deck-1` | Thẻ lật 3D + phím tắt (Space / ← →) |
| 6 | Làm bài tập | `/exercise/a1` | Trắc nghiệm kiểu Duolingo + Bài viết + Kết quả confetti |
| 7 | Game hub | `/game` | Word Defender & Sentence Builder + canvas Phaser + leaderboard |
| 8 | Tiến độ | `/progress` | Biểu đồ 7 ngày, huy hiệu, bảng xếp hạng lớp |
| 9 | Dashboard giáo viên | `/teacher` | Thống kê + ma trận tiến độ học sinh |
| 10 | Giao bài tập | `/teacher/assignments/new` | Form: loại → nội dung → lớp → hạn nộp |
| 11 | Đăng bài học | `/teacher/lessons/new` | Link YouTube + bảng từ vựng động |
| 12 | Chấm bài viết | `/teacher/grading` | Đọc bài, cho điểm (slider) + nhận xét, toast khi chấm xong |

## 🎨 Design System (Light Mode)

- **Font:** Nunito (Google Fonts) — bo tròn, hỗ trợ tiếng Việt tốt.
- **Nền:** trắng kem `#F8FAFC` · **Primary:** xanh dương `#2563EB`
- **Success:** xanh lá `#10B981` · **Accent:** vàng `#FBBF24` · **Danger:** đỏ `#EF4444`
- Bo góc lớn (`rounded-2xl`/`rounded-3xl`), shadow nhẹ, spacing rộng.
- Token định nghĩa trong `src/app/globals.css` qua Tailwind v4 `@theme`.

## 🛠 Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + component kiểu shadcn/ui (tự xây trong `src/components/ui`)
- **Framer Motion** — lật flashcard 3D, confetti, animation
- **Lucide Icons**
- **Phaser 3** — placeholder game 2D (`src/components/game/`)

## 🚀 Chạy dự án

```bash
npm install
npm run dev
# mở http://localhost:3000
```

Build production:

```bash
npm run build
npm run start
```

## 🔁 Mô phỏng route guard (chuyển vai trò)

Ở góc dưới bên phải có nút nổi **"Vai trò"** để chuyển nhanh giữa 3 vai trò (lưu trong `localStorage`):

- **Học sinh** (Minh) → giao diện học sinh: `/dashboard`, `/learn`, `/game`…
- **Giáo viên** (Cô Lan) → `/teacher`, giao bài, đăng bài…
- **Chờ duyệt** (Tuấn) → `/pending`

Cấu hình người dùng mock: `src/lib/auth/role-context.tsx` + `USERS` trong `src/lib/mock/data.ts`.

## 🧩 Component tái sử dụng

`FlashCard`, `StreakBadge`, `XPCounter`, `ProgressBar`, `AssignmentCard`, `VideoTimestampList`, `Confetti`, `Mascot`, `AppShell` (header + sidebar + bottom nav theo vai trò)…

## 📁 Cấu trúc chính

```
src/
├─ app/                    # Các route (màn hình)
│  ├─ dashboard · learn/[id] · flashcards/[deckId] · exercise/[id]
│  ├─ game · progress · pending
│  └─ teacher · teacher/assignments/new · teacher/lessons/new
├─ components/
│  ├─ ui/                  # Button, Card, Badge, Input (kiểu shadcn)
│  ├─ game/                # Phaser placeholder
│  └─ *.tsx                # FlashCard, AppShell, Mascot, Confetti…
└─ lib/
   ├─ mock/data.ts         # Toàn bộ mock data
   ├─ types.ts             # Kiểu dữ liệu chung
   ├─ motion.ts            # Preset animation (đã ép kiểu easing)
   └─ auth/role-context.tsx# Mock auth / route guard
```

## 📝 Ghi chú

- Phát âm flashcard dùng **Web Speech API** (`speechSynthesis`) — chạy trực tiếp trên trình duyệt.
- Tua video ở `/learn/[id]` dùng tham số `start` của YouTube embed (nạp lại iframe) — bản template.

## ⚡ Lớp trạng thái "sống động" (localStorage)

Ngoài mock data tĩnh, app có một lớp trạng thái thật (`src/lib/state/app-context.tsx`) để mọi hoạt động đều phản hồi:

- **XP / cấp độ / streak / từ đã thuộc** lưu vào `localStorage` — header và trang Tiến độ cập nhật theo thời gian thực. Làm bài học, nộp bài tập, ôn flashcard, chơi game đều **cộng XP thật** (chỉ 1 lần/lượt, có chống trùng).
- **Toast thông báo** (`Toaster.tsx`): hiện `+XP` và chúc mừng **lên cấp** ở góc trên phải.
- **Lặp ngắt quãng (SRS)** cho flashcard: mỗi thẻ có "hộp" 0–4; ôn ở `/flashcards` và `/learn` sẽ ghi nhớ trạng thái, thẻ chưa thuộc được **ưu tiên ôn trước**; số "từ cần ôn" trên Dashboard tính từ đây.
- **Chuông thông báo** (`Notifications.tsx`): dropdown có badge chưa đọc + đánh dấu đã đọc.

## 📚 Thư viện bài học

Vào `/learn` để xem danh sách tất cả bài học (mỗi bài: video + flashcard + kiểm tra), kèm tiến độ và nút "Bắt đầu/Học tiếp/Học lại". Thanh điều hướng "Học" trỏ về đây.
- **Sentence Builder:** vùng click giờ dùng một *Rectangle hit target nằm trong container* (bám theo nút khi di chuyển, khít toàn bộ nút), bỏ hiệu ứng hover-scale gây "nhảy" chữ kế bên.
- **Word Defender:** giảm tốc độ rơi + nhịp sinh (giữ tối đa 5 từ trên màn), chống đè chữ bằng chọn tọa độ tránh va chạm, box co dãn vừa khít nội dung.
- **CSDL PostgreSQL đã kết nối thật:** 13 bảng (Drizzle ORM, xem `src/db/schema.ts`), tự seed dữ liệu mẫu (`src/db/queries.ts`), `/learn` đọc bài học từ PostgreSQL và hiển thị badge đếm số liệu trực tiếp.
- **Game Phaser 3 đã nâng cấp thành 2 game chơi được thật:**
  - **Word Defender** (`scenes/WordDefenderScene.ts`) — game gõ từ bắn quái kiểu ZType: gõ chữ cái đầu để khoá mục tiêu, gõ nốt để bắn hạ; có máu, combo, độ khó tăng theo màn, tia laser, phát âm từ khi tiêu diệt.
  - **Sentence Builder** (`scenes/SentenceBuilderScene.ts`) — game xếp câu: nhắp từ để sắp thành câu đúng, đếm giờ 20s/câu, sai hiện đáp án đúng, có điểm thưởng theo tốc độ & combo.
  - Có màn hình bắt đầu (hướng dẫn cách chơi), HUD trong game, màn hình kết quả có confetti, lưu **kỷ lục cá nhân** vào `localStorage`, tự cập nhật **bảng xếp hạng**.
  - Âm thanh tạo bằng Web Audio API (`lib/game/sfx.ts`), nội dung học trong `lib/game/content.ts`.
