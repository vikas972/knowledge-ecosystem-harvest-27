
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Search, FileStack, FolderTree, Database, Download, Bot, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Discovery & Assessment',
    description: 'Identify all knowledge repositories across your enterprise and assess their format and priority.'
  },
  {
    number: '02',
    icon: <FolderTree className="w-5 h-5 text-primary" />,
    title: 'Define Knowledge Taxonomy',
    description: 'Develop a standardized taxonomy to classify knowledge with a domain-specific ontology.'
  },
  {
    number: '03',
    icon: <FileStack className="w-5 h-5 text-primary" />,
    title: 'Design Knowledge Structure',
    description: 'Create metadata schemas, define indexing criteria, and set tagging guidelines.'
  },
  {
    number: '04',
    icon: <Database className="w-5 h-5 text-primary" />,
    title: 'Select Technology Stack',
    description: 'Choose tools for storage, retrieval, metadata management, and collaboration.'
  },
  {
    number: '05',
    icon: <Download className="w-5 h-5 text-primary" />,
    title: 'Populate & Seed Knowledge',
    description: 'Ingest existing content with batch processes and AI classification tools.'
  },
  {
    number: '06',
    icon: <Bot className="w-5 h-5 text-primary" />,
    title: 'Deploy AI-driven Retrieval',
    description: 'Implement semantic search with embeddings and contextual retrieval.'
  },
  {
    number: '07',
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Nurturing & Maintenance',
    description: 'Set up continuous tagging, feedback loops, and mechanisms to detect obsolete knowledge.'
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ opacity: isInView ? 1 : 0 }}
          >
            Implementation
          </div>
          
          <h2 
            className={cn(
              "heading-lg mb-6",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
          >
            Step-by-Step Process to set up an EKG
          </h2>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mx-auto",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            Building an effective Enterprise Knowledge Garden requires a structured approach. 
            Follow these seven steps to transform your organization's knowledge management.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-primary/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12",
                  index % 2 === 1 ? "lg:flex-row-reverse" : "",
                  getAnimationClass(isInView, index % 2 === 0 ? 'slide-in-left' : 'slide-in-right')
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
                      {step.number}
                    </span>
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-5/12">
                  <div className="glass-panel p-6">
                    <h3 className="heading-md mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Import cn from utils
import { cn } from '@/lib/utils';

export default ProcessSection;
