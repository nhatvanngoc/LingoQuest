# 🎯 Báo cáo Đánh giá UI/UX — LingoQuest

> Ngày: 2026-08-20 · Phương pháp: **Vision QA tự động** — Next.js dev + PostgreSQL (embedded) +
> seed data thật, đăng nhập 2 vai trò (học sinh `minh.nguyen@lingoquest.app`, giáo viên
> `lan.le@lingoquest.app`), chụp ảnh **18 màn hình** (desktop 1440×900 đã cuộn từng viewport +
> mobile 390×844) bằng headless Chromium, đối chiếu mã nguồn để xác định gốc rễ.
>
> Môi trường sandbox **chặn Google Fonts / ảnh ngoài / YouTube** → các chỗ nhận xét liên quan
> ảnh/video ngoài đều đã đối chiếu code để phân biệt "lỗi app" vs "lỗi môi trường".

---

## 🔴 P0 — Lỗi nhìn thấy ngay, ảnh hưởng trải nghiệm thật

### 1. Sidebar giáo viên: 2 mục "active" cùng lúc → chữ "Bảng điều khiển" biến mất
- **Hiện tượng:** Ở `/teacher/lessons/new` và `/teacher/grading`, mục **Bảng điều khiển** hiển thị
  là một viên thuốc trắng, chữ chìm hoàn toàn (chữ trắng trên nền trắng). Ở
  `/teacher/assignments/new`, cả "Bảng điều khiển" LẪN "Giao bài" cùng xanh dương.
- **Gốc rễ:** `src/components/AppShell.tsx:172`
  ```ts
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  ```
  Với item có `href="/teacher"`, mọi route `/teacher/*` đều khớp → 2 item active cùng lúc,
  mà pill nền xanh dùng `layoutId="active-nav-pill"` (chỉ 1 instance được framer-motion
  render vị trí) → item còn lại chỉ có `text-white` không có nền → chữ chìm.
- **Sửa:** item "gốc" của mỗi vai trò (`/teacher`, `/dashboard`) chỉ match tuyệt đối
  (`pathname === item.href`), hoặc cho `active` ưu tiên href dài nhất khớp. Bottom nav (dòng 264)
  cũng cần sửa tương tự.

### 2. Nút nổi "Tài khoản" (RoleSwitcher) đè lên nội dung ở nhiều trang
- **Hiện tượng (đã chụp):**
  - `/teacher/grading`: nút CHE THANH SLIDER chấm điểm (không kéo được vùng bị đè).
  - `/dashboard`: đè phần hint "Nhấn để vào luồng Video → Flashcard…" của thẻ bài học hôm nay.
  - `/learn`, `/teacher/assignments/new`: đè mép card/dropdown.
  - Mobile: đè thumbnail game, đè tiêu đề thẻ bài học ở `/dashboard`.
  - Nút còn hiện ở **cả trang public** (`/`, `/login`, `/pending`) vì mount ở root layout.
- **Gốc rễ:** `src/app/layout.tsx:46` render `<RoleSwitcher />` toàn cục; component
  `fixed bottom-24 right-4 sm:bottom-6 z-50` (`src/components/RoleSwitcher.tsx:27`).
- **Sửa (chọn 1):** (a) chỉ render trong `AppShell` (trang app, không landing/login) + dừng
  ở `NODE_ENV !== "production"` (vì đây là công cụ demo); (b) thêm padding-bottom/safe-area cho
  vùng nội dung có tương tác ở cạnh phải-dưới; (c) trên mobile chuyển vào menu "Hồ sơ".

---

## 🟠 P1 — Trạng thái rỗng / placeholder chưa xử lý

### 3. `/progress`: chuỗi ký tự lạ "#?" và biểu đồ 7 ngày trống trơn
- `src/app/progress/page.tsx:175`:
  ```tsx
  Bạn đang ở vị trí #{leaderboard.findIndex(r => r.me) + 1 || "?" || "?"}
  ```
  Khi học sinh chưa có trong bảng xếp hạng → `findIndex = -1 → +1 = 0` (falsy) → in **"#?"**,
  kèm cú pháp `|| "?" || "?"` trùng lặp (code thừa). Nên hiển thị "Chưa xếp hạng — chơi game
  đầu tiên để lên bảng!".
- Biểu đồ "Hoạt động 7 ngày qua" khi chưa có dữ liệu render MỘT KHỐI TRẮNG lớn (chỉ có nhãn
  T2…CN) — cần empty-state ("Chưa có hoạt động — học bài đầu tiên để bắt đầu streak! 🔥").

### 4. Landing page: nội dung phụ thuộc hoàn toàn vào `whileInView`
- Các section dưới hero (3 thẻ tính năng, section giáo viên…) `initial: opacity 0` + animate
  khi vào viewport. Nếu JS chậm/IntersectionObserver không chạy (in ấn, no-JS, crawler SEO,
  trình đọc màn hình không cuộn) → **trang trắng ở 70% nội dung**. Trang marketing công khai
  không nên để nội dung chính "vô hình mặc định".
- **Sửa:** dùng `motion.div` với `initial={false}` cho SSR-visible mặc định, hoặc thêm
  `@media (prefers-reduced-motion)`/`noscript` fallback hiển thị thẳng.

### 5. "Tip học nhanh" dành cho học sinh hiện ở sidebar GIÁO VIÊN
- `src/components/AppShell.tsx` (~dòng 232–245): card "Tip học nhanh — Hoàn thành nhiệm vụ
  hàng ngày để x2 XP!" render cho mọi vai trò, kể cả giáo viên (4 trang `/teacher/*`).
  Sai ngữ cảnh vai trò — nên ẩn khi `role === "teacher"` hoặc đổi nội dung theo role.

---

## 🟡 P2 — Đánh bóng (polish)

### 6. Phụ thuộc emoji như "hình ảnh chính"
- Dashboard: cụm `🎉` ở `text-5xl` (banner chào mừng), `🎯`/`🎉` trong "Tiến trình hôm nay"
  (`src/app/dashboard/page.tsx:349`), tiêu đề `🎮 Hub Game luyện từ` (`src/app/game/page.tsx:177`),
  thumbnail 2 game là emoji khổng lồ.
- Trên thiết bị thiếu Noto Color Emoji (Linux cũ, một số WebView Android, trình duyệt doanh
  nghiệp) → toàn ô vuông `□` rất xấu. Emoji inline trong câu (👋, 🔥) chấp nhận được; emoji
  kích thước lớn làm "ảnh" thì nên thay bằng Lucide icon/SVG.

### 7. `datetime-local` hiển thị định dạng Mỹ `mm/dd/yyyy`
- `/teacher/assignments/new` — input hạn nộp. Trình duyệt theo UI-locale, nhiều máy VN dùng
  Chrome tiếng Anh → giáo viên VN thấy `mm/dd/yyyy`. Cân nhắc date-picker tự xây (đã có hệ
  component) hoặc chấp nhận + chú thích "ngày/tháng/năm".

### 8. Sao chép dữ liệu mâu thuẫn giữa mock và DB thật
- Form giao bài ghi "Tiếng Anh 8 — 8A2 (**28 học sinh**)" trong khi DB seed chỉ có 1 học sinh
  và dashboard giáo viên báo "trên 1 học sinh". Game hub hiện "Kỷ lục: 1280/840" cho tài khoản
  mới tinh (số mock cứng) — học sinh mới sẽ thấy kỷ lục không phải của mình.

### 9. Header mobile chen chúc
- Ở 390px: cụm `{streak} {XP} {level} {chuông} {avatar}` bị ép — pill level thu nhỏ còn chấm
  tròn. Nên ẩn bớt streak/XP sau menu ⋯ hoặc chỉ giữ avatar + 1 chỉ số.

### 10. Ảnh hỏng "nhấp" alt-text trong tích tắc (FOIC)
- `SmartImage` đã có fallback gradient + icon (tốt), nhưng chuyển trạng thái qua `onError` phía
  client → khi mạng RẤT chậm, alt-text của `<img>` hỏng lóe lên trước khi fallback chạy.
  Có thể ngụy trang sẵn khung ảnh bằng background gradient + img overlay, giảm cảm giác "lỗi".

---

## ✅ Những thứ đang làm TỐT (không cần động)
- Route guard/middleware phân quyền đúng (`/teacher/*` chặn học sinh, `/login` redirect khi
  đã đăng nhập); session ký HMAC thật.
- Trang `/pending`, `/login`, `/flashcards`, `/exercise` sạch, hierarchy rõ, CTA nổi bật.
- `SmartImage` có fallback; flashcard có phím tắt + hint rõ ràng; exercise có tim + progress.
- Mobile: sidebar → bottom nav hợp lý, trang `/exercise`, `/learn` ở mobile dùng tốt.
- `html lang="vi"` đã đúng; copy tone giọng nhất quán, thân thiện.

## 🧪 Hạ tầng QA đã dựng (giữ lại trong repo nếu thấy hữu ích)
| File | Dùng |
|---|---|
| `scripts/dev-seed.ts` | Chạy `npx tsx scripts/dev-seed.ts` để seed DB thủ công (trước đây seed chỉ chạy lưới qua 2 API classroom → đăng nhập lần đầu luôn 401 nếu chưa ai gọi classroom API) |

⚠️ **Lỗ hổng vận hành phát hiện kèm:** tài khoản demo chỉ được seed khi có ai đó (đã đăng nhập)
gọi `/api/classroom/students|leaderboard` → trên CSDL mới tinh, **không ai đăng nhập được**
(gà & trứng). Nên gọi `seedIfEmpty()` khi khởi động server (hoặc trong `/api/health`).
