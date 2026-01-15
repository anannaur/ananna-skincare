
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1556228448-399495b62283?auto=format&fit=crop&q=60&w=800'; // Default fallback
};

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#f9f8f4]">
          <img 
            src="https://images.unsplash.com/photo-1594125350485-c558645d9467?auto=format&fit=crop&q=80&w=2000" 
            alt="Ananna Skincare" 
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
            onError={handleImageError}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center md:text-left">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl md:text-8xl leading-tight serif tracking-tight">
              Purity in every <br />
              <span className="italic">drop.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed tracking-wide">
              Discover a skincare ritual that honors your skin's natural balance. 
              Minimalist formulations with maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/shop" 
                className="w-full sm:w-auto bg-stone-900 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-lg inline-flex items-center justify-center group"
              >
                Shop Collection <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto text-xs uppercase tracking-[0.2em] font-bold border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Essential Rituals</h2>
            <h3 className="text-4xl serif">The Best Sellers</h3>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-stone-900 pb-1 hidden sm:block">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-stone-100 aspect-[4/5] mb-6 rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={handleImageError}
                  loading="lazy"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onAddToCart(product);
                  }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm text-stone-900 py-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 shadow-sm"
                >
                  Quick Add
                </button>
              </Link>
              <div className="space-y-1">
                <h4 className="text-sm font-medium tracking-wide text-stone-900">{product.name}</h4>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-stone-500 uppercase tracking-widest">{product.category}</p>
                  <p className="text-sm font-semibold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="bg-[#fcfbf9] py-24 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h3 className="text-3xl serif italic">"We believe beauty should be as simple and profound as nature itself."</h3>
          <p className="text-stone-600 leading-relaxed font-light tracking-wide">
            Ananna was born from a desire for clarity in a cluttered industry. We stripped back the unnecessary, 
            focusing only on potent botanicals and proven active ingredients that nourish without irritation. 
            Our bottles are recyclable, our ingredients are ethically sourced, and our results are timeless.
          </p>
          <div className="pt-6">
            <Link to="/about" className="bg-stone-900 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-md">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-16">Community Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Elena R.", quote: "The Dewy Cleanser changed my skin overnight. So gentle but effective." },
            { name: "Marcus T.", quote: "Finally found a brand that respects my sensitive skin and looks beautiful on my shelf." },
            { name: "Sarah K.", quote: "The Midnight Recovery Oil is literal liquid gold. I wake up with the softest skin." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border border-stone-100 rounded-sm space-y-6">
              <div className="flex text-stone-900">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 italic leading-relaxed font-light">"{item.quote}"</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
