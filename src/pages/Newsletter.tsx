import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-border/50 text-center relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-32 bg-primary/5 -z-10" />
        
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Leaf className="h-10 w-10 text-primary" />
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="font-serif text-3xl font-bold text-foreground">You're on the list!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for subscribing to the Permatable newsletter. Keep an eye on your inbox for our latest updates, guides, and stories.
            </p>
            <Button 
              variant="outline" 
              className="mt-8"
              onClick={() => setIsSuccess(false)}
            >
              Subscribe another email
            </Button>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Join Our Community</h1>
              <p className="text-muted-foreground text-lg">
                Get weekly tips on composting, organic gardening, and sustainable living delivered straight to your inbox. No spam, ever.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-6 pr-32 rounded-full bg-muted/50 border-border text-base focus-visible:ring-primary"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="absolute right-1 top-1 bottom-1 rounded-full px-6 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
