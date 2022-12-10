import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d85cca46f60046f9b8a0d27180deac22&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,disabled: false });
    }

    handlePrevClick = async ()=>{
        console.log('Previous');
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d85cca46f60046f9b8a0d27180deac22&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page -1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async ()=>{
        console.log('Next');
        if((this.state.page +1) > Math.ceil(this.state.totalResults/20)){
            this.setState({disabled:true});
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d85cca46f60046f9b8a0d27180deac22&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page +1,
                articles: parsedData.articles,
                disabled: false
            })
        }  
    }
    render() {
        return (
            <div className='container my-2'>
                <h1 className="my-4">NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url} >
                            <NewsItem title={element.title ? element.title : ""} description={element.content ? element.content : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    },)}

                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.disabled} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
