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
            Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto font-medium text-white/90"
          >
            To inspire and empower individuals to cultivate sustainable, thriving ecosystems from the soil up.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
            <h2 className="text-3xl md:text-4xl text-center mb-12">The Permatable Story</h2>
            <p>
              Permatable was born out of a simple observation: the way we grow, consume, and dispose of our food is fundamentally disconnected from the natural cycles of the Earth. We believe that by returning to the principles of permaculture and organic agriculture, we can heal the land, nourish our bodies, and build resilient communities.
            </p>
            <p>
              Our journey started with a small compost bin and a desire to reduce waste. It quickly blossomed into a passion for soil health, regenerative farming, and the intricate web of life that sustains us all. Today, Permatable is a platform dedicated to sharing knowledge, stories, and practical guides for anyone looking to embrace a more sustainable lifestyle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 not-prose">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-muted-foreground text-sm">We advocate for practices that meet our present needs without compromising the ability of future generations to meet theirs.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Regeneration</h3>
                <p className="text-muted-foreground text-sm">Beyond sustainability, we aim to actively restore and improve the ecosystems we interact with, leaving the land better than we found it.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Community</h3>
                <p className="text-muted-foreground text-sm">We believe that real change happens locally, through shared knowledge, mutual support, and collective action.</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl text-center mb-12">Our Vision</h2>
            <p>
              We envision a world where every home has a compost bin, every community has a garden, and every farm operates in harmony with nature. A world where "from soil to table" isn't just a tagline, but a way of life.
            </p>
            <p>
              Whether you're a seasoned farmer, an urban gardener, or simply someone looking to make more conscious choices, we invite you to join us on this journey. Together, we can cultivate a greener, healthier, and more abundant future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
