import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';
import { Icon } from '@iconify/react';

const PreviousOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openOrderId, setOpenOrderId] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get('/order')
      .then(res => setOrders(res.data))
      .catch(err => console.error("Siparişler yüklenemedi:", err))
      .finally(() => setLoading(false));
  }, []);

  const toggleOrder = (id) => {
    setOpenOrderId(prev => prev === id ? null : id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Icon icon="mdi:loading" className="text-4xl text-[#23A6F0] animate-spin" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Icon icon="mdi:package-variant" className="text-6xl text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-[#252B42]">Henüz siparişiniz yok</h2>
        <p className="text-gray-400 mt-2">Alışverişe başlamak için mağazamızı ziyaret edin.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 px-4 md:px-20 lg:px-44 font-montserrat">
      <h1 className="text-3xl font-bold text-[#252B42] mb-8">Önceki Siparişlerim</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-[#ECECEC] overflow-hidden">
            
            <div
              onClick={() => toggleOrder(order.id)}
              className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#23A6F0]/10 p-3 rounded-full">
                  <Icon icon="mdi:package-variant-closed" className="text-[#23A6F0] text-xl" />
                </div>
                <div>
                  <p className="font-bold text-[#252B42]">Sipariş #{order.id}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(order.order_date).toLocaleDateString('tr-TR', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-gray-400">Toplam</p>
                  <p className="font-bold text-[#2D8C69]">{order.price.toFixed(2)}₺</p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-xs text-gray-400">Ürün Sayısı</p>
                  <p className="font-bold text-[#252B42]">{order.products.length} ürün</p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-xs text-gray-400">Kart</p>
                  <p className="font-bold text-[#252B42]">**** {String(order.card_no).slice(-4)}</p>
                </div>
                <Icon
                  icon={openOrderId === order.id ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="text-gray-400 text-2xl transition-transform"
                />
              </div>
            </div>

            {openOrderId === order.id && (
              <div className="border-t border-[#ECECEC] px-5 pb-5 pt-4 animate-fadeIn">
                <h4 className="text-sm font-bold text-[#252B42] mb-4">Sipariş Detayı</h4>
                <div className="space-y-3">
                  {order.products.map((product) => (
                    <div key={product.id} className="flex items-center gap-4 p-3 bg-[#FAFAFA] rounded-lg">
                      <img
                        src={product.images[0]?.url}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded-md bg-white border border-[#ECECEC]"
                      />
                      <div className="flex-grow">
                        <p className="font-bold text-[#252B42] text-sm">{product.name}</p>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">{product.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Adet: {product.count}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#252B42]">{(product.price * product.count).toFixed(2)}₺</p>
                        <p className="text-xs text-gray-400">{product.price}₺ / adet</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t flex flex-col md:flex-row justify-between gap-2 text-xs text-gray-500">
                  <span>Kart Sahibi: <span className="font-bold text-[#252B42]">{order.card_name}</span></span>
                  <span>Son Kullanma: <span className="font-bold text-[#252B42]">{order.card_expire_month}/{order.card_expire_year}</span></span>
                  <span className="font-bold text-[#2D8C69] text-sm">Toplam: {order.price.toFixed(2)}₺</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousOrdersPage;