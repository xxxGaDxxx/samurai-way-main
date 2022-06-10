import React from 'react';
import s from './Friends.module.css'
import {FriendsItem} from './FriendItem/FriendsItem';
import {FriendsType} from '../../redux/store2';

type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends: React.FC<FriendsPropsType> = (props) => {
    let dialogsElemets = props.friends.map((d) => <FriendsItem name={d.name} id={d.id} foto={d.foto}/>)
    return (
        <div className={s.friends}>
            <div className={s.friends_item}>
                {dialogsElemets}
            </div>
        </div>
    );
};

