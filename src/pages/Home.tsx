import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Sparkles, Database, ArrowRight, Eye, ShieldAlert } from "lucide-react";
import { Killer } from "../types";
import { fetchKillers } from "../lib/api";
import KillerCard from "../components/KillerCard";

export default function Home() {
  const [featured, setFeatured] = useState<Killer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchKillers();
        // Sort by psycho_killer_score descending and pick top 3
        const sorted = [...data].sort((a, b) => b.psycho_killer_score - a.psycho_killer_score);
        setFeatured(sorted.slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 psychic-vignette pointer-events-none z-10" />
      {/* Textured Film Grain Overlay */}
      <div className="absolute inset-0 psychic-grain pointer-events-none z-10" />

      {/* HERO SECTION */}
      <section className="relative z-20 pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-zinc-900/10 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-1.5 px-3.5 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 text-[10px] tracking-widest font-mono text-zinc-400 uppercase mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>UNRESTRICTED CLASSIFIED ARCHIVE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl font-extrabold tracking-wider leading-tight text-white mb-6"
          >
            THE USKI PSYCHIC <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">
              CLIMATE INDEX
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mb-10"
          >
            An authoritative, high-fidelity research index tracking, quantifying, and analyzing the psychopathology of infamous criminal histories. Formatted as an archival, collectible registry with meticulous parameters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              to="/explore"
              id="hero-explore-cta"
              className="px-8 py-3.5 flex items-center gap-2.5 bg-white text-zinc-950 hover:bg-zinc-200 transition-all rounded-xl text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              <span>ACCESS REGISTRY</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              to="/about"
              id="hero-about-cta"
              className="px-8 py-3.5 flex items-center gap-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all rounded-xl text-xs font-mono font-bold tracking-widest uppercase"
            >
              <span>MISSION PROTOCOL</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* HISTORIC ANALYSIS SUMMARY STATS */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 backdrop-blur-xs">
              <Database className="h-8 w-8 text-zinc-500" />
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-zinc-200">8 DETAILED</span>
                <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                  HISTORICAL CASE FILES
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 backdrop-blur-xs">
              <Eye className="h-8 w-8 text-zinc-500" />
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-zinc-200">95.6 AVG</span>
                <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                  PSYCHOMETRIC SCORE (PKS)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 backdrop-blur-xs">
              <ShieldAlert className="h-8 w-8 text-zinc-500" />
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-zinc-200">100% PUBLIC</span>
                <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                  VERIFIABLE DATA SOURCES
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIBLES GRIDS */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase block mb-1">
                EXHIBITION BENCHMARK
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-wide">
                FEATURED COLLECTIBLE DOSSIERS
              </h2>
            </div>
            
            <Link
              to="/explore"
              id="view-all-cases-btn"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white transition-all uppercase tracking-wider"
            >
              <span>BROWSE ALL CASES</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Featured Cards list loading / displaying */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-full h-[410px] rounded-2xl bg-zinc-900/40 border border-zinc-850 animate-pulse flex flex-col justify-between p-5">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-8 bg-zinc-800 rounded" />
                    <div className="h-44 w-[180px] bg-zinc-800 rounded-xl" />
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="h-3 bg-zinc-800 rounded w-1/3" />
                    <div className="h-5 bg-zinc-800 rounded w-3/4" />
                    <div className="h-3 bg-zinc-800 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {featured.map((killer) => (
                <KillerCard key={killer.id} killer={killer} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ETHICAL RESPONSIBILITY INTRO BLOCK */}
      <section className="relative z-20 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-900 bg-zinc-900/10 p-8 sm:p-10 backdrop-blur-xs flex flex-col sm:flex-row items-start gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
            <Shield className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-bold text-zinc-200">
              Responsible Scholarly Exploration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
              The USKI Psychic Climate Archive is organized to facilitate the objective, sociological, and psychological study of serious criminal behavior. By cataloging cases into collectible reference records, we maintain an analytical approach to history. We strictly reject sensationalism and are dedicated to absolute verification. No victim statistics are rendered to ensure we maintain respect for memory.
            </p>
            <Link
              to="/ethics"
              id="home-ethics-charter-btn"
              className="mt-2 text-xs font-mono tracking-widest text-zinc-300 hover:text-white uppercase inline-flex items-center gap-1.5"
            >
              <span>READ THE ETHICS CHARTER</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
