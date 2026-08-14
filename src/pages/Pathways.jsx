import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Pathways() {
  return (
    <div className="wrapper">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-primary text-4xl font-bold">Career Pathways: 2026 Strategic Briefing</h1>
        <nav className="primary-navigation">
          <ul className="flex gap-6 list-none m-0 p-0 font-bold">
            <li><Link to="/" className="hover:text-secondary text-foreground no-underline">Back to Home</Link></li>
          </ul>
        </nav>
      </header>

      <main className="mt-12 space-y-12">
        <section>
          <h3 className="text-primary text-2xl font-bold mb-6">1. High-Level Pathway Comparative Analysis</h3>
          <div className="overflow-x-auto">
            <Table className="mb-8 border border-border">
              <TableHeader className="bg-primary hover:bg-primary">
                <TableRow>
                  <TableHead className="text-primary-foreground font-bold text-lg border-r border-primary-foreground/20">Dimension</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-lg border-r border-primary-foreground/20">Low-Level / Systems</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-lg border-r border-primary-foreground/20">AR/VR (XR)</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-lg border-r border-primary-foreground/20">Full-Stack</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-lg">Machine Learning (AI)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-card text-card-foreground">
                <TableRow>
                  <TableCell className="font-bold border-r border-b border-border">Primary Focus</TableCell>
                  <TableCell className="border-r border-b border-border">Hardware interaction & performance</TableCell>
                  <TableCell className="border-r border-b border-border">Immersive experience & spatial UI</TableCell>
                  <TableCell className="border-r border-b border-border">Application architecture & UX</TableCell>
                  <TableCell className="border-b border-border">Model behavior & intelligence</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold border-r border-b border-border">Logic Type</TableCell>
                  <TableCell className="border-r border-b border-border">Deterministic</TableCell>
                  <TableCell className="border-r border-b border-border">Deterministic (Spatial)</TableCell>
                  <TableCell className="border-r border-b border-border">Deterministic</TableCell>
                  <TableCell className="border-b border-border">Probabilistic</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <Card className="bg-[url('/images/simple-steps.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-90 bg-primary text-primary-foreground border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-secondary">2. Low-Level / Systems Engineering: The Foundation of Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>Systems programming remains the strategic bedrock of the industry. It focuses on the design of deterministic systems where abstractions are thin and skills possess high longevity because they are rooted in the constant physics of hardware.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Robustness:</strong> Designing systems to handle physical hardware edge cases and failure modes.</li>
              <li><strong>Correctness:</strong> Utilizing strict memory management and ownership models to ensure execution integrity.</li>
              <li><strong>Performance:</strong> Relentless optimization targeting instruction-level throughput and sub-millisecond latency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-secondary">3. AR/VR (XR) Development: Building Immersive Realities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>XR developers specialize in spatial computing, building applications that bridge the gap between digital content and physical perception across healthcare, manufacturing, and social platforms.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Languages:</strong> C#, C++, JavaScript, TypeScript.</li>
              <li><strong>Engines:</strong> Unity, Unreal Engine, WebXR.</li>
              <li><strong>3D Math:</strong> Quaternions, Vectors, Linear Algebra, and Raycasting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[url('/images/simple-steps.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-90 bg-primary text-primary-foreground border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-secondary">4. Full-Stack Development: The Architecture of Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>In 2026, Full-Stack engineering has evolved into the "Architecture of Integration," where the primary goal is connecting disparate services into a cohesive, deterministic software system.</p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-secondary">5. Machine Learning (AI) Engineering: Mastering Probabilistic Systems</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>AI Engineering is the mastery of systems that derive behavior from data patterns rather than predefined rules. This introduces a probabilistic mental model that contrasts sharply with traditional engineering.</p>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
