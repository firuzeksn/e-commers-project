import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/actions/shoppingCartActions';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Artik 1'den basliyoruz!
  const [step, setStep] = useState(1); 
  const [isOrdered, setIsOrdered] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.count), 0).toFixed(2);

  const handleFinishOrder = () => {
    dispatch(clearCart());
    setIsOrdered(true);
    toast.success("Siparişiniz başarıyla alındı!", {
      position: "bottom-right",
      autoClose: 3000
    });
  };

  if (isOrdered) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh] font-montserrat animate-fadeIn px-4 text-center">
        <div className="bg-[#2DC071]/10 p-6 rounded-full mb-6">
          <Icon icon="icon-park-solid:check-one" className="text-8xl md:text-9xl text-[#2DC071]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">Siparişiniz İçin Teşekkürler!</h1>
        <p className="text-[#737373] text-lg mb-8 max-w-md">Ödemeniz başarıyla alındı. Sipariş detaylarını içeren bir e-posta gönderdik.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-[#23A6F0] text-white px-12 py-4 rounded-md font-bold hover:bg-[#1a8cd1] transition-all shadow-lg active:scale-95"
        >
          Alışverişe Devam Et
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8 md:py-12 px-4 md:px-20 lg:px-44 font-montserrat">
      
      {/* STEPPER */}
      <div className="flex items-center justify-center mb-10 md:mb-16">
        <div className="flex items-center w-full max-w-[320px] md:max-w-md justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 translate-y-[-50%]"></div>
          
          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all ${step >= 1 ? 'bg-[#23A6F0] text-white' : 'bg-white border-2 border-gray-200 text-gray-500'}`}>1</div>
          <div className={`flex-grow h-[2px] transition-all ${step >= 2 ? 'bg-[#23A6F0]' : 'bg-gray-200'}`}></div>
          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all ${step >= 2 ? 'bg-[#23A6F0] text-white' : 'bg-white border-2 border-gray-200 text-gray-500'}`}>2</div>
          <div className={`flex-grow h-[2px] transition-all ${step >= 3 ? 'bg-[#23A6F0]' : 'bg-gray-200'}`}></div>
          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all ${step === 3 ? 'bg-[#23A6F0] text-white' : 'bg-white border-2 border-gray-200 text-gray-500'}`}>3</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* SOL TARAF: DINAMIK ICERIK */}
        <div className="w-full lg:flex-grow bg-white p-6 md:p-10 rounded-lg shadow-sm border border-[#ECECEC] min-h-[450px]">
          
          {/* STEP 1: ADRES SECIMI */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#252B42] mb-6">Teslimat Adresi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Gelecek olan Adres Kartlari Buraya */}
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-gray-400 hover:border-[#23A6F0] hover:text-[#23A6F0] cursor-pointer transition-all">
                  <Icon icon="mdi:plus-circle-outline" className="text-4xl mb-2" />
                  <p className="font-bold text-sm">Yeni Adres Ekle</p>
                </div>
              </div>
              <div className="flex justify-end pt-6 border-t border-gray-100">
                <button 
                  onClick={() => setStep(2)}
                  className="bg-[#23A6F0] text-white px-10 py-3 rounded-md font-bold hover:bg-[#1a8cd1] transition-all"
                >
                  Ödeme Adımına Geç
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ODEME BILGILERI */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#252B42] mb-6">Ödeme Seçenekleri</h2>
              <div className="p-8 border rounded-lg bg-gray-50 mb-8 text-center text-gray-500">
                Kart Formu Buraya Gelecek...
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <button onClick={() => setStep(1)} className="text-[#737373] font-bold hover:text-black transition-colors">Geri Dön</button>
                <button 
                  onClick={() => setStep(3)}
                  className="bg-[#23A6F0] text-white px-10 py-3 rounded-md font-bold hover:bg-[#1a8cd1] transition-all"
                >
                  Onay Ekranına Geç
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SON ONAY */}
          {step === 3 && (
            <div className="animate-fadeIn flex flex-col items-center justify-center text-center py-10">
              <div className="bg-[#2D8C69] w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Icon icon="material-symbols:check" className="text-5xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#252B42] mb-4">Her şey hazır!</h2>
              <p className="text-[#737373] text-lg mb-10 max-w-md">Sipariş bilgilerini kontrol ettiysen hemen onaylayabilirsin.</p>
              <div className="flex gap-4 w-full md:w-auto">
                <button onClick={() => setStep(2)} className="hidden md:block text-[#737373] font-bold px-4">Geri</button>
                <button 
                  onClick={handleFinishOrder}
                  className="flex-grow md:flex-none bg-[#2D8C69] text-white px-12 py-4 rounded-md font-bold text-xl hover:bg-[#236e53] transition-all transform active:scale-95 shadow-xl"
                >
                  Siparişi Tamamla (${totalPrice})
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SAĞ TARAF: SİPARİŞ ÖZETİ */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-[#ECECEC] sticky top-24">
            <h3 className="text-2xl font-bold text-[#252B42] mb-6 border-b pb-4">Sipariş Özeti</h3>
            
            <div className="max-h-[40vh] overflow-y-auto mb-6 pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 py-4 border-b last:border-0 border-[#ECECEC] group">
                  <div className="relative">
                    <img src={item.product.images[0]?.url} className="w-16 h-16 object-contain rounded-md bg-[#F3F3F3] border border-gray-100" alt={item.product.name} />
                    <span className="absolute -top-2 -right-2 bg-[#252B42] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{item.count}</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="font-bold text-[#252B42] text-sm line-clamp-1">{item.product.name}</p>
                    <p className="text-[#737373] text-xs font-semibold mt-1">Birim: ${item.product.price}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-[#2D8C69] text-sm">${(item.product.price * item.count).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-50">
              <div className="flex justify-between text-[#737373] text-sm font-medium">
                <span>Ara Toplam</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-[#737373] text-sm font-medium">
                <span>Kargo</span>
                <span className="text-[#23A6F0]">Ücretsiz</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-[#252B42] pt-4 border-t-2 border-[#F3F3F3]">
                <span>Genel Toplam</span>
                <span className="text-[#2D8C69]">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;