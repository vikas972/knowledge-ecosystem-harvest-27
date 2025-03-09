
import { ReactNode } from 'react';
import StepCard from './StepCard';

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  isInView: boolean;
}

const ProcessSteps = ({ steps, isInView }: ProcessStepsProps) => {
  return (
    <div className="relative">
      {/* Connection Line */}
      <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-primary/20 -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            icon={step.icon}
            title={step.title}
            description={step.description}
            isInView={isInView}
            index={index}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
