import React, {Component} from "react";
import TitlePara from "./tit-para";
import Snip from "./snip";
import Cards from "./three-cards";
import {HeadTopContainer} from "../styled-components/pages/head-resources-cards";
//import {GitTutCards} from "../styled-components/pages/head-github-container";
import {MiddleBulletsContent} from "../styled-components/pages/head-bullets";
import {HeadBpSnip, SnipBtn} from "../styled-components/pages/head-bottom-para";


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
        }

    

    viewSnippet = () => {this.setState({showSnip: !this.state.showSnip})}
    
    render() {
        return <HeadTopContainer>
        <i className={this.iconClass}></i>
        <TitlePara 
            titleDiv = {this.titleJs.titleDiv} 
            title = {this.titleJs.title} 
            contentDiv = {this.titleJs.contentDiv} 
            content = {this.titleJs.content} 
        />
        <hr/>
        <HeadBpSnip onClick = {this.viewSnippet}>
            <SnipBtn>VIEW CODE SNIPPET</SnipBtn>
        </HeadBpSnip>
        {this.state.showSnip ? <Snip className = {this.snipJs.class} img = {this.snipJs.img} alt = {this.snipJs.altName} divName = {this.snipJs.divName} /> : null}
        <hr/>
        <MiddleBulletsContent>
            {Cards("head-github-title over-cards", "head-github-cards", this.ct1, this.cards1, 4, 6)}
        </MiddleBulletsContent>
        <hr/>
        <div>
            {Cards("head-github-title over-cards", "head-github-cards", this.ct2, this.cards2, 4, 6)}
        </div>
    </HeadTopContainer>
    }
    
}

export default CodePageTemplate;