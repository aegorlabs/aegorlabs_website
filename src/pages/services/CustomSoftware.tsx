import { Code, LayoutTemplate, Smartphone, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomSoftware() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop" 
            alt="Custom Software Development" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" /> Enterprise Software Engineering
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Scalable Architecture for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">High-Growth Businesses</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We design, build, and modernize custom SaaS platforms, mobile applications, and enterprise systems that are robust, secure, and built to handle millions of users.
            </p>
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/40">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Engineering Capabilities</h2>
            <p className="text-lg text-slate-600">From sleek frontend interfaces to complex microservices backends, we deliver full-stack excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <LayoutTemplate className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom SaaS Platforms</h3>
              <p className="text-slate-600">End-to-end development of multi-tenant B2B and B2C SaaS products, from MVP to enterprise-grade scalability.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Native & Hybrid Mobile</h3>
              <p className="text-slate-600">High-performance iOS and Android applications built natively or with React Native/Flutter for maximum cross-platform reach.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Modernization</h3>
              <p className="text-slate-600">Migrate legacy monoliths into scalable, resilient microservices architectures on AWS, GCP, or Azure.</p>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                alt="Agile Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900">99.99%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Aegor Delivery Methodology</h2>
              <p className="text-slate-600 text-lg mb-8">
                We combine agile delivery with strict engineering discipline. You get complete transparency, predictable timelines, and code that your internal team will love to maintain.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Test-Driven Development (TDD) ensuring high code coverage and low technical debt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Fully automated CI/CD pipelines for rapid, safe, and zero-downtime deployments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Comprehensive documentation and seamless handover to your internal IT teams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Proactive 24/7 monitoring and performance tuning.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}