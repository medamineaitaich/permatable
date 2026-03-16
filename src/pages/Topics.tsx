import { Link } from "react-router-dom";
import { BookOpen, Compass, Leaf, Sprout } from "lucide-react";
import { Button } from "../components/ui/button";

type TopicCard = {
  title: string;
  description: string;
  href: string;
};

const topicCards: TopicCard[] = [
  {
    title: "Permaculture Basics",
    description:
      "Learn core principles for designing resilient systems that work with natural patterns.",
    href: "/blog/category/permaculture",
  },
  {
    title: "Compost and Organic Matter",
    description:
      "Understand how to transform food and yard waste into nutrient-rich compost for healthier soil.",
    href: "/blog/category/compost",
  },
  {
    title: "Soil Health",
    description:
      "Explore the soil food web, fertility basics, and practical ways to build living soil.",
    href: "/blog/category/soil-health",
  },
  {
    title: "Water and Climate",
    description:
      "Discover simple approaches to water conservation, moisture management, and climate-aware growing.",
    href: "/blog?category=sustainable-agriculture&q=water",
  },
  {
    title: "Garden Design and Planning",
    description:
      "Start with layout, zones, and seasonal planning so your garden is easier to maintain.",
    href: "/blog?category=permaculture&q=planning",
  },
  {
    title: "Sustainable Gardening",
    description:
      "Build low-impact gardening habits that support long-term productivity and ecosystem health.",
    href: "/blog/category/organic-gardening",
  },
  {
    title: "Plants and Propagation",
    description:
      "Get practical guidance on choosing plants, multiplying them, and improving plant success.",
    href: "/blog?category=organic-gardening&q=plants",
  },
  {
    title: "Food Forests and Perennials",
    description:
      "Learn the basics of layered planting systems and long-lived crops for resilient harvests.",
    href: "/blog?category=permaculture&q=perennial",
  },
];

export function Topics() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Topics
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          Use topics as your learning map. Each area below helps you focus on a
          core part of regenerative living and quickly find the most relevant
          articles.
        </p>
        <Button asChild size="lg">
          <Link to="/blog">Browse All Articles</Link>
        </Button>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Core Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicCards.map((topic) => (
            <article
              key={topic.title}
              className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {topic.description}
              </p>
              <Link
                to={topic.href}
                className="text-primary text-sm font-medium hover:underline"
              >
                Explore this topic
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-muted/30 rounded-3xl border border-border/40 p-8">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-3xl font-bold text-foreground">
            New Here? Start With These
          </h2>
        </div>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          If you are just getting started, follow this order for the smoothest
          learning path.
        </p>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>
            <Link to="/blog/category/compost" className="text-primary hover:underline">
              Compost and Organic Matter
            </Link>
          </li>
          <li>
            <Link to="/blog/category/soil-health" className="text-primary hover:underline">
              Soil Health
            </Link>
          </li>
          <li>
            <Link to="/blog/category/organic-gardening" className="text-primary hover:underline">
              Sustainable Gardening
            </Link>
          </li>
          <li>
            <Link to="/blog/category/permaculture" className="text-primary hover:underline">
              Permaculture Basics
            </Link>
          </li>
        </ol>
      </section>

      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="h-6 w-6 text-accent" />
            <Sprout className="h-6 w-6 text-accent" />
            <BookOpen className="h-6 w-6 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Keep Learning With Practical Guides
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Continue exploring topic-based articles or get weekly beginner
            insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link to="/resources">Explore Resources</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link to="/tools">Open Tools</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/blog">Go to Blog</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link to="/newsletter">Join Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
