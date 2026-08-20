# 🗄️ Hướng dẫn Database — LingoQuest

Tài liệu này giúp bạn **tạo và quản lý cơ sở dữ liệu PostgreSQL** cho LingoQuest từ con số 0.
Có 2 cách: chạy nhanh bằng Drizzle (khuyến nghị) hoặc chạy SQL tay.

- **ORM:** Drizzle ORM (`src/db/schema.ts`)
- **CSDL:** PostgreSQL 14+
- **Chuỗi kết nối:** đọc từ biến môi trường `DATABASE_URL`

---

## 1. Yêu cầu & cấu hình

Cài PostgreSQL, tạo một database tên `app_db`:

```bash
psql -U postgres -c "CREATE DATABASE app_db;"
```

Tạo file `.env` ở thư mục gốc:

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
```

> Nếu user/mật khẩu/host khác, sửa lại cho đúng.

Cài dependency (đã có sẵn trong template):

```bash
npm install
```

---

## 2. Cách 1 — Tạo bảng bằng Drizzle (KHUYẾN NGHỊ, nhanh nhất)

Schema được định nghĩa trong `src/db/schema.ts`. Chạy lệnh sau để **đẩy schema** lên CSDL:

```bash
npx drizzle-kit push --force
```

Khi bạn **sửa `schema.ts`** (thêm cột/bảng), chỉ cần chạy lại lệnh trên — Drizzle sẽ đồng bộ.

Mở Drizzle Studio để xem/sửa dữ liệu bằng giao diện:

```bash
npx drizzle-kit studio
```

---

## 3. Cách 2 — Chạy SQL tay

Nếu không dùng Drizzle, copy toàn bộ SQL dưới đây chạy trong `psql` (hoặc pgAdmin / DBeaver).

```sql
-- ============ KIỂU ENUM ============
CREATE TYPE role            AS ENUM ('student', 'teacher', 'pending');
CREATE TYPE assignment_type AS ENUM ('exercise', 'deck');
CREATE TYPE matrix_status   AS ENUM ('none', 'doing', 'submitted', 'graded');

-- ============ NGƯỜI DÙNG & LỚP ============
CREATE TABLE users (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         varchar(120) NOT NULL,
  email        varchar(200) NOT NULL UNIQUE,
  role         role NOT NULL DEFAULT 'pending',
  avatar_color varchar(9)   NOT NULL DEFAULT '#2563EB',
  created_at   timestamptz  NOT NULL DEFAULT now()
);

CREATE TABLE classes (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       varchar(160) NOT NULL,
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE class_members (
  class_id uuid NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  user_id  uuid NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
  PRIMARY KEY (class_id, user_id)
);

-- ============ BÀI HỌC & TỪ VỰNG ============
CREATE TABLE lessons (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           varchar(80)  NOT NULL UNIQUE,   -- ánh xạ route /learn/[slug]
  title          varchar(200) NOT NULL,
  title_vi       varchar(200),
  description    text NOT NULL DEFAULT '',
  youtube_id     varchar(20)  NOT NULL,
  thumbnail      text NOT NULL DEFAULT '',
  duration_label varchar(30)  NOT NULL DEFAULT '',
  created_by     uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE vocab (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id  uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  word       varchar(80)  NOT NULL,
  phonetic   varchar(80)  NOT NULL DEFAULT '',
  meaning    varchar(160) NOT NULL DEFAULT '',
  example    text NOT NULL DEFAULT '',
  example_vi text NOT NULL DEFAULT '',
  start      integer NOT NULL DEFAULT 0,        -- giây trong video
  "order"    integer NOT NULL DEFAULT 0
);

-- ============ FLASHCARD ============
CREATE TABLE decks (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug       varchar(80)  NOT NULL UNIQUE,       -- /flashcards/[slug]
  title      varchar(160) NOT NULL,
  lesson_id  uuid REFERENCES lessons(id) ON DELETE SET NULL,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE cards (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  deck_id    uuid NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
  front      varchar(80)  NOT NULL,
  phonetic   varchar(80)  NOT NULL DEFAULT '',
  back       varchar(160) NOT NULL DEFAULT '',
  example    text NOT NULL DEFAULT '',
  example_vi text NOT NULL DEFAULT '',
  "order"    integer NOT NULL DEFAULT 0
);

-- ============ BÀI TẬP & LƯỢT LÀM ============
CREATE TABLE assignments (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title      varchar(200) NOT NULL,
  type       assignment_type NOT NULL DEFAULT 'exercise',
  lesson_id  uuid REFERENCES lessons(id) ON DELETE SET NULL,
  deck_id    uuid REFERENCES decks(id)   ON DELETE SET NULL,
  class_id   uuid REFERENCES classes(id) ON DELETE CASCADE,
  due_at     timestamptz,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE lesson_progress (
  user_id   uuid NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
  lesson_id uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  percent   integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);

CREATE TABLE attempts (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES users(id)         ON DELETE CASCADE,
  assignment_id uuid REFERENCES assignments(id)            ON DELETE CASCADE,
  status        matrix_status NOT NULL DEFAULT 'none',      -- cho ma trận giáo viên
  score         integer NOT NULL DEFAULT 0,
  total         integer NOT NULL DEFAULT 0,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- ============ LẶP NGẮT QUÃNG (SRS) & THỐNG KÊ ============
CREATE TABLE srs (
  user_id   uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  card_key  varchar(120) NOT NULL,              -- "deckId:cardId"
  box       integer NOT NULL DEFAULT 0,         -- 0..4, càng cao càng thuộc
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, card_key)
);

CREATE TABLE user_stats (
  user_id       uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  xp            integer NOT NULL DEFAULT 0,
  streak        integer NOT NULL DEFAULT 0,
  words_learned integer NOT NULL DEFAULT 0,
  level         integer NOT NULL DEFAULT 1,
  updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE daily_activity (
  id      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day     varchar(10) NOT NULL,                -- 'YYYY-MM-DD'
  minutes integer NOT NULL DEFAULT 0,
  xp      integer NOT NULL DEFAULT 0
);
```

---

## 4. Seed dữ liệu mẫu

App tự seed khi truy cập trang `/learn` (xem `src/db/queries.ts → seedIfEmpty()`).
Nếu muốn seed bằng tay:

```sql
-- Giáo viên
INSERT INTO users (name, email, role, avatar_color)
VALUES ('Cô Lê Thị Lan', 'lan.le@lingoquest.app', 'teacher', '#10B981');

-- Lớp học (lấy id giáo viên vừa tạo thay <TEACHER_ID>)
INSERT INTO classes (name, teacher_id)
VALUES ('Tiếng Anh 8 — 8A2', '<TEACHER_ID>');

-- Một bài học
INSERT INTO lessons (slug, title, title_vi, description, youtube_id, thumbnail, duration_label)
VALUES (
  'lesson-1',
  'Talking About Your Weekend',
  'Kể về cuối tuần của bạn',
  'Học miêu tả hoạt động cuối tuần bằng thì quá khứ đơn.',
  'WUfv5FD-x2g',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  '8 phút'
);

-- Từ vựng cho bài học (thay <LESSON_ID>)
INSERT INTO vocab (lesson_id, word, phonetic, meaning, example, example_vi, start, "order") VALUES
  ('<LESSON_ID>', 'relaxing', '/rɪˈlæksɪŋ/', 'thư giãn',  'I had a relaxing weekend.', 'Tôi đã có một cuối tuần thư giãn.', 18, 0),
  ('<LESSON_ID>', 'hang out', '/hæŋ aʊt/',  'đi chơi',    'We hung out at the mall.',   'Chúng tôi đi chơi ở trung tâm.',       52, 1);
```

---

## 5. Quản lý người dùng (thêm/phê duyệt)

Người dùng đăng nhập Google nhưng **chưa có trong danh sách** sẽ có `role = 'pending'`
và thấy trang `/pending`. Để phê duyệt một học sinh vào lớp:

```sql
-- 1. Tạo/duyệt tài khoản học sinh (nếu đăng nhập tự tạo thì chỉ cần cập nhật role)
UPDATE users SET role = 'student'
WHERE email = 'minh.nguyen@lingoquest.app';

-- 2. Thêm vào lớp (lấy <CLASS_ID> và <USER_ID> tương ứng)
INSERT INTO class_members (class_id, user_id)
VALUES ('<CLASS_ID>', '<USER_ID>');
```

Thêm giáo viên mới:

```sql
INSERT INTO users (name, email, role, avatar_color)
VALUES ('Thầy Trần B', 'b.tran@lingoquest.app', 'teacher', '#2563EB');
```

---

## 6. Truy vấn mẫu

```sql
-- Tổng XP / cấp độ / streak của một học sinh
SELECT xp, level, streak, words_learned FROM user_stats WHERE user_id = '<USER_ID>';

-- Số từ cần ôn (SRS box < 3) của học sinh
SELECT card_key, box FROM srs WHERE user_id = '<USER_ID>' AND box < 3;

-- Ma trận tiến độ cho giáo viên: trạng thái bài tập theo học sinh
SELECT u.name, a.title, COALESCE(at.status, 'none') AS trang_thai
FROM class_members cm
JOIN users u        ON u.id = cm.user_id
JOIN assignments a  ON a.class_id = cm.class_id
LEFT JOIN attempts at ON at.assignment_id = a.id AND at.user_id = u.id
WHERE cm.class_id = '<CLASS_ID>'
ORDER BY u.name, a.created_at;

-- Bảng xếp hạng lớp theo XP
SELECT u.name, s.xp
FROM class_members cm
JOIN users u        ON u.id = cm.user_id
JOIN user_stats s   ON s.user_id = u.id
WHERE cm.class_id = '<CLASS_ID>'
ORDER BY s.xp DESC;

-- Bài học kèm số từ vựng
SELECT l.slug, l.title, COUNT(v.id) AS so_tu
FROM lessons l LEFT JOIN vocab v ON v.lesson_id = l.id
GROUP BY l.slug, l.title
ORDER BY l.created_at;
```

---

## 7. Sơ đồ quan hệ (rút gọn)

```
users 1───* classes (teacher_id)
users *───* class_members *───* classes

classes 1───* assignments
lessons 1───* vocab
lessons 1───* decks 1───* cards

users 1───* lesson_progress *───1 lessons
users 1───* attempts *───1 assignments
users 1───* srs           (card_key = deckId:cardId)
users 1───1 user_stats
users 1───* daily_activity
```

---

## 8. Reset / xóa dữ liệu

```bash
# Xóa toàn bộ bảng rồi tạo lại (cẩn thận — mất hết dữ liệu!)
psql "$DATABASE_URL" -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
npx drizzle-kit push --force
```

Xóa state ở trình duyệt (XP/streak/SRS lưu local): mở DevTools → Application → Local Storage →
xoá các khoá `lingoquest:app`, `lingoquest:app-ver`, `lingoquest:best`, `lingoquest:role`.

---

## Ghi chú

- Mọi định nghĩa bảng nằm ở **`src/db/schema.ts`** — đây là nguồn sự thật, sửa ở đây rồi `push`.
- Truy vấn app dùng `src/db/queries.ts` (ví dụ `getLessonsWithVocab()`, `seedIfEmpty()`).
- Trang `/learn` là ví dụ server-component đọc trực tiếp từ PostgreSQL.
