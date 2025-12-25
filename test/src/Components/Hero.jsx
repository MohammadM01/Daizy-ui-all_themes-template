import React, { useEffect, useState } from "react";

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="hero min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>
                <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-accent/20 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="hero-content text-center z-10">
                <div className="max-w-4xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="badge badge-primary badge-outline mb-6 p-4 font-medium tracking-wide">
                            DAISY UI + TAILWIND CSS 4 + REACT 19
                        </div>
                    </div>

                    <h1 className={`text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stunning</span> UIs
                        <br />
                        <span className="relative inline-block">
                            Effortlessly
                            <svg className="absolute w-full h-3 bottom-1 left-0 text-accent/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className={`py-6 text-xl md:text-2xl opacity-80 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        A modern, professional template packed with all DaisyUI themes.
                        Experience smooth animations, glassmorphism, and instant theme switching.
                    </p>

                    <div className={`flex flex-wrap justify-center gap-4 mt-4 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <button className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                            Get Started
                        </button>
                        <button className="btn btn-ghost btn-lg rounded-full px-8 border border-base-content/20 hover:bg-base-content/5 transition-all duration-300">
                            View Documentation
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
