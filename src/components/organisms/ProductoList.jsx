import React from "react";
import ProductoCard from "../molecules/ProductoCard";

function ProductoList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductoCard key={product.id} producto={product} />
      ))}
    </div>
  );
}

export default ProductoList;
