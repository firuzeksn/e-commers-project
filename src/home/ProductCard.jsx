import React from 'react';

const ProductCard = ({ image, title, department, oldPrice, newPrice }) => {
  return (
    <div className="flex flex-col items-center gap-4 group cursor-pointer">
      {/* Ürün Görseli */}
      <div className="overflow-hidden w-full h-[360px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      {/* Ürün Bilgileri */}
      <div className="flex flex-col items-center gap-2 pb-8">
        <h5 className="text-[#252B42] font-bold text-base">{title}</h5>
        <p className="text-[#737373] font-bold text-sm">{department}</p>
        <div className="flex gap-2 font-bold text-base">
          <span className="text-[#bdbdbd] line-through">${oldPrice}</span>
          <span className="text-[#23856D]">${newPrice}</span>
        </div>
        
        {/* Renk Seçenekleri (Figma'daki o küçük daireler) */}
        <div className="flex gap-1.5 mt-2">
          <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
          <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
          <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
          <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;