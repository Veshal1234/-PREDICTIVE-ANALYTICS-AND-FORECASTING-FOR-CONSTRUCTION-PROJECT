import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';
import MobileSidebar from '../components/navigation/MobileSidebar';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <MobileSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Desktop sidebar */}
      <Sidebar />
      
      {/* Content area */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header onMenuButtonClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;