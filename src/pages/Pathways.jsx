import React, { useState } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

/**
 * Animation variants for fade-in and slide-up effects
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

/**
 * Animation variant for staggering child components
 */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

/**
 * Data structure for the Interactive Hotspots
 */
const hotspotsData = [
  { id: 1, title: 'Low-Level Systems', desc: 'Operating systems, drivers, embedded devices.', x: 20, y: 30 },
  { id: 2, title: 'Full-Stack Web', desc: 'Frontend UI, Backend APIs, Cloud Databases.', x: 50, y: 20 },
  { id: 3, title: 'AR/VR Spatial', desc: '3D rendering, headsets, spatial mapping.', x: 80, y: 40 },
  { id: 4, title: 'Machine Learning', desc: 'Neural networks, LLMs, Predictive models.', x: 50, y: 70 },
];

/**
 * Pathways Component
 * Displays a detailed overview and comparison of the four engineering specializations.
 * Includes an Interactive Image Hotspot map as a required interactive media feature.
 */
export default function Pathways() {
  // State to track which hotspot is currently active/clicked
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="wrapper">
      <motion.main 
        className="mt-12 space-y-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* INTERACTIVE MEDIA FEATURE: Image Hotspot Map */}
        <motion.section variants={fadeInUp} className="mb-16">
          <h2 className="text-black text-3xl font-bold mb-4">Explore the Ecosystem</h2>
          <p className="text-lg mb-6">Click the pulsing hotspots below to preview how different specializations connect within the technology ecosystem.</p>
          
          {/* Relative container for the map */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-primary/20">
            {/* Base Image */}
            <img 
              src={`${import.meta.env.BASE_URL}images/home_bg.jpg`} 
              alt="Technology Ecosystem Map" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Render Hotspots dynamically based on absolute coordinates */}
            {hotspotsData.map((spot) => (
              <div 
                key={spot.id}
                className="absolute z-10"
                style={{ top: `${spot.y}%`, left: `${spot.x}%`, transform: 'translate(-50%, -50%)' }}
              >
                {/* The clickable hotspot button with pulsing animation */}
                <button
                  onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  className="relative group focus:outline-none"
                  aria-label={`View details for ${spot.title}`}
                >
                  <span className="absolute inset-0 rounded-full bg-secondary opacity-75 animate-ping"></span>
                  <span className={`relative inline-flex rounded-full h-6 w-6 border-2 border-white transition-colors duration-300 ${activeHotspot === spot.id ? 'bg-secondary' : 'bg-primary group-hover:bg-secondary'}`}></span>
                </button>

                {/* The Tooltip/Popup that appears when clicked */}
                <AnimatePresence>
                  {activeHotspot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white text-black p-4 rounded-lg shadow-2xl z-20"
                    >
                      {/* Triangle pointer pointing back to the dot */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                      <div className="relative z-10 flex items-start gap-2">
                        <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-lg leading-tight mb-1">{spot.title}</h4>
                          <p className="text-sm text-gray-700">{spot.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Existing Content: Comparative Analysis Table */}
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

        {/* Individual Specialization Breakdown Cards */}
        {/* Low Level Section */}
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

        {/* AR/VR Section */}
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

        {/* Full Stack Section */}
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

        {/* Machine Learning Section */}
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
