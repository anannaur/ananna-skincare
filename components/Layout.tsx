
import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CartItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
  onOpenCart: () => void;
  isLoggedIn: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount, onOpenCart, isLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Promo Bar */}
      <div className="bg-[#f5f5f4] text-[10px] tracking-widest uppercase py-2 text-center border-b border-stone-200">
        Free Shipping on all orders over $75 • Use code RADIANCE for 10% off
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-stone-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-3xl tracking-[0.2em] serif font-bold absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            ANANNA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest hover:text-stone-400 transition-colors ${
                  location.pathname === link.path ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <Link to="/account" className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <User size={20} />
            </Link>
            <button 
              onClick={onOpenCart}
              className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-stone-800 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 p-6 space-y-4 animate-in fade-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-lg serif tracking-wide text-stone-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#fcfbf9] pt-20 pb-10 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl serif tracking-widest font-bold">ANANNA</h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              Pure botanical skincare formulated for the modern minimalist. 
              Grounded in nature, backed by science.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Explore</h5>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><Link to="/shop" className="hover:text-stone-900">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-stone-900">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-stone-900">Best Sellers</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Customer Care</h5>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><Link to="/contact" className="hover:text-stone-900">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Newsletter</h5>
            <p className="text-sm text-stone-500 mb-4">Join our list for exclusive rituals and product launches.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-transparent border-b border-stone-300 py-2 flex-grow text-sm focus:outline-none focus:border-stone-900"
              />
              <button className="text-[10px] uppercase tracking-widest font-bold py-2 px-4 hover:opacity-70">Join</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-stone-100 flex flex-col md:row justify-between items-center text-[10px] tracking-widest text-stone-400 space-y-4 md:space-y-0 uppercase">
          <p>© 2024 ANANNA Skincare Co.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-900">Instagram</a>
            <a href="#" className="hover:text-stone-900">Pinterest</a>
            <a href="#" className="hover:text-stone-900">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
