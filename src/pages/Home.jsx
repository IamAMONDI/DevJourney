import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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

export default function Home() {
  return (
    <div className="wrapper">
      <main className="space-y-24 mt-12 mb-24">
        {/* Hero Section */}
        <section className="relative bg-black text-white p-12 rounded-xl text-center shadow-lg overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src={`${import.meta.env.BASE_URL}images/home_bg.jpg`} alt="Hero Background" className="w-full h-full object-cover opacity-50" />
          </div>
          
          <motion.div 
            className="relative z-10 py-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Discover Your Tech Destiny</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
              Take our interactive assessment to find your perfect Software Engineering specialization and map out your career trajectory.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 hover:scale-105 transition-transform duration-300">
              <Link to="/register">Ready? Take the Quiz</Link>
            </Button>
          </motion.div>
        </section>

        {/* Why Choose DevJourney Features */}
        <motion.section 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-secondary text-3xl font-bold mb-12">Why DevJourney?</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="space-y-4 p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl">🧭</div>
              <h3 className="text-xl font-semibold">Guided Pathways</h3>
              <p className="text-muted-foreground">Clear, step-by-step roadmaps curated by industry veterans.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4 p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl">🎯</div>
              <h3 className="text-xl font-semibold">Personalized Quiz</h3>
              <p className="text-muted-foreground">An assessment tailored to your logical and creative strengths.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4 p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl">📈</div>
              <h3 className="text-xl font-semibold">Track Progress</h3>
              <p className="text-muted-foreground">Save your results and bookmark critical resources for later.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Explore Pathways Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-secondary text-4xl font-bold mb-4">Explore the Pathways</h2>
            <p className="text-xl text-muted-foreground">Discover the core disciplines defining the future of technology.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeInUp}>
              <Card className="bg-primary text-primary-foreground border-none hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Low-Level / Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">The foundation of performance. Dive into deterministic systems, rigorous memory management, and hardware cache optimization to build robust architecture.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-primary text-primary-foreground border-none hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">AR/VR (XR) Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">Build immersive realities. Master spatial computing, 3D math, and high-frame-rate rendering pipelines to bridge digital content and physical perception.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-primary text-primary-foreground border-none hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Full-Stack Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">The architecture of integration. Connect frontend UX, backend services, and cloud-native systems into cohesive, deterministic software workflows.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-primary text-primary-foreground border-none hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Machine Learning (AI)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">Master probabilistic systems. Train, validate, and scale models that derive behavior from data patterns, adapting constantly to mitigate model drift.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <Button asChild variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 hover:scale-105">
              <Link to="/pathways">View Full Specialization Matrix</Link>
            </Button>
          </motion.div>
        </motion.section>

        {/* Testimonials / Success Stories Placeholder */}
        <motion.section 
          className="bg-muted p-12 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-center text-3xl font-bold mb-12">Hear From Our Engineers</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 overflow-hidden flex-shrink-0">
                    <img src={`${import.meta.env.BASE_URL}images/avatar_sarah.jpg`} alt="Avatar Sarah" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="italic mb-4 text-muted-foreground">"The assessment accurately pinpointed my love for logic and optimization. I'm now a Systems Engineer working on core database engines."</p>
                    <p className="font-bold text-primary">- Sarah J.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 overflow-hidden flex-shrink-0">
                    <img src={`${import.meta.env.BASE_URL}images/avatar_david.jpg`} alt="Avatar David" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="italic mb-4 text-muted-foreground">"I was lost between frontend and backend. The full-stack roadmap gave me exactly the structured path I needed."</p>
                    <p className="font-bold text-primary">- David M.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
