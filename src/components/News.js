import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {


    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }


    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            articles: [],
            page: 1,
            totalResults: 0,
        }
        document.title = "NewsMonkey-" + this.props.category.toUpperCase();

    }

    async componentDidMount() {
        this.updateNews();
    }

    updateNews = async () => {

        const { apiKey } = this.props;
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0752f424f0344ed0bf58a4c31bede3a0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.totalResults);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
        console.log(apiKey);
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1,

        })
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1, })
        this.updateNews();

    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0752f424f0344ed0bf58a4c31bede3a0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            page: this.state.page + 1,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.totalResults);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });

    };


    render() {
        let { color } = this.props;
        return (
            <>
                <div className="container my-2">
                    <h2 style={{ textAlign: 'center', color: color, marginTop: '56px' }}>{`Top Headlines from ${this.props.category.toUpperCase()}`}</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className='row'>
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4 my-2" key={element.url}>

                                        {<NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} mode={this.props.mode} btn={this.props.btn} text={this.props.text} author={element.author} date={element.publishedAt} />}
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>

                </div>
            </>


        )
    }
}
