import React from "react";


const titPara = (props) => 
    <div>
        <div className = {props.titleDiv}>
            <h1>{props.title}</h1>
        </div>
        <div className = {props.contentDiv}>
            <p className = "title-paragraph-pad">{props.content}</p>
        </div>
    </div>


export default titPara;

