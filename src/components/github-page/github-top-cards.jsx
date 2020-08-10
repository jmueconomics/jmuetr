import React from "react";
import Cards from "../card-folder/three-cards";
import array from "../../js-files/head-page/head-top-card-content";


const GithubTopCards = () => <div>{Cards("git-tutorial-title", "git-tutorials-top-cards", "Github Tutorials", array, 4)}</div>
const GithubBottomCards = () => <div>{Cards("git-resource-title", "git-tutorials-bottom-cards", "Github Resources", array)}</div>

export {GithubTopCards, GithubBottomCards};

