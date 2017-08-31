import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Root from './layout/Root';
import Header from './layout/Header';
import Main from './layout/Main';
import Sidebar from './layout/Sidebar';
import About from './pages/About';
import About2 from './pages/About2';


class App extends React.Component {

    constructor(){
        super();
    }

    componentWillMount(){

    }

    render(){
        return (
            <Root>
                <Header>
                    Mi aplicacion con Router
                </Header>
                <Router>
                    <div>
                        <Sidebar>
                            <li> <Link to="/about">About</Link> </li>
                            <li> <Link to="/about2">About</Link> </li>
                        </Sidebar>
                        <Main>
                            <Route path="/about" component={About}/>
                            <Route path="/about2" component={About2}/>
                        </Main>
                    </div>
                </Router>
            </Root>
        )
    }

}

render(<App/>,document.getElementById('example'));