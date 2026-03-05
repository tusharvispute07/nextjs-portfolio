"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 15
            }
        }
    };

    return (
        <main className="min-h-screen bg-white dark:bg-[#1a1a1a] text-zinc-900 dark:text-zinc-100 transition-colors">

            {/* Header / Hero Section */}
            <motion.section
                className="pt-32 pb-16 px-6 max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.nav variants={itemVariants} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
                    <a href="/projects" className="hover:text-foreground transition-colors">Projects</a>
                    <span>/</span>
                    <span className="text-zinc-400">System Architecture</span>
                </motion.nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <motion.div variants={itemVariants} className="lg:col-span-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Full-Stack <br />
                            <span className="text-zinc-400 dark:text-zinc-600">E-commerce App</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                            A high-performance system designed to manage asynchronous workloads across
                            multiple clusters with a focus on fault tolerance and sub-second latency.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-wrap gap-2 pb-2">
                        {['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'AWS'].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 rounded-full uppercase tracking-tighter">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Visual - Following your "premium" aesthetic */}
            <motion.section
                className="px-6 max-w-6xl mx-auto mb-24"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" as const, stiffness: 60 }}
            >
                <div className="aspect-[16/9] rounded-[2rem] bg-zinc-100 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />
                    <div className="w-full h-full flex items-center justify-center p-12">
                        {/* Replace with your Project UI/Dashboard Screenshot */}
                        <div className="w-full h-full bg-zinc-200 dark:bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700">
                            <div className="h-6 w-full bg-zinc-300 dark:bg-zinc-800 flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                                <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                                <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="h-4 w-1/3 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                                <div className="h-32 w-full bg-zinc-300/50 dark:bg-zinc-800/50 rounded"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-20 bg-zinc-300/50 dark:bg-zinc-800/50 rounded"></div>
                                    <div className="h-20 bg-zinc-300/50 dark:bg-zinc-800/50 rounded"></div>
                                    <div className="h-20 bg-zinc-300/50 dark:bg-zinc-800/50 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Details Section */}
            <motion.section
                className="px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-32"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
            >

                {/* Side Info */}
                <div className="space-y-12">
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">Role</h4>
                        <p className="text-lg font-medium">Lead Backend Engineer</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">Metrics</h4>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li>• 99.98% System Uptime</li>
                            <li>• 250ms Avg. Latency</li>
                            <li>• 10k+ Concurrent Tasks</li>
                        </ul>
                    </div>
                    <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-4 transition-all group">
                            VIEW LIVE SITE
                            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                {/* Main Narrative */}
                <div className="md:col-span-2 space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">The Challenge</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                            Most existing solutions struggled with state persistence during sudden node failures.
                            The requirement was to build a system that could guarantee task delivery without
                            sacrificing the speed of an in-memory database.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">The "Unseen Architecture"</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                            By implementing a custom WAL (Write-Ahead Logging) strategy combined with
                            Redis Streams, we created a redundant processing layer. This ensured that even
                            if a worker crashed mid-task, the system would auto-recover and redistribute
                            the load within 50ms.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <span className="text-zinc-400 font-mono text-xs uppercase block mb-2">Security</span>
                            <p className="font-medium">End-to-end encrypted data pipelines.</p>
                        </div>
                        <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <span className="text-zinc-400 font-mono text-xs uppercase block mb-2">Scalability</span>
                            <p className="font-medium">Horizontal autoscaling via Kubernetes.</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}