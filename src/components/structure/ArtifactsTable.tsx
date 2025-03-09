
import { Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Artifact {
  artifact: string;
  category: string;
  beliefTags: string[];
}

interface ArtifactsTableProps {
  artifacts: Artifact[];
  isInView: boolean;
}

const ArtifactsTable = ({ artifacts, isInView }: ArtifactsTableProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-8",
        isInView ? "animate-slide-in-right" : "opacity-0"
      )}
      style={{ animationDelay: '0.9s', opacity: isInView ? 1 : 0 }}
    >
      <h4 className="heading-sm mb-6 text-center">Example Artifacts with BELIEF Tagging</h4>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr>
              <th className="text-left pb-4 text-sm font-semibold">Artifact Example</th>
              <th className="text-left pb-4 text-sm font-semibold">Primary Category</th>
              <th className="text-left pb-4 text-sm font-semibold">BELIEF Tags</th>
            </tr>
          </thead>
          <tbody>
            {artifacts.map((item, index) => (
              <tr key={index} className="border-t border-primary/10">
                <td className="py-4 pr-6">{item.artifact}</td>
                <td className="py-4 pr-6">{item.category}</td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-2">
                    {item.beliefTags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
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
  );
};

export default ArtifactsTable;
