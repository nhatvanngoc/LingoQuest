/**
 * LingoQuest — LLM Provider Client
 * Robust, structured JSON generator with retry and timeout.
 */

export interface LLMRequestOptions {
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
  jsonMode?: boolean;
}

export interface LLMResponse<T = any> {
  data: T;
  rawText: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export async function callStructuredLLM<T>(
  options: LLMRequestOptions
): Promise<LLMResponse<T>> {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || "qwen/qwen3.6-27b";

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured in environment variables.");
  }

  const endpoint = "https://api.groq.com/openai/v1/chat/completions";
  const messages = [
    { role: "system", content: options.systemPrompt },
    { role: "user", content: options.userPrompt },
  ];

  const body: any = {
    model,
    messages,
    temperature: options.temperature ?? 0.2,
    max_tokens: options.maxTokens ?? 4000,
  };

  if (options.jsonMode !== false) {
    body.response_format = { type: "json_object" };
  }

  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    attempts++;
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`LLM API returned status ${res.status}: ${errText}`);
      }

      const json = await res.json();
      const rawText = json.choices?.[0]?.message?.content || "";

      // Clean markdown code blocks if returned
      let cleaned = rawText.trim();
      if (cleaned.startsWith("```json")) {
        cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "");
      } else if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "");
      }

      const parsed = JSON.parse(cleaned);

      return {
        data: parsed as T,
        rawText,
        model,
        usage: json.usage
          ? {
              promptTokens: json.usage.prompt_tokens,
              completionTokens: json.usage.completion_tokens,
              totalTokens: json.usage.total_tokens,
            }
          : undefined,
      };
    } catch (err: any) {
      if (attempts >= maxAttempts) {
        throw new Error(`Failed to call structured LLM after ${maxAttempts} attempts: ${err.message}`);
      }
      // Exponential backoff
      await new Promise((r) => setTimeout(r, 1000 * attempts));
    }
  }

  throw new Error("Unexpected LLM client loop termination");
}
