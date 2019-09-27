import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position:fixed;
  width:300px;
  height:200px;
  left:50%;
  top:50%;
  margin-left:-150px;
  margin-top:-100px;
`;

class Loading extends React.Component {
  render() {
    return (
      <Container>
        <img
          src="https://media.tenor.com/images/4c1a56a0afbfd977c6be1267fc1ff183/tenor.gif        "
          alt="EL thunas bailando"
        ></img>
        <span>Loading...</span>
      </Container>
    );
  }
}

export default Loading;
