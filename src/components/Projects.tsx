"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AutoFounder AI — Autonomous Startup Builder",
    problem:
      "Turning startup ideas into validated, deployable products required months of manual work across market research, architecture, development, and deployment.",
    solution:
      "Built an autonomous multi-agent SaaS platform using AutoGen, LangGraph & CrewAI that converts startup ideas into deployable products — handling market validation, PRD generation, architecture planning, code generation, and GTM orchestration.",
    tech: [
      "Python",
      "AutoGen",
      "LangGraph",
      "CrewAI",
      "LangChain",
      "FastAPI",
      "AWS",
      "Docker",
      "Kubernetes",
      "Qdrant",
      "Redis",
      "Supabase",
    ],
    impact: "End-to-end autonomous startup generation with memory, reasoning & tool orchestration",
  },
  {
    title: "RAGBase Enterprise Chatbot",
    problem:
      "Enterprise knowledge bases were underutilized — employees spent hours searching for information across fragmented documentation systems.",
    solution:
      "Developed an end-to-end RAG chatbot with document ingestion, chunking, embeddings, semantic retrieval, contextual memory, and prompt engineering for high-accuracy responses.",
    tech: [
      "Python",
      "LangChain",
      "FastAPI",
      "Qdrant",
      "FAISS",
      "OpenAI API",
      "SQL",
      "Docker",
    ],
    impact: "10k+ daily queries with 90%+ retrieval accuracy via vector search & semantic pipelines",
  },
  {
    title: "ResumeBase AI — ATS & Resume Intelligence",
    problem:
      "Recruitment teams lacked intelligent automation for parsing, scoring, and matching candidates to roles — resulting in low placement rates and high manual effort.",
    solution:
      "Built an AI-powered ATS and resume intelligence platform with autonomous agents for resume parsing, semantic similarity matching, candidate scoring, and job matching using RAG pipelines.",
    tech: [
      "Python",
      "AutoGen",
      "LangChain",
      "FastAPI",
      "Vector DB",
      "REST APIs",
      "AWS",
      "SQL",
    ],
    impact: "Automated resume evaluation with semantic matching & agentic scoring workflows",
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
