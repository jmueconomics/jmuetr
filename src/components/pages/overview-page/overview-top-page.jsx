import React from "react";
import TitlePara from "../../created-functions/tit-para";
import headTitlejs from "../../../js-files/title-paragraph/head-tit-para";

const topPageOver = () =>
    <div className = "head-top-container">
        <i className ="fas fa-globe fa-4x"></i>
        <TitlePara 
        titleDiv = {headTitlejs[3].titleDiv} 
        title = {headTitlejs[3].title} 
        contentDiv = {headTitlejs[3].contentDiv} 
        content = {headTitlejs[3].content} />
        <div style = {{paddingBottom: "5%", fontSize: "0.75rem"}}><a href = "https://www.mastersindatascience.org/careers/data-scientist/">(Source: https://www.mastersindatascience.org/careers/data-scientist/)</a>
        </div>
        <hr/>
    </div>

export default topPageOver;
