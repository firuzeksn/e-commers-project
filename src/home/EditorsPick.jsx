import React from 'react';

const EditorsPick = () => {
  return (
    <section className="flex flex-col items-center py-20 px-6 bg-[#FAFAFA]">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-[#252B42] uppercase tracking-wider">EDITOR'S PICK</h2>
        <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl h-auto md:h-[500px]">
        {/* Men Bölümü */}
        <div className="relative flex-1 group overflow-hidden">
          <img src="src/assets/men.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Men" />
          <div className="absolute bottom-6 left-6 bg-white px-12 py-3 font-bold uppercase text-[#252B42] shadow-md">Men</div>
        </div>

        {/* Women Bölümü */}
        <div className="relative flex-1 group overflow-hidden">
          <img src="src/assets/women.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Women" />
          <div className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold uppercase text-[#252B42] shadow-md">Women</div>
        </div>

        {/* Küçük Kartlar Sütunu (Accessories & Kids) */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="relative h-1/2 group overflow-hidden">
            <img src="src/assets/accessories.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Accessories" />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 font-bold uppercase text-[#252B42] shadow-md">Accessories</div>
          </div>
          <div className="relative h-1/2 group overflow-hidden">
            <img src="src/assets/kids.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kids" />
            <div className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold uppercase text-[#252B42] shadow-md">Kids</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;