import { useState, useEffect } from 'react';

export default function StatsSection() {
  const stats = [
    { id: 1, name: 'Links shortened', value: '10M+' },
    { id: 2, name: 'Clicks tracked', value: '500M+' },
    { id: 3, name: 'Active users', value: '100K+' },
  ];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data
    try {
      setTimeout(() => setLoading(false), 1000);
    } catch (err) {
      setError('Failed to load stats');
    }
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by creators worldwide
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Our platform helps individuals and businesses create better sharing experiences.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white py-6 px-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
