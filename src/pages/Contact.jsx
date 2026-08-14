import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent!", {
      description: "An advisor will get back to you shortly."
    });
    e.target.reset();
  };

  return (
    <div className="wrapper">
      <main className="mt-12">
        <section className="bg-primary text-primary-foreground p-12 rounded-xl">
          <h2 className="text-secondary text-4xl mb-4">Contact an Advisor</h2>
          <p className="text-xl mb-8">Still not sure which path to choose? Send us a message and an academic advisor will get back to you.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-lg">Full Name</Label>
              <Input 
                id="contactName" 
                required 
                className="bg-background text-foreground text-lg py-6"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-lg">Email Address</Label>
              <Input 
                id="contactEmail" 
                type="email" 
                required 
                className="bg-background text-foreground text-lg py-6"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg">Your Message</Label>
              <Textarea 
                id="message" 
                rows={5} 
                required 
                className="bg-background text-foreground text-lg"
              />
            </div>

            <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg mt-8">
              Send Message
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
