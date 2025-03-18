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


  import React from 'react';

const ThemeShowcase = () => {
  // Theme data with color swatches for each theme
  const themes = [
    {
      name: "light",
      colors: ["#4b6bfb", "#ff79c6", "#50fa7b", "#282a36"],
    },
    {
      name: "dark",
      colors: ["#4b6bfb", "#ff79c6", "#50fa7b", "#282a36"],
    },
    {
      name: "cupcake",
      colors: ["#65c3c8", "#ff9fbc", "#f9d72f", "#291334"],
    },
    {
      name: "bumblebee",
      colors: ["#e0a82e", "#f9d72f", "#181a2a", "#181a2a"],
    },
    {
      name: "emerald",
      colors: ["#66cc8a", "#377cfb", "#ff5a5f", "#333333"],
    },
    {
      name: "corporate",
      colors: ["#4b6bfb", "#7b92b2", "#5fa8d3", "#2b3440"],
    },
    {
      name: "synthwave",
      colors: ["#e779c1", "#58c7f3", "#f3cc30", "#2d1b69"],
    },
    {
      name: "retro",
      colors: ["#ef9995", "#2cb67d", "#f7d56e", "#260000"],
    },
    {
      name: "cyberpunk",
      colors: ["#ff7598", "#75d1f0", "#ae58ff", "#000000"],
    },
    {
      name: "valentine",
      colors: ["#e96d7b", "#a991f7", "#43d2ff", "#632c3b"],
    },
    {
      name: "halloween",
      colors: ["#f28c18", "#6d3a9c", "#ff99af", "#31006b"],
    },
    {
      name: "garden",
      colors: ["#ff5692", "#80b469", "#3a8c6f", "#3a8c6f"],
    },
    {
      name: "forest",
      colors: ["#1eb854", "#1fd65f", "#149c5f", "#171212"],
    },
    {
      name: "aqua",
      colors: ["#35bfed", "#9966cc", "#f9d72f", "#193349"],
    },
    {
      name: "lofi",
      colors: ["#000000", "#000000", "#000000", "#000000"],
    },
    {
      name: "pastel",
      colors: ["#d1c1fc", "#ff7a90", "#5fe1e4", "#221c30"],
    },
    {
      name: "fantasy",
      colors: ["#6e0b75", "#007ebd", "#f8b360", "#201020"],
    },
    {
      name: "wireframe",
      colors: ["#b8b8b8", "#b8b8b8", "#b8b8b8", "#b8b8b8"],
    },
    {
      name: "black",
      colors: ["#777777", "#777777", "#777777", "#777777"],
    },
    {
      name: "luxury",
      colors: ["#ffffff", "#152747", "#a17c79", "#41002d"],
    },
    {
      name: "dracula",
      colors: ["#bd93f9", "#ff5555", "#f1fa8c", "#282a36"],
    },
    {
      name: "cmyk",
      colors: ["#45aaf2", "#ff6b6b", "#f9ca24", "#2f3542"],
    },
    {
      name: "autumn",
      colors: ["#8c0327", "#cb6e17", "#f8da68", "#451a03"],
    },
    {
      name: "business",
      colors: ["#1c59ae", "#58606b", "#e6643c", "#151d28"],
    },
    {
      name: "acid",
      colors: ["#ff00f2", "#ffa427", "#c3ff00", "#110033"],
    },
    {
      name: "lemonade",
      colors: ["#519903", "#e4dc00", "#ffcc00", "#1f2b06"],
    },
    {
      name: "night",
      colors: ["#38bdf8", "#818cf8", "#fc80a5", "#0f1729"],
    },
    {
      name: "coffee",
      colors: ["#dc944c", "#306869", "#43a7a7", "#20161f"],
    },
    {
      name: "winter",
      colors: ["#0891b2", "#8b5cf6", "#db2777", "#1d232a"],
    },
    {
      name: "dim",
      colors: ["#31a16a", "#f28585", "#f2c53d", "#20293a"],
    },
    {
      name: "nord",
      colors: ["#6096c3", "#8b8fa9", "#94b5a1", "#2e3440"],
    },
    {
      name: "sunset",
      colors: ["#f43f5e", "#d946ef", "#8b5cf6", "#1e293b"],
    },
    {
      name: "caramellatte",
      colors: ["#000000", "#644131", "#9a5a3c", "#E5C89E"],
    },
    {
      name: "abyss",
      colors: ["#00ff00", "#8b00ff", "#969696", "#171717"],
    },
    {
      name: "silk",
      colors: ["#6984bd", "#ff7f7f", "#7dcba3", "#242933"],
    },
  ];

  return (
    <div className="bg-gray-900 p-4 min-h-screen">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-gray-300 text-2xl mb-6 font-medium">Try them:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {themes.map((theme) => (
            <div
              key={theme.name}
              className="rounded-lg overflow-hidden"
              style={{
                backgroundColor: theme.name === "dark" ? "#1e1e2e" : 
                               theme.name === "light" ? "#ffffff" : 
                               theme.name === "cupcake" ? "#f5f0f0" :
                               theme.name === "bumblebee" ? "#f6f5dc" :
                               theme.name === "emerald" ? "#e6f7ec" :
                               theme.name === "corporate" ? "#e5e6e6" :
                               theme.name === "synthwave" ? "#2d1b69" :
                               theme.name === "retro" ? "#e4d8b4" :
                               theme.name === "cyberpunk" ? "#ffff00" :
                               theme.name === "valentine" ? "#ffd6e6" :
                               theme.name === "halloween" ? "#0d0000" :
                               theme.name === "garden" ? "#e4e4e4" :
                               theme.name === "forest" ? "#171212" :
                               theme.name === "aqua" ? "#193349" :
                               theme.name === "lofi" ? "#ffffff" :
                               theme.name === "pastel" ? "#f2f5ff" :
                               theme.name === "fantasy" ? "#f7f3f7" :
                               theme.name === "wireframe" ? "#e4e4e4" :
                               theme.name === "black" ? "#000000" :
                               theme.name === "luxury" ? "#000000" :
                               theme.name === "dracula" ? "#282a36" :
                               theme.name === "cmyk" ? "#f5f5f5" :
                               theme.name === "autumn" ? "#e6d9c8" :
                               theme.name === "business" ? "#151d28" :
                               theme.name === "acid" ? "#fbfbfb" :
                               theme.name === "lemonade" ? "#fdfdea" :
                               theme.name === "night" ? "#0f1729" :
                               theme.name === "coffee" ? "#20161f" :
                               theme.name === "winter" ? "#e6e6e6" :
                               theme.name === "dim" ? "#333a45" :
                               theme.name === "nord" ? "#e5e9f0" :
                               theme.name === "sunset" ? "#1e293b" :
                               theme.name === "caramellatte" ? "#E5C89E" :
                               theme.name === "abyss" ? "#171717" :
                               "#f0f0f0"
              }}
            >
              <div className="p-4">
                <h3 className={`font-medium mb-2 text-lg ${
                  ["dark", "synthwave", "halloween", "forest", "aqua", "black", "luxury", "dracula", "business", "night", "coffee", "dim", "sunset", "abyss"].includes(theme.name) 
                  ? "text-white" : theme.name === "caramellatte" ? "#000000" : "text-gray-800"
                }`}>
                  {theme.name}
                </h3>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;