import React from 'react';
import Post from './post';

export default class PostList extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {
                    this.props.posts.map((p, index) => {
                        return (
                            <Post key={index} title={p.title} body={p.body}/>
                        )
                    })
                }
            </div>
        )
    }
}
