import React, { useEffect, useState, useRef } from "react";
import bio from "../data/Bio.js";
import skills from "../data/Skills.js"
import links from "../data/Links.js";
import {
  Container,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  Carousel,
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
                    return <Card.Img src={skill} className="skills" />;
                  })}
                </Card.Body>
              </Tab>
              <Tab eventKey="resources" title="apps">
                <Card.Body>
                <Carousel fade pause='hover'>
                    {links.map((link, i) => {
                    <Carousel.Item key={i}>
                        <Card.Img src={link.img} />
                         
                        <Carousel.Caption>
                            <h3>{link.title}</h3>
                            <p>{link.info}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    })}
                </Carousel>
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
