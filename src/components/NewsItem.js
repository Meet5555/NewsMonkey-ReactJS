import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card" style={{ margin: 'auto' }}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left: '90%'}}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2022-12/n741245g_ishan-kishan-twitter_625x300_10_December_22.jpg"} className="card-img-top" alt="..." style={{ width: '100%' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
