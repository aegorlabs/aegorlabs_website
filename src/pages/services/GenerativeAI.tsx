import { Cpu, MessageSquareText, Search, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GenerativeAI() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop" 
            alt="Generative AI Abstract" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" /> Generative AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Unlock the Power of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Large Language Models</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Automate customer support, empower internal search, and supercharge content creation with custom, securely-hosted Generative AI agents fine-tuned on your proprietary data.
            </p>
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/40">
              Explore LLM Integration <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Generative AI Capabilities</h2>
            <p className="text-lg text-slate-600">Move beyond prompt engineering. We build resilient GenAI systems seamlessly integrated into your enterprise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquareText className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Autonomous Agents</h3>
              <p className="text-slate-600">Deploy intelligent chatbots that execute multi-step workflows, resolve complex customer queries, and interface directly with your internal APIs.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">RAG Knowledge Systems</h3>
              <p className="text-slate-600">Retrieval-Augmented Generation (RAG) that allows your teams to instantly query decades of PDFs, docs, and internal wiki knowledge with high accuracy.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Private LLM Fine-Tuning</h3>
              <p className="text-slate-600">Train open-source models (Llama 3, Mistral) on your highly sensitive IP securely within your own VPC—no data leakage to third parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
                alt="Engineering Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900">Zero</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Data Leakage</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise-Grade Safety & Reliability</h2>
              <p className="text-slate-600 text-lg mb-8">
                LLM hallucinations and data privacy concerns stop many enterprises from adopting AI. We mitigate these risks through strict architectural guardrails.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Advanced prompt engineering and safety guardrails to prevent hallucinations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">VPC deployment options to keep your proprietary training data completely private.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Vector database architecture (Pinecone, Weaviate) for lightning-fast retrieval.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Automated evaluation frameworks to continuously measure response accuracy.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}