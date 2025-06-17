import { NavLink } from 'react-router-dom';
import { LinkIcon, ChartBarIcon, Cog6ToothIcon, UserCircleIcon } from '@heroicons/react/24/outline';

// Define the prop types for the DashboardSidebar
interface DashboardSidebarProps {
  isOpen: boolean;
  activeLink: string;
  userRole: any; // You can replace 'any' with a more specific type if needed
}

const DashboardSidebar = ({ isOpen, activeLink, userRole }: DashboardSidebarProps) => {
  return (
    <div className={`w-64 bg-white shadow-sm border-r border-gray-200 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul className="space-y-1 px-2">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <LinkIcon className="h-5 w-5 mr-3" />
              My Links
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/analytics"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <ChartBarIcon className="h-5 w-5 mr-3" />
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <Cog6ToothIcon className="h-5 w-5 mr-3" />
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/account"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <UserCircleIcon className="h-5 w-5 mr-3" />
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
