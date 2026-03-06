"use client"; // Next.js 13 app directory

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle ${theme === 'dark' ? 'theme-toggle--toggled' : ''}`}
            onClick={() => toggleTheme()}
            type="button"
            title="Toggle theme"
            aria-label="Toggle theme"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="1.2em"
                height="1.2em"
                fill="currentColor"
                className="theme-toggle__around"
                viewBox="0 0 32 32"
            >
                <clipPath id="theme-toggle__around__cutout">
                    <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
                </clipPath>
                <g clipPath="url(#theme-toggle__around__cutout)">
                    <circle cx="16" cy="16" r="8.4" />
                    <g>
                        <circle cx="16" cy="3.3" r="2.3" />
                        <circle cx="27" cy="9.7" r="2.3" />
                        <circle cx="27" cy="22.3" r="2.3" />
                        <circle cx="16" cy="28.7" r="2.3" />
                        <circle cx="5" cy="22.3" r="2.3" />
                        <circle cx="5" cy="9.7" r="2.3" />
                    </g>
                </g>
            </svg>
        </button>
    );
}