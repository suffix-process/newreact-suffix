// src/components/FeaturedInsights.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/blogimages/Automation.jpg'
// import img2 from "../assets/blogimages/GST.jpg";
import bfsiimg from "../assets/blogimages/BFSI.jpg";

interface Insight {
  id: number;
  title: string;
  image: string;
  // href: string;
}

const featured: Insight[] = [
  {
    id: 1,
    title: 'The Role of RPA in Reducing Loan Processing Times',
    image: bfsiimg ,
    // href: '/insights/ai-fraud',
  },
  {
    id: 2,
    title: 'Is your bank fast enough to catch fraud in real time? ',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQH0xX4jFTUV_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1733878060731?e=2147483647&v=beta&t=2fID8sQk5ylur-NMNTgVl4ZfQnY1DTzi3GR6slUzMF0',
    // href: '/insights/sustainable-transit',
  },
  {
    id: 3,
    title: 'How Intelligent Automation is Transforming the BFSI Sector',
    image: img1,
    // href: '/insights/snap-ebt',
  },
];

const FeaturedInsights: React.FC = () => {
  return (
    <section className="py-8 bg-white">
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
          <div className="flex flex-col gap-4 sm:gap-8 sm:col-span-1 my-4">
            {featured.slice(1).map((insight) => (
              <Link
                key={insight.id}
                to={`/posts/${insight.id}`}
                className="flex flex-col items-start rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow sm:flex-row sm:items-center sm:h-32"
              >
                {/* image: full width on mobile, fixed 32 on sm+ */}
                <div className="w-full sm:w-32 aspect-[4/3] sm:aspect-auto sm:h-full">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover sm:w-32"
                  />
                </div>

                {/* text */}
                <div className="flex-1 p-4 sm:p-0 sm:px-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                    {insight.title}
                  </h4>
                  <span className="text-teal-600 font-medium text-xs sm:text-sm mt-1 block">
                    Read the blog →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* CTA Banner */}
        <div className="rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-blue-500 p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0 md:max-w-lg">
              <h3 className="text-2xl font-semibold mb-2">Interested in joining Suffix?</h3>
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