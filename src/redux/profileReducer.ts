import {profileAPI, ProfileUserStatusType} from '../api/api';
import {Dispatch} from 'redux';


export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

// type ContactsType = {
//     'facebook': string
//     'website': null
//     'vk': string
//     'twitter': string
//     'instagram': string
//     'youtube': null
//     'github': string
//     'mainLink': null
// }


// export type ProfileDaTaType = {
//     aboutMe: string
//     contacts: ContactsType
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     userId: number
//     photos: PhotosType
// }

export type InitialProfileStateType = {
    postData: PostDataType[]
    profile: ProfileUserStatusType
    status: string | null
}

let initialProfileState: InitialProfileStateType = {
    postData: [
        {id: 1, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 5},
        {id: 2, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 15},

    ],
    profile: {
        aboutMe: '---------',
        contacts: {
            facebook: 'facebook.com',
            website: null,
            vk: 'vk.com/@vlad',
            twitter: 'https://twitter.com/@sdf',
            instagram: 'instagra.com/sds',
            youtube: null,
            github: 'github.com',
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'ищу работу ',
        fullName: 'Влад',
        userId: 23422,
        photos: {
            small: 'null',
            large: 'null',
        }
    },
    status: '-----'
}

export const profileReducer = (state = initialProfileState, action: AddPostType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostDataType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'DELETE-POST':
            return {
                ...state,
                postData: state.postData.filter(el => el.id !== action.id)
            }
        default:
            return state
    }
}

export type AddPostType = ReturnType<typeof addPostAC>
    // | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const deletePostAC = (id: number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

export const setUserProfile = (profile: ProfileUserStatusType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const setStatus = (status: string | null) => {
    return {
        type: 'SET-USER-STATUS',
        status
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch<AddPostType>) => {
    let response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch<AddPostType>) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch<AddPostType>) => {
    let response = await profileAPI.updateStatus(status)

    dispatch(setStatus(status))
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }


}



