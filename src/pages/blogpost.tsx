
// src/components/InsightsHub.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import gst from "../assets/blogimages/GST.jpg";
import center from "../assets/blogimages/Center.jpg";
import kycimg from "../assets/blogimages/KYC.jpg";
// import bfsiimg from "../assets/blogimages/BFSI.jpg";
import dataseimg from "../assets/blogimages/DATA_SECURITY.jpg";
import docimg from "../assets/blogimages/DOC.jpg";
import hybridimg from "../assets/blogimages/HYBRID.jpg";

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
    category: 'GST Automation',
    title: 'How GST Reconciliation BOTs Are Revolutionizing Financial Compliance',
    image: gst ,
    link: '/posts/7',
    service: 'GST',
    type: 'Blog',
  },
  {
    id: 2,
    category: 'Process Centralization',
    title: 'Why Process Centralization is Key to Operational Efficiency',
    image: center ,
    link: '/posts/8',
    service: 'Docs',
    type: 'Blog',
  },
  {
    id: 3,
    category: 'Financial Compliance Automation / RegTech Solutions',
    title: 'Streamlining KYC Processes with Centralized Verification and Automation',
    image: kycimg,
    link: '/posts/9',
    service: 'CX',
    type: 'Blog',
  },
  {
    id: 4,
    category: 'Information Security / Compliance',
    title: 'The Importance of ISO 27001 Certification for Data Security',
    image: dataseimg ,
    link: '/posts/10',
    service: '',
    type: 'Blog',
  },
  {
    id: 5,
    category: 'Document Intelligence / Insurance Automation',
    title: 'The Future of Document Management in Insurance',
    image: docimg ,
    link: '/posts/11',
    service: '',
    type: 'Blog',
  },
  {
    id: 6,
    category: 'Human + Automation / Hybrid Workforce',
    title: 'How Hybrid Solutions Combine the Best of Humans and Automation',
    image: hybridimg,
    link: '/posts/12',
    service: 'CSR',
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
              placeholder="Search Suffix Insights"
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
                  <p className="text-teal-600 mt-2 inline-block">Read more →</p>
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

