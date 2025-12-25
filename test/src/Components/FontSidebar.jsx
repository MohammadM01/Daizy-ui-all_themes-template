import React from "react";

const fonts = [
    { name: "Outfit", value: "'Outfit', sans-serif" },
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
    { name: "Poppins", value: "'Poppins', sans-serif" },
    { name: "Montserrat", value: "'Montserrat', sans-serif" },
    { name: "Comic Sans", value: "'Comic Sans MS', 'Comic Sans', cursive" },
    { name: "Lora", value: "'Lora', serif" },
    { name: "Playfair Display", value: "'Playfair Display', serif" },
    { name: "Oswald", value: "'Oswald', sans-serif" },
    { name: "Raleway", value: "'Raleway', sans-serif" },
];

const FontSidebar = ({ currentFont, onFontChange }) => {
    return (
        <div className="w-full h-full bg-base-200 text-base-content flex flex-col border-l border-base-300">
            <div className="p-4 border-b border-base-300 bg-base-100">
                <h2 className="font-bold text-lg flex items-center gap-2">
                    <span className="text-primary">Aa</span> Typography
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-base-100">
                {fonts.map((font) => (
                    <button
                        key={font.name}
                        onClick={() => onFontChange(font.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left group
              ${currentFont === font.name
                                ? 'bg-secondary text-secondary-content shadow-md'
                                : 'hover:bg-base-300'
                            }`}
                    >
                        <div className="flex flex-col">
                            <span className="font-medium">{font.name}</span>
                            <span className="text-xs opacity-70" style={{ fontFamily: font.value }}>The quick brown fox</span>
                        </div>

                        {currentFont === font.name && (
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

export default FontSidebar;
