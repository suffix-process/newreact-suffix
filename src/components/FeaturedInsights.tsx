// src/components/FeaturedInsights.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Insight {
  id: number;
  title: string;
  image: string;
  // href: string;
}

const featured: Insight[] = [
  {
    id: 1,
    title: 'The role of AI in detecting financial anomalies and fraud',
    image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRoZSUyMHJvbGUlMjBvZiUyMEFJJTIwaW4lMjBkZXRlY3RpbmclMjBmaW5hbmNpYWwlMjBhbm9tYWxpZXMlMjBhbmQlMjBmcmF1ZHxlbnwwfHwwfHx8MA%3D%3D',
    // href: '/insights/ai-fraud',
  },
  {
    id: 2,
    title: 'Driving Toward Sustainable Cities: More sustainable transit starts at the fare',
    image: 'https://images.unsplash.com/photo-1719381565370-86f9d7a9fc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRoZSUyMHJvbGUlMjBvZiUyMEFJJTIwaW4lMjBkZXRlY3RpbmclMjBmaW5hbmNpYWwlMjBhbm9tYWxpZXMlMjBhbmQlMjBmcmF1ZHxlbnwwfHwwfHx8MA%3D%3D',
    // href: '/insights/sustainable-transit',
  },
  {
    id: 3,
    title: 'Two states leading the way in SNAP EBT modernization, fraud prevention',
    image: 'https://images.unsplash.com/photo-1670071479287-a19c0581bda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHdvJTIwc3RhdGVzJTIwbGVhZGluZyUyMHRoZSUyMHdheSUyMGluJTIwU05BUCUyMEVCVCUyMG1vZGVybml6YXRpb24lMkMlMjBmcmF1ZCUyMHByZXZlbnRpb258ZW58MHx8MHx8fDA%3D',
    // href: '/insights/snap-ebt',
  },
];

const FeaturedInsights: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-[#006B81] text-5xl font-light mb-12">Featured insights</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Large hero card */}
          <Link
            // to={featured[0].href}
            to={`/posts/${featured[0].id}`}  
            className="relative group block lg:col-span-2 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={featured[0].image}
              alt={featured[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-2xl font-semibold mb-2">{featured[0].title}</h3>
              <span className="text-teal-400 font-medium">Read the blog →</span>
            </div>
          </Link>

          {/* Two smaller cards */}
          <div className="flex flex-col gap-8">
            {featured.slice(1).map((insight) => (
              <Link
                key={insight.id}
                // to={insight.href}
                to={`/posts/${insight.id}`}
                className="flex items-center space-x-4 h-32 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-32 h-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{insight.title}</h4>
                  <span className="text-teal-600 font-medium">Read the blog →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-blue-500 p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0 md:max-w-lg">
              <h3 className="text-2xl font-semibold mb-2">Interested in joining Conduent?</h3>
              <p>Browse our current openings.</p>
            </div>
            <Link
              to="/careers"
              className="inline-block bg-white text-teal-600 font-medium py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
            >
              Browse careers →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
