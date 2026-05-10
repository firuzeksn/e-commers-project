import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { loginUser } from '../store/actions/clientActions';

const LoginPage = () => {
  // watch ekledik ki gerekirse izleyebilelim
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    // Redux action'ına veriyi gönderiyoruz
    dispatch(loginUser(data, navigate));
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] font-montserrat">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-[#252B42] text-center mb-8">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          
          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#252B42]">Email Address</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email girmek zorunludur"
              })}
              placeholder="example@mail.com"
              className="border-2 border-gray-200 p-3 rounded-md focus:border-[#23A6F0] outline-none transition-all"
            />
            {errors.email && <span className="text-red-500 text-sm font-bold">{errors.email.message}</span>}
          </div>

          {/* PASSWORD - Login'de kısıtlamaları kaldırdık, sadece 'required' bıraktık */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#252B42]">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Şifre girmek zorunludur" 
              })}
              placeholder="******"
              className="border-2 border-gray-200 p-3 rounded-md focus:border-[#23A6F0] outline-none transition-all"
            />
            {errors.password && <span className="text-red-500 text-sm font-bold">{errors.password.message}</span>}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" {...register("remember")} />
            <label htmlFor="remember" className="text-sm font-bold text-[#737373]">Remember Me</label>
          </div>

          <button 
            type="submit" 
            className="bg-[#23A6F0] text-white py-4 rounded-md font-bold text-lg hover:bg-[#1a85c2] transition-colors shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;