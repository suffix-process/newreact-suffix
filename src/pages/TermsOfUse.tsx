import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsOfUse: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

  return (
    <div className="container mx-auto px-4 py-1">
      {/* Hero Banner with animated overlay */}
      <section
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s7ap1.scene7.com/is/image/TCSCOMprod/AdobeStock_320526027?wid=1400&hei=501&dpr=off')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          className="relative z-10 flex items-center justify-center h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center px-4">
            SCHEDULE 1: Use Terms for Suffix Process Solutions Proprietary Software or Solution
          </h1>
        </motion.div>
      </section>

      <br />
      <p className="mb-6">
        Customer acknowledges that in performing Services under this Project Agreement/SOW, <strong>Suffix Process Solutions Pvt. Ltd.</strong> will use proprietary software and intellectual property (“IP”) of Suffix Process Solutions and/or its licensors...
      </p>

      {/* Definitions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Definitions</h2>
        <ul className="list-disc list-inside">
          <li><strong>Affiliate:</strong> Any entity controlling, controlled by, or under common control with Customer.</li>
          <li><strong>Authorized Users:</strong> Customer employees or Affiliates approved to use the Suffix Proprietary Solution within licensed operations.</li>
          <li><strong>Derivative Works:</strong> Updates, modifications, enhancements, extensions, or any recast of the Proprietary Software.</li>
          <li><strong>Documentation:</strong> User guides, installation manuals, release notes, API specifications and support documents provided with the Solution.</li>
          <li><strong>Fee:</strong> License fee specified in Annex A to this Schedule.</li>
          <li><strong>Licensed Operations:</strong> Specific business operations permitted under this license, as defined in Annex A.</li>
          <li><strong>Licensed Territory:</strong> Geographic region(s) where use is allowed, per Annex A.</li>
          <li><strong>Permitted Site:</strong> Customer locations authorized for installation, per Annex A.</li>
          <li><strong>Target Environment:</strong> Hardware, OS, and software environment specified in Documentation or Annex A.</li>
          <li><strong>Use:</strong> Installing, executing, processing, transmitting, and storing data using the Solution in object-code form for internal business purposes.</li>
        </ul>
      </section>

      {/* Terms of Use Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Terms of Use</h2>
        <p>Subject to timely payment of Fees and compliance with this Schedule, Suffix Process Solutions grants Customer a non-exclusive, non-transferable license...</p>
        <ol className="list-decimal list-inside mt-4 space-y-2">
          <li>Customer ensures Authorized Users comply with these terms...</li>
          <li>Customer may make backup copies solely for archival purposes...</li>
          <li>Customer shall maintain all proprietary notices...</li>
          <li>Customer’s third-party service providers must adhere to these same terms...</li>
          <li>Prohibited actions: reverse engineering, bypassing protections...</li>
          <li>The license does not permit independent use of components...</li>
          <li>Customer may move the Solution between Permitted Sites...</li>
          <li>Customer must comply with all applicable laws...</li>
          <li>Suffix Process Solutions may audit...</li>
          <li>Customer responsible for acquiring, maintaining, and backing up...</li>
          <li>License termination for use beyond scope...</li>
        </ol>
      </section>

      {/* Delivery Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Delivery</h2>
        <p>Suffix Process Solutions delivers the Solution electronically...</p>
      </section>

      {/* Confidential Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Confidential Information</h2>
        <p>Confidential Information includes Solution technology, methods, pricing, roadmaps...</p>
      </section>

      {/* Ownership & Proprietary Rights Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Ownership & Proprietary Rights</h2>
        <p>Suffix Process Solutions retains all IP rights in the Solution...</p>
      </section>

      {/* Third-Party Software Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Third-Party Software</h2>
        <p>Open source and third-party components included...</p>
      </section>

      {/* Training Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Training</h2>
        <p>Training is available upon request for an additional charge...</p>
      </section>

      {/* Indemnification Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Indemnification</h2>
        <p>Customer indemnifies Suffix Process Solutions...</p>
      </section>

      {/* Warranty Disclaimer & Liability Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Warranty Disclaimer & Liability</h2>
        <p>The Solution is provided “as is” except for any express warranties...</p>
      </section>

      {/* Termination Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Termination</h2>
        <p>The license term runs from the Start Date to End Date in Annex A...</p>
      </section>
    </div>
  );
};

export default TermsOfUse;
