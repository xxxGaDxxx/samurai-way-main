import {ActionPropsType, DialogsDataType, MessagesType, } from './store2';

type initialDialogsStateType={
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
}

let initialDialogsState = {
    dialogsData: [
        {
            id: 1,
            name: 'Wlad',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
        },
        {
            id: 2,
            name: 'Margo',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
        },
        {
            id: 3,
            name: 'Pascha',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU'
        },
        {
            id: 4,
            name: 'Radic',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU'
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Hi',
            name: 'Wlad',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
        },
        {
            id: 2,
            message: 'How is you',
            name: 'Margo',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
        },
        {
            id: 3,
            message: 'Yo',
            name: 'Wlad',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
        },
    ],
    newMessageText: '',
}


export const dialogsReducer = (state:initialDialogsStateType=initialDialogsState, action: ActionPropsType):initialDialogsStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessagesType = {
                id: 5,
                name: 'Wlad',
                message: action.postMessage,
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.newMessage
            return state
        }
        default:
            return state
    }
}
export const addMewssageAC = (postMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        postMessage: postMessage
    } as const
}
export const onMessageChangeAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}




