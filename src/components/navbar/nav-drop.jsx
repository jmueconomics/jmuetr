import React, {useState} from 'react';
import {NavDropdown} from 'react-bootstrap';
import _ from "lodash";


const HoverDropdown = (props) => {
    const [Hovered, setHovered] = useState(false);
    const [Clicked, setClicked] = useState(false);

    return ( <div>
        <NavDropdown
            {...props}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onToggle={() => setClicked(!Clicked)}
            show={Clicked || Hovered}
            title="Code"
            id="basic-nav-dropdown"
        >
        <NavDropdown.Item href={"/" + _.lowerCase("Data Science")}>Data Science</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("R")}>R</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("Python")}>Python</NavDropdown.Item>
        <NavDropdown.Item href={"/" + _.lowerCase("SQL")}>SQL</NavDropdown.Item>
        </NavDropdown>
        </div>
    );
}
export default HoverDropdown;
