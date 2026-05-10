import React, { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { axiosWithAuth } from "../api/axiosWithAuth";
import { toast } from 'react-toastify';
import AddressForm from './AddressForm';

const AddressSection = ({ onNext }) => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const fetchAddresses = useCallback(() => {
  return axiosWithAuth().get('/user/address')
    .then(res => {
      console.log("GELEN VERİ:", res.data); 
      setAddresses(res.data);
      setSelectedAddressId(prev =>
        prev === null && res.data.length > 0 ? res.data[0].id : prev
      );
    })
}, []);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      axiosWithAuth().delete(`/user/address/${id}`)
        .then(() => {
          toast.success("Adres silindi.");
          setAddresses(prev => prev.filter(a => a.id !== id));       
          setSelectedAddressId(prev => prev === id ? null : prev);
        })
        .catch(() => toast.error("Silme işlemi başarısız."));
    }
  };

  const handleEdit = (e, addr) => {
    e.stopPropagation();
    e.preventDefault();
    setEditingAddress(addr);
    setShowForm(true);
  };

  return (
    <div className="p-2">
      <h2 className="text-xl font-bold mb-6 text-[#252B42]">Teslimat Adresi</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            onClick={() => setSelectedAddressId(addr.id)}
            className={`border-2 p-4 rounded-lg cursor-pointer relative transition-all h-full min-h-[160px] flex flex-col justify-between ${
              selectedAddressId === addr.id ? 'border-[#23A6F0] bg-blue-50/30' : 'border-[#ECECEC]'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-[#252B42] text-sm">{addr.title}</span>
                <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={(e) => handleEdit(e, addr)}
                    className="p-2 text-blue-500 hover:bg-white rounded-full shadow-sm"
                  >
                    <Icon icon="mdi:pencil" width="18" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleDelete(e, addr.id)}
                    className="p-2 text-red-500 hover:bg-white rounded-full shadow-sm"
                  >
                    <Icon icon="mdi:trash-can" width="18" />
                  </button>
                </div>
              </div>
              <p className="text-sm font-semibold">{addr.name} {addr.surname}</p>
              <p className="text-xs text-gray-500 mt-1">{addr.phone}</p>
            </div>
            <p className="text-[11px] text-gray-400 mt-2 line-clamp-2">
              {addr.neighborhood} {addr.district}/{addr.city}
            </p>
          </div>
        ))}

        <div
          onClick={() => { setEditingAddress(null); setShowForm(true); }}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#23A6F0] hover:text-[#23A6F0] text-gray-400 min-h-[160px]"
        >
          <Icon icon="mdi:plus" width="32" />
          <p className="font-bold text-xs mt-2">Yeni Adres Ekle</p>
        </div>
      </div>

      {showForm && (
        <AddressForm
          onClose={() => setShowForm(false)}
          onAddressUpdated={fetchAddresses}
          editData={editingAddress}
        />
      )}

      <div className="flex justify-end mt-8 pt-4 border-t">
        <button
          onClick={onNext}
          disabled={!selectedAddressId}
          className="bg-[#23A6F0] text-white px-12 py-3 rounded font-bold hover:shadow-lg disabled:opacity-50 transition-all uppercase text-sm tracking-wider"
        >
          Devam Et
        </button>
      </div>
    </div>
  );
};

export default AddressSection;