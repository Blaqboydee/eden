import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const products = [
  { 
    id: 1,
    name: 'Eden Trouvaille', 
    price: '₦12,000', 

    img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
    category: 'Blazers',
    isNew: true,
    isSale: false
  },
  { 
    id: 2,
    name: 'Logo T-Shirt', 
    price: '₦6,000', 
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Tops',
    isNew: false,
    isSale: true
  },
  { 
    id: 3,
    name: 'Snapback Cap', 
    price: '₦5,000', 
    img: 'https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accessories',
    isNew: false,
    isSale: false
  },
  { 
    id: 4,
    name: 'Essential Blazer', 
    price: '₦18,000', 

    img: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop',
    category: 'Blazers',
    isNew: true,
    isSale: true
  },
  { 
    id: 5,
    name: 'Silk Dress', 
    price: '₦25,000', 
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
    category: 'Dresses',
    isNew: false,
    isSale: false
  },
  { 
    id: 6,
    name: 'Tailored Trousers', 
    price: '₦14,000', 
    img: 'https://images.unsplash.com/photo-1493357335960-4583bfa6f8d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Bottoms',
    isNew: true,
    isSale: false
  }
];

const categories = ['All', 'Blazers', 'Tops', 'Dresses', 'Bottoms', 'Accessories'];

function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id='products' className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-gray-500 tracking-widest uppercase font-medium mb-4">
            Curated Collection
          </p>
          <h2 className=" text-2xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-wide">
            Our Latest
            <span className="block italic font-normal">Arrivals</span>
          </h2>
          <p className="text-sm w-[90%] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium fashion pieces that blend timeless elegance with contemporary style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium tracking-wide transition-all duration-300 rounded-full ${
                activeCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-black border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-black text-white px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-600 text-white px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full">
                      Sale
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-3 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110">
                    <Eye size={18} />
                  </button>
                  <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110">
                    <Heart size={18} />
                  </button>
                  <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 transform hover:scale-110">
                    <ShoppingBag size={18} />
                  </button>
                </div>

                {/* Quick Add Button */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button className="w-full bg-white text-black py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300 rounded-lg">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-medium text-black mb-3 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg md:text-xl font-semibold text-black">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                    <Heart size={20} />
                  </button>
                </div>

                {/* Size Options */}
                <div className="mt-4 flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="w-8 h-8 text-xs border border-gray-200 rounded hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-black text-white px-8 md:px-12 py-3 md:py-4 font-medium tracking-widest hover:bg-gray-800 transition-colors duration-300 uppercase rounded-sm">
            Load More Products
          </button>
        </div>

        {/* Featured Banner */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden">
          <div className="px-8 md:px-12 py-12 md:py-16 text-center text-white">
            <h3 className="text-2xl md:text-4xl font-light mb-4 tracking-wide">
              Join Our Exclusive Club
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get early access to new collections, exclusive offers, and styling tips from our fashion experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;