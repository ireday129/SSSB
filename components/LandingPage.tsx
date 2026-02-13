import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Onboarding from './Onboarding';
import Trainings from './Trainings';
import Tickets from './Tickets';
import AddOns from './AddOns';
import { ONBOARDING_DATA } from '../constants';
import { OnboardingItem } from '../types';

const LandingPage: React.FC = () => {
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

            <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-400 font-sans bg-surface">
                <div className="mb-4">
                    <img
                        src="/sssb-logo.png"
                        alt="SSSB Logo"
                        className="h-12 w-auto mx-auto grayscale opacity-50"
                    />
                </div>
                &copy; {new Date().getFullYear()} SECRET SOCIETY OF SERVICE BUREAUS. ALL RIGHTS RESERVED.
            </footer>
        </div>
    );
};

export default LandingPage;
