import { Link } from "react-router-dom";
import { BookOpen, Compass, Leaf, Mail, Sprout } from "lucide-react";
import { Button } from "../components/ui/button";

export function StartHere() {
  const starterTopics = [
    {
      title: "Compost Basics",
      description: "Learn how kitchen scraps become rich soil for healthier plants.",
      href: "/blog/category/compost",
    },
    {
      title: "Soil Health",
      description: "Understand why living soil is the foundation of every garden.",
      href: "/blog/category/soil-health",
    },
    {
      title: "Water and Moisture",
      description: "Explore practical ideas for watering smarter and reducing waste.",
      href: "/blog?q=water",
    },
    {
      title: "Garden Planning",
      description: "Start simple with layout, seasonal timing, and small first steps.",
      href: "/blog?q=planning",
    },
    {
      title: "Sustainable Gardening",
      description: "Build habits that support long-term, low-impact food growing.",
      href: "/blog/category/organic-gardening",
    },
  ];

  const firstReads = [
    {
      title: "The Ultimate Guide to Hot Composting",
      description: "A practical starting point for turning organic waste into soil.",
      href: "/post/ultimate-guide-hot-composting",
    },
    {
      title: "Introduction to Permaculture Design Principles",
      description: "A beginner-friendly overview of permaculture thinking.",
      href: "/post/intro-permaculture-design",
    },
    {
      title: "Building Healthy Soil",
      description: "Clear next steps to improve soil structure and fertility.",
      href: "/post/building-healthy-soil",
    },
    {
      title: "Browse All Articles",
      description: "Use filters and search to find topics that match your goals.",
      href: "/blog",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Start Here
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          New to permaculture and sustainable gardening? This page gives you a
          simple path to understand the basics, explore the right topics, and
          get value from Permatable quickly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg">
            <Link to="/blog">Explore the Blog</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/newsletter">Join the Newsletter</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            What Is Permatable?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Permatable is a practical learning website focused on composting,
            permaculture, soil health, and sustainable food-growing habits. Our
            mission is to make regenerative living easy to understand and apply,
            whether you are growing in a backyard, balcony, or community space.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            What Is Permaculture?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Permaculture is a way of designing gardens, homes, and daily systems
            so they work with nature instead of against it. It is based on three
            core ethics:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Care for the Earth</li>
            <li>Care for People</li>
            <li>Share Surplus Fairly</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          How To Use This Website
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl border border-border/50 p-6">
            <Compass className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Start With Topics
            </h3>
            <p className="text-sm text-muted-foreground">
              Begin with a beginner-friendly topic, then narrow down to what you
              can apply this week.
            </p>
          </article>
          <article className="bg-white rounded-2xl border border-border/50 p-6">
            <BookOpen className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Read Practical Guides
            </h3>
            <p className="text-sm text-muted-foreground">
              Use the blog to find step-by-step articles, category pages, and
              searchable posts.
            </p>
          </article>
          <article className="bg-white rounded-2xl border border-border/50 p-6">
            <Sprout className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Take Small Actions
            </h3>
            <p className="text-sm text-muted-foreground">
              Pick one change at a time, test it, and build momentum through
              simple habits.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Start With These Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {starterTopics.map((topic) => (
            <article
              key={topic.title}
              className="bg-white rounded-2xl border border-border/50 p-6"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {topic.description}
              </p>
              <Link to={topic.href} className="text-primary text-sm font-medium hover:underline">
                Explore topic
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
          Recommended First Reads and Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {firstReads.map((resource) => (
            <article
              key={resource.title}
              className="bg-white rounded-2xl border border-border/50 p-6"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {resource.description}
              </p>
              <Link to={resource.href} className="text-primary text-sm font-medium hover:underline">
                Read now
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-accent" />
            <Leaf className="h-6 w-6 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Get Beginner Tips in Your Inbox
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Join the newsletter for clear weekly guidance, beginner checklists,
            and practical next steps so you can keep progressing without feeling
            overwhelmed.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/newsletter">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
