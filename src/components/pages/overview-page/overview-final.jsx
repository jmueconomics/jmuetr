import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import TitPara from "./overview-top-page";
import MiddleContent from "./overview-middle-content";
import MiddleCards from "./over-view-resources";


const overviewFinal = () => 
    <div>
        <Header/>
        <TitPara/>
        <MiddleContent/>
        <MiddleCards />
        <Footer/>
    </div>

export default overviewFinal;

