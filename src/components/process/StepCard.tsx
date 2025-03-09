
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { getAnimationClass } from '@/lib/animations';

interface StepCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  isInView: boolean;
  index: number;
  isEven: boolean;
}

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description, 
  isInView, 
  index, 
  isEven 
}: StepCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12",
        isEven ? "lg:flex-row-reverse" : "",
        getAnimationClass(isInView, isEven ? 'slide-in-right' : 'slide-in-left')
      )}
      style={{ 
        animationDelay: `${0.2 + index * 0.1}s`,
        opacity: isInView ? 1 : 0
      }}
    >
      {/* Step Number with Icon */}
      <div className="lg:w-1/6 flex lg:justify-center">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-subtle border border-primary/10 z-10">
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">
            {number}
          </span>
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="lg:w-5/12">
        <div className="glass-panel p-6">
          <h3 className="heading-md mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Spacer for alignment */}
      <div className="hidden lg:block lg:w-5/12"></div>
    </div>
  );
};

export default StepCard;
