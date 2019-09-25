import React from "react";
import CharacterContainer from './CharacterContainer'

class CharacterList extends React.Component {
  render() {

    const { images = [] } = this.props;

    return (
      <div>
        {images.map(image => {
          <CharacterContainer imageURL={image} />
        })}
      </div>
    );
  }
}

export default CharacterList;