import React, { Component } from 'react';
import CodePageTemplate from "../../created-functions/code-pages-template";
import titlePara from "../../../js-files/title-paragraph/head-tit-para";
import snip from "../../../js-files/diff-pages/snip-bit";
import {rTutorials, rResources} from "../../../js-files/diff-pages/r-page-cards";


class Rstatistics extends Component {
    render() {
        const Rstat = <CodePageTemplate 
                        iconClass = "fab fa-r-project fa-4x"
                        titleJs = {titlePara[4]}
                        snipJs = {snip[0]}
                        ct1 = "R Resources"
                        ct2 = "R Tutorials"
                        cards1 = {rTutorials}
                        cards2 = {rResources}
                    />

        return Rstat;
    }
} 

export default Rstatistics;
