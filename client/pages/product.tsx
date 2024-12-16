import Image from 'next/image';
import type { Product } from '../types';
interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
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
          <button>-</button>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
      <h3>Description</h3>
      <p>{product.description}</p>
      <h3>Specifications</h3>
      <ul>
        <li>Brand: {product.brand}</li>
        <li>Item weight(g) {product.weight}</li>
        <li>Dimensions (cm) {product.height} {product.width} {product.length}</li>
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