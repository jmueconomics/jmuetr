import CodePageTemplate from "../../created-functions/code-pages-template";
import titlePara from "../../../js-files/title-paragraph/head-tit-para";
import snip from "../../../js-files/diff-pages/snip-bit";
import {rTutorials, rResources} from "../../../js-files/diff-pages/r-page-cards";


const rPage = () => {
    return new CodePageTemplate("fab fa-r-project fa-4x", titlePara[4], snip[0], "R Tutorials", "R Resources", rTutorials, rResources);
}

export default rPage;
