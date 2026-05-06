import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetail } from '../store/actions/productActions';
import { addToCart, toggleFavorite } from "../store/actions/shoppingCartActions"; // toggleFavorite eklendi
import { toast } from 'react-toastify';

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId, gender, categoryName } = useParams();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [count, setCount] = useState(1);
  
  const { productDetail, fetchState } = useSelector((state) => state.product);
  
  // Favori listesini çekiyoruz
  const favorites = useSelector((state) => state.shoppingCart?.favorites || []);
  
  // Bu ürün favorilerde mi?
  const isFavorite = favorites.some(item => item.id === Number(productId));

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
      setActiveImg(0);
      setCount(1);
      window.scrollTo(0, 0);
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    if (productDetail) {
      dispatch(addToCart(productDetail, count)); 
      toast.success(`${productDetail.name} x ${count} sepete eklendi!`);
    }
  };

  // Favoriye ekle/çıkar fonksiyonu
  const handleToggleFavorite = () => {
    if (productDetail) {
      dispatch(toggleFavorite(productDetail));
      if (!isFavorite) {
        toast.success("Favorilere eklendi!", { icon: "❤️" });
      } else {
        toast.info("Favorilerden çıkarıldı.");
      }
    }
  };

  const bestsellerProducts = Array(8).fill({
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    img: "https://picsum.photos/300/400"
  });

  if (fetchState === "FETCHING" || !productDetail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#23A6F0]"></div>
        <p className="mt-4 text-[#737373] font-bold">Fetching Product Details...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFFFFF] font-montserrat min-h-screen">
      
      {/* 1. BÖLÜM: BREADCRUMB */}
      <div className="bg-[#FAFAFA]">
        <div className="px-4 md:px-44 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-sm">
            <Link to="/" className="text-[#252B42]">Home</Link>
            <Icon icon="ic:outline-keyboard-arrow-right" className="text-[#BDBDBD] text-2xl" />
            <Link to="/shop" className="text-[#252B42]">Shop</Link>
            <Icon icon="ic:outline-keyboard-arrow-right" className="text-[#BDBDBD] text-2xl" />
            <span className="text-[#252B42] capitalize">{gender}</span>
            <Icon icon="ic:outline-keyboard-arrow-right" className="text-[#BDBDBD] text-2xl" />
            <span className="text-[#BDBDBD] capitalize">{categoryName?.replace("-", " ")}</span>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm hover:opacity-70"
          >
            <Icon icon="ic:outline-arrow-back" /> Back
          </button>
        </div>
      </div>

      {/* 2. BÖLÜM: ÜRÜN ANA PANELİ */}
      <div className="bg-[#FAFAFA]">
        <div className="px-4 md:px-44 pb-12 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative group overflow-hidden bg-white rounded-md shadow-sm border border-[#ECECEC]">
              <img 
                src={productDetail?.images?.[activeImg]?.url || productDetail?.images?.[0]?.url || "https://via.placeholder.com/500"} 
                className="w-full h-[500px] object-contain transition-all duration-300" 
                alt={productDetail?.name} 
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productDetail?.images?.length > 0 && productDetail.images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img.url} 
                  onClick={() => setActiveImg(idx)}
                  className={`w-24 h-24 object-cover rounded border cursor-pointer transition-all ${
                    activeImg === idx ? 'border-2 border-[#23A6F0] opacity-100' : 'opacity-60 hover:opacity-100'
                  }`} 
                  alt={`thumbnail ${idx}`} 
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-5 pt-2">
            <h3 className="text-[#252B42] text-xl font-normal">{productDetail?.name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex text-[#F3CD03] text-xl">
                <Icon icon="ic:baseline-star" /><Icon icon="ic:baseline-star" /><Icon icon="ic:baseline-star" /><Icon icon="ic:baseline-star" /><Icon icon="ic:outline-star-border" />
              </div>
              <span className="text-[#737373] font-bold text-sm">{productDetail?.rating} / 5</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h4 className="text-[#252B42] text-2xl font-bold">
                {productDetail?.price ? `$${productDetail.price}` : ""}
              </h4>
              <p className="text-sm font-bold">
                <span className="text-[#737373]">Availability : </span>
                <span className={(productDetail?.stock && productDetail.stock > 0) ? "text-[#23A6F0]" : "text-red-500"}>
                  {(productDetail?.stock && productDetail.stock > 0) ? `In Stock (${productDetail.stock})` : "Out of Stock"}
                </span>
              </p>
            </div>

            <p className="text-[#858585] text-sm leading-relaxed max-w-md">
              {productDetail?.description}
            </p>
            <hr className="border-[#BDBDBD] w-full mt-4" />
            
            <div className="flex gap-2.5 mt-2">
              <div className="w-8 h-8 bg-[#23A6F0] rounded-full cursor-pointer hover:scale-110"></div>
              <div className="w-8 h-8 bg-[#2DC071] rounded-full cursor-pointer hover:scale-110"></div>
              <div className="w-8 h-8 bg-[#E77C40] rounded-full cursor-pointer hover:scale-110"></div>
              <div className="w-8 h-8 bg-[#252B42] rounded-full cursor-pointer hover:scale-110"></div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-4">
                <span className="text-[#252B42] font-bold text-sm">Quantity:</span>
                <div className="flex items-center border border-[#E8E8E8] rounded-md overflow-hidden bg-white">
                  <button onClick={() => count > 1 && setCount(count - 1)} className="px-4 py-2 hover:bg-gray-100 font-bold">-</button>
                  <span className="px-6 py-2 font-bold min-w-[50px] text-center border-x border-[#E8E8E8]">{count}</span>
                  <button onClick={() => setCount(count + 1)} className="px-4 py-2 hover:bg-gray-100 font-bold">+</button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  disabled={!productDetail?.stock || productDetail?.stock === 0}
                  onClick={handleAddToCart}
                  className={`px-10 py-3 rounded-md font-bold text-sm shadow-md transition-all ${
                    (productDetail?.stock && productDetail.stock > 0)
                    ? "bg-[#23A6F0] text-white hover:bg-[#1a8cd1] active:scale-95" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {(productDetail?.stock && productDetail.stock > 0) ? "Add to Cart" : "Out of Stock"}
                </button>
                <div className="flex gap-2">
                  {/* FAVORİ (KALP) BUTONU GÜNCELLENDİ */}
                  <button 
                    onClick={handleToggleFavorite}
                    className="p-3 bg-white border border-[#E8E8E8] rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <Icon 
                      icon={isFavorite ? "ic:baseline-favorite" : "ic:outline-favorite-border"} 
                      className={`text-xl ${isFavorite ? "text-red-500" : "text-[#252B42]"}`} 
                    />
                  </button>
                  <button className="p-3 bg-white border border-[#E8E8E8] rounded-full hover:bg-gray-50"><Icon icon="ic:outline-shopping-cart" className="text-xl text-[#252B42]" /></button>
                  <button className="p-3 bg-white border border-[#E8E8E8] rounded-full hover:bg-gray-50"><Icon icon="ic:outline-visibility" className="text-xl text-[#252B42]" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BÖLÜM: DESCRIPTION TABS */}
      <div className="w-full bg-white border-t border-[#ECECEC]">
        <div className="flex justify-center gap-8 py-8 text-sm font-bold text-[#737373]">
          <button className="pb-2 border-b-2 border-[#23A6F0] text-[#252B42]">Description</button>
          <button className="pb-2 border-b-2 border-transparent hover:text-[#252B42]">Additional Information</button>
          <button className="pb-2 border-b-2 border-transparent hover:text-[#252B42]">Reviews (0)</button>
        </div>
        <div className="px-4 md:px-44 py-12 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h3 className="text-[#252B42] text-2xl font-bold mb-4">Product Summary</h3>
            <p className="text-[#737373] text-sm leading-6">{productDetail?.description}</p>
          </div>
          <div className="w-full md:w-1/3">
            <img src={productDetail?.images?.[0]?.url || "https://via.placeholder.com/400x500"} className="w-full rounded-lg shadow-lg object-cover" alt="summary" />
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-[#252B42] text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-4">
              {[1,2,3].map(i => (
                <li key={i} className="flex items-center gap-2 text-[#737373] text-sm font-bold">
                  <Icon icon="ic:outline-keyboard-arrow-right" className="text-xl text-[#BDBDBD]" />
                  High quality material and durable design
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. BÖLÜM: BESTSELLER PRODUCTS */}
      <div className="bg-[#FAFAFA] py-16 px-4 md:px-44">
        <h3 className="text-[#252B42] text-2xl font-bold mb-8 uppercase tracking-wider">Bestseller Products</h3>
        <hr className="mb-10 border-[#ECECEC]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestsellerProducts.map((p, index) => (
            <div key={index} className="bg-white shadow-sm flex flex-col group cursor-pointer transition-transform hover:-translate-y-1">
              <img src={`${p.img}?sig=${index}`} alt={p.title} className="w-full aspect-[3/4] object-cover" />
              <div className="p-4 flex flex-col items-center gap-2">
                <h5 className="font-bold text-[#252B42]">{p.title}</h5>
                <p className="text-[#737373] text-sm font-bold">{p.dept}</p>
                <div className="flex gap-2 font-bold">
                  <span className="text-[#BDBDBD] line-through">{p.oldPrice}</span>
                  <span className="text-[#23856D]">{p.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BÖLÜM: CLIENT LOGOS */}
      <div className="bg-[#FAFAFA] py-12 border-t border-[#ECECEC]">
        <div className="px-4 md:px-44 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          <Icon icon="fa6-brands:hooli" className="text-7xl" />
          <Icon icon="fa6-brands:lyft" className="text-5xl" />
          <Icon icon="fa6-brands:pied-piper-hat" className="text-6xl" />
          <Icon icon="fa6-brands:stripe" className="text-6xl" />
          <Icon icon="fa6-brands:aws" className="text-5xl" />
          <Icon icon="fa6-brands:reddit-alien" className="text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;