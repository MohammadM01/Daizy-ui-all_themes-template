import React, { useEffect } from "react";
import ThemeController from "./Components/ThemeController";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import ThemeGrid from "./Components/ThemeGrid";

const App = () => {
  return (
    <>
      <ThemeController />
      <div className="min-h-screen font-sans selection:bg-primary selection:text-primary-content">
        <Hero />
        <Features />
        <div id="all-themes">
          <ThemeGrid />
        </div>

        {/* Simple Footer */}
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
          <aside>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">DaizyUI Templates</span>
            </div>
            <p className="font-bold">
              Providing reliable tech since 2024
            </p>
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default App;
