import React, {Component} from "react";
import TitlePara from "./tit-para";
import Snip from "./snip";
import Cards from "./three-cards";

class CodePageTemplate extends Component {
    constructor(iconClass, titleJs, snipJs, ct1, ct2, cards1, cards2) {
        super(iconClass, titleJs, snipJs, ct1, ct2, cards1, cards2) 
            this.iconClass = iconClass;
            this.titleJs = titleJs;
            this.snipJs = snipJs;
            this.ct1 = ct2;
            this.cards1 = cards1;
            this.cards2 = cards2;
            this.state = {
                showSnip: false
            }
            this.viewSnippet = this.viewSnippet.bind(this);
            
        }

    

    viewSnippet() {
        this.setState({showSnip: !this.state.showSnip})
    }
    
    render() {
        return <div className = "head-top-container">
        <i className={this.iconClass}></i>
        <TitlePara 
            titleDiv = {this.titleJs.titleDiv} 
            title = {this.titleJs.title} 
            contentDiv = {this.titleJs.contentDiv} 
            content = {this.titleJs.content} 
        />
        <hr/>
        <div className = "head-bp-snip" onClick = {this.viewSnippet}>
            <button className = "snip-btn">VIEW CODE SNIPPET</button>
        </div>
        {this.state.showSnip ? <Snip className = {this.snipJs.class} img = {this.snipJs.img} alt = {this.snipJs.altName} divName = {this.snipJs.divName} /> : null}
        <hr/>
        <div className = "middle-bullets-content">
            {Cards("head-github-title over-cards", "head-github-cards", this.ct1, this.cards1, 4, 6)}
        </div>
        <hr/>
        <div>
            {Cards("head-github-title over-cards", "head-github-cards", this.ct2, this.cards2, 4, 6)}
        </div>
    </div>
    }
    
}

export default CodePageTemplate;