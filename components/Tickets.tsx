
import React, { useState } from 'react';
import { Send, LifeBuoy, Clock, ShieldAlert, CheckCircle } from 'lucide-react';

const Tickets: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-10">
        <div>
          <h2 className="text-3xl font-serif text-primary mb-2 font-bold uppercase tracking-tight">Support & Logistics</h2>
          <p className="text-gray-500 font-light italic">"Precision is our only standard. We solve what others cannot."</p>
        </div>
        <div className="flex space-x-6 text-gray-400 text-[10px] uppercase tracking-widest font-bold font-serif">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-accent" /> Avg Response: 12m
          </div>
          <div className="flex items-center">
            <ShieldAlert className="w-4 h-4 mr-2 text-accent" /> Priority Support
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface border border-gray-100 rounded-2xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-serif text-primary font-bold uppercase tracking-tight">Open Channels</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Submit your request directly to the High Table. Our technical division is standing by to resolve any bureau logistical hurdles.
            </p>

            <div className="space-y-4">
              {[
                { label: "Technical Mastery", desc: "Software integrations & API assistance" },
                { label: "Bureau Growth", desc: "Marketing & scaling consultation" },
                { label: "Administrative", desc: "Billing, credentials & access" }
              ].map((channel, i) => (
                <div key={i} className="flex items-start space-x-3 group">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">{channel.label}</p>
                    <p className="text-[11px] text-gray-400">{channel.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-8 rounded-2xl text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <LifeBuoy size={120} />
            </div>
            <h4 className="font-serif text-xl mb-4 relative z-10">Direct Intelligence</h4>
            <p className="text-white/70 text-sm mb-6 relative z-10">For emergency escalations, please reference your High Table private key in the message.</p>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Active Protocol: LVL 2</div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
            {submitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle size={48} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-primary font-bold uppercase mb-2">Request Dispatched</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Your intelligence has been received. An associate will be in contact within the hour.</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent uppercase text-[10px] font-bold tracking-[0.2em] border-b border-accent hover:text-primary hover:border-primary transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Issue Category</label>
                    <select className="w-full bg-surface border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-primary font-medium transition-all">
                      <option>Technical Software Bug</option>
                      <option>Bureau Scaling Strategy</option>
                      <option>IRS Policy Question</option>
                      <option>Account & Credentials</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Priority Level</label>
                    <div className="flex space-x-2">
                      {['Standard', 'Urgent', 'Tactical'].map((level) => (
                        <button
                          key={level}
                          type="button"
                          className="flex-1 py-3 text-[10px] uppercase font-bold tracking-widest rounded-xl border border-gray-100 hover:border-accent hover:text-accent text-gray-400 transition-all bg-surface"
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Brief description of the objective"
                    className="w-full bg-surface border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-primary transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Mission Details</label>
                  <textarea
                    rows={6}
                    placeholder="Explain the situation in detail..."
                    className="w-full bg-surface border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-primary transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-sans font-bold uppercase tracking-[0.3em] text-[11px] rounded-xl shadow-lg shadow-primary/20 hover:bg-accent hover:text-black hover:-translate-y-0.5 transition-all flex items-center justify-center"
                >
                  Dispatch Request <Send size={14} className="ml-3" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
