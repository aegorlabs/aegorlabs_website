import { Brain, Cpu, Blocks, LineChart } from 'lucide-react';

export const caseStudies = [
  {
    id: 'global-bank-risk-ml',
    title: 'AI-Driven Risk Scoring for a Global Bank',
    client: 'Quantum Financial',
    category: 'AI & Machine Learning',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    summary: 'Developed a custom machine learning pipeline that reduced credit risk processing time by 68% and saved $42M annually.',
    metrics: [
      { label: 'Processing Time Reduced', value: '68%' },
      { label: 'Annual Savings', value: '$42M' },
      { label: 'Model Accuracy', value: '99.4%' }
    ]
  },
  {
    id: 'healthcare-gen-ai',
    title: 'Generative AI for Healthcare Triage',
    client: 'Vanguard Medical',
    category: 'Generative AI',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    summary: 'Built a HIPAA-compliant LLM agent that automates patient intake routing, reducing wait times and manual triage by thousands of hours.',
    metrics: [
      { label: 'Intake Automation', value: '85%' },
      { label: 'Wait Time Reduction', value: '40 mins' },
      { label: 'Staff Hours Saved', value: '12k/yr' }
    ]
  },
  {
    id: 'supply-chain-blockchain',
    title: 'Global Supply Chain Tokenization',
    client: 'GlobalTech Logistics',
    category: 'Blockchain & Web3',
    icon: Blocks,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    summary: 'Implemented an enterprise smart-contract infrastructure tracking $2B+ in global freight across 4 continents.',
    metrics: [
      { label: 'Assets Tracked', value: '$2.1B' },
      { label: 'Dispute Reduction', value: '94%' },
      { label: 'Transaction Speed', value: '< 2s' }
    ]
  },
  {
    id: 'saas-scale-migration',
    title: 'Cloud-Native Migration for Enterprise SaaS',
    client: 'CloudNet Inc',
    category: 'Custom Software',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    summary: 'Re-architected a legacy monolith into a scalable microservices ecosystem, enabling the client to serve 5M+ daily active users.',
    metrics: [
      { label: 'Infrastructure Costs', value: '-40%' },
      { label: 'Uptime', value: '99.999%' },
      { label: 'Daily Users Scaled', value: '5M+' }
    ]
  }
];
