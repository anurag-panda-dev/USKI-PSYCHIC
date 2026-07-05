import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search database by subject name, alias, or method..." }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="text"
        id="case-search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-12 py-3.5 bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm font-sans rounded-xl focus:outline-hidden focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 focus:bg-zinc-900 transition-all shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]"
        placeholder={placeholder}
      />
      {value && (
        <button
          type="button"
          id="clear-search-btn"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-4 flex items-center text-zinc-500 hover:text-zinc-200 transition-colors"
          title="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
