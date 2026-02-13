
import React from 'react';
import { ShoppingCart, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface AddOnsProps {
  onAddToCart: () => void;
}

const AddOns: React.FC<AddOnsProps> = ({ onAddToCart }) => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-serif text-primary uppercase tracking-[0.1em] font-bold">Premium Enhancements</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        <p className="text-gray-500 font-light max-w-xl mx-auto italic">
          "The finest tools for the finest practitioners. Every advantage counts at the table."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="aspect-square relative overflow-hidden bg-surface">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              <div className="absolute top-4 right-4">
                <div className="bg-white shadow-md text-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-gray-50">
                  Tier Access
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5 flex-grow flex flex-col">
              <div className="flex-grow">
                <h4 className="text-primary font-bold text-lg leading-tight mb-2 group-hover:text-accent transition-colors">{product.title}</h4>
                <div className="flex items-baseline space-x-2">
                  <span className="text-primary font-black text-2xl">${product.price}</span>
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Lifetime</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-50">
                <button
                  onClick={onAddToCart}
                  className="w-full py-3 bg-primary text-white font-bold text-[11px] uppercase tracking-widest rounded-lg flex items-center justify-center transition-all hover:bg-accent hover:text-black shadow-md"
                >
                  <ShoppingCart size={14} className="mr-2" /> Add to Vault
                </button>
                <button className="w-full py-3 bg-white border border-gray-100 text-gray-500 font-bold text-[11px] uppercase tracking-widest rounded-lg flex items-center justify-center transition-all hover:bg-accent hover:text-black">
                  <ExternalLink size={14} className="mr-2" /> Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface border-2 border-dashed border-gray-100 rounded-3xl p-12 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 bg-white border border-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Zap className="text-accent w-8 h-8" />
        </div>
        <h3 className="text-2xl font-sans text-primary mb-4 font-bold uppercase tracking-tight">Bespoke Bureau Solutions</h3>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto font-medium">Our development arm can build custom software specific to your bureau's workflow and internal architecture.</p>
        <button className="px-10 py-4 bg-white border border-primary text-primary rounded-xl uppercase tracking-widest text-[11px] font-bold hover:bg-accent hover:text-black transition-all shadow-lg shadow-primary/5">
          Request Consultation
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-400 text-[9px] uppercase tracking-[0.3em] font-bold">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={16} className="text-accent" />
          <span>GHL Payment Ready</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheck size={16} className="text-accent" />
          <span>Secured Transaction</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheck size={16} className="text-accent" />
          <span>Instant Provisioning</span>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
