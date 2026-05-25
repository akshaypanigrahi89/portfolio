"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Cpu, Brain, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "3+", label: "Years Agentic AI", icon: Brain },
  { value: "90%+", label: "RAG Accuracy", icon: Cpu },
  { value: "40%", label: "Efficiency Improvement", icon: Network },
  { value: "10+", label: "Years Digital Innovation", icon: Sparkles },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="skill" className="mb-4 text-sm px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Agentic AI Developer
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Building Scalable{" "}
              <span className="text-gradient">Agentic AI</span> &amp;{" "}
              <span className="text-gradient">Enterprise GenAI</span>{" "}
              Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Agentic AI Developer with 3+ years building autonomous AI systems,
              enterprise RAG pipelines, and multi-agent frameworks using AutoGen, LangGraph &amp; CrewAI.
              10+ years driving digital transformation across AI, marketing &amp; product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gradient" size="lg" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#">
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-lg p-4 text-center hover:border-primary/30 transition-all"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full glass-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-primary/30 mb-4">
                    <Image
                      src="/profile.png"
                      alt="Akshay Panigrahi"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <a href={process.env.NEXT_PUBLIC_PORTFOLIO_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors">Akshay Panigrahi</a>
                  <p className="text-sm text-muted-foreground mt-1">Agentic AI Developer</p>
                  <div className="flex justify-center gap-2 mt-4">
                    {["Py", "AG", "LG"].map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-purple-500/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
