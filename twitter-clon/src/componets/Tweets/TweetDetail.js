import React from 'react';
import tweets from '../../data/tweets';

export default class TweetDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tweet: {
                comments: []
            }
        }
    }

    componentWillMount(){
        setTimeout(() => {
            let tweet = tweets.find(t => t._id === this.props._id);
            this.setState({ tweet: tweet });
        }, 2000)
    }

    render(){
        return(
            <div>
                {this.state.tweet.message}
                {
                    this.state.tweet.comments.map( (c,index)=> (
                            <div key={index}>
                                {c.message}
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}
