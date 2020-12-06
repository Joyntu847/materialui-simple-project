import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';

const PostDetails = () => {
    const {postId} = useParams();

    const [postDetail,setPostDetail] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    },[])
    return (
        <div>
            <h1>This is postDetail: {postId} </h1>
          {
              postDetail.map(pd => <PostComment PostDetail={pd}></PostComment>)
          }
        </div>
    );
};

export default PostDetails;