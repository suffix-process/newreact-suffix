// src/pages/PostDetail.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Printer } from 'lucide-react';
import { RecommendedPanel } from '../components/RecommendedPanel';

interface PostData {
    id: number;
    category: string;
    title: string;
    content: string;
    image: string;
    date: string;
}

// Sample post data; replace with API fetch as needed
const samplePosts: PostData[] = [
    {
        id: 1,
        category: 'Corporate Social Responsibility',
        title: 'From progress to purpose: Celebrating Earth Day 2025',
        content: 'Full article content for Earth Day...',
        image: 'https://via.placeholder.com/800x400?text=Earth+Day+2025',
        date: 'April 22, 2025',
    },
    {
        id: 2,
        category: 'Automated Document Solutions',
        title: 'Paperless, painless ... and perfect?',
        content: 'Full case study content that covers the benefits and challenges of document automation...',
        image: 'https://via.placeholder.com/800x400?text=Document+Solutions',
        date: 'April 11, 2025',
    },
    {
        id: 3,
        category: 'CX Transformation',
        title: 'What is Customer Experience (CX) Transformation?',
        content: 'In-depth blog content on CX Transformation...',
        image: 'https://via.placeholder.com/800x400?text=CX+Transformation',
        date: 'May 1, 2025',
    },
];

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const postId = Number(id);
    const post = samplePosts.find((p) => p.id === postId);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-semibold">Post not found</h2>
                <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 hover:underline">
                    ← Back
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* This will slide in from the right */}
            <RecommendedPanel />

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:underline">Home</Link> {'>'} <Link to="/" className="hover:underline">Blog Posts</Link>
                    </nav>

                    {/* Header Section */}
                    <div className="md:flex md:items-center md:justify-between bg-white p-6 rounded-lg shadow mb-8">
                        <div className="md:w-1/2">
                            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                            <p className="text-gray-600 mb-1">{post.category}</p>
                            <p className="text-gray-600">{post.date}</p>
                            <div className="flex space-x-4 mt-4 text-gray-500">
                                <button aria-label="Share on Facebook" className="hover:text-gray-800"><Facebook size={20} /></button>
                                <button aria-label="Share on Twitter" className="hover:text-gray-800"><Twitter size={20} /></button>
                                <button aria-label="Share on LinkedIn" className="hover:text-gray-800"><Linkedin size={20} /></button>
                                <button aria-label="Email this post" className="hover:text-gray-800"><Mail size={20} /></button>
                                <button aria-label="Print this post" className="hover:text-gray-800"><Printer size={20} /></button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg object-cover" />
                        </div>
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow">
                        {post.content.split('\n').map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;