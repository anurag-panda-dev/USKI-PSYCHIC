import { motion } from "motion/react";
import { Shield, EyeOff, ShieldAlert, FileText, CheckCircle } from "lucide-react";

export default function Ethics() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 psychic-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 psychic-grain pointer-events-none z-10" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Editorial Page Header */}
        <div className="border-b border-zinc-900 pb-8 text-center md:text-left">
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase block mb-1.5">
            USKI PROTOCOL CODE: ETH-99
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            ETHICS & DATA CHARTER
          </h1>
          <p className="font-sans text-xs md:text-sm text-zinc-400 mt-3 max-w-2xl leading-relaxed">
            The values, privacy guarantees, and ethical guidelines that direct the operation and user experience of the USKI Digital Archive.
          </p>
        </div>

        {/* CORE STATEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-xs flex flex-col gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-zinc-200 uppercase tracking-wide">
              Verified Public Data
            </h3>
            <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
              Every data parameter, including location records, judicial history, and active dates, is sourced solely from public court filings, official police records, and verified historical databases.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-xs flex flex-col gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center">
              <EyeOff className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-zinc-200 uppercase tracking-wide">
              Absolute User Privacy
            </h3>
            <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
              We require zero user credentials, session cookies, tracking logs, or authentication gates. This is a fully decentralized, static frontend designed for private, academic interaction.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-xs flex flex-col gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-zinc-200 uppercase tracking-wide">
              No Victim Statistics
            </h3>
            <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
              We purposefully omit unconfirmed statistics or sensational victim reports to avoid commodifying tragedy. The focus is strictly kept on the offender's psychopathology and legal outcome.
            </p>
          </div>

        </div>

        {/* GUIDELINES BODY TEXT */}
        <div className="flex flex-col gap-8 leading-relaxed font-sans text-zinc-300 text-sm">
          
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              1. Commitment to Dignity and Respect
            </h2>
            <p>
              We acknowledge the gravity of the subject matter documented on this site. Our goal is to present historical facts to assist academic research in sociology, law, and forensic psychology. Under no circumstances does this archive exist to glorify or sensationalize violent crimes. The design utilizes deep charcoal tones, neutral borders, and desaturated imagery to establish a somber, respectful aesthetic.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              2. Strict Omission of Unreliable Scrapes
            </h2>
            <p>
              The <strong>USKI Psychic Climate Archive</strong> intentionally does not parse or display <em>victim_stats</em>. Many scrapers pull unconfirmed data, which can lead to misinformation or disrespectful presentation. By declaring that victim statistics are not reliable or available for presentation, we maintain a focus on verified, peer-reviewed records.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              3. Fully Decentralized, Client-Safe Design
            </h2>
            <p>
              This applet is built to protect our audience. It maintains zero backend tracking databases, collects no diagnostic telemetry, and establishes no personal identifiers. Users can browse the case files with complete anonymity.
            </p>
            <p className="mt-2">
              Our site can be hosted for free on platforms like Vercel with absolute compatibility, using a secure, client-side only architecture to prevent network leaks.
            </p>
          </div>

        </div>

        {/* COMPLIANCE STAMP */}
        <div className="mt-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <span className="flex items-center gap-1.5 uppercase">
            <CheckCircle className="h-4 w-4 text-emerald-500/80" />
            <span>ETHICALLY ALIGNED TO HISTORICAL STANDARDS</span>
          </span>
          <span>COMPLIANT SECURITY INITIATIVE</span>
        </div>

      </div>
    </div>
  );
}
