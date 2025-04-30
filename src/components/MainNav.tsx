// src/components/MainNav.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Suffix_Logo_New_1-removebg.png';

interface SubmenuItem {
  label: string;
  path: string;
}
interface NavItem {
  name: string;
  submenu: SubmenuItem[];
}

const navItems: NavItem[] = [
  {
    name: 'SOLUTIONS',
    submenu: [
      { label: 'Business Process Solutions',     path: '/solutions/business-process-solutions' },
      { label: 'Customer Experience Management',  path: '/solutions/customer-experience-management' },
      { label: 'Finance & Accounting',           path: '/solutions/finance-accounting' },
      { label: 'Healthcare Solutions',           path: '/solutions/healthcare-solutions' },
      { label: 'Human Capital Solutions',        path: '/solutions/human-capital-solutions' },
    ],
  },
  {
    name: 'INDUSTRIES',
    submenu: [
      { label: 'Banking & Capital Markets', path: '/industries/banking-capital-markets' },
      { label: 'Education',                  path: '/industries/education' },
      { label: 'Government Services',        path: '/industries/government-services' },
      { label: 'Healthcare',                 path: '/industries/healthcare' },
      { label: 'Insurance',                  path: '/industries/insurance' },
    ],
  },
  {
    name: 'INNOVATION',
    submenu: [
      { label: 'AI & Automation',        path: '/innovation/ai-automation' },
      { label: 'Analytics & Insights',   path: '/innovation/analytics-insights' },
      { label: 'Cloud Services',         path: '/innovation/cloud-services' },
      { label: 'Digital Experience',     path: '/innovation/digital-experience' },
    ],
  },
  {
    name: 'INSIGHTS',
    submenu: [
      { label: 'Blog',        path: '/blogpost' },
      { label: 'Case Studies',path: '/insights/case-studies' },
      { label: 'White Papers',path: '/insights/white-papers' },
      { label: 'Webinars',    path: '/insights/webinars' },
    ],
  },
  {
    name: 'ABOUT',
    submenu: [
      { label: 'Company Overview',         path: '/about/company-overview' },
      { label: 'Leadership',               path: '/about/leadership' },
      { label: 'Diversity & Inclusion',    path: '/about/diversity-inclusion' },
      { label: 'Corporate Responsibility', path: '/about/corporate-responsibility' },
      { label: 'Careers',                  path: '/careers' },
    ],
  },
];

const MainNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#006B81]">
      <div className="container mx-auto h-[90px] flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Suffix Logo"
            className="h-[90px] w-auto object-contain filter cursor-pointer"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(6678%) hue-rotate(87deg) brightness(109%) contrast(76%)',
            }}
          />
        </Link>

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
                <ul className="absolute top-full left-0 z-50 w-56 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden">
                  {item.submenu.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {sub.label}
                      </Link>
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
              className={`block h-0.5 bg-white w-6 mb-1.5 transition-transform ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-white w-5 mb-1.5 transition-opacity ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-white w-6 transition-transform ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
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
                      className={`h-4 w-4 transition-transform ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeMenu === item.name && (
                    <ul className="pl-4 mt-2 border-l border-blue-700 space-y-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            className="block py-2 text-white hover:text-gray-300 transition-colors"
                          >
                            {sub.label}
                          </Link>
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
