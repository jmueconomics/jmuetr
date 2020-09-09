import React from 'react';
import createButton from "../../created-functions/main-button";

const ExtraLinks = (props) => 
    <div>
        <h3 style = {{fontWeight: "600", paddingBottom: "1%"}}>Extra Links (Find more on Awesome Links)</h3>
            {props.arr.map(e => <div key = {e.key} className = "each-link-div">
                <a className = "each-link-a" href = {e.link} target = "_title">
                    {e.title}
                </a> - <span>{e.description}</span>
                </div>)}
                {createButton("head-resources-cards-btn", props.btnLink, "headTopBtn", "Awesome Links GitHub")}
                <div className = "alRead">
                    <span>Checkout the ReadMe.</span>
                </div>
    </div>

export default ExtraLinks;