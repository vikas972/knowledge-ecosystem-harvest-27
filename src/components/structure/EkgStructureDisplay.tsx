
import { cn } from '@/lib/utils';

interface EkgStructureDisplayProps {
  ekgStructure: string;
  isInView: boolean;
}

const EkgStructureDisplay = ({ ekgStructure, isInView }: EkgStructureDisplayProps) => {
  return (
    <div 
      className={cn(
        isInView ? "animate-fade-in-up" : "opacity-0"
      )}
      style={{ animationDelay: '1.0s', opacity: isInView ? 1 : 0 }}
    >
      <h3 className="heading-md mb-6">Example Implementation</h3>
      <p className="paragraph mb-6">
        A typical EKG structure organizes knowledge into logical domains with clear hierarchy and relationships.
        Each entry is tagged with metadata such as domain, purpose, owner, creation date, and linked concepts.
      </p>
      <div className="glass-panel p-6 overflow-hidden">
        <pre className="text-xs md:text-sm overflow-x-auto whitespace-pre text-foreground/80 font-mono">
          {ekgStructure}
        </pre>
      </div>
    </div>
  );
};

export default EkgStructureDisplay;
