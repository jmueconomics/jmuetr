import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import SqlContent from "./sql-content";
import SqlArr from "../../../js-files/diff-pages/extra-links/sql-links";
import ExLinks from "../extra-links/ds-extra-links";
import BtnLinks from "../../../js-files/diff-pages/extra-links/btn-links";

const sqlFinal = () => 
    <div>
        <Header/>
        <SqlContent/>
        <ExLinks 
        arr = {SqlArr}
        btnLink = {BtnLinks.sqlAl}
        />
        <Footer/>
    </div>

export default sqlFinal;