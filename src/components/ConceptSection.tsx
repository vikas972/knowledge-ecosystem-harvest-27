
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Layers, Network, Braces, RefreshCw, Users, Filter } from 'lucide-react';

const features = [
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Dynamic & Evolving',
    description: 'Continuously enriched and maintained to grow with your organization.'
  },
  {
    icon: <Braces className="w-5 h-5 text-primary" />,
    title: 'Structured & Well-tagged',
    description: 'Knowledge is meticulously organized with powerful metadata.'
  },
  {
    icon: <Filter className="w-5 h-5 text-primary" />,
    title: 'Context-aware',
    description: 'AI-driven contextual searches and proactive knowledge recommendations.'
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'Collaborative',
    description: 'Encourages participation across teams and disciplines.'
  },
  {
    icon: <Network className="w-5 h-5 text-primary" />,
    title: 'Interconnected',
    description: 'Knowledge is linked contextually rather than isolated in silos.'
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Self-nurturing',
    description: 'Knowledge continuously grows through contributions and AI systems.'
  }
];

const ConceptSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section id="concept" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ opacity: isInView ? 1 : 0 }}
          >
            Concept
          </div>
          
          <h2 
            className={cn(
              "heading-lg mb-6",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
          >
            What is an Enterprise Knowledge Garden?
          </h2>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mx-auto",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            An Enterprise Knowledge Garden (EKG) is an evolving, structured repository of enterprise knowledge 
            that facilitates continuous synthesis, easy retrieval, collaboration, and reuse of insights and expertise 
            across the organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "feature-card",
                getAnimationClass(isInView, 'scale-in')
              )}
              style={{ 
                animationDelay: `${0.2 + index * 0.1}s`,
                opacity: isInView ? 1 : 0
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="heading-sm mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import cn from utils
import { cn } from '@/lib/utils';

export default ConceptSection;
