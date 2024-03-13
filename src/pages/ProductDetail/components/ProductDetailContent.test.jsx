import { render, screen } from "@testing-library/react";
import ProductDetailContent from "./ProductDetailContent";
import { BrowserRouter as Router } from "react-router-dom";

describe("ProductDetailContent Component", () => {
  const mockProduct = {
    title: "Product Title",
    rating: {rate: 4.5, count: 364},
    price: 20,
    description: "Product Description",
    category: "men's clothing",
  };

  it("renders ProductDetailContent component with product details", () => {
    render(
      <Router>
        <ProductDetailContent product={mockProduct} />
      </Router>
    );

    expect(screen.getByText("Product Title")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
    expect(screen.getByText("Product Description")).toBeInTheDocument();
  });

  it("renders SelectSize component for clothing products", () => {
    render(
      <Router>
        <ProductDetailContent product={mockProduct} />
      </Router>
    );

    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.getByText("M")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("XL")).toBeInTheDocument();
  });
});
