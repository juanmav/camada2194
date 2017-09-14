import React from 'react';
import tweets from '../../data/tweets';

export default class TweetForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet : {
                message: ''
            }
        }
    }

    componentWillMount(){
        if (this.props._id){
            console.log('Es una edicion!');
            // fetch....!
            let tweet = tweets.find(t => t._id == this.props._id);
            this.setState({tweet});

        } else {
            console.log('A CREAR!!!');
        }
    }


    handleTweet = (e) => {
        console.log(e.target.value);
        let tweet = this.state.tweet;
        tweet.message = e.target.value;
        this.setState({ tweet });
    };

    save = () => {
        setTimeout(() => {
            console.log(this.state);
            alert('Creado!');
            window.location.href = '/';
        }, 500);
    };

    render(){
        return (
            <div>
                <label>Message</label>
                <input
                    type="text"
                    onChange={this.handleTweet}
                    value={this.state.tweet.message}/>
                <button onClick={this.save}>
                    {this.props._id ? 'Salvar!' : 'Crear!'}
                </button>
            </div>
        )
    }
}