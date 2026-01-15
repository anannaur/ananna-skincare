
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-24 py-16">
      <section className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Our Story</h2>
        <h1 className="text-5xl md:text-7xl serif tracking-tight">The Art of <br /> <span className="italic">Gentle Efficacy.</span></h1>
        <p className="text-xl text-stone-600 font-light leading-relaxed">
          Ananna was founded in 2021 by skincare minimalist Anna Chen, who believed that a cluttered vanity was a symptom of a cluttered mind. 
        </p>
      </section>

      <div className="h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556228448-399495b62283?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Skincare lab"
        />
      </div>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl serif">Formulated with <br /> Intention</h2>
          <p className="text-stone-600 leading-relaxed font-light">
            Every product in the Ananna range is developed in our boutique laboratory in small batches. 
            We source our botanical extracts from sustainable farms across the Mediterranean, 
            ensuring the highest potency while minimizing our carbon footprint.
          </p>
          <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900">
             <div className="space-y-2">
                <span className="text-stone-400">01</span>
                <p>Cruelty-Free</p>
             </div>
             <div className="space-y-2">
                <span className="text-stone-400">02</span>
                <p>Recyclable Glass</p>
             </div>
             <div className="space-y-2">
                <span className="text-stone-400">03</span>
                <p>No Synthetics</p>
             </div>
             <div className="space-y-2">
                <span className="text-stone-400">04</span>
                <p>Pure Active Ingredients</p>
             </div>
          </div>
        </div>
        <div className="bg-stone-50 p-12 aspect-square flex flex-col justify-center space-y-8">
          <h3 className="text-2xl serif">Our Commitment</h3>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            We are dedicated to total transparency. On every product page, you'll find the complete list of 
            ingredients and their purpose. We believe that by understanding what goes onto your skin, 
            you can make the best choices for your well-being.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
