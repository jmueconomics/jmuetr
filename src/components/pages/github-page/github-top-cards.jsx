import React from "react";
import array from "../../../js-files/diff-pages/head-top-card-content";
import Cards from "../../created-functions/three-cards";
import {GitTutCards} from "../../styled-components/pages/head-github-container";

const GithubTopCards = () => 
    <GitTutCards>
        <hr/>
        {Cards("git-tutorial-title", "git-tutorials-top-cards", "Github Tutorials", array, 4)}
    </GitTutCards>
    const GithubBottomCards = () => 
    <GitTutCards>
        <hr/>
        {Cards("git-resource-title", "git-tutorials-bottom-cards", "Github Resources", array)}
    </GitTutCards>

export { GithubTopCards, GithubBottomCards };

