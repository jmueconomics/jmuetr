import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import _ from "lodash";


const JMUnav = () => {

return <Navbar collapseOnSelect  expand="lg" className = "color-nav" variant = "light">
    <Navbar.Brand className = "brand-nav" href="/"><img className = "logo-pic" src = "https://www.jmu.edu/identity/_files/JMU-block-RGB-gold.png" alt = "jmulogo"></img>Economics Github</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href = {"/" + _.lowerCase("github")}>Github</Nav.Link>
      <NavDropdown title = "Code" href ={"/" + _.lowerCase("Code")} id="basic-nav-dropdown">
        <NavDropdown.Item href={"/" + _.lowerCase("Overview")}>Overview</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("R")}>R</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("SAS") }>SAS</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("Python") }>Python</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("SQL") }>SQL</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href={"/" + _.lowerCase("About")}>About</Nav.Link>
        <Nav.Link href={"/" + _.lowerCase("Contact")}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
}

export default JMUnav;
