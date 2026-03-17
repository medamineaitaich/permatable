import { motion } from "framer-motion";
import { Leaf, Globe, Users } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Organic farming" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            About Permatable
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto font-medium text-white/90"
          >
            Permatable is a practical learning site for composting, soil health, permaculture, and sustainable gardening.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
            <h2 className="text-3xl md:text-4xl text-center mb-12">The Permatable Story</h2>
            <p>
              Permatable exists to make regenerative growing more understandable and more usable in everyday life. The site brings together practical guidance on composting, soil improvement, permaculture thinking, and garden planning so readers can move from interest to action with more confidence.
            </p>
            <p>
              The core idea behind Permatable is simple: healthy gardens start with healthy soil, and healthy soil starts with better habits. That might mean learning how to compost well, understanding the basics of the soil food web, planning a garden more thoughtfully, or applying permaculture principles on a small and realistic scale. We focus on the kinds of changes people can actually use, whether they are working with a backyard, a few raised beds, or a small urban growing space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 not-prose">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Practical Learning</h3>
                <p className="text-muted-foreground text-sm">We aim to explain regenerative growing in clear, usable terms so readers can apply what they learn without unnecessary complexity.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Soil-First Thinking</h3>
                <p className="text-muted-foreground text-sm">We believe better compost, healthier soil, and smarter garden systems create stronger long-term results than quick fixes.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Steady Progress</h3>
                <p className="text-muted-foreground text-sm">We value small, repeatable improvements that help people grow more skillfully over time rather than trying to do everything at once.</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl text-center mb-12">Our Vision</h2>
            <p>
              We want Permatable to be a trusted place to learn the foundations of regenerative growing and to find practical next steps. Not abstract ideals, but grounded knowledge that helps people compost better, care for soil more deliberately, and make smarter decisions in the garden.
            </p>
            <p>
              Whether you are just getting started or refining an existing practice, Permatable is built to help you learn clearly and act steadily. If you want a more thoughtful, resilient approach to growing food and caring for land, this site is here to support that work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
