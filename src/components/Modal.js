import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

class Modal extends Component {
  render() {
    const node = (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-3">Primera fila primera columna</div>
                  <div className="col-9">Primera fila segunda columna</div>
                </div>
                <div className="row">
                  <div className="col">Segunda fila segeunda columna</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    return ReactDOM.createPortal(node, document.getElementById('modal-root'));
  }
}

class modal extends Component {
  state = { isModalOpen: false };

  _openModal = () => this.setState({ isModalOpen: true });

  _closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <div>
        <button
          onClick={this._openModal}
        >
          Modal de prueba
        </button>
        {this.state.isModalOpen && 
          <Modal onClose={this._closeModal}/>
        }
      </div>
    );
  }
}

export default modal;
