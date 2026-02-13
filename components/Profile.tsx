
import React from 'react';
import { User, Calendar, Briefcase, Award, Settings, Shield } from 'lucide-react';
import { BADGES } from '../constants';

interface ProfileProps {
  user: {
    name: string;
    business: string;
    joinDate: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="space-y-12">
      <div className="border-b border-gray-100 pb-10">
        <h2 className="text-3xl font-sans text-primary mb-2 font-bold uppercase tracking-tight">Associate Dossier</h2>
        <p className="text-gray-500 font-light italic">Your individual credentials and Standing within the Society.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="h-32 bg-primary/5 relative border-b border-gray-50">
              <div className="absolute -bottom-10 left-8 w-24 h-24 bg-white border-4 border-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <div className="w-full h-full bg-surface flex items-center justify-center text-primary">
                  <User size={48} />
                </div>
              </div>
            </div>
            <div className="pt-14 pb-8 px-8 space-y-6">
              <div>
                <h3 className="text-2xl font-sans text-primary font-bold">{user.name}</h3>
                <p className="text-accent uppercase tracking-[0.2em] text-[10px] font-bold">Associate Tier I</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-50">
                <div className="flex items-center text-gray-600 space-x-3">
                  <Briefcase size={16} className="text-accent" />
                  <span className="text-sm font-medium">{user.business}</span>
                </div>
                <div className="flex items-center text-gray-600 space-x-3">
                  <Calendar size={16} className="text-accent" />
                  <span className="text-sm font-medium">Joined {user.joinDate}</span>
                </div>
                <div className="flex items-center text-gray-600 space-x-3">
                  <Shield size={16} className="text-accent" />
                  <span className="text-sm font-medium">Clearance: LVL 2</span>
                </div>
              </div>

              <button className="w-full py-3 bg-surface hover:bg-accent hover:text-black border border-gray-100 text-primary rounded-lg text-[11px] uppercase tracking-widest font-bold transition-all flex items-center justify-center">
                <Settings size={14} className="mr-2" /> Credentials Update
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-sans font-bold mb-8 border-b border-gray-50 pb-4">Badge Showcase</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BADGES.map(badge => (
                <div key={badge.id} className="flex items-start space-x-4 p-5 bg-surface rounded-xl border border-transparent hover:border-accent/20 transition-all">
                  <div className="w-14 h-14 flex-shrink-0 bg-white border border-gray-100 rounded-full flex items-center justify-center text-2xl shadow-sm">
                    {badge.icon}
                  </div>
                  <div>
                    <h5 className="text-primary font-bold mb-1 text-sm uppercase tracking-wide">{badge.name}</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Loyalty Tier</p>
                <p className="text-xl text-primary font-sans font-bold">Gold Member</p>
              </div>
              <div className="p-3 bg-surface rounded-lg text-accent">
                <Award size={24} />
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Network Standing</p>
                <p className="text-xl text-primary font-sans font-bold">Elite (Top 5%)</p>
              </div>
              <div className="p-3 bg-surface rounded-lg text-primary">
                <Shield size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
