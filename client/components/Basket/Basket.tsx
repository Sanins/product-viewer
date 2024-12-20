import React from 'react';
import { Product } from '../../types';
import * as Styled from './Basket.style';
import { formatPrice } from '../../utils/utils';

interface BasketProps {
  basketItems: Product[];
  isBasketVisable: boolean;
  onClose: () => void;
}

const Basket = ({ basketItems, isBasketVisable, onClose }: BasketProps) => {
  return (
    <Styled.BasketWrapper $isBasketVisable={isBasketVisable} data-testid="basket-wrapper">
      <Styled.BasketHeader>
        <h2>Your Basket</h2>
      </Styled.BasketHeader>
      <Styled.CloseBtn onClick={onClose}>
        x
      </Styled.CloseBtn>
      <Styled.BasketContent>
        {basketItems.length === 0 ? (
          <Styled.EmptyBasketMessage>Your basket is empty.</Styled.EmptyBasketMessage>
        ) : (
          <Styled.List>
            {basketItems.map((item) => (
              <Styled.BasketItem key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: £{formatPrice(item.price)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: £{formatPrice((item.price * item.quantity))}</p>
                </div>
              </Styled.BasketItem>
            ))}
          </Styled.List>
        )}
      </Styled.BasketContent>
    </Styled.BasketWrapper>
  );
};

export default Basket;