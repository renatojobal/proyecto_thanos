import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

import ComicList from "./ComicList";

class ComicsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ComicList comics={this.comics} />
      </div>
    );
  }
}

ComicList.propType = {
  comics: PropTypes.array
};

export default ComicsPage;
