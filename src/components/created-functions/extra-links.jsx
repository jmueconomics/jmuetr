import React from 'react';
import {EachLinkDiv, EachLinkA, AlRead} from "../styled-components/pages/extra-links/links";
import createButton from "./main-button";

const ExtraLinks = (props) => 
    <div>
        <h3 style = {{fontWeight: "600", paddingBottom: "1%"}}>Extra Links (Find more on Awesome Links)</h3>
            {props.arr.map(e => <EachLinkDiv key = {e.key}>
                <EachLinkA href = {e.link}>
                    {e.title}
                </EachLinkA> - <span>{e.description}</span>
                </EachLinkDiv>)}
                {createButton("head-resources-cards-btn", "https://github.com/sindresorhus/awesome", "headTopBtn", "Awesome Links GitHub")}
                <AlRead>
                    <span>Checkout the ReadMe.</span>
                </AlRead>
    </div>

export default ExtraLinks;