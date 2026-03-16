import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, Trees, Tractor, Flower2, Worm, Leaf } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { categories, getPosts } from "../lib/data";

export function Home() {
  const posts = getPosts();
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 6);

  const iconMap: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="h-8 w-8 text-primary" />,
    Trees: <Trees className="h-8 w-8 text-primary" />,
    Tractor: <Tractor className="h-8 w-8 text-primary" />,
    Flower2: <Flower2 className="h-8 w-8 text-primary" />,
    Worms: <Worm className="h-8 w-8 text-primary" />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592424001806-613d2a7f5a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Lush organic garden" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            From Soil To Table
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium text-white/90"
          >
            Cultivating sustainable living, permaculture, and organic agriculture for a healthier planet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
              <Link to="/blog">
                Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Stories</h2>
              <p className="text-muted-foreground max-w-2xl">Handpicked articles to inspire your sustainable journey.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-primary font-medium hover:underline">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <Link to={`/post/${post.slug}`} className="block aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {categories.find(c => c.id === post.categoryId)?.name}
                    </span>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-muted-foreground text-xs">
                      {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <Link to={`/post/${post.slug}`}>
                    <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={`/post/${post.slug}`} className="text-primary text-sm font-medium flex items-center mt-auto">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Topics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">Dive deep into the areas of sustainable living that matter most to you.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link 
                  to={`/blog/category/${category.slug}`}
                  className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Join the Permatable Community</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Get weekly tips on composting, organic gardening, and sustainable living delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 focus-visible:ring-accent"
                required
              />
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
