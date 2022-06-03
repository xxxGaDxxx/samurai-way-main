export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
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
export type FriendsType = {
    id: number
    name: string
    foto: string
}
export type ProfilePagePropsType = {
    postData: PostDataType[]
    newPostText: string
}
export type DilogsPagePropsType = {
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
    newMessageText: string
}
export type SidebarPropsType = {
    friends: FriendsType[]
}
export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DilogsPagePropsType
    sidebar: SidebarPropsType
}

export type StorePropsType = {
    _state: StatePropsType
    _callSubscriber: () => void
    /*addPost: (postPost: string) => void
    updateNewPostText: (newText: string) => void*/
    /* addMessage: (postMessage: string) => void
     updateNewMessageText: (newMessage: string) => void*/
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionPropsType) => void
}

export type ActionPropsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof onPostChangeActionCreator>
    | ReturnType<typeof addMewssageActionCreator>
    | ReturnType<typeof onMessageChangeActionCreator>

export const store: StorePropsType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi,Pascha', likesCount: 5},
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
        },
        sidebar: {
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

    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            const newPost: PostDataType = {
                id: 5,
                message: action.postPost,
                likesCount: 0,
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessagesType = {
                id: 5,
                name: 'Wlad',
                message: action.postMessage,
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber()
        }
    },
}

export const addPostActionCreator = (postPost: string) => {
    return {
        type: 'ADD-POST',
        postPost: postPost
    }
}
export const onPostChangeActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    }
}
export const addMewssageActionCreator = (postMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        postMessage: postMessage
    }
}
export const onMessageChangeActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    }
}