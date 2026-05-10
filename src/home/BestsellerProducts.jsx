import React from 'react';

export default function BestsellerProducts() {
  const modelImages = [
    "/resim2.jpg", "/resim3.jpg", "/resim4.jpg",
    "/resim5.jpg", "/resim6.jpg", "/resim7.jpg",
    "/resim8.jpg", "/resim9.jpg", "/resim10.jpg",
    "/resim11.jpg"
  ];

  const products = modelImages.map((imgSrc, index) => ({
    id: index,
    image: imgSrc,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "16.48",
    newPrice: "6.48"
  }));

  return (
    <section className="py-20 px-4 md:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-2 mb-20">
          <h4 className="text-[#737373] text-xl font-medium">Featured Products</h4>
          <h2 className="text-[#252B42] text-2xl font-bold uppercase tracking-wider">BESTSELLER PRODUCTS</h2>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full h-[360px] overflow-hidden mb-6">
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Product" />
              </div>
              <h5 className="text-[#252B42] font-bold text-base mb-2">{product.title}</h5>
              <p className="text-[#737373] font-bold text-sm mb-3">{product.department}</p>
              <div className="flex gap-2 font-bold text-base mb-3">
                <span className="text-[#BDBDBD] line-through">${product.oldPrice}</span>
                <span className="text-[#23856D]">${product.newPrice}</span>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-10 py-4 rounded-md font-bold text-sm uppercase hover:bg-[#23A6F0] hover:text-white transition-all active:scale-95">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}