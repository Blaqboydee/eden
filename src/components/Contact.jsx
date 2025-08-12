import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, MessageCircle, Send, Instagram, Facebook, Twitter } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 801 234 5678', '+234 802 345 6789'],
      action: 'tel:+2348012345678'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@edenville.com', 'orders@edenville.com'],
      action: 'mailto:hello@edenville.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Victoria Island, Lagos', 'Nigeria'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 9:00 AM - 8:00 PM', 'Sun: 11:00 AM - 6:00 PM'],
      action: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/edenville', color: 'hover:text-pink-600' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/edenville', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/edenville', color: 'hover:text-blue-400' }
  ];

  const locations = [
    {
      name: 'Victoria Island Flagship',
      address: '123 Ahmadu Bello Way, Victoria Island, Lagos',
      phone: '+234 801 234 5678',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 11AM-6PM',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      name: 'Lekki Boutique',
      address: '456 Lekki-Epe Expressway, Lekki Phase 1',
      phone: '+234 802 345 6789',
      hours: 'Mon-Sat: 10AM-9PM, Sun: 12PM-7PM',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest uppercase font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-wide">
            Contact
            <span className="block italic font-normal">Edenville</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-light text-black mb-4 tracking-wide">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="orders">Orders & Shipping</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="styling">Personal Styling</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 px-8 rounded-lg font-medium tracking-wide hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-medium text-black mb-6 tracking-wide">Quick Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <item.icon size={20} className="text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {item.action && idx === 0 ? (
                            <a href={item.action} className="hover:text-black transition-colors duration-300">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
              <MessageCircle size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Need Instant Help?</h3>
              <p className="mb-6 opacity-90">Chat with us on WhatsApp for immediate assistance</p>
              <a
                href="https://wa.me/2348162578003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-medium text-black mb-6 tracking-wide">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-50 rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-4 tracking-wide">Visit Our Stores</h3>
            <p className="text-gray-600">Experience Edenville in person at our flagship locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-medium text-black mb-4">{location.name}</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      <p className="text-sm">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="flex-shrink-0" />
                      <p className="text-sm">{location.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-1 flex-shrink-0" />
                      <p className="text-sm">{location.hours}</p>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-gray-50 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-black mb-4 tracking-wide">Frequently Asked Questions</h3>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What are your shipping options?</h4>
                <p className="text-gray-600 text-sm">We offer free shipping on orders over ₦50,000 within Lagos, and express delivery nationwide.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Do you offer personal styling?</h4>
                <p className="text-gray-600 text-sm">Yes! Book a consultation with our expert stylists for personalized fashion advice.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What's your return policy?</h4>
                <p className="text-gray-600 text-sm">We accept returns within 30 days of purchase with original tags and receipt.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Do you have size guides?</h4>
                <p className="text-gray-600 text-sm">Yes, detailed size guides are available on each product page to ensure the perfect fit.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Can I track my order?</h4>
                <p className="text-gray-600 text-sm">Absolutely! You'll receive tracking information via email once your order ships.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Do you offer gift cards?</h4>
                <p className="text-gray-600 text-sm">Yes, digital and physical gift cards are available in various denominations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;