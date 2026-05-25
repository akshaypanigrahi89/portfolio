"use client";

import { motion } from "framer-motion";
import { MessageSquare, Linkedin, Github, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function FreelanceCollaboration() {
  return (
    <AnimatedSection id="freelance" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Freelance &amp; <span className="text-gradient">Collaboration</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 border-primary/10 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              For Freelance &amp; Collaboration Opportunities
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              I help startups, agencies, and businesses build production-grade Agentic AI systems,
              enterprise RAG applications, AI automation platforms, and scalable digital solutions.
              Open to freelance projects, consulting, and collaborations across Generative AI,
              Multi-Agent Systems, LLMOps, Workflow Automation, Digital Marketing, SEO, UI/UX Design,
              Website Development, Marketing Automation, and growth-focused product strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="gradient" size="lg" asChild>
                <a href="mailto:akshaypanigrahi7@gmail.com">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Start a Conversation
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://wa.me/919040915534" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
              <span className="text-sm text-muted-foreground">Find Me Online:</span>
              <a href="https://www.linkedin.com/in/akshaypanigrahi89/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/akshaypanigrahi89" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919040915534" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 text-muted-foreground hover:text-green-400 hover:bg-primary/20 transition-all" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:akshaypanigrahi7@gmail.com" className="p-2 rounded-lg bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
