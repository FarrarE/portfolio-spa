import React from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import "./styles.css";

function Header() {
  return (
    <div>  
      <Nav>
        <h2>Ezra Farrar</h2> 
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Project</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><GitHub /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><Linkedin /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><Mail /></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;
