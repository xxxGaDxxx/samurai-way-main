import React from 'react';
import s from './../Friends.module.css'
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string
    id: number
    foto:string
}

export const FriendsItem: React.FC<DialogPropsType> = (props) => {

    return (
        <div className={`${s.friends} ${s.active}`}>
            <img src={props.foto}/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

