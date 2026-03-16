import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, PinIcon as Pinterest } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">Permatable</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              From Soil To Table. We are dedicated to sustainable living, composting, permaculture, and organic agriculture. Join us in cultivating a better future.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Pinterest className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/blog" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link to="/about" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Contact</Link></li>
              <li><Link to="/newsletter" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Newsletter</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/blog/category/compost" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Compost</Link></li>
              <li><Link to="/blog/category/permaculture" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Permaculture</Link></li>
              <li><Link to="/blog/category/sustainable-agriculture" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Sustainable Ag</Link></li>
              <li><Link to="/blog/category/organic-gardening" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Organic Gardening</Link></li>
              <li><Link to="/blog/category/soil-health" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Soil Health</Link></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <form className="flex flex-col gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Subscribe</Button>
            </form>
            <div className="text-sm text-secondary-foreground/80 flex flex-col gap-1">
              <p>Operated by MEDAIT LLC</p>
              <p>1209 Mountain Road Place Northeast STE R</p>
              <p>Albuquerque, NM 87110</p>
              <p className="mt-2">+1 202-773-7432</p>
              <p>contact@permatable.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Permatable. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
