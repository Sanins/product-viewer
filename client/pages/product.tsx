import Image from 'next/image';
import type { Product } from '../types';
import useBasketStore from '../store/useBasketStore';
import { useState } from 'react';
interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const addItem = useBasketStore((state) => state.addItem);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const MIN_QUANTITY = 1;

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(MIN_QUANTITY, prev - 1)); // Ensures quantity doesn't go below MIN_QUANTITY
  };

  const AddProductDisabled = () => {
    return false; // Placeholder
  };

  return (
    <div>
      <div>
        <Image
          src={product.img_url}
          alt={product.name}
          width={300}
          height={300}
          priority
        />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.power} // Packet of 4</p>
      </div>
      <div>
        <p>£{product.price}</p>
        <div>
          <p>Qty</p>
          <button onClick={decrementQuantity} disabled={quantity === 1}>
            -
          </button>
          <p title="Current quantity">{quantity}</p>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={handleAddToCart} disabled={AddProductDisabled()}>
          Add to cart
        </button>
      </div>
      <h3>Description</h3>
      <p>{product.description}</p>
      <h3>Specifications</h3>
      <ul>
        <li>Brand: {product.brand}</li>
        <li>Item weight(g): {product.weight}</li>
        <li>
          Dimensions (cm): {product.height} x {product.width} x {product.length}
        </li>
      </ul>
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
              img_url
              brand
              weight
              height
              width
              length
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