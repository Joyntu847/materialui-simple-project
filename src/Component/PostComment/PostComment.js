import React from 'react';

const PostComment = (props) => {
    const {id,name,email,body} = props.PostDetail;

    const commentStyle={
        margin: '10px',
        padding: '20px'
    }
    return (
        <div style={commentStyle}>
            
            <h5 >{name}</h5>
            <p>email: {email}</p>
            <p><small>body: {body}</small></p>
        </div>
    );
};

export default PostComment;