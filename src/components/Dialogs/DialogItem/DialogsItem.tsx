import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string
    id: number
    foto: string
}

export const DialogItem: React.FC<DialogPropsType> = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src={props.foto}/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
