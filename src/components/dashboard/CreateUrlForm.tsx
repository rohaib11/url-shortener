import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { QRCodeSVG } from 'qrcode.react';
import { LinkIcon } from '@heroicons/react/24/outline';

type CreateUrlFormProps = {
  onCreate: (newUrl: any) => void;
};

export default function CreateUrlForm({ onCreate }: CreateUrlFormProps) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [password, setPassword] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!originalUrl) {
      toast.error('Please enter a URL');
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Replace with actual API call
      const mockUrl = {
        id: Math.random().toString(36).substring(2, 9),
        shortUrl: customAlias
          ? `https://short.ly/${customAlias}`
          : `https://short.ly/${Math.random().toString(36).substring(2, 8)}`,
        originalUrl,
        clicks: 0,
        createdAt: new Date().toISOString(),
        expiresAt: expiryDate || null,
        password: password || null,
      };

      onCreate(mockUrl);
      setQrCode(mockUrl.shortUrl);
      toast.success('URL shortened successfully!');

      setOriginalUrl('');
      setCustomAlias('');
      setExpiryDate('');
      setPassword('');
    } catch (error) {
      toast.error('Failed to shorten URL');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Create New Short URL</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Destination URL
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              <LinkIcon className="h-4 w-4" />
            </span>
            <input
              type="url"
              id="originalUrl"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="https://example.com/very/long/url"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="customAlias" className="block text-sm font-medium text-gray-700 mb-1">
            Custom Short URL (optional)
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              short.ly/
            </span>
            <input
              type="text"
              id="customAlias"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value.replace(/\s+/g, '').toLowerCase())}
              className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="your-alias"
              pattern="[a-zA-Z0-9-]+"
              title="Only letters, numbers and hyphens are allowed"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-blue-600 hover:text-blue-500 focus:outline-none"
        >
          {showAdvanced ? 'Hide advanced options' : 'Show advanced options'}
        </button>

        {showAdvanced && (
          <div className="space-y-4 border-t pt-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Expiration Date (optional)
              </label>
              <input
                type="date"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password Protection (optional)
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Set a password for this link"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-sm text-blue-600 hover:text-blue-500"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating...' : 'Create Short URL'}
          </button>
        </div>
      </form>

      {qrCode && (
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-sm font-medium text-gray-900 mb-2">QR Code</h3>
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white rounded border">
              <QRCodeSVG value={qrCode} size={100} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Scan or click the QR code to visit your link directly</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(qrCode);
                  toast.success('QR code URL copied to clipboard!');
                }}
                className="mt-2 text-sm text-blue-600 hover:text-blue-500"
              >
                Copy QR Code URL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
