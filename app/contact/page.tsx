"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="min-h-screen py-24 bg-white dark:bg-[#1a1a1a] transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" as const }}
                >
                    <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">
                        Contact
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
                        Let’s Build Something
                        <span className="block text-zinc-400 dark:text-zinc-600">
                            Meaningful.
                        </span>
                    </h1>
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                        Whether you have a project idea, collaboration opportunity, or just
                        want to say hello — I’d love to hear from you.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    className="rounded-3xl p-8 md:p-12 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" as const, stiffness: 70 }}
                >

                    <form className="space-y-8">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f1f] border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f1f] border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f1f] border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </motion.div>

            </div>
        </section >
    );
}