"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Cloud,
  Brain,
  Globe,
  BarChart3,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const achievements = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Operational Efficiency Gain",
    desc: "AI-driven automation and workflow orchestration across enterprise systems",
  },
  {
    icon: Zap,
    value: "90%+",
    label: "RAG Retrieval Accuracy",
    desc: "Enterprise RAG systems with high-precision semantic search pipelines",
  },
  {
    icon: Globe,
    value: "10+",
    label: "Enterprise AI Deployments",
    desc: "Production-grade Agentic AI and RAG systems for global clients",
  },
  {
    icon: Brain,
    value: "3+",
    label: "Years Agentic AI",
    desc: "Building autonomous multi-agent systems with AutoGen, LangGraph & CrewAI",
  },
  {
    icon: Cloud,
    value: "Multi-Cloud",
    label: "Cloud AI Architecture",
    desc: "AWS & Azure — Docker, Kubernetes, CI/CD for scalable AI infrastructure",
  },
  {
    icon: BarChart3,
    value: "10+",
    label: "Years Digital Innovation",
    desc: "Full-stack expertise spanning AI, marketing, product, and automation",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.label}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ach.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {ach.value}
              </div>
              <h3 className="font-semibold text-sm mb-2">{ach.label}</h3>
              <p className="text-xs text-muted-foreground">{ach.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
