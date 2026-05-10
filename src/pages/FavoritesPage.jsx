import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { toggleFavorite, addToCart } from '../store/actions/shoppingCartActions';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.shoppingCart?.favorites || []);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 font-montserrat">
        <Icon icon="ic:baseline-favorite-border" className="text-8xl text-gray-200" />
        <h2 className="text-2xl font-bold text-[#252B42]">Henüz favori ürünün yok</h2>
        <p className="text-[#737373]">Beğendiğin ürünleri burada biriktirebilirsin.</p>
        <Link to="/shop" className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a8cd1] transition-all">
          Alışverişe Çık
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 md:px-44 font-montserrat">
      <div className="flex items-center gap-3 mb-8">
        <Icon icon="ic:baseline-favorite" className="text-red-500 text-3xl" />
        <h1 className="text-3xl font-bold text-[#252B42]">Favorilerim</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-[#ECECEC] overflow-hidden group flex flex-col">
            <div className="relative overflow-hidden h-64">
              <img 
                src={product.images?.[0]?.url} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                alt={product.name} 
              />
              <button 
                onClick={() => dispatch(toggleFavorite(product))}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500 hover:bg-red-50 transition-colors"
              >
                <Icon icon="ic:baseline-favorite" className="text-xl" />
              </button>
            </div>

            <div className="p-4 flex flex-col flex-grow gap-2">
              <h3 className="font-bold text-[#252B42] truncate">{product.name}</h3>
              <p className="text-[#737373] text-xs line-clamp-2 h-8">{product.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[#23856D] font-bold text-lg">${product.price}</span>
                <button 
                  onClick={() => {
                    dispatch(addToCart(product, 1));
                    toast.success("Sepete eklendi!");
                  }}
                  className="bg-[#23A6F0] text-white p-2 rounded-md hover:bg-[#1a8cd1] transition-all flex items-center gap-1 text-xs font-bold"
                >
                  <Icon icon="ic:outline-shopping-cart" className="text-lg" />
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;