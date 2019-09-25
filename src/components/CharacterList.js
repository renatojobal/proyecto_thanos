import React from "react";
import CharacterContainer from './CharacterContainer'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 30px;
  grid-template-columns: 200px 200px 200px;
`

class CharacterList extends React.Component {
  render() {

    const { images = [] } = this.props;

    return (
      <Container>
        {images.map(image => {
          return (
            <CharacterContainer
              imageURL={image}
              onClick={() => console.log(image)}
            />
          )
        })}
      </Container>
    );
  }
}

export default CharacterList;