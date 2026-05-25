"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Server,
  Cloud,
  Database,
  MessageSquare,
  Rocket,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Brain,
    label: "Generative AI & Agentic Systems",
    skills: [
      "LangChain",
      "LangGraph",
      "LangFlow",
      "Multi-Agent Architectures",
      "Prompt Engineering",
      "Fine-Tuning",
    ],
  },
  {
    icon: Cpu,
    label: "LLM & RAG Engineering",
    skills: [
      "RAG Pipelines",
      "Vector DBs",
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "Embeddings",
    ],
  },
  {
    icon: Server,
    label: "Backend Development",
    skills: ["Python", "FastAPI", "Flask", "REST APIs", "GraphQL", "Node.js"],
  },
  {
    icon: Cloud,
    label: "Cloud & Infrastructure",
    skills: [
      "AWS Bedrock",
      "Vertex AI",
      "Azure AI",
      "GCP",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    icon: Database,
    label: "Data Engineering",
    skills: ["SQL", "Kafka", "ETL Pipelines", "Data Lakes", "Apache Spark"],
  },
  {
    icon: MessageSquare,
    label: "Conversational AI",
    skills: [
      "Chatbots",
      "Voice AI",
      "Dialogflow",
      "Rasa",
      "Live Person",
      "NLU",
    ],
  },
  {
    icon: Rocket,
    label: "DevOps & Deployment",
    skills: [
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Monitoring",
      "MLOps",
      "Vercel",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &amp; <span className="text-gradient">Expertise</span>
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
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm leading-tight">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="skill">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
