import React from "react";
import headTitlejs from "../../../js-files/title-paragraph/head-tit-para";
import TitlePara from "../../created-functions/tit-para";
import {HeadTopContainer} from "../../styled-components/pages/head-resources-cards";

const headPageTitle = () => <HeadTopContainer>
    <i className = "fas fa-university fa-4x"></i>
    <TitlePara 
    titleDiv = {headTitlejs[0].titleDiv} 
    title = {headTitlejs[0].title} 
    contentDiv = {headTitlejs[0].contentDiv} 
    content = {headTitlejs[0].content} />
    <hr/>
</HeadTopContainer>

export default headPageTitle;
