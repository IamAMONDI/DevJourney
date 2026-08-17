import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Register Component
 * Handles the collection of student information before beginning the quiz.
 * Implements real-time Regex validation to satisfy assignment rubrics.
 */
export default function Register() {
  // State for form data
  const [formData, setFormData] = useState({ fullName: '', studentId: '', email: '' });
  
  // State for dynamic inline error messages
  const [errors, setErrors] = useState({ fullName: '', studentId: '', email: '' });
  
  const navigate = useNavigate();

  // Define custom Regex rules for validation
  const nameRegex = /^[a-zA-Z\s]{2,}$/; // Only letters and spaces, min 2 chars
  const idRegex = /^\d{8}$/; // Exactly 8 digits
  const emailRegex = /^[a-zA-Z0-9._%+-]+@alustudent\.com$/; // Must be an alustudent.com domain

  /**
   * Validates individual fields in real-time as the user types.
   * @param {string} field - The name of the field to validate
   * @param {string} value - The current value of the field
   */
  const validateField = (field, value) => {
    let errorMessage = '';

    switch (field) {
      case 'fullName':
        if (!nameRegex.test(value)) {
          errorMessage = 'Name must contain only letters and be at least 2 characters long.';
        }
        break;
      case 'studentId':
        if (!idRegex.test(value)) {
          errorMessage = 'Student ID must be exactly 8 digits.';
        }
        break;
      case 'email':
        if (!emailRegex.test(value)) {
          errorMessage = 'Must be a valid @alustudent.com email address.';
        }
        break;
      default:
        break;
    }

    // Update the error state dynamically
    setErrors(prev => ({ ...prev, [field]: errorMessage }));
  };

  /**
   * Handles input changes, updating form state and triggering real-time validation.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Only validate if they have started typing to prevent immediate errors on load
    if (value.length > 0) {
      validateField(id, value);
    } else {
      // Clear error if field is emptied
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  // The form is only valid if all fields have values AND there are no error messages
  const isFormValid = 
    formData.fullName && formData.studentId && formData.email &&
    !errors.fullName && !errors.studentId && !errors.email;

  /**
   * Handles form submission, saves data to localStorage, and navigates to the quiz.
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Save data for personalization in the Results page
      localStorage.setItem('studentData', JSON.stringify(formData));
      navigate('/quiz');
    }
  };

  return (
    <div className="wrapper">
      <main className="mt-12">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <h2 className="text-black font-bold text-4xl mb-4">Let's Get Started</h2>
          <p className="text-xl mb-8">Please provide your student details to begin the journey.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            {/* Full Name Input Block */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-lg">Full Name</Label>
              <Input 
                id="fullName" 
                required 
                placeholder="Jane Doe"
                className={`bg-background text-foreground text-lg py-6 ${errors.fullName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                value={formData.fullName}
                onChange={handleChange}
                onBlur={(e) => validateField('fullName', e.target.value)}
              />
              {/* Dynamic Inline Error Message */}
              {errors.fullName && <p className="text-red-500 text-sm font-medium mt-1">{errors.fullName}</p>}
            </div>
            
            {/* Student ID Input Block */}
            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-lg">Student ID</Label>
              <Input 
                id="studentId" 
                required 
                placeholder="e.g., 12345678"
                className={`bg-background text-foreground text-lg py-6 ${errors.studentId ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                value={formData.studentId}
                onChange={handleChange}
                onBlur={(e) => validateField('studentId', e.target.value)}
              />
              {/* Dynamic Inline Error Message */}
              {errors.studentId && <p className="text-red-500 text-sm font-medium mt-1">{errors.studentId}</p>}
            </div>

            {/* ALU Email Input Block */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">ALU Institutional Email</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="j.doe@alustudent.com"
                className={`bg-background text-foreground text-lg py-6 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateField('email', e.target.value)}
              />
              {/* Dynamic Inline Error Message */}
              {errors.email && <p className="text-red-500 text-sm font-medium mt-1">{errors.email}</p>}
            </div>

            {/* Submit Button (Disabled until regex validation passes) */}
            <Button type="submit" disabled={!isFormValid} size="lg" className="bg-black text-white hover:bg-black/80 font-bold w-full text-lg mt-8 disabled:opacity-50 transition-opacity">
              Proceed to Quiz
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
