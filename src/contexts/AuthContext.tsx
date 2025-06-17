import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react'; // Correct type-only import for ReactNode
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

type User = {
  id: string;
  name: string;
  email: string;
  role: string; // Added role property here
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) { // ReactNode is now correctly imported
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      // const response = await authService.login(email, password);
      const mockUser = { id: '1', name: 'Test User', email, role: 'user' }; // Added role to mockUser
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      // TODO: Replace with actual API call
      // const response = await authService.signup(email, password, name);
      const mockUser = { id: '1', name, email, role: 'user' }; // Added role to mockUser
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Registration failed');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully!');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        signup,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
