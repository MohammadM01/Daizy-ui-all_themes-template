import React from "react";

const ThemePreview = () => {
    return (
        <div className="p-8 w-full max-w-7xl mx-auto space-y-8 pb-32">

            {/* Header Area */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                        Theme Checker
                    </h1>
                    <p className="opacity-70">Verify text contrast, component styles, and color harmony instantly.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Typography & Backgrounds */}
                <div className="space-y-8">
                    <div className="card bg-base-100 shadow-xl border border-base-content/5">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-50 uppercase tracking-widest mb-4">Typography & Surfaces</h2>

                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-4xl font-extrabold mb-2">Heading 1</h1>
                                    <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
                                    <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
                                    <h4 className="text-xl font-medium">Heading 4</h4>
                                </div>
                                <p className="leading-relaxed opacity-80">
                                    This is a paragraph of text to check readability against the background.
                                    It should have sufficient contrast and look legible in all themes.
                                    <span className="font-bold"> bold text</span>,
                                    <span className="italic"> italic text</span>, and
                                    <span className="underline decoration-primary"> underlined text</span>.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 bg-base-200 rounded-lg text-center">
                                    <span className="font-bold text-base-content/70">bg-base-200</span>
                                </div>
                                <div className="p-4 bg-base-300 rounded-lg text-center">
                                    <span className="font-bold text-base-content/70">bg-base-300</span>
                                </div>
                                <div className="p-4 bg-neutral text-neutral-content rounded-lg text-center">
                                    <span className="font-bold">bg-neutral</span>
                                </div>
                                <div className="p-4 bg-primary text-primary-content rounded-lg text-center">
                                    <span className="font-bold">bg-primary</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Inputs */}
                    <div className="card bg-base-100 shadow-xl border border-base-content/5">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-50 uppercase tracking-widest mb-4">Inputs & Controls</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                <input type="text" placeholder="Primary input" className="input input-bordered input-primary w-full" />
                                <select className="select select-bordered w-full" defaultValue="Pick a color">
                                    <option disabled>Pick a color</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                </select>
                                <div className="flex items-center gap-4">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                                    <input type="radio" name="radio-1" className="radio radio-primary" defaultChecked />
                                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                </div>
                            </div>
                            <div className="mt-4">
                                <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons & Alerts */}
                <div className="space-y-8">
                    <div className="card bg-base-100 shadow-xl border border-base-content/5">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-50 uppercase tracking-widest mb-4">Buttons</h2>
                            <div className="flex flex-wrap gap-2">
                                <button className="btn">Default</button>
                                <button className="btn btn-primary">Primary</button>
                                <button className="btn btn-secondary">Secondary</button>
                                <button className="btn btn-accent">Accent</button>
                                <button className="btn btn-neutral">Neutral</button>
                                <button className="btn btn-ghost">Ghost</button>
                                <button className="btn btn-link">Link</button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <button className="btn btn-outline btn-primary">Outline</button>
                                <button className="btn btn-active btn-primary">Active</button>
                                <button className="btn btn-disabled">Disabled</button>
                                <button className="btn btn-circle btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border border-base-content/5">
                        <div className="card-body">
                            <h2 className="card-title text-sm opacity-50 uppercase tracking-widest mb-4">Alerts & Status</h2>
                            <div className="space-y-2">
                                <div role="alert" className="alert alert-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>Info: New software update available.</span>
                                </div>
                                <div role="alert" className="alert alert-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Success: Your purchase has been confirmed!</span>
                                </div>
                                <div role="alert" className="alert alert-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Warning: Invalid email address!</span>
                                </div>
                                <div role="alert" className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Error: Task failed successfully.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThemePreview;
