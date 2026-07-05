/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CasePage from "./pages/CasePage";
import About from "./pages/About";
import Ethics from "./pages/Ethics";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white">
        
        {/* Global Nav Header */}
        <Header />

        {/* Main Routed Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/case/:id" element={<CasePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/ethics" element={<Ethics />} />
            
            {/* Catch-all Redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Institutional Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
