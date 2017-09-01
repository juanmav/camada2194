import React from 'react';

export default class UserForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            lastname: '',
            dni: '',
            email: '',
            sex:''
        };

        this.genders = ['', 'Hombre', 'Mujer', 'Sin Definir']
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users/'+ this.props.id)
            .then(response => response.json())
            .then(user => this.setState({...user}))
    }

    save = () => {
        if(this.props.id){
            console.log('EDITO usuario');
            console.log(this.state);
        } else {
            console.log('CREAR usuario');
            console.log(this.state);
        }

        window.location.href = '/users/'
    };

    handleChange = (event, field) => {
        let o = {};
        o[field] = event.target.value; // o.name o['name'] field='name' o[field];
        this.setState(o); // { name: 'asd'}
    };

    render(){
        console.log(this.state);
        return (
            <div>
                <label>Nombre</label>
                <input onChange={(e) => this.handleChange(e,'name')} value={this.state.name} type="text"/>
                <br/>
                <label>Email</label>
                <input onChange={(e) => this.handleChange(e,'email')} value={this.state.email} type="text"/>
                <br/>
                <button onClick={this.save}>{this.props.id ? 'Salvar!' : 'Crear!'}</button>
            </div>
        )
    }

}