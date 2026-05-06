import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// ... diğer importlar

const OrderPage = () => {
  // 1. ADIM: Başlangıcı her zaman 1 yapıyoruz.
  const [activeStep, setActiveStep] = useState(1);
  
  // Redux'tan sepeti çekiyoruz (Kontrol için)
  const cart = useSelector((state) => state.shoppingCart.cart);

  useEffect(() => {
  // Sayfa mount olduğunda (ilk açıldığında) 
  // her ihtimale karşı 1. adıma setle
  setActiveStep(1);
}, []);

  return (
  <div className="order-page">
    {/* Üstteki Adım Çubuğu (Stepper) */}
    <div className="steps-header flex justify-center gap-4 my-8">
       <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>1</div>
       <div className={`step ${activeStep >= 2 ? 'active' : ''}`}>2</div>
       <div className={`step ${activeStep >= 3 ? 'active' : ''}`}>3</div>
    </div>

    <div className="main-content flex">
      <div className="steps-container flex-[2]">
        
        {/* ADIM 1: ADRES (Önce burası görünmeli) */}
        {activeStep === 1 && (
          <div className="address-step">
            <h2>Teslimat Adresi Seçin</h2>
            {/* Adres kartları buraya gelecek */}
            <button 
              className="bg-orange-500 text-white p-2 mt-4"
              onClick={() => setActiveStep(2)}
            >
              Kaydet ve Devam Et
            </button>
          </div>
        )}

        {/* ADIM 2: ÖDEME */}
        {activeStep === 2 && (
          <div className="payment-step">
            <h2>Ödeme Bilgileri</h2>
            {/* Kart formu buraya gelecek */}
            <button 
              className="bg-orange-500 text-white p-2 mt-4"
              onClick={() => setActiveStep(3)}
            >
              Ödemeyi Onayla
            </button>
          </div>
        )}

        {/* ADIM 3: ONAY (Senin gördüğün ekran) */}
        {activeStep === 3 && (
          <div className="confirmation-step text-center">
            <div className="icon-check">✔️</div>
            <h2>Her şey hazır!</h2>
            <p>Sipariş bilgilerini kontrol ettiysen hemen onaylayabilirsin.</p>
            <button className="bg-green-600 text-white p-3">Siparişi Tamamla</button>
          </div>
        )}

      </div>

      {/* SAĞ TARAF: SİPARİŞ ÖZETİ */}
      <div className="summary-container flex-[1]">
        {/* Sipariş Özeti Bileşeni */}
      </div>
    </div>
  </div>
);
};

export default OrderPage;