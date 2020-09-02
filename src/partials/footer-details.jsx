/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import ShareBtns from "./share-btns";

export default class FootDeat extends Component {
    constructor() {
        super()

        this.state = {
            showShare: false
        }

        this.toggleShare = this.toggleShare.bind(this);
    }

    toggleShare() {
        this.setState({showShare: !this.state.showShare});
    }

    render() {
      return <Fragment>
            <div className = "foot-social">
                <a className = "share-click" onClick = {this.toggleShare} style = {{cursor: "pointer"}}>Share<i className="share-icon fas fa-share"></i></a>
                {this.state.showShare === true ? <ShareBtns/> : null}
                <a href = "https://www.linkedin.com/groups/8402100/" className = "foot-peaps">Join the JMU Economics Network</a>            
            </div>
    </Fragment>  
    }
}


