import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Drive Progress in every process",
    subtitle: "Technology led solutions to improve experiences, drive efficiency and reduce cost.",
    buttonText: "Learn more",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Elevate client experience at every turn",
    subtitle: "Process solutions that lower costs and lead to lasting relationships",
    buttonText: "Explore solutions",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Empowering Efficiency, Enhancing Security",
    subtitle: "End-to-end BFSI solutions secured by ISO-certified data protection practices.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  // {
  //   id: 4,
  //   title: "Customized Process Solutions, Proven Results",
  //   subtitle: "Flexible engagement models—Comprehensive, Hybrid, and Client-Owned—to perfectly match your operational needs.",
  //   buttonText: "Discover AI",
  //   buttonLink: "#",
  //   image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  {
    id: 5,
    title: "Tailored Manpower Solutions, Maximum Flexibility",
    subtitle: "Deploy our skilled manpower at your premises or ours, secured by stringent Infosec protocols.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Precision in Every Process",
    subtitle: "Expert-led BFSI workflows delivering accuracy, efficiency, and cost-effectiveness at scale.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    title: "Innovation Meets Excellence",
    subtitle: "Cutting-edge technology paired with highly skilled personnel ensures flawless execution.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    title: "Reliable Infrastructure, Remarkable Results",
    subtitle: "Robust IT infrastructure ensuring dependable, uninterrupted service delivery.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 9,
    title: "Accelerate your operations with AI and Automation",
    subtitle: "Intelligent AI and automation solutions to supercharge efficiency and reduce costs.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 10,
    title: "Intelligent Automation, Real Impact",
    subtitle: "RPA-driven automation that accelerates processes, minimizes errors, and optimizes cost.",
    buttonText: "See how",
    buttonLink: "#",
    image: "https://images.pexels.com/photos/3183157/pexels-photo-3183157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
      setIsTransitioning(false);
    }, 500);
  }, []);

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (i: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(i);
      setIsTransitioning(false);
    }, 500);
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  useEffect(() => {
    if (!isPlaying) return;
    const id = window.setInterval(nextSlide, 5000);
    return () => window.clearInterval(id);
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[550px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${i === currentSlide
            ? 'opacity-100 z-20'
            : isTransitioning && i === (currentSlide + 1) % slides.length
              ? 'opacity-0 z-10'
              : 'opacity-0 z-0'
            }`}
        >
          {/* Background image with fade effect */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content overlay with dark left half */}
          <div className="absolute inset-0 flex">
            <div className="w-full md:w-[90%] h-full bg-gradient-to-r from-black via-black/90 to-transparent">
              <div className="h-full flex mx-[60px] pb-[10px] items-center pl-8 md:pl-12 lg:pl-16 pr-4">
                <div className="max-w-lg" >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  {/* <a
                    href={slide.buttonLink}
                    className="inline-flex items-center px-6 py-3 bg-[#04D4BF] hover:bg-teal-400 text-white font-medium rounded-lg transition-colors"
                  >
                    {slide.buttonText}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-[1rem] inset-x-0 flex justify-center z-30">
        <div className="flex items-center bg-black/30 px-4 py-2 rounded-full space-x-2">
          <button onClick={togglePlay} className="text-white p-1">
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <div className="h-4 border-r border-white/30 mx-2" />
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${idx === currentSlide
                ? 'bg-teal-300 scale-125'
                : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;