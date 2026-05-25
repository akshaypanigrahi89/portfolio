"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Briefcase,
  Linkedin,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const competencies = [
  "Multi-Agent AI",
  "RAG Pipelines",
  "LangChain / LangGraph",
  "AutoGen / CrewAI",
  "Vector Databases",
  "Cloud AI (AWS/Azure)",
  "LLMOps",
  "n8n Automation",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="skill" className="text-xs px-3 py-1.5 border-green-500/30 bg-green-500/10 text-green-400">
                <Briefcase className="w-3 h-3 mr-1.5" />
                Open to Freelance &amp; Full-Time Opportunities
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Akshay Panigrahi
              </h1>
              <p className="text-xl sm:text-2xl text-gradient font-semibold mt-1">
                Generative &amp; Agentic AI Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-muted-foreground leading-relaxed max-w-xl"
            >
              Agentic AI Developer with 3+ years building autonomous AI systems,
              multi-agent workflows, and enterprise RAG pipelines using AutoGen,
              LangGraph &amp; CrewAI. 10+ years driving digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="gradient" size="default" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </a>
              </Button>
              <Button variant="secondary" size="default" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-3.5 h-3.5" />
                  View Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
            >
              <a href="https://www.linkedin.com/in/akshaypanigrahi89/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com/akshaypanigrahi89" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="mailto:akshaypanigrahi7@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> Email
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Bengaluru, India
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {competencies.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse-glow scale-110" />
              <div className="relative w-96 h-96 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-primary/30">
                <Image
                  src="/profile.png"
                  alt="Akshay Panigrahi"
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-purple-500/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
