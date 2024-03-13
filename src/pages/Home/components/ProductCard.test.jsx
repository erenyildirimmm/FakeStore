import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./ProductCard";

const mockProduct = {
  id: 1,
  title: "Sample Product",
  image: "sample-image.jpg",
  price: 19.99,
};

describe("ProductCard Component", () => {
  it("renders product information correctly", () => {
    render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );

    expect(screen.getByText("Sample Product")).toBeInTheDocument();

    expect(screen.getByText("$19.99")).toBeInTheDocument();
  });

  it("navigates to the correct product page on click", () => {
    const { container } = render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );

    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveAttribute("href", "/1");
  });

  it("applies correct styles based on product information", () => {
    render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );

    const productImage = screen.getByTestId("product-image");
    expect(productImage).toHaveStyle({
      backgroundImage: "url(sample-image.jpg)",
    });
  });
});
