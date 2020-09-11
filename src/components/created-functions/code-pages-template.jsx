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

        const opts = {
            height: '600',
            width: '700',
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