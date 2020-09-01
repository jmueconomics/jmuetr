import React from "react";
import Cards from "../../created-functions/three-cards";
import overCards from "../../../js-files/diff-pages/overview-cards";
import {HeadResourcesCard} from "../../styled-components/pages/head-resources-cards";



const resourceCards = () => 
    <HeadResourcesCard>
        <hr/>
        <div>
            {Cards("head-github-title over-cards", "head-github-cards", "Great Data Science Resources", overCards, 4, 6)}
        </div>
    </HeadResourcesCard>

export default resourceCards;
