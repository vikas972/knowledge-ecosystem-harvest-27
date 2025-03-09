
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { cn } from '@/lib/utils';
import ProcessSteps from './process/ProcessSteps';
import { processSteps } from './process/processData';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ opacity: isInView ? 1 : 0 }}
          >
            Implementation
          </div>
          
          <h2 
            className={cn(
              "heading-lg mb-6",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
          >
            Step-by-Step Process to set up an EKG
          </h2>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mx-auto",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            Building an effective Enterprise Knowledge Garden requires a structured approach. 
            Follow these seven steps to transform your organization's knowledge management.
          </p>
        </div>

        {/* Steps Grid */}
        <ProcessSteps steps={processSteps} isInView={isInView} />
      </div>
    </section>
  );
};

export default ProcessSection;
