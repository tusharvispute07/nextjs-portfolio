import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/Navbar";
import ThemeProvider from "@/context/ThemeContext";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tushar Vispute | Full-Stack Engineer",
  description:
    "Backend-focused full-stack software engineer building scalable systems and modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/around.min.css"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}