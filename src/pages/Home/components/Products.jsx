import React from "react";
import Spinner from "../../../components/Spinner";
import ProductCard from "./ProductCard";

const Products = ({ products, loading, searchQuery }) => {
  return loading ? (
    <Spinner className="flex items-center justify-center h-full" />
  ) : products.length > 0 ? (
    <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-10 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="block w-full bg-cyan-100 border-2 border-cyan-400 p-3 rounded-xl text-zinc-700">
      No products found for{" "}
      <span className="text-red-600 font-semibold">"{searchQuery}"</span>
    </div>
  );
};

export default Products;
