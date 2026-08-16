import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full mt-24">
      {/* Footer Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 px-4 text-center">
        <div className="max-w-[800px] mx-auto space-y-6">
          <h2 className="text-4xl font-bold mb-4">Ready to find your path?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the 3-minute assessment and discover which software engineering specialization fits your mind.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg">
            <Link to="/register">Take the Quiz Now</Link>
          </Button>
        </div>
      </section>

      {/* Standard Footer */}
      <section className="bg-primary text-primary-foreground py-8 text-center border-t border-primary-foreground/20">
        <p className="opacity-80">&copy; 2026 TechTrack Advisor. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4 opacity-80">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/pathways" className="hover:underline">Pathways</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </section>
    </footer>
  );
}
