import React, { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Suffix_Logo_New_1-removebg.png';

interface SubmenuItem {
  label: string;
  path: string;
}

interface NavItem {
  name: string;
  path?: string;
  submenu?: SubmenuItem[];
}

const navItems: NavItem[] = [
  { name: 'HOME', path: '/' },
  {
    name: 'SOLUTIONS',
    submenu: [
      { label: 'Intelligent Automation Tools', path: '/solutions/iat ' },
      { label: 'RPA', path: '/solutions/rpa' },
      { label: 'Process Centralization', path: '/solutions/procent' },
      // { label: 'Healthcare Solutions', path: '/solutions/healthcare-solutions' },
      // { label: 'Human Capital Solutions', path: '/solutions/human-capital-solutions' },
    ],
  },
  {
    name: 'INDUSTRIES',
    submenu: [
      { label: 'Banking & Capital Markets', path: '/industries/banking-capital-markets' },
      { label: 'Education', path: '/industries/education' },
      { label: 'Government Services', path: '/industries/government-services' },
      { label: 'Healthcare', path: '/industries/healthcare' },
      { label: 'Insurance', path: '/industries/insurance' },
    ],
  },
  {
    name: 'INNOVATION',
    submenu: [
      { label: 'AI & Automation', path: '/innovation/ai-automation' },
      { label: 'Analytics & Insights', path: '/innovation/analytics-insights' },
      { label: 'Cloud Services', path: '/innovation/cloud-services' },
      { label: 'Digital Experience', path: '/innovation/digital-experience' },
    ],
  },
  {
    name: 'INSIGHTS',
    submenu: [
      { label: 'Blog', path: '/blogpost' },
      { label: 'Case Studies', path: '/insights/case-studies' },
      { label: 'White Papers', path: '/insights/white-papers' },
      { label: 'Webinars', path: '/insights/webinars' },
    ],
  },
  {
    name: 'ABOUT',
    submenu: [
      { label: 'Company Overview', path: '/about/company-overview' },
      { label: 'Leadership', path: '/about/leadership' },
      { label: 'Diversity & Inclusion', path: '/about/diversity-inclusion' },
      { label: 'Corporate Responsibility', path: '/about/corporate-responsibility' },
      { label: 'Careers', path: '/careers' },
    ],
  },
];

const MainNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#006B81] shadow-md">
      <div className="container mx-auto h-20 flex items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Suffix Logo"
            className="h-[90px] w-auto object-contain cursor-pointer filter brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-3 hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {!item.submenu ? (
                <Link
                  to={item.path || '/'}
                  className="px-4 py-2 text-white font-medium hover:bg-[#005870] rounded-md transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button className="flex items-center px-4 py-2 text-white font-medium hover:bg-[#005870] rounded-md transition-colors duration-200">
                    <span>{item.name}</span>
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute left-[-80px] min-w-[250px] mt-1 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 origin-top ${activeMenu === item.name ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 invisible'}`}>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-150"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white rounded-md hover:bg-[#005870] focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-[#006B81] shadow-lg transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {!item.submenu ? (
                  <Link
                    to={item.path || '/'}
                    className="block px-4 py-3 text-white font-medium hover:bg-[#005870] rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 text-white font-medium hover:bg-[#005870] rounded-md transition-colors"
                      onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`pl-4 overflow-hidden transition-all duration-300 ${activeMenu === item.name ? 'max-h-96' : 'max-h-0'}`}>
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-gray-200 hover:text-white hover:bg-[#005870] rounded-md transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainNav;