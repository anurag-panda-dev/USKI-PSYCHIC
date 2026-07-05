import { RotateCcw, SlidersHorizontal, MapPin, Award } from "lucide-react";

interface FilterControlsProps {
  countries: string[];
  selectedCountry: string;
  minScore: number;
  onCountryChange: (country: string) => void;
  onMinScoreChange: (score: number) => void;
  onReset: () => void;
}

export default function FilterControls({
  countries,
  selectedCountry,
  minScore,
  onCountryChange,
  onMinScoreChange,
  onReset
}: FilterControlsProps) {
  return (
    <div className="w-full bg-zinc-950 border border-zinc-900 rounded-xl p-5 md:p-6 shadow-md">
      <div className="flex items-center gap-2 mb-4 text-zinc-300">
        <SlidersHorizontal className="h-4 w-4 text-zinc-400" />
        <span className="font-mono text-xs font-bold tracking-widest uppercase">
          DATABASE FILTER MATRIX
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
        {/* Country Filter */}
        <div className="flex flex-col gap-2">
          <label htmlFor="country-select" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            <MapPin className="h-3 w-3" />
            <span>ORIGIN/COUNTRY</span>
          </label>
          <select
            id="country-select"
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-xs py-2.5 px-3 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all cursor-pointer"
          >
            <option value="">ALL LOCATIONS</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {(c || "").toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Minimum Score Filter */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="score-range" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
              <Award className="h-3 w-3" />
              <span>MIN PSYCHO SCORE</span>
            </label>
            <span className="font-mono text-xs font-bold text-zinc-300">
              {minScore} <span className="text-[9px] text-zinc-500">PKS</span>
            </span>
          </div>
          <div className="flex items-center gap-2 h-9">
            <input
              type="range"
              id="score-range"
              min="0"
              max="100"
              value={minScore}
              onChange={(e) => onMinScoreChange(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-400"
            />
          </div>
        </div>

        {/* Reset Trigger */}
        <div className="flex justify-end h-9.5">
          <button
            type="button"
            id="reset-filters-btn"
            onClick={onReset}
            className="w-full sm:w-auto px-4 py-2 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-xs font-mono tracking-wider transition-all"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>RESET MATRICES</span>
          </button>
        </div>
      </div>
    </div>
  );
}
