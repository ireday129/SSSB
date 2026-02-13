
import React from 'react';
import { ShoppingCart, User, LogOut, Ticket } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Onboarding', href: '#onboarding' },
    { name: 'Trainings', href: '#trainings' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Add-ons', href: '#add-ons' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-20 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center group"
        >
          <img
            src="/sssb-logo.png"
            alt="SSSB Logo"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Primary Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-4 py-2 rounded-md text-[11px] uppercase tracking-[0.2em] text-gray-600 hover:text-white hover:bg-primary transition-all duration-300 font-sans font-black"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative cursor-pointer group p-2 rounded-md hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 focus:outline-none p-1">
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary transition-all">
                <User className="w-4 h-4 text-gray-400 group-hover:text-primary" />
              </div>
            </button>

            {/* User Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 border-t-4 border-t-primary">
              <button className="w-full text-left px-4 py-2.5 text-xs hover:bg-gray-50 text-gray-600 rounded-md transition-colors flex items-center font-sans uppercase tracking-widest font-black">
                <User className="w-4 h-4 mr-3 text-accent" /> My Account
              </button>
              <a
                href="#tickets"
                onClick={(e) => scrollToSection(e, '#tickets')}
                className="w-full text-left px-4 py-2.5 text-xs hover:bg-gray-50 text-gray-600 rounded-md transition-colors flex items-center font-sans uppercase tracking-widest font-black"
              >
                <Ticket className="w-4 h-4 mr-3 text-accent" /> Submit Ticket
              </a>
              <div className="my-1 border-t border-gray-50"></div>
              <button className="w-full text-left px-4 py-2.5 text-xs hover:bg-red-50 text-red-500 rounded-md transition-colors flex items-center font-sans uppercase tracking-widest font-black">
                <LogOut className="w-4 h-4 mr-3" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
