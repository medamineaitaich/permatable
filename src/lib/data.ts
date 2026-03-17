export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  authorId: string;
  publishDate: string;
  categoryId: string;
  tags: string[];
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

export const categories: Category[] = [
  { id: "1", name: "Compost", slug: "compost", description: "Learn how to turn organic waste into nutrient-rich soil.", icon: "Sprout" },
  { id: "2", name: "Permaculture", slug: "permaculture", description: "Design principles for sustainable human habitats.", icon: "Trees" },
  { id: "3", name: "Sustainable Agriculture", slug: "sustainable-agriculture", description: "Farming practices that protect the environment.", icon: "Tractor" },
  { id: "4", name: "Organic Gardening", slug: "organic-gardening", description: "Grow your own food without synthetic chemicals.", icon: "Flower2" },
  { id: "5", name: "Soil Health", slug: "soil-health", description: "The foundation of all terrestrial life.", icon: "Worms" },
];

export const authors: Author[] = [
  { id: "1", name: "Jane Doe", bio: "Permaculture designer and organic farmer.", profileImage: "https://picsum.photos/seed/jane/200/200" },
  { id: "2", name: "John Smith", bio: "Soil scientist and composting enthusiast.", profileImage: "https://picsum.photos/seed/john/200/200" },
];

export const initialPosts: Post[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Hot Composting",
    slug: "ultimate-guide-hot-composting",
    content: "Hot composting is a fast and efficient way to break down organic matter. It requires a specific ratio of carbon to nitrogen, adequate moisture, and regular turning to maintain high temperatures. This process not only speeds up decomposition but also kills weed seeds and pathogens. \n\n## Getting Started\nTo start a hot compost pile, you need a mix of 'greens' (nitrogen-rich materials like grass clippings and food scraps) and 'browns' (carbon-rich materials like dry leaves and cardboard). Aim for a ratio of roughly 25-30 parts carbon to 1 part nitrogen by weight.\n\n## Maintenance\nKeep the pile moist, like a wrung-out sponge. Turn it every few days to aerate it. The temperature should reach between 130 F and 160 F (55 C - 70 C). If it gets too hot, turn it more frequently. If it's too cool, add more greens or water.",
    excerpt: "Learn the secrets of hot composting to create nutrient-rich soil in weeks, not months.",
    featuredImage: "https://picsum.photos/seed/compost/800/600",
    authorId: "2",
    publishDate: "2023-10-25T10:00:00Z",
    categoryId: "1",
    tags: ["compost", "soil", "gardening"],
    featured: true,
    seoTitle: "Hot Composting Guide | Permatable",
    seoDescription: "Learn how to hot compost efficiently.",
    ogImage: "https://picsum.photos/seed/compost/1200/630"
  },
  {
    id: "2",
    title: "Introduction to Permaculture Design Principles",
    slug: "intro-permaculture-design",
    content: "Permaculture is a design system for creating sustainable human environments. It is based on three core ethics: Earth Care, People Care, and Fair Share. \n\n## The 12 Principles\nDavid Holmgren, co-originator of permaculture, articulated 12 design principles. These include observing and interacting with nature, catching and storing energy, obtaining a yield, and applying self-regulation and accepting feedback. \n\n## Application\nThese principles can be applied to anything from a small balcony garden to a large farm, or even a business or community organization. The goal is to create systems that are ecologically sound and economically viable.",
    excerpt: "Discover the core ethics and principles of permaculture design for a sustainable future.",
    featuredImage: "https://picsum.photos/seed/permaculture/800/600",
    authorId: "1",
    publishDate: "2023-11-02T14:30:00Z",
    categoryId: "2",
    tags: ["permaculture", "design", "sustainability"],
    featured: true,
    seoTitle: "Permaculture Principles | Permatable",
    seoDescription: "An introduction to permaculture design principles.",
    ogImage: "https://picsum.photos/seed/permaculture/1200/630"
  },
  {
    id: "3",
    title: "Building Healthy Soil: The Foundation of Organic Gardening",
    slug: "building-healthy-soil",
    content: "Healthy soil is teeming with life. It's a complex ecosystem of bacteria, fungi, nematodes, earthworms, and other organisms. \n\n## The Soil Food Web\nThese organisms interact in what is known as the soil food web. They break down organic matter, release nutrients, and help build soil structure. \n\n## Practices for Soil Health\nTo build healthy soil, minimize disturbance (like tilling), keep the soil covered with mulch or cover crops, maximize plant diversity, and keep living roots in the soil as much as possible.",
    excerpt: "Understand the soil food web and learn practices to build and maintain healthy soil.",
    featuredImage: "https://picsum.photos/seed/soil/800/600",
    authorId: "2",
    publishDate: "2023-11-15T09:15:00Z",
    categoryId: "5",
    tags: ["soil", "organic", "microbes"],
    featured: false,
    seoTitle: "Building Healthy Soil | Permatable",
    seoDescription: "Learn how to build healthy soil for your garden.",
    ogImage: "https://picsum.photos/seed/soil/1200/630"
  },
  {
    id: "4",
    title: "Permaculture for Beginners: A Simple Guide to Building a Healthy, Productive Garden",
    slug: "permaculture-for-beginners-start-guide",
    content: "Permaculture can feel exciting and overwhelming at the same time. You may be asking: *Where do I begin? What actually matters first?*\n\nThis guide is built to answer those questions clearly. You will learn what permaculture means, what beginners often get wrong, and what to do in your first 30 days without overcomplicating things.\n\nIf you are brand new, you can also bookmark our [Start Here](/start-here) page and come back to this article as your practical roadmap.\n\n## What Is Permaculture (in Plain Language)?\n\nPermaculture is a way of designing gardens and living spaces so they work with nature instead of against it. The goal is simple: create systems that are productive, resilient, and easier to maintain over time.\n\n### A simple definition for beginners\n\nPermaculture is design thinking for sustainable living. In gardening terms, it means making thoughtful choices about soil, water, plants, and layout so each part supports the others.\n\n### Why people use permaculture at home\n\nMost people start for practical reasons:\n\n- They want healthier soil and better harvests.\n- They want to reduce waste and water use.\n- They want a garden that becomes easier to manage each season.\n- They want to grow in a way that is better for the environment.\n\n### What makes it different from regular gardening\n\nTraditional gardening advice often focuses on individual tasks: fertilize this, spray that, plant here. Permaculture asks a bigger question first: *How do these pieces work together as a system?*\n\nFor example, instead of treating compost, mulch, and watering as separate chores, permaculture connects them:\n\n- Compost feeds soil life.\n- Mulch protects moisture and soil temperature.\n- Better soil holds water longer.\n- Healthier plants need fewer interventions.\n\nThat systems mindset is what makes permaculture practical for beginners.\n\n## The 3 Core Ethics You Need to Know\n\nYou do not need to memorize complex theory to start. These three ethics are enough to guide your decisions.\n\n### Earth Care\n\nTake care of soil, water, biodiversity, and long-term ecosystem health. In practice: compost organic matter, avoid unnecessary chemicals, protect soil with mulch, and plant for pollinators.\n\n### People Care\n\nDesign systems that support human well-being, not just plant growth. In practice: place herbs near the kitchen door, create safe paths, and choose routines you can actually maintain.\n\n### Fair Share\n\nUse resources thoughtfully and share surplus when possible. In practice: start with what you need, avoid waste, save seeds, share extra produce, and pass on what you learn.\n\n### How to apply these ethics in everyday decisions\n\nWhen you are unsure what to do, ask:\n\n1. Does this help or harm long-term soil and ecosystem health?\n2. Is this realistic for my time, energy, and budget?\n3. Am I using resources responsibly?\n\nIf the answer is yes to all three, you are usually on the right track.\n\n## What Beginners Usually Get Wrong (and How to Avoid It)\n\nMost beginner mistakes are not about effort. They are about sequence.\n\n### Starting too big too fast\n\nIt is common to plan too much at once: large beds, many crops, multiple systems, all in one season. Result: burnout, inconsistency, and confusion.\n\nBetter approach: start with one clear, manageable zone and expand after one successful cycle.\n\n### Copying designs that do not match your climate\n\nA beautiful garden online might not fit your rainfall, heat, wind, soil type, or local pests. Good permaculture is local and contextual.\n\nBetter approach: observe your site first, then adapt methods to your climate and conditions.\n\n### Ignoring soil and water basics first\n\nMany beginners focus on plants before fixing soil structure and water management. That usually leads to weaker plants and more maintenance.\n\nBetter approach: invest early in compost, mulch, and smart watering. Healthy soil is your foundation.\n\n## Your First Permaculture Steps (Week 1 to Week 4)\n\nThis first month is about setting up strong fundamentals, not perfect results.\n\n### Week 1: Observe your site (sun, shade, wind, water flow)\n\nSpend several short sessions observing your space at different times of day.\n\nTrack:\n\n- Morning vs afternoon sun\n- Wind exposure\n- Areas that stay wet or dry\n- Existing plant health\n- Easy access points from your home\n\nTake notes and simple photos. This becomes your design map.\n\n### Week 2: Improve soil with compost and mulch\n\nNow improve the base layer before planting heavily.\n\nStart with:\n\n- Compost on beds or planting areas\n- Mulch to protect topsoil and reduce moisture loss\n- Gentle watering to support microbial activity\n\nIf you need support material, explore practical references on [Resources](/resources) and topic guides on [Topics](/topics).\n\n### Week 3: Plan simple zones and daily-use areas\n\nPermaculture zones help you place elements by frequency of use.\n\nSimple beginner version:\n\n- Zone 1 (most frequent): herbs, salad greens, daily harvest crops\n- Zone 2: seasonal vegetables and compost area\n- Outer area: lower-maintenance plants\n\nYou can use planning frameworks and worksheet-style support in [Tools](/tools).\n\n### Week 4: Plant a small, low-risk starter bed\n\nKeep it small and focused. Aim for consistency, not variety overload.\n\nBegin with:\n\n- 3 to 5 easy crops suited to your season\n- One compost habit you can keep weekly\n- One observation habit (10 minutes, 2 to 3 times per week)\n\nThis gives you early wins and clear feedback.\n\n## Beginner-Friendly Focus Areas\n\nIf you are wondering where to deepen next, these are the highest-value areas.\n\n### Compost and organic matter\n\nCompost improves soil biology, structure, and nutrient cycling. It is one of the most practical habits for long-term garden health.\n\n### Soil health\n\nHealthy soil means better water retention, stronger roots, and more resilient plants. If your soil improves, everything else gets easier.\n\n### Water-smart gardening\n\nWater strategy matters more than most beginners expect. Mulch, timing, and placement can reduce stress and save effort.\n\n### Simple garden planning\n\nEven a basic layout saves time and prevents frustration. You do not need a perfect design, only intentional placement and manageable routines.\n\nFor deeper learning by subject, use the [Topics](/topics) hub and keep checking new guides on the [Blog](/blog).\n\n## A Practical Starter Checklist\n\nUse this before buying plants or starting a new bed.\n\n### 10 quick checks before you buy plants\n\n1. Do I know my sun hours for this location?\n2. Is this plant suited to my climate and season?\n3. Do I have healthy soil or a plan to improve it first?\n4. Is there a reliable watering plan?\n5. Is this crop realistic for my current schedule?\n6. Can I place it near related plants that support it?\n7. Do I have mulch ready?\n8. Is the bed accessible for harvesting and maintenance?\n9. Have I started small enough?\n10. Do I know what success looks like after 30 days?\n\n### Basic tools and materials to begin\n\nKeep this simple:\n\n- Gloves\n- Hand trowel\n- Pruners\n- Watering can or hose setup\n- Compost source\n- Mulch material\n- Notebook or digital notes for observations\n\nYou can find more practical references and starter paths on [Resources](/resources).\n\n### Good enough first goals for month one\n\nA strong first month can be as simple as:\n\n- One improved bed with compost and mulch\n- One reliable watering routine\n- One small planting area established\n- One page of observation notes each week\n\nThat is real progress.\n\n## Where to Go Next on Permatable\n\nYou do not need to figure everything out at once. Use the right page for your next step.\n\n### Best page if you are brand new\n\nStart with [Start Here](/start-here) for a clear orientation and beginner path.\n\n### Best page if you want topic-based learning\n\nUse [Topics](/topics) to choose a learning area (compost, soil, water, planning, and more).\n\n### Best page if you want practical references and templates\n\nVisit [Resources](/resources) for structured guidance, and [Tools](/tools) for planning-oriented support.\n\nIf you want real-world examples of applied improvements, explore [Case Studies](/case-studies). If you want steady ongoing learning, read current posts on the [Blog](/blog) and join the [Newsletter](/newsletter).\n\n## Final Encouragement: Start Small, Learn Fast, Improve Season by Season\n\nPermaculture is not about building a perfect system on day one. It is about creating a better system one practical decision at a time.\n\nStart with observation. Build soil. Use water wisely. Keep your layout simple. Then learn from what works in your own space and adjust each season.\n\nSmall, consistent improvements will always outperform big plans that never become daily practice.\n\nBefore you move on, choose one action for this week and put it on your calendar. That single step is how this starts.",
    excerpt: "New to permaculture? Learn the basics in plain language, avoid common beginner mistakes, and follow a practical 30-day plan to start at home.",
    featuredImage: "https://picsum.photos/seed/permatable-permaculture-beginners/800/600",
    authorId: "1",
    publishDate: "2026-03-17T10:00:00Z",
    categoryId: "2",
    tags: ["permaculture", "beginners", "garden-planning", "soil-health"],
    featured: true,
    seoTitle: "Permaculture for Beginners: A Simple Guide to Building a Healthy, Productive Garden | Permatable",
    seoDescription: "New to permaculture? Learn the basics in plain language, avoid common beginner mistakes, and follow a practical 30-day plan to start at home.",
    ogImage: "https://picsum.photos/seed/permatable-permaculture-beginners/1200/630"
  }
];

// Helper functions to get data
export const getPosts = () => {
  const stored = localStorage.getItem('permatable_posts');
  if (stored) {
    const storedPosts = JSON.parse(stored) as Post[];
    const mergedPosts = [...storedPosts];

    for (const seedPost of initialPosts) {
      const exists = storedPosts.some(
        post => post.id === seedPost.id || post.slug === seedPost.slug
      );
      if (!exists) mergedPosts.push(seedPost);
    }

    if (mergedPosts.length !== storedPosts.length) {
      localStorage.setItem('permatable_posts', JSON.stringify(mergedPosts));
    }

    return mergedPosts;
  }
  localStorage.setItem('permatable_posts', JSON.stringify(initialPosts));
  return initialPosts;
};

export const getPostBySlug = (slug: string) => {
  return getPosts().find(p => p.slug === slug);
};

export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);
export const getAuthorById = (id: string) => authors.find(a => a.id === id);

export const savePost = (post: Post) => {
  const posts = getPosts();
  posts.push(post);
  localStorage.setItem('permatable_posts', JSON.stringify(posts));
};

