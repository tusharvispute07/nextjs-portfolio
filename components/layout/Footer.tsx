import { Github, Linkedin, Twitter, Mail } from "lucide-react"; // Using lucide-react for consistent icons

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white dark:bg-[#1a1a1a] pt-24 pb-12 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                {/* Top Section: CTA & Branding */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-zinc-100 dark:border-zinc-800/50">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold tracking-tighter">TV<span className="text-accent">.</span></span>
                            <div className="h-[1px] w-12 bg-zinc-200 dark:bg-zinc-800"></div>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed text-sm">
                            Building resilient backend architectures and seamless digital experiences with a focus on precision and performance.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end justify-center">
                        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 mb-4">
                            Connect with me
                        </p>
                        <div className="flex gap-6">
                            {[
                                { icon: <Github size={20} />, href: "#", label: "GitHub" },
                                { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
                                { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
                                { icon: <Mail size={20} />, href: "mailto:your@email.com", label: "Email" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-zinc-400 hover:text-accent transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright & System Status */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                        <p>© {currentYear} Tushar Vispute</p>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                        <p className="hidden md:block">Handcrafted By Me</p>
                    </div>

                    {/* "Backend" Style Status Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                            SYSTEMS: OPERATIONAL
                        </span>
                    </div>
                </div>

                {/* Subtle visual baseline */}
                <div className="mt-12 h-1 w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-30"></div>
            </div>
        </footer>
    );
}