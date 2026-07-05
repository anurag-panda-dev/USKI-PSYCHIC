import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchKillerById, fetchKillerScore } from "../lib/api";
import { Killer, ScoreResponse } from "../types";
import CaseDetail from "../components/CaseDetail";
import { AlertCircle, ArrowLeft, Loader2 } from "lucide-react";

export default function CasePage() {
  const { id } = useParams<{ id: string }>();
  const [killer, setKiller] = useState<Killer | null>(null);
  const [scoreData, setScoreData] = useState<ScoreResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        
        // Fetch case details and scores in parallel for supreme response speeds
        const [killerDetail, scoreBreakdown] = await Promise.all([
          fetchKillerById(id),
          fetchKillerScore(id)
        ]);

        setKiller(killerDetail);
        setScoreData(scoreBreakdown);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred while connecting to the USKI Archive.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-12">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 psychic-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 psychic-grain pointer-events-none z-10" />

      <div className="relative z-20">
        {loading ? (
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500 gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
              <span className="font-mono text-xs tracking-widest uppercase">DECRYPTING CASE FILE DATABANKS...</span>
            </div>
          </div>
        ) : error ? (
          <div className="max-w-xl mx-auto px-4 py-16 text-center bg-zinc-900/30 border border-zinc-900 rounded-2xl">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-red-200">DATA INTERFACE FAILURE</h2>
            <p className="font-sans text-xs text-zinc-400 mt-2 leading-relaxed">
              {error}
            </p>
            <div className="mt-8">
              <Link
                to="/explore"
                id="error-back-to-registry"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2.5 rounded-lg border border-zinc-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>RETURN TO REGISTRY</span>
              </Link>
            </div>
          </div>
        ) : killer ? (
          <CaseDetail killer={killer} scoreData={scoreData} />
        ) : (
          <div className="max-w-xl mx-auto px-4 py-16 text-center">
            <h2 className="font-serif text-2xl font-bold">CASE FILE DELETED OR ARCHIVED</h2>
            <p className="font-sans text-xs text-zinc-400 mt-2">
              The requested file path has no matching record inside USKI database nodes.
            </p>
            <div className="mt-6">
              <Link
                to="/explore"
                id="empty-back-to-registry"
                className="font-mono text-xs text-zinc-400 hover:text-white underline tracking-wider uppercase"
              >
                Return to Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
