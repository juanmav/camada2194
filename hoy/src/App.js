import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let store = this.props.store;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <Counter
                        count={store.getState()}
                        onIncrement={ () => store.dispatch({ type: 'INCREMENT'})}
                        onDecrement={ () => store.dispatch({ type: 'DECREMENT'})}
                    />
                </div>
            </div>
        );
    }
}

export default App;
