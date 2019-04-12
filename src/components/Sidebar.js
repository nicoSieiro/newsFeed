import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions'


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds:[],
            feed:{
                name:'',
                url:''
            }
        };
    }

    componentDidMount() {
        this.props.fetchFeeds(null)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            alert(err)
        })
    }

    updateFeed(field, event){
        let feed = Object.assign({}, this.state.feed);
        feed[field] = event.target.value;

        this.setState({
            feed: feed
        });
    };

    addFeed(event){
        event.preventDefault();
        this.props.createFeed(this.state.feed)
        .then(data => {
            this.setState({ 
                feed : {
                    name : '',
                    url : ''
                }
            });
        })
        .catch(err => {
            alert(err)
        })
    }

    render() { 
        const feeds = this.props.feed.all || [];

        return ( 
            <div id="sidebar">
                <div className="inner">

                    <section id="search" className="alt">
                        <form method="post" action="#">
                            <input onChange={this.updateFeed.bind(this, 'name')} value={this.state.feed.name} type="text" name="query" id="query" placeholder="Feed Name" /><br />
                            <input onChange={this.updateFeed.bind(this, 'url')} value={this.state.feed.url} type="text" name="query" id="query" placeholder="Feed URL" /><br />
                            <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                        </form>
                    </section>

                    <nav id="menu">
                        <header className="major">
                            <h2>My feeds</h2>
                        </header>
                        <ul>
                            {
                                feeds.map((feed, i) => {
                                    return <li key = {feed.id}><a href="#">{feed.name}</a></li>
                                })
                            }
                        </ul>
                    </nav>
                    
                </div>
            </div>    
        );
    }
}

const stateToProps = (state) => {
    return {
        feed: state.feed
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
        createFeed: (params) => dispatch(actions.createFeed(params))
    }
}

export default connect(stateToProps, dispatchToProps)(Sidebar);