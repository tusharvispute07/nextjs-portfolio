import ThemeToggleButton from "../ui/ThemeToggleButton";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 z-50 w-full">
            {/* The Border Mask - Creates a subtle "line" that isn't too harsh */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

            <div className="backdrop-blur-xl bg-white/60 dark:bg-[#1a1a1a]/60">
                <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20 transition-all duration-300">

                    {/* Logo - Matching the Hero typography */}
                    <div className="group cursor-pointer">
                        <div className="text-xl font-bold tracking-tighter flex items-center gap-1">
                            <span className="text-foreground">TV</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        </div>
                    </div>

                    {/* Navigation - With more precise spacing and typography */}
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative py-2 text-[13px] font-mono tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
                            >
                                {link.name}
                                {/* Precise Underline Indicator */}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="flex items-center gap-4">
                        <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
                        <ThemeToggleButton />
                    </div>

                </div>
            </div>
        </nav>
    );
}