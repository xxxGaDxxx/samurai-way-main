import {addPostAC, onPostChangeAC} from './profileReducer';
import {addMewssageAC, onMessageChangeAC} from './dialogsReducer';

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
    sidebarPage: SidebarPropsType
}

export type StorePropsType = {
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