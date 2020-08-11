import React from "react";


const snipbit = (props) => {
    return <div className = {props.divName}>
    <img src = {props.img} className = {props.className} alt = {props.altName}></img>
    </div>
}

export default snipbit;
