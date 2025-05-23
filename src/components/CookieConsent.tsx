// // src/components/CookieConsent.tsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const COOKIE_NAME = 'suffi xcorp';

// const CookieConsent: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const hasConsent = document.cookie
//       .split(';')
//       .some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));

//     if (!hasConsent) {
//       const timer = setTimeout(() => setVisible(true), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const setConsent = (value: 'allow' | 'deny') => {
//     const expires = new Date();
//     expires.setFullYear(expires.getFullYear() + 1);
//     document.cookie = `${COOKIE_NAME}=${value};expires=${expires.toUTCString()};path=/`;
//     setVisible(false);
//   };

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ type: 'spring', damping: 25 }}
//           className="fixed bottom-6 right-6 w-96 max-w-full bg-white p-6 shadow-xl rounded-xl z-50 border border-gray-100"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <div className="flex items-start">
//             <div className="mr-4 text-blue-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 We value your privacy
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <button
//                   onClick={() => setConsent('deny')}
//                   className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
//                 >
//                   Reject
//                 </button>
//                 <button
//                   onClick={() => setConsent('allow')}
//                   className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-md transition-all duration-200 font-medium shadow-sm"
//                 >
//                   Accept All
//                 </button>
//               </div>
//               <motion.div
//                 animate={{ opacity: isHovering ? 1 : 0.7 }}
//                 className="mt-3 text-xs text-gray-500"
//               >
//                 <a href="/privacy-policy" className="hover:underline">
//                   Cookie Policy
//                 </a>
//                 {' • '}
//                 <a href="/privacy-policy" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default CookieConsent;

// src/components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CookieConsentProps {
  onConsent: (value: 'allow' | 'deny') => void;
}

const COOKIE_NAME = 'suffixcorp';

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie
      .split(';')
      .some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));

    if (!hasConsent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const setConsent = (value: 'allow' | 'deny') => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${COOKIE_NAME}=${value};expires=${expires.toUTCString()};path=/`;
    setVisible(false);
    onConsent(value);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-6 right-6 w-96 max-w-full bg-white p-6 shadow-xl rounded-xl z-50 border border-gray-100"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex items-start">
            <div className="mr-4 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                We value your privacy
              </h3>
              <p className="text-gray-600 mb-4">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking “Accept All”, you consent to our use of cookies.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setConsent('deny')}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Reject
                </button>
                <button
                  onClick={() => setConsent('allow')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-md transition-all duration-200 font-medium shadow-sm"
                >
                  Accept All
                </button>
              </div>
              <motion.div
                animate={{ opacity: isHovering ? 1 : 0.7 }}
                className="mt-3 text-xs text-gray-500"
              >
                <a href="/cookie-policy" className="hover:underline">
                  Cookie Policy
                </a>
                {' • '}
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
