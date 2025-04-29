import React from 'react'; 
import Header from './components/Header';
import MainNav from './components/MainNav';
import HeroSlider from './components/HeroSlider';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <MainNav />
      <main className="flex-grow">
        <HeroSlider />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;