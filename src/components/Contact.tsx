"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
  MessageSquare,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Interested in AI solutions, enterprise platforms, or just want to
            connect? Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:akshaypanigrahi7@gmail.com"
              className="flex items-center gap-4 glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">
                  akshaypanigrahi7@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+917008550331"
              className="flex items-center gap-4 glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+91-7008550331</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/akshaypanigrahi89/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">
                  /in/akshaypanigrahi89
                </p>
              </div>
            </a>

            <a
              href="https://github.com/akshaypanigrahi89"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">/akshaypanigrahi89</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-card rounded-lg p-5">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Bengaluru, India</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 border-primary/10">
              <p className="text-sm font-medium flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                For Freelance &amp; Collaboration Opportunities
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I help startups, agencies, and businesses build production-grade Agentic AI systems,
                enterprise RAG applications, AI automation platforms, and scalable digital solutions.
                Open to freelance projects, consulting, and collaborations across Generative AI,
                Multi-Agent Systems, LLMOps, Workflow Automation, Digital Marketing, SEO, UI/UX Design,
                Website Development, Marketing Automation, and growth-focused product strategy.
              </p>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">Find Me Online:</span>
                <a href="https://www.linkedin.com/in/akshaypanigrahi89/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/akshaypanigrahi89" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://wa.me/919040915534" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-400 transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 md:p-8 space-y-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Send a Message</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs text-muted-foreground mb-1.5">
                Subject
              </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="What's this about?"
                />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-muted-foreground mb-1.5">
                Message
              </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
            </div>

            <Button
              type="submit"
              variant="gradient"
              className="w-full"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                <><Loader2 className="mr-2 w-4 h-4 animate-spin" /> Sending...</>
              ) : status === "success" ? (
                <><CheckCircle2 className="mr-2 w-4 h-4" /> Message Sent!</>
              ) : status === "error" ? (
                <><AlertCircle className="mr-2 w-4 h-4" /> Failed — Try Again</>
              ) : (
                <><Send className="mr-2 w-4 h-4" /> Send Message</>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
