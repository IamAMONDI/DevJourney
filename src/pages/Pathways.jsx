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
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Pathways() {
  return (
    <div className="wrapper">
      <motion.main 
        className="mt-12 space-y-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.section variants={fadeInUp}>
          <h3 className="text-black text-2xl font-bold mb-6">1. High-Level Pathway Comparative Analysis</h3>
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
        </motion.section>

        <motion.div variants={fadeInUp} whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-50px" }}>
          <Card className="bg-primary text-primary-foreground border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-black">2. Low-Level / Systems Engineering: The Foundation of Performance</CardTitle>
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
        </motion.div>

        <motion.div variants={fadeInUp} whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-50px" }}>
          <Card className="bg-primary text-primary-foreground border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-black">3. AR/VR (XR) Development: Building Immersive Realities</CardTitle>
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
        </motion.div>

        <motion.div variants={fadeInUp} whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-50px" }}>
          <Card className="bg-primary text-primary-foreground border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-black">4. Full-Stack Development: The Architecture of Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>In 2026, Full-Stack engineering has evolved into the "Architecture of Integration," where the primary goal is connecting disparate services into a cohesive, deterministic software system.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp} whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-50px" }}>
          <Card className="bg-primary text-primary-foreground border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-black">5. Machine Learning (AI) Engineering: Mastering Probabilistic Systems</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>AI Engineering is the mastery of systems that derive behavior from data patterns rather than predefined rules. This introduces a probabilistic mental model that contrasts sharply with traditional engineering.</p>
            </CardContent>
          </Card>
        </motion.div>

      </motion.main>
    </div>
  );
}
