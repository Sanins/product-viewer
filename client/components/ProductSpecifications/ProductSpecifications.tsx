import React from 'react';
import * as Styled from './ProductSpecifications.style';
import { Product } from '../../types';

interface ProductSpecificationsProps {
    product: Product;
}

export const ProductSpecifications = ({ product }: ProductSpecificationsProps) => (
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
                    <Styled.SpecValue>{product.model_code}</Styled.SpecValue>
                </Styled.SpecListItem>
                <Styled.SpecListItem>
                    <Styled.SpecTitle>Colour</Styled.SpecTitle>
                    <Styled.SpecValue>{product.colour}</Styled.SpecValue>
                </Styled.SpecListItem>
            </Styled.SpecList>
        </Styled.SpecContainer>
    </Styled.SpecWrapper>
);
