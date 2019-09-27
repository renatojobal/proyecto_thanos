import React from "react";
import PropTypes from "prop-types";

import ComicContainer from "./ComicContainer";

class ComicList extends React.Component {
  render() {
    if (this.props.comicList) {
      return (
        <div className="container">
          {this.props.comicList.map((comic) => {
            return (
              <div>
                <ComicContainer
                  imageURL={comic.imageURL}
                  description={comic.description}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          404. Actualmente no hay nada en comicList, es decir no esta llamando a la
          api
        </div>
      );
    }
  }
}

ComicList.protoType = {
  comicList: PropTypes.array
};

export default ComicList;
