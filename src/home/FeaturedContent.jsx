import React from 'react';

export default function FeaturedContent() {
  return (
    <section className="py-20 px-4 md:px-24 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 flex gap-4 h-[450px] md:h-[600px]">
          <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="src/assets/beyaz kazakı gözlüklü kız.jpg" 
              alt="Model 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="src/assets/turuncu kıyafetli kız.avif" 
              alt="Model 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <h4 className="text-[#23A6F0] font-bold text-base uppercase tracking-widest">
            Featured Products
          </h4>
          <h2 className="text-[#252B42] text-4xl md:text-[40px] font-bold leading-tight max-w-[400px]">
            We love what we do
          </h2>
          <div className="flex flex-col gap-5 text-[#737373] text-sm leading-relaxed max-w-[450px]">
            <p>
              Problems trying to resolve the conflict between the two major realms of
              Classical physics: Newtonian mechanics.
            </p>
            <p>
              Problems trying to resolve the conflict between the two major realms of
              Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}