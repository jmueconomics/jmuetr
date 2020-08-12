import React from "react";
import TitlePara from "./tit-para";
import Snip from "./snip";
import Cards from "./three-cards";


const codePageTemplate = (iconClass, titleJs, snipJs, ct1, ct2, cards1, cards2) => {
    return <div className = "head-top-paragraph">
        <i className={iconClass}></i>
        <TitlePara 
        titleDiv = {titleJs.titleDiv} 
        title = {titleJs.title} 
        contentDiv = {titleJs.contentDiv} 
        content = {titleJs.content} />
        <hr/>
        <div className = "snip-title">
        <h3>Code Snippet</h3>
        </div>
        <Snip className = {snipJs.className}
            img = {snipJs.img}
            alt = {snipJs.altName}
            divName = {snipJs.divName} 
            />
        <hr/>
        <div className = "git-tut-cards">
            {Cards("head-github-title over-cards", "head-github-cards", ct1, cards1, 4)}
        </div>
        <hr/>
        <div>
            {Cards("head-github-title over-cards", "head-github-cards", ct2, cards2, 4)}
        </div>
    </div>
}

export default codePageTemplate;