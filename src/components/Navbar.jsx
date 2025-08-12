import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'New Arrivals',
      href: '#new',
      dropdown: ['Women', 'Men', 'Accessories', 'Shoes']
    },
    {
      label: 'Women',
      href: '#women',
      dropdown: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Lingerie']
    },
    {
      label: 'Men',
      href: '#men',
      dropdown: ['Shirts', 'Pants', 'Suits', 'Casual', 'Accessories']
    },
    {
      label: 'Collections',
      href: '#collections',
      dropdown: ['Spring 2025', 'Limited Edition', 'Capsule', 'Heritage']
    },
    {
      label: 'Sale',
      href: '#sale',
      isHighlight: true
    }
  ];

  const closeDropdown = () => setActiveDropdown('');
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* Main Navbar */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-black/10' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Left Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, 2).map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href={item.href}
                    className={`relative py-2 font-medium text-sm tracking-wide transition-colors duration-300 ${
                      item.isHighlight 
                        ? 'text-red-600 hover:text-red-700' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {item.label}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      activeDropdown === item.label ? 'w-full' : 'w-0'
                    }`}></div>
                  </a>
                  
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-100 transform translate-y-0 transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase()}`}
                          className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Logo - Center */}
            <div className="flex-1 flex justify-center md:flex-none">
              <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-black cursor-pointer hover:scale-105 transition-transform duration-300">
                EDENVILLE
              </h1>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(2).map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href={item.href}
                    className={`relative py-2 font-medium text-sm tracking-wide transition-colors duration-300 ${
                      item.isHighlight 
                        ? 'text-red-600 hover:text-red-700' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {item.label}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      activeDropdown === item.label ? 'w-full' : 'w-0'
                    }`}></div>
                  </a>
                  
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-100 transform translate-y-0 transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase()}`}
                          className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button className="p-2 text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 rounded-full">
                <Search size={18} className="md:w-5 md:h-5" />
              </button>
              <button className="hidden sm:block p-2 text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 rounded-full">
                <User size={18} className="md:w-5 md:h-5" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 rounded-full">
                <ShoppingBag size={18} className="md:w-5 md:h-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-semibold">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-4 space-y-1 bg-gray-400">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-b-0">
                <a
                  href={item.href}
                  className={`block py-4 font-medium text-base tracking-wide transition-colors duration-300 ${
                    item.isHighlight 
                      ? 'text-red-600 hover:text-red-700' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
                
                {/* Mobile Dropdown Select */}
                {item.dropdown && (
                  <div className="pb-4 pl-1">
                    <select 
                      className="w-full bg-gray-50 border  border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                      defaultValue=""
                      onChange={(e) => {
                        if (e.target.value) {
                          window.location.href = e.target.value;
                          closeMobileMenu();
                        }
                      }}
                    >
                      <option value="" disabled className="text-gray-400">
                        Choose {item.label}
                      </option>
                      {item.dropdown.map((subItem) => (
                        <option
                          key={subItem}
                          value={`#${subItem.toLowerCase()}`}
                          className="text-gray-700 py-2"
                        >
                          {subItem}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile User Action */}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <a
                href="#account"
                className="flex items-center space-x-3 py-4 text-gray-700 hover:text-black transition-colors duration-300 rounded-lg hover:bg-gray-50 px-2"
                onClick={closeMobileMenu}
              >
                <User size={20} />
                <span className="font-medium tracking-wide">My Account</span>
              </a>
            </div>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;