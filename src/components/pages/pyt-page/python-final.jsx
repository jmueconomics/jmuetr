import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import PythonContent from "./python-content";
import PyArr from "../../../js-files/diff-pages/extra-links/python-links";
import ExLinks from "../extra-links/ds-extra-links";
import BtnLinks from "../../../js-files/diff-pages/extra-links/btn-links";


const pythonFinal = () => 
    <div>
        <Header/>
        <PythonContent/>
        <ExLinks 
            arr = {PyArr}
            btnLink = {BtnLinks.pythonAl}
        />
        <Footer/>
    </div>

export default pythonFinal;