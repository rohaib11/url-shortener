import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('user');  // Clear any stored user data
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Short.ly
          </Link>
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="hidden md:inline-block text-gray-600 hover:text-blue-600"
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="hidden md:inline-block text-gray-600">
                Hi, {user?.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign up
              </Link>
            </>
          )}

          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 hover:text-blue-600">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-0 right-0 w-full py-4 px-6">
          <Link to="/login" className="block text-gray-600 py-2">
            Sign in
          </Link>
          <Link to="/signup" className="block text-white bg-blue-600 py-2 rounded-md">
            Sign up
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="block text-gray-600 py-2">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block text-gray-600 py-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
