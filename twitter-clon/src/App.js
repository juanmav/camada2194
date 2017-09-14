import React, { Component } from 'react';
import './App.css';
import TweetList from './componets/Tweets/TweetsList';
import Login from './componets/Login/Login';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TweetDetail from './componets/Tweets/TweetDetail';
import TweetForm from './componets/Tweets/TweetForm';
import CommentForm from './componets/Comments/CommentForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Twitter Clon!</h2>
                </div>
                <div className="App-intro">

                    <Router>
                        <div>
                            <Route path="/" exact={true} component={TweetList} />
                            <Route path="/login" exact={true} component={Login} />
                            <Route
                                path="/tweet/new"
                                exact={true}
                                component={TweetForm}
                            />
                            <Route
                                path="/tweet/edit/:tweetId"
                                exact={true}
                                render={ ({match}) => {
                                    return <TweetForm _id={match.params.tweetId}/>
                                }}
                            />
                            <Route
                                path="/tweet/detail/:tweetId"
                                exact={true}
                                render={({match}) => {
                                    return <TweetDetail _id={match.params.tweetId}/>
                                }}
                            />

                            <Route
                                path="/tweet/detail/:tweetId/comment/new"
                                exact={true}
                                render={({match}) => {
                                    return <CommentForm TweetId={match.params.tweetId}/>
                                }}
                            />

                        </div>
                    </Router>

                </div>
            </div>
        );
    }
}

export default App;
