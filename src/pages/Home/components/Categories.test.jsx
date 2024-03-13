import { render, screen, fireEvent } from "@testing-library/react";
import Categories from "./Categories";
import { vi } from "vitest";

describe("Categories Component", () => {
  const mockCategories = ["category1", "category2", "category3"];

  it("renders categories correctly", () => {
    render(
      <Categories
        title="Test Title"
        categories={mockCategories}
        onSelectCategory={() => {}}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();

    mockCategories.forEach((category) => {
      const capitalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);
      expect(screen.getByText(capitalizedCategory)).toBeInTheDocument();
    });
  });
});