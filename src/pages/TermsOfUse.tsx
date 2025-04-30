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
      {/* <p className="mb-6">
        Customer acknowledges that in performing Services under this Project Agreement/SOW, <strong>Suffix Process Solutions Pvt. Ltd.</strong> will use proprietary software and intellectual property (“IP”) of Suffix Process Solutions and/or its licensors...
      </p> */}

      {/* Definitions Section */}
      <section className="mb-8">
        
        <div className="container mx-auto px-4 py-12">
          {/* <h1 className="text-3xl font-bold mb-4">Terms of Use for This Website</h1> */}
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> 1st April 2025
          </p>

          <p className="mb-6">
            Welcome to the website of <strong>Suffix Process Solutions Pvt. Ltd.</strong> (“Suffix,” “we,” “us,” or “our”).
            By accessing or using our website (the “Site”), you agree to be bound by these Terms of Use. If you do not
            agree with these terms, please refrain from using the Site.
          </p>
          <p className="mb-12">
            We reserve the right to revise these Terms of Use at any time without prior notice. Continued use of the Site
            constitutes your acceptance of any such changes.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">1. Use of the Site and Intellectual Property Rights</h2>
            <p className="mb-4">
              All content, designs, logos, text, graphics, images, data, software, and other materials available on this Site
              (collectively, “Materials”) are the property of Suffix or its licensors and are protected by Indian copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>You may view or download content from the Site solely for your personal, non-commercial use, provided you retain all copyright and proprietary notices. You may not:</p>
            <ul className="list-disc list-inside ml-4 mt-2 mb-4">
              <li>Modify, reproduce, or distribute the Materials for any commercial purpose;</li>
              <li>Use the Materials on any other website or public network;</li>
              <li>Create derivative works or reverse-engineer any content or software from the Site.</li>
            </ul>
            <p className="text-red-600">Unauthorized use may result in legal action under applicable laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">2. Use of Software (if applicable)</h2>
            <p className="mb-4">
              Any software available on this Site is the intellectual property of Suffix or its technology partners. Unless
              accompanied by an explicit license agreement, you may not copy, reproduce, decompile, reverse-engineer, or
              distribute the software or its documentation.
            </p>
            <p>All software is provided “as is,” without any warranties, except as expressly agreed upon in a written license agreement.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">3. Third-Party Websites and Links</h2>
            <p>
              The Site may contain links to external websites provided for convenience. These sites are not under the control
              of Suffix. We are not responsible for the content, availability, or security of any third-party websites.
              Accessing these sites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">4. Disclaimer of Warranties</h2>
            <p>
              This Site and its contents are provided on an “as is” and “as available” basis. While we strive to keep content
              accurate and up to date, Suffix Process Solutions Pvt. Ltd. makes no warranties, express or implied, including
              but not limited to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Accuracy, completeness, or reliability of Site content;</li>
              <li>Merchantability or fitness for a particular purpose;</li>
              <li>Uninterrupted or error-free operation of the Site.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Suffix, its affiliates, directors, employees, or partners be liable for any indirect,
              incidental, special, or consequential damages, including loss of data, profits, or use, arising from your use of
              or inability to use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">6. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by the laws of India, with exclusive jurisdiction in the courts located in
              Ahmedabad, Gujarat. You agree to submit to the personal jurisdiction of these courts for any disputes arising
              out of your use of this Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Suffix Process Solutions Pvt. Ltd., its affiliates, employees,
              and agents from any claims, damages, liabilities, or expenses arising from your use of the Site or violation of
              these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">8. Export Restrictions</h2>
            <p>
              You agree not to export or re-export any content or software from this Site in violation of applicable export
              laws and regulations of India or other jurisdictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">9. Trademarks</h2>
            <p>
              All trademarks, service marks, and logos displayed on the Site are the property of Suffix Process Solutions Pvt.
              Ltd. or third parties. No license or right is granted to use any trademark without the prior written consent of
              the owner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">10. Termination of Use</h2>
            <p>
              Suffix reserves the right to suspend or terminate your access to the Site at any time, without notice, for conduct
              that violates these Terms or is otherwise harmful to our interests or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Contact Information</h2>
            <p>If you have any questions or concerns regarding these Terms of Use, you may contact us at:</p>
            <address className="not-italic mt-2">
              📧 <a href="mailto:info@suffixcorp.com" className="text-blue-600 hover:underline">info@suffixcorp.com</a><br />
              🌐 <a href="https://www.suffixcorp.com" className="text-blue-600 hover:underline">www.suffixcorp.com</a><br />
              📍 801, Zade, Z2, Opp Baghban Partly Plot, Thaltej Hebatpur Road, Ahmedabad – 380059
            </address>
          </section>
        </div>
      </section>


    </div>
  );
};

export default TermsOfUse;
