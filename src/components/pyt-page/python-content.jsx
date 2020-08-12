import codePageTemplate from "../created-functions/code-pages-template";
import titlePara from "../../js-files/title-paragraph/head-tit-para";
import snip from "../../js-files/head-page/snip-bit";
import {pythonTutorials, pythonResources} from "../../js-files/head-page/python-page-cards";




const pythPage = () => {
    return codePageTemplate("fab fa-python fa-4x", titlePara[5], snip[2], "Python Tutorials", "Python Resources", pythonTutorials, pythonResources);
}

export default pythPage;
