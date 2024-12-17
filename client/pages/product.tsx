import Image from 'next/image';
import type { Product } from '../types';
import * as Styled from './product.style';
import useBasketStore from '../store/useBasketStore';
import { useState } from 'react';
import Button from '../components/Button/Button';
interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const addItem = useBasketStore((state) => state.addItem);
  const basketItems = useBasketStore((state) => state.items);
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = () => {
    const currentInBasket = basketItems.reduce((acc, item) => {
      if (item.id === product.id) {
        return acc + item.quantity;
      }
      return acc;
    }, 0);

    const availableStock = product.quantity - currentInBasket;

    if (quantity <= availableStock) {
      addItem(product, quantity);
      setQuantity(1);
    } else {
      if (availableStock === 0) {
        setError('Sorry, this item is out of stock');
      } else {
        setError(`Sorry, only ${availableStock} items left in stock`);
      }
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const MIN_QUANTITY = 1;

  const decrementQuantity = () => {
    if (error) {
      setError(null);
    }
    setQuantity((prev) => Math.max(MIN_QUANTITY, prev - 1)); // Ensures quantity doesn't go below MIN_QUANTITY
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
              objectFit: "cover",
              borderRadius: "15px",
            }}
            priority
          />
        </Styled.ImageContainer>
        <div>
          <Styled.TitleContainer>
            <h1>{product.name}</h1>
            <Styled.PowerTxt>{product.power} // Packet of 4</Styled.PowerTxt>
          </Styled.TitleContainer>
          <Styled.QtyContainer>
            <Styled.PriceQtyContainer>
              <div>
                <Styled.PriceTxt>£{product.price}</Styled.PriceTxt>
              </div>
              <Styled.QuantityDataContainer>
                <div>
                  <Styled.QuantityTxt>Qty</Styled.QuantityTxt>
                </div>
                <Styled.QuantityCtrlContainer>
                  <Styled.QuantitybtnContainer>
                    <Button onClick={decrementQuantity} style={{
                      width: '30px',
                      height: '30px',
                      padding: '0px',
                      borderRadius: '5px',
                    }} disabled={quantity === 1}>
                      -
                    </Button>
                  </Styled.QuantitybtnContainer>
                  <Styled.QtyTxt title="Current quantity">{quantity}</Styled.QtyTxt>
                  <Styled.QuantitybtnContainer>
                    <Button onClick={incrementQuantity} style={{
                      width: '30px',
                      height: '30px',
                      padding: '0px',
                      borderRadius: '5px',
                    }}>+</Button>
                  </Styled.QuantitybtnContainer>
                </Styled.QuantityCtrlContainer>
              </Styled.QuantityDataContainer>
            </Styled.PriceQtyContainer>
            <Styled.BtnContainer>
              <Button onClick={handleAddToCart}>
                Add to cart
              </Button>
            </Styled.BtnContainer>
            {error && <Styled.ErrorContainer>
              <p>{error}</p>
            </Styled.ErrorContainer>
            }
          </Styled.QtyContainer>
        </div>
      </Styled.QtyWrapper>
      <Styled.DescriptionWrapper>
        <Styled.DescriptionContainer>
          <h3>Description</h3>
          <p>{product.description}</p>
        </Styled.DescriptionContainer>
      </Styled.DescriptionWrapper>
      <Styled.SpecWrapper>
        <Styled.SpecContainer>
          <h3>Specifications</h3>
          <Styled.SpecList>
            <Styled.SpecListItem>
              <Styled.SpecTitle>Brand</Styled.SpecTitle>
              <Styled.SpecValue>{product.brand}</Styled.SpecValue>
            </Styled.SpecListItem>
            <Styled.SpecListItem>
              <Styled.SpecTitle>Item weight (g)</Styled.SpecTitle>
              <Styled.SpecValue>{product.weight}</Styled.SpecValue>
            </Styled.SpecListItem>
            <Styled.SpecListItem>
              <Styled.SpecTitle>Dimensions (cm)</Styled.SpecTitle>
              <Styled.SpecValue>
                {product.height} x {product.width} x {product.length}
              </Styled.SpecValue>
            </Styled.SpecListItem>
            <Styled.SpecListItem>
              <Styled.SpecTitle>Item Modal number</Styled.SpecTitle>
              <Styled.SpecValue>
                {product.model_code}
              </Styled.SpecValue>
            </Styled.SpecListItem>
            <Styled.SpecListItem>
              <Styled.SpecTitle>Colour</Styled.SpecTitle>
              <Styled.SpecValue>
                {product.colour}
              </Styled.SpecValue>
            </Styled.SpecListItem>
          </Styled.SpecList>
        </Styled.SpecContainer>
      </Styled.SpecWrapper>
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