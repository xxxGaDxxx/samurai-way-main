import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesType} from '../../redux/TypeRedux';



type DialogsPropsType = {
    onMessageNewChange:(body:string)=>void
    addMessageNew:(postMessage: string)=>void
    newMessageText: string
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
   /* dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionPropsType) => void*/
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} foto={d.foto}/>)
    let messagesElemets = props.messages.map((m) => <Message message={m.message} key={m.id} name={m.name} foto={m.foto}/>)


    const onAddMessage = () => {
        props.addMessageNew(props.newMessageText)
  /*      props.dispatch(addMewssageAC(props.newMessageText))*/
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.onMessageNewChange(body)
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
                    <div>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

