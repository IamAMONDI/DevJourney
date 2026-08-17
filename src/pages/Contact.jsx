import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm, ValidationError } from '@formspree/react';

/**
 * Contact Component
 * Allows users to send messages to academic advisors.
 * Integrates Formspree for submission and custom Regex for real-time validation.
 */
export default function Contact() {
  // IMPORTANT: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  // Local state for form fields to enable real-time validation
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  // Custom Regex definitions
  const nameRegex = /^[a-zA-Z\s]{2,}$/; // Letters and spaces, min 2 chars
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation

  /**
   * Validates individual fields in real-time as the user types.
   * @param {string} field - The name of the field to validate
   * @param {string} value - The current value of the field
   */
  const validateField = (field, value) => {
    let errorMessage = '';

    switch (field) {
      case 'name':
        if (!nameRegex.test(value)) {
          errorMessage = 'Name must contain only letters and be at least 2 characters long.';
        }
        break;
      case 'email':
        if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address.';
        }
        break;
      case 'message':
        if (value.trim().length < 10) {
          errorMessage = 'Message must be at least 10 characters long.';
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
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate dynamically if they have started typing
    if (value.length > 0) {
      validateField(name, value);
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Ensure all fields have values and no errors exist
  const isFormValid = 
    formData.name && formData.email && formData.message &&
    !errors.name && !errors.email && !errors.message;

  /**
   * Effect hook to listen for successful Formspree submission.
   * Triggers a toast notification and resets the form.
   */
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message Sent!", {
        description: "An advisor will get back to you shortly."
      });
      // Reset form visually
      document.getElementById("contact-form").reset();
      // Reset local state
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  return (
    <div className="wrapper">
      <main className="mt-12">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <h2 className="text-black font-bold text-4xl mb-4">Contact an Advisor</h2>
          <p className="text-xl mb-8">Still not sure which path to choose? Send us a message and an academic advisor will get back to you.</p>
          
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            {/* Name Input Block */}
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-lg">Full Name</Label>
              <Input 
                id="contactName" 
                name="name"
                required 
                value={formData.name}
                onChange={handleChange}
                onBlur={(e) => validateField('name', e.target.value)}
                className={`bg-background text-foreground text-lg py-6 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              {/* Custom Inline Error */}
              {errors.name && <p className="text-red-500 text-sm font-medium mt-1">{errors.name}</p>}
              {/* Formspree Fallback Error */}
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            {/* Email Input Block */}
            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-lg">Email Address</Label>
              <Input 
                id="contactEmail" 
                type="email" 
                name="email"
                required 
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateField('email', e.target.value)}
                className={`bg-background text-foreground text-lg py-6 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm font-medium mt-1">{errors.email}</p>}
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message Input Block */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg">Your Message</Label>
              <Textarea 
                id="message" 
                name="message"
                rows={5} 
                required 
                value={formData.message}
                onChange={handleChange}
                onBlur={(e) => validateField('message', e.target.value)}
                className={`bg-background text-foreground text-lg ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              {errors.message && <p className="text-red-500 text-sm font-medium mt-1">{errors.message}</p>}
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={state.submitting || !isFormValid} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg mt-8 disabled:opacity-50 transition-opacity">
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
