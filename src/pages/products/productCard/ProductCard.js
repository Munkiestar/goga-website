import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import Modal from "../../../components/modal/Modal";
import { ScrollToTop } from "../../../helpers";

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
      <div className="product__info">
        <img
          src={image}
          alt={title}
          onClick={handleImageOpen}
          ref={refBtn}
          title={title}
        />
        <div className="product__text">
          <Link to="/kontakt" onClick={ScrollToTop}>
            <button className="btn">Posalji upit</button>
          </Link>
          <div
            className="product__text-desc"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div dangerouslySetInnerHTML={{ __html: size }} />
          {/*<h3>{description}</h3>*/}
          {/*<h4>{colors}</h4>*/}
          {/*<p>{size}</p>*/}
        </div>
      </div>
      {isOpen && (
        <div className="">
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
