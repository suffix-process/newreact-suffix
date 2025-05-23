// import React from "react";
import React, { useEffect } from 'react';

const iat: React.FC = () => {

  useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, []);
          
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Intelligent Automation Tools</h1>
        <p className="text-xl text-blue-600 font-medium">Extract. Interpret. Decide — Seamlessly.</p>
      </header>

      {/* Introduction */}
      <section className="mb-10 bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          At Suffix Process Solutions Pvt. Ltd., we build and deploy automation tools powered by OCR, AI, and NLP to help BFSI organizations eliminate manual data entry, accelerate compliance checks, and digitize high-volume document workflows. Whether you're processing income documents, KYC records, medical reports, or insurance forms — our tools make your operations smarter, faster, and audit-ready.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🛠️</span> What Our Automation Tools Do
        </h2>
        
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <strong className="block text-lg text-blue-700 mb-1">Data Extraction from Structured & Unstructured Documents</strong>
            <span className="text-gray-600">– ITRs, Form 26AS, Aadhaar, PAN, GST returns, loan documents, medical reports</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <strong className="block text-lg text-blue-700 mb-1">OCR + NLP + Rule Engine-Based Interpretation</strong>
            <span className="text-gray-600">– AI-powered parsing of values, confidence scores, and real-time flagging of inconsistencies</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <strong className="block text-lg text-blue-700 mb-1">Automated Document Classification & Indexing</strong>
            <span className="text-gray-600">– Segregates files (e.g., Proposal Forms, Health Declarations, KYC) with high accuracy</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <strong className="block text-lg text-blue-700 mb-1">Redaction & Masking Engines</strong>
            <span className="text-gray-600">– Aadhaar masking, PAN obfuscation, and personally identifiable information (PII) protection</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <strong className="block text-lg text-blue-700 mb-1">Custom Report Generation & API Integration</strong>
            <span className="text-gray-600">– Structured JSON, Excel, or database-ready outputs for downstream consumption or upload</span>
          </li>
        </ul>
      </section>

      {/* Use Cases */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">📋</span> Applicable Use Cases in BFSI
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Use Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Aadhaar Masking</td>
                <td className="px-6 py-4 text-gray-600">KYC compliance in insurance, banking onboarding</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Income Document Automation</td>
                <td className="px-6 py-4 text-gray-600">ITR, Form 16/26AS parsing for underwriting and claim verification</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Proposal Form Extraction</td>
                <td className="px-6 py-4 text-gray-600">Extracting key fields from scanned forms to reduce QC time</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Medical Report Interpretation</td>
                <td className="px-6 py-4 text-gray-600">Parsing health reports for risk profiling or claims</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Document Classification Bots</td>
                <td className="px-6 py-4 text-gray-600">Sorting PDFs based on format, headers, or keywords</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">GST & Bank Statement Reconciliation</td>
                <td className="px-6 py-4 text-gray-600">SME loan and credit evaluations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🔐</span> Security, Compliance, and Control
        </h2>
        
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            Hosted securely in ISO 27001:2022-compliant infrastructure
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            Supports audit trails, exception flagging, and logging
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            API-ready for integration into core BFSI systems
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            PII masking and encryption to ensure regulatory compliance
          </li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🎯</span> Key Advantages
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-medium text-blue-800">Up to 90% reduction in manual document handling</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-medium text-blue-800">Near real-time results with bulk document processing</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-medium text-blue-800">Configurable rule engines for different use cases</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="font-medium text-blue-800">Seamless integration with internal portals or CRMs</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#006B81] text-white p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="mr-2">💡</span> Smarter Than OCR. Simpler Than Building In-House.
        </h2>
        <p className="mb-6 text-blue-100 leading-relaxed">
          Our automation tools bridge the gap between raw documents and intelligent insights — without costly platform licenses or complex IT involvement. Built for operations, not just IT.
        </p>
        <div className="space-y-2">
          <p className="flex items-center">
            <span className="mr-2">📧</span> 
            <a href="mailto:info@suffixcorp.com" className="hover:underline font-medium">info@suffixcorp.com</a>
          </p>
          <p className="flex items-center">
            <span className="mr-2">🌐</span> 
            <a href="https://www.suffixcorp.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">www.suffixcorp.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default iat;