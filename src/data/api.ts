import { Killer, ScoreResponse } from "../types";
import { MOCK_KILLERS } from "./mockKillers";

const RAW_API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || "/api";
const API_BASE_URL = RAW_API_BASE_URL.trim().replace(/\/$/, "");

export async function fetchKillers(): Promise<Killer[]> {
  if (!API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return MOCK_KILLERS;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/killers`);
    if (!res.ok) {
      throw new Error(`Failed to fetch killers: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Error fetching killers, falling back to local archive data", error);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return MOCK_KILLERS;
  }
}

export async function fetchKillerById(killerId: string): Promise<Killer> {
  if (!API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const matched = MOCK_KILLERS.find((k) => k.id === killerId);
    if (!matched) throw new Error(`Killer with ID "${killerId}" not found in archive.`);
    return matched;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/killers/${killerId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch killer details: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`API Error fetching killer ${killerId}, falling back to local archive data`, error);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const matched = MOCK_KILLERS.find((k) => k.id === killerId);
    if (!matched) throw new Error(`Killer with ID "${killerId}" not found in archive.`);
    return matched;
  }
}

export async function fetchKillerScore(killerId: string): Promise<ScoreResponse> {
  if (!API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const matched = MOCK_KILLERS.find((k) => k.id === killerId);
    const score = matched ? matched.psycho_killer_score : 50;
    
    // Deterministic procedural mock breakdowns so they remain consistent for the same killer
    const charSum = killerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const brutality = 60 + (charSum % 35);
    const evasion = 55 + ((charSum * 3) % 40);
    const notoriety = 70 + ((charSum * 7) % 28);
    const psychopathy = 80 + ((charSum * 2) % 19);

    return {
      killer_id: killerId,
      psycho_killer_score: score,
      breakdown: {
        brutality: Math.min(100, brutality),
        evasion: Math.min(100, evasion),
        notoriety: Math.min(100, notoriety),
        psychopathy: Math.min(100, psychopathy),
      },
    };
  }

  try {
    const res = await fetch(`${API_BASE_URL}/killers/${killerId}/score`);
    if (!res.ok) {
      throw new Error(`Failed to fetch score: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`API Error fetching score for ${killerId}, falling back to local archive data`, error);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const matched = MOCK_KILLERS.find((k) => k.id === killerId);
    const score = matched ? matched.psycho_killer_score : 50;
    
    const charSum = killerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const brutality = 60 + (charSum % 35);
    const evasion = 55 + ((charSum * 3) % 40);
    const notoriety = 70 + ((charSum * 7) % 28);
    const psychopathy = 80 + ((charSum * 2) % 19);

    return {
      killer_id: killerId,
      psycho_killer_score: score,
      breakdown: {
        brutality: Math.min(100, brutality),
        evasion: Math.min(100, evasion),
        notoriety: Math.min(100, notoriety),
        psychopathy: Math.min(100, psychopathy),
      },
    };
  }
}
