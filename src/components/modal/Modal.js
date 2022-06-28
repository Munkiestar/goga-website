import React, { useEffect } from "react";
import "./Modal.scss";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { createPortal } from "react-dom";

function Modal({ open, onClick, children, imagesLengthCheck }) {
  useEffect(() => {
    // check image length for Carousel
    if (imagesLengthCheck) {
      document.getElementsByClassName("slick-slider")[2].style.width = "800px";

      // div[2].classList.add("dalibor");
    }
  }, [imagesLengthCheck]);

  if (!open) return null;

  return createPortal(
    <div className="modal">
      <div className="modal__container">
        {children}
        <CloseRoundedIcon className="modal__btn" onClick={onClick} />
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
}

export default Modal;
