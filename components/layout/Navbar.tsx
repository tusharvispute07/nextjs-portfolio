export default function NavBar() {
    return (
        <nav className="w-full">
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

                <div className="text-lg font-semibold tracking-tight">
                    TV<span className="text-accent">.</span>
                </div>

                <div className="flex gap-10 text-sm font-medium">
                    <a href="#overview" className="text-foreground/70 hover:text-accent transition-colors">
                        Overview
                    </a>
                    <a href="#projects" className="text-foreground/70 hover:text-accent transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors">
                        Contact
                    </a>
                </div>

                <div className="text-sm text-foreground/60">
                    Mode
                </div>

            </div>
        </nav>
    );
}