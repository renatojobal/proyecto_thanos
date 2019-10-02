import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom'
const root = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')

const Container = styled.div`
  width: 175px;
  height: 275px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

class CharacterContainer extends React.Component {
  render() {
    return (
      <Container>
        <Image src={this.props.imageURL} alt="character"></Image>
      </Container>
    );
  }
}

class Modal extends React.Component {
  render() {
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
        onClick={this.props.onClose}
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
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            justifySelf: "center"
          }}
        >
          {this.props.children}
          <hr />
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>,
      modalRoot
    );
  }
}

class App extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: "relative"
          }}
        >
          <Container onClick={this.handleShowMessageClick}>
            <Image src={this.props.imageURL} alt="character"></Image>
          </Container>
          
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              Modal de prueba
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

CharacterContainer.propTypes = {
  imageURL: PropTypes.string
};

export default App;
