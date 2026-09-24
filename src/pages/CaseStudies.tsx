import { caseStudies } from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Proven Enterprise Impact</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore how we've helped global organizations leverage AI, blockchain, and cloud-native architecture to drive measurable ROI.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div key={study.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-2">
                    <Icon className="w-4 h-4" /> {study.category}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-sm font-semibold text-slate-500 mb-2">Client: {study.client}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{study.title}</h3>
                  <p className="text-slate-600 mb-8">{study.summary}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-slate-100 mt-auto">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-xl md:text-2xl font-black text-blue-700">{metric.value}</div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/contact`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Request Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
