import React from "react";
import Foot from "./footer-details"


const JMUfoot = () => { 
    return <div className = "footer"> 
    <Foot />
    <p className = "foot-he">Technical Resources | Economics Students</p>
    <p className = "foot-cr">© Copyright DRS. Designed by <a href = "https://drs-website.herokuapp.com/" target = "_title" style = {{letterSpacing: "normal", textDecoration: "underline"}}>Damon Roberts.</a></p>
    </div>
}

export default JMUfoot;
