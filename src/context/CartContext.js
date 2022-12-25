import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);

  const increaseItemAmount = (itemId) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === itemId) == null) {
        return [...prevItems, { id: itemId, amount: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemAmount = (itemId) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === itemId).amount === 1) {
        return prevItems.filter((item) => item.id !== itemId);
      } else {
        return prevItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const getItemAmount = (itemId) => {
    return cartItems.find((item) => item.id === itemId)?.amount || 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseItemAmount,
        decreaseItemAmount,
        removeItem,
        getItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
