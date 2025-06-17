export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-12 prose prose-blue prose-lg text-gray-500 mx-auto">
          <h2>1. Introduction</h2>
          <p>
            Short.ly ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address,
              and demographic information that you voluntarily give to us when you register with the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site,
              such as your IP address, browser type, operating system, access times, and pages viewed.
            </li>
            <li>
              <strong>Link Data:</strong> Information about the links you create, including original URLs, shortened
              URLs, click statistics, and geographic data.
            </li>
          </ul>

          <h2>3. Use of Your Information</h2>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service and support</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations, including:
          </p>
          <ul>
            <li>
              <strong>Business Transfers:</strong> If we undergo a merger, acquisition, or asset sale.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by
              public authorities.
            </li>
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party vendors who perform
              services for us.
            </li>
          </ul>

          <h2>5. Security of Your Information</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal
            information. However, no method of transmission over the Internet or method of electronic storage is
            100% secure.
          </p>

          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            privacy@short.ly
          </p>
        </div>
      </div>
    </div>
  );
}