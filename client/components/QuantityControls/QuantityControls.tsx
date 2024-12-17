import React, { useState } from 'react';
import * as Styled from './QuantityControls.style';
import Button from '../Button/Button';
import { Product } from '../../types';
import { formatPrice } from '../../utils/utils';

interface QuantityControlsProps {
  product: Product;
  onAddToCart: (quantity: number, setError: (error: string | null) => void) => void;
}

export const QuantityControls = ({ product, onAddToCart }: QuantityControlsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const incrementQuantity = () => {
    if (product.quantity > 0) {
      setQuantity((prev) => prev + 1);
      if (error) setError(null);
    }
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    if (error) setError(null);
  };

  const handleAddToCart = () => {
    if (product.quantity === 0) {
      setError('Sorry, this item is out of stock');
    } else {
      onAddToCart(quantity, setError);
      if (!error) setQuantity(1); // Reset quantity only if there’s no error
    }
  };

  return (
    <Styled.QtyContainer>
      <Styled.PriceQtyContainer>
        <div>
          <Styled.PriceTxt>£{formatPrice(product.price)}</Styled.PriceTxt>
        </div>
        <Styled.QuantityDataContainer>
          <div>
            <Styled.QuantityTxt>Qty</Styled.QuantityTxt>
          </div>
          <Styled.QuantityCtrlContainer>
            <Styled.QuantitybtnContainer>
              <Button
                onClick={decrementQuantity}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0px',
                  borderRadius: '5px',
                }}
                disabled={quantity === 1}
              >
                -
              </Button>
            </Styled.QuantitybtnContainer>
            <Styled.QtyTxt title='Current quantity'>{quantity}</Styled.QtyTxt>
            <Styled.QuantitybtnContainer>
              <Button
                onClick={incrementQuantity}
                disabled={quantity === 0}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0px',
                  borderRadius: '5px',
                }}
              >
                +
              </Button>
            </Styled.QuantitybtnContainer>
          </Styled.QuantityCtrlContainer>
        </Styled.QuantityDataContainer>
      </Styled.PriceQtyContainer>

      <Styled.BtnContainer>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </Styled.BtnContainer>

      {error && (
        <Styled.ErrorContainer>
          <p data-testid='error-message'>{error}</p>
        </Styled.ErrorContainer>
      )}
    </Styled.QtyContainer>
  );
};
