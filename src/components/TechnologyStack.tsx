
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';

const techCategories = [
  {
    name: 'Storage & Indexing',
    tools: ['Elasticsearch/OpenSearch', 'MongoDB Atlas', 'Azure Cognitive Search']
  },
  {
    name: 'Knowledge Retrieval',
    tools: ['OpenAI (GPT-4, GPT-4o)', 'Azure OpenAI', 'LangChain', 'Vector DBs (Pinecone, Qdrant)']
  },
  {
    name: 'Metadata & Taxonomy',
    tools: ['PoolParty', 'Protégé', 'Apache Jena', 'Neo4j (Graph DB)']
  },
  {
    name: 'Knowledge Synthesis',
    tools: ['GenAI (LLMs)', 'Azure Semantic Search', 'HuggingFace Transformers']
  },
  {
    name: 'Collaboration & UI',
    tools: ['Confluence', 'SharePoint', 'Notion', 'Custom React/Angular Apps']
  },
  {
    name: 'Monitoring & Updates',
    tools: ['Datadog', 'Grafana', 'Azure Monitoring', 'OpenTelemetry']
  }
];

const enterpriseExamples = [
  'Salesforce Einstein GPT / Azure OpenAI Service',
  'SharePoint Syntex',
  'Notion AI / Atlassian Atlas / Confluence Cloud',
  'AWS Kendra / Azure Cognitive Search'
];

const TechnologyStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  return (
    <section id="technology" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium",
              getAnimationClass(isInView, 'fade-in')
            )}
            style={{ opacity: isInView ? 1 : 0 }}
          >
            Technology
          </div>
          
          <h2 
            className={cn(
              "heading-lg mb-6",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.1s', opacity: isInView ? 1 : 0 }}
          >
            Technology Stack and Tools
          </h2>
          
          <p 
            className={cn(
              "paragraph max-w-2xl mx-auto",
              getAnimationClass(isInView, 'fade-in-up')
            )}
            style={{ animationDelay: '0.2s', opacity: isInView ? 1 : 0 }}
          >
            Building an effective Enterprise Knowledge Garden requires the right set of technologies.
            Select tools depending on your enterprise type and scale.
          </p>
        </div>

        {/* Technology Categories */}
        <div 
          className={cn(
            "glass-panel p-8 mb-16",
            getAnimationClass(isInView, 'fade-in-up')
          )}
          style={{ animationDelay: '0.3s', opacity: isInView ? 1 : 0 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left pb-4 text-sm font-semibold">Function</th>
                  <th className="text-left pb-4 text-sm font-semibold">Recommended Technologies & Tools</th>
                </tr>
              </thead>
              <tbody>
                {techCategories.map((category, index) => (
                  <tr key={index} className="border-t border-primary/10">
                    <td className="py-4 pr-6 font-medium">{category.name}</td>
                    <td className="py-4">
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool, i) => (
                          <span key={i} className="chip bg-secondary text-secondary-foreground">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Components */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div 
              className={cn(
                getAnimationClass(isInView, 'fade-in-up')
              )}
              style={{ animationDelay: '0.4s', opacity: isInView ? 1 : 0 }}
            >
              <h3 className="heading-md mb-6">Key Technology Components</h3>
              
              <div className="glass-panel p-6 mb-6">
                <h4 className="heading-sm mb-3">Vector Databases</h4>
                <p className="text-muted-foreground mb-4">
                  Essential for semantic search capabilities, vector databases like Pinecone, Chroma, and Qdrant 
                  store embeddings that capture the semantic meaning of content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip bg-primary/10 text-primary">Pinecone</span>
                  <span className="chip bg-primary/10 text-primary">Chroma</span>
                  <span className="chip bg-primary/10 text-primary">Qdrant</span>
                  <span className="chip bg-primary/10 text-primary">Weaviate</span>
                </div>
              </div>
              
              <div className="glass-panel p-6">
                <h4 className="heading-sm mb-3">Large Language Models (LLMs)</h4>
                <p className="text-muted-foreground mb-4">
                  LLMs facilitate automated synthesis, summarization, and answering queries based on 
                  enterprise-specific context.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip bg-primary/10 text-primary">OpenAI GPT-4/4o</span>
                  <span className="chip bg-primary/10 text-primary">Azure OpenAI</span>
                  <span className="chip bg-primary/10 text-primary">Anthropic Claude</span>
                  <span className="chip bg-primary/10 text-primary">Cohere</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div 
              className={cn(
                getAnimationClass(isInView, 'slide-in-right')
              )}
              style={{ animationDelay: '0.5s', opacity: isInView ? 1 : 0 }}
            >
              <h3 className="heading-md mb-6">Real-world Enterprise Examples</h3>
              
              <div className="glass-panel p-6 mb-6">
                <p className="paragraph mb-6">
                  Many enterprises are already leveraging advanced technologies to build their knowledge systems.
                  Here are some real-world examples:
                </p>
                
                <ul className="space-y-4">
                  {enterpriseExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                className="glass-panel p-6 bg-primary/5 border border-primary/10"
                style={{ animationDelay: '0.7s', opacity: isInView ? 1 : 0 }}
              >
                <h4 className="heading-sm mb-3">Next Steps</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Start with a targeted Proof of Concept (POC) on a clearly defined domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Leverage LLMs, Vector DBs, and Semantic Search for quick wins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Gradually scale and expand coverage, building momentum</span>
                  </li>
                </ul>
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

export default TechnologyStack;
