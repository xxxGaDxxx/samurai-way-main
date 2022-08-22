import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesType} from '../../redux/dialogsReducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


type DialogsPropsType = {
    onMessageNewChange: (body: string) => void
    addMessageNew: (postMessage: string) => void
    newMessageText: string
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
}

type FormAddMessageType = {
    newMessageText: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElemets = props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} foto={d.foto}/>)
    let messagesElemets = props.messages.map((m) => <Message message={m.message} key={m.id} name={m.name} foto={m.foto}/>)

    // const onAddMessage = () => {
    //     props.addMessageNew(props.newMessageText)
    // }

    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.onMessageNewChange(body)
    // }

    const addNewMessage = (values: FormAddMessageType) => {
        console.log(values.newMessageText)
        props.addMessageNew(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                {messagesElemets}
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <textarea value={props.newMessageText} onChange={onMessageChange}></textarea>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button onClick={onAddMessage}>Send</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    );
};

const AddMessageForm: React.FC<InjectedFormProps<FormAddMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormAddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm);

