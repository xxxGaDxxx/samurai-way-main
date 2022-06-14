import React from 'react';

import {addMewssageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DialogsDataType, MessagesType} from '../../redux/TypeRedux';
import {Dispatch} from 'redux';



/*type DialogsPropsType = {
    store: AppStoreType
    /!*dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionPropsType) => void*!/
}*/

/*export const DialogsContainer = () => {
    const state = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMewssageAC(state.newMessageText))
    }

    const onMessageChange = (body: string) => {

        props.store.dispatch(onMessageChangeAC(body))
    }

    return (
        <Dialogs onMessageNewChange={onMessageChange}
                 addMessageNew={addMessage}
                 newMessageText={state.newMessageText}
                 dialogsData={state.dialogsData}
                 messages={state.messages}/>
    );
};*/

type mapStateToPropsType={
    newMessageText:string
        dialogsData:DialogsDataType[]
    messages:MessagesType[]
}

type mapDispatchToPropsType={
    addMessageNew:(postMessage: string)=>void
    onMessageNewChange:(body:string)=>void
}

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        onMessageNewChange:(body:string)=>{
            dispatch(onMessageChangeAC(body))
        },
        addMessageNew:(postMessage: string)=>{
            dispatch(addMewssageAC(postMessage))/*dispatch.getState().newMessageText*/
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

