// src/pages/CookiePolicy.tsx
// import React from 'react';
import React, { useEffect } from 'react';

const CookiePolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    
    return (
        <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
    <p className="text-gray-600 mb-2">
      <strong>Effective Date:</strong> [Insert Date]
    </p>
    <p className="text-gray-600 mb-8">
      <strong>Last Updated:</strong> [Insert Date]
    </p>

    <p className="mb-6">
      This Cookie Policy explains how <strong>Suffix Process Solutions Pvt. Ltd.</strong> (“Suffix,” “we,” “us,” or “our”) uses cookies and similar technologies when you visit our website.
    </p>
    <p className="mb-12">
      By continuing to use our website, you consent to our use of cookies as outlined below. You may control cookie preferences at any time via your browser settings.
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device when you visit a website. They allow the site to recognize your device and store certain information about your preferences or past actions.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">2. Types of Cookies We Use</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Type of Cookie</th>
              <th className="border p-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Essential Cookies</td>
              <td className="border p-2">
                Required for basic website functionality, including navigation and access to secure areas.
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Performance Cookies</td>
              <td className="border p-2">
                Help us analyze site usage and improve performance using aggregated, anonymized data.
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Functional Cookies</td>
              <td className="border p-2">
                Remember user choices (like language or region) to enhance your experience.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">3. Third-Party Cookies</h2>
      <p>
        We may allow trusted third-party partners (e.g., analytics or marketing platforms) to set cookies on your device to assist with performance tracking or content delivery. These providers are subject to their own privacy and cookie policies.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">4. Managing Cookie Preferences</h2>
      <p>
        You can control or disable cookies by adjusting your browser settings. Note that disabling certain cookies may affect the functionality or performance of the website.
      </p>
      <p className="mt-2">
        For guidance on managing cookies, refer to your browser’s help section or visit{' '}
        <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          www.allaboutcookies.org
        </a>.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">5. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy to reflect changes in our practices or legal requirements. Any changes will be posted on this page with a revised “Last Updated” date.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
      <p>
        For any queries regarding our use of cookies, please contact:{' '}
        <a href="mailto:privacy@suffixcorp.com" className="text-blue-600 hover:underline">
          privacy@suffixcorp.com
        </a>
      </p>
    </section>
  </div>
    )
};

export default CookiePolicy;
