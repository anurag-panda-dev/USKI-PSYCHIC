import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fetchKillers } from "../lib/api";
import { Killer } from "../types";
import SearchBar from "../components/SearchBar";
import FilterControls from "../components/FilterControls";
import KillerCard from "../components/KillerCard";
import { AlertCircle, EyeOff, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 24;

export default function Explore() {
  const [killers, setKillers] = useState<Killer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [minScore, setMinScore] = useState(50);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchKillers();
        setKillers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to interface with archive endpoints.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCountry, minScore]);

  const countries = useMemo(() => {
    const list = killers.map((k) => k.country).filter(Boolean);
    return Array.from(new Set(list)).sort();
  }, [killers]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCountry("");
    setMinScore(50);
  };

  const filteredKillers = useMemo(() => {
    return killers.filter((k) => {
      const knownAsStr = Array.isArray(k.known_as)
        ? k.known_as.join(", ")
        : typeof k.known_as === "string"
        ? k.known_as
        : "";

      const matchesSearch =
        (k.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        knownAsStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (k.method?.toLowerCase() || "").includes(searchTerm.toLowerCase());

      const matchesCountry = selectedCountry ? k.country === selectedCountry : true;
      const matchesScore = k.psycho_killer_score >= minScore;

      return matchesSearch && matchesCountry && matchesScore;
    });
  }, [killers, searchTerm, selectedCountry, minScore]);

  const totalPages = Math.max(1, Math.ceil(filteredKillers.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedKillers = filteredKillers.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    const next = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 psychic-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 psychic-grain pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="border-b border-zinc-900 pb-6">
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase block mb-1.5">
            USKI DIGITAL REGISTRY
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            PSYCHIC FILES REGISTRY
          </h1>
          <p className="font-sans text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Interrogate the complete catalog of analyzed subjects. Filter cases by operational country or adjust the minimum Psycho Killer Score index below.
          </p>
          <p className="font-mono text-[11px] text-zinc-500 mt-2">
            TOTAL RECORDS: {killers.length} | MATCHING: {filteredKillers.length}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          
          <FilterControls
            countries={countries}
            selectedCountry={selectedCountry}
            minScore={minScore}
            onCountryChange={setSelectedCountry}
            onMinScoreChange={setMinScore}
            onReset={handleResetFilters}
          />
        </div>

        {(searchTerm || selectedCountry || minScore > 50) && (
          <div className="flex flex-wrap items-center gap-2 py-2 px-4 bg-zinc-900/30 border border-zinc-900 rounded-lg text-xs text-zinc-400">
            <span className="font-mono text-[10px] uppercase text-zinc-500">Active Criteria:</span>
            {searchTerm && <span className="bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-[11px] font-sans">Search: &quot;{searchTerm}&quot;</span>}
            {selectedCountry && <span className="bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-[11px] font-sans">Origin: {selectedCountry}</span>}
            {minScore > 50 && <span className="bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-[11px] font-sans">PKS &ge; {minScore}</span>}
          </div>
        )}

        <div className="mt-4">
          {error ? (
            <div className="flex flex-col items-center justify-center text-center p-12 bg-red-950/20 border border-red-900/40 rounded-2xl">
              <AlertCircle className="h-10 w-10 text-red-500 mb-3" />
              <span className="font-serif text-lg font-bold text-red-200">System Interface Error</span>
              <p className="font-sans text-xs text-zinc-400 mt-1">{error}</p>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div key={n} className="w-full h-[410px] rounded-2xl bg-zinc-900/40 border border-zinc-850 animate-pulse flex flex-col justify-between p-5">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-8 bg-zinc-800 rounded" />
                    <div className="h-44 w-[140px] bg-zinc-800 rounded-xl ml-auto" />
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="h-3 bg-zinc-800 rounded w-1/3" />
                    <div className="h-5 bg-zinc-800 rounded w-3/4" />
                    <div className="h-3 bg-zinc-800 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : paginatedKillers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center p-16 bg-zinc-900/10 border border-zinc-900 rounded-2xl py-24"
            >
              <EyeOff className="h-12 w-12 text-zinc-600 mb-4" />
              <h3 className="font-serif text-xl font-bold text-zinc-300">NO ARCHIVAL RECORDS RETRIEVED</h3>
              <p className="font-sans text-xs text-zinc-500 max-w-md mt-1.5 leading-relaxed">
                The current filtering matrices matched 0 subjects. Try adjusting your minimum PKS score or resetting your search parameters.
              </p>
              <button
                type="button"
                id="reset-empty-btn"
                onClick={handleResetFilters}
                className="mt-6 px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:text-white hover:bg-zinc-800 text-zinc-400 font-mono text-xs tracking-wider uppercase rounded-lg transition-all"
              >
                Reset All Criteria
              </button>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                <AnimatePresence mode="popLayout">
                  {paginatedKillers.map((killer) => (
                    <KillerCard key={killer.id} killer={killer} />
                  ))}
                </AnimatePresence>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-10">
                  <button
                    type="button"
                    onClick={() => goToPage(safePage - 1)}
                    disabled={safePage === 1}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed font-mono text-xs tracking-wider uppercase"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </button>
                  <span className="font-mono text-xs text-zinc-400">
                    PAGE {safePage} / {totalPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => goToPage(safePage + 1)}
                    disabled={safePage === totalPages}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed font-mono text-xs tracking-wider uppercase"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}
