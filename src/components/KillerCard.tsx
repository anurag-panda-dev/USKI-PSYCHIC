import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Sparkles, AlertCircle } from "lucide-react";
import { Killer } from "../types";

interface KillerCardProps {
  killer: Killer;
  key?: string;
}

export default function KillerCard({ killer }: KillerCardProps) {
  const score = killer.psycho_killer_score;
  const mca = killer.murder_count_actual;
  const imageUrl = killer.image_url || "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=300";

  // Determine card style based on score (FIFA card tier equivalent)
  let cardTier = {
    bg: "bg-zinc-950/90",
    border: "border-obsidian-elite",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.08)] hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]",
    tagBg: "bg-indigo-950/60 text-indigo-400 border-indigo-900/50",
    scoreText: "text-indigo-400 glow-text-obsidian",
    titleGlow: "text-zinc-100",
    nameBadge: "Obsidian Silver",
    smokeColor: "from-indigo-950/20 via-zinc-950/40 to-zinc-950",
    borderColor: "#6366f1"
  };

  if (score >= 95) {
    cardTier = {
      bg: "bg-zinc-950/90",
      border: "border-gold-elite",
      glow: "shadow-[0_0_20px_rgba(224,169,109,0.12)] hover:shadow-[0_0_40px_rgba(224,169,109,0.3)]",
      tagBg: "bg-amber-950/60 text-amber-300 border-amber-900/50",
      scoreText: "text-amber-400 glow-text-gold",
      titleGlow: "text-amber-100",
      nameBadge: "Gold Elite Archive",
      smokeColor: "from-amber-950/20 via-zinc-950/40 to-zinc-950",
      borderColor: "#e0a96d"
    };
  } else if (score >= 90) {
    cardTier = {
      bg: "bg-zinc-950/90",
      border: "border-crimson-elite",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.12)] hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]",
      tagBg: "bg-rose-950/60 text-rose-400 border-rose-900/50",
      scoreText: "text-rose-500 glow-text-crimson",
      titleGlow: "text-rose-100",
      nameBadge: "Crimson Class",
      smokeColor: "from-rose-950/20 via-zinc-950/40 to-zinc-950",
      borderColor: "#ef4444"
    };
  }

  // Formatting active years for the card footer (e.g. '74-'78 or '88)
  const formatActiveYears = () => {
    if (!killer.years_active_from) return "N/A";
    const from = String(killer.years_active_from).slice(-2);
    const to = killer.years_active_to ? String(killer.years_active_to).slice(-2) : "??";
    return `'${from}–'${to}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="collectible-card-container w-full"
    >
      <Link
        to={`/case/${killer.id}`}
        id={`card-link-${killer.id}`}
        className="block relative rounded-2xl overflow-hidden"
      >
        {/* Core Card Framework */}
        <div
          className={`relative flex flex-col h-[410px] p-5 rounded-2xl ${cardTier.bg} ${cardTier.border} ${cardTier.glow} transition-all duration-500 border border-zinc-800/80`}
        >
          {/* Gloss overlay (Holographic light reflections) */}
          <div className="card-shine" />

          {/* Card Smoke Background Underlay */}
          <div className={`absolute inset-0 bg-gradient-to-b ${cardTier.smokeColor} opacity-70 pointer-events-none z-0`} />

          {/* TOP RAIL: Overall Rating and Profile Metadata */}
          <div className="relative flex justify-between items-start z-10 w-full mb-2">
            
            {/* OVR Rating Panel (Left Column) */}
            <div className="flex flex-col items-center">
              <span className={`font-mono text-4xl font-extrabold tracking-tighter ${cardTier.scoreText}`}>
                {score}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-400 font-bold uppercase leading-none">
                PKS
              </span>
              
              <div className="h-px w-6 bg-zinc-800 my-1.5" />
              
              <span className="font-mono text-[10px] text-zinc-500 font-bold">
                {(killer.country || "").slice(0, 3).toUpperCase()}
              </span>
            </div>

            {/* Profile Image (Right Column) - absolute/relative blended overlay */}
            <div className="relative w-[180px] h-[190px] rounded-xl overflow-hidden border border-zinc-800/80 shadow-inner bg-zinc-900">
              <img
                src={imageUrl}
                alt={killer.name || "Unknown Subject"}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              
              {/* Active Period / Subtitle banner inside image */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-zinc-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-zinc-900">
                <span className="font-mono text-[8px] text-zinc-400 tracking-wider">ACTIVE</span>
                <span className="font-mono text-[8px] text-zinc-200 font-bold">{formatActiveYears()}</span>
              </div>
            </div>

          </div>

          {/* MAIN IDENTIFIER BOARD (Lower Card Portion) */}
          <div className="relative flex flex-col mt-auto z-10">
            
            {/* Tier Badge */}
            <div className={`self-start mb-1 px-2 py-0.5 rounded-full text-[8px] tracking-widest font-mono uppercase border ${cardTier.tagBg}`}>
              {cardTier.nameBadge}
            </div>

            {/* Name */}
            <h3 className={`font-serif text-lg font-bold tracking-wide line-clamp-1 ${cardTier.titleGlow}`}>
              {killer.name || "Unknown Subject"}
            </h3>

            {/* Known As / Sub-moniker */}
            <span className="font-mono text-[10px] text-zinc-400 tracking-wider line-clamp-1 italic">
              &ldquo;{Array.isArray(killer.known_as) ? killer.known_as.join(", ") : (killer.known_as || "N/A")}&rdquo;
            </span>

            {/* Technical Parameters Divider */}
            <div className="flex items-center gap-2 my-2.5">
              <div className="h-px flex-1 bg-zinc-800/80" />
              <div className="flex h-1.5 w-1.5 rounded-full bg-zinc-700" />
              <div className="h-px flex-1 bg-zinc-800/80" />
            </div>

            {/* CARD STATS GRID (The collectible statistics deck) */}
            <div className="grid grid-cols-4 gap-1 text-center bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-xs py-1.5 px-1 rounded-lg">
              
              <div className="flex flex-col border-r border-zinc-800/50">
                <span className="font-mono text-xs font-extrabold text-zinc-100">
                  {mca}
                </span>
                <span className="font-mono text-[7px] text-zinc-500 font-bold uppercase tracking-wider">
                  MCA
                </span>
              </div>

              <div className="flex flex-col border-r border-zinc-800/50 px-1">
                <span className="font-mono text-xs font-extrabold text-zinc-100 line-clamp-1">
                  {killer.birth_year || "Unknown"}
                </span>
                <span className="font-mono text-[7px] text-zinc-500 font-bold uppercase tracking-wider">
                  BORN
                </span>
              </div>

              <div className="flex flex-col border-r border-zinc-800/50 px-0.5">
                <span className="font-mono text-[10px] font-extrabold text-zinc-100 line-clamp-1 uppercase">
                  {killer.method ? killer.method.split(" ")[0].replace(",", "") : "N/A"}
                </span>
                <span className="font-mono text-[7px] text-zinc-500 font-bold uppercase tracking-wider">
                  METH
                </span>
              </div>

              <div className="flex flex-col px-0.5">
                <span className="font-mono text-[9px] font-extrabold text-amber-500 line-clamp-1 uppercase tracking-tight">
                  {killer.motive ? killer.motive.split(" ")[0].replace(",", "") : "N/A"}
                </span>
                <span className="font-mono text-[7px] text-zinc-500 font-bold uppercase tracking-wider">
                  MOTIV
                </span>
              </div>

            </div>

            {/* Interactive Invitation Footer */}
            <div className="mt-3.5 flex items-center justify-between text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <span className="font-mono text-[8px] tracking-wider uppercase group-hover:underline">
                DECRYPT FULL FILE
              </span>
              <Shield className="h-3 w-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>

          </div>

          {/* Corner ID watermark (adds high-fidelity digital file archive vibe) */}
          <div className="absolute top-2 right-2 font-mono text-[7px] text-zinc-700/80 select-none z-10 pointer-events-none">
            USKI-#{String(killer.id).toUpperCase().slice(0, 6)}
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
