import React, { useEffect, useState } from "react";
import ThemeSidebar from "./Components/ThemeSidebar";
import ThemePreview from "./Components/ThemePreview";
import FontSidebar from "./Components/FontSidebar";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [currentFont, setCurrentFont] = useState("Outfit");
  const [showThemeSidebar, setShowThemeSidebar] = useState(false);
  const [showFontSidebar, setShowFontSidebar] = useState(false);

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setCurrentTheme(savedTheme);

    // Initialize font
    const savedFont = localStorage.getItem("font") || "Outfit";
    handleFontChange(savedFont);
  }, []);

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
    // On mobile, close sidebar after selection
    if (window.innerWidth < 1024) setShowThemeSidebar(false);
  };

  const handleFontChange = (fontName) => {
    setCurrentFont(fontName);
    localStorage.setItem("font", fontName);

    // Map font names to their CSS values (matching FontSidebar)
    const fontMap = {
      "Outfit": "'Outfit', sans-serif",
      "Inter": "'Inter', sans-serif",
      "Roboto": "'Roboto', sans-serif",
      "Poppins": "'Poppins', sans-serif",
      "Montserrat": "'Montserrat', sans-serif",
      "Comic Sans": "'Comic Sans MS', 'Comic Sans', cursive",
      "Lora": "'Lora', serif",
      "Playfair Display": "'Playfair Display', serif",
      "Oswald": "'Oswald', sans-serif",
      "Raleway": "'Raleway', sans-serif",
    };

    document.documentElement.style.setProperty('--font-main', fontMap[fontName] || "'Outfit', sans-serif");
    document.body.style.fontFamily = fontMap[fontName] || "'Outfit', sans-serif";

    // On mobile, close sidebar after selection
    if (window.innerWidth < 1024) setShowFontSidebar(false);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-base-100 relative">

      {/* LEFT SIDEBAR - THEMES */}
      {/* Desktop: Always visible. Mobile: Drawer overlay */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-base-200 transform transition-transform duration-300 shadow-xl lg:relative lg:translate-x-0
        ${showThemeSidebar ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <ThemeSidebar currentTheme={currentTheme} onThemeChange={handleThemeChange} />
        {/* Mobile Close Button */}
        <button
          onClick={() => setShowThemeSidebar(false)}
          className="lg:hidden absolute top-2 right-2 btn btn-circle btn-sm btn-ghost"
        >✕</button>
      </aside>

      {/* OVERLAY for Mobile Sidebars */}
      {(showThemeSidebar || showFontSidebar) && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => {
            setShowThemeSidebar(false);
            setShowFontSidebar(false);
          }}
        />
      )}

      {/* CENTER - PREVIEW */}
      <main className="flex-1 h-full overflow-y-auto relative w-full">

        {/* Mobile Header for Toggles */}
        <div className="lg:hidden sticky top-0 z-10 bg-base-100/80 backdrop-blur-md border-b border-base-content/10 p-4 flex justify-between items-center">
          <button onClick={() => setShowThemeSidebar(true)} className="btn btn-sm btn-ghost gap-2">
            <span className="text-xl">🎨</span> Themes
          </button>
          <div className="font-bold opacity-50">Preview</div>
          <button onClick={() => setShowFontSidebar(true)} className="btn btn-sm btn-ghost gap-2">
            Fonts <span className="text-xl">Aa</span>
          </button>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

        <ThemePreview />
      </main>

      {/* RIGHT SIDEBAR - FONTS */}
      {/* Desktop: Always visible. Mobile: Drawer overlay */}
      <aside className={`
        fixed inset-y-0 right-0 z-30 w-64 bg-base-200 transform transition-transform duration-300 shadow-xl lg:relative lg:translate-x-0
        ${showFontSidebar ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <FontSidebar currentFont={currentFont} onFontChange={handleFontChange} />
        {/* Mobile Close Button */}
        <button
          onClick={() => setShowFontSidebar(false)}
          className="lg:hidden absolute top-2 left-2 btn btn-circle btn-sm btn-ghost"
        >✕</button>
      </aside>

    </div>
  );
};

export default App;
