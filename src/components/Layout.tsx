import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo/logo.png" alt="Aegor Labs Logo" className="h-10 w-auto" />
              <span className="font-bold text-2xl tracking-tight text-blue-800">
                Aegor Labs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-slate-600 hover:text-blue-700 py-2 text-sm font-medium transition-colors">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-lg rounded-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                    <Link to="/services/ai-machine-learning" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">AI & Machine Learning</Link>
                    <Link to="/services/generative-ai" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">Generative AI</Link>
                    <Link to="/services/blockchain-web3" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">Blockchain & Web3</Link>
                    <Link to="/services/custom-software" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">Custom Software</Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-slate-600 hover:text-blue-700 text-sm font-medium transition-colors">About</Link>
              <Link to="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Services</p>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/services/ai-machine-learning" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md">AI & Machine Learning</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/services/generative-ai" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md">Generative AI</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/services/blockchain-web3" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md">Blockchain & Web3</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/services/custom-software" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md">Custom Software</Link>
              </div>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md">About</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="block px-3 py-2 text-base font-medium text-blue-700 hover:bg-blue-50 rounded-md">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img src="/logo/logo.png" alt="Aegor Labs Logo" className="h-8 w-auto brightness-0 invert" />
                <span className="font-bold text-xl tracking-tight text-white">Aegor Labs</span>
              </Link>
              <p className="text-sm text-slate-400">
                Empowering businesses through cutting-edge AI and digital transformation solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/ai-machine-learning" className="hover:text-blue-400 transition-colors">AI & Machine Learning</Link></li>
                <li><Link to="/services/generative-ai" className="hover:text-blue-400 transition-colors">Generative AI</Link></li>
                <li><Link to="/services/blockchain-web3" className="hover:text-blue-400 transition-colors">Blockchain & Web3</Link></li>
                <li><Link to="/services/custom-software" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:admin@aegorlabs.com" className="hover:text-blue-400 transition-colors">admin@aegorlabs.com</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
            &copy; {new Date().getFullYear()} Aegor Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
