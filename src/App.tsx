// import React from 'react'; 
// // import Header from './components/Header';dfh
// import MainNav from './components/MainNav';
// import HeroSlider from './components/HeroSlider';
// // import StatsSection from './components/StatsSection';
// import Footer from './components/Footer';
// import Ourservices from './components/ServicesPage';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* <Header /> */}
//       <MainNav />
//       <main className="flex-grow">
//         <HeroSlider />
//         {/* <StatsSection /> */}
//         <Ourservices />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNav from './components/MainNav';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import Ourservices from './components/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Make sure this path is correct
import TermsOfUse from './pages/TermsOfUse'; // Make sure this path is correct
// import RecognitionScroll from './components/RecognitionScroll'; 
import Blogpost from './pages/blogpost'; 
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSlider />
                  <Ourservices />
                  {/* <RecognitionScroll /> */}
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/blogpost" element={<Blogpost />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
