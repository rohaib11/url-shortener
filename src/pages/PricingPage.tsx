import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for personal use and getting started',
    features: [
      'Up to 100 links per month',
      'Basic analytics',
      'Custom short URLs',
      'Link expiration',
      'QR code generation',
      'Community support',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'For power users and small businesses',
    features: [
      'Up to 1,000 links per month',
      'Advanced analytics',
      'Password protection',
      'Device targeting',
      'Geo targeting',
      'Priority support',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited links',
      'White-label solutions',
      'API access',
      'Dedicated account manager',
      'Custom domains',
      '24/7 support',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your needs. Start with our free plan and upgrade anytime.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 bg-white border rounded-lg shadow-sm ${
                tier.featured ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 py-1.5 px-4 bg-blue-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  {tier.price === '$0' ? 'Free' : tier.price}
                </span>
                {tier.price !== 'Custom' && tier.price !== '$0' && (
                  <span className="ml-1 text-xl font-semibold">/month</span>
                )}
              </p>
              <p className="mt-4 text-gray-500">{tier.description}</p>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={tier.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`block w-full py-3 px-6 text-center rounded-md border ${
                    tier.featured
                      ? 'bg-blue-600 text-white border-transparent hover:bg-blue-700'
                      : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
                  } font-medium`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-lg font-medium text-gray-900">Frequently asked questions</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2">
            {[
              {
                question: 'Can I change plans later?',
                answer:
                  'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major credit cards including Visa, Mastercard, American Express, and PayPal.',
              },
              {
                question: 'Is there a free trial?',
                answer:
                  'Yes! All paid plans come with a 14-day free trial. No credit card required.',
              },
              {
                question: 'How do I cancel my subscription?',
                answer:
                  'You can cancel anytime from your account settings. No hidden fees or penalties.',
              },
            ].map((faq) => (
              <div key={faq.question}>
                <h4 className="text-sm font-medium text-gray-900">{faq.question}</h4>
                <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}