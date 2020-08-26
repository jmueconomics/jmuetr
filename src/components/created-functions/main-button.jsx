import React from "react";

const createButton = (divClass, link, btnClass, btnTitle) => 
    <div className = {divClass}>
        <a href={link} className ={btnClass}>{btnTitle}</a>
    </div>


export default createButton;

