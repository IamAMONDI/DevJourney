import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="wrapper">
      <main className="space-y-24 mt-12">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl text-center shadow-lg bg-[url('/images/simple-steps.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-opacity-90">
          <h2 className="text-4xl text-secondary mb-4">Discover Your Tech Destiny</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Take our interactive assessment to find your perfect Software Engineering specialization and map out your career trajectory.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg">
            <Link to="/register">Ready? Take the Quiz</Link>
          </Button>
        </section>

        <section>
          <h2 className="text-secondary text-4xl mb-4">Explore the Pathways</h2>
          <p className="text-xl mb-12">Discover the core disciplines defining the future of technology.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Low-Level / Systems Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The foundation of performance. Dive into deterministic systems, rigorous memory management, and hardware cache optimization to build robust, sub-millisecond latency architecture.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none">
              <CardHeader>
                <CardTitle className="text-2xl">AR/VR (XR) Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Build immersive realities. Master spatial computing, 3D math, and high-frame-rate rendering pipelines to bridge digital content and physical perception.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The architecture of integration. Connect frontend UX, backend services, and cloud-native systems into cohesive, deterministic software workflows.</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Machine Learning (AI) Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master probabilistic systems. Train, validate, and scale models that derive behavior from data patterns, adapting constantly to mitigate model drift.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary/10">
              <Link to="/pathways">Read the Full 2026 Strategic Briefing</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
