import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yeV0nBNNcM90so1GkoNpKRGP2DbpNjdqZw&usqp=CAU"/>
            </div>
            <div className={s.discription_Block}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bjgBf8txC_aovbuE2ANJY87PPbJoIsotuQ&usqp=CAU"/>
                Ava
            </div>
        </div>
    );
};

