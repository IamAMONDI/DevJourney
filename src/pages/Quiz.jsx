import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";


const questions = [
  {
    id: 1,
    text: "When facing a complex problem, I prefer to...",
    options: [
      { text: "Break it down into logical algorithms and optimize the memory usage.", type: "lowLevel" },
      { text: "Design a visually engaging interface that guides the user to a solution.", type: "fullStack" },
      { text: "Create an immersive 3D simulation to visualize the problem space.", type: "arVr" },
      { text: "Train a model using existing data to predict the outcome.", type: "machineLearning" }
    ]
  },
  {
    id: 2,
    text: "Which project sounds most exciting to you?",
    options: [
      { text: "Writing a custom operating system kernel or device driver.", type: "lowLevel" },
      { text: "Building a scalable e-commerce platform with a beautiful front-end.", type: "fullStack" },
      { text: "Developing an application that lets users interact with holograms.", type: "arVr" },
      { text: "Creating a recommendation engine that suggests movies based on watch history.", type: "machineLearning" }
    ]
  },
  {
    id: 3,
    text: "What type of data processing do you find most interesting?",
    options: [
      { text: "Bitwise operations and memory pointers.", type: "lowLevel" },
      { text: "Handling JSON APIs and database queries.", type: "fullStack" },
      { text: "Real-time spatial mapping and sensor fusion.", type: "arVr" },
      { text: "Large datasets for neural network training and validation.", type: "machineLearning" }
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
