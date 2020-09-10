import React, {Component} from "react";
import TitlePara from "./tit-para";
import Snip from "./snip";
import Cards from "./three-cards";

class CodePageTemplate extends Component {
    constructor() {
        super() 

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
            <button className = "snip-btn">VIEW CODE SNIPPET</button>
        </div>
        {this.state.showSnip ? <Snip className = {this.props.snipJs.class} img = {this.props.snipJs.img} alt = {this.props.snipJs.altName} divName = {this.props.snipJs.divName} /> : null}
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