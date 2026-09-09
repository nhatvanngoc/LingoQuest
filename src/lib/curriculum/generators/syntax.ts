import { callStructuredLLM } from "../llm";
import type { SyntaxChunk, GrammarProfile, CefrLevel } from "../types";

const SYNTAX_SYSTEM_PROMPT = `You are LingoQuest Syntax & Sentence Scrambler.
Your task is to generate 3 to 4 scrambled sentence puzzles that drill the target grammar structures for Vietnamese high schoolers.

RULES:
1. Each item targets a specific grammar structure (e.g. passive voice, conditional, relative clause, gerund/infinitive).
2. "chunks": Array of 4 to 8 scrambled segments that form the canonical answer.
3. "answer": The complete canonical sentence.
4. "acceptableAnswers": Array of other grammatically correct alternative word orders (if any).
5. "explanationVi": Clear grammatical explanation in Vietnamese highlighting the rule.
6. Return valid JSON:
{
  "syntaxChunks": [
    {
      "id": "syn-1",
      "level": "B1",
      "grammarTargetId": "g-1",
      "chunks": ["Reusable bags", "are being used", "by many students", "in our high school"],
      "answer": "Reusable bags are being used by many students in our high school.",
      "explanationVi": "Cấu trúc bị động thì hiện tại tiếp diễn: S + am/is/are + being + V3/ed + (by O).",
      "acceptableAnswers": [
        "In our high school, reusable bags are being used by many students."
      ]
    }
  ]
}`;

export async function generateSyntaxChunks(params: {
  grammarProfiles: GrammarProfile[];
  topicTitle: string;
}): Promise<SyntaxChunk[]> {
  const grammarPayload = params.grammarProfiles.map((g, idx) => ({
    id: g.id || `g-${idx + 1}`,
    label: g.label,
    canonicalForm: g.canonicalForm,
    level: g.cefrLevel,
  }));

  const userPrompt = JSON.stringify({
    topicTitle: params.topicTitle,
    grammarTargets: grammarPayload,
  });

  const response = await callStructuredLLM<{ syntaxChunks: SyntaxChunk[] }>({
    systemPrompt: SYNTAX_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.25,
  });

  return (response.data.syntaxChunks || []).map((sc, idx) => ({
    ...sc,
    id: `syn-${idx + 1}`,
  }));
}
