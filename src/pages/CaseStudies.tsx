import { Link } from "react-router-dom";
import { Compass, Lightbulb, Sprout, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";

type CaseStudy = {
  title: string;
  description: string;
  outcome: string;
  status: "Example" | "In Progress" | "Coming Soon";
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Backyard Compost System Upgrade",
    description:
      "A simple compost setup is improved with better input balance, aeration habits, and easier weekly maintenance.",
    outcome: "Focus area: Faster decomposition and better compost quality.",
    status: "Example",
    href: "/blog/category/compost",
  },
  {
    title: "Small Garden Soil Recovery Plan",
    description:
      "A compact growing area moves from low fertility toward healthier soil using organic matter and reduced disturbance.",
    outcome: "Focus area: Soil structure, moisture retention, and plant vigor.",
    status: "Example",
    href: "/post/building-healthy-soil",
  },
  {
    title: "Water-Smart Garden Layout",
    description:
      "A garden plan is reorganized to reduce water loss and improve placement based on daily use and sun patterns.",
    outcome: "Focus area: Water efficiency and practical climate resilience.",
    status: "In Progress",
    href: "/blog?category=sustainable-agriculture&q=water",
  },
  {
    title: "Beginner-Friendly Permaculture Starter Space",
    description:
      "A first project applies simple permaculture principles to a manageable home garden starting point.",
    outcome: "Focus area: Clear first steps and sustainable setup habits.",
    status: "Example",
    href: "/start-here",
  },
  {
    title: "Seasonal Garden Improvement Cycle",
    description:
      "A recurring seasonal workflow helps organize planting, soil care, and maintenance into realistic phases.",
    outcome: "Focus area: Consistent year-round improvement and planning.",
    status: "Coming Soon",
    href: "/blog?category=organic-gardening&q=seasonal",
  },
];

export function CaseStudies() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Case Studies
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Case studies show how regenerative ideas become practical results in
          real gardens and small-scale systems. Use them to learn from applied
          examples and adapt the same patterns to your own context.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Featured Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span
                  className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    study.status === "Example"
                      ? "bg-green-100 text-green-700"
                      : study.status === "In Progress"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {study.status}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {study.description}
              </p>
              <p className="text-sm font-medium text-foreground mb-4">{study.outcome}</p>
              <Link to={study.href} className="text-primary text-sm font-medium hover:underline">
                Explore related content
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-muted/30 rounded-3xl border border-border/40 p-8">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Why Case Studies Help
          </h2>
        </div>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          Examples make theory easier to apply. Use case studies alongside core
          learning pages to move from ideas to action:
        </p>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>
            Start with{" "}
            <Link to="/start-here" className="text-primary hover:underline">
              Start Here
            </Link>{" "}
            for foundations.
          </li>
          <li>
            Use{" "}
            <Link to="/topics" className="text-primary hover:underline">
              Topics
            </Link>{" "}
            to pick your area of focus.
          </li>
          <li>
            Use{" "}
            <Link to="/resources" className="text-primary hover:underline">
              Resources
            </Link>{" "}
            and{" "}
            <Link to="/tools" className="text-primary hover:underline">
              Tools
            </Link>{" "}
            to plan implementation.
          </li>
          <li>
            Read detailed steps in the{" "}
            <Link to="/blog" className="text-primary hover:underline">
              Blog
            </Link>{" "}
            and refine over time.
          </li>
        </ol>
      </section>

      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <Sprout className="h-6 w-6 text-accent" />
          <TrendingUp className="h-6 w-6 text-accent" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Turn Inspiration Into Action
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-3xl">
          Keep going with planning tools, practical resources, and topic guides,
          or subscribe to get future case studies and implementation updates.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/tools">Open Tools</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
            <Link to="/resources">Explore Resources</Link>
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
