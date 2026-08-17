import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Glasses, Brain } from 'lucide-react';
import { playSelectSound, playNextSound, playTimerSound, playFinishSound } from '@/utils/audio';

const questions = [
  {
    id: 1,
    text: "What is your preferred way to solve a complex problem?",
    options: [
      { text: "The \"Metal\" Approach: Getting as close to the hardware as possible to understand how bits move through registers.", type: "lowLevel" },
      { text: "The \"Product\" Approach: Building a complete user journey from the interface to the underlying database.", type: "fullStack" },
      { text: "The \"Spatial\" Approach: Solving puzzles in 3D space, like how a user should interact with a digital object using their hands.", type: "arVr" },
      { text: "The \"Probabilistic\" Approach: Training a system to recognize patterns in data rather than writing explicit rules for every outcome.", type: "machineLearning" }
    ]
  },
  {
    id: 2,
    text: "Which set of programming tools would you be most excited to master?",
    options: [
      { text: "C, Assembly, and hardware debuggers like JTAG or oscilloscopes.", type: "lowLevel" },
      { text: "JavaScript (React/Node.js) and AI-powered coding tools like GitHub Copilot or Cursor.", type: "fullStack" },
      { text: "C#, Unity, Unreal Engine, and spatial SDKs like ARKit.", type: "arVr" },
      { text: "Python, PyTorch, TensorFlow, and data manipulation libraries like Pandas.", type: "machineLearning" }
    ]
  },
  {
    id: 3,
    text: "How do you feel about mathematics in your daily work?",
    options: [
      { text: "I enjoy digital logic, binary arithmetic, and understanding clock trees and power supply states.", type: "lowLevel" },
      { text: "I prefer focusing on logic flow and architecture; math is a tool I use only when strictly necessary for algorithms.", type: "fullStack" },
      { text: "I love 3D math, including linear algebra, vectors, matrices, and quaternions for smooth rotations.", type: "arVr" },
      { text: "I am fascinated by statistics, probability, and calculus to understand how models optimize predictions.", type: "machineLearning" }
    ]
  },
  {
    id: 4,
    text: "What kind of tangible output gives you the most professional satisfaction?",
    options: [
      { text: "A reliable piece of firmware that makes a physical motor spin or a medical device function for a decade.", type: "lowLevel" },
      { text: "A visible, interactive web application used by thousands of people daily.", type: "fullStack" },
      { text: "An immersive virtual world or augmented reality overlay that people experience physically.", type: "arVr" },
      { text: "An \"intelligent\" recommendation engine or a predictive model that identifies insights from messy data.", type: "machineLearning" }
    ]
  },
  {
    id: 5,
    text: "How do you prefer to handle \"System Behavior\"?",
    options: [
      { text: "Strictly Deterministic: I want to write code where a specific input always produces the exact same hardware result.", type: "lowLevel" },
      { text: "Cohesive & Scalable: I want to connect layers of a system (frontend/backend) to ensure one cohesive, reliable unit.", type: "fullStack" },
      { text: "Immersive & Experiential: I want to design for \"Presence\"—the feeling of truly \"being there\" in a digital environment.", type: "arVr" },
      { text: "Adaptive & Probabilistic: I am comfortable with uncertainty and want to build systems that learn and improve over time.", type: "machineLearning" }
    ]
  },
  {
    id: 6,
    text: "Which system constraint sounds like an interesting challenge to you?",
    options: [
      { text: "Working with extreme resource limits, such as a microcontroller with only 64 bytes of RAM.", type: "lowLevel" },
      { text: "Managing high-traffic cloud deployments and ensuring application security across the stack.", type: "fullStack" },
      { text: "Optimizing rendering pipelines to maintain high frame rates and prevent user motion sickness.", type: "arVr" },
      { text: "Monitoring for \"data drift\" to ensure models remain accurate as real-world data evolves.", type: "machineLearning" }
    ]
  },
  {
    id: 7,
    text: "How do you feel about the role of AI in development?",
    options: [
      { text: "I see it as a high-level tool, but it can't replace the need for \"mechanical sympathy\" and deep hardware knowledge.", type: "lowLevel" },
      { text: "I want to be an \"AI-Powered\" developer, using AI agents to build products 3–5x faster than traditional coding.", type: "fullStack" },
      { text: "I am excited about using AI to create more natural interactions and better spatial mapping in 3D.", type: "arVr" },
      { text: "I want to be the one building the AI models and intelligent functionality that others integrate into their apps.", type: "machineLearning" }
    ]
  },
  {
    id: 8,
    text: "Which career trajectory is more appealing to you?",
    options: [
      { text: "Becoming an expert in a specialized niche like Automotive safety or medical systems, where 30 years of experience is highly valued.", type: "lowLevel" },
      { text: "Growing from a junior developer to a CTO, with the flexibility to work for any company with a digital product.", type: "fullStack" },
      { text: "Moving from a Junior XR Developer to a \"Head of Immersive Technology\" in a rapidly expanding market.", type: "arVr" },
      { text: "Moving toward a specialized research or scientist path, commanding the highest salaries for deep data expertise.", type: "machineLearning" }
    ]
  },
  {
    id: 9,
    text: "What kind of industry application sounds most exciting?",
    options: [
      { text: "Designing anti-lock braking systems or IoT sensors for smart farming.", type: "lowLevel" },
      { text: "Building e-commerce platforms, SaaS dashboards, or social media applications.", type: "fullStack" },
      { text: "Creating surgical simulations for medical training or architectural visualizations.", type: "arVr" },
      { text: "Building fraud detection systems, autonomous vehicle navigation, or natural language translators.", type: "machineLearning" }
    ]
  },
  {
    id: 10,
    text: "What is your \"ideal\" daily work rhythm?",
    options: [
      { text: "Long periods of deep, methodical debugging often involving physical hardware and logic analyzers.", type: "lowLevel" },
      { text: "A fast-paced environment with varied tasks, switching between user interface design and server-side logic.", type: "fullStack" },
      { text: "A creative-technical blend, collaborating with 3D artists to test scale, comfort, and interaction feel.", type: "arVr" },
      { text: "A research-oriented day spent analyzing datasets, training models, and reading new technical papers.", type: "machineLearning" }
    ]
  }
];

const optionIcons = {
  lowLevel: Cpu,
  fullStack: Layers,
  arVr: Glasses,
  machineLearning: Brain
};

/**
 * Quiz Component
 * Handles the 10-question assessment to determine the user's ideal specialization.
 * Features a built-in countdown timer, animated transitions (Framer Motion), 
 * and synthesized Web Audio API sound effects.
 */
export default function Quiz() {
  // State for tracking the current position in the quiz array
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // State mapping question IDs to the user's selected option type
  const [userAnswers, setUserAnswers] = useState({});
  
  // Countdown timer state (in seconds)
  const [timeLeft, setTimeLeft] = useState(180);
  const navigate = useNavigate();

  const question = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;
  const hasAnswered = !!userAnswers[question.id];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 15 && prev > 1) {
          playTimerSound();
        }
        if (prev <= 1) {
          clearInterval(timer);
          playFinishSound();
          finishQuiz(userAnswers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [userAnswers]);

  /**
   * Finalizes the quiz, tallies the score, saves to localStorage, 
   * and routes the user to the Results view.
   * @param {Object} answers - Dictionary of the user's selected answers
   */
  const finishQuiz = (answers) => {
    const scores = { lowLevel: 0, fullStack: 0, arVr: 0, machineLearning: 0 };
    
    // Tally the frequencies of each selected specialization type
    Object.values(answers).forEach(type => {
      if (scores[type] !== undefined) scores[type]++;
    });
    
    // Persist scores for the Results page
    localStorage.setItem('quizScores', JSON.stringify(scores));
    navigate('/results');
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      playNextSound();
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      playFinishSound();
      finishQuiz(userAnswers);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      playNextSound();
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleOptionSelect = (type) => {
    playSelectSound();
    setUserAnswers({ ...userAnswers, [question.id]: type });
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="wrapper">
      <div className="flex justify-end py-4">
        <motion.div 
          className={`font-bold text-2xl ${timeLeft <= 60 ? 'text-destructive' : 'text-foreground'}`}
          animate={timeLeft <= 15 ? { scale: [1, 1.1, 1], color: ['#cb721c', '#ff0000', '#cb721c'] } : {}}
          transition={{ duration: 1, repeat: timeLeft <= 15 ? Infinity : 0 }}
        >
          {timeString}
        </motion.div>
      </div>
      <main className="mt-4 overflow-hidden">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl min-h-[600px] flex flex-col">
          <Progress value={progress} className="mb-8 w-full h-3" />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentQuestionIndex}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1"
            >
              <h2 className="text-black font-bold text-3xl mb-8">Q{currentQuestionIndex + 1}: {question.text}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {question.options.map((option, i) => {
                  const isSelected = userAnswers[question.id] === option.type;
                  const Icon = optionIcons[option.type];
                  return (
                    <motion.div key={i} variants={itemVariants}>
                      <Card
                        onClick={() => handleOptionSelect(option.type)}
                        className={`cursor-pointer transition-all duration-200 h-full ${isSelected ? 'border-black border-4 bg-black/10 scale-[1.02]' : 'hover:bg-primary-foreground/10 hover:scale-[1.02]'}`}
                      >
                        <CardContent className="p-6 flex flex-col gap-4 h-full">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isSelected ? 'bg-black text-white' : 'bg-primary/20 text-primary'}`}>
                              <Icon size={24} />
                            </div>
                            <span className="font-bold uppercase tracking-wider text-sm opacity-70">
                              {option.type.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                          </div>
                          <span className="text-lg">{option.text}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-between">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="text-primary border-primary text-lg"
            >
              Previous
            </Button>
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!hasAnswered}
              className="bg-black text-white hover:bg-black/80 font-bold text-lg"
            >
              {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next'}
            </Button>
          </div>
        </section>
      </main >
    </div>
  );
}
