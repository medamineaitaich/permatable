import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { getPosts, categories } from "../lib/data";

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const currentCategory = searchParams.get("category");
  const sortOrder = searchParams.get("sort") || "newest";

  const allPosts = getPosts();
  
  // Filter and sort posts
  let filteredPosts = allPosts;
  
  if (currentCategory) {
    filteredPosts = filteredPosts.filter(p => p.categoryId === categories.find(c => c.slug === currentCategory)?.id);
  }
  
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  filteredPosts.sort((a, b) => {
    const dateA = new Date(a.publishDate).getTime();
    const dateB = new Date(b.publishDate).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      searchParams.set("q", searchQuery);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (slug: string | null) => {
    if (slug) {
      searchParams.set("category", slug);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">The Permatable Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights, guides, and stories about sustainable living, permaculture design, and organic agriculture.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-border/50">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Button 
            variant={!currentCategory ? "default" : "ghost"} 
            onClick={() => handleCategoryChange(null)}
            className="rounded-full"
          >
            All
          </Button>
          {categories.map(c => (
            <Button 
              key={c.id}
              variant={currentCategory === c.slug ? "default" : "ghost"}
              onClick={() => handleCategoryChange(c.slug)}
              className="rounded-full"
            >
              {c.name}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <select 
            value={sortOrder}
            onChange={handleSortChange}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <form onSubmit={handleSearch} className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className="pl-9 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Post Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <Link to={`/post/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
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
                  Read article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-serif font-medium text-foreground mb-2">No articles found</h3>
          <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
          <Button 
            variant="outline" 
            className="mt-6"
            onClick={() => {
              setSearchQuery("");
              searchParams.delete("q");
              searchParams.delete("category");
              setSearchParams(searchParams);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
