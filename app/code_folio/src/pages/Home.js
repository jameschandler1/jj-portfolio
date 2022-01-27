// required modules
import React from "react";
// components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Col, Row } from "reactstrap";
import '../static/styles/css/home.css';

const Home = () => {
  return (
    <>
      <Navbar className="nb" expand="md">
        <Col>
          <NavbarBrand href="#home" className="nav-title-link">
           ./Portfolio <span className='cursor'>|</span>
          </NavbarBrand>
        </Col>
        <Nav fill="true">
          <NavItem>
            <NavLink href="#link" className="nav-link">
              /about
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link" className="nav-link">
              /projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link" className="nav-link">
              /contact
            </NavLink>
          </NavItem>
        </Nav>
        <Row>
          <Col></Col>
        </Row>
      </Navbar>
    </>
  );
};

export default Home;
