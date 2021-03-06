import React from "react";
import PropTypes from "prop-types";
import ComicContainer from "./ComicContainer";
class ComicList extends React.Component {
  render() {
    let leftImage = true;
    if (this.props.comics) {
      return (
        <div className="container">
          {this.props.comics.map((comic) => {
            return (
              <div>
                <ComicContainer
                  imageURL={comic.imageURL}
                  description={comic.description}
                  leftImage={
                    leftImage
                      ? (leftImage = !leftImage)
                      : (leftImage = !leftImage)
                  }
                />
              </div>
            );
          })}
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
ComicList.protoType = {
  comics: PropTypes.array
};
export default ComicList;
