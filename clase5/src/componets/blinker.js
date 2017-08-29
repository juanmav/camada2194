import React from 'react';

export default class Blinker extends React.Component {

    constructor(){ // no le paso props
        super();
        this.state = {
            showText: true
        };

        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            })
        },2000);
    }

    render(){
        if (this.state.showText){
            return <div>{display}</div>
        } else {
            return null;
        }

    }
}