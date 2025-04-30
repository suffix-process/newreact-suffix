// src/pages/ContactPage.tsx
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const inquiryOptions = [
  'General Inquiry',
  'Sales',
  'Support',
  'Partnership',
  'Other',
];

const solutionOptions = [
  'Consulting',
  'RPA & Automation',
  'Digital Transformation',
  'Cloud Services',
  'Other',
];

const relatedLinks = [
  { label: 'Careers', url: '#' },
  { label: 'Submit an RFP', url: '#' },
  { label: 'FAQ', url: '#' },
  { label: 'Suppliers and Invoicing', url: '#' },
  { label: 'Employee resources', url: '#' },
  { label: 'Manage contact preferences', url: '#' },
];

export const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('');
  const [organization, setOrganization] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [solution, setSolution] = useState('');
  const [comments, setComments] = useState('');

  // Scroll to top on mount
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-12 px-4">
        <h1 className="text-3xl font-semibold">Contact us</h1>
        <p className="mt-2">Want more information about Suffix’s business or solutions?<br/>See below for sales and support contact options.</p>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-2 bg-white p-8 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Please provide the following information to help us route your request to the appropriate person.</h2>
          <form className="space-y-6">
            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type *</label>
              <div className="relative">
                <select
                  value={inquiryType}
                  onChange={e => setInquiryType(e.target.value)}
                  className="block w-full appearance-none border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="" disabled>Select inquiry</option>
                  {inquiryOptions.map(opt => <option key={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name / Address *</label>
              <input
                type="text"
                value={organization}
                onChange={e => setOrganization(e.target.value)}
                className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* First Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Email & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                <input
                  type="text"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Preferred Solution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Solution</label>
              <div className="relative">
                <select
                  value={solution}
                  onChange={e => setSolution(e.target.value)}
                  className="block w-full appearance-none border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="" disabled>Select solution</option>
                  {solutionOptions.map(opt => <option key={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                value={comments}
                onChange={e => setComments(e.target.value)}
                rows={4}
                className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Related Links */}
          <div className="bg-white p-6 shadow rounded">
            <h3 className="font-semibold mb-4">Related Links</h3>
            <ul className="space-y-2">
              {relatedLinks.map(link => (
                <li key={link.label}>
                  <a href={link.url} className="text-teal-600 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Prefer to Talk */}
          <div className="bg-blue-800 text-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Prefer to talk?</h3>
            <p className="mb-4">You can reach us at <strong>1-866-SUFFIX</strong><br/>Mon–Fri, 8am–7pm ET</p>
            <p>Email us at <a href="mailto:info@suffixcorp.com" className="underline">info@suffixcorp.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
