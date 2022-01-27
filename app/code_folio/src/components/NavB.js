// required modules
import React from "react";
// components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Col } from "reactstrap";
import '../static/styles/css/home.css';


const NavB = () => {
  return (
    <>
      <Navbar className="nb" sticky='top' expand="md">
        <Col>
          <NavbarBrand href="/" className="nav-title-link">
           ./Portfolio <span className='cursor'>|</span>
          </NavbarBrand>
        </Col>
        <Nav fill={true}>
          <NavItem>
            <NavLink href="/about" className="nav-link">
              /about
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects" className="nav-link">
              /projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#link" className="nav-link">
              /home
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavB;
