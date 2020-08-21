import React from "react";

import TitlePara from "../../created-functions/tit-para";
import headTitlejs from "../../../js-files/title-paragraph/head-tit-para";


const middleTitle = () => {
    return <div className = "head-middle">
        <hr/>
        <TitlePara 
    titleDiv = {headTitlejs[1].titleDiv} 
    title = {headTitlejs[1].title} 
    contentDiv = {headTitlejs[1].contentDiv} 
    content = {headTitlejs[1].content} />
        
    </div>
}

export default middleTitle;
