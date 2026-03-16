import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Facebook, Twitter, PinIcon as Pinterest, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getAuthorById, getCategoryById, getPosts } from "../lib/data";

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="text-primary hover:underline flex items-center justify-center font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const author = getAuthorById(post.authorId);
  const category = getCategoryById(post.categoryId);
  
  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Get related posts
  const relatedPosts = getPosts()
    .filter(p => p.id !== post.id && (p.categoryId === post.categoryId || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  return (
    <article className="bg-background pb-20">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link to={`/blog/category/${category?.slug}`} className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors">
                {category?.name}
              </Link>
              <span className="text-white/60 text-xs">•</span>
              <span className="text-white/80 text-xs flex items-center">
                <Clock className="mr-1 h-3 w-3" /> {readingTime} min read
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm">
              <img 
                src={author?.profileImage} 
                alt={author?.name} 
                className="w-10 h-10 rounded-full border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <p className="font-medium">{author?.name}</p>
                <p className="text-white/60 text-xs">
                  {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg prose-stone max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-li:text-muted-foreground"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
              <span className="text-sm font-medium text-foreground mr-2 py-1">Tags:</span>
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-muted/30 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img 
                src={author?.profileImage} 
                alt={author?.name} 
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Written by {author?.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{author?.bio}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Share */}
            <div className="sticky top-24 p-6 bg-white rounded-2xl shadow-sm border border-border/50">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center">
                <Share2 className="mr-2 h-5 w-5 text-primary" /> Share this article
              </h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#1877F2] hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#1DA1F2] hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#E60023] hover:text-white transition-colors">
                  <Pinterest className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                <h3 className="font-serif text-lg font-bold text-foreground mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map(rp => (
                    <Link key={rp.id} to={`/post/${rp.slug}`} className="group flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={rp.featuredImage} 
                          alt={rp.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {rp.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {new Date(rp.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
