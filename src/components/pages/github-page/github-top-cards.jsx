import React from "react";
import {GitResources, GitTutorials} from "../../../js-files/diff-pages/github-resources";
import Cards from "../../created-functions/three-cards";

const GithubTopCards = () => 
    <div className = "git-tut-cards">
        <hr/>
        {Cards("git-tutorial-title", "git-tutorials-top-cards", "Github Tutorials", GitResources, 4, 6)}
    </div>

const GithubBottomCards = () => 
    <div className = "git-tut-cards">
        <hr/>
        {Cards("git-resource-title", "git-tutorials-bottom-cards", "Github Resources", GitTutorials, 4, 6)}
    </div>

export { GithubTopCards, GithubBottomCards };

