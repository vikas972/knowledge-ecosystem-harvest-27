
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView, getAnimationClass } from '@/lib/animations';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Introducing Enterprise Knowledge Garden
          </div>
          
          <h1 
            className={cn(
              "heading-xl mb-6 max-w-2xl",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.3s', opacity: isInView ? 1 : 0 }}
          >
            Cultivate Your Enterprise Knowledge for Growth and Innovation
          </h1>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mb-8",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.4s', opacity: isInView ? 1 : 0 }}
          >
            Transform fragmented information into a thriving ecosystem of interconnected insights. 
            Our Enterprise Knowledge Garden approach helps organizations cultivate, nurture, and harvest 
            valuable enterprise knowledge with unprecedented efficiency.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-start sm:items-center gap-4",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.5s', opacity: isInView ? 1 : 0 }}
          >
            <a href="#contact" className="btn-primary">
              Start Your Knowledge Garden
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#concept" className="btn-secondary">
              Learn How It Works
            </a>
          </div>
        </div>

        {/* Hero Graphic */}
        <div 
          className={cn(
            "mt-12 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-2/5 glass-panel p-6",
            getAnimationClass(isInView, 'fade-in')
          )}
          style={{ animationDelay: '0.7s', opacity: isInView ? 1 : 0 }}
        >
          <div className="aspect-[4/3] bg-primary/10 rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-subtle flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M7 10V14M17 8V16M3 12H4M5.5 5.5L6.5 6.5M12 3V4M18.5 5.5L17.5 6.5M21 12H20" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="text-primary"/>
                </svg>
              </div>
              <h3 className="heading-md mb-2">Dynamic & Evolving</h3>
              <p className="text-muted-foreground text-sm">
                Unlike static knowledge bases, an EKG continuously grows and adapts with your organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#concept" className="block w-8 h-12 border-2 border-primary/30 rounded-full">
          <span className="block w-1.5 h-1.5 mx-auto bg-primary rounded-full mt-3 animate-float"></span>
        </a>
      </div>
    </section>
  );
};

// Import cn from utils to avoid errors
import { cn } from '@/lib/utils';

export default HeroSection;
