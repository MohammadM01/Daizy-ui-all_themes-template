import React from "react";

const Features = () => {
    const features = [
        {
            title: "React 19",
            description: "Built on the latest React version for concurrent rendering and server components support.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-blue-400">
                    <circle cx="12" cy="12" r="2.5" />
                    <path d="M12 2a11.08 11.08 0 0 0-3.61.6c-4.43 1.48-6.08 5.75-3.69 9.5 2.22 3.48 7.3 3.48 9.53 0 2.38-3.75.74-8.02-3.7-9.5A11.08 11.08 0 0 0 12 2Z" transform="rotate(-45 12 12)" />
                </svg>
            ),
            gradient: "from-blue-500/10 to-cyan-500/10",
            border: "hover:border-blue-500/50"
        },
        {
            title: "Tailwind CSS 4",
            description: "Experience the speed and flexibility of the newest Tailwind engine with zero-runtime.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-sky-400">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    {/* Abstract icon for Tailwind, replaced generic curve with a stylized shape */}
                    <path d="M17.5 19c0-2.5-2-4.5-4.5-4.5S8.5 16.5 8.5 19" />
                    <path d="M17.5 5c0 2.5-2 4.5-4.5 4.5S8.5 7.5 8.5 5" />
                </svg>
            ),
            gradient: "from-sky-500/10 to-indigo-500/10",
            border: "hover:border-sky-500/50"
        },
        {
            title: "DaisyUI 5",
            description: "The most popular component library for Tailwind CSS. Beautiful, accessible, and themeable.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-primary">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            gradient: "from-primary/10 to-secondary/10",
            border: "hover:border-primary/50"
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-base-200/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
                    Powered by Modern Tech
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 ${feature.border} border-transparent animate-fade-in-up-delay-${index > 0 ? '1' : ''}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-base-100 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="opacity-70 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
