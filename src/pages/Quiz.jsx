import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";


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

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(180);
  const navigate = useNavigate();

  const question = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;
  const hasAnswered = !!userAnswers[question.id];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishQuiz(userAnswers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [userAnswers]);

  const finishQuiz = (answers) => {
    const scores = { lowLevel: 0, fullStack: 0, arVr: 0, machineLearning: 0 };
    Object.values(answers).forEach(type => {
      if (scores[type] !== undefined) scores[type]++;
    });
    localStorage.setItem('quizScores', JSON.stringify(scores));
    navigate('/results');
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      finishQuiz(userAnswers);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="wrapper">
      <div className="flex justify-end py-4">
        <div className={`font-bold text-2xl ${timeLeft <= 60 ? 'text-destructive' : 'text-foreground'}`}>
          {timeString}
        </div>
      </div>
      <main className="mt-4">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <Progress value={progress} className="mb-8 w-full h-3" />
      <div className="min-h-[300px]">
        <h2 className="text-secondary text-3xl mb-8">Q{currentQuestionIndex + 1}: {question.text}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {question.options.map((option, i) => {
            const isSelected = userAnswers[question.id] === option.type;
            return (
              <Card
                key={i}
                onClick={() => setUserAnswers({ ...userAnswers, [question.id]: option.type })}
                className={`cursor-pointer transition-colors ${isSelected ? 'border-secondary border-4 bg-secondary/10' : 'hover:bg-primary-foreground/10'}`}
              >
                <CardContent className="p-6 flex items-center h-full">
                  <span className="text-lg">{option.text}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

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
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg"
        >
          {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next'}
        </Button>
      </div>
    </section>
      </main >
    </div >
  );
}
