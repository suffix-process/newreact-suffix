// import React from "react";
import React, { useEffect } from 'react';

const rpa: React.FC = () => {

  useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans bg-gray-50">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Robotic Process Automation (RPA) Solutions</h1>
        <p className="text-xl text-blue-600 font-medium">Automate. Accelerate. Assure.</p>
      </header>

      {/* Introduction */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          At Suffix Process Solutions Pvt. Ltd., we help BFSI organizations break free from repetitive, rule-based tasks by implementing intelligent, scalable RPA solutions. Our automation framework combines precision, compliance, and agility to transform legacy processes into real-time, bot-driven workflows — delivering measurable outcomes in accuracy, turnaround time, and cost.
        </p>
      </section>

      {/* What We Automate */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🔍</span> What We Automate
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">Policy & Claims Processing</h3>
            <p className="text-gray-600">Automated data capture, document validation, and entry from claim forms and proposal documents.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">Customer KYC & Compliance</h3>
            <p className="text-gray-600">Masking Aadhaar, PAN validation, ITR/GST reconciliation, IRDA license verification, and eKYC workflows.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">Operational Reporting & Data Management</h3>
            <p className="text-gray-600">Consolidating Excel sheets, updating internal dashboards, and generating compliance reports automatically.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">Underwriting & Risk Assessment Support</h3>
            <p className="text-gray-600">Extracting medical data, interpreting lab reports, and applying rule engines for decision triggers.</p>
          </div>
        </div>
      </section>

      {/* Types of RPA Solutions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🤖</span> Types of RPA Solutions Offered
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-700 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-700 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Attended Bots</td>
                <td className="px-6 py-4 text-gray-600">Run with human input—ideal for desktop-based processes like proposal form checks, name matching, and decision support</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Unattended Bots</td>
                <td className="px-6 py-4 text-gray-600">Fully autonomous bots that execute batch jobs like document scraping, cross-platform updates, and report generation</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">AI-Augmented Bots</td>
                <td className="px-6 py-4 text-gray-600">Combine OCR, NLP, or machine learning to extract and interpret data from complex PDFs or unstructured documents</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🔐</span> Built for BFSI Security & Compliance
        </h2>
        
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start">
            <span className="mr-2">✅</span>
            <span>Hosted on secure, ISO 27001:2022-compliant environments</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start">
            <span className="mr-2">✅</span>
            <span>End-to-end audit trails and exception logging</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start">
            <span className="mr-2">✅</span>
            <span>Access control via Active Directory, VPN, or cloud-based management</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start">
            <span className="mr-2">✅</span>
            <span>Integrated validation checkpoints to ensure data integrity</span>
          </li>
        </ul>
      </section>

      {/* Key Benefits */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🎯</span> Key Benefits
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Up to 80% Reduction</h3>
            <p className="text-gray-700">in manual effort for repetitive tasks</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Faster Turnaround</h3>
            <p className="text-gray-700">with 24x7 bot execution and minimal errors</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Regulatory Compliance</h3>
            <p className="text-gray-700">with consistent rule-based processing</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Cost Efficiency</h3>
            <p className="text-gray-700">without compromising quality or controls</p>
          </div>
        </div>
      </section>

      {/* Blended Delivery */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">🧠</span> Blended Delivery Possible
        </h2>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-blue-700">Want human oversight + automation?</span><br />
          We offer hybrid solutions where bots do the heavy lifting, and trained manpower handles exceptions, complex cases, and real-time QC.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#006B81] text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🚀 Transform Operations with Bots That Think and Act</h2>
        <p className="mb-6 text-blue-100 leading-relaxed">
          Suffix delivers practical, business-aligned RPA solutions that work — not just proof of concept but production-ready, scalable, and maintainable automations.
        </p>
        <div className="space-y-3">
          <p className="flex items-center">
            <span className="mr-3 text-xl">📧</span> 
            <a href="mailto:info@suffixcorp.com" className="hover:underline font-medium text-white">info@suffixcorp.com</a>
          </p>
          <p className="flex items-center">
            <span className="mr-3 text-xl">🌐</span> 
            <a href="https://www.suffixcorp.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-white">www.suffixcorp.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default rpa;