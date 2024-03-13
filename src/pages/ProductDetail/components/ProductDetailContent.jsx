import React from "react";
import SelectSize from "./SelectSize";
import Counter from "./Counter";
import { Rate } from "antd";
import Rating from "./Rating";

const ProductDetailContent = ({ product }) => {
  const sizes = ["S", "M", "L", "XL"];
  return (
    <>
      <h1 className="sm:text-3xl text-xl mb-6 font-semibold">{product.title}</h1>
      <div className="mb-12 flex items-center">
        <Rating rateData={product.rating} />
      </div>
      <div className="mb-12">
        <span className="font-semibold text-zinc-400 line-through">
          ${product.price + product.price * (25 / 100)}
        </span>
        <p className="text-3xl font-semibold mt-2">${product.price}</p>
      </div>

      <p className="leading-6 text-zinc-700 mb-12">{product.description}</p>
      {(product.category === "men's clothing" ||
        product.category === "women's clothing") && (
        <div className="mb-12">
          <SelectSize sizes={sizes} />
        </div>
      )}
      <div className="mb-12 flex items-center gap-4">
        <Counter />
        <button className="py-3 px-6 bg-zinc-950 text-cyan-400 rounded-xl font-semibold">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetailContent;
