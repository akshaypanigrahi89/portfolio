"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, GitBranch, Cloud, Database, Cpu, Workflow, MousePointerClick } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const highlights = [
  { icon: Bot, label: "AutoGen & Multi-Agent Systems" },
  { icon: GitBranch, label: "LangGraph / CrewAI" },
  { icon: Database, label: "RAG & Vector Search" },
  { icon: Workflow, label: "MCP / A2A Protocols" },
  { icon: Cloud, label: "AWS, Azure, Docker, K8s" },
  { icon: MousePointerClick, label: "n8n & Workflow Automation" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Agentic AI Developer with 3+ years building autonomous AI systems
              using AutoGen, LangGraph, CrewAI, and LangChain. I specialize in
              multi-agent architectures, enterprise RAG pipelines, and scalable
              AI-powered applications using LLMs and agentic frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring deep expertise in Python, vector databases (Qdrant, FAISS),
              FastAPI microservices, cloud deployment (AWS, Azure, Docker, K8s),
              and LLMOps. Additionally, 10+ years in Digital Marketing Agencies
              spanning SEO, UI/UX, web development, automation, and client strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Bengaluru, I bridge the gap between cutting-edge Agentic AI
              and real-world enterprise impact — delivering production-grade systems
              with 90%+ accuracy and 40% efficiency gains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-lg p-6 text-center hover:border-primary/30 transition-all group"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium">{item.label}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
