export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-12 prose prose-blue prose-lg text-gray-500 mx-auto">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Short.ly website and services ("Service"), you agree to be bound by these Terms
            of Service ("Terms"). If you do not agree to all the terms and conditions, you may not access or use the
            Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Short.ly provides a URL shortening service that allows users to create shortened links and track their
            performance. The Service may also include additional features as described on our website.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>As a user of the Service, you agree to:</p>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Not use the Service for any illegal or unauthorized purpose</li>
            <li>Not create links to content that violates our Acceptable Use Policy</li>
            <li>Be responsible for all activity that occurs under your account</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You may not use the Service to:</p>
          <ul>
            <li>Create links to illegal content</li>
            <li>Distribute malware or engage in phishing</li>
            <li>Violate intellectual property rights</li>
            <li>Engage in spamming or other abusive practices</li>
            <li>Interfere with or disrupt the Service</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by Short.ly and are protected
            by international copyright, trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>

          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason,
            including if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall Short.ly, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of
            the Service.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting
            the new Terms on this page and updating the "Last updated" date.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of California,
            without regard to its conflict of law provisions.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            legal@short.ly
          </p>
        </div>
      </div>
    </div>
  );
}