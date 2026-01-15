
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1556228448-399495b62283?auto=format&fit=crop&q=60&w=800';
};

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [skinTypeFilter, setSkinTypeFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (skinTypeFilter !== 'All') {
      result = result.filter(p => p.skinType === skinTypeFilter || p.skinType === 'All');
    }
    
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [categoryFilter, skinTypeFilter, sortBy]);

  const categories = ['All', 'Cleanser', 'Serum', 'Moisturizer', 'Oil', 'Mask'];
  const skinTypes = ['All', 'Dry', 'Oily', 'Sensitive', 'Combination'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4 mb-20">
        <h1 className="text-5xl serif tracking-tight">The Collection</h1>
        <p className="text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
          Explore our range of artisanal skincare essentials, curated for purity and efficacy.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-stone-100 space-y-6 md:space-y-0">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Category:</span>
            <div className="flex items-center space-x-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`text-[11px] uppercase tracking-widest transition-colors ${
                    categoryFilter === cat ? 'text-stone-900 font-bold border-b border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Skin Type:</span>
            <select 
              value={skinTypeFilter}
              onChange={(e) => setSkinTypeFilter(e.target.value)}
              className="bg-transparent text-[11px] uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              {skinTypes.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Sort:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-[11px] uppercase tracking-widest focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col h-full">
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-stone-100 aspect-[4/5] rounded-sm flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                {product.skinType !== 'All' && (
                  <span className="bg-white/90 backdrop-blur-sm text-[8px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm shadow-sm text-stone-600">
                    For {product.skinType} Skin
                  </span>
                )}
              </div>
            </Link>
            <div className="mt-6 space-y-2 flex-grow flex flex-col">
              <div className="flex justify-between items-start">
                <Link to={`/product/${product.id}`} className="text-sm font-medium text-stone-900 hover:text-stone-500 transition-colors">
                  {product.name}
                </Link>
                <span className="text-sm font-semibold">${product.price}</span>
              </div>
              <p className="text-[11px] text-stone-500 uppercase tracking-[0.2em]">{product.category}</p>
              <p className="text-xs text-stone-500 line-clamp-2 font-light leading-relaxed mt-2">
                {product.description}
              </p>
              <div className="pt-4 mt-auto">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-stone-900 text-white py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-stone-400 serif italic text-xl">No products found for these filters.</p>
          <button 
            onClick={() => {setCategoryFilter('All'); setSkinTypeFilter('All');}}
            className="mt-4 text-xs uppercase tracking-[0.2em] font-bold border-b border-stone-900 pb-1"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
