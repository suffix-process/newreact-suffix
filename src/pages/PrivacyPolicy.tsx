import React, { useEffect } from "react";
import { motion } from "framer-motion";
import mailIcon from "../assets/address-icon/icons8-mail-64.png";
import locationIcon from "../assets/address-icon/icons8-location-48.png";
import domainIcon from "../assets/address-icon/icons8-domain-94.png";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            Privacy Policy
          </h1>
        </motion.div>
      </section>

      <br />
      {/* <p className="mb-4">
        <strong>Effective Date:</strong> 24 April 2025<br />
        <strong>Last Updated:</strong> 24 April 2025
      </p> */}

      <section className="mb-8">
        <div className="container mx-auto px-4 py-12">
          {/* <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1> */}
          <p className="text-gray-600 mb-2">
            <strong>Effective Date:</strong> 1st April 2025
          </p>
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> 1st April 2025
          </p>

          <p className="mb-6">
            At <strong>Suffix Process Solutions Pvt. Ltd.</strong> (“Suffix”,
            “we”, “our”, “us”), we value your trust and are committed to
            protecting your personal data in accordance with the Digital
            Personal Data Protection Act, 2023 (DPDPA) of India and the
            principles of ISO/IEC 27001:2022 for information security
            management.
          </p>
          <p className="mb-12">
            This Privacy Policy outlines our practices relating to the
            collection, use, disclosure, storage, and protection of your
            personal data. It applies to all personal information collected via
            our website, forms, communication, and service delivery platforms.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              1. Data Protection Commitment
            </h2>
            <p className="mb-4">
              We process personal data lawfully, fairly, and for legitimate
              purposes, following the principles of:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Purpose Limitation</li>
              <li>Data Minimization</li>
              <li>Storage Limitation</li>
              <li>Accuracy</li>
              <li>Accountability</li>
              <li>Confidentiality, Integrity, and Availability</li>
            </ul>
            <p>
              Our organization follows strict ISO 27001:2022 controls—access
              control, encryption, incident response, data retention—to ensure
              security of personal data throughout its lifecycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              2. Definitions (as per DPDPA)
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Data Principal:</strong> The individual to whom the
                personal data relates
              </li>
              <li>
                <strong>Data Fiduciary:</strong> Suffix Process Solutions Pvt.
                Ltd., determining the purpose and means of processing
              </li>
              <li>
                <strong>Personal Data:</strong> Any data about an individual who
                is identifiable by or in relation to such data
              </li>
              <li>
                <strong>Processing:</strong> Any operation on personal
                data—collection, storage, use, disclosure, or erasure
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              3. What Personal Data We Collect
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Full name, contact details (email, mobile), job title,
                organization
              </li>
              <li>Browsing information (IP address, browser details)</li>
              <li>
                Identification documents for verification (where necessary)
              </li>
              <li>Any other data you voluntarily share with us</li>
            </ul>
            <p className="mt-2">
              We do not intentionally collect or process any personal data of
              children (&lt;18 years of age).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              4. Purpose of Processing
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>To respond to business inquiries and provide services</li>
              <li>For client onboarding and due diligence</li>
              <li>For identity verification and background validation</li>
              <li>
                To send service updates, security alerts, or regulatory
                notifications
              </li>
              <li>
                To improve user experience, system performance, and customer
                satisfaction
              </li>
              <li>
                To comply with legal obligations (e.g., tax, audit, regulatory)
              </li>
            </ul>
            <p className="mt-2">
              All processing is based on consent, legitimate interest, or legal
              obligation, as applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              5. Consent and Rights of the Data Principal
            </h2>
            <p className="mb-4">
              By interacting with our website or services, you consent to the
              collection and use of your personal data as outlined here.
            </p>
            <p className="mb-4">As a Data Principal, you have the right to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Access your personal data</li>
              <li>Request correction or erasure</li>
              <li>Withdraw consent at any time</li>
              <li>
                File a grievance related to misuse or breach of your personal
                data
              </li>
            </ul>
            <p>
              You may write to us at{" "}
              <a
                href="mailto:privacy@suffixcorp.com"
                className="text-blue-600 hover:underline"
              >
                privacy@suffixcorp.com
              </a>{" "}
              to exercise these rights. We will respond within DPDPA timelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary to fulfill its
              purpose or as required by law. Once no longer needed, data is
              securely deleted or anonymized per ISO 27001:2022 control A.8.3.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              7. Data Security Measures
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Encryption (at rest and in transit)</li>
              <li>Role-based access control</li>
              <li>Security incident management (ISO 27035)</li>
              <li>Endpoint protection and firewall controls</li>
              <li>Regular vulnerability assessments and patching</li>
            </ul>
            <p className="mt-2">
              All employees and contractors are bound by NDAs and receive
              periodic security training.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              8. Data Sharing and Transfer
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Authorized service providers under data processing agreements
              </li>
              <li>
                Government, regulatory, or law enforcement bodies when legally
                required
              </li>
              <li>Affiliates or partners fulfilling contractual obligations</li>
            </ul>
            <p className="mt-2">
              We do not sell your data. Cross-border transfers are safeguarded
              per applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              9. Use of Cookies and Tracking
            </h2>
            <p>
              We use cookies to enhance usability, analyze interactions, deliver
              relevant content, and measure engagement. You can manage cookie
              preferences via your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              10. Grievance Redressal Mechanism
            </h2>
            <p>
              We have appointed a Grievance Officer as per Section 13 of DPDPA:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Name:</strong> Bhaumik Mehta
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@suffixcorp.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@suffixcorp.com
                </a>
              </li>
              <li>
                <strong>Contact:</strong> 9376884752
              </li>
              <li>
                <strong>Address:</strong> Zion, Z1, Opp Baghban Party Plot,
                Hebatpur Road, Ahmedabad - 380059
              </li>
            </ul>
            <p className="mt-2">
              Grievances will be acknowledged within 24 hours and resolved
              within 7 working days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              11. Policy Review and Updates
            </h2>
            <p>
              This Privacy Policy is reviewed periodically to reflect changes in
              law, business practices, or technology. Please review this page
              regularly; updates will carry a new “Last Updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
            <address className="not-italic">
          Suffix Process Solutions Pvt. Ltd.
          <br />
          <div className="flex items-center my-1">
            <img 
              src={mailIcon} 
              alt="Email icon" 
              className="w-5 h-5 mr-2" 
            />
            Email:{" "}
            <a
              href="mailto:privacy@suffixcorp.com"
              className="text-blue-600 hover:underline ml-1"
            >
              privacy@suffixcorp.com
            </a>
          </div>
          <div className="flex items-center my-1">
            <img 
              src={domainIcon} 
              alt="Website icon" 
              className="w-5 h-5 mr-2" 
            />
            Website:{" "}
            <a
              href="https://www.suffixcorp.com"
              className="text-blue-600 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.suffixcorp.com
            </a>
          </div>
          <div className="flex items-start my-1">
            <img 
              src={locationIcon} 
              alt="Location icon" 
              className="w-5 h-5 mr-2 mt-1" 
            />
            Address: 801, Zion Z1, Opp Baghban Party Plot, Hebatpur Road, Ahmedabad - 380059
          </div>
        </address>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
