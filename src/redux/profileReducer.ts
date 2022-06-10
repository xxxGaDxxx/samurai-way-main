import {ActionPropsType, PostDataType} from './store2';

type initialProfileStateType={
    postData: PostDataType[]
    newPostText: string
}

let initialPropfileState = {
    postData: [
        {id: 1, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 5},
        {id: 2, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 15},

    ],
    newPostText: '',
}

export const profileReducer = (state:initialProfileStateType =initialPropfileState, action: ActionPropsType):initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostDataType = {
                id: 5,
                message: action.postPost,
                likesCount: 0,
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}
export const addPostAC = (postPost: string) => {
    return {
        type: 'ADD-POST',
        postPost: postPost
    } as const
}
export const onPostChangeAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}



