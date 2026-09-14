import fs from "fs";
import path from "path";
import { marked } from "marked";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
});

const mdPath = path.join(rootDir, "CO_SO_LY_THUYET.md");
const mdContent = fs.readFileSync(mdPath, "utf-8");

// Parse markdown to HTML
let bodyHtml = marked.parse(mdContent);

// Add smart page breaks for major chapters
bodyHtml = bodyHtml.replace(/<h2 id="([1-8]-[a-z0-9-]+)">/g, '<div class="page-break"></div><h2 id="$1">');
bodyHtml = bodyHtml.replace(/<h2>([1-8]\.\s+[^<]+)<\/h2>/g, '<div class="page-break"></div><h2>$1</h2>');

// Build academic HTML template
const fullHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>LingoQuest - Báo Cáo Cơ Sở Lý Thuyết & Kiến Trúc Kỹ Thuật</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 20mm 15mm 20mm 15mm;
      @bottom-center {
        content: counter(page);
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 9pt;
        color: #64748B;
      }
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10.5pt;
      line-height: 1.65;
      color: #1E293B;
      background-color: #FFFFFF;
      margin: 0;
      padding: 0;
    }

    /* COVER PAGE */
    .cover-page {
      height: 250mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px double #0D9488;
      padding: 25mm 20mm;
      text-align: center;
      background: linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 35%, #F8FAFC 100%);
      page-break-after: always;
    }

    .cover-top {
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
    .cover-org {
      font-size: 13pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 4px;
    }
    .cover-sub-org {
      font-size: 10pt;
      font-weight: 600;
      color: #0D9488;
      border-bottom: 2px solid #0D9488;
      display: inline-block;
      padding-bottom: 6px;
      margin-bottom: 20px;
    }

    .cover-badge {
      display: inline-block;
      background: #CCFBF1;
      color: #0F766E;
      font-weight: 700;
      font-size: 9pt;
      padding: 5px 14px;
      border-radius: 9999px;
      margin-bottom: 25px;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 1px solid #99F6E4;
    }

    .cover-center {
      margin: auto 0;
    }
    .cover-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 26pt;
      font-weight: 800;
      color: #0F172A;
      line-height: 1.25;
      margin: 0 0 16px 0;
    }
    .cover-title span {
      color: #0D9488;
    }
    .cover-subtitle {
      font-size: 12pt;
      font-weight: 600;
      color: #475569;
      line-height: 1.5;
      max-width: 90%;
      margin: 0 auto;
    }

    .cover-meta {
      text-align: left;
      margin: 0 auto;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 16px 24px;
      width: 85%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    .cover-meta-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
      font-size: 10pt;
    }
    .cover-meta-row:last-child {
      margin-bottom: 0;
    }
    .cover-meta-label {
      font-weight: 700;
      color: #475569;
    }
    .cover-meta-val {
      font-weight: 600;
      color: #0F172A;
    }

    .cover-bottom {
      font-size: 10pt;
      font-weight: 600;
      color: #64748B;
      letter-spacing: 0.5px;
    }

    /* DOCUMENT HEADINGS */
    h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 18pt;
      font-weight: 800;
      color: #0F172A;
      border-bottom: 2px solid #0D9488;
      padding-bottom: 8px;
      margin-top: 24pt;
      margin-bottom: 12pt;
      page-break-after: avoid;
    }

    h2 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 14pt;
      font-weight: 800;
      color: #0F766E;
      margin-top: 20pt;
      margin-bottom: 10pt;
      border-left: 4px solid #0D9488;
      padding-left: 10px;
      page-break-after: avoid;
    }

    h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 12pt;
      font-weight: 700;
      color: #1E293B;
      margin-top: 14pt;
      margin-bottom: 6pt;
      page-break-after: avoid;
    }

    h4 {
      font-size: 11pt;
      font-weight: 700;
      color: #334155;
      margin-top: 10pt;
      margin-bottom: 4pt;
    }

    p {
      margin-top: 0;
      margin-bottom: 8pt;
      text-align: justify;
    }

    ul, ol {
      margin-top: 0;
      margin-bottom: 10pt;
      padding-left: 20px;
    }

    li {
      margin-bottom: 4pt;
    }

    strong {
      color: #0F172A;
    }

    /* TABLES */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 14pt 0;
      font-size: 9.5pt;
      page-break-inside: avoid;
    }

    th {
      background-color: #F1F5F9;
      color: #0F172A;
      font-weight: 700;
      text-align: left;
      padding: 8px 10px;
      border: 1px solid #CBD5E1;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    td {
      padding: 7px 10px;
      border: 1px solid #E2E8F0;
      vertical-align: top;
    }

    tr:nth-child(even) td {
      background-color: #F8FAFC;
    }

    /* CODE BLOCKS & ASCII ART */
    pre {
      background-color: #0F172A;
      color: #E2E8F0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      line-height: 1.45;
      padding: 12px 14px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 12pt 0;
      border: 1px solid #334155;
      page-break-inside: avoid;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      background-color: #F1F5F9;
      color: #0F766E;
      padding: 2px 5px;
      border-radius: 4px;
      border: 1px solid #E2E8F0;
    }

    pre code {
      background-color: transparent;
      color: inherit;
      padding: 0;
      border: none;
    }

    /* BLOCKQUOTES / CALLOUTS */
    blockquote {
      border-left: 4px solid #0D9488;
      background-color: #F0FDFA;
      margin: 12pt 0;
      padding: 10pt 14pt;
      border-radius: 0 8px 8px 0;
      color: #134E4A;
      font-style: normal;
      page-break-inside: avoid;
    }

    blockquote p:last-child {
      margin-bottom: 0;
    }

    /* HORIZONTAL RULE */
    hr {
      border: none;
      height: 1px;
      background-color: #E2E8F0;
      margin: 18pt 0;
    }

    .page-break {
      page-break-before: always;
    }

    /* FOOTER AND RUNNING ELEMENTS */
    .running-header {
      font-size: 8pt;
      color: #94A3B8;
      border-bottom: 1px solid #E2E8F0;
      padding-bottom: 4px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
    }
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover-page">
    <div class="cover-top">
      <div class="cover-org">BỘ GIÁO DỤC VÀ ĐÀO TẠO • CHƯƠNG TRÌNH GDPT 2018</div>
      <div class="cover-sub-org">DỰ ÁN NGHIÊN CỨU & PHÁT TRIỂN CÔNG NGHỆ GIÁO DỤC (EDTECH THPT)</div>
      <div><span class="cover-badge">Báo Cáo Nghiên Cứu & Kiến Trúc Hệ Thống</span></div>
    </div>

    <div class="cover-center">
      <h1 class="cover-title">LINGO<span>QUEST</span></h1>
      <div class="cover-subtitle">
        Cơ Sở Lý Thuyết, Mô Hình Sư Phạm & Kiến Trúc Kỹ Thuật Nền Tảng Học Tập & Khảo Thí Tiếng Anh THPT Tương Tác Thích Ứng
      </div>
    </div>

    <div>
      <div class="cover-meta">
        <div class="cover-meta-row">
          <span class="cover-meta-label">Hệ thống:</span>
          <span class="cover-meta-val">LingoQuest EdTech Multimodal Web Platform</span>
        </div>
        <div class="cover-meta-row">
          <span class="cover-meta-label">Khung chuẩn:</span>
          <span class="cover-meta-val">GDPT 2018 môn Tiếng Anh • CEFR B1 - B2 • Global Success</span>
        </div>
        <div class="cover-meta-row">
          <span class="cover-meta-label">Kiến trúc:</span>
          <span class="cover-meta-val">Next.js 16 • React 19 • Web Speech API • Spaced Repetition (SRS)</span>
        </div>
        <div class="cover-meta-row">
          <span class="cover-meta-label">Phiên bản:</span>
          <span class="cover-meta-val">Release 2.0 (Toàn diện Khảo thí & Học liệu 11 Units)</span>
        </div>
      </div>
    </div>

    <div class="cover-bottom">
      VIỆT NAM — NĂM 2026
    </div>
  </div>

  <!-- MAIN BODY CONTENT -->
  <div class="content-container">
    ${bodyHtml}
  </div>

</body>
</html>
`;

// Write compiled HTML
const outputHtmlPath = path.join(rootDir, "docs", "CO_SO_LY_THUYET_LINGOQUEST.html");
fs.writeFileSync(outputHtmlPath, fullHtml, "utf-8");
console.log("✓ HTML compiled:", outputHtmlPath);

// Output PDF paths
const outputPdfPathRoot = path.join(rootDir, "CO_SO_LY_THUYET_LINGOQUEST.pdf");
const outputPdfPathDocs = path.join(rootDir, "docs", "CO_SO_LY_THUYET_LINGOQUEST.pdf");

import { execFileSync } from "child_process";

// Use Microsoft Edge headless to render PDF
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

console.log("Generating publication-grade PDF via Microsoft Edge headless...");

try {
  execFileSync(
    edgePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=3000",
      `--print-to-pdf=${outputPdfPathRoot}`,
      outputHtmlPath,
    ],
    { stdio: "inherit" }
  );
} catch (e) {
  console.error("Edge process finished or threw:", e.message);
}

if (fs.existsSync(outputPdfPathRoot)) {
  // Copy to docs folder as well
  fs.copyFileSync(outputPdfPathRoot, outputPdfPathDocs);
  const stats = fs.statSync(outputPdfPathRoot);
  console.log(`✅ SUCCESS! PDF generated successfully:`);
  console.log(`   - Root: ${outputPdfPathRoot} (${(stats.size / 1024).toFixed(1)} KB)`);
  console.log(`   - Docs: ${outputPdfPathDocs}`);
} else {
  console.error("❌ PDF generation failed: output file not found.");
  process.exit(1);
}
