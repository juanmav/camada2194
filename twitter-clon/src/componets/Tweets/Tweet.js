import React from 'react'
import { Link } from 'react-router-dom';

const Tweet = (props) => (
    <div>
        {props.message}
        <br/>
        <label> Autor: {props.author.name + ' ' + props.author.lastname} </label>
        <Link to={"/tweet/detail/" + props._id}>Ver comentarios </Link>
        <Link to={"/tweet/edit/" + props._id}> Editar</Link>
    </div>
);

export default Tweet;