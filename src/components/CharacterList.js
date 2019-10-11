import React from "react";

import CharacterContainer from "./CharacterContainer";
import PropTypes from "prop-types";

class CharacterList extends React.Component {
  render() {
    if (this.props.characters) {
      // RENDERIZAR LAS IMAGENES
      return (  
        <div className="container">
          <div className="row">
            {this.props.characters.map((character, i) => {
              return (
                <div className="col-2" key={i}>
                  <CharacterContainer
                    imageURL={character.imageURL}
                    description={character.description}
                    onOpenModal={(imageURL, description) => this.props.onOpenModal(imageURL, description)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          404. Actualmente no hay nada en comicList, es decir no esta llamando a
          la api
        </div>
      );
    }
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array
};

export default CharacterList;
