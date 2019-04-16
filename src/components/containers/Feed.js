import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions'

class Feed extends Component {
    render() {
        const feedName = (this.props.feed.selected) ? this.props.feed.selected.name : '';
        return (
            <div className="content">
                <header>
                    <h1>{feedName}</h1>
                    <hr/>
                    <p>A free and fully responsive site template</p>
                </header>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <ul className="actions">
                    <li><a href="#" className="button big">Learn More</a></li>
                </ul>
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

    }
}

export default connect(stateToProps, dispatchToProps)(Feed);