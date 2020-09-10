import React, {Fragment, Component} from "react";
import Foot from "./footer-details"
import Rating from "./rating";


class JMUfoot extends Component {
    constructor() {
        super()

        this.state = {
            rating: false
        }
        this.ratingCheck = this.ratingCheck.bind(this);
    }
    

    ratingCheck() {
        this.setState({rating: !this.state.rating})
    }


    render() {
        return <Fragment>
        {this.state.rating ? <Rating /> : null }
        <div className = "footer"> 
            <Foot ratingClick = {this.ratingCheck} />
            <p className = "foot-he">Technical Resources | Economics Students</p>
            <p className = "foot-cr">© Copyright DRS. Designed by <a href = "https://drs-website.herokuapp.com/" target = "_title" style = {{letterSpacing: "normal", textDecoration: "underline"}}>Damon Roberts.</a></p>
        </div>
    </Fragment>
    }
} 
export default JMUfoot;
