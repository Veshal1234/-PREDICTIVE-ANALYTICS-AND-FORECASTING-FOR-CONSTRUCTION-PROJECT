import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="flex justify-center">
            <HardHat className="h-20 w-20 text-amber-500" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">404 - Page Not Found</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or you don't have access to it.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-gray-500 dark:text-gray-400">
            It looks like we're still constructing this part of the site.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;