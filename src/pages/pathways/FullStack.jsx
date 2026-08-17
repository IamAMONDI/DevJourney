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

      {/* Pathway Hero/Banner */}
      <Card className="relative bg-black text-white border-none shadow-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/full_stack_bg.jpg" alt="Full Stack Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10">
          <CardHeader>
            <CardTitle className="text-4xl text-white">Full-Stack Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg pb-12">
            <p className="text-xl font-semibold opacity-90">Deep Dive Career Guide (2026 Edition)</p>
            <p>
              The architecture of integration. Mastering the hybrid reality of deterministic systems and AI-augmented workflows.
            </p>
          </CardContent>
        </div>
      </Card>

      {/* Video Placeholder */}
      <section className="bg-muted rounded-xl p-8 flex flex-col items-center justify-center border border-border shadow-sm">
        <h3 className="text-2xl font-bold mb-4">Deep Dive Career Guide Video</h3>
        <div className="w-full max-w-3xl aspect-video bg-background rounded-lg flex items-center justify-center border-none shadow-md overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/8cD3biRR0WQ" 
            title="Full-Stack Pathways and AI Integration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section className="space-y-12 max-w-[800px] mx-auto">
        
        {/* 1. Landscape */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">1. The Landscape of Modern Engineering (2026)</h2>
          <p>The technology industry has reached a point of total convergence. The traditional silos that once separated "Full-Stack Development" from "AI Engineering" have dissolved as responsibilities expand and skill expectations overlap [1]. In 2026, a full-stack architect is no longer just a glue for APIs; they are the orchestrators of Large Language Models (LLMs), while AI engineers are increasingly assuming the burden of frontend delivery [1].</p>
          <p>The central question for modern practitioners is no longer whether one role will replace the other, but how quickly you can master the hybrid reality of deterministic and probabilistic systems [1][2].</p>
          
          <div className="border-l-4 border-secondary pl-4 py-2 mt-4 bg-primary/5 rounded-r-lg">
            <h4 className="font-bold text-lg mb-2">Current Market Reality</h4>
            <p className="text-sm">In the 2026 hiring landscape, software roles have become radically interconnected. Success favors the "Hybrid Developer"—the engineer who can navigate the predictable logic of the backend and the statistical uncertainty of the model with equal fluency [1].</p>
          </div>
        </div>

        {/* 2. Full Stack Architecture */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">2. Defining the Core: The Full-Stack Architecture</h2>
          <p>Despite the AI shift, the fundamental responsibility of a Full-Stack Engineer remains the design and maintenance of complete software applications [1]. This work is historically deterministic, prioritizing system integration where defined inputs produce predictable, identical outputs every time [1].</p>
          
          <div className="overflow-x-auto mt-6 mb-8">
            <table className="w-full text-left border-collapse bg-background rounded-lg shadow-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tl-lg">Layer</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20">Primary Function</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tr-lg">Key Tech</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-semibold">Frontend</td>
                  <td className="py-3 px-4">Building responsive interfaces; ensuring intuitive UI/UX and spatial interaction [1][4].</td>
                  <td className="py-3 px-4 text-sm font-mono bg-muted/50 rounded">React, Next.js, WebXR</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Backend</td>
                  <td className="py-3 px-4">Implementing core logic, APIs, and background processes [1].</td>
                  <td className="py-3 px-4 text-sm font-mono bg-muted/50 rounded">Node.js, Python, Rust</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Databases</td>
                  <td className="py-3 px-4">Managing SQL/NoSQL storage and cloud-native deployments for scalability [1].</td>
                  <td className="py-3 px-4 text-sm font-mono bg-muted/50 rounded">PostgreSQL, MongoDB, Vector Databases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Paradigm Shift */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">3. The 2026 Paradigm Shift: AI Augmentation</h2>
          <p>The developer experience (DevEx) has been permanently altered by AI-first tools like GitHub Copilot and Cursor, which have moved beyond simple autocomplete to become active collaborators in the "flow state" [2].</p>
          
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>92% Usage Rate:</strong> Data shows that 92% of developers now utilize AI tools for code generation, refactoring, and comprehensive review [2].</li>
            <li><strong>The New Developer Rhythm:</strong> The modern workflow has transitioned from the manual writing of boilerplate to a cycle of faster iteration and deeper context switching [2].</li>
            <li><strong>Active Collaboration:</strong> Work centers on directing AI intent and rigorously validating the quality of its output rather than raw keyboard input [2].</li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg mt-6">
             <h4 className="font-bold mb-2">AI-Augmented Workflows</h4>
             <p className="text-sm">By 2026, AI automates the "low-value" execution—routine refactoring and documentation updates—allowing engineers to focus on creative problem-solving, architectural tradeoffs, and high-level system design [2].</p>
          </div>
        </div>

        {/* 4. Deterministic vs Probabilistic */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">4. Deterministic vs. Probabilistic Logic</h2>
          <p>While roles overlap, a critical technical divide remains in the underlying logic of the systems they build [1].</p>
          
          <div className="overflow-x-auto mt-6 mb-8">
            <table className="w-full text-left border-collapse bg-background rounded-lg shadow-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tl-lg">Feature</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20">Full-Stack Developer</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tr-lg">AI Engineer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-semibold">Primary Focus</td>
                  <td className="py-3 px-4">Application architecture and UX [1].</td>
                  <td className="py-3 px-4">Model behavior and intelligence [1].</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Logic Type</td>
                  <td className="py-3 px-4">Deterministic: Predictable rules [1].</td>
                  <td className="py-3 px-4">Probabilistic: Statistical learning [1].</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Primary Output</td>
                  <td className="py-3 px-4">Software System: Pass/fail testing [1].</td>
                  <td className="py-3 px-4">Trained Model: Statistical entity [1].</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Success Metrics</td>
                  <td className="py-3 px-4">Uptime, scalability, responsiveness [1][2].</td>
                  <td className="py-3 px-4">Accuracy, precision, recall, latency [1][2].</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm italic text-muted-foreground">Note: AI models suffer from "model drift," meaning they degrade over time as real-world data evolves, requiring constant retraining and monitoring [1][2].</p>
        </div>

        {/* 5. The Hybrid Developer */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">5. The Rise of the "AI-Powered" Hybrid Developer</h2>
          <p>The high-value profile in 2026 is the "AI-Powered" developer: an engineer who uses machine intelligence for execution but relies on human judgment for validation and objective-setting [1][2].</p>
          
          <h3 className="text-xl font-bold mt-6 mb-2 text-secondary">The 2026 Skill Hierarchy:</h3>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Deep Technical Foundations</h4>
                <p className="text-sm">Mastery of C#, Python, or Rust remains the essential baseline for building any reliable system [1][4].</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Critical Thinking</h4>
                <p className="text-sm">The ability to interrogate model outputs and identify when a probabilistic system has failed [1].</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Contextual Judgment</h4>
                <p className="text-sm">Translating statistical outputs into decisions that drive actual business or user value [1].</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Cross-functional Collaboration</h4>
                <p className="text-sm">Bridging the gap between a model's capabilities and the product's UX requirements [1].</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 6. Systems Knowledge */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">6. Specialized Systems Knowledge</h2>
          <p>In the 2026 era, elite developers are moving "lower in the stack" to optimize performance and handle hardware bottlenecks [5].</p>
          
          <h3 className="text-xl font-bold mt-6 mb-2 text-secondary">The Technical Toolkit:</h3>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Hardware Awareness:</strong> Understanding the mechanics of CPU, storage, and network behavior to predict performance without code [5].</li>
            <li><strong>Locality-Driven Design:</strong> Maximizing spatial and temporal locality is the primary source of performance in modern software [5].</li>
            <li><strong>Compactness:</strong> Designing data structures packed into bitfields to optimize hardware cache usage [5].</li>
            <li><strong>Latency Awareness:</strong> Focusing on tail latencies rather than medians to ensure system reliability at scale [5].</li>
          </ul>
          
          <div className="border-l-4 border-destructive pl-4 py-2 mt-6">
            <h4 className="font-bold text-lg mb-2">Mechanical Sympathy</h4>
            <p className="text-sm">This is a developer's understanding of the underlying hardware architecture and its bottlenecks [5]. High-performance engineers use this sympathy to optimize AI-augmented applications, ensuring they maintain the high frame rates and low latency required for spatial computing [4][5].</p>
          </div>
        </div>

        {/* 7. Career Roadmap */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">7. Step-by-Step Career Roadmap</h2>
          
          <div className="space-y-6 mt-6">
            <div className="p-6 bg-muted rounded-lg shadow-sm border border-border">
              <h4 className="text-xl font-bold mb-2">1. Foundations</h4>
              <p className="mb-4 text-foreground/90">Master a core language (C#, Python, or C++) and the 3D math (linear algebra, vectors, quaternions) essential for spatial computing [4][5].</p>
              <div className="bg-secondary/20 text-secondary-foreground p-3 rounded text-sm font-medium">
                💡 <strong>Pro-Tip:</strong> Learn to find and read detailed register-level manuals for the chips you are targeting [5].
              </div>
            </div>

            <div className="p-6 bg-muted rounded-lg shadow-sm border border-border">
              <h4 className="text-xl font-bold mb-2">2. Engine/Framework Mastery</h4>
              <p className="mb-4 text-foreground/90">Gain proficiency in Unity or Unreal for immersive tech, or React for modern web (leveraging WebXR for immersive web experiences) [3][4].</p>
              <div className="bg-secondary/20 text-secondary-foreground p-3 rounded text-sm font-medium">
                💡 <strong>Pro-Tip:</strong> Understand the difference between interrupt-driven (network) and schedule-driven (disk) computing models [5].
              </div>
            </div>

            <div className="p-6 bg-muted rounded-lg shadow-sm border border-border">
              <h4 className="text-xl font-bold mb-2">3. AI Integration</h4>
              <p className="mb-4 text-foreground/90">Learn to integrate inference APIs, manage vector databases, and validate AI-generated code for long-term maintainability [1][2].</p>
              <div className="bg-secondary/20 text-secondary-foreground p-3 rounded text-sm font-medium">
                💡 <strong>Pro-Tip:</strong> AI models degrade; master monitoring and retraining strategies to combat "model drift" [2].
              </div>
            </div>

            <div className="p-6 bg-muted rounded-lg shadow-sm border border-border">
              <h4 className="text-xl font-bold mb-2">4. Portfolio Development</h4>
              <p className="mb-4 text-foreground/90">Build and ship polished demos. Focus on solving real-world problems, such as a technical prototype with advanced spatial tracking [4].</p>
              <div className="bg-secondary/20 text-secondary-foreground p-3 rounded text-sm font-medium">
                💡 <strong>Pro-Tip:</strong> Document your work with videos and source code; employers in 2026 value the proven ability to optimize and ship production-ready assets [4].
              </div>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mt-12 pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <h3 className="font-bold mb-4 text-foreground">References</h3>
          <ul className="space-y-2">
            <li>[1] AI Engineers vs Full-Stack Developers: Evolving Roles - Tutorials Dojo</li>
            <li>[2] AI engineers vs. software engineers: how AI is changing the experience of building software - DX</li>
            <li>[3] AR/VR Developer: Is It Right for You? - JobCannon</li>
            <li>[4] Ar Vr Developer Skills, Tools, and Career Path in 2026 - INAIRSPACE</li>
            <li>[5] Ask HN: What should a systems/low-level software engineer know? - Hacker News</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
