import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

import ComicContainer from "./ComicContainer";

class ComicList extends React.Component {
  render() {
    return (<div className="container">
      {this.props.comicList.map((comic) => { 
        return (<div>
          <ComicContainer imageURL={comic.imageURL} description={comic.description}/>
        </div>);
      })}
    </div>);
  }
}

ComicList.protoType = {
  comicList: PropTypes.array
};

export default ComicList;
