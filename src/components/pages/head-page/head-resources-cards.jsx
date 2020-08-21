import React from "react";
import _ from "lodash";
import Cards from "../../created-functions/three-cards";
import HeadMore from "../../../js-files/diff-pages/head-more-resources-cards";
import CreateButton from "../../created-functions/main-button";


const headMoreCards = () => {
    return <div className = "head-resources-cards">
    {Cards("head-resources-cards-title", "head-resources-cards-content", "Coding Resources", HeadMore, 3)}
    {CreateButton("head-resources-cards-btn", "/" + _.lowerCase("Data Science"), "headTopBtn", "DATA SCIENCE")}
    </div>
}

export default headMoreCards;