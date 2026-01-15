
import React, { useState } from 'react';
import { User, Package, Settings, LogOut } from 'lucide-react';

const Account: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'settings'>('orders');

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl serif tracking-tight">Welcome Back</h1>
          <p className="text-stone-500 font-light text-sm">Please enter your details to sign in to your ritual.</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
              placeholder="ritual@ananna.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-lg">
            Sign In
          </button>
        </form>
        <div className="text-center">
          <button className="text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900">
            Forgot Password?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-4 gap-12">
      <aside className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
            <User size={32} />
          </div>
          <div>
            <h2 className="text-xl serif">Jane Doe</h2>
            <p className="text-xs text-stone-400">Member since 2023</p>
          </div>
        </div>
        <nav className="flex flex-col space-y-2">
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex items-center space-x-3 px-4 py-3 text-sm rounded-sm transition-all ${
              activeTab === 'orders' ? 'bg-stone-50 text-stone-900 font-medium' : 'text-stone-500 hover:bg-stone-50'
            }`}
          >
            <Package size={18} />
            <span>Order History</span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-3 px-4 py-3 text-sm rounded-sm transition-all ${
              activeTab === 'profile' ? 'bg-stone-50 text-stone-900 font-medium' : 'text-stone-500 hover:bg-stone-50'
            }`}
          >
            <User size={18} />
            <span>Personal Info</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center space-x-3 px-4 py-3 text-sm rounded-sm transition-all ${
              activeTab === 'settings' ? 'bg-stone-50 text-stone-900 font-medium' : 'text-stone-500 hover:bg-stone-50'
            }`}
          >
            <Settings size={18} />
            <span>Account Settings</span>
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center space-x-3 px-4 py-3 text-sm text-red-400 hover:bg-red-50 rounded-sm transition-all mt-8"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </nav>
      </aside>

      <main className="md:col-span-3 space-y-12">
        {activeTab === 'orders' && (
          <div className="space-y-8">
            <h3 className="text-2xl serif">Recent Orders</h3>
            <div className="border border-stone-100 rounded-sm overflow-hidden">
               <div className="bg-stone-50 px-6 py-4 grid grid-cols-4 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
                  <span>Order ID</span>
                  <span>Date</span>
                  <span>Total</span>
                  <span>Status</span>
               </div>
               {[
                 { id: '#AN-82391', date: 'Jan 12, 2024', total: '$145.00', status: 'Delivered' },
                 { id: '#AN-82104', date: 'Dec 04, 2023', total: '$65.00', status: 'Delivered' }
               ].map((order, i) => (
                 <div key={i} className="px-6 py-6 grid grid-cols-4 items-center text-sm border-t border-stone-100">
                    <span className="font-mono text-xs">{order.id}</span>
                    <span className="text-stone-500">{order.date}</span>
                    <span className="font-medium">{order.total}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-green-600">{order.status}</span>
                 </div>
               ))}
            </div>
          </div>
        )}
        {activeTab === 'profile' && (
           <div className="space-y-8">
              <h3 className="text-2xl serif">Personal Details</h3>
              <div className="max-w-xl space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">First Name</label>
                       <p className="py-2 border-b border-stone-100 text-sm">Jane</p>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Last Name</label>
                       <p className="py-2 border-b border-stone-100 text-sm">Doe</p>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email</label>
                    <p className="py-2 border-b border-stone-100 text-sm">jane.doe@example.com</p>
                 </div>
                 <button className="text-[10px] uppercase tracking-[0.2em] font-bold border border-stone-900 px-6 py-3 hover:bg-stone-900 hover:text-white transition-all">
                    Edit Profile
                 </button>
              </div>
           </div>
        )}
      </main>
    </div>
  );
};

export default Account;
