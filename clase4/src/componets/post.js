import React from 'react';

export default class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter: this.props.initialCounter,
            text: 'pepe'
        }
    }

    plusOne = () => {
        console.log('sumame uno!');
        this.setState({ counter: this.state.counter +1 });

        // Aca deberiamos actualizar en el servidor el dato del contado.
    };

    handleInput = (event) => {
        console.log(event.target.value);
      this.setState({ text: event.target.value })
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <button onClick={this.plusOne}> +1 </button>
                Cantidad de +1: {this.state.counter}
                <button onClick={() => this.props.borrarFn(this.props.id)}> Borrame </button>
                <input onChange={this.handleInput} value={this.state.text}/>
            </div>
        )
    }

}