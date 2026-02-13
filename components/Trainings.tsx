
import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Filter, Play } from 'lucide-react';
import { TRAINING_VIDEOS, BADGES } from '../constants';

const Trainings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tax Software Mastery", "Business Growth", "Technical Skills"];

  const filteredVideos = TRAINING_VIDEOS.filter(v => 
    (selectedCategory === "All" || v.category === selectedCategory) &&
    v.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-10">
        <div>
          <h2 className="text-3xl font-serif text-primary mb-2 font-bold uppercase tracking-tight">Archives & Intelligence</h2>
          <p className="text-gray-500 font-light italic">Master the craft. Scale the bureau.</p>
        </div>
        
        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="Search files..." 
            className="w-full bg-surface border border-gray-100 rounded-lg px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-10">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-serif mb-4 flex items-center font-bold">
              <Filter className="w-3 h-3 mr-2" /> Classifications
            </h4>
            <div className="flex flex-col space-y-1">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left py-2 px-3 rounded text-[11px] uppercase tracking-widest font-bold transition-all border ${
                    selectedCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-sm' 
                    : 'border-transparent text-gray-500 hover:text-primary hover:bg-surface'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-gray-100 rounded-xl p-6 space-y-6">
             <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-serif font-bold">Verified Merits</h4>
             <div className="flex flex-wrap gap-4">
               {BADGES.map(badge => (
                 <div key={badge.id} className="group relative">
                   <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-xl shadow-sm group-hover:border-accent transition-all">
                     {badge.icon}
                   </div>
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-white border border-gray-100 p-3 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-center z-20">
                     <p className="text-primary font-bold text-[11px] uppercase tracking-widest mb-1">{badge.name}</p>
                     <p className="text-gray-500 text-[10px] leading-tight font-medium">{badge.description}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </aside>

        {/* Video Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map(video => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-lg transition-all mb-4">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-all duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-xl">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                  {video.completed && (
                    <div className="absolute top-3 right-3 bg-accent text-white p-1 rounded-full shadow-lg">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-primary font-bold flex items-center space-x-1 shadow-sm">
                    <Clock size={10} />
                    <span>{video.duration}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-serif font-bold">{video.category}</span>
                  </div>
                  <h4 className="text-primary group-hover:text-accent transition-colors font-bold text-lg leading-snug">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
          {filteredVideos.length === 0 && (
            <div className="py-20 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
              No archives found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trainings;
