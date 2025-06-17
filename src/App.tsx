import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/common/PrivateRoute';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import BlogPage from './pages/BlogPage';  // Add BlogPage import
import AboutPage from './pages/AboutPage';  // Add AboutPage import
import ContactPage from './pages/ContactPage';  // Add ContactPage import
import PrivacyPage from './pages/PrivacyPage';  // Add PrivacyPage import
import TermsPage from './pages/TermsPage';  // Add TermsPage import
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/blog" element={<BlogPage />} /> {/* Blog route */}
            <Route path="/about" element={<AboutPage />} /> {/* About route */}
            <Route path="/contact" element={<ContactPage />} /> {/* Contact route */}
            <Route path="/privacy" element={<PrivacyPage />} /> {/* Privacy route */}
            <Route path="/terms" element={<TermsPage />} /> {/* Terms route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </AuthProvider>
  );
}

export default App;
