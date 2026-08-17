import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="relative z-50 py-4 px-4 md:px-8 border-b border-border/40 mb-8 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-primary text-3xl font-bold no-underline hover:opacity-80 transition-opacity">
          DevJourney
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild className={`text-lg font-bold ${location.pathname === '/' ? 'bg-accent' : ''}`}>
            <Link to="/">Home</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`text-lg font-bold gap-1 ${location.pathname.startsWith('/pathways') ? 'bg-accent' : ''}`}>
                Pathways <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] p-2">
              <DropdownMenuItem className="cursor-pointer p-3" onClick={() => navigate('/pathways')}>
                <div className="flex flex-col">
                  <span className="font-bold text-primary">Overview</span>
                  <span className="text-xs text-muted-foreground">View all pathways side-by-side</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">
                Specialisations
              </DropdownMenuLabel>
              
              <DropdownMenuItem className="cursor-pointer p-3 mt-1" onClick={() => navigate('/pathways/low-level')}>
                <div className="flex flex-col">
                  <span className="font-semibold">Low-Level / Systems</span>
                  <span className="text-xs text-muted-foreground">Hardware, kernels, & high performance</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="cursor-pointer p-3" onClick={() => navigate('/pathways/full-stack')}>
                <div className="flex flex-col">
                  <span className="font-semibold">Full-Stack Engineering</span>
                  <span className="text-xs text-muted-foreground">End-to-end architecture</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="cursor-pointer p-3" onClick={() => navigate('/pathways/ar-vr')}>
                <div className="flex flex-col">
                  <span className="font-semibold">AR/VR (XR) Development</span>
                  <span className="text-xs text-muted-foreground">Spatial computing & 3D environments</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="cursor-pointer p-3" onClick={() => navigate('/pathways/machine-learning')}>
                <div className="flex flex-col">
                  <span className="font-semibold">Machine Learning</span>
                  <span className="text-xs text-muted-foreground">Probabilistic models & AI systems</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" asChild className={`text-lg font-bold ${location.pathname === '/contact' ? 'bg-accent' : ''}`}>
            <Link to="/contact">Contact</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-border/40 pt-4 animate-in slide-in-from-top-4">
          <Button variant="ghost" asChild className={`justify-start text-lg font-bold ${location.pathname === '/' ? 'bg-accent' : ''}`}>
            <Link to="/">Home</Link>
          </Button>
          
          <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20 mx-2">
             <span className="font-bold text-muted-foreground uppercase text-xs tracking-wider">Pathways</span>
             <Link to="/pathways" className="font-semibold text-foreground hover:text-primary">Overview</Link>
             <Link to="/pathways/low-level" className="text-sm font-medium text-muted-foreground hover:text-primary">Low-Level / Systems</Link>
             <Link to="/pathways/full-stack" className="text-sm font-medium text-muted-foreground hover:text-primary">Full-Stack Engineering</Link>
             <Link to="/pathways/ar-vr" className="text-sm font-medium text-muted-foreground hover:text-primary">AR/VR (XR) Development</Link>
             <Link to="/pathways/machine-learning" className="text-sm font-medium text-muted-foreground hover:text-primary">Machine Learning</Link>
          </div>

          <Button variant="ghost" asChild className={`justify-start text-lg font-bold ${location.pathname === '/contact' ? 'bg-accent' : ''}`}>
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
