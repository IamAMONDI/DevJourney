import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function LowLevel() {
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
          <img src="/images/low_level_bg.jpg" alt="Low Level Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10">
          <CardHeader>
            <CardTitle className="text-4xl text-white">Low-Level & Systems Engineering</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg pb-12">
            <p className="text-xl font-semibold opacity-90">Deep Dive Career Guide</p>
            <p>
              Systems and low-level engineering are not merely about writing code; they are about mastering the machine itself.
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
            src="https://www.youtube.com/embed/nykOeWgQcHM?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA" 
            title="Low Level Career Guide" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section className="space-y-12 max-w-[800px] mx-auto">
        
        {/* 1. Introduction */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">1. Introduction to the Pathway</h2>
          <p>Unlike high-level application development, which abstracts away the physical reality to focus on user interfaces or business logic, systems engineering is the art of building the foundation [1]. While recent industry trends have shifted focus toward "AI Engineers" who optimize for model behavior and statistical patterns, the systems engineer remains the architect of the deterministic environment that makes such intelligence possible [1, 2].</p>
          <p>The core ethos of the systems programmer is a focus on robustness, correctness, and performance, driven by "first principles" of hardware. As a mentor, I tell my students: you must be able to reason about and predict system behavior without writing a single line of code, based purely on your knowledge of the CPU, storage, and network [5]. In this domain, we do not hope the software works; we ensure it works with maximum efficiency by respecting the physical constraints of the silicon it inhabits.</p>
        </div>

        {/* 2. Paradigm Shift */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">2. The Paradigm Shift: Deterministic Logic</h2>
          <p>To succeed in this field, you must develop "mechanical sympathy"—the essential mental model where you understand hardware bottlenecks so deeply that your software logic aligns perfectly with the machine's performance characteristics [5].</p>
          
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-3 px-4 text-primary font-bold">Feature</th>
                  <th className="py-3 px-4 text-primary font-bold">Systems Engineering (Deterministic)</th>
                  <th className="py-3 px-4 text-primary font-bold">AI/Immersive (Probabilistic)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-semibold">Logic Type</td>
                  <td className="py-3 px-4">Defined inputs produce predictable, identical outputs every time.</td>
                  <td className="py-3 px-4">Logic is learned from data; outputs are statistical.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Primary Focus</td>
                  <td className="py-3 px-4">Hardware registers, memory models, interrupts, OS internals.</td>
                  <td className="py-3 px-4">Model behavior, statistical accuracy, data integrity.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Success Metrics</td>
                  <td className="py-3 px-4">Tail latency, cache hit rates, system uptime.</td>
                  <td className="py-3 px-4">Precision, recall, inference speed.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Problem Solving</td>
                  <td className="py-3 px-4">Tracing explicit execution paths and hardware signals.</td>
                  <td className="py-3 px-4">Tuning hyperparameters and validating models against datasets.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Toolkit */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">3. The Essential Technical Toolkit</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-muted border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">C</h3>
                <p className="text-sm">The industry standard. Its structural flexibility and manual memory management allow you to choose architectures that fit specific technical requirements.</p>
              </CardContent>
            </Card>
            <Card className="bg-muted border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">C++</h3>
                <p className="text-sm">Vital for performance-critical engines (like Unreal). Modern C++ offers high-level abstractions without sacrificing speed.</p>
              </CardContent>
            </Card>
            <Card className="bg-muted border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Rust</h3>
                <p className="text-sm">The emerging favorite for architects who want high-level code that compiles to high-quality assembly, with compile-time correctness.</p>
              </CardContent>
            </Card>
          </div>
          <p className="italic text-muted-foreground mt-4 border-l-4 border-secondary pl-4">Architect’s Note on Concurrency: You must master event-driven architectures (like epoll) to avoid the complexity of "throwing threads at everything". You need to manage memory for constrained devices where every byte is a battlefield for cache efficiency [4, 5].</p>
        </div>

        {/* 4. Hardware Mastery */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">4. Hardware Mastery</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>CPU Internals:</strong> Study block diagrams of functional units and bandwidth connections. Calculate operant latencies from C code.</li>
            <li><strong>Data Structures:</strong> Pack data structures into bitfields to maximize hardware cache efficiency and maintain spatial/temporal locality.</li>
            <li><strong>Peripherals:</strong> Interact with the physical world through UART, SPI, I2C, and GPIO headers.</li>
            <li><strong>Metrics:</strong> Understand that tail latencies (worst-case delay) are far more critical than median latencies for responsive systems.</li>
          </ul>
        </div>

        {/* 5. Operating Environment */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">5. The Operating Environment</h2>
          <p>High-level systems programming often requires bypassing the OS entirely (e.g., using direct I/O with <code className="bg-muted px-1 rounded">io_submit()</code>). In embedded environments, we model complex behaviors using state machine frameworks like Quantum Leaps QP.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Interrupt-Driven:</strong> Essential for networking, where the system reacts to external signals.</li>
            <li><strong>Schedule-Driven:</strong> Typical for storage and disk I/O.</li>
          </ul>
        </div>

        {/* 6. Sector Applications */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">6. Sector-Specific Applications</h2>
          <div className="grid gap-4 md:grid-cols-3">
             <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Automotive</h4>
                <p className="text-sm">Demands safety-critical, "simple and easy" code. The challenge is managing complex interactions between dozens of Electronic Control Units.</p>
             </div>
             <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Healthcare</h4>
                <p className="text-sm">Powers surgical simulations and clinical tools, specifically in high-stakes training like airway management and intubation.</p>
             </div>
             <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Industrial</h4>
                <p className="text-sm">AR/VR overlays for machine maintenance and real-time data visualization of complex manufacturing machinery.</p>
             </div>
          </div>
        </div>

        {/* 7. Debugging */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">7. Low-Level Debugging</h2>
          <p className="italic text-muted-foreground border-l-4 border-secondary pl-4 mb-4">Mentorship Note: You aren't truly a systems engineer until you've debugged a ground loop with an oscilloscope.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>GDB and Valgrind:</strong> Essential for source-level debugging and memory leaks.</li>
            <li><strong>JTAG:</strong> Standard for hardware-level debugging (e.g., STM32).</li>
            <li><strong>Oscilloscopes:</strong> Verify hardware functionality and physical signals.</li>
          </ul>
          <p className="text-sm mt-2 opacity-80">Beware of hardware quirks: the CPU is literally faster than physical signal transition times.</p>
        </div>

        {/* 8. Roadmap */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">8. Transition Roadmap</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Platform Tinkering:</strong> Start with an STM32F4 Discovery board (via JTAG).</li>
            <li><strong>Register-Level Mastery:</strong> Stop using high-level HALs. Read detailed register manuals.</li>
            <li><strong>3D Math:</strong> Master linear algebra for spatial computing.</li>
            <li><strong>Driver Development:</strong> Write a user-space driver for a peripheral like UART or GPIO without built-in kernel handlers.</li>
            <li><strong>Portfolio:</strong> Build a technical prototype (e.g., VR demo or AR app) and document performance profiles.</li>
          </ol>
        </div>

        {/* References */}
        <div className="mt-12 pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <h3 className="font-bold mb-4 text-foreground">References</h3>
          <ul className="space-y-2">
            <li>[1] AI Engineers vs Full-Stack Developers: Evolving Roles - Tutorials Dojo</li>
            <li>[2] AI engineers vs. software engineers: how AI is changing the experience of building software - DX</li>
            <li>[3] AR/VR Developer: Is It Right for You? - JobCannon</li>
            <li>[4] Ar Vr Developer Skills, Tools, and Career Path in 2026 - inairspace</li>
            <li>[5] Ask HN: What should a systems/low-level software engineer know? - Hacker News</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
