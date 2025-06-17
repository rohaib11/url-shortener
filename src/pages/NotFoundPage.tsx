import { Link } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'; // Correct icon name in v2

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Use ExclamationCircleIcon from Heroicons v2 */}
        <ExclamationCircleIcon className="mx-auto h-24 w-24 text-gray-500" />
        
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-medium text-gray-600 mt-4">
          Page not found
        </p>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Go back home
          </Link>
        </div>

        {/* Optional: Add a "Need Help?" link */}
        <div className="mt-6">
          <Link
            to="/help"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300"
          >
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
}
