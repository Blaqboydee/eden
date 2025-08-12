import React, { useState, useEffect } from 'react';
import { Award, Users, Globe, Sparkles, ArrowRight, Play } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '500K+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Global Stores', icon: Globe },
    { number: '1000+', label: 'Unique Pieces', icon: Sparkles }
  ];

  const features = [
    {
      title: 'Sustainable Fashion',
      description: 'Committed to ethical practices and eco-friendly materials in every piece we create.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop'
    },
    {
      title: 'Artisan Craftsmanship',
      description: 'Each garment is meticulously crafted by skilled artisans with decades of experience.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop'
    },
    {
      title: 'Premium Materials',
      description: 'We source only the finest fabrics and materials from trusted suppliers worldwide.',
      image: 'https://images.unsplash.com/photo-1586295166451-0b991a25b88e?w=600&h=400&fit=crop'
    },
    {
      title: 'Timeless Design',
      description: 'Our designs transcend trends, creating pieces that remain elegant season after season.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section id="about-section" className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
              <div className="space-y-6">
                <p className="text-sm text-gray-500 tracking-widest uppercase font-medium">
                  About Edenville
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight tracking-wide">
                  Crafting
                  <span className="block italic font-normal text-gray-700">Excellence</span>
                  <span className="block">Since 1999</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Born from a vision to redefine luxury fashion, Edenville has been at the forefront 
                  of contemporary elegance for over two decades. We believe that true style is not 
                  just about following trends, but about creating timeless pieces that speak to the soul.
                </p>
                <p>
                  Our journey began with a simple philosophy: every garment should be a work of art, 
                  combining innovative design with traditional craftsmanship. Today, we continue to 
                  push boundaries while staying true to our commitment to quality and sustainability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-black text-white px-8 py-4 font-medium tracking-widest hover:bg-gray-800 transition-all duration-300 uppercase rounded-sm flex items-center justify-center gap-3">
                  Our Story
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a href='https://www.instagram.com/reel/DGi_bHeAGmF/?igsh=d2wxM2FscmwyOTd2' className="group border-2 border-black text-black px-8 py-4 font-medium tracking-widest hover:bg-black hover:text-white transition-all duration-300 uppercase rounded-sm flex items-center justify-center gap-3">
                  <Play size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  Watch Film
                </a>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=700&fit=crop"
                  alt="Edenville Atelier"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Statistics Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-float max-w-xs">
                <div className="text-center">
                  <p className="text-3xl font-light text-black mb-2">2M+</p>
                  <p className="text-sm text-gray-600 tracking-wide">Pieces Crafted</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-6 w-12 h-12 border-2 border-gray-300 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <stat.icon size={24} />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-light text-black mb-2">{stat.number}</p>
                <p className="text-sm text-gray-600 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Carousel */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide">
                What Sets Us Apart
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the principles that guide every decision we make and every piece we create.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Feature Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-80 md:h-96 object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Feature Content */}
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`cursor-pointer transition-all duration-300 p-6 rounded-xl ${
                      index === activeFeature
                        ? 'bg-white shadow-lg scale-105'
                        : 'hover:bg-white/50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <h4 className={`text-xl font-medium mb-3 tracking-wide transition-colors duration-300 ${
                      index === activeFeature ? 'text-black' : 'text-gray-700'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                      index === activeFeature ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                ))}

                {/* Progress Indicators */}
                <div className="flex gap-2 pt-4">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === activeFeature
                          ? 'bg-black w-12'
                          : 'bg-gray-300 w-6 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h3 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
              Ready to Experience Edenville?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Visit one of our flagship stores or book a personal styling consultation to discover your perfect pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 font-medium tracking-widest hover:bg-gray-800 transition-colors duration-300 uppercase rounded-sm">
                Find a Store
              </button>
              <button className="border-2 border-black text-black px-8 py-4 font-medium tracking-widest hover:bg-black hover:text-white transition-all duration-300 uppercase rounded-sm">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;