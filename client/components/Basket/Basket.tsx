import React from 'react';
import { Product } from '../../types';
import {
  BasketWrapper,
  BasketHeader,
  BasketContent,
  BasketItem,
  CloseBtn,
  EmptyBasketMessage,
} from './Basket.style';

interface BasketProps {
  basketItems: Product[];
  isBasketVisable: boolean;
  onClose: () => void;
}

const Basket = ({ basketItems, isBasketVisable, onClose }: BasketProps) => {
  return (
    <BasketWrapper $isBasketVisable={isBasketVisable}>
      <BasketHeader>
        <h2>Your Basket</h2>
      </BasketHeader>
      <CloseBtn onClick={onClose}>
        x
      </CloseBtn>
      <BasketContent>
        {basketItems.length === 0 ? (
          <EmptyBasketMessage>Your basket is empty.</EmptyBasketMessage>
        ) : (
          <ul>
            {basketItems.map((item) => (
              <BasketItem key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: £{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: £{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </BasketItem>
            ))}
          </ul>
        )}
      </BasketContent>
    </BasketWrapper>
  );
};

export default Basket;