import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  if (!props.isModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div>Modal</div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
