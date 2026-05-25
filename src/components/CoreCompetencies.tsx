"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  Database,
  Cloud,
  Workflow,
  Search,
  Palette,
  Code,
  BarChart3,
  Smartphone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const competencies = [
  { icon: Bot, label: "Generative AI & Agentic Systems", desc: "AutoGen, LangGraph, CrewAI, Multi-Agent Architectures" },
  { icon: Braces, label: "LLM & RAG Engineering", desc: "RAG Pipelines, Vector DBs, Embeddings, Prompt Engineering" },
  { icon: Database, label: "Enterprise AI Platforms", desc: "Production AI, LLMOps, Fine-Tuning, Inference Optimization" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS, Azure, Docker, K8s, CI/CD, GitHub Actions" },
  { icon: Workflow, label: "Workflow Automation", desc: "n8n, APIs, MCP, A2A, Event-Driven Architectures" },
  { icon: Code, label: "Backend & API Development", desc: "Python, FastAPI, REST APIs, Microservices, PostgreSQL" },
  { icon: Search, label: "SEO & Digital Marketing", desc: "Technical SEO, Content Strategy, Marketing Automation" },
  { icon: Palette, label: "UI/UX Design & Web Dev", desc: "Responsive Design, Next.js, Tailwind, Framer Motion" },
  { icon: BarChart3, label: "Product Strategy", desc: "Data-Driven Strategy, Roadmapping, Growth Optimization" },
  { icon: Smartphone, label: "Client Management", desc: "Digital Transformation, Requirements, Delivery" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function CoreCompetencies() {
  return (
    <AnimatedSection id="competencies" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {competencies.map((c) => (
            <motion.div
              key={c.label}
              variants={itemVariants}
              className="glass-card rounded-xl p-5 text-center hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
