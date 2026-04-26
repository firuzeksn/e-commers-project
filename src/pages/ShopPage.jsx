import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  // Görseldeki 5 kategori kartı
  const categories = Array(5).fill({
    title: "CLOTHS",
    count: "5 Items",
    image: "https://picsum.photos/300/400"
  });

  // Görseldeki 12 ürünlük liste
  const products = Array(12).fill({
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "16.48",
    newPrice: "6.48",
    image: "https://picsum.photos/300/400"
  });

  return (
    <div className="w-full bg-white font-montserrat">
      
      {/* 1. KISIM: BREADCRUMB & BAŞLIK */}
      <div className="bg-[#FAFAFA] py-10 px-4 md:px-44 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-[#252B42] text-2xl font-bold">Shop</h2>
        <div className="flex items-center gap-2 font-bold text-sm">
          <span className="text-[#252B42]">Home</span>
          <Icon icon="ic:outline-keyboard-arrow-right" className="text-[#BDBDBD] text-2xl" />
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      {/* KATEGORİ KARTLARI (5'li Grid) */}
      <div className="bg-[#FAFAFA] pb-12 px-4 md:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((item) => (
            <div key={item} className="relative h-[220px] cursor-pointer group overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <img 
                src={`https://picsum.photos/300/400?random=${item}`} 
                alt="Category" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-white">
                <h5 className="font-bold text-base uppercase">Cloths</h5>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. KISIM: FİLTRELEME ÇUBUĞU */}
      <div className="py-6 px-4 md:px-44 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#737373] font-bold text-sm">Showing all 12 results</p>
        
        <div className="flex items-center gap-4">
          <span className="text-[#737373] font-bold text-sm">Views:</span>
          <div className="flex gap-2">
            <button className="p-4 border border-[#ECECEC] rounded-md"><Icon icon="ic:baseline-grid-view" /></button>
            <button className="p-4 border border-[#ECECEC] rounded-md"><Icon icon="clarity:list-line" /></button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <select className="bg-[#F9F9F9] border border-[#DDDDDD] p-3 rounded-md text-[#737373] text-sm outline-none">
            <option>Popularity</option>
          </select>
          <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm">Filter</button>
        </div>
      </div>

      {/* 4. KISIM: ÜRÜN LİSTESİ (12 Ürün - 4'lü Grid) */}
      <div className="px-4 md:px-44 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
    {products.map((product, index) => (
      /* Ürün detayına gitmek için Link eklendi */
      <Link to={`/shop/${index + 1}`} key={index} className="flex flex-col items-center text-center group cursor-pointer">
        <div className="w-full aspect-[3/4] overflow-hidden mb-6">
          <img 
            src={`${product.image}?random=${index + 50}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            alt="Product" 
          />
        </div>
        <h5 className="text-[#252B42] font-bold text-base mb-2">{product.title}</h5>
        <p className="text-[#737373] font-bold text-sm mb-3">{product.department}</p>
        <div className="flex gap-2 font-bold text-base mb-3 justify-center">
          <span className="text-[#BDBDBD] line-through">${product.oldPrice}</span>
          <span className="text-[#23856D]">${product.newPrice}</span>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
          <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
          <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
          <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
        </div>
      </Link>
    ))}
  </div>

        {/* 5. KISIM: SAYFALAMA (PAGINATION) */}
        <div className="flex justify-center mt-24">
          <div className="flex border border-[#E8E8E8] rounded-lg overflow-hidden font-bold">
            <button className="px-6 py-6 bg-[#F3F3F3] text-[#BDBDBD] border-r">First</button>
            <button className="px-5 py-6 text-[#23A6F0] border-r">1</button>
            <button className="px-5 py-6 bg-[#23A6F0] text-white border-r">2</button>
            <button className="px-5 py-6 text-[#23A6F0] border-r">3</button>
            <button className="px-6 py-6 text-[#23A6F0]">Next</button>
          </div>
        </div>
      </div>
      
      {/* 6. KISIM: PARTNER LOGOLARI */}
      <div className="bg-[#FAFAFA] py-12 px-4 md:px-44 grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
        <Icon icon="fa6-brands:hooli" className="text-6xl mx-auto" />
        <Icon icon="fa6-brands:lyft" className="text-6xl mx-auto" />
        <Icon icon="fa6-brands:pied-piper-hat" className="text-6xl mx-auto" />
        <Icon icon="fa6-brands:stripe" className="text-6xl mx-auto" />
        <Icon icon="fa6-brands:aws" className="text-6xl mx-auto" />
        <Icon icon="fa6-brands:reddit-alien" className="text-6xl mx-auto" />
      </div>

    </div>
  );
};

export default ShopPage;