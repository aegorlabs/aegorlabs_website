import { Blocks, KeySquare, Wallet, Scale, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlockchainWeb3() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f4aec63?q=80&w=2000&auto=format&fit=crop" 
            alt="Blockchain Abstract" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Blocks className="w-4 h-4" /> Web3 & Blockchain
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Decentralized Infrastructure for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Modern Enterprises</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              From secure tokenization to complex DeFi protocols, we build highly audited, scalable smart contracts and blockchain ecosystems that redefine trust and efficiency.
            </p>
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-600/40">
              Architect Your Web3 Solution <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Web3 Capabilities</h2>
            <p className="text-lg text-slate-600">Our blockchain engineers possess deep expertise in Ethereum, Polygon, Solana, and private ledger architectures.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <KeySquare className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Contract Development</h3>
              <p className="text-slate-600">Gas-optimized, securely engineered Solidity and Rust smart contracts for escrow, DAOs, and complex automated protocols.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tokenization & RWA</h3>
              <p className="text-slate-600">Tokenize Real World Assets (RWA) securely on-chain. Complete lifecycle management for NFTs, utility tokens, and security tokens.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">DeFi Infrastructure</h3>
              <p className="text-slate-600">Build resilient decentralized exchanges (DEX), lending protocols, and liquidity pools that handle millions in TVL.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Security is Our Foundation</h2>
              <p className="text-slate-600 text-lg mb-8">
                In Web3, a single line of bad code can cost millions. Our engineering culture revolves around rigorous testing, formal verification, and strict security protocols.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Pre-deployment audits and mathematical formal verification of all smart contracts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Institutional-grade multi-sig wallet architectures and secure key management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Compliance-first architecture (KYC/AML integration at the protocol level).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Extensive load testing against simulated network congestion and flash-loan attacks.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1622630998477-20b41cd0e0b2?q=80&w=1000&auto=format&fit=crop" 
                alt="Security Code" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="text-4xl font-black text-purple-700 mb-1">$2B+</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Value Secured On-Chain</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}