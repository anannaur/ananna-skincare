
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Plus, Minus, Shield, Droplets, Leaf, Star } from 'lucide-react';

interface ProductDetailProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1556228448-399495b62283?auto=format&fit=crop&q=60&w=800';
};

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'how-to'>('description');

  if (!product) return (
    <div className="h-screen flex items-center justify-center">
      <p className="serif text-2xl">Product not found.</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="bg-stone-100 aspect-[4/5] rounded-sm overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
              onError={handleImageError}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-stone-100 rounded-sm overflow-hidden opacity-50 hover:opacity-100 cursor-pointer">
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover grayscale" 
                    onError={handleImageError}
                    loading="lazy"
                  />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
              <Link to="/shop" className="hover:text-stone-900">Shop</Link>
              <span>/</span>
              <span>{product.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl serif tracking-tight leading-tight">{product.name}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-stone-900">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-xs text-stone-400 ml-2">(24 reviews)</span>
              </div>
              <p className="text-2xl font-light">${product.price}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-stone-200 rounded-sm px-2 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-stone-400 hover:text-stone-900">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-stone-400 hover:text-stone-900">
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => onAddToCart(product, quantity)}
                className="flex-grow bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-lg"
              >
                Add to Bag
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-4 border-t border-stone-100 text-[10px] uppercase tracking-widest font-bold text-stone-400">
              <div className="flex flex-col items-center space-y-2">
                <Leaf size={20} className="text-stone-300" />
                <span>Vegan</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Shield size={20} className="text-stone-300" />
                <span>Non-toxic</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Droplets size={20} className="text-stone-300" />
                <span>Natural</span>
              </div>
            </div>
          </div>

          {/* Details Tabs */}
          <div className="space-y-6 pt-10">
            <div className="flex border-b border-stone-100">
              {['description', 'ingredients', 'how-to'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${
                    activeTab === tab ? 'text-stone-900 border-b-2 border-stone-900' : 'text-stone-400 hover:text-stone-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="text-stone-600 text-sm leading-relaxed font-light tracking-wide animate-in fade-in duration-500">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <p>{product.description}</p>
                  <p>Recommended for: {product.skinType} skin types.</p>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <div className="space-y-2">
                  <p className="font-medium mb-4">Key Actives:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {product.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[10px] text-stone-400 italic">Aqua (Water), Glycerin, Butylene Glycol, Caprylic/Capric Triglyceride, Phenoxyethanol, Ethylhexylglycerin...</p>
                </div>
              )}
              {activeTab === 'how-to' && (
                <p>Apply 2-3 drops onto clean, damp skin. Massage in upward, circular motions until fully absorbed. Use morning and night for optimal luminosity.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
