import React, { useEffect } from "react";
import setting from "../assets/setting.svg";

const ThemeController = () => {
  useEffect(() => {
    // Get theme from localStorage or use 'dark' as default
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  // Theme data with color swatches for each theme
  const themes = [
    {
      name: "Light",
      value: "light",
      colors: ["#4b6bfb", "#ff79c6", "#50fa7b", "#282a36"],
    },
    {
      name: "Dark",
      value: "dark",
      colors: ["#4b6bfb", "#ff79c6", "#50fa7b", "#282a36"],
    },
    {
      name: "Cupcake",
      value: "cupcake",
      colors: ["#65c3c8", "#ef9fbc", "#f9d72f", "#291334"],
    },
    {
      name: "Bumblebee",
      value: "bumblebee",
      colors: ["#e0a82e", "#f9d72f", "#181a2a", "#181a2a"],
    },
    {
      name: "Emerald",
      value: "emerald",
      colors: ["#66cc8a", "#377cfb", "#ff5a5f", "#333333"],
    },
    {
      name: "Corporate",
      value: "corporate",
      colors: ["#4b6bfb", "#7b92b2", "#5fa8d3", "#2b3440"],
    },
    {
      name: "Synthwave",
      value: "synthwave",
      colors: ["#e779c1", "#58c7f3", "#f3cc30", "#2d1b69"],
    },
    {
      name: "Retro",
      value: "retro",
      colors: ["#ef9995", "#2cb67d", "#f7d56e", "#260000"],
    },
    {
      name: "Cyberpunk",
      value: "cyberpunk",
      colors: ["#ff7598", "#75d1f0", "#ae58ff", "#000000"],
    },
    {
      name: "Valentine",
      value: "valentine",
      colors: ["#e96d7b", "#a991f7", "#43d2ff", "#632c3b"],
    },
    {
      name: "Halloween",
      value: "halloween",
      colors: ["#f28c18", "#6d3a9c", "#ff99af", "#31006b"],
    },
    {
      name: "Garden",
      value: "garden",
      colors: ["#ff5692", "#80b469", "#3a8c6f", "#3a8c6f"],
    },
    {
      name: "Forest",
      value: "forest",
      colors: ["#1eb854", "#1fd65f", "#149c5f", "#171212"],
    },
    {
      name: "Aqua",
      value: "aqua",
      colors: ["#35bfed", "#9966cc", "#f9d72f", "#193349"],
    },
    {
      name: "Lofi",
      value: "lofi",
      colors: ["#000000", "#000000", "#000000", "#000000"],
    },
    {
      name: "Pastel",
      value: "pastel",
      colors: ["#d1c1fc", "#ff7a90", "#5fe1e4", "#221c30"],
    },
    {
      name: "Fantasy",
      value: "fantasy",
      colors: ["#6e0b75", "#007ebd", "#f8b360", "#201020"],
    },
    {
      name: "Wireframe",
      value: "wireframe",
      colors: ["#b8b8b8", "#b8b8b8", "#b8b8b8", "#b8b8b8"],
    },
    {
      name: "Black",
      value: "black",
      colors: ["#777777", "#777777", "#777777", "#777777"],
    },
    {
      name: "Luxury",
      value: "luxury",
      colors: ["#ffffff", "#152747", "#a17c79", "#41002d"],
    },
    {
      name: "Dracula",
      value: "dracula",
      colors: ["#bd93f9", "#ff5555", "#f1fa8c", "#282a36"],
    },
    {
      name: "CMYK",
      value: "cmyk",
      colors: ["#45aaf2", "#ff6b6b", "#f9ca24", "#2f3542"],
    },
    {
      name: "Autumn",
      value: "autumn",
      colors: ["#8c0327", "#cb6e17", "#f8da68", "#451a03"],
    },
    {
      name: "Business",
      value: "business",
      colors: ["#1c59ae", "#58606b", "#e6643c", "#151d28"],
    },
    {
      name: "Acid",
      value: "acid",
      colors: ["#ff00f2", "#ffa427", "#c3ff00", "#110033"],
    },
    {
      name: "Lemonade",
      value: "lemonade",
      colors: ["#519903", "#e4dc00", "#ffcc00", "#1f2b06"],
    },
    {
      name: "Night",
      value: "night",
      colors: ["#38bdf8", "#818cf8", "#fc80a5", "#0f1729"],
    },
    {
      name: "Coffee",
      value: "coffee",
      colors: ["#dc944c", "#306869", "#43a7a7", "#20161f"],
    },
    {
      name: "Winter",
      value: "winter",
      colors: ["#0891b2", "#8b5cf6", "#db2777", "#1d232a"],
    },
    {
      name: "Dim",
      value: "dim",
      colors: ["#31a16a", "#f28585", "#f2c53d", "#20293a"],
    },
    {
      name: "Nord",
      value: "nord",
      colors: ["#6096c3", "#8b8fa9", "#94b5a1", "#2e3440"],
    },
    {
      name: "Sunset",
      value: "sunset",
      colors: ["#f43f5e", "#d946ef", "#8b5cf6", "#1e293b"],
    },
    {
      name: "Caramellatte",
      value: "caramellatte",
      colors: ["#000000", "#644131", "#9a5a3c", "#E5C89E"],
    },
    {
      name: "Abyss",
      value: "abyss",
      colors: ["#00ff00", "#8b00ff", "#969696", "#171717"],
    },
    {
      name: "Silk",
      value: "silk",
      colors: ["#6984bd", "#ff7f7f", "#7dcba3", "#242933"],
    },
  ];

  return (
    <div className="absolute top-2 right-2 dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn border-2 border-zinc-600">
        Themes
        <svg
          width="12px"
          height="15px"
          className="inline-block h-3 w-[11px] fill-current opacity-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
        {/* <img src={setting} alt="setting" className="w-5 h-5" /> */}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-10 shadow-2xl border-2 border-zinc-600 flex flex-wrap justify-center items-center gap-5 w-340 h-200 overflow-y-auto mx-auto"
      >
        {themes.map((theme) => (
          <li
            key={theme.value}
            className="cursor-pointer p-2 rounded-lg hover:bg-base-200"
            onClick={() => handleThemeChange(theme.value)}
          >
            <div className="flex flex-col gap-1">
              <span className="text-md font-medium">{theme.name}</span>
              <div className="flex gap-1">
                {theme.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    A
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeController;
