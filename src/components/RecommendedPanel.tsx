// src/components/RecommendedPanel.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Recommendation {
  id: number;
  image: string;
  title: string;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/980838288/photo/closeup-hands-of-freelancer-woman-working-using-digital-laptop-computer-and-drink-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=9OENsqupMaC3xMTvWnv_4iapu7pixYncHam0mLTbPFQ=',
    title: 'Preventing $26.6M in erroneous spend for a global manufacturer',
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/1213499152/photo/sample-online-news-website-on-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=RcppdAZmtGGkInl6M1l-blg00PFht3G-VD4A1IgRUKE=',
    title: 'Three critical insights for life sciences R&D',
  },
];

export const RecommendedPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open on mount
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-lg">Recommended</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1">
            {recommendations.map((rec) => (
              <div key={rec.id} className="p-4 border-b last:border-b-0">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-sm">{rec.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
