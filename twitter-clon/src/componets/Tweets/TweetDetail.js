import React from 'react';
import tweets from '../../data/tweets';
import {Link} from 'react-router-dom';

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
                <h1>
                {this.state.tweet.message}
                </h1>
                <Link to={"/tweet/edit/" + this.props._id}> Editar</Link>
                <p>
                {
                    this.state.tweet.comments.map( (c,index)=> (
                            <div key={index}>
                                { (index+1) + '.'}{c.message}
                            </div>
                        )
                    )
                }
                </p>
            </div>
        );
    }
}
