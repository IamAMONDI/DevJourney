import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function MachineLearning() {
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
          <img src={`${import.meta.env.BASE_URL}images/ml_bg.jpg`} alt="Machine Learning Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10">
          <CardHeader>
            <CardTitle className="text-4xl text-white">Machine Learning & AI Engineering</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg pb-12">
            <p className="text-xl font-semibold opacity-90">Deep Dive Career Guide</p>
            <p>
              Architecting systems that learn, adapt, and evolve through data. Mastering the probabilistic logic of the future.
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
            src="https://www.youtube.com/embed/qYNweeDHiyU" 
            title="Deep Dive Career Guide" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section className="space-y-12 max-w-[800px] mx-auto">
        
        {/* 1. Introduction */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">1. The Evolution of the Engineering Landscape</h2>
          <p>The technology industry is witnessing a structural convergence where traditional job titles are rapidly blurring. The once-distinct silos of full-stack development and AI engineering are merging as Artificial Intelligence transitions from a niche specialization to a foundational layer of the modern software stack [1][2]. As organizations integrate large language models (LLMs) and intelligent automation into production, the "AI Engineer" is no longer an outlier but a standard requirement for high-scale product delivery [1].</p>
          <div className="border-l-4 border-secondary pl-4 py-2 mt-4">
            <h4 className="font-bold text-lg mb-2">State of the Industry</h4>
            <p className="text-sm">AI is fundamentally reshaping the developer experience by altering how we think, iterate, and build. Modern engineering excellence is no longer defined by writing static code but by architecting systems that learn, adapt, and evolve through data [2].</p>
          </div>
        </div>

        {/* 2. Paradigmatic Shift */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">2. The Paradigmatic Shift</h2>
          <p>The move into AI engineering requires a fundamental re-evaluation of system logic. Traditional software is built on Deterministic Logic, whereas AI systems operate on Probabilistic Logic [1].</p>
          
          <div className="overflow-x-auto mt-6 mb-8">
            <table className="w-full text-left border-collapse bg-background rounded-lg shadow-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tl-lg">Traditional Software (Deterministic)</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tr-lg">AI Engineering (Probabilistic)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4"><span className="font-bold">Fixed Logic:</span> Explicitly defined rules where defined inputs always produce the same predictable outputs [1].</td>
                  <td className="py-3 px-4"><span className="font-bold">Learned Logic:</span> Behavior derived from data patterns; outputs are based on statistical likelihoods and can vary [1][2].</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><span className="font-bold">Reliability:</span> Maintained through strict testing against expected, predefined outcomes [1].</td>
                  <td className="py-3 px-4"><span className="font-bold">Intelligence:</span> Maintained by addressing model uncertainty, mitigating bias, and optimizing statistical accuracy [1].</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><span className="font-bold">Debugging:</span> Focused on tracing explicit logic errors or "bugs" within the code [1].</td>
                  <td className="py-3 px-4"><span className="font-bold">Optimization:</span> Focused on analyzing datasets and tuning hyperparameters to fix statistical misalignment [1].</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Core Responsibilities */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">3. Core Responsibilities</h2>
          <p>The workflow of an AI engineer centers on the lifecycle of learning systems, distinct from the feature-delivery cycles of traditional developers [2].</p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">1. Model Development</h4>
                <p className="text-sm">Selection of architectures and training using frameworks like PyTorch or TensorFlow. This includes preparing training data and running iterative experiments.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">2. Validation and Testing</h4>
                <p className="text-sm">Evaluation against held-out data to ensure accuracy and fairness. Engineers stress-test edge cases to ensure robustness.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">3. Production Integration</h4>
                <p className="text-sm">Scalable deployment and packaging. Collaborating with platform teams to ensure low latency and seamless delivery of inference APIs.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none border-t-4 border-t-destructive">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">4. Monitoring and Retraining</h4>
                <p className="text-sm">Unlike software, which functions until the code changes, models degrade silently as real-world data evolves, requiring continuous retraining [1][2].</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 4. Technical Foundations */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">4. Technical Foundations</h2>
          <p>A robust AI toolkit requires a balance of high-level framework proficiency and low-level hardware awareness.</p>
          
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Python, TensorFlow, and PyTorch:</strong> Industry standards for model training, fine-tuning, and iterating on workflows [1][2].</li>
            <li><strong>Performance Engineering:</strong> Senior Architects must maintain "Mechanical Sympathy"—a deep understanding of how hardware (CPU, GPU) interacts with code [5]. This necessitates C++ or Rust for Locality-driven software design.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-secondary">The Mathematical Bedrock</h3>
          <p>Mathematical proficiency is the differentiator between a "prompt engineer" and a true AI Architect.</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Linear Algebra:</strong> Crucial for managing vectors and manipulating Tensors—the multidimensional arrays in AI frameworks [3][4].</li>
            <li><strong>Statistics:</strong> Essential for validating model behavior and interpreting probabilistic outputs.</li>
            <li><strong>3D Math:</strong> Fundamental for spatial reasoning, rotations, and transformations in immersive AI applications.</li>
          </ul>
          
          <div className="mt-6 flex items-center justify-center p-4 bg-muted rounded-lg">
             <a href="https://www.youtube.com/watch?v=UzxYlbK2c7E" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-bold hover:underline">
               <span>▶️</span> Watch: Stanford Machine Learning Course
             </a>
          </div>
        </div>

        {/* 5. Tooling, Ecosystems, MLOps */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">5. Tooling, Ecosystems, and MLOps</h2>
          <p>AI engineers inhabit a specialized ecosystem that prioritizes data pipelines and inference over traditional web frameworks [1].</p>
          
          <div className="space-y-4 mt-6">
             <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">1. Production Integration</h4>
                <p className="text-sm">MLOps emphasizes continuous delivery but introduces "Silent Degradation," where models lose accuracy despite the system remaining operational.</p>
             </div>
             <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">2. Versioning Complexity</h4>
                <p className="text-sm">While traditional developers version code, AI engineers must version the dataset alongside hyperparameters and framework versions to ensure reproducibility.</p>
             </div>
             <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">3. Data Compactness</h4>
                <p className="text-sm">High-performance systems utilize data structures packed into bitfields to maintain compactness and maximize throughput in hardware-constrained environments.</p>
             </div>
          </div>
        </div>

        {/* 6. AI Augmented Development */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">6. The Convergence: AI-Augmented Development</h2>
          <p>The industry is moving toward a "Hybrid" model where 92% of developers use AI tools for code generation and refactoring [2].</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Hybrid Skill Sets:</strong> Organizations demand technical expertise paired with human-centered capabilities to bridge the gap between complex model behavior and business needs.</li>
            <li><strong>Judgment Over Execution:</strong> Architects must act as "translators" who can interpret and validate AI outputs rather than just generating them.</li>
          </ul>
          <p className="text-xl font-bold text-center text-secondary italic mt-6">"AI replaces tasks, not judgment." [2]</p>
        </div>

        {/* 7. Performance Metrics */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">7. Performance Metrics</h2>
          <p>Success in this pathway is measured on two distinct "scoreboards": system operations and model intelligence [1].</p>
          
          <div className="overflow-x-auto mt-6 mb-8">
            <table className="w-full text-left border-collapse bg-background rounded-lg shadow-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tl-lg">Metric Type</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20">Software/System Metrics</th>
                  <th className="py-3 px-4 text-primary font-bold border-b-2 border-primary/20 rounded-tr-lg">AI/Model Intelligence Metrics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-semibold">Operational</td>
                  <td className="py-3 px-4">Uptime, scalability, responsiveness, MTTR</td>
                  <td className="py-3 px-4">Inference latency, resource consumption</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Quality</td>
                  <td className="py-3 px-4">Lead time for changes, technical debt</td>
                  <td className="py-3 px-4">Accuracy, Precision, Recall, F1 Score</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Linguistic</td>
                  <td className="py-3 px-4">N/A</td>
                  <td className="py-3 px-4">BLEU Score (for translation quality)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Integrity</td>
                  <td className="py-3 px-4">Security, vulnerability counts</td>
                  <td className="py-3 px-4">Bias mitigation, behavioral/data drift</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 8. Roadmap */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">8. Strategic Career Roadmap</h2>
          <p>To enter this field, engineers must transition from building static logic to mastering spatial and probabilistic systems [4].</p>
          
          <div className="space-y-4 mt-6 bg-muted p-6 rounded-lg">
             <h4 className="font-bold text-lg mb-4">Career Milestone Checklist:</h4>
             
             <div className="flex items-start space-x-3">
               <input type="checkbox" id="c1" className="mt-1 w-4 h-4 text-primary bg-background border-gray-300 rounded" />
               <label htmlFor="c1" className="text-sm font-medium leading-none">
                 <strong>Strengthen Programming Foundations:</strong> Master object-oriented design and performance-oriented languages like Python, C++, or Rust.
               </label>
             </div>
             
             <div className="flex items-start space-x-3">
               <input type="checkbox" id="c2" className="mt-1 w-4 h-4 text-primary bg-background border-gray-300 rounded" />
               <label htmlFor="c2" className="text-sm font-medium leading-none">
                 <strong>Develop "Mechanical Sympathy":</strong> Learn hardware bottlenecks and locality-driven design to optimize inference.
               </label>
             </div>

             <div className="flex items-start space-x-3">
               <input type="checkbox" id="c3" className="mt-1 w-4 h-4 text-primary bg-background border-gray-300 rounded" />
               <label htmlFor="c3" className="text-sm font-medium leading-none">
                 <strong>Learn Real-Time Engines:</strong> Gain proficiency in Unity or Unreal for spatial computing and immersive AI applications.
               </label>
             </div>

             <div className="flex items-start space-x-3">
               <input type="checkbox" id="c4" className="mt-1 w-4 h-4 text-primary bg-background border-gray-300 rounded" />
               <label htmlFor="c4" className="text-sm font-medium leading-none">
                 <strong>Build Focused Prototypes:</strong> Create functional models, such as predictive systems or gesture-controlled interfaces, to test feasibility.
               </label>
             </div>

             <div className="flex items-start space-x-3">
               <input type="checkbox" id="c5" className="mt-1 w-4 h-4 text-primary bg-background border-gray-300 rounded" />
               <label htmlFor="c5" className="text-sm font-medium leading-none">
                 <strong>Master Data Versioning:</strong> Implement MLOps pipelines that track datasets as strictly as code commits.
               </label>
             </div>

             <div className="flex items-start space-x-3">
               <input type="checkbox" id="c6" className="mt-1 w-4 h-4 text-primary bg-background border-gray-300 rounded" />
               <label htmlFor="c6" className="text-sm font-medium leading-none">
                 <strong>Portfolio Development:</strong> Document the ability to bridge model behavior with business outcomes through case studies and source code.
               </label>
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
