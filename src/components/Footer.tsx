import { Link } from "react-router-dom";
import { Info, ShieldAlert, HeartHandshake } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b border-zinc-900 pb-8 mb-8">
          
          {/* Section 1: Intent Statement */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-sm tracking-wider font-bold text-zinc-300">
              USKI PSYCHIC CLIMATE ARCHIVE
            </span>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-sm">
              An educational digital archive mapping and analyzing the psychological parameters and public records of extreme crimes. Curated strictly from public and verified records.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col gap-2.5 md:pl-12">
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
              LEGALITY & RECOVERY
            </span>
            <div className="flex flex-col gap-2">
              <Link 
                to="/ethics" 
                id="footer-ethics-link"
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Data Security & Ethics Charter</span>
              </Link>
              <Link 
                to="/about" 
                id="footer-about-link"
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                <Info className="h-3.5 w-3.5" />
                <span>Mission & Research Scope</span>
              </Link>
            </div>
          </div>

          {/* Section 3: Professional Disclaimer */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
              DATA INTEGRITY
            </span>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed">
              This repository is built as an interactive dashboard utilizing public datasets. It collects no private user data, requires no authentication credentials, and serves solely as a reference framework.
            </p>
          </div>

        </div>

        {/* Footer Meta */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600">
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-3 w-3" />
            <span>Respect & Responsibility for Human History</span>
          </div>
          <span>
            &copy; {currentYear} USKI ARCHIVE. ALL VERIFIABLE DATA IS SOURCE-CREDITED.
          </span>
        </div>
      </div>
    </footer>
  );
}
