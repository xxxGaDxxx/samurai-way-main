import React, {ComponentType} from 'react';
import {sendMessageAC, DialogsDataType, MessagesType} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../Hoc/withAuthRedirect';


type MapStateToPropsType = {
    newMessageText: string
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
}

type MapDispatchToPropsType = {
    addMessageNew: (newMessageBody: string) => void
    // onMessageNewChange: (body: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        // onMessageNewChange: (body: string) => {
        //     dispatch(onMessageChangeAC(body))
        // },
        addMessageNew: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        },
    }
}
// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

