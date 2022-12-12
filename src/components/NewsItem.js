import React from 'react'

const NewsItem = (props)=>{

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card" style={{ margin: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', top: '-15px' }}>
                        <span className="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2022-12/n741245g_ishan-kishan-twitter_625x300_10_December_22.jpg"} className="card-img-top" alt="..." style={{ width: '100%' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-success"> By "<b>{author ? author : "unknown"}</b>" on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem
