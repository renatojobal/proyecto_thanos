import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  width: 250px;
  height: 350px;
  display:block;
`;

// Colores:
// Rojo = #e62429
// Negro = #202020

const ContainerRight = styled.div`
  background-color: #202020;
  
  color: #ffffff;

`;

const ContainerLeft = styled.div`
  background-color: #e62429;
`;




const Container = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
`;

class ComicContainer extends React.Component {
  render() {
    if (this.props.leftImage) {
      return (
        <div className="container">
          <ContainerRight className="row">
            <div className="col-2">
              <Image src={this.props.imageURL} alt="Imagen"></Image>
            </div>
            <div className="col-9 offset-1">
              <Container>
                <p> {this.props.description} </p>
              </Container>
            </div>
          </ContainerRight>
        </div>
      );
    } else {
      return (
        <div className="container">
          <ContainerLeft className="row">
            <div className="col-9">
              <Container>
                <p> {this.props.description} </p>
              </Container>
            </div>
            <div className="col-2">
              <Image src={this.props.imageURL} alt="Imagen"></Image>
            </div>
          </ContainerLeft>
        </div>
      );
    }
  }
}

ComicContainer.propTypes = {
  imageURL: PropTypes.string,
  description: PropTypes.string,
  leftImage: PropTypes.bool
};

export default ComicContainer;
