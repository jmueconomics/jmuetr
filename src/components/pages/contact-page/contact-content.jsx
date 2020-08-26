import React from "react";
import Card from "./contact-cards";
import contactCards from "../../../js-files/diff-pages/contact-details";
import {GitTutCards} from "../../styled-components/pages/head-github-container";

const contactMe = () => 
    <div>
        <GitTutCards>
        <hr/>
            {Card("git-tutorial-title", "git-tutorials-top-cards", "Contact Details", contactCards, 6)}
        </GitTutCards>
    </div>

export default contactMe;
