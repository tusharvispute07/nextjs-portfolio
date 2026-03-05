"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#1a1a1a]">

            {/* Background Architectural Grid - Subtle and "Backend" themed */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <motion.div
                className="max-w-4xl mx-auto px-6 text-center relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                {/* Status Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-accent font-bold">
                        Available for new projects
                    </span>
                </motion.div>

                {/* Name with refined weights */}
                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                    <span className="text-zinc-400 dark:text-zinc-600 font-light">Tushar</span>
                    <br className="md:hidden" />
                    <span className="text-foreground ml-0 md:ml-4">Vispute</span>
                </motion.h1>

                {/* Professional Title - More space and weight */}
                <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl font-medium text-foreground/80 tracking-tight">
                    Backend Focused <span className="text-accent">/</span> Full-Stack Engineer
                </motion.p>

                {/* High-quality Description - Better line height and width */}
                <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-zinc-500 dark:text-zinc-400 font-normal">
                    Specializing in building robust <span className="text-foreground dark:text-zinc-200">distributed systems</span> and
                    high-performance APIs. I bridge the gap between complex server-side logic and
                    seamless user experiences.
                </motion.p>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button href="/contact"
                    // className="px-8 py-6 rounded-2xl shadow-xl shadow-accent/20"
                    >
                        Get in Touch
                    </Button>
                    <a href="#work" className="text-sm font-semibold hover:text-accent transition-colors py-2 px-4">
                        View Projects →
                    </a>
                </motion.div>

            </motion.div>

            {/* Decorative "Backend" Element - Floating Code Snippet or Symbol */}
            <div className="hidden lg:block absolute bottom-20 left-20 opacity-20 dark:opacity-10 animate-float">
                <pre className="text-[10px] font-mono text-accent select-none">
                    <code>{`GET /api/v1/profile HTTP/1.1\nHost: tushar.dev\nStatus: 200 OK`}</code>
                </pre>
            </div>
        </section>
    );
}