import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, Messagestype} from '../../redux/state';



type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messages: Messagestype[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} foto={d.foto}/>)
    let messagesElemets = props.messages.map((m) => <Message message={m.message} foto={m.foto} name={m.name}/>)

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

