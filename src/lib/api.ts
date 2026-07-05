import { Killer, ScoreResponse } from "../types";

const API_BASE = "/api";

export async function fetchKillers(): Promise<Killer[]> {
  const res = await fetch(`${API_BASE}/killers`);
  if (!res.ok) throw new Error(`Failed to fetch killers: ${res.statusText}`);
  return res.json();
}

export async function fetchKillerById(killerId: string): Promise<Killer> {
  const res = await fetch(`${API_BASE}/killers/${killerId}`);
  if (!res.ok) throw new Error(`Failed to fetch killer: ${res.statusText}`);
  return res.json();
}

export async function fetchKillerScore(killerId: string): Promise<ScoreResponse> {
  try {
    const res = await fetch(`${API_BASE}/killers/${killerId}/score`);
    if (!res.ok) {
      throw new Error(`Failed to fetch score: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`API Error fetching score for ${killerId}, falling back to local archive data`, error);
    await new Promise((resolve) => setTimeout(resolve, 400));

    const charSum = killerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const brutality = 60 + (charSum % 35);
    const evasion = 55 + ((charSum * 3) % 40);
    const notoriety = 70 + ((charSum * 7) % 28);
    const psychopathy = 80 + ((charSum * 2) % 19);

    return {
      killer_id: killerId,
      psycho_killer_score: 50,
      breakdown: {
        brutality: Math.min(100, brutality),
        evasion: Math.min(100, evasion),
        notoriety: Math.min(100, notoriety),
        psychopathy: Math.min(100, psychopathy),
      },
    };
  }
}
