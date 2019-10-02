import React from "react";
import CharacterContainer from './CharacterContainer'
import Modal from './Modal'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 20px;
  grid-template-columns: 200px 200px 200px 200px 200px;
`

class CharacterList extends React.Component {
  render() {

    return (
      <Container>
        {this.props.characters.map(image => {
          return (
            <CharacterContainer
              imageURL={image.imageURL}
              onClick={() => <Modal/>}
            />
          )
        })}
      </Container>
    );
  }
}

CharacterList.propTypes = {
  images : PropTypes.array,
  image: PropTypes.string,
};

export default CharacterList;