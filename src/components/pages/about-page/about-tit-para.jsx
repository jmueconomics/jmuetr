import React from "react";
import {
    HeadTopContainer, 
    HeadFirstTitle, 
    AboutParaDiv, 
    AboutPara
} from "../../styled-components/pages/head-resources-cards";

const about = () => 
    <HeadTopContainer>
        <i className ="fas fa-question fa-4x"></i>
        <HeadFirstTitle>
            <h1>About The Page </h1>
        </HeadFirstTitle>
        <AboutParaDiv>
            <AboutPara>
                Why did we want to make a page like this? Well, there were countless times in College 
                when I (Damon) was doing Econometrics projects that I thought “WOW”, I really do not 
                know what I am doing in terms of coding. I would sometimes write 400-500 lines of code 
                where if I had done my research online and checked out some of these resources, I could 
                have completed the steps in 80-100. <br/><br/>
                Also, coming out of college I had no idea what Github was. I had heard of it, 
                and knew it was something to do with programming but never knew how it worked. 
                Since about March of 2020, I have really delved into programming and realized 
                just how crucial Github is. Now, again you might be thinking 
                “Wait, I don’t want to go into programming?”, well, Github is not just 
                used for programming purposes but also collaborating between colleagues 
                so you can work on projects together. A lot of Data Analysts (such as Dan) 
                use it regularly in their jobs. <br/><br/>
                <strong style = {{color: "red"}}>[maybe Dan, add something here if you want]</strong> <br/><br/>
                Anyway, we hope you like this page, and can find some use out of it. If you have any questions don’t hesitate to contact via Email or LinkedIn.
            </AboutPara>
        </AboutParaDiv>
    </HeadTopContainer>


export default about;
