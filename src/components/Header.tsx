// import React, { useState } from 'react';
// import { Search, Globe, ChevronDown } from 'lucide-react';
// import Logo from './Logo';

const Header: React.FC = () => {
  // const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top utility navigation */}
      <div className="bg-[#006B81] text-white">
        <div className="container mx-auto px-4 flex justify-end items-center h-14 text-sm">
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200 transition-colors"><b>Blog</b></a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors"><b>Events</b></a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors"><b>Careers</b></a></li>
            </ul>
          </nav>
            <a href="#" className="ml-6 bg-gradient-to-r from-[#3084fc] to-[#04d4bf]  hover:from-[#1f6ed6] hover:to-[#038f9c] transition-colors py-1.5 px-4 rounded">
              <b>Contact</b>
            </a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;