import { Building2, Globe, BarChart3, Cpu, Cloud, Shield, Database, Zap } from 'lucide-react';

const partners = [
  { name: 'Vanguard Global', icon: Building2 },
  { name: 'Quantum Financial', icon: BarChart3 },
  { name: 'Nexus Systems', icon: Cpu },
  { name: 'CloudNet Inc', icon: Cloud },
  { name: 'Shield Security', icon: Shield },
  { name: 'DataFlow Systems', icon: Database },
  { name: 'Zap Energy', icon: Zap },
  { name: 'GlobalTech', icon: Globe },
];

export default function PartnerCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Trusted by Fortune 500 Companies & Industry Leaders Since 2014
        </p>
      </div>
      
      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-2xl font-black text-slate-800 shrink-0">
                <Icon className="w-8 h-8 text-blue-600" />
                {partner.name}
              </div>
            );
          })}
        </div>
        
        {/* Duplicate for seamless looping */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={`dup-${index}`} className="flex items-center gap-3 text-2xl font-black text-slate-800 shrink-0">
                <Icon className="w-8 h-8 text-blue-600" />
                {partner.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
