import React from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import "./styles.css";

function Header() {
  return (
    <div className="navbar">  
      <Nav >
          <NavItem>
          <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/projects">Project</NavLink>
          </NavItem>
      </Nav>
      <Nav className="social">
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
