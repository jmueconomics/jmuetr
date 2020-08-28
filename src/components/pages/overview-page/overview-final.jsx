import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import TitPara from "./overview-top-page";
import MiddleContent from "./overview-middle-content";
import MiddleCards from "./over-view-resources";
import ExLinks from "../extra-links/ds-extra-links";
import DsArr from "../../../js-files/diff-pages/extra-links/data-science-links";

const overviewFinal = () => 
    <div>
        <Header/>
        <TitPara/>
        <MiddleContent/>
        <MiddleCards />
        <ExLinks arr = {DsArr}/>
        <Footer/>
    </div>

export default overviewFinal;

