import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  render() {
    if (!this.props.isModalOpen) {
      return null;
    } else {
      console.log(this.props.imageURL);
      console.log(this.props.description);
      return ReactDOM.createPortal(
        <div
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
          onClick={this.props.onCloseModal}
        >
          <div
            style={{
              padding: 20,
              background: "#fff",
              borderRadius: "2px",
              display: "inline-block",
              minHeight: "300px",
              margin: "1rem",
              position: "relative",
              minWidth: "300px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center"
            }}
          >
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img
                    src={this.props.imageURL}
                    style={{
                      width: "250px",
                      height: "350px",
                      display: "block"
                    }}
                    alt="Character"
                  ></img>
                </div>
                <div className="col-9">
                  <p>{this.props.description}</p>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => this.props.onCloseModal()}
            >
              Close
            </button>
          </div>
        </div>,
        document.getElementById("modal-root")
      );
    }
  }
}

export default Modal;
