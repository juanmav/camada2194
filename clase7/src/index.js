import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import  reducers from './reducers';


const store = createStore(reducers);

const render = () => {
    ReactDOM.render(<App
        value={store.getState()}
        onIncrement={ () => store.dispatch({type: 'INCREMENT'})}
        onDecrement={ () => store.dispatch({type: 'DECREMENT'})}
    />, document.getElementById('root'));
};

render();

store.subscribe(render);
