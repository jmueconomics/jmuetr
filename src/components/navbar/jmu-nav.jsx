import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import HoverDropdown from "./nav-drop";
import _ from "lodash";




const JMUnav = () => {

return <Navbar collapseOnSelect expand="lg" className = "color-nav" variant = "dark">
    <Navbar.Brand className = "brand-nav" href="/"><img className = "logo-pic" src = "https://www.jmu.edu/identity/_files/JMU-block-RGB-white.png" alt = "jmulogo"></img>Economics Github</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/"><i class="fas fa-home"></i></Nav.Link>
      <Nav.Link href = {"/" + _.lowerCase("Github")}>Github</Nav.Link>
      <HoverDropdown />
      <Nav.Link href={"/" + _.lowerCase("About")}>About</Nav.Link>
        <Nav.Link href={"/" + _.lowerCase("Contact")}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
}

export default JMUnav;
