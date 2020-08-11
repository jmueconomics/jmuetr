import codePageTemplate from "../overview-page/code-pages-template";
import titlePara from "../../js-files/title-paragraph/head-tit-para";
import snip from "../../js-files/head-page/snip-bit";
import {rTutorials, rResources} from "../../js-files/head-page/r-page-cards";


const rPage = () => {
    return codePageTemplate("fas fa-globe fa-4x", titlePara[4], snip[1], "R Tutorials", "R Resources", rTutorials, rResources);
}

export default rPage;
