import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import TitPara from "./overview-top-page";
import MiddleContent from "./overview-middle-content";
import MiddleCards from "./over-view-resources";
import ExtraLinks from "../../created-functions/extra-links";
import DsArr from "../../../js-files/diff-pages/extra-links/data-science-links";
import {LinkDiv} from "../../styled-components/pages/extra-links/links";

const overviewFinal = () => 
    <div>
        <Header/>
        <TitPara/>
        <MiddleContent/>
        <MiddleCards />
        <LinkDiv>
            <ExtraLinks arr = {DsArr}/>
        </LinkDiv>
        <Footer/>
    </div>

export default overviewFinal;

