/* eslint-disable react/jsx-no-comment-textnodes */
import { Product } from "../../types";
import * as Styled from './ProductDetails.style';

interface ProductDetailsProps {
    product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => (
    <Styled.TitleContainer>
        <h1>{product.name}</h1>
        {product.power && (<Styled.PowerTxt>{product.power} // Packet of 4</Styled.PowerTxt>)}
    </Styled.TitleContainer>
);
