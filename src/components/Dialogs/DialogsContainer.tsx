import React from 'react';
import {addMewssageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DialogsDataType, MessagesType} from '../../redux/TypeRedux';
import {Dispatch} from 'redux';


type mapStateToPropsType = {
    newMessageText: string
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
}

type mapDispatchToPropsType = {
    addMessageNew: (postMessage: string) => void
    onMessageNewChange: (body: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onMessageNewChange: (body: string) => {
            dispatch(onMessageChangeAC(body))
        },
        addMessageNew: (postMessage: string) => {
            dispatch(addMewssageAC(postMessage))
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

