
import { ReactNode } from 'react';
import { Search, FileStack, FolderTree, Database, Download, Bot, RefreshCw } from 'lucide-react';

export interface ProcessStep {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
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
    description: 'Develop a standardized taxonomy to classify knowledge with a domain-specific ontology for your EKG.'
  },
  {
    number: '03',
    icon: <FileStack className="w-5 h-5 text-primary" />,
    title: 'Design Knowledge Structure',
    description: 'Create metadata schemas, define indexing criteria, and set tagging guidelines for EKG implementation.'
  },
  {
    number: '04',
    icon: <Database className="w-5 h-5 text-primary" />,
    title: 'Select Technology Stack',
    description: 'Choose tools for storage, retrieval, metadata management, and collaboration in your EKG ecosystem.'
  },
  {
    number: '05',
    icon: <Download className="w-5 h-5 text-primary" />,
    title: 'Populate & Seed Knowledge',
    description: 'Ingest existing content with batch processes and AI classification tools into your EKG.'
  },
  {
    number: '06',
    icon: <Bot className="w-5 h-5 text-primary" />,
    title: 'Deploy AI-driven Retrieval',
    description: 'Implement semantic search with embeddings and contextual retrieval for effective EKG access.'
  },
  {
    number: '07',
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Nurturing & Maintenance',
    description: 'Set up continuous tagging, feedback loops, and mechanisms to detect obsolete knowledge in your EKG.'
  }
];
