import React, { Component } from 'react';
import turbo from 'turbo360';

const initialFeeds = [{
    name:'hacker-news',
    url:'https://medium.com/feed/hacker-daily/tagged/hacker-news'
},
{
    name:'hacker-news',
    url:'https://medium.com/feed/hacker-daily/tagged/hacker-news'
}]

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


    updateFeed(field, event){
        let feed = Object.assign({}, this.state.feed);
        feed[field] = event.target.value;

        this.setState({
            feed: feed
        });
    };

    addFeed(event){
        event.preventDefault();
        //TODO: Create bk endpoint in order to persist the data
        var turboClient = turbo({
            site_id: '5cadfcfd5d20970015d8c4a4'
        })
        
        turboClient.create('feed', this.state.feed)
        .then(data => {
            console.log(data)
            let feeds = Object.assign([], this.state.feeds);
            feeds.push(data);
            this.setState({ feeds: feeds });
        })
        .catch(err => {
            alert(err)
        })
    }

    render() { 
        return ( 
            <div id="sidebar">
                <div className="inner">

                    <section id="search" className="alt">
                        <form method="post" action="#">
                            <input onChange={this.updateFeed.bind(this, 'name')} type="text" name="query" id="query" placeholder="Feed Name" /><br />
                            <input onChange={this.updateFeed.bind(this, 'url')} type="text" name="query" id="query" placeholder="Feed URL" /><br />
                            <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                        </form>
                    </section>

                    <nav id="menu">
                        <header className="major">
                            <h2>My feeds</h2>
                        </header>
                        <ul>
                            {
                                this.state.feeds.map((feed, i) => {
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
 
export default Sidebar;