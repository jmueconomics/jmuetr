import codePageTemplate from "../created-functions/code-pages-template";
import titlePara from "../../js-files/title-paragraph/head-tit-para";
import snip from "../../js-files/head-page/snip-bit";
import {sqlTutorials, sqlResources} from "../../js-files/head-page/sql-page";

const sqlPage = () => {
    return codePageTemplate("fas fa-database fa-4x", titlePara[6], snip[3], "SQL Tutorials", "SQL Resources", sqlTutorials, sqlResources);
}

export default sqlPage;
