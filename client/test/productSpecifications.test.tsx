import { screen } from '@testing-library/react';
import { testRender } from '../tests';
import { Product } from '../types';
import { ProductSpecifications } from '../components/ProductSpecifications/ProductSpecifications';

describe('ProductSpecifications Component', () => {
    const mockProduct: Product = {
        id: '1',
        name: 'Test Product',
        price: 1000,
        quantity: 10,
        brand: 'TestBrand',
        weight: 200,
        height: 10,
        width: 20,
        length: 30,
        model_code: 'ABC123',
        colour: 'Red',
        description: ''
    };

    it('should render correctly with product specifications', () => {
        testRender(<ProductSpecifications product={mockProduct} />);

        expect(screen.getByText('Specifications')).toBeInTheDocument();
        expect(screen.getByText('Brand')).toBeInTheDocument();
        expect(screen.getByText('TestBrand')).toBeInTheDocument();
        expect(screen.getByText('Item weight (g)')).toBeInTheDocument();
        expect(screen.getByText('200')).toBeInTheDocument();
        expect(screen.getByText('Dimensions (cm)')).toBeInTheDocument();
        expect(screen.getByText('10 x 20 x 30')).toBeInTheDocument();
        expect(screen.getByText('Item Modal number')).toBeInTheDocument();
        expect(screen.getByText('ABC123')).toBeInTheDocument();
        expect(screen.getByText('Colour')).toBeInTheDocument();
        expect(screen.getByText('Red')).toBeInTheDocument();
    });

    it('should not render Brand if not provided', () => {
        const productWithoutBrand: Product = { ...mockProduct, brand: undefined };

        testRender(<ProductSpecifications product={productWithoutBrand} />);

        expect(screen.queryByText('Brand')).not.toBeInTheDocument();
    });

    it('should not render Item weight (g) if not provided', () => {
        const productWithoutWeight: Product = { ...mockProduct, weight: undefined };

        testRender(<ProductSpecifications product={productWithoutWeight} />);

        expect(screen.queryByText('Item weight (g)')).not.toBeInTheDocument();
    });

    it('should show default 0 for missing dimensions', () => {
        const productWithoutDimensions: Product = { ...mockProduct, height: undefined, width: undefined, length: undefined };

        testRender(<ProductSpecifications product={productWithoutDimensions} />);

        expect(screen.getByText('0 x 0 x 0')).toBeInTheDocument();
    });

    it('should not render Item Modal number if not provided', () => {
        const productWithoutModelCode: Product = { ...mockProduct, model_code: undefined };

        testRender(<ProductSpecifications product={productWithoutModelCode} />);

        expect(screen.queryByText('Item Modal number')).not.toBeInTheDocument();
    });

    it('should not render Colour if not provided', () => {
        const productWithoutColour: Product = { ...mockProduct, colour: undefined };

        testRender(<ProductSpecifications product={productWithoutColour} />);

        expect(screen.queryByText('Colour')).not.toBeInTheDocument();
    });
});