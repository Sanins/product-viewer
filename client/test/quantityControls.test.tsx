import { screen, fireEvent } from '@testing-library/react';
import { testRender } from '../tests';
import { Product } from '../types';
import { QuantityControls } from '../components/QuantityControls/QuantityControls';

describe('QuantityControls Component', () => {
    const mockProduct: Product = {
        id: '1',
        name: 'Test Product',
        price: 1000,
        quantity: 10,
        description: ''
    };

    const mockOnAddToCart = jest.fn();

    it('should render with product price and quantity', () => {
        testRender(<QuantityControls product={mockProduct} onAddToCart={mockOnAddToCart} />);

        const priceElement = screen.getByText('£10.00');
        const quantityElement = screen.getByTitle('Current quantity');

        expect(priceElement).toBeInTheDocument();
        expect(quantityElement).toHaveTextContent('1');
    });

    it('should increment quantity when the "+" button is clicked', () => {
        testRender(<QuantityControls product={mockProduct} onAddToCart={mockOnAddToCart} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        const quantityElement = screen.getByTitle('Current quantity');
        expect(quantityElement).toHaveTextContent('2');
    });

    it('should decrement quantity when the "-" button is clicked, but not below 1', () => {
        testRender(<QuantityControls product={mockProduct} onAddToCart={mockOnAddToCart} />);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        const quantityElement = screen.getByTitle('Current quantity');
        expect(quantityElement).toHaveTextContent('1');

        fireEvent.click(decrementButton);
        expect(quantityElement).toHaveTextContent('1');
    });

    it('should call onAddToCart with the correct quantity when "Add to cart" is clicked', () => {
        testRender(<QuantityControls product={mockProduct} onAddToCart={mockOnAddToCart} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        const addToCartButton = screen.getByText('Add to cart');
        fireEvent.click(addToCartButton);

        expect(mockOnAddToCart).toHaveBeenCalledWith(2, expect.any(Function));
    });

    it('should display an error if there is an error message', () => {
        const mockOnAddToCartWithError = jest.fn((quantity: number, setError: (error: string | null) => void) => {
            setError('An error occurred');
        });

        testRender(
            <QuantityControls product={mockProduct} onAddToCart={mockOnAddToCartWithError} />
        );

        const addToCartButton = screen.getByText('Add to cart');
        fireEvent.click(addToCartButton);

        const errorElement = screen.getByText('An error occurred');
        expect(errorElement).toBeInTheDocument();
    });

    it('should reset quantity to 1 if no error after adding to cart', () => {
        testRender(<QuantityControls product={mockProduct} onAddToCart={mockOnAddToCart} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        const addToCartButton = screen.getByText('Add to cart');
        fireEvent.click(addToCartButton);

        const quantityElement = screen.getByTitle('Current quantity');
        expect(quantityElement).toHaveTextContent('1');
    });
});