import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, Messagestype} from '../../App';


type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messages: Messagestype[]
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} foto={d.foto}/>)
    let messagesElemets = props.messages.map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                {messagesElemets}
            </div>
        </div>
    );
};

