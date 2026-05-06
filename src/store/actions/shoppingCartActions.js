// shoppingCartActions.js

// Aksiyon Tipleri
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const TOGGLE_CHECK = "TOGGLE_CHECK";
export const CLEAR_CART = "CLEAR_CART";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"; // Tip tanımı

// Aksiyon Oluşturucular
export const addToCart = (product, count = 1) => ({
  type: ADD_TO_CART,
  payload: { product, count }
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const updateCartItemCount = (productId, count) => ({
  type: UPDATE_CART_ITEM_COUNT,
  payload: { productId, count }
});

export const toggleCheck = (productId) => ({
  type: TOGGLE_CHECK,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

// İŞTE HATA BURADAYDI: Başına 'export' eklediğimizden emin olalım
export const toggleFavorite = (product) => ({
  type: TOGGLE_FAVORITE,
  payload: product
});