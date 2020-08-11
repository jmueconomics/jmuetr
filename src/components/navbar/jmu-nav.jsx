import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import HoverDropdown from "./nav-drop";



const JMUnav = () => {

return <Navbar collapseOnSelect  expand="lg" className = "color-nav" variant = "light">
    <Navbar.Brand className = "brand-nav" href="/"><img className = "logo-pic" src = "https://www.jmu.edu/identity/_files/JMU-block-RGB-gold.png" alt = "jmulogo"></img>Economics Github</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href = "/github">Github</Nav.Link>
      <HoverDropdown />
      <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
}

export default JMUnav;
