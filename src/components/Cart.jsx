import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useCartContext } from "../context/CartContext";
import { mealsData } from "../data/meals";
import { currencyFormatter } from "../utils/currencyFormatter";
import CartItem from "./CartItem";

const Cart = ({ isOpen, handleClose }) => {
  const { cartItems } = useCartContext();

  return ReactDOM.createPortal(
    <div
      className={
        isOpen ? "fixed w-full h-screen left-0 top-0 bg-black/50" : "invisible"
      }
    >
      <div
        className={
          isOpen
            ? "fixed w-[70%] md:w-[50%] lg:w-[30%] h-screen right-0 top-0 bg-white duration-300"
            : "fixed w-[70%] md:w-[50%] lg:w-[30%] h-screen right-[-100%] top-0 bg-white duration-300"
        }
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-3xl font-medium">Cart</h1>

          <button className="text-gray-500" onClick={handleClose}>
            <AiOutlineClose size={25} />
          </button>
        </div>

        {cartItems.length === 0 && (
          <p className="text-2xl text-gray-500 text-center py-8">
            Cart is empty
          </p>
        )}

        <div className="p-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} itemId={item.id} amount={item.amount} />
          ))}
        </div>

        <span className="text-2xl font-bold pl-4">
          Total:{" "}
          {currencyFormatter.format(
            cartItems.reduce((total, cartItem) => {
              const item = mealsData.find((meal) => meal.id === cartItem.id);
              return total + item.price * cartItem.amount;
            }, 0)
          )}
        </span>
      </div>
    </div>,
    document.getElementById("cart")
  );
};

export default Cart;
