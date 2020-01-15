import React from 'react';
import { Nav, NavItem} from 'reactstrap';
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
            <Link to="/about" className="nav-link">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/projects" className="nav-link">Project</Link>
          </NavItem>
      </Nav>
      <Nav className="social">
        <NavItem>
          <Link to="https://github.com/FarrarE" target="_blank" className="nav-link"><GitHub /></Link>
          </NavItem>
          <NavItem>
          <Link to="https://www.linkedin.com/in/ezra-farrar-149259173/" target="_blank" className="nav-link"><Linkedin /></Link>
          </NavItem>
          <NavItem>
          <Link to="mailto: contact.efarrar@gmail.com" target="_blank" className="nav-link"><Mail /></Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;
