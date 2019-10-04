import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

import ReactModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = (
      <div>
        {this.props.imageURL} {this.props.description}
      </div>
    );
  }

  componentDidMount() {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.el,
      document.getElementById("modal-root")
    );
  }
}

export default Modal;
