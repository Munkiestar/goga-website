import React from "react";
import "./Modal.scss";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { createPortal } from "react-dom";

function Modal({ src, alt, open, onClick }) {
  if (!open) return null;

  return createPortal(
    <div className="modal">
      <CloseRoundedIcon className="modal__btn" onClick={onClick} />
      <img src={src} alt={alt} />
    </div>,
    document.getElementById("modal-portal")
  );
}

export default Modal;
