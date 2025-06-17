import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';

type UrlShortenerFormProps = {
  onSuccess: (shortUrl: string) => void;
};

export default function UrlShortenerForm({ onSuccess }: UrlShortenerFormProps) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const isValidUrl = (url: string) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!originalUrl) {
      toast.error('Please enter a URL');
      return;
    }

    if (!isValidUrl(originalUrl)) {
      toast.error('Please enter a valid URL');
      return;
    }

    try {
      setIsLoading(true);
      
      if (!originalUrl.match(/^https?:\/\//)) {
        setOriginalUrl(`https://${originalUrl}`);
      }

      // TODO: Replace with actual API call
      // const response = await urlService.shortenUrl(originalUrl, customAlias);
      
      // Mock response
      const mockShortUrl = customAlias 
        ? `https://short.ly/${customAlias}`
        : `https://short.ly/${Math.random().toString(36).substring(2, 8)}`;
      
      onSuccess(mockShortUrl);
      toast.success('URL shortened successfully!');

      if (!isAuthenticated) {
        setOriginalUrl('');
        setCustomAlias('');
      }
    } catch (error) {
      toast.error('Failed to shorten URL');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Paste your long URL here"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Enter your long URL"
          />
        </div>
        
        {isAuthenticated && (
          <div className="w-full md:w-48">
            <input
              type="text"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              placeholder="Custom alias (optional)"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Enter a custom alias for your URL"
            />
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-blue-500"></div>
          ) : (
            'Shorten URL'
          )}
        </button>
      </div>
      
      {!isAuthenticated && (
        <p className="text-sm text-gray-500">
          <span className="font-medium">Note:</span> Guest users' links won't be saved. 
          <a href="/signup" className="text-blue-600 hover:underline ml-1">
            Sign up to track your links.
          </a>
        </p>
      )}
    </form>
  );
}
