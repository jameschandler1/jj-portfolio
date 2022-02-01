// required modules
import React, {useState} from "react";
// components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";
import '../static/styles/css/home.css';

const NavB = () => {

  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <Navbar
      // sticky='top'
      expanded='true'
    >
      <NavbarBrand href="/" className="nav-title-link me-auto">
        ./Portfolio <span className="cursor">|</span>
      </NavbarBrand>
      <NavbarToggler
        onClick={e => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen === true ? (<i className="fas fa-eye"></i>) : (<i className="far fa-eye"></i>)}
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar >

        <Nav className="nav-dropdown" navbar>
          <NavItem>
            <NavLink href="/" className="nav-link">
              $ home
            </NavLink>
          </NavItem>
          <NavLink href="mailto:jamesckun15@gmail.com" className="nav-link">
            $ click to contact
          </NavLink>
          <NavItem>
            <NavLink href="/music" className="nav-link">
              $ music i've made
            </NavLink>
          </NavItem>
        </Nav>

      </Collapse>
    </Navbar>
  );
};

export default NavB;
