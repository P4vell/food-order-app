import { useCartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

const MealCard = ({ meal }) => {
  const { increaseItemAmount, decreaseItemAmount, removeItem, getItemAmount } =
    useCartContext();

  const amount = getItemAmount(meal.id);

  return (
    <div className="flex flex-col items-center border shadow-md w-full max-w-[380px]">
      <div className="w-full h-44">
        <img src={meal.imgUrl} alt="/" className="w-full h-full object-cover" />
      </div>

      <div className="w-full flex items-center justify-between p-2 font-medium text-lg">
        <span>{meal.name}</span>
        <span>{currencyFormatter.format(meal.price)}</span>
      </div>

      <div className="p-2">
        {amount === 0 && (
          <button
            className="bg-orange-600 text-white px-2 py-1 rounded-md"
            onClick={() => increaseItemAmount(meal.id)}
          >
            Add to cart
          </button>
        )}

        {amount > 0 && (
          <div className="flex flex-col gap-2">
            <div>
              <button
                className="bg-orange-600 text-white px-2 rounded text-xl"
                onClick={() => decreaseItemAmount(meal.id)}
              >
                -
              </button>
              <span className="px-2 text-xl font-medium">{amount}</span>
              <button
                className="bg-orange-600 text-white px-2 rounded text-xl"
                onClick={() => increaseItemAmount(meal.id)}
              >
                +
              </button>
            </div>

            <button
              className="bg-red-600 text-white px-2 py-1 rounded-md"
              onClick={() => removeItem(meal.id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;
