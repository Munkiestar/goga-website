import React, { useState, useRef, useEffect } from "react";
import "./ProductCard.scss";
import Modal from "../../../components/modal/Modal";

function ProductCard({ product }) {
  const { image, title, description, colors, size } = product;
  const [isOpen, setIsOpen] = useState(false);
  const refBtn = useRef();

  const handleImageOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeModal = (e) => {
      // console.log("path: ", e.path);
      // console.log("target: ", e.target);
      // console.log("refBtn.current: ", refBtn.current);
      if (e.path[0] !== e.target) setIsOpen(true);
      if (e.path[0] === e.target) setIsOpen(false);
    };

    document.body.addEventListener("click", closeModal, true);

    return () => document.body.removeEventListener("click", closeModal, true);
  }, [refBtn]);

  return (
    <section className="product">
      <img src={image} alt={title} onClick={handleImageOpen} ref={refBtn} />
      <h3>{description}</h3>
      <h4>{colors}</h4>
      <p>{size}</p>
      <button>Posalji upit</button>
      {isOpen && (
        <div className="product">
          <Modal
            src={image}
            alt={title}
            open={isOpen}
            onClick={() => handleImageOpen()}
          />
        </div>
      )}
    </section>
  );
}

export default ProductCard;
