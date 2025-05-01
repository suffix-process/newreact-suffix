// src/components/Footer.tsx
import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* full grid on md+ */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Suffix delivers mission-critical services and solutions on behalf of businesses and governments.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/suffix-outsourcing-solutions-pvt-ltd/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Business Process</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Customer Experience</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Human Capital</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Transaction Processing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Company</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Investors</a></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blogpost" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">News</a></li>
              <li><Link to="/picture-page" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" className="text-red-400 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
        </div>

        {/* mobile-only: logo + social (necessary portion) */}
        <div className="md:hidden flex flex-col items-center space-y-6">
          <Logo />
          <div className="text-center text-gray-400 px-6">
            Suffix delivers mission-critical services and solutions on behalf of businesses and governments.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/suffix-outsourcing-solutions-pvt-ltd/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* bottom always-visible */}
        <div className="mt-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Suffix, Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/privacy-choices" className="hover:text-white transition-colors">Privacy Choices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
