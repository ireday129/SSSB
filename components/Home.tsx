
import React from 'react';
import { Award, BookOpen, UserCheck, ChevronRight } from 'lucide-react';

interface HomeProps {
  user: {
    name: string;
    completedOnboarding: boolean;
  };
  onboardingProgress: number;
}

const Home: React.FC<HomeProps> = ({ user, onboardingProgress }) => {
  return (
    <div className="pt-10">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-24 h-24 mb-6 border-2 border-accent/30 rounded-full p-2 flex items-center justify-center shadow-sm">
          <div className="w-full h-full bg-surface rounded-full flex items-center justify-center">
            <span className="font-serif text-3xl font-bold text-primary">SS</span>
          </div>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-primary mb-4 font-bold">
          Welcome, <span className="text-accent underline decoration-accent/30 underline-offset-8">{user.name}</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl font-light italic">
          "Exclusivity is the hallmark of the successful bureau. You are now at the table."
        </p>
      </div>

      {!user.completedOnboarding && (
        <div className="bg-surface border border-gray-100 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
          <div>
            <h3 className="text-2xl font-serif text-primary mb-2 font-bold uppercase tracking-tight">Initiate Your Membership</h3>
            <p className="text-gray-500 max-w-md">Complete the onboarding checklist ({onboardingProgress}% complete) to unlock your full tier privileges and official society badge.</p>
          </div>
          <a href="#onboarding" className="inline-flex items-center px-8 py-3 bg-primary text-white font-bold tracking-widest uppercase text-[11px] rounded transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md">
            Continue Onboarding <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      )}

      {user.completedOnboarding && (
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 mb-16 text-center">
          <h3 className="text-xl font-serif text-primary mb-1 uppercase tracking-[0.2em] font-bold">Full Member Access Granted</h3>
          <p className="text-gray-500 text-sm font-medium">Welcome to the Inner Circle, Associate.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <BookOpen />, label: "Courses Completed", value: "8 / 12" },
          { icon: <Award />, label: "Badges Earned", value: "3" },
          { icon: <UserCheck />, label: "Status", value: user.completedOnboarding ? "High Table" : "Associate" },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 hover:border-accent/40 transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-md">
            <div className={`mb-4 w-12 h-12 flex items-center justify-center text-accent bg-surface rounded-full border border-gray-50`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-serif font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
