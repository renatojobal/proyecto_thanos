import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position:fixed;
  width:500px;
  height:400px;
  left:50%;
  top:50%;
  margin-left:-150px;
  margin-top:-100px;
`;

const Image = styled.img`
  width:450px;
  height:250px;
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
          alt="perdoname niñita"
        ></Image>
        <center><Span>No Encontrado...</Span></center>
      </Container>
    );
  }
}

export default NotFound;
