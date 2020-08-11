import React from "react";
import _ from "lodash";

const footDeat = () => {
    return <div>
                <div className = "foot-top">
                    <a href = "https://www.linkedin.com/in/dan-blevins/" className = "foot-peaps foot-dan">Dan Blevans</a>
                    <a href = "https://www.linkedin.com/in/damon-roberts1997/" className = "foot-peaps">Damon Roberts</a>
                </div>
                <div className = "foot-bot">
                    <a href = {"/" + _.lowerCase("Contact")} className = "foot-ct">Contact</a>
                    <a href = {"/" + _.lowerCase("About")}>About</a>
                </div>
    </div>
}

export default footDeat;

