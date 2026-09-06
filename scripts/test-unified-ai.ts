import "dotenv/config";

async function test() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("No GROQ_API_KEY");
    return;
  }

  const prompt = `Bạn là chuyên gia giáo dục tiếng Anh lớp 10-12 (CEFR A2-B1).
Tạo 1 bài tập hoàn chỉnh cho chủ đề: "Simple Past Tense - Weekend Activities".
Yêu cầu trả về DUY NHẤT 1 đối tượng JSON theo định dạng sau (không thêm bất kỳ ký tự nào ngoài JSON):
{
  "title": "Tiêu đề tiếng Việt",
  "description": "Mô tả ngắn gọn tiếng Việt",
  "suggestedVideoQuery": "simple past tense english lesson",
  "vocabulary": [
    {
      "word": "explore",
      "phonetic": "/ɪkˈsplɔːr/",
      "meaning": "khám phá",
      "example": "We explored the ancient town last Sunday.",
      "exampleVi": "Chúng tôi đã khám phá phố cổ Chủ nhật trước."
    }
  ],
  "quizQuestions": [
    {
      "question": "Where _______ you go last weekend?",
      "options": ["A. do", "B. did", "C. are", "D. were"],
      "answer": "B",
      "explanation": "Câu hỏi thì quá khứ đơn với động từ thường mượn trợ động từ did."
    }
  ],
  "fillQuestions": [
    {
      "sentence": "She _______ (visit) her grandparents two days ago.",
      "answer": "visited",
      "hint": "Quá khứ của visit",
      "explanation": "Động từ theo sau là hai ngày trước (two days ago) chia quá khứ đơn."
    }
  ],
  "writingPrompt": {
    "prompt": "Viết một đoạn văn ngắn (80-100 từ) kể về một hoạt động cuối tuần em yêu thích nhất.",
    "minWords": 80,
    "outline": ["Giới thiệu thời gian & địa điểm", "Các hoạt động chính đã làm", "Cảm nghĩ của em"]
  }
}
Tạo 6 từ vựng, 3 câu trắc nghiệm, 3 câu điền từ, 1 đề bài tự luận.`;

  console.log("Calling Groq API...");
  const t0 = Date.now();
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL || "qwen/qwen3.6-27b",
      temperature: 0.4,
      max_tokens: 1200,
      reasoning_effort: "none",
      response_format: { type: "json_object" },
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const duration = Date.now() - t0;
  console.log("Status:", res.status, `Time: ${duration}ms`);
  const data = await res.json();
  if (!res.ok) {
    console.error("Error payload:", JSON.stringify(data, null, 2));
    return;
  }
  const content = data.choices?.[0]?.message?.content;
  console.log("Output preview (first 400 chars):", content?.slice(0, 400));
  try {
    const parsed = JSON.parse(content);
    console.log("PARSED SUCCESS!");
    console.log("Title:", parsed.title);
    console.log("Vocab count:", parsed.vocabulary?.length);
    console.log("Quiz count:", parsed.quizQuestions?.length);
    console.log("Fill count:", parsed.fillQuestions?.length);
    console.log("Writing prompt:", parsed.writingPrompt?.prompt);
  } catch (e) {
    console.error("JSON parse failed:", e);
  }
}

test().catch(console.error);
