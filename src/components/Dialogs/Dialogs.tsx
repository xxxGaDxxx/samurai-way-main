import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
    addMessage: (postMessage: string) => void
    NewMessageText: string
    updateNewMessageText: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} foto={d.foto}/>)
    let messagesElemets = props.messages.map((m) => <Message message={m.message} key={m.id} foto={m.foto}
                                                             name={m.name}/>)


    const addMewssage = () => {
        props.addMessage(props.NewMessageText)
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
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
                        <textarea value={props.NewMessageText} onChange={onMessageChange}></textarea>
                    </div>
                    <button onClick={addMewssage}>Add Message</button>
                </div>
            </div>

        </div>
    );
};

