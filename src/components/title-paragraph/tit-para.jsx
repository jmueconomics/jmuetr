import React from "react";


const titPara = (props) => { 
    return <div>
    <div className = {props.titleDiv}>
        <h1>{props.title}</h1>
    </div>
    <div class ={props.contentDiv}>
        <p>{props.content}</p>
    </div>
</div>
}

export default titPara;

