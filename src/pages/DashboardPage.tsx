import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import UrlList from '../components/dashboard/UrlList';
import CreateUrlForm from '../components/dashboard/CreateUrlForm';
import AnalyticsSummary from '../components/dashboard/AnalyticsSummary';
import type { Url } from '../types/url';  // Correct type-only import for Url
import { toast } from 'react-hot-toast';

export default function DashboardPage() {
  const { user } = useAuth();
  const [urls, setUrls] = useState<Url[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        // Mock data for now
        const mockUrls: Url[] = [
          {
            id: '1',
            shortUrl: 'https://short.ly/abc123',
            originalUrl: 'https://example.com/very/long/url',
            clicks: 42,
            createdAt: new Date(), // createdAt is now a Date object
            userId: user?.id || '',
          },
          {
            id: '2',
            shortUrl: 'https://short.ly/xyz789',
            originalUrl: 'https://another-example.com/another/long/url',
            clicks: 15,
            createdAt: new Date(Date.now() - 86400000), // 1 day ago as a Date object
            userId: user?.id || '',
          },
        ];
        setUrls(mockUrls);
      } catch (error) {
        console.error('Failed to fetch URLs:', error);
        toast.error('Failed to fetch URLs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUrls();
    }
  }, [user]);

  const handleCreateUrl = (newUrl: Url) => {
    setUrls([newUrl, ...urls]);
  };

  const handleDeleteUrl = (id: string) => {
    setUrls(urls.filter(url => url.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CreateUrlForm onCreate={handleCreateUrl} />
            {loading ? (
              <div>Loading...</div> // Add a spinner if needed
            ) : (
              <UrlList urls={urls} loading={loading} onDelete={handleDeleteUrl} />
            )}
          </div>

          <div className="lg:col-span-1">
            <AnalyticsSummary urls={urls} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
