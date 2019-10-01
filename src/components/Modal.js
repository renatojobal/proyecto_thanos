import React,{Component} from "react";
//import ReactDOM from "react-dom";

class Modal extends Component{
  render(){
    return (
      <div className='modal'>
        <section className='modal-main'>
          <h1>Esto es un Modal</h1>
          <p>Detalles del modall</p>
          <button onClick={this.props.onClick}>Cerrar Modal</button>
        </section>
      </div>
    )
  }
}

export default Modal;
