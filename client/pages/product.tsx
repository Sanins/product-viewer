import React, { useState } from 'react';
import Image from 'next/image';
import type { Product } from '../types';
import * as Styled from './product.style';
import useBasketStore from '../store/useBasketStore';
import { ProductSpecifications } from '../components/ProductSpecifications/ProductSpecifications';
import { QuantityControls } from '../components/QuantityControls/QuantityControls';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const addItem = useBasketStore((state) => state.addItem);
  const basketItems = useBasketStore((state) => state.items);

  const handleAddToCart = (quantity: number, setError: (error: string | null) => void) => {
    const currentInBasket = basketItems.reduce((acc, item) => (item.id === product.id ? acc + item.quantity : acc), 0);
    const availableStock = product.quantity - currentInBasket;

    if (quantity <= availableStock) {
      setError(null);
      addItem(product, quantity);
    } else {
      setError(
        availableStock === 0
          ? 'Sorry, this item is out of stock'
          : `Sorry, only ${availableStock} ${availableStock === 1 ? 'item' : 'items'} left in stock`
      );
    }
  };

  return (
    <div>
      <Styled.QtyWrapper>
        <Styled.ImageContainer>
          <Image
            src={product.img_url}
            alt={product.name}
            layout="responsive"
            width={100}
            height={100}
            style={{
              objectFit: 'cover',
              borderRadius: '15px',
            }}
            priority
          />
        </Styled.ImageContainer>

        <div>
          <ProductDetails product={product} />
          <QuantityControls product={product} onAddToCart={handleAddToCart} />
        </div>
      </Styled.QtyWrapper>

      <Styled.DescriptionWrapper>
        <Styled.DescriptionContainer>
          <h3>Description</h3>
          <p>{product.description}</p>
        </Styled.DescriptionContainer>
      </Styled.DescriptionWrapper>

      <ProductSpecifications product={product} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            Product(id: "1") {
              id
              name
              description
              price
              power
              quantity
              img_url
              brand
              weight
              height
              width
              length
              model_code
              colour
            }
          }
        `,
      }),
    });

    const json = await response.json();

    if (!response.ok || json.errors || !json.data?.Product) {
      return { notFound: true };
    }

    return {
      props: {
        product: json.data.Product,
      },
    };
  } catch (error) {
    return { notFound: true }; // Show a 404 page on error
  }
}
