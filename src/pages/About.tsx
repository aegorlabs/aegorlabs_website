import { Users, Target, Globe2, Shield, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Aegor Labs Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Engineering the Future of <br />
              <span className="text-blue-500">Global Enterprise</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Founded in 2014, Aegor Labs was born from a simple belief: that complex technology should solve complex business problems seamlessly. Today, we are a global collective of engineers, data scientists, and strategists.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We empower organizations to navigate the complexities of the digital age. By bridging the gap between cutting-edge research (AI, Web3) and practical enterprise application, we deliver solutions that are not just innovative, but highly reliable and scalable.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Over the past decade, we have grown from a boutique software firm into a multinational technology partner, trusted by Fortune 500s across finance, healthcare, and logistics to architect their most critical systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-8 rounded-2xl text-center">
                <div className="text-4xl font-black text-blue-700 mb-2">12+</div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl text-center mt-8">
                <div className="text-4xl font-black text-emerald-700 mb-2">35+</div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Countries Served</div>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl text-center -mt-8">
                <div className="text-4xl font-black text-purple-700 mb-2">150+</div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Enterprise Clients</div>
              </div>
              <div className="bg-orange-50 p-8 rounded-2xl text-center">
                <div className="text-4xl font-black text-orange-700 mb-2">500+</div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide our engineering culture and client relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Uncompromising Quality</h3>
              <p className="text-slate-600">We adhere to strict international standards. If it goes into production, it is tested, secure, and built to last.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pragmatic Innovation</h3>
              <p className="text-slate-600">We don't chase trends for the sake of it. We implement new technologies only when they provide measurable ROI.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">True Partnership</h3>
              <p className="text-slate-600">We view our clients as long-term partners. Your success is our success, and we integrate seamlessly with your internal teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Global Leadership</h2>
            <p className="text-lg text-slate-600">Guided by veterans of the technology industry.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
              { name: 'Michael Rodriguez', role: 'Chief Technology Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
              { name: 'Elena Rostova', role: 'Head of AI Research', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
              { name: 'David Kim', role: 'VP of Global Delivery', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
            ].map((leader, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-slate-50 shadow-lg">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-blue-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-blue-100 mb-8">Join the hundreds of enterprises that trust Aegor Labs with their most critical systems.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-slate-50 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}