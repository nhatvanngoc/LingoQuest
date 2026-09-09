"use client";

import { useState, useEffect, useCallback } from "react";

export type VocabStatus = "unseen" | "learning" | "mastered";

export interface VocabProgressRecord {
  status: VocabStatus;
  lastReviewed: number; // timestamp
  reviewCount: number;
  listenCount: number;
  speechScore?: number;
}

const STORAGE_KEY_PREFIX = "lingoquest_vocab_progress";
const EVENT_NAME = "lingoquest_vocab_updated";

function getStorageKey(userId?: string): string {
  return `${STORAGE_KEY_PREFIX}_${userId || "local"}`;
}

export function loadAllVocabProgress(userId?: string): Record<string, VocabProgressRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(getStorageKey(userId));
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error("Failed to load vocab progress", err);
    return {};
  }
}

export function saveAllVocabProgress(data: Record<string, VocabProgressRecord>, userId?: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (err) {
    console.error("Failed to save vocab progress", err);
  }
}

export function markWordStatus(
  wordId: string,
  status: VocabStatus,
  options?: { speechScore?: number; incrementListen?: boolean; userId?: string }
) {
  const current = loadAllVocabProgress(options?.userId);
  const existing = current[wordId] || {
    status: "unseen",
    lastReviewed: Date.now(),
    reviewCount: 0,
    listenCount: 0,
  };

  const updated: VocabProgressRecord = {
    ...existing,
    status,
    lastReviewed: Date.now(),
    reviewCount: existing.reviewCount + 1,
    listenCount: options?.incrementListen ? existing.listenCount + 1 : existing.listenCount,
    speechScore: options?.speechScore !== undefined ? options.speechScore : existing.speechScore,
  };

  current[wordId] = updated;
  saveAllVocabProgress(current, options?.userId);
  return updated;
}

export function getUnitVocabStats(wordIds: string[], userId?: string) {
  const all = loadAllVocabProgress(userId);
  let mastered = 0;
  let learning = 0;
  const total = wordIds.length;

  for (const id of wordIds) {
    const rec = all[id];
    if (rec?.status === "mastered") {
      mastered++;
    } else if (rec?.status === "learning") {
      learning++;
    }
  }

  const percent = total > 0 ? Math.round((mastered / total) * 100) : 0;
  return {
    mastered,
    learning,
    total,
    percent,
  };
}

export function useVocabProgress(wordIds: string[] = [], userId?: string) {
  const [records, setRecords] = useState<Record<string, VocabProgressRecord>>({});

  const refresh = useCallback(() => {
    setRecords(loadAllVocabProgress(userId));
  }, [userId]);

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, [refresh]);

  const stats = getUnitVocabStats(wordIds, userId);

  const updateWord = (wordId: string, status: VocabStatus, options?: { speechScore?: number; incrementListen?: boolean }) => {
    return markWordStatus(wordId, status, { ...options, userId });
  };

  return {
    records,
    stats,
    updateWord,
    refresh,
  };
}
