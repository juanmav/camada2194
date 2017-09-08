import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render();

store.subscribe(render);