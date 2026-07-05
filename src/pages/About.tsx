import { motion } from "motion/react";
import { Shield, Sparkles, BookOpen, Eye, HelpCircle, FileCheck } from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 psychic-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 psychic-grain pointer-events-none z-10" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Editorial Page Header */}
        <div className="border-b border-zinc-900 pb-8 text-center md:text-left">
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase block mb-1.5">
            USKI PROTOCOL CODE: ARCH-01
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            MISSION PROTOCOL
          </h1>
          <p className="font-sans text-xs md:text-sm text-zinc-400 mt-3 max-w-2xl leading-relaxed">
            The founding mission, research scope, and methodological framework behind the curation of the USKI Psychic Climate Index.
          </p>
        </div>

        {/* CORE METHODOLOGY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-xs flex flex-col gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-zinc-200">
              Criminological Objectivity
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              We approach severe criminal historical records with the objective rigor of forensic researchers. Our database compiles public records into structured visual datasets, replacing sensationalist clickbait with scientific documentation.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-xs flex flex-col gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-zinc-200">
              The Collectible Paradigm
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Standardizing divergent historical contexts (from 16th-century Hungarian nobility to 21st-century urban cities) into a unified, collectible deck structure lets us draw structured comparative models of psychopathology variables.
            </p>
          </div>

        </div>

        {/* DETAILED NARRATIVE PARAGRAPHS */}
        <div className="flex flex-col gap-8 leading-relaxed font-sans text-zinc-300 text-sm">
          
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              1. Project Genesis & Scope
            </h2>
            <p>
              Established as an interactive database, the <strong>USKI Psychic Climate Index</strong> is built to explore the convergence of geography, judicial history, and psychopathology. Traditional reports on extreme profiles are often fragmented or sensory-heavy. By mapping case files into discrete metrics (such as the <em>Psycho Killer Score</em>), the registry creates a high-contrast analytical matrix.
            </p>
            <p className="mt-2">
              Each profile represents a verified case from documented court records, academic journals, and public police files. We compile these histories to help students, historical researchers, and criminologists understand the systemic breakdowns that occurred in each context.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              2. Explaining the &ldquo;Psychic Climate&rdquo;
            </h2>
            <p>
              A <em>psychic climate</em> refers to the sociological environment, media panic, and police investigation systems surrounding a series of events. We assess how geography (active provinces), historical periods (years active), and motives influenced how long subjects evaded capture, how they were caught (caught by), and how the public reacted (notoriety).
            </p>
            <p className="mt-2">
              This visual platform reflects this atmosphere through desaturated imagery, stark shadows, and serious typographic styling, letting visitors experience the gravity of historical case files as an interactive digital archive.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              3. Data Sourcing and Integrity
            </h2>
            <p>
              We believe in total transparency. Every attribute rendered—ranging from <strong>murder_count_actual</strong> to <strong>sentence_details</strong>—is a matter of documented historical record. We do not hypothesize or construct unsourced rumors. In line with high scholarly standards, we omit variable estimates (such as unconfirmed or unreliable victim figures) to ensure we maintain respect for memory.
            </p>
          </div>

        </div>

        {/* FOOTER-END CITATION TAG */}
        <div className="mt-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <span className="flex items-center gap-1.5 uppercase">
            <FileCheck className="h-4 w-4" />
            <span>AUTHENTICATED BY SCHOLARLY INQUIRY</span>
          </span>
          <span>ESTABLISHED 2026 / USKI TEAM</span>
        </div>

      </div>
    </div>
  );
}
