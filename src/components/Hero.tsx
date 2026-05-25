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
  MessageSquare,
  ExternalLink,
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="glass-card rounded-xl p-5 border-primary/10"
            >
              <p className="text-sm font-medium flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-primary" />
                For Freelance Projects
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need help architecting or building AI systems? I offer consulting on
                Generative AI, Agentic platforms, Graph-RAG, MLOps, and enterprise AI strategy.
              </p>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">Find Me Online:</span>
                <a href="https://www.linkedin.com/in/akshaypanigrahi89/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/akshaypanigrahi89" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://wa.me/917008550331" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-400 transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
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
              <div className="relative w-72 h-72 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-primary/30">
                <Image
                  src="/profile.png"
                  alt="Akshay Panigrahi"
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-3 -left-3 w-14 h-14 border-2 border-purple-500/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
