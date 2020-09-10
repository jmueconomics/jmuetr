import React, { Component } from 'react';
import CodePageTemplate from "../../created-functions/code-pages-template";
import titlePara from "../../../js-files/title-paragraph/head-tit-para";
import snip from "../../../js-files/diff-pages/snip-bit";
import {sqlTutorials, sqlResources} from "../../../js-files/diff-pages/sql-page";

class SQL extends Component {
    render() {
        const Sqlstat = <CodePageTemplate 
                        iconClass = "fas fa-database fa-4x"
                        titleJs = {titlePara[6]}
                        snipJs = {snip[2]}
                        ct1 = "SQL Tutorials"
                        ct2 = "SQL Resources"
                        cards1 = {sqlTutorials}
                        cards2 = {sqlResources}
                    />

        return Sqlstat;
    }
} 

export default SQL;
