
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, MessageSquare, PhoneCall, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly.",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-secondary/50">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ opacity: isInView ? 1 : 0 }}
          >
            Get Started
          </div>
          
          <h2 
            className={cn(
              "heading-lg mb-6",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
          >
            Ready to Cultivate Your Enterprise Knowledge?
          </h2>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mx-auto",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            Start your journey towards a thriving Enterprise Knowledge Garden. 
            Reach out to us for a consultation and let's discuss how we can help your organization.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div 
            className={cn(
              "lg:w-1/2",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.3s', opacity: isInView ? 1 : 0 }}
          >
            <div className="glass-panel p-8">
              <h3 className="heading-md mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      className="w-full p-3 rounded-md bg-white border border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="w-full p-3 rounded-md bg-white border border-input"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Acme Corporation" 
                    required 
                    className="w-full p-3 rounded-md bg-white border border-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your knowledge management needs..." 
                    rows={5} 
                    required 
                    className="w-full p-3 rounded-md bg-white border border-input resize-none"
                  />
                </div>
                
                <Button
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div 
              className={cn(
                "mb-8",
                getAnimationClass(isInView, 'slide-in-right')
              )}
              style={{ animationDelay: '0.4s', opacity: isInView ? 1 : 0 }}
            >
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Email</h4>
                    <a href="mailto:info@ekgarden.com" className="text-sm text-primary hover:underline">
                      info@ekgarden.com
                    </a>
                  </div>
                </div>
                
                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <PhoneCall className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-sm text-primary hover:underline">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className={cn(
                "glass-panel p-8",
                getAnimationClass(isInView, 'slide-in-right')
              )}
              style={{ animationDelay: '0.5s', opacity: isInView ? 1 : 0 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-md mb-2">Schedule a Consultation</h3>
                  <p className="text-muted-foreground">
                    Book a free 30-minute consultation to discuss your enterprise knowledge needs.
                  </p>
                </div>
              </div>
              
              <Button className="btn-primary w-full flex items-center justify-center">
                Book a Meeting
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import cn from utils
import { cn } from '@/lib/utils';

export default ContactSection;
