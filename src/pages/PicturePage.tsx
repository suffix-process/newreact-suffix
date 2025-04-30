// src/pages/PicturePage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/memo/image1.jpeg';
import image2 from '../assets/memo/image2.jpeg';
import image3 from '../assets/memo/image3.jpeg';
import image4 from '../assets/memo/image4.jpeg';
import image5 from '../assets/memo/image5.jpeg';
import image6 from '../assets/memo/image6.jpeg';
import image7 from '../assets/memo/image7.jpeg';
import image8 from '../assets/memo/image8.jpeg';
import image9 from '../assets/memo/image9.jpeg';
import image10 from '../assets/memo/image10.jpeg';
import image11 from '../assets/memo/image11.jpeg';
import image12 from '../assets/memo/image12.jpeg';
import image13 from '../assets/memo/image13.jpeg';
import image14 from '../assets/memo/image14.jpeg';
import image15 from '../assets/memo/image15.jpeg';
import image16 from '../assets/memo/image16.jpeg';
// import image17 from '../assets/memo/image17.jpeg';
import image18 from '../assets/memo/image18.jpeg';
import image19 from '../assets/memo/image19.jpeg';
import image21 from '../assets/memo/image21.jpeg';

const heroImages: string[] = [image1, image2, image3, image4];
const galleryImages: string[] = [
  image1, image2, image3, image4,
  image5, image6, image7, image8, image9,
  image10, image11, image12, image13,
  image14, image15, image16, image18,
  image19, image21,
];

const PicturePage: React.FC = () => {
  const [src, setSrc] = useState<string>(() =>
    heroImages[Math.floor(Math.random() * heroImages.length)]
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Rotate hero image every 5 seconds
  useEffect(() => {
    const changeHero = () => {
      setSrc((prev) => {
        let next = prev;
        if (heroImages.length > 1) {
          while (next === prev) {
            next = heroImages[Math.floor(Math.random() * heroImages.length)];
          }
        }
        return next;
      });
    };

    changeHero();
    const id = setInterval(changeHero, 5000);
    return () => clearInterval(id);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openImageModal = (img: string) => setSelectedImage(img);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
          Visual Gallery
        </h1>
        <p className="text-[#6D4C41] max-w-2xl">
          Explore beautiful images in our interactive gallery.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="w-full max-w-4xl rounded-3xl overflow-hidden backdrop-blur-sm bg-white/30 shadow-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={src}
          alt="Featured"
          className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Gallery */}
      <div className="w-full max-w-7xl mt-16">
        <motion.h2
          className="text-3xl font-semibold text-[#4E342E] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore the Gallery
        </motion.h2>

        {galleryImages.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[#6D4C41]">No images available yet.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            {galleryImages.map((url, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/30 border border-white/20 cursor-pointer"
                onClick={() => openImageModal(url)}
              >
                <div className="relative group">
                  <img
                    src={url}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white/90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        className="mt-16 text-center text-[#6D4C41]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>© {new Date().getFullYear()} Visual Gallery. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default PicturePage;
