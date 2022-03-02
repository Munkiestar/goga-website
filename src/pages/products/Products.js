import React, { useState } from "react";
import "./Products.scss";
import { products, categories } from "../../seeds/products";
import ProductCard from "./productCard/ProductCard";

function Products() {
  const [category, setCategory] = useState("sve");

  return (
    <main className="products">
      <h1>Galerija proizvoda</h1>

      <section className="products__btn-wrapper">
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
      <section className="products__cards">
        {products
          // eslint-disable-next-line array-callback-return
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
