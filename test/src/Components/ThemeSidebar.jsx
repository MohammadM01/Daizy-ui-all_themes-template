import React from "react";

const ThemeSidebar = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { name: "Light", value: "light", color: "#ffffff" },
    { name: "Dark", value: "dark", color: "#1d232a" },
    { name: "Cupcake", value: "cupcake", color: "#f5f0f0" },
    { name: "Bumblebee", value: "bumblebee", color: "#ffde34" },
    { name: "Emerald", value: "emerald", color: "#66cc8a" },
    { name: "Corporate", value: "corporate", color: "#4b6bfb" },
    { name: "Synthwave", value: "synthwave", color: "#2d1b69" },
    { name: "Retro", value: "retro", color: "#ef9995" },
    { name: "Cyberpunk", value: "cyberpunk", color: "#ff7598" },
    { name: "Valentine", value: "valentine", color: "#e96d7b" },
    { name: "Halloween", value: "halloween", color: "#f28c18" },
    { name: "Garden", value: "garden", color: "#5c7f67" },
    { name: "Forest", value: "forest", color: "#1eb854" },
    { name: "Aqua", value: "aqua", color: "#09ecf3" },
    { name: "Lofi", value: "lofi", color: "#808080" },
    { name: "Pastel", value: "pastel", color: "#d1c1fc" },
    { name: "Fantasy", value: "fantasy", color: "#6e0b75" },
    { name: "Wireframe", value: "wireframe", color: "#b8b8b8" },
    { name: "Black", value: "black", color: "#000000" },
    { name: "Luxury", value: "luxury", color: "#ffffff" },
    { name: "Dracula", value: "dracula", color: "#ff79c6" },
    { name: "CMYK", value: "cmyk", color: "#45aaf2" },
    { name: "Autumn", value: "autumn", color: "#8c0327" },
    { name: "Business", value: "business", color: "#1c4e80" },
    { name: "Acid", value: "acid", color: "#ff00f2" },
    { name: "Lemonade", value: "lemonade", color: "#519903" },
    { name: "Night", value: "night", color: "#38bdf8" },
    { name: "Coffee", value: "coffee", color: "#dc944c" },
    { name: "Winter", value: "winter", color: "#047aff" },
    { name: "Dim", value: "dim", color: "#9fe88d" },
    { name: "Nord", value: "nord", color: "#5e81ac" },
    { name: "Sunset", value: "sunset", color: "#ff5692" },
  ];

  return (
    <div className="w-full h-full bg-base-200 text-base-content flex flex-col border-r border-base-300">
      <div className="p-4 border-b border-base-300 bg-base-100">
        <h2 className="font-bold text-lg flex items-center gap-2">
           <span className="text-primary">🎨</span> Themes
           <span className="badge badge-sm badge-neutral">{themes.length}</span>
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-base-100">
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => onThemeChange(theme.value)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left group
              ${currentTheme === theme.value 
                ? 'bg-primary text-primary-content shadow-md' 
                : 'hover:bg-base-300'
              }`}
          >
            <div 
              className={`w-6 h-6 rounded-full border border-white/10 shadow-sm shrink-0
                ${currentTheme === theme.value ? 'ring-2 ring-white/30' : ''}`} 
              style={{ backgroundColor: theme.color }}
            />
            <span className="font-medium flex-1 truncate">{theme.name}</span>
            {currentTheme === theme.value && (
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 opacity-80">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
               </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSidebar;
