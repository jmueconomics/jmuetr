import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import Rpage from "./r-content";
import RArr from "../../../js-files/diff-pages/extra-links/r-links";
import ExLinks from "../extra-links/ds-extra-links";
import BtnLinks from "../../../js-files/diff-pages/extra-links/btn-links";

const rFinal = () => 
    <div>
        <Header/>
        <Rpage />
        <ExLinks 
        arr = {RArr}
        btnLink = {BtnLinks.rAl}
        />
        <Footer/>
    </div>

export default rFinal;