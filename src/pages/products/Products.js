import React, { useState } from "react";
import "./Products.scss";
import { products, categories } from "../../seeds/products";
import ProductCard from "./productCard/ProductCard";

function Products() {
  const [category, setCategory] = useState("sve");

  return (
    <main>
      <h1>Galerija proizvoda</h1>

      <section className="btn__wrapper">
        {categories.map((cat) => (
          <button
            className="btn"
            key={cat.value}
            onClick={() => setCategory(cat.name)}
          >
            {cat.value}
          </button>
        ))}
      </section>
      <section className="products">
        {products
          .filter((prod) => {
            if (prod.category === category) {
              return prod;
            } else if (category === "sve") {
              return prod;
            }
          })
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </section>
    </main>
  );
}

export default Products;
