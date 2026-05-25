"use client";

import { motion } from "framer-motion";
import { Bot, Braces, Database, Workflow, Cpu, Network } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const layers = [
  { icon: Bot, label: "Multi-Agent Orchestration", tech: "AutoGen • LangGraph • CrewAI", color: "from-blue-500 to-cyan-500" },
  { icon: Braces, label: "LLM & Reasoning Layer", tech: "GPT-4 • Claude • Gemini • Fine-Tuning", color: "from-purple-500 to-pink-500" },
  { icon: Database, label: "RAG & Vector Search", tech: "Qdrant • FAISS • ChromaDB • Embeddings", color: "from-emerald-500 to-teal-500" },
  { icon: Workflow, label: "Tools & API Orchestration", tech: "n8n • MCP • A2A • REST • gRPC", color: "from-orange-500 to-red-500" },
  { icon: Cpu, label: "Memory & Context Systems", tech: "Redis • Buffer • Persistent Memory", color: "from-violet-500 to-indigo-500" },
  { icon: Network, label: "Cloud Infrastructure", tech: "AWS • Azure • Docker • K8s • CI/CD", color: "from-amber-500 to-yellow-500" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary uppercase tracking-widest mb-3 text-sm font-medium">
              About Me
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Agentic AI Developer <br />
              &amp; AI Automation Engineer
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Agentic AI Developer with 3+ years of experience building autonomous AI
              systems, multi-agent workflows, and enterprise-grade RAG applications
              using AutoGen, LangGraph, CrewAI, and LangChain.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Skilled in designing intelligent AI agents with reasoning, memory,
              tool orchestration, vector search, and workflow automation for
              enterprise use cases. Strong expertise in Python, FastAPI,
              vector databases, cloud deployment, and LLMOps.
              Additionally brings 10+ years of experience in Digital Marketing,
              UI/UX, automation, and client strategy.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all">
                <h4 className="font-semibold text-primary mb-1">Multi-Agent AI</h4>
                <p className="text-sm text-muted-foreground">AutoGen, CrewAI, LangGraph</p>
              </div>
              <div className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all">
                <h4 className="font-semibold text-primary mb-1">RAG Systems</h4>
                <p className="text-sm text-muted-foreground">Vector DB, Embeddings, Search</p>
              </div>
              <div className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all">
                <h4 className="font-semibold text-primary mb-1">Cloud &amp; DevOps</h4>
                <p className="text-sm text-muted-foreground">AWS, Azure, Docker, K8s</p>
              </div>
              <div className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all">
                <h4 className="font-semibold text-primary mb-1">Automation</h4>
                <p className="text-sm text-muted-foreground">n8n, APIs, Workflow Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 text-center">
              Agentic AI Architecture Stack
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

              <div className="space-y-6">
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative pl-14 group"
                  >
                    <div className="absolute left-4 top-3 w-4 h-4 rounded-full bg-gradient-to-br shadow-lg shadow-primary/20 ring-2 ring-background"
                      style={{ background: `linear-gradient(135deg, hsl(${210 + i * 30}, 80%, 55%), hsl(${240 + i * 20}, 70%, 60%))` }}
                    />

                    <div className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-3 mb-1.5">
                        <layer.icon className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-sm">{layer.label}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{layer.tech}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Production-Ready • End-to-End • Enterprise Scale
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
