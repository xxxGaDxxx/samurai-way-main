import {ActionPropsType, DilogsPagePropsType, MessagesType} from './state';


export const DialogsReducer = (state: DilogsPagePropsType, action: ActionPropsType) => {
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





