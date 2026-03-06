"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess("")

        try {
            const res = await axios.post("/api/contact", {
                name,
                mail: email,
                message
            })

            const data = res.data

            if (data.status === 200) {
                setSuccess(data.message || "Message sent successfully!")

                setName("")
                setEmail("")
                setMessage("")
            } else {
                setError(data.message || "Failed to send message.")
            }

        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                "An error occurred while sending the message. Please try again later."
            )
        } finally {
            setLoading(false)
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        if (name === "name") setName(value)
        if (name === "email") setEmail(value)
        if (name === "message") setMessage(value)
    }

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

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                required
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f1f] border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                required
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f1f] border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f1f] border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                            />
                        </div>

                        {/* Status Messages */}
                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 text-sm">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-900 text-sm">
                                {success}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : null}
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </motion.div>

            </div>
        </section >
    );
}