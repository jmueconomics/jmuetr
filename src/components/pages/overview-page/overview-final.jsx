import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import TitPara from "./overview-top-page";
import MiddleContent from "./overview-middle-content";
import MiddleCards from "./over-view-resources";
import DsArr from "../../../js-files/diff-pages/extra-links/ds-links";
import ExLinks from "../extra-links/ds-extra-links";
import BtnLinks from "../../../js-files/diff-pages/extra-links/btn-links";


const overviewFinal = () => 
    <div>
        <Header/>
        <TitPara/>
        <MiddleContent/>
        <MiddleCards />
        <ExLinks 
        arr = {DsArr}
        btnLink = {BtnLinks.dsAl}
        />
        <Footer/>
    </div>

export default overviewFinal;

