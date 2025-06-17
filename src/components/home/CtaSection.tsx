import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-12 bg-blue-600 animate__fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-blue-100 sm:text-xl">
              Sign up today and start creating powerful short links with detailed analytics.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Create a free account and start shortening URLs"
            >
              Create free account
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
