import React, {Component, Fragment} from 'react';
import StarRatings from "react-star-ratings";
import axios from "../axios-rating";
import Loader from "./loader";


 
export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            comment: '',
            rating: 0,
            email: '',
            ratingConf: false,
            showLoader: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleText = this.handleText.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
      }
    
      handleChange(event) {
        this.setState({name: event.target.value});
      }
      handleText(event) {
        this.setState({comment: event.target.value})
      }
      handleEmail(event) {
          this.setState({email: event.target.value})
      }
      changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }
      handleSubmit(event) {
        event.preventDefault();
        const rating = {
            personsName: this.state.name,
            emailAddress: this.state.email,
            rating: this.state.rating,
            comment: this.state.comment
        }

        this.setState({showLoader: true})

        axios.post('/ratings.json', rating)
            .then(response => {
                this.setState({ratingConf: !this.state.ratingConf, showLoader: false});
            }) 
            .catch(error => {
                this.setState({showLoader: false});
                alert(error);
        });

        this.setState({
            name: '', 
            comment: '',
            rating: 0,
            email: ''
        });
        
      }

      render() {
        return (
            <div className = "leave-rating">
                { this.state.showLoader ? <Loader /> : <Fragment>
                    { this.state.ratingConf ? <p 
                        style = {{fontSize: "1.3rem", color: "red", padding: "1%"}}>
                        Thank you for leaving a rating. 
                        <br/> 
                        We appreciate the feedback!
                        </p> : null }

                    <h4 style = {{padding: "2%"}}>Leave a Rating</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className = "rating-cont">
                            <input 
                                className = "rating-name"
                                type="text" 
                                required 
                                value = {this.state.name} 
                                onChange = {this.handleChange}
                                placeholder = "Your Name" 
                            />
                        </div>
                        <div className = "rating-cont">
                            <input 
                                className = "rating-name"
                                type = "email" 
                                required 
                                value = {this.state.email} 
                                onChange = {this.handleEmail} 
                                placeholder = "Your Email"
                            />
                        </div>
                        <div className = "rating-cont">
                            <StarRatings
                                rating={this.state.rating}
                                starHoverColor="#27004b"
                                starRatedColor="#ffe18e"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension = "25px"
                                starSpacing = "3px"
                            />
                        </div>
                        <div className = "rating-cont">
                            <textarea 
                                className = "comments"
                                value = {this.state.comment} 
                                required 
                                onChange = {this.handleText} 
                                placeholder = "Comments"
                            />
                        </div>
                        <input className = "rating-submit" type="submit" value="Submit" />
                    </form>
                </Fragment>}
          </div>
        );
      }
}