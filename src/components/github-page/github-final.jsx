import React from "react";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import Title from "./github-header";
import{GithubTopCards, GithubBottomCards} from "./github-top-cards";




const gitHub = () => {
    return <div>
    <Header />
    <Title />
    <GithubTopCards />
    <GithubBottomCards />
    <Footer />
    </div>
    
}

export default gitHub;
