
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Onboarding from './components/Onboarding';
import Trainings from './components/Trainings';
import Tickets from './components/Tickets';
import AddOns from './components/AddOns';
import { ONBOARDING_DATA } from './constants';
import { OnboardingItem } from './types';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [onboardingItems, setOnboardingItems] = useState<OnboardingItem[]>(ONBOARDING_DATA);
  
  const completedCount = onboardingItems.filter(i => i.completed).length;
  const progressPercent = Math.round((completedCount / onboardingItems.length) * 100);
  const isFullyOnboarded = progressPercent === 100;

  const [user] = useState({
    name: "Johnathan Wickham",
    business: "Continental Tax Services",
    joinDate: "January 14, 2024"
  });

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const toggleOnboardingItem = (id: string) => {
    setOnboardingItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      <Navbar cartCount={cartCount} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        <section id="home">
          <Home 
            user={{ ...user, completedOnboarding: isFullyOnboarded }} 
            onboardingProgress={progressPercent}
          />
        </section>

        <section id="onboarding">
          <Onboarding 
            items={onboardingItems} 
            onToggle={toggleOnboardingItem} 
            progress={progressPercent}
          />
        </section>

        <section id="trainings">
          <Trainings />
        </section>

        <section id="tickets">
          <Tickets />
        </section>

        <section id="add-ons">
          <AddOns onAddToCart={handleAddToCart} />
        </section>
      </main>

      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-400 font-serif bg-surface">
        <div className="mb-4">
          <img 
            src="https://storage.googleapis.com/msgsndr/4X2JY0JipOsTk1oyWC4a/media/698f45a100849884fc42b332.png" 
            alt="SSSB Logo" 
            className="h-8 w-auto mx-auto grayscale opacity-50"
          />
        </div>
        &copy; {new Date().getFullYear()} SECRET SOCIETY OF SERVICE BUREAUS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;
