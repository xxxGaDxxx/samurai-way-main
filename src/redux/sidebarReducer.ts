import {ActionPropsType, FriendsType} from './store2';


type initialDialogsStateType = {
    friends: FriendsType[]
}

let initialDialogsState = {

    friends: [
        {
            id: 1,
            name: 'Margo',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
        },
        {
            id: 2,
            name: 'Pascha',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU'
        },
        {
            id: 3,
            name: 'Radic',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU'
        },
    ]
}


export const sidebarReducer = (state: initialDialogsStateType = initialDialogsState, action: ActionPropsType): initialDialogsStateType => {
    switch (action.type) {

        default:
            return state
    }
};

