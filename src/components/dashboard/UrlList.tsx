import type { Url } from '../../types/url'; // Use type-only import
import { formatDate } from '../../utils/dateUtils';
import { toast } from 'react-hot-toast';

type UrlListProps = {
  urls: Url[];  // Type is now correctly imported
  loading: boolean;
  onDelete: (id: string) => void;
};

export default function UrlList({ urls, loading, onDelete }: UrlListProps) {
  const copyToClipboard = (text: string) => {
    if (!text || !/^https?:\/\//.test(text)) {
      toast.error('Invalid URL');
      return;
    }
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (urls.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">You haven't created any short URLs yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Your Short URLs</h2>
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Short URL</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original URL</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {urls.map((url) => (
              <tr key={url.id}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <span 
                      className="text-blue-600 hover:underline cursor-pointer" 
                      onClick={() => copyToClipboard(url.shortUrl)}
                      aria-label={`Copy short URL: ${url.shortUrl}`}
                    >
                      {url.shortUrl.replace(/^https?:\/\//, '')}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 max-w-xs truncate">
                  <a 
                    href={url.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                    title={url.originalUrl}
                  >
                    {url.originalUrl.length > 50 
                      ? `${url.originalUrl.substring(0, 50)}...` 
                      : url.originalUrl}
                  </a>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {url.clicks}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(url.createdAt)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onDelete(url.id)}
                    className="text-red-600 hover:text-red-900"
                    aria-label={`Delete URL: ${url.shortUrl}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
