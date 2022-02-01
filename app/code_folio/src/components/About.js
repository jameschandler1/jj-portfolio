import React, { useEffect, useState, useRef } from "react";
import bio from "../data/Bio.js";
import skills from "../data/Skills.js"
import {
  Container,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
} from "react-bootstrap";

const About = () => {

  return (
    <Container fluid="xl">
      <Card className="about-card">
        <Row>
          <Col>
            <Card.Img src={bio.img} />

            <Tabs id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="bio" title="Bio">
                <Card.Body>
                  <Card.Text>{bio.body}</Card.Text>
                </Card.Body>
              </Tab>
              <Tab eventKey="skills" title="Skills" className="mb-3">
                  <Card.Body>
                      {skills.map((skill, i) => {
                          return <Card.Img src={skill} className='skills'/>
                      })}
                </Card.Body>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
