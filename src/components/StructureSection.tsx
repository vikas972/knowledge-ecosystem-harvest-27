
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Package, Briefcase, Code } from 'lucide-react';

const organizationTypes = [
  {
    icon: <Package className="w-6 h-6 text-primary" />,
    type: 'Product-centric Enterprise',
    focus: 'Product taxonomy and roadmap alignment',
    priorities: [
      'Features documentation',
      'Release notes',
      'Integration guidelines',
      'Troubleshooting guides'
    ]
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    type: 'Service-centric Enterprise',
    focus: 'Projects, client engagements, and case studies',
    priorities: [
      'Client engagements',
      'Industry-specific solutions',
      'Reusable proposals',
      'RFP responses'
    ]
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    type: 'Technology-centric Enterprise',
    focus: 'Tech stacks, architectures, and best practices',
    priorities: [
      'Tech stacks documentation',
      'Architecture patterns',
      'Reusable code/components',
      'API guidelines'
    ]
  }
];

const ekg = `
Enterprise Knowledge Garden
├── Product Knowledge
│   ├── Product Documentation
│   ├── Technical Specs
│   └── Troubleshooting Guides
├── Sales & Marketing Knowledge
│   ├── RFP Responses
│   ├── Case Studies
│   └── Proposals
├── Project Knowledge
│   ├── Lessons Learned
│   ├── Best Practices
│   └── Project Archives
├── Legal & Compliance Knowledge
│   └── Contracts & Agreements
├── Technology Knowledge
│   ├── Architecture & Design Docs
│   ├── Standards & Protocols
│   └── Code Samples & Libraries
└── Operations Knowledge
    └── SOPs, Guidelines, & Processes
`;

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
            <div 
              key={index}
              className={cn(
                "glass-panel p-6",
                getAnimationClass(isInView, 'scale-in')
              )}
              style={{ 
                animationDelay: `${0.3 + index * 0.1}s`,
                opacity: isInView ? 1 : 0
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {org.icon}
              </div>
              <h3 className="heading-sm mb-2">{org.type}</h3>
              <p className="text-sm text-muted-foreground mb-4">{org.focus}</p>
              <h4 className="text-sm font-semibold mb-2">Key Priorities:</h4>
              <ul className="space-y-1">
                {org.priorities.map((priority, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Example Implementation */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div 
              className={cn(
                getAnimationClass(isInView, 'fade-in-up')
              )}
              style={{ animationDelay: '0.6s', opacity: isInView ? 1 : 0 }}
            >
              <h3 className="heading-md mb-6">Example Implementation</h3>
              <p className="paragraph mb-6">
                A typical EKG structure organizes knowledge into logical domains with clear hierarchy and relationships.
                Each entry is tagged with metadata such as domain, purpose, owner, creation date, and linked concepts.
              </p>
              <div className="glass-panel p-6 overflow-hidden">
                <pre className="text-xs md:text-sm overflow-x-auto whitespace-pre text-foreground/80 font-mono">
                  {ekg}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div 
              className={cn(
                "glass-panel p-8 h-full",
                getAnimationClass(isInView, 'slide-in-right')
              )}
              style={{ animationDelay: '0.7s', opacity: isInView ? 1 : 0 }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

// Import cn from utils
import { cn } from '@/lib/utils';

export default StructureSection;
