"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, FlaskConical } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const education = [
  {
    degree: "Product Management with Generative & Agentic AI",
    institution: "BITSoM | 2025 — 2026",
    icon: GraduationCap,
  },
  {
    degree: "MBA — HR & Marketing",
    institution: "IMIT, Odisha | 2018 — 2020",
    icon: GraduationCap,
  },
  {
    degree: "B.Tech — Biotechnology",
    institution: "GIET University | 2007 — 2011",
    icon: FlaskConical,
  },
];

const certifications = [
  { title: "Professional Product Management Certification", icon: Award },
  { title: "Certified Scrum Master", icon: Award },
  { title: "AI Generalist — Build School", icon: BookOpen },
  { title: "Learn Python with AI", icon: BookOpen },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <AnimatedSection id="education" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <edu.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{edu.degree}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{cert.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
