import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const postStyle={
        border: '1px solid red',
        margin: '20px',
        padding: '20px'
}

const Post = (props) => {
    const {id,title,body} =  props.post;

    const history =useHistory();
    function handleClick(postId){
       // console.log('see Details button clicked')
           const url=`post/${postId}`;
           history.push(url)
    }
    return (
        <div style={postStyle}>
            <h3>Id: {id}</h3>
            <h5>Title: {title}</h5>
            <p>Body:- {body}</p>
            <Button variant="contained" color="primary" onClick={()=>handleClick(id)}>
     See Details
    </Button>
            
        </div>
    );
};

export default Post;