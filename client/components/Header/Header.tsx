import React, { useState } from 'react';
import Image from 'next/image';
import * as Styled from './Header.style';
import Basket from '../Basket/Basket';
import useBasketStore from '../../store/useBasketStore';

const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const basketItems = useBasketStore((state) => state.items);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const totalQuantity = basketItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Icon alt="Octopus Energy Logo" src="/octopus-logo.svg" />
        <Styled.Toggle onClick={toggleBasket}>
          <Image alt="Basket Icon" src="/basket.svg"
            width={'30px'}
            height={'30px'}
            priority />

          {totalQuantity > 0 && <Styled.TotalQuantity title="Basket items">{totalQuantity}</Styled.TotalQuantity>}
        </Styled.Toggle>
      </Styled.Wrapper>

      {isBasketOpen && <Basket basketItems={basketItems} />}
    </Styled.Header>
  );
};

export default Header;
