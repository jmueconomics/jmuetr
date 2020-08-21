import React from "react";
import snipObj from "../../../js-files/diff-pages/snip-bit";
import Snip from "../../created-functions/snip";

const snippet = () => 
    <div>
        <Snip className = {snipObj[0].className}
        img = {snipObj[0].img}
        alt = {snipObj[0].altName}
        divName = {snipObj[0].divName} 
        />
    </div>

export default snippet;
