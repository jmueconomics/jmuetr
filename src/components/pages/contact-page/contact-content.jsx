import React from "react";
import Card from "./contact-cards";
import contactCards from "../../../js-files/diff-pages/contact-details";

const contactMe = () => {
    return <div>
    <div className = "git-tut-cards"><hr/>
    {Card("git-tutorial-title", "git-tutorials-top-cards", "Contact Details", contactCards, 6)}
    </div>
    </div>
}
export default contactMe;
