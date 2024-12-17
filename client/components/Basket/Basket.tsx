import React from 'react';
import { Product } from '../../types';

interface BasketProps {
  basketItems: Product[];
}

const Basket = ({ basketItems }: BasketProps) => {
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          <ul>
            {basketItems.map((item) => (
              <li key={item.id} className="basket-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Basket;