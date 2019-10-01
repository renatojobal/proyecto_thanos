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

const Image = styled.img`
    width: 300px;
    height: 200px;
`;

const Span = styled.span`
  font-weight: bold;
`;

class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <Image
          src="https://tenor.com/view/thanos-avengers-infinity-war-sorry-gif-12454554.gif"
          alt="Perdoname Niñita"
        >
        </Image>
        <center><Span>No Encontrado...</Span></center>
      </Container>
    );
  }
}

export default NotFound;