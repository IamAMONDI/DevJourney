import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="wrapper">
      <main className="space-y-24 mt-12 mb-24">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground p-12 rounded-xl text-center shadow-lg overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 z-0">
             <img src="/images/tech_hero.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          </div>
          
          <div className="relative z-10 py-8">
            <h2 className="text-5xl font-bold text-secondary mb-6">Discover Your Tech Destiny</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
              Take our interactive assessment to find your perfect Software Engineering specialization and map out your career trajectory.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
              <Link to="/register">Ready? Take the Quiz</Link>
            </Button>
          </div>
        </section>

        {/* Why Choose DevJourney Features */}
        <section className="text-center">
          <h2 className="text-secondary text-3xl font-bold mb-12">Why DevJourney?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl">🧭</div>
              <h3 className="text-xl font-semibold">Guided Pathways</h3>
              <p className="text-muted-foreground">Clear, step-by-step roadmaps curated by industry veterans.</p>
            </div>
            <div className="space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl">🎯</div>
              <h3 className="text-xl font-semibold">Personalized Quiz</h3>
              <p className="text-muted-foreground">An assessment tailored to your logical and creative strengths.</p>
            </div>
            <div className="space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl">📈</div>
              <h3 className="text-xl font-semibold">Track Progress</h3>
              <p className="text-muted-foreground">Save your results and bookmark critical resources for later.</p>
            </div>
          </div>
        </section>

        {/* Explore Pathways Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-secondary text-4xl font-bold mb-4">Explore the Pathways</h2>
            <p className="text-xl text-muted-foreground">Discover the core disciplines defining the future of technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-primary text-primary-foreground border-none hover:scale-[1.02] transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Low-Level / Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">The foundation of performance. Dive into deterministic systems, rigorous memory management, and hardware cache optimization to build robust architecture.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none hover:scale-[1.02] transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">AR/VR (XR) Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Build immersive realities. Master spatial computing, 3D math, and high-frame-rate rendering pipelines to bridge digital content and physical perception.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none hover:scale-[1.02] transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">The architecture of integration. Connect frontend UX, backend services, and cloud-native systems into cohesive, deterministic software workflows.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none hover:scale-[1.02] transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Machine Learning (AI)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Master probabilistic systems. Train, validate, and scale models that derive behavior from data patterns, adapting constantly to mitigate model drift.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-6">
              <Link to="/pathways">View Full Specialization Matrix</Link>
            </Button>
          </div>
        </section>

        {/* Testimonials / Success Stories Placeholder */}
        <section className="bg-muted p-12 rounded-xl">
          <h2 className="text-center text-3xl font-bold mb-12">Hear From Our Engineers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 overflow-hidden flex-shrink-0">
                  <img src="/images/avatar_sarah.jpg" alt="Avatar Sarah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="italic mb-4 text-muted-foreground">"The assessment accurately pinpointed my love for logic and optimization. I'm now a Systems Engineer working on core database engines."</p>
                  <p className="font-bold text-primary">- Sarah J.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 overflow-hidden flex-shrink-0">
                  <img src="/images/avatar_david.jpg" alt="Avatar David" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="italic mb-4 text-muted-foreground">"I was lost between frontend and backend. The full-stack roadmap gave me exactly the structured path I needed."</p>
                  <p className="font-bold text-primary">- David M.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
