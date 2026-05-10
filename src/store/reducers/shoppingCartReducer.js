const initialState = {
  cart: [],
  favorites: [],
  payment: {},
  address: {}
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productToAdd = action.payload.product;
      const quantity = action.payload.count || 1; 

      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItemIndex >= 0) {
        const updatedCart = state.cart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, count: item.count + quantity } 
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { count: quantity, checked: true, product: productToAdd }]
        };
      }

    case "TOGGLE_FAVORITE":
      const product = action.payload;
      const isFavorite = state.favorites.find(item => item.id === product.id);

      if (isFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter(item => item.id !== product.id)
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, product]
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload)
      };

    case "UPDATE_CART_ITEM_COUNT":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, count: Math.max(1, action.payload.count) } 
            : item
        )
      };

    case "TOGGLE_CHECK":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };
      
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };

    case "CLEAR_ORDER_DETAILS":
      return {
        ...state,
        address: {}, 
        payment: {}  
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