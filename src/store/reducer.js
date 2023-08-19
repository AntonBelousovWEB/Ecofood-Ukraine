const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TO_CART':
          const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

          if (existingItemIndex !== -1) {
              const updatedCart = [...state.cart];
              updatedCart[existingItemIndex] = {
                  ...updatedCart[existingItemIndex],
                  quantity: updatedCart[existingItemIndex].quantity + 1,
              };

              return {
                  ...state,
                  cart: updatedCart,
              };
          } else {
              return {
                  ...state,
                  cart: [...state.cart, { ...action.payload, quantity: 1 }],
              };
          }

      case 'REMOVE_FROM_CART':
            const itemToRemove = state.cart.find(item => item.id === action.payload);
            
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    const updatedCart = state.cart.map(item => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return item;
                    });

                    return {
                        ...state,
                        cart: updatedCart,
                    };
                } else {
                    return {
                        ...state,
                        cart: state.cart.filter(item => item.id !== action.payload),
                    };
                }
            }
            
            return state;

      default:
          return state;
  }
};

export default cartReducer;