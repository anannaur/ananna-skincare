
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-24">
       <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Reach Out</h2>
            <h1 className="text-5xl serif tracking-tight">We're here to <br /> help you glow.</h1>
            <p className="text-stone-500 font-light leading-relaxed">
              Have a question about your ritual or need advice on product pairings? 
              Our skin experts are available Monday through Friday, 9am to 6pm EST.
            </p>
          </div>

          <div className="space-y-8">
             <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-50 flex items-center justify-center text-stone-900 shrink-0">
                   <Mail size={20} />
                </div>
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Email Us</h4>
                   <p className="text-sm font-medium">concierge@ananna.com</p>
                </div>
             </div>
             <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-50 flex items-center justify-center text-stone-900 shrink-0">
                   <MessageSquare size={20} />
                </div>
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Live Chat</h4>
                   <p className="text-sm font-medium">Average response time: 5 mins</p>
                </div>
             </div>
             <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-50 flex items-center justify-center text-stone-900 shrink-0">
                   <MapPin size={20} />
                </div>
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">HQ</h4>
                   <p className="text-sm font-medium">128 Radiant Lane, New York, NY 10012</p>
                </div>
             </div>
          </div>
       </div>

       <div className="bg-white border border-stone-100 p-12 shadow-sm rounded-sm">
          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
             <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                <input placeholder="Jane Doe" className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Subject</label>
                <select className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900">
                   <option>Product Inquiry</option>
                   <option>Order Status</option>
                   <option>Returns & Exchanges</option>
                   <option>Other</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Message</label>
                <textarea rows={4} placeholder="How can we assist you?" className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900 resize-none" />
             </div>
             <button className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-all shadow-md">
                Send Message
             </button>
          </form>
       </div>
    </div>
  );
};

export default Contact;
