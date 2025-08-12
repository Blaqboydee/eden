import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - replace with your actual imports
  const images = [
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop&crop=face",
      label: "Spring Essentials",
      alt: "Spring Collection Model"
    },
    {
      src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=face",
      label: "New Arrivals",
      alt: "New Arrivals Model"
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face",
      label: "Accessories",
      alt: "Accessories Model"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .spin-animation { animation: spin 20s linear infinite; }
        .pulse-animation { animation: pulse 4s ease-in-out infinite; }
        .fade-animation { animation: fadeInOut 8s ease-in-out infinite; }
        .slide-in { animation: slideIn 0.8s ease-out; }
      `}</style>

      <section className="mt-20 bg-white min-h-auto flex py-8 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Desktop */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-light text-black leading-tight tracking-wide">
                  Timeless
                  <span className="block italic font-normal">Elegance</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover pieces that transcend seasons. Our collection blends 
                contemporary sophistication with enduring style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a href='#products' className="bg-black text-white px-8 py-4 text-sm tracking-widest hover:bg-gray-800 transition-colors duration-300 uppercase font-medium">
                  Explore Collection
                </a>
                {/* <button className="border-2 border-black text-black px-8 py-4 text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300 uppercase font-medium">
                  Book Appointment
                </button> */}
              </div>
              
              <div className="flex items-center gap-8 pt-24">
                {/* <div className="text-center">
                  <p className="text-2xl font-light text-black">500+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Unique Pieces</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light text-black">50+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Global Stores</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light text-black">25</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Years Legacy</p>
                </div> */}
              </div>
            </div>

            {/* Right Content - Desktop Animated Images */}
            <div className="relative h-full min-h-96">
              
              {/* Main Model Image - Large */}
              <div className="absolute top-0 right-0 w-80 h-96 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 float-animation">
                <img 
                  src={images[0].src} 
                  alt={images[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light tracking-wide">{images[0].label}</p>
                </div>
              </div>

              {/* Secondary Model Image - Medium */}
              <div 
                className="absolute top-32 left-0 w-64 h-80 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-105 float-animation z-10"
                style={{ animationDelay: '2s' }}
              >
                <img 
                  src={images[1].src} 
                  alt={images[1].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-5"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light tracking-wide">{images[1].label}</p>
                </div>
              </div>

              {/* Accent Model Image - Small */}
              <div 
                className="absolute bottom-8 right-16 w-48 h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105 float-animation"
                style={{ animationDelay: '4s' }}
              >
                <img 
                  src={images[2].src} 
                  alt={images[2].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-5"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-light tracking-wide">{images[2].label}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-16 left-16 w-24 h-24 border border-gray-300 rounded-full spin-animation"></div>
              <div className="absolute bottom-32 left-8 w-16 h-16 bg-black rounded-full opacity-10 pulse-animation"></div>

              {/* Floating Text Elements */}
              <div className="absolute top-8 left-32 transform -rotate-12 fade-animation">
                <p className="text-xs text-gray-400 tracking-widest uppercase">Crafted</p>
              </div>
              
              <div 
                className="absolute bottom-16 right-8 transform rotate-12 fade-animation"
                style={{ animationDelay: '4s' }}
              >
                <p className="text-xs text-gray-400 tracking-widest uppercase">Luxury</p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden relative mt-0 pt-0 h-[50vh] mb-6">
            
            {/* Mobile Background Image Carousel */}
            <div className="absolute inset-0 flex justify-center">
              <div className="relative w-96 h-96 sm:w-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Carousel Images */}
                <div className="relative w-full h-full">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        {/* <p className="text-sm font-light tracking-wide">{image.label}</p> */}
                      </div>
                    </div>
                  ))}
                </div>


                <div className="absolute bottom-6 right-6 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-gray-200 rounded-full spin-animation"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-black rounded-full opacity-5 pulse-animation"></div>
            </div>

            {/* Mobile Content Overlay */}
            <div className="relative  flex flex-col  min-h-screen">
              <div className="bg-black/25 rounded-2xl py-8 px-4 shadow-xl mx-auto max-w-sm text-left">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h1 className="text-4xl text-white sm:text-5xl font-light leading-tight tracking-wide">
                      Timeless
                      <span className="block italic font-normal">Elegance</span>
                    </h1>
                  </div>
                  
                  <p className="text-base text-white leading-relaxed">
                    Discover pieces that transcend seasons. Our collection blends 
                    contemporary sophistication with enduring style.
                  </p>
                  
                  <div className="flex flex-col gap-3 pt-6">
                    <a href='#products' className="bg-black text-white px-6 py-3 text-xs tracking-widest hover:bg-gray-800 transition-colors duration-300 uppercase font-medium rounded">
                      Explore Collection
                    </a>
                  </div>
                  
                  {/* <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                    <div>
                      <p className="text-lg font-light text-black">500+</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Pieces</p>
                    </div>
                    <div>
                      <p className="text-lg font-light text-black">50+</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Stores</p>
                    </div>
                    <div>
                      <p className="text-lg font-light text-black">25</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Years</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;