import React from "react";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const { image, title, description, colors, size } = product;

  return (
    <section className="product">
      <img src={image} alt={title} />
      <h3>{description}</h3>
      <h4>{colors}</h4>
      <p>{size}</p>

      <button>Posalji upit</button>
    </section>
  );
}

export default ProductCard;
