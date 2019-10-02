import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
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
          <div className="row">
            <div className="col-2">
              <Image src={this.props.imageURL} alt="Imagen"></Image>
            </div>
            <div className="col-9 offset-1">
              <Container>
                <p> {this.props.description} </p>
              </Container>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-9">
              <Container>
                <p> {this.props.description} </p>
              </Container>
            </div>
            <div className="col-2  offset-1">
              <Image src={this.props.imageURL} alt="Imagen"></Image>
            </div>
          </div>
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
