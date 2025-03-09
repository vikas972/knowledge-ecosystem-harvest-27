
import { cn } from '@/lib/utils';

interface BeliefCapitalCardProps {
  letter: string;
  name: string;
  definition: string;
  significance: string;
  examples: string;
  isInView: boolean;
  index: number;
}

const BeliefCapitalCard = ({ 
  letter, 
  name, 
  definition, 
  significance, 
  examples, 
  isInView, 
  index 
}: BeliefCapitalCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6 relative overflow-hidden",
        isInView ? "animate-scale-in" : "opacity-0"
      )}
      style={{ 
        animationDelay: `${0.7 + index * 0.1}s`,
        opacity: isInView ? 1 : 0
      }}
    >
      <span className="absolute -top-4 -left-4 text-8xl font-bold text-primary/5">
        {letter}
      </span>
      <div className="relative z-10">
        <h4 className="heading-sm mb-2">{name}</h4>
        <p className="text-sm text-muted-foreground mb-3">{definition}</p>
        <h5 className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-1">Significance</h5>
        <p className="text-xs text-muted-foreground mb-3">{significance}</p>
        <h5 className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-1">Examples</h5>
        <p className="text-xs text-muted-foreground">{examples}</p>
      </div>
    </div>
  );
};

export default BeliefCapitalCard;
