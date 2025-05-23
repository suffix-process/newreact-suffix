// import React from "react";
import React, { useEffect } from 'react';

const procent: React.FC = () => {

  useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, []);
          
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans bg-gray-50">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Process Centralization</h1>
        <p className="text-xl text-blue-600 font-medium">
          Scalable, Secure, and SLA-Driven Operational Execution for BFSI
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          At Suffix Process Solutions Pvt. Ltd., we understand that modern BFSI institutions demand more than just temporary staffing—they require integrated, high-performance operational support. Our Manpower + Infrastructure solution is designed for insurance and banking clients who want to scale operations quickly, ensure process compliance, and reduce administrative overhead, without the burden of building in-house capabilities.
        </p>
      </section>
 
      {/* What We Offer */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">✅</span> What We Offer
        </h2>

        <div className="space-y-8">
          {/* Skilled Manpower */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h3 className="flex items-center text-xl font-bold text-blue-700 mb-4">
              <span className="mr-2">🔹</span> Skilled, Domain-Trained Manpower
            </h3>
            <p className="text-gray-700 mb-4">
              We provide trained professionals with expertise in:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Claim processing (General and Life Insurance)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>KYC document verification and compliance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Policy servicing and customer onboarding</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Data entry, validation, and quality control</span>
              </li>
              <li className="flex items-start md:col-span-2">
                <span className="mr-2">•</span>
                <span>Document classification and content extraction (OCR/NLP-based environments)</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Each resource is aligned to meet your process specifications, quality expectations, and regulatory norms.
            </p>
          </div>

          {/* Infrastructure */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h3 className="flex items-center text-xl font-bold text-blue-700 mb-4">
              <span className="mr-2">🔹</span> Modern, Fully Equipped Infrastructure
            </h3>
            <p className="text-gray-700 mb-4">
              Your operations are executed from our secure, access-controlled facilities, with:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Individual system-level restrictions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>24x7 surveillance and real-time monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High-speed internet and data redundancy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Business continuity & disaster recovery support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Device tagging and ISO 27001:2022-compliant access policies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🔄</span> Flexible Engagement Models
        </h2>
        <p className="text-gray-700 mb-6">
          We offer 3 customizable models to suit your operational risk appetite and IT security framework:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Comprehensive Model */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3">Comprehensive Model</h3>
            <p className="text-gray-600">
              Your process is entirely managed at our premises with Suffix's infrastructure, systems, and team.
            </p>
          </div>

          {/* Hybrid Model */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3">Hybrid Model</h3>
            <p className="text-gray-600">
              Your operations run from our facility using your own laptops and software environment. You get our manpower + office space, but maintain complete system control.
            </p>
          </div>

          {/* Client-Owned Model */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3">Client-Owned Model</h3>
            <p className="text-gray-600">
              Our skilled manpower operates remotely or from your location using your systems and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Controls */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🛡️</span> Compliance & Controls
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>NDA with every staff member and process lead</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Maker-checker processes and audit trails</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Client data isolation and project-level access control</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No USB/Screenshot access, VPN-enabled operations (where applicable)</span>
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            All infrastructure is aligned with ISO 27001:2022 standards, ensuring robust information security and risk management.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🎯</span> Why Choose This Solution?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Faster Go-to-Market</h3>
            <p className="text-gray-700">Skip hiring cycles and facility setup.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Lower Fixed Costs</h3>
            <p className="text-gray-700">Pay only for resources and space used.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Process Agility</h3>
            <p className="text-gray-700">Scale teams up or down as per demand.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-1">Risk Mitigation</h3>
            <p className="text-gray-700">Centralized oversight, SOP adherence, and IT security built-in.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#006B81] text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">📞 Ready to Outsource with Confidence?</h2>
        <p className="mb-6 text-blue-100 leading-relaxed">
          Let Suffix handle your operations while you focus on strategic growth.
        </p>
        <div className="space-y-3">
          <p className="flex items-center">
            <span className="mr-3 text-xl">📧</span> 
            <a href="mailto:info@suffixcorp.com" className="hover:underline font-medium text-white">info@suffixcorp.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default procent;