import React from "react";
import _ from "lodash";

const footDeat = () => {
    return <div>
                <div className = "foot-top">
                    <a href = "https://www.linkedin.com/in/dan-blevins/" className = "foot-peaps foot-dan">Dan Blevins</a>
                    <a href = "https://www.linkedin.com/in/damon-roberts1997/" className = "foot-peaps">Damon Roberts</a>
                </div>
                <div className = "foot-bot">
                <a href = {"/" + _.lowerCase("About")} className = "foot-ct">About</a>
                    <a href = {"/" + _.lowerCase("Contact")} >Contact</a>
                    
                </div>
    </div>
}

export default footDeat;

