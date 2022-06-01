import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    message: string
    foto: string
    name: string
}
export const Message: React.FC< MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <img src={props.foto} alt={'avatar'} className={s.avatar}/>
            <div className={s.angel}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.title}>{props.message}</div>

            </div>
        </div>
    )
}

