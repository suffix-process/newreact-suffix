// src/components/NewsInsightsGrid.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Insight {
  id: number;
  title: string;
  image: string;
  // url: string;
}

const insights: Insight[] = [
  {
    id: 4,
    title: 'Five big benefits to automating and digitizing your mailroom',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',  // update to your actual paths
    // url: '/insights/mailroom',
  },
  {
    id: 5,
    title: 'Preventing $26.6M in erroneous spend for a global manufacturer',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
    // url: '/insights/finance-analytics',
  },
  {
    id: 6,
    title: 'Three critical strategies for a smooth Medicaid pharmacy deployment',
    image: 'https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=fhaShDVgDzc-bnqn06OytL86ddRdTXd7Ke3VDPuZAws=',
    // url: '/insights/medicaid-pharmacy',
  },
];

const NewsInsightsGrid: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
      
      {/* Left column */}
      <div className="text-left">
        <h2 className="text-3xl font-light text-gray-900 mb-3">
          Additional news and insights:
        </h2>
        <div className="w-16 h-0.5 bg-gray-200 mb-6" />
        <Link
          to="/blogpost"
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium px-6 py-2 rounded-full shadow hover:opacity-90 transition"
        >
          View all <ChevronRight className="ml-2" size={16} />
        </Link>
      </div>

      {/* Right column: grid of cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <Link
            key={insight.id}
            // to={insight.url}
            to={`/posts/${insight.id}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {insight.title}
              </h3>
              <span className="text-teal-600 font-medium inline-flex items-center">
                Learn more <ChevronRight className="ml-1" size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NewsInsightsGrid;
