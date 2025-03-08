
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import { CheckCircle2, FileText, FileCheck, FileCode, Lightbulb, FileSearch } from 'lucide-react';

const knowledgeAssets = [
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    text: 'RFPs and proposals'
  },
  {
    icon: <FileCheck className="w-5 h-5 text-primary" />,
    text: 'Contracts and legal documents'
  },
  {
    icon: <FileCode className="w-5 h-5 text-primary" />,
    text: 'Product documentation'
  },
  {
    icon: <FileSearch className="w-5 h-5 text-primary" />,
    text: 'Testing strategies'
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
    text: 'Troubleshooting notes'
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    text: 'Project plans and best practices'
  }
];

const benefits = [
  'Reduction in duplicated effort',
  'Faster response to business opportunities',
  'Better decision-making with existing insights',
  'Continuous improvement through knowledge reuse'
];

const ValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section id="value" ref={sectionRef} className="py-20 md:py-28 bg-secondary/50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <div 
              className={cn(
                "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
                getAnimationClass(isInView, 'fade-in')
              )}
              style={{ opacity: isInView ? 1 : 0 }}
            >
              Value Proposition
            </div>
            
            <h2 
              className={cn(
                "heading-lg mb-6",
                getAnimationClass(isInView, 'fade-in-up')
              )}
              style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
            >
              Why do Enterprises need an EKG?
            </h2>
            
            <p 
              className={cn(
                "paragraph mb-8",
                getAnimationClass(isInView, 'fade-in-up')
              )}
              style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
            >
              Enterprises have an abundance of unstructured, hidden, and fragmented knowledge assets 
              that are often difficult to locate, access, and leverage when needed.
            </p>

            <div 
              className={cn(
                "glass-panel p-6 mb-8",
                getAnimationClass(isInView, 'fade-in-up')
              )}
              style={{ animationDelay: '0.3s', opacity: isInView ? 1 : 0 }}
            >
              <h3 className="heading-sm mb-4">Key Knowledge Assets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {knowledgeAssets.map((asset, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {asset.icon}
                    <span className="text-sm">{asset.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div 
              className={cn(
                "glass-panel p-8 h-full",
                getAnimationClass(isInView, 'slide-in-right')
              )}
              style={{ animationDelay: '0.4s', opacity: isInView ? 1 : 0 }}
            >
              <h3 className="heading-md mb-6">An EKG ensures:</h3>
              
              <ul className="check-list mb-8">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="check-list-item"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm italic">
                  "Organizations that effectively manage their knowledge assets are 5x more likely to respond 
                  quickly to market changes and 3x more efficient at reusing existing solutions."
                </p>
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

export default ValueSection;
