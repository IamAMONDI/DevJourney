import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function FullStack() {
  return (
    <div className="wrapper mt-12 space-y-12 mb-20">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/pathways">← Back to Pathways Overview</Link>
        </Button>
      </div>

      <Card className="bg-[url('/images/simple-steps.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-90 bg-primary text-primary-foreground border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl text-secondary">Full-Stack Development</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg pb-12">
          <p className="text-xl">The Architecture of Integration.</p>
          <p>
            In 2026, Full-Stack engineering has evolved into the "Architecture of Integration," where the primary goal is connecting disparate services into a cohesive, deterministic software system.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">In-Depth Articles</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground italic mb-4">[Add your detailed articles and written content here...]</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Recommended Videos & Resources</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground italic mb-4">[Add YouTube links and further reading links here...]</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
