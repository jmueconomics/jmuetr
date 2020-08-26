import React from "react";
import _ from "lodash";

const footDeat = () => 
    <div>
        <div className = "foot-top">
            <a href = "https://www.linkedin.com/groups/8402100/" className = "foot-peaps">Join the JMU Economics Network</a>            
        </div>
        <div className = "foot-bot">
            <a href = {"/" + _.lowerCase("About")} className = "foot-ct">About</a>
            <a href = {"/" + _.lowerCase("Contact")} >Contact</a>        
        </div>
    </div>


export default footDeat;

