import React from "react";
import Cards from "../../created-functions/three-cards";
import HeadMore from "../../../js-files/diff-pages/head-more-resources-cards";

const headMoreCards = () => {
    return <div className = "head-resources-cards">
        {Cards("head-resources-cards-title", "head-resources-cards-content", "Coding Resources", HeadMore, 3, 6)}
    </div>
}

export default headMoreCards;