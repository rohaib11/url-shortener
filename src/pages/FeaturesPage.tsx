import {
  ChartBarIcon,
  LockClosedIcon,
  QrCodeIcon,
  LinkIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Advanced Analytics',
    description:
      'Track clicks, geographic locations, referral sources, and devices with detailed analytics.',
    icon: ChartBarIcon,
  },
  {
    name: 'Password Protection',
    description: 'Secure your links with password protection for private sharing.',
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
    icon: LinkIcon,
  },
  {
    name: 'Link Expiration',
    description: 'Set expiration dates for your links to automatically disable them.',
    icon: ClockIcon,
  },
  {
    name: 'Device Targeting',
    description: 'Redirect users to different URLs based on their device type.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Geo Targeting',
    description: 'Redirect users to different URLs based on their geographic location.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Link Security',
    description: 'Protect against spam and malicious links with our security filters.',
    icon: ShieldCheckIcon,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Everything you need to shorten and track
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our platform provides powerful features to help you create, manage, and analyze your
            links.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-blue-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Start shortening your links and accessing advanced features today.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}