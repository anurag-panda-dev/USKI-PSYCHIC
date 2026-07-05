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
  const res = await fetch(`${API_BASE}/killers/${killerId}/score`);
  if (!res.ok) {
    throw new Error(`Failed to fetch score: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}
