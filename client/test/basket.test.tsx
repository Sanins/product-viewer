import { screen, fireEvent } from '@testing-library/react';
import { Product } from '../types';
import Basket from '../components/Basket/Basket';
import { testRender } from '../tests';

jest.mock('../utils/utils', () => ({
    formatPrice: jest.fn((price: number) => `£${(price / 100).toFixed(2)}`),
}));

describe('Basket Component', () => {
    const mockOnClose = jest.fn();

    const emptyBasket: Product[] = [];
    const sampleBasket: Product[] = [
        {
            id: '1', name: 'Product 1', price: 1299, quantity: 2,
            description: ''
        },
    ];

    it('should render empty basket message when basket is empty', () => {
        testRender(<Basket basketItems={emptyBasket} isBasketVisable={true} onClose={mockOnClose} />);

        const emptyMessage = screen.getByText(/Your basket is empty/i);
        expect(emptyMessage).toBeInTheDocument();
    });

    it('should render basket items correctly', () => {
        testRender(<Basket basketItems={sampleBasket} isBasketVisable={true} onClose={mockOnClose} />);

        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();

        expect(screen.getByText(/£12.99/i)).toBeInTheDocument();

        expect(screen.getByText(/£25.98/i)).toBeInTheDocument();
    });

    it('should call onClose when close button is clicked', () => {
        testRender(<Basket basketItems={sampleBasket} isBasketVisable={true} onClose={mockOnClose} />);

        const closeButton = screen.getByText('x');
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});