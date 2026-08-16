import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Results() {
  const canvasRef = useRef(null);
  const [studentData, setStudentData] = useState({ name: 'Student' });
  const [scores, setScores] = useState({ lowLevel: 1, fullStack: 1, arVr: 1, machineLearning: 1 });
  const [topSpec, setTopSpec] = useState('');
  const [topSpecDesc, setTopSpecDesc] = useState('');

  const specNames = {
    lowLevel: 'Low-Level Architecture',
    fullStack: 'Full-Stack Engineering',
    arVr: 'AR/VR Development',
    machineLearning: 'Machine Learning'
  };

  const specDetails = {
    lowLevel: {
      profile: 'You are a "metal" enthusiast who values robustness and correctness above all else. You enjoy understanding the nitty-gritty of hardware and are comfortable with resource-constrained environments.',
      context: 'High stability and demand in automotive and healthcare sectors.'
    },
    fullStack: {
      profile: 'You are a product-builder who enjoys seeing tangible results and has a versatile mindset. You want maximum job flexibility and are ready to embrace the "AI-augmented" development workflow.',
      context: 'Transitioning into "AI-Integrated" roles where speed and efficiency are supercharged by AI tools.'
    },
    arVr: {
      profile: 'You are a creative technologist fascinated by spatial computing and human-computer interaction. You enjoy the blend of advanced 3D math and immersive design.',
      context: 'Rapid growth driven by platforms like Apple Vision Pro and Meta Quest.'
    },
    machineLearning: {
      profile: 'You have a researcher’s mindset, finding it fascinating to extract intelligence from data. You are comfortable with ambiguity and enjoy high-level mathematics and experimentation.',
      context: 'One of the highest-paying pathways, with demand jumping 40% recently.'
    }
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('studentData')) || { name: 'Student' };
    const savedScores = JSON.parse(localStorage.getItem('quizScores')) || { lowLevel: 1, fullStack: 1, arVr: 1, machineLearning: 1 };
    
    setStudentData(savedData);
    setScores(savedScores);

    let maxScore = -1;
    let top = '';
    for (const [key, val] of Object.entries(savedScores)) {
      if (val > maxScore) {
        maxScore = val;
        top = key;
      }
    }
    
    setTopSpec(specNames[top] || 'Balanced Profile');
    setTopSpecDesc(specDetails[top] || { profile: 'You have diverse interests. Consider speaking with an advisor to narrow it down!', context: '' });

    renderRadarChart(canvasRef.current, savedScores);
  }, []);

  const renderRadarChart = (canvas, scoresData) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 50;
    const maxPossibleScore = 10; 

    const data = [
      { label: 'Low-Level', value: scoresData.lowLevel || 0 },
      { label: 'Full-Stack', value: scoresData.fullStack || 0 },
      { label: 'AR/VR', value: scoresData.arVr || 0 },
      { label: 'Machine Learning', value: scoresData.machineLearning || 0 }
    ];
    
    const numPoints = data.length;
    const angleStep = (Math.PI * 2) / numPoints;

    ctx.clearRect(0, 0, width, height);

    const rings = 4;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= rings; i++) {
      const r = (radius / rings) * i;
      ctx.beginPath();
      for (let j = 0; j <= numPoints; j++) {
        const angle = j * angleStep - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    ctx.font = '14px Inter, sans-serif';
    ctx.fillStyle = '#64748b'; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
      ctx.stroke();
      
      const labelRadius = radius + 25;
      const x = centerX + labelRadius * Math.cos(angle);
      const y = centerY + labelRadius * Math.sin(angle);
      ctx.fillText(data[i].label, x, y);
    }

    ctx.beginPath();
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const normalizedVal = Math.max(0.1, Math.min(data[i].value / maxPossibleScore, 1.0));
      const pointRadius = radius * normalizedVal;
      
      const x = centerX + pointRadius * Math.cos(angle);
      const y = centerY + pointRadius * Math.sin(angle);
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    ctx.fillStyle = 'rgba(8, 122, 152, 0.4)'; // Teal with opacity
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#087A98'; // Teal
    ctx.stroke();
    
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const normalizedVal = Math.max(0.1, Math.min(data[i].value / maxPossibleScore, 1.0));
      const pointRadius = radius * normalizedVal;
      
      const x = centerX + pointRadius * Math.cos(angle);
      const y = centerY + pointRadius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#cb721c'; // Orange
      ctx.fill();
      ctx.stroke(); 
    }
  };

  return (
    <div className="wrapper">
      <div className="flex justify-end py-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-lg font-bold border-destructive text-destructive hover:bg-destructive hover:text-white">Restart Quiz</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will erase your current results and you'll have to take the quiz again.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Link to="/">Yes, restart</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <main className="mt-4">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <h2 className="text-secondary text-4xl mb-2">{studentData.name}'s Specialisation Profile</h2>
          <p className="text-xl mb-12">Based on your responses, here is your compatibility score across the four BSE specialisations.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-background p-8 rounded-xl flex justify-center">
              <canvas ref={canvasRef} width={400} height={400} className="max-w-full" />
            </div>
            
            <Card className="bg-[url('/images/simple-steps.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-90 bg-primary text-primary-foreground border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-secondary">Top Recommendation:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background text-primary inline-block px-4 py-2 text-2xl font-bold mb-4 rounded-md">
                  {topSpec}
                </div>
                <p className="text-lg font-medium mb-4"><span className="text-primary/70">The Profile:</span> {topSpecDesc.profile}</p>
                {topSpecDesc.context && (
                  <p className="text-lg font-medium"><span className="text-primary/70">2026 Context:</span> {topSpecDesc.context}</p>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 text-lg font-bold">
              <Link to="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
