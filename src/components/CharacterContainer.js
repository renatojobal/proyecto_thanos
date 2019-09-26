import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 300px;
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

export default CharacterContainer;