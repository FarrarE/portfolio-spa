import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from "react-router-dom";
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import "./styles.css";

function Header() {
  return (
    <div className="navbar">  
      <Nav >
          <NavItem>
            <Link to="/about" className="nav-link"><span>About</span></Link>
          </NavItem>
          <NavItem>
            <Link to="/projects" className="nav-link"><span>Projects</span></Link>
          </NavItem>
      </Nav>
      <Nav className="social">
        <NavItem>
          <NavLink href="https://github.com/FarrarE" target="_blank" className="nav-link"><GitHub /></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="https://www.linkedin.com/in/ezra-farrar-149259173/" target="_blank" className="nav-link"><Linkedin /></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="mailto: contact.efarrar@gmail.com" target="_blank" className="nav-link"><Mail /></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;
