import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor() {
        super();
        this.state = {

        }

    }



    render() {
        let { title, description, imgUrl, newsUrl, mode, btn, text, author, date } = this.props;
        return (
            <div className=''>
                <div className={`card bg-${mode} text-${text}`} style={{}}>
                    <img className="card-img-top" alt='img' src={imgUrl} />
                    <div className="card-body">
                        <h5 className="card-title">{title == null ? title : title.slice(0, 45)}...</h5>
                        <p className="card-text">{description == null ? description : description.slice(0, 88) + '...'}</p>
                        <a href={newsUrl} target='_blank' className={`btn btn-primary btn-sm btn-${btn}`}>Read More</a>
                        <div class="card-footer">
                            <small className="text-muted">By {author ?? "UNKNOWN"} on {new Date(date).toUTCString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
