import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // IMPORTANT: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message Sent!", {
        description: "An advisor will get back to you shortly."
      });
      // Optionally reset the form fields here if needed by selecting the form element
      document.getElementById("contact-form").reset();
    }
  }, [state.succeeded]);

  return (
    <div className="wrapper">
      <main className="mt-12">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <h2 className="text-black font-bold text-4xl mb-4">Contact an Advisor</h2>
          <p className="text-xl mb-8">Still not sure which path to choose? Send us a message and an academic advisor will get back to you.</p>
          
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-lg">Full Name</Label>
              <Input 
                id="contactName" 
                name="name"
                required 
                className="bg-background text-foreground text-lg py-6"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-lg">Email Address</Label>
              <Input 
                id="contactEmail" 
                type="email" 
                name="email"
                required 
                className="bg-background text-foreground text-lg py-6"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg">Your Message</Label>
              <Textarea 
                id="message" 
                name="message"
                rows={5} 
                required 
                className="bg-background text-foreground text-lg"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button type="submit" disabled={state.submitting} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg mt-8 disabled:opacity-50">
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
