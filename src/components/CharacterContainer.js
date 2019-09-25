import React from "react";
import { Link } from "react-router-dom";


import Modal from "./Modal";


class CharacterContainer extends React.Component {

  render() {
    return (
      <div><Link to={Modal}>
      <img src={this.props.imageURL} alt="character"></img>
      </Link></div>
    );
  }
}

export default CharacterContainer;