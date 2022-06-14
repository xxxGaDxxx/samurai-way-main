import React from 'react';
import s from './Friends.module.css'

import {FriendsType} from '../../redux/TypeRedux';


type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends = () => {
  /*  let dialogsElemets = props.friends.map((d) => <FriendsItem name={d.name} id={d.id} foto={d.foto}/>)*/
    return (
        <div className={s.friends}>
            <div className={s.friends_item}>
               {/* {dialogsElemets}*/}
            </div>
        </div>
    );
};

