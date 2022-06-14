import React from 'react';

import {addMewssageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DialogsDataType, MessagesType} from '../../redux/TypeRedux';



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

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        onMessageNewChange:(body:string)=>{
            dispatch(onMessageChangeAC(body))
        },
        addMessageNew:()=>{
            dispatch(addMewssageAC(dispatch.getState().newMessageText))
        },
    }
}
export
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

