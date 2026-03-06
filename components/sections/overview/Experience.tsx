"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Perception & Quant",
            role: "Python Developer",
            period: "Feb 2024 — Present",
            description:
                "Led the migration of legacy systems from Oracle to MongoDB and built high-performance FastAPI services powering a large-scale news platform. Developed a fault-tolerant background job server for automating workflows, reducing manual operations by 60%. Integrated AI-powered content intelligence for entity extraction, sentiment analysis, and assisted tagging.",
            stack: ["Python", "FastAPI", "MongoDB", "Next.js", "Redis", "Docker", "OpenAI API"]
        },
        {
            company: "AI Variant",
            role: "Data Science Intern",
            period: "Feb 2022 — Aug 2022",
            description:
                "Built machine learning and NLP models for text classification and predictive analysis using Scikit-learn, TensorFlow, and Keras. Performed large-scale data mining and analysis to generate insights and improve model accuracy for business use cases.",
            stack: ["Python", "Scikit-learn", "TensorFlow", "Keras", "NLP"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section id="experience" className="py-24 bg-white dark:bg-[#1a1a1a]">
            <div className="max-w-5xl mx-auto px-6">

                <div className="flex flex-col mb-16">
                    <span className="text-accent font-mono text-[10px] tracking-[0.2em] uppercase mb-3 opacity-80">
                        Professional Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Experience<span className="text-accent">.</span>
                    </h2>
                </div>

                <motion.div
                    className="space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group"
                        >
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-200 dark:bg-zinc-800 group-last:h-0" />

                            <div className="pl-8 pb-12 relative">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-accent transition-colors duration-300" />

                                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                                    {/* Left: Time & Company */}
                                    <div>
                                        <p className="text-sm font-mono text-accent mb-2">{exp.period}</p>
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                            {exp.company}
                                        </h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                                            {exp.role}
                                        </p>
                                    </div>

                                    {/* Right: Details */}
                                    <div>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Tech used in this role */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}