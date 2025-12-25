import React, { useEffect, useState } from "react";
import setting from "../assets/setting.svg";

const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    // Get theme from localStorage or use 'dark' as default
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setCurrentTheme(savedTheme);

    // Listen for storage events (if changed from ThemeGrid)
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme");
      if (newTheme) setCurrentTheme(newTheme);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
  };

  // Curated short list for quick access
  const quickThemes = [
    { name: "Light", value: "light", color: "#ffffff" },
    { name: "Dark", value: "dark", color: "#1d232a" },
    { name: "Synthwave", value: "synthwave", color: "#2d1b69" },
    { name: "Retro", value: "retro", color: "#e4d8b4" },
    { name: "Cyberpunk", value: "cyberpunk", color: "#fff248" },
  ];

  return (
    <>
      <div className={`fixed top-4 right-4 z-50 flex flex-col items-end transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-0'}`}>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`btn btn-circle btn-lg glass-panel text-base-content hover:rotate-90 transition-transform duration-500 shadow-2xl ${isOpen ? 'bg-primary text-primary-content border-none' : ''}`}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          )}
        </button>

        {/* Floating Menu */}
        <div className={`mt-4 p-4 rounded-2xl glass-panel w-64 transform transition-all duration-300 origin-top-right ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-3 opacity-70">Quick Switch</h3>
          <div className="space-y-2">
            {quickThemes.map((t) => (
              <button
                key={t.value}
                onClick={() => handleThemeChange(t.value)}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-white/10 ${currentTheme === t.value ? 'bg-primary/20 ring-1 ring-primary' : ''}`}
              >
                <div className="w-6 h-6 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: t.color }}></div>
                <span className="font-medium">{t.name}</span>
                {currentTheme === t.value && <svg className="w-4 h-4 ml-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>

          <div className="divider my-2"></div>

          <button
            onClick={() => {
              setIsOpen(false);
              document.getElementById('all-themes')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-block btn-sm btn-ghost hover:bg-white/10"
          >
            View All Themes
          </button>
        </div>

      </div>
    </>
  );
};

export default ThemeController;
