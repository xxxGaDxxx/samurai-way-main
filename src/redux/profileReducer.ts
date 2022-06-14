import {ActionPropsType, PostDataType} from './TypeRedux';


export type InitialProfileStateType ={
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

export const profileReducer = (state:InitialProfileStateType =initialPropfileState, action: ActionPropsType):InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostDataType = {
                id: 5,
                message: action.postPost,
                likesCount: 0,
            }
            let stateCopy={...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy= {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
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



