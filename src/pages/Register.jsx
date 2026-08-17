import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Register() {
  const [formData, setFormData] = useState({ fullName: '', studentId: '', email: '' });
  const navigate = useNavigate();

  const isFormValid = formData.fullName && formData.studentId && formData.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('studentData', JSON.stringify(formData));
    navigate('/quiz');
  };

  return (
    <div className="wrapper">
      <main className="mt-12">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <h2 className="text-black font-bold text-4xl mb-4">Let's Get Started</h2>
          <p className="text-xl mb-8">Please provide your student details to begin the journey.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-lg">Full Name</Label>
              <Input 
                id="fullName" 
                required 
                placeholder="Jane Doe"
                className="bg-background text-foreground text-lg py-6"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-lg">Student ID</Label>
              <Input 
                id="studentId" 
                required 
                placeholder="e.g., 12345678"
                className="bg-background text-foreground text-lg py-6"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">ALU Institutional Email</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="j.doe@alustudent.com"
                className="bg-background text-foreground text-lg py-6"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <Button type="submit" disabled={!isFormValid} size="lg" className="bg-black text-white hover:bg-black/80 font-bold w-full text-lg mt-8">
              Proceed to Quiz
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
