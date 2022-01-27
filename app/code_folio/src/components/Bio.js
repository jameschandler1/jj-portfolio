import React from 'react';
import { Card } from 'react-bootstrap';
import bio from "../data/Bio.js";
import '../static/styles/css/bio.css';

const Bio = () => {
  return (
    <Card className="bio-card--wrapper" fluid="md">
      <Card.Body className="bio-card">
        <Card.Title className="bio-card--title">
          {bio.title}
          <br />
        </Card.Title>
        <Card.Img className="bio-card--img" src={bio.img} />
      </Card.Body>
        <Card.Text className="bio-card--text">{bio.body}</Card.Text>
    </Card>
  );
};

export default Bio;
