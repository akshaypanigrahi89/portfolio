"use client";

import { motion } from "framer-motion";
import { Briefcase, Building, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const experiences = [
  {
    role: "AI Engineer",
    company: "UHC Staffing",
    period: "2023 — 2026",
    achievements: [
      "Built enterprise RAG systems serving 10k+ daily queries with 90%+ accuracy",
      "Developed multi-agent workflows reducing processing time by 40%",
      "Created AI-powered ATS/CRM/HRMS platforms with intelligent automation",
      "Designed production-grade LLM pipelines on AWS Bedrock & Vertex AI",
      "Architected multi-cloud AI infrastructure serving global enterprise clients",
    ],
  },
  {
    role: "Business Analyst",
    company: "Three Mentors",
    period: "2020 — 2023",
    achievements: [
      "Led data-driven product strategy improving operational efficiency by 35%",
      "Developed analytics dashboards for real-time business intelligence",
      "Bridged technical and business teams for AI product delivery",
      "Implemented automated reporting systems reducing manual effort by 50%",
    ],
  },
  {
    role: "Digital Marketing & Design",
    company: "Earlier Career",
    period: "2016 — 2020",
    achievements: [
      "Managed multi-channel digital campaigns with measurable ROI",
      "Designed and optimized user experiences for web platforms",
      "Built foundational skills in analytics, automation, and design thinking",
      "Transitioned into AI engineering through applied machine learning",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={itemVariants}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30 border-2 border-background" />

                <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
