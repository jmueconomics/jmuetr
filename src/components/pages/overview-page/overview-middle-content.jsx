import React from "react";
import {MiddleBulletsContent, HeadBulPara, OverBulletsTitle} from "../../styled-components/pages/head-bullets";

const middleContent = () => 
    <MiddleBulletsContent>
        <hr/>
        <HeadBulPara>
            <OverBulletsTitle>
                <h3>Top 3 Things About Data Science</h3>     
            </OverBulletsTitle>
            <div>
                <li>Lorem ipsum.</li>
                <li>Lorem ipsum.</li>
                <li>Lorem ipsum.</li> 
            </div>
        </HeadBulPara>
    </MiddleBulletsContent>


export default middleContent;