import React from 'react';
import { Menu, Bell, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onMenuButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuButtonClick }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 shadow">
      <button
        type="button"
        className="px-4 text-gray-500 dark:text-gray-200 md:hidden"
        onClick={onMenuButtonClick}
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <div className="flex-1 flex justify-between px-4">
        <div className="flex-1 flex items-center">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">ConstructAI</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white"
          >
            {theme === 'dark' ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </button>
          
          {/* Notifications */}
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white">
            <Bell className="h-6 w-6" />
          </button>
          
          {/* Profile dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                {user?.name || 'User'}
              </span>
              <button
                type="button"
                className="max-w-xs rounded-full flex items-center text-sm focus:outline-none"
                aria-expanded="false"
              >
                <img
                  className="h-8 w-8 rounded-full bg-gray-300"
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=random`}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;