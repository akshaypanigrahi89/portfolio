"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            className="relative flex justify-center items-center"
          >
            <div className="w-[400px] h-[500px] glass-card rounded-2xl overflow-hidden border-border">
              <Image
                src="/profile.png"
                alt="Akshay Panigrahi"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold">3+ Years</h3>
              <p className="text-sm font-medium">Agentic AI Experience</p>
            </div>

            <div className="absolute top-8 -right-8 glass-card border-border px-5 py-4 rounded-2xl shadow-lg">
              <p className="text-primary text-sm mb-1 font-medium">Core Stack</p>
              <h4 className="font-semibold text-sm">Python • AutoGen • LangChain</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
