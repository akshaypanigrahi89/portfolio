"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Hiring Intelligence Platform",
    problem:
      "Enterprise recruitment teams spent 60% of their time screening resumes and scheduling interviews manually, leading to slow hires and missed talent.",
    solution:
      "Built an AI-powered platform using multi-agent RAG architecture that automates resume parsing, skill matching, interview scheduling, and candidate ranking.",
    tech: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "AWS Bedrock",
      "FAISS",
      "Docker",
    ],
    impact: "90% reduction in screening time, 40% faster time-to-hire",
  },
  {
    title: "Enterprise RAG Chatbot",
    problem:
      "Enterprise knowledge bases were underutilized — employees spent hours searching for information across fragmented documentation systems.",
    solution:
      "Developed a production RAG chatbot with multi-source retrieval, citation tracking, and conversational memory using LLMs and vector databases.",
    tech: [
      "LangChain",
      "Pinecone",
      "OpenAI",
      "FastAPI",
      "Next.js",
      "Kubernetes",
    ],
    impact: "10k+ daily queries with 90%+ accuracy, 60% faster information retrieval",
  },
  {
    title: "AI Recruitment Platform",
    problem:
      "Recruitment agencies lacked intelligent automation for matching candidates to roles, leading to low placement rates and high manual effort.",
    solution:
      "Created an end-to-end AI recruitment platform with automated candidate sourcing, AI matching, and predictive analytics for hiring success.",
    tech: [
      "Python",
      "LangFlow",
      "Vertex AI",
      "Cloud SQL",
      "React",
      "Docker",
    ],
    impact: "50% improvement in placement rate, 40% operational efficiency gain",
  },
  {
    title: "Conversational AI Assistant",
    problem:
      "Customer support teams were overwhelmed with repetitive queries, resulting in high response times and low satisfaction scores.",
    solution:
      "Designed a multilingual conversational AI assistant with intent recognition, sentiment analysis, and seamless human handoff.",
    tech: [
      "Rasa",
      "Dialogflow",
      "NLU",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    impact: "70% automation of support queries, 35% improvement in CSAT scores",
  },
  {
    title: "Cloud Native Analytics Platform",
    problem:
      "Business teams lacked real-time visibility into operational metrics, relying on stale dashboards and manual reporting.",
    solution:
      "Architected a cloud-native analytics platform with streaming data pipelines, real-time dashboards, and AI-driven insights.",
    tech: ["Kafka", "Spark", "GCP", "BigQuery", "Tableau", "Python"],
    impact: "Real-time analytics across 5 departments, 50% reduction in reporting time",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all group"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gradient">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Solution
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="skill">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                      Impact:{" "}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.impact}
                    </span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="secondary" size="sm" asChild>
                      <a href="#">
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-2 items-center justify-center">
                  <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-border flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground px-4">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
