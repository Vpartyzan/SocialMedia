import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

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
                {props.posts}
            </div>
        </div>
    )
}

export default MyPosts;