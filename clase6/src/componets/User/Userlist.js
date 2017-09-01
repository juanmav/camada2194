import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';

export default class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    borrarUser = (id) => {
        let updatedList = this.state.users.filter(u => u.id != id);
        this.setState({users: updatedList});
        console.log("LE aviso al servidor que quiero borrar este id:" + id);
    };

    render(){
        return (
            <div>
                <Link to="/users/new"> Crear Nuevo Usuario</Link>
                {
                    this.state.users.map( (u,index) => {
                        return (
                            <User key={index} {...u} borrarFn={this.borrarUser}/>
                        )
                    })
                }
            </div>
        )
    }
}

