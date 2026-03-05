export default function TechStack() {
    const techGroups = [
        {
            title: "Backend",
            items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis"],
            className: "md:col-span-2", // Primary focus gets the wide card
            icon: "⚙️"
        },
        {
            title: "Frontend",
            items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            className: "md:col-span-1",
            icon: "🎨"
        },
        {
            title: "Tools & Infrastructure",
            items: ["MongoDB", "Docker", "Git", "REST APIs", "AWS", "CI/CD"],
            className: "md:col-span-3", // Wide foundation card
            icon: "🛠️"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#1a1a1a] transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-6">

                <div className="flex flex-col items-center mb-16">
                    <span className="text-accent font-mono text-[10px] tracking-[0.2em] uppercase mb-3 opacity-80">
                        Capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight text-zinc-900 dark:text-white">
                        Tech <span className="text-zinc-300 dark:text-zinc-700 mx-1">/</span> Stack
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {techGroups.map((group) => (
                        <div
                            key={group.title}
                            className={`
                                group relative overflow-hidden p-[1px] rounded-[2rem]
                                bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-700/50 dark:to-transparent
                                transition-all duration-500 hover:scale-[1.01]
                                ${group.className}
                            `}
                        >
                            <div className="relative h-full bg-zinc-50/50 dark:bg-[#242424]/50 backdrop-blur-sm rounded-[1.95rem] p-8 md:p-10">

                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                        {group.title}
                                    </h3>
                                    <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100">
                                        {group.icon}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="
                                                px-4 py-1.5 rounded-full text-[13px] font-medium
                                                bg-white dark:bg-[#1a1a1a] 
                                                border border-zinc-200 dark:border-zinc-800
                                                text-zinc-600 dark:text-zinc-400
                                                group-hover:border-accent/40 group-hover:text-accent transition-all duration-300
                                            "
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 blur-[40px] rounded-full group-hover:bg-accent/10 transition-all duration-700" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}