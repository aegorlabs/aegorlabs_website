import { Link } from 'react-router-dom';
import { Brain, Cpu, Blocks, Code, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            AI Powered Solutions <br className="hidden md:block" />
            <span className="text-blue-700">For Complex Enterprise Needs</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Aegor Labs is a premier AI and Digital Transformation agency. We build custom software, blockchain ecosystems, and intelligent systems to scale your business.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="rounded-lg bg-blue-700 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-600/30">
              Talk to an Expert
            </Link>
            <Link to="/about" className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-50 transition-all border border-slate-300 shadow-sm flex items-center">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-slate-500 font-medium">
          <div className="flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-blue-600" /> Enterprise Grade Security</div>
          <div className="flex items-center gap-2"><Award className="w-6 h-6 text-blue-600" /> ISO 9001 Certified Experts</div>
          <div className="flex items-center gap-2"><Cpu className="w-6 h-6 text-blue-600" /> Cutting-Edge Tech Stack</div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-slate-600">We deliver tailored intelligence and robust architectures to accelerate your growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services/ai-machine-learning" className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">AI & Machine Learning</h3>
              <p className="text-slate-600 text-sm">Predictive analytics, data science, and intelligent automation tailored for your industry.</p>
            </Link>

            <Link to="/services/generative-ai" className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">Generative AI</h3>
              <p className="text-slate-600 text-sm">LLM integration, custom AI agents, and enterprise chatbots to revolutionize workflows.</p>
            </Link>

            <Link to="/services/blockchain-web3" className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Blocks className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">Blockchain & Web3</h3>
              <p className="text-slate-600 text-sm">Smart contracts, RWA tokenization, and decentralized applications (dApps).</p>
            </Link>

            <Link to="/services/custom-software" className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">Custom Software</h3>
              <p className="text-slate-600 text-sm">Scalable SaaS development, enterprise software, and cloud-native solutions.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
