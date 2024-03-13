import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const productCardStyle = (product) => {
    return {
      backgroundImage: `url(${product.image})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  };
  return (
    <Link to={`/${product.id}`}>
      <div
        key={product.id}
        className="rounded-xl bg-white w-full shadow-theme relative p-4 transform transition md:hover:scale-105 hover:cursor-pointer"
      >
        <div
          data-testid="product-image"
          className="w-full sm:h-52 h-24 bg-transparent rounded-t-xl mb-4"
          style={productCardStyle(product)}
        />
        <div className="py-6">
          <h5 className="font-semibold mb-4 text-sm">{product.title}</h5>
        </div>
        <span className="font-semibold text-sm absolute bottom-4 right-4">
          ${product.price}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;