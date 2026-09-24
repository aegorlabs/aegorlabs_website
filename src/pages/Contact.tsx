import { Mail, Phone, MapPin, Globe2, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Let's Build the Future</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to scale your enterprise? Our team of experts is standing by to discuss your next major digital transformation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-200">
          
          {/* Form Section */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
            <p className="text-slate-600 mb-8">Fill out the form below and a solutions architect will get back to you within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Acme Corp" />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">Area of Interest</label>
                <select id="interest" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white">
                  <option>AI & Machine Learning</option>
                  <option>Generative AI</option>
                  <option>Blockchain & Web3</option>
                  <option>Custom Software Development</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Tell us a bit about what you're looking to build..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-lg shadow-md transition-all flex items-center justify-center">
                Submit Inquiry <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
          
          {/* Contact Info Section */}
          <div className="lg:w-2/5 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:admin@aegorlabs.com" className="text-lg hover:text-blue-400 transition-colors">admin@aegorlabs.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe2 className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Global Headquarters</h4>
                    <p className="text-lg text-slate-300">
                      1200 Tech Hub Blvd<br />
                      Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">European Office</h4>
                    <p className="text-lg text-slate-300">
                      Silicon Allee 45<br />
                      10119 Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-slate-400">
                Are you an existing client? <br />
                Please use the <a href="#" className="text-blue-400 hover:underline">Support Portal</a> for priority technical assistance.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}