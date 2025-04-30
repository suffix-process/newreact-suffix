
// src/components/InsightsHub.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface Post {
  id: number;
  category: string;
  title: string;
  image: string;
  link: string; // now route: `/posts/${id}`
  service: string;
  type: string;
}

const samplePosts: Post[] = [
  {
    id: 1,
    category: 'Corporate Social Responsibility',
    title: 'From progress to purpose: Celebrating Earth Day 2025',
    image: 'https://via.placeholder.com/400x240?text=Earth+Day+2025',
    link: '/posts/1',
    service: 'CSR',
    type: 'Blog',
  },
  {
    id: 2,
    category: 'Automated Document Solutions',
    title: 'Paperless, painless ... and perfect?',
    image: 'https://via.placeholder.com/400x240?text=Document+Solutions',
    link: '/posts/2',
    service: 'Docs',
    type: 'Case Study',
  },
  {
    id: 3,
    category: 'CX Transformation',
    title: 'What is Customer Experience (CX) Transformation?',
    image: 'https://via.placeholder.com/400x240?text=CX+Transformation',
    link: '/posts/3',
    service: 'CX',
    type: 'Blog',
  },
];

const serviceOptions = ['All', 'CSR', 'Docs', 'CX'];
const typeOptions = ['All', 'Blog', 'Case Study'];

const InsightsHub: React.FC = () => {
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return samplePosts.filter((p) => {
      const matchesService = serviceFilter === 'All' || p.service === serviceFilter;
      const matchesType = typeFilter === 'All' || p.type === typeFilter;
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesService && matchesType && matchesSearch;
    });
  }, [serviceFilter, typeFilter, searchTerm]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-2">Conduent Insights Hub</h1>
        <p className="text-gray-600 mb-6">Blog Posts</p>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setServiceFilter('All')} className={`${serviceFilter === 'All' ? 'text-black border-b-2 border-black' : 'text-gray-600'} pb-1`}>All</button>
            {serviceOptions.slice(1).map((opt) => (
              <button key={opt} onClick={() => setServiceFilter(opt)} className={`${serviceFilter === opt ? 'text-black border-b-2 border-black' : 'text-gray-600'} pb-1`}>{opt}</button>
            ))}
            <div className="border-l h-4" />
            <button onClick={() => setTypeFilter('All')} className={`${typeFilter === 'All' ? 'text-black border-b-2 border-black' : 'text-gray-600'} pb-1`}>All</button>
            {typeOptions.slice(1).map((opt) => (
              <button key={opt} onClick={() => setTypeFilter(opt)} className={`${typeFilter === opt ? 'text-black border-b-2 border-black' : 'text-gray-600'} pb-1`}>{opt}</button>
            ))}
          </div>

          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search Conduent Insights"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={post.link} className="block">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{post.category}</p>
                  <h3 className="mt-1 text-lg font-medium text-gray-800">{post.title}</h3>
                  <p className="text-teal-600 mt-2 inline-block">Learn more →</p>
                </div>
              </div>
            </Link>
          ))}
          {filteredPosts.length === 0 && <p className="text-gray-500 col-span-full">No posts found.</p>}
        </div>
      </div>
    </section>
  );
};

export default InsightsHub;


// Additionally, create a PostDetail component in src/pages/PostDetail.tsx

