import React from "react";
//components
import NavB from "../components/NavB";
import MusicPlayer from "../components/MusicPlayer";
//reactstrap && react-bootstrap components
import Container from "react-bootstrap/Container";

const Music = () => {
  return (
    <Container>
      <NavB />
      <MusicPlayer />
    </Container>
  );
};
export default Music;
