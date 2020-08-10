import React from "react";
import Header from "../../partials/header";
import Footer from '../../partials/footer';
import HeadPageTitle from "./head-top-container";
import HeadTopCards from "./head-top-cards";
import HeadMiddleTitle from "./head-middle-container";
import HeadMoreCards from "./head-resources-cards";
import BottomPara from "./bottom-paragraph";



const headPageFinal = () => {
    return <div>
    <Header />
    <HeadPageTitle />
    <HeadTopCards />
    <HeadMiddleTitle />
    <HeadMoreCards />
    <BottomPara />
    <Footer />
  </div>
}

export default headPageFinal;