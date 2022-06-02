import React from 'react';
import s from './Friend.module.css'


type FriendsType = {
    name: string
    foto: string
}

export const Friend: React.FC<FriendsType> = (props) => {

    return (
        <div className={s.friend}>
            <div className={s.item}>
                <img src={props.foto}/>
                <div>
                    {props.name}
                </div>

            </div>
        </div>
    );
};

