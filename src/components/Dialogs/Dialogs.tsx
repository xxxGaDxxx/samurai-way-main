import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Wlad'},
        {id: 1, name: 'Margo'},
        {id: 1, name: 'Pascha'},
        {id: 1, name: 'Radic'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you'},
        {id: 3, message: 'Yo'},
    ]

    let dialogsElemets = dialogsData.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })
    let messagesElemets = messages.map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElemets}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElemets}
                {/*    <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>*/}
            </div>
        </div>
    );
};

