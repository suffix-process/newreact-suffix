import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container mx-auto px-1 py-1">
      {/* Hero Banner with animated overlay */}
      <section
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRh0kBAWTbiE8n1cy-XQHoLrazky5EPGZn7kWWb0zG64vq7i6oL')",
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
            Privacy Statement
          </h1>
        </motion.div>
      </section>

      <br />
      <p className="mb-4">
        <strong>Effective Date:</strong> 24 April 2025<br />
        <strong>Last Updated:</strong> 24 April 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Objective</h2>
        <p>
          This Privacy Statement explains the privacy and data-protection principles followed by
          <strong> Suffix Process Solutions Pvt. Ltd.</strong> (“we”, “us” or “our”) and its affiliates worldwide in relation to personal
          information of our customers (including product- or service-clients and outsourcing clients), partners, contractors and vendors,
          job applicants, trainees and current or former employees, prospective clients and Board members. It describes how we
          collect, use, disclose and safeguard your personal data, whether you provide it directly to us or we collect it through
          our websites, mobile applications, emails or other channels.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Scope</h2>
        <p>This Statement applies to personal information collected or processed by Suffix Process Solutions through:</p>
        <ul className="list-disc list-inside">
          <li>Our corporate websites and microsites (collectively, “Suffix Websites”)</li>
          <li>Emails, calls or other direct communications with you</li>
          <li>Our mobile applications</li>
          <li>Third-party integrations (e.g. social media widgets)</li>
        </ul>
        <p>
          It does not cover third-party websites or services to which we link. We encourage you to review the privacy policies
          of any site you visit from ours.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. What Personal Information We Collect</h2>
        <table className="w-full text-left mb-4 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Collection Method</th>
              <th className="border p-2">Data Elements</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">You provide directly</td>
              <td className="border p-2">
                Name, email address, job title, organization, business address (city, country), phone number,
                industry type, resume/CV (if applying), other fields you complete.
              </td>
            </tr>
            <tr>
              <td className="border p-2">Automatically when you use our sites/apps</td>
              <td className="border p-2">
                IP address, device type, browser type, cookies and other tracking identifiers, pages visited,
                time stamps, geolocation (at city level).
              </td>
            </tr>
            <tr>
              <td className="border p-2">From third-party sources</td>
              <td className="border p-2">
                Social-media profile data (as permitted by your privacy settings), publicly available business directories,
                marketing lists (where you have opted in).
              </td>
            </tr>
            <tr>
              <td className="border p-2">Mobile usage</td>
              <td className="border p-2">
                Advertising ID (IDFA, AAID), device identifiers, operating system, app usage metrics, push-notification preferences.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. How We Use Your Personal Information</h2>
        <table className="w-full text-left mb-4 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Purpose</th>
              <th className="border p-2">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">To respond to your inquiries and provide requested services</td>
              <td className="border p-2">Performance of contract or legitimate interest</td>
            </tr>
            <tr>
              <td className="border p-2">To send newsletters, marketing materials and event invitations</td>
              <td className="border p-2">Consent or legitimate interest</td>
            </tr>
            <tr>
              <td className="border p-2">To administer our websites, apps, troubleshoot, and secure systems</td>
              <td className="border p-2">Legitimate interest</td>
            </tr>
            <tr>
              <td className="border p-2">To run analytics and improve functionality and user experience</td>
              <td className="border p-2">Legitimate interest</td>
            </tr>
            <tr>
              <td className="border p-2">To comply with legal obligations (e.g. tax, audit, regulatory)</td>
              <td className="border p-2">Legal obligation</td>
            </tr>
            <tr>
              <td className="border p-2">To process job applications</td>
              <td className="border p-2">Consent or performance of recruitment process</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Cookies & Tracking Technologies</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Strictly Necessary Cookies:</strong> Enable core functionality (e.g. session management).</li>
          <li><strong>Performance Cookies:</strong> Aggregate analytics to measure site performance.</li>
          <li><strong>Functionality Cookies:</strong> Personalize your experience (e.g. language).</li>
          <li><strong>Targeting/Advertising Cookies:</strong> Deliver relevant third-party ads.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Sharing & Disclosure</h2>
        <p>We do <strong>not</strong> sell your personal data. We may share it with:</p>
        <ul className="list-disc list-inside">
          <li><strong>Affiliates & Subsidiaries:</strong> For legitimate business purposes.</li>
          <li><strong>Service Providers:</strong> Under confidentiality obligations, to help us deliver services.</li>
          <li><strong>Professional Advisors:</strong> Auditors, lawyers or insurers to meet legal requirements.</li>
          <li><strong>Statutory Authorities:</strong> When required by law (e.g. court orders).</li>
          <li><strong>Successors in Interest:</strong> If we merge or are acquired, under equivalent safeguards.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. International Data Transfers</h2>
        <p>
          Your data may be transferred outside India—including to countries with different data-protection laws—to our affiliates
          or service providers. We ensure transfers comply with applicable legal requirements (e.g. standard contractual clauses).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to fulfill the purposes outlined above, including:
        </p>
        <ul className="list-disc list-inside">
          <li>The duration of our business relationship or contractual obligations</li>
          <li>Compliance with legal, tax or accounting requirements</li>
          <li>Resolution of disputes and enforcement of our agreements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Your Rights</h2>
        <p>Subject to local law, you may have the right to:</p>
        <ul className="list-disc list-inside">
          <li>Access the personal data we hold about you</li>
          <li>Rectify inaccuracies</li>
          <li>Delete or restrict processing</li>
          <li>Object to processing for direct marketing or profiling</li>
          <li>Port your data in a machine-readable format</li>
          <li>Withdraw consent at any time (for consent-based processing)</li>
        </ul>
        <p>To exercise these rights, please contact our Data Privacy Office (see Section 11).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. How to Manage Your Preferences</h2>
        <ul className="list-disc list-inside">
          <li><strong>Newsletters & Marketing Emails:</strong> Click “Unsubscribe” in any marketing email.</li>
          <li><strong>Mobile Notifications:</strong> Manage via your device’s settings or by contacting us.</li>
          <li><strong>Browser Cookies:</strong> Adjust settings in your browser (Chrome, Firefox, Edge, Safari).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Contact & Grievance Redressal</h2>
        <p>If you have questions or wish to exercise any privacy right, contact:</p>
        <address className="not-italic">
          <strong>Data Privacy Office</strong><br />
          Suffix Process Solutions Pvt. Ltd.<br />
          Email: <a href="mailto:data.privacy@suffixcorp.com" className="text-cyan-500 hover:underline">data.privacy@suffixcorp.com</a><br />
          Phone: +91 99250 00237
        </address>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">12. Anti-Spam Policy</h2>
        <p>We use industry best practices to prevent unsolicited bulk email. All inbound emails are screened; suspected spam is rejected or quarantined.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">13. Security Measures</h2>
        <p>We implement physical, technical and administrative safeguards—ISO 27001:2022 certified—to protect your personal data against unauthorized access, loss or alteration.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
