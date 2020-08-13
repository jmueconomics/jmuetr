import React from "react";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import ContactTitlePara from "./contact-tit-para";
import ContactCards from "./contact-content";

const contactFinal = () => 
<div>
<Header/>
<div className = "head-top-paragraph contact-page">
<ContactTitlePara/>
<ContactCards />
</div>
<Footer/>
</div>

export default contactFinal;