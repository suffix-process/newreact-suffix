// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // close mobile menu if window resized above md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full bg-[#006B81] text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo / Brand */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* nav + contact */}
        <div className="flex items-center">
          {/* mobile menu button */}
          <button
            className="md:hidden mr-4 focus:outline-none"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* navigation links */}
          <nav
            className={`
              absolute top-full left-0 w-full bg-[#006B81] flex flex-col items-center
              py-4 space-y-4 transition-transform transform
              ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
              md:static md:flex-row md:space-y-0 md:space-x-6 md:py-0 md:bg-transparent
              md:translate-y-0 md:flex
            `}
          >
            <a
              href="#"
              className="hover:text-blue-200 transition-colors text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors text-sm font-medium"
            >
              Events
            </a>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors text-sm font-medium"
            >
              Careers
            </a>
          </nav>

          {/* contact button always visible */}
          <a
            href="#"
            className="ml-4 whitespace-nowrap bg-gradient-to-r from-[#3084fc] to-[#04d4bf]
                       hover:from-[#1f6ed6] hover:to-[#038f9c] transition-colors
                       py-1.5 px-4 rounded text-sm font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
