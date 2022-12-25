import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";

const Navbar = ({ openCart }) => {
  const { cartItems } = useCartContext();

  const cartItemsAmount = cartItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <nav className="w-full max-w-[1600px] flex items-center justify-between px-4 py-8 mx-auto">
      <h1 className="text-2xl md:text-3xl">
        Food<span className="bg-black text-white rounded-full px-2">Order</span>
      </h1>

      <button className="text-gray-500 relative" onClick={openCart}>
        <BsCart3 size={25} />
        {cartItems.length > 0 && (
          <span className="bg-red-600 px-2 text-white rounded-full absolute top-[calc(100%-0.7rem)]">
            {cartItemsAmount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
