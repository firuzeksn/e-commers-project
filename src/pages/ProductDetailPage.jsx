import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  // Bestseller Ürün Verisi (Görseldeki 8'li grid yapısı için)
  const bestsellerProducts = Array(8).fill({
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    img: "https://picsum.photos/300/400"
  });

  return (
    <div className="w-full bg-[#FFFFFF] font-montserrat min-h-screen">
      
      {/* 1. BÖLÜM: BREADCRUMB */}
      <div className="bg-[#FAFAFA]">
        <div className="px-4 md:px-44 py-6 flex items-center gap-3 font-bold text-sm">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <Icon icon="ic:outline-keyboard-arrow-right" className="text-[#BDBDBD] text-2xl" />
          <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
        </div>
      </div>

      {/* 2. BÖLÜM: ÜRÜN ANA PANELİ */}
      <div className="bg-[#FAFAFA]">
        <div className="px-4 md:px-44 pb-12 flex flex-col md:flex-row gap-8">
          {/* Görsel Alanı */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative group overflow-hidden">
              <img src="https://picsum.photos/600/600?product" className="w-full h-auto object-cover shadow-sm" alt="Product" />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl opacity-80"><Icon icon="ic:outline-keyboard-arrow-left" /></button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl opacity-80"><Icon icon="ic:outline-keyboard-arrow-right" /></button>
            </div>
            <div className="flex gap-3">
              <img src="https://picsum.photos/100/100?1" className="w-24 h-24 object-cover border border-gray-200" alt="" />
              <img src="https://picsum.photos/100/100?2" className="w-24 h-24 object-cover opacity-60" alt="" />
            </div>
          </div>

          {/* Bilgi Alanı */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 pt-2 px-2">
            <h3 className="text-[#252B42] text-xl font-normal">Floating Phone</h3>
            <div className="flex items-center gap-2">
              <div className="flex text-[#F3CD03] text-xl"><Icon icon="ic:baseline-star" /><Icon icon="ic:baseline-star" /><Icon icon="ic:baseline-star" /><Icon icon="ic:baseline-star" /><Icon icon="ic:outline-star-border" /></div>
              <span className="text-[#737373] font-bold text-sm">10 Reviews</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[#252B42] text-2xl font-bold">$1,139.33</h4>
              <p className="text-sm font-bold"><span className="text-[#737373]">Availability :</span><span className="text-[#23A6F0] ml-1">In Stock</span></p>
            </div>
            <p className="text-[#858585] text-sm leading-relaxed max-w-md">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequat door ENIM RELIT Mollie.</p>
            <hr className="border-[#BDBDBD] w-full mt-4" />
            <div className="flex gap-2.5 mt-2">
              <div className="w-8 h-8 bg-[#23A6F0] rounded-full"></div><div className="w-8 h-8 bg-[#2DC071] rounded-full"></div><div className="w-8 h-8 bg-[#E77C40] rounded-full"></div><div className="w-8 h-8 bg-[#252B42] rounded-full"></div>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold text-sm shadow-md">Select Options</button>
              <div className="flex gap-2">
                <button className="p-3 bg-white border border-[#E8E8E8] rounded-full"><Icon icon="ic:outline-favorite-border" className="text-xl text-[#252B42]" /></button>
                <button className="p-3 bg-white border border-[#E8E8E8] rounded-full"><Icon icon="ic:outline-shopping-cart" className="text-xl text-[#252B42]" /></button>
                <button className="p-3 bg-white border border-[#E8E8E8] rounded-full"><Icon icon="ic:outline-visibility" className="text-xl text-[#252B42]" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BÖLÜM: DESCRIPTION TABS */}
      <div className="w-full bg-white border-b border-[#ECECEC]">
        <div className="flex justify-center gap-8 py-8 text-sm font-bold text-[#737373]">
          <button className="hover:text-[#252B42]">Description</button>
          <button className="hover:text-[#252B42]">Additional Information</button>
          <button className="hover:text-[#252B42]">Reviews <span className="text-[#23856D]">(0)</span></button>
        </div>
        <div className="px-4 md:px-44 py-12 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg bg-[#C4C4C4] aspect-[4/5]">
            <img src="https://picsum.photos/400/500?detail" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <h3 className="text-[#252B42] text-2xl font-bold">the quick fox jumps over</h3>
            <p className="text-[#737373] text-sm leading-6">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequat door ENIM RELIT Mollie.</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#252B42] text-2xl font-bold">the quick fox jumps over</h3>
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-3 text-[#737373] text-sm font-bold">
                  <Icon icon="ic:outline-keyboard-arrow-right" className="text-2xl" />
                  <span>the quick fox jumps over the lazy dog</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. BÖLÜM: BESTSELLER PRODUCTS */}
      <div className="bg-[#FAFAFA] py-16">
        <div className="px-4 md:px-44">
          <h3 className="text-[#252B42] text-2xl font-bold mb-8 uppercase tracking-wider">Bestseller Products</h3>
          <hr className="mb-10 border-[#ECECEC]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {bestsellerProducts.map((product, index) => (
              <div key={index} className="bg-white flex flex-col group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img src={`${product.img}?sig=${index}`} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col items-center md:items-start gap-2">
                  <h5 className="text-[#252B42] font-bold text-base">{product.title}</h5>
                  <p className="text-[#737373] text-sm font-bold">{product.dept}</p>
                  <div className="flex gap-2 font-bold mt-2">
                    <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
                    <span className="text-[#23856D]">{product.newPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 5. BÖLÜM: CLIENT LOGOS (Yeni Eklenen Kısım) */}
      <div className="bg-[#FAFAFA] py-12">
        <div className="px-4 md:px-44 flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <Icon icon="fa6-brands:hooli" className="text-7xl md:text-8xl" />
          <Icon icon="fa6-brands:lyft" className="text-5xl md:text-6xl" />
          <Icon icon="fa6-brands:pied-piper-hat" className="text-6xl md:text-7xl" />
          <Icon icon="fa6-brands:stripe" className="text-6xl md:text-7xl" />
          <Icon icon="fa6-brands:aws" className="text-5xl md:text-6xl" />
          <Icon icon="fa6-brands:reddit-alien" className="text-6xl md:text-7xl" />
        </div>
      </div>      
      

    </div>
  );
};

export default ProductDetailPage;