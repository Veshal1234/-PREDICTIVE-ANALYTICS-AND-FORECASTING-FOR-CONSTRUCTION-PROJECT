import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HardHat } from 'lucide-react';

const AuthLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <HardHat className="h-12 w-12 text-amber-500" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            ConstructAI
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Predictive Analytics for Construction Projects
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;