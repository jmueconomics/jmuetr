import React from "react";

import Cards from "../../created-functions/three-cards";
import headCards from "../../../js-files/diff-pages/head-top-card-content";
import CreateButton from "../../created-functions/main-button";
import {HeadGithubContainer} from "../../styled-components/pages/head-github-container";


const headTop = () => <HeadGithubContainer>
    {Cards("head-github-title", "head-github-cards", "Github Resources", headCards, 4)}
    {CreateButton("head-github-btn","https://github.com/","headTopBtn", "GO TO GITHUB")}
</HeadGithubContainer>


export default headTop;


