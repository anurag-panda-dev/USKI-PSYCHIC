import { Link, NavLink } from "react-router-dom";
import { Shield, Eye, Database, FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Branding */}
        <Link 
          to="/" 
          id="hdr-logo-link"
          className="flex items-center gap-3 group"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 transition-all duration-300 group-hover:border-zinc-400 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Eye className="h-5 w-5 text-zinc-400 transition-colors duration-300 group-hover:text-white" />
            <div className="absolute inset-0 rounded-lg bg-zinc-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider font-bold text-zinc-100 transition-colors group-hover:text-white">
              USKI
            </span>
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
              PSYCHIC CLIMATE ARCHIVE
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink 
            to="/" 
            id="nav-home"
            className={({ isActive }) => 
              `px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-md ${
                isActive 
                  ? "text-white bg-zinc-900 border border-zinc-800" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
              }`
            }
          >
            INDEX
          </NavLink>
          <NavLink 
            to="/explore" 
            id="nav-explore"
            className={({ isActive }) => 
              `px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-md ${
                isActive 
                  ? "text-white bg-zinc-900 border border-zinc-800" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
              }`
            }
          >
            CASE REGISTRY
          </NavLink>
          <NavLink 
            to="/about" 
            id="nav-about"
            className={({ isActive }) => 
              `px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-md ${
                isActive 
                  ? "text-white bg-zinc-900 border border-zinc-800" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
              }`
            }
          >
            MISSION PROTOCOL
          </NavLink>
          <NavLink 
            to="/ethics" 
            id="nav-ethics"
            className={({ isActive }) => 
              `px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-md ${
                isActive 
                  ? "text-white bg-zinc-900 border border-zinc-800" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
              }`
            }
          >
            ETHICS & COMPLIANCE
          </NavLink>
        </nav>

        {/* System ID Tag (Editorial Asset) */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex flex-col items-end">
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
              SYSTEM LEVEL: SECURE
            </span>
            <span className="font-mono text-[9px] text-zinc-600">
              UTC AUTHENTICATED
            </span>
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500/80 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </div>
      </div>

      {/* Mobile Navigation Drawer Trigger / Header Links */}
      <div className="flex md:hidden border-t border-zinc-900 bg-zinc-950/95 justify-around py-2.5 px-2">
        <NavLink 
          to="/" 
          id="nav-mob-home"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 font-mono text-[9px] tracking-wider uppercase ${
              isActive ? "text-white" : "text-zinc-500"
            }`
          }
        >
          <Database className="h-4 w-4" />
          <span>INDEX</span>
        </NavLink>
        <NavLink 
          to="/explore" 
          id="nav-mob-explore"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 font-mono text-[9px] tracking-wider uppercase ${
              isActive ? "text-white" : "text-zinc-500"
            }`
          }
        >
          <FileText className="h-4 w-4" />
          <span>REGISTRY</span>
        </NavLink>
        <NavLink 
          to="/about" 
          id="nav-mob-about"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 font-mono text-[9px] tracking-wider uppercase ${
              isActive ? "text-white" : "text-zinc-500"
            }`
          }
        >
          <Shield className="h-4 w-4" />
          <span>PROTOCOL</span>
        </NavLink>
        <NavLink 
          to="/ethics" 
          id="nav-mob-ethics"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 font-mono text-[9px] tracking-wider uppercase ${
              isActive ? "text-white" : "text-zinc-500"
            }`
          }
        >
          <Shield className="h-4 w-4" />
          <span>ETHICS</span>
        </NavLink>
      </div>
    </header>
  );
}
