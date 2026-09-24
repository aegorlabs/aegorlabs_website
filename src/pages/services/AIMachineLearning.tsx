import { Brain, LineChart, Network, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIMachineLearning() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" 
            alt="AI Neural Network" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" /> Enterprise AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Transform Your Data Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Predictive Power</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We design, train, and deploy production-grade machine learning models that automate complex decisions, optimize operations, and uncover hidden revenue streams.
            </p>
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/40">
              Discuss Your AI Strategy <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-slate-600">From raw data to scalable inference engines, our data scientists deliver end-to-end ML infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Analytics</h3>
              <p className="text-slate-600">Forecast demand, anticipate supply chain disruptions, and predict customer churn with high-accuracy statistical models.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Computer Vision</h3>
              <p className="text-slate-600">Automate quality control, defect detection, and spatial analysis using advanced convolutional neural networks.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Recommendation Engines</h3>
              <p className="text-slate-600">Hyper-personalize user experiences and drive cross-sells using deep learning and collaborative filtering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Enterprises Trust Our ML Teams</h2>
              <p className="text-slate-600 text-lg mb-8">
                Building a model in a notebook is easy. Deploying it to scale, monitoring for drift, and integrating it into legacy systems is hard. We excel at the hard part.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Production-Ready MLOps & Continuous Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Data Privacy & Regulatory Compliance (GDPR/HIPAA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Explainable AI (XAI) for Transparent Decision Making</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Cloud-Agnostic Deployments (AWS, GCP, Azure)</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Data Science Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="text-4xl font-black text-blue-700 mb-1">99.4%</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Average Model Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}