import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sprout } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <Sprout className="h-24 w-24 text-muted-foreground/30 mx-auto mb-8" />
        <h1 className="font-serif text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-medium text-foreground mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Looks like you've wandered off the path. The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Return Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
