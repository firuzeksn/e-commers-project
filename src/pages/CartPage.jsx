import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { removeFromCart, updateCartItemCount } from '../store/actions/shoppingCartActions';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate eklendi

const CartPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Yönlendirme için tanımladık

  // Toplam Fiyat Hesaplama
  const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.count), 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 font-montserrat">
        <Icon icon="ic:outline-shopping-cart" className="text-8xl text-gray-200" />
        <h2 className="text-2xl font-bold text-[#252B42]">Sepetin şu an boş</h2>
        <p className="text-[#737373]">Görünüşe göre henüz bir seçim yapmadın.</p>
        <Link to="/shop" className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a8cd1] transition-all">
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12 px-4 md:px-44 font-montserrat">
      <h1 className="text-3xl font-bold text-[#252B42] mb-8">Alışveriş Sepetim</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Ürün Listesi */}
        <div className="flex-grow flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm border border-[#ECECEC] flex flex-col sm:flex-row items-center gap-4 transition-all hover:shadow-md">
              <img src={item.product.images[0]?.url} className="w-24 h-24 object-contain rounded bg-[#f3f3f3]" alt={item.product.name} />
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-[#252B42]">{item.product.name}</h3>
                <p className="text-[#737373] text-sm italic">Stok durumu: {item.product.stock > 0 ? 'Mevcut' : 'Tükendi'}</p>
                <p className="text-[#737373] text-sm mt-1">Birim Fiyat: <span className="font-bold">${item.product.price}</span></p>
                <button 
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                  className="text-red-500 text-xs font-bold mt-2 flex items-center justify-center sm:justify-start gap-1 hover:text-red-700 transition-colors"
                >
                  <Icon icon="ic:outline-delete" className="text-lg" /> Ürünü Kaldır
                </button>
              </div>

              {/* Adet Kontrolü */}
              <div className="flex items-center border rounded-md bg-[#FAFAFA] shadow-inner">
                <button 
                  onClick={() => dispatch(updateCartItemCount(item.product.id, item.count - 1))}
                  disabled={item.count <= 1}
                  className={`px-3 py-1 font-bold transition-colors ${item.count <= 1 ? 'text-gray-300' : 'hover:bg-gray-200 text-[#23A6F0]'}`}
                >-</button>
                <span className="px-4 py-1 font-bold min-w-[40px] text-center text-[#252B42]">{item.count}</span>
                <button 
                  onClick={() => dispatch(updateCartItemCount(item.product.id, item.count + 1))}
                  className="px-3 py-1 hover:bg-gray-200 font-bold text-[#23A6F0] transition-colors"
                >+</button>
              </div>

              {/* Toplam Satır Fiyatı */}
              <div className="text-right min-w-[100px]">
                <p className="font-bold text-[#23856D] text-lg">${(item.product.price * item.count).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sipariş Özeti (Summary Sidebar) */}
        <div className="w-full lg:w-96 flex flex-col gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#ECECEC] sticky top-24">
            <h3 className="text-xl font-bold text-[#252B42] mb-6 border-b pb-2">Sipariş Özeti</h3>
            
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-[#737373]">
                <span>Ürünlerin Toplamı</span>
                <span className="font-bold text-[#252B42]">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-[#737373]">
                <span>Kargo Toplam</span>
                <span className="text-[#23A6F0] font-bold">Bedava</span>
              </div>
              {totalPrice > 1000 && (
                <div className="bg-[#2DC071]/10 p-2 rounded text-[#23856D] text-xs font-bold flex items-center gap-2">
                  <Icon icon="ic:outline-local-shipping" /> 1000$ üzeri kargo bizden!
                </div>
              )}
            </div>

            <hr className="mb-6" />
            
            <div className="flex justify-between font-bold text-xl text-[#252B42] mb-8">
              <span>Genel Toplam</span>
              <span className="text-[#23856D]">${totalPrice}</span>
            </div>

            <button 
              onClick={() => navigate("/checkout")} // Checkout sayfasına yönlendirme
              className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold shadow-lg hover:bg-[#1a8cd1] hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Icon icon="ic:outline-shopping-cart-checkout" className="text-xl" />
              Ödemeye Geç
            </button>
            
            <p className="text-[10px] text-[#737373] mt-4 text-center">
              "Ödemeye Geç" butonuna basarak Mesafeli Satış Sözleşmesi'ni kabul etmiş sayılırsınız.
            </p>
          </div>

          <Link to="/shop" className="flex items-center justify-center gap-2 text-[#23A6F0] font-bold text-sm hover:underline transition-all">
            <Icon icon="ic:outline-arrow-back" /> Alışverişe Devam Et
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;