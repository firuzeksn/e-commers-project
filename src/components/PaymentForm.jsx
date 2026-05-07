import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { axiosWithAuth } from '../api/axiosWithAuth';
import { toast } from 'react-toastify';

const PaymentForm = ({ onNext, onBack }) => {
  const [savedCards, setSavedCards] = useState([]);
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [editingCard, setEditingCard] = useState(null); // ← eklendi
  const [loading, setLoading] = useState(false);
  const [shouldSave, setShouldSave] = useState(false);
  const [cvv, setCvv] = useState('');

  const [newCard, setNewCard] = useState({
    card_no: '',
    expire_month: '',
    expire_year: '',
    name_on_card: '',
  });

  const fetchCards = () => {
    axiosWithAuth()
      .get('/user/card')
      .then(res => {
        setSavedCards(res.data);
        setSelectedCardId(prev => 
          prev === null && res.data.length > 0 ? res.data[0].id : prev
        );
      })
      .catch(err => console.error("Kartlar yüklenemedi:", err));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Düzenleme moduna geçince formu doldur
  useEffect(() => {
    if (editingCard) {
      setNewCard({
        card_no: editingCard.card_no,
        expire_month: editingCard.expire_month,
        expire_year: editingCard.expire_year,
        name_on_card: editingCard.name_on_card,
      });
      setShowNewCardForm(true);
      setSelectedCardId(null);
    }
  }, [editingCard]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      axiosWithAuth().delete(`/user/card/${id}`)
        .then(() => {
          toast.success("Kart silindi.");
          setSavedCards(prev => prev.filter(c => c.id !== id));
          setSelectedCardId(prev => prev === id ? null : prev);
        })
        .catch(() => toast.error("Silme başarısız."));
    }
  };

  const handleEdit = (e, card) => {
    e.stopPropagation();
    setEditingCard(card);
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    setNewCard({ ...newCard, card_no: value.replace(/(\d{4})(?=\d)/g, '$1 ') });
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) setCvv(value);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    if (showNewCardForm) {
      const cardPayload = {
        card_no: newCard.card_no.replace(/\s/g, ''),
        expire_month: parseInt(newCard.expire_month),
        expire_year: parseInt(newCard.expire_year),
        name_on_card: newCard.name_on_card,
      };

      // Düzenleme mi yoksa yeni kart mı?
      if (editingCard) {
        setLoading(true);
        axiosWithAuth()
          .put('/user/card', { ...cardPayload, id: String(editingCard.id) })
          .then(() => {
            toast.success("Kart güncellendi.");
            setEditingCard(null);
            setShowNewCardForm(false);
            fetchCards();
          })
          .catch(() => toast.error("Kart güncellenemedi."))
          .finally(() => setLoading(false));
        return; // onNext'e gitme, sadece kaydet
      }

      if (shouldSave) {
        setLoading(true);
        axiosWithAuth()
          .post('/user/card', cardPayload)
          .then(() => {
            toast.success("Kartınız güvenli bir şekilde kaydedildi.");
            onNext();
          })
          .catch(() => toast.error("Kart kaydedilirken bir hata oluştu."))
          .finally(() => setLoading(false));
      } else {
        onNext();
      }
    } else {
      onNext();
    }
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-[#252B42] mb-6">Ödeme Bilgileri</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {savedCards.map((card) => (
          <div
            key={card.id}
            onClick={() => { setSelectedCardId(card.id); setShowNewCardForm(false); setEditingCard(null); }}
            className={`border-2 p-4 rounded-lg cursor-pointer transition-all ${
              selectedCardId === card.id && !showNewCardForm ? 'border-[#23A6F0] bg-blue-50/30' : 'border-[#ECECEC]'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Icon icon="logos:mastercard" className="text-2xl" />
              {/* Düzenle / Sil butonları */}
              <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={(e) => handleEdit(e, card)}
                  className="p-1 text-blue-500 hover:bg-gray-100 rounded-full"
                >
                  <Icon icon="mdi:pencil" width="16" />
                </button>
                <button
                  type="button"
                  onClick={(e) => handleDelete(e, card.id)}
                  className="p-1 text-red-500 hover:bg-gray-100 rounded-full"
                >
                  <Icon icon="mdi:trash-can" width="16" />
                </button>
              </div>
            </div>
            <p className="font-bold tracking-widest">**** **** **** {String(card.card_no).slice(-4)}</p>
            <p className="text-xs text-gray-500 uppercase mt-2 font-bold">{card.name_on_card}</p>
            <p className="text-xs text-gray-400 mt-1">{card.expire_month}/{card.expire_year}</p>
          </div>
        ))}

        <div
          onClick={() => { setShowNewCardForm(true); setSelectedCardId(null); setEditingCard(null); setCvv(''); setNewCard({ card_no: '', expire_month: '', expire_year: '', name_on_card: '' }); }}
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all ${
            showNewCardForm && !editingCard ? 'border-[#23A6F0] text-[#23A6F0]' : 'border-gray-300 text-gray-400 hover:border-[#23A6F0]'
          }`}
        >
          <Icon icon="mdi:credit-card-plus" className="text-3xl mb-2" />
          <p className="font-bold text-sm">Başka Kart ile Öde</p>
        </div>
      </div>

      {showNewCardForm && (
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-md animate-slideDown">
          <h4 className="text-[#252B42] font-bold mb-4 text-sm">
            {editingCard ? "Kartı Düzenle" : "Yeni Kart Bilgileri"}
          </h4>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Kart Üzerindeki İsim"
              value={newCard.name_on_card}
              className="w-full p-3 border rounded-md outline-none focus:ring-1 focus:ring-[#23A6F0]"
              onChange={(e) => setNewCard({ ...newCard, name_on_card: e.target.value })}
            />
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              value={newCard.card_no}
              className="w-full p-3 border rounded-md outline-none focus:ring-1 focus:ring-[#23A6F0]"
              onChange={handleCardNumberChange}
            />
            <div className="grid grid-cols-3 gap-2">
              <input type="text" placeholder="MM" maxLength="2"
                value={newCard.expire_month}
                className="p-3 border rounded-md outline-none focus:ring-1 focus:ring-[#23A6F0]"
                onChange={(e) => setNewCard({ ...newCard, expire_month: e.target.value })} />
              <input type="text" placeholder="YY" maxLength="2"
                value={newCard.expire_year}
                className="p-3 border rounded-md outline-none focus:ring-1 focus:ring-[#23A6F0]"
                onChange={(e) => setNewCard({ ...newCard, expire_year: e.target.value })} />
              <input
                type="password"
                placeholder="CVV"
                autoComplete="new-password"
                value={cvv}
                onChange={handleCvvChange}
                maxLength="3"
                className="p-3 border rounded-md outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white"
              />
            </div>

            {/* Düzenleme modunda kaydet butonu, yeni kartta checkbox */}
            {editingCard ? (
              <button
                type="button"
                onClick={handleSubmitOrder}
                disabled={loading}
                className="w-full py-3 bg-[#23A6F0] text-white font-bold rounded-md hover:bg-[#1a8cd1] transition-all disabled:opacity-50"
              >
                {loading ? "Kaydediliyor..." : "Kartı Güncelle"}
              </button>
            ) : (
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="saveCardCheckbox"
                  className="w-4 h-4 accent-[#23A6F0] cursor-pointer"
                  checked={shouldSave}
                  onChange={(e) => setShouldSave(e.target.checked)}
                />
                <label htmlFor="saveCardCheckbox" className="text-xs font-bold text-[#737373] cursor-pointer">
                  Bu kartı sonraki alışverişlerim için güvenli bir şekilde kaydet
                </label>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-10 pt-6 border-t">
        <button onClick={onBack} className="text-gray-500 font-bold flex items-center gap-1 hover:text-black transition-colors">
          <Icon icon="mdi:chevron-left" /> Geri
        </button>
        {/* Düzenleme modunda alt buton gizlenir */}
        {!editingCard && (
          <button
            onClick={handleSubmitOrder}
            disabled={loading || (!selectedCardId && !showNewCardForm)}
            className="bg-[#23A6F0] text-white px-12 py-3 rounded-md font-bold shadow-md hover:bg-[#1a8cd1] active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "İşleniyor..." : "Onay Ekranına Geç"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;