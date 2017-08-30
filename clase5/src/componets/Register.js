import React from 'react';

export default class Register extends React.Component {

    constructor(props){
        super(props);

        if (props.user){
            this.state = props.user;
        } else {
            this.state = {
                name: '',
                lastname: '',
                dni: '',
                email: '',
                sex:''
            };
        }


        this.genders = ['', 'Hombre', 'Mujer', 'Sin Definir']
    }

    save = () => {
        console.log('crear usuario');
        console.log(this.state);
    };

    handleChangeName = (event) =>{
        this.setState({ name: event.target.value})
    };

    handleChangeLastname = (event) => {
        this.setState({ lastname: event.target.value})
    };

    handleChange = (event, field) => {
        let o = {};
        o[field] = event.target.value; // o.name o['name'] field='name' o[field];
        this.setState(o); // { name: 'asd'}
        this.isValid();
    };

    isValid = () => {
        let valid = {};

        valid.nombreValid =  this.state.name.length < 3;
        valid.lastnameValid = this.state.lastname.length < 4;

        this.state(valid);
    };

    render(){
        console.log(this.state);
        return (
            <div>
                <label>Nombre</label>
                <input onChange={(e) => this.handleChange(e,'name')} value={this.state.name} type="text"/>
                { this.state.nombreValid ? <label>Nombre corto!</label> : ''}
                <br/>
                <label>Apellido</label>
                <input onChange={(e) => this.handleChange(e,'lastname')} value={this.state.lastname}type="text"/>
                <br/>
                <label>DNI</label>
                <input onChange={(e) => this.handleChange(e,'dni')} value={this.state.dni} type="text"/>
                <br/>
                <label>Email</label>
                <input onChange={(e) => this.handleChange(e,'mail')} value={this.state.mail} type="text"/>
                <br/>
                <select onChange={(e) => this.handleChange(e, 'sex')} value={this.state.sex}>
                    {
                        this.genders.map( (g, index) => {
                            return <option key={index} value={g}>{g}</option>
                        })
                    }
                </select>
                <br/>
                <button onClick={this.save}>Registrame!</button>
            </div>
        )
    }

}