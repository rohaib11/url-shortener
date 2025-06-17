import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import UrlShortenerForm from '../components/home/UrlShortenerForm';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/home/StatsSection';
import CtaSection from '../components/home/CtaSection';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const handleShortenSuccess = (url: string) => {
    setShortUrl(url);
  };

  return (
    <div className="space-y-16">
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Shorten, Share and Track Your Links
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern URL shortener with detailed analytics, custom domains, and more.
          </p>
          
          <UrlShortenerForm onSuccess={handleShortenSuccess} />
          
          {shortUrl && (
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 mb-2">Your shortened URL:</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="px-4 py-2 border rounded-l-lg w-full max-w-md"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shortUrl);
                    alert('Copied to clipboard!');
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                >
                  Copy
                </button>
              </div>
              <div className="mt-4">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Test your link
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <FeaturesSection />
      <StatsSection />
      {!isAuthenticated && <CtaSection />}
    </div>
  );
}