// required modules
import React,{useState} from "react";
// components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";
import '../static/styles/css/home.css';

const NavB = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  

  return (
    <Navbar
      onScroll={(e) => {
        window.scrollY > 0 ? setSticky(!sticky) : setSticky(sticky);
      }}
    >
      <NavbarBrand href="/" className="nav-title-link me-auto">
        ./Portfolio <span className="cursor">|</span>
      </NavbarBrand>
      <NavbarToggler
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen === true ? (<i className="fas fa-eye"></i>) : (<i className="far fa-eye"></i>)}
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="nav-dropdown" navbar>
          <NavLink href="/contact" className="nav-link">
            $ cd contact
          </NavLink>
          <NavItem>
            <NavLink href="#link" className="nav-link">
              $ cd music
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects" className="nav-link">
              $ cd projects
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavB;