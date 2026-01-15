
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onClearCart }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    onClearCart();
  };

  if (isOrdered) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center space-y-8 animate-in zoom-in-95 duration-500">
        <div className="flex justify-center">
          <CheckCircle2 size={80} className="text-stone-900" />
        </div>
        <h1 className="text-4xl serif tracking-tight">Your ritual is on its way.</h1>
        <p className="text-stone-500 font-light leading-relaxed">
          Thank you for choosing Ananna. We've received your order #AN-92013 and we're carefully preparing your botanicals. You'll receive a confirmation email shortly.
        </p>
        <div className="pt-8">
          <Link to="/" className="bg-stone-900 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-lg">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-32 text-center space-y-6">
        <p className="serif text-2xl">Your bag is empty.</p>
        <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-stone-900 pb-1">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Forms */}
      <div className="lg:col-span-7 space-y-12">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Shipping */}
          <section className="space-y-8">
            <h2 className="text-2xl serif">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-6">
              <input placeholder="First Name" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input placeholder="Last Name" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
            </div>
            <input placeholder="Address" required className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
            <div className="grid grid-cols-3 gap-6">
              <input placeholder="City" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input placeholder="State" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input placeholder="ZIP Code" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
            </div>
          </section>

          {/* Payment */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl serif">Payment</h2>
              <div className="flex items-center space-x-2 text-[10px] text-stone-400 uppercase tracking-widest">
                <Lock size={12} />
                <span>Secure Encryption</span>
              </div>
            </div>
            <div className="bg-stone-50 p-8 space-y-6 rounded-sm border border-stone-100">
               <input placeholder="Card Number" required className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
               <div className="grid grid-cols-2 gap-6">
                  <input placeholder="MM / YY" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
                  <input placeholder="CVC" required className="bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
               </div>
            </div>
          </section>

          <button type="submit" className="w-full bg-stone-900 text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-xl">
            Place Order • ${total.toFixed(2)}
          </button>
        </form>
      </div>

      {/* Summary */}
      <div className="lg:col-span-5">
        <div className="sticky top-32 space-y-8 p-8 border border-stone-100 rounded-sm">
          <h2 className="text-xl serif">Order Summary</h2>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                  <img src={item.image} className="w-12 h-16 object-cover rounded-sm" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-stone-400">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3 pt-6 border-t border-stone-100 text-sm">
            <div className="flex justify-between text-stone-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg serif font-bold pt-4 border-t border-stone-100">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
