import React from 'react';
import { render } from 'react-dom';
import Leyenda from './componets/leyenda';

class App extends React.Component {

    constructor(){
        super();
    }

    render(){

        let data = {
            text: 'Hola',
            numero: 1,
            id: 1
        };

        return (
            <div>
                <Leyenda {...data}/>
                <br/>
                <Leyenda text={"Chau"} numero={2}/>
                <br/>
                <Leyenda numero={3} id={3}/>
            </div>
        )
    }

}

render(<App/>,document.getElementById('example'));