// // App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainNav from './components/MainNav';
// import HeroSlider from './components/HeroSlider';
// import Footer from './components/Footer';
// import Ourservices from './components/ServicesPage';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import Blogpost from './pages/blogpost';
// import PostDetail from './pages/PostDetail';
// import CookiePolicy from './pages/CookiePolicy';
// import PrivacyChoices from './pages/Privacychoices';
// import PicturePage from './pages/PicturePage';
// import ContactPage from './pages/ContactPage';
// import CareerData from './pages/CareerData';
// import ClientsScroll from './components/ClientsScroll';
// import FeaturedInsights from './components/FeaturedInsights';
// import NewsInsights from './components/NewsInsights';
// // import Scrollinglogo from './components/ScrollingLogos';
// import CookieConsent from './components/CookieConsent';

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <MainNav />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <HeroSlider />
//                 <Ourservices />
//                 <ClientsScroll />
//                 {/* <Scrollinglogo /> */}
//                 <FeaturedInsights />
//                 <NewsInsights />
//               </>
//             } />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-of-use" element={<TermsOfUse />} />
//             <Route path="/blogpost" element={<Blogpost />} />
//             <Route path="/posts/:id" element={<PostDetail />} />
//             <Route path="/cookie-policy" element={<CookiePolicy />} />
//             <Route path="/privacy-choices" element={<PrivacyChoices />} />
//             <Route path="/picture-page" element={<PicturePage />} />
//             <Route path="/careers" element={<CareerData />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </main>
//         <Footer />
//         <CookieConsent />
//       </div>
//     </Router>
//   );
// };

// export default App;

// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNav from './components/MainNav';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import Ourservices from './components/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Blogpost from './pages/blogpost';
import PostDetail from './pages/PostDetail';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyChoices from './pages/Privacychoices';
import PicturePage from './pages/PicturePage';
import ContactPage from './pages/ContactPage';
import CareerData from './pages/CareerData';
import ClientsScroll from './components/ClientsScroll';
import FeaturedInsights from './components/FeaturedInsights';
import NewsInsights from './components/NewsInsights';
import CookieConsent from './components/CookieConsent';
import CareerCategoryForm from './pages/CareerCategoryForm';

const COOKIE_NAME = 'suffixcorp';

const App: React.FC = () => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);

  // 1) On mount, check for the correct cookie name
  useEffect(() => {
    const exists = document.cookie
      .split(';')
      .some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));
    setHasConsent(exists);
  }, []);

  // 2) Called by CookieConsent once they click Allow/Deny
  const handleConsent = (value: 'allow' | 'deny') => {
    setHasConsent(true);
    // If you only want analytics when 'allow', do it here.
  };

  return (
    <Router>
      {/* blur + disable while waiting for consent */}
      <div
        className={`min-h-screen flex flex-col ${hasConsent ? '' : 'blur-sm pointer-events-none select-none'
          }`}
      >
        <MainNav />

        <main className="flex-grow mt-[77px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSlider />
                  <Ourservices />
                  {/* <ClientsScroll /> */}
                  <FeaturedInsights />
                  <NewsInsights />
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/blogpost" element={<Blogpost />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-choices" element={<PrivacyChoices />} />
            <Route path="/picture-page" element={<PicturePage />} />
            <Route path="/careers" element={<CareerData />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careerform" element={<CareerCategoryForm /> } />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* 3) Pass the handler into your CookieConsent */}
      <CookieConsent onConsent={handleConsent} />
    </Router>
  );
};

export default App;
