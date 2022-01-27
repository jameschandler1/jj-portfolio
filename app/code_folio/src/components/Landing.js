import React from 'react';

import {
    Row,
    Col,
} from 'react-bootstrap';
import Bio from './Bio';
import '../static/styles/css/bio.css';

const Landing = () => {
  return (
   
    <Row>
      <Col>
        <Bio />
      </Col>
      <Col>
        
      </Col>
    </Row>
   
  );
};

export default Landing;
