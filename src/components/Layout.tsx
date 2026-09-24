import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Solutions', to: '/#what-we-build', hasDropdown: true },
    { label: 'Industries', to: '/#industries' },
    { label: 'AI & Automation', to: '/#ai-agents' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'About', to: '/about' },
  ];

  const solutionsDropdown = [
    { label: 'AI & LLM Solutions', to: '/services/generative-ai', desc: 'Custom AI applications using large language models' },
    { label: 'AI Agents & Automation', to: '/#ai-agents', desc: 'Intelligent systems that interact with tools and workflows' },
    { label: 'Custom AI Software', to: '/services/custom-software', desc: 'Purpose-built AI applications for your organization' },
    { label: 'Data & Analytics', to: '/#what-we-build', desc: 'Turn business data into actionable intelligence' },
    { label: 'AI Consulting', to: '/#why-aegor', desc: 'AI strategy, architecture and implementation support' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink-900 bg-white">
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-ink-200 shadow-sm'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img src="/logo/logo.png" alt="Aegor Labs" className="h-9 w-auto" />
              <span className="font-bold text-xl tracking-tight text-ink-900">
                Aegor Labs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="flex items-center text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors py-2">
                  Solutions <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2">
                    <div className="bg-white border border-ink-200 shadow-lg rounded-xl overflow-hidden py-2">
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="block px-4 py-3 hover:bg-ink-50 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                            {item.label}
                          </div>
                          <div className="text-xs text-ink-500 mt-0.5">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Talk to an AI Expert
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-ink-600 hover:text-ink-900 p-2"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-ink-100">
            <div className="px-4 pt-3 pb-6 space-y-1">
              <p className="px-3 text-xs font-semibold text-ink-400 uppercase tracking-wider mb-2 mt-2">Solutions</p>
              {solutionsDropdown.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block px-3 py-2.5 text-sm font-medium text-ink-700 hover:text-brand-700 hover:bg-ink-50 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-ink-100 my-3" />
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block px-3 py-2.5 text-sm font-medium text-ink-700 hover:text-brand-700 hover:bg-ink-50 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block text-center bg-ink-900 text-white font-semibold py-3 rounded-lg text-sm"
                >
                  Talk to an AI Expert
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ink-950 text-ink-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-5">
                <img src="/logo/logo.png" alt="Aegor Labs" className="h-8 w-auto brightness-0 invert" />
                <span className="font-bold text-lg text-white tracking-tight">Aegor Labs</span>
              </Link>
              <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
                AI solutions built for real business. We help organizations design, develop and deploy practical AI systems.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Solutions</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services/generative-ai" className="text-ink-400 hover:text-white transition-colors">AI & LLM Solutions</Link></li>
                <li><a href="/#ai-agents" className="text-ink-400 hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="/#what-we-build" className="text-ink-400 hover:text-white transition-colors">AI Automation</a></li>
                <li><Link to="/services/custom-software" className="text-ink-400 hover:text-white transition-colors">Custom AI Applications</Link></li>
                <li><a href="/#what-we-build" className="text-ink-400 hover:text-white transition-colors">Data & Analytics</a></li>
                <li><a href="/#why-aegor" className="text-ink-400 hover:text-white transition-colors">AI Consulting</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Industries</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/#industries" className="text-ink-400 hover:text-white transition-colors">BFSI</a></li>
                <li><a href="/#industries" className="text-ink-400 hover:text-white transition-colors">Education</a></li>
                <li><a href="/#industries" className="text-ink-400 hover:text-white transition-colors">Retail & E-commerce</a></li>
                <li><a href="/#industries" className="text-ink-400 hover:text-white transition-colors">Marketing</a></li>
                <li><a href="/#industries" className="text-ink-400 hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="/#industries" className="text-ink-400 hover:text-white transition-colors">Professional Services</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-ink-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/case-studies" className="text-ink-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="text-ink-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="/#insights" className="text-ink-400 hover:text-white transition-colors">Insights</a></li>
                <li><a href="#" className="text-ink-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:admin@aegorlabs.com" className="text-ink-400 hover:text-white transition-colors">admin@aegorlabs.com</a></li>
                <li><a href="https://www.aegorlabs.com" className="text-ink-400 hover:text-white transition-colors">www.aegorlabs.com</a></li>
                <li><a href="#" className="text-ink-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-ink-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-ink-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-ink-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-ink-500">
              &copy; {new Date().getFullYear()} Aegor Labs. All rights reserved.
            </p>
            <p className="text-xs text-ink-600">
              AI Solutions · Automation · LLM Applications · Data · AI Agents
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
