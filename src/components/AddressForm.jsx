import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../api/axiosWithAuth';
import { toast } from 'react-toastify';

const AddressForm = ({ onClose, onAddressUpdated, editData }) => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    reset(editData || { title: '', name: '', surname: '', phone: '', city: '', district: '', neighborhood: '' });
  }, [editData, reset]);

  const onSubmit = (data) => {
    const payload = { ...data, phone: data.phone.replace(/\s/g, '') };

    const request = editData
      ? axiosWithAuth().put('/user/address', { ...payload, id: editData.id })
      : axiosWithAuth().post('/user/address', payload);

    request
      .then(() => {
        toast.success(editData ? "Adres güncellendi!" : "Adres kaydedildi!");
        onClose();                  // Önce modalı kapat
        onAddressUpdated?.();       // Sonra listeyi güncelle — async bekleme yok
      })
      .catch(err => {
        console.error("Hata:", err);
        toast.error("İşlem başarısız!");
      });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-xl font-bold text-[#252B42]">
            {editData ? "Adresi Güncelle" : "Yeni Adres Ekle"}
          </h2>
          <button onClick={onClose} className="text-3xl text-gray-400 hover:text-red-500">&times;</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Adres Başlığı</label>
            <input {...register("title", { required: true })} placeholder="Ev, İş vb."
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input {...register("name", { required: true })} placeholder="Ad" className="border p-3 rounded-lg" />
            <input {...register("surname", { required: true })} placeholder="Soyad" className="border p-3 rounded-lg" />
          </div>
          <input {...register("phone", { required: true })} placeholder="Telefon" className="w-full border p-3 rounded-lg" />
          <div className="grid grid-cols-2 gap-4">
            <input {...register("city", { required: true })} placeholder="Şehir" className="border p-3 rounded-lg" />
            <input {...register("district", { required: true })} placeholder="İlçe" className="border p-3 rounded-lg" />
          </div>
          <textarea {...register("neighborhood", { required: true })} placeholder="Adres detayı..."
            className="w-full border p-3 rounded-lg h-24 resize-none" />

          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 font-bold text-gray-500 hover:bg-gray-100 rounded-lg">
              İptal
            </button>
            <button type="submit" disabled={isSubmitting}
              className="flex-1 py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-blue-600 transition-all disabled:opacity-50">
              {isSubmitting ? "Kaydediliyor..." : (editData ? "Güncelle" : "Kaydet")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;