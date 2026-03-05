"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="overview"
            className="py-24 w-full flex items-center overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-left"
                    >
                        <span className="text-accent font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block">
                            Background
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
                            Engineering with <br />
                            <span className="text-zinc-400 dark:text-zinc-600">
                                Intent & Precision.
                            </span>
                        </h2>

                        <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
                            <p>
                                I’m a Full Stack Developer with a core focus on the{" "}
                                <span className="text-foreground font-medium">
                                    unseen architecture
                                </span>{" "}
                                of the web. While I enjoy building intuitive user interfaces,
                                my passion lies in solving the complex puzzles that happen behind
                                the scenes.
                            </p>

                            <p>
                                To me, code isn't just about making things work; it's about
                                building{" "}
                                <span className="text-foreground font-medium">
                                    resilient systems
                                </span>{" "}
                                that scale. Whether I'm optimizing database schemas or designing
                                RESTful APIs, I prioritize performance and maintainability above
                                all else.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-800/50">
                            <div>
                                <h4 className="text-2xl font-bold text-foreground">2+</h4>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-1">
                                    Years Experience
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-foreground">99.9%</h4>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-1">
                                    Uptime Mindset
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Removed p-1 and the bg-gradient classes here */}
                        <div className="aspect-square rounded-[3rem] overflow-hidden">
                            <div
                                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                            >
                                {/* Image Wrapper */}
                                <div className="relative w-full h-full flex items-center justify-center">

                                    {/* Day Image */}
                                    <img
                                        src="/images/about/day.png"
                                        alt="Tushar Day Mode"
                                        className="
                      absolute w-[85%] h-auto object-contain
                      transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                      opacity-100 dark:opacity-0
                    "
                                    />

                                    {/* Night Image */}
                                    <img
                                        src="/images/about/night.png"
                                        alt="Tushar Night Mode"
                                        className="
                      absolute w-[85%] h-auto object-contain
                      transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                      opacity-0 dark:opacity-100
                    "
                                    />
                                </div>

                                {/* Subtle Grid Overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, currentColor 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}