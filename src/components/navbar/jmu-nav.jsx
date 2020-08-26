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
<<<<<<< HEAD
      <Nav.Link href="/"><i class="home fas fa-home"></i></Nav.Link>
=======
      <Nav.Link href="/">Home</Nav.Link>
>>>>>>> 0d2342dd4ced0ff8c23060d681196a6ba2c78942
      <Nav.Link href = {"/" + _.lowerCase("Github")}>Github</Nav.Link>
      <HoverDropdown />
      <Nav.Link href={"/" + _.lowerCase("About")}>About</Nav.Link>
        <Nav.Link href={"/" + _.lowerCase("Contact")}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
}

export default JMUnav;
