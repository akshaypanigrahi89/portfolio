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
  title: "Akshay Panigrahi | Agentic AI Developer — AutoGen, LangGraph, RAG Systems",
  description:
    "Agentic AI Developer with 3+ years building autonomous AI systems, enterprise RAG pipelines, and scalable AI applications using LLMs and multi-agent frameworks. 10+ years in digital transformation.",
  keywords: [
    "Agentic AI Developer",
    "AutoGen",
    "LangGraph",
    "CrewAI",
    "RAG Systems",
    "Generative AI",
    "Akshay Panigrahi",
  ],
  authors: [{ name: "Akshay Panigrahi" }],
  creator: "Akshay Panigrahi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshaypanigrahi.vercel.app",
    siteName: "Akshay Panigrahi | Agentic AI Developer",
    title:
      "Akshay Panigrahi | Agentic AI Developer — AutoGen, LangGraph, RAG Systems",
    description:
      "Agentic AI Developer with 3+ years building autonomous AI systems, enterprise RAG pipelines, and scalable AI applications using LLMs and multi-agent frameworks. 10+ years in digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Akshay Panigrahi | Agentic AI Developer — AutoGen, LangGraph, RAG Systems",
    description:
      "Agentic AI Developer with 3+ years building autonomous AI systems, enterprise RAG pipelines, and scalable AI applications using LLMs and multi-agent frameworks. 10+ years in digital transformation.",
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
