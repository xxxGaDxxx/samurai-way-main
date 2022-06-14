import {addPostAC, onPostChangeAC, profileReducer} from './profileReducer';
import {addMewssageAC, dialogsReducer, onMessageChangeAC} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

 type PostDataType = {
    id: number
    message: string
    likesCount: number
}
 type DialogsDataType = {
    id: number
    name: string
    foto: string
}
 type MessagesType = {
    id: number
    message: string
    foto: string
    name: string
}
 type FriendsType = {
    id: number
    name: string
    foto: string
}
 type ProfilePagePropsType = {
    postData: PostDataType[]
    newPostText: string
}
 type DilogsPagePropsType = {
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
}
 type SidebarPropsType = {
    friends: FriendsType[]
}
 type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DilogsPagePropsType
    sidebarPage: SidebarPropsType
}

 type StorePropsType = {
    _state: StatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionPropsType) => void
}


 type ActionPropsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addMewssageAC>
    | ReturnType<typeof onMessageChangeAC>

 const store2: StorePropsType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 5},
                {id: 2, message: 'Hi, Wlad', likesCount: 15},
                {id: 3, message: 'How are you?', likesCount: 20},
                {id: 4, message: 'YO YO YO!!!', likesCount: 20},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebarPage: {
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
        },

    },
    _callSubscriber() {
        console.log('state change')
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer

    },
    getState() {
        return this._state
    },

    dispatch(action: ActionPropsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber()
    },
}


