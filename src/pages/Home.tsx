import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Blocks,
  Code,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Workflow,
  Database,
  Bot,
  MessageSquareText,
  Network,
  LineChart,
  Zap,
  Server,
  Cloud,
  Sparkles,
  Layers,
  TrendingUp,
  Users,
  Target,
  Wrench,
  Lightbulb,
  Banknote,
  GraduationCap,
  ShoppingCart,
  Megaphone,
  Factory,
  Briefcase,
  Mail,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-ink-950 text-white overflow-hidden">
        {/* Subtle grid + gradient background */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950 to-ink-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-32 lg:pb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-ink-300 text-xs font-medium mb-8">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                AI Solutions · Automation · LLM Applications · Data · AI Agents
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-7 text-balance">
                AI Solutions Built for{' '}
                <span className="font-serif-display italic text-brand-400 font-normal">Real Business.</span>
              </h1>

              <p className="text-lg text-ink-400 leading-relaxed mb-10 max-w-lg">
                Aegor Labs helps organizations design, develop and deploy practical AI solutions — from intelligent automation and AI agents to custom LLM applications and data-driven systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-ink-900 px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-ink-100 transition-all"
                >
                  Talk to an AI Expert
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="#what-we-build"
                  className="inline-flex items-center justify-center bg-white/5 border border-white/15 text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  Explore Our Solutions
                </a>
              </div>
            </div>

            {/* Right: AI Architecture Visual */}
            <div className="hidden lg:block relative">
              <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                {/* Window header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-ink-700" />
                  <div className="w-3 h-3 rounded-full bg-ink-700" />
                  <div className="w-3 h-3 rounded-full bg-ink-700" />
                  <span className="ml-3 text-xs text-ink-500 font-mono">ai-agent-workflow.aegor</span>
                </div>

                {/* Workflow nodes */}
                <div className="space-y-3">
                  {[
                    { icon: Users, label: 'User / Business Request', color: 'text-brand-400', bg: 'bg-brand-500/10' },
                    { icon: Bot, label: 'AI Agent', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { icon: Database, label: 'Knowledge / RAG', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                    { icon: Wrench, label: 'Tools & APIs', color: 'text-amber-400', bg: 'bg-amber-500/10' },
                    { icon: Server, label: 'Business Systems', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                    { icon: CheckCircle2, label: 'Action / Result', color: 'text-green-400', bg: 'bg-green-500/10' },
                  ].map((node, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`flex items-center gap-3 ${node.bg} border border-white/5 rounded-lg px-4 py-3 flex-1`}>
                        <node.icon className={`w-5 h-5 ${node.color}`} />
                        <span className="text-sm font-medium text-ink-200">{node.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connection lines */}
                <div className="absolute left-12 top-20 bottom-12 w-px bg-gradient-to-b from-brand-400/40 via-white/10 to-green-400/40" />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                AI Agent Workflow
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST / CAPABILITIES STRIP
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-ink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-ink-900 mb-4 text-balance">
              Technology That Solves Business Problems
            </h2>
            <p className="text-ink-500 text-lg">
              We bring engineering depth and AI expertise to every engagement — building systems that work in production, not just in demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200 rounded-xl overflow-hidden border border-ink-200">
            {[
              { icon: Cpu, title: 'AI Engineering', desc: 'Design and development of production-ready AI systems.' },
              { icon: Workflow, title: 'Intelligent Automation', desc: 'Automate workflows using AI, APIs and intelligent agents.' },
              { icon: Building2, title: 'Enterprise AI', desc: 'Build scalable AI applications around real organizational requirements.' },
              { icon: Database, title: 'Data & Intelligence', desc: 'Turn business data into actionable intelligence.' },
            ].map((cap) => (
              <div key={cap.title} className="bg-white p-8 hover:bg-ink-50 transition-colors group">
                <cap.icon className="w-7 h-7 text-brand-600 mb-5" />
                <h3 className="text-base font-bold text-ink-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TECHNOLOGY ECOSYSTEM / PARTNERS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-50 py-16 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-ink-400 uppercase tracking-wider mb-10">
            Our Technology Ecosystem
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'OpenAI', icon: Sparkles },
              { name: 'Python', icon: Code },
              { name: 'React', icon: Layers },
              { name: 'PostgreSQL', icon: Database },
              { name: 'n8n', icon: Workflow },
              { name: 'Cloud Infra', icon: Cloud },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 text-ink-400 hover:text-ink-700 transition-colors"
              >
                <tech.icon className="w-8 h-8" />
                <span className="text-sm font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT WE BUILD — SERVICES
      ═══════════════════════════════════════════════════ */}
      <section id="what-we-build" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">What We Build</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-5 text-balance">
              AI solutions organized around business outcomes.
            </h2>
            <p className="text-lg text-ink-500">
              We don't just build models. We build complete systems — from data pipeline to user interface — that solve real problems for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI & LLM Solutions */}
            <div className="bg-ink-50 border border-ink-200 rounded-2xl p-8 hover:border-ink-300 transition-all group">
              <div className="w-11 h-11 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
                <Brain className="w-5 h-5 text-brand-700" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">AI & LLM Solutions</h3>
              <p className="text-sm text-ink-500 mb-5 leading-relaxed">
                Custom AI applications using modern large language models. We build RAG systems, knowledge assistants, AI-powered search, and document intelligence.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                {['LLM Applications', 'RAG & Knowledge Assistants', 'AI-Powered Search', 'Document Intelligence', 'OpenAI Integrations'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Agents & Automation */}
            <div className="bg-ink-50 border border-ink-200 rounded-2xl p-8 hover:border-ink-300 transition-all group">
              <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <Bot className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">AI Agents & Automation</h3>
              <p className="text-sm text-ink-500 mb-5 leading-relaxed">
                Intelligent systems that can reason, access information, use tools, interact with business applications and execute multi-step workflows.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                {['AI Agents', 'Workflow Automation', 'API Automation', 'Intelligent Process Automation', 'n8n / Automation'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom AI Software */}
            <div className="bg-ink-50 border border-ink-200 rounded-2xl p-8 hover:border-ink-300 transition-all group">
              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <Code className="w-5 h-5 text-orange-700" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">Custom AI Software</h3>
              <p className="text-sm text-ink-500 mb-5 leading-relaxed">
                Purpose-built AI applications for specific organizational requirements. Full-stack development from concept to deployment.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                {['Custom SaaS Platforms', 'AI-Powered Web Apps', 'Enterprise Integrations', 'Scalable Architecture', 'Production Deployment'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data & Analytics */}
            <div className="bg-ink-50 border border-ink-200 rounded-2xl p-8 hover:border-ink-300 transition-all group">
              <div className="w-11 h-11 bg-cyan-100 rounded-xl flex items-center justify-center mb-5">
                <LineChart className="w-5 h-5 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">Data & Analytics</h3>
              <p className="text-sm text-ink-500 mb-5 leading-relaxed">
                Use data, analytics and AI to support better business decisions. We build data pipelines, dashboards, and intelligent reporting systems.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                {['Data Pipelines', 'Analytics Dashboards', 'Predictive Models', 'Business Intelligence', 'Data Infrastructure'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Consulting */}
            <div className="bg-ink-50 border border-ink-200 rounded-2xl p-8 hover:border-ink-300 transition-all group">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <Lightbulb className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">AI Consulting</h3>
              <p className="text-sm text-ink-500 mb-5 leading-relaxed">
                AI strategy, architecture, implementation and transformation support. We help you identify where AI creates real value — and where it doesn't.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                {['AI Strategy', 'Architecture Design', 'Technology Selection', 'Implementation Support', 'Team Enablement'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <Link
              to="/contact"
              className="bg-ink-900 text-white rounded-2xl p-8 flex flex-col justify-between hover:bg-ink-800 transition-all group"
            >
              <div>
                <h3 className="text-lg font-bold mb-2">Not sure where to start?</h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  Tell us about your business challenge. We'll help you identify where AI can create measurable value.
                </p>
              </div>
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm mt-6 group-hover:gap-3 transition-all">
                Talk to an AI Expert <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          AI AGENTS — DIFFERENTIATOR
      ═══════════════════════════════════════════════════ */}
      <section id="ai-agents" className="bg-ink-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-3">AI Agents</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-5 text-balance">
              AI That Doesn't Just Answer.{' '}
              <span className="font-serif-display italic text-brand-400 font-normal">It Acts.</span>
            </h2>
            <p className="text-lg text-ink-400 leading-relaxed">
              Build intelligent AI systems that can reason, access information, use tools, interact with business applications and execute multi-step workflows.
            </p>
          </div>

          {/* Agent Workflow Visualization */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-3 items-center">
              {[
                { icon: Users, label: 'Business Request', desc: 'A user or system initiates a task' },
                { icon: Bot, label: 'AI Agent', desc: 'Reasons about the request and plans steps' },
                { icon: Database, label: 'Knowledge / RAG', desc: 'Retrieves relevant information from your data' },
                { icon: Wrench, label: 'Tools & APIs', desc: 'Executes actions via integrated tools' },
                { icon: Server, label: 'Business Systems', desc: 'Interacts with your internal systems' },
                { icon: CheckCircle2, label: 'Result', desc: 'Delivers an actionable outcome' },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center hover:bg-white/[0.07] transition-colors">
                    <step.icon className="w-7 h-7 text-brand-400 mx-auto mb-3" />
                    <div className="text-sm font-bold text-white mb-1">{step.label}</div>
                    <div className="text-xs text-ink-500 leading-relaxed">{step.desc}</div>
                  </div>
                  {i < 5 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-ink-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Agent capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: MessageSquareText, title: 'Natural Language Interface', desc: 'Users interact through conversation, not complex UIs.' },
              { icon: Network, title: 'Multi-Step Reasoning', desc: 'Agents break down complex tasks and plan execution paths.' },
              { icon: Zap, title: 'Real-Time Action', desc: 'Connect to APIs, databases, and business tools to get things done.' },
            ].map((cap) => (
              <div key={cap.title} className="border border-white/10 rounded-xl p-6 hover:bg-white/[0.03] transition-colors">
                <cap.icon className="w-6 h-6 text-brand-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TECHNOLOGY STACK
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Technology</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-5 text-balance">
              Built on Modern AI Technology
            </h2>
            <p className="text-lg text-ink-500">
              We work with a carefully selected stack — proven, production-ready, and chosen for each client's specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200 rounded-xl overflow-hidden border border-ink-200">
            {[
              {
                category: 'Artificial Intelligence',
                icon: Brain,
                items: ['Generative AI', 'LLMs', 'Machine Learning', 'NLP', 'Computer Vision'],
              },
              {
                category: 'AI Engineering',
                icon: Cpu,
                items: ['RAG', 'AI Agents', 'Prompt Engineering', 'Model Integration', 'AI Evaluation'],
              },
              {
                category: 'Automation',
                icon: Workflow,
                items: ['n8n', 'API Integrations', 'Workflow Automation', 'Intelligent Processes'],
              },
              {
                category: 'Engineering',
                icon: Code,
                items: ['Python', 'React', 'Next.js', 'PostgreSQL', 'Cloud Infrastructure'],
              },
            ].map((col) => (
              <div key={col.category} className="bg-white p-8">
                <col.icon className="w-6 h-6 text-brand-600 mb-4" />
                <h3 className="text-sm font-bold text-ink-900 mb-4 uppercase tracking-wide">{col.category}</h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-ink-600 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-ink-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INDUSTRIES
      ═══════════════════════════════════════════════════ */}
      <section id="industries" className="bg-ink-50 py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Industries</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-5 text-balance">
              AI Across Industries
            </h2>
            <p className="text-lg text-ink-500">
              We work with organizations across sectors — each with different requirements, regulations, and opportunities for AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Banknote, name: 'BFSI', desc: 'AI-powered customer service, document intelligence, workflow automation and intelligent knowledge systems.' },
              { icon: GraduationCap, name: 'Education', desc: 'Personalized learning assistants, automated content generation, and intelligent tutoring systems.' },
              { icon: ShoppingCart, name: 'Retail & E-commerce', desc: 'Product recommendations, inventory optimization, and AI-driven customer experiences.' },
              { icon: Megaphone, name: 'Marketing', desc: 'Content generation, campaign intelligence, customer segmentation and marketing automation.' },
              { icon: Factory, name: 'Manufacturing', desc: 'Predictive maintenance, quality inspection, supply chain optimization and process automation.' },
              { icon: Briefcase, name: 'Professional Services', desc: 'Knowledge management, document automation, client intelligence and operational efficiency.' },
            ].map((industry) => (
              <div
                key={industry.name}
                className="bg-white border border-ink-200 rounded-xl p-7 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-ink-100 rounded-lg flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                    <industry.icon className="w-5 h-5 text-ink-700 group-hover:text-brand-600 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-ink-900">{industry.name}</h3>
                </div>
                <p className="text-sm text-ink-500 leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CASE STUDIES / WORK
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Our Work</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-4 text-balance">
                From AI Ideas to Working Systems
              </h2>
              <p className="text-lg text-ink-500">
                We turn AI concepts into production systems that deliver measurable business value.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm font-semibold text-ink-900 hover:text-brand-600 transition-colors shrink-0"
            >
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                category: 'AI & Machine Learning',
                title: 'AI-Driven Risk Scoring System',
                challenge: 'Manual credit risk assessment was slow and inconsistent across analysts.',
                solution: 'Custom ML pipeline with real-time scoring integrated into existing banking infrastructure.',
                tech: ['Python', 'Machine Learning', 'REST API'],
                outcome: 'Reduced processing time and improved consistency of risk decisions.',
                image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              },
              {
                icon: Cpu,
                category: 'Generative AI',
                title: 'Healthcare Triage Assistant',
                challenge: 'Patient intake routing required extensive manual triage by clinical staff.',
                solution: 'HIPAA-compliant LLM agent that automates intake routing based on patient symptoms and history.',
                tech: ['LLM', 'RAG', 'Healthcare API'],
                outcome: 'Reduced manual triage time and improved patient routing accuracy.',
                image: 'https://images.pexels.com/photos/8134080/pexels-photo-8134080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              },
              {
                icon: Blocks,
                category: 'Blockchain & Web3',
                title: 'Supply Chain Tokenization',
                challenge: 'Lack of transparency and traceability across global freight operations.',
                solution: 'Smart-contract infrastructure tracking assets on-chain with real-time status updates.',
                tech: ['Solidity', 'Smart Contracts', 'Web3'],
                outcome: 'Improved transparency and reduced disputes across the supply chain.',
                image: 'https://images.pexels.com/photos/10325707/pexels-photo-10325707.png?auto=compress&cs=tinysrgb&h=650&w=940',
              },
              {
                icon: Code,
                category: 'Custom Software',
                title: 'Cloud-Native SaaS Migration',
                challenge: "Legacy monolith couldn't scale to meet growing user demand.",
                solution: 'Re-architected into scalable microservices with automated CI/CD and cloud infrastructure.',
                tech: ['React', 'PostgreSQL', 'Cloud'],
                outcome: 'Enabled the platform to handle significantly higher traffic with improved reliability.',
                image: 'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              },
            ].map((study, i) => (
              <div
                key={i}
                className="bg-white border border-ink-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 relative overflow-hidden bg-ink-100 min-h-[180px]">
                    <img
                      src={study.image}
                      alt={study.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-ink-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                      <study.icon className="w-3.5 h-3.5" />
                      {study.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-6 flex flex-col">
                    <h3 className="text-lg font-bold text-ink-900 mb-3 group-hover:text-brand-700 transition-colors">
                      {study.title}
                    </h3>
                    <div className="space-y-3 text-sm flex-grow">
                      <div>
                        <span className="text-xs font-semibold text-ink-400 uppercase tracking-wide">Challenge</span>
                        <p className="text-ink-600 mt-0.5">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-ink-400 uppercase tracking-wide">Solution</span>
                        <p className="text-ink-600 mt-0.5">{study.solution}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-ink-400 uppercase tracking-wide">Outcome</span>
                        <p className="text-ink-600 mt-0.5">{study.outcome}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-ink-100">
                      {study.tech.map((t) => (
                        <span key={t} className="text-xs font-medium text-ink-600 bg-ink-100 px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BUSINESS OUTCOMES
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-50 py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Business Value</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-5 text-balance">
              AI Should Create Business Value.
            </h2>
            <p className="text-lg text-ink-500">
              Enterprise clients don't buy "AI." They buy efficiency, revenue, productivity, and competitive advantage. We build for outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: 'Reduce Manual Work', desc: 'Automate repetitive processes so your team can focus on higher-value work.' },
              { icon: TrendingUp, title: 'Accelerate Decisions', desc: 'Give teams faster access to information and intelligence for better decisions.' },
              { icon: Users, title: 'Improve Customer Experience', desc: 'Deploy intelligent customer-facing systems that respond instantly and accurately.' },
              { icon: Target, title: 'Build New Capabilities', desc: 'Create products and workflows that were previously difficult or expensive to build.' },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white border border-ink-200 rounded-xl p-7 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-5">
                  <pillar.icon className="w-5 h-5 text-brand-700" />
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY AEGOR LABS
      ═══════════════════════════════════════════════════ */}
      <section id="why-aegor" className="bg-white py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7652128/pexels-photo-7652128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Aegor Labs engineering team"
                loading="lazy"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-white border border-ink-200 shadow-lg rounded-xl p-5 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-700" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink-900">Engineering</div>
                    <div className="text-xs text-ink-500">First Approach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Principles */}
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Why Aegor Labs</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-900 mb-6 text-balance">
                A different approach to AI solutions.
              </h2>
              <p className="text-ink-500 mb-8 leading-relaxed">
                We combine AI expertise with serious software engineering. No hype, no buzzwords — just systems that work.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Target, title: 'Business First', desc: 'We start with the business problem and identify where AI can create meaningful value.' },
                  { icon: Code, title: 'Engineering Depth', desc: 'We combine AI expertise with software engineering and modern technology infrastructure.' },
                  { icon: Wrench, title: 'Practical AI', desc: 'We focus on solutions that can actually be deployed and used — not just demoed.' },
                  { icon: Layers, title: 'End-to-End Delivery', desc: 'From idea and architecture through development, integration and deployment.' },
                ].map((principle) => (
                  <div key={principle.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ink-100 rounded-lg flex items-center justify-center shrink-0">
                      <principle.icon className="w-5 h-5 text-ink-700" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink-900 mb-1">{principle.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed">{principle.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT AEGOR LABS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-50 py-24 border-b border-ink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-4">About Aegor Labs</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-7 text-balance">
            Building Practical Intelligence for the{' '}
            <span className="font-serif-display italic text-brand-600 font-normal">Real World.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed mb-5">
            Aegor Labs is an AI technology and solutions company that helps organizations adopt, build and deploy practical AI systems. We work with startups, enterprises, and institutions to turn AI concepts into production-ready systems.
          </p>
          <p className="text-lg text-ink-500 leading-relaxed mb-10">
            From intelligent automation and AI agents to custom LLM applications and data-driven systems, we combine deep technical expertise with a business-first approach to deliver AI that creates real value.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-sm font-semibold text-ink-900 hover:text-brand-600 transition-colors"
          >
            Learn More About Aegor Labs <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INSIGHTS / THOUGHT LEADERSHIP
      ═══════════════════════════════════════════════════ */}
      <section id="insights" className="bg-white py-24 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Insights</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-ink-900 mb-4 text-balance">
                Insights on AI & Technology
              </h2>
              <p className="text-lg text-ink-500">
                Perspectives on enterprise AI, AI agents, automation, and the practical application of AI in business.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'AI Agents',
                title: 'From Chatbots to Agents: The Evolution of AI Interaction',
                desc: 'How AI agents are moving beyond answering questions to executing real business workflows.',
                readTime: '5 min read',
              },
              {
                tag: 'Enterprise AI',
                title: 'Building AI Systems That Work in Production',
                desc: 'Why most AI prototypes never make it to production — and what it takes to build systems that do.',
                readTime: '7 min read',
              },
              {
                tag: 'Automation',
                title: 'Intelligent Automation: Where AI Meets Your Workflows',
                desc: 'How combining AI with automation tools creates systems that actually get work done.',
                readTime: '4 min read',
              },
            ].map((article, i) => (
              <article
                key={i}
                className="bg-white border border-ink-200 rounded-xl p-7 hover:shadow-md hover:border-ink-300 transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
                    {article.tag}
                  </span>
                  <span className="text-xs text-ink-400">{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-5">{article.desc}</p>
                <div className="flex items-center text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                  Read Article <ArrowUpRight className="ml-1.5 w-4 h-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Have an AI Challenge?
          </h2>
          <p className="text-lg text-ink-400 mb-10 leading-relaxed">
            Let's explore where AI can create measurable value for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-ink-900 px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-ink-100 transition-all"
            >
              Talk to an AI Expert
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="#what-we-build"
              className="inline-flex items-center justify-center bg-white/5 border border-white/15 text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Explore Our Solutions
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-ink-500">
            <a href="mailto:admin@aegorlabs.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> admin@aegorlabs.com
            </a>
            <span className="hidden sm:block text-ink-700">|</span>
            <a href="https://www.aegorlabs.com" className="hover:text-white transition-colors">
              www.aegorlabs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
