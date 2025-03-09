
import { Package, Briefcase, Code } from 'lucide-react';
import { ReactNode } from 'react';

export interface OrganizationType {
  icon: ReactNode;
  type: string;
  focus: string;
  priorities: string[];
}

export const organizationTypes: OrganizationType[] = [
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

export const ekgStructure = `
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

export interface BeliefCapital {
  letter: string;
  name: string;
  definition: string;
  significance: string;
  examples: string;
}

export const beliefCapitals: BeliefCapital[] = [
  {
    letter: 'B',
    name: 'Brand Capital',
    definition: 'Represents the organization\'s identity, reputation, market perception, and differentiation.',
    significance: 'Drives premium pricing capability and strengthens customer loyalty through thought leadership and positioning.',
    examples: 'Thought leadership initiatives, innovative branding campaigns, consistent market messaging.'
  },
  {
    letter: 'E',
    name: 'End Customer Capital',
    definition: 'The depth, quality, and strategic value of relationships with end customers.',
    significance: 'Ensures customer retention, trust, and advocacy; enables proactive identification of customer needs.',
    examples: 'Building high trust quotients, being a customer\'s first port of call, receiving accolades from customers.'
  },
  {
    letter: 'L',
    name: 'Leadership Capital',
    definition: 'Strength and depth of leadership talent, decision-making quality, and organizational culture.',
    significance: 'Determines quality of organizational decisions and influences team performance and motivation.',
    examples: 'Effective conflict resolution, strong decision-making in tough situations, authentic leadership styles.'
  },
  {
    letter: 'I',
    name: 'Intellectual Property (IP) Capital',
    definition: 'Tangible and intangible knowledge assets that differentiate the organization competitively.',
    significance: 'Establishes innovation-driven differentiation and enhances enterprise value through monetizable IP.',
    examples: 'Patents, unique methodologies, innovative solutions, original processes, and new expertise.'
  },
  {
    letter: 'E',
    name: 'Execution Capital',
    definition: 'Ability of the organization and its teams to deliver and implement effectively and efficiently.',
    significance: 'Critical for timely and quality delivery (OTIF) and influences customer satisfaction.',
    examples: 'Breakthrough implementations, proactive diagnostics, solution design excellence, agile initiatives.'
  },
  {
    letter: 'F',
    name: 'Finance Capital',
    definition: 'The organization\'s acumen in managing finances, negotiations, pricing, and cash flow.',
    significance: 'Enables strong financial health, profitability, and reflects smart pricing strategies.',
    examples: 'Negotiating smart pricing options, demonstrating strong commercial acumen, strong collection efficiency.'
  }
];

export interface Artifact {
  artifact: string;
  category: string;
  beliefTags: string[];
}

export const exampleArtifacts: Artifact[] = [
  {
    artifact: 'Thought Leadership Blog',
    category: 'Sales & Marketing Knowledge',
    beliefTags: ['Brand']
  },
  {
    artifact: 'Successful Deal Closure',
    category: 'Sales & Marketing Knowledge',
    beliefTags: ['End Customer', 'Finance']
  },
  {
    artifact: 'Leadership Decisions Logs',
    category: 'Project Knowledge',
    beliefTags: ['Leadership']
  },
  {
    artifact: 'Innovative Product Patent',
    category: 'Product Knowledge',
    beliefTags: ['IP', 'Execution']
  },
  {
    artifact: 'Low-code Development Example',
    category: 'Technology Knowledge',
    beliefTags: ['Execution', 'IP']
  },
  {
    artifact: 'Contract Negotiation Strategies',
    category: 'Legal & Compliance Knowledge',
    beliefTags: ['Finance', 'End Customer']
  }
];
