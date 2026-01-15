
import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1556228448-399495b62283?auto=format&fit=crop&q=60&w=200';
};

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="px-6 py-6 border-b border-stone-100 flex items-center justify-between">
          <h2 className="text-xl serif font-bold tracking-tight">Shopping Bag ({items.length})</h2>
          <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-900">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-6 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-stone-300">
                <Trash2 size={32} />
              </div>
              <p className="text-stone-500 font-light italic">Your bag is currently empty.</p>
              <button 
                onClick={() => { onClose(); navigate('/shop'); }}
                className="text-xs uppercase tracking-[0.2em] font-bold border-b border-stone-900 pb-1"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-24 object-cover rounded-sm bg-stone-50" 
                  onError={handleImageError}
                />
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-sm font-medium text-stone-900">{item.name}</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-stone-200 rounded-sm">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 text-stone-500 hover:text-stone-900"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 text-xs font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 text-stone-500 hover:text-stone-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-semibold">${item.price * item.quantity}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="p-1 text-stone-300 hover:text-red-400 self-start"
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-8 bg-stone-50 border-t border-stone-100 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone-500">Subtotal</span>
              <span className="text-xl serif font-bold">${subtotal}</span>
            </div>
            <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
            <button 
              onClick={() => { onClose(); navigate('/checkout'); }}
              className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-colors shadow-lg"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
