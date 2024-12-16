import React, { useState } from 'react';
import Basket from './Basket';
import useBasketStore from '../store/useBasketStore';


const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const basketItems = useBasketStore((state) => state.items);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <header>
      <div>
        <img src="/octopus-logo.svg" alt="Octopus Energy Logo" />
        <button onClick={toggleBasket}>
          <img src="/basket.svg" alt="Basket Icon" />
        </button>
      </div>

      {isBasketOpen && <Basket basketItems={basketItems} />}
    </header>
  );
};

export default Header;
