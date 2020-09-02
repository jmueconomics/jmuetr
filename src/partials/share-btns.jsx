import React, { Component } from 'react';
import { 
    FacebookShareButton, 
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon
} from "react-share";

export default class ShareBtns extends Component {
    
    render() {
        const shareUrl = 'https://jmu-econ-alumni.herokuapp.com/';
        const title = 'JMU Economics Alumni | Technical Resources for Github, Economics and Data Science | Check it out';

        return(
        <div className = "social-container">
            <div className = "social-1">
                <div className="social-btns">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="social-btns__share-button"
                        >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
                <div className="social-btns">
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="social-btns__share-button"
                        >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </div>
            </div>
            <div className = "social-2">
                <div className="social-btns">
                    <LinkedinShareButton url={shareUrl} className="social-btns__share-button">
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
            
            
                <div className="social-btns">
                    <RedditShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={660}
                        windowHeight={460}
                        className="social-btns__share-button"
                        >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                </div>
            </div>
        </div>
        )
    }
}


    


