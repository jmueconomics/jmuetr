import React from "react";
import array from "../../../js-files/diff-pages/head-top-card-content";
import Cards from "../../created-functions/three-cards";


const GithubTopCards = () => <div className = "git-tut-cards"><hr/>{Cards("git-tutorial-title", "git-tutorials-top-cards", "Github Tutorials", array, 4)}</div>
const GithubBottomCards = () => <div className = "git-tut-cards"><hr/>{Cards("git-resource-title", "git-tutorials-bottom-cards", "Github Resources", array)}</div>

export { GithubTopCards, GithubBottomCards };

