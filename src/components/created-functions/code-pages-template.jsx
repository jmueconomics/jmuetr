import React, {Component} from "react";
import TitlePara from "./tit-para";
import Cards from "./three-cards";
import YouTube from 'react-youtube';

class CodePageTemplate extends Component {
    constructor() {
        super() 

            this.state = {
                showSnip: false
            }
            this.viewSnippet = this.viewSnippet.bind(this);
            this._onReady = this._onReady.bind(this);

        }

    viewSnippet() {
        this.setState({showSnip: !this.state.showSnip})
    }

    _onReady(event) {
        event.target.pauseVideo();
      }
    
    render() {

        const med = window.innerWidth < 800;
        const sm = window.innerWidth < 499;

        let h = "600";
        let w = "700";

        if (sm) {
            h = "250"
            w = "300"
        } else if (med) {
            h = "300"
            w = "400"
        } 

        const opts = {
            height: h,
            width: w,
            playerVars: {
                autoplay: 2,
            },
        };

        return <div className = "head-top-container">
        <i className={this.props.iconClass}></i>
        <TitlePara 
        //----------------------------------
            titleDiv = {this.props.titleJs.titleDiv} 
            title = {this.props.titleJs.title} 
            contentDiv = {this.props.titleJs.contentDiv} 
            content = {this.props.titleJs.content} 
        />
        <div style = {{paddingBottom: "5%", fontSize: "0.75rem"}}><a href = {this.props.source}>(Source: {this.props.source})</a>
        </div>
        <hr/>
        <div className = "head-bp-snip" onClick = {this.viewSnippet}>
            <button className = "snip-btn">VIEW INTRO VIDEO</button>
        </div>
        {this.state.showSnip ? <YouTube className = "snip" videoId={this.props.vidId} opts={opts} onReady={this._onReady} /> : null}
        <hr/>
        <div className = "middle-bullets-content">
            {Cards("head-github-title over-cards", "head-github-cards", this.props.ct1, this.props.cards1, 4, 6)}
        </div>
        <hr/>
        <div>
            {Cards("head-github-title over-cards", "head-github-cards", this.props.ct2, this.props.cards2, 4, 6)}
        </div>
    </div>
    }
    
}

export default CodePageTemplate;