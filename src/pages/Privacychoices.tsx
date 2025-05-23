// import React from 'react';
import React, { useEffect } from 'react';


const PrivacyChoices: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
      
    return (
        <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-4">Privacy Choices</h1>
    <p className="mb-8">
      <strong>Suffix Process Solutions Pvt. Ltd.</strong> respects your right to privacy and gives you meaningful choices regarding the collection and use of your personal data.
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">1. Your Rights Under DPDPA 2023</h2>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li><strong>Access:</strong> Know what personal data we hold about you</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
        <li><strong>Erasure:</strong> Ask for deletion when data is no longer needed or consent is withdrawn</li>
        <li><strong>Consent Withdrawal:</strong> Revoke your consent at any time</li>
        <li><strong>Grievance Redressal:</strong> File a complaint if you believe your data is misused</li>
      </ul>
      <p className="mt-4">
        You may exercise these rights by contacting our Grievance Officer at:{' '}
        <a href="mailto:privacy@suffixcorp.com" className="text-blue-600 hover:underline">
          privacy@suffixcorp.com
        </a>
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">2. Email &amp; Marketing Preferences</h2>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>Opt out of marketing/promotional emails by clicking the unsubscribe link at the bottom of any email</li>
        <li>Opt out of non-essential communications by writing to us directly</li>
      </ul>
      <p className="mt-4">
        <em>Note:</em> Even if you opt out of marketing emails, you may still receive important service-related communications.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">3. Cookie Preferences</h2>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>Accept or reject cookies via your browser settings</li>
        <li>Use “Do Not Track” features if supported by your browser</li>
        <li>Use consent banners (where implemented) to select preferences at the time of visit</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">4. Updates to Your Choices</h2>
      <p>
        We may periodically provide updated methods for managing privacy preferences. We encourage you to review this section regularly for updates.
      </p>
    </section>
  </div>
    )
};

export default PrivacyChoices;
