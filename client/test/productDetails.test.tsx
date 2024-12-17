import { screen } from '@testing-library/react';
import { testRender } from '../tests';
import { Product } from '../types';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';

describe('ProductDetails Component', () => {
    const mockProductWithPower: Product = {
        id: '1',
        name: 'Test Product',
        price: 1000,
        quantity: 10,
        power: '500W',
        description: ''
    };

    const mockProductWithoutPower: Product = {
        id: '2',
        name: 'Another Product',
        price: 1500,
        quantity: 5,
        power: undefined,
        description: ''
    };

    it('should render product name', () => {
        testRender(<ProductDetails product={mockProductWithPower} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    it('should render power text when product.power is provided', () => {
        testRender(<ProductDetails product={mockProductWithPower} />);

        expect(screen.getByText('500W // Packet of 4')).toBeInTheDocument();
    });

    it('should not render power text when product.power is not provided', () => {
        testRender(<ProductDetails product={mockProductWithoutPower} />);

        expect(screen.queryByText('500W // Packet of 4')).not.toBeInTheDocument();
    });
});