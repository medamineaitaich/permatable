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
    content: "Hot composting is a fast and efficient way to break down organic matter. It requires a specific ratio of carbon to nitrogen, adequate moisture, and regular turning to maintain high temperatures. This process not only speeds up decomposition but also kills weed seeds and pathogens. \n\n## Getting Started\nTo start a hot compost pile, you need a mix of 'greens' (nitrogen-rich materials like grass clippings and food scraps) and 'browns' (carbon-rich materials like dry leaves and cardboard). Aim for a ratio of roughly 25-30 parts carbon to 1 part nitrogen by weight.\n\n## Maintenance\nKeep the pile moist, like a wrung-out sponge. Turn it every few days to aerate it. The temperature should reach between 130°F and 160°F (55°C - 70°C). If it gets too hot, turn it more frequently. If it's too cool, add more greens or water.",
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
  }
];

// Helper functions to get data
export const getPosts = () => {
  const stored = localStorage.getItem('permatable_posts');
  if (stored) return JSON.parse(stored) as Post[];
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
