import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Wand2, Image as ImageIcon, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { generatePostWithAI, generateImageWithAI, searchLatestNews } from "../lib/ai";
import { savePost, categories, authors } from "../lib/data";

export function Admin() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<any>(null);
  const [imageSize, setImageSize] = useState<"1K" | "2K" | "4K">("1K");
  const [newsQuery, setNewsQuery] = useState("");
  const [newsResults, setNewsResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    
    setIsGenerating(true);
    try {
      const postData = await generatePostWithAI(topic);
      
      // Generate image based on suggested prompt
      let imageUrl = "https://picsum.photos/seed/permaculture/800/600";
      if (postData.suggestedImagePrompt) {
        const generatedImage = await generateImageWithAI(postData.suggestedImagePrompt, imageSize);
        if (generatedImage) {
          imageUrl = generatedImage;
        }
      }

      const newPost = {
        id: Date.now().toString(),
        title: postData.title,
        slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        content: postData.content,
        excerpt: postData.excerpt,
        featuredImage: imageUrl,
        authorId: authors[0].id,
        publishDate: new Date().toISOString(),
        categoryId: categories[Math.floor(Math.random() * categories.length)].id,
        tags: topic.split(" ").map(t => t.toLowerCase()),
        featured: false,
        seoTitle: `${postData.title} | Permatable`,
        seoDescription: postData.excerpt,
        ogImage: imageUrl
      };

      savePost(newPost);
      setGeneratedPost(newPost);
      setTopic("");
    } catch (error) {
      console.error("Failed to generate post:", error);
      alert("Failed to generate post. Check console for details.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSearchNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsQuery) return;

    setIsSearching(true);
    try {
      const results = await searchLatestNews(newsQuery);
      setNewsResults(results);
    } catch (error) {
      console.error("Failed to search news:", error);
      alert("Failed to search news. Check console for details.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI Post Generator */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
          <h2 className="font-serif text-2xl font-bold mb-6 flex items-center">
            <Wand2 className="mr-2 h-6 w-6 text-primary" /> Generate Post with AI
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Uses Gemini 3.1 Pro (Thinking Mode) for deep-dive content and Nano Banana Pro for high-quality featured images.
          </p>
          
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Topic or Keyword</label>
              <Input 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., The benefits of vermicomposting"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center">
                <ImageIcon className="mr-2 h-4 w-4" /> Image Size
              </label>
              <select 
                value={imageSize}
                onChange={(e) => setImageSize(e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="1K">1K (Fastest)</option>
                <option value="2K">2K (High Quality)</option>
                <option value="4K">4K (Ultra Quality)</option>
              </select>
            </div>
            
            <Button type="submit" disabled={isGenerating} className="w-full">
              {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Content & Image...</>
              ) : (
                "Generate & Publish Post"
              )}
            </Button>
          </form>

          {generatedPost && (
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Post Published Successfully!</h3>
              <p className="text-sm text-green-700 mb-4">{generatedPost.title}</p>
              <Button asChild variant="outline" size="sm">
                <a href={`/post/${generatedPost.slug}`} target="_blank" rel="noreferrer">View Post</a>
              </Button>
            </div>
          )}
        </div>

        {/* Search Grounding */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
          <h2 className="font-serif text-2xl font-bold mb-6 flex items-center">
            <Search className="mr-2 h-6 w-6 text-primary" /> Research Latest News
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Uses Gemini 3 Flash with Google Search Grounding to find the latest real-time information.
          </p>
          
          <form onSubmit={handleSearchNews} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search Query</label>
              <Input 
                value={newsQuery}
                onChange={(e) => setNewsQuery(e.target.value)}
                placeholder="e.g., Latest permaculture trends 2026"
                required
              />
            </div>
            
            <Button type="submit" variant="outline" disabled={isSearching} className="w-full">
              {isSearching ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Searching Web...</>
              ) : (
                "Search News"
              )}
            </Button>
          </form>

          {newsResults && (
            <div className="mt-8">
              <h3 className="font-medium mb-2">Results:</h3>
              <div className="text-sm text-muted-foreground prose prose-sm max-w-none mb-4">
                {newsResults.text}
              </div>
              
              {newsResults.grounding && newsResults.grounding.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Sources:</h4>
                  <ul className="space-y-2">
                    {newsResults.grounding.map((chunk: any, i: number) => (
                      chunk.web && (
                        <li key={i} className="text-xs">
                          <a href={chunk.web.uri} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                            {chunk.web.title}
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
