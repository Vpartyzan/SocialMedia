import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likeCount="1" />
                <Post message="It's my first post" likeCount="2" />
            </div>
        </div>
    )
}

export default MyPosts;