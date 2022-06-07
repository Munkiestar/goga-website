import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import Modal from "../../../components/modal/Modal";

function ProductCard({ product }) {
  const { image, title, description, size } = product;

  const [isOpen, setIsOpen] = useState(false);
  const refBtn = useRef();

  const handleImageOpen = () => {
    setIsOpen(!isOpen);
  };
  //
  // useEffect(() => {
  //   const closeModal = (e) => {
  // console.log("path: ", e.path);
  // console.log("target: ", e.target);
  // console.log("refBtn.current: ", refBtn.current);
  // if (e.path[0] !== e.target) setIsOpen(true);
  // if (e.path[0] === e.target) setIsOpen(false);
  // };

  //   document.body.addEventListener("click", closeModal, true);
  //
  //   return () => document.body.removeEventListener("click", closeModal, true);
  // }, [refBtn]);

  return (
    <section className="product">
      <div className="product__info">
        <img
          src={image.fields.file.url}
          alt={title}
          onClick={handleImageOpen}
          ref={refBtn}
          title={title}
        />
      </div>
      <div className="product__text">
        <div
          className="product__text-desc"
          dangerouslySetInnerHTML={{
            __html: description.content[0].content[0].value,
          }}
        />
        <div
          dangerouslySetInnerHTML={{ __html: size.content[0].content[0].value }}
        />
      </div>
      <Link to="/kontakt">
        <button className="btn">Pošalji upit</button>
      </Link>
      {isOpen && (
        <div className="">
          <Modal
            src={image.fields.file.url}
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
