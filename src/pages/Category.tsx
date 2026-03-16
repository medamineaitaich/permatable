import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getCategoryBySlug, getPosts } from "../lib/data";

export function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-primary hover:underline flex items-center justify-center font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const posts = getPosts().filter(p => p.categoryId === category.id);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">{category.name}</h1>
        <p className="text-lg text-muted-foreground">
          {category.description}
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
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
          <h3 className="text-2xl font-serif font-medium text-foreground mb-2">No articles found in this category</h3>
          <p className="text-muted-foreground">Check back later for new content.</p>
        </div>
      )}
    </div>
  );
}
