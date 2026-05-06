const initialState = {
  cart: [],
  favorites: [], // Favoriler burada tutulacak
  payment: {},
  address: {}
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productToAdd = action.payload.product;
      const quantity = action.payload.count || 1; // Gelen adet, gelmezse 1

      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItemIndex >= 0) {
        // Ürün zaten varsa, var olan adetin üstüne ekle
        const updatedCart = state.cart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, count: item.count + quantity } 
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        // Ürün yeni ekleniyorsa, seçilen adetle ve checked: true olarak ekle
        return {
          ...state,
          cart: [...state.cart, { count: quantity, checked: true, product: productToAdd }]
        };
      }

    case "TOGGLE_FAVORITE":
      const product = action.payload;
      const isFavorite = state.favorites.find(item => item.id === product.id);

      if (isFavorite) {
        // Ürün zaten favorilerdeyse çıkart
        return {
          ...state,
          favorites: state.favorites.filter(item => item.id !== product.id)
        };
      } else {
        // Ürün favorilerde yoksa ekle
        return {
          ...state,
          favorites: [...state.favorites, product]
        };
      }

    case 'REMOVE_FROM_CART':
      // Sipariş listesinden tek bir ürünü ID bazlı siler
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload)
      };

    case "UPDATE_CART_ITEM_COUNT":
      // Adet güncelleme (T18 gereksinimi: artırma/azaltma)
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, count: Math.max(1, action.payload.count) } // 1'den az olamaz
            : item
        )
      };

    case "TOGGLE_CHECK":
      // T18: Ürün sipariş listesinde seçili mi değil mi? (Checkbox kontrolü)
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };
      
    case "CLEAR_CART":
      // Sipariş tamamlandığında sepeti boşaltır
      return {
        ...state,
        cart: []
      };

    case "CLEAR_ORDER_DETAILS":
      return {
        ...state,
        address: {}, // Seçili olan teslimat adresini temizler
        payment: {}  // State'teki kart bilgilerini temizler
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };




    default:
      return state;
  }
};

export default shoppingCartReducer;