import React from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const favorites = useSelector((state) => state.shoppingCart?.favorites || []);
  const cart = useSelector((state) => state.shoppingCart?.cart || []);

  const totalItems = cart?.reduce((total, item) => total + item.count, 0) || 0;

  const isShopOrDetail = location.pathname.startsWith('/shop');
  const topBarColor = isShopOrDetail ? 'bg-[#23856D]' : 'bg-[#252B42]';

  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "SET_USER", payload: {} });
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <header className="w-full flex flex-col font-montserrat sticky top-0 z-50 shadow-sm">
      {/* 1. ÜST BAR */}
      <div className={`${topBarColor} text-white py-3 px-4 md:px-8 hidden lg:flex justify-between items-center text-sm font-bold transition-colors duration-300`}>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Icon icon="ic:outline-phone" className="text-lg" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ic:outline-email" className="text-lg" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-3">
          <span>Follow Us :</span>
          <div className="flex gap-3 text-lg">
            <Icon icon="ant-design:instagram-outlined" className="cursor-pointer" />
            <Icon icon="ant-design:youtube-filled" className="cursor-pointer" />
            <Icon icon="ant-design:facebook-filled" className="cursor-pointer" />
            <Icon icon="ant-design:twitter-outlined" className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. BEYAZ ANA NAVİGASYON */}
      <nav className="py-4 px-4 md:px-8 flex justify-between items-center bg-white">
        <div className="text-[#252B42] text-2xl font-bold tracking-tight">
          <Link to="/">Bandage</Link>
        </div>
        
        <ul className="hidden md:flex gap-5 text-[#737373] font-bold text-sm items-center">
          <li><Link to="/" className="hover:text-[#252B42]">Home</Link></li>
          
          <li className="relative flex items-center gap-1 cursor-pointer group py-2">
            <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-1">
              Shop <Icon icon="iconamoon:arrow-down-2-light" className="text-xl" />
            </Link>
            
            <div className="absolute hidden group-hover:flex top-full left-0 bg-white shadow-xl border border-gray-100 rounded-md p-6 min-w-[400px] gap-12 animate-fadeIn z-50">
              <div className="flex flex-col gap-3">
                <h3 className="text-[#252B42] text-base mb-2">Kadın</h3>
                {womenCategories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
                    className="font-normal text-[#737373] hover:text-[#23A6F0] transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-[#252B42] text-base mb-2">Erkek</h3>
                {menCategories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
                    className="font-normal text-[#737373] hover:text-[#23A6F0] transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li><Link to="/about" className="hover:text-[#252B42]">About</Link></li>
          <li><Link to="/blog" className="hover:text-[#252B42]">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-[#252B42]">Contact</Link></li>
          <li><Link to="/team" className="hover:text-[#252B42]">Team</Link></li>
        </ul>

        <div className="flex items-center gap-4 md:gap-6 text-[#23A6F0] font-bold text-sm">
          <div className="flex items-center gap-2">
            {user.name ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-[#23A6F0] flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <Icon icon="ic:baseline-person" className="text-xl" />
                  </div>
                  <span className="text-[#252B42]">{user.name}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-[#E74040] hover:text-red-700 text-xs font-bold transition-colors border border-[#E74040] px-2 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Icon icon="ic:outline-person" className="text-xl" />
                <div className="hidden sm:inline">
                  <Link to="/login" className="hover:underline">Login</Link>
                  <span> / </span>
                  <Link to="/signup" className="hover:underline">Register</Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-xl">
            <Icon icon="ic:outline-search" className="cursor-pointer text-[#23A6F0]" />
            
            {/* SEPET İKONU VE DROPDOWN */}
            <div className="relative group py-2">
              <Link to="/cart" className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                <Icon icon="ic:outline-shopping-cart" />
                <span className="text-xs font-normal">{totalItems}</span>
              </Link>
              
              {/* Hızlı Sepet Özeti Dropdown */}
              {cart.length > 0 && (
                <div className="absolute hidden group-hover:block right-0 top-full bg-white shadow-2xl border border-gray-100 rounded-lg w-72 p-4 z-50">
                  <h4 className="text-[#252B42] text-sm font-bold mb-3 border-b pb-2">Sepetim ({totalItems} Ürün)</h4>
                  <div className="max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-3 mb-3 border-b border-gray-50 pb-2">
                        <img src={item.product.images[0]?.url} alt="" className="w-12 h-12 object-cover rounded" />
                        <div className="flex flex-col">
                          <span className="text-[#252B42] text-xs truncate w-40">{item.product.name}</span>
                          <span className="text-[#737373] text-[10px]">Adet: {item.count}</span>
                          <span className="text-[#23856D] text-xs font-bold">${(item.product.price * item.count).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/cart" className="block text-center bg-[#23A6F0] text-white text-xs py-2 rounded mt-2 hover:bg-[#1a8cd1] transition-colors">
                    Sepete Git
                  </Link>
                </div>
              )}
            </div>

            {/* FAVORİ İKONU */}
            <Link to="/favorites" className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <Icon icon={favorites.length > 0 ? "ic:baseline-favorite" : "ic:outline-favorite-border"} className={favorites.length > 0 ? "text-red-500" : ""} />
              <span className="text-xs font-normal">{favorites.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;