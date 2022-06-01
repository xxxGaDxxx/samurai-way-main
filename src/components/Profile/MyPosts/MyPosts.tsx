import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi,Pascha', likesCount: 5},
        {id: 2, message: 'Hi, Wlad', likesCount: 15},
        {id: 3, message: 'How are you?', likesCount: 20},
        {id: 4, message: 'YO YO YO!!!', likesCount: 20},
    ]

    let postsElement = postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts_Block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
                {/*<Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[2].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>*/}
            </div>
        </div>
    );
};



