import CodePageTemplate from "../../created-functions/code-pages-template";
import titlePara from "../../../js-files/title-paragraph/head-tit-para";
import snip from "../../../js-files/diff-pages/snip-bit";
import {pythonTutorials, pythonResources} from "../../../js-files/diff-pages/python-page-cards";
import React, { Component } from "react";




class PythPage extends Component {
    render() {
        const Python = <CodePageTemplate 
                        iconClass = "fab fa-python fa-4x"
                        titleJs = {titlePara[5]}
                        snipJs = {snip[1]}
                        ct1 = "Python Tutorials"
                        ct2 = "Python Resources"
                        cards1 = {pythonTutorials}
                        cards2 = {pythonResources}
                    />

        return Python;
    }
} 

export default PythPage;
