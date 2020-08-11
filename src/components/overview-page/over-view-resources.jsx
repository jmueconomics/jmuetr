import React from "react";
import Cards from "../created-functions/three-cards";
import overCards from "../../js-files/head-page/overview-cards";


const resourceCards = () => 

<div className = "head-resources-cards">
    <hr/>
    <div>
        {Cards("head-github-title over-cards", "head-github-cards", "Great Data Science Resources", overCards, 4)}
    </div>
</div>

export default resourceCards;
