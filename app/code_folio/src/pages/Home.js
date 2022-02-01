import React from 'react';
//components
import NavB from '../components/NavB';
import About from '../components/About';
//reactstrap && react-bootstrap components
import Container from 'react-bootstrap/Container';

const Home = () => {
  return <Container>
            <NavB />
            <About />
         </Container>;
};
export default Home;
