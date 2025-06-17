import { ChartBarIcon, GlobeAltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

type AnalyticsSummaryProps = {
  urls: any[];
};

export default function AnalyticsSummary({ urls }: AnalyticsSummaryProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching or processing data
    try {
      setLoading(false);
    } catch (e) {
      setError('Failed to load analytics data');
    }
  }, [urls]);

  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);

  const topCountries = [
    { name: 'United States', value: 45 },
    { name: 'India', value: 25 },
    { name: 'Germany', value: 15 },
    { name: 'Others', value: 15 },
  ];

  const devices = [
    { name: 'Mobile', value: 60 },
    { name: 'Desktop', value: 35 },
    { name: 'Tablet', value: 5 },
  ];

  if (loading) {
    return <div>Loading analytics...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Analytics Summary</h2>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Clicks</h3>
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalClicks}</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Top Countries</h3>
            <GlobeAltIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-2">
            {topCountries.map((country) => (
              <div key={country.name} className="flex items-center">
                <div className="w-24 text-sm text-gray-500 sm:w-16">{country.name}</div>
                <div className="flex-1">
                  <div className="h-4 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${country.value}%` }}
                    />
                  </div>
                </div>
                <div className="w-8 text-right text-sm font-medium text-gray-900" title={`${country.value}%`}>
                  {country.value}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Devices</h3>
            <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-2">
            {devices.map((device) => (
              <div key={device.name} className="flex items-center">
                <div className="w-24 text-sm text-gray-500 sm:w-16">{device.name}</div>
                <div className="flex-1">
                  <div className="h-4 bg-green-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600"
                      style={{ width: `${device.value}%` }}
                    />
                  </div>
                </div>
                <div className="w-8 text-right text-sm font-medium text-gray-900" title={`${device.value}%`}>
                  {device.value}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
