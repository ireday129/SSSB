
import React from 'react';
import { CheckCircle, PlayCircle, FileText, Download, Check } from 'lucide-react';
import { OnboardingItem } from '../types';

interface OnboardingProps {
  items: OnboardingItem[];
  onToggle: (id: string) => void;
  progress: number;
}

const Onboarding: React.FC<OnboardingProps> = ({ items, onToggle, progress }) => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-10">
        <div>
          <h2 className="text-3xl font-sans text-primary mb-2 uppercase tracking-tight font-bold">The Initiation Process</h2>
          <p className="text-gray-500 font-light italic">"Verification is the first step to trust."</p>
        </div>
        <div className="w-full md:w-80 space-y-3">
          <div className="flex justify-between text-[10px] tracking-[0.3em] text-gray-400 font-serif uppercase font-bold">
            <span>Progress</span>
            <span className="text-accent">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) shadow-sm"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {progress === 100 && (
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex items-center space-x-6 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-primary font-serif tracking-widest uppercase text-lg font-bold">Initiation Complete</p>
            <p className="text-gray-500 text-sm">Your credentials have been verified. You now hold associate clearance.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`group bg-white border transition-all duration-500 rounded-xl p-6 flex items-center justify-between shadow-sm ${item.completed
              ? 'border-accent/20 bg-surface/50'
              : 'border-gray-100 hover:border-accent/30'
              }`}
          >
            <div className="flex items-center space-x-8">
              <span className="font-serif text-gray-100 text-3xl font-bold w-12 text-center group-hover:text-accent/20 transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center space-x-6">
                <div className={`p-4 rounded-lg transition-all duration-500 ${item.completed ? 'bg-primary/5 text-primary' : 'bg-surface text-gray-400'
                  }`}>
                  {item.type === 'video' ? <PlayCircle size={22} /> : item.type === 'form' ? <FileText size={22} /> : <Download size={22} />}
                </div>
                <div>
                  <h4 className={`text-lg font-bold transition-all duration-500 ${item.completed ? 'text-gray-300 line-through decoration-primary/20' : 'text-primary'
                    }`}>
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-serif font-bold">{item.type}</span>
                    {item.completed && <span className="text-[10px] text-accent uppercase tracking-widest font-bold">— VERIFIED</span>}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onToggle(item.id)}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${item.completed
                ? 'bg-primary border-primary text-white shadow-md hover:bg-accent hover:text-black'
                : 'border-gray-100 hover:border-accent text-transparent hover:text-accent/40'
                }`}
            >
              <Check size={24} strokeWidth={3} />
            </button>
          </div>
        ))}
      </div>

      <div className="pt-10">
        <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl bg-gray-900 border border-gray-100 flex items-center justify-center group cursor-pointer relative overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            alt="Briefing"
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>

          <div className="relative z-10 flex flex-col items-center space-y-6">
            <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-all duration-500">
              <PlayCircle size={40} fill="currentColor" />
            </div>
            <div className="text-center">
              <h4 className="text-white font-serif text-2xl tracking-wide uppercase font-bold">The Society: Visionary Session</h4>
              <p className="text-accent text-xs tracking-[0.4em] mt-2 font-bold uppercase">Classification: REQUIRED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
