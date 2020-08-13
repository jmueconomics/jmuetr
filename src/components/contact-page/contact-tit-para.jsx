import React from "react";
import TitPara from "../created-functions/tit-para";
import content from "../../js-files/title-paragraph/head-tit-para";



const contactTop = () => {
    return <div>
    <i class="fas fa-envelope fa-4x"></i>
    <TitPara
    titleDiv = {content[7].titleDiv}
    title = {content[7].title}
    contentDiv = {content[7].contentDiv}
    content = {content[7].content}
    />
    </div>
}

export default contactTop;

