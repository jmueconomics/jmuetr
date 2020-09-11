/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import YouTube from 'react-youtube';

const middleContent = () => {

    const _onReady = (event) => {
        event.target.pauseVideo();
      }
    
    const opts = {
        height: '600',
        width: '700',
        playerVars: {
        autoplay: 2,
        },
    };

    return <div className = "git-buttons-div">
        <div className = "head-bul-para">
            <h3>Video and Articles on Data Science</h3>     
            <div className = "bul-links">
                <li><a href = "https://www.kdnuggets.com/2018/05/simplilearn-9-must-have-skills-data-scientist.html" target = "_blank">9 Must-have skills you need to become a Data Scientist</a></li>
                <li><a href = "https://blog.udacity.com/2014/11/data-science-job-skills.html" target = "_blank">What is Data Science? 8 Skills That Will Get You Hired in Data</a></li>
                <li><a href = "https://intellipaat.com/blog/what-is-data-science/" target = "_blank">What is Data Science?</a></li>
            </div>
            <YouTube className = "snip" videoId = "pzo13OPXZS4" opts={opts} onReady={_onReady}/>
        </div>
    </div>
}

export default middleContent;