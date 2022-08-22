

export type DialogsDataType = {
    id: number
    name: string
    foto: string
}

export type MessagesType = {
    id: number
    message: string
    foto: string
    name: string
}
export type InitialDialogsStateType = {
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
            message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
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


export const dialogsReducer = (state: InitialDialogsStateType = initialDialogsState, action: AddMessage): InitialDialogsStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessagesType = {
                id: 5,
                name: 'Wlad',
                message: action.postMessage,
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],

            }
        }
        // case 'UPDATE-NEW-MESSAGE-TEXT': {
        //     return {
        //         ...state,
        //         newMessageText: action.newMessage
        //     }
        // }
        default:
            return state
    }
}

export type AddMessage= ReturnType<typeof sendMessageAC>
    // | ReturnType<typeof onMessageChangeAC>

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'ADD-MESSAGE',
        postMessage:newMessageBody
    } as const
}
// export const onMessageChangeAC = (newMessageBody: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-TEXT',
//         newMessage: newMessageBody
//     } as const
// }





