import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. KATMAN: HERO SLIDER (Görsel 6) */}
      <section className="relative w-full h-[716px] flex items-center bg-[#23A6F0]">
        {/* Arka Plan Görseli (Figma'daki kız resmi buraya gelecek) */}
        <img 
          src="https://s3-alpha-sig.figma.com/..." 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Hero"
        />
        
        {/* İçerik Alanı (Flex Layout) */}
        <div className="relative z-10 flex flex-col items-start gap-8 px-10 md:px-20 text-white max-w-2xl">
          <h5 className="font-bold tracking-widest uppercase">Summer 2020</h5>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">NEW COLLECTION</h1>
          <h4 className="text-xl leading-8">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="bg-[#2DC071] px-10 py-4 rounded-md font-bold text-2xl hover:scale-105 transition-transform">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* 2. KATMAN: EDITORS' PICK (Görsel 7) */}
      <section className="flex flex-col items-center py-20 px-6 bg-[#FAFAFA]">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#252B42]">EDITOR'S PICK</h2>
          <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>
        
        {/* Flex Layout ile Görsel Blokları */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
          <div className="relative flex-1 h-[500px] bg-gray-200">
            {/* Büyük Resim */}
            <div className="absolute bottom-4 left-4 bg-white px-8 py-3 font-bold uppercase">Men</div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
             {/* Sağdaki Küçük Resimler */}
             <div className="relative h-[242px] bg-gray-300">
                <div className="absolute bottom-4 left-4 bg-white px-8 py-3 font-bold uppercase">Women</div>
             </div>
             <div className="flex gap-4">
                <div className="relative flex-1 h-[242px] bg-gray-400">
                   <div className="absolute bottom-4 left-4 bg-white px-8 py-3 font-bold uppercase">Accessories</div>
                </div>
                <div className="relative flex-1 h-[242px] bg-gray-500">
                   <div className="absolute bottom-4 left-4 bg-white px-8 py-3 font-bold uppercase">Kids</div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;