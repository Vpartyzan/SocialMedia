import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.content}>
            My post
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <Post message="Hi, how are you?" likeCount="1" />
            <Post message="It's my first post" likeCount="2" />
        </div>
    )
}

export default MyPosts;