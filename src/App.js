import { useState } from "react";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import HowWorks from "./components/HowWorks";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar openCart={() => setShowCart(true)} />
      <Hero />
      <HowWorks />
      <Meals />
      <Cart isOpen={showCart} handleClose={() => setShowCart(false)} />
    </>
  );
};

export default App;
