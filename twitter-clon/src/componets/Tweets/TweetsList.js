import React from 'react';
import tweets from '../../data/tweets';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';


export default class TweetsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tweets : []
        }
    }

    componentWillMount(){
        setTimeout(() => {
            this.setState({tweets: tweets});
        }, 2000);
    }


    render(){
        return (
            <div>
                <Link to={'/tweet/new'}> Crear Nuevo Tweet! </Link>
                {
                    this.state.tweets.length ?
                            this.state.tweets.map( (t, index) => {
                                return (
                                    <Tweet key={index} {...t}/>
                                )
                            })
                        :
                        <label>Cargado....</label>
                }
            </div>
        )
    }
}
