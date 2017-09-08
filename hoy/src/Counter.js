import React from 'react';

const Counter = (props) => (
    <div>
        <h1>{ props.count }</h1>
        <button onClick={props.onIncrement}>Incrementar</button>
        <button onClick={props.onDecrement}>Decrementar</button>
    </div>
);

export default Counter;