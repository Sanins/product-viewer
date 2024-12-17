import { Product } from "../../types";
import * as Styled from './productDetails.style';

interface ProductDetailsProps {
    product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => (
    <Styled.TitleContainer>
        <h1>{product.name}</h1>
        <Styled.PowerTxt>{product.power} // Packet of 4</Styled.PowerTxt>
    </Styled.TitleContainer>
);
