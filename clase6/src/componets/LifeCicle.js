import React from 'react';

export default class LifeCicle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showText: true
        };

        this.interval = setInterval(() => {
            console.log('cambio de estado');
            this.setState({
                showText: !this.state.showText
            })
        },2000);

    }

    componentWillMount(){
        console.log('Se va a montar el componente!');
    }

    render(){
            if (this.state.showText){
                return <div> Hola Ciclo de vida</div>
            } else {
                return null;
            }
    }

    componentDidMount(){
        console.log('Ya lo tengo en pantalla');
    }

    //-----------------------------------------//

    componentWillReceiveProps(nextProps){
        console.log('Toma nuevas propiedades');
    }

    shouldComponentUpdate(nextProps){
        console.log('Lo actualizo?');
        return true;
    }

    componentWillUpdate(){
        console.log('Lo voy actualizar');
    }

    // render()

    componentDidUpdate(){
        console.log('Ya me actualize');
    }

    componentWillUnmount(){
        console.log('Voy a sacar el componente');
        clearInterval(this.interval);
    }
}
