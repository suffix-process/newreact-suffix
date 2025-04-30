
// src/components/InsightsHub.tsx
import React, { useState, useMemo, useEffect } from 'react';
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
    image: 'https://images.unsplash.com/photo-1585867701670-d0209b593584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Nlc3NpbmclMjB0byUyMHBhcnBvcyUyMGJsb2d8ZW58MHx8MHx8fDA%3D',
    link: '/posts/7',
    service: 'CSR',
    type: 'Blog',
  },
  {
    id: 2,
    category: 'Automated Document Solutions',
    title: 'Paperless, painless ... and perfect?',
    image: 'https://media.istockphoto.com/id/625737252/photo/when-the-impossible-became-possible.webp?a=1&b=1&s=612x612&w=0&k=20&c=I2OoKw6qnFWe8SM0SZAjGX2_jPzJxvK_V-94n___lB0=',
    link: '/posts/8',
    service: 'Docs',
    type: 'Case Study',
  },
  {
    id: 3,
    category: 'CX Transformation',
    title: 'What is Customer Experience (CX) Transformation?',
    image: 'https://images.unsplash.com/photo-1586252997234-c97d95b88ee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFdoYXQlMjBpcyUyMEN1c3RvbWVyJTIwRXhwZXJpZW5jZSUyMChDWCklMjBUcmFuc2Zvcm1hdGlvbiUzRnxlbnwwfHwwfHx8MA%3D%3D',
    link: '/posts/9',
    service: 'CX',
    type: 'Blog',
  },
];

// const serviceOptions = ['All', 'CSR', 'Docs', 'CX'];
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

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-2">Suffix Insights Hub</h1>
        <p className="text-gray-600 mb-6">Blog Posts</p>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* <button onClick={() => setServiceFilter('All')} className={`${serviceFilter === 'All' ? 'text-black border-b-2 border-black' : 'text-gray-600'} pb-1`}>All</button> */}
            {/* {serviceOptions.slice(1).map((opt) => (
              <button key={opt} onClick={() => setServiceFilter(opt)} className={`${serviceFilter === opt ? 'text-black border-b-2 border-black' : 'text-gray-600'} pb-1`}>{opt}</button>
            ))} */}
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

