import React from 'react';

export default class Post extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }

}