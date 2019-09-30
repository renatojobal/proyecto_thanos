import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

const Description = styled.div`
  align-content: center;
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
              <Description>
                <p> {this.props.description} </p>
              </Description>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-9">
              <Description>
                <p> {this.props.description} </p>
              </Description>
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
