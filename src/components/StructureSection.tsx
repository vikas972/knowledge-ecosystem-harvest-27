
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { cn } from '@/lib/utils';
import OrganizationTypeCard from './structure/OrganizationTypeCard';
import BeliefFrameworkSection from './structure/BeliefFrameworkSection';
import EkgStructureDisplay from './structure/EkgStructureDisplay';
import MetadataTagsSection from './structure/MetadataTagsSection';
import { 
  organizationTypes, 
  beliefCapitals, 
  exampleArtifacts, 
  ekgStructure 
} from './structure/OrganizationTypes';

const StructureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section id="structure" ref={sectionRef} className="py-20 md:py-28 bg-secondary/50">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ opacity: isInView ? 1 : 0 }}
          >
            Organization
          </div>
          
          <h2 
            className={cn(
              "heading-lg mb-6",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
          >
            Structuring EKG for Different Organizations
          </h2>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mx-auto",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            The structure of your Enterprise Knowledge Garden should align with your organization's focus and priorities.
            Here's how to customize the EKG structure for different types of enterprises.
          </p>
        </div>

        {/* Organization Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {organizationTypes.map((org, index) => (
            <OrganizationTypeCard
              key={index}
              icon={org.icon}
              type={org.type}
              focus={org.focus}
              priorities={org.priorities}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>

        {/* BELIEF Capitals Section */}
        <BeliefFrameworkSection
          beliefCapitals={beliefCapitals}
          exampleArtifacts={exampleArtifacts}
          isInView={isInView}
        />

        {/* Example Implementation */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <EkgStructureDisplay
              ekgStructure={ekgStructure}
              isInView={isInView}
            />
          </div>
          
          <div className="lg:w-1/2">
            <MetadataTagsSection isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
