import { Link } from "react-router-dom";
import { ClipboardList, Leaf, Table2, Wrench } from "lucide-react";
import { Button } from "../components/ui/button";

type ToolCard = {
  title: string;
  description: string;
  status: "Available Now" | "Coming Soon";
  href: string;
};

const toolCards: ToolCard[] = [
  {
    title: "Plant Propagation Calendar",
    description:
      "Plan seed starting, cuttings, and transplant timing with a seasonal propagation calendar.",
    status: "Coming Soon",
    href: "/blog?category=organic-gardening&q=propagation",
  },
  {
    title: "Compost Inputs Reference",
    description:
      "Use a practical reference for balancing green and brown inputs to build healthier compost faster.",
    status: "Available Now",
    href: "/blog/category/compost",
  },
  {
    title: "Plant Guild Planning Matrix",
    description:
      "Design companion planting relationships and supportive species combinations with more confidence.",
    status: "Coming Soon",
    href: "/blog?category=permaculture&q=guild",
  },
  {
    title: "Permaculture Zone Planning Worksheet",
    description:
      "Map activities by zone so high-frequency tasks stay close to home and maintenance stays realistic.",
    status: "Coming Soon",
    href: "/blog?category=permaculture&q=zone",
  },
  {
    title: "Seasonal Garden Task Lists",
    description:
      "Follow season-by-season checklists for planting, soil care, watering, and simple maintenance tasks.",
    status: "Available Now",
    href: "/blog?category=organic-gardening&q=seasonal",
  },
];

export function Tools() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Tools and Planning Tables
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          This page brings together practical planning tools, worksheets, and
          reference tables that help you apply what you learn. Some resources
          are available now, while others are in active development and coming
          soon.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Tools Library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCards.map((tool) => (
            <article
              key={tool.title}
              className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <Table2 className="h-5 w-5 text-primary" />
                <span
                  className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    tool.status === "Available Now"
                      ? "bg-green-100 text-green-700"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tool.status}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {tool.description}
              </p>
              <Link to={tool.href} className="text-primary text-sm font-medium hover:underline">
                View related guides
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-muted/30 rounded-3xl border border-border/40 p-8">
        <div className="flex items-center gap-2 mb-4">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-3xl font-bold text-foreground">
            How To Use These Tools
          </h2>
        </div>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          Use these tools as action layers on top of your learning content:
        </p>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>
            Begin with{" "}
            <Link to="/start-here" className="text-primary hover:underline">
              Start Here
            </Link>{" "}
            for core concepts and first steps.
          </li>
          <li>
            Use{" "}
            <Link to="/topics" className="text-primary hover:underline">
              Topics
            </Link>{" "}
            to choose the subject area you want to apply.
          </li>
          <li>
            Read related how-to articles in the{" "}
            <Link to="/blog" className="text-primary hover:underline">
              Blog
            </Link>{" "}
            and then apply a matching tool from this page.
          </li>
          <li>
            Revisit your plan weekly and adjust based on season, soil feedback,
            and what is practical in your context.
          </li>
        </ol>
      </section>

      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <Wrench className="h-6 w-6 text-accent" />
          <Leaf className="h-6 w-6 text-accent" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Keep Building Your Practice
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-3xl">
          Continue with curated resources, topic hubs, and practical articles,
          or subscribe for ongoing updates as new tools are published.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
