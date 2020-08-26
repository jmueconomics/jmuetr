import React from "react";

import TitlePara from "../../created-functions/tit-para";
import headTitlejs from "../../../js-files/title-paragraph/head-tit-para";
import HeadMiddle from "../../styled-components/pages/head-middle";


const middleTitle = () => {
    return <HeadMiddle>
        <hr/>
        <TitlePara 
            titleDiv = {headTitlejs[1].titleDiv} 
            title = {headTitlejs[1].title} 
            contentDiv = {headTitlejs[1].contentDiv} 
            content = {headTitlejs[1].content} />    
    </HeadMiddle>
}

export default middleTitle;
