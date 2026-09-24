import { Link } from 'react-router-dom';
import { Brain, Cpu, Blocks, Code, ArrowRight, ShieldCheck, Award, Globe, Building2, CheckCircle2 } from 'lucide-react';
import PartnerCarousel from '../components/PartnerCarousel';

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" /> Global Leaders in AI & Digital Transformation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Architecting the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              For over a decade, Aegor Labs has been the trusted technology partner for Fortune 500 companies, delivering scalable AI, blockchain, and custom software solutions across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/40 text-center">
                Schedule a Consultation
              </Link>
              <Link to="/about" className="rounded-lg bg-slate-800/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-slate-700 transition-all border border-slate-700 text-center flex items-center justify-center">
                Explore Our Legacy <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partners / Trusted By */}
      <PartnerCarousel />

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 text-center">
            <div>
              <div className="text-4xl font-extrabold text-blue-700 mb-2">12+</div>
              <div className="text-slate-600 font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-700 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Enterprise Projects</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-700 mb-2">35+</div>
              <div className="text-slate-600 font-medium">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-blue-700 mb-2">99%</div>
              <div className="text-slate-600 font-medium">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">World-Class Enterprise Solutions</h2>
            <p className="text-lg text-slate-600">We leverage a decade of deep technical expertise to build scalable architectures that drive measurable business impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services/ai-machine-learning" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">AI & Machine Learning</h3>
              <p className="text-slate-600 text-sm">Predictive analytics, data science, and intelligent automation tailored for your industry.</p>
            </Link>

            <Link to="/services/generative-ai" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">Generative AI</h3>
              <p className="text-slate-600 text-sm">LLM integration, custom AI agents, and enterprise chatbots to revolutionize workflows.</p>
            </Link>

            <Link to="/services/blockchain-web3" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Blocks className="w-7 h-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">Blockchain & Web3</h3>
              <p className="text-slate-600 text-sm">Smart contracts, RWA tokenization, and decentralized applications (dApps).</p>
            </Link>

            <Link to="/services/custom-software" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">Custom Software</h3>
              <p className="text-slate-600 text-sm">Scalable SaaS development, enterprise software, and cloud-native solutions.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Study Snippet */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Proven Enterprise Impact</h2>
              <p className="text-lg text-slate-600">See how we've transformed businesses through intelligent architecture.</p>
            </div>
            <Link to="/case-studies" className="mt-4 md:mt-0 inline-flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors">
              View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wider text-sm mb-4">
                <Brain className="w-5 h-5" /> AI & Machine Learning
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">AI-Driven Risk Scoring for a Global Bank</h3>
              <p className="text-slate-600 mb-8 text-lg">
                Developed a custom machine learning pipeline that reduced credit risk processing time by 68% and saved $42M annually for Quantum Financial.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-black text-slate-900">68%</div>
                  <div className="text-sm font-medium text-slate-500 uppercase">Faster Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">$42M</div>
                  <div className="text-sm font-medium text-slate-500 uppercase">Annual Savings</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-900 relative min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Badges */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Aegor Advantage</h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't just write code; we solve complex business problems. Our veteran engineering teams follow strict international standards to ensure your IP is secure and your software scales effortlessly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
                  <div>
                    <h4 className="text-lg font-semibold">ISO 9001 & SOC 2 Compliant</h4>
                    <p className="text-slate-400 text-sm mt-1">Adhering to the highest global standards of quality and data security.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
                  <div>
                    <h4 className="text-lg font-semibold">Decade of Domain Expertise</h4>
                    <p className="text-slate-400 text-sm mt-1">Cross-industry knowledge spanning finance, healthcare, and logistics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
                  <div>
                    <h4 className="text-lg font-semibold">Dedicated Global Teams</h4>
                    <p className="text-slate-400 text-sm mt-1">Round-the-clock support and development from our international offices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                <ShieldCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">Secure by Design</h4>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">Award Winning</h4>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">Global Reach</h4>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                <Building2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">Enterprise Ready</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
