import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {ActionPropsType, DialogsDataType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionPropsType) => void
    /*addMessage: (postMessage: string) => void
    updateNewMessageText: (newMessage: string) => void*/
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} foto={d.foto}/>)
    let messagesElemets = props.messages.map((m) => <Message message={m.message} key={m.id} foto={m.foto}
                                                             name={m.name}/>)


    const addMewssage = () => {
        props.dispatch({type: 'ADD-MESSAGE', postMessage: props.newMessageText})
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                {messagesElemets}
                <div>
                    <div>
                        <textarea value={props.newMessageText} onChange={onMessageChange}></textarea>
                    </div>
                    <button onClick={addMewssage}>Add Message</button>
                </div>
            </div>

        </div>
    );
};

