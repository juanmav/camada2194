import React from 'react';
import { render } from 'react-dom';
import Leyenda from './componets/leyenda';
import Blinker from './componets/blinker';
import PostList from './componets/postlist';
import { posts, users } from '../data/data';


class App extends React.Component {

    constructor(){
        super();
    }

    render(){

        let leyendaData = {
            text: 'Hola',
            numero: 1,
            id: 1
        };

        return (
            <div>
                <Leyenda {...leyendaData}/>
                <br/>
                <Leyenda text={"Chau"} numero={2}/>
                <br/>
                <Leyenda numero={3} id={3}/>
                <br/>
                <PostList posts={posts}/>

            </div>
        )
    }

}

render(<App/>,document.getElementById('example'));