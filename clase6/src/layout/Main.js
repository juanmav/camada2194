import React from 'react';

export default class Main extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={myStyle} className="main" {...this.props}/>
        )
    }
}

const myStyle = {
    width: '70%',
    float: 'left'
};