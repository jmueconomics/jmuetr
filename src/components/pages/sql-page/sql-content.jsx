import React, { Component } from 'react';
import CodePageTemplate from "../../created-functions/code-pages-template";
import titlePara from "../../../js-files/title-paragraph/head-tit-para";
import {sqlTutorials, sqlResources} from "../../../js-files/diff-pages/sql-page";

class SQL extends Component {
    render() {
        const Sqlstat = <CodePageTemplate 
                        iconClass = "fas fa-database fa-4x"
                        titleJs = {titlePara[6]}
                        ct1 = "SQL Tutorials"
                        ct2 = "SQL Resources"
                        cards1 = {sqlTutorials}
                        cards2 = {sqlResources}
                        vidId = "27axs9dO7AE"
                        source = "http://www.sqlcourse.com/intro.html"
                    />

        return Sqlstat;
    }
} 

export default SQL;
