import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import HoverDropdown from "./nav-drop";
import _ from "lodash";
import LogoPic from "../img/logoetr.png";




const JMUnav = () => {

return <Navbar collapseOnSelect expand="lg" className = "color-nav" variant = "dark">
      <Navbar.Brand className = "brand-nav" href="/"><img className = "logo-pic" src = {LogoPic} alt = "jmulogo"></img>Technical Resources | Economics Students</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/"><i className = "home fas fa-home"></i></Nav.Link>
          <Nav.Link href = {"/" + _.lowerCase("Github")}>Github</Nav.Link>
          <HoverDropdown />
          <Nav.Link href="https://www.jmu.edu/cob/economics/about/executive-advisory-board.shtml" target = "_title">About</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/groups/8402100/" target = "_title">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
}

export default JMUnav;
