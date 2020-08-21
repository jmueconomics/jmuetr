import React from "react";

const createButton = (divClass, link, btnClass, btnTitle) => {
    return <div className = {divClass}>
        <a href={link} className ={btnClass}>{btnTitle}</a>
    </div>
}

export default createButton;

