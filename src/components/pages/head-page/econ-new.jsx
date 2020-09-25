/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import axios from "axios";
import Loader from "../../../partials/loader";

class News extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=Economics&sortBy=popularity&apiKey=" + process.env.REACT_APP_API_KEY
      )
      .then(response => {
          console.log(response)
          return response.data.articles.map(article => {
            return (
                {
                    date: `${article.publishedAt.slice(0, 10)}`,
                    author: `${article.author}`,
                    title: `${article.title}`,
                    url: `${article.url}`,
                    img: `${article.urlToImage}`,
                    desc: `${article.description.slice(0, 200)}`
                })
            })
        })
      .then(articles => {
        console.log(articles)
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <div className = "link-div" style = {{marginTop: "8%"}}>
        <h2>Live Economics News</h2>
        <div>
          {!isLoading ? (
            articles.map(article => {
              const { author, title, url, date, desc } = article;
              return (
                <div key={url} className = "each-link-div">
                  <p>{author}, {date}</p>
                  <a className = "each-link-a" href = {url} target = "_blank">{title}</a>
                  <p style = {{fontSize: "1rem"}}>{desc}... <a className = "each-link-a" href = {url} target = "_blank">Read More</a></p>
                </div>
              );
            })
          ) : (
            <Loader/>
          )}
        </div>
      </div>
    );
  }
}
export default News;