import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
// import Logo from './Logo';
import logo from '../assets/Suffixlogo-Pho.png';
// import logoWebp from '../assets/Suffix_Logo_New.webp';

const navItems = [
  {
    name: 'SOLUTIONS',
    submenu: [
      'Business Process Solutions',
      'Customer Experience Management',
      'Finance & Accounting',
      'Healthcare Solutions',
      'Human Capital Solutions',
    ],
  },
  {
    name: 'INDUSTRIES',
    submenu: [
      'Banking & Capital Markets',
      'Education',
      'Government Services',
      'Healthcare',
      'Insurance',
    ],
  },
  {
    name: 'INNOVATION',
    submenu: ['AI & Automation', 'Analytics & Insights', 'Cloud Services', 'Digital Experience'],
  },
  {
    name: 'INSIGHTS',
    submenu: ['Blog', 'Case Studies', 'White Papers', 'Webinars'],
  },
  {
    name: 'ABOUT',
    submenu: ['Company Overview', 'Leadership', 'Diversity & Inclusion', 'Corporate Responsibility', 'Careers'],
  },
];

const MainNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // <header className="bg-gradient-to-r from-[#778da9] to-[#0d1b2a]">
    <header className="relative z-50 bg-[#006B81] ">
      <div className="container mx-auto px-0 h-[90px] flex items-center justify-between">


        {/* Logo */}
        <img
          src={logo}
          alt="Suffix Logo"
          className="h-[100px] w-auto object-contain filter"
          style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(6678%) hue-rotate(87deg) brightness(109%) contrast(76%)' }}
        />
        {/* logo */}

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center text-white font-medium hover:text-gray-200 transition-colors">
                <span>{item.name}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeMenu === item.name && (
                // <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden z-20">
                <ul className="absolute top-full left-0 z-50  w-48 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden">
                  {item.submenu.map((sub) => (
                    <li key={sub}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white"
          onClick={() => {
            setMobileOpen((o) => !o);
            setActiveMenu(null);
          }}
        >
          <div className="w-6 flex flex-col items-end">
            <span
              className={`block h-0.5 bg-white w-6 mb-1.5 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`block h-0.5 bg-white w-5 mb-1.5 transition-opacity ${mobileOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block h-0.5 bg-white w-6 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {/* {mobileOpen && (
        <div className="lg:hidden bg-[#00205B]"> */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 z-50 w-full bg-[#00205B]">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() =>
                      setActiveMenu((curr) => (curr === item.name ? null : item.name))
                    }
                    className="w-full flex justify-between items-center text-white py-2 focus:outline-none"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeMenu === item.name ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {activeMenu === item.name && (
                    <ul className="pl-4 mt-2 border-l border-blue-700 space-y-2">
                      {item.submenu.map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            className="block py-2 text-white hover:text-gray-300 transition-colors"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainNav;
