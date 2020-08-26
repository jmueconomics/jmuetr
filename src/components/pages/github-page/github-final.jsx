import React from "react";
import Header from "../../../partials/header";
import Footer from "../../../partials/footer";
import Title from "./github-header";
import Buttons from "./github-btns";
import {GithubTopCards, GithubBottomCards} from "./github-top-cards";




const gitHub = () => 
    <div>
        <Header />
        <Title />
        <Buttons />
        <GithubTopCards />
        <GithubBottomCards />
        <Footer />
    </div>
    
export default gitHub;
