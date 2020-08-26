import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import ContactTitlePara from "./contact-tit-para";
import ContactCards from "./contact-content";
import {ContactTopPara} from "../../styled-components/pages/head-contact";

const contactFinal = () => 
<div>
    <Header/>
    <ContactTopPara>
        <ContactTitlePara/>
        <ContactCards />
    </ContactTopPara>
    <Footer/>
</div>

export default contactFinal;