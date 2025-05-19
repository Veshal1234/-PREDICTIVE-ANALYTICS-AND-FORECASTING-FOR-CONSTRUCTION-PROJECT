import React from 'react';
import { NavLink } from 'react-router-dom';
import { BotIcon,HardHat, LayoutDashboard, FolderKanban, BarChart4, TrendingUp, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Chatbot from '../../pages/ChatBot';



const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { name: 'Analytics', href: '/analytics', icon: BarChart4 },
    { name: 'Forecasting', href: '/forecasting', icon: TrendingUp },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'ChatBot', href: '/ChatBot', icon: Chatbot},
  ];

  <li>
  <NavLink to="/chatbot" className="sidebar-link">
    <BotIcon className="w-5 h-5" />
    <span>Chatbot</span>
  </NavLink>
</li>

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-blue-900 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <HardHat className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-white">ConstructAI</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-blue-800 dark:bg-gray-800 text-white'
                      : 'group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-100 dark:text-gray-300 hover:bg-blue-800 dark:hover:bg-gray-800 hover:text-white'
                  }
                >
                  <item.icon className="mr-3 h-6 w-6 text-blue-300 dark:text-gray-400" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-blue-800 dark:border-gray-700 p-4">
            <button
              onClick={logout}
              className="flex-shrink-0 w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-100 dark:text-gray-300 hover:bg-blue-800 dark:hover:bg-gray-800 hover:text-white"
            >
              <LogOut className="mr-3 h-6 w-6 text-blue-300 dark:text-gray-400" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;