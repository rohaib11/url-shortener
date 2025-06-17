import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { useAuth } from '../../contexts/AuthContext';

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuth();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex min-h-screen ${isSidebarOpen ? 'bg-gray-50' : 'bg-gray-100'}`} role="main" aria-label="Dashboard Layout">
      {/* Mobile Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="md:hidden p-4">
        Toggle Sidebar
      </button>

      {/* Dashboard Sidebar with active link highlighting */}
      <DashboardSidebar isOpen={isSidebarOpen} activeLink={location.pathname} userRole={user?.role} />
      
      <div className="flex-1" role="contentinfo">
        {children || <Outlet />}
      </div>
    </div>
  );
}
