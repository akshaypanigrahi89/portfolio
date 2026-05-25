import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import GridBackground from "@/components/GridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshay Panigrahi | AI Engineer — Generative AI, Agentic AI & RAG Systems",
  description:
    "AI Engineer with 6+ years of experience specializing in Generative AI, Multi-Agent Architectures, RAG Pipelines, and Production-Grade AI Platforms.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "RAG Systems",
    "LangChain",
    "LangGraph",
    "Machine Learning",
    "Akshay Panigrahi",
  ],
  authors: [{ name: "Akshay Panigrahi" }],
  creator: "Akshay Panigrahi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshaypanigrahi.vercel.app",
    siteName: "Akshay Panigrahi | AI Engineer",
    title:
      "Akshay Panigrahi | AI Engineer — Generative AI, Agentic AI & RAG Systems",
    description:
      "AI Engineer with 6+ years of experience specializing in Generative AI, Multi-Agent Architectures, RAG Pipelines, and Production-Grade AI Platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Akshay Panigrahi | AI Engineer — Generative AI, Agentic AI & RAG Systems",
    description:
      "AI Engineer with 6+ years of experience specializing in Generative AI, Multi-Agent Architectures, RAG Pipelines, and Production-Grade AI Platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <ParticleBackground />
        <GridBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
