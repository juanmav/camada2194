import React from 'react';

export default class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleName = (event) => {
        console.log(event.target.value);
        this.setState( { username: event.target.value })
    };

    handlePassword = (event) => {
        console.log(event.target.value);
        this.setState( { password: event.target.value })

    };

    login = () => {
        console.log('LoginnnnnnnnnnnN!!!!');
        console.log(this.state);
    };

    render(){
        return (
            <div>
                <label>username: </label>
                <input onChange={this.handleName}/>
                <br/>
                <label>password: </label>
                <input type="password" onChange={this.handlePassword}/>
                <br/>
                <button onClick={this.login}>Login!</button>

                Registrarme
                </div>
        )
    }
}
