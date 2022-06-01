import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yeV0nBNNcM90so1GkoNpKRGP2DbpNjdqZw&usqp=CAU"/>
            </div>
            <div>
                ava
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bjgBf8txC_aovbuE2ANJY87PPbJoIsotuQ&usqp=CAU"/>
            </div>
            <MyPosts/>
        </div>
    );
};

