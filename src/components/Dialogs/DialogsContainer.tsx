import React from 'react';

import {addMewssageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
import {AppStoreType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';


type DialogsPropsType = {
    store: AppStoreType
    /*dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionPropsType) => void*/
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
const state= props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMewssageAC(state.newMessageText))
    }

    const onMessageChange = (body:string) => {

        props.store.dispatch(onMessageChangeAC(body))
    }

    return (
       <Dialogs onMessageNewChange={onMessageChange} addMessageNew={addMessage} newMessageText={state.newMessageText} dialogsData={state.dialogsData} messages={state.messages}/>
    );
};

