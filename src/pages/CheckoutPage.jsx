import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/actions/shoppingCartActions';
import { axiosWithAuth } from '../api/axiosWithAuth';
import { toast } from 'react-toastify';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1); 
  const [isOrdered, setIsOrdered] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cardInfo, setCardInfo] = useState(null); 

  const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.count), 0).toFixed(2);

  const fetchAddresses = () => {
    axiosWithAuth()
      .get('/user/address')
      .then(res => setAddressList(res.data))
      .catch(err => console.error("Adresler yüklenemedi:", err));
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      axiosWithAuth().delete(`/user/address/${id}`)
        .then(() => {
          toast.success("Adres silindi.");
          setAddressList(prev => prev.filter(a => a.id !== id));
          setSelectedAddress(prev => prev?.id === id ? null : prev);
        })
        .catch(() => toast.error("Silme başarısız."));
    }
  };

  const handleFinishOrder = () => {
    const orderPayload = {
      address_id: selectedAddress.id,
      order_date: new Date().toISOString(),
      card_no: parseInt(cardInfo.card_no),
      card_name: cardInfo.card_name,
      card_expire_month: cardInfo.card_expire_month,
      card_expire_year: cardInfo.card_expire_year,
      card_ccv: cardInfo.card_ccv,
      price: parseFloat(totalPrice),
      products: cart.map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.name,
      })),
    };

    axiosWithAuth().post('/order', orderPayload)
      .then(() => {
        dispatch(clearCart());
        setIsOrdered(true);
        toast.success("Siparişiniz başarıyla alındı!");
      })
      .catch(() => toast.error("Sipariş oluşturulamadı."));
  };

  if (isOrdered) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh] font-montserrat animate-fadeIn px-4 text-center">
        <div className="bg-[#2DC071]/10 p-6 rounded-full mb-6">
          <Icon icon="icon-park-solid:check-one" className="text-8xl text-[#2DC071]" />
        </div>
        <h1 className="text-3xl font-bold text-[#252B42] mb-4">Siparişiniz İçin Teşekkürler!</h1>
        <button onClick={() => navigate('/shop')} className="bg-[#23A6F0] text-white px-12 py-4 rounded-md font-bold">
          Alışverişe Devam Et
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8 md:py-12 px-4 md:px-20 lg:px-44 font-montserrat">
      
      {showAddressForm && (
        <AddressForm 
          onClose={() => { setShowAddressForm(false); setEditingAddress(null); }} 
          onAddressUpdated={fetchAddresses}
          editData={editingAddress}
        />
      )}

      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center w-full max-w-md justify-between relative">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 ${step >= 1 ? 'bg-[#23A6F0] text-white' : 'bg-white border text-gray-500'}`}>1</div>
          <div className={`flex-grow h-[2px] ${step >= 2 ? 'bg-[#23A6F0]' : 'bg-gray-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 ${step >= 2 ? 'bg-[#23A6F0] text-white' : 'bg-white border text-gray-500'}`}>2</div>
          <div className={`flex-grow h-[2px] ${step >= 3 ? 'bg-[#23A6F0]' : 'bg-gray-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 ${step === 3 ? 'bg-[#23A6F0] text-white' : 'bg-white border text-gray-500'}`}>3</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:flex-grow bg-white p-6 md:p-10 rounded-lg shadow-sm border border-[#ECECEC] min-h-[450px]">
          
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#252B42] mb-6">Teslimat Adresi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
                {addressList.map((addr) => (
                  <div 
                    key={addr.id} 
                    className={`border-2 p-4 rounded-lg bg-white relative cursor-pointer hover:shadow-md transition-all ${selectedAddress?.id === addr.id ? 'border-[#23A6F0]' : 'border-[#ECECEC]'}`}
                    onClick={() => setSelectedAddress(addr)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-[#252B42] flex items-center gap-2">
                        <Icon icon="mdi:map-marker" className="text-[#23A6F0]" /> {addr.title}
                      </h4>
                      <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                        <button type="button"
                          onClick={() => { setEditingAddress(addr); setShowAddressForm(true); }}
                          className="p-1 text-blue-500 hover:bg-gray-100 rounded-full">
                          <Icon icon="mdi:pencil" width="16" />
                        </button>
                        <button type="button"
                          onClick={() => handleDelete(addr.id)}
                          className="p-1 text-red-500 hover:bg-gray-100 rounded-full">
                          <Icon icon="mdi:trash-can" width="16" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-[#737373] font-semibold">{addr.name} {addr.surname}</p>
                    <p className="text-xs text-[#737373] mt-1">{addr.neighborhood} {addr.district}/{addr.city}</p>
                  </div>
                ))}

                <div 
                  onClick={() => { setEditingAddress(null); setShowAddressForm(true); }}
                  className="border-2 border-dashed border-[#23A6F0] bg-white rounded-lg p-8 flex flex-col items-center justify-center text-[#23A6F0] hover:bg-[#23A6F0]/5 cursor-pointer transition-all min-h-[160px]"
                >
                  <Icon icon="mdi:plus-circle-outline" className="text-4xl mb-2" />
                  <p className="font-bold text-sm">Yeni Adres Ekle</p>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t">
                <button 
                  onClick={() => setStep(2)} 
                  disabled={!selectedAddress}
                  className={`px-12 py-4 rounded-md font-bold shadow-md active:scale-95 transition-all ${selectedAddress ? 'bg-[#23A6F0] text-white hover:bg-[#1a8cd1]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                >
                  Ödeme Adımına Geç
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <PaymentForm 
              onNext={(cardData) => {
                if (cardData.shouldSave) {
                  axiosWithAuth().post('/user/card', cardData.cardPayload)
                    .then(() => toast.success("Kart kaydedildi."))
                    .catch(() => {});
                }
                setCardInfo(cardData);
                setStep(3);
              }}
              onBack={() => setStep(1)} 
            />
          )}

          {step === 3 && (
            <div className="animate-fadeIn flex flex-col items-center py-10">
              <div className="bg-[#2D8C69] w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md text-white text-5xl">✓</div>
              <h2 className="text-3xl font-bold text-[#252B42] mb-4">Her şey hazır!</h2>
              <p className="text-gray-500 mb-2">Teslimat: <span className="font-bold text-[#252B42]">{selectedAddress?.title} — {selectedAddress?.city}</span></p>
              <p className="text-gray-500 mb-6">Kart: <span className="font-bold text-[#252B42]">**** **** **** {cardInfo?.card_no?.slice(-4)}</span></p>
              <button onClick={handleFinishOrder} className="bg-[#2D8C69] text-white px-12 py-4 rounded-md font-bold text-xl shadow-xl">
                Siparişi Tamamla ({totalPrice}₺)
              </button>
            </div>
          )}
        </div>

        <div className="w-full lg:w-[400px]">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-[#ECECEC] sticky top-24">
            <h3 className="text-2xl font-bold text-[#252B42] mb-6 border-b pb-4">Sipariş Özeti</h3>
            <div className="max-h-[40vh] overflow-y-auto mb-6 pr-2">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 py-4 border-b last:border-0">
                  <img src={item.product.images[0]?.url} className="w-16 h-16 object-contain rounded-md bg-[#F3F3F3]" alt="" />
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="font-bold text-[#252B42] text-sm">{item.product.name}</p>
                    <p className="text-[#737373] text-xs">Adet: {item.count} - {item.product.price}₺</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-xl text-[#252B42] pt-4 border-t-2">
              <span>Genel Toplam</span>
              <span className="text-[#2D8C69]">{totalPrice}₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;