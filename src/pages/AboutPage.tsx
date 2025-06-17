import { BuildingOffice2Icon, UsersIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Links shortened', value: '10M+' },
  { id: 2, name: 'Active users', value: '100K+' },
  { id: 3, name: 'Countries served', value: '190+' },
  { id: 4, name: 'Uptime', value: '99.9%' },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emma Davis',
    role: 'Head of Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Short.ly
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              We're on a mission to make sharing links simpler, smarter, and more secure for everyone.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <dt className="text-lg font-medium text-blue-100">{stat.name}</dt>
                  <dd className="mt-1 text-3xl font-extrabold text-white">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our story section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our story
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 2018, Short.ly began as a simple side project to solve our own frustrations with long,
                unwieldy URLs. What started as a basic URL shortener has grown into a comprehensive link management
                platform serving thousands of businesses and individuals worldwide.
              </p>
              <div className="mt-12 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BuildingOffice2Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Headquartered in San Francisco</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our team works remotely across 12 countries, with our main office in the heart of Silicon Valley.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <GlobeAltIcon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Global reach</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our infrastructure spans 5 continents, ensuring fast, reliable service wherever your audience is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">Our mission</h3>
                <p className="mt-2 text-base text-gray-500">
                  To empower individuals and businesses to share content more effectively through simple, powerful
                  link management tools that provide control, insight, and security.
                </p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <RocketLaunchIcon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      Launched our first product in 2018
                    </span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <UsersIcon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      Serving 100,000+ active users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our team</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                A diverse group of passionate individuals dedicated to building the best link management platform.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person) => (
                <div key={person.name} className="text-center">
                  <img
                    className="mx-auto h-32 w-32 rounded-full"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}