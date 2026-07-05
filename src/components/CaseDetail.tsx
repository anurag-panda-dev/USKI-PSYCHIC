import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Shield, Calendar, MapPin, 
  User, Award, Key, HelpCircle, AlertTriangle 
} from "lucide-react";
import { Killer, ScoreResponse } from "../types";

interface CaseDetailProps {
  killer: Killer;
  scoreData: ScoreResponse | null;
}

export default function CaseDetail({ killer, scoreData }: CaseDetailProps) {
  const activeProvinces = killer.active_in_provinces || [];
  const imageUrl = killer.image_url || "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=300";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Return Navigation Button */}
      <div className="mb-6">
        <Link
          to="/explore"
          id="back-to-registry-link"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>RETURN TO CASE REGISTRY</span>
        </Link>
      </div>

      {/* CASE DOSSIER OUTER PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT PANEL: Cinematic Portrait & Global Classification */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-4">
            {/* Holographic scanner active line overlay effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-500/30 blur-[1px] animate-bounce pointer-events-none" style={{ animationDuration: "6s" }} />
            
            <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
              <img
                src={imageUrl}
                alt={killer.name || "Unknown Subject"}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
              
              {/* Dossier Code Stamp */}
              <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-800 font-mono text-[9px] text-zinc-400">
                REG_ID: #{String(killer.id).toUpperCase().slice(0, 8)}
              </div>
            </div>

            {/* Quick Identifier Stats inside Left Column */}
            <div className="mt-5 flex flex-col gap-3.5">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">KNOWN AS</span>
                <span className="font-sans text-xs text-zinc-300 font-medium italic text-right">
                  &ldquo;{Array.isArray(killer.known_as) ? killer.known_as.join(", ") : (killer.known_as || "N/A")}&rdquo;
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">ACTUAL VICTIMS</span>
                <span className="font-mono text-sm text-red-500 font-extrabold">
                  {killer.murder_count_actual} CONFIRMED
                </span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">ORIGIN</span>
                <span className="font-sans text-xs text-zinc-300">
                  {killer.country || "Unknown"}
                </span>
              </div>
            </div>
          </div>

          {/* SYSTEM NOTES CARD */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
            <div className="flex items-center gap-2 mb-3 text-zinc-400">
              <AlertTriangle className="h-4 w-4 text-zinc-500" />
              <span className="font-mono text-[10px] tracking-widest uppercase">
                SECURITY ADVISORY
              </span>
            </div>
            <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
              This dossier contains sensitive information. Public source credentials have been verified for factual alignment. Any reproduction or distribution should maintain educational, research, and data integrity protocols.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: dossier details & analytical spectra */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* DOSSIER HEADER CARD */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-8 overflow-hidden">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-zinc-900/10 blur-2xl pointer-events-none" />
            
            <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase block mb-1">
              CLASSIFIED DOSSIER FILE
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-zinc-100 tracking-wide">
              {killer.name || "Unknown Subject"}
            </h1>
            <p className="font-mono text-xs text-zinc-400 mt-2 flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>ACTIVE YEARS: {killer.years_active_from || "UNKNOWN"} – {killer.years_active_to || "PRESENT"}</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 font-mono text-[10px] text-zinc-300">
                <MapPin className="h-3 w-3 text-zinc-500" />
                <span>{killer.birth_location || "Unknown"}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 font-mono text-[10px] text-zinc-300">
                <User className="h-3 w-3 text-zinc-500" />
                <span>BORN: {killer.birth_year || "UNKNOWN"}</span>
              </div>
            </div>
          </div>

          {/* PSYCHOLOGICAL SPECTRUM ANALYZER (Score breakdown) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-zinc-400" />
                <h3 className="font-serif text-lg font-bold text-zinc-200">
                  PSYCHOMETRIC CHARACTER ANALYSIS
                </h3>
              </div>
              
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest font-bold">PKS INDEX</span>
                <span className="font-mono text-sm font-extrabold text-red-500">
                  {killer.psycho_killer_score}
                </span>
              </div>
            </div>

            {/* Visual Sliders for breakdown attributes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-zinc-400 tracking-wider">BRUTALITY INDEX</span>
                  <span className="text-red-400 font-bold">
                    {scoreData?.breakdown?.brutality || 85}%
                  </span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scoreData?.breakdown?.brutality || 85}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-zinc-400 tracking-wider">EVASION CAPABILITY</span>
                  <span className="text-emerald-400 font-bold">
                    {scoreData?.breakdown?.evasion || 75}%
                  </span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scoreData?.breakdown?.evasion || 75}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.5)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-zinc-400 tracking-wider">PUBLIC NOTORIETY</span>
                  <span className="text-amber-400 font-bold">
                    {scoreData?.breakdown?.notoriety || 90}%
                  </span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scoreData?.breakdown?.notoriety || 90}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-amber-600 shadow-[0_0_8px_rgba(217,119,6,0.5)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-zinc-400 tracking-wider">COGNITIVE PATHOLOGY</span>
                  <span className="text-indigo-400 font-bold">
                    {scoreData?.breakdown?.psychopathy || 95}%
                  </span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scoreData?.breakdown?.psychopathy || 95}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.5)]"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* IMMERSIVE NARRATIVE DOSSIER SECTIONS */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 flex flex-col gap-6">
            
            {/* MOTIVE SECTION */}
            <div className="flex flex-col gap-2 pb-5 border-b border-zinc-900">
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                <Key className="h-3.5 w-3.5" />
                <span>PSYCHOGENIC MOTIVE</span>
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed font-medium">
                {killer.motive || "No specific motive details archived."}
              </p>
            </div>

            {/* METHOD SECTION */}
            <div className="flex flex-col gap-2 pb-5 border-b border-zinc-900">
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>METHODOLOGY OF EXECUTION</span>
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {killer.method || "No methodology details archived."}
              </p>
            </div>

            {/* OPERATIONAL PROVINCES */}
            {activeProvinces.length > 0 && (
              <div className="flex flex-col gap-2 pb-5 border-b border-zinc-900">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>REGISTERED GEOGRAPHIC DOMAINS</span>
                </span>
                <div className="flex flex-wrap gap-2.5 mt-1.5">
                  {activeProvinces.map((province, index) => (
                    <span 
                      key={index} 
                      className="font-mono text-xs text-zinc-300 bg-zinc-900/90 px-3 py-1 rounded border border-zinc-800/80"
                    >
                      {province}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CAUGHT BY */}
            <div className="flex flex-col gap-2 pb-5 border-b border-zinc-900">
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" />
                <span>APPREHENSION PROTOCOL (CAUGHT BY)</span>
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {killer.caught_by || "No apprehension details archived."}
              </p>
            </div>

            {/* SENTENCE DETAILS */}
            <div className="flex flex-col gap-2 pb-5 border-b border-zinc-900">
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" />
                <span>JUDICIAL CONVICTION & SENTENCE DECREE</span>
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {killer.sentence_details || "No sentence or conviction details archived."}
              </p>
            </div>

            {/* ADDITIONAL INFORMATION */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                ARCHIVE NOTES & ADDITIONAL ANNOTATIONS
              </span>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                {killer.additional_info || "No additional annotations archived."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
