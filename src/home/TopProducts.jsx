import React from 'react';

export default function TopProducts() {
  return (
    <section className="py-12 px-4 md:px-24 bg-[#FAFAFA]">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
        <div className="relative w-full md:w-1/2 h-[500px] md:h-full overflow-hidden group">
          <img 
            src="https://img.freepik.com/free-photo/fashionable-man-woman-sitting-stair_158595-5482.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Main Product" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute bottom-10 left-10 bg-[#23A6F0]/80 p-8 backdrop-blur-sm">
            <h3 className="text-white text-2xl font-bold mb-4 uppercase">Top Product Of the Week</h3>
            <button className="border-2 border-white text-white px-6 py-2 font-bold uppercase tracking-widest hover:bg-white hover:text-[#23A6F0] transition-colors">
              Explore Items
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 h-full">
          <div className="relative h-[300px] md:h-1/2 overflow-hidden group">
            <img 
              src="https://textilprofi.ru/wp-content/webp-express/webp-images/uploads/2018/03/pexels-warley-venancio-4255179.jpg.webp" 
              alt="Product 2" 
              className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute bottom-6 left-6 bg-[#23A6F0]/80 p-6 backdrop-blur-sm z-10">
              <h3 className="text-white text-lg font-bold mb-3 uppercase tracking-wider">Top Product Of the Week</h3>
              <button className="border border-white text-white px-4 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#23A6F0] transition-colors active:scale-95">
                Explore Items
              </button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-1/2 overflow-hidden group">
            <img 
              src="https://urbova.com/cdn/shop/articles/blog-2_1200x1200.jpg?v=1706926402" 
              alt="Product 3" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute bottom-6 left-6 bg-[#23A6F0]/80 p-6 backdrop-blur-sm">
              <h3 className="text-white text-lg font-bold mb-3 uppercase">Top Product Of the Week</h3>
              <button className="border border-white text-white px-4 py-2 text-sm font-bold uppercase hover:bg-white hover:text-[#23A6F0] transition-colors">
                Explore Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}