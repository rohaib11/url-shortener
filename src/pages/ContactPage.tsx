import { AtSymbolIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Office</h3>
            </div>
            <div className="mt-4 text-base text-gray-500">
              <p>123 Short Street</p>
              <p className="mt-1">San Francisco, CA 94103</p>
              <p className="mt-4">
                <span className="font-medium text-gray-900">Hours:</span> Monday-Friday, 9am-5pm PST
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center">
              <AtSymbolIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Email</h3>
            </div>
            <div className="mt-4 text-base text-gray-500">
              <p>General inquiries: hello@short.ly</p>
              <p className="mt-1">Support: support@short.ly</p>
              <p className="mt-1">Sales: sales@short.ly</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Phone</h3>
            </div>
            <div className="mt-4 text-base text-gray-500">
              <p>US: +1 (555) 123-4567</p>
              <p className="mt-1">UK: +44 20 1234 5678</p>
              <p className="mt-4">
                <span className="font-medium text-gray-900">Support hours:</span> 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
          <form className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>General inquiry</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}