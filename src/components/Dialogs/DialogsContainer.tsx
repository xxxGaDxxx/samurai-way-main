import React from 'react';
import {addMewssageAC, DialogsDataType, MessagesType, onMessageChangeAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

import {Dispatch} from 'redux';


type MapStateToPropsType = {
    newMessageText: string
    dialogsData: DialogsDataType[]
    messages: MessagesType[]

    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessageNew: (postMessage: string) => void
    onMessageNewChange: (body: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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

