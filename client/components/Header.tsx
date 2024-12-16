import React, { useState } from 'react';
import * as Styled from './Header.style';
import Basket from './Basket';
import useBasketStore from '../store/useBasketStore';

const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const basketItems = useBasketStore((state) => state.items);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const totalQuantity = basketItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Styled.Wrapper>
        <img src="/octopus-logo.svg" alt="Octopus Energy Logo" />
        <button onClick={toggleBasket}>
          <img src="/basket.svg" alt="Basket Icon" />
          {totalQuantity > 0 && <p title="Basket items">{totalQuantity}</p>}
        </button>
      </Styled.Wrapper>

      {isBasketOpen && <Basket basketItems={basketItems} />}
    </header>
  );
};

export default Header;
