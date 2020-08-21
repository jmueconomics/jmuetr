import React from "react";
import TitlePara from "../../created-functions/tit-para";
import headTitlejs from "../../../js-files/title-paragraph/head-tit-para";
import {HeadTopContainer} from "../../styled-components/pages/head-resources-cards";

const topPageOver = () =>
    <HeadTopContainer>
        <i class="fas fa-globe fa-4x"></i>
        <TitlePara 
        titleDiv = {headTitlejs[3].titleDiv} 
        title = {headTitlejs[3].title} 
        contentDiv = {headTitlejs[3].contentDiv} 
        content = {headTitlejs[3].content} />
        <hr/>
    </HeadTopContainer>

export default topPageOver;
