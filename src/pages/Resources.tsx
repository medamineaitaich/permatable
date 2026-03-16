import { Link } from "react-router-dom";
import { BookOpen, Download, ExternalLink, FileText, Route } from "lucide-react";
import { Button } from "../components/ui/button";

type ResourceBlock = {
  title: string;
  description: string;
  href: string;
  cta: string;
  note: string;
};

const resourceBlocks: ResourceBlock[] = [
  {
    title: "Beginner Guides",
    description:
      "Start with straightforward introductions to permaculture, composting, and sustainable gardening fundamentals.",
    href: "/start-here",
    cta: "Open Start Here",
    note: "Best for first-time visitors who want a simple entry point.",
  },
  {
    title: "Practical References",
    description:
      "Use category pages to quickly access practical articles on compost, soil, and organic gardening.",
    href: "/topics",
    cta: "Browse Topics",
    note: "Great for finding focused references by subject area.",
  },
  {
    title: "Printable or Downloadable Resources",
    description:
      "We are building downloadable checklists and templates. For now, use the newsletter to receive practical resources as they are released.",
    href: "/newsletter",
    cta: "Join Newsletter",
    note: "Closest current destination while downloadable files are not yet published.",
  },
  {
    title: "Curated Learning Paths",
    description:
      "Follow guided learning paths to move from beginner concepts to applied garden and soil practices.",
    href: "/start-here",
    cta: "Start Learning Path",
    note: "Use Start Here first, then continue with Topics and Blog categories.",
  },
  {
    title: "Trusted External Resources",
    description:
      "Explore article collections that summarize and contextualize high-quality external references.",
    href: "/blog?category=permaculture&q=principles",
    cta: "View Curated Articles",
    note: "Closest existing route for reference-style learning while a dedicated external-library page is pending.",
  },
];

const startingResources = [
  {
    title: "Start Here",
    description: "Understand what Permatable covers and where to begin.",
    href: "/start-here",
  },
  {
    title: "Topics Hub",
    description: "Pick a core learning area and jump into focused content.",
    href: "/topics",
  },
  {
    title: "Hot Composting Guide",
    description: "Begin with a practical, high-impact skill you can apply quickly.",
    href: "/post/ultimate-guide-hot-composting",
  },
  {
    title: "Permaculture Basics Article",
    description: "Build a strong foundation in core permaculture principles.",
    href: "/post/intro-permaculture-design",
  },
];

export function Resources() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Find practical learning materials, beginner guides, and curated next
          steps to help you move from theory to real action.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Resource Library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceBlocks.map((block, i) => (
            <article
              key={block.title}
              className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm"
            >
              <div className="mb-4">
                {i === 0 && <BookOpen className="h-6 w-6 text-primary" />}
                {i === 1 && <FileText className="h-6 w-6 text-primary" />}
                {i === 2 && <Download className="h-6 w-6 text-primary" />}
                {i === 3 && <Route className="h-6 w-6 text-primary" />}
                {i === 4 && <ExternalLink className="h-6 w-6 text-primary" />}
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {block.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {block.description}
              </p>
              <p className="text-sm text-muted-foreground mb-4">{block.note}</p>
              <Link to={block.href} className="text-primary text-sm font-medium hover:underline">
                {block.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-muted/30 rounded-3xl border border-border/40 p-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Recommended Starting Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {startingResources.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl border border-border/50 p-6"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              <Link to={item.href} className="text-primary text-sm font-medium hover:underline">
                Open Resource
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Continue Your Learning Journey
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-3xl">
          Use our guided pages to keep learning at your pace and get practical
          insights delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/start-here">Start Here</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
            <Link to="/tools">Open Tools</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
            <Link to="/topics">Explore Topics</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
            <Link to="/blog">Visit Blog</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
            <Link to="/newsletter">Join Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
