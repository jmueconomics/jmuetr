import React, {useState} from 'react';
import {NavDropdown} from 'react-bootstrap';

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
        <NavDropdown.Item href="/Overview">Overview</NavDropdown.Item>
        <NavDropdown.Item href="/R">R</NavDropdown.Item>
        <NavDropdown.Item href="/SAS">SAS</NavDropdown.Item>
        <NavDropdown.Item href="/Python">Python</NavDropdown.Item>
        <NavDropdown.Item href="/SQL">SQL</NavDropdown.Item>
        </NavDropdown>
        </div>
    );
}
export default HoverDropdown;
