import React from "react";

const ThemeGrid = () => {
    // Reusing the themes list from ThemeController for consistency
    const themes = [
        { name: "Light", value: "light", colors: ["#4b6bfb", "#ff79c6", "#50fa7b", "#282a36"], background: "#ffffff" },
        { name: "Dark", value: "dark", colors: ["#793ef9", "#2a303c", "#1f2937", "#1d232a"], background: "#1d232a" }, // Updated Dark bg
        { name: "Cupcake", value: "cupcake", colors: ["#65c3c8", "#ef9fbc", "#f9d72f", "#291334"], background: "#f5f0f0" },
        { name: "Bumblebee", value: "bumblebee", colors: ["#e0a82e", "#f9d72f", "#181a2a", "#181a2a"], background: "#f6f5dc" },
        { name: "Emerald", value: "emerald", colors: ["#66cc8a", "#377cfb", "#ff5a5f", "#333333"], background: "#e6f7ec" },
        { name: "Corporate", value: "corporate", colors: ["#4b6bfb", "#7b92b2", "#5fa8d3", "#2b3440"], background: "#e5e6e6" },
        { name: "Synthwave", value: "synthwave", colors: ["#e779c1", "#58c7f3", "#f3cc30", "#2d1b69"], background: "#2d1b69" },
        { name: "Retro", value: "retro", colors: ["#ef9995", "#2cb67d", "#f7d56e", "#260000"], background: "#e4d8b4" },
        { name: "Cyberpunk", value: "cyberpunk", colors: ["#ff7598", "#75d1f0", "#ae58ff", "#000000"], background: "#fff248" }, // Fixed cyberpunk bg
        { name: "Valentine", value: "valentine", colors: ["#e96d7b", "#a991f7", "#43d2ff", "#632c3b"], background: "#f0d6e8" },
        { name: "Halloween", value: "halloween", colors: ["#f28c18", "#6d3a9c", "#ff99af", "#31006b"], background: "#212121" },
        { name: "Garden", value: "garden", colors: ["#ff5692", "#8b5cf6", "#5c7f67", "#ecf4e7"], background: "#e9e7e7" },
        { name: "Forest", value: "forest", colors: ["#1eb854", "#1fd65f", "#149c5f", "#171212"], background: "#171212" },
        { name: "Aqua", value: "aqua", colors: ["#09ecf3", "#966fb3", "#ffe999", "#193349"], background: "#3b8ac4" },
        { name: "Lofi", value: "lofi", colors: ["#808080", "#000000", "#000000", "#000000"], background: "#ffffff" },
        { name: "Pastel", value: "pastel", colors: ["#d1c1fc", "#ff7a90", "#5fe1e4", "#221c30"], background: "#ffffff" },
        { name: "Fantasy", value: "fantasy", colors: ["#6e0b75", "#007ebd", "#f8b360", "#201020"], background: "#ffffff" },
        { name: "Wireframe", value: "wireframe", colors: ["#b8b8b8", "#b8b8b8", "#b8b8b8", "#b8b8b8"], background: "#ffffff" },
        { name: "Black", value: "black", colors: ["#333333", "#333333", "#333333", "#333333"], background: "#000000" },
        { name: "Luxury", value: "luxury", colors: ["#ffffff", "#152747", "#a17c79", "#41002d"], background: "#09090b" },
        { name: "Dracula", value: "dracula", colors: ["#ff79c6", "#8be9fd", "#f1fa8c", "#282a36"], background: "#282a36" },
        { name: "CMYK", value: "cmyk", colors: ["#45aaf2", "#ff6b6b", "#f9ca24", "#2f3542"], background: "#ffffff" },
        { name: "Autumn", value: "autumn", colors: ["#8c0327", "#cb6e17", "#f8da68", "#451a03"], background: "#f1f1f1" },
        { name: "Business", value: "business", colors: ["#1c4e80", "#7c8f8f", "#ea6947", "#23282e"], background: "#212121" },
        { name: "Acid", value: "acid", colors: ["#ff00f2", "#ffa427", "#c3ff00", "#110033"], background: "#fafafa" },
        { name: "Lemonade", value: "lemonade", colors: ["#519903", "#e4dc00", "#ffcc00", "#1f2b06"], background: "#f7f7f7" },
        { name: "Night", value: "night", colors: ["#38bdf8", "#818cf8", "#fc80a5", "#0f1729"], background: "#0f1729" },
        { name: "Coffee", value: "coffee", colors: ["#dc944c", "#306869", "#43a7a7", "#20161f"], background: "#20161f" },
        { name: "Winter", value: "winter", colors: ["#047aff", "#463aa1", "#c149ad", "#021431"], background: "#ffffff" },
        { name: "Dim", value: "dim", colors: ["#9fe88d", "#ff7d58", "#ffc1ae", "#2a303c"], background: "#1c212b" },
        { name: "Nord", value: "nord", colors: ["#5e81ac", "#81a1c1", "#88c0d0", "#4c566a"], background: "#eceff4" },
        { name: "Sunset", value: "sunset", colors: ["#ff5692", "#ffab76", "#ffdc76", "#1c212b"], background: "#1c212b" },
    ];

    const handleThemeChange = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        // Force re-render of components that might rely on theme check
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Customization</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">All Themes</span></h2>
                    <p className="opacity-70 max-w-2xl mx-auto">
                        Click on any card to instantly apply the theme. DaisyUI comes with {themes.length} diverse themes out of the box, or you can create your own.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {themes.map((theme) => (
                        <button
                            key={theme.value}
                            onClick={() => handleThemeChange(theme.value)}
                            className="group relative overflow-hidden rounded-2xl border border-base-content/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-left"
                            style={{ backgroundColor: theme.background }}
                        >
                            {/* Theme Preview Colors */}
                            <div className="absolute top-0 right-0 p-2 flex gap-1 z-10">
                                {theme.colors.slice(0, 3).map((color, idx) => (
                                    <div
                                        key={idx}
                                        className="w-3 h-3 rounded-full ring-1 ring-white/20"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            <div className="h-32 flex items-end p-4">
                                <span className={`font-bold text-lg ${['dark', 'forest', 'black', 'luxury', 'dracula', 'night', 'coffee', 'dim', 'sunset', 'business', 'halloween', 'synthwave'].includes(theme.value)
                                        ? 'text-white'
                                        : 'text-gray-900'
                                    }`}>
                                    {theme.name}
                                </span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThemeGrid;
