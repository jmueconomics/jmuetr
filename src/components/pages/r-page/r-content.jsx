import React, { Component } from 'react';
import CodePageTemplate from "../../created-functions/code-pages-template";
import titlePara from "../../../js-files/title-paragraph/head-tit-para";
import {rTutorials, rResources} from "../../../js-files/diff-pages/r-page-cards";


class Rstatistics extends Component {
    render() {
        const Rstat = <CodePageTemplate 
                        iconClass = "fab fa-r-project fa-4x"
                        titleJs = {titlePara[4]}
                        ct1 = "R Resources"
                        ct2 = "R Tutorials"
                        cards1 = {rTutorials}
                        cards2 = {rResources}
                        vidId = "SWxoJqTqo08"
                        source = "https://www.r-project.org/about.html"
                    />

        return Rstat;
    }
} 

export default Rstatistics;
