import { screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';
import { testRender } from '../tests';

describe('Button Component', () => {
    it('should render the button with children text', () => {
        testRender(<Button>Click Me</Button>);

        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should apply custom styles passed via the style prop', () => {
        const customStyle = { backgroundColor: 'red', color: 'white' };
        testRender(<Button style={customStyle}>Styled Button</Button>);

        const buttonElement = screen.getByText(/Styled Button/i);
        expect(buttonElement).toHaveStyle('background-color: red');
        expect(buttonElement).toHaveStyle('color: white');
    });

    it('should be disabled when the disabled prop is passed', () => {
        testRender(<Button disabled={true}>Disabled Button</Button>);

        const buttonElement = screen.getByText(/Disabled Button/i);
        expect(buttonElement).toBeDisabled();
    });

    it('should not be disabled when the disabled prop is not passed', () => {
        testRender(<Button>Enabled Button</Button>);

        const buttonElement = screen.getByText(/Enabled Button/i);
        expect(buttonElement).not.toBeDisabled();
    });

    it('should call the onClick handler when the button is clicked', () => {
        const handleClick = jest.fn();
        testRender(<Button onClick={handleClick}>Clickable Button</Button>);

        const buttonElement = screen.getByText(/Clickable Button/i);

        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call the onClick handler when the button is disabled', () => {
        const handleClick = jest.fn();
        testRender(<Button disabled={true} onClick={handleClick}>Disabled Button</Button>);

        const buttonElement = screen.getByText(/Disabled Button/i);

        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});