import { fireEvent, screen } from "@testing-library/react";
import Product from "../pages/product";
import { ProductMock } from "../mocks";
import { testRender } from "../tests";

describe('pages/product', () => {
  test("should be able to increase and decrease product quantity", async () => {
    const { getByText, getByTitle } = testRender(<Product product={ProductMock} />);

    const increaseQuantity = getByText("+");

    const currentQuantity = getByTitle("Current quantity");
    expect(currentQuantity).toHaveTextContent("1");

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent("2");

    const decreaseQuantity = getByText("-");

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent("1");
  });

  test("should be able to add items to the basket", async () => {
    const { getByText, getByTitle } = testRender(<Product product={ProductMock} />);

    const increaseQuantity = getByText("+");

    const currentQuantity = getByTitle("Current quantity");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("4");
  });

  test("should display an error message if trying to add more items than in stock", async () => {
    const mockProductWithFourStockItems = { ...ProductMock, quantity: 4 };
    const { getByText } = testRender(<Product product={mockProductWithFourStockItems} />);

    const increaseQuantity = getByText("+");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent('Sorry, this item is out of stock');
  });

  test("should show an error message when the stock is 0", async () => {
    const mockProductWithZeroStock = { ...ProductMock, quantity: 0 };
    const { getByText } = testRender(<Product product={mockProductWithZeroStock} />);

    const increaseQuantity = getByText("+");

    fireEvent.click(increaseQuantity);

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent('Sorry, this item is out of stock');
  });

  test("should display the product description correctly", () => {
    const { getByText } = testRender(<Product product={ProductMock} />);
    const description = getByText(ProductMock.description);
    expect(description).toBeInTheDocument();
  });
});
