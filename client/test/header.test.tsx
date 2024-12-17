import { screen, fireEvent, render } from '@testing-library/react';
import { Product } from '../types';
import Header from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

jest.mock('../store/useBasketStore', () => ({
    __esModule: true,
    default: jest.fn(),
}));

export const testRender = (children, { route = '/' } = {}) => {
    return render(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

describe('Header Component', () => {
    const mockProduct1: Product = {
        id: '1',
        name: 'Product 1',
        price: 100,
        quantity: 2,
        description: '',
    };

    const mockProduct2: Product = {
        id: '2',
        name: 'Product 2',
        price: 200,
        quantity: 3,
        description: '',
    };

    beforeEach(() => {
        require('../store/useBasketStore').default.mockReturnValue([mockProduct1, mockProduct2]);
    });

    it('should render the basket icon', () => {
        testRender(<Header />);

        const basketIcon = screen.getByAltText('Basket Icon');
        expect(basketIcon).toBeInTheDocument();
    });

    it('should render total quantity when there are items in the basket', () => {
        testRender(<Header />);

        const totalQuantity = screen.getByTitle('Basket items');
        expect(totalQuantity).toHaveTextContent('5');
    });

    it('should toggle the basket visibility when the basket icon is clicked', () => {
        testRender(<Header />);

        const basketIcon = screen.getByAltText('Basket Icon');

        expect(screen.queryByText('Product 1')).not.toBeInTheDocument();

        fireEvent.click(basketIcon);

        expect(screen.getByText('Product 1')).toBeInTheDocument();

        fireEvent.click(basketIcon);

        expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
    });

    it('should not render the total quantity when it is 0', () => {
        require('../store/useBasketStore').default.mockReturnValue([]);

        testRender(<Header />);

        const totalQuantity = screen.queryByTitle('Basket items');
        expect(totalQuantity).not.toBeInTheDocument();
    });

    it('should display the basket with correct items when toggled open', () => {
        testRender(<Header />);

        const basketIcon = screen.getByAltText('Basket Icon');

        fireEvent.click(basketIcon);

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
});