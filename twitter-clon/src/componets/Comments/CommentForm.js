import React from 'react'

export default class CommentForm extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                Formulario de Comentario! {this.props.TweetId}
            </div>
        )
    }
}