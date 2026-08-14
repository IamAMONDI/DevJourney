import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="relative z-50 flex justify-between items-center py-6 px-4 max-w-[1000px] mx-auto border-b border-border/40 mb-8 w-full">
      <Link to="/" className="text-primary text-3xl font-bold no-underline hover:opacity-80 transition-opacity">
        DevJourney
      </Link>
      
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${location.pathname === '/' ? 'bg-accent' : ''} text-lg font-bold bg-transparent`}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`text-lg font-bold bg-transparent ${location.pathname.startsWith('/pathways') ? 'bg-accent' : ''}`}>
              Pathways
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/pathways" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none mb-1 text-primary">Overview</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">View all pathways side-by-side.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/pathways/low-level" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none mb-1">Low-Level / Systems</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Hardware, kernels, and high performance.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/pathways/full-stack" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none mb-1">Full-Stack</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">End-to-end architecture and integration.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/pathways/ar-vr" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none mb-1">AR/VR (XR)</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Spatial computing and immersive 3D.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/pathways/machine-learning" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none mb-1">Machine Learning</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Probabilistic models and AI systems.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${location.pathname === '/contact' ? 'bg-accent' : ''} text-lg font-bold bg-transparent`}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
