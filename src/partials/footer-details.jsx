import React from "react";
import _ from "lodash";

const footDeat = () => 
    <div>
        <div className = "foot-top">
            <a href = "https://www.linkedin.com/groups/8402100/" className = "foot-peaps foot-dan">Join the JMU Economics Network</a>            
            <a href = "https://www.linkedin.com/in/damon-roberts1997/" className = "foot-peaps foot-dan">Damon Roberts</a>
            <a href = "https://www.linkedin.com/in/dan-blevins/" className = "foot-peaps">Dan Blevins</a>
        </div>
        <div className = "foot-bot">
            <a href = {"/" + _.lowerCase("About")} className = "foot-ct">About</a>
            <a href = {"/" + _.lowerCase("Contact")} >Contact</a>        
        </div>
    </div>


export default footDeat;

