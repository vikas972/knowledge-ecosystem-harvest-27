
import { cn } from '@/lib/utils';

interface MetadataTagsSectionProps {
  isInView: boolean;
}

const MetadataTagsSection = ({ isInView }: MetadataTagsSectionProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-8 h-full",
        isInView ? "animate-slide-in-right" : "opacity-0"
      )}
      style={{ animationDelay: '1.1s', opacity: isInView ? 1 : 0 }}
    >
      <h3 className="heading-md mb-6">Metadata Tags</h3>
      <p className="paragraph mb-6">
        Each knowledge entry in your EKG should be enriched with detailed metadata to enhance 
        discoverability and contextual relevance.
      </p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Essential Tags:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-primary/10 text-primary">Domain</span>
            <span className="chip bg-primary/10 text-primary">Purpose</span>
            <span className="chip bg-primary/10 text-primary">Owner</span>
            <span className="chip bg-primary/10 text-primary">Creation Date</span>
            <span className="chip bg-primary/10 text-primary">Update Frequency</span>
            <span className="chip bg-primary/10 text-primary">Linked Concepts</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2">BELIEF Strategic Tags:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-secondary text-secondary-foreground">Brand</span>
            <span className="chip bg-secondary text-secondary-foreground">End Customer</span>
            <span className="chip bg-secondary text-secondary-foreground">Leadership</span>
            <span className="chip bg-secondary text-secondary-foreground">IP</span>
            <span className="chip bg-secondary text-secondary-foreground">Execution</span>
            <span className="chip bg-secondary text-secondary-foreground">Finance</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2">Optional Tags:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-secondary text-secondary-foreground">Audience</span>
            <span className="chip bg-secondary text-secondary-foreground">Confidentiality</span>
            <span className="chip bg-secondary text-secondary-foreground">Format</span>
            <span className="chip bg-secondary text-secondary-foreground">Lifecycle Stage</span>
            <span className="chip bg-secondary text-secondary-foreground">Priority</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetadataTagsSection;
