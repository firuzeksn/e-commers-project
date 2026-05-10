import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 25;

  const { categories, products, total, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    dispatch(fetchProducts(categoryId, filterText, sortOption, limit, offset));
  }, [dispatch, categoryId, filterText, sortOption, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, filterText, sortOption]);

  const topFive = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const totalPages = Math.ceil((total || 0) / limit);

  return (
    <div className="w-full bg-white font-montserrat">
      <div className="bg-[#FAFAFA] py-10 px-4 md:px-44 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-[#252B42] text-2xl font-bold">Shop</h2>
        <div className="flex items-center gap-2 font-bold text-sm">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <Icon icon="ic:outline-keyboard-arrow-right" className="text-[#BDBDBD] text-2xl" />
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      <div className="bg-[#FAFAFA] pb-12 px-4 md:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {topFive.map((item) => (
            <Link 
              key={item.id} 
              to={`/shop/${item.gender === 'k' ? 'kadin' : 'erkek'}/${item.title.toLowerCase()}/${item.id}`}
              className="relative h-[220px] cursor-pointer group overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-white text-center p-2">
                <h5 className="font-bold text-base uppercase">{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-6 px-4 md:px-44 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#737373] font-bold text-sm">
          Showing {products?.length || 0} of {total || 0} results
        </p>
        <div className="flex items-center gap-4">
          <input 
            type="text"
            className="border border-[#DDDDDD] p-2 rounded-md outline-none text-sm"
            placeholder="Search products..."
            onChange={(e) => setFilterText(e.target.value)}
          />
          <select 
            className="bg-[#F9F9F9] border border-[#DDDDDD] p-3 rounded-md text-[#737373] text-sm outline-none cursor-pointer"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="">Sort By</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
        </div>
      </div>

      <div className="px-4 md:px-44 py-16 min-h-[400px]">
        {fetchState === "FETCHING" ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products?.map((product) => {
              const category = categories.find(c => c.id === product.category_id);
              const categoryName = category ? category.title.toLowerCase() : "product";
              const gender = product.gender === "k" ? "kadin" : "erkek";
              const slug = createSlug(product.name);

              return (
                <Link 
                  to={`/shop/${gender}/${categoryName}/${product.category_id}/${slug}/${product.id}`} 
                  key={product.id} 
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden mb-6 rounded-sm bg-gray-100 shadow-sm group-hover:shadow-md transition-all">
                    <img src={product.images[0]?.url} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={product.name} />
                  </div>
                  <h5 className="text-[#252B42] font-bold text-base mb-2">{product.name}</h5>
                  <p className="text-[#737373] font-bold text-sm mb-3 line-clamp-1 px-2">{product.description}</p>
                  <div className="text-[#23856D] font-bold text-base">${product.price}</div>
                </Link>
              );
            })}
          </div>
        )}

        {fetchState === "FETCHED" && totalPages > 1 && (
          <div className="flex justify-center mt-24">
            <div className="flex border border-[#E8E8E8] rounded-lg overflow-hidden font-bold">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)} className="px-6 py-6 bg-[#F3F3F3] text-[#23A6F0] border-r disabled:text-[#BDBDBD]">First</button>
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className="px-4 py-6 text-[#23A6F0] border-r disabled:text-[#BDBDBD]">Prev</button>
              <span className="px-8 py-6 bg-[#23A6F0] text-white border-r">{currentPage}</span>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} className="px-4 py-6 text-[#23A6F0] border-r disabled:text-[#BDBDBD]">Next</button>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)} className="px-6 py-6 text-[#23A6F0] disabled:text-[#BDBDBD]">Last</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;