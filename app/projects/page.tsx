"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                    <span className="text-zinc-400">E-Commerce & CMS</span>
                </motion.nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <motion.div variants={itemVariants} className="lg:col-span-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            E-Commerce Store <br />
                            <span className="text-zinc-400 dark:text-zinc-600">& CMS Dashboard</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                            I built an e-commerce store and its content management system using Next.js, MongoDB, OAuth 2.0, with Stripe integration.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-wrap gap-2 pb-2">
                        {['Next.js', 'MongoDB', 'OAuth 2.0', 'Stripe', 'AWS S3'].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 rounded-full uppercase tracking-tighter">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Visual - Dual Device Layout */}
            <motion.section
                className="px-6 max-w-6xl mx-auto mb-24"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" as const, stiffness: 60 }}
            >
                <div className="aspect-[16/9] md:aspect-21/9 rounded-4xl bg-zinc-100 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                        {/* Desktop View (Background) */}
                        <div className="relative w-[85%] md:w-[70%] lg:w-[60%] aspect-16/10 bg-zinc-200/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 transform md:-translate-x-12 lg:-translate-x-16 -translate-y-4 md:translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                            <Image
                                src="/images/projects/ecommerce-desktop.png"
                                alt="E-Commerce Store Desktop View"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 60vw"
                                priority
                            />
                        </div>

                        {/* Mobile View (Foreground) */}
                        <div className="absolute right-[5%] md:right-[15%] lg:right-[20%] top-[25%] md:top-[15%] w-[30%] md:w-[22%] lg:w-[18%] aspect-9/19 bg-zinc-100 dark:bg-black rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-zinc-300 dark:border-zinc-800 transform translate-y-8 md:translate-y-0 transition-transform duration-500 group-hover:-translate-y-4">
                            {/* Mobile Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-zinc-300 dark:bg-zinc-800 rounded-b-xl z-20"></div>

                            <Image
                                src="/images/projects/ecommerce-mobile.png"
                                alt="E-Commerce Store Mobile View"
                                fill
                                className="object-cover object-top z-10"
                                sizes="(max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
                                priority
                            />
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
                        <p className="text-lg font-medium">Full-Stack Developer</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">Core Features</h4>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li>• Products Catalogue & Search</li>
                            <li>• User Authentication</li>
                            <li>• Order Management</li>
                            <li>• Secure Checkout</li>
                        </ul>
                    </div>
                    <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                        <a href="https://bellavue-store.vercel.app/" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-4 transition-all group">
                            VIEW LIVE SITE
                            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                {/* Main Narrative */}
                <div className="md:col-span-2 space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">E-Commerce Store</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                            The customer-facing application provides a seamless shopping experience with functionalities including a complete products catalogue, order management, user wishlists, product reviews, and secure payment integration via Stripe.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">Content Management System</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                            A dedicated admin dashboard designed to manage the store operations efficiently. It features tools for inventory management, updating featured products on the storefront, tracking orders, and handling overall content updates. All product imagery and media are securely managed and served via AWS S3.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <span className="text-zinc-400 font-mono text-xs uppercase block mb-2">Payments</span>
                            <p className="font-medium">Secure transactions powered by Stripe integration.</p>
                        </div>
                        <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <span className="text-zinc-400 font-mono text-xs uppercase block mb-2">Authentication</span>
                            <p className="font-medium">Robust user access control with OAuth 2.0.</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}