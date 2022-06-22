

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    postData: PostDataType[]
    newPostText: string
}

let initialProfileState = {
    postData: [
        {id: 1, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 5},
        {id: 2, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 15},

    ],
    newPostText: '',
}

export const profileReducer = (state: InitialProfileStateType = initialProfileState, action: AddPostType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostDataType = {
                id: 5,
                message: action.postPost,
                likesCount: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',

            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state
    }
}

export type AddPostType= ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>

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



