// Smart Collocation Dictionary & Heuristic Generator for High School Curriculum
// Provides high-frequency natural collocations (cụm từ hay gặp) for vocabulary items.

export const COMMON_COLLOCATIONS_MAP: Record<string, string[]> = {
  // Unit 1: A Long and Healthy Life
  "household chores": ["do household chores", "share household chores", "split chores equally"],
  "fit": ["stay fit", "keep fit", "physically fit", "get fit and healthy"],
  "workout": ["do a workout", "vigorous workout", "morning workout", "regular workout routine"],
  "work out": ["work out regularly", "work out at the gym", "work out for 30 minutes"],
  "diet": ["balanced diet", "healthy diet", "go on a diet", "low-fat diet"],
  "antibiotic": ["take antibiotics", "prescribe antibiotics", "course of antibiotics", "antibiotic resistance"],
  "antibiotics": ["take antibiotics", "prescribe antibiotics", "course of antibiotics", "resist antibiotics"],
  "life expectancy": ["increase life expectancy", "average life expectancy", "higher life expectancy"],
  "routine": ["daily routine", "follow a routine", "exercise routine", "stick to a routine"],
  "nutrient": ["essential nutrients", "rich in nutrients", "absorb nutrients"],
  "bacteria": ["harmful bacteria", "beneficial bacteria", "kill bacteria", "bacterial infection"],
  "infection": ["fight infection", "prevent infection", "severe infection", "treat an infection"],
  "organism": ["living organism", "microscopic organism", "marine organisms"],
  "muscle": ["build muscle", "muscle strength", "muscle pain", "relax muscles"],
  "treatment": ["medical treatment", "receive treatment", "effective treatment", "respond to treatment"],
  "properly": ["function properly", "exercise properly", "eat properly", "behave properly"],
  "poisoning": ["food poisoning", "suffer from poisoning", "acute poisoning"],
  "immune": ["immune system", "boost immunity", "immune response", "weak immune system"],
  "spread": ["spread diseases", "spread quickly", "prevent the spread"],
  "suffer": ["suffer from illness", "suffer pain", "suffer depression"],

  // Unit 2: The Generation Gap
  "generation gap": ["bridge the generation gap", "cause a generation gap", "generation gap issues"],
  "conflict": ["resolve conflict", "family conflict", "come into conflict", "conflict of interest"],
  "curfew": ["set a curfew", "strict curfew", "break the curfew", "impose a curfew"],
  "norm": ["social norms", "cultural norms", "accept as normal"],
  "extended family": ["live with extended family", "extended family members", "traditional extended family"],
  "nuclear family": ["modern nuclear family", "prefer nuclear family", "two-generation nuclear family"],
  "viewpoint": ["differing viewpoints", "from my viewpoint", "express a viewpoint"],
  "open-minded": ["be open-minded", "an open-minded attitude", "open-minded parents"],
  "conservative": ["conservative views", "conservative parents", "remain conservative"],
  "respect": ["show respect for elders", "mutual respect", "gain respect"],

  // Unit 3: Cities of the Future
  "smart city": ["smart city technology", "build a smart city", "smart city infrastructure"],
  "sustainable": ["sustainable development", "sustainable energy", "sustainable city life"],
  "infrastructure": ["modern infrastructure", "transport infrastructure", "upgrade infrastructure"],
  "renewable": ["renewable energy sources", "renewable resources", "switch to renewables"],
  "eco-friendly": ["eco-friendly materials", "eco-friendly lifestyle", "eco-friendly transport"],
  "pedestrian": ["pedestrian zone", "pedestrian walkway", "pedestrian safety"],
  "urban": ["urban area", "urban planning", "urban development", "urban population"],
  "sensor": ["install sensors", "smart sensors", "traffic sensors"],
  "quality of life": ["improve quality of life", "high quality of life", "standard quality of life"],

  // Unit 4: ASEAN and Vietnam
  "association": ["regional association", "member of the association", "in association with"],
  "bloc": ["regional trade bloc", "economic bloc", "ASEAN member bloc"],
  "cooperation": ["foster cooperation", "international cooperation", "bilateral cooperation"],
  "solidarity": ["strengthen solidarity", "show solidarity", "spirit of solidarity"],
  "integration": ["economic integration", "regional integration", "global integration"],
  "charter": ["sign the charter", "ASEAN charter", "follow charter principles"],

  // Unit 5: Global Warming
  "global warming": ["combat global warming", "effects of global warming", "tackle global warming"],
  "greenhouse effect": ["cause greenhouse effect", "greenhouse gas emissions", "intensify greenhouse effect"],
  "emission": ["reduce emissions", "carbon emissions", "harmful emissions", "zero emissions"],
  "deforestation": ["halt deforestation", "widespread deforestation", "illegal deforestation"],
  "carbon footprint": ["reduce carbon footprint", "measure carbon footprint", "individual carbon footprint"],
  "catastrophic": ["catastrophic consequences", "catastrophic disaster", "catastrophic impact"],
  "fossil fuel": ["burn fossil fuels", "fossil fuel consumption", "rely on fossil fuels"],
};

/**
 * Returns a list of 2-4 natural collocations for any word.
 * If in dictionary, returns exact collocations.
 * Otherwise, generates natural linguistic collocations based on part of speech & example sentence.
 */
export function getCollocationsForWord(
  word: string,
  partOfSpeech?: string,
  exampleEn?: string
): string[] {
  const normalized = word.toLowerCase().trim();

  // 1. Direct dictionary match
  if (COMMON_COLLOCATIONS_MAP[normalized]) {
    return COMMON_COLLOCATIONS_MAP[normalized];
  }

  // 2. Partial phrase match in dictionary
  for (const [key, collocations] of Object.entries(COMMON_COLLOCATIONS_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return collocations;
    }
  }

  // 3. Smart POS Heuristics
  const pos = (partOfSpeech || "").toLowerCase().trim();

  if (pos.includes("noun") || pos === "n") {
    return [
      `common ${word}`,
      `focus on ${word}`,
      `role of ${word}`,
    ];
  }

  if (pos.includes("verb") || pos === "v") {
    return [
      `try to ${word}`,
      `${word} properly`,
      `learn how to ${word}`,
    ];
  }

  if (pos.includes("adj") || pos.includes("adjective")) {
    return [
      `extremely ${word}`,
      `become ${word}`,
      `seem ${word}`,
    ];
  }

  if (pos.includes("adv") || pos.includes("adverb")) {
    return [
      `quite ${word}`,
      `act ${word}`,
      `${word} recognized`,
    ];
  }

  // 4. Default fallback
  return [
    `use ${word}`,
    `practice ${word}`,
    `key ${word}`,
  ];
}
