"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
          </motion.div>

          <motion.form
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
                type="text"
                required
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
              disabled={submitted}
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
