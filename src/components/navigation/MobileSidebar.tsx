import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { X, HardHat, LayoutDashboard, FolderKanban, BarChart4, TrendingUp, Settings } from 'lucide-react';
import Chatbot from '../../pages/ChatBot';

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, setIsOpen }) => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { name: 'Analytics', href: '/analytics', icon: BarChart4 },
    { name: 'Forecasting', href: '/forecasting', icon: TrendingUp },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'ChatBot' , href: '/ChatBot', icon: Chatbot},
  ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 md:hidden"
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-blue-900 dark:bg-gray-900">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <HardHat className="h-8 w-8 text-amber-500" />
                <span className="ml-2 text-xl font-bold text-white">ConstructAI</span>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? 'group flex items-center px-2 py-2 text-base font-medium rounded-md bg-blue-800 dark:bg-gray-800 text-white'
                        : 'group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-100 dark:text-gray-300 hover:bg-blue-800 dark:hover:bg-gray-700 hover:text-white'
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-4 h-6 w-6 text-blue-300 dark:text-gray-400" />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;