import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center relative">
            <div className="max-w-3xl mx-auto px-6 text-center relative">

                {/* Floating Rocket */}
                <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 animate-float text-4xl z-10 ">
                    ⚡
                </div>

                {/* Intro */}
                <p className="text-sm tracking-wider text-foreground/60 uppercase">
                    Hello, I'm
                </p>

                {/* Name with accent surname */}
                <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="text-foreground">Tushar </span>
                    <span className="text-accent">Vispute</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-xl md:text-2xl font-medium text-foreground/80">
                    Backend Focused Full-Stack Software Engineer
                </p>

                {/* Description */}
                <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70">
                    I build scalable backend systems and modern web applications with a
                    focus on performance, structure, and long-term maintainability.
                    Passionate about solving complex engineering problems with clean,
                    efficient solutions.
                </p>

                <div className="mt-10">
                    <Button href="/">Contact Me</Button>
                </div>

            </div>
        </section>
    );
}