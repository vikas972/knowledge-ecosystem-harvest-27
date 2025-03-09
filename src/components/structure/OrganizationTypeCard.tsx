
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OrganizationTypeCardProps {
  icon: ReactNode;
  type: string;
  focus: string;
  priorities: string[];
  isInView: boolean;
  index: number;
}

const OrganizationTypeCard = ({ 
  icon, 
  type, 
  focus, 
  priorities, 
  isInView, 
  index 
}: OrganizationTypeCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6",
        isInView ? "animate-scale-in" : "opacity-0"
      )}
      style={{ 
        animationDelay: `${0.3 + index * 0.1}s`,
        opacity: isInView ? 1 : 0
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="heading-sm mb-2">{type}</h3>
      <p className="text-sm text-muted-foreground mb-4">{focus}</p>
      <h4 className="text-sm font-semibold mb-2">Key Priorities:</h4>
      <ul className="space-y-1">
        {priorities.map((priority, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>{priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationTypeCard;
