import React from "react";
import Cards from "../card-folder/three-cards";
import HeadMore from "../../js-files/head-page/head-more-resources-cards";
import CreateButton from "../buttons/main-button";


const headMoreCards = () => {
    return <div className = "head-resources-cards">
    {Cards("head-resources-cards-title", "head-resources-cards-content", "Coding Resources", HeadMore, 3)}
    {CreateButton("head-resources-cards-btn", "https://github.com/", "headTopBtn", "OVERVIEW")}
    </div>
}

export default headMoreCards;