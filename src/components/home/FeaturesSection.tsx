import {
  ChartBarIcon,
  LockClosedIcon,
  QrCodeIcon,
  ArrowsPointingOutIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Detailed Analytics',
    description: 'Track clicks, geographic locations, and referral sources for your shortened links.',
    icon: ChartBarIcon,
  },
  {
    name: 'Password Protection',
    description: 'Add an extra layer of security by password-protecting your shortened links.',
    icon: LockClosedIcon,
  },
  {
    name: 'QR Code Generation',
    description: 'Generate QR codes for your links to make them easily scannable.',
    icon: QrCodeIcon,
  },
  {
    name: 'Custom Short URLs',
    description: 'Create memorable short URLs with your own custom aliases.',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: 'Link Expiration',
    description: 'Set expiration dates for your links to automatically disable them after a certain time.',
    icon: ClockIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to shorten and track
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our URL shortener provides powerful features to help you create, manage, and analyze your links.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:bg-blue-50">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 text-center">
          <Link
            to="/signup"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Try it now
          </Link>
        </div>
      </div>
    </section>
  );
}
