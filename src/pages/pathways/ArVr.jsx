import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ArVr() {
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
          <img src={`${import.meta.env.BASE_URL}images/arvr_bg.jpg`} alt="AR/VR Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10">
          <CardHeader>
            <CardTitle className="text-4xl text-white">AR/VR (Extended Reality) Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg pb-12">
            <p className="text-xl font-semibold opacity-90">Deep Dive Career Guide (2026 Edition)</p>
            <p>
              Architecting the primary interface for the next decade through spatial computing and immersive experiences.
            </p>
          </CardContent>
        </div>
      </Card>

      {/* Video Placeholder */}
      <section className="bg-muted rounded-xl p-8 flex flex-col items-center justify-center border border-border shadow-sm">
        <h3 className="text-2xl font-bold mb-4">Video Overview</h3>
        <div className="w-full max-w-3xl aspect-video bg-background rounded-lg flex items-center justify-center border-none shadow-md overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/QpbJwad6v_s" 
            title="AR VR Career Guide" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section className="space-y-12 max-w-[800px] mx-auto">
        
        {/* 1. Spatial Computing Landscape */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">1. The 2026 Spatial Computing Landscape</h2>
          <p>As of 2026, the Extended Reality (XR) industry has moved past the "trough of disillusionment" into a phase of massive mainstream adoption. This shift is primarily anchored by the ubiquity of the Apple Vision Pro and the Meta Quest ecosystems, which have redefined spatial computing for both consumer and enterprise markets [3]. We are no longer building niche demos; we are architecting the primary interface for the next decade.</p>
          <p>The market currently exhibits a relentless annual growth rate of 30–35% [3]. For the modern developer, the professional landscape has fundamentally changed: there are now over 35,000 open global positions, with a dominant shift toward remote-first cultures, where 65–75% of all job listings are remote-eligible [3].</p>
        </div>

        {/* 2. Core Technical Foundations */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">2. Core Technical Foundations</h2>
          <p>An architect’s choice of engine is a choice of architectural trade-offs. In 2026, the divide between Unity and Unreal is defined by how they handle memory and performance on constrained standalone hardware.</p>
          
          <div className="overflow-x-auto mt-6 mb-8">
            <table className="w-full text-left border-collapse bg-background rounded-lg shadow-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tl-lg">Feature</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20">Unity (C#)</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tr-lg">Unreal Engine (C++)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-semibold">Primary Language</td>
                  <td className="py-3 px-4">C# (Managed)</td>
                  <td className="py-3 px-4">C++ (Native)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Memory Strategy</td>
                  <td className="py-3 px-4">Managed heap with Garbage Collection (GC)</td>
                  <td className="py-3 px-4">Manual memory management / Smart pointers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Logic Model</td>
                  <td className="py-3 px-4">Component-based architecture (ECS) [4]</td>
                  <td className="py-3 px-4">Performance-oriented engine extensions & native plugins [4]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Architectural Trade-off</td>
                  <td className="py-3 px-4">Rapid iteration; GC pressure can cause frame stutters on mobile XR [4]</td>
                  <td className="py-3 px-4">High-fidelity; complex memory management but higher deterministic performance [4]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Typical Use Case</td>
                  <td className="py-3 px-4">Cross-platform apps, mobile AR, enterprise training [4]</td>
                  <td className="py-3 px-4">High-end VR, performance-critical simulation [4]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Strong Programming Fundamentals</h3>
          <p>Senior-level XR engineering requires moving beyond high-level scripting to low-level systems programming. This includes:</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Object-Oriented & Event-Driven Design:</strong> Essential for managing asynchronous inputs—hand tracking, gaze, and voice—without blocking the main thread [4].</li>
            <li><strong>Memory Management:</strong> On standalone headsets, "Mechanical Sympathy" is required to manage the CPU/GPU footprint. Developers must understand hardware caches to prevent frame drops that lead to motion sickness [4].</li>
            <li><strong>Secondary Frameworks:</strong> Proficiency is required across ARKit (iOS), ARCore (Android), OpenXR, WebXR, and A-Frame for lightweight, browser-based spatial experiences [3], [4].</li>
          </ul>
        </div>

        {/* 3. Mathematical Pillars */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">3. The Mathematical and Spatial Pillars</h2>
          <p>In XR, mathematics is the source code of reality. If you do not understand the underlying geometry, your systems will fail.</p>
          
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Linear Algebra</h4>
                <p className="text-sm">Master vectors (dot/cross products) and matrices for coordinate space transformations. Every raycast and collision detection operation relies on this.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Quaternions</h4>
                <p className="text-sm">To avoid "gimbal lock," XR architects use Quaternions (4D complex numbers) to ensure smooth, high-precision rotations.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 border-l-4 border-secondary pl-4 py-2">
            <h4 className="font-bold text-lg mb-2">Mechanical Sympathy & Low-Level Systems</h4>
            <p className="text-sm">High-performance spatial computing requires bypassing OS bottlenecks [5].</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li><strong>OS Bypass:</strong> Avoid standard mmap() for direct I/O to create custom I/O schedulers designed for low-latency XR requirements.</li>
              <li><strong>Data Locality:</strong> Use bitfields and compact structures to maximize hardware cache usage and reduce memory footprint.</li>
            </ul>
          </div>
        </div>

        {/* 4. Immersive Design */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">4. Immersive Design Principles</h2>
          <p className="font-medium text-lg">The ultimate metric for XR is Presence—the psychological illusion of existing within a digital space [4].</p>
          
          <h3 className="text-xl font-bold mt-6 mb-2">Presence and Spatial Audio</h3>
          <p>Achieving presence requires more than just 90fps visuals. It requires Spatial Audio utilizing Head-Related Transfer Functions (HRTF), which mimics how ears receive sound in 3D space [4].</p>
          
          <h3 className="text-xl font-bold mt-6 mb-2">Spatial UI & Interaction</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Viewing Distances:</strong> UI must be placed at comfortable depths (0.5m - 2.0m) to avoid vergence-accommodation conflict [4].</li>
            <li><strong>Depth Layering:</strong> Using Z-axis depth to separate background context from interactive foreground panels [4].</li>
            <li><strong>Natural Interaction:</strong> Designing for hand tracking, gaze, and voice to reduce reliance on legacy controllers [4].</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-destructive">User Comfort and Safety</h3>
          <p>Motion sickness is a failure of engineering. We solve this through:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Locomotion Systems:</strong> Teleportation or "vignetting" to reduce peripheral optic flow [4].</li>
            <li><strong>Visual Stability:</strong> Minimizing "input-to-photon" latency to keep inner ear and eyes in sync [4].</li>
          </ul>
        </div>

        {/* 5. XR/AI Intersection */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">5. The XR/AI Intersection</h2>
          <p>The greatest architectural challenge of 2026 is wrapping Probabilistic Systems (AI) inside Deterministic Systems (Real-time engines).</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>AI-Augmented Workflows:</strong> 92% of developers use AI for generation/refactoring. But architects must ensure AI code doesn't violate the 11ms frame-timing window required for XR comfort [1, 2].</li>
            <li><strong>The "Translator" Role:</strong> Engineers translate statistical model behaviors into deterministic user experiences, validating AI spatial decisions for physical safety [1].</li>
          </ul>
        </div>

        {/* 6. Career Progression */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">6. Career Progression Roadmap</h2>
          <p>The XR path rewards those who blend technical rigor with human-centered judgment.</p>
          <div className="space-y-4 mt-4">
            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="font-bold text-secondary text-xl w-1/3">Junior XR Dev</div>
                <div className="w-2/3">0–2 yrs | $85K – $110K | Mastery: Unity/Unreal, C#/C++, 3D Math, Blender, AI Pair Programming [3]</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="font-bold text-secondary text-xl w-1/3">XR Developer</div>
                <div className="w-2/3">2–4 yrs | $110K – $145K | Mastery: Rendering pipelines, Interaction design, Networking [3]</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="font-bold text-secondary text-xl w-1/3">Senior XR Dev</div>
                <div className="w-2/3">4–7 yrs | $145K – $180K | Mastery: XR Architecture, AI/ML for XR, Azure ML Studio [3]</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="font-bold text-secondary text-xl w-1/3">Lead XR Eng</div>
                <div className="w-2/3">7–11 yrs | $180K – $220K | Mastery: System design, Performance at scale, Cross-platform [3]</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="font-bold text-secondary text-xl w-1/3">Head of Immersive</div>
                <div className="w-2/3">11+ yrs | $200K – $280K | Mastery: Tech Strategy, Platform Economics, Regulatory Awareness [3]</div>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4"><span className="font-bold">Personality Fit:</span> Aligns with Investigative, Realistic, and Conventional types (RIASEC Model) [3].</p>
        </div>

        {/* 7. Performance Optimization */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">7. Performance Optimization</h2>
          <p>In XR, performance is not a feature; it is a functional requirement for safety.</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>The Asset Pipeline:</strong> Distinguish between FBX (for production) and glTF (the "JPEG of 3D" optimized for runtime) [4].</li>
            <li><strong>Bottleneck Mitigation:</strong> Manage draw calls through batching and aggressive Level of Detail (LOD) strategies to maintain frame rates [4].</li>
            <li><strong>Input-to-Photon Latency:</strong> The most critical metric. Aim for sub-20ms latency to maintain visual-vestibular synchrony [4].</li>
          </ul>
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
