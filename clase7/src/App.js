import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
    return (
        <div className="App">
            <h1>{props.value}</h1>
            <button onClick={props.onIncrement}>Incrementar</button>
            <button onClick={props.onDecrement}>Decrementar</button>
        </div>
    );
};


export default App;
