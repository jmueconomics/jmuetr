import React from "react";
import headTitlejs from "../../../js-files/title-paragraph/head-tit-para";
import TitlePara from "../../created-functions/tit-para";

const githubTitle = () => 
    <div className = "github-page-title">
        <i className ="fab fa-github fa-4x"></i>
        <TitlePara 
        titleDiv = {headTitlejs[2].titleDiv} 
        title = {headTitlejs[2].title} 
        contentDiv = {headTitlejs[2].contentDiv} 
        content = {headTitlejs[2].content} />
        <hr /> 
    </div>


export default githubTitle;


