/* ============================================================
   video.ts — Trình phân giải & chuẩn hóa Video Embed (YouTube & Google Drive)
   Tự động phát hiện Google Drive link share và chuyển sang định dạng /preview
   ============================================================ */

export interface VideoInfo {
  type: "youtube" | "drive" | "direct" | "none";
  embedUrl: string;
  originalUrl: string;
  id?: string;
}

/**
 * Trích xuất Google Drive File ID từ các định dạng link chia sẻ:
 * - https://drive.google.com/file/d/{id}/view?usp=sharing
 * - https://drive.google.com/file/d/{id}/view
 * - https://drive.google.com/file/d/{id}/preview
 * - https://drive.google.com/file/d/{id}
 * - https://drive.google.com/open?id={id}
 * - https://drive.google.com/uc?id={id}
 */
export function extractDriveId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Dạng /file/d/{id} hoặc /file/u/0/d/{id}
  const fileMatch = trimmed.match(/drive\.google\.com\/(?:file\/)?(?:u\/\d+\/)?d\/([a-zA-Z0-9_-]+)/i);
  if (fileMatch && fileMatch[1]) {
    return fileMatch[1];
  }

  // Dạng open?id={id} hoặc uc?id={id}
  const paramMatch = trimmed.match(/drive\.google\.com\/(?:open|uc|file)\?(?:[^&]*&)*id=([a-zA-Z0-9_-]+)/i);
  if (paramMatch && paramMatch[1]) {
    return paramMatch[1];
  }

  return null;
}

/**
 * Trích xuất YouTube Video ID (11 ký tự)
 */
export function extractYoutubeId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Đã là ID 11 ký tự
  if (trimmed.length === 11 && !trimmed.includes("/") && !trimmed.includes(".")) {
    return trimmed;
  }

  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = trimmed.match(regExp);
  return match && match[1]?.length === 11 ? match[1] : null;
}

/**
 * Tự động chuẩn hóa link video người dùng dán vào:
 * - Nếu là link Google Drive: tự động chuyển thành link /preview để phát trực tiếp
 * - Nếu là YouTube: giữ nguyên hoặc chuẩn hóa
 */
export function normalizeVideoUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();

  const driveId = extractDriveId(trimmed);
  if (driveId) {
    return `https://drive.google.com/file/d/${driveId}/preview`;
  }

  return trimmed;
}

/**
 * Phân giải link video thành URL nhúng trong <iframe> (hỗ trợ cả YouTube và Google Drive Preview)
 */
export function resolveVideoEmbed(url: string): VideoInfo {
  if (!url) {
    return { type: "none", embedUrl: "", originalUrl: "" };
  }
  const trimmed = url.trim();

  // 1. Google Drive link
  const driveId = extractDriveId(trimmed);
  if (driveId) {
    return {
      type: "drive",
      id: driveId,
      embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
      originalUrl: trimmed,
    };
  }

  // 2. YouTube link
  const ytId = extractYoutubeId(trimmed);
  if (ytId) {
    return {
      type: "youtube",
      id: ytId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytId}`,
      originalUrl: trimmed,
    };
  }

  // 3. Link nhúng trực tiếp khác (https://...)
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return {
      type: "direct",
      embedUrl: trimmed,
      originalUrl: trimmed,
    };
  }

  return { type: "none", embedUrl: "", originalUrl: trimmed };
}
