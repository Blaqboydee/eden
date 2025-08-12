import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUp, Heart, Send } from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '#new-arrivals' },
      { name: 'Women', href: '#women' },
      { name: 'Men', href: '#men' },
      { name: 'Accessories', href: '#accessories' },
      { name: 'Sale', href: '#sale' },
      { name: 'Gift Cards', href: '#gift-cards' }
    ],
    help: [
      { name: 'Size Guide', href: '#size-guide' },
      { name: 'Shipping Info', href: '#shipping' },
      { name: 'Returns & Exchanges', href: '#returns' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Track Order', href: '#track' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#story' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Store Locator', href: '#stores' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Accessibility', href: '#accessibility' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/edenville', color: 'hover:text-pink-400' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/edenville', color: 'hover:text-blue-400' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/edenville', color: 'hover:text-blue-300' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/edenville', color: 'hover:text-red-400' }
  ];

  const paymentMethods = [
    'Visa', 'Mastercard', 'Paystack', 'Flutterwave', 'Paypal'
  ];

  return (
    <footer className="bg-black text-white relative">
      
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
              Stay in Style
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Subscribe to our newsletter and be the first to know about new collections, 
              exclusive offers, and fashion insights from Edenville.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                onClick={handleNewsletterSubmit}
                disabled={!email || isSubscribed}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubscribed ? (
                  <>
                    <Heart size={16} className="text-red-500" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Subscribe
                  </>
                )}
              </button>
            </div>

            {isSubscribed && (
              <p className="text-green-400 text-sm mt-4 animate-fade-in">
                Thank you for subscribing! Welcome to the Edenville family.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-widest mb-4">EDENVILLE</h2>
              <p className="text-gray-400 leading-relaxed">
                Crafting timeless elegance since 1999. We create premium fashion pieces 
                that blend contemporary sophistication with enduring style.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-500" />
                <a href="tel:+2348012345678" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +234 801 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500" />
                <a href="mailto:hello@edenville.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  hello@edenville.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 mt-1" />
                <span className="text-gray-400">
                  Victoria Island, Lagos, Nigeria
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Edenville Fashion House. All rights reserved.
              </p>
              {/* <p className="text-gray-500 text-xs mt-1">
                Designed with <Heart size={12} className="inline text-red-500 mx-1" /> by Dee
              </p> */}
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-500 text-sm">We Accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-800  px-3 py-1 rounded text-[10px] text-gray-400 border border-gray-700"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
}

export default Footer;