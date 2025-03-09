
import { cn } from '@/lib/utils';
import BeliefCapitalCard from './BeliefCapitalCard';
import ArtifactsTable from './ArtifactsTable';

interface BeliefCapital {
  letter: string;
  name: string;
  definition: string;
  significance: string;
  examples: string;
}

interface Artifact {
  artifact: string;
  category: string;
  beliefTags: string[];
}

interface BeliefFrameworkSectionProps {
  beliefCapitals: BeliefCapital[];
  exampleArtifacts: Artifact[];
  isInView: boolean;
}

const BeliefFrameworkSection = ({ 
  beliefCapitals, 
  exampleArtifacts, 
  isInView 
}: BeliefFrameworkSectionProps) => {
  return (
    <div 
      className={cn(
        "mb-16",
        isInView ? "animate-fade-in-up" : "opacity-0"
      )}
      style={{ animationDelay: '0.6s', opacity: isInView ? 1 : 0 }}
    >
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Strategic Framework
        </div>
        <h3 className="heading-md mb-4">The BELIEF Framework as a Strategic Overlay</h3>
        <p className="paragraph">
          The BELIEF framework (Brand, End Customer, Leadership, IP, Execution, Finance) 
          provides powerful strategic dimensions to enrich your Knowledge Garden without disrupting its fundamental structure.
        </p>
      </div>

      {/* BELIEF Capitals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {beliefCapitals.map((capital, index) => (
          <BeliefCapitalCard 
            key={index}
            letter={capital.letter}
            name={capital.name}
            definition={capital.definition}
            significance={capital.significance}
            examples={capital.examples}
            isInView={isInView}
            index={index}
          />
        ))}
      </div>
      
      {/* Example Artifacts with BELIEF Tagging */}
      <ArtifactsTable 
        artifacts={exampleArtifacts}
        isInView={isInView}
      />
    </div>
  );
};

export default BeliefFrameworkSection;
