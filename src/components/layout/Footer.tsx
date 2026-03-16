import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, PinIcon as Pinterest } from "lucide-react";

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

          {/* Explore */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/start-here" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Start Here</Link></li>
              <li><Link to="/topics" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Topics</Link></li>
              <li><Link to="/resources" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Resources</Link></li>
              <li><Link to="/tools" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Tools</Link></li>
              <li><Link to="/case-studies" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/blog" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/about" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Contact</Link></li>
              <li><Link to="/newsletter" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Newsletter</Link></li>
            </ul>

            <div className="text-sm text-secondary-foreground/80 flex flex-col gap-1 mt-6">
              <p>Operated by MEDAIT LLC</p>
              <p>Albuquerque, NM 87110</p>
              <p className="mt-1">+1 202-773-7432</p>
              <p>contact@permatable.com</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/privacy" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Permatable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
