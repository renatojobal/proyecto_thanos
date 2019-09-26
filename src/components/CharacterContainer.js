import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border: 1px solid red;
  width: 175px;
  height: 275px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

class CharacterContainer extends React.Component {

  render() {
    return (
      <Container onClick={() => {
        if(this.props.onClick) this.props.onClick(this.props.imageURL);
      }}>
        <Image src={this.props.imageURL} alt="character"></Image>
      </Container>
    );
  }
}

CharacterContainer.PropTypes = {
  imageURL:  PropTypes.string,
};

export default CharacterContainer;

