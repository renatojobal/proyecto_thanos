import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";



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
        <Image
          src={this.props.imageURL}
          alt="character"
          onClick={() => this.props.onOpenModal(this.props.imageURL, this.props.description)}
        ></Image>
      </Container>
    );
  }
}

CharacterContainer.propTypes = {
  imageURL: PropTypes.string
};

export default CharacterContainer;
