import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions'

class Feeds extends Component {
    constructor(props){
        super(props);
        this.state = {
            feeds:[],
            feed:{
                name:'',
                url:''
            }
        };
    };

    componentDidMount() {
        this.props.fetchFeeds(null)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            alert(err)
        })
    }

    selectFeed(feed, event){
        event.preventDefault();
        this.props.selectFeed(feed);
    }

    render() {
        const feeds = this.props.feed.all || [];

        return (
            <ul>
                {feeds.map((feed, i) => {
                    const color = (feed == this.props.feed.selected) ? 'red' : '#333'
                    return <li key = {feed.id}>
                    <a style={{color:color}} onClick={this.selectFeed.bind(this, feed)} href="#">{feed.name}</a></li>
                })}
            </ul>
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
        createFeed: (params) => dispatch(actions.createFeed(params)),
        selectFeed: (feed) => dispatch(actions.selectFeed(feed))
    }
}

export default connect(stateToProps, dispatchToProps)(Feeds);