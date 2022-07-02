import {PhotosType} from './usersReducer';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type ContactsType = {
    'facebook': string
    'website': null
    'vk': string
    'twitter': string
    'instagram': string
    'youtube': null
    'github': string
    'mainLink': null
}


export type ProfileDaTaType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type InitialProfileStateType = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileDaTaType
}

let initialProfileState = {
    postData: [
        {id: 1, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 5},
        {id: 2, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 15},

    ],
    newPostText: '',
    profile: {
        aboutMe: 'я круто чувак 1001%',
        contacts: {
            facebook: 'facebook.com',
            website: null,
            vk: 'vk.com/dimych',
            twitter: 'https://twitter.com/@sdf',
            instagram: 'instagra.com/sds',
            youtube: null,
            github: 'github.com',
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'не ищу, а дурачусь',
        fullName: 'samurai dimych',
        userId: 2,
        photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
        }
    },
}

export const profileReducer = (state = initialProfileState, action: AddPostType): InitialProfileStateType => {
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
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export type AddPostType = ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof setUserProfile>

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

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}



