import { mealsData } from "../data/meals";
import { BiTrash } from "react-icons/bi";
import { useCartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

const CartItem = ({ itemId, amount }) => {
  const { removeItem } = useCartContext();
  const cartItem = mealsData.find((item) => item.id === itemId);

  return (
    <div className="flex items-center h-24 my-4">
      <div className="w-24 h-full">
        <img
          src={cartItem.imgUrl}
          alt="/"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <p className="px-4 text-lg">
        {cartItem.name} x {amount}{" "}
        <span className="font-bold">{currencyFormatter.format(cartItem.price * amount)}</span>
      </p>

      <button onClick={() => removeItem(itemId)}>
        <BiTrash size={25} />
      </button>
    </div>
  );
};

export default CartItem;
