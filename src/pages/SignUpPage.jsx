import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API } from '../api/axiosInstance';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: { role_id: '3' }
  });

  const selectedRoleId = watch("role_id");

  useEffect(() => {
    API.get('/roles')
      .then(res => setRoles(res.data))
      .catch(err => toast.error("Roller yüklenemedi."));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxId,
        bank_account: data.storeIban,
      };
    }

    try {
      await API.post('/signup', payload);
      toast.success("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!");
      navigate(-1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Kayıt başarısız!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-16 bg-gray-50 min-h-[70vh] font-montserrat">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-[#252B42] text-center">Sign Up</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-1">
            <label className="font-bold text-[#252B42]">Name *</label>
            <input 
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 characters" } })}
              className="border p-3 rounded bg-gray-50 focus:outline-[#23A6F0]"
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-[#252B42]">Email *</label>
            <input 
              type="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
              })}
              className="border p-3 rounded bg-gray-50 focus:outline-[#23A6F0]"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-[#252B42]">Password *</label>
            <input 
              type="password"
              {...register("password", { 
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Min 8 chars, 1 Upper, 1 Lower, 1 Number, 1 Special Char"
                }
              })}
              className="border p-3 rounded bg-gray-50 focus:outline-[#23A6F0]"
              placeholder="Password"
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-[#252B42]">Confirm Password *</label>
            <input 
              type="password"
              {...register("confirmPassword", { 
                validate: value => value === watch('password') || "Passwords do not match"
              })}
              className="border p-3 rounded bg-gray-50 focus:outline-[#23A6F0]"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-[#252B42]">Role</label>
            <select {...register("role_id")} className="border p-3 rounded bg-gray-50">
              {roles.map(role => (
                <option key={role.id} value={role.id.toString()}>{role.name}</option>
              ))}
            </select>
          </div>

          {selectedRoleId === "2" && (
            <div className="flex flex-col gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in duration-300">
              <div>
                <label className="font-bold text-sm">Store Name *</label>
                <input {...register("storeName", { required: true, minLength: 3 })} className="w-full border p-2 rounded mt-1" />
              </div>
              <div>
                <label className="font-bold text-sm">Store Phone *</label>
                <input {...register("storePhone", { required: true, pattern: /^[0-9]{10,11}$/ })} className="w-full border p-2 rounded mt-1" placeholder="05XXXXXXXXX" />
              </div>
              <div>
                <label className="font-bold text-sm">Store Tax ID *</label>
                <input {...register("storeTaxId", { required: true, pattern: /^T\d{4}V\d{6}$/ })} className="w-full border p-2 rounded mt-1" placeholder="TXXXXVXXXXXX" />
              </div>
              <div>
                <label className="font-bold text-sm">Store Bank Account (IBAN) *</label>
                <input {...register("storeIban", { required: true })} className="w-full border p-2 rounded mt-1" placeholder="TR..." />
              </div>
            </div>
          )}

          <button 
            type="submit" 
            disabled={!isValid || isLoading}
            className="bg-[#23A6F0] text-white p-4 rounded font-bold mt-4 flex justify-center items-center gap-2 disabled:bg-gray-400 transition-all active:scale-95"
          >
            {isLoading && <Icon icon="line-md:loading-twotone-loop" className="text-xl" />}
            {isLoading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;