"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, GitBranch, Cloud, Database, Cpu } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const highlights = [
  { icon: Bot, label: "Generative AI" },
  { icon: GitBranch, label: "Agentic Workflows" },
  { icon: Database, label: "RAG Systems" },
  { icon: Sparkles, label: "LangChain / LangGraph" },
  { icon: Cloud, label: "Cloud AI Infrastructure" },
  { icon: Cpu, label: "Enterprise AI Platforms" },
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
              AI Engineer with 6+ years of experience architecting and deploying
              enterprise-grade Generative AI solutions. I specialize in building
              scalable multi-agent systems, high-precision RAG pipelines, and
              production LLM platforms that drive measurable business impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full AI stack — from designing agentic
              workflows with LangChain and LangGraph to deploying on AWS Bedrock,
              Vertex AI, and Azure. I have delivered platforms achieving 90%+
              accuracy and 40% operational efficiency improvements for enterprise
              clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Bengaluru, I am passionate about bridging the gap between
              cutting-edge AI research and production-ready enterprise systems.
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
