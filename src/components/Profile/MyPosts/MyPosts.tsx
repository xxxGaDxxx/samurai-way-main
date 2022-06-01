import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.item}>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi,Pascha' likesCount={5}/>
            <Post message='Hi, Wlad' likesCount={15}/>
            <Post message='How are you?' likesCount={10}/>
        </div>
    );
};



