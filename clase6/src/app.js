import React from 'react';
import { render } from 'react-dom';
import Leyenda from './componets/leyenda';
import LeyendaSinEstado from './componets/leyendaSinEstado';
import Blinker from './componets/blinker';
import PostList from './componets/postlist';
import { posts, users } from '../data/data';

import LifeCicle from './componets/LifeCicle';

import Register from './componets/Register';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            sacalo : false
        }
    }

    componentWillMount(){
        setTimeout(()=> {
            this.setState({sacalo: true})
        }, 10000)
    }

    render(){

        let leyendaData = {
            text: 'Hola',
            numero: 1,
            id: 1
        };

        return (
            <div>
                LeyendaSinEstado text={"Hola"} numero={1}/>
                <br/>
                <Leyenda text={"Chau"} numero={2}/>
                <Leyenda {...leyendaData}/>
                <br/>
                <Leyenda numero={3} id={3}/>
                <br/>
                {this.state.sacalo ? null : <LifeCicle/>}
                <br/>
                <Register/>
                <br/>
                <Register user={
                {
                    name: 'pepito',
                    lastname: 'rodriguez',
                    dni: '546324',
                    mail: 'pepe@asdasd',
                    sexo: 'Hombre'
                }
                }
                          props2 = {'asdasdasd'}
                />
                <br/>
                <PostList posts={posts}/>
            </div>
        )
    }

}

render(<App/>,document.getElementById('example'));